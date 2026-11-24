// Nabewerking na ELK: zet elk lijnlabel en elke kadertitel op een plek waar het niets raakt.
// ELK plaatst de labels al zonder onderlinge overlap; hier vangen we de gevallen op waar een
// label van een uiteinde (multipliciteit) of een kadertitel toch op een lijn of element valt.
import { textWidth } from './text.mjs';
import { M } from './layout.mjs';

const ov = (a, b, t = 0) => a.x < b.x + b.w + t && b.x < a.x + a.w + t && a.y < b.y + b.h + t && b.y < a.y + a.h + t;

function segHits(p, q, r, pad) {
  const x0 = r.x - pad, x1 = r.x + r.w + pad, y0 = r.y - pad, y1 = r.y + r.h + pad;
  const minx = Math.min(p[0], q[0]), maxx = Math.max(p[0], q[0]), miny = Math.min(p[1], q[1]), maxy = Math.max(p[1], q[1]);
  return maxx >= x0 && minx <= x1 && maxy >= y0 && miny <= y1;
}

export function frameTitleSize(title) {
  return { w: Math.ceil(textWidth(title, M.frameTitleSize, 'bold')) + 4, h: 18 };
}

/** Past geo aan: g.tx/g.ty per kader, en verplaatst botsende lijnlabels. */
export function placeLabels(spec, geo) {
  const segs = [];
  geo.edges.forEach((e) => { for (let k = 1; k < e.points.length; k++) segs.push({ e: e.id, p: e.points[k - 1], q: e.points[k] }); });
  const frames = geo.frames;
  const labels = geo.edges.flatMap((e) => e.labels.map((l) => Object.assign(l, { edge: e.id })));
  const titles = [];
  const straddles = (r) => frames.some((f) => {
    const inside = r.x >= f.x && r.y >= f.y && r.x + r.w <= f.x + f.w && r.y + r.h <= f.y + f.h;
    return !inside && ov(r, f);
  });
  const free = (r, self, ownEdge, pad = 2) => {
    if (r.x < 2 || r.y < 2 || r.x + r.w > geo.width - 2 || r.y + r.h > geo.height - 2) return false;
    for (const n of geo.nodes) if (ov(r, n, pad)) return false;
    for (const l of labels) if (l !== self && ov(r, l, pad)) return false;
    for (const t of titles) if (t !== self && ov(r, t, pad)) return false;
    // andere lijnen: met afstand; de eigen lijn mag het label raken, niet erdoorheen lopen
    for (const s of segs) if (segHits(s.p, s.q, r, s.e === ownEdge ? -1.5 : pad)) return false;
    return !straddles(r);
  };
  // 1. lijnlabels die iets raken
  for (const e of geo.edges) {
    for (const l of e.labels) {
      if (free(l, l, e.id, 1)) continue;
      const kind = l.id.endsWith('#t') ? 'tail' : l.id.endsWith('#h') ? 'head' : 'center';
      const cands = kind === 'center' ? centerCandidates(e.points, l) : endCandidates(e.points, l, kind);
      const hit = cands.find((c) => free({ ...l, ...c }, l, e.id, 2));
      if (hit) { l.x = hit.x; l.y = hit.y; }
    }
  }
  // 2. kadertitels in de strook boven in het kader
  for (const f of frames) {
    const sf = spec.frames.find((x) => x.id === f.id);
    const { w, h } = frameTitleSize(sf.title);
    const t = { id: `titel ${sf.title}`, w, h, x: f.x + 12, y: f.y + 8 };
    titles.push(t);
    const xs = [];
    for (let x = f.x + 12; x + w <= f.x + f.w - 8; x += 8) xs.push(x);
    const ok = xs.find((x) => free({ ...t, x }, t, null, 3));
    if (ok !== undefined) t.x = ok;
    f.tx = t.x; f.ty = t.y; f.tw = w; f.th = h;
  }
}

function centerCandidates(pts, l) {
  const c = [];
  for (let k = 1; k < pts.length; k++) {
    const [p, q] = [pts[k - 1], pts[k]];
    for (const t of [0.5, 0.3, 0.7, 0.15, 0.85]) {
      const x = p[0] + (q[0] - p[0]) * t, y = p[1] + (q[1] - p[1]) * t;
      if (Math.abs(p[0] - q[0]) < 0.5) c.push({ x: x + 4, y: y - l.h / 2 }, { x: x - l.w - 4, y: y - l.h / 2 });
      else c.push({ x: x - l.w / 2, y: y - l.h - 3 }, { x: x - l.w / 2, y: y + 3 });
    }
  }
  return c;
}

function endCandidates(pts, l, kind) {
  const [p, q] = kind === 'tail' ? [pts[0], pts[1]] : [pts[pts.length - 1], pts[pts.length - 2]];
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
  const ux = (q[0] - p[0]) / len, uy = (q[1] - p[1]) / len;
  const c = [];
  for (const s of [6, 14, 22, 32, 44, 58, 72]) {
    if (s + l.h > len + 6 && s > 6) break;
    const x = p[0] + ux * s, y = p[1] + uy * s;
    if (Math.abs(ux) < 0.5) {
      const yy = uy > 0 ? y : y - l.h;
      c.push({ x: x + 4, y: yy }, { x: x - l.w - 4, y: yy });
    } else {
      const xx = ux > 0 ? x : x - l.w;
      c.push({ x: xx, y: y - l.h - 3 }, { x: xx, y: y + 3 });
    }
  }
  return c;
}
