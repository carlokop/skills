> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.15: PRC-08 doorgevoerd in het model (CHG-028)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-11-01, Carlo, kaart `cf1337ff`)**, alle 3 onderdelen van de kaart goedgekeurd: CHG-028 (PRC-08 doorgevoerd in het model) en de aannames ASM-60 en ASM-61; besluit **B-22** (model 0.15 goedgekeurd). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register` en `bevindingen`; zie CHG-028 in `wijzigingen`. Vóór de goedkeuring: **Concept (2026-11-01)**, ter goedkeuring. Tot je akkoord geldt model 0.14 (Goedgekeurd 2026-10-31, kaart `e9c7f866`). |
| Aanleiding | Het pakket PRC-08 (organisatie aanpassen) is uitgevoerd op [WEB-26](/WEB/issues/WEB-26). Je keurde het voorstel van Dr. Evil goed op kaart `54896ae0` (O1 t/m O10, met O1a en O1b) en rondde WEB-26 af op kaart `4279e5f7`. In het register is dat besluit **B-21** (pakket PRC-08 goedgekeurd en uitgevoerd). Aangekondigd in comment `7b691642`. |
| Uitwerking | [v015-register](#document-v015-register) · [v015-bevindingen](#document-v015-bevindingen) · [wijzigingen](#document-wijzigingen) (CHG-028) · [controle](#document-v015-controle) |

**Wat de codes betekenen** (B-18 – codes met een korte naam): UC1 = use case 1, nieuwe klant (PRC-01) · UC2 = use case 2, backlog uitbreiden (PRC-02) · PRC = proces of subproces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B = een besluit van jou · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · M = plek waar Paperclip niet netjes past · K = punt uit de modelcontrole. O1 t/m O10 = de onderdelen van het voorstel van Dr. Evil op WEB-26. De volledige lijst staat in `codes-en-namen`.

## 1. Waarom een nieuwe modelversie

In model 0.14 staat op veel plekken "besloten, via PRC-08 (organisatie aanpassen)": de skill moet nog gemaakt of uitgebreid worden, de regel moet nog in de instructies, de routine bestaat nog niet. Dat is nu uitgevoerd. Het model moet zeggen wat er echt staat. Anders klopt de telling niet, en lijkt het alsof er nog werk openstaat.

**Processen, stappen, beslissingen, routes en diagrammen blijven gelijk.** UC1 houdt 4 akkoorden. Bij drie akkoorden en bij één stap verandert alleen de tekst, niet wat er gebeurt (§5):
- GOV-06 (akkoord bouwcontract per slice) en GOV-08 (escalatiebesluit) noemen de route van ASM-56 (revisiecontrole OpenAPI faalt);
- GOV-07 (keuze van de volgende wens): bij de bron staat nu dat de uitzondering in de skills is doorgevoerd;
- ACT-02.53 (vaste controles uitvoeren): zie punt 4 in §5.

## 2. Wat er is doorgevoerd (zelf nagekeken op 2026-11-01)

Ik heb niet alleen het verslag van Dr. Evil overgenomen. Ik heb alles zelf nagekeken in de Paperclip-API en in de bestanden.

| Onderdeel | Wat er nu staat (feit) | Bron |
| --- | --- | --- |
| O1 – koppelingen | **Atlas:** 8 weg (`paperclip-board`, `paperclip-create-agent`, `to-spec`, `to-tickets`, `first-task`, `para-memory-files`, `paperclip-converting-plans-to-tasks`, `architect-use-cases`) en 9 erbij (zijn 9 nieuwe skills). **Dr. Evil:** `vragen-en-akkoordrondes` en `architectuurprofielen` erbij; `para-memory-files` blijft, met twee regels (O1a). **Socrates:** `vragen-en-akkoordrondes`, `architectuurprofielen` en `paginalijst-en-paginabrieven` erbij; de zes `bpmn-`-skills blijven. `complain` en `suggestion-box` zijn bij alle vier de agents ingesteld, ook bij Sentinel (O1b). Alleen jij kunt de ingediende klachten en suggesties lezen, de agents niet. | Paperclip-API: `desiredSkills` per agent; `/api/agents/{id}/skills` (Sentinel); voor het lezen: comment `1be9d7d4` op WEB-26 |
| O2 – routines | *Weekmoment klaarzetten*: maandag 04:00. *Dagstart: flowcheck en herinnering*: maandag t/m vrijdag 09:00. Beide in Nederlandse tijd, actief en toegewezen aan Dr. Evil. De eerste run is op 2026-11-02. | Paperclip-API, `/routines` |
| O3, O4, O5 – instructies | **Dr. Evil:** enig loket, project aanmaken, flowcheck met drempel 5, herinnering om 09:00, signaal voor een aparte agent, en de twee regels voor `para-memory-files`. **Socrates:** één loket, project aanmaken, toets-issue voor Atlas, akkoord via een kaart, de export als vaste versie, en de `bpmn-`-skills alleen op verzoek. **Atlas:** de tech-leadtaken TL-01 t/m TL-06, TL-08 en TL-09 staan er inhoudelijk in, zonder de TL-codes. Ook staan erin: een ADR bij elke wijziging van het globale ontwerp, en alleen technische termen in GLOSSARY.md. **TL-07** (een implementatieplan op verzoek van een developer) staat er niet meer expliciet in (FND-043). | AGENTS.md van de drie agents (bijgewerkt 2026-11-01) |
| O6 – nieuwe skills | 10 gemaakt: `architect-vertical-slices`, `architect-api-contracts`, `architect-use-case-review`, `architect-conventions`, `architect-clarification`, `vragen-en-akkoordrondes`, `paginalijst-en-paginabrieven`, `architectuurprofielen`, `architect-cms-configuratie` en `architect-componentontwerp`. Ze hebben de werknaam uit het model gekregen. `paginaontwerp` is bewust niet gemaakt. | SKILL.md in de skills van het bedrijf |
| O7 – uitgebreide skills | 15 skills hebben een sectie *Aanvulling PRC-08 (model 0.14)*. `domain-modeling` komt uit GitHub; die is voor Atlas aangevuld via zijn instructies. | SKILL.md; voor de skills van Atlas: `architect-src`; AGENTS.md Atlas |
| O8 – conventies | `bpmn-conventies`, `bpmn-eindontwerp` en `bpmn-modelcontrole` zijn aangepast: skills bij hun naam, codes met een korte naam en de kaart als vaste vorm van akkoord. | comment `493e8064` op WEB-26 |
| O9 – Claude Design | Optie A: de agents krijgen geen eigen toegang. De ontwerper zet altijd een export als vaste versie op het issue. | instructies van Socrates en Atlas; `paginalijst-en-paginabrieven` |
| O10 – project aanmaken | Niet getest. Of Dr. Evil en Socrates een project mogen aanmaken, blijkt bij de eerste echte opdracht (OPEN-15 – mogen Dr. Evil en Socrates een project aanmaken). | comment `493e8064` op WEB-26 |

## 3. Wat er in het register verandert

1. **Skills in het kort en `skills`:**
   - De 10 nieuwe skills staan op *bestaat*, met hun sleutel. Ze heten geen werknaam meer. In de dekking staat `was: nieuw`.
   - De 16 uit te breiden skills staan op *bestaat*. In de dekking staat `was: uitbreiden`.
   - `paginaontwerp` blijft *nieuw*, want hij is bewust niet gemaakt. Hij telt niet mee: alleen jij ontwerpt, in ACT-01.28 (sleutelpagina's en paginatypen ontwerpen) en ACT-02.16 (pagina's en nieuwe patronen ontwerpen).
2. **Wie welke skill heeft:**
   - `uml-use-cases`: alleen Socrates nog;
   - `paperclip-converting-plans-to-tasks`: alleen Dr. Evil;
   - `to-tickets`: geen enkele agent.
3. **Nieuw in het register.** Deze skills zijn wel gekoppeld, maar geen stap in UC1 of UC2 gebruikt ze:
   - `para-memory-files` (Dr. Evil), met de twee regels uit O1a;
   - `improve-codebase-architecture` (Atlas);
   - de zes `bpmn-`-skills (Socrates). Dat zijn modelleerskills voor dit organisatiemodel, los van UC1 en UC2 (comment `3018996a` op WEB-26).
4. **Rollen en agents:** bij Dr. Evil (ROL-02), Socrates (ROL-03) en Atlas (ROL-04, AGT-03) staat nu dat de taken die "to-be (B-08)" heetten, in de instructies staan.
5. **Routines:** bij PRC-02 (backlog uitbreiden), PRC-07 (weekmoment en prioriteren) en ASM-32 (weekmoment en dagstart van Dr. Evil) staat dat de routines bestaan, maar dat ze nog niet zijn gezien draaien.
6. **Open vragen en Claude Design:**
   - Claude Design staat op optie A;
   - OPEN-05 (koppeling van skills aan Atlas) is uitgevoerd;
   - OPEN-14 (plek van design systeem en ontwerpen) zegt nu dat de export de bron is;
   - OPEN-15 blijft open tot de eerste echte opdracht.
7. **B-21** staat bij de besluiten.

## 4. De telling van de skillstatus

| | aanwezig | gedeeltelijk | ontbreekt | n.v.t. |
| --- | --- | --- | --- | --- |
| model 0.14 | 17 | 23 | 35 | 9 |
| **model 0.15** | **75** | **0** | **0** | **9** |

Elke stap van een agent heeft nu alle skills die hij nodig heeft (84 stappen). **Maar "aanwezig" betekent alleen: de skill is gekoppeld en de tekst dekt de stap.** Of de skills in de praktijk goed werken, weten we niet. Geen van de nieuwe of uitgebreide skills is al gebruikt (OPEN-11 – proefrun van de skills). De telling zegt daardoor niets meer over hoe goed de organisatie werkt. Dat blijkt pas bij de eerste echte opdracht, of bij een proefrun.

## 5. De gaten in model 0.14 (lijst `register-gaten-0-14`)

Je keurde goed dat punt 1 t/m 6 meegaan met de eerstvolgende wijziging van het model (kaart `7a725bdb`). Dit is die wijziging.

| Punt | Hersteld |
| --- | --- |
| punt 1 | ASM-42 (inhoud van het contextverslag) zegt nu hetzelfde als ACT-04.55 (contextverslag opstellen): "het issue waarop de vrager zijn stap doet". |
| punt 2 | GOV-06 (akkoord bouwcontract per slice) en GOV-08 (escalatiebesluit) noemen de route van ASM-56 (revisiecontrole OpenAPI faalt). Bij GOV-08 staat ook wat Dr. Evil na jouw besluit doet. |
| punt 3 | `quality-gates` noemt ASM-56 (revisiecontrole OpenAPI faalt), in het register en in de skill zelf (O7). |
| punt 4 | ACT-02.53 (vaste controles uitvoeren) en ASM-56 zeggen nu dat ACT-02.11 (taken maken en op backlog zetten) pas volgt als de controles slagen. |
| punt 5 | `architect-use-case-review` heeft in het register het veld `grill_sessie`, net als de andere skills met een grill-moment. |
| punt 6 | De dekking van `vragen-en-akkoordrondes` heeft per stap dezelfde capability als `koppelingen`. |
| punt 7 | Was al goedgekeurd en is uitgevoerd in O1. |

De korte namen van CHG-027 (weergaven van model 0.14) en CHG-028 staan nu in `korte_namen`.

## 6. Wat ik vond en wat ik heb ingevuld

**FND-042 (skills uitgebreid met een aanvulling).** Dr. Evil heeft de bestaande skills niet stap voor stap herschreven. Hij heeft er een aanvulling aan toegevoegd, en die gaat voor. Bij 8 skills staat de oude stop of het oude goedkeuringsmoment daardoor nog in de tekst. Het gaat om akkoord per document of per fase, terwijl het model een pakketakkoord heeft (B-08: PRP-003 – minder, maar betere akkoorden). Die 8 skills zijn `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `architect-modeling`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram` en `architect-database`. Een voorbeeld: `requirements-analysis` stap 7 zegt nog "Ga niet door zonder goedkeuring". Dr. Evil vroeg je of hij ze alsnog moest herschrijven, en daar koos je niet voor. Ik neem het op als restrisico.

**FND-043 (TL-07 niet meer expliciet bij Atlas).** Bij het herschrijven van de instructies van Atlas is één zin weggevallen: TL-07, een implementatieplan op verzoek van een developer. Dat speelt pas als er developers zijn, dus nu merk je het niet. Er is nu geen maatregel nodig.

**Twee aannames, ter bevestiging op de kaart:**
- **ASM-60 (aanvulling gaat voor op oudere stappen).** Zo'n skill telt in het model als *bestaat*, omdat de aanvulling zelf zegt dat zij voorgaat. Wijs je dit af, dan gaan die 8 skills op *gedeeltelijk*. Dat raakt 15 stappen, en de telling wordt dan 60 / 15 / 0 / 9. Herschrijven loopt dan via Dr. Evil.
- **ASM-61 (processtappen blijven to-be tot ze draaien).** De stappen in PRC-01 t/m PRC-06 (de twee use cases en de vier subprocessen) houden *situatie: to-be*. *As-is* betekent volgens `bpmn-conventies` dat iets in de praktijk is gezien, en dat is nog niet gebeurd. De skills, instructies en routines zelf staan wel als feit.

## 7. Wat niet verandert

- Processen, stappen, beslissingen, routes en diagrammen. UC1 houdt 4 akkoorden. Bij GOV-06, GOV-07, GOV-08 en ACT-02.53 verandert alleen de tekst (§1).
- De goedgekeurde overzichten en pagina 0.7 blijven gelden tot na je akkoord. Daarna werk ik ze bij (§8).
- Aan agents, instructies, skills en routines verandert door dit concept niets. Het model beschrijft alleen wat Dr. Evil al heeft gedaan.

## 8. Na je akkoord

1. De goedgekeurde inhoud gaat naar het geldende register, de bevindingen en de wijzigingen.
2. Daarna werk ik de overzichten bij die hierdoor veranderen, en bouw ik pagina 0.8. Dat wordt CHG-029 (weergaven van model 0.15), met een controle door een aparte agent en een kaart voor jou. Het gaat om:
   - de skillmatrices, capabilities en skills, en de skill-specificaties;
   - het profiel van Atlas, de RACI en de organisatie;
   - de voorstellen (de regels *Uitvoering*);
   - de Paperclip-mapping, met M-4 (flowcheck en herinnering);
   - de uitbreidingsgids.

## 9. Open punten (blokkeren niets)

- **OPEN-11 (proefrun van de skills):** nu belangrijker dan eerst, want de telling zegt niets meer over werking.
- **OPEN-13 (wanneer wacht een uitbreiding aantoonbaar op Atlas):** de drempel is nog niet gekozen.
- **OPEN-15 (mogen Dr. Evil en Socrates een project aanmaken):** blijkt bij de eerste echte opdracht.
- **De routines:** op 2026-11-02 blijkt of ze draaien. Dr. Evil controleert dat en meldt het als het niet werkt.
