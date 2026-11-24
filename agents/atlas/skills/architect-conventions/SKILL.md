---
name: architect-conventions
description: Stelt één kort conventiebestand per project op: codeconventies, projectstructuur, teststrategie, definition of done en UI-conventies. Gebruik bij slice 1 na het bouwcontract en vóór het implementatieplan.
---

# Conventiebestand per project

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Eén kort conventiebestand per project: codeconventies, projectstructuur, teststrategie, de definition of done voor een taak, en de **UI-conventies**. Het design systeem en de patroonbibliotheek zijn bindend; een nieuwe component zonder goedgekeurd ontwerp is een vraag, geen eigen keuze.

## Trigger
Slice 1 bij het eerste ontwerp van een nieuw project: na het bouwcontract van slice 1, vóór het implementatieplan.

## Input
Het goedgekeurde technisch ontwerp van het profiel (het klassendiagram bestaat alleen bij P3), de goedgekeurde architectuurkeuze, het design systeem en de patroonbibliotheek.

## Output
Het conventiebestand in de repository van het project (die maakt de gebruiker aan), onder `docs/architecture/`.

## Werkwijze
1. Haal de afspraken uit de ADR's en het technisch ontwerp.
2. Neem de UI-conventies op: verwijs naar het design systeem en de patroonbibliotheek en schrijf de regel voor een nieuwe component.
   Neem het browserbeleid op, letterlijk: "Browserbeleid: volgt de NFR browserondersteuning. Gebruik alleen webfuncties die ‘Baseline Widely available’ zijn, of die oudere browsers zonder schade negeren en geen polyfill of fallbackcode vragen. Geen polyfill, fallbackbibliotheek of CDN-import zonder opname in het bouwcontract (vraag aan Atlas). De build-target volgt dit beleid (dus niet `esnext`)."
3. Vul aan wat developers nodig hebben; bij P1 ook thema, plugins, updates en deploy (`architectuurprofielen`).
4. Houd het kort.
5. Vermeld het pad in je eindbericht.

## Kwaliteitscriteria
- Past op één pagina.
- Elke afspraak is te controleren door de reviewer.
- Geen herhaling van ADR's of design systeem, alleen verwijzingen.

## Controle
De inhoud heeft geen aparte controleur. De reviewer kan in de code controleren of alleen componenten uit de bibliotheek zijn gebruikt; of het er goed uitziet beoordeelt de gebruiker bij de afname.

## Afhankelijkheden
`architect-architecture-choice`; het technisch ontwerp van het profiel (bij P3 `uml-class-diagram`).

## Voorbeeld
"Tests: elke AC heeft minstens één test met het AC-ID in de naam." En: "UI: gebruik alleen componenten uit de patroonbibliotheek. Een nieuwe component? Stel een vraag aan de ontwerper."
