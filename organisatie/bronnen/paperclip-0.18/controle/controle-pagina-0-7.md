# Controle pagina 0.7 (WEB-19, CHG-027 – weergaven van model 0.14)

| | |
| --- | --- |
| **Status** | **Niet indienen** (1 blokkerende bevinding, P7-01; de rest is waarschuwing of opmerking) |
| Datum | 2026-10-31 |
| Door | onafhankelijke controle-agent, in opdracht van Socrates (business analist) |
| Gecontroleerd | `organisatie/eindontwerp/organisatiemodel-0.7.html` (gelijk aan `organisatiemodel.html`, 1.293.577 bytes) tegen register 0.14 (`v14/over/api/register.md`, JSON `/tmp/r14.json`), pagina 0.6 (`organisatiemodel-0.6.html`), SPEC-CHG-027 sectie E, `werk/prc-01.md` (legenda), `VOORTGANG.md` (sectie 0.7) en `werk/_meldingen-E.md`. Methode: pagina geladen met jsdom (0 fouten); `DATA` van 0.6 en 0.7 vergeleken met elkaar en met het register; tekst van beide pagina's gediffd; `build/check.js` gedraaid (1330 controles, 0 fouten, alleen lezen); panelen van G-01.1, G-02.7, G-04.1, ACT-04.55 en ACT-02.53 geopend; PNG's in `/tmp/render-0.7` vergeleken met `/tmp/render-0.6` (32 van 33 byte-gelijk; `landschap.png` en `PRC-04_standaard.png` bekeken). |
| Niet te toetsen | De volledige klikproef (`build/klikproef.js`, ~10 min) heb ik niet opnieuw gedraaid; ik vertrouw op de melding van de bouwer (227 routecombinaties, 0 fouten) en op mijn eigen steekproef. Weergave in een echte browser (lettertypen, kleurcontrast, tikken op een telefoon, tooltips) is niet getoetst. Of de tekst voor Carlo helder genoeg is, is een oordeel; ik meld alleen wat ik kon aanwijzen. De inhoud van het register zelf (bijvoorbeeld de woorden "uitvoerder" in ASM-42) is niet beoordeeld; de pagina volgt het register. Of complain en suggestion-box echt zo werken, is niet vast te stellen (OPEN-11). |

## Resultaat per check

| # | Check | Resultaat | Bewijs |
| --- | --- | --- | --- |
| 1a | Beslisser bij elk van de 21 G (paneel en tabel Beslispunten) | voldoet | `DATA.dec[G].beslisser` gelijk aan `beslissingen[].beslisser` voor alle 21 (0 verschillen). Tabel *Beslispunten (G)* in sectie 2 heeft 21 rijen met de kolommen ID, Naam, Proces, Vraag, Uitkomsten, Beslisser, Label. Panelen van G-01.1, G-02.7 en G-04.1 tonen kop Beslisser met de tekst van het register. De drie parallelle G (G-01.7, 01.8, 01.9) tonen n.v.t. |
| 1b | ASM-56/57/58 bij ACT-01.20, ACT-02.53, GOV-06 en ACT-04.55 | voldoet, met P7-01 | Noten in `DATA.procs` bij ACT-01.20 (PRC-01), GOV-06 (PRC-01 en PRC-02), ACT-02.53 (PRC-02) en ACT-04.55 (PRC-04); tekst volgt ASM-56, ASM-57 en ASM-58 en de `opm`/`escalatie` van de koppelingen. Alleen tekst, geen nieuwe knoop. In de noot van ACT-02.53 staat een verwijzing die verkeerd leest (P7-01). |
| 1c | ACT-02.6: ROL-01 als C bij GS14 | voldoet | Paneelkop van ACT-02.6: Geraadpleegd (C) = "ROL-01 (alleen bij GS14 …)"; noot "Wijziging in 0.14: CHG-026 (A-6)" |
| 1d | ROL-04 `uit` met OpenAPI-bestand en leesbare versie | voldoet | `DATA.rollen` gelijk aan `rollen` in het register (ROL-04 `uit`); noot "CHG-026 (A-2)" staat bij de rol; tekst in sectie 2 noemt het ook |
| 1e | 41 skills, complain en suggestion-box (geen stap) | voldoet | `DATA.skills` = 41 en gelijk aan het register op `status_in_model`, `dekking` en `grill_sessie` (0 verschillen). Skilltabel heeft 41 rijen; beide skills: "beschikbaar, niet vereist", Feit, gekoppeld aan Dr. Evil, Socrates, Atlas, "nieuw in 0.14". Sectie 8: "30 bestaande skills, 11 nieuwe" (register: 30 met sleutel, 11 zonder). De drie andere skills van Atlas (para-memory-files, first-task, improve-codebase-architecture) staan als "niet in het register" |
| 1f | ASM-56 t/m ASM-59 bevestigd; ASM-36 nieuwe tekst | voldoet | `DATA.asm` gelijk aan het register (54 aannames, 0 verschillen op tekst en bevestigd); ASM-56..59 "bevestigd, kaart e9c7f866"; ASM-36 met noot "CHG-026 (A-1)" en de tekst over to-tickets gelijk aan ASM-44 |
| 1g | OPEN-10 alleen het antwoord | voldoet | `DATA.open` gelijk aan het register (15 vragen); OPEN-10 toont alleen `beantwoord` (B-14) en de noot over A-12 |
| 1h | s3(c) tot en met B-20 | voldoet | "(c) Wat je koos (B-08 t/m B-20)", "Model 0.14 is Goedgekeurd (… kaart e9c7f866, besluit B-20)", en een regel "Stand 0.14" |
| 1i | wijziging_0_14-noten | voldoet, met P7-05 | 44 velden `wijziging_0_14` in het register; de noten bij rollen, koppelingen, beslissingen, skills (skill-niveau), aannames, open vragen en processen staan op de pagina. De noten die in het register op `dekking`-niveau staan (6 skills, A-4) staan niet in de skilltabel; de inhoud staat wel in sectie 8 (P7-05) |
| 2 | Tellingen 84/21/15, 17/23/35/9, UC1 4 akkoorden | voldoet | Register-tool `v08/tools/check.js`: 84 / 84 koppelingen / 21 / 15, telling 17/23/35/9. Pagina: elke ACT 84 keer (RACI, lanes, matrix: 84 unieke rijen per tabel), 15 GOV unieke rijen, 21 G. `check.js`: "UC1: 4 akkoorden (GOV-10, GOV-15, GOV-11, GOV-06)". Sectie 8: "aanwezig 17, gedeeltelijk 23, ontbreekt 35, n.v.t. 9" |
| 3 | Geen nieuwe knopen of pijlen t/m 0.6 | voldoet | `DATA.procs` van 0.6 en 0.7 vergeleken per proces: dezelfde sleutels, dezelfde items (50/41/9/22/12/11) in dezelfde volgorde, dezelfde eigenschappen; alleen `note` verschilt bij GOV-06, ACT-01.20, ACT-02.53, ACT-04.55 en status/versie van PRC-04. 32 van 33 PNG's byte-gelijk aan 0.6; alleen het landschap verschilt (label PRC-04 "v0.14") |
| 4 | Legenda gelijk aan `werk/prc-01.md` | voldoet | Tekst van de regel "Wat de codes betekenen" (na weghalen van opmaak) is gelijk aan prc-01.md, ook K en de lokale codes (A-1, B-2, C-5), V1..V5, D1..D3, GK-1..GK-4. Op de pagina volgt één extra zin ("Op deze pagina staat de korte naam bij elke code …"); die stond ook in 0.6 (P7-06) |
| 5 | Statusteksten | voldoet | "Pagina 0.7: Concept, … model 0.14 (B-20, kaart e9c7f866) (CHG-027 – weergaven van model 0.14)"; "Model 0.14: Goedgekeurd (2026-10-31, Carlo, kaart e9c7f866; CHG-026; B-20)" gelijk aan `meta.status`; "Vorige: pagina 0.6 op model 0.13 (Goedgekeurd, kaart ea488144, CHG-025 …)"; titel, voet en `DATA.pagina` (0.7, 2026-10-31, Concept, CHG-027, vorige 0.6) kloppen. Procestabel: PRC-04 0.14 (e9c7f866), PRC-01/02 0.13, PRC-03 0.12, PRC-05 0.10, PRC-06 0.3, gelijk aan `processen` |
| 6 | Geen verzonnen feiten; labels | voldoet, met P7-02 en P7-03 | Alle 21 beslissers, de 4 aannames en de skills zijn gelijk aan het register. Het aantal "afgeleid, nog niet besloten" daalde van 15 naar 7 (de rest is terecht: onder meer de nieuwe `afgeleid`-regels in §4 over controle 1 en 2). ASM-56..59 tonen "Aanname, bevestigd". Zie P7-02 voor één label en P7-03 voor een afgeleide zin |
| 7 | Korte namen bij codes | voldoet | `DATA.namen` heeft B-20, CHG-025, CHG-026, CHG-027, ASM-56..59, GS14 enz.; alleen de lokale codes (A-1, B-1..B-4), de vrije ID's uit gids §6 en samengevoegde celtekst missen een naam. Aandeel codes zonder tooltip: 335 van 12.142 (0.6: 306 van 11.265), vooral in SVG-titels en de lijst vrije ID's; gelijk aan 0.6 |
| 8 | Taal Nederlands en begrijpelijk | voldoet, met P7-04 | Geen Engelse zinnen in de nieuwe tekst; geen "ter bevestiging", geen `SKL-xx` als skillnummer (de twee treffers zijn de zin dat er geen SKL-nummer meer komt, ook in 0.6), geen `undefined` of `NaN`. Zie P7-04 |
| Skill | Elk ACT/GOV precies één keer | voldoet | `DATA.steps`, `DATA.gov` en `DATA.dec` zijn gelijk aan de ID's in het register; `check.js` bevestigt de plek in de lanes |
| Skill | Status, versie en skillstatus gelijk aan register | voldoet | zie 5, 2 en 1e |
| Skill | Artifact laadt zonder fouten | voldoet | jsdom: 0 fouten, geen externe links, één bestand |

## Bevindingen

| ID | Ernst | Plek | Wat | Voorstel |
| --- | --- | --- | --- | --- |
| P7-01 | blokkerend | Paneel van ACT-02.53 (PRC-02), tekst uit `build/layout.js` (noot bij ACT-02.53) | De noot zet de nieuwe zinnen over de revisiecontrole direct na de zin over controle 4: "Controle 4 (flowlimieten): wachten tot er ruimte is; dat telt niet als ronde (ASM-22). **Faalt die controle**: Dr. Evil maakt geen taken voor die slice en meldt het aan Atlas …". "Die controle" verwijst nu naar de flowlimieten. Het register zegt het anders: bij controle 4 wacht Dr. Evil (vervolg van ACT-02.53: "bij (4) wachten tot er ruimte is"); alleen een afwijkende revisie van het OpenAPI-bestand geeft "geen taken, melding aan Atlas, opnieuw GOV-06" (ASM-56; `escalatie` en `opm` van de koppeling). Het paneel spreekt zichzelf dus tegen. Bij ACT-01.20 speelt dit niet. | Begin de zin met "Faalt de revisiecontrole van het OpenAPI-bestand:" (of zet de OpenAPI-zinnen vóór de zin over controle 4) en bouw opnieuw: `node build/build.js && node build/check.js && cp organisatiemodel.html organisatiemodel-0.7.html`. Voeg in `check.js` of de klikproef een controle toe dat "flowlimieten" en "geen taken" niet in dezelfde zin staan. |
| P7-02 | waarschuwing | Sectie 1, punt "Onder menselijke controle", label | De tekst is aangevuld met twee 0.14-zinnen die op aannames rusten: G-02.7 beslist Carlo (ASM-59) en een slice met een afwijkende revisie gaat altijd opnieuw langs GOV-06 (ASM-56). Het label bij het punt is "Besloten / Feit" gebleven. Elders op de pagina krijgt wat op ASM steunt het label "Aanname (ASM-x, bevestigd)". | Voeg het label toe: "Aanname (ASM-56, ASM-59, bevestigd in B-20)", zoals bij andere punten. |
| P7-03 | opmerking | Sectie 4 (verantwoordelijkheden, rij over het OpenAPI-bestand) en `werk/verantwoordelijkheden.md` | "Jouw kaart vervalt met de oude leesbare versie" staat na de ASM-56-route zonder label. Het volgt uit ASM-53 (kaart vervalt als Atlas de leesbare versie opnieuw maakt), niet uit ASM-56 zelf. In de noot bij ACT-01.20 staat die verwijzing niet. | Geen blokkade. Zet "(ASM-53)" achter de zin, of maak in `verantwoordelijkheden.md` duidelijk dat het uit ASM-53 volgt. Dit hoort bij de maker van dat document (C). |
| P7-04 | opmerking | Panelen van ACT-01.20 en ACT-02.53; label-kolom van de tabel Beslispunten | Twee punten die voor Carlo ruis zijn: (a) de panelen eindigen met "dit is tekst, geen nieuwe stap in het schema", een opmerking voor de bouwer; (b) de noten bij elke G zeggen "CHG-026 (B-4): beslisser vastgelegd …": "B-4" is een lokale gatcode, geen besluit. De legenda legt dat uit, maar de naam staat niet bij de code. In ASM-57 en §4 heet de OpenAPI-revisiecontrole "controle 2", terwijl "controle 2" bij ACT-02.53 een andere controle is (geen nieuwe eis of scope); dat staat zo in het register. | Haal (a) uit de paneeltekst. Voor (b) en de dubbele "controle 2": alleen noteren; wijzigen kan alleen in het register (Socrates). |
| P7-05 | opmerking | Skilltabel in sectie 8 | De `wijziging_0_14`-noten op `dekking`-niveau bij de zes skills uit A-4 (uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram, architect-database, architect-implementation-plan, vragen-en-akkoordrondes) staan niet in de skilltabel. Dekking-noten van eerdere versies worden daar ook niet getoond, dus dit is gelijk aan 0.6. De inhoud van A-4 staat wel in de tekst van sectie 8 (agent- en activiteitmatrix, skill-specificaties). | Geen actie nodig; ter kennisgeving. Wil Socrates de noten toch tonen, dan moet `build.js` ze meenemen. |
| P7-06 | opmerking | Legenda bovenaan de pagina | De legenda is gelijk aan prc-01.md maar eindigt op de pagina met één extra zin over wijzen/tikken op een code. Die zin stond in 0.6 ook en is bedoeld. | Geen actie. |
| P7-07 | opmerking | `werk/_meldingen-E.md`, E-1 | E-1 zegt dat het register geen `korte_namen` heeft voor B-20, CHG-025, CHG-026, CHG-027 en ASM-56 t/m ASM-59. In het register (`api/register.md` en `/tmp/r14.json`, beide 22:55) staan ze wel; alleen CHG-027 ontbreekt. De pagina is goed: ze neemt de naam uit het register en het JSON-bestand. | Pas de melding aan (alleen CHG-027 ontbreekt in het register). |
| P7-08 | opmerking | Paneel van ACT-04.55 en aannametabel ASM-42 | Het paneel zegt "het issue waarop de vrager zijn stap doet"; ASM-42 in de tabel zegt nog "uitvoerder". Dat is melding E-6 en een gat in het register zelf. De pagina volgt het register terecht. | Geen actie voor de pagina; Socrates kan ASM-42 in het register gelijktrekken. |

## Samenvatting voor de maker

Alles uit "Inhoud 0.14" staat op de pagina en klopt met het register, met één uitzondering: P7-01 (ACT-02.53 spreekt zichzelf tegen over wat er gebeurt bij controle 4). De diagrammen zijn ongewijzigd (items en PNG's gelijk aan 0.6). Na herstel van P7-01 (en bij voorkeur P7-02) en opnieuw bouwen, `check.js` draaien en kopiëren naar `organisatiemodel-0.7.html` kan de pagina worden ingediend, voor zover ik dat kon toetsen.

## Herstel door Socrates (2026-10-31, na de controle)

| Punt | Herstel |
| --- | --- |
| P7-01 | Paneel ACT-02.53 (`layout.js`): de zin begint nu met "Faalt de revisiecontrole van het OpenAPI-bestand (ASM-52):", zodat hij niet meer bij controle 4 (flowlimieten) lijkt te horen. Ook bij ACT-01.20 staat nu "Faalt de revisiecontrole". |
| P7-02 | Sectie 1, "Onder menselijke controle" (uit `organisatie`): label "Besloten / Feit; Aanname (ASM-56, ASM-59, bevestigd in B-20)". |
| P7-03 | `verantwoordelijkheden`: "(ASM-53 – plek van bestand en leesbare versie)" achter de zin over de kaart die vervalt. |
| P7-04 (a) | "dit is tekst, geen nieuwe stap in het schema" uit beide panelen gehaald. (b) en de dubbele "controle 2" staan zo in het register; niet aangepast. |
| P7-05 t/m P7-08 | Niet aangepast (opmerkingen; volgen het register of stonden zo in 0.6). |

Na het herstel is de pagina opnieuw gebouwd: `check.js` 1330 controles, 0 fouten; daarna volgde een hercontrole door een aparte agent (hieronder). Na de hercontrole is de klikproef op de herstelde pagina gedraaid: 227 routecombinaties, 15.910 acties, 40 verschillende loops, 0 fouten (2026-10-31/11-01).

## Hercontrole (aparte agent)

| | |
| --- | --- |
| Datum | 2026-10-31 |
| Door | aparte controle-agent (niet de bouwer, niet Socrates), alleen lezen |
| Gecontroleerd | `organisatie/eindontwerp/organisatiemodel.html` (1.293.624 bytes, 23:41) tegen `organisatiemodel-0.7.html` (de eerder gecontroleerde versie), `build/layout.js`, `v14/over/werk/organisatie.md`, `v14/over/werk/verantwoordelijkheden.md` en het register `/tmp/r14.json` (koppelingen ACT-01.20 en ACT-02.53; ASM-22, ASM-52, ASM-56, ASM-57). |
| Methode | Pagina met jsdom geladen (0 fouten). `DATA` van de oude en de nieuwe pagina veld voor veld vergeleken, en de HTML regel voor regel gediffd. De panelen van ACT-01.20 (PRC-01), ACT-02.53 (PRC-02) en GOV-06 echt geopend (klik in het schema) en gelezen. `build/check.js` gedraaid (alleen lezen). De bouw zelf en de klikproef heb ik niet opnieuw gedraaid. |

### Per punt

| Punt | Opgelost? | Bewijs |
| --- | --- | --- |
| P7-01 (blokkerend) | **Ja** | Paneel ACT-02.53: "Controle 4 (flowlimieten): wachten tot er ruimte is; dat telt niet als ronde (ASM-22). **Faalt de revisiecontrole van het OpenAPI-bestand (ASM-52):** Dr. Evil maakt geen taken voor die slice en meldt het aan Atlas …". De zin hoort nu ondubbelzinnig bij de revisiecontrole; flowlimieten en "geen taken" staan niet meer in één zin. Dit klopt met het register: ASM-22 (controle 4 wacht, geen ronde), ASM-52 (revisiecontrole in ACT-01.20 en ACT-02.53), ASM-56 (geen taken, melding aan Atlas, nieuwe leesbare versie, opnieuw GOV-06, tweede keer GOV-08) en ASM-57 (geen tweede inhoudelijke controle). Ook bij ACT-01.20 staat nu "Faalt de revisiecontrole:". De tekst van beide panelen komt overeen met `opm` en `escalatie` van de koppelingen ACT-01.20 en ACT-02.53. Verder bevat de ACT-02.53-tekst geen enkele andere tegenstrijdigheid met ASM-22 (de rest van het paneel, zoals "bij (4) wachten tot er ruimte is, zonder maximum", is ongewijzigd). |
| P7-02 | **Ja** | Sectie 1, "Onder menselijke controle", label is nu "Besloten / Feit; Aanname (ASM-56, ASM-59, bevestigd in B-20)". Bron `organisatie.md` heeft dezelfde tekst; ASM-56 en ASM-59 zijn in het register "bevestigd, kaart e9c7f866". |
| P7-03 | **Ja** | Sectie 4, rij over de revisiecontrole: "jouw kaart vervalt met de oude leesbare versie (ASM-53 – plek van bestand en leesbare versie)". Bron `verantwoordelijkheden.md` heeft dezelfde tekst. |
| P7-04(a) | **Ja** | "dit is tekst, geen nieuwe stap in het schema" staat niet meer in de panelen (0 treffers op de pagina, de zin staat ook niet meer in `build/layout.js`). De zin "Er komt geen nieuw punt bij en geen nieuwe stap" in de statustekst van sectie 1 is een andere, bedoelde zin en blijft staan. |

### Is er iets anders kapot gegaan?

Nee. Het verschil tussen de eerder gecontroleerde pagina en de nieuwe is precies vijf plekken: (1) het label bij "Onder menselijke controle", (2) de ASM-53-toevoeging in sectie 4, (3) de noot van ACT-01.20, (4) de noot van ACT-02.53 en (5) de lengte van de pagina (+47 bytes), die daaruit volgt. In `DATA` verschillen alleen die twee notities (`procs.PRC-01` ACT-01.20 en `procs.PRC-02` ACT-02.53); alle andere velden (processen, stappen, beslissingen, aannames, skills, namen, status) zijn gelijk, dus de diagrammen en tellingen zijn ongewijzigd. `check.js`: 1330 controles, 0 fouten (84 activiteiten, 21 beslissingen, 15 GOV, 17/23/35/9, UC1 4 akkoorden, 41/41 skills, geen externe links, geen `undefined` of `NaN`). Het paneel van ACT-01.20 en dat van ACT-02.53 tonen nog hun verantwoordelijkhedenblok, de Wijziging-in-0.14-noot, de label-chips en de rest ongewijzigd.

### Nog open (geen blokkade, ter kennisgeving)

- P7-04(b), de dubbele "controle 2" (in ACT-01.20 en ASM-57 is "controle 2" de revisiecontrole; in ACT-02.53 is "controle 2" "geen nieuwe eis of scope"): staat zo in het register en is bewust niet aangepast. In het ACT-02.53-paneel staat nu wel "de revisiecontrole van het OpenAPI-bestand (ASM-52)", waardoor het niet meer wordt verward met de controle 2 uit de eerste zin. Alleen het register (Socrates) kan dit nog gladstrijken.
- Het label van ACT-01.20 in het paneel is "Besloten" (volgt `label` van de activiteit in het register, "B (stap 4, TL-V3)"), terwijl de noot ASM-56/57 noemt; bij ACT-02.53 staat wel "Besloten, Aanname". Dit stond al zo in de eerder gecontroleerde pagina en volgt het register; geen nieuwe fout.
- Niet getoetst: weergave in een echte browser. De klikproef na het herstel heeft de agent niet zelf gedraaid; Socrates draaide hem daarna (0 fouten, zie boven).

### Eindoordeel

**Kan worden ingediend.** P7-01 (blokkerend), P7-02, P7-03 en P7-04(a) zijn opgelost, de panelen van ACT-01.20 en ACT-02.53 kloppen met het register (ASM-22, ASM-52, ASM-56, ASM-57), en het herstel heeft niets anders gewijzigd of kapotgemaakt. Let wel: `organisatiemodel-0.7.html` (de genummerde kopie) is nog de oude, onherstelde versie (1.293.577 bytes) en verschilt van `organisatiemodel.html`. Kopieer vóór het uploaden `organisatiemodel.html` naar `organisatiemodel-0.7.html`, of upload `organisatiemodel.html`.
