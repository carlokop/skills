# Controle CHG-025: weergaven van model 0.13 (WEB-19)

| | |
| --- | --- |
| Datum | 2026-10-31 |
| Controleur | onafhankelijke controleur (niet de maker), skill `bpmn-modelcontrole` |
| Scope | `werk/organisatie.md`, `werk/proces-catalogus.md`, `werk/activiteit-skillmatrix.md`, `werk/agent-skillmatrix.md`, `werk/capabilities-en-skills.md`, `werk/skill-specificaties.md`, `werk/agentprofiel-atlas.md`, `werk/verantwoordelijkheden.md`; van `werk/prc-03.md` t/m `werk/prc-06.md` en `werk/voorstellen.md` alleen legenda, statusregel en korte namen; de regel CHG-025 in `werk/wijzigingen.md`; de meldingen `_meldingen-A` t/m `_meldingen-D`. Vergeleken met de vorige versie in `api/` en met `SPEC-CHG-025.md`. Het bestand `werk/register-gaten-0-13.md` verscheen tijdens de controle (15:14); ik heb het beoordeeld als bijlage bij de meldingen (K25-10). |
| Bron van waarheid | `api/register.md` (0.13, B-19). Het YAML-blok is ingelezen en vergeleken met `/tmp/r13.json`: identiek (alleen de datumnotatie verschilt). `node ../../v08/tools/check.js api/register.md` geeft 84 activiteiten, 84 koppelingen, 21 beslissingen, 15 goedkeuringen en skillstatus 17 aanwezig / 23 gedeeltelijk / 35 ontbreekt / 9 n.v.t. |
| Niet aangepast | Ik heb geen enkel document aangepast, niets geüpload en geen comments geplaatst. Alleen dit verslag is geschreven. Mijn controlescripts staan buiten de map (`/tmp/ctl`). |
| Pagina 0.6 | Niet in deze controle (komt in `controle-pagina-0-6.md`). |
| Methode | (1) tabellen en tellingen met scripts naast het register gelegd; (2) de tekst die de makers toevoegden (verschil tussen `api/<doc>.md` en `werk-voor-namen/<doc>.md`, ruim 150 KB) regel voor regel gelezen op herleidbaarheid en labels; (3) het effect van `namen.py` gereproduceerd: `namen.annoteer(werk-voor-namen/<doc>) == werk/<doc>` is waar voor alle acht weergaven, en `api/prc-03..06` en `api/voorstellen` plus `namen_extra.py` geeft precies `werk/prc-03..06` en `werk/voorstellen` (alleen statusregel, legenda en namen verschillen). In totaal zijn 8.078 korte namen ingevoegd. |

## Oordeel in het kort

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. De inhoud van alle acht weergaven volgt register 0.13: tellingen, skillstatus van alle 84 activiteiten, RACI van alle 84 activiteiten, de 21 beslispunten, de 15 goedkeuringsmomenten, de grill-momenten, de OpenAPI-stappen en de aannames ASM-40 t/m ASM-55. Er is geen nieuw besluit en geen ongelabelde afleiding van betekenis gevonden. Er zijn **4 waarschuwingen** en **7 opmerkingen**. De waarschuwingen zijn tekstcorrecties (twee onjuiste zinnen, een niet herleidbaar citaat en namen die aan een reeks of paar hangen); herstel ze bij voorkeur vóór de upload.

| Ernst | Aantal |
| --- | --- |
| blokkerend | 0 |
| waarschuwing | 4 (K25-01 t/m K25-04) |
| opmerking | 7 (K25-05 t/m K25-11) |

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's bestaan, volgen het schema en zijn niet hergebruikt | voldoet | Script: alle ACT-, G-, GOV-, CAP-, ASM-, OPEN-, ROL-, AGT-, PRC-, GS-, FND-, PRP-, TL-, B-, M- en CHG-codes in de dertien documenten staan in `korte_namen` van het register (421 codes) of in `korte-namen-def.json` (+ B-19, CHG-025). Alleen `M-01` en `M-03` in `wijzigingen` (historische regels CHG-001/CHG-007, punten uit een oude modelcontrole) staan niet in de lijst. Vervallen ID's (ACT-04.7, ACT-01.19, ASM-19, enz.) komen alleen historisch of als "vervallen" voor. GS5–GS8, GS12, GS13 en GS15 staan overal alleen als vervallen. |
| Elke verwijzing wijst naar een bestaand element | voldoet | Alle 8-hex kaart- en comment-ID's staan in `api/`; uitzondering `0e24368a` (K25-03). Verwijzingen naar `v012-voorstel` §2/§3/§9 en `v013-voorstel` §3.1/§3.2/§3.5/§3.6/§5 bestaan. Nieuw verwezen document `register-gaten-0-13` bestaat nu (K25-10). `v010-voorstel`, `v011-voorstel` en `controle-model-v08` zijn oude, bestaande verwijzingen. |
| Elk model heeft status en versie | voldoet | De Status-regel in de acht weergaven is letterlijk de SPEC-regel met de juiste revisies: organisatie 17/18, proces-catalogus 13/14, activiteit-skillmatrix 9/10, agent-skillmatrix 9/10, capabilities-en-skills 9/10, skill-specificaties 10/11, agentprofiel-atlas 7/8, verantwoordelijkheden 9/10. "Geldende versie" (organisatie, revisie 17) en "Goedgekeurde versie" (proces-catalogus, revisie 13) zeggen 0.10, gelijk aan de Status-regel. Versieregel "0.13, CHG-025 (2026-10-31): weergave van model 0.12 en 0.13 (B-19)" staat in elk document dat een versieregel of -tabel heeft. `prc-03` t/m `prc-06` en `voorstellen`: revisie 10/11/11/4/19 gelijk aan `api/_revisies.json`. |
| Tellingen 84 / 21 / 15 en 17 / 23 / 35 / 9 | voldoet | Script op `activiteit-skillmatrix` (84 rijen): naam, versie, uitvoerder, capabilities, elke skill met status en eindstatus kloppen met `koppelingen`; 17 aanwezig, 23 gedeeltelijk, 35 ontbreekt, 9 n.v.t. De verschuivingen ten opzichte van 0.11 kloppen met `/tmp/r11.json` tegen `/tmp/r13.json`: 4 stappen aanwezig→ontbreekt (ACT-01.4, 01.21, 04.2, 04.6), 4 stappen gedeeltelijk→ontbreekt (ACT-01.3, 01.9, 02.3, 02.12), 2 nieuwe (ACT-04.55, 04.56). `proces-catalogus`: 36+21+4+12+6+5 = 84 en 7+7+4+1+2 = 21 beslissingen. Geen verouderde telling (82/20/21-27-25) buiten historische regels. |
| RACI uit `koppelingen` | voldoet | Script: alle 84 rijen in `verantwoordelijkheden` §1 komen kolom voor kolom (R, A, beslisser, controleur, C, I, escalatie) overeen met het register; verschillen zijn alleen AGT-naam of backticks. ACT-02.6 heeft terecht geen C (zie melding C-1). |
| Beslispunten en GOV-teksten | voldoet | Script: 15 GOV-rijen (naam, bevoegd, informatie, criteria, bij goedkeuring, bij afwijzing, escalatie) gelijk aan het register, GOV-06 met leesbare versie en revisie (B-17), GOV-08 en GOV-12 volgens B-15. Alle 21 G-rijen aanwezig; alleen G-02.8 heeft in het register een `beslisser`; voor de overige is wie beslist gelabeld ("afgeleid, nog niet besloten" of verwijzing naar `koppelingen`). |
| Grill-momenten | voldoet | GS1–GS4, GS9–GS11 en GS14 in `proces-catalogus`, `activiteit-skillmatrix`, `verantwoordelijkheden`, `skill-specificaties` komen overeen met `grillmomenten` (begint bij, wie met wie, route, dekt ook). Per stap kloppen de notities bij ACT-01.3/01.4/01.9/01.11/01.21/01.23/02.3/02.6/02.12/02.13. Vervallen GS alleen als vervallen. |
| OpenAPI bij ACT-01.17, ACT-02.8 en GOV-06 | voldoet | Aanwezig in `organisatie` (ROL-01, ROL-02, ROL-04, §4, §5, §6), `proces-catalogus` (PRC-01, PRC-02), `activiteit-skillmatrix` (rijen en Per profiel), `agent-skillmatrix`, `capabilities-en-skills` (CAP-11), `skill-specificaties` (`architect-api-contracts`, `quality-gates`, `architect-architecture-choice`), `agentprofiel-atlas` (TL-04), `verantwoordelijkheden` (GOV-06, §4 tabel van de twee controles). Inhoud gelijk aan ASM-49 t/m ASM-53 en `v013-voorstel` §3. |
| ASM-40 t/m ASM-55 bevestigd of besloten; geen "ter bevestiging" | voldoet | `grep` op "ter bevestiging", "nog te bevestigen", "onbevestigd", "nog niet bevestigd": geen treffer bij ASM-40..55 (de ene treffer is ASM-09 in een oude regel, zoals in `api/`). ASM-40 en ASM-41 staan als "besloten met B-16", ASM-42..48 als bevestigd op kaart `2ddaa565`, ASM-49..55 als bevestigd in B-19 (kaart `226c7ce7`); dat volgt `aannames` in het register. |
| Skills bij naam (B-11) | voldoet | `grep SKL-[0-9]`: geen treffers in de dertien documenten. Backticknamen bestaan in `skills` van het register, behalve de bekende skills buiten het model (`complain`, `suggestion-box`, `paperclip-create-agent`, `paperclip-board`, `to-spec`, `para-memory-files`, `first-task`, `improve-codebase-architecture`, `sprint-planning`), gelijk aan CHG-020. |
| Capabilities en skills (dekking) | voldoet met opmerking | Script: 27 CAP-namen, omschrijvingen en activiteiten per CAP gelijk aan het register; per skill kloppen CAP, status en activiteiten van de dekking (samengevoegde regels zijn consistent). `agent-skillmatrix`: alle 39 skills, elke cel volgt uit `koppelingen` en `gebruikers`. Zie K25-02 voor één onjuiste zin. |
| Geen nieuwe besluiten, voorstellen of aannames | voldoet met waarschuwingen | Nieuwe tekst is herleid tot register, `prc-01/02/04`, `v012-voorstel`, `v013-voorstel` en `bevindingen`. Afleidingen zijn gelabeld (verantwoordelijkheden §2 en §4, skill-specificaties werkwijzen "Voorstel (afgeleid van ...)", Atlas §7). Uitzonderingen: K25-01 en K25-08. |
| Labels (B (B-15), B (B-16), B (B-17), B (B-18), B (B-19: PRP-044)) | voldoet | Labelvormen volgen de SPEC; PRP-044 overal "besloten, B-19". |
| Legenda bovenaan en korte namen | voldoet met opmerkingen | Legenda staat direct onder de kopregels in alle dertien documenten. Namen: zie K25-04, K25-05, K25-06 en K25-07. Tabelstructuur en haakjes na `namen.py` zijn heel (script: celaantal per rij, backticks en codeblokken kloppen; geen verwarrende nesting). |
| Statusregels en revisienummers volgens SPEC regel 5 | voldoet | Zie boven. |
| Tegenspraak tussen de documenten | voldoet | ASM-36 / ASM-44 (`to-tickets`), controle 1 (Atlas) en controle 2 (Dr. Evil), "21 stappen" voor `vragen-en-akkoordrondes`, "27 van 41 rijen", GS-lijsten, de 4 akkoorden in UC1 en M-15..M-17 zijn in alle documenten gelijk. Eén intern tegenstrijdige zin: K25-02. |
| Fouten en herstelroutes, GOV voor menselijke goedkeuring | voldoet | Niet gewijzigd t.o.v. goedgekeurde `prc-01`..`prc-06`; PRC-04: ACT-04.55, ACT-04.56 en G-04.52 hebben RACI, GOV-12 en GOV-08 als uitgang. |
| Onafhankelijke controle (uitvoerder is niet de controleur) | voldoet | `verantwoordelijkheden` §4: 41 rijen, 27 voldoen. ACT-04.55 voldoet via de ontvanger (register). Controle 1 op het OpenAPI-bestand is een zelfcontrole van Atlas en staat zo benoemd ("nee: de maker controleert zichzelf", gelabeld afgeleid). |
| `.bpmn`-validatie | niet te beoordelen | Er zijn geen `.bpmn`-bestanden in deze scope; het mermaid-diagram in `organisatie` §2 is alleen het label van P4 aangepast. |
| Een goedgekeurd model is niet overschreven | voldoet | `api/` is ongewijzigd; alle wijzigingen staan als Concept in `werk/`. |
| Wijzigingshistorie bijgewerkt | voldoet met opmerkingen | Regel CHG-025 in `wijzigingen` r.39; zie K25-03 en K25-09. |
| Genoemde agents en skills bestaan; werking en koppeling | niet te beoordelen (werking) | Namen bestaan volgens register. De werking van skills (OPEN-11), of agents een project mogen aanmaken (OPEN-15) en of Atlas het OpenAPI-hulpmiddel zonder wijziging van het project kan draaien (ASM-51) kan ik niet toetsen. |

## Bevindingen

### Waarschuwingen

**K25-01 (waarschuwing)** `werk/activiteit-skillmatrix.md` r.134 (*Per profiel*, inleiding): "In 0.13 verandert alleen de rij *bouwcontract* (B-17); de rest is gelijk aan 0.11."
- Wat: dat klopt niet. In de kolom *Skills* van de rijen *use cases met AC's* (ACT-01.9) en *architectuurkeuze met profiel-ADR* (ACT-01.11) staat nu `vragen-en-akkoordrondes` (werknaam) erbij (0.12); in `api/activiteit-skillmatrix.md` r.132 en r.135 stond dat niet. Het register heeft bij `profielen` geen skills per product; de maker leidde ze af uit `koppelingen` (melding B-3 zegt dat zelf), maar in het document staat dat niet, en de zin hierboven zegt juist dat er niets veranderd is. Dit valt onder SPEC regel 3 (afleiding labelen).
- Voorstel: vervang de zin door "In 0.12 komt `vragen-en-akkoordrondes` (werknaam) erbij bij *use cases met AC's* en *architectuurkeuze met profiel-ADR* (afgeleid uit de koppelingen, geen nieuw besluit); in 0.13 verandert de rij *bouwcontract* (B-17)."

**K25-02 (waarschuwing)** `werk/capabilities-en-skills.md` r.81 (§2, inleiding) en r.17 (CAP-01) en r.61 (*Dekking bijgewerkt*).
- Wat: r.81 zegt "Sinds 0.12 staat elke regel uit de koppelingen ook in de dekking van de skill, op één regel na die in 0.11 nog open stond: `paperclip` bij ACT-01.51 ... Wel zijn de dekkingen van een paar skills korter dan de koppelingen". De eerste zin is onjuist en spreekt de tweede en melding B-1 tegen: zes skills hebben in `koppelingen` stappen die niet in hun `dekking` staan (`uml-domain-modelling` ACT-02.6; `uml-sequence-diagrams` en `uml-class-diagram` ACT-02.6 en ACT-02.7; `architect-database` ACT-02.6; `architect-implementation-plan` ACT-01.18, ACT-02.7, ACT-02.9; `vragen-en-akkoordrondes` ACT-05.1 en ACT-05.3; gecontroleerd met een script op `/tmp/r13.json`). Het `paperclip`-geval is wel opgelost (dekking bevat CAP-01 met ACT-01.51), maar r.17 houdt "via ACT-01.51 ook `paperclip`" en r.61 "Eén regel blijft ... Daarom stond ..." staan er nog als open punt.
- Voorstel: r.81: "In de dekking van de skills ontbreken nog stappen uit de koppelingen: zie `register-gaten-0-13` (A-4). De statussen in de matrices komen uit de koppelingen." Laat het `paperclip`-voorbehoud bij CAP-01 en r.61 vervallen of zet er "opgelost in 0.12 (CHG-021: C-2)" achter.

**K25-03 (waarschuwing)** `werk/organisatie.md` r.8 (*Opdracht*) en `werk/wijzigingen.md` r.39 (regel CHG-025, kolom *Wijziging*).
- Wat: twee citaten tussen aanhalingstekens die niet herleidbaar zijn en elkaar tegenspreken. `organisatie`: "Deze weergave volgt uit B-19: "de overzichten en pagina 0.6 volgen" (CHG-025)". `wijzigingen`: "aangekondigd in comment `0e24368a`: "Daarna de overzichten en pagina 0.6"". SPEC citeert "Daarna werk ik de overzichten en pagina 0.6 bij." Het comment-ID `0e24368a` staat alleen in `v13/VOORTGANG.md` ("Ontvangst-comment 0e24368a") en in geen enkel `api/`-document; ik kan niet vaststellen of dat comment de zin bevat. Een citaat dat niet letterlijk is, hoort niet tussen aanhalingstekens (vergelijk K-01 in `controle-chg020`).
- Voorstel: controleer de tekst van het comment op het issue en citeer die letterlijk, in beide documenten gelijk; of laat de aanhalingstekens weg en schrijf "aangekondigd in comment `0e24368a`" zonder citaat.

**K25-04 (waarschuwing)** Korte naam van één code achter een reeks of paar (door `namen.py`): `werk/verantwoordelijkheden.md` r.218; `werk/organisatie.md` r.32 en r.26 en r.254; `werk/proces-catalogus.md` r.14 en r.88; `werk/verantwoordelijkheden.md` r.54; `werk/activiteit-skillmatrix.md` r.172.
- Wat: de naam hoort bij één code maar staat achter het hele bereik, dus onjuist. Voorbeelden: "GS1–GS4 (grill-sessie bij de architectuurkeuze), GS9–GS11 (grill-sessie bij toets van wens)" (verantwoordelijkheden r.218: de naam van GS4 en GS11 staat achter de reeks); "ASM-40 t/m ASM-55 (ASM-40 en ASM-41 – geen sessie zonder open punten besloten met B-16 – minder grill-momenten, optie A, ...)" (organisatie r.32: de naam van ASM-41 staat achter beide codes en loopt door in een tweede streepje); "GS5 en GS12 (grill-sessie bij brieven en ontwerp wens; ...)", "GS6, GS7 (grill-sessie bij opdeling in slices)" en "GS5 t/m GS8, GS12 (grill-sessie bij brieven en ontwerp wens)" (de naam is die van de laatste code; GS5 t/m GS8 krijgen geen naam). Een lezer die geen ontwikkelaar is, leest hier de verkeerde betekenis.
- Voorstel: laat `namen.py` bij `–`, `t/m`, `en` en `,` tussen twee codes de naam bij de laatste code weg, of voeg in deze acht regels de namen met de hand goed in (en draai het script opnieuw). Zo staat in `wijzigingen` r.36 (goedgekeurd 0.13) hetzelfde patroon; herstel daar niets, dat is goedgekeurd.

### Opmerkingen

**K25-05 (opmerking)** Dubbele of aaneengeplakte woorden door `namen.py`.
- Wat: "B-16 (minder grill-momenten, optie A; optie A, kaart ...)" (`organisatie` r.8), "B-16 – minder grill-momenten, optie A, optie A" (`organisatie` r.254, `proces-catalogus` r.88, `verantwoordelijkheden` r.38); "Eerste versie (CHG-008 – rollen- en skillmodel, ronde 3, ronde 3)" (`skill-specificaties` r.520, `agentprofiel-atlas` r.129); "G-04.52 (bevestigt ontvanger het contextverslag?; het contextverslag)" (`organisatie` r.28); "ACT-01.13 (klassendiagram opstellen bij maatwerk)" in de kolom *ACT* naast de kolom *Activiteit* en alleen bij deze rij (`activiteit-skillmatrix` r.32, `verantwoordelijkheden` r.77); in `prc-03` r.100 en `prc-04` r.22 staat een naam binnen een letterlijk citaat (`"Voorstel 0.11 (PRP-040 – akkoord altijd via kaart op issue)"` en `"nee, vastgelopen → PRC-06 (blokkade afhandelen)"`), en `prc-03` r.13 heeft "GOV-14 – akkoord paginaontwerp ontwerp in UC2".
- Voorstel: eenmalig met de hand schonen; geen inhoudelijke gevolgen.

**K25-06 (opmerking)** Legenda (alle dertien documenten, bijvoorbeeld `werk/organisatie.md` r.11).
- Wat: (a) in de acht weergaven staat "(B-18 – codes met een korte naam)" in de legenda, terwijl de SPEC de legenda "letterlijk" voorschrijft; in `prc-03..06` en `voorstellen` staat hij letterlijk. Onschuldig, maar niet gelijk. (b) De SPEC-legenda zegt "De eerste keer per sectie staat de korte naam erbij"; ASM-55 en `namen.py` doen het per alinea, lijstpunt of tabelrij. De lezer ziet dus vaker een naam dan de legenda zegt. Dat is geen fout van de makers (de SPEC schreef de zin voor). (c) Lokale codes die in de tekst voorkomen (A-/B-/C-gatcodes zoals "CHG-021: C-1", V1 t/m V5, D1 t/m D3, GK-1 t/m GK-4, L-04) staan niet in de legenda; het register legt ze wel uit (*Wat de codes betekenen*, rijen K en Lokale codes). Dit is melding A-4 en `register-gaten-0-13` A-10.
- Voorstel: zet de legenda bij de volgende CHG gelijk aan die van het register en pas de zin aan naar "de eerste keer per alinea, lijstpunt of tabelrij". Voor deze ronde: laat staan.

**K25-07 (opmerking)** Kolom *Naam* en `korte_namen` (`werk/verantwoordelijkheden.md` §1, §3, §4; `werk/activiteit-skillmatrix.md` PRC-tabellen; `werk/capabilities-en-skills.md` §1; `werk/proces-catalogus.md` r.55).
- Wat: in de ID-tabellen met stappen, goedkeuringen, capabilities en processen staat in de kolom *Naam* (of *Activiteit*, *Capability*, *Proces*) de volledige registernaam; in de GS-, G-, FND- en ASM-tabellen staat de korte naam uit `korte_namen`. Daardoor heeft dezelfde code in één document twee namen: in `verantwoordelijkheden` heet ACT-05.3 in de kolom (r.172) "Escalatie melden aan de orchestrator" en inline (r.265) "escalatie melden aan Dr. Evil"; GOV-06 heet in de kolom (r.270) "Akkoord bouwcontract per slice (API-contracten, of bij P1 het templatecontract)" en inline (r.207) "akkoord bouwcontract per slice"; ACT-03.1 heet in de kolom (r.138) "Deliverable ter goedkeuring indienen" en inline in `capabilities-en-skills` r.31 "document ter goedkeuring indienen". Van de 84 activiteiten wijkt de kolomnaam bij 42 af van `korte_namen`. De SPEC staat beide toe ("korte naam ... of de naam/titel van het element"), dus geen fout.
- Voorstel: kies per document één vorm; de korte naam is leesbaarder en gelijk aan wat inline staat.

**K25-08 (opmerking)** Twee plekken met een vervolgstap of voorbeeld dat net buiten de bron valt.
- Wat: (a) `werk/agentprofiel-atlas.md` r.29 (§2 rij 7, TL-04) en `werk/skill-specificaties.md` r.104 (`architect-api-contracts`, werkwijze 7): "Verandert het bestand, dan maakt Atlas de leesbare versie opnieuw en vervalt jouw kaart." ASM-53 zegt alleen: "Maakt Atlas de leesbare versie opnieuw, dan vervalt de kaart" en dat een wijziging zonder nieuwe leesbare versie door controle 2 gevangen wordt. In de Atlas-rij staat de zin onder het label "Besloten ... A (ASM-49 ... bevestigd)"; in `skill-specificaties` r.461 (`quality-gates`) is wat Dr. Evil bij een falende controle doet wel gelabeld als "afgeleid, nog niet besloten". (b) `werk/skill-specificaties.md` r.108 en r.119: het voorbeeld heet "(`v013-voorstel` §3.2)", maar de OpenAPI-regels met `x-bron: AC-02.1` en `x-bron: BR-02` en het P1-voorbeeld (*Productpagina*, `allergens`, BR-03) staan daar niet; dat laatste komt uit de specificatie van 0.11. Melding D-6 noemt alleen het voorbeeld in `vragen-en-akkoordrondes`.
- Voorstel: (a) zet "(afgeleid, nog niet besloten)" achter de eerste zin in de Atlas-rij en bij werkwijze 7, of schrap "Verandert het bestand, dan maakt Atlas ...". (b) schrijf "naar het voorbeeld in `v013-voorstel` §3.2" en markeer de rest als illustratie.

**K25-09 (opmerking)** Kleine punten.
- `werk/wijzigingen.md` r.39: kolom 3 (*Versie*) van de regel CHG-025 zegt "weergaven 0.13, pagina 0.6"; de rijen CHG-017 t/m CHG-024 hebben daar het modelnummer (0.10, 0.11, 0.12, 0.13). Voorstel: "0.13".
- `werk/activiteit-skillmatrix.md` r.8: de kop heeft nog twee rijen met het label *Status* (de statusregel en de uitleg van de skillstatus); zelfde punt als K-12 in `controle-chg020`, nog niet hersteld. Voorstel: de tweede rij *Skillstatus* noemen.
- `werk/verantwoordelijkheden.md` r.55: "het verschil is gemeld voor een volgende wijziging van het register" verwijst naar een melding die Carlo niet kan lezen; `register-gaten-0-13` (A-6) bestaat nu. Voorstel: "zie `register-gaten-0-13`, A-6".
- `werk/organisatie.md`, `werk/skill-specificaties.md` en `werk/agentprofiel-atlas.md` verwijzen naar `v010-voorstel` en `v011-voorstel`, die niet in `api/` staan (bestaande verwijzingen uit 0.10/0.11, hier ter volledigheid).

**K25-10 (opmerking)** `werk/register-gaten-0-13.md` en de meldingen van de makers.
- Wat: het gatenoverzicht is nieuw (tijdens de controle verschenen) en wordt genoemd in `wijzigingen` r.39; het moet dus bij de indiening meegaan, anders is die verwijzing dood. Het bevat alle meldingen van de makers (A-1 t/m A-10, B-1 t/m B-4); er ontbreekt niets. Twee kleine onnauwkeurigheden: (1) A-3 zegt dat B-19 "alleen in de lijst met korte namen" staat; B-19 staat ook in `meta.status` van het register en in `korte_namen`; alleen CHG-025 ontbreekt echt. (2) De legenda in dit document is korter dan in de andere documenten en eindigt met "De volledige lijst staat in `codes-en-namen`" zonder UC/AC/BR/FR; geen probleem voor een document ter informatie.
- Voorstel: neem K25-02 (dekking van de skills, A-4) en K25-06 (legenda, A-10) als verwijzing op in `register-gaten-0-13` en corrigeer A-3 in de tekst.

**K25-11 (opmerking, leesbaarheid)** Alle acht weergaven.
- Wat: `namen.py` voegde 8.078 korte namen in (organisatie 1.288, verantwoordelijkheden 1.332, skill-specificaties 1.328, enz.). In tabelcellen met veel codes (bijvoorbeeld `werk/agentprofiel-atlas.md` r.45–49, `werk/organisatie.md` r.133–136, `werk/verantwoordelijkheden.md` r.54) staan tot zes namen achter elkaar in één cel, in drie vormen: "(naam)", "– naam" en "; naam". De inhoud blijft juist (ik reproduceerde de uitvoer van het script exact), maar sommige cellen worden zwaar om te lezen. De SPEC (regel 7 en ASM-55) vraagt dit; het is dus een gevolg van het besluit, niet van de makers.
- Voorstel: geen actie nodig voor deze indiening. Overweeg bij de volgende CHG de regel "eerste keer per alinea" te versoepelen voor cellen met meer dan drie codes.

## Beoordeling van de meldingen van de makers

| Melding | Oordeel | Toelichting |
| --- | --- | --- |
| A-1 en D-1 (ASM-36 tegenover ASM-44) | terecht | ASM-36 zegt nog "to-tickets blijft"; ASM-44 (bevestigd) zegt "beschikbaar, niet vereist". Het register heeft bij ASM-36 al een `wijziging_0_12`-notitie (CHG-021: B-1), dus de weergaven volgen ASM-44 en tonen de oude zin onder *Stand 0.11*. Herstel van de zin zelf in het register is aan de volgende CHG (`register-gaten-0-13` A-1). |
| A-2 en B-5 (B-19 en CHG-025 staan niet in het register) | gedeeltelijk | Alleen CHG-025 ontbreekt. B-19 staat in `korte_namen` en in `meta.status` van het register (K25-10). |
| A-3 en D-3 (ROL-04 `uit` noemt OpenAPI niet) | terecht | `rollen` ROL-04, veld `uit`: "bouwcontract (API-contracten, of bij P1 het templatecontract; ...)" zonder OpenAPI; ROL-01, ACT-01.17, ACT-02.8 en GOV-06 hebben het wel. De weergave beschrijft ROL-04 volgens ACT-01.17 en B-17, met labels. |
| A-4 (legenda mist K en lokale codes) | terecht | Zie K25-06. |
| A-5 en D-5 (contextverslag: ASM-42 tegenover `prc-04`) | terecht | `api/prc-04.md` r.57: "op het eigen issue van de vrager"; ASM-42: "op het issue waarop de uitvoerder de stap doet". Bij de toets zijn ze gelijk. |
| A-6 | niet te toetsen | Gaat over het werkproces van de maker; de versieregel klopt nu met de tekst. |
| B-1 (dekking korter dan koppelingen) | terecht | Zes skills (zie K25-02). De weergave zegt het in K25-02 deels verkeerd. |
| B-2 (verwijzing in vier skills staat alleen bij `vragen-en-akkoordrondes`) | terecht | `requirements-analysis`, `uml-use-cases` en `architect-architecture-choice` hebben in het register geen verwijzing; `architect-use-case-review` noemt hem alleen onder `afhankelijkheden`. De weergaven nemen de verwijzing over uit `v012-voorstel` §9 en melden dat. |
| B-3 (*Per profiel*: skills afgeleid) | terecht, maar niet verwerkt in het document | Zie K25-01. |
| B-4 (ASM-36 tegenover ASM-44) | terecht | Zie A-1. |
| C-1 (ACT-02.6 zonder C terwijl GS14 met ROL-01) | terecht | Register: ACT-02.6 `C: []`; `grillmomenten` GS14 `met: ROL-01`. De tabel volgt het register en meldt het verschil. |
| C-2 (ACT-01.20 en ACT-02.53 noemen de revisiecontrole niet) | terecht | Beide `koppelingen` hebben geen OpenAPI-regel; alleen ASM-52 en de criteria van GOV-06. In `verantwoordelijkheden` staat de controle met het label ASM-52. |
| C-3 (controle 1 is zelfcontrole; controle 2 toetst alleen de revisie) | terecht | Geen fout; staat als "afgeleid, nog niet besloten" in de weergave en als B-2 in `register-gaten-0-13`. |
| C-4 (ACT-04.55 met controleur) | terecht | Register: `controleur: ontvanger (ACT-04.56)`; de weergave telt de rij als 41e en labelt de afleiding. |
| C-5 (alleen G-02.8 heeft `beslisser`) | terecht | Gecontroleerd in `beslissingen`. |
| D-2 (`complain` en `suggestion-box` niet in het register) | terecht | Niet in de 39 skills van `skills`; bekend sinds 0.10, de weergave laat het zo. |
| D-4 (wat Dr. Evil doet als controle 2 faalt) | terecht | ASM-52 zegt het niet; de weergave labelt het. |
| D-6 (voorbeeld is verzonnen) | terecht, maar onvolledig | Zie K25-08 (b): ook het voorbeeld bij `architect-api-contracts` wijkt af van de bron. |

Niet gemeld maar wel gevonden: K25-01, K25-02 (het onjuiste deel), K25-03, K25-04 en de punten in K25-05 t/m K25-09.

## Wat ik niet kon toetsen

- De werking van skills en de feitelijke koppeling van skills aan agents (OPEN-11); de weergaven zeggen dat zelf ook.
- Of de kaart- en comment-ID's in de tekst kloppen op het issue (alleen naast `api/` gelegd; `0e24368a` ontbreekt daar, K25-03).
- Of Atlas het hulpmiddel voor de leesbare versie zonder wijziging van het project kan draaien (ASM-51); dat is een bevestigde aanname en volgt de feitencheck op WEB-25.
- De inhoud van het goedgekeurde model 0.13 zelf (B-17, B-18, B-19); ik heb alleen getoetst of de weergave trouw is.
- Of Carlo de dichtheid van de korte namen prettig leest (K25-11).
- Pagina 0.6 (aparte controle).

## Conclusie

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen en de weergaven volgen het register 0.13 trouw: tellingen, skillstatus, RACI, goedkeuringsmomenten, grill-momenten, OpenAPI en de aannames ASM-40 t/m ASM-55 kloppen, statusregels en revisies zijn volgens de SPEC, en `prc-03..06` en `voorstellen` zijn inhoudelijk gelijk aan `api/`. Ik raad aan om vóór de upload K25-01 t/m K25-04 te herstellen (twee zinnen, een citaat en acht regels met namen), `register-gaten-0-13` mee te laten gaan en K25-02 en K25-06 daarin op te nemen.

## Herstel (Socrates, 2026-10-31)

| Punt | Wat er is gedaan |
| --- | --- |
| K25-01 | Zin in *Per profiel* vervangen: `vragen-en-akkoordrondes` erbij in 0.12 (afgeleid, nog niet besloten), bouwcontract in 0.13. |
| K25-02 | Zin in §2 vervangen door een verwijzing naar `register-gaten-0-13` A-4; het `paperclip`-voorbehoud bij CAP-01 weggehaald (opgelost in 0.12). De historische regel in de versie van 0.11 blijft staan. |
| K25-03 | `organisatie` citeert nu hetzelfde als `wijzigingen`: comment `0e24368a`, "Daarna de overzichten en pagina 0.6" (letterlijk, zonder de vetgedrukte opmaak). |
| K25-04 | `namen.py` zet geen naam meer achter een code in een reeks of paar (–, t/m, en, of, komma, schuine streep). Opnieuw gedraaid op de versies van vóór de namen. Daardoor staan er ook veel minder namen (K25-11). |
| K25-05 | Dubbele woorden en namen binnen citaten met de hand weggehaald (`organisatie`, `proces-catalogus`, `verantwoordelijkheden`, `skill-specificaties`, `agentprofiel-atlas`, `activiteit-skillmatrix`, `prc-03`, `prc-04`). |
| K25-06, K25-07, K25-11 | Niet aangepast in deze ronde; staan in `register-gaten-0-13` (A-10). |
| K25-08 | (a) "afgeleid, nog niet besloten" bij de zin over een gewijzigd bestand in het profiel van Atlas en in `architect-api-contracts`; (b) het voorbeeld heet nu "naar het voorbeeld in `v013-voorstel` §3.2; de details zijn een illustratie". |
| K25-09 | Versiekolom CHG-025 = 0.13; tweede *Status*-rij heet nu *Skillstatus*; verwijzing naar `register-gaten-0-13` A-6 in `verantwoordelijkheden`. De oude verwijzingen naar `v010-`/`v011-voorstel` blijven (die documenten staan op het issue). |
| K25-10 | `register-gaten-0-13` gaat mee bij de indiening; A-3 gecorrigeerd; K25-02 en K25-06 erbij genoemd. |

Na het herstel is er geen nieuwe controle door een aparte agent gedaan.
