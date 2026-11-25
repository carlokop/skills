# Modelcontrole pagina 0.5 (WEB-19, CHG-020): eindontwerp op model 0.11

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`, checks voor het eindontwerp; eisen aan de pagina uit `bpmn-eindontwerp`), niet de maker |
| Scope | `eindontwerp/organisatiemodel-0.5.html` (882 kB; byte-gelijk aan `eindontwerp/organisatiemodel.html`), gebouwd met `eindontwerp/build/` (`build.js`, `layout.js`, `template.html`). De vorige pagina `organisatiemodel-0.4.html` (model 0.10) en `build-0.4-backup/` zijn ongewijzigd (laatste wijziging 16:53, voor de bouw van 0.5). |
| Vergeleken met | register 0.11 `v11/over/api/register.md` (YAML-blok; byte-gelijk aan `werk/register.md`; 82 activiteiten, 20 beslissingen, 15 GOV, 39 skills, 34 aannames, 15 open vragen); `api/prc-01.md` en `api/prc-02.md` (tabellen en Mermaid), `prc-03`, de weergaven in `werk/`, `SPEC-CHG-020.md`, `api/v011-voorstel.md` (via de spec), `register-gaten-0-11.md` (bekende gaten, niet als fout van de pagina geteld) |
| Methode | Eigen scripts in `/tmp` (jsdom, js-yaml): pagina geladen en `DATA` stuk voor stuk vergeleken met het register (activiteiten: naam, rol, input, output, label, situatie, proces; beslissingen en GOV: alle tekstvelden); elke ACT, G en GOV in de swimlanes geteld; de zichtbare tekst (540 kB) doorzocht op SKL-nummers, ASM-19, "voorstel", "ter bevestiging", OPEN-10, interne verwijzingen; een verse build in een kopie (`/tmp/vorg`, `v11` gekoppeld) is **byte-voor-byte gelijk** aan de aangeleverde pagina, dus de pagina is actueel ten opzichte van de bronnen van 21:29 (laatste weergave); `check.js` zelf gedraaid (1076 controles, 0 fouten); `klikproef.js` volledig zelf gedraaid (223 routecombinaties, 13637 stappen, 2191 loops, 15708 acties, 13651 SVG-controles, 0 fouten, 0 console-meldingen); `render.js` gedraaid (31 PNG's) en PRC-01 (standaard en Socrates), PRC-02 (standaard, weekmoment, tweede start, minder dan 6 taken) en het landschap bekeken; kop van PRC-01 apart op groot formaat gerenderd; toegankelijkheid gemeten |
| Wijzigingen door controleur | geen aan de pagina, `build/`, `werk/` of `api/`. Eigen scripts en renders staan alleen in `/tmp`. Er is niets geüpload en geen comment geplaatst. |

## Oordeel

**Kan worden ingediend.**

Er zijn geen blokkerende bevindingen. De pagina geeft register 0.11 juist en volledig weer: alle 82 activiteiten, 20 beslissingen en 15 goedkeuringen komen overeen met het register (geen enkel verschil in de diepe vergelijking), elk ACT- en G-ID staat precies één keer in de swimlanes, PRC-02 heeft drie starts en G-02.8 en volgt `api/prc-02.md`, PRC-01 heeft de nieuwe namen van ACT-01.2 en ACT-01.51, UC1 toont vier akkoorden, de tellingen 82/20/15 en 21/27/25/9 kloppen, de labels en statusteksten kloppen. Er zijn drie waarschuwingen (P-01 t/m P-03) en negen opmerkingen (P-04 t/m P-12). P-01 is een kleine tekstfout in het bouwscript die ik vóór indiening zou herstellen, omdat Carlo hem leest in het paneel van de start "Verzoek van Carlo". P-02 en P-03 zitten in goedgekeurde bronnen en kunnen met CHG-021 mee.

Wat ik niet kon toetsen staat onderaan.

## Bevindingen

### Blokkerend

Geen.

### Waarschuwing

**P-01. Paneel van de start "Verzoek van Carlo" beschrijft het vervolg anders dan `prc-02.md`.**
- Plek: pagina, sectie 6 (UC2), start "Verzoek van Carlo" (`layout.js`, PRC-02, item `s3`, veld `what`): "Dr. Evil gaat eerst na of er al een doorloop loopt (G-02.8); zo niet, dan komt de wens uit het verzoek **bovenaan de uitbreidingslijst** (ACT-02.1)."
- Wat er mis is: `api/prc-02.md` (activiteit ACT-02.1, input en resultaat) zegt dat ACT-02.1 bij een verzoek **de wens uit het verzoek neemt**. Alleen bij "ja" op G-02.8 (er loopt al een doorloop) zet Dr. Evil de wens bovenaan de lijst (G-02.8 en ASM-33). De pagina maakt van het "nee"-pad ook een "bovenaan de lijst"-pad. Dat staat niet in het register en het wijkt af van de procesbeschrijving. (De tekst bij G-02.8 en bij het eindpunt "Geen tweede start" is wel juist.)
- Voorstel: in `layout.js` de zin veranderen in: "zo niet, dan neemt ACT-02.1 de wens uit het verzoek als volgende uitbreiding". Daarna opnieuw bouwen en `check.js`/`klikproef.js` draaien.

**P-02. ACT-03.1 toont nog "Voorstel 0.11 (PRP-040)", terwijl PRP-040 in B-14 is besloten.**
- Plek: pagina, sectie 4 (PRC-03), paneel van ACT-03.1 "Deliverable ter goedkeuring indienen", kolom Paperclip; en de Paperclip-tabel in sectie 7 (rij ACT-03.1). Bron: `api/prc-03.md` regel 40 (goedgekeurd 0.11, kaart `fa26d50e`): "**Voorstel 0.11 (PRP-040): altijd `request_item_verdicts`** ... Alternatief: `executionPolicy`-stage `approval` ... (OPEN-10; PRP-040 raadt dat af)".
- Wat er mis is: het register heeft PRP-040 op "besloten (B-14)" en OPEN-10 op "beantwoord". De pagina zegt bij ACT-03.1 dat het nog een voorstel is met een alternatief rond een open vraag. De pagina neemt de goedgekeurde PRC-03 over; het gat staat niet in `register-gaten-0-11.md` (A-8 gaat over `paperclip-mapping` M-1 en A-9 over `prc-04`).
- Voorstel: opnemen in `register-gaten-0-11.md` als nieuw punt bij groep A (prc-03, ACT-03.1: "Voorstel 0.11 (PRP-040)" wordt "B (B-14: PRP-040)" en het alternatief krijgt "niet gekozen"); herstel in CHG-021. Op de pagina niets aanpassen.

**P-03. De uitbreidingsgids noemt CHG-020 als eerstvolgende vrije ID, maar CHG-020 is al in gebruik (door deze pagina).**
- Plek: pagina, sectie 10, kopje "6. Eerstvolgende vrije ID's (stand register v0.11, ...)", rij Wijziging: "CHG-019 | CHG-020 | CHG-017 zijn de weergaven en pagina 0.4; CHG-018 ...; CHG-019 is model 0.11". Bron: `uitbreidingsgids.md` 0.5 (goedgekeurd, kaart `fa26d50e`).
- Wat er mis is: de pagina toont op dezelfde plek (kop, statusblok, `werk/wijzigingen.md`) CHG-020 als de wijziging van pagina 0.5 en toont hem in de gids als nog vrij. Wie de gids volgt, kan CHG-020 dubbel uitdelen ("ID's zijn uniek, niet hergebruikt"). Dit is geen fout van de pagina: de gids is vastgesteld voordat CHG-020 bestond.
- Voorstel: opnemen in `register-gaten-0-11.md` en in uitbreidingsgids 0.6 bij CHG-021 corrigeren ("laatst gebruikt CHG-020, volgende CHG-021"). Tot die tijd is de pagina juist ten opzichte van zijn bron.

### Opmerking

**P-04. De drie starts van PRC-02 staan nooit tegelijk in beeld.**
- Plek: sectie 6, keuzeknoppen "Wat start PRC-02?" (Dagstart, Weekmoment, Verzoek van Carlo); standaardweergave toont alleen "Dagstart ma-vr 09:00 (routine)". Ook het proceslandschap (sectie 1) toont voor PRC-02 geen start.
- Toelichting: dit is geldig BPMN-light en komt overeen met `api/prc-02.md`: elk pad heeft één start zonder inkomende lijn; elke start loopt via G-02.8 (bij de dagstart eerst ACT-02.51 met "meer dan 5 open: geen start") naar ACT-02.1; G-02.8 heeft de twee uitgangen "nee → ACT-02.1" en "ja → geen tweede start"; ACT-02.51 komt alleen bij de dagstart voor (in de Mermaid: `A51 → G8`, `W → G8`, `V → G8`). Ik zag in de renders (standaard, week, verzoek, G-02.8 = ja, ACT-02.51 = nee) geen afwijking. De Mermaid van de procesbeschrijving toont de drie starts wél naast elkaar. De pagina volgt de werkwijze van de andere beslissingen (één route tegelijk).
- Voorstel: niets aan het model. Eventueel in de uitleg boven het diagram één zin: "De drie starts zie je met de keuzeknoppen hieronder." (staat er in feite al: "Kies bij de starten en de beslissingen welke route je wilt zien").

**P-05. Er zijn twee eindpunten in PRC-02 die niet "Backlog gereed" zijn.**
- Plek: sectie 6, "Geen start: meer dan 5 open taken" (Start = dagstart, ACT-02.51 = nee) en "Geen tweede start: er loopt al een doorloop" (G-02.8 = ja).
- Toelichting: alle paden van PRC-01 (3 profielen, 2 intake-routes, escalatie) en alle paden van PRC-02 die een doorloop starten, eindigen bij "Backlog gereed, overdracht naar implementatie". De twee uitzonderingen zijn paden waarin PRC-02 niet start. Ze volgen de Mermaid (`E0 "Geen start"`) en `prc-02.md`; er is geen doorloop die ergens anders eindigt, en elke afkeuring, vraag of blokkade gaat via PRC-03 t/m PRC-06 terug in het proces. Geen actie.

**P-06. Twee knoplabels in de swimlane worden afgekapt met een beletselteken midden in een woord.**
- Plek: ACT-01.27 ("Paginalijst met "nu" en "later", ontwerpniveau e…") in UC1 en ACT-02.15 ("Ontwerpbehoefte bepalen en paginabrieve…") in UC2. De volledige naam staat in het paneel en in het aria-label.
- Toelichting: eigen test over alle routes van alle zes processen: alleen deze twee knopen worden afgekapt. ACT-01.27 was al P-06 in de controle van pagina 0.4 en is niet hersteld. Ook meldt `render.js` dat "Ontwerpklassendiagram" (ACT-01.13) breder is dan de knoop (141 tegen 136 px geschat; geen overlap te zien).
- Voorstel: een korte naam (`short`) in `layout.js`: ACT-01.27 "Paginalijst en brieven opstellen" (zoals in de Mermaid), ACT-02.15 "Ontwerpbehoefte en paginabrieven" (zoals in de Mermaid van PRC-02).

**P-07. Gevolgen van de gekozen tekening (overgenomen van 0.4) en een bekend gat.**
- Parallelle gateways G-01.7, G-01.8 en G-01.9 zijn lineair getekend (G-01.7 → ACT-01.52 → G-01.1 → ACT-01.2). De pagina zegt dat in het paneel ("hier na elkaar getekend"). Dit was P-07 in de controle van 0.4; de volgorde en de pijlen komen overeen met de Mermaid.
- In PRC-02 is de akkoordenreeks per geraakt document één samengestelde knoop "GOV-09/03/04/05/13/11" (P-10 van 0.4). GOV-03, 04, 05, 09 en 13 staan daardoor niet als eigen knoop in een swimlane, maar elk staat precies één keer in de GOV-tabel (15 rijen). GOV-03/04/05/13 gelden in UC2 alleen bij P3; dat staat in de tabel en in sectie 3, niet in het knooplabel zelf.
- G-02.8 heeft op de pagina geen beslisser. Het register geeft er geen (gat B-4 in `register-gaten-0-11.md`); sectie 2 van de pagina zegt wel "Dr. Evil, na elke start". Niet als fout van de pagina geteld.

**P-08. Labels op de pagina zijn korter dan in de procestabellen, omdat de pagina het register volgt.**
- Plek: staptabellen en panelen. Voorbeelden uit de eigen vergelijking van `api/prc-01.md` en `api/prc-02.md` met het register: GOV-07 heeft in het register "B (TL-V2, B-09)" en in `prc-02.md` "B (TL-V2, B-09, B-13)"; ACT-02.2 heeft in `prc-02.md` ook "A (ASM-35)"; GOV-06, GOV-10, GOV-11, ACT-01.17 en ACT-02.8 missen in het register de B-12-labels (en PRP-043).
- Toelichting: de pagina toont "wat het register bevat", dus dit is correct. De B-12-labels zijn gat C-6 en PRP-043 is gat A-5 in `register-gaten-0-11.md`. Nieuw ten opzichte van die lijst: GOV-07 zonder B-13 en ACT-02.2 zonder ASM-35 (beide horen bij de herinnering van 09:00, B-13).
- Voorstel: GOV-07 en ACT-02.2 toevoegen aan het register-herstel CHG-021 (groep A of C). Op de pagina niets aanpassen.

**P-09. Oudere standen uit goedgekeurde bronnen staan nog op de pagina, soms zonder "sinds 0.10 vervallen" erbij.**
- ASM-19: nergens meer als geldende aanname genoemd in de aannamelijst of in de kop "Bevestigde aannames" (ASM-18, 20 t/m 39); staat in de lijst "Vervallen ID's"; sectie 3 en sectie 9 zeggen "ASM-19 is vervallen". Wel staat ASM-19 nog zonder die toevoeging in de kolom *Stand* van FND-005 ("vorm met 3 akkoorden, ASM-19 bevestigd", sectie 3) en in de oude stand van PRP-003 ("Stand 0.8 ... ASM-19, bevestigd"; sectie 9). Dat is gat A-7 voor FND-005 (bekend); de oude stand van PRP-003 is gedateerd ("Stand 0.8") en dus historie.
- OPEN-10 staat als "beantwoord" (B-14), maar het veld "Stand in 0.11" erbij zegt nog "Advies: PRP-040 ... Beantwoord zodra ROL-01 beide goedkeurt". Volgt het register; verwarrend naast "Beantwoord: B-14".
- ASM-24 ("pas op het weekmoment herinnert", sectie 9) en de tekst van B-09 bij besluiten zijn gat A-3 (bekend); B-13 zet er in het register wel "gewijzigd door B-13" bij.
- Geen actie op de pagina; wel meenemen bij CHG-021 (OPEN-10 `stand_0_11` weghalen of aanvullen).

**P-10. Interne werkverwijzingen en technische termen die Carlo op de pagina leest.**
- Plek: sectie 8 ("melding M-B3" bij `architect-modeling`), sectie 9 ("register-gaten-0-10 B-2", "register-gaten-0.10 B-1/B-3/B-4", "melding C-02/D-08/C-08 (CHG-017)"), sectie 3 ("Hoe dit in het model loopt, staat in v011-voorstel"), en overal in sectie 7 en 8 termen als `request_item_verdicts`, `executionPolicy`, `blockedByIssueIds`.
- Toelichting: ze komen uit het register of uit goedgekeurde weergaven; de pagina voegt ze niet toe. De Paperclip-termen staan in de sectie die voor de ontwikkelaar-kant bedoeld is (sectie 7 en 8). Carlo hoeft ze voor de secties 5 en 6 (de procesdiagrammen) niet te begrijpen, en die twee secties zijn goed te lezen: vaste legenda, korte labels, aparte panelen met "wat", input, resultaat en skills.
- Voorstel: bij CHG-021 de interne verwijzingen ("M-B3", "register-gaten-…") uit het register halen.

**P-11. Toegankelijkheid is gelijk aan 0.4; twee opmerkingen daarvan zijn niet opgepakt.**
- Gemeten: geen `<main>` en geen "naar de inhoud"-link; 232 `<th>` zonder `scope` in 57 tabellen; geen `<caption>`. Wel goed: `lang="nl"`, licht/donker/automatisch, `prefers-reduced-motion`, 88 knopen met `tabindex`, `role` en aria-label, geen externe verwijzingen of afbeeldingen, contrast van `--ink-3` 4,60:1 of hoger (P-04 van 0.4 is hersteld en wordt door `check.js` bewaakt).
- Voorstel: bij de volgende versie `<main>`, een skiplink en `scope="col"` toevoegen. Niet nodig voor indiening.

**P-12. Kleine restanten van de weergave.**
- In de panelen staat nog "PRC-02 · basis · stap 1 van 36" terwijl er geen variant meer is (de knop "Variant" is verborgen); het blokje PRC-02 in het landschap toont "herhaalbaar · v0.11" zonder status, PRC-01 toont "Goedgekeurd · v0.11" (alleen de status ontbreekt, zoals in 0.4); de tellingen 20 beslissingen en 15 goedkeuringen staan niet als getal op de pagina (alleen in `check.js` en in de gegevens, 15 GOV-rijen zijn wel te tellen); `check.js` bewaakt ze.
- Voorstel: geen actie nodig.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Secties 1 t/m 10 aanwezig | voldoet | `#s1` t/m `#s10` met kop: 1 Overzicht, 2 Rollenregister, 3 Kritische review, 4 Herbruikbare subprocessen, 5 UC1, 6 UC2, 7 Paperclip-mapping, 8 Skills-analyse, 9 Aannames, voorstellen en open vragen, 10 Uitbreidingsgids |
| Pagina laadt zonder fouten | voldoet | jsdom: 0 fouten bij het laden; `check.js`: 1076 controles, 0 fouten; `klikproef.js` (zelf gedraaid): 15708 acties, 0 fouten, 0 console-meldingen |
| Pagina is actueel ten opzichte van de bronnen | voldoet | verse build in `/tmp/vorg` met `v11` gekoppeld is byte-gelijk aan `organisatiemodel-0.5.html` en `organisatiemodel.html`; `register.md` in `api/` en `werk/` zijn gelijk (md5) |
| ID's uniek, schema, niet hergebruikt | voldoet met opmerking | 82 ACT, 20 G, 15 GOV, elk één keer in `DATA`; geen vervallen ID als knoop; 332 verschillende ID's op de pagina, `check.js` toetst ze aan het register en aan de vrije ID's van gids §6 (13); zie P-03 |
| Elk ACT-ID en G-ID precies één keer in het artifact | voldoet | eigen telling over de `items` van PRC-01 t/m PRC-06: 82 ACT en 20 G, geen ontbrekende, geen dubbele |
| Elk GOV-ID precies één keer | voldoet met opmerking | 15 GOV in `DATA.gov` en 15 rijen in de GOV-tabel; GOV-01, 02, 06, 07, 08, 10, 11, 12, 14, 15 als eigen knoop (GOV-06 en GOV-08 in meer processen, zoals het register zegt); GOV-03, 04, 05, 09, 13 in de samengestelde knoop van PRC-02; zie P-07 |
| Gegevens komen overeen met het register | voldoet | diepe vergelijking: 82 activiteiten (naam, rol, input, output, label, situatie, proces), 20 beslissingen en 15 goedkeuringen (alle tekstvelden): 0 verschillen; 27 capabilities (CAP-11 "Bouwcontract ontwerpen"), 39 skills, 34 aannames, 15 open vragen, 21 vervallen ID's, 3 systemen (Claude Design erbij) gelijk aan het register |
| Het artifact bevat geen gegevens buiten het register | voldoet met waarschuwing | alle teksten in `layout.js` zijn afgeleid van `prc-01.md` en `prc-02.md`; uitzondering P-01 (verzoek-start) |
| PRC-02: drie starts, G-02.8, ACT-02.51 | voldoet | drie startknopen (dagstart, weekmoment, verzoek van Carlo), ACT-02.51 alleen bij de dagstart, G-02.8 met "nee" en "ja"; geldig BPMN-light en gelijk aan de Mermaid en tabellen van `api/prc-02.md` (zie P-04, P-05) |
| PRC-02: volgorde, lanes en loops | voldoet | volgorde en lanes gelijk aan de activiteitentabel; 14 loops (GOV-01, G-02.5 x2, GOV-02 x2, GOV-14 x2, GOV-KO, GOV-06 x3, ACT-02.53, G-02.6, ACT-02.54) met uitgang (max. 2 rondes, daarna GOV-08); alle loops minstens één keer genomen door `klikproef.js` |
| PRC-01: nieuwe namen ACT-01.2 en ACT-01.51 | voldoet | register-namen "Project aanmaken, opdracht registreren en overdragen aan de analist" en "Project aanmaken en rechtstreekse opdracht doorgeven aan de orchestrator" staan in de panelen; de knopen tonen de korte namen uit de Mermaid van `prc-01.md`; ACT-01.51 alleen bij G-01.1 = Socrates, daarna ACT-01.2 |
| UC1 toont 4 akkoorden | voldoet | sectie 5: "4 akkoorden van jou: GOV-10, GOV-15, GOV-11, GOV-06 (B-12: PRP-036)"; sectie 2 en 3 gelijk; `check.js` toetst de volgorde |
| Telling 82/20/15 | voldoet | 82 activiteiten (skilltabel "Activiteiten (82)"), 20 beslissingen en 15 GOV in `DATA` en `check.js` |
| Telling skillstatus 21/27/25/9 | voldoet | eigen telling uit `skl_status` per stap (zwakste status): 21 aanwezig, 27 gedeeltelijk, 25 ontbreekt, 9 n.v.t.; pagina toont 21/27/25/9; skillblok "28 bestaande, 11 nieuwe met werknaam" gelijk aan het register |
| Labels: B-13, B-14, PRP-040 t/m 043 | voldoet met waarschuwing | PRP-040..043 "Besloten, goedgekeurd (B-14)" en "Stand 0.11: besloten (B-14)"; het PRP-filter telt B-08: 21, B-12: 11, B-14: 4 (totaal 42); B-13 en B-14 staan in sectie 3(c); `check.js`: 155 labels, 0 "Voorstel", 15 A-labels met alleen bevestigde ASM's tonen "Aanname, bevestigd"; uitzondering P-02 |
| ASM-30 t/m ASM-39 bevestigd | voldoet | aannamelijst: elk "bevestigd" met "kaart fa26d50e (2026-10-30, B-14)"; kop noemt ze bij "Bevestigde aannames" |
| ASM-19 vervallen | voldoet met opmerking | niet in de lijst met geldende aannames; in "Vervallen ID's" en in de tekst bij UC1 ("ASM-19 is vervallen"); oude standen zie P-09 |
| OPEN-10 beantwoord, OPEN-11, 13, 15 open | voldoet | open vragen tabel: OPEN-11, OPEN-13 en OPEN-15 "Open"; OPEN-10 "beantwoord (B-14)"; OPEN-03, 04, 05, 09, 14 ook beantwoord |
| Geen SKL-nummers | voldoet | "SKL-" komt in de zichtbare tekst alleen voor in de zin "er komt geen SKL-nummer meer" (voorstel PRP-039); `check.js`: 0 skillnummers, 39 van 39 skills bij naam |
| Statusteksten | voldoet | pagina 0.5 "Concept" (kop, statusblok, `<title>`: "pagina 0.5, model 0.11"); model 0.11 "Goedgekeurd (2026-10-30, Carlo, kaart fa26d50e; B-14)"; vorige pagina 0.4 "Goedgekeurd, kaart a16387c4"; status per document gelijk aan de Status-regel in `werk/*.md` (organisatie, proces-catalogus, verantwoordelijkheden, capabilities-en-skills, beide skillmatrices, skill-specificaties, agentprofiel-atlas: Concept CHG-020; bevindingen, voorstellen, paperclip-mapping, register, PRC-01/02/03 0.11 en uitbreidingsgids 0.5 Goedgekeurd; PRC-04/05 0.10; PRC-06 0.3) |
| Elk pad eindigt bij "Backlog gereed" | voldoet met opmerking | PRC-01 en PRC-02: één eindpunt "Backlog gereed, overdracht naar implementatie" voor elke doorloop; twee "geen start"-uitgangen in PRC-02, zie P-05 |
| Doel, trigger, start- en eindconditie | voldoet | per proces in het kopblok (Start, Einde, Eigenaar); PRC-02 met de drie triggers en ASM-30, 32, 33 |
| Verantwoordelijke rol, input, output, vervolg per activiteit | voldoet | `DATA.steps` gelijk aan het register; paneel toont wat, input, resultaat, skills met status, overleg, verantwoordelijken (R, A, beslisser, controleur) |
| Beslissingen met alle uitgaande routes en afhandeling | voldoet | alle routes per beslissing als knop; negatieve uitkomsten (afkeur, escalatie, blokkade) als loop of verwijzing naar PRC-04, 05, 06 |
| Menselijke goedkeuring met GOV-ID | voldoet | goedkeuringen als blauw gemarkeerde knoop met GOV-ID; PRC-02 met "GOV-09/03/04/05/13/11" (P-07) |
| Status, versie en skillstatus komen overeen met het register | voldoet | proces- en documentstatus, `skl_status` per stap gelijk aan het register; geen skill zonder status |
| Geen secrets, persoonsgegevens, externe afhankelijkheden | voldoet | geen http(s)-verwijzing, geen e-mailadres, geen token of uuid; alleen de voornaam Carlo |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet met waarschuwing | zie labels hierboven; P-02 |
| Huidige en gewenste situatie gescheiden | voldoet met opmerking | labels `as-is`/`to-be` in de panelen, geen keuzeschakelaar (zoals 0.3 en 0.4) |
| Wijzigingshistorie bijgewerkt; goedgekeurd niet overschreven | voldoet | CHG-020 staat in `werk/wijzigingen.md` (regel 29, Concept); `organisatiemodel-0.4.html` en `build-0.4-backup/` onveranderd; 0.5 is een nieuw bestand met status Concept |
| Verwijzingen naar buiten | voldoet | genoemde agents (Dr. Evil, Socrates, Atlas, Carlo) en alle skillnamen komen uit het register; werking blijft "niet vastgesteld (OPEN-11)" |
| Leesbaarheid voor Carlo | voldoet met opmerkingen | zie P-06, P-10, P-11, P-12; de secties 5 en 6 hebben een korte inleiding, legenda, keuzeknoppen, afspeelknop en een paneel per stap |

## Wat ik niet kon toetsen

- **Echte browser:** alles via jsdom en een resvg-render van de SVG's (alleen een lettertype zonder beletselteken en met een nepvet; daardoor tonen de eindpunten en "…" in mijn PNG's vreemd, dat is een eigenschap van mijn renderer en geen fout in de pagina). Echt gedrag van focusringen, scrollen, afdrukken, de snelheid van het afspelen en de weergave op een telefoon heb ik niet gezien.
- **Inhoudelijke juistheid van de tekstblokken uit de weergaven** (organisatie, verantwoordelijkheden, skill-specificaties, enzovoort) is niet opnieuw beoordeeld; dat hoort bij de controle van de weergaven (`controle-chg020.md`). Ik heb alleen gecontroleerd dat de pagina ze overneemt, dat er geen SKL-nummers in staan, dat de status klopt en dat de gevraagde 0.11-punten kloppen.
- **Werking van agents, skills, routines en Paperclip-koppelingen** (OPEN-11, OPEN-15, FND-013) en of Claude Design toegankelijk is voor de agents: niet te beoordelen tot de gebruiker ze bevestigt.
- **PRC-03 t/m PRC-06 diagrammen** zijn op ID's, lanes, loops en dekking van het register gecontroleerd en de klikproef doorloopt ze, maar niet regel voor regel tegen hun Mermaid.
- **Bekende gaten van het register** (`register-gaten-0-11.md`, A-1 t/m A-11, B-1 t/m B-4, C-1 t/m C-6) heb ik niet als fout van de pagina geteld.
- Een technisch geldig diagram is niet automatisch inhoudelijk juist: of het model zelf (bijvoorbeeld G-02.8 zonder beslisser, Carlo als ontwerper én goedkeurder, FND-033) in de praktijk werkt, valt buiten deze controle.
