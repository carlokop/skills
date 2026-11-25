# Vragen aan Carlo, ronde 2 (procesmodellering), model 1.0.8 (vraag 1-17) en 1.0.10 (vraag 18-21)

| | |
| --- | --- |
| Datum | 2026-11-25 |
| Doel | De letterlijke vraagteksten, zodat Socrates-licht ze kan toetsen. Carlo ziet alleen de vragen, niet dit bestand en niet de tabel onderaan. |
| Akkoord | Vraag 1 t/m 17 samen vormen het akkoord op ronde 2 en op het voorstel CHG-042. "Ja" neemt telkens het advies aan. |
| Volgorde | Blokkerend: eerst de werking van de herbruikbare subprocessen (1-6), dan de starts en het einde van een doorloop (7-10), dan de controles (11-12), dan de plekken in de klantrepo (13-15), dan de namen (16). Vraag 17 kwam later en staat achteraan, omdat vraag 1 t/m 4 al gesteld worden. Vraag 18 t/m 21 kwamen uit de verwerking van de antwoorden: eerst de backlog (18-20), dan de namen (21). |
| Dialogen | Hoogstens 4 per dialoog: 1-4, 5-8, 9-12, 13-16, 17, 18-21. |
| Controle | Versie 1.0.8 is volledig gecontroleerd door Socrates-licht. |
| Uitkomst 1 t/m 17 | Gesteld en beantwoord op 2026-11-25 (B-44). Anders dan het advies: vraag 3 (met nacontrole), 6 (nee: wijzigingsverzoek), 10 (nee: alleen melden), 13 en 14 (eigen antwoord: map `docs/backlog/` met één bestand per taak of epic, in de statusmappen todo, in-progress en done). |
| Nieuw: 18 t/m 21 | Keuzes die ontstonden bij het verwerken van de antwoorden (model 1.0.9). Socrates-licht heeft de verwerking nagecontroleerd (2026-11-25). Daarna zijn vraag 19 (wie het epic naar done verplaatst) en vraag 20 (alleen naam en inhoud) aangepast in 1.0.10 (CHG-047). Vraag 18 t/m 21 samen vormen het akkoord op de rest van ronde 2. Dialoog: 18-21. |
| Uitkomst 18 t/m 21 | Gesteld met de tekst van 1.0.10 en beantwoord op 2026-11-25 (B-45). Alle vier volgens het advies. Vraag 20 vroeg naar twee dingen (naam en inhoud); "Ja, zo" geldt voor beide, en ronde 3 splitst zulke vragen. Ronde 2 is daarmee Goedgekeurd (2026-11-25, Carlo, model 1.0.11). |

## Dialoog 1

1. Wordt de controle door de lichte varianten de eerste stap van elke akkoordpoort, zodat die controle op één plek in het model staat in plaats van bij elke poort apart?
   - Advies: ja, dan werkt elke poort hetzelfde.
   - Bij nee: de controle wordt een eigen stap vóór elke poort in de twee hoofdprocessen.
2. Leg ik het aan je voor als de controle twee rondes achter elkaar geen enkele bevinding heeft opgelost?
   - Advies: ja. Rondes waarin wel iets wordt opgelost, tellen niet mee. In ronde 1 loste elke controleronde iets op, dus daar was het niet bij jou gekomen.
   - Bij nee: geef een andere regel of een ander maximum.
3. Is een poort akkoord als je alle vragen hebt beantwoord, ook als je bij een of meer vragen het advies niet volgde?
   - Advies: ja, zo is ronde 1 ook verwerkt.
   - Bij nee: elk ander antwoord dan het advies telt als afkeuring. Het document gaat dan terug naar de maker om het te herzien, en blijft het afgekeurd worden, dan leg ik het aan je voor.
4. Wordt een nieuwe keuze die ontstaat bij het verwerken van je antwoorden een nieuwe vraag aan jou, en geen afkeuring?
   - Advies: ja, je hebt het document dan niet afgewezen.
   - Bij nee: zo'n nieuwe keuze telt als afkeuring van het document.

## Dialoog 2

5. Lopen ook de vragen aan jou en de grill-sessies met jou via het gewone vragensubproces?
   - Advies: ja, dan is er één werkwijze voor alle vragen. Met jou worden, zoals nu al, geen rondes geteld.
   - Bij nee: vragen aan jou worden weer eigen stappen in elk proces, zoals in het oude model.
6. Als je antwoord op een vraag iets verandert wat je al hebt goedgekeurd, geldt dat antwoord dan meteen als je akkoord op die wijziging, mits de vraag dat vooraf zei?
   - Advies: ja, anders keur je hetzelfde twee keer goed. De controle door de lichte variant gebeurt dan achteraf: de agent voert de wijziging door en laat haar controleren. Levert dat een nieuwe keuze op, dan krijg je daarover een nieuwe vraag.
   - Bij nee: de agent schrijft eerst een wijzigingsverzoek. Dat wordt vooraf gecontroleerd, en je keurt het apart goed.
7. Start slice 1 direct na je akkoord op het voorlopige sliceplan?
   - Advies: ja, dan gaat er geen tijd verloren tussen ontwerp en eerste backlog.
   - Bij nee: slice 1 start pas bij de volgende opening van de sessie, het weekmoment of jouw verzoek.
8. Houdt de hoofdsessie in de klantrepo een uitbreidingslijst bij met de later-pagina's en je wensen, in jouw volgorde, waaruit de volgende wens komt als het plan leeg is?
   - Advies: ja, zo werkte het oude model ook.
   - Bij nee: alleen jouw verzoek start een nieuwe wens.

## Dialoog 3

9. Kun je bij de keuze van de volgende slice of wens ook "niets" antwoorden, zodat de doorloop dan zonder backlog stopt?
   - Advies: ja. Antwoord je niet, dan wacht de doorloop en meldt de dagstart de open vraag.
   - Bij nee: de doorloop wacht tot je een slice of wens kiest.
10. Voert de inhaalcheck een gemist weekmoment één keer alsnog uit, ook als er meer weken zijn gemist?
    - Advies: ja, één keer is genoeg om de volgorde na te gaan en een slice te starten.
    - Bij nee: de inhaalcheck meldt alleen wat er gemist is, en jij beslist.
11. Vervalt de flowlimiet, ook al kan het weekmoment dan een slice toevoegen terwijl er al meer dan 10 items open staan?
    - Het gaat om: een maximum aan open backlog-items; daarboven komt er geen nieuwe slice bij.
    - Advies: ja, je keurt elk nieuw backlog toch zelf goed en bouwt het zelf.
    - Bij nee: geef het maximum; dan start ook het weekmoment geen slice boven dat aantal.
12. Leg ik een blokkade aan je voor als dezelfde blokkade een tweede keer terugkomt?
    - Advies: ja, anders kan het oplossen zich eindeloos herhalen.
    - Bij nee: geef een andere regel voor wanneer een blokkade naar jou gaat.

## Dialoog 4

13. Staat het backlog in `docs/backlog.md`, tenzij de projectregels een andere plek noemen?
    - Advies: ja, één vast bestand is makkelijk te vinden en bij te werken.
    - Bij nee: geef de plek die je wilt.
14. Heeft het backlog per slice een tabel met per item: nummer, titel, werkpakket, paginabrief, acceptatiecriteria, afhankelijkheden, en status open of klaar?
    - Advies: ja. Werkpakket, paginabrief, acceptatiecriteria en afhankelijkheden komen uit het plan van Atlas; nummer, titel en status vult de hoofdsessie in.
    - Bij nee: geef de vorm die je wilt.
15. Zet je de export van het design systeem en de ontwerpen in `docs/design/`, per aanlevering in een map met de datum, tenzij de projectregels iets anders zeggen?
    - Advies: ja, dan vinden de agents altijd de vaste versie.
    - Bij nee: geef de plek die je wilt.
16. Ga je akkoord met de nieuwe en gewijzigde namen van de stappen en beslispunten?
    - Gewijzigd zijn vooral de namen van stappen die door het wegvallen van Dr. Evil en Paperclip veranderden, zoals "Opdracht vastleggen en doorgeven aan de analist" en "Backlog-items maken uit de werkpakketten".
    - Nieuw zijn vooral de stappen van de controle, de vragendialoog en het ritme.
    - Het vragensubproces heet dan "vragenloop en grill-sessie" in plaats van "vragenloop en grill-sessie tussen agents", omdat ook de vragen aan jou erdoor lopen.
    - De volledige lijst staat in `overzichten/namen-stappen-en-beslispunten.md`.
    - Advies: ja.
    - Bij nee: geef aan welke naam anders moet.

## Dialoog 5

17. Heeft Atlas bij de toets van de backlog-items het laatste woord op technische punten, zodat alleen twee rondes zonder overeenstemming of een onenigheid over niet-technische punten bij jou komt?
    - Advies: ja. Zo staat het in de werkwijze van Atlas, en technische punten horen bij zijn vakgebied.
    - Bij nee: elke onenigheid met Atlas over de backlog-items komt bij jou, ook een technische, zoals tot nu toe afgesproken.

## Dialoog 6 (nieuw, uit de verwerking van je antwoorden)

18. Zet alleen jij (of je bouwsessie) een taak in `docs/backlog/in-progress/` als de bouw begint, terwijl de agents taken alleen in todo zetten?
    - Advies: ja, want bouwen valt buiten deze keten, en alleen jij weet wanneer je begint.
    - Bij nee: geef aan wie een taak naar in-progress zet, en wanneer.
19. Krijgt elke slice naast een bestand per taak ook één epic-bestand, met het doel van de slice en de lijst van zijn taken, dat jij (of je bouwsessie) naar done verplaatst als al zijn taken in done staan?
    - Advies: ja. Zo zie je per slice in één bestand waar hij over gaat, en de dagstart telt alleen de taken.
    - Bij nee: er zijn alleen taakbestanden, en de slice staat als veld in elk taakbestand.
20. Heet een taakbestand naar de slice, een nummer en een korte titel (bijvoorbeeld `S01-003-inlogpagina.md`), en staan bovenin de titel, de slice, het werkpakket, de paginabrief, de acceptatiecriteria en de afhankelijkheden?
    - Advies: ja. Dan sorteren de bestanden per slice, en staat in elk bestand wat de bouw nodig heeft.
    - Bij nee: geef de naam en de inhoud die je wilt.
21. Ga je akkoord met de namen die door je antwoorden veranderden of erbij kwamen?
    - Gewijzigd: "Antwoorden verwerken" (was "Antwoorden verwerken en goedkeuring vastleggen") en "Gemist weekmoment melden" (was "Gemist weekmoment inhalen").
    - Nieuw: "Verwerking laten nacontroleren", "Verwerking nacontroleren", "Goedkeuring vastleggen", en de beslispunten "antwoord afwijkend van advies?", "verwerking in orde?" en "gemist weekmoment alsnog?".
    - Correctie: het beslispunt over een afwijkende revisie heet "blijft er een inhoudelijke wijziging?". In de lijst die je bij vraag 16 zag, stond nog de oude naam.
    - Advies: ja.
    - Bij nee: geef aan welke naam anders moet.

## Herleiding (alleen voor de controle, niet voor Carlo)

| Vraag | Element |
| --- | --- |
| 1 | CHG-042 deel A: start van PRC-03; ACT-03.5 t/m ACT-03.7, G-03.2 |
| 2 | ASM-90; G-03.3, ACT-03.10, ACT-03.11; CHG-042 deel A: einde van PRC-03 en GOV-08 bij PRC-03 |
| 3 | ASM-91, eerste deel; G-03.4 |
| 4 | ASM-91, tweede deel; G-03.5 |
| 5 | ASM-94; ACT-04.57, ACT-04.58, G-04.53; CHG-042 deel B: naam van PRC-04 (volgt uit deze vraag en uit vraag 16) |
| 6 | ASM-99; G-04.1 (met de controle achteraf via PRC-03, ACT-03.5 t/m ACT-03.7) |
| 7 | ASM-95; CHG-042 deel A: aanleiding van PRC-02 |
| 8 | ASM-96; ACT-01.29, ACT-02.1, ACT-02.17; CHG-042 deel A: output van PRC-01 |
| 9 | ASM-98; G-02.1, GOV-07, ACT-02.2 |
| 10 | ASM-97; ACT-07.3 |
| 11 | ASM-93; ACT-02.53 |
| 12 | ASM-92; G-06.3, ACT-06.4 |
| 13 | OPEN-34, plek |
| 14 | OPEN-34, vorm |
| 15 | OPEN-35 |
| 16 | namen: `overzichten/namen-stappen-en-beslispunten.md` (CHG-041, CHG-043, CHG-044); de naam van PRC-04 (CHG-042 deel B) |
| 17 | CHG-042 deel A: ASM-83 (laatste woord van Atlas op technische punten); G-03.3 |
| 18 | ASM-100 |
| 19 | ASM-101; ACT-02.11, ACT-02.54, ACT-07.4 |
| 20 | ASM-102; ACT-02.11, ACT-02.54 |
| 21 | namen: ACT-03.3, ACT-07.3 (gewijzigd); ACT-03.12, 03.13, 03.14, G-03.6, G-03.7, G-07.3 (nieuw); G-02.14 (correctie in de namenlijst); CHG-046 |

Geen vraag nodig, met reden:
- **Volgt uit eerdere besluiten of uit de agentdefinities:**
  - de volgorde toets vóór controle: `socrates.md`, "Toets door Atlas en akkoorden";
  - welke controleur bij welke poort: B-34, ASM-83;
  - de grill-momenten: `vragen-en-akkoordrondes`;
  - het samenvallen van weekmoment en dagstart: ASM-33;
  - geen telling met Carlo: 0.18 ASM-48 en ASM-75;
  - de 0.18-aannames per stap: `aannames_0_18_stapniveau`, elk met reden.
- **Ontwerpwerk van Atlas, gebaseerd op zijn skills:**
  - G-02.12 (ontwerp per slice alleen waar nodig); de tekstwijziging van doel en output van PRC-02 staat in CHG-042 deel B;
  - G-02.13 (uitgang als een slice het globale ontwerp raakt);
  - ACT-02.58 en G-02.14 (route bij een afwijkende revisie);
  - de voorwaarde bij ACT-04.4 (breaking changes en ADR);
  - AGT-09 en AGT-10 in de routering van PRC-04 (ASM-87, bevestigd).
- **Deel B van CHG-042:** volgt uit vraag 5, of is administratief. PRP-074 en PRP-080 worden na ronde 3 voorgelegd (B-43, vraag 21).
- **Volgt uit de antwoorden van ronde 2 (B-44):**
  - de nacontrole bij GOV-18 doet Atlas (ACT-03.14, G-03.7): bij GOV-18 is Atlas de tweede lezer en komt er geen atlas-licht bij (ASM-83, bevestigd in B-43 en B-44 vraag 17); de nacontrole uit antwoord 3 gaat naar de controleur van de poort;
  - de dagstart na G-07.3, ook als Carlo het gemiste weekmoment niet wil: de dagstart draait bij elke opening van de sessie (B-41, ASM-84), en antwoord 10 ging alleen over het weekmoment;
  - de route van ACT-03.11 na een vastgelopen nacontrole (doorgaan naar ACT-03.13, herzien naar ACT-03.3): dezelfde regel als bij de controle vóór het akkoord (ASM-90, B-44 vraag 2), toegepast op de nacontrole;
  - de status staat alleen in de map, niet in het taakbestand (ASM-102): volgt uit de statusmappen van antwoord 13 en 14.
