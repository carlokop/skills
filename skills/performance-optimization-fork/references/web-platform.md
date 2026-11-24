# Web Platform Rules (details)

Detail for the "Web platform rules" in SKILL.md Step 3. Open the section you need when you reach that code. Every rule still goes through the workflow: measure, fix one thing, re-measure, keep or revert.

## Browser policy check

Before using a platform feature, check its Baseline status (web-features / MDN "Baseline" badge). Only "Widely available" is used, for the current and previous Chrome, Edge, Firefox and Safari, desktop and mobile (Safari on iOS, Chrome on Android). "Newly available", "Limited availability" and experimental features are not used, not even behind feature detection, a fallback or a polyfill. If the only good fix needs such a feature, raise it as a question instead of building it.

Exception (K24, Carlo 2026-11-16): a newer feature that older browsers ignore without harm and that needs no polyfill or fallback code. Approved for this skill:

| Feature | Status | Why it qualifies |
|---|---|---|
| `fetchpriority` attribute (`high`, `low`) | Newly (2024-10-29) | Unknown attribute: older browsers load with default priority |
| `fetch()` option `priority` | Newly (2024-10-29) | Unknown option is ignored |
| Event Timing (INP measurement, `onINP`) | Newly (2025-12-12) | Older Safari reports no INP; nothing breaks |

Other newer features in the table below stay excluded until approved; ask Atlas if you think one qualifies.

Not usable under the policy at the time of writing (2026-11), with the Widely-available alternative:

| Feature | Status (guide) | Use instead |
|---|---|---|
| `scheduler.yield()`, `scheduler.postTask()` | Limited | `setTimeout` yield on a time budget (below) |
| `content-visibility`, so also `contain-intrinsic-size` for it | Newly (2025-09-15) | Fewer DOM nodes (pagination, virtualization already in the stack), `contain` |
| `loading="lazy"` on `<video>`/`<audio>` | Limited (Chrome/Edge 150) | `preload="none"`/`metadata` |
| `long-animation-frame` entries | Limited | Diagnostic only (below) |
| JPEG XL | Not Baseline | AVIF, WebP |

## LCP resource discovery [mwg:performance]

- The preload scanner only finds resources in the raw HTML. An LCP image injected by JS, or only referenced from CSS, starts late (HTML, then JS, then execute, then image request).
- CSS-background LCP: `<link rel="preload" as="image" href="/hero.avif" type="image/avif">` in `<head>`.
- Above-the-fold images keep the default eager loading; `loading="lazy"` there waits for layout and delays LCP.
- `srcset` with `w` descriptors and no `sizes` makes the browser assume `100vw` and download the largest candidate.

## Decorative CSS images [mwg:deliver-optimized-decorative-images]

`image-set()` is Widely available (Baseline since 2023-09-18), so no fallback declaration is written.

```css
.banner { background-image: image-set(
  url("b.avif") type("image/avif") 1x, url("b@2x.avif") type("image/avif") 2x,
  url("b.webp") type("image/webp") 1x, url("b.jpg") type("image/jpeg") 1x); }
```

The browser takes the first supported format, so order from smallest format to largest. The image itself (which art, which crop) comes from the design; this rule only covers how it is delivered.

## Iframes, video and audio [mwg:performance] [mwg:lazy-load-video-and-audio]

- `<iframe loading="lazy" width height title>` for below-the-fold embeds (maps, players).
- `<video>`: integer `width`/`height` (prevents CLS), `poster`, `<source>` WebM before MP4, captions `<track>`. Below the fold: `preload="none"` when the user must press play, `preload="metadata"` when duration should show. Note: the browser still fetches the `poster` eagerly; if that cost shows in the measurement, use a smaller poster.
- A video that is the LCP element: preload its poster with `<link rel="preload" as="image">`.
- Autoplay is a design/AC decision. When it is asked for: `muted playsinline`, and no autoplay when `prefers-reduced-motion: reduce` (accessibility, always).

## Render-blocking resources [mwg:performance]

- `type="module"` is deferred by default; add `async` only to independent scripts.
- `@import` in CSS creates a sequential request chain; let the bundler concatenate instead.
- `<link rel="stylesheet" href="print.css" media="print">` downloads without blocking render.
- Critical CSS inlining needs build tooling; adding a tool is a build-contract question (Atlas). An inline `<style>` must fit the project CSP (nonce or hash). The `rel=preload` + `onload` swap is an inline event handler and breaks a strict CSP.
- Third-party scripts: `defer`, placed late. Whether a third-party script is added at all is a product and privacy decision, not a performance one.

## Fonts [mwg:performance]

```html
<link rel="preload" href="/fonts/body.woff2" as="font" type="font/woff2" crossorigin>
```

`crossorigin` is required even for same-origin fonts, or the preload is fetched twice. Preload one or two files at most; fonts already load at high priority. Subsetting only with tooling already in the build.

## Long tasks [mwg:break-up-long-tasks] [mwg:performance]

```js
let deadline = performance.now() + 50;
for (const item of items) {
  process(item);
  if (performance.now() >= deadline) {
    await new Promise(r => setTimeout(r, 0));
    deadline = performance.now() + 50;
  }
}
```

- Under 50 ms: run synchronously. 50 to 250 ms: slice and yield as above. Well over 250 ms: Web Worker.
- A time budget is better than "every N items": item cost varies.
- `setTimeout` puts the continuation at the back of the queue; under heavy competing work the total takes longer. Accept that rather than use `scheduler.yield()` (browser policy).
- Update the UI synchronously first (pressed state, spinner per design system), then yield, then compute.

## Handlers, layout and containment [mwg:performance]

- Debounce `input`/`resize`, throttle `scroll` (or use `requestAnimationFrame`).
- Layout thrashing: reading `offsetHeight`/`getBoundingClientRect()` after a style write forces layout in the loop. Read everything first, then write.
- `contain: layout style paint` on a self-contained widget keeps its internal changes from re-laying out the page. Verify in the trace; it can clip overflowing content (focus rings, popovers), so check the visuals.
- `will-change: transform` on many elements uses GPU memory; set it just before the animation, on that element.

## bfcache and Cache-Control [mwg:performance]

`Cache-Control: no-store` can keep a page out of the back/forward cache, which makes back navigation a full reload. Use it for responses with private data (security-hardening decides); pages that only need to be fresh use `no-cache` or `max-age=0`. Check bfcache eligibility in DevTools, Application, Back/forward cache.

## INP diagnosis [mwg:identify-inp-causes]

- Input delay high: other script was already running (look for long tasks before the input).
- Processing duration high: the event handlers themselves.
- Presentation delay high: rendering after the handler (style, layout, DOM size).
- Style vs layout: high style recalculation means broad selectors or invalidation; high layout means geometry work or thrashing.
- Lab: DevTools Performance panel shows the subparts per interaction. Field: `onINP` from `web-vitals/attribution` gives `inputDelay`, `processingDuration`, `presentationDelay`, `interactionTarget` and `longestScript`, only where `web-vitals` is already a project dependency.
- Field INP itself relies on the Event Timing API (Baseline Newly available, 2025-12-12): allowed under K24. In older Safari versions INP is simply not reported; no fallback metric.
- Sending attribution data to a server is RUM collection: a privacy question for Socrates (consent gates collection, no PII such as raw `interactionTarget` text or URLs with personal data). Do not add a beacon on your own.

## Heavy scripts [mwg:identify-heavy-scripts]

`PerformanceObserver` with `{ type: 'long-animation-frame', buffered: true }` lists frames over 50 ms with `scripts[]` (`sourceURL`, `duration`, `invokerType`). Group by `sourceURL` and sum `duration` to find the worst script, including third-party ones. Diagnostic only, not in shipped code: run it in DevTools or a lab run (Chrome/Edge only). Reporting it from production is RUM collection and needs Socrates (consent) and a browser-policy decision.

---

Rules tagged [mwg:…] are adapted and condensed from GoogleChrome/modern-web-guidance (https://github.com/GoogleChrome/modern-web-guidance), commit 4dd9683, licensed Apache-2.0. Changes: selected, shortened and adapted to company policy (browser policy, no new dependencies, design system first).
