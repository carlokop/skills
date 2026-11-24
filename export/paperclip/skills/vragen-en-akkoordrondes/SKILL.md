---
name: vragen-en-akkoordrondes
description: Gedeelde regels voor indienen en goedkeuren via een kaart, vragen en grill-sessies tussen agents, contextverslag, afkeuringen tellen en escaleren. Gebruik bij elk akkoord van Carlo, bij elke vraag tussen agents, bij een stap met een grill-moment (GS1 t/m GS4, GS9 t/m GS11, GS14) en bij een afkeuring.
---

# Vragen en akkoordrondes

Gedeelde skill voor Dr. Evil, Socrates, Atlas en Sentinel (en voor klantprojecten). Besluit: B-08/PRP-023 (maxima PRP-005, PRP-006), PRP-030 t/m PRP-032, PRP-036, PRP-040, PRP-041, B-15, B-16, ASM-26, ASM-37, ASM-40 t/m ASM-43, ASM-45, ASM-48, ASM-58, ASM-59. Bron: `skill-specificaties` op WEB-19.

## Doel
Eén plek voor vier onderdelen: indienen en goedkeuren (PRC-03), vragen en grill-sessies tussen agents (PRC-04), afkeuring (PRC-05) en de grill-sessie met Carlo bij de beginstappen (GS1, GS2, GS4, GS9, GS10, GS14).

## Waar hij bij hoort (21 stappen)
- Beginstappen van de grill-momenten: ACT-01.3, ACT-01.4, ACT-01.9, ACT-01.11, ACT-01.21, ACT-01.23, ACT-02.3, ACT-02.6, ACT-02.12, ACT-02.13.
- PRC-04: ACT-04.1, ACT-04.2, ACT-04.3, ACT-04.5, ACT-04.6, ACT-04.51, ACT-04.52, ACT-04.55, ACT-04.56.
- PRC-05: ACT-05.1, ACT-05.3.

## De grill-momenten
Een sessie komt waar context voor het eerst van de ene partij naar de andere gaat en nog niets is vastgelegd dat als contract kan dienen. Eén sessie per moment; die dekt ook de volgende stappen van dezelfde uitvoerder die op dezelfde context bouwen (ASM-40).

| Moment | Naam | Begint bij | Uitvoerder met | Waarover | Hoe |
| --- | --- | --- | --- | --- | --- |
| GS1 | bij de analyse | ACT-01.3 (dekt ook ACT-01.6, 01.26, 01.27, 01.54) | Socrates met Carlo | plan, bedrijf, domein, visie, projecttype, "nu" en "later", kern | vraagstappen ACT-01.4 / 01.5 |
| GS2 | bij de use cases | ACT-01.9 | Socrates met Carlo | use cases en acceptatiecriteria | vraagstappen ACT-01.4 / 01.5 |
| GS3 | bij de toets door Atlas | ACT-01.23 | Atlas met Socrates | genoeg om op te ontwerpen? | PRC-04 op het toets-issue |
| GS4 | bij de architectuurkeuze | ACT-01.11 | Atlas met Carlo | stack, hosting, budget, groei | vraagstappen ACT-01.21 / 01.22 |
| GS9 | bij analyse van wens | ACT-02.3 (dekt ook ACT-02.15) | Socrates met Carlo | eisen van de wens, ontwerpbehoefte | op het eigen issue |
| GS10 | bij use cases van wens | ACT-02.12 | Socrates met Carlo | use cases van de wens | op het eigen issue |
| GS11 | bij toets van wens | ACT-02.13 | Atlas met Socrates | use cases en brieven van de wens | PRC-04 op het toets-issue |
| GS14 | bij wijziging van architectuur | ACT-02.6, alleen als architectuur of profiel verandert (dekt ook ACT-02.55) | Atlas met Carlo | waarom de architectuur of het profiel verandert | op het eigen issue |

GS5, GS6, GS7, GS8, GS12, GS13 en GS15 zijn vervallen (B-16). Bij stappen van Carlo zelf, doorgeven en melden, controleren, tellen en poorten en het bijhouden van lijsten is geen vaste sessie. Komt daar toch een vraag op, dan gaat die via PRC-04 en is het een grill-sessie.

## Een kaart voor Carlo (B-23)
Besluit B-23 (Carlo, 2026-11-04), geldt voor alle agents en ook voor klantprojecten.
1. **Keuzes, geen documenten.** De kaart bevat korte vragen. Per vraag: één zin, jouw advies, en wat er gebeurt bij nee. Er is geen maximum aantal vragen.
2. **Volledig.** Elke keuze en elke aanname die je zelf invulde, komt als vraag op de kaart. Vóór indiening toetst een aparte **controle-agent** of dat volledig is: een aparte subagent van de maker, zoals bij `bpmn-modelcontrole` (geen nieuwe Paperclip-agent; besloten door Carlo, V2). Op de kaart staat alleen "volledig gecontroleerd", of wat er nog ontbreekt.
3. **Niet op de kaart of in berichten aan Carlo:** welke skills iets doen, bewijs, controlerondes, tellingen, revisies, en codes (GOV, ACT, PRC, ASM, FR en dergelijke) zonder uitleg. Zet een code er alleen bij als hij in gewone woorden is uitgelegd.
4. **Geen akkoord op weergaven** (pagina, overzicht, diagram) van inhoud die al is goedgekeurd. Je controleert ze wel. Wijkt een weergave af van de inhoud, dan wordt dat een vraag.
5. **Hoogstens één scherm** per bericht of kaart aan Carlo. De volledige documenten blijven bestaan, voor de agents en als naslag; verwijs ernaar met een link, plak ze niet.

De rondes- en afkeuringstelling (stap 9) en het contextverslag blijven intern: ze staan niet in wat Carlo leest.

## Trigger
Een producent dient een deliverable of pakket in (GOV-10, GOV-15, GOV-11, GOV-14); een agent heeft een vraag; een agent begint een stap met een grill-moment en heeft na het lezen open punten; of Carlo keurt een document af.

## Input
De deliverable of vraag, de context van de stap met de documenten waarop hij bouwt, en de geschiedenis van het issue.

## Output
Een ingediend document of pakket met een kaart met vragen per keuze; een vraag- of toets-issue bij de juiste ontvanger met de rondes; een bevestigd contextverslag (alleen als er iets besproken is); een telling van rondes zonder voortgang of afkeuringen per document; of een escalatie-issue voor Dr. Evil.

## Werkwijze
1. **Indienen (PRC-03, B-23).** Het document staat op het issue, voor de agents en als naslag. Carlo krijgt het niet ter beoordeling: hij krijgt een **kaart met korte vragen over de keuzes** die jij zelf invulde (zie "Een kaart voor Carlo" hieronder). Elk akkoord is een kaart (`request_item_verdicts`) op het issue, met één item per vraag. Geen decisions en geen approval-stage (PRP-040). Een akkoord op alle keuzes van een document telt als goedkeuring van dat document en zet de status op Goedgekeurd (besloten door Carlo, V1). **GOV-15** (richting) en **GOV-14** (paginaontwerp) hebben meer producenten: elke producent zet zijn eigen vragen op de kaart; Dr. Evil zet het pakket pas door als elke vraag een antwoord heeft (ASM-26, ASM-37). Een ontwerp dat Carlo zelf maakte staat niet op de kaart (ASM-28); dan staan alleen de vragen over de brieven erop. Het contextverslag staat niet op de kaart. Bij een wijziging van een goedgekeurd document hangt de kaart aan het voorstel, niet aan het geldende document (`documenten-bijwerken`). Een akkoord op alle vragen keurt het voorstel goed, en daarna voert de eigenaar het door.
2. **Begin van een stap met een grill-moment.** Lees eerst de input. Heb je daarna geen open punten, dan is er geen sessie, geen vraag en geen contextverslag (ASM-41).
3. **Vragen stellen (PRC-04).** Bepaal de ontvanger met de routeringstabel: eisen en paginabrieven → Socrates; ontwerp (technisch) → Atlas; volgorde en toewijzing → Dr. Evil; ontwerp van een pagina of patroon → de ontwerper (nu Carlo, rechtstreeks op het eigen issue, geen PRC-04; ASM-28) (ACT-04.1). Neo, Trace en Sentinel zijn ook vragers (CHG-033): een implementatievraag gaat naar Atlas (TL-07); een ontwerpafwijking die de reviewer ziet gaat naar Atlas (TL-09); een nieuw component zonder ontwerp gaat rechtstreeks naar de ontwerper (nu Carlo). Stel in elke ronde **alle vragen die nu te beantwoorden zijn**, genummerd en elk met een aanbevolen antwoord; feiten zoek je zelf op (ACT-04.2; V1). Maak een vraag-issue en zet je eigen werk op geblokkeerd. Een toets door Atlas loopt zo ook, als toets-issue (PRP-041).
4. **Beantwoorden en beslissen (ACT-04.3).** De ontvanger beantwoordt elke vraag en beslist alleen in zijn eigen vakgebied: Socrates over de bedoeling van de eisen, Atlas over het ontwerp, Dr. Evil over de opdeling van taken (V3). Raakt een antwoord een productkeuze of iets wat Carlo goedkeurde, dan stel je een wijzigingsverzoek of productvraag op (ACT-04.4, G-04.1) dat via GOV-12 naar Carlo gaat; agents vullen zo'n keuze niet samen in. Of een antwoord een wijziging of productkeuze vraagt (G-04.1), beslist de ontvanger (ASM-59).
5. **Beoordelen en tellen (ACT-04.5, 04.6, 04.51).** De vrager beoordeelt per punt of het beslist is en of de ronde voortgang had (minstens één punt beslist). Bij G-04.2 (nog open punten?) en G-04.51 (2 rondes zonder voortgang?) beslist de vrager (ASM-59). Zijn er open punten, dan volgt een volgende ronde op hetzelfde vraag- of toets-issue. Alleen een ronde **zonder** voortgang telt. Na 2 rondes achter elkaar zonder voortgang escaleert de vrager via Dr. Evil naar Carlo (ACT-04.52, GOV-08; V2). Reageert de ontvanger niet, dan is het een blokkade (PRC-06).
6. **Contextverslag (ACT-04.55, 04.56, G-04.52).** Zijn er geen open punten meer, dan stelt de vrager het document `contextverslag` op, op het issue waarop hij zijn stap doet (bij een vraag zijn eigen issue, bij de toets het toets-issue, bij Dr. Evil het issue waarop hij de taken maakt; ASM-42). Per sessie één sectie met: (1) wat vaststaat en de bron, (2) wat in de sessie is beslist en door wie, (3) wat naar Carlo ging (GOV-12) en de uitkomst, (4) de documenten met revisie. De ontvanger bevestigt met een comment op het vraag- of toets-issue, of vult aan. Dat de ontvanger de controleur is, is bewust: zijn bevestiging (ACT-04.56, G-04.52) is de controle, er komt geen aparte controleur bij (ASM-58). Bij G-04.52 beslist de ontvanger (ASM-59). Een aanvulling is een nieuwe ronde: "nee" bij G-04.52 gaat naar de telling (ACT-04.51); de vrager beoordeelt de aanvulling (ACT-04.5) en neemt hij haar over, dan is er voortgang (ASM-48). De volgende stap leest het verslag als input.
7. **Sessie met Carlo (GS1, GS2, GS4, GS9, GS10, GS14).** Via de bestaande vraagstappen (ACT-01.4, ACT-01.21) of in PRC-02 rechtstreeks op het eigen issue, in de vorm van `grilling` en met dezelfde regels. De laatste vraag is: "Klopt dit contextverslag?". Dat is **geen akkoord**. Met Carlo telt niemand rondes. Antwoordt hij niet, dan staat de vraag in het herinneringsbericht van 09:00 (B-13).
8. **Toets van Atlas (GS3, GS11).** Grill-sessie op het toets-issue; het is van Atlas, Socrates wacht op zijn eigen issue. Per toetsronde een nieuw toets-issue (het vorige staat op `done`); rondes binnen één toetsronde lopen op hetzelfde issue (ASM-45). Maximaal 2 toetsrondes (G-01.4, G-02.5). Hoe Socrates per ronde wordt gewekt is open (M-17).
9. **Afkeuringen tellen (PRC-05).** Tel afkeuringen per document, ook binnen een pakket. Bij de 3e afkeuring van een document stop je en meld je een escalatie aan Dr. Evil (ACT-05.3; PRP-006). In een pakket telt een document dat alleen wordt meegewerkt geen ronde; keur je het daarna af, dan telt dat wel (ASM-18).
10. **Na een escalatiebesluit** begint de telling opnieuw (ASM-11, ASM-48).

## Kwaliteitscriteria
- Een kaart bevat alleen vragen over keuzes, elk met één zin, advies en gevolg bij nee; een controle-agent heeft de volledigheid getoetst vóór indiening; het bericht past op één scherm (B-23).
- Na de 2e afgekeurde herziening van een document volgt een escalatie; in een vragenloop of grill-sessie na 2 rondes achter elkaar zonder voortgang ook.
- Elke vraag heeft één ontvanger en blokkeert het werk van de vrager.
- Elke ronde bevat alle vragen die nu te beantwoorden zijn, elk met een aanbevolen antwoord.
- Een opmerking zonder besluit telt niet als afkeuring (ASM-10).
- Elke sessie eindigt met een bevestigd contextverslag of een escalatie; zonder open punten geen sessie en geen verslag.
- Een productkeuze wordt niet door agents beslist.

## Tools en templates
De routeringstabel uit PRC-04; een indieningscomment van hoogstens één scherm; het sjabloon voor het contextverslag (vier onderdelen); voor elk akkoord een `request_item_verdicts`-kaart met één item per vraag.

## Afhankelijkheden
`paperclip` (blockers, kaarten), `escalation-management` (Dr. Evil neemt het over), `grilling` (de vorm van de sessie met Carlo). `grilling` zelf verandert niet: per ronde alle vragen waarvan de voorwaarden vaststaan, genummerd en elk met een aanbevolen antwoord; klaar als de project owner bevestigt dat er overeenstemming is. Contextverslag en telling komen uit deze skill.

## Voorbeeld
Carlo beantwoordt de vragen over het domeinmodel voor de derde keer met nee. Atlas herziet het niet opnieuw maar maakt een escalatie-issue voor Dr. Evil met de drie commentaren; Dr. Evil legt Carlo de opties voor (GOV-08). Voorbeeldvraag op een kaart: "Mag een klant meerdere adressen hebben? Advies: ja. Bij nee: één adres per klant en een extra adres vraagt een nieuwe klant."
Grill-sessie: Atlas toetst de use cases van de webshop (GS3) en stelt Socrates in ronde 1 vijf genummerde vragen, elk met een aanbeveling, bijvoorbeeld "1. Wat gebeurt er in UC-03 als de betaling mislukt? Aanbeveling: de bestelling blijft open en de klant ziet een foutmelding." Vraag 4 ("mag een klant korting krijgen?") is een productkeuze en gaat via GOV-12 naar Carlo. Zijn alle punten beslist, dan schrijft Atlas het contextverslag; Socrates bevestigt met een comment.
