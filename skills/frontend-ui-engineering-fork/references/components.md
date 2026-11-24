# Components and Topics: Detailed Rules

Reference for `frontend-ui-engineering`. These rules help build a component that already has an approved design: semantics, accessibility and the behaviour of the platform element. They never choose a component, its look or its tokens; the design system decides visuals, and a component without an approved design is a question, not a build. Product behaviour (which fields, when errors show, flows) comes from the requirements and acceptance criteria; a guide rule applies only where they are silent.

Browser policy: current and previous Chrome, Edge, Firefox, Safari; only Baseline Widely available features; no polyfills or new libraries outside the build contract. "Not yet" below means the feature is not Widely available, so it is not used, not even with a fallback.

## Dialog

- Modal (blocks the page): `<dialog>` opened with `showModal()` through a ref. Never the `open` attribute or `show()` for a modal. [mwg:dialog]
- Don't add `role="dialog"`, `aria-modal`, a focus trap, `inert` toggling, an `Esc` handler or focus-return code; the browser does all of it. [mwg:dialog] [mwg:accessibility]
- Name it with `aria-labelledby` pointing at its heading (`useId()`), or `aria-label` when there is no visible title. Use one consistent heading level for dialog titles; `<h1>` is allowed inside a modal. [mwg:dialog] [mwg:accessibility]
- Initial focus: the primary control or first field; in a destructive confirm, the safe action. In React, focus it through a ref after `showModal()` (the `autoFocus` prop does not render the attribute). [mwg:dialog]
- Always a visible close `<button>` with an accessible name, so voice-control users can dismiss it. [mwg:html] [mwg:light-dismiss-a-dialog]
- Close with `<form method="dialog">` buttons (their `value` becomes `returnValue`) or `dialog.close()`. In the `close` listener read `returnValue`, then reset it to `''`; treat `''` as "dismissed without choosing". [mwg:dialog] [mwg:html]
- Unsaved changes: guard in the `cancel` event (fires on `Esc`). If you prevent it, show a visible reason and reference it with `aria-describedby` from the control that gets focus; don't rely on `preventDefault()` for repeated `Esc` presses. [mwg:dialog]
- Don't move buttons under the pointer when a confirmation appears: reserve the message space (`visibility`, not `display`/`hidden`) and add the destructive button where others don't shift. [mwg:dialog]
- A component inside the dialog that uses `Esc` (menu, combobox) handles and stops that `Esc` itself, so the dialog does not close. [mwg:light-dismiss-a-dialog]
- Do critical "before close" logic in `close`/`cancel`, not in a `click` handler. [mwg:light-dismiss-a-dialog]
- Styling: `::backdrop` for the backdrop, `dialog:modal` for modal-only styles. Never set `display` on `dialog` unconditionally; scope it to `dialog[open]`. Backdrop colour and blur come from the design system. [mwg:dialog]
- `Esc` closes a modal without extra code; the mobile back gesture and `closedby` are not yet available everywhere, so add nothing for them. [mwg:platform-controls-dismiss-dialog]
- Click-outside-to-close only when the design asks for it: check the pointer position against `getBoundingClientRect()` on both `pointerdown` and `pointerup` (not `event.target`, which is also the dialog for its own padding). Not via `closedby="any"` (not yet). [mwg:dialog] [mwg:light-dismiss-a-dialog]
- Page scroll behind a modal: `overscroll-behavior: contain` on `dialog:modal` stops chaining when the dialog content scrolls. Don't lock with `overflow: hidden`/`position: fixed` on `html`/`body` (scrollbar jump, scroll reset, broken sticky); if the design requires a full lock, ask first. [mwg:prevent-page-scroll-under-modal-dialog]
- Non-modal panel (user keeps working): `<dialog>` with `dialog.show()` and a visible close button. `<dialog popover>` is not yet. [mwg:dialog]
- Custom overlay only when `<dialog>` really cannot be used: `role="dialog"`, a name, move focus into it, and set `inert` on the outside content (the overlay must not be inside the inert element). [mwg:accessibility] [mwg:html]
- Don't queue live-region announcements into content that is about to become inert. [mwg:accessibility]
- Animation (only when the design specifies motion): opacity and `transform` only, behind reduced motion. For an exit animation set a `data-closing` attribute, wait for `getAnimations({ subtree: true })` to settle (with a ~2 s timeout), then `close()`; route `Esc` through the same path via `cancel` + `preventDefault()`. `@starting-style`, `allow-discrete` and `overlay` are not yet. [mwg:animate-to-from-top-layer]

## Popover, menus, tooltips

- The Popover API and invoker commands (`command`/`commandfor`) are not yet Widely available: don't use them, their polyfills or a CDN copy. [mwg:declarative-dialog-popover-control]
- Menus, dropdowns, tooltips, hovercards and toasts: use the design-system component. If none exists, that is a design question; a simple show/hide is a `<button aria-expanded>` controlling content right after it in the DOM. [mwg:dialog]
- No `title` attribute as a tooltip: it is not reachable by keyboard. [mwg:html] [mwg:accessibility]
- When a control inside a disclosure hides the content it sits in, return focus to the trigger. [mwg:declarative-dialog-popover-control]

## Accordion and disclosure

- Build from adjacent `<details>` elements, `<summary>` as the first child. [mwg:accordion] [mwg:html]
- Group with `<section aria-labelledby>` (the group heading) only when the accordion is a distinct page section; otherwise `aria-label` on a container or nothing. Don't wrap every small accordion in a landmark. [mwg:accordion]
- No headings inside `<summary>` (JAWS and TalkBack drop them). If each item needs a heading, build a custom accordion: `<h3><button type="button" aria-expanded>…</button></h3>` with the content element right after it, hidden with `hidden`. `aria-controls` is optional. [mwg:accordion]
- No links, buttons or other interactive elements inside `<summary>`. [mwg:html]
- No arrow-key navigation, roving `tabindex` or `Home`/`End` on accordion triggers. [mwg:accordion]
- Avoid exclusive (one-open) accordions; `<details name>` is not yet anyway. [mwg:accordion]
- "Expand all/Collapse all": one `<button>` with `aria-expanded` that is `true` only when every item is open; derive it from the items' `toggle` events (capture, `toggle` does not bubble). [mwg:accordion]
- Custom marker: with `list-style: none` provide your own direction cue; the icon is decorative (no alt text, the summary carries the state), keep it next to the label, mirror it in RTL, rotate it only behind `prefers-reduced-motion: no-preference`. [mwg:accordion] [mwg:html]
- Open/close height animation (`::details-content`, `interpolate-size`) and `hidden="until-found"` are not yet. [mwg:accordion]

## Breadcrumbs

- `<nav aria-label="Breadcrumbs">` around an `<ol>` of `<li><a>`; order is the hierarchy, so `ol`. [mwg:breadcrumbs]
- The last item is the current page: keep it a link with `aria-current="page"`, styled distinctly with a non-colour cue (weight). [mwg:breadcrumbs]
- Separators are decorative: not as text in the markup. Use an `aria-hidden="true"` icon or a masked/background pseudo-element without text. CSS `content: "/" / ""` alt syntax is not yet Widely available. [mwg:breadcrumbs]
- Every step visibly follows the previous one (separator or shape); never pills/chips without a separator, they read as tabs or filters. The visual variant is the design system's. [mwg:breadcrumbs]
- Links not by colour alone (underline at rest, or at least on hover/focus); 4.5:1 text contrast on the real background; `:focus-visible` ring at 3:1. [mwg:breadcrumbs]
- In `forced-colors: active`, restore borders and an underline on `[aria-current="page"]`. [mwg:breadcrumbs]
- Never truncate the current page label. Collapsing long trails or sibling menus is a design decision. [mwg:breadcrumbs]
- `corner-shape`, `border-shape` and `sibling-index()` shapes are not yet. [mwg:breadcrumbs]

## Card

- Root is `<article>`. Source order: media, header (heading), content, footer; don't reorder with CSS `order`. [mwg:card]
- One destination, no other controls: one link may wrap the whole card; keep its text short (all of it becomes the link name). [mwg:card]
- Destination plus other actions: link the heading only and stretch its hit area with `::after { position: absolute; inset: 0 }` on that one link; lift other links/buttons with `position: relative; z-index: 1`; show hover/focus on the card via `:has()`. [mwg:card]
- Card triggers an action: `<button>`, not a link. Independent actions stay separate native controls in a `<footer>`. [mwg:card]
- "Read more" repeating the heading URL gets a descriptive name that starts with the visible text: `Read more<span class="visually-hidden"> about poached eggs</span>`. [mwg:card] [mwg:accessibility]
- Choice cards: `<label>` with a checkbox/radio as a direct child; selected style via `:has(:checked)` without changing layout properties (border width, padding, weight). A visually hidden control stays focusable, never `display: none`. [mwg:card]
- Layout reacts to the card's own width (`container-type: inline-size`, `@container`), not the viewport; media column only for cards that have media (`:has(> img)`); `subgrid` to align regions across a row. [mwg:card]
- Card media: `aspect-ratio` + `object-fit: cover` on the `<img>`/`<video>` itself; `alt=""` for decorative images. [mwg:card]

## Checkbox

- Native `<input type="checkbox">` with a label linked by `for`/`id` (or nested). [mwg:checkbox] [mwg:accessibility]
- Indeterminate is a DOM property only: set `ref.current.indeterminate = true`; make it visually distinct from checked and unchecked. [mwg:checkbox]
- Custom look only when the design system requires it: `appearance: none` on the input itself (it stays the target), sizes in `em`, icon via `mask` + `currentColor`, system colour in `forced-colors`. `accent-color` is not yet. [mwg:checkbox]
- `:focus-visible` outline, never removed; focus indicator and checked/indeterminate mark at 3:1 against the background. [mwg:checkbox] [mwg:color]
- Hit target (input or label) at least 24x24 CSS px; 44x44 if the design system sets it. [mwg:checkbox] [mwg:accessibility]
- No list markup around a group of checkboxes or radios; use `<fieldset>` + `<legend>`. [mwg:accessibility]

## Progress and spinner

- Skeleton for content with a known shape. Spinner/indeterminate progress only for unknown duration and only where the design system has one. Prefer a spinner for indeterminate waits; an indeterminate bar only when it soon turns determinate. [mwg:spinner] [mwg:progress]
- Semantic base: `<progress>` with a label (`<label for>`, `aria-labelledby` or `aria-label`); `value` + `max` when known, no `value` when indeterminate. [mwg:progress] [mwg:spinner]
- No text inside `<progress>`, no `tabindex`, never `.focus()` it; announce completion through a polite status region. [mwg:progress]
- Don't announce "Loading…" through a live region; `aria-busy` has uneven screen-reader support. Hide not-yet-ready content with `hidden` or `aria-hidden`. [mwg:progress] [mwg:accessibility]
- Custom styling (design system only): `appearance: none`; style the fill with `::-webkit-progress-value` and `::-moz-progress-bar` in separate rules (grouped, the rule is dropped); move an indeterminate fill with `translate`, not margins (RTL). [mwg:progress]
- Never `animation: none` on an indeterminate indicator (Chromium shows nothing); for reduced motion slow it (bar ~10 s, spinner ~6 s per turn) and drop secondary effects. [mwg:progress] [mwg:spinner]
- In `forced-colors: active` the indicator stays visible: draw it with system colours (`CanvasText`, `Canvas`), not a gradient. [mwg:spinner]
- Contrast between bar and track at least 3:1. [mwg:progress] [mwg:color]

## Responsive table

- Real `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<th scope="col|row">`; no tables for layout; split very complex tables. [mwg:responsive-table] [mwg:accessibility]
- Scroll wrapper: `<div role="region" aria-labelledby="{caption id}" tabIndex={0}>` with `overflow: auto`, so keyboard users can scroll it. [mwg:responsive-table]
- Sticky `thead` and row headers with an opaque background (design-system token) and explicit `z-index`. [mwg:responsive-table]
- Adapt on the table's own width (`container-type: inline-size`, `@container`), not the viewport. [mwg:responsive-table]
- Stacked layout on narrow widths (if the design has one): hide `thead` with `display: none` and inject each column label with `td:nth-child(n)::before { content: var(--label-n) ": " }`. [mwg:responsive-table]
- Long cell text stays on one line rather than shrinking columns below legibility; truncation reveals the full text on demand. [mwg:responsive-table]

## Motion

- Animate `opacity` and `transform`/`translate`/`scale`, not `top`/`left`/size. [mwg:motion]
- `clip-path`/`mask` also clip the element's own focus outline; draw the focus ring on an unclipped parent. [mwg:motion]
- Entry: toggle a class or attribute after the element renders; exit: set the closing state, await `getAnimations()` (with a ~2 s timeout), then hide or remove. `@starting-style` and `transition-behavior: allow-discrete` are not yet. [mwg:animate-element-entry-exit]
- Scroll-driven animations and View Transitions are not yet; don't add them. [mwg:motion]
- Reduced motion, pause control and flash limit: see SKILL.md "Reduced Motion". [mwg:motion]

## Colour and contrast

- Text 4.5:1, large text (24 px, or 18.66 px bold) 3:1; UI boundaries, icons and state indicators 3:1. [mwg:color]
- State and errors are never colour alone: add an icon or text. [mwg:color] [mwg:html]
- `@media (prefers-contrast: more)` only to strengthen low-contrast accents the design uses; it does not fix a failing default. [mwg:color]
- Forced colours: provide system-colour fallbacks (`CanvasText`, `LinkText`, `ButtonText`, `Highlight`, `GrayText`) in `@media (forced-colors: active)`; don't carry borders, separators or state in `box-shadow`, `background-image` or `border-image`. [mwg:color]
- `forced-color-adjust: none` only where the colour is the information (swatch, syntax highlighting), and then set both text and background. [mwg:color]
- Tints and shades come from design tokens. If one must be generated, `color-mix(in oklab, …)` with white/black; relative colour syntax (`oklch(from …)`) is not yet. [mwg:color]

## Dark mode

- Whether the product supports dark mode is a requirement (Socrates); the colours are the design system's. [mwg:dark-mode]
- If supported: `<meta name="color-scheme" content="light dark">` in `<head>` and `color-scheme: light dark` on `:root`, not on `body`. [mwg:dark-mode]
- Switch colour tokens once on `:root` with `@media (prefers-color-scheme: dark)`, not per component. [mwg:dark-mode]
- JS that reads `matchMedia('(prefers-color-scheme: dark)')` also listens for its `change` event. [mwg:dark-mode]
- A theme toggle is a product decision. Safari ignores the parent's `color-scheme` inside iframes; pass the theme explicitly when you own both pages. [mwg:dark-mode]
- `light-dark()` and `scrollbar-color` are not yet. [mwg:dark-mode]

## Typography and text scaling

- Font sizes in `rem` (or `em` for contextual sizing) or design-system tokens, never raw `px`; unitless `line-height`. [mwg:typography] [mwg:respect-os-text-scale]
- Don't set `font-size` on `:root`/`html` unless the design system does. [mwg:respect-os-text-scale]
- No fixed `height`/`block-size` or tight `max-height` on text containers (buttons, badges, tabs, cards); use `min-block-size`. Text must survive WCAG 1.4.12 text spacing. [mwg:typography] [mwg:respect-os-text-scale]
- No `white-space: nowrap` or fixed widths on running text; long URLs get `overflow-wrap: anywhere`. [mwg:typography]
- Fluid type rules (rem-bounded `clamp()`, max at most 2.5x min, never `vw` alone): see `references/css.md`. [mwg:typography] [mwg:respect-os-text-scale]
- Breakpoints that react to space for text: prefer container queries or `em` media queries over px thresholds where the project's breakpoint system allows. [mwg:respect-os-text-scale]
- Line length about 60-80 characters (`max-inline-size: 60ch`); avoid `text-align: justify`; emphasis with weight and `<strong>`/`<em>`, not all caps. [mwg:typography]
- Test: 200% text size and 320 CSS px width without loss of content or two-way scrolling; also with OS text scaling and browser zoom. [mwg:typography] [mwg:respect-os-text-scale]
- `<meta name="text-scale">` is not yet. [mwg:respect-os-text-scale]

## Error announcement

The core wiring (`:user-invalid`, `aria-invalid="false"` from the start, `aria-describedby` only while shown, one polite region about 500 ms later, focus on failed submit) is in `references/forms.md`. Additional points:

- When errors show is product behaviour (AC); these rules cover how they are announced once they show. [mwg:accessible-error-announcement]
- The announcement reads as "Label: message", built from the text a screen reader would read (icon text alternatives in, `aria-hidden` text out); clear it when the field is fixed. [mwg:accessible-error-announcement]
- Sync on `blur` and `change` (capture), `input` (to clear), `invalid` (capture; it does not bubble; don't announce these, focus does) and after `reset` (next tick). [mwg:accessible-error-announcement]
- With `noValidate`, the submit handler moves focus to the first invalid field or the error summary (a heading plus a link per invalid field). [mwg:accessible-error-announcement]
- If a form library or design-system field component already does this wiring, use it and check the outcome rather than adding a second script. [mwg:accessible-error-announcement]

## Accessibility details

- Landmarks: `<header>`, `<nav>`, `<main>` (one), `<aside>`, `<footer>`; `<search>` around search/filter forms; several `<nav>`s get distinct `aria-label`s without the word "navigation". Don't label a `<section>` just to make a landmark. [mwg:accessibility] [mwg:html]
- Skip link to the main content before repeated navigation; target the first heading with `tabIndex={-1}`. One or two skip links at most. [mwg:accessibility]
- One `<h1>` per view; no fake headings (styled `div`/`span`). [mwg:accessibility] [mwg:html]
- `role="list"` on `ul`/`ol` only when `list-style: none` or flex/grid strips list semantics in Safari; otherwise no redundant roles (`nav role="navigation"`, `required aria-required`). [mwg:accessibility]
- No interactive role on a structural element (`<li role="button">`); put it on an inner element. [mwg:accessibility]
- `disabled` removes the control from the tab order; `aria-disabled="true"` keeps it focusable but you must block activation yourself. Choose deliberately. [mwg:accessibility]
- Never `aria-hidden="true"` or `role="presentation"` on a focusable element or its ancestors. [mwg:accessibility] [mwg:html]
- Names: `<label for>` for controls, `<caption>`, `<legend>`, `<figcaption>`; `aria-labelledby` over `aria-label` when visible text exists; never `title` or `placeholder` as the name. [mwg:accessibility]
- The visible label text is contained, unchanged, in the accessible name (2.5.3). [mwg:accessibility]
- Identical-looking controls with different effects ("Edit") get distinct names (visually hidden text or `aria-labelledby` chaining); same-target links share the same name; different targets never share one. [mwg:accessibility]
- Labels hold no role words, no state (`aria-expanded`/`checked` already say it) and no instructions; hints and errors go in `aria-describedby`, placed above the input. [mwg:accessibility]
- `aria-describedby` targets contain no links whose text only makes sense in context. [mwg:accessibility]
- Visually hidden utility: `clip-path: inset(50%)` pattern that becomes visible on `:focus-within`/`:active` (skip links). Use it only when visible text is not appropriate. [mwg:accessibility]
- `lang` on `<html>` and on parts in another language; a unique, front-loaded `<title>` per view, updated on SPA route and state changes; `title` on every `<iframe>`; no `scrolling="no"` or `overflow: hidden` on iframes. [mwg:accessibility] [mwg:html]
- Viewport meta never disables zoom (no `maximum-scale=1`, `user-scalable=no`). [mwg:html]
- No positive `tabindex`; `tabIndex={0}` only on custom-role widgets and scrollable regions; DOM order matches visual order (no CSS `order`/`row-reverse` against it). [mwg:accessibility] [mwg:html]
- Focus: style `:focus-visible`, prefer the browser ring; a custom ring has 3:1 contrast, uses `outline` with `outline-offset` (a `box-shadow` ring needs an `outline` in forced colours). [mwg:accessibility]
- Custom gestures: `touch-action: pan-y`/`pan-x` for the axis you need, not `none`. [mwg:accessibility]
- Images: `alt` always; describe purpose, not appearance; `alt=""` for decoration; no "Image of". Informative SVG: `role="img"` + `<title>` or `aria-label`; decorative SVG: `aria-hidden="true"`. Charts: a caption plus a data table alternative. [mwg:accessibility] [mwg:html]
- Video: captions (`<track kind="captions">`), transcript for audio; background video `muted`, no `controls`, `aria-hidden`, with a pause control; no autoplaying audio. [mwg:accessibility] [mwg:html]
- Scrollable code block: `<pre tabIndex={0} role="region" aria-labelledby>` around `<code>`. [mwg:html]
- Live regions: debounce fast-changing ones (result counts) and delay slightly while focus is moving; use the framework's announcer when it has one. [mwg:accessibility]
- No context change on focus or input alone (no auto-submit, no navigation on focus). [mwg:accessibility]
- `[inert]` sections may look dimmed only if the design system says so. [mwg:html]
- Test: axe-core/Lighthouse (a full score is not proof), keyboard only (Tab, Shift+Tab, arrows, Enter, Space, Esc), and a screen reader with its usual browser (NVDA+Firefox, JAWS+Chrome, VoiceOver+Safari, TalkBack+Chrome). [mwg:accessibility]

---

Rules tagged [mwg:…] are adapted and condensed from GoogleChrome/modern-web-guidance (https://github.com/GoogleChrome/modern-web-guidance), commit 4dd9683, licensed Apache-2.0. Changes: selected, shortened and adapted to company policy (browser policy, no new dependencies, design system first).
