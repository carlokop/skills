> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.12: grill-sessies en de gaten in model 0.11 (begin hier)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `2ddaa565`)**, alle 11 onderdelen van de kaart goedgekeurd: PRC-04 0.12 (vragenloop en grill-sessie), PRC-01 en PRC-02 0.12 (grill-momenten volgens optie A), de weergaven (register, PRC-03, Paperclip-mapping, uitbreidingsgids 0.6, bevindingen), CHG-021 (herstel van de gaten in model 0.11) en de aannames ASM-42 t/m ASM-48. Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register`, `prc-01`, `prc-02`, `prc-03`, `prc-04`, `paperclip-mapping`, `uitbreidingsgids` en `bevindingen`; zie CHG-021 en CHG-022 in `wijzigingen`. Vóór de goedkeuring: **Concept, ter goedkeuring** (2026-10-31), **tweede versie**: aangepast aan je keuze voor optie A (kaart `a5523ebd`, besluit **B-16**). Tot je dit goedkeurt, geldt model 0.11 (Goedgekeurd 2026-10-30, Carlo, kaart `fa26d50e`, B-14). |
| Wijzigingen | **CHG-022** grill-sessies (je antwoorden op de kaart `d57f0546`, besluit **B-15**; omvang volgens optie A, besluit **B-16**). **CHG-021** herstel van de gaten in model 0.11 (lijst `register-gaten-0-11`; je gaf de opdracht tot dit herstel op de kaart `8215b600`). |
| Documenten | `v012-register`, `v012-prc-01`, `v012-prc-02`, `v012-prc-03`, `v012-prc-04`, `v012-paperclip-mapping`, `v012-uitbreidingsgids` (0.6), `v012-bevindingen`; in `wijzigingen` staan CHG-021 en CHG-022 als Concept. Controle: `v012-controle`. |
| Niet veranderd | De overzichten (organisatie, procescatalogus, skillmatrices, capabilities en skills, skill-specificaties, profiel Atlas, RACI) en de pagina. Die werk ik bij na je akkoord, net als bij 0.10 en 0.11. Agents, instructies en skills veranderen niet: dat loopt via Dr. Evil (PRC-08), pas als jij dat zegt. |

**Labels:** **B** Besloten · **F** Feit · **A** Aanname, ter bevestiging op de kaart.

**Wat er anders is dan in de eerste versie van dit concept** (comment `3746c118`): je vroeg of zoveel grilling nodig is (comment `cfa68ac1`) en koos optie A. Van de 15 grill-momenten blijven er 7 over, plus GS14 alleen als de architectuur of het profiel verandert. Een contextverslag komt er alleen als er iets besproken is. ASM-40 en ASM-41 zijn daarmee besloten (B-16). In PRC-04 veranderen alleen de verwijzingen naar de grill-momenten en de regel over het verslag; de werkwijze en het diagram blijven gelijk. CHG-021 en ASM-42 t/m ASM-48 zijn inhoudelijk niet veranderd (bij ASM-42 staat er nu bij dat het verslag er alleen is als er iets besproken is).

## 1. Wat je besliste (B-15 en B-16)

| Vraag | Jouw antwoord | Wat het in het model doet |
| --- | --- | --- |
| V1 Waar komt een grill-sessie? | **Breder** (B-15), daarna smaller gemaakt met **optie A** (B-16) | 7 grill-momenten, plus GS14 alleen als architectuur of profiel verandert (§2). Elke vraag tussen agents is een grill-sessie (PRC-04) |
| V2 Hoe voorkomen we een eindeloze sessie? | Ja: alleen rondes zonder voortgang tellen | In PRC-04 escaleert de vrager na 2 rondes **achter elkaar** zonder voortgang (GOV-08). Dit verandert B-08 voor PRC-04. Afkeuringen (PRC-05) en de toets-lussen houden het maximum van 2 |
| V3 Wie beslist in een sessie tussen agents? | Ja | Elke agent beslist alleen in zijn eigen vakgebied. Een productkeuze, of een wijziging van iets wat jij goedkeurde, gaat naar jou (GOV-12, nu "wijzigingsverzoek of productkeuze") |
| V4 Wanneer is er overeenstemming? | Ja | Geen open punten, en de ander bevestigt het **contextverslag**. Met jou is die bevestiging de laatste vraag van de sessie, geen nieuw akkoord: **UC1 houdt 4 akkoorden** |
| V5 Hoe komt het in de skills? | Ja: één gedeelde skill | Alles staat één keer in `vragen-en-akkoordrondes`. De skills op de grill-momenten krijgen één regel die ernaar verwijst. Met jou blijft `grilling` de vorm |

## 2. De grill-momenten (optie A, B-16)

**Waar een grill-sessie komt (ASM-40, besloten door B-16):** waar context **voor het eerst** van de ene partij naar de andere gaat, en waar nog niets is vastgelegd dat als contract kan dienen. Er is één sessie per moment, en die dekt ook de volgende stappen van dezelfde uitvoerder die op dezelfde context bouwen.

| GS | Begint bij | Wie ↔ met wie | Waarover | Dekt ook | Hoe | Nieuw? |
| --- | --- | --- | --- | --- | --- | --- |
| GS1 | ACT-01.3 analyse | Socrates ↔ jij | plan, bedrijf, domein, visie, projecttype, "nu" en "later", kern | 01.6, 01.26, 01.27, 01.54 | vragenkaart (ACT-01.4/01.5) | bestond; nieuw: contextverslag |
| GS2 | ACT-01.9 use cases | Socrates ↔ jij | use cases en acceptatiecriteria | — | vragenkaart | bestond; nieuw: contextverslag |
| GS3 | ACT-01.23 toets | Atlas ↔ Socrates | zijn de use cases en brieven genoeg om op te ontwerpen? | — | PRC-04 op het toets-issue | **nieuw** |
| GS4 | ACT-01.11 architectuur | Atlas ↔ jij | stack, hosting, budget, groei, profiel | — | vragenkaart (ACT-01.21/01.22) | bestond; nieuw: contextverslag |
| GS9 | ACT-02.3 eisen van de wens | Socrates ↔ jij | eisen, ontwerpbehoefte | 02.15 | op het eigen issue | **nieuw** (in UC2 stond hier geen `grilling`) |
| GS10 | ACT-02.12 use cases | Socrates ↔ jij | use cases van de wens | — | op het eigen issue | bestond; nieuw: contextverslag |
| GS11 | ACT-02.13 toets | Atlas ↔ Socrates | use cases en brieven van de wens | — | PRC-04 op het toets-issue | **nieuw** |
| GS14 | ACT-02.6, **alleen als architectuur of profiel verandert** | Atlas ↔ jij | waarom de architectuur of het profiel verandert | 02.55 | op het eigen issue | **nieuw**; komt zelden voor |
| — | elke vraag tussen agents | vrager ↔ ontvanger | de vraag | — | PRC-04 | **nieuw** (was: losse vraag) |

**Vervallen door B-16** (stonden in de eerste versie; de nummers gebruik ik niet opnieuw). Komt daar toch een vraag op, dan gaat die via PRC-04, en dan is het ook een grill-sessie.

| GS | Waar | Waarom geen vaste sessie |
| --- | --- | --- |
| GS5, GS12 | Socrates ↔ jij over brieven en ontwerp (ACT-01.58, ACT-02.56) | Een verschil tussen brief en ontwerp komt bij je akkoord (GOV-15, GOV-14) toch op tafel. Bij een echt verschil stelt Socrates een vraag. |
| GS6, GS7, GS13 | Atlas ↔ Socrates bij technisch ontwerp en slices (ACT-01.10/01.59/01.60, ACT-01.16, ACT-02.5) | Atlas heeft Socrates net gegrild bij de toets (GS3, GS11), en jij hebt het pakket goedgekeurd. |
| GS8, GS15 | Dr. Evil ↔ Atlas over de taken (ACT-01.20, ACT-02.11) | Atlas toetst de taken al (B-08: PRP-027). Een sessie vooraf doet hetzelfde werk twee keer. |

**Ook geen grill-sessie**, zoals in de eerste versie:
- **Jouw eigen stappen** (opdracht geven, design systeem, ontwerpen, antwoorden, akkoorden): je vraagt zelf wat je wilt weten.
- **Doorgeven en melden** (ACT-01.2, 01.51, 01.7, 01.8, 01.14, 01.15, 02.4, 03.1, 03.3): hier wordt niets gemaakt.
- **Controleren, tellen en poorten** (ACT-01.25, 01.57, 02.14, 02.51, 02.53, 02.54, PRC-05, PRC-06). Vindt Atlas bij de toets van de taken een verschil, dan gaat dat via PRC-04.
- **Lijsten bijhouden** (ACT-01.29, 02.1, 02.17). Is de volgende wens onduidelijk, dan blijft het één vraag aan jou (GOV-07, B-09).

**Wat dit voor jou betekent.** Er komen geen nieuwe akkoorden bij. Een nieuwe vraag krijg je alleen bij **GS9** (de analyse van een wens in UC2), en bij GS14 als de architectuur of het profiel verandert. Bij GS1, GS2, GS4 en GS10 werd je al gevraagd; nieuw is alleen dat het resultaat in een contextverslag komt. **Heeft de uitvoerder na het lezen geen open punten, dan komt er geen sessie, geen vraag en ook geen contextverslag** (ASM-41, besloten door B-16).

## 3. Hoe een grill-sessie loopt

**Tussen agents (PRC-04, nu "Vragenloop en grill-sessie tussen agents"):**
1. De vrager stelt **alle vragen die nu te beantwoorden zijn**, genummerd en elk met een aanbevolen antwoord (ACT-04.2). Feiten zoekt hij zelf op.
2. De ontvanger beantwoordt ze per vraag en beslist alleen in zijn eigen vakgebied (ACT-04.3). Raakt een antwoord een productkeuze of iets wat jij goedkeurde, dan gaat dat naar jou via GOV-12 (ACT-04.4).
3. De vrager beoordeelt per punt of het beslist is, en of de ronde voortgang had (ACT-04.5).
4. Nog open punten? Dan volgt een volgende ronde (ACT-04.6). Alleen een ronde **zonder** voortgang telt (ACT-04.51). Na 2 rondes achter elkaar zonder voortgang gaat het naar jou (GOV-08). Na jouw besluit begint de telling opnieuw (ASM-48).
5. Geen open punten meer? Dan stelt de vrager het **contextverslag** op (ACT-04.55, nieuw). De ontvanger bevestigt het of vult het aan (ACT-04.56, nieuw; G-04.52). Een aanvulling telt als ronde en gaat dus langs de telling (ASM-48), zodat ook dit niet eindeloos kan doorgaan.

**Met jou** loopt het via de bestaande vraagstappen (ACT-01.4, ACT-01.21) of in UC2 rechtstreeks op het eigen issue. Het gaat in de vorm van `grilling`, met dezelfde regels. De laatste vraag is: "Klopt dit contextverslag?". Dat is **geen akkoord**. Met jou telt niemand rondes, want jij bent zelf degene naar wie geëscaleerd zou worden; antwoord je niet, dan staat de vraag in het herinneringsbericht van 09:00 (ASM-48).

**Het contextverslag (ASM-42, ter bevestiging):** alleen als er in een sessie iets besproken is (B-16). Het is een document `contextverslag` op het issue waarop de uitvoerder de stap doet (bij de toets van Atlas het toets-issue; bij Dr. Evil het issue waarop hij de taken maakt), met een sectie per sessie:
1. wat vaststaat, met de bron;
2. wat in de sessie is beslist, en door wie;
3. wat naar jou ging (GOV-12), met de uitkomst;
4. de documenten waarop gebouwd wordt, met revisie.

De volgende stap leest dit verslag als input. Bij een akkoord kan de maker het verslag noemen als achtergrond (PRC-03). Het blijft één akkoord.

**De toets van Atlas (GS3, GS11)** is een grill-sessie op het toets-issue. Dat issue is van Atlas; Socrates wacht op zijn eigen issue. Hoe Socrates bij elke ronde gewekt wordt, is een open punt in de Paperclip-mapping (M-17). Per toetsronde komt er een nieuw toets-issue (ASM-45). Het maximum van 2 toetsrondes (G-01.4, G-02.5) blijft gelden.

## 4. Wat er per document verandert

| Document | CHG-022 (grill-sessies) | CHG-021 (gaten) |
| --- | --- | --- |
| `v012-register` | nieuwe sectie `grillmomenten` (GS1–GS4, GS9–GS11, GS14; de vervallen momenten met reden); veld `grill_sessie` bij de beginstappen; PRC-04 met ACT-04.55, ACT-04.56 en G-04.52; GOV-12 en GOV-08 aangepast; `vragen-en-akkoordrondes` uitgebreid en gekoppeld; `grilling` correct omschreven (FND-038); ASM-40 t/m ASM-43; B-15, B-16 | zie §5; ASM-44 t/m ASM-47 |
| `v012-prc-04` | grill-sessie, telling zonder voortgang, beslisregels, contextverslag; **diagram aangepast** | A-9 |
| `v012-controle` | modelcontrole door een aparte agent (§11) | — |
| `wijzigingen` | CHG-021 en CHG-022 toegevoegd als Concept | — |
| `v012-prc-01`, `v012-prc-02` | grill-momenten in de tabel en een korte sectie (PRC-01: GS1–GS4; PRC-02: GS9–GS11, GS14); **diagrammen ongewijzigd**, want een grill-sessie is een aanroep van PRC-04 of van de bestaande vraagstappen | A-1, A-5, A-11, B-2, B-3, B-4, C-9 |
| `v012-prc-03` | het contextverslag mag als achtergrond bij een akkoord | A-12 |
| `v012-paperclip-mapping` | hoe een sessie en het verslag in Paperclip landen | A-8 |
| `v012-uitbreidingsgids` (0.6) | een nieuwe use case legt per stap vast of er een grill-sessie komt | A-13; vrije ID's |
| `v012-bevindingen` | FND-038, FND-039 | A-7 (kolom Stand) |

## 5. De gaten uit model 0.11 (CHG-021)

Je gaf op de kaart `8215b600` de opdracht om ze te herstellen. Zo heb ik ze verwerkt:
- **Groep A (tekst die achterliep), allemaal hersteld:**

  | Gat | Wat | Waar |
  | --- | --- | --- |
  | A-1 | herinnering om 09:00 | ACT-02.1 |
  | A-2 | maandag 04:00 | PRC-07 |
  | A-3 | aanvulling | ASM-24 |
  | A-4 | flowcheck, Claude Design | CAP-20, CAP-25 |
  | A-5 | PRP-043 | ACT-01.17, ACT-02.8, GOV-06 |
  | A-6 | brieven en toets-issue | `architect-use-case-review` |
  | A-7 | kolom Stand | bevindingen |
  | A-8 | M-1 | Paperclip-mapping |
  | A-9 | toets-issue in plaats van review-stage | PRC-04 |
  | A-10 | toegang | label van Claude Design |
  | A-11 | "(0.10)" weg | PRC-02 |
  | A-12 | label B-14 | ACT-03.1 |
  | A-13 | vrije CHG-nummers | gids |
  | A-14 | GOV-15 in plaats van GOV-11 | `architect-architecture-choice` |
- **Groep B (keuzes):** ik heb mijn voorstellen verwerkt als aannames, zodat je ze op de kaart apart kunt beoordelen:
  - **ASM-44** (B-1): `to-tickets` is "beschikbaar, niet vereist", want geen stap gebruikt hem. ASM-36 zei ten onrechte dat het model hem gebruikt. De volledige skilllijst per agent legt Dr. Evil voor in het pakket (PRC-08).
  - **ASM-45** (B-2): per toetsronde een nieuw toets-issue; de grill-rondes van één toetsronde op hetzelfde issue.
  - **ASM-46** (B-3): bij P1 maakt Atlas het contentmodel bij het technisch ontwerp (ACT-01.60) en werkt het per slice bij als een uitbreiding dat vraagt (ACT-02.7).
  - **ASM-47** (B-4): bij G-02.8 beslist Dr. Evil.
- **Groep C (administratie), allemaal hersteld:**
  - **C-1:** de dekking van `delivery-management`, `escalation-management` en `weekmoment` gaat van ACT-02.2 naar ACT-02.1 en GOV-07.
  - **C-2:** `paperclip` dekt nu ook het aanmaken van het project (CAP-01, ACT-01.51; of het mag: OPEN-15).
  - **C-3 en C-8:** de dekking van `architect-modeling` is per capability gesplitst, met ACT-01.11 erbij.
  - **C-4:** de UML-skills en `architect-database` staan in UC2 op "uitbreiden", zoals in UC1.
  - **C-5:** de afhankelijkheden van `architect-api-contracts` staan per profiel.
  - **C-6:** de labels B-12 staan nu in de bron van GOV-01, 06, 09, 10 en 11.
  - **C-7:** `architect-cms-configuratie` hangt ook af van `architect-architecture-choice`.
  - **C-9:** de labels B-13 en ASM-35 staan bij GOV-07.

## 6. Nieuwe bevindingen

- **FND-038:** het register beschreef `grilling` verkeerd ("één vraag tegelijk"). Opgelost in 0.12.
- **FND-039:** tussen agents ging bij een overdracht context verloren. "Tot volledige overeenstemming" botste met het maximum van 2 rondes uit B-08. Besloten in B-15.

## 7. Skillstatus per stap

| | aanwezig | gedeeltelijk | ontbreekt | n.v.t. | stappen |
| --- | --- | --- | --- | --- | --- |
| 0.11 | 21 | 27 | 25 | 9 | 82 |
| 0.12, eerste versie (15 momenten) | 16 | 21 | 38 | 9 | 84 |
| **0.12, optie A** | **17** | **23** | **35** | **9** | **84** |

**Waarom het verschuift ten opzichte van 0.11 (ASM-43, ter bevestiging):**
- Elke stap met een grill-sessie heeft `vragen-en-akkoordrondes` nodig, en die skill bestaat nog niet. Daardoor gaan 8 stappen naar *ontbreekt*:
  - van *aanwezig*: ACT-01.4, 01.21, 04.2 en 04.6;
  - van *gedeeltelijk*: ACT-01.3, 01.9, 02.3 en 02.12.
- Er komen 2 nieuwe stappen bij (ACT-04.55 en ACT-04.56), allebei *ontbreekt*.
- De andere beginstappen (ACT-01.11, 01.23, 02.6, 02.13) stonden in 0.11 al op *ontbreekt*, door skills die nog gemaakt moeten worden.
- Tegenover de eerste versie gaan ACT-01.10 en ACT-01.20 terug naar *gedeeltelijk* en ACT-02.11 terug naar *aanwezig*.
- Wat er gemaakt moet worden: één gedeelde skill, plus één regel in vier skills (§9). Hoeveel werk dat is, heb ik niet geschat. Zolang die skill er niet is, werkt de grill-sessie tussen agents niet zoals besloten.

## 8. Wat niet verandert
- **UC1 houdt 4 akkoorden** (GOV-10, GOV-15, GOV-11, GOV-06). Een bevestigd contextverslag is geen akkoord.
- **Afkeuringen (PRC-05) en de toets-lussen** (G-01.4, G-01.5, G-02.5, G-02.6) houden het maximum van 2. Alleen de telling binnen een vragenloop of grill-sessie verandert.
- B-06, B-07, TL-V4 en TL-V7 blijven zoals ze zijn. De diagrammen van PRC-01, PRC-02, PRC-03, PRC-05 en PRC-06 blijven ongewijzigd.
- Het model eindigt nog steeds bij "Backlog gereed, overdracht naar implementatie".

## 9. Gevolgen voor het pakket voor Dr. Evil (PRC-08), later
- **`vragen-en-akkoordrondes`** (te maken, B-08, uitgebreid in B-15 en B-16). Daarin komen:
  - de grill-sessie tussen agents;
  - de beslisregels (V3);
  - het contextverslag;
  - de telling zonder voortgang;
  - de telling van afkeuringen;
  - de routering.
- **Eén regel in elke skill op een grill-moment:** `requirements-analysis` (GS1, GS9), `uml-use-cases` (GS2, GS10), `architect-use-case-review` (GS3, GS11) en `architect-architecture-choice` (GS4, GS14). In de eerste versie waren dat er tien.
- **`grilling` zelf verandert niet.**

Pas als jij dat zegt, gaat dit pakket naar Dr. Evil.

## 10. Wat je op de kaart bevestigt

ASM-40 en ASM-41 zijn met je keuze voor optie A besloten (B-16). Ze staan niet meer apart op de kaart. Daarnaast vraag ik je om zeven aannames (ASM-42 t/m ASM-48). Ik heb ze zelf ingevuld, en je antwoorden zeggen er niets over:

| Aanname | Kort |
| --- | --- |
| ASM-42 | het contextverslag: plek en inhoud (alleen als er iets besproken is) |
| ASM-43 | telregel: een stap met een grill-sessie telt als *ontbreekt* zolang de gedeelde skill er niet is |
| ASM-44 t/m ASM-47 | de vier keuzes uit groep B (§5) |
| ASM-48 | een aanvulling telt als ronde (de vrager bepaalt of hij haar overneemt); de telling begint opnieuw na een besluit; met jou telt niemand rondes; het verslag is bij een akkoord alleen achtergrond |

## 11. Modelcontrole

Een aparte agent heeft het concept gecontroleerd ([controle](/WEB/issues/WEB-19#document-v012-controle)).
- **Eerste ronde: "niet indienen".** Er waren 3 blokkerende punten:
  1. Een aanvulling op het contextverslag kon eindeloos rondgaan zonder telling. Opgelost met G-04.52 → ACT-04.51 (ASM-48).
  2. Gat A-1 zat nog in één veld van het register.
  3. `grilling` stond nog op één plek als "één vraag tegelijk".
- Daarnaast waren er 19 andere punten. Wat ik ermee deed, staat in het verslag onder *Herstel en hercontrole*.
- **Hercontrole: "kan worden ingediend".** De controleur vond nog een paar kleine restpunten (K12-23 t/m K12-28 en restanten van K12-05, 07, 10 en 14). Die heb ik daarna zelf hersteld, zonder nieuwe controle door een aparte agent. Niet hersteld zijn alleen historische regels in PRC-04 (ASM-16 en "Nieuw in 0.8").
- **Controleronde na B-16 (optie A): "kan worden ingediend".** Een aparte agent heeft de aanpassing aan optie A gecontroleerd. Er waren geen blokkerende punten, wel 2 waarschuwingen en 5 opmerkingen (K12-29 t/m K12-35). De twee waarschuwingen heb ik hersteld: deze ronde stond nog niet in het verslag, en ASM-42 in het register miste "alleen als er iets besproken is". Van de opmerkingen heb ik er drie hersteld (K12-31 t/m K12-33). Daarna heeft geen aparte agent opnieuw gecontroleerd. Wel heb ik het register opnieuw gemaakt en nagelopen dat het geldig is en de telling klopt.
