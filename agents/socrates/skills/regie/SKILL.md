---
name: regie
description: Regie voor de hoofdsessie over Socrates (business analist) en Atlas (systeemarchitect) - de keten van opdracht of wens tot een goedgekeurd backlog per slice, met controle door de lichte varianten, de vragen en akkoorden van de gebruiker, de sessie tussen Socrates en Atlas, afkeuring, blokkade en escalatie. Gebruik wanneer de gebruiker een project wil laten analyseren, een nieuwe wens wil uitwerken, de volgende slice wil laten voorbereiden, of Socrates of Atlas wil inzetten.
---

# Regie over Socrates en Atlas

Deze skill is voor **de hoofdsessie** (jij, in gesprek met de gebruiker). Socrates en Atlas zijn subagents: ze kunnen de gebruiker niets vragen en elkaar niet starten. Jij start ze, geeft hun berichten aan elkaar door, stelt hun vragen aan de gebruiker, geeft de antwoorden letterlijk terug, bewaakt de volgorde en houdt de stand bij. Je neemt hun werk niet over en je beslist niets namens de gebruiker.

Het backlog, de stand en het ritme doe je met `backlog-regie`. Laad die skill bij het openen of hervatten van de sessie van een klantproject.

## De agents

| Agent | Model | Voor |
|---|---|---|
| `socrates:socrates` | Opus, high | Eisen met juridische keuzes, use cases, bedrijfsregels, glossary, paginabrieven, wijzigingsverzoeken, BPMN op verzoek |
| `socrates:socrates-licht` | Sonnet, high, alleen lezen | Controle van het werk van Socrates vóór het akkoord; vragen over goedgekeurde eisen |
| `atlas:atlas` | Opus, high | Toets op use cases en brieven, architectuurkeuze, technisch ontwerp, sliceplan, program design per slice, bouwcontract, conventiebestand en regelbestanden, toets van backlog-items, vragen en wijzigingsverzoeken over het ontwerp |
| `atlas:atlas-licht` | Sonnet, high | Controle van het werk van Atlas vóór het akkoord; onderzoek; vragen over het goedgekeurde ontwerp; sequentiediagrammen uit een goedgekeurd model |

Start de lichte variant voor werk met een bekende uitkomst. Zegt een lichte variant "start socrates" of "start atlas", start dan de volle variant met dezelfde vraag en de reden.

## De keten

**Nieuwe klant** (eindigt bij het ontwerp en het sliceplan):
```
opdracht   (tegelijk maakt de gebruiker het design systeem)
 └─ Socrates   analyse, eisen, use cases, bedrijfsregels, paginalijst en brieven
    Atlas      toets in een sessie met Socrates (hoogstens 2 toetsrondes)
    akkoord    analysepakket
 └─ Atlas      architectuurkeuze en profiel; meld de gebruiker dat hij de sleutelpagina's kan ontwerpen
    Socrates   brieven afstemmen op de ontwerpen van de gebruiker
    akkoord    richting (ADR's, ontwerpen, afgestemde brieven)
 └─ Atlas      technisch ontwerp van het profiel
    akkoord    technisch ontwerp
 └─ Atlas      voorlopig sliceplan
    akkoord    sliceplan → daarna de lus per slice, voor slice 1 direct
```

**Lus per slice** (voor elke slice uit het plan, en na een wens):
```
 └─ Atlas      ontwerp per slice waar nodig, bouwcontract, in slice 1 conventiebestand en regelbestanden, implementatieplan met werkpakketten
    akkoord    bouwcontract (ontwerp per slice en plan gaan alleen mee bij een voorwaarde)
 └─ jij        vaste controles, backlog-items, backlog gereed        (backlog-regie)
    Atlas      toets van de backlog-items
    akkoord    backlog
 └─ jij        uitbreidingslijst en stand bijwerken                  (backlog-regie)
```

**Begintak voor een wens:** Socrates analyseert de wens, Atlas toetst, akkoord op het analysepakket. Daarna deelt Atlas de wens op in slices en werkt hij zo nodig het ontwerp bij, met een ADR. Dat gaat als één pakket langs de akkoorden: het sliceplan altijd, het technisch ontwerp als het verandert, en de richting alleen als de architectuur of het profiel verandert of er een nieuw paginaontwerp is. Dan volgt de lus per slice.

Raakt een slice tijdens het program design het globale ontwerp, dan werkt Atlas eerst het ontwerp bij, met een ADR, en dat gaat langs de akkoorden; daarna gaat de lus verder.

Een fase begint pas na een zichtbaar akkoord van de gebruiker op de vorige. Bij een uitbreiding sla je over wat al goedgekeurd is en niet verandert: Socrates bepaalt welke eisen veranderen, Atlas welke documenten.

## Een akkoord

1. **Indienen.** De maker zet het document in de klantrepo en zijn vragen in het eindbericht: één per keuze, met advies en gevolg bij nee.
2. **Controle.** Start de controleur met de paden en de vragen: socrates-licht voor het werk van Socrates, atlas-licht voor het werk van Atlas, Atlas zelf voor de backlog-items. Bevindingen gaan terug naar de maker met `SendMessage` (dezelfde agent hervatten); bij de backlog-items ben jij de maker en verwerk je de opmerkingen van Atlas zelf. Houd de rondes bij in de stand. Ga door tot "volledig gecontroleerd" (bij Atlas: "geen opmerkingen").
3. **Uitgang.** Zijn er 2 controlerondes achter elkaar zonder voortgang (geen enkele bevinding opgelost), leg het dan voor aan de gebruiker, met beide standpunten. Geef zijn besluit door: doorgaan naar de vragen, herzien, of stoppen. Daarna begint de telling opnieuw. Bij de backlog-items heeft Atlas het laatste woord op technische punten; na 2 toetsrondes, of bij een conflict over iets niet-technisch, beslist de gebruiker.
4. **Vragen.** Stel de vragen met de vragendialoog (`AskUserQuestion`): hoogstens 4 per dialoog, de aanbevolen optie eerst met "(Recommended)", elke vraag zelfstandig leesbaar met "Het gaat om" in gewone taal, advies en gevolg bij nee, en hoogstens één scherm. Zeg erbij of de controle "volledig gecontroleerd" gaf. Geen interne codes, tellingen of skills. Heeft de gebruiker eerst een vraag of opmerking, hervat dan de maker daarmee; die antwoordt, herziet zo nodig en dient opnieuw in.
5. **Antwoorden terug.** Geef alle antwoorden letterlijk terug aan dezelfde maker, met de datum, en leg vragen en antwoorden letterlijk vast in de stand. Heeft de gebruiker alle vragen beantwoord, meld dan expliciet dat het een akkoord is, ook als hij het advies niet volgde.
6. **Nacontrole.** Week een antwoord af van het advies, laat de controleur van de poort dan de verwerking nakijken voordat de status Goedgekeurd wordt. Bij bevindingen herstelt de maker de verwerking en volgt de nacontrole opnieuw. Na 2 nacontrolerondes zonder voortgang leg je het voor aan de gebruiker: doorgaan betekent de goedkeuring vastleggen, herzien betekent de verwerking herstellen. Volgde elk antwoord het advies, dan is er geen nacontrole.
7. **Goedgekeurd.** Na het akkoord en, als die er was, een geslaagde nacontrole zet de maker de status op `Goedgekeurd`. Levert de verwerking een nieuwe keuze op, dan wordt dat een nieuwe vraag, geen afkeuring. Klaar als de status Goedgekeurd is en het akkoord in de stand staat.

Wijst de gebruiker het document als geheel af, dan is het een **afkeuring**: geef de reden terug aan de maker, die herziet. Bij de derde afkeuring van hetzelfde document meldt de maker een escalatie; leg de gebruiker de opties voor en geef zijn besluit door. Daarna begint de telling opnieuw.

Een wijziging van iets wat al goedgekeurd is, gaat als wijzigingsverzoek langs dezelfde poort: eerst controle, dan een apart akkoord.

## De sessie tussen Socrates en Atlas

Een toets of een vraag tussen Socrates en Atlas is één vaste sessie met één lopend verslag (`contextverslag.md`), dat de vrager na elke ronde bijwerkt.
- Geef elk bericht letterlijk door: de vragen van de vrager aan de ontvanger (start de ontvanger, of hervat hem binnen dezelfde ronde), de antwoorden terug aan dezelfde vrager. Elke nieuwe toetsronde is een nieuwe opdracht aan Atlas.
- Stelt de ontvanger (of de vrager bij zijn eigen punt) in de sessie een productvraag die nog niets goedgekeurds verandert, stel die dan direct aan de gebruiker en hervat de agent met het antwoord. Zo'n vraag telt niet als ronde. Verandert het antwoord iets goedgekeurds, dan wordt het een wijzigingsverzoek.
- Houd per ronde in de stand bij of er voortgang was. Na 2 rondes achter elkaar zonder voortgang leg je de open punten met beide standpunten en het advies voor aan de gebruiker, en geef je zijn besluit door. Daarna begint de telling opnieuw.
- Aan het eind bevestigt de ontvanger het verslag.

Ook jij kunt vrager zijn: is een werkpakket onduidelijk terwijl je de backlog-items maakt, stel Atlas dan een vraag in zo'n sessie. Jij schrijft dan het verslag en Atlas bevestigt het.

Met de gebruiker zelf telt niemand rondes.

## Blokkade

Meldt een agent status geblokkeerd, leg de blokkade vast in de stand en los haar op: start de ander, vraag ontbrekende input via een sessie, of zorg voor het bestand. Hervat daarna de agent met de oplossing. Kun je de blokkade niet oplossen, of meldt een agent dezelfde blokkade een tweede keer, leg haar dan voor aan de gebruiker en voer zijn besluit uit.

## De opdracht aan een agent

Start elke agent met een zelfstandige opdracht: doel, wat al klaar en goedgekeurd is (met datum), welke documenten en ID's, en welke stap van de keten. Herhaal geen documenten; verwijs naar paden. Elk eindbericht heeft Resultaat, Bestanden, Open vragen, Verzoek aan de ander en Status. Vraagt een agent iets van de ander, start de ander dan met dat verzoek en geef de uitkomst terug.

## Projectregels gaan voor

- Lees `CLAUDE.md`, `AGENTS.md`, `.claude/rules/` en `docs/README.md` van het project. Schrijft het project voor hoe ontwerpen worden goedgekeurd (bijvoorbeeld een ontwerp-poort, Mermaid in vaste bestanden, een API-contract altijd op een Artifact-pagina), volg dan die regels. Regels die alleen voor de bouw gelden, zoals leesmomenten voor code, gelden niet voor het voorwerk.
- Een ontwerppagina (HTML van `ontwerppagina` of de diagramscripts) publiceer je alleen als Artifact als de gebruiker erom vraagt, of als het project dat voorschrijft. Geef de URL terug aan de maker.

## Grenzen

- Je schrijft of wijzigt zelf geen eisen, ontwerpen of modellen.
- Een document is pas goedgekeurd na een expliciet akkoord van de gebruiker in deze sessie.
- Vragen van de agents geef je door zoals ze gesteld zijn; verduidelijk ze voor de gebruiker zonder de keuze te veranderen.
