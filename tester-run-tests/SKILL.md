---
name: tester-run-tests
description: >-
  Fase 3 of the tester-agent workflow: run the full relevant test command set,
  build a CLI-compatible FinalReport, and write report.md, report.json, and
  report.csv via the same logic as tester-agent/src/reports.ts. Use when finishing
  a tester-agent run or running tests after plan and write-tests phases.
---

# Tester Run Tests (Fase 3)

Run the relevant tests and write **the same three final reports as the CLI**.

## Prerequisites

- Prefer Fase 2: `.tester-agent/reports/{runId}/agent-summary.md`
- Else: project `testCommands` / detected defaults
- `test-plan.md` path for `testPlanPath`
- Report contract: `.cursor/skills/tester-agent/reports.md`
- Definition of Done from `.tester-agent/` or bundled template

## Instructions

1. Collect commands in order:
   1. Explicit user / project config commands
   2. Else bash block under `## Commands To Run` in `agent-summary.md`
   3. Else detect sensible defaults for the repo
2. Run each command sequentially. Capture `command`, `exitCode`, `stdout`, `stderr` for every run (needed for `report.json` / `report.md`).
3. Determine verdict from test results only:
   - no commands → `inconclusive`
   - any `exitCode !== 0` → `failed`
   - all `0` → `passed`
4. Do not check git for changed application code. Do not set `policy_violation`. The workflow already forbids editing production code; record `policy` as `{ "ok": true, "changedFiles": [], "disallowedFiles": [] }` so the CLI report shape stays valid.
5. Build the report JSON for the writer. `report.json` on disk only keeps what `report.md` shows: `runId`, `createdAt`, `target`, `verdict`, `workflowFiles`, `summary`, `policy`, and `testResults` with truncated `output`. The script drops git, project, workflow contents, `testPlanPath`, `jiraIssueKey`, and `backlogItemId`.
6. Write all three files with the CLI helper (**required** — do not hand-write formats):

```bash
node .cursor/skills/tester-agent/scripts/write-final-report.mjs \
  --dir ".tester-agent/reports/${RUN_ID}" \
  --report-file /tmp/final-report.json
```

7. Mark Fase 3 and “Final report written” on the workflow checklist.

Tell the user and append the same line to `$REPORT_DIR/progress.log` when it happens:

- `[fase 3] start`
- `[fase 3] commando: {command}`
- `[fase 3] resultaat: {command} exit {code}`
- `[fase 3] geschreven: {path}` for `report.md`, `report.json`, and `report.csv`
- `[fase 3] verdict: {passed|failed|inconclusive}`

## Required outputs

| File | Required |
|------|----------|
| `report.json` | yes |
| `report.md` | yes (`# Tester Agent Report` layout) |
| `report.csv` | yes |

Do **not** write `final-report.md` or other alternate names.

## Failure notes

When recording failures in `agentSummary` / residual risk, explain as a tester:

- what did not work
- how to reproduce
- which expected behavior was violated
- which developer action is needed

## Hard rules

- Do not edit production code in this phase.
- Do not `git restore`, `git checkout`, `git reset`, `git clean`, or `git stash` when a command fails. Record `failed` and leave the working tree as it is, including the user's other edits.
- Do not mark `passed` if tests did not run successfully.
- Always use `write-final-report.mjs` so md/json/csv stay identical to the CLI.

## Done when

- [ ] All selected commands executed (or blocked with `inconclusive`)
- [ ] Verdict set from test results (`passed`, `failed`, or `inconclusive`)
- [ ] `report.md`, `report.json`, and `report.csv` written via script
- [ ] Workflow checklist Fase 3 + final report checked
