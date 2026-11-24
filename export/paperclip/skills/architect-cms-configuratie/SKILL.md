---
name: architect-cms-configuratie
description: Maakt het technisch ontwerp bij profiel P1 (CMS): het contentmodel met de velden per template en blok, templates, plugins, integraties en platformconfiguratie. Gebruik na het akkoord op profiel P1 (ACT-01.60) en per slice bij een uitbreiding (ACT-02.7).
---

# Contentmodel en platformconfiguratie (P1)

Besluit: PRP-034, PRP-035, PRP-043, ASM-46. CAP-26. Bron: `skill-specificaties` op WEB-19.

## Doel
Het technisch ontwerp bij profiel P1: het contentmodel met de velden per template en blok (contenttypen, velden, taxonomieën, rollen), templates en blokken per paginatype, plugins, integraties en platformconfiguratie. Bij een uitbreiding (ACT-02.7) hetzelfde voor de slice. Het **templatecontract** per slice maak je hier niet: dat doet `architect-api-contracts`, op basis van dit contentmodel (PRP-043). Het contentmodel werk je per slice bij als een uitbreiding dat vraagt (ASM-46).

## Trigger
Profiel P1 is goedgekeurd in GOV-15 (G-01.6 → ACT-01.60). Ook na afkeuring van het contentmodel bij GOV-11 (PRC-05). In PRC-02: het ontwerp per slice bij P1 (ACT-02.7).

## Input
Het profiel-ADR (platform, thema, plugins, hosting), de paginabrieven, de ontwerpen en de patroonbibliotheek.

## Output
Eén document voor GOV-11: het contentmodel, de templates en blokken per paginatype, de plugins en de integraties; optioneel een sequentiediagram, alleen voor een koppeling. Het contentmodel noemt per template en blok de velden met hun bron.

## Werkwijze
1. Lees het profiel-ADR, de brieven, de ontwerpen en de patroonbibliotheek.
2. Bepaal de contenttypen per paginatype. Neem de velden over uit de brieven, met hun bron.
3. Leg de taxonomieën en de rollen vast: wie beheert welke content.
4. Leg per paginatype een template vast met zijn blokken, volgens het ontwerp en het patroon.
5. Leg plugins en integraties vast. Maak alleen voor een koppeling een sequentiediagram (`uml-sequence-diagrams`), binnen dit document.
6. Controleer het document met de kwaliteitscriteria.
7. Leg de keuzes uit het document voor in GOV-11 als kaart met vragen per keuze (B-23, `vragen-en-akkoordrondes`). Bij afkeuring volgt PRC-05, terug naar ACT-01.60.

## De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort contentmodel. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

## Kwaliteitscriteria
- Elk paginatype heeft een template.
- Elk veld uit de brieven staat in het contentmodel; geen veld uit mock data.
- Elke brief heeft een plek in het ontwerp en het document past bij de profieltabel (criterium GOV-11).

## Tools en templates
Sjabloon voor het contentmodel (tabel contenttype × veld × bron) en voor templates en blokken; `paperclip`.

## Afhankelijkheden
`architectuurprofielen`, `architect-architecture-choice` (profiel-ADR). `architect-api-contracts` hangt bij P1 van deze skill af, en niet andersom.

## Voorbeeld
De bakkerij op een CMS (P1): contenttype *Product* met naam, prijs, foto en allergenen (bron: brief *Productpagina*, BR-03); taxonomie *Categorie*; template *Productpagina* met de blokken *Kop*, *Productinformatie* en *Allergenen*; een plugin voor het contactformulier. `architect-api-contracts` maakt daaruit het templatecontract van slice 1.
