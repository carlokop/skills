# Voorstel CHG-056: kwaliteitslat en regelbestanden in slice 1

| | |
| --- | --- |
| Status | Goedgekeurd (2026-11-25, Carlo, B-47; vraag 26 "Ja, zelfde stap" en vraag 35 "Ja, bijwerken"). Doorgevoerd in model 1.0.18 (CHG-058): de rijen hieronder, ook het deel voor vraag 35, staan nu in het register, `ORGANISATIE.md`, `processen/PRC-02-backlog-vullen.md` en de namenlijst. De inhoud van de bestanden volgt vraag 31 t/m 34 (B-47): elke afspraak op één plek, CLAUDE.md verwijst met een leesmoment en importeert niets (vraag 32, tegen het advies in), AGENTS.md met werkregels voor de bouw, de indeling van docs/ in CLAUDE.md. De skill is een nieuwe, aparte skill (vraag 28, tegen het advies in; PRP-084). |
| Aanleiding | Carlo antwoordde op ronde 3 tegen het advies in (B-46): vraag 16 "Nee, ook kwaliteitslat" en vraag 17 "Nee, Atlas in slice 1". Atlas maakt in slice 1 dus ook `CONSTRAINTS.md` (de kwaliteitslat) en `CLAUDE.md` en `AGENTS.md` van het project. In 0.18 maakte Atlas die drie bestanden in plaats van het conventiebestand (0.17, CHG-033; 0.18 `proces-catalogus.md` r.25, ACT-01.57; `prc-01.md` r.124). In 1.0 komen ze erbij: het goedgekeurde PRC-02 heeft het conventiebestand (ACT-02.57). Dit is een wijziging van het goedgekeurde model; volgens antwoord 6 van ronde 2 (ASM-99 afgewezen) loopt ze via een voorstel dat vooraf gecontroleerd wordt en dat Carlo apart goedkeurt. |
| Goedkeuring | `bpmn-conventies`, Een goedgekeurd model wijzigen: het geldende model verandert pas na het akkoord op vraag 26. |
| Bron over het laden | `bronnen/claude-code-feiten.md` §8: `CLAUDE.md` in de root wordt bij de start geladen, met zijn @-imports; `AGENTS.md` en `CONSTRAINTS.md` komen alleen binnen via een import als er een `CLAUDE.md` is. Volgens een samenvatting (voorbehoud) krijgen subagents dezelfde `CLAUDE.md`; of dat voor plugin-agents geldt, is niet gevonden. |
| Datum | 2026-11-25 |

**Legenda.** CHG = wijziging · PRC = proces · ACT = stap · G = beslispunt · GOV = akkoordmoment van Carlo · ROL-04 systeemarchitect · AGT-03 Atlas · AGT-08 hoofdsessie · AGT-10 Atlas-licht · ASM = aanname · PRP = voorstel · FND = bevinding · NFR = niet-functionele eis · ADR = vastgelegd ontwerpbesluit · r. = regelnummer.

## Geraakte rijen

| Plek | Nu (goedgekeurd) | Voorstel |
| --- | --- | --- |
| `register.yaml`, ACT-02.57, `naam` | "Conventiebestand opstellen (slice 1)" | "Conventiebestand, kwaliteitslat en regelbestanden opstellen (slice 1)" |
| `register.yaml`, ACT-02.57, `input` | "technisch ontwerp, design systeem, patroonbibliotheek, goedgekeurde NFR's" | dezelfde tekst, plus: "architectuurkeuze en ADR's (architect-conventions r.17); bestaande CLAUDE.md en AGENTS.md van het project (ASM-113)" |
| `register.yaml`, ACT-02.57, `output` | "één conventiebestand per project met UI-conventies (architect-conventions r.3)" | "één conventiebestand per project met UI-conventies (architect-conventions r.3); CONSTRAINTS.md met de kwaliteitslat: de meetbare grenzen uit de goedgekeurde NFR's, en zonder NFR de standaard van de skill (de vloer, en meten en vasthouden; atlas.md r.61); een ontbrekend getal dat ertoe doet, wordt een vraag aan ROL-01 via PRC-04; CLAUDE.md en AGENTS.md van het project. Wat in welk bestand staat: ASM-116 t/m ASM-119. Doorgevoerd met de uitkomst van vraag 31 t/m 34 erin: CLAUDE.md kort, met commands, de indeling van docs/ en verwijzingen met leesmoment, zonder imports |
| `register.yaml`, ACT-02.54, `output` | "... bij slice 1 bestaat het conventiebestand" | "... bij slice 1 bestaan het conventiebestand, CONSTRAINTS.md, CLAUDE.md en AGENTS.md" |
| `register.yaml`, PRC-02, `output` | "... in slice 1 ook het conventiebestand; ..." | "... in slice 1 ook het conventiebestand, de kwaliteitslat (CONSTRAINTS.md) en de regelbestanden (CLAUDE.md, AGENTS.md); ..." |
| `register.yaml`, ROL-04, `verantwoordelijkheid` (ronde 1) | "Eén conventiebestand per project, in slice 1 na het bouwcontract (architect-conventions r.3)." | "Eén conventiebestand per project, en in slice 1 ook de kwaliteitslat (CONSTRAINTS.md) en de regelbestanden (CLAUDE.md, AGENTS.md), na het bouwcontract (architect-conventions r.3; B-46)." |
| `register.yaml`, systemen, Repository van het klantproject (ronde 1; lage prioriteit) | "... het conventiebestand en het backlog in de map docs/backlog/ ..." | "... het conventiebestand, CONSTRAINTS.md, CLAUDE.md, AGENTS.md en het backlog in de map docs/backlog/ ..." |
| `ORGANISATIE.md` r.40 (ronde 1) | "in slice 1 het conventiebestand;" | "in slice 1 het conventiebestand, de kwaliteitslat en de regelbestanden;" |
| `ORGANISATIE.md` r.104 (ROL-04, ronde 1) | "... één conventiebestand, ..." | "... één conventiebestand, in slice 1 ook de kwaliteitslat en de regelbestanden, ..." |
| `ORGANISATIE.md` r.136 (repository, ronde 1; lage prioriteit) | "... het conventiebestand en het backlog ..." | "... het conventiebestand, CONSTRAINTS.md, CLAUDE.md, AGENTS.md en het backlog ..." |
| `processen/PRC-02-backlog-vullen.md` r.40 (output) | "in slice 1 het conventiebestand" | "in slice 1 het conventiebestand, de kwaliteitslat en de regelbestanden" |
| `processen/PRC-02-backlog-vullen.md` r.63 (ACT-02.57) | naam en resultaat zoals nu | naam, input en resultaat zoals in het register hierboven |
| `processen/PRC-02-backlog-vullen.md` r.68 (ACT-02.54) | "bij slice 1 conventiebestand aanwezig" | "bij slice 1 conventiebestand, CONSTRAINTS.md, CLAUDE.md en AGENTS.md aanwezig" |
| `processen/PRC-02-backlog-vullen.md` r.157 (diagram) | `A57["ACT-02.57 Conventiebestand opstellen (slice 1)"]` | `A57["ACT-02.57 Conventiebestand, kwaliteitslat en regelbestanden opstellen (slice 1)"]`. De routes veranderen niet. |
| `overzichten/namen-stappen-en-beslispunten.md` r.37 | "Conventiebestand opstellen (slice 1)" | de nieuwe naam; de oude naam blijft erbij |

**Alleen bij ja op vraag 35 (bijwerken na slice 1):**

| Plek | Nu (goedgekeurd) | Voorstel |
| --- | --- | --- |
| `register.yaml`, ACT-02.6, `output` | "... zo nodig het sliceplan bijgewerkt" | dezelfde tekst, plus: "zo nodig het conventiebestand, CONSTRAINTS.md, CLAUDE.md of AGENTS.md bijgewerkt (nieuwe NFR of afspraak)" |
| `register.yaml`, ACT-02.7, `output` | "ontwerp per slice per profiel ..." | dezelfde tekst, plus: "zo nodig het conventiebestand, CONSTRAINTS.md, CLAUDE.md of AGENTS.md bijgewerkt" |
| `processen/PRC-02-backlog-vullen.md`, rijen ACT-02.6 en ACT-02.7 | zoals nu | zoals in het register hierboven |

## Wat niet verandert

- **Geen nieuwe stap en geen nieuw beslispunt:** de kwaliteitslat en de regelbestanden komen in dezelfde stap als het conventiebestand. G-02.10 (eerste slice?) blijft de ingang.
- **Geen eigen akkoord:** zoals het conventiebestand, en zoals ACT-01.56 in 0.18. De meetbare grenzen in de kwaliteitslat komen uit NFR's die Carlo al goedkeurde (GOV-10); een ontbrekend getal dat ertoe doet, wordt een vraag aan hem.
- **Controleur:** atlas-licht, lichte controle (PRP-074 punt e, goedgekeurd in B-46 en aangevuld in 1.0.17): de grenzen in CONSTRAINTS.md komen uit de NFR's of uit de vloer van de skill, en CLAUDE.md en AGENTS.md spreken het conventiebestand niet tegen.

## Gevolgen

- **Voor het voorwerk (§8, met voorbehoud):** `CLAUDE.md` in de root wordt in elke sessie in die klantrepo geladen, en volgens een samenvatting ook in subagents. Omdat Carlo koos voor alleen verwijzen (vraag 32), blijft dat beperkt tot de korte `CLAUDE.md`; de andere bestanden worden niet vanzelf geladen. Restrisico: de bouw leest ze alleen als een sessie het leesmoment volgt (FND-105, ASM-117). Of dit alles voor plugin-agents geldt, is niet gevonden.
- **RACI en capabilities (Concept, ronde 3):** ACT-02.57 krijgt de nieuwe skill `regelbestanden-en-kwaliteitslat` (werknaam), `constraint-driven-development` en `context-engineering` (beide onbekend, OPEN-33). CAP-22 dekt weer CONSTRAINTS.md, CLAUDE.md en AGENTS.md.
- **Agents en skills:** PRP-084 (nieuwe skill, `architect-conventions`, en `atlas.md` r.31, r.42, r.101 en de regel voor `context-engineering`). In dit traject verandert niets (B-39).
- **Bestaande regelbestanden:** ASM-113 (vraag 27).

## Bij nee

Het geldende model blijft: alleen het conventiebestand in slice 1. Dan staat het besluit uit vraag 16 en 17 zonder stap in het model, en moet Carlo kiezen hoe de kwaliteitslat en de regelbestanden er dan komen. Vraag 27, 28 en 31 t/m 36 vervallen.
