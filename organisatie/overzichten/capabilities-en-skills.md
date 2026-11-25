# Capabilities en skills

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); in 1.0.22 administratief gecorrigeerd na de feitencontrole van Atlas (CHG-062); PRP-085 verwerkt (CHG-069, CHG-070); model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51) |
| Afgeleid uit | `register.yaml` (`capabilities`, `skills`, `skills_niet_in_1_0`, `raci`) |
| Datum | 2026-11-25 |

**Legenda.** CAP = capability · ACT = stap · AGT = agent (AGT-02 Socrates, AGT-03 Atlas, AGT-08 hoofdsessie, AGT-09 Socrates-licht, AGT-10 Atlas-licht) · ROL = rol · PRP = voorstel · FND = bevinding · OPEN = open vraag · ASM = aanname · r. = regelnummer.

**Status van een skill** (`bpmn-conventies`):
- **bestaat:** de skill dekt de capability en is gekoppeld aan de agent;
- **uitbreiden:** de skill bestaat, maar dekt de capability niet volledig;
- **koppelen:** de skill bestaat, maar is niet gekoppeld (komt in 1.0.13 niet voor);
- **nieuw:** de skill ontbreekt (met een werknaam);
- **onbekend:** niet vastgesteld of de agent de skill kan gebruiken.

**Gekoppeld** betekent in 1.0: voorgeladen in `skills:` van de agentdefinitie, of bij naam genoemd in de definitie (ASM-36). Dat bewijst niet dat de koppeling technisch werkt. Skills uit een andere plugin (agent-skills, mattpocock-skills) staan daarom op **onbekend**: of een agent ze kan laden, staat niet in de feiten (OPEN-33). De werking van alle skills is niet vastgesteld (OPEN-11).

## 1. Capabilities

Nummers uit 0.18 blijven (B-28). CAP-28 t/m CAP-34 gaan over de bouw en vallen buiten de scope (B-29). CAP-35 t/m CAP-39 zijn nieuw.

| CAP | Naam | Wat | Stappen | Skills |
| --- | --- | --- | --- | --- |
| CAP-01 | intake en overdracht van werk | opdracht vastleggen, agent starten of hervatten | ACT-01.2, 01.8, 03.5, 03.12, 04.57, 04.58, 06.6 | `regie` |
| CAP-02 | requirementsanalyse | eisen, bedrijfsregels, juridische keuzes, visie, kern | ACT-01.3, 01.6, 01.26, 01.54, 02.3 | `requirements-analysis`, `domain-analysis`, `architectuurprofielen`, `domain-modeling`, `idea-refine`, `spec-driven-development`, `grilling` |
| CAP-03 | use cases opstellen | UC- en AC-ID's | ACT-01.9, 02.12 | `uml-use-cases`, `grilling` |
| CAP-04 | use cases toetsen | genoeg om op te ontwerpen? | ACT-01.23, 02.13 | `architect-use-case-review` |
| CAP-05 | architectuurkeuze | profiel-ADR, diagrammen | ACT-01.11, 02.6 | `architect-architecture-choice`, `architectuurprofielen`, `domain-modeling`, `doubt-driven-development`, `grilling` |
| CAP-06 | domeinmodellering | intern domeinmodel, glossary | ACT-01.10, 02.6 | `architect-modeling`, `uml-domain-modelling`, `domain-modeling` |
| CAP-07 | gedragsmodellering | sequentiediagrammen | ACT-01.12, 01.59, 02.6, 02.7 | `architect-modeling`, `uml-sequence-diagrams`, `architect-implementation-plan` |
| CAP-08 | structuurontwerp | klassendiagram, modules per slice | ACT-01.13, 02.6, 02.7 | `architect-modeling`, `uml-class-diagram`, `architect-implementation-plan` |
| CAP-09 | databaseontwerp | databasemodel | ACT-01.24, 01.59, 02.6 | `architect-database`, `architect-modeling`, `doubt-driven-development` |
| CAP-10 | opdelen in slices | sliceplan met volgorde | ACT-01.16, 02.5 | `architect-vertical-slices`, `planning-and-task-breakdown` |
| CAP-11 | bouwcontract ontwerpen | OpenAPI met leesbare versie, of templatecontract | ACT-02.8, 02.58 | `architect-api-contracts`, `api-and-interface-design`, `deprecation-and-migration`, `doubt-driven-development` |
| CAP-12 | implementatieplanning | werkpakketten | ACT-02.9 | `architect-implementation-plan`, `planning-and-task-breakdown` |
| CAP-13 | backlog opbouwen | taak- en epicbestanden, uitbreidingslijst | ACT-01.29, 02.11 | `backlog-regie` (nieuw) |
| CAP-14 | poortcontrole | vaste controles, backlog gereed | ACT-02.53, 02.54 | `backlog-regie` (nieuw) |
| CAP-15 | goedkeuring aanvragen en vastleggen | indienen, verwerken, status zetten | ACT-03.1, 03.3, 03.4, 03.7, 03.13, 05.2 | `vragen-en-akkoordrondes`, `documenten-bijwerken` |
| CAP-16 | productbesluit en antwoord (mens) | alleen Carlo | ACT-01.1, 02.2, 03.2, 05.5 | n.v.t. |
| CAP-17 | vragen en grill-sessies | vragen, antwoorden, wijzigingsverzoek, contextverslag | ACT-01.3, 02.3, 04.1 t/m 04.6, 04.55, 04.56 | `vragen-en-akkoordrondes`, `grilling`, `requirements-clarification`, `architect-clarification`, `api-and-interface-design`, `deprecation-and-migration` |
| CAP-18 | escaleren | opties voorleggen, besluit uitvoeren | ACT-03.10, 03.11, 04.52 t/m 04.54, 05.3, 05.4, 05.6, 06.5, 06.7 | `regie`, `vragen-en-akkoordrondes` |
| CAP-19 | blokkades bewaken | melden, vastleggen, oplossen | ACT-06.1, 06.4 | `regie`; ACT-06.1: geen skill, instructie in de agentdefinitie (OPEN-46) |
| CAP-20 | volgorde en flow bewaken | volgende slice of wens, weekmoment, dagstart | ACT-01.29, 02.1, 02.17, 07.1, 07.3, 07.4 | `backlog-regie` (nieuw) |
| CAP-21 | ontwerpbesluiten vastleggen | ADR's | ACT-01.11, 01.24, 02.9, 02.55, 04.4 | `documentation-and-adrs` |
| CAP-22 | ontwikkelafspraken vastleggen | conventiebestand; in slice 1 ook kwaliteitslat en regelbestanden (B-46; stap volgens voorstel CHG-056) | ACT-02.57; ACT-02.6 en 02.7 bij bijwerken | `regelbestanden-en-kwaliteitslat` (nieuw), `architect-conventions`, `constraint-driven-development`, `context-engineering` |
| CAP-23 | rondes tellen en begrenzen | rondes en afkeuringen in de stand | ACT-03.5, 03.11, 04.51, 04.52, 05.1 | `vragen-en-akkoordrondes`, `regie` |
| CAP-24 | paginalijst en paginabrieven | nu en later, brieven, afstemmen | ACT-01.27, 01.58, 02.15, 02.56 | `paginalijst-en-paginabrieven` |
| CAP-25 | paginaontwerp (mens) | alleen Carlo (ASM-28) | ACT-01.52, 01.28, 02.16 | n.v.t. |
| CAP-26 | contentmodel en configuratie (P1) | | ACT-01.60, 02.7 | `architect-cms-configuratie` |
| CAP-27 | componenten-, route- en dataontwerp (P2) | | ACT-01.59, 02.7 | `architect-componentontwerp` |
| CAP-35 | controle vóór het akkoord | controle, nacontrole, toets van backlog-items | ACT-03.6, 03.14 | `requirements-validation`, `ontwerp-controle` (nieuw), `architect-implementation-plan` |
| CAP-36 | vragendialoog met de project owner | vragen stellen, antwoorden letterlijk teruggeven | ACT-03.8, 03.9, 04.57 | `regie` |
| CAP-37 | stand van de keten bijhouden | stand in de klantrepo (ASM-80, ASM-104) | ACT-01.2, 02.17, 03.5, 03.13, 06.4, 07.1, 07.4 | `regie`, `backlog-regie` (nieuw) |
| CAP-38 | wekmechanisme beheren | cron-taak van het weekmoment | ACT-07.2 | `backlog-regie` (nieuw) |
| CAP-39 | ontwerppagina maken | HTML-pagina van een ontwerpdocument met akkoord; publiceren als Artifact optioneel | ACT-01.13, 01.24, 01.59, 01.60, 02.8; 02.6 en 02.7 bij een wijziging | `ontwerppagina` |

## 2. Skills

| Skill | Plugin | Status | Capability | Gebruikers | Wat er moet veranderen |
| --- | --- | --- | --- | --- | --- |
| `requirements-analysis` | socrates | uitbreiden | CAP-02 | AGT-02 | vaste vraag naar juridische keuzes (PRP-078) |
| `domain-analysis` | socrates | bestaat | CAP-02 | AGT-02 | — |
| `uml-use-cases` | socrates | bestaat | CAP-03 | AGT-02 | — |
| `paginalijst-en-paginabrieven` | socrates | bestaat | CAP-24 | AGT-02 | — |
| `requirements-validation` | socrates | uitbreiden | CAP-35 | AGT-09 (voorgeladen), AGT-02 | visie, paginalijst en brieven (PRP-073); nacontrole (PRP-081) |
| `requirements-clarification` | socrates | bestaat | CAP-17 | AGT-02, AGT-09 | — |
| `regie` | socrates | uitbreiden | CAP-01, 18, 19, 23, 36, 37 | AGT-08 | keten van 1.0, afkeuring, blokkade, stand (PRP-072, 075); nacontrole en uitgang (PRP-081); toets standaard (PRP-080); verboden op backlog-items (FND-088); vraag aan Carlo uit een lopende sessie, stand per ronde (PRP-085) |
| `vragen-en-akkoordrondes` | socrates en atlas | uitbreiden | CAP-15, 17, 23 | AGT-02, AGT-03 (voorgeladen) | nacontrole, uitgang, tellingen in de stand (PRP-081); productkeuze in de sessie direct aan Carlo, lopend contextverslag (PRP-085) |
| `architectuurprofielen` | socrates en atlas | bestaat | CAP-02, 05 | AGT-02, AGT-03 | twee kopieën, samen bijwerken en vergelijken (PRP-083, B-47) |
| `documenten-bijwerken` | socrates en atlas | bestaat | CAP-15 | AGT-02, AGT-03 | idem |
| `overdracht` | socrates en atlas | bestaat | CAP-01 | AGT-02, AGT-03 | idem; geen vaste stap |
| `kort` | socrates en atlas | bestaat | alle schrijvende stappen | AGT-02, 03, 09, 10 (voorgeladen) | idem |
| `architect-use-case-review` | atlas | uitbreiden | CAP-04 | AGT-03 | r.16, r.22 en r.29: één lopend contextverslag per sessie; binnen een toetsronde de antwoorden van Socrates terug naar dezelfde Atlas (ASM-124; PRP-085, B-50) |
| `architect-architecture-choice` | atlas | uitbreiden | CAP-05 | AGT-03 | r.57: ADR alleen bij drie voorwaarden, atlas.md r.48 eist er een bij elke wijziging. Wijziging (PRP-082): bij de eerste architectuurkeuze blijven de drie voorwaarden; bij een wijziging van het globale ontwerp altijd een ADR |
| `architect-cms-configuratie` | atlas | bestaat | CAP-26 | AGT-03 | — |
| `architect-componentontwerp` | atlas | bestaat | CAP-27 | AGT-03 | — |
| `architect-modeling` | atlas | bestaat | CAP-06, 07, 08, 09 | AGT-03 | — |
| `uml-domain-modelling` | atlas | bestaat | CAP-06 | AGT-03 | — |
| `uml-sequence-diagrams` | atlas | uitbreiden | CAP-07 | AGT-03, AGT-10 | r.12 eist een goedgekeurd domeinmodel (PRP-082) |
| `uml-class-diagram` | atlas | uitbreiden | CAP-08 | AGT-03 | r.12 eist goedgekeurde modellen; Paperclip-pad in `scripts/render-png.mjs` r.9, r.28 (PRP-082) |
| `architect-database` | atlas | bestaat | CAP-09 | AGT-03 | — |
| `architect-vertical-slices` | atlas | uitbreiden | CAP-10 | AGT-03 | akkoordmoment voor het sliceplan (PRP-079) |
| `architect-api-contracts` | atlas | uitbreiden | CAP-11 | AGT-03 | r.41 slice 1 in het contract-akkoord (PRP-079); r.63 controle zonder criteria (PRP-074) |
| `architect-conventions` | atlas | uitbreiden | CAP-22 | AGT-03 | r.36 "geen aparte controleur" (PRP-074); de definition of done gaat naar CONSTRAINTS.md (r.3, r.11; PRP-084 deel A); ook bijwerken in ACT-02.6 en 02.7 (r.14; ASM-120) |
| `regelbestanden-en-kwaliteitslat` (werknaam) | atlas | nieuw | CAP-22 | AGT-03 | CONSTRAINTS.md, CLAUDE.md en AGENTS.md opstellen en bijwerken (ASM-120; B-47 vraag 28; PRP-084 deel A) |
| `architect-implementation-plan` | atlas | uitbreiden | CAP-12, 07, 08, 35 | AGT-03 | r.194 toets alleen op verzoek (PRP-080); nacontrole bij GOV-18 (PRP-081); r.3, r.149-157 en r.192 (PRP-082) |
| `architect-clarification` | atlas | bestaat | CAP-17 | AGT-03, AGT-10 | — |
| `ontwerppagina` | atlas | bestaat | CAP-39 | AGT-03 | — |
| `ontwerp-controle` (werknaam) | atlas | nieuw | CAP-35 | AGT-10 | controlelijst voor al het werk van Atlas (PRP-074) |
| `backlog-regie` (werknaam) | socrates | nieuw | CAP-13, 14, 20, 37, 38 | AGT-08 | backlog-items, vaste controles, backlog gereed, uitbreidingslijst, ritme (PRP-077) |
| `grilling` | mattpocock-skills | onbekend | CAP-02, 03, 05, 17 | AGT-02, AGT-03 | — (OPEN-33) |
| `domain-modeling` | mattpocock-skills | onbekend | CAP-02, 06, 21 | AGT-02, AGT-03 | — (OPEN-33) |
| `research` | mattpocock-skills | onbekend | geen vaste stap | AGT-03, AGT-10 | — (OPEN-33) |
| `idea-refine` | agent-skills | onbekend | CAP-02 | AGT-02 | — (OPEN-33) |
| `spec-driven-development` | agent-skills | onbekend | CAP-02 | AGT-02 | — (OPEN-33) |
| `planning-and-task-breakdown` | agent-skills | onbekend | CAP-10, 12 | AGT-03 | — (OPEN-33) |
| `documentation-and-adrs` | agent-skills | onbekend | CAP-21 | AGT-03 | — (OPEN-33) |
| `doubt-driven-development` | agent-skills | onbekend | CAP-05, 09, 11 | AGT-03 | — (OPEN-33) |
| `api-and-interface-design` | agent-skills | onbekend | CAP-11, 17 | AGT-03 | — (OPEN-33) |
| `deprecation-and-migration` | agent-skills | onbekend | CAP-11, 17 | AGT-03 | — (OPEN-33) |
| `constraint-driven-development` | agent-skills | onbekend | CAP-22 (kwaliteitslat, B-46) | AGT-03 | — (OPEN-33) |
| `context-engineering` | agent-skills | onbekend | CAP-22 (regelbestanden, B-47 vraag 36) | AGT-03 | `atlas.md` gaat hem noemen (PRP-084 deel B) (OPEN-33) |

**Telling:** 42 skills: 15 bestaat, 12 uitbreiden, 3 nieuw en 12 onbekend (sinds 1.0.27: `architect-use-case-review` naar uitbreiden, PRP-085, B-50). Niet in de keten en niet meegeteld: de zes `bpmn-*`-skills van Socrates (alleen PRC-08, op verzoek) en `improve-codebase-architecture` en `codebase-design` van Atlas (bestaande code beoordelen; status onbekend).

## 3. Skills die in 1.0 niet meer gebruikt worden

Ze staan in `skills/` of op het Paperclip-platform. Wat ermee gebeurt, staat in `afbouwlijst-paperclip.md`.

| Skill | Paperclip-resten | Wat in 1.0 overgaat |
| --- | --- | --- |
| `backlog-management` | backlog in Paperclip-issues (r.8), issue per uitbreiding (r.33) | uitbreidingslijst en "klaar om op te pakken" naar `backlog-regie` |
| `weekmoment` | weekmoment-issue met kaarten, routine maandag 04:00, `para-memory-files` | het weekmoment naar `backlog-regie`; afname, top 5, retro, focusdoel en limieten vallen weg |
| `quality-gates` | bewijs op het issue, kaarten, vervallen GOV's | revisiecontrole en "backlog gereed" naar `backlog-regie` |
| `delivery-management` | bord met statussen en toewijzing, limieten, budget, herinnering als comment | telling voor de dagstart naar `backlog-regie` |
| `escalation-management` | issue op geblokkeerd, budget 80% | escalatie via `regie`; GOV-07-vraag via `backlog-regie` |
| `agent-orchestration` | comment op het bovenliggende issue | vervangen door `regie` |
| `requirements-orchestration` | wens als issue, Paperclip-project | vervangen door `regie` |
| `dependency-management` | afhankelijkheden op de issues | in het taakbestand (ASM-102) |
| `sprint-planning` | Paperclip-document en kaart | geen sprints |
| `oordeel-hulp` | Dr. Evil, issue | niet in de keten |
| `code-reviewer`, `frontend-ui-engineering-fork`, `npm-test-project`, `performance-optimization-fork`, `testplan-en-rapport` | niet per regel nagelopen | bouw, buiten de scope (B-29) |
| `paperclip`, `paperclip-converting-plans-to-tasks`, `para-memory-files` | het platform zelf | vervallen met Paperclip |
