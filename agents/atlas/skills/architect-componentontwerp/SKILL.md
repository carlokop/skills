---
name: architect-componentontwerp
description: Maakt het technisch ontwerp bij profiel P2 (component-app): componenten, routes, datastroom, sequentiediagrammen van de kernflows en zo nodig een datamodel of contentmodel. Gebruik na het akkoord op de richting met profiel P2 en per slice bij een uitbreiding.
---

# Component-, route- en dataontwerp (P2)

## Doel
Het technisch ontwerp bij profiel P2: modules en componenten, routes, datastroom, sequentiediagrammen voor de kernflows, en een datamodel en databaseontwerp alleen bij een eigen database. Bij een headless CMS (bijvoorbeeld Payload) ook het contentmodel. Bij een uitbreiding hetzelfde voor de slice.

## Trigger
Profiel P2 is goedgekeurd bij het akkoord op de richting. Ook na afkeuring bij het akkoord op het technisch ontwerp: dan herzie je het en leg je het opnieuw voor. Bij een uitbreiding: het ontwerp per slice bij P2.

## Input
Het profiel-ADR, de paginabrieven, de ontwerpen en de use cases.

## Output
Eén document voor het akkoord op het technisch ontwerp: componenten- en routeontwerp, datastroom, sequentiediagrammen van de kernflows en zo nodig het datamodel met databaseontwerp of het contentmodel.

## Werkwijze
1. Lees het profiel-ADR, de brieven, de ontwerpen, de patroonbibliotheek en de use cases.
2. Geef elke pagina een route en de componenten die ze gebruikt, uit de patroonbibliotheek.
3. Leg de datastroom vast: welke gegevens elke component nodig heeft, en uit welke brief.
4. Maak een sequentiediagram per kernflow met `uml-sequence-diagrams`, binnen dit document.
5. Is er een eigen database, maak dan datamodel en databaseontwerp met `architect-database` (zonder klassendiagram). Bij een headless CMS leg je het contentmodel vast.
6. Controleer het document met de kwaliteitscriteria.
7. Leg de keuzes uit het document voor als open vragen in je eindbericht, één per keuze (`vragen-en-akkoordrondes`). Een akkoord op alle vragen is het akkoord op het technisch ontwerp. Bij afkeuring herzie je het document en leg je het opnieuw voor.

## De pagina voor de gebruiker
Maak de pagina met `ontwerppagina`, soort componentontwerp. Eén pagina voor het hele document. Schrijf het HTML-bestand en vermeld het pad in je eindbericht; de aanroeper publiceert het als Claude-artifact als de gebruiker dat wil of het project het voorschrijft. Bewaar een URL die de aanroeper teruggeeft in het statusbestand. Leg de keuzes voor als open vragen in je eindbericht (`vragen-en-akkoordrondes`).

## Kwaliteitscriteria
- Elke pagina heeft een route en componenten; elke kernflow heeft een sequentiediagram.
- Elke brief heeft een plek in het ontwerp en het document past bij de profieltabel (criterium voor het akkoord op het technisch ontwerp).
- Is er een domeinmodel nodig, dan is het profiel P3.

## Tools en templates
Sjabloon voor componenten en routes (tabel pagina × route × componenten × gegevens).

## Afhankelijkheden
`architectuurprofielen`, `uml-sequence-diagrams`, `architect-database`. Herhaal hun werkwijze niet.

## Voorbeeld
Een afsprakenapp (P2). Route `/appointments` met *AppointmentList*; route `/appointments/new` met *AppointmentForm*. Kernflow "afspraak maken" als sequentiediagram. Eigen database met de tabel `appointments`, met de velden uit de brief *Afspraak maken*.
