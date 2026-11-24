// Leest een Mermaid-classDiagram (de vorm die build.mjs zelf schrijft, plus de
// handgeschreven platen die nog geen model-JSON hebben) terug naar een class-model.
// Zo komt ook zo'n plaat uit het opmaakprogramma, zonder de bron te wijzigen.

const ARROWS = [
  // [mermaid-pijl, type, omgekeerd?]
  ['<|--', 'inheritance', true], ['--|>', 'inheritance', false],
  ['<|..', 'realization', true], ['..|>', 'realization', false],
  ['*--', 'composition', false], ['--*', 'composition', true],
  ['o--', 'aggregation', false], ['--o', 'aggregation', true],
  ['..>', 'dependency', false], ['<..', 'dependency', true],
  ['-->', 'association', false], ['<--', 'association', true],
  ['--', 'association', false], ['..', 'dependency', false],
];

export function parseMermaidClass(text, title = 'Mermaid class diagram') {
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('%%'));
  if (!/^classDiagram/.test(lines[0] || '')) throw new Error('geen classDiagram');
  const groups = [];
  const byName = new Map();
  const relations = [];
  let ns = null, cls = null;
  const group = (name) => { let g = groups.find((x) => x.namespace === name); if (!g) { g = { namespace: name, classes: [] }; groups.push(g); } return g; };
  const add = (name, label) => {
    if (byName.has(name)) return byName.get(name);
    const c = { name: label || name, stereotype: undefined, attributes: [], methods: [] };
    byName.set(name, c);
    group(ns ?? null).classes.push(c);
    return c;
  };
  for (const l of lines.slice(1)) {
    let m;
    if (cls) {
      if (l === '}') { cls = null; continue; }
      if ((m = l.match(/^<<(.+)>>$/))) { cls.stereotype = m[1].trim(); continue; }
      const mem = l.replace(/~([^~]*)~/g, '<$1>');
      (/\(/.test(mem) ? cls.methods : cls.attributes).push(mem);
      continue;
    }
    if ((m = l.match(/^namespace\s+(\S+)\s*\{$/))) { ns = m[1]; continue; }
    if (l === '}') { ns = null; continue; }
    if ((m = l.match(/^class\s+([\w.]+)(?:\["([^"]*)"\])?(?:\s*~[^~]*~)?\s*(\{)?$/))) {
      const c = add(m[1], m[2]);
      if (m[3]) cls = c;
      continue;
    }
    if ((m = l.match(/^<<(.+)>>\s+(\w+)$/))) { add(m[2]).stereotype = m[1].trim(); continue; }
    const rel = parseRelation(l);
    if (rel) { relations.push(rel); continue; }
    throw new Error(`Mermaid-regel niet herkend: ${l}`);
  }
  // relaties naar klassen die nergens gedeclareerd zijn: buiten een namespace toevoegen
  ns = null;
  for (const r of relations) { add(r.from); add(r.to); }
  return { kind: 'class', title, groups, relations };
}

function parseRelation(l) {
  const m = l.match(/^(\w+)\s*(?:"([^"]*)"\s*)?(\S+)\s*(?:"([^"]*)"\s*)?(\w+)\s*(?::\s*(.*))?$/);
  if (!m) return null;
  const [, a, ma, arrow, mb, b, label] = m;
  const def = ARROWS.find(([x]) => x === arrow);
  if (!def) return null;
  const [, type, reversed] = def;
  const from = reversed ? b : a, to = reversed ? a : b;
  const fm = reversed ? mb : ma, tm = reversed ? ma : mb;
  const r = { from, to, type, label: label ? label.trim() : undefined, description: '' };
  if (fm || tm) r.multiplicity = `${fm || ''}:${tm || ''}`;
  return r;
}
