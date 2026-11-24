// Opmaak van een plaat met ELK (Eclipse Layout Kernel, layered, hiërarchisch).
// ELK kent groepen (kaders), legt haakse lijnen om kaders en elementen heen en
// plaatst de labels van lijnen zonder overlap. Het draait hier in Node, bij het bouwen;
// de pagina bevat alleen het resultaat (posities en lijnen).
import { createRequire } from 'node:module';
import { textWidth } from './text.mjs';

const require = createRequire(import.meta.url);
const ELK = require('../vendor/elk.bundled.js');
const elk = new ELK();

// Maten van de tekening (px). De renderer gebruikt dezelfde waarden.
export const M = {
  padX: 10, nameSize: 13.5, nameLine: 18, stereoSize: 10.5, stereoLine: 14,
  memSize: 11.5, memLine: 15, secPad: 5, minW: 96, nlSize: 11.5, nlLine: 15,
  frameTitleSize: 13, frameTop: 34, framePad: 16,
  labelSize: 11, labelPadX: 3, labelH: 15,
};

/** Breedte en hoogte van een klassenblok, met of zonder leden. */
export function measureNode(n, namesOnly) {
  const lines = [textWidth(n.name, M.nameSize, 'bold')];
  if (n.stereo) lines.push(textWidth(`«${n.stereo}»`, M.stereoSize));
  if (n.nl) lines.push(textWidth(n.nl, M.nlSize));
  let h = 8 + (n.stereo ? M.stereoLine : 0) + M.nameLine + (n.nl ? M.nlLine : 0) + 6;
  if (!namesOnly) {
    for (const sec of [n.attrs, n.methods]) {
      if (!sec || !sec.length) continue;
      h += M.secPad * 2 + sec.length * M.memLine;
      for (const m of sec) lines.push(textWidth(m, M.memSize));
    }
  }
  return { w: Math.max(M.minW, Math.ceil(Math.max(...lines) + 2 * M.padX)), h: Math.ceil(h) };
}

export function labelBox(text) {
  return { w: Math.ceil(textWidth(text, M.labelSize) + 2 * M.labelPadX), h: M.labelH };
}

const BASE = {
  'elk.algorithm': 'layered',
  'elk.direction': 'DOWN',
  'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
  'elk.edgeRouting': 'ORTHOGONAL',
  'elk.layered.spacing.nodeNodeBetweenLayers': '56',
  'elk.spacing.nodeNode': '28',
  'elk.spacing.edgeNode': '24',
  'elk.spacing.edgeEdge': '14',
  'elk.spacing.portPort': '14',
  'elk.layered.spacing.edgeNodeBetweenLayers': '24',
  'elk.layered.spacing.edgeEdgeBetweenLayers': '14',
  'elk.spacing.edgeLabel': '3',
  'elk.spacing.labelLabel': '4',
  'elk.spacing.componentComponent': '40',
  'elk.edgeLabels.inline': 'false',
  'elk.layered.edgeLabels.sideSelection': 'SMART_DOWN',
  'elk.layered.considerModelOrder.strategy': 'NONE',
  'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
  'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX',
  'elk.layered.thoroughness': '12',
  'elk.layered.unnecessaryBendpoints': 'true',
  'elk.layered.mergeEdges': 'false',
};

/**
 * Berekent de opmaak van een plaat.
 * plate: { frames:[{id,parent}], nodes:[{id,frame,name,stereo,attrs,methods}], edges:[{id,from,to,label,tailLabel,headLabel}] }
 * Geeft absolute posities terug: { width, height, frames, nodes, edges:[{id, points, labels}] }.
 */
export async function layoutPlate(plate, { namesOnly = false, options = {}, flip = new Set() } = {}) {
  const graphNodes = new Map();
  const root = { id: '__root', layoutOptions: { ...BASE, ...options, 'elk.padding': '[top=20,left=20,bottom=20,right=20]' }, children: [], edges: [] };
  graphNodes.set(null, root);
  const parentOf = new Map();
  // kaders: ouders vóór kinderen
  const frames = [...plate.frames];
  const placed = new Set([null]);
  while (frames.length) {
    const i = frames.findIndex(f => placed.has(f.parent ?? null));
    if (i < 0) throw new Error('kaders: onbekende ouder');
    const f = frames.splice(i, 1)[0];
    // ELK leest afstanden per kader: zelfde opties als het bovenste niveau
    const inherit = Object.fromEntries(Object.entries({ ...BASE, ...options }).filter(([k]) => /spacing|edgeRouting|direction|nodePlacement|crossingMinimization|considerModelOrder|thoroughness|unnecessaryBendpoints|mergeEdges|edgeLabels/.test(k)));
    const g = { id: f.id, layoutOptions: { ...inherit, 'elk.padding': `[top=${M.frameTop},left=${M.framePad},bottom=${M.framePad},right=${M.framePad}]`, 'elk.nodeLabels.placement': 'INSIDE V_TOP H_LEFT' }, children: [], edges: [] };
    // minimale breedte voor de titel van het kader
    g.layoutOptions['elk.nodeSize.constraints'] = 'MINIMUM_SIZE';
    g.layoutOptions['elk.nodeSize.minimum'] = `(${Math.ceil(textWidth(f.title, M.frameTitleSize, 'bold') + 2 * M.framePad + 8)},60)`;
    graphNodes.get(f.parent ?? null).children.push(g);
    graphNodes.set(f.id, g);
    parentOf.set(f.id, f.parent ?? null);
    placed.add(f.id);
  }
  // Minimale breedte naar het aantal lijnen per kant, zodat aansluitpunten en hun
  // multipliciteiten niet op elkaar vallen (lijnen gaan onder weg en komen boven aan).
  const outN = new Map(), inN = new Map();
  for (const e of plate.edges) {
    const step = (lbl) => (lbl && !plate.noLabels ? Math.max(26, labelBox(lbl).w + 16) : 18);
    outN.set(e.from, (outN.get(e.from) || 0) + step(e.tailLabel));
    inN.set(e.to, (inN.get(e.to) || 0) + step(e.headLabel));
  }
  for (const n of plate.nodes) {
    let { w, h } = measureNode(n, namesOnly);
    w = Math.max(w, Math.ceil(Math.max(outN.get(n.id) || 0, inN.get(n.id) || 0) + 16));
    // bundle: één poort per soort inkomende lijn; lijnen van dezelfde soort naar dezelfde klasse delen
    // zo hun laatste stuk, lijnen van een andere soort komen op een eigen punt aan
    const ports = plate.bundle ? [...new Set(plate.edges.filter((e) => e.to === n.id).map((e) => e.type))].map((k) => ({ id: `${n.id}${PORT}${k}`, width: 1, height: 1 })) : [];
    graphNodes.get(n.frame ?? null).children.push({ id: n.id, width: w, height: h, ...(ports.length ? { ports, layoutOptions: { 'elk.portConstraints': 'FREE' } } : {}) });
    parentOf.set(n.id, n.frame ?? null);
  }
  // Kaders zonder lijnen tussen hun eigen elementen (vaak Public en External) zouden één
  // lange rij worden; onzichtbare hulplijnen verdelen ze over rijen, zodat de plaat
  // geen lege vlakken krijgt. De hulplijnen staan niet in het resultaat.
  const inFrame = new Map();
  for (const n of plate.nodes) { const f = n.frame ?? null; if (f === null) continue; if (!inFrame.has(f)) inFrame.set(f, []); inFrame.get(f).push(n.id); }
  const frameOfNode = new Map(plate.nodes.map((n) => [n.id, n.frame ?? null]));
  const linked = new Set(plate.edges.filter((e) => frameOfNode.get(e.from) === frameOfNode.get(e.to)).map((e) => frameOfNode.get(e.from)));
  for (const [f, ids] of inFrame) {
    if (linked.has(f) || ids.length < WRAP_MIN) continue;
    const k = Math.max(3, Math.ceil(Math.sqrt(ids.length) * 1.5));
    for (let i = 0; i + k < ids.length; i++) graphNodes.get(f).edges.push({ id: `${HIDDEN}${f}-${i}`, sources: [ids[i]], targets: [ids[i + k]] });
  }
  const ancestors = (id) => { const a = []; let p = parentOf.get(id); while (p !== undefined && p !== null) { a.push(p); p = parentOf.get(p); } a.push(null); return a; };
  for (const e of plate.edges) {
    const labels = [];
    if (plate.noLabels) { /* geen labels op deze plaat */ } else if (e.label) labels.push({ id: `${e.id}#c`, text: e.label, ...dims(labelBox(e.label)) });
    // Een omgekeerde lijn (flip) gaat voor ELK van doel naar bron; de tekening draait hem terug.
    const fl = flip.has(e.id);
    if (e.tailLabel && !plate.noLabels) labels.push({ id: `${e.id}#t`, text: e.tailLabel, ...dims(labelBox(e.tailLabel)), layoutOptions: { 'elk.edgeLabels.placement': fl ? 'HEAD' : 'TAIL' } });
    if (e.headLabel && !plate.noLabels) labels.push({ id: `${e.id}#h`, text: e.headLabel, ...dims(labelBox(e.headLabel)), layoutOptions: { 'elk.edgeLabels.placement': fl ? 'TAIL' : 'HEAD' } });
    // gemeenschappelijke voorouder: daar hoort de lijn
    const as = ancestors(e.from), bs = new Set(ancestors(e.to));
    const lca = as.find(a => bs.has(a));
    const target = plate.bundle && !fl ? `${e.to}${PORT}${e.type}` : null;
    graphNodes.get(lca).edges.push({ id: e.id, sources: [fl ? e.to : e.from], targets: [target || (fl ? e.from : e.to)], labels });
  }
  const out = await elk.layout(root);
  const res = { width: Math.ceil(out.width), height: Math.ceil(out.height), frames: [], nodes: [], edges: [] };
  const frameIds = new Set(plate.frames.map(f => f.id));
  // ELK geeft posities ten opzichte van de ouder; lijnen ten opzichte van het knooppunt waarin ze staan.
  const walk = (g, ox, oy) => {
    for (const c of g.children || []) {
      const box = { id: c.id, x: ox + c.x, y: oy + c.y, w: c.width, h: c.height };
      (frameIds.has(c.id) ? res.frames : res.nodes).push(box);
      walk(c, box.x, box.y);
    }
    for (const e of g.edges || []) {
      if (e.id.startsWith(HIDDEN)) continue;
      const points = [];
      for (const s of e.sections || []) {
        if (!points.length) points.push([ox + s.startPoint.x, oy + s.startPoint.y]);
        for (const b of s.bendPoints || []) points.push([ox + b.x, oy + b.y]);
        points.push([ox + s.endPoint.x, oy + s.endPoint.y]);
      }
      if (flip.has(e.id)) points.reverse();
      res.edges.push({ id: e.id, points: simplify(points), labels: (e.labels || []).map(l => ({ id: l.id, text: l.text, x: ox + l.x, y: oy + l.y, w: l.width, h: l.height })) });
    }
  };
  walk(out, 0, 0);
  return res;
}

const HIDDEN = '__wrap:';
const PORT = '::in::';
const WRAP_MIN = 7;

function dims(b) { return { width: b.w, height: b.h }; }

// Haalt punten weg die op een rechte lijn liggen of dubbel zijn.
function simplify(pts) {
  const r = [];
  for (const p of pts) {
    const q = r[r.length - 1];
    if (q && Math.abs(q[0] - p[0]) < 0.01 && Math.abs(q[1] - p[1]) < 0.01) continue;
    if (r.length >= 2) {
      const a = r[r.length - 2], b = r[r.length - 1];
      const col = (Math.abs(a[0] - b[0]) < 0.01 && Math.abs(b[0] - p[0]) < 0.01) || (Math.abs(a[1] - b[1]) < 0.01 && Math.abs(b[1] - p[1]) < 0.01);
      if (col) r.pop();
    }
    r.push(p);
  }
  return r;
}
