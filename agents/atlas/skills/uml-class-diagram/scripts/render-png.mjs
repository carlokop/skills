#!/usr/bin/env node
// Zet de SVG's uit de controlemap (build.mjs --check-dir) om naar PNG, voor de beeldcontrole
// door de controle-agent (ontwerppagina, punt 9). Per diagram een overzicht en, bij grote platen,
// tegels op ware grootte.
//
//   node render-png.mjs <check-dir> [--theme light|dark|both] [--only naam,naam] [--tile 1600]
//
// Gebruikt `sharp` (librsvg). Dat is geen onderdeel van de skill: het script zoekt het in
// SHARP_PATH en in node_modules van de werkmap. Het lettertype komt uit de skill (fonts/), via een
// eigen fontconfig-bestand.
import { createRequire } from 'node:module';
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const dir = args.find((a) => !a.startsWith('--'));
if (!dir) { console.error('Gebruik: node render-png.mjs <check-dir> [--theme light|dark|both] [--only a,b] [--tile 1600]'); process.exit(1); }

// lettertype via fontconfig, vóór sharp geladen wordt
const fc = join(tmpdir(), 'ontwerppagina-fonts.conf');
writeFileSync(fc, `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${join(here, 'fonts')}</dir><cachedir>${join(tmpdir(), 'ontwerppagina-fc-cache')}</cachedir><alias><family>DiagramSans</family><prefer><family>Liberation Sans</family></prefer></alias></fontconfig>`);
process.env.FONTCONFIG_FILE = fc;

const candidates = [process.env.SHARP_PATH, join(process.cwd(), 'node_modules', 'x.js')].filter(Boolean);
let sharp = null;
for (const c of candidates) { try { sharp = createRequire(c)('sharp'); break; } catch { /* volgende */ } }
if (!sharp) { console.error('sharp niet gevonden; zet SHARP_PATH naar een map met node_modules/sharp. De beeldcontrole kan dan niet automatisch.'); process.exit(4); }

const theme = opt('theme', 'light');
const only = opt('only', null)?.split(',');
const tile = Number(opt('tile', '1600'));
const svgDir = join(dir, 'svg'), outDir = join(dir, 'png');
mkdirSync(outDir, { recursive: true });
const files = readdirSync(svgDir).filter((f) => f.endsWith('.svg'))
  .filter((f) => theme === 'both' || f.endsWith(`-${theme}.svg`))
  .filter((f) => !only || only.some((o) => f.startsWith(`${o}-`)));
for (const f of files) {
  const base = f.replace(/\.svg$/, '');
  const src = join(svgDir, f);
  const meta = await sharp(src, { limitInputPixels: false }).metadata();
  const scale = Math.min(1, 2400 / Math.max(meta.width, meta.height));
  await sharp(src, { density: 72 * scale, limitInputPixels: false }).png().toFile(join(outDir, `${base}.png`));
  let tiles = 0;
  if (meta.width > tile * 1.25 || meta.height > tile * 1.25) {
    const full = await sharp(src, { limitInputPixels: false }).png().toBuffer();
    for (let y = 0; y < meta.height; y += tile) for (let x = 0; x < meta.width; x += tile) {
      await sharp(full, { limitInputPixels: false }).extract({ left: x, top: y, width: Math.min(tile, meta.width - x), height: Math.min(tile, meta.height - y) }).png().toFile(join(outDir, `${base}.r${y / tile}c${x / tile}.png`));
      tiles++;
    }
  }
  console.log(`${base}: ${meta.width}×${meta.height}${tiles ? `, ${tiles} tegels` : ''}`);
}
if (!existsSync(outDir)) process.exit(1);
