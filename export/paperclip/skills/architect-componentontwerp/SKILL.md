---
name: architect-componentontwerp
description: Maakt het technisch ontwerp bij profiel P2 (component-app): componenten, routes, datastroom, sequentiediagrammen van de kernflows en zo nodig een datamodel of contentmodel. Gebruik na het akkoord op profiel P2 (ACT-01.59) en per slice bij een uitbreiding (ACT-02.7).
---

# Component-, route- en dataontwerp (P2)

Besluit: PRP-034, PRP-035. CAP-27 (in ACT-01.59 ook CAP-07 en CAP-09). Bron: `skill-specificaties` op WEB-19.

## Doel
Het technisch ontwerp bij profiel P2: modules en componenten, routes, datastroom, sequentiediagrammen voor de kernflows, en een datamodel en databaseontwerp alleen bij een eigen database. Bij een headless CMS (bijvoorbeeld Payload) ook het contentmodel. Bij een uitbreiding (ACT-02.7) hetzelfde voor de slice.

## Trigger
Profiel P2 is goedgekeurd in GOV-15 (G-01.6 → ACT-01.59). Ook na afkeuring bij GOV-11 (PRC-05). In PRC-02: het ontwerp per slice bij P2 (ACT-02.7).

## Input
Het profiel-ADR, de paginabrieven, de ontwerpen en de use cases.

## Output
Eén document voor GOV-11: componenten- en routeontwerp, datastroom, sequentiediagrammen van de kernflows en zo nodig het datamodel met databaseontwerp of het contentmodel.

## Werkwijze
1. Lees het profiel-ADR, de brieven, de ontwerpen, de patroonbibliotheek en de use cases.
2. Geef elke pagina een route en de componenten die ze gebruikt, uit de patroonbibliotheek.
3. Leg de datastroom vast: welke gegevens elke component nodig heeft, en uit welke brief.
4. Maak een sequentiediagram per kernflow met `uml-sequence-diagrams`, binnen dit document.
5. Is er een eigen database, maak dan datamodel en databaseontwerp met `architect-database` (zonder klassendiagram). Bij een headless CMS leg je het contentmodel vast.
6. Controleer het document met de kwaliteitscriteria.
7. Leg de keuzes uit het document voor in GOV-11 als kaart met vragen per keuze (B-23, `vragen-en-akkoordrondes`). Bij afkeuring volgt PRC-05, terug naar ACT-01.59.

## De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort componentontwerp. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

## Kwaliteitscriteria
- Elke pagina heeft een route en componenten; elke kernflow heeft een sequentiediagram.
- Elke brief heeft een plek in het ontwerp en het document past bij de profieltabel (criterium GOV-11).
- Is er een domeinmodel nodig, dan is het profiel P3.

## Tools en templates
Sjabloon voor componenten en routes (tabel pagina × route × componenten × gegevens); `paperclip`.

## Afhankelijkheden
`architectuurprofielen`, `uml-sequence-diagrams`, `architect-database`. Herhaal hun werkwijze niet.

## Voorbeeld
Een afsprakenapp (P2). Route `/appointments` met *AppointmentList*; route `/appointments/new` met *AppointmentForm*. Kernflow "afspraak maken" als sequentiediagram. Eigen database met de tabel `appointments`, met de velden uit de brief *Afspraak maken*.
