---
name: uml-sequence-diagrams
description: UML Sequence Diagrams: gebruik om de belangrijkste use cases uit te werken tot sequentiediagrammen: kies eerst met de gebruiker welke use cases relevant zijn, teken hoofdscenario en alternatieven met verantwoordelijkheden per laag. Levert .md met Mermaid plus interactief klikbaar artifact en vraagt goedkeuring.
---

# UML sequentiediagrammen

Deze skill werkt de relevante use cases uit tot **sequentiediagrammen**. Ze is fase 3 van `architect-modeling` en kan ook los worden gebruikt voor één nieuwe use case (zie `architect-implementation-plan`). Communiceer in het Nederlands.

Voorwaarde: goedgekeurde use cases en een goedgekeurd domeinmodel. Zo niet, gebruik eerst `uml-use-cases` en `uml-domain-modelling`.

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Gedeelde werkafspraken

### Eén bron, twee weergaven
Elk diagram bestaat als **model-JSON** (de bron van waarheid) en wordt omgezet met het meegeleverde script naar een `.md`-bestand met Mermaid én een interactief HTML-bestand. Daardoor zijn de twee **altijd exact gelijk**. Lees `references/model-json.md` voor het schema. Draai:

```sh
node <skill-map>/scripts/build.mjs docs/architecture/model/sequences.json \
  --md   docs/architecture/sequences.md \
  --html docs/architecture/artifacts/sequences.html
```

`<skill-map>` is de map waarin deze skill staat. Het script controleert het model (onbekende klassen, ontbrekende relatie-beschrijvingen) en stopt met een foutmelding als er iets niet klopt. Los dat op in de JSON. Bewerk de gegenereerde bestanden nooit handmatig. Er is niets te installeren; het script gebruikt alleen Node.

### De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort interactiediagrammen. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

### Goedkeuringsmoment (elke fase)
1. Controleer: elk element heeft een beschrijving, elke relatie een `description`, niets verwijst naar iets dat niet bestaat, en alles is te herleiden tot eisen (FR-ID's) of use cases.
2. Post een reactie in het Nederlands: wat is er gemaakt (3 tot 6 regels), de belangrijkste ontwerpkeuzes en afwegingen, wat je niet zeker weet, links naar de bestanden, en de vraag **"Akkoord, of wat moet er anders?"**
3. Zet de issue in de wachtstand voor gebruikersinput en stop.
4. Bij feedback: pas de JSON aan, genereer opnieuw, upload opnieuw en leg opnieuw voor. Noteer de wijziging in `docs/architecture/STATUS.md`.
5. Bij akkoord: zet in `STATUS.md` de fase op "Goedgekeurd (datum)" en ga naar de volgende fase.

Houd `docs/architecture/STATUS.md` bij als overzicht: per fase status, datum goedkeuring, links naar bestanden, openstaande punten. Start elke sessie door dit bestand te lezen om te weten waar je was.

### Grill-sessies
Waar in een fase iets onduidelijk is, start je een grill-sessie: één vraag tegelijk, steeds met je aanbevolen antwoord, spiegelen na elk blok, stoppen als het ontwerp er niet meer door verandert. Gebruik de skill `grilling` als die beschikbaar is. Vraag niets wat je uit requirements, code of eerdere antwoorden kunt halen.

## Stappen

1. **Selecteer eerst welke use cases uitgewerkt moeten worden**, en leg de selectie als korte vraag voor aan de gebruiker vóór je tekent (met advies en gevolg bij nee; geen document). Kies op basis van:
   - architectonisch belang (raakt veel lagen of externe systemen),
   - risico of onzekerheid (nieuw, complex, tijdskritisch, veiligheid),
   - zakelijke prioriteit (Must),
   - representativiteit (één per "soort" interactie: CRUD, betaling, import, asynchrone verwerking, rapportage).
   Eenvoudige CRUD-use cases die op een eerdere lijken hoeven niet allemaal; verwijs naar het patroon. Presenteer de selectie als tabel (use case · reden · type) en vraag akkoord of aanpassing. Dit is een mini-goedkeuringsmoment.
2. Werk per gekozen use case het hoofdscenario én de belangrijkste alternatieven uit (`alt`/`opt`/`loop`-fragmenten), plus foutafhandeling waar die ontwerpimpact heeft.
3. **Deelnemers**: actor → UI/controller → service(s) → domeinobjecten/repository → externe systemen. Gebruik in deze fase werknamen die in `uml-class-diagram` de klassenamen worden, en let op de **GRASP-verdeling** (zie `uml-class-diagram`): lichte controllers, logica in services/domeinobjecten, geen ketens van "God"-aanroepen.
4. Voeg bij belangrijke berichten een `detail` toe (waarom, welke regel, welke data). Dat is wat de gebruiker in het artifact ziet bij klikken.
5. Controleer: komt elk domeinconcept dat in het scenario voorkomt uit het domeinmodel? Komt er iets nieuws naar boven (concept, attribuut, relatie)? Pas dan het domeinmodel aan, **meld dat expliciet** aan de gebruiker en genereer het opnieuw.
6. Uitvoer: een model-JSON per groep verwante use cases of één bestand met alle `sequences`, `kind: "sequence"`:
   - `docs/architecture/model/sequences.json`
   - `docs/architecture/sequences.md` (Mermaid per use case, plus toelichtingstabel)
   - `docs/architecture/artifacts/sequences.html` (kiezen tussen use cases, klik op een bericht voor uitleg)
7. Grill-sessie bij onduidelijke volgorde, synchroon/asynchroon, transacties of foutafhandeling.
8. Goedkeuringsmoment.

Houd bij de verdeling van verantwoordelijkheden de GRASP-principes aan (Controller, Information Expert, Low Coupling, High Cohesion); de uitleg staat in `uml-class-diagram`.

## Aanvulling PRC-08 (model 0.14): geen eigen stop, akkoord via het pakket

Besluit: B-08/PRP-003, ASM-18, B-12/PRP-029, PRP-034, PRP-036. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor het eigen goedkeuringsmoment hierboven.

- **Geen eigen stop in PRC-01 (nieuwe klant).** Je werkt door naar het volgende document van het pakket. Het akkoord is GOV-11 (technisch ontwerp volgens profiel): één kaart met vragen per keuze (PRP-040, B-23, `vragen-en-akkoordrondes`). Keurt Carlo een document af, dan gaat alleen dat document door PRC-05; latere documenten die erdoor geraakt worden werk je mee bij en komen opnieuw in hetzelfde pakket (ASM-18).
- **In PRC-02 (uitbreiding) volgt het akkoord als kaart met vragen per keuze**, samen met het ontwerpbesluit (ACT-02.55): GOV-04 (sequentiediagrammen).
- **Alleen bij profiel P3** (`architectuurprofielen`).
- ACT-01.12 alleen bij P3, na het paginaontwerp, met de paginabrieven en ontwerpen als extra input (wat de gebruiker op de pagina doet). Bij P2 maak je de sequentiediagrammen van de kernflows binnen het document van `architect-componentontwerp` (ACT-01.59); daar heeft deze skill hetzelfde eigen goedkeuringsmoment niet: het akkoord is het document van GOV-11. Bij P1 optioneel voor een koppeling, binnen `architect-cms-configuratie` (ACT-01.60). Dekking: ACT-01.12, ACT-01.59, ACT-02.6, ACT-02.7.
- Kwaliteitscriteria blijven ongewijzigd.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): intern, alle kern-use cases, geen akkoord

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- De sequentiediagrammen zijn intern. Geen ontwerppagina, geen kaart, geen akkoord van Carlo en geen tekstversie op het issue. Het goedkeuringsmoment, "De pagina voor Carlo" en de selectievraag aan de gebruiker (stap 1) vervallen.
- Je werkt **alle kern-use cases** uit; bij eenvoudige CRUD die op een eerdere lijkt volstaat een verwijzing naar het patroon. De selectie bepaal je zelf.
- Oplevering: `docs/architecture/model/sequences.json` en een regeldocument in `docs/architecture/` met herleiding naar use cases en bedrijfsregels.
- Ook bij P2 zijn de sequenties van de kernflows intern. In PRC-02 geldt GOV-04 niet meer.
- Keuzes die je zelf invulde en die niet in de eisen of bedrijfsregels staan, komen als vraag met advies op de kaart van het document klassendiagram en database.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.
