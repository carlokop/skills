# Voorstel CHG-042: goedgekeurde rijen wijzigen (uit ronde 2)

| | |
| --- | --- |
| Model | 1.0; ronde 1 Goedgekeurd (2026-11-25, Carlo, versie 1.0.4, B-43) |
| Status | Goedgekeurd (2026-11-25, Carlo, B-44; vraag 1, 2, 5, 7, 8, 16 en 17). Doorgevoerd in versie 1.0.9 (CHG-046). De rij bij GOV-12 volgt antwoord 6 ("nee"): er komt altijd eerst een wijzigingsverzoek, met controle vooraf. |
| Datum | 2026-11-25 |
| Werkwijze | `bpmn-conventies`, "Een goedgekeurd model wijzigen". Alleen de geraakte rijen staan hier. Het register en de goedgekeurde documenten veranderen pas na het akkoord. |

**Legenda.** PRC = proces · GOV = akkoordmoment van Carlo · ASM = aanname · OPEN = open vraag · FND = bevinding · PRP = voorstel · ROL / AGT = rol / agent · B = besluit van Carlo · CHG = wijziging · r. = regelnummer.

## Waarom
Bij het modelleren van de stappen (ronde 2) bleek dat enkele onderdelen uit ronde 1 niet passen bij de herbruikbare subprocessen, of iets missen:
- **Controle in de poort:** in PRC-03 is de controle nu de eerste stap van de poort. Volgens de goedgekeurde startconditie is het werk bij de start al gecontroleerd.
- **Naam van PRC-04:** vragen aan Carlo lopen nu via PRC-04, maar de naam zegt "tussen agents".
- **Start van slice 1:** slice 1 heeft na GOV-17 geen trigger om te starten.
- **Uitbreidingslijst:** die komt in PRC-01 als output.
- **Ontwerp per slice:** een ontwerp per slice is alleen nodig buiten de kern of bij een uitbreiding.
- **Kleinere verwijzingen:** enkele verwijzingen en opmerkingen moeten worden aangevuld.
- **Feitencontrole Atlas:** die leverde een bevinding en twee voorstellen op voor de lijst die na ronde 3 wordt voorgelegd.

## A. Rijen in het model (keuze van Carlo)

| Element | Veld | Nu (goedgekeurd) | Voorstel | Reden | Vraag |
| --- | --- | --- | --- | --- | --- |
| PRC-03 (akkoord-poort van de project owner) | start | "Deliverable gecontroleerd en ter goedkeuring" | "Deliverable ter goedkeuring ingediend; de controle vóór het akkoord is de eerste stap van de poort" | De controle staat dan één keer in het herbruikbare subproces, niet bij elke poort apart (ACT-03.5, ACT-03.6, G-03.2). | 1 |
| PRC-03 | einde | "Goedgekeurd (de maker zet de status), of afgekeurd naar PRC-05" | "Goedgekeurd (de maker zet de status); afgekeurd naar PRC-05, of bij GOV-12 afgewezen terug naar PRC-04; of escalatiebesluit (GOV-08) na een vastgelopen controle" | De controle-lus heeft een uitgang (ASM-90), en GOV-12 heeft één afwijzingsroute (G-03.4). | 2 |
| GOV-08 (escalatiebesluit van Carlo) | processen | PRC-04, PRC-05, PRC-06 | PRC-03, PRC-04, PRC-05, PRC-06 | Dit volgt uit ASM-90. | 2 |
| PRC-02 (backlog vullen per slice) | aanleiding | "Weekmoment of dagstart van PRC-07 dat een doorloop nodig vindt, of een verzoek van ROL-01" | "Weekmoment of dagstart van PRC-07 dat een doorloop nodig vindt, een verzoek van ROL-01, of het einde van PRC-01 (slice 1)" | Slice 1 start direct na GOV-17 (ASM-95). | 7 |
| PRC-01 (nieuwe klant tot ontwerp en sliceplan) | output | (zonder uitbreidingslijst) | daarbij: "uitbreidingslijst met de later-pagina's (ASM-96)" | ACT-01.29 zet de later-pagina's op de uitbreidingslijst. | 8 |
| ASM-83 (Atlas toetst backlog-items), bevestigd in B-43 | tekst | "… Na twee rondes of bij een conflict beslist ROL-01 (GOV-08) …" | "… Op technische punten heeft Atlas het laatste woord en volgt de hoofdsessie hem. Na twee rondes, of bij een conflict over niet-technische punten, beslist ROL-01 (GOV-08) …" | `architect-implementation-plan` r.194 ("Jij hebt het laatste woord op technische punten"); tweede feitencontrole Atlas. Het model (G-03.3) volgt dit al. | 17 |

## B. Rijen die volgen uit een vraag of administratief zijn

| Element | Veld | Nu (goedgekeurd) | Voorstel | Reden |
| --- | --- | --- | --- | --- |
| PRC-04 | naam en korte naam | "Vragenloop en grill-sessie tussen agents" | "Vragenloop en grill-sessie" | Dit volgt uit vraag 5 (ASM-94); de naam zelf staat in vraag 16. Bij nee op vraag 5 vervalt deze rij. |
| PRC-02 | doel en output | "het program design (ontwerp per slice, implementatieplan met werkpakketten)"; output "per slice: ontwerp per slice, …" | "het program design (ontwerp per slice waar nodig, implementatieplan met werkpakketten)"; output "per slice: waar nodig het ontwerp per slice, …" | Volgens de skills van Atlas is er alleen buiten de kern of bij een uitbreiding een ontwerp per slice (`architect-vertical-slices` r.27, `architect-api-contracts` r.18, ASM-09). Binnen de kern is het goedgekeurde technisch ontwerp (GOV-11) het detailontwerp uit B-31. Dit is ontwerpwerk van Atlas (G-02.12), geen keuze van Carlo. |
| PRC-07 (ritme: weekmoment en dagstart) | open | OPEN-31, OPEN-32, OPEN-38, OPEN-40 | daarbij OPEN-41 | OPEN-41 (cron terwijl Claude bezig is) kwam op bij het modelleren van het weekmoment. |
| PRC-06 (blokkade afhandelen) | roept_aan | [] | [PRC-04] | ACT-06.4 vraagt ontbrekende input via PRC-04. |
| GOV-12 (akkoord wijzigingsverzoek of productkeuze) | processen | PRC-04 | PRC-03, PRC-04 | GOV-12 loopt via de akkoord-poort (PRC-03), ook als een antwoord van Carlo iets goedgekeurds verandert. Dan schrijft de agent eerst een wijzigingsverzoek, dat vooraf wordt gecontroleerd en apart wordt goedgekeurd (antwoord 6: "Nee, wijzigingsverzoek"; ASM-99 afgewezen). |
| GOV-06 (akkoord bouwcontract per slice) | opmerking | "… gaan bij een nieuw project ook inhoud en volgorde van slice 1 mee; dat vervalt als GOV-17 blijft (FND-097, PRP-079)" | "… dat vervalt met PRP-079 (GOV-17 besloten in B-32 en B-43)" | GOV-17 is besloten; dat de skills slice 1 nog in GOV-06 leggen, verdwijnt pas met PRP-079 (tweede feitencontrole Atlas). |
| PRP-074 (controle atlas-licht uitbreiden) | wijziging en gevolgen | het conventiebestand staat in de lijst van wat atlas-licht controleert | Aanvullen: `architect-conventions` r.36 ("De inhoud heeft geen aparte controleur") wordt een lichte controle door atlas-licht: past het conventiebestand bij de ADR's en het design systeem? | De feitencontrole van Atlas toonde de botsing met r.36. Over PRP-074 beslist Carlo na ronde 3 (B-43, vraag 21). |
| FND-098 (nieuw) | — | — | "Toets van backlog-items alleen op verzoek": `atlas.md` r.44 en `architect-implementation-plan` r.194 laten Atlas de items alleen toetsen "als de aanroeper dat vraagt" en spreken van taken. ASM-83 (B-43) maakt de toets van backlog-items standaard vóór GOV-18. Proces: PRC-02, PRC-03. | De feitencontrole van Atlas. |
| PRP-080 (nieuw) | — | — | "Toets van backlog-items standaard":<br>– in `atlas.md` r.44 en `architect-implementation-plan` r.194 vervalt "als de aanroeper dat vraagt", en "taken" of "epics en taken" wordt "backlog-items";<br>– Atlas toetst de backlog-items standaard vóór GOV-18;<br>– de uitkomst is "geen opmerkingen" of opmerkingen per werkpakket of item;<br>– op technische punten heeft Atlas het laatste woord; na 2 rondes of bij een conflict over niet-technische punten beslist Carlo (r.194).<br>Probleem: FND-098. Skills: `atlas.md` (instructie), `architect-implementation-plan`, `regie` (de hoofdsessie vraagt de toets standaard). | Gaat mee in de lijst die na ronde 3 wordt voorgelegd (B-43, vraag 21). |

## Gevolgen
- **Agents en skills:** geen wijziging in dit traject (B-39). PRP-074 en PRP-080 worden na ronde 3 voorgelegd.
- **Gekoppelde elementen:**
  - PRC-03: ACT-03.5 t/m ACT-03.11 en G-03.2 t/m G-03.5;
  - PRC-04: ACT-04.57, ACT-04.58, G-04.1 en G-04.53;
  - PRC-02: ACT-01.29, de start van PRC-02, G-02.12 en ACT-06.4.
- **Overzichten:** na het akkoord worden `overzichten/proces-catalogus.md`, `bevindingen.md` (FND-098), `voorstellen.md` (PRP-074, PRP-080) en de korte namen in `register.yaml` bijgewerkt.

## Vragen
Deel A is goedgekeurd als vraag 1, 2, 7, 8 en 17 van ronde 2 met ja zijn beantwoord (`controle/2026-11-25-ronde-2-vragen.md`). Wordt een van die vragen met nee beantwoord, dan vervalt alleen de rij die erbij hoort.

Van deel B volgt de naam van PRC-04 uit vraag 5 en vraag 16. De andere rijen van deel B gaan mee met het akkoord op deel A.
