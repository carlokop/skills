---
name: bpmn-rollen-en-skillmodel
description: Koppelt de activiteiten uit goedgekeurde procesmodellen aan capabilities, skills, agents en verantwoordelijkheden (RACI, goedkeuringen, onafhankelijke controle) en toont wat ontbreekt. Gebruik nadat een procesmodel is goedgekeurd, bij een vraag welke agent of skill nodig is, of bij een vermoeden van overlap of ontbrekende verantwoordelijkheid.
---

# Rollen- en skillmodel

## Doel
Per activiteit vastleggen welke capabilities nodig zijn, welke skills die dekken, welke agent uitvoert, wie verantwoordelijk is, wie beslist, wie controleert en waar de gebruiker moet goedkeuren. Daarna zichtbaar maken wat ontbreekt. Deze skill maakt geen skills aan en wijzigt geen agentconfiguraties.

## Gebruik wat er al is
- **Conventies, ID's, register, skillstatus en spelregels:** skill `bpmn-conventies`. Lees die eerst.
- **Activiteiten:** uit de goedgekeurde procesmodellen (`bpmn-procesmodellering`).
- **Vragen stellen:** skill `grilling`.
- **Formeel voorstel en backlogitems:** Dr. Evil, zie "Voorstellen en uitvoering" in `bpmn-conventies`.
- **Daarna:** `bpmn-eindontwerp` maakt het artifact.

## Voorwaarde
De procesmodellen waarvan je activiteiten gebruikt hebben `Status: Goedgekeurd`. Zo niet, werk dan niet door en meld dat op het issue.

## Stappen
1. **Haal de activiteiten op** uit de goedgekeurde procesmodellen. Klaar als elk ACT-ID uit die modellen in je lijst staat.
2. **Bepaal de capabilities** per activiteit (bijvoorbeeld requirementsanalyse, procesmodellering, architectuurontwerp, codegeneratie, testanalyse, securityreview). Klaar als elke activiteit minstens één CAP heeft.
3. **Koppel skills.** Zoek per capability welke bestaande skills die ondersteunen. Controleer de configuratie of documentatie en neem niets aan over aanwezigheid of werking. Geef elke skill een status (`bestaat`, `uitbreiden`, `koppelen`, `nieuw`, `onbekend`) met bron en noteer skills die gecombineerd kunnen worden. Leg per skill vast: ID, naam, doel, capability, ondersteunde activiteiten, input, output, gebruikers, afhankelijkheden en validatiecriteria. Klaar als elke capability per skill een status met bron heeft.
4. **Koppel agents en verantwoordelijkheden.** Leg per activiteit vast: uitvoerder (R), verantwoordelijke (A), beslisser, controleur, geraadpleegd (C), geïnformeerd (I) en de voorwaarden voor escalatie. Uitvoerder, verantwoordelijke en controleur hoeven niet dezelfde partij te zijn. Wijs de eindverantwoordelijkheid niet automatisch aan een AI-agent toe: leg de menselijke verantwoordelijkheid en bevoegdheden expliciet vast. Klaar als elke activiteit een R en één A heeft. RACI is een analysemodel naast het procesmodel, geen vervanging ervan.
5. **Werk de goedkeuringsmomenten uit.** Voor elke GOV uit de procesmodellen: wie bevoegd is, welke informatie nodig is, welke criteria gelden, wat er bij goedkeuring gebeurt, wat bij afwijzing en hoe escalatie verloopt. Klaar als elke GOV deze zes onderdelen heeft.
6. **Toets onafhankelijkheid.** Beoordeelt de uitvoerder ook zijn eigen werk? Stel dan een andere geschikte controleur voor en leg vast welke bevindingen tot herstel, escalatie of menselijke beoordeling leiden. Klaar als elke activiteit met verplichte controle een controleur heeft die niet de uitvoerder is.
7. **Zoek hiaten.** Loop elke activiteit na op: geen geschikte uitvoerder, agent zonder afgebakende verantwoordelijkheid, ontbrekende skill, skill die door meerdere agents wordt gebruikt, onnodige overlap, afhankelijkheid van één agent, onvoldoende verificatiemogelijkheden en conflicterende verantwoordelijkheden. Elke bevinding krijgt een FND-ID in `bevindingen.md`. Klaar als elke activiteit op elk van deze punten is nagelopen.
8. **Beschrijf wat een nieuwe of gewijzigde skill moet kunnen:** capability, ondersteunde activiteiten, input, output en validatiecriteria. Schrijf de inhoud van de skill zelf niet. Dr. Evil maakt het formele voorstel en de backlogitems. Voorstellen krijgen een PRP-ID.
9. **Werk register en overzichten bij:** `capabilities-en-skills.md`, `agent-skillmatrix.md` (beschikbaar, vereist, optioneel, ontbrekend, nog te valideren), `activiteit-skillmatrix.md` en `verantwoordelijkheden.md` (RACI, beslissingsbevoegdheden, goedkeuringen, conflicten). Draai `bpmn-modelcontrole` en leg voor volgens `bpmn-conventies`.

## Resultaat
`register.yaml` (capabilities, skills, koppelingen, goedkeuringen), de vier overzichten, nieuwe bevindingen en voorstellen.

## Regels
- Begrippen rol, agent, capability, skill, activiteit en deliverable blijven gescheiden.
- Wijzig geen bevoegdheden of goedkeuringsregels zonder goedkeuring van de bevoegde eigenaar.
- Voorstellen gaan naar de gebruiker. Doorvoeren gebeurt via Dr. Evil en de backlog.
