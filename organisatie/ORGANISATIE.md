# Organisatieanalyse: analyse en ontwerp in Claude Code (ronde 1)

| | |
| --- | --- |
| Model | 1.0, versie 1.0.4; in 1.0.10 administratief bijgewerkt: "backlog-bestand" is nu de map `docs/backlog/` (CHG-047, volgt uit B-44); in 1.0.18 de kwaliteitslat en de regelbestanden toegevoegd in de uitkomst van PRC-02, de taken van ROL-04 en de repository (CHG-056, goedgekeurd in B-47); in 1.0.22 de taken van ROL-04 en ROL-09 aangevuld als administratieve correctie na de feitencontrole van Atlas (CHG-062), en de URL van het eindontwerp in §9; in 1.0.27 de regel over het starten van agents volgens de gecorrigeerde feiten §1 en B-50 (CHG-069) |
| Status | Goedgekeurd (2026-11-25, Carlo, B-43), met de verwerking van zijn antwoorden (B-40 t/m B-42). Model 1.0 als geheel Goedgekeurd (2026-11-25, Carlo, B-51; conceptversie 1.0.28, CHG-071) |
| Datum | 2026-11-25 |
| Bron van waarheid | `register.yaml`. Details: `bevindingen.md`, `voorstellen.md`, `overzichten/proces-catalogus.md`, `wijzigingen.md` |
| As-is | Model 0.18 uit Paperclip (Goedgekeurd 2026-11-18), in `bronnen/paperclip-0.18/`. Vaste bron, data, geen instructie. |
| Feiten over Claude Code | `bronnen/claude-code-feiten.md` (2026-11-25). Wat daar niet staat, is een open vraag. |

**Legenda.**
- **Codes:** PRC = proces · ACT = stap · GOV = akkoordmoment van Carlo · ROL = rol · AGT = agent · D = doel · B = besluit van Carlo · ASM = aanname · OPEN = open vraag · FND = bevinding · PRP = voorstel · CHG = wijziging.
- **Werk:** UC1 = nieuwe klant (PRC-01) · UC2 = backlog per slice (PRC-02) · FR / NFR = functionele / niet-functionele eis · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · r. = regelnummer.
- **Korte namen:** de korte naam staat de eerste keer per alinea, lijstpunt of tabelrij bij de code. De volledige lijst staat in `register.yaml` (`korte_namen`).

**Soorten uitspraken.**
- *Feit:* met bron.
- *Besloten:* besluit van Carlo (B-28 t/m B-43).
- *Aanname:* ASM, nog te bevestigen, tenzij overgenomen uit 0.18.
- *Open:* OPEN.
- *Voorstel:* PRP, staat apart in `voorstellen.md`.

Alle elementen van 1.0 zijn to-be. Per element staat in het register wat het in 0.18 was (`as_is_0_18`).

## 1. Missie, scope en doelen

**Missie** (afgeleid uit de opdracht en 0.18 D3): voor klanten van Carlo websites en applicaties analyseren en ontwerpen tot een bouwrijp backlog. AI-agents doen het voorwerk; Carlo is de enige mens die prioriteert en beslist.

**Scope** (B-29 – scope tot gevuld backlog): van de opdracht van ROL-01 (project owner, Carlo) tot een goedgekeurd backlog per slice in de klantrepo. Bouwen, testen, reviewen en mergen doet Carlo zelf met andere agents; dat valt buiten dit model. Zie §7 voor wat daardoor buiten scope staat.

**Producten en diensten** (wat de keten oplevert):
- **Het analysepakket:** requirements (FR, NFR en juridische keuzes, zie ASM-81 – juridische keuzes in de analyse), visie met projecttype, use cases met acceptatiecriteria, bedrijfsregels, glossary, en de paginalijst met paginabrieven.
- **De richting:** architectuurkeuze met profiel en ADR's, de eerste ontwerpen van Carlo, en de paginabrieven die Socrates op die ontwerpen afstemt (ASM-86 – afgestemde brieven in de richting).
- **Het technisch ontwerp volgens het profiel.** Bij maatwerk (P3) is dat het ontwerpklassendiagram met databasemodel; domeinmodel en sequentiediagrammen maakt Atlas intern.
- **Het voorlopige sliceplan.**
- **Per slice:**
  - het program design: het ontwerp per slice en het implementatieplan met werkpakketten;
  - het API-contract (bouwcontract);
  - in slice 1 het conventiebestand, de kwaliteitslat en de regelbestanden (CHG-056, B-47);
  - de backlog-items in de klantrepo.

**Doelen**

| ID | Doel | Gedekt door | Was in 0.18 |
| --- | --- | --- | --- |
| D1 | Nieuwe klant tot ontwerp: van opdracht tot goedgekeurd ontwerp en voorlopig sliceplan | PRC-01 (nieuwe klant tot ontwerp en sliceplan) | van opdracht tot eerste backlog |
| D2 | Backlog per slice: backlog vullen per slice van het plan, herhaalbaar, ook voor een nieuwe wens | PRC-02 (backlog vullen per slice), PRC-07 (ritme: weekmoment en dagstart) | backlog aanvullen met de volgende slice |
| D3 | Tijd van Carlo beschermen: hij is de enige mens die prioriteert en goedkeurt | PRC-03 (akkoord-poort van de project owner), PRC-05 (afkeuring en herziening), PRC-07 | gelijk |
| D5 | Alles in Claude Code, zodat Paperclip kan worden afgebouwd | PRC-03 t/m PRC-08; communicatiemodel en afbouwlijst in ronde 3 | nieuw (B-28) |

D4 (features bouwen tot merge) valt buiten de scope (B-29).

**Mate van automatisering.** De agents doen al het analyse- en ontwerpwerk, en de hoofdsessie doet de regie. Het ritme (PRC-07) start de volgende slice zonder dat Carlo erom vraagt (B-33 – vast ritme met wekmechanisme). Dat gebeurt op twee momenten:
- het weekmoment, op maandag om 12:00 (B-40 – weekmoment maandag 12:00);
- de dagstart, zodra Carlo de sessie opent, bij 10 of minder open items (B-41 – dagstart alleen bij openen, B-42 – drempel 10 open items).

**Onder menselijke controle** (Carlo, ROL-01):
- akkoord op elke poort:
  - GOV-10 (akkoord analysepakket);
  - GOV-15 (akkoord richting: architectuur en ontwerpen, met de afgestemde brieven);
  - GOV-11 (akkoord technisch ontwerp volgens profiel);
  - GOV-17 (akkoord voorlopig sliceplan);
  - GOV-06 (akkoord bouwcontract per slice);
  - GOV-18 (akkoord backlog per slice);
- de keuze van de volgende slice of wens als het plan die niet bepaalt (GOV-07);
- escalaties (GOV-08), wijzigingsverzoeken en productkeuzes (GOV-12);
- de paginaontwerpen (ASM-28 – Carlo is de ontwerper) en het contact met de klant;
- een backlog-item op klaar zetten na de merge (ASM-89 – wanneer een backlog-item open is);
- elke wijziging aan agents en skills (PRC-08).

Projectregels mogen de poorten aanscherpen (B-32), zoals bij asp-facturen.

## 2. Besluiten van Carlo voor 1.0

| ID | Besluit |
| --- | --- |
| B-28 | Paperclip gaat offline. Er komt een nieuw model 1.0 met 0.18 als vaste bron. Nummers uit 0.18 blijven. |
| B-29 | De scope eindigt bij het gevulde backlog. |
| B-30 | Atlas levert werkpakketten; de hoofdsessie maakt er met `regie` backlog-items van; Carlo keurt ze goed. Er komt geen orchestrator-agent. |
| B-31 | Er komt geen tech lead. Atlas doet het program design (detailontwerp, implementatieplan met werkpakketten en API-contract), en atlas-licht controleert het. |
| B-32 | De poorten zijn generiek: analysepakket, richting, ontwerp, bouwcontract en backlog. Het sliceplan krijgt een eigen poort. |
| B-33 | Er komt een vast ritme met een wekmechanisme (tegen het advies in). |
| B-34 | Socrates-licht en Atlas-licht krijgen eigen lanes en controleren vóór elk akkoord. |
| B-35 | UC1 stopt bij het ontwerp; slice 1 loopt via UC2. |
| B-36 | UC2 heeft een optionele begintak voor een nieuwe wens. |
| B-37 | Het backlog is een bestand in de klantrepo. |
| B-38 | Alle overdracht loopt via de hoofdsessie. Agents starten elkaar niet, en er komen geen agent teams. |
| B-39 | Er zijn vier rondes met akkoord. Feiten komen alleen uit de feitenlijst. Skills en agentdefinities worden niet gewijzigd. |
| B-40 | Het weekmoment is op maandag om 12:00, met een cron-taak in de hoofdsessie (tegen het advies in). |
| B-41 | De dagstart heeft geen vaste tijd en draait alleen bij het openen of hervatten van de sessie (tegen het advies in). |
| B-42 | De dagstart start de volgende slice bij 10 of minder open backlog-items (tegen het advies in). |
| B-43 | Ronde 1 is goedgekeurd met de antwoorden op alle 21 vragen. |

Bron en datum per besluit: `register.yaml` (`besluiten`).

## 3. Rollen en agents

| Rol | Verantwoordelijkheid in 1.0 (kort) | Agent in 1.0 | In 0.18 |
| --- | --- | --- | --- |
| ROL-01 project owner (Carlo) | Opdracht, antwoorden, alle akkoorden en besluiten, ontwerpen, backlog-items op klaar, klantcontact | mens | gelijk, maar via kaarten op issues |
| ROL-02 regie | Agents starten, laten controleren, vragen aan Carlo stellen en antwoorden teruggeven, volgorde en poorten bewaken, backlog-items maken, ritme | AGT-08 hoofdsessie (met de skill `regie`) | "orchestrator en scrum master", door Dr. Evil (AGT-01) in Paperclip |
| ROL-03 business analist | Eisen, visie, use cases, bedrijfsregels, bedrijfstermen, paginalijst, brieven en afstemming op het ontwerp, analyse van een wens | AGT-02 agent Socrates | gelijk, plus project aanmaken en toets-issues |
| ROL-04 systeemarchitect | Toets, architectuur, technisch ontwerp, opdeling in slices, per slice het program design en het contract, één conventiebestand, in slice 1 ook de kwaliteitslat en de regelbestanden (CHG-056) en die later bijwerken (ASM-120), toets van de backlog-items, een ADR bij elke wijziging van het globale ontwerp, STATUS.md, vragen over het ontwerp beantwoorden, ook van de hoofdsessie (ASM-109), verzoek aan Socrates bij een technisch problematische eis; maakt geen backlog-items | AGT-03 agent Atlas | gelijk; slice 1 hoorde bij UC1 |
| ROL-09 controleur (tweede lezer) | Alleen de controle vóór het akkoord. Bij AGT-09 volgt alleen lezen uit de tools in zijn definitie; bij AGT-10 is het een afspraak, omdat zijn tools schrijven toestaan. Controleert nooit eigen werk (ASM-88 – Atlas genereert diagrammen in de keten). Bij GOV-18 is Atlas (ROL-04) de tweede lezer, niet ROL-09 (ASM-83). | AGT-09 Socrates-licht (werk van Socrates), AGT-10 Atlas-licht (werk van Atlas) | bestond niet |

Het overige werk van de lichte varianten valt onder de rol van de maker (ASM-87 – één rol voor de controleurs):
- **AGT-09 Socrates-licht, voor ROL-03:** vragen beantwoorden over de bedoeling van goedgekeurde eisen.
- **AGT-10 Atlas-licht, voor ROL-04:**
  - onderzoek, met een onderzoeksverslag als de aanroeper erom vraagt;
  - vragen over de betekenis van het goedgekeurde ontwerp (niet over de bedoeling van eisen);
  - sequentiediagrammen genereren uit een al goedgekeurd model.

**Agents in Claude Code** (feit: de definities bestaan in deze repo).

| Agent | Naam in Claude Code | Model en tools | Bron |
| --- | --- | --- | --- |
| AGT-02 agent Socrates | `socrates:socrates` | opus, high | `agents/socrates/agents/socrates.md` |
| AGT-03 agent Atlas | `atlas:atlas` | opus, high | `agents/atlas/agents/atlas.md` |
| AGT-08 hoofdsessie | het hoofdgesprek met `socrates:regie` | niet vastgelegd | `agents/socrates/skills/regie/SKILL.md` |
| AGT-09 Socrates-licht | `socrates:socrates-licht` | sonnet, high; Read, Grep, Glob, Skill | `agents/socrates/agents/socrates-licht.md` |
| AGT-10 Atlas-licht | `atlas:atlas-licht` | sonnet, high; ook Write, Edit, Bash | `agents/atlas/agents/atlas-licht.md` |

- **Dr. Evil (AGT-01) vervalt** (B-30). Zijn taken die blijven, gaan naar de hoofdsessie. Wat wegvalt (project aanmaken, routines in Paperclip, epics en taken als issues, overdracht aan Carlo), staat in de afbouwlijst van ronde 3.
- **Neo (AGT-06), Trace (AGT-07) en Sentinel (AGT-05)** bestaan als plugins (`agents/neo/`, `agents/trace/`, `agents/sentinel/`), maar vallen buiten de scope (B-29).
- **Feit:** de definities van Socrates en Atlas zeggen "je kunt geen andere agents starten". Technisch kan een subagent wel subagents starten, maar bij Socrates, Atlas en hun lichte varianten is dat afgedwongen: `Agent` staat niet in hun `tools` (feiten §1, gecorrigeerd op 2026-11-25). Die keuze is B-38 (overdracht via de hoofdsessie), bevestigd in B-50: Socrates en Atlas praten met elkaar in één vaste sessie, waarin de hoofdsessie elk bericht letterlijk doorgeeft.
- **Feit:** vragen aan Carlo kunnen alleen via de hoofdsessie, want AskUserQuestion werkt niet in een subagent (feiten §1).
- **Niet vastgesteld:** of de skills in de praktijk werken (OPEN-11 – proefrun van de skills). De stappen blijven to-be tot ze in een echt project hebben gedraaid (ASM-61 – processtappen blijven to-be tot ze draaien).

## 4. Systemen en externe afhankelijkheden

| Systeem | Gebruik in 1.0 | In 0.18 |
| --- | --- | --- |
| Claude Code | Hoofdsessie, subagents, hervatten met SendMessage, vragen aan Carlo (alleen in de hoofdsessie), cron en `/loop`, hooks, plugins | alleen voor de bouw buiten Paperclip |
| Plugins socrates en atlas | Agentdefinities en skills; `regie` zit in de plugin socrates | Paperclip-agents met gekoppelde skills |
| Repository van het klantproject | Alle documenten van de keten, `STATUS.md`, `contextverslag.md`, het conventiebestand, `CONSTRAINTS.md`, `CLAUDE.md`, `AGENTS.md` (CHG-056) en het backlog in de map `docs/backlog/` (B-37; plek en vorm: B-44, OPEN-34 – plek en vorm backlog) | documenten in de repo én op issues; backlog in Paperclip |
| Claude Design | Ontwerpen van Carlo; de agents werken met de export (plek: OPEN-35 – plek van de ontwerp-export) | export op het issue |
| Paperclip | Niet meer gebruikt; wordt afgebouwd (D5) | issues, kaarten, blockers, routines |

**Grenzen uit de feiten** (§2, §4, §5 en afleidingen):
- `/loop` draait alleen zolang de sessie open is. Een loop in eigen tempo komt bij `--resume` niet terug.
- Een cron-taak vuurt alleen als Claude inactief is en de sessie open is. Hij haalt niets in en wordt bij `--resume` hersteld. Of een herhalende cron-taak verloopt, staat er niet (OPEN-38 – verloopt een cron-taak?).
- Een geplande taak in de cloud draait op een verse clone, zonder lokale bestanden.
- Transcripten van subagents worden na 30 dagen verwijderd. De bewaartermijn van het transcript van de hoofdsessie staat er niet (OPEN-39 – bewaartermijn transcript hoofdsessie).
- Een gedeelde takenlijst over sessies heen is niet gevonden.
- Een goedkeuringskaart bestaat niet als object.

## 5. Overdrachten

Alle overdrachten lopen via de hoofdsessie (B-38). Ronde 3 legt per overdracht het kanaal, de vervangen Paperclip-functie en wat wegvalt vast (communicatiemodel). Hier staat alleen wie wat aan wie overdraagt.

| Van | Naar | Wat | In 0.18 |
| --- | --- | --- | --- |
| ROL-01 project owner | AGT-08 hoofdsessie | opdracht, wens, verzoek om de volgende slice | issue aan Dr. Evil of Socrates |
| AGT-08 hoofdsessie | AGT-02 agent Socrates, AGT-03 agent Atlas | opdracht met doel, wat goedgekeurd is (met datum), documenten en ID's | toewijzing van een issue |
| AGT-02 agent Socrates, AGT-03 agent Atlas | AGT-08 hoofdsessie | eindbericht: resultaat, bestanden, open vragen, verzoek aan de ander, status | comment en status op het issue |
| AGT-08 hoofdsessie | AGT-09 Socrates-licht, AGT-10 Atlas-licht | controle vóór het akkoord | bestond niet (B-23: subagent van de maker) |
| AGT-09 Socrates-licht, AGT-10 Atlas-licht | AGT-08 hoofdsessie, daarna de maker | bevindingen, tot "volledig gecontroleerd" | — |
| AGT-08 hoofdsessie | ROL-01 project owner | open vragen (hoogstens 4 per dialoog), escalaties, blokkades, wat op hem wacht | kaart op het issue; herinnering elke werkdag 09:00 |
| ROL-01 project owner | AGT-08 hoofdsessie, daarna de maker | antwoorden letterlijk, met datum; akkoord expliciet gemeld | antwoord op de kaart |
| AGT-02 agent Socrates | AGT-03 agent Atlas (via AGT-08) | toets van use cases en brieven | toets-issue |
| AGT-03 agent Atlas | AGT-02 agent Socrates (via AGT-08) | vragen over de bedoeling van eisen; verzoek bij een technisch problematische eis | vraag-issue |
| AGT-03 agent Atlas | AGT-08 hoofdsessie | werkpakketten per slice | werkpakketten aan Dr. Evil |
| AGT-08 hoofdsessie | AGT-03 agent Atlas | backlog-items ter toetsing (ASM-83 – Atlas toetst backlog-items) | taken ter toetsing |
| AGT-08 hoofdsessie | klantrepo | backlog-items als bestanden in `docs/backlog/` (B-37, B-44) | epics en taken in Paperclip |
| ROL-01 project owner | klantrepo | export van design systeem en ontwerpen (OPEN-35 – plek van de ontwerp-export); backlog-item op klaar (ASM-89) | export op het issue; taak op done |

## 6. Processen

Zie `overzichten/proces-catalogus.md`. In het kort:
- **PRC-01 nieuwe klant tot ontwerp en sliceplan** (UC1). Eindigt na GOV-11 (akkoord technisch ontwerp volgens profiel) en GOV-17 (akkoord voorlopig sliceplan).
- **PRC-02 backlog vullen per slice** (UC2). Herhaalbaar, met een optionele begintak voor een wens. Eindigt na GOV-18 (akkoord backlog per slice).
- **Herbruikbare subprocessen:**
  - PRC-03 (akkoord-poort van de project owner);
  - PRC-04 (vragenloop en grill-sessie tussen agents);
  - PRC-05 (afkeuring en herziening);
  - PRC-06 (blokkade afhandelen).
- **Sturende processen:**
  - PRC-07 (ritme: weekmoment en dagstart) start PRC-02. Het wordt in ronde 2 uitgewerkt.
  - PRC-08 (organisatie aanpassen) blijft context. De afbouw van Paperclip loopt via dit proces.

Activiteiten, beslissingen en diagrammen volgen in ronde 2. Aannames en besluiten uit 0.18 op stapniveau neem ik daar per stap over of laat ik vallen, met reden.

## 7. Wat uit 0.18 niet terugkomt

- **Dr. Evil (AGT-01)** en alles wat alleen in Paperclip bestond: project aanmaken, kaarten, toets-issues, blockers en routines in Paperclip. Daarmee vervallen ook OPEN-15 (mogen agents een project aanmaken) en OPEN-29 (comment wekt Dr. Evil?).
- **Losse akkoorden (ASM-82 – losse akkoorden in generieke poorten, bevestigd in B-43):** GOV-01 (requirements en bedrijfsregels) en GOV-02 (use cases en paginabrieven) gaan op in het analysepakket, GOV-09 (architectuurkeuze en profiel) in de richting en GOV-05 (klassendiagram en databaseontwerp) in het technisch ontwerp.
- **GOV-14 (paginaontwerp; ASM-86 – afgestemde brieven in de richting, bevestigd in B-43):** Carlo keurt zijn eigen ontwerp niet apart goed. De brieven die op zijn ontwerp zijn afgestemd, gaan mee in GOV-15. In 0.18 beoordeelde hij die brieven bij GOV-15 en GOV-14 (0.18 ASM-28).
- **Alles na het backlog** (B-29): PRC-09 (uitvoeringsloop), PRC-10 (feature overdragen), D4 (features bouwen tot merge) en GOV-16 (merge van de feature).

## 8. Bevindingen, voorstellen, aannames en open vragen

- **Bevindingen:** `bevindingen.md`. Overgenomen uit 0.18: FND-005, FND-013, FND-018, FND-022, FND-033 en FND-044. Nieuw: FND-088 t/m FND-097.
- **Voorstellen:** `voorstellen.md`, PRP-072 t/m PRP-079. PRP-075, PRP-076 en PRP-078 zitten in de kern al in de vragen. Advies voor de rest: na ronde 3 in één keer voorleggen.
- **Aannames:** `register.yaml`. ASM-28, ASM-33 en ASM-61 zijn overgenomen uit 0.18. ASM-79 t/m ASM-89 zijn bevestigd in B-43; ASM-84 en ASM-89 zoals gewijzigd door B-40 t/m B-42.
- **Open vragen:** `register.yaml`. OPEN-11, OPEN-13, OPEN-24 en OPEN-25 zijn overgenomen uit 0.18. OPEN-31 t/m OPEN-39 zijn nieuw.
- **Mee naar ronde 3:** `architect-implementation-plan` noemt nog taken (r.3, r.149-150). Het agentprofiel van Atlas uit 0.18 is niet tegen 1.0 gecontroleerd (`register.yaml` meta).

## 9. Rondes (afgerond)

Alle vier rondes zijn Goedgekeurd (2026-11-25, Carlo): ronde 1 (B-43), ronde 2 (B-44, B-45), ronde 3 (B-46 t/m B-48), ronde 4 (B-49 t/m B-51). Daarmee geldt model 1.0 (B-51).

- **Ronde 2 (procesmodellering):** stappen, beslissingen en diagrammen van PRC-01 t/m PRC-07, met de herbruikbare subprocessen. Daarin ook de plek van het backlog (nu de map `docs/backlog/`, B-44) en van de ontwerp-export (OPEN-34, OPEN-35).
- **Ronde 3 (rollen- en skillmodel):** skills per stap met hun status, de Paperclip-resten in de skills, het communicatiemodel en de afbouwlijst van Paperclip (plek: vraag 20 in `controle/2026-11-25-ronde-1-vragen.md`).
- **Ronde 4 (eindontwerp):** de interactieve HTML-pagina, `eindontwerp.html`, gepubliceerd als Artifact: https://claude.ai/artifact/ANUAhKozbFvzZaToJB4dvj (door de hoofdsessie, 2026-11-25; artifact-versie 8 is de goedgekeurde weergave; bij een nieuwe versie opnieuw naar dezelfde URL).

## 10. Wat nu volgt

Uitvoering via PRC-08 (organisatie aanpassen), in de volgorde van `afbouwlijst-paperclip.md` §E. In dit traject is niets aan agents of skills veranderd (B-39).

1. **A1, A2: de goedgekeurde voorstellen doorvoeren** (PRP-072 t/m PRP-085, `voorstellen.md`). Eerst de nieuwe skill `backlog-regie` (PRP-077) en de uitbreiding van `regie` (PRP-072, PRP-081). Daarna de overige: PRP-073 en PRP-074 (controle door de lichte varianten, nieuwe skill `ontwerp-controle`), PRP-075 en PRP-076 (stand en wekmechanisme), PRP-078 (juridische keuzes), PRP-079, PRP-080 en PRP-082 (skills van Atlas), PRP-083 (gedeelde skills in twee kopieën, samen bijwerken), PRP-084 (kwaliteitslat en regelbestanden), PRP-085 (vaste sessie Socrates–Atlas, alleen deel B). C3 (Paperclip-resten in de plugins) kan hierin mee.
2. **A3, A4: open werk uit Paperclip overzetten en bewaren**, parallel met A2. Vraagt eerst antwoord op OPEN-42 (welke projecten open werk hebben) en OPEN-43 (kan Paperclip exporteren).
3. **A5: één doorloop van PRC-01 of PRC-02 in Claude Code** met de aangepaste skills (ASM-108). Mislukt die, dan blijft Paperclip aan tot de oorzaak is opgelost.
4. **B1 t/m B4: Paperclip uitzetten** (alleen Carlo): routines (OPEN-44), agents, projecten, toegang en sleutels.
5. **C1 t/m C4: opruimen in de repo**: de Paperclip-skills in `skills/` (na `backlog-regie`), de bouwskills vallen buiten dit model, `README.md` r.19.

**Open punten die nog een besluit of proef vragen:**
- **Bijvangst van Atlas bij PRP-082:** `uml-domain-modelling` r.72 laat een traceertabel aanvullen in `docs/architecture/use-cases.md`, een document van Socrates. Dat botst met de grens tussen hun documenten en vraagt een eigen besluit (gecontroleerd voorstel) voordat PRP-082 wordt doorgevoerd.
- **Proefrun (A5):** OPEN-11 (werken de skills zoals beschreven) en OPEN-46 (volstaat de instructie voor het melden van een blokkade).
- **Uit te zoeken vóór of tijdens de proefrun:** OPEN-33 (skills over plugins heen), OPEN-45 (hoe `regie` in de hoofdsessie komt), en voor het weekmoment OPEN-31, OPEN-38, OPEN-40 en OPEN-41 (cron).
- **Alleen van belang als agents elkaar ooit zelf gaan starten:** OPEN-49 t/m OPEN-53 (niet nodig voor model 1.0, B-50).
