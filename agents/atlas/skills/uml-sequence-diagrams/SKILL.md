---
name: uml-sequence-diagrams
description: UML Sequence Diagrams: gebruik om de belangrijkste use cases uit te werken tot sequentiediagrammen: kies eerst met de gebruiker welke use cases relevant zijn, teken hoofdscenario en alternatieven met verantwoordelijkheden per laag. Levert .md met Mermaid plus interactief klikbaar artifact en vraagt goedkeuring.
---

# UML sequentiediagrammen

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

Deze skill werkt de relevante use cases uit tot **sequentiediagrammen**. Ze is fase 3 van `architect-modeling` en kan ook los worden gebruikt voor één nieuwe use case (zie `architect-implementation-plan`). Communiceer in het Nederlands.

Voorwaarde: goedgekeurde use cases en het domeinmodel. Het domeinmodel is intern en heeft geen eigen akkoord; je gebruikt het domeinmodel uit hetzelfde pakket. Ontbreekt het, gebruik dan eerst `uml-domain-modelling` (use cases: `uml-use-cases`).

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Gedeelde werkafspraken

### Eén bron, twee weergaven
Elk diagram bestaat als **model-JSON** (de bron van waarheid) en wordt omgezet met het meegeleverde script naar een `.md`-bestand met Mermaid én een interactief HTML-bestand. Daardoor zijn de twee **altijd exact gelijk**. Lees `references/model-json.md` voor het schema. Draai:

```sh
node ${CLAUDE_SKILL_DIR}/scripts/build.mjs docs/architecture/model/sequences.json \
  --md   docs/architecture/sequences.md \
  --html docs/architecture/artifacts/sequences.html
```

`${CLAUDE_SKILL_DIR}` is de map van deze skill (Claude Code vult die in). Het script controleert het model (onbekende klassen, ontbrekende relatie-beschrijvingen) en stopt met een foutmelding als er iets niet klopt. Los dat op in de JSON. Bewerk de gegenereerde bestanden nooit handmatig. Er is niets te installeren; het script gebruikt alleen Node.

### De ontwerppagina
Maak de pagina met `ontwerppagina`, soort interactiediagrammen. Eén pagina voor het hele document. Schrijf het HTML-bestand op de documentlocatie van het project en vermeld de paden (ook die van de `.md`-bestanden) in je eindbericht; de aanroeper publiceert de pagina als Claude-artifact als de gebruiker dat wil of het project het voorschrijft. Bewaar een URL die de aanroeper teruggeeft in `STATUS.md`. Leg de keuzes voor als open vragen in je eindbericht (`vragen-en-akkoordrondes`).

### Goedkeuringsmoment (elke fase)
1. Controleer: elk element heeft een beschrijving, elke relatie een `description`, niets verwijst naar iets dat niet bestaat, en alles is te herleiden tot eisen (FR-ID's) of use cases.
2. Schrijf je eindbericht in het Nederlands: wat is er gemaakt (3 tot 6 regels), de belangrijkste ontwerpkeuzes en afwegingen, wat je niet zeker weet, de paden van de bestanden, en de **open vragen** over de keuzes en aannames die je zelf invulde: genummerd, per vraag één zin, je advies en wat er bij nee gebeurt (`vragen-en-akkoordrondes`). De aanroeper legt ze aan de gebruiker voor en geeft de antwoorden terug; een akkoord op alle vragen van het document is het akkoord op dat document.
3. Stop en geef je eindbericht terug (status "wacht op antwoorden"); de aanroeper hervat je met de antwoorden.
4. Bij feedback: pas de JSON aan, genereer opnieuw en leg opnieuw voor. Noteer de wijziging in `docs/architecture/STATUS.md`.
5. Bij akkoord (de aanroeper meldt het, met de datum): zet in `STATUS.md` de fase op "Goedgekeurd (datum)" en ga naar de volgende fase.

Houd `docs/architecture/STATUS.md` bij als overzicht: per fase status, datum goedkeuring, links naar bestanden, openstaande punten. Start elke sessie door dit bestand te lezen om te weten waar je was.

### Grill-sessies
Waar in een fase iets onduidelijk is, bereid je een grill-sessie voor als vragenronde: alle vragen die nu te beantwoorden zijn, genummerd, elk met je aanbevolen antwoord, in je eindbericht. Stop daarna; de aanroeper legt ze voor en hervat je met de antwoorden. Na elke ronde spiegel je wat er veranderd is; stop met rondes als het ontwerp er niet meer door verandert. Gebruik de skill `grilling` als die beschikbaar is. Vraag niets wat je uit requirements, code of eerdere antwoorden kunt halen.

## Stappen

1. **Selecteer eerst welke use cases uitgewerkt moeten worden**, en leg de selectie als open vraag in je eindbericht voor aan de gebruiker vóór je tekent (met advies en gevolg bij nee; geen document); stop daarna en wacht tot de aanroeper je hervat. Kies op basis van:
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

## Geen eigen stop, akkoord via het pakket

Dit gaat voor het eigen goedkeuringsmoment hierboven.

- **Geen eigen stop bij het eerste ontwerp van een nieuw project.** Je werkt door naar het volgende document van het pakket. Het akkoord is het akkoord op het technisch ontwerp van het profiel: één set open vragen per keuze (`vragen-en-akkoordrondes`). Keurt de gebruiker een document af, dan herzie je alleen dat document en leg je het opnieuw voor; latere documenten die erdoor geraakt worden werk je mee bij en komen opnieuw in hetzelfde pakket.
- **Bij een uitbreiding volgt het akkoord als open vragen per keuze**, samen met het ontwerpbesluit: het akkoord op de sequentiediagrammen.
- **Alleen bij profiel P3** (`architectuurprofielen`).
- Sequentiediagrammen maken alleen bij P3, na het paginaontwerp, met de paginabrieven en ontwerpen als extra input (wat de gebruiker op de pagina doet). Bij P2 maak je de sequentiediagrammen van de kernflows binnen het document van `architect-componentontwerp`; daar heeft deze skill hetzelfde eigen goedkeuringsmoment niet: het akkoord is het akkoord op het technisch ontwerp van het profiel. Bij P1 optioneel voor een koppeling, binnen `architect-cms-configuratie`.
- Kwaliteitscriteria blijven ongewijzigd.


## Intern, alle kern-use cases, geen akkoord

Dit gaat voor alle eerdere regels over akkoord, pagina of document voor dit onderdeel.

- De sequentiediagrammen zijn intern. Geen ontwerppagina, geen open vragen ter goedkeuring, geen akkoord van de gebruiker en geen tekstversie als apart document. Het goedkeuringsmoment, "De ontwerppagina" en de selectievraag aan de gebruiker (stap 1) vervallen.
- Je werkt **alle kern-use cases** uit; bij eenvoudige CRUD die op een eerdere lijkt volstaat een verwijzing naar het patroon. De selectie bepaal je zelf.
- Oplevering: `docs/architecture/model/sequences.json` en een regeldocument in `docs/architecture/` met herleiding naar use cases en bedrijfsregels.
- Ook bij P2 zijn de sequenties van de kernflows intern. Bij een uitbreiding is er geen apart akkoord meer op de sequentiediagrammen.
- Keuzes die je zelf invulde en die niet in de eisen of bedrijfsregels staan, komen als open vraag met advies bij het document klassendiagram en database.
