# Voorstel model 0.16 (CHG-032): domeinmodel en sequentiediagrammen intern, klassendiagram en database samen

| | |
| --- | --- |
| Status | **Verwerkt in register r25, prc-01 r17, prc-02 r18, bevindingen r25** (Goedgekeurd 2026-11-08, Carlo, kaart `af882679`, alle zes keuzes). Afwijking K-14: de skills waren al aangevuld op WEB-96, dus de skillstatus blijft 75 / 0 / 0 / 9. |
| Besluit | Carlo, comment `2e2ec31e` op WEB-19 (2026-11-08), op de vragen in `0c3014ef`: (1) domeinmodel en sequentiediagrammen alleen intern, zonder akkoord; (2) klassendiagram en databaseontwerp in één document, voor akkoord en ter naslag; (3) geldt nu al voor WEB-47. In het register: **B-24**. |
| Rust op | register r24, prc-01 r16, prc-02 r17 |
| Keuzes | Op de kaart staan de keuzes die Socrates zelf invulde. Waar de kaart afwijkt van §4 hieronder, geldt de kaart. |
| Niet in dit voorstel | B-23 (afspraken akkoorden) en gat 1 t/m 12 uit `register-gaten-0-15`; die gaan mee met het doorvoeren als eigen rijen, zoals eerder besloten. |
| Na akkoord | Socrates vervangt alleen deze rijen in register, PRC-01 en PRC-02; de overzichten volgen uit het register (§5). |


Opdracht: domeinmodel (met GLOSSARY) en sequentiediagrammen intern (modelbestand JSON plus regeldocument, geen pagina, geen document op het issue, geen akkoord); keuzes van Atlas buiten de eisen en bedrijfsregels als vraag op de kaart van het klassendiagram; klassendiagram en databaseontwerp in één document met één akkoord; geldt voor P3 in UC1 (binnen GOV-11) en UC2 (GOV-03, 04, 05, 13); bij P2 blijven sequentiediagrammen van kernflows in het technisch ontwerp.

## 0. Afspraken in dit bestand

- Regelnummers verwijzen naar de bestanden in deze map zoals ze nu zijn.
- Volgende vrije nummers volgens `uitbreidingsgids.md` (tabel "Hoogste ID nu"): besluit **B-24**, wijziging **CHG-032**, aanname **ASM-62**, bevinding **FND-044**, model **0.16**. Dit zijn voorstellen voor de nummers.
- Veldnaam voor de wijzigingsmarkering: `wijziging_0_16` (zoals `wijziging_0_15`), met `CHG-032 (B-24)` erin.
- Namen van de nieuwe bestanden zijn een voorstel (keuze K-10): `domain-model.json`, `sequences.json`, `domain-rules.md` (regeldocument), en het ene ontwerpdocument `class-diagram.md` met het databaseontwerp als sectie. Alle in `docs/architecture/` van de klantrepository.
- Markering: [NIEUW], [VERVALT], [GEWIJZIGD], [P2-noot] (staat er al, verandert niet, wel genoteerd omdat het besluit erover gaat).
- De GOV-ID's: GOV-03, GOV-04 en GOV-13 vervallen (naar `vervallen_ids`, nooit hergebruiken); GOV-05 blijft en wordt het ene akkoord voor klassendiagram en databaseontwerp (keuze K-03).

---

## 1. register.md

### 1.1 Nieuwe elementen

**R-01 [NIEUW] `meta.besluiten`: B-24** (na B-22 en TL-V7, regel ~131)
- Huidig: bestaat niet.
- Voorstel: `- {id: B-24, tekst: "Domeinmodel (met GLOSSARY.md) en sequentiediagrammen maakt Atlas alleen intern: een modelbestand (JSON) plus een regeldocument (levenscycli, invarianten, herleiding naar use cases) in de projectdocumentatie; geen klikbare pagina, geen tekstversie als document op het issue en geen akkoord van ROL-01. Keuzes die Atlas daarin zelf invult en die niet in de goedgekeurde eisen of bedrijfsregels staan, komen als vraag op de kaart van het klassendiagram. Ontwerpklassendiagram en databaseontwerp komen samen in één document, voor akkoord van ROL-01 en ter naslag in de documentatie: één akkoord. Geldt voor profiel P3 in UC1 (binnen GOV-11) en in UC2 (GOV-03, GOV-04 en GOV-13 vervallen; GOV-05 is het ene akkoord). Bij P2 bevat het technisch ontwerp ook sequentiediagrammen voor de kernflows (ACT-01.59); die blijven in het technisch ontwerp en gaan mee in GOV-11.", bron: "comment/kaart <nog in te vullen> op WEB-19 (<datum>)", gevolg: "CHG-032, model 0.16; B-07 aangepast"}`

**R-02 [NIEUW] CHG-032 en `meta` (versie, status, goedgekeurd)** (regels 91-100 en tabelkop regels 3-7)
- Huidig: `versie: "0.15"`, `status: "Goedgekeurd (2026-11-01, Carlo, kaart cf1337ff; CHG-028; B-22)"`, `geldend: "0.15 (Goedgekeurd, 2026-11-01, Carlo, kaart cf1337ff)"`; in de tabel bovenin rijen Status, Versie, Goedgekeurde versie, Inhoud over 0.15; `goedgekeurd` eindigt met `{versie: "0.15", ... kaart: "cf1337ff", ... nieuw_in: "0.15"}`.
- Voorstel: versie `0.16` met status "Concept, ter goedkeuring (CHG-032, B-24)"; `geldend` blijft 0.15 tot het akkoord; na het akkoord een regel `{versie: "0.16", datum: <datum>, door: ROL-01, kaart: "<id>", onderdelen: "CHG-032 (B-24): ...; weergaven: register, PRC-01, PRC-02, ...", nieuw_in: "0.16"}`; in de tabel Versie een zin "0.16 (<datum>): CHG-032 besluit B-24 (domeinmodel en sequentiediagrammen intern, klassendiagram en databaseontwerp in één akkoord)". CHG-032 zelf staat in het bevindingen- en wijzigingsdocument (niet in deze map).

**R-03 [NIEUW] `aannames`: ASM-62** (na ASM-61, regel ~2229)
- Voorstel: `- {id: ASM-62, tekst: "Atlas kiest zelf welke use cases een sequentiediagram krijgen: alle use cases met de markering 'kern' (ACT-01.54, TL-V5); er is geen mini-goedkeuring van de selectie door ROL-01 meer. Een kern-use case zonder sequentiediagram, en elke andere keuze van Atlas in domeinmodel, sequentiediagrammen, klassendiagram of databaseontwerp die niet uit de goedgekeurde eisen of bedrijfsregels volgt, komt als vraag (met aanbevolen antwoord) op de kaart van het klassendiagram met databaseontwerp (GOV-11 bij P3 in UC1, GOV-05 in UC2).", bron: "B-24", nieuw_in: "0.16", stand: "voorstel, te bevestigen"}`

**R-04 [NIEUW] `korte_namen`** (regels ~2022-2170, alfabetisch)
- Voorstel: `"B-24": "domeinmodel en sequenties intern, één akkoord klassendiagram en database"`, `"CHG-032": "ontwerp intern, klassendiagram en database samen"`, `"ASM-62": "Atlas kiest sequenties voor de kern"`, `"FND-044": "intern ontwerp zonder tweede lezer"`.

### 1.2 Vervallen elementen

**R-05 [VERVALT] `goedkeuringen`: GOV-03 Akkoord domeinmodel** (regels 464-478)
- Huidig: `id: GOV-03`, `naam: Akkoord domeinmodel`, `processen: PRC-02 (bij P3, als een wens het raakt)`, `informatie: domain-model.md met artifact; GLOSSARY.md; in PRC-02 samen met het ADR (ACT-02.55)`, `criteria: elk begrip herleidbaar tot een UC of BR; geen technische details; Engelse termen met _NL_`, `bij_goedkeuring: Atlas zet STATUS.md op Goedgekeurd en gaat naar het volgende geraakte document, of naar ACT-02.7`, `bron: 'F: uml-domain-modelling (Goedkeuringsmoment); architect-modeling'`.
- Voorstel: het blok uit `goedkeuringen` halen; toevoegen aan `vervallen_ids`: `- {id: GOV-03, reden: "B-24: het domeinmodel met GLOSSARY.md is intern (modelbestand en regeldocument), geen akkoord van ROL-01; de herleiding naar use cases en bedrijfsregels staat in het regeldocument en in het ene akkoord op het klassendiagram (GOV-05)", versie: "0.16"}`. De criteria 'herleidbaar tot UC of BR' en 'geen technische details' gaan naar het regeldocument (zelfcontrole van Atlas).

**R-06 [VERVALT] `goedkeuringen`: GOV-04 Akkoord sequentiediagrammen** (regels 479-493)
- Huidig: `naam: Akkoord sequentiediagrammen`, `processen: PRC-02 (bij P3, als een wens ze raakt)`, `informatie: eerst de selectie van use cases (mini-goedkeuringsmoment in de skill), daarna sequences.md met artifact; in PRC-02 samen met het ADR (ACT-02.55)`, `criteria: deelnemers en berichten passen bij het domeinmodel; alternatieven uitgewerkt; selectie dekt de kern (TL-V5)`, `bron: 'F: uml-sequence-diagrams stap "selectie"; B: TL-V5'`.
- Voorstel: blok verwijderen; `vervallen_ids`: `- {id: GOV-04, reden: "B-24: sequentiediagrammen zijn intern (modelbestand en regeldocument); ook de mini-goedkeuring van de selectie van use cases vervalt (ASM-62); TL-V5 blijft gelden als regel voor Atlas", versie: "0.16"}`.

**R-07 [VERVALT] `goedkeuringen`: GOV-13 Akkoord databaseontwerp** (regels 627-642)
- Huidig: `naam: Akkoord databaseontwerp`, `processen: PRC-02 (bij P3, als een wens het raakt)`, `wijziging_0_11: "... Bij P2 met een eigen database valt het databaseontwerp onder GOV-11 (ACT-01.59)"`, `label: 'B (B-07), F (architect-database: verplicht goedkeuringsmoment)'`, `informatie: databaseontwerp met ER-diagram en artifact; in PRC-02 samen met het ADR (ACT-02.55)`, `criteria: mapping van klassen naar tabellen volledig; NFR's voor volume, privacy en bewaartermijnen verwerkt; zelfcontrole van de skill gedaan`, `bij_goedkeuring: Atlas gaat naar ACT-02.7`.
- Voorstel: blok verwijderen; `vervallen_ids`: `- {id: GOV-13, reden: "B-24: databaseontwerp en klassendiagram zijn één document met één akkoord (GOV-05); de criteria van GOV-13 gaan naar GOV-05", versie: "0.16"}`.

**R-08 [GEWIJZIGD] `vervallen_ids`: kopregel** (regel 386)
- Huidig: `# vervallen in een nieuwe versie; nooit hergebruiken. ACT- en G-ID's vervielen vóór goedkeuring; ROL-05, AGT-04, ASM-05, ASM-06, PRP-009 en PRP-012 stonden in de goedgekeurde 0.1; ASM-16 in de goedgekeurde 0.5; ASM-19 in de goedgekeurde 0.8 t/m 0.10 (CHG-018)`
- Voorstel: eraan toevoegen: `; GOV-03, GOV-04 en GOV-13 in de goedgekeurde 0.1 t/m 0.15 (B-24, 0.16)`.

### 1.3 Gewijzigde elementen

**R-09 [GEWIJZIGD] `meta.besluiten`: B-07** (regel 117)
- Huidig: `{id: B-07, tekst: "Volledig databaseontwerp van de kern na het goedgekeurde klassendiagram en vóór het eerste backlog (optie A)", bron: "kaart 1f7ca238 op WEB-19 (2026-10-28), vraag 'database'"}`
- Voorstel: tekst blijft (het is jouw besluit); veld erbij, zoals bij TL-V6: `aangepast_door: "B-24: 'na het goedgekeurde klassendiagram' vervalt; databaseontwerp en klassendiagram zijn één document met één akkoord; 'volledig' en 'vóór het eerste backlog' blijven"`.

**R-10 [GEWIJZIGD] `rollen` ROL-04: `verantwoordelijkheid`** (regel 186)
- Huidig (alleen het geraakte stuk): `... Daarna, volgens zijn instructies: architectuurkeuze (ADR's, context- en containerdiagram) na de goedgekeurde requirements; domeinmodel, sequentiediagrammen en ontwerpklassendiagram (UC1 stap 3); databaseontwerp na het goedgekeurde klassendiagram. Ontwerpt in principe de hele kernfunctionaliteit vooraf (TL-V5), inclusief het volledige databaseontwerp van de kern (B-07). Houdt GLOSSARY.md en docs/architecture/STATUS.md bij. ...`
- Voorstel: `... architectuurkeuze (ADR's, context- en containerdiagram) na de goedgekeurde requirements; domeinmodel en sequentiediagrammen alleen intern (modelbestand en regeldocument, geen akkoord, B-24); ontwerpklassendiagram en databaseontwerp samen in één document voor akkoord (UC1 stap 3, B-24). Ontwerpt in principe de hele kernfunctionaliteit vooraf (TL-V5), inclusief het volledige databaseontwerp van de kern (B-07). Houdt GLOSSARY.md en docs/architecture/STATUS.md bij; keuzes die niet in de goedgekeurde eisen of bedrijfsregels staan, legt hij als vraag voor op de kaart van het klassendiagram (B-24). ...`

**R-11 [GEWIJZIGD] ROL-04: `uit`** (regel 189)
- Huidig: `... technisch ontwerp volgens profiel (P1: contentmodel en platformconfiguratie, ACT-01.60; P2: componenten-, route- en dataontwerp, ACT-01.59; P3: domeinmodel, sequentiediagrammen, ontwerpklassendiagram, databaseontwerp), GLOSSARY.md, STATUS.md; ...`
- Voorstel: `... technisch ontwerp volgens profiel (P1: contentmodel en platformconfiguratie, ACT-01.60; P2: componenten-, route- en dataontwerp, met sequentiediagrammen voor de kernflows, ACT-01.59; P3: één document met ontwerpklassendiagram en databaseontwerp voor akkoord, en intern het domeinmodel en de sequentiediagrammen als modelbestand met regeldocument), GLOSSARY.md, STATUS.md; ...`
- Daarbij: nieuw veld `wijziging_0_16: "CHG-032 (B-24): ..."` bij ROL-04 (en bij de andere gewijzigde elementen hieronder, hier niet herhaald).

**R-12 [GEWIJZIGD] `systemen`: Repository van het klantproject: `gebruik`** (regel 203)
- Huidig: `gebruik: "docs/architecture/ (requirements, use cases, bedrijfsregels, modellen), GLOSSARY.md, docs/adr/"`
- Voorstel: `gebruik: "docs/architecture/ (requirements, use cases, bedrijfsregels, het ontwerpdocument met klassendiagram en databaseontwerp; bij P3 intern: domain-model.json, sequences.json en het regeldocument domain-rules.md), GLOSSARY.md, docs/adr/"`

**R-13 [GEWIJZIGD] `processen` PRC-01: `output`** (regel 220)
- Huidig: `output: "requirements, visie, use cases, bedrijfsregels, paginalijst met brieven, ontwerpen van de sleutelpagina's met patroonbibliotheek, architectuurkeuze met profiel-ADR, technisch ontwerp volgens profiel (P3: domeinmodel, sequentie- en klassendiagram, databaseontwerp), bouwcontract slice 1, backlog (epics en taken eerste slice), uitbreidingslijst"`
- Voorstel: `... technisch ontwerp volgens profiel (P3: één document met klassendiagram en databaseontwerp voor akkoord; intern, zonder akkoord: domeinmodel en sequentiediagrammen als modelbestand met regeldocument), bouwcontract slice 1, ...`
- Ook bij PRC-01: `status`/`versie` (nu `status: "Goedgekeurd (2026-10-31, Carlo, kaart 226c7ce7; CHG-023, CHG-024)"`, `versie: "0.13"`) pas aan na het akkoord; `wijziging_0_16: "CHG-032 (B-24): domeinmodel en sequentiediagrammen intern, klassendiagram en databaseontwerp één document in GOV-11; 4 akkoorden in UC1 blijven"`; `risicos` krijgt erbij: `; domeinmodel en sequentiediagrammen hebben geen tweede lezer (FND-044), afgedekt door de herleiding in het regeldocument en de vragen op de kaart`.

**R-14 [GEWIJZIGD] PRC-02: `wijziging_0_16`, `status`, `versie`** (regels 232-256)
- Huidig: `status: "Goedgekeurd (2026-10-31, Carlo, kaart 226c7ce7; CHG-023, CHG-024)"`, `versie: "0.13"`; geen veld over 0.16.
- Voorstel: `wijziging_0_16: "CHG-032 (B-24): bij P3 gaat in UC2 alleen het klassendiagram met databaseontwerp nog langs ROL-01 (GOV-05); GOV-03, GOV-04 en GOV-13 vervallen; domeinmodel en sequentiediagrammen worden intern bijgewerkt"`; status en versie na het akkoord.

**R-15 [GEWIJZIGD] `activiteiten` ACT-01.10** (regel 277)
- Huidig: `{id: "ACT-01.10", ..., naam: "Domeinmodel opstellen (profiel P3)", rol: "ROL-04", input: "use cases, bedrijfsregels, architectuurkeuze", output: "domeinmodel, GLOSSARY.md", versie: "basis", label: "B (stap 3), F (`architect-modeling` fase 2)", situatie: "to-be", wijziging_0_10: ...}`
- Voorstel: `output: "domeinmodel als modelbestand (domain-model.json) met regeldocument (levenscycli, invarianten, herleiding naar use cases en bedrijfsregels) in docs/architecture/, en GLOSSARY.md; intern: geen akkoord, geen pagina, geen document op het issue; keuzes buiten de goedgekeurde eisen en bedrijfsregels gaan als vraag naar de kaart van ACT-01.13 (ASM-62)"`, `label: "B (stap 3), F (`architect-modeling` fase 2), B (B-24)"`, `wijziging_0_16: "CHG-032 (B-24): intern, geen akkoord"`.

**R-16 [GEWIJZIGD] ACT-01.12** (regel 279)
- Huidig: `naam: "Sequentiediagrammen opstellen (profiel P3)", ... input: "use cases, domeinmodel, paginabrieven en ontwerpen", output: "sequentiediagrammen, in principe voor de hele kern", versie: "basis", label: "B (stap 3, TL-V5)", ...`
- Voorstel: `output: "sequentiediagrammen als modelbestand (sequences.json) met herleiding naar use cases in het regeldocument, in principe voor alle use cases met de markering 'kern' (TL-V5, ASM-62); intern: geen akkoord, geen pagina, geen document op het issue; keuzes buiten de goedgekeurde eisen en bedrijfsregels gaan als vraag naar de kaart van ACT-01.13"`, `label: "B (stap 3, TL-V5), B (B-24)"`, `wijziging_0_16`.

**R-17 [GEWIJZIGD] ACT-01.13** (regel 280)
- Huidig: `naam: "Ontwerpklassendiagram opstellen (profiel P3)", input: "domeinmodel, sequentiediagrammen", output: "klassendiagram, in principe voor de hele kern", label: "B (stap 3, TL-V5)", ...`
- Voorstel: `input: "domeinmodel en sequentiediagrammen (intern, uit de modelbestanden)"`, `output: "klassendiagram, in principe voor de hele kern, als eerste deel van het ene ontwerpdocument (klassendiagram met databaseontwerp; ACT-01.24 vult het aan); met een herleidingstabel klasse naar domeinbegrip naar UC of BR, en een sectie met de keuzes van Atlas die niet in de goedgekeurde eisen of bedrijfsregels staan, als vragen met aanbevolen antwoord (ASM-62)"`, `label: "B (stap 3, TL-V5), B (B-24)"`.

**R-18 [GEWIJZIGD] ACT-01.24** (regel 290)
- Huidig: `naam: "Databaseontwerp van de kern opstellen (profiel P3)", input: "klassendiagram (in het pakket van GOV-11), sequentiediagrammen, requirements, ADR's, paginabrieven", output: "databaseontwerp van de kern; databasesysteem in een ADR als dat nog niet vastligt", label: "B (B-07), F (`architect-database`)", ... wijziging: "CHG-011: input het klassendiagram uit hetzelfde pakket, nog niet goedgekeurd (B-08, PRP-003)"`
- Voorstel: `input: "klassendiagram (concept, hetzelfde document), sequentiediagrammen (intern), requirements, ADR's, paginabrieven"`, `output: "databaseontwerp van de kern met ER-diagram, in hetzelfde document als het klassendiagram (één document, één akkoord in GOV-11; ook ter naslag in docs/architecture/); databasesysteem in een ADR als dat nog niet vastligt; de vragenlijst van het document is hier compleet"`, `label: "B (B-07), F (`architect-database`), B (B-24)"`.

**R-19 [GEWIJZIGD] ACT-02.6** (regel 309)
- Huidig: `output: "geraakte documenten van het technisch ontwerp van het profiel; bij een zwaarder profiel ook de nieuwe documenten van dat profiel; zijn de use cases licht (PRP-038), dan vraagt Atlas Socrates via PRC-04 ze naar de volledige vorm te brengen, en ze komen mee in het akkoord met het ADR"`
- Voorstel: `... geraakte documenten van het technisch ontwerp van het profiel; bij P3 werkt Atlas domeinmodel en sequentiediagrammen intern bij (geen akkoord) en legt hij het klassendiagram met databaseontwerp (één document) voor als dat geraakt is; bij een zwaarder profiel ook de nieuwe documenten van dat profiel; ... en ze komen mee in het akkoord met het ADR"`; `label` erbij `B (B-24)`.
- [P2-noot] ACT-02.7 (regel 310) `output` noemt bij P2 "sequenties van nieuwe flows" in `prc-02`, en bij P3 "zo nodig sequentie- en klassendiagram van de slice": ongewijzigd (keuze K-07).

**R-20 [GEWIJZIGD] `profielen.producten`: vier rijen** (regels 421-424)
- Huidig:
  - `{product: "domeinmodel", act: [ACT-01.10], P1: "-", P2: "-", P3: V}`
  - `{product: "sequentiediagrammen", act: [ACT-01.12], P1: "O (alleen koppelingen, in ACT-01.60)", P2: "V voor kernflows (in ACT-01.59)", P3: V}`
  - `{product: "ontwerpklassendiagram", act: [ACT-01.13], P1: "-", P2: "-", P3: V}`
  - `{product: "databaseontwerp (B-07)", act: [ACT-01.24], P1: "-", P2: "V alleen bij eigen database (in ACT-01.59)", P3: V}`
- Voorstel:
  - domeinmodel: `P3: "V (intern, geen akkoord, B-24)"`
  - sequentiediagrammen: `P3: "V (intern, geen akkoord, B-24)"`; P1 en P2 ongewijzigd [P2-noot: P2 blijft `V voor kernflows (in ACT-01.59)`, mee in GOV-11]
  - ontwerpklassendiagram: `P3: "V (één document met het databaseontwerp, één akkoord, B-24)"`
  - databaseontwerp: `P3: "V (zelfde document als het klassendiagram, B-24)"`; P2 ongewijzigd
- Optioneel: een kolom of noot "akkoord: ja/nee" bij deze rijen.

**R-21 [GEWIJZIGD] `goedkeuringen`: kopcomment** (regel 431)
- Huidig: `# 0.8 (CHG-011, B-08): in PRC-01 alleen GOV-10, GOV-11 en GOV-06 (PRP-003). GOV-01, 02, 09, 03, 04, 05 en 13 alleen nog in PRC-02. Maximum 2 rondes besloten (PRP-006)`
- Voorstel: de 0.8-regel als historie laten staan en een regel voor 0.16 toevoegen: `# 0.16 (CHG-032, B-24): GOV-03, GOV-04 en GOV-13 vervallen; GOV-05 keurt in PRC-02 klassendiagram met databaseontwerp goed (één document); in PRC-01 zit dat document bij P3 in GOV-11`.

**R-22 [GEWIJZIGD] GOV-05** (regels 494-508), hernoemd naar het ene akkoord
- Huidig: `naam: Akkoord ontwerpklassendiagram`, `processen: PRC-02 (bij P3, als een wens het raakt)`, `wijziging: 'CHG-011: in PRC-01 onderdeel van GOV-11; in PRC-02 samen met het ADR (ACT-02.55)'`, `informatie: class-diagram.md, design-notes.md met artifact; in PRC-02 samen met het ADR (ACT-02.55)`, `criteria: elke klasse herleidbaar tot een domeinconcept of uitbreidingspunt; berichten uit de sequentiediagrammen zijn methoden`, `bij_goedkeuring: Atlas gaat naar het databaseontwerp als dat geraakt is, anders naar ACT-02.7`, `bij_afwijzing: 'PRC-05: terug naar Atlas'`, `bron: 'F: uml-class-diagram stap 8'`.
- Voorstel:
  - `naam: "Akkoord ontwerpklassendiagram en databaseontwerp (één document)"`
  - `processen: PRC-02 (bij P3, als een wens het klassendiagram of het databaseontwerp raakt; in PRC-01 onderdeel van GOV-11)`
  - `informatie: "één document: class-diagram.md (klassendiagram) met het databaseontwerp en ER-diagram, design-notes.md, met artifact (keuze K-12); herleidingstabel klasse naar domeinbegrip naar UC of BR; een sectie met de keuzes van Atlas die niet in de goedgekeurde eisen of bedrijfsregels staan, elk als vraag met aanbevolen antwoord, ook op de kaart (B-24, ASM-62); geen domeinmodel, GLOSSARY.md of sequentiediagrammen: die zijn intern; in PRC-02 samen met het ADR (ACT-02.55)"`
  - `criteria: "elke klasse herleidbaar tot een begrip uit het domeinmodel (intern) of een uitbreidingspunt; berichten uit de sequentiediagrammen (intern) zijn methoden; mapping van klassen naar tabellen volledig; NFR's voor volume, privacy en bewaartermijnen verwerkt; zelfcontrole van de skill gedaan; elke keuze buiten de goedgekeurde eisen en bedrijfsregels staat als vraag in het document"`
  - `bij_goedkeuring: "Atlas zet STATUS.md voor dit document op Goedgekeurd en gaat naar ACT-02.7 (de interne modelbestanden blijven 'intern')"`
  - `bij_afwijzing: 'PRC-05: terug naar Atlas, per document: het ene document'` ; `bron` erbij: `F: architect-database stap 7-8 (de twee delen komen samen); B (B-07, B-24)`; `label: B (B-07, B-24)`; `wijziging_0_16`.

**R-23 [GEWIJZIGD] GOV-11** (regels 610-626)
- Huidig: `informatie: "het technisch ontwerp van het goedgekeurde profiel: P1 contentmodel en platformconfiguratie (ACT-01.60); P2 componenten-, route- en dataontwerp (ACT-01.59); P3 domeinmodel met GLOSSARY.md, sequentiediagrammen, ontwerpklassendiagram en databaseontwerp (ACT-01.10, 01.12, 01.13, 01.24). Eén kaart met een beoordeling per document. In PRC-02 bij P1 en P2 per geraakt document"`, `criteria: "bij P3 als GOV-03, 04, 05 en 13; bij P1 en P2: elk paginatype en elke brief heeft een plek in het ontwerp; ..."`, `bij_afwijzing: "PRC-05, per document naar de eigen activiteit (ACT-01.60 / 01.59 / 01.10 / 01.12 / 01.13 / 01.24); latere geraakte documenten werkt Atlas mee bij (ASM-18)"`, `wijziging: 'CHG-011: variant → basis; vervangt GOV-09, 03, 04, 05 en 13 in PRC-01'`.
- Voorstel:
  - `informatie: "... P2 componenten-, route- en dataontwerp, met sequentiediagrammen voor de kernflows (ACT-01.59); P3 één document met ontwerpklassendiagram en databaseontwerp (ACT-01.13, 01.24; keuzes van Atlas buiten de eisen en bedrijfsregels als vragen met aanbevolen antwoord); domeinmodel, GLOSSARY.md en sequentiediagrammen zijn intern en zitten niet in de kaart. Eén kaart met een beoordeling per document (bij P3: één document). In PRC-02 bij P1 en P2 per geraakt document"`
  - `criteria: "bij P3 als GOV-05; bij P1 en P2: ..."`
  - `bij_afwijzing: "PRC-05, per document naar de eigen activiteit (ACT-01.60 / 01.59 / bij P3 ACT-01.13 of 01.24 voor het ene document); latere geraakte documenten werkt Atlas mee bij, ook de interne modelbestanden (ASM-18)"`
  - `wijziging_0_16: "CHG-032 (B-24): bij P3 bevat het pakket één document; GOV-03, 04 en 13 zijn vervallen, GOV-05 is het ene akkoord in PRC-02"`

**R-24 [GEWIJZIGD] `capabilities`: CAP-06 en CAP-07** (regels 696-697)
- Huidig: `{id: CAP-06, naam: Domeinmodellering, omschrijving: Domeinmodel en Engelse termen in GLOSSARY.md}`; `{id: CAP-07, naam: Gedragsmodellering, omschrijving: Sequentiediagrammen voor de use cases}`
- Voorstel: CAP-06: `Domeinmodel (modelbestand met regeldocument) en Engelse termen in GLOSSARY.md; intern, zonder akkoord (B-24)`; CAP-07: `Sequentiediagrammen voor de use cases (modelbestand met herleiding); intern bij P3, bij P2 voor de kernflows in het technisch ontwerp (B-24)`.
- Optioneel (CAP-08, CAP-09, regels 698-699): bij CAP-08 `Ontwerpklassendiagram (samen met het databaseontwerp in één document, B-24); ...`, bij CAP-09 `Logisch en fysiek databasemodel (samen met het klassendiagram in één document, B-24)`.

**R-25 [GEWIJZIGD] `Skills in het kort`: zes tabelrijen** (regels 52, 54-58)
- Huidig (kolom Waar gaat het over / Stand):
  - r.52 `domain-modeling`: `Begrippen vastleggen in GLOSSARY.md en besluiten in ADR's.` / `Bestaat; voor Atlas aangevuld via zijn instructies in PRC-08 ...: een ADR bij elke wijziging van het globale ontwerp, alleen technische termen in GLOSSARY.md (feit, AGENTS.md Atlas)`
  - r.54 `architect-modeling`: `De regie over domeinmodel, sequentiediagrammen en klassendiagram.`
  - r.55 `uml-domain-modelling`: `Het domeinmodel: welke begrippen er zijn en hoe ze samenhangen.`
  - r.56 `uml-sequence-diagrams`: `Sequentiediagrammen: welke onderdelen in welke volgorde samenwerken.`
  - r.57 `uml-class-diagram`: `Het ontwerpklassendiagram: de technische vorm van de begrippen.`
  - r.58 `architect-database`: `Het databaseontwerp: tabellen, relaties en sleutels.`
  - Stand van r.54-58: `Bestaat; uitgebreid in PRC-08 (WEB-26, 2026-11-01), sectie *Aanvulling PRC-08 (model 0.14)* die voorgaat op de oudere stappen (ASM-60)`
- Voorstel:
  - r.52: erbij `; de technische termen van Atlas komen zonder akkoord in GLOSSARY.md (B-24)`
  - r.54: `De regie over domeinmodel en sequentiediagrammen (intern) en over klassendiagram met databaseontwerp (één document voor akkoord).`
  - r.55: `Het domeinmodel als modelbestand met regeldocument, intern.`
  - r.56: `Sequentiediagrammen als modelbestand met herleiding, intern bij P3; bij P2 de kernflows in het technisch ontwerp.`
  - r.57: `Het ontwerpklassendiagram, samen met het databaseontwerp in één document voor akkoord.`
  - r.58: `Het databaseontwerp: tabellen, relaties en sleutels, in hetzelfde document als het klassendiagram.`
  - Stand r.54-58: `Uitbreiden (besloten B-24, via PRC-08): het goedkeuringsmoment per fase vervalt voor domeinmodel en sequentiediagrammen, klassendiagram en database krijgen één akkoord; tot dan voorgaat de aanvulling (ASM-60)` (zie keuze K-14 over de skillstatus).

**R-26 [GEWIJZIGD] `skills` (yaml): zeven skills**
- `architect-modeling` (regels 893-920): `doel: Regie over domeinmodel, sequentie- en klassendiagram` -> `Regie over domeinmodel en sequentiediagrammen (intern) en over klassendiagram met databaseontwerp (één akkoord)`; vier `dekking`-regels (903-906) met `bron: 'SKILL.md vraagt een akkoord per fase ("elke fase expliciet goedgekeurd"); in PRC-01 is er één pakketakkoord (GOV-11, ...)'` krijgen erbij `; sinds B-24 geen akkoord voor domeinmodel en sequentiediagrammen`; `output: STATUS.md, modellen via deelskills` -> erbij `modelbestanden en regeldocument (intern)`; `besluit_dekking` (r.910) en `validatie: elke fase expliciet goedgekeurd (PRC-02), of het pakket per document goedgekeurd (PRC-01, GOV-11); samenhang herleidbaar` -> `... goedgekeurd voor het ontwerpdocument met klassendiagram en database (PRC-02, PRC-01 GOV-11); domeinmodel en sequentiediagrammen intern; samenhang herleidbaar in het regeldocument`; `wijziging_0_16`.
- `uml-domain-modelling` (921-938): `output: domain-model.md met artifact` -> `domain-model.json met domain-rules.md (levenscycli, invarianten, herleiding naar UC en BR), intern`; `validatie` blijft; `dekking.bron` (r.929) `SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord. In PRC-01 geen eigen stop: het akkoord is het pakket GOV-11; in PRC-02 blijft het akkoord per document (controle-model-v08 L-01)` -> `SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord; vervalt voor deze skill (B-24: intern, geen akkoord)`.
- `uml-sequence-diagrams` (939-956): `output: sequences.md met artifact` -> `sequences.json met herleiding naar use cases in domain-rules.md, intern bij P3`; `opmerking: de skill laat de gebruiker eerst de use cases kiezen (mini-goedkeuringsmoment); TL-V5 zegt "in principe de hele kern". ...` -> `... de selectie van use cases wordt door Atlas gemaakt zonder goedkeuring (alle kern-use cases, ASM-62); TL-V5 ...`; `dekking.bron` (r.947) zoals hierboven; [P2-noot] `wijziging_0_11` (r.955) noemt "bij P2 alleen de kernflows, in ACT-01.59 (PRP-034)" en de dekking (r.947) noemt `ACT-01.59 (kernflows bij P2, in het pakket GOV-11)`: blijft; de skill moet per profiel onderscheiden (P3 intern, P2 in het technisch ontwerp).
- `uml-class-diagram` (957-975): `input: domeinmodel, sequentiediagrammen`; `output: class-diagram.md, design-notes.md met artifact` -> `output: class-diagram.md met het databaseontwerp (ER-diagram) als sectie, design-notes.md, met herleidingstabel en vragenlijst (ASM-62)`; `dekking.bron` (r.965) `SKILL.md Goedkeuringsmoment (elke fase): wachtstand tot akkoord. In PRC-01 geen eigen stop: ...; in PRC-02 blijft het akkoord per document` -> `... in PRC-02 één akkoord op klassendiagram met databaseontwerp (GOV-05)`.
- `architect-database` (976-993): `input: goedgekeurd klassendiagram (PRC-02), klassendiagram uit hetzelfde pakket (PRC-01), NFR's` -> `klassendiagram uit hetzelfde document (concept; PRC-01 en PRC-02), NFR's`; `validatie: zelfcontrole stap 7; verplicht goedkeuringsmoment stap 8` -> `zelfcontrole stap 7; het akkoord is het gezamenlijke akkoord op het ontwerpdocument (GOV-11 bij P3 in PRC-01, GOV-05 in PRC-02), niet meer een eigen stap 8`; `dekking.bron` (r.984) `SKILL.md eist een goedgekeurd klassendiagram; in PRC-01 zitten klassendiagram en database in hetzelfde pakket (GOV-11)` -> `SKILL.md eist een goedgekeurd klassendiagram en heeft een eigen akkoord (stap 8); sinds B-24 één document, één akkoord`.
- `domain-modeling` (850-868): `output: GLOSSARY.md, docs/adr/`: erbij `; de technische termen van Atlas komen zonder akkoord in GLOSSARY.md (B-24)`.
- `quality-gates` (1097-1117): `dekking` r.1104 noemt `GOV-02 (use cases), GOV-09 (architectuur), GOV-13 (database) en GOV-06 (API-contracten) staan er niet expliciet in (FND-025)`; r.1104 en 1106 `in ACT-02.53 GOV-06 en, als de wens het globale ontwerp raakte, de GOV's van de geraakte documenten met het ADR (ASM-21)`; voorstel: `GOV-13` vervangt door `GOV-05 (klassendiagram met database)` in r.1104 (feitenzin over de skill: laat als historie staan, voeg `GOV-13 vervalt in 0.16` toe), en bij de poort `ASM-21`: `de GOV's van de geraakte documenten die een akkoord kennen (bij P3 GOV-05)`.
- [P2-noot] `architect-componentontwerp` (1598-1618): `doel: "Componenten-, route- en dataontwerp voor profiel P2, met sequentiediagrammen voor de kernflows en een datamodel bij een eigen database"`, `output: "componenten- en routeontwerp, kernsequenties, datamodel"`, `afhankelijkheden: uml-sequence-diagrams`, `validatie: ... elke kernflow een sequentiediagram`: ongewijzigd.

**R-27 [GEWIJZIGD] `koppelingen`: zeven regels** (r.1654-1657, 1655, 1686, 1702)
- ACT-01.10 (r.1654), huidig: `beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: [AGT-02 (PRC-04), ROL-01], ... escalatie: PRC-05` -> voorstel: `beslisser: ROL-04 (intern, B-24), controleur: "— (bewust: intern ontwerp; de herleiding in het regeldocument en de vragen op de kaart van ACT-01.13 zijn de controle, FND-044)", C: [AGT-02 (PRC-04)], escalatie: PRC-04`; `skl_status` volgens K-14.
- ACT-01.12 (r.1656), huidig: `beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11), C: [ROL-01], ... escalatie: PRC-05` -> zelfde voorstel als ACT-01.10, `C: []`.
- ACT-01.13 (r.1657): `beslisser: ROL-01 (GOV-11), controleur: ROL-01 (GOV-11)` blijft; `C: ['ROL-01 (grill-sessies, uml-class-diagram)']` -> `C: ['ROL-01 (grill-sessies, uml-class-diagram; de vragen van Atlas op de kaart)']`.
- ACT-01.24 (r.1667): `beslisser/controleur ROL-01 (GOV-11)` blijft; `C` erbij `, en de vragen op de kaart`.
- ACT-01.11 (r.1655), `opm`, huidig: `"`architect-modeling` en de deelskills architect-architecture-choice, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database regelen samen het pakketakkoord GOV-11 (B-08, PRP-003)"` -> voorstel: `... regelen samen het pakketakkoord GOV-11; bij P3 gaat dat alleen over het ene document klassendiagram met databaseontwerp (B-24)`.
- ACT-02.6 (r.1686), huidig: `beslisser: 'ROL-01 (GOV-09; per geraakt document bij P3: GOV-03, 04, 05, 13; bij P1 en P2: GOV-11)'` -> voorstel: `beslisser: 'ROL-01 (GOV-09; bij P3 voor het klassendiagram met databaseontwerp: GOV-05, domeinmodel en sequentiediagrammen intern zonder akkoord; bij P1 en P2: GOV-11)'`.
- ACT-03.1 (r.1702), huidig `opm: 'het goedkeuringsmoment staat in elke producerende skill afzonderlijk (requirements-analysis, uml-use-cases, architect-architecture-choice, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database); PRP-023 bundelt het in `vragen-en-akkoordrondes`'` -> voorstel: `uml-domain-modelling` en `uml-sequence-diagrams` uit de lijst (B-24), `uml-class-diagram` en `architect-database` leveren samen één akkoord.
- [P2-noot] ACT-01.59 (r.1678): `cap: [CAP-27, CAP-07, CAP-09]`, `skl: [architect-componentontwerp, uml-sequence-diagrams, architect-database]` en `wijziging_0_11: "... uml-sequence-diagrams van bestaat naar uitbreiden (zelfde eigen goedkeuringsmoment als bij ACT-01.12; kernflows bij P2)"`: de cap/skl blijven; de tekst `zelfde eigen goedkeuringsmoment als bij ACT-01.12` is na B-24 niet meer waar (bij P2 geen eigen moment: de kernflows gaan mee in GOV-11); als historie laten, nieuwe `wijziging_0_16` erbij.
- Niet gewijzigd: ACT-01.14, ACT-01.16 (`controleur ROL-01 (GOV-06 ...)`), ACT-02.7, ACT-02.55 (`beslisser: ROL-01 (met de GOV van het bijgewerkte document)`).

**R-28 [GEWIJZIGD] `korte_namen`: vier regels** (r.2022-2024, 2032)
- Huidig: `"GOV-03": "akkoord domeinmodel"`, `"GOV-04": "akkoord sequentiediagrammen"`, `"GOV-05": "akkoord ontwerpklassendiagram"`, `"GOV-13": "akkoord databaseontwerp"`.
- Voorstel: `"GOV-03": "akkoord domeinmodel (vervallen)"`, `"GOV-04": "akkoord sequentiediagrammen (vervallen)"`, `"GOV-05": "akkoord klassendiagram en databaseontwerp"`, `"GOV-13": "akkoord databaseontwerp (vervallen)"`. De namen van ACT-01.10, 01.12, 01.13, 01.24 (`... opstellen bij maatwerk`) blijven; optioneel `"ACT-01.10": "domeinmodel opstellen bij maatwerk (intern)"`, idem 01.12.

**R-29 [GEWIJZIGD] `aannames`: ASM-18, ASM-20, ASM-60**
- ASM-18 (r.2186), huidig: `"Bij GOV-11 werkt Atlas de documenten van het technisch ontwerp volgens het profiel af in de vaste volgorde (bij P3: domeinmodel, sequentiediagrammen, klassendiagram, databaseontwerp; de architectuurkeuze zit sinds 0.10 niet meer in GOV-11 maar in GOV-15) en legt ze samen voor. ..."` -> voorstel: `(bij P3: domeinmodel en sequentiediagrammen intern, daarna klassendiagram met databaseontwerp als één document dat in GOV-11 wordt voorgelegd; ...) en legt ze samen voor.` en achteraan: `Bij P3 is het pakket één document: een afkeuring telt als herziening van dat document.`
- ASM-20 (r.2187), huidig: `"... elke wijziging van een goedgekeurd document gaat langs zijn GOV, ook een kleine, aantoonbaar niet-breaking aanvulling."` -> erbij: `Documenten zonder akkoord (domeinmodel en sequentiediagrammen bij P3, B-24) werkt Atlas zelf bij; dat is geen goedgekeurd document.`
- ASM-60 (r.2228), huidig: `"... (bij requirements-analysis, uml-use-cases, architect-architecture-choice, architect-modeling, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database staat het oude goedkeuringsmoment of de oude stop er nog; ...)"` -> erbij: `Voor uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, architect-database en architect-modeling zegt B-24 daarnaast iets anders dan de aanvulling; die skills worden opnieuw uitgebreid via PRC-08 (K-14).`

### 1.4 Gecontroleerd en niet geraakt (register)
ROL-01 (`verantwoordelijkheid` en `in`: UC1 houdt vier akkoorden GOV-10, GOV-15, GOV-11, GOV-06; GOV-11 noemt alleen "het technisch ontwerp volgens profiel"); GOV-09 (r.577-593); GOV-06; G-01.6 (P3 → ACT-01.10 blijft); G-02.3; ACT-01.14; ACT-02.7, ACT-02.53, ACT-02.55 (tekst blijft waar); grillmomenten GS1-GS14 (GS6 vervallen); TL-V5 (besluit blijft: "kern vooraf"); OPEN-06 en OPEN-12 (beantwoorde historie); `generieke_lanes`; `quality-gates` poort vóór ACT-01.15 (`GOV-15 en GOV-11`).

---

## 2. prc-01.md

**P1-01 [GEWIJZIGD] regel 5, Labels**
- Huidig: `**B** = Besloten (jouw opdrachten, B-01 t/m B-22, TL-V1 t/m TL-V7; B-21 is het pakket PRC-08 – organisatie aanpassen dat is uitgevoerd, B-22 je akkoord op model 0.15).`
- Voorstel: `... B-01 t/m B-24, ...; B-22 je akkoord op model 0.15, B-24 je besluit over intern ontwerp en één akkoord op klassendiagram met databaseontwerp).`

**P1-02 [NIEUW] regel 3, Status**
- Voorstel: voorop een nieuwe statusregel: `Status: **Concept, ter goedkeuring** (versie 0.16, CHG-032 – weergave van besluit B-24): ...`; de huidige tekst (`Status: **Goedgekeurd (2026-11-01, Carlo, kaart 783a477a)** (versie 0.15, CHG-029 ...`) volgt als "Daarvoor gold ...". Na het akkoord de definitieve statusregel.

**P1-03 [NIEUW] kopblok "Nieuw in 0.16"** (boven "Nieuw in 0.15", regel 9)
- Voorstel: `**Nieuw in 0.16** (CHG-032, besluit B-24): - **Intern ontwerp bij P3:** ACT-01.10 (domeinmodel opstellen bij maatwerk) en ACT-01.12 (sequentiediagrammen opstellen bij maatwerk) zijn nu interne stappen van Atlas: een modelbestand (JSON) en een regeldocument (levenscycli, invarianten, herleiding naar use cases) in docs/architecture/; GLOSSARY.md hoort erbij; geen pagina, geen document op het issue en geen akkoord van jou. - **Eén akkoord:** ontwerpklassendiagram (ACT-01.13) en databaseontwerp (ACT-01.24) zijn één document; GOV-11 bevat bij P3 dat ene document. - **Vragen op de kaart:** keuzes die Atlas zelf invult en die niet in de goedgekeurde eisen of bedrijfsregels staan, staan als vraag (met aanbevolen antwoord) op de kaart van GOV-11. - **Ongewijzigd:** UC1 houdt 4 akkoorden; het diagram heeft dezelfde stappen en beslissingen; bij P2 blijven de sequentiediagrammen van de kernflows in het technisch ontwerp (ACT-01.59) en gaan mee in GOV-11; P1 verandert niet. - Skills en instructies van Atlas moeten hierop worden aangepast via PRC-08 (K-14).`

**P1-04 [GEWIJZIGD] regel 74, In/Uit — Uit**
- Huidig: `... architectuurkeuze met profiel-ADR, technisch ontwerp volgens het profiel, opdeling in slices, bouwcontract van slice 1, ...`
- Voorstel: `... technisch ontwerp volgens het profiel (bij P3: het ontwerpdocument met klassendiagram en databaseontwerp; intern het domeinmodel en de sequentiediagrammen), ...`

**P1-05 [GEWIJZIGD] regel 109, ACT-01.10** (tabelrij)
- Huidig: `| ACT-01.10 | Domeinmodel opstellen (profiel P3) | ROL-04 (systeemarchitect) | use cases, bedrijfsregels, architectuurkeuze | domeinmodel, `GLOSSARY.md` | ACT-01.12 (sequentiediagrammen opstellen bij maatwerk) | document | B (stap 3), F (`architect-modeling` fase 2), B (B-12: PRP-034 – drie architectuurprofielen: alleen P3) |`
- Voorstel: Resultaat `domeinmodel als modelbestand (JSON) met regeldocument (levenscycli, invarianten, herleiding naar use cases en bedrijfsregels); `GLOSSARY.md`; intern, geen akkoord`; Paperclip `bestanden in docs/architecture/ van de repository; geen document op het issue, geen pagina, geen kaart`; Label erbij `, B (B-24 – intern ontwerp)`.

**P1-06 [GEWIJZIGD] regel 110, ACT-01.12**
- Huidig: Resultaat `sequentiediagrammen, in principe voor de hele kern`; Paperclip `document`; Label `B (stap 3, TL-V5 – kern vooraf volledig ontwerpen), B (B-12: PRP-029 ...; PRP-034 ...: alleen P3)`.
- Voorstel: Resultaat `sequentiediagrammen als modelbestand (JSON), met per diagram de herleiding naar de use cases in het regeldocument, voor alle use cases met de markering "kern" (TL-V5, ASM-62); intern, geen akkoord`; Paperclip `bestanden in docs/architecture/; geen document op het issue, geen pagina, geen kaart`; Label erbij `, B (B-24)`.

**P1-07 [GEWIJZIGD] regel 111, ACT-01.13**
- Huidig: Input `domeinmodel, sequentiediagrammen`; Resultaat `klassendiagram, in principe voor de hele kern`; Paperclip `document`.
- Voorstel: Input `domeinmodel en sequentiediagrammen (intern, uit de modelbestanden)`; Resultaat `klassendiagram, in principe voor de hele kern, als eerste deel van het ene ontwerpdocument (klassendiagram met databaseontwerp), met herleidingstabel en de keuzes van Atlas buiten de goedgekeurde eisen en bedrijfsregels als vragen met aanbevolen antwoord`; Paperclip `document op het issue (voor jouw kaart GOV-11) en dezelfde inhoud in docs/architecture/ ter naslag`.

**P1-08 [GEWIJZIGD] regel 112, ACT-01.24**
- Huidig: Input `klassendiagram, sequentiediagrammen, requirements, ADR's, **paginabrieven**`; Resultaat `databaseontwerp van de kern; databasesysteem in een ADR als dat nog niet vastligt`; Paperclip `document`.
- Voorstel: Input `klassendiagram (concept, hetzelfde document), sequentiediagrammen (intern), requirements, ADR's, **paginabrieven**`; Resultaat `databaseontwerp van de kern met ER-diagram, in hetzelfde document als het klassendiagram; databasesysteem in een ADR als dat nog niet vastligt; de vragenlijst is compleet`; Paperclip `hetzelfde document op het issue als ACT-01.13 (één document, één item op de kaart)`.

**P1-09 [GEWIJZIGD] regel 166, GOV-11** (rij in Beslissingen en goedkeuringen)
- Huidig: `P1 contentmodel en platformconfiguratie; P2 componenten-, route- en dataontwerp; P3 domeinmodel, sequentiediagrammen, klassendiagram en databaseontwerp. Eén kaart met een beoordeling per document. Niet meer de architectuurkeuze (die zit in GOV-15).` en Bij afwijzing `... per document naar de eigen activiteit (ACT-01.60 – contentmodel en platformconfiguratie opstellen / 01.59 / 01.10 / 01.12 / 01.13 / 01.24); geraakte latere documenten werkt Atlas mee bij (ASM-18 – afgekeurd document apart herzien)`.
- Voorstel: `P1 contentmodel en platformconfiguratie; P2 componenten-, route- en dataontwerp, met sequentiediagrammen voor de kernflows; P3 één document met klassendiagram en databaseontwerp (domeinmodel, GLOSSARY.md en sequentiediagrammen zijn intern en zitten niet in de kaart; keuzes van Atlas buiten de eisen en bedrijfsregels staan als vragen met aanbevolen antwoord op de kaart). Eén kaart met een beoordeling per document (bij P3 één document). Niet meer de architectuurkeuze (die zit in GOV-15).` Bij afwijzing: `... (ACT-01.60 / 01.59 / bij P3 ACT-01.13 of 01.24 voor het ene document); geraakte latere documenten, ook de interne modelbestanden, werkt Atlas mee bij (ASM-18)`. Label erbij `B (B-24)`.

**P1-10 [GEWIJZIGD] regels 183-186, tabel Producten per architectuurprofiel** (vier rijen)
- Huidig: `| Domeinmodel (01.10) | — | — | V |`; `| Sequentiediagrammen (01.12) | O, alleen koppelingen, in 01.60 | V voor kernflows, in 01.59 | V |`; `| Ontwerpklassendiagram (01.13) | — | — | V |`; `| Databaseontwerp (01.24, B-07 – volledig databaseontwerp van de kern) | — | V alleen bij eigen database, in 01.59 | V |`.
- Voorstel: `| Domeinmodel (01.10) | — | — | V, intern (geen akkoord, B-24) |`; `| Sequentiediagrammen (01.12) | O, alleen koppelingen, in 01.60 | V voor kernflows, in 01.59 (in het technisch ontwerp, mee in GOV-11) | V, intern (geen akkoord, B-24) |`; `| Ontwerpklassendiagram (01.13) | — | — | V, één document met het databaseontwerp (B-24) |`; `| Databaseontwerp (01.24, B-07 ...) | — | V alleen bij eigen database, in 01.59 | V, zelfde document als het klassendiagram |`. Regel 172 ("Dit is de tabel waartegen GOV-11 ... toetsen") blijft.
- [P2-noot] P2-cel van de sequentierij en regel 108 (ACT-01.59 Resultaat: `modules en componenten, routes, datastroom, sequentiediagrammen voor de kernflows, datamodel en databaseontwerp alleen bij een eigen database; ...`): ongewijzigd, hier staan de P2-sequenties.

**P1-11 [GEWIJZIGD] regel 191, "Akkoorden in de basis: 4"**
- Huidig: `**Akkoorden in de basis: 4** (GOV-10, GOV-15 ..., GOV-11, GOV-06 ...). In 0.8 waren het er 3. ...`
- Voorstel: zin erbij: `Bij P3 bevat GOV-11 sinds 0.16 één document (klassendiagram met databaseontwerp); het aantal akkoorden blijft 4 (B-24).`

**P1-12 [GEWIJZIGD] regel 195, bullet TL-V5 en B-07**
- Huidig: `- **TL-V5 en B-07 (kern vooraf, volledig databaseontwerp vóór het backlog):** gelden ongewijzigd voor **P3**. Bij P2 alleen een databaseontwerp als er een eigen database is; bij P1 n.v.t., want het platform beheert de database (PRP-034 – drie architectuurprofielen).`
- Voorstel: `... gelden voor **P3**, met twee verschillen sinds 0.16 (B-24): de sequentiediagrammen en het domeinmodel van de kern maakt Atlas intern (de selectie van use cases is van Atlas, ASM-62); het databaseontwerp komt niet na het goedgekeurde klassendiagram maar samen met het klassendiagram in één document met één akkoord, nog steeds vóór het backlog. Bij P2 ... bij P1 n.v.t. ...`

**P1-13 [GEWIJZIGD] regel 201, "Wat dit vroeg en wat er is gedaan"**
- Huidig: `... Uitgebreid zijn `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `architect-modeling`, `architect-database`, ...; bij 8 van de uitgebreide skills staat de oude stop nog in de tekst, naast de aanvulling die voorgaat (FND-042, ASM-60).`
- Voorstel: zin erbij: `Sinds 0.16 (B-24) vraagt het besluit een nieuwe uitbreiding van architect-modeling, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram en architect-database (en de instructies van Atlas) via PRC-08; tot dan staan hun skillstappen op uitbreiden.`

**P1-14 [NIEUW] regels 203-206, Restrisico: extra bullet**
- Voorstel: `- Het domeinmodel en de sequentiediagrammen (P3) hebben geen tweede lezer meer: jij ziet ze niet. De herleiding naar use cases en bedrijfsregels staat in het regeldocument en Atlas legt elke keuze buiten de goedgekeurde eisen voor op de kaart van het klassendiagram (FND-044 – intern ontwerp zonder tweede lezer).`

**P1-15 [GEWIJZIGD] regel 214, Uitzonderingen en loops: "Herziening raakt een later document"**
- Huidig: `- **Herziening raakt een later document** binnen GOV-10 ..., GOV-15 ... of GOV-11 (akkoord technisch ontwerp volgens profiel): de producent werkt het mee bij in hetzelfde pakket (ASM-18 ..., ASM-26 ...).`
- Voorstel: erbij: `Bij P3 in GOV-11 is dat het ene document klassendiagram met databaseontwerp; Atlas werkt de interne modelbestanden (domeinmodel, sequentiediagrammen) zelf mee bij, zonder akkoord.` (Regel 209, "Afkeuring ... per document", blijft.)

**P1-16 [GEWIJZIGD] regels 231 en 259, mermaid (diagram)**
- Huidig regel 231: `GOV11{{"GOV-11 Technisch ontwerp volgens profiel"}}`
- Huidig regel 259: `A10["ACT-01.10 Domeinmodel (P3)"] --> A12["ACT-01.12 Sequentiediagrammen (P3)"] --> A13["ACT-01.13 Klassendiagram (P3)"] --> A24["ACT-01.24 Databaseontwerp (P3)"]`
- Voorstel regel 259: `A10["ACT-01.10 Domeinmodel (P3, intern)"] --> A12["ACT-01.12 Sequentiediagrammen (P3, intern)"] --> A13["ACT-01.13 Klassendiagram en vragen (P3)"] --> A24["ACT-01.24 Databaseontwerp, zelfde document (P3)"]`
- Voorstel regel 231: `GOV11{{"GOV-11 Technisch ontwerp volgens profiel (P3: klassendiagram met database)"}}`
- Regel 297 (`GOV11 -. "↩ afgekeurd: PRC-05, per document" .-> G6`): blijft; optioneel extra pijl `GOV11 -. "↩ afgekeurd P3: het ene document" .-> A13`.
- De stappen blijven getekend: ze bestaan nog en lopen in de lane van Atlas (keuze K-17). De lane ROL-01 krijgt geen nieuw element.

**P1-17 [GEWIJZIGD] regel 307, voetnoot onder het diagram**
- Huidig: `... bij GOV-11 (akkoord technisch ontwerp volgens profiel) naar de activiteit van het gekozen profiel, getekend via G-01.6 (welk architectuurprofiel is goedgekeurd?). ...`
- Voorstel: `... naar de activiteit van het gekozen profiel, getekend via G-01.6; bij P3 alleen naar ACT-01.13 of ACT-01.24 (het ene document), want domeinmodel en sequentiediagrammen zijn intern. ...`

**P1-18 [GEWIJZIGD] regel 317, Aannames en open vragen**
- Huidig: `... ASM-18 (afgekeurd document apart herzien), ASM-20 (kleine ontwerpwijziging ook langs akkoord), ASM-21 (poort bouwcontract in vaste controles; ...)`
- Voorstel: ASM-20 krijgt de toevoeging `(alleen voor goedgekeurde documenten; intern ontwerp bij P3 niet, B-24)` en ASM-18 `(bij P3 één document)`.

**P1-19 [NIEUW] regel 317 e.v.: ASM-62** als aanname `**ASM-62 (nieuw in 0.16):** zie register (Atlas kiest zelf de use cases voor sequentiediagrammen; vragen buiten de eisen op de kaart).`

**P1-20 [NIEUW] Wijzigingshistorie, nieuwe rij 0.16** (na regel 346)
- Voorstel: `| 0.16 | <datum> | CHG-032 (B-24): domeinmodel (met GLOSSARY.md) en sequentiediagrammen bij P3 intern (modelbestand en regeldocument, geen akkoord); klassendiagram en databaseontwerp één document in GOV-11; vragen van Atlas op de kaart (ASM-62); gewijzigd: ACT-01.10, 01.12, 01.13, 01.24, GOV-11, profieltabel. Activiteiten, beslissingen, akkoorden (4) en diagram qua stappen ongewijzigd. | Socrates |`

[P2-noot] Waar P2-sequentiediagrammen staan in PRC-01: regel 108 (ACT-01.59 Resultaat) en regel 184 (tabel, kolom P2). Geen wijziging.

Niet geraakt in PRC-01 (gecontroleerd): ACT-01.14, G-01.6, GOV-06, GOV-10, GOV-15, regel 10/19/26/151 ("UC1 houdt 4 akkoorden" blijft waar), regel 45 en 48 (historie 0.10), GS-tabel (GS6 is vervallen).

---

## 3. prc-02.md

**P2-01 [GEWIJZIGD] regel 5, Labels**
- Huidig: `**B** = Besloten (jouw opdrachten, B-01 t/m B-22, TL-V1 t/m TL-V7; B-21 ..., B-22 je akkoord op model 0.15).`
- Voorstel: `... B-01 t/m B-24, ...; ... B-24 je besluit over intern ontwerp en één akkoord op klassendiagram met databaseontwerp).`

**P2-02 [NIEUW] regel 3, Status** zoals P1-02, met `(versie 0.16, CHG-032 – weergave van besluit B-24)`.

**P2-03 [NIEUW] kopblok "Nieuw in 0.16"** (boven "Nieuw in 0.15", regel 7)
- Voorstel: `**Nieuw in 0.16** (CHG-032, besluit B-24): - **P3: nog één akkoord:** bij een wens die het ontwerp van een P3-project raakt, keur jij alleen nog het ene document klassendiagram met databaseontwerp goed (GOV-05); GOV-03 (akkoord domeinmodel), GOV-04 (akkoord sequentiediagrammen) en GOV-13 (akkoord databaseontwerp) vervallen. - **Intern:** Atlas werkt domeinmodel (met GLOSSARY.md) en sequentiediagrammen bij als modelbestand en regeldocument in docs/architecture/, zonder akkoord, pagina of document op het issue. - **Vragen:** keuzes van Atlas die niet in de goedgekeurde eisen of bedrijfsregels staan, komen als vraag op de kaart van GOV-05. - **P1 en P2:** ongewijzigd (GOV-11 per document); bij P2 blijven de sequentiediagrammen van de kernflows in het technisch ontwerp. - GOV-09 en de overige akkoorden zijn ongewijzigd.`

**P2-04 [GEWIJZIGD] regel 96, ACT-02.6 Resultaat**
- Huidig: `geraakte documenten van het technisch ontwerp van het profiel; bij een zwaarder profiel ook de nieuwe documenten van dat profiel (bijvoorbeeld een domeinmodel); zijn de use cases licht (PRP-038 – lichtere use cases bij eenvoudige site), dan vraagt Atlas Socrates via PRC-04 ... ze naar de volledige vorm te brengen, en ze komen mee in het akkoord met het ADR`
- Voorstel: `geraakte documenten van het technisch ontwerp van het profiel; bij P3 werkt Atlas domeinmodel en sequentiediagrammen intern bij (modelbestand en regeldocument, geen akkoord) en legt hij het klassendiagram met databaseontwerp als één document voor als dat geraakt is; bij een zwaarder profiel ook de nieuwe documenten van dat profiel (bijvoorbeeld een intern domeinmodel bij P3); zijn de use cases licht ..., en ze komen mee in het akkoord met het ADR`. Label erbij `B (B-24)`.

**P2-05 [GEWIJZIGD] regel 97, ACT-02.55, kolom Vervolg**
- Huidig: `PRC-03 (akkoord-poort van de project owner) → GOV-09 (akkoord architectuurkeuze en profiel) en per geraakt document van het profiel (P3: GOV-03 – akkoord domeinmodel / 04 / 05 / 13; P1, P2: GOV-11 – akkoord technisch ontwerp volgens profiel per document), samen met het ADR`
- Voorstel: `... en per geraakt document van het profiel dat een akkoord kent (P3: GOV-05 – akkoord klassendiagram en databaseontwerp, één document; domeinmodel en sequentiediagrammen intern, zonder akkoord; P1, P2: GOV-11 ... per document), samen met het ADR; raakt de wijziging bij P3 alleen het domeinmodel of de sequentiediagrammen, dan is er geen akkoord en volgt ACT-02.7`.

**P2-06 [GEWIJZIGD] regel 149, rij "GOV-09 en per profiel"**
- Huidig: Vraag `Akkoord op elk geraakt document, samen met het ADR (ROL-01 – project owner): architectuurkeuze en profiel (GOV-09), bij een zwaarder profiel ook de bijgewerkte use cases; bij P3 GOV-03 / 04 / 05 / 13 in de volgorde van PRC-01 (nieuwe klant: opdracht tot eerste backlog); bij P1 en P2 GOV-11 (akkoord technisch ontwerp volgens profiel) per document`; Label `F (`architect-database`), B (B-07 – volledig databaseontwerp van de kern, B-08 – ..., PRP-017 – ...), B (B-12: PRP-034 – drie architectuurprofielen)`.
- Voorstel: Vraag `... bij P3 GOV-05 (akkoord klassendiagram en databaseontwerp, één document; GOV-03, 04 en 13 zijn vervallen en domeinmodel en sequentiediagrammen zijn intern); bij P1 en P2 GOV-11 ... per document`; Label: `F (`architect-database`, nu samen met het klassendiagram), B (B-07 ..., B-24)`. Uitkomsten en Bij afwijzing blijven (`... PRC-05 → ACT-02.6, per document ...`).

**P2-07 [GEWIJZIGD] regel 155, "Akkoorden: per document, zoals in 0.9"**
- Huidig: `... Volgt een uitbreiding een bestaand patroon, dan blijft het aantal akkoorden gelijk aan 0.9: GOV-01 (...), GOV-02, (GOV-09 – akkoord architectuurkeuze en profiel enz. als het ontwerp geraakt is) en GOV-06 (...).`
- Voorstel: erbij: `Raakt de wens bij P3 het ontwerp, dan is het extra akkoord alleen GOV-05 (klassendiagram met databaseontwerp, één document); sinds 0.16 vervallen GOV-03, GOV-04 en GOV-13 (B-24).`

**P2-08 [GEWIJZIGD] regel 164, Uitzonderingen: Profielwijziging**
- Huidig: `- **Profielwijziging** (G-02.3 ... → ACT-02.6 ...): ADR, GOV-09 (akkoord architectuurkeuze en profiel) en de nieuwe documenten van het profiel. **B** (B-12: PRP-034 ...)`
- Voorstel: `... ADR, GOV-09 en de nieuwe documenten van het profiel die een akkoord kennen (bij een stap naar P3: het klassendiagram met databaseontwerp, GOV-05; het domeinmodel en de sequentiediagrammen maakt Atlas intern). ... **B** (B-12: PRP-034 ...), **B** (B-24)`.

**P2-09 [GEWIJZIGD] regels 179 en 258, mermaid en voetnoot**
- Huidig regel 179: `GOVO{{"GOV-09 en per profiel, met ADR"}}`
- Voorstel: `GOVO{{"GOV-09 en per profiel (P3: GOV-05), met ADR"}}`
- Edge regel 232 `A55 --> GOVO -- "akkoord op het laatste geraakte document" --> A7`: voorstel extra pijl `A55 -. "P3: alleen intern geraakt, geen akkoord" .-> A7` (keuze K-08).
- Voetnoot regel 258: geen verwijzing naar GOV-03/04/05/13; ongewijzigd (optioneel zin: `bij P3 gaat GOVO over GOV-05`).

**P2-10 [GEWIJZIGD] regel 267, Aannames: ASM-18 en ASM-20**
- Huidig: `- ASM-02 ..., ASM-09 (Atlas ontwerpt buiten kern per slice), ASM-14 ..., ASM-18 (afgekeurd document apart herzien), ASM-20 t/m ASM-25 (zoals in 0.9).`
- Voorstel: ASM-20 krijgt `(alleen voor goedgekeurde documenten; intern ontwerp bij P3 niet, B-24)`; `ASM-62 (nieuw in 0.16)` erbij.

**P2-11 [NIEUW] Wijzigingshistorie, rij 0.16** (na regel 300)
- Voorstel: `| 0.16 | <datum> | CHG-032 (B-24): bij P3 vervallen GOV-03 (akkoord domeinmodel), GOV-04 (akkoord sequentiediagrammen) en GOV-13 (akkoord databaseontwerp); GOV-05 is het ene akkoord op klassendiagram met databaseontwerp; domeinmodel (met GLOSSARY.md) en sequentiediagrammen intern; vragen van Atlas op de kaart (ASM-62); gewijzigd: ACT-02.6, ACT-02.55 (Vervolg), rij GOV-09 en per profiel, uitzondering profielwijziging, diagram. Stappen en beslissingen ongewijzigd. | Socrates |`

**P2-12 [NIEUW] ASM-62 en restrisico**: in de aannamelijst `ASM-62` (zoals P1-19); bij Restrisico (regel 262) een zin `Domeinmodel en sequentiediagrammen hebben bij P3 geen tweede lezer (FND-044).`

[P2-noot] PRC-02 regel 98, ACT-02.7: `per profiel: ... P2 componenten, routes en de sequenties van nieuwe flows; P3 modules, componenten, interfaces en zo nodig sequentie- en klassendiagram`. Ongewijzigd: hier staan de P2-sequenties in UC2; het sequentie- en klassendiagram van de slice bij P3 valt niet onder GOV-05 (K-07).

Niet geraakt in PRC-02 (gecontroleerd): GOV-01, GOV-02, GOV-06, GOV-07, GOV-08, GOV-12, GOV-14, G-02.3, G-02.7, ACT-02.53, ACT-02.55 (Resultaat), regel 108, regel 132 ("De akkoorden van UC2 blijven zoals hieronder"; klopt nog), regel 45 (historie), GS-tabel.

---

## 4. Keuzes die het besluit niet beslist

| # | Keuze (1 zin) | Aanbevolen invulling |
| --- | --- | --- |
| K-01 | Wat gebeurt er met de goedkeuring van GLOSSARY.md (nu in GOV-03: "Engelse termen met _NL_")? | Vervalt als akkoord. Eigenaar per soort term blijft (PRP-026: Socrates de bedrijfstermen, Atlas de technische termen); Atlas voegt toe zonder akkoord; wijziging aan een term van Socrates gaat via PRC-04. Bedrijfstermen worden wel meegekeken in GOV-10 als Socrates ze daarin meelevert. |
| K-02 | Wat gebeurt er met de mini-goedkeuring van de selectie van use cases voor sequentiediagrammen en met criterium "selectie dekt de kern" (TL-V5)? | Vervalt (ASM-62). Atlas neemt alle use cases met de markering "kern" (ACT-01.54). Een kern-use case zonder diagram staat als vraag op de kaart van het klassendiagram. TL-V5 blijft een regel voor Atlas in het regeldocument. |
| K-03 | Blijft GOV-05 of GOV-13 (of een nieuw GOV-16) het ene akkoord in UC2? | GOV-05 blijft en wordt hernoemd tot "Akkoord ontwerpklassendiagram en databaseontwerp"; GOV-03, GOV-04, GOV-13 naar `vervallen_ids`; geen nieuw ID (het besluit noemt de kaart van het klassendiagram). GOV-13 hernoemen kan ook, maar de kaart is die van het klassendiagram. |
| K-04 | Blijft GOV-11 bij P3 een "pakket" nu het één document bevat? | Ja: GOV-11 blijft de kaart voor alle profielen (P1 en P2 hebben meerdere documenten); bij P3 één item op de `request_item_verdicts`-kaart. UC1 houdt 4 akkoorden. |
| K-05 | Hoe komen de vragen van Atlas "op de kaart" en hoe beantwoordt Carlo ze (telt dat als extra akkoord)? | Eén sectie "Vragen aan Carlo" in het document, genummerd met aanbevolen antwoord (grill-vorm, B-15), en dezelfde lijst bij het item op de akkoordkaart. Akkoord betekent instemmen met de aanbevolen antwoorden; een ander antwoord of een afkeuring gaat als commentaar per vraag via PRC-05. Geen aparte vragenkaart en geen extra akkoord. |
| K-06 | Blijven de sequentiediagrammen van de kernflows bij P2 goedgekeurd en hoe verschilt de skill `uml-sequence-diagrams` per profiel? | Ja: bij P2 blijven ze in het technisch ontwerp (ACT-01.59) en gaan mee in GOV-11 (per document in PRC-02). De skill krijgt een profielregel: P3 intern (JSON), P2 als onderdeel van het document dat Carlo ziet. Geen mini-goedkeuring van de selectie, ook niet bij P2. |
| K-07 | Vallen de sequentie- en klassendiagrammen per slice (ACT-02.7) onder het besluit? | Nee, ongewijzigd: geen eigen akkoord (alleen via GOV-06 bij een voorwaarde van stap 5). Noteer dit in `ACT-02.7`. |
| K-08 | Wat als een uitbreiding bij P3 alleen domeinmodel of sequentiediagrammen raakt (klassendiagram en database niet)? | Geen akkoord. Atlas werkt de modelbestanden bij; het ADR (PRP-017) blijft verplicht bij een wijziging van het globale ontwerp maar rijdt alleen mee in GOV-05 als klassendiagram of database geraakt is; GOV-09 alleen bij architectuur of profiel. In het mermaid een gestippelde pijl A55 naar A7. |
| K-09 | Wat betekent "één document" voor de stappen ACT-01.13 en ACT-01.24 en voor B-07 ("na het goedgekeurde klassendiagram") en de telling van herzieningen? | Twee stappen blijven (volgorde klassendiagram dan database), één document, één beoordeling, één telling (max. 2 herzieningen per document, PRP-006). B-07 blijft staan met `aangepast_door: B-24`. |
| K-10 | Bestandsnamen en plek van het interne ontwerp? | `docs/architecture/domain-model.json`, `docs/architecture/sequences.json`, één regeldocument `docs/architecture/domain-rules.md` voor beide (levenscycli, invarianten, per diagram herleiding naar UC en BR); ontwerpdocument `class-diagram.md` met sectie Databaseontwerp en `design-notes.md` blijven. |
| K-11 | Eigen modelbestand voor sequentiediagrammen en eigen regeldocument, of gedeeld? | Eigen JSON (`sequences.json`), gedeeld regeldocument; het besluit noemt één modelbestand plus één regeldocument voor beide, dus bevestig bij Carlo als het anders bedoeld is. |
| K-12 | Blijft de klikbare pagina (artifact) voor het ene document klassendiagram met database? | Ja, behouden: het besluit schrapt de pagina alleen bij domeinmodel en sequentiediagrammen. Vraag bevestiging bij het akkoord. |
| K-13 | Welke status krijgen de interne bestanden in STATUS.md? | `Intern (versie, datum)`, nooit `Goedgekeurd` (ACT-03.3: Goedgekeurd pas na zichtbare bevestiging). |
| K-14 | Hoe verwerken we dat skills en instructies van Atlas moeten veranderen (oude goedkeuringsmoment staat nog in `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`) en wat doet dat met de telling 75 / 0 / 0 / 9? | Volg het precedent van 0.10: skillstatus "uitbreiden (besloten B-24, via PRC-08)" voor die stappen (ACT-01.10, 01.11, 01.12, 01.13, 01.24, 01.59, 02.6, 02.7), dus telling tot 67 / 8 / 0 / 9 tot Dr. Evil PRC-08 uitvoert; FND-042 en ASM-60 uitbreiden. Kleiner alternatief: alleen ACT-01.10, 01.12, 01.13, 01.24, 02.6 (telling 70 / 5 / 0 / 9) als P2-gebruik van de skills ongemoeid blijft. |
| K-15 | Wie controleert het interne ontwerp (geen tweede lezer) en controleert de poort van Dr. Evil het? | Bewust geen controleur (zoals ASM-39 en ASM-58); de controle zijn de herleiding in het regeldocument en de vragen op de kaart; FND-044 als restrisico. `quality-gates` blijft GOV-15, GOV-11 en GOV-06 controleren en kijkt niet naar de interne bestanden. |
| K-16 | Wat gebeurt er met de mermaid-diagrammen? | Stappen ACT-01.10 en 01.12 blijven getekend in de lane van Atlas, met "(intern)" in het label; GOV-11- en GOVO-labels aanpassen; geen nieuwe nodes. Een aparte lane of node voor "intern" is niet nodig. |
| K-17 | Is dit een procesverandering (aantal akkoorden, tellingen)? | UC1 blijft 4 akkoorden; UC2 bij P3 gaat van maximaal 4 per-document akkoorden naar 1; de telling "15 goedkeuringen" wordt 12 (GOV-03, 04, 13 vervallen) in `proces-catalogus`, `organisatie` en `verantwoordelijkheden`. |
| K-18 | Nummering en versie van het besluit? | B-24, CHG-032, ASM-62, FND-044, model 0.16 volgens `uitbreidingsgids` (die tabel schuift door: B-25, CHG-033, ASM-63, FND-045; GOV-16 blijft de volgende vrije GOV, de vervallen IDs worden niet hergebruikt). |
| K-19 | Bij een afkeuring van het ene document: wat doet Atlas met de interne modelbestanden? | Atlas werkt ze zelf mee bij (ASM-18 per document); geen teller en geen akkoord. |

---

## 5. Overige documenten (worden later uit het register bijgewerkt)

| Document | Aantal plekken (ca.) | Wat verandert |
| --- | --- | --- |
| proces-catalogus.md | 7 | regels 40, 51, 81, 108: "15 goedkeuringen" wordt 12, GOV-03/04/05/13 bij P3 wordt GOV-05; regel 92 (output PRC-01 P3), regel 102 (GOV-09 en per profiel), regel 108 (GOV-03, 04, 05, 13 onderdeel van GOV-11), telling skillstatus |
| organisatie.md | 8 | B-07 en kernontwerp (regels 18, 98), GOV-03/04/05/13 in UC2 (regels 67, 289 als historie met noot), Atlas-In/Uit (regel 168), profielenregel, regels 418, 467 (GOV-11 en volgorde), telling akkoorden en skillstatus |
| verantwoordelijkheden.md | 14 | GOV-rijen GOV-03, 04, 13 vervallen (regels 269, 270, 279), GOV-05 (271), GOV-11 (278), GOV-09-rij (115, 259), RACI ACT-01.10/12/13/24, ACT-02.6 (59, 257, 315), regel 363-364, telling 15 naar 12 |
| activiteit-skillmatrix.md | 17 | rijen ACT-01.10, 01.11, 01.12, 01.13, 01.24, 01.59, 02.6, 02.7 (skillstatus en tekst), profieltabel (regels 147-150), telling aanwezig/gedeeltelijk, kopblok "Nieuw in 0.16" |
| agent-skillmatrix.md | 10 | Atlas-rij en skillkolommen voor architect-modeling, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, architect-database; telling; P3-regel (regel 147) |
| capabilities-en-skills.md | 14 | CAP-06, CAP-07 (en 08, 09), skillrijen regels 113-119 (stand), regels 93-94, 159, 180-181 (oude stop, pakketakkoord), P2-sequenties bij architect-componentontwerp (regel 153, ongewijzigd) |
| skill-specificaties.md | ca. 20 | secties architect-modeling, uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, architect-database (Stand, Wat ontbrak, Gewenst, Goedkeuringsmoment), domain-modeling (GLOSSARY), quality-gates (poort), regel 15 en 218 (gevolg voor skills met goedkeuringsmoment) |
| agentprofiel-atlas.md | 12 | regels 19, 27 (technisch ontwerp P3), 30, 39 (GLOSSARY), 56 (GOV-09), 76-79 (goedkeuringsmoment per fase), 88, 107, 128; instructies van Atlas in de tabel |
| uitbreidingsgids.md | 8 | tabel Hoogste ID nu (Besluit, Aanname, Bevinding, Wijziging, en Goedkeuringsmoment-opmerking over vervallen GOV-03/04/13), regel 33 (8 skills pakketakkoord), regel 62 (skilllijst), regel 119 |
| codes-en-namen.md | 8 | regels 178, 179, 180, 188 (korte namen GOV-03, 04, 05, 13), nieuwe regels B-24, CHG-032, ASM-62, FND-044 |
| prc-03.md | 3 | regels 18, 60: "GOV-01 t/m GOV-15" zonder 03, 04, 13; wijzigingshistorie/status |
| prc-05.md | 1 | ASM-18-regel (97): bij P3 bevat GOV-11 één document |
| paperclip-mapping.md | 2 | nieuwe rij "Intern ontwerp: modelbestanden en regeldocument in de repository" en bij het akkoord op een pakket (regels 37, 57) dat bij P3 het item één document is |

---

## 6. Telling

- register.md: 47 gewijzigde (waaronder 6 skillrijen in het kort, 7 skills in de yaml, 7 koppelingen, 4 profielrijen, 5 activiteiten), 7 nieuwe (B-24, CHG-032/meta, ASM-62 en 4 korte namen), 3 vervallen (GOV-03, GOV-04, GOV-13), plus 2 optioneel (CAP-08, CAP-09); 6 plekken met P2-noot.
- prc-01.md: 19 gewijzigde elementen (15 plekken: P1-01, 04 tot 13, 15 tot 18; daarvan P1-10 vier tabelrijen en P1-16 twee regels), 5 nieuwe (P1-02, 03, 14, 19, 20), 0 vervallen; 2 P2-noten.
- prc-02.md: 9 gewijzigde elementen (P2-01, 04 tot 10; P2-09 telt voor 2: label en pijl), 4 nieuwe (P2-02, 03, 11, 12), GOV-03/04/13 komen alleen als verwijzing voor in P2-05 en P2-06; 1 P2-noot (ACT-02.7).
