---
name: architect-conventions
description: Stelt één kort conventiebestand per project op: codeconventies, projectstructuur, teststrategie, definition of done en UI-conventies. Gebruik bij slice 1 na het bouwcontract (ACT-01.17) en vóór het implementatieplan (ACT-01.18).
---

# Conventiebestand per project

Besluit: B-08/PRP-010, PRP-037 (design-consistentie bewaken). Bron: `skill-specificaties` op WEB-19.

## Doel
Eén kort conventiebestand per project: codeconventies, projectstructuur, teststrategie, de definition of done voor een taak (CAP-22), en de **UI-conventies**. Het design systeem en de patroonbibliotheek zijn bindend; een nieuwe component zonder goedgekeurd ontwerp is een vraag (PRC-04), geen eigen keuze.

## Trigger
Slice 1 in PRC-01: na het bouwcontract van slice 1 (ACT-01.17), vóór het implementatieplan (ACT-01.18).

## Input
Het goedgekeurde technisch ontwerp van het profiel (GOV-11; het klassendiagram bestaat alleen bij P3), de architectuurkeuze (GOV-15), het design systeem en de patroonbibliotheek.

## Output
Het conventiebestand in de repository van het project (die maakt Carlo aan, B-13), onder `docs/architecture/`.

## Werkwijze
1. Haal de afspraken uit de ADR's en het technisch ontwerp.
2. Neem de UI-conventies op: verwijs naar het design systeem en de patroonbibliotheek en schrijf de regel voor een nieuwe component.
   Neem het browserbeleid op, letterlijk: "Browserbeleid: volgt de NFR browserondersteuning. Gebruik alleen webfuncties die ‘Baseline Widely available’ zijn, of die oudere browsers zonder schade negeren en geen polyfill of fallbackcode vragen. Geen polyfill, fallbackbibliotheek of CDN-import zonder opname in het bouwcontract (vraag aan Atlas). De build-target volgt dit beleid (dus niet `esnext`)." (Akkoord Carlo, WEB-191.)
3. Vul aan wat developers nodig hebben; bij P1 ook thema, plugins, updates en deploy (`architectuurprofielen`).
4. Houd het kort.
5. Meld het aan Dr. Evil.

## Kwaliteitscriteria
- Past op één pagina.
- Elke afspraak is te controleren door Sentinel.
- Geen herhaling van ADR's of design systeem, alleen verwijzingen.

## Controle
Dr. Evil controleert alleen of het bestand bestaat (ACT-01.57, "backlog gereed"). De inhoud heeft geen controleur (FND-022). Sentinel kan in de code controleren of alleen componenten uit de bibliotheek zijn gebruikt; of het er goed uitziet beoordeelt Carlo bij de afname (PRP-037).

## Afhankelijkheden
`architect-architecture-choice`; het technisch ontwerp van het profiel (bij P3 `uml-class-diagram`).

## Voorbeeld
"Tests: elke AC heeft minstens één test met het AC-ID in de naam." En: "UI: gebruik alleen componenten uit de patroonbibliotheek. Een nieuwe component? Stel een vraag aan de ontwerper."
