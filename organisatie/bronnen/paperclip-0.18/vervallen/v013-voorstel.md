> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.13: OpenAPI voor het bouwcontract en codes met een naam

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `226c7ce7`)**, alle 11 onderdelen van de kaart goedgekeurd: CHG-023 (OpenAPI voor het bouwcontract), CHG-024 (codes met een korte naam), PRP-044 (korte namen in de conventies), de aannames ASM-49 t/m ASM-55 en de weergaven; besluit **B-19** (model 0.13 goedgekeurd). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register`, `prc-01`, `prc-02`, `paperclip-mapping`, `uitbreidingsgids`, `bevindingen`, `codes-en-namen` en `voorstellen` (PRP-044); zie CHG-023 en CHG-024 in `wijzigingen`. Vóór de goedkeuring: **Concept, ter goedkeuring** (versie 0.13, 2026-10-31). CHG-023 en CHG-024. **Tot je dit goedkeurt, geldt model 0.12** (Goedgekeurd 2026-10-31, Carlo, kaart `2ddaa565`). |
| Aanleiding | je comments `ec7d3ac6` (OpenAPI) en `b4a55cab` (codes begrijpelijk maken); mijn uitleg in comment `09d57446`; je antwoorden op de kaart `42b39ff5` (2026-10-31): alle vier volgens mijn advies. |
| Feitencheck | [WEB-25](/WEB/issues/WEB-25), 2026-10-31: Dr. Evil en Atlas. Alles klopt, op twee correcties na, verwerkt in revisie 2: (1) de skill met de taalregel heet `architect-architecture-choice`, niet `architect-requirements` (dat is alleen de mapnaam); (2) de OpenAPI-versie en het hulpmiddel komen in `architecture.md`, niet in een ADR, omdat ze makkelijk terug te draaien zijn (ASM-51, §3.2, §3.5). |
| Bouwt op | model 0.12 (grill-sessies en de gaten in 0.11), dat je los beoordeelde (je antwoord op vraag 4) en goedkeurde op de kaart `2ddaa565` (2026-10-31). |
| Labels | **B** = Besloten (jouw besluit). **F** = Feit (met bron). **A** = Aanname (ASM, ter bevestiging op de kaart). **V** = Voorstel (PRP). |
| Codes | De eerste keer per alinea of tabelrij staat de korte naam bij een code. De legenda staat in `v013-register` en `v013-codes-en-namen`. |

**Wat de codes betekenen** (B-18 – codes met een korte naam): PRC = proces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B / TL-V = jouw besluit · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · M = plek waar Paperclip niet netjes past · UC / AC / BR / FR = use case / acceptatiecriterium / bedrijfsregel / functionele eis van een klantproject. De eerste keer per sectie staat de korte naam erbij; de volledige lijst staat in `v013-codes-en-namen`.

## Kort

1. **Het API-contract per slice wordt een OpenAPI-bestand.** Dat is de bron. De leesbare versie die jij goedkeurt, wordt eruit gemaakt, dus de twee kunnen niet uit elkaar lopen (B-17 – OpenAPI voor het bouwcontract).
2. **Bij een CMS-project (P1)** komt er alleen OpenAPI waar echt een API is. Het templatecontract (de velden per paginasjabloon) blijft een tabel (B-17 – OpenAPI voor het bouwcontract).
3. **Wat je bij GOV-06 (akkoord bouwcontract per slice) goedkeurt:** bij P2 en P3 de leesbare versie, met bovenaan de revisie van het OpenAPI-bestand (B-17 – OpenAPI voor het bouwcontract). Het bestand ligt erbij; maakt Atlas de leesbare versie opnieuw, dan vervalt je kaart (aanname ASM-53). Bij P1 de tabel, en waar er echt een API is ook de leesbare versie.
4. **Codes krijgen een korte naam** in alles wat jij leest, bijvoorbeeld GOV-06 (akkoord bouwcontract per slice). Er is een legenda en een volledige lijst: `v013-codes-en-namen` (B-18 – codes met een korte naam).
5. **Processtappen, diagrammen en akkoorden blijven gelijk.** UC1 houdt 4 akkoorden. De skillstatus blijft 17 aanwezig, 23 gedeeltelijk, 35 ontbreekt, 9 n.v.t. (84 stappen).

## 1. Je besluiten

| ID | Besluit | Bron |
| --- | --- | --- |
| **B-17** | (1) Het API-contract is een OpenAPI-bestand; de leesbare versie wordt eruit gemaakt, met uitleg in het Nederlands, namen van velden en routes in het Engels, en bovenaan de revisie van het OpenAPI-bestand. (2) Bij P1 alleen OpenAPI waar echt een API is: eigen endpoints, koppelingen, of een headless CMS (zoals Payload) waarvan de frontend de API aanroept. Het templatecontract blijft een tabel. | kaart `42b39ff5`, vraag 1 en 2 |
| **B-18** | De codes blijven. In alles wat jij leest komt er een korte naam bij; in tabellen een kolom met de naam; een legenda bovenaan het register, de procesbeschrijvingen en de pagina; op de pagina de naam bij aanwijzen. Model 0.12 werd los beoordeeld (en is goedgekeurd op kaart `2ddaa565`); OpenAPI en de codes komen in 0.13. | kaart `42b39ff5`, vraag 3 en 4 |

## 2. Wat ik vond

| ID | Bevinding | Bewijs |
| --- | --- | --- |
| **FND-040** | **Het formaat van het API-contract lag niet vast.** De specificatie van `architect-api-contracts` zei: "Welk API-formaat (bijvoorbeeld OpenAPI) kiest Atlas in de architectuurkeuze. Dat is een open punt en geen aanname." Geen instructie of skill noemt OpenAPI als formaat voor het API-contract van een klantproject. Alleen de skill `paperclip` noemt het OpenAPI-schema van Paperclip zelf. Een leesbare versie voor jouw akkoord stond nergens. | F: `skill-specificaties` (0.11, `architect-api-contracts`, *Tools en templates*); zoekopdracht "openapi" in de AGENTS.md en alle skills van het bedrijf (2026-10-31): alleen `paperclip`, `references/api-reference.md` ("Fetch `GET /api/openapi.json` for the current request schemas"). Opgelost door B-17 (OpenAPI voor het bouwcontract). |
| **FND-041** | **De codes zijn voor jou niet te lezen.** Je wist niet waar GOV-06 (akkoord bouwcontract per slice), PRC-04 (vragenloop en grill-sessie tussen agents), PRP-032 (wie ontwerpt pagina's en waarin) en TL-04 (bouwcontract per slice opstellen) voor staan. `bpmn-conventies` zegt: "Gebruik stabiele ID's en verwijs er altijd mee, want namen veranderen", maar niets over een naam erbij voor de mens die het leest. | F: comment `b4a55cab`; `bpmn-conventies` §ID's. Opgelost door B-18 (codes met een korte naam); de conventie aanpassen is PRP-044 (korte namen in de conventies). |

## 3. OpenAPI: hoe het werkt

### 3.1 Wat Atlas per profiel maakt (B-17)

| Profiel | Bouwcontract per slice | Wat jij goedkeurt (GOV-06 – akkoord bouwcontract per slice) |
| --- | --- | --- |
| P1 CMS | templatecontract als **tabel** (template × veld × bron). OpenAPI **alleen** voor eigen endpoints, koppelingen of een headless CMS waarvan de frontend de API aanroept. | de tabel; en waar er echt een API is, ook de leesbare versie van dat OpenAPI-bestand |
| P2 component-app | OpenAPI-bestand | de leesbare versie, met het OpenAPI-bestand erbij |
| P3 maatwerk | OpenAPI-bestand | de leesbare versie, met het OpenAPI-bestand erbij |

Bij een klassiek WordPress-thema zonder eigen API is er dus geen OpenAPI. Bij Payload, waar de frontend de API van het CMS aanroept, wel. Dat volgt uit B-17 (OpenAPI voor het bouwcontract).

### 3.2 De leesbare versie

- **Gemaakt, niet geschreven (B-17).** Een hulpmiddel maakt hem uit het OpenAPI-bestand. Atlas draait dat hulpmiddel als laatste stap van `architect-api-contracts`, vóór GOV-06 (akkoord bouwcontract per slice); welk hulpmiddel legt hij vast in de architectuurkeuze (`architecture.md`) (ASM-51 – Atlas kiest OpenAPI-versie en hulpmiddel). Hij schrijft de leesbare versie niet apart. Het hulpmiddel draait zonder dat Atlas iets aan het project toevoegt, bijvoorbeeld via `npx` of een container, want Atlas wijzigt niets buiten `docs/` en `GLOSSARY.md` (F: AGENTS.md Atlas, *Grenzen*; WEB-25). Moet het hulpmiddel wel in het project komen, dan doet een developer dat.
- **Inhoud (ASM-49 – inhoud van de leesbare versie):** per pagina van de slice:
  - welke gegevens de pagina toont of verstuurt;
  - welke acties er zijn;
  - welke foutmeldingen de gebruiker kan zien;
  - per veld de bron (paginabrief, UC/AC of BR).

  Daaronder per operatie een korte tabel: wat het doet, wat erin gaat, wat eruit komt en wie het mag gebruiken.
- **Taal (B-17 – OpenAPI voor het bouwcontract):** uitleg in het Nederlands, namen van velden en routes in het Engels. Dat past bij de taalregel van Atlas (F: AGENTS.md Atlas: "Alles wat in modellen en code terechtkomt is Engels"; skill `architect-architecture-choice`, sectie *Taal en naamgeving*: "API-namen" zijn Engels; bevestigd door Atlas op WEB-25).
- **Bron per veld (ASM-50):** de bronkolom uit B-12: PRP-032 (wie ontwerpt pagina's en waarin) staat in het OpenAPI-bestand zelf, als eigen veld (een extensie zoals `x-bron`). OpenAPI staat zulke eigen velden toe; dat weet ik uit eigen kennis en heb ik hier niet getest. De leesbare versie laat de bron zien.

**Voorbeeld** (P3, slice *Winkelwagen*):

> **Pagina Productdetail**
> - Toont: `name`, `price`, `stock` (bron: brief *Productdetail*)
> - Actie *In winkelwagen*: `POST /carts/{cartId}/items` met `productId` en `quantity` (bron: AC-02.1)
> - Foutmelding *Niet op voorraad* (bron: BR-02)
>
> | Operatie | Wat het doet | Erin | Eruit | Wie |
> | --- | --- | --- | --- | --- |
> | `POST /carts/{cartId}/items` | product aan winkelwagen toevoegen | `productId`, `quantity` | 201 met de winkelwagen; 409 bij geen voorraad | klant met een eigen winkelwagen |

### 3.3 Eén akkoord voor allebei

- Bovenaan de leesbare versie staat welke revisie van het OpenAPI-bestand hij beschrijft (B-17 – OpenAPI voor het bouwcontract). **Revisie** betekent: de commit-hash van de laatste commit die het bestand wijzigde (aanname ASM-52 – controles op het OpenAPI-bestand).
- **Waar het staat (ASM-53 – plek van bestand en leesbare versie):** het OpenAPI-bestand in de repository van het project, bij de andere ontwerpdocumenten (`docs/architecture/`). De leesbare versie als document op het issue waarop Atlas het bouwcontract opstelt (ACT-01.17 – bouwcontract van slice 1 opstellen, ACT-02.8 – bouwcontract opstellen); de issues van de slice zelf bestaan dan nog niet. De kaart van GOV-06 (akkoord bouwcontract per slice) hoort bij een revisie van dat document (B-14: PRP-040 – akkoord altijd via kaart op issue).
- **Verandert het OpenAPI-bestand**, dan maakt Atlas de leesbare versie opnieuw. Dat is een nieuwe revisie van het document, en dan vervalt je kaart. F: zo gebeurde het op dit issue met kaart `ad740f81` (uitkomst `stale_target` na een nieuwe revisie van `v010-voorstel`; bron: Paperclip-API, interacties van WEB-19, 2026-10-31).
- **Wordt het bestand gewijzigd zonder nieuwe leesbare versie**, dan merkt jouw kaart dat niet. Dat vangen de twee controles hieronder: die van Atlas vóór je akkoord en die van Dr. Evil vóór de taken.

### 3.4 Controles (ASM-52, alleen waar er een OpenAPI-bestand is)

1. **Vóór je akkoord**, door Atlas (`architect-api-contracts`): het OpenAPI-bestand is geldig, en de leesbare versie is gemaakt uit precies die revisie (commit-hash).
2. **Vóór de taken**, door Dr. Evil (`quality-gates`, vóór ACT-01.20 – epics en taken slice 1 maken en in ACT-02.53 – vaste controles uitvoeren): de goedgekeurde leesbare versie noemt dezelfde commit-hash als de laatste wijziging van het bestand in de repository. Zo bouwt niemand op een contract dat na je akkoord nog is veranderd.

Bij P1 zonder API is er geen OpenAPI-bestand. Dan vervallen beide controles en geldt alleen de tabel.

`quality-gates` stond al op *uitbreiden* en `architect-api-contracts` op *nieuw*. De skillstatus verandert dus niet.

### 3.5 Wat Atlas kiest (ASM-51)

Welke OpenAPI-versie, en welk hulpmiddel de leesbare versie maakt, kiest Atlas in de architectuurkeuze (ACT-01.11 – architectuurkeuze en profiel vastleggen, `architect-architecture-choice`). Hij legt dat vast in `architecture.md`, bij *Gekozen architectuur en motivatie*. Een ADR komt er alleen als de keuze in een project aan de drie voorwaarden van zijn skill voldoet: moeilijk terug te draaien, verrassend voor een latere lezer, en het resultaat van een echte afweging (F: `architect-architecture-choice` stap 7; WEB-25). Dat is techniek en geen productkeuze. Je ziet `architecture.md` bij GOV-15 (akkoord richting: architectuur en ontwerpen).

### 3.6 Wat het oplevert, en wat het risico is

- **Voordeel (afgeleid, niet getest):** een OpenAPI-bestand kunnen developers, tests en tools direct lezen en controleren. Ook vindt Atlas breaking changes makkelijker: zijn skill `architect-implementation-plan` zoekt in stap 4b al naar "API-specificaties" (F: SKILL.md stap 4b; bevestigd door Atlas op WEB-25). Die stap zoekt de afnemers op; twee revisies van één bestand vergelijken doet hij niet. Dat dit makkelijker wordt, is afgeleid.
- **Mock data blijft niet bindend (B-12: PRP-032 – wie ontwerpt pagina's en waarin).** Uit een OpenAPI-bestand kun je een nepserver met voorbeelddata maken. Ook die voorbeelddata zijn niet bindend: alleen de velden en hun bron tellen.
- **Risico:** hoe goed de leesbare versie is, hangt af van het hulpmiddel. Dat zie je bij de eerste slice. Is hij niet goed te lezen, dan is dat een vraag aan Atlas (PRC-04 – vragenloop en grill-sessie tussen agents) of een wijzigingsverzoek (GOV-12 – akkoord wijzigingsverzoek of productkeuze).

## 4. Codes met een naam (B-18)

- **Waar (ASM-55 – waar de korte naam komt):** in alles wat jij leest: comments, kaarten, voorsteldocumenten, procesbeschrijvingen, overzichten en de pagina. De eerste keer per alinea, lijstpunt of tabelrij staat er "code (naam)". In de overzichten en op de pagina komt een eigen kolom Naam. Bovenaan staat een legenda. Overleg tussen agents mag de code alleen gebruiken.
- **Diagrammen:** daar staat al de code met een label, bijvoorbeeld `ACT-01.17 Bouwcontract slice 1`. Dat blijft zo, want de diagrammen veranderen niet. Bij vier labels is dat geen naam (`G-01.7 + parallel`, `G-01.8 + parallel`, `G-01.9 + samenvoegen` en `GOV-09 en per profiel`); die pas ik aan bij de volgende wijziging van een diagram.
- **Waar de naam vandaan komt (ASM-54 – herkomst van de korte naam):** uit de naam of titel die het element al heeft (stap, proces, akkoord, rol, capability, bevinding, voorstel). Waar die ontbreekt of te lang is (aannames, open vragen, besluiten, wijzigingen, grill-momenten, M-punten, tech-leadtaken), staat een korte naam in de nieuwe sectie `korte_namen` van het register. Verandert een korte naam, dan gaat dat via een CHG, zoals bij de skills (B-12: PRP-039 – skills bij naam in conventies).
- **De volledige lijst:** `v013-codes-en-namen`, met de legenda bovenaan en per soort een tabel met code en korte naam.
- **In dit concept al gedaan:** de legenda en de korte namen in het register; de korte namen en een legenda in dit voorstel, PRC-01 (nieuwe klant: opdracht tot eerste backlog), PRC-02 (backlog uitbreiden met volgende slice), de Paperclip-mapping, de uitbreidingsgids, de bevindingen en `wijzigingen`. **Nog niet:** de overzichten (organisatie, skillmatrices, skill-specificaties, profiel van Atlas, RACI) en de pagina. Die werk ik in één keer bij naar 0.13 als je 0.13 hebt goedgekeurd. Op de pagina zie je dan de naam als je een code aanwijst of aantikt.

**PRP-044 (korte namen in de conventies; voorstel; komt na je akkoord in `voorstellen`):** `bpmn-conventies` aanpassen, zodat elk volgend model dit ook doet: elk element heeft een korte naam, die staat bij de code in alles wat de gebruiker leest, met een legenda. De regel "verwijs altijd met ID's" blijft. De aanpassing loopt via Dr. Evil (PRC-08 – organisatie aanpassen), net als PRP-039 (skills bij naam in conventies) voor de skillnamen.

## 5. Wat er in het model verandert

| Document | Wat er verandert |
| --- | --- |
| `v013-register` | B-17 (OpenAPI voor het bouwcontract), B-18 (codes met een korte naam); legenda; sectie `korte_namen`; de output van ACT-01.17 (bouwcontract van slice 1 opstellen) en ACT-02.8 (bouwcontract opstellen); bij GOV-06 (akkoord bouwcontract per slice) de informatie en de criteria; CAP-11 (bouwcontract ontwerpen); ROL-01 (project owner); de profieltabel; de skills `architect-api-contracts` (output, validatie), `quality-gates` en `architect-architecture-choice` (omschrijving); ASM-49 t/m ASM-55 |
| `v013-prc-01`, `v013-prc-02` | legenda; korte namen; OpenAPI bij ACT-01.17 (bouwcontract van slice 1 opstellen), ACT-02.8 (bouwcontract opstellen) en GOV-06 (akkoord bouwcontract per slice); in PRC-01 (nieuwe klant: opdracht tot eerste backlog) ook de profieltabel en de regel bij TL-V4 (Carlo keurt API-contracten goed). De diagrammen blijven gelijk. |
| `v013-paperclip-mapping` | nieuwe rij: het bouwcontract (OpenAPI-bestand in de repository, leesbare versie als document, de kaart bij een revisie) |
| `v013-uitbreidingsgids` 0.7 | vrije ID's (B-19, ASM-56, FND-042, PRP-045, CHG-025); bij elk nieuw element een korte naam |
| `v013-bevindingen` | FND-040 (formaat API-contract lag niet vast), FND-041 (codes niet te lezen voor Carlo) |
| `v013-codes-en-namen` | nieuw: de lijst met alle codes en hun korte naam |
| `wijzigingen` | CHG-023 (OpenAPI voor het bouwcontract) en CHG-024 (codes met een korte naam), als Concept |
| **Na je akkoord** | `skill-specificaties` (`architect-api-contracts`: OpenAPI, de stap "leesbare versie maken", de controle; `quality-gates`), het profiel van Atlas (de taak TL-04 – bouwcontract per slice opstellen), de overige overzichten en pagina 0.6, met de korte namen |

## 6. Wat niet verandert

- De processtappen, beslissingen en diagrammen van PRC-01 t/m PRC-06.
- UC1 houdt 4 akkoorden: GOV-10 (akkoord analysepakket), GOV-15 (akkoord richting), GOV-11 (akkoord technisch ontwerp), GOV-06 (akkoord bouwcontract per slice).
- TL-V4 (je keurt de API-contracten per slice goed) blijft; je keurt nu de leesbare versie goed. B-06 (Socrates maakt, Atlas toetst use cases), B-07 (volledig databaseontwerp van de kern), B-08 (keuze uit de voorstellen), B-10 (ontwerp eerst en architectuurprofielen), TL-V7 (geen rol tech lead) en B-12: PRP-032 (wie ontwerpt pagina's en waarin; mock data niet bindend) blijven.
- De inhoud van het goedgekeurde 0.12 (grill-sessies, de gaten) verandert niet.
- De skillstatus: 17 / 23 / 35 / 9 (84 stappen).

## 7. Wat ik van je vraag

Je keurt op de kaart goed of af: CHG-023 (OpenAPI voor het bouwcontract) en CHG-024 (codes met een korte naam) als geheel, PRP-044 (korte namen in de conventies), en deze aannames:

| Aanname | Wat ik heb ingevuld |
| --- | --- |
| ASM-49 | De inhoud van de leesbare versie: per pagina gegevens, acties, foutmeldingen en bron; per operatie een korte tabel (§3.2). |
| ASM-50 | De bron per veld staat in het OpenAPI-bestand zelf, als eigen veld. |
| ASM-51 | Atlas kiest de OpenAPI-versie en het hulpmiddel in de architectuurkeuze (`architecture.md`; een ADR alleen als de drie voorwaarden van zijn skill gelden), en draait het hulpmiddel zelf, zonder iets aan het project toe te voegen. |
| ASM-52 (controles op het OpenAPI-bestand) | Revisie = commit-hash; twee controles, door Atlas vóór je akkoord en door Dr. Evil vóór de taken. Bij P1 zonder API geen controles. |
| ASM-53 | Het bestand staat in de repository en ligt bij GOV-06 (akkoord bouwcontract per slice) erbij; de leesbare versie staat op het issue van het bouwcontract; een nieuwe leesbare versie laat je kaart vervallen. |
| ASM-54 | De korte naam komt uit de naam of titel die er al is, anders uit `korte_namen`; een wijziging gaat via een CHG. |
| ASM-55 (waar de korte naam komt) | De naam staat de eerste keer per alinea, lijstpunt of tabelrij bij de code; in overzichten en op de pagina een kolom Naam; op de telefoon tikken in plaats van aanwijzen. |

## 8. Wat daarna gebeurt

1. Een aparte agent doet de modelcontrole (`v013-controle`).
2. De feitencheck is gedaan op [WEB-25](/WEB/issues/WEB-25): Dr. Evil (`quality-gates`) en Atlas (zijn taalregel en skills). Alles klopt, op twee correcties na. Die zijn verwerkt in revisie 2 (zie de kop van dit document).
3. Jij keurt goed op de kaart. Daarna werk ik de overzichten en pagina 0.6 bij.
4. Het pakket voor Dr. Evil (PRC-08 – organisatie aanpassen) draag ik pas over als jij dat zegt. Aan agents, instructies en skills verandert nu niets.
