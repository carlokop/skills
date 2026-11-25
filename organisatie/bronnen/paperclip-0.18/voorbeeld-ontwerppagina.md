# Voorbeeld-skills: één ontwerppagina per documentsoort

Status: **Voorbeeld, niet doorgevoerd.** Op basis van Carlo's drie voorbeelden (comment `379a97cc`). Er is niets aan skills of agents veranderd.

## 1. Hoe de voorbeelden zijn opgebouwd

| | Domeinmodel | Interactiediagrammen | Design-klassendiagram |
| --- | --- | --- | --- |
| Bron | `docs/architecture/domain-model.md` | `docs/architecture/interactions.md` | `docs/architecture/dcd.md` |
| Bovenaan | Overzichtsplaat: alle begrippen, per gebied gegroepeerd | Lijst use cases | Afhankelijkheden tussen modules, daarna volledig DCD op één plaat |
| Per onderdeel | Eén plaat per gebied + 9 toestandsdiagrammen | Eén sequentiediagram per use case (21) | Eén plaat per module (11) + patronen en flows |
| Bediening | Zoom −/+/passend/100%, slepen, klik → buren lichten op en infopaneel | Lezen | Zoom, slepen, klik → infopaneel; lijnsoorten aan/uit; "Alleen namen" |
| Vaste delen | Leeswijzer (notatie), Besluiten (grill-sessie), Open vragen, Buiten het model | Leeswijzer, Besluiten, Open vragen | Leeswijzer, Besluiten, Open vragen, Invoer voor volgende ontwerpen |

Gemeenschappelijk:
1. **Eén pagina per documentsoort**, niet per module of gebied.
2. **Gegenereerd uit één bronbestand.** Onderaan staat: "het bestand is de bron; bij verschil geldt het bestand".
3. **Opmaak vooraf berekend:** wat bij elkaar hoort staat in één kader met één kleur; lijnen haaks en om de kaders heen. In de pagina zit geen opmaakprogramma, alleen de berekende posities.
4. **Overzicht eerst, detail daaronder;** dezelfde kleur per gebied of module in elk diagram.
5. **Besluiten en open vragen op de pagina zelf**, als tabel nr | vraag | besluit.
6. Domeinmodel: **Nederlandse naam met de Engelse codenaam** erbij.

Wat in Paperclip niet werkt zoals in de voorbeelden:
- De toestands- en sequentiediagrammen laden Mermaid via `/_runtime/…` van claude.ai, en de lettertypen komen van Google. Als bijlage in Paperclip worden die diagrammen naar verwachting niet getekend (niet getest). Een gegenereerde pagina moet ze daarom al als tekening bevatten.

## 2. Verschil met WEB-47

- WEB-47 heeft 21 pagina's: 1 domeinmodel, 1 interactiediagrammen en 19 losse klassendiagrammen (per module of deel).
- Elke pagina heeft dezelfde lege viewer ("Architectuurmodel", één canvas). Geen overzicht, leeswijzer, besluiten of open vragen.
- Het script van `architect-class-diagram` zet klassen in een raster van vier kolommen; `architect-domain-model`, `architect-sequence-diagrams` en `architect-database` gebruiken dezelfde viewer.
- Alle vijf skills zeggen: "publiceer als Claude-artifact". Dat kan een agent in Paperclip niet.

## 3. Welke pagina's krijgt Carlo te zien

Per profiel (`architectuurprofielen`). Bij elk akkoord krijgt Carlo een kaart met vragen over de keuzes; de pagina is waar hij het bekijkt.

| Pagina | P1 CMS | P2 component-app | P3 maatwerk | Akkoord |
| --- | --- | --- | --- | --- |
| Architectuur (context- en containerdiagram, ADR's) | ja | ja | ja | GOV-15 (richting) |
| Contentmodel | ja | – | – | GOV-11 (kernontwerp) |
| Componentontwerp | – | ja | – | GOV-11 |
| Domeinmodel | – | – | ja | GOV-11 |
| Interactiediagrammen | – | ja | ja | GOV-11 |
| Design-klassendiagram | – | – | ja | GOV-11 |
| Databaseontwerp | – | alleen bij eigen database | ja | GOV-11 |
| Bouwcontract (leesbare versie) | per slice | per slice | per slice | GOV-06, per slice |

Bij P3 (zoals Factuurverstuurd) zijn dat dus **5 pagina's eenmalig** (architectuur, domeinmodel, interactie, klassendiagram, database) plus **1 per slice** (bouwcontract). Niet 3, maar ook geen 21.

## 4. Voorbeeld: nieuwe gedeelde skill

```markdown
---
name: ontwerppagina
description: Maakt van een ontwerpdocument één leesbare HTML-pagina voor Carlo, met een zoombaar overzicht, platen per onderdeel, leeswijzer, besluiten en open vragen. Gebruik bij elk ontwerpdocument dat Carlo ziet: architectuur, contentmodel, componentontwerp, domeinmodel, interactiediagrammen, klassendiagram, database en de leesbare versie van het bouwcontract.
---

# Ontwerppagina

## Regels
1. Eén pagina per documentsoort. Nooit een pagina per module, gebied of use case.
2. De pagina komt uit het bronbestand (model-JSON of Markdown) via het script van de skill. Nooit met de hand. Onderaan: "Gegenereerd uit <bron>. Bij verschil geldt het bestand."
3. Zelfstandig: geen externe scripts, lettertypen of runtime. Alle diagrammen staan als SVG in de pagina, licht en donker.
4. Opmaak wordt bij het bouwen berekend: onderdelen van één gebied of module in één kader, één kleur per gebied in elk diagram, haakse lijnen, zo min mogelijk kruisingen. Geen raster in modelvolgorde.
5. Oplevering: bijlage op het issue. Daarna een kaart met vragen over de keuzes (`vragen-en-akkoordrondes`). Geen Claude-artifact.

## Vaste opbouw
1. Titel en één zin wat het is.
2. **Overzicht**: alles op één plaat. Zoom (−, +, passend, 100%), slepen, klik op een element → zijn lijnen en buren lichten op, rechts een infopaneel met beschrijving en relaties in zinnen. Schakelaar "Alleen namen" bij grote platen.
3. **Leeswijzer**: tabel notatie | betekenis.
4. **Inhoud**: links naar de onderdelen.
5. **Per onderdeel** (gebied, module of use case) één plaat met dezelfde bediening, een korte inleiding en de kleur uit het overzicht.
6. Soortspecifieke secties (tabel hieronder).
7. **Besluiten**: nr | vraag | besluit, met de grill-sessie of kaart waar ze vandaan komen.
8. **Open vragen**: of "Geen".

## Per documentsoort
| Soort | Overzicht | Per onderdeel | Extra |
| --- | --- | --- | --- |
| Architectuur | Contextdiagram | Containerdiagram | ADR-lijst, drivers |
| Contentmodel | Alle inhoudstypen | Per paginatype | Velden per template |
| Componentontwerp | Modules en routes | Per module | Datastroom |
| Domeinmodel | Alle begrippen per gebied | Per gebied | Toestandsdiagrammen, datatypes, buiten het model |
| Interactiediagrammen | Lijst use cases met gebied | Per use case één diagram | Patronen, aanroepen over gebiedsgrenzen |
| Klassendiagram | Afhankelijkheden tussen modules + volledig diagram | Per module | Zichtbaarheid, patronen, invoer voor volgende ontwerpen |
| Database | Alle tabellen per gebied | Per gebied | Indexen, verwijdergedrag, migratie |
| Bouwcontract | Per pagina: gegevens en acties | Per operatie: in, uit, wie, fouten | Bron per veld |

## Namen
Namen in het model en de code zijn Engels. Op de pagina staat bij een begrip de Nederlandse naam uit GLOSSARY.md met de Engelse naam erbij.

## Controle vóór oplevering
1. Elk element uit de bron staat op de pagina; niets op de pagina ontbreekt in de bron.
2. De pagina werkt offline: geen verwijzing naar een externe URL.
3. Elk diagram is getekend (geen lege of ongetekende blokken).
4. Besluiten en open vragen zijn gelijk aan de bron.
```

## 5. Voorbeeld: aanpassing in de bestaande skills

In `architect-domain-model`, `architect-sequence-diagrams`, `architect-class-diagram` en `architect-database` vervalt het blok "Het artifact publiceren (claude.ai/artifacts)". Daarvoor in de plaats (ook nieuw toe te voegen in `architect-architecture-choice`, `architect-cms-configuratie`, `architect-componentontwerp` en `architect-api-contracts`, die nu geen pagina maken):

```markdown
### De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort <architectuur | contentmodel | componentontwerp | domeinmodel | interactiediagrammen | klassendiagram | database | bouwcontract>. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart.
```

Aanvullend in `architect-class-diagram`: "Het klassendiagram is één document met één pagina: het overzicht van de modules, het volledige diagram en een plaat per module. Geen apart bestand per module."

In `architect-modeling` stap 5: "Claude-artifact" wordt "pagina volgens `ontwerppagina`, als bijlage op het issue".

## 6. Open, voor Atlas en Dr. Evil (techniek)

- Hoe het script de opmaak berekent en de diagrammen tekent zonder externe runtime. De voorbeelden zeggen niet met welk hulpmiddel de posities zijn berekend.
