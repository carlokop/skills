# Modelcontrole ronde 2, procesmodellen (model 0.3)

| | |
| --- | --- |
| Datum | 2026-10-28 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`); alleen gelezen, geen modelbestand gewijzigd |
| Scope | `processen/PRC-01` t/m `PRC-06`, `register.md` (YAML geladen met js-yaml), `proces-catalogus.md`, `overzichten/paperclip-mapping.md`, `wijzigingen.md` (CHG-004); achtergrond ronde 1: `ORGANISATIE.md`, `bevindingen.md`, `voorstellen.md`, `controle-2026-10-28-ronde-1-v02.md` |
| Bronnen | opdracht van Carlo (beschrijving WEB-19, comment `a5a789fe` op WEB-17), `rolanalyse-techlead` v0.2 (TL-V1 t/m TL-V5), `rolanalyse-orchestrator` v1.0 (V8, OR-xx, SM-xx), skill `paperclip` met `references/api-reference.md` en `references/cases.md` |
| Niet herhaald | Mermaid-syntaxis (9 diagrammen, al gecontroleerd met de mermaid-parser) |

## Oordeel: terug naar de maker

Vier blokkerende bevindingen (E-01 t/m E-04) en negen waarschuwingen (E-05 t/m E-13). De opzet is goed: de procesladder, vier herbruikbare subprocessen, basis en variant naast elkaar met PRP-verwijzing, een Paperclip-kolom per stap, het eindpunt "Backlog gereed, overdracht naar implementatie" in beide primaire processen, en geen testers, developers of marketeers als baan of stap. Register en procesbeschrijvingen komen mechanisch overeen (64 ACT's, geen verschillen in naam, rol, input, output en label). De blokkerende punten zitten in de proceslogica van het basisdiagram van PRC-01, een ontbrekend GOV-ID in PRC-04 en een stap uit Carlo's eigen workflow die in de basis ontbreekt. Ze zijn gericht te herstellen.

Van de negen punten uit de vorige controle (D-01 t/m D-09) zijn acht hersteld. D-04 is voor een deel hersteld; zie "Hercontrole D-01 t/m D-09" onderaan.

### Blokkerend
- **E-01**: basisdiagram PRC-01: de vijf GOV's voor de documenten van Atlas zijn één knoop zonder uitgaande routes, terwijl de ACT's zonder poort doorlopen.
- **E-02**: PRC-01 G-01.2 "tech lead bestaat niet" eindigt in een tweede eindknoop zonder terugweg.
- **E-03**: Carlo's "De architect kan vragen aan jou stellen" (UC1 stap 3, Besloten) ontbreekt in de basis; PRC-04 stuurt vragen aan ROL-01 via ROL-02.
- **E-04**: het wijzigingsverzoek in PRC-04 gaat naar PRC-03 zonder GOV-ID; `roept_aan` van PRC-04 mist PRC-03.

### Waarschuwingen
- **E-05**: PRC-04 bevat voorstellen (PRP-005) als `versie: basis`, zonder variantsectie.
- **E-06**: PRC-04: diagramknoop zonder ACT-ID, ongeldige verwijzing "ACT-05.4-patroon", geen telling, geen route naar PRC-06 in het diagram.
- **E-07**: PRC-06: wachten zonder uitgang in het diagram; een geannuleerd blokkerend issue wekt de taak niet (Paperclip-feit).
- **E-08**: variantdiagram PRC-01 wijkt af van de tabel (volgorde ACT-01.56, ACT-01.14 vóór GOV-11) en laat ACT-01.5, ACT-01.7 en de PRP-012-stop weg; PRP-003 telt 4 akkoorden, PRC-01 telt 3.
- **E-09**: terugloppen in de varianten zonder maximum of escalatie (ACT-01.55, 02.52, 02.53, 01.57, 02.54).
- **E-10**: Atlas leest of toetst nadat Carlo de API-contracten al heeft goedgekeurd; de opmerkingen hebben geen route terug.
- **E-11**: PRC-02: ACT-02.2 ontbreekt in het diagram, en het diagram heeft geen berichtenstromen voor de vragenloops uit Carlo's UC2.
- **E-12**: Paperclip-mapping: reviewpoort tussen agents als bridge-issue (de skill raadt dat af) en "Feit" gebruikt voor iets wat niet gevonden is.
- **E-13**: ID- en labelhygiëne: G-ID's zonder plek in conventie en register, geen Label-kolom bij beslissingen in PRC-03 t/m 06, 17 ACT's met een `rol` die geen ROL-ID is, afwijkende bestandsverwijzing.

## Resultaten per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's uniek, volgens schema, niet hergebruikt | voldoet | YAML laadt zonder fouten. 64 ACT-ID's, geen dubbelen; GOV-01 t/m GOV-11, ASM-01 t/m ASM-14 (ASM-08 staat achteraan, alleen volgorde), OPEN-01 t/m OPEN-09, CHG-001 t/m CHG-004. Nummering variant begint bij .51 en botst niet met de basis. Kanttekening: G-xx.x, zie E-13. |
| Elke verwijzing wijst naar een bestaand element | voldoet met kanttekening | Script over alle bestanden: elk ACT-, GOV-, PRC-, ROL-, AGT-, ASM-, OPEN-, FND-001 t/m 016, PRP-001 t/m 015 en CHG-ID bestaat; elk "Vervolg" in de tabellen wijst naar een bestaande ACT of GOV. Uitzonderingen: "ACT-05.4-patroon" (E-06), G-ID's (E-13). |
| Elk procesmodel heeft status en versie | voldoet | PRC-01 t/m PRC-06: `status: Concept`, `versie: "0.3"`; PRC-07/08 "n.v.t. (context)". Catalogus: "Concept 0.3". |
| Doel, trigger, start- en eindconditie beschreven | voldoet | Alle zes beschrijvingen hebben "Doel en uitkomst" en de tabel Trigger/Start/Einde. |
| Elke belangrijke activiteit: rol, input, output, vervolg | voldoet | Alle 64 ACT's hebben een rij met die vier velden. Kanttekening: 17 `rol`-waarden zijn geen ROL-ID (E-13). |
| Elke beslissing heeft alle uitgaande routes en afhandeling negatief | voldoet niet | G-01.2 nee en GOV-02/03/09/04/05 in het diagram: E-01, E-02. De overige beslissingen (G-01.1, G-02.1 t/m 02.3, G-03.1, G-04.1, G-04.2, G-05.1, G-06.1, G-06.2) hebben alle uitkomsten in de tabel. |
| Fouten, afwijzingen, herstelroutes gemodelleerd; elke terugloop heeft een uitgang | voldoet niet | Afkeuring (PRC-05), blokkade (PRC-06) en vragenloop (PRC-04) zijn gemodelleerd met maximum en escalatie. Gaten: E-02, E-07, E-09, E-10. |
| Elke menselijke goedkeuring heeft een GOV-ID | voldoet niet | GOV-01 t/m GOV-11 staan in register en beschrijvingen. Het wijzigingsverzoek in PRC-04 (ACT-04.4 → PRC-03) heeft er geen: E-04. |
| Eindpunt "Backlog gereed, overdracht naar implementatie"; scope | voldoet | Eindknoop met die tekst in PRC-01 (basis en variant) en PRC-02 (basis en variant). Geen baan of stap voor testers, developers of marketeers. De woorden komen alleen voor in ASM-12 ("de developers", als bron) en in de variantrij "Afspraken voor developers" (PRP-010). Sentinel is AGT-05 met `scope: buiten`. |
| Elke activiteit staat in diagram, beschrijving en register | voldoet niet | Register ↔ beschrijving: 64/64 gelijk. Diagram ↔ tabel: ACT-02.2 ontbreekt in het basisdiagram van PRC-02 (E-11); ACT-01.5 en ACT-01.7 ontbreken in het variantdiagram van PRC-01 zonder samengevoegde benoeming (E-08); een knoop in PRC-04 zonder ACT-ID (E-06). Samengevoegde knopen "ACT-01.10 / 11 / 12 / 13", "ACT-01.3 / 01.4", "ACT-02.1 … ACT-02.4" en "ACT-02.5 … ACT-02.9" zijn benoemd en daarom aanvaard. |
| Overzichten komen overeen met register | voldoet met kanttekening | Catalogus en mapping volgen het register (processen, activiteiten per proces, GOV's). Afwijking: `roept_aan` van PRC-04 (E-04). `ORGANISATIE`, `bevindingen` en `voorstellen` verwijzen nog naar "register v0.2"; ze zijn in ronde 2 niet gewijzigd, dus dat is acceptabel. |
| `.bpmn`-bestand heeft validatieresultaat | niet van toepassing | Er is geen `.bpmn`-bestand. |
| Elke activiteit heeft capability en skill, uitvoerder en één verantwoordelijke; onafhankelijke controle | niet te beoordelen | Volgt in ronde 3 (zo staat het in `register` en `CHG-004`). Wel gezien: de controle door Atlas (ACT-01.55, ACT-02.52) is in de variant niet de maker. |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet met kanttekeningen | Elke ACT heeft B/F/V/A met bron. Kanttekeningen: E-05, E-12, E-13. |
| Huidige en gewenste situatie gescheiden | voldoet | Alle ACT's `situatie: to-be`; feiten (F) verwijzen naar de huidige instructies als bron, niet als beschrijving van het proces. |
| Wijzigingshistorie bijgewerkt | voldoet | CHG-004 (0.3): 64 ACT's, GOV-01 t/m 11, ASM-10 t/m 14, OPEN-09, mapping, gevolgen voor agents en skills "geen wijziging". Alle aantallen kloppen met het register. Elke procesbeschrijving heeft een eigen historie. |
| Goedgekeurd model niet overschreven | voldoet | 0.1 blijft "Goedgekeurd (2026-10-27, Carlo, GK-1)"; 0.2 en 0.3 zijn Concept en worden bij GK-2 voorgelegd, de wijziging van ronde 1 als apart punt (herstel D-08). |
| Verwijzingen naar buiten (agents, skills) | niet te beoordelen | De skillnamen in de Label-kolom (`requirements-clarification`, `escalation-management`, `dependency-management`, `architect-modeling`, `requirements-orchestration`) heb ik niet tegen de skilllijst of AGENTS.md getoetst; zie "Wat ik niet kon toetsen". De Paperclip-begrippen heb ik wel getoetst tegen de skill `paperclip`: zie E-07 en E-12. |

## Toets op Carlo's opdracht (ronde 2)

| Eis | Stand |
| --- | --- |
| BPMN-light: banen, taken, poorten, events, data-objecten, berichtenstromen | Banen, taken, poorten (`{{GOV}}`), start/eind-events en berichtenstromen (`-. ✉ .->`) zijn aanwezig. Data-objecten ontbreken als diagramelement: documenten staan alleen in de tabelkolommen Input en Resultaat. Dat is een afwijking van "documenten als data-objecten", maar de opdracht zegt ook "detail hoort in de secties, niet in de diagrammen". Ik meld het hier en niet als bevinding; Carlo kan kiezen. |
| Procesladder met herbruikbare subprocessen, één keer gedefinieerd | Voldoet: PRC-03 t/m PRC-06 zijn één keer gedefinieerd en worden aangeroepen. Geen enkel subproces verwijst naar een concrete agent behalve via de lanes "producent", "vrager", "ontvanger". Een nieuwe use case of agent wijzigt de diagrammen dus niet. |
| Carlo's workflow als basis, verbeteringen als apart gemarkeerde variant | PRC-01 en PRC-02: voldoet (basis ACT-xx.1 t/m, variant ACT-xx.51 en hoger, alle PRP's genoemd). PRC-04 en PRC-05: E-05. Eén stap uit Carlo's workflow ontbreekt: E-03. |
| Afkeuring met vast aantal rondes en escalatie | Voldoet: PRC-05, 2 herzieningsrondes (voorstel PRP-006, aantal zoals gevraagd als voorstel), daarna GOV-08. Na een besluit telt het opnieuw (ASM-11). |
| Geblokkeerde taken | PRC-06 aanwezig; zie E-07. |
| Paperclip-mapping per stap, ⚠ waar het niet past | Kolom per stap in elke tabel plus `paperclip-mapping` met M-1 t/m M-6. Zie E-12. |
| Stabiele ID's, labels Besloten/Voorstel/Aanname/Feit met bron | ID's stabiel. Labels per ACT aanwezig; ontbreken bij de beslissingen van PRC-03 t/m 06 (E-13). |
| Geen verzonnen feiten over Paperclip of agents | De Paperclip-begrippen kloppen met de skill: `request_confirmation` met `target` op een documentrevisie, `stale_target`, `supersedeOnUserComment`, `ask_user_questions`, `blockedByIssueIds`, wake `issue_blockers_resolved`, `parentId`, `in_review`, "geen epic-begrip gevonden" (de skill noemt geen epic). Uitzonderingen: E-07 en E-12. |

## Toets: is de basis echt Carlo's workflow?

PRC-01 en PRC-02: grotendeels ja. Alle stappen van UC1 (1 t/m 5) en UC2 staan in de basis met B-, TL- of F-label. Alle voorstellen die ik kon herleiden (PRP-001, 002, 003, 007, 009, 010, 011, 012, 013, 014, 015) staan in de variant met PRP-verwijzing; PRP-004 is terecht niet als variant opgenomen (vervalt door TL-V5) en PRP-008 is grotendeels beslist.

Drie kanttekeningen:
- **Een stap van Carlo ontbreekt**: E-03.
- **Stappen met F of A in de basis, niet van Carlo.** ACT-01.2, 01.7, 01.8, 01.14 (F, uit de instructies), ACT-01.11 met GOV-09 (F en A, OPEN-06) en ACT-02.1 t/m 02.3 (B met TL-V2, F en A). Ze zijn gelabeld en ACT-01.11 is in het diagram als "(OPEN-06)" gemarkeerd. Dat is aanvaardbaar. De tekst "Basis: jouw workflow, aangevuld met jouw besluiten" is wel te smal: F- en A-stappen horen er ook bij. Pas de zin aan of voeg "en de huidige werkwijze van de agents (F)" toe.
- **Voorstellen in de basis**: E-05 (PRC-04). Bij PRC-05 is het aantal rondes en de escalatieopties een voorstel dat Carlo zelf vroeg ("stel zelf het aantal voor"); daar is `V` terecht, maar ACT-05.1, 05.3 en 05.6 staan als `versie: basis`. Dat is aanvaardbaar zolang het aantal als parameter zichtbaar blijft (nu: "2" in G-05.1, ACT-05.1 en PRP-006).

## Bevindingen

### E-01 (blokkerend): basisdiagram PRC-01: de GOV's van Atlas zijn een dode eindknoop en de poorten sturen de keten niet

- **Bewijs:**
  - `processen/PRC-01-nieuwe-klant.md`, Tussendiagram (basis): `GOVA{{"GOV-02 / 03 / 09 / 04 / 05<br/>per document"}}` heeft geen uitgaande pijl. De enige pijl is `A9 & A10 & A11 & A12 & A13 -. "PRC-03 per document" .-> GOVA`.
  - Dezelfde ACT's lopen in het diagram ongepoort door: `A9 --> A10 --> A11 --> A12 --> A13 --> A14`.
  - Tabel Beslissingen en goedkeuringen: "GOV-02 | akkoord → ACT-01.10 | PRC-05 → ACT-01.9", "GOV-03 | akkoord → ACT-01.11 | PRC-05 → ACT-01.10", "GOV-09 | akkoord → ACT-01.12", "GOV-04 | akkoord → ACT-01.13", "GOV-05 | akkoord → ACT-01.14". Elke volgende stap wacht volgens de tabel dus op het akkoord.
  - Carlo's opdracht UC1 stap 3: "Ik geef bij elk document akkoord."
  - Alleen GOV-01 en GOV-06 hebben in het diagram een akkoord- en afkeuringspijl (`-. "↩ afgekeurd: PRC-05" .->`).
- **Eis:** elk pad bereikt een einde, elke beslissing heeft uitgaande routes en een afhandeling voor afwijzing, diagram en tabel komen overeen. Een samengevoegde knoop is alleen acceptabel als de stroom erdoor loopt.
- **Herstel:** laat de keten door de poort lopen. Bijvoorbeeld `A9 --> GOV2{{GOV-02 Use cases}} -- akkoord --> A10 --> GOV3 --> A11 --> GOV9 --> A12 --> GOV4 --> A13 --> GOV5 --> A14`, met `-. ↩ afgekeurd: PRC-05 .->` naar de eigen ACT. Of houd één knoop, maar met een uitgaande pijl naar A14 en één afkeuringspijl "per document naar de eigen ACT (zie tabel)", en haal de directe pijlen `A9 --> A10 --> ... --> A13` weg.

### E-02 (blokkerend): G-01.2 "tech lead bestaat niet" eindigt in een tweede eindknoop zonder terugweg

- **Bewijs:**
  - `processen/PRC-01-nieuwe-klant.md`, Tussendiagram (basis): `G2 -- "nee: wachten (OPEN-07)" --> W(["PRC-06 / PRC-08"])`. `W` heeft de vorm van een eindknoop `([...])` en geen uitgaande pijl; er is geen pijl terug naar `G2` of `A16`.
  - Tabel: "G-01.2 | Bestaat de tech lead (AGT-04)? | ja → ACT-01.16 · nee → wachten, PRC-06 met PRC-08 als blokkerend proces".
  - Het proces heeft hierdoor een tweede eindtoestand die niet "Backlog gereed, overdracht naar implementatie" is.
  - In het variantdiagram ontbreekt G-01.2 helemaal, terwijl de variantrij "Tech lead bestaat niet | wachten (OPEN-07) | stop na het kernontwerp tot PRC-08 klaar is | PRP-012" een gedrag beschrijft.
- **Eis:** elk pad bereikt een einde; een wachtroute heeft een uitgang die terugkeert naar het proces. Het enige eindpunt van het proces is "Backlog gereed, overdracht naar implementatie" (opdracht, scope).
- **Herstel:** teken `G2 -- nee --> W[["PRC-06 Blokkade (blokkerend proces: PRC-08)"]] -. "agent bestaat" .-> G2` (of terug naar `A15`), als tussengebeurtenis en niet als eindknoop. Neem dezelfde beslissing op in het variantdiagram, met de variant "stop" van PRP-012 als afwijking, of zeg in de tabel dat G-01.2 in de variant ongewijzigd blijft en wat "stop" daar betekent.

### E-03 (blokkerend): Carlo's "De architect kan vragen aan jou stellen" ontbreekt in de basis

- **Bewijs:**
  - Opdracht, Use case 1 stap 3: "De architect stelt op: use cases, domeinmodel, sequentiediagrammen en een ontwerpklassendiagram (globaal systeem). Ik geef bij elk document akkoord. **De architect kan vragen aan jou stellen.**" Dit is Besloten (komt uit de beschrijving).
  - `PRC-01-nieuwe-klant.md`: alleen Socrates stelt vragen aan Carlo (ACT-01.4 en ACT-01.5). Geen activiteit, bericht of tekstregel waarin Atlas (ROL-04) een vraag aan ROL-01 stelt. De regel "Doorlopend" noemt alleen "vragen tussen Atlas, tech lead en Socrates" en "vragen van Dr. Evil over de opdeling".
  - `PRC-04-vragenloop.md`, routeringstabel: "Prioriteit, scope, productkeuze | ROL-01, via ROL-02 | F (rolanalyse-orchestrator §3)". ASM-12 zegt dat een vraag rechtstreeks van vrager naar ontvanger loopt. Voor Atlas → Carlo is dat dus niet gemodelleerd, en de huidige route via Dr. Evil is een feit over scope en prioriteit, niet over de vragen van Atlas.
  - `ORGANISATIE.md` §5 heeft ook alleen "ROL-04 → ROL-01 | Documenten ter goedkeuring".
- **Eis:** de basis is Carlo's workflow plus zijn besluiten; wat hij beschreef staat erin. Een stap die niet past, wordt als afwijking zichtbaar gemaakt (aanname of OPEN-vraag), niet weggelaten.
- **Herstel:** voeg in de basis van PRC-01 een berichtenstroom `Atlas -. ✉ vraag .-> Carlo` toe (bijvoorbeeld als ACT-01.21 "Vragen stellen aan de project owner (architect)" met dezelfde Paperclip-vorm als ACT-01.4, of als route ROL-04 → ROL-01 in de routeringstabel van PRC-04, met label B (UC1 stap 3)). Leg in PRC-04 vast of Dr. Evil daarbij tussen zit (nu botst "via ROL-02" met Carlo's tekst) en maak daar een ASM of OPEN van als je dat niet weet.

### E-04 (blokkerend): het wijzigingsverzoek in PRC-04 gaat door de akkoord-poort zonder GOV-ID; `roept_aan` van PRC-04 mist PRC-03

- **Bewijs:**
  - `PRC-04-vragenloop.md`: ACT-04.4 "Wijzigingsverzoek opstellen ... Vervolg PRC-03"; G-04.1 "ja → ACT-04.4 → PRC-03"; Mermaid `A4 --> P3[["PRC-03 Akkoord-poort"]]`. Een wijzigingsverzoek vraagt volgens het eigen label "akkoord van de gebruiker". Er is geen GOV-ID voor dat akkoord; GOV-08 is het escalatiebesluit.
  - `PRC-03-akkoord-poort.md`, Relatie: "Elke aanroep heeft een eigen GOV-ID (bijvoorbeeld GOV-01 akkoord analyse)" en "Aangeroepen door PRC-01 en PRC-02 (en in PRC-04 bij een wijzigingsverzoek)". PRC-04 voldoet daar niet aan.
  - `register.md`, PRC-04: `roept_aan: [PRC-06]`; PRC-04-beschrijving zegt "Roept PRC-03 aan bij een wijzigingsverzoek, PRC-06 als de ontvanger niet reageert". `proces-catalogus.md`: PRC-04 "Roept aan: PRC-06".
  - Register `goedkeuringen`: alleen GOV-08 noemt `processen: "PRC-04, PRC-05, PRC-06"`; geen GOV voor het wijzigingsverzoek.
- **Eis:** elke menselijke goedkeuring is gemarkeerd met een GOV-ID (checklist); register en overzichten komen overeen.
- **Herstel:** voeg een goedkeuringsmoment toe, bijvoorbeeld GOV-12 "Akkoord wijzigingsverzoek (eis of ontwerp)", `bevoegd: ROL-01`, `processen: "PRC-02, PRC-04"` (PRC-02 noemt dit al in Uitzonderingen), `subproces: PRC-03`; zet het in het diagram van PRC-04 bij `P3`, in de beslissingentabel en in de catalogus. Pas `roept_aan` van PRC-04 aan naar `[PRC-03, PRC-06]` in register en catalogus.

### E-05 (waarschuwing): PRC-04 bevat voorstellen als basis, zonder variantsectie

- **Bewijs:**
  - Register: ACT-04.1 `versie: basis`, label "V (PRP-005)"; ACT-04.6 en ACT-04.7 idem. In `PRC-04-vragenloop.md` staat in "Doel en uitkomst": "De begrenzing (max. 2 rondes, escalatie) en de routering zijn **V** (PRP-005)", en het bestand heeft geen kopje "Variant".
  - Opdracht: "Modelleer mijn versie als basis en toon verbeteringen als apart gemarkeerde variant." PRP-005 is een voorstel uit de kritische review (`voorstellen.md`).
  - Zonder ACT-04.1, 04.6 en 04.7 heeft de lus in de basis (ACT-04.3 → ACT-04.5 → vervolgvraag) geen uitgang. Dat is juist het punt waar Carlo naar vroeg ("hoe voorkom je eindeloze loops").
- **Eis:** een voorstel staat niet in de basis (opdracht, toets 2); of het is expliciet een door Carlo gevraagd voorstel.
- **Herstel:** kies één van twee. (a) Splits PRC-04 in basis (ACT-04.2, 04.3, 04.4, 04.5 en G-04.1; vervolgvraag zonder maximum, met een open uitgang bij ROL-02) en variant (ACT-04.51 ontvanger bepalen, ACT-04.52 vervolgvraag, ACT-04.53 escaleren, PRP-005), zoals PRC-01 en PRC-02. Gebruik dan nieuwe ID's, want de bestaande ID's zijn al vergeven. (b) Laat het zoals het is, maar zeg in PRC-04, register (`versie: basis` met een veld `voorstel: PRP-005`) en catalogus dat PRC-04 de begrenzing als voorstel in de basis heeft opgenomen, omdat een vragenloop zonder uitgang niet te modelleren is, en laat Carlo op GK-4 kiezen. Optie (b) is de kleinste wijziging.

### E-06 (waarschuwing): PRC-04: diagram en tabel komen niet overeen

- **Bewijs:**
  - Diagram: `X["Escalatie voorleggen (zoals ACT-05.4)"]` in de lane ROL-02 heeft geen eigen ACT-ID. Tabel: ACT-04.7 Vervolg "ACT-05.4-patroon → GOV-08". "ACT-05.4-patroon" is geen element.
  - Tabel Uitzonderingen: "Ontvanger reageert niet: ... behandelt het als blokkade (PRC-06)" en Relatie "Roept ... PRC-06 aan". Het diagram toont geen route naar PRC-06.
  - G-04.2 "nee en < 2 rondes → ACT-04.6 · nee na 2 rondes → ACT-04.7". Geen activiteit telt de rondes; PRC-05 heeft daarvoor wel ACT-05.1 (met een ⚠ in de mapping).
  - Einde "Besluit ROL-01" na GOV-08: niet beschreven wat de vrager daarmee doet (doorgaan, stoppen).
- **Eis:** elke activiteit staat in diagram, beschrijving en register; verwijzingen wijzen naar een bestaand element; een telling die een beslissing stuurt, is een activiteit of een eigenschap met een bron.
- **Herstel:** maak van `X` een activiteit (ACT-04.8, ROL-02, "Escalatie met opties voorleggen", Vervolg GOV-08) en verwijs ACT-04.7 daarnaar; teken de route `ontvanger reageert niet → PRC-06` (bijvoorbeeld een grensgebeurtenis op ACT-04.3); zeg in G-04.2 hoe de rondes geteld worden (bijvoorbeeld aantal comments van de vrager op het vraag-issue, M-1-achtig) en zet dat in de mapping; beschrijf in de tabel Uitzonderingen wat het besluit voor de vrager betekent.

### E-07 (waarschuwing): PRC-06 wacht zonder uitgang in het diagram, en een geannuleerd blokkerend issue wekt de taak niet

- **Bewijs:**
  - `PRC-06-blokkade.md`, diagram: `G1 -- ja --> A2["ACT-06.2 Wachten op blokkerend issue"] --> E1(["Opgelost, werk gaat verder"])`. Uit `A2` is geen route naar `A4` of `A5` getekend. De tekst onder Uitzonderingen zegt "Blokkade lost niet op: ROL-02 ziet het bij de dagelijkse flowcheck (SM-01) en escaleert". Dat staat alleen in tekst en steunt op een routine die niet bestaat (⚠ in dezelfde regel, FND-013).
  - Skill `paperclip`, "Issue Dependencies (Blockers)": "`cancelled` blockers do **not** count as resolved — remove or replace them explicitly before expecting `issue_blockers_resolved`." In het model eindigt PRC-05 ook met "gestopt" en kan een vraag-issue (PRC-04) of een blokkerend issue worden geannuleerd. De taak die erop wacht, wordt dan nooit gewekt en niemand ziet het.
  - `overzichten/paperclip-mapping.md`: M-1 t/m M-6; dit geval staat er niet in. ACT-06.2 Paperclip-kolom zegt alleen "wake `issue_blockers_resolved`".
- **Eis:** elk pad bereikt een einde en elke terugloop heeft een uitgang; Paperclip-gedrag dat het model raakt wordt als feit opgenomen of als ⚠ gemarkeerd.
- **Herstel:** teken een route `A2 -. "blocker geannuleerd of geen voortgang" .-> A4` (of een tijdgrens/gebeurtenis als de flowcheck ontbreekt); voeg `M-7` toe aan de mapping: "Een geannuleerd blokkerend issue wekt de taak niet (skill `paperclip`). Dr. Evil of de eigenaar moet de blocker vervangen of verwijderen", label Feit met bron; noem het geval ook bij ACT-04.2 (vraag-issue) en bij PRC-05 "gestopt".

### E-08 (waarschuwing): variantdiagram PRC-01: volgorde, weggelaten stappen en akkoordentelling

- **Bewijs:**
  - Tabel ACT-01.56: "Vervolg ACT-01.18"; register: `ACT-01.56 ... input: kernontwerp`. Diagram: `A16 --> A56 --> A17` (dus ACT-01.56 → ACT-01.17).
  - Diagram: `A10["ACT-01.10 / 11 / 12 / 13 Kernontwerp"] --> A14["ACT-01.14 Melden"]` en daarna `A14 --> GOV11 -- akkoord --> A15`. ACT-01.14 heet "Goedgekeurd kernontwerp melden" met Input "goedkeuringen". In het diagram komt de melding vóór het akkoord GOV-11.
  - Tabel Variant: ACT-01.5 (antwoorden van ROL-01) en ACT-01.7 (analyse melden) ontbreken in het diagram: `A3["ACT-01.3 / 01.4 Onderzoeken en vragen"] --> A6`. "ACT-01.3 / 01.4" is benoemd, ACT-01.5 en ACT-01.7 niet. Ook G-01.2 ontbreekt (zie E-02).
  - Variantrij "Akkoorden in de variant: 3 (GOV-10, GOV-11, GOV-06) in plaats van 6 of 7". `voorstellen.md`, PRP-003 Stand-tabel: "De variant telt drie akkoorden in UC1 plus de API-contracten"; PRP-003 "Stand 0.2": "TL-V4 voegt een vierde akkoord toe" en punt 3 "Eerste slice (nieuw): wat er in slice 1 zit en in welke volgorde de epics komen. Dit is een productbesluit." In de variant is er geen akkoord op de inhoud van slice 1 en geen opmerking dat dat vervalt.
- **Eis:** diagram en tabel komen overeen; een weggelaten stap wordt benoemd; het voorstel wordt getrouw weergegeven (variant ≠ eigen interpretatie).
- **Herstel:** (a) maak in diagram of tabel één van ACT-01.56 → 01.17 of → 01.18 en pas de ander aan; PRP-010 zegt "in slice 1" en "Atlas toetst het", dus het conventiebestand kan na het plan komen, wat bij de tabel past. (b) Zet ACT-01.14 achter GOV-11 (`GOV11 -- akkoord --> A14 --> A15`) of hernoem het naar "Kernontwerp melden". (c) Voeg ACT-01.5 en ACT-01.7 toe aan de samengevoegde knoop of laat in de tabel weten dat ze zijn vervangen. (d) Zeg in de variantrij of het akkoord op de inhoud van slice 1 deel is van GOV-06 of vervalt, en maak het aantal akkoorden in `voorstellen` PRP-003 en PRC-01 gelijk (3 of 4).

### E-09 (waarschuwing): terugloppen in de varianten zonder maximum of escalatie

- **Bewijs:**
  - `PRC-01`, variant: "ACT-01.55 ... bij afwijking terug naar de tech lead (max. 2 rondes, PRC-05-patroon)" en `A55 -. "↩ afwijking (max. 2)" .-> A16`. Wat er na ronde 2 gebeurt staat nergens.
  - `PRC-01` ACT-01.57 "einde, of terug naar ACT-01.20"; `PRC-02` ACT-02.54 "einde, of terug naar ACT-02.11"; ACT-02.53 "ACT-02.11, of terug naar de tech lead of Socrates"; diagram `A53 -. "↩ check faalt" .-> A5` (alleen de tech lead, niet Socrates). Geen maximum, geen escalatie.
  - `PRC-02`, variant, ACT-02.52: "Vervolg ACT-02.53 of ACT-02.7", diagram: `A52 -. "↩ afwijking (max. 2)" .-> A5` (samengevoegde knoop ACT-02.5 … ACT-02.9, niet ACT-02.7).
  - Checklist: "elke terugloop heeft een uitgang"; Carlo: geen eindeloze loops.
- **Eis:** elke terugloop wijst naar een bestaande activiteit en heeft een uitgang (maximum plus escalatie).
- **Herstel:** laat in de variant een afwijking na ronde 2 via PRC-05 (ACT-05.3 → GOV-08) lopen en zeg dat bij ACT-01.55, 02.52 en 02.53 (en voor ACT-01.57 en ACT-02.54 hetzelfde, of leg uit waarom één herhaling genoeg is). Laat de pijl in het variantdiagram van PRC-02 naar ACT-02.7 (of de benoemde samengevoegde knoop) wijzen, zoals de tabel.

### E-10 (waarschuwing): Atlas leest of toetst nadat Carlo de API-contracten al heeft goedgekeurd

- **Bewijs:**
  - Basis PRC-01: `A17 --> GOV6 -- akkoord --> A18 --> A19 --> A20`; ACT-01.19 "Opdeling en plan meelezen", Resultaat "opmerkingen aan de tech lead (via PRC-04)", Vervolg ACT-01.20. Basis PRC-02: `A8 --> GOV6 -- akkoord --> A9 --> A10 --> A11`, idem. Variant: `A17 --> GOV6 -- akkoord --> A18 --> A55`, `A55 -. ↩ afwijking .-> A16`.
  - `voorstellen.md` PRP-009: "toetst Atlas het program design en de API-contracten ... voordat Dr. Evil een slice opdeelt". `rolanalyse-techlead` TL-V4: "Carlo keurt alleen de API-contracten goed. De rest van het ontwerp per slice leest Atlas mee."
  - Gevolg: als Atlas een afwijking meldt, is het API-contract waarvoor Carlo net akkoord gaf mogelijk ongeldig. In de basis geeft ACT-01.19 geen vervolgroute bij opmerkingen (alleen naar ACT-01.20); in de variant leidt de terugloop naar ACT-01.16 niet aantoonbaar tot een nieuw GOV-06. Dit raakt direct doel D3 (Carlo's tijd) en kan Carlo twee keer hetzelfde laten goedkeuren.
- **Eis:** een terugloop leidt tot een volledige herhaling van de betrokken poorten, en een opmerking in een vragenloop heeft een gevolg in het proces.
- **Herstel:** laat Atlas meelezen en toetsen vóór GOV-06 (ACT-01.19 en ACT-01.55 vóór de poort, na ACT-01.18 of tussen ACT-01.17 en GOV-06), of zeg dat een afwijking na GOV-06 een nieuw GOV-06 vraagt. Voeg in de basis een route toe voor een opmerking die iets verandert (terug naar ACT-01.16/01.17/01.18), naast de route "geen opmerking → ACT-01.20".

### E-11 (waarschuwing): PRC-02 laat ACT-02.2 en de vragenloops uit Carlo's UC2 weg in het diagram

- **Bewijs:**
  - `PRC-02-backlog-uitbreiden.md`: ACT-02.2 "Volgende wens kiezen" (ROL-01) staat in de tabel (Vervolg G-02.2), maar niet in het diagram: `G1 -- nee --> GOV7 --> G2`. De ROL-01-lane heeft alleen vier `{{GOV}}`-knopen. De tabel Beslissingen noemt ACT-02.2 en GOV-07 afzonderlijk.
  - Opdracht, Use case 2: "Bij vragen over architectuur of eisen overlegt de tech lead met architect en/of business analist ... Vragen over implementatie gaan terug naar de tech lead." Carlo's Vastgelegde keuze 1: "berichtenstromen voor vragenloops". `PRC-02` Doorlopend zegt alleen in tekst "→ PRC-04 (B)". Het basisdiagram heeft geen `✉`-pijl naar PRC-04 en geen PRC-06; het basisdiagram van PRC-01 heeft er wel.
  - Variantdiagram: de knoop "ACT-02.1 … ACT-02.4 (zoals basis)" staat in de lane Dr. Evil, maar ACT-02.2 is van ROL-01 en ACT-02.3 van ROL-03; "ACT-02.5 … ACT-02.9" staat in de lane ROL-05, maar ACT-02.6 is van ROL-04.
- **Eis:** elke ACT staat in het diagram; de berichtenstromen voor vragenloops die Carlo vroeg, staan erin; samengevoegde knopen zijn benoemd.
- **Herstel:** voeg ACT-02.2 toe (of combineer met GOV-07 als "ACT-02.2 / GOV-07"). Voeg `-. ✉ PRC-04 .->`-pijlen toe: tech lead ↔ Atlas/Socrates (vragen over eisen of architectuur) en Dr. Evil ↔ tech lead (vragen over de opdeling). Noem in de samengevoegde knopen van de variant de lanes ("ROL-01/02/03", "ROL-04/05").

### E-12 (waarschuwing): Paperclip-mapping: reviewpoort tussen agents en "Feit" voor iets dat niet gevonden is

- **Bewijs:**
  - `PRC-01` ACT-01.55 en `PRC-02` ACT-02.52, Paperclip-kolom: "toets-issue aan Atlas, `blockedByIssueIds`". Skill `paperclip`, `references/api-reference.md` ("Cross-Agent Review Gates"): "Use native execution stages for cross-agent code or deliverable review gates ... Do not model cross-agent review gates as bridge child issues, freeform comments, ad-hoc `request_confirmation` cards ... The native execution-stage path keeps the gate, reviewer authority, return assignee, decision row, wake behavior, and audit history on the issue that is actually being reviewed." Daar horen `executionPolicy.stages[]` met type `review`, `participants[]` en `returnAssignee` bij; "Request changes" levert een `changes_requested`-besluit en terug naar de producent, wat PRC-05 inhoudelijk raakt.
  - `overzichten/paperclip-mapping.md` noemt dit niet, en ook ACT-01.19 en ACT-02.10 (meelezen via "comment") komen niet in een ⚠.
  - M-1: "Paperclip telt geen afkeuringsrondes ... Feit (niet gevonden in de skill)", M-5: "Geen termijn of herinnering op een kaart gevonden ... Feit (niet gevonden in de skill)". Dat iets niet gevonden is, is geen Feit over Paperclip. `PRC-05`, ACT-05.1: "Paperclip telt geen rondes" staat als stelling. De skill zegt wel dat besluiten per stage worden opgeslagen ("Paperclip records the decision row automatically").
- **Eis:** geen verzonnen feiten over Paperclip; wat niet is gevonden staat als OPEN of Aanname; een Paperclip-mogelijkheid die past wordt genoemd of bewust niet gebruikt.
- **Herstel:** zet bij de reviewstappen (ACT-01.55, 02.52 en eventueel 01.19, 02.10, 03.2) het native review- of approvalstage-mechanisme als Paperclip-concept, of leg in een ⚠ uit waarom de bridge-issue wordt gebruikt. Verander in M-1 en M-5 het label in "Aanname" of "Open (niet gevonden in de skill; niet geverifieerd)" en pas de stelling in ACT-05.1 aan ("niet gevonden dat Paperclip telt"). Voeg een open vraag toe of de decision rows in de execution policy ook kunnen worden gebruikt om rondes te tellen.

### E-13 (waarschuwing): ID- en labelhygiëne

- **Bewijs:**
  - **Beslissings-ID's.** G-01.1 t/m G-06.2 (11 stuks) staan in de beschrijvingen en in `proces-catalogus.md`, maar niet in `register.md` en niet in het ID-schema van `bpmn-conventies` (kent geen `G-` prefix). Alleen de GOV's zijn geregistreerd. Twee beslissingen (G-03.1 en de GOV-knoop in PRC-03) delen een knoop, wat verwarrend is.
  - **Labels.** Beslissingentabellen van PRC-03, PRC-04, PRC-05 en PRC-06 hebben geen Label-kolom (PRC-01 en PRC-02 hebben die wel): G-03.1, G-04.1, G-04.2, G-05.1, G-06.1, G-06.2. Opdracht: "Label alles als Besloten, Voorstel of Aanname." Ook GOV-08 in PRC-04 t/m PRC-06 heeft geen label.
  - **Rol in het register.** 17 ACT's hebben een `rol` die geen ROL-ID is: ACT-03.1, 03.3, 03.4, 04.1, 04.2, 04.3, 04.5, 04.6, 04.7, 05.1 t/m 05.3, 06.1 t/m 06.3 ("producent", "vrager", "ontvanger", "eigenaar van de taak"), ACT-01.53 ("ROL-03 (Atlas leest mee)") en ACT-04.4 ("ROL-03 (eisen) of ROL-04 (ontwerp)"). Het register definieert "producent" en "vrager" niet. Dat is functioneel, maar niet te controleren in ronde 3 (RACI).
  - **Bestandsverwijzing.** Register PRC-03 t/m PRC-06: `beschrijving: "processen/PRC-03"` enz., terwijl de bestanden `PRC-03-akkoord-poort.md`, `PRC-04-vragenloop.md`, `PRC-05-afkeuring.md`, `PRC-06-blokkade.md` heten (PRC-01 en PRC-02 hebben de volledige slug).
- **Eis:** elke verwijzing wijst naar een bestaand element; labels bij alles; register is de bron van waarheid.
- **Herstel:** voeg in het register een lijst `beslissingen` toe (of leg in de beschrijving vast dat G-ID's lokaal zijn, zoals bij D1 t/m D3, `meta.noot`); voeg een Label-kolom toe aan de beslissingentabellen; definieer in het register de generieke lanes ("producent", "vrager", "ontvanger", "eigenaar van de taak" met welke ROL's) onder `systemen` of een nieuw veld; corrigeer de vier bestandspaden.

## Hercontrole D-01 t/m D-09 (ronde 1, versie 0.2)

| ID | Stand | Bewijs |
| --- | --- | --- |
| D-01 | hersteld | `ORGANISATIE.md` §6(b): "wordt hij alleen op verzoek gewekt (`wakeOnDemand`, bijvoorbeeld een toegewezen issue ...". Geen oude formulering meer. |
| D-02 | hersteld | Register PRC-02 `open: [OPEN-02, OPEN-03, OPEN-08]`; catalogus PRC-02 "OPEN-02, 03, 08". |
| D-03 | hersteld | ASM-09 in het register (`bron: rolanalyse-techlead A-TL-01 (nog niet bevestigd)`); `voorstellen.md` PRP-004: "Aanname ASM-09 (A-TL-01 ..., nog niet bevestigd)". |
| D-04 | deels hersteld | PRP-007 en PRP-009 hebben een "Stand 0.2"; PRP-003 ook. Nog open: de sectie PRP-004 (`voorstellen.md`, "### PRP-004 Globaal ontwerp licht, detail per slice") zegt zelf niet dat ze voor de kern vervalt (alleen de stand-tabel bovenaan). En de PRP-003-regel "drie akkoorden in UC1 plus de API-contracten" is nog niet eenduidig met "Stand 0.2: ... een vierde akkoord" en met PRC-01 ("3"): zie E-08(d). Herstel: zet onder de kop van PRP-004 "Vervalt voor de kern (TL-V5)" en maak het aantal eenduidig. |
| D-05 | hersteld | Register ROL-05: "die van developers pas zodra die er zijn (TL-V1), en die vallen buiten de scope (ASM-03)"; `ORGANISATIE.md` §3 idem. |
| D-06 | hersteld | `ORGANISATIE.md` §1 "Begrippen (0.2)": globaal ontwerp = ontwerp van Atlas; kernontwerp = het deel dat Atlas vooraf volledig maakt ("in principe alles voor de kernfunctionaliteit"). |
| D-07 | hersteld | CHG-002: "uitgevoerd terwijl GK-1 openstond ... verwerkt na de goedkeuring"; CHG-003: Geraakt `organisatie` §1, §3, §5–§7; "Gevolgen voor agents en skills" aanwezig in CHG-002, -003 en -004. |
| D-08 | hersteld | Register en `wijzigingen.md`: "de wijziging van ronde 1 (0.2) als apart punt, en de procesmodellen (ronde 2)", met eigen vraag. |
| D-09 | hersteld | Register ROL-01 t/m ROL-05 hebben alle `in` en `uit`. |

## Wat ik niet kon toetsen

- **Skills en agents.** Of de genoemde skills (`requirements-clarification`, `escalation-management`, `dependency-management`, `architect-modeling`, `requirements-orchestration`) en de AGENTS.md-regels bestaan en zo werken als in de Label-kolom staat (bijvoorbeeld "een vermelding wekt niet", ASM-08/12/13): alleen op de feitencheck WEB-20/WEB-21 en de rolanalyses gebaseerd, niet op de instructies of de skilllijst zelf.
- **V8 en F-labels.** ACT-04.7 is gelabeld "F (V8 trigger 1 en 2)". V8 beschrijft wanneer Dr. Evil Carlo stoort, niet wanneer een vrager Dr. Evil inschakelt; de F-verwijzing is dus alleen indirect. Ik heb het niet als bevinding opgenomen, maar de F kan beter A/V zijn.
- **Paperclip-gedrag buiten de skill.** Of Paperclip rondes telt, een epic-begrip heeft of termijnen/herinneringen op een kaart kent: ik heb alleen de skill en `references/` gelezen (geen API-aanroepen op `agents` of routines). De Paperclip-API gebruikte ik niet in deze controle behalve het ophalen van de issue en de rolanalyses (GET).
- **Inhoudelijke juistheid.** Of de procesvolgorde (bijvoorbeeld GOV-09 in de basis, kernontwerp vooraf, ACT-02.3 vóór ACT-02.4) is wat Carlo bedoelt, valt alleen af te leiden uit zijn opdracht en TL-V1 t/m TL-V5, niet uit een gesprek met hem.
- **Data-objecten.** De opdracht noemt "documenten als data-objecten"; de diagrammen tonen ze niet. Dat is ongetoetst als eis, omdat de opdracht ook "detail hoort in de secties" zegt (zie de toets op Carlo's opdracht).
- **Besluiten van Carlo na de laatste revisie.** Het model verwijst naar `rolanalyse-techlead` v0.2 (Ter goedkeuring); als die nog verandert, kunnen ASM-09, OPEN-02, OPEN-06 en OPEN-08 en de rollen in PRC-01/02 mee veranderen.

## Hercontrole (2026-10-28)

Scope: alle zes procesbeschrijvingen, `register.md` (YAML opnieuw geladen met js-yaml), `proces-catalogus.md`, `overzichten/paperclip-mapping.md`, `wijzigingen.md` (CHG-004), en de gewijzigde delen van `ORGANISATIE.md` en `voorstellen.md`. Opnieuw gedraaid: ID-script (alle ACT-, G-, GOV-, ASM-, OPEN-, PRC-, ROL-, AGT-, M-ID's), registervergelijking per ACT en tabel-tegen-diagram per beschrijving. Mermaid niet herhaald (10 diagrammen, 0 fouten gemeld door de maker).

### Oordeel: kan worden ingediend

Alle vier blokkerende bevindingen (E-01 t/m E-04) en alle negen waarschuwingen (E-05 t/m E-13) zijn opgelost, evenals het restant van D-04. De herstelacties hebben vijf nieuwe waarschuwingen veroorzaakt (F-01 t/m F-05), geen blokkerende. Ze mogen mee in dezelfde ronde of bij de volgende wijziging.

### Technische controle na de wijziging

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's uniek, niet hergebruikt | voldoet | 69 ACT's, 13 beslissingen (G), GOV-01 t/m GOV-12, ASM-01 t/m ASM-16, OPEN-01 t/m OPEN-10: geen dubbelen. Nieuw: ACT-01.21, 01.22, ACT-04.51 t/m 04.54, G-01.3, G-02.4, G-04.51, GOV-12, ASM-15, ASM-16, OPEN-10, M-7. Vervallen ACT-04.7 en G-03.1 staan onder `vervallen_ids`; in de beschrijvingen komen ze alleen voor in de wijzigingshistorie en nergens als levend element. ACT-04.52 neemt de rol over onder een nieuw nummer. |
| Elke verwijzing wijst naar een bestaand element | voldoet | Script: elk ACT-, G-, GOV-, ASM-, OPEN-, PRC-, ROL-, AGT-ID bestaat in het register; M-1 t/m M-7 staan in de mapping. Enige "onbekende" treffers zijn de twee vervallen ID's in de historie. |
| Register ↔ beschrijvingen | voldoet | 69/69 ACT's: naam, rol, input, resultaat en label identiek aan de tabelrijen. PRC-01 basis 22, variant 7; PRC-02 11 en 4; PRC-03 4; PRC-04 6 en 4; PRC-05 6; PRC-06 5. Catalogus en CHG-004 noemen dezelfde aantallen. `roept_aan` van PRC-04 is `[PRC-03, PRC-06]`. |
| Tabel ↔ diagram | voldoet | Elke ACT en GOV uit de tabellen staat in het diagram van de eigen versie; samengevoegde knopen (ACT-01.10 / 11 / 12 / 13, ACT-01.3 / 01.4, de gebundelde basis in het variantdiagram van PRC-02) zijn benoemd. Restpunten: F-01, F-05. |
| Doelen van Carlo's opdracht | voldoet | Eindpunt "Backlog gereed, overdracht naar implementatie" is in beide primaire processen het enige eindpunt (de tweede eindknoop is weg); geen testers, developers of marketeers als baan of stap; voorstellen staan in de variant met PRP-verwijzing (nu ook PRC-04). |

### Per bevinding

| ID | Stand | Toelichting en bewijs |
| --- | --- | --- |
| E-01 | opgelost | PRC-01 basisdiagram: `A9 --> GOV2 -- akkoord --> A10 --> GOV3 --> A11 --> GOV9 --> A12 --> GOV4 --> A13 --> GOV5 --> A14 --> A15`, elk GOV als eigen knoop; afkeuring `GOV2 -. ↩ afgekeurd: PRC-05 (zo ook GOV-03/09/04/05 naar hun eigen ACT) .-> A9`. De GOV-volgorde komt overeen met de tabel. |
| E-02 | opgelost | `G2 -- nee --> W[["PRC-06 Blokkade (wacht op PRC-08)"]] -. "agent bestaat" .-> G2`, in basis en variant. G-01.2 staat nu ook in het variantdiagram; de tabel zegt "zodra de agent bestaat, opnieuw G-01.2". Geen tweede eindknoop meer. |
| E-03 | opgelost | ACT-01.21 (ROL-04, vraag aan ROL-01) en ACT-01.22 (ROL-01 beantwoordt) staan in tabel, register en diagram, label "B (stap 3: de architect kan vragen aan jou stellen)". PRC-04 routering: "Vraag van Socrates of Atlas aan jou over hun eigen werk | ROL-01, rechtstreeks op het eigen issue (geen PRC-04)". `ORGANISATIE.md` §5 heeft de rij "ROL-04 → ROL-01 | Vragen over het ontwerp | Besloten | to-be". De diagramaansluiting is nog niet af: F-01. |
| E-04 | opgelost | GOV-12 "Akkoord wijzigingsverzoek" in het register (`processen: "PRC-02, PRC-04"`, `subproces: PRC-03`), in ACT-04.4 (Vervolg "PRC-03 → GOV-12"), in G-04.1, in het diagram van PRC-04 (`GOV12{{...}}`) en in PRC-02 (beslissingentabel, ACT-02.53). `roept_aan` van PRC-04 is `[PRC-03, PRC-06]` in register en catalogus. |
| E-05 | opgelost | PRC-04 heeft nu "Basis" (ACT-04.1 t/m 04.6, zonder maximum; vastgelopen → PRC-06, ASM-16) en "Variant: begrensde vragenloop (PRP-005)" (ACT-04.51 t/m 04.54, G-04.51, label V). ACT-04.1 en 04.6 zijn herlabeld naar B/F en B; de routering heeft per rij een B- of F-bron. Het register heeft `versie: variant` bij ACT-04.51 t/m 04.54. |
| E-06 | opgelost | ACT-04.7 vervalt; het escaleren is ACT-04.52, het voorleggen ACT-04.53 en het doorgeven van het besluit ACT-04.54 (met ID's in tabel, register en diagram). ACT-04.51 "Rondes tellen" en G-04.51 leggen de telling vast (M-1). De route "geen reactie" naar PRC-06 staat in het basisdiagram (`A3 -. "geen reactie" .-> B6`). |
| E-07 | opgelost | PRC-06 diagram: `A2 -. "geannuleerd of geen voortgang" .-> A4`. M-7 in de mapping, label Feit met bron skill `paperclip` (Issue Dependencies); M-7 is ook gekoppeld in ACT-04.2, ACT-06.2 en PRC-05 ("Gestopt"). Het kleine verschil tussen tabel en diagram bij ACT-06.2 staat in F-05. |
| E-08 | opgelost | (a) ACT-01.56 Vervolg ACT-01.18 en diagram `A17 --> A56 --> A18`; (b) `A10 --> GOV11 -- akkoord --> A14 --> A15`; (c) ACT-01.5 en ACT-01.7 staan in het variantdiagram, G-01.2 ook; (d) PRP-003 en PRC-01 variant zeggen allebei: drie akkoorden (GOV-10, GOV-11, GOV-06 met de inhoud van slice 1). De registerzijde van (d): F-03. |
| E-09 | opgelost | Variant PRC-01: ACT-01.55 "na 2 rondes escalatie (ACT-05.3 → GOV-08)", ACT-01.57 "lukt het na 2 keer niet, dan blokkade (PRC-06)". Variant PRC-02: ACT-02.52 en ACT-02.53 (met terugweg per check, ook GOV-12 en GOV-08), ACT-02.54 idem; diagram `A52 -. ↩ afwijking (max. 2, dan escalatie) .-> A7`. De terugkeer na zo'n escalatie is nog niet af: F-02. |
| E-10 | opgelost | ASM-15; ACT-01.19/02.10 staan vóór GOV-06 met beslissing G-01.3/G-02.4 ("opmerkingen veranderen het ontwerp?"); een opmerking die iets verandert gaat terug naar ACT-01.16/02.7 (max. 2 rondes). Variant: `A55 -- akkoord --> GOV6`. Na een afkeuring van GOV-06 leest Atlas de wijziging opnieuw mee (GOV-06-rij en diagram `GOV6 -. ↩ .-> A17 -> A18 -> A19`). |
| E-11 | opgelost | ACT-02.2 staat in het basisdiagram (`A2 --> GOV7`); berichtenstromen `A7 -. ✉ vraag over eisen .-> Q3`, `... architectuur .-> Q4`, `A11 -. ✉ ... opdeling .-> A9` en PRC-06 (`A5 -. vastgelopen .-> B6`). Het variantdiagram heeft de samengevoegde knopen als eigen subgraph "Zoals de basis (lanes ROL-01, 02, 03, 04, 05)". |
| E-12 | opgelost | Mapping: Atlas-review als `executionPolicy`-stage `review` (ACT-01.19, 01.53, 01.55, 02.10, 02.52) met de opmerking dat de skill aparte toets-issues en comments afraadt; M-1 en M-5 zijn "Open (niet gevonden in de skill, niet geverifieerd)"; ACT-05.1 zegt "niet gevonden dat Paperclip rondes telt"; OPEN-10 voor de keuze kaart of `approval`-stage. De uitspraken passen bij `references/api-reference.md` (Cross-Agent Review Gates). |
| E-13 | opgelost | Register heeft `beslissingen` (13 G-ID's, allemaal in gebruik) en `generieke_lanes` (producent, vrager, ontvanger, eigenaar van de taak); de beslissingentabellen van PRC-03 t/m PRC-06 hebben een Label-kolom; `beschrijving` wijst naar de echte bestandsnamen; G-03.1 is samengevoegd met de GOV van de aanroeper. De 17 niet-ROL-`rol`-waarden zijn nu gedefinieerd in `generieke_lanes`. |
| D-04 (restant) | opgelost | `voorstellen.md` PRP-004: "Stand 0.2: vervalt voor de kern ..." direct onder de kop; PRP-003: "Zo blijven het drie akkoorden". Een kleine inconsistentie met `ORGANISATIE.md`: F-04. |

### Nieuwe bevindingen door de herstelacties

#### F-01 (waarschuwing): ACT-01.21 en ACT-01.22 hangen los in het basisdiagram van PRC-01

- **Bewijs:** `processen/PRC-01-nieuwe-klant.md`, Tussendiagram (basis): `A21 -. "✉ vragenkaart" .-> A22`; `A21` heeft geen inkomende pijl en `A22` geen uitgaande. De uitleg staat onder het diagram: "*De pijl van ACT-01.21 geldt voor alle activiteiten van Atlas (ACT-01.9 t/m ACT-01.13). Het antwoord gaat terug naar de activiteit die de vraag stelde.*" Tabel: ACT-01.22 Vervolg "terug naar de activiteit van Atlas die de vraag stelde".
- **Eis:** elke activiteit is bereikbaar en elk pad bereikt een einde, in het diagram zelf (checklist Procesmodel; `bpmn-procesmodellering` stap 8).
- **Herstel:** teken `A9 & A10 & A11 & A12 & A13 -. "✉ vraag aan Carlo" .-> A21` en `A22 -. "↩ antwoord" .-> A9 & A10 & A11 & A12 & A13`, of een samengevoegde Atlas-knoop "ACT-01.9 … 01.13" waar de pijlen op aansluiten.

#### F-02 (waarschuwing): de escalatie na afwijkende reviewrondes van Atlas heeft geen eigen terugweg

- **Bewijs:** G-01.3, G-02.4, ACT-01.55 en ACT-02.52 verwijzen voor "na 2 rondes" naar "escalatie zoals PRC-05 (ACT-05.3 → GOV-08)"; `PRC-05-afkeuring.md` zegt: "Ook voor reviews door Atlas: ... gebruiken hetzelfde maximum en dezelfde escalatie (ACT-05.3 → GOV-08)". Maar `PRC-05`: GOV-08 "doorgaan met een nieuwe richting → ACT-05.6 → ACT-05.2", ACT-05.2 Vervolg "PRC-03", Einde (1) "Herziene deliverable terug naar PRC-03". Voor een review van Atlas (bijvoorbeeld G-01.3 → ACT-01.16) leidt dat dus naar een akkoordkaart van Carlo in plaats van terug naar de tech lead en Atlas.
- **Eis:** elke terugloop wijst naar een bestaande, passende activiteit en heeft een uitgang; een herbruikbaar subproces mag niet op een onjuiste plek terugkeren.
- **Herstel:** zeg in PRC-05 (en in G-01.3, G-02.4, ACT-01.55, ACT-02.52) wat er na het besluit gebeurt bij een reviewronde: de tech lead past aan (ACT-01.16 of ACT-02.7) en Atlas leest opnieuw mee, zonder PRC-03. Bijvoorbeeld door in ACT-05.6 "terug naar de aanroeper" te schrijven met de aanroeper als parameter, of door een eigen regel "reviewronde" onder Uitzonderingen en loops.

#### F-03 (waarschuwing): de uitbreiding van GOV-06 in de variant staat niet in het register, en de afkeuring over de inhoud van slice 1 gaat naar de verkeerde ACT

- **Bewijs:** `PRC-01`, variantrij "Akkoord eerste slice": "GOV-06 voor slice 1 ook over de inhoud: welke use cases in slice 1 zitten en de volgorde van de epics ... | PRP-003 (punt 3)". `register.md`, GOV-06: `versie: basis, label: "B (TL-V4)"`, geen verwijzing naar PRP-003; het register kent dus één GOV-06 zonder de variantuitbreiding. Variantdiagram: `GOV6 -. "↩ afgekeurd: PRC-05" .-> A17`: een afkeuring van de inhoud en volgorde (de opdeling uit ACT-01.16) gaat naar de API-contracten (ACT-01.17).
- **Eis:** elk voorstel staat in de variant met PRP-verwijzing, ook in het register; een afwijzing wijst naar de activiteit die het afgekeurde maakt.
- **Herstel:** zet bij GOV-06 in het register `variant: "PRP-003 (punt 3): ook de inhoud en volgorde van slice 1"` of maak een apart GOV-ID voor de variant; geef in de variantrij aan dat een afkeuring van de inhoud naar ACT-01.16 gaat, en pas het diagram aan (`GOV6 -. ↩ inhoud: PRC-05 .-> A16`).

#### F-04 (waarschuwing): versie en wijzigingsmelding van `ORGANISATIE.md` en `voorstellen.md` zijn niet bijgewerkt

- **Bewijs:** CHG-004 "Geraakt": `organisatie` §5 en `voorstellen` (PRP-003, PRP-004). `ORGANISATIE.md`, kop: "Concept (versie 0.2)", "Versie | 0.2 (2026-10-28)", "Bron van waarheid | register v0.2"; "Wat is er veranderd in 0.2" noemt CHG-002 en CHG-003, niet CHG-004. `voorstellen.md`: "Versie | 0.2 (2026-10-28): CHG-003, ...". Daarnaast zegt `ORGANISATIE.md` §6(b): "TL-V4 voegt een akkoord toe ...; dat dekt een deel van het akkoord op slice 1", terwijl `voorstellen.md` PRP-003 en PRC-01 zeggen dat dit samenvalt: "Zo blijven het drie akkoorden".
- **Eis:** de wijzigingshistorie is bijgewerkt; overzichten komen overeen met het register en met elkaar; een gewijzigd document krijgt een versie.
- **Herstel:** noem CHG-004 in de versieregel en in "Wat is er veranderd" van beide documenten (of laat beide ongewijzigd, als de wijziging alleen een stand-regel is, en haal ze dan uit "Geraakt"); breng de zin in §6(b) in lijn met PRP-003.

#### F-05 (waarschuwing, klein): resterende afwijkingen tussen register, catalogus en tabellen

- **Bewijs:** (a) `register.md`, PRC-04: `einde: "Antwoord, of escalatie naar ROL-01"`, terwijl `proces-catalogus.md` en `PRC-04` zeggen: "Antwoord, besloten wijzigingsverzoek, blokkade (basis) of escalatie (variant)". (b) `PRC-06`, ACT-06.2 Vervolg "einde", terwijl het diagram `A2 -. "geannuleerd of geen voortgang" .-> A4` heeft en de tekst "gaat de blokkade naar Dr. Evil (ACT-06.4)". (c) Register GOV-08 `versie: basis`, `processen: "PRC-04, PRC-05, PRC-06"`; in PRC-04 komt GOV-08 alleen in de variant voor (ACT-04.53 / ACT-04.54), en PRC-01 en PRC-02 raken GOV-08 via PRC-05.
- **Eis:** register en overzichten komen overeen; tabel en diagram komen overeen.
- **Herstel:** pas (a) en (b) aan; zet bij (c) in het register bijvoorbeeld `processen: "PRC-05, PRC-06 (basis); PRC-04 (variant)"`.

### Wat ik niet kon toetsen (aanvulling)

- Het gedrag van Paperclip bij `executionPolicy`-stages met een mens als deelnemer (OPEN-10), en of daarmee rondes te tellen zijn: alleen de skill en `references/` gelezen.
- Of de herlabeling van de routering in PRC-04 (ACT-04.1 "B/F") inhoudelijk klopt tegenover PRP-005; per rij is er een bron (B-02, UC2/TL-V2, AGENTS.md), maar de keuze om de routering niet meer als voorstel te zien is een beslissing van de maker.
- De Mermaid-syntaxis (door de maker opnieuw geparsed: 10 diagrammen, 0 fouten; niet door mij herhaald).

## Verwerking door de maker (na hercontrole)

F-01 (pijlen van en naar ACT-01.21/22 bij ACT-01.9), F-02 (na escalatie terug naar de review van Atlas, PRC-05), F-03 (variantnotitie bij GOV-06 in het register; afkeuring van de inhoud gaat naar ACT-01.16), F-04 (versieregels in `organisatie` en `voorstellen`, §6(b) "valt samen") en F-05 (einde van PRC-04, vervolg van ACT-06.2, versie van GOV-08) zijn verwerkt. Geen nieuwe ID's. Het register laadt als geldige YAML, alle verwijzingen bestaan, en de 10 Mermaid-diagrammen zijn geldig (script, 2026-10-28).
