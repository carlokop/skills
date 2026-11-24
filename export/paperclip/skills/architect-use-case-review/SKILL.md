---
name: architect-use-case-review
description: Toetst use cases en paginabrieven van Socrates als grill-sessie via een toets-issue, vóór het akkoord van Carlo. Atlas wijzigt niets, hij geeft opmerkingen. Gebruik wanneer een toets-issue van Socrates aan Atlas is toegewezen (ACT-01.23, ACT-02.13).
---

# Use cases en paginabrieven toetsen

Besluit: B-08/PRP-021 (op basis van B-06), PRP-031, PRP-041, B-15, B-16, ASM-41, ASM-42, ASM-45, ASM-58. Bron: `skill-specificaties` op WEB-19.

grill_sessie: GS3 (PRC-01), GS11 (PRC-02). Werkwijze van de sessie, beslisregels, contextverslag en telling: zie `vragen-en-akkoordrondes`.

## Doel
Use cases en paginabrieven toetsen vóór het akkoord van Carlo. Bevatten de use cases genoeg om op te ontwerpen? Bevat elke brief genoeg voor een bouwcontract, en klopt "bestaand patroon" met de componenten? Atlas wijzigt de use cases en brieven niet. De toets is een grill-sessie: in elke ronde stel je alle vragen die nu te beantwoorden zijn, elk met een aanbevolen antwoord.

## Trigger
Use cases en `pages.md` met status `Concept`, in een **toets-issue** dat Socrates aan Atlas toewijst, zoals een vraag (PRC-04). Het issue van Socrates staat zolang `blocked`. In PRC-01 staan ook de requirements nog op `Concept`. Per toetsronde komt er een nieuw toets-issue (ASM-45).

## Input
use-cases.md, de paginalijst met brieven, de requirements en bedrijfsregels (PRC-01: nog niet goedgekeurd; PRC-02: goedgekeurd); bij een uitbreiding ook het technisch ontwerp en de patroonbibliotheek.

## Output
Een toetsresultaat: "geen opmerkingen", of per use case een opmerking over hoofdpad, uitzonderingen of benodigde gegevens, en per brief een opmerking over gegevens, acties, toestanden of ontwerpniveau. Is er iets besproken, dan komt er een bevestigd contextverslag op het toets-issue; Socrates bevestigt het en is daarmee de controleur (ASM-42, ASM-58). Heb je na het lezen geen opmerkingen en geen open punten, dan is er geen sessie en geen verslag (ASM-41).

## Werkwijze
1. Lees de requirements, use cases en de paginalijst met brieven.
2. Loop elke use case na: hoofdpad volledig, uitzonderingen benoemd, benodigde gegevens genoemd? Je ziet ook de voorgestelde vorm (licht of volledig, PRP-038); Carlo beslist daarover in GOV-10.
3. Loop elke brief na: gegevens, acties en toestanden voor een bouwcontract aanwezig? Klopt het ontwerpniveau: kan een pagina met "brief" echt met de bestaande componenten, of geldt een van de vier regels voor "ontwerp" (PRP-031)?
4. Schrijf opmerkingen als vraag of tekortkoming, met UC-ID of paginanaam. Schrijf geen oplossing in de use case of brief. Gaat het om een eis, dan is het een vraag aan Socrates via PRC-04.
5. Zet het resultaat als comment op het toets-issue en zet dat issue op `done`. Rondes binnen één toetsronde lopen op hetzelfde issue. Bij opmerkingen gaat het terug naar Socrates: use cases naar ACT-01.9 / ACT-02.12, brieven of paginalijst naar ACT-01.27 / ACT-02.15. Maximaal 2 toetsrondes, daarna escalatie (ACT-05.3, GOV-08). Binnen een toetsronde telt alleen een ronde zonder voortgang; na 2 rondes achter elkaar zonder voortgang escaleer je via Dr. Evil (ACT-04.52). Zonder opmerkingen volgt in PRC-01 de kern (ACT-01.54) en GOV-10, in PRC-02 GOV-02; Socrates legt het pakket dan aan Carlo voor met een kaart.
6. Keurt Carlo bij GOV-10 of GOV-02 af, dan toets je de herziene versie opnieuw.

## Kwaliteitscriteria
- Elke opmerking noemt een UC- of AC-ID of een pagina.
- Geen ontwerpkeuzes in de opmerkingen; geen wijzigingen in use cases of brieven.
- Elke ronde bevat alle vragen die nu te beantwoorden zijn, elk met een aanbevolen antwoord.
- Is er iets besproken, dan eindigt de toets met een bevestigd contextverslag.

## Tools en templates
Checklist: hoofdpad, uitzonderingen, gegevens (use cases); gegevens, acties, toestanden, ontwerpniveau (brieven). `paperclip` voor toets-issue en blokkade.

## Let op
Het toets-issue gaat bewust in tegen de regel *Cross-Agent Review Gates* in de skill `paperclip`: Atlas geeft alleen opmerkingen en Carlo beantwoordt de vragen per keuze op de kaart (PRP-040, PRP-041).

## Afhankelijkheden
`uml-use-cases` en `paginalijst-en-paginabrieven` (bij Socrates), `vragen-en-akkoordrondes`.

## Voorbeeld
"UC-03 *Check out order*: er staat niet wat er gebeurt als de betaling mislukt. Zonder die uitzondering kan ik het sequentiediagram niet maken." En: "Brief *Productoverzicht*: ontwerpniveau 'brief', maar de filter op prijs staat niet in de patroonbibliotheek. Dan geldt regel 2 (nieuwe component) en is het ontwerpniveau 'ontwerp'."
