# Voorstellen gewenste inrichting (PRP)

| | |
| --- | --- |
| Model | 1.0 (Goedgekeurd 2026-11-25, Carlo, B-51; conceptversie 1.0.28). Ronde 3 Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); PRP-085 goedgekeurd met voorstel CHG-066 (B-50). Alle voorstellen PRP-072 t/m PRP-085 zijn besloten; uitvoering via PRC-08 |
| Bron van waarheid | `register.yaml` |
| Datum | 2026-11-25 |
| Besluit | De kern van PRP-075, PRP-076 en PRP-078 is via ASM-80, ASM-85 en ASM-81 bevestigd (B-43). PRP-072 t/m PRP-083 zijn na ronde 3 in één keer voorgelegd (B-43, vraag 21); het besluit per voorstel staat in de tabel (B-46 en B-47, 2026-11-25). PRP-084 is nieuw, uit de verwerking van B-46. PRP-085 komt uit voorstel CHG-066 en is goedgekeurd in B-50 (alleen deel B). Een besluit is een besluit om de skills te wijzigen via PRC-08; in dit traject verandert er niets (B-39). |

**Status per voorstel.** "Goedgekeurde tekst" betekent: goedgekeurd als analyse in ronde 1 (B-43, versie 1.0.4) of via CHG-042 (B-44, versie 1.0.9). De secties "Ronde 3" zijn met de vragen van ronde 3 voorgelegd. Ronde 3 is Goedgekeurd in versie 1.0.19; daarmee zijn de secties "Ronde 3" en PRP-081 t/m PRP-084 goedgekeurd zoals in de tabel.

| PRP | Goedgekeurde tekst | Ronde 3 | Vraag | Besluit (B-46, B-47, B-48) |
| --- | --- | --- | --- | --- |
| PRP-072 | ronde 1 | sectie "Ronde 3"; deel A en deel B | 6, 7 | ja, ja |
| PRP-073 | ronde 1 | sectie "Ronde 3" (keuze van de skill) | 12 | ja |
| PRP-074 | ronde 1, aangevuld via CHG-042 | sectie "Ronde 3" (nieuwe skill, aanvulling a t/m d) | 13 | ja, met bewust restrisico (FND-103) |
| PRP-075 | ronde 1 (kern bevestigd, B-43) | sectie "Ronde 3" (ASM-104) | 3, 4 | ja, ja |
| PRP-076 | ronde 1 (kern bevestigd, B-43) | sectie "Ronde 3" (ASM-105) | 9 | ja |
| PRP-077 | ronde 1, aangepast via CHG-042 | sectie "Ronde 3" (uitwerking, ASM-106) | 8, 10 | ja, ja |
| PRP-078 | ronde 1 (kern bevestigd, B-43) | — | geen | kern bevestigd (B-43) |
| PRP-079 | ronde 1 | — | 14 | ja |
| PRP-080 | CHG-042 (B-44) | sectie "Ronde 3" (wat in r.194 vervalt) | 15 | ja; de sectie "Ronde 3" vervangt de goedgekeurde zin over "backlog-items" |
| PRP-081 | — | nieuw; deel A en deel B | 18, 19 | ja, ja |
| PRP-082 | — | nieuw; deel A en deel B | 20, 21 | ja (met aangepaste vraagtekst), ja |
| PRP-083 | — | nieuw; deel A en deel B (de herschrijving uit 1.0.17 is teruggedraaid) | 22, 23 | ja, ja (B-47: vraag 22 gewijzigd in twee kopieën) |
| PRP-084 | — | nieuw (1.0.16); deel A en deel B (1.0.17, bijgewerkt in 1.0.18) | 28, 36 | deel A: nieuwe skill (B-47, vraag 28 "Nee, nieuwe skill"); deel B ja (B-47) |
| PRP-085 | — | uit voorstel CHG-066 (1.0.25 t/m 1.0.26), in 1.0.27 | CHG-066 vraag A, B | alleen deel B (optie c): ja (B-50); deel A vervalt |

**Legenda:** PRP = voorstel · FND = bevinding · PRC = proces · ROL / AGT = rol / agent · GOV = akkoordmoment van Carlo · ASM = aanname · OPEN = open vraag · B = besluit van Carlo · UC1 / UC2 = nieuwe klant / backlog per slice · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · r. = regelnummer.

Deze voorstellen staan los van de huidige situatie (`situatie: to-be`). Er verandert niets aan agents of skills voordat Carlo heeft besloten. Uitvoeren loopt via PRC-08 (organisatie aanpassen). Wat een skill per stap precies moet kunnen, staat sinds ronde 3 in de secties "Ronde 3" en in `overzichten/activiteit-skillmatrix.md`.

## PRP-072 regie uitbreiden met backlog en slice-loop
- **Probleem:** FND-088 (regie verbiedt backlog-items), FND-089 (keten van regie past niet op 1.0).
- **Wijziging:** de keten in `regie` volgt 1.0:
  - UC1 eindigt na GOV-11 (technisch ontwerp) en GOV-17 (voorlopig sliceplan).
  - Daarna volgt per slice een lus: program design en bouwcontract, controle, GOV-06 (bouwcontract), backlog-items maken, toets door Atlas, GOV-18 (backlog).
  - Er komt een begintak voor een wens, en het ritme (PRC-07).
  - De drie regels die backlog-items verbieden (r.3, r.42, r.62), vervallen.
- **Verbetering:** de hoofdsessie mag doen wat B-30 vraagt, en de keten in de skill is gelijk aan het model.
- **Capabilities en skills:** `regie` (uitbreiden).
- **Gevolgen:** PRC-01, PRC-02 en PRC-07.
- **Risico's:** `regie` wordt groter en laadt meer context in de hoofdsessie (FND-096). Overweeg het backlogdeel als aparte skill (PRP-077).
- **Ronde 3, twee delen:** deel A is de keten van 1.0 in `regie` (de eerste drie punten van de wijziging); deel B is het vervallen van de verboden in r.3, r.42 en r.62 (het vierde punt). Elk deel heeft een eigen vraag.
- **Ronde 3:** het backlogdeel en het ritme gaan naar `backlog-regie` (PRP-077, ASM-105). In `regie` komen ook: afkeuring (PRC-05: ACT-05.4, 05.6), blokkade (PRC-06: ACT-06.4 t/m 06.7), de vraag-escalatie (ACT-04.53, 04.54), de melding aan Carlo dat hij kan ontwerpen (ACT-01.8) en het bijhouden van de stand (ASM-104). De nacontrole en de uitgang van de controle staan in PRP-081. Validatie: elke stap van PRC-03 t/m PRC-06 met R = AGT-08 heeft een regel in `regie` (`overzichten/activiteit-skillmatrix.md`).

## PRP-073 controle socrates-licht uitbreiden
- **Probleem:** FND-090 (socrates-licht dekt brieven niet).
- **Wijziging:** de controle van AGT-09 (Socrates-licht) dekt het hele analysepakket: ook de visie, de paginalijst en de paginabrieven. Daarbij hoort ook de afstemming van de brieven op de ontwerp-export, die meegaat in GOV-15 (ASM-86 – afgestemde brieven in de richting).
- **Verbetering:** elk document onder GOV-10 (analysepakket) en elke afgestemde brief onder GOV-15 heeft een tweede lezer (B-34).
- **Capabilities en skills:** `requirements-validation` (uitbreiden) of een controlelijst bij `paginalijst-en-paginabrieven`; de keuze volgt in ronde 3. Geraakt: `agents/socrates/agents/socrates-licht.md` r.3 en r.19.
- **Gevolgen:** PRC-01, PRC-02 (wens-tak).
- **Risico's:** een langere controle kost meer tokens; Carlo merkt er niets van.
- **Ronde 3, keuze:** `requirements-validation` uitbreiden, niet een controlelijst in `paginalijst-en-paginabrieven`. Reden: die skill is al voorgeladen bij AGT-09 (`socrates-licht.md` r.9), en dan staat de hele controle op één plek. Wat erbij moet: per nu-pagina een brief met ontwerpniveau; elke brief verwijst naar use cases; de visie noemt het projecttype; na het afstemmen een lijst van verschillen met de ontwerp-export. Validatie: elk document onder GOV-10 en elke afgestemde brief onder GOV-15 heeft een criterium in de skill.

## PRP-074 controle atlas-licht uitbreiden
- **Probleem:** FND-091 (atlas-licht dekt ontwerp en plan niet), FND-022 (opdeling, plan en taken zonder controle), FND-044 (intern ontwerp zonder tweede lezer).
- **Wijziging:** de controle van AGT-10 (Atlas-licht) krijgt criteria voor:
  - het richting-ADR met het profiel (vóór GOV-15);
  - het technisch ontwerp bij P1 (`architect-cms-configuratie`), P2 (`architect-componentontwerp`) en P3, met het domeinmodel (vóór GOV-11);
  - het voorlopige sliceplan, met elk acceptatiecriterium in precies één slice en de technische volgorde (vóór GOV-17);
  - het ontwerp per slice (vóór GOV-06);
  - het implementatieplan met werkpakketten: dekking, afhankelijkheden, verwijzing naar brief en paginatype, en een ingevulde sectie Breaking changes (`architect-implementation-plan` r.61, r.196) (vóór GOV-06);
  - het bouwcontract (vóór GOV-06): elk veld en elke operatie is herleidbaar (`x-bron`, `architect-api-contracts` r.49) en het contract sluit aan op het ontwerp. Bij P1 is het contract een tabel. De geldigheid en de revisie van het OpenAPI-bestand blijven bij Atlas (`architect-api-contracts` r.63);
  - het conventiebestand, met een lichte controle: past het bij de ADR's en het design systeem? Hiervoor moet `architect-conventions` r.36 ("De inhoud heeft geen aparte controleur") worden aangepast (CHG-042 deel B, goedgekeurd in B-44).

  Het sliceplan wordt dus vóór GOV-17 gecontroleerd en het program design vóór GOV-06. De backlog-items vallen hier niet onder: hun tweede lezer is de toets door Atlas (ASM-83 – Atlas toetst backlog-items).
- **Verbetering:** alles wat Atlas ter goedkeuring voorlegt, heeft een tweede lezer, zoals B-31 en B-34 vragen.
- **Capabilities en skills:** een controlelijst voor Atlas-licht; welke skill dat wordt, volgt in ronde 3. Geraakt: `agents/atlas/agents/atlas-licht.md` r.3 en r.22, `architect-vertical-slices` r.49 en `architect-api-contracts` r.63.
- **Door ASM-88 (Atlas genereert diagrammen in de keten, bevestigd in B-43)** raakt dit voorstel ook:
  - `atlas-licht.md` r.21: wordt "uit een goedgekeurd model-JSON";
  - `atlas-licht.md` r.36: atlas-licht lost een scriptfout nu zelf op in het JSON. Dat is werk van de maker; een fix in het JSON loopt via Atlas (`documenten-bijwerken`). Dit is het echte argument voor ASM-88;
  - `atlas-licht.md` r.3 (de beschrijving) en `regie` r.17 (de rij van atlas-licht in de agenttabel): in lijn brengen met r.21.
- **Gevolgen:** PRC-01 (GOV-15, GOV-11, GOV-17), PRC-02 (GOV-06).
- **Risico's:** Atlas-licht draait op een lichter model. Of dat genoeg is voor een inhoudelijke controle van een ontwerp, blijkt pas in de praktijk (OPEN-11).
- **Ronde 3, keuze:** een nieuwe skill `ontwerp-controle` (werknaam) in de plugin atlas, voorgeladen bij atlas-licht. Reden: atlas-licht heeft nu alleen `kort` voorgeladen (`atlas-licht.md` r.8), en de criteria staan alleen in r.22 van de definitie. Een skill houdt de definitie kort en is ook bruikbaar voor de nacontrole (PRP-081).
  - **Input:** het document of pakket van Atlas, de open vragen uit zijn eindbericht, de goedgekeurde eisen en het geldende ontwerp.
  - **Output:** "volledig gecontroleerd", of bevindingen per document en element.
  - **Validatie:** elk criterium hierboven heeft een check; de controleur wijzigt niets; bij een ontwerpkeuze meldt hij "start atlas".
  - **Aanvulling na de feitencontrole van Atlas (1.0.13):** de controlelijst dekt ook
    - (a) de bestaande criteria uit `atlas-licht.md` r.22: elk element en elke relatie heeft een beschrijving, niets verwijst naar iets wat niet bestaat, klassen, sequenties en database sluiten aan, alles is herleidbaar tot FR of UC, de open vragen dekken alle zelf ingevulde keuzes, en er zijn geen Nederlandse identifiers in de modellen;
    - (b) de beeldcontrole van de diagrammen (`uml-class-diagram` r.47; `ontwerppagina` r.57 en r.70, punt 9);
    - (c) een wijzigingsverzoek van Atlas vóór GOV-12: wat verandert, welke modellen en ID's, breaking changes en gevolgen voor de scope (`architect-clarification` r.20, r.27), en het doorvoeren na akkoord (`documenten-bijwerken` r.26);
    - (d) het ADR bij een wijziging van het globale ontwerp (ACT-02.55);
    - (e) aangevuld in 1.0.17 (nacontrole B2, voor CHG-056): een lichte controle van de kwaliteitslat en de regelbestanden. De grenzen in CONSTRAINTS.md komen uit de goedgekeurde NFR's, of zonder NFR uit de vloer van de skill; CLAUDE.md en AGENTS.md spreken het conventiebestand niet tegen; elke afspraak staat op één plek (vraag 31); en CLAUDE.md verwijst met een leesmoment, zonder imports (vraag 32). Deze aanvulling volgt uit B-46 (vraag 16 en 17) en gaat mee met vraag 26.
  - **Besluit (B-46, vraag 13):** ja, alleen atlas-licht. **Restrisico, bewust gekozen:** atlas-licht beoordeelt bij de architectuurkeuze en het bouwcontract niet of de keuze de beste is; dat doet alleen Carlo (FND-103). Een verse Atlas als extra tweede lezer daar is afgewezen.

## PRP-075 stand van de keten in de klantrepo
- **Probleem:** FND-092 (stand en rondes niet vast bewaard), FND-093 (akkoord zonder eigen bewijs), FND-096 (hoofdsessie als enig knooppunt).
- **Wijziging:** de stand van de keten staat in de klantrepo:
  - per poort de datum van akkoord en de letterlijke vragen en antwoorden;
  - per document het aantal afkeuringen;
  - per vragenloop de rondes zonder voortgang;
  - de lopende doorloop van PRC-02.

  Een hervatte of nieuwe hoofdsessie leest dit eerst (ASM-80). Atlas houdt nu al `STATUS.md` bij (atlas.md r.75). Of de stand daarin komt of in een eigen bestand van de hoofdsessie, volgt in ronde 3 (OPEN-37).
- **Verbetering:** werk kan na een herstart of compactie verder, de rondes en afkeuringen gaan niet verloren, en een akkoord is achteraf aan te tonen.
- **Capabilities en skills:** `regie` (uitbreiden); `vragen-en-akkoordrondes` (plek van de rondes en afkeuringen).
- **Gevolgen:** alle processen.
- **Risico's:** twee schrijvers in één statusbestand (Atlas en de hoofdsessie) kunnen botsen. Ronde 3 kiest één schrijver per bestand of per sectie.
- **Ronde 3, uitwerking (ASM-104):** één bestand `docs/stand-van-de-keten.md`, dat alleen de hoofdsessie schrijft. Per akkoord staan daarin de datum, de letterlijke vragen en antwoorden en de versie van het document; dat vervangt de kaart-ID als bewijs (FND-093). Atlas houdt `STATUS.md` voor zijn eigen documenten. De vorm per sectie staat in `communicatiemodel.md` §3.

## PRP-076 cron herstellen en inhaalcheck bij openen
- **Probleem:** FND-013 (orchestrator zonder eigen ritme).
- **Wijziging:** naast de cron-taak (ASM-85 – cron in de hoofdsessie) doet de hoofdsessie, volgens `regie`, bij elke nieuwe of hervatte sessie eerst twee dingen:
  1. Ze controleert of de cron-taken van het ritme er zijn. Ontbreken ze, dan zet ze ze opnieuw aan en meldt ze dat. Geplande taken komen alleen terug bij `--resume` of `--continue` (feiten §5), en bij `--resume` niet als ze verlopen of al voorbij zijn (feiten §4). Of een herhalende cron-taak verloopt, is open (OPEN-38 – verloopt een cron-taak?).
  2. Ze doet de flowcheck en meldt wat op Carlo wacht, ook als een ritmemoment is gemist.

  Dit vraagt geen hook: het is een instructie in de skill.
- **Verbetering:** een gemist moment gaat niet verloren, ook zonder werk in de cloud, en een nieuwe sessie zonder cron valt op.
- **Capabilities en skills:** `regie` (uitbreiden), of de skill uit PRP-077.
- **Gevolgen:** PRC-07.
- **Risico's:** werkt alleen als Carlo de hoofdsessie van het project opent; zonder sessie gebeurt er niets (feiten §4, afleiding 3).
- **Ronde 3:** dit komt in `backlog-regie` (ASM-105), samen met het weekmoment en de dagstart. De melding van een gemist weekmoment volgt B-44 (antwoord 10): alleen melden, Carlo beslist (G-07.3).

## PRP-077 skill voor backlog-items en controles
- **Probleem:** FND-094 (taken van Dr. Evil zonder skill), FND-088 (regie verbiedt backlog-items).
- **Wijziging:** een tool-neutrale skill voor de hoofdsessie. Die doet het volgende:
  - werkpakketten omzetten in backlog-items: per taak één bestand in `docs/backlog/todo/`, en per slice een epic-bestand (B-44; vorm volgens ASM-101 en ASM-102);
  - de vaste controles uitvoeren: de revisie van het OpenAPI-bestand is gelijk aan die in het goedgekeurde contract, en elk werkpakket is gedekt;
  - "backlog gereed" controleren;
  - de flowcheck doen: de taakbestanden van de lopende slice tellen die niet in `docs/backlog/done/` staan (ASM-89);
  - de statusmappen todo, in-progress en done aanmaken als ze ontbreken. Verplaatsen naar in-progress en done doet Carlo (ASM-89, ASM-100).

  Bron: de Paperclip-skills `backlog-management`, `quality-gates`, `delivery-management` en `weekmoment` in `skills/`, zonder Paperclip-resten.
- **Verbetering:** de taken die van Dr. Evil overgaan (B-30), krijgen een vaste werkwijze, en `regie` blijft klein.
- **Capabilities en skills:** nieuwe skill (werknaam `backlog-regie`); ronde 3 legt input, output en validatie vast.
- **Gevolgen:** PRC-02, PRC-07; de afbouwlijst van Paperclip (ronde 3).
- **Risico's:** of een skill uit de ene plugin bruikbaar is voor een agent uit de andere, is niet vastgesteld (OPEN-33). De hoofdsessie zelf is geen plugin-agent.
- **Ronde 3, uitwerking:**
  - **Plek:** plugin socrates, naast `regie` (ASM-106). Het ritme komt ook in deze skill (ASM-105).
  - **Ondersteunt:** ACT-01.29, ACT-02.1, ACT-02.11, ACT-02.17, ACT-02.53, ACT-02.54 en ACT-07.1 t/m ACT-07.4 (CAP-13, CAP-14, CAP-20, CAP-37, CAP-38).
  - **Input:** het goedgekeurde bouwcontract en de werkpakketten, het sliceplan, de uitbreidingslijst, `docs/backlog/` en de stand.
  - **Output:** taak- en epicbestanden in `docs/backlog/todo/` (ASM-101, ASM-102), met in de kop van elke taak verwijzingen naar CLAUDE.md, AGENTS.md, het conventiebestand en CONSTRAINTS.md (B-48, vraag 37); de uitkomst van de vaste controles en van "backlog gereed"; de bijgewerkte uitbreidingslijst; de telling voor de dagstart; de melding aan Carlo van wat op hem wacht; de cron-taak van het weekmoment.
  - **Validatie:** elk werkpakket is gedekt door taakbestanden met de velden van ASM-102; het epic noemt alle taken; de skill verplaatst niets naar in-progress of done (ASM-100); de telling volgt ASM-89; geen keuze namens Carlo.
  - **Wat uit de Paperclip-skills overgaat, en wat wegvalt:** zie `afbouwlijst-paperclip.md` stap C1.

## PRP-080 toets van backlog-items standaard
Toegevoegd met CHG-042 deel B (goedgekeurd in B-44).
- **Probleem:** FND-098 (toets van backlog-items alleen op verzoek).
- **Wijziging** (goedgekeurde tekst; zie de sectie "Ronde 3" voor r.194):
  - In `atlas.md` r.44 en `architect-implementation-plan` r.194 vervalt "als de aanroeper dat vraagt"; "taken" of "epics en taken" wordt "backlog-items".
  - Atlas toetst de backlog-items standaard vóór GOV-18 (akkoord backlog per slice). De uitkomst is "geen opmerkingen" of opmerkingen per werkpakket of item.
  - Op technische punten heeft Atlas het laatste woord. Na 2 rondes, of bij een conflict over niet-technische punten, beslist Carlo (ASM-83, B-44 vraag 17).
- **Verbetering:** de skills volgen ASM-83, en de toets wordt niet vergeten.
- **Capabilities en skills:** `atlas.md` (instructie), `architect-implementation-plan`, `regie` (de hoofdsessie vraagt de toets standaard).
- **Gevolgen:** PRC-02, PRC-03.
- **Risico's:** meer werk voor Atlas (FND-018).
- **Ronde 3 (1.0.13, feitencontrole Atlas):** in r.194 vervalt alleen "(als de aanroeper dat vraagt)". "Epics en taken" blijft, want in 1.0 zijn er taak- en epicbestanden (B-44, B-45). Hetzelfde geldt voor `atlas.md` r.44: "Taken toetsen" en "frontendtaak" kloppen in 1.0. De toets leest die bestanden standaard in `docs/backlog/`, of op de plek die het project voorschrijft (atlas.md r.31).
  - **Vervangt** het deel van de goedgekeurde wijziging hierboven dat zegt: '"taken" of "epics en taken" wordt "backlog-items"'. Dat vervangen geldt pas als Carlo ja zegt op vraag 15; bij nee blijft de goedgekeurde tekst (CHG-053).

## PRP-078 juridische keuzes in de analyse
- **Probleem:** FND-095 (juridische keuzes zonder plek).
- **Wijziging:** Socrates legt juridische keuzes vast als eisen en bedrijfsregels in het analysepakket, elk met een vraag aan Carlo. Denk aan privacy, bewaartermijnen, voorwaarden en verwerkersafspraken. Carlo neemt de keuze (ASM-81). Een juridisch advies valt buiten de agents.
- **Verbetering:** de juridische keuzes uit de opdracht van UC1 hebben een eigenaar, een document en een akkoord (GOV-10).
- **Capabilities en skills:** `requirements-analysis` (uitbreiden met een vaste vraag naar juridische keuzes).
- **Gevolgen:** PRC-01, PRC-02 (wens-tak).
- **Risico's:** de agents zijn geen juristen. De vragen maken de keuze zichtbaar, maar geven geen juridische zekerheid.

## PRP-079 slice 1 alleen in het sliceplan-akkoord
- **Probleem:** FND-097 (slice 1 twee keer goedgekeurd).
- **Wijziging:**
  - `architect-vertical-slices` krijgt een akkoordmoment GOV-17 (voorlopig sliceplan): Atlas legt de keuzes in de indeling voor als open vragen, met de inhoud van slice 1 en de volgorde. Nu staat er bij het grill-moment "Geen" (r.30), en er is geen akkoord.
  - Het criterium van r.37 (de volgorde van de epics past bij de prioriteit) gaat van het akkoord op het bouwcontract naar GOV-17.
  - In `architect-vertical-slices` (r.19, r.27) en `architect-api-contracts` (r.41) vervalt dat de inhoud van slice 1 en de volgorde van de epics meegaan in het akkoord op het bouwcontract. GOV-06 (bouwcontract per slice) gaat dan voor elke slice alleen over het contract, met ontwerp per slice en plan als een voorwaarde geldt.
  - `atlas.md` r.40 (opdelen in slices) en r.73 (bij het eerste ontwerp alleen de akkoorden op richting en technisch ontwerp) noemen GOV-17.
  - Wijzigt de indeling later, bijvoorbeeld bij een wens, dan gaat het bijgewerkte sliceplan opnieuw langs GOV-17.
- **Verbetering:** Carlo keurt de inhoud van slice 1 één keer goed, het sliceplan krijgt echt een akkoordmoment, en de skills volgen B-32 en B-35.
- **Capabilities en skills:** `architect-vertical-slices` en `architect-api-contracts` (uitbreiden); de instructies van Atlas (`atlas.md` r.40, r.73).
- **Gevolgen:** PRC-01 (GOV-17), PRC-02 (GOV-06).
- **Risico's:** zolang de skills niet zijn aangepast, stelt Atlas geen vragen voor GOV-17, en vraagt hij bij slice 1 opnieuw om akkoord op de inhoud.

## PRP-081 nacontrole en uitgang in de akkoordskills
Nieuw in ronde 3 (Concept, 1.0.12; in 1.0.13 gesplitst in deel A en deel B).
- **Probleem:** FND-099 (nacontrole en uitgang niet in de skills).
- **Wijziging, deel A (nacontrole, vraag 18):**
  - `vragen-en-akkoordrondes` (beide kopieën, PRP-083): na het verwerken van een antwoord dat afwijkt van het advies volgt een nacontrole door de controleur van de poort, en pas daarna de status Goedgekeurd (B-44, antwoord 3);
  - `regie`: de nacontrole wordt een stap (ACT-03.12);
  - de controleskills (`requirements-validation`, `ontwerp-controle`, en de toets in `architect-implementation-plan`) krijgen een korte nacontrole: is elk afwijkend antwoord goed verwerkt, en is er geen nieuwe keuze over het hoofd gezien?
- **Wijziging, deel B (uitgang en tellingen, vraag 19):**
  - `vragen-en-akkoordrondes`: de controle vóór het akkoord en de nacontrole hebben dezelfde uitgang: na 2 rondes achter elkaar zonder voortgang beslist Carlo (ASM-90); de tellingen staan in de stand van de keten (ASM-104);
  - `regie`: r.48 krijgt de uitgang van ASM-90 in plaats van "herhaal tot volledig gecontroleerd"; na een besluit van Carlo volgt de route van ACT-03.11.
- **Volgt uit vraag 11 (geen eigen keuze; alleen als Carlo daar ja zegt):** `vragen-en-akkoordrondes` werkwijze 3 noemt de hoofdsessie als vrager bij een vraag over het plan van Atlas, en `regie` of `backlog-regie` beschrijft die route (voorstel CHG-052).
- **Verbetering:** de skills doen wat Carlo in ronde 2 besloot, en een controle die vastloopt, komt bij hem.
- **Capabilities en skills:** CAP-23, CAP-35; `vragen-en-akkoordrondes`, `regie`, `requirements-validation` (uitbreiden), `ontwerp-controle` (nieuw, PRP-074), `architect-implementation-plan` (uitbreiden).
- **Validatie:** ACT-03.10 t/m ACT-03.14 en G-03.3, G-03.6 en G-03.7 hebben elk een regel in een skill.
- **Gevolgen:** PRC-03, PRC-04, PRC-05.
- **Risico's:** een extra controleronde bij elk afwijkend antwoord kost tijd en tokens.

## PRP-082 skills van Atlas gelijktrekken met het model
Nieuw in ronde 3 (Concept, 1.0.12; in 1.0.13 herzien na de feitencontrole van Atlas en gesplitst in deel A en deel B).
- **Probleem:** FND-101 (skills van Atlas botsen met het model), FND-102 (Paperclip-resten in de skills).
- **Wijziging, deel A (tegenstrijdige regels, vraag 20):**
  - `architect-implementation-plan`:
    - r.3 (beschrijving) noemt werkpakketten in plaats van taken, en als trigger een opdracht van de aanroeper per slice (r.191) in plaats van alleen een vraag van een developer;
    - sectie 7 (r.149-157) heet "Volgorde en werkpakketten";
    - dit gaat alleen over wat Atlas zelf levert (het plan heeft werkpakketten, geen taken; r.168, r.191, r.196). Het woord "taken" voor de taakbestanden in de backlog blijft juist (PRP-080, vraag 15). De vraagtekst van vraag 20 noemde daarom niet "taken" als voorbeeld (B-46);
    - r.192 noemt het bouwcontract niet meer als input voor het ontwerp per slice, want het contract volgt erop (ACT-02.7 → ACT-02.8).
  - `uml-sequence-diagrams` r.12: "het domeinmodel" in plaats van "een goedgekeurd domeinmodel", want het domeinmodel is intern (atlas.md r.72).
  - `uml-class-diagram` r.12: "het domeinmodel en de sequentiediagrammen" in plaats van "goedgekeurde", om dezelfde reden.
  - `architect-architecture-choice` r.57: bij de eerste architectuurkeuze blijven de drie voorwaarden voor een ADR gelden; bij een wijziging van het globale ontwerp komt er altijd een ADR (atlas.md r.48). Zo komt er bij de eerste keuze geen ADR per kleine beslissing.
- **Wijziging, deel B (Paperclip-pad, vraag 21):**
  - `uml-class-diagram/scripts/render-png.mjs` r.9 en r.28: het pad naar de Paperclip-installatie vervalt; sharp komt uit `SHARP_PATH` of uit `node_modules` van de werkmap.
- **Niet meer in dit voorstel (1.0.13):** `architect-implementation-plan` r.194 (alleen "als de aanroeper dat vraagt" vervalt, dat is PRP-080; het pad is "standaard `docs/backlog/`, of de plek die het project voorschrijft", atlas.md r.31); r.197 en `architect-vertical-slices` r.49 kloppen in 1.0. Het voorbeeld in `bpmn-eindontwerp/voorbeeld-artifact.html` (plugin socrates) volgt na ronde 4 (afbouwlijst C3).
- **Verbetering:** Atlas leest geen tegenstrijdige regels meer, en de scripts werken zonder Paperclip.
- **Capabilities en skills:** CAP-05, CAP-07, CAP-08, CAP-12; de genoemde skills (uitbreiden).
- **Validatie:** na de wijziging geeft een grep op "goedgekeurd domeinmodel", "taken voor de developers" en "Paperclip" in `agents/atlas/skills/` en `agents/atlas/agents/` geen treffers meer. `agents/atlas/README.md` r.19 is een bewuste, historische verwijzing en valt erbuiten.
- **Gevolgen:** PRC-01, PRC-02.
- **Risico's:** zonder `SHARP_PATH` en zonder sharp in de werkmap kan de beeldcontrole van de diagrammen niet automatisch (render-png.mjs r.31 meldt dat al).

## PRP-083 gedeelde skills gelijk houden
Nieuw in ronde 3 (Concept, 1.0.12; in 1.0.13 gesplitst in deel A en deel B). In 1.0.17 even herschreven tot "gedeelde skills op één plek"; in 1.0.18 teruggedraaid na het gewijzigde besluit (B-47).
- **Probleem:** FND-100 (gedeelde skills in twee kopieën).
- **Besluit:** Carlo antwoordde eerst "Nee, één plek" (B-46), en wijzigde dat in: "ik denk dat het toch beter is om de gedeelde skills als twee kopieen op te slaan" (B-47). Deel A en deel B zijn daarmee aangenomen; deel B via zijn antwoord op vraag 23 ("Ja, samen"). ASM-114 en ASM-115 (één plek, proef) zijn vervallen.
- **Wijziging, deel A (twee kopieën houden, vraag 22):** de kopieën van `kort`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken` en `overdracht` in de plugins socrates en atlas blijven bestaan. OPEN-33 blijft open, maar is geen voorwaarde meer.
- **Wijziging, deel B (samen bijwerken, vraag 23):** bij elke wijziging van een gedeelde skill wijzigt de uitvoerder van PRC-08 beide kopieën in dezelfde wijziging, en controleert hij dat ze gelijk zijn.
- **Verbetering:** beide agents werken met dezelfde regels voor vragen, akkoorden en profielen.
- **Capabilities en skills:** de vijf gedeelde skills; PRC-08.
- **Validatie:** na elke wijziging zijn beide kopieën gelijk.
- **Gevolgen:** PRC-08; alle processen die de gedeelde skills gebruiken.
- **Risico's:** een vergeten kopie geeft verschillend gedrag bij Socrates en Atlas.

## PRP-084 kwaliteitslat en regelbestanden bij Atlas
Nieuw in ronde 3 (Concept, 1.0.16), uit de verwerking van B-46 (vraag 16 en 17). In 1.0.18 bijgewerkt na B-47 (vraag 28: "Nee, nieuwe skill"; vraag 36: "Ja, ook gebruiken").
- **Probleem:** FND-104 (regelbestanden buiten de grens van Atlas). Carlo besloot dat Atlas in slice 1 ook CONSTRAINTS.md, CLAUDE.md en AGENTS.md maakt en ze daarna bijwerkt; de stappen staan in CHG-056 (goedgekeurd in B-47).
- **Wijziging, deel A (nieuwe skill en de definitie, vraag 28):**
  - **Nieuwe skill** `regelbestanden-en-kwaliteitslat` (werknaam) in de plugin atlas: CONSTRAINTS.md met de kwaliteitslat en de definition of done (`constraint-driven-development`: de meetbare grenzen uit de goedgekeurde NFR's, en zonder NFR de vloer van de skill; atlas.md r.61); CLAUDE.md kort, met de commands, de indeling van docs/ (ASM-119) en een verwijzing met leesmoment naar AGENTS.md, het conventiebestand en CONSTRAINTS.md, zonder imports (ASM-116, ASM-117); AGENTS.md met werkregels voor de bouw (ASM-118). Bestaan de bestanden al, dan vult Atlas aan; een botsing met een NFR is een vraag aan Carlo (ASM-113). Ook voor het bijwerken in ACT-02.6 en ACT-02.7 (ASM-120). Input, output en validatie: `register.yaml`, skill `regelbestanden-en-kwaliteitslat`.
  - **`architect-conventions`** (feitencontrole Atlas op 1.0.18): r.3 en r.11 (de definition of done wordt een verwijzing naar CONSTRAINTS.md; ASM-116); r.14 (trigger: ook bijwerken in ACT-02.6 en 02.7 bij een nieuwe NFR of afspraak); r.17 (input met de goedgekeurde NFR's); r.22-28 (een verwijsstap naar CONSTRAINTS.md); r.33 (ook CONSTRAINTS.md en AGENTS.md niet herhalen); r.36 (zoals PRP-074); r.38-39 (de nieuwe skill noemen). Ongewijzigd: r.6, r.20 en r.31. Volgorde: eerst `architect-conventions`, dan de nieuwe skill.
  - **`atlas.md`**: r.30 (regels in CLAUDE.md en AGENTS.md die alleen voor de bouw gelden, zoals de leesmomenten, volgt Atlas in het voorwerk niet), r.31 (documentlocaties), r.42 (conventiebestand in slice 1, nu met de nieuwe skill) en r.101 (Grenzen: Atlas mag ook CLAUDE.md, AGENTS.md en CONSTRAINTS.md in de root schrijven). R.101 en r.31 veranderen hoe dan ook (OPEN-48, beantwoord door Atlas). R.61 hoeft niet te veranderen.
  - **Commands** in CLAUDE.md zijn voorlopig, afgeleid uit de gekozen techniek; de eerste bouwsessie mag ze corrigeren met een melding aan Atlas (ASM-121, B-48).
- **Wijziging, deel B (`context-engineering`, vraag 36, aangenomen):** `context-engineering` (agent-skills) helpt bij CLAUDE.md en AGENTS.md, naast de nieuwe skill. `atlas.md` noemt hem onder "Regels bij algemene skills": alleen voor de regelbestanden, geen interview. Status in een klantsessie: onbekend (OPEN-33).
- **Verbetering:** de skills en de definitie volgen het besluit van Carlo, en de bouwsessies krijgen hun regelbestanden.
- **Capabilities en skills:** CAP-22; `regelbestanden-en-kwaliteitslat` (nieuw), `architect-conventions` (uitbreiden), `constraint-driven-development` en `context-engineering` (beide onbekend, OPEN-33).
- **Validatie:** na de wijziging bestaat de nieuwe skill, noemt `atlas.md` hem en de drie bestanden, staat er niets meer in de grenzen van Atlas dat het schrijven ervan verbiedt, en staat de definition of done alleen in CONSTRAINTS.md.
- **Gevolgen:** PRC-02 (ACT-02.57, ACT-02.54, ACT-02.6, ACT-02.7).
- **Risico's:** Atlas schrijft regels die zijn eigen werk en dat van de bouwsessies sturen; een fout erin werkt door in de bouw. De lichte controle door atlas-licht (PRP-074 punt e) is de enige tweede lezer. Omdat CLAUDE.md alleen verwijst, lezen de bouwsessies de andere bestanden alleen als ze het leesmoment volgen; AGENTS.md wordt bij een aanwezige CLAUDE.md niet vanzelf gelezen (feiten §8). Dat subagents dezelfde CLAUDE.md krijgen, komt uit een samenvatting; voor plugin-agents is het niet gevonden (voorbehoud §8). Zie FND-105 en ASM-117. Het risico wordt kleiner doordat elke taak ook naar de bestanden verwijst (B-48).

## PRP-085 vaste sessie Socrates en Atlas in de skills
Uit voorstel CHG-066 (`voorstel-model-chg066.md`), goedgekeurd in B-50 (vraag A "Ja, via hoofdsessie", vraag B "Ja, direct"). Alleen deel B (optie c); deel A (optie a, elkaar zelf starten) vervalt.
- **Probleem:** Carlo wil zien en merken dat Socrates en Atlas met elkaar praten, en midden in hun sessie zelf vragen krijgen als er een productkeuze speelt (B-50).
- **Wijziging:**
  - `vragen-en-akkoordrondes` (beide kopieën, samen bijwerken, PRP-083): werkwijze 4: stuit een agent in een lopende sessie op een productkeuze die nog niets goedgekeurds verandert, dan stelt hij die als vraag aan de gebruiker in zijn eindbericht, en de sessie gaat na het antwoord verder; geen productvraag via GOV-12 (ASM-123). Werkwijze 6: bij een sessie tussen Socrates en Atlas werkt de vrager het contextverslag na elke ronde bij (ASM-124). Werkwijze 8 (toets): dezelfde sessie, met hetzelfde lopende verslag.
  - `architect-use-case-review` (feitencontrole Atlas op 1.0.27): r.16 ("Elke toetsronde is een nieuwe opdracht"): het lopende verslag komt erbij als input; r.22 (contextverslag): één lopend verslag per sessie (ASM-124); r.29: binnen een toetsronde hervat de aanroeper Atlas met de antwoorden van Socrates, en Atlas beoordeelt ze en werkt het verslag bij. "Je wijzigt niets" geldt niet voor het verslag.
  - `regie`: een vraag aan de gebruiker uit een lopende sessie direct stellen en de agent letterlijk hervatten; per ronde de stand bijwerken; een vraag aan de gebruiker telt niet als ronde.
  - De agentdefinities veranderen niet; `Agent` komt niet in `tools` (B-38, B-50).
- **Verbetering:** de sessie tussen Socrates en Atlas is één geheel met één verslag, en een productkeuze komt direct bij Carlo.
- **Capabilities en skills:** CAP-17, CAP-23, CAP-36; `vragen-en-akkoordrondes` en `regie` (uitbreiden), `architect-use-case-review` (uitbreiden).
- **Validatie:** ACT-04.3, ACT-04.5, ACT-04.55, G-04.1 en G-04.53 (B-50) hebben elk een regel in een skill.
- **Gevolgen:** PRC-04; PRC-01 en PRC-02 (de toets).
- **Risico's:** een productvraag zonder controle vooraf kan onvolledig zijn; de controle vóór het latere akkoord vangt dat op. Per ronde extra stappen en tokens in de hoofdsessie.
