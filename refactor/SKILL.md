---
name: refactor
description: >-
  Auditeert git-wijzigingen sinds de laatste gemergede PR op refactor-kansen (dode code,
  god components, grote functies, smells), schrijft rapport naar docs/reports/, plant
  taken, commit rapport, voert refactors per taak uit met commits, en eindigt met npm-test skill.
  Gebruik wanneer de gebruiker refactor skill, post-PR refactor audit, of
  /reports refactor-audit vraagt.
---

# Refactor

Workflow voor wijzigingen **zonder open PR** op de huidige branch.

## Fase 1 — Scope (geen code wijzigen)

1. Bepaal basiscommit:
   - `gh pr list --state merged --limit 1` op de branch, of
   - `mergeCommit` / `headRefOid` van de laatste gemergede PR voor deze branch.
2. Diff: `git log <base>..HEAD --oneline` en `git diff <base>..HEAD --stat`.
3. Open PR check: `gh pr list --head $(git branch --show-current)` — als open PR bestaat, stop en meld dat audit op PR-diff moet.

## Fase 2 — Audit (high effort)

Review **alle** gewijzigde `react/src`, `node/src`, en relevante router/layout/lib in de diff.

Checklist:

- Dode code, ongebruikte exports, deprecated aliassen
- God components/pages (>250 regels, veel state, mixed concerns)
- Functies >40 regels met meerdere verantwoordelijkheden
- Duplicatie (nav-filter, load/save hooks, validators)
- Regressies (bijv. nav active state na shell-wijziging)
- RBAC/route/sync tussen React en Node
- Tests ontbreken voor gedrag dat refactored wordt

**Geen** productfeatures of scope-uitbreiding — alleen onderhoudbaarheid.

## Fase 3 — Rapport

Schrijf naar `docs/reports/refactor-audit-post-PR-<n>-<branch-slug>.md` (zelfde stijl als `refactor-audit-PR-41-*.md`):

- Context (basiscommit, commits, geen open PR)
- Findings F1…Fn (severity, files, smell, recommendation)
- **Ordered task plan** (R1, R2, …) — elke taak één commit
- Out of scope

Commit alleen het rapport (+ skill indien nieuw):

```bash
git add docs/reports/ .cursor/skills/refactor/
git commit -m "$(cat <<'EOF'
docs: refactor audit sinds PR #<n>

EOF
)"
```

## Fase 4 — Refactor per taak

Voor elke taak R*n* in volgorde:

1. Implementeer minimale correcte diff
2. Unit/integration tests bij gedragswijziging
3. `npm run test` in `react/` of `node/` indien gelimiteerd; anders volledige npm-test skill aan het eind
4. Commit:

```bash
git commit -m "$(cat <<'EOF'
refactor(<scope>): <korte why>

EOF
)"
```

## Fase 5 — Validatie

Lees en volg [`.cursor/skills/npm-test/SKILL.md`](../npm-test/SKILL.md): test → lint → build tot groen.

## Regels

- Volg project rules (`forbidden-patterns`, `testing`, `design-guidelines` waar UI raakt)
- Geen push tenzij gebruiker vraagt
- Rapport **vóór** refactor-commits

## Gerelateerd

- [`npm-test`](../npm-test/SKILL.md)
- Voorbeeldrapport: [`docs/reports/refactor-audit-PR-41-periodieke_factuur_aanpassen.md`](../../../docs/reports/refactor-audit-PR-41-periodieke_factuur_aanpassen.md)
