Open this when you build or change a form: fields, labels, autofill, validation feedback, submit handling, or multi-step forms.

# Forms reference

Which fields exist, which are required, when errors appear and what the flow does are product behaviour from the requirements/AC. The rules below apply when the AC is silent; if the behaviour itself is unclear, ask Socrates instead of choosing. Look and layout come from the approved design and design system. Server-side validation stays mandatory (security-hardening); client-side validation is only UX. Use only Baseline "Widely available" features (current and previous Chrome, Edge, Firefox, Safari, also on iOS and Android), plus the K24 exceptions listed in SKILL.md; no fallback scripts or polyfills.

## Structure

- Wrap controls in a `<form>` with `action` and `method`: `POST` for mutations and sensitive data, `GET` only for idempotent requests such as search. Never nest forms. [mwg:forms]
- Wrap search and filter forms in `<search>`. When a page has several forms, name each with `aria-labelledby` pointing to its heading. [mwg:forms]
- Every control has a stable `name` (and `id`), not generated per render; password managers need it to save and autofill. [mwg:forms] [mwg:autofill-sign-in-form]
- Primary submit is `<button type="submit">`; every other button in the form gets `type="button"`. Label submit buttons with the action ("Save changes", "Sign in"), unless the AC gives the text. [mwg:forms] [mwg:autofill-address-form]
- Group related controls with `<fieldset>` + `<legend>` (legend first); no fieldset without a legend. [mwg:forms]
- Do not auto-submit on `<select>`/radio/checkbox change; do not reorder controls visually away from DOM order; do not disable textarea resize without an alternative. [mwg:forms]
- When the AC only says "choose one": 2-5 options → radios, longer lists → `<select>`, one yes/no → checkbox, multi-select → checkboxes. [mwg:forms]

## Labels, hints and state (accessibility: always)

- Visible `<label for>` on every control; `placeholder` is never the only label or format hint. Do not use `aria-label` when a visible label exists or with text that differs from it. [mwg:forms]
- Mark required fields in the label and with `required`; wrap the asterisk in `<span aria-hidden="true">*</span>` and explain it once before the form. [mwg:required-field-feedback]
- Put format hints and rule lists before the input (keyboards and autofill popups cover what is below) and link them with `aria-describedby`. Do not hide a rules list until the input is valid. [mwg:validate-input-after-interaction]
- Input borders meet 3:1 contrast and every control keeps a visible `:focus-visible` indicator; colours come from the design system. [mwg:forms]
- Hide controls only with the project's visually-hidden utility (e.g. Tailwind `sr-only`), never `display: none` when they must stay operable. [mwg:forms]
- Set `lang` on `<html>`. [mwg:forms]

## Input types and autofill

- Use `type="email"` / `type="tel"` / `type="search"`, and an `autocomplete` token on every field (`name`, `email`, `tel`, `street-address`, `postal-code`, `address-level2`, `one-time-code`…). [mwg:autofill-address-form] [mwg:forms]
- Sign-in: email field `autocomplete="username"`, password `autocomplete="current-password"`; sign-up / change password: `autocomplete="new-password"`; both `required`. [mwg:autofill-sign-in-form] [mwg:autofill-sign-up-form]
- Always (security): never block paste and never set `autocomplete="off"` on password, code or other authentication fields. [mwg:autofill-sign-in-form] [mwg:forms]
- Never `type="number"` for card numbers, postal codes, PINs or codes; use `type="text" inputmode="numeric"`. Keep one value in one input (no auto-advancing digit boxes). [mwg:forms]
- `spellcheck="false"` on usernames, codes and other identifiers; set `enterkeyhint` (`next`, `done`, `search`) where it helps. [mwg:forms] [mwg:autofill-sign-in-form]
- When the AC fixes no field structure: one full-name field (`autocomplete="name"`), one `<textarea autocomplete="street-address">` for the address (or `address-line1`/`address-line2` inputs with only line 1 required if the data model needs lines), postal code optional. Whether the form serves several countries is a question for Socrates. [mwg:autofill-address-form] [mwg:forms]
- Do not restrict names or addresses to Latin characters; use Unicode letter classes (`\p{L}`) and make sure the backend accepts Unicode. [mwg:autofill-address-form]
- Do not add fields the AC does not ask for (confirm-email, confirm-password, username, "show password" toggle, third-party login); suggest them to Socrates if useful. [mwg:autofill-sign-up-form]

## Validation feedback (default timing when the AC is silent)

- Use native constraints (`required`, `type`, `minlength`, `maxlength`, `pattern`; `pattern` matches the whole value) and `setCustomValidity()` for custom messages; clear it on `input`. [mwg:forms] [mwg:validate-input-after-interaction]
- Show errors after interaction with `:user-invalid`, never with plain `:invalid` (that marks untouched required fields on load). Errors clear as soon as the value is fixed; no errors or announcements per keystroke. [mwg:validate-input-after-interaction] [mwg:required-field-feedback] [mwg:forms]
- Keep submit enabled; let the browser flag all invalid fields and focus the first one (or move focus to an error summary). Disable the button only after a valid submit, to prevent double posts. [mwg:required-field-feedback] [mwg:forms]
- Always (accessibility): each error has visible text that says how to fix it, starts with an icon with text alternative "Error" or is worded as an error, consistently across the form. Group emphasis such as `.field:has(:user-invalid)` is extra, never instead. [mwg:validate-input-after-interaction] [mwg:style-parent-with-has]
- Always (accessibility): sync ARIA from `:user-invalid`, not `checkValidity()`: [mwg:required-field-feedback] [mwg:validate-input-after-interaction]
  - start every field at `aria-invalid="false"` and set `"true"` on blur/change/`invalid` while `el.matches(':user-invalid')`; leave server-set `aria-invalid="true"` alone;
  - add the error's id to `aria-describedby` (after the hint) only while the error shows; never reference a hidden error in markup;
  - announce a new blur/change error through one page-level polite live region, about 500 ms later; do not make each error message a live region; after a failed submit rely on focus instead of announcing.
- `type="email"` is permissive; stricter checks belong in a custom validator and on the server. Password composition rules come from the AC/security requirements, not from this file. [mwg:validate-input-after-interaction]

## Submit and JavaScript

- Use the native submit path; a JS submit handler calls `preventDefault()` and the form still works server-side without JS. Announce the async result via `role="status"`/`aria-live`. [mwg:forms]
- Prefer the browser's implicit Enter submit over a custom `keydown` Enter handler: browsers already suppress it during IME composition. Keyboard shortcuts never replace a visible submit button. If the AC needs a custom Enter-to-send (chat, command palette), ask Atlas first: the IME check `event.isComposing` is not Widely available and is not a K24 exception: Safari reports the confirming Enter with `isComposing` false, so without the `keyCode === 229` fallback Safari users would send half-typed text. No approved pattern yet. [mwg:ime-safe-enter-submit]
- Use `form.requestSubmit()`, not `form.submit()`, so validation and `submit` handlers run. [mwg:ime-safe-enter-submit]
- No inline event handlers (`onclick="…"`) in form markup (CSP). [mwg:forms]

## Multi-step forms (when the AC defines steps)

- Show progress with `aria-current="step"` (or `<progress>`); moving between steps keeps entered data unless the AC says otherwise. [mwg:forms]
- On a client-side step change, move focus to the new step's heading (`tabindex="-1"`) or first field; inactive steps are `hidden` or `inert`. [mwg:forms]
- Keep focused inputs and buttons clear of the on-screen keyboard (`scroll-padding`, placement per design). [mwg:forms] [mwg:autofill-sign-in-form]

## Testing

- Tab through with keyboard only (`Tab`, `Shift+Tab`, `Space`, `Enter`, arrows), check a screen reader announces label, required, hint and error, and test on a real mobile keyboard. [mwg:forms]

---
Rules tagged [mwg:…] are adapted and condensed from GoogleChrome/modern-web-guidance (https://github.com/GoogleChrome/modern-web-guidance), commit 4dd9683, licensed Apache-2.0. Changes: selected, shortened and adapted to company policy (browser policy, no new dependencies, design system first).
