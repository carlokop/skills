---
name: tester-plan
description: >-
  Fase 1 of the tester-agent workflow: write a CLI-compatible test plan from a
  backlog item. Before implementation, use the backlog only. After implementation,
  also inspect the application code. Does not inspect existing tests or edit files
  except the plan. Use when creating a test plan for a backlog item, before or
  after the feature exists, or starting tester-agent Fase 1.
---

# Tester Plan (Fase 1)

Create and **write** `test-plan.md` in the CLI format. No test inspection. No production or test file edits.

Two modes. Pick one before reading code.

| Mode | When | Sources |
|------|------|---------|
| `pre-implementation` | User asks for a plan before the feature exists, or says the code is not implemented yet | Backlog item only |
| `post-implementation` | User asks to include the code, or this run continues into writing and running tests | Backlog item and the application code for that item |

If the user does not say which mode, ask once. Do not inspect the codebase to guess.

Fase 1 is high effort. Do not switch models. Before writing `test-plan.md`, reason through scope, one technique per surface, pairwise only when factors interact, edge cases, and the error contract. Log `[fase 1] effort: high`.

## Instructions

1. Load workflow context:
   - Parent checklist: `.cursor/skills/tester-agent/workflow/template.md`
   - Report contract: `.cursor/skills/tester-agent/reports.md`
   - Prefer `.tester-agent/*.md` if present; else `.cursor/skills/tester-agent/templates/workflow/`
   - Prompt shape: `.cursor/skills/tester-agent/templates/prompts/test-plan.md`
   - Plan content: `.cursor/skills/tester-agent/test-design.md`
2. Resolve the backlog item (id or path). Read the full markdown.
3. Apply the chosen mode:
   - `pre-implementation`: do not open application code, diffs, or tests. Derive scope and surfaces from the backlog. Where the backlog does not specify a path, field, or error contract, record an open question.
   - `post-implementation`: inspect application code relevant to the item (and an optional git diff). Do not open or search existing unit, integration, or e2e tests.
4. Build `rawMarkdown` using [test-design.md](../tester-agent/test-design.md). State the mode in Summary. Include testable checks, one technique per surface, and edge cases (happy path, applicable robustness, domain cases, error contract; pairwise only when two or more factors jointly decide behavior).
5. Integration test per acceptance criterion; unit test only for pure helpers. In `pre-implementation`, these are planned tests for the intended behavior, not claims that the code already exists.
6. Create the report dir and write the plan with the CLI helper (required):

```bash
BODY=$(mktemp)
# write rawMarkdown (headings only, no # Test Plan header) into $BODY
node .cursor/skills/tester-agent/scripts/write-test-plan.mjs \
  --out ".tester-agent/reports/${RUN_ID}/test-plan.md" \
  --run-id "${RUN_ID}" \
  --target "${TARGET_LABEL}" \
  --created-at "$(date -u +%Y-%m-%dT%H:%M:%S.%3NZ)" \
  --body-file "$BODY"
```

`TARGET_LABEL` examples: `backlog:074-foo` (pre-implementation), `backlog:074-foo+code` or `origin/main...HEAD` (post-implementation).

7. Mark Fase 1 done on the workflow checklist.

After each of these, tell the user and append the same line to `$REPORT_DIR/progress.log` (see tester-agent "Zichtbare voortgang"):

- `[fase 1] start: {pre-implementation|post-implementation} backlog {id}`
- `[fase 1] gelezen: {path}` for the backlog file and, in post-implementation, each application file opened
- `[fase 1] geschreven: {path to test-plan.md}`

## Hard rules

- Do not edit application code, test files, config, or lockfiles.
- Only write `test-plan.md` (via the script) under the run report dir.
- Do not write `report.md` / `report.json` / `report.csv` in this phase.
- Do not run tests in this phase.
- If documentation-only: automated tests N/A + review checklist.
- In `pre-implementation`, do not read or infer behavior from application code.
- If the backlog (or, in `post-implementation`, the code) is insufficient: list open questions; do not invent requirements.

## Required `rawMarkdown` headings

```markdown
## Summary
## Risks
## Edge Cases
## Acceptance Criteria
## Test Strategy
## Open Questions
```

The script prepends the CLI header (`# Test Plan`, Run, Target, Created).

Fill those headings as specified in `test-design.md` (scope, checks, technique per surface, pairwise only when needed).

## Done when

- [ ] Mode chosen: `pre-implementation` or `post-implementation`
- [ ] Backlog item fully read
- [ ] `post-implementation` only: relevant app code inspected, existing tests not opened
- [ ] `pre-implementation` only: application code not opened
- [ ] Each known surface has one technique (checklist, pairwise, transitions, or security)
- [ ] `test-plan.md` written via `write-test-plan.mjs`
- [ ] Workflow checklist Fase 1 checked
