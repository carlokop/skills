---
name: architect-vertical-slices
description: Deelt een goedgekeurd technisch ontwerp (nieuwe klant) of een gekozen uitbreiding op in vertical slices, met technische volgorde en afhankelijkheden. Gebruik wanneer Dr. Evil vraagt om de opdeling in slices (na het akkoord op het technisch ontwerp, of bij een uitbreiding om te bepalen wat nu gebouwd wordt).
---

# Opdelen in vertical slices

Besluit: B-08, PRP-019. Bron: `skill-specificaties` op WEB-19.

## Doel
Een goedgekeurd technisch ontwerp (UC1) of een gekozen uitbreiding (UC2) opdelen in vertical slices. Elke slice werkt van begin tot eind. Jij bepaalt de technische volgorde (TL-01, TL-02). Het resultaat is een document, geen issues: de taken maakt Dr. Evil uit werkpakketten (TL-V3).

## Trigger
Een opdracht-issue van Dr. Evil: ACT-01.15 (opdeling in slices vragen) na het akkoord op het technisch ontwerp volgens profiel (GOV-11), of ACT-02.4 (wat wordt nu gebouwd) bij een uitbreiding.

## Input
- UC1: het technisch ontwerp, de eisen, de paginalijst (de "nu"-pagina's) en de visie.
- UC2: de uitbreiding, de eisen, de goedgekeurde paginabrieven en ontwerpen, de visie en het technisch ontwerp. Lees ook de slices die er al zijn.

## Output
Een slice-indeling als document op het issue. Per slice: de pagina's, de UC- en AC-ID's, de technische volgorde, de afhankelijkheden en wat de slice aantoonbaar laat werken. In UC1 zijn de inhoud van slice 1 en de volgorde van de epics onderdeel van het akkoord GOV-06 (akkoord bouwcontract per slice).

## Werkwijze
1. Lees de use cases, de AC's, de paginalijst of de brieven, de visie en het ontwerp.
2. Zoek het kleinste stuk dat van begin tot eind werkt. Dat wordt slice 1 (B-01). In UC1 kies je het uit de "nu"-pagina's.
3. Verdeel de overige AC's over slices. Elke AC komt in precies één slice. Noem per slice de pagina's.
4. Bepaal per slice de technische volgorde en de afhankelijkheden.
5. Toets de indeling aan de kwaliteitscriteria hieronder.
6. Leg de indeling op het issue en meld het aan Dr. Evil. Bij UC2 beslis je daarna of de uitbreiding het globale ontwerp raakt of een zwaarder profiel vraagt (G-02.3). Daarna volgen het ontwerp per slice (UC2) en het bouwcontract (`architect-api-contracts`). In UC1 gaat de inhoud van slice 1 mee naar GOV-06; keurt de gebruiker die af, dan gaat de indeling terug naar ACT-01.16 (PRC-05).

## Grill-moment
Geen (GS7 en GS13 zijn vervallen, B-16). Komt er toch een vraag op, dan gaat die via PRC-04 als grill-sessie (`vragen-en-akkoordrondes`).

## Kwaliteitscriteria
- Elke AC van de kern of de uitbreiding zit in precies één slice.
- Slice 1 is van begin tot eind te testen.
- Geen slice hangt af van een latere slice.
- De volgorde van de wensen van Carlo blijft staan (TL-V2).
- In UC1 past de volgorde van de epics bij zijn prioriteit (criterium GOV-06).

## Sjabloon
Tabel: slice × pagina × UC/AC × afhankelijkheid. Gebruik `paperclip` voor het document.

## Afhankelijkheden
Het goedgekeurde technisch ontwerp van het profiel (bij P3 `architect-modeling`); daarna `architect-api-contracts` en `architect-implementation-plan` (werkpakketten per slice).

## Voorbeeld
Webshop met de "nu"-pagina's *Productoverzicht*, *Productdetail* en *Winkelwagen*. Slice 1: *Productoverzicht* en *Winkelwagen* met het hoofdpad van UC-01 en UC-02, één betaalmethode, geen kortingen. Slice 2: de alternatieve paden en kortingen (AC-03.4); hangt af van slice 1.

## Restrisico
De opdeling van latere slices heeft geen onafhankelijke controleur (FND-022). PRP-027 controleert de taken, niet de opdeling.
