# Modelcontrole ronde 4: pagina 0.2, uitbreidingsgids 0.2 en afwikkeling van de goedkeuring van model 0.8 (2026-10-29)

| | |
| --- | --- |
| Scope | (1) Het eindontwerp `eindontwerp/organisatiemodel.html` (pagina 0.2, Concept, ter goedkeuring bij GK-4), gebouwd met `eindontwerp/build/` uit het goedgekeurde register 0.8. (2) `v08/uitbreidingsgids.md` (0.2). (3) De afwikkeling van de goedkeuring van model 0.8 (Carlo, 2026-10-29, kaart `66da5f92`, alle zeven onderdelen approve): `v08/*.md` t.o.v. `v08/concept/*.md`, CHG-012 en de zin over pagina 0.2 in "Status van de versies". Checks voor het eindontwerp en voor een gewijzigd goedgekeurd model (`bpmn-modelcontrole`, `bpmn-conventies`, `bpmn-eindontwerp`). |
| Datum | 2026-10-29 |
| Uitgevoerd door | onafhankelijke controle (niet de maker). Er is niets aangepast, geüpload of geplaatst. |
| Gecontroleerd | `eindontwerp/organisatiemodel.html` (506 kB), `eindontwerp/build/` (`build.js`, `layout.js`, `template.html`, `check.js`, `klikproef.js`, `data.json`), `eindontwerp/CHG-012.md`, `v08/uitbreidingsgids.md`, de 18 documenten in `v08/*.md` met hun `concept/`-versie (register met JSON-vergelijking per sectie van het YAML-blok), `v08/wijzigingen.md`, `v08/prc-01.md` t/m `prc-05.md` en `v07/prc-06.md` (tabellen en Mermaid). Niet gecontroleerd, zoals afgesproken: `SPEC-CHG-011.md`, `VOORTGANG.md`, `controle-model-v08.md`. |
| Vergeleken met | het register `v08/register.md` (YAML-blok, model 0.8, Goedgekeurd; js-yaml; `node v08/tools/check.js`: 71 activiteiten, 71 koppelingen, 14 beslissingen, 13 GOV, 26/23/15/7), de procesbeschrijvingen, `v08/concept/*.md` en de vorige pagina `organisatiemodel-0.1.html`. Eigen scripts (jsdom 30, js-yaml): de pagina geladen, alle routecombinaties doorlopen (2229 stappanelen) en per stap vergeleken met het register en met `prc-0x.md`; een verse build in een kopie (`/tmp`) is byte-voor-byte gelijk aan de aangeleverde pagina. |
| Uitkomst | **Geen blokkerende bevindingen, één waarschuwing (P-01) en negen opmerkingen (P-02 t/m P-10). Kan worden ingediend; herstel P-01 bij voorkeur eerst (kleine ingreep).** |

## Uitkomst

**De pagina geeft het register 0.8 juist weer.** Alle 71 activiteiten, 14 beslissingen en 13 GOV staan op de pagina en zijn per stap vergeleken (niet alleen steekproef): lane, naam, input, resultaat, skills met status, capability, R/A/beslisser/controleur/C/I/escalatie, Paperclip-concept en vervolg: 0 afwijkingen met het register; labels (B/F/V/A) komen overeen met een eigen parse van alle 98 labels. De routes en loops volgen de Mermaid-diagrammen en de beslissingstabellen van PRC-01 t/m PRC-06. De variant bestaat alleen bij PRC-01 en alleen als ACT-01.52 (PRP-011). UC1 heeft 3 akkoorden (GOV-10, GOV-11, GOV-06), PRC-04 en PRC-05 hebben geen "vastgelopen" meer, ASM-18, 19, 20, 21 en 23 staan als bevestigd en ASM-22 niet. Alle tien secties staan op de pagina en zijn naar 0.8 bijgewerkt. Er is geen externe afhankelijkheid, geen secret en geen persoonsgegeven behalve de voornaam Carlo.

**De afwikkeling van de goedkeuring is zuiver.** In alle 18 documenten verschillen `v08/*.md` en `v08/concept/*.md` alleen in statusregels, "Goedgekeurde versie"-rijen, "Geldende versie"/"Geldend" → "Eerder goedgekeurd", de revisienummers, "Concept" → "Goedgekeurd" in `proces-catalogus` en "ter bevestiging/bevestigen" → "bevestigd" bij ASM-18, 19, 20, 21 en 23 (en OPEN-13). In het register is dat bevestigd met een JSON-vergelijking: alleen `meta.status`, `meta.geldend`, een nieuw item in `meta.goedgekeurd`, de tekst van B-08, de vijf `processen[].status`, vijf maal `bevestigen` → `bevestigd` bij die ASM's en de tekst van OPEN-13 zijn anders. CHG-012 staat in `wijzigingen.md` en is gelijk aan `eindontwerp/CHG-012.md`; de zin over pagina 0.2 staat in "Status van de versies".

**Het ene echte punt (P-01):** de skills-tabel in sectie 8 noemt SKL-40 t/m SKL-45 een "Voorstel", terwijl B-08 ze Besloten heeft gemaakt (de specificaties, de inleiding van sectie 8 en CHG-012 zeggen wel Besloten). De rest zijn opmerkingen.

## Checks

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Afwikkeling: in `v08/*.md` alleen de status veranderd t.o.v. `concept/` | voldoet | `diff` en een woord-voor-woord-diff per bestand (18 bestanden); register: JSON-vergelijking per sectie, zie Uitkomst. Geen inhoudelijke wijziging ingeslopen. ASM-22 is niet aangeraakt. Geen "ter bevestiging" of "bevestigen:" meer in `v08/*.md` (buiten de uitgezonderde bestanden). PRC-06 (`v07/prc-06.md`) ongewijzigd, 0.3. |
| Afwikkeling: CHG-012 en zin over pagina 0.2 | voldoet met opmerking | `wijzigingen.md` r.16 is gelijk aan `eindontwerp/CHG-012.md`; hoogste CHG = CHG-012. De alinea "Status van de versies" eindigt met "Op 0.8 bouwen de pagina 0.2 en de uitbreidingsgids 0.2 (CHG-012, Concept, ter goedkeuring bij GK-4)". Zie P-10 voor twee oudere zinnen in diezelfde alinea. |
| ID's uniek, volgen het schema, niet hergebruikt | voldoet | `check.js` en eigen scan: geen dubbele ACT/G/GOV; geen vervallen ID (19 in `vervallen_ids`) als actief element op de pagina; geen dubbele `id` in de DOM. Hoogste ID's in model en documenten: PRC-08, ROL-05 (vervallen), AGT-05, CAP-23, SKL-45, GOV-13, ASM-23, OPEN-13, FND-026, PRP-028, CHG-012. |
| Elke verwijzing op de pagina wijst naar een bestaand element | voldoet | 298 verschillende ID's, 6142 verwijzingen: allemaal in register, `bevindingen`, `voorstellen`, `wijzigingen`/CHG-012 of (alleen in §10) de bewust vrije ID's van de gids. De navigatielinks (`#s1`..`#s10`) bestaan. |
| Elk ACT-, G- en GOV-ID precies één keer in het artifact | voldoet met opmerking | Elk van de 71 ACT en 14 G staat als precies één stap in precies één swimlane (eigen script en `check.js`), elke GOV is één keer gedefinieerd (13). GOV-06 wordt in twee processen getekend en GOV-08 in vijf, zoals het register (`processen`) zegt; GOV-12 is alleen in PRC-04 getekend en de pagina zegt dat zelf erbij. |
| Status, versie en skillstatus op de pagina = register | voldoet | Model 0.8 Goedgekeurd (2026-10-29, Carlo, kaart 66da5f92); PRC-01 t/m 05 0.8 Goedgekeurd, PRC-06 0.3 Goedgekeurd; pagina 0.2 en gids 0.2 Concept. Skillstatus per activiteit 26 aanwezig / 23 gedeeltelijk / 15 ontbreekt / 7 n.v.t. zowel op de pagina als in `tools/check.js`. Alle 71 skill-tags met status zijn per stap vergeleken met `koppelingen` en `skills`. Tellingen "28 bestaande, 6 nieuwe, 12 uit te breiden, 8 voor het pakketakkoord" kloppen met het register; per proces "ontbreekt/uitbreiden" (PRC-01 4/10, PRC-02 3/5, PRC-04 2/0, PRC-05 1/0) kloppen. |
| Rollen, agents, GOV, beslissingen, aannames, open vragen = register | voldoet | `DATA` in de pagina is JSON-gelijk aan de secties van het register (rollen, agents, processen, 71 activiteiten, 14 beslissingen, 13 GOV, capabilities, 34 skills, aannames, open vragen, vervallen ID's). ASM-18, 19, 20, 21, 23 bevestigd, ASM-22 niet; OPEN-01, 08, 12 beantwoord, OPEN-03 deels, OPEN-13 nieuw. 21 PRP goedgekeurd, PRP-011 uitgesteld, PRP-002/008 eerder beslist, PRP-004 deels, PRP-009/012 vervallen. |
| Stap-voor-stap steekproef (≥ 15) over alle processen | voldoet | Niet 15 maar alle 71 ACT, 14 G en 13 GOV, in alle 123 routecombinaties (PRC-01 basis en variant, PRC-02 96 combinaties, PRC-03 t/m 06). Resultaat: 0 afwijkingen in lane, Input, Resultaat, Skills + status, capability, RACI, Paperclip en Vervolg (vs register en `prc-0x.md`), en in vraag/uitkomsten/informatie/criteria/bij akkoord/afwijzing/escalatie van de beslissingen en GOV. Zie P-04 voor verschillen tussen register en procesbeschrijving zelf. |
| Routes en loops kloppen met de procesbeschrijvingen (Mermaid) | voldoet met opmerking | Volgorde, lanes, routes en loops van PRC-01 t/m PRC-06 vergeleken met de Mermaid-blokken en de tabellen "Beslissingen en goedkeuringen" en "Uitzonderingen en loops": gelijk. Alle paden (4 in PRC-01, 49 verschillende in PRC-02, 3 / 6 / 3 / 3 in PRC-03 t/m 06) eindigen in een eindpunt. Elke loop heeft een benoemde uitgang (2 rondes → GOV-08 / PRC-05 / PRC-06), maar die is niet overal getekend: zie P-03. |
| Basis/variant alleen waar het register een variant heeft | voldoet | Alleen ACT-01.52 is `variant`; alleen PRC-01 toont de knop basis/variant; PRC-02 t/m 06 niet. De GOV's zijn alle basis. |
| Labels Besloten/Voorstel/Aanname/Feit/Open juist | voldoet niet | Stappen, beslissingen en GOV: alle 98 labels gelijk aan een eigen parse. B-08-voorstellen als Besloten in sectie 3 (c), 8 (specificaties) en 9. **Maar** de skills-tabel noemt SKL-40 t/m 45 "Voorstel": zie P-01. |
| Pagina voegt niets toe wat niet in het model staat | voldoet met opmerking | Volgorde en korte labels in `layout.js` komen uit de Mermaid-diagrammen; de teksten bij events en notities uit de procesbeschrijvingen. Kleine hard-gecodeerde teksten: zie P-02. |
| Geen verouderde 0.7-tekst | voldoet met opmerking | Geen "8 akkoorden in UC1" als huidige stand, geen "vastgelopen" als uitkomst van PRC-04 (alleen als naam van ACT-04.52 en als uitleg dat het vervalt), geen variant in UC2, geen "kies op GK-4" als open keuze. Wel historische 0.2–0.6-tekst in uitgeklapte blokken: zie P-05. |
| Secties 1 t/m 10 uit de opdracht aanwezig | voldoet | 1 overzicht/scope (landschap, status, scope), 2 rollenregister (rollen, agents, GOV, RACI), 3 kritische review (a)(b)(c), 4 subprocessen, 5 UC1, 6 UC2, 7 Paperclip-mapping, 8 skills-analyse (matrix, skills, specificaties, profiel Atlas), 9 aannames/voorstellen/open vragen, 10 uitbreidingsgids. Sectie 3 (c) is "wat je koos (B-08) en wat nog open is". |
| Eén bestand, geen externe afhankelijkheden | voldoet | Geen `src=`, `<link>`, `@import` of `http(s)://`; één `<script>`; alleen `#`-links; lettertype met systeemfallback. |
| Geen secrets of persoonsgegevens | voldoet | Geen e-mail, UUID, token of pad. Alleen de voornaam Carlo, agentnamen, kaart- en commentaar-ID's van 8 tekens zoals in het model. |
| Laadt zonder fouten | voldoet (jsdom); echte browser niet te beoordelen | Geen `jsdomError`, geen console-melding, geen NaN/undefined in de SVG's. Er is geen echte browser beschikbaar. |
| Licht/donker, toetsenbord, smalle schermen | voldoet met opmerking | Variabelen voor licht en donker plus handmatige wisseling (auto/licht/donker, drie klikken getest); knopen en landschap hebben `tabindex="0"`, rol en `aria-label`, Enter en spatie werken; media queries bij 1020 px en 620 px, `viewport`, scrollbare tabellen en diagrammen. Zie P-07. Weergave zelf is niet te beoordelen (geen browser). |
| `check.js` en `klikproef.js` toetsen wat ze claimen | voldoet met opmerking | Beide groen (800 controles, 0 fouten; 5694 acties, 0 fouten); de pagina werd er niet door gewijzigd. Eigen reproductie bevestigt de uitkomsten. Reikwijdte en gaten: zie P-06. |
| Uitbreidingsgids 0.2 consistent met register 0.8 | voldoet met opmerking | Vrije ID's kloppen (PRC-09, GOV-14, CAP-24, SKL-46, SKL-29 voor bestaande, ASM-24, OPEN-14, FND-027, PRP-029, CHG-013, ROL-06, AGT-06; ROL-05 en AGT-04 vervallen); hoogste CHG = CHG-012; pakketakkoord (ASM-18, bevestigd) en 2-rondenregel (PRP-005/006, G-01.4/01.5/02.5/02.6, ACT-01.57) kloppen; generieke lanes en eindpunt (ACT-01.25/02.14/01.57/02.54/01.56, "basis sinds B-08") kloppen; 8 skills voor het pakketakkoord kloppen. Zie P-09. |
| Goedgekeurd model niet overschreven; nieuwe versie; vorige pagina bewaard | voldoet | `organisatiemodel-0.1.html` is bewaard (344 959 bytes, onveranderd); register 0.8 is Goedgekeurd en niet inhoudelijk gewijzigd sinds het Concept. |
| Wijzigingshistorie bijgewerkt | voldoet | CHG-012 (pagina 0.2, gids 0.2) bevat wat er veranderde; elke bewering is op de pagina nagelopen en klopt, behalve dat SKL-40 t/m 45 "als Besloten" zouden staan (P-01). |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet | Zie de label-check. ASM-22 staat als onbevestigde aanname; de tussentijdse weekmelding (ASM-23) is als aanvulling gemarkeerd. |
| Huidige en gewenste situatie gescheiden | voldoet | Alle 71 activiteiten zijn `to-be`, dus geen schakelaar nodig; bestaande skills (Feit) en nog te maken skills (SKL-40 t/m 45, "ontbreekt · nieuw") zijn gescheiden; "Toon wat er al is" werkt. |
| `.bpmn`-bestand heeft validatieresultaat | niet te beoordelen | Geen `.bpmn`-bestand en geen validator. |
| Genoemde agents en skills bestaan volgens de bron | niet te beoordelen | Niet opnieuw getoetst: de pagina neemt ze uit het goedgekeurde register over (zie "Wat ik niet kon toetsen"). |

## Bevindingen

### Blokkerend

Geen.

### Waarschuwingen

**P-01 (waarschuwing) De skills-tabel in sectie 8 noemt SKL-40 t/m SKL-45 een "Voorstel", terwijl B-08 ze Besloten heeft gemaakt.**
Plek: `eindontwerp/organisatiemodel.html`, sectie 8, tabel `#sktbl`, kolom Skill (SKL-40 architect-vertical-slices, SKL-41 architect-api-contracts, SKL-42 architect-use-case-review, SKL-43 architect-conventions, SKL-44 architect-clarification, SKL-45 vragen-en-akkoordrondes); bron: `build/template.html` r.593 (functie `sk()`: `s.situatie==="to-be" ? Voorstel : Feit`).
Bron: `register` `skills` SKL-40 t/m 45: `situatie: to-be`, `besluit: B-08 (PRP-019 … PRP-023)`. De goedgekeurde voorstellen PRP-019 t/m PRP-023 zijn Besloten (B-08); dezelfde pagina zegt dat in sectie 8 ("Alles hieronder is Besloten in B-08"), bij de specificaties (label Besloten) en in sectie 3 (c); CHG-012 zegt: "SKL-40 t/m SKL-45 en de uit te breiden skills als Besloten (B-08)". Alleen het deel van SKL-02 over ontwerp en huisstijl (PRP-011) is een Voorstel.
Wat er mis is: de tabel rekent "to-be" gelijk aan "Voorstel". Een lezer ziet in dezelfde sectie twee labels voor dezelfde skill. De check van `check.js` en `klikproef.js` ziet dit niet, omdat ze geen labels toetsen.
Voorstel voor herstel: in `template.html` het label afleiden uit het register: `besluit` begint met "B-" → `Besloten` (en eventueel "nog te maken"); `Feit` blijft voor bestaande skills; "Voorstel" alleen waar het register een PRP zonder besluit noemt (nu nergens). Herbouwen, `check.js` en `klikproef.js` draaien. Voeg aan `check.js` een controle toe dat geen skill met `besluit: B-08` het label Voorstel krijgt.

### Opmerkingen

**P-02 (opmerking) Enkele teksten zijn hard-gecodeerd in de template en niet uit het register afgeleid; twee wijken licht af.**
Plek: `build/template.html` r.348 (`LANE`), r.378 (statusblok), r.535 (samenvatting onder het diagram); `organisatiemodel.html`, GOV-tabel (kolom Versie van GOV-08).
Wat er opvalt: (a) de lanekoppen noemen "ROL-02 Orchestrator" en "ROL-04 Architect"; het register heeft "Orchestrator en scrum master" en "Systeemarchitect". (b) Het statusblok zegt vast "Bevestigd: ASM-18, 19, 20, 21 en 23" (juist, maar niet afgeleid uit `bevestigd`). (c) "Geen nieuwe agent nodig (TL-V7)" onder elk diagram staat zo niet in het model (PRP-018 laat een aparte agent later wel toe); "Akkoorden van jou in dit schema: 0" bij PRC-03 is misleidend, want PRC-03 is juist jouw akkoord (GOV van de aanroeper). (d) De versiecel van GOV-08 toont de hele zin uit `versie` ("basis in PRC-04, PRC-05 en PRC-06; in PRC-01 …").
Voorstel voor herstel: rolnamen uit `rollen[].naam` nemen (of de volledige naam tonen); "Bevestigd" uit `aannames[].bevestigd` afleiden; de zin "Geen nieuwe agent nodig" laten vervallen of "(PRP-018: later mogelijk)" noemen; bij PRC-03 "n.v.t." in plaats van 0; voor GOV-08 de versiecel inkorten tot "basis".

**P-03 (opmerking) De uitgang na 2 rondes is niet bij alle loops als route getekend en de pagina dwingt het maximum niet af.**
Plek: `build/layout.js` r.60 (G-01.4), r.135 (G-02.5), r.154 (ACT-02.53, controle 1); pagina sectie 5 en 6.
Bron: de Mermaid-diagrammen van `prc-01` en `prc-02` tekenen pijlen G4 → GOV8, G5 → GOV8, A53 → GOV8 ("na 2 rondes").
Wat er opvalt: de pagina tekent GOV-08 als routekeuze alleen bij G-01.5 en G-02.6 ("Na 2 rondes: escalatie (GOV-08)"). Bij G-01.4, G-02.5 en controle 1 van ACT-02.53 staat de uitgang alleen in de tekst van de loopknop of in de notitie bij GOV-08. De afkeuring van GOV-10/11/06 en de andere GOV's wijst terecht naar PRC-05 (G-05.1) in de tekst. Het rondetelbadge telt wel, maar na de derde keer komt geen melding. Elke loop heeft dus wel een benoemde uitgang (voldoet), maar de lezer ziet die niet overal in het schema.
Voorstel voor herstel: dezelfde routekeuze ("Na 2 rondes: escalatie") toevoegen bij G-01.4, G-02.5 en controle 1 van ACT-02.53, of in de hint onder het diagram zeggen dat de pagina het maximum niet afdwingt.

**P-04 (opmerking, model) Register en procesbeschrijving verschillen bij zeven velden van drie activiteiten in het goedgekeurde model 0.8; de pagina volgt het register.**
Plek: ACT-01.20 (input mist "vooraf de poort: GOV-06 is er (quality-gates, SKL-21)"; label mist "B (B-08, PRP-025: poort)"); ACT-02.53 (resultaat mist "(met het ADR)" na "de akkoorden op de geraakte documenten"); ACT-03.1 (label mist "A (ASM-18: alleen goedkeuren en afkeuren)"); ACT-03.3 (input mist "bij een pakket pas als elk document een oordeel heeft"; label mist "A (ASM-18: pakket)"); ACT-01.15 (alleen aanhalingstekens). Bron: `register` `activiteiten` t.o.v. de tabellen in `prc-01`, `prc-02`, `prc-03`.
Gevolg voor de pagina: het paneel van deze stappen toont iets minder dan de procesbeschrijving en bij ACT-03.1 en ACT-03.3 ontbreekt het label Aanname (ASM-18). Dat is juist volgens "het register is de bron van waarheid", en geen fout van de pagina.
Voorstel voor herstel: via een CHG het register aanpassen aan de goedgekeurde procesbeschrijving (of omgekeerd) en de pagina opnieuw bouwen; niet in de pagina corrigeren.

**P-05 (opmerking) Historische tekst uit 0.2 t/m 0.7 staat op de pagina; ze is gemarkeerd, maar leest op een pagina voor 0.8 soms als actueel.**
Plek: sectie 3 → "Hiaten nagelopen (ronde 3)" (momentopname: "alle 69 activiteiten", "variant: ACT-01.56, 04.51, 04.52"; de tekst zegt zelf "niet bijgewerkt naar 0.8"); sectie 3 (b) kolom Afweging ("Stand 0.4: de basis heeft nu 8 akkoorden … de variant blijft op 3", gevolgd door "Stand 0.8"); sectie 9 → "Eerdere standen (0.2 t/m 0.6)" en de PRP-teksten ("Kies je dit bij GK-4, dan pas ik ze aan …" bij PRP-025 en PRP-027, met "0.8: gedaan" erachter). Bron: de goedgekeurde documenten `bevindingen`, `organisatie`, `voorstellen`, ongewijzigd overgenomen.
Wat er opvalt: niets hiervan is onjuist, want elke regel noemt zijn versie. Maar de lead van de pagina zegt "Alles op deze pagina komt uit het register en de goedgekeurde documenten", terwijl sectie 10 de Concept-gids is (de statusrij staat er wel).
Voorstel voor herstel: de lead aanpassen ("… en de goedgekeurde documenten; sectie 10 is Concept") en overwegen de momentopname uit ronde 3 weg te laten of in te korten; geen wijziging van de goedgekeurde bronnen.

**P-06 (opmerking) Reikwijdte van `check.js` en `klikproef.js`.**
Plek: `build/check.js`, `build/klikproef.js`.
Wat ze wel toetsen: ID-dekking en uniciteit in `DATA` en in de swimlanes, tellingen (71/14/13, 26/23/15/7), akkoorden per proces, variant alleen ACT-01.52, bestaande ID-verwijzingen, vervallen ID's, interne consistentie van routes en loops, externe afhankelijkheden, secrets, status/versie; en in jsdom: alle routecombinaties, alle stappen, elke loop één keer, SVG zonder NaN en zonder overlappende knopen, toetsenbord, filters.
Wat ze niet toetsen: (a) de inhoud van het paneel per stap tegen het register (de `DATA` wordt door `build.js` uit het register gekopieerd en dan met dezelfde lader vergeleken); dit is hier met een eigen script gedaan, 0 afwijkingen; (b) labels (daardoor P-01); (c) routes en loops tegen de Mermaid-diagrammen (`layout.js` is met de hand getypt; alleen interne consistentie wordt getoetst; hier handmatig vergeleken, geen afwijking); (d) of een loop een zichtbare uitgang heeft (P-03); (e) CSS, media queries, kleurcontrast en echte rendering, want er is alleen jsdom; (f) de pagina-`weakest()` in de template is een andere kopie dan die in `check.js`; ze geven nu dezelfde uitkomst (26/23/15/7), maar de template kent de status `koppelen` niet (komt in het register niet voor). Verwachte aantallen in `check.js` (71, 14, 13, 26/23/15/7) zijn vast ingevuld; bij een volgende wijziging van het model moeten ze mee veranderen.
Voorstel voor herstel: een labelcontrole en een paneel-tegen-register-controle toevoegen (het script waarmee deze controle is gedaan is een goed begin), en `koppelen` aan de template toevoegen of `check.js` de template-functie laten gebruiken.

**P-07 (opmerking) Toegankelijkheid en smalle schermen.**
Plek: `build/template.html` r.9 en r.16 (`--ink-3`), r.78 en r.421 (tabs), `.tbl`.
Wat er opvalt: (a) in licht thema heeft `--ink-3` (#7a8493) een contrast van 3,8:1 op wit en 3,4:1 op de achtergrond; het wordt gebruikt voor tekst van 10,5 tot 13 px (ID's in de diagrammen, `.small`, voetregel, `dt` in de panelen): onder de 4,5:1 van WCAG AA. Donker thema 5,3:1 en `--ink-2` 8,2:1 zijn goed. (b) De 38 scrollbare tabelcontainers (`.tbl`, `overflow:auto`) hebben geen `tabindex`, dus brede tabellen zijn met alleen het toetsenbord niet te scrollen. (c) `role="tablist"`/`tab` zonder `aria-controls` en zonder pijltoetsen. (d) Diagrammen hebben een minimale breedte van 450 tot 600 px en scrollen horizontaal op een telefoon; dat werkt, maar de tekst is dan ongeveer 10 tot 12 px.
Voorstel voor herstel: `--ink-3` donkerder maken in het lichte thema (bijvoorbeeld #5f6978), `tabindex="0"` met `role="region"` en `aria-label` op `.tbl`, tabs als gewone knoppen met `aria-pressed` of de tabs-rolpatroon volledig maken. Niet te beoordelen: de werkelijke weergave op een telefoon (geen browser).

**P-08 (opmerking) Samenvatting "Wat er nog nodig is" voor de subprocessen.**
Plek: `build/template.html` r.535 (`renderMissing`), sectie 4.
Wat er opvalt: bij PRC-03 en PRC-06 staat "0 skills ontbreken, 0 skills moeten worden uitgebreid" en daaronder de algemene opmerking over SKL-45 en de telling van de rondes; dat laatste geldt alleen voor PRC-04 en PRC-05. De cijfers voor PRC-04 (2) en PRC-05 (1) kloppen met het register.
Voorstel voor herstel: de opmerking over SKL-45 alleen bij PRC-04 en PRC-05 tonen.

**P-09 (opmerking) De uitbreidingsgids noemt ASM-22 als regel zonder de aanname te benoemen.**
Plek: `v08/uitbreidingsgids.md` §2 stap 4 ("Wachten op ruimte telt niet als ronde (ASM-22)").
Bron: `register` ASM-22 is een Aanname zonder bevestiging (alleen ASM-18, 19, 20, 21, 23 zijn bevestigd). De gids labelt de werkwijze als geheel "Voorstel", maar noemt hier geen "Aanname".
Voorstel voor herstel: "(Aanname ASM-22, niet bevestigd)" erbij zetten. Verder is de gids juist: Concept 0.2, ter goedkeuring bij GK-4, register 0.8 als bron, vrije ID's, hoogste CHG-012, pakketakkoord, 2-rondenregel, generieke lanes en eindpunt (overdracht) kloppen met het register en de procesbeschrijvingen.

**P-10 (opmerking, afwikkeling) In de alinea "Status van de versies" van `wijzigingen.md` staan nog twee zinnen uit de tijd vóór B-08.**
Plek: `v08/wijzigingen.md` r.18: "De voorstellen (PRP) blijven voorstellen: daarover beslis je bij GK-4." en "Ronde 4 (de pagina) bouwt op 0.7." staan vóór de nieuwe slotzin ("Op 0.8 bouwen de pagina 0.2 en de uitbreidingsgids 0.2 …").
Wat er opvalt: de afwikkeling mocht alleen status en deze slotzin wijzigen, dus dit is zoals bedoeld en geen fout van de afwikkeling; de alinea is wel historisch opgebouwd (per versie) en de laatste zin corrigeert de eerste twee. Er is geen inhoudelijk probleem.
Voorstel voor herstel: bij een volgende revisie van `wijzigingen` de twee zinnen laten vervallen of "(0.7)" erbij zetten; geen actie nodig voor indiening.

## Wat ik niet kon toetsen

- Het openen in een echte browser (er is alleen jsdom): lay-out, kleuren, lettergrootte, gedrag van scroll en `<details>`, en dus ook alle visuele eisen voor smalle schermen en licht/donker. Daarom staat "laadt zonder fouten" op jsdom.
- Alles wat alleen in Paperclip staat: de inhoud en het verloop van kaart `66da5f92` (de zeven approve-onderdelen), kaart `2b7a6d2d` en het besluit B-08, en of de documenten van 0.8 en de pagina al zijn geüpload. De afwikkeling is getoetst tegen de brief en tegen `concept/`.
- Of de skills en agents bestaan zoals het register zegt en of ze technisch gekoppeld zijn (de `SKILL.md`-bestanden en `AGENTS.md` zijn niet opnieuw gelezen; dat deed `controle-model-v08`). Werking van de skills blijft OPEN-11.
- De vraag of de procesmodellen de bedoeling van Carlo zijn: dat is zijn besluit; hier is alleen getoetst dat de pagina het goedgekeurde model weergeeft.
- Een `.bpmn`-bestand of validator: niet aanwezig.

## Oordeel

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen: de pagina 0.2 geeft register 0.8 volledig en juist weer (71 activiteiten, 14 beslissingen, 13 GOV, skillstatus, RACI, routes, loops, variant, bevestigde interpretaties), de uitbreidingsgids is consistent met het register, en de afwikkeling van de goedkeuring van model 0.8 bevat alleen statuswijzigingen plus CHG-012 en de zin over pagina 0.2. Herstel bij voorkeur eerst P-01 (label van SKL-40 t/m 45 in de skills-tabel; één regel in de template, herbouwen, `check.js` en `klikproef.js` opnieuw), omdat de pagina en CHG-012 daar elkaar tegenspreken en Carlo het besluit zelf nam. P-02 t/m P-10 kunnen mee in een volgende revisie.

## Herstel na de controle (Socrates, 2026-10-29)

Verwerkt na deze controle, zonder nieuwe controle door een aparte agent. Na het herstel heb ik de pagina opnieuw gebouwd. De bouwcontrole (800 controles) en de klikproef (5694 acties) gaven daarna geen fouten. Dat de skills-tabel nu "Besloten" toont, heb ik apart gecontroleerd in jsdom.

| ID | Herstel |
| --- | --- |
| P-01 | `template.html`: een to-be-skill met een `besluit`-veld krijgt het label Besloten (SKL-40 t/m SKL-45). Alleen een to-be-skill zonder besluit krijgt het label Voorstel. |
| P-02 | "ROL-04 Architect" is nu "ROL-04 Systeemarchitect", zoals in het register. |
| P-08 | De opmerking over SKL-45 staat alleen nog bij PRC-04 en PRC-05. |
| P-09 | In de uitbreidingsgids staat nu "aanname ASM-22". |
| P-10 | `wijzigingen`, "Status van de versies": "Pagina 0.1 (ronde 4) bouwde op 0.7" en "je besliste erover met B-08". |
| P-03, P-04, P-05, P-06, P-07 | Niet hersteld. Het zijn opmerkingen die niet blokkeren. P-04 gaat over het model zelf, niet over de pagina: register en procesbeschrijving verschillen in 7 velden. Ik neem dat op als punt voor een volgende modelversie. P-07 (contrast en toegankelijkheid) en P-06 (gaten in de controlescripts) staan als verbeterpunt bij een volgende pagina. |
