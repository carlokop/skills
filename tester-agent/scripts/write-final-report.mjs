#!/usr/bin/env node
/**
 * Mirrors tester-agent/src/reports.ts writeFinalReport + renderMarkdownReport + renderCsvReport.
 *
 * Usage:
 *   node write-final-report.mjs --dir REPORT_DIR --report-file final-report.json
 *
 * Reads a FinalReport JSON object and writes report.json, report.md, report.csv
 * into --dir (same filenames as the CLI).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i === -1 || i + 1 >= process.argv.length) return undefined;
  return process.argv[i + 1];
}

function truncate(value, maxLength) {
  return value.length > maxLength ? `${value.slice(0, maxLength)}\n... truncated ...` : value;
}

function csvEscape(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function workflowPaths(report) {
  return report.workflowFiles ?? report.workflow?.files?.map((file) => file.path) ?? [];
}

function renderMarkdownReport(report) {
  const paths = workflowPaths(report);
  const testResults =
    report.testResults.length > 0
      ? report.testResults
          .map(
            (result) => `### ${result.command}

- Exit code: ${result.exitCode}

\`\`\`text
${truncate(result.output ?? (result.stdout || result.stderr || "No output."), 8000)}
\`\`\`
`,
          )
          .join("\n")
      : "No test commands were configured or detected.\n";

  return `# Tester Agent Report

Run: \`${report.runId}\`
Target: \`${report.target}\`
Verdict: \`${report.verdict}\`
Created: \`${report.createdAt}\`

## Workflow Instructions

${paths.length ? paths.map((file) => `- ${file}`).join("\n") : "No project-specific workflow files were loaded."}

## Summary

${(report.summary ?? report.agentSummary) || "No agent summary returned."}

## Policy Check

- OK: ${report.policy.ok ? "yes" : "no"}
- Changed files: ${report.policy.changedFiles.length ? report.policy.changedFiles.join(", ") : "none"}
- Disallowed files: ${report.policy.disallowedFiles.length ? report.policy.disallowedFiles.join(", ") : "none"}

## Test Results

${testResults}
`;
}

function renderCsvReport(report) {
  const rows = [
    [
      "run_id",
      "created_at",
      "target",
      "verdict",
      "workflow_files",
      "changed_files",
      "disallowed_files",
      "test_commands",
    ],
    [
      report.runId,
      report.createdAt,
      report.target,
      report.verdict,
      workflowPaths(report).join("; "),
      report.policy.changedFiles.join("; "),
      report.policy.disallowedFiles.join("; "),
      report.testResults.map((result) => `${result.command}=${result.exitCode}`).join("; "),
    ],
  ];

  return `${rows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`;
}

const dir = arg("--dir");
const reportFile = arg("--report-file");

if (!dir || !reportFile) {
  console.error("Usage: write-final-report.mjs --dir REPORT_DIR --report-file final-report.json");
  process.exit(1);
}

const report = JSON.parse(readFileSync(reportFile, "utf8"));

for (const key of ["runId", "createdAt", "target", "verdict", "testResults", "policy"]) {
  if (!(key in report)) {
    console.error(`FinalReport missing required field: ${key}`);
    process.exit(1);
  }
}

function toPublicReport(input) {
  const workflowFiles = workflowPaths(input);

  return {
    runId: input.runId,
    createdAt: input.createdAt,
    target: input.target,
    verdict: input.verdict,
    workflowFiles,
    summary: input.summary ?? input.agentSummary ?? "",
    policy: {
      ok: input.policy.ok,
      changedFiles: input.policy.changedFiles ?? [],
      disallowedFiles: input.policy.disallowedFiles ?? [],
    },
    testResults: input.testResults.map((result) => ({
      command: result.command,
      exitCode: result.exitCode,
      output: truncate(result.output ?? (result.stdout || result.stderr || "No output."), 8000),
    })),
  };
}

mkdirSync(dir, { recursive: true });

const finalJson = join(dir, "report.json");
const finalMarkdown = join(dir, "report.md");
const finalCsv = join(dir, "report.csv");

writeFileSync(finalJson, `${JSON.stringify(toPublicReport(report), null, 2)}\n`, "utf8");
writeFileSync(finalMarkdown, renderMarkdownReport(report), "utf8");
writeFileSync(finalCsv, renderCsvReport(report), "utf8");

console.log(`Wrote ${finalJson}`);
console.log(`Wrote ${finalMarkdown}`);
console.log(`Wrote ${finalCsv}`);
