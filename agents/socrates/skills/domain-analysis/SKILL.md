---
name: domain-analysis
description: Legt bedrijfsregels, onveranderlijke regels en levenscyclus van domeinbegrippen vast in bedrijfstaal, als invoer voor het domeinmodel van de systeemarchitect. Begrippen en glossary gaan via domain-modeling.
---

# Domeinanalyse: bedrijfsregels en levenscyclus

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
In bedrijfstaal vastleggen wat er in het domein mag, moet en kan gebeuren: bedrijfsregels, onveranderlijke regels en levenscyclus. Het domeinmodel zelf (concepten, relaties, multipliciteit, domeingebieden) valt hier niet onder: dat maakt de systeemarchitect met `uml-domain-modelling`. Deze skill levert wat daar ontbreekt: de regels en de levenscyclus.

## Gebruik wat er al is
- **Begrippen, scherpe termen, scenario's, glossary:** skill `domain-modeling`. Pas die toe en herhaal haar werkwijze niet. Werk `GLOSSARY.md` direct bij.
- **Use cases:** skill `uml-use-cases`.
- **Het model:** skill `uml-domain-modelling`.

## Voorwaarde
Er zijn use cases (concept of goedgekeurd). Zonder use cases heb je nog niet genoeg om regels op te baseren.

## Stappen
1. **Begrippen scherp** via `domain-modeling`: botsingen met de glossary, overladen woorden, randgevallen die grenzen afdwingen.
2. **Bedrijfsregels** per begrip of proces: wat geldt bij aanmaken, wijzigen, annuleren, verwijderen, bewaren en toegang. Geef elke regel een ID (`BR-001`), met bron (FR- of UC-ID). Verwijs vanuit de use cases naar deze ID's in plaats van de regels te herhalen.
3. **Onveranderlijke regels** in bedrijfstaal ("een betaalde bestelling kan niet meer worden gewijzigd").
4. **Levenscyclus** per begrip waar relevant, als tabel: van-status, naar-status, trigger, voorwaarde, wie mag het. Geen diagrammen met de hand tekenen.
5. **Randgevallen:** uitzonderingen, regels die bij gelijktijdig gebruik gevoelig zijn, audit- en bewaarplicht.
6. **Vergelijk** met bestaande documentatie en code (zoals `domain-modeling` voorschrijft) en meld tegenstrijdigheden.
7. **Open vragen:** domeinbeslissingen die nog niet vaststaan. Technische modelleervragen zet je als verzoek aan de systeemarchitect (Atlas) in je eindbericht; de aanroeper geeft ze door.

## Uitvoer
`docs/architecture/business-rules.md` met:
- Bedrijfsregels (`BR-`) met bron
- Onveranderlijke regels
- Levenscyclus per begrip
- Randgevallen
- Open vragen en conflicten met bestaand gedrag

Koppel het bestand aan het requirements-document en laat het meegaan met de goedkeuring daarvan. Het is invoer voor het domeinmodel.

## Regels
- Scheid bevestigde regels van kandidaat-interpretaties.
- Kies geen databasetechniek, ORM, servicegrenzen of deployment.
- Maak geen domeinmodel en wijzig geen goedgekeurd model.
- Verzin geen gedrag om een gat te vullen: leg het gat vast of vraag het.
