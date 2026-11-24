// Tekent een plaat als SVG uit de berekende opmaak (geen opmaak in de pagina zelf).
import { esc } from './markdown.mjs';
import { M } from './layout.mjs';

const r1 = (v) => Math.round(v * 10) / 10;

export function nodeClasses(n) {
  return ['node', n.color || '', n.ext ? 'ext' : '', n.pub ? 'pub' : ''].filter(Boolean).join(' ');
}

/** SVG van een klassenplaat. `geo` komt uit layoutPlate. */
export function renderClassPlate(spec, geo, { label, namesOnly = false, svgId } = {}) {
  const nodes = new Map(spec.nodes.map((n) => [n.id, n]));
  const frames = new Map(spec.frames.map((f) => [f.id, f]));
  const edges = new Map(spec.edges.map((e) => [e.id, e]));
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" class="dm cls" ${svgId ? `id="${svgId}" ` : ''}viewBox="0 0 ${geo.width} ${geo.height}" width="${geo.width}" height="${geo.height}" role="img" aria-label="${esc(label || spec.title)}">`);
  out.push(`<rect class="bg" x="0" y="0" width="${geo.width}" height="${geo.height}"/>`);
  // kaders, buitenste eerst
  const depth = (f) => { let d = 0, p = frames.get(f.id)?.parent; while (p) { d++; p = frames.get(p)?.parent; } return d; };
  for (const g of [...geo.frames].sort((a, b) => depth(a) - depth(b))) {
    const f = frames.get(g.id);
    out.push(`<g class="frame ${f.cls} ${f.color || ''}" data-frame="${esc(f.id)}"><rect class="frame-box" x="${r1(g.x)}" y="${r1(g.y)}" width="${r1(g.w)}" height="${r1(g.h)}" rx="8"/><text class="frame-title" x="${r1(g.tx ?? g.x + 12)}" y="${r1((g.ty ?? g.y + 8) + 14)}">${esc(f.title)}</text></g>`);
  }
  // lijnen onder de elementen
  for (const g of geo.edges) {
    const e = edges.get(g.id);
    out.push(edgeSvg(e, g));
  }
  for (const g of geo.nodes) {
    const n = nodes.get(g.id);
    out.push(nodeSvg(n, g, namesOnly));
  }
  out.push('</svg>');
  return out.join('');
}

export function nodeSvg(n, g, namesOnly) {
  const x = g.x, y = g.y, w = g.w, cx = r1(x + w / 2);
  const p = [`<g class="${nodeClasses(n)}" data-id="${esc(n.id)}"><rect class="box" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(g.h)}" rx="3"/>`];
  let cy = y + 8;
  if (n.stereo) { p.push(`<text class="t-stereo" x="${cx}" y="${r1(cy + 10.5)}" text-anchor="middle">«${esc(n.stereo)}»</text>`); cy += M.stereoLine; }
  p.push(`<text class="t-name" x="${cx}" y="${r1(cy + 13.5)}" text-anchor="middle">${esc(n.name)}</text>`);
  cy += M.nameLine;
  // Nederlandse naam uit GLOSSARY.md onder de Engelse naam (ontwerppagina, Namen)
  if (n.nl) { p.push(`<text class="t-nl" x="${cx}" y="${r1(cy + 11)}" text-anchor="middle">${esc(n.nl)}</text>`); cy += M.nlLine; }
  cy += 6;
  if (!namesOnly) {
    for (const sec of [n.attrs, n.methods]) {
      if (!sec || !sec.length) continue;
      p.push(`<line class="sep" x1="${r1(x)}" y1="${r1(cy)}" x2="${r1(x + w)}" y2="${r1(cy)}"/>`);
      let by = cy + M.secPad + 11.5;
      for (const m of sec) { p.push(`<text class="t-mem" x="${r1(x + M.padX)}" y="${r1(by)}">${esc(m)}</text>`); by += M.memLine; }
      cy += M.secPad * 2 + sec.length * M.memLine;
    }
  }
  p.push('</g>');
  return p.join('');
}

/** Pijlpunt of ruit; geeft de vorm en het ingekorte eindpunt van de lijn. */
export function marker(kind, tip, from) {
  const dx = tip[0] - from[0], dy = tip[1] - from[1];
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
  const pt = (a, b) => `${r1(tip[0] - ux * a + nx * b)},${r1(tip[1] - uy * a + ny * b)}`;
  if (kind === 'open') return { svg: `<polyline class="e-head" points="${pt(10, 5)} ${pt(0, 0)} ${pt(10, -5)}"/>`, end: tip };
  if (kind === 'solid') return { svg: `<polygon class="e-head solid" points="${pt(10, 5)} ${pt(0, 0)} ${pt(10, -5)}"/>`, end: [tip[0] - ux * 9, tip[1] - uy * 9] };
  if (kind === 'triangle') return { svg: `<polygon class="e-head hollow" points="${pt(13, 7)} ${pt(0, 0)} ${pt(13, -7)}"/>`, end: [tip[0] - ux * 13, tip[1] - uy * 13] };
  if (kind === 'diamond' || kind === 'diamond-hollow') return { svg: `<polygon class="e-head ${kind === 'diamond' ? 'solid' : 'hollow'}" points="${pt(0, 0)} ${pt(8, 5)} ${pt(16, 0)} ${pt(8, -5)}"/>`, end: [tip[0] - ux * 16, tip[1] - uy * 16] };
  return { svg: '', end: tip };
}

// fk: FK-lijn in het databasedeel, van ouder naar kind, zonder pijlpunt (multipliciteit aan beide kanten)
const HEAD = { association: 'open', dependency: 'open', realization: 'triangle', inheritance: 'triangle', composition: null, aggregation: null, fk: null };
const TAIL = { composition: 'diamond', aggregation: 'diamond-hollow' };
const DASHED = new Set(['dependency', 'realization']);
const DASH = 10;

export function edgeSvg(e, g) {
  const pts = g.points.map((p) => [...p]);
  const parts = [];
  const head = HEAD[e.type];
  if (head && pts.length >= 2) {
    const m = marker(head, pts[pts.length - 1], pts[pts.length - 2]);
    parts.push(m.svg);
    pts[pts.length - 1] = m.end;
  }
  const tail = TAIL[e.type];
  if (tail && pts.length >= 2) {
    const m = marker(tail, pts[0], pts[1]);
    parts.push(m.svg);
    pts[0] = m.end;
  }
  const d = 'M' + pts.map((p) => `${r1(p[0])} ${r1(p[1])}`).join(' L');
  // Gestippeld: elk stuk apart, met de streepjes op vaste plekken van de plaat (patroon 6 4, zie
  // theme.mjs). Lijnen die een stuk delen, hebben dan dezelfde streepjes en het stuk blijft gestippeld.
  const dashed = (p, q) => {
    const ax = Math.abs(p[0] - q[0]) > Math.abs(p[1] - q[1]) ? 0 : 1, a = p[ax], fwd = q[ax] >= a;
    const o = ((fwd ? a : 6 - a) % DASH + DASH) % DASH;
    return `<path class="e-line" d="M${r1(p[0])} ${r1(p[1])} L${r1(q[0])} ${r1(q[1])}" stroke-dashoffset="${r1(o)}"/>`;
  };
  const line = DASHED.has(e.type) ? pts.slice(1).map((q, k) => dashed(pts[k], q)).join('') : `<path class="e-line" d="${d}"/>`;
  const labels = g.labels.map((l) => `<text class="e-label" x="${r1(l.x + l.w / 2)}" y="${r1(l.y + 11.5)}" text-anchor="middle">${esc(l.text)}</text>`).join('');
  return `<g class="edge k-${e.type}" data-e="${esc(e.id)}" data-a="${esc(e.from)}" data-b="${esc(e.to)}">${line}${parts.join('')}${labels}</g>`;
}

/** Kleine voorbeeldtekening van een lijnsoort, voor de leeswijzer. */
export function legendSvg(type) {
  const g = { points: [[6, 12], [90, 12]], labels: [] };
  return `<svg xmlns="http://www.w3.org/2000/svg" class="dm legend" width="96" height="24" viewBox="0 0 96 24" aria-hidden="true">${edgeSvg({ id: 'x', from: '', to: '', type }, g)}</svg>`;
}
