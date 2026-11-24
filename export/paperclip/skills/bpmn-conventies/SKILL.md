---
name: bpmn-conventies
description: Gedeelde conventies voor organisatiemodellen: ID-schema, register, statussen, goedkeuring, wijzigingsbeheer en werkverdeling met Dr. Evil. Gebruik vóór het schrijven of wijzigen van elk organisatiemodel en vanuit elke bpmn-skill.
---

# Conventies voor organisatiemodellen

Gedeelde referentie voor `bpmn-organisatieanalyse`, `bpmn-procesmodellering`, `bpmn-rollen-en-skillmodel`, `bpmn-modelcontrole` en `bpmn-eindontwerp`. Wat voor alle vijf geldt staat hier, en alleen hier.

## Volgorde

1. `bpmn-organisatieanalyse`
2. `bpmn-procesmodellering`
3. `bpmn-rollen-en-skillmodel`
4. `bpmn-eindontwerp`

Elke stap eindigt met `bpmn-modelcontrole` en daarna goedkeuring van de gebruiker. De volgende stap begint pas na die goedkeuring.

## Notatie en uitvoer

- Processen krijgen BPMN-notatie: lanes per rol of agent, events, taken, beslissingen als gateways en sequence flows.
- Tussenresultaten zijn Mermaid-diagrammen in de procesbeschrijvingen.
- Het eindontwerp is een interactief artifact (`bpmn-eindontwerp`).
- Een `.bpmn`-bestand ontstaat alleen op verzoek van de gebruiker en alleen als een BPMN 2.0-validator beschikbaar is.

## Begrippen

Gebruik de begrippen niet door elkaar.

- **Rol:** organisatorische verantwoordelijkheid.
- **Agent:** concrete AI-uitvoerder.
- **Capability:** vermogen om een bepaald type resultaat te leveren.
- **Skill:** herbruikbare instructies, kennis en werkwijzen voor een specifieke taak.
- **Activiteit:** concrete activiteit binnen een bedrijfsproces.
- **Deliverable:** het resultaat van een activiteit.

## Bestanden

De modellen staan in `organisatie/`, in de repo of de Paperclip-documenten die de gebruiker aanwijst. Staat die plek nog niet vast, vraag het de gebruiker voordat je schrijft.

```
organisatie/
  register.yaml                 bron van waarheid
  ORGANISATIE.md                organisatieoverzicht
  bevindingen.md                knelpunten en hiaten (FND-)
  voorstellen.md                gewenste inrichting (PRP-)
  wijzigingen.md                wijzigingshistorie (CHG-)
  processen/PRC-01-<slug>.md    procesbeschrijving met Mermaid-tussendiagram
  overzichten/                  afgeleid uit register.yaml
    proces-catalogus.md
    capabilities-en-skills.md
    agent-skillmatrix.md
    activiteit-skillmatrix.md
    verantwoordelijkheden.md    RACI, goedkeuringen, conflicten
  controle/                     resultaten van bpmn-modelcontrole
  eindontwerp/organisatiemodel.html   het artifact
```

## Bron van waarheid

`register.yaml` bevat alle elementen en hun koppelingen. Overzichten, diagrammen en het artifact zijn weergaven daarvan: pas eerst het register aan en werk daarna de weergaven bij.

```yaml
processen:
  - {id: PRC-01, naam: "Nieuwe klant, software", doel: "...", eigenaar: ROL-01, status: Concept, versie: "0.1"}
activiteiten:
  - id: ACT-01.1
    proces: PRC-01
    naam: "Requirements analyseren"
    input: "..."
    output: "..."
    uitvoerder: AGT-03          # R
    verantwoordelijke: ROL-01   # A: één rol
    beslisser: ROL-01
    controleur: AGT-05
    geraadpleegd: [ROL-02]      # C
    geinformeerd: [AGT-02]      # I
    capabilities: [CAP-01]
    skills: [requirements-analysis]   # skills bij naam, geen nummer
    situatie: as-is             # as-is | to-be
rollen:
  - {id: ROL-01, naam: "Product owner", verantwoordelijkheid: "...", mens: true}
agents:
  - {id: AGT-03, naam: Socrates, rol: ROL-02, bron: "AGENTS.md", situatie: as-is}
capabilities:
  - {id: CAP-01, naam: "Requirementsanalyse", omschrijving: "..."}
skills:
  - naam: requirements-analysis   # unieke sleutel
    vorige_namen: []
    status: bestaat             # bestaat | uitbreiden | koppelen | nieuw | onbekend
    doel: "..."
    capability: CAP-01
    input: "..."
    output: "..."
    gebruikers: [AGT-03]
    afhankelijkheden: []
    validatie: "..."
    bron: "skilllijst bedrijf"
goedkeuringen:
  - id: GOV-01
    bevoegd: ROL-01
    informatie: "..."
    criteria: "..."
    bij_goedkeuring: "..."
    bij_afwijzing: "..."
    escalatie: "..."
aannames: [{id: ASM-01, tekst: "..."}]
open_vragen: [{id: OPEN-01, tekst: "...", wie: ROL-01}]
```

Skillstatus:
- `bestaat`: de skill dekt de capability en is aan de agent gekoppeld.
- `uitbreiden`: de skill bestaat maar dekt de capability onvoldoende.
- `koppelen`: de skill bestaat maar is niet aan de agent gekoppeld.
- `nieuw`: de skill ontbreekt.
- `onbekend`: werking of kwaliteit is niet vastgesteld.

Een skill staat bij zijn naam, niet bij een nummer (PRP-039, B-11). `naam` is de unieke sleutel; bestaan er twee skills met dezelfde naam, dan krijgt de nieuwe een andere naam. Een skill die nog niet bestaat, heeft een werknaam. Een naamswijziging is een wijziging met een CHG-ID: het register vervangt de naam overal en bewaart de vorige naam in `vorige_namen`. Verwijs naar een skill met zijn naam.

## ID's

Gebruik stabiele ID's en verwijs er altijd mee, want namen veranderen. Skills zijn de uitzondering: die staan bij hun naam (zie Skillstatus). Hergebruik een ID nooit. De prefixen botsen niet met `FR-`, `NFR-`, `UC-`, `BR-` en `AC-` van het softwarewerk.

| Prefix | Element |
|---|---|
| `PRC-01` | proces |
| `ACT-01.1` | activiteit (proces.volgnummer) |
| `ROL-01` | rol |
| `AGT-01` | agent |
| `CAP-01` | capability |
| `GOV-01` | goedkeuringsmoment |
| `ASM-01` | aanname |
| `OPEN-01` | open vraag |
| `FND-001` | bevinding |
| `PRP-001` | voorstel |
| `CHG-001` | wijziging |

## Korte namen (PRP-044, B-18, B-19)

Elk element heeft naast zijn code een korte naam van 2 tot 6 woorden, bijvoorbeeld GOV-06 (akkoord bouwcontract per slice).

- Wat de gebruiker leest, toont de korte naam bij de code: de eerste keer per alinea, lijstpunt of tabelrij (ASM-55). Bovenaan staat een legenda met wat de voorvoegsels betekenen.
- Overzichten krijgen een kolom Naam. In het register staat de naam in `korte_namen`.
- Een naamswijziging is een wijziging met een CHG-ID.
- De regel "verwijs altijd met ID's" blijft. Overleg tussen agents mag de code alleen gebruiken.
- Skills hebben geen aparte korte naam: hun naam is de naam.

## Wie schrijft wat

| Element | Schrijft |
|---|---|
| Rollen, agents, processen (PRC), aannames, open vragen, bevindingen, voorstellen gewenste inrichting | `bpmn-organisatieanalyse` |
| Activiteiten, beslissingen, diagrammen, procesbeschrijvingen | `bpmn-procesmodellering` |
| Capabilities, skills, koppelingen, RACI, goedkeuringen, hiaten | `bpmn-rollen-en-skillmodel` |
| Controleresultaten | `bpmn-modelcontrole` |
| Het artifact | `bpmn-eindontwerp` |

De skill die het register wijzigt, werkt ook de overzichten en `wijzigingen.md` bij. `bpmn-modelcontrole` controleert of die kloppen.

## Soorten uitspraken

Elke uitspraak in een model is een `feit` (met bron), een `aanname` (ASM), een `open vraag` (OPEN) of een `voorstel` (PRP). Elk element is `as-is` of `to-be`. Voorstellen staan los van de huidige situatie.

## Bewijs voor de huidige situatie

Bronnen: de `AGENTS.md` van de agents, de skilllijst van het bedrijf, de skills zelf en goedgekeurde documenten. Ze bewijzen wat er is vastgelegd, niet welke skills technisch aan een agent gekoppeld zijn of hoe goed een skill werkt. Zet dat op `onbekend` met een OPEN-vraag tot de gebruiker het bevestigt.

## Status en goedkeuring

Status van een model: `Concept`, `Ter goedkeuring` of `Goedgekeurd (<datum>, <wie>)`, met een versienummer. Alleen de gebruiker keurt goed. Zet `Goedgekeurd` pas als de bevestiging zichtbaar op het issue staat.

Indienen:
1. Voeg het model toe aan het issue als taakdocument of bijlage. Een pad op schijf is niet genoeg.
2. Voer `bpmn-modelcontrole` uit en zet daarna een kaart met korte vragen over de keuzes en aannames die je zelf invulde (elk met één zin, advies en wat er bij nee gebeurt), volgens `vragen-en-akkoordrondes` (B-23) op het issue. Geen akkoord op weergaven (pagina, overzichten, diagram) van inhoud die al is goedgekeurd; die controleer je wel, en een afwijking wordt een vraag.
3. Zet het issue in afwachting en stop.
4. Na feedback: pas het concept aan in hetzelfde document (`documenten-bijwerken`), verhoog de versie, zet één regel in `wijzigingen.md` en leg opnieuw voor.

## Een goedgekeurd model wijzigen

Overschrijf een goedgekeurd model nooit stilzwijgend.
1. Identificeer het bestaande model en zijn versie.
2. Beschrijf de wijziging (CHG-ID).
3. Bepaal welke gekoppelde modellen geraakt worden, via het register.
4. Controleer de gevolgen voor agents en skills.
5. Zet alleen de geraakte rijen in een voorstel (`documenten-bijwerken`). Het goedgekeurde model verandert niet tot het voorstel is goedgekeurd. Maak geen kopie van het model.
6. Draai `bpmn-modelcontrole` en leg voor.
7. Na goedkeuring: vervang de rijen in het register en de procesbeschrijving, maak de overzichten en het artifact opnieuw uit het register, en zet één regel in `wijzigingen.md`.
8. Draai `bpmn-modelcontrole` opnieuw.

## Voorstellen en uitvoering

- De organisatieskills leveren de analyse: wat een skill per activiteit moet kunnen (capability, input, output, validatiecriteria).
- Dr. Evil maakt het formele voorstel voor nieuwe of gewijzigde agents, instructies en skills (`escalation-management`) en de backlogitems. Het akkoord is altijd een kaart op het issue, met een vraag per keuze (PRP-040, B-23).
- De gebruiker beslist. Niemand wijzigt agents, skills, processen of bevoegdheden zonder zijn goedkeuring.
- Een model dat iets zegt over de rol van een agent gaat ook via een issue naar die agent, ter controle op feitelijke juistheid. Voor de rol van Socrates zelf doet Atlas of Dr. Evil die controle.
