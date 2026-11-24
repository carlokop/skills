// Kleine Markdown-lezer voor ontwerpdocumenten: koppen, alinea's, lijsten, tabellen,
// codeblokken en HTML-commentaar (zoals <!-- gen:naam -->). Geen externe bibliotheek.

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Zet Markdown om naar een lijst blokken. Een gen-gebied wordt één blok {type:'gen', name}. */
export function parseBlocks(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    let m;
    if (!line.trim()) { i++; continue; }
    if ((m = line.match(/^<!-- gen:([A-Za-z0-9_-]+) -->/))) {
      const end = lines.findIndex((l, j) => j > i && l.startsWith(`<!-- /gen:${m[1]} -->`));
      if (end < 0) throw new Error(`gen-gebied ${m[1]} niet afgesloten`);
      blocks.push({ type: 'gen', name: m[1], raw: lines.slice(i, end + 1).join('\n') });
      i = end + 1; continue;
    }
    if ((m = line.match(/^<!--\s*([\s\S]*?)\s*-->\s*$/))) { blocks.push({ type: 'comment', text: m[1] }); i++; continue; }
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) { blocks.push({ type: 'heading', level: m[1].length, text: m[2].trim() }); i++; continue; }
    if ((m = line.match(/^(\s*)```\s*([\w-]*)\s*$/))) {
      const end = lines.findIndex((l, j) => j > i && /^\s*```\s*$/.test(l));
      const body = lines.slice(i + 1, end < 0 ? lines.length : end).join('\n');
      blocks.push({ type: 'code', lang: m[2] || '', text: body });
      i = end < 0 ? lines.length : end + 1; continue;
    }
    if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const rows = [];
      let j = i;
      while (j < lines.length && /^\s*\|.*\|\s*$/.test(lines[j])) { rows.push(lines[j]); j++; }
      const cells = (r) => splitRow(r);
      blocks.push({ type: 'table', head: cells(rows[0]), rows: rows.slice(2).map(cells) });
      i = j; continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const items = [];
      const ordered = /^\s*\d+\./.test(line);
      let start = ordered ? Number(line.match(/^\s*(\d+)\./)[1]) : null;
      let j = i;
      while (j < lines.length) {
        const l = lines[j];
        const im = l.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
        if (im) { items.push({ indent: im[1].length, num: /\d/.test(im[2]) ? Number(im[2]) : null, text: im[3] }); j++; continue; }
        if (l.trim() && /^\s+\S/.test(l) && items.length) { items[items.length - 1].text += ' ' + l.trim(); j++; continue; }
        if (!l.trim() && j + 1 < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[j + 1]) && /^\s*([-*]|\d+\.)/.test(lines[j + 1]) === true && (/^\s*\d+\./.test(lines[j + 1]) === ordered)) { j++; continue; }
        break;
      }
      blocks.push({ type: 'list', ordered, start, items });
      i = j; continue;
    }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      blocks.push({ type: 'quote', text: buf.join(' ') });
      continue;
    }
    const buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|<!--|\s*\|.*\|\s*$|\s*([-*]|\d+\.)\s+|>)/.test(lines[i])) { buf.push(lines[i]); i++; }
    blocks.push({ type: 'para', text: buf.join(' ') });
  }
  return blocks;
}

function splitRow(r) {
  const s = r.trim().replace(/^\|/, '').replace(/\|$/, '');
  const out = [];
  let cur = '', inCode = false;
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c === '\\' && s[k + 1] === '|') { cur += '|'; k++; continue; }
    if (c === '`') inCode = !inCode;
    if (c === '|' && !inCode) { out.push(cur.trim()); cur = ''; continue; }
    cur += c;
  }
  out.push(cur.trim());
  return out;
}

/** Inline-opmaak. Links naar buiten worden een verwijzing zonder link (de pagina werkt offline). */
export function inline(text, anchors = new Map()) {
  // codespans eerst vervangen door een teken, zodat hun inhoud letterlijk blijft en **…`x`…** werkt
  const codes = [];
  let s = String(text).replace(/`([^`]*)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => {
    const h = href.replace(/&amp;/g, '&');
    if (h.startsWith('#') && anchors.has(h.slice(1))) return `<a href="${esc(h)}">${t}</a>`;
    return `<span class="ref" title="${esc(h)}">${t}</span>`;
  });
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?=[^*\w]|$)/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, k) => `<code>${esc(codes[+k])}</code>`);
}

/** Platte tekst van inline-Markdown (voor de controle op volledigheid). */
export function plain(text) {
  const codes = [];
  const t = String(text).replace(/`([^`]*)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; })
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+?)\*\*/g, '$1')
    .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?=[^*\w]|$)/g, '$1$2');
  return t.replace(/\u0000(\d+)\u0000/g, (_, k) => codes[+k]).replace(/\s+/g, ' ').trim();
}

/** Eén blok naar HTML (gen-blokken en diagrammen doet de pagina zelf). */
export function blockHtml(b, anchors) {
  switch (b.type) {
    case 'para': return `<p>${inline(b.text, anchors)}</p>`;
    case 'quote': return `<blockquote>${inline(b.text, anchors)}</blockquote>`;
    case 'code': return `<pre class="code"><code>${esc(b.text)}</code></pre>`;
    case 'table': {
      const th = b.head.map((c) => `<th>${inline(c, anchors)}</th>`).join('');
      const tr = b.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c, anchors)}</td>`).join('')}</tr>`).join('');
      return `<div class="tbl"><table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`;
    }
    case 'list': return listHtml(b, anchors);
    case 'comment': return '';
    default: return '';
  }
}

function listHtml(b, anchors) {
  // geneste lijsten op basis van inspringing
  const tag = b.ordered ? 'ol' : 'ul';
  let html = '';
  const stack = [];
  for (const it of b.items) {
    while (stack.length && it.indent < stack[stack.length - 1]) { html += `</li></${tag}>`; stack.pop(); }
    if (!stack.length || it.indent > stack[stack.length - 1]) {
      const start = !stack.length && b.ordered && b.start && b.start !== 1 ? ` start="${b.start}"` : '';
      const value = b.ordered && it.num != null ? ` value="${it.num}"` : '';
      html += `<${tag}${start}><li${value}>`;
      stack.push(it.indent);
    } else {
      const value = b.ordered && it.num != null ? ` value="${it.num}"` : '';
      html += `</li><li${value}>`;
    }
    html += inline(it.text, anchors);
  }
  while (stack.length) { html += `</li></${tag}>`; stack.pop(); }
  return html;
}

/** Platte tekst van een blok, per regel (voor de controle). */
export function blockTexts(b) {
  switch (b.type) {
    case 'para': case 'quote': return [plain(b.text)];
    case 'table': return [...b.head, ...b.rows.flat()].map(plain).filter(Boolean);
    case 'list': return b.items.map((it) => plain(it.text));
    case 'heading': return [plain(b.text)];
    default: return [];
  }
}

export function slug(s) {
  return plain(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
