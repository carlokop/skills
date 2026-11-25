> **Vervallen** – geldend is `uitbreidingsgids` r14. Dit is een archiefkopie; niet lezen of gebruiken.

# Uitbreidingsgids organisatiemodel (ronde 4)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `2ddaa565`)**, alle 11 onderdelen van de kaart goedgekeurd: PRC-04 0.12 (vragenloop en grill-sessie), PRC-01 en PRC-02 0.12 (grill-momenten volgens optie A), de weergaven (register, PRC-03, Paperclip-mapping, uitbreidingsgids 0.6, bevindingen), CHG-021 (herstel van de gaten in model 0.11) en de aannames ASM-42 t/m ASM-48. Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `uitbreidingsgids`. Vóór de goedkeuring: **Concept, ter goedkeuring** (versie 0.6, bij model 0.12: CHG-022 grill-sessies, besluit B-15, kaart `d57f0546`, en besluit B-16, kaart `a5523ebd`; CHG-021 herstel van de gaten in model 0.11, opdracht op kaart `8215b600`). Tot je dit goedkeurt, geldt 0.5 bij model 0.11 (Goedgekeurd 2026-10-30, Carlo, kaart `fa26d50e`). 0.6 verandert de vrije ID's (§6, ook gat A-13), de regel voor de rondes in PRC-04 (§1, §2, §5, §7: B-15) en voegt de regel voor grill-sessies toe (§2, §3, §4). Daarvoor gold 0.4, Goedgekeurd (2026-10-30, Carlo, kaart `f261b9ac`), revisie 6 van dit document. |
| Bron | eis aan het model "uitbreidbaar: een nieuwe use case of agent wijzigt bestaande diagrammen niet" (Besloten, opdracht `a5a789fe`); `bpmn-conventies` (Feit: ID's, register, wijzigingsbeheer); `register` v0.10 (Goedgekeurd, B-12), v0.11 (Goedgekeurd, B-14) en v0.12 (Concept); besluiten B-08 (kaart `2b7a6d2d`), B-09 (kaart `e2fd31e9`), B-10 (comment `6e69ec6e`), B-15 (kaart `d57f0546`) en B-16 (kaart `a5523ebd`). |
| Label | De werkwijze hieronder is een **Voorstel**. Waar een regel uit je opdracht, uit B-08, B-09, B-15, B-16 of uit `bpmn-conventies` komt, staat dat erbij. |

## 1. Waarom het model uitbreidbaar is

| Bouwsteen | Hoe het helpt | Label |
| --- | --- | --- |
| **Procesladder** | Niveau 0 (landschap), niveau 1 (één proces per use case), herbruikbare subprocessen. Een nieuwe use case wordt een nieuw niveau-1-proces. Bestaande processen veranderen daarvoor niet. | Besloten (opdracht `a5a789fe`, vastgelegde keuze 2: procesladder) |
| **Subprocessen PRC-03 t/m PRC-06** | Akkoord, vragen, afkeuring en blokkade zijn één keer gedefinieerd. Een nieuw proces roept ze aan met een eigen GOV-ID. PRC-03 kan een document of een pakket ter goedkeuring voorleggen (GOV-10, GOV-11). | Besloten (B-08: PRP-003 voor het pakket) |
| **Begrensde lussen** | Elke lus heeft een uitgang: bij een vraag of grill-sessie tussen agents (PRC-04) na 2 rondes achter elkaar zonder voortgang, en na 2 herzieningsrondes per document (PRC-05); daarna escalatie naar jou (GOV-08). Een nieuw proces dat de subprocessen aanroept, krijgt die grens vanzelf. | Besloten (B-08: PRP-005, PRP-006; B-15 voor PRC-04) |
| **Generieke lanes** | De subprocessen gebruiken *producent*, *vrager*, *ontvanger* en *eigenaar van de taak* (`register`, `generieke_lanes`). Komt er een agent bij, dan krijgt alleen die lijst een rol erbij. De diagrammen blijven gelijk. | Feit (register) |
| **Eén eindpunt** | *Backlog gereed, overdracht naar implementatie*. Rollen die na het backlog werken, starten daar (§5). | Besloten |
| **Register als bron** | De diagrammen, overzichten en de pagina zijn weergaven van het register. Een uitbreiding begint in het register. De pagina wordt met een bouwscript uit het register opgebouwd (`eindontwerp/build/`). | Feit (`bpmn-conventies`; bouwscript: pagina 0.2) |
| **Architectuurprofielen** (nieuw in 0.4) | Eén flow met één keuze (G-01.6). Per profiel gelden andere technische producten; welke, staat in één tabel (register `profielen`, PRC-01; uitwerking in PRP-034; later skill `architectuurprofielen`). Een project dat groeit, wisselt van profiel via een ADR (G-02.3). | Besloten (B-12: PRP-034) |
| **Stabiele ID's** | Een ID wordt nooit hergebruikt, ook niet als het element vervalt (`vervallen_ids`). Ook een stap die van de variant naar de basis gaat, houdt zijn ID (zoals de .5x-nummers in B-08). Verwijzingen blijven dus geldig. | Feit (`bpmn-conventies`; B-08) |

## 2. Een use case toevoegen (Voorstel)

1. **Opdracht en analyse:** het model loopt via `bpmn-organisatieanalyse`. Het nieuwe proces krijgt het eerstvolgende PRC-ID (nu **PRC-09**), met doel, aanleiding, start- en eindconditie, eigenaar en betrokken rollen. Het proceslandschap krijgt een blok erbij.
2. **Procesmodel** (`bpmn-procesmodellering`): activiteiten **ACT-09.1** en verder. Vragen gaan via PRC-04, afkeuring via PRC-05 en blokkades via PRC-06. Teken die niet opnieuw.
   **Grill-sessies** (nieuw in 0.6): leg bij elke stap vast of er een grill-sessie komt. Het criterium is ASM-40: een sessie komt alleen waar context voor het eerst van de ene partij naar de andere gaat en er nog niets als contract vastligt. Bijvoorbeeld met jou bij de start van een stuk werk, of bij de overdracht van Socrates naar Atlas. Bouwt een stap op wat jij goedkeurde of wat net getoetst is, dan komt er geen vaste sessie; een vraag die toch opkomt, loopt via PRC-04 en is dan een grill-sessie. Heeft de uitvoerder geen open punten, dan is er geen sessie en geen contextverslag (ASM-41). Een sessie tussen agents loopt via PRC-04; een sessie met jou via een vragenkaart op het eigen issue. Geef elk moment het eerstvolgende vrije lokale nummer (§6, nu GS16) en noem de stappen die de sessie ook dekt. Het diagram verandert er niet door: een sessie is een aanroep van PRC-04 of van de bestaande vraagstappen. (Besloten: B-15, B-16; criterium: ASM-40 en ASM-41, bevestigd door B-16)
3. **Akkoorden:** elk akkoord van jou is een aanroep van PRC-03 met een nieuw GOV-ID (vanaf **GOV-16**), of met een bestaand GOV-ID als het om hetzelfde akkoord gaat (bijvoorbeeld GOV-01 voor de analyse). Kies per use case:
   - **per document**, zoals in UC2: elk document een eigen akkoord;
   - **als pakket**, zoals GOV-10 en GOV-11 in UC1 (B-08, PRP-003): één kaart met een beoordeling per document. Je keurt per document goed of af. Alleen het afgekeurde document gaat door PRC-05; latere documenten die erdoor geraakt worden, werkt de producent mee bij en legt hij opnieuw voor in hetzelfde pakket. De producent handelt pas als elk document een oordeel heeft. De kaart kent alleen goedkeuren en afkeuren (Aanname ASM-18, bevestigd).
   Een pakket betekent dat de producent doorwerkt op documenten die nog niet zijn goedgekeurd. Dan moeten de skills van die producent dat toestaan; zie §4 en de 8 skills die voor het pakketakkoord van UC1 worden uitgebreid (`requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram` en `architect-database`).
4. **De regel van 2 rondes:** geef elke lus in het nieuwe proces een maximum en een uitgang (Besloten, B-08: PRP-005, PRP-006; voor PRC-04: B-15).
   - Vragen en grill-sessies tussen agents: via PRC-04. Alleen rondes zonder voortgang tellen; een ronde waarin minstens één punt is beslist, telt niet. Na 2 rondes achter elkaar zonder voortgang GOV-08 (B-15).
   - Afkeuring door jou: via PRC-05, maximaal 2 herzieningsrondes per document (bij een pakket ook per document), daarna GOV-08.
   - Toetsing door een andere agent (zoals G-01.4, G-01.5, G-02.5, G-02.6): maximaal 2 rondes, daarna GOV-08.
   - Een controle zonder tegenpartij (zoals "backlog gereed", ACT-01.57): maximaal 2 keer, daarna een blokkade (PRC-06).
   De telling loopt via de gedeelde skill `vragen-en-akkoordrondes` (besloten, nog te maken). Wachten op ruimte telt niet als ronde (aanname ASM-22).
5. **Ontwerp eerst** (nieuw in 0.4): heeft de use case pagina's, dan volgt hij dezelfde volgorde als UC1 en UC2: paginalijst en brieven (Socrates), ontwerp waar het ontwerpniveau dat vraagt (de ontwerper), jouw akkoord, en pas daarna het bouwcontract. Het bouwcontract volgt uit de brieven en ontwerpen, nooit andersom (Besloten: B-10; uitwerking Besloten (B-12: PRP-031, PRP-032)).
6. **Eindpunt:** levert het proces een backlog op, dan eindigt het op *Backlog gereed, overdracht naar implementatie*, met dezelfde controles vóór het eindpunt als UC1 en UC2: Atlas toetst de taken tegen zijn werkpakketten (PRP-027) en Dr. Evil controleert "backlog gereed" (PRP-013). Levert het iets anders op, dan krijgt het een eigen eindpunt. Dat eindpunt komt in het landschap.
7. **Basis en variant:** jouw beschrijving met jouw besluiten is de basis (ACT-09.1 t/m ACT-09.49). Mijn verbeteringen staan in de variant (vanaf ACT-09.51) tot je kiest. Uitzondering (nieuw in 0.4): vraag je zelf om je richting door te voeren in een concept, zoals bij model 0.10, dan staat mijn uitwerking in de basis van dat concept, gelabeld V met het PRP-nummer; keur je een voorstel af, dan pas ik het concept aan. Kies je een voorstel, dan gaat de stap met hetzelfde ID naar de basis, zoals in B-08.
8. **Rollen en skills** (`bpmn-rollen-en-skillmodel`): per activiteit capability, skill, RACI en skillstatus in `koppelingen`.
9. **Controle en akkoord:** `bpmn-modelcontrole`, feitencheck door de agents in het proces, daarna jouw akkoord. Daarna volgt een nieuwe versie van de pagina (§7).

**Wat niet verandert:** de diagrammen van PRC-01 t/m PRC-06. Het register wordt aangevuld (nieuw proces, activiteiten, en bij een hergebruikt GOV-ID een extra proces in `processen` van dat GOV). Het landschap en de overzichten krijgen er iets bij; dat zijn weergaven. Alles samen is één CHG met jouw akkoord.

## 3. Een agent of rol toevoegen (Voorstel)

1. **Besluit eerst:** een nieuwe agent, rol of instructie loopt via PRC-08. Dr. Evil maakt het voorstel en jij beslist (Feit: AGENTS.md Dr. Evil; rolanalyse V7). Het model volgt jouw besluit en loopt niet vooruit.
2. **Nieuwe ID's:** rol **ROL-06**, agent **AGT-06**. ROL-05 en AGT-04 zijn vervallen en worden niet hergebruikt (`vervallen_ids`).
3. **Generieke lanes:** kan de nieuwe rol producent, vrager, ontvanger of eigenaar van een taak zijn, voeg hem dan toe aan `generieke_lanes`. Het diagram van PRC-04 blijft gelijk. De routeringstabel (wie beantwoordt wat) staat wel in de goedgekeurde procesbeschrijving van PRC-04. Een regel erbij is dus een kleine wijziging van een goedgekeurd model: een CHG, een nieuwe versie van PRC-04 met status Concept, en jouw akkoord (Feit: `bpmn-conventies`).
4. **Ontwerper** (nieuw in 0.4): de generieke lane *ontwerper* wordt nu door jou ingevuld (ASM-28). Komt er via PRC-08 een designer- of frontend-agent, dan krijgt alleen `generieke_lanes` een rol erbij en krijgt PRC-04 een routeringsregel voor vragen over het ontwerp. De diagrammen van PRC-01 en PRC-02 tekenen het ontwerp in jouw lane; wil je ze in de lane van de agent, dan is dat een kleine wijziging van een goedgekeurd model (punt 6).
5. **Nieuwe activiteiten:** krijgt de rol eigen werk in een nieuw proces, dan volg je §2, ook voor de grill-sessies (§2 punt 2). Krijgt de nieuwe agent voor het eerst context van een andere partij, en ligt er nog niets als contract vast, dan begint die stap met een grill-sessie (ASM-40, B-16); met een andere agent via PRC-04. Anders loopt een vraag via PRC-04.
6. **Werk verplaatsen is een wijziging:** neemt de nieuwe rol bestaande activiteiten over, dan verandert de lane van die activiteiten in PRC-01 en PRC-02. Dat is geen uitbreiding meer, maar een wijziging van een goedgekeurd model. Daarvoor is een CHG nodig, een nieuwe versie met status Concept, en jouw akkoord (Feit: `bpmn-conventies`, "Een goedgekeurd model wijzigen"). Het duidelijkste voorbeeld is PRP-018: de taken TL-01 t/m TL-09 naar een aparte agent. Dat is besloten als signaal (B-08): Dr. Evil legt het voor zodra er developers zijn, of zodra uitbreidingen aantoonbaar op Atlas wachten. De drempel is nog open (OPEN-13). Omdat de pagina uit het register wordt opgebouwd, hoef je daarna alleen het register en de procesbeschrijvingen aan te passen en het bouwscript opnieuw te draaien.

## 4. Een skill toevoegen of uitbreiden (Voorstel)

1. **Behoefte:** begin bij de activiteit. Welke capability (CAP) is nodig, en welke skill ontbreekt of dekt het niet volledig? Een nieuwe capability krijgt het eerstvolgende ID (nu **CAP-28**).
2. **Register:** een skill heeft geen nummer, maar wordt bij zijn naam genoemd (besluit B-11). Een bestaande skill houdt de naam die hij in Paperclip heeft. Een nieuwe skill (to-be) krijgt een voorgestelde naam: kort, in kleine letters met streepjes, en uniek in het register. Bijvoorbeeld `architect-cms-configuratie`. Erbij komen `werknaam: true`, `status: nieuw`, `situatie: to-be`, het voorstel (PRP) en, na jouw keuze, het besluit (zoals bij `architect-vertical-slices`: `besluit: B-08 (PRP-0xx)`). Wordt de skill gemaakt onder een andere naam, dan wordt de naam in het register aangepast via een CHG. Zet bij elke skill in het overzicht *Skills in het kort* één zin over waar hij over gaat.
3. **Specificatie:** naam, doel, trigger, input, output, werkwijze, kwaliteitscriteria, tools of templates, afhankelijkheden en een voorbeeld, zoals in `skill-specificaties`.
4. **Gedeeld of niet:** gebruiken meer agents dezelfde werkwijze, stel dan één gedeelde skill voor, zoals `vragen-en-akkoordrondes` voor de rondes en het pakketakkoord (B-08, PRP-023) en, sinds B-15, de grill-sessie tussen agents en het contextverslag. Een skill op een grill-moment krijgt dan één regel: "begin met een grill-sessie volgens `vragen-en-akkoordrondes`" (B-15). Schrijven twee agents in hetzelfde bestand, leg dan vast wie de eigenaar is, zoals bij `GLOSSARY.md` (FND-020, besloten in B-08: PRP-026).
5. **Akkoord in de skill:** heeft een skill een eigen goedkeuringsstop, controleer dan of die past bij het akkoord in het proces (per document of als pakket, §2). In UC1 moeten daarvoor 8 skills worden uitgebreid (PRP-003); verwijs voor de rondes naar `vragen-en-akkoordrondes` in plaats van ze in elke skill te beschrijven.
6. **Besluit en uitvoering:** Dr. Evil maakt het formele voorstel (`escalation-management`) en jij beslist (Feit: `bpmn-conventies`, "Voorstellen en uitvoering"). Is de skill gemaakt en gekoppeld, dan wordt de status `bestaat` en komt de bron erbij. De werking blijft `niet vastgesteld` tot jij het bevestigt (OPEN-11).

## 5. Rollen na het backlog aansluiten (Voorstel)

Testers, developers, Sentinel en andere rollen na het backlog vallen buiten dit model (Besloten). Ze sluiten later zo aan:

1. **Eén startpunt:** een nieuw proces (bijvoorbeeld *Implementatie van een slice*, PRC-09 of hoger) begint bij het eindpunt *Backlog gereed, overdracht naar implementatie*. Dat is zijn startconditie. PRC-01 en PRC-02 hoeven daarvoor niet te veranderen.
2. **Wat er bij het eindpunt klaarligt** (de overdracht): epics en taken met eigenaar, AC-ID's en afhankelijkheden (ACT-01.20, ACT-02.11), getoetst door Atlas tegen zijn werkpakketten (ACT-01.25, ACT-02.14) en gecontroleerd op "backlog gereed" (ACT-01.57, ACT-02.54); de goedgekeurde API-contracten (GOV-06; in slice 1 met de inhoud van de slice); het implementatieplan met werkpakketten (ACT-01.18, ACT-02.9); het conventiebestand in de repo (ACT-01.56); en de goedgekeurde eisen, use cases en het ontwerp. Dit is basis sinds B-08.
3. **Nieuwe rollen en agents:** volgens §3. Sentinel bestaat al als agent (AGT-05) en krijgt dan een rol. Komen er developers, dan is dat ook een aanleiding voor het signaal van PRP-018 (§3).
4. **Vragen uit de implementatie:** developers stellen vragen via PRC-04 (na 2 rondes achter elkaar zonder voortgang GOV-08, B-15). Vragen over eisen gaan naar Socrates (`requirements-clarification`). Vragen over het ontwerp en de implementatie gaan naar Atlas (`architect-clarification`, besloten, nog te maken): dat zijn de taken TL-07 en TL-09, die volgens TL-V1 pas beginnen als er developers zijn. Voeg ze toe aan de routeringstabel van PRC-04 (een kleine wijziging met jouw akkoord, zie §3).
5. **Terug naar het backlog:** een bevinding die de eisen of het ontwerp verandert, is een wijzigingsverzoek via PRC-04 en GOV-12. Nieuw werk wordt een wens voor PRC-02.

## 6. Eerstvolgende vrije ID's (stand register v0.12, Concept, na CHG-021 en CHG-022)

| Element | Hoogste ID nu | Eerstvolgende | Opmerking |
| --- | --- | --- | --- |
| Proces | PRC-08 | PRC-09 | |
| Activiteit | per proces | ACT-09.1 (basis), ACT-09.51 (variant); in PRC-04: ACT-04.8 (basis; ACT-04.7 is vervallen), ACT-04.57 (.5x-reeks; ACT-04.51 t/m 04.56 komen uit uitwerkingen van Socrates) | in PRC-01 nu tot ACT-01.29 en ACT-01.60; in PRC-02 tot ACT-02.17 en ACT-02.56; in PRC-04 tot ACT-04.56 (ACT-04.55 en ACT-04.56 zijn nieuw in 0.12, CHG-022) |
| Beslissing | per proces | G-09.1; in PRC-04: G-04.53 | in PRC-01 nu tot G-01.9, in PRC-02 tot G-02.8, in PRC-04 tot G-04.52 (nieuw in 0.12, CHG-022) |
| Besluit | B-16 | B-17 | B-15 is jouw besluit over de grill-sessies (kaart `d57f0546`); B-16 is jouw keuze voor optie A, minder grill-sessies (kaart `a5523ebd`) |
| Rol | ROL-05 (vervallen) | ROL-06 | ROL-05 niet hergebruiken |
| Agent | AGT-05 | AGT-06 | AGT-04 niet hergebruiken |
| Capability | CAP-27 | CAP-28 | |
| Skill | geen nummer (B-11) | een unieke naam (§4) | de oude skillnummers uit model 0.9 staan alleen nog als `oud_nummer` in het register, om oudere documenten te kunnen lezen; niet hergebruiken |
| Goedkeuringsmoment | GOV-15 | GOV-16 | |
| Aanname | ASM-48 | ASM-49 | ASM-40 t/m ASM-43 en ASM-48 komen uit CHG-022 (grill-sessies), ASM-44 t/m ASM-47 uit CHG-021 (gaten B-1 t/m B-4); ASM-19 vervalt in 0.11 (CHG-018), niet hergebruiken |
| Open vraag | OPEN-15 | OPEN-16 | |
| Bevinding | FND-039 | FND-040 | FND-038 en FND-039 komen uit CHG-022; CHG-021 voegt geen bevinding toe |
| Voorstel | PRP-043 | PRP-044 | PRP-043 komt uit CHG-018; PRP-011 vervalt in 0.10, niet hergebruiken |
| Wijziging | CHG-022 | CHG-023 | CHG-020 zijn de weergaven van 0.11 en pagina 0.5; CHG-021 is het herstel van de gaten in model 0.11 (opdracht op kaart `8215b600`); CHG-022 zijn de grill-sessies (B-15, kaart `d57f0546`; B-16, kaart `a5523ebd`) |
| Paperclip-punt | M-17 | M-18 | M-15 t/m M-17 komen uit CHG-022 |
| Grill-moment | GS15 (vervallen) | GS16 | lokaal nummer, geen ID-prefix: `bpmn-conventies` kent er geen, zoals D1–D3 bij de doelen (CHG-022); GS5 t/m GS8, GS12, GS13 en GS15 vervallen door B-16 en worden niet hergebruikt |

## 7. Checklist bij elke uitbreiding (Voorstel; de regels met Feit komen uit `bpmn-conventies`)

1. Eerst het register, daarna de weergaven: procesbeschrijving, overzichten en de pagina (Feit: `bpmn-conventies`).
2. Nieuwe ID's volgens §6; nooit een ID hergebruiken.
3. Elke uitspraak gelabeld: Besloten, Feit (met bron), Aanname (ASM), Open (OPEN) of Voorstel (PRP).
4. Elke lus heeft een maximum van 2 rondes en een uitgang (GOV-08 of PRC-06); in PRC-04 tellen alleen rondes zonder voortgang (Besloten: B-15). Elk akkoord is per document of als pakket, met afkeuren per document (§2; Besloten: B-08). Bij elke stap staat of er een grill-sessie komt (§2 punt 2; ASM-40, B-16).
5. Een regel in `wijzigingen` (CHG).
6. `bpmn-modelcontrole`, en een feitencheck door de agents waar het model iets over zegt.
7. Jouw akkoord. Een goedgekeurd model wordt niet stilzwijgend overschreven: de vorige versie blijft gelden tot de nieuwe is goedgekeurd.
8. Raakt de uitbreiding pagina's: de brieven en waar nodig het ontwerp zijn goedgekeurd vóór het bouwcontract, en het bouwcontract heeft per veld een bron (Besloten (B-12: PRP-032)).
9. Een nieuwe versie van de pagina met het bouwscript (`eindontwerp/build/build.js`, daarna `check.js` en `klikproef.js`). Nieuwe stappen in een swimlane komen in `build/layout.js`, uit de procesbeschrijving. De vorige pagina blijft bewaard (Feit: `bpmn-eindontwerp`).

## 8. Een architectuurprofiel toevoegen of wijzigen (Voorstel, nieuw in 0.4)

1. **Eerst de tabel:** een nieuw profiel (bijvoorbeeld P4 webshop-platform) is eerst een kolom in de profieltabel: criteria, en per product verplicht, optioneel of n.v.t. (register `profielen`, PRC-01; na het maken ook in `architectuurprofielen`).
2. **Past het in een bestaand profiel?** Kies dan geen nieuw profiel. Drie profielen houden de keuze eenvoudig (PRP-034).
3. **Een nieuwe tak in G-01.6** is een wijziging van PRC-01: een CHG, een nieuwe versie met status Concept, en jouw akkoord. De activiteit van de tak krijgt een .5x-nummer zolang het een voorstel is.
4. **Skills:** één nieuwe skill per profiel voor het technisch ontwerp (zoals `architect-cms-configuratie` en `architect-componentontwerp`); de gedeelde tabel blijft in `architectuurprofielen`. Breid `architect-modeling` niet uit met andere profielen; dat maakt die skill te groot (PRP-024, PRP-035).
5. **Een project wisselt van profiel** via G-02.3, ACT-02.6 en een nieuw profiel-ADR (ACT-02.55) met jouw akkoord (GOV-09). De documenten van het nieuwe profiel komen langs hun eigen akkoord.
