---
name: skill-router
description: Analyseert een taak of vraag en wijst alle skills aan die de taak nodig heeft, en laadt ze volledig voordat het werk begint. Gebruik aan het begin van een ontwikkeltaak, bugfix, refactor, review of ontwerpvraag, of wanneer een backlog-item geen skills noemt. Kwaliteit gaat voor tokenbesparing: er is geen maximum aantal skills, en een skill die past wordt altijd geladen.
---

# Skill-router

Doel: vóór het werk bepalen **welke skills** de taak nodig heeft, die **volledig laden** en pas daarna beginnen. De skills bepalen de kwaliteit van de code. Laat daarom nooit een passende skill achterwege om tokens te besparen.

## Stap 1 — Is de keuze al gemaakt?
Zoek in de taak, het backlog-item of de opdracht naar een expliciete regel *Skills:* of een genoemde skill. Staat die er, **laad precies die** en sla stap 2 en 3 over (controleer wel stap 4). Een planner kent het ontwerp; zijn keuze gaat voor die van jou.

## Stap 2 — Analyseer de taak
Beantwoord kort, voor jezelf:
1. **Soort werk:** bouwen, bug, refactor, review, ontwerp/plan, documenteren, uitrollen?
2. **Wat raakt het:** auth/invoer/secrets, database of migratie, endpoint of contract, UI, pipeline/CI, prestaties, logging, dependencies?
3. **Hoe zeker is de uitkomst:** vastgelegd ontwerp (uitvoeren) of nog open (ontwerpen)?
4. **Inzet bij een fout:** laag, of hoog (beveiliging, data, productie)?

## Stap 3 — Kies de skills
Kies per signaal. Neem alleen wat de taak echt raakt.

**Soort werk**
| Signaal | Skill |
|---|---|
| Code schrijven of wijzigen (altijd bij bouwen) | `test-driven-development` |
| Taak raakt meerdere bestanden | `incremental-implementation` |
| Test faalt, build breekt, onverwacht gedrag | `debugging-and-error-recovery` |
| Gedrag behouden, code leesbaarder maken | `code-simplification` |
| Oude API, systeem of schema vervangen of verwijderen | `deprecation-and-migration` |
| Commit, branch, PR, conflicten | `git-workflow-and-versioning` |
| Uitrollen, release, monitoring, rollback | `shipping-and-launch` |

**Onderwerp**
| Signaal | Skill |
|---|---|
| Auth, autorisatie, invoer, secrets, externe diensten, persoonsgegevens | `security-and-hardening` |
| Endpoint, response, contract, module-grens toetsen | `api-and-interface-design` |
| Logging, metrics, traces, alerts | `observability-and-instrumentation` |
| Traag, N+1, laadtijd, metingen | `performance-optimization` |
| UI, componenten, toegankelijkheid | `frontend-ui-engineering` |
| Controle in een echte browser, console, netwerk | `browser-testing-with-devtools` |
| Pipeline, workflow, kwaliteitspoorten | `ci-cd-and-automation` |
| Beslissing vastleggen, docs lopen achter | `documentation-and-adrs` |
| Onbekend framework of bibliotheek, juistheid telt | `source-driven-development` |

**Vóór het bouwen (alleen als het ontwerp nog open is)**
| Signaal | Skill |
|---|---|
| Wens vaag of eisen ontbreken | `interview-me`, dan `spec-driven-development` |
| Werk opdelen in taken | `planning-and-task-breakdown` |
| Idee uitwerken of toetsen | `idea-refine` |
| Hoge inzet en je wilt een beslissing laten tegenspreken | `doubt-driven-development` |

**Projectskills:** bestaan er in `.claude/skills/` skills voor testen, taken uitvoeren, reviewen of de stack (bijvoorbeeld `dotnet-test`, `implement-sprint-task`, `clerk-auth`), dan **gaan die voor** op de algemene variant.

## Stap 4 — Volledigheid controleren
- **Geen maximum.** Elke skill waarvan een signaal in stap 3 past, wordt geladen. Zijn het er zes of tien, dan laad je er zes of tien.
- **Twijfel = laden.** Past een skill mogelijk, laad hem dan. Een skill te veel kost tokens; een skill te weinig kost kwaliteit.
- Loop de tabellen nog één keer langs met de vraag: *"Is er een signaal dat ik oversloeg?"* Let vooral op beveiliging, tests, migraties en contracten, waar een fout het duurst is.
- Er zijn alleen **inhoudelijke** uitzonderingen, nooit om tokens:
  - **Rol:** een uitvoerende agent (zoals Neo) laadt geen plan-, spec- en interviewskills als het ontwerp al goedgekeurd is. Dat is een rolgrens, geen besparing.
  - **Onafhankelijkheid:** de bouwer laadt geen review-skills om zijn eigen werk goed te keuren; dat doet een aparte reviewer.
- **Escalatie:** raakt de taak auth, RLS, tenant-isolatie, een migratie met bestaande data of een hardnekkige fout, meld dan dat een zwaarder model (neo-diep, Opus high) of een reviewer nodig is. Laad de skills wel.

## Stap 5 — Laad en meld
1. Laad **alle** gekozen skills met het Skill-tool, **volledig** en **vóór de eerste regel code**, in volgorde van gebruik. Alleen noemen of samenvatten telt niet: lees de instructies en pas ze toe.
2. Schrijf één regel: `Skills: <lijst> — reden: <korte reden per skill>`.
3. Begin met het werk. Verandert de taak onderweg (een test faalt onverwacht, het werk raakt ineens auth), loop dan stap 2 tot en met 4 opnieuw en laad wat erbij komt.
4. Vermeld in de oplevering welke skills je gebruikt hebt en welke je later hebt toegevoegd.

## Voorbeelden
- *"Voeg het endpoint toe voor facturen die op de tenant gefilterd worden."* → `test-driven-development`, `api-and-interface-design` (toetsen aan contract), `security-and-hardening`. Tenant-isolatie: escalatie melden.
- *"Hernoem `Invoice` naar `SalesInvoice` in alle bestanden."* → geen skill nodig, mechanisch (neo-licht). Alleen controlecommando bedenken.
- *"Test X faalt na de laatste merge."* → `debugging-and-error-recovery`, `test-driven-development`.
- *"Maak een migratie die een kolom hernoemt in productie."* → `deprecation-and-migration`, `security-and-hardening`, `test-driven-development`; escalatie naar neo-diep.
- *"Bouw het dashboard-scherm."* → `frontend-ui-engineering`, `test-driven-development`, `browser-testing-with-devtools`.
