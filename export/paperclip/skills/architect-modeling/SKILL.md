---
name: architect-modeling
description: Gebruik om het modelleertraject te regisseren nadat de requirements, use cases en bedrijfsregels zijn goedgekeurd. Voert in vaste volgorde de deelskills uit voor de modelleerfasen (uml-domain-modelling, uml-sequence-diagrams, uml-class-diagram), elk met goedkeuring van de gebruiker, en bewaakt de status en samenhang. Fase 1 (uml-use-cases) en 1b (domain-analysis) zijn voorwaarden.
---

# Architect: modelleren van het systeem (regie)

Deze skill is de **regie** over het modelleertraject. Het eigenlijke werk staat in aparte skills. Je kunt elk daarvan ook los gebruiken (bijvoorbeeld voor één nieuwe use case). Communiceer in het Nederlands.

## Voorwaarden
Voer deze skill alleen uit als het volgende is opgeleverd en door de gebruiker is goedgekeurd:
- `docs/architecture/requirements.md` met `Status: Goedgekeurd`,
- `docs/architecture/use-cases.md` (met acceptatiecriteria) goedgekeurd,
- `docs/architecture/business-rules.md` goedgekeurd, voor zover er bedrijfsregels zijn.

Is een van deze niet goedgekeurd of onduidelijk? Begin dan niet. Vraag het via een issue (skill `overdracht`) aan degene die de eisen beheert (Socrates). Schrijf eisen, use cases of bedrijfsregels niet zelf. Is de architectuurkeuze nog niet gedaan, gebruik dan eerst `architect-architecture-choice`.

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
- Controleer vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## De fasen

| Fase | Skill | Resultaat | Gaat pas door na |
|---|---|---|---|
| 1 | use cases van Socrates (voorwaarde; skill `uml-use-cases` is van Socrates) | `use-cases.md` met acceptatiecriteria, dekking van eisen | akkoord op de use cases |
| 1b | `domain-analysis` (voorwaarde) | `business-rules.md` | akkoord op de bedrijfsregels |
| 2 | `uml-domain-modelling` | `domain-model.md` + artifact, `GLOSSARY.md` | akkoord op het domeinmodel |
| 3 | `uml-sequence-diagrams` | `sequences.md` + artifact (gekozen use cases) | akkoord op de selectie én de diagrammen |
| 4 | `uml-class-diagram` | `class-diagram.md` + artifact, `design-notes.md` | akkoord op het klassendiagram |

Deze skill begint bij fase 2. Fase 1 en 1b controleer je alleen op goedkeuring (zie Voorwaarden). Daarna volgt `architect-database` voor het databaseontwerp. Voor een nieuwe use case in de bouwfase gebruik je `architect-implementation-plan`, dat dezelfde deelskills aanroept.

## Werkwijze

1. Lees `docs/architecture/STATUS.md` (of maak het aan) om te weten in welke fase je zit. Elke fase heeft: status (open, ter goedkeuring, goedgekeurd met datum), links naar de bestanden en artifact-URL's, en openstaande punten. Houd dit bestand bij en neem daarin de goedkeuring van requirements, use cases en bedrijfsregels op, zoals die is gemeld in het overdrachtsissue (fase 0 en 1).
2. Voer de fasen **in volgorde** uit door de bijbehorende skill te volgen. Sla geen fase over en ga nooit door zonder **expliciet akkoord** van de gebruiker op de vorige fase. Elke deelskill bevat haar eigen goedkeuringsmoment.
3. Gebruik door het hele traject `domain-modeling` voor de taal: één Engelse term per begrip in `GLOSSARY.md`, vage termen aanscherpen, en ADR's (`docs/adr/`) alleen bij beslissingen die moeilijk terug te draaien, verrassend zonder context en een echte afweging zijn.
4. Bewaak de **samenhang**: elk element in een later model moet herleidbaar zijn tot een eerder model.
   - use case → eisen (FR/NFR) en acceptatiecriteria (AC)
   - bedrijfsregel (BR) → eis of use case
   - domeinconcept → use case of bedrijfsregel
   - sequentiedeelnemer en bericht → klasse en methode
   - klasse → domeinconcept of uitbreidingspunt
   Ontdek je in een latere fase dat een eerder model niet klopt, **meld dat expliciet** aan de gebruiker, pas het eerdere model aan met de bijbehorende skill en laat het opnieuw goedkeuren voor je doorgaat. Raakt de fout een eis, use case of bedrijfsregel, meld dat dan via een issue (skill `requirements-clarification`, sectie B). Pas die niet zelf aan.
5. Alle diagrammen komen uit model-JSON via het script van de deelskill (altijd `.md` met Mermaid en HTML-pagina exact gelijk), en de pagina volgt `ontwerppagina` en gaat als bijlage op het issue (zie de deelskills). Handmatig bewerken van gegenereerde bestanden is niet toegestaan.
6. Na fase 4 meld je dat de volgende stap `architect-database` is en vraag je of je daarmee mag beginnen.

## Wijzigingen later
Verandert later iets aan een goedgekeurd model: controleer eerst op breaking changes via `architect-implementation-plan` (stap 4b), pas daarna de betreffende JSON aan met de juiste deelskill, genereer opnieuw, noteer de wijziging in `STATUS.md`, en leg het voor als het eerder goedgekeurde afspraken raakt. Kleine, aantoonbaar niet-breaking aanvullingen mag je doorvoeren en achteraf melden. Een wijziging die eisen, use cases of bedrijfsregels raakt loopt via een issue (skill `requirements-clarification`).

## Valkuilen
- Niet technisch worden in het domeinmodel en geen klassen verzinnen zonder use case of uitbreidingspunt.
- Geen goedkeuring aannemen: "prima" op een deel is geen akkoord op het geheel; vraag door. Een akkoord op alle vragen van de kaart (alle keuzes van een document) is wel het akkoord op dat document (V1, B-23).
- Niet handmatig Mermaid of HTML schrijven; altijd via het model en het script.
- Geen eisen, use cases of bedrijfsregels zelf schrijven of wijzigen.

## Aanvulling PRC-08 (model 0.14): regie alleen bij P3, pakketakkoord

Besluit: B-08/PRP-003, PRP-024 optie a, B-12/PRP-029, PRP-034, PRP-036, ASM-18, ASM-20. Bron: `skill-specificaties` op WEB-19. Alle akkoorden in deze skill zijn kaarten met vragen per keuze, geen documenten ter beoordeling (B-23, `vragen-en-akkoordrondes`). Deze aanvulling gaat voor "akkoord per fase" en voor "Wijzigingen later" hierboven. Dekking: ACT-01.10 t/m ACT-01.13 en ACT-02.6 (ACT-01.11: architectuurkeuze en profiel vastleggen).

- **Alleen bij P3** regisseer je het traject (G-01.6, `architectuurprofielen`). Bij P1 en P2 is er één technisch document (`architect-cms-configuratie` of `architect-componentontwerp`).
- **PRC-01:** werk de documenten van P3 af in vaste volgorde: domeinmodel, sequentiediagrammen, klassendiagram, databaseontwerp. De architectuurkeuze zit niet meer in dit pakket maar in GOV-15 (richting). De sequentiediagrammen komen na het paginaontwerp: hun input zijn ook de paginabrieven en ontwerpen. Je legt de documenten samen voor bij GOV-11, één kaart met een beoordeling per document. Keurt Carlo een document af, dan gaat alleen dat document door PRC-05; geraakte latere documenten werk je mee bij en komen opnieuw in hetzelfde pakket; de rest blijft goedgekeurd (ASM-18).
- **PRC-02:** het akkoord blijft per bijgewerkt document, als kaart met vragen per keuze (B-23), samen met het ontwerpbesluit (ACT-02.55): bij P3 GOV-03 (domeinmodel), GOV-04, GOV-05 en GOV-13; bij P1 en P2 GOV-11 per document. Wordt het profiel zwaarder (naar P3), dan maak je de nieuwe documenten van P3, elk met zijn akkoord (ACT-02.6).
- **Wijzigingen later:** elke wijziging van een goedgekeurd document gaat langs de GOV van dat document. Er komt **geen uitzondering voor kleine wijzigingen** en je meldt niets meer achteraf (ASM-20).
- **Pakketakkoord:** keurt Carlo een document af, dan telt alleen dat document als afkeuring (`vragen-en-akkoordrondes`).
- Het oude restrisico (werken op een nog niet goedgekeurde architectuurkeuze) is kleiner: GOV-15 keurt profiel en architectuurkeuze goed vóór het technisch ontwerp.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): domeinmodel en sequenties intern, één akkoord voor klassendiagram en database

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- **Domeinmodel (met `GLOSSARY.md`) en sequentiediagrammen zijn intern.** Fase 2 en 3 hebben geen akkoord van Carlo, geen kaart, geen ontwerppagina en geen tekstversie als document op het issue. Je levert een modelbestand (JSON) en een regeldocument (levenscycli, invarianten, herleiding naar use cases en bedrijfsregels) in `docs/architecture/`.
- **Fase 4 en `architect-database` zijn één document**: ontwerpklassendiagram en databaseontwerp, met één kaart en één akkoord, ook ter naslag in de documentatie. De tabel met fasen leest dus: fase 2 en 3 geen akkoord; fase 4 samen met de database één akkoord.
- **Keuzes die je in domeinmodel, sequenties, klassendiagram of database zelf invulde** en die niet in de goedgekeurde eisen of bedrijfsregels staan, komen als vraag met advies op de kaart van het document (B-23, `vragen-en-akkoordrondes`).
- "Akkoord per fase" en "geen fase zonder expliciet akkoord" gelden niet voor fase 2 en 3. Je meldt een fout in een eerder intern model nog steeds aan de gebruiker als die een eis, use case of bedrijfsregel raakt.
- Een uitbreiding die alleen domeinmodel of sequenties raakt, krijgt geen akkoord.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.
