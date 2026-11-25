# Controle organisatiemodel AI coding factory, ronde 1 (organisatieanalyse)

| | |
| --- | --- |
| Scope | Ronde 1 (`bpmn-organisatieanalyse`): `register.md` (bron van waarheid), `ORGANISATIE.md`, `proces-catalogus.md`, `bevindingen.md`, `voorstellen.md`, `wijzigingen.md`. Activiteiten (ACT), capabilities, skills, GOV en RACI zijn ronde 2/3. |
| Versie van het model | 0.1 (2026-10-27) |
| Datum controle | 2026-10-27 |
| Controleur | bpmn-modelcontrole, onafhankelijke run |
| Werkwijze | Alleen lezen. Modellen niet aangepast. Bronnen: opdracht (issue-beschrijving WEB-19), `rolanalyse-orchestrator` v1.0, `voorstel-instructies`, plan op WEB-17 (§0), AGENTS.md van Dr. Evil, Atlas en Socrates, skilltekst van het bedrijf, Paperclip-API (alleen GET: agents, routines, skills, issue). Het YAML-blok in `register.md` is met een YAML-parser geladen (geldig). |

## Oordeel: terug naar de maker

Er is 1 blokkerend punt (C-01) en 11 waarschuwingen (C-02 t/m C-12). Het model is verder sterk herleidbaar: alle verwijzingen bestaan, elke FND heeft bewijs, elk PRP verwijst naar een FND en de meeste feitelijke uitspraken kloppen met de bronnen. Het blokkerende punt is snel te herstellen.

## Blokkerende bevindingen

### C-01 (blokkerend): doelen 3 en 4 hebben geen proces en geen OPEN-vraag
- **Bewijs:** `ORGANISATIE.md` §1 Doelen: "(3) Jouw tijd beschermen" en "(4) Het model uitbreidbaar houden". Alleen (1) en (2) verwijzen naar een proces (PRC-01, PRC-02). In `register.md` bestaat geen koppeling van doel 3 of 4 aan een PRC (PRC-07 en PRC-03 komen er niet bij voor) en er is geen OPEN-vraag over.
- **Eis:** `bpmn-organisatieanalyse` stap 3: "Klaar als elk doel uit stap 1 door minstens één proces gedekt wordt of een OPEN-vraag heeft." De opdrachtgever vraagt hier ook extra op te letten.
- **Herstel (aan de maker):** leg per doel vast welk PRC het dekt (bijvoorbeeld doel 3: PRC-03 en PRC-07, of een bewuste aanname dat het een kwaliteitseis is) of zet er een OPEN-vraag bij. Voeg de koppeling ook toe aan het register.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| **Structuur en ID's** | | |
| ID's uniek, volgen schema, niet hergebruikt | voldoet | Register: 33 ID's (ROL-01–05, AGT-01–05, PRC-01–08, ASM-01–08, OPEN-01–07), geen dubbelen. FND-001–015, PRP-001–014 en CHG-001 volgen het schema en sluiten aaneen. Bereiken in `wijzigingen.md` CHG-001 kloppen met de aantallen. Externe kenmerken (B-, V-, OR-, UC1/UC2, GK-) vallen buiten het schema, zie C-11. |
| Elke verwijzing wijst naar een bestaand element | voldoet | Alle PRC/ROL/AGT/ASM/OPEN/FND/PRP/CHG-verwijzingen in de zes bestanden zijn mechanisch gecontroleerd, ook de ingekorte lijsten ("FND-005, 006, 010, 012"): geen ontbrekende ID's. Externe verwijzingen: B-01 t/m B-05 staan in plan §0 op WEB-17; V5, V7, V9, V12, OR-01, OR-03 staan in `rolanalyse-orchestrator`; V15 en S3 in `voorstel-instructies`. Het "opdracht a5a789fe" staat in de issue-beschrijving. |
| Elk procesmodel heeft een status en een versie | voldoet | PRC-01 t/m PRC-06: `status: Concept`, `versie: "0.1"` in `register.md`. PRC-07 en PRC-08 zijn context (`uitgewerkt: false`) en hebben geen status of versie, zie C-10. |
| **Procesmodel** | | |
| Doel, trigger, start- en eindconditie beschreven | voldoet niet | PRC-01 en PRC-02: compleet in `register.md` (doel, aanleiding, startconditie, eindconditie = "Backlog gereed, overdracht naar implementatie"). PRC-03 t/m PRC-06: in het register alleen een doel; start en einde staan alleen in `proces-catalogus.md`. Zie C-04. |
| Elke belangrijke activiteit heeft rol, input, output, vervolg | niet te beoordelen | Er zijn nog geen activiteiten (ronde 2). Op procesniveau hebben PRC-01 en PRC-02 wel input, output en betrokken rollen. |
| Elke beslissing heeft alle uitgaande routes en negatieve afhandeling | niet te beoordelen | Nog geen beslissingen of diagrammen (ronde 2). |
| Fouten, afwijzingen en herstelroutes zijn gemodelleerd, elke terugloop heeft een uitgang | niet te beoordelen | Alleen op proces- en catalogusniveau aangekondigd: PRC-04 (escalatie naar ROL-01), PRC-05 (escalatie na max. rondes, PRP-006), PRC-06 (escalatie). Uitwerking in ronde 2. |
| Elke menselijke goedkeuring heeft een GOV-ID | niet te beoordelen | GOV hoort bij ronde 3. De akkoord-poort staat als PRC-03. |
| **Koppelingen** | | |
| Elke activiteit heeft een capability en een skill, of een OPEN-vraag | niet te beoordelen | Ronde 2/3. |
| Elke skill heeft een status met bron | niet te beoordelen | Ronde 3. Alleen genoemd: `quality-gates (bestaat)` in PRP-013, zie C-12. |
| Elke activiteit heeft een uitvoerder en één verantwoordelijke | niet te beoordelen | Ronde 2/3. Op procesniveau heeft elk PRC één eigenaar (ROL-01 of ROL-02), niet automatisch een AI-agent voor goedkeuring: ROL-01 is mens. |
| Waar onafhankelijke controle verplicht is, is de controleur niet de uitvoerder | niet te beoordelen | Ronde 3. PRP-009 stelt Atlas als controleur van de tech lead voor ("de maker is niet de controleur"). |
| **Consistentie** | | |
| Elke activiteit staat in diagram, beschrijving en register | niet te beoordelen | Geen activiteiten of diagrammen per proces in ronde 1. Het Mermaid-landschap in `ORGANISATIE.md` §2 toont PRC-01 t/m PRC-08 en komt overeen met de PRC's in het register. |
| De overzichten komen overeen met het register | voldoet niet | `proces-catalogus.md` en `ORGANISATIE.md` §3 bevatten gegevens die niet in het register staan of afwijken. Zie C-04. |
| Een `.bpmn`-bestand heeft een validatieresultaat | niet te beoordelen | Er is geen `.bpmn`-bestand en geen validator. Het Mermaid-diagram in `ORGANISATIE.md` §2 is niet gerenderd, alleen gelezen. |
| **Eindontwerp (artifact)** | | |
| ACT/GOV-ID's precies één keer in het artifact | niet te beoordelen | Ronde 4. |
| Status, versie en skillstatus komen overeen met het register | niet te beoordelen | Ronde 4. |
| Artifact bevat geen gegevens die niet in het register staan | niet te beoordelen | Ronde 4. |
| Artifact laadt zonder fouten | niet te beoordelen | Ronde 4. |
| **Kwaliteit** | | |
| Feiten, aannames, open vragen en voorstellen zijn gescheiden en gemarkeerd | voldoet niet | Over het algemeen goed: ASM-01–08, OPEN-01–07, PRP-001–014 en FND-001–015 zijn apart en gelabeld. Afwijkingen: label Besloten bij elementen die een voorstel bevatten, zie C-05, en feitelijke koppelingen, zie C-12. |
| Huidige en gewenste situatie zijn gescheiden | voldoet niet | Register: gescheiden (`situatie`: as-is voor ROL-01–04, AGT-01–03/05, PRC-07/08; to-be voor ROL-05, AGT-04, PRC-01–06). `ORGANISATIE.md` §3 en §5 hebben geen kolom as-is/to-be en mengen Feit- en Besloten-rijen in één tabel. Zie C-06. |
| De wijzigingshistorie is bijgewerkt | voldoet | `wijzigingen.md` CHG-001 (0.1, 2026-10-27, Socrates) noemt alle ID-reeksen en geraakte bestanden. |
| Een goedgekeurd model is niet overschreven | voldoet | Dit is de eerste versie (0.1). Er is geen eerder goedgekeurd organisatiemodel. Het ID-bereik in CHG-001 is nieuw. |
| **Verwijzingen naar buiten** | | |
| Genoemde agents en skills bestaan volgens de bron | voldoet | Agents Dr. Evil, Socrates, Atlas en Sentinel bestaan in de Paperclip-API. Alle genoemde skills staan in de skilllijst van het bedrijf: o.a. `paperclip-converting-plans-to-tasks`, `to-tickets`, `paperclip-create-agent`, `paperclip-board`, `architect-implementation-plan`, `architect-modeling`, `uml-use-cases`, `quality-gates`, `backlog-management`, `requirements-orchestration`, `escalation-management`, `weekmoment`. |
| Werking en feitelijke koppeling van agents en skills | niet te beoordelen | Volgens de regel pas na bevestiging door de gebruiker. Ik heb alleen de configuratie (`desiredSkills`) gelezen, niet of de synchronisatie echt is uitgevoerd. Zie C-12. |
| **Extra checks uit de opdracht** | | |
| Elk FND heeft bewijs | voldoet | `bevindingen.md`: alle 15 FND's hebben een gevulde kolom Bewijs met bestand, sectie of ID. De sterkte van het bewijs voor FND-015 is zwak, zie C-02. |
| Elk PRP verwijst naar minstens één FND | voldoet | `voorstellen.md`: PRP-001–014 noemen allemaal minstens één FND onder "Probleem" (PRP-003: FND-005 en FND-011b; PRP-004: FND-006 en FND-002; PRP-008: FND-009 en FND-003). Omgekeerd heeft FND-004 geen PRP maar verwijst naar OPEN-05, dat is toegestaan. |
| Elk doel heeft een proces | voldoet niet | Zie C-01. |
| Feitelijke uitspraken over agents, skills en Paperclip kloppen met de bronnen | voldoet niet | 27 uitspraken getoetst (tabel hieronder): 24 juist, 3 onnauwkeurig of te sterk (twee in C-02, een in C-03). |
| As-is en to-be gescheiden | voldoet niet | Zie C-06. |
| Geen rollen buiten scope | voldoet | Rollen: ROL-01–05 (project owner, orchestrator en scrum master, business analist, systeemarchitect, tech lead). Geen developer-, tester- of designerrol in het register, de lanes of de processen. Sentinel (AGT-05) staat als inventaris met `scope: buiten (werkt na het backlog)` en zonder rol. Testers, developers en een designer-agent worden alleen genoemd als context of als niet-voorstel (PRP-011: "Geen designer-agent nu"). |
| Eindpunt "Backlog gereed, overdracht naar implementatie" | voldoet | `register.md` PRC-01 en PRC-02 `eindconditie`; `ORGANISATIE.md` §1 en §2; `proces-catalogus.md`. Niets na het eindpunt is gemodelleerd. |
| Carlo's workflow als basis, verbeteringen als aparte variant; kritische review (a), (b), (c) | voldoet | `ORGANISATIE.md` §6: (a) UC1 en UC2 zoals beschreven, (b) tabel met bevindingen, alternatieven en afweging voor elk van de zeven vragen uit de opdracht, (c) aanbeveling. PRC-01 en PRC-02 zijn Carlo's versie (`label: besloten`); de voorstellen staan apart als PRP en als to-be. Zie wel C-08 en C-11. |
| Geen verzonnen feiten over Paperclip of agents; onbekend = OPEN | voldoet niet | Onbekenden staan bij OPEN-01–07 en ASM-02 (epics in Paperclip, niet geverifieerd). Drie uitspraken zijn te sterk, zie C-02, C-03. |
| Elk voorstel bevat de onderdelen uit stap 5 | voldoet niet | Zie C-07. |

## Steekproef feitelijke uitspraken

| # | Uitspraak (model) | Bron | Uitkomst |
| --- | --- | --- | --- |
| 1 | AGT-01 Dr. Evil rapporteert aan niemand; Socrates, Atlas en Sentinel rapporteren aan Dr. Evil (register AGT-01–05) | API `reportsTo` | juist |
| 2 | Dr. Evil heeft heartbeat uit (ORGANISATIE §4, FND-013) | API `runtimeConfig.heartbeat.enabled: false` | juist |
| 3 | Er zijn geen routines (FND-013, PRC-07) | API routines: `[]` | juist |
| 4 | Atlas heeft heartbeat aan (§4) | API `heartbeat.enabled: true` | juist |
| 5 | Dr. Evil: alle 12 skills uit de rolanalyse gekoppeld (§4) | `desiredSkills` bevat alle 12 uit rolanalyse §4, plus `complain` en `suggestion-box` | juist |
| 6 | Atlas heeft `paperclip-converting-plans-to-tasks`, `to-tickets`, `paperclip-create-agent`, `paperclip-board` (FND-004, OPEN-05, §4) | API `desiredSkills` Atlas | juist |
| 7 | `uml-use-cases` is aan Socrates en Atlas gekoppeld (FND-001) | API `desiredSkills` beide (`architect-use-cases`, naam `uml-use-cases`) | juist |
| 8 | Citaat Atlas: "Doe de eisenanalyse en de use cases niet zelf." (FND-001) | AGENTS.md Atlas, Skills | juist (letterlijk) |
| 9 | De instructies van Socrates leggen use cases bij Socrates (FND-001, ROL-03) | AGENTS.md Socrates, Skills en Taken | juist |
| 10 | "Een vermelding wekt je niet" (Socrates; FND-010, ASM-08) | AGENTS.md Socrates, Samenwerking | juist |
| 11 | Dr. Evil: "ontwerp en implementatieplan is Atlas", en deelt het plan zelf op (FND-003) | AGENTS.md Dr. Evil, Taken toewijzen en Backlog maken | juist |
| 12 | Atlas doet architectuurkeuze (ADR's, context- en containerdiagram) en databaseontwerp (FND-002) | AGENTS.md Atlas, Skills | juist |
| 13 | "Carlo is product owner, designer, frontend developer en CEO" (FND-011) | AGENTS.md Dr. Evil, Werkwijze | juist (de tekst zegt "De gebruiker (Carlo)") |
| 14 | Dr. Evil is het enige loket; een wens via een andere agent behandelt hij hetzelfde (FND-008) | AGENTS.md Dr. Evil; skill `requirements-orchestration` Intake | juist |
| 15 | `architect-modeling` vraagt akkoord per fase (FND-005, PRP-003) | skill `architect-modeling` Werkwijze stap 2 | juist |
| 16 | Overdracht ROL-02 naar ROL-03 en ROL-04 via `requirements-orchestration` stap 1 en stap 4 (§5) | skill `requirements-orchestration` | juist |
| 17 | Socrates meldt goedgekeurde analyse aan Dr. Evil (§5) | AGENTS.md Socrates, Taken | juist (de instructies zijn al aangepast volgens S1/S2 van `voorstel-instructies`) |
| 18 | Atlas heeft het laatste woord op technische punten bij de opdeling (V5, ROL-04, FND-009) | AGENTS.md Dr. Evil en Atlas; rolanalyse §3 | juist |
| 19 | Limieten "Bezig" max. 3 en "Wacht op afname" max. 2 (FND-005) | rolanalyse §6, §8; skill `delivery-management` | juist |
| 20 | Weekmoment elke maandagochtend (PRC-07) | rolanalyse V10; AGENTS.md Dr. Evil | juist |
| 21 | Paperclip kent blockers, bovenliggende issues, goedkeuringskaarten (interacties), bijlagen, documenten en routines (register `systemen`) | skill `paperclip` (company-skill, bron `/app/skills/paperclip`) | juist |
| 22 | Besluiten B-01 t/m B-05 (register ROL-01, ROL-05, PRC) | plan op WEB-17, §0 | juist |
| 23 | Sentinel rapporteert aan Dr. Evil en werkt na het backlog (AGT-05) | API; AGENTS.md Dr. Evil, Route van een wens | juist |
| 24 | Genoemde skills bestaan in de skilllijst | `/api/companies/.../skills` | juist |
| 25 | FND-015: "De instructies van Socrates, Atlas en Dr. Evil en de skill `bpmn-conventies` laten een afgekeurd document zonder grens terug naar de maker gaan." | AGENTS.md van de drie agents bevatten niets over afkeuring of rondes | **onnauwkeurig**, zie C-02 |
| 26 | `ORGANISATIE.md` §6(b): "Dr. Evil wordt nu door niets gewekt (FND-013)"; FND-013: "Niemand wekt de orchestrator" | API `wakeOnDemand: true`; AGENTS.md Dr. Evil, Wanneer ben je actief ("Bij een issue dat aan jou is toegewezen"); `voorstel-instructies` §1 | **te sterk**, zie C-03 |
| 27 | OPEN-05: Atlas' instructies leggen "het aanmaken van agents via een voorstel" | Dat staat in AGENTS.md Dr. Evil en rolanalyse V7, niet in AGENTS.md Atlas | **onnauwkeurig**, zie C-02 |

## Waarschuwingen

### C-02 (waarschuwing): bronvermelding in FND-015 en OPEN-05 klopt niet met de bestanden
- **Bewijs:** `bevindingen.md` FND-015 schrijft de "terug naar de maker zonder grens" toe aan "de instructies van Socrates, Atlas en Dr. Evil". In die drie AGENTS.md-bestanden komt afkeuring, feedback of een aantal rondes niet voor. De terugloop staat wel in skills (`uml-use-cases`, goedkeuringsmoment stap 5, en `bpmn-conventies` "Status en goedkeuring" stap 4). `register.md` OPEN-05 zegt dat Atlas' instructies het aanmaken van agents via een voorstel laten lopen; dat staat in AGENTS.md Dr. Evil en rolanalyse V7.
- **Gevolg:** de kern van FND-015 klopt (nergens is een maximum vastgelegd), maar de bron is verkeerd getoond. Voor de opdrachtgever telt dit als een feit over agents zonder dekking.
- **Herstel:** noem als bewijs de skills en schrijf "de instructies leggen geen maximum vast"; pas OPEN-05 aan op de juiste bron.

### C-03 (waarschuwing): "Dr. Evil wordt door niets gewekt" is te sterk
- **Bewijs:** `bevindingen.md` FND-013 titel "Niemand wekt de orchestrator"; `ORGANISATIE.md` §6(b) rij "Orchestrator te veel of te weinig?". API: heartbeat uit, maar `wakeOnDemand: true`, en AGENTS.md Dr. Evil zegt "Bij een issue dat aan jou is toegewezen: behandel dat issue". `voorstel-instructies` §1: "wordt alleen gewekt via een toegewezen issue".
- **Gevolg:** het bewijs (heartbeat uit, `routines: []`) klopt. Alleen de formulering "door niets" niet: een toegewezen issue wekt hem wel. De conclusie dat UC2 geen automatische trigger heeft staat overeind.
- **Herstel:** "zonder routine of heartbeat wordt Dr. Evil alleen gewekt via een toegewezen issue; UC2 heeft daardoor geen vaste trigger".

### C-04 (waarschuwing): overzichten wijken af van het register
- **Bewijs:**
  - `register.md` ROL-04 `verantwoordelijkheid` noemt geen use cases, terwijl dat in Carlo's workflow (UC1 stap 3, label besloten) bij de architect ligt en `ORGANISATIE.md` §3 ROL-04 dat wel vermeldt (met FND-001). ROL-03 noemt ze in het register wel. De conflictsituatie van FND-001 staat dus niet in het register.
  - `proces-catalogus.md`: kolommen Start, Einde en Roept aan voor PRC-03 t/m PRC-08 (bijvoorbeeld PRC-05 roept PRC-03 aan; PRC-04 roept PRC-06 aan; PRC-07 start "Maandagochtend") staan niet in `register.md`, dat voor PRC-03–06 alleen `doel` heeft.
  - `register.md` PRC-02 `risicos` noemt FND-007 en FND-013; `proces-catalogus.md` voegt FND-014 toe.
  - `proces-catalogus.md` PRC-01 en PRC-02, kolom Open (OPEN-01, 02, 04, 06, 07 / OPEN-02, 03) komt niet uit het register.
- **Herstel:** pas eerst het register aan (conventie "Bron van waarheid"), daarna de overzichten.

### C-05 (waarschuwing): labels Besloten bij voorstellen en formuleringen van de maker
- **Bewijs:** `register.md` PRC-04 `doel` ("met een begrensd aantal rondes (PRP-005)") en PRC-05 `doel` ("na een vast aantal rondes escaleren naar ROL-01 (PRP-006)") staan met `label: besloten`, maar het aantal rondes is een voorstel; Carlo vroeg om een voorstel voor het aantal (vastgelegde keuze 4) en over de vragenloop heeft hij niets besloten. `ORGANISATIE.md` §1 "Missie" is een formulering van de maker maar staat als Besloten.
- **Herstel:** label de procesnaam als besloten (vastgelegde keuze 2) en het aantal rondes als Voorstel; de missie als Aanname/Voorstel tot Carlo ze bevestigt.

### C-06 (waarschuwing): as-is en to-be niet zichtbaar gescheiden in `ORGANISATIE.md`
- **Bewijs:** §3 Rollenregister heeft geen kolom as-is/to-be (ROL-01–04 bestaan, ROL-05 niet); alleen de kolom Agent zegt "bestaat nog niet". §5 Overdrachten mengt rijen met label Feit (as-is route via `requirements-orchestration`) en Besloten (Carlo's to-be) in één tabel. Het register scheidt wel (`situatie`).
- **Herstel:** voeg een kolom Situatie toe of splits de tabellen.

### C-07 (waarschuwing): voorstellen missen onderdelen die stap 5 vraagt
- **Bewijs:** `bpmn-organisatieanalyse` stap 5: probleem (FND), wijziging, verwachte verbetering, benodigde capabilities of skills, gevolgen voor andere processen, risico's en onzekerheden. In `voorstellen.md` hebben alleen PRP-001 alle zes. Ontbrekend:
  - PRP-002: verbetering (staat in Afweging), skills
  - PRP-003: gevolgen
  - PRP-004: skills
  - PRP-005: skills, gevolgen
  - PRP-006: verbetering, skills, gevolgen, risico
  - PRP-007: skills, gevolgen
  - PRP-008: verbetering, risico
  - PRP-009: skills, gevolgen, risico
  - PRP-010: gevolgen, risico
  - PRP-011: verbetering
  - PRP-012: verbetering, risico
  - PRP-013: verbetering, gevolgen, risico
  - PRP-014: verbetering, risico
- **Gevolg:** Carlo kan de afweging bij deze voorstellen niet volledig maken, vooral de risico's. Het geldt niet als blokkerend omdat de checklist van `bpmn-modelcontrole` dit niet apart noemt.
- **Herstel:** vul de ontbrekende regels aan, of schrijf "geen" of "n.v.t. in ronde 1" erbij.

### C-08 (waarschuwing): aanbeveling (c) laat drie voorstellen onbesproken
- **Bewijs:** `ORGANISATIE.md` §6(c) noemt PRP-001–007, 009, 012, 013, 014. PRP-008 (verdeling orchestrator, tech lead, architect), PRP-010 (conventiebestand) en PRP-011 (ontwerp en huisstijl) komen in (b) voor maar niet in de aanbeveling; hun status (aanbevolen, later, niet aanbevolen) is dus onduidelijk. PRP-008 raakt de instructies van Dr. Evil en Atlas.
- **Herstel:** geef voor elk PRP een aanbeveling of zet erbij dat de keuze aan Carlo is.

### C-09 (waarschuwing): status en indiening lopen vooruit op de controle
- **Bewijs:** `register.md` meta, `ORGANISATIE.md`, `proces-catalogus.md`, `bevindingen.md` en `voorstellen.md` hebben al status "Ter goedkeuring (GK-1)" en `register.md` zegt "Alle andere documenten op WEB-19 zijn weergaven". Op WEB-19 staat nu alleen het document `plan` (documentenlijst van de issue); register en overige bestanden zijn nog geen taakdocument. Er is ook geen bewijs dat de agents zijn gevraagd de feitelijke uitspraken over hun rol te controleren (conventie "Voorstellen en uitvoering": voor Socrates doet Atlas of Dr. Evil dat).
- **Herstel:** houd de status op Concept tot deze controle is afgerond en de documenten op het issue staan. Zet het controleverzoek voor Dr. Evil en Atlas (en voor Socrates' rol: Atlas of Dr. Evil) uit via een issue.

### C-10 (waarschuwing): niet alle processen zijn nagelopen; PRC-07 en PRC-08 zonder status
- **Bewijs:** `bevindingen.md`, tabel "Analysepunten nagelopen", heeft alleen PRC-01 en PRC-02. Stap 4 vraagt alle processen uit stap 3, dus ook PRC-03 t/m PRC-06 (nieuw ontwerp, nog zonder activiteiten) en PRC-07/PRC-08 (context). `register.md` PRC-07 en PRC-08 hebben geen `status` of `versie`.
- **Herstel:** schrijf op dat PRC-03–08 bewust buiten deze analyse vallen en waarom (ronde 2, context), of loop ze na. Zet bij PRC-07/08 "context, geen model".

### C-11 (waarschuwing): UC1/UC2 versus PRC-01/PRC-02 en "sprint"/"slice" in (a)
- **Bewijs:** `ORGANISATIE.md` §6, `bevindingen.md` en `register.md` (ASM-01, ASM-03, ASM-07, OPEN-07) gebruiken de namen UC1 en UC2, zonder expliciete koppeling aan PRC-01 en PRC-02; conventies geven alleen `UC-01` (softwarewerk) en `PRC-`. De namen lijken op de reeds gebruikte `UC-`-prefix van het softwarewerk. In (a) staat "slice 1" waar Carlo's opdracht "sprint 1" zegt; dit is besluit B-01 maar is in (a) niet als wijziging gemarkeerd.
- **Herstel:** voeg in §6 (a) één regel toe: "UC1 = PRC-01, UC2 = PRC-02; 'sprint' gelezen als 'slice' (B-01)".

### C-12 (waarschuwing): skillkoppeling en skillstatus lopen vooruit op ronde 3
- **Bewijs:** FND-001, FND-004, OPEN-05 en `ORGANISATIE.md` §4 noemen de koppeling als feit (bron: API `desiredSkills`). Alleen §4 zegt dat het de configuratie betreft en dat de werking onbekend is. `bpmn-conventies`: koppeling en werking `onbekend` tot de gebruiker bevestigt. PRP-013 noemt "`quality-gates` (bestaat)", wat in het skillmodel een status met betekenis heeft (dekt de capability en is gekoppeld). `quality-gates` (SKILL.md) dekt vier poorten (requirements, ontwerp, implementatie, oplevering), niet de criteria voor "backlog gereed".
- **Herstel:** zeg in FND-004/OPEN-05 "volgens de agentconfiguratie (`desiredSkills`)"; laat skillstatussen weg tot ronde 3 of schrijf "bestaat in de skilllijst, dekking onbekend".

## Wat ik niet kon toetsen
- Werking en feitelijke koppeling van de skills (alleen `desiredSkills` gelezen) en de kwaliteit van de skills zelf.
- Of de rolbeschrijvingen van Dr. Evil, Atlas en Socrates door die agents zijn bevestigd (conventie "Voorstellen en uitvoering"); dit loopt via een issue na indiening.
- Het Mermaid-diagram in `ORGANISATIE.md` §2: gelezen, niet gerenderd.
- De letterlijke inhoud van comment `a5a789fe` op WEB-17; ik heb (a) vergeleken met de letterlijke opdracht in de beschrijving van WEB-19.
- Activiteiten, beslissingen, GOV, capabilities, skills, RACI en het artifact: nog niet aanwezig (ronde 2 t/m 4).
- De AGENTS.md van Sentinel is niet gelezen; alleen de API-gegevens zijn gebruikt voor AGT-05.
- Dat de documenten op WEB-19 komen te staan zoals in `register.md` is aangekondigd (nu alleen het document `plan`).
- Of de bestanden op schijf (`register.md` i.p.v. `register.yaml`, `proces-catalogus.md` zonder map `overzichten/`) de afgesproken plek zijn. B-04 noemt Paperclip-documenten op het issue, dus ik heb dit niet als fout gerekend.
- De stand van de AGENTS.md-bestanden is die van 2026-10-27; ze kunnen veranderen. Atlas en Socrates zijn al aangepast volgens A1, S1 en S2 uit het (nog Concept) `voorstel-instructies`; het model sluit daarop aan.

## Hercontrole (2026-10-27)

Gecontroleerd: dezelfde zes bestanden na de aanpassingen van de maker (tijdstempels 20:48 t/m 20:50). Herhaald: ID-controle over alle bestanden (36 register-ID's inclusief de nieuwe doelen D1–D3, geen dubbelen, geen ontbrekende verwijzingen, ook niet in ingekorte lijsten), laden van het YAML-blok (geldig), vergelijking register tegen overzichten, controle van de nieuwe of gewijzigde feitelijke uitspraken tegen AGENTS.md, skills en API.

| C-punt | Resultaat | Bewijs |
| --- | --- | --- |
| C-01 doelen zonder proces | opgelost | `register.md` heeft nu `doelen`: D1 → PRC-01, D2 → PRC-02, D3 → PRC-03, PRC-05, PRC-07 (met maatregelen PRP-003, 006, 007). "Uitbreidbaar" is herkend als `eisen_aan_het_model` (geen bedrijfsdoel) en gekoppeld aan de subprocessen PRC-03 t/m PRC-06, het ene eindpunt en de uitbreidingsgids. `ORGANISATIE.md` §1 en `proces-catalogus.md` (onderaan) komen overeen. Alle `gedekt_door`-ID's bestaan. |
| C-02 bronvermelding FND-015 en OPEN-05 | opgelost | FND-015: bewijs noemt nu de skills `bpmn-conventies` (Status en goedkeuring, stap 4) en `uml-use-cases` (goedkeuringsmoment stap 5), en zegt dat de AGENTS.md-bestanden niets over afkeuring zeggen; dat klopt met de bronnen. OPEN-05: toeschrijving gecorrigeerd naar "instructies van Dr. Evil en V7", met bronveld. |
| C-03 "door niets gewekt" | opgelost | FND-013 titel "De orchestrator heeft geen eigen ritme"; bewijs noemt `wakeOnDemand: true` en "alleen gewekt via een toegewezen issue" (API en AGENTS.md "Wanneer ben je actief"). `ORGANISATIE.md` §6(b) idem. Geen restant van de oude formulering. |
| C-04 register versus overzichten | opgelost | ROL-04 in het register noemt nu use cases (UC1 stap 3, FND-001), architectuurkeuze en database (FND-002), V5. PRC-03 t/m PRC-08 hebben `start`, `einde`, `roept_aan` (of `status: n.v.t.`) in het register en komen overeen met de catalogus. PRC-02 `risicos` bevat FND-014; `open` per proces staat in het register en komt overeen met de catalogus. |
| C-05 labels | opgelost | PRC-04 en PRC-05 hebben `maximum: "voorstel PRP-005"` / `"voorstel PRP-006"`; het doel van PRC-04 noemt geen aantal meer. Missie: "Besloten (samengevat uit je opdracht)". |
| C-06 as-is en to-be in `ORGANISATIE.md` | deels | §3 heeft de kolom Situatie (ROL-01–04 as-is, ROL-05 to-be): opgelost. §5 heeft geen kolom; de nieuwe regel zegt dat alleen overdrachten met ROL-05 to-be zijn en "de rest bestaat al in de instructies of in jouw workflow". Maar de rijen met label Besloten volgen Carlo's workflow, die het register als to-be modelleert (PRC-01/02), dus de regel klopt niet voor die rijen. Zie C-13. |
| C-07 onderdelen van voorstellen | opgelost | Controle op `voorstellen.md`: PRP-001 t/m PRP-014 hebben alle zes onderdelen (Probleem, Wijziging, Verbetering, Capabilities en skills, Gevolgen, Risico's); elk PRP noemt minstens één FND. |
| C-08 aanbeveling | opgelost | `ORGANISATIE.md` §6(c) heeft zes punten; alle 14 PRP's komen erin voor (PRP-008 als punt 4, PRP-010 en PRP-011 onder "Klein maar nuttig"). |
| C-09 status en indiening | geaccepteerd (bewust) | Door de opdrachtgever bevestigd: status "Ter goedkeuring" is bedoeld; de maker zet de documenten direct na deze controle op WEB-19 en vraagt Dr. Evil om de feitencheck door de agents. Op dit moment staat op de issue alleen `plan` (nog te doen, geen fout in het model). |
| C-10 niet alle processen nagelopen; status PRC-07/08 | opgelost | `bevindingen.md` opent met de uitleg dat PRC-03 t/m PRC-06 via de aanroepende processen zijn meegenomen en PRC-07/08 context zijn. PRC-07 en PRC-08: `status: "n.v.t. (context, niet gemodelleerd)"` in register en catalogus. |
| C-11 UC1/UC2 en sprint/slice | opgelost | `ORGANISATIE.md` §6(a): "UC1 = PRC-01, UC2 = PRC-02" en citaten "eerst globale opzet en eerste sprint" en "sprint 1" zoals in de opdracht, met verwijzing naar B-01. Gecontroleerd tegen de letterlijke opdracht: klopt. |
| C-12 skillkoppeling en -status | deels | PRP-013: "`quality-gates` kent nog geen poort 'backlog gereed'; ... waarschijnlijk uitbreiden (ronde 3)" klopt met SKILL.md; PRP-007 hedge ("beoordeel ik in ronde 3"); de voorstellen zeggen dat de skillstatus in ronde 3 volgt. OPEN-05 heeft een bronveld (`desiredSkills`). FND-001, FND-004 en §6 "Extra" zeggen nog "gekoppeld" zonder "volgens `desiredSkills`" (alleen `ORGANISATIE.md` §4 en OPEN-05 benoemen dat). |

### Nieuwe bevindingen

#### C-13 (waarschuwing): nieuwe doel-ID's D1–D3 buiten het ID-schema, en een onjuiste regel in §5
- **Bewijs:** `register.md` `doelen` gebruikt `D1`–`D3`; `bpmn-conventies` kent geen prefix voor doelen, en CHG-001 noemt ze niet in de lijst van ID-reeksen (en ook niet `eisen_aan_het_model`). `ORGANISATIE.md` §5 (inleiding): "de rest bestaat al in de instructies of in jouw workflow" terwijl Carlo's workflow het to-be-proces is (zie C-06).
- **Herstel:** noteer in CHG-001 dat D1–D3 zijn toegevoegd en dat het een lokale aanduiding is (of kies een schema-conforme prefix en leg die vast in de conventies via Dr. Evil); pas de §5-regel aan: "Overdrachten met label Feit bestaan al; Besloten volgt jouw workflow (to-be)".

#### C-14 (waarschuwing): PRP-008 en PRP-012 spreken elkaar tegen over de situatie zonder tech lead
- **Bewijs:** `voorstellen.md` PRP-008 Risico's: "zolang de tech lead er niet is, valt dit terug op Atlas (OPEN-07)". PRP-012: "Tot de agent bestaat, stopt PRC-01 na het globale ontwerp. OPEN-07 beslist of Atlas tijdelijk invalt." `ORGANISATIE.md` §6(b) laatste rij en OPEN-07 sluiten aan bij PRP-012 (nog open).
- **Herstel:** zet in PRP-008 "...valt dit terug op Atlas of wacht het, afhankelijk van OPEN-07".

### Niet opnieuw getoetst
- Het Mermaid-diagram is niet gerenderd (ongewijzigd).
- De feitelijke koppeling van skills (alleen `desiredSkills`) en de bevestiging van de rolbeschrijvingen door Dr. Evil, Atlas en Socrates (nog te doen via het issue, zie C-09).
- Dat de documenten op WEB-19 zijn geplaatst (nu alleen `plan`).
- CHG-001 is aangevuld in plaats van een CHG-002 toe te voegen en de versie blijft 0.1. Dat acht ik correct, want er is nog geen goedgekeurde versie en geen feedback van de gebruiker.

### Oordeel na hercontrole: kan worden ingediend

Er zijn geen blokkerende bevindingen meer. C-01 t/m C-05, C-07, C-08, C-10 en C-11 zijn opgelost; C-09 is door de opdrachtgever geaccepteerd. Open waarschuwingen: C-06 (deels), C-12 (deels), C-13 en C-14. Die kunnen bij indiening worden hersteld of naar ronde 2 worden meegenomen.

## Verwerking door de maker (na hercontrole)

C-06 (§5 kolom Situatie, zin gecorrigeerd), C-12 ("volgens `desiredSkills`" bij FND-001, FND-004 en §6), C-13 (noot over D1–D3 in register en CHG-001) en C-14 (PRP-008 verwijst naar OPEN-07) zijn verwerkt. Geen nieuwe ID's. Register laadt als geldige YAML; alle verwijzingen bestaan (script, 2026-10-27).
