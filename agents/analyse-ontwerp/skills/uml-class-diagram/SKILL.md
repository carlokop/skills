---
name: uml-class-diagram
description: UML Class Diagram: gebruik om een ontwerpklassendiagram te maken uit het domeinmodel en de sequentiediagrammen: alle relevante klassen per namespace, GRASP, design patterns, uitbreidbaarheid via interfaces, lichte controllers en logica in services. Levert .md met Mermaid plus één ontwerppagina (ontwerppagina, opmaak met ELK) en vraagt goedkeuring.
---

# UML ontwerpklassendiagram

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

Deze skill maakt het **ontwerpklassendiagram**. Ze is fase 4 van `architect-modeling` en kan ook los worden gebruikt om klassen bij te werken (zie `architect-implementation-plan`). Communiceer in het Nederlands.

Voorwaarde: een goedgekeurd domeinmodel en goedgekeurde sequentiediagrammen. Zo niet, gebruik eerst `uml-domain-modelling` en `uml-sequence-diagrams`.

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Gedeelde werkafspraken

### Eén bron, twee weergaven
Elk diagram bestaat als **model-JSON** (de bron van waarheid). Het meegeleverde script maakt daaruit een `.md`-bestand met Mermaid en de ontwerppagina. Lees `references/model-json.md` voor het schema. Bewerk de gegenereerde bestanden nooit met de hand; pas de JSON aan en draai opnieuw. Er is niets te installeren: alleen Node. ELK en het lettertype zitten in `scripts/vendor/` en `scripts/fonts/`.

```sh
# Mermaid-weergave van één model
node ${CLAUDE_SKILL_DIR}/scripts/build.mjs docs/architecture/model/class-diagram.json --md docs/architecture/class-diagram.md

# De ontwerppagina van het hele document (Markdown met <!-- gen:naam --> per plaat)
node ${CLAUDE_SKILL_DIR}/scripts/build.mjs page docs/architecture/dcd.md --out klassendiagram.html \
  --overview dcd-modules --check-dir controle/

# Klassendiagram en database als één pagina (ontwerppagina)
node ${CLAUDE_SKILL_DIR}/scripts/build.mjs page docs/architecture/dcd.md --out klassendiagram-en-database.html \
  --overview dcd-modules --database docs/architecture/model/database.json --check-dir controle/

# Of: de ontwerppagina van één model (elke namespace een onderdeel)
node ${CLAUDE_SKILL_DIR}/scripts/build.mjs docs/architecture/model/class-diagram.json --html klassendiagram.html --check-dir controle/
```

`${CLAUDE_SKILL_DIR}` is de map van deze skill (Claude Code vult die in). Nederlandse namen komen uit `GLOSSARY.md` (`--glossary`, anders gezocht in de map van het document of hoger): bij elke klasse met een term staat die onder de Engelse naam, op elke plaat en in het infopaneel. `--database` zet het ER-model (`kind: "er"`, `architect-database`) op dezelfde pagina: in het overzicht alle tabellen per gebied, en per gebied een plaat bij de module met dezelfde naam (of de naam tussen haakjes, bijv. `Infra (BuildingBlocks)`); een gebied zonder module krijgt een eigen sectie. Het script controleert het model (onbekende klassen, ontbrekende relatie-beschrijvingen) en de tekening (`ontwerppagina`, Controle vóór oplevering) en stopt met exitcode 2 (bron) of 3 (controle) als er iets niet klopt. Bij 3 wordt de pagina niet geschreven; het verslag staat in `controle/controle.md`.

### De ontwerppagina
Maak de pagina met `ontwerppagina`, soort klassendiagram, via `build.mjs page` hierboven. Eén korte pagina voor het hele document, met de vaste opbouw van `ontwerppagina`: titel, samenvatting, overzicht (afhankelijkheden tussen modules en het volledige diagram), per module de plaat met 1–3 regels, keuzes, open vragen. Geen apart bestand per module. Je schrijft het HTML-bestand; de aanroeper publiceert het als Claude-artifact als de gebruiker dat wil of het project het voorschrijft. Bewaar een URL die de aanroeper teruggeeft in `STATUS.md`.

- **Bron:** het document (bijvoorbeeld `dcd.md`) met de vaste koppen `## Samenvatting`, per module een `##`-sectie, `## Keuzes` (tabel nr | keuze | waarom) en `## Open vragen`. Per plaat `<!-- gen:naam -->` … `<!-- /gen:naam -->` (`model/naam.json`) of een Mermaid-`classDiagram`. Een sectie (`##`) met een plaat met de groepen `Public`/`Internal` (of `Publiek`/`Intern`) is een onderdeel; de eerste alinea erin is de uitleg op de pagina; `<!-- volledig-dcd -->` markeert de plek van het volledige diagram; `--overview` noemt de plaat met de afhankelijkheden tussen modules. Het script zet alleen die secties op de pagina; de rest van het document niet.
- **Controle:** `build.mjs` doet de toetsbare punten 1 t/m 8 en schrijft per diagram een SVG (licht en donker) in `controle/svg/`. `node ${CLAUDE_SKILL_DIR}/scripts/render-png.mjs controle --theme both` maakt daar PNG's van (overzicht plus tegels op ware grootte). `render-png.mjs` heeft het npm-pakket `sharp` nodig (via `SHARP_PATH` of `node_modules` in de werkmap); het hoort niet bij de skill. Ontbreekt het, installeer het dan niet zelf: sla de beeldcontrole (punt 9) over en meld in je eindbericht dat die niet is gedaan. De aanroeper laat je werk vóór indiening controleren door de lichte variant (atlas-licht); die bekijkt die afbeeldingen (punt 9) en meldt wat het script niet ziet. `node ${CLAUDE_SKILL_DIR}/scripts/test-check.mjs` toont dat de controles fouten vangen.
- **Oplevering:** de pagina en `controle.md` als bewijs op de documentlocatie van het project; vermeld de paden (ook die van de `.md`-bestanden) in je eindbericht. Leg de keuzes voor als open vragen in je eindbericht (`vragen-en-akkoordrondes`).

### Goedkeuringsmoment (elke fase)
1. Controleer: elk element heeft een beschrijving, elke relatie een `description`, niets verwijst naar iets dat niet bestaat, en alles is te herleiden tot eisen (FR-ID's) of use cases.
2. Schrijf je eindbericht in het Nederlands: wat is er gemaakt (3 tot 6 regels), de belangrijkste ontwerpkeuzes en afwegingen, wat je niet zeker weet, de paden van de bestanden, en de **open vragen** over de keuzes en aannames die je zelf invulde: genummerd, per vraag één zin, je advies en wat er bij nee gebeurt (`vragen-en-akkoordrondes`). De aanroeper legt ze aan de gebruiker voor en geeft de antwoorden terug; een akkoord op alle vragen van het document is het akkoord op dat document.
3. Stop en geef je eindbericht terug (status "wacht op antwoorden"); de aanroeper hervat je met de antwoorden.
4. Bij feedback: pas de JSON aan, genereer opnieuw en leg opnieuw voor. Noteer de nieuwe versie met één regel in `docs/architecture/STATUS.md`.
5. Bij akkoord (de aanroeper meldt het, met de datum): zet in `STATUS.md` de fase op "Goedgekeurd (datum)" en ga naar de volgende fase.

### Document en notities
- **Document** (`dcd.md`): alleen wat op de pagina komt (`ontwerppagina`, Vaste opbouw): samenvatting, per module plaat en 1–3 regels, keuzes (nr | keuze | waarom, één regel), open vragen.
- **Notities** (`design-notes.md`): details voor developers, als tabel met één regel per punt.
- **Niet herhalen** wat al in het model-JSON staat (klassen, attributen, methoden, relaties met hun `description`, `pattern`, `grasp`). Verwijs naar het model.
- **Geen geschiedenis** in document of notities: geen secties "Wat … verandert", "Verfijningen", "Afwijkingen", geen W-lijsten, geen "Was: …". De revisies en git bewaren de geschiedenis; per versie één regel in `STATUS.md` (`documenten-bijwerken`).
- **Antwoorden van de gebruiker of Socrates niet overnemen**: verwijs naar het vraagnummer.

Houd `docs/architecture/STATUS.md` bij als overzicht: per fase status, datum goedkeuring, links naar bestanden, openstaande punten. Start elke sessie door dit bestand te lezen om te weten waar je was.

### Grill-sessies
Waar in een fase iets onduidelijk is, bereid je een grill-sessie voor als vragenronde: alle vragen die nu te beantwoorden zijn, genummerd, elk met je aanbevolen antwoord, in je eindbericht. Stop daarna; de aanroeper legt ze voor en hervat je met de antwoorden. Na elke ronde spiegel je wat er veranderd is; stop met rondes als het ontwerp er niet meer door verandert. Gebruik de skill `grilling` als die beschikbaar is. Vraag niets wat je uit requirements, code of eerdere antwoorden kunt halen.

## Stappen

### Uitgangspunten
- **Taal van het domein.** Klassenamen voor domeinconcepten komen uit `GLOSSARY.md` (skill `domain-modeling`). Voeg je een nieuw begrip toe of botst een naam met de glossary, werk de glossary dan direct bij.
- **Framework en stijl volgen.** Lees `requirements.md` (stack) en de bestaande code. Gebruik de conventies en namespaces van het framework. Voorbeelden:
  - *Laravel:* `App\Http\Controllers`, `App\Http\Requests` (validatie), `App\Models` (Eloquent), `App\Services`, `App\Repositories` (alleen als het echt iets toevoegt), `App\Actions`, `App\Events`/`Listeners`, `App\Jobs`, `App\Policies`, `App\Contracts` (interfaces), `App\Enums`, `App\Data` (DTO's).
  - *ASP.NET / Clean Architecture:* `Domain`, `Application` (use cases/services, interfaces), `Infrastructure` (EF Core, externe providers), `Web`/`Api` (controllers).
  - *Andere stacks:* volg de gangbare structuur en de bestaande repository.
- **Lichte controllers, logica in services.** Een controller doet alleen: invoer valideren (Request/DTO), één service/use-case aanroepen, resultaat omzetten naar een response. Geen bedrijfslogica, geen queries, geen externe aanroepen in controllers.
- **Domeinlogica waar de gegevens zijn.** Gedrag dat bij één domeinobject hoort (bijv. `Order::totaal()`) staat in dat object. Services coördineren over meerdere objecten en over externe afhankelijkheden.
- **Afhankelijkheden richten naar binnen/abstractie.** Services hangen van interfaces af, niet van concrete infrastructuur.
- **Elke klasse één duidelijke verantwoordelijkheid** die je in één zin kunt zeggen. Kun je dat niet, splits.

### GRASP: pas het expliciet toe en benoem het
Leg in `grasp` per klasse vast welk principe de plaatsing rechtvaardigt:
- **Information Expert**: de verantwoordelijkheid krijgt de klasse die de benodigde informatie heeft.
- **Creator**: wie `B` maakt: `A` bevat/aggregeert `B`, registreert, gebruikt het nauw of heeft de initialisatiegegevens.
- **Controller**: een niet-UI-object dat systeemoperaties ontvangt; per use case een lichte controller of use-case-klasse.
- **Low Coupling / High Cohesion**: weinig afhankelijkheden, samenhangende verantwoordelijkheden.
- **Polymorphism**: variatie op type via interface/overerving i.p.v. `if/switch` op type.
- **Pure Fabrication**: een kunstmatige klasse (service, repository) als het domeinobject anders te veel koppeling of te weinig cohesie krijgt.
- **Indirection**: een tussenlaag om twee onderdelen te ontkoppelen (adapter, mediator).
- **Protected Variations**: stabiele interface rond een plek waar verandering te verwachten is.

### Design patterns en uitbreidbaarheid
- Zoek in de eisen en domeinbeschrijvingen naar **verwachte variatie** (de "toekomst"-onderdelen uit het requirements-document en de opmerkingen uit fase 2). Waar variatie waarschijnlijk is, introduceer een **interface** met een eerste implementatie, ook al is er nu maar één. Voorbeelden:
  - betaalproviders → `PaymentProvider` (interface) + `MollieProvider` + `PaymentProviderFactory`/registry, gekozen via configuratie (**Strategy**/**Factory**/**Adapter**),
  - notificatiekanalen → `NotificationChannel` (mail, sms, push),
  - bestandsopslag → `FileStorage`, exportformaten → `Exporter`,
  - berekeningsregels (korting, belasting) → **Strategy** of **Specification**,
  - meerdere statussen met gedrag → **State**,
  - externe API's → **Adapter** + **Anti-corruption layer** zodat hun model niet doorlekt,
  - gebeurtenissen na een actie → **Observer**/events,
  - complexe aanmaak → **Builder**/**Factory**.
- Pas een pattern alleen toe als er een **concreet probleem of verwachte variatie** is. Zet de reden in `pattern` en `description` van de klasse. Geen patterns "voor de zekerheid". Eén implementatie zonder verwachte tweede krijgt geen interface, behalve bij een systeemgrens (extern systeem, I/O), daar wel.
- Leg een patternkeuze alleen vast als ADR in `docs/adr/` als ze moeilijk terug te draaien, verrassend zonder context en het resultaat van een echte afweging is (criteria van `domain-modeling`); anders volstaat `pattern` en `description` in het model.
- Houd extra klassen voor uitbreidbaarheid zichtbaar en gemarkeerd (`description`: "Uitbreidingspunt: …").

### Uitvoering
1. Leid klassen af uit domeinmodel + sequentiediagrammen. Elke deelnemer in de sequenties moet een klasse zijn en elk bericht een methode. Controleer dat beide kanten kloppen, en pas de sequenties aan als je in het ontwerp iets verbetert (meld dat).
2. Werk **alle relevante klassen** uit, niet alleen de kern: controllers, requests/DTO's, services, domeinobjecten/entiteiten, value objects, enums, repositories, interfaces + implementaties, events/listeners/jobs, policies, adapters/providers, exceptions voor domeinfouten. Voor zeer standaard framework-onderdelen met identiek patroon (bijv. tien gelijkvormige CRUD-controllers) mag je één representatief voorbeeld volledig uitwerken en de rest opsommen in de `description`; benoem dat expliciet.
3. Per klasse: `name`, `stereotype`, `pattern` (indien van toepassing), `grasp`, `description` (verantwoordelijkheid in één zin + waarom hier), `attributes` en `methods` met zichtbaarheid, parameters en typen in de taal van het project.
4. **Alle relaties** met `type`, `multiplicity`, `label` en een verplichte `description`. Gebruik `realization` voor interface-implementaties en `dependency` voor "gebruikt tijdelijk".
5. **Groepeer per namespace** exact zoals de code zal zijn (bijv. `App\Services\Payments`). Eventueel splitsen in meerdere diagrammen (per module) plus één overzichtsdiagram als het te groot wordt. Op de pagina zijn lijnsoorten aan/uit te zetten en is er een weergave "Alleen namen".
6. Uitvoer:
   - `docs/architecture/model/class-diagram.json` (`kind: "class"`)
   - `docs/architecture/class-diagram.md` en de ontwerppagina (klikbaar: klik op een klasse voor beschrijving, GRASP, pattern en relaties; klik op een lijn voor de toelichting)
   - `docs/architecture/design-notes.md`: de details voor developers als tabel, één regel per punt (onderwerp | afspraak | bron): patterns en uitbreidingspunten (hoe een developer een nieuwe variant toevoegt), zichtbaarheid, transacties, rollen. Zie *Document en notities*.
7. Toets met de sequenties: loop elk scenario langs de klassen en methoden. Controleer coupling (geen cirkels tussen namespaces), cohesie, en dat controllers dun zijn.
8. Goedkeuringsmoment. Na akkoord: zet in `STATUS.md` de fase op goedgekeurd, meld in je eindbericht dat de volgende stap `architect-database` is, met de open vraag of je daarmee mag beginnen.


## Geen eigen stop, akkoord via het pakket

Dit gaat voor het eigen goedkeuringsmoment hierboven.

- **Geen eigen stop bij het eerste ontwerp van een nieuw project.** Je werkt door naar het volgende document van het pakket. Het akkoord is het akkoord op het technisch ontwerp van het profiel: één set open vragen per keuze (`vragen-en-akkoordrondes`). Keurt de gebruiker een document af, dan herzie je alleen dat document en leg je het opnieuw voor; latere documenten die erdoor geraakt worden werk je mee bij en komen opnieuw in hetzelfde pakket.
- **Bij een uitbreiding volgt het akkoord als open vragen per keuze**, samen met het ontwerpbesluit: het akkoord op het ontwerpklassendiagram (met database).
- **Alleen bij profiel P3** (`architectuurprofielen`).
- Alleen P3.
- Kwaliteitscriteria blijven ongewijzigd.


## Eén document met de database, één akkoord

Dit gaat voor alle eerdere regels over akkoord, pagina of document voor dit onderdeel.

- Ontwerpklassendiagram en databaseontwerp (`architect-database`) zijn **één document** met **één set open vragen en één akkoord**, ook ter naslag in de documentatie. Het eigen goedkeuringsmoment van dit diagram en "meld dat de volgende stap `architect-database` is en vraag of je daarmee mag beginnen" vervallen: je werkt direct door naar de database.
- Eén pagina (`ontwerppagina`, soort klassendiagram en database), zoombaar, met beide delen.
- Bij de open vragen staan ook de keuzes die je in domeinmodel, sequenties, klassendiagram en database zelf invulde en die niet in de eisen of bedrijfsregels staan: elk een vraag met advies en wat er bij nee gebeurt.
- Bij een uitbreiding vervangen het akkoord op het klassendiagram en dat op het databaseontwerp elkaar niet: er is één akkoord voor het document.
