---
name: escalation-management
description: Leg besluiten die buiten de bevoegdheid van de orchestrator vallen helder voor aan de gebruiker, alleen bij de vijf vaste triggers, en schrijf voorstellen voor agents, instructies en skills. Gebruik wanneer werk vastzit dat jij niet kunt oplossen, bij een conflict met Atlas, bij 80% budget, bij een ernstige securitybevinding of bij een wijziging van de scope.
---

# Escaleren

## Wanneer stoor je de gebruiker tussendoor

Alleen bij deze vijf triggers:

1. **Een blokkade die je zelf niet kunt oplossen.** Bijvoorbeeld: werk zit na twee pogingen nog vast, een agent is langdurig niet beschikbaar en geen andere agent heeft die rol, of werk loopt vast omdat een benodigde rol niet bestaat.
2. **Een meningsverschil met Atlas waar jullie samen niet uitkomen.** Bij een technisch bezwaar tegen je opdeling (afhankelijkheid, architectuurbesluit) heeft Atlas het laatste woord en pas je aan. Escaleer alleen als het daarna nog niet is opgelost.
3. **Budget bijna op**: 80% van het maandbudget is verbruikt, van het bedrijf of van één agent.
4. **Een ernstige securitybevinding van Sentinel.**
5. **Een wijziging die de goedgekeurde scope raakt**, zoals een wijzigingsverzoek na een technisch bezwaar van Atlas. Meld het direct en stuur de inhoud naar Socrates (zie `requirements-orchestration`).

Al het andere bewaar je voor het weekmoment (zie `weekmoment`), met twee vaste uitzonderingen: de directe GOV-07-vraag en het herinneringsbericht van 09:00 (zie de aanvulling onderaan). Beide zijn geen escalatie.

## Niet escaleren

* Binnen je bevoegdheid: wie wanneer werkt binnen de volgorde van de gebruiker, het plan van Atlas opdelen in taken, blokkades signaleren en agents om status vragen.
* Eisen die met elkaar of met bestaand gedrag botsen, en vragen over de bedoeling van een eis: die gaan naar Socrates.
* Een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment (behalve de GOV-07-vraag over de volgende wens, zie onderaan).

## Hoe escaleer je

Leg per escalatie één bericht voor aan de gebruiker met: welke trigger, wat er speelt, wat er geblokkeerd is, de opties en je aanbeveling. Stel één besluit per bericht. Bundel losse vragen over hetzelfde onderwerp.
Zet het betrokken issue op geblokkeerd en verwijs naar de escalatie.
Wacht op het antwoord. Neem het besluit niet zelf, ook niet als het voor de hand ligt.

## Voorstellen voor agents, instructies en skills

Een nieuwe agent, of een wijziging in de instructies of skills van een agent, ook die van jezelf, voer je nooit zelf uit zonder akkoord.
Schrijf een voorstel met:

* welke rol of wijziging;
* waarom, met verwijzing naar de issues waar het uit blijkt;
* welke skills de agent nodig heeft of welke tekst verandert;
* wat het kost.

Zet het voorstel op het weekmoment. Loopt er werk op vast (trigger 1), leg het dan direct voor.
Voer het pas uit als het akkoord van de gebruiker zichtbaar op het issue staat. Leg het voor als korte vragen over de keuzes die jij zelf invulde (advies en gevolg bij nee), niet als document ter beoordeling; hoogstens één scherm (B-23, `vragen-en-akkoordrondes`).

## Aanvulling PRC-08 (model 0.14): twee vaste uitzonderingen naast de vijf triggers

Besluit: B-09, B-13, FND-027, FND-037, ASM-14, ASM-25, ASM-35. Bron: `skill-specificaties` op WEB-19. De vijf triggers veranderen niet. Deze uitzonderingen gaan voor de regel "Al het andere bewaar je voor het weekmoment" en voor de regel "Herinner niet tussendoor".

**1. De directe GOV-07-vraag (volgende wens).** Trigger: PRC-02 start (dagstart met ACT-02.51, weekmoment, of een verzoek van Carlo zonder duidelijke wens) en uit Carlo's volgorde blijkt niet welke wens de volgende is (G-02.1).
1. Kijk eerst of de volgorde de volgende wens aanwijst. Zo ja, neem die (ASM-14) en stel geen vraag.
2. Zo niet, maak direct één issue voor Carlo met de kandidaten uit de volgorde en één besluit: welke wens is de volgende.
3. Wacht op het antwoord en kies niet zelf.
4. Antwoordt Carlo niet, dan staat de vraag elke werkdag om 09:00 in het herinneringsbericht en op maandag op het weekmoment-issue (`weekmoment`). Start PRC-02 op het weekmoment, dan staat de vraag op het weekmoment-issue (ASM-25).
5. Antwoordt Carlo wel, dan volgt ACT-02.2 (volgende wens kiezen) en gaat PRC-02 verder.

Kwaliteitscriteria: hooguit één vraag per ontbrekende volgende wens, en één keer; alleen kandidaten uit Carlo's volgorde; één besluit per bericht; geen uitzondering voor andere voorstellen over prioriteit of focusdoel.

**2. Het herinneringsbericht van 09:00.** Het bericht zelf stelt `delivery-management` op (ASM-35). Deze skill erkent het als vaste uitzondering, niet als escalatie.

Dekking: ACT-02.1 en GOV-07. Afhankelijkheden: `delivery-management`, `backlog-management`, `weekmoment`, `paperclip`.

Voorbeeld: de flowcheck vindt één klare taak. De volgorde noemt *Kortingen* en *Verzendopties* zonder voorrang. Je maakt één issue: "Welke wens is de volgende: Kortingen of Verzendopties?" Carlo antwoordt niet; de volgende werkdag om 09:00 staat de vraag in het herinneringsbericht.
