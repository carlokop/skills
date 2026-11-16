# Web Platform Security (browser side)

Details behind the browser rules in `security-hardening`. Company policy applies: only Baseline Widely available features (current and previous Chrome, Edge, Firefox, Safari, desktop and mobile), plus approved K24 exceptions (a newer feature older browsers ignore without harm, without polyfill or fallback code; here: CSP reporting), no polyfills, no new libraries or CDN imports outside the build contract (K04, K05). The CSP and header policy per project is set by Atlas; this file describes the preferred shape, not a mandate over that policy.

## Headers and CSP

### Strict CSP (preferred shape)

```http
Content-Security-Policy: script-src 'nonce-{RANDOM}' 'strict-dynamic'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'
```

- `script-src` with a per-response nonce plus `'strict-dynamic'` is the main XSS control: scripts loaded by a nonced script are trusted, anything injected is not [mwg:security].
- Static or cached HTML (SPA on static hosting) cannot carry a per-response nonce: list `sha256-…` hashes of the inline bootstrap scripts instead, with `'strict-dynamic'` [mwg:security].
- `object-src 'none'` blocks plugin content; `base-uri 'none'` blocks `<base>` hijacking of relative URLs; `form-action 'self'` is an optional extra against form exfiltration [mwg:security].
- A project policy may also keep `default-src 'self'` for non-script resource types; that does not conflict with the strict `script-src`.
- Nonce: 16 random bytes from `crypto.getRandomValues` (or the server's CSPRNG), base64, new on every response, put into the header and into the render context so only template-authored `<script>` tags get it [mwg:security].
- Do not add nonces by regex-rewriting already rendered HTML: it cannot tell your `<script>` tags from injected ones [mwg:security].
- Do not use a host or scheme allowlist (`https:`, `https://cdn.example.com`) as the main `script-src` defence: open redirects, JSONP and other files on the allowed host bypass it. Third-party loaders are trusted through the nonce and `'strict-dynamic'` [mwg:security].
- The `https:` / `'unsafe-inline'` backwards-compatibility tokens are not needed under our browser policy (all supported browsers honour `'strict-dynamic'`).

### Rollout

1. Inspect first: existing headers (server, middleware, CDN/edge, `<meta>`), inline scripts and styles, third-party script origins, popup flows (OAuth, payment, SSO), embeds and embedders, cross-site integrations (webhooks, SSO callbacks) [mwg:security].
2. Ship a stricter policy as `Content-Security-Policy-Report-Only` and exercise the app with the DevTools console and Issues panel open; fix inline scripts with nonces/hashes, then enforce [mwg:security].
3. Collected violation reports may contain URLs with tokens or PII: mask them before storage (same rule as "Never log sensitive data") [mwg:security].
4. Ignore report noise from extensions, crawlers and very old browsers; act on repeated reports from current browsers [mwg:security].

CSP reporting (allowed under K24): `Reporting-Endpoints: csp="<endpoint>"` with `report-to csp` in the policy, optionally `'report-sample'` in `script-src`. Browsers without the Reporting API send no reports; do not add `report-uri` as a fallback. Whether to collect reports and which endpoint is Atlas's choice; mask samples and URLs as in step 3 [mwg:security].

Not adopted (see changelog): `require-trusted-types-for 'script'`. Trusted Types is not a K24 exception: a working setup needs policy code with feature detection (fallback code), and enforcing it changes behaviour only in supporting browsers.

### Framing (clickjacking)

| Need | Headers |
|---|---|
| Never framed (default) | `frame-ancestors 'none'` + `X-Frame-Options: DENY` |
| Framed by own origin only | `frame-ancestors 'self'` + `X-Frame-Options: SAMEORIGIN` |
| Framed by named partner origins (approved) | `frame-ancestors 'self' https://partner.example`, **no** `X-Frame-Options` (it cannot express an allowlist and would block the embed) |
| Public embeddable widget (approved) | neither, on that route only |

[mwg:security]

### Companion headers

- `Strict-Transport-Security: max-age=31536000; includeSubDomains`. Start with a short `max-age` (for example 300) and raise it step by step; a wrong long-lived HSTS locks users out until it expires. `preload` is a hard-to-undo commitment: Atlas decides [mwg:security].
- `X-Content-Type-Options: nosniff`, and serve the correct `Content-Type` for every response (`text/javascript`, `application/json`, `text/html`, …) or nosniff blocks it [mwg:security].
- `Referrer-Policy: strict-origin-when-cross-origin` as the document default [mwg:security, mwg:privacy].
- `Cross-Origin-Opener-Policy: same-origin-allow-popups`; it keeps OAuth and payment popups the app opens working. Move to `same-origin` only after checking nothing needs cross-origin `window.opener`. Not for an app that is itself an OAuth provider or payment page reached from an opener [mwg:security].
- `Cross-Origin-Resource-Policy`: `same-origin` for app-internal responses (HTML, authenticated JSON, internal scripts), `same-site` for resources shared across own subdomains, `cross-origin` only for assets meant for embedding [mwg:security].
- Cross-origin isolation (`COOP: same-origin` + `COEP: require-corp`) only when the app needs `SharedArrayBuffer`; every subresource then needs CORP or CORS. Otherwise skip it [mwg:security].
- Delegate powerful features to an iframe only through the `allow` attribute, and only what it needs [mwg:security].

### Fetch Metadata resource isolation

Server middleware that reads `Sec-Fetch-Site`, `Sec-Fetch-Mode`, `Sec-Fetch-Dest` [mwg:security]:

- Allow `same-origin`, `none`, and `same-site` (drop `same-site` if any subdomain hosts user content or untrusted code).
- Allow `cross-site` only for top-level `GET` navigations (`mode: navigate`, dest not `object`/`embed`), plus explicitly listed webhook/SSO endpoints.
- Reject everything else with 403 **before** authentication, so the response leaks nothing about sessions or resources.
- No `Sec-Fetch-Site` header (non-browser client): pass through to normal auth.
- Send `Vary: Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site` so caches do not serve one decision to another context.
- Log rejections and test against the integration map before enforcing.

### Cookies

- `__Host-` prefix for single-host session cookies (`Secure`, `Path=/`, no `Domain`); `__Secure-` when a `Domain` is needed [mwg:security].
- Do not rely on unpartitioned `SameSite=None` cookies: browsers block them as third-party cookies. An app that must work embedded in another site is a question to Atlas (see changelog: partitioned cookies are not Widely available) [mwg:security, mwg:privacy].

## DOM sinks and HTML

- Text goes in with `textContent`; structure is built with `createElement`/`append`. Sinks to grep: `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `setHTMLUnsafe`, `eval` and `new Function`, `setTimeout`/`setInterval` with a string, `script.src` or `script.textContent` from data [mwg:security].
- Untrusted HTML that must render as HTML goes through the allowlist sanitizer from the build contract with a restrictive config (elements and attributes you need, nothing else). Insert its result once; do not serialize and re-parse it in another context (mutation XSS) [mwg:sanitize-untrusted-html].
- Character escaping is not sanitizing: escaped output must never be interpolated into an attribute or URL in another HTML template (`javascript:` URLs survive entity escaping) [mwg:trusted-types].
- Later (when Baseline Widely available and approved by Atlas): the native Sanitizer API (`element.setHTML()`, `Document.parseHTML()`) and Trusted Types enforcement. Not now; neither is a K24 exception (both need fallback code).

## Messaging and origins

- Receiver: `if (event.origin !== TRUSTED_ORIGIN) return;` against a fixed allowlist of exact origins, then validate the payload shape before using it or writing it to the DOM [mwg:security].
- Sender: `target.postMessage(data, 'https://exact.origin')`, never `'*'` for anything sensitive [mwg:security].
- Comparing arbitrary URLs or elements: `new URL(candidate).origin === new URL(trusted).origin`, after rejecting `'null'`. Two opaque origins (sandboxed iframes, `data:` URLs) both serialize to `'null'`, so `'null' === 'null'` is never a match [mwg:validate-origins].
- Never `startsWith`, `includes`, `endsWith`, regex, or `split('.')` on hosts: `https://app.example.com.attacker.example` passes a prefix check, and `.co.uk`/`.github.io` break naive same-site logic [mwg:validate-origins].
- Same-site checks (for example a `returnTo` redirect across own subdomains): compare `protocol` exactly and the hostname against a known registrable domain you control (exact or dot-prefixed suffix); no public-suffix guessing [mwg:validate-origins].
- A known sandboxed iframe: check `event.source === iframe.contentWindow`, or hand it a `MessageChannel` port on init and talk only over that port [mwg:validate-origins].
- Wrap URL parsing of untrusted input in `try`/`catch` and treat a parse error as "not trusted" [mwg:validate-origins].

## External subresources

Only when the build contract allows the external resource (K05); otherwise bundle it [mwg:secure-external-subresources].

- Version-pinned or content-addressed URL (`ui@2.4.0/app.min.js`), never a floating `latest`.
- `integrity="sha384-…"` computed at build or release time from known-good bytes (or the publisher's digest). Never compute it in the browser from the live response.
- With `integrity` on a cross-origin resource, always `crossorigin="anonymous"` (or `use-credentials`); without it the response is opaque and blocked. The host must send `Access-Control-Allow-Origin`.
- `referrerpolicy="no-referrer"` on third-party CDN requests; the document-level `Referrer-Policy` covers the rest.
- Same attributes on `<link rel="stylesheet">`, `preload` and `modulepreload`; in `fetch()` pass `integrity`, `mode: 'cors'`, `credentials: 'omit'`, `referrerPolicy`.
- Load external CSS with `<link>`, not `@import`, so SRI applies (CSS `url()` modifiers are not Widely available).
- A URL that may serve one of several known-good files: list several digests in one `integrity`, space-separated.
- A vendor script that changes in place cannot use SRI: rely on the CSP nonce and `'strict-dynamic'`, or isolate it in a sandboxed iframe.

## Privacy in the browser

- Collect at the lowest granularity the purpose needs (bracket instead of exact value) [mwg:privacy].
- No PII or tokens in `localStorage`/`sessionStorage`: any script on the page can read it [mwg:privacy].
- Audit third parties regularly in the DevTools network panel or a HAR: which requests, which data. No third-party scripts on sensitive pages (checkout, health, account) unless required [mwg:privacy].
- Prefer plain share links over social SDKs and the privacy-enhanced mode of an embed provider (for example `youtube-nocookie.com`); a click-to-load facade for heavy embeds is a design decision for the approved design, not something to add on your own [mwg:privacy].
- No fingerprinting (canvas, font lists, media-device enumeration); feature detection instead of parsing `navigator.userAgent` [mwg:privacy].
- Limit bulk-read endpoints (user search, profile views) against scraping [mwg:privacy].

Rules tagged [mwg:…] are adapted and condensed from GoogleChrome/modern-web-guidance (https://github.com/GoogleChrome/modern-web-guidance), commit 4dd9683, licensed Apache-2.0. Changes: selected, shortened and adapted to company policy (browser policy, no new dependencies, design system first).
