---
name: regelbestanden-en-kwaliteitslat
description: Stelt CONSTRAINTS.md (kwaliteitslat en definition of done), CLAUDE.md en AGENTS.md van het klantproject op, of werkt ze bij. Gebruik bij slice 1 direct na het conventiebestand (`architect-conventions`), en bij een wens of slice met een nieuwe NFR of afspraak.
---

# Regelbestanden en kwaliteitslat

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
De bouwsessies van het project krijgen hun regels: `CONSTRAINTS.md` met de kwaliteitslat en de definition of done, een korte `CLAUDE.md`, en `AGENTS.md` met de werkregels voor de bouw. Elke afspraak staat op één plek:

| Bestand | Bevat |
| --- | --- |
| conventiebestand (`docs/architecture/`, `architect-conventions`) | de afspraak: codestijl, structuur, teststrategie, UI |
| `CONSTRAINTS.md` (root) | de kwaliteitslat en de definition of done per taak |
| `AGENTS.md` (root) | hoe een bouwsessie werkt, met verwijzingen naar de andere bestanden |
| `CLAUDE.md` (root) | de commands, de indeling van `docs/`, en verwijzingen met een vast leesmoment |

## Trigger
- Slice 1 bij het eerste ontwerp van een nieuw project: direct na `architect-conventions`, vóór het implementatieplan.
- Bijwerken: bij het bijwerken van het globale ontwerp of het ontwerp per slice, als een wens of slice een nieuwe NFR of afspraak meebrengt.

## Input
De goedgekeurde NFR's, het conventiebestand, het technisch ontwerp en de architectuurkeuze met de ADR's (daar komen de commands vandaan), en de bestaande `CLAUDE.md`, `AGENTS.md` en `CONSTRAINTS.md` als die er zijn.

## Output
De drie bestanden in de root van de klantrepo, en hun paden in je eindbericht.

## Werkwijze
1. **Lees de bestaande bestanden.** Bestaat een bestand al (bijvoorbeeld van de gebruiker), dan vul je het aan en vervang je niets. Wil je een bestaande regel wijzigen, of botst een bestaande regel met een goedgekeurde NFR, dan wordt dat een open vraag aan de gebruiker in je eindbericht (`vragen-en-akkoordrondes`), zodat de lat niet stilzwijgend zakt.
2. **`CONSTRAINTS.md`** met `constraint-driven-development`, zonder interview. Elke grens komt uit een goedgekeurde NFR (noem het ID); zonder NFR geldt de vloer van de skill (meten en vasthouden). Een ontbrekend getal dat ertoe doet, wordt een open vraag met advies. Neem de definition of done per taak op.
3. **`AGENTS.md`** met werkregels voor de bouw die niet aan één tool gebonden zijn:
   - Een taak verhuist van `docs/backlog/todo/` naar `in-progress/` en `done/` alleen door de gebruiker of zijn bouwsessie.
   - Een implementatievraag of een vraag over het ontwerp gaat naar Atlas.
   - Een vraag over een eis of paginabrief gaat naar Socrates.
   - Een nieuw component zonder goedgekeurd ontwerp is een vraag aan de ontwerper (nu de gebruiker).
   - Een ontwerpafwijking die een reviewer ziet, gaat naar Atlas.
   - De commands in `CLAUDE.md` zijn voorlopig; de eerste bouwsessie mag ze corrigeren, met een melding aan Atlas.

   Verwijs naar het conventiebestand en `CONSTRAINTS.md` in plaats van hun inhoud te herhalen.
4. **`CLAUDE.md`**, kort, met `context-engineering`:
   - de commands (bouwen, testen, starten), gemarkeerd als voorlopig: afgeleid uit de gekozen techniek; de eerste bouwsessie mag ze corrigeren, met een melding aan Atlas;
   - de indeling van `docs/`: gebruikersdocumentatie in `docs/user/`, de rest technisch;
   - onder een kop "Voor de bouw" deze drie zinnen, letterlijk, met het echte pad van het conventiebestand:
     - "Lees `AGENTS.md` bij de start van elke taak."
     - "Lees `<pad van het conventiebestand>` voordat je code schrijft."
     - "Lees `CONSTRAINTS.md` voordat je een taak afrondt."

   Gebruik geen imports (`@pad`): `CLAUDE.md` verwijst alleen. Staat er al een import van de gebruiker, laat die dan staan.
5. **Toets** de drie bestanden aan de kwaliteitscriteria. Klaar als elk criterium klopt en de paden en eventuele open vragen in je eindbericht staan.

## Kwaliteitscriteria
- Elke afspraak staat op één plek, volgens de tabel bij Doel.
- `CLAUDE.md` heeft geen nieuwe import, en elk bestand waarnaar hij verwijst heeft het vaste leesmoment uit stap 4.
- `CLAUDE.md` spreekt het voorwerk niet tegen: hij wordt ook in de hoofdsessie en waarschijnlijk bij Socrates en Atlas geladen. Documentlocaties en de indeling van `docs/` kloppen met die van het project.
- Elk getal in `CONSTRAINTS.md` is herleidbaar tot een NFR of tot de vloer van de skill.
- Een bestaande regel is aangevuld, niet vervangen; een gewenste wijziging, een ontbrekend getal of een botsing met een NFR staat als open vraag in je eindbericht.

## Controle
Geen eigen akkoord. Atlas-licht controleert de bestanden licht vóór het akkoord op het bouwcontract (`ontwerp-controle`, rij "`CONSTRAINTS.md`, `CLAUDE.md`, `AGENTS.md`").

## Afhankelijkheden
Eerst `architect-conventions`, dan deze skill. `vragen-en-akkoordrondes` (open vragen aan de gebruiker), `kort`, `constraint-driven-development` en `context-engineering` (zie "Regels bij algemene skills" in je instructies).

## Voorbeeld
NFR-07 zegt "pagina's laden binnen 2 seconden op 4G". `CONSTRAINTS.md`: "LCP ≤ 2,0 s op het profiel Slow 4G (NFR-07)". Er is geen NFR voor testdekking, dus de vloer: "dekking meten en niet laten dalen". `CLAUDE.md` noemt `npm test` als voorlopig command, `docs/user/` voor gebruikersdocumentatie, en onder "Voor de bouw" de drie leesmomenten, met `docs/architecture/conventions.md` als pad.
