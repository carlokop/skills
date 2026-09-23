# Skills

Cursor Agent Skills voor softwarekwaliteit: testen van backlog-items, security-audits, refactors en npm-validatie.

Kopieer een skillmap naar `.cursor/skills/<naam>/` in een project (of naar `~/.cursor/skills/` voor persoonlijk gebruik). Cursor laadt `SKILL.md` en past de skill toe wanneer de beschrijving matcht met je vraag.

## Overzicht

| Skill | Doel |
|-------|------|
| [tester-agent](tester-agent/) | Orkestreert het volledige tester-proces (plan → schrijven → suite) |
| [tester-plan](tester-plan/) | Fase 1: schrijf een CLI-compatibel testplan |
| [tester-write-tests](tester-write-tests/) | Fase 2: schrijf en run tests één voor één |
| [tester-run-tests](tester-run-tests/) | Fase 3: run de suite en schrijf rapporten |
| [security-audit](security-audit/) | Read-only security review met rapport |
| [refactor](refactor/) | Post-PR refactor-audit, takenplan en uitvoering |
| [npm-test](npm-test/) | Test → lint → build tot groen, daarna commit |

## Tester-workflow

`tester-agent` is de orchestrator. Die routeert een backlog-item door drie fasen:

```
tester-agent
├── Fase 1  tester-plan         → test-plan.md
├── Fase 2  tester-write-tests  → tests + agent-summary.md
└── Fase 3  tester-run-tests    → report.md / report.json / report.csv
```

### tester-agent

Startpunt voor “test dit backlog-item”. Volgt de fasen in volgorde, houdt voortgang bij in chat en `progress.log`, en schrijft rapporten in hetzelfde formaat als de CLI.

- Werkt pre-implementation (alleen backlog) of post-implementation (backlog + code).
- Wijzigt geen productiecode; alleen testbestanden en rapporten.
- Projectoverrides horen in `.tester-agent/`, niet in de skill-templates.

### tester-plan (fase 1)

Schrijft `test-plan.md` vanuit een backlog-item. Geen bestaande tests openen, geen productie- of testbestanden wijzigen.

- **pre-implementation:** alleen de backlog; open vragen als paths of error-contracten ontbreken.
- **post-implementation:** ook relevante applicatiecode (geen bestaande tests).

### tester-write-tests (fase 2)

Implementeert coverage uit het opgeslagen plan. Per gepland geval: testbestand schrijven, focused command draaien, falen classificeren als testbug of app-bug (residual risk).

- Alleen testbestanden mogen wijzigen.
- Eindigt met `agent-summary.md` voor fase 3.

### tester-run-tests (fase 3)

Draait de relevante testcommando’s en schrijft de drie CLI-rapporten via `write-final-report.mjs`. Verdict: `passed`, `failed` of `inconclusive`.

## Overige skills

### security-audit

Statische security-review (React, marketing, Node, database-schema). Enige schrijfactie: `docs/reports/YYYY-MM-DD-security-audit.md`. Geen DAST, geen productie-DB, geen codewijzigingen.

Focus o.a. Clerk-auth, RBAC, IDOR, CORS/CSRF, SQL, RLS en browser/content-hygiëne.

### refactor

Auditeert wijzigingen sinds de laatste gemergede PR op refactor-kansen (dode code, god components, grote functies, smells). Schrijft een rapport naar `docs/reports/`, plant taken (R1, R2, …), voert ze per commit uit en eindigt met de `npm-test` skill.

Stopt als er nog een open PR op de branch staat.

### npm-test

Valideert vanaf repo-root: `npm run test` → `lint` → `build`. Bij elke fout: fixen en de hele cyclus opnieuw. Bij wijzigingen en alles groen: commit met `fix npm errors`. Geen push tenzij gevraagd.

## Licentie

[MIT](LICENSE) © Carlo Kop
