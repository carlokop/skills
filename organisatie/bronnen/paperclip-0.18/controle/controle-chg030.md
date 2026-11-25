# Controle CHG-030 – overzichtsdiagram (model 0.15)

Controleur: onafhankelijk (skill `bpmn-modelcontrole`). Datum: 2026-11-02.
Gecontroleerd: `overzicht/model.js`, `overzicht/build.js`, `overzicht/template.html`, `overzicht/overzichtsdiagram.html` en `.svg`, de afbeeldingen in `/tmp/ovr/`, en zelf gerenderde uitsneden van het SVG (onder meer de baan van Carlo in UC2, die in de aangeleverde afbeeldingen van UC2 buiten beeld viel).
Bron: `v15/over/werk/prc-01.md` t/m `prc-06.md` (tabellen, Mermaid, uitzonderingen) en `eindontwerp/build/data.json` (steps, dec, gov, register).
Aan de bestanden is niets gewijzigd, behalve dit verslag. `node overzicht/build.js` is opnieuw gedraaid zoals gevraagd; dat schrijft dezelfde twee uitvoerbestanden opnieuw.

## Uitkomst per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| 1a. Elke ACT uit het register staat precies één keer, in de baan van het register | voldoet | 84 ACT in het register en 84 in het diagram; `build.js` toetst aantal en baan; steekproef tegen de procestabellen klopt |
| 1b. Elk beslispunt G staat precies één keer | voldoet | 21 G in het register en 21 in het diagram |
| 1c. Elk akkoordmoment GOV staat erin, op de plekken waar het register het noemt | **voldoet niet** | GOV-11 ontbreekt in PRC-02 (K30-01) |
| 1d. Geen verzonnen stappen | voldoet | Alle ACT/G/GOV-ID's bestaan in het register. Lokale knopen (samenvoegingen, notities, Q3/Q4/R15, GOV-KO, GOV-X) zijn geen register-stappen en deels niet benoemd in de legenda (K30-02) |
| 2a. Stromen en labels vergeleken met de procesbeschrijvingen en het register | voldoet met bevindingen | Hoofdlijnen, parallelle gateways G-01.7/8/9, drie starts PRC-02, G-02.8, G-01.6, terugloops met max. 2 en GOV-08 kloppen. Afwijkingen: K30-03, K30-04, K30-05, K30-10 |
| 2b. Elk pad eindigt bij een einde | voldoet | Elke knoop heeft een pad naar een einde (door `build.js` getoetst en steekproefsgewijs nagelopen). Q3/Q4 zijn doodlopend getekend (K30-09) |
| 3. BPMN-notatie en legenda eerlijk en volledig | **voldoet niet** | K30-02, K30-09, K30-12 |
| 4. Leesbaarheid | voldoet met bevindingen | K30-06, K30-07 |
| 5. Tekst in kop en legenda | voldoet met opmerkingen | K30-08, K30-11, K30-13 |

Wat ik zelf nagelopen heb en wat klopt: 84 stappen, 21 beslispunten, 30 terugloops (11 + 13 + 1 + 3 + 1 + 1) en 9 vraagroutes (4 + 5); "model 0.15, Goedgekeurd, B-22" komt overeen met `register.status` (Goedgekeurd 2026-11-01, kaart cf1337ff, CHG-028, B-22); de GS-badges (GS1-4, GS9-11, GS14) komen overeen met `grill`; de HTML laadt zonder scriptfouten (jsdom) en bevat 158 klikbare knopen.

## Bevindingen

### Blokkerend

**K30-01 – blokkerend – GOV-11 ontbreekt in PRC-02 (UC2)**
- Plek: UC2, knoop `GOV-KO` (kolom 27, baan Carlo), titel "GOV-09 / GOV-03, 04, 05, 13", en het detailpaneel van die knoop (naam in `build.js`, regel met `n.key === "GOV-KO"`).
- Wat er mis is: het register noemt GOV-11 ook voor PRC-02 ("PRC-02 (bij P1 en P2 per document)"). prc-02.md zegt hetzelfde bij ACT-02.55 en bij het akkoord "GOV-09 en per profiel": "bij P1 en P2 GOV-11 per document". De knoop noemt alleen P3 (GOV-03, 04, 05, 13). In het hele SVG komt GOV-11 maar één keer voor (UC1). Een lezer die op GOV-11 zoekt, of P1/P2 volgt, ziet dat het akkoord in UC2 bestaat niet. De automatische controle ziet dit niet, omdat GOV-11 al in UC1 staat en alleen GOV-03/04/05/09/13 handmatig als "gebruikt" zijn toegevoegd.
- Bron: `data.json` gov["GOV-11"].processen; prc-02.md, tabel Activiteiten (ACT-02.55, kolom Vervolg) en tabel Beslissingen (rij "GOV-09 en per profiel").
- Voorstel: zet GOV-11 in de ID-regel en het label van `GOV-KO` ("GOV-09 / GOV-11 (P1, P2) / GOV-03, 04, 05, 13 (P3)") en in de tekst van het paneel. Laat `check()` ook per GOV controleren of het diagram elk proces uit `gov[x].processen` dekt.

**K30-02 – blokkerend – De afwijkingenlijst in de legenda is onjuist en onvolledig**
- Plek: `template.html`, alinea "Waar het afwijkt van strikte BPMN 2.0", punten (1) t/m (5), en de legenda-items over GOV.
- Wat er mis is:
  1. Punt (3) zegt dat afkeuringen via PRC-05 "in het label staan, niet als aparte aanroep". Bij GOV-15 is er wel een aparte aanroep: knoop `R15` ("PRC-05 Herziening per document"), een call activity. De bewering klopt dus niet voor het diagram zelf.
  2. Niet benoemd: `GOV-KO` voegt vijf akkoordmomenten (GOV-09, 03, 04, 05, 13) samen in één knoop. Punt (2) gaat over het tegenovergestelde (één GOV op meer plekken).
  3. Niet benoemd: PRC-03 (`GOV-X`) en PRC-05 (`GOV-08#7`) tekenen het akkoordmoment als exclusieve gateway, terwijl de legenda zegt dat een akkoordmoment een geel kader met + is. Die + betekent "aanroep van PRC-03; bij GOV-08 van PRC-05", maar GOV-08 in PRC-05 is zelf het besluit en geen aanroep.
  4. Niet benoemd: de aanroepen van PRC-06 (blokkade) zijn vervangen door notities (zie K30-04). De legenda beweert dat de "vier subprocessen UC1 en UC2 aanroepen"; PRC-06 is nergens als aanroep getekend.
  5. Niet benoemd: de baan "Carlo als ontwerper" is een tweede baan voor dezelfde rol (ROL-01). De regel "Elke baan is een rol" klopt niet voor de generieke banen Producent, Vrager, Ontvanger en Eigenaar van de taak in PRC-03 t/m PRC-06.
  6. Niet benoemd: gateways staan in de baan van de uitvoerder, niet van de beslisser (G-01.1, G-01.6 en G-02.7 beslist Carlo, G-04.52 de ontvanger). Het register zegt dat zelf bij G-01.1 en G-01.6. In het diagram zie je het niet; het paneel toont wel "Beslisser".
  7. Niet benoemd: de losse samenvoegingen zijn wel genoemd (punt 4), maar niet dat drie starts van PRC-02 via een samenvoeging naar G-02.8 gaan.
- Bron: `template.html` regel met "Waar het afwijkt"; `model.js` (R15, GOV-KO, GOV-X, GOV-08#7, notities n2, n4, n6); `data.json` dec[].beslisser.
- Voorstel: herschrijf punt (3) ("bij GOV-15 is de herziening wel een aparte aanroep van PRC-05; bij de andere akkoorden staat het in het label") en voeg toe: samengevoegd akkoord GOV-KO, akkoord als gateway in PRC-03/05, PRC-06 als notitie, banen van generieke rollen en de extra baan Carlo als ontwerper, gateways in de baan van de uitvoerder.

### Waarschuwing

**K30-03 – waarschuwing – De route van ASM-56 (revisiecontrole OpenAPI faalt) staat niet in de stromen, in UC1 helemaal niet**
- Plek: UC1 rond ACT-01.20 / GOV-06 / GOV-08#2 (niets); UC2 notitie `n5` (alleen een notitie met stippellijn vanaf ACT-02.53).
- Wat er mis is: het register en de procestekst beschrijven een echte route: geen taken, melding aan Atlas, nieuwe leesbare versie, opnieuw langs GOV-06, de tweede keer naar GOV-08. GOV-08 noemt dit expliciet als trigger "PRC-01 en PRC-02". In UC1 ontbreekt dit volledig. In UC2 staat het alleen als tekst in een notitie, zonder lijn van ACT-02.53 naar GOV-06 en naar GOV-08. De legenda noemt dit niet als vereenvoudiging. Let op: het goedgekeurde Mermaid-diagram heeft deze route ook niet, dus het diagram volgt daarin de tekening, niet het register.
- Bron: `data.json` gov["GOV-08"].processen en dec/steps ACT-02.53 (kop.escalatie), asm ASM-56; prc-01.md, rij GOV-06 en rij GOV-08; prc-02.md, rij GOV-06 en rij GOV-08.
- Voorstel: óf teken de route (ACT-02.53 -> GOV-06#2 "revisie wijkt af: nieuwe leesbare versie" en een tweede trigger naar GOV-08#4/#2), óf zet in UC1 ook een notitie en benoem in de legenda dat deze route alleen als notitie is opgenomen.

**K30-04 – waarschuwing – Aanroepen van PRC-06 (blokkade) zijn niet getekend; PRC-02 en PRC-04 verliezen daarmee stromen uit het goedgekeurde diagram**
- Plek: UC2 (notitie `n4`), PRC-04 (notitie `n6`, `assoc` vanaf ACT-04.3), UC1 (notitie `n2`).
- Wat er mis is: de Mermaid-diagrammen van PRC-02 en PRC-04 hebben een knoop "PRC-06 Blokkade" met stromen "A5 -> B6 vastgelopen" (PRC-02) en "A3 -> B6 geen reactie" en "A56 -> B6 geen reactie" (PRC-04). In het overzicht is dat een notitie. Bij ACT-04.56 is er zelfs geen verwijzing meer op de knoop zelf; de notitie hangt alleen aan ACT-04.3. PRC-06 ontbreekt als aanroep, maar de legenda en de kop zeggen niet dat dit bewust is.
- Bron: prc-02.md en prc-04.md (Mermaid-blok, regels met `B6`); prc-04.md "Uitzonderingen en loops", "Ontvanger reageert niet".
- Voorstel: teken een call activity PRC-06 in PRC-04 (stromen vanuit ACT-04.3 en ACT-04.56) en in UC2 (vanuit ACT-02.5), of noem het in de legenda als afwijking en laat de notitie naar beide stappen wijzen.

**K30-05 – waarschuwing – Na een escalatiebesluit over brieven gaat de lijn alleen naar de use-casestap**
- Plek: UC1 `GOV-08#1` -> ACT-01.9; UC2 `GOV-08#3` -> ACT-02.12 (label "besluit: via PRC-05").
- Wat er mis is: G-01.4 en G-02.5 hebben twee terugwegen (use cases en brieven), en beide kunnen na 2 rondes bij GOV-08 uitkomen. Het register en prc-05.md ("Ook voor reviews door Atlas") sturen brieven na het besluit naar ACT-01.27 en ACT-02.15. Het diagram toont alleen de use-casestap; het label "via PRC-05" zegt niet welke tak. Een lezer ziet dus een escalatie die brieven niet kan oplossen. (Het Mermaid-diagram had hetzelfde; register en tekst zijn completer.) Ook de uitkomst "stoppen of scope aanpassen" van GOV-08 staat bij UC1/UC2 nergens, zodat dat pad niet bij een einde uitkomt; alleen in PRC-05 is dat getekend.
- Bron: `data.json` dec["G-01.4"].uitkomsten en dec["G-02.5"].uitkomsten; prc-05.md "Uitzonderingen en loops", eerste punt "Ook voor reviews door Atlas".
- Voorstel: tweede lijn GOV-08#1 -> ACT-01.27 en GOV-08#3 -> ACT-02.15 (label "brieven"), en label "use cases". Zeg in de legenda dat de uitkomst "stoppen" alleen in PRC-05 staat.

**K30-06 – waarschuwing – Labels die over knopen of lijnen vallen of afgesneden zijn**
- Plek en wat te zien is:
  - `ACT-02.53 -> ACT-02.11`, label "alle controles geslaagd": het label wordt door ACT-02.11 afgedekt ("alle contr"). Dit is de hoofduitkomst van de poort.
  - `ACT-02.51 -> e0a`, label "5 of minder open" / "meer dan 5 open": het label staat tegen een verticale lijn van het weekmoment aan.
  - `ACT-06.2 -> ACT-06.4`, label "geannuleerd of geen voortgang": loopt over het eindevent "Opgelost, werk gaat verder" en over de ongelabelde lijn naar dat einde. De gewone uitkomst (ACT-06.2 -> einde) heeft geen label, naast een voorwaardelijke lijn met label; dat maakt de twee uitgangen dubbelzinnig.
  - `ACT-04.56 -> G-04.52`, label "bevestiging of aanvulling": een verticale lijn loopt er dwars doorheen.
  - Beslislabels van G-04.1 ("Wijziging van iets goedgekeurds, of productkeuze?") en G-04.51 ("2 rondes achter elkaar zonder voortgang?"): de tekst loopt tegen ACT-04.4 respectievelijk een verticale lijn en is niet volledig te lezen.
  - De bouwroutine meldt zelf al dezelfde vier overlappen ("labels die nog overlappen") en loopt toch door. Dat is een bekende restfout, maar hij staat in het resultaat dat Carlo ziet.
- Voorstel: eigen label-positie (dx, dy) per stroom in `model.js`, of de knopen een kolom verschuiven; laat `build.js` bij een overlap met exit-code 1 stoppen.

**K30-07 – waarschuwing – Gebundelde parallelle lijnen waarvan niet te zien is wat waarheen gaat**
- Plek: UC1 ingang van `GOV-11` (drie lijnen van ACT-01.24, ACT-01.60 en ACT-01.59 op 3 tot 6 px afstand naast elkaar, kolom 31) en het rechter deel van UC2 rond `ACT-02.53`, `ACT-02.9`, `ACT-02.11` (kolom 31-33, drie terugloops, twee vraagroutes en de GOV-08#4-routes lopen in één corridor).
- Wat er mis is: de lijnen zijn niet te volgen zonder de knoop aan te klikken. Daarmee is het diagram op papier of in "Passend" (alles in beeld) op deze plekken niet te lezen.
- Voorstel: laat de drie profielroutes in UC1 samenkomen in een samenvoeging vóór GOV-11, en spreid in UC2 de terugloops van ACT-02.53 over meer corridors.

**K30-08 – waarschuwing – "20 akkoordknopen" in de kop komt niet overeen met de 15 akkoorden van het register**
- Plek: `template.html`, kop ("{{N_GOV}} akkoordknopen"), berekend in `build.js` (`cnt.gov`).
- Wat er mis is: het register heeft 15 GOV's (GOV-01 t/m GOV-15). De 20 is het aantal knopen: GOV-08 komt 8 keer voor, GOV-06 twee keer, GOV-KO is één knoop voor vijf GOV's, en de generieke "GOV" in PRC-03 telt ook mee. Carlo leest 20 naast het register met 15. UC1 heeft ook "4 akkoorden" (plus GOV-08, dat in prc-01.md "geen akkoord" heet), maar de teller telt GOV-08 mee.
- Voorstel: schrijf "15 akkoordmomenten (20 knopen, omdat sommige op meer plekken staan)" en neem de definitie ("akkoordknoop = een knoop met een GOV-ID of de generieke GOV van PRC-03") op in de legenda.

### Opmerking

**K30-09 – opmerking – Vraagroutes en aanroepen van PRC-04 zijn niet uniform getekend en keren niet zichtbaar terug**
- Plek: `Q3` (UC2), `Q4` (UC1) en alle `msg`-stromen.
- Wat er mis is: sommige vraagroutes gaan naar een call activity PRC-04 (Q3/Q4, zonder uitgaande stroom), andere rechtstreeks naar de antwoordende stap (ACT-01.23 -> ACT-01.3; ACT-02.13 -> ACT-02.3; ACT-01.58 -> ACT-01.28; ACT-02.11 -> ACT-02.9). Q3/Q4 hebben geen uitgang (de uitkomst van GOV-12: akkoord of afgewezen), dus ze zien er doodlopend uit; "keert terug" staat alleen in de legenda. `build.js` neemt Q3/Q4 expliciet uit van de controle op uitgang en bereikbaarheid. Dit is binnen de legenda-afwijking (1), maar de ongelijke tekening is niet benoemd.
- Voorstel: noem in de legenda dat Q3/Q4 voor de GOV-12-route staan en de andere vraagroutes rechtstreeks naar de antwoordende stap gaan.

**K30-10 – opmerking – Afkeurroutes zijn vereenvoudigd tot één doelknoop**
- Plek: `GOV-10 -> ACT-01.6`, `GOV-06 -> ACT-01.16` (UC1), `GOV-02 -> ACT-02.12`, `GOV-14 -> ACT-02.16`, `GOV-06#2 -> ACT-02.8`, `GOV-11 -> m-01.6`.
- Wat er mis is: het register noemt per document andere doelen (GOV-10: ACT-01.6, 01.26, 01.9, 01.27, 01.54 en opnieuw 01.23; GOV-06 UC1: ACT-01.17, 01.16 of 01.18; GOV-14: ook ACT-02.56; GOV-02: ook ACT-02.15; GOV-11: de eigen activiteit). Het label zegt "per document" of "per onderdeel", dus het is niet onwaar, en het goedgekeurde Mermaid doet hetzelfde. Wel kiest het diagram één voorbeeldtarget, bij GOV-06 UC1 zelfs ACT-01.16 (inhoud slice 1) en niet het contract (ACT-01.17).
- Voorstel: zeg in de legenda dat een afkeurlijn naar het eerste/gangbare doel loopt en dat het label "per document" geldt, of teken de lijnen naar de overige doelen.

**K30-11 – opmerking – Kop en legenda**
- Alle genoemde tellingen en statussen zijn juist (zie boven). Opmerkingen: (a) "CHG-030" staat nog niet in het register of in `wijzigingen.md`; het is alleen als vrij ID gereserveerd (`uitbreidingsgids.md`, §6). Leg hem vast bij indiening. (b) "Versie 0.1" naast "model 0.15" is verwarrend voor wie de weergaveversie niet kent; leg uit dat 0.1 de versie van dit diagram is. (c) De datum 2026-11-01 staat hard in `build.js`; de controle is op 2026-11-02 gedaan. (d) De legenda zegt dat de vier subprocessen "UC1 en UC2 aanroepen"; PRC-06 is niet als aanroep getekend (K30-04).

**K30-12 – opmerking – Overige notatiepunten**
- ACT-02.51 heeft twee voorwaardelijke uitgangen zonder default-stroom; de ruitjes (conditional markers) zitten op één punt over elkaar. Dit is acceptabel BPMN, maar de legenda toont het symbool alleen voor "voorwaardelijke route".
- G-01.8 is een gecombineerde samenvoeging en splitsing (gemengde parallelle gateway), conform het register; niet apart toegelicht.
- ACT-01.4/01.5/01.21/01.22 ("vragenkaart", "antwoorden") zijn gewone stromen; in het goedgekeurde Mermaid zijn het berichtstromen. Dat is beter BPMN, maar het is een afwijking van de bron die niet benoemd is.
- Het label "vraag aan Carlo (elke stap van Atlas)" zit alleen aan ACT-01.11; de andere stappen van Atlas hebben die lijn niet. Zo staat het ook in de bron, maar het label belooft meer dan er getekend is.
- De pijl "→" in de eindlabels "Afgekeurd → PRC-05" en "Opnieuw ter goedkeuring → PRC-03" werd in mijn render (alleen het lettertype KaTeX) als vreemd teken getoond. In een browser met een normaal lettertype waarschijnlijk niet; niet te beoordelen.
- G-02.8 "ja": het register noemt ook de handeling "Dr. Evil zet de gevraagde wens bovenaan de uitbreidingslijst en meldt dat"; het einde "Geen tweede start" toont die niet.
- G-01.4 "brieven (max. 2)": het register zegt "brieven of paginalijst".

**K30-13 – opmerking – Beperking van de automatische controle**
- `check()` vergelijkt de stromen met het Mermaid-blok van dezelfde procesbeschrijving, dus een fout die ook in de Mermaid-tekening zit (K30-03, K30-05) wordt niet gevonden. Labels worden niet vergeleken met de kolom Uitkomsten. Bij de GOV's wordt alleen op bestaan getoetst, niet op de plekken per proces (K30-01). Q3/Q4 zijn uitgezonderd van de ingang- en uitgangscontrole. Overlappende labels worden gemeld, maar breken de bouw niet af.

## Niet te beoordelen
- Weergave en gedrag in de browser (zoomen, klikken, zoeken, donkere modus, afdrukken): alleen de HTML-laadtest in jsdom (geen fouten) en PNG-weergaven; geen echte browser.
- Of Paperclip de beschreven routes feitelijk zo uitvoert: buiten de scope van een weergave.

## Samenvatting
- Blokkerend: 2 (K30-01, K30-02).
- Waarschuwing: 6 (K30-03 t/m K30-08).
- Opmerking: 5 (K30-09 t/m K30-13).

## Conclusie

**Niet indienen.** Twee blokkerende punten: GOV-11 ontbreekt in PRC-02, en de afwijkingenlijst in de legenda is niet eerlijk en volledig (onder meer punt 3 spreekt het diagram tegen). Beide zijn snel te herstellen. De inhoud van het model wordt voor het overige juist weergegeven: elke stap en elk beslispunt staat er precies één keer, in de juiste baan, en de tellingen en statussen in de kop kloppen. Dien opnieuw in na herstel van K30-01 en K30-02; de waarschuwingen K30-03 t/m K30-08 bij voorkeur ook, of leg per punt vast dat Carlo ze bewust accepteert.

---

# Hercontrole

Datum: 2026-11-02. Opnieuw beoordeeld: `model.js`, `build.js`, `template.html`, de opnieuw gebouwde `overzichtsdiagram.html` en `.svg` (`node overzicht/build.js`: 0 fouten, 84 stappen, 21 beslispunten, 21 knopen voor 15 akkoordmomenten, 35 terugloops, 9 vraagroutes), de nieuwe afbeeldingen in `/tmp/ovr/` en eigen uitsneden uit het nieuwe SVG. De HTML laadt in jsdom zonder scriptfouten; de detailpanelen van `GOV-KO`, `GOV-15`, `Q3` en `GOV-08#9` zijn nagelopen.
De tellingen in de kop zijn nagerekend: 35 terugloops = 30 + 5 nieuwe (ACT-01.20 -> GOV-06, GOV-08#9 -> ACT-01.20, GOV-08#1 -> ACT-01.27, ACT-02.53 -> GOV-06#2, GOV-08#3 -> ACT-02.15); 21 knopen = 20 + GOV-08#9.

## Status per bevinding

| ID | Eerder | Nu | Toelichting |
| --- | --- | --- | --- |
| K30-01 | blokkerend | **opgelost** | `GOV-KO` heet "GOV-09 / 11 / 03, 04, 05, 13"; paneel noemt GOV-11 voor P1 en P2. GOV-15 draagt GOV-09 ("Bevat ook"). `build.js` toetst nu per GOV of elk proces uit `gov[x].processen` gedekt is (regels 173-176, met `covers`). Q3/Q4 dekken GOV-12 |
| K30-02 | blokkerend | **opgelost** | De lijst in `template.html` heeft nu 11 punten en klopt met het diagram: R15 als uitzondering (punt 4), samengevoegde akkoorden (3), akkoord als ruit in PRC-03/05 (5), PRC-06 als notitie (6), extra baan Carlo en generieke banen (7), gateway in de baan van de vraag (8), samenvoegingen (9), vragenkaart als volgorde (10), Q3/Q4 zonder uitgang (1). Ik vond niets in het diagram dat nog onbenoemd afwijkt, behalve de kleine punten K30-12 (voorwaardelijke uitgangen zonder default, gemengde gateway G-01.8), die opmerkingen waren |
| K30-03 | waarschuwing | **opgelost** | ASM-56 is getekend: UC1 ACT-01.20 -> GOV-06 (terugloop) en ACT-01.20 -> GOV-08#9 -> ACT-01.20 ("taken pas als de revisie klopt"); UC2 ACT-02.53 -> GOV-06#2 en de lijn naar GOV-08#4 draagt "of revisie 2e keer fout". Notitie n5 is weg. Zie wel K30-14 |
| K30-04 | waarschuwing | **opgelost** | PRC-06 is niet als aanroep getekend maar nu eerlijk benoemd: legenda punt 6 en de notities n2, n4 ("niet als lijn getekend"). In PRC-04 wijst de notitie nu naar ACT-04.3 én ACT-04.56. Kleinigheid: de lijn ACT-04.56 -> n6 staat twee keer in `model.js` (zie K30-15) |
| K30-05 | waarschuwing | **opgelost** | Extra lijnen GOV-08#1 -> ACT-01.27 en GOV-08#3 -> ACT-02.15 ("besluit: brieven, via PRC-05"); "use cases" staat nu ook in het label van de andere lijn. De uitkomst "stoppen of scope aanpassen" staat alleen in PRC-05, en dat is in legenda punt 4 benoemd |
| K30-06 | waarschuwing | **deels** | Opgelost: "alle controles geslaagd" is nu "geslaagd" en niet meer afgedekt; ACT-04.56 -> G-04.52 en G-04.51 zijn leesbaar; ACT-06.2 -> einde heeft het label "opgelost" en het label "geannuleerd of geen voortgang" ligt niet meer over het einde; gateway-labels hebben een achtergrond. Niet opgelost: (a) UC2 `ACT-02.51`: de labels "5 of minder open" en "meer dan 5 open" staan boven elkaar tegen het ruitje aan en worden gekruist door drie verticale lijnen (weekmoment, verzoek, "Geen start"); niet te zien welk label bij welke lijn hoort. (b) PRC-04 `G-04.1`: de tweede regel van het label ("goedgekeurds, of productkeuze?") loopt onder de rand van ACT-04.4 en is afgesneden. (c) `build.js` meldt nu 0 overlappen, maar het controleert gateway-labels niet tegen knopen en geen lijnen door labels; die "0" zegt dus minder dan het lijkt (K30-16) |
| K30-07 | waarschuwing | **deels** | UC1: opgelost, de drie profielroutes komen samen in een samenvoeging `m-11` vóór GOV-11. UC2 rechts (corridor rond ACT-02.53 / ACT-02.9 / ACT-02.11, kolom 31-33): nog steeds vier terugloop- en vraaglijnen op 4 tot 6 px afstand naast elkaar; de ene kolom extra ruimte lost dat niet op |
| K30-08 | waarschuwing | **opgelost** | Kop: "alle 15 akkoordmomenten (GOV-01 t/m GOV-15, in 21 knopen omdat sommige op meer plekken staan of samen in één knoop)". Klopt met het register |
| K30-09 | opmerking | **opgelost** | Legenda punt 1 legt uit dat Q3/Q4 geen eigen uitgang hebben en de andere vraagroutes rechtstreeks naar de antwoordende stap gaan |
| K30-10 | opmerking | **opgelost** | Legenda punt 4: "de lijn loopt naar de eerste of meest gebruikte stap; per document betekent dat elk document naar zijn eigen maker gaat" |
| K30-11 | opmerking | **opgelost** | Kop legt uit dat "versie 0.1" de versie van het diagram is, niet van het model; datum is 2026-11-02. CHG-030 staat nog niet in het register; leg hem vast bij indiening (bekende, aanvaarde stand) |
| K30-12 | opmerking | **deels** | G-02.8 en G-01.4 hebben nu de volledige tekst ("bij een verzoek: wens bovenaan de lijst", "brieven of paginalijst"); vragenkaart als volgorde staat in de legenda. "elke stap van Atlas" bij ACT-01.11 en het pijlteken "→" in eindlabels zijn ongewijzigd; geen bezwaar |
| K30-13 | opmerking | **deels** | `check()` toetst nu de GOV's per proces. De beperkingen dat Mermaid-fouten niet worden gevonden en dat labels niet worden vergeleken met de kolom Uitkomsten blijven (inherent aan de opzet) |

## Nieuwe punten

**K30-14 – opmerking – ASM-56-lussen slaan de stap van Atlas over; label GOV-08#4 is dubbelzinnig**
- Plek: UC1 `ACT-01.20 -> GOV-06`; UC2 `ACT-02.53 -> GOV-06#2` en `GOV-08#4 -> ACT-02.11` ("besluit: door").
- Wat: in ASM-56 maakt Atlas eerst een nieuwe leesbare versie (ACT-01.17 / ACT-02.8) en gaat de slice daarna opnieuw langs GOV-06. De lijn gaat rechtstreeks naar GOV-06; dat staat wel in het label ("nieuwe leesbare versie"). Bij GOV-08#4 geldt "door naar ACT-02.11" voor controle 1, maar bij de tweede mislukte revisiecontrole maakt Dr. Evil pas taken als de revisie klopt (`data.json` gov["GOV-08"].bij_goedkeuring). Het label "besluit: door" kan dus verkeerd gelezen worden.
- Voorstel: label "besluit: door (bij revisie: pas als die klopt)", of een korte toelichting in het paneel van GOV-08#4. Geen blokkade.

**K30-15 – opmerking – Dubbele lijn in `model.js`**
- Plek: `model.js`, PRC-04, `["ACT-04.56", "n6", "assoc"]` staat twee keer.
- Voorstel: één regel verwijderen. Zichtbaar effect: geen (twee gelijke stippellijnen op elkaar).

**K30-16 – opmerking – De automatische labelcontrole is te beperkt voor de claim "0 overlappen"**
- Plek: `build.js`, labelplaatsing (`hitsAny`, `NODEBOX`).
- Wat: gateway-labels worden alleen gecontroleerd tegen vaste vakken; lijnen die door een label lopen worden niet gemeld. Daardoor missen K30-06(a) en (b) de controle terwijl de bouw "0 fouten" meldt.
- Voorstel: neem gateway-labels en lijnsegmenten op in de controle, of leg in de kop van `build.js` vast wat niet gecontroleerd wordt.

## Aantallen na hercontrole

- Blokkerend: 0 (K30-01 en K30-02 opgelost).
- Waarschuwing: 2 open, deels opgelost (K30-06, K30-07); K30-03, K30-04, K30-05 en K30-08 zijn opgelost.
- Opmerking: K30-14, K30-15, K30-16 nieuw; K30-12 en K30-13 deels; de rest opgelost.

## Conclusie hercontrole

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen meer: elk akkoordmoment staat op alle plekken van het register (ook GOV-11 in PRC-02), de route van ASM-56 is getekend, en de legenda noemt nu alle afwijkingen die ik vond. Open blijven twee leesbaarheidspunten (de labels bij ACT-02.51 en G-04.1, en de gebundelde lijnen rechts in UC2). Zeg bij indiening dat die bekend zijn, of herstel ze eerst; ze veranderen niets aan de inhoud van het model.

Niet te beoordelen: weergave in een echte browser en in de donkere modus (alleen jsdom en PNG-weergaven).
