# Test Implementation Prompt

Use this prompt shape for the second pass, after the test plan has been saved.

Rules:
- Existing tests may now be inspected.
- Only test files may be created or edited.
- Production code, config, migrations, Docker files, package manifests, and lockfiles are forbidden.
- External systems such as Jira and Google Sheets are forbidden in the MVP.
- Implement every robustness item from the saved test plan unless marked N/A.
- Assert the documented error contract (exception vs rejection response vs safe default).

Required headings:
- `## Existing Coverage`
- `## Gaps Found`
- `## Test Changes Made`
- `## Commands To Run`
- `## Residual Risk`
