---
name: architectuurprofielen
description: Gedeelde referentie met de drie architectuurprofielen (P1 CMS, P2 component-app, P3 maatwerk): keuzevragen, producten per profiel, skills per profiel en groeisignalen. Gebruik bij het projecttype in de visie, de architectuurkeuze, de groeitoets bij een uitbreiding en de poort op verplichte documenten.
---

# Architectuurprofielen

Dit is een **referentie**, geen stappenplan. Andere skills verwijzen ernaar en herhalen de tabel niet. De producttabel (per product verplicht, optioneel of n.v.t.) staat niet in deze skill: heeft het project er een, dan is die de bron van waarheid en wint die bij een afwijking. Ontbreekt ze, meld het aan de aanroeper.

## Doel
Eén plek voor de drie profielen: P1 configuratie/CMS, P2 component-app, P3 maatwerk met domeinmodel. Met keuzecriteria, producten per profiel (verplicht, optioneel of n.v.t.), skills per profiel en groeisignalen.

## Wie gebruikt hem wanneer
- Socrates: projecttype in de visie.
- Atlas: profielkeuze bij de architectuurkeuze en groeitoets bij elke uitbreiding.
- De aanroeper: alleen als naslag, om te bepalen welke documenten verplicht zijn; het akkoord op het technisch ontwerp van het profiel toetst tegen de producttabel.

## Input en output
Input: het projecttype, de requirements en de paginalijst. Output: een profielkeuze met redenen (voor het profiel-ADR) en een lijst met de verplichte producten van het profiel, voor de poort.

## Inhoud
1. **De keuze in twee vragen.** Haalt een standaardplatform de eisen met configuratie, thema en plugins? Ja → P1. Zo niet: is er bedrijfslogica met eigen regels en toestanden? Ja → P3, nee → P2. Een CMS dat je in code configureert met een frontend van componenten (bijvoorbeeld Payload) is P2. De keuze gaat op criteria, niet op technologie.
2. **Signalen voor het projecttype:** soort en aantal pagina's, bedrijfslogica, eigen data, integraties, wie de content beheert, verwachte groei.
3. **Producten per profiel:** de producttabel (zie boven), ook bij het eerste ontwerp van een nieuw project. Bij P1 en P2 is er één technisch document in het akkoord op het technisch ontwerp van het profiel, bij P3 vier.
4. **Skills per profiel:**
   - P1: `architect-cms-configuratie` (het contentmodel; het templatecontract per slice maakt `architect-api-contracts`).
   - P2: `architect-componentontwerp`, met `uml-sequence-diagrams` en bij een eigen database `architect-database`.
   - P3: `architect-modeling` met `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram` en `architect-database`.
   - Elk profiel: `architect-architecture-choice`, `architect-vertical-slices`, `architect-api-contracts`, `architect-conventions`, `architect-implementation-plan`.
5. **Groeisignalen:** (1) bedrijfsregels met toestanden die het platform niet dekt; (2) eigen gegevens met relaties buiten het contentmodel; (3) meer maatwerkcode dan configuratie; (4) koppelingen met transacties. Het profiel wijzigt alleen naar zwaarder (P1 → P2 → P3) en via een uitbreiding: een nieuw profiel-ADR dat het oude vervangt, akkoord van de gebruiker en de documenten van het nieuwe profiel met hun eigen akkoord. Zijn de use cases licht, dan brengt Socrates ze naar de volledige vorm.
6. **Bestaande regels per profiel:** het databaseontwerp (`architect-database`) volledig voor P3, bij P2 alleen bij een eigen database, bij P1 niet; de kern vooraf volledig ontwerpen voor P3; de gebruiker keurt API-contracten goed (bij P1 het templatecontract); Socrates maakt de use cases en Atlas toetst ze, bij P1 in lichte vorm.

## Kwaliteitscriteria
Elk profiel noemt per product verplicht, optioneel of n.v.t.; de groeisignalen zijn toetsbaar; de tabel is gelijk aan de producttabel van het project.

## Afhankelijkheden
Geen. Gebruikt door `requirements-analysis`, `architect-architecture-choice`, `architect-cms-configuratie`, `architect-componentontwerp`, `paginalijst-en-paginabrieven` en de aanroeper.

## Voorbeeld
De site van een bakkerij met 12 contentpagina's in 3 paginatypen, content beheerd door de klant, geen eigen regels: vraag 1 ja, dus P1. Een webshop met eigen kortingsregels en een levenscyclus van bestellingen: vraag 1 nee, vraag 2 ja, dus P3.

## Omvang
Klein houden: alleen de tabel, de vragen en de signalen. De werkwijzen staan in de skills per profiel.
