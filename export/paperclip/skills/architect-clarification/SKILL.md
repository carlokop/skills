---
name: architect-clarification
description: Beantwoordt vragen over de bedoeling van het goedgekeurde ontwerp en stelt een wijzigingsverzoek op als het ontwerp moet veranderen. Gebruik wanneer een vraag-issue aan Atlas is toegewezen (PRC-04, ACT-04.3, ACT-04.4).
---

# Vragen over het ontwerp beantwoorden

Besluit: B-08/PRP-022. GOV-12 (akkoord wijzigingsverzoek of productkeuze) heeft voor Atlas de bron B-08, PRP-022. Bron: `skill-specificaties` op WEB-19.

## Doel
De tegenhanger van `requirements-clarification` voor het ontwerp. Je beantwoordt vragen over de bedoeling van het goedgekeurde ontwerp (TL-08: vragen van Dr. Evil; TL-07: implementatievragen van Neo en Trace; TL-09: ontwerpafwijkingen die Sentinel in een review ziet). Moet het ontwerp veranderen, dan stel je een wijzigingsverzoek op (ACT-04.4, GOV-12).

## Trigger
Een vraag-issue aan Atlas (PRC-04), ook van Neo, Trace of Sentinel. Ook een vraag van Socrates over een technische term in GLOSSARY.md (PRP-026).

## Input
Het vraag-issue, het goedgekeurde technisch ontwerp van het profiel en het bouwcontract, de ADR's en STATUS.md.

## Output
Een antwoord met een verwijzing naar het model, de ADR of het ID. Of een wijzigingsverzoek: wat verandert er, welke modellen en ID's raakt het, welke breaking changes, wat zijn de gevolgen voor de scope.

## Werkwijze
1. Lees de vraag en zoek het antwoord in de goedgekeurde documenten.
2. Staat het er, antwoord dan met een verwijzing.
3. Gaat de vraag over een eis of paginabrief, stuur hem dan door naar Socrates (PRC-04). Gaat hij over het ontwerp van een pagina of patroon, dan hoort hij bij de ontwerper: nu Carlo, rechtstreeks (PRP-030, PRP-031, PRP-032, ASM-28). Beantwoord hem niet zelf.
3b. Vraagt het besluit een ADR (bijvoorbeeld een vraag van Neo met een blijvend gevolg), leg het dan vast met `documentation-and-adrs`.
4. Moet het ontwerp veranderen, stel dan een wijzigingsverzoek op. Controleer eerst op breaking changes (`api-and-interface-design`, `deprecation-and-migration`) en leg het voor (GOV-12).

## Kwaliteitscriteria
- Elk antwoord verwijst naar een document of ID.
- Geen stille wijziging van een goedgekeurd model.
- Vragen over eisen en brieven gaan naar Socrates.
- Na 2 rondes vervolgvragen escaleert de vrager (PRP-005, `vragen-en-akkoordrondes`).

## Tools en templates
Het sjabloon voor een wijzigingsverzoek, gelijk aan sectie B van `requirements-clarification`.

## Afhankelijkheden
`vragen-en-akkoordrondes` (routering, rondes), `planning-and-task-breakdown`, `api-and-interface-design`, `documentation-and-adrs`, het technisch ontwerp van het profiel.

## Voorbeeld
Dr. Evil vraagt: "Kan taak 3 vóór taak 2?" Antwoord: "Nee. Taak 3 gebruikt de tabel `orders` uit werkpakket WP-2 (implementatieplan slice 1, §7)."
