---
name: architect-cms-configuratie
description: Maakt het technisch ontwerp bij profiel P1 (CMS): het contentmodel met de velden per template en blok, templates, plugins, integraties en platformconfiguratie. Gebruik na het akkoord op de richting met profiel P1 en per slice bij een uitbreiding.
---

# Contentmodel en platformconfiguratie (P1)

## Doel
Het technisch ontwerp bij profiel P1: het contentmodel met de velden per template en blok (contenttypen, velden, taxonomieën, rollen), templates en blokken per paginatype, plugins, integraties en platformconfiguratie. Bij een uitbreiding hetzelfde voor de slice. Het **templatecontract** per slice maak je hier niet: dat doet `architect-api-contracts`, op basis van dit contentmodel. Het contentmodel werk je per slice bij als een uitbreiding dat vraagt.

## Trigger
Profiel P1 is goedgekeurd bij het akkoord op de richting. Ook na afkeuring van het contentmodel bij het akkoord op het technisch ontwerp: dan herzie je het en leg je het opnieuw voor. Bij een uitbreiding: het ontwerp per slice bij P1.

## Input
Het profiel-ADR (platform, thema, plugins, hosting), de paginabrieven, de ontwerpen en de patroonbibliotheek.

## Output
Eén document voor het akkoord op het technisch ontwerp: het contentmodel, de templates en blokken per paginatype, de plugins en de integraties; optioneel een sequentiediagram, alleen voor een koppeling. Het contentmodel noemt per template en blok de velden met hun bron.

## Werkwijze
1. Lees het profiel-ADR, de brieven, de ontwerpen en de patroonbibliotheek.
2. Bepaal de contenttypen per paginatype. Neem de velden over uit de brieven, met hun bron.
3. Leg de taxonomieën en de rollen vast: wie beheert welke content.
4. Leg per paginatype een template vast met zijn blokken, volgens het ontwerp en het patroon.
5. Leg plugins en integraties vast. Maak alleen voor een koppeling een sequentiediagram (`uml-sequence-diagrams`), binnen dit document.
6. Controleer het document met de kwaliteitscriteria.
7. Leg de keuzes uit het document voor als open vragen in je eindbericht, één per keuze (`vragen-en-akkoordrondes`). Een akkoord op alle vragen is het akkoord op het technisch ontwerp. Bij afkeuring herzie je het document en leg je het opnieuw voor.

## De pagina voor de gebruiker
Maak de pagina met `ontwerppagina`, soort contentmodel. Eén pagina voor het hele document. Schrijf het HTML-bestand en vermeld het pad in je eindbericht; de aanroeper publiceert het als Claude-artifact als de gebruiker dat wil of het project het voorschrijft. Bewaar een URL die de aanroeper teruggeeft in het statusbestand. Leg de keuzes voor als open vragen in je eindbericht (`vragen-en-akkoordrondes`).

## Kwaliteitscriteria
- Elk paginatype heeft een template.
- Elk veld uit de brieven staat in het contentmodel; geen veld uit mock data.
- Elke brief heeft een plek in het ontwerp en het document past bij de profieltabel (criterium voor het akkoord op het technisch ontwerp).

## Tools en templates
Sjabloon voor het contentmodel (tabel contenttype × veld × bron) en voor templates en blokken.

## Afhankelijkheden
`architectuurprofielen`, `architect-architecture-choice` (profiel-ADR). `architect-api-contracts` hangt bij P1 van deze skill af, en niet andersom.

## Voorbeeld
De bakkerij op een CMS (P1): contenttype *Product* met naam, prijs, foto en allergenen (bron: brief *Productpagina*, BR-03); taxonomie *Categorie*; template *Productpagina* met de blokken *Kop*, *Productinformatie* en *Allergenen*; een plugin voor het contactformulier. `architect-api-contracts` maakt daaruit het templatecontract van slice 1.
