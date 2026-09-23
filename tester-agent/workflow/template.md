# Tester Agent Workflow Template

Copy this checklist at the start of a run and keep it updated.

```text
Tester run
- Backlog item: {id} — {title}
- Project root: {cwd}
- Report dir: .tester-agent/reports/{run-id}/
- Verdict: pending | passed | failed | inconclusive

Progress:
- [ ] Fase 1 — Testplan (tester-plan) → test-plan.md
- [ ] Fase 2 — Tests schrijven + één-voor-één draaien (tester-write-tests) → agent-summary.md
- [ ] Fase 3 — Tests draaien (tester-run-tests) → report.md + report.json + report.csv
- [ ] Final reports written (CLI-compatible)
```

## Inputs

| Input | Required | Notes |
|-------|----------|-------|
| Backlog item id or path | yes | e.g. `074-foo` or `docs/backlog/in-progress/074-foo.md` |
| Git target (optional) | no | branch/PR/commits; default: current branch vs main/master |
| Test commands (optional) | no | else detect from project / agent output |

## Outputs (same as CLI)

| Artifact | Path |
|----------|------|
| Test plan | `.tester-agent/reports/{run-id}/test-plan.md` |
| Final markdown | `.tester-agent/reports/{run-id}/report.md` |
| Final JSON | `.tester-agent/reports/{run-id}/report.json` |
| Final CSV | `.tester-agent/reports/{run-id}/report.csv` |
| Progress log (skill) | `.tester-agent/reports/{run-id}/progress.log` |

Skill handoff only (CLI keeps this in memory as `agentSummary`):

| Artifact | Path |
|----------|------|
| Agent summary | `.tester-agent/reports/{run-id}/agent-summary.md` |

Formats: see `.cursor/skills/tester-agent/reports.md`.  
Writers: `scripts/write-test-plan.mjs`, `scripts/write-final-report.mjs`.

## Phase summary

1. **Fase 1 — Testplan**  
   `pre-implementation`: backlog item only, before the feature exists. `post-implementation`: backlog item plus the application code. Write `test-plan.md` via `write-test-plan.mjs`, filled per `test-design.md`. Do not inspect existing tests. Do not edit production or test files.

2. **Fase 2 — Tests schrijven + één-voor-één draaien**  
   For each planned test: write only test files, run focused command. Write `agent-summary.md` (implementation headings). No `report.*` yet.

3. **Fase 3 — Tests draaien**  
   Run the full relevant command set. Build `FinalReport` JSON. Write `report.md`, `report.json`, `report.csv` via `write-final-report.mjs`.

## Hard rules (all phases)

- Only test files may be created or edited by this run (globs: `tests/**`, `**/*.test.*`, `**/*.spec.*`, or project overrides).
- Never edit production code, config, migrations, Docker files, manifests, or lockfiles.
- Unrelated application edits already in the working tree belong to the user. Do not revert them and do not fail the run because of them.
- Never run `git restore`, `git checkout`, `git reset`, `git clean`, or `git stash`. A failing test is reported; the tree is not rolled back.
- Prefer integration tests for backlog acceptance criteria; unit tests for pure helpers.
- Follow Definition of Done and the robustness checklist from the bundled templates.
- If requirements are missing or the environment cannot run tests → `inconclusive`, not `passed`.
- Report filenames and layouts must match the CLI — no `final-report.md`.

## Project overrides

Prefer project-local files when present (do not modify the bundled copies):

```text
.tester-agent/workflow.md
.tester-agent/definition-of-done.md
.tester-agent/examples.md
.tester-agent/communication.md
.tester-agent/model.md
.tester-agent/project-knowledge.md
```

Otherwise use:

```text
.cursor/skills/tester-agent/templates/workflow/*
.cursor/skills/tester-agent/templates/prompts/*
```
