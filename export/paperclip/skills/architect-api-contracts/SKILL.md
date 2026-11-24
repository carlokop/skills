---
name: architect-api-contracts
description: Stelt per slice het bouwcontract op en legt het voor aan Carlo: een OpenAPI-bestand met een leesbare versie (P2 en P3) of een templatecontract als tabel (P1). Gebruik na de slice-indeling (ACT-01.17) of bij een uitbreiding per slice (ACT-02.8).
---

# Bouwcontract per slice (OpenAPI)

Besluit: B-08/PRP-020, PRP-032, PRP-034, PRP-043, B-17 (OpenAPI), ASM-49 t/m ASM-53, ASM-56, ASM-57. Bron: `skill-specificaties` op WEB-19.

## Doel
Per slice het bouwcontract opstellen en de keuzes ervan als korte vragen op een kaart voorleggen aan Carlo (B-23; het contract en de leesbare versie zijn naslag), die de frontend bouwt (TL-04, TL-V4). Het contract volgt het ontwerp: de UI wordt nooit afgeleid van het contract (B-10).
- P2 en P3: API-contracten als **OpenAPI-bestand**, met een **leesbare versie** die eruit wordt gemaakt.
- P1: een **templatecontract** als **tabel** (template × veld × bron), uit het contentmodel van `architect-cms-configuratie`. OpenAPI met leesbare versie alleen waar echt een API is (eigen endpoints, koppelingen, headless CMS waarvan de frontend de API aanroept).

## Trigger
Een slice-indeling (`planning-and-task-breakdown`, ACT-01.17), of bij een uitbreiding het ontwerp per slice (ACT-02.8).

## Input
De slice; de goedgekeurde paginabrieven en ontwerpen (bindend); de visie; het technisch ontwerp van het profiel (P3 klassendiagram en databaseontwerp, P2 componenten-, route- en dataontwerp, P1 contentmodel); de API's die er al zijn; uit `architecture.md` de OpenAPI-versie en het hulpmiddel (ASM-51). **Niet** de mock data.

## Output
- Het **OpenAPI-bestand** van de slice in de repository van het project, in `docs/architecture/` (ASM-53). Per operatie: route, verzoek, antwoord, statuscodes, foutformaat, autorisatie, verwijzing naar UC en AC. Per veld de **bron** (brief, UC/AC of BR) in het bestand zelf, als `x-bron` (ASM-50).
- De **leesbare versie**, gemaakt uit dat bestand, als document op het issue van het bouwcontract. Bovenaan de **revisie**: de commit-hash van de laatste commit die het bestand wijzigde (ASM-52). Uitleg in het Nederlands, namen van velden en routes in het Engels. Per pagina: welke gegevens de pagina toont of verstuurt, welke acties, welke foutmeldingen, per veld de bron. Daaronder per operatie een tabel: wat het doet, erin, eruit, wie (ASM-49).
- Bij P1: het templatecontract als tabel op hetzelfde issue.
- Status `Ter goedkeuring`.

## Werkwijze
1. Bepaal per pagina en AC van de slice welke gegevens en acties de frontend nodig heeft. Haal ze uit de brief, niet uit het ontwerp of de mock data.
2. Leg per operatie in het OpenAPI-bestand vast: route, verzoek, antwoord, statuscodes, fouten, autorisatie, in de versie uit `architecture.md`. Bij P1: leg per template de velden vast in de tabel; maak het contentmodel niet opnieuw (PRP-043).
3. Vul voor elk veld de bron in (`x-bron`; bij P1 de bronkolom). "Mock" mag daar niet staan (PRP-032). Voorbeelddata in het bestand is niet bindend.
4. Controleer of het contract past bij het technisch ontwerp en of het breaking changes geeft (`api-and-interface-design`, `deprecation-and-migration`).
5. **Leesbare versie maken en controleren** (alleen waar er een OpenAPI-bestand is):
   - Zet het bestand in `docs/architecture/`.
   - Controleer dat het geldig is volgens de gekozen OpenAPI-versie.
   - Maak de leesbare versie met het hulpmiddel uit `architecture.md`; schrijf hem niet zelf. Het hulpmiddel draait zonder iets aan het project toe te voegen (bijvoorbeeld `npx` of een container); moet het in het project komen, dan doet een developer dat.
   - **Controle 1 (jij, vóór het akkoord):** de leesbare versie noemt bovenaan precies de commit-hash van de laatste commit die het bestand wijzigde.
   - Zet de leesbare versie als document op het issue.
6. Kan iets uit een brief niet gebouwd worden, stel dan een vraag via PRC-04 (brief: Socrates, als grill-sessie met `vragen-en-akkoordrondes`; ontwerp: de ontwerper, nu Carlo) of dien een wijzigingsverzoek in (GOV-12). Pas de brief of het ontwerp nooit aan vanuit het contract.
7. Leg de keuzes in het contract voor (kaart met vragen, geen akkoord op de leesbare versie als weergave van het contract) bij GOV-06 (akkoord bouwcontract per slice) na het implementatieplan (ACT-01.18 / ACT-02.9): bij P2 en P3 de leesbare versie met het OpenAPI-bestand erbij; bij P1 de tabel, en waar er echt een API is ook de leesbare versie. In UC1 komen inhoud en volgorde van slice 1 mee. Geldt een voorwaarde uit je instructies (regel 7 van Atlas), dan komen ontwerp en plan mee. Bij afkeuring volgt PRC-05.
   - Verandert het OpenAPI-bestand, dan maak je de leesbare versie opnieuw (nieuwe revisie; de kaart van Carlo vervalt).
   - **Faalt controle 2** (Dr. Evil vergelijkt vóór de taken de commit-hash, `quality-gates`): er komen geen taken voor die slice en Dr. Evil meldt het aan jou op het issue. Maak uit het huidige bestand een nieuwe leesbare versie, ook als je de wijziging terugdraait. De slice gaat opnieuw langs GOV-06. Faalt het voor dezelfde slice een tweede keer, dan legt Dr. Evil het aan Carlo voor (GOV-08) (ASM-56).

## De pagina voor Carlo
Maak de pagina met `ontwerppagina`, soort bouwcontract. Eén pagina voor het hele document. Zet hem als bijlage op het issue en leg de keuzes voor met een kaart (`vragen-en-akkoordrondes`). Upload daarnaast de `.md`-bestanden. Geen Claude-artifact.

## Kwaliteitscriteria
- Elk veld en elke operatie is herleidbaar tot een goedgekeurde paginabrief, UC/AC of BR, niet tot mock data (criterium GOV-06).
- Het contract past bij het technisch ontwerp; bij P1 komt elk veld uit het contentmodel.
- Eén foutformaat; namen in het Engels, uitleg in het Nederlands.
- Geen breaking change zonder akkoord en migratiepad (`deprecation-and-migration`).
- Waar OpenAPI is: bestand geldig, leesbare versie gemaakt uit precies die revisie (niet apart geschreven), bron per veld in het bestand.
- De vorm van de data volgt het contract; inhoud en functie van de pagina volgen brief en ontwerp (PRP-032).

## Afhankelijkheden
Per profiel (slices: `planning-and-task-breakdown`): P1 `architect-cms-configuratie` (het contentmodel; die skill is eerst); P2 `architect-componentontwerp`; P3 `uml-class-diagram`. Ontwerpregels van het contract: `api-and-interface-design`. Verder `vragen-en-akkoordrondes` en `architect-architecture-choice` (OpenAPI-versie en hulpmiddel).

## Voorbeeld
P3, slice *Winkelwagen*, AC-02.1: `POST /carts/{cartId}/items` met `productId` en `quantity`, elk `x-bron: AC-02.1`; antwoord `201` met de winkelwagen, `409` met het vaste foutformaat bij geen voorraad (`x-bron: BR-02`). Leesbare versie, bovenaan de commit-hash: pagina *Productdetail* toont `name`, `price`, `stock` (bron: brief); actie *In winkelwagen* roept die route aan; foutmelding *Niet op voorraad* (BR-02). P1: template *Productpagina* met velden `name`, `price`, `allergens`; een klassiek thema zonder eigen API krijgt geen OpenAPI-bestand.

## Risico en restrisico
Hoe leesbaar de leesbare versie is, hangt van het hulpmiddel af; dat zie je bij de eerste slice (vraag aan Atlas via PRC-04 of wijzigingsverzoek GOV-12). Er komt geen inhoudelijke tweede controle op het OpenAPI-bestand (ASM-57): Atlas controleert geldigheid en revisie, Dr. Evil de revisie vóór de taken. Dat niemand anders het werk van Atlas leest blijft een bekend restrisico (FND-017, FND-022; maatregel PRP-018 als signaal).

## Aanvulling CHG-033 (besluit Carlo, WEB-152; model 0.17): ontwerpregels
Bron: `skillwijzigingen` §2. Deze skill beschrijft alleen de **vorm van het bouwcontract**: het OpenAPI-bestand als bron en de leesbare versie, de bron per veld (`x-bron`: brief, UC/AC, BR), het templatecontract bij P1 en het indienen voor GOV-06. De **ontwerpregels** staan in `api-and-interface-design`: contract first, één foutformaat, validatie aan de grens, toevoegen boven wijzigen, paginering. Pas die regels toe, herhaal ze niet.
