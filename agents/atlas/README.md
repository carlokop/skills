# atlas

Claude Code-plugin met **Atlas** (systeemarchitect) en **atlas-licht**.

| Agent | Model | Doet |
|---|---|---|
| `atlas` | Opus 5.5, high | Toets op use cases en brieven, architectuurkeuze en profiel (P1/P2/P3), domeinmodel, sequenties, klassendiagram, database, ADR's, sliceplan, bouwcontract (OpenAPI), implementatieplan, conventiebestand, regelbestanden en kwaliteitslat, toets van de backlog-items |
| `atlas-licht` | Sonnet 5.5, high | Controle en nacontrole van het werk van Atlas (`ontwerp-controle`); onderzoek; vragen over het goedgekeurde ontwerp; sequentiediagrammen uit een goedgekeurd model |

Schrijft geen productiecode. De agents heten `atlas:atlas` en `atlas:atlas-licht`. Atlas toetst het werk van Socrates; installeer ook de plugin **socrates** (met de skill `regie`).

```sh
claude plugin marketplace add carlokop/skills
claude plugin install atlas@carlokop
```

Skills: gedeeld `kort`, `overdracht`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken` (ook in socrates); `architect-architecture-choice`, `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`, `architect-use-case-review`, `architect-cms-configuratie`, `architect-componentontwerp`, `architect-api-contracts`, `architect-conventions`, `regelbestanden-en-kwaliteitslat`, `architect-clarification`, `architect-vertical-slices`, `architect-implementation-plan`, `ontwerppagina`, `ontwerp-controle`. De diagramscripts hebben alleen Node nodig (de beeldcontrole ook het npm-pakket `sharp`, via `SHARP_PATH` of `node_modules` in de werkmap); algemene skills (`documentation-and-adrs`, `api-and-interface-design`, `constraint-driven-development`, `context-engineering`, enz.) moeten globaal geïnstalleerd zijn.

De agent en zijn skills zijn afkomstig uit een eerdere export (commit `3b3445f`). Geen issues of statussen: open vragen staan in het eindbericht en de hoofdsessie stelt ze. Eén model per agent; het lichtere werk gaat naar de lichte variant.
