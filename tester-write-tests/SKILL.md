---
name: tester-write-tests
description: >-
  Fase 2 of the tester-agent workflow: after test-plan.md is saved, write missing
  tests one by one and run each focused command, then save agent-summary.md
  (becomes FinalReport.agentSummary). Only test files may change. Use when
  implementing tests from a tester-agent plan or writing tests one by one.
---

# Tester Write Tests (Fase 2)

Implement coverage from the saved test plan. Write and **run tests one by one**.
Persist the CLI `agentSummary` markdown for Fase 3.

## Prerequisites

- Fase 1 complete: `.tester-agent/reports/{runId}/test-plan.md` exists.
- Prompt shape: `.cursor/skills/tester-agent/templates/prompts/test-implementation.md`
- Report contract: `.cursor/skills/tester-agent/reports.md`
- DoD / examples: `.tester-agent/` overrides or bundled `templates/workflow/`.
- Plan content rules: `.cursor/skills/tester-agent/test-design.md`

## Instructions

1. Read the saved `test-plan.md` end-to-end.
2. Inspect existing tests **now** (allowed in this phase only).
3. Derive an ordered work list from the plan: acceptance checks, then each surface's chosen technique (robustness checklist, pairwise rows, valid/invalid transitions, or security cases). Prefer one focused test (or one pairwise row) per iteration.
4. For **each** item in the work list:
   1. Create or edit **only** test files (globs: `tests/**`, `**/*.test.*`, `**/*.spec.*`, or project overrides).
   2. Run a **focused** command for that test only.
   3. On failure, decide at high effort whether the test is wrong or the application missed the acceptance check. Log `[fase 2] effort: high`.
   4. Test bug → fix the test file → re-run.
   5. App bug vs acceptance → Residual Risk → next (no production edits).
5. Write `.tester-agent/reports/{runId}/agent-summary.md` with the implementation headings below.  
   This file is the skill handoff for CLI field `FinalReport.agentSummary` (the CLI keeps it in memory; skills need the file).
6. Mark Fase 2 done on the workflow checklist.

Tell the user and append the same line to `$REPORT_DIR/progress.log` when it happens:

- `[fase 2] start: testplan {path}`
- `[fase 2] gelezen: {path}` for the plan and each existing test file opened
- `[fase 2] geschreven: {test file}`
- `[fase 2] commando: {command}`
- `[fase 2] resultaat: {command} exit {code}`
- `[fase 2] geschreven: {path to agent-summary.md}`

## Hard rules

- Only test files this run creates or updates. No production code, config, migrations, Docker, manifests, lockfiles.
- Leave unrelated dirty application files untouched. Do not `git restore`, `git checkout`, `git reset`, `git clean`, or `git stash` when a test fails. Fix the test file you wrote, or record residual risk.
- Do not write `report.md` / `report.json` / `report.csv` in this phase.
- Do not update Jira, Google Sheets, or other external systems.
- Implement every planned case: acceptance checks, applicable robustness items, pairwise rows, transitions, and security cases. Skip only rows marked N/A or listed under Not tested.
- Assert the documented error contract (exception vs rejection vs safe default), plus status, response shape, and database side effects when the plan requires them.
- Integration test per acceptance criterion; unit test only for pure helpers.

## Required `agent-summary.md` headings

```markdown
## Existing Coverage
## Gaps Found
## Test Changes Made
## Commands To Run
## Residual Risk
```

Under `## Commands To Run`, list every concrete shell command Fase 3 should execute (bash code block, one command per line).

## One-by-one loop (mandatory)

```text
for each planned test:
  write/update test file(s)
  run focused command
  pass → next
  fail (test bug) → fix test → re-run
  fail (app bug) → residual risk → next
```

## Done when

- [ ] Existing coverage compared to plan
- [ ] Each planned test written and focused-run (or residual risk recorded)
- [ ] `agent-summary.md` written (CLI-compatible `agentSummary` body)
- [ ] `## Commands To Run` ready for Fase 3
- [ ] Workflow checklist Fase 2 checked
