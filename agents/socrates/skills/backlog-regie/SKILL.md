---
name: backlog-regie
description: Werk van de hoofdsessie rond het backlog en het ritme van een klantproject: werkpakketten van Atlas omzetten in taak- en epicbestanden in docs/backlog/, de vaste controles en "backlog gereed", de uitbreidingslijst, de stand van de keten, en het ritme (weekmoment, dagstart, inhaalcheck). Gebruik bij het openen of hervatten van de sessie van een klantproject, na het akkoord op een bouwcontract, op het weekmoment en bij een verzoek om een volgende slice of wens.
---

# Backlog-regie

Deze skill is voor **de hoofdsessie** van een klantproject, naast `regie`. `regie` stuurt de keten van Socrates en Atlas; deze skill doet het werk dat de hoofdsessie zelf uitvoert: het backlog, de stand en het ritme. Je beslist niets namens de gebruiker en je bouwt niets.

> De paden zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## De bestanden

| Bestand | Wat | Wie schrijft |
| --- | --- | --- |
| `docs/stand-van-de-keten.md` | de stand van de keten (zie hieronder) | alleen de hoofdsessie |
| `docs/backlog/todo/`, `in-progress/`, `done/` | per taak één bestand, per slice één epic-bestand; de map is de status | de hoofdsessie maakt bestanden in `todo/`; alleen de gebruiker (of zijn bouwsessie) verplaatst ze |
| `docs/uitbreidingslijst.md` | later-pagina's uit de paginalijst en wensen van de gebruiker, in zijn volgorde | de hoofdsessie, de volgorde bepaalt de gebruiker |

**De stand** heeft zes secties:
- **Lopende stap:** proces, stap, maker, datum.
- **Akkoorden:** per akkoord de datum, het document met versie, de letterlijke vragen en antwoorden van de gebruiker, en of er een nacontrole was. Dit is het bewijs van een akkoord.
- **Rondes:** per controle of vragenloop de rondes, met of zonder voortgang.
- **Afkeuringen:** per document het aantal.
- **Blokkades:** reden, eigenaar, eerste of tweede melding.
- **Doorloop:** de lopende doorloop van het backlog per slice (hoogstens één tegelijk), en de datum van het laatste weekmoment.

Atlas houdt daarnaast `STATUS.md` voor zijn eigen documenten. Bij een verschil is de stand leidend. De agents lezen de stand; alleen jij schrijft erin. Werk hem bij na elke stap die een sectie raakt, niet aan het eind van de dag.

## Bij het openen of hervatten van de sessie

Doe dit eerst, vóór ander werk:

1. **Lees de stand.** Ontbreekt `docs/stand-van-de-keten.md`, maak hem dan aan met de zes secties.
2. **Controleer de geplande taak van het weekmoment.** Bekijk de geplande taken (in Claude Code: `CronList`). Ontbreekt de taak "weekmoment" (maandag 12:00 Nederlandse tijd), zet hem dan opnieuw aan (`CronCreate`, met als opdracht: voer het weekmoment uit volgens `backlog-regie`) en meld dat aan de gebruiker. Een geplande taak vuurt alleen in een open sessie als Claude niets doet, en haalt een gemist moment niet in.
3. **Inhaalcheck.** Is er sinds de datum van het laatste weekmoment in de stand een maandag 12:00 voorbijgegaan, dan is het weekmoment gemist. Meld dat en vraag de gebruiker of het alsnog moet; voer het alleen uit bij ja. Staat er nog geen datum, dan is er niets gemist.
4. **Dagstart** (zie hieronder).

Klaar als de stand gelezen is, de taak van het weekmoment bestaat, een gemist weekmoment gemeld is en de dagstart is gedaan.

## Dagstart

1. **Tel** de taakbestanden van de lopende slice in `docs/backlog/todo/` en `docs/backlog/in-progress/`. Epic-bestanden tellen niet mee.
2. **Bij 10 of minder** start je een doorloop voor de volgende slice (zie "Volgende slice of wens"), tenzij er al een doorloop loopt.
3. **Meld** in hoogstens één scherm wat op de gebruiker wacht: open vragen, akkoorden, escalaties en blokkades, uit de stand, in gewone woorden.

Klaar als de telling gedaan is, een doorloop zo nodig gestart is en de melding gegeven is.

## Weekmoment

Uitgevoerd door de geplande taak op maandag 12:00, of als de gebruiker een gemist weekmoment alsnog wil.
1. Ga de volgorde na: het sliceplan, de uitbreidingslijst en wat er loopt.
2. Meld hoe lang uitbreidingen op Atlas wachten. Dat is een melding, geen besluit.
3. Start een doorloop voor de volgende slice of wens als er geen loopt, ook boven de drempel van de dagstart.
4. Zet de datum van het weekmoment in de stand.

Klaar als de datum in de stand staat.

Komen weekmoment en dagstart samen, dan start alleen de eerste een doorloop; de tweede ziet dat er al een loopt.

## Volgende slice of wens

1. **Loopt er al een doorloop**, dan start er niets. Een verzoek van de gebruiker zet je bovenaan de uitbreidingslijst; meld dat.
2. **Kies** de volgende slice uit het goedgekeurde sliceplan. Is het plan leeg, neem dan de bovenste wens van de uitbreidingslijst, of de wens uit het verzoek van de gebruiker.
3. **Is dat niet duidelijk**, of is er niets meer, vraag de gebruiker dan om een keuze, met "niets" als een van de antwoorden. Bij "niets" eindigt de doorloop zonder backlog. Antwoordt hij niet, dan wacht de doorloop en noemt de dagstart de open vraag.
4. Leg de doorloop vast in de stand en geef de slice of wens door volgens `regie`.

Klaar als de doorloop in de stand staat en Atlas (of bij een wens Socrates) is gestart, of als de gebruiker "niets" koos.

## Uitbreidingslijst

- Na het akkoord op het sliceplan van een nieuw project: zet de later-pagina's uit de paginalijst en de eigen wensen van de gebruiker op de lijst.
- Een nieuwe wens van de gebruiker zet je op de lijst. De volgorde bepaalt hij; jij wijzigt inhoud en volgorde niet.
- Na het goedgekeurde backlog van een wens: zet die wens op afgehandeld en voeg de nieuwe later-pagina's toe.

Per regel: de wens of pagina, de reden "later" en een verwijzing naar de paginalijst. De lijst heeft geen controleur; de inhoud en de volgorde zijn van de gebruiker.

Klaar als elke later-pagina en elke wens van de gebruiker op de lijst staat.

## Na het akkoord op een bouwcontract

### 1. Vaste controles
Op het goedgekeurde bouwcontract, de werkpakketten en het OpenAPI-bestand:
1. elk werkpakket verwijst naar een eis, use case of acceptatiecriterium;
2. er staat geen nieuwe eis of scope in;
3. de revisie van het OpenAPI-bestand is gelijk aan die in het goedgekeurde contract: de commit-hash bovenaan de leesbare versie is die van de laatste commit die het OpenAPI-bestand wijzigde (niet bij een CMS-project zonder API).

Slaagt een controle niet:
- (1) terug naar Atlas voor het implementatieplan;
- (2) een vraag via de vragenloop; een nieuwe eis is een wijzigingsverzoek aan de gebruiker;
- (3) Atlas maakt een nieuwe leesbare versie en beslist of de wijziging blijft; daarna gaat het contract opnieuw langs het akkoord.

Na 2 rondes, of als (3) voor dezelfde slice een tweede keer faalt, leg je het aan de gebruiker voor. Klaar als alle drie de controles slagen.

### 2. Backlog-items maken
Per taak die je uit een werkpakket maakt één bestand in `docs/backlog/todo/`, met de naam `<slice>-<nr>-<korte-titel>.md` (bijvoorbeeld `S01-003-inlogpagina.md`). Het bestand begint met:

```markdown
# <titel>

- Slice: S01
- Werkpakket: <ID, naam en pad van het implementatieplan>
- Paginabrief: <pad of ID, of "n.v.t." bij een taak zonder pagina>
- Paginatype: <uit het plan, of "n.v.t." bij een taak zonder pagina>
- Opruimen vanaf: <trigger of datum uit het plan; alleen bij een opruimtaak>
- Acceptatiecriteria: <AC-ID's>
- Afhankelijkheden: <taaknummers of "geen">
- Lees eerst: CLAUDE.md, AGENTS.md, <pad van het conventiebestand>, CONSTRAINTS.md
```

Werkpakket, brief, paginatype, het opruimmoment en de acceptatiecriteria komen uit het plan van Atlas; nummer en titel geef jij. Een opruimtaak haalt na een breaking change het oude weg; neem het moment letterlijk over uit het plan. De afhankelijkheden komen uit het plan: de taken van de werkpakketten waarvan dit pakket afhangt. De status staat alleen in de map, niet in het bestand. Maak de mappen `todo/`, `in-progress/` en `done/` aan als ze ontbreken.

Per slice één epic-bestand `<slice>-epic-<korte-titel>.md` in `todo/`, met het doel van de slice en de lijst van zijn taken.

Is een werkpakket onduidelijk, stel Atlas dan een vraag via de vragenloop (`vragen-en-akkoordrondes`); jij bent dan de vrager.

### 3. Backlog gereed
Klaar als:
- elk taakbestand de velden hierboven heeft;
- het epic alle taken noemt;
- elk werkpakket door taken gedekt is;
- elke paginataak een paginabrief en een paginatype noemt, en elke opruimtaak "Opruimen vanaf";
- bij slice 1 het conventiebestand, CONSTRAINTS.md, CLAUDE.md en AGENTS.md bestaan.

Daarna laat je de items toetsen door Atlas en volgt het akkoord op het backlog (`regie`).

### 4. Afsluiten
Na het akkoord op het backlog: werk de uitbreidingslijst bij en sluit de doorloop af in de stand. Klaar als de doorloop in de stand als afgesloten staat.

## Grenzen

- Je maakt bestanden alleen in `todo/`. De gebruiker (of zijn bouwsessie) verplaatst ze naar `in-progress/` als de bouw begint en naar `done/` na de merge, en ook het epic als al zijn taken in `done/` staan.
- Slice, wens, volgorde en productkeuzes legt de gebruiker vast; jij stelt voor en vraagt.
- De backlog-items krijgen een tweede lezer (Atlas). Je overige werk hier (vaste controles, uitbreidingslijst, stand en ritme) heeft bewust geen tweede lezer.
