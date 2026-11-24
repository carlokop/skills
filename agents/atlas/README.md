# atlas

Claude Code-plugin met **Atlas** (systeemarchitect) en **atlas-licht**.

| Agent | Model | Doet |
|---|---|---|
| `atlas` | Opus 5.5, high | Toets op use cases en brieven, architectuurkeuze en profiel (P1/P2/P3), domeinmodel, sequenties, klassendiagram, database, ADR's, bouwcontract (OpenAPI), slices, implementatieplan |
| `atlas-licht` | Sonnet 5.5, high | Controle van het werk van Atlas vóór het akkoord; onderzoek; vragen over het goedgekeurde ontwerp; sequentiediagrammen uit het model |

Schrijft geen productiecode. De agents heten `atlas:atlas` en `atlas:atlas-licht`. Atlas toetst het werk van Socrates; installeer ook de plugin **socrates** (met de skill `regie`).

```sh
claude plugin marketplace add carlokop/skills
claude plugin install atlas@carlokop
```

Skills: gedeeld `kort`, `overdracht`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken` (ook in socrates); `architect-architecture-choice`, `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`, `architect-use-case-review`, `architect-cms-configuratie`, `architect-componentontwerp`, `architect-api-contracts`, `architect-conventions`, `architect-clarification`, `architect-vertical-slices`, `architect-implementation-plan`, `ontwerppagina`. De diagramscripts hebben alleen Node nodig; algemene skills (`documentation-and-adrs`, `api-and-interface-design`, enz.) moeten globaal geïnstalleerd zijn.

De agent en zijn skills komen uit Paperclip (export van 2026-11-24; de ongewijzigde export staat in de git-geschiedenis, commit `3b3445f`). Geen issues of statussen: open vragen staan in het eindbericht en de hoofdsessie stelt ze. Eén model per agent; het lichtere werk gaat naar de lichte variant.
