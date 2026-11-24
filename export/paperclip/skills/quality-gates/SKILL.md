---
name: quality-gates
description: Controleer of de afgesproken criteria, tests en reviews zijn afgerond voordat werk naar de volgende fase gaat. Gebruik bij elke overgang tussen fasen en bij een oplevering.
---

# Kwaliteitspoorten

Je controleert of iets gedaan is. Je beoordeelt de inhoud niet, en je voert geen review of test zelf uit.
Ga pas door naar de volgende fase als het bewijs op het issue staat:

* **Requirements**: status `Goedgekeurd` en zichtbare bevestiging van de gebruiker.
* **Ontwerp**: de gebruiker heeft elke fase van het modelleertraject expliciet goedgekeurd (voor de akkoorden per stap en per profiel: zie de aanvulling onderaan).
* **Implementatie**: de acceptatiecriteria zijn gedekt door tests, de tests zijn geslaagd en de review van Sentinel is afgerond zonder open kritieke bevindingen.
* **Merge vragen** (ACT-09.19): zie de aanvulling CHG-033 onderaan.
* **Oplevering**: de gebruiker heeft het resultaat afgenomen.

Staat het bewijs er niet, zet het werk dan niet door. Stuur het terug naar de eigenaar met wat ontbreekt.
Leg het resultaat van de controle vast in een korte comment: wat is gecontroleerd en wat de uitkomst is.
Pas poorten niet aan en sla ze niet over. Wil de gebruiker een poort overslaan, vraag dan om expliciete bevestiging.

## Aanvulling PRC-08 (model 0.14): poorten per stap, backlog gereed en OpenAPI

Besluit: B-08/PRP-025, PRP-013, PRP-007, PRP-032, PRP-034, B-17, ASM-21, ASM-22, ASM-38, ASM-52, ASM-56, ASM-57. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor de lijst hierboven waar die korter is. Je beoordeelt nog steeds de inhoud niet: je controleert dat het bewijs op het issue staat.

**Poorten per stap (ASM-38).** Elke poort noemt de GOV-ID's die op het issue moeten staan:
- vóór ACT-01.8 (ontwerp overdragen aan Atlas en ontwerper): GOV-10 (analysepakket met kern, visie en paginalijst met brieven);
- vóór ACT-01.15 (Atlas vragen om opdeling in slices): GOV-15 (richting) en GOV-11 (technisch ontwerp volgens profiel), met een akkoord op elk document dat volgens `architectuurprofielen` verplicht is voor het goedgekeurde profiel. Dit is de laatste poort vóór het bouwcontract (ACT-01.17): de brieven en het eerste ontwerp moeten goedgekeurd zijn (PRP-032);
- vóór ACT-01.20 (epics en taken slice 1 maken): GOV-06 (bouwcontract, met de inhoud van slice 1; bij een voorwaarde uit `architect-implementation-plan` stap 5 ook ontwerp en plan) en, waar er een OpenAPI-bestand is, de revisiecontrole hieronder;
- vóór ACT-02.4 (Atlas vragen wat nu gebouwd wordt): GOV-01 en GOV-02 van de uitbreiding (use cases en paginabrieven), en GOV-14 (paginaontwerp) als G-02.7 "ja" zei;
- in ACT-02.53 (vaste controles), vooraf: GOV-06 (en de revisiecontrole), GOV-02 (met de brieven), waar nodig GOV-14, en als de uitbreiding het globale ontwerp of het profiel raakte, de GOV's van de geraakte documenten met het ADR: GOV-09, en bij P3 GOV-03, 04, 05, 13, bij P1 en P2 GOV-11 per document (ASM-21). Atlas wacht zelf op die akkoorden vóór ACT-02.7.
Welke documenten verplicht zijn leest `architectuurprofielen`; herhaal die tabel niet. Elk akkoord is een kaart op het issue met vragen per keuze (PRP-040, B-23); een akkoord op alle vragen van een document telt als akkoord op dat document. Controleer ook dat er geen akkoord is gevraagd op een weergave van al goedgekeurde inhoud.

**Revisiecontrole op het OpenAPI-bestand (controle 2; B-17, ASM-52, ASM-56, ASM-57).** Waar er een OpenAPI-bestand is, controleer je vóór ACT-01.20 en in ACT-02.53, naast GOV-06, dat de **goedgekeurde leesbare versie dezelfde revisie (commit-hash) noemt als de laatste wijziging van het bestand in de repository**. Je beoordeelt de inhoud van het contract niet.
- **Faalt de controle** (bestand veranderd zonder nieuwe leesbare versie): maak geen taken voor die slice en meld het aan Atlas op het issue van het bouwcontract. Atlas maakt uit het huidige bestand een nieuwe leesbare versie, ook als hij de wijziging terugdraait (nieuwe revisie). Carlo's kaart vervalt en de slice gaat altijd opnieuw langs GOV-06.
- **Faalt de controle voor dezelfde slice een tweede keer:** leg het aan Carlo voor (GOV-08, escalatie).
- Er komt geen inhoudelijke tweede controle op het OpenAPI-bestand (ASM-57). Bij P1 zonder API is er geen bestand en vervalt deze controle.

**Poort "backlog gereed" (PRP-013).** ACT-01.57 en ACT-02.54, na de toets van Atlas op de taken (ACT-01.25 / ACT-02.14): elke taak heeft AC-ID's, één eigenaar en afhankelijkheden; de slice is gedekt; in slice 1 bestaan `CLAUDE.md`, `AGENTS.md` en `CONSTRAINTS.md` in de projectrepo (`context-engineering`, `constraint-driven-development`; CHG-033). Daarna volgt de uitbreidingslijst (ACT-01.29 / ACT-02.17).

**Vaste controles (PRP-007, ACT-02.53), na GOV-06:** (1) elk werkpakket verwijst naar FR/UC/AC (op werkpakketten, want de taken bestaan nog niet; ASM-21); (2) geen nieuwe eis of scope; (4) de flowlimieten. Bij (1) terug naar Atlas (ACT-02.9); bij (2) een wijzigingsverzoek via PRC-04 (GOV-12); bij (4) wachten, dat telt niet als ronde (ASM-22); na 2 rondes escalatie (GOV-08). Controle 3 ("past in het globale ontwerp") is geen poort: dat doet Atlas (ACT-02.14, PRP-027).

Dekking: ACT-01.8, 01.15, 01.20, 02.4, 01.57, 02.53, 02.54.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): poort op ontwerp

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- **Ontwerp (P3):** geen akkoord meer nodig op domeinmodel (GOV-03) en sequentiediagrammen (GOV-04); die zijn intern. Wel één akkoord op het document klassendiagram en database (vervangt GOV-05 en GOV-13 als aparte akkoorden). Controleer dat die kaart bestaat en door Carlo is goedgekeurd, en dat de keuzes die Atlas zelf invulde als vraag op die kaart staan.
- Vraag niet om een akkoord of kaart voor domeinmodel of sequenties. Staat die er wel, dan is dat een afwijking: meld het aan Atlas.
- De poort ACT-01.15 en ACT-02.53 telt het document klassendiagram en database als één verplicht document. Welke documenten verplicht zijn leest `architectuurprofielen`.
- Een uitbreiding die alleen domeinmodel of sequenties raakt, heeft geen akkoord als poort.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.

## Aanvulling CHG-033 (besluit Carlo, WEB-152; model 0.17): poort "merge vragen"

Bron: `rollen-en-skillmodel` §7 (GOV-16). Deze poort geldt vóór ACT-09.19, de kaart aan Carlo om de feature te mergen. Je controleert dat het bewijs op het epic en de PR staat; je beoordeelt de inhoud niet.

- alle taken gereviewd zonder open *Critical*- of verplichte bevindingen;
- open opmerkingen verwerkt of met reden afgewezen;
- testrapport van Trace geslaagd op de laatste commit;
- laatste codereview en securityreview van Sentinel zonder open blokkerende bevindingen;
- elke bevinding van Bugbot opgelost of met reden afgewezen in de PR;
- werk dat niet nodig is voor de AC's zit niet in de PR (dat is een nieuwe wens);
- CI groen op de laatste commit;
- documentatie bijgewerkt, gebruikersdocumentatie in `docs/user/`.

Ontbreekt iets, dan gaat het terug naar de eigenaar (Neo, Trace of Sentinel) met wat ontbreekt. Pas na een volledige poort maak je de kaart voor Carlo (`vragen-en-akkoordrondes`).
