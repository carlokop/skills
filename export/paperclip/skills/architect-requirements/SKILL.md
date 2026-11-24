---
name: architect-architecture-choice
description: Gebruik nadat het requirements-document is goedgekeurd om de architectuur te kiezen en te onderbouwen: drivers, twee à drie alternatieven met afweging, keuze, ADR's en een context- en containerdiagram. Stelt zelf geen eisen vast; dat gebeurt met requirements-analysis. Vraagt goedkeuring.
---

# Architect: architectuurkeuze

Deze skill onderbouwt welke architectuur het systeem moet krijgen, op basis van een **goedgekeurd requirements-document**. Alle latere modelleerwerk (domeinmodel, sequenties, klassen, database) bouwt hierop. De eisen zelf stel je hier niet vast: dat gebeurt met de skill `requirements-analysis`.

Communiceer met de gebruiker in het Nederlands, kort en concreet. Documenten schrijf je ook in het Nederlands, met Engelse vaktermen waar dat gebruikelijk is.

## Taal en naamgeving
Alles wat later in modellen en code terechtkomt (domeinconcepten, entiteiten, rollen, statussen, API-namen) is Engels en staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`, plus een extra regel `_NL_:` voor de Nederlandse term). Gebruik de termen uit de glossary en voeg alleen technische begrippen toe die ontbreken.

## Wanneer gebruik je dit
- Er is een nieuw systeem of een groot nieuw onderdeel en `docs/architecture/requirements.md` heeft `Status: Goedgekeurd`.
- Er wordt gevraagd een architectuur voor te stellen of te herzien.

Is er geen goedgekeurd requirements-document, of zijn de eisen onduidelijk? Begin dan niet. Vraag het requirements-document via een issue (skill `overdracht`) en wacht op goedkeuring. Is er al een goedgekeurde architectuur (`docs/architecture/architecture.md`)? Lees die eerst en pas alleen aan wat verandert. Voor losse nieuwe onderdelen gebruik je `architect-implementation-plan`.

## Werkplaats en bestanden
Alles gaat in de projectwerkmap onder `docs/architecture/`:

| Bestand | Inhoud |
|---|---|
| `architecture.md` | de architectuurkeuze (hoofdresultaat) |
| `docs/adr/NNNN-titel.md` | één bestand per architectuurbeslissing (ADR), zie `domain-modeling` |
| `GLOSSARY.md` (projectroot) | woordenlijst; alleen bijwerken met technische begrippen |

Maak de map aan als die niet bestaat. Het document is ook als taakdocument of bijlage op de Paperclip-issue beschikbaar (zie stap 10), niet alleen op schijf.

## Stappen

### 1. Verken eerst, vraag later
Lees voordat je iets aan de gebruiker vraagt: `requirements.md` (inclusief niet-functionele eisen en randvoorwaarden), `use-cases.md` en `business-rules.md` als die er zijn, de issue en eerdere reacties, bestaande documentatie en de bestaande code en configuratie (`composer.json`, `package.json`, `docker-compose`, `.csproj`, migraties, enz.). Alles wat je daar zelf kunt vinden, vraag je niet.

### 2. Technische vragen (alleen waar nodig)
Stel via de skill `grilling` alleen vragen over technische randvoorwaarden die de requirements niet beantwoorden: bestaande stack, hosting, teamkennis, budget, licenties, integratiemogelijkheden. Zet de vragen op het issue en zet het in de wachtstand voor gebruikersinput, zoals de `paperclip`-skill beschrijft.

Vragen over eisen of gedrag stel je niet zelf. Is een eis onduidelijk of technisch problematisch, meld dat dan via een issue (skill `requirements-clarification`, sectie B) met het probleem en de opties. Pas goedgekeurde eisen of de scope nooit zelf aan.

### 3. Bepaal de drijvende krachten
Kies de 3 à 5 eisen of randvoorwaarden die de structuur het meest bepalen (bijv. "aantal gelijktijdige gebruikers", "koppeling met 3 externe systemen", "klein team", "audit-trail verplicht"). Noem bij elke driver de FR-/NFR-ID's.

### 4. Genereer 2 tot 3 serieuze alternatieven
Bijvoorbeeld: gelaagde monoliet · modulaire monoliet · microservices · serverless · event-driven · CQRS/event sourcing · API + losse SPA · server-rendered applicatie. Geen stroman-alternatieven; elk alternatief moet in deze situatie verdedigbaar zijn.

### 5. Weeg af
Gebruik een tabel: per alternatief hoe het scoort op elke driver (++ / + / 0 / − / −−), plus kosten, complexiteit, teamkennis, uitbreidbaarheid en operationele last.

### 6. Kies en motiveer
Eén duidelijke aanbeveling, met de belangrijkste nadelen eerlijk benoemd en wat je doet om die te beperken. Voorkeursrichting bij twijfel: de eenvoudigste architectuur die de drivers haalt (vaak een goed opgedeelde monoliet) en uitbreidingspunten waar de eisen toekomstige variatie voorspellen. Voeg geen complexiteit toe voor onzekere eisen. Houd rekening met het **bestaande framework en de stack** (bijv. Laravel: Eloquent, service-laag, queues, events; ASP.NET: Clean Architecture/Onion, EF Core, DI) en de conventies daarvan. Kies de architectuur zo dat het framework mee werkt, niet tegen.

### 7. Leg beslissingen vast als ADR (spaarzaam)
Alleen als alle drie waar zijn, zoals `domain-modeling` voorschrijft: de keuze is moeilijk terug te draaien, zonder context verrassend voor een latere lezer, én het resultaat van een echte afweging. Typisch: architectuurstijl, technologie met lock-in, integratiestijl tussen contexten, bewuste afwijkingen van het voor de hand liggende, randvoorwaarden die niet in de code zichtbaar zijn. Makkelijk terug te draaien keuzes krijgen geen ADR.

### 8. Schets de globale structuur
Een contextdiagram en een containerdiagram in Mermaid (`flowchart`) in `architecture.md`. Geen klassen of tabellen; dat komt later in de modelleerskills en `architect-database`.

### 9. Zelfcontrole voor je het voorlegt
- Is elke architectuurkeuze herleidbaar tot minstens één eis of randvoorwaarde (FR-/NFR-ID)?
- Zijn de alternatieven echt overwogen en de nadelen van je keuze benoemd?
- Zijn aannames en open vragen expliciet?
- Is het document leesbaar voor een niet-technicus (samenvatting bovenaan, geen onverklaard jargon)?

### 10. Keuzes voorleggen (verplicht, niet overslaan)
- Voeg `architecture.md` toe als taakdocument of upload het als bijlage bij de issue. Een pad op schijf alleen is niet genoeg.
- Leg Carlo geen document ter beoordeling voor. Zet een kaart met korte vragen over de keuzes en aannames die je zelf invulde (elk met één zin, advies en wat er bij nee gebeurt), volgens `vragen-en-akkoordrondes` (B-23): per keuze (architectuur, stack, hosting, belangrijkste afwegingen) één vraag. Een controle-agent toetst vooraf of elke keuze en aanname erop staat. Het bericht is hoogstens één scherm; `architecture.md` blijft naslag.
- Zet de issue in de wachtstand voor gebruikersinput en stop. Ga niet door naar modelleren zonder goedkeuring. (In PRC-01 geldt dit akkoord als onderdeel van het pakket GOV-15; zie de aanvulling onderaan.)

### 11. Verwerk feedback
- Wijzigingen: pas het document aan, verhoog het versienummer en voeg een regel toe aan de wijzigingshistorie. Leg opnieuw voor.
- Is een wijziging groot (andere architectuur), loop dan opnieuw stappen 3 tot en met 9 af voor het geraakte deel. Vervang ADR's door een nieuwe (status `superseded by ADR-NNNN`), verwijder ze niet.
- Bij goedkeuring: zet in het document `Status: Goedgekeurd (<datum>, <wie>)`, werk `docs/architecture/STATUS.md` bij en meld dat de volgende stap `architect-modeling` is. Die begint bij het domeinmodel, mits de use cases en bedrijfsregels zijn goedgekeurd.

## Sjabloon `architecture.md`

```markdown
# Architectuur – <systeemnaam>
Status: Concept | Ter goedkeuring | Goedgekeurd (<datum>, <wie>) · Versie: 0.1 · Gebaseerd op: requirements.md versie <x>

## 1. Samenvatting
Vijf regels: gekozen architectuur en waarom.

## 2. Drivers
| Driver | Bron (FR/NFR) | Effect op de structuur |

## 3. Overwogen alternatieven
Tabel met afweging per driver.

## 4. Gekozen architectuur en motivatie

## 5. Context- en containerdiagram (Mermaid)

## 6. Beslissingen (links naar ADR's in docs/adr/)

## 7. Risico's en mitigaties

## 8. Open vragen
| # | Vraag | Wie | Effect op ontwerp |

## 9. Wijzigingshistorie
| Versie | Datum | Wijziging | Door |
```

## Sjabloon ADR (`docs/adr/0001-<slug>.md`)

Volg het format van `domain-modeling`: een ADR mag één alinea zijn.

```markdown
# <Korte titel van de beslissing>

<1 tot 3 zinnen: wat is de context, wat besloten we, en waarom. Verwijs naar FR/NFR-ID's.>
```

Optioneel, alleen als het echt iets toevoegt: `Status` (proposed | accepted | deprecated | superseded by ADR-NNNN), `Considered Options` en `Consequences`. Nummer doorlopend: kijk naar het hoogste bestaande nummer in `docs/adr/`. Vervang een ADR door een nieuwe met `superseded by`, verwijder hem niet.

## Valkuilen
- Niet beginnen met een technologie en daar eisen bij zoeken.
- Geen microservices of event sourcing voorstellen zonder een eis die dat rechtvaardigt.
- Geen eisen vaststellen, wijzigen of invullen.
- Niet doorgaan na een vage reactie zoals "ziet er goed uit" als er openstaande vragen zijn. Vraag dan: "Mag ik dit als goedgekeurd markeren, inclusief mijn voorgestelde antwoorden op de open vragen?"

## Aanvulling PRC-08 (model 0.14): profiel, pakketakkoord, OpenAPI en grill-sessie

Besluit: B-08/PRP-003, B-10, B-12/PRP-034, PRP-036, B-15, B-16, B-17, ASM-26, ASM-51. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor stap 10 hierboven. Dekking: ACT-01.11, ACT-02.6.

- **Grill-sessie (GS4 bij ACT-01.11, GS14 bij ACT-02.6 alleen als architectuur of profiel verandert):** begin met een grill-sessie volgens `vragen-en-akkoordrondes`, met Carlo in de vorm van `grilling`; hier vraag je naar stack, hosting, budget en groei. Heb je na het lezen geen open punten, dan is er geen sessie. Het contextverslag en de telling staan in die skill.
- **Akkoord PRC-01:** geen eigen stop. De architectuurkeuze zit in het pakket **GOV-15 (richting: architectuur en ontwerpen)** samen met de eerste paginaontwerpen en de bijgewerkte brieven (vragen per keuze, ASM-26). Je werkt tegelijk met de ontwerper (G-01.8): beide hebben alleen het goedgekeurde analysepakket en het design systeem nodig. Na GOV-15 volgt het technisch ontwerp van het goedgekeurde profiel (G-01.6). In PRC-02 volgt het akkoord als kaart met vragen per keuze: GOV-09 (architectuurkeuze en profiel), samen met het ontwerpbesluit.
- **Profiel:** kies het architectuurprofiel (P1, P2 of P3) met de twee vragen uit `architectuurprofielen` en leg het vast in een **profiel-ADR** met de redenen en de groeisignalen. Input: het goedgekeurde analysepakket (NFR's, visie met projecttype, paginalijst) en het design systeem. Output: ADR's met technologiekeuzes, het profiel-ADR, het context- en containerdiagram. Bij elke uitbreiding toets je de groeisignalen (G-02.3, ACT-02.6); een zwaarder profiel geeft een nieuw profiel-ADR (ACT-02.55) en GOV-09. Herhaal de profieltabel niet.
- **OpenAPI (B-17, ASM-51):** leg in `architecture.md`, bij *Gekozen architectuur en motivatie*, vast welke **OpenAPI-versie** gebruikt wordt en welk **hulpmiddel** de leesbare versie van het API-contract maakt. Het hulpmiddel draait zonder iets aan het project toe te voegen (bijvoorbeeld `npx` of een container). Een ADR alleen als de keuze aan de drie voorwaarden van stap 7 voldoet. Het is techniek, geen productkeuze; Carlo ziet `architecture.md` bij GOV-15. `architect-api-contracts` leest deze keuze als input. Bij P1 zonder eigen API is er geen OpenAPI-bestand en geen keuze nodig. De taalregel (API-namen Engels) past bij B-17.
- **Kwaliteitscriteria:** elke keuze herleidbaar tot een FR/NFR; het profiel volgt uit de criteria en het projecttype; het profiel-ADR noemt redenen en groeisignalen (criterium GOV-15); waar een OpenAPI-bestand komt, noemt `architecture.md` versie en hulpmiddel.
- **Restrisico:** jij en de ontwerper werken parallel; past het ontwerp niet bij het profiel, dan zie je dat pas bij GOV-15.
