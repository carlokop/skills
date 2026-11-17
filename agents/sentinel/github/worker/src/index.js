// Sentinel webhook-ontvanger (Cloudflare Worker).
//
// Ontvangt webhooks van de private GitHub App "ck-sentinel" en start een review
// alleen als:
//   - de signatuur klopt (WEBHOOK_SECRET),
//   - het een nieuwe comment op een pull request is,
//   - de comment een regel bevat die begint met "@ck-sentinel",
//   - de schrijver in ALLOWED_USERS staat en de repo van OWNER is.
// Dan zet hij een 👀 op de comment en start hij de workflow in de private
// runner-repo. Lukt dat niet, dan plaatst hij een ⚠️-comment op de PR.

const API = "https://api.github.com";
const UA = "ck-sentinel-webhook";

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") return text("Sentinel webhook", 200);

    const raw = await request.text();
    const ok = await verifySignature(env.WEBHOOK_SECRET, raw, request.headers.get("x-hub-signature-256"));
    if (!ok) return text("ongeldige signatuur", 401);

    const event = request.headers.get("x-github-event");
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      return text("ongeldige JSON", 400);
    }

    const job = parseTrigger(event, payload, env);
    if (!job) return text("genegeerd", 202);

    ctx.waitUntil(start(job, env).catch((e) => console.error("sentinel start mislukt", e)));
    return text(`gestart: ${job.reviewType} review ${job.repo}#${job.pr}`, 202);
  },
};

// ---------- trigger herkennen ----------

export function parseTrigger(event, p, env) {
  if (event !== "issue_comment" && event !== "pull_request_review_comment") return null;
  if (p.action !== "created" || !p.comment || !p.repository) return null;

  const owner = String(env.OWNER || "").toLowerCase();
  if (p.repository.owner?.login?.toLowerCase() !== owner) return null;

  const allowed = String(env.ALLOWED_USERS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const user = p.comment.user?.login?.toLowerCase();
  if (!user || !allowed.includes(user) || p.comment.user?.type === "Bot") return null;

  const reviewType = parseCommand(p.comment.body || "");
  if (!reviewType) return null;

  let pr, commentKind;
  if (event === "issue_comment") {
    if (!p.issue?.pull_request) return null; // comment op een issue, geen PR
    pr = p.issue.number;
    commentKind = "issue";
  } else {
    pr = p.pull_request?.number;
    commentKind = "review";
  }
  if (!Number.isInteger(pr)) return null;

  return {
    repo: p.repository.full_name,
    repoId: p.repository.id,
    pr,
    commentId: p.comment.id,
    commentKind,
    reviewType,
    installationId: p.installation?.id,
  };
}

// Alleen een regel die met @ck-sentinel begint telt (geen citaat met ">", geen
// vermelding midden in een zin). Geeft "code" of "security", of null.
export function parseCommand(body) {
  for (const line of body.split(/\r?\n/)) {
    const m = line.trim().match(/^@ck-sentinel\b(.*)$/i);
    if (!m) continue;
    return /\bsecurity\b/i.test(m[1]) ? "security" : "code";
  }
  return null;
}

// ---------- starten ----------

async function start(job, env) {
  const token = await installationToken(env, job.installationId, job.repoId);
  const [owner, repo] = job.repo.split("/");

  const reactionPath =
    job.commentKind === "issue"
      ? `/repos/${owner}/${repo}/issues/comments/${job.commentId}/reactions`
      : `/repos/${owner}/${repo}/pulls/comments/${job.commentId}/reactions`;
  await gh(`${API}${reactionPath}`, token, { method: "POST", body: { content: "eyes" } }).catch((e) =>
    console.error("👀 mislukt", e),
  );

  const runner = env.RUNNER_REPO; // bijv. carlokop/sentinel-runner
  const res = await fetch(`${API}/repos/${runner}/actions/workflows/${env.RUNNER_WORKFLOW || "sentinel.yml"}/dispatches`, {
    method: "POST",
    headers: headers(env.RUNNER_TOKEN),
    body: JSON.stringify({
      ref: env.RUNNER_REF || "main",
      inputs: {
        repo: job.repo,
        pr: String(job.pr),
        comment_id: String(job.commentId),
        comment_kind: job.commentKind,
        review_type: job.reviewType,
      },
    }),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 200);
    console.error("dispatch mislukt", res.status, detail);
    const body =
      `⚠️ Niet goedgekeurd — ${job.reviewType === "security" ? "securityreview" : "codereview"}\n\n` +
      `De review kon niet starten: de runner gaf HTTP ${res.status}. Controleer RUNNER_TOKEN en RUNNER_REPO van de webhook.`;
    await gh(`${API}/repos/${owner}/${repo}/issues/${job.pr}/comments`, token, { method: "POST", body: { body } });
  }
}

// ---------- GitHub App-authenticatie ----------

async function installationToken(env, installationId, repoId) {
  if (!installationId) throw new Error("geen installation id in de webhook");
  const jwt = await appJwt(env.APP_ID, env.APP_PRIVATE_KEY);
  const res = await gh(`${API}/app/installations/${installationId}/access_tokens`, jwt, {
    method: "POST",
    body: { repository_ids: [repoId], permissions: { issues: "write", pull_requests: "write" } },
  });
  return res.token;
}

export async function appJwt(appId, pem) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({ iat: now - 60, exp: now + 540, iss: String(appId) }));
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToPkcs8(pem),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(`${header}.${claims}`));
  return `${header}.${claims}.${b64url(new Uint8Array(sig))}`;
}

// GitHub levert een PKCS#1-sleutel ("BEGIN RSA PRIVATE KEY"); WebCrypto wil PKCS#8.
export function pemToPkcs8(pem) {
  const isPkcs1 = pem.includes("BEGIN RSA PRIVATE KEY");
  const der = Uint8Array.from(atob(pem.replace(/-----[^-]+-----/g, "").replace(/\s+/g, "")), (c) => c.charCodeAt(0));
  if (!isPkcs1) return der.buffer;
  const algId = Uint8Array.from([0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00]);
  const version = Uint8Array.from([0x02, 0x01, 0x00]);
  const octet = concat(Uint8Array.from([0x04]), derLength(der.length), der);
  const inner = concat(version, algId, octet);
  return concat(Uint8Array.from([0x30]), derLength(inner.length), inner).buffer;
}

function derLength(n) {
  if (n < 0x80) return Uint8Array.from([n]);
  const bytes = [];
  while (n > 0) {
    bytes.unshift(n & 0xff);
    n >>= 8;
  }
  return Uint8Array.from([0x80 | bytes.length, ...bytes]);
}

// ---------- hulpfuncties ----------

export async function verifySignature(secret, body, header) {
  if (!secret || !header || !header.startsWith("sha256=")) return false;
  const hex = header.slice(7);
  if (!/^[0-9a-f]{64}$/i.test(hex)) return false;
  const sig = Uint8Array.from(hex.match(/../g), (h) => parseInt(h, 16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "verify",
  ]);
  return crypto.subtle.verify("HMAC", key, sig, new TextEncoder().encode(body)); // tijd-constant
}

async function gh(url, token, { method = "GET", body } = {}) {
  const res = await fetch(url, { method, headers: headers(token), body: body ? JSON.stringify(body) : undefined });
  if (!res.ok) throw new Error(`${method} ${url}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  return res.status === 204 ? null : res.json();
}

function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": UA,
    "Content-Type": "application/json",
  };
}

function b64url(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function concat(...parts) {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let i = 0;
  for (const p of parts) {
    out.set(p, i);
    i += p.length;
  }
  return out;
}

function text(msg, status) {
  return new Response(msg, { status, headers: { "content-type": "text/plain; charset=utf-8" } });
}
