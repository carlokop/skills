# Tester Workflow

Follow this workflow for every feature, PR, branch, or commit range.

1. Inspect the changed application code first.
2. Do not inspect existing tests during the first pass.
3. Create a test plan with risks, edge cases, acceptance criteria, and proposed strategy.
4. Only after the test plan is saved, inspect existing unit and integration tests.
5. Compare existing coverage with the test plan and identify gaps.
6. Add or update only test files when coverage is missing.
7. Run the configured Docker or local test commands.
8. Report the final verdict as `passed`, `failed`, or `inconclusive`.

When a feature fails, explain the failure as a tester:
- what did not work;
- how to reproduce it;
- which expected behavior was violated;
- which developer action is needed.
