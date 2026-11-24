---
name: architect-clarification
description: Beantwoordt vragen over de bedoeling van het goedgekeurde ontwerp en stelt een wijzigingsverzoek op als het ontwerp moet veranderen. Gebruik wanneer de aanroeper Atlas een vraag over het ontwerp voorlegt.
---

# Vragen over het ontwerp beantwoorden

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
De tegenhanger van `requirements-clarification` voor het ontwerp. Je beantwoordt vragen over de bedoeling van het goedgekeurde ontwerp (vragen van de aanroeper; implementatievragen van de developer en de tester; ontwerpafwijkingen die een reviewer in een review ziet). Moet het ontwerp veranderen, dan stel je een wijzigingsverzoek op; de gebruiker keurt het goed.

## Trigger
Een vraag aan Atlas via de aanroeper, ook van de developer, de tester of een reviewer. Ook een vraag van Socrates over een technische term in GLOSSARY.md.

## Input
De vraag, het goedgekeurde technisch ontwerp van het profiel en het bouwcontract, de ADR's en STATUS.md.

## Output
Een antwoord met een verwijzing naar het model, de ADR of het ID. Of een wijzigingsverzoek: wat verandert er, welke modellen en ID's raakt het, welke breaking changes, wat zijn de gevolgen voor de scope.

## Werkwijze
1. Lees de vraag en zoek het antwoord in de goedgekeurde documenten.
2. Staat het er, antwoord dan met een verwijzing.
3. Gaat de vraag over een eis of paginabrief, stuur hem dan door naar Socrates: een verzoek aan Socrates in je eindbericht. Gaat hij over het ontwerp van een pagina of patroon, dan hoort hij bij de ontwerper: nu de gebruiker, als open vraag in je eindbericht. Beantwoord hem niet zelf.
3b. Vraagt het besluit een ADR (bijvoorbeeld een vraag van de developer met een blijvend gevolg), leg het dan vast met `documentation-and-adrs`.
4. Moet het ontwerp veranderen, stel dan een wijzigingsverzoek op. Controleer eerst op breaking changes (`api-and-interface-design`, `deprecation-and-migration`) en leg het voor als open vragen in je eindbericht; de gebruiker keurt het goed.

## Kwaliteitscriteria
- Elk antwoord verwijst naar een document of ID.
- Geen stille wijziging van een goedgekeurd model.
- Vragen over eisen en brieven gaan naar Socrates.
- Na 2 rondes vervolgvragen beslist de gebruiker (`vragen-en-akkoordrondes`).

## Tools en templates
Het sjabloon voor een wijzigingsverzoek, gelijk aan sectie B van `requirements-clarification`.

## Afhankelijkheden
`vragen-en-akkoordrondes` (routering, rondes), `planning-and-task-breakdown`, `api-and-interface-design`, `documentation-and-adrs`, het technisch ontwerp van het profiel.

## Voorbeeld
De aanroeper vraagt: "Kan taak 3 vóór taak 2?" Antwoord: "Nee. Taak 3 gebruikt de tabel `orders` uit werkpakket WP-2 (implementatieplan slice 1, §7)."
