---
name: architectuurprofielen
description: Gedeelde referentie met de drie architectuurprofielen (P1 CMS, P2 component-app, P3 maatwerk): keuzevragen, producten per profiel, skills per profiel en groeisignalen. Gebruik bij het projecttype in de visie, de architectuurkeuze, de groeitoets bij een uitbreiding en de poort op verplichte documenten.
---

# Architectuurprofielen

Besluit: PRP-034, PRP-035, PRP-036, PRP-038. CAP-05. Dit is een **referentie**, geen stappenplan. Andere skills verwijzen ernaar en herhalen de tabel niet. Het register (sectie `profielen`) is de bron van waarheid; wijkt deze tekst af, dan wint het register. Bron: `skill-specificaties` op WEB-19.

## Doel
Eén plek voor de drie profielen: P1 configuratie/CMS, P2 component-app, P3 maatwerk met domeinmodel. Met keuzecriteria, producten per profiel (verplicht, optioneel of n.v.t.), skills per profiel en groeisignalen.

## Wie gebruikt hem wanneer
- Socrates: projecttype in de visie (ACT-01.26).
- Atlas: profielkeuze bij de architectuurkeuze (ACT-01.11) en groeitoets bij elke uitbreiding (G-02.3, ACT-02.6).
- Dr. Evil: alleen als naslag via `quality-gates`, om te bepalen welke documenten verplicht zijn; GOV-11 toetst tegen de producttabel.

## Input en output
Input: het projecttype, de requirements en de paginalijst. Output: een profielkeuze met redenen (voor het profiel-ADR) en een lijst met de verplichte producten van het profiel, voor de poort.

## Inhoud
1. **De keuze in twee vragen.** Haalt een standaardplatform de eisen met configuratie, thema en plugins? Ja → P1. Zo niet: is er bedrijfslogica met eigen regels en toestanden? Ja → P3, nee → P2. Een CMS dat je in code configureert met een frontend van componenten (bijvoorbeeld Payload) is P2. De keuze gaat op criteria, niet op technologie.
2. **Signalen voor het projecttype:** soort en aantal pagina's, bedrijfslogica, eigen data, integraties, wie de content beheert, verwachte groei.
3. **Producten per profiel:** de tabel uit het register (`profielen`), ook in PRC-01. Bij P1 en P2 is er één technisch document in GOV-11, bij P3 vier.
4. **Skills per profiel:**
   - P1: `architect-cms-configuratie` (het contentmodel; het templatecontract per slice maakt `architect-api-contracts`, PRP-043).
   - P2: `architect-componentontwerp`, met `uml-sequence-diagrams` en bij een eigen database `architect-database`.
   - P3: `architect-modeling` met `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram` en `architect-database`.
   - Elk profiel: `architect-architecture-choice`, `architect-vertical-slices`, `architect-api-contracts`, `architect-conventions`, `architect-implementation-plan`.
5. **Groeisignalen:** (1) bedrijfsregels met toestanden die het platform niet dekt; (2) eigen gegevens met relaties buiten het contentmodel; (3) meer maatwerkcode dan configuratie; (4) koppelingen met transacties. Het profiel wijzigt alleen naar zwaarder (P1 → P2 → P3) en via UC2: een nieuw profiel-ADR dat het oude vervangt (ACT-02.55), akkoord van Carlo (GOV-09) en de documenten van het nieuwe profiel met hun eigen akkoord. Zijn de use cases licht, dan brengt Socrates ze naar de volledige vorm.
6. **Bestaande besluiten per profiel:** B-07 volledig voor P3, bij P2 alleen bij een eigen database, bij P1 niet; TL-V5 (kern vooraf volledig ontwerpen) voor P3; TL-V4 (Carlo keurt API-contracten goed) blijft (bij P1 het templatecontract); B-06 blijft, bij P1 in lichte vorm (PRP-038).

## Kwaliteitscriteria
Elk profiel noemt per product verplicht, optioneel of n.v.t.; de groeisignalen zijn toetsbaar; de tabel is gelijk aan het register.

## Afhankelijkheden
Geen. Gebruikt door `requirements-analysis`, `architect-architecture-choice`, `architect-cms-configuratie`, `architect-componentontwerp`, `paginalijst-en-paginabrieven` en `quality-gates`.

## Voorbeeld
De site van een bakkerij met 12 contentpagina's in 3 paginatypen, content beheerd door de klant, geen eigen regels: vraag 1 ja, dus P1. Een webshop met eigen kortingsregels en een levenscyclus van bestellingen: vraag 1 nee, vraag 2 ja, dus P3.

## Omvang
Klein houden: alleen de tabel, de vragen en de signalen. De werkwijzen staan in de skills per profiel.
