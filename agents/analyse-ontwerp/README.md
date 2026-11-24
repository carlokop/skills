# analyse-ontwerp

Claude Code-plugin met twee agents voor het werk vóór de code: **Socrates** (business analist) en **Atlas** (systeemarchitect), elk met een goedkope lichte variant, plus de skill **regie** waarmee de hoofdsessie ze samen laat werken.

| Agent | Model | Doet |
|---|---|---|
| `socrates` | Opus 5.5, high | Eisen (FR/NFR), use cases met acceptatiecriteria, bedrijfsregels, glossary, paginalijst en -brieven, wijzigingsverzoeken; BPMN-organisatiemodellen alleen op verzoek |
| `socrates-licht` | Sonnet 5.5, high | Controle van het werk van Socrates vóór het akkoord; vragen over goedgekeurde eisen. Alleen lezen |
| `atlas` | Opus 5.5, high | Toets op use cases en brieven, architectuurkeuze en profiel (P1/P2/P3), domeinmodel, sequenties, klassendiagram, database, ADR's, bouwcontract (OpenAPI), slices, implementatieplan met werkpakketten |
| `atlas-licht` | Sonnet 5.5, high | Controle van het werk van Atlas vóór het akkoord; onderzoek; vragen over het goedgekeurde ontwerp; sequentiediagrammen uit het model |

Geen van beide schrijft productiecode. De gebruiker keurt eisen en ontwerp goed.

## Installeren

```sh
claude plugin marketplace add carlokop/skills     # of een lokaal pad naar deze repo
claude plugin install analyse-ontwerp@carlokop
```

In een sessie heten de agents `analyse-ontwerp:socrates` enz. Een agent als hoofdsessie starten kan ook: `claude --agent analyse-ontwerp:socrates`. Dan stelt hij zijn vragen rechtstreeks, maar kan hij Atlas niet zelf laten toetsen.

**Algemene skills** die de agents gebruiken, staan niet in deze plugin en moeten globaal geïnstalleerd zijn: `grilling`, `domain-modeling`, `research`, `codebase-design`, `improve-codebase-architecture` (mattpocock-skills) en `planning-and-task-breakdown`, `documentation-and-adrs`, `spec-driven-development`, `idea-refine`, `doubt-driven-development`, `constraint-driven-development`, `api-and-interface-design`, `deprecation-and-migration` (agent-skills). De diagramscripts hebben alleen Node nodig.

## Werken met de agents

Vraag in de hoofdsessie bijvoorbeeld "analyseer dit project met Socrates en Atlas" of "werk deze wens uit tot eisen en ontwerp". De skill `regie` beschrijft de keten:

1. Socrates schrijft eisen en use cases; socrates-licht controleert; Atlas toetst (hoogstens twee rondes).
2. De hoofdsessie stelt de open vragen aan jou. Alle vragen van een document beantwoord = akkoord op dat document.
3. Atlas kiest de architectuur, maakt het technisch ontwerp en daarna slices, contract en implementatieplan; atlas-licht controleert vóór elke vragenronde.

Subagents kunnen tussendoor niets vragen. Daarom eindigt elke agent met een vast eindbericht (resultaat, bestanden, **open vragen** met advies en gevolg bij nee, verzoek aan de ander, status). De hoofdsessie stelt de vragen en hervat de agent met de antwoorden.

De keten stopt bij de werkpakketten. Taken, backlog en planning zitten niet in deze plugin.

## Projectregels gaan voor

De agents lezen eerst `CLAUDE.md`, `AGENTS.md`, `.claude/rules/` en `docs/README.md` van het project. Staat daar waar eisen en ontwerpen horen of hoe goedkeuring werkt, dan volgen ze het project. Anders de standaard: `docs/architecture/` (requirements, use cases, bedrijfsregels, modellen, STATUS.md, implementatieplannen), `docs/adr/` en `GLOSSARY.md`.

## Skills in deze plugin

- **Regie:** `regie` (voor de hoofdsessie).
- **Gedeeld:** `kort`, `overdracht`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken`.
- **Socrates:** `requirements-analysis`, `uml-use-cases`, `domain-analysis`, `requirements-validation`, `requirements-clarification`, `paginalijst-en-paginabrieven`, `bpmn-conventies`, `bpmn-organisatieanalyse`, `bpmn-procesmodellering`, `bpmn-rollen-en-skillmodel`, `bpmn-modelcontrole`, `bpmn-eindontwerp`.
- **Atlas:** `architect-architecture-choice`, `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`, `architect-use-case-review`, `architect-cms-configuratie`, `architect-componentontwerp`, `architect-api-contracts`, `architect-conventions`, `architect-clarification`, `architect-vertical-slices`, `architect-implementation-plan`, `ontwerppagina`.

## Herkomst

De agents en skills komen uit Paperclip (export van 2026-11-24 in [`export/paperclip/`](../../export/paperclip/)). Verschillen met de Paperclip-versie:

- Geen issues, kaarten of statussen: open vragen staan in het eindbericht en de hoofdsessie stelt ze.
- Geen orchestrator (Dr. Evil): de hoofdsessie regisseert met de skill `regie`; backlog en planning vallen erbuiten.
- De controle vóór het akkoord doet de lichte variant, gestart door de hoofdsessie (een subagent kan geen subagent starten).
- Eén model per agent in plaats van een model per skill; het lichtere werk gaat naar de lichte varianten.
- Interne procescodes zijn vervangen door de regel zelf; projectregels en -paden gaan voor de standaard.
- Skillnamen volgen de namen uit de instructies (`uml-use-cases`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-architecture-choice`).
