# Definition Of Done

A feature passes testing only when all of these are true:

- The behavior matches the PR, commit, or Jira requirement.
- The happy path is covered.
- Relevant validation, authorization, and error paths are covered.
- Edge cases from the test plan are either tested or explicitly marked as residual risk.
- Robustness checklist items from the test plan are covered for every changed input-handling surface (null, empty string, whitespace-only string, range boundaries, overflow, invalid type, error contract) unless marked N/A with reason.
- Existing tests still pass.
- New or changed tests are focused and maintainable.
- No production code was changed by the tester.
- The final report is concrete enough for the user or Jira issue.

Mark the result as `inconclusive` instead of `passed` when:
- requirements are missing or contradictory;
- test data or environment setup is unavailable;
- tests cannot be run;
- the observed result cannot be verified confidently.
