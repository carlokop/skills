# Modelcontrole pagina 0.6 (WEB-19, CHG-025): eindontwerp op model 0.13

| | |
| --- | --- |
| Datum | 2026-10-31 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`, checks voor het eindontwerp; eisen aan de pagina uit `bpmn-eindontwerp`), niet de maker |
| Scope | `eindontwerp/organisatiemodel-0.6.html` (1.233.852 bytes; byte-gelijk aan `eindontwerp/organisatiemodel.html`), gebouwd met `eindontwerp/build/` (`build.js`, `layout.js`, `template.html`). De vorige pagina `organisatiemodel-0.5.html` (model 0.11) is ongewijzigd (laatste wijziging 2026-10-31 10:16, voor de bouw van 0.6); `build-0.5-backup/` bestaat. |
| Vergeleken met | register 0.13 `v13/over/api/register.md` (YAML-blok; 84 activiteiten, 21 beslissingen, 15 GOV, 27 capabilities, 39 skills, 50 aannames, 15 open vragen, 21 vervallen ID's, 10 grill-regels, 421 korte namen), `api/prc-01.md` t/m `api/prc-06.md` (vooral `prc-04.md` met Mermaid en tabellen), `api/codes-en-namen.md`, `SPEC-CHG-025.md` (sectie E), de statusregels van de documenten in `werk/` en `api/`, `werk/register-gaten-0-13.md` en `werk/controle-chg025.md` (bekende punten, niet als fout van de pagina geteld), vorige controle `api/controle-pagina-0-5.md` |
| Methode | Eigen scripts in `/tmp` (jsdom, js-yaml, resvg): (1) verse build in een kopie (`/tmp/vorg6`, `v13` gekoppeld) is **byte-voor-byte gelijk** aan de aangeleverde pagina, dus de pagina is actueel ten opzichte van de bronnen van 15:34; (2) `DATA` (bouwresultaat) stuk voor stuk vergeleken met het register: 84 activiteiten (alle sleutels, ook `grill_sessie`, `wijziging_0_12`, `wijziging_0_13`, `nieuw_in`), 21 beslissingen, 15 goedkeuringen, 50 aannames, 15 open vragen, 27 capabilities: 0 verschillen; (3) `check.js` zelf gedraaid (1260 controles, 0 fouten); (4) `render.js` zelf gedraaid (32 PNG's; hij schrijft nog naar `/tmp/render-0.5`, ik heb ze met de bestaande `/tmp/render-0.6` vergeleken: gelijk); PRC-04 (standaard, G-04.1=ja, G-04.51=ja, G-04.52=nee), PRC-01 (standaard, uitgesneden op groot formaat bij ACT-01.3 t/m ACT-01.27 en ACT-01.12 t/m ACT-01.24), PRC-02 (standaard) en het landschap bekeken; (5) alle 16 routecombinaties van PRC-04, alle van PRC-01, PRC-03, PRC-05 en PRC-06 en 300 van de 768 van PRC-02 doorlopen: elk pad eindigt bij een eindpunt of bij een lus-verwijzing (zie tabel); (6) alle codes in de zichtbare tekst getoetst aan `DATA.namen` (425 namen, 421 uit het register plus B-19, CHG-025, P1 t/m P3: alle 421 `korte_namen` aanwezig en gelijk) en het DOM gemeten (abbr, title, tabindex, popover); (7) alle 63 tabellen op een kolom Naam; (8) grill-markeringen in PRC-01 en PRC-02 uit het DOM; (9) afgekapte knooplabels over alle routes; (10) statusregels van de documenten vergeleken met de statustabel in sectie 1. De klikproef heb ik niet gedraaid (afgesproken). |
| Wijzigingen door controleur | geen aan de pagina, `build/`, `werk/` (behalve dit verslag) of `api/`. Eigen scripts en renders staan alleen in `/tmp`. Er is niets geüpload en geen comment geplaatst. |

## Oordeel

**Kan worden ingediend, mits P6-01 eerst is hersteld** (één regel in `build.js`, daarna opnieuw bouwen en `check.js`). Zonder dat herstel: niet indienen, want de statustabel in sectie 1 geeft de uitbreidingsgids een verkeerde status en versie, terwijl sectie 10 zelf de juiste noemt.

Verder zijn er geen blokkerende bevindingen. De pagina geeft register 0.13 juist en volledig weer: 84 activiteiten, 21 beslissingen en 15 goedkeuringen komen overeen met het register (geen enkel verschil in de diepe vergelijking), elk ACT- en G-ID staat precies één keer in de swimlanes, de tellingen 84/21/15 en 17/23/35/9 staan op de pagina, UC1 toont 4 akkoorden, PRC-04 heeft het nieuwe diagram met ACT-04.55, ACT-04.56, G-04.52 en een lus die een uitgang heeft (G-04.51: na 2 rondes zonder voortgang naar GOV-08), de 8 grill-momenten (GS1, 2, 3, 4, 9, 10, 11 en GS14 met de voorwaarde) staan als overzicht en als markering bij de beginstap, GS5 t/m GS8, GS12, GS13 en GS15 komen alleen als vervallen voor, OpenAPI staat bij ACT-01.17, ACT-02.8 en GOV-06 met beide controles (ASM-52), B-15 t/m B-19 staan in sectie 3(c), PRP-044 is "Goedgekeurd (B-19)", ASM-40 t/m ASM-55 staan allemaal als "bevestigd", er staat nergens "ter bevestiging" en geen SKL-nummer. De codes hebben een korte naam (title, tik en toetsenbord), de legenda staat bovenaan en de kolom Naam staat in bijna alle tabellen. Er is 1 waarschuwing (P6-01 en P6-02) en er zijn 7 opmerkingen (P6-03 t/m P6-09).

Wat ik niet kon toetsen staat onderaan.

## Bevindingen

### Blokkerend

Geen. (P6-01 is een fout in een statusregel; ik reken hem als waarschuwing met herstel vóór indiening, omdat het herstel één regel is.)

### Waarschuwing

**P6-01. Statustabel in sectie 1 geeft de uitbreidingsgids een verkeerde status en versie.**
- Plek: pagina, sectie 1, tabel "Status en versie van de modellen", laatste rij "Pagina en uitbreidingsgids (ronde 4)": "Uitbreidingsgids: **Concept, ter goedkeuring (CHG-025), versie 0.6**". Bouwcode: `build/build.js`, functie `docStatus` (regel 148 t/m 159), aangeroepen via `st("uitbreidingsgids.md")` (regel 437).
- Wat er mis is: `api/uitbreidingsgids.md` heeft als status "**Goedgekeurd (2026-10-31, Carlo, kaart `226c7ce7`)**, versie 0.7, bij model 0.13". `docStatus` kijkt alleen naar de statusregel, maar de eerste regex (`**Concept, ter goedkeuring** (versie …`) vindt de oude stand in de geschiedenis die in diezelfde regel staat ("Vóór de goedkeuring: **Concept, ter goedkeuring** (versie 0.6, bij model 0.12 …"). De pagina zegt dus op één plek dat de gids nog op goedkeuring wacht (0.6, CHG-025) en op een andere (sectie 10, kop Status) dat hij goedgekeurd is (0.7). Carlo kan denken dat er een document voor hem klaarstaat dat er niet is. De andere rijen van de tabel heb ik nagelopen tegen de statusregels in `werk/` en `api/` en zijn goed (organisatie, voorstellen, verantwoordelijkheden, capabilities-en-skills, beide skillmatrices, skill-specificaties, agentprofiel-atlas: Concept CHG-025 versie 0.13; bevindingen, paperclip-mapping, register: Goedgekeurd 0.13; PRC-01 en PRC-02 0.13, PRC-03 en PRC-04 0.12, PRC-05 0.10, PRC-06 0.3).
- Voorstel: in `docStatus` eerst controleren of de statusregel met `**Goedgekeurd` begint (de regex voor "Goedgekeurd" vóór die voor "Concept" zetten, of de "Concept"-regex vastzetten op het begin van de cel na `| Status |`). Daarna opnieuw bouwen en in `check.js` een controle toevoegen dat de statustabel voor `uitbreidingsgids` "Goedgekeurd" en "0.7" bevat. Daarna `cp organisatiemodel.html organisatiemodel-0.6.html`.

**P6-02. Vier knoopteksten in de swimlanes worden afgekapt met een beletselteken midden in een woord.**
- Plek: ACT-01.27 ("Paginalijst met "nu" en "later", ontwerpniveau e…") in UC1; ACT-01.59 ("Componenten-, route- en dataontwerp opstellen (profie…") en ACT-01.60 ("Contentmodel en platformconfiguratie opstellen (profie…") in UC1 bij de profielroutes P1 en P2; ACT-02.15 ("Ontwerpbehoefte bepalen en paginabrieve…") in UC2.
- Toelichting: eigen test over alle routes van alle zes processen. ACT-01.27 en ACT-02.15 waren P-06 in de controle van pagina 0.5 (en ACT-01.27 al in 0.4) en zijn niet hersteld. ACT-01.59 en ACT-01.60 zijn nieuw in de lijst: bij profiel P3 passen ze in vier regels, bij de profielen waar de tekst langer is worden ze afgekapt. De volledige naam staat in het paneel en in het aria-label; "(profie…" lijkt op een fout en laat niet zien om welk profiel het gaat.
- Voorstel: een korte naam (`short`) in `layout.js` voor alle vier, bijvoorbeeld "Paginalijst en brieven opstellen" (zoals in de Mermaid van `prc-01.md`), "Ontwerpbehoefte en paginabrieven" (zoals in `prc-02.md`), "Componenten-, route- en dataontwerp (P2)" en "Contentmodel en platformconfiguratie (P1)". Of de knoopteksten maximaal 4 regels laten tonen en het profiel in de eerste regels zetten.

### Opmerking

**P6-03. De paarse GS-markering (grill-moment) kan de code van de knoop raken.**
- Plek: PRC-01 ACT-01.9 (GS2) en ACT-01.23 (GS3); PRC-02 ACT-02.12 (GS10) en ACT-02.13 (GS11). Bij de knopen met 2 regels (ACT-01.3, ACT-01.11, ACT-02.3, ACT-02.6) is er niets aan de hand.
- Toelichting: in mijn render (resvg met een breder vervangend lettertype dan de pagina gebruikt) valt het blokje GS rechtsboven over het laatste cijfer van de code bij knopen met 3 of 4 regels tekst, omdat de coderegel daar hoger in de knoop staat en het blokje half buiten de rand uitsteekt. In een echte browser is de tekst smaller en is de overlap waarschijnlijk kleiner of weg; dat kon ik niet zien. `render.js` meldt dit soort overlap niet.
- Voorstel: het blokje 6 tot 8 px verder naar rechts of naar boven zetten, of alleen bij knopen met meer dan 2 regels links van het midden. Controleren in een echte browser.

**P6-04. In de tabel met M-punten (sectie 7) staat geen kolom Naam.**
- Plek: sectie 7, tabel met de kolommen "# / Stap / Probleem / Gevolg in het model / Label"; de eerste kolom bevat M-1 t/m M-17.
- Toelichting: de korte naam van elke M (bijvoorbeeld M-15 "rondes zonder voortgang tellen") staat wel in de title en in de popover, maar niet als kolom. Het bouwscript voegt de kolom Naam niet toe als een kop met "Stap" begint (zie `nameCols` in `template.html`), terwijl "Stap" hier de activiteit bedoelt en niet de naam van het M-punt. De andere ID-tabellen (stappen, beslispunten, goedkeuringen, bevindingen, grill-momenten, aannames, open vragen, vervallen ID's) hebben een kolom Naam of Activiteit, en de PRP-tabellen tonen de naam in de cel. Codes zonder korte naam in het register staan zonder naam (bekend: lokale codes B-1..B-4, FND-011a..d, UC/AC/BR van het klantvoorbeeld, de voorbeelden PRC-09 enzovoort in de gids), en samenstellingen als "GOV-07-vraag" (15 keer) en "P-TL-01" krijgen geen popover (de herkenning slaat ze over); dat is melding E-3 van de maker.
- Voorstel: kolom Naam toevoegen aan de M-tabel (uitzondering in `nameCols`, of de naam in de eerste cel zetten). De rest geen actie.

**P6-05. Toetsenbord: ongeveer 10.000 tabstops, en nog geen `<main>` of "naar de inhoud"-link.**
- Plek: de hele pagina. Van de 11.463 `abbr`-codes krijgt de eerste per tabelrij, alinea of lijstpunt `tabindex="0"` (10.027 tabstops); de rest alleen een title.
- Toelichting: aan de eis "toetsenbord-toegankelijk" is voldaan (Tab opent de popover, Enter of spatie schakelt, Esc sluit, 0 `abbr` zonder title), maar wie met Tab door sectie 8 of 9 gaat, komt door honderden codes. Geen `<main>`, geen skiplink, 232 `<th>` zonder `scope` (P-11 van 0.5 is niet opgepakt; meetwaarden niet opnieuw geteld).
- Voorstel: bij de volgende versie alleen de eerste kolom van tabellen en de codes in koppen tabbaar maken, een skiplink en `<main>` toevoegen. Niet nodig voor indiening.

**P6-06. PRC-04: een keuze bij G-04.51 of G-04.52 doet soms niets en dat staat nergens.**
- Plek: sectie 4, PRC-04, keuzeknoppen G-04.1, G-04.2, G-04.52 en G-04.51; mijn render `PRC-04_G-04.51=ja.png` toont dezelfde route als de standaard (Overeenstemming).
- Toelichting: G-04.51 komt pas aan bod als G-04.2 = ja of G-04.52 = nee; G-04.52 alleen bij G-04.2 = nee. De route klopt met de Mermaid en met de tabel van `prc-04.md`: alle 16 combinaties eindigen bij "Overeenstemming, werk gaat verder" (4), "Escalatiebesluit, werk gaat verder" (6, via ACT-04.52, ACT-04.53, GOV-08, ACT-04.54) of "↩ Volgende ronde (ACT-04.3)" (6; de lus heeft de uitgang G-04.51 = ja). Het BPMN-light is dus geldig. Voor een lezer die op "Ja" bij G-04.51 klikt en niets ziet gebeuren, is het verwarrend. Ook het "Nee, vastgelopen" van de oude uitkomst van G-04.2 is correct vervallen.
- Voorstel: een regel onder de knoppen ("Dit beslispunt komt alleen aan bod als je bij G-04.2 'Ja' kiest, of bij G-04.52 'Nee'"), of de knoppen van een niet bereikt beslispunt dempen. Niet nodig voor indiening.

**P6-07. Sectie 9 zegt dat B-13 OPEN-10 beantwoordde, terwijl het register B-14 noemt; OPEN-10 toont nog de stand van 0.11.**
- Plek: sectie 9, inleiding: "Je antwoorden in B-13 beantwoorden OPEN-03, OPEN-04, OPEN-05, OPEN-09, OPEN-10, OPEN-14." De tabel met open vragen zegt bij OPEN-10 wel "Beantwoord: B-14 (0.11)" en register `beantwoord` ook. In het register staat bij OPEN-10 ook nog het veld `stand_0_11` met "Beantwoord zodra ROL-01 beide goedkeurt" (P-09 van 0.5).
- Toelichting: de inleiding maakt de lijst in `template.html` (zin "Je antwoorden in B-13 beantwoorden …") uit alle beantwoorde vragen, zonder het besluit per vraag te nemen. Dezelfde zin stond in 0.5.
- Voorstel: in de sjabloon de besluit-ID per vraag uit `beantwoord` halen ("OPEN-03, 04, 05, 09, 14 (B-13), OPEN-10 (B-14)"). `stand_0_11` weghalen bij de volgende registerwijziging (gat voor CHG-026).

**P6-08. De uitbreidingsgids noemt CHG-025 als eerstvolgende vrije ID, maar CHG-025 is al in gebruik (door deze pagina).**
- Plek: sectie 10, kop "6. Eerstvolgende vrije ID's (stand register v0.13 …)", rij Wijziging: "CHG-024 | CHG-025 | CHG-023 is …; CHG-020 zijn de weergaven van 0.11 …". Bron: `api/uitbreidingsgids.md` 0.7 (goedgekeurd).
- Toelichting: dezelfde situatie als P-03 van 0.5 (CHG-020): de gids is vastgesteld voordat CHG-025 bestond. De pagina volgt zijn bron; geen fout van de pagina. Wie de gids volgt, kan CHG-025 dubbel uitdelen.
- Voorstel: opnemen in `register-gaten-0-13.md` (groep A) en in de volgende gids ("laatst gebruikt CHG-025, volgende CHG-026"). Op de pagina niets aanpassen.

**P6-09. Restpunten uit eerdere controles en kleine zaken van de weergave.**
- `render.js` schrijft standaard naar `/tmp/render-0.5` en meldt "PNG's: 32 in /tmp/render-0.5", ook voor pagina 0.6; de kop van het script zegt hetzelfde. Daardoor kunnen renders van 0.5 en 0.6 over elkaar heen gaan (de stap van `VOORTGANG.md` verwijst wel naar `/tmp/render-0.6`). Voorstel: standaardmap `/tmp/render-0.6`.
- `render.js` meldt als enige "mogelijke overlap" dat "Ontwerpklassendiagram" (ACT-01.13) 141 px breed is tegen 136 px knoop. In de render past het woord binnen de knoop (bij het resvg-lettertype, dat breder is dan het lettertype van de pagina); geen actie.
- Sectie 9 toont zes PRP-tabellen twee keer (PRP-029, 031, 032, 034, 035, 036; ook in 0.5, `voorstellen.md`); het landschap toont PRC-02 als "herhaalbaar · v0.13" zonder status, PRC-01 als "Goedgekeurd · v0.13"; de panelen zeggen "PRC-04 · basis · stap 8 van 11" terwijl er geen variant meer is (alles zoals in 0.5, geen actie).
- De legenda is letterlijk de tekst van de spec (de eerste keer per sectie staat de korte naam erbij); op de pagina staat de naam bij elke code en een extra zin legt dat uit. De spec-tekst mist K, GK en V (gat A-10 van `register-gaten-0-13.md`).
- `VOORTGANG.md` zegt "nieuwste werk/-weergaven van 16:xx"; de bestanden zijn van 15:33 en 15:34. Geen effect: de verse build is gelijk.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Pagina laadt zonder fouten | voldoet | jsdom: 0 fouten bij het laden; `check.js`: 1260 controles, 0 fouten. `klikproef.js` niet gedraaid (afgesproken); volgens `VOORTGANG.md` 15869 acties, 0 fouten |
| Pagina is actueel ten opzichte van de bronnen | voldoet | verse build in `/tmp/vorg6` met `v13` gekoppeld is byte-gelijk aan `organisatiemodel-0.6.html` en `organisatiemodel.html` |
| Secties 1 t/m 10 aanwezig, titel, status | voldoet | `#s1` t/m `#s10`; `<title>` "pagina 0.6, model 0.13"; pagina "Concept", model 0.13 "Goedgekeurd (2026-10-31, Carlo, kaart 226c7ce7; CHG-023, CHG-024; B-17, B-18, B-19)"; vorige pagina 0.5 op model 0.11 (Goedgekeurd, kaart 8215b600) |
| Telling 84 / 21 / 15 | voldoet | 84 activiteiten (tabel "Activiteiten (84)"), 21 beslispunten ("Samen 21 beslispunten"), 15 goedkeuringsmomenten; `DATA` en register gelijk |
| Telling skillstatus 17/23/35/9 | voldoet | pagina: "aanwezig 17, gedeeltelijk 23, ontbreekt 35, n.v.t. 9"; `check.js` telt uit `skl_status` per stap; 28 bestaande en 11 nieuwe skills |
| Gegevens komen overeen met het register | voldoet | diepe vergelijking: 84 activiteiten (alle sleutels), 21 beslissingen, 15 goedkeuringen, 50 aannames, 15 open vragen, 27 capabilities: 0 verschillen; 39 skills bij naam; 0 SKL-nummers (twee keer de zin "er komt geen SKL-nummer meer") |
| Elk ACT-ID en G-ID precies één keer | voldoet | 84 ACT en 21 G, elk één keer over de items van PRC-01 t/m PRC-06; geen ontbrekende, geen dubbele |
| Elk GOV-ID precies één keer | voldoet met opmerking | 15 GOV in `DATA.gov` en 15 rijen in de tabel; GOV-03, 04, 05, 09, 13 zitten in de samengestelde knoop "GOV-09/03/04/05/13/11" van PRC-02 (zoals in 0.5, P-07); GOV-06 en GOV-08 in meer processen (zoals het register zegt) |
| UC1 toont 4 akkoorden | voldoet | PRC-01: GOV-10, GOV-15, GOV-11, GOV-06 in volgorde (`check.js`: "akkoorden PRC-01: 4") |
| PRC-04: nieuw diagram met ACT-04.55, ACT-04.56, G-04.52 | voldoet | pagina-ID's van PRC-04 gelijk aan de Mermaid van `prc-04.md` (18 ID's, geen verschil); lanes vrager, ontvanger, Dr. Evil, Carlo; ACT-04.55 (vrager) → ACT-04.56 (ontvanger) → G-04.52 (ja → Overeenstemming; nee met aanvulling → ACT-04.51); G-04.1 ja → ACT-04.4 → GOV-12 → ACT-04.5; G-04.2 nee → ACT-04.55, ja → ACT-04.51 |
| PRC-04: lus met uitgang, elk pad eindigt | voldoet | alle 16 combinaties: 4 x Overeenstemming, 6 x Escalatiebesluit (ACT-04.52, 04.53, GOV-08, 04.54), 6 x "↩ Volgende ronde (ACT-04.3)" met uitgang via G-04.51 = ja; GOV-12 heeft de lus "Wijzigingen nodig → ACT-04.4" (PRC-05); "ontvanger reageert niet" → PRC-06 staat als noot bij ACT-04.3 (zoals de gestippelde pijl in de Mermaid); zie P6-06 |
| Telling alleen rondes zonder voortgang, aanvulling telt als ronde | voldoet | tekst bij ACT-04.51, G-04.51 en de lus; ASM-48 en B-15 (V2, V4) |
| Geldig BPMN-light in PRC-01, 02, 03, 05, 06 | voldoet | alle routes van PRC-01 (12), PRC-03 (3), PRC-05 (4), PRC-06 (4) en 300 van 768 van PRC-02 eindigen bij een eindpunt, de verwijzing naar een ander proces of een lus met uitgang; PRC-01: één eindpunt "Backlog gereed"; PRC-02: dat eindpunt of "Geen start" / "Geen tweede start" (zoals 0.5) |
| Grill-momenten bij stappen en overzicht | voldoet | tabel in sectie 4 en 8 met GS1, 2, 3, 4, 9, 10, 11, 14 (8 rijen) gelijk aan `grillmomenten` van het register; GS-markering in PRC-01 bij ACT-01.3, 01.9, 01.23, 01.11 en in PRC-02 bij ACT-02.3, 02.12, 02.13, 02.6; "Geen grill-moment" en "Vervallen grill-momenten" (GS5 t/m GS8, GS12, GS13, GS15) staan erbij; zie P6-03 |
| OpenAPI bij ACT-01.17, ACT-02.8, GOV-06 | voldoet | notities in `layout.js` en paneel van GOV-06 (leesbare versie, revisie als commit-hash, OpenAPI-bestand erbij, controle 1 voor GOV-06, controle 2 vóór ACT-01.20 en in ACT-02.53; bij P1 een tabel); tabel "Wanneer / Door wie / Skill / Wat wordt gecontroleerd / Onafhankelijk?" in sectie 2 met twee rijen en label "afgeleid, nog niet besloten" waar het register geen besluit heeft (Atlas controleert zichzelf, Dr. Evil controleert de revisie) |
| B-15 t/m B-19 | voldoet | sectie 3(c): B-15 en B-16 (kaarten d57f0546 en a5523ebd), B-17 en B-18 (kaart 42b39ff5), B-19 (kaart 226c7ce7, alle 11 onderdelen); kaartnummers komen in het register voor |
| PRP-044, ASM-40..55, FND-038..041, M-15..17 | voldoet | PRP-044 "Goedgekeurd (B-19 – model 0.13 goedgekeurd)"; elke ASM van 40 t/m 55 "bevestigd" met bron (ASM-40/41: B-16, kaart a5523ebd; ASM-42..48: kaart 2ddaa565; ASM-49..55: kaart 226c7ce7); FND-038..041 en M-15..17 aanwezig; 0 keer "ter bevestiging"; 0 keer "Voorstel" als label bij een besloten punt (`check.js`: 159 labels) |
| Codes met korte naam (title, tik, toetsenbord) | voldoet met opmerking | 11.463 `abbr.code`, 0 zonder title; title gelijk aan de korte naam uit `DATA.namen` (0 afwijkingen); klik toont popover, Escape sluit, focus toont popover; `DATA.namen` bevat alle 421 `korte_namen` van het register (gelijk) plus B-19, CHG-025, P1 t/m P3; zie P6-04 en P6-05 |
| Legenda bovenaan | voldoet | `#codelegenda` direct onder de kop, tekst gelijk aan de spec, met een extra zin over aanwijzen, tikken en Tab |
| Kolom Naam in tabellen | voldoet met opmerking | 63 tabellen; alle ID-tabellen hebben een kolom Naam of Activiteit (stappen, beslispunten, goedkeuringen, agents, bevindingen, grill-momenten, aannames, open vragen, vervallen ID's); uitzondering M-tabel (P6-04) |
| ID's uniek, schema, niet hergebruikt | voldoet met opmerking | 84 ACT, 21 G, 12 GOV-knopen (met samengestelde knoop) elk één keer in `DATA`; geen vervallen ID als knoop; `check.js` toetst ze aan het register en aan de vrije ID's van gids §6 (16); zie P6-08 |
| Statusteksten | voldoet niet (één plek) | zie P6-01; verder gelijk aan de statusregels in `werk/` en `api/` |
| Het artifact bevat geen gegevens buiten het register | voldoet | teksten in `layout.js` afgeleid van `prc-01.md`, `prc-02.md` en `prc-04.md`; de nieuwe notities (OpenAPI, contextverslag, eindpunten van PRC-04) volgen B-15, B-17, ASM-42, ASM-48, ASM-52, ASM-53; wat de maker afleidt is gelabeld "afgeleid, nog niet besloten" |
| Doel, trigger, start- en eindconditie | voldoet | per proces in het kopblok; PRC-04 met de triggers van B-15/B-16 en ASM-40/41 |
| Verantwoordelijke rol, input, output, vervolg per activiteit | voldoet | `DATA.steps` gelijk aan het register; paneel toont wat, input, resultaat, skills met status, capability, R en A, controleur |
| Menselijke goedkeuring met GOV-ID | voldoet | blauwe knopen met GOV-ID; samengestelde knoop in PRC-02 (P-07 van 0.5) |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet met opmerking | labels per stap, punt en rij; zie P6-07 |
| Huidige en gewenste situatie gescheiden | voldoet met opmerking | labels as-is / to-be in de panelen, geen schakelaar (zoals 0.3 t/m 0.5) |
| Wijzigingshistorie bijgewerkt; goedgekeurd niet overschreven | voldoet | CHG-025 in `werk/wijzigingen.md`; `organisatiemodel-0.5.html` (10:16) en `build-0.5-backup/` onveranderd; 0.6 is een nieuw bestand met status Concept |
| Verwijzingen naar buiten | voldoet | genoemde agents (Dr. Evil, Socrates, Atlas, Carlo) en alle skillnamen komen uit het register; werking blijft "niet vastgesteld (OPEN-11)" |
| Leesbaarheid voor Carlo | voldoet met opmerkingen | korte inleiding en legenda, keuzeknoppen, paneel per stap, korte namen bij elke code; zie P6-02, P6-03, P6-05, P6-06 |

## Wat ik niet kon toetsen

- **Echte browser:** alles via jsdom en een resvg-render van de SVG's. Het lettertype in mijn PNG's is breder dan dat van de pagina en toont "·" en "…" als blokje; daardoor heb ik P6-03 niet kunnen beslissen. Echt gedrag van focusringen, de popover op een telefoon (tik), scrollen, afdrukken en de snelheid met 11.463 `abbr` heb ik niet gezien.
- **Klikproef:** niet gedraaid (afgesproken); ik vertrouw op `VOORTGANG.md` (227 routecombinaties, 15869 acties, 0 fouten) en op mijn eigen routetest.
- **Inhoudelijke juistheid van de tekstblokken uit de weergaven** (organisatie, verantwoordelijkheden, skill-specificaties, agentprofiel, enzovoort) is niet opnieuw beoordeeld; dat hoort bij `werk/controle-chg025.md`. Ik heb gecontroleerd dat de pagina ze overneemt, dat er geen SKL-nummers in staan en dat de status klopt (afgezien van P6-01).
- **PRC-03, PRC-05, PRC-06 en de lijnen van PRC-01 en PRC-02** zijn op ID's, lanes, einden en lussen gecontroleerd, niet pijl voor pijl tegen hun Mermaid. PRC-04 heb ik wel stap voor stap met de tabellen en de Mermaid vergeleken.
- **Werking van agents, skills, routines en Paperclip-koppelingen** (OPEN-11, OPEN-15) en of de beschreven OpenAPI-controles in de praktijk werken: niet te beoordelen tot de gebruiker ze bevestigt.
- **Bekende gaten van het register** (`register-gaten-0-13.md`, A-1 t/m A-11, B-1 t/m B-4, C) heb ik niet als fout van de pagina geteld.
- Een technisch geldig diagram is niet automatisch inhoudelijk juist: of het model zelf (bijvoorbeeld Atlas die zijn eigen OpenAPI-bestand controleert, G-02.8 zonder beslisser in het register, Carlo als ontwerper én goedkeurder) in de praktijk werkt, valt buiten deze controle.

## Herstel (Socrates, 2026-10-31)

| Punt | Wat er is gedaan |
| --- | --- |
| P6-01 | `docStatus` in `build.js`: begint de statuscel met **Goedgekeurd**, dan telt de geschiedenis verderop in de regel niet. Sectie 1 toont nu "Uitbreidingsgids: Goedgekeurd (2026-10-31, Carlo, kaart `226c7ce7`), versie 0.7". |
| P6-02 | Korte labels in `layout.js` voor ACT-01.27 ("Paginalijst en brieven opstellen"), ACT-01.59 ("Componenten-, route- en dataontwerp (P2)"), ACT-01.60 ("Contentmodel en platformconfiguratie (P1)") en ACT-02.15 ("Ontwerpbehoefte en paginabrieven"). De volledige naam staat in het paneel. |
| P6-07 | Sectie 9 noemt per beantwoorde vraag het besluit: OPEN-03, 04, 05, 09 en 14 (B-13), OPEN-10 (B-14). `stand_0_11` bij OPEN-10 staat in `register-gaten-0-13` (A-12). |
| P6-08 | Niet aangepast: de gids 0.7 is goedgekeurd. Staat in `register-gaten-0-13` (A-12). |
| P6-09 | `render.js` schrijft nu naar `/tmp/render-0.6`. |
| P6-03, P6-04, P6-05, P6-06 | Niet aangepast in deze ronde (opmerkingen; P6-03 niet te beoordelen zonder echte browser). |

Daarna opnieuw gebouwd. Bouwcontrole: 1260 controles, 0 fouten. Klikproef: zie de comment op het issue. Na het herstel is er geen nieuwe controle door een aparte agent gedaan.
