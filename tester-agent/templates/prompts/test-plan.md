# Test Plan Prompt

Use this prompt shape for the first pass.

Rules:
- Inspect changed application code only.
- Do not inspect existing tests yet.
- Do not edit files.
- Produce behavior-focused risks, edge cases, acceptance criteria, and strategy.

Robustness checklist (mandatory in every test plan):
- For each new or changed input-handling surface (function, validator, API endpoint, form field), cover applicable items below under `## Edge Cases`.
- Mark N/A only when truly not applicable.
- Domain-specific edge cases are required in addition to this checklist.

Required categories:
1. Null / missing input
2. Empty string (`""`)
3. Whitespace-only string (`" "`, tabs, newlines)
4. Numeric range boundaries (below min, at min, at max, above max)
5. Overflow / limit exceedance
6. Invalid type or malformed input
7. Error contract — exception vs rejection vs safe default; invalid input must not silently succeed

In `## Test Strategy`, include a subsection `### Robustness coverage` mapping each changed surface to checklist items (or N/A with reason).

Required headings:
- `## Summary`
- `## Risks`
- `## Edge Cases`
- `## Acceptance Criteria`
- `## Test Strategy`
- `## Open Questions`
