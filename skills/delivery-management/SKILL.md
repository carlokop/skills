---
name: delivery-management
description: Bewaak de flow, voortgang, blokkades, scope en opleveringen, en rapporteer kort. Gebruik bij de dagelijkse flowcheck-routine, bij een statusvraag, bij het voorbereiden van het weekmoment en wanneer werk wordt opgeleverd.
---

# Oplevering en flow bewaken

## Bord en limieten

Het werk loopt door deze kolommen:

| Kolom | Status in Paperclip | Toegewezen aan | Limiet |
| --- | --- | --- | --- |
| Backlog | `backlog` | — | — |
| Analyse/ontwerp | `todo` of `in_progress` | Socrates of Atlas | geen |
| Bezig | `todo` of `in_progress` | elke andere agent | max. 3 |
| Review | `in_review` | Sentinel of de tester | geen |
| Wacht op afname | `in_review` | de gebruiker | max. 2 |
| Klaar | `done` | — | — |

* De kolom volgt uit status én toewijzing samen. Status alleen is niet genoeg.
* `todo` telt mee voor "Bezig": een toegewezen taak houdt een plek bezet, ook als de agent nog niet begonnen is.
* `blocked` is geen eigen kolom. Een geblokkeerd issue telt in de kolom van de agent aan wie het is toegewezen, en telt dus mee voor de limiet. Zo kan vastgelopen werk de limiet niet omzeilen.
* `cancelled` staat niet op het bord.

Limieten: "Bezig" maximaal 3, "Wacht op afname" maximaal 2. Heeft de gebruiker op het weekmoment andere limieten vastgesteld, gebruik dan die (zie `para-memory-files`).

## Dagelijkse flowcheck (routine, elke werkdag)

1. Controleer de toewijzing. Elk issue met `in_review` moet aan Sentinel, de tester of de gebruiker zijn toegewezen, en een issue met `blocked` aan een agent. Klopt dat niet, zet het dan recht als duidelijk is waar het hoort, en meld dat op het issue. Is het niet duidelijk, vraag het dan aan de eigenaar en tel het issue tot die tijd mee als "Wacht op afname".
2. Tel de items in "Bezig" en "Wacht op afname".
3. Is "Wacht op afname" vol, start dan niets nieuws.
4. Is er ruimte in "Bezig" en is "Wacht op afname" niet vol, pak dan het bovenste item van de backlog dat klaar is om op te pakken (`backlog-management`) en waarvan de afhankelijkheden klaar zijn (`dependency-management`). Wijs het toe met `agent-orchestration`. Sla geen items over om iets makkelijkers te kiezen. Kan het bovenste item niet starten, noteer dan waarom en neem het volgende.
5. Loop het open werk door en sorteer het (zie hieronder).
6. Controleer het budget. Is 80% van het maandbudget verbruikt, van het bedrijf of van één agent, escaleer dan (trigger 3 in `escalation-management`).
7. Leg de uitkomst in een korte comment vast op het issue van de routine.

Stoor de gebruiker alleen bij een trigger uit `escalation-management`. Al het andere bewaar je voor het weekmoment, met één uitzondering: het herinneringsbericht van 09:00 (zie de aanvulling onderaan).

## Open werk sorteren

* **Wacht op de gebruiker**: goedkeuring, besluit of antwoord ontbreekt.
* **Geblokkeerd**: er ontbreekt iets van een andere agent of een afhankelijkheid.
* **Geen voortgang**: geen activiteit sinds de verwachte tijd.
* **Loopt**: er is voortgang.
* **Klaar**: afgerond, wacht op afname.

Bij geblokkeerd werk: zoek de oorzaak, haal de juiste agent erbij of escaleer volgens `escalation-management`.
Bij werk zonder voortgang: vraag de eigenaar op het issue om status. Wijs alleen opnieuw toe als de agent niet beschikbaar is, en meld dat.
Bewaak de scope: werk dat niet volgt uit de goedgekeurde eisen meld je aan de gebruiker. Je breidt de scope niet uit en verkleint haar niet.
Bij een oplevering controleer je de `quality-gates` en breng je de resultaten samen. Daarna zet je het werk zelf in "Wacht op afname": status `in_review` en toegewezen aan de gebruiker. Laat dat niet aan een andere agent over.

## Rapporteren

Rapporteer op een statusvraag en op het weekmoment, niet tussendoor (het herinneringsbericht van 09:00 is de enige uitzondering). Houd het kort, met wat op de gebruiker wacht bovenaan, daarna geblokkeerd, loopt en klaar. Verwijs naar issues en herhaal ze niet.

## Aanvulling PRC-08 (model 0.14): drempel van 5 en herinneringsbericht

Besluit: PRP-014, PRP-018, B-08, B-13, ASM-23, ASM-30, ASM-32, ASM-33, ASM-35, ASM-47. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor stappen hierboven die er anders over zeggen.

**Flowcheck stap "open taken tellen" (ACT-02.51).** Voeg aan de dagelijkse flowcheck toe: tel de open taken van de lopende slice. Zijn het er **5 of minder**, dan start PRC-02 (backlog uitbreiden met volgende slice), tenzij er voor het project al een doorloop loopt (G-02.8; daar beslis jij, ASM-47; ASM-33: hoogstens één doorloop per project). Een taak is open als haar status niet `done` of `cancelled` is (geblokkeerd en in review tellen mee). De lopende slice is de epic die het laatst op het backlog is gezet. De drempel geldt per project (ASM-30). De flowcheck draait elke werkdag om 09:00 in de routine *Dagstart: flowcheck en herinnering* (Nederlandse tijd, ASM-32). Ook het weekmoment (maandag 04:00) en een verzoek van Carlo starten PRC-02. Dekking: ACT-02.51, ACT-02.1 en GOV-07.

**Herinneringsbericht (ASM-35).** Elke werkdag om 09:00 één bericht voor Carlo met alles wat op hem wacht: open goedkeuringskaarten, open vragenkaarten, een open GOV-07-vraag en escalaties, elk met link en de datum waarop het klaarstond, de oudste bovenaan. Wacht er niets, dan komt er geen bericht. Het bericht komt als comment op het lopende weekmoment-issue (`weekmoment`). Er is geen termijn: een akkoord vervalt niet. De lijst *Wacht op de gebruiker* uit de flowcheck is de basis. Dit is de uitzondering op "stoor de gebruiker alleen bij een trigger".

**Signaal voor een aparte agent (PRP-018, PRP-035, ASM-23).** Zodra er developers zijn, of uitbreidingen aantoonbaar op Atlas wachten (drempel OPEN-13, nog open), signaleer je dat en leg je het voor (`escalation-management`). Tot Carlo de drempel kiest, meld je op het weekmoment hoe lang elke uitbreiding op Atlas wacht. Geen besluit, een melding. Zo hoort ook een frontend-agent bij het begin van de bouw.

## Aanvulling CHG-033 (besluit Carlo, WEB-152; model 0.17): feature-flow met Neo, Trace en Sentinel

Bron: `skillwijzigingen` §3, `prc-09`, ASM-70, keuze 12 en 14, G-09.1, PRP-058. Deze aanvulling gaat voor het bord en de limieten hierboven waar die er anders over zeggen.

**Bord.** Kolom *Review* is Sentinel (`in_review`, toegewezen aan Sentinel); kolom *Test* is Trace (`in_review`, toegewezen aan Trace). *Wacht op afname* blijft de gebruiker.

**Limiet.** Eén feature tegelijk voor Neo (WIP 1 feature).

**Feature starten (ACT-09.1).** Pak het bovenste epic van de backlog dat klaar is om op te pakken (`backlog-management`). Bij werk met UI waarvoor nog geen designsysteem bestaat start je niet (G-09.1); vraag de ontwerper via Carlo.

**Extra taak (keuze 14).** Blijkt er werk nodig om de AC's te halen dat niet in het plan staat, dan maak je op advies van Atlas een extra taak onder de feature. Werk dat niet nodig is voor de AC's is een nieuwe wens (`requirements-orchestration`).

**Feature afronden (ACT-09.20).** Na de merge door Carlo: controleer dat het epic en de taken kloppen, meld het op het epic en zet de uitbreidingslijst bij (`backlog-management`). Je sluit zelf geen issues.

**Evaluatie na de eerste gemergede feature (keuze 12, PRP-058).** Zet voor Carlo een korte evaluatie klaar: aantal reviewrondes per taak, tokens per taak als Paperclip die toont, en je advies over het model van Neo en Trace. Dit is een kaart met korte vragen (`vragen-en-akkoordrondes`).
