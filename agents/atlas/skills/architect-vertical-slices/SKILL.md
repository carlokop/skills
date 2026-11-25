---
name: architect-vertical-slices
description: Deelt een goedgekeurd technisch ontwerp (nieuwe klant) of een gekozen uitbreiding op in vertical slices, met technische volgorde en afhankelijkheden. Legt de indeling voor als open vragen voor het akkoord op het sliceplan. Gebruik wanneer de aanroeper vraagt om de opdeling in slices (na het akkoord op het technisch ontwerp, of bij een uitbreiding om te bepalen wat nu gebouwd wordt).
---

# Opdelen in vertical slices

## Doel
Een goedgekeurd technisch ontwerp (nieuw project) of een gekozen uitbreiding opdelen in vertical slices. Elke slice werkt van begin tot eind. Jij bepaalt de technische volgorde. Het resultaat is het (voorlopige) sliceplan, een document met een eigen akkoord van de gebruiker; geen taken of issues.

## Trigger
Een opdracht van de aanroeper: de opdeling in slices na het akkoord op het technisch ontwerp van het profiel, of bij een uitbreiding de vraag wat nu gebouwd wordt.

## Input
- Nieuw project: het technisch ontwerp, de eisen, de paginalijst (de "nu"-pagina's) en de visie.
- Uitbreiding: de uitbreiding, de eisen, de goedgekeurde paginabrieven en ontwerpen, de visie en het technisch ontwerp. Lees ook de slices die er al zijn.

## Output
Een slice-indeling als bestand op de documentlocatie van het project; vermeld het pad in je eindbericht. Per slice: de pagina's, de UC- en AC-ID's, de technische volgorde, de afhankelijkheden en wat de slice aantoonbaar laat werken. De inhoud van slice 1 en de volgorde van de slices zijn onderdeel van het akkoord op het sliceplan, niet van het bouwcontract.

## Werkwijze
1. Lees de use cases, de AC's, de paginalijst of de brieven, de visie en het ontwerp.
2. Zoek het kleinste stuk dat van begin tot eind werkt. Dat wordt slice 1. Bij een nieuw project kies je het uit de "nu"-pagina's.
3. Verdeel de overige AC's over slices. Elke AC komt in precies één slice. Noem per slice de pagina's.
4. Bepaal per slice de technische volgorde en de afhankelijkheden.
5. Toets de indeling aan de kwaliteitscriteria hieronder.
6. Bij een uitbreiding beslis je daarna of de uitbreiding het globale ontwerp raakt of een zwaarder profiel vraagt; zo ja, dan werk je eerst het globale ontwerp bij en gaan die documenten samen met het sliceplan naar de akkoorden. Klaar als je die beslissing in je eindbericht noemt.
7. Leg het sliceplan voor (`vragen-en-akkoordrondes`): het pad in je eindbericht en open vragen over de keuzes die je zelf invulde, met in elk geval de inhoud van slice 1 en de volgorde van de slices. Een akkoord op alle vragen is het akkoord op het sliceplan. Keurt de gebruiker af, dan herzie je de indeling en leg je hem opnieuw voor. Klaar als de vragen in je eindbericht staan en de status "wacht op antwoorden" is.
8. Wijzigt de indeling later (bijvoorbeeld bij een wens of een slice die het globale ontwerp raakt), dan gaat het bijgewerkte sliceplan opnieuw langs dit akkoord. Na het akkoord volgen per slice het ontwerp per slice waar nodig (`architect-implementation-plan`) en het bouwcontract (`architect-api-contracts`). Klaar als het bijgewerkte sliceplan met zijn vragen is ingediend, of als je in je eindbericht noemt dat de indeling niet verandert.

## Grill-moment
Geen vaste sessie; het akkoord loopt via de open vragen van stap 7. Komt er een vraag op die je niet zelf kunt beslissen, dan bereid je die voor als grill-sessie (`vragen-en-akkoordrondes`): genummerd, elk met een aanbevolen antwoord, in je eindbericht.

## Kwaliteitscriteria
- Elke AC van de kern of de uitbreiding zit in precies één slice.
- Slice 1 is van begin tot eind te testen.
- Geen slice hangt af van een latere slice.
- De volgorde van de wensen van de gebruiker blijft staan.
- De volgorde van de slices past bij de prioriteit van de gebruiker (criterium voor het akkoord op het sliceplan).

## Sjabloon
Tabel: slice × pagina × UC/AC × afhankelijkheid.

## Afhankelijkheden
Het goedgekeurde technisch ontwerp van het profiel (bij P3 `architect-modeling`); `vragen-en-akkoordrondes` (het akkoord op het sliceplan); daarna `architect-api-contracts` en `architect-implementation-plan` (werkpakketten per slice).

## Voorbeeld
Webshop met de "nu"-pagina's *Productoverzicht*, *Productdetail* en *Winkelwagen*. Slice 1: *Productoverzicht* en *Winkelwagen* met het hoofdpad van UC-01 en UC-02, één betaalmethode, geen kortingen. Slice 2: de alternatieve paden en kortingen (AC-03.4); hangt af van slice 1.

## Restrisico
De aanroeper laat je werk vóór het akkoord controleren door atlas-licht; daarbuiten heeft de opdeling van latere slices geen onafhankelijke controleur. Een toets op de taken controleert de taken, niet de opdeling.
