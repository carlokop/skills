---
name: backlog-management
description: Structureer de backlog in Paperclip en splits werk uit in taken die klaar zijn om op te pakken. Gebruik wanneer de backlog geordend moet worden, wanneer een plan in taken wordt gesplitst of wanneer je wilt weten of een issue klaar is voor uitvoering.
---

# Backlog beheren

De backlog zijn de Paperclip-issues. Houd geen backlog bij in de repo.
Geef elk issue een duidelijke titel, één eigenaar, het doel, de acceptatiecriteria met hun ID's (`AC-01.1`) en een verwijzing naar de eis of use case (`FR-001`, `UC-01`).
Splits groot werk in taken die één agent in één keer kan afronden (zie de aanvulling CHG-033 voor features). Zet een goedgekeurd plan om met `paperclip-converting-plans-to-tasks`.
Een issue is klaar om op te pakken als de eisen goedgekeurd zijn, de acceptatiecriteria er staan en de afhankelijkheden vastliggen. Anders gaat het terug naar de eigenaar van wat ontbreekt.
Signaleer dubbele of overlappende issues en stel samenvoegen voor. Sluit of verwijder ze niet zelf.
Productprioriteit is van de gebruiker. Stel een volgorde voor, maar wijzig prioriteiten niet zonder zijn akkoord.

## Aanvulling PRC-08 (model 0.14): uitbreidingslijst

Besluit: B-12/PRP-033, B-13, ASM-33, ASM-39, ASM-47. Bron: `skill-specificaties` op WEB-19.

Je houdt per project één **uitbreidingslijst** bij. Carlo bepaalt de inhoud en de volgorde; jij kiest niet zelf.

- **Trigger:** (1) het eind van PRC-01 na "backlog gereed" (ACT-01.29); (2) een nieuwe wens van Carlo, via jou als enig loket (PRP-001); (3) het weekmoment (volgorde, top 5); (4) het eind van elke doorloop van PRC-02 na "backlog gereed" (ACT-02.17). PRC-02 start op drie manieren: het weekmoment (maandag 04:00), de dagstart (werkdagen 09:00, ACT-02.51) en een verzoek van Carlo.
- **Input:** Carlo's eigen lijst met mogelijke uitbreidingen, de paginalijst ("later"-pagina's, `paginalijst-en-paginabrieven`), de backlog en de uitkomst van de doorloop.
- **Output:** de lijst, met per uitbreiding de pagina's, de reden "later" en een verwijzing naar de paginalijst. Na een doorloop staat de uitgevoerde uitbreiding op "in backlog" en staan de nieuwe "later"-pagina's (uit ACT-02.15) erop.

Werkwijze:
1. ACT-01.29: zet Carlo's eigen lijst en de "later"-pagina's van de paginalijst op de lijst. Een "later"-pagina heeft nog geen brief; die komt in PRC-02 (G-02.2 → ACT-02.15).
2. ACT-02.1: neem de volgende wens van de lijst, volgens Carlo's volgorde en het focusdoel (ASM-14). Blijkt die niet uit de volgorde, dan volgt de directe vraag (GOV-07, `escalation-management`). Start PRC-02 door een verzoek van Carlo, neem dan de wens uit dat verzoek. Loopt er voor het project al een doorloop (G-02.8), dan start er niets: zet de gevraagde wens bovenaan de lijst en meld dat; hij komt bij de volgende start als eerste (ASM-33). Bij G-02.8 beslis jij (ASM-47).
3. ACT-02.17: zet de uitgevoerde uitbreiding op "in backlog" en voeg de nieuwe "later"-pagina's toe.
4. Een nieuwe wens van Carlo zet je op de lijst; de volgorde stelt hij op het weekmoment vast.

Kwaliteitscriteria: elke "later"-pagina staat op de lijst; elke uitbreiding verwijst naar de paginalijst; je verandert inhoud of volgorde niet zelf. De lijst heeft bewust geen controleur (ASM-39): Carlo ziet hem op het weekmoment.

Tools: `paperclip`, één issue per uitbreiding met status `backlog`, onder het projectissue. Een vaste volgorde over meer dan vier uitbreidingen is als veld niet gevonden; de volgorde staat in het weekmoment-issue (top 5) of in de beschrijving van het projectissue (M-12).

Afhankelijkheden: `paginalijst-en-paginabrieven`, `weekmoment`, `escalation-management`.

Voorbeeld: aan het eind van de eerste doorloop staan *Over ons* en *Blog* als "later" in de paginalijst. Je maakt twee issues met status `backlog` onder het projectissue, met de reden en een verwijzing naar `pages.md`. Na de doorloop van *Blog* staat dat issue op "in backlog" en staat *Blogarchief* erbij.

## Aanvulling CHG-033 (besluit Carlo, WEB-152; model 0.17): feature als epic

Bron: `skillwijzigingen` §3, ASM-63. Deze aanvulling gaat voor regels hierboven die er anders over zeggen.

- Een **feature is een epic**; de taken zijn subissues van het epic. Maak per taak één issue met precies één eigenaar (meestal Neo).
- Er is **één featurebranch per epic**. Alle taken van het epic werken op die branch, in één draft-PR.
- Maak voor Trace een **testplantaak** onder het epic: het testplan uit de AC's, vóór de code (`testplan-en-rapport`). Het testplan en het testrapport staan als document op het epic.
- De volgorde van taken volgt de afhankelijkheden (`dependency-management`) en het implementatieplan van Atlas.
