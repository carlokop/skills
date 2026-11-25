# Skills

Agents en skills van Carlo Kop, als Claude Code-plugins.

## Agents

Claude Code-plugins met agents en hun eigen skills, in `agents/<naam>/`. Installeren: `/plugin marketplace add carlokop/skills`, daarna `/plugin install <naam>@carlokop`.

| Agent | Doel |
|-------|------|
| [neo](agents/neo/) | Development-agents Neo, Neo-licht en Neo-diep, met `skill-router` |
| [sentinel](agents/sentinel/) | Security- en codereviewer met `sentinel-review`, `secrets-detectie` en `dependency-audit` |
| [trace](agents/trace/) | Tester: testplan per acceptatiecriterium, tests en testrapport |
| [socrates](agents/socrates/) | Business analist (+ licht) en de regie-skill: van wens naar goedgekeurde eisen |
| [atlas](agents/atlas/) | Systeemarchitect (+ licht): architectuur, modellen, database, contract en implementatieplan |

## Skills

[`skills/`](skills/) bevat losse skills die bij geen van de agents horen: forks (`frontend-ui-engineering-fork`, `performance-optimization-fork`), `code-reviewer`, `testplan-en-rapport` en `npm-test-project`. Ze zijn nog niet tool-neutraal gemaakt en niet in een plugin opgenomen.

## Licentie

[MIT](LICENSE) © Carlo Kop
