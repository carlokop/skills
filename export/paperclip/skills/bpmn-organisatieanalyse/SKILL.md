---
name: bpmn-organisatieanalyse
description: Analyseert de organisatie van mensen en agents en legt vast hoe doelen, processen, rollen, agents en skills samenhangen, als basis voor procesmodellering. Gebruik bij een nieuwe of veranderde inrichting van de agentorganisatie, bij een vermoeden van hiaten of overlap tussen rollen, of bij een vraag naar de gewenste inrichting (TO-BE).
---

# Organisatieanalyse

## Doel
De organisatie als samenhangend geheel vastleggen: doelen, processen, rollen, agents, skills en overdrachten. Het resultaat is een onderbouwd model van de huidige situatie (AS-IS), de knelpunten en een apart voorstel voor de gewenste situatie (TO-BE), als basis voor `bpmn-procesmodellering`. Deze skill wijzigt geen agents, skills of processen.

## Gebruik wat er al is
- **Conventies, ID's, register en spelregels:** skill `bpmn-conventies`. Lees die eerst.
- **Vragen stellen:** skill `grilling`. **Overdracht:** skill `overdracht`.
- **Voorstellen laten uitvoeren:** zie "Voorstellen en uitvoering" in `bpmn-conventies`.

## Voorwaarde
Bestaat er al een goedgekeurd organisatiemodel? Volg dan "Een goedgekeurd model wijzigen" in `bpmn-conventies`.

## Stappen
1. **Scope en doelen.** Leg vast: missie en doelen, producten en diensten, belangrijkste activiteiten, gewenste mate van automatisering, en de taken en beslissingen die onder menselijke controle blijven. Vraag wat ontbreekt aan de gebruiker met `grilling`, één vraag tegelijk. Klaar als elk onderdeel een antwoord of een OPEN-vraag heeft.
2. **Inventariseer de huidige situatie.** Lees de bronnen (zie "Bewijs voor de huidige situatie" in `bpmn-conventies`). Leg vast: rollen, agents, verantwoordelijkheden en bevoegdheden, skills, systemen en externe afhankelijkheden, en overdrachtsmomenten tussen agents en mensen. Elk element krijgt een ID in het register, `situatie: as-is` en een bron. Klaar als elke agent en elke genoemde skill in het register staat of als OPEN-vraag is genoteerd.
3. **Identificeer de processen.** Leid processen af uit doelen en concrete resultaten. Leg per proces vast: ID en naam, doel en gewenste uitkomst, aanleiding en startconditie, eigenaar, betrokken rollen en agents, input en output, afhankelijkheden, belangrijkste risico's en open vragen. Activiteiten en stroom werkt `bpmn-procesmodellering` uit. Klaar als elk doel uit stap 1 door minstens één proces gedekt wordt of een OPEN-vraag heeft.
4. **Analyseer de inrichting.** Zoek: ontbrekende verantwoordelijkheden, overlappende taken, onduidelijke beslissingsbevoegdheden, onnodige overdrachten, afhankelijkheid van één agent, kansen voor automatisering en taken die menselijke beoordeling vereisen. Elke bevinding krijgt een FND-ID, verwijst naar het bewijs en staat in `bevindingen.md`. Klaar als elk proces uit stap 3 op elk van deze punten is nagelopen.
5. **Ontwerp de gewenste situatie.** Beschrijf verbeteringen apart van de huidige situatie (`situatie: to-be`) en neem de huidige indeling niet als uitgangspunt. Elk voorstel (PRP-ID) bevat: het vastgestelde probleem (FND), de voorgestelde wijziging, de verwachte verbetering, de benodigde capabilities of skills, de gevolgen voor andere processen en de risico's en onzekerheden. Klaar als elk voorstel naar minstens één FND verwijst. Wat de gebruiker niet zei of de bronnen niet tonen, staat onder aannames of open vragen.
6. **Controleer en leg voor.** Draai `bpmn-modelcontrole` en leg voor volgens "Status en goedkeuring" in `bpmn-conventies`. Ga niet door zonder goedkeuring.

## Resultaat
- `ORGANISATIE.md`: doelen, rollen, agents, systemen en overdrachten.
- `register.yaml`: rollen, agents, processen, aannames en open vragen.
- `overzichten/proces-catalogus.md`, `bevindingen.md`, `voorstellen.md`.

## Regels
- Feiten, aannames, open vragen en voorstellen staan gescheiden en gemarkeerd.
- Voorstellen gaan naar de gebruiker. Doorvoeren gebeurt via Dr. Evil en de backlog.
- Een model over de rol van een agent gaat ook naar die agent, ter controle (`bpmn-conventies`).
