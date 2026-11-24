// Tekstbreedte uit de meegeleverde Liberation Sans (metrisch gelijk aan Arial).
// De pagina bevat hetzelfde lettertype, dus de berekende maten kloppen in elke browser.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const FONT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts');

function parseFont(file) {
  const buf = readFileSync(file);
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const numTables = dv.getUint16(4);
  const tables = {};
  for (let i = 0; i < numTables; i++) {
    const o = 12 + i * 16;
    const tag = String.fromCharCode(buf[o], buf[o + 1], buf[o + 2], buf[o + 3]);
    tables[tag] = { offset: dv.getUint32(o + 8), length: dv.getUint32(o + 12) };
  }
  const unitsPerEm = dv.getUint16(tables.head.offset + 18);
  const numHMetrics = dv.getUint16(tables.hhea.offset + 34);
  const advances = [];
  for (let i = 0; i < numHMetrics; i++) advances.push(dv.getUint16(tables.hmtx.offset + i * 4));
  // cmap: zoek een Unicode-subtabel van formaat 4
  const cm = tables.cmap.offset;
  const n = dv.getUint16(cm + 2);
  let sub = null;
  for (let i = 0; i < n; i++) {
    const pid = dv.getUint16(cm + 4 + i * 8), eid = dv.getUint16(cm + 6 + i * 8);
    const off = dv.getUint32(cm + 8 + i * 8);
    if (dv.getUint16(cm + off) === 4 && (pid === 3 && eid === 1 || pid === 0)) { sub = cm + off; break; }
  }
  const segX2 = dv.getUint16(sub + 6), segs = segX2 / 2;
  const ends = sub + 14, starts = ends + segX2 + 2, deltas = starts + segX2, ranges = deltas + segX2;
  const cache = new Map();
  const glyph = (code) => {
    for (let s = 0; s < segs; s++) {
      const end = dv.getUint16(ends + s * 2);
      if (code > end) continue;
      const start = dv.getUint16(starts + s * 2);
      if (code < start) return 0;
      const delta = dv.getInt16(deltas + s * 2), ro = dv.getUint16(ranges + s * 2);
      if (ro === 0) return (code + delta) & 0xffff;
      const g = dv.getUint16(ranges + s * 2 + ro + (code - start) * 2);
      return g === 0 ? 0 : (g + delta) & 0xffff;
    }
    return 0;
  };
  return (code) => {
    if (cache.has(code)) return cache.get(code);
    const g = glyph(code);
    const w = advances[Math.min(g, numHMetrics - 1)] / unitsPerEm;
    cache.set(code, w);
    return w;
  };
}

const regular = parseFont(join(FONT_DIR, 'LiberationSans-Regular.ttf'));
const bold = parseFont(join(FONT_DIR, 'LiberationSans-Bold.ttf'));

/** Breedte in px van `text` bij `size` px; `weight` 'bold' of 'normal'. */
export function textWidth(text, size, weight = 'normal') {
  const adv = weight === 'bold' ? bold : regular;
  let w = 0;
  for (const ch of String(text)) w += adv(ch.codePointAt(0));
  return w * size;
}

/** De lettertypebestanden als base64, voor @font-face in de pagina. */
export function fontFaces() {
  const b64 = (f) => readFileSync(join(FONT_DIR, f)).toString('base64');
  return `@font-face{font-family:"DiagramSans";font-weight:400;src:url(data:font/ttf;base64,${b64('LiberationSans-Regular.ttf')}) format("truetype")}` +
    `@font-face{font-family:"DiagramSans";font-weight:700;src:url(data:font/ttf;base64,${b64('LiberationSans-Bold.ttf')}) format("truetype")}`;
}

export const FONT_DIRECTORY = FONT_DIR;
