---
name: requirements-validation
description: Controleert een requirements-specificatie op volledigheid, consistentie, toetsbaarheid, traceerbaarheid en gereedheid voor de systeemarchitect, vóór indiening ter beoordeling.
---

# Requirements-validatie

## Doel
Een kwaliteitscontrole uitvoeren op een specificatie voordat die ter beoordeling gaat. Het controleert eigen werk of dat van een eerdere versie en is dus geen onafhankelijke goedkeuring.

## ID's
Eisen: `FR-` (functioneel) en `NFR-` (niet-functioneel). Use cases: `UC-`. Bedrijfsregels: `BR-`. Acceptatiecriteria: `AC-`.

## Controlelijst
1. **Volledigheid:** dekken de eisen de belangrijkste actoren, stromen, rechten, foutgevallen en randgevallen?
2. **Duidelijkheid:** kunnen twee redelijke lezers een eis verschillend uitleggen? Zijn vage woorden vervangen door getallen of voorbeelden?
3. **Toetsbaarheid:** is elke eis te controleren met waarneembaar bewijs?
4. **Consistentie:** botsen eisen met elkaar, met `GLOSSARY.md` of met goedgekeurd bestaand gedrag?
5. **Traceerbaarheid:** heeft elke Must- en Should-eis minstens één use case, en elke use case minstens één acceptatiecriterium? Heeft elke bedrijfsregel een bron? Hebben alle eisen, use cases, regels en criteria een ID?
6. **Haalbaarheid:** zijn er onopgeloste beperkingen die technisch onderzoek door de systeemarchitect nodig hebben?
7. **Security en privacy:** zijn toegangsbeheer, gevoelige gegevens, bewaartermijn en bedreigingen behandeld? Verandert het aanvalsvlak? Meld dat dan aan de systeemarchitect voor een threat model.
8. **Scope:** zijn uitsluitingen en afhankelijkheden expliciet?
9. **Goedkeuring:** is duidelijk wat voorgesteld is en wat is goedgekeurd? Is de status een van `Concept`, `Ter goedkeuring`, `Goedgekeurd`?
10. **Klaar voor architectuur:** intentie en scope duidelijk, criteria toetsbaar, wezenlijke bedrijfsregels vastgelegd, afhankelijkheden benoemd en geen onbeantwoorde vraag die het ontwerp kan veranderen.

## Uitvoer
- Status: **KLAAR VOOR BEOORDELING**, **VERDUIDELIJKING NODIG** of **GEBLOKKEERD**
- Bevindingen, gegroepeerd naar impact
- De exacte ID's of paragrafen die het betreft
- Waarom elke bevinding ertoe doet
- De concrete correctie of vraag
- Resterende aannames en risico's

## Regels
- Keur eisen niet goed namens de gebruiker.
- KLAAR VOOR BEOORDELING betekent dat het document samenhangend genoeg is om te beoordelen, niet dat het is goedgekeurd.
- Blokkeer niet op cosmetische formuleringen als de bedoeling duidelijk is.
- Beweer geen traceerbaarheid of validatie die je niet hebt uitgevoerd.
- Stuur technische ontwerpkeuzes via een issue naar de systeemarchitect. Planning en backlog zijn van de systeemarchitect of de orchestrator, zodra die er is.
