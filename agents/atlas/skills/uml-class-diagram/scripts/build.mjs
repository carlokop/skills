#!/usr/bin/env node
// Klassendiagram: van bron naar weergaven.
//
//   1. Mermaid-weergave van één model-JSON (ongewijzigd):
//        node build.mjs model.json --md docs/architecture/class-diagram.md
//   2. Ontwerppagina van het hele document (skill ontwerppagina, soort klassendiagram):
//        node build.mjs page docs/architecture/dcd.md --out pagina.html \
//          [--models docs/architecture/model] [--overview dcd-modules] [--check-dir controle/]
//          [--database docs/architecture/model/database.json] [--glossary GLOSSARY.md]
//      Het document is Markdown met per plaat <!-- gen:naam --> … <!-- /gen:naam --> (model/naam.json)
//      of een Mermaid-classDiagram. <!-- volledig-dcd --> markeert de plek van het volledige diagram.
//      --database zet het ER-model op dezelfde pagina (Klassendiagram en database); de Nederlandse
//      namen komen uit GLOSSARY.md (anders gezocht in de map van het document of hoger).
//   3. Ontwerppagina van één model-JSON (elke namespace een onderdeel):
//        node build.mjs model.json --html pagina.html [--check-dir controle/]
//
// De opmaak berekent ELK (vendor/elk.bundled.js) bij het bouwen; de pagina bevat alleen de tekening.
// Het script controleert de tekening en de inhoud (ontwerppagina, Controle vóór oplevering, punten 1–8)
// en schrijft de pagina alleen als alle controles slagen (exitcode 3 bij een fout). Alleen Node nodig.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve, basename, join, relative } from 'node:path';
import { loadDocument, plateSpec, fullSpec, relationKey, pageSelection, readGlossary, findGlossary } from './lib/doc.mjs';
import { layoutPlate, measureNode, M } from './lib/layout.mjs';
import { renderClassPlate } from './lib/render.mjs';
import { sequenceDiagram } from './lib/sequence.mjs';
import { checkDiagram, routeMetrics, detourEdges, excessLength, nudgeMisleading, nudgeHugging, suspectSegments } from './lib/check.mjs';
import { buildPage } from './lib/page.mjs';
import { loadDatabase, dbOverviewSpec, dbAreaSpec, tableInfo, columnLine } from './lib/database.mjs';
import { placeLabels } from './lib/labels.mjs';
import { diagramRules } from './lib/theme.mjs';
import { textWidth } from './lib/text.mjs';
import { esc, blockTexts, plain } from './lib/markdown.mjs';
import { markdown as modelMarkdown } from './lib/mermaid-out.mjs';

const ELK_VERSION = '0.9.3';
const BIG_PLATE = 20; // vanaf hier krijgt een plaat de knop "Alleen namen"
const LINE = 160; // tekens per regel, voor de lengte van samenvatting en uitleg
const NUDGE_MAX = 200; // tot zoveel lijnen verschuift het script misleidende lijnen (het volledige diagram niet)
const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : null; };
const flag = (n) => args.includes(`--${n}`);
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--') && !['force'].includes(args[i - 1].slice(2))));
const write = (p, text) => { mkdirSync(dirname(resolve(p)), { recursive: true }); writeFileSync(p, text); console.log('geschreven:', p); };

async function main() {
  if (positional[0] === 'page') return pageMode(positional[1], { out: opt('out'), models: opt('models'), overview: opt('overview'), checkDir: opt('check-dir'), glossary: opt('glossary'), database: opt('database') });
  const input = positional[0];
  if (!input) { console.error('Gebruik: node build.mjs model.json --md X.md | node build.mjs model.json --html pagina.html | node build.mjs page doc.md --out pagina.html'); process.exit(1); }
  const model = JSON.parse(readFileSync(input, 'utf8'));
  const problems = validateModel(model);
  if (problems.length) { console.error('Model ongeldig:\n- ' + problems.join('\n- ')); process.exit(2); }
  if (opt('md')) write(opt('md'), modelMarkdown(model));
  if (opt('html')) {
    if (model.kind !== 'class') { console.error('--html maakt alleen een ontwerppagina van een class-model.'); process.exit(1); }
    const v = singleModelDocument(model, basename(input));
    return pageMode(input, { out: opt('html'), checkDir: opt('check-dir'), virtual: v });
  }
  if (!opt('md') && !opt('html')) console.error('Geef --md en/of --html op.');
}

function validateModel(model) {
  const problems = [];
  if (model.kind === 'sequence') return problems;
  const names = new Set();
  for (const g of model.groups || []) for (const c of g.classes || g.tables || []) { if (names.has(c.name)) problems.push(`dubbele naam: ${c.name}`); names.add(c.name); }
  for (const r of model.relations || []) {
    if (!names.has(r.from) || !names.has(r.to)) problems.push(`relatie ${r.from} → ${r.to}: onbekende klasse/tabel`);
    if (!r.description) problems.push(`relatie ${r.from} → ${r.to}: beschrijving ontbreekt`);
  }
  return problems;
}

/** Eén model-JSON als document: per namespace een onderdeel, plus een overzicht van de afhankelijkheden. */
function singleModelDocument(model, file) {
  const groups = model.groups || [];
  const nsOf = new Map();
  groups.forEach((g) => g.classes.forEach((c) => nsOf.set(c.name, g.namespace || 'Model')));
  const models = new Map();
  const md = [`# ${model.title}`, '', model.description || '', '', '## Afhankelijkheden tussen namespaces', '', 'Een pijl: een klasse in de ene namespace heeft een relatie met een klasse in de andere.', '', '<!-- gen:overview -->', '<!-- /gen:overview -->', '', '## Volledig diagram', '', '<!-- volledig-dcd -->', ''];
  const deps = new Map();
  for (const r of model.relations || []) {
    const a = nsOf.get(r.from), b = nsOf.get(r.to);
    if (a !== b) { const k = `${a}|${b}`; if (!deps.has(k)) deps.set(k, new Set()); deps.get(k).add(r.to); }
  }
  models.set('overview', { kind: 'class', title: `${model.title} – namespaces`, groups: [{ classes: groups.map((g) => ({ name: g.namespace || 'Model', stereotype: 'namespace', description: `${g.classes.length} klassen` })) }],
    relations: [...deps].map(([k, s]) => { const [a, b] = k.split('|'); return { from: a, to: b, type: 'dependency', label: [...s].slice(0, 3).join(', ') + (s.size > 3 ? ', …' : ''), description: `Gebruikt ${[...s].join(', ')}.` }; }) });
  groups.forEach((g, i) => {
    const ns = g.namespace || 'Model';
    const own = new Set(g.classes.map((c) => c.name));
    const rel = (model.relations || []).filter((r) => own.has(r.from) || own.has(r.to));
    const ext = new Set(rel.flatMap((r) => [r.from, r.to]).filter((n) => !own.has(n)));
    const extClasses = groups.flatMap((x) => x.classes).filter((c) => ext.has(c.name));
    models.set(`ns${i}`, { kind: 'class', title: ns, groups: [{ namespace: ns, classes: g.classes }, ...(extClasses.length ? [{ namespace: 'External', classes: extClasses }] : [])], relations: rel });
    md.push(`## ${ns}`, '', `<!-- gen:ns${i} -->`, `<!-- /gen:ns${i} -->`, '');
  });
  return { text: md.join('\n'), modelMap: models, ownGroups: groups.map((g) => g.namespace || 'Model'), overview: 'overview', source: file };
}

async function pageMode(mdPath, { out, models, overview, checkDir, virtual, glossary, database }) {
  if (!mdPath || !out) { console.error('Gebruik: node build.mjs page doc.md --out pagina.html [--models dir] [--overview naam] [--glossary GLOSSARY.md] [--database database.json] [--check-dir dir]'); process.exit(1); }
  // Nederlandse namen (ontwerppagina, Namen): GLOSSARY.md uit --glossary, anders in de map van het document of de modellen of hoger.
  const glossaryFile = glossary || findGlossary(dirname(resolve(mdPath)), models);
  const terms = readGlossary(glossaryFile);
  const doc = loadDocument(mdPath, virtual ? { text: virtual.text, modelMap: virtual.modelMap, ownGroups: virtual.ownGroups, overview: virtual.overview, glossary: terms } : { modelDir: models, overview, glossary: terms });
  if (doc.problems.length) { console.error('Bron ongeldig:\n- ' + doc.problems.join('\n- ')); process.exit(2); }
  // Databasedeel (ontwerppagina, aanvulling WEB-96): het ER-model van architect-database op dezelfde pagina.
  const db = database ? loadDatabase(database, doc.parts) : null;
  if (db?.problems.length) { console.error('Databasemodel ongeldig:\n- ' + db.problems.join('\n- ')); process.exit(2); }
  const findings = [];
  const report = [];
  const figures = new Map();
  const data = { classes: {}, figs: {} };
  const svgExports = [];
  const usedKinds = new Set();
  const colorOfName = (name) => doc.owner.get(name)?.part.key || null;

  for (const [name, o] of doc.owner) data.classes[name] = info(o.cls, o.part, o.group, terms.get(name));
  if (db) for (const [name, t] of db.tableOf) { if (data.classes[name]) { console.error(`tabel ${name} heeft dezelfde naam als een klasse`); process.exit(2); } data.classes[name] = tableInfo(db, t); }

  const frameTitleW = (t) => Math.ceil(textWidth(t, M.frameTitleSize, 'bold')) + 2;
  // Een lijn met een omweg (vaak om de hele plaat heen) gaat voor ELK tegen de leesrichting in.
  // Zo'n lijn draait het script voor de opmaak om en rekent opnieuw; de nieuwe opmaak telt alleen
  // als ze minder lijnen rond de plaat heeft (buiten alle kaders en elementen), anders minder lange
  // omwegen, anders minstens 3% minder extra lengte; nooit meer lange omwegen of bevindingen.
  // De pijl blijft aan de goede kant.
  // Haalt een opmaak toch een bevinding (bijv. een kadertitel op een lijn), dan probeert het script
  // een paar andere instellingen van ELK en neemt de eerste zonder bevindingen.
  const VARIANTS = [{ 'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF' }, { 'elk.spacing.edgeNode': '40', 'elk.layered.spacing.edgeNodeBetweenLayers': '40' }, { 'elk.layered.spacing.nodeNodeBetweenLayers': '80' }, { 'elk.direction': 'RIGHT' }];
  // Zo ook als er na het verschuiven nog misleidende lijnen of lijnen in elkaars verlengde zijn (niet bij
  // het volledige diagram): een andere opmaak telt dan als ze geen bevindingen meer heeft, minder van
  // zulke lijnen en hoogstens 30% meer oppervlak.
  async function bestLayout(spec, { namesOnly, options }) {
    const sus = (g) => (spec.edges.length <= NUDGE_MAX ? new Set(suspectSegments(g).map((m) => [m.edge, m.by].sort().join('|'))).size : 0);
    let r = await bestLayoutWith(spec, { namesOnly, options });
    r.s = sus(r.g);
    const area0 = r.g.width * r.g.height;
    for (const v of VARIANTS) {
      if (!r.f && !r.s) break;
      const next = await bestLayoutWith(spec, { namesOnly, options: { ...options, ...v } });
      next.s = sus(next.g);
      if (next.f < r.f || (next.f === r.f && next.s < r.s && next.g.width * next.g.height <= 1.3 * area0)) r = next;
    }
    return r.g;
  }
  async function bestLayoutWith(spec, { namesOnly, options }) {
    const score = async (flip) => {
      const g = await layoutPlate(spec, { namesOnly, options, flip });
      placeLabels(spec, g);
      if (spec.edges.length <= NUDGE_MAX) { nudgeMisleading(spec, g, { frameTitleW }); nudgeHugging(spec, g, { frameTitleW }); }
      return { g, ...excessLength(g), d: detourEdges(g), f: checkDiagram(spec, g, { frameTitleW, hug: spec.edges.length <= NUDGE_MAX }).length };
    };
    let best = await score(new Set());
    let flip = new Set();
    // Per lijn proberen; niet bij het volledige diagram (te veel lijnen, weinig winst).
    if (best.d.length > 20) return best;
    for (let round = 0; round < 2; round++) {
      let improved = false;
      for (const id of [...best.d]) {
        const tryFlip = new Set(flip);
        tryFlip.has(id) ? tryFlip.delete(id) : tryFlip.add(id);
        const next = await score(tryFlip);
        const better = next.around < best.around || (next.around === best.around && (next.long < best.long || (next.long === best.long && next.x < best.x * 0.97)));
        if (next.f <= best.f && next.long <= best.long && better) { best = next; flip = tryFlip; improved = true; }
      }
      if (!improved || !best.d.length) break;
    }
    return best;
  }

  async function drawClass(spec, { label, big = false, names = true, source, options = {} }) {
    const fig = spec.id;
    const variants = [false, ...(names ? [true] : [])];
    const svgs = [];
    for (const namesOnly of variants) {
      const geo = await bestLayout(spec, { namesOnly, options });
      const textFits = () => spec.nodes.flatMap((n) => {
        const g = geo.nodes.find((x) => x.id === n.id);
        const need = measureNode(n, namesOnly);
        return g && (g.w + 0.5 < need.w || g.h + 0.5 < need.h) ? [`${n.id}: tekst past niet in het blok`] : [];
      });
      const f = checkDiagram(spec, geo, { frameTitleW, textFits });
      const tag = `${label}${namesOnly ? ' (alleen namen)' : ''}`;
      f.forEach((x) => findings.push({ diagram: tag, ...x }));
      report.push({ diagram: tag, width: geo.width, height: geo.height, nodes: geo.nodes.length, frames: geo.frames.length, edges: geo.edges.length, labels: geo.edges.reduce((s, e) => s + e.labels.length, 0), findings: f.length, ...routeMetrics(geo) });
      const svg = renderClassPlate(spec, geo, { label: tag, namesOnly, svgId: `${fig}${namesOnly ? '-n' : ''}` });
      svgs.push(svg);
      svgExports.push({ name: `${fig}${namesOnly ? '-namen' : ''}`, label: tag, svg });
    }
    spec.edges.forEach((e) => usedKinds.add(e.type));
    data.figs[fig] = {
      nodes: Object.fromEntries(spec.nodes.map((n) => [n.id, n.dbTable || (doc.owner.has(n.id) && doc.owner.get(n.id).cls.name === n.name) ? n.id : info({ name: n.name, stereotype: n.stereo, attributes: n.attrs, methods: n.methods, description: n.info.description, pattern: n.info.pattern, grasp: n.info.grasp }, doc.parts.find((p) => p.key === n.color), n.group, n.nl)])),
      edges: spec.edges.map((e) => ({ i: e.id, f: e.from, t: e.to, k: e.type, l: e.label || '', tl: e.tailLabel || '', hl: e.headLabel || '', d: e.description || '' })),
    };
    const kinds = [...new Set(spec.edges.map((e) => e.type))];
    const bar = `<div class="dg-bar"><button type="button" data-z="out" aria-label="Uitzoomen">−</button><button type="button" data-z="in" aria-label="Inzoomen">+</button><button type="button" data-z="fit">Passend</button><button type="button" data-z="100">100%</button><span class="zv">100%</span>` +
      (names ? `<button type="button" data-names aria-pressed="false">Alleen namen</button>` : '') +
      (kinds.length > 1 ? `<span class="kinds">${kinds.map((k) => `<label><input type="checkbox" data-kind="${k}" checked>${k}</label>`).join(' ')}</span>` : '') +
      `<span class="hint">Klik op een element: zijn lijnen en buren lichten op. Slepen schuift; Ctrl + scrollen zoomt.</span></div>`;
    const svgHtml = svgs.map((s, i) => (i ? s.replace('<svg ', '<svg hidden ') : s)).join('');
    return `<figure class="dg${big ? ' big' : ''}" data-fig="${fig}">${bar}<div class="dg-grid"><div class="dg-scroll">${svgHtml}</div><aside class="info" aria-live="polite"><p class="empty">Klik op een element of lijn.</p></aside></div><figcaption>${esc(label)} · bron: <code>${esc(source)}</code></figcaption></figure>`;
  }

  // platen in het document
  for (const p of doc.plates) {
    const spec = plateSpec(doc, p);
    const isOverview = doc.overview === p;
    // "Alleen namen" alleen bij grote platen (ontwerppagina, Vaste opbouw): meer dan BIG_PLATE elementen.
    figures.set(p.block, await drawClass(spec, { label: p.title, names: !isOverview && spec.nodes.length > BIG_PLATE, source: p.model.__file }));
  }
  // volledig diagram
  // Volledig diagram: lijnen van dezelfde soort naar dezelfde klasse delen hun laatste stuk (één poort per soort) en hebben
  // geen rolnamen of multipliciteit; die staan op de plaat per module en in het infopaneel.
  const full = fullSpec(doc);
  full.noLabels = true;
  full.bundle = true;
  const fullHtml = await drawClass(full, { label: `${doc.title}: volledig diagram`, big: true, source: 'alle platen uit het model (elke klasse één keer, in haar eigen onderdeel)' });
  // databasedeel: overzicht en een plaat per gebied, bij de module van het gebied
  let dbPage = null;
  const dbSpecs = [];
  if (db) {
    const source = basename(db.file);
    const ov = dbOverviewSpec(db);
    dbSpecs.push(ov);
    dbPage = { overviewHtml: await drawClass(ov, { label: 'Database: alle tabellen per gebied', big: true, names: false, source }), bySection: new Map(), rest: '' };
    for (const a of db.areas) {
      const spec = dbAreaSpec(db, a);
      dbSpecs.push(spec);
      const html = `<h3 id="h-${a.id}">Tabellen ${esc(a.ns)}</h3>` + await drawClass(spec, { label: spec.title, names: spec.nodes.length > BIG_PLATE, source });
      const s = a.part?.section;
      if (s) dbPage.bySection.set(s, (dbPage.bySection.get(s) || '') + html); else dbPage.rest += html;
    }
  }
  // sequentiediagrammen
  for (const s of doc.sections) for (const b of s.blocks) {
    if (!b.sequences) continue;
    const parts = [];
    for (const q of b.sequences) {
      const r = sequenceDiagram(q.model, { svgId: q.id, colorOf: (nm) => { const toks = String(nm).split(/[\s()+,]+/).filter(Boolean); for (const t of toks) { const k = colorOfName(t); if (k) return k; } return null; } });
      const f = checkDiagram({ frames: [], nodes: [], edges: r.geo.edges.map((e, k) => ({ id: e.id, from: `x${k}`, to: `y${k}` })) }, r.geo, {});
      f.forEach((x) => findings.push({ diagram: q.model.title, ...x }));
      report.push({ diagram: q.model.title, width: r.geo.width, height: r.geo.height, nodes: r.geo.nodes.length, frames: 0, edges: r.geo.edges.length, labels: r.geo.edges.length + r.geo.extraLabels.length, findings: f.length });
      svgExports.push({ name: q.id, label: q.model.title, svg: r.svg });
      data.figs[q.id] = { nodes: Object.fromEntries(q.model.participants.map((x) => [x.id, { n: x.name }])), msgs: r.messages.map((m) => ({ n: m.n, f: m.from, t: m.to, l: m.label, d: m.detail })) };
      const rows = r.messages.filter((m) => m.detail).map((m) => `<tr><td>${m.n}</td><td><code>${esc(m.label)}</code></td><td>${esc(m.detail)}</td></tr>`).join('');
      parts.push(`<h4>${esc(q.model.title)}</h4>${q.model.description ? `<p>${esc(q.model.description)}</p>` : ''}<figure class="dg seqfig" data-fig="${q.id}"><div class="dg-bar"><button type="button" data-z="out">−</button><button type="button" data-z="in">+</button><button type="button" data-z="fit">Passend</button><button type="button" data-z="100">100%</button><span class="zv">100%</span><span class="hint">Klik op een bericht voor de toelichting.</span></div><div class="dg-grid"><div class="dg-scroll">${r.svg}</div><aside class="info" aria-live="polite"><p class="empty">Klik op een deelnemer of bericht.</p></aside></div><figcaption>${esc(q.model.title)} · bron: <code>${esc(q.file)}</code></figcaption></figure>` +
        (rows ? `<details><summary>Toelichting per bericht</summary><div class="tbl"><table><thead><tr><th>#</th><th>Bericht</th><th>Toelichting</th></tr></thead><tbody>${rows}</tbody></table></div></details>` : ''));
    }
    figures.set(b, parts.join(''));
  }

  const generatedFrom = virtual ? virtual.source : `${relative(process.cwd(), resolve(mdPath))} en de modelbestanden in ${relative(process.cwd(), doc.modelDir) || '.'}/${db ? ` (databasedeel: ${basename(db.file)})` : ''}`;
  const layoutNote = `Opmaak berekend bij het bouwen met ELK ${ELK_VERSION} (Eclipse Layout Kernel, layered, hiërarchisch, haakse lijnen); de pagina bevat alleen de tekening. Lettertype: Liberation Sans (SIL OFL), in de pagina opgenomen.`;
  let html = buildPage({ doc, kindLabel: db ? 'Klassendiagram en database' : 'Klassendiagram', figures, fullHtml, db: dbPage, data, generatedFrom, layoutNote, usedKinds });

  // ---- controles op de inhoud (1, 2, 4) ----
  const pageText = htmlText(html);
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  // 1: alle tekst van de pagina-secties uit de bron staat op de pagina (de rest is naslag, ontwerppagina)
  const sel = pageSelection(doc);
  const introFirst = doc.intro.find((b) => b.type === 'para');
  const allBlocks = [...(introFirst ? [introFirst] : []),
    ...[...sel.summary, ...sel.choices, ...sel.open].flatMap((s) => s.blocks),
    ...sel.diagrams.flatMap((d) => [{ type: 'heading', text: d.section.title }, ...d.blocks])];
  let textMissing = 0;
  for (const b of allBlocks) for (const t of blockTexts(b)) {
    if (t && !pageText.includes(norm(t))) { textMissing++; if (textMissing <= 20) findings.push({ diagram: 'pagina', check: 1, msg: `tekst uit de bron ontbreekt: "${t.slice(0, 90)}"` }); }
  }
  // 1: elke klasse en relatie uit de bron staat in haar plaat en (eigen klassen) op het volledige diagram
  const fullNodes = new Set(full.nodes.map((n) => n.id));
  const fullRel = new Set(full.edges.map((e) => relationKey({ from: e.from, to: e.to, type: e.type, label: e.label })));
  let classCount = 0, relCount = 0;
  for (const p of doc.plates) {
    const figData = data.figs[p.id];
    for (const g of p.model.groups || []) for (const c of g.classes || []) { classCount++; if (!(c.name in figData.nodes)) findings.push({ diagram: p.title, check: 1, msg: `klasse ${c.name} ontbreekt op de plaat` }); }
    for (const r of p.model.relations || []) {
      relCount++;
      if (!figData.edges.some((e) => e.f === r.from && e.t === r.to && e.k === (r.type || 'association') && e.l === (r.label || ''))) findings.push({ diagram: p.title, check: 1, msg: `relatie ${r.from} → ${r.to} ontbreekt op de plaat` });
      if (p.part && doc.owner.has(r.from) && doc.owner.has(r.to) && !fullRel.has(relationKey(r))) findings.push({ diagram: 'volledig diagram', check: 1, msg: `relatie ${r.from} → ${r.to} ontbreekt` });
    }
  }
  // 1: de Nederlandse naam uit GLOSSARY.md staat bij elke klasse die er een heeft, op elke plaat
  let nlCount = 0;
  const hasNl = (svgHtml, name, nl) => { const m = svgHtml.match(new RegExp(`<g class="node[^"]*" data-id="${name}">([\\s\\S]*?)</g>`)); return m && m[1].includes(`class="t-nl"`) && m[1].includes(`>${esc(nl)}</text>`); };
  for (const p of doc.plates) for (const g of p.model.groups || []) for (const c of g.classes || []) {
    const nl = terms.get(c.name);
    if (!nl) continue;
    nlCount++;
    if (!hasNl(figures.get(p.block), c.name, nl)) findings.push({ diagram: p.title, check: 1, msg: `Nederlandse naam ${nl} ontbreekt bij ${c.name}` });
  }
  for (const n of full.nodes) if (terms.get(n.id) && !hasNl(fullHtml, n.id, terms.get(n.id))) findings.push({ diagram: 'volledig diagram', check: 1, msg: `Nederlandse naam ontbreekt bij ${n.id}` });
  for (const name of doc.owner.keys()) if (!fullNodes.has(name)) findings.push({ diagram: 'volledig diagram', check: 1, msg: `klasse ${name} ontbreekt` });
  for (const n of fullNodes) if (!doc.owner.has(n)) findings.push({ diagram: 'volledig diagram', check: 1, msg: `${n} staat niet als eigen klasse in de bron` });
  // 1: databasedeel: elke tabel op het overzicht en op de plaat van haar gebied met al haar kolommen,
  // elke relatie op het overzicht en op de platen van beide gebieden
  let dbCols = 0;
  if (db) {
    const [ov, ...areaSpecs] = dbSpecs;
    const drawn = (spec) => data.figs[spec.id];
    for (const [name, t] of db.tableOf) {
      if (!(name in drawn(ov).nodes)) findings.push({ diagram: ov.title, check: 1, msg: `tabel ${name} ontbreekt` });
      const a = db.areaOf.get(name), spec = areaSpecs[db.areas.indexOf(a)];
      if (!(name in drawn(spec).nodes)) { findings.push({ diagram: spec.title, check: 1, msg: `tabel ${name} ontbreekt` }); continue; }
      const svgOf = svgExports.find((x) => x.name === spec.id).svg;
      const box = (svgOf.match(new RegExp(`<g class="node[^"]*" data-id="${name.replace('.', '\\.')}">([\\s\\S]*?)</g>`)) || [])[1] || '';
      for (const c of t.columns) { dbCols++; if (!box.includes(`>${esc(columnLine(c))}</text>`)) findings.push({ diagram: spec.title, check: 1, msg: `kolom ${name}.${c.name} ontbreekt` }); }
    }
    db.relations.forEach((r) => {
      const has = (spec) => drawn(spec).edges.some((e) => e.f === r.from && e.t === r.to && e.l === (r.label || ''));
      if (!has(ov)) findings.push({ diagram: ov.title, check: 1, msg: `relatie ${r.from} → ${r.to} ontbreekt` });
      for (const a of new Set([db.areaOf.get(r.from), db.areaOf.get(r.to)])) { const spec = areaSpecs[db.areas.indexOf(a)]; if (!has(spec)) findings.push({ diagram: spec.title, check: 1, msg: `relatie ${r.from} → ${r.to} ontbreekt` }); }
    });
    for (const spec of dbSpecs) for (const n of spec.nodes) if (!db.tableOf.has(n.id)) findings.push({ diagram: spec.title, check: 1, msg: `${n.id} staat niet in het databasemodel` });
  }
  let msgCount = 0;
  for (const q of doc.sequences) for (const st of q.model.steps) if (!['alt', 'else', 'opt', 'loop', 'end', 'note'].includes(st.type || 'call')) { msgCount++; if (!data.figs[q.id].msgs.some((m) => m.l === st.label && m.f === st.from && m.t === st.to)) findings.push({ diagram: q.model.title, check: 1, msg: `bericht ${st.label} ontbreekt` }); }
  // 2: offline
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  const ext = [
    ...[...html.matchAll(/\s(?:src|href|xlink:href|action|poster)\s*=\s*["']\s*(?!#|data:)([^"']*)["']/g)].map((m) => m[0].trim()),
    ...[...styles.matchAll(/url\(\s*["']?(?!data:|#)([^)"']+)/g)].map((m) => m[0]),
    ...(/@import/.test(styles) ? ['@import'] : []),
    ...[...html.matchAll(/<link\b[^>]*>|<script\s+[^>]*src=|<iframe\b|<img\b[^>]*src=["'](?!data:)/g)].map((m) => m[0]),
  ];
  if (ext.length) findings.push({ diagram: 'pagina', check: 2, msg: `verwijzing naar buiten: ${ext.slice(0, 5).join(', ')}` });
  // 4: samenvatting, keuzes en open vragen gelijk aan de bron, en kort (ontwerppagina, Vaste opbouw)
  const sectionText = (id) => { const m = html.match(new RegExp(`<section id="${id}">([\\s\\S]*?)</section>`)); return m ? htmlText(m[1]) : ''; };
  const same = (secs, id, what) => { const txt = sectionText(id); for (const s of secs) for (const b of s.blocks) for (const t of blockTexts(b)) if (!txt.includes(norm(t))) findings.push({ diagram: 'pagina', check: 4, msg: `${what} niet gelijk aan de bron: "${t.slice(0, 80)}"` }); };
  same(sel.summary, 'samenvatting', 'samenvatting');
  same(sel.choices, 'keuzes', 'keuze');
  same(sel.open, 'open-vragen', 'open vraag');
  if (!virtual) {
    const lines = (b) => (b.type === 'list' ? b.items.length : b.type === 'table' ? b.rows.length : b.type === 'para' ? Math.ceil(plain(b.text).length / LINE) : 0);
    const n = sel.summary.flatMap((s) => s.blocks).reduce((a, b) => a + lines(b), 0);
    if (!sel.summary.length) findings.push({ diagram: 'pagina', check: 4, msg: 'sectie Samenvatting ontbreekt in de bron' });
    else if (n > 10) findings.push({ diagram: 'pagina', check: 4, msg: `samenvatting is ${n} regels, hoogstens 10` });
    for (const d of sel.diagrams) for (const b of d.blocks) if (b.type === 'para' && lines(b) > 3) findings.push({ diagram: 'pagina', check: 4, msg: `uitleg bij ${plain(d.section.title)} is langer dan 3 regels` });
    for (const s of sel.choices) for (const b of s.blocks) if (b.type !== 'table' && b.type !== 'heading' && b.type !== 'comment' || (b.type === 'table' && b.head.length !== 3)) { findings.push({ diagram: 'pagina', check: 4, msg: `keuzes (${plain(s.title)}): alleen een tabel nr | keuze | waarom` }); break; }
  }
  const openTxt = sectionText('open-vragen');
  if (!sel.open.length && !/Geen\./.test(openTxt)) findings.push({ diagram: 'pagina', check: 4, msg: 'open vragen: bron heeft er geen, pagina zegt niet "Geen"' });

  // ---- verslag ----
  const ok = findings.length === 0;
  const summary = { ok, page: out, source: generatedFrom, elk: ELK_VERSION, database: db ? { file: basename(db.file), tables: db.tableOf.size, areas: db.areas.length, relations: db.relations.length, columns: dbCols, unplaced: db.areas.filter((a) => !a.part).map((a) => a.ns) } : null, counts: { glossary: glossaryFile ? (relative(process.cwd(), glossaryFile).startsWith('..') ? basename(glossaryFile) : relative(process.cwd(), glossaryFile)) : null, terms: [...doc.owner.keys()].filter((n) => terms.has(n)).length, nlOnPlates: nlCount, plates: doc.plates.length, sequences: doc.sequences.length, parts: doc.parts.length, classesInSource: doc.owner.size, classOccurrences: classCount, relations: relCount, fullNodes: full.nodes.length, fullEdges: full.edges.length, messages: msgCount, sections: doc.sections.length }, diagrams: report, findings, offPage: sel.skipped.map((s) => plain(s.title)) };
  if (checkDir) {
    rmSync(join(checkDir, 'svg'), { recursive: true, force: true });
    mkdirSync(join(checkDir, 'svg'), { recursive: true });
    for (const s of svgExports) for (const theme of ['light', 'dark']) {
      const styled = s.svg.replace(/^<svg([^>]*)>/, (m0, a) => `<svg${a}><style>${diagramRules(theme, doc.parts)}</style>`);
      writeFileSync(join(checkDir, 'svg', `${s.name}-${theme}.svg`), styled);
    }
    write(join(checkDir, 'controle.json'), JSON.stringify(summary, null, 2));
    write(join(checkDir, 'controle.md'), reportMd(summary));
  }
  console.log(`diagrammen: ${report.length}, bevindingen: ${findings.length}`);
  if (!ok) {
    for (const f of findings.slice(0, 60)) console.error(`- [${f.check}] ${f.diagram}: ${f.msg}`);
    if (flag('force')) write(out, html);
    console.error(`Controle niet geslaagd (${findings.length} bevindingen); pagina ${flag('force') ? 'toch geschreven (--force)' : 'niet geschreven'}.`);
    process.exit(3);
  }
  write(out, html);
}

/** Zichtbare tekst van HTML: inline-tags zonder spatie, blokken met spatie. */
function htmlText(h) {
  return h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<\/?(a|span|code|strong|em|b|i)\b[^>]*>/g, '').replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
}

function info(c, part, group, nl) {
  return { n: c.name, nl: nl || '', s: c.stereotype || '', p: part?.title || '', pk: part?.key || '', g: group || '', d: c.description || '', pat: c.pattern || '', gr: c.grasp || '', a: c.attributes || [], m: c.methods || [] };
}

function reportMd(s) {
  const L = [`# Controle ontwerppagina`, '', `Uitslag: **${s.ok ? 'geslaagd' : 'niet geslaagd'}** · pagina \`${s.page}\` · opmaak ELK ${s.elk}`, '',
    `Bron: ${s.counts.sections} secties, ${s.counts.parts} onderdelen, ${s.counts.plates} klassenplaten, ${s.counts.sequences} sequentiediagrammen; ${s.counts.classesInSource} eigen klassen, ${s.counts.relations} relaties in de platen, ${s.counts.messages} berichten. Volledig diagram: ${s.counts.fullNodes} klassen, ${s.counts.fullEdges} lijnen.`, '',
    `Nederlandse namen uit ${s.counts.glossary ? `\`${s.counts.glossary}\`` : '(geen GLOSSARY.md gevonden)'}: ${s.counts.terms} van de ${s.counts.classesInSource} eigen klassen hebben een term; ${s.counts.nlOnPlates} keer op een plaat (de andere klassen zijn technisch en hebben geen Nederlandse naam).`, '',
    ...(s.database ? [`Databasedeel uit \`${s.database.file}\`: ${s.database.tables} tabellen met ${s.database.columns} kolommen in ${s.database.areas} gebieden, ${s.database.relations} relaties; elk gebied staat bij zijn module${s.database.unplaced.length ? `, behalve ${s.database.unplaced.join(', ')} (eigen sectie)` : ''}.`, ''] : []),
    '| Controle | Uitslag |', '|---|---|'];
  const by = (n) => s.findings.filter((f) => f.check === n).length;
  const names = { 1: 'Elk element uit de bron op de pagina, niets erbij', 2: 'Werkt offline, geen externe URL', 3: 'Elk diagram getekend', 4: 'Samenvatting, keuzes en open vragen gelijk aan de bron en kort', 5: 'Elementen binnen hun kader', 6: 'Geen lijn door een kader of element', 7: 'Geen overlappende labels, geen label over element of lijn', 8: 'Lijn tussen gebieden via de rand van het kader' };
  for (const n of [1, 2, 3, 4, 5, 6, 7, 8]) L.push(`| ${n}. ${names[n]} | ${by(n) ? `${by(n)} bevindingen` : 'geslaagd'} |`);
  L.push('', 'Aandachtspunten voor de beeldcontrole (geen afkeuring): *omwegen* = lijnen die veel langer zijn dan nodig of meer dan 300 px buiten het vak tussen begin en eind lopen (vaak rond de plaat); het script draait zulke lijnen voor de opmaak om als dat er minder geeft; *rond de plaat* = lijnen met een stuk buiten alle kaders en elementen; *dicht naast elkaar* = stukken van twee lijnen die over meer dan 120 px op minder dan 12 px van elkaar lopen; *misleidend* = lijnen die vlak naast het laatste stuk van een andere lijn lopen en pas vlak vóór diens doel afbuigen; *in elkaars verlengde* = paren lijnen met een stuk op dezelfde lijn, zonder overlap en minder dan 100 px ertussen, zodat ze één lijn lijken; het script verschuift zulke middenstukken waar dat kan; de beeldcontrole kijkt de rest na.', '',
    '| Diagram | Breedte × hoogte | Elementen | Kaders | Lijnen | Labels | Bevindingen | Omwegen | Rond de plaat | Dicht naast elkaar | Misleidend | In elkaars verlengde |', '|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const d of s.diagrams) L.push(`| ${d.diagram} | ${d.width} × ${d.height} | ${d.nodes} | ${d.frames} | ${d.edges} | ${d.labels} | ${d.findings} | ${d.detours ?? '–'} | ${d.around ?? '–'} | ${d.close ?? '–'} | ${d.misleading ?? '–'} | ${d.aligned ?? '–'} |`);
  if (s.offPage.length) L.push('', `Niet op de pagina (naslag in het document): ${s.offPage.join('; ')}.`);
  if (s.findings.length) { L.push('', '## Bevindingen', ''); s.findings.forEach((f) => L.push(`- [${f.check}] ${f.diagram}: ${f.msg}`)); }
  return L.join('\n') + '\n';
}

main().catch((e) => { console.error(e.stack || e.message); process.exit(1); });
