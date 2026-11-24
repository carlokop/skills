#!/usr/bin/env node
// Zelftest van de tekencontroles: een kleine plaat met opzettelijke fouten moet op elk punt
// (3, 5, 6, 7, 8) worden afgekeurd, en de goede versie moet slagen. Draai: node test-check.mjs
import { checkDiagram, misleadingSegments, alignedSegments, hugSegments } from './lib/check.mjs';

const spec = {
  frames: [{ id: 'F', title: 'Internal', parent: null }, { id: 'G', title: 'External', parent: null }],
  nodes: [{ id: 'A', frame: 'F' }, { id: 'B', frame: 'F' }, { id: 'C', frame: 'G' }, { id: 'X', frame: 'F' }],
  edges: [{ id: 'e1', from: 'A', to: 'B' }, { id: 'e2', from: 'A', to: 'C' }],
};
const good = () => ({
  width: 600, height: 400,
  frames: [{ id: 'F', x: 10, y: 10, w: 300, h: 300, tx: 22, ty: 18, tw: 60, th: 18 }, { id: 'G', x: 350, y: 10, w: 200, h: 300, tx: 362, ty: 18, tw: 60, th: 18 }],
  nodes: [{ id: 'A', x: 40, y: 60, w: 80, h: 40 }, { id: 'B', x: 40, y: 200, w: 80, h: 40 }, { id: 'C', x: 400, y: 200, w: 80, h: 40 }, { id: 'X', x: 200, y: 60, w: 80, h: 40 }],
  edges: [
    { id: 'e1', points: [[80, 100], [80, 200]], labels: [{ id: 'e1#c', text: '-b', x: 56, y: 140, w: 20, h: 15 }] },
    { id: 'e2', points: [[100, 100], [100, 170], [440, 170], [440, 200]], labels: [] },
  ],
});
const cases = [
  ['goed', (g) => g, []],
  ['3 element zonder positie', (g) => { g.nodes[0].x = NaN; return g; }, [3]],
  ['5 element buiten kader', (g) => { g.nodes[3].x = 290; return g; }, [5]],
  ['6 lijn door element', (g) => { g.edges[1].points = [[100, 100], [100, 80], [440, 80], [440, 200]]; return g; }, [6]],
  ['6 lijn door een ander kader', (g) => { g.edges[0].points = [[80, 100], [80, 120], [400, 120], [400, 180], [80, 180], [80, 200]]; g.edges[0].labels = []; return g; }, [6, 8]],
  ['7 labels overlappen', (g) => { g.edges[1].labels.push({ id: 'e2#c', text: 'x', x: 60, y: 142, w: 20, h: 15 }); return g; }, [7]],
  ['7 label over lijn', (g) => { g.edges[0].labels[0].x = 95; g.edges[0].labels[0].y = 163; return g; }, [7]],
  ['7 label doorsneden door eigen lijn', (g) => { g.edges[0].labels[0].x = 70; return g; }, [7]],
  ['3 lijn buiten de plaat', (g) => { g.edges[1].points = [[100, 100], [100, 170], [590, 170], [590, 420], [440, 420], [440, 240]]; return g; }, [3]],
  ['6 lijn langs de rand van een kader', (g) => { g.edges[1].points = [[100, 100], [100, 170], [345, 170], [345, 230], [400, 230]]; g.nodes[2].y = 210; return g; }, [6]],
  ['6 lijn langs de rand van een element', (g) => { g.edges[1].points = [[100, 100], [100, 103], [300, 103], [300, 170], [440, 170], [440, 200]]; return g; }, [6]],
  ['8 lijn tweemaal door de rand', (g) => { g.edges[1].points = [[100, 100], [100, 170], [330, 170], [330, 260], [290, 260], [290, 290], [440, 290], [440, 240]]; return g; }, [8]],
];
let fail = 0;
// misleidend en in elkaars verlengde (aandachtspunten; het script verschuift ze)
const lines = (edges) => ({ edges: edges.map(([id, points]) => ({ id, points, labels: [] })) });
for (const [name, n, expect] of [
  ['misleidend: loopt vlak langs het eindstuk en buigt pas bij het doel af', misleadingSegments(lines([['a', [[0, 0], [0, 100], [110, 100], [110, 300], [300, 300], [300, 320]]], ['b', [[200, 0], [200, 50], [100, 50], [100, 320]]]])).length, 1],
  ['in elkaars verlengde: eindstuk en begin van een andere lijn op één lijn', alignedSegments(lines([['a', [[50, 0], [50, 100]]], ['b', [[0, 140], [50, 140], [50, 300]]]])).length > 0, true],
  ['geen: twee lijnen ver uit elkaar', alignedSegments(lines([['a', [[50, 0], [50, 100]]], ['b', [[200, 140], [200, 300]]]])).length, 0],
  ['langs de rand van een element: stuk op 3 px van de onderrand', hugSegments({ nodes: [{ id: 'n', x: 0, y: 0, w: 200, h: 100 }], edges: [{ id: 'a', points: [[300, 50], [300, 103], [100, 103], [100, 300]] }] }).length, 1],
  ['geen: stuk 30 px van de rand', hugSegments({ nodes: [{ id: 'n', x: 0, y: 0, w: 200, h: 100 }], edges: [{ id: 'a', points: [[300, 50], [300, 130], [100, 130], [100, 300]] }] }).length, 0],
]) { const ok = n === expect; if (!ok) fail++; console.log(`${ok ? 'goed  ' : 'FOUT  '} ${name}: verwacht ${expect}, gevonden ${n}`); }
for (const [name, mut, expect] of cases) {
  const f = checkDiagram(spec, mut(good()));
  const got = [...new Set(f.map((x) => x.check))].sort();
  const ok = expect.length ? expect.every((c) => got.includes(c)) : got.length === 0;
  if (!ok) fail++;
  console.log(`${ok ? 'goed  ' : 'FOUT  '} ${name}: verwacht ${expect.join(',') || 'geen'}, gevonden ${got.join(',') || 'geen'}${f.length ? ' — ' + f[0].msg : ''}`);
}
process.exit(fail ? 1 : 0);
