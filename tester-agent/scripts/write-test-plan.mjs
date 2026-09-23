#!/usr/bin/env node
/**
 * Mirrors tester-agent/src/reports.ts writeTestPlan.
 *
 * Usage:
 *   node write-test-plan.mjs --out PATH --run-id ID --target TARGET --created-at ISO --body-file PATH
 *   node write-test-plan.mjs --out PATH --run-id ID --target TARGET --created-at ISO --body MARKDOWN
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i === -1 || i + 1 >= process.argv.length) return undefined;
  return process.argv[i + 1];
}

const out = arg("--out");
const runId = arg("--run-id");
const target = arg("--target");
const createdAt = arg("--created-at") ?? new Date().toISOString();
const bodyFile = arg("--body-file");
const bodyInline = arg("--body");

if (!out || !runId || !target || (!bodyFile && bodyInline === undefined)) {
  console.error(
    "Usage: write-test-plan.mjs --out PATH --run-id ID --target TARGET [--created-at ISO] (--body-file PATH | --body MARKDOWN)",
  );
  process.exit(1);
}

const rawMarkdown = (bodyFile ? readFileSync(bodyFile, "utf8") : bodyInline).trim();
const content = `# Test Plan\n\nRun: \`${runId}\`\nTarget: \`${target}\`\nCreated: \`${createdAt}\`\n\n${rawMarkdown}\n`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, content, "utf8");
console.log(`Wrote ${out}`);
