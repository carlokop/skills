---
name: requirements-clarification
description: Beantwoordt vragen van andere agents over de bedoeling van goedgekeurde eisen, verwerkt wijzigingsverzoeken en draagt goedgekeurde specificaties over aan de aanroeper, die de systeemarchitect start. Gebruik bij een vraag over een requirement, van de systeemarchitect, code reviewer, tester of een developer.
---

# Vragen, wijzigingen en overdracht

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Vragen over de bedoeling van goedgekeurde eisen beantwoorden uit het goedgekeurde document, de gebruiker vragen bij een lacune, wijzigingsverzoeken verwerken en goedgekeurde specificaties overdragen. De scope verandert nooit stilzwijgend.

## Hoe vragen binnenkomen
Via de opdracht van de aanroeper, met een zelfstandig leesbare vraag. De aanroeper geeft ook vragen van andere agents door.

## A. Een vraag beantwoorden
1. Lees de vraag en het goedgekeurde document (`docs/architecture/requirements.md` en, indien aanwezig, `use-cases.md` en `business-rules.md`). Noteer de ID's waar de vraag over gaat (`FR-`, `NFR-`, `UC-`, `BR-`, `AC-`).
2. **Staat het antwoord in het goedgekeurde document:** antwoord met de verwijzing (bijvoorbeeld `FR-007`, `AC-03.2`) in je eindbericht (status "klaar").
3. **Staat het er niet of is het tegenstrijdig:** beantwoord het niet zelf. Zet de vraag als open vraag voor de gebruiker in je eindbericht, met opties en gevolgen, en stop (status "wacht op antwoorden"). Zodra de aanroeper het antwoord van de gebruiker teruggeeft, verwerk je dat in het document (zie B) en beantwoord je de vrager.
4. **Is het een technische vraag** (hoe, niet wat): verwijs de vrager naar de systeemarchitect, met een verzoek aan Atlas in je eindbericht. Beantwoord het niet zelf.
5. **Fout in de code of lacune in de eisen?** Wijkt de code af van een toetsbaar criterium, dan is het een codefout: verwijs naar de developer. Staat er niets over, dan is het een lacune: ga naar B.

## B. Een wijziging verwerken
1. Leg het wijzigingsverzoek vast: wat wijzigt er, welke ID's raakt het, wat zijn de gevolgen voor scope, bestaande eisen, ontwerp en tests?
2. Zet de gewijzigde eisen (met hun ID's) in een voorstel (`documenten-bijwerken`). Het goedgekeurde document verandert niet tot het voorstel is goedgekeurd.
3. Controleer het met `requirements-validation` en leg de keuzes erin voor aan de gebruiker als korte open vragen in je eindbericht (`vragen-en-akkoordrondes`).
4. Pas nadat de aanroeper het akkoord van de gebruiker meldt, vervang je de rijen in het document. Meld de wijziging dan in je eindbericht, met de gewijzigde ID's, de nieuwe versie en de datum van het akkoord. De aanroeper bepaalt of en wanneer de systeemarchitect de wijziging oppakt.

## C. Overdracht aan de aanroeper
Pas nadat de gebruiker het document heeft goedgekeurd:
1. Schrijf in je eindbericht een overdracht met de skill `overdracht`, zelfstandig leesbaar: pad en versie van het document, status `Goedgekeurd`, de datum van het akkoord van de gebruiker, de lijst met ID's, de niet-functionele eisen, wat buiten scope valt en de open vragen die kunnen wachten. Herhaal de inhoud niet, verwijs ernaar.
2. De aanroeper start daarna de systeemarchitect. Draag zelf niets over aan de systeemarchitect.
3. Noem eventueel skills die de ontvanger nodig heeft, bijvoorbeeld voor modelleren, en voor een threat model bij een gewijzigd aanvalsvlak.
4. Neem geen secrets of persoonsgegevens op.

## Terugkoppeling van de systeemarchitect
Meldt de systeemarchitect dat een eis technisch problematisch is, dan beschouw je dat als een wijzigingsverzoek (B). Pas de scope niet aan zonder goedkeuring van de gebruiker.

## Regels
- Antwoord alleen uit goedgekeurde tekst. Is er geen basis, zeg dat en vraag de gebruiker.
- Verzin geen gedrag en vul geen gaten stilzwijgend op.
- Verander geen goedgekeurde eis zonder nieuwe goedkeuring.
- Wijzig geen code en start geen implementatietaken. Je schrijft alleen documenten onder `docs/architecture/`; vragen aan de gebruiker en verzoeken aan de systeemarchitect (voor technische vragen) zet je in je eindbericht.
- Een vraag van de code reviewer over een ontbrekend of onduidelijk acceptatiecriterium behandel je met hoge prioriteit: zijn review wacht erop.
