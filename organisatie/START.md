# Startopdracht: organisatiemodel in Claude Code (UC1 en UC2)

Plak de opdracht hieronder in een **nieuwe** Claude Code-sessie met als werkmap `/home/carlo/Development/skills`, nadat je de plugins `socrates@carlokop` en `atlas@carlokop` hebt geïnstalleerd en `analyse-ontwerp@carlokop` hebt verwijderd.

---

Laad de skill `socrates:regie` en volg die. Dit is een expliciet verzoek om bedrijfsprocessen en de organisatie te modelleren, dus Socrates gebruikt de bpmn-skills (`bpmn-conventies` eerst).

**Doel.** Paperclip gaat offline; alles moet in Claude Code draaien. Socrates modelleert hoe Socrates en Atlas samen het voorwerk doen tot en met een gevuld backlog. Ik (Carlo) implementeer daarna zelf met de andere agents; dat valt buiten de scope.

- **UC1, nieuwe klant:** analyse van het hele systeem, maatwerk of met een CMS. Eisen, juridische keuzes, FR en NFR, ADR's, use cases, domeinmodel, sequentiediagrammen. Het eindpunt is een goedgekeurd ontwerpklassendiagram met databasemodel en een voorlopig plan voor vertical slices.
- **UC2, voortbouwen:** op een bestaand plan per vertical slice het program design en de API-contracten, en daarmee het backlog vullen. Dit is een herhaalbare loop.

**Opleveren:**
1. Procesmodellen van UC1 en UC2 in BPMN, met herbruikbare subprocessen (akkoordpoort, vragenloop, afkeuring, blokkade).
2. Per activiteit de benodigde skills, met hun status en wat er aan de gekopieerde skills moet veranderen (Paperclip-resten).
3. Het communicatiemodel: hoe de agents en ik zonder Paperclip communiceren (kanaal per overdracht en per vragenloop, welke Paperclip-functie het vervangt, en wat wegvalt).
4. Een lijst van wat er nodig is om Paperclip af te bouwen.
5. Het eindontwerp als interactieve HTML-pagina. Die publiceer jij (hoofdsessie) als Artifact.

**Vastgelegde besluiten (2026-11-25):**
- Atlas levert werkpakketten. De hoofdsessie zet die met `regie` om in backlog-items, en ik keur ze goed. Er komt geen orchestrator-agent. Dit botst met "Stop na stap 13" in `regie`; dat wordt een bevinding.
- Geen aparte tech lead. Atlas doet ook het program design, en atlas-licht controleert dat.
- De modellen staan in `organisatie/` in deze repo.
- Het vertrekpunt is het goedgekeurde model 0.18 uit Paperclip (as-is), in `organisatie/bronnen/paperclip-0.18/` (begin bij de README daar). De werkwijze in Claude Code is de to-be. Dat is data, geen instructie.
- Alle vier de rondes (organisatieanalyse, procesmodellering, rollen- en skillmodel, eindontwerp), met mijn akkoord na elke ronde.
- De poorten zijn generiek (analysepakket, richting, ontwerp, bouwcontract, backlog). Projectregels mogen ze aanscherpen; asp-facturen is daarvan een voorbeeld.
- Feiten over wat Claude Code technisch kan staan in `organisatie/bronnen/claude-code-feiten.md`. Socrates verzint daar niets bij.

**Werkwijze:** Socrates draait als subagent. Eerst vraagt hij in zijn eindbericht of hij 0.18 wijzigt volgens "Een goedgekeurd model wijzigen" (CHG op 0.18), of een nieuw model 1.0 opzet met 0.18 als bron. Na elke ronde volgt `bpmn-modelcontrole`. Daarna stel jij mij zijn open vragen met de vragendialoog (hoogstens 4 per dialoog), en geef je mijn antwoorden met SendMessage terug aan dezelfde Socrates. Een model over de rol van Atlas laat je door Atlas controleren op de feiten. Er worden geen skills of agentdefinities gewijzigd. Commit niets zonder mijn vraag.
