---
name: vragen-en-akkoordrondes
description: Gedeelde regels voor indienen en goedkeuren via open vragen in het eindbericht, vragen en grill-sessies tussen agents, contextverslag, afkeuringen tellen en escaleren via de aanroeper. Gebruik bij elk akkoord van de gebruiker, bij elke vraag tussen agents, bij een stap met een grill-moment en bij een afkeuring.
---

# Vragen en akkoordrondes

Gedeelde skill voor Socrates en Atlas (en voor klantprojecten).

## Doel
Eén plek voor vier onderdelen: indienen en goedkeuren, vragen en grill-sessies tussen agents, afkeuring, en de grill-sessie met de gebruiker bij de beginstappen.

## Het mechanisme
Je werkt als subagent: je kunt de gebruiker en andere agents niets tussendoor vragen. Alles loopt via je eindbericht en de aanroeper (de hoofdsessie):
1. **De maker** zet de vragen in zijn eindbericht: genummerd, per vraag één zin, advies en wat er bij nee gebeurt, en stopt (status "wacht op antwoorden").
2. **De aanroeper** laat het werk eerst controleren door de lichte variant (socrates-licht / atlas-licht). De bevindingen gaan terug naar de maker tot de uitslag "volledig gecontroleerd" is.
3. **De aanroeper** stelt de vragen aan de gebruiker in een vragendialoog: hoogstens 4 per dialoog, de aanbevolen optie eerst.
4. **De aanroeper** geeft de antwoorden letterlijk terug aan de maker, met de datum, en meldt een akkoord expliciet.
5. **De maker** verwerkt de antwoorden en zet de status (`Goedgekeurd` alleen na dat expliciete akkoord).

Een vraag aan een andere agent loopt net zo: een **verzoek aan de ander** in je eindbericht; de aanroeper start de ander en geeft de uitkomst terug.

## De grill-momenten
Een sessie komt waar context voor het eerst van de ene partij naar de andere gaat en nog niets is vastgelegd dat als contract kan dienen. Eén sessie per moment; die dekt ook de volgende stappen van dezelfde uitvoerder die op dezelfde context bouwen.

| Moment | Uitvoerder met | Waarover | Dekt ook | Via |
| --- | --- | --- | --- | --- |
| bij de analyse (nieuw project) | Socrates met de gebruiker | plan, bedrijf, domein, visie, projecttype, "nu" en "later", kern | visie, paginalijst, kern | open vragen in het eindbericht |
| bij de use cases (nieuw project) | Socrates met de gebruiker | use cases en acceptatiecriteria | | open vragen in het eindbericht |
| bij de toets door Atlas (nieuw project) | Atlas met Socrates | genoeg om op te ontwerpen? | | verzoek aan de ander |
| bij de architectuurkeuze | Atlas met de gebruiker | stack, hosting, budget, groei | | open vragen in het eindbericht |
| bij analyse van een wens | Socrates met de gebruiker | eisen van de wens, ontwerpbehoefte | paginabrieven van de wens | open vragen in het eindbericht |
| bij use cases van een wens | Socrates met de gebruiker | use cases van de wens | | open vragen in het eindbericht |
| bij toets van een wens | Atlas met Socrates | use cases en brieven van de wens | | verzoek aan de ander |
| bij wijziging van architectuur, alleen als architectuur of profiel verandert | Atlas met de gebruiker | waarom de architectuur of het profiel verandert | het nieuwe profiel-ADR | open vragen in het eindbericht |

Bij stappen van de gebruiker zelf, doorgeven en melden, controleren, tellen en het bijhouden van lijsten is geen vaste sessie. Komt daar toch een vraag op, dan gaat die als vraag tussen agents (werkwijze 3) en is het een grill-sessie.

## Open vragen voor de gebruiker (akkoordvorm)
Geldt voor alle agents en ook voor klantprojecten.
1. **Keuzes, geen documenten.** De gebruiker krijgt korte vragen. Per vraag: één zin, jouw advies, en wat er gebeurt bij nee. Formuleer zo dat "ja" je advies aanneemt. Er is geen maximum aantal vragen; de aanroeper verdeelt ze over dialogen van hoogstens 4.
2. **Volledig.** Elke keuze en elke aanname die je zelf invulde, komt als vraag in je eindbericht. Vóór indiening laat de aanroeper je werk controleren door de lichte variant (socrates-licht / atlas-licht); bij de vragen staat alleen "volledig gecontroleerd", of wat er nog ontbreekt.
3. **Niet in de vragen of in berichten aan de gebruiker:** welke skills iets doen, bewijs, controlerondes, tellingen, revisies, en codes (FR, UC en dergelijke) zonder uitleg. Zet een code er alleen bij als hij in gewone woorden is uitgelegd.
4. **Geen akkoord op weergaven** (pagina, overzicht, diagram) van inhoud die al is goedgekeurd. Je controleert ze wel. Wijkt een weergave af van de inhoud, dan wordt dat een vraag.
5. **Hoogstens één scherm** per bericht aan de gebruiker. De volledige documenten blijven bestaan, voor de agents en als naslag; verwijs ernaar met het pad, plak ze niet.

De rondes- en afkeuringstelling (werkwijze 9) en het contextverslag blijven intern: ze staan niet in wat de gebruiker leest.

## Trigger
Een maker dient een document of pakket in (analysepakket, richting, technisch ontwerp, paginaontwerp); een agent heeft een vraag; een agent begint een stap met een grill-moment en heeft na het lezen open punten; of de gebruiker keurt een document af.

## Input
Het document of de vraag, de context van de stap met de documenten waarop hij bouwt, en de eerdere antwoorden die de aanroeper teruggaf.

## Output
Een ingediend document of pakket met genummerde open vragen per keuze in het eindbericht; een verzoek aan de juiste ontvanger met de rondes; een bevestigd contextverslag (alleen als er iets besproken is); een telling van rondes zonder voortgang of afkeuringen per document; of een escalatie aan de aanroeper.

## Werkwijze
1. **Indienen.** Het document staat als bestand op de documentlocatie van het project, voor de agents en als naslag; vermeld het pad in je eindbericht. De gebruiker krijgt het niet ter beoordeling: hij krijgt **korte vragen over de keuzes** die jij zelf invulde (zie "Open vragen voor de gebruiker"). Elk akkoord is een reeks genummerde open vragen in je eindbericht, één per keuze. Een akkoord op alle vragen van een document is het akkoord op dat document: de aanroeper meldt dat expliciet en dan zet je de status op `Goedgekeurd`. Het akkoord op de **richting** en op het **paginaontwerp** heeft meer makers: elke maker zet zijn eigen vragen in zijn eindbericht; de aanroeper meldt het pakket pas als goedgekeurd als elke vraag een antwoord heeft. Een ontwerp dat de gebruiker zelf maakte krijgt geen vragen; dan gaan alleen de vragen over de brieven mee. Het contextverslag hoort niet bij de vragen. Bij een wijziging van een goedgekeurd document horen de vragen bij het voorstel, niet bij het geldende document (`documenten-bijwerken`). Een akkoord op alle vragen keurt het voorstel goed, en daarna voert de eigenaar het door.
2. **Begin van een stap met een grill-moment.** Lees eerst de input. Heb je daarna geen open punten, dan is er geen sessie, geen vraag en geen contextverslag.
3. **Vragen stellen.** Bepaal de ontvanger met de routeringstabel: eisen en paginabrieven → Socrates; ontwerp (technisch) → Atlas; volgorde → de gebruiker; ontwerp van een pagina of patroon → de ontwerper (nu de gebruiker), als open vraag in je eindbericht. Developers, testers en reviewers zijn ook vragers: een implementatievraag gaat naar Atlas; een ontwerpafwijking die de reviewer ziet gaat naar Atlas; een nieuw component zonder ontwerp gaat naar de ontwerper (nu de gebruiker). Stel in elke ronde **alle vragen die nu te beantwoorden zijn**, genummerd en elk met een aanbevolen antwoord; feiten zoek je zelf op. Zet ze als verzoek aan de ontvanger in je eindbericht en stop (status "wacht op antwoorden"); de aanroeper start de ontvanger en geeft de antwoorden terug. Een toets door Atlas loopt zo ook.
4. **Beantwoorden en beslissen.** De ontvanger beantwoordt elke vraag en beslist alleen in zijn eigen vakgebied: Socrates over de bedoeling van de eisen, Atlas over het ontwerp. Raakt een antwoord een productkeuze of iets wat de gebruiker goedkeurde, dan stel je een wijzigingsverzoek of productvraag op, als open vraag voor de gebruiker in je eindbericht; agents vullen zo'n keuze niet samen in. Of een antwoord een wijziging of productkeuze vraagt, beslist de ontvanger.
5. **Beoordelen en tellen.** De vrager beoordeelt per punt of het beslist is en of de ronde voortgang had (minstens één punt beslist). Of er nog open punten zijn en of er 2 rondes zonder voortgang waren, beslist de vrager. Zijn er open punten, dan volgt een volgende ronde: een nieuw verzoek via de aanroeper. Alleen een ronde **zonder** voortgang telt. Na 2 rondes achter elkaar zonder voortgang escaleert de vrager via de aanroeper naar de gebruiker: in zijn eindbericht de open punten, beide standpunten en zijn advies. Reageert de ontvanger niet, dan is het een blokkade: meld het aan de aanroeper (status "geblokkeerd").
6. **Contextverslag.** Zijn er geen open punten meer, dan stelt de vrager het contextverslag op, als bestand `contextverslag.md` op de documentlocatie van het project. Per sessie één sectie met: (1) wat vaststaat en de bron, (2) wat in de sessie is beslist en door wie, (3) wat naar de gebruiker ging en de uitkomst, (4) de documenten met versie. De ontvanger bevestigt het verslag of vult aan: de vrager vraagt dat in zijn eindbericht, de aanroeper legt het de ontvanger voor en geeft het antwoord terug. Dat de ontvanger de controleur is, is bewust: zijn bevestiging is de controle, er komt geen aparte controleur bij. Of het verslag klopt, beslist de ontvanger. Een aanvulling is een nieuwe ronde: een "nee" telt mee in de telling (werkwijze 5); de vrager beoordeelt de aanvulling en neemt hij haar over, dan is er voortgang. De volgende stap leest het verslag als input.
7. **Sessie met de gebruiker.** In de vorm van `grilling` en met dezelfde regels. Als subagent bereid je de ronde voor: alle vragen die nu te beantwoorden zijn, genummerd, elk met een aanbevolen antwoord, in je eindbericht; de aanroeper stelt ze. De laatste vraag is: "Klopt dit contextverslag?". Dat is **geen akkoord**. Met de gebruiker telt niemand rondes. Antwoordt hij niet, dan blijft je status "wacht op antwoorden".
8. **Toets van Atlas.** Grill-sessie van Atlas met Socrates; Socrates wacht tot de aanroeper hem de uitkomst teruggeeft. Elke toetsronde is een nieuwe opdracht aan Atlas; rondes binnen één toetsronde lopen in dezelfde opdracht (de aanroeper hervat dezelfde Atlas). Maximaal 2 toetsrondes; daarna beslist de gebruiker. De aanroeper hervat Socrates per ronde met de opmerkingen van Atlas.
9. **Afkeuringen tellen.** Tel afkeuringen per document, ook binnen een pakket. Bij de 3e afkeuring van een document stop je en meld je een escalatie aan de aanroeper, die de gebruiker de opties voorlegt. In een pakket telt een document dat alleen wordt meegewerkt geen ronde; keur je het daarna af, dan telt dat wel.
10. **Na een escalatiebesluit** begint de telling opnieuw.

## Kwaliteitscriteria
- De open vragen gaan alleen over keuzes, elk met één zin, advies en gevolg bij nee; de lichte variant heeft de volledigheid gecontroleerd vóór indiening; het bericht past op één scherm.
- Na de 2e afgekeurde herziening van een document volgt een escalatie; in een vragenloop of grill-sessie na 2 rondes achter elkaar zonder voortgang ook.
- Elke vraag heeft één ontvanger en blokkeert het werk van de vrager.
- Elke ronde bevat alle vragen die nu te beantwoorden zijn, elk met een aanbevolen antwoord.
- Een opmerking zonder besluit telt niet als afkeuring.
- Elke sessie eindigt met een bevestigd contextverslag of een escalatie; zonder open punten geen sessie en geen verslag.
- Een productkeuze wordt niet door agents beslist.

## Tools en templates
De routeringstabel uit werkwijze 3; een eindbericht van hoogstens één scherm; het sjabloon voor het contextverslag (vier onderdelen); voor elk akkoord genummerde open vragen, één per keuze.

## Afhankelijkheden
`grilling` (de vorm van de sessie met de gebruiker). `grilling` zelf verandert niet: per ronde alle vragen waarvan de voorwaarden vaststaan, genummerd en elk met een aanbevolen antwoord; klaar als de gebruiker bevestigt dat er overeenstemming is. Contextverslag en telling komen uit deze skill.

## Voorbeeld
De gebruiker beantwoordt de vragen over het domeinmodel voor de derde keer met nee. Atlas herziet het niet opnieuw maar meldt in zijn eindbericht een escalatie aan de aanroeper, met de drie afwijzingen; de aanroeper legt de gebruiker de opties voor. Voorbeeldvraag: "Mag een klant meerdere adressen hebben? Advies: ja. Bij nee: één adres per klant en een extra adres vraagt een nieuwe klant."
Grill-sessie: Atlas toetst de use cases van de webshop en stelt Socrates in ronde 1 vijf genummerde vragen, elk met een aanbeveling, bijvoorbeeld "1. Wat gebeurt er in UC-03 als de betaling mislukt? Aanbeveling: de bestelling blijft open en de klant ziet een foutmelding." Vraag 4 ("mag een klant korting krijgen?") is een productkeuze en gaat via de aanroeper naar de gebruiker. Zijn alle punten beslist, dan schrijft Atlas het contextverslag; Socrates bevestigt het via de aanroeper.
