// Kleuren voor licht en donker. Elk onderdeel (module of gebied) krijgt één kleur,
// in elk diagram dezelfde. De regels gebruiken geen CSS-variabelen, zodat dezelfde
// stijl ook werkt bij het omzetten naar PNG voor de controle.

const PALETTE = [
  ['#2f63b5', '#7fa8ee'], ['#1c8466', '#5cc8a3'], ['#a8650a', '#e0a54c'], ['#bb3f2a', '#ef8b74'],
  ['#6f48b8', '#ad8cf0'], ['#0d7f99', '#5cc2da'], ['#557f1c', '#a3c96a'], ['#8a3d8f', '#d89ad9'],
  ['#3d4f6e', '#b4c1dc'], ['#8c6d1f', '#d7b65c'], ['#667080', '#a5acb8'], ['#b03a5b', '#ee8aa6'],
];

export const THEMES = {
  light: { paper: '#f5f6f8', panel: '#ffffff', ink: '#1b2130', muted: '#586174', rule: '#d8dce4', line: '#5f6878', accent: '#2346c8', neutral: '#808795', hl: '#d9480f' },
  dark: { paper: '#11141a', panel: '#191d25', ink: '#e4e8ef', muted: '#9aa3b3', rule: '#2a303b', line: '#8b94a5', accent: '#93a8ff', neutral: '#a0a6b1', hl: '#ff8c42' },
};

export function partColor(index, theme) {
  const p = PALETTE[index % PALETTE.length];
  return theme === 'dark' ? p[1] : p[0];
}

function hex(c) { const n = parseInt(c.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
export function mix(a, b, t) {
  const x = hex(a), y = hex(b);
  return '#' + x.map((v, i) => Math.round(v * t + y[i] * (1 - t)).toString(16).padStart(2, '0')).join('');
}

/** CSS-regels voor de diagrammen in één thema; `pre` is een selector-voorvoegsel. */
export function diagramRules(theme, parts, pre = '') {
  const T = THEMES[theme];
  const P = (sel) => sel.split(',').map((s) => `${pre}${s.trim()}`).join(',');
  const r = [];
  const colorRules = (cls, ac) => {
    r.push(`${P(`svg.dm .${cls} .box`)}{fill:${mix(ac, T.panel, 0.12)};stroke:${ac}}`);
    r.push(`${P(`svg.dm .${cls} .sep`)}{stroke:${mix(ac, T.panel, 0.55)}}`);
    r.push(`${P(`svg.dm .frame.${cls} .frame-box`)}{fill:${mix(ac, T.panel, 0.05)};stroke:${mix(ac, T.panel, 0.5)}}`);
    r.push(`${P(`svg.dm .frame.ns-pub.${cls} .frame-box`)}{fill:${mix(ac, T.panel, 0.08)};stroke:${mix(ac, T.panel, 0.75)}}`);
    r.push(`${P(`svg.dm .frame.part.${cls} .frame-box`)}{fill:${mix(ac, T.panel, 0.03)};stroke:${ac}}`);
    r.push(`${P(`svg.dm .frame.${cls} .frame-title`)}{fill:${ac}}`);
  };
  r.push(`${P('svg.dm')}{background:${T.panel}}`);
  r.push(`${P('svg.dm .bg')}{fill:${T.panel}}`);
  r.push(`${P('svg.dm text')}{font-family:DiagramSans,"Liberation Sans",Arial,Helvetica,sans-serif;fill:${T.ink}}`);
  r.push(`${P('svg.dm .frame-box')}{fill:${T.panel};stroke:${T.muted};stroke-width:1.2;stroke-dasharray:5 4}`);
  r.push(`${P('svg.dm .frame.ns-pub .frame-box')}{stroke-dasharray:none;stroke-width:1.6}`);
  r.push(`${P('svg.dm .frame.part .frame-box')}{stroke-dasharray:none;stroke-width:2}`);
  r.push(`${P('svg.dm .frame-title')}{font-size:13px;font-weight:700;fill:${T.muted}}`);
  r.push(`${P('svg.dm .box')}{fill:${mix(T.neutral, T.panel, 0.1)};stroke:${T.neutral};stroke-width:1.4}`);
  r.push(`${P('svg.dm .sep')}{stroke:${mix(T.neutral, T.panel, 0.55)};stroke-width:1}`);
  r.push(`${P('svg.dm .pub .box')}{stroke-width:2.2}`);
  r.push(`${P('svg.dm .ext .box')}{fill:${T.panel};stroke-dasharray:4 3}`);
  r.push(`${P('svg.dm .t-name')}{font-size:13.5px;font-weight:700}`);
  r.push(`${P('svg.dm .t-stereo')}{font-size:10.5px;fill:${T.muted}}`);
  r.push(`${P('svg.dm .t-nl')}{font-size:11.5px;fill:${T.muted}}`);
  r.push(`${P('svg.dm .t-mem')}{font-size:11.5px}`);
  r.push(`${P('svg.dm .e-line')}{fill:none;stroke:${T.line};stroke-width:1.3}`);
  r.push(`${P('svg.dm .k-dependency .e-line, svg.dm .k-realization .e-line, svg.dm .k-return .e-line')}{stroke-dasharray:6 4}`);
  r.push(`${P('svg.dm .e-head')}{fill:none;stroke:${T.line};stroke-width:1.3}`);
  r.push(`${P('svg.dm .e-head.solid')}{fill:${T.line}}`);
  r.push(`${P('svg.dm .e-head.hollow')}{fill:${T.panel}}`);
  r.push(`${P('svg.dm .e-label')}{font-size:11px;fill:${T.muted}}`);
  r.push(`${P('svg.dm .e-hit')}{fill:none;stroke:transparent;stroke-width:9}`);
  // sequentiediagram
  r.push(`${P('svg.dm .lifeline')}{stroke:${T.rule};stroke-width:1.2;stroke-dasharray:4 4}`);
  r.push(`${P('svg.dm .frag-box')}{fill:none;stroke:${T.muted};stroke-width:1}`);
  r.push(`${P('svg.dm .frag-tab')}{fill:${T.paper};stroke:${T.muted};stroke-width:1}`);
  r.push(`${P('svg.dm .frag-sep')}{stroke:${T.muted};stroke-width:1;stroke-dasharray:5 4}`);
  r.push(`${P('svg.dm .frag-label')}{font-size:11px;font-weight:700;fill:${T.muted}}`);
  r.push(`${P('svg.dm .frag-cond')}{font-size:11px;font-style:italic;fill:${T.muted};paint-order:stroke;stroke:${T.panel};stroke-width:4px;stroke-linejoin:round}`);
  r.push(`${P('svg.dm .note-box')}{fill:${theme === 'dark' ? '#3a2f12' : '#fff4d6'};stroke:${theme === 'dark' ? '#8a6d2a' : '#e0c27a'}}`);
  r.push(`${P('svg.dm .note-text')}{font-size:11px;fill:${theme === 'dark' ? '#f3d389' : '#6b4a00'}}`);
  r.push(`${P('svg.dm .seq-num')}{font-size:10px;font-weight:700;fill:${T.panel}}`);
  r.push(`${P('svg.dm .seq-dot')}{fill:${T.muted}}`);
  parts.forEach((p) => colorRules(p.key, partColor(p.index, theme)));
  // nadruk bij klikken
  r.push(`${P('svg.dm.focus .node, svg.dm.focus .edge, svg.dm.focus .msg')}{opacity:.22}`);
  r.push(`${P('svg.dm.focus .node.on, svg.dm.focus .edge.on, svg.dm.focus .msg.on')}{opacity:1}`);
  r.push(`${P('svg.dm .edge.on .e-line, svg.dm .msg.on .e-line')}{stroke:${T.hl};stroke-width:2.2}`);
  r.push(`${P('svg.dm .edge.on .e-head, svg.dm .msg.on .e-head')}{stroke:${T.hl}}`);
  r.push(`${P('svg.dm .edge.on .e-head.solid, svg.dm .msg.on .e-head.solid')}{fill:${T.hl}}`);
  r.push(`${P('svg.dm .edge.on .e-label')}{fill:${T.hl};font-weight:700}`);
  r.push(`${P('svg.dm .node.sel .box')}{stroke:${T.hl};stroke-width:3}`);
  return r.join('\n');
}

export function pageVars(theme) {
  const T = THEMES[theme];
  return `--paper:${T.paper};--panel:${T.panel};--ink:${T.ink};--muted:${T.muted};--rule:${T.rule};--accent:${T.accent};--chip:${theme === 'dark' ? '#3a2f12' : '#fff4d6'};--chip-ink:${theme === 'dark' ? '#f3d389' : '#6b4a00'};`;
}
