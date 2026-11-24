---
name: architect-vertical-slices
description: Deelt een goedgekeurd technisch ontwerp (nieuwe klant) of een gekozen uitbreiding op in vertical slices, met technische volgorde en afhankelijkheden. Gebruik wanneer de aanroeper vraagt om de opdeling in slices (na het akkoord op het technisch ontwerp, of bij een uitbreiding om te bepalen wat nu gebouwd wordt).
---

# Opdelen in vertical slices

## Doel
Een goedgekeurd technisch ontwerp (nieuw project) of een gekozen uitbreiding opdelen in vertical slices. Elke slice werkt van begin tot eind. Jij bepaalt de technische volgorde. Het resultaat is een document, geen taken of issues.

## Trigger
Een opdracht van de aanroeper: de opdeling in slices na het akkoord op het technisch ontwerp van het profiel, of bij een uitbreiding de vraag wat nu gebouwd wordt.

## Input
- Nieuw project: het technisch ontwerp, de eisen, de paginalijst (de "nu"-pagina's) en de visie.
- Uitbreiding: de uitbreiding, de eisen, de goedgekeurde paginabrieven en ontwerpen, de visie en het technisch ontwerp. Lees ook de slices die er al zijn.

## Output
Een slice-indeling als bestand op de documentlocatie van het project; vermeld het pad in je eindbericht. Per slice: de pagina's, de UC- en AC-ID's, de technische volgorde, de afhankelijkheden en wat de slice aantoonbaar laat werken. Bij een nieuw project zijn de inhoud van slice 1 en de volgorde van de epics onderdeel van het akkoord op het bouwcontract per slice.

## Werkwijze
1. Lees de use cases, de AC's, de paginalijst of de brieven, de visie en het ontwerp.
2. Zoek het kleinste stuk dat van begin tot eind werkt. Dat wordt slice 1. Bij een nieuw project kies je het uit de "nu"-pagina's.
3. Verdeel de overige AC's over slices. Elke AC komt in precies één slice. Noem per slice de pagina's.
4. Bepaal per slice de technische volgorde en de afhankelijkheden.
5. Toets de indeling aan de kwaliteitscriteria hieronder.
6. Vermeld het pad van de indeling in je eindbericht. Bij een uitbreiding beslis je daarna of de uitbreiding het globale ontwerp raakt of een zwaarder profiel vraagt. Daarna volgen het ontwerp per slice (uitbreiding) en het bouwcontract (`architect-api-contracts`). Bij een nieuw project gaat de inhoud van slice 1 mee naar het akkoord op het bouwcontract; keurt de gebruiker die af, dan herzie je de indeling en leg je hem opnieuw voor.

## Grill-moment
Geen. Komt er toch een vraag op, dan bereid je die voor als grill-sessie (`vragen-en-akkoordrondes`): genummerd, elk met een aanbevolen antwoord, in je eindbericht.

## Kwaliteitscriteria
- Elke AC van de kern of de uitbreiding zit in precies één slice.
- Slice 1 is van begin tot eind te testen.
- Geen slice hangt af van een latere slice.
- De volgorde van de wensen van de gebruiker blijft staan.
- Bij een nieuw project past de volgorde van de epics bij zijn prioriteit (criterium voor het akkoord op het bouwcontract).

## Sjabloon
Tabel: slice × pagina × UC/AC × afhankelijkheid.

## Afhankelijkheden
Het goedgekeurde technisch ontwerp van het profiel (bij P3 `architect-modeling`); daarna `architect-api-contracts` en `architect-implementation-plan` (werkpakketten per slice).

## Voorbeeld
Webshop met de "nu"-pagina's *Productoverzicht*, *Productdetail* en *Winkelwagen*. Slice 1: *Productoverzicht* en *Winkelwagen* met het hoofdpad van UC-01 en UC-02, één betaalmethode, geen kortingen. Slice 2: de alternatieve paden en kortingen (AC-03.4); hangt af van slice 1.

## Restrisico
De aanroeper laat je werk vóór het akkoord controleren door atlas-licht; daarbuiten heeft de opdeling van latere slices geen onafhankelijke controleur. Een toets op de taken controleert de taken, niet de opdeling.
