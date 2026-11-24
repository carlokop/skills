#!/usr/bin/env node
// Zet één model-JSON om naar twee identieke weergaven:
//   1. een .md-bestand met Mermaid-diagrammen + beschrijvende tabellen
//   2. een zelfstandig, interactief .html-bestand (geen externe afhankelijkheden)
//
// Gebruik:
//   node build.mjs model.json --md docs/architecture/domain-model.md --html docs/architecture/artifacts/domain-model.html
//
// De JSON is de enige bron van waarheid: pas het model aan, draai dit script opnieuw.
// kind = "class" | "er" | "sequence". Zie references/model-json.md in de skill voor het schema.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const input = args.find(a => !a.startsWith('--'));
const opt = n => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : null; };
if (!input) { console.error('Gebruik: node build.mjs model.json [--md pad.md] [--html pad.html]'); process.exit(1); }

const model = JSON.parse(readFileSync(input, 'utf8'));
const here = dirname(fileURLToPath(import.meta.url));
const id = s => String(s).replace(/[^A-Za-z0-9_]/g, '_');
const generics = s => String(s).replace(/</g, '~').replace(/>/g, '~');
const q = s => String(s).replace(/"/g, "'");

function classMermaid(m) {
  const out = ['classDiagram'];
  const names = new Set();
  const classDef = c => {
    names.add(c.name);
    const lines = [`  class ${id(c.name)}["${q(c.name)}"] {`];
    if (c.stereotype && c.stereotype !== 'class') lines.push(`    <<${c.stereotype}>>`);
    for (const a of c.attributes || []) lines.push(`    ${generics(a)}`);
    for (const x of c.columns || []) lines.push(`    ${x.type} ${x.name}${x.pk ? ' PK' : x.fk ? ' FK' : ''}`);
    for (const f of c.methods || []) lines.push(`    ${generics(f)}`);
    lines.push('  }');
    return lines.join('\n');
  };
  for (const g of m.groups || []) {
    const cs = g.classes || g.tables || [];
    if (g.namespace) { out.push(`  namespace ${id(g.namespace)} {`); cs.forEach(c => out.push(classDef(c).replace(/^/gm, '  '))); out.push('  }'); }
    else cs.forEach(c => out.push(classDef(c)));
  }
  const arrow = { inheritance: '--|>', realization: '..|>', composition: '*--', aggregation: 'o--', association: '-->', dependency: '..>' };
  for (const r of m.relations || []) {
    if (!names.has(r.from) || !names.has(r.to)) continue;
    const [fm, tm] = (r.multiplicity || '').includes(':') ? r.multiplicity.split(':') : [null, r.multiplicity];
    const a = arrow[r.type] || arrow.association;
    const mult = v => (v ? ` "${q(v)}"` : '');
    if (['inheritance', 'realization'].includes(r.type)) {
      // Mermaid: Parent <|-- Child  /  Interface <|.. Impl
      out.push(`  ${id(r.to)} ${r.type === 'inheritance' ? '<|--' : '<|..'} ${id(r.from)}${r.label ? ` : ${q(r.label)}` : ''}`);
    } else {
      out.push(`  ${id(r.from)}${mult(fm)} ${a}${mult(tm)} ${id(r.to)}${r.label ? ` : ${q(r.label)}` : ''}`);
    }
  }
  return out.join('\n');
}

function erMermaid(m) {
  const out = ['erDiagram'];
  const names = new Set();
  for (const g of m.groups || []) {
    if (g.namespace) out.push(`  %% — ${g.namespace} —`);
    for (const t of g.tables || g.classes || []) {
      names.add(t.name);
      out.push(`  ${id(t.name)} {`);
      for (const c of t.columns || []) {
        const keys = [c.pk ? 'PK' : null, c.fk ? 'FK' : null, c.unique ? 'UK' : null].filter(Boolean).join(',');
        out.push(`    ${id(String(c.type).replace(/\(.*\)/, ''))} ${id(c.name)}${keys ? ' ' + keys : ''}${c.note ? ` "${q(c.note)}"` : ''}`);
      }
      out.push('  }');
    }
  }
  const card = { '1:1': '||--||', '1:0..1': '||--o|', '1:N': '||--o{', '1:1..N': '||--|{', 'N:M': '}o--o{', '0..1:N': '|o--o{' };
  for (const r of m.relations || []) {
    if (!names.has(r.from) || !names.has(r.to)) continue;
    out.push(`  ${id(r.from)} ${card[r.multiplicity] || '||--o{'} ${id(r.to)} : "${q(r.label || 'heeft')}"`);
  }
  return out.join('\n');
}

function seqMermaid(s) {
  const out = ['sequenceDiagram', '  autonumber'];
  for (const p of s.participants) out.push(`  participant ${id(p.id)} as ${q(p.name)}`);
  for (const st of s.steps) {
    const t = st.type || 'call';
    if (['alt', 'else', 'opt', 'loop'].includes(t)) out.push(`  ${t}${st.label ? ' ' + q(st.label) : ''}`);
    else if (t === 'end') out.push('  end');
    else if (t === 'note') out.push(`  Note over ${id(st.from)}: ${q(st.label)}`);
    else if (t === 'return') out.push(`  ${id(st.from)}-->>${id(st.to)}: ${q(st.label)}`);
    else if (t === 'async') out.push(`  ${id(st.from)}-)${id(st.to)}: ${q(st.label)}`);
    else out.push(`  ${id(st.from)}->>${id(st.to)}: ${q(st.label)}`);
  }
  return out.join('\n');
}

function markdown(m) {
  const md = [`# ${m.title}`, ''];
  if (m.description) md.push(m.description, '');
  md.push('> Gegenereerd uit het modelbestand met `build.mjs`. Pas het JSON-model aan en genereer opnieuw; bewerk dit bestand niet handmatig.', '');
  if (m.kind === 'sequence') {
    for (const s of m.sequences) {
      md.push(`## ${s.title}`, '');
      if (s.description) md.push(s.description, '');
      md.push('```mermaid', seqMermaid(s), '```', '');
      const rows = s.steps.filter(x => x.detail);
      if (rows.length) {
        md.push('| # | Bericht | Toelichting |', '|---|---|---|');
        rows.forEach((x, i) => md.push(`| ${i + 1} | ${x.from}${x.to ? ' → ' + x.to : ''}: ${x.label} | ${String(x.detail).replace(/\|/g, '\\|')} |`));
        md.push('');
      }
    }
    return md.join('\n');
  }
  md.push('```mermaid', m.kind === 'er' ? erMermaid(m) : classMermaid(m), '```', '');
  for (const g of m.groups || []) {
    md.push(`## ${g.namespace || 'Overig'}`, '');
    for (const c of g.classes || g.tables || []) {
      md.push(`### ${c.name}${c.stereotype ? ` «${c.stereotype}»` : ''}${c.pattern ? ` — ${c.pattern}` : ''}`, '');
      if (c.description) md.push(c.description, '');
      if (c.grasp) md.push(`**GRASP:** ${c.grasp}`, '');
      if (c.note) md.push(c.note, '');
      if (c.columns) {
        md.push('| Kolom | Type | Sleutel | Null | Toelichting |', '|---|---|---|---|---|');
        c.columns.forEach(x => md.push(`| ${x.name} | ${x.type} | ${[x.pk && 'PK', x.fk && `FK → ${x.fk}`, x.unique && 'UK'].filter(Boolean).join(', ')} | ${x.nullable ? 'ja' : 'nee'} | ${x.note || ''} |`));
        md.push('');
        if (c.indexes?.length) md.push('Indexen: ' + c.indexes.map(i => `\`${i}\``).join(', '), '');
      } else {
        const mem = [...(c.attributes || []), ...(c.methods || [])];
        if (mem.length) { mem.forEach(x => md.push(`- \`${x}\``)); md.push(''); }
      }
    }
  }
  const rel = (m.relations || []).filter(r => r.description);
  if (rel.length) {
    md.push('## Relaties', '', '| Van | Type | Naar | Toelichting |', '|---|---|---|---|');
    rel.forEach(r => md.push(`| ${r.from} | ${r.type || 'association'}${r.multiplicity ? ' ' + r.multiplicity : ''} | ${r.to} | ${String(r.description).replace(/\|/g, '\\|')} |`));
    md.push('');
  }
  return md.join('\n');
}

// Validatie: voorkom kapotte verwijzingen vóór er iets weggeschreven wordt.
const problems = [];
if (model.kind === 'sequence') {
  for (const s of model.sequences || []) {
    const ids = new Set(s.participants.map(p => p.id));
    s.steps.forEach((st, i) => {
      if (['alt', 'else', 'opt', 'loop', 'end'].includes(st.type)) return;
      if (!ids.has(st.from) || (st.to && !ids.has(st.to))) problems.push(`sequence "${s.title}" stap ${i + 1}: onbekende deelnemer`);
    });
  }
} else {
  const names = new Set();
  for (const g of model.groups || []) for (const c of g.classes || g.tables || []) {
    if (names.has(c.name)) problems.push(`dubbele naam: ${c.name}`);
    names.add(c.name);
  }
  for (const r of model.relations || []) {
    if (!names.has(r.from) || !names.has(r.to)) problems.push(`relatie ${r.from} → ${r.to}: onbekende klasse/tabel`);
    if (!r.description) problems.push(`relatie ${r.from} → ${r.to}: beschrijving ontbreekt`);
  }
}
if (problems.length) { console.error('Model ongeldig:\n- ' + problems.join('\n- ')); process.exit(2); }

const mdPath = opt('md'), htmlPath = opt('html');
const write = (p, text) => { mkdirSync(dirname(resolve(p)), { recursive: true }); writeFileSync(p, text); console.log('geschreven:', p); };
if (mdPath) write(mdPath, markdown(model));
if (htmlPath) {
  const tpl = readFileSync(resolve(here, 'viewer.html'), 'utf8');
  write(htmlPath, tpl.replace('__MODEL__', () => JSON.stringify(model).replace(/</g, '\\u003c')));
}
if (!mdPath && !htmlPath) console.error('Geef --md en/of --html op.');
