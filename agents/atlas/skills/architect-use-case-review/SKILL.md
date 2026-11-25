---
name: architect-use-case-review
description: Toetst use cases en paginabrieven van Socrates vóór het akkoord van de gebruiker. Atlas wijzigt niets, hij geeft opmerkingen in zijn eindbericht. Gebruik wanneer de aanroeper Atlas namens Socrates om een toets vraagt.
---

# Use cases en paginabrieven toetsen

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

Werkwijze van de sessie, beslisregels, contextverslag en telling: zie `vragen-en-akkoordrondes`.

## Doel
Use cases en paginabrieven toetsen vóór het akkoord van de gebruiker. Bevatten de use cases genoeg om op te ontwerpen? Bevat elke brief genoeg voor een bouwcontract, en klopt "bestaand patroon" met de componenten? Atlas wijzigt de use cases en brieven niet. De toets is een grill-sessie die je als subagent voorbereidt: in elke ronde zet je alle vragen die nu te beantwoorden zijn genummerd in je eindbericht, elk met een aanbevolen antwoord.

## Trigger
Use cases en `pages.md` met status `Concept`, in een **opdracht** die de aanroeper je namens Socrates geeft. Bij het eerste ontwerp van een nieuw project staan ook de requirements nog op `Concept`. Elke toetsronde is een nieuwe opdracht; binnen een toetsronde hervat de aanroeper je met de antwoorden van Socrates.

## Input
use-cases.md, de paginalijst met brieven, de requirements en bedrijfsregels (eerste ontwerp van een nieuw project: nog niet goedgekeurd; uitbreiding: goedgekeurd); bij een uitbreiding ook het technisch ontwerp en de patroonbibliotheek. Bestaat er al een lopend verslag van deze sessie in `contextverslag.md`, dan lees je dat eerst.

## Output
Een toetsresultaat in je eindbericht: "geen opmerkingen", of genummerde opmerkingen, elk met je advies: per use case een opmerking over hoofdpad, uitzonderingen of benodigde gegevens, en per brief een opmerking over gegevens, acties, toestanden of ontwerpniveau. Is er iets besproken, dan houd je één lopend verslag van de sessie bij in `contextverslag.md` (`vragen-en-akkoordrondes`, werkwijze 6) en werk je het na elke ronde bij; aan het eind bevestigt Socrates het en is daarmee de controleur. Heb je na het lezen geen opmerkingen en geen open punten, dan is er geen sessie en geen verslag.

## Werkwijze
1. Lees de requirements, use cases en de paginalijst met brieven.
2. Loop elke use case na: hoofdpad volledig, uitzonderingen benoemd, benodigde gegevens genoemd? Je ziet ook de voorgestelde vorm (licht of volledig); de gebruiker beslist daarover bij het akkoord op het analysepakket.
3. Loop elke brief na: gegevens, acties en toestanden voor een bouwcontract aanwezig? Klopt het ontwerpniveau: kan een pagina met "brief" echt met de bestaande componenten, of geldt een van de vier regels voor "ontwerp"?
4. Schrijf opmerkingen als vraag of tekortkoming, met UC-ID of paginanaam. Schrijf geen oplossing in de use case of brief. Gaat het om een eis, dan is het een vraag aan Socrates.
5. Zet het resultaat in je eindbericht en werk het lopende verslag bij; verder wijzig je niets. De aanroeper geeft je opmerkingen aan Socrates en hervat je met zijn antwoorden. Beoordeel per punt of het beslist is en werk het verslag bij; zijn er nog open punten, dan volgt een volgende ronde in dezelfde opdracht. Bij opmerkingen past Socrates de use cases, brieven of paginalijst aan en vraagt hij een nieuwe toets; dat is een nieuwe opdracht. Na twee toetsrondes zonder overeenstemming beslist de gebruiker: zet het verschil dan als open vraag in je eindbericht. Zonder opmerkingen markeert Socrates bij het eerste ontwerp van een nieuw project de kern en legt hij het pakket met korte vragen aan de gebruiker voor.
6. Keurt de gebruiker het pakket af, dan toets je de herziene versie opnieuw, in een nieuwe opdracht.

## Kwaliteitscriteria
- Elke opmerking noemt een UC- of AC-ID of een pagina.
- Geen ontwerpkeuzes in de opmerkingen; geen wijzigingen in use cases of brieven.
- Elke ronde bevat alle vragen die nu te beantwoorden zijn, elk met een aanbevolen antwoord.
- Is er iets besproken, dan is het lopende verslag na elke ronde bijgewerkt en eindigt de toets met een bevestigd contextverslag.

## Tools en templates
Checklist: hoofdpad, uitzonderingen, gegevens (use cases); gegevens, acties, toestanden, ontwerpniveau (brieven).

## Let op
De toets is geen goedkeuring: Atlas geeft alleen opmerkingen en wijzigt niets behalve het lopende verslag, en de gebruiker beantwoordt de vragen per keuze.

## Afhankelijkheden
`uml-use-cases` en `paginalijst-en-paginabrieven` (bij Socrates), `vragen-en-akkoordrondes`.

## Voorbeeld
"UC-03 *Check out order*: er staat niet wat er gebeurt als de betaling mislukt. Zonder die uitzondering kan ik het sequentiediagram niet maken." En: "Brief *Productoverzicht*: ontwerpniveau 'brief', maar de filter op prijs staat niet in de patroonbibliotheek. Dan geldt regel 2 (nieuwe component) en is het ontwerpniveau 'ontwerp'."
