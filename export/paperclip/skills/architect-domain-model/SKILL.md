---
name: uml-domain-modelling
description: UML Domain Modelling: gebruik om op basis van goedgekeurde use cases en bedrijfsregels een domeinmodel te maken (begrippen, relaties, multipliciteit, domeingebieden) zonder technische details, met de discipline van domain-modeling en GLOSSARY.md. Levert .md met Mermaid plus interactief artifact en vraagt goedkeuring.
---

# UML domeinmodel

Deze skill maakt het **domeinmodel**. Ze is fase 2 van `architect-modeling` en kan ook los worden gebruikt. Communiceer in het Nederlands.

Voorwaarde: goedgekeurde use cases (`docs/architecture/use-cases.md`) en bedrijfsregels (`docs/architecture/business-rules.md`). Zo niet, gebruik eerst `uml-use-cases` en `domain-analysis`.

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Werk volgens `domain-modeling`
De skill `domain-modeling` (Matt Pocock) is de discipline voor de taal van het domein. Pas haar actief toe tijdens deze fase:
- **Challenge tegen de glossary.** Botst een term van de gebruiker met `GLOSSARY.md`, benoem dat meteen ("De glossary definieert 'cancellation' als X, maar je bedoelt Y. Welke is het?").
- **Scherp vage taal aan.** Stel bij overladen woorden ("account", "klant", "order") één canonieke term voor en zet de andere onder `_Avoid_`.
- **Toets met concrete scenario's.** Verzin randgevallen die de grenzen tussen concepten forceren (gedeeltelijke annulering, twee betalingen op één order, een klant zonder account).
- **Vergelijk met de code.** Beschrijft de gebruiker hoe iets werkt, controleer of de bestaande code dat bevestigt en benoem tegenstrijdigheden.
- **Werk `GLOSSARY.md` direct bij** zodra een term vaststaat, niet achteraf. Alleen termen die specifiek zijn voor dit domein; geen implementatiedetails en geen algemene programmeerconcepten. Staat er een `GLOSSARY-MAP.md`, dan zijn er meerdere contexten; kies of vraag welke bij het onderwerp hoort. Meerdere contexten zijn vaak de grenzen tussen de `namespace`s van het domeinmodel.
- **ADR's spaarzaam.** Maak alleen een ADR (`docs/adr/`) als de beslissing moeilijk terug te draaien is, zonder context verrassend is én een echte afweging was.

## Gedeelde werkafspraken

### Eén bron, twee weergaven
Elk diagram bestaat als **model-JSON** (de bron van waarheid) en wordt omgezet met het meegeleverde script naar een `.md`-bestand met Mermaid én een interactief HTML-bestand. Daardoor zijn de twee **altijd exact gelijk**. Lees `references/model-json.md` voor het schema. Draai:

```sh
node <skill-map>/scripts/build.mjs docs/architecture/model/domain-model.json \
  --md   docs/architecture/domain-model.md \
  --html docs/architecture/artifacts/domain-model.html
```

`<skill-map>` is de map waarin deze skill staat. Het script controleert het model (onbekende klassen, ontbrekende relatie-beschrijvingen) en stopt met een foutmelding als er iets niet klopt. Los dat op in de JSON. Bewerk de gegenereerde bestanden nooit handmatig. Er is niets te installeren; het script gebruikt alleen Node.

### De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort domeinmodel. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

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

Regels:
- Begin bij de zelfstandige naamwoorden in de use cases en de bedrijfsregels. Elk domeinconcept krijgt één naam in de taal van de gebruiker (gebruik die term consequent; leg de term vast in `GLOSSARY.md`).
- Neem alleen concepten op die in use cases of bedrijfsregels voorkomen. Geen "BaseModel", "Manager" of technische klassen.
- Per concept: alleen betekenisvolle attributen (geen `id`, `created_at`), geen methoden of hooguit domeinoperaties op hoofdniveau.
- Relaties met **multipliciteit** en een werkwoord of rolnaam (`Customer 1 — * Order : places`). Gebruik compositie voor "bestaat niet zonder" (Order – OrderLine), aggregatie spaarzaam, overerving alleen als het echt "is een" betekent.
- Groepeer in `namespace`s = **domeingebieden** (bijv. `Ordering`, `Payments`, `CustomerManagement`). Dat wordt later de basis voor de modules/namespaces.
- Waardeobjecten (`Money`, `Address`, `Period`) apart herkennen met `stereotype: "value-object"`.
- Vraag je af: waar is variatie te verwachten? Noteer dat in de `description` van het concept (bijv. "betaalmethodes komen er waarschijnlijk bij"). Dat gebruik je in `uml-class-diagram`.

Uitvoer:
- `docs/architecture/model/domain-model.json` (bron)
- `docs/architecture/domain-model.md` en `docs/architecture/artifacts/domain-model.html` (gegenereerd), `kind: "class"`.
- Per concept een korte `description` met de betekenis; per relatie een `description`.
- Vul in `docs/architecture/use-cases.md` of `STATUS.md` een traceertabel aan: use case → gebruikte domeinconcepten.

Grill-sessie bij twijfel over begrippen of relaties ("Is a Customer the same as a User?", "Can one order have several payments?"). Werk dit als `domain-modeling`-sessie (zie hierboven).

Goedkeuringsmoment.

## Aanvulling PRC-08 (model 0.14): geen eigen stop, akkoord via het pakket

Besluit: B-08/PRP-003, ASM-18, B-12/PRP-029, PRP-034, PRP-036. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor het eigen goedkeuringsmoment hierboven.

- **Geen eigen stop in PRC-01 (nieuwe klant).** Je werkt door naar het volgende document van het pakket. Het akkoord is GOV-11 (technisch ontwerp volgens profiel): één kaart met vragen per keuze (PRP-040, B-23, `vragen-en-akkoordrondes`). Keurt Carlo een document af, dan gaat alleen dat document door PRC-05; latere documenten die erdoor geraakt worden werk je mee bij en komen opnieuw in hetzelfde pakket (ASM-18).
- **In PRC-02 (uitbreiding) volgt het akkoord als kaart met vragen per keuze**, samen met het ontwerpbesluit (ACT-02.55): GOV-03 (domeinmodel).
- **Alleen bij profiel P3** (`architectuurprofielen`).
- Alleen P3; bij P1 volstaat GLOSSARY.md. Dekking: ACT-01.10 (domeinmodel opstellen bij maatwerk) en ACT-02.6 (globaal ontwerp of profiel bijwerken).
- Kwaliteitscriteria blijven ongewijzigd.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): intern, geen akkoord, geen pagina

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- Het domeinmodel en `GLOSSARY.md` zijn intern. Geen ontwerppagina, geen kaart, geen akkoord van Carlo en geen tekstversie op het issue. Het goedkeuringsmoment en "De pagina voor Carlo" hierboven vervallen.
- Oplevering: het modelbestand (`docs/architecture/model/domain-model.json`) en een regeldocument in `docs/architecture/` met levenscycli, invarianten en herleiding naar use cases en bedrijfsregels. De `.md` met Mermaid mag je voor eigen gebruik genereren.
- Keuzes die je zelf invulde en die niet in de eisen of bedrijfsregels staan, leg je voor als vraag met advies op de kaart van het document klassendiagram en database.
- De begrippenlijst heeft geen eigen akkoord. Geldt voor PRC-01 en PRC-02; in PRC-02 geldt GOV-03 niet meer voor het domeinmodel.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.
