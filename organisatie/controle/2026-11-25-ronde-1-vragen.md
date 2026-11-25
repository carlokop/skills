# Vragen aan Carlo, ronde 1 (organisatieanalyse), model 1.0.3

| | |
| --- | --- |
| Datum | 2026-11-25 |
| Doel | De letterlijke vraagteksten, zodat Socrates-licht ze kan toetsen. Carlo ziet alleen de vragen, niet dit bestand en niet de tabel onderaan. |
| Akkoord | Vraag 1 t/m 21 samen vormen het akkoord op ronde 1. "Ja" neemt telkens het advies aan. |
| Volgorde | Blokkerend: eerst de structuur (1-8), dan de inhoud (9-10), dan het ritme (11-17), dan namen en nummering (18-19), dan de werkwijze van ronde 3 (20-21). |
| Dialogen | Hoogstens 4 per dialoog: 1-4, 5-8, 9-12, 13-16, 17-20, 21. |
| Controle | Volledig gecontroleerd door Socrates-licht (vijfde controle). |
| Uitkomst | Gesteld en beantwoord op 2026-11-25. Bij 11, 12 en 14 koos Carlo anders dan het advies: maandag 12:00, de dagstart alleen bij openen, en een drempel van 10 (B-40 t/m B-42). De rest volgens het advies. Ronde 1 is goedgekeurd (B-43). De hoofdsessie stelde vraag 14 en vraag 15 t/m 17 iets anders: bij 14 met de dagstart bij openen, bij 15 t/m 17 met het weekmoment op maandag 12:00. De inhoud van de keuzes bleef gelijk. |

## Dialoog 1

1. Werk je per klantproject in een eigen hoofdsessie, met de klantrepo als werkmap en de plugins socrates en atlas geïnstalleerd?
   - Advies: ja, dan horen het ritme, het backlog en de stand van het werk bij één project.
   - Bij nee: ik modelleer hoe één sessie meerdere projecten bijhoudt.

2. Gaan vier losse akkoorden uit het oude model op in je generieke poorten, ook bij een nieuwe wens?
   - Het gaat om: eisen en use cases (in het analysepakket), de architectuurkeuze (in de richting), en het klassendiagram met database (in het ontwerp).
   - Advies: ja, dat volgt uit je besluit dat de poorten generiek zijn.
   - Bij nee: die vier akkoorden blijven naast de generieke poorten bestaan.

3. Vervalt het aparte akkoord op een paginaontwerp, zodat de brieven die Socrates op jouw ontwerp afstemt meegaan in het akkoord op de richting, bij een nieuwe klant en bij een wens met een nieuw ontwerp?
   - Advies: ja. Je eigen ontwerp keur je niet apart goed, en in het oude model beoordeelde je bij beide akkoorden ook alleen die brieven.
   - Bij nee: bij een wens blijft er een apart akkoord op de afgestemde brieven.

4. Krijgen Socrates-licht en Atlas-licht samen één rol "controleur", elk met een eigen lane?
   - Advies: ja, ze doen hetzelfde soort werk: controle vóór een akkoord.
   - Bij nee: twee aparte controleursrollen, één voor eisen en één voor ontwerp.

## Dialoog 2

5. Valt het andere werk van de lichte varianten onder de rol van Socrates of Atlas, zodat de controleursrol alleen de controle vóór een akkoord is?
   - Dat andere werk is: vragen over goedgekeurde stukken beantwoorden, onderzoek doen en diagrammen genereren.
   - Advies: ja, dan blijft de controleursrol zuiver.
   - Bij nee: dat werk valt ook onder de controleursrol, en die rol wordt breder dan controle.

6. Maakt Atlas in de keten zelf de sequentiediagrammen, zodat Atlas-licht nooit diagrammen controleert die hij zelf maakte?
   - Advies: ja, anders is de controleur ook de maker.
   - Bij nee: Atlas-licht maakt de diagrammen en controleert ze later in een aparte opdracht, als bewuste uitzondering.

7. Toetst Atlas de backlog-items van de hoofdsessie standaard tegen zijn werkpakketten, voordat jij het backlog goedkeurt?
   - Advies: ja. In het oude model was dit een vaste stap; nu staat het in zijn instructies alleen op verzoek. Bij onenigheid na twee rondes beslis jij, zoals nu al.
   - Bij nee: Atlas toetst alleen als de hoofdsessie erom vraagt.

8. Is die toets door Atlas de enige tweede lezer van de backlog-items, zonder extra controle door Atlas-licht?
   - Advies: ja, Atlas maakte de werkpakketten en ziet het best of de items ze dekken.
   - Bij nee: Atlas-licht controleert de items ook, vóór jouw akkoord.

## Dialoog 3

9. Legt Socrates juridische keuzes vast in het analysepakket, zoals privacy, bewaartermijnen en voorwaarden, terwijl jij de keuze zelf maakt?
   - Advies: ja, nu hebben ze nergens een plek.
   - Bij nee: ik modelleer een aparte stap of rol voor juridische keuzes.

10. Mag de stand van het werk in bestanden in de klantrepo staan, zodat een nieuwe sessie verder kan?
    - Het gaat om: welke stap, welke akkoorden met datum en je letterlijke antwoord, en wat er is afgekeurd of vastliep.
    - Advies: ja, alleen de repo blijft zeker bewaard. Wie welk bestand schrijft, volgt in ronde 3.
    - Bij nee: na een herstart kan de stand verloren gaan, en is een akkoord achteraf niet aan te tonen.

11. Komt het weekmoment op maandag om 09:00 Nederlandse tijd (was 04:00), om de volgorde van slices en wensen na te gaan en de volgende slice te starten als er geen loopt?
    - Advies: ja. Om 04:00 staat je sessie waarschijnlijk niet open, en de geplande taak haalt zelf niets in; de inhaalcheck verderop vangt dat op.
    - Bij nee: geef de dag en de tijd die je wilt.

12. Komt er elke werkdag om 09:00 Nederlandse tijd een dagstart, die het backlog telt en meldt wat op jou wacht?
    - Advies: ja, zo werkte de dagstart in het oude model ook.
    - Bij nee: alleen het weekmoment blijft, en wat op jou wacht zie je pas als je de sessie opent.

## Dialoog 4

13. Telt een backlog-item als open tot jij (of je bouwsessie) het na de merge op klaar zet?
    - Advies: ja, zoals in het oude model; alleen jij weet wanneer iets gebouwd en gemerged is.
    - Bij nee: de dagstart kan niet tellen, en alleen het weekmoment start een slice.

14. Start de dagstart de volgende slice als de lopende slice nog 5 of minder open items heeft?
    - Advies: ja, dat was je drempel in het oude model.
    - Bij nee: geef een ander aantal.

15. Wordt het wekmechanisme een geplande taak in de hoofdsessie van het project?
    - Advies: ja. Alleen van dit mechanisme staat vast dat het in de sessie met de repo draait en bij hervatten terugkomt.
    - Bij nee is er keus uit drie alternatieven:
      - een geplande taak in de desktop-app (onbekend of die zonder open app draait);
      - een taak in de cloud (zonder lokale bestanden);
      - een herhaallus in eigen tempo (alleen in een open sessie, komt bij hervatten niet terug).

16. Controleert de hoofdsessie bij elke nieuwe of hervatte sessie of die geplande taak er nog is, en zet ze hem zo nodig opnieuw aan?
    - Advies: ja. De taak komt alleen terug als je een sessie hervat, en of hij na een tijd verloopt, is onbekend.
    - Bij nee: in een nieuwe sessie loopt het ritme pas weer als jij het zelf aanzet.

## Dialoog 5

17. Doet de hoofdsessie bij het openen of hervatten een inhaalcheck, dat wil zeggen een controle van wat je gemist hebt sinds de vorige keer, en meldt ze de uitkomst?
    - Advies: ja, want de geplande taak haalt een gemist weekmoment of een gemiste dagstart zelf niet in.
    - Bij nee: een gemist moment blijft liggen tot het volgende moment.

18. Ga je akkoord met de nieuwe en gewijzigde korte namen in het model?
    - Gewijzigd: "regie" voor de oude orchestratorrol, "nieuwe klant tot ontwerp en sliceplan", "backlog vullen per slice", "ritme: weekmoment en dagstart" en "keuze volgende slice of wens".
    - Nieuw: "controleur", "hoofdsessie", "akkoord voorlopig sliceplan", "akkoord backlog per slice", het doel "alles in Claude Code", en korte namen voor de doelen.
    - Advies: ja.
    - Bij nee: geef aan welke naam anders moet.

19. Krijgt het model conceptversies 1.0.1, 1.0.2 enzovoort, en heet het pas 1.0 na je akkoord op de laatste ronde?
    - Advies: ja, dan is altijd duidelijk welk concept je zag.
    - Bij nee: geef de nummering die je wilt.

20. Komen het communicatiemodel en de afbouwlijst van Paperclip in ronde 3 als eigen bestanden in de map organisatie?
    - Advies: ja, dan zijn ze los te lezen.
    - Bij nee: ze worden een hoofdstuk in de organisatieanalyse.

## Dialoog 6

21. Leg ik de overige verbetervoorstellen na ronde 3 in één keer aan je voor?
    - Het gaat om: regie uitbreiden met het backlog, de controles van de lichte varianten uitbreiden, een skill voor backlog-items, en slice 1 alleen goedkeuren bij het sliceplan.
    - Advies: ja, dan is per stap bekend welke skill nodig is. Tot de skills zijn aangepast, keur je slice 1 bij het bouwcontract nog een tweede keer goed.
    - Bij nee: nu een vraag per voorstel.
    - De voorstellen over de stand van het werk, het wekmechanisme en de juridische keuzes lopen al via vraag 10, 15 t/m 17 en 9.

## Herleiding (alleen voor de controle, niet voor Carlo)

| Vraag | Element in `register.yaml` |
| --- | --- |
| 1 | ASM-79 (één hoofdsessie per klantproject) |
| 2 | ASM-82 (losse akkoorden in generieke poorten); `vervalt_als_bevestigd` GOV-01, 02, 05, 09 |
| 3 | ASM-86 (afgestemde brieven in de richting); `vervalt_als_bevestigd` GOV-14 |
| 4 | ASM-87, deel 1 (één rol voor de controleurs); ROL-09 |
| 5 | ASM-87, deel 2 (overig werk onder de rol van de maker); AGT-09 en AGT-10 `ook_voor` |
| 6 | ASM-88 (Atlas genereert diagrammen in de keten); dat een fout in het model-JSON dan ook bij Atlas ligt, volgt daaruit (ASM-88, PRP-074) |
| 7 | ASM-83, deel 1 (standaard toets) |
| 8 | ASM-83, deel 2 (enige tweede lezer); GOV-18 |
| 9 | ASM-81 (juridische keuzes in de analyse); PRP-078 |
| 10 | ASM-80 (stand van de keten in bestanden); PRP-075 |
| 11 | ASM-84, deel 1 (weekmoment) |
| 12 | ASM-84, deel 2 (dagstart) |
| 13 | ASM-89, deel 1 (wanneer een item open is) |
| 14 | ASM-89, deel 2 (drempel 5) |
| 15 | ASM-85, deel 1 (mechanisme: cron in de hoofdsessie) |
| 16 | ASM-85, deel 2 (controleren en opnieuw aanzetten bij elke sessie); PRP-076 punt 1 |
| 17 | ASM-85, deel 3 (inhaalcheck); PRP-076 punt 2 |
| 18 | `korte_namen` (CHG-037 t/m CHG-039) |
| 19 | meta `versieregel` |
| 20 | `ORGANISATIE.md` §9 (plek van communicatiemodel en afbouwlijst) |
| 21 | PRP-072, 073, 074, 077, 079 (moment van voorleggen); FND-097 |
