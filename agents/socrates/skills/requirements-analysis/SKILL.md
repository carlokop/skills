---
name: requirements-analysis
description: Zet een productaanvraag om in een toetsbaar, traceerbaar requirements-document dat de gebruiker goedkeurt, als basis voor de systeemarchitect. Gebruik bij een nieuw systeem, een grote wijziging of een vage wens. De architectuurkeuze zelf hoort hier niet bij.
---

# Requirements-analyse

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Een productaanvraag omzetten in een toetsbaar, traceerbaar requirements-document dat de gebruiker goedkeurt: wat het systeem moet doen en waarom, vóór er een ontwerp is. Deze skill schrijft geen code, kiest geen architectuur en neemt geen productbeslissingen namens de gebruiker.

## Gebruik wat er al is
Deze skill herhaalt de werkwijze van andere skills niet:
- **Vragen stellen:** skill `grilling`.
- **Verkennen, aannames scheiden, onderwerpen doorvragen, vage woorden omzetten in getallen:** skill `spec-driven-development` (fase Specify).
- **Begrippen en glossary:** skill `domain-modeling`.
- **Use cases met acceptatiecriteria:** skill `uml-use-cases`.
- **Bedrijfsregels en levenscyclus:** skill `domain-analysis`.
- **Kwaliteitscontrole:** skill `requirements-validation`.
- **Vragen, wijzigingen en overdracht:** skill `requirements-clarification`.

Wat niet in deze skill hoort: de architectuurkeuze (drivers, alternatieven, ADR's, context- en containerdiagram). Dat is werk voor de skill `architect-architecture-choice`, nadat dit document is goedgekeurd.

## Voorwaarde
Bestaat `docs/architecture/requirements.md` al met `Status: Goedgekeurd`? Dan is dit een wijziging: volg sectie B van `requirements-clarification`. Pas een goedgekeurd document niet rechtstreeks aan.

## Stappen
1. **Verken, scheid en vraag door** volgens `spec-driven-development` (Specify): lees eerst wat er al is, scheid feiten, beslissingen, aannames en open vragen, loop de onderwerpen langs en zet vage woorden om in getallen. Vraag niets wat je zelf kunt vinden. Bereid de vragen voor met `grilling`, alleen als eisen onvolledig, dubbelzinnig of niet toetsbaar zijn, zet ze in je eindbericht en stop (status "wacht op antwoorden"); de aanroeper hervat je met de antwoorden.
2. (Vervallen: zie stap 1.)
3. (Vervallen: zie stap 1.)
4. **Schrijf het document** volgens het sjabloon hieronder. Elke eis heeft een uniek ID, is toetsbaar en heeft een prioriteit (MoSCoW). Eén eis is één ding. Beschrijf wat, niet hoe. Niet-functionele eisen zijn meetbaar en omvatten security, privacy, prestaties en betrouwbaarheid waar relevant. Verzin niets: wat de gebruiker niet zei staat onder aannames of open vragen.
   - **Juridische keuzes:** loop bij elke analyse, ook van een wens, de juridische keuzes na die uit de opdracht volgen, zoals privacy, bewaartermijnen, voorwaarden en verwerkersafspraken. Leg elke keuze vast als eis of bedrijfsregel en zet er een open vraag aan de gebruiker bij; de keuze is van de gebruiker. Je geeft geen juridisch advies: de vraag maakt de keuze zichtbaar. Klaar als elke juridische keuze een ID en een open vraag heeft.
   - **Standaardeisen webproject:** neem bij elk webproject in sectie 5 deze twee eisen op, prioriteit Must. *Compatibiliteit:* elke pagina en functie werkt volledig in de huidige en de vorige hoofdversie van Chrome, Edge, Firefox en Safari, ook mobiel (Safari op iOS, Chrome op Android); toets: wanneer een AC wordt getest, slaagt die test in elk van die browserversies. *Toegankelijkheid:* elke pagina voldoet aan WCAG 2.2 niveau AA; toets: wanneer een pagina wordt opgeleverd, meldt axe-core geen AA-overtredingen en is de pagina volledig met het toetsenbord te bedienen en met een schermlezer te volgen.
5. **Termen:** leg elk nieuw domeinbegrip met de Engelse term vast in `GLOSSARY.md`, volgens `domain-modeling` (inclusief `_NL_`).
6. **Controleer** met `requirements-validation`.
7. **Leg de keuzes voor (verplicht).** Leg niet het hele document voor ter beoordeling: de gebruiker krijgt korte vragen, geen documenten. Het document staat als bestand op de documentlocatie (naslag); vermeld het pad in je eindbericht. Zet in je eindbericht genummerde open vragen over de keuzes en aannames die je zelf invulde (elk met één zin, advies en wat er bij nee gebeurt), volgens `vragen-en-akkoordrondes`. De aanroeper laat je werk vóór indiening controleren door de lichte variant (socrates-licht); op de vragen staat alleen "volledig gecontroleerd" of wat ontbreekt. Stop en geef je eindbericht terug (status "wacht op antwoorden"). Ga niet door zonder antwoord.
8. **Na feedback:** pas aan, verhoog de versie en voeg een regel toe aan de wijzigingshistorie. Leg opnieuw voor.
9. **Na goedkeuring:** zet `Status: Goedgekeurd (<datum>, <wie>)` pas als de aanroeper meldt dat de gebruiker akkoord gaf. Werk daarna de use cases en acceptatiecriteria uit met `uml-use-cases` en de bedrijfsregels met `domain-analysis`. Draag over volgens sectie C van `requirements-clarification` zodra ook die documenten zijn goedgekeurd.

## Sjabloon (`docs/architecture/requirements.md`)

```markdown
# Requirements – <systeemnaam>
Status: Concept | Ter goedkeuring | Goedgekeurd (<datum>, <wie>) · Versie: 0.1

## 1. Samenvatting
Vijf regels: doel, gebruikers, scope.

## 2. Context
Probleem, doelen en succescriteria, huidige situatie, gebruikers en rollen.

## 3. Scope
**Binnen versie 1:** …  **Buiten scope:** …

## 4. Functionele eisen
| ID | Eis | Prioriteit | Bron | Toets |
|----|-----|-----------|------|-------|
| FR-001 | … | Must | … | Wanneer …, dan … |

## 5. Niet-functionele eisen
| ID | Categorie | Eis (meetbaar) | Prioriteit | Toets |
|----|-----------|----------------|-----------|-------|

## 6. Randvoorwaarden en aannames
Aannames expliciet als "Aanname A-1: …".

## 7. Open vragen
| # | Vraag | Wie | Effect |

## 8. Traceerbaarheid
Eis → use case → acceptatiecriterium (wordt aangevuld).

## 9. Wijzigingshistorie
| Versie | Datum | Wijziging | Door |
```

## Regels
- Schrijf geen productiecode en kies geen architectuur.
- Los materiële onduidelijkheid niet stilzwijgend op.
- Zet niets op `Goedgekeurd` zonder bevestiging van de gebruiker, die de aanroeper je meldt.
- Meld een conflict met bestaande eisen. Kies niet zelf.
- Ga niet door na een vage reactie ("ziet er goed uit") als er open vragen zijn. Vraag of je het als goedgekeurd mag markeren, inclusief je voorgestelde antwoorden.

## Kern, visie, projecttype en grill-sessie

Deze aanvulling gaat voor stap 7 (voorleggen) en stap 9 (na goedkeuring) hierboven waar die anders zeggen.

Begin met een grill-sessie met de gebruiker volgens `vragen-en-akkoordrondes`, in de vorm van `grilling`: bij de analyse van een nieuw project en bij de analyse van een uitbreiding. Als subagent bereid je de ronde voor: alle vragen die nu te beantwoorden zijn, genummerd, elk met een aanbevolen antwoord, in je eindbericht. Heb je na het lezen geen open punten, dan is er geen sessie. Beslisregels, contextverslag en telling herhaal je hier niet.

- **Kern markeren:** voeg in het sjabloon een markering "kern" per eis toe. Markeer de kern nadat Atlas geen opmerkingen meer heeft op de use cases en brieven, vóór het akkoord op het analysepakket. De gebruiker bevestigt de kern bij dat akkoord. Keurt hij de kern af, dan pas je alleen de markering aan. De "nu"-pagina's van de paginalijst dekken de kern.
- **Geen eigen stop bij een nieuw project:** bij het eerste ontwerp van een nieuw project ga je door naar de visie en de use cases; het akkoord is dat op het analysepakket. Bij een uitbreiding volgt het akkoord op de requirements vóór de use cases, als open vragen per keuze, niet als oordeel over het hele document.
- **Visie en projecttype:** een stap na de requirements. Leg vast: de **productvisie** in `vision.md` (doel, doelgroepen, kernboodschap, hoofdstructuur, wat nu en later in principe), het **projecttype** met de signalen voor het profiel, en een **voorstel voor de vorm van de use cases** (licht of volledig). Jij signaleert; Atlas kiest het profiel. Signalen en criteria staan in `architectuurprofielen`. De visie gaat mee in het akkoord op het analysepakket; bij afkeuring herzie je de visie. Bij een uitbreiding werk je de visie bij waar nodig, mee in het akkoord op de requirements.
- **Design systeem:** bij het onderzoek vraag je naar het design systeem, als open vraag in je eindbericht (vorm van `grilling`). Het staat in de regel in Claude Design: de gebruiker deelt een link of projectnaam via de aanroeper, en bij elk ontwerp dat naar de bouw gaat levert de gebruiker een export als vaste versie aan. Het design systeem is input als het er al is; de analyse wacht er niet op.
- Eisen die je hier niet vult of verzint: ontbreekt iets, vraag het.
