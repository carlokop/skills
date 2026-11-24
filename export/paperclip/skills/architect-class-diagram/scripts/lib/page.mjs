// Zet het document en de getekende platen samen tot één zelfstandige HTML-pagina
// (vaste opbouw van de skill ontwerppagina). Geen externe scripts, lettertypen of runtime.
import { esc, blockHtml, inline, plain } from './markdown.mjs';
import { diagramRules, pageVars, partColor, THEMES } from './theme.mjs';
import { fontFaces } from './text.mjs';
import { pageSelection } from './doc.mjs';

/**
 * Vaste opbouw (skill ontwerppagina): titel, samenvatting, overzicht, per onderdeel kop + eerste
 * alinea + platen, keuzes, open vragen. De andere secties zijn naslag en komen niet op de pagina.
 * page: { doc, kindLabel, figures: Map(block → figureHtml), fullHtml, data, generatedFrom, layoutNote }
 */
export function buildPage(P) {
  const { doc } = P;
  const sel = pageSelection(doc);
  const anchors = new Map();
  for (const s of [...sel.summary, ...sel.choices, ...sel.open]) { anchors.set(s.id, s.title); s.blocks.forEach((b) => b.id && anchors.set(b.id, b.text)); }
  for (const d of sel.diagrams) { anchors.set(d.section.id, d.section.title); d.blocks.forEach((b) => b.id && anchors.set(b.id, b.text)); }
  const full = (s) => s.blocks.map((b) => blockFull(b, P, anchors)).join('');
  const picked = (d) => d.blocks.map((b) => blockFull(b, P, anchors)).join('');

  // titel en één zin
  const introFirst = doc.intro.find((b) => b.type === 'para');
  const head = `<header class="top wrap"><div class="eyebrow">${esc(P.kindLabel)}</div><h1>${esc(doc.title)}</h1>` +
    (introFirst ? `<p class="lead">${inline(introFirst.text, anchors)}</p>` : '') +
    `<div class="theme"><span>Weergave:</span> <button type="button" data-theme-set="auto" aria-pressed="true">Automatisch</button><button type="button" data-theme-set="light">Licht</button><button type="button" data-theme-set="dark">Donker</button></div></header>`;

  // samenvatting
  const samenvatting = `<section id="samenvatting"><h2>Samenvatting</h2>${sel.summary.length ? sel.summary.map(full).join('') : '<p>Geen samenvatting in de bron.</p>'}</section>`;

  // overzicht: plaat met de afhankelijkheden en het volledige diagram
  const isOverview = (d) => (doc.overview && d.section === doc.overview.section) || d.section === doc.fullMarkerSection;
  let overzicht = `<section id="overzicht"><h2>Overzicht</h2>`;
  for (const d of sel.diagrams.filter(isOverview)) overzicht += `<h3 id="${d.section.id}">${inline(d.section.title, anchors)}</h3>${picked(d)}`;
  if (!doc.fullMarkerSection) overzicht += `<h3 id="volledig-diagram">Volledig diagram</h3>${P.fullHtml}`;
  if (P.db) overzicht += `<h3 id="h-db-overzicht">Database: alle tabellen per gebied</h3>${P.db.overviewHtml}`;
  overzicht += '</section>';

  // per onderdeel en de andere secties met een diagram, in de volgorde van de bron
  const rest = sel.diagrams.filter((d) => !isOverview(d));
  // databasedeel: de plaat van een gebied staat bij de module van dat gebied (ontwerppagina, aanvulling WEB-96)
  const onderdelen = rest.map((d) => sectionHtml(d, picked(d) + (P.db?.bySection.get(d.section) || ''), anchors)).join('') +
    (P.db?.rest ? `<section id="db-overig"><h2>Database: andere gebieden</h2>${P.db.rest}</section>` : '');

  // keuzes en open vragen
  const keuzes = `<section id="keuzes"><h2>Keuzes</h2>${sel.choices.length ? sel.choices.map((s) => (sel.choices.length > 1 ? `<h3 id="${s.id}">${inline(s.title, anchors)}</h3>` : '') + full(s)).join('') : '<p>Geen.</p>'}</section>`;
  const open = `<section id="open-vragen"><h2>Open vragen</h2>${sel.open.length ? sel.open.map(full).join('') : '<p>Geen.</p>'}</section>`;

  const nav = `<nav class="toc wrap"><a href="#samenvatting">Samenvatting</a><a href="#overzicht">Overzicht</a>${rest.map((d) => { const p = d.section.part; return `<a href="#${d.section.id}">${p ? `<span class="sw ${p.key}"></span>` : ''}${esc(plain(d.section.title))}</a>`; }).join('')}<a href="#keuzes">Keuzes</a><a href="#open-vragen">Open vragen</a></nav>`;

  const foot = `<footer class="wrap"><p>Gegenereerd uit <code>${esc(P.generatedFrom)}</code>. Bij verschil geldt het bestand.</p><p class="muted">${esc(P.layoutNote)}</p></footer>`;

  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(doc.title)}</title><style>${css(doc)}</style></head><body>` +
    head + nav + `<main class="wrap">${samenvatting}${overzicht}${onderdelen}${keuzes}${open}</main>` + foot +
    `<script type="application/json" id="dm-data">${JSON.stringify(P.data).replace(/</g, '\\u003c')}</script><script>${JS}</script></body></html>`;
}

function sectionHtml(d, body, anchors) {
  const s = d.section, part = s.part;
  const h = part ? `<h2 id="${s.id}" class="part-h ${part.key}"><span class="sw ${part.key}"></span>${inline(s.title, anchors)}</h2>` : `<h2 id="${s.id}">${inline(s.title, anchors)}</h2>`;
  return `<section class="${part ? 'part ' + part.key : ''}">${h}${body}</section>`;
}

function blockFull(b, P, anchors) {
  if (b.type === 'heading') return `<h${Math.min(6, b.level + (b.level >= 3 ? 0 : 1))} id="${b.id}">${inline(b.text, anchors)}</h${Math.min(6, b.level + (b.level >= 3 ? 0 : 1))}>`;
  if (b.type === 'comment' && P.doc.fullMarkerSection && b.text === 'volledig-dcd') return P.fullHtml;
  if (b.plate || b.sequences) return P.figures.get(b) || '';
  return blockHtml(b, anchors);
}

function css(doc) {
  const parts = doc.parts;
  const swatch = (theme, pre) => parts.map((p) => `${pre}.sw.${p.key}{background:${partColor(p.index, theme)}}${pre}.part-h.${p.key}{border-left-color:${partColor(p.index, theme)}}`).join('');
  const dk = ':root:not([data-theme=light]) ';
  return fontFaces() + `
:root{${pageVars('light')}color-scheme:light;--f:DiagramSans,"Liberation Sans",Arial,Helvetica,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){${pageVars('dark')}color-scheme:dark}}
:root[data-theme=dark]{${pageVars('dark')}color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.6 var(--f)}
.wrap{max-width:1280px;margin:0 auto;padding:0 18px}
header.top{padding:34px 18px 6px}
.eyebrow{font:700 12px/1 var(--f);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
h1{font:700 34px/1.15 var(--f);margin:10px 0 12px}
h2{font:700 24px/1.25 var(--f);margin:0 0 12px}
h3{font:700 17px/1.3 var(--f);margin:24px 0 8px}
h4,h5{font:700 15px/1.3 var(--f);margin:18px 0 6px}
.lead{font-size:17px;max-width:80ch}
p,ul,ol{max-width:84ch}
code{font-size:.9em;background:color-mix(in srgb,var(--ink) 8%,transparent);padding:1px 4px;border-radius:3px}
pre.code{background:var(--panel);border:1px solid var(--rule);border-radius:6px;padding:10px 12px;overflow:auto;font-size:13px}
pre.code code{background:none;padding:0}
.ref{border-bottom:1px dotted var(--muted)}
a{color:var(--accent)}
.muted{color:var(--muted);font-size:13px}
nav.toc{display:flex;flex-wrap:wrap;gap:6px;margin:14px auto 4px}
nav.toc a{font-size:13px;color:var(--ink);text-decoration:none;padding:3px 9px;border:1px solid var(--rule);border-radius:4px;background:var(--panel);display:inline-flex;align-items:center;gap:6px}
.sw{display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--muted)}
.chip{display:inline-flex;align-items:center;gap:6px;font-size:13px;border:1px solid var(--rule);border-radius:4px;padding:1px 8px;margin:2px 0;background:var(--panel)}
main section{padding-top:28px;border-top:1px solid var(--rule);margin-top:28px}
.part-h{border-left:6px solid var(--muted);padding-left:10px;display:flex;align-items:center;gap:8px}
.part-h .sw{display:none}
.tbl{overflow-x:auto;margin:10px 0 14px}
table{border-collapse:collapse;width:100%;font-size:14px;background:var(--panel);border:1px solid var(--rule)}
th{text-align:left;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);padding:7px 10px;border-bottom:1px solid var(--rule)}
td{padding:7px 10px;border-bottom:1px solid var(--rule);vertical-align:top}
tr:last-child td{border-bottom:0}
.theme{margin:10px 0 0;font-size:13px;color:var(--muted);display:flex;gap:4px;align-items:center}
.theme button,.dg-bar button{font:13px var(--f);color:var(--ink);background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:2px 10px;cursor:pointer}
.theme button[aria-pressed=true],.dg-bar button[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--panel)}
figure.dg{margin:12px 0 18px}
figure.dg figcaption{font-size:13px;color:var(--muted);margin-top:4px}
.dg-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;font-size:13px}
.dg-bar .zv{min-width:48px;text-align:center;color:var(--muted);font-variant-numeric:tabular-nums}
.dg-bar .hint{color:var(--muted);flex:1 1 220px}
.dg-bar label{display:inline-flex;gap:4px;align-items:center}
.dg-grid{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:12px;align-items:start}
@media (max-width:900px){.dg-grid{grid-template-columns:1fr}}
.dg-scroll{background:var(--panel);border:1px solid var(--rule);border-radius:6px;overflow:auto;max-height:80vh;cursor:grab}
figure.big .dg-scroll{max-height:88vh}
.dg-scroll.drag{cursor:grabbing;user-select:none}
.dg-scroll svg{display:block}
aside.info{background:var(--panel);border:1px solid var(--rule);border-radius:6px;padding:12px 14px;font-size:14px;position:sticky;top:12px;max-height:80vh;overflow:auto}
aside.info h4{margin:0 0 2px;font-size:16px;overflow-wrap:anywhere}
aside.info h5{font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);margin:12px 0 4px}
aside.info ul{list-style:none;padding:0;margin:0;display:grid;gap:5px}
aside.info li{padding:4px 8px;border-left:3px solid var(--accent);background:color-mix(in srgb,var(--accent) 6%,var(--panel));line-height:1.4;overflow-wrap:anywhere}
aside.info li.mem{border-left-color:var(--rule);background:none;padding:1px 0 1px 8px;font-size:12.5px}
aside.info .stereo{font-size:12px;color:var(--muted)}
aside.info .nl{font-size:14px;color:var(--muted)}
aside.info .empty{color:var(--muted)}
aside.info .d{color:var(--muted);display:block;font-size:12.5px;margin-top:2px}
.sr{position:absolute;left:-9999px}
footer{padding:30px 18px 50px;font-size:14px;border-top:1px solid var(--rule);margin-top:30px}
${diagramRules('light', parts)}
@media (prefers-color-scheme:dark){${diagramRules('dark', parts, dk)}${swatch('dark', dk)}}
${diagramRules('dark', parts, ':root[data-theme=dark] ')}
${swatch('light', '')}
${swatch('dark', ':root[data-theme=dark] ')}
svg.dm .node,svg.dm .edge,svg.dm .msg{cursor:pointer}
svg.dm.hide-association .k-association,svg.dm.hide-dependency .k-dependency,svg.dm.hide-realization .k-realization,svg.dm.hide-inheritance .k-inheritance,svg.dm.hide-composition .k-composition,svg.dm.hide-aggregation .k-aggregation,svg.dm.hide-fk .k-fk{display:none}
`;
}

// Bediening in de pagina: zoom, slepen, klik → buren en infopaneel, "Alleen namen", lijnsoorten.
const JS = `
(()=>{
const D=JSON.parse(document.getElementById('dm-data').textContent);
// brede, onzichtbare klikstrook onder elke lijn (niet in de bron-SVG, om de pagina klein te houden)
document.querySelectorAll('svg.dm .edge > .e-line, svg.dm .msg > .e-line').forEach(l=>{const h=l.cloneNode();h.setAttribute('class','e-hit');l.before(h);});
const root=document.documentElement;
document.querySelectorAll('[data-theme-set]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.themeSet;if(v==='auto')root.removeAttribute('data-theme');else root.setAttribute('data-theme',v);document.querySelectorAll('[data-theme-set]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));}));
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function sentence(e,a,b){
 const l=e.l||'';let s;
 switch(e.k){
  case 'association': s=/^[-+#~]/.test(l)?a+' houdt '+b+' vast in het veld '+l+' (attribuutzichtbaarheid)':a+' gebruikt '+b+(l?' ('+l+')':'');break;
  case 'composition': s=a+' bestaat uit '+b+(l?' (veld '+l+')':'')+'; het deel bestaat alleen via het geheel';break;
  case 'aggregation': s=a+' bevat '+b+(l?' ('+l+')':'');break;
  case 'dependency': s=/«parameter»/.test(l)?a+' krijgt '+b+' mee als parameter'+(l.replace('«parameter»','').trim()?' ('+l.replace('«parameter»','').trim()+')':''):/«local»/.test(l)?a+' haalt '+b+' op of maakt het zelf (lokale zichtbaarheid'+(l.replace('«local»','').trim()?': '+l.replace('«local»','').trim():'')+')':a+' gebruikt '+b+' tijdelijk'+(l?' ('+l+')':'');break;
  case 'realization': s=a+' implementeert '+b+(l?' ('+l+')':'');break;
  case 'inheritance': s=a+' erft van '+b+(l?' ('+l+')':'');break;
  case 'fk': s=b+' verwijst met een FK naar '+a+(l?' ('+l+')':'');break;
  default: s=a+' → '+b+(l?' ('+l+')':'');
 }
 if(e.tl||e.hl) s+='; multipliciteit '+(e.tl||'')+' : '+(e.hl||'');
 return s+'.';
}
function nodeInfo(fig,id){const f=D.figs[fig];const r=f.nodes[id];if(r==null)return null;return typeof r==='string'?D.classes[r]:r;}
function showNode(fig,id,aside){
 const n=nodeInfo(fig,id)||{n:id};const f=D.figs[fig];
 let h='<h4>'+esc(n.n||id)+'</h4>'+(n.nl?'<div class="nl">'+esc(n.nl)+'</div>':'')+(n.s?'<div class="stereo">«'+esc(n.s)+'»</div>':'');
 if(n.p) h+='<p><span class="chip"><span class="sw '+esc(n.pk)+'"></span>'+esc(n.p)+(n.g?' · '+esc(n.g):'')+'</span></p>';
 if(n.d) h+='<p>'+esc(n.d)+'</p>';
 if(n.pat) h+='<p><strong>Patroon:</strong> '+esc(n.pat)+'</p>';
 if(n.gr) h+='<p><strong>GRASP:</strong> '+esc(n.gr)+'</p>';
 if(n.a&&n.a.length) h+='<h5>'+(n.ah||'Attributen')+' ('+n.a.length+')</h5><ul>'+n.a.map(x=>'<li class="mem">'+esc(x)+'</li>').join('')+'</ul>';
 if(n.m&&n.m.length) h+='<h5>Methoden ('+n.m.length+')</h5><ul>'+n.m.map(x=>'<li class="mem">'+esc(x)+'</li>').join('')+'</ul>';
 if(f.edges){const rel=f.edges.filter(e=>e.f===id||e.t===id);h+='<h5>Relaties ('+rel.length+')</h5>'+(rel.length?'<ul>'+rel.map(e=>'<li>'+esc(sentence(e,e.f,e.t))+(e.d?'<span class="d">'+esc(e.d)+'</span>':'')+'</li>').join('')+'</ul>':'<p class="empty">Geen lijnen op deze plaat.</p>');}
 if(f.msgs){const rel=f.msgs.filter(m=>m.f===id||m.t===id);h+='<h5>Berichten ('+rel.length+')</h5><ul>'+rel.map(m=>'<li>'+m.n+'. '+esc(m.l)+(m.d?'<span class="d">'+esc(m.d)+'</span>':'')+'</li>').join('')+'</ul>';}
 aside.innerHTML=h;
}
function showEdge(fig,i,aside){const e=D.figs[fig].edges.find(x=>x.i===i);if(!e)return;aside.innerHTML='<h4>Relatie</h4><div class="stereo">'+esc(e.k)+(e.l?' · '+esc(e.l):'')+'</div><p>'+esc(sentence(e,e.f,e.t))+'</p>'+(e.d?'<p>'+esc(e.d)+'</p>':'');}
function showMsg(fig,k,aside){const F=D.figs[fig],m=F.msgs[k],nm=x=>(F.nodes[x]&&F.nodes[x].n)||x;aside.innerHTML='<h4>Bericht '+m.n+'</h4><div class="stereo">'+esc(nm(m.f))+' → '+esc(nm(m.t))+'</div><p><code>'+esc(m.l)+'</code></p>'+(m.d?'<p>'+esc(m.d)+'</p>':'');}
document.querySelectorAll('figure.dg').forEach(fig=>{
 const id=fig.dataset.fig,sc=fig.querySelector('.dg-scroll'),aside=fig.querySelector('aside.info'),zv=fig.querySelector('.zv');
 let z=1;
 const svgs=()=>[...sc.querySelectorAll('svg.dm')];
 const vis=()=>svgs().find(s=>!s.hasAttribute('hidden'));
 const W=s=>+s.getAttribute('viewBox').split(' ')[2],H=s=>+s.getAttribute('viewBox').split(' ')[3];
 function apply(nz,cx,cy){const s=vis();const r=sc.getBoundingClientRect();cx=cx??r.width/2;cy=cy??r.height/2;const fx=(sc.scrollLeft+cx)/z,fy=(sc.scrollTop+cy)/z;z=Math.max(.05,Math.min(3,nz));svgs().forEach(v=>{v.setAttribute('width',W(v)*z);v.setAttribute('height',H(v)*z);});sc.scrollLeft=fx*z-cx;sc.scrollTop=fy*z-cy;if(zv)zv.textContent=Math.round(z*100)+'%';}
 const fit=()=>{const s=vis();apply(Math.min(1,(sc.clientWidth-2)/W(s),Math.max(.25,(sc.clientHeight||600)/H(s))));sc.scrollLeft=0;sc.scrollTop=0;};
 fig.querySelectorAll('[data-z]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.z;if(v==='in')apply(z*1.25);else if(v==='out')apply(z/1.25);else if(v==='fit')fit();else apply(1);}));
 sc.addEventListener('wheel',ev=>{if(!ev.ctrlKey&&!ev.metaKey)return;ev.preventDefault();const r=sc.getBoundingClientRect();apply(z*(ev.deltaY<0?1.12:1/1.12),ev.clientX-r.left,ev.clientY-r.top);},{passive:false});
 let drag=null,moved=false;
 sc.addEventListener('pointerdown',ev=>{if(ev.button!==0)return;drag={x:ev.clientX,y:ev.clientY,l:sc.scrollLeft,t:sc.scrollTop};moved=false;});
 window.addEventListener('pointermove',ev=>{if(!drag)return;const dx=ev.clientX-drag.x,dy=ev.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>4){moved=true;sc.classList.add('drag');}sc.scrollLeft=drag.l-dx;sc.scrollTop=drag.t-dy;});
 window.addEventListener('pointerup',()=>{drag=null;sc.classList.remove('drag');});
 function clear(s){s.classList.remove('focus');s.querySelectorAll('.on,.sel').forEach(x=>x.classList.remove('on','sel'));}
 sc.addEventListener('click',ev=>{
  if(moved)return;const s=vis();clear(s);
  const node=ev.target.closest('.node'),edge=ev.target.closest('.edge'),msg=ev.target.closest('.msg');
  if(node){const nid=node.dataset.id;s.classList.add('focus');s.querySelectorAll('.node').forEach(x=>{if(x.dataset.id===nid)x.classList.add('on','sel');});s.querySelectorAll('.edge,.msg').forEach(e=>{if(e.dataset.a===nid||e.dataset.b===nid){e.classList.add('on');const o=e.dataset.a===nid?e.dataset.b:e.dataset.a;s.querySelectorAll('.node').forEach(x=>{if(x.dataset.id===o)x.classList.add('on');});}});showNode(id,nid,aside);}
  else if(edge){s.classList.add('focus');edge.classList.add('on');s.querySelectorAll('.node').forEach(x=>{if(x.dataset.id===edge.dataset.a||x.dataset.id===edge.dataset.b)x.classList.add('on');});showEdge(id,edge.dataset.e,aside);}
  else if(msg){s.classList.add('focus');msg.classList.add('on');showMsg(id,+msg.dataset.m,aside);}
  else aside.innerHTML='<p class="empty">Klik op een element of lijn.</p>';
 });
 // toetsenbord: Tab naar een element, lijn of bericht; Enter of spatie kiest; Escape heft op
 fig.querySelectorAll('.node,.edge,.msg').forEach(x=>{x.setAttribute('tabindex','0');x.setAttribute('role','button');});
 sc.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){const t=ev.target.closest('.node,.edge,.msg');if(t){ev.preventDefault();moved=false;t.dispatchEvent(new MouseEvent('click',{bubbles:true}));}}else if(ev.key==='Escape'){clear(vis());aside.innerHTML='<p class="empty">Klik op een element of lijn.</p>';}});
 const names=fig.querySelector('[data-names]');
 if(names) names.addEventListener('click',()=>{const on=names.getAttribute('aria-pressed')!=='true';names.setAttribute('aria-pressed',String(on));const [full,short]=svgs();clear(full);clear(short);(on?full:short).setAttribute('hidden','');(on?short:full).removeAttribute('hidden');apply(z);});
 fig.querySelectorAll('[data-kind]').forEach(cb=>cb.addEventListener('change',()=>svgs().forEach(s=>s.classList.toggle('hide-'+cb.dataset.kind,!cb.checked))));
 if(W(vis())>sc.clientWidth) fit(); else if(zv) zv.textContent='100%';
});
})();
`;
