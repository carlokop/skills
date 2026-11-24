---
name: architect-database
description: Gebruik nadat het ontwerpklassendiagram is goedgekeurd. Ontwerpt in detail het databasemodel: logisch model, tabellen/kolommen/sleutels/indexen, normalisatie, mapping van klassen naar tabellen, integriteit, migratiestrategie en prestaties. Levert .md met Mermaid ER-diagram, korte notities voor developers en de ontwerppagina (samen met het klassendiagram) en vraagt goedkeuring.
---

# Architect: databaseontwerp

Deze skill ontwerpt de database op basis van het **goedgekeurde domeinmodel en ontwerpklassendiagram**. Communiceer in het Nederlands. Ga niet door zonder expliciet akkoord van de gebruiker.

Voorwaarden: `docs/architecture/STATUS.md` toont dat het klassendiagram is goedgekeurd, en `requirements.md` is goedgekeurd (je hebt de NFR's nodig: volumes, prestaties, bewaartermijnen, privacy).

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Bij het eerste gebruik van een Engelse domeinterm leg je de Nederlandse betekenis uit in `GLOSSARY.md` in de root van het project (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`, plus een extra regel `_NL_:` voor de Nederlandse term) en gebruik je daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Werkwijze die altijd geldt

### Eén bron, twee weergaven
Het model staat als JSON (`kind: "er"`, schema in `references/model-json.md`). Het script van deze skill maakt daaruit het `.md`-bestand met Mermaid; de ontwerppagina maakt het script van `architect-class-diagram` (WEB-169), samen met het klassendiagram.

```sh
node <skill-map>/scripts/build.mjs docs/architecture/model/database.json --md docs/architecture/database.md
```

`<skill-map>` is de map waarin deze skill staat. Het script controleert het model (dubbele tabellen, relaties naar niet-bestaande tabellen, ontbrekende relatie-beschrijvingen). Bewerk de gegenereerde bestanden nooit handmatig. De optie `--html` (oude viewer) gebruik je niet meer.

### De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort klassendiagram en database, via `build.mjs page … --database docs/architecture/model/database.json` van `architect-class-diagram` (zie daar), met de vaste opbouw: samenvatting, diagrammen (alle tabellen per gebied, per gebied een plaat met 1–3 regels), keuzes (nr | keuze | waarom), open vragen. Indexen, verwijdergedrag, persoonsgegevens, transacties, rollen en migratie komen niet op de pagina; ze staan in het model en in `database-notes.md`. Zet de pagina als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

### Document en notities
- **Model** (`model/database.json`): tabellen, kolommen met `note`, sleutels, `ON DELETE`, indexen met hun reden. Wat daar staat, herhaal je nergens in tekst.
- **Notities** (`database-notes.md`): alleen wat niet in het model past, als tabel met één regel per punt (onderwerp | afspraak | bron): mapping-keuzes, transacties en locking, volumes, persoonsgegevens en bewaartermijnen, rollen en rechten, migratie, back-up.
- **Keuzes** komen in de tabel *Keuzes* van het document (nr | keuze | waarom, één regel).
- **Geen geschiedenis**: geen secties "Wat … verandert", "Verfijningen", "Afwijkingen", geen W-lijsten, geen "Was: …". Per versie één regel in `STATUS.md` (`documenten-bijwerken`).
- **Antwoorden van Carlo of Socrates niet overnemen**: verwijs naar het vraagnummer.

### 1. Verzamel de input
Lees: `requirements.md` (volumes, retentie, privacy, prestaties), `domain-model.md`, `class-diagram.md` (entiteiten, value objects, enums, relaties), `sequences.md` (welke queries/transacties de belangrijkste use cases nodig hebben), `design-notes.md`, en de gekozen database en het framework (ADR's, `composer.json`, bestaande migraties). Het gekozen databasesysteem bepaalt typen, indexen en mogelijkheden; vraag het aan de gebruiker als het nog niet vastligt (en leg het vast als ADR in `docs/adr/`, want dit is een technologiekeuze met lock-in; zie de criteria in `domain-modeling`). Tabel- en kolomnamen volgen de termen uit `GLOSSARY.md`; ontbreekt een begrip, werk dan eerst de glossary bij. Het klassendiagram (`uml-class-diagram`) is de bron voor entiteiten en relaties.

Open vragen over volumes, bewaartermijnen, audit, meertaligheid, multi-tenancy of soft deletes: **grill-sessie**, één vraag tegelijk met je aanbevolen antwoord, spiegelen na elk blok. Gebruik de skill `grilling` als die beschikbaar is.

### 2. Mapping van model naar tabellen
Werk de mapping expliciet uit. Een mapping die deze regels volgt, blijkt uit het model; alleen een afwijking of een echte keuze komt als rij in *Keuzes* (bijvoorbeeld hoe overerving is opgeslagen):
- **Entiteit → tabel.** Naam in meervoud `snake_case` (of de conventie van het framework: Laravel `orders`, `order_lines`).
- **Value object → kolommen** in de tabel van de eigenaar (e.g. `price_amount` + `price_currency`), tenzij het hergebruikt wordt met eigen levenscyclus; dan een tabel.
- **Enum → string-kolom** met `CHECK`/enum-type of een opzoektabel als de waarden door gebruikers beheerd worden of extra attributen hebben.
- **1:N → foreign key** aan de N-kant. **N:M → koppeltabel** met samengestelde unieke sleutel en eventueel eigen attributen. **1:1 → FK met unique** of samengevoegd in één tabel.
- **Overerving → kies bewust:** één tabel met discriminator (single table), tabel per subklasse (class table), of tabel per concrete klasse; motiveer op basis van de queries en NULL-last. Voor Eloquent: single table of polymorfe relatie; wees voorzichtig met polymorfe relaties (geen echte FK-integriteit).
- **Interface/strategy met meerdere implementaties** (bijv. betaalproviders): opslaan welke implementatie is gebruikt (`provider` code) en provider-specifieke gegevens in een apart `*_details`-tabel of een JSON-kolom, afhankelijk van query-behoefte. Vermijd dat een tweede provider een schemawijziging in de hoofdtabel vraagt.
- **Historie en audit:** waar eisen dat vragen, gebruik status + tijdstempels, een aparte `*_history`- of audit-tabel of event-log. Bewaar bedragen als geheel getal in centen of `DECIMAL(19,4)`, nooit als float.
- **Soft deletes, tijdstempels, ownership:** beslis per tabel en wees consequent (`created_at`, `updated_at`, `deleted_at`, `created_by`).
- **Meertaligheid / multi-tenancy:** als de eisen het vragen, leg `tenant_id` of vertaaltabellen vast en leg uit hoe uniciteit en indexen daarop worden aangepast.

### 3. Normaliseren en bewust denormaliseren
Breng elk model naar minimaal **3NF**. Controleer: geen herhalende groepen, geen gedeeltelijke afhankelijkheden van een samengestelde sleutel, geen afhankelijkheden tussen niet-sleutelkolommen. Denormaliseer **alleen** met een gemotiveerde reden (meetbare leesprestatie, gewenste momentopname zoals het factuuradres op het moment van bestellen) en noteer dat in `note`.

### 4. Detailontwerp per tabel
Per tabel in het model-JSON:
- **Kolommen** met naam, type (precies voor het gekozen DBMS, inclusief lengte/precisie), `nullable` (standaard `NOT NULL`), standaardwaarde en `note` voor betekenis of enum-waarden.
- **Primaire sleutel:** surrogaat (`bigint` auto-increment, UUID/ULID als de eisen dat vragen, bijv. niet-raadbaar of gedistribueerd) of natuurlijke sleutel; motiveer.
- **Foreign keys** (`fk: "tabel.kolom"`) met `ON DELETE`/`ON UPDATE`-gedrag in de relatiebeschrijving (`RESTRICT` als standaard; `CASCADE` alleen voor echte compositie; `SET NULL` waar optioneel).
- **Unieke constraints** en **CHECK-constraints** voor business rules die de database kan afdwingen.
- **Indexen** in `indexes`: voor elke FK, voor elke unieke bedrijfssleutel, en voor de queries uit de sequentiediagrammen (filteren, sorteren, zoeken). Noem per index waarom hij er is (welke query). Geen indexen "voor de zekerheid": ze vertragen schrijven.
- **`description`** per tabel: wat staat erin en wat is de bron (welke klasse).

### 5. Dwarsdoorsneden
Werk uit en leg vast in `database-notes.md`, één tabelregel per punt; wat het model al zegt (indexen met reden, `ON DELETE`, kolomnotities) niet herhalen:
- **Transacties en consistentie:** welke use cases hebben een transactie nodig, welk isolatieniveau, locking (optimistisch via versiekolom of pessimistisch) bij gelijktijdig gebruik, idempotentie van betalingen/imports.
- **Prestaties en volume:** verwachte rijen per tabel (uit NFR's), groei per jaar, de zwaarste queries en hoe de indexen die ondersteunen, partitionering/archivering indien nodig, N+1-risico's in het ORM.
- **Beveiliging en privacy:** welke kolommen persoonsgegevens bevatten, versleuteling (kolom of at-rest), pseudonimisering, bewaartermijn en verwijderprocedure (AVG), rechten per databasegebruiker.
- **Migratiestrategie:** volgorde van migraties, zero-downtime regels (eerst toevoegen, dan migreren, dan verwijderen), rollback, seeders/referentiedata, hoe bestaande data wordt overgenomen.
- **Back-up en herstel:** frequentie, bewaartermijn, herstelproef (koppel aan NFR's).
- **Naamgeving en conventies:** hoe tabellen, kolommen, indexen en constraints heten.

### 6. Groeperen en uitvoer
Groepeer tabellen in `groups` per functioneel gebied (zelfde gebieden als de domeinnamespaces) zodat het diagram overzichtelijk blijft. Bij meer dan circa 25 tabellen: maak naast het overzicht per gebied een eigen diagram.

Uitvoer:
- `docs/architecture/model/database.json` (bron)
- `docs/architecture/database.md` (gegenereerd: Mermaid `erDiagram`, tabelbeschrijvingen met kolommen, sleutels en indexen; nooit met de hand bewerken)
- `docs/architecture/database-notes.md` (de tabel uit stap 5; zie *Document en notities*)
- de platen op de ontwerppagina (klik op een tabel voor beschrijving en kolommen, op een relatie voor de toelichting, waarin ook `ON DELETE` staat)
- Geen aparte traceertabel: de `description` van elke tabel noemt haar klasse (stap 4).

### 7. Zelfcontrole
- Elke klasse die opgeslagen moet worden heeft een tabel, en elke tabel is herleidbaar tot een klasse of een technische noodzaak (koppeltabel, audit).
- Elke FK is gedefinieerd met `ON DELETE`-gedrag en heeft een index.
- Elke belangrijke query uit de sequentiediagrammen heeft ondersteuning in een index.
- Geen floats voor geld, geen willekeurig `varchar(255)`, geen dubbele opslag zonder reden.
- Elke eis die iets over data zegt (bewaartermijn, audit, volumes, privacy) is terug te vinden in het ontwerp.
- Het script draait zonder fouten.

### 8. Goedkeuringsmoment (verplicht)
Upload de bestanden, en post een reactie in het Nederlands met: een samenvatting van het model (aantal tabellen per gebied), de 3 à 5 belangrijkste ontwerpkeuzes met afweging (bijv. surrogaat- vs natuurlijke sleutel, hoe overerving is opgeslagen, hoe provider-specifieke gegevens zijn gemodelleerd), risico's en open vragen, en leg alleen de ontwerpkeuzes en aannames die je zelf invulde voor als korte vragen op een kaart (advies en gevolg bij nee, hoogstens één scherm; `vragen-en-akkoordrondes`, B-23), niet het databaseontwerp als document Zet de issue in de wachtstand voor gebruikersinput en stop.

Bij feedback: pas de JSON aan, genereer opnieuw, upload opnieuw en leg opnieuw voor; de nieuwe versie krijgt één regel in `STATUS.md`. Raakt de wijziging het klassendiagram (bijv. een extra attribuut), meld dat expliciet en werk het klassendiagram bij via de skill `architect-modeling`. Bij akkoord: zet in `STATUS.md` het databaseontwerp op "Goedgekeurd (datum)". Het ontwerp is nu klaar om te implementeren. Meld dat developers via `architect-implementation-plan` implementatieplannen per use case kunnen krijgen.

## Valkuilen
- Het schema niet laten leiden door het ORM of door gemak; leid het af uit het domein en de queries.
- Niet "alles in een JSON-kolom" stoppen om een ontwerpbeslissing te ontlopen.
- Geen migraties of SQL schrijven in deze fase: dat is implementatie. Wel mag je een voorbeeld-DDL van één lastige tabel opnemen ter verduidelijking.
- Niet handmatig Mermaid of HTML schrijven; altijd via het model en het script.

## Aanvulling PRC-08 (model 0.14): database bij P3 en P2

Besluit: B-08/PRP-003, B-12/PRP-034, B-07, ASM-18. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor het eigen verplichte goedkeuringsmoment (stap 8) en voor de eis van een goedgekeurd klassendiagram hierboven. Dekking: ACT-01.24, ACT-01.59, ACT-02.6.

- **P3, PRC-01 (ACT-01.24):** werk op het klassendiagram uit hetzelfde pakket, ook als dat nog niet is goedgekeurd. Het akkoord van stap 8 is GOV-11 (technisch ontwerp volgens profiel), met het databaseontwerp als laatste document. Keurt Carlo het klassendiagram af en raakt de herziening de database, dan werk je de database mee bij (ASM-18). B-07 (volledig databaseontwerp van de kern) geldt volledig voor P3.
- **P3, PRC-02:** het akkoord blijft GOV-13 (databaseontwerp), samen met het ontwerpbesluit. De paginabrieven zijn ook input.
- **P2:** alleen bij een **eigen database** een datamodel en databaseontwerp **zonder klassendiagram**, met de paginabrieven als input, binnen het document van `architect-componentontwerp` (ACT-01.59, GOV-11). Bij P1 niet van toepassing: het platform beheert de database.
- Kwaliteitscriteria: zelfcontrole van stap 7 blijft; mapping van klassen naar tabellen volledig (P3); bij P2 heeft elk opgeslagen gegeven uit de brieven een plek in het datamodel.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): één document met het klassendiagram, één akkoord

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- Het databaseontwerp hoort bij het ontwerpklassendiagram in **één document**. Stap 8 (eigen goedkeuringsmoment) vervalt: er is één kaart en één akkoord voor het geheel, ook ter naslag in de documentatie.
- Eén pagina (`ontwerppagina`, soort klassendiagram en database). De kaart bevat ook de keuzes die je in domeinmodel, sequenties, klassendiagram of database zelf invulde en die niet in de eisen of bedrijfsregels staan: vraag met advies en wat er bij nee gebeurt (B-23).
- Een afkeuring van het document telt als één afkeuring (`vragen-en-akkoordrondes`); beide delen worden herzien.
- PRC-02: één akkoord op het document, samen met het ontwerpbesluit; GOV-13 wordt daarmee onderdeel van dat akkoord.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.
