// Databasedeel van de ontwerppagina Klassendiagram en database (ontwerppagina, aanvulling WEB-96):
// uit het ER-model (model-JSON van architect-database: groups[].tables, relations) maakt dit
// platen in hetzelfde formaat als de klassenplaten, zodat opmaak (ELK), tekening, controle en
// infopaneel dezelfde zijn. Eén overzicht met alle tabellen per gebied, en per gebied een plaat
// die de pagina bij de module van dat gebied zet. Indexen, verwijdergedrag en migratie staan in
// de notities, niet op de pagina.
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { slug } from './markdown.mjs';

/** Soort tabel uit de notitie ("Kind: building block, tenant · RLS …" → "building block, tenant"). */
const kindOf = (t) => ((t.note || '').split(' · ')[0].match(/^Kind:\s*(.+)$/) || [])[1]?.split(' (')[0].trim() || 'table';
/** Regel van een kolom op de plaat: naam, type, ? bij leeg mogelijk, PK en FK. */
export const columnLine = (c) => `${c.name}: ${c.type}${c.nullable ? '?' : ''}${c.pk && c.fk ? '  PK FK' : c.pk ? '  PK' : c.fk ? '  FK' : ''}`;

/**
 * Leest het ER-model en koppelt elk gebied aan een onderdeel (module) van het document:
 * dezelfde titel, de naam tussen haakjes ("Infra (BuildingBlocks)") of het eerste woord.
 */
export function loadDatabase(file, parts) {
  const model = JSON.parse(readFileSync(file, 'utf8'));
  const problems = [];
  if (model.kind !== 'er') problems.push(`${basename(file)}: geen ER-model (kind "er")`);
  const find = (ns) => {
    const paren = (ns.match(/\(([^)]+)\)/) || [])[1];
    return parts.find((p) => p.title === ns) || (paren && parts.find((p) => p.title === paren || p.name === paren)) || parts.find((p) => p.name === ns.split(/[\s·(]/)[0]) || null;
  };
  const areas = model.groups.map((g, i) => ({ id: `db-${slug(g.namespace) || i}`, ns: g.namespace, tables: g.tables, part: find(g.namespace) }));
  const tableOf = new Map(), areaOf = new Map();
  for (const a of areas) for (const t of a.tables) {
    if (tableOf.has(t.name)) problems.push(`tabel ${t.name} staat twee keer in het model`);
    tableOf.set(t.name, t); areaOf.set(t.name, a);
  }
  for (const r of model.relations || []) {
    if (!tableOf.has(r.from) || !tableOf.has(r.to)) problems.push(`relatie ${r.from} → ${r.to}: onbekende tabel`);
    if (!r.description) problems.push(`relatie ${r.from} → ${r.to}: beschrijving ontbreekt`);
  }
  return { file, model, areas, tableOf, areaOf, relations: model.relations || [], problems };
}

function tableNode(db, t, frame, { ext = false, compact = false } = {}) {
  const a = db.areaOf.get(t.name);
  return {
    id: t.name, frame, name: t.name, stereo: kindOf(t), attrs: compact ? [] : t.columns.map(columnLine), methods: [],
    color: a.part?.key || null, partTitle: a.part?.title || '', ext, pub: false, group: a.ns, nl: '', dbTable: true,
    info: { description: t.description || '', pattern: '', grasp: '' },
  };
}

function relEdge(r, id) {
  const [tail, head] = String(r.multiplicity || '').includes(':') ? r.multiplicity.split(':') : [null, r.multiplicity || null];
  return { id, from: r.from, to: r.to, type: 'fk', label: r.label || null, tailLabel: tail || null, headLabel: head || null, description: r.description || '' };
}

/** Overzicht: alle tabellen per gebied, alleen de namen, met de FK-lijnen (van ouder naar kind) zonder labels. */
export function dbOverviewSpec(db) {
  const spec = { id: 'db-overzicht', title: 'Alle tabellen per gebied', frames: [], nodes: [], edges: [], noLabels: true };
  for (const a of db.areas) {
    spec.frames.push({ id: `${a.id}-o`, title: a.ns, parent: null, cls: 'part', color: a.part?.key || null });
    for (const t of a.tables) spec.nodes.push(tableNode(db, t, `${a.id}-o`, { compact: true }));
  }
  db.relations.forEach((r, i) => spec.edges.push(relEdge(r, `dbo-e${i}`)));
  return spec;
}

/** Plaat van één gebied: de eigen tabellen met kolommen; tabellen uit een ander gebied gestippeld, alleen de naam. */
export function dbAreaSpec(db, a) {
  const spec = { id: a.id, title: `Tabellen ${a.ns}`, frames: [{ id: `${a.id}-f`, title: a.ns, parent: null, cls: 'ns-int', color: a.part?.key || null }], nodes: [], edges: [] };
  for (const t of a.tables) spec.nodes.push(tableNode(db, t, `${a.id}-f`));
  const seen = new Set(a.tables.map((t) => t.name));
  db.relations.forEach((r, i) => {
    if (db.areaOf.get(r.from) !== a && db.areaOf.get(r.to) !== a) return;
    for (const n of [r.from, r.to]) if (!seen.has(n)) {
      seen.add(n);
      const o = db.areaOf.get(n), fid = `${a.id}-x-${o.id}`;
      if (!spec.frames.some((f) => f.id === fid)) spec.frames.push({ id: fid, title: o.ns, parent: null, cls: 'ns-ext', color: o.part?.key || null });
      spec.nodes.push(tableNode(db, db.tableOf.get(n), fid, { ext: true, compact: true }));
    }
    spec.edges.push(relEdge(r, `${a.id}-e${i}`));
  });
  return spec;
}

/** Infopaneel van een tabel (zelfde velden als een klasse). */
export function tableInfo(db, t) {
  const a = db.areaOf.get(t.name);
  return { n: t.name, nl: '', s: kindOf(t), p: a.part?.title || a.ns, pk: a.part?.key || '', g: a.part && a.part.title !== a.ns ? a.ns : '', d: t.description || '', pat: '', gr: '', a: t.columns.map(columnLine), m: [], ah: 'Kolommen' };
}
