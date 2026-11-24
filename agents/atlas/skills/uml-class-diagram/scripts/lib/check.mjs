// Toetsbare controles uit de skill ontwerppagina, per diagram, op de berekende tekening.
//  5 elk element ligt binnen het kader van zijn groep (en elk kader binnen zijn ouderkader)
//  6 geen lijn loopt door een kader of element waar hij niet begint of eindigt
//  7 geen labels over elkaar, en geen label over een element of lijn
//  8 een lijn tussen gebieden verlaat en betreedt een kader via de rand, één keer
//  3 het diagram is getekend (posities eindig, elke lijn heeft een pad, tekst past in het blok)

const EPS = 0.5;

const inside = (r, p, e = 0) => p[0] > r.x + e && p[0] < r.x + r.w - e && p[1] > r.y + e && p[1] < r.y + r.h - e;
const within = (a, b, tol = EPS) => a.x >= b.x - tol && a.y >= b.y - tol && a.x + a.w <= b.x + b.w + tol && a.y + a.h <= b.y + b.h + tol;
const overlap = (a, b, tol = EPS) => a.x < b.x + b.w - tol && b.x < a.x + a.w - tol && a.y < b.y + b.h - tol && b.y < a.y + a.h - tol;

/** Snijdt het lijnstuk p-q de binnenkant van rechthoek r (verkleind met e)? Lijnstukken zijn haaks. */
function segHitsRect(p, q, r, e = EPS) {
  const x0 = r.x + e, x1 = r.x + r.w - e, y0 = r.y + e, y1 = r.y + r.h - e;
  if (x0 >= x1 || y0 >= y1) return false;
  const minx = Math.min(p[0], q[0]), maxx = Math.max(p[0], q[0]), miny = Math.min(p[1], q[1]), maxy = Math.max(p[1], q[1]);
  if (Math.abs(p[1] - q[1]) < 0.01) return p[1] > y0 && p[1] < y1 && maxx > x0 && minx < x1;
  if (Math.abs(p[0] - q[0]) < 0.01) return p[0] > x0 && p[0] < x1 && maxy > y0 && miny < y1;
  // schuin (komt bij ELK niet voor): bemonsteren
  for (let t = 0; t <= 1; t += 0.02) if (inside(r, [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t], e)) return true;
  return false;
}

/** Aantal keer dat het pad de rand van r passeert (binnen ↔ buiten), en of dat bij een hoek gebeurt. */
function borderCrossings(points, r) {
  const state = (p) => (inside(r, p, EPS) ? 1 : !inside(r, p, -EPS) ? -1 : 0); // 0 = op de rand
  let last = null, count = 0, corner = false;
  for (let k = 0; k < points.length; k++) {
    const s = state(points[k]);
    if (s !== 0) { if (last !== null && s !== last) count++; last = s; }
    else {
      const p = points[k];
      const nearX = Math.min(Math.abs(p[0] - r.x), Math.abs(p[0] - r.x - r.w)) < 3;
      const nearY = Math.min(Math.abs(p[1] - r.y), Math.abs(p[1] - r.y - r.h)) < 3;
      if (nearX && nearY) corner = true;
    }
    // een lijnstuk dat van buiten naar binnen gaat zonder punt op de rand
    if (k > 0) {
      const a = state(points[k - 1]), b = state(points[k]);
      if (a !== 0 && b !== 0 && a !== b) { /* al geteld via last */ }
    }
  }
  return { count, corner };
}

/**
 * Voert de controles uit. spec: kaders/elementen/lijnen (met frame/parent), geo: opmaak.
 * Geeft een lijst bevindingen [{check, msg}] terug; leeg = geslaagd.
 */
export function checkDiagram(spec, geo, { frameTitleW = () => 0, textFits = null, hug = true } = {}) {
  const F = [];
  const add = (check, msg) => F.push({ check, msg });
  const nodeGeo = new Map(geo.nodes.map((n) => [n.id, n]));
  const frameGeo = new Map(geo.frames.map((f) => [f.id, f]));
  const parentOf = new Map();
  for (const f of spec.frames || []) parentOf.set(f.id, f.parent ?? null);
  for (const n of spec.nodes || []) parentOf.set(n.id, n.frame ?? null);
  const ancestors = (id) => { const a = new Set(); let p = parentOf.get(id); while (p) { a.add(p); p = parentOf.get(p); } return a; };

  // 3: getekend
  if (!(geo.width > 0 && geo.height > 0)) add(3, 'diagram zonder afmeting');
  if (!geo.nodes.length) add(3, 'diagram zonder elementen');
  for (const b of [...geo.nodes, ...geo.frames]) if (![b.x, b.y, b.w, b.h].every(Number.isFinite) || b.w <= 0 || b.h <= 0) add(3, `${b.id}: geen geldige positie`);
  for (const n of spec.nodes || []) if (!nodeGeo.has(n.id)) add(3, `${n.id}: niet getekend`);
  for (const e of geo.edges) if (!e.points || e.points.length < 2 || !e.points.flat().every(Number.isFinite)) add(3, `lijn ${e.id}: geen pad`);
  // een lijn buiten de plaat wordt afgesneden
  for (const e of geo.edges) if ((e.points || []).some(([x, y]) => x < 2 || y < 2 || x > geo.width - 2 || y > geo.height - 2)) add(3, `lijn ${e.id} loopt buiten de plaat`);
  if (textFits) for (const msg of textFits()) add(3, msg);

  // 5: elementen binnen hun kader
  for (const n of spec.nodes || []) {
    if (!n.frame) continue;
    const g = nodeGeo.get(n.id), f = frameGeo.get(n.frame);
    if (g && f && !within(g, f)) add(5, `${n.id} ligt niet binnen kader "${spec.frames.find((x) => x.id === n.frame).title}"`);
  }
  for (const f of spec.frames || []) {
    if (!f.parent) continue;
    const g = frameGeo.get(f.id), p = frameGeo.get(f.parent);
    if (g && p && !within(g, p)) add(5, `kader "${f.title}" ligt niet binnen zijn ouderkader`);
  }
  // kaders zonder gemeenschappelijke ouder mogen elkaar niet overlappen
  const fr = spec.frames || [];
  for (let i = 0; i < fr.length; i++) for (let j = i + 1; j < fr.length; j++) {
    const a = fr[i], b = fr[j];
    if (ancestors(a.id).has(b.id) || ancestors(b.id).has(a.id)) continue;
    if (overlap(frameGeo.get(a.id), frameGeo.get(b.id), 0)) add(5, `kaders "${a.title}" en "${b.title}" overlappen`);
  }
  // elementen overlappen elkaar niet
  for (let i = 0; i < geo.nodes.length; i++) for (let j = i + 1; j < geo.nodes.length; j++) {
    if (overlap(geo.nodes[i], geo.nodes[j], 0)) add(5, `elementen ${geo.nodes[i].id} en ${geo.nodes[j].id} overlappen`);
  }

  // 6 en 8: lijnen
  const edgeSpec = new Map((spec.edges || []).map((e) => [e.id, e]));
  for (const e of geo.edges) {
    const s = edgeSpec.get(e.id);
    if (!s) continue;
    const pts = e.points;
    const segs = pts.slice(1).map((q, k) => [pts[k], q]);
    for (const n of geo.nodes) {
      const isA = n.id === s.from, isB = n.id === s.to;
      segs.forEach(([p, q], k) => {
        if (isA && k === 0) return;
        if (isB && k === segs.length - 1) return;
        if (segHitsRect(p, q, n)) add(6, `lijn ${s.from} → ${s.to} loopt door element ${n.id}`);
      });
    }
    // geen stuk over of vlak langs de rand van een element: dan lijkt de lijn daar te beginnen of te eindigen
    // (hug: false bij het kiezen van de opmaak; die regel geldt alleen voor de eindcontrole en nudgeHugging)
    if (hug) for (const m of hugSegments({ nodes: geo.nodes, edges: [e] })) add(6, `lijn ${s.from} → ${s.to} loopt langs de rand van element ${m.by}`);
    // geen stuk over of vlak langs de rand van een kader (< 8 px, over meer dan 40 px)
    for (const f of spec.frames || []) {
      const g = frameGeo.get(f.id);
      if (!g) continue;
      for (const [p, q] of segs) {
        const hor = Math.abs(p[1] - q[1]) < 0.5, ver = Math.abs(p[0] - q[0]) < 0.5;
        const lo = hor ? Math.max(Math.min(p[0], q[0]), g.x) : Math.max(Math.min(p[1], q[1]), g.y);
        const hi = hor ? Math.min(Math.max(p[0], q[0]), g.x + g.w) : Math.min(Math.max(p[1], q[1]), g.y + g.h);
        const near = hor ? Math.min(Math.abs(p[1] - g.y), Math.abs(p[1] - g.y - g.h)) : ver ? Math.min(Math.abs(p[0] - g.x), Math.abs(p[0] - g.x - g.w)) : Infinity;
        if (near < 8 && hi - lo > 40) { add(6, `lijn ${s.from} → ${s.to} loopt langs de rand van kader "${f.title}"`); break; }
      }
    }
    const ancA = ancestors(s.from), ancB = ancestors(s.to);
    for (const f of spec.frames || []) {
      const g = frameGeo.get(f.id);
      const inA = ancA.has(f.id), inB = ancB.has(f.id);
      if (!inA && !inB) {
        if (segs.some(([p, q]) => segHitsRect(p, q, g))) add(6, `lijn ${s.from} → ${s.to} loopt door kader "${f.title}"`);
      } else if (inA && inB) {
        if (pts.some((p) => !inside(g, p, -EPS))) add(8, `lijn ${s.from} → ${s.to} verlaat kader "${f.title}" terwijl beide uiteinden erin liggen`);
      } else {
        const c = borderCrossings(pts, g);
        if (c.count !== 1) add(8, `lijn ${s.from} → ${s.to} passeert de rand van kader "${f.title}" ${c.count} keer (verwacht 1)`);
        if (c.corner) add(8, `lijn ${s.from} → ${s.to} passeert kader "${f.title}" bij een hoek`);
      }
    }
  }

  // 7: labels
  const labels = [];
  for (const e of geo.edges) for (const l of e.labels) labels.push({ ...l, edge: e.id });
  for (const f of spec.frames || []) {
    const g = frameGeo.get(f.id);
    labels.push({ id: `titel ${f.title}`, text: f.title, x: g.tx ?? g.x + 12, y: g.ty ?? g.y + 8, w: g.tw ?? frameTitleW(f.title), h: g.th ?? 18, frame: f.id });
  }
  for (const l of geo.extraLabels || []) labels.push({ ...l, extra: true });
  for (let i = 0; i < labels.length; i++) for (let j = i + 1; j < labels.length; j++) {
    if (overlap(labels[i], labels[j])) add(7, `labels overlappen: "${labels[i].text || labels[i].id}" en "${labels[j].text || labels[j].id}"`);
  }
  for (const l of labels) {
    for (const n of geo.nodes) if (overlap(l, n)) add(7, `label "${l.text || l.id}" ligt over element ${n.id}`);
    for (const e of geo.edges) {
      const pts = e.points;
      // de eigen lijn mag het label raken maar er niet doorheen lopen (1 px speling)
      const own = e.id === l.edge;
      for (let k = 1; k < pts.length; k++) if (segHitsRect(pts[k - 1], pts[k], l, own ? 1 : 0.5)) { add(7, own ? `label "${l.text || l.id}" wordt doorsneden door zijn eigen lijn` : `label "${l.text || l.id}" ligt over lijn ${e.id}`); break; }
    }
  }
  return dedupe(F);
}

function dedupe(F) {
  const seen = new Set();
  return F.filter((f) => { const k = f.check + f.msg; if (seen.has(k)) return false; seen.add(k); return true; });
}

/**
 * Aandachtspunten voor de beeldcontrole (geen afkeuring): lijnen met een grote omweg en
 * stukken van verschillende lijnen die lang vlak naast elkaar lopen (< 12 px, > 120 px), en lijnen
 * rond de plaat (buiten alle kaders en elementen).
 */
export function routeMetrics(geo) {
  let detours = 0, close = 0;
  const segs = [];
  for (const e of geo.edges) {
    const p = e.points, a = p[0], b = p[p.length - 1];
    let len = 0;
    for (let i = 1; i < p.length; i++) { len += Math.abs(p[i][0] - p[i - 1][0]) + Math.abs(p[i][1] - p[i - 1][1]); segs.push([e.id, p[i - 1], p[i]]); }
    if (isDetour(p)) detours++;
  }
  const span = (u, v, w, z) => Math.min(Math.max(u, v), Math.max(w, z)) - Math.max(Math.min(u, v), Math.min(w, z));
  for (let i = 0; i < segs.length; i++) for (let j = i + 1; j < segs.length; j++) {
    const [ei, p, q] = segs[i], [ej, r, s] = segs[j];
    if (ei === ej) continue;
    if (Math.abs(p[0] - q[0]) < 0.5 && Math.abs(r[0] - s[0]) < 0.5) { const d = Math.abs(p[0] - r[0]); if (d > 0.5 && d < 12 && span(p[1], q[1], r[1], s[1]) > 120) close++; }
    else if (Math.abs(p[1] - q[1]) < 0.5 && Math.abs(r[1] - s[1]) < 0.5) { const d = Math.abs(p[1] - r[1]); if (d > 0.5 && d < 12 && span(p[0], q[0], r[0], s[0]) > 120) close++; }
  }
  return { detours, close, around: excessLength(geo).around, misleading: misleadingEdges(geo).length, aligned: new Set(alignedSegments(geo).map((m) => [m.edge, m.by].sort().join('|'))).size };
}

/**
 * Misleidende lijnen: een stuk van lijn A loopt vlak naast het laatste stuk van lijn B (< 16 px,
 * > 60 px samen) en A buigt pas vlak vóór het doel van B af. Dan lijkt A naar het doel van B te gaan.
 */
export function misleadingEdges(geo) {
  return [...new Set(misleadingSegments(geo).map((m) => m.edge))];
}

/**
 * De stukken achter misleadingEdges: lijn A (edge), stuk p[i-1]–p[i], met as cx (de vaste
 * coördinaat van het stuk) en near (de coördinaat van het laatste stuk van lijn B).
 */
export function misleadingSegments(geo) {
  const out = [];
  for (const b of geo.edges) {
    const q = b.points, n = q.length;
    if (n < 2) continue;
    const [u, v] = [q[n - 2], q[n - 1]];
    const vert = Math.abs(u[0] - v[0]) < 0.5, hor = Math.abs(u[1] - v[1]) < 0.5;
    if (!vert && !hor) continue;
    const ax = vert ? 1 : 0, cx = vert ? 0 : 1;
    for (const a of geo.edges) {
      if (a === b || a.points[a.points.length - 1][0] === v[0] && a.points[a.points.length - 1][1] === v[1]) continue;
      const p = a.points;
      for (let i = 1; i < p.length - 1; i++) {
        const [r, s] = [p[i - 1], p[i]];
        if (Math.abs(r[cx] - s[cx]) > 0.5) continue;
        const d = Math.abs(r[cx] - u[cx]);
        if (d < 0.5 || d >= 16) continue;
        const lo = Math.max(Math.min(r[ax], s[ax]), Math.min(u[ax], v[ax])), hi = Math.min(Math.max(r[ax], s[ax]), Math.max(u[ax], v[ax]));
        if (hi - lo < 60) continue;
        if (Math.abs(s[ax] - v[ax]) < 60) { out.push({ edge: a.id, by: b.id, i, cx, near: u[cx] }); break; }
      }
    }
  }
  return out;
}

/**
 * Lijnen in elkaars verlengde: een stuk van lijn A ligt op dezelfde lijn (< 3 px) als een stuk van
 * lijn B, zonder overlap, met minder dan 100 px ertussen als een van beide een begin- of eindstuk is,
 * anders minder dan 90 px.
 * Dan lijkt het één doorlopende lijn.
 * Lijnen met hetzelfde begin- of eindpunt (gebundeld) tellen niet.
 */
export function alignedSegments(geo) {
  const out = [];
  const same = (p, q) => Math.abs(p[0] - q[0]) < 1 && Math.abs(p[1] - q[1]) < 1;
  for (const a of geo.edges) for (const b of geo.edges) {
    if (a === b) continue;
    const p = a.points, q = b.points;
    if (same(p[p.length - 1], q[q.length - 1]) || same(p[0], q[0])) continue;
    for (let i = 1; i < p.length; i++) {
      const [r, s] = [p[i - 1], p[i]];
      const cx = Math.abs(r[0] - s[0]) < 0.5 ? 0 : Math.abs(r[1] - s[1]) < 0.5 ? 1 : -1;
      if (cx < 0) continue;
      const ax = 1 - cx;
      for (let j = 1; j < q.length; j++) {
        const [u, v] = [q[j - 1], q[j]];
        if (Math.abs(u[cx] - v[cx]) > 0.5 || Math.abs(u[cx] - r[cx]) >= 3) continue;
        const gap = Math.max(Math.min(u[ax], v[ax]) - Math.max(r[ax], s[ax]), Math.min(r[ax], s[ax]) - Math.max(u[ax], v[ax]));
        // alleen als een van beide een begin- of eindstuk is (twee middenstukken op één spoor zijn normaal)
        const end = i === 1 || i === p.length - 1 || j === 1 || j === q.length - 1;
        if (gap >= 0 && gap < (end ? 100 : 90)) { out.push({ edge: a.id, by: b.id, i, cx, near: u[cx] }); break; }
      }
    }
  }
  return out;
}

/** Stukken die het script verschuift: misleidend of in elkaars verlengde. */
export function suspectSegments(geo) {
  return [...misleadingSegments(geo), ...alignedSegments(geo)];
}

/**
 * Stukken over of vlak langs de rand van een element (< 6 px, over meer dan 20 px): lijn A (edge),
 * stuk p[i-1]–p[i], element by, near = de coördinaat van die rand.
 */
export function hugSegments(geo) {
  const out = [];
  for (const e of geo.edges) {
    const p = e.points;
    for (let i = 1; i < p.length; i++) {
      const [r, s] = [p[i - 1], p[i]];
      const cx = Math.abs(r[0] - s[0]) < 0.5 ? 0 : Math.abs(r[1] - s[1]) < 0.5 ? 1 : -1;
      if (cx < 0) continue;
      const ax = 1 - cx;
      for (const n of geo.nodes || []) {
        const b0 = cx === 0 ? n.x : n.y, b1 = cx === 0 ? n.x + n.w : n.y + n.h;
        const c0 = cx === 0 ? n.y : n.x, c1 = cx === 0 ? n.y + n.h : n.x + n.w;
        const near = Math.abs(r[cx] - b0) <= Math.abs(r[cx] - b1) ? b0 : b1;
        if (Math.abs(r[cx] - near) >= 6) continue;
        const lo = Math.max(Math.min(r[ax], s[ax]), c0), hi = Math.min(Math.max(r[ax], s[ax]), c1);
        if (hi - lo > 20) { out.push({ edge: e.id, by: n.id, i, cx, near }); break; }
      }
    }
  }
  return out;
}

/** Stukken van verschillende lijnen die evenwijdig over elkaar of vlak naast elkaar lopen (< 8 px). */
function crowded(geo, id) {
  const e = geo.edges.find((x) => x.id === id);
  let n = 0;
  for (let k = 1; k < e.points.length; k++) {
    const [p, q] = [e.points[k - 1], e.points[k]];
    const cx = Math.abs(p[0] - q[0]) < 0.5 ? 0 : 1, ax = 1 - cx;
    for (const o of geo.edges) {
      if (o === e) continue;
      for (let j = 1; j < o.points.length; j++) {
        const [r, s] = [o.points[j - 1], o.points[j]];
        if (Math.abs(r[cx] - s[cx]) > 0.5 || Math.abs(r[cx] - p[cx]) >= 8) continue;
        const lo = Math.max(Math.min(p[ax], q[ax]), Math.min(r[ax], s[ax])), hi = Math.min(Math.max(p[ax], q[ax]), Math.max(r[ax], s[ax]));
        if (hi - lo > 1) n++;
      }
    }
  }
  return n;
}

/**
 * Verschuift een stuk van een misleidende lijn (misleadingSegments, alignedSegments) naar een plek waar
 * het niet meer vlak naast het laatste stuk van de andere lijn loopt. De buurstukken worden langer
 * of korter, de lijn blijft haaks; begin en eind blijven op dezelfde kant van hun blok. Een verschuiving telt alleen als
 * controle 3 t/m 8 voor die lijn niets nieuws vindt, er geen lijn bij komt die over of vlak naast een
 * andere loopt, en er minder misleidende lijnen zijn. Labels op het verschoven stuk schuiven mee.
 */
export function nudgeMisleading(spec, geo, opts = {}) {
  return nudgeSegments(spec, geo, { ...opts, hug: false }, suspectSegments, () => 0, 24, false);
}

/**
 * Daarna, apart: verschuift stukken langs de rand van een element (hugSegments) op dezelfde manier.
 * Telt alleen als er minder van zulke stukken zijn en niet meer misleidende lijnen; een plaat zonder
 * zulke stukken blijft precies zoals na nudgeMisleading.
 */
export function nudgeHugging(spec, geo, opts = {}) {
  return nudgeSegments(spec, geo, { ...opts, hug: true }, hugSegments, (g) => suspectSegments(g).length, 12, true);
}

function nudgeSegments(spec, geo, opts, suspects, guard, gap, clearLabels) {
  const edgeSpec = new Map((spec.edges || []).map((e) => [e.id, e]));
  const findingsOf = (e) => {
    const others = geo.edges.filter((x) => x !== e).flatMap((x) => x.labels.map((l) => ({ ...l, edge: x.id })));
    return new Set(checkDiagram({ ...spec, edges: [edgeSpec.get(e.id)] }, { ...geo, edges: [e], extraLabels: others }, opts).map((f) => f.check + f.msg));
  };
  const tried = new Set();
  for (let round = 0; round < 30; round++) {
    let changed = false;
    for (const m of suspects(geo)) {
      const key = `${m.edge}|${m.i}|${m.by}`;
      if (tried.has(key)) continue;
      tried.add(key);
      const e = geo.edges.find((x) => x.id === m.edge);
      const p = e.points, i = m.i;
      // Een begin- of eindstuk mag mee als zijn aansluitpunt op dezelfde kant van het blok blijft (10 px van de hoek).
      const cur = p[i][m.cx], ax = 1 - m.cx, last = p.length - 1;
      const sp = edgeSpec.get(e.id), box = (id) => geo.nodes.find((n) => n.id === id);
      const span = (n) => (n ? (m.cx === 0 ? [n.x + 10, n.x + n.w - 10] : [n.y + 10, n.y + n.h - 10]) : null);
      const startSpan = i - 1 === 0 ? span(box(sp?.from)) : null, endSpan = i === last ? span(box(sp?.to)) : null;
      if ((i - 1 === 0 && !startSpan) || (i === last && !endSpan)) continue;
      const prev = i - 1 > 0 ? p[i - 2][m.cx] : null, next = i < last ? p[i + 1][m.cx] : null;
      const before = { mis: suspects(geo).length, g: guard(geo), f: findingsOf(e), c: crowded(geo, e.id) };
      const savedP = p.map((q) => [...q]), savedL = e.labels.map((l) => ({ ...l }));
      const lo = Math.min(savedP[i - 1][ax], savedP[i][ax]), hi = Math.max(savedP[i - 1][ax], savedP[i][ax]);
      const restore = () => { savedP.forEach((q, k) => { p[k][0] = q[0]; p[k][1] = q[1]; }); e.labels.forEach((l, k) => Object.assign(l, savedL[k])); };
      // ruimte: afstand tot het dichtstbijzijnde evenwijdige stuk van een andere lijn over hetzelfde bereik
      const room = (v) => {
        let d = 80;
        for (const o of geo.edges) if (o !== e) for (let j = 1; j < o.points.length; j++) {
          const [r, s] = [o.points[j - 1], o.points[j]];
          if (Math.abs(r[m.cx] - s[m.cx]) > 0.5) continue;
          if (Math.min(hi, Math.max(r[ax], s[ax])) - Math.max(lo, Math.min(r[ax], s[ax])) > 1) d = Math.min(d, Math.abs(r[m.cx] - v));
        }
        return d;
      };
      // bij nudgeHugging ook 8 px vrij van labels van andere lijnen over hetzelfde bereik, anders lijkt het label bij deze lijn te horen
      const nearLabel = (v) => clearLabels && geo.edges.some((o) => o !== e && o.labels.some((l) => {
        const [a0, a1] = m.cx === 0 ? [l.x, l.x + l.w] : [l.y, l.y + l.h], [c0, c1] = m.cx === 0 ? [l.y, l.y + l.h] : [l.x, l.x + l.w];
        return Math.min(hi, c1) - Math.max(lo, c0) > 0 && v > a0 - 8 && v < a1 + 8;
      }));
      let best = null;
      for (let d = gap; d <= 240; d += gap === 24 ? 8 : 4) for (const v of [m.near + d, m.near - d]) {
        // buurstukken mogen niet omkeren of te kort worden; aansluitpunten blijven op hun kant
        if (prev !== null && (Math.sign(v - prev) !== Math.sign(cur - prev) || Math.abs(v - prev) < 10)) continue;
        if (next !== null && (Math.sign(next - v) !== Math.sign(next - cur) || Math.abs(next - v) < 10)) continue;
        if ((startSpan && (v < startSpan[0] || v > startSpan[1])) || (endSpan && (v < endSpan[0] || v > endSpan[1]))) continue;
        if (nearLabel(v)) continue;
        const delta = v - cur;
        p[i - 1][m.cx] = v; p[i][m.cx] = v;
        e.labels.forEach((l, k) => {
          const c = [l.x + l.w / 2, l.y + l.h / 2];
          if (Math.abs(c[m.cx] - cur) < 30 && c[ax] >= lo && c[ax] <= hi) { if (m.cx === 0) l.x = savedL[k].x + delta; else l.y = savedL[k].y + delta; }
        });
        const ok = [...findingsOf(e)].every((x) => before.f.has(x)) && crowded(geo, e.id) <= before.c && suspects(geo).length < before.mis && guard(geo) <= before.g;
        const score = ok ? [room(v), -Math.abs(delta)] : null;
        if (score && (!best || score[0] > best.score[0] || (score[0] === best.score[0] && score[1] > best.score[1]))) best = { v, score, P: p.map((q) => [...q]), L: e.labels.map((l) => ({ ...l })) };
        restore();
      }
      if (best && best.score[0] >= gap) {
        best.P.forEach((q, k) => { p[k][0] = q[0]; p[k][1] = q[1]; });
        e.labels.forEach((l, k) => Object.assign(l, best.L[k]));
        changed = true;
        break; // opnieuw meten na elke verschuiving
      }
    }
    if (!changed) break;
  }
  return geo;
}

/**
 * Een lijn met een omweg: veel langer dan nodig, of een lus die ver buiten het vak tussen
 * begin en eind gaat (bijv. om de hele plaat heen).
 */
export function isDetour(p) {
  const a = p[0], b = p[p.length - 1];
  let len = 0, x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (let i = 0; i < p.length; i++) {
    if (i) len += Math.abs(p[i][0] - p[i - 1][0]) + Math.abs(p[i][1] - p[i - 1][1]);
    x0 = Math.min(x0, p[i][0]); x1 = Math.max(x1, p[i][0]); y0 = Math.min(y0, p[i][1]); y1 = Math.max(y1, p[i][1]);
  }
  const out = Math.max(Math.min(a[0], b[0]) - x0, x1 - Math.max(a[0], b[0]), Math.min(a[1], b[1]) - y0, y1 - Math.max(a[1], b[1]));
  return len > 2.5 * (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])) + 600 || out > 300;
}

/** De lijnen met een omweg (zie isDetour). */
export function detourEdges(geo) {
  return geo.edges.filter((e) => isDetour(e.points)).map((e) => e.id);
}

/**
 * Maat voor de opmaak: lijnen rond de plaat (around: een stuk buiten alle kaders en elementen),
 * lijnen met meer dan 2000 px extra lengte (long) en de extra lengte opgeteld (x; lengte min de
 * kortste haakse afstand).
 */
export function excessLength(geo) {
  let x = 0, long = 0, around = 0;
  const boxes = [...(geo.nodes || []), ...(geo.frames || [])];
  const bx0 = Math.min(...boxes.map((b) => b.x)), by0 = Math.min(...boxes.map((b) => b.y));
  const bx1 = Math.max(...boxes.map((b) => b.x + b.w)), by1 = Math.max(...boxes.map((b) => b.y + b.h));
  for (const e of geo.edges) {
    const p = e.points, a = p[0], b = p[p.length - 1];
    let len = 0;
    for (let i = 1; i < p.length; i++) len += Math.abs(p[i][0] - p[i - 1][0]) + Math.abs(p[i][1] - p[i - 1][1]);
    const extra = len - (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]));
    x += extra;
    if (extra > 2000) long++;
    if (boxes.length && p.some(([u, v]) => u < bx0 - 1 || u > bx1 + 1 || v < by0 - 1 || v > by1 + 1)) around++;
  }
  return { x, long, around };
}
