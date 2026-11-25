# Verantwoordelijkheden: RACI, beslissingen, goedkeuringen en onafhankelijkheid

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); in 1.0.22 administratief gecorrigeerd na de feitencontrole van Atlas (CHG-062: GOV-06, 11, 15, 17); ACT-04.4 met de eigenaar van het document als uitvoerder (CHG-070, goedgekeurd in B-51); model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51) |
| Afgeleid uit | `register.yaml` (`raci`, `beslissingen`, `goedkeuringen`, `goedkeuringen_uitwerking`, `rollen`, `agents`) |
| Datum | 2026-11-25 |

**Legenda.** R = voert uit · A = de ene verantwoordelijke rol · C = geraadpleegd · I = geïnformeerd · ACT = stap · G = beslispunt · GOV = akkoordmoment van Carlo · GS = grill-moment · ROL-01 Carlo (project owner) · ROL-02 regie · ROL-03 business analist · ROL-04 systeemarchitect · ROL-09 controleur · AGT-02 Socrates · AGT-03 Atlas · AGT-08 hoofdsessie · AGT-09 Socrates-licht · AGT-10 Atlas-licht · FND = bevinding · PRP = voorstel · ASM = aanname.

**Menselijke verantwoordelijkheid (ASM-103, bevestigd in B-46, vraag 1).** Carlo is de enige mens. Hij is eindverantwoordelijk voor scope, eisen, ontwerp, sliceplan, contract en backlog, en oefent dat uit via de GOV-momenten. Is een AI-rol A, dan levert die rol het resultaat en staat ervoor in, binnen de besluiten van Carlo. Waar Carlo een resultaat niet ziet, staat dat in §4. Met "ja" op vraag 1 accepteert Carlo ook de verdeling van R en A per stap in §1; die verdeling is een invulling van Socrates. Dat een skill "gekoppeld" is als de agentdefinitie hem noemt (ASM-36), is een modelleerregel en geen vraag: de definitie is de enige bron, en de werking blijft open (OPEN-11).

**Generieke lanes.** Ze lossen K-11 uit ronde 2 op.
- **maker:** AGT-02 (A: ROL-03), AGT-03 (A: ROL-04), of AGT-08 bij GOV-18 (A: ROL-02);
- **controleur van de poort:** AGT-09 voor het werk van Socrates en AGT-10 voor dat van Atlas (A: ROL-09); bij GOV-18 AGT-03 (A: ROL-04);
- **vrager en ontvanger:** de rol die vraagt of antwoordt. Carlo kan ontvanger zijn (ASM-94). AGT-09 en AGT-10 zijn alleen ontvanger, voor wat letterlijk uit een goedgekeurd document volgt (ASM-87). Sinds B-46 (vraag 11, CHG-052 doorgevoerd) is ook de hoofdsessie (ROL-02) vrager bij een vraag aan Atlas over de werkpakketten tijdens ACT-02.11; zij schrijft dan het contextverslag en Atlas bevestigt het.

## 1. RACI per activiteit

Dit is de enige plek met de echte R en A per stap. De velden `uitvoerder` en `rol` in `activiteiten` van het register (ronde 2) zijn generiek ("maker", "vrager") en blijven zo; `raci` vult ze aan.

"in PRC-03" = de controle vóór het akkoord (ACT-03.6). "—" = niemand.

### PRC-01 nieuwe klant tot ontwerp en sliceplan

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-01.1 opdracht geven | ROL-01 | ROL-01 | ROL-01 | — | — | AGT-08 |
| ACT-01.52 design systeem | ROL-01 | ROL-01 | ROL-01 | — (eigen ontwerp, ASM-28) | — | AGT-08 |
| ACT-01.2 opdracht vastleggen en doorgeven | AGT-08 | ROL-02 | — | — | — | ROL-03 |
| ACT-01.3 onderzoeken | AGT-02 | ROL-03 | — | AGT-09 in PRC-03 | ROL-01 (GS1) | AGT-08 |
| ACT-01.6 analysedocument | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03 | — | AGT-08 |
| ACT-01.26 visie en projecttype | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03, nog zonder criteria (FND-090) | — | AGT-08 |
| ACT-01.9 use cases | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03; toets AGT-03 | ROL-01 (GS2) | AGT-08 |
| ACT-01.27 paginalijst en brieven | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03, nog zonder criteria (FND-090); toets AGT-03 | — | AGT-08 |
| ACT-01.23 toetsen | AGT-03 | ROL-04 | ROL-04 (G-01.4); ROL-03 (welk document) | — (de toets is een tweede lezer) | ROL-03 (GS3) | AGT-08 |
| ACT-01.54 kern markeren | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03 | — | AGT-08 |
| ACT-01.8 architectuur en ontwerp laten starten | AGT-08 | ROL-02 | — | — | — | ROL-01, ROL-04 |
| ACT-01.11 architectuurkeuze | AGT-03 | ROL-04 | ROL-01 (GOV-15) | AGT-10 in PRC-03, nog zonder criteria (FND-091) | ROL-01 (GS4) | AGT-08 |
| ACT-01.28 ontwerpen | ROL-01 | ROL-01 | ROL-01 | — (ASM-28) | ROL-03 | AGT-08 |
| ACT-01.58 brieven afstemmen | AGT-02 | ROL-03 | ROL-01 (GOV-15) | AGT-09 in PRC-03 (FND-090) | ROL-01 | AGT-08 |
| ACT-01.60 P1 contentmodel | AGT-03 | ROL-04 | ROL-01 (GOV-11) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-01.59 P2 componentontwerp | AGT-03 | ROL-04 | ROL-01 (GOV-11) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-01.10 P3 domeinmodel (intern) | AGT-03 | ROL-04 | — (keuzes gaan mee in GOV-11) | AGT-10 in PRC-03 bij GOV-11 (FND-044) | — | AGT-08 |
| ACT-01.12 P3 sequenties (intern) | AGT-03 | ROL-04 | — | AGT-10 in PRC-03 bij GOV-11 | — | AGT-08 |
| ACT-01.13 P3 klassendiagram | AGT-03 | ROL-04 | ROL-01 (GOV-11) | AGT-10 in PRC-03 | — | AGT-08 |
| ACT-01.24 P3 database | AGT-03 | ROL-04 | ROL-01 (GOV-11) | AGT-10 in PRC-03 | — | AGT-08 |
| ACT-01.16 voorlopig sliceplan | AGT-03 | ROL-04 | ROL-01 (GOV-17) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-01.29 uitbreidingslijst | AGT-08 | ROL-02 | ROL-01 (volgorde, ASM-96) | — (bewust, ASM-39) | — | ROL-01 |

### PRC-02 backlog vullen per slice

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-02.1 volgende slice of wens bepalen | AGT-08 | ROL-02 | ROL-02 (G-02.1) | — | — | ROL-01 |
| ACT-02.2 volgende slice of wens kiezen | ROL-01 | ROL-01 | ROL-01 (GOV-07) | — | — | AGT-08 |
| ACT-02.3 eisen van de wens | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03 | ROL-01 (GS9) | AGT-08 |
| ACT-02.12 use cases van de wens | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03; toets AGT-03 | ROL-01 (GS10) | AGT-08 |
| ACT-02.15 ontwerpbehoefte en brieven | AGT-02 | ROL-03 | ROL-01 (GOV-10) | AGT-09 in PRC-03 (FND-090); toets AGT-03 | — | AGT-08 |
| ACT-02.13 wens toetsen | AGT-03 | ROL-04 | ROL-04 (G-02.5); ROL-03 (welk document) | — (de toets is een tweede lezer) | ROL-03 (GS11) | AGT-08 |
| ACT-02.16 pagina's ontwerpen | ROL-01 | ROL-01 | ROL-01 | — (ASM-28) | ROL-03 | AGT-08 |
| ACT-02.56 brieven afstemmen | AGT-02 | ROL-03 | ROL-01 (GOV-15) | AGT-09 in PRC-03 (FND-090) | ROL-01 | AGT-08 |
| ACT-02.5 wens in slices | AGT-03 | ROL-04 | ROL-01 (GOV-17) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-02.6 globaal ontwerp bijwerken | AGT-03 | ROL-04 | ROL-01 (GOV-15, GOV-11 of GOV-17) | AGT-10 in PRC-03 | ROL-01 (GS14, alleen bij een andere architectuur of profiel) | AGT-08 |
| ACT-02.55 ontwerpbesluit (ADR) | AGT-03 | ROL-04 | ROL-01 (pakket in PRC-03) | AGT-10 in PRC-03 | — | AGT-08 |
| ACT-02.7 ontwerp per slice | AGT-03 | ROL-04 | ROL-01 (GOV-06, bij een voorwaarde) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-02.8 bouwcontract | AGT-03 | ROL-04 | ROL-01 (GOV-06) | AGT-10 in PRC-03 (herleidbaarheid); geldigheid en revisie bij Atlas (ASM-57) | — | AGT-08 |
| ACT-02.58 leesbare versie opnieuw | AGT-03 | ROL-04 | ROL-04 (G-02.14) | AGT-10 in PRC-03 bij GOV-06 | — | AGT-08 |
| ACT-02.57 conventiebestand, kwaliteitslat en regelbestanden | AGT-03 | ROL-04 | — (geen akkoord: PRC-02 en GOV-06, zie §4) | AGT-10, lichte controle na PRP-074 (nu "geen aparte controleur") | — | AGT-08 |
| ACT-02.9 implementatieplan | AGT-03 | ROL-04 | ROL-01 (GOV-06, bij een voorwaarde) | AGT-10 in PRC-03 (FND-091) | — | AGT-08 |
| ACT-02.53 vaste controles | AGT-08 | ROL-02 | ROL-02 (G-02.11) | — (mechanisch, na GOV-06) | — | ROL-04 (bij een fout) |
| ACT-02.11 backlog-items maken | AGT-08 | ROL-02 | ROL-01 (GOV-18) | AGT-03 (toets, ASM-83) | ROL-04 | ROL-01 |
| ACT-02.54 backlog gereed | AGT-08 | ROL-02 | ROL-02 | AGT-03 (toets, ASM-83) | — | — |
| ACT-02.17 uitbreidingslijst en stand | AGT-08 | ROL-02 | — | — (ASM-39) | — | ROL-01 |

### PRC-03 akkoord-poort van de project owner

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-03.1 indienen | maker | rol van de maker | — | controleur van de poort | — | AGT-08 |
| ACT-03.5 controle laten uitvoeren | AGT-08 | ROL-02 | — | — | — | maker |
| ACT-03.6 controle uitvoeren | controleur | ROL-09 (bij GOV-18 ROL-04) | ROL-09 of ROL-04 (G-03.2) | n.v.t. (dit is de controle) | — | AGT-08 |
| ACT-03.7 bevindingen verwerken | maker | rol van de maker | — | controleur (volgende ronde) | — | AGT-08 |
| ACT-03.8 vragen stellen | AGT-08 | ROL-02 | — | — | — | ROL-01 |
| ACT-03.2 beoordelen en besluiten | ROL-01 | ROL-01 | ROL-01 (het akkoord) | — | — | AGT-08 |
| ACT-03.4 vraag van Carlo beantwoorden | maker | rol van de maker | — | — | ROL-01 | AGT-08 |
| ACT-03.9 antwoorden teruggeven | AGT-08 | ROL-02 | — | — | — | maker |
| ACT-03.3 antwoorden verwerken | maker | rol van de maker | maker (G-03.5) | controleur bij een afwijkend antwoord | — | AGT-08 |
| ACT-03.12 nacontrole laten uitvoeren | AGT-08 | ROL-02 | ROL-02 (G-03.6) | — | — | maker |
| ACT-03.14 nacontrole | controleur | ROL-09 (bij GOV-18 ROL-04) | ROL-09 of ROL-04 (G-03.7) | n.v.t. (dit is de nacontrole) | — | AGT-08 |
| ACT-03.13 goedkeuring vastleggen | maker | rol van de maker | ROL-01 (het akkoord) | — (na de nacontrole) | — | AGT-08, ROL-01 |
| ACT-03.10 vastgelopen controle voorleggen | AGT-08 | ROL-02 | ROL-02 (G-03.3) | — | maker, controleur | ROL-01 |
| ACT-03.11 besluit doorgeven | AGT-08 | ROL-02 | ROL-01 (GOV-08) | — | — | maker, controleur |

### PRC-04 vragenloop en grill-sessie

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-04.1 ontvanger bepalen | vrager | rol van de vrager | vrager | — | — | AGT-08 |
| ACT-04.2 vragen stellen | vrager | rol van de vrager | — | — | ontvanger | AGT-08 |
| ACT-04.57 vragen doorgeven | AGT-08 | ROL-02 | — | — | — | ontvanger |
| ACT-04.3 vragen beantwoorden | ontvanger | rol van de ontvanger | ontvanger, alleen in het eigen vakgebied | — | — | AGT-08 |
| ACT-04.4 wijzigingsverzoek (B-50: een productkeuze gaat direct naar Carlo, ASM-123) | de eigenaar van het goedgekeurde document (ontvanger of vrager); vrager als Carlo ontvanger is | rol van de uitvoerder | ROL-01 (GOV-12) | controleur in PRC-03 | — | AGT-08 |
| ACT-04.58 antwoorden teruggeven | AGT-08 | ROL-02 | — | — | — | vrager |
| ACT-04.5 antwoorden beoordelen | vrager | rol van de vrager | vrager (G-04.2) | — | — | — |
| ACT-04.51 rondes tellen | vrager | rol van de vrager | vrager (G-04.51) | — | — | AGT-08 |
| ACT-04.6 volgende ronde | vrager | rol van de vrager | — | — | ontvanger | AGT-08 |
| ACT-04.52 vraag escaleren | vrager | rol van de vrager | vrager | — | — | AGT-08 |
| ACT-04.53 escalatie voorleggen | AGT-08 | ROL-02 | — | — | vrager, ontvanger | ROL-01 |
| ACT-04.54 besluit doorgeven | AGT-08 | ROL-02 | ROL-01 (GOV-08) | — | — | vrager |
| ACT-04.55 contextverslag opstellen | vrager | rol van de vrager | — | ontvanger (ACT-04.56, ASM-58) | — | AGT-08 |
| ACT-04.56 contextverslag bevestigen | ontvanger | rol van de ontvanger | ontvanger (G-04.52) | n.v.t. (dit is de controle) | — | AGT-08 |

### PRC-05 afkeuring en herziening

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-05.1 afkeuringen tellen | maker | rol van de maker | maker (G-05.1) | — | — | AGT-08 |
| ACT-05.2 herzien | maker | rol van de maker | — | controleur in PRC-03 | — | AGT-08 |
| ACT-05.3 escalatie melden | maker | rol van de maker | — | — | — | AGT-08 |
| ACT-05.4 escalatie voorleggen | AGT-08 | ROL-02 | — | — | maker | ROL-01 |
| ACT-05.5 besluit nemen | ROL-01 | ROL-01 | ROL-01 (GOV-08) | — | — | AGT-08 |
| ACT-05.6 besluit uitvoeren | AGT-08 | ROL-02 | ROL-01 (G-05.2) | — | — | maker |

### PRC-06 blokkade afhandelen

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-06.1 blokkade melden | agent | rol van de agent | — | — | — | AGT-08 |
| ACT-06.4 oplossen of eigenaar toewijzen | AGT-08 | ROL-02 | ROL-02 (G-06.3, G-06.2) | — | eigenaar van de oplossing | agent |
| ACT-06.6 agent hervatten | AGT-08 | ROL-02 | — | — | — | agent |
| ACT-06.5 blokkade escaleren | AGT-08 | ROL-02 | — | — | agent | ROL-01 |
| ACT-06.7 besluit uitvoeren | AGT-08 | ROL-02 | ROL-01 (GOV-08) | — | — | agent |

### PRC-07 ritme: weekmoment en dagstart

| ACT | R | A | Beslisser | Controleur | C | I |
| --- | --- | --- | --- | --- | --- | --- |
| ACT-07.1 weekmoment | AGT-08 | ROL-02 | ROL-01 (GOV-07, als het plan de volgorde niet bepaalt) | — | — | ROL-01 |
| ACT-07.2 cron-taak controleren | AGT-08 | ROL-02 | — | — | — | ROL-01 (als hij opnieuw is aangezet) |
| ACT-07.3 gemist weekmoment melden | AGT-08 | ROL-02 | ROL-01 (G-07.3) | — | — | ROL-01 |
| ACT-07.4 dagstart | AGT-08 | ROL-02 | ROL-02 (G-07.2) | — | — | ROL-01 |

Elke stap heeft één R en één A.

## 2. Beslissingsbevoegdheden

De beslisser per beslispunt staat in `register.yaml` (`beslissingen`, goedgekeurd in ronde 2).

- **Carlo (ROL-01):** alle negen GOV-momenten, G-01.6 (profiel, binnen GOV-15), G-02.7 (ontwerp nodig, met het ontwerpniveau uit GOV-10), G-03.4 (uitkomst van de beoordeling), G-05.2 (doorgaan of stoppen) en G-07.3 (gemist weekmoment alsnog).
- **Regie (ROL-02):** G-02.1, G-02.8, G-02.9, G-02.11, G-03.3, G-03.6, G-06.2, G-06.3, G-07.1 en G-07.2. Dat zijn alleen beslissingen over volgorde, routering en tellen, nooit over inhoud (B-30: "beslist niets namens ROL-01").
- **Business analist (ROL-03):** G-02.2, en welk document verandert bij G-01.4 en G-02.5.
- **Systeemarchitect (ROL-04):** G-02.3, G-02.10, G-02.12, G-02.13, G-02.14, opmerkingen ja of nee bij G-01.4 en G-02.5, en bij GOV-18 G-03.2 en G-03.7. Op technische punten heeft hij het laatste woord (ASM-83).
- **Controleur (ROL-09):** G-03.2 en G-03.7, alleen de uitslag; hij wijzigt niets en beslist niets over de inhoud.
- **Maker, vrager en ontvanger:** G-03.5, G-05.1, G-04.1, G-04.2, G-04.51, G-04.52 en G-04.53.
- **Parallelle splitsingen** (G-01.7, G-01.8, G-01.9): geen beslisser.

## 3. Goedkeuringsmomenten

Elke poort loopt via PRC-03. De volledige tekst staat in `register.yaml` (`goedkeuringen_uitwerking`).

| GOV | Bevoegd | Informatie | Criteria | Bij goedkeuring | Bij afwijzing | Escalatie |
| --- | --- | --- | --- | --- | --- | --- |
| GOV-10 analysepakket | ROL-01 | vragen over eisen (ook juridisch), visie, use cases, bedrijfsregels, paginalijst en brieven, kern; uitslag controle en toets | alle vragen beantwoord; volledig gecontroleerd; toets beslist | Socrates zet de status (na nacontrole bij een afwijkend antwoord); verder naar ACT-01.8 of G-02.7 | per document naar PRC-05; een vraag of ander antwoord is geen afwijzing | derde afkeuring, of 2 rondes zonder voortgang: GOV-08 |
| GOV-15 richting | ROL-01 | de ADR's met het profiel-ADR, en de afgestemde brieven, per document | elke vraag van elk document beantwoord | elke maker zet zijn status; profiel kiest het ontwerp (G-01.6); in PRC-02 naar G-02.12 | per document naar PRC-05 | als GOV-10 |
| GOV-11 technisch ontwerp | ROL-01 | ontwerp volgens profiel; bij P3 de keuzes uit alle vier de modellen | alle vragen beantwoord; volledig gecontroleerd | Atlas zet de status; in PRC-01 naar ACT-01.16, in PRC-02 naar G-02.12 | PRC-05; bij P3 alleen dat document | als GOV-10 |
| GOV-17 voorlopig sliceplan | ROL-01 | inhoud van slice 1, volgorde, afhankelijkheden (nu nog zonder vragen uit de skill, FND-097) | alle vragen beantwoord; elk AC in één slice | einde PRC-01; slice 1 start (ASM-95); in PRC-02 naar G-02.12 | PRC-05: terug naar ACT-01.16 of ACT-02.5 | als GOV-10 |
| GOV-06 bouwcontract | ROL-01 | contract; ontwerp per slice en plan bij een voorwaarde | alle vragen beantwoord; waar een OpenAPI-bestand is (P2, P3, of P1 met een echte API) noemt de leesbare versie de revisie | vaste controles (ACT-02.53) | PRC-05 voor wat meeging | als GOV-10; revisieverschil tweede keer: GOV-08 |
| GOV-18 backlog | ROL-01 | taak- en epicbestanden met de toets van Atlas | geen opmerkingen van Atlas; backlog gereed | stand bijwerken, doorloop af (ACT-02.17) | PRC-05 met de hoofdsessie als maker | 2 toetsrondes of niet-technisch conflict: GOV-08 |
| GOV-07 volgende slice of wens | ROL-01 | kandidaten en de optie "niets" | een keuze | verder naar G-02.9; "niets": einde | n.v.t.; geen antwoord: wachten, dagstart meldt | geen |
| GOV-08 escalatiebesluit | ROL-01 | open punten, beide standpunten, advies | een besluit | doorgeven, telling op 0 (ASM-11) | n.v.t. | geen |
| GOV-12 wijzigingsverzoek of productkeuze | ROL-01 | verzoek met gevolgen (bij Atlas breaking changes, ADR) | vooraf gecontroleerd; alle vragen beantwoord | eigenaar voert door; vrager krijgt antwoord | document blijft ongewijzigd; geen PRC-05 | als GOV-10 |

## 4. Onafhankelijkheid

Regel: de controleur is nooit de uitvoerder (`bpmn-rollen-en-skillmodel` stap 6; ASM-88).

| Wat | Uitvoerder | Controleur | Stand |
| --- | --- | --- | --- |
| Analysepakket en brieven | AGT-02 | AGT-09, toets AGT-03 | onafhankelijk; de criteria voor visie, paginalijst en brieven ontbreken (FND-090, PRP-073) |
| Richting, technisch ontwerp, sliceplan, ontwerp per slice, plan, contract | AGT-03 | AGT-10 | onafhankelijk; de criteria ontbreken buiten r.22 (FND-091, PRP-074, goedgekeurd in B-46). Restrisico, bewust gekozen (B-46, vraag 13): bij de architectuurkeuze en het bouwcontract beoordeelt de controleur niet of de keuze de beste is (FND-103) |
| Conventiebestand (na CHG-056 ook kwaliteitslat en regelbestanden) | AGT-03 | geen (`architect-conventions` r.36); na PRP-074 (punt e) AGT-10, licht | pas onafhankelijk na PRP-074. Geen eigen akkoord: in het goedgekeurde PRC-02 gaat ACT-02.57 naar ACT-02.9 zonder GOV, en GOV-06 dekt volgens zijn opmerking in het register het contract, met ontwerp per slice en plan bij een voorwaarde, niet het conventiebestand |
| Domeinmodel en sequenties (intern) | AGT-03 | AGT-10, mee bij GOV-11 | onafhankelijk; diagrammen in de keten maakt Atlas zelf (ASM-88) |
| Backlog-items | AGT-08 | AGT-03 (toets, ASM-83) | onafhankelijk |
| Vaste controles, uitbreidingslijst, stand, ritme | AGT-08 | geen | ASM-110 (bevestigd in B-46, vraag 2): de vaste controles zijn mechanisch, Carlo bepaalt de volgorde van de uitbreidingslijst (ASM-96), en hij ziet de stand en het ritme via de dagstart. 0.18 ASM-39 gold alleen voor de uitbreidingslijst |
| Contextverslag | vrager | ontvanger (ASM-58) | onafhankelijk |
| Akkoord | ROL-01 | — | Carlo beslist als laatste |

**Bevindingen die tot herstel, escalatie of menselijke beoordeling leiden:**
- bevindingen van de controleur: herstel door de maker (ACT-03.7);
- 2 rondes zonder voortgang: escalatie (GOV-08);
- elke keuze of aanname die de maker zelf invulde: een vraag aan Carlo (ACT-03.8).

## 5. Hiaten per activiteit

Elke stap is nagelopen op de acht punten van `bpmn-rollen-en-skillmodel` stap 7. "—" = nagelopen, niets gevonden.

| Punt | Stappen met een hiaat | Bevinding |
| --- | --- | --- |
| Geen geschikte uitvoerder | — | — |
| Agent zonder afgebakende verantwoordelijkheid | — (elke agent heeft een rol: ROL-02, ROL-03, ROL-04, ROL-09) | — |
| Ontbrekende skill | ACT-01.29, 02.1, 02.11, 02.17, 02.53, 02.54, 07.1 t/m 07.4 (`backlog-regie`); ACT-03.6 en 03.14 bij AGT-10 (`ontwerp-controle`); ACT-02.57, en bij bijwerken ACT-02.6 en 02.7 (`regelbestanden-en-kwaliteitslat`, B-47) | FND-094, FND-091, FND-104 |
| Skill die meer agents gebruiken | `kort`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken`, `overdracht` in twee kopieën, die samen worden bijgewerkt (PRP-083, B-47) | FND-100 |
| Onnodige overlap | ACT-02.53 controle 3 (revisie) doet ook de bouwer (`architect-api-contracts` r.43); bewust dubbel (ASM-52) | — |
| Afhankelijkheid van één agent | alle stappen met R = AGT-08 (28 stappen, plus de makerstappen bij GOV-18); alle stappen met R = AGT-03 na de analyse | FND-096, FND-018 |
| Onvoldoende verificatie | ACT-01.26, 01.27, 01.58, 02.15, 02.56 (geen criteria bij AGT-09); ACT-01.11, 01.16, 01.59, 01.60, 02.5, 02.7, 02.8, 02.9, 02.57 en een wijzigingsverzoek van Atlas in ACT-04.4 (geen criteria bij AGT-10); ACT-03.12 t/m 03.14 (nacontrole in geen skill); alle skills: werking niet getest (OPEN-11); skills uit een andere plugin: onbekend of de agent ze kan laden (OPEN-33) | FND-090, FND-091, FND-099 |
| Conflicterende verantwoordelijkheden | ACT-02.11 en 03.6 bij GOV-18: `regie` verbiedt backlog-items (FND-088); ACT-01.16 en 02.8: slice 1 in twee akkoorden (FND-097); ACT-03.6 bij GOV-18: toets alleen op verzoek (FND-098); ACT-01.11, 01.12, 01.13, 02.6, 02.7 en 02.9: skills botsen met het model of met `atlas.md` (FND-101); ACT-02.57: de regelbestanden liggen buiten de grens van Atlas (FND-104, PRP-084). Opgelost: ACT-02.11, de hoofdsessie mag Atlas nu vragen stellen over de werkpakketten (ASM-109, CHG-052 doorgevoerd, B-46) | FND-088, FND-097, FND-098, FND-101, FND-104 |
| Stap zonder skill | ACT-06.1 (instructie in de agentdefinitie) | OPEN-46 |

## 6. Conflicten en restpunten

- **Twee schrijvers van de stand:** opgelost als ASM-104 wordt bevestigd (één schrijver: de hoofdsessie). De datum van een akkoord staat dan ook in `STATUS.md` van Atlas (atlas.md r.75); bij een verschil is de stand leidend.
- **Carlo als ontwerper en goedkeurder:** bekend restrisico (FND-033, ASM-28).
- **Hoofdsessie als enig knooppunt:** bekend restrisico (FND-096); de stand in een bestand beperkt het verlies bij een herstart (ASM-104).
