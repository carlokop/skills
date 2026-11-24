---
name: ontwerppagina
description: Maakt van een ontwerpdocument één korte, zelfstandige HTML-pagina voor Carlo: managementsamenvatting, zoombare diagrammen met per onderdeel 1–3 regels, keuzes met waarom, en open vragen. Gebruik bij elk ontwerpdocument dat Carlo ziet: architectuur, contentmodel, componentontwerp, domeinmodel, interactiediagrammen, klassendiagram, database en de leesbare versie van het bouwcontract.
---

# Ontwerppagina

## Regels
1. Eén pagina per documentsoort. Nooit een pagina per module, gebied of use case.
2. De pagina komt uit het bronbestand (model-JSON of Markdown) via het script van de skill. Nooit met de hand. Onderaan: "Gegenereerd uit <bron>. Bij verschil geldt het bestand."
3. Zelfstandig: geen externe scripts, lettertypen of runtime. Alle diagrammen staan als SVG in de pagina, licht en donker.
4. Opmaak wordt bij het bouwen berekend (zie Opmaakprogramma). Geen raster in modelvolgorde.
5. Oplevering: bijlage op het issue. Daarna een kaart met vragen over de keuzes (`vragen-en-akkoordrondes`). Geen Claude-artifact.

## Opmaakprogramma
* De opmaak komt uit een vast programma dat groepen kent en lijnen om kaders heen legt. Het draait bij het bouwen; de pagina bevat alleen de tekening (posities en lijnen), geen programma.
* **Gekozen: ELK** (Eclipse Layout Kernel, elkjs 0.9.3, algoritme *layered* met geneste groepen en haakse lijnen). Besluit van Atlas, WEB-70. Reden: ELK kent kaders in kaders (module → Public/Internal), legt haakse lijnen om kaders en elementen heen, laat lijnen tussen kaders via de rand lopen en plaatst lijnlabels zonder overlap. Het is één JavaScript-bestand en draait in Node zonder externe dienst. Graphviz kan het ook, maar vraagt `dot`, en dat is er niet. Mermaid heeft een browser nodig en geeft de posities niet terug.
* ELK en het lettertype (Liberation Sans, metrisch gelijk aan Arial, SIL OFL) zitten in de skill (`architect-class-diagram/scripts/vendor/` en `fonts/`), dus er is niets te installeren. Het lettertype staat ook in de pagina, zodat de berekende tekstmaten overal kloppen.
* Een kader zonder lijnen tussen zijn eigen elementen (meestal Public en External) verdeelt het script over rijen, met onzichtbare hulplijnen voor ELK. Zo komt Internal bovenaan over de breedte en staan Public en External eronder naast elkaar, zonder lege vlakken.
* Na ELK zet het script lijnlabels en kadertitels die toch iets raken op een vrije plek. Het volledige diagram laat lijnen naar dezelfde klasse hun laatste stuk delen (ELK `mergeEdges`), zonder rolnamen en multipliciteit; die staan op de plaat per module en in het infopaneel (besluit Carlo, WEB-70 vraag 4).
* Loopt een stuk van een lijn vlak langs het laatste stuk van een andere lijn en buigt het pas vlak vóór diens doel af, of ligt het in het verlengde van een stuk van een andere lijn (misleidend), dan verschuift het script dat stuk naar de vrijste plek; een begin- of eindstuk blijft op dezelfde kant van zijn blok. Alleen als controle 3–8 voor die lijn niets nieuws vindt (WEB-169). Daarna, apart, verschuift het script op dezelfde manier stukken over of vlak langs de rand van een blok, en houdt daarbij 8 px vrij van labels van andere lijnen; zo blijven de verschuivingen hiervoor gelijk. Blijft er zo'n stuk over, dan telt het als bevinding en probeert het script andere instellingen (hieronder). Gestippelde lijnen krijgen hun streepjes vanaf het eind, zodat een gedeeld laatste stuk gestippeld blijft. Heeft een plaat na ELK toch een bevinding of een misleidende lijn, dan probeert het script een paar andere instellingen van ELK (o.a. richting rechts) en neemt de beste zonder bevindingen.
* Het databasedeel (ER-model) tekent hetzelfde script: tabellen als blokken met hun kolommen, FK-lijnen van ouder naar kind zonder pijlpunt, met label en multipliciteit.
* Sequentiediagrammen tekent het script zelf (deelnemers in kolommen, berichten in rijen); de kolombreedte volgt uit de labels.
* Een gebied of module is een groep: een kader met één kleur, in elk diagram dezelfde kleur. Lijnen zijn haaks en lopen om kaders heen.
* Het programma levert bij elk gebouwd diagram de positie van elk element en het pad van elke lijn. De controle hieronder leest die.
* Het script van `architect-class-diagram` is de eerste uitvoering. De andere ontwerpskills krijgen hetzelfde script na het akkoord van Carlo op de proef (WEB-70).

## Vaste opbouw
Besluit Carlo (WEB-19, comment `fa748da8`; WEB-105): de pagina is kort. Alleen deze secties, in deze volgorde:
1. **Titel** en één zin wat het is.
2. **Samenvatting** (managementsamenvatting): hoogstens 10 regels. Wat het systeem is, de modules, de 3–5 belangrijkste keuzes.
3. **Diagrammen**: eerst het overzicht (alles op één plaat), dan per onderdeel (gebied, module of use case) een plaat in de kleur uit het overzicht. Bediening: zoom (−, +, passend, 100%), slepen, klik op een element → zijn lijnen en buren lichten op, rechts een infopaneel met beschrijving en relaties in zinnen; schakelaar "Alleen namen" bij grote platen.
4. **Per onderdeel 1–3 regels** uitleg bij de plaat.
5. **Keuzes**: tabel nr | keuze | waarom, elke cel één regel.
6. **Open vragen**: of "Geen".

Geen andere secties: geen leeswijzer, geen inhoudsopgave als sectie (een navigatiebalk mag), geen soortspecifieke secties, geen geschiedenis ("Wat … verandert", verfijningen, afwijkingen, W-lijsten). Details voor developers staan in de notities bij het document (bijvoorbeeld `design-notes.md`, `database-notes.md`) en blijven daar.

**Bron.** Het document heeft vaste koppen: `## Samenvatting`, per onderdeel een `##`-sectie met de plaat en als eerste alinea de uitleg van 1–3 regels, `## Keuzes`, `## Open vragen`. Het script zet alleen die op de pagina: van een sectie met een plaat de kop, de eerste alinea en de platen; Samenvatting, Keuzes en Open vragen in hun geheel. Wat er verder in het document staat, komt niet op de pagina.

## Per documentsoort
| Soort | Overzicht | Per onderdeel |
| --- | --- | --- |
| Architectuur | Contextdiagram | Containerdiagram |
| Contentmodel | Alle inhoudstypen | Per paginatype |
| Componentontwerp | Modules en routes | Per module |
| Domeinmodel | Alle begrippen per gebied | Per gebied |
| Interactiediagrammen | Lijst use cases met gebied | Per use case één diagram |
| Klassendiagram | Afhankelijkheden tussen modules + volledig diagram | Per module |
| Database | Alle tabellen per gebied | Per gebied |
| Bouwcontract | Per pagina: gegevens en acties | Per operatie: in, uit, wie, fouten |

## Namen
Namen in het model en de code zijn Engels. Op de pagina staat bij een begrip de Nederlandse naam uit GLOSSARY.md met de Engelse naam erbij.

## Controle vóór oplevering
Een controle-agent (subagent van de maker) voert deze controle uit. Het script doet de toetsbare punten automatisch en stopt bij een fout.

**Inhoud**
1. Elk element uit het model staat in een diagram, en de tekst van de pagina-secties staat op de pagina; niets op de pagina ontbreekt in de bron.
2. De pagina werkt offline: geen verwijzing naar een externe URL.
3. Elk diagram is getekend (geen lege of ongetekende blokken).
4. Samenvatting, keuzes en open vragen zijn gelijk aan de bron. De samenvatting is hoogstens 10 regels, de uitleg per onderdeel hoogstens 3, de keuzes zijn een tabel nr | keuze | waarom. Het controleverslag noemt de secties die niet op de pagina komen.

**Tekening (toetsbaar, per diagram)**
5. Elk element ligt volledig binnen het kader van zijn gebied of module.
6. Geen lijn loopt door een kader of element waar hij niet begint of eindigt, of over of vlak langs de rand ervan.
7. Geen twee labels overlappen elkaar, en geen label overlapt een element of lijn.
8. Een lijn tussen twee gebieden verlaat en betreedt een kader via de rand van dat kader.
9. De controle-agent bekijkt elk diagram ook als afbeelding (render de SVG naar PNG en open die; `render-png.mjs` in `architect-class-diagram`) en meldt wat het script niet ziet, zoals onleesbare labels of lijnen die er verward uitzien.

Een diagram dat een van deze punten niet haalt wordt niet opgeleverd.


## Aanvulling WEB-96 (besluit Carlo, WEB-19): alleen documenten voor Carlo

Besluit: Carlo op WEB-19 (comment `2e2ec31e`). Deze aanvulling gaat voor alle eerdere regels over akkoord, pagina of issue-document voor dit onderdeel.

- Domeinmodel en interactiediagrammen (sequenties) zijn intern: maak er **geen** pagina voor en lever ze niet als bijlage of kaart aan Carlo. De rijen in de tabel "Per documentsoort" vervallen voor Carlo.
- Klassendiagram en database zijn **één documentsoort** ("Klassendiagram en database"): één pagina met de vaste opbouw hierboven; overzicht met afhankelijkheden tussen modules, het volledige diagram en alle tabellen per gebied, per module de klassenplaten met de tabellen erbij. Indexen, verwijdergedrag en migratie staan in de notities, niet op de pagina.
- De keuzes op de pagina bevatten ook de keuzes uit domeinmodel en sequenties die Atlas zelf invulde.
Zes invullingen zijn nog open op de kaart op WEB-19 (advies: ja). Werk met het advies; kiest Carlo anders, dan wordt deze aanvulling aangepast.
