---
name: tester-agent
description: >-
  Orchestrates a three-phase software tester workflow for backlog items:
  (1) create and write a test plan from a backlog item, with or without application code,
  (2) write tests and run them one by one,
  (3) run the full relevant test suite and write CLI-compatible reports
  (test-plan.md, report.md, report.json, report.csv).
  Use when the user asks to test a backlog item, run the tester agent skill,
  create a test plan then tests, or copy the tester workflow into a project.
---

# Tester Agent

Portable Cursor skill package. Routes a backlog-item test run through three subskills.
Report artefacts match the CLI (`src/reports.ts`) — see [reports.md](reports.md).

## When to use

- User asks to test a backlog item / story.
- User asks for the tester-agent workflow (plan → write tests → run).
- User wants a repeatable tester process without the CLI app.

## Read first

1. [workflow/template.md](workflow/template.md) — copy the checklist and fill it in.
2. [reports.md](reports.md) — required filenames and formats (same as CLI).
3. [test-design.md](test-design.md) — what Fase 1 must put in the test plan.
4. Project overrides in `.tester-agent/` if present; else bundled [templates/workflow/](templates/workflow/).
5. Prompt shapes in [templates/prompts/](templates/prompts/).

Do **not** edit files under `templates/` in this skill when adapting a project — copy overrides into `.tester-agent/` instead.

## Effort

This skill cannot switch the Cursor model or the effort setting. Stay on the model the user already selected. For the steps below, reason at high effort before writing anything: consider the backlog, the applicable code, and alternatives, then choose.

| Step | Effort |
|------|--------|
| Fase 1: mode, scope, technique per surface, pairwise, edge cases, error contract, open questions | high |
| Fase 2: classify a failure as a test bug or an application bug | high |
| Fase 2: write the next planned test once that choice is made | normal |
| Fase 3: run commands and record exit codes | normal |

Say the effort in the progress line when a high-effort step starts, for example `[fase 1] effort: high`.

## Zichtbare voortgang

The user is often in another chat or another part of the app. Say what this run is doing in the chat, and append the same line to `$REPORT_DIR/progress.log`. Do this at the moment it happens, not in a summary at the end.

```bash
msg="[fase 1] geschreven: .tester-agent/reports/${RUN_ID}/test-plan.md"
printf '%s\n' "$msg" | tee -a "$REPORT_DIR/progress.log"
```

Then repeat that line in the chat.

Required moments:

- start of a phase, including mode (`pre-implementation` or `post-implementation`)
- each file read for the plan or the tests (path only)
- each file written (path only)
- each test command, then its exit code

Keep each line to one path or one command. Do not paste file contents or test output into the progress log.

## Parallel work

The user may keep editing other application code while this skill runs. That is expected.

- Leave every file you did not create for this test run untouched, including unrelated dirty application files.
- Do not treat those edits as a failure or `policy_violation`.
- Do not run `git restore`, `git checkout`, `git reset`, `git clean`, `git stash`, or any other command that reverts or discards working-tree changes. A failing test stays a failed or residual-risk result.

## Workflow

Follow phases **in order**. After each phase, update the checklist in the workflow template.

| Phase | Subskill | Goal |
|-------|----------|------|
| 1 | `tester-plan` | Backlog only, or backlog + code → write `test-plan.md` |
| 2 | `tester-write-tests` | Write tests one by one → `agent-summary.md` |
| 3 | `tester-run-tests` | Run suite → `report.md` + `report.json` + `report.csv` |

### Routing

1. Start → read `tester-plan` and execute Fase 1.
2. When `test-plan.md` exists and Fase 1 is done → read `tester-write-tests` and execute Fase 2.
3. When Fase 2 is done → read `tester-run-tests` and execute Fase 3.
4. Stop when `report.md`, `report.json`, and `report.csv` exist.

If the user asks for **only** a plan, run Fase 1 and stop.  
If the user asks for **only** running tests, run Fase 3 (requires existing plan / commands).

## Run id and reports

Use the CLI run-id format:

```bash
RUN_ID="$(node -e "const {randomUUID}=require('crypto'); process.stdout.write(new Date().toISOString().replace(/[:.]/g,'-')+'-'+randomUUID().slice(0,8))")"
REPORT_DIR=".tester-agent/reports/${RUN_ID}"
mkdir -p "$REPORT_DIR"
```

**Final artefacts (same as CLI):**

| File | Writer |
|------|--------|
| `$REPORT_DIR/test-plan.md` | `scripts/write-test-plan.mjs` (Fase 1) |
| `$REPORT_DIR/report.md` | `scripts/write-final-report.mjs` (Fase 3) |
| `$REPORT_DIR/report.json` | same |
| `$REPORT_DIR/report.csv` | same |

**Skill handoff only (not a CLI file):**

| File | Phase |
|------|-------|
| `$REPORT_DIR/agent-summary.md` | Fase 2 → becomes `agentSummary` in `report.json` / `## Summary` in `report.md` |

Always use the scripts under [scripts/](scripts/) so formatting stays identical to the CLI.

## Subskills

- [tester-plan](../tester-plan/SKILL.md)
- [tester-write-tests](../tester-write-tests/SKILL.md)
- [tester-run-tests](../tester-run-tests/SKILL.md)

## Install into another project

```bash
cp -a .cursor/skills/tester-agent \
      .cursor/skills/tester-plan \
      .cursor/skills/tester-write-tests \
      .cursor/skills/tester-run-tests \
      /path/to/project/.cursor/skills/
```

Optional: add project-specific `.tester-agent/*.md` overrides (leave skill `templates/` untouched).
