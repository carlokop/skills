---
name: architect-api-contracts
description: Stelt per slice het bouwcontract op en legt de keuzes ervan als open vragen voor aan de gebruiker: een OpenAPI-bestand met een leesbare versie (P2 en P3) of een templatecontract als tabel (P1). Gebruik na de slice-indeling of bij een uitbreiding per slice.
---

# Bouwcontract per slice (OpenAPI)

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

Projectregels over hoe een contract wordt goedgekeurd (bijvoorbeeld altijd op een Artifact-pagina) gaan voor deze skill.

## Doel
Per slice het bouwcontract opstellen en de keuzes ervan als korte open vragen in je eindbericht voorleggen aan de gebruiker (het contract en de leesbare versie zijn naslag), die de frontend bouwt. Het contract volgt het ontwerp: de UI wordt nooit afgeleid van het contract.
- P2 en P3: API-contracten als **OpenAPI-bestand**, met een **leesbare versie** die eruit wordt gemaakt.
- P1: een **templatecontract** als **tabel** (template × veld × bron), uit het contentmodel van `architect-cms-configuratie`. OpenAPI met leesbare versie alleen waar echt een API is (eigen endpoints, koppelingen, headless CMS waarvan de frontend de API aanroept).

## Trigger
Een slice-indeling (`planning-and-task-breakdown`), of bij een uitbreiding het ontwerp per slice.

## Input
De slice; de goedgekeurde paginabrieven en ontwerpen (bindend); de visie; het technisch ontwerp van het profiel (P3 klassendiagram en databaseontwerp, P2 componenten-, route- en dataontwerp, P1 contentmodel); de API's die er al zijn; uit `architecture.md` de OpenAPI-versie en het hulpmiddel. **Niet** de mock data.

## Output
- Het **OpenAPI-bestand** van de slice in de repository van het project, in `docs/architecture/`. Per operatie: route, verzoek, antwoord, statuscodes, foutformaat, autorisatie, verwijzing naar UC en AC. Per veld de **bron** (brief, UC/AC of BR) in het bestand zelf, als `x-bron`.
- De **leesbare versie**, gemaakt uit dat bestand, als bestand op de documentlocatie van het project; vermeld het pad in je eindbericht. Bovenaan de **revisie**: de commit-hash van de laatste commit die het bestand wijzigde. Uitleg in het Nederlands, namen van velden en routes in het Engels. Per pagina: welke gegevens de pagina toont of verstuurt, welke acties, welke foutmeldingen, per veld de bron. Daaronder per operatie een tabel: wat het doet, erin, eruit, wie.
- Bij P1: het templatecontract als tabel, in een bestand op dezelfde plek.
- Status `Ter goedkeuring`.

## Werkwijze
1. Bepaal per pagina en AC van de slice welke gegevens en acties de frontend nodig heeft. Haal ze uit de brief, niet uit het ontwerp of de mock data.
2. Leg per operatie in het OpenAPI-bestand vast: route, verzoek, antwoord, statuscodes, fouten, autorisatie, in de versie uit `architecture.md`. Bij P1: leg per template de velden vast in de tabel; maak het contentmodel niet opnieuw.
3. Vul voor elk veld de bron in (`x-bron`; bij P1 de bronkolom). "Mock" mag daar niet staan. Voorbeelddata in het bestand is niet bindend.
4. Controleer of het contract past bij het technisch ontwerp en of het breaking changes geeft (`api-and-interface-design`, `deprecation-and-migration`).
5. **Leesbare versie maken en controleren** (alleen waar er een OpenAPI-bestand is):
   - Zet het bestand in `docs/architecture/`.
   - Controleer dat het geldig is volgens de gekozen OpenAPI-versie.
   - Maak de leesbare versie met het hulpmiddel uit `architecture.md`; schrijf hem niet zelf. Het hulpmiddel draait zonder iets aan het project toe te voegen (bijvoorbeeld `npx` of een container); moet het in het project komen, dan doet een developer dat.
   - **Controle 1 (jij, vóór het akkoord):** de leesbare versie noemt bovenaan precies de commit-hash van de laatste commit die het bestand wijzigde.
   - Schrijf de leesbare versie als bestand op de documentlocatie en vermeld het pad in je eindbericht.
6. Kan iets uit een brief niet gebouwd worden, zet dan een vraag in je eindbericht (brief: een verzoek aan Socrates, voorbereid als grill-sessie met `vragen-en-akkoordrondes`; ontwerp: een open vraag aan de ontwerper, nu de gebruiker) of dien een wijzigingsverzoek in, dat de gebruiker goedkeurt. Pas de brief of het ontwerp nooit aan vanuit het contract.
7. Leg de keuzes in het contract voor als open vragen in je eindbericht (geen akkoord op de leesbare versie als weergave van het contract), voor het akkoord op het bouwcontract per slice, na het implementatieplan: bij P2 en P3 met de paden van de leesbare versie en het OpenAPI-bestand; bij P1 de tabel, en waar er echt een API is ook de leesbare versie. Een akkoord op alle vragen is het akkoord op het contract. Inhoud en volgorde van de slices hebben hun eigen akkoord op het sliceplan (`architect-vertical-slices`) en komen hier niet mee. Geldt een voorwaarde uit je instructies (wanneer de gebruiker plan en ontwerp per slice meekeurt), dan komen ontwerp en plan mee. Bij afkeuring herzie je het contract en leg je het opnieuw voor.
   - Verandert het OpenAPI-bestand, dan maak je de leesbare versie opnieuw (nieuwe revisie; de antwoorden op de vorige vragen vervallen en je legt opnieuw voor).
   - **Faalt controle 2** (wie de slice gaat bouwen, vergelijkt vóór het bouwen de commit-hash in de leesbare versie met het OpenAPI-bestand en meldt een verschil via de aanroeper): maak uit het huidige bestand een nieuwe leesbare versie, ook als je de wijziging terugdraait. De slice gaat opnieuw langs het akkoord op het bouwcontract. Faalt het voor dezelfde slice een tweede keer, dan beslist de gebruiker.

## De pagina voor de gebruiker
Maak de pagina met `ontwerppagina`, soort bouwcontract. Eén pagina voor het hele document. Schrijf het HTML-bestand en vermeld het pad in je eindbericht; de aanroeper publiceert het als Claude-artifact als de gebruiker dat wil of het project het voorschrijft. Bewaar een URL die de aanroeper teruggeeft in het statusbestand. Leg de keuzes voor als open vragen in je eindbericht (`vragen-en-akkoordrondes`).

## Kwaliteitscriteria
- Elk veld en elke operatie is herleidbaar tot een goedgekeurde paginabrief, UC/AC of BR, niet tot mock data (criterium voor het akkoord op het bouwcontract).
- Het contract past bij het technisch ontwerp; bij P1 komt elk veld uit het contentmodel.
- Eén foutformaat; namen in het Engels, uitleg in het Nederlands.
- Geen breaking change zonder akkoord en migratiepad (`deprecation-and-migration`).
- Waar OpenAPI is: bestand geldig, leesbare versie gemaakt uit precies die revisie (niet apart geschreven), bron per veld in het bestand.
- De vorm van de data volgt het contract; inhoud en functie van de pagina volgen brief en ontwerp.

## Afhankelijkheden
Per profiel (slices: `planning-and-task-breakdown`): P1 `architect-cms-configuratie` (het contentmodel; die skill is eerst); P2 `architect-componentontwerp`; P3 `uml-class-diagram`. Ontwerpregels van het contract: `api-and-interface-design`. Verder `vragen-en-akkoordrondes` en `architect-architecture-choice` (OpenAPI-versie en hulpmiddel).

## Voorbeeld
P3, slice *Winkelwagen*, AC-02.1: `POST /carts/{cartId}/items` met `productId` en `quantity`, elk `x-bron: AC-02.1`; antwoord `201` met de winkelwagen, `409` met het vaste foutformaat bij geen voorraad (`x-bron: BR-02`). Leesbare versie, bovenaan de commit-hash: pagina *Productdetail* toont `name`, `price`, `stock` (bron: brief); actie *In winkelwagen* roept die route aan; foutmelding *Niet op voorraad* (BR-02). P1: template *Productpagina* met velden `name`, `price`, `allergens`; een klassiek thema zonder eigen API krijgt geen OpenAPI-bestand.

## Risico en restrisico
Hoe leesbaar de leesbare versie is, hangt van het hulpmiddel af; dat zie je bij de eerste slice (een vraag aan Atlas of een wijzigingsverzoek). Atlas controleert geldigheid en revisie; de hoofdsessie controleert de revisie na het akkoord (vaste controles), de bouwer vóór het bouwen. De aanroeper laat je werk vóór indiening controleren door atlas-licht (`ontwerp-controle`): elk veld en elke operatie herleidbaar, en het contract sluit aan op het ontwerp. Op de vragen staat alleen 'volledig gecontroleerd' of wat ontbreekt. Of de API-keuzes de beste zijn, beoordeelt alleen de gebruiker; dat blijft een bekend restrisico.

## Ontwerpregels
Deze skill beschrijft alleen de **vorm van het bouwcontract**: het OpenAPI-bestand als bron en de leesbare versie, de bron per veld (`x-bron`: brief, UC/AC, BR), het templatecontract bij P1 en het voorleggen voor het akkoord op het bouwcontract. De **ontwerpregels** staan in `api-and-interface-design`: contract first, één foutformaat, validatie aan de grens, toevoegen boven wijzigen, paginering. Pas die regels toe, herhaal ze niet.
