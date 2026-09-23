# Test plan design

Use this when writing `test-plan.md` (Fase 1). Keep the CLI headings. Fill them with the content below. Do not edit files under `templates/`.

Fase 1 is high effort. The skill cannot change the model. Decide scope, technique, combinations, and the error contract before writing the file.

Required headings stay:

```markdown
## Summary
## Risks
## Edge Cases
## Acceptance Criteria
## Test Strategy
## Open Questions
```

## Mode

State `pre-implementation` or `post-implementation` in Summary.

- `pre-implementation`: surfaces, fields, and error contracts come from the backlog. Name a code path only when the backlog names it. Missing detail goes under Open Questions.
- `post-implementation`: surfaces come from the backlog and the application code that implements the item.

## Summary — scope

- Mode: `pre-implementation` or `post-implementation`.
- Backlog item id and title.
- In scope: backlog behavior, and in `post-implementation` the code paths (endpoint, validator, job, screen, helper).
- Out of scope.
- Automated tests apply, or documentation-only (then a review checklist and no test cases).

## Acceptance Criteria — checks

Turn each backlog criterion into a check that can fail:

`Given {situation}, when {action}, then {status / persisted data / error}.`

## Risks

List behavior that can ship wrong: auth, tenant isolation, silent accept of invalid input, wrong state transition. Tie each risk to a case under Edge Cases or mark it residual in Test Strategy.

## Per surface — pick one technique

Name every changed input-handling surface. Choose one row. Record the choice under `## Test Strategy` as `### Technique per surface`.

| Situation | Plan this |
|-----------|-----------|
| One input or one rule | Robustness checklist on that field |
| Two or more independent factors that together decide behavior (role, status, tenant, limit) | Factors, levels, and a short pairwise table |
| States and transitions | Valid transitions and invalid transitions |
| Permissions or another tenant's data | Security cases: forbidden role, other tenant, missing token |

Use pairwise only when two or more factors jointly determine the outcome. Otherwise the robustness checklist is enough.

### Pairwise table

Under `## Edge Cases`, for that surface:

- Factors and levels (2–4 levels each; include one invalid level only when the product must reject it).
- A short pairwise table (2-wise): each pair of levels appears in at least one row.
- Forbidden combinations listed separately and left out of the table.

Example:

| # | role | status | tenant |
|---|------|--------|--------|
| 1 | admin | active | own |
| 2 | guest | active | other |
| 3 | member | archived | own |

## Edge Cases — per surface

For each surface, include:

- Happy path.
- Robustness items that apply: null/missing, `""`, whitespace-only, numeric bounds (below min, at min, at max, above max, 0, negative), overflow, invalid type. Mark the rest `N/A` with a reason.
- Domain cases from the backlog (expired invite, duplicate slug, and similar).
- Error contract: exception, HTTP rejection (400/422), or safe default. Invalid input must not be stored silently.
- When pairwise applies: each table row, plus the forbidden combinations that must be rejected or excluded.

Group by component. Domain cases sit next to the checklist, not instead of it.

## Test Strategy

- One integration test per acceptance criterion.
- Unit test only for pure helpers.
- Assertions: status, response shape, and database side effect where the behavior persists data.
- `### Technique per surface` with the chosen row from the table above.
- `### Robustness coverage`: each surface mapped to checklist items or `N/A` with reason.
- `### Not tested`: deliberate gaps with reason (residual risk).

## Open Questions

Only questions that block the expected result. No open question means the plan can be implemented.
