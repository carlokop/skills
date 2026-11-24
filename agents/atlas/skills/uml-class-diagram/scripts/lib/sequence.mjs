// Opmaak en tekening van een sequentiediagram. De opmaak ligt vast: deelnemers in kolommen,
// berichten in rijen. De afstand tussen kolommen wordt zo berekend dat elk label past.
import { textWidth } from './text.mjs';
import { esc } from './markdown.mjs';
import { marker } from './render.mjs';

const S = { boxH: 38, boxPad: 12, nameSize: 12.5, labelSize: 11.5, gap: 28, row: 34, fragHead: 30, noteRow: 34, selfW: 34, margin: 20, fragInset: 10 };
const r1 = (v) => Math.round(v * 10) / 10;
const FRAG = new Set(['alt', 'opt', 'loop', 'par', 'critical', 'break']);

/** Berekent posities en tekent; geeft { svg, geo } terug (geo voor de controle). */
export function sequenceDiagram(q, { colorOf = () => null, svgId, label } = {}) {
  const ps = q.participants;
  const idx = new Map(ps.map((p, i) => [p.id, i]));
  const bw = ps.map((p) => Math.ceil(textWidth(p.name, S.nameSize, 'bold') + 2 * S.boxPad));
  // nummering van berichten
  let num = 0;
  const steps = q.steps.map((st) => {
    const t = st.type || 'call';
    const isMsg = !['alt', 'else', 'opt', 'loop', 'end', 'note', 'par', 'and', 'critical', 'break'].includes(t);
    return { ...st, t, n: isMsg ? ++num : null, text: isMsg ? `${num}. ${st.label}` : st.label || '' };
  });
  // minimale afstanden tussen middelpunten
  const n = ps.length;
  const need = Array.from({ length: n }, () => new Map()); // need[i].get(j) = minimale afstand x[j]-x[i]
  const req = (i, j, d) => { if (j <= i) return; need[i].set(j, Math.max(need[i].get(j) || 0, d)); };
  for (let i = 0; i + 1 < n; i++) req(i, i + 1, (bw[i] + bw[i + 1]) / 2 + S.gap);
  for (const st of steps) {
    if (st.n == null) continue;
    const a = idx.get(st.from), b = idx.get(st.to);
    const lw = textWidth(st.text, S.labelSize) + 24;
    if (a === b) { if (a + 1 < n) req(a, a + 1, S.selfW + lw + 16); }
    else req(Math.min(a, b), Math.max(a, b), lw + 16);
  }
  const x = new Array(n).fill(0);
  x[0] = S.margin + bw[0] / 2 + 8;
  for (let j = 1; j < n; j++) {
    let v = x[j - 1];
    for (let i = 0; i < j; i++) { const d = need[i].get(j); if (d) v = Math.max(v, x[i] + d); }
    x[j] = v;
  }
  // rijen
  let y = S.margin + S.boxH + 22;
  const msgs = [], notes = [], frags = [], stack = [];
  const lastSelfW = new Map();
  for (const st of steps) {
    if (FRAG.has(st.t)) { stack.push({ type: st.t, label: st.label || '', y0: y, seps: [], members: new Set(), depth: stack.length }); y += S.fragHead; continue; }
    if (st.t === 'else' || st.t === 'and') { const f = stack[stack.length - 1]; f.seps.push({ y: y, label: st.label || '' }); y += S.fragHead; continue; }
    if (st.t === 'end') { const f = stack.pop(); f.y1 = y + 4; frags.push(f); if (stack.length) f.members.forEach((m) => stack[stack.length - 1].members.add(m)); y += 14; continue; }
    if (st.t === 'note') {
      const i = idx.get(st.from);
      const w = Math.ceil(textWidth(st.label, 11) + 16);
      notes.push({ i, x: x[i] - w / 2, y: y, w, h: 22, text: st.label, step: st });
      stack.forEach((f) => f.members.add(i));
      y += S.noteRow; continue;
    }
    const a = idx.get(st.from), b = idx.get(st.to);
    stack.forEach((f) => { f.members.add(a); f.members.add(b); });
    const lw = Math.ceil(textWidth(st.text, S.labelSize) + 6);
    if (a === b) {
      const pts = [[x[a], y + 14], [x[a] + S.selfW, y + 14], [x[a] + S.selfW, y + 30], [x[a], y + 30]];
      msgs.push({ st, a, b, pts, label: { x: x[a] + S.selfW + 6, y: y + 14, w: lw, h: 16, text: st.text } });
      y += S.row + 16;
    } else {
      const ay = y + 22;
      const lx = (x[a] + x[b]) / 2 - lw / 2;
      msgs.push({ st, a, b, pts: [[x[a], ay], [x[b], ay]], label: { x: lx, y: ay - 19, w: lw, h: 16, text: st.text } });
      y += S.row;
    }
  }
  const lifeEnd = y + 12;
  const width = Math.ceil(Math.max(x[n - 1] + bw[n - 1] / 2, ...msgs.map((m) => m.label.x + m.label.w), ...notes.map((t) => t.x + t.w)) + S.margin);
  const height = Math.ceil(lifeEnd + S.boxH + S.margin);
  // fragmenten: breedte over de betrokken deelnemers
  for (const f of frags) {
    const mem = [...f.members];
    const lo = Math.min(...mem), hi = Math.max(...mem);
    const inset = (stackDepthAt(f, frags)) * S.fragInset;
    f.x0 = x[lo] - bw[lo] / 2 - 6 + inset;
    f.x1 = Math.max(x[hi] + bw[hi] / 2 + 6 - inset, ...msgs.filter((m) => m.label && m.pts[0][1] > f.y0 && m.pts[0][1] < f.y1).map((m) => m.label.x + m.label.w + 6));
    // notities binnen het fragment vallen ook binnen het kader
    for (const t of notes) if (t.y > f.y0 && t.y < f.y1) { f.x0 = Math.min(f.x0, t.x - 6); f.x1 = Math.max(f.x1, t.x + t.w + 6); }
  }
  // een omsluitend fragment omvat ook zijn binnenste fragmenten
  for (const f of [...frags].sort((a, b) => a.depth - b.depth)) {
    for (const g of frags) if (g.depth > f.depth && g.y0 > f.y0 && g.y1 < f.y1) { f.x0 = Math.min(f.x0, g.x0 - S.fragInset); f.x1 = Math.max(f.x1, g.x1 + S.fragInset); }
  }
  // tekenen
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" class="dm seq" ${svgId ? `id="${svgId}" ` : ''}viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${esc(label || q.title)}">`);
  out.push(`<rect class="bg" x="0" y="0" width="${width}" height="${height}"/>`);
  for (const f of frags) {
    const tw = Math.ceil(textWidth(f.type, 11, 'bold') + 14);
    out.push(`<g class="frag"><rect class="frag-box" x="${r1(f.x0)}" y="${r1(f.y0)}" width="${r1(f.x1 - f.x0)}" height="${r1(f.y1 - f.y0)}"/><path class="frag-tab" d="M${r1(f.x0)} ${r1(f.y0)} h${tw} v12 l-6 6 h${-(tw - 6)} z"/><text class="frag-label" x="${r1(f.x0 + 5)}" y="${r1(f.y0 + 13)}">${esc(f.type)}</text>${f.label ? `<text class="frag-cond" x="${r1(f.x0 + tw + 8)}" y="${r1(f.y0 + 14)}">[${esc(f.label)}]</text>` : ''}`);
    for (const s of f.seps) out.push(`<line class="frag-sep" x1="${r1(f.x0)}" y1="${r1(s.y)}" x2="${r1(f.x1)}" y2="${r1(s.y)}"/>${s.label ? `<text class="frag-cond" x="${r1(f.x0 + 8)}" y="${r1(s.y + 15)}">[${esc(s.label)}]</text>` : ''}`);
    out.push('</g>');
  }
  const boxes = [];
  ps.forEach((p, i) => {
    out.push(`<line class="lifeline" x1="${r1(x[i])}" y1="${S.margin + S.boxH}" x2="${r1(x[i])}" y2="${r1(lifeEnd)}"/>`);
    for (const by of [S.margin, lifeEnd]) {
      const g = { id: `${p.id}@${by}`, x: x[i] - bw[i] / 2, y: by, w: bw[i], h: S.boxH };
      boxes.push(g);
      const color = colorOf(p.name);
      out.push(`<g class="node${color ? ' ' + color : ''}" data-id="${esc(p.id)}"><rect class="box" x="${r1(g.x)}" y="${r1(g.y)}" width="${g.w}" height="${g.h}" rx="3"/><text class="t-name" x="${r1(x[i])}" y="${r1(by + 24)}" text-anchor="middle">${esc(p.name)}</text></g>`);
    }
  });
  msgs.forEach((m, k) => {
    const kind = m.st.t === 'return' ? 'open' : m.st.t === 'async' ? 'open' : 'solid';
    const pts = m.pts.map((p) => [...p]);
    const mk = marker(kind, pts[pts.length - 1], pts[pts.length - 2]);
    pts[pts.length - 1] = mk.end;
    const d = 'M' + pts.map((p) => `${r1(p[0])} ${r1(p[1])}`).join(' L');
    out.push(`<g class="msg k-${m.st.t === 'return' ? 'return' : 'call'}" data-m="${k}" data-a="${esc(m.st.from)}" data-b="${esc(m.st.to)}"><path class="e-line" d="${d}"/>${mk.svg}<text class="e-label" x="${r1(m.label.x + 3)}" y="${r1(m.label.y + 12)}">${esc(m.label.text)}</text></g>`);
  });
  for (const t of notes) out.push(`<g class="note"><rect class="note-box" x="${r1(t.x)}" y="${r1(t.y)}" width="${t.w}" height="${t.h}" rx="2"/><text class="note-text" x="${r1(t.x + 8)}" y="${r1(t.y + 15)}">${esc(t.text)}</text></g>`);
  out.push('</svg>');
  // geometrie voor de controle: deelnemers en notities als elementen, berichten als lijnen
  const geo = {
    width, height, frames: [],
    nodes: [...boxes, ...notes.map((t, k) => ({ id: `note${k}`, x: t.x, y: t.y, w: t.w, h: t.h }))],
    edges: msgs.map((m, k) => ({ id: `m${k}`, points: m.pts, labels: [{ id: `m${k}#c`, text: m.label.text, x: m.label.x, y: m.label.y, w: m.label.w, h: m.label.h }] })),
    extraLabels: frags.flatMap((f, k) => [{ id: `frag${k}`, x: f.x0, y: f.y0, w: Math.ceil(textWidth(f.type, 11, 'bold') + 14 + 8 + (f.label ? textWidth(`[${f.label}]`, 11) : 0)), h: 18 },
      ...f.seps.filter((s) => s.label).map((s, j) => ({ id: `frag${k}s${j}`, x: f.x0 + 8, y: s.y + 3, w: Math.ceil(textWidth(`[${s.label}]`, 11)), h: 15 }))]),
  };
  return { svg: out.join(''), geo, messages: msgs.map((m) => ({ n: m.st.n, from: m.st.from, to: m.st.to, label: m.st.label, detail: m.st.detail || '', type: m.st.t })) };
}

function stackDepthAt(f) { return f.depth; }
