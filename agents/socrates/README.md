# socrates

Claude Code-plugin met **Socrates** (business analist) en **socrates-licht**, plus de skill `regie` waarmee de hoofdsessie Socrates en Atlas samen laat werken.

| Agent | Model | Doet |
|---|---|---|
| `socrates` | Opus 5.5, high | Eisen (FR/NFR), use cases met acceptatiecriteria, bedrijfsregels, glossary, paginalijst en -brieven, wijzigingsverzoeken; BPMN alleen op verzoek |
| `socrates-licht` | Sonnet 5.5, high | Controle van het werk van Socrates vóór het akkoord; vragen over goedgekeurde eisen. Alleen lezen |

Schrijft geen code. De agents heten in een sessie `socrates:socrates` en `socrates:socrates-licht`. De keten van wens naar ontwerp werkt samen met de plugin **atlas**; installeer beide.

```sh
claude plugin marketplace add carlokop/skills
claude plugin install socrates@carlokop
```

Skills: `regie`, `backlog-regie`; gedeeld `kort`, `overdracht`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken` (ook in atlas); `requirements-analysis`, `uml-use-cases`, `domain-analysis`, `requirements-validation`, `requirements-clarification`, `paginalijst-en-paginabrieven`, `bpmn-conventies`, `bpmn-organisatieanalyse`, `bpmn-procesmodellering`, `bpmn-rollen-en-skillmodel`, `bpmn-modelcontrole`, `bpmn-eindontwerp`. Algemene skills (`grilling`, `domain-modeling`, `research`, `planning-and-task-breakdown`, `spec-driven-development`, enz.) moeten globaal geïnstalleerd zijn. Projectregels (`CLAUDE.md`, `AGENTS.md`, `docs/README.md`) gaan voor de standaardpaden.

De agent en zijn skills zijn afkomstig uit een eerdere export (2026-11-24; de ongewijzigde export staat in de git-geschiedenis, commit `3b3445f`). Open vragen staan in het eindbericht en de hoofdsessie stelt ze. Eén model per agent; het lichtere werk gaat naar de lichte variant.
