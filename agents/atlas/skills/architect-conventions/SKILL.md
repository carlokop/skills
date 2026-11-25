---
name: architect-conventions
description: Stelt één kort conventiebestand per project op: codeconventies, projectstructuur, teststrategie en UI-conventies, met een verwijzing naar de definition of done in CONSTRAINTS.md. Gebruik bij slice 1 na het bouwcontract en vóór het implementatieplan, en bij een wens of slice met een nieuwe NFR of afspraak.
---

# Conventiebestand per project

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Eén kort conventiebestand per project: codeconventies, projectstructuur, teststrategie en de **UI-conventies**. Het is de bron voor die afspraken; de definition of done voor een taak staat in `CONSTRAINTS.md` en het conventiebestand verwijst ernaar. Het design systeem en de patroonbibliotheek zijn bindend; een nieuwe component zonder goedgekeurd ontwerp is een vraag, geen eigen keuze.

## Trigger
Slice 1 bij het eerste ontwerp van een nieuw project: na het bouwcontract van slice 1, vóór het implementatieplan. Bijwerken: bij het bijwerken van het globale ontwerp of het ontwerp per slice, als een wens of slice een nieuwe NFR of afspraak meebrengt.

## Input
Het goedgekeurde technisch ontwerp van het profiel (het klassendiagram bestaat alleen bij P3), de goedgekeurde architectuurkeuze, de goedgekeurde NFR's, het design systeem en de patroonbibliotheek. Bij bijwerken ook het bestaande conventiebestand.

## Output
Het conventiebestand in de repository van het project (die maakt de gebruiker aan), onder `docs/architecture/`.

## Werkwijze
1. Haal de afspraken uit de ADR's en het technisch ontwerp.
2. Neem de UI-conventies op: verwijs naar het design systeem en de patroonbibliotheek en schrijf de regel voor een nieuwe component.
   Neem het browserbeleid op, letterlijk: "Browserbeleid: volgt de NFR browserondersteuning. Gebruik alleen webfuncties die ‘Baseline Widely available’ zijn, of die oudere browsers zonder schade negeren en geen polyfill of fallbackcode vragen. Geen polyfill, fallbackbibliotheek of CDN-import zonder opname in het bouwcontract (vraag aan Atlas). De build-target volgt dit beleid (dus niet `esnext`)."
3. Vul aan wat developers nodig hebben; bij P1 ook thema, plugins, updates en deploy (`architectuurprofielen`).
4. Verwijs voor de definition of done naar `CONSTRAINTS.md`.
5. Houd het kort.
6. Vermeld het pad in je eindbericht. Daarna volgen `CONSTRAINTS.md`, `CLAUDE.md` en `AGENTS.md` met `regelbestanden-en-kwaliteitslat`. Klaar als het bestand voldoet aan de kwaliteitscriteria en het pad in je eindbericht staat.

## Kwaliteitscriteria
- Past op één pagina.
- Elke afspraak is te controleren door de reviewer.
- Geen herhaling van ADR's, design systeem, `CONSTRAINTS.md` of `AGENTS.md`, alleen verwijzingen.

## Controle
Atlas-licht controleert het conventiebestand licht vóór het akkoord op het bouwcontract (`ontwerp-controle`): past het bij de ADR's en het design systeem, en staat elke afspraak op één plek? Het conventiebestand heeft geen eigen akkoord. De reviewer kan in de code controleren of alleen componenten uit de bibliotheek zijn gebruikt; of het er goed uitziet beoordeelt de gebruiker bij de afname.

## Afhankelijkheden
`architect-architecture-choice`; het technisch ontwerp van het profiel (bij P3 `uml-class-diagram`). Daarna `regelbestanden-en-kwaliteitslat`.

## Voorbeeld
"Tests: elke AC heeft minstens één test met het AC-ID in de naam." En: "UI: gebruik alleen componenten uit de patroonbibliotheek. Een nieuwe component? Stel een vraag aan de ontwerper."
