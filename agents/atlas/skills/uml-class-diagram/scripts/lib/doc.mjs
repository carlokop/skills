// Leest het ontwerpdocument (Markdown met <!-- gen:naam --> per plaat) en de model-JSON's,
// en bepaalt de onderdelen (modules), de platen en het volledige diagram.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { parseBlocks, slug, plain } from './markdown.mjs';
import { parseMermaidClass } from './mermaid.mjs';

const OWN_DEFAULT = ['Public', 'Internal', 'Publiek', 'Intern'];
const isPub = (g) => /^(public|publiek)$/i.test(g);

/** Normale naam van een eigen groep op het volledige diagram (de leeswijzer noemt beide namen). */
const normGroup = (g) => (/^(public|publiek)$/i.test(g) ? 'Public' : /^(internal|intern)$/i.test(g) ? 'Internal' : g);

export function loadDocument(mdPath, { modelDir, overview, ownGroups = OWN_DEFAULT, fullMarker = 'volledig-dcd', text = null, modelMap = null, glossary = new Map() } = {}) {
  const md = text ?? readFileSync(mdPath, 'utf8');
  const dir = modelDir || join(dirname(resolve(mdPath)), 'model');
  const blocks = parseBlocks(md);
  const h1 = blocks.findIndex((b) => b.type === 'heading' && b.level === 1);
  if (h1 < 0) throw new Error('geen titel (# …) in het document');
  const doc = {
    source: mdPath, modelDir: dir,
    status: blocks.slice(0, h1), title: plain(blocks[h1].text), intro: [], sections: [],
    models: new Map(), plates: [], sequences: [], parts: [], owner: new Map(), problems: [], glossary,
  };
  let cur = null;
  for (const b of blocks.slice(h1 + 1)) {
    if (b.type === 'heading' && b.level === 2) {
      cur = { title: b.text, id: uniqueId(doc, slug(b.text)), blocks: [] };
      doc.sections.push(cur);
      continue;
    }
    (cur ? cur.blocks : doc.intro).push(b);
  }
  const own = new Set(ownGroups);
  // platen per sectie
  let pi = 0;
  for (const s of doc.sections) {
    for (const b of s.blocks) {
      if (b.type === 'heading') b.id = uniqueId(doc, slug(b.text));
      let model = null;
      if (b.type === 'gen') {
        const file = join(dir, `${b.name}.json`);
        if (modelMap) model = JSON.parse(JSON.stringify(modelMap.get(b.name)));
        else {
          if (!existsSync(file)) throw new Error(`model ontbreekt: ${file}`);
          model = JSON.parse(readFileSync(file, 'utf8'));
        }
        model.__file = `${b.name}.json`;
        doc.models.set(b.name, model);
      } else if (b.type === 'code' && b.lang === 'mermaid') {
        if (!/^\s*classDiagram/.test(b.text)) throw new Error(`sectie ${s.title}: alleen classDiagram wordt uit Mermaid gelezen`);
        model = parseMermaidClass(b.text, s.title);
        model.__file = `${doc.source} (Mermaid in sectie ${plain(s.title)})`;
      }
      if (!model) continue;
      b.model = model;
      if (model.kind === 'sequence') {
        b.sequences = model.sequences.map((q, k) => ({ id: `seq${doc.sequences.length + k + 1}`, model: q, file: model.__file, index: k }));
        doc.sequences.push(...b.sequences);
        continue;
      }
      const plate = { id: `p${++pi}`, block: b, section: s, model, name: b.name || null, title: model.title };
      b.plate = plate;
      doc.plates.push(plate);
      const hasOwn = (model.groups || []).some((g) => own.has(g.namespace));
      if (hasOwn && (!overview || b.name !== overview)) {
        let part = doc.parts.find((p) => p.section === s);
        if (!part) {
          part = { key: `m${doc.parts.length + 1}`, title: plain(s.title), name: plain(s.title).split(/[\s·(]/)[0], section: s, index: doc.parts.length, groups: new Map() };
          doc.parts.push(part);
          s.part = part;
        }
        plate.part = part;
        for (const g of model.groups) {
          if (!own.has(g.namespace)) continue;
          for (const c of g.classes) {
            const prev = doc.owner.get(c.name);
            if (prev && prev.cls !== c) {
              if (!sameClass(prev.cls, c)) doc.problems.push(`klasse ${c.name} staat als eigen klasse in twee platen met verschillende inhoud (${prev.plate.title}; ${plate.title})`);
              continue;
            }
            doc.owner.set(c.name, { part, group: normGroup(g.namespace), cls: c, plate });
            if (!part.groups.has(normGroup(g.namespace))) part.groups.set(normGroup(g.namespace), []);
            part.groups.get(normGroup(g.namespace)).push(c.name);
          }
        }
      }
    }
  }
  doc.overview = overview ? doc.plates.find((p) => p.name === overview) : null;
  if (overview && !doc.overview) throw new Error(`overzichtsplaat ${overview} niet gevonden`);
  doc.fullMarkerSection = doc.sections.find((s) => s.blocks.some((b) => b.type === 'comment' && b.text === fullMarker)) || null;
  doc.own = own;
  validate(doc);
  return doc;
}

function sameClass(a, b) {
  return JSON.stringify([a.stereotype, a.attributes || [], a.methods || []]) === JSON.stringify([b.stereotype, b.attributes || [], b.methods || []]);
}

function uniqueId(doc, base) {
  doc.__ids = doc.__ids || new Set();
  let id = base || 'sectie', n = 2;
  while (doc.__ids.has(id)) id = `${base}-${n++}`;
  doc.__ids.add(id);
  return id;
}

function validate(doc) {
  for (const p of doc.plates) {
    const names = new Set();
    for (const g of p.model.groups || []) for (const c of g.classes || []) {
      if (names.has(c.name)) doc.problems.push(`${p.title}: dubbele klasse ${c.name}`);
      names.add(c.name);
    }
    for (const r of p.model.relations || []) {
      if (!names.has(r.from) || !names.has(r.to)) doc.problems.push(`${p.title}: relatie ${r.from} → ${r.to} naar onbekende klasse`);
    }
  }
  for (const q of doc.sequences) {
    const ids = new Set(q.model.participants.map((x) => x.id));
    q.model.steps.forEach((st, i) => {
      if (['alt', 'else', 'opt', 'loop', 'end'].includes(st.type)) return;
      if (!ids.has(st.from) || (st.to && !ids.has(st.to))) doc.problems.push(`${q.model.title} stap ${i + 1}: onbekende deelnemer`);
    });
  }
}

/** Kleur (onderdeel) van een klasse: het onderdeel waar ze eigen is. */
export function partOf(doc, name) {
  return doc.owner.get(name)?.part || null;
}

/** Maakt de plaatspecificatie (kaders, elementen, lijnen) van één class-model. */
export function plateSpec(doc, plate) {
  const m = plate.model;
  const spec = { id: plate.id, title: plate.title, frames: [], nodes: [], edges: [] };
  const own = doc.own;
  (m.groups || []).forEach((g, gi) => {
    let frame = null;
    if (g.namespace) {
      const isOwn = own.has(g.namespace);
      const owners = new Set(g.classes.map((c) => partOf(doc, c.name)?.key || null));
      const color = isOwn ? plate.part?.key || null : owners.size === 1 ? [...owners][0] : null;
      frame = { id: `${plate.id}-g${gi}`, title: g.namespace, parent: null, cls: isOwn ? (isPub(g.namespace) ? 'ns-pub' : 'ns-int') : 'ns-ext', color };
      spec.frames.push(frame);
    }
    for (const c of g.classes) {
      const isOwn = g.namespace ? own.has(g.namespace) : true;
      const part = partOf(doc, c.name) || (doc.overview === plate ? overviewPart(doc, c.name) : null) || (isOwn ? plate.part : null);
      spec.nodes.push(nodeSpec(c, frame?.id ?? null, part, { ext: !isOwn, pub: isOwn && isPub(g.namespace || ''), group: g.namespace || '', nl: doc.glossary.get(c.name) || '' }));
    }
  });
  (m.relations || []).forEach((r, i) => spec.edges.push(edgeSpec(r, `${plate.id}-e${i}`)));
  return spec;
}

function overviewPart(doc, name) {
  return doc.parts.find((p) => p.name === name) || null;
}

function nodeSpec(c, frame, part, extra) {
  return {
    id: c.name, frame, name: c.name, stereo: c.stereotype || '', attrs: c.attributes || [], methods: c.methods || [],
    color: part?.key || null, partTitle: part?.title || '', ...extra,
    info: { description: c.description || '', pattern: c.pattern || '', grasp: c.grasp || '' },
  };
}

function edgeSpec(r, id) {
  let tail = null, head = null;
  if (r.multiplicity) {
    if (String(r.multiplicity).includes(':')) [tail, head] = String(r.multiplicity).split(':');
    else head = String(r.multiplicity);
  }
  return { id, from: r.from, to: r.to, type: r.type || 'association', label: r.label || null, tailLabel: tail || null, headLabel: head || null, description: r.description || '' };
}

/** Het volledige diagram: elke eigen klasse één keer, in het kader van haar onderdeel. */
export function fullSpec(doc) {
  const spec = { id: 'full', title: 'Volledig diagram', frames: [], nodes: [], edges: [] };
  for (const part of doc.parts) {
    const pf = { id: `full-${part.key}`, title: part.title, parent: null, cls: 'part', color: part.key };
    spec.frames.push(pf);
    for (const [g, names] of part.groups) {
      const gf = { id: `${pf.id}-${slug(g)}`, title: g, parent: pf.id, cls: isPub(g) ? 'ns-pub' : 'ns-int', color: part.key };
      spec.frames.push(gf);
      for (const n of names) spec.nodes.push(nodeSpec(doc.owner.get(n).cls, gf.id, part, { ext: false, pub: isPub(g), group: g, nl: doc.glossary.get(n) || '' }));
    }
  }
  const seen = new Set();
  let i = 0;
  for (const p of doc.plates) {
    if (!p.part) continue;
    for (const r of p.model.relations || []) {
      if (!doc.owner.has(r.from) || !doc.owner.has(r.to)) continue;
      const k = `${r.from}|${r.to}|${r.type}|${r.label || ''}`;
      if (seen.has(k)) continue;
      seen.add(k);
      spec.edges.push(edgeSpec(r, `full-e${i++}`));
    }
  }
  return spec;
}

/**
 * Wat op de pagina komt (skill ontwerppagina, Vaste opbouw): de secties Samenvatting, Keuzes en
 * Open vragen in hun geheel, en van elke sectie met een plaat of stroom alleen de kop, de eerste
 * alinea en de diagrammen (een ###-kop telt mee als er vóór de volgende kop een diagram staat).
 * De rest is naslag voor developers en komt niet op de pagina.
 */
export const SUMMARY_RE = /^(management)?samenvatting$/i;
export const CHOICES_RE = /^(keuzes|besluiten)/i;
export const OPEN_RE = /^open vragen/i;
const isFigure = (b) => b.plate || b.sequences || (b.type === 'comment' && b.text === 'volledig-dcd');

export function pageSelection(doc) {
  const title = (s) => plain(s.title);
  const summary = doc.sections.filter((s) => SUMMARY_RE.test(title(s)));
  const choices = doc.sections.filter((s) => CHOICES_RE.test(title(s)));
  const open = doc.sections.filter((s) => OPEN_RE.test(title(s)));
  const diagrams = [];
  const skipped = [];
  for (const s of doc.sections) {
    if (summary.includes(s) || choices.includes(s) || open.includes(s)) continue;
    if (!s.blocks.some(isFigure)) { skipped.push(s); continue; }
    const blocks = [];
    let wantPara = true;
    s.blocks.forEach((b, i) => {
      if (b.type === 'heading') {
        const next = s.blocks.slice(i + 1).findIndex((x) => x.type === 'heading' && x.level <= b.level);
        const span = s.blocks.slice(i + 1, next < 0 ? undefined : i + 1 + next);
        wantPara = span.some(isFigure);
        if (wantPara) blocks.push(b);
        return;
      }
      if (isFigure(b)) { blocks.push(b); return; }
      if (wantPara && b.type === 'para') { blocks.push(b); wantPara = false; }
    });
    diagrams.push({ section: s, blocks });
  }
  return { summary, choices, open, diagrams, skipped };
}

/**
 * Nederlandse namen uit GLOSSARY.md (format van de skill domain-modeling): een kop
 * **Nederlandse term** (`EnglishName` …) koppelt de eerste Engelse naam aan de term.
 * Staan er twee termen op één regel, dan elk met de eigen naam.
 */
export function readGlossary(file) {
  const map = new Map();
  if (!file || !existsSync(file)) return map;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    if (!line.startsWith('**')) continue;
    for (const m of line.matchAll(/\*\*([^*]+)\*\*\s*\(`([A-Za-z_][\w]*)`/g)) if (!map.has(m[2])) map.set(m[2], m[1].trim());
  }
  return map;
}

/** Zoekt GLOSSARY.md in de map of een bovenliggende map. */
export function findGlossary(...dirs) {
  for (let d of dirs.filter(Boolean)) {
    d = resolve(d);
    for (;;) { const f = join(d, 'GLOSSARY.md'); if (existsSync(f)) return f; const up = dirname(d); if (up === d) break; d = up; }
  }
  return null;
}

/** Alle relaties uit de bron (voor de controle op volledigheid). */
export function relationKey(r) { return `${r.from}|${r.to}|${r.type || 'association'}|${r.label || ''}`; }
