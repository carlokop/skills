---
name: requirements-analysis
description: Zet een productaanvraag om in een toetsbaar, traceerbaar requirements-document dat de gebruiker goedkeurt, als basis voor de systeemarchitect. Gebruik bij een nieuw systeem, een grote wijziging of een vage wens. De architectuurkeuze zelf hoort hier niet bij.
---

# Requirements-analyse

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
1. **Verken, scheid en vraag door** volgens `spec-driven-development` (Specify): lees eerst wat er al is, scheid feiten, beslissingen, aannames en open vragen, loop de onderwerpen langs en zet vage woorden om in getallen. Vraag niets wat je zelf kunt vinden. Stel de vragen met `grilling`, alleen als eisen onvolledig, dubbelzinnig of niet toetsbaar zijn, en zet het issue in afwachting zoals de skill `paperclip` beschrijft.
2. (Vervallen: zie stap 1.)
3. (Vervallen: zie stap 1.)
4. **Schrijf het document** volgens het sjabloon hieronder. Elke eis heeft een uniek ID, is toetsbaar en heeft een prioriteit (MoSCoW). Eén eis is één ding. Beschrijf wat, niet hoe. Niet-functionele eisen zijn meetbaar en omvatten security, privacy, prestaties en betrouwbaarheid waar relevant. Verzin niets: wat de gebruiker niet zei staat onder aannames of open vragen.
   - **Standaardeisen webproject (besluit Carlo, WEB-191):** neem bij elk webproject in sectie 5 deze twee eisen op, prioriteit Must. *Compatibiliteit:* elke pagina en functie werkt volledig in de huidige en de vorige hoofdversie van Chrome, Edge, Firefox en Safari, ook mobiel (Safari op iOS, Chrome op Android); toets: wanneer een AC wordt getest, slaagt die test in elk van die browserversies. *Toegankelijkheid:* elke pagina voldoet aan WCAG 2.2 niveau AA; toets: wanneer een pagina wordt opgeleverd, meldt axe-core geen AA-overtredingen en is de pagina volledig met het toetsenbord te bedienen en met een schermlezer te volgen.
5. **Termen:** leg elk nieuw domeinbegrip met de Engelse term vast in `GLOSSARY.md`, volgens `domain-modeling` (inclusief `_NL_`).
6. **Controleer** met `requirements-validation`.
7. **Leg de keuzes voor (verplicht).** Leg niet het hele document voor ter beoordeling (CHG-033: dat botst met B-23). Voeg het document toe aan de issue als taakdocument of bijlage (naslag; een pad op schijf alleen is niet genoeg) en zet een kaart met korte vragen over de keuzes en aannames die je zelf invulde (elk met één zin, advies en wat er bij nee gebeurt), volgens `vragen-en-akkoordrondes` (B-23). Een controle-agent toetst vooraf of alles erop staat. Zet het issue in afwachting en stop. Ga niet door zonder antwoord.
8. **Na feedback:** pas aan, verhoog de versie en voeg een regel toe aan de wijzigingshistorie. Leg opnieuw voor.
9. **Na goedkeuring:** zet `Status: Goedgekeurd (<datum>, <wie>)` pas als de bevestiging van de gebruiker zichtbaar is. Werk daarna de use cases en acceptatiecriteria uit met `uml-use-cases` en de bedrijfsregels met `domain-analysis`. Draag over volgens sectie C van `requirements-clarification` zodra ook die documenten zijn goedgekeurd.

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
- Zet niets op `Goedgekeurd` zonder zichtbare bevestiging van de gebruiker.
- Meld een conflict met bestaande eisen. Kies niet zelf.
- Ga niet door na een vage reactie ("ziet er goed uit") als er open vragen zijn. Vraag of je het als goedgekeurd mag markeren, inclusief je voorgestelde antwoorden.

## Aanvulling PRC-08 (model 0.14): kern, visie, projecttype en grill-sessie

Besluit: B-08/PRP-003, PRP-015, B-10, B-12/PRP-029, PRP-034, PRP-038, B-13, B-15, B-16, ASM-27, ASM-41. Bron: `skill-specificaties` op WEB-19. Deze aanvulling gaat voor stap 7 (voorleggen) en stap 9 (na goedkeuring) hierboven waar die anders zeggen. Dekking: ACT-01.3, ACT-01.6, ACT-01.26, ACT-01.54, ACT-02.3.

grill_sessie: GS1 (ACT-01.3) en GS9 (ACT-02.3). Begin met een grill-sessie volgens `vragen-en-akkoordrondes`, met Carlo in de vorm van `grilling`. Heb je na het lezen geen open punten, dan is er geen sessie (ASM-41). Beslisregels, contextverslag en telling herhaal je hier niet.

- **Kern markeren (PRP-015, ACT-01.54):** voeg in het sjabloon een markering "kern" per eis toe. Markeer de kern na de toets van de use cases en brieven (G-01.4 nee), vóór GOV-10. Carlo bevestigt de kern bij GOV-10. Keurt hij de kern af, dan gaat alleen de markering terug naar ACT-01.54. De "nu"-pagina's van de paginalijst dekken de kern.
- **Geen eigen stop in PRC-01 (PRP-003):** je gaat door naar de visie (ACT-01.26) en de use cases (ACT-01.9); het akkoord is GOV-10 (analysepakket). In PRC-02 volgt het akkoord (GOV-01 vóór ACT-02.12) als kaart met vragen per keuze, niet als oordeel over het hele document.
- **Visie en projecttype (ACT-01.26, ASM-27):** een stap na de requirements. Leg vast: de **productvisie** in `vision.md` (doel, doelgroepen, kernboodschap, hoofdstructuur, wat nu en later in principe), het **projecttype** met de signalen voor het profiel, en een **voorstel voor de vorm van de use cases** (licht of volledig, PRP-038). Jij signaleert; Atlas kiest het profiel. Signalen en criteria staan in `architectuurprofielen`. De visie gaat mee in GOV-10; bij afkeuring terug naar ACT-01.26. In PRC-02 werk je de visie bij waar nodig (ACT-02.3, GOV-01).
- **Design systeem:** bij het onderzoek (ACT-01.3) vraag je naar het design systeem; de vraag stel je in ACT-01.4 met `grilling` en `paperclip`. Het staat in de regel in Claude Design: Carlo deelt een link of projectnaam op het opdracht-issue, en bij elk ontwerp dat naar de bouw gaat staat een export als vaste versie op het issue (PRP-042). Het design systeem is input als het er al is; de analyse wacht er niet op (G-01.7).
- Eisen die je hier niet vult of verzint: ontbreekt iets, vraag het (ASM-41).
