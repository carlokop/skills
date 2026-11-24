---
name: weekmoment
description: Zet elke maandagochtend het weekmoment-issue klaar voor de gebruiker (afname, top 5, retro, focusdoel) en verwerk de uitkomst. Gebruik bij de wekelijkse routine en wanneer de gebruiker het weekmoment-issue heeft afgehandeld.
---

***

## Weekmoment

Het weekmoment is geen overleg, maar één issue dat de gebruiker op een eigen moment afhandelt. Jij stelt voor, de gebruiker beslist.
Er zijn geen sprints: geen vaste set werk, geen capaciteitstoezegging en geen velocity.

## Klaarzetten (maandagochtend)

Maak één issue "Weekmoment <jaar>-W<weeknummer>", toegewezen aan de gebruiker. Bestaat het voor deze week al, werk het dan bij en maak geen tweede.
Bepaal eerst de stand met `delivery-management`. Zet daarna op het issue, in deze volgorde:

1. **Afname**: per item in "Wacht op afname" een eigen kaart om goed te keuren of terug te sturen. Verwijs naar het issue en naar de uitkomst van `quality-gates`.
2. **Prioriteren**: een voorstel voor de top 5 van de backlog, met per item één regel waarom. Neem alleen issues op die klaar zijn om op te pakken (`backlog-management`), of zeg wat er ontbreekt.
3. **Retro**: wat vastzat en waarom, met een of twee lessen en een of twee retrovragen aan de gebruiker. Baseer je op de issues. Geef geen oordeel over agents.
4. **Focusdoel**: een voorstel voor de komende week, in één zin. Het geeft richting en is geen toezegging.
5. **Limieten**: de huidige limieten en, alleen als daar aanleiding voor is, een voorstel om ze bij te stellen.

Gebruik kaarten, zodat de gebruiker per punt kan kiezen. Hou het weekmoment-issue op hoogstens één scherm en laat codes, tellingen en bewijs eruit; verwijs met een link (B-23). Een standaardkeuze op een kaart is geen akkoord.
Houd het kort. Verwijs naar issues en herhaal ze niet. Vraag niet opnieuw naar besluiten die al genomen zijn.
Is het weekmoment-issue van vorige week nog niet afgehandeld, neem de open punten dan over in het nieuwe issue en verwijs naar het oude.

## Tot de gebruiker reageert

Het werk loopt door binnen de limieten. De bestaande volgorde van de backlog en het vorige focusdoel blijven gelden.
Herinner de gebruiker niet tussendoor, behalve met het herinneringsbericht van 09:00 (zie de aanvulling onderaan). Dringende zaken gaan alleen via de triggers in `escalation-management`.
Neem niet af, wijzig de volgorde niet en kies geen focusdoel namens de gebruiker.

## Verwerken

Verwerk de uitkomst zodra de gebruiker heeft gereageerd:

* **Afname**: leg per item de uitkomst vast op het issue. Teruggestuurd werk gaat met de opmerking van de gebruiker terug naar de eigenaar. Sluit zelf geen issues.
* **Prioriteit**: zet de backlog in de volgorde die de gebruiker heeft gekozen.
* **Focusdoel**: leg het vast op het issue en in `para-memory-files`.
* **Limieten**: zijn ze bijgesteld, leg de nieuwe waarden vast in `para-memory-files`. `delivery-management` gebruikt ze vanaf dan.
* **Lessen**: zet ze als verbeteractie op de backlog. Gaat een les over een nieuwe agent of over instructies of skills, schrijf dan een voorstel volgens `escalation-management`. Wijzig niets zelf.

Zet tot slot een korte comment op het weekmoment-issue met wat je hebt verwerkt.
Plan geen live overleg. Wijzig niets in de repo.

## Aanvulling PRC-08 (model 0.14): maandag 04:00, open GOV-07-vraag en herinnering

Besluit: B-09, B-13, ASM-23, ASM-24, ASM-25, ASM-32, ASM-33, ASM-35. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor stappen hierboven die er anders over zeggen.

- Het weekmoment wordt klaargezet door de routine *Weekmoment klaarzetten*, maandag 04:00 Nederlandse tijd (ASM-32). Op dat moment start ook PRC-02, tenzij er voor het project al een doorloop loopt (G-02.8, ASM-33).
- **Open GOV-07-vraag.** Zoek bij het klaarzetten of er een open vraag over de volgende wens staat (`escalation-management`). Zo ja, zet er één herinnering voor op het weekmoment-issue, met een verwijzing naar het vraag-issue en de kandidaten; stel de vraag niet opnieuw. Is ze al beantwoord, neem dan niets op. Antwoordt Carlo, dan volgt ACT-02.2 (volgende wens kiezen). Blijft ze open, dan gaat ze mee naar het volgende weekmoment-issue; tot dan start PRC-02 niet.
- **Herinneringsbericht van 09:00.** Het bericht stelt `delivery-management` op; jij zorgt dat het als comment op het lopende weekmoment-issue komt (ASM-35). Het is geen tweede kanaal. Daarbuiten herinner je niet tussendoor.
- **Wachttijd van uitbreidingen op Atlas (ASM-23).** Meld op het weekmoment-issue hoe lang elke uitbreiding op Atlas wacht. Geen besluit, een melding.
- Kwaliteitscriteria: één herinnering aan de open vraag per weekmoment-issue; geen nieuwe vraag en geen nieuwe kandidaten; de rest van de skill (afname, top 5, retro, focusdoel, limieten) verandert niet.
