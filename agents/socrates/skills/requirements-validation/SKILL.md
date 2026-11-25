---
name: requirements-validation
description: Controleert het analysepakket (requirements, use cases, bedrijfsregels, visie, paginalijst en brieven, ook de afgestemde brieven) op volledigheid, consistentie, toetsbaarheid, traceerbaarheid en gereedheid voor de systeemarchitect, vóór indiening ter beoordeling. Doet ook de nacontrole als een antwoord van de gebruiker afweek van het advies.
---

# Requirements-validatie

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Een kwaliteitscontrole uitvoeren op het analysepakket, of op de afgestemde brieven, voordat het ter beoordeling gaat. Het controleert eigen werk of dat van een eerdere versie en is dus geen onafhankelijke goedkeuring.

## ID's
Eisen: `FR-` (functioneel) en `NFR-` (niet-functioneel). Use cases: `UC-`. Bedrijfsregels: `BR-`. Acceptatiecriteria: `AC-`.

## Controlelijst
Klaar als elk punt dat bij het ingediende pakket hoort, is nagelopen.

1. **Volledigheid:** dekken de eisen de belangrijkste actoren, stromen, rechten, foutgevallen en randgevallen?
2. **Duidelijkheid:** kunnen twee redelijke lezers een eis verschillend uitleggen? Zijn vage woorden vervangen door getallen of voorbeelden?
3. **Toetsbaarheid:** is elke eis te controleren met waarneembaar bewijs?
4. **Consistentie:** botsen eisen met elkaar, met `GLOSSARY.md` of met goedgekeurd bestaand gedrag?
5. **Traceerbaarheid:** heeft elke Must- en Should-eis minstens één use case, en elke use case minstens één acceptatiecriterium? Heeft elke bedrijfsregel een bron? Hebben alle eisen, use cases, regels en criteria een ID?
6. **Haalbaarheid:** zijn er onopgeloste beperkingen die technisch onderzoek door de systeemarchitect nodig hebben?
7. **Security en privacy:** zijn toegangsbeheer, gevoelige gegevens, bewaartermijn en bedreigingen behandeld? Verandert het aanvalsvlak? Meld dat dan aan de systeemarchitect voor een threat model.
8. **Juridische keuzes:** staan de juridische keuzes uit de opdracht (zoals privacy, bewaartermijnen, voorwaarden en verwerkersafspraken) als eis of bedrijfsregel in het pakket, elk met een open vraag aan de gebruiker? De keuze is van de gebruiker.
9. **Scope:** zijn uitsluitingen en afhankelijkheden expliciet?
10. **Visie:** noemt `vision.md` het projecttype met de signalen voor het profiel en een voorstel voor de vorm van de use cases (`requirements-analysis`, "Visie en projecttype")?
11. **Paginalijst en brieven** (`pages.md`):
    - Elke "nu"-pagina heeft een brief met gegevens, acties en UC/AC.
    - Het ontwerpniveau noemt het criterium.
    - Elk gegeven in een brief komt uit een UC/AC of BR, niet uit mock data.
    - De "nu"-pagina's dekken de kern.
    - Bij afgestemde brieven: er is een lijst van verschillen met de ontwerp-export; brief en ontwerp zeggen hetzelfde over gegevens en acties, en de verschillen staan bij de open vragen.
12. **Kern:** zijn de kern-eisen gemarkeerd?
13. **Goedkeuring:** is duidelijk wat voorgesteld is en wat is goedgekeurd? Is de status een van `Concept`, `Ter goedkeuring`, `Goedgekeurd`?
14. **Open vragen:** dekken de open vragen in het eindbericht alle keuzes en aannames die Socrates zelf invulde?
15. **Klaar voor architectuur:** intentie en scope duidelijk, criteria toetsbaar, wezenlijke bedrijfsregels vastgelegd, afhankelijkheden benoemd en geen onbeantwoorde vraag die het ontwerp kan veranderen.

## Nacontrole
Vraagt de aanroeper een nacontrole na een antwoord van de gebruiker dat afweek van het advies, loop dan alleen de verwerking na. Klaar als elk afwijkend antwoord is nagelopen:
1. Is het antwoord verwerkt op elke plek die het raakt?
2. Brengt de verwerking een nieuwe keuze of aanname mee zonder open vraag?

Uitslag: **VERWERKING IN ORDE**, of per antwoord de plek en de correctie.

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
- Zet technische ontwerpkeuzes als verzoek aan de systeemarchitect (Atlas) in je eindbericht; de aanroeper geeft ze door. Planning en backlog horen niet bij deze skill.
