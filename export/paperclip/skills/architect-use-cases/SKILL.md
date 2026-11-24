---
name: uml-use-cases
description: UML Use Cases: gebruik om uit goedgekeurde requirements een volledige, afgestemde lijst use cases met acceptatiecriteria te maken (actoren, scenario's, uitzonderingen, bedrijfsregels, dekking van eisen), eventueel met een grill-sessie. Levert use-cases.md en vraagt goedkeuring. Het resultaat is invoer voor het domeinmodel.
---

# UML use cases uitwerken

Deze skill werkt de **use cases** uit, met bijbehorende **acceptatiecriteria**. Ze is fase 1 van het modelleertraject (`architect-modeling`); het domeinmodel (`uml-domain-modelling`) volgt daarna. Je kunt de skill ook los gebruiken, bijvoorbeeld om één nieuwe use case toe te voegen (zie `requirements-clarification`, sectie B, en `architect-implementation-plan`). Communiceer in het Nederlands.

Voorwaarde: `docs/architecture/requirements.md` heeft `Status: Goedgekeurd`. Zo niet, gebruik eerst `requirements-analysis`.

## Taal en naamgeving (verplicht)

* **Alles wat in modellen en code terechtkomt is Engels:** namen van klassen, interfaces, methoden, attributen, namespaces, tabellen, kolommen, indexen, enums en waarden, domeinconcepten, deelnemers en berichten in sequentiediagrammen, relatielabels, en ook de titels en `description`-velden in de model-JSON. Gebruik gangbare Engelse domeintermen (`Order`, `Customer`, `Invoice`, niet `Bestelling`, `Klant`, `Factuur`).
* **Nederlands blijft voor het gesprek met de gebruiker** en voor de lopende tekst in reacties en documenten. Elke Engelse domeinterm staat in `GLOSSARY.md` (format van de skill `domain-modeling`: term, korte definitie, `_Avoid_`), met een extra regel `_NL_:` voor de Nederlandse term. Gebruik daarna overal dezelfde Engelse term.
* Controleer vóór het goedkeuringsmoment dat er geen Nederlandse actor- of begripsnaam in de titels staat.

## Gedeelde werkafspraken

Gebruik `domain-modeling` voor de termen: gebruik de woorden uit `GLOSSARY.md`, scherp vage termen aan en werk de glossary direct bij.

### ID's
Use cases: `UC-01`. Eisen: `FR-001` en `NFR-001`. Bedrijfsregels: `BR-001` (zie `domain-analysis`). Acceptatiecriteria: `AC-<UC-nummer>.<n>`, bijvoorbeeld `AC-03.2`.

### Goedkeuringsmoment
1. Controleer: elke use case verwijst naar de eisen die hij dekt, elke Must- en Should-eis is gedekt, elke use case heeft minstens één acceptatiecriterium, niets verwijst naar iets dat niet bestaat, en alles heeft een ID.
2. Controleer met de skill `requirements-validation`.
3. Post een reactie in het Nederlands: wat is er gemaakt (3 tot 6 regels), link naar het bestand als naslag, en korte vragen op een kaart over de keuzes die je zelf invulde (elk met advies en wat er bij nee gebeurt; hoogstens één scherm; `vragen-en-akkoordrondes`, B-23) in plaats van de vraag om akkoord op het document
4. Zet de issue in de wachtstand voor gebruikersinput en stop.
5. Bij feedback: pas het document aan, verhoog de versie in de wijzigingshistorie en leg opnieuw voor.
6. Bij akkoord: zet de status in het document op `Goedgekeurd (<datum>, <wie>)` pas als de bevestiging van de gebruiker zichtbaar is. Draag daarna over met de skill `overdracht` (zie ook `requirements-clarification`, sectie C) en meld de goedkeuring in het overdrachtsissue, zodat `STATUS.md` kan worden bijgewerkt.

### Grill-sessies

Waar iets onduidelijk is, gebruik je de skill `grilling`: stel de vragen die nu al gesteld kunnen worden in één ronde, met je aanbevolen antwoord, en stop als het resultaat er niet meer door verandert. Vraag niets wat je uit requirements, code of eerdere antwoorden kunt halen.

## Stappen

1. Leid actoren en use cases af uit de functionele eisen. Elke Must/Should-eis moet door minstens één use case gedekt zijn, en elke use case verwijst naar de eisen die hij dekt (FR-ID's).
2. Schrijf per use case, in `docs/architecture/use-cases.md`. Titels, actoren en domeinbegrippen zijn Engels (zie de glossary); de beschrijvende tekst mag Nederlands blijven:

```markdown
### UC-03 Check out order
- **Actor(en):** Customer (primair), PaymentProvider (secundair)
- **Doel:** Klant betaalt de inhoud van de winkelwagen.
- **Dekt eisen:** FR-012, FR-013, NFR-004
- **Voorwaarden vooraf:** Klant is ingelogd, winkelwagen bevat minstens één artikel.
- **Trigger:** Klant kiest "Afrekenen".
- **Hoofdscenario:**
  1. …
  2. …
- **Alternatieve scenario's:** 3a. Betaling mislukt → …
- **Uitzonderingen en foutgevallen:** …
- **Resultaat (nacondities):** Bestelling is betaald, voorraad gereserveerd, klant krijgt bevestiging.
- **Bedrijfsregels:** BR-004, BR-007 (zie `business-rules.md`)
- **Prioriteit:** Must · **Complexiteit:** M
- **Acceptatiecriteria:**
  - AC-03.1 (succes) Gegeven een ingelogde klant met een gevulde winkelwagen, wanneer de klant afrekent en de betaling slaagt, dan is de bestelling betaald en krijgt de klant een bevestiging.
  - AC-03.2 (fout) Gegeven …, wanneer de betaling mislukt, dan …
  - AC-03.3 (rand) Gegeven … dan …
```

3. Schrijf acceptatiecriteria voor elke use case: minstens het succespad, een foutpad, rechten en tenantgrenzen waar relevant, en de randgevallen. Een criterium beschrijft **waarneembaar gedrag** (Gegeven/Wanneer/Dan), niet dat een developer iets heeft gedaan, en is onafhankelijk van de implementatie. De code reviewer en de tester toetsen hiertegen, dus ze moeten eenduidig en afzonderlijk te verifiëren zijn.
4. Verwijs naar bedrijfsregels met hun `BR-`-ID in plaats van de regel te herhalen. Bestaat `business-rules.md` nog niet, gebruik dan `domain-analysis` om het op te stellen.
5. Voeg bovenaan een overzichtsdiagram (Mermaid `flowchart` met actoren en use cases) en een **dekkingstabel** toe (eis → use case → acceptatiecriteria; geen eis zonder use case, geen use case zonder criterium).
6. **Grill-sessie** waar scenario's, uitzonderingen, rollen of bedrijfsregels onduidelijk zijn. Typische vragen: "Wat gebeurt er als dit mislukt?", "Wie mag dit nog meer?", "Is dit direct of mag het later (asynchroon)?", "Wat als twee gebruikers dit tegelijk doen?"
7. Dit document is tekst en tabellen; een artifact is hier niet verplicht. Het goedkeuringsmoment gaat over het `.md`-bestand.
8. Controleer met `domain-modeling`: gebruik overal de termen uit `GLOSSARY.md`; botst een term of is hij vaag, scherp hem dan aan en werk de glossary direct bij.
9. Goedkeuringsmoment.

## Aanvulling PRC-08 (model 0.14): werken op Concept, lichte vorm en grill-sessie

Besluit: B-08/PRP-003, B-06, B-12/PRP-038, B-15, B-16. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor "uit goedgekeurde requirements" en voor het eigen goedkeuringsmoment hierboven waar die anders zeggen. Dekking: ACT-01.9, ACT-02.12.

grill_sessie: GS2 (ACT-01.9) en GS10 (ACT-02.12). Begin met een grill-sessie volgens `vragen-en-akkoordrondes`, met Carlo in de vorm van `grilling`. Heb je na het lezen geen open punten, dan is er geen sessie.

- **PRC-01:** je mag werken op requirements en bedrijfsregels met status `Concept`. Daarna volgen de paginalijst (ACT-01.27, `paginalijst-en-paginabrieven`), de toets van Atlas (ACT-01.23, `architect-use-case-review`), de kern (ACT-01.54) en GOV-10 (analysepakket) met een beoordeling per document. In **PRC-02** blijft de eis van goedgekeurde requirements (GOV-01 vóór ACT-02.12).
- **Lichte vorm (PRP-038):** bij een eenvoudige site (projecttype; P1) krijgt elke use case: actor, doel, hoofdpad in hooguit vijf stappen, en acceptatiecriteria voor het succespad en het belangrijkste foutpad. Contentpagina's zonder gedrag krijgen geen use case: paginalijst en brief dekken ze. Jij stelt de vorm voor in de visie (ACT-01.26), Atlas ziet die bij de toets, Carlo beslist in GOV-10. Kiest Atlas later een zwaarder profiel, dan werk je de use cases bij naar de volledige vorm: in PRC-01 in het pakket van GOV-15, in PRC-02 op vraag van Atlas via PRC-04, mee in het akkoord met het ontwerpbesluit (ACT-02.6). In PRC-02 volgen de use cases de vorm van het profiel (ACT-02.12).
- **B-06 blijft:** jij maakt de use cases, Atlas toetst ze en wijzigt ze niet. Atlas heeft deze skill niet nodig (PRP-002).
- Kwaliteitscriteria: elke FR gedekt; elke UC heeft AC's met ID; uitzonderingen beschreven. In de lichte vorm: hoofdpad in hooguit vijf stappen en AC's voor het succespad en het belangrijkste foutpad.
