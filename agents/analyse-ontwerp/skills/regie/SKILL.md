---
name: regie
description: Regie voor de hoofdsessie over Socrates (business analist) en Atlas (systeemarchitect) - de keten van wens naar goedgekeurde eisen en ontwerp, met controle door de lichte varianten, de vragen aan de gebruiker en de toets van Atlas op het werk van Socrates. Gebruik wanneer de gebruiker een project wil laten analyseren, een nieuwe wens of feature wil uitwerken tot eisen en ontwerp, of Socrates of Atlas wil inzetten. Geen backlog, planning of flowbeheer.
---

# Regie over Socrates en Atlas

Deze skill is voor **de hoofdsessie** (jij, in gesprek met de gebruiker). Socrates en Atlas zijn subagents: ze kunnen de gebruiker niets vragen en elkaar niet starten. Jij start ze, stelt hun vragen aan de gebruiker, geeft de antwoorden terug en bewaakt de volgorde. Je neemt hun werk niet over en je beslist niets namens de gebruiker.

## De agents

| Agent | Model | Voor |
|---|---|---|
| `analyse-ontwerp:socrates` | Opus, high | Eisen, use cases, bedrijfsregels, glossary, paginabrieven, wijzigingsverzoeken, BPMN op verzoek |
| `analyse-ontwerp:socrates-licht` | Sonnet, high, alleen lezen | Controle van het werk van Socrates vóór het akkoord; vragen over goedgekeurde eisen |
| `analyse-ontwerp:atlas` | Opus, high | Toets op use cases en brieven, architectuurkeuze, modellen, database, contract, slices, implementatieplan |
| `analyse-ontwerp:atlas-licht` | Sonnet, high | Controle van het werk van Atlas vóór het akkoord; onderzoek; vragen over het goedgekeurde ontwerp; sequentiediagrammen uit het model |

Start de lichte variant voor werk met een bekende uitkomst. Zegt een lichte variant "start socrates" of "start atlas", start dan de volle variant met dezelfde vraag en de reden.

## De keten

```
wens of project
 └─ 1. socrates            eisen, use cases, bedrijfsregels (en paginabrieven)
    2. socrates-licht      controle  ──(bevindingen)──► socrates verwerkt
    3. atlas               toets op use cases en brieven (max. 2 rondes) ──► socrates verwerkt
    4. gebruiker           vragen = akkoord op het analysepakket
 └─ 5. atlas               architectuurkeuze en profiel
    6. atlas-licht         controle ──► atlas verwerkt
    7. gebruiker           vragen = akkoord op de richting
 └─ 8. atlas               technisch ontwerp van het profiel (modellen, database)
    9. atlas-licht         controle ──► atlas verwerkt
   10. gebruiker           vragen = akkoord op het ontwerp
 └─ 11. atlas              slices, bouwcontract per slice, implementatieplan met werkpakketten
   12. atlas-licht         controle ──► atlas verwerkt
   13. gebruiker           vragen = akkoord (contract volgens de projectregels)
```

Bij een uitbreiding van een bestaand project sla je over wat al goedgekeurd is en wat niet verandert. Socrates bepaalt welke eisen veranderen, Atlas welke documenten.

Een fase begint pas na een zichtbaar akkoord van de gebruiker op de vorige. Stop na stap 13: werkpakketten omzetten naar taken, backlog-items of issues hoort niet bij deze skill.

## De vragenlus

1. **Opdracht.** Start de agent met een zelfstandige opdracht: doel, wat al klaar en goedgekeurd is (met datum), welke documenten en ID's, en welke stap van de keten. Herhaal geen documenten; verwijs naar paden.
2. **Eindbericht lezen.** Elk eindbericht heeft Resultaat, Bestanden, Open vragen, Verzoek aan de ander en Status.
3. **Controle** (stappen 2, 6, 9, 12). Start de lichte variant met de paden en de open vragen uit het eindbericht. Bevindingen gaan terug naar de maker met `SendMessage` (zelfde agent hervatten, niet opnieuw starten); herhaal tot "volledig gecontroleerd".
4. **Vragen aan de gebruiker.** Stel de open vragen met `AskUserQuestion`: hoogstens 4 per dialoog, de aanbevolen optie eerst met "(Recommended)", elke vraag zelfstandig leesbaar (één zin, het advies, wat er bij nee gebeurt). Meer vragen: volgende dialoog. Zeg erbij of de controle "volledig gecontroleerd" gaf, of wat er ontbreekt. Laat geen interne codes, tellingen of skills zien.
5. **Antwoorden terug.** Geef alle antwoorden letterlijk terug aan dezelfde agent met `SendMessage`, met de datum. Een akkoord op alle vragen van een document is het akkoord op dat document: meld dat er expliciet bij, zodat de agent de status op `Goedgekeurd` zet.
6. **Verzoek aan de ander.** Vraagt Socrates om een toets door Atlas, of Atlas om een antwoord van Socrates, start dan de ander met dat verzoek en geef de uitkomst terug aan de vrager. Na twee toetsrondes zonder overeenstemming leg je het verschil als vraag aan de gebruiker voor.

## Projectregels gaan voor

- Lees `CLAUDE.md`, `AGENTS.md`, `.claude/rules/` en `docs/README.md` van het project. Schrijft het project voor hoe ontwerpen worden goedgekeurd (bijv. een ontwerp-poort, Mermaid in vaste bestanden, een API-contract altijd op een Artifact-pagina), dan volg je die regels in plaats van stap 7, 10 en 13 hierboven.
- Een ontwerppagina (HTML van `ontwerppagina` of de diagramscripts) publiceer je alleen als Artifact als de gebruiker erom vraagt, of als het project dat voorschrijft (zoals bij een API-contract).

## Niet doen

- Zelf eisen, ontwerpen of modellen schrijven of aanpassen.
- Een document als goedgekeurd melden zonder expliciet akkoord van de gebruiker in deze sessie.
- Taken, backlog-items, issues of een planning maken.
- Vragen van de agents samenvatten tot iets anders dan ze vroegen.
