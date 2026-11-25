> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Modelcontrole 0.11, CHG-018 (herstel van de gaten in register 0.10): onafhankelijke controle

Datum: 2026-10-30
Controleur: onafhankelijke controleur (skill `bpmn-modelcontrole`, conventies uit `bpmn-conventies`). Ik heb alleen gelezen en dit verslag geschreven. Er is niets gewijzigd, geen API aangeroepen en niets geüpload.

## Conclusie

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. De processen zijn inhoudelijk niet veranderd, alle punten uit de gatenlijst zijn verwerkt of uitgelegd, de nieuwe ID's kloppen en de telling 21 / 27 / 25 / 9 (82) is juist en staat juist in §5b. CHG-019 is niet gebroken.

Er zijn twee waarschuwingen en zes opmerkingen. Ik raad aan K18-01 en K18-02 vóór het indienen te herstellen (kleine tekstwijzigingen). De rest mag blijven staan.

| Nr | Ernst | Kort |
| --- | --- | --- |
| K18-01 | waarschuwing | PRC-03 (ACT-03.1) noemt GOV-14 niet als pakket, het register wel |
| K18-02 | waarschuwing | §5b zegt "tien skills, administratie", maar 17 skills zijn gewijzigd, deels inhoudelijk (D-05, D-06) |
| K18-03 | opmerking | §5b vraagt niet duidelijk om jouw besluit; "Zo bedoeld" (B-4) leest als bevestigd |
| K18-04 | opmerking | Voorstel, tabel bovenaan: CHG-018 staat onder "Niet in deze versie"; Controle-regel noemt alleen CHG-019 |
| K18-05 | opmerking | PRP-043 heeft geen eigen toelichting; de skillbeschrijvingen volgen het voorstel al |
| K18-06 | opmerking | Letterlijke "PRP-xxx" in nieuwe tekst van PRC-01 |
| K18-07 | opmerking | FND-033 staat alleen in het register, niet in de tekst van PRC-02 |
| K18-08 | opmerking | `quality-gates`: drie overlappende dekkingsregels; ASM-19 staat nog in historische tekst |

## Wat ik controleerde

Scope: `concept/v011-register.md`, `v011-prc-01.md`, `v011-prc-02.md`, `v011-prc-03.md`, `v011-uitbreidingsgids.md`, `v011-voorstel.md` (§5b, §7, §9) en `v011-paperclip-mapping.md`.

Methode:
- Per bestand een `diff` tussen `concept-voor-chg018/` en `concept/`. De mapping is niet gewijzigd (0 regels verschil).
- Register als YAML geladen en tegen de vorige stand gelegd, per element (rollen, processen, activiteiten, beslissingen, goedkeuringen, capabilities, skills, koppelingen, aannames, vervallen ID's). Daarmee is exact vastgesteld welke elementen veranderden.
- `python3 tel.py v011-register.md` loopt zonder fouten: 82 activiteiten, aanwezig 21, gedeeltelijk 27, ontbreekt 25, n.v.t. 9. Ook tegen `concept-voor-chg018` (24 / 26 / 23 / 9) en `basis/register.md` (25 / 25 / 23 / 9) gedraaid.
- De mermaid-blokken van PRC-01, PRC-02 en PRC-03 uit beide mappen eruit gehaald en met `cmp` vergeleken.
- Gatenlijst (`register-gaten-0.10.md`) en meldingen A t/m D naast de wijzigingen gelegd.
- Verwijzingen (ACT, GOV, CAP, G, ROL, PRC) in het register en in de vijf documenten getoetst aan de bestaande elementen.
- Dekkingsregels per skill getoetst aan de koppelingen (status en activiteit).

Niet te beoordelen: of de akkoorden op kaart `a16387c4` zo zijn gegeven (kaart zelf niet ingezien); of de genoemde skills en agents technisch zo werken (alleen het model getoetst). Een inhoudelijk oordeel over de verdeling in PRP-043 (CMS-skill of API-skill) is aan jou.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| 1. Alle punten A-1 t/m C-4 verwerkt | voldoet (met K18-01, K18-02) | zie tabel hieronder |
| 2. Processen ongewijzigd | voldoet | Mermaid in PRC-01, 02, 03 byte-voor-byte gelijk (85, 87 en 15 regels). Van `beslissingen` is er geen enkele gewijzigd. Van `activiteiten` alleen ACT-01.16 (naam) en ACT-03.1 (tekst van de output). Geen route gewijzigd. Zie toelichting 2 |
| 3. Nieuwe ID's ASM-37, 38, 39, PRP-043 | voldoet | Eerstvolgend vrij en uniek: in 0.11 vóór CHG-018 was ASM-36 de hoogste en PRP-042; 34 aanname-ID's zonder dubbelen, zonder overlap met `vervallen_ids`; elk ASM-ID van 01 t/m 39 staat precies in `aannames` of `vervallen_ids`. Terug te vinden in register (`aannames`, regel 1458 t/m 1460), voorstel §5b en §9, en gids §6 (ASM-39 / ASM-40, PRP-043 / PRP-044). Labels: ASM-37 t/m ASM-39 "aanname, ter bevestiging" en "A" in §5b, PRP-043 "V". ASM-19 zie check 3b |
| 3b. ASM-19 vervallen | voldoet | Staat in `vervallen_ids` (register regel 348, reden B-12 / PRP-036) en niet meer in `aannames`. In PRC-01 (regel 151, 274) en PRC-03 (regel 78) als vervallen vermeld, in voorstel alleen in §5b en §9, in gids alleen in §6 als "niet hergebruiken". Resterend: zie K18-08 |
| 4. Koppelingen en telling | voldoet | Telscript 21 / 27 / 25 / 9 = 82 en geen "let op" over ontbrekende koppelingen. Verschuivingen exact: ACT-01.3, ACT-02.3, ACT-02.12 aanwezig → gedeeltelijk; ACT-02.6, ACT-02.7 gedeeltelijk → ontbreekt. Dat is wat §5b zegt. ACT-01.59 en ACT-02.6 gingen ook op `uitbreiden` maar bleven in dezelfde klasse (zie toelichting 4). Dekking: voor elke koppeling met een status ongelijk aan `bestaat` bestaat een dekkingsregel met dezelfde status. Uitzonderingen die ik vond (ACT-02.2 en GOV-07 in de dekking van `weekmoment`, `delivery-management`, `escalation-management`) komen uit CHG-019, niet uit CHG-018 |
| 4b. "Skills in het kort" | voldoet | 39 rijen = 39 skills in `skills`; kolom Stand klopt met de dekking (`uitbreiden` ↔ "moet worden uitgebreid", `nieuw` ↔ "Nog te maken"); de drie gewijzigde omschrijvingen zijn de enige wijzigingen in de tabel en worden genoemd |
| 5. Bestaande besluiten | voldoet | Zie toelichting 5 |
| 5b. Labels B-12 | voldoet | In PRC-01, PRC-02, gids 0.5: PRP-031, 032, 034, 035 staan als "B (B-12: ...)". In voorstel, mapping en documenten geen "Voorstel" bij PRP-029 t/m PRP-039 meer, behalve in de historische delen. De "V" in de profieltabel betekent "verplicht" |
| 6. Kruisverwijzingen | voldoet | Alle nieuw genoemde ACT-, GOV-, CAP-, G- en ROL-ID's bestaan (ook ACT-01.60, ACT-01.59, ACT-01.58, ACT-02.56, ACT-01.8, ACT-01.11, CAP-26, CAP-27). Alleen de bekende vrije-ID-voorbeelden in gids §6 bestaan nog niet, zoals bedoeld |
| 7. Leesbaarheid §5b | voldoet met opmerkingen | K18-03, K18-04 |
| Structuur: YAML geldig, geen dubbele ID's | voldoet | js-yaml laadt het register; geen dubbele `id` in 10 lijsten |
| Wijzigingshistorie | voldoet | CHG-018 staat in §9 van het voorstel, in de kop van het register (`Versie`, `Status`), en in de wijzigingsregels van PRC-01, 02, 03 en gids 0.5. Elk gewijzigd element heeft `wijziging_0_11` met "CHG-018", of (bij drie skills) een dekkingsregel met dat veld |
| Goedgekeurd model niet overschreven | voldoet | 0.10 staat in `basis/`; de wijzigingen staan in 0.11 (Concept) |

## Gatenlijst punt voor punt

| Punt | Verwerkt | Bewijs |
| --- | --- | --- |
| A-1 ASM-19 | ja | Naar `vervallen_ids`, uit `aannames`. PRC-01 §Aannames, PRC-03 aangepast |
| A-2 ASM-18 | ja | Label "0.10 (B-12)"; tekst: GOV-11 is het technisch ontwerp volgens profiel, architectuurkeuze in GOV-15 |
| A-3 ASM-17, ASM-14, GOV-07 | ja | Visie en paginalijst bij GOV-10; volgende wens van de uitbreidingslijst (ASM-14, GOV-07 `informatie`) |
| A-4 ROL-01 t/m ROL-04 | ja | `in` en `uit` aangevuld; ROL-01: "vier akkoorden (GOV-10, GOV-15, GOV-11, GOV-06)". De zin over TL-V4 is behouden en uitgebreid (bouwcontract) |
| A-5 GOV-02, GOV-11, GOV-12 | ja | GOV-02: G-02.7 erbij; GOV-11 "technisch ontwerp"; GOV-12 `wijziging_0_10` toegevoegd; GOV-09 als extra een noot (door meldingen C-04 gevraagd) |
| A-6 GOV-03, 04, 05, 13 | ja | "bij P3" in `processen`; ACT-02.6 beslisser per profiel (GOV-11 bij P1 en P2) |
| A-7 FND-033 | ja, in het register | `risicos` van PRC-01 en PRC-02 in het register. PRC-01 had de tekst al. Zie K18-07 |
| A-8 CAP-11 | ja | "Bouwcontract ontwerpen" |
| A-9 gids | ja | Gids 0.5: labels in §1, §2 en §7 (de gatenlijst noemt §6; daar stonden de labels niet) en in PRC-01 / PRC-02 |
| B-1 GOV-14 | ja, met K18-01 | ASM-37; GOV-14 `informatie`; register ACT-03.1. PRC-03-tabel nog niet |
| B-2 templatecontract | ja, als voorstel | PRP-043. Zie K18-05 |
| B-3 `quality-gates` | ja | ASM-38 en een dekkingsregel; ook in PRC-01 / PRC-02 §Aannames. Zie K18-08 |
| B-4 uitbreidingslijst | ja, als aanname | ASM-39; `controleur` bij ACT-01.29 en ACT-02.17 met "bewust". Zie K18-03 |
| C-1 vijf stappen op `uitbreiden` | ja | ACT-01.3, 02.3, 02.12, 02.6, 01.59 allemaal `uitbreiden`. Telling verschoof voor drie van de vijf |
| C-2 skills per profiel in UC2 | ja | ACT-02.6 (`architectuurprofielen`), ACT-02.7 (`architect-cms-configuratie`, `architect-componentontwerp`, CAP-26 en CAP-27 erbij); ACT-02.55 alleen `opm` |
| C-3 dekking en wijzigingsvelden | ja | Dekkingsregels toegevoegd; zie K18-02 over de omvang |
| C-4 ACT-01.28, ACT-02.16 | ja | `skl_status` weggelaten, net als bij ACT-01.52; telscript telt ze als n.v.t. (9 n.v.t. in 0.10 en in 0.11) |

## Toelichting bij de checks

**2. Processen ongewijzigd.** ACT-01.16 heet nu "Technisch ontwerp opdelen in vertical slices" (register regel 227 en PRC-01 regel 91). Het PRC-01-diagram gebruikt het korte label "ACT-01.16 Opdelen in slices" (regel 219), dat past bij beide namen: geen tegenstrijdigheid. De oude naam "Kernontwerp opdelen" komt nergens meer voor (alleen "kernontwerp" in een historische risicoregel van PRC-01 in het register, regel 170, en in de historische alinea "Nieuw in 0.8" van PRC-03, regel 11). In ACT-03.1 is de output uitgebreid met "zo ook bij GOV-14"; dat is een verduidelijking binnen de aanname ASM-37, geen nieuwe stap of route. Ik reken dat niet als procesverandering, maar het is wel waar het model net iets zegt wat het eerst niet zei; het staat als aanname ter bevestiging.

**4. Telling.** Het aantal activiteiten dat verschuift (3 van aanwezig naar gedeeltelijk, 2 van gedeeltelijk naar ontbreekt) is lager dan het "maximaal 5" uit de gatenlijst voor C-1, omdat ACT-02.6 en ACT-01.59 al niet "aanwezig" waren. §5b noemt de juiste activiteiten maar zegt niet waarom van de vijf in C-1 er maar drie in de telling verschuiven. §7 van het voorstel zegt "nog vijf stappen" (dat zijn ACT-01.3, 02.3, 02.12, 02.6, 02.7); dat klopt, maar het zijn andere vijf dan in C-1. Zie K18-03.

**5. Bestaande besluiten.** Vier akkoorden in UC1 (B-12, PRP-036): ROL-01, PRC-01 §Akkoorden en `goedkeuringen` GOV-10, 15, 11, 06 ongewijzigd; "Je koos voor 4" is toegevoegd. B-06: ROL-03 en ROL-04 beschrijven nog steeds toetsing van de use cases door Atlas (en nu ook de brieven, zoals in 0.10). B-07: GOV-13 nog steeds alleen bij P3; de toegevoegde zin over P2 met een eigen database verwijst naar GOV-11 (ACT-01.59), zoals al in 0.10. TL-V4: bouwcontract door ROL-01 goedgekeurd, ongewijzigd. TL-V7: ASM-15 blijft vervallen. B-13: de elementen van CHG-019 (ACT-01.1, 01.2, 01.51, 01.52, 02.51, G-02.8, ASM-30 t/m 36, OPEN-15) zijn niet gewijzigd; de `wijziging_0_11`-teksten van CHG-019 zijn alleen aangevuld met "CHG-018" (ROL-01, ROL-02, PRC-01, PRC-02, GOV-07). Label-afwijkingen heb ik niet gevonden.

## Bevindingen

### K18-01 (waarschuwing): PRC-03 noemt GOV-14 niet als pakket

- **Waar:** `v011-prc-03.md` regel 40 (tabel ACT-03.1, kolom Output en kolom Bron); `v011-register.md` regel 269 (ACT-03.1).
- **Bewijs:** Het register zegt nu: "bij een pakket (GOV-10, GOV-11, GOV-15) één kaart met een beoordeling per document; zo ook bij GOV-14 met ontwerp en brieven (ASM-37)", met label "A (ASM-37)". De tabelrij in PRC-03 zegt nog alleen "(GOV-10, GOV-11, GOV-15)" en heeft geen ASM-37 in de bron. ASM-37 staat wel apart in PRC-03 §Aannames (regel 79). De voorstelregel B-1 noemt "PRC-02, PRC-03" als plaats van herstel. De check "overzichten komen overeen met het register" geeft hier geen tegenstrijdigheid, maar wel een verschil.
- **Voorstel:** Rij ACT-03.1 in PRC-03 gelijktrekken met het register: "(GOV-10, GOV-11, GOV-15; ook GOV-14 met ontwerp en brieven)" en "A (ASM-37)" in de bron. Het diagram blijft gelijk.

### K18-02 (waarschuwing): §5b noemt niet alle skillwijzigingen en noemt ze "administratie"

- **Waar:** `v011-voorstel.md` regel 130 (C-3) en §9 (CHG-018-regel); register `skills`.
- **Bewijs:** C-3 zegt "tien skills ... dekking en wijzigingsvelden bijgewerkt (administratie)". In werkelijkheid zijn 17 skills gewijzigd (vergelijking met `concept-voor-chg018`): `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`, `backlog-management`, `quality-gates`, `architect-vertical-slices`, `architect-api-contracts`, `architect-conventions`, `architect-clarification`, `vragen-en-akkoordrondes`, `architectuurprofielen`, `architect-cms-configuratie`, `architect-componentontwerp`. Bij een aantal gaat het niet alleen om dekking: `architect-api-contracts` (regel 1135) en `architect-conventions` (regel 1175) kregen een andere `input`, `validatie` en `afhankelijkheden` (klassendiagram alleen bij P3, "technisch ontwerp van het profiel" in plaats van "kernontwerp"; meldingen D-06), en `architect-vertical-slices`, `architect-clarification` en `vragen-en-akkoordrondes` kregen een nieuwe wijzigingsbeschrijving (D-05). D-05 en D-06 komen uit melding D en staan niet in de gatenlijst A t/m C, en niet in §5b. Dat zijn skills die nog niet bestaan (werknamen), dus het raakt geen werkende skill; toch staat er in §6 "Er verandert niets aan ... skills" en de project owner kan dit nu niet zien.
- **Voorstel:** In §5b bij C-3 het getal en de omvang corrigeren ("zeventien skills") en één regel toevoegen: "Daarnaast zijn de nog te maken skills `architect-api-contracts` en `architect-conventions` aangepast aan het technisch ontwerp per profiel (meldingen D-05, D-06)". Of die twee regels laten vallen als je ze niet in 0.11 wilt.

### K18-03 (opmerking): §5b is niet duidelijk over wat jij moet beslissen; sommige formuleringen lezen als besloten

- **Waar:** `v011-voorstel.md` §5b (regel 109 t/m 148), met name B-4 (regel 127) en de zin onder de telling.
- **Bewijs:** B-4: "Zo bedoeld: jij bepaalt inhoud en volgorde (ASM-39). Geen hiaat." Dat klinkt als bevestigd, terwijl ASM-39 een aanname ter bevestiging is. In §5b staat nergens in gewone woorden dat jouw akkoord op 0.11 ook ASM-37, ASM-38, ASM-39 en PRP-043 omvat. De tabel gebruikt veel vaktaal (`wijziging_0_11`, "dekking", "vervallen ID's", "n.v.t.", "restrisico"). De zin "Van aanwezig naar gedeeltelijk: ACT-01.3, ACT-02.3, ACT-02.12 ... " legt niet uit waarom bij C-1 vijf stappen staan maar er maar drie verschuiven (ACT-02.6 en ACT-01.59 stonden al in een lagere klasse).
- **Voorstel:** (a) B-4 herschrijven naar "Zo lijkt het bedoeld; bevestig dit met je akkoord (ASM-39)". (b) Onder de tabel drie korte regels: "Wat ik van je vraag: bevestig ASM-37, ASM-38 en ASM-39 (dit zijn mijn aannames) en keur PRP-043 goed of af." (c) Eén zin bij de telling: "De andere twee stappen uit C-1 (ACT-02.6, ACT-01.59) vielen al in een lagere klasse en verschuiven daarom niet."

### K18-04 (opmerking): Kop van het voorstel is verwarrend over CHG-018

- **Waar:** `v011-voorstel.md` regel 9 (rij "Niet in deze versie") en regel 7 (rij "Controle").
- **Bewijs:** Onder het kopje "Niet in deze versie" staat: "**CHG-018** ... zit er nu wel in (§5b)". De rij "Controle" verwijst alleen naar `v011-controle` (die CHG-019 dekt, CHG-018 niet).
- **Voorstel:** Rij 9 laten beginnen met "De overzichten en de pagina ..." en CHG-018 daar weghalen; rij Controle aanvullen met `v011-controle-chg018` zodra dit verslag op het issue staat.

### K18-05 (opmerking): PRP-043 heeft geen eigen toelichting, terwijl de beschrijvingen er al op vooruitlopen

- **Waar:** `v011-voorstel.md` regel 137 en B-2 (regel 125); register regel 48 en 55 (tabel), 1135 t/m 1155 en 1279 t/m 1298 (`skills`).
- **Bewijs:** PRP-040 t/m PRP-042 hebben een eigen sectie met advies, voor- en nadeel. PRP-043 staat alleen als regel in de tabel. In het register zijn `doel`, `output`, `afhankelijkheden` en de omschrijvingen in de tabel "Skills in het kort" van de twee skills al aangepast, met de tekst "voorstel PRP-043" erbij; de afhankelijkheid tussen de skills is omgedraaid. Bij een afwijzing moeten die plekken terug.
- **Voorstel:** In §5b twee regels extra bij PRP-043: wat het voorstel is, wat het alternatief is (andersom verdelen), en dat bij afwijzing de omschrijvingen van beide skills worden teruggezet. Verder is de aanpak (voorstel labelen in de tekst) in orde.

### K18-06 (opmerking): letterlijke "PRP-xxx" in nieuwe tekst

- **Waar:** `v011-prc-01.md` regel 7 (nieuw in CHG-018); eerder ook regel 5 en 33 en `v011-prc-02.md` regel 5 (daar als uitleg van het label, bestond al).
- **Bewijs:** Regel 7: "dus nu **B** (B-12: PRP-xxx)". Het leest als een niet ingevuld sjabloon. Op regel 5 en 33 is het een uitleg van de schrijfwijze en daar is het acceptabel.
- **Voorstel:** Regel 7 aanpassen naar "dus nu **B**, met de vermelding B-12 en het PRP-nummer".

### K18-07 (opmerking): FND-033 staat niet in de tekst van PRC-02

- **Waar:** `v011-register.md` (PRC-02 `risicos`, regel 193); `v011-prc-02.md` (geen restrisico-sectie).
- **Bewijs:** `grep FND-033` geeft alleen PRC-01 (regel 161, bestond al) en het register. A-7 uit de gatenlijst vraagt het risico in het register; dat is gedaan. Voorstel §5b A-7 zegt "Toegevoegd" bij "risico's van PRC-01 en PRC-02" zonder te zeggen dat dit het register betreft.
- **Voorstel:** Geen herstel nodig voor de gatenlijst. Wil je het ook leesbaar in PRC-02, voeg dan een regel Restrisico toe; anders in §5b "(in het register)" erbij zetten.

### K18-08 (opmerking): kleine restpunten in `quality-gates` en in historische tekst

- **Waar:** `v011-register.md` regel 986 e.v. (`quality-gates`, `dekking`); `v011-prc-03.md` regel 11; `v011-register.md` regel 80 (B-08).
- **Bewijs:** (a) `quality-gates` heeft nu drie dekkingsregels voor CAP-14 met `uitbreiden`, waarbij ACT-01.15 en ACT-02.4 in de eerste en de nieuwe derde regel staan, en ACT-02.53 in de tweede en de derde. De teksten spreken elkaar niet tegen (de derde voegt GOV-15 en GOV-14 toe), maar de eerste noemt voor ACT-01.15 alleen GOV-11. Ook plaatst ASM-38 de poorten vóór de opdeling (ACT-01.15, ACT-02.4) en in ACT-02.53, terwijl `wijziging_0_10` van de skill zegt "vóór het bouwcontract"; ASM-38 is als aanname gelabeld, dus dit is toegestaan. (b) PRC-03 regel 11 ("Nieuw in 0.8") noemt ASM-19 als onderbouwing van het pakket en spreekt van "GOV-11 kernontwerp"; B-08 in het register noemt ASM-19 als bevestigde interpretatie. Beide zijn historische tekst en mogen blijven.
- **Voorstel:** (a) Eventueel de eerste dekkingsregel van `quality-gates` verwijzen naar de nieuwe ("zie ook ASM-38"). (b) In PRC-03 regel 11 "(ASM-19, later vervallen, zie CHG-018)" toevoegen.

## Wat ik niet als bevinding meld

- Gids §8 en de koppen van §2 t/m §5 dragen nog het label "(Voorstel)". De gids zegt bovenaan dat de hele werkwijze een Voorstel is; dat is geen B-12-label bij een besloten PRP en blijft zoals goedgekeurd in versie 0.4.
- Het "Concept"-label bij ASM-18 is verdwenen ("0.10 (B-12)"), maar ASM-18 heeft nog het veld `bevestigd: 2026-10-29` bij een tekst die inhoudelijk is bijgewerkt. A-2 vroeg om precies die bijwerking.
- De dekking-uitzonderingen rond ACT-02.2 en GOV-07 komen uit CHG-019 en horen bij die controle.

## Herstel door Socrates (2026-10-30, na deze controle)

| Bevinding | Herstel |
| --- | --- |
| K18-01 | PRC-03, ACT-03.1: GOV-14 met twee makers (ASM-37) bij de pakketten genoemd. |
| K18-02 | `v011-voorstel` §5b, C-3: alle 17 skills genoemd; de inhoudelijke aanpassing van `architect-api-contracts` en `architect-conventions` (technisch ontwerp van het profiel in plaats van het klassendiagram) en de nieuwe naam van ACT-01.16 staan erbij. |
| K18-03 | §5b: B-4 staat nu als aanname ter bevestiging; "Wat je hier beslist" toegevoegd; uitgelegd waarom drie van de vijf stappen uit C-1 schuiven. |
| K18-04 | Kop van `v011-voorstel`: CHG-018 niet meer onder "Niet in deze versie"; de regel Controle noemt beide verslagen. |
| K18-05 | §5b: korte toelichting bij PRP-043. |
| K18-06 | PRC-01: de letterlijke "PRP-xxx" vervangen. |
| K18-07 | PRC-02: restrisico FND-033 in de tekst toegevoegd. |
| K18-08 | Niet hersteld: historische tekst (PRC-03 "Nieuw in 0.8", B-08) blijft zoals die toen was; de drie dekkingsregels van `quality-gates` overlappen, maar spreken elkaar niet tegen. |

Na dit herstel is geen nieuwe controle door een aparte agent gedaan. Wel opnieuw nagelopen: de YAML laadt en de telling is 21 / 27 / 25 / 9 (82).
