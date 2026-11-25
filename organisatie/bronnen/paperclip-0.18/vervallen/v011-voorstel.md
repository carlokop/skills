> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.11: je antwoorden op de open vragen (CHG-019) en de gaten in het register (CHG-018)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-30, Carlo, kaart `fa26d50e`)**, alle 18 onderdelen (besluit B-14). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register`, `prc-01`, `prc-02`, `prc-03`, `paperclip-mapping`, `uitbreidingsgids`, `bevindingen` en `voorstellen`; zie CHG-018 en CHG-019 in `wijzigingen`. Vóór de goedkeuring: **Concept (2026-10-30)**, versie 0.11 (CHG-018 en CHG-019). Tot je akkoord geldt model 0.10 (Goedgekeurd, 2026-10-30, Carlo, kaart `f261b9ac`). |
| Aanleiding | Je antwoorden in comment `f06fede2` en `a690e8f3` (2026-10-30) op OPEN-03, 04, 05, 09, 10 en 14. Vastgelegd als besluit **B-13**. Daarnaast je akkoord op kaart `a16387c4` (2026-10-30) om de gaten in register 0.10 te herstellen als **CHG-018**, in deze versie (§5b). |
| Controle | Door een aparte agent: [v011-controle](/WEB/issues/WEB-19#document-v011-controle) (CHG-019) en [v011-controle-chg018](/WEB/issues/WEB-19#document-v011-controle-chg018) (CHG-018) |
| Uitwerking | [v011-register](/WEB/issues/WEB-19#document-v011-register), [v011-prc-01](/WEB/issues/WEB-19#document-v011-prc-01), [v011-prc-02](/WEB/issues/WEB-19#document-v011-prc-02), [v011-prc-03](/WEB/issues/WEB-19#document-v011-prc-03), [v011-paperclip-mapping](/WEB/issues/WEB-19#document-v011-paperclip-mapping), [v011-uitbreidingsgids](/WEB/issues/WEB-19#document-v011-uitbreidingsgids) (versie 0.5: §6 en drie labels). |
| Niet in deze versie | De **overzichten** (matrices, RACI, skill-specificaties, profiel van Atlas) en de **pagina** werk ik bij na je akkoord op 0.11, net als bij 0.10. |

Labels: **B** = Besloten (jouw woorden). **F** = Feit, met bron. **A** = Aanname (ASM), mijn invulling waar je antwoord iets openliet. **V** = Voorstel (PRP), mijn advies.

## 1. Je antwoorden en hoe ik ze verwerk (B-13)

| | Jouw antwoord (B) | Zo staat het in het model | Wat ik heb ingevuld (A) |
| --- | --- | --- | --- |
| **OPEN-03** | UC2 start in elk geval op het weekmoment, maandag om 04:00. Daarnaast als er in de huidige slice nog 5 taken open zijn, en als jij erom vraagt. | PRC-02 krijgt drie triggers. ACT-02.51 heet nu *Open taken in de lopende slice tellen* en start PRC-02. Nieuwe start *Verzoek van Carlo*. | **ASM-30:** "nog 5 open" = zodra het er 5 of minder zijn; open = niet `done` of `cancelled` (geblokkeerd en in review tellen mee); lopende slice = de epic die het laatst op het backlog is gezet. **ASM-32:** de flowcheck draait elke werkdag om 09:00, samen met de herinnering. **ASM-33:** per project nooit twee doorlopen tegelijk (nieuwe beslissing G-02.8). **Let op:** vraag je om een uitbreiding terwijl er al een doorloop loopt, dan start je verzoek niets; de wens gaat bovenaan de lijst en komt bij de volgende start als eerste. |
| **OPEN-04** | Jij maakt de git-repository aan. Wie van jou de opdracht krijgt, maakt het project in Paperclip aan: Dr. Evil of Socrates. | ACT-01.1: de opdracht bevat de link naar de repository. ACT-01.2 (Dr. Evil) en ACT-01.51 (Socrates) maken het project aan; ze hebben een nieuwe naam. Het tweede deel van OPEN-04 (staan de documenten in `docs/architecture/`?) volgt uit de instructies van Socrates en Atlas (F). | **ASM-31:** Socrates maakt het project aan en meldt de opdracht daarna aan Dr. Evil; inhoudelijk begint hij pas na toewijzing, dus *één loket* (PRP-001, B-08) blijft. **ASM-34:** ontbreekt de link, dan vraagt de ontvanger hem na. |
| **OPEN-05** | Wijs de skills correct toe. | Dr. Evil voert het uit (PRC-08). | **ASM-36:** de koppeling van elke agent volgt de agent-skillmatrix van het model. Skills die het model niet bij Atlas legt (zoals `paperclip-create-agent`, `paperclip-board` en `to-spec`; `to-tickets` blijft, want het model gebruikt hem), gaan weg; ontbrekende komen erbij. Dr. Evil legt de lijst aan je voor. |
| **OPEN-09** | Je wilt van maandag tot en met vrijdag elke dag een herinnering, om 09:00. | Dr. Evil stuurt elke werkdag om 09:00 één bericht (PRC-03, GOV-07). Dit verandert B-09: daar stond "pas op het weekmoment". | **ASM-35:** in het bericht staat alles wat op jou wacht (akkoorden, vragenkaarten, de keuze van de volgende wens, escalaties), met links en de oudste bovenaan. Wacht er niets, dan komt er geen bericht. Het bericht komt als comment op het lopende weekmoment-issue. Er is geen termijn: een akkoord vervalt niet. |
| **OPEN-10** | Kan het via decisions? Wat raad je aan? | Mijn advies staat in §3 (PRP-040 en PRP-041). | — |
| **OPEN-14** | Het design systeem wordt in de regel in Claude Design gemaakt. Je deelt een link of projectnaam. De agents moeten toegang hebben. | ACT-01.52, ACT-01.28 en ACT-02.16 verwijzen naar Claude Design. | De toegang is er nog niet (FND-035). Mijn voorstel staat in §4 (PRP-042). |

## 2. Bevindingen (nieuw)

**FND-035: de agents kunnen Claude Design nu niet openen.** **F**
- Paperclip heeft geen koppeling met Claude Design. Bron: zoekopdracht in de koppelingen van Paperclip (`connections_search`, 2026-10-30). Claude Design stond niet tussen de resultaten.
- In mijn eigen runtime staat wel een tool die design-system-projecten van claude.ai/design kan lezen. Die tool is bedoeld voor een skill die de gebruiker zelf start, en hij werkt met jouw claude.ai-login. Of een agent hem in een gewone run mag en kan gebruiken, heb ik niet getest. Of Dr. Evil en Atlas zo'n tool hebben, weet ik niet.
- **Gevolg:** een link of projectnaam is voor de agents nu niet bruikbaar (zie PRP-042). Bovendien is een link geen vaste versie: het ontwerp in Claude Design kan veranderen nadat je het hebt goedgekeurd of overgedragen.

**FND-036: drie triggers kunnen een tweede doorloop starten.** **A**
- De triggers zijn het weekmoment, de flowcheck en jouw verzoek. Valt het weekmoment in een week waarin de flowcheck PRC-02 al startte, dan zouden er zonder regel twee doorlopen naast elkaar lopen. Die zouden allebei de volgende wens van de lijst pakken.
- **Maatregel:** beslissing G-02.8 en ASM-33. Per project loopt er hoogstens één doorloop. Jouw verzoek gaat in dat geval bovenaan de uitbreidingslijst.

**FND-037: de dagelijkse herinnering botst met de huidige skills van Dr. Evil.** **F**
- `weekmoment`: *"Herinner de gebruiker niet tussendoor."*
- `delivery-management`: *"Stoor de gebruiker alleen bij een trigger uit escalation-management. Al het andere bewaar je voor het weekmoment."* en *"Rapporteer op een statusvraag en op het weekmoment, niet tussendoor."*
- `escalation-management`: alleen vijf triggers mogen je tussendoor storen.
- De goedgekeurde rolanalyse van Dr. Evil (V8 op WEB-17) zegt hetzelfde.
- **Gevolg:** je besluit B-13 gaat voor. Deze drie skills moeten worden aangepast via Dr. Evil (PRC-08). Tot dat gebeurt, doet Dr. Evil het niet. Een bruikbaar punt: de flowcheck van `delivery-management` maakt nu al een lijst *Wacht op de gebruiker* (stap 5). Het bericht kan op die lijst voortbouwen.

## 3. OPEN-10: mijn advies over hoe je akkoord geeft (PRP-040 en PRP-041)

**Kort:** houd voor elk akkoord de kaart op het issue, zoals nu. Gebruik geen decisions en geen approval-stage voor je akkoorden (PRP-040). Daarnaast moet de toets van Atlas anders, want anders staat het issue van Socrates op `done` vóór jouw akkoord (PRP-041, punt M-9). **V**

### De drie mechanismen naast elkaar

| | Kaart op het issue (`request_item_verdicts`) | Decision | Approval-stage (`executionPolicy`) |
| --- | --- | --- | --- |
| **Waarvoor bedoeld** (F, skill `paperclip`) | Een besluit dat bij dit issue hoort. | Een besluit dat **andere issues** raakt, of een bundel besluiten. *"Same issue → issue-thread interaction; other issues or bundles → decision."* | Een vaste poort op het issue zelf. |
| **Oordeel per document** | Ja, één item per document. Dat is nodig voor de pakketten GOV-10, GOV-11 en GOV-15, waar je per document goedkeurt of afkeurt (ASM-18). | Nee. Je kiest één optie uit 1 tot 8 opties. | Nee, één ja of nee voor het hele issue. |
| **Gebonden aan wat je zag** | Ja. Krijgt een document een nieuwe revisie, dan vervalt de kaart. Je keurt dus nooit iets anders goed dan wat je gelezen hebt. | Niet gevonden in de skill. | Niet gevonden in de skill. |
| **Wat het in gang zet** | Het wekt de producent. Die verwerkt je oordeel. | Vaste effecten: comment, issue maken, status, toewijzen, issues annuleren, blocker oplossen. | Na de laatste stage gaat het issue op `done`. |
| **Verloopt** | Niet gevonden in de skill; op WEB-19 is geen kaart door tijd vervallen. | Standaard na 7 dagen, hoogstens na 30 (F). | Niet gevonden in de skill. |
| **Ervaring op WEB-19** | Werkt: onder meer kaart `eb913512` (GK-2), `2b7a6d2d` (voorstellen) en `f261b9ac` (model 0.10). GK-1 was een `request_confirmation`; vragen liepen via `ask_user_questions`. | Nog niet gebruikt. | Nog niet gebruikt. |

### PRP-040: je akkoord altijd via een kaart
- **Advies:** elk akkoord (GOV-01 t/m GOV-15) is een kaart `request_item_verdicts` op het issue met de documenten. Er staat één item per document op, ook als het er maar één is. Zo werkt elke kaart hetzelfde.
- **Geen decisions voor je akkoorden:** een akkoord op documenten hoort bij het issue waar die documenten staan, en dan raadt de skill een kaart aan. Een decision geeft je geen oordeel per document, en vervalt standaard na 7 dagen. Decisions blijven wel bruikbaar voor een besluit dat andere issues verplaatst, bijvoorbeeld een escalatie (GOV-08) waarbij taken van een andere agent moeten worden geannuleerd. Dat hoeft nu niet in het model.
- **Geen approval-stage:** je geeft dan één ja of nee voor het hele issue, en daarna gaat het issue op `done`. Bij een pakket kun je dan niet één document afkeuren terwijl de rest goedgekeurd blijft.

### PRP-041: de toets van Atlas via een toets-issue
**Het probleem (M-9).** In 0.10 toetst Atlas de use cases en de paginabrieven met een **review-stage** op het issue van Socrates (ACT-01.23, ACT-02.13). Na de laatste stage zet Paperclip het issue op `done` (F, skill `paperclip`). Dan staat het issue van Socrates op `done` vóórdat jij akkoord hebt gegeven.

**Twee oplossingen:**

| | (a) Toets-issue (mijn advies) | (b) Review-stage, daarna een approval-stage met jou |
| --- | --- | --- |
| Hoe | Socrates maakt een toets-issue dat aan Atlas is toegewezen, net als een vraag (PRC-04). Zijn eigen issue wacht zolang op `blocked`. Heeft Atlas geen opmerkingen meer, dan legt Socrates het pakket aan jou voor met de kaart. | Atlas toetst in een review-stage. Daarna volgt een approval-stage met jou op hetzelfde issue. |
| Voordeel | Je oordeel per document op de kaart blijft (PRP-040). Zo loopt de feitencheck nu al (WEB-20, WEB-22, WEB-23 en WEB-24). | Volgt de skill `paperclip`: de toets en het besluit staan samen op het issue. |
| Nadeel | Dit gaat in tegen een uitdrukkelijke regel in de skill `paperclip` (api-reference, *Cross-Agent Review Gates*): *"Do not model cross-agent review gates as bridge child issues"*. De reden: de toets staat dan los van het issue, en wie mag beslissen wordt minder strak geregeld. Hier weegt dat minder zwaar, want Atlas geeft alleen opmerkingen en geen akkoord. Het besluit blijft bij jou, met de kaart op het issue van Socrates. | Je geeft één ja of nee voor het hele issue. Wil je ook per document oordelen, dan komt er een kaart bij, en heb je twee handelingen voor één akkoord. |

**Als je PRP-040 en PRP-041 goedkeurt:** dan is OPEN-10 beantwoord en vervalt M-9. De skill `architect-use-case-review` (nog te maken) en de regel in de instructies van Socrates volgen deze vorm. Dat loopt via PRC-08. Keur je PRP-041 af en kies je (b), dan pas ik ACT-01.23, ACT-02.13 en de Paperclip-mapping daarop aan.

## 4. Claude Design: voorstel (PRP-042)

**V.** Twee dingen:
1. **Toegang regelen via Dr. Evil (PRC-08).** Dr. Evil zoekt uit hoe de agents een Claude Design-project kunnen lezen: een koppeling in Paperclip, of de tool voor claude.ai/design met een eigen autorisatie. Lukt dat, dan is je link of projectnaam genoeg om ermee te werken.
2. **Altijd een export als vaste versie.** Bij elk design systeem en elk ontwerp dat naar de bouw gaat (ACT-01.52, ACT-01.28, ACT-02.16), zet de ontwerper een export als bijlage op het issue. Dat kan HTML, afbeeldingen of de tokens zijn. Ook als de toegang straks werkt, is die export de versie waarop je akkoord gaat en waarnaar de taken verwijzen. Een link naar Claude Design kan later veranderen; een bijlage niet.

**Nadeel:** het kost jou per ontwerp één extra handeling, zolang jij de ontwerper bent (ASM-28).

## 5. Wat er per use case verandert

**UC1 (PRC-01).** Het aantal akkoorden blijft 4, en het diagram verandert alleen in twee namen.
- ACT-01.1: de opdracht bevat de link naar de repository.
- ACT-01.2 heet nu *Project aanmaken, opdracht registreren en overdragen aan de analist*. ACT-01.51 heet nu *Project aanmaken en rechtstreekse opdracht doorgeven aan de orchestrator*.
- ACT-01.52 en ACT-01.28: Claude Design, met een export (PRP-042).
- ACT-01.23: toets-issue in plaats van review-stage (PRP-041).

**UC2 (PRC-02).** Het aantal akkoorden blijft gelijk.
- Er zijn drie starts: het weekmoment (maandag 04:00), de dagstart (werkdagen 09:00) met ACT-02.51, en jouw verzoek.
- Na de start volgt de nieuwe beslissing G-02.8: loopt er al een doorloop? Ja: geen tweede start. Nee: door naar ACT-02.1.
- ACT-02.51 heeft een nieuwe naam en een drempel: nog 5 open taken in de lopende slice.
- ACT-02.1 kan ook de wens uit jouw verzoek nemen.
- GOV-07 en ACT-02.2: zonder antwoord staat de vraag elke werkdag om 09:00 in het bericht, en op het weekmoment.
- ACT-02.16: Claude Design, met een export (PRP-042).
- ACT-02.13: toets-issue (PRP-041).

**Subproces akkoord-poort (PRC-03).** Alleen de tekst *Geen reactie van ROL-01* verandert: elke werkdag om 09:00 komt er een bericht. Het diagram blijft gelijk.

**Paperclip-mapping.** Nieuw is de rij *Nieuwe klant* (project met repository). De rij voor jouw akkoord, de toets van Atlas, de routines en het ontwerp zijn bijgewerkt. Daarnaast:
- M-4: twee routines, met tijden;
- M-5: opgelost door het bericht;
- M-9: vervalt met PRP-041;
- M-11: Claude Design;
- nieuw M-14: of een agent een project mag aanmaken (OPEN-15).

## 5b. CHG-018: de gaten in het register hersteld

Je gaf op kaart `a16387c4` akkoord om de gaten uit `register-gaten-0-10` te herstellen in 0.11. De processen zelf (stappen, beslissingen, routes, diagrammen) veranderen niet. Het gaat om teksten, velden, labels en de koppeling van skills. In het register staat bij elk gewijzigd element `wijziging_0_11: "CHG-018: ..."`.

| # | Wat klopte niet | Waar | Herstel |
| --- | --- | --- | --- |
| A-1 | ASM-19 (3 akkoorden) stond nog als geldende aanname. | register `aannames`; PRC-01, PRC-03 | ASM-19 staat nu bij de vervallen ID's (B-12, PRP-036: 4 akkoorden). |
| A-2 | ASM-18 had nog het label "0.10 (Concept)" en noemde de architectuurkeuze in GOV-11. | register ASM-18 | Label "0.10 (B-12)"; GOV-11 is het technisch ontwerp volgens profiel, de architectuurkeuze zit in GOV-15. |
| A-3 | Visie en paginalijst ontbraken bij GOV-10; de volgende wens kwam nog "van het backlog". | ASM-17, ASM-14, GOV-07 | Aangevuld; de volgende wens komt van de uitbreidingslijst, in jouw volgorde (PRP-033). |
| A-4 | Wat elke rol krijgt en oplevert, liep achter; bij jou stond nog "drie akkoorden". | ROL-01 t/m ROL-04 | Velden `in` en `uit` aangevuld. Bij jou nu: vier akkoorden in UC1 (GOV-10, GOV-15, GOV-11, GOV-06). |
| A-5 | De teksten volgden de flow niet helemaal. | GOV-02, GOV-11, GOV-12, GOV-09 | GOV-02: eerst de vraag "ontwerp nodig?" (G-02.7). GOV-11: "technisch ontwerp". GOV-12: ook als het bouwcontract een brief niet kan dragen (PRP-032). GOV-09: noot bij de oude tekst. |
| A-6 | GOV-03, 04, 05 en 13 gelden in UC2 alleen bij P3. | die vier GOV's; stap ACT-02.6 | "bij P3" erbij; bij P1 en P2 keur je per document via GOV-11. |
| A-7 | Het risico dat jij ontwerper én goedkeurder bent (FND-033), ontbrak. | risico's van PRC-01 en PRC-02 | Toegevoegd. |
| A-8 | CAP-11 heette nog "API-contracten ontwerpen". | register `capabilities` | Nu "Bouwcontract ontwerpen". |
| A-9 | PRP-031, 032 en 034 stonden nog als "Voorstel". | uitbreidingsgids; PRC-01 en PRC-02 | Nu "Besloten (B-12)". De gids is nu versie 0.5. |
| B-1 | Bij GOV-14 (twee makers) was niet vastgelegd hoe het akkoord loopt. | GOV-14, ACT-03.1; PRC-02, PRC-03 | Eén kaart met een oordeel per document; elke maker herstelt zijn eigen document (ASM-37). |
| B-2 | Twee skills noemden het templatecontract (P1). | `architect-cms-configuratie`, `architect-api-contracts` | Voorstel PRP-043: de CMS-skill levert het contentmodel en de velden, `architect-api-contracts` maakt het contract per slice. |
| B-3 | Bij welke stap de nieuwe poorten van `quality-gates` horen, stond er niet. | `quality-gates` | Per stap vastgelegd (ASM-38): vóór ACT-01.15, vóór ACT-02.4 en in ACT-02.53. |
| B-4 | Niemand controleert de uitbreidingslijst. | ACT-01.29, ACT-02.17 | Mijn aanname (ASM-39, ter bevestiging): dat is bewust, want jij bepaalt inhoud en volgorde en ziet de lijst op het weekmoment. Dan is het geen hiaat. |
| C-1 | Vijf stappen stonden op "bestaat", terwijl de skill moet worden uitgebreid. | ACT-01.3, 02.3, 02.12, 02.6, 01.59 | Nu "uitbreiden". |
| C-2 | De skills per profiel hingen niet aan de UC2-stappen die hetzelfde doen. | ACT-02.6, ACT-02.7 (ACT-02.55: alleen een opmerking) | Gekoppeld. |
| C-3 | De beschrijving van 17 skills liep achter op de koppelingen en op 0.10. | `skills`: `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, de drie UML-skills, `architect-database`, `backlog-management`, `quality-gates`, `architect-vertical-slices`, `architect-api-contracts`, `architect-conventions`, `architect-clarification`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `architect-cms-configuratie`, `architect-componentontwerp` | Bij de meeste alleen administratie: welke stap de skill dekt en wat er in 0.10 aan verandert. Bij `architect-api-contracts` en `architect-conventions` ook de input, de controle en de afhankelijkheden: die gingen uit van het klassendiagram, en dat bestaat alleen bij P3. Nu is het "het technisch ontwerp van het profiel". `architect-vertical-slices` (en stap ACT-01.16) heet nu "technisch ontwerp opdelen" in plaats van "kernontwerp opdelen". |
| C-4 | Twee van jouw ontwerpstappen werden verkeerd geteld. | ACT-01.28, ACT-02.16 | Gelijk aan ACT-01.52: telt als n.v.t. |

**Nieuwe ID's:**
- **ASM-37** (A, ter bevestiging): de regel van ASM-26 geldt ook voor GOV-14.
- **ASM-38** (A, ter bevestiging): de poorten van `quality-gates` per stap.
- **ASM-39** (A, ter bevestiging): de uitbreidingslijst heeft bewust geen controleur.
- **PRP-043** (V): de verdeling van het templatecontract bij P1. Waarom: nu beschrijven twee skills hetzelfde product, en dan weet niemand wie het maakt. Mijn advies: `architect-cms-configuratie` levert één keer het contentmodel en de velden per template en blok (bij het technisch ontwerp, ACT-01.60). `architect-api-contracts` maakt daaruit per slice het contract dat jij goedkeurt (GOV-06), net zoals bij P2 en P3. Zo krijg je per slice altijd hetzelfde soort contract.

**Wat je hier beslist:** op de kaart bevestig je ASM-37, ASM-38 en ASM-39, en keur je PRP-043 goed of af. Het herstel zelf (de tabel hierboven) is één onderdeel op de kaart.

**Skillstatus per stap** (82 stappen; aanwezig / gedeeltelijk / ontbreekt / n.v.t.):

| | Aanwezig | Gedeeltelijk | Ontbreekt | n.v.t. |
| --- | --- | --- | --- | --- |
| 0.10 (goedgekeurd) | 25 | 25 | 23 | 9 |
| 0.11 vóór CHG-018 (alleen CHG-019) | 24 | 26 | 23 | 9 |
| 0.11 met CHG-018 | 21 | 27 | 25 | 9 |

Van aanwezig naar gedeeltelijk: ACT-01.3, ACT-02.3, ACT-02.12. Van gedeeltelijk naar ontbreekt: ACT-02.6 en ACT-02.7, omdat daar nu skills aan hangen die nog gemaakt moeten worden. Van de vijf stappen uit C-1 schuiven er dus drie: ACT-02.6 en ACT-01.59 hadden al een andere skill die moest worden uitgebreid of gemaakt, dus hun stand werd niet slechter door C-1 (ACT-02.6 wel door C-2). Er komen geen nieuwe skills bij: het zijn dezelfde uitbreidingen en skills uit 0.10, die nu ook bij deze stappen staan.

## 6. Wat er niet verandert
- De 4 akkoorden in UC1 (B-12, PRP-036) en de akkoorden per document in UC2.
- B-06 (use cases bij Socrates, getoetst door Atlas), B-07 (database bij P3), TL-V4 en TL-V7.
- Eén loket (PRP-001): Socrates maakt alleen het project aan en begint inhoudelijk pas na toewijzing (ASM-31).
- Beide processen eindigen nog steeds bij *Backlog gereed, overdracht naar implementatie*.
- Er verandert niets aan agents, instructies of skills. Er worden ook geen routines ingericht. Dat gebeurt pas na je akkoord, via Dr. Evil (PRC-08).

## 7. Gevolgen voor skills en instructies (gaan mee in het pakket voor Dr. Evil, PRC-08)

| Skill of instructie | Wat er moet veranderen | Waarom |
| --- | --- | --- |
| `delivery-management` | De flowcheck telt de open taken van de lopende slice: bij 5 of minder start PRC-02, tenzij er al een doorloop loopt. Daarnaast elke werkdag om 09:00 het herinneringsbericht. | B-13, ASM-30, ASM-33, ASM-35, FND-037 |
| `escalation-management` | Het herinneringsbericht is een vaste uitzondering op "alleen de vijf triggers". | FND-037 |
| `weekmoment` | De regel "Herinner de gebruiker niet tussendoor" wordt aangepast. De start van PRC-02 op maandag 04:00 komt erbij, en het herinneringsbericht komt op het weekmoment-issue. | B-13, FND-037, ASM-35 |
| `requirements-orchestration` | Bij een nieuwe klant eerst het project aanmaken met de repository van Carlo. | B-13, ASM-31 |
| Instructies van Socrates | Bij een rechtstreekse opdracht eerst het project aanmaken, daarna melden aan Dr. Evil (PRP-001 blijft). | B-13, ASM-31 |
| Koppeling van de agents | Volgens de agent-skillmatrix (OPEN-05). | B-13, ASM-36 |
| `architect-use-case-review` (werknaam, nog te maken) | De toets loopt via een toets-issue (als je PRP-041 goedkeurt). | PRP-041 |
| Routines van Dr. Evil | *weekmoment* (maandag 04:00) en *dagstart* (werkdagen 09:00), Nederlandse tijd. | B-13, ASM-32, M-4 |

**Skillstatus:** bij ACT-01.2 gaat de status van aanwezig naar gedeeltelijk, omdat `requirements-orchestration` moet worden uitgebreid. Met CHG-018 verschuiven er nog vijf stappen (§5b). De telling in de overzichten pas ik aan na je akkoord.

## 8. Open punten
- **OPEN-15 (nieuw):** mogen Dr. Evil en Socrates in Paperclip een project aanmaken? De API kan het, maar de skill `paperclip` noemt het een taak voor een CEO of manager (`references/workflows.md`), en beide agents hebben de rol *general* (F: Paperclip-API, 2026-10-30). Dat heb ik niet getest, want dan zou er echt een project ontstaan. Dr. Evil stelt het vast bij de inrichting. Mag het niet, dan maak jij het project aan, samen met de repository.
- **OPEN-10:** beantwoord zodra je PRP-040 en PRP-041 goedkeurt.
- **Blijven open** (blokkeren niets): OPEN-11 (proefrun van de skills) en OPEN-13 (wanneer wachten uitbreidingen aantoonbaar op Atlas).

## 9. Wijzigingsregel (komt na je akkoord in `wijzigingen`)

| CHG | Datum | Wat | Bron | Status |
| --- | --- | --- | --- | --- |
| CHG-018 | 2026-10-30 | Herstel van de gaten in register 0.10 (lijst `register-gaten-0-10`, A-1 t/m C-4), in model 0.11. Register: ASM-19 vervallen; ASM-14, 17, 18; ROL-01 t/m ROL-04; GOV-02, 03, 04, 05, 07, 09, 11, 12, 13, 14; risico's PRC-01 en PRC-02; CAP-11; koppelingen ACT-01.3, 01.28, 01.29, 01.59, 02.3, 02.6, 02.7, 02.12, 02.16, 02.17, 02.55; dekking en wijzigingsvelden van de skills. ACT-03.1. Labels B-12 in PRC-01, PRC-02 en uitbreidingsgids 0.5; PRC-03: ASM-19 en ASM-37. Nieuw: ASM-37 t/m ASM-39, PRP-043. Processen ongewijzigd. | kaart `a16387c4` | Concept |
| CHG-019 | 2026-10-30 | Model 0.11: je antwoorden op OPEN-03, 04, 05, 09, 10 en 14 (B-13). PRC-01: ACT-01.1, 01.2, 01.51, 01.52, 01.28, 01.23. PRC-02: drie triggers, G-02.8, ACT-02.51, 02.1, 02.2, 02.13, GOV-07. PRC-03: geen reactie. Paperclip-mapping: M-4, M-5, M-9, M-11, nieuw M-14. PRC-02 ook ACT-02.16. Nieuw: ASM-30 t/m ASM-36, FND-035 t/m FND-037, PRP-040 t/m PRP-042, OPEN-15. Uitbreidingsgids §6. | comments `f06fede2`, `a690e8f3` | Concept |

`wijzigingen` zelf pas ik pas aan na je akkoord op 0.11, net als bij 0.10. CHG-017 (de weergaven van 0.10 en pagina 0.4) staat daar al als Goedgekeurd (kaart `a16387c4`).
