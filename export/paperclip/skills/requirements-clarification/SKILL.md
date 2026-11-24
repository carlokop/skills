---
name: requirements-clarification
description: Beantwoordt vragen van andere agents over de bedoeling van goedgekeurde eisen, verwerkt wijzigingsverzoeken en meldt goedgekeurde specificaties aan Dr. Evil (de orchestrator), die de systeemarchitect start. Gebruik bij een issue over een requirement, van de systeemarchitect, code reviewer, tester of een developer.
---

# Vragen, wijzigingen en overdracht

## Doel
Vragen over de bedoeling van goedgekeurde eisen beantwoorden uit het goedgekeurde document, de gebruiker vragen bij een lacune, wijzigingsverzoeken verwerken en goedgekeurde specificaties overdragen. De scope verandert nooit stilzwijgend.

## Hoe vragen binnenkomen
Via een issue dat is toegewezen, met een zelfstandig leesbare vraag. Een vermelding (@) wekt de uitvoerder niet en is geen opdracht. Een opdracht zonder issue neem je niet aan.

## A. Een vraag beantwoorden
1. Lees het issue en het goedgekeurde document (`docs/architecture/requirements.md` en, indien aanwezig, `use-cases.md` en `business-rules.md`). Noteer de ID's waar de vraag over gaat (`FR-`, `NFR-`, `UC-`, `BR-`, `AC-`).
2. **Staat het antwoord in het goedgekeurde document:** antwoord met de verwijzing (bijvoorbeeld `FR-007`, `AC-03.2`) en zet het issue op klaar.
3. **Staat het er niet of is het tegenstrijdig:** beantwoord het niet zelf. Leg de vraag voor aan de gebruiker, met opties en gevolgen. Zet het issue in afwachting. Zodra de gebruiker antwoordt, verwerk je dat in het document (zie B) en beantwoord je de vrager.
4. **Is het een technische vraag** (hoe, niet wat): verwijs de vrager via een issue naar de systeemarchitect. Beantwoord het niet zelf.
5. **Fout in de code of lacune in de eisen?** Wijkt de code af van een toetsbaar criterium, dan is het een codefout: verwijs naar de developer. Staat er niets over, dan is het een lacune: ga naar B.

## B. Een wijziging verwerken
1. Leg het wijzigingsverzoek vast: wat wijzigt er, welke ID's raakt het, wat zijn de gevolgen voor scope, bestaande eisen, ontwerp en tests?
2. Zet de gewijzigde eisen (met hun ID's) in een voorstel (`documenten-bijwerken`). Het goedgekeurde document verandert niet tot het voorstel is goedgekeurd.
3. Controleer het met `requirements-validation` en leg de keuzes erin voor aan de gebruiker als kaart met korte vragen (B-23).
4. Pas na zichtbare goedkeuring vervang je de rijen in het document. Meld de wijziging dan aan Dr. Evil via een issue, met de gewijzigde ID's, de nieuwe revisie en de verwijzing naar de goedkeuring. Dr. Evil bepaalt of en wanneer de systeemarchitect de wijziging oppakt.

## C. Overdracht aan Dr. Evil
Pas nadat de gebruiker het document heeft goedgekeurd:
1. Maak een nieuw issue voor Dr. Evil met de skill `overdracht`, met een zelfstandig leesbare beschrijving: pad en versie van het document, status `Goedgekeurd`, de verwijzing naar de zichtbare goedkeuring van de gebruiker, de lijst met ID's, de niet-functionele eisen, wat buiten scope valt en de open vragen die kunnen wachten. Herhaal de inhoud niet, verwijs ernaar.
2. Dr. Evil start daarna de systeemarchitect. Draag zelf niets over aan de systeemarchitect.
3. Noem eventueel skills die de ontvanger nodig heeft, bijvoorbeeld voor modelleren, en voor een threat model bij een gewijzigd aanvalsvlak.
4. Neem geen secrets of persoonsgegevens op.

## Terugkoppeling van de systeemarchitect
Meldt de systeemarchitect dat een eis technisch problematisch is, dan beschouw je dat als een wijzigingsverzoek (B). Pas de scope niet aan zonder goedkeuring van de gebruiker.

## Regels
- Antwoord alleen uit goedgekeurde tekst. Is er geen basis, zeg dat en vraag de gebruiker.
- Verzin geen gedrag en vul geen gaten stilzwijgend op.
- Verander geen goedgekeurde eis zonder nieuwe goedkeuring.
- Wijzig geen code en start geen implementatietaken. Maak alleen issues voor de gebruiker, Dr. Evil of de systeemarchitect (voor technische vragen) en documenten onder `docs/architecture/`.
- Een vraag van de code reviewer over een ontbrekend of onduidelijk acceptatiecriterium behandel je met hoge prioriteit: zijn review wacht erop.
