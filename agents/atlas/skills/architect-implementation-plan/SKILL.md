---
name: architect-implementation-plan
description: Maakt per slice het implementatieplan met werkpakketten, op opdracht van de aanroeper, en toetst de backlog-items van de slice tegen die werkpakketten. Gebruik ook als een developer vraagt om een plan voor een onderdeel of use case die nog niet is uitgewerkt. Redeneert hoe het werk in het bestaande ontwerp past en past zo nodig de modellen aan (met overleg). Eisen en use cases komen uit de goedgekeurde documenten.
---

# Architect: implementatieplan voor een nieuwe of nog niet uitgewerkte use case

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

Dit gebeurt per slice, na het bouwcontract, op opdracht van de aanroeper. In de bouwfase kan ook een developer-agent (of de gebruiker) om een plan vragen, voor een opdracht waarvoor het ontwerp nog niet bestaat of niet past. Het plan bepaalt **hoe het in de architectuur past**, past de modellen aan als dat nodig is en levert een plan waarmee een developer kan bouwen zonder zelf architectuurkeuzes te hoeven maken. **Wat** het systeem moet doen (eisen, use cases, bedrijfsregels, acceptatiecriteria) staat vast in de goedgekeurde documenten en wordt hier niet bepaald.

Communiceer in het Nederlands. Naar de gebruiker kort en helder; naar developers concreet en volledig.

## Taal en naamgeving (verplicht)
- **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
- Gebruik de conventies van de taal en het framework: `PascalCase` voor klassen, `camelCase` voor methoden, `snake_case` voor tabellen en kolommen (meervoud voor tabellen), Engelse namespaces.
- **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Bij het eerste gebruik van een Engelse domeinterm leg je de Nederlandse betekenis uit in `GLOSSARY.md` in de root van het project (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`, plus een extra regel `_NL_:` voor de Nederlandse term) en gebruik je daarna overal dezelfde Engelse term.
- Controleer vóór je het script draait en vóór elk goedkeuringsmoment dat er geen Nederlandse identifier of label in een model staat.

## Wanneer gebruik je dit
- De aanroeper vraagt per slice om het implementatieplan, of vraagt namens een developer: "Wat is het ontwerp voor <use case/onderdeel>?"
- Er is werk toegewezen waarvoor geen sequentiediagram of klassen bestaan.
- Een gevraagde wijziging dwingt tot een ander ontwerp (nieuwe klasse, tabel, integratie).

Niet gebruiken voor: een geheel nieuw systeem (eerst `requirements-analysis`, daarna `architect-architecture-choice`), of werk dat volledig binnen een bestaand, goedgekeurd ontwerp valt (verwijs dan alleen naar de bestaande modellen).

## Stappen

### 1. Begrijp de vraag en de huidige staat
1. Lees de opdracht van de aanroeper en de context volledig: wat is het doel, wie vraagt het, wat is al bedacht?
2. Lees `docs/architecture/`: `STATUS.md`, `requirements.md`, `use-cases.md`, `business-rules.md`, `architecture.md`, `domain-model.md`, `sequences.md`, `class-diagram.md`, `design-notes.md`, `database.md`, `database-notes.md`, `GLOSSARY.md` (projectroot), `docs/adr/`, plus eerdere plannen in `implementation-plans/`.
3. Lees de **echte code** in het geraakte gebied: het ontwerp kan achterlopen op wat er gebouwd is. Wijkt de code af van het model, noteer dat; code is dan de feitelijke staat en het model moet worden bijgewerkt of de code gecorrigeerd (leg de keuze voor).
4. Bepaal: is dit een **nieuwe use case**, een **uitbreiding van een bestaande**, of een **wijziging** van gedrag? Heeft het een eis nodig die nog niet bestaat? Dan moet die eerst worden vastgesteld door degene die de eisen beheert (de business analist, Socrates): zet een verzoek aan Socrates in je eindbericht met de skill `overdracht` (wat is gevraagd, welke eisen of use cases het raakt, wat je al weet), stop en geef je eindbericht terug; de aanroeper hervat je als de nieuwe of gewijzigde eis en use case zijn goedgekeurd (skill `requirements-clarification`, sectie B). Schrijf zelf geen eisen of use cases.

### 2. Overleg waar nodig (beperkt)
Is het gewenste gedrag onduidelijk, dan beslis je dat niet zelf.
- **Gedrag, eisen, bedrijfsregels, acceptatiecriteria:** zet de vraag als verzoek aan Socrates (die de eisen beheert) in je eindbericht (skill `overdracht`). Die antwoordt uit het goedgekeurde document of vraagt de gebruiker.
- **Technische feiten** (wat de code nu doet): zoek het op in de code; lukt dat niet, dan een vraag in je eindbericht die de aanroeper aan de developer stelt.
- **Technische keuzes met afwegingen:** zet gerichte vragen aan de gebruiker als open vragen in je eindbericht, **genummerd, elk met je aanbevolen antwoord**.

Vraag niets wat je uit de documenten en code kunt halen. Zet de vragen in je eindbericht, stop en geef het terug (status "wacht op antwoorden"); de aanroeper hervat je met de antwoorden.

### 3. Controleer de use case
De use case (met acceptatiecriteria en bedrijfsregels) komt uit de goedgekeurde documenten, in dezelfde vorm als in `use-cases.md`, met een eigen UC-nummer en verwijzingen naar eisen (FR-/NFR-ID's). Is hij er nog niet of onvolledig, ga dan terug naar stap 1.4. Gebruik `domain-modeling` voor de termen: nieuwe begrippen komen in `GLOSSARY.md`, botsende of vage termen scherp je aan.

### 4. Pas het ontwerp aan — kleinste wijziging die klopt
Gebruik per model de bijbehorende deelskill; zij bevatten de regels, het JSON-schema en het script. **Het eigen goedkeuringsmoment van die deelskills geldt hier niet**: voor dit plan geldt alleen het overleg uit stap 5 (en de goedkeuring daar, indien nodig).

Redeneer in deze volgorde en kies steeds de eenvoudigste oplossing die de bestaande architectuur respecteert:

1. **Past het bestaande ontwerp?** Gebruik bestaande klassen, services en uitbreidingspunten (bijv. een nieuwe implementatie van een bestaande interface) voordat je nieuwe concepten toevoegt.
2. **Domeinmodel** (`uml-domain-modelling`): bevat de use case concepten, attributen of relaties die nog niet bestaan? Pas `model/domain-model.json` aan.
3. **Sequentiediagram** (`uml-sequence-diagrams`): maak er een voor deze use case (hoofdscenario + belangrijkste alternatieven) in `model/sequences.json`. Controleer de GRASP-verdeling: dunne controller, logica in service/domeinobject, afhankelijkheden via interfaces.
4. **Klassendiagram** (`uml-class-diagram`): voeg klassen of methoden toe en houd je aan het framework en de bestaande namespaces. Gebruik design patterns alleen bij concrete variatie. Voeg een interface alleen toe als er een tweede variant verwacht wordt of het een systeemgrens is. Controleer dat je geen cyclische afhankelijkheden tussen namespaces maakt.
5. **Database** (`architect-database`): kies de kleinste schemawijziging (nieuwe tabel of kolom, index). Denk aan: migratievolgorde, bestaande data, standaardwaarden voor bestaande rijen, zero-downtime (eerst toevoegen, dan gebruiken, dan opruimen), indexen voor nieuwe queries. Pas `model/database.json` aan.
6. Genereer de bestanden opnieuw met het script van de betreffende deelskill (elke deelskill beschrijft het commando en het schema). Bewerk gegenereerde bestanden nooit handmatig.
7. Genereer de bijgewerkte pagina's opnieuw met `ontwerppagina` en vermeld de paden, samen met die van de `.md`-bestanden, in je eindbericht; de aanroeper publiceert een pagina als Claude-artifact als de gebruiker dat wil of het project het voorschrijft.
8. Leg een beslissing vast als ADR in `docs/adr/` **alleen als** ze moeilijk terug te draaien is, zonder context verrassend is én een echte afweging was (criteria van `domain-modeling`).

### 4b. Controleer op breaking changes (verplicht, voor elk plan)
Een wijziging is **breaking** als bestaande code, data, gebruikers of integraties erdoor kunnen stoppen met werken of anders gaan werken. Beoordeel elke wijziging uit stap 4 (domein, sequenties, klassen, database) tegen onderstaande lijst, en leg het resultaat vast in sectie "Breaking changes" van het plan, ook als het antwoord "geen" is (met de controles die je deed).

**1. Zoek de afnemers (consumers).** Raadpleeg de echte code, niet alleen de modellen: zoek (grep) op elke klasse, methode, route, tabel, kolom, event, jobnaam en configuratiesleutel die je wijzigt. Kijk in: broncode, tests, routes en API-specificaties, migraties, seeders, frontend, configuratie en `.env`-voorbeelden, documentatie, en openstaand en lopend werk van anderen (branches, taken) dat hetzelfde gebied raakt. Noteer wie of wat elke wijziging gebruikt. Kun je de afnemers niet vinden, behandel de wijziging dan als mogelijk breaking.

**2. Controlelijst.**
| Gebied | Breaking als je… |
|---|---|
| HTTP/API | een route, methode, parameter, veld, statuscode of foutformaat verwijdert, hernoemt, verplicht maakt of van type/betekenis wijzigt; autorisatie aanscherpt; paginering, sortering of standaardwaarden wijzigt |
| Database | een tabel/kolom verwijdert of hernoemt; type, lengte, precisie of nullability wijzigt; een NOT NULL, unique, check of foreign key toevoegt aan bestaande data; een standaardwaarde of enum-waarde wijzigt of verwijdert; sleutels of tijdzone/opslagformaat wijzigt; een index verwijdert waar queries op leunen |
| Klassen en contracten | een publieke methode, constructor of interface wijzigt of verwijdert (signatuur, returntype, exceptions, volgorde van argumenten); gedrag van een bestaande methode wijzigt; een klasse verplaatst of van namespace verandert; een interface een nieuwe verplichte methode krijgt (breekt alle implementaties) |
| Asynchroon | de payload, naam of volgorde van een event, job, bericht of queue wijzigt terwijl er nog oude berichten in de wachtrij staan of in-flight zijn; listeners/handlers gedrag wijzigt |
| Opgeslagen vorm | geserialiseerde objecten, cache-sleutels, sessies, bestanden of JSON-kolommen die door oudere code geschreven zijn niet meer leesbaar zijn |
| Configuratie | een omgevingsvariabele, configuratiesleutel, featureflag of standaardwaarde wijzigt of verplicht wordt |
| Externe koppelingen | een webhook, API-aanroep naar of van derden, bestandsformaat of authenticatie wijzigt; een externe partij de wijziging niet tegelijk kan doorvoeren |
| Gedrag en regels | een business rule, berekening, status-overgang, validatie of notificatie wijzigt voor bestaande gebruikers of data |
| Werk in uitvoering | andere agents of branches op de bestaande vorm bouwen of testen |
| Niet-functioneel | prestaties, beveiliging of beschikbaarheid merkbaar verslechteren |

**3. Classificeer elke wijziging** als `non-breaking`, `mogelijk breaking` (afnemer onbekend of gedrag onzeker) of `breaking`. Noteer per breaking wijziging: wat verandert, wie of wat raakt het, hoe ernstig (data verlies, uitval, foutmelding, alleen cosmetisch), en of de afnemer binnen of buiten ons beheer valt.

**4. Onderneem actie, in deze volgorde van voorkeur:**
1. **Vermijd het.** Kies een ontwerp dat niet breekt:
   - *Additief:* nieuw veld/kolom/methode erbij in plaats van wijzigen; nieuwe velden optioneel met standaardwaarde.
   - *Expand → migrate → contract:* eerst nieuwe structuur toevoegen (expand), dan data en afnemers overzetten (migrate), pas in een latere release het oude verwijderen (contract). Voor databasekolommen: nieuwe kolom, dubbel schrijven, backfill, lezen omzetten, oude kolom pas later droppen.
   - *Versiebeheer:* nieuwe API-versie of nieuwe route naast de oude; nieuwe versie van een event/payload naast de oude.
   - *Adapter of compatibiliteitslaag:* de oude interface blijft bestaan en delegeert naar de nieuwe; markeer als deprecated met einddatum.
   - *Featureflag* of gefaseerde uitrol waar gedrag verandert.
2. **Beperk het.** Kan het niet vermeden worden, ontwerp dan het migratiepad: volgorde van uitrol, wie wat wanneer aanpast, overgangsperiode met beide vormen, backfill/datamigratie, rollback, en afstemming met externe partijen.
3. **Accepteer het bewust.** Alleen met expliciet akkoord van de gebruiker (stap 5), met een gemotiveerde reden waarom vermijden niet kan of niet loont.

**5. Verwerk de actie in het plan en het ontwerp:**
- Sectie "Breaking changes" in het plan (zie sjabloon): wijziging, afnemers, classificatie, gekozen aanpak, migratiepad, rollback.
- **Aparte werkpakketten** in sectie 7 voor: het omzetten van elke afnemer, de datamigratie/backfill, de compatibiliteitslaag, en het later opruimen (contract-stap, met trigger of datum). Het opruimen is een werkpakket met een voorwaarde. Jij maakt geen taken of backlog-items aan.
- **Acceptatiecriteria en tests**: een contract- of regressietest die het oude gedrag vastlegt zolang de overgang loopt; een test dat oude data en oude clients blijven werken; een migratietest heen én terug op een kopie van realistische data.
- Een **ADR** in `docs/adr/` als er een breaking change wordt geaccepteerd of een deprecation-beleid wordt gekozen (past bij de drie criteria van `domain-modeling`).
- Markeer in de modellen (`description` van de klasse of tabel) wat deprecated is en tot wanneer. Pas `STATUS.md` aan.
- Noem in je eindbericht de **getroffen developers en agents**, met wat verandert en wat zij moeten doen; de aanroeper informeert hen.

### 5. Bepaal of overleg met de gebruiker nodig is
**Leg het ontwerp voor aan de gebruiker voordat je het plan vrijgeeft** wanneer één van deze waar is:
- er is een **breaking change** of een **mogelijk breaking change** die je niet kunt wegnemen (stap 4b). Leg dan altijd voor, ook als de wijziging klein lijkt,
- een eerder goedgekeurd model wordt **niet-compatibel** gewijzigd (klassen of tabellen veranderen van betekenis, verdwijnen of krijgen andere relaties),
- er komt een **nieuwe externe afhankelijkheid, dienst of technologie**,
- de wijziging raakt **beveiliging, privacy, kosten of prestaties** merkbaar. Verandert het aanvalsvlak, meld dan ook dat een threat model nodig is,
- het gedrag van de use case is niet eenduidig (dan eerst via stap 2),
- de wijziging is groot (meer dan circa 3 dagen werk of meer dan één module).

Schrijf dan een kort, scanbaar eindbericht: wat vroeg de developer, wat is je voorstel in 5 regels, welke modellen veranderen (met links), **welke breaking changes er zijn, wie ze raakt en hoe je ze vermijdt of opvangt (inclusief migratiepad en opruimmoment)**, alternatieven en waarom je dit kiest, risico's, en zet de keuzes als open vragen: genummerd, per vraag één zin, advies en gevolg bij nee; hoogstens één scherm (`vragen-en-akkoordrondes`). De aanroeper legt ze aan de gebruiker voor; een akkoord op alle vragen is het akkoord. Stop en geef je eindbericht terug (status "wacht op antwoorden").

Elke wijziging van een goedgekeurd document gaat langs open vragen over de gewijzigde keuzes (het akkoord van dat document). Er is geen uitzondering voor kleine wijzigingen en je meldt niets meer achteraf. Geldt een van bovenstaande voorwaarden, dan is het ontwerp per slice en het plan onderdeel van het akkoord op het bouwcontract per slice en noem je de voorwaarde daar; er is geen apart akkoord meer.

### 6. Schrijf het implementatieplan
Schrijf `docs/architecture/implementation-plans/<UC-nummer>-<korte-naam>.md` en vermeld het pad in je eindbericht. Het plan moet zo concreet zijn dat een developer het kan uitvoeren zonder zelf ontwerpkeuzes te maken, maar zonder de code al voor te schrijven.

```markdown
# Implementatieplan – UC-NN <naam>
Aangevraagd door: <wie> · Datum: <datum> · Status: Ter goedkeuring | Goedgekeurd | In uitvoering

## 1. Doel en context
Wat moet er gebeuren en waarom (2 tot 5 regels). Gedekte eisen: FR-…, NFR-…. Acceptatiecriteria: AC-…. Bedrijfsregels: BR-….

## 2. Wat verandert in het ontwerp
| Model | Wijziging | Link |
Domeinmodel · sequentiediagram · klassendiagram · database. Geef per wijziging aan of het nieuw, uitgebreid of aangepast is.

## 3. Breaking changes
Resultaat van de controle (stap 4b): welke afnemers zijn gecontroleerd en hoe (zoektermen, bestanden), en per wijziging:
| Wijziging | Afnemers | Classificatie | Aanpak (vermijden / beperken / geaccepteerd) | Migratiepad en rollback | Opruimmoment |
Geen breaking changes? Schrijf dat expliciet, met wat je gecontroleerd hebt.
Goedkeuring van de gebruiker: n.v.t. | gevraagd op <datum> | akkoord <datum>.

## 4. Uitwerking per laag
Per laag/namespace: te maken of te wijzigen klassen met pad, verantwoordelijkheid, publieke methoden (signatuur), en de patterns/interfaces die je moet gebruiken.
- Controller / request-validatie
- Service(s) / use-case-klassen
- Domeinobjecten / entiteiten / value objects
- Repositories / providers / adapters
- Events, listeners, jobs
- Policies / autorisatie
- Configuratie, routes
- Frontend/UI (indien aan de orde)

## 5. Database
Migraties in volgorde (tabel/kolom, type, null, default, index, FK + delete-gedrag), seed- of referentiedata, datamigratie van bestaande rijen, rollback.

## 6. Foutafhandeling en randgevallen
Welke fouten, hoe afgehandeld, welke HTTP-statuscodes/meldingen, concurrency, idempotentie, validatieregels.

## 7. Volgorde en werkpakketten
Genummerde werkpakketten (WP-1, WP-2, …) in uitvoervolgorde. De hoofdsessie deelt ze op in taken. Per werkpakket:
- **ID en titel** (werkwoord eerst), **doel** in één zin
- **Bestanden/klassen** die geraakt worden
- **Afhankelijk van:** werkpakket-ID('s)
- **Klaar als (acceptatiecriteria):** controleerbaar, bijv. "POST /x met geldige data geeft 201 en een rij in `y`". Noem de AC-ID's van de use case.
- **Pagina** (alleen frontendpakket): paginabrief en paginatype
- **Tests:** welke (unit, feature, integratie) en welke gevallen
- **Compatibiliteit:** raakt dit pakket een breaking change (zie sectie 3)? Zo ja: welke afnemer, welke overgangsregel, en welke test bewijst dat oude clients/data blijven werken
- **Opruimen vanaf** (alleen opruimpakket na een breaking change): de trigger of datum uit sectie 3
Werkpakketten zijn zo klein dat ze in één sessie af kunnen en parallel uit te voeren zijn waar de afhankelijkheden dat toelaten.

## 8. Testplan
Hoe wordt de use case als geheel getoetst (scenario's uit de use case, foutgevallen, niet-functionele eisen zoals prestaties), plus de contract- en regressietests en de migratietest (heen en terug) uit de breaking-changeaanpak.

## 9. Risico's en open punten
## 10. Definition of done
De definition of done staat in `CONSTRAINTS.md`. Specifiek voor dit plan: code volgt de klassen in het ontwerp (namen, namespaces, verantwoordelijkheden), migraties draaien heen en terug, en alle genoemde breaking changes zijn afgehandeld zoals in sectie 3 (afnemers omgezet, compatibiliteitstests groen, opruimpakket opgenomen), en geen afwijking van het model zonder overleg.
```

### 7. Overdracht aan de aanroeper
- Het plan bestaat uit **werkpakketten**, niet uit taken. Jij maakt geen taken of backlog-items aan.
- Beschrijf elk werkpakket zelfstandig leesbaar met afhankelijkheden en AC-verwijzingen. Een frontendpakket verwijst naar een paginabrief en een paginatype.
- Zet in je eindbericht: samenvatting, paden naar plan en gewijzigde modellen, en de lijst werkpakketten.
- Geef je eindbericht terug met de status (klaar of wacht op antwoorden).

### 8. Tijdens en na de bouw
- Vraagt een developer hulp of lopen ze vast op een ontwerpkeuze: antwoord in je eindbericht, pas het plan of de modellen aan als het ontwerp fout blijkt, en documenteer dat. Gaat de vraag over de bedoeling van een eis, verwijs de developer dan naar degene die de eisen beheert.
- Komt de code uiteindelijk **anders** uit dan het model, dan beslis je samen met de gebruiker: de code corrigeren of het model bijwerken. Laat nooit stilzwijgend afwijkingen bestaan; werk `STATUS.md` en de modellen bij zodat het ontwerp klopt met de werkelijkheid.

## Valkuilen
- Een groot herontwerp voorstellen voor een kleine behoefte. Begin altijd bij wat er al is.
- Een plan zonder acceptatiecriteria of volgorde: developers moeten dan zelf gaan raden.
- Modellen aanpassen zonder de gebruiker te informeren als er iets niet-compatibels verandert.
- Een plan schrijven zonder de huidige code te lezen.
- Eisen, use cases of bedrijfsregels zelf schrijven of wijzigen in plaats van ze via een verzoek aan Socrates te laten vaststellen.
- Alleen in de modellen zoeken naar afnemers: breaking changes zitten vaak in code, queues, configuratie en werk van anderen.
- Een kolom, route of methode in één stap hernoemen of verwijderen. Gebruik expand → migrate → contract.
- De opruimtaak vergeten: een compatibiliteitslaag zonder einddatum wordt permanente schuld.

## Slices, werkpakketten en akkoord

Dit gaat voor stappen hierboven die er anders over zeggen.

- **Trigger:** een opdracht van de aanroeper voor een slice, of namens een developer of de gebruiker. Output: **werkpakketten** met afhankelijkheden en AC-verwijzingen, geen taken. Taken of backlog-items aanmaken hoort niet bij deze skill.
- **Ontwerp per slice.** Een stap binnen het globale ontwerp, per profiel (`architectuurprofielen`): P1 templates, blokken en configuratie van de slice (`architect-cms-configuratie`); P2 componenten, routes en de sequenties van nieuwe flows (`architect-componentontwerp`); P3 modules, componenten, interfaces en zo nodig sequentie- en klassendiagram (`uml-sequence-diagrams`, `uml-class-diagram`). Input zijn ook de paginabrieven en ontwerpen. Het bouwcontract (`architect-api-contracts`) volgt op het ontwerp per slice. Raakt de slice het globale ontwerp of het profiel, dan stop je en meld je in je eindbericht dat eerst het globale ontwerp of profiel bijgewerkt moet worden, met het ontwerpbesluit.
- **Voorwaardelijk akkoord.** Stap 5 verwijst naar het akkoord op het bouwcontract per slice. Geldt een voorwaarde (breaking change, niet-compatibele wijziging, nieuwe afhankelijkheid, gevolgen voor beveiliging, privacy, kosten of prestaties, onduidelijk gedrag, grote wijziging), dan zijn ontwerp per slice en plan onderdeel van dat akkoord en noem je de voorwaarde.
- **Taken toetsen tegen de werkpakketten**, altijd vóór het akkoord op het backlog. Lees de taak- en epicbestanden van de slice (standaard in `docs/backlog/todo/`, of de plek die het project voorschrijft) en controleer: is elk werkpakket gedekt, kloppen de afhankelijkheden, passen de taken in het globale ontwerp, verwijst elke frontendtaak naar een brief ("frontendtaak zonder brief") en noemt ze het paginatype uit het plan, en noemt elke opruimtaak "Opruimen vanaf" zoals in het plan? Uitkomst in je eindbericht: "geen opmerkingen", of opmerkingen die elk het werkpakket of de taak noemen. Jij hebt het laatste woord op technische punten. Na 2 toetsrondes, of bij een conflict over iets niet-technisch, beslist de gebruiker: zet het verschil als open vraag in je eindbericht. Klaar als elk werkpakket en elke taak van de slice is nagelopen.
- **Nacontrole van de backlog-items.** Week een antwoord van de gebruiker op het backlog af van het advies, dan laat de aanroeper jou de verwerking nakijken: is elk afwijkend antwoord goed verwerkt in de taken, en is er geen nieuwe keuze over het hoofd gezien? Een nieuwe keuze wordt een vraag, geen afkeuring. Uitkomst: "verwerking in orde", of opmerkingen. Klaar als elk afwijkend antwoord is nagelopen en de uitkomst in je eindbericht staat.
- **Per profiel:** de werkpakketten volgen het profiel; bij P1 vooral configuratie-, thema-, plugin- en contentpakketten.
- **Kwaliteitscriteria:** elk werkpakket heeft AC-ID's en afhankelijkheden; elk frontendpakket verwijst naar brief en paginatype; elk opruimpakket noemt "Opruimen vanaf"; geen taken of backlog-items door Atlas; de controle op breaking changes (4b) blijft verplicht; bij een voorwaarde staat die bij het akkoord op het bouwcontract.
- **Voorbeeld:** werkpakket WP-2 "Orders-tabel en repository" (AC-03.1, AC-03.2), hangt af van WP-1. Frontendpakket WP-4 "Winkelwagen" (brief *Winkelwagen*, paginatype overzicht). Bij de toets: "Taak *Create orders table* mist de afhankelijkheid van WP-1." En: "Taak *Build cart page* verwijst niet naar de brief *Winkelwagen*, en noemt paginatype detail; het plan zegt overzicht."
- Use cases zijn van Socrates; het opdelen in taken hoort niet bij deze skill.
