> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Modelcontrole model 0.10 (Concept, CHG-015)

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Scope | Concept model 0.10 (B-10, CHG-015): `v010-voorstel`, `prc-01`, `prc-02`, `register` (YAML), `paperclip-mapping`, `uitbreidingsgids`, plus wat ze raken: PRC-03 t/m PRC-06 (basis 0.8/0.3), de goedgekeurde stand 0.9 in `basis/` (ter vergelijking) en de opdracht in `/tmp/opdracht.md` (sectie D). |
| Controleur | aparte agent, sonnet |
| Oordeel | **terug naar de maker** (2 blokkerende bevindingen, 12 waarschuwingen) |
| Werkwijze | Register uit het ```yaml-blok geladen met `js-yaml` (geldig) en met een script vergeleken met `basis/register.md` (ID's, dubbele en onopgeloste verwijzingen, koppelingen). Mermaid-diagrammen gecontroleerd met `/tmp/chk/graph.py` en met de hand op BPMN-logica. Tabellen van PRC-01 en PRC-02 rij voor rij vergeleken met `basis/` en met het register. |
| Bewust buiten de scope (maker) | De overzichten (activiteit-skillmatrix, agent-skillmatrix, capabilities-en-skills, verantwoordelijkheden, skill-specificaties, proces-catalogus, organisatie), de HTML-pagina, `bevindingen`, `voorstellen` en `wijzigingen` worden pas na goedkeuring bijgewerkt. Geen bevinding. |

## Resultaat per check

| # | Check | Resultaat | Bewijs |
| --- | --- | --- | --- |
| 1 | ID's uniek, volgens schema, niet hergebruikt | voldoet | Register: 0 dubbele ID's. Nieuw: ACT-01.26..29, 01.58..60, ACT-02.15..17, 02.56, G-01.6..9, G-02.7, GOV-14, GOV-15, CAP-24..27, SKL-46..50, ASM-26..29, OPEN-14 (aantallen kloppen met `v010-voorstel` §C: 82 activiteiten, 19 beslissingen). Vrije ID's sluiten aan op `basis/` (laatste FND-027, PRP-028, CHG-014). ACT-01.52 behoudt zijn ID met andere inhoud; dat is expliciet benoemd (`vervallen_ids` PRP-011, `prc-01` "Nieuw in 0.10"). |
| 2 | Elke verwijzing wijst naar een bestaand element | voldoet niet | In het register 0 onopgeloste ID's. Tekstverwijzingen naar niet-bestaande secties en bestanden: zie K10-12. |
| 3 | Procesmodel heeft status en versie | voldoet | `register` processen PRC-01/02: versie 0.10, status Concept; PRC-03 t/m PRC-06 ongewijzigd. |
| 4 | Doel, trigger, start- en eindconditie | voldoet | `prc-01` en `prc-02`, sectie "Doel en uitkomst" en "Trigger, start- en eindconditie". Het register heeft die velden niet bijgewerkt: zie K10-04. |
| 5 | Activiteit heeft rol, input, output, vervolg | voldoet | 36 ACT in `prc-01` en 21 in `prc-02`, alle met die kolommen; elk staat in het diagram (graph.py: "alleen tabel" en "alleen diagram" leeg). |
| 6 | Beslissing heeft alle routes en een negatieve afhandeling | voldoet niet | `prc-02` G-02.2: K10-01. Overige beslissingen hebben alle uitkomsten (G-01.4/5/6, G-02.3/5/6/7). |
| 7 | Afwijzingen en herstelroutes gemodelleerd, elke terugloop heeft een uitgang | voldoet | Max. 2 rondes en escalatie (GOV-08, PRC-05, PRC-06) in `prc-01` en `prc-02` "Uitzonderingen en loops". Let wel K10-02 (deadlock in een herstelroute). |
| 8 | Elke menselijke goedkeuring heeft een GOV-ID | voldoet niet | `register` koppelingen ACT-01.11: `beslisser: ROL-01 (GOV-11)`: K10-03. De overige nieuwe en gewijzigde activiteiten verwijzen naar een bestaand GOV (0 onbekende GOV's). GOV-14 en GOV-15 zijn volledig uitgewerkt in `goedkeuringen`. |
| 9 | Elke activiteit heeft capability en skill, of OPEN | voldoet | 82 koppelingen, 0 activiteiten zonder koppeling, 0 lege `cap` of `skl`; nieuwe skills (SKL-46..50) hebben `dekking.bron`. Een statuswaarde wijkt af: K10-11. |
| 10 | Uitvoerder en één verantwoordelijke; onafhankelijke controle | voldoet | `register` koppelingen voor de 11 nieuwe activiteiten: R en A ingevuld. Carlo ontwerpt en keurt zelf goed (ACT-01.28, ACT-02.16): bewust (ASM-28, label A), de eindverantwoordelijkheid ligt bij de mens. |
| 11 | Activiteit staat in diagram, beschrijving en register | voldoet niet | Diagram en beschrijving kloppen. Register en beschrijving verschillen op een aantal punten: K10-04, K10-05, K10-06. |
| 12 | Overzichten komen overeen met het register | niet te beoordelen | Overzichten worden na goedkeuring bijgewerkt (scopekeuze maker). |
| 13 | `.bpmn`-validatie | niet te beoordelen | Er is geen `.bpmn`-bestand en geen validator; alleen Mermaid-tussendiagrammen (zie D1). |
| 14 | Feiten, aannames, open vragen, voorstellen gescheiden en gemarkeerd | voldoet | Labels B/F/V/A in `prc-01`, `prc-02`, `register`; nieuwe ASM-26..29 en OPEN-14. Zie wel K10-10 (voorstellen in de basis). |
| 15 | Huidige en gewenste situatie gescheiden | voldoet | Nieuwe elementen hebben `situatie: to-be`, `nieuw_in: "0.10"` of `wijziging_0_10`; 0.9 blijft genoemd als geldend (`register` meta.geldend). |
| 16 | Wijzigingshistorie bijgewerkt | voldoet | `prc-01` en `prc-02` regel 0.10; CHG-015 in `v010-voorstel` §C. `wijzigingen.md` volgt na akkoord (scopekeuze). De opsomming in `prc-01` is onvolledig: K10-05. |
| 17 | Goedgekeurd model niet overschreven | voldoet | Concept staat in `concept/`; elk document zegt "tot je 0.10 goedkeurt, geldt 0.9/0.8/0.3". |
| 18 | Verwijzingen naar buiten (agents, skills) | niet te beoordelen | Agents bestaan volgens het register (4 agents, AGT-01/02/03/05). Inhoud van de SKILL.md's van de architect-skills (FND-029, FND-031), de werking van SKL-46..50 (voorgesteld) en Paperclip-feiten (M-11, M-12, M-13: ontwerpfunctie, prioriteitswaarden, gedrag van `request_item_verdicts`) kon ik niet toetsen. Alleen `requirements-analysis` stap 3 gecontroleerd: kent geen onderwerp pagina's of ontwerp (FND-030 klopt). Dat Carlo "designer en frontend developer" is (AGENTS.md Dr. Evil r.42) is niet te beoordelen. |
| D1 | Geldig BPMN (Mermaid) | voldoet niet | PRC-02: voldoet (graph.py: alles bereikbaar, alles bereikt E of E0; Q3/PRC-04 en B6/PRC-06 zijn subprocesaanroepen die terugkeren, zoals de noot zegt). PRC-01: graph.py ok (50 knopen, alles bereikbaar, alles bereikt E), maar de parallelle samenvoeging G-01.9 loopt vast bij herwerk na GOV-15: K10-02. G-01.7/G-01.8 zijn juist gebruikt (splitsen; samenvoegen en splitsen). ASM-29 (elk project heeft een UI) laat geen pad zonder UI toe; dat is als aanname gelabeld. |
| D2 | Altijd voldoende info over de pagina en akkoord daarop vóór de contracten, beide UC's, alle paden | voldoet niet | UC1: voldoet (brieven in GOV-10, ontwerp en bijgewerkte brieven in GOV-15, contract in GOV-06; paden "brief" en "ontwerp" en afkeurpaden lopen via PRC-05). UC2: het pad "eisen en use cases al goedgekeurd" slaat de brieven en GOV-02 over: K10-01. |
| D3 | Geen cirkelafhankelijkheid ontwerp en API-contract | voldoet | De afleiding gaat in beide UC's brief, ontwerp, bijgewerkte brief, akkoord, technisch ontwerp, contract (`prc-01` ACT-01.17 input, `prc-02` ACT-02.8 input: "niet de mock data"). Kanttekening K10-09 over de uitzondering via GOV-12. |
| D4 | Mock data niet bindend vastgelegd | voldoet | `prc-01` ACT-01.28 en ACT-01.17; `prc-02` ACT-02.16 en ACT-02.8; GOV-06 (bronkolom, "niet in mock data"); GOV-14 criteria; `v010-voorstel` PRP-032 (5 borgingen); SKL-41 en SKL-50 in het register. |
| D5 | Per profiel verplicht, optioneel of n.v.t.; geen profiel slaat een stap over die een ander proces nodig heeft | voldoet | De tabel staat in `v010-voorstel` PRP-034 en is consistent met ACT-01.59, 01.60, G-01.6 en GOV-11 (1/1/4 documenten). Controle op overgeslagen stappen: ACT-01.14 t/m 01.20, ACT-01.56/01.57 en ACT-02.4 t/m 02.14 zijn profielneutraal; GOV-06 en de poort (ACT-01.20, ACT-02.53) zijn alleen bereikbaar via GOV-11; GLOSSARY.md wordt in elk profiel door Socrates gemaakt (SKL-02 stap 5). Waarschuwingen: K10-07, K10-08. |
| D6 | Bestaande besluiten niet ongemerkt veranderd | voldoet niet | Genoemde besluiten zijn expliciet benoemd en met V gelabeld: 3 naar 4 akkoorden (B-08/ASM-19, `prc-01` "Bestaande besluiten die 0.10 raakt"; vraag 1), B-06 (lichte vorm), B-07 en TL-V5 (alleen P3), TL-V4 (templatecontract bij P1), TL-V7 ongewijzigd. Wel stil ingekort: de 0.9-tekst van PRC-02 (PRP-006/007/027): K10-06; en verouderde tekst over "3 akkoorden" zonder markering: K10-04. |
| D7 | Model eindigt bij het backlog | voldoet | `prc-01` en `prc-02`: enig eindpunt "Backlog gereed, overdracht naar implementatie" na ACT-01.57/ACT-01.29 en ACT-02.54/ACT-02.17; `register` meta.scope; Sentinel-controle na het backlog is als richting buiten de scope gezet (PRP-037). |

## Blokkerende bevindingen

### K10-01 (blokkerend) UC2: het pad "eisen en use cases al goedgekeurd" slaat de paginabrieven en het akkoord daarop over

- **Waar:** `prc-02.md` beslissing G-02.2 ("beide → G-02.7") en de pijl `G2 -- beide --> G7` in het diagram; `register.md` G-02.2 (`uitkomsten`, `wijziging_0_10`).
- **Wat is er mis:** G-02.2 leidt "eisen en use cases beide goedgekeurd" rechtstreeks naar G-02.7 (ontwerp nodig?) en daarna naar ACT-02.4 en het bouwcontract. De paginabrieven (ACT-02.15), de toets van Atlas (ACT-02.13) en het akkoord van Carlo (GOV-02) liggen niet op dat pad. Dit pad is juist het gewone pad voor een "later"-pagina uit PRC-01: die heeft goedgekeurde eisen en use cases (GOV-10) maar bewust nog geen brief en geen ontwerp (`v010-voorstel` PRP-030: "Ze krijgen nu nog geen brief en geen ontwerp"; `prc-01` ACT-01.27: een brief voor elke "nu"-pagina). G-02.7 kan dan niet beslissen, want het ontwerpniveau staat nergens. ACT-02.4 en ACT-02.8 vragen wel om goedgekeurde brieven, dus het model spreekt zichzelf tegen. Dit raakt Carlo's controlepunt 2 ("altijd voldoende informatie en mijn akkoord vóór de contracten, ook de paden zonder ontwerp").
- **Herstel:** laat "beide" alleen naar G-02.7 gaan als de brieven van de geraakte pagina's al goedgekeurd zijn. Voeg daarvoor een uitkomst toe aan G-02.2 of een beslissing "Zijn de paginabrieven van de wens goedgekeurd?": ja → G-02.7; nee (eisen en use cases wel) → ACT-02.15 (dan ACT-02.13, G-02.5, GOV-02, G-02.7). Pas het diagram, de tabel, het register (G-02.2 `uitkomsten`) en de wijzigingsregel aan.

### K10-02 (blokkerend) PRC-01: parallelle samenvoeging G-01.9 loopt vast bij herwerk na een afkeuring van GOV-15

- **Waar:** `prc-01.md` G-01.9 ("Parallel (samenvoegen)"), diagram (`P8 --> A11 --> P9`, `P8 --> A28 --> P9`, `GOV15 -. afgekeurd .-> A11`), GOV-15 "Bij afwijzing" (architectuur of profiel → ACT-01.11; ontwerp → ACT-01.28); `register.md` G-01.9 (`soort: parallel`) en GOV-15 `bij_afwijzing`.
- **Wat is er mis:** G-01.9 wacht op twee tokens (ACT-01.11 én ACT-01.28). Na de eerste doorloop zijn beide tokens verbruikt. Keurt Carlo bij GOV-15 alleen de architectuur of alleen het ontwerp af, dan herstelt PRC-05 één tak en komt er één token bij G-01.9. De tweede komt niet meer: het proces loopt vast. Dat is een ongeldige herstelroute in een verplicht akkoord (Carlo's controlepunt 1: parallelle samenvoeging en elke lus heeft een uitgang).
- **Herstel:** laat het herwerk niet door de parallelle samenvoeging terugkeren. Bijvoorbeeld: zet voor ACT-01.58 een exclusieve samenvoeging (eerste doorloop: G-01.9; herwerk: ACT-01.11 of ACT-01.28 rechtstreeks), of maak G-01.9 een inclusieve samenvoeging. Teken in het diagram de afkeurpijlen per document (GOV-15 → ACT-01.11, → ACT-01.28, → ACT-01.58) zoals de tabel ze beschrijft, en pas `register` G-01.9 en de noot onder het diagram aan.

## Waarschuwingen

### K10-03 (waarschuwing) Register: ACT-01.11 verwijst naar het verkeerde akkoord
- **Waar:** `register.md` koppelingen ACT-01.11: `beslisser: ROL-01 (GOV-11)`, `controleur: ROL-01 (GOV-11)`; het eigen veld `wijziging_0_10` zegt "beslisser GOV-15"; `prc-01` en GOV-15 `informatie`: de architectuurkeuze zit in GOV-15, niet meer in GOV-11.
- **Herstel:** zet beslisser en controleur op `ROL-01 (GOV-15)`. De RACI-overzichten worden hieruit afgeleid.

### K10-04 (waarschuwing) Register: verouderde teksten over "drie akkoorden" en kernontwerp, zonder markering
- **Waar:** `register.md` ROL-01 `verantwoordelijkheid` ("In UC1 drie akkoorden: ... kernontwerp (GOV-11)"); ASM-18 (architectuurkeuze zit in het pakket GOV-11); ASM-19 ("vorm met 3 akkoorden", zonder `wijziging_0_10`; `prc-01` zegt "wordt vervangen als je PRP-036 goedkeurt"); processen PRC-01 en PRC-02: `doel`, `input`, `output`, `risicos`, `aanleiding` zijn niet bijgewerkt (PRC-01 `doel`: "goedgekeurd kernontwerp (met architectuur en database)", `output` zonder visie, paginalijst, ontwerpen, bouwcontract).
- **Herstel:** werk deze velden bij of markeer ze met `wijziging_0_10` ("vervalt als PRP-036 wordt goedgekeurd"), zodat het register (bron van waarheid) dezelfde stand beschrijft als `prc-01` en `prc-02`.

### K10-05 (waarschuwing) Register en procesbeschrijvingen verschillen op detailpunten; de wijzigingsopsomming is onvolledig
- **Waar:** ACT-01.7: naam in `prc-01` "Goedgekeurd analysepakket melden", in het register "Goedgekeurde analyse en use cases melden". ACT-01.15: input in `prc-01` "technisch ontwerp, paginalijst", in het register "kernontwerp". ACT-02.4: input in `prc-02` "... use cases, brieven en waar nodig ontwerpen", in het register "wens met goedgekeurde eisen en use cases". ACT-02.13: output in het register alleen "opmerkingen per use case" (`prc-02`: ook per brief). ACT-02.53: output in het register noemt GOV-02 en GOV-14 niet in de poort, terwijl `wijziging_0_10` en `prc-02` dat wel zeggen. `prc-01` wijzigingshistorie 0.10 noemt ACT-01.7, 01.10, 01.13, 01.14, 01.15, 01.1 en 01.6 niet, terwijl hun tabelrij (naam, input of vervolg) verschilt van 0.8 en het register ACT-01.10, 01.13 en 01.14 als gewijzigd markeert. `v010-voorstel` §C zegt "ACT-01.8 t/m 01.25 voor zover genoemd".
- **Herstel:** synchroniseer de velden in het register met de tabellen (register is de bron) en maak de opsomming in `prc-01` en `v010-voorstel` §C volledig.

### K10-06 (waarschuwing) PRC-02: goedgekeurde 0.9-tekst stil ingekort, GOV-08 verwijst naar "0.9"
- **Waar:** `prc-02.md` t.o.v. `basis/prc-02.md`: GOV-08 "Uitkomsten: zie 0.9" en label ingekort van B (B-08, PRP-006, PRP-007, PRP-027) naar B (B-08); ACT-02.53: "wachten tot er ruimte is, zonder maximum; staat de slice tot het volgende weekmoment stil, dan melding op het weekmoment (PRC-07)" is nu "bij (4) wachten", en de toelichting dat controle 1 op werkpakketten gebeurt (ASM-21) en controle 3 in ACT-02.14 zit, is weg; GOV-12: "de vrager krijgt dat als antwoord" is weg; G-02.6 en ACT-02.14 zijn ingekort. Het register (`goedkeuringen` GOV-08 en GOV-12, ACT-02.53) heeft de volledige 0.9-tekst nog wel. Geen van deze wijzigingen staat in de wijzigingshistorie of is als voorstel gelabeld (Carlo's controlepunt 6).
- **Herstel:** zet de 0.9-tekst terug in `prc-02` (GOV-08 volledig uitschrijven, ACT-02.53, GOV-12, G-02.6) en laat alleen de echte 0.10-wijzigingen vet en gelabeld.

### K10-07 (waarschuwing) "PRC-03 t/m PRC-06 veranderen niet" klopt niet voor GOV-14, GOV-15 en brieven
- **Waar:** `v010-voorstel` §C ("PRC-03 t/m PRC-06 veranderen niet") en `prc-01` Relatie (GOV-15 als pakket via PRC-03/PRC-05). `basis/prc-03.md`: "GOV-01 t/m GOV-13", pakket alleen "GOV-10, GOV-11" (regels 6, 18, 35, 43); `basis/prc-05.md`: pakket "(GOV-10, GOV-11)" en ASM-18 alleen voor GOV-10/11; de toets-lus noemt alleen use cases (ACT-01.9/ACT-02.12), niet brieven (ACT-01.27/ACT-02.15); `basis/prc-04.md` routeringstabel heeft geen rij voor paginabrieven (Socrates) en paginaontwerp (Carlo), terwijl `prc-01` "Doorlopend" brieven via PRC-04 naar Socrates laat gaan.
- **Herstel:** neem de drie subprocessen op in CHG-015 als kleine wijziging (pakket = GOV-10, GOV-11, GOV-15, en GOV-14 per document; GOV-range tot GOV-15; routeringsrij voor brieven en ontwerp; meerdere producenten, ASM-26), of leg in `prc-01` en `prc-02` expliciet vast dat de bestaande tekst daarvoor ruim genoeg gelezen wordt. Pas de zin in §C aan.

### K10-08 (waarschuwing) De profieltabel staat alleen in het voorstel; de modeldocumenten verwijzen naar een skill die nog niet bestaat
- **Waar:** `v010-voorstel` PRP-034 (tabel verplicht/optioneel/n.v.t.); `register.md` GOV-11 `criteria` ("passen bij de profieltabel (SKL-47)"); SKL-47 is `nieuw` en bestaat niet. `prc-01` en `register` hebben alleen per activiteit "(profiel P3)", geen tabel of veld per profiel.
- **Waarom:** na goedkeuring gaat PRP-034 naar `voorstellen.md`. Het model (register en PRC-01) bevat dan nergens welk product bij welk profiel hoort, en de poort (SKL-21) en GOV-11 hebben niets om tegen te toetsen.
- **Herstel:** neem de tabel op in `prc-01` (onder de beslissingen) of als blok `profielen:` in het register, en laat GOV-11 en de poort daarnaar verwijzen.

### K10-09 (waarschuwing) Geen pijl van contract naar brief: absolute uitspraak, maar er is een begrensde uitzondering
- **Waar:** `v010-voorstel` PRP-032 ("Er loopt geen pijl van het contract terug naar de brief of het ontwerp"); `prc-02` diagram `A8 -. contract kan brief niet dragen (GOV-12) .-> Q3`; `prc-01` "Doorlopend" (zelfde uitzondering in tekst, niet in het diagram).
- **Beoordeling:** geen cirkelafhankelijkheid, want de lus is begrensd (PRC-04 max. 2 rondes, akkoord van Carlo via GOV-12) en het contract past niets zelf aan. De stelling is wel te absoluut, en PRC-01 mist de pijl.
- **Herstel:** formuleer: "geen afleiding van contract naar brief; alleen een vraag of wijzigingsverzoek, begrensd en met akkoord". Teken de pijl A17 naar PRC-04 in het diagram van PRC-01.

### K10-10 (waarschuwing) Voorstellen staan in de basis, niet in een variant
- **Waar:** `prc-01` "Variant: Er is geen variant meer"; `register` nieuwe elementen met `versie: basis` en label V; `uitbreidingsgids` §2 stap 7 ("Mijn verbeteringen staan in de variant tot je kiest").
- **Beoordeling:** Carlo vroeg om de richting door te voeren in het concept (opdracht C) en alle V-items zijn gelabeld, dus niets is verborgen. De uitbreidingsgids schrijft echter de variant voor tot Carlo kiest, en de ID's .5x (ACT-01.58..60) zijn juist de variantreeks.
- **Herstel:** leg in de gids en in `prc-01` vast dat 0.10 als concept in zijn geheel de basis is en dat een afgekeurd PRP het concept laat aanpassen; of pas §2 stap 7 aan.

### K10-11 (waarschuwing) Skillstatus buiten de conventie
- **Waar:** `register.md` SKL-50 `dekking.status: "nog niet van toepassing (geen agent)"`. `bpmn-conventies` kent `bestaat`, `uitbreiden`, `koppelen`, `nieuw`, `onbekend`.
- **Herstel:** gebruik `nieuw` en zet de toelichting in `opmerking` (er is nu geen gebruiker).

### K10-12 (waarschuwing) Verwijzingen naar niet-bestaande secties en bestanden
- **Waar:** `prc-01.md` regel "Wat dit vraagt": "`v010-voorstel` §6"; `uitbreidingsgids.md` §1 (rij Architectuurprofielen) en §8 stap 1: "`v010-voorstel` §5". `v010-voorstel` heeft de onderdelen A tot en met E en PRP-nummers, geen §5 of §6. `uitbreidingsgids` §2 stap 3: "nieuw GOV-ID (vanaf **GOV-14**)", terwijl GOV-14 en GOV-15 nu bestaan en §6 "GOV-16" noemt. `v010-voorstel` kop noemt de concept-documenten `v010-prc-01`, `v010-register` enz.; in `concept/` heten ze `prc-01.md`, `register.md`.
- **Herstel:** verwijs naar PRP-034 resp. PRP-035, zet in §2 stap 3 "vanaf GOV-16", en noem in de kop de bestandsnamen zoals ze staan (of leg uit dat het Paperclip-documentnamen zijn).

### K10-13 (waarschuwing) UC2: bij een zwaarder profiel worden de use cases niet bijgewerkt
- **Waar:** `prc-01` GOV-15 en PRP-038 ("Kiest Atlas later een zwaarder profiel, dan werkt Socrates de use cases bij naar de volledige vorm") gelden voor GOV-15; `prc-02` G-02.3, ACT-02.6, ACT-02.55 en `register` ACT-02.6 noemen alleen "nieuwe documenten van dat profiel (bijvoorbeeld een domeinmodel)". Een project dat in PRC-02 van P1 naar P3 groeit, houdt dus lichte use cases terwijl ACT-01.12 en ACT-01.13 de volledige vorm veronderstellen.
- **Herstel:** voeg in ACT-02.6 en GOV-09 (profielwijziging) de stap "Socrates werkt use cases bij naar de volledige vorm" toe, met toets door Atlas en akkoord in GOV-02 of GOV-09.

### K10-14 (waarschuwing) Uitbreidingslijst: onderhoud door Carlo's eigen wensen is geen activiteit
- **Waar:** `v010-voorstel` PRP-033 punt (2) en (3): nieuwe wens van Carlo "via Dr. Evil" en bijwerken op het weekmoment; in `prc-02` bestaan alleen ACT-01.29 (vullen met "later"-pagina's) en ACT-02.17 (bijwerken na een doorloop). Start PRC-02: "er is een uitbreidingslijst" (`prc-02` Start), maar B-10 UC2 stap 1 gaat uit van Carlo's eigen lijst, die in PRC-01 niet wordt binnengehaald.
- **Herstel:** beschrijf bij ACT-01.29 en ACT-02.1 dat Dr. Evil ook de eigen lijst van Carlo opneemt (of verwijs naar PRC-07 voor het weekmoment), of benoem het als open punt.

## Wat ik niet kon toetsen (niet te beoordelen)
- De overzichten en de HTML-pagina (bewuste scopekeuze van de maker).
- De inhoud van de SKILL.md's van `architect-modeling`, `architect-database`, `architect-implementation-plan`, `architect-architecture-choice` en `quality-gates` (FND-029, FND-031, SKL-21): niet in de skillmap van de controleur. De werking van de voorgestelde skills SKL-46 t/m SKL-50.
- Paperclip-feiten in `paperclip-mapping` (M-11 t/m M-13, gedrag van `request_item_verdicts` bij een kaart met één item) en de AGENTS.md-citaten.
- Of de winst van een lichter profiel in doorlooptijd klopt: het voorstel zegt zelf dat dit niet gemeten is (PRP-034 "Winst en risico").
- Of de gekozen volgorde (paginalijst vóór de architectuurkeuze, ontwerp parallel aan de architectuur) beter is dan de volgorde uit de opdracht: dat is een keuze van Carlo (vraag 2 in `v010-voorstel` §E).

## Oordeel

**Terug naar de maker.** Twee blokkerende bevindingen (K10-01, K10-02) raken Carlo's controlepunten 1 en 2 rechtstreeks. Herstel die twee en neem de waarschuwingen K10-03 t/m K10-07 mee; daarna een hercontrole van PRC-01 (diagram) en PRC-02 (G-02.2) en van de bijgewerkte register-velden.

---

## Hercontrole (2026-10-30)

**Werkwijze:** register opnieuw geladen met `js-yaml` (geldig; nieuw blok `profielen`; 82 activiteiten, 19 beslissingen, 15 goedkeuringen, 39 skills, 82 koppelingen; 0 dubbele ID's, 0 onopgeloste verwijzingen; skillstatussen nu alleen `bestaat`, `nieuw`, `onbekend`, `uitbreiden`). Diagrammen opnieuw met `graph.py`: PRC-01 52 knopen, alles bereikbaar, 36/36 ACT in diagram en tabel; "bereikt geen einde" alleen Q4 (PRC-04-aanroep, keert terug). PRC-02 40 knopen, alles bereikbaar, 21/21 ACT; alleen Q3 en B6 (subprocesaanroepen, keren terug). Tabellen van PRC-01 en PRC-02 opnieuw tegen het register en `basis/` gelegd. `paperclip-mapping` is niet gewijzigd en blijft consistent.

### Per bevinding

| ID | Resultaat | Bewijs |
| --- | --- | --- |
| K10-01 | opgelost | `prc-02` G-02.2 heeft nu vier uitkomsten: "alle drie → G-02.7 · eisen en use cases wel, brieven niet (bijvoorbeeld een 'later'-pagina uit PRC-01) → ACT-02.15 · eisen wel, use cases niet → ACT-02.12 · eisen niet → ACT-02.3". Diagram: `G2 -- "alle drie" --> G7`, `G2 -- "brieven niet" --> A15`. Register G-02.2 (`vraag`, `uitkomsten`) is gelijk. ACT-02.15 gaat via ACT-02.13, G-02.5 en GOV-02 naar G-02.7. `v010-voorstel` PRP-030 noemt dit pad ook. |
| K10-02 | opgelost | `prc-01` G-01.9: "alleen in de eerste doorloop; herwerk loopt via PRC-05"; diagram `GOV15 -.-> R15[[PRC-05 ...]]` en `R15 -.-> A58` (niet meer naar `P9`); GOV-15 "Bij afwijzing" en register G-01.9 `opmerking` zeggen hetzelfde. Er is geen pad meer dat één token naar de samenvoeging stuurt. |
| K10-03 | opgelost | Register koppelingen ACT-01.11: `beslisser` en `controleur` zijn `ROL-01 (GOV-15)`. |
| K10-04 | opgelost | Register ROL-01 `verantwoordelijkheid` heeft de toevoeging "[0.10, Concept: vier akkoorden ... PRP-036]"; ASM-18 en ASM-19 hebben `wijziging_0_10`; processen PRC-01 en PRC-02 (`doel`, `input`, `output`, `aanleiding`) zijn bijgewerkt. De oorspronkelijke 0.9-zin blijft bewust staan, met de markering erachter. |
| K10-05 | deels | Opgelost: ACT-01.7 (naam weer als in 0.8, tabel en register gelijk), ACT-01.15, ACT-02.4, ACT-02.13 en ACT-02.53 in het register; opsomming gewijzigde activiteiten in `prc-01` en `v010-voorstel` §C is aangevuld. Rest: zie K10-15. |
| K10-06 | opgelost | `prc-02`: GOV-08, G-02.6, ACT-02.14 en ACT-02.53 hebben weer de volledige 0.9-tekst (vergeleken met `basis/prc-02.md`: GOV-08, G-02.6 en ACT-02.14 zijn identiek; ACT-02.53 en GOV-12 verschillen alleen door de 0.10-toevoeging in vet/V). Het register stemt overeen. |
| K10-07 | opgelost | `v010-voorstel` §C "Gevolgen voor de subprocessen": PRC-03 (GOV-01 t/m GOV-15; pakket ook GOV-15; meer producenten), PRC-05 (GOV-15; toetslus ook brieven), PRC-04 (routeringsregel brieven en ontwerp), PRC-06 ongewijzigd; CHG-015 noemt de drie teksten. De zin "veranderen niet" is vervallen. De feitelijke tekstwijziging volgt na akkoord, als onderdeel van dezelfde CHG. |
| K10-08 | opgelost | Register: blok `profielen` (keuze, groeisignalen, 14 producten met activiteit en P1/P2/P3); `prc-01` sectie "Producten per architectuurprofiel (G-01.6)" met dezelfde rijen; GOV-11 `criteria` verwijst naar `profielen`. De rijen komen overeen met PRP-034. |
| K10-09 | opgelost | `prc-01` "Doorlopend" en `prc-02` "Doorlopend": "Het bouwcontract wordt nooit de bron van een brief of ontwerp. De enige weg terug is een vraag (PRC-04, max. 2 rondes) of een wijzigingsverzoek met jouw akkoord (GOV-12)"; `prc-01` diagram heeft `A17 -.-> Q4`; `v010-voorstel` PRP-032 gelijk. |
| K10-10 | opgelost | `uitbreidingsgids` §2 stap 7 heeft de uitzondering "vraag je zelf om je richting door te voeren in een concept, zoals bij model 0.10, dan staat mijn uitwerking in de basis van dat concept, gelabeld V". |
| K10-11 | opgelost | Register SKL-50 `dekking.status: nieuw`, toelichting in `opmerking`. |
| K10-12 | opgelost | `grep` op "§5", "§6", "vanaf GOV-14": geen foute verwijzingen meer in `prc-01`, `uitbreidingsgids`, `v010-voorstel`; gids §2 stap 3 zegt "vanaf GOV-16"; de kop van `v010-voorstel` noemt de concept-documenten als Paperclip-documenten op WEB-19. |
| K10-13 | opgelost | `prc-02` ACT-02.6 (output): bij licht-use-cases vraagt Atlas Socrates via PRC-04 ze naar de volledige vorm te brengen; ze komen mee in het akkoord (GOV-09 `informatie` en tabelrij GOV-09 noemen "de bijgewerkte use cases"); register ACT-02.6 en GOV-09 gelijk. |
| K10-14 | deels | `prc-02` Start en register ACT-01.29 (`input`: "de eigen lijst van ROL-01 ...") nemen Carlo's eigen lijst en de weg voor nieuwe wensen op. De tabelrij ACT-01.29 in `prc-01` is niet bijgewerkt: zie K10-15. |

### Nieuwe bevindingen

#### K10-15 (waarschuwing) PRC-01 en register verschillen nog op een paar plekken na het herstel
- **Waar:** `prc-01` ACT-01.29 (input "paginalijst ("later"), backlog") tegenover het register ACT-01.29 (input begint met "de eigen lijst van ROL-01 met mogelijke uitbreidingen"); `prc-02` Start zegt dat de lijst in ACT-01.29 met Carlo's eigen lijst wordt gevuld, maar de bron daarvan ontbreekt in de PRC-01-rij (naam, input en resultaat). Verder: ACT-01.24 (input in `prc-01` met "paginabrieven", register zonder) en ACT-01.25 (input in `prc-01` "technisch ontwerp", register "kernontwerp").
- **Herstel:** neem de eigen lijst van Carlo op in de rij ACT-01.29 van `prc-01` (input en resultaat), en maak de inputs van ACT-01.24 en ACT-01.25 in het register gelijk aan de tabel.

Geen nieuwe fouten door het herstel gevonden in de diagrammen, de YAML of de ID's. Wat niet te beoordelen was, blijft zoals hierboven (overzichten, SKILL.md's van de architect-skills, Paperclip-feiten, werking van SKL-46 t/m SKL-50).

### Nieuw oordeel

**Kan worden ingediend.** Geen blokkerende bevindingen meer: K10-01 en K10-02 zijn opgelost, en van K10-03 t/m K10-14 zijn er twaalf opgelost of deels opgelost. Er staat één waarschuwing open (K10-15, kleine tekstverschillen tussen `prc-01` en het register); die mag vóór of na indiening worden hersteld.

### Verwerking door de maker (2026-10-30)
K10-15 hersteld: `prc-01` ACT-01.29 noemt nu ook de eigen lijst van Carlo als input; in het register heeft ACT-01.24 de paginabrieven als input en ACT-01.25 "technisch ontwerp". Daarmee zijn K10-05 en K10-14 ook volledig. Na dit kleine herstel is geen nieuwe controle door een aparte agent gedaan; de maker heeft de YAML opnieuw gevalideerd en de diagrammen opnieuw gecontroleerd.
