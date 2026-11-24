Open this when you write or review CSS: layout choice, selectors, container/responsive behaviour, or fluid sizing.

# CSS reference

Order of authority: requirements/AC > project conventions file and design system > this file. Tokens, cascade layers, naming schemes, breakpoints and every visual value come from the design system and conventions; these rules cover only the mechanics of applying them. Use only features that are Baseline "Widely available" (browser policy); everything below is, so do not add `@supports` fallbacks, JS class bridges or polyfills for it.

## Architecture (within project conventions)

- If the project uses `@layer`, put new rules in the layer the conventions name; do not introduce a layer order, token tiers or a naming scheme yourself. [mwg:css]
- Prefer built-in reuse over new variables: `currentColor`, `inherit`/`initial`, `em` for sizes relative to the element's font. Code duplication is not knowledge duplication. [mwg:css]
- Do not add new global `*` rules; target element types or conditions. An existing project reset (e.g. Tailwind preflight) stays. [mwg:css]
- Use logical properties (`margin-inline-start`, `padding-block`, `inline-size`) for layout and spacing; use physical ones only where the value must not flip in RTL. [mwg:css]
- Native CSS nesting is fine where the project writes plain CSS; nest only when it groups related rules. [mwg:css]

## Selectors

- Style a container from a child's state or content with `:has()` (`.field:has(:user-invalid)`, `.card:has(img)`, `label:has(:checked)`) instead of JS-toggled modifier classes. Scope it to the component, never `body:has(...)` for local changes. [mwg:child-state-based-styling] [mwg:content-based-styling]
- `:has()` cannot be nested and cannot contain pseudo-elements. [mwg:css]
- Exclude with `:not()` instead of override-then-undo: `li:not(:last-child)`, `button:hover:not(:disabled)`. Overrides are fine for real specialisation (`button.primary`). [mwg:css]
- Combine selectors with `:is()`; use `:where()` for zero-specificity defaults that should be easy to override. [mwg:css]
- `:nth-child(1 of [open])` selects the first matching element; `[open]:first-child` only matches if the first child is open. [mwg:css]

## Layout

- Pick per container: one row or column → flex; rows and columns → grid; children must align to the parent's tracks → subgrid; long prose in columns → multi-column. [mwg:css-layout]
- Always (accessibility): do not reorder interactive content visually with `order`, `*-reverse` or `grid-auto-flow: dense`; focus order follows the DOM (WCAG 2.4.3). [mwg:css-layout]
- Flex: `flex-wrap: wrap` when items can overflow; spacing with `gap`, not child margins; size items with `flex`/`flex-basis` only (not also `width`); `min-inline-size: 0` on items holding long URLs/code; push one item to the end with `margin-inline-start: auto`. [mwg:css-layout]
- Grid: `repeat(auto-fit, minmax(min, 1fr))` stretches filled tracks, `auto-fill` keeps empty ones; this needs a container with a definite inline size. Track size comes from the `minmax()` argument, not the content. [mwg:css-layout]
- Subgrid on one axis only when the child count varies; use `grid-auto-rows`/`-columns` for the other. [mwg:css-layout]
- Prefer intrinsic sizing (`min-content`, `max-content`, `fit-content`, `fr`, `minmax()`) over fixed sizes and extra media queries. [mwg:css-layout]
- Do not hide layout bugs with `overflow: hidden`. The gap under `<img>`/`<svg>`/`<canvas>`/`<video>`/`<iframe>` is fixed with `display: block` (or a flex/grid parent). [mwg:css-layout]
- Overflow: `auto` (not `scroll`) for scroll areas; `clip` when you only want to clip (no scroll container); `overscroll-behavior: contain` on nested scroll areas (sidebars, modals, lists). [mwg:css-layout]
- Multi-line truncation: `display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: N;` (fully specified despite the prefix). [mwg:css-layout]

## Responsive and container-aware

- Container queries for component layout, media queries for page layout and user preferences. Breakpoint values come from the design. [mwg:responsive-design] [mwg:size-aware-styling]
- Declare `container-type: inline-size` (or the `container: name / inline-size` shorthand) on the wrapper before querying it; name containers when contexts nest. [mwg:size-aware-styling] [mwg:css-layout]
- `container-type: size` needs a definite block size or the container collapses; a container never sizes from its children; `cqi`/`cqb` outside any container fall back to the small viewport. [mwg:css-layout]
- Use `dvh`/`svh` instead of `vh` for full-height mobile containers; never `100vw` for full width (it includes the scrollbar) — use `100%`. [mwg:responsive-design] [mwg:css-layout]
- Use `aspect-ratio` to reserve space for media without intrinsic dimensions (embeds, video wrappers, cards); images keep `width`/`height` per performance-optimization. [mwg:responsive-design]

## Fluid sizing (only when the design system specifies fluid values)

- Always (accessibility, WCAG 1.4.4): fluid text uses `clamp()` with `rem` bounds and a max no more than 2.5x the min; never `vw` or `cqi` alone. If a design-system value breaks this, report it instead of shipping it. [mwg:responsive-design] [mwg:fluid-scaling]
- Mix a relative unit into the preferred value (`clamp(1rem, 0.5rem + 2cqi, 1.75rem)`); use `cqi` to scale with the component and `vw` only for page-level type. [mwg:fluid-scaling] [mwg:responsive-design]
- A container must not shrink when the user zooms, or text cannot reach 200%. [mwg:fluid-scaling]

For form error styling with `:has(:user-invalid)`, see `forms.md`.

---
Rules tagged [mwg:…] are adapted and condensed from GoogleChrome/modern-web-guidance (https://github.com/GoogleChrome/modern-web-guidance), commit 4dd9683, licensed Apache-2.0. Changes: selected, shortened and adapted to company policy (browser policy, no new dependencies, design system first).
