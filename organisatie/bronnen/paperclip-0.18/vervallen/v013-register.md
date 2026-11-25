> **Vervallen** – geldend is `register` r24. Dit is een archiefkopie; niet lezen of gebruiken.

# Register organisatiemodel AI coding factory

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `226c7ce7`)**, alle 11 onderdelen van de kaart goedgekeurd: CHG-023 (OpenAPI voor het bouwcontract), CHG-024 (codes met een korte naam), PRP-044 (korte namen in de conventies), de aannames ASM-49 t/m ASM-55 en de weergaven; besluit **B-19** (model 0.13 goedgekeurd). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register`. Vóór de goedkeuring: **Concept, ter goedkeuring** (versie 0.13, 2026-10-31): CHG-023 OpenAPI voor het bouwcontract (besluit **B-17**) en CHG-024 codes met een korte naam (besluit **B-18**), allebei uit je antwoorden op de kaart `42b39ff5`. Begin bij `v013-voorstel`. 0.13 bouwt voort op model 0.12. **Tot je dit goedkeurt, geldt 0.12**: Goedgekeurd (2026-10-31, Carlo, kaart `2ddaa565`), revisie 19 van het document `register`. |
| Versie | 0.4 (2026-10-28): CHG-002 feitencheck, CHG-003 besluiten TL-V1 t/m TL-V5, CHG-004 procesmodellen (ronde 2), CHG-005 besluiten B-06 en B-07 (kaart `1f7ca238`), CHG-006 besluit TL-V6. 0.5 (2026-10-28): CHG-007 besluit TL-V7, geen rol tech lead. 0.6 (2026-10-28): CHG-008 ronde 3, rollen- en skillmodel. 0.7 (2026-10-28): CHG-009 feitencheck ronde 3. 0.8 (2026-10-29): CHG-011 keuze uit de voorstellen (B-08). 0.9 (2026-10-30): CHG-013 moment van de vraag bij GOV-07 (B-09). **0.10 (2026-10-30, Goedgekeurd, B-12): CHG-015 ontwerp-eerst en architectuurprofielen (B-10); CHG-016 skills bij naam in plaats van nummer (B-11); nieuwe en gewijzigde elementen hebben het veld `nieuw_in: "0.10"` of `wijziging_0_10`.** Zie `wijzigingen` en `v010-voorstel`. **0.11 (2026-10-30, Goedgekeurd, B-14): CHG-019 antwoorden op OPEN-03, 04, 05, 09, 10 en 14 (B-13); CHG-018 herstel van de gaten in register 0.10 (lijst `register-gaten-0-10`, kaart `a16387c4`): teksten, velden, labels en skillkoppelingen, de processen zelf veranderen niet; nieuwe en gewijzigde elementen hebben het veld `nieuw_in: "0.11"` of `wijziging_0_11` (met "CHG-018" of "CHG-019" erin).** Zie `v011-voorstel`. **0.12 (2026-10-31, Goedgekeurd, kaart `2ddaa565`): CHG-022 grill-sessies (B-15, B-16): 7 grill-momenten GS1–GS4, GS9–GS11, plus GS14 alleen als architectuur of profiel verandert (sectie `grillmomenten`), PRC-04 wordt vragenloop én grill-sessie (ACT-04.55, ACT-04.56, G-04.52 nieuw), telling zonder voortgang, contextverslag; CHG-021 herstel van de gaten in model 0.11; nieuwe en gewijzigde elementen hebben het veld `nieuw_in: "0.12"` of `wijziging_0_12`.** **0.13 (2026-10-31, Concept): CHG-023 OpenAPI voor het bouwcontract: het OpenAPI-bestand is de bron, de leesbare versie wordt eruit gemaakt, bij P1 alleen waar echt een API is (B-17); CHG-024 codes met een korte naam (B-18): sectie `korte_namen` en de legenda hieronder; nieuwe en gewijzigde elementen hebben het veld `nieuw_in: "0.13"` of `wijziging_0_13`.** |
| Goedgekeurde versie | **0.12, Goedgekeurd (2026-10-31, Carlo, kaart `2ddaa565`)**, revisie 19 van het document `register`. 0.13 is Concept. Eerder: 0.11, Goedgekeurd (2026-10-30, Carlo, kaart `fa26d50e`), revisie 18; 0.10, Goedgekeurd (2026-10-30, Carlo, kaart `f261b9ac`), revisie 17; 0.9, Goedgekeurd (2026-10-30, Carlo, GK-4, kaart `4d0845d3`), revisie 16; 0.8, Goedgekeurd (2026-10-29, Carlo, kaart `66da5f92`), revisie 13; 0.7, Goedgekeurd (2026-10-29, Carlo, GK-3, kaart `5491a09b`), revisie 11; 0.5, Goedgekeurd (2026-10-28, Carlo, GK-2, kaart `eb913512`), revisie 8; 0.1, Goedgekeurd (2026-10-27, Carlo, GK-1, kaart `553e51b3`), revisie 1. |
| Bron van waarheid | dit register (`bpmn-conventies`). Alle andere documenten op WEB-19 zijn weergaven. |
| Inhoud | ronde 1: rollen, agents, processen, aannames, open vragen. Ronde 2: activiteiten, beslissingen en goedkeuringsmomenten. Ronde 3 (0.6): capabilities, skills, `koppelingen` (RACI, capabilities en skills per activiteit) en de volledige goedkeuringsmomenten. Bevindingen en voorstellen: documenten `bevindingen` en `voorstellen`. Overzichten: `capabilities-en-skills`, `agent-skillmatrix`, `activiteit-skillmatrix`, `verantwoordelijkheden`. |

Labels: `besloten` = uit de opdracht van Carlo, B-01 t/m B-18 of TL-V1 t/m TL-V7; `feit` = huidige situatie met bron; `voorstel`, `aanname`, `open`. `situatie`: `as-is` (bestaat nu) of `to-be` (gewenst).

## Wat de codes betekenen (B-18)

Elke code blijft, want agents, de reviewer en de tester verwijzen ermee. In alles wat jij leest staat er een korte naam bij, bijvoorbeeld GOV-06 (akkoord bouwcontract per slice). De korte naam van elke code staat in de sectie `korte_namen` van dit register en in het document `v013-codes-en-namen` (besluit B-18, CHG-024).

| Voorvoegsel | Betekenis | Voorbeeld |
| --- | --- | --- |
| PRC | proces of subproces | PRC-01 (nieuwe klant: opdracht tot eerste backlog) |
| ACT | stap in een proces; het nummer zegt niets over de volgorde | ACT-01.17 (bouwcontract van slice 1 opstellen) |
| G | beslispunt in een proces | G-02.8 (loopt er al een uitbreiding?) |
| GOV | akkoordmoment van jou | GOV-06 (akkoord bouwcontract per slice) |
| GS | grill-moment | GS1 (grill-sessie bij de analyse) |
| ROL / AGT | rol / agent | ROL-01 (project owner: jij), ROL-04 (systeemarchitect: Atlas) |
| CAP | capability: iets wat de organisatie moet kunnen | CAP-11 (bouwcontract ontwerpen) |
| B / TL-V | een besluit van jou / jouw besluit over de tech lead | B-17 (OpenAPI voor het bouwcontract), TL-V7 (geen rol tech lead) |
| TL | tech-leadtaak van Atlas | TL-04 (bouwcontract per slice opstellen) |
| PRP | voorstel | PRP-032 (wie ontwerpt pagina's en waarin) |
| FND | bevinding: iets wat ik vond | |
| ASM | aanname: iets wat ik heb ingevuld | |
| OPEN | open vraag | |
| CHG | wijziging aan het model | |
| P1 / P2 / P3 | architectuurprofiel | CMS / component-app / maatwerk |
| M | plek waar Paperclip niet netjes past | |
| K | punt uit de modelcontrole | |
| UC / AC / BR / FR | use case / acceptatiecriterium / bedrijfsregel / functionele eis, uit de requirements van een klantproject | |
| Lokale codes | A-1, B-2, C-5 enz.: een gat uit een lijst `register-gaten-…` (groep A, B of C), niet te verwarren met besluit B-02; V1 t/m V5: vragen op een vragenkaart; D1 t/m D3: doelen; GK-1 t/m GK-4: de vier goedkeuringsrondes | |

## Skills in het kort (B-11)

Skills hebben geen nummer meer; ze staan overal bij hun naam (besluit B-11, CHG-016). Een naam met *werknaam* is een voorstel: die skill bestaat nog niet. CHG-018 (0.11) past drie omschrijvingen aan (`architect-api-contracts`, `architect-cms-configuratie`, `architectuurprofielen`); de kolom *Stand* verandert niet, want de skills die nu op *uitbreiden* gaan, stonden hier al als "moet worden uitgebreid". De oude nummers (SKL-01 enz.) staan alleen nog in het veld `oud_nummer`, zodat je de documenten van model 0.9 en de pagina 0.3 kunt blijven lezen.

| Skill | Waar gaat het over | Wie gebruikt hem | Stand |
| --- | --- | --- | --- |
| `requirements-orchestration` | Dr. Evil is het enige loket: hij stuurt een nieuwe wens naar Socrates en het goedgekeurde resultaat naar Atlas. | Dr. Evil | Bestaat; moet worden uitgebreid (0.11: project aanmaken) |
| `requirements-analysis` | Een opdracht omzetten in toetsbare eisen met ID's (requirements.md). | Socrates | Bestaat; moet worden uitgebreid |
| `domain-analysis` | Bedrijfsregels en de levenscyclus van begrippen vastleggen in bedrijfstaal. | Socrates | Bestaat |
| `requirements-validation` | De eigen eisen controleren op volledigheid en toetsbaarheid, vóór ze naar jou gaan. | Socrates | Bestaat |
| `requirements-clarification` | Vragen over goedgekeurde eisen beantwoorden en wijzigingsverzoeken verwerken. | Socrates | Bestaat |
| `uml-use-cases` | Use cases met acceptatiecriteria maken uit de eisen. | Socrates, Atlas | Bestaat; moet worden uitgebreid |
| `grilling` | Een grill-sessie met jou: per ronde alle vragen die nu te beantwoorden zijn, genummerd en elk met een aanbevolen antwoord; feiten zoekt de vrager zelf op; klaar als jij bevestigt dat er overeenstemming is (0.12: omschrijving hersteld, FND-038). | Socrates, Atlas | Bestaat |
| `domain-modeling` | Begrippen vastleggen in GLOSSARY.md en besluiten in ADR's. | Socrates, Atlas | Bestaat; moet worden uitgebreid |
| `architect-architecture-choice` | De architectuur kiezen (stack, hosting, opbouw) en onderbouwen in ADR's; ook de OpenAPI-versie en het hulpmiddel voor de leesbare versie, in `architecture.md` (0.13, ASM-51). | Atlas | Bestaat; moet worden uitgebreid |
| `architect-modeling` | De regie over domeinmodel, sequentiediagrammen en klassendiagram. | Atlas | Bestaat; moet worden uitgebreid |
| `uml-domain-modelling` | Het domeinmodel: welke begrippen er zijn en hoe ze samenhangen. | Atlas | Bestaat; moet worden uitgebreid |
| `uml-sequence-diagrams` | Sequentiediagrammen: welke onderdelen in welke volgorde samenwerken. | Atlas | Bestaat; moet worden uitgebreid |
| `uml-class-diagram` | Het ontwerpklassendiagram: de technische vorm van de begrippen. | Atlas | Bestaat; moet worden uitgebreid |
| `architect-database` | Het databaseontwerp: tabellen, relaties en sleutels. | Atlas | Bestaat; moet worden uitgebreid |
| `architect-implementation-plan` | Een implementatieplan per use case: wat er gebouwd wordt en in welke volgorde. | Atlas | Bestaat; moet worden uitgebreid |
| `codebase-design` | Modules en interfaces van de code ontwerpen. | Atlas | Bestaat |
| `to-tickets` | Een plan opdelen in tickets en die publiceren. | Atlas | Bestaat; beschikbaar, niet vereist: geen stap in het model gebruikt hem (0.12, ASM-44) |
| `paperclip-converting-plans-to-tasks` | Een goedgekeurd plan omzetten in taken met eigenaar en afhankelijkheden. | Dr. Evil, Atlas | Bestaat |
| `backlog-management` | Het backlog ordenen en zorgen dat taken klaar zijn om op te pakken. | Dr. Evil | Bestaat; moet worden uitgebreid |
| `dependency-management` | Afhankelijkheden tussen taken vastleggen en bewaken. | Dr. Evil | Bestaat |
| `quality-gates` | Vóór de volgende fase op het issue controleren of het bewijs er is, zoals jouw akkoord; vóór de taken ook, waar er een OpenAPI-bestand is, of het goedgekeurde bouwcontract dezelfde revisie van dat bestand noemt als de repository (0.13, ASM-52). | Dr. Evil | Bestaat; moet worden uitgebreid |
| `escalation-management` | Besluiten die Dr. Evil niet zelf mag nemen aan jou voorleggen, en voorstellen voor agents en skills. | Dr. Evil | Bestaat; moet worden uitgebreid |
| `delivery-management` | De flow bewaken: limieten, blokkades en de flowcheck. | Dr. Evil | Bestaat; moet worden uitgebreid |
| `weekmoment` | Het wekelijkse issue voor jou: afname, top 5, retro en focusdoel. | Dr. Evil | Bestaat; moet worden uitgebreid |
| `agent-orchestration` | De juiste agent kiezen en hem een opdracht geven. | Dr. Evil | Bestaat |
| `overdracht` | Werk overdragen aan een andere agent met een issue dat zelfstandig leesbaar is. | Dr. Evil, Socrates, Atlas | Bestaat |
| `paperclip` | Werken in Paperclip: issues, comments, documenten, kaarten en blokkades. | Dr. Evil, Socrates, Atlas | Bestaat |
| `research` | Onderzoek naar een techniek of bibliotheek. | Atlas | Bestaat |
| `architect-vertical-slices` | Het ontwerp of een wens opdelen in vertical slices, in technische volgorde. | Atlas | Nog te maken (besloten, B-08); naam is een werknaam |
| `architect-api-contracts` | Per slice het bouwcontract opstellen dat jij goedkeurt: API-contracten als OpenAPI-bestand met een leesbare versie die eruit wordt gemaakt (0.13, B-17), of bij P1 het templatecontract als tabel, met OpenAPI alleen waar echt een API is (besloten B-14: PRP-043: bij P1 op basis van het contentmodel van `architect-cms-configuratie`). | Atlas | Nog te maken (besloten, B-08); naam is een werknaam |
| `architect-use-case-review` | De use cases van Socrates toetsen vóór jouw akkoord. | Atlas | Nog te maken (besloten, B-08); naam is een werknaam |
| `architect-conventions` | Per project een conventiebestand met afspraken voor de bouw (in 0.10 ook voor de UI). | Atlas | Nog te maken (besloten, B-08); naam is een werknaam |
| `architect-clarification` | Vragen over het ontwerp beantwoorden en ontwerpwijzigingen vastleggen als verzoek. | Atlas | Nog te maken (besloten, B-08); naam is een werknaam |
| `vragen-en-akkoordrondes` | Gedeelde regels voor vragen, grill-sessies en afkeuringen: wie antwoordt, de grill-sessie tussen agents, wie wat beslist, het contextverslag, rondes zonder voortgang tellen (2 achter elkaar: naar jou), afkeuringen tellen (na 2 naar jou). De skills op de grill-momenten verwijzen ernaar (0.12, B-15, B-16). | Dr. Evil, Socrates, Atlas | Nog te maken (besloten, B-08; uitgebreid in B-15); naam is een werknaam |
| `paginalijst-en-paginabrieven` | De lijst met pagina's (nu en later), het ontwerpniveau per pagina en de paginabrieven. | Socrates | Nog te maken (besloten in 0.10, B-12); naam is een werknaam |
| `architectuurprofielen` | Eén plek met de profielen P1 CMS, P2 component-app en P3 maatwerk: wanneer welk profiel, en welke producten erbij horen. | Atlas, Socrates, Dr. Evil (alleen als naslag bij de poorten) | Nog te maken (besloten in 0.10, B-12); naam is een werknaam |
| `architect-cms-configuratie` | Technisch ontwerp bij een CMS (P1): contentmodel met de velden per template en blok, templates en blokken, plugins. Het templatecontract per slice maakt `architect-api-contracts` (besloten B-14: PRP-043). | Atlas | Nog te maken (besloten in 0.10, B-12); naam is een werknaam |
| `architect-componentontwerp` | Technisch ontwerp bij een component-app (P2): componenten, routes en data. | Atlas | Nog te maken (besloten in 0.10, B-12); naam is een werknaam |
| `paginaontwerp` | Pagina's en patronen ontwerpen binnen het design systeem. Pas nodig als er een ontwerp-agent komt; tot dan doe jij dit. | nog geen agent (jij doet het, ASM-28) | Nog te maken (besloten in 0.10, B-12); naam is een werknaam |

```yaml
meta:
  model: "Organisatiemodel AI coding factory"
  issue: WEB-19
  versie: "0.13"
  status: "Concept, ter goedkeuring (CHG-023, CHG-024; B-17, B-18); geldend tot het akkoord: 0.12 (Goedgekeurd, 2026-10-31, Carlo, kaart 2ddaa565)"
  datum: 2026-10-31
  geldend: "0.12 (Goedgekeurd, 2026-10-31, Carlo, kaart 2ddaa565)"
  goedgekeurd:
    - {versie: "0.1", datum: 2026-10-27, door: ROL-01, gk: GK-1, kaart: "553e51b3"}
    - {versie: "0.5", datum: 2026-10-28, door: ROL-01, gk: GK-2, kaart: "eb913512", onderdelen: "wijziging ronde 1 en procesmodellen ronde 2"}
    - {versie: "0.7", datum: 2026-10-29, door: ROL-01, gk: GK-3, kaart: "5491a09b", onderdelen: "rollen- en skillmodel (register 0.7 en de vier overzichten); skill-specificaties en agentprofiel Atlas"}
    - {versie: "0.8", datum: 2026-10-29, door: ROL-01, kaart: "66da5f92", onderdelen: "procesmodellen PRC-01 t/m PRC-05; register en weergaven ronde 1 en 3; interpretaties ASM-18, 19, 20, 21, 23"}
    - {versie: "0.9", datum: 2026-10-30, door: ROL-01, gk: GK-4, kaart: "4d0845d3", onderdelen: "model 0.9 (B-09), ASM-24, ASM-25, pagina 0.3, uitbreidingsgids 0.3"}
    - {versie: "0.10", datum: 2026-10-30, door: ROL-01, kaart: "f261b9ac", onderdelen: "PRC-01 en PRC-02 0.10; register, Paperclip-mapping en uitbreidingsgids 0.4; PRP-029 t/m PRP-038; ASM-26 t/m ASM-29; CHG-016 en PRP-039 (B-12)"}
    - {versie: "0.10 weergaven", datum: 2026-10-30, door: ROL-01, kaart: "a16387c4", onderdelen: "overzichten van 0.10 en pagina 0.4 (CHG-017); opdracht om de gaten in het register te herstellen als CHG-018"}
    - {versie: "0.11", datum: 2026-10-30, door: ROL-01, kaart: "fa26d50e", onderdelen: "PRC-01 en PRC-02 0.11; register, PRC-03, Paperclip-mapping en uitbreidingsgids 0.5; PRP-040 t/m PRP-043; ASM-30 t/m ASM-39; CHG-018 (B-14)"}
    - {versie: "0.12", datum: 2026-10-31, door: ROL-01, kaart: "2ddaa565", onderdelen: "PRC-04 0.12; PRC-01 en PRC-02 0.12 (optie A, B-16); register, PRC-03, Paperclip-mapping, uitbreidingsgids 0.6 en bevindingen; CHG-021; ASM-42 t/m ASM-48"}
  besluiten:
    - {id: B-01..B-05, bron: "plan §0, kaart 3e2dda70"}
    - {id: TL-V1..TL-V5, bron: "kaart d58a1a60 op WEB-17; uitwerking in rolanalyse-techlead (v0.4, Vervallen door TL-V7; blijft de onderbouwing van de taken TL-01 t/m TL-09)"}
    - {id: B-06, tekst: "Socrates maakt de use cases met acceptatiecriteria; Atlas toetst ze vóór het akkoord van ROL-01; in PRC-01 én PRC-02", bron: "kaart 1f7ca238 op WEB-19 (2026-10-28), vraag 'usecases'"}
    - {id: B-07, tekst: "Volledig databaseontwerp van de kern na het goedgekeurde klassendiagram en vóór het eerste backlog (optie A)", bron: "kaart 1f7ca238 op WEB-19 (2026-10-28), vraag 'database'"}
    - {id: TL-V6, tekst: "Atlas voert de taken van de tech lead uit; geen aparte agent.", bron: "comment aa764887 op WEB-17 (2026-10-28)", aangepast_door: "TL-V7: het deel 'de rol blijft in het procesmodel' vervalt"}
    - {id: B-08, tekst: "Keuze uit de voorstellen. Goedgekeurd: PRP-001, 003, 005, 006, 007, 010, 013, 014, 015, 017, 018, 019, 020, 021, 022, 023, 024, 025, 026, 027, 028. Uitgesteld: PRP-011. Interpretaties bevestigd (2026-10-29, kaart 66da5f92): ASM-19 (PRP-003, vorm met 3 akkoorden) en ASM-20 (PRP-024, optie a).", bron: "kaart 2b7a6d2d op WEB-19 (2026-10-29, request_item_verdicts, alle 22 items beantwoord)", gevolg: "CHG-011, model 0.8. Uitvoering van de wijzigingen aan agents, instructies en skills via Dr. Evil (PRC-08)"}
    - {id: B-09, tekst: "Vindt de flowcheck te weinig klare taken en blijkt uit de volgorde van ROL-01 niet welke wens de volgende is, dan vraagt Dr. Evil het ROL-01 direct, één keer, op een issue (GOV-07). Antwoordt ROL-01 niet, dan herinnert Dr. Evil hem pas op het weekmoment. Daarvoor krijgt escalation-management een uitzondering (via PRC-08).", bron: "kaart e2fd31e9 op WEB-19 (2026-10-30, ask_user_questions, vraag gov07, optie direct)", gevolg: "CHG-013, model 0.9; FND-027 opgelost; `escalation-management` uitbreiden (B-09); `weekmoment` uitbreiden (ASM-24, bevestigd)", gewijzigd_door: "B-13 (0.11): de herinnering komt elke werkdag om 09:00 en niet pas op het weekmoment"}
    - {id: B-10, tekst: "Opdracht ontwerp-eerst en architectuurprofielen. UC1: (1) bij de start een design systeem, aangeleverd door ROL-01; (2) visie en architectuur met architectuurprofiel; (3) een paginalijst met instructies wat nu en wat later; (4) de eerste pagina's ontwerpen, door ROL-01, een designer-agent of een frontend developer, ook in code met mock data; (5) daarna de slices en API-contracten, afgeleid van de goedgekeurde pagina's en de visie; (6) backlog. UC2: (1) een lijst met mogelijke uitbreidingen; (2) per uitbreiding nagaan welk ontwerp nodig is en dat ontwerp maken; (3) slices en API-contracten met de visie in gedachten, afgeleid van de ontwerpen; (4) backlog. Uitgangspunt: het ontwerp en de visie zijn leidend, de API-contracten volgen; de UI wordt nooit afgeleid van de API-contracten. Mock data is niet bindend voor de API-contracten. Hoe dit precies loopt (volgorde, ontwerpniveau, profielen, akkoorden, rollen en skills) is uitgewerkt als voorstel PRP-029 t/m PRP-038.", bron: "comment 6e69ec6e op WEB-19 (2026-10-30)", gevolg: "CHG-015, model 0.10 (Concept)"}
    - {id: B-11, tekst: "Skills hebben in het model geen nummer meer; ze worden overal bij hun naam genoemd, met een korte omschrijving in het overzicht Skills in het kort. Een nieuwe skill krijgt een voorgestelde naam (werknaam). De oude nummers blijven alleen als oud_nummer, om oudere documenten te lezen.", bron: "comment 081ea763 op WEB-19 (2026-10-30)", gevolg: "CHG-016, model 0.10 (Goedgekeurd, B-12); bpmn-conventies aanpassen via PRP-039 (PRC-08)"}
    - {id: B-12, tekst: "Model 0.10 goedgekeurd met alle 15 onderdelen. Goedgekeurd: PRP-029 t/m PRP-039 (PRP-036: 4 akkoorden in UC1 met GOV-15 Richting; PRP-029: paginalijst in de analyse, vóór de architectuurkeuze; PRP-035: geen nieuwe agent nu); aannames ASM-26 t/m ASM-29 bevestigd (ASM-27: de visie is de productvisie; ASM-28: ROL-01 is de ontwerper zolang er geen ontwerp-agent is). Daarmee zijn vraag 1 t/m 4 van de vragenkaart d2f1547d beantwoord; vraag 5 blijft OPEN-14.", bron: "kaart f261b9ac op WEB-19 (2026-10-30, request_item_verdicts, alle 15 items goedgekeurd)", gevolg: "model 0.10 Goedgekeurd; uitvoering van de wijzigingen aan skills, instructies en bpmn-conventies via Dr. Evil (PRC-08)"}
    - {id: B-13, tekst: "Antwoorden op de open vragen. (1) OPEN-03: PRC-02 start in elk geval op het weekmoment, maandag om 04:00; daarnaast als er in de lopende slice nog 5 taken open zijn, en als ROL-01 er uitdrukkelijk om vraagt. Niet als percentage (15%) maar als aantal: nog 5 open taken. (2) OPEN-04: ROL-01 maakt de git-repository aan; wie van ROL-01 de opdracht krijgt (Dr. Evil of Socrates), maakt het project in Paperclip aan. (3) OPEN-05: de skills worden correct toegewezen. (4) OPEN-09: ROL-01 wil van maandag tot en met vrijdag elke dag om 09:00 een bericht met een herinnering. (5) OPEN-10: ROL-01 vraagt welk mechanisme Socrates aanbeveelt (zie PRP-040); hij vroeg of het via decisions kan. (6) OPEN-14: het design systeem wordt in de regel in Claude Design gemaakt; ROL-01 deelt een link of projectnaam, en de agents moeten toegang tot Claude Design hebben.", bron: "comments f06fede2 en a690e8f3 op WEB-19 (2026-10-30)", wijzigt: "B-09: de herinnering komt niet pas op het weekmoment, maar elke werkdag om 09:00 (en op het weekmoment, ASM-24 blijft)", gevolg: "CHG-019, model 0.11 (Goedgekeurd, B-14); uitwerking in ASM-30 t/m ASM-36, FND-035 t/m FND-037, PRP-040 t/m PRP-042; aanpassing van skills en instructies via Dr. Evil (PRC-08)", nieuw_in: "0.11"}
    - {id: B-14, tekst: "Model 0.11 goedgekeurd met alle 18 onderdelen. Goedgekeurd: PRC-01 en PRC-02 0.11 (CHG-019); de weergaven (register, PRC-03, Paperclip-mapping, uitbreidingsgids 0.5); PRP-040 (elk akkoord via een kaart request_item_verdicts op het issue, geen decisions en geen approval-stage), PRP-041 (Atlas toetst use cases en paginabrieven via een toets-issue), PRP-042 (toegang tot Claude Design via Dr. Evil; altijd een export als vaste versie), PRP-043 (bij P1 levert architect-cms-configuratie het contentmodel, architect-api-contracts maakt het contract per slice); het herstel van de gaten in register 0.10 (CHG-018). Aannames ASM-30 t/m ASM-39 bevestigd. Daarmee is OPEN-10 beantwoord en vervalt M-9.", bron: "kaart fa26d50e op WEB-19 (2026-10-30, request_item_verdicts, alle 18 items goedgekeurd)", gevolg: "model 0.11 Goedgekeurd; uitvoering van de wijzigingen aan skills, instructies, routines en koppelingen via Dr. Evil (PRC-08)", nieuw_in: "0.11"}
    - {id: B-15, tekst: "Grill-sessies om context te verzamelen (antwoorden op de vijf vragen in comment dcf72a45). V1: breder dan de drie voorgestelde momenten: bij (bijna) alle skills die context verzamelen. V2: in de vragenloop tellen alleen rondes zonder voortgang; na 2 rondes achter elkaar zonder voortgang escaleert de vrager naar ROL-01 (GOV-08); dit verandert B-08 voor PRC-04; afkeuringen (PRC-05) en de toets-lussen houden het maximum van 2. V3: in een sessie tussen agents beslist elke agent alleen over zijn eigen vakgebied (Socrates: bedoeling van de eisen; Atlas: ontwerp); een productkeuze of een wijziging van iets wat ROL-01 goedkeurde gaat altijd naar ROL-01 (GOV-12); feiten zoekt de vrager zelf op. V4: overeenstemming = geen open punten en de andere partij bevestigt de samenvatting (contextverslag, op het issue, input voor de volgende stap); bij een sessie met ROL-01 is de bevestiging de laatste vraag, geen nieuw akkoord: UC1 houdt 4 akkoorden. V5: één keer beschreven in de gedeelde skill vragen-en-akkoordrondes; de skills op de grill-momenten krijgen één regel die ernaar verwijst; grilling blijft de vorm voor vragen aan ROL-01.", bron: "kaart d57f0546 op WEB-19 (2026-10-31); aanleiding comment e6670fea", nieuw_in: "0.12", wijziging_0_12: "V1 is smaller gemaakt door B-16"}
    - {id: B-16, tekst: "Omvang van de grill-sessies: optie A (uitleg in comment 22934652). Dit maakt V1 van B-15 smaller; V2 t/m V5 blijven. Een grill-sessie komt waar context voor het eerst van de ene partij naar de andere gaat en nog niets is vastgelegd dat als contract kan dienen: met ROL-01 bij de analyse (GS1, GS9), de use cases (GS2, GS10) en de architectuurkeuze (GS4; GS14 alleen als architectuur of profiel verandert), en bij de overdracht van Socrates naar Atlas (GS3, GS11). Elke vraag tussen agents loopt in grill-vorm via PRC-04. Een contextverslag komt er alleen als er iets besproken is. GS5 t/m GS8, GS12, GS13 en GS15 uit het eerste concept vervallen: een vraag die daar opkomt, gaat via PRC-04.", bron: "kaart a5523ebd op WEB-19 (2026-10-31); aanleiding comment cfa68ac1", nieuw_in: "0.12"}
    - {id: B-17, tekst: "OpenAPI voor het bouwcontract (aanleiding comment ec7d3ac6; uitleg comment 09d57446). (1) Het API-contract per slice is een OpenAPI-bestand. Dat is de bron. De leesbare versie die ROL-01 goedkeurt, wordt eruit gemaakt en niet apart geschreven, zodat ze niet uit elkaar kunnen lopen; uitleg in het Nederlands, namen van velden en routes in het Engels; bovenaan staat welke revisie van het OpenAPI-bestand hij beschrijft. (2) Bij profiel P1 alleen OpenAPI waar echt een API is: eigen endpoints, koppelingen of een headless CMS (zoals Payload) waarvan de frontend de API aanroept. Het templatecontract (de velden per paginasjabloon) blijft een tabel.", bron: "kaart 42b39ff5 op WEB-19 (2026-10-31), vraag 1 (gegenereerd) en vraag 2 (alleen-api)", nieuw_in: "0.13"}
    - {id: B-18, tekst: "Codes begrijpelijk maken (aanleiding comment b4a55cab). De codes blijven (agents, reviewer en tester verwijzen ermee). In alles wat ROL-01 leest, komt er een korte naam bij, bijvoorbeeld GOV-06 (akkoord bouwcontract per slice); in tabellen een kolom met de naam; een legenda bovenaan het register, de procesbeschrijvingen en de pagina; op de pagina de naam bij aanwijzen. Model 0.12 werd los beoordeeld (goedgekeurd op kaart 2ddaa565); OpenAPI en de codes komen in 0.13.", bron: "kaart 42b39ff5 op WEB-19 (2026-10-31), vraag 3 (naam-erbij) en vraag 4 (los)", nieuw_in: "0.13"}
    - {id: TL-V7, tekst: "Geen rol tech lead, ook niet als aparte rol in het model. De taken TL-01 t/m TL-09 (rolanalyse-techlead §5) zijn goedgekeurd en horen bij Atlas (ROL-04). TL-07 t/m TL-09 beginnen pas als er developers zijn (TL-V1).", bron: "comment 8a27fe15 op WEB-17 (2026-10-28)"}
  scope: "Van opdracht van de project owner tot 'Backlog gereed, overdracht naar implementatie'"
  noot: "Doelen hebben lokale nummers D1-D3; bpmn-conventies kent geen prefix voor doelen."

doelen:
  - {id: D1, tekst: "Nieuwe klant: van opdracht tot eerste backlog", label: besloten, gedekt_door: [PRC-01]}
  - {id: D2, tekst: "Backlog aanvullen met de volgende slice", label: besloten, gedekt_door: [PRC-02]}
  - {id: D3, tekst: "De tijd van de project owner beschermen: hij is de enige mens die prioriteert en goedkeurt", label: besloten, bron: "rolanalyse §1", gedekt_door: [PRC-03, PRC-05, PRC-07], opmerking: "doorsnijdend doel; maatregelen PRP-003, PRP-006 en PRP-007, besloten in B-08 (0.8)"}
eisen_aan_het_model:
  - {tekst: "Uitbreidbaar: een nieuwe use case of agent wijzigt bestaande diagrammen niet", label: besloten, gedekt_door: "herbruikbare subprocessen PRC-03 t/m PRC-06, één eindpunt, uitbreidingsgids (ronde 4)"}

rollen:
  - id: ROL-01
    naam: "Project owner"
    mens: true
    label: besloten
    situatie: as-is
    verantwoordelijkheid: "Geeft opdrachten, beantwoordt vragen, geeft akkoord. Bepaalt prioriteit, scope en afname, ook de volgorde van de wensen in UC2 (TL-V2). Keurt de API-contracten per slice goed (TL-V4; sinds 0.10 het bouwcontract: API-contracten, of bij P1 het templatecontract; sinds 0.13 de leesbare versie, gemaakt uit het OpenAPI-bestand, B-17). Enige contact met de klant (B-03). In UC1 vier akkoorden: het analysepakket met visie en paginalijst (GOV-10), de Richting met profiel en eerste ontwerpen (GOV-15), het technisch ontwerp volgens profiel (GOV-11) en het bouwcontract van slice 1 met de inhoud (GOV-06) (B-12: PRP-036; daarvoor drie, B-08: PRP-003)."
    bron: "opdracht a5a789fe; AGENTS.md Dr. Evil (Werkwijze); TL-V2, TL-V4; B-08; B-12; B-13"
    in: "vragen, documenten ter goedkeuring (ook het bouwcontract: API-contracten of templatecontract), de paginalijst en de paginabrieven (GOV-10, GOV-02), het profiel en de ontwerpen van anderen (GOV-15, GOV-14), het technisch ontwerp volgens profiel (GOV-11), escalaties; het herinneringsbericht elke werkdag om 09:00 (B-13, ASM-35)"
    uit: "opdracht met de link naar de git-repository die hij aanmaakt (B-13), antwoorden, akkoord of afkeuring (bij een pakket per document), volgorde backlog en van de wensen, inhoud en volgorde van de uitbreidingslijst (PRP-033); als ontwerper (ASM-28): het design systeem in Claude Design met een export (ACT-01.52, B-13), de ontwerpen van de sleutelpagina's, paginatypen en pagina's met de patroonbibliotheek (ACT-01.28, ACT-02.16)"
    wijziging_0_11: "CHG-018 (A-4): `in` en `uit` aangevuld met de taken uit `wijziging_0_10` en de repository en het herinneringsbericht uit B-13; de zin over de akkoorden in UC1 herschreven (vier akkoorden, B-12: PRP-036)"
    wijziging_0_10: "Ook ontwerper zolang er geen designer- of frontend-agent is (ASM-28): maakt het design systeem (ACT-01.52, B-10) en ontwerpt de sleutelpagina's, paginatypen en nieuwe patronen (ACT-01.28, ACT-02.16). Keurt de paginalijst (GOV-10), het profiel en de eerste ontwerpen (GOV-15), het technisch ontwerp volgens profiel (GOV-11), de paginabrieven in UC2 (GOV-02), paginaontwerpen van anderen (GOV-14) en het bouwcontract (GOV-06) goed. Bepaalt inhoud en volgorde van de uitbreidingslijst (PRP-033)."
  - id: ROL-02
    naam: "Orchestrator en scrum master"
    mens: false
    label: besloten
    situatie: as-is
    verantwoordelijkheid: "Intake (enig loket, B-08: PRP-001), route en volgorde bewaken, backlog maken en bijhouden, plan opdelen in taken (to-be: op basis van de werkpakketten van Atlas, TL-V3), toewijzen, flow en weekmoment. To-be (B-08): flowcheck die PRC-02 start (PRP-014), vaste controles vóór de taken (PRP-007), controle \"backlog gereed\" (PRP-013), signaal voor een aparte agent (PRP-018)."
    bron: "opdracht; rolanalyse-orchestrator v1.0 (Goedgekeurd); AGENTS.md Dr. Evil; TL-V3; B-08"
    in: "opdracht met de link naar de repository (B-13), goedgekeurde documenten, ontwerp en werkpakketten per slice; de eigen lijst van ROL-01 met mogelijke uitbreidingen en de \"later\"-pagina's van de paginalijst (ACT-01.29), de uitbreidingslijst (ACT-02.1), een verzoek van ROL-01 (B-13)"
    uit: "Paperclip-project met de repository als de opdracht bij hem binnenkomt (ACT-01.2, B-13), overdrachtsissues, melding aan de ontwerper (ACT-01.8), epics en taken, uitbreidingslijst (ACT-01.29, ACT-02.17), escalaties, herinneringsbericht elke werkdag om 09:00 (B-13, ASM-35)"
    wijziging_0_11: "CHG-018 (A-4): `in` en `uit` aangevuld met de taken uit `wijziging_0_10` (uitbreidingslijst, melding aan de ontwerper) en uit B-13 (project, verzoek van ROL-01, herinneringsbericht)"
    wijziging_0_10: "Houdt de uitbreidingslijst bij in Paperclip: vult hem met de \"later\"-pagina's aan het eind van PRC-01 (ACT-01.29) en werkt hem bij aan het eind van elke doorloop van PRC-02 (ACT-02.17); neemt de volgende wens van die lijst (ACT-02.1). Meldt de ontwerper na GOV-10 (ACT-01.8). (B-10, PRP-033)"
  - id: ROL-03
    naam: "Business analist"
    mens: false
    label: besloten
    situatie: as-is
    verantwoordelijkheid: "Wat en waarom: requirements, use cases met acceptatiecriteria (B-06, in PRC-01 en PRC-02), bedrijfsregels, glossary (eigenaar van de bedrijfstermen, B-08: PRP-026); enige bron voor de bedoeling van goedgekeurde eisen. To-be (B-08): markeert de kern (PRP-015); meldt een rechtstreekse opdracht aan Dr. Evil en begint pas na toewijzing (PRP-001)."
    bron: "opdracht; AGENTS.md Socrates; B-06; B-08"
    in: "opdracht (bij een rechtstreekse opdracht met de link naar de repository, B-13), antwoorden van ROL-01, vragen van agents, toetsopmerkingen van ROL-04 op de use cases en de paginabrieven, design systeem, de ontwerpen (ACT-01.58, ACT-02.56), patroonbibliotheek"
    uit: "requirements (ASM-01), visie met projecttype (ACT-01.26; in UC2 bijgewerkt, ACT-02.3), use cases met acceptatiecriteria (B-06; licht bij P1, PRP-038), bedrijfsregels, glossary, paginalijst met \"nu\" en \"later\" en ontwerpniveau, paginabrieven (ACT-01.27, ACT-02.15), bijgewerkte brieven met een lijst van verschillen (ACT-01.58, ACT-02.56); antwoorden en wijzigingsverzoeken; Paperclip-project bij een rechtstreekse opdracht (ACT-01.51, B-13)"
    wijziging_0_11: "CHG-018 (A-4): `in` en `uit` aangevuld met de taken uit `wijziging_0_10` (visie, paginalijst, brieven, afstemming op het ontwerp) en uit B-13 (project)"
    wijziging_0_10: "Maakt de productvisie met het projecttype (ACT-01.26), de paginalijst met \"nu\" en \"later\", ontwerpniveau en paginabrieven (ACT-01.27, ACT-02.15), en stemt de brieven af op het ontwerp (ACT-01.58, ACT-02.56). Stelt de vorm van de use cases voor (licht bij P1, PRP-038). (B-10, PRP-029 t/m PRP-032)"
  - id: ROL-04
    naam: "Systeemarchitect"
    mens: false
    label: besloten
    situatie: as-is
    verantwoordelijkheid: "Hoe het technisch werkt, globaal ontwerp. Toetst de use cases van ROL-03 vóór het akkoord van ROL-01 (B-06). Daarna, volgens zijn instructies: architectuurkeuze (ADR's, context- en containerdiagram) na de goedgekeurde requirements; domeinmodel, sequentiediagrammen en ontwerpklassendiagram (UC1 stap 3); databaseontwerp na het goedgekeurde klassendiagram. Ontwerpt in principe de hele kernfunctionaliteit vooraf (TL-V5), inclusief het volledige databaseontwerp van de kern (B-07). Houdt GLOSSARY.md en docs/architecture/STATUS.md bij. Laatste woord op technische punten bij de opdeling (V5); komen Atlas en Dr. Evil er niet uit, dan legt Dr. Evil het aan ROL-01 voor. Zet het ontwerp om in bouwbaar werk, slice voor slice (TL-V7, taken TL-01 t/m TL-06): opdeling in vertical slices en hun technische volgorde (TL-V2), ontwerp per slice buiten de kern (ASM-09), API-contracten per slice ter goedkeuring van ROL-01 (TL-V4), implementatieplan met werkpakketten als invoer voor ROL-02 (TL-V3); beantwoordt vragen van ROL-02 over de opdeling (TL-08). To-be (B-08): conventiebestand in slice 1 (PRP-010), taken van Dr. Evil toetsen tegen zijn werkpakketten (PRP-027), ADR bij elke wijziging van het globale ontwerp (PRP-017), alleen technische termen in GLOSSARY.md (PRP-026). Zodra er developers zijn, ook hun implementatievragen en de ontwerpafwijkingen die Sentinel meldt (TL-07, TL-09; buiten de scope, ASM-03)."
    bron: "opdracht; AGENTS.md Atlas; architect-modeling; architect-database; rolanalyse V5; B-02; TL-V5; B-06; B-07; feitencheck Atlas (WEB-21); TL-V7 met rolanalyse-techlead §5 (TL-01 t/m TL-09); B-08"
    in: "use cases en paginabrieven ter toetsing (B-06; PRP-031), goedgekeurde eisen, visie, use cases, bedrijfsregels, paginalijst en paginabrieven, design systeem, ontwerpen en patroonbibliotheek (bindend voor het bouwcontract; mock data niet, PRP-032), verzoeken om een implementatieplan (feitencheck WEB-21), de volgende wens van ROL-01 via ROL-02 (TL-V2), vragen van ROL-02 over de opdeling; epics en taken van Dr. Evil ter toetsing (B-08, PRP-027)"
    uit: "toetsresultaat use cases en paginabrieven, ADR's met het profiel-ADR (ACT-01.11), context- en containerdiagram; technisch ontwerp volgens profiel (P1: contentmodel en platformconfiguratie, ACT-01.60; P2: componenten-, route- en dataontwerp, ACT-01.59; P3: domeinmodel, sequentiediagrammen, ontwerpklassendiagram, databaseontwerp), GLOSSARY.md, STATUS.md; opdeling in slices, ontwerp per slice, bouwcontract (API-contracten, of bij P1 het templatecontract; PRP-032, PRP-034), implementatieplan met werkpakketten; conventiebestand met UI-conventies (PRP-037), toetsresultaat van de taken, ADR bij een wijziging van het globale ontwerp of het profiel (B-08; PRP-034)"
    wijziging_0_11: "CHG-018 (A-4): `in` en `uit` aangevuld met de taken uit `wijziging_0_10` (profiel-ADR, technisch ontwerp per profiel, toets van de brieven, bouwcontract, UI-conventies)"
    wijziging_0_10: "Kiest het architectuurprofiel en legt het vast in een profiel-ADR (ACT-01.11); maakt het technisch ontwerp volgens het profiel (P1 ACT-01.60, P2 ACT-01.59, P3 ACT-01.10/12/13/24); toetst ook de paginabrieven (ACT-01.23, ACT-02.13); leidt het bouwcontract af van de goedgekeurde brieven en ontwerpen, nooit van mock data (ACT-01.17, ACT-02.8); neemt UI-conventies op in het conventiebestand (ACT-01.56); toetst bij elke uitbreiding of het profiel nog past (G-02.3). (B-10, PRP-032, PRP-034, PRP-037)"
    opmerking: "Van de taken TL-01 t/m TL-09 (TL-V7) staan TL-07 (plan op verzoek van een ontwikkelaar of andere agent, AGENTS.md Atlas r.38) en TL-09 (ontwerpafwijkingen die de code reviewer meldt, r.58) al in de instructies van Atlas (Feit, feitencheck WEB-23). TL-07 en TL-09 spelen pas als er developers zijn (TL-V1). TL-01 t/m TL-06 en TL-08 zijn to-be: de aanpassing van zijn instructies loopt na GK-3 via Dr. Evil (PRC-08). TL-08 staat niet in de instructies: die beschrijven de omgekeerde richting, Atlas mag vragen stellen over de opdeling die Dr. Evil maakt en een technisch bezwaar melden (r.40). CHG-009: in 0.5 stond hier dat alleen TL-08 al in de instructies stond (onjuist, WEB-23)."
agents:
  - {id: AGT-01, naam: "Dr. Evil", rol: ROL-02, situatie: as-is, label: feit, rapporteert_aan: null, scope: in, bron: "Paperclip-API 2026-10-27; AGENTS.md Dr. Evil"}
  - {id: AGT-02, naam: "Socrates", rol: ROL-03, situatie: as-is, label: feit, rapporteert_aan: AGT-01, scope: in, bron: "Paperclip-API 2026-10-27; AGENTS.md Socrates"}
  - {id: AGT-03, naam: "Atlas", rol: ROL-04, situatie: as-is, label: "feit (ROL-04); besloten (taken TL-01 t/m TL-09, TL-V7)", rapporteert_aan: AGT-01, scope: in, bron: "Paperclip-API 2026-10-27; AGENTS.md Atlas; TL-V7", opmerking: "TL-01 t/m TL-06 en TL-08 staan nog niet in zijn instructies; aanpassing via Dr. Evil na GK-3 (rolanalyse-techlead §9). TL-07 (r.38) en TL-09 (r.58) staan er al in, maar wachten op developers (CHG-009, WEB-23)"}
  - {id: AGT-05, naam: "Sentinel", rol: null, situatie: as-is, label: feit, rapporteert_aan: AGT-01, scope: "buiten (werkt na het backlog)", bron: "Paperclip-API 2026-10-27"}

systemen:
  - {naam: "Paperclip", gebruik: "issues, toewijzing, comments, documenten, bijlagen, interacties (goedkeuringskaarten), blockers, bovenliggende issues, routines", label: feit, bron: "skill paperclip; Paperclip-API"}
  - {naam: "Repository van het klantproject", gebruik: "docs/architecture/ (requirements, use cases, bedrijfsregels, modellen), GLOSSARY.md, docs/adr/", label: feit, bron: "AGENTS.md Socrates en Atlas", aangemaakt_door: "ROL-01 (B-13); gekoppeld aan het Paperclip-project door wie de opdracht ontvangt (ACT-01.2 of ACT-01.51)", wijziging_0_11: "OPEN-04 beantwoord (B-13)"}
  - {naam: "Claude Design", gebruik: "design systeem, sleutelpagina's en paginatypen (ACT-01.52, ACT-01.28, ACT-02.16); ROL-01 deelt een link of projectnaam", label: "besloten (B-13); toegang voor de agents: besloten B-14 (PRP-042): Dr. Evil zoekt die uit (PRC-08); tot dan een export als vaste versie op het issue", wijziging_0_12: "CHG-021 (A-10): PRP-042 is besloten (B-14)", situatie: to-be, nieuw_in: "0.11"}

processen:
  # Primair (niveau 1)
  - id: PRC-01
    beschrijving: "processen/PRC-01-nieuwe-klant"
    naam: "Nieuwe klant: van opdracht tot eerste backlog"
    niveau: 1
    soort: primair
    doel: "Een opdracht voor een website of applicatie omzetten in een goedgekeurde analyse met visie, use cases en paginalijst, goedgekeurde ontwerpen van de eerste pagina's, een goedgekeurd technisch ontwerp volgens het architectuurprofiel, en een backlog met de epics en taken van de eerste vertical slice. Ontwerp en visie zijn leidend; het bouwcontract volgt (B-10)."
    aanleiding: "Opdracht van de project owner voor een nieuwe klant"
    startconditie: "Opdracht staat als issue in Paperclip; ROL-01 heeft de git-repository aangemaakt (B-13)"
    eindconditie: "Backlog gereed, overdracht naar implementatie"
    eigenaar: ROL-02
    betrokken: [ROL-01, ROL-03, ROL-04]
    input: "opdracht, design systeem, antwoorden en akkoorden van ROL-01"
    output: "requirements, visie, use cases, bedrijfsregels, paginalijst met brieven, ontwerpen van de sleutelpagina's met patroonbibliotheek, architectuurkeuze met profiel-ADR, technisch ontwerp volgens profiel (P3: domeinmodel, sequentie- en klassendiagram, databaseontwerp), bouwcontract slice 1, backlog (epics en taken eerste slice), uitbreidingslijst"
    afhankelijkheden: [PRC-03, PRC-04, PRC-05, PRC-06]
    risicos: "eerste slice wacht op het volledige kernontwerp met database (B-07); met de pakketten (B-08: PRP-003) werkt Atlas verder op een architectuurkeuze die nog niet is goedgekeurd, en een late afkeuring van een vroeg document kost meer herwerk (FND-005, ASM-18); Atlas is een knelpunt en krijgt er met PRP-027 werk bij (FND-018); het ontwerp per slice heeft buiten GOV-06 geen tweede lezer (FND-017, FND-022); ROL-01 is ontwerper én goedkeurder en de enige mens, en zijn ontwerpwerk ligt op het kritieke pad van slice 1 (FND-033)"
    open: [OPEN-15]
    label: besloten
    situatie: to-be
    status: "Concept 0.13 (CHG-023, CHG-024); geldend: 0.12, Goedgekeurd (2026-10-31, Carlo, kaart 2ddaa565)"
    versie: "0.13"
    wijziging_0_13: "CHG-023 (B-17): OpenAPI bij het bouwcontract en GOV-06; CHG-024 (B-18): legenda en korte namen; activiteiten, beslissingen, akkoorden en diagram ongewijzigd"
    wijziging_0_11: "CHG-019 (B-13): ROL-01 maakt de repository aan en zet de link in de opdracht (ACT-01.1); wie de opdracht ontvangt, maakt het Paperclip-project aan (ACT-01.2 of ACT-01.51, ASM-31, ASM-34); het design systeem en de ontwerpen staan in Claude Design (ACT-01.52, ACT-01.28; FND-035, PRP-042); de toets van Atlas loopt via een toets-issue (ACT-01.23, PRP-041); CHG-018 (A-7): restrisico FND-033 toegevoegd aan `risicos`"
    wijziging_0_12: "CHG-022 (B-15, B-16): grill-momenten GS1 t/m GS4 (zie grillmomenten); de diagrammen veranderen niet. CHG-021 (A-11): versiemarkering (0.10) weggelaten in doel, input en output"
    wijziging: "CHG-015 (B-10): design systeem (ACT-01.52 naar de basis), visie en projecttype (ACT-01.26), paginalijst met brieven (ACT-01.27), ontwerp van de sleutelpagina's (ACT-01.28, ACT-01.58), architectuurprofiel (ACT-01.11), technisch ontwerp volgens profiel (G-01.6, ACT-01.59, ACT-01.60), bouwcontract (ACT-01.17), uitbreidingslijst (ACT-01.29); 4 akkoorden (GOV-10, GOV-15, GOV-11, GOV-06). CHG-011 (B-08): de variant wordt de basis, behalve PRP-011 (uitgesteld). Eén loket (ACT-01.51), kern markeren (ACT-01.54), 3 akkoorden (GOV-10, GOV-11, GOV-06 met de inhoud van slice 1), conventiebestand (ACT-01.56), Atlas toetst de taken (nieuw ACT-01.25, G-01.5), backlog gereed (ACT-01.57). CHG-003: Atlas ontwerpt de kern vooraf (TL-V5); ROL-01 keurt de API-contracten van de eerste slice goed (TL-V4). CHG-005: use cases bij ROL-03 met toets door ROL-04 (B-06); databaseontwerp van de kern vóór het backlog (B-07); architectuurkeuze vóór het domeinmodel. CHG-006: TL-V6. CHG-007: geen rol tech lead (TL-V7); ACT-01.16 t/m 01.18 naar ROL-04; ACT-01.19 en G-01.3 vervallen (zelfcontrole)"
  - id: PRC-02
    beschrijving: "processen/PRC-02-backlog-uitbreiden"
    naam: "Backlog uitbreiden met de volgende slice"
    niveau: 1
    soort: primair
    herhaalbaar: true
    doel: "Het backlog aanvullen met de epics en taken van de volgende vertical slice."
    aanleiding: "De volgende uitbreiding van de uitbreidingslijst. Orchestrator vraagt Atlas wat er nu gebouwd moet worden (UC2: 'de tech lead', TL-V7); welke wens als volgende komt, bepaalt ROL-01 (TL-V2)"
    startconditie: "PRC-01 is afgerond voor dit project (ASM-07). Drie triggers (B-13): het weekmoment (maandag 04:00), de flowcheck vindt nog 5 of minder open taken in de lopende slice (ASM-30), of een verzoek van ROL-01. Er loopt nooit meer dan één doorloop tegelijk per project (G-02.8, ASM-33)"
    eindconditie: "Backlog gereed, overdracht naar implementatie"
    eigenaar: ROL-02
    betrokken: [ROL-01, ROL-03, ROL-04]
    input: "uitbreidingslijst met de volgorde van ROL-01, goedgekeurde eisen, visie, paginalijst, design systeem en patroonbibliotheek, technisch ontwerp en profiel, huidige backlog en voortgang"
    output: "aanvulling op requirements, use cases en paginalijst, paginabrieven en waar nodig ontwerpen, ontwerp per slice, bouwcontract, implementatieplan, epics en taken op het backlog, bijgewerkte uitbreidingslijst; contextverslagen van de grill-sessies (0.12, B-15)"
    wijziging_0_12: "CHG-021 (A-11): versiemarkering (0.10) weggelaten; CHG-022 (B-15, B-16): grill-momenten GS9, GS10, GS11 en GS14 (alleen bij een wijziging van architectuur of profiel; zie grillmomenten), contextverslag als output"
    afhankelijkheden: [PRC-03, PRC-04, PRC-05, PRC-06]
    risicos: "de triggers en de drempel zijn besloten (B-08: PRP-014; B-13), maar de routines bestaan nog niet (FND-013, M-4); ontwerp per slice zonder onafhankelijke controle buiten GOV-06 (FND-014, FND-017; deels afgedekt door PRP-017 en PRP-028); Atlas is een knelpunt (FND-018, OPEN-13); ROL-01 is ontwerper én goedkeurder en de enige mens, en zijn ontwerpwerk (ACT-02.16) ligt op het kritieke pad van de uitbreiding (FND-033)"
    open: [OPEN-13]
    label: besloten
    situatie: to-be
    status: "Concept 0.13 (CHG-023, CHG-024); geldend: 0.12, Goedgekeurd (2026-10-31, Carlo, kaart 2ddaa565)"
    versie: "0.13"
    wijziging_0_13: "CHG-023 (B-17): OpenAPI bij het bouwcontract en GOV-06; CHG-024 (B-18): legenda en korte namen; activiteiten, beslissingen, akkoorden en diagram ongewijzigd"
    wijziging_0_11: "CHG-019 (B-13): drie triggers met een vast tijdstip (weekmoment maandag 04:00, flowcheck elke werkdag 09:00, ASM-32) en een verzoek van ROL-01; drempel: nog 5 open taken in de lopende slice (ACT-02.51, ASM-30); nieuwe beslissing G-02.8 (geen tweede doorloop, ASM-33); herinnering bij GOV-07 elke werkdag om 09:00 (ASM-35); de toets van Atlas via een toets-issue (ACT-02.13, PRP-041); CHG-018 (A-7): restrisico FND-033 toegevoegd aan `risicos`"
    wijziging: "CHG-015 (B-10): uitbreidingslijst (ACT-02.1, ACT-02.17), ontwerpbehoefte en paginabrieven (ACT-02.15), ontwerp waar nodig (G-02.7, ACT-02.16, ACT-02.56, GOV-14), slices en bouwcontract uit brieven en ontwerpen, profiel bij G-02.3. CHG-013 (B-09): de vraag bij GOV-07 komt direct, één keer; zonder antwoord een herinnering op het weekmoment (ACT-02.1, ACT-02.2). CHG-011 (B-08): de variant wordt de basis. Flowcheck als trigger (ACT-02.51), ADR bij een wijziging van het globale ontwerp (ACT-02.55), vaste controles (ACT-02.53, zonder controle 3), Atlas toetst de taken (nieuw ACT-02.14, G-02.6, met controle 3), backlog gereed (ACT-02.54). CHG-003: ROL-01 kiest de wens (TL-V2) en keurt de API-contracten goed (TL-V4), dus PRC-03 en PRC-05 worden ook in PRC-02 aangeroepen. CHG-005: use cases ook in PRC-02 (B-06), GOV-13 bij een bijgewerkt databaseontwerp (B-07). CHG-006: TL-V6. CHG-007: geen rol tech lead (TL-V7); ACT-02.5 en 02.7 t/m 02.9 naar ROL-04; ACT-02.10 en G-02.4 vervallen (zelfcontrole)"
  # Herbruikbare subprocessen (uitwerking in ronde 2)
  - {id: PRC-03, beschrijving: "processen/PRC-03-akkoord-poort", naam: "Akkoord-poort project owner", soort: subproces, label: besloten, situatie: to-be, status: "Goedgekeurd (2026-10-31, Carlo, kaart 2ddaa565; CHG-021, CHG-022)", versie: "0.12", wijziging_0_10: "CHG-015: GOV-01 t/m GOV-15; GOV-15 als pakket met meer producenten (ASM-26)", wijziging: "CHG-011: indienen en besluiten per document binnen een pakket (GOV-10, GOV-11; B-08, PRP-003)", eigenaar: ROL-01, doel: "Een deliverable zichtbaar laten goedkeuren of afkeuren door ROL-01", start: "Deliverable ter goedkeuring", einde: "Goedgekeurd, of afgekeurd naar PRC-05", roept_aan: [PRC-05]}
  - {id: PRC-04, beschrijving: "processen/PRC-04-vragenloop", naam: "Vragenloop en grill-sessie tussen agents", soort: subproces, label: besloten, situatie: to-be, status: "Goedgekeurd (2026-10-31, Carlo, kaart 2ddaa565; CHG-022, B-15, B-16)", versie: "0.12", wijziging_0_10: "CHG-015: routering paginabrief → ROL-03, ontwerp → de ontwerper (ROL-01, ASM-28)", eigenaar: ROL-02, doel: "Een vraag van een agent, of de context voor zijn stap, in grill-vorm afhandelen met de agent die erover gaat, tot overeenstemming die in een contextverslag staat, met een uitgang", start: "Agent heeft een vraag die zijn werk blokkeert, of begint een stap met een grill-moment tussen agents (GS3, GS11)", einde: "Overeenstemming met bevestigd contextverslag (ACT-04.56), besloten wijzigingsverzoek of productkeuze (GOV-12) of escalatiebesluit (GOV-08); blokkade (PRC-06) alleen als de ontvanger niet reageert", roept_aan: [PRC-03, PRC-06], maximum: "2 rondes achter elkaar zonder voortgang, daarna escalatie (B-15; was 2 rondes, B-08: PRP-005)", wijziging: "CHG-011: de variant wordt de basis; ASM-16 vervalt", wijziging_0_12: "CHG-022 (B-15, B-16): grill-vorm (V1; grill-momenten tussen agents GS3 en GS11, B-16), telling zonder voortgang (V2), beslisregels en productkeuze via GOV-12 (V3), contextverslag (V4: ACT-04.55, ACT-04.56, G-04.52); CHG-021 (A-9): toetsopmerkingen via het toets-issue"}
  - {id: PRC-05, beschrijving: "processen/PRC-05-afkeuring", naam: "Afkeuring", soort: subproces, label: besloten, situatie: to-be, status: "Goedgekeurd (2026-10-30, Carlo, kaart f261b9ac)", versie: "0.10", wijziging_0_10: "CHG-015: afkeuren per document ook bij GOV-15; toetslus ook voor de paginabrieven", eigenaar: ROL-02, doel: "Terug naar de producent met commentaar; na een vast aantal rondes escaleren naar ROL-01", start: "Afkeuring met commentaar (bij een pakket: per afgekeurd document)", einde: "Herzien en opnieuw ter goedkeuring, of escalatie", roept_aan: [PRC-03], maximum: "2 herzieningsrondes per document, daarna escalatie (B-08: PRP-006)", wijziging: "CHG-011: PRP-006 besloten; afkeuren per document binnen een pakket (PRP-003)"}
  - {id: PRC-06, beschrijving: "processen/PRC-06-blokkade", naam: "Blokkade", soort: subproces, label: besloten, situatie: to-be, status: "Goedgekeurd (2026-10-28, Carlo, GK-2)", versie: "0.3", eigenaar: ROL-02, doel: "Een geblokkeerde taak zichtbaar maken, de eigenaar van de oplossing laten handelen en zo nodig escaleren", start: "Taak kan niet verder", einde: "Blokkade opgelost, of escalatie", roept_aan: []}
  # Context in het landschap (niet uitgewerkt in dit model)
  - {id: PRC-07, naam: "Weekmoment en prioriteren", soort: sturend, uitgewerkt: false, label: feit, situatie: as-is, bron: "AGENTS.md Dr. Evil; rolanalyse §6", start: "Maandagochtend; to-be maandag 04:00 als routine (B-13, ASM-32)", wijziging_0_12: "CHG-021 (A-2): tijdstip uit B-13", einde: "Volgorde en focusdoel", status: "n.v.t. (context, niet gemodelleerd)", opmerking: "beschreven in instructies; routine bestaat nog niet (FND-013). To-be (B-13): maandag om 04:00, als routine van Dr. Evil; het weekmoment start PRC-02 (0.11). To-be (B-08: PRP-014): de flowcheck start PRC-02 (ACT-02.51); Dr. Evil signaleert hier ook of uitbreidingen op Atlas wachten (PRP-018, drempel OPEN-13; tussentijdse melding ASM-23). Het signaal hangt aan geen skill (ASM-23)"}
  - {id: PRC-08, naam: "Organisatie aanpassen (agent, instructie of skill)", soort: sturend, uitgewerkt: false, label: feit, situatie: as-is, bron: "AGENTS.md Dr. Evil; rolanalyse V7", start: "Behoefte aan agent, instructie of skill", einde: "Besluit van ROL-01", status: "n.v.t. (context, niet gemodelleerd)", opmerking: "Dr. Evil stelt voor, ROL-01 beslist. Nodig voor de aanpassing van de instructies van Atlas (TL-V7) en de skills en instructies uit B-08; als ROL-01 daartoe besluit, later een aparte agent voor de taken TL-01 t/m TL-09 (PRP-018, besloten als signaal in B-08)"}

activiteiten:
  # afgeleid uit de procesbeschrijvingen (ronde 2); RACI, capabilities en skills per activiteit: zie koppelingen (ronde 3)
  - {id: "ACT-01.1", proces: "PRC-01", naam: "Opdracht geven", rol: "ROL-01", input: "wens van de klant", output: "opdracht-issue met de link naar de git-repository die ROL-01 heeft aangemaakt", versie: "basis", label: "B (stap 1), B (B-13: repository), A (ASM-34)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): vervolg G-01.7 (parallel met het design systeem)", wijziging_0_11: "CHG-019 (B-13): ROL-01 maakt de repository aan en zet de link in de opdracht"}
  - {id: "ACT-01.2", proces: "PRC-01", naam: "Project aanmaken, opdracht registreren en overdragen aan de analist", rol: "ROL-02", input: "opdracht-issue met de link naar de repository", output: "Paperclip-project voor de klant met de repository, als Socrates het nog niet heeft aangemaakt (ASM-31); overdrachtsissue voor Socrates in dat project", versie: "basis", label: "F (`requirements-orchestration`, OR-01), B (B-13: project), A (ASM-31, ASM-34)", situatie: "to-be", wijziging_0_11: "CHG-019 (B-13): Dr. Evil maakt het project aan als de opdracht bij hem binnenkomt"}
  - {id: "ACT-01.3", proces: "PRC-01", naam: "Plan, bedrijf en domein onderzoeken", rol: "ROL-03", input: "opdracht, design systeem als het er al is", output: "inzicht en vragen", versie: "basis", label: "B (stap 2)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): design systeem als input", grill_sessie: "GS1: begint met een grill-sessie met ROL-01 via ACT-01.4 / ACT-01.5; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS1"}
  - {id: "ACT-01.4", proces: "PRC-01", naam: "Vragen stellen aan de project owner", rol: "ROL-03", input: "vragen", output: "vragenkaart", versie: "basis", label: "B (stap 2), F (skill `paperclip`)", situatie: "to-be", grill_sessie: "rondes van de grill-sessies met ROL-01 in UC1 (GS1, GS2 via ACT-01.4; GS4 via ACT-01.21): alle vragen van de ronde genummerd met een aanbevolen antwoord; de laatste vraag is de bevestiging van het contextverslag, geen nieuw akkoord; geen open punten: geen vraag en geen verslag (ASM-41, B-16)", wijziging_0_12: "CHG-022 (B-15, B-16)"}
  - {id: "ACT-01.5", proces: "PRC-01", naam: "Vragen van de analist beantwoorden", rol: "ROL-01", input: "vragenkaart", output: "antwoorden", versie: "basis", label: "B (stap 2)", situatie: "to-be"}
  - {id: "ACT-01.6", proces: "PRC-01", naam: "Analysedocument opstellen", rol: "ROL-03", input: "antwoorden, onderzoek", output: "`requirements.md` (en `business-rules.md`)", versie: "basis", label: "B (stap 2), A (ASM-01)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): vervolg ACT-01.26"}
  - {id: "ACT-01.7", proces: "PRC-01", naam: "Goedgekeurde analyse en use cases melden", rol: "ROL-03", input: "goedkeuring GOV-10 (analysepakket)", output: "melding aan Dr. Evil", versie: "basis", label: "F (AGENTS.md Socrates)", situatie: "to-be", wijziging: "CHG-011: input GOV-10 in plaats van GOV-01 en GOV-02"}
  - {id: "ACT-01.8", proces: "PRC-01", naam: "Ontwerp overdragen aan de architect en de ontwerper", rol: "ROL-02", input: "goedgekeurd analysepakket (GOV-10)", output: "overdrachtsissue voor Atlas; melding aan de ontwerper (nu ROL-01)", versie: "basis", label: "F (`requirements-orchestration` stap 4), A (ASM-17)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): ook de ontwerper melden (PRP-029)"}
  - {id: "ACT-01.9", proces: "PRC-01", naam: "Use cases met acceptatiecriteria opstellen", rol: "ROL-03", input: "requirements en bedrijfsregels (concept), visie", output: "`use-cases.md` met UC- en AC-ID's", versie: "basis", label: "B (B-06), F (AGENTS.md Socrates en Atlas), B (B-08: vóór het akkoord op de requirements)", situatie: "to-be", wijziging: "CHG-005: rol ROL-04 → ROL-03. CHG-011: volgt direct op ACT-01.6", wijziging_0_10: "CHG-015 (B-10): lichte vorm bij P1 (PRP-038); vervolg ACT-01.27", grill_sessie: "GS2: begint met een grill-sessie met ROL-01 via ACT-01.4 / ACT-01.5; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS2"}
  - {id: "ACT-01.10", proces: "PRC-01", naam: "Domeinmodel opstellen (profiel P3)", rol: "ROL-04", input: "use cases, bedrijfsregels, architectuurkeuze", output: "domeinmodel, GLOSSARY.md", versie: "basis", label: "B (stap 3), F (`architect-modeling` fase 2)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): alleen bij profiel P3 (PRP-034)"}
  - {id: "ACT-01.11", proces: "PRC-01", naam: "Architectuurkeuze en architectuurprofiel vastleggen", rol: "ROL-04", input: "goedgekeurd analysepakket (vooral NFR's, visie met projecttype, paginalijst), design systeem", output: "ADR's met de technologiekeuzes, profiel-ADR (P1, P2 of P3) met redenen en groeisignalen, context- en containerdiagram", versie: "basis", label: "F (AGENTS.md Atlas: na de goedgekeurde requirements, dus vóór het backlog), B (TL-V5: kern vooraf)", situatie: "to-be", wijziging: "CHG-005: database naar ACT-01.24; plek vóór ACT-01.10", wijziging_0_10: "CHG-015 (B-10): met architectuurprofiel (PRP-034)", grill_sessie: "GS4: begint met een grill-sessie met ROL-01 via ACT-01.21 / ACT-01.22; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS4"}
  - {id: "ACT-01.12", proces: "PRC-01", naam: "Sequentiediagrammen opstellen (profiel P3)", rol: "ROL-04", input: "use cases, domeinmodel, paginabrieven en ontwerpen", output: "sequentiediagrammen, in principe voor de hele kern", versie: "basis", label: "B (stap 3, TL-V5)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): alleen bij P3; na het paginaontwerp (PRP-029, PRP-034)"}
  - {id: "ACT-01.13", proces: "PRC-01", naam: "Ontwerpklassendiagram opstellen (profiel P3)", rol: "ROL-04", input: "domeinmodel, sequentiediagrammen", output: "klassendiagram, in principe voor de hele kern", versie: "basis", label: "B (stap 3, TL-V5)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): alleen bij P3 (PRP-034)"}
  - {id: "ACT-01.14", proces: "PRC-01", naam: "Goedgekeurd technisch ontwerp melden", rol: "ROL-04", input: "goedkeuring GOV-11 (technisch ontwerp volgens profiel)", output: "melding aan Dr. Evil", versie: "basis", label: "F (feitencheck Atlas, WEB-21)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): technisch ontwerp volgens profiel"}
  - {id: "ACT-01.15", proces: "PRC-01", naam: "Atlas vragen om opdeling in vertical slices", rol: "ROL-02", input: "technisch ontwerp, paginalijst", output: "opdracht-issue voor Atlas", versie: "basis", label: "B (stap 4: 'de tech lead' = Atlas, TL-V7)", situatie: "to-be", wijziging: "CHG-007: naam en output", wijziging_0_10: "CHG-015 (B-10): input technisch ontwerp en paginalijst"}
  - {id: "ACT-01.16", proces: "PRC-01", naam: "Technisch ontwerp opdelen in vertical slices", rol: "ROL-04", input: "technisch ontwerp, eisen, paginalijst (\"nu\"-pagina's), visie", output: "slices met use cases, AC's en technische volgorde; slice 1 = het kleinste stuk dat van begin tot eind werkt", versie: "basis", label: "B (stap 4, B-01, B-02, TL-V2)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): afgeleid van de \"nu\"-pagina's en de visie", wijziging_0_11: "CHG-018: naam technisch ontwerp in plaats van kernontwerp (B-12: PRP-034)"}
  - {id: "ACT-01.17", proces: "PRC-01", naam: "Bouwcontract van slice 1 opstellen", rol: "ROL-04", input: "slice 1, goedgekeurde paginabrieven en ontwerpen (bindend), visie, technisch ontwerp; niet de mock data", output: "P2/P3: API-contracten als OpenAPI-bestand (de bron) en een leesbare versie die eruit wordt gemaakt, met bovenaan de revisie van het OpenAPI-bestand (B-17); P1: templatecontract als tabel, en OpenAPI alleen waar echt een API is: eigen endpoints, koppelingen of een headless CMS (B-17); per veld een bron (brief, UC/AC of BR); waar er een OpenAPI-bestand is, staat de bron daarin als eigen veld (ASM-50)", wijziging_0_13: "CHG-023 (B-17): OpenAPI-bestand en leesbare versie", versie: "basis", label: "B (B-02, TL-V4), B (B-14: PRP-043: bij P1 het templatecontract uit het contentmodel)", wijziging_0_12: "CHG-021 (A-5): PRP-043", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): bouwcontract uit de goedgekeurde brieven en ontwerpen; bronkolom; mock data niet bindend (PRP-032, PRP-034)"}
  - {id: "ACT-01.18", proces: "PRC-01", naam: "Implementatieplan van slice 1 opstellen", rol: "ROL-04", input: "slice 1, bouwcontract", output: "technische werkpakketten met afhankelijkheden en AC-verwijzingen", versie: "basis", label: "B (B-02, TL-V3, TL-V7)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): frontendpakketten verwijzen naar brief en paginatype; werkpakketten per profiel (PRP-034, PRP-037)"}
  - {id: "ACT-01.20", proces: "PRC-01", naam: "Epics en taken van slice 1 maken", rol: "ROL-02", input: "goedgekeurd bouwcontract, werkpakketten; vooraf de poort: GOV-06 is er (quality-gates)", output: "epics en taken met eigenaar en afhankelijkheden", versie: "basis", label: "B (stap 4, TL-V3)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): frontendtaken verwijzen naar brief en ontwerp (PRP-037)"}
  - {id: "ACT-01.21", proces: "PRC-01", naam: "Vragen stellen aan de project owner (architect)", rol: "ROL-04", input: "vraag over het ontwerp", output: "vraag op het eigen issue", versie: "basis", label: "B (stap 3: \"de architect kan vragen aan jou stellen\")", situatie: "to-be", grill_sessie: "rondes van de grill-sessies met ROL-01 in UC1 (GS1, GS2 via ACT-01.4; GS4 via ACT-01.21): alle vragen van de ronde genummerd met een aanbevolen antwoord; de laatste vraag is de bevestiging van het contextverslag, geen nieuw akkoord; geen open punten: geen vraag en geen verslag (ASM-41, B-16)", wijziging_0_12: "CHG-022 (B-15, B-16)"}
  - {id: "ACT-01.22", proces: "PRC-01", naam: "Vragen van de architect beantwoorden", rol: "ROL-01", input: "vragenkaart", output: "antwoorden", versie: "basis", label: "B (stap 3)", situatie: "to-be"}
  - {id: "ACT-01.23", proces: "PRC-01", naam: "Use cases en paginabrieven toetsen", rol: "ROL-04", input: "use cases, requirements, paginalijst en brieven", output: "geen opmerkingen, of opmerkingen per use case en per brief (genoeg voor een bouwcontract; klopt \"bestaand patroon\")", versie: "basis", label: "B (B-06); nieuw t.o.v. de huidige instructies, aanpassing via PRC-08; B (B-14: PRP-041: via een toets-issue), A (ASM-45)", situatie: "to-be", nieuw_in: "0.4", wijziging_0_10: "CHG-015 (B-10): toetst ook de paginabrieven (PRP-031)", wijziging_0_11: "CHG-019 (PRP-041): Paperclip-vorm is een toets-issue voor Atlas in plaats van een review-stage (M-9)", grill_sessie: "GS3: begint met een grill-sessie met ROL-03 via PRC-04 op het toets-issue; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS3"}
  - {id: "ACT-01.24", proces: "PRC-01", naam: "Databaseontwerp van de kern opstellen (profiel P3)", rol: "ROL-04", input: "klassendiagram (in het pakket van GOV-11), sequentiediagrammen, requirements, ADR's, paginabrieven", output: "databaseontwerp van de kern; databasesysteem in een ADR als dat nog niet vastligt", versie: "basis", label: "B (B-07), F (`architect-database`)", situatie: "to-be", nieuw_in: "0.4", wijziging: "CHG-011: input het klassendiagram uit hetzelfde pakket, nog niet goedgekeurd (B-08, PRP-003)", wijziging_0_10: "CHG-015 (B-10): alleen bij P3; B-07 volledig in P3 (PRP-034)"}
  - {id: "ACT-01.25", proces: "PRC-01", naam: "Taken toetsen tegen de werkpakketten", rol: "ROL-04", input: "epics en taken van slice 1, werkpakketten, technisch ontwerp", output: "geen opmerkingen, of opmerkingen: werkpakket niet gedekt, afhankelijkheid klopt niet, taak past niet in het globale ontwerp", versie: "basis", label: "B (B-08, PRP-027)", situatie: "to-be", nieuw_in: "0.8", wijziging_0_10: "CHG-015 (B-10): ook \"frontendtaak zonder brief\" (PRP-037)"}
  - {id: "ACT-01.26", proces: "PRC-01", naam: "Visie en projecttype vastleggen", rol: "ROL-03", input: "requirements, antwoorden, onderzoek", output: "visie (doel, doelgroepen, kernboodschap, hoofdstructuur, wat nu en later in principe); projecttype met signalen voor het profiel; voorstel voor de vorm van de use cases", versie: "basis", label: "B (B-10, UC1 stap 2: visie), B (B-12: PRP-029, PRP-034, PRP-038), A (ASM-27)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-01.27", proces: "PRC-01", naam: "Paginalijst met \"nu\" en \"later\", ontwerpniveau en paginabrieven opstellen", rol: "ROL-03", input: "visie, use cases, kern (concept), design systeem als het er is", output: "paginalijst met per pagina doel, paginatype, UC/AC, \"nu\" of \"later\" met reden en ontwerpniveau; paginabrief voor elke \"nu\"-pagina", versie: "basis", label: "B (B-10, UC1 stap 3), B (B-12: PRP-030, PRP-031)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-01.28", proces: "PRC-01", naam: "Sleutelpagina's en paginatypen ontwerpen", rol: "ROL-01", input: "design systeem, paginalijst met brieven, visie", output: "ontwerp van één sleutelpagina per paginatype van de \"nu\"-pagina's en van de pagina's met ontwerpniveau \"ontwerp\"; patroonbibliotheek; grafisch (in de regel in Claude Design, B-13) of in code met mock data (niet bindend)", versie: "basis", label: "B (B-10, UC1 stap 4), B (B-12: PRP-031, PRP-032), B (B-13: Claude Design), A (ASM-28)", situatie: "to-be", nieuw_in: "0.10", wijziging_0_11: "CHG-019 (B-13): Claude Design; export als vaste versie (PRP-042)"}
  - {id: "ACT-01.29", proces: "PRC-01", naam: "\"Later\"-pagina's op de uitbreidingslijst zetten", rol: "ROL-02", input: "de eigen lijst van ROL-01 met mogelijke uitbreidingen, paginalijst (\"later\"), backlog", output: "uitbreidingslijst met per uitbreiding de pagina's, de reden \"later\" en een verwijzing naar de paginalijst", versie: "basis", label: "B (B-10, UC2 stap 1), B (B-12: PRP-033)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-01.51", proces: "PRC-01", naam: "Project aanmaken en rechtstreekse opdracht doorgeven aan de orchestrator", rol: "ROL-03", input: "opdracht bij Socrates, met de link naar de repository", output: "Paperclip-project voor de klant met de repository (B-13); melding aan Dr. Evil in dat project; wacht op toewijzing", versie: "basis", label: "B (B-08, PRP-001), B (B-13: project), A (ASM-31, ASM-34)", situatie: "to-be", wijziging: "CHG-011: variant → basis", wijziging_0_11: "CHG-019 (B-13): Socrates maakt het project aan; inhoudelijk begint hij pas na toewijzing (PRP-001 blijft, ASM-31)"}
  - {id: "ACT-01.52", proces: "PRC-01", naam: "Design systeem maken en aanleveren", rol: "ROL-01", input: "opdracht, huisstijl van de klant", output: "design systeem: kleuren, typografie, basiscomponenten, toon; in Claude Design, met een link of projectnaam op het opdracht-issue (B-13) en een export als vaste versie (PRP-042)", versie: "basis", label: "B (B-10, UC1 stap 1), B (B-13: Claude Design), B (B-14: PRP-042: export); was V (PRP-011, vervalt)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): van variant naar basis; PRP-011 vervalt", wijziging_0_11: "CHG-019 (B-13): Claude Design (OPEN-14 beantwoord)"}
  - {id: "ACT-01.54", proces: "PRC-01", naam: "Kern markeren", rol: "ROL-03", input: "requirements, use cases, paginalijst", output: "eisen met markering \"kern\"", versie: "basis", label: "B (B-08, PRP-015)", situatie: "to-be", wijziging: "CHG-011: variant → basis", wijziging_0_10: "CHG-015 (B-10): de \"nu\"-pagina's dekken de kern"}
  - {id: "ACT-01.56", proces: "PRC-01", naam: "Conventiebestand opstellen", rol: "ROL-04", input: "technisch ontwerp, design systeem, patroonbibliotheek", output: "codeconventies, projectstructuur, teststrategie, DoD voor een taak", versie: "basis", label: "B (B-08, PRP-010)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7). CHG-011: variant → basis", wijziging_0_10: "CHG-015 (B-10): UI-conventies (PRP-037)"}
  - {id: "ACT-01.57", proces: "PRC-01", naam: "\"Backlog gereed\" controleren", rol: "ROL-02", input: "epics en taken", output: "elke taak heeft AC-ID's, één eigenaar en afhankelijkheden; de slice is gedekt; het conventiebestand bestaat", versie: "basis", label: "B (B-08, PRP-013)", situatie: "to-be", wijziging: "CHG-011: variant → basis; komt na ACT-01.25", wijziging_0_10: "CHG-015 (B-10): vervolg ACT-01.29 in plaats van einde"}
  - {id: "ACT-01.58", proces: "PRC-01", naam: "Paginabrieven en ontwerp op elkaar afstemmen", rol: "ROL-03", input: "ontwerpen, paginabrieven", output: "bijgewerkte brieven met een lijst van de verschillen", versie: "basis", label: "B (B-12: PRP-032)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-01.59", proces: "PRC-01", naam: "Componenten-, route- en dataontwerp opstellen (profiel P2)", rol: "ROL-04", input: "profiel-ADR, paginabrieven, ontwerpen, use cases", output: "modules en componenten, routes, datastroom, sequentiediagrammen voor de kernflows, datamodel en databaseontwerp alleen bij een eigen database; bij een headless CMS het contentmodel", versie: "basis", label: "B (B-12: PRP-034)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-01.60", proces: "PRC-01", naam: "Contentmodel en platformconfiguratie opstellen (profiel P1)", rol: "ROL-04", input: "profiel-ADR, paginabrieven, ontwerpen", output: "contentmodel (contenttypen, velden, taxonomieën, rollen), templates en blokken per paginatype, plugins, integraties", versie: "basis", label: "B (B-12: PRP-034), A (ASM-46)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-02.1", proces: "PRC-02", naam: "Volgende wens bepalen volgens jouw volgorde", rol: "ROL-02", input: "uitbreidingslijst, focusdoel", output: "de volgende wens (bij een verzoek van ROL-01: de wens uit dat verzoek), of direct één vraag aan ROL-01 op een issue (B-09); zonder antwoord staat de vraag elke werkdag om 09:00 in het herinneringsbericht en op het weekmoment (B-13, ASM-35)", wijziging_0_12: "CHG-021 (A-1): herinnering volgens B-13", versie: "basis", label: "B (TL-V2, B-09, B-13), A (ASM-14)", situatie: "to-be", wijziging: "CHG-013: de vraag komt direct, één keer (B-09)", wijziging_0_10: "CHG-015 (B-10): de volgende wens komt van de uitbreidingslijst (PRP-033)", wijziging_0_11: "CHG-019 (B-13): start ook op verzoek van ROL-01"}
  - {id: "ACT-02.2", proces: "PRC-02", naam: "Volgende wens kiezen", rol: "ROL-01", input: "vraag van Dr. Evil op een issue (direct, één keer)", output: "gekozen wens", versie: "basis", label: "B (TL-V2, B-09, B-13), A (ASM-35)", situatie: "to-be", wijziging: "CHG-013: zonder antwoord herinnert Dr. Evil op het weekmoment (B-09)", wijziging_0_11: "CHG-019 (B-13): zonder antwoord staat de vraag elke werkdag om 09:00 in de herinnering (ASM-35), en op het weekmoment (ASM-24)", wijziging_0_12: "CHG-021 (C-9): labels B-13 en ASM-35"}
  - {id: "ACT-02.3", proces: "PRC-02", naam: "Eisen van de wens analyseren", rol: "ROL-03", input: "wens, visie", output: "aanvulling op `requirements.md`", versie: "basis", label: "F (OR-01, OR-02: elke nieuwe wens loopt via Socrates en jouw akkoord)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): visie bijwerken waar nodig (PRP-033)", grill_sessie: "GS9: begint met een grill-sessie met ROL-01 via rechtstreeks op het eigen issue; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS9"}
  - {id: "ACT-02.4", proces: "PRC-02", naam: "Atlas vragen wat er nu gebouwd moet worden", rol: "ROL-02", input: "wens met goedgekeurde eisen, use cases, brieven en waar nodig ontwerpen", output: "opdracht-issue voor Atlas", versie: "basis", label: "B (UC2: 'de tech lead' = Atlas, TL-V7)", situatie: "to-be", wijziging: "CHG-007: naam en output", wijziging_0_10: "CHG-015 (B-10): input met brieven en ontwerpen"}
  - {id: "ACT-02.5", proces: "PRC-02", naam: "Wens opdelen in slices en volgorde bepalen", rol: "ROL-04", input: "wens, eisen, paginabrieven en ontwerpen, visie, technisch ontwerp", output: "slices met use cases, AC's en technische volgorde", versie: "basis", label: "B (TL-V2, B-02)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): afgeleid van brieven, ontwerpen en visie"}
  - {id: "ACT-02.6", proces: "PRC-02", naam: "Globaal ontwerp of profiel bijwerken", rol: "ROL-04", input: "wens die het globale ontwerp of het profiel raakt (uitkomst G-02.3)", output: "geraakte documenten van het technisch ontwerp van het profiel; bij een zwaarder profiel ook de nieuwe documenten van dat profiel; zijn de use cases licht (PRP-038), dan vraagt Atlas Socrates via PRC-04 ze naar de volledige vorm te brengen, en ze komen mee in het akkoord met het ADR", versie: "basis", label: "B (B-02: Atlas houdt het globale ontwerp), A (ASM-09)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): ook profielwijziging (PRP-034)", grill_sessie: "GS14: begint met een grill-sessie met ROL-01 (alleen als architectuur of profiel verandert) via rechtstreeks op het eigen issue; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS14"}
  - {id: "ACT-02.7", proces: "PRC-02", naam: "Ontwerp per slice opstellen", rol: "ROL-04", input: "slice, technisch ontwerp, paginabrieven en ontwerpen", output: "modules, componenten, interfaces; zo nodig sequentie- en klassendiagram van de slice", versie: "basis", label: "B (UC2 \"program design\", B-02), A (ASM-46)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): per profiel; input brieven en ontwerpen (PRP-034)"}
  - {id: "ACT-02.8", proces: "PRC-02", naam: "Bouwcontract opstellen", rol: "ROL-04", input: "ontwerp per slice, goedgekeurde brieven en ontwerpen (bindend); niet de mock data", output: "P2/P3: API-contracten als OpenAPI-bestand (de bron) en een leesbare versie die eruit wordt gemaakt, met bovenaan de revisie van het OpenAPI-bestand (B-17); P1: templatecontract als tabel, en OpenAPI alleen waar echt een API is: eigen endpoints, koppelingen of een headless CMS (B-17); per veld een bron (brief, UC/AC of BR); waar er een OpenAPI-bestand is, staat de bron daarin als eigen veld (ASM-50)", wijziging_0_13: "CHG-023 (B-17): OpenAPI-bestand en leesbare versie", versie: "basis", label: "B (UC2, TL-V4), B (B-14: PRP-043: bij P1 het templatecontract uit het contentmodel)", wijziging_0_12: "CHG-021 (A-5): PRP-043", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): bouwcontract (PRP-032, PRP-034)"}
  - {id: "ACT-02.9", proces: "PRC-02", naam: "Implementatieplan opstellen", rol: "ROL-04", input: "ontwerp, bouwcontract", output: "werkpakketten met afhankelijkheden en AC-verwijzingen", versie: "basis", label: "B (B-02, TL-V3)", situatie: "to-be", wijziging: "CHG-007: rol ROL-05 → ROL-04 (TL-V7)", wijziging_0_10: "CHG-015 (B-10): frontendpakketten verwijzen naar brief en paginatype (PRP-037)"}
  - {id: "ACT-02.11", proces: "PRC-02", naam: "Taken maken en op het backlog zetten", rol: "ROL-02", input: "goedgekeurd bouwcontract, werkpakketten", output: "epics en taken met eigenaar en afhankelijkheden", versie: "basis", label: "B (UC2, TL-V3)", situatie: "to-be", wijziging_0_10: "CHG-015 (B-10): frontendtaken verwijzen naar brief en ontwerp (PRP-037)"}
  - {id: "ACT-02.12", proces: "PRC-02", naam: "Use cases van de wens opstellen of bijwerken", rol: "ROL-03", input: "goedgekeurde aanvulling op de requirements", output: "`use-cases.md` met nieuwe of gewijzigde UC- en AC-ID's", versie: "basis", label: "B (B-06)", situatie: "to-be", nieuw_in: "0.4", wijziging_0_10: "CHG-015 (B-10): vervolg ACT-02.15; vorm volgens profiel (PRP-038)", grill_sessie: "GS10: begint met een grill-sessie met ROL-01 via rechtstreeks op het eigen issue; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS10"}
  - {id: "ACT-02.13", proces: "PRC-02", naam: "Use cases en paginabrieven van de wens toetsen", rol: "ROL-04", input: "use cases, paginabrieven, requirements, technisch ontwerp", output: "geen opmerkingen, of opmerkingen per use case en per brief (genoeg voor een bouwcontract; klopt \"bestaand patroon\" met de componenten)", versie: "basis", label: "B (B-06); B (B-14: PRP-041: via een toets-issue), A (ASM-45)", situatie: "to-be", nieuw_in: "0.4", wijziging_0_10: "CHG-015 (B-10): toetst ook de paginabrieven (PRP-031)", wijziging_0_11: "CHG-019 (PRP-041): toets-issue in plaats van review-stage (M-9)", grill_sessie: "GS11: begint met een grill-sessie met ROL-03 via PRC-04 op het toets-issue; uitkomst: contextverslag als er iets besproken is (B-15, B-16, ASM-41, ASM-42)", wijziging_0_12: "CHG-022 (B-15, B-16): GS11"}
  - {id: "ACT-02.14", proces: "PRC-02", naam: "Taken toetsen tegen de werkpakketten", rol: "ROL-04", input: "epics en taken van de slice, werkpakketten, globaal ontwerp", output: "zie ACT-01.25; met controle 3 van PRP-007 (past in het globale ontwerp)", versie: "basis", label: "B (B-08, PRP-027)", situatie: "to-be", nieuw_in: "0.8"}
  - {id: "ACT-02.15", proces: "PRC-02", naam: "Ontwerpbehoefte bepalen en paginabrieven opstellen", rol: "ROL-03", input: "use cases van de wens, paginalijst, patroonbibliotheek, visie", output: "bijgewerkte paginalijst; per geraakte pagina het ontwerpniveau met het criterium en een paginabrief; of \"geen pagina geraakt\"", versie: "basis", label: "B (B-10, UC2 stap 2), B (B-12: PRP-031)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-02.16", proces: "PRC-02", naam: "Pagina's en nieuwe patronen ontwerpen", rol: "ROL-01", input: "goedgekeurde brieven, design systeem, patroonbibliotheek, visie", output: "ontwerp van de pagina's met ontwerpniveau \"ontwerp\"; bijgewerkte patroonbibliotheek; grafisch (in de regel in Claude Design, B-13) of in code met mock data (niet bindend); een export als vaste versie (PRP-042)", versie: "basis", label: "B (B-10, UC2 stap 2), B (B-12: PRP-031, PRP-032), B (B-13: Claude Design), B (B-14: PRP-042), A (ASM-28)", situatie: "to-be", nieuw_in: "0.10", wijziging_0_11: "CHG-019 (B-13): Claude Design; export als vaste versie (PRP-042)"}
  - {id: "ACT-02.17", proces: "PRC-02", naam: "Uitbreidingslijst bijwerken", rol: "ROL-02", input: "backlog, paginalijst, uitkomst van de doorloop", output: "de uitgevoerde uitbreiding staat op \"in backlog\"; nieuwe \"later\"-pagina's staan erop", versie: "basis", label: "B (B-10, UC2 stap 1), B (B-12: PRP-033)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-02.51", proces: "PRC-02", naam: "Open taken in de lopende slice tellen", rol: "ROL-02", input: "taken van de lopende slice (onderliggende issues van de epic)", output: "start van PRC-02 als er nog 5 of minder taken open zijn (B-13: 'nog 5 taken open'; '5 of minder', 'open' en 'lopende slice': ASM-30); elke werkdag om 09:00, in dezelfde routine als de herinnering (ASM-32)", versie: "basis", label: "B (B-08, PRP-014), B (B-13: drempel), A (ASM-30, ASM-32)", situatie: "to-be", wijziging: "CHG-011: variant → basis", wijziging_0_11: "CHG-019 (B-13): drempel 5 open taken in de lopende slice in plaats van 'te weinig klare taken'; naam was \"Voorraad klare taken controleren\""}
  - {id: "ACT-02.53", proces: "PRC-02", naam: "Vaste controles uitvoeren", rol: "ROL-02", input: "goedgekeurd bouwcontract, werkpakketten", output: "vooraf de poort: GOV-06, GOV-02 (met de brieven) en waar nodig GOV-14, en de akkoorden op de geraakte documenten zijn er (ASM-21); (1) elk werkpakket verwijst naar FR/UC/AC (op werkpakketten, want de taken bestaan nog niet: ASM-21), (2) geen nieuwe eis of scope, (4) flowlimieten (wachten telt niet als ronde: ASM-22). Controle 3 (past in het globale ontwerp) zit in ACT-02.14", versie: "basis", label: "B (B-08, PRP-007 met de aanvulling uit 0.6), A (ASM-21, ASM-22)", situatie: "to-be", wijziging: "CHG-011: variant → basis; naam was \"Vier controles uitvoeren\"; controle 3 naar ACT-02.14", wijziging_0_10: "CHG-015 (B-10): poort ook GOV-02 en waar nodig GOV-14 (PRP-032)"}
  - {id: "ACT-02.54", proces: "PRC-02", naam: "\"Backlog gereed\" controleren", rol: "ROL-02", input: "epics en taken", output: "zie ACT-01.57 (zonder het conventiebestand)", versie: "basis", label: "B (B-08, PRP-013)", situatie: "to-be", wijziging: "CHG-011: variant → basis; komt na ACT-02.14", wijziging_0_10: "CHG-015 (B-10): vervolg ACT-02.17 in plaats van einde"}
  - {id: "ACT-02.55", proces: "PRC-02", naam: "Wijziging globaal ontwerp vastleggen in een ADR", rol: "ROL-04", input: "bijgewerkte documenten uit ACT-02.6", output: "ADR met reden, gevolgen en geraakte documenten", versie: "basis", label: "B (B-08, PRP-017)", situatie: "to-be", nieuw_in: "0.4", wijziging: "CHG-011: variant → basis", wijziging_0_10: "CHG-015 (B-10): bij een profielwijziging een nieuw profiel-ADR; akkoord GOV-09 en per profiel (PRP-034)"}
  - {id: "ACT-02.56", proces: "PRC-02", naam: "Paginabrieven en ontwerp op elkaar afstemmen", rol: "ROL-03", input: "ontwerpen, brieven", output: "bijgewerkte brieven met een lijst van de verschillen", versie: "basis", label: "B (B-12: PRP-032)", situatie: "to-be", nieuw_in: "0.10"}
  - {id: "ACT-03.1", proces: "PRC-03", naam: "Deliverable ter goedkeuring indienen", rol: "producent", input: "deliverable; zo nodig het contextverslag als achtergrond (ASM-42, ASM-48)", output: "document op het issue, comment met samenvatting en de vraag om akkoord, goedkeuringskaart; bij een pakket (GOV-10, GOV-11, GOV-15) één kaart met een beoordeling per document; zo ook bij GOV-14 met ontwerp en brieven (ASM-37)", versie: "basis", label: "B (akkoord), F (werkwijze: `bpmn-conventies`, `architect-modeling`), B (B-08, PRP-003: pakket), A (ASM-37)", situatie: "to-be", wijziging: "CHG-011: pakket", wijziging_0_11: "CHG-018 (B-1): ook GOV-14 één kaart met een beoordeling per document (ASM-37)"}
  - {id: "ACT-03.2", proces: "PRC-03", naam: "Deliverable beoordelen en besluiten", rol: "ROL-01", input: "document, samenvatting", output: "akkoord, of wijzigingen nodig met commentaar; bij een pakket per document", versie: "basis", label: "B", situatie: "to-be", wijziging: "CHG-011: pakket"}
  - {id: "ACT-03.3", proces: "PRC-03", naam: "Goedkeuring vastleggen en melden", rol: "producent", input: "besluit", output: "status `Goedgekeurd (<datum>, Carlo)` in het document (bij een pakket alleen in de goedgekeurde documenten); melding aan ROL-02", versie: "basis", label: "F (AGENTS.md Socrates en Atlas: Goedgekeurd pas na zichtbare bevestiging; melden aan Dr. Evil)", situatie: "to-be"}
  - {id: "ACT-03.4", proces: "PRC-03", naam: "Vraag of opmerking van ROL-01 beantwoorden", rol: "producent", input: "comment van ROL-01", output: "antwoord; zo nodig aangepaste deliverable en een nieuwe kaart", versie: "basis", label: "F (skill `paperclip`), A (ASM-10)", situatie: "to-be"}
  - {id: "ACT-04.1", proces: "PRC-04", naam: "Ontvanger van de vraag bepalen", rol: "vrager", input: "vraag, routeringstabel", output: "ontvanger", versie: "basis", label: "B/F (zie routeringstabel)", situatie: "to-be"}
  - {id: "ACT-04.2", proces: "PRC-04", naam: "Vragen stellen (grill-ronde)", rol: "vrager", input: "vraag, of de context van de stap met de documenten waarop hij bouwt", output: "vraag-issue toegewezen aan de ontvanger (bij de toets: het toets-issue is van Atlas, de vrager, B-14: PRP-041; ⚠ M-17) met alle vragen van de eerste ronde, genummerd en elk met een aanbevolen antwoord; feiten zoekt de vrager zelf op; eigen werk wacht", versie: "basis", label: "B (vraag), A (ASM-08), F (blockers wekken bij `done`: skill `paperclip`)", situatie: "to-be", wijziging_0_12: "CHG-022 (B-15): grill-vorm (V1, V5)"}
  - {id: "ACT-04.3", proces: "PRC-04", naam: "Vragen beantwoorden", rol: "ontvanger", input: "vraag-issue, eigen goedgekeurde documenten", output: "antwoord per vraag met verwijzing naar ID's; de ontvanger beslist alleen in zijn eigen vakgebied (V3)", versie: "basis", label: "B, F (`requirements-clarification` voor Socrates)", situatie: "to-be", wijziging_0_12: "CHG-022 (B-15): per vraag, beslisregels V3"}
  - {id: "ACT-04.4", proces: "PRC-04", naam: "Wijzigingsverzoek of productvraag opstellen", rol: "ROL-03 (eisen) of ROL-04 (ontwerp)", input: "vraag, gevolgen", output: "wijzigingsverzoek met gevolgen voor de scope, of een productvraag met opties voor ROL-01", versie: "basis", label: "F (AGENTS.md Socrates en Atlas: een goedgekeurde eis of scope wijzigt alleen met akkoord van de gebruiker), B (B-15)", situatie: "to-be", wijziging_0_12: "CHG-022 (B-15, V3): ook een productkeuze gaat naar ROL-01 (GOV-12)"}
  - {id: "ACT-04.5", proces: "PRC-04", naam: "Antwoorden beoordelen", rol: "vrager", input: "antwoorden van de ronde", output: "per punt: beslist of nog open; of de ronde voortgang had (minstens één punt beslist)", versie: "basis", label: "B", situatie: "to-be", wijziging: "CHG-011: uitkomst vastgelopen vervalt (ASM-16)", wijziging_0_12: "CHG-022 (B-15, V2)"}
  - {id: "ACT-04.6", proces: "PRC-04", naam: "Volgende ronde stellen", rol: "vrager", input: "open punten en wat de antwoorden hebben vrijgemaakt", output: "volgende ronde vragen (grill-vorm) op hetzelfde vraag- of toets-issue", versie: "basis", label: "B (vragenloop)", situatie: "to-be", wijziging_0_12: "CHG-022 (B-15)"}
  - {id: "ACT-04.51", proces: "PRC-04", naam: "Rondes zonder voortgang tellen", rol: "vrager", input: "vraag-issue", output: "aantal rondes achter elkaar zonder voortgang", versie: "basis", label: "B (B-15, V2; was B-08, PRP-005)", situatie: "to-be", wijziging: "CHG-011: variant → basis", wijziging_0_12: "CHG-022 (B-15, V2): alleen rondes zonder voortgang tellen"}
  - {id: "ACT-04.52", proces: "PRC-04", naam: "Vastgelopen vraag escaleren", rol: "vrager", input: "vraag-issue met 2 rondes achter elkaar zonder voortgang", output: "escalatie-issue voor ROL-02", versie: "basis", label: "B (B-08, PRP-005), B (B-15)", situatie: "to-be", wijziging: "CHG-011: variant → basis"}
  - {id: "ACT-04.53", proces: "PRC-04", naam: "Escalatie met opties voorleggen", rol: "ROL-02", input: "escalatie-issue", output: "opties voor ROL-01", versie: "basis", label: "B (B-08, PRP-005), F (`escalation-management`)", situatie: "to-be", wijziging: "CHG-011: variant → basis"}
  - {id: "ACT-04.54", proces: "PRC-04", naam: "Escalatiebesluit doorgeven", rol: "ROL-02", input: "besluit", output: "antwoord voor de vrager; vraag-issue `done`", versie: "basis", label: "B (B-08, PRP-005)", situatie: "to-be", wijziging: "CHG-011: variant → basis"}
  - {id: "ACT-04.55", proces: "PRC-04", naam: "Contextverslag opstellen", rol: "vrager", input: "vraag- of toets-issue zonder open punten", output: "sectie in het document `contextverslag` op het eigen issue: wat vaststaat (met bron), wat beslist is en door wie, wat naar ROL-01 ging, documenten met revisie", versie: "basis", label: "B (B-15, V4), A (ASM-42)", situatie: "to-be", nieuw_in: "0.12"}
  - {id: "ACT-04.56", proces: "PRC-04", naam: "Contextverslag bevestigen of aanvullen", rol: "ontvanger", input: "contextverslag", output: "bevestiging, of aanvulling (een punt is anders of ontbreekt), als comment op het vraag- of toets-issue", versie: "basis", label: "B (B-15, V4), A (ASM-42)", situatie: "to-be", nieuw_in: "0.12"}
  - {id: "ACT-05.1", proces: "PRC-05", naam: "Afkeuringen tellen", rol: "producent", input: "afkeuring, geschiedenis van het issue", output: "aantal afkeuringen van deze deliverable (bij een pakket: per document)", versie: "basis", label: "B (B-08, PRP-006)", situatie: "to-be", wijziging: "CHG-011: label V → B; telling per document"}
  - {id: "ACT-05.2", proces: "PRC-05", naam: "Commentaar verwerken en deliverable herzien", rol: "producent", input: "commentaar, deliverable", output: "nieuwe revisie, versie verhoogd, regel in de wijzigingshistorie", versie: "basis", label: "B (terug naar de producent), F (`bpmn-conventies`: na feedback aanpassen, versie verhogen)", situatie: "to-be"}
  - {id: "ACT-05.3", proces: "PRC-05", naam: "Escalatie melden aan de orchestrator", rol: "producent", input: "deliverable, afkeuringen, commentaar", output: "escalatie-issue voor ROL-02", versie: "basis", label: "B (B-08, PRP-006)", situatie: "to-be", wijziging: "CHG-011: label V → B"}
  - {id: "ACT-05.4", proces: "PRC-05", naam: "Escalatie met opties voorleggen", rol: "ROL-02", input: "escalatie-issue", output: "opties voor ROL-01: scope aanpassen, andere aanpak, toelichting van ROL-01, stoppen", versie: "basis", label: "F (`escalation-management`; rolanalyse-orchestrator V8: trigger 1 blokkade, trigger 5 scope), B (B-08, PRP-006: de opties)", situatie: "to-be", wijziging: "CHG-011: label V → B"}
  - {id: "ACT-05.5", proces: "PRC-05", naam: "Besluit over de vastgelopen deliverable nemen", rol: "ROL-01", input: "opties", output: "besluit", versie: "basis", label: "B (escaleren naar jou)", situatie: "to-be"}
  - {id: "ACT-05.6", proces: "PRC-05", naam: "Besluit uitvoeren", rol: "ROL-02", input: "besluit", output: "opdracht aan de producent met het besluit, telling op 0; of gestopt", versie: "basis", label: "B (B-08, PRP-006)", situatie: "to-be", wijziging: "CHG-011: label V → B"}
  - {id: "ACT-06.1", proces: "PRC-06", naam: "Blokkade vastleggen", rol: "eigenaar van de taak", input: "reden", output: "taak `blocked` met wat er moet gebeuren en door wie", versie: "basis", label: "F (skill `paperclip`: blokkade altijd met naam en actie)", situatie: "to-be"}
  - {id: "ACT-06.2", proces: "PRC-06", naam: "Wachten op het blokkerende issue", rol: "eigenaar van de taak", input: "blocker", output: "taak wordt gewekt als het blokkerende issue `done` is", versie: "basis", label: "F (skill `paperclip`)", situatie: "to-be"}
  - {id: "ACT-06.3", proces: "PRC-06", naam: "Blokkade melden aan de orchestrator", rol: "eigenaar van de taak", input: "blokkade zonder eigenaar", output: "melding aan ROL-02", versie: "basis", label: "A (ASM-13)", situatie: "to-be"}
  - {id: "ACT-06.4", proces: "PRC-06", naam: "Blokkade oplossen of eigenaar toewijzen", rol: "ROL-02", input: "blokkade", output: "oplossing, of een issue voor de eigenaar van de oplossing", versie: "basis", label: "F (rolanalyse-orchestrator OR-07, SM-05; `dependency-management`)", situatie: "to-be"}
  - {id: "ACT-06.5", proces: "PRC-06", naam: "Blokkade escaleren", rol: "ROL-02", input: "blokkade die hij niet kan oplossen", output: "voorstel aan ROL-01", versie: "basis", label: "F (V8, trigger 1; `escalation-management`)", situatie: "to-be"}

beslissingen:
  # lokale ID's G-<proces>.<nr>; bpmn-conventies kent geen prefix voor beslissingen (zoals D1-D3 voor doelen)
  - {id: "G-01.1", proces: "PRC-01", vraag: "Bij wie komt de opdracht binnen?", uitkomsten: "Dr. Evil → ACT-01.2 · Socrates → ACT-01.51 → ACT-01.2", versie: "basis", label: "B (stap 1), B (B-08, PRP-001; OPEN-01 beantwoord)", wijziging: "CHG-011: Socrates begint niet meer zelf"}
  - {id: "G-01.4", proces: "PRC-01", vraag: "Vraagt de toets van Atlas om aanpassing van de use cases of de brieven?", uitkomsten: "nee → ACT-01.54 (daarna GOV-10) · use cases → ACT-01.9 · brieven of paginalijst → ACT-01.27; na 2 rondes escalatie (ACT-05.3 → GOV-08)", versie: "basis", label: "B (B-06), B (B-08, maximum: PRP-006), A (ASM-45)", nieuw_in: "0.4", wijziging: "CHG-011: nee → ACT-01.54 in plaats van GOV-02", wijziging_0_10: "CHG-015 (B-10): ook de brieven (PRP-031)"}
  - {id: "G-01.5", proces: "PRC-01", vraag: "Vraagt de toets van Atlas om aanpassing van de taken?", uitkomsten: "nee → ACT-01.57 · ja → terug naar ACT-01.20; na 2 rondes escalatie (conflict met Atlas: `escalation-management` trigger 2 → GOV-08)", versie: "basis", label: "B (B-08, PRP-027; maximum PRP-006)", nieuw_in: "0.8"}
  - {id: "G-01.6", proces: "PRC-01", soort: "beslissing", vraag: "Welk architectuurprofiel is goedgekeurd (GOV-15)?", uitkomsten: "P1 → ACT-01.60 · P2 → ACT-01.59 · P3 → ACT-01.10", versie: "basis", label: "B (B-12: PRP-034)", nieuw_in: "0.10"}
  - {id: "G-01.7", proces: "PRC-01", soort: "parallel", vraag: "Parallel splitsen: opdracht en design systeem", uitkomsten: "→ G-01.1 en → ACT-01.52", versie: "basis", label: "B (B-12: PRP-029)", nieuw_in: "0.10"}
  - {id: "G-01.8", proces: "PRC-01", soort: "parallel", vraag: "Parallel samenvoegen en splitsen: analysepakket overgedragen én design systeem aangeleverd", uitkomsten: "→ ACT-01.11 en → ACT-01.28", versie: "basis", label: "B (B-12: PRP-029)", nieuw_in: "0.10"}
  - {id: "G-01.9", proces: "PRC-01", soort: "parallel", vraag: "Parallel samenvoegen: architectuurkeuze en ontwerpen klaar", uitkomsten: "→ ACT-01.58", versie: "basis", label: "B (B-12: PRP-029)", nieuw_in: "0.10", opmerking: "alleen in de eerste doorloop; herwerk na een afkeuring bij GOV-15 loopt via PRC-05 en ACT-01.58 terug in het pakket, niet door deze samenvoeging (controle K10-02)"}
  - {id: "G-02.1", proces: "PRC-02", vraag: "Is de volgende wens duidelijk uit jouw volgorde?", uitkomsten: "ja → G-02.2 · nee → ACT-02.2 (GOV-07)", versie: "basis", label: "A (ASM-14)"}
  - {id: "G-02.2", proces: "PRC-02", vraag: "Zijn de eisen, use cases en paginabrieven van de wens al goedgekeurd?", uitkomsten: "alle drie → G-02.7 · eisen en use cases wel, brieven niet → ACT-02.15 · eisen wel, use cases niet → ACT-02.12 · eisen niet → ACT-02.3", versie: "basis", label: "F (OR-02), B (B-06)", wijziging_0_10: "CHG-015 (B-10): vraag ook naar de brieven (controle K10-01); een \"later\"-pagina uit PRC-01 heeft nog geen brief"}
  - {id: "G-02.3", proces: "PRC-02", vraag: "Raakt de wens het globale ontwerp of vraagt hij een zwaarder profiel?", uitkomsten: "nee → ACT-02.7 · ja → ACT-02.6 → ACT-02.55 (ADR, B-08: PRP-017), daarna ACT-02.7", versie: "basis", label: "B (B-02), A (ASM-09); door TL-V7 beslist Atlas over zijn eigen ontwerp (FND-017)", wijziging_0_10: "CHG-015 (B-10): ook profiel en groeisignalen (PRP-034)"}
  - {id: "G-02.5", proces: "PRC-02", vraag: "Vraagt de toets van Atlas om aanpassing van de use cases of de brieven?", uitkomsten: "nee → GOV-02 · use cases → ACT-02.12 · brieven → ACT-02.15; na 2 rondes escalatie (ACT-05.3 → GOV-08)", versie: "basis", label: "B (B-06), B (B-08, maximum: PRP-006), A (ASM-45)", nieuw_in: "0.4", wijziging_0_10: "CHG-015 (B-10): ook de brieven (PRP-031)"}
  - {id: "G-02.6", proces: "PRC-02", vraag: "Vraagt de toets van Atlas om aanpassing van de taken?", uitkomsten: "nee → ACT-02.54 · ja → terug naar ACT-02.11; na 2 rondes escalatie (zoals G-01.5)", versie: "basis", label: "B (B-08, PRP-027; maximum PRP-006)", nieuw_in: "0.8"}
  - {id: "G-02.8", proces: "PRC-02", soort: "beslissing", vraag: "Loopt er voor dit project al een doorloop van PRC-02? (een uitbreiding is gestart in ACT-02.1 en staat nog niet op 'in backlog', ACT-02.17)", uitkomsten: "nee → ACT-02.1 · ja → geen tweede start; bij een verzoek van ROL-01 zet Dr. Evil de gevraagde wens bovenaan de uitbreidingslijst en meldt hij dat op het verzoek (ASM-33)", versie: "basis", label: "A (ASM-33, ASM-47)", beslisser: "ROL-02 (ASM-47)", wijziging_0_12: "CHG-021 (B-4): beslisser Dr. Evil", nieuw_in: "0.11", bron: "FND-036"}
  - {id: "G-02.7", proces: "PRC-02", soort: "beslissing", vraag: "Is er een ontwerp nodig (minstens één geraakte pagina met ontwerpniveau \"ontwerp\")?", uitkomsten: "ja → ACT-02.16 · nee → ACT-02.4", versie: "basis", label: "B (B-10, UC2 stap 2), B (B-12: PRP-031)", nieuw_in: "0.10"}
  - {id: "G-04.1", proces: "PRC-04", vraag: "Vraagt het antwoord om een wijziging van iets wat ROL-01 goedkeurde, of om een productkeuze?", uitkomsten: "nee → ACT-04.5 · ja → ACT-04.4 → PRC-03 (GOV-12)", versie: "basis", label: "F; productkeuze: B (B-15, V3)", wijziging_0_12: "CHG-022 (B-15, V3)"}
  - {id: "G-04.2", proces: "PRC-04", vraag: "Zijn er nog open punten?", uitkomsten: "nee → ACT-04.55 (contextverslag) · ja → ACT-04.51 (rondes zonder voortgang tellen)", versie: "basis", label: "B (loop), B (B-08, PRP-005)", wijziging: "CHG-011: de uitkomst \"vastgelopen → PRC-06\" vervalt met ASM-16", wijziging_0_12: "CHG-022 (B-15, V4): einde via het contextverslag"}
  - {id: "G-04.51", proces: "PRC-04", vraag: "Zijn er 2 rondes achter elkaar zonder voortgang geweest?", uitkomsten: "nee → ACT-04.6 · ja → ACT-04.52", versie: "basis", label: "B (B-15, V2; was B-08, PRP-005)", wijziging: "CHG-011: variant → basis", wijziging_0_12: "CHG-022 (B-15, V2)"}
  - {id: "G-04.52", proces: "PRC-04", vraag: "Bevestigt de ontvanger het contextverslag?", uitkomsten: "ja → einde \"overeenstemming\" · nee, met aanvulling → ACT-04.51 (telt als ronde; ASM-48)", versie: "basis", label: "B (B-15, V4), A (ASM-48)", nieuw_in: "0.12"}
  - {id: "G-05.1", proces: "PRC-05", vraag: "Is dit de 3e afkeuring van deze deliverable (dus de 2e herziening afgekeurd)?", uitkomsten: "nee → ACT-05.2 · ja → ACT-05.3", versie: "basis", label: "B (vast aantal rondes), B (B-08, het aantal: PRP-006)", opmerking: "bij een pakket per document"}
  - {id: "G-06.1", proces: "PRC-06", vraag: "Is er een issue of eigenaar die de blokkade oplost?", uitkomsten: "ja, een ander issue → ACT-06.2 · nee of onduidelijk → ACT-06.3", versie: "basis", label: "F (skill `paperclip`)"}
  - {id: "G-06.2", proces: "PRC-06", vraag: "Kan ROL-02 de blokkade zelf oplossen?", uitkomsten: "ja → ACT-06.2 (wacht op het nieuwe issue) · nee → ACT-06.5", versie: "basis", label: "F (OR-07, SM-05, V8 trigger 1)"}

generieke_lanes:
  # lanes in de herbruikbare subprocessen; de aanroeper bepaalt wie het is
  - {naam: producent, rollen: [ROL-03, ROL-04, "ROL-01 (als ontwerper, ASM-28; nieuw in 0.10)"], gebruikt_in: [PRC-03, PRC-05]}
  - {naam: ontwerper, rollen: ["ROL-01 (ASM-28)"], gebruikt_in: [PRC-01, PRC-02], nieuw_in: "0.10", opmerking: "komt er via PRC-08 een designer- of frontend-agent, dan krijgt alleen deze lijst een rol erbij; PRC-04 krijgt dan een routeringsregel (uitbreidingsgids §3)"}
  - {naam: vrager, rollen: [ROL-02, ROL-03, ROL-04], gebruikt_in: [PRC-04]}
  - {naam: ontvanger, rollen: [ROL-02, ROL-03, ROL-04], gebruikt_in: [PRC-04], wijziging_0_12: "ROL-02 erbij: Dr. Evil is ontvanger als Atlas bij de toets van de taken een verschil vraagt (controle K12-22)"}
  - {naam: "eigenaar van de taak", rollen: [ROL-02, ROL-03, ROL-04], gebruikt_in: [PRC-06]}

vervallen_ids:
  # vervallen in een nieuwe versie; nooit hergebruiken. ACT- en G-ID's vervielen vóór goedkeuring; ROL-05, AGT-04, ASM-05, ASM-06, PRP-009 en PRP-012 stonden in de goedgekeurde 0.1; ASM-16 in de goedgekeurde 0.5; ASM-19 in de goedgekeurde 0.8 t/m 0.10 (CHG-018)
  - {id: ACT-04.7, reden: "PRC-04 gesplitst in basis en variant (controle E-05); nu ACT-04.52", versie: "0.3"}
  - {id: G-03.1, reden: "samengevoegd met de GOV van de aanroeper (controle E-13)", versie: "0.3"}
  - {id: ACT-01.53, reden: "B-06: use cases bij Socrates zitten nu in de basis (ACT-01.9 met toets ACT-01.23)", versie: "0.4"}
  - {id: G-01.2, reden: "TL-V6: de rol tech lead wordt door Atlas uitgevoerd; er hoeft geen agent te bestaan of te worden aangemaakt", versie: "0.4"}
  - {id: AGT-04, reden: "TL-V6: geen aparte agent voor de tech lead; een latere aparte agent krijgt een nieuw ID (PRP-018)", versie: "0.4"}
  - {id: ASM-05, reden: "TL-V6: er is geen aparte tech-lead-agent; Atlas rapporteert al aan Dr. Evil (Feit)", versie: "0.4"}
  - {id: ASM-06, reden: "TL-V6: Atlas heeft beide rollen, dus de vraag wie het laatste technische woord heeft vervalt", versie: "0.4"}
  - {id: PRP-011, reden: "B-10 (comment 6e69ec6e): het design systeem bij de start is besloten; ACT-01.52 gaat met hetzelfde ID naar de basis. Het voorstel vervalt, het ID wordt niet hergebruikt", versie: "0.10"}
  - {id: PRP-012, reden: "TL-V6: er hoeft geen tech-lead-agent te worden ingesteld", versie: "0.4"}
  - {id: PRP-016, reden: "alleen genoemd in comment 89ef8c71 (database: fundament vooraf, details per slice); niet gekozen, Carlo koos optie A (B-07)", versie: "0.4"}
  - {id: ROL-05, reden: "TL-V7: geen rol tech lead; de taken TL-01 t/m TL-09 horen bij ROL-04. Een latere aparte rol krijgt een nieuw ID (PRP-018)", versie: "0.5"}
  - {id: ACT-01.19, reden: "TL-V7: Atlas zou zijn eigen opdeling, API-contracten en plan meelezen (zelfcontrole); ACT-01.18 gaat nu direct naar GOV-06", versie: "0.5"}
  - {id: G-01.3, reden: "TL-V7: hoort bij ACT-01.19", versie: "0.5"}
  - {id: ACT-02.10, reden: "TL-V7: Atlas zou zijn eigen ontwerp per slice meelezen (zelfcontrole); ACT-02.9 gaat nu direct naar GOV-06", versie: "0.5"}
  - {id: G-02.4, reden: "TL-V7: hoort bij ACT-02.10", versie: "0.5"}
  - {id: ACT-01.55, reden: "TL-V7: variant, Atlas zou zijn eigen ontwerp van de slice toetsen (PRP-009 vervalt)", versie: "0.5"}
  - {id: ACT-02.52, reden: "TL-V7: variant, zoals ACT-01.55", versie: "0.5"}
  - {id: ASM-15, reden: "TL-V7: er is geen meelezen meer door Atlas vóór GOV-06", versie: "0.5"}
  - {id: PRP-009, reden: "TL-V7: er is geen tweede ontwerper; een toets door Atlas zou een zelfcontrole zijn. Komt er later een aparte agent (PRP-018), dan is een nieuw voorstel nodig", versie: "0.5"}
  - {id: ASM-16, reden: "B-08 (PRP-005): de vragenloop heeft een maximum van 2 rondes; 'de vrager oordeelt vastgelopen' is niet meer de uitgang. Een ontvanger die niet reageert blijft een blokkade (PRC-06)", versie: "0.8"}
  - {id: ASM-19, reden: "B-12, PRP-036: 4 akkoorden in UC1; CHG-018. Was: 'het model gebruikt de vorm met 3 akkoorden in UC1 (GOV-10, GOV-11, GOV-06)', bevestigd 2026-10-29 (kaart 66da5f92); vervallen door B-12 (0.10), vastgelegd in 0.11", versie: "0.11", wijziging_0_11: "CHG-018 (A-1): uit `aannames` naar `vervallen_ids`"}

profielen:
  # nieuw in 0.10 (CHG-015, besloten B-12: PRP-034). V = verplicht, O = optioneel, "-" = niet van toepassing. Toetsbasis voor GOV-11 en de poort (`quality-gates`).
  keuze: "Vraag 1: haalt een standaardplatform de eisen met configuratie, thema en plugins? ja → P1. Vraag 2: is er bedrijfslogica met eigen regels en toestanden? ja → P3, nee → P2. Payload (in code geconfigureerd headless CMS) → P2."
  groeisignalen: ["bedrijfsregels met toestanden die het platform niet dekt", "eigen gegevens met relaties buiten het contentmodel", "meer maatwerkcode dan configuratie", "koppelingen met transacties"]
  producten:
    - {product: "visie, requirements, bedrijfsregels, kern", act: [ACT-01.26, ACT-01.6, ACT-01.54], P1: V, P2: V, P3: V}
    - {product: "use cases met AC's", act: [ACT-01.9], P1: "V (lichte vorm, PRP-038)", P2: V, P3: V}
    - {product: "paginalijst en paginabrieven", act: [ACT-01.27], P1: V, P2: V, P3: V}
    - {product: "design systeem, sleutelpagina's, paginatypen", act: [ACT-01.52, ACT-01.28], P1: "V (templates en blokken)", P2: "V (componenten)", P3: V}
    - {product: "architectuurkeuze met profiel-ADR", act: [ACT-01.11], P1: V, P2: V, P3: V}
    - {product: "contentmodel en platformconfiguratie", act: [ACT-01.60], P1: V, P2: "- (bij een headless CMS in ACT-01.59)", P3: "-"}
    - {product: "componenten-, route- en dataontwerp", act: [ACT-01.59], P1: "-", P2: V, P3: "- (componenten per slice in ACT-01.18)"}
    - {product: "domeinmodel", act: [ACT-01.10], P1: "-", P2: "-", P3: V}
    - {product: "sequentiediagrammen", act: [ACT-01.12], P1: "O (alleen koppelingen, in ACT-01.60)", P2: "V voor kernflows (in ACT-01.59)", P3: V}
    - {product: "ontwerpklassendiagram", act: [ACT-01.13], P1: "-", P2: "-", P3: V}
    - {product: "databaseontwerp (B-07)", act: [ACT-01.24], P1: "-", P2: "V alleen bij eigen database (in ACT-01.59)", P3: V}
    - {product: "bouwcontract (TL-V4)", act: [ACT-01.17, ACT-02.8], P1: "V templatecontract (tabel); OpenAPI alleen waar echt een API is: eigen endpoints, koppelingen, headless CMS (B-17)", P2: "V API-contracten (OpenAPI met leesbare versie, B-17)", P3: "V API-contracten (OpenAPI met leesbare versie, B-17)", wijziging_0_13: "CHG-023 (B-17)"}
    - {product: "conventiebestand", act: [ACT-01.56], P1: V, P2: V, P3: V}
    - {product: "implementatieplan", act: [ACT-01.18, ACT-02.9], P1: V, P2: V, P3: V}

goedkeuringen:
  # ronde 2: ID, bevoegde rol en plek. Ronde 3 (0.6): informatie, criteria, gevolgen en escalatie (bpmn-rollen-en-skillmodel stap 5)
  # 0.8 (CHG-011, B-08): in PRC-01 alleen GOV-10, GOV-11 en GOV-06 (PRP-003). GOV-01, 02, 09, 03, 04, 05 en 13 alleen nog in PRC-02. Maximum 2 rondes besloten (PRP-006)
  - id: GOV-01
    naam: Akkoord analyse (requirements en bedrijfsregels)
    bevoegd: ROL-01
    processen: PRC-02
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-10'
    versie: basis
    label: B
    subproces: PRC-03
    informatie: "requirements.md (en business-rules.md), zo nodig de bijgewerkte visie, als document op het issue; samenvatting in 5 regels; belangrijkste beslissingen; open vragen; uitkomst van requirements-validation"
    criteria: elke eis heeft een ID, is toetsbaar en heeft een prioriteit; scope en buiten-scope kloppen; geen blokkerende open vraag
    bij_goedkeuring: Socrates zet de status op Goedgekeurd en schrijft de use cases (ACT-02.12)
    bij_afwijzing: 'PRC-05: terug naar Socrates met commentaar'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: requirements-analysis stap 7-9; B: maximum PRP-006 (B-08); B-12 (PRP-033: de wens komt van de uitbreidingslijst)'
    wijziging_0_12: 'CHG-021 (C-6): label B-12 in de bron'
    wijziging_0_10: "CHG-015 (B-10): ook een bijgewerkte visie (PRP-033)"
  - id: GOV-02
    naam: "Akkoord use cases en paginabrieven"
    bevoegd: ROL-01
    processen: PRC-02
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-10'
    versie: basis
    label: 'B (B-06: na toets door ROL-04)'
    subproces: PRC-03
    informatie: "use-cases.md; dekking FR → UC; pages.md met de geraakte pagina's, ontwerpniveau en brieven; het toetsresultaat van Atlas (ACT-02.13)"
    criteria: elke FR gedekt; elke UC heeft AC's met ID; hoofdpad, alternatieven en uitzonderingen; geen open opmerking van Atlas
    bij_goedkeuring: "Socrates meldt de goedkeuring; G-02.7: ontwerp nodig → ACT-02.16, anders vraagt Dr. Evil Atlas om de opdeling (ACT-02.4)"
    bij_afwijzing: "PRC-05: use cases → ACT-02.12; brieven of ontwerpniveau → ACT-02.15; Atlas toetst opnieuw (ACT-02.13)"
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'B: B-06; F: uml-use-cases (Goedkeuringsmoment)'
    wijziging_0_10: "CHG-015 (B-10): ook paginabrieven en ontwerpniveau (PRP-031, PRP-036)"
    wijziging_0_11: "CHG-018 (A-5): `bij_goedkeuring` volgt PRC-02: eerst G-02.7 (ontwerp nodig?), zoals G-02.2 en G-02.7 in `beslissingen`"
  - id: GOV-03
    naam: Akkoord domeinmodel
    bevoegd: ROL-01
    processen: PRC-02 (bij P3, als een wens het raakt)
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55)'
    wijziging_0_11: "CHG-018 (A-6): in PRC-02 alleen bij profiel P3 (B-12: PRP-034; PRC-02 \"GOV-09 en per profiel\")"
    versie: basis
    label: B
    subproces: PRC-03
    informatie: domain-model.md met artifact; GLOSSARY.md; in PRC-02 samen met het ADR (ACT-02.55)
    criteria: elk begrip herleidbaar tot een UC of BR; geen technische details; Engelse termen met _NL_
    bij_goedkeuring: Atlas zet STATUS.md op Goedgekeurd en gaat naar het volgende geraakte document, of naar ACT-02.7
    bij_afwijzing: 'PRC-05: terug naar Atlas'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: uml-domain-modelling (Goedkeuringsmoment); architect-modeling'
  - id: GOV-04
    naam: Akkoord sequentiediagrammen
    bevoegd: ROL-01
    processen: PRC-02 (bij P3, als een wens ze raakt)
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55)'
    wijziging_0_11: "CHG-018 (A-6): in PRC-02 alleen bij profiel P3 (B-12: PRP-034; PRC-02 \"GOV-09 en per profiel\")"
    versie: basis
    label: B
    subproces: PRC-03
    informatie: eerst de selectie van use cases (mini-goedkeuringsmoment in de skill), daarna sequences.md met artifact; in PRC-02 samen met het ADR (ACT-02.55)
    criteria: deelnemers en berichten passen bij het domeinmodel; alternatieven uitgewerkt; selectie dekt de kern (TL-V5)
    bij_goedkeuring: Atlas gaat naar het volgende geraakte document, of naar ACT-02.7
    bij_afwijzing: 'PRC-05: terug naar Atlas'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: uml-sequence-diagrams stap "selectie"; B: TL-V5'
  - id: GOV-05
    naam: Akkoord ontwerpklassendiagram
    bevoegd: ROL-01
    processen: PRC-02 (bij P3, als een wens het raakt)
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55)'
    wijziging_0_11: "CHG-018 (A-6): in PRC-02 alleen bij profiel P3 (B-12: PRP-034; PRC-02 \"GOV-09 en per profiel\")"
    versie: basis
    label: B
    subproces: PRC-03
    informatie: class-diagram.md, design-notes.md met artifact; in PRC-02 samen met het ADR (ACT-02.55)
    criteria: elke klasse herleidbaar tot een domeinconcept of uitbreidingspunt; berichten uit de sequentiediagrammen zijn methoden
    bij_goedkeuring: Atlas gaat naar het databaseontwerp als dat geraakt is, anders naar ACT-02.7
    bij_afwijzing: 'PRC-05: terug naar Atlas'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: uml-class-diagram stap 8'
  - id: GOV-06
    naam: "Akkoord bouwcontract per slice (API-contracten, of bij P1 het templatecontract)"
    bevoegd: ROL-01
    processen: PRC-01, PRC-02
    versie: basis
    label: B (TL-V4)
    subproces: PRC-03
    wijziging: 'CHG-011 (B-08): PRC-01 ook de inhoud en volgorde van slice 1 (PRP-003 punt 3); voorwaardelijk ook ontwerp en plan (PRP-028)'
    informatie: "P2 en P3: de leesbare versie van het API-contract, gemaakt uit het OpenAPI-bestand, met bovenaan de revisie van het bestand (B-17), en het OpenAPI-bestand erbij (ASM-53). P1: het templatecontract als tabel, en waar er echt een API is ook de leesbare versie van dat OpenAPI-bestand (B-17); de slice-indeling (welke use cases en AC's). PRC-01: de inhoud van slice 1 en de volgorde van de epics zijn onderdeel van het akkoord (PRP-003 punt 3). Het implementatieplan als achtergrond; geldt een voorwaarde van architect-implementation-plan stap 5 (breaking change, niet-compatibele wijziging, nieuwe afhankelijkheid, gevolgen voor beveiliging, privacy, kosten of prestaties, onduidelijk gedrag, grote wijziging), dan zijn het ontwerp per slice en het plan onderdeel van het akkoord en noemt Atlas de voorwaarde (PRP-028)"
    criteria: "elk veld en endpoint herleidbaar tot een goedgekeurde paginabrief, UC/AC of BR, niet tot mock data; foutformaten en statuscodes vast; waar er een OpenAPI-bestand is: de leesbare versie hoort bij de revisie van het bestand die erbij staat, en het bestand is geldig (ASM-52); PRC-01 slice 1 werkt van begin tot eind en de volgorde van de epics past bij de prioriteit van ROL-01"
    bij_goedkeuring: Atlas legt de goedkeuring vast; PRC-01 → Dr. Evil maakt de epics en taken (ACT-01.20); PRC-02 → Dr. Evil doet de vaste controles (ACT-02.53)
    bij_afwijzing: 'PRC-05: API-contract → ACT-01.17 / ACT-02.8; inhoud slice 1 → ACT-01.16; ontwerp of plan (bij een voorwaarde van stap 5) → ACT-01.18 / ACT-02.7 / ACT-02.9; daarna het plan bijwerken'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'B: TL-V4; B-08 (PRP-003 punt 3, PRP-020, PRP-028); B-12 (PRP-032, PRP-034); B-14 (PRP-043: bij P1 maakt architect-api-contracts het templatecontract per slice uit het contentmodel van architect-cms-configuratie)'
    wijziging_0_10: "CHG-015 (B-10): bouwcontract; bron per veld (PRP-032, PRP-034)"
    wijziging_0_12: "CHG-021 (A-5, C-6): PRP-043 en de labels B-12 in de bron"
    wijziging_0_13: "CHG-023 (B-17): je beoordeelt de leesbare versie, gemaakt uit het OpenAPI-bestand; het bestand ligt erbij en een nieuwe leesbare versie laat de kaart vervallen (aanname ASM-53, PRP-040)"
  - id: GOV-07
    naam: Keuze van de volgende wens
    bevoegd: ROL-01
    processen: PRC-02
    versie: basis
    label: B (TL-V2, B-09, B-13), A (ASM-35)
    wijziging_0_12: 'CHG-021 (C-9): labels B-13 en ASM-35'
    subproces: PRC-03
    wijziging: 'CHG-013 (B-09): moment van de vraag en de herinnering vastgelegd (FND-027)'
    moment: 'direct, één keer: zodra PRC-02 start (ACT-02.51, of een verzoek van ROL-01 zonder duidelijke wens) en de volgende wens niet uit de volgorde blijkt (B-09); niet wachten op het weekmoment. Start PRC-02 op het weekmoment, dan staat de vraag op het weekmoment-issue (ASM-25)'
    wijziging_0_11: 'CHG-019 (B-13): herinnering elke werkdag om 09:00 (ASM-35); start ook bij een verzoek van ROL-01; CHG-018 (A-3): de kandidaten komen van de uitbreidingslijst, in de volgorde van ROL-01 (B-12: PRP-033)'
    informatie: de vraag van Dr. Evil op een eigen issue, met de kandidaten van de uitbreidingslijst in de volgorde van ROL-01 (ACT-02.1; B-12, PRP-033)
    criteria: productbesluit van ROL-01; geen inhoudelijke criteria
    bij_goedkeuring: Dr. Evil gaat met de gekozen wens naar G-02.2
    bij_afwijzing: 'n.v.t.: ROL-01 kiest. Kiest hij nog niet, dan start PRC-02 niet'
    escalatie: 'geen. Antwoordt ROL-01 niet, dan staat de vraag elke werkdag om 09:00 in het herinneringsbericht van Dr. Evil (B-13, ASM-35) en op het weekmoment (B-09, ASM-24)'
    bron: 'B: TL-V2, B-09 (kaart e2fd31e9), B-13 (comment a690e8f3); F: weekmoment ("Herinner de gebruiker niet tussendoor."; botst met B-13, FND-037), escalation-management ("Een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment."); uitzondering via PRC-08 (`escalation-management`)'
  - id: GOV-12
    naam: Akkoord wijzigingsverzoek of productkeuze (eis, ontwerp of product)
    wijziging_0_12: "CHG-022 (B-15, V3): ook een productkeuze uit een grill-sessie tussen agents gaat via dit akkoord naar ROL-01"
    bevoegd: ROL-01
    processen: PRC-02, PRC-04
    versie: basis
    label: 'F (AGENTS.md Socrates en Atlas); productkeuze: B (B-15, V3)'
    subproces: PRC-03
    informatie: 'het wijzigingsverzoek, of de productvraag met opties uit een grill-sessie tussen agents (B-15): wat wijzigt, welke ID''s, gevolgen voor scope, eisen, ontwerp en tests'
    criteria: 'gevolgen volledig; de goedgekeurde versie blijft staan tot de nieuwe is goedgekeurd; bij een productkeuze opties met gevolgen en een aanbeveling (B-15)'
    bij_goedkeuring: 'nieuwe versie wordt Goedgekeurd; melding aan Dr. Evil met de gewijzigde ID''s; bij een productkeuze gaat de sessie verder met de gekozen optie (B-15)'
    bij_afwijzing: 'het goedgekeurde document blijft ongewijzigd; de vrager krijgt dat als antwoord; bij een productkeuze kiest ROL-01 zelf of vraagt om andere opties'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: requirements-clarification sectie B; voor Atlas B (B-08, PRP-022); B-12: PRP-032'
    wijziging_0_10: "ook als een brief of ontwerp moet veranderen omdat het bouwcontract het niet kan dragen (B-12: PRP-032; zoals in PRC-02 0.10). Nagetragen in 0.11 (CHG-018)"
    wijziging_0_11: "CHG-018 (A-5): `wijziging_0_10` toegevoegd, gelijk aan PRC-02 (GOV-12 in de tabel Beslissingen en goedkeuringen)"
  - id: GOV-08
    naam: Escalatiebesluit
    bevoegd: ROL-01
    processen: PRC-04, PRC-05, PRC-06; PRC-01 en PRC-02 (toets van de taken, G-01.5 en G-02.6); PRC-02 (controle 1 van ACT-02.53)
    versie: basis in PRC-04, PRC-05 en PRC-06; in PRC-01 en PRC-02 na 2 rondes op de toets van de taken; in PRC-02 ook na 2 rondes op controle 1 van ACT-02.53
    label: 'B (escaleren naar ROL-01); maximum: B (B-08, PRP-005, PRP-006); in PRC-04: B (B-15, V2: 2 rondes achter elkaar zonder voortgang)'
    wijziging_0_12: 'CHG-022 (B-15, V2): in PRC-04 tellen alleen rondes zonder voortgang'
    wijziging: 'CHG-011: ook in de basis van PRC-04; ook na 2 rondes op de toets van de taken (G-01.5, G-02.6)'
    subproces: PRC-03
    informatie: één bericht met de trigger, wat er speelt, wat geblokkeerd is, de opties en de aanbeveling van Dr. Evil
    criteria: één besluit per bericht
    bij_goedkeuring: 'Dr. Evil voert het besluit uit (ACT-04.54, ACT-05.6); de telling begint opnieuw (ASM-11). Bij de toets van de taken (G-01.5, G-02.6): Dr. Evil past de taken aan volgens het besluit, of laat ze zoals ze zijn (ACT-01.20 / ACT-02.11), en gaat door naar ACT-01.57 / ACT-02.54. Bij controle 1 van ACT-02.53: Dr. Evil volgt het besluit (terug naar Atlas, ACT-02.9, of door naar ACT-02.11)'
    bij_afwijzing: 'n.v.t.: ROL-01 kiest een optie of geeft een eigen besluit'
    escalatie: 'geen: ROL-01 is het hoogste niveau'
    bron: 'F: escalation-management (Hoe escaleer je)'
  - id: GOV-09
    naam: "Akkoord architectuurkeuze en architectuurprofiel"
    bevoegd: ROL-01
    processen: "PRC-01 (onderdeel van GOV-15), PRC-02 (als een wens het globale ontwerp of het profiel raakt)"
    versie: basis
    label: 'F (Atlas: akkoord per fase)'
    subproces: PRC-03
    wijziging: 'CHG-005: database apart in GOV-13. CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55). Noot (CHG-018): dit is historisch; sinds 0.10 is GOV-09 in PRC-01 onderdeel van GOV-15, niet meer van GOV-11 (zie `processen`)'
    wijziging_0_11: "CHG-018 (A-5): noot bij de historische `wijziging`"
    informatie: "architecture.md, ADR's met het profiel-ADR, context- en containerdiagram; in PRC-02 het ADR van de wijziging (ACT-02.55), bij een profielwijziging het nieuwe profiel-ADR en de bijgewerkte use cases"
    criteria: elke keuze herleidbaar tot een FR/NFR; 2 tot 3 serieuze alternatieven afgewogen; risico's benoemd
    bij_goedkeuring: Atlas zet de status op Goedgekeurd en gaat naar het volgende geraakte document, of naar ACT-02.7
    bij_afwijzing: 'PRC-05: terug naar Atlas'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'F: architect-architecture-choice stap 9-11; B-12 (PRP-034: profiel)'
    wijziging_0_12: 'CHG-021 (C-6): label B-12 in de bron'
    wijziging_0_10: "CHG-015 (B-10): met het architectuurprofiel (PRP-034)"
  - id: GOV-10
    naam: "Akkoord analysepakket (requirements, use cases, bedrijfsregels, kern, visie, paginalijst met brieven)"
    bevoegd: ROL-01
    processen: PRC-01
    versie: basis
    label: 'B (B-08: PRP-003, PRP-015)'
    subproces: PRC-03
    wijziging: 'CHG-011: variant → basis; vervangt GOV-01 en GOV-02 in PRC-01'
    informatie: "requirements.md met de markering \"kern\", use-cases.md met het toetsresultaat van Atlas (ACT-01.23, ook over de brieven), business-rules.md, vision.md met het projecttype, pages.md (paginalijst met \"nu\"/\"later\", ontwerpniveau en paginabrieven); samenvatting; open vragen; uitkomst van requirements-validation. Eén kaart met een beoordeling per document"
    criteria: "als GOV-01 en GOV-02; de kern is gemarkeerd; de \"nu\"-pagina's dekken de kern; elke \"nu\"-pagina heeft een brief; het ontwerpniveau volgt de criteria van PRP-031"
    bij_goedkeuring: Socrates zet de goedgekeurde documenten op Goedgekeurd en meldt het pakket (ACT-01.7); Dr. Evil draagt over aan Atlas (ACT-01.8)
    bij_afwijzing: "PRC-05, per document: requirements → ACT-01.6; visie → ACT-01.26; use cases → ACT-01.9 en opnieuw ACT-01.23; paginalijst en brieven → ACT-01.27 en opnieuw ACT-01.23; kern → ACT-01.54. Geraakte latere documenten werkt Socrates mee bij (ASM-18)"
    escalatie: na de 3e afkeuring van een document ACT-05.3 → GOV-08
    bron: 'B: B-08 (PRP-003, PRP-015); B-12 (PRP-034, PRP-036)'
    wijziging_0_12: 'CHG-021 (C-6): label B-12 in de bron'
    wijziging_0_10: "CHG-015 (B-10): uitgebreid met visie en paginalijst (PRP-036)"
  - id: GOV-11
    naam: "Akkoord technisch ontwerp volgens profiel als pakket"
    bevoegd: ROL-01
    processen: "PRC-01 (pakket), PRC-02 (bij P1 en P2 per document)"
    versie: basis
    label: 'B (B-08, PRP-003)'
    subproces: PRC-03
    wijziging: 'CHG-011: variant → basis; vervangt GOV-09, 03, 04, 05 en 13 in PRC-01'
    informatie: "het technisch ontwerp van het goedgekeurde profiel: P1 contentmodel en platformconfiguratie (ACT-01.60); P2 componenten-, route- en dataontwerp (ACT-01.59); P3 domeinmodel met GLOSSARY.md, sequentiediagrammen, ontwerpklassendiagram en databaseontwerp (ACT-01.10, 01.12, 01.13, 01.24). Eén kaart met een beoordeling per document. In PRC-02 bij P1 en P2 per geraakt document"
    criteria: "bij P3 als GOV-03, 04, 05 en 13; bij P1 en P2: elk paginatype en elke brief heeft een plek in het ontwerp; de producten passen bij de profieltabel in `profielen` (later ook in `architectuurprofielen`)"
    bij_goedkeuring: Atlas zet de goedgekeurde documenten op Goedgekeurd en meldt het goedgekeurde technisch ontwerp (ACT-01.14)
    bij_afwijzing: "PRC-05, per document naar de eigen activiteit (ACT-01.60 / 01.59 / 01.10 / 01.12 / 01.13 / 01.24); latere geraakte documenten werkt Atlas mee bij (ASM-18)"
    escalatie: na de 3e afkeuring van een document ACT-05.3 → GOV-08
    bron: 'B: B-08 (PRP-003); B-12 (PRP-034, PRP-036)'
    wijziging_0_12: 'CHG-021 (C-6): label B-12 in de bron'
    wijziging_0_10: "CHG-015 (B-10): technisch ontwerp volgens profiel, zonder architectuurkeuze (PRP-034, PRP-036)"
    wijziging_0_11: "CHG-018 (A-5): `bij_goedkeuring` zegt \"technisch ontwerp\" in plaats van \"kernontwerp\", zoals ACT-01.14 (Goedgekeurd technisch ontwerp melden)"
  - id: GOV-13
    naam: Akkoord databaseontwerp
    bevoegd: ROL-01
    processen: PRC-02 (bij P3, als een wens het raakt)
    wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55)'
    wijziging_0_11: "CHG-018 (A-6): in PRC-02 alleen bij profiel P3 (B-12: PRP-034; PRC-02 \"GOV-09 en per profiel\"). Bij P2 met een eigen database valt het databaseontwerp onder GOV-11 (ACT-01.59)"
    versie: basis
    label: 'B (B-07), F (`architect-database`: verplicht goedkeuringsmoment)'
    subproces: PRC-03
    nieuw_in: '0.4'
    informatie: databaseontwerp met ER-diagram en artifact; in PRC-02 samen met het ADR (ACT-02.55)
    criteria: mapping van klassen naar tabellen volledig; NFR's voor volume, privacy en bewaartermijnen verwerkt; zelfcontrole van de skill gedaan
    bij_goedkeuring: Atlas gaat naar ACT-02.7
    bij_afwijzing: 'PRC-05: terug naar Atlas'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'B: B-07; F: architect-database stap 7-8'
  - id: GOV-14
    naam: Akkoord paginaontwerp
    bevoegd: ROL-01
    processen: PRC-02
    versie: basis
    label: 'B (B-12: PRP-031, PRP-036), A (ASM-28), A (ASM-37, bevestigd: B-14)'
    subproces: PRC-03
    nieuw_in: '0.10'
    informatie: "de ontwerpen van de pagina's met ontwerpniveau \"ontwerp\" en de bijgewerkte patroonbibliotheek, voor zover niet door ROL-01 zelf gemaakt; de bijgewerkte paginabrieven met de lijst van verschillen (ACT-02.56). Eén kaart met een oordeel per document: het ontwerp van de ontwerper, de brieven van Socrates. Elke producent herstelt zijn eigen document; Dr. Evil gaat pas verder (ACT-02.4) als elk document een oordeel heeft (ASM-37, zoals ASM-26 bij GOV-15)"
    wijziging_0_11: "CHG-018 (B-1): GOV-14 is één kaart met een oordeel per document, met twee producenten; de regel van ASM-26 geldt ook hier (ASM-37, aanname)"
    criteria: past binnen het design systeem; elk nieuw patroon of elke nieuwe component staat in de patroonbibliotheek; brief en ontwerp zeggen hetzelfde over gegevens en acties; mock data is gemarkeerd als niet bindend
    bij_goedkeuring: Dr. Evil vraagt Atlas om de opdeling (ACT-02.4)
    bij_afwijzing: 'PRC-05: ontwerp → ACT-02.16; brieven → ACT-02.56'
    escalatie: na de 3e afkeuring ACT-05.3 → GOV-08
    bron: 'B: B-10 (UC2 stap 2); B-12: PRP-031, PRP-036'
  - id: GOV-15
    naam: Akkoord "Richting" als pakket (architectuurkeuze met profiel, eerste paginaontwerpen, bijgewerkte brieven)
    bevoegd: ROL-01
    processen: PRC-01
    versie: basis
    label: 'B (B-12: PRP-036, PRP-034), A (ASM-26)'
    subproces: PRC-03
    nieuw_in: '0.10'
    informatie: "architecture.md met ADR's, het profiel-ADR (P1, P2 of P3) met redenen en groeisignalen, context- en containerdiagram (ACT-01.11); ontwerpen van de sleutelpagina's en paginatypen met de patroonbibliotheek (ACT-01.28), voor zover niet door ROL-01 zelf gemaakt; bijgewerkte paginabrieven met de lijst van verschillen (ACT-01.58). Eén kaart met een beoordeling per document"
    criteria: als GOV-09; het profiel volgt uit de criteria van PRP-034 en het projecttype; het ontwerp past binnen het design systeem en is met het profiel te bouwen; brief en ontwerp zeggen hetzelfde
    bij_goedkeuring: G-01.6, Atlas maakt het technisch ontwerp van het goedgekeurde profiel
    bij_afwijzing: 'PRC-05, per document: architectuur of profiel → ACT-01.11; ontwerp → ACT-01.28; brieven → ACT-01.58. Een ander profiel: Atlas werkt de ADR''s bij; is het zwaarder dan het projecttype, dan werkt Socrates de use cases bij naar de volledige vorm (ASM-18, ASM-26). Na de herziening gaat het document via ACT-01.58 terug in hetzelfde pakket, niet opnieuw door G-01.9'
    escalatie: na de 3e afkeuring van een document ACT-05.3 → GOV-08
    bron: 'B: B-10 (UC1 stap 2 en 4); B-12: PRP-034, PRP-036'

grillmomenten:
  # nieuw in 0.12 (CHG-022, B-15, B-16). Lokale nummers: bpmn-conventies kent geen prefix, zoals D1-D3 bij doelen.
  # GS5-GS8, GS12, GS13 en GS15 stonden in het eerste concept en vervallen door B-16 (optie A); de nummers worden niet hergebruikt.
  # criterium ASM-40 (B-16); geen open punten: geen sessie en geen verslag (ASM-41, B-16); contextverslag ASM-42; telregel ASM-43. Werkwijze: vragen-en-akkoordrondes; met ROL-01 in de vorm van grilling.
  # Ook elke vraag tussen agents (PRC-04) is een grill-sessie (B-15 V1).
  - {id: GS1, begint_bij: "ACT-01.3", uitvoerder: "AGT-02", met: "ROL-01", waarover: "plan, bedrijf, domein, visie, projecttype, paginalijst nu/later, kern", dekt_ook: [ACT-01.6, ACT-01.26, ACT-01.27, ACT-01.54], route: "ACT-01.4 / ACT-01.5", stand: "bestond (grilling); nieuw: contextverslag en telling", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS2, begint_bij: "ACT-01.9", uitvoerder: "AGT-02", met: "ROL-01", waarover: "use cases en acceptatiecriteria", dekt_ook: [], route: "ACT-01.4 / ACT-01.5", stand: "bestond (uml-use-cases, grill-sessies); nieuw: contextverslag", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS3, begint_bij: "ACT-01.23", uitvoerder: "AGT-03", met: "AGT-02", waarover: "use cases en paginabrieven: genoeg om op te ontwerpen?", dekt_ook: [], route: "PRC-04 op het toets-issue (ASM-45)", stand: "nieuw (B-15 V1, B-16)", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS4, begint_bij: "ACT-01.11", uitvoerder: "AGT-03", met: "ROL-01", waarover: "architectuurkeuze en profiel: stack, hosting, budget, groei", dekt_ook: [], route: "ACT-01.21 / ACT-01.22", stand: "bestond (architect-architecture-choice stap 2); nieuw: contextverslag", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS9, begint_bij: "ACT-02.3", uitvoerder: "AGT-02", met: "ROL-01", waarover: "eisen van de wens, ontwerpbehoefte", dekt_ook: [ACT-02.15], route: "rechtstreeks op het eigen issue (routeringstabel PRC-04)", stand: "nieuw: bij ACT-02.3 stond geen grilling", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS10, begint_bij: "ACT-02.12", uitvoerder: "AGT-02", met: "ROL-01", waarover: "use cases van de wens", dekt_ook: [], route: "rechtstreeks op het eigen issue", stand: "bestond (uml-use-cases); nieuw: contextverslag", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS11, begint_bij: "ACT-02.13", uitvoerder: "AGT-03", met: "AGT-02", waarover: "use cases en paginabrieven van de wens", dekt_ook: [], route: "PRC-04 op het toets-issue (ASM-45)", stand: "nieuw (B-15 V1, B-16)", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: GS14, begint_bij: "ACT-02.6 (alleen als architectuur of profiel verandert)", uitvoerder: "AGT-03", met: "ROL-01", waarover: "waarom de architectuur of het profiel moet veranderen", dekt_ook: [ACT-02.55], route: "rechtstreeks op het eigen issue", stand: "nieuw (B-16: alleen bij een wijziging van architectuur of profiel; komt zelden voor)", label: "B (B-15, B-16)", nieuw_in: "0.12"}
  - {id: geen, stappen: "ROL-01 zelf (ACT-01.1, 01.5, 01.22, 01.28, 01.52, 02.2, 02.16, 03.2, 05.5); doorgeven en melden (ACT-01.2, 01.51, 01.7, 01.8, 01.14, 01.15, 02.4, 03.1, 03.3); controleren, tellen en poorten (ACT-01.25, 01.57, 02.14, 02.51, 02.53, 02.54, PRC-05, PRC-06); lijsten (ACT-01.29, 02.1, 02.17); eigen werk in dezelfde context (dekt_ook, ACT-02.55)", reden: "geen context van een andere partij, of de context is al in een eerdere sessie verzameld; een vraag die toch opkomt gaat via PRC-04 en is dan ook een grill-sessie", label: "B (B-16)", nieuw_in: "0.12"}
  - {id: vervallen, stappen: "GS5 (ACT-01.58) en GS12 (ACT-02.56): Socrates met de ontwerper over brieven en ontwerp; GS6 (ACT-01.10, 01.59, 01.60), GS7 (ACT-01.16) en GS13 (ACT-02.5): Atlas met Socrates bij technisch ontwerp en slices; GS8 (ACT-01.20) en GS15 (ACT-02.11): Dr. Evil met Atlas over de taken", reden: "GS5, GS12: een verschil tussen brief en ontwerp komt bij het akkoord van ROL-01 (GOV-15, GOV-14) toch op tafel; is er een echt verschil, dan stelt Socrates een vraag. GS6, GS7, GS13: Atlas heeft Socrates net gegrild bij de toets (GS3, GS11) en ROL-01 heeft het pakket goedgekeurd. GS8, GS15: Atlas toetst de taken al (B-08: PRP-027). Een vraag die toch opkomt, gaat via PRC-04 en is dan een grill-sessie", label: "B (B-16)", nieuw_in: "0.12"}

capabilities:
  # ronde 3 (0.6). Een capability is een vermogen; de skill is de werkwijze die het levert
  - {id: CAP-01, naam: Intake en overdracht van werk, omschrijving: Een opdracht of resultaat registreren en zelfstandig leesbaar overdragen aan de rol die erover gaat}
  - {id: CAP-02, naam: Requirementsanalyse, omschrijving: 'Onderzoek, vragen en een toetsbaar requirements-document met bedrijfsregels'}
  - {id: CAP-03, naam: Use cases met acceptatiecriteria opstellen, omschrijving: Eisen vertalen naar use cases met UC- en AC-ID's}
  - {id: CAP-04, naam: Use cases toetsen op ontwerpbaarheid, omschrijving: 'Beoordelen of een use case genoeg informatie bevat om op te ontwerpen (hoofdpad, uitzonderingen, gegevens), zonder de use case zelf te wijzigen'}
  - {id: CAP-05, naam: Architectuurkeuze, omschrijving: 'Drivers, alternatieven, keuze, ADR''s, context- en containerdiagram'}
  - {id: CAP-06, naam: Domeinmodellering, omschrijving: Domeinmodel en Engelse termen in GLOSSARY.md}
  - {id: CAP-07, naam: Gedragsmodellering, omschrijving: Sequentiediagrammen voor de use cases}
  - {id: CAP-08, naam: Structuurontwerp, omschrijving: 'Ontwerpklassendiagram; modules, componenten en interfaces van een slice'}
  - {id: CAP-09, naam: Databaseontwerp, omschrijving: Logisch en fysiek databasemodel}
  - {id: CAP-10, naam: Opdelen in vertical slices, omschrijving: 'Use cases en AC''s verdelen over slices die van begin tot eind werken, met technische volgorde en afhankelijkheden'}
  - {id: CAP-11, naam: Bouwcontract ontwerpen, omschrijving: 'Het bouwcontract per slice: API-contracten (routes, berichten, foutformaten) als OpenAPI-bestand met een leesbare versie (B-17), of bij P1 het templatecontract, dat de project owner kan goedkeuren en de frontend kan gebruiken (GOV-06; PRP-032, PRP-034)', wijziging_0_11: 'CHG-018 (A-8): naam was "API-contracten ontwerpen"; omschrijving volgt het bouwcontract (B-12: PRP-032, PRP-034)', wijziging_0_13: "CHG-023 (B-17): OpenAPI"}
  - {id: CAP-12, naam: Implementatieplanning, omschrijving: Technische werkpakketten met afhankelijkheden en AC-verwijzingen als invoer voor de backlog}
  - {id: CAP-13, naam: Backlog opbouwen, omschrijving: 'Epics en taken met één eigenaar, acceptatiecriteria en afhankelijkheden in Paperclip'}
  - {id: CAP-14, naam: Poortcontrole, omschrijving: Controleren of het afgesproken bewijs op het issue staat voordat werk door mag}
  - {id: CAP-15, naam: 'Goedkeuring aanvragen, vastleggen en melden', omschrijving: 'Deliverable indienen, status bijwerken na zichtbare goedkeuring, melden aan Dr. Evil'}
  - {id: CAP-16, naam: Productbesluit en antwoord (mens), omschrijving: 'Opdracht geven, kiezen, goedkeuren, vragen beantwoorden. Alleen de project owner'}
  - {id: CAP-17, naam: Vragen tussen agents afhandelen, omschrijving: 'Ontvanger bepalen, vragen stellen in grill-vorm, beantwoorden, antwoorden beoordelen, wijzigingsverzoek of productvraag opstellen, contextverslag opstellen en bevestigen (0.12, B-15)'}
  - {id: CAP-18, naam: Escaleren en besluit voorbereiden, omschrijving: Een besluit buiten de eigen bevoegdheid met opties voorleggen en het besluit uitvoeren}
  - {id: CAP-19, naam: Blokkades en afhankelijkheden bewaken, omschrijving: 'Blokkade vastleggen, eigenaar vinden, wachten op het blokkerende issue'}
  - {id: CAP-20, naam: Volgorde en flow bewaken, omschrijving: 'De volgende wens van de uitbreidingslijst halen in de volgorde van de project owner; de open taken van de lopende slice tellen (ACT-02.51); het herinneringsbericht om 09:00 (B-13)', wijziging_0_12: 'CHG-021 (A-4)'}
  - {id: CAP-21, naam: Ontwerpbesluiten vastleggen, omschrijving: 'ADR met reden, gevolgen en geraakte documenten'}
  - {id: CAP-22, naam: Ontwikkelafspraken vastleggen, omschrijving: 'Codeconventies, projectstructuur, teststrategie en definition of done voor een taak (B-08, PRP-010)'}
  - {id: CAP-23, naam: Rondes tellen en begrenzen, omschrijving: 'Afkeuringen per deliverable tellen (na 2 escaleren) en in een vragenloop of grill-sessie de rondes zonder voortgang tellen (na 2 achter elkaar escaleren, B-15)', wijziging_0_12: 'CHG-022 (B-15, V2)'}
  - {id: CAP-24, naam: "Paginalijst en paginabrieven opstellen", omschrijving: "Pagina's afleiden uit visie en use cases, \"nu\" en \"later\" voorstellen, ontwerpniveau bepalen, paginabrieven schrijven en afstemmen op het ontwerp", nieuw_in: "0.10"}
  - {id: CAP-25, naam: "Paginaontwerp", omschrijving: "Design systeem, paginatypen en sleutelpagina's visueel ontwerpen, grafisch (in de regel in Claude Design, met een export als vaste versie op het issue) of in code met mock data", nieuw_in: "0.10", wijziging_0_12: "CHG-021 (A-4): Claude Design en export (B-13, B-14: PRP-042)"}
  - {id: CAP-26, naam: "Contentmodel en platformconfiguratie", omschrijving: "Contenttypen, velden, templates en blokken, plugins en hosting van een CMS of platform (profiel P1)", nieuw_in: "0.10"}
  - {id: CAP-27, naam: "Componenten-, route- en dataontwerp", omschrijving: "Modules en componenten, routes, datastroom en kernsequenties van een component-app (profiel P2)", nieuw_in: "0.10"}

skills:
  # sinds 0.10 (B-11, CHG-016): een skill heet bij zijn naam (veld naam, uniek); geen SKL-nummer meer. oud_nummer alleen om oudere documenten te lezen.
  # ronde 3 (0.6). status per capability (dekking): bestaat | uitbreiden | koppelen | nieuw | onbekend.
  # Bron: API desiredSkills (2026-10-28) en de SKILL.md-bestanden. werking: niet vastgesteld voor alle skills (OPEN-11).
  # sleutel: company/... = company/ebc2229f-9614-4909-b8f8-7b863f430959/...; github/... = github/1148788086/<hash>/...
  - naam: requirements-orchestration
    oud_nummer: SKL-01  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../requirements-orchestration
    gebruikers:
      - AGT-01
    doel: Enige loket; wens via Socrates en goedkeuring naar Atlas leiden
    dekking:
      - {cap: CAP-01, status: bestaat, bron: 'SKILL.md (Intake, stap 1 en 4); API desiredSkills 2026-10-28'}
      - {cap: CAP-01, status: uitbreiden, activiteiten: [ACT-01.2], besluit: 'B-13', bron: 'Te maken: bij een opdracht voor een nieuwe klant eerst het Paperclip-project aanmaken met de repository van ROL-01, als Socrates dat nog niet deed (ASM-31, ASM-34). Of Dr. Evil een project mag aanmaken, is niet vastgesteld (OPEN-15, M-14)', nieuw_in: '0.11'}
    input: nieuwe wens, goedgekeurde documenten
    output: backlog-issue, overdracht aan Socrates of Atlas
    afhankelijkheden:
      - overdracht
      - backlog-management
    validatie: wens in de woorden van de gebruiker; Atlas pas na zichtbare goedkeuring
    werking: niet vastgesteld (OPEN-11)
  - naam: requirements-analysis
    oud_nummer: SKL-02  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../requirements-analysis
    gebruikers:
      - AGT-02
    doel: Toetsbaar, traceerbaar requirements-document
    dekking:
      - {cap: CAP-02, status: bestaat, bron: SKILL.md (stappen 1-9); API desiredSkills 2026-10-28}
      - {cap: CAP-02, status: uitbreiden, activiteiten: [ACT-01.6], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md stap 7 (voorleggen; "ga niet door zonder goedkeuring") en stap 9 (use cases pas na goedkeuring). In PRC-01 geen eigen stop: het akkoord is GOV-10 (controle-model-v08 L-01)'}
      - {cap: CAP-02, status: uitbreiden, activiteiten: [ACT-01.54], besluit: 'B-08 (PRP-015)', bron: 'SKILL.md kent geen markering "kern" (PRP-015). De vraag naar ontwerp en huisstijl (PRP-011) is uitgesteld'}
      - {cap: CAP-02, status: uitbreiden, activiteiten: [ACT-01.26, ACT-01.3, ACT-02.3], besluit: 'B-12 (PRP-029, PRP-033, PRP-034)', bron: 'zie wijziging_0_10: visie met projecttype (ACT-01.26), de vraag naar het design systeem (ACT-01.3), de visie bijwerken waar nodig (ACT-02.3)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-3, melding M-B2)'}
    input: opdracht, antwoorden, bestaande documentatie
    output: requirements.md
    afhankelijkheden:
      - grilling
      - requirements-validation
      - domain-modeling
    validatie: elke eis een ID, toetsbaar, MoSCoW; requirements-validation uitgevoerd
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): visie met projecttype (ACT-01.26) en de vraag naar het design systeem (ACT-01.3/01.4); B-10, PRP-029, PRP-034"
    wijziging_0_11: "CHG-018 (C-1, C-3): dekkingsregel voor ACT-01.26, ACT-01.3 en ACT-02.3; koppeling bij ACT-01.3 en ACT-02.3 op uitbreiden. ACT-01.4 heeft de skill niet: de vraag zelf stelt Socrates in ACT-01.4 met grilling en paperclip"
  - naam: domain-analysis
    oud_nummer: SKL-03  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../domain-analysis
    gebruikers:
      - AGT-02
    doel: Bedrijfsregels en levenscyclus in bedrijfstaal
    dekking:
      - {cap: CAP-02, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
    input: requirements, antwoorden
    output: business-rules.md
    afhankelijkheden:
      - requirements-analysis
    validatie: elke regel een BR-ID en herleidbaar naar een eis
    werking: niet vastgesteld (OPEN-11)
  - naam: requirements-validation
    oud_nummer: SKL-04  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../requirements-validation
    gebruikers:
      - AGT-02
    doel: Eigen controle vóór indiening
    dekking:
      - {cap: CAP-02, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
    input: requirements.md
    output: controleresultaat
    afhankelijkheden: []
    validatie: checklist volledig, consistent, toetsbaar, traceerbaar
    opmerking: zelfcontrole door de maker; de onafhankelijke controle is GOV-01
    werking: niet vastgesteld (OPEN-11)
  - naam: requirements-clarification
    oud_nummer: SKL-05  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../requirements-clarification
    gebruikers:
      - AGT-02
    doel: Vragen over eisen beantwoorden, wijzigingsverzoeken, overdracht aan Dr. Evil
    dekking:
      - {cap: CAP-17, status: bestaat, bron: SKILL.md secties A en B; API desiredSkills 2026-10-28}
      - {cap: CAP-15, status: bestaat, bron: SKILL.md sectie C}
    input: vraag-issue, goedgekeurde documenten
    output: antwoord met ID's, wijzigingsverzoek, overdrachtsissue
    afhankelijkheden:
      - requirements-validation
      - overdracht
    validatie: antwoord verwijst naar ID's; wijziging pas na zichtbare goedkeuring
    werking: niet vastgesteld (OPEN-11)
  - naam: uml-use-cases
    oud_nummer: SKL-06  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/bbbb48311b/architect-use-cases
    gebruikers:
      - AGT-02
      - AGT-03
    doel: Use cases met acceptatiecriteria uit goedgekeurde requirements
    dekking:
      - {cap: CAP-03, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28 (gekoppeld aan Socrates én Atlas)}
      - {cap: CAP-03, status: uitbreiden, activiteiten: [ACT-01.9], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md eist goedgekeurde requirements; in PRC-01 schrijft Socrates de use cases vóór het akkoord op het analysepakket (GOV-10)'}
      - {cap: CAP-03, status: uitbreiden, activiteiten: [ACT-01.9, ACT-02.12], besluit: 'B-12 (PRP-038)', bron: 'zie wijziging_0_10: vorm van de use cases volgens het profiel (licht bij P1)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-1)'}
    input: goedgekeurde requirements (PRC-02); requirements in concept (PRC-01, B-08)
    output: use-cases.md
    afhankelijkheden:
      - requirements-analysis
      - grilling
    validatie: elke FR gedekt; elke UC heeft AC met ID; uitzonderingen beschreven
    opmerking: door B-06 alleen nodig bij Socrates; de koppeling bij Atlas is niet meer nodig (PRP-002)
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): lichte vorm van de use cases bij profiel P1; contentpagina's zonder gedrag gedekt door de paginalijst (PRP-038)"
  - naam: grilling
    oud_nummer: SKL-07  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: github/.../grilling
    gebruikers:
      - AGT-02
      - AGT-03
    doel: 'Grill-sessie met de project owner: per ronde alle vragen waarvan de voorwaarden vaststaan, genummerd en elk met een aanbevolen antwoord; feiten zoekt de vrager zelf op; klaar als de project owner bevestigt dat er overeenstemming is'
    wijziging_0_12: 'CHG-022 (FND-038): omschrijving hersteld; was "één vraag tegelijk". Bron: SKILL.md grilling (feit, 2026-10-31). Contextverslag en telling komen uit vragen-en-akkoordrondes (B-15, V5)'
    dekking:
      - {cap: CAP-02, status: bestaat, bron: API desiredSkills 2026-10-28}
      - {cap: CAP-03, status: bestaat, bron: uml-use-cases (Grill-sessies)}
      - {cap: CAP-05, status: bestaat, bron: architect-architecture-choice stap 2}
      - {cap: CAP-17, status: bestaat, bron: API desiredSkills 2026-10-28}
    input: plan of vraag
    output: vragen
    afhankelijkheden: []
    validatie: per ronde alle vragen waarvan de voorwaarden vaststaan, genummerd, elk met een aanbevolen antwoord; klaar na bevestiging van overeenstemming (0.12, FND-038)
    werking: niet vastgesteld (OPEN-11)
  - naam: domain-modeling
    oud_nummer: SKL-08  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: github/.../domain-modeling
    gebruikers:
      - AGT-02
      - AGT-03
    doel: Termen in GLOSSARY.md en ADR's
    dekking:
      - {cap: CAP-02, status: bestaat, bron: requirements-analysis stap 5 (termen in GLOSSARY.md)}
      - {cap: CAP-06, status: bestaat, bron: API desiredSkills 2026-10-28}
      - {cap: CAP-21, status: bestaat, bron: beschrijving skilllijst; AGENTS.md Atlas}
      - {cap: CAP-21, status: uitbreiden, activiteiten: [ACT-02.55], besluit: 'B-08 (PRP-017): als regel in de instructies van Atlas, niet in de gedeelde skill', bron: 'ADR alleen bij moeilijk terug te draaien keuzes (AGENTS.md Atlas, architect-architecture-choice stap 7); PRP-017 vraagt een ADR bij elke wijziging van het globale ontwerp'}
    input: begrippen, beslissingen
    output: GLOSSARY.md, docs/adr/
    afhankelijkheden: []
    validatie: één term per begrip met _NL_; ADR met reden en gevolgen
    opmerking: beide agents schrijven in GLOSSARY.md (FND-020)
    werking: niet vastgesteld (OPEN-11)
  - naam: architect-architecture-choice
    wijziging_0_13: "CHG-023 (ASM-51): in de architectuurkeuze ook de OpenAPI-versie en het hulpmiddel voor de leesbare versie (in architecture.md; een ADR alleen als de drie voorwaarden van stap 7 gelden; WEB-25); de status blijft uitbreiden"
    oud_nummer: SKL-09  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/9536b71d90/architect-requirements
    gebruikers:
      - AGT-03
    doel: Architectuur kiezen en onderbouwen
    dekking:
      - {cap: CAP-05, status: bestaat, bron: SKILL.md stappen 1-11; API desiredSkills 2026-10-28}
      - {cap: CAP-05, status: uitbreiden, activiteiten: [ACT-01.11], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md stap 10 (goedkeuring verplicht; "ga niet door naar modelleren zonder goedkeuring"). In PRC-01 geen eigen stop: het akkoord is sinds 0.10 het pakket GOV-15 (B-12: PRP-036; tot 0.9 GOV-11); in PRC-02 blijft het akkoord per document (controle-model-v08 L-01). 0.12: CHG-021 (A-14)'}
      - {cap: CAP-05, status: uitbreiden, activiteiten: [ACT-01.11, ACT-02.6], besluit: 'B-12 (PRP-034)', bron: 'zie wijziging_0_10: profiel kiezen (ACT-01.11) en bij een uitbreiding bijwerken (ACT-02.6, G-02.3)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-1)'}
    input: goedgekeurde requirements
    output: architecture.md, ADR's, context- en containerdiagram
    afhankelijkheden:
      - grilling
      - domain-modeling
      - research
    validatie: elke keuze herleidbaar tot FR/NFR (stap 9)
    opmerking: sleutel en naam verschillen
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): architectuurprofiel kiezen en vastleggen in een profiel-ADR, met de groeisignalen; verwijst naar `architectuurprofielen` (PRP-034)"
  - naam: architect-modeling
    oud_nummer: SKL-10  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/411873876d/architect-modeling
    gebruikers:
      - AGT-03
    doel: Regie over domeinmodel, sequentie- en klassendiagram
    dekking:
      - {cap: CAP-06, status: bestaat, bron: SKILL.md (fasen 2-4); API desiredSkills 2026-10-28}
      - {cap: CAP-07, status: bestaat, bron: idem}
      - {cap: CAP-08, status: bestaat, bron: idem}
      - {cap: CAP-06, status: uitbreiden, activiteiten: [ACT-01.10], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md vraagt een akkoord per fase ("elke fase expliciet goedgekeurd"); in PRC-01 is er één pakketakkoord (GOV-11, sinds 0.10 voor de architectuurkeuze GOV-15)', wijziging_0_12: 'CHG-021 (C-8): per capability gesplitst, zoals in de koppelingen'}
      - {cap: CAP-05, status: uitbreiden, activiteiten: [ACT-01.11], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md vraagt een akkoord per fase ("elke fase expliciet goedgekeurd"); in PRC-01 is er één pakketakkoord (GOV-11, sinds 0.10 voor de architectuurkeuze GOV-15)', wijziging_0_12: 'CHG-021 (C-3, C-8)'}
      - {cap: CAP-07, status: uitbreiden, activiteiten: [ACT-01.12], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md vraagt een akkoord per fase ("elke fase expliciet goedgekeurd"); in PRC-01 is er één pakketakkoord (GOV-11, sinds 0.10 voor de architectuurkeuze GOV-15)', wijziging_0_12: 'CHG-021 (C-8)'}
      - {cap: CAP-08, status: uitbreiden, activiteiten: [ACT-01.13], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md vraagt een akkoord per fase ("elke fase expliciet goedgekeurd"); in PRC-01 is er één pakketakkoord (GOV-11, sinds 0.10 voor de architectuurkeuze GOV-15)', wijziging_0_12: 'CHG-021 (C-8)'}
      - {cap: CAP-08, status: uitbreiden, activiteiten: [ACT-02.6], besluit: 'B-08 (PRP-024 optie a)', bron: 'SKILL.md "Wijzigingen later": kleine, aantoonbaar niet-breaking aanvullingen (na de controle op breaking changes) achteraf melden; voorleggen als het eerder goedgekeurde afspraken raakt. Botst met de GOV per bijgewerkt document in ACT-02.6 en met AGENTS.md Atlas r.49 ("leg elke wijziging aan een eerder goedgekeurd model eerst voor"). De instructies volgen PRC-02 al; het hiaat zit in de skill (FND-019)'}
    input: goedgekeurde requirements, use cases, bedrijfsregels
    output: STATUS.md, modellen via deelskills
    besluit_dekking: 'B-08: (1) PRP-003, in PRC-01 één pakketakkoord (GOV-11) in plaats van een akkoord per fase; (2) PRP-024 optie (a, ASM-20), "Wijzigingen later" volgt het model: elke wijziging van een goedgekeurd document gaat langs zijn GOV'
    afhankelijkheden:
      - uml-domain-modelling
      - uml-sequence-diagrams
      - uml-class-diagram
      - architect-database
      - domain-modeling
    validatie: elke fase expliciet goedgekeurd (PRC-02), of het pakket per document goedgekeurd (PRC-01, GOV-11); samenhang herleidbaar
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): regie alleen bij profiel P3; sequentiediagrammen na het paginaontwerp (PRP-029, PRP-034)"
  - naam: uml-domain-modelling
    oud_nummer: SKL-11  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/90e7bd6923/architect-domain-model
    gebruikers:
      - AGT-03
    doel: Domeinmodel
    dekking:
      - {cap: CAP-06, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-06, status: uitbreiden, activiteiten: [ACT-01.10], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord. In PRC-01 geen eigen stop: het akkoord is het pakket GOV-11; in PRC-02 blijft het akkoord per document (controle-model-v08 L-01)'}
    input: goedgekeurde use cases en bedrijfsregels
    output: domain-model.md met artifact
    afhankelijkheden:
      - domain-modeling
    validatie: elk begrip herleidbaar tot UC of BR; geen technische details
    opmerking: sleutel en naam verschillen (feitencheck WEB-23)
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05): uitbreiden (besloten, B-12, via PRC-08): het domeinmodel alleen bij profiel P3 (ACT-01.10; in PRC-02 bij P3 via ACT-02.6) (PRP-034)"
  - naam: uml-sequence-diagrams
    oud_nummer: SKL-12  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/be139be780/architect-sequence-diagrams
    gebruikers:
      - AGT-03
    doel: Sequentiediagrammen
    dekking:
      - {cap: CAP-07, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-07, status: uitbreiden, activiteiten: [ACT-01.12, ACT-01.59], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord. In PRC-01 geen eigen stop: het akkoord is het pakket GOV-11; in PRC-02 blijft het akkoord per document (controle-model-v08 L-01)', wijziging_0_11: 'CHG-018 (C-1): ook ACT-01.59 (kernflows bij P2, in het pakket GOV-11)'}
    input: use cases, domeinmodel
    output: sequences.md met artifact
    afhankelijkheden:
      - uml-domain-modelling
    validatie: deelnemers en berichten passen bij het domeinmodel
    opmerking: de skill laat de gebruiker eerst de use cases kiezen (mini-goedkeuringsmoment); TL-V5 zegt "in principe de hele kern". Sleutel en naam verschillen (feitencheck WEB-23)
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05, C-1): uitbreiden (besloten, B-12, via PRC-08): bij P3 de sequentiediagrammen van de kern (ACT-01.12), na het paginaontwerp, met de paginabrieven en ontwerpen als input (PRP-029, PRP-034); bij P2 alleen de kernflows, in ACT-01.59 (PRP-034); bij P1 optioneel, alleen koppelingen (ACT-01.60)"
  - naam: uml-class-diagram
    oud_nummer: SKL-13  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/f4a84b0c52/architect-class-diagram
    gebruikers:
      - AGT-03
    doel: Ontwerpklassendiagram
    dekking:
      - {cap: CAP-08, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-08, status: uitbreiden, activiteiten: [ACT-01.13], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord. In PRC-01 geen eigen stop: het akkoord is het pakket GOV-11; in PRC-02 blijft het akkoord per document (controle-model-v08 L-01)'}
    input: domeinmodel, sequentiediagrammen
    output: class-diagram.md, design-notes.md met artifact
    afhankelijkheden:
      - uml-domain-modelling
      - uml-sequence-diagrams
    validatie: elke klasse herleidbaar tot domeinconcept of uitbreidingspunt
    opmerking: sleutel en naam verschillen (feitencheck WEB-23)
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05): uitbreiden (besloten, B-12, via PRC-08): het ontwerpklassendiagram alleen bij profiel P3 (ACT-01.13; in PRC-02 bij P3 via ACT-02.6 en ACT-02.7) (PRP-034)"
  - naam: architect-database
    oud_nummer: SKL-14  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/9ea08073e6/architect-database
    gebruikers:
      - AGT-03
    doel: Databaseontwerp
    dekking:
      - {cap: CAP-09, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-09, status: uitbreiden, activiteiten: [ACT-01.24], besluit: 'B-08 (PRP-003)', bron: 'SKILL.md eist een goedgekeurd klassendiagram; in PRC-01 zitten klassendiagram en database in hetzelfde pakket (GOV-11)'}
      - {cap: CAP-09, status: uitbreiden, activiteiten: [ACT-01.59], besluit: 'B-12 (PRP-034)', bron: 'zie wijziging_0_10: bij P2 een datamodel zonder klassendiagram, alleen bij een eigen database (CAP-27, componenten-, route- en dataontwerp)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-3, melding M-B2)'}
    input: goedgekeurd klassendiagram (PRC-02), klassendiagram uit hetzelfde pakket (PRC-01), NFR's
    output: databaseontwerp met ER-diagram
    afhankelijkheden:
      - uml-class-diagram
    validatie: zelfcontrole stap 7; verplicht goedkeuringsmoment stap 8
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): bij P2 een datamodel zonder klassendiagram, alleen bij een eigen database; paginabrieven als input (PRP-034)"
  - naam: architect-implementation-plan
    oud_nummer: SKL-15  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: local/5ff209d8ce/architect-implementation-plan
    gebruikers:
      - AGT-03
    doel: Implementatieplan voor een use case die nog niet is uitgewerkt
    dekking:
      - {cap: CAP-12, status: uitbreiden, bron: 'SKILL.md: plan per use case, niet per slice; de beschrijving belooft "taken voor de developers"; stap 7 maakt issues aan, voorwaardelijk ("Tot er een orchestrator is, doe je dit zelf"); de opruimtaak in stap 4b wordt onvoorwaardelijk meteen aangemaakt (FND-021). Trigger: een developer-agent of de gebruiker, of werk zonder sequentie- of klassendiagram; AGENTS.md Atlas r.38 noemt ook "andere agent", dus een vraag van Dr. Evil valt al binnen de instructies (feitencheck WEB-23)'}
      - {cap: CAP-08, status: uitbreiden, bron: 'SKILL.md stap 4: ontwerp aanpassen per use case; ontwerp per slice (ACT-02.7) niet beschreven'}
      - {cap: CAP-14, status: uitbreiden, activiteiten: [ACT-01.25, ACT-02.14], besluit: 'B-08 (PRP-027)', bron: 'geen stap om de taken van Dr. Evil te toetsen tegen de werkpakketten'}
    input: vraag, goedgekeurde documenten, code
    output: implementatieplan
    afhankelijkheden:
      - architect-modeling
      - uml-domain-modelling
      - uml-sequence-diagrams
      - uml-class-diagram
      - architect-database
    validatie: controle op breaking changes (stap 4b); voorwaardelijk akkoord van de gebruiker (stap 5) bij een (mogelijk) breaking change, een niet-compatibele wijziging van een goedgekeurd model, een nieuwe externe afhankelijkheid of technologie, merkbare gevolgen voor beveiliging, privacy, kosten of prestaties, onduidelijk gedrag, of een grote wijziging (meer dan ca. 3 dagen of meer dan één module) (FND-026)
    opmerking: stap 2 raadpleegt Socrates (gedrag en eisen) en de gebruiker (technische keuzes); stap 8 beantwoordt hulpvragen van developers (TL-07, buiten de scope)
    besluit_dekking: 'B-08: PRP-024 optie (a, ASM-20): trigger "opdracht van Dr. Evil voor een slice", stap "ontwerp per slice", werkpakketten in plaats van taken (stap 7 vervalt, opruimtaak 4b wordt een werkpakket), geen achteraf melden; PRP-028: stap 5 verwijst naar GOV-06; PRP-027: stap "taken toetsen tegen de werkpakketten"'
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): werkpakketten per profiel (P1: configuratie-, thema-, plugin- en contentpakketten); frontendpakketten verwijzen naar brief en paginatype (PRP-034, PRP-037)"
  - naam: codebase-design
    oud_nummer: SKL-16  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: github/.../codebase-design
    gebruikers:
      - AGT-03
    doel: Modules en interfaces ontwerpen
    dekking:
      - {cap: CAP-08, status: bestaat, bron: beschrijving skilllijst; API desiredSkills 2026-10-28}
    input: ontwerpvraag
    output: module- en interfaceontwerp
    afhankelijkheden: []
    validatie: niet vastgesteld
    werking: niet vastgesteld (OPEN-11)
  - naam: to-tickets
    oud_nummer: SKL-17  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: github/.../to-tickets
    gebruikers:
      - AGT-03
    doel: Een plan opdelen in tickets en die publiceren
    dekking:
      - {cap: CAP-10, status: onbekend, bron: 'beschrijving skilllijst: publiceert tickets in de tracker; door TL-V3 maakt Dr. Evil de taken (OPEN-05)'}
    input: plan
    output: tickets in de tracker
    afhankelijkheden: []
    validatie: niet vastgesteld
    opmerking: niet gebruikt in dit model; staat niet in AGENTS.md Atlas (feitencheck WEB-23). Beschikbaar, niet vereist (ASM-44); of hij gekoppeld blijft, legt Dr. Evil voor in het pakket (PRC-08, ASM-36)
    wijziging_0_12: 'CHG-021 (B-1): ASM-36 zei dat to-tickets blijft omdat het model hem gebruikt; geen stap gebruikt hem (ASM-44)'
    werking: niet vastgesteld (OPEN-11)
  - naam: paperclip-converting-plans-to-tasks
    oud_nummer: SKL-18  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: paperclipai/paperclip/paperclip-converting-plans-to-tasks
    gebruikers:
      - AGT-01
      - AGT-03
    doel: Goedgekeurd plan omzetten in taken met eigenaar en echte afhankelijkheden
    dekking:
      - {cap: CAP-13, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
    input: goedgekeurd plan
    output: issues met blockedByIssueIds
    afhankelijkheden:
      - backlog-management
      - dependency-management
    validatie: afhankelijkheden op de issues zelf, gecontroleerd
    opmerking: ook gekoppeld aan Atlas, omdat architect-implementation-plan stap 7 ernaar verwijst (Feit, WEB-23); AGENTS.md Atlas r.40 legt het opdelen in taken bij Dr. Evil (TL-V3, OPEN-05, FND-021)
    werking: niet vastgesteld (OPEN-11)
  - naam: backlog-management
    oud_nummer: SKL-19  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../backlog-management
    gebruikers:
      - AGT-01
    doel: Backlog structureren; klaar om op te pakken
    dekking:
      - {cap: CAP-13, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-20, status: bestaat, bron: idem (volgorde van de gebruiker)}
      - {cap: CAP-01, status: bestaat, bron: idem}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-01.29, ACT-02.1, ACT-02.17], besluit: 'B-12 (PRP-033)', bron: 'zie wijziging_0_10: de uitbreidingslijst bijhouden en de volgende wens ervan nemen; ook CAP-13 (ACT-01.29, ACT-02.17)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-3, melding M-B2)'}
    input: issues, plan
    output: geordende issues met AC en eigenaar
    afhankelijkheden:
      - paperclip-converting-plans-to-tasks
    validatie: 'elk issue: één eigenaar, AC-ID''s, verwijzing naar FR of UC'
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): uitbreidingslijst bijhouden: \"later\"-pagina's erop, uitgevoerde uitbreidingen bijwerken (ACT-01.29, ACT-02.17; PRP-033)"
    wijziging_0_11: "CHG-018 (C-3): dekkingsregel uitbreiden toegevoegd (ACT-01.29, ACT-02.1, ACT-02.17)"
  - naam: dependency-management
    oud_nummer: SKL-20  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../dependency-management
    gebruikers:
      - AGT-01
    doel: Afhankelijkheden vastleggen en bewaken
    dekking:
      - {cap: CAP-13, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-19, status: bestaat, bron: idem}
    input: taken
    output: afhankelijkheden op de issues
    afhankelijkheden: []
    validatie: geen kringverbanden; Atlas heeft het laatste woord op technische afhankelijkheden
    werking: niet vastgesteld (OPEN-11)
  - naam: quality-gates
    oud_nummer: SKL-21  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../quality-gates
    gebruikers:
      - AGT-01
    doel: Bewijs op het issue controleren vóór de volgende fase
    dekking:
      - {cap: CAP-14, status: uitbreiden, activiteiten: [ACT-01.8, ACT-01.15, ACT-01.20, ACT-02.4], besluit: 'B-08 (PRP-025)', bron: 'SKILL.md kent "Requirements" en "Ontwerp: elke fase van het modelleertraject"; GOV-02 (use cases), GOV-09 (architectuur), GOV-13 (database) en GOV-06 (API-contracten) staan er niet expliciet in (FND-025), en de pakketten GOV-10 en GOV-11 ook niet (CHG-011). Te maken: per poort de GOV-ID''s. Vóór ACT-01.8 GOV-10; vóór ACT-01.15 GOV-11; vóór ACT-01.20 GOV-06; vóór ACT-02.4 GOV-01 en GOV-02 van de wens; in ACT-02.53 GOV-06 en, als de wens het globale ontwerp raakte, de GOV''s van de geraakte documenten met het ADR (ASM-21). Atlas wacht zelf op die akkoorden vóór ACT-02.7 (F: AGENTS.md Atlas, akkoord per fase)'}
      - {cap: CAP-14, status: uitbreiden, activiteiten: [ACT-01.57, ACT-02.53, ACT-02.54], besluit: 'B-08 (PRP-013, PRP-007, PRP-025)', bron: 'geen poort "backlog gereed" (PRP-013) en geen vaste controles (PRP-007: controles 1, 2 en 4; controle 3 zit bij Atlas, ACT-02.14)'}
      - {cap: CAP-14, status: uitbreiden, activiteiten: [ACT-01.15, ACT-02.4, ACT-02.53], besluit: 'B-12 (PRP-032, PRP-034); per stap: ASM-38 (aanname)', bron: 'Te maken, de poorten van 0.10 per stap: vóór ACT-01.15 GOV-15 en GOV-11; vóór ACT-02.4 GOV-01, GOV-02 (met de brieven) en, waar een ontwerp nodig was (G-02.7), GOV-14; in ACT-02.53 GOV-06, GOV-02 en waar nodig GOV-14. Welke documenten verplicht zijn, volgt uit het profiel (`profielen`; later `architectuurprofielen`, als naslag)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (B-3, melding D-08)'}
    input: issue met bewijs
    output: comment met uitkomst
    afhankelijkheden: []
    validatie: beoordeelt de inhoud niet (SKILL.md)
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): poorten per profiel (welke documenten verplicht zijn, architectuurprofielen); GOV-15, GOV-14 en GOV-02 met brieven vóór het bouwcontract (PRP-032, PRP-034)"
    wijziging_0_11: "CHG-018 (B-3): de poorten van 0.10 per stap in `dekking` (ASM-38)"
    wijziging_0_13: "CHG-023 (ASM-52): vóór ACT-01.20 en in ACT-02.53 ook controleren, waar er een OpenAPI-bestand is, dat het goedgekeurde bouwcontract dezelfde revisie van het OpenAPI-bestand noemt als het bestand in de repository; de status blijft uitbreiden"
  - naam: escalation-management
    oud_nummer: SKL-22  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../escalation-management
    gebruikers:
      - AGT-01
    doel: Besluiten buiten de eigen bevoegdheid voorleggen; voorstellen voor agents en skills
    dekking:
      - {cap: CAP-18, status: bestaat, bron: 'SKILL.md (trigger 1: "werk zit na twee pogingen nog vast"; opties en aanbeveling); API desiredSkills 2026-10-28'}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.1], besluit: 'B-09', bron: 'SKILL.md: "Al het andere bewaar je voor het weekmoment" en "Een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment" (feit, 2026-10-30). Te maken: een uitzondering naast de vijf triggers. Vindt de flowcheck te weinig klare taken en blijkt de volgende wens niet uit de volgorde, dan direct één vraag aan ROL-01 (GOV-07), zonder herinnering tussendoor (FND-027)'}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.1, GOV-07], besluit: 'B-13', bron: 'SKILL.md, "Wanneer stoor je de gebruiker tussendoor": alleen de vijf triggers (feit, 2026-10-30). Te maken: het dagelijkse herinneringsbericht om 09:00 is een vaste uitzondering, geen escalatie (FND-037)', nieuw_in: '0.11', wijziging_0_12: 'CHG-021 (C-1): ACT-02.2 is een stap van ROL-01 zonder skills; de dekking hoort bij ACT-02.1 en GOV-07'}
    input: escalatie
    output: één bericht met trigger, opties en aanbeveling
    afhankelijkheden:
      - weekmoment
    validatie: één besluit per bericht; neemt het besluit niet zelf
    werking: niet vastgesteld (OPEN-11)
  - naam: delivery-management
    oud_nummer: SKL-23  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../delivery-management
    gebruikers:
      - AGT-01
    doel: Flow, limieten, blokkades
    dekking:
      - {cap: CAP-19, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-20, status: bestaat, bron: idem}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.51], besluit: 'B-08 (PRP-014), B-13', bron: 'SKILL.md, "Dagelijkse flowcheck (routine, elke werkdag)": geen telling van open taken in de lopende slice en geen start van PRC-02; de routine is niet ingericht (FND-013). Te maken (B-13): stap "tel de open taken van de lopende slice; 5 of minder → start PRC-02, tenzij er al een doorloop loopt (ASM-30, ASM-33)"', wijziging_0_11: 'drempel ingevuld (OPEN-03 beantwoord)'}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.1, GOV-07], besluit: 'B-13', bron: 'SKILL.md: "Stoor de gebruiker alleen bij een trigger uit escalation-management. Al het andere bewaar je voor het weekmoment." en "Rapporteer op een statusvraag en op het weekmoment, niet tussendoor." (feit, 2026-10-30). Te maken: elke werkdag om 09:00 één herinneringsbericht met alles wat op ROL-01 wacht; de lijst "Wacht op de gebruiker" uit stap 5 bestaat al (ASM-35, FND-037)', nieuw_in: '0.11', wijziging_0_12: 'CHG-021 (C-1): ACT-02.2 is een stap van ROL-01 zonder skills; de dekking hoort bij ACT-02.1 en GOV-07'}
    input: bord
    output: flowcheck-comment; herinneringsbericht voor ROL-01 (B-13)
    afhankelijkheden:
      - backlog-management
      - dependency-management
      - agent-orchestration
    validatie: limieten Bezig 3, Wacht op afname 2
    werking: niet vastgesteld (OPEN-11)
  - naam: weekmoment
    oud_nummer: SKL-24  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../weekmoment
    gebruikers:
      - AGT-01
    doel: 'Weekmoment-issue: afname, top 5, retro, focusdoel'
    dekking:
      - {cap: CAP-20, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.1], besluit: 'herinnering op het weekmoment: B-09; dat deze skill die uitvoert: ASM-24 (bevestigd)', bron: 'SKILL.md neemt alleen de open punten van het vorige weekmoment-issue over (feit, 2026-10-30). Te maken: een open GOV-07-vraag (B-09) komt als herinnering op het weekmoment'}
      - {cap: CAP-20, status: uitbreiden, activiteiten: [ACT-02.1, GOV-07], besluit: 'B-13', bron: 'SKILL.md: "Herinner de gebruiker niet tussendoor." (feit, 2026-10-30). Te maken: die regel aanpassen voor het dagelijkse herinneringsbericht (FND-037); het weekmoment draait maandag om 04:00 en start PRC-02 (ASM-32); het herinneringsbericht komt als comment op het lopende weekmoment-issue (ASM-35)', nieuw_in: '0.11', wijziging_0_12: 'CHG-021 (C-1): ACT-02.2 is een stap van ROL-01 zonder skills; de dekking hoort bij ACT-02.1 en GOV-07'}
    input: stand van het bord
    output: weekmoment-issue
    afhankelijkheden:
      - delivery-management
    validatie: kaarten per punt; geen besluit namens de gebruiker
    werking: niet vastgesteld (OPEN-11)
  - naam: agent-orchestration
    oud_nummer: SKL-25  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../agent-orchestration
    gebruikers:
      - AGT-01
    doel: Agent kiezen op rol en opdracht uitzetten
    dekking:
      - {cap: CAP-01, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
    input: werk
    output: toegewezen issue
    afhankelijkheden:
      - overdracht
    validatie: één eigenaar per taak
    werking: niet vastgesteld (OPEN-11)
  - naam: overdracht
    oud_nummer: SKL-26  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: company/.../overdracht
    gebruikers:
      - AGT-01
      - AGT-02
      - AGT-03
    doel: Zelfstandig leesbaar overdrachtsissue
    dekking:
      - {cap: CAP-01, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-15, status: bestaat, bron: idem}
      - {cap: CAP-18, status: bestaat, bron: 'idem: besluit doorgeven via een issue'}
    input: werk, documenten
    output: nieuw issue
    afhankelijkheden: []
    validatie: doel, wat klaar is, AC, verwijzingen; geen secrets
    werking: niet vastgesteld (OPEN-11)
  - naam: paperclip
    oud_nummer: SKL-27  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: paperclipai/paperclip/paperclip
    gebruikers:
      - AGT-01
      - AGT-02
      - AGT-03
    doel: Issues, comments, documenten, kaarten, blockers
    dekking:
      - {cap: CAP-02, status: bestaat, bron: 'SKILL.md: vragen op het issue en wachten op antwoord (requirements-analysis stap 3)'}
      - {cap: CAP-15, status: bestaat, bron: SKILL.md; API desiredSkills 2026-10-28}
      - {cap: CAP-17, status: bestaat, bron: idem (blockers wekken bij done)}
      - {cap: CAP-19, status: bestaat, bron: idem (blokkade met naam en actie)}
      - {cap: CAP-01, status: bestaat, activiteiten: [ACT-01.51], bron: 'project aanmaken via de API (POST /api/companies/{companyId}/projects; feit: skill paperclip); of de agent het mag, is open (OPEN-15)', wijziging_0_12: 'CHG-021 (C-2)'}
    input: —
    output: —
    afhankelijkheden: []
    validatie: —
    werking: niet vastgesteld (OPEN-11)
  - naam: research
    oud_nummer: SKL-28  # alleen om documenten tot en met model 0.9 te lezen
    sleutel: github/.../research
    gebruikers:
      - AGT-03
    doel: Onderzoek naar een techniek of bibliotheek
    dekking:
      - {cap: CAP-05, status: bestaat, bron: AGENTS.md Atlas; API desiredSkills 2026-10-28}
    input: vraag
    output: onderzoeksnotitie
    afhankelijkheden: []
    validatie: primaire bronnen
    werking: niet vastgesteld (OPEN-11)
  - naam: architect-vertical-slices
    oud_nummer: SKL-40  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: Technisch ontwerp of wens opdelen in vertical slices met technische volgorde
    dekking:
      - {cap: CAP-10, status: nieuw, bron: geen skill gevonden in de skilllijst; to-tickets dekt het deels maar publiceert tickets (rolanalyse-techlead §7)}
    input: goedgekeurd technisch ontwerp van het profiel of wens met use cases, paginalijst en visie
    output: slice-indeling
    afhankelijkheden:
      - architect-modeling
      - architect-implementation-plan
    validatie: elke AC in precies één slice; slice 1 werkt van begin tot eind
    besluit: 'B-08 (PRP-019); maken via Dr. Evil (PRC-08)'
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05): uitbreiden vóór het maken (besloten, B-12, via PRC-08): de slices volgen uit de \"nu\"-pagina's (PRC-01) of de paginabrieven en ontwerpen van de wens (PRC-02), met de visie als input (ACT-01.16, ACT-02.5; B-10, PRP-029)"
  - naam: architect-api-contracts
    oud_nummer: SKL-41  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: "Bouwcontract per slice ter goedkeuring van de project owner: API-contracten als OpenAPI-bestand met een leesbare versie die eruit wordt gemaakt (B-17), of bij P1 het templatecontract als tabel, met OpenAPI alleen waar echt een API is (B-17; besloten B-14: PRP-043: deze skill maakt ook bij P1 het contract per slice, op basis van het contentmodel en de velden per template en blok van `architect-cms-configuratie`)"
    dekking:
      - {cap: CAP-11, status: nieuw, bron: 'geen skill gevonden; architect-implementation-plan noemt API''s bij breaking changes (stap 4b), en het sjabloon noemt configuratie en routes (§4) en HTTP-statuscodes en meldingen (§6), maar een API-contract als eigen product ontbreekt (feitencheck WEB-23)'}
    input: "slice-indeling, technisch ontwerp van het profiel, goedgekeurde brieven en ontwerpen; bij P1 het contentmodel met de velden per template en blok (besloten B-14: PRP-043)"
    output: "bouwcontract van de slice: API-contracten als OpenAPI-bestand (de bron) met een leesbare versie die eruit wordt gemaakt (B-17), of bij P1 het templatecontract als tabel, met OpenAPI alleen waar echt een API is (B-17; besloten B-14: PRP-043)"
    afhankelijkheden:
      - architect-vertical-slices
      - uml-class-diagram  # alleen bij P3 (CHG-018, D-06)
      - architect-cms-configuratie  # alleen bij P1, levert het contentmodel (besloten B-14: PRP-043)
    afhankelijkheden_per_profiel: {P1: [architect-vertical-slices, architect-cms-configuratie], P2: [architect-vertical-slices, architect-componentontwerp], P3: [architect-vertical-slices, uml-class-diagram]}
    wijziging_0_12: 'CHG-021 (C-5): afhankelijkheden per profiel als veld (P2: architect-componentontwerp, afgeleid uit ACT-01.59)'
    validatie: elk endpoint en elk veld herleidbaar tot een goedgekeurde brief, UC/AC of BR; foutformaten vast; passend bij het technisch ontwerp van het profiel (bij P3 het klassendiagram); waar er een OpenAPI-bestand is, is dat geldig volgens de gekozen OpenAPI-versie en is de leesbare versie gemaakt uit precies die revisie (ASM-52)
    besluit: 'B-08 (PRP-020); maken via Dr. Evil (PRC-08)'
    wijziging_0_13: "CHG-023 (B-17): OpenAPI-bestand als bron, leesbare versie eruit gemaakt (Nederlandse uitleg, Engelse namen, revisie bovenaan), bron per veld als eigen veld (ASM-50), controle op geldigheid (ASM-52); bij P1 OpenAPI alleen waar echt een API is. De skillstatus blijft nieuw."
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): bouwcontract: API-contracten of templatecontract; afgeleid van de goedgekeurde brieven en ontwerpen; bronkolom per veld; mock data niet bindend (PRP-032, PRP-034)"
    wijziging_0_11: "CHG-018 (D-06): klassendiagram alleen bij P3, anders het technisch ontwerp van het profiel. CHG-018 (B-2): verdeling met `architect-cms-configuratie` bij P1 (besloten B-14: PRP-043): deze skill maakt het templatecontract per slice (ACT-01.17, ACT-02.8)"
    besloten: "PRP-043 (B-14, CHG-018)"
  - naam: architect-use-case-review
    oud_nummer: SKL-42  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: 'Use cases en paginabrieven toetsen vóór het akkoord van de project owner, via een toets-issue (B-14: PRP-041) dat een grill-sessie met Socrates is (B-15, GS3, GS11)'
    dekking:
      - {cap: CAP-04, status: nieuw, bron: geen skill; architect-modeling controleert alleen of use cases zijn goedgekeurd (Voorwaarden)}
    input: use cases, requirements, paginalijst en paginabrieven
    output: toetsresultaat per use case en per brief; contextverslag (B-15)
    wijziging_0_12: 'CHG-021 (A-6): brieven en toets-issue in doel en input (B-12: PRP-031; B-14: PRP-041); CHG-022 (B-15): de toets is een grill-sessie; per toetsronde een nieuw toets-issue (ASM-45)'
    afhankelijkheden:
      - vragen-en-akkoordrondes
    validatie: alleen opmerkingen, geen wijzigingen; maximaal 2 toetsrondes (G-01.4, G-02.5); binnen een toetsronde de telling zonder voortgang (B-15)
    besluit: 'B-08 (PRP-021); maken via Dr. Evil (PRC-08)'
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): ook de paginabrieven toetsen: genoeg om een bouwcontract af te leiden; klopt \"bestaand patroon\" met de componenten (PRP-031)"
  - naam: architect-conventions
    oud_nummer: SKL-43  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: Conventiebestand per project
    dekking:
      - {cap: CAP-22, status: nieuw, bron: geen skill gevonden}
    input: "technisch ontwerp van het profiel, design systeem, patroonbibliotheek"
    output: conventiebestand
    afhankelijkheden:
      - architect-architecture-choice
      - uml-class-diagram  # alleen bij P3 (CHG-018, D-06)
    validatie: kort; codeconventies, projectstructuur, teststrategie, DoD voor een taak
    besluit: 'B-08 (PRP-010); maken via Dr. Evil (PRC-08)'
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_10: "uitbreiden (besloten, B-12, via PRC-08): UI-conventies: design systeem en patroonbibliotheek bindend; nieuwe component zonder goedgekeurd ontwerp is een vraag (PRP-037)"
    wijziging_0_11: "CHG-018 (D-06): input het technisch ontwerp van het profiel in plaats van het kernontwerp; het klassendiagram alleen bij P3"
  - naam: architect-clarification
    oud_nummer: SKL-44  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: Vragen over het ontwerp beantwoorden en ontwerpwijzigingen als verzoek vastleggen
    dekking:
      - {cap: CAP-17, status: nieuw, bron: 'Atlas heeft geen tegenhanger van requirements-clarification. TL-08 staat niet in zijn instructies (AGENTS.md r.40 beschrijft de omgekeerde richting, feitencheck WEB-23). Voor vragen van developers dekt architect-implementation-plan stap 8 het deels (TL-07, buiten de scope)'}
    input: vraag-issue, goedgekeurd ontwerp
    output: antwoord met verwijzing, of wijzigingsverzoek
    afhankelijkheden:
      - vragen-en-akkoordrondes
      - architect-implementation-plan
    validatie: antwoord verwijst naar modellen en ADR's; wijziging pas na GOV-12
    besluit: 'B-08 (PRP-022); maken via Dr. Evil (PRC-08)'
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05): uitbreiden vóór het maken (besloten, B-12, via PRC-08): Atlas beantwoordt vragen over het technisch ontwerp van het profiel en het bouwcontract; een vraag over een paginabrief gaat naar Socrates, een vraag over het ontwerp naar de ontwerper (nu ROL-01, ASM-28) (routering PRC-04 0.10); een bouwcontract dat een brief niet kan dragen, wordt een vraag of een wijzigingsverzoek (GOV-12, PRP-032)"
  - naam: vragen-en-akkoordrondes
    oud_nummer: SKL-45  # alleen om documenten tot en met model 0.9 te lezen
    werknaam: true  # voorgestelde naam (werknaam, gedeeld); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-01
      - AGT-02
      - AGT-03
    doel: 'Gedeelde regels voor PRC-03, PRC-04 en PRC-05: ontvanger bepalen, grill-sessie tussen agents, wie wat beslist, contextverslag, rondes zonder voortgang tellen, afkeuringen tellen, escaleren'
    dekking:
      - {cap: CAP-23, status: nieuw, bron: geen skill telt afkeuringen of vervolgvragen; escalation-management begint pas bij Dr. Evil}
      - {cap: CAP-17, status: nieuw, bron: 'de routering staat alleen in de instructies van de agents (AGENTS.md Socrates, Atlas)'}
      - {cap: CAP-17, status: nieuw, activiteiten: [ACT-01.3, ACT-01.4, ACT-01.9, ACT-04.1, ACT-04.6, ACT-01.11, ACT-01.21, ACT-01.23, ACT-02.3, ACT-02.6, ACT-02.12, ACT-02.13, ACT-04.2, ACT-04.3, ACT-04.55, ACT-04.56], besluit: 'B-15, B-16', bron: 'grill-sessies (grillmomenten GS1–GS4, GS9–GS11, GS14 en PRC-04): werkwijze tussen agents, beslisregels (V3), contextverslag (V4); met ROL-01 in de vorm van grilling (V5). Geen bestaande skill doet dit tussen agents', nieuw_in: '0.12'}
      - {cap: CAP-23, status: nieuw, activiteiten: [ACT-04.5, ACT-04.51, ACT-04.52], besluit: 'B-15 (V2)', bron: 'alleen rondes zonder voortgang tellen; 2 achter elkaar: escalatie', nieuw_in: '0.12'}
    input: vraag, context van een stap met een grill-moment, of afkeuring; geschiedenis van het issue
    output: vraag- of toets-issue met grill-rondes, contextverslag, telling, escalatie-issue
    afhankelijkheden:
      - paperclip
      - escalation-management
    validatie: na 2 herzieningen (per document, ook binnen een pakket) altijd een escalatie; in een vragenloop of grill-sessie na 2 rondes achter elkaar zonder voortgang; elke sessie eindigt met een bevestigd contextverslag of een escalatie
    besluit: 'B-08 (PRP-023), uitgebreid in B-15; maken via Dr. Evil (PRC-08)'
    situatie: to-be
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (D-05): uitbreiden vóór het maken (besloten, B-12, via PRC-08): routering paginabrief → Socrates, ontwerp → de ontwerper (PRC-04 0.10); pakketten met meer producenten (GOV-15, ASM-26; GOV-14, ASM-37): tellen per document, elke producent herstelt zijn eigen document, verder pas als elk document een oordeel heeft"
  - naam: paginalijst-en-paginabrieven
    oud_nummer: SKL-46  # alleen om de eerste concepttekst van 0.10 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-02
    doel: "Paginalijst met \"nu\" en \"later\", ontwerpniveau en paginabrieven afleiden uit visie en use cases, en afstemmen op het ontwerp"
    dekking:
      - {cap: CAP-24, status: nieuw, bron: 'geen skill gevonden in de skilllijst van het bedrijf (Paperclip-API, 2026-10-30)'}
    input: "visie, use cases, kern, patroonbibliotheek, ontwerpen"
    output: "pages.md met paginalijst en brieven; lijst van verschillen met het ontwerp"
    afhankelijkheden:
      - requirements-analysis
      - uml-use-cases
      - architectuurprofielen
    validatie: "elke \"nu\"-pagina heeft een brief met gegevens, acties en UC/AC; het ontwerpniveau noemt het criterium"
    besluit: 'PRP-030, PRP-031, PRP-032; besloten (B-12), maken via Dr. Evil (PRC-08)'
    situatie: to-be
    nieuw_in: '0.10'
    werking: niet vastgesteld (OPEN-11)
  - naam: architectuurprofielen
    oud_nummer: SKL-47  # alleen om de eerste concepttekst van 0.10 te lezen
    werknaam: true  # voorgestelde naam (werknaam, gedeelde referentie); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
      - AGT-02
      - AGT-01
    doel: "Eén plek voor de profielen P1, P2 en P3: criteria, verplichte en optionele producten, skills per profiel, groeisignalen"
    dekking:
      - {cap: CAP-05, status: nieuw, activiteiten: [ACT-01.11, ACT-02.6], bron: 'geen skill gevonden in de skilllijst van het bedrijf (Paperclip-API, 2026-10-30); architect-architecture-choice kiest een architectuurstijl, geen profiel. ACT-02.6: groeisignalen en profielwijziging (G-02.3)', wijziging_0_11: 'CHG-018 (C-2, C-3): activiteiten genoemd, ook ACT-02.6'}
      - {cap: CAP-02, status: nieuw, activiteiten: [ACT-01.26], bron: 'Socrates gebruikt de signalen per profiel bij het projecttype in de visie (PRP-034)', nieuw_in: '0.11', wijziging_0_11: 'CHG-018 (C-3, melding M-B3a)'}
    input: "projecttype, requirements, paginalijst"
    output: "profielkeuze met redenen; lijst verplichte producten voor de poort"
    afhankelijkheden:
      []
    validatie: "elk profiel noemt per product verplicht, optioneel of n.v.t.; de groeisignalen zijn toetsbaar"
    besluit: 'PRP-034, PRP-035; besloten (B-12), maken via Dr. Evil (PRC-08)'
    situatie: to-be
    nieuw_in: '0.10'
    werking: niet vastgesteld (OPEN-11)
    opmerking: "Dr. Evil (AGT-01) gebruikt deze skill alleen als naslag via `quality-gates` (welke documenten bij een poort verplicht zijn); hij heeft er geen eigen koppeling voor in `koppelingen`"
    wijziging_0_11: "CHG-018 (C-2, C-3, melding M-B3): dekking ook CAP-02 (ACT-01.26) en ACT-02.6; opmerking over het gebruik door Dr. Evil"
  - naam: architect-cms-configuratie
    oud_nummer: SKL-48  # alleen om de eerste concepttekst van 0.10 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: "Contentmodel, templates en blokken, plugins en platformconfiguratie voor profiel P1 (ACT-01.60; per slice in ACT-02.7). Besloten (B-14): PRP-043: deze skill levert het contentmodel en de velden per template en blok; het templatecontract per slice maakt `architect-api-contracts` (ACT-01.17, ACT-02.8)"
    dekking:
      - {cap: CAP-26, status: nieuw, bron: 'geen skill gevonden in de skilllijst van het bedrijf (Paperclip-API, 2026-10-30)'}
    input: "profiel-ADR, paginabrieven, ontwerpen"
    output: "contentmodel met de velden per template en blok (besloten B-14: PRP-043; was: contentmodel, templatecontract)"
    afhankelijkheden:
      - architectuurprofielen
      - architect-architecture-choice  # het profiel-ADR (CHG-021, C-7)
    validatie: "elk paginatype heeft een template; elk veld uit de brieven staat in het contentmodel"
    wijziging_0_12: 'CHG-021 (C-7): afhankelijkheid van architect-architecture-choice, zoals in de specificatie; (B-3, ASM-46): contentmodel bij het technisch ontwerp (ACT-01.60), per slice bijgewerkt als een uitbreiding dat vraagt (ACT-02.7)'
    besluit: 'PRP-034, PRP-035; besloten (B-12), maken via Dr. Evil (PRC-08)'
    situatie: to-be
    nieuw_in: '0.10'
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (B-2): verdeling van het templatecontract (besloten B-14: PRP-043): deze skill levert het contentmodel en de velden per template en blok, `architect-api-contracts` maakt het contract per slice; de afhankelijkheid draait om (`architect-api-contracts` hangt bij P1 af van deze skill). CHG-018 (C-2): ook gekoppeld aan ACT-02.7"
    besloten: "PRP-043 (B-14, CHG-018)"
  - naam: architect-componentontwerp
    oud_nummer: SKL-49  # alleen om de eerste concepttekst van 0.10 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - AGT-03
    doel: "Componenten-, route- en dataontwerp voor profiel P2, met sequentiediagrammen voor de kernflows en een datamodel bij een eigen database"
    dekking:
      - {cap: CAP-27, status: nieuw, bron: 'geen skill gevonden in de skilllijst van het bedrijf (Paperclip-API, 2026-10-30)'}
    input: "profiel-ADR, paginabrieven, ontwerpen, use cases"
    output: "componenten- en routeontwerp, kernsequenties, datamodel"
    afhankelijkheden:
      - architectuurprofielen
      - uml-sequence-diagrams
      - architect-database
    validatie: "elke pagina heeft een route en componenten; elke kernflow een sequentiediagram"
    besluit: 'PRP-034, PRP-035; besloten (B-12), maken via Dr. Evil (PRC-08)'
    situatie: to-be
    nieuw_in: '0.10'
    werking: niet vastgesteld (OPEN-11)
    wijziging_0_11: "CHG-018 (C-2): ook gekoppeld aan ACT-02.7 (componenten, routes en data van de slice, bij P2)"
  - naam: paginaontwerp
    oud_nummer: SKL-50  # alleen om de eerste concepttekst van 0.10 te lezen
    werknaam: true  # voorgestelde naam (werknaam); de skill bestaat nog niet
    sleutel: null
    gebruikers:
      - nog geen agent (ROL-01 doet het, ASM-28)
    doel: "Pagina's en patronen ontwerpen binnen het design systeem, grafisch of in code met mock data, voor een toekomstige designer- of frontend-agent"
    dekking:
      - {cap: CAP-25, status: nieuw, opmerking: 'er is nu geen gebruiker: ROL-01 ontwerpt zelf (ASM-28); alleen nodig als er een designer- of frontend-agent komt', bron: 'geen skill gevonden in de skilllijst van het bedrijf (Paperclip-API, 2026-10-30)'}
    input: "design systeem, brieven, patroonbibliotheek"
    output: "ontwerp, bijgewerkte patroonbibliotheek, gemarkeerde mock data"
    afhankelijkheden:
      - paginalijst-en-paginabrieven
    validatie: "past binnen het design systeem; mock data gemarkeerd als niet bindend"
    besluit: 'PRP-035; besloten (B-12), maken via Dr. Evil (PRC-08)'
    situatie: to-be
    nieuw_in: '0.10'
    werking: niet vastgesteld (OPEN-11)

koppelingen:
  # ronde 3 (0.6). Per activiteit: R uitvoerder, A verantwoordelijke rol, beslisser, controleur, C geraadpleegd, I geïnformeerd,
  # escalatie, capabilities, skills en skl_status (status van elke skill voor deze activiteit). Generieke lanes (producent, vrager, ontvanger, eigenaar van de taak): zie generieke_lanes.
  # De menselijke eindverantwoordelijkheid ligt bij ROL-01 en loopt via de GOV-momenten; A is de rol die het resultaat levert.
  - {act: ACT-01.1, R: ROL-01, A: ROL-01, beslisser: ROL-01, controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-01.2, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [ROL-01, AGT-02], escalatie: PRC-06, cap: [CAP-01], skl: [requirements-orchestration, backlog-management, overdracht], skl_status: {requirements-orchestration: uitbreiden, backlog-management: bestaat, overdracht: bestaat}, wijziging_0_11: "CHG-019 (B-13): requirements-orchestration uitbreiden voor het aanmaken van het project; dat verschuift de skillstatus van deze stap van aanwezig naar gedeeltelijk"}
  - {act: ACT-01.3, R: AGT-02, A: ROL-03, beslisser: ROL-03, controleur: —, C: [ROL-01], I: [], escalatie: PRC-06, cap: [CAP-02], skl: [requirements-analysis, grilling, vragen-en-akkoordrondes], skl_status: {requirements-analysis: uitbreiden, grilling: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_11: "CHG-018 (C-1): requirements-analysis van bestaat naar uitbreiden (de vraag naar het design systeem, wijziging_0_10 van de skill; B-12: PRP-029); de skillstatus van deze stap gaat van aanwezig naar gedeeltelijk", wijziging_0_12: "CHG-022 (B-15, B-16): GS1, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-01.4, R: AGT-02, A: ROL-03, beslisser: ROL-03, controleur: —, C: [], I: [ROL-01], escalatie: 'geen telling met ROL-01 (ASM-48); antwoordt ROL-01 niet: de vraag staat in het herinneringsbericht (B-13)', cap: [CAP-02], skl: [grilling, paperclip, vragen-en-akkoordrondes], skl_status: {grilling: bestaat, paperclip: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15, B-16): rondes van GS1, GS2 (ASM-43)"}
  - {act: ACT-01.5, R: ROL-01, A: ROL-01, beslisser: ROL-01, controleur: —, C: [], I: [AGT-02], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-01.6, R: AGT-02, A: ROL-03, beslisser: ROL-01 (GOV-10), controleur: ROL-01 (GOV-10), C: [ROL-01], I: [AGT-01], escalatie: PRC-05, cap: [CAP-02], skl: [requirements-analysis, domain-analysis, requirements-validation, domain-modeling], skl_status: {requirements-analysis: uitbreiden, domain-analysis: bestaat, requirements-validation: bestaat, domain-modeling: bestaat}}
  - {act: ACT-01.7, R: AGT-02, A: ROL-03, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: PRC-06, cap: [CAP-15], skl: [requirements-clarification, overdracht], skl_status: {requirements-clarification: bestaat, overdracht: bestaat}}
  - {act: ACT-01.8, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [AGT-03, ROL-01], escalatie: PRC-06, cap: [CAP-01, CAP-14], skl: [requirements-orchestration, quality-gates, overdracht], skl_status: {requirements-orchestration: bestaat, quality-gates: uitbreiden, overdracht: bestaat}}
  - {act: ACT-01.9, R: AGT-02, A: ROL-03, beslisser: ROL-01 (GOV-10), controleur: ROL-04 (ACT-01.23) en ROL-01 (GOV-10), C: [ROL-01], I: [AGT-03], escalatie: PRC-05, cap: [CAP-03], skl: [uml-use-cases, grilling, vragen-en-akkoordrondes], skl_status: {uml-use-cases: uitbreiden, grilling: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15, B-16): GS2, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-01.10, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: [AGT-02 (PRC-04), ROL-01], I: [AGT-01], escalatie: PRC-05, cap: [CAP-06], skl: [architect-modeling, uml-domain-modelling, domain-modeling], skl_status: {architect-modeling: uitbreiden, uml-domain-modelling: uitbreiden, domain-modeling: bestaat}}
  - {act: ACT-01.11, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-15), controleur: ROL-01 (GOV-15), C: [ROL-01], I: [AGT-01], escalatie: PRC-05, cap: [CAP-05, CAP-21], skl: [architect-architecture-choice, architectuurprofielen, grilling, research, domain-modeling, architect-modeling, vragen-en-akkoordrondes], skl_status: {architect-architecture-choice: uitbreiden, architectuurprofielen: nieuw, grilling: bestaat, research: bestaat, domain-modeling: bestaat, architect-modeling: uitbreiden, vragen-en-akkoordrondes: nieuw}, opm: "`architect-modeling` en de deelskills architect-architecture-choice, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database regelen samen het pakketakkoord GOV-11 (B-08, PRP-003)", wijziging_0_10: "CHG-015 (B-10): profiel (`architectuurprofielen` nieuw, architect-architecture-choice uitbreiden); beslisser GOV-15", wijziging_0_12: "CHG-022 (B-15, B-16): GS4, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-01.12, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: [ROL-01], I: [AGT-01], escalatie: PRC-05, cap: [CAP-07], skl: [architect-modeling, uml-sequence-diagrams], skl_status: {architect-modeling: uitbreiden, uml-sequence-diagrams: uitbreiden}}
  - {act: ACT-01.13, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: ['ROL-01 (grill-sessies, uml-class-diagram)'], I: [AGT-01], escalatie: PRC-05, cap: [CAP-08], skl: [architect-modeling, uml-class-diagram], skl_status: {architect-modeling: uitbreiden, uml-class-diagram: uitbreiden}}
  - {act: ACT-01.14, R: AGT-03, A: ROL-04, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: PRC-06, cap: [CAP-15], skl: [overdracht, paperclip], skl_status: {overdracht: bestaat, paperclip: bestaat}}
  - {act: ACT-01.15, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [AGT-03], escalatie: PRC-06, cap: [CAP-01, CAP-14], skl: [agent-orchestration, overdracht, quality-gates], skl_status: {agent-orchestration: bestaat, overdracht: bestaat, quality-gates: uitbreiden}}
  - {act: ACT-01.16, R: AGT-03, A: ROL-04, beslisser: 'ROL-04 (technische volgorde, TL-V2)', controleur: 'ROL-01 (GOV-06, inhoud slice 1; B-08, PRP-003)', C: [AGT-01 (TL-08), AGT-02 (PRC-04)], I: [AGT-01], escalatie: PRC-04, cap: [CAP-10], skl: [architect-vertical-slices], skl_status: {architect-vertical-slices: nieuw}}
  - {act: ACT-01.17, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-06), controleur: ROL-01 (GOV-06), C: [], I: [AGT-01], escalatie: PRC-05, cap: [CAP-11], skl: [architect-api-contracts], skl_status: {architect-api-contracts: nieuw}, wijziging_0_10: "CHG-015 (B-10): architect-api-contracts als bouwcontract (PRP-032, PRP-034)"}
  - {act: ACT-01.18, R: AGT-03, A: ROL-04, beslisser: 'ROL-04; ROL-01 bij de voorwaarden van stap 5', controleur: 'ROL-01, voorwaardelijk, via GOV-06 (architect-implementation-plan stap 5; B-08, PRP-028); anders — (FND-022)', C: [AGT-01 (TL-08), 'AGT-02 (gedrag en eisen, stap 2)', 'ROL-01 (technische keuzes, stap 2)'], I: [AGT-01], escalatie: PRC-04, cap: [CAP-12], skl: [architect-implementation-plan], skl_status: {architect-implementation-plan: uitbreiden}}
  - {act: ACT-01.20, R: AGT-01, A: ROL-02, beslisser: ROL-02 (opdeling in taken), controleur: 'ROL-04 (ACT-01.25; B-08, PRP-027)', C: ['AGT-03 (laatste woord op technische punten, V5)'], I: [ROL-01], escalatie: 'conflict met Atlas: escalation-management trigger 2 → GOV-08', cap: [CAP-13, CAP-14], skl: [paperclip-converting-plans-to-tasks, backlog-management, dependency-management, quality-gates], skl_status: {paperclip-converting-plans-to-tasks: bestaat, backlog-management: bestaat, dependency-management: bestaat, quality-gates: uitbreiden}, opm: '`quality-gates`: poort GOV-06 vóór de taken (B-08, PRP-025)'}
  - {act: ACT-01.21, R: AGT-03, A: ROL-04, beslisser: ROL-04, controleur: —, C: [], I: [ROL-01], escalatie: 'geen telling met ROL-01 (ASM-48); antwoordt ROL-01 niet: de vraag staat in het herinneringsbericht (B-13)', cap: [CAP-17], skl: [grilling, paperclip, vragen-en-akkoordrondes], skl_status: {grilling: bestaat, paperclip: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15, B-16): rondes van GS4 (ASM-43)"}
  - {act: ACT-01.22, R: ROL-01, A: ROL-01, beslisser: ROL-01, controleur: —, C: [], I: [AGT-03], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-01.23, R: AGT-03, A: ROL-04, beslisser: ROL-04 (G-01.4), controleur: 'n.v.t.: dit is zelf de controle; ROL-01 ziet het toetsresultaat bij GOV-10 (B-08, PRP-003)', C: [AGT-02], I: [AGT-01], escalatie: na 2 rondes PRC-05 (ACT-05.3 → GOV-08), cap: [CAP-04], skl: [architect-use-case-review, vragen-en-akkoordrondes], skl_status: {architect-use-case-review: nieuw, vragen-en-akkoordrondes: nieuw}, wijziging_0_10: "CHG-015 (B-10): architect-use-case-review ook voor de brieven (uitbreiden vóór het maken)", wijziging_0_12: "CHG-022 (B-15, B-16): GS3, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-01.24, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: ['ROL-01 (databasesysteem als dat nog niet vastligt, architect-database stap 1)'], I: [AGT-01], escalatie: PRC-05, cap: [CAP-09], skl: [architect-database], skl_status: {architect-database: uitbreiden}}
  - {act: ACT-01.25, R: AGT-03, A: ROL-04, beslisser: 'ROL-04 (technische punten, V5)', controleur: 'n.v.t.: dit is zelf de controle op het werk van AGT-01', C: [AGT-01], I: [ROL-01], escalatie: 'na 2 rondes, of bij een conflict met Dr. Evil: escalation-management trigger 2 → GOV-08', cap: [CAP-14], skl: [architect-implementation-plan], skl_status: {architect-implementation-plan: uitbreiden}, opm: 'B-08 (PRP-027); nieuw in 0.8'}
  - {act: ACT-01.51, R: AGT-02, A: ROL-03, beslisser: ROL-02 (toewijzing), controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-01], skl: [overdracht, paperclip], opm: 'regel in de instructies van Socrates nodig (B-08, PRP-001; OPEN-01 beantwoord); 0.11: ook het project aanmaken (B-13, ASM-31) als regel in die instructies, met de skill paperclip; of Socrates een project mag aanmaken is niet vastgesteld (OPEN-15)', skl_status: {overdracht: bestaat, paperclip: bestaat}, wijziging_0_11: "CHG-019 (B-13): paperclip voor het aanmaken van het project; werking OPEN-15"}
  - {act: ACT-01.52, R: ROL-01, A: ROL-01, beslisser: ROL-01, controleur: —, C: [], I: [AGT-02], escalatie: —, cap: [CAP-25, CAP-16], skl: [n.v.t. (mens)], wijziging_0_10: "CHG-015 (B-10): design systeem (mens, als ontwerper)"}
  - {act: ACT-01.54, R: AGT-02, A: ROL-03, beslisser: ROL-01 (GOV-10), controleur: ROL-01 (GOV-10), C: [ROL-01], I: [AGT-03], escalatie: PRC-05, cap: [CAP-02], skl: [requirements-analysis], skl_status: {requirements-analysis: uitbreiden}}
  - {act: ACT-01.56, R: AGT-03, A: ROL-04, beslisser: ROL-04, controleur: — (alleen bestaan gecontroleerd in ACT-01.57; FND-022), C: [], I: [AGT-01], escalatie: PRC-04, cap: [CAP-22], skl: [architect-conventions], skl_status: {architect-conventions: nieuw}, wijziging_0_10: "CHG-015 (B-10): architect-conventions met UI-conventies (PRP-037)"}
  - {act: ACT-01.26, R: AGT-02, A: ROL-03, beslisser: "ROL-01 (GOV-10)", controleur: "ROL-01 (GOV-10)", C: [ROL-01], I: [AGT-03], escalatie: "PRC-05", cap: [CAP-02], skl: [requirements-analysis, architectuurprofielen], skl_status: {requirements-analysis: uitbreiden, architectuurprofielen: nieuw}, opm: "PRP-029, PRP-034", nieuw_in: '0.10'}
  - {act: ACT-01.27, R: AGT-02, A: ROL-03, beslisser: "ROL-01 (GOV-10)", controleur: "ROL-04 (ACT-01.23) en ROL-01 (GOV-10)", C: [ROL-01], I: [AGT-03], escalatie: "PRC-05", cap: [CAP-24], skl: [paginalijst-en-paginabrieven], skl_status: {paginalijst-en-paginabrieven: nieuw}, opm: "PRP-030, PRP-031", nieuw_in: '0.10'}
  - {act: ACT-01.28, R: ROL-01, A: ROL-01, beslisser: "ROL-01", controleur: "ROL-01 bij GOV-15 alleen als een ander het ontwerp maakte (ASM-28)", C: [], I: [AGT-02, AGT-03], escalatie: "—", cap: [CAP-25, CAP-16], skl: [n.v.t. (mens)], opm: "`paginaontwerp` pas als een agent het overneemt (PRP-035)", nieuw_in: '0.10', wijziging_0_11: "CHG-018 (C-4): veld skl_status weggelaten, zoals bij ACT-01.52 (mensactiviteit, n.v.t.)"}
  - {act: ACT-01.29, R: AGT-01, A: ROL-02, beslisser: "ROL-01 (inhoud en volgorde)", controleur: "— (bewust: ROL-01 bepaalt inhoud en volgorde en ziet de lijst op het weekmoment, ASM-39)", C: [], I: [ROL-01], escalatie: "PRC-06", cap: [CAP-20, CAP-13], skl: [backlog-management], skl_status: {backlog-management: uitbreiden}, opm: "PRP-033", nieuw_in: '0.10', wijziging_0_11: "CHG-018 (B-4): controleur — is bewust (ASM-39)"}
  - {act: ACT-01.58, R: AGT-02, A: ROL-03, beslisser: "ROL-01 (GOV-15)", controleur: "ROL-01 (GOV-15)", C: [ROL-01 (ontwerper)], I: [AGT-03], escalatie: "PRC-05", cap: [CAP-24], skl: [paginalijst-en-paginabrieven], skl_status: {paginalijst-en-paginabrieven: nieuw}, opm: "PRP-032", nieuw_in: '0.10'}
  - {act: ACT-01.59, R: AGT-03, A: ROL-04, beslisser: "ROL-01 (GOV-11)", controleur: "ROL-01 (GOV-11)", C: [AGT-02 (PRC-04)], I: [AGT-01], escalatie: "PRC-05", cap: [CAP-27, CAP-07, CAP-09], skl: [architect-componentontwerp, uml-sequence-diagrams, architect-database], skl_status: {architect-componentontwerp: nieuw, uml-sequence-diagrams: uitbreiden, architect-database: uitbreiden}, opm: "PRP-034", nieuw_in: '0.10', wijziging_0_11: "CHG-018 (C-1): uml-sequence-diagrams van bestaat naar uitbreiden (zelfde eigen goedkeuringsmoment als bij ACT-01.12; kernflows bij P2); de stap blijft ontbreekt (architect-componentontwerp is nieuw)"}
  - {act: ACT-01.60, R: AGT-03, A: ROL-04, beslisser: "ROL-01 (GOV-11)", controleur: "ROL-01 (GOV-11)", C: [AGT-02 (PRC-04)], I: [AGT-01], escalatie: "PRC-05", cap: [CAP-26], skl: [architect-cms-configuratie], skl_status: {architect-cms-configuratie: nieuw}, opm: "PRP-034", nieuw_in: '0.10'}
  - {act: ACT-01.57, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: '— (zelfcontrole van de vorm; deels getoetst: ROL-04 toetst in ACT-01.25 de dekking van de werkpakketten, de afhankelijkheden en de aansluiting op het ontwerp, PRP-027. AC-ID''s per taak, één eigenaar en het conventiebestand toetst alleen deze stap)', C: [], I: [ROL-01], escalatie: PRC-06, cap: [CAP-14], skl: [quality-gates], skl_status: {quality-gates: uitbreiden}}
  - {act: ACT-02.1, R: AGT-01, A: ROL-02, beslisser: ROL-01 (volgorde); ROL-02 leest die alleen af (ASM-14), controleur: —, C: [], I: [ROL-01], escalatie: 'G-02.1 → GOV-07: direct één vraag; zonder antwoord staat de vraag elke werkdag om 09:00 in het herinneringsbericht en op het weekmoment (B-09, B-13, ASM-35)', cap: [CAP-20], skl: [backlog-management, weekmoment, delivery-management, escalation-management], skl_status: {backlog-management: uitbreiden, weekmoment: uitbreiden, delivery-management: bestaat, escalation-management: uitbreiden}, opm: 'CHG-013 (B-09): escalation-management uitzondering voor de directe vraag; `weekmoment` herinnering op het weekmoment (ASM-24)', wijziging_0_10: "CHG-015 (B-10): backlog-management uitbreiden voor de uitbreidingslijst (PRP-033)", wijziging_0_12: "CHG-021 (A-1): herinnering volgens B-13; na controle K12-02"}
  - {act: ACT-02.2, R: ROL-01, A: ROL-01, beslisser: ROL-01 (GOV-07), controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-02.3, R: AGT-02, A: ROL-03, beslisser: ROL-01 (GOV-01), controleur: ROL-01 (GOV-01), C: [ROL-01], I: [AGT-01], escalatie: PRC-05, cap: [CAP-02], skl: [requirements-analysis, grilling, domain-analysis, requirements-validation, domain-modeling, vragen-en-akkoordrondes], skl_status: {requirements-analysis: uitbreiden, grilling: bestaat, domain-analysis: bestaat, requirements-validation: bestaat, domain-modeling: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_11: "CHG-018 (C-1): requirements-analysis van bestaat naar uitbreiden (visie bijwerken waar nodig; B-12: PRP-033); van aanwezig naar gedeeltelijk", wijziging_0_12: "CHG-022 (B-15, B-16): GS9, begint met een grill-sessie met ROL-01 (grilling); vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-02.4, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [AGT-03], escalatie: PRC-06, cap: [CAP-01, CAP-14], skl: [agent-orchestration, overdracht, quality-gates], skl_status: {agent-orchestration: bestaat, overdracht: bestaat, quality-gates: uitbreiden}}
  - {act: ACT-02.5, R: AGT-03, A: ROL-04, beslisser: 'ROL-04 (technische volgorde, TL-V2)', controleur: — (FND-022), C: [AGT-01 (TL-08), AGT-02 (PRC-04)], I: [AGT-01], escalatie: PRC-04, cap: [CAP-10], skl: [architect-vertical-slices], skl_status: {architect-vertical-slices: nieuw}}
  - {act: ACT-02.6, R: AGT-03, A: ROL-04, beslisser: 'ROL-01 (GOV-09; per geraakt document bij P3: GOV-03, 04, 05, 13; bij P1 en P2: GOV-11)', controleur: 'ROL-01; maar of het globale ontwerp of het profiel geraakt is, beslist ROL-04 zelf (G-02.3, FND-017)', C: [], I: [AGT-01], escalatie: PRC-05, cap: [CAP-05, CAP-06, CAP-07, CAP-08, CAP-09], skl: [architect-modeling, architect-architecture-choice, architectuurprofielen, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, architect-database, vragen-en-akkoordrondes, grilling], skl_status: {architect-modeling: uitbreiden, architect-architecture-choice: uitbreiden, architectuurprofielen: nieuw, uml-domain-modelling: uitbreiden, uml-sequence-diagrams: uitbreiden, uml-class-diagram: uitbreiden, architect-database: uitbreiden, vragen-en-akkoordrondes: nieuw, grilling: bestaat}, opm: '`architectuurprofielen` voor de groeisignalen en een profielwijziging (G-02.3, PRP-034); het profiel-ADR loopt via deze stap (ACT-02.55)', wijziging_0_11: "CHG-018 (A-6, C-1, C-2): beslisser per profiel (melding C-03); architect-architecture-choice van bestaat naar uitbreiden (profiel bijwerken, PRP-034); `architectuurprofielen` (nieuw) gekoppeld; de skillstatus van deze stap gaat van gedeeltelijk naar ontbreekt", wijziging_0_12: "CHG-022 (B-15, B-16): GS14 (alleen als architectuur of profiel verandert), begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-02.7, R: AGT-03, A: ROL-04, beslisser: 'ROL-04; ROL-01 bij de voorwaarden van stap 5', controleur: 'ROL-01, voorwaardelijk, via GOV-06 (architect-implementation-plan stap 5; B-08, PRP-028); anders — (FND-017)', C: [], I: [AGT-01], escalatie: PRC-04, cap: [CAP-08, CAP-07, CAP-26, CAP-27], skl: [architect-implementation-plan, codebase-design, uml-sequence-diagrams, uml-class-diagram, architect-cms-configuratie, architect-componentontwerp], skl_status: {architect-implementation-plan: uitbreiden, codebase-design: bestaat, uml-sequence-diagrams: uitbreiden, uml-class-diagram: uitbreiden, architect-cms-configuratie: nieuw, architect-componentontwerp: nieuw}, opm: 'per profiel: `architect-cms-configuratie` bij P1 (templates, blokken en configuratie van de slice), `architect-componentontwerp` bij P2 (componenten, routes en data van de slice); bij P3 uml-sequence-diagrams en uml-class-diagram (PRP-034)', wijziging_0_11: "CHG-018 (C-2): de skills per profiel gekoppeld, zoals in PRC-01 (ACT-01.60, ACT-01.59); de skillstatus van deze stap gaat van gedeeltelijk naar ontbreekt", wijziging_0_12: "CHG-021 (C-4): UML-skills van bestaat naar uitbreiden, zoals in UC1; (B-3, ASM-46): bij P1 werkt architect-cms-configuratie het contentmodel bij als de uitbreiding dat vraagt"}
  - {act: ACT-02.8, R: AGT-03, A: ROL-04, beslisser: ROL-01 (GOV-06), controleur: ROL-01 (GOV-06), C: [], I: [AGT-01], escalatie: PRC-05, cap: [CAP-11], skl: [architect-api-contracts], skl_status: {architect-api-contracts: nieuw}, wijziging_0_10: "CHG-015 (B-10): bouwcontract"}
  - {act: ACT-02.9, R: AGT-03, A: ROL-04, beslisser: 'ROL-04; ROL-01 bij de voorwaarden van stap 5', controleur: 'ROL-01, voorwaardelijk, via GOV-06 (architect-implementation-plan stap 5; B-08, PRP-028); anders — (FND-022)', C: [AGT-01 (TL-08), 'AGT-02 (gedrag en eisen, stap 2)', 'ROL-01 (technische keuzes, stap 2)'], I: [AGT-01], escalatie: PRC-04, cap: [CAP-12], skl: [architect-implementation-plan], skl_status: {architect-implementation-plan: uitbreiden}}
  - {act: ACT-02.11, R: AGT-01, A: ROL-02, beslisser: ROL-02 (opdeling in taken), controleur: 'ROL-04 (ACT-02.14; B-08, PRP-027)', C: ['AGT-03 (laatste woord op technische punten, V5)'], I: [ROL-01], escalatie: 'conflict met Atlas: escalation-management trigger 2 → GOV-08', cap: [CAP-13], skl: [paperclip-converting-plans-to-tasks, backlog-management, dependency-management], skl_status: {paperclip-converting-plans-to-tasks: bestaat, backlog-management: bestaat, dependency-management: bestaat}}
  - {act: ACT-02.12, R: AGT-02, A: ROL-03, beslisser: ROL-01 (GOV-02), controleur: ROL-04 (ACT-02.13) en ROL-01 (GOV-02), C: [ROL-01], I: [AGT-03], escalatie: PRC-05, cap: [CAP-03], skl: [uml-use-cases, grilling, vragen-en-akkoordrondes], skl_status: {uml-use-cases: uitbreiden, grilling: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_11: "CHG-018 (C-1): uml-use-cases van bestaat naar uitbreiden (vorm volgens profiel; B-12: PRP-038); van aanwezig naar gedeeltelijk", wijziging_0_12: "CHG-022 (B-15, B-16): GS10, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-02.13, R: AGT-03, A: ROL-04, beslisser: ROL-04 (G-02.5), controleur: 'n.v.t.: dit is zelf de controle; ROL-01 ziet het toetsresultaat bij GOV-02', C: [AGT-02], I: [AGT-01], escalatie: na 2 rondes PRC-05 (ACT-05.3 → GOV-08), cap: [CAP-04], skl: [architect-use-case-review, vragen-en-akkoordrondes], skl_status: {architect-use-case-review: nieuw, vragen-en-akkoordrondes: nieuw}, wijziging_0_10: "CHG-015 (B-10): ook de brieven", wijziging_0_12: "CHG-022 (B-15, B-16): GS11, begint met een grill-sessie; vragen-en-akkoordrondes nieuw (ASM-43)"}
  - {act: ACT-02.15, R: AGT-02, A: ROL-03, beslisser: "ROL-01 (GOV-02)", controleur: "ROL-04 (ACT-02.13) en ROL-01 (GOV-02)", C: [ROL-01], I: [AGT-03], escalatie: "PRC-05", cap: [CAP-24], skl: [paginalijst-en-paginabrieven], skl_status: {paginalijst-en-paginabrieven: nieuw}, opm: "PRP-031", nieuw_in: '0.10'}
  - {act: ACT-02.16, R: ROL-01, A: ROL-01, beslisser: "ROL-01", controleur: "ROL-01 bij GOV-14 alleen als een ander het ontwerp maakte (ASM-28)", C: [], I: [AGT-02, AGT-03], escalatie: "—", cap: [CAP-25, CAP-16], skl: [n.v.t. (mens)], opm: "`paginaontwerp` pas als een agent het overneemt (PRP-035)", nieuw_in: '0.10', wijziging_0_11: "CHG-018 (C-4): veld skl_status weggelaten, zoals bij ACT-01.52 (mensactiviteit, n.v.t.)"}
  - {act: ACT-02.56, R: AGT-02, A: ROL-03, beslisser: "ROL-01 (GOV-14)", controleur: "ROL-01 (GOV-14)", C: [ROL-01 (ontwerper)], I: [AGT-03], escalatie: "PRC-05", cap: [CAP-24], skl: [paginalijst-en-paginabrieven], skl_status: {paginalijst-en-paginabrieven: nieuw}, opm: "PRP-032", nieuw_in: '0.10'}
  - {act: ACT-02.17, R: AGT-01, A: ROL-02, beslisser: "ROL-01 (inhoud en volgorde)", controleur: "— (bewust: ROL-01 bepaalt inhoud en volgorde en ziet de lijst op het weekmoment, ASM-39)", C: [], I: [ROL-01], escalatie: "PRC-06", cap: [CAP-20, CAP-13], skl: [backlog-management], skl_status: {backlog-management: uitbreiden}, opm: "PRP-033", nieuw_in: '0.10', wijziging_0_11: "CHG-018 (B-4): controleur — is bewust (ASM-39)"}
  - {act: ACT-02.14, R: AGT-03, A: ROL-04, beslisser: 'ROL-04 (technische punten, V5)', controleur: 'n.v.t.: dit is zelf de controle op het werk van AGT-01', C: [AGT-01], I: [ROL-01], escalatie: 'na 2 rondes, of bij een conflict met Dr. Evil: escalation-management trigger 2 → GOV-08', cap: [CAP-14], skl: [architect-implementation-plan], skl_status: {architect-implementation-plan: uitbreiden}, opm: 'B-08 (PRP-027); nieuw in 0.8'}
  - {act: ACT-02.51, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [ROL-01], escalatie: —, cap: [CAP-20], skl: [delivery-management], skl_status: {delivery-management: uitbreiden}, wijziging_0_11: "CHG-019 (B-13): drempel 5 open taken; G-02.8 hoort bij deze stap (zelfde skill)"}
  - {act: ACT-02.53, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: 'AGT-01 controleert het werk van AGT-03 op de controles 1, 2 en 4 (onafhankelijk); controle 3 zit bij ROL-04 in ACT-02.14', C: [AGT-03], I: [ROL-01], escalatie: 'controle 1 faalt na 2 rondes: GOV-08; controle 2 faalt: naar Socrates en ROL-01 (GOV-12)', cap: [CAP-14], skl: [quality-gates], skl_status: {quality-gates: uitbreiden}}
  - {act: ACT-02.54, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: '— (zelfcontrole van de vorm; deels getoetst: ROL-04 toetst in ACT-02.14 de dekking van de werkpakketten, de afhankelijkheden en de aansluiting op het ontwerp, PRP-027. AC-ID''s per taak, één eigenaar toetst alleen deze stap)', C: [], I: [ROL-01], escalatie: PRC-06, cap: [CAP-14], skl: [quality-gates], skl_status: {quality-gates: uitbreiden}}
  - {act: ACT-02.55, R: AGT-03, A: ROL-04, beslisser: ROL-01 (met de GOV van het bijgewerkte document), controleur: ROL-01, C: [], I: [AGT-01], escalatie: PRC-05, cap: [CAP-21], skl: [domain-modeling], skl_status: {domain-modeling: uitbreiden}, opm: 'bij een profielwijziging loopt het profiel-ADR via ACT-02.6 met `architectuurprofielen`; deze stap legt het ADR vast met domain-modeling', wijziging_0_11: "CHG-018 (C-2): opm toegevoegd; geen nieuwe koppeling"}
  - {act: ACT-03.1, R: producent, A: rol van de producent, beslisser: —, controleur: —, C: [], I: [ROL-01, AGT-01], escalatie: —, cap: [CAP-15], skl: [paperclip], opm: 'het goedkeuringsmoment staat in elke producerende skill afzonderlijk (requirements-analysis, uml-use-cases, architect-architecture-choice, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database); PRP-023 bundelt het in `vragen-en-akkoordrondes`', skl_status: {paperclip: bestaat}}
  - {act: ACT-03.2, R: ROL-01, A: ROL-01, beslisser: ROL-01 (GOV van de aanroeper), controleur: —, C: [], I: [producent], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-03.3, R: producent, A: rol van de producent, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-15], skl: [paperclip, requirements-clarification, overdracht], opm: Socrates meldt via `requirements-clarification` sectie C; Atlas werkt STATUS.md bij (`architect-modeling`) en meldt aan Dr. Evil, skl_status: {paperclip: bestaat, requirements-clarification: bestaat, overdracht: bestaat}}
  - {act: ACT-03.4, R: producent, A: rol van de producent, beslisser: —, controleur: —, C: [ROL-01], I: [], escalatie: —, cap: [CAP-15], skl: [paperclip], skl_status: {paperclip: bestaat}}
  - {act: ACT-04.1, R: vrager, A: rol van de vrager, beslisser: vrager, controleur: —, C: [], I: [], escalatie: —, cap: [CAP-17], skl: [vragen-en-akkoordrondes], opm: nu alleen in de instructies van de agents, skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-04.2, R: vrager, A: rol van de vrager, beslisser: —, controleur: —, C: [], I: [ontvanger], escalatie: —, cap: [CAP-17], skl: [paperclip, vragen-en-akkoordrondes], skl_status: {paperclip: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15, B-16): grill-vorm (ASM-43)"}
  - {act: ACT-04.3, R: ontvanger, A: rol van de ontvanger, beslisser: ontvanger, controleur: vrager (ACT-04.5), C: [], I: [vrager], escalatie: 'na 2 rondes achter elkaar zonder voortgang: G-04.51 → GOV-08 (B-15); reageert de ontvanger niet: PRC-06', cap: [CAP-17], skl: [requirements-clarification, architect-clarification, vragen-en-akkoordrondes], opm: requirements-clarification als ROL-03 ontvangt; `architect-clarification` als ROL-04 ontvangt, skl_status: {requirements-clarification: bestaat, architect-clarification: nieuw, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15): beslisregels V3 (ASM-43)"}
  - {act: ACT-04.4, R: ontvanger (ROL-03 of ROL-04), A: rol van de ontvanger, beslisser: ROL-01 (GOV-12), controleur: ROL-01 (GOV-12), C: [vrager], I: [AGT-01], escalatie: PRC-05, cap: [CAP-17], skl: [requirements-clarification, architect-clarification], skl_status: {requirements-clarification: bestaat, architect-clarification: nieuw}}
  - {act: ACT-04.5, R: vrager, A: rol van de vrager, beslisser: vrager, controleur: —, C: [], I: [], escalatie: na 2 rondes achter elkaar zonder voortgang G-04.51 → ACT-04.52 (GOV-08; B-15), cap: [CAP-17], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-04.6, R: vrager, A: rol van de vrager, beslisser: —, controleur: —, C: [], I: [ontvanger], escalatie: —, cap: [CAP-17], skl: [paperclip, vragen-en-akkoordrondes], skl_status: {paperclip: bestaat, vragen-en-akkoordrondes: nieuw}, wijziging_0_12: "CHG-022 (B-15): volgende ronde in grill-vorm (ASM-43; controle K12-08)"}
  - {act: ACT-04.51, R: vrager, A: rol van de vrager, beslisser: —, controleur: —, C: [], I: [], escalatie: —, cap: [CAP-23], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-04.52, R: vrager, A: rol van de vrager, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: ACT-04.53, cap: [CAP-23], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-04.53, R: AGT-01, A: ROL-02, beslisser: ROL-01 (GOV-08), controleur: —, C: [], I: [ROL-01], escalatie: —, cap: [CAP-18], skl: [escalation-management], skl_status: {escalation-management: bestaat}}
  - {act: ACT-04.54, R: AGT-01, A: ROL-02, beslisser: —, controleur: —, C: [], I: [vrager, ontvanger], escalatie: —, cap: [CAP-18], skl: [escalation-management, overdracht], skl_status: {escalation-management: bestaat, overdracht: bestaat}}
  - {act: ACT-04.55, R: vrager, A: rol van de vrager, beslisser: —, controleur: ontvanger (ACT-04.56), C: [], I: [ontvanger], escalatie: —, cap: [CAP-17], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}, nieuw_in: '0.12'}
  - {act: ACT-04.56, R: ontvanger, A: rol van de ontvanger, beslisser: ontvanger, controleur: —, C: [], I: [vrager], escalatie: 'een aanvulling telt als ronde (G-04.52 → ACT-04.51, ASM-48); reageert de ontvanger niet: PRC-06', cap: [CAP-17], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}, nieuw_in: '0.12'}
  - {act: ACT-05.1, R: producent, A: rol van de producent, beslisser: —, controleur: —, C: [], I: [], escalatie: —, cap: [CAP-23], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-05.2, R: producent, A: rol van de producent, beslisser: ROL-01 (opnieuw de GOV van de aanroeper), controleur: ROL-01, C: [], I: [AGT-01], escalatie: G-05.1, cap: [CAP-15], skl: [paperclip], opm: herzien met de producerende skill van de deliverable, skl_status: {paperclip: bestaat}}
  - {act: ACT-05.3, R: producent, A: rol van de producent, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: ACT-05.4, cap: [CAP-23], skl: [vragen-en-akkoordrondes], skl_status: {vragen-en-akkoordrondes: nieuw}}
  - {act: ACT-05.4, R: AGT-01, A: ROL-02, beslisser: ROL-01 (GOV-08), controleur: —, C: [], I: [ROL-01], escalatie: —, cap: [CAP-18], skl: [escalation-management], skl_status: {escalation-management: bestaat}}
  - {act: ACT-05.5, R: ROL-01, A: ROL-01, beslisser: ROL-01 (GOV-08), controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-16], skl: [n.v.t. (mens)]}
  - {act: ACT-05.6, R: AGT-01, A: ROL-02, beslisser: —, controleur: —, C: [], I: [producent], escalatie: —, cap: [CAP-18], skl: [escalation-management, overdracht], skl_status: {escalation-management: bestaat, overdracht: bestaat}}
  - {act: ACT-06.1, R: eigenaar van de taak, A: rol van de eigenaar, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: —, cap: [CAP-19], skl: [paperclip], skl_status: {paperclip: bestaat}}
  - {act: ACT-06.2, R: eigenaar van de taak, A: rol van de eigenaar, beslisser: —, controleur: —, C: [], I: [], escalatie: —, cap: [CAP-19], skl: [paperclip, dependency-management], skl_status: {paperclip: bestaat, dependency-management: bestaat}}
  - {act: ACT-06.3, R: eigenaar van de taak, A: rol van de eigenaar, beslisser: —, controleur: —, C: [], I: [AGT-01], escalatie: ACT-06.4, cap: [CAP-19], skl: [paperclip], skl_status: {paperclip: bestaat}}
  - {act: ACT-06.4, R: AGT-01, A: ROL-02, beslisser: ROL-02, controleur: —, C: [], I: [eigenaar van de taak], escalatie: G-06.2 → ACT-06.5, cap: [CAP-19], skl: [dependency-management, delivery-management], skl_status: {dependency-management: bestaat, delivery-management: bestaat}}
  - {act: ACT-06.5, R: AGT-01, A: ROL-02, beslisser: ROL-01 (GOV-08), controleur: —, C: [], I: [ROL-01], escalatie: —, cap: [CAP-18], skl: [escalation-management], skl_status: {escalation-management: bestaat}}

korte_namen:
  # nieuw in 0.13 (CHG-024, B-18): de korte naam die in alles wat ROL-01 leest bij de code komt (ASM-54, ASM-55).
  # Bron: de naam of titel van het element, ingekort; waar die ontbreekt een eigen korte naam. Een wijziging gaat via een CHG.
  "ACT-01.1": "opdracht geven"
  "ACT-01.2": "project aanmaken en opdracht overdragen"
  "ACT-01.3": "plan, bedrijf en domein onderzoeken"
  "ACT-01.4": "vragen van Socrates aan Carlo"
  "ACT-01.5": "vragen van Socrates beantwoorden"
  "ACT-01.6": "analysedocument opstellen"
  "ACT-01.7": "goedgekeurde analyse en use cases melden"
  "ACT-01.8": "ontwerp overdragen aan Atlas en ontwerper"
  "ACT-01.9": "use cases met acceptatiecriteria opstellen"
  "ACT-01.10": "domeinmodel opstellen bij maatwerk"
  "ACT-01.11": "architectuurkeuze en profiel vastleggen"
  "ACT-01.12": "sequentiediagrammen opstellen bij maatwerk"
  "ACT-01.13": "klassendiagram opstellen bij maatwerk"
  "ACT-01.14": "goedgekeurd technisch ontwerp melden"
  "ACT-01.15": "Atlas vragen om opdeling in slices"
  "ACT-01.16": "technisch ontwerp opdelen in slices"
  "ACT-01.17": "bouwcontract van slice 1 opstellen"
  "ACT-01.18": "implementatieplan van slice 1 opstellen"
  "ACT-01.19": "Atlas leest eigen plan mee (vervallen)"
  "ACT-01.20": "epics en taken slice 1 maken"
  "ACT-01.21": "vragen van Atlas aan Carlo"
  "ACT-01.22": "vragen van Atlas beantwoorden"
  "ACT-01.23": "use cases en paginabrieven toetsen"
  "ACT-01.24": "databaseontwerp kern opstellen bij maatwerk"
  "ACT-01.25": "taken slice 1 toetsen tegen werkpakketten"
  "ACT-01.26": "visie en projecttype vastleggen"
  "ACT-01.27": "paginalijst en paginabrieven opstellen"
  "ACT-01.28": "sleutelpagina's en paginatypen ontwerpen"
  "ACT-01.29": "later-pagina's op uitbreidingslijst zetten"
  "ACT-01.51": "project aanmaken en directe opdracht melden"
  "ACT-01.52": "design systeem maken en aanleveren"
  "ACT-01.53": "use cases in aparte stap (vervallen)"
  "ACT-01.54": "kern markeren"
  "ACT-01.55": "toets van eigen slice-ontwerp (vervallen)"
  "ACT-01.56": "conventiebestand opstellen"
  "ACT-01.57": "backlog gereed van slice 1 controleren"
  "ACT-01.58": "paginabrieven en ontwerp afstemmen"
  "ACT-01.59": "componenten-, route- en dataontwerp opstellen"
  "ACT-01.60": "contentmodel en platformconfiguratie opstellen"
  "ACT-02.1": "volgende wens bepalen uit de volgorde"
  "ACT-02.2": "volgende wens kiezen"
  "ACT-02.3": "eisen van de wens analyseren"
  "ACT-02.4": "Atlas vragen wat nu gebouwd wordt"
  "ACT-02.5": "wens in slices opdelen en ordenen"
  "ACT-02.6": "globaal ontwerp of profiel bijwerken"
  "ACT-02.7": "ontwerp per slice opstellen"
  "ACT-02.8": "bouwcontract opstellen"
  "ACT-02.9": "implementatieplan opstellen"
  "ACT-02.10": "Atlas leest eigen ontwerp mee (vervallen)"
  "ACT-02.11": "taken maken en op backlog zetten"
  "ACT-02.12": "use cases van de wens opstellen"
  "ACT-02.13": "wens: use cases en brieven toetsen"
  "ACT-02.14": "taken uitbreiding toetsen tegen werkpakketten"
  "ACT-02.15": "ontwerpbehoefte bepalen en brieven opstellen"
  "ACT-02.16": "pagina's en nieuwe patronen ontwerpen"
  "ACT-02.17": "uitbreidingslijst bijwerken"
  "ACT-02.51": "open taken in lopende slice tellen"
  "ACT-02.52": "toets van eigen uitbreidingsontwerp (vervallen)"
  "ACT-02.53": "vaste controles uitvoeren"
  "ACT-02.54": "backlog gereed van uitbreiding controleren"
  "ACT-02.55": "ontwerpbesluit vastleggen bij wijziging"
  "ACT-02.56": "brieven en ontwerp van wens afstemmen"
  "ACT-03.1": "document ter goedkeuring indienen"
  "ACT-03.2": "document beoordelen en besluiten"
  "ACT-03.3": "goedkeuring vastleggen en melden"
  "ACT-03.4": "vraag of opmerking van Carlo beantwoorden"
  "ACT-04.1": "ontvanger van de vraag bepalen"
  "ACT-04.2": "vragen stellen, grill-ronde"
  "ACT-04.3": "vragen beantwoorden"
  "ACT-04.4": "wijzigingsverzoek of productvraag opstellen"
  "ACT-04.5": "antwoorden beoordelen"
  "ACT-04.6": "volgende ronde stellen"
  "ACT-04.7": "oude splitsing van vragenloop (vervallen)"
  "ACT-04.51": "rondes zonder voortgang tellen"
  "ACT-04.52": "vastgelopen vraag escaleren"
  "ACT-04.53": "vraag-escalatie met opties voorleggen"
  "ACT-04.54": "escalatiebesluit doorgeven"
  "ACT-04.55": "contextverslag opstellen"
  "ACT-04.56": "contextverslag bevestigen of aanvullen"
  "ACT-05.1": "afkeuringen tellen"
  "ACT-05.2": "commentaar verwerken en document herzien"
  "ACT-05.3": "escalatie melden aan Dr. Evil"
  "ACT-05.4": "afkeuring-escalatie met opties voorleggen"
  "ACT-05.5": "besluit over vastgelopen document nemen"
  "ACT-05.6": "besluit uitvoeren"
  "ACT-06.1": "blokkade vastleggen"
  "ACT-06.2": "wachten op blokkerend issue"
  "ACT-06.3": "blokkade melden aan Dr. Evil"
  "ACT-06.4": "blokkade oplossen of eigenaar toewijzen"
  "ACT-06.5": "blokkade escaleren"
  "AGT-01": "agent Dr. Evil"
  "AGT-02": "agent Socrates"
  "AGT-03": "agent Atlas"
  "AGT-04": "aparte tech-lead-agent (vervallen)"
  "AGT-05": "agent Sentinel"
  "ASM-01": "betekenis van het analysedocument"
  "ASM-02": "epic als bovenliggend issue"
  "ASM-03": "vragen over implementatie naar Atlas"
  "ASM-04": "Dr. Evil met twee petten"
  "ASM-05": "aparte tech-lead-agent (vervallen)"
  "ASM-06": "laatste technische woord (vervallen)"
  "ASM-07": "uitbreiden pas na eerste backlog"
  "ASM-08": "vraag tussen agents via issue"
  "ASM-09": "Atlas ontwerpt buiten kern per slice"
  "ASM-10": "vraag van Carlo is geen afkeuring"
  "ASM-11": "telling begint opnieuw na escalatie"
  "ASM-12": "Dr. Evil pas bij blokkade"
  "ASM-13": "blokkade melden via issue"
  "ASM-14": "volgende wens uit de volgorde"
  "ASM-15": "meelezen door Atlas (vervallen)"
  "ASM-16": "vrager oordeelt vastgelopen (vervallen)"
  "ASM-17": "overdracht pas na analysepakket"
  "ASM-18": "afgekeurd document apart herzien"
  "ASM-19": "vorm met drie akkoorden (vervallen)"
  "ASM-20": "kleine ontwerpwijziging ook langs akkoord"
  "ASM-21": "poort bouwcontract in vaste controles"
  "ASM-22": "wachten op flowlimiet is geen herziening"
  "ASM-23": "wachttijd van uitbreidingen op Atlas"
  "ASM-24": "herinnering op het weekmoment"
  "ASM-25": "vraag naar wens op weekmoment-issue"
  "ASM-26": "oordeel per document bij ontwerppakket"
  "ASM-27": "visie is de productvisie"
  "ASM-28": "Carlo is de ontwerper"
  "ASM-29": "elk project heeft een gebruikersinterface"
  "ASM-30": "wat telt als open taak"
  "ASM-31": "project aanmaken bij directe opdracht"
  "ASM-32": "weekmoment en dagstart van Dr. Evil"
  "ASM-33": "hoogstens één doorloop per project"
  "ASM-34": "link naar git-repository in opdracht"
  "ASM-35": "inhoud van het herinneringsbericht"
  "ASM-36": "skills van Atlas volgens de matrix"
  "ASM-37": "oordeel per document bij paginaontwerp"
  "ASM-38": "kwaliteitspoorten bij stappen van Dr. Evil"
  "ASM-39": "uitbreidingslijst zonder controleur"
  "ASM-40": "waar grill-sessies komen"
  "ASM-41": "geen sessie zonder open punten"
  "ASM-42": "inhoud van het contextverslag"
  "ASM-43": "vragen-en-akkoordrondes als skill"
  "ASM-44": "to-tickets niet vereist"
  "ASM-45": "nieuw toets-issue per toetsronde"
  "ASM-46": "contentmodel bij CMS-projecten"
  "ASM-47": "Dr. Evil beslist over lopende doorloop"
  "ASM-48": "tellen van rondes bij contextverslag"
  "ASM-49": "inhoud van de leesbare versie"
  "ASM-50": "bron per veld in OpenAPI"
  "ASM-51": "Atlas kiest OpenAPI-versie en hulpmiddel"
  "ASM-52": "controles op het OpenAPI-bestand"
  "ASM-53": "plek van bestand en leesbare versie"
  "ASM-54": "herkomst van de korte naam"
  "ASM-55": "waar de korte naam komt"
  "B-01": "flow zonder sprints"
  "B-02": "ontwerp per slice, program design"
  "B-03": "Carlo is enige klantcontact"
  "B-04": "eigen issue voor het model"
  "B-05": "vier goedkeuringsrondes"
  "B-06": "Socrates maakt, Atlas toetst use cases"
  "B-07": "volledig databaseontwerp van de kern"
  "B-08": "keuze uit de voorstellen"
  "B-09": "wanneer Dr. Evil de wens vraagt"
  "B-10": "ontwerp eerst en architectuurprofielen"
  "B-11": "skills bij naam, niet nummer"
  "B-12": "model 0.10 goedgekeurd"
  "B-13": "antwoorden op de open vragen"
  "B-14": "model 0.11 goedgekeurd"
  "B-15": "grill-sessies om context te verzamelen"
  "B-16": "minder grill-momenten, optie A"
  "B-17": "OpenAPI voor het bouwcontract"
  "B-18": "codes met een korte naam"
  "CAP-01": "intake en overdracht van werk"
  "CAP-02": "requirements analyseren"
  "CAP-03": "use cases met acceptatiecriteria opstellen"
  "CAP-04": "use cases toetsen op ontwerpbaarheid"
  "CAP-05": "architectuurkeuze maken"
  "CAP-06": "domeinmodel maken"
  "CAP-07": "gedragsmodel maken"
  "CAP-08": "structuurontwerp maken"
  "CAP-09": "databaseontwerp maken"
  "CAP-10": "opdelen in vertical slices"
  "CAP-11": "bouwcontract ontwerpen"
  "CAP-12": "implementatieplanning maken"
  "CAP-13": "backlog opbouwen"
  "CAP-14": "poortcontrole uitvoeren"
  "CAP-15": "goedkeuring aanvragen, vastleggen, melden"
  "CAP-16": "productbesluit en antwoord van Carlo"
  "CAP-17": "vragen tussen agents afhandelen"
  "CAP-18": "escaleren en besluit voorbereiden"
  "CAP-19": "blokkades en afhankelijkheden bewaken"
  "CAP-20": "volgorde en flow bewaken"
  "CAP-21": "ontwerpbesluiten vastleggen"
  "CAP-22": "ontwikkelafspraken vastleggen"
  "CAP-23": "rondes tellen en begrenzen"
  "CAP-24": "paginalijst en paginabrieven opstellen"
  "CAP-25": "paginaontwerp maken"
  "CAP-26": "contentmodel en platformconfiguratie"
  "CAP-27": "component-, route- en dataontwerp"
  "CHG-001": "eerste versie organisatieanalyse"
  "CHG-002": "feitencheck door de agents"
  "CHG-003": "eerste tech-leadbesluiten van Carlo verwerkt"
  "CHG-004": "procesmodellen uitgewerkt, ronde 2"
  "CHG-005": "use cases en database besloten"
  "CHG-006": "Atlas voert tech-leadtaken uit"
  "CHG-007": "geen rol tech lead verwerkt"
  "CHG-008": "rollen- en skillmodel, ronde 3"
  "CHG-009": "feitencheck van ronde 3"
  "CHG-010": "eindontwerp: pagina en uitbreidingsgids"
  "CHG-011": "keuze uit de voorstellen verwerkt"
  "CHG-012": "eindontwerp bijgewerkt naar model 0.8"
  "CHG-013": "moment van vraag naar volgende wens"
  "CHG-014": "eindontwerp bijgewerkt naar model 0.9"
  "CHG-015": "ontwerp-eerst en architectuurprofielen toegevoegd"
  "CHG-016": "skills bij naam, niet nummer"
  "CHG-017": "weergaven van model 0.10"
  "CHG-018": "gaten in register 0.10 hersteld"
  "CHG-019": "antwoorden op open vragen verwerkt"
  "CHG-020": "weergaven van model 0.11"
  "CHG-021": "gaten in model 0.11 hersteld"
  "CHG-022": "grill-sessies toegevoegd"
  "CHG-023": "OpenAPI voor het bouwcontract"
  "CHG-024": "codes met een korte naam"
  "FND-001": "use cases: twee eigenaren"
  "FND-002": "architect doet meer dan beschreven"
  "FND-003": "implementatieplan verschuift"
  "FND-004": "koppeling van Atlas wijkt af"
  "FND-005": "veel akkoordpoorten bij Carlo"
  "FND-006": "veel ontwerp vooraf"
  "FND-007": "uitbreiden zonder akkoord botst met route"
  "FND-008": "twee loketten"
  "FND-009": "grens orchestrator, tech lead, architect"
  "FND-010": "vragenloops zonder uitgang"
  "FND-011": "stappen vóór definition of done ontbreken"
  "FND-012": "proces hangt aan ontbrekende agent"
  "FND-013": "orchestrator zonder eigen ritme"
  "FND-014": "ontwerp per slice zonder controle"
  "FND-015": "afkeuring zonder maximum"
  "FND-016": "eerste slice wacht op kernontwerp"
  "FND-017": "Atlas beoordeelt eigen ontwerp zelf"
  "FND-018": "alles na analyse hangt aan Atlas"
  "FND-019": "kleine ontwerpwijzigingen zonder akkoord"
  "FND-020": "twee schrijvers in GLOSSARY.md"
  "FND-021": "implementatieplan maakt taken"
  "FND-022": "opdeling, plan en taken zonder controle"
  "FND-023": "vijf Atlas-taken zonder skill"
  "FND-024": "niemand telt de rondes"
  "FND-025": "poortcontrole kent niet alle akkoorden"
  "FND-026": "akkoord op implementatieplan ontbreekt in model"
  "FND-027": "moment van de vraag bij wenskeuze"
  "FND-028": "geen ontwerpstap vóór slices en contract"
  "FND-029": "afleiding loopt verkeerde kant op"
  "FND-030": "geen visie en geen paginalijst"
  "FND-031": "één zware modelleermethode voor alles"
  "FND-032": "uitbreidingslijst is geen vast onderdeel"
  "FND-033": "geen ontwerper behalve Carlo"
  "FND-034": "niemand bewaakt het design systeem"
  "FND-035": "agents kunnen Claude Design niet openen"
  "FND-036": "drie triggers voor tweede doorloop"
  "FND-037": "dagelijkse herinnering botst met skills"
  "FND-038": "register beschreef grilling verkeerd"
  "FND-039": "context verloren bij overdracht"
  "FND-040": "formaat API-contract lag niet vast"
  "FND-041": "codes niet te lezen voor Carlo"
  "G-01.1": "bij wie komt de opdracht binnen?"
  "G-01.2": "bestaat de tech-lead-agent? (vervallen)"
  "G-01.3": "meelezen door Atlas bij plan (vervallen)"
  "G-01.4": "toets nieuwe klant: use cases of brieven aanpassen?"
  "G-01.5": "toets nieuwe klant: taken aanpassen?"
  "G-01.6": "welk architectuurprofiel is goedgekeurd?"
  "G-01.7": "opdracht en design systeem tegelijk starten"
  "G-01.8": "analysepakket en design systeem samenvoegen"
  "G-01.9": "architectuurkeuze en ontwerpen samenvoegen"
  "G-02.1": "is de volgende wens duidelijk?"
  "G-02.2": "zijn eisen en brieven al goedgekeurd?"
  "G-02.3": "raakt de wens het globale ontwerp?"
  "G-02.4": "meelezen door Atlas bij ontwerp (vervallen)"
  "G-02.5": "toets uitbreiding: use cases of brieven aanpassen?"
  "G-02.6": "toets uitbreiding: taken aanpassen?"
  "G-02.7": "is er een ontwerp nodig?"
  "G-02.8": "loopt er al een uitbreiding?"
  "G-03.1": "samengevoegde beslissing (vervallen)"
  "G-04.1": "wijziging of productkeuze nodig?"
  "G-04.2": "zijn er nog open punten?"
  "G-04.51": "twee rondes zonder voortgang?"
  "G-04.52": "bevestigt ontvanger het contextverslag?"
  "G-05.1": "is dit de derde afkeuring?"
  "G-06.1": "heeft de blokkade een eigenaar?"
  "G-06.2": "kan Dr. Evil de blokkade oplossen?"
  "GOV-01": "akkoord requirements en bedrijfsregels"
  "GOV-02": "akkoord use cases en paginabrieven"
  "GOV-03": "akkoord domeinmodel"
  "GOV-04": "akkoord sequentiediagrammen"
  "GOV-05": "akkoord ontwerpklassendiagram"
  "GOV-06": "akkoord bouwcontract per slice"
  "GOV-07": "keuze van de volgende wens"
  "GOV-08": "escalatiebesluit van Carlo"
  "GOV-09": "akkoord architectuurkeuze en profiel"
  "GOV-10": "akkoord analysepakket"
  "GOV-11": "akkoord technisch ontwerp volgens profiel"
  "GOV-12": "akkoord wijzigingsverzoek of productkeuze"
  "GOV-13": "akkoord databaseontwerp"
  "GOV-14": "akkoord paginaontwerp"
  "GOV-15": "akkoord richting: architectuur en ontwerpen"
  "GS1": "grill-sessie bij de analyse"
  "GS2": "grill-sessie bij de use cases"
  "GS3": "grill-sessie bij de toets door Atlas"
  "GS4": "grill-sessie bij de architectuurkeuze"
  "GS5": "grill-sessie bij brieven en ontwerp (vervallen)"
  "GS6": "grill-sessie bij technisch ontwerp (vervallen)"
  "GS7": "grill-sessie bij opdeling in slices (vervallen)"
  "GS8": "grill-sessie bij taken maken (vervallen)"
  "GS9": "grill-sessie bij analyse van wens"
  "GS10": "grill-sessie bij use cases van wens"
  "GS11": "grill-sessie bij toets van wens"
  "GS12": "grill-sessie bij brieven en ontwerp wens (vervallen)"
  "GS13": "grill-sessie bij opdeling van wens (vervallen)"
  "GS14": "grill-sessie bij wijziging van architectuur"
  "GS15": "grill-sessie bij taken van wens (vervallen)"
  "M-1": "rondes en afkeuringen tellen"
  "M-2": "epics in Paperclip"
  "M-3": "eindpunt backlog gereed"
  "M-4": "flowcheck en herinnering"
  "M-5": "geen reactie van Carlo"
  "M-6": "vraag tussen agents"
  "M-7": "stoppen van een proces"
  "M-8": "Atlas leest eigen werk mee (vervallen)"
  "M-9": "akkoord na toets van Atlas (vervallen)"
  "M-10": "taken toetsen tegen werkpakketten"
  "M-11": "ontwerp in een designtool"
  "M-12": "uitbreidingslijst in Paperclip"
  "M-13": "ontwerp van Carlo zelf"
  "M-14": "project aanmaken in Paperclip"
  "M-15": "rondes zonder voortgang tellen"
  "M-16": "contextverslag bij meer grill-sessies"
  "M-17": "rondes op hetzelfde issue"
  "OPEN-01": "opdracht rechtstreeks bij Socrates"
  "OPEN-02": "laatste woord bij technisch bezwaar"
  "OPEN-03": "wanneer de uitbreiding start"
  "OPEN-04": "wie project en repository aanmaakt"
  "OPEN-05": "koppeling van skills aan Atlas"
  "OPEN-06": "architectuur en database vóór backlog"
  "OPEN-07": "uitwerking zonder tech lead"
  "OPEN-08": "welke eisen tot de kern horen"
  "OPEN-09": "termijn voor Carlo's akkoord"
  "OPEN-10": "mechanisme voor Carlo's akkoord"
  "OPEN-11": "proefrun van de skills"
  "OPEN-12": "eigenaar van GLOSSARY.md"
  "OPEN-13": "drempel voor aparte agent naast Atlas"
  "OPEN-14": "plek van design systeem en ontwerpen"
  "OPEN-15": "mogen agents een project aanmaken"
  "PRC-01": "nieuwe klant: opdracht tot eerste backlog"
  "PRC-02": "backlog uitbreiden met volgende slice"
  "PRC-03": "akkoord-poort van de project owner"
  "PRC-04": "vragenloop en grill-sessie tussen agents"
  "PRC-05": "afkeuring en herziening"
  "PRC-06": "blokkade afhandelen"
  "PRC-07": "weekmoment en prioriteren"
  "PRC-08": "organisatie aanpassen"
  "PRP-001": "één loket voor opdrachten"
  "PRP-002": "use cases bij de business analist"
  "PRP-003": "minder, betere akkoordmomenten"
  "PRP-004": "globaal ontwerp licht, detail per slice"
  "PRP-005": "begrensde vragenloop"
  "PRP-006": "afkeuring: twee herzieningen, dan escalatie"
  "PRP-007": "uitbreiden zonder akkoord, met controles"
  "PRP-008": "verdeling orchestrator en architect"
  "PRP-009": "tweede ontwerper of toets (vervallen)"
  "PRP-010": "afspraken voor developers in slice 1"
  "PRP-011": "design systeem bij de start (vervallen)"
  "PRP-012": "tech-lead-agent instellen (vervallen)"
  "PRP-013": "controle backlog gereed"
  "PRP-014": "vaste start voor de uitbreiding"
  "PRP-015": "kern markeren bij de requirements"
  "PRP-016": "database: fundament vooraf (vervallen)"
  "PRP-017": "ontwerpbesluit bij elke ontwerpwijziging"
  "PRP-018": "tech-leadtaken bij aparte agent later"
  "PRP-019": "skill voor opdelen in slices"
  "PRP-020": "skill voor API-contracten"
  "PRP-021": "skill voor toetsen van use cases"
  "PRP-022": "skill voor vragen over ontwerp"
  "PRP-023": "skill voor vragen- en akkoordrondes"
  "PRP-024": "skills voor plan en modelleren uitbreiden"
  "PRP-025": "skill voor poortcontrole uitbreiden"
  "PRP-026": "één eigenaar per soort term"
  "PRP-027": "Atlas toetst taken tegen werkpakketten"
  "PRP-028": "voorwaardelijk akkoord op ontwerp en plan"
  "PRP-029": "volgorde van stappen bij nieuwe klant"
  "PRP-030": "paginalijst met nu en later"
  "PRP-031": "ontwerpniveau per paginatype"
  "PRP-032": "wie ontwerpt pagina's en waarin"
  "PRP-033": "uitbreidingslijst en stappen per uitbreiding"
  "PRP-034": "drie architectuurprofielen"
  "PRP-035": "geen nieuwe agent nu"
  "PRP-036": "vier akkoorden bij nieuwe klant"
  "PRP-037": "design-consistentie bewaken"
  "PRP-038": "lichtere use cases bij eenvoudige site"
  "PRP-039": "skills bij naam in conventies"
  "PRP-040": "akkoord altijd via kaart op issue"
  "PRP-041": "toets van Atlas via toets-issue"
  "PRP-042": "toegang tot Claude Design"
  "PRP-043": "templatecontract bij CMS-projecten"
  "PRP-044": "korte namen in de conventies"
  "ROL-01": "project owner"
  "ROL-02": "orchestrator en scrum master"
  "ROL-03": "business analist"
  "ROL-04": "systeemarchitect"
  "ROL-05": "tech lead (vervallen)"
  "TL-01": "opdelen in slices"
  "TL-02": "technische volgorde van slices bepalen"
  "TL-03": "ontwerp per slice buiten de kern"
  "TL-04": "bouwcontract per slice opstellen"
  "TL-05": "implementatieplan per slice opstellen"
  "TL-06": "vragen stellen, doorverwijzen, besluit vastleggen"
  "TL-07": "implementatievragen van developers beantwoorden"
  "TL-08": "vragen van Dr. Evil beantwoorden"
  "TL-09": "ontwerpafwijkingen van Sentinel afhandelen"
  "TL-V1": "tech lead komt er, later vervallen"
  "TL-V2": "Carlo bepaalt de volgorde van wensen"
  "TL-V3": "Dr. Evil maakt taken uit werkpakketten"
  "TL-V4": "Carlo keurt API-contracten goed"
  "TL-V5": "kern vooraf volledig ontwerpen"
  "TL-V6": "Atlas voert tech-leadtaken uit"
  "TL-V7": "geen rol tech lead"

aannames:
  - {id: ASM-01, tekst: "Het 'analysedocument' uit UC1 stap 2 is requirements.md, eventueel met business-rules.md. Use cases zijn een apart document (zie FND-001)."}
  - {id: ASM-02, tekst: "Een epic wordt in Paperclip een bovenliggend issue met de taken als onderliggende issues. Niet geverifieerd dat Paperclip een eigen epic-begrip heeft."}
  - {id: ASM-03, tekst: "'Vragen over implementatie gaan terug naar de tech lead' (UC2): de tech lead is Atlas (TL-V7). Het gaat om vragen van Dr. Evil bij het opdelen (TL-08). Vragen van developers (TL-07) vallen buiten de scope.", wijziging: "CHG-007"}
  - {id: ASM-04, tekst: "De orchestrator en scrum master is één agent (Dr. Evil) met twee petten. 'Zij' in UC1 stap 4 betekent Dr. Evil."}
  - {id: ASM-07, tekst: "UC2 start alleen voor een project waarvoor UC1 is afgerond: er is een goedgekeurde analyse, een goedgekeurd globaal ontwerp en een eerste backlog."}
  - {id: ASM-09, tekst: "Wat buiten de kern valt, ontwerpt Atlas per slice (ACT-02.7). Raakt een uitbreiding de architectuur, het domeinmodel of de database, dan werkt Atlas eerst het globale ontwerp bij (ACT-02.6).", bron: "rolanalyse-techlead A-TL-01 (nog niet bevestigd)", nieuw_in: "0.2", wijziging: "CHG-007: tech lead → Atlas"}
  - {id: ASM-10, tekst: "Een vraag of opmerking van ROL-01 zonder besluit telt niet als afkeuring; pas 'Wijzigingen nodig' start PRC-05.", nieuw_in: "0.3"}
  - {id: ASM-11, tekst: "Na een escalatiebesluit begint de telling van PRC-05 opnieuw; een volgende vastloper gaat weer naar ROL-01.", nieuw_in: "0.3"}
  - {id: ASM-12, tekst: "Een vraag tussen agents loopt rechtstreeks van vrager naar ontvanger; Dr. Evil komt pas in beeld bij een blokkade of escalatie.", nieuw_in: "0.3"}
  - {id: ASM-13, tekst: "Een agent meldt een blokkade zonder eigenaar aan Dr. Evil met een issue dat aan hem is toegewezen.", nieuw_in: "0.3"}
  - {id: ASM-14, tekst: "Dr. Evil neemt de volgende wens uit de volgorde van ROL-01 op de uitbreidingslijst (sinds 0.10; tot 0.9: op het backlog) en het focusdoel; alleen als die niet duidelijk is, vraagt hij het (GOV-07). Het moment van die vraag is besloten in B-09 (0.9): direct, één keer.", nieuw_in: "0.3", wijziging_0_11: "CHG-018 (A-3): de volgende wens komt van de uitbreidingslijst, in de volgorde van ROL-01 (ACT-02.1; B-12: PRP-033)"}
  - {id: ASM-08, tekst: "Een vraag tussen agents loopt via een issue dat aan de ontvanger is toegewezen. Een vermelding wekt een agent niet (AGENTS.md Socrates).", wijziging_0_12: "Uitzondering sinds 0.12: bij de toets (GS3, GS11) is het toets-issue van Atlas, de vrager (B-14: PRP-041; M-17)"}
  - {id: ASM-17, tekst: "Dr. Evil draagt het ontwerp pas over aan Atlas als het analysepakket (GOV-10: requirements, use cases, bedrijfsregels, kern, visie en paginalijst met brieven) is goedgekeurd. Atlas mag volgens zijn instructies de architectuurkeuze al na de requirements beginnen; het model kiest de eenvoudige volgorde.", nieuw_in: "0.4", wijziging: "CHG-011: GOV-10 in plaats van GOV-01 en GOV-02", wijziging_0_11: "CHG-018 (A-3): visie en paginalijst met brieven horen sinds 0.10 bij GOV-10 (B-12: PRP-036)"}
  - {id: ASM-18, tekst: "Bij GOV-11 werkt Atlas de documenten van het technisch ontwerp volgens het profiel af in de vaste volgorde (bij P3: domeinmodel, sequentiediagrammen, klassendiagram, databaseontwerp; de architectuurkeuze zit sinds 0.10 niet meer in GOV-11 maar in GOV-15) en legt ze samen voor. Keurt ROL-01 een document af, dan gaat alleen dat document door PRC-05. Latere documenten die door de herziening geraakt worden, werkt Atlas mee bij, en die komen opnieuw in hetzelfde pakket. De rest blijft goedgekeurd. Alleen het afgekeurde document telt een herzieningsronde (PRC-05); een document dat alleen wordt meegewerkt, telt geen ronde, maar keurt ROL-01 het daarna af, dan telt dat wel als afkeuring van dat document. Bij GOV-10 geldt hetzelfde: keurt ROL-01 de requirements af, dan werkt Socrates de use cases en de kern mee bij als ze geraakt worden, toetst Atlas de gewijzigde use cases opnieuw (ACT-01.23), en komen ze opnieuw in hetzelfde pakket. Bij een pakket handelt de producent pas als elk document een oordeel heeft; de kaart kent alleen goedkeuren en afkeuren.", nieuw_in: "0.8", wijziging: "0.8 na controle-model-v08 (L-04, L-13): ook GOV-10; pas handelen als elk document een oordeel heeft", bevestigd: "2026-10-29, Carlo, kaart 66da5f92", wijziging_0_10: "0.10 (B-12): geldt ook voor GOV-15 (per producent, ASM-26); in GOV-11 zit de architectuurkeuze niet meer (die zit in GOV-15, PRP-036)", wijziging_0_11: "CHG-018 (A-2): label \"0.10 (Concept)\" → \"0.10 (B-12)\"; tekst: GOV-11 is het technisch ontwerp volgens profiel, zonder architectuurkeuze (die zit in GOV-15)"}
  - {id: ASM-20, tekst: "PRP-024 is goedgekeurd zonder toelichting. Het model gebruikt optie (a), het advies: de skills volgen het model en de instructies van Atlas; elke wijziging van een goedgekeurd document gaat langs zijn GOV, ook een kleine, aantoonbaar niet-breaking aanvulling.", bron: "kaart 2b7a6d2d; voorstellen PRP-024", nieuw_in: "0.8", bevestigd: "2026-10-29, Carlo, kaart 66da5f92"}
  - {id: ASM-21, tekst: "PRP-025 zette de poort GOV-06 vóór ACT-02.11. In 0.8 komt tussen GOV-06 en de taken eerst ACT-02.53. Het model legt die poort daarom in ACT-02.53: Dr. Evil controleert daar dat GOV-06 er is en, als de wens het globale ontwerp raakte, ook de akkoorden op de geraakte documenten met het ADR. Atlas wacht zelf op die akkoorden vóór ACT-02.7 (Feit: AGENTS.md Atlas, akkoord per fase). Controle 1 van PRP-007 (\"elke taak verwijst naar FR/UC/AC\") gebeurt in ACT-02.53 op de werkpakketten, omdat de taken dan nog niet bestaan; ACT-02.54 controleert daarna de taken zelf.", bron: "controle-model-v08 L-02, L-12; voorstellen PRP-007, PRP-025", nieuw_in: "0.8", bevestigd: "2026-10-29, Carlo, kaart 66da5f92"}
  - {id: ASM-22, tekst: "Controle 4 van ACT-02.53 (flowlimieten) is geen herzieningsronde. Dr. Evil wacht tot er ruimte is; dat telt niet mee voor het maximum van 2. Staat de slice daardoor tot het volgende weekmoment stil, dan meldt hij dat op het weekmoment (PRC-07), en ROL-01 beslist over de volgorde.", bron: "controle-model-v08 L-03", nieuw_in: "0.8"}
  - {id: ASM-23, tekst: "PRP-018 noemt twee aanleidingen voor een aparte agent: zodra er developers zijn, of zodra uitbreidingen aantoonbaar op Atlas wachten. Dan signaleert Dr. Evil dat en legt hij het voor (escalation-management, PRC-08). Tot ROL-01 een drempel kiest (OPEN-13), meldt Dr. Evil op het weekmoment hoe lang elke uitbreiding op Atlas wacht. Die tussentijdse melding staat niet in PRP-018: het is een aanvulling, bevestigd (kaart 66da5f92). Het signaal hangt aan geen skill, want PRC-07 is niet gemodelleerd; kandidaten zijn weekmoment en escalation-management.", bron: "voorstellen PRP-018; controle-model-v08 L-06", nieuw_in: "0.8", bevestigd: "2026-10-29, Carlo, kaart 66da5f92"}
  - {id: ASM-24, tekst: "B-09 zegt dat Dr. Evil je zonder antwoord pas op het weekmoment herinnert, en noemt alleen escalation-management als skill die moet veranderen. Om die herinnering uit te voeren, moet ook weekmoment een open GOV-07-vraag opnemen, want die skill neemt nu alleen open punten van het vorige weekmoment-issue over. De uitgewerkte werkwijzen van `escalation-management` en `weekmoment` in skill-specificaties zijn een voorstel.", bron: "controle-model-v09 K-01; weekmoment SKILL.md (feit, 2026-10-30)", nieuw_in: "0.9", bevestigd: "GK-4, kaart 4d0845d3 (2026-10-30)", wijziging_0_12: "CHG-021 (A-3): aangevuld door B-13 en ASM-35: zonder antwoord staat de vraag ook elke werkdag om 09:00 in het herinneringsbericht"}
  - {id: ASM-25, tekst: "Start PRC-02 op het weekmoment in plaats van via de flowcheck (PRP-014), en blijkt de volgende wens niet uit de volgorde, dan komt de vraag van GOV-07 op het weekmoment-issue zelf. B-09 gaat alleen over de start via de flowcheck.", bron: "controle-model-v09 K-07", nieuw_in: "0.9", bevestigd: "GK-4, kaart 4d0845d3 (2026-10-30)"}
  - {id: ASM-26, tekst: "GOV-15 heeft meer producenten (Atlas, de ontwerper, Socrates). Elke producent handelt zijn eigen afgekeurde document; geraakte latere documenten werkt de eigen producent mee bij (ASM-18 per producent). Dr. Evil zet het pakket pas door als elk document een oordeel heeft.", nieuw_in: "0.10", bevestigd: "kaart f261b9ac (2026-10-30, B-12)"}
  - {id: ASM-27, tekst: "De visie in B-10 is de productvisie (doel, doelgroepen, kernboodschap, hoofdstructuur, wat nu en later in principe). Socrates maakt haar in het analysepakket; de technische visie is de architectuurkeuze van Atlas.", nieuw_in: "0.10", bevestigd: "kaart f261b9ac (2026-10-30, B-12)"}
  - {id: ASM-28, tekst: "Zolang er geen designer- of frontend-agent is, is ROL-01 de ontwerper (Feit: AGENTS.md Dr. Evil: Carlo is product owner, designer, frontend developer en CEO). Een ontwerp dat ROL-01 zelf maakt, keurt hij niet apart goed; bij GOV-15 en GOV-14 beoordeelt hij dan alleen de bijgewerkte brieven.", nieuw_in: "0.10", bevestigd: "kaart f261b9ac (2026-10-30, B-12)"}
  - {id: ASM-29, tekst: "Elk project in PRC-01 heeft een gebruikersinterface (website of applicatie, opdracht a5a789fe). Zonder UI vervallen de paginalijst en het ontwerp.", nieuw_in: "0.10", bevestigd: "kaart f261b9ac (2026-10-30, B-12)"}
  - {id: ASM-30, tekst: "Een taak is 'open' als haar status niet done of cancelled is; ook taken die geblokkeerd zijn of in review staan, tellen mee. De 'lopende slice' is de epic die het laatst op het backlog is gezet (ACT-01.20 of ACT-02.11). De drempel is 5 of minder ('nog 5 taken open' lees ik als: zodra het er 5 of minder zijn), per project.", bron: "B-13 (comment a690e8f3: 'als er nog 5 taken open zijn in het backlog in de huidige slice')", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-31, tekst: "Komt de opdracht bij Socrates binnen, dan maakt hij eerst het Paperclip-project aan en meldt de opdracht daarna aan Dr. Evil (ACT-01.51). Inhoudelijk begint hij pas na toewijzing: PRP-001 (één loket) blijft. Komt de opdracht bij Dr. Evil binnen, dan maakt hij het project aan (ACT-01.2). Dr. Evil controleert of het project al bestaat, zodat er nooit twee komen.", bron: "B-13 (OPEN-04); B-08 (PRP-001)", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-32, tekst: "Twee routines van Dr. Evil: het weekmoment op maandag om 04:00, en een dagstart elke werkdag (maandag tot en met vrijdag) om 09:00 met de flowcheck (ACT-02.51) en het herinneringsbericht (ASM-35). Tijden in Nederlandse tijd (Europe/Amsterdam). Raakt de slice in het weekend leeg, dan start PRC-02 op maandag om 04:00 via het weekmoment.", bron: "B-13 (OPEN-03: weekmoment maandag 04:00; OPEN-09: bericht om 09:00); delivery-management ('Dagelijkse flowcheck (routine, elke werkdag)'). Het tijdstip van de flowcheck noemde ROL-01 niet", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-33, tekst: "Per project loopt er hoogstens één doorloop van PRC-02 tegelijk (G-02.8). Een doorloop loopt van de start van een uitbreiding (ACT-02.1) tot die uitbreiding op 'in backlog' staat (ACT-02.17); Dr. Evil ziet dat aan het issue van die uitbreiding. Komt er een trigger terwijl er al een loopt, dan start er geen tweede. ROL-01 doet een verzoek met een comment of issue voor Dr. Evil. Komt het verzoek tijdens een lopende doorloop, dan start het niets: Dr. Evil zet de gevraagde wens bovenaan de uitbreidingslijst en meldt dat; die wens komt bij de volgende start als eerste.", bron: "FND-036", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-34, tekst: "ROL-01 zet de link naar de git-repository in de opdracht. Ontbreekt de link, dan maakt de ontvanger het project zonder repository aan en vraagt hij de link na bij ROL-01; de repository wordt daarna aan het project gekoppeld. Paperclip maakt zelf geen GitHub-repository aan: een URL registreert alleen een werkruimte (feit, skill paperclip).", bron: "B-13 (OPEN-04); skill paperclip, api-reference (projects, repositoryUrls)", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-35, tekst: "Het herinneringsbericht van 09:00 bevat alles wat op ROL-01 wacht: open goedkeuringskaarten, open vragenkaarten, een open GOV-07-vraag en escalaties, elk met een link en de datum waarop het klaarstond, oudste bovenaan. Wacht er niets, dan komt er geen bericht. Dr. Evil zet het bericht als comment op het lopende weekmoment-issue, zodat het steeds op dezelfde plek staat. Dit is geen termijn: een akkoord vervalt niet.", bron: "B-13 (OPEN-09: 'Hier moet ik dagelijks aan herinnerd worden', 'stuur om 9:00 een bericht'); vragenkaart e57c99a3 vraag 2 bleef onbeantwoord", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-36, tekst: "'Wijs skills correct toe' (OPEN-05) lees ik als: de koppeling van elke agent volgt de agent-skillmatrix van het model. Skills die het model niet bij Atlas legt (zoals paperclip-create-agent, paperclip-board en to-spec; to-tickets blijft, want het model gebruikt hem), gaan bij hem weg; skills die het model wel bij hem legt maar die nog niet gekoppeld zijn, komen erbij. Dr. Evil legt de lijst voor (PRC-08) en ROL-01 keurt die goed.", bron: "B-13 (comment f06fede2: 'Wijs skills correct toe'); OPEN-05", nieuw_in: "0.11", bevestigd: "kaart fa26d50e (2026-10-30, B-14)", wijziging_0_12: "CHG-021 (B-1): 'to-tickets blijft, want het model gebruikt hem' klopt niet: geen stap gebruikt hem; zie ASM-44"}
  - {id: ASM-37, tekst: "De regel van ASM-26 geldt ook voor GOV-14: Dr. Evil gaat pas verder (ACT-02.4) als elk document een oordeel heeft, en elke producent herstelt zijn eigen afgekeurde document (ASM-18 per producent). GOV-14 is één kaart met een oordeel per document: het ontwerp door de ontwerper (nu ROL-01, ASM-28; afgekeurd → ACT-02.16), de bijgewerkte brieven door Socrates (afgekeurd → ACT-02.56). Heeft ROL-01 het ontwerp zelf gemaakt, dan staan alleen de brieven op de kaart.", bron: "register-gaten-0.10 B-1; melding C-02 (CHG-017); ASM-26; GOV-14 bij_afwijzing", nieuw_in: "0.11", wijziging_0_11: "CHG-018 (B-1)", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-38, tekst: "De poorten van `quality-gates` uit 0.10 horen bij deze stappen van Dr. Evil: GOV-15 (met GOV-11) vóór ACT-01.15 (Atlas vragen om de opdeling in slices); GOV-14 (waar een ontwerp nodig was, G-02.7), met GOV-01 en GOV-02 (met de brieven), vóór ACT-02.4 (Atlas vragen wat er nu gebouwd moet worden); GOV-02 en waar nodig GOV-14 opnieuw in de vaste controles van ACT-02.53, samen met GOV-06. Welke documenten bij een poort verplicht zijn, volgt uit het profiel (`profielen`, later `architectuurprofielen`).", bron: "register-gaten-0.10 B-3; melding D-08 (CHG-017); `quality-gates` wijziging_0_10; ACT-01.14 → ACT-01.15 en GOV-14 → ACT-02.4 in PRC-01 en PRC-02; ACT-02.53 output", nieuw_in: "0.11", wijziging_0_11: "CHG-018 (B-3)", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-39, tekst: "De uitbreidingslijst heeft bewust geen controleur (ACT-01.29, ACT-02.17: controleur —). ROL-01 bepaalt de inhoud en de volgorde en ziet de lijst op het weekmoment (PRP-033). Dit is geen hiaat.", bron: "register-gaten-0.10 B-4; melding C-08 (CHG-017); B-12: PRP-033", nieuw_in: "0.11", wijziging_0_11: "CHG-018 (B-4)", bevestigd: "kaart fa26d50e (2026-10-30, B-14)"}
  - {id: ASM-40, tekst: "Een grill-sessie komt waar context voor het eerst van de ene partij naar de andere gaat en nog niets is vastgelegd dat als contract kan dienen (B-16, optie A): met ROL-01 bij de start van een stuk werk (analyse GS1 en GS9, use cases GS2 en GS10, architectuurkeuze GS4; GS14 alleen als architectuur of profiel verandert) en bij de overdracht van Socrates naar Atlas (toets van use cases en brieven, GS3 en GS11). Eén sessie per moment; die dekt ook de volgende stappen van dezelfde uitvoerder die op dezelfde context bouwen. Geen vaste sessie bij stappen die bouwen op wat ROL-01 heeft goedgekeurd of wat net is getoetst, bij stappen van ROL-01 zelf, bij doorgeven en melden, bij controleren, tellen en poorten, en bij het bijhouden van lijsten. Daarnaast is elke vraag tussen agents een grill-sessie (PRC-04).", bron: "B-15 (kaart d57f0546)", nieuw_in: "0.12", stand: "bevestigd (B-16, kaart a5523ebd)"}
  - {id: ASM-41, tekst: "Heeft de uitvoerder na het lezen geen open punten, dan is er geen sessie, geen vraag en geen contextverslag (B-16: een contextverslag alleen als er iets besproken is). Zo krijgt ROL-01 geen extra vraag als er niets te vragen is.", bron: "B-15 (kaart d57f0546)", nieuw_in: "0.12", stand: "bevestigd (B-16, kaart a5523ebd)"}
  - {id: ASM-42, tekst: "Het contextverslag komt er alleen als er in een sessie iets besproken is (B-16). Het is een document `contextverslag` op het issue waarop de uitvoerder de stap doet (bij de toets van Atlas: het toets-issue; bij Dr. Evil: het issue waarop hij de taken maakt), met per sessie één sectie: (1) wat vaststaat en de bron, (2) wat in de sessie is beslist en door wie, (3) wat naar ROL-01 ging (GOV-12) en de uitkomst, (4) de documenten met revisie. De partner bevestigt met een comment op het vraag- of toets-issue (tussen agents) of als laatste vraag op de vragenkaart (ROL-01). De volgende stap leest het verslag als input.", bron: "B-15 (kaart d57f0546)", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-43, tekst: "Elke stap met een grill-sessie (de beginstap en de stappen waarin de rondes lopen: ACT-01.4, ACT-01.21 en PRC-04) krijgt vragen-en-akkoordrondes als skill. Zolang die skill niet bestaat, telt de stap als ontbreekt.", bron: "B-15 (kaart d57f0546)", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-44, tekst: "to-tickets staat in het model als 'beschikbaar, niet vereist': geen stap gebruikt hem. Of hij bij Atlas gekoppeld blijft, legt Dr. Evil voor in het pakket met de volledige skilllijst per agent (PRC-08, ASM-36). (gat B-1)", bron: "B-15 (kaart d57f0546); register-gaten-0-11 groep B", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-45, tekst: "Per toetsronde komt er een nieuw toets-issue, want het vorige staat op done. De grill-rondes binnen één toetsronde lopen op hetzelfde toets-issue, zoals de rondes van een vraag in PRC-04. (gat B-2)", bron: "B-15 (kaart d57f0546); register-gaten-0-11 groep B", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-46, tekst: "Bij P1 maakt Atlas het contentmodel bij het technisch ontwerp (ACT-01.60) en werkt het per slice bij als een uitbreiding dat vraagt (ACT-02.7), met architect-cms-configuratie. (gat B-3)", bron: "B-15 (kaart d57f0546); register-gaten-0-11 groep B", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-47, tekst: "Bij G-02.8 (loopt er al een doorloop?) beslist Dr. Evil (ROL-02). (gat B-4)", bron: "B-15 (kaart d57f0546); register-gaten-0-11 groep B", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-48, tekst: "(1) Een aanvulling op het contextverslag is een nieuwe ronde: G-04.52 nee gaat naar de telling (ACT-04.51). De vrager beoordeelt de aanvulling (ACT-04.5); neemt hij haar over, dan is er voortgang. (2) Na een escalatiebesluit begint de telling opnieuw, zoals ASM-11. (3) In een sessie met ROL-01 telt niemand rondes: ROL-01 is zelf degene naar wie geëscaleerd zou worden. Antwoordt ROL-01 niet, dan staat de vraag in het herinneringsbericht (B-13). (4) Het contextverslag mag bij een akkoord als achtergrond worden genoemd; het is geen item op de kaart.", bron: "v012-controle K12-01, K12-05, K12-11", nieuw_in: "0.12", stand: "bevestigd", bevestigd: "kaart 2ddaa565 (2026-10-31)"}
  - {id: ASM-49, tekst: "De leesbare versie van het API-contract bevat per pagina van de slice: welke gegevens de pagina toont of verstuurt, welke acties er zijn, welke foutmeldingen de gebruiker kan zien en per veld de bron. Daaronder per operatie een korte tabel: wat het doet, wat erin gaat, wat eruit komt en wie het mag gebruiken.", bron: "B-17 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-50, tekst: "De bron per veld (de bronkolom van PRP-032) staat in het OpenAPI-bestand zelf, als eigen veld (een extensie zoals x-bron). De leesbare versie toont die bron. Zo is er geen tweede plek voor de bron.", bron: "B-17 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-51, tekst: "Welke OpenAPI-versie en welk hulpmiddel de leesbare versie maakt, kiest Atlas in de architectuurkeuze (ACT-01.11, architect-architecture-choice) en legt hij vast in architecture.md; een ADR alleen als de drie voorwaarden van stap 7 gelden. Hij draait het hulpmiddel zonder iets aan het project toe te voegen (npx of container). Dat is techniek, geen productkeuze.", bron: "B-17 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-52, tekst: "Waar er een OpenAPI-bestand is, twee controles. De revisie van het bestand is de commit-hash van de laatste commit die het bestand wijzigde; de leesbare versie noemt die bovenaan. (1) architect-api-contracts controleert vóór GOV-06 dat het bestand geldig is en dat de leesbare versie uit precies die revisie is gemaakt. (2) quality-gates controleert vóór ACT-01.20 en in ACT-02.53 dat de goedgekeurde leesbare versie dezelfde commit-hash noemt als de laatste wijziging van het bestand in de repository. Zo valt een wijziging na je akkoord op voordat er taken komen. Bij P1 zonder API is er geen bestand en vervallen beide controles; dan geldt alleen de tabel.", bron: "B-17 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-53, tekst: "Het OpenAPI-bestand staat in de repository van het project, bij de andere ontwerpdocumenten (docs/architecture/), en ligt bij GOV-06 erbij. De leesbare versie (en bij P1 de tabel) staat als document op het issue waarop Atlas het bouwcontract opstelt (ACT-01.17, ACT-02.8); de epics en taken van de slice bestaan dan nog niet. De kaart van GOV-06 hoort bij een revisie van dat document (PRP-040). Maakt Atlas de leesbare versie opnieuw, dan vervalt de kaart, zoals op WEB-19 gebeurde bij een nieuwe revisie (kaart ad740f81, uitkomst stale_target; bron: Paperclip-API, interacties van WEB-19, 2026-10-31). Een wijziging van het bestand zonder nieuwe leesbare versie vangt controle 2 van ASM-52.", bron: "B-17 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-54, tekst: "De korte naam van een code komt uit de naam of titel die het element al heeft (stap, proces, akkoord, rol, capability, bevinding, voorstel). Waar die ontbreekt of te lang is (aannames, open vragen, besluiten, wijzigingen, grill-momenten, M-punten, TL-taken), staat een korte naam in de sectie korte_namen. Verandert een korte naam, dan gaat dat via een CHG en blijft de oude naam vindbaar, zoals bij de skills (PRP-039).", bron: "B-18 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}
  - {id: ASM-55, tekst: "Waar de korte naam komt: in alles wat ROL-01 leest (comments, kaarten, voorsteldocumenten, procesbeschrijvingen, overzichten en de pagina) de eerste keer per alinea, lijstpunt of tabelrij als 'code (naam)', ook in de eerste kolom van een tabel als de naam er niet al naast staat; in de overzichten en de pagina een eigen kolom Naam; bovenaan een legenda. Op de telefoon tikken in plaats van aanwijzen. In de diagrammen blijft de code met het label van de stap, zoals nu. Overleg tussen agents mag de code alleen gebruiken.", bron: "B-18 (kaart 42b39ff5); uitleg comment 09d57446", nieuw_in: "0.13", stand: "ter bevestiging"}

open_vragen:
  - {id: OPEN-01, tekst: "V15: als een opdracht rechtstreeks bij Socrates binnenkomt, meldt Socrates hem dan eerst aan Dr. Evil en wacht hij op toewijzing (a), of begint hij meteen en meldt tegelijk (b)?", wie: ROL-01, bron: "voorstel-instructies S3", beantwoord: "optie (a): Socrates meldt de opdracht aan Dr. Evil en begint pas na toewijzing (B-08, PRP-001; 0.8)"}
  - {id: OPEN-02, tekst: "Wie heeft het laatste woord bij een technisch bezwaar tegen de opdeling in taken: Atlas (V5) of de tech lead?", wie: ROL-01, standaard: "ASM-06 (vervallen)", stand: "rolanalyse-techlead §6 stelt voor: Atlas over de architectuur, de tech lead binnen de slice, ROL-01 bij een conflict.", beantwoord: "vervalt door TL-V6, bevestigd door TL-V7: er is geen tech lead; Atlas heeft het laatste woord op technische punten (V5); bij een conflict met Dr. Evil beslist ROL-01 (0.4, 0.5)"}
  - {id: OPEN-03, tekst: "Wanneer start UC2: op het weekmoment, als het backlog van een slice bijna leeg is, of op verzoek van Carlo?", wie: ROL-01, stand: "TL-V2: ROL-01 kiest welke wens als volgende komt. B-08 (PRP-014, 0.8): de flowcheck-routine start PRC-02 als er minder klare taken zijn dan een drempel, en op het weekmoment. Open blijft: de hoogte van de drempel. De routine bestaat nog niet (FND-013).", beantwoord: "B-13 (0.11): weekmoment maandag 04:00; nog 5 open taken in de lopende slice (ASM-30); verzoek van ROL-01"}
  - {id: OPEN-04, tekst: "Wie maakt per nieuwe klant het Paperclip-project en de repository aan, en staan de documenten in docs/architecture/ van die repository?", wie: ROL-01, beantwoord: "B-13 (0.11): ROL-01 maakt de repository aan; wie de opdracht ontvangt, maakt het project aan (ASM-31). De documenten staan in docs/architecture/ (feit: AGENTS.md Socrates en Atlas). Of agents een project mogen aanmaken: OPEN-15"}
  - {id: OPEN-05, tekst: "Atlas heeft paperclip-converting-plans-to-tasks, to-tickets, paperclip-create-agent en paperclip-board gekoppeld, terwijl zijn instructies het opdelen bij Dr. Evil leggen en een nieuwe agent volgens de instructies van Dr. Evil en V7 via een voorstel aan Carlo loopt. Is die koppeling bewust?", wie: ROL-01, bron: "API desiredSkills Atlas; AGENTS.md Atlas en Dr. Evil; rolanalyse V7", stand: "Feitencheck WEB-23 (0.7): paperclip-converting-plans-to-tasks is gekoppeld omdat architect-implementation-plan stap 7 ernaar verwijst ('Tot er een orchestrator is, doe je dit zelf'). AGENTS.md Atlas r.40 zegt: 'Plan omzetten in taken: dat doet Dr. Evil'. to-tickets, to-spec, paperclip-board, paperclip-create-agent, first-task en para-memory-files staan niet in zijn instructies; improve-codebase-architecture wel (r.42).", beantwoord: "B-13 (0.11): 'wijs skills correct toe'. Uitwerking: ASM-36. Uitvoering via Dr. Evil (PRC-08)"}
  - {id: OPEN-06, tekst: "Horen architectuurkeuze (ADR's, context/container) en databaseontwerp vóór het eerste backlog? Ze staan in de instructies van Atlas, niet in UC1 stap 3.", wie: ROL-01, stand: "TL-V5: Atlas ontwerpt in principe alles voor de kern vooraf.", beantwoord: "ja. Databaseontwerp: B-07 (kaart 1f7ca238), het volledige ontwerp van de kern na het klassendiagram en vóór het backlog. Architectuurkeuze: Feit, de instructies van Atlas zetten die direct na de goedgekeurde requirements, dus vóór het backlog (0.4)"}
  - {id: OPEN-07, tekst: "Wat gebeurt er met UC1 stap 4 en UC2 zolang de tech lead nog niet bestaat: wachten, of tijdelijk door Atlas (die architect-implementation-plan heeft)?", wie: ROL-01, stand: "TL-V1: de rol komt er nu.", beantwoord: "vervalt door TL-V6, bevestigd door TL-V7: Atlas voert de taken uit, er hoeft niets overbrugd te worden (0.4, 0.5)"}
  - {id: OPEN-08, tekst: "Welke eisen horen tot de kern die Atlas vooraf ontwerpt (TL-V5)? Voorstel P-TL-01: ROL-01 legt dat vast bij de goedkeuring van de requirements.", wie: ROL-01, bron: "rolanalyse-techlead §10 (P-TL-01, A-TL-01)", nieuw_in: "0.2", beantwoord: "ROL-01 legt de kern vast bij het akkoord op het analysepakket (GOV-10); Socrates markeert de kern (ACT-01.54) (B-08, PRP-015; 0.8). Welke eisen het per klant zijn, beslist ROL-01 bij GOV-10"}
  - {id: OPEN-09, tekst: "Wil je een termijn voor je akkoord, waarna Dr. Evil je eraan herinnert, of blijft het weekmoment het enige moment?", wie: ROL-01, nieuw_in: "0.3", beantwoord: "B-13 (0.11): elke werkdag om 09:00 een herinneringsbericht (ASM-32, ASM-35); dat er geen termijn komt, is een aanname (ASM-35)"}
  - {id: OPEN-10, tekst: "Welk Paperclip-mechanisme gebruiken we voor het akkoord van ROL-01: de goedkeuringskaart (request_confirmation, zoals nu) of een approval-stage in de executionPolicy van het issue?", wie: ROL-01, bron: "skill paperclip, references/api-reference.md (Cross-Agent Review Gates)", nieuw_in: "0.3", stand: "M-9 (0.4): bij de use cases moet na de review-stage van Atlas een approval-stage met ROL-01 volgen, anders staat het issue op done vóór GOV-02. Voor de use cases wijst dat naar de approval-stage.", stand_0_11: "ROL-01 vroeg of het via decisions kan en welk mechanisme Socrates aanbeveelt (B-13). Advies: PRP-040 (altijd een kaart) en PRP-041 (toets van Atlas via een toets-issue). Beantwoord zodra ROL-01 beide goedkeurt", beantwoord: "B-14 (0.11): PRP-040 en PRP-041 goedgekeurd: elk akkoord van ROL-01 via een kaart request_item_verdicts op het issue (geen decisions, geen approval-stage); de toets van Atlas via een toets-issue; M-9 vervalt"}
  - {id: OPEN-11, tekst: 'De status "bestaat" rust op de configuratie (desiredSkills) en de tekst van de skill. Of een skill in de praktijk goed werkt, is niet vastgesteld. Bevestig je dat dit genoeg is voor het model, of wil je eerst een proefrun?', wie: ROL-01, bron: bpmn-conventies (Bewijs voor de huidige situatie), nieuw_in: '0.6'}
  - {id: OPEN-12, tekst: 'Wie is eigenaar van GLOSSARY.md? Nu schrijven Socrates en Atlas er allebei in (FND-020). Voorstel: PRP-026.', wie: ROL-01, nieuw_in: '0.6', beantwoord: 'Socrates is eigenaar van de bedrijfstermen; Atlas voegt alleen technische termen toe en kiest de Engelse naam van een bedrijfsterm; een wijziging aan een term van de ander loopt via PRC-04 (B-08, PRP-026; 0.8)'}
  - {id: OPEN-13, tekst: 'Wanneer wachten uitbreidingen "aantoonbaar" op Atlas (PRP-018)? Welke meetbare drempel geldt, bijvoorbeeld een aantal wensen dat langer dan een bepaalde tijd op de opdeling of het ontwerp wacht? Tot je beslist, meldt Dr. Evil op het weekmoment hoe lang elke uitbreiding op Atlas wacht (ASM-23, bevestigd).', wie: ROL-01, bron: 'voorstellen PRP-018 (Risico''s); B-08', nieuw_in: '0.8'}
  - {id: OPEN-14, tekst: "Waar staan het design systeem en de ontwerpen: in een grafische tool (link), als bijlage op het issue, of als code in de repository? Paperclip heeft geen eigen ontwerpfunctie (M-11).", wie: ROL-01, nieuw_in: "0.10", beantwoord: "B-13 (0.11): in de regel in Claude Design; ROL-01 deelt een link of projectnaam; de agents moeten toegang hebben. Die toegang is er nog niet (FND-035, PRP-042)"}
  - {id: OPEN-15, tekst: "Mogen Dr. Evil en Socrates in Paperclip een project aanmaken? De API heeft er een route voor (POST /api/companies/{companyId}/projects, feit: skill paperclip). De rechten van beide agents noemen alleen canAssignTasks, canCreateAgents en canCreateSkills (feit: Paperclip-API, 2026-10-30), en de skill noemt het opzetten van een project een taak voor een CEO of manager (references/workflows.md, 'Project Setup (CEO/Manager)'); beide agents hebben de rol 'general' (feit: Paperclip-API, /api/companies/{companyId}/agents, 2026-10-30). Niet getest, want dan zou er een project ontstaan.", wie: "ROL-02 (vaststellen bij de inrichting, PRC-08); ROL-01 als de rechten moeten worden aangepast", nieuw_in: "0.11"}
```
