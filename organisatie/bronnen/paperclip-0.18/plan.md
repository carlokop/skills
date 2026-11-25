# Plan: procesmodel AI coding factory (opdracht 2026-10-27)

| | |
| --- | --- |
| Status | **Concept**, startplan voor de uitvoering. Overgenomen uit het plan op WEB-17 (revisie `22eeec8b`). Dit plan heeft geen eigen goedkeuring; de vier goedkeuringen (GK-1 t/m GK-4) vinden op dit issue plaats. |
| Opdracht | comment `a5a789fe` op WEB-17 (2026-10-27) |
| Antwoorden | vragenkaart `3e2dda70` (beantwoord door Carlo, 2026-10-27) |
| Uitvoering | dit issue (B-04) |
| Skills | `bpmn-conventies` → `bpmn-organisatieanalyse` → `bpmn-procesmodellering` → `bpmn-rollen-en-skillmodel` → `bpmn-eindontwerp`, elke stap met `bpmn-modelcontrole` |

## 0. Besluiten uit de blokkerende vragen (Besloten, Carlo, kaart `3e2dda70`)

| ID | Vraag | Besluit | Gevolg voor het model |
| --- | --- | --- | --- |
| B-01 | Sprint of flow? | **Flow blijft (V6).** | "Sprint 1" = de eerste vertical slice: het kleinste stuk dat van begin tot eind werkt. Geen sprints, wel het weekmoment. Rolanalyse en skills van Dr. Evil blijven ongewijzigd. |
| B-02 | Wat is "program design"? | **Ontwerp per slice; de tech lead neemt het implementatieplan over.** | Atlas houdt het globale ontwerp. De tech lead maakt binnen dat ontwerp: modules en componenten, interfaces, API-contracten en de opdeling in vertical slices. `architect-implementation-plan` verschuift van Atlas naar de tech lead (voorstel in de skills-analyse, Dr. Evil maakt het formele voorstel). Aangepast door TL-V6 en TL-V7: geen rol tech lead; de taken TL-01 t/m TL-09 horen bij Atlas; `architect-implementation-plan` blijft bij Atlas. |
| B-03 | Klant als deelnemer? | **Nee, al het contact loopt via Carlo.** | Geen pool voor de klant. De project owner is de enige mens in het model. |
| B-04 | Waar vastleggen? | **Op een nieuw, eigen issue.** | Register, procesbeschrijvingen en pagina als Paperclip-documenten en bijlage op dat issue. Niet op WEB-17. |
| B-05 | Hoe goedkeuren? | **Vier keer, volgens de werkwijze.** | GK-1 organisatieanalyse, GK-2 procesmodellen, GK-3 rollen- en skillmodel, GK-4 de pagina. Elke volgende stap begint pas na zichtbare goedkeuring van de vorige. |

## 1. Aanpak

Al gedaan op WEB-17: inventarisatie (§2, §3), de vijf blokkerende vragen (§0) en het aanmaken van dit issue.

1. Op dit issue, in vier rondes (B-05). Elke ronde: werk → `bpmn-modelcontrole` → document op het issue → goedkeuringskaart → wachten.
   - **Ronde 1, organisatieanalyse** (`bpmn-organisatieanalyse`): register met ROL, AGT, PRC, ASM, OPEN, FND, PRP; niveau 0 proceslandschap en scope; rollenregister (vijf rollen in 0.1; vier sinds TL-V7); kritische review (a) Carlo's workflow, (b) bevindingen en alternatieven met afweging, (c) aanbeveling. Bevindingen uit §3 zijn het startpunt. → GK-1
   - **Ronde 2, procesmodellen** (`bpmn-procesmodellering`): herbruikbare subprocessen (akkoord-poort project owner, vragenloop tussen agents, afkeuring met maximum aantal rondes en escalatie, blokkade); PRC voor UC1 nieuwe klant en UC2 backlog uitbreiden; Carlo's versie als basis, verbeteringen als apart gemarkeerde variant; eindpunt "Backlog gereed, overdracht naar implementatie"; Paperclip-mapping per stap met markering waar het niet netjes past. → GK-2
   - **Ronde 3, rollen- en skillmodel** (`bpmn-rollen-en-skillmodel`): CAP, SKL, GOV, RACI; matrix activiteit × rol × skill × status; specificaties van ontbrekende en gedeeltelijke skills (naam, doel, trigger, input, output, werkwijze, kwaliteitscriteria, tools/templates, afhankelijkheden, voorbeeld); de taken TL-01 t/m TL-09 als uitbreiding van het profiel van Atlas (TL-V7); gedeelde skills. → GK-3
   - **Ronde 4, eindontwerp** (`bpmn-eindontwerp`): één HTML-pagina met secties 1–10 uit de opdracht, inclusief aannames/voorstellen/open vragen en de uitbreidingsgids. Als bijlage en artifact op het issue. → GK-4
2. Na GK-3/GK-4: de taken TL-01 t/m TL-09 voor Atlas (TL-V7) en de skillwijzigingen gaat naar Dr. Evil, die het formele voorstel maakt (`escalation-management`). Socrates wijzigt geen agents of skills.

## Vaste eisen (uit de opdracht)

- BPMN-light; procesladder (niveau 0, niveau 1 per use case, herbruikbare subprocessen); een nieuwe use case of agent wijzigt bestaande diagrammen niet.
- Scope stopt bij het backlog. Geen testers, developers, marketeers als banen of stappen. Ontbrekende rollen vóór de DoD (designer, conventiebestand) alleen als voorstel in de kritische review.
- Stabiele ID's voor elke stap, rol, subproces en skill. Label alles als Besloten, Voorstel of Aanname.
- Geen verzonnen feiten over Paperclip of de agents; onbekend → open vraag.
- Nederlands, kort en visueel; detail in de secties, niet in de diagrammen.

## 2. Inventaris agents (feit, Paperclip-API, 2026-10-27)

| Agent | Titel | Rapporteert aan | Model | In scope |
| --- | --- | --- | --- | --- |
| Dr. Evil | Orchestrator & Scrum Master | — | Sonnet 5.5 medium | ja |
| Socrates | Business Analist | Dr. Evil | Opus 5.5 high | ja |
| Atlas | Architect | Dr. Evil | Opus 5.5 high | ja |
| Sentinel | Security- en codereviewer | Dr. Evil | — | nee (na backlog) |
| Tech lead | — | — | — | bestaat niet. Aangepast door TL-V6 en TL-V7: geen rol tech lead; de taken TL-01 t/m TL-09 horen bij Atlas; `architect-implementation-plan` blijft bij Atlas. |

Gekoppelde skills (naast `paperclip`, `complain`, `suggestion-box`):
- **Dr. Evil:** overdracht, para-memory-files, backlog-management, paperclip-converting-plans-to-tasks, agent-orchestration, quality-gates, weekmoment, delivery-management, escalation-management, requirements-orchestration, dependency-management.
- **Atlas:** paperclip-board, paperclip-converting-plans-to-tasks, paperclip-create-agent, para-memory-files, first-task, codebase-design, domain-modeling, improve-codebase-architecture, grilling, research, to-spec, to-tickets, architect-architecture-choice, architect-modeling, architect-database, architect-implementation-plan, uml-use-cases, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, overdracht.
- **Socrates:** requirements-analysis, domain-analysis, requirements-validation, requirements-clarification, overdracht, grilling, domain-modeling, uml-use-cases, de zes bpmn-skills.

## 3. Eerste bevindingen (nog uit te werken in de kritische review)

| # | Bevinding | Bron |
| --- | --- | --- |
| 1 | Use cases: Carlo's workflow legt ze bij de architect. De instructies van Socrates én Atlas leggen ze bij Socrates ("doe de use cases niet zelf"). `uml-use-cases` is aan beide gekoppeld. | AGENTS.md Atlas, Socrates |
| 2 | "Sprint 1" botst met V6 (flow zonder sprints, weekmoment). Opgelost: B-01. | `rolanalyse-orchestrator` §6 |
| 3 | Atlas doet volgens zijn instructies ook architectuurkeuze (ADR's, context/container) en databaseontwerp. Die staan niet in Carlo's lijst voor stap 3. | AGENTS.md Atlas |
| 4 | `architect-implementation-plan` (Atlas) overlapt met "program design" van de tech lead. Richting: B-02 (opgelost door TL-V6/TL-V7). | skilllijst |
| 5 | Atlas heeft `to-tickets` en `paperclip-converting-plans-to-tasks` gekoppeld; opdelen in taken is volgens OR-03 van Dr. Evil. | skilllijst, rolanalyse OR-03 |
| 6 | UC2 zonder akkoord van Carlo botst met "de gebruiker bepaalt de volgorde" en "start een fase pas na zichtbare goedkeuring". | AGENTS.md Dr. Evil |
| 7 | Dr. Evil is het enige loket (OR-01, V14). Carlo's UC1 laat de opdracht ook bij Socrates binnenkomen. Open punt S1/V15 in `voorstel-instructies`. | rolanalyse, voorstel-instructies |
| 8 | Een nieuwe agent (tech lead) loopt volgens Dr. Evil via een voorstel (`escalation-management`); Dr. Evil mag geen agents aanmaken. (vervalt door TL-V7: er komt geen tech-lead-agent) | AGENTS.md Dr. Evil |

