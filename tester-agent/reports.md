# Report formats (CLI-compatible)

Mirror `tester-agent/src/reports.ts` and `FinalReport` / `TestPlan` from `types.ts`.
Do **not** invent alternate filenames or layouts.

## Paths (same as CLI `prepareReportPaths`)

```text
.tester-agent/reports/{runId}/
  test-plan.md
  report.md
  report.json
  report.csv
```

Optional skill-only handoff (not written by the CLI; used between phases):

```text
.tester-agent/reports/{runId}/agent-summary.md
```

`agent-summary.md` becomes `FinalReport.agentSummary` and is embedded under `## Summary` in `report.md`.

## Run id (same as CLI `createRunId`)

```bash
# ISO timestamp with : and . replaced by -, plus 8 hex chars
node -e "const {randomUUID}=require('crypto'); console.log(new Date().toISOString().replace(/[:.]/g,'-')+'-'+randomUUID().slice(0,8))"
```

Example: `2026-06-18T14-01-01-685Z-50d0d3ab`

## `test-plan.md` (same as CLI `writeTestPlan`)

```markdown
# Test Plan

Run: `{runId}`
Target: `{target}`
Created: `{createdAt}`

{rawMarkdown}
```

`rawMarkdown` must include exactly:

```markdown
## Summary
## Risks
## Edge Cases
## Acceptance Criteria
## Test Strategy
## Open Questions
```

Prefer the helper:

```bash
node .cursor/skills/tester-agent/scripts/write-test-plan.mjs \
  --out .tester-agent/reports/{runId}/test-plan.md \
  --run-id "{runId}" \
  --target "{target}" \
  --created-at "{ISO}" \
  --body-file /tmp/plan-body.md
```

## `agent-summary.md` (Fase 2 handoff → `agentSummary`)

Same headings as `templates/prompts/test-implementation.md`:

```markdown
## Existing Coverage
## Gaps Found
## Test Changes Made
## Commands To Run
## Residual Risk
```

## `report.json`

Same facts as `report.md`. Do not write git context, project profile, workflow file contents, `testPlanPath`, `jiraIssueKey`, or `backlogItemId`.

```ts
type PublicReport = {
  runId: string;
  createdAt: string;
  target: string;
  verdict: "passed" | "failed" | "inconclusive";
  workflowFiles: string[];
  summary: string;
  policy: {
    ok: boolean;
    changedFiles: string[];
    disallowedFiles: string[];
  };
  testResults: Array<{
    command: string;
    exitCode: number;
    output: string;
  }>;
};
```

`output` is the same truncated text as the markdown block (`stdout`, otherwise `stderr`, otherwise `No output.`, max 8000 characters).

## `report.md` (same as CLI `renderMarkdownReport`)

```markdown
# Tester Agent Report

Run: `{runId}`
Target: `{target}`
Verdict: `{verdict}`
Created: `{createdAt}`

## Workflow Instructions

- {path}   # one line per workflow.files[].path, or:
No project-specific workflow files were loaded.

## Summary

{agentSummary or "No agent summary returned."}

## Policy Check

- OK: yes|no
- Changed files: {comma-separated or "none"}
- Disallowed files: {comma-separated or "none"}

## Test Results

### {command}

- Exit code: {n}

\`\`\`text
{stdout || stderr || "No output." truncated to 8000 chars; if longer append "\n... truncated ..."}
\`\`\`
```

If `testResults` is empty: `No test commands were configured or detected.`

## `report.csv` (same as CLI `renderCsvReport`)

Header + one data row. Every field double-quoted; `"` escaped as `""`.

```csv
"run_id","created_at","target","verdict","workflow_files","changed_files","disallowed_files","test_commands"
"{runId}","{createdAt}","{target}","{verdict}","{paths joined with '; '}","{changed joined with '; '}","{disallowed joined with '; '}","{command=exitCode joined with '; '}"
```

## Prefer scripts

Always write finals via:

```bash
node .cursor/skills/tester-agent/scripts/write-final-report.mjs \
  --dir .tester-agent/reports/{runId} \
  --report-file /tmp/final-report.json
```

This writes `report.json`, `report.md`, and `report.csv` together (same as CLI `writeFinalReport`).

## Verdict

From test results only. Do not inspect the git diff for application-code changes, and do not use `policy_violation`.

- No commands run → `inconclusive`
- Any `exitCode !== 0` → `failed`
- All exit 0 → `passed`

`policy` stays in the report so the file shape matches the CLI writer. Always set `ok: true`, `changedFiles: []`, `disallowedFiles: []`.
