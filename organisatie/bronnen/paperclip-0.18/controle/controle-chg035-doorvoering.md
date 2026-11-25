# Controle doorvoering CHG-035 (model 0.18)

Oordeel: **doorvoering klopt**. Geen blokkerende bevindingen en geen ontbrekende rij. Er zijn 2 waarschuwingen (K-01, K-02), die met een kleine correctie in het register zijn te herstellen, en 4 opmerkingen. Het model is niet inhoudelijk getoetst op wat buiten de bestanden ligt: de werking in Paperclip (agents, routines, wake-gedrag) is `niet te beoordelen`.

Methode: `out-*.md` naast `19-*.md` gelegd, het register als YAML geparsed (js-yaml 4.3.1) en veld voor veld vergeleken met `345-voorstel-model-chg035.md` §3.

## 1. Rijen uit §3 doorgevoerd

| § | Resultaat | Bewijs |
|---|---|---|
| 3.1 meta, doelen, lanes | voldoet | `meta` 0.18, status met B-27, kaart `835d7148`; scope-tekst letterlijk; D4 `gedekt_door: [PRC-10]` met `opmerking`; lanes producent, ontwerper, vrager en eigenaar van de taak zoals voorgesteld; `goedgekeurd` en `besluiten` B-26 en B-27 erbij |
| 3.2 rollen en agents | voldoet | ROL-01, 02, 04 `wijziging_0_18`; ROL-06/07/08 en AGT-05/06/07 `status_chg035`; AGT-06 en 07 `as-is`; AGT-05 `scope: gepauzeerd`; AGT-03 erbij (met extra ", TL-09 gepauzeerd", zie K-05) |
| 3.3 systemen | voldoet | GitHub-tekst vervangen (oude tekst in `wijziging_0_18`); Bugbot gepauzeerd; Claude Code nieuw met de voorgestelde velden |
| 3.4 processen | voldoet | PRC-01 en 02 `afhankelijkheden`; PRC-04 `doel`, `start`, `wijziging_0_18` (naam ongewijzigd); PRC-07 `einde`; PRC-09 `status_chg035`; PRC-10 volledig, `maximum` letterlijk |
| 3.5 activiteiten, beslissingen, koppelingen | voldoet | 22 ACT-09, 13 G-09 en 22 koppelingen gepauzeerd; ACT-10.1 t/m 10.7 en G-10.1 nieuw; 7 nieuwe koppelingen (RACI, CAP en skills precies zoals de tabel; G-10.1 heeft geen koppeling, zoals voorgesteld) |
| 3.6 goedkeuringen | voldoet | GOV-16: processen, subproces, informatie, criteria, bij_goedkeuring, bij_afwijzing, escalatie en label; GOV-12 `processen`; GOV-08 alleen `wijziging_0_18` |
| 3.7 capabilities | voldoet | CAP-28 t/m 34 gepauzeerd; CAP-14, 15, 20 alleen `wijziging_0_18` |
| 3.8 aannames en open vragen | voldoet | ASM-03, 08, 12, 63, 65 t/m 67, 69 t/m 72; ASM-73 t/m 78 nieuw met `stand: bevestigd`; OPEN-18, 20 t/m 23 geparkeerd of gepauzeerd; OPEN-24 t/m 30 nieuw; OPEN-26, 27, 28, 30 beantwoord volgens `AKKOORD.md`; OPEN-24, 25, 29 open. ASM-64 en PRP-045/046/047 ongewijzigd |
| 3.9 skills | voldoet | precies de 15 genoemde skills `ongebruikt` met `status_voor_chg035`; geen enkele ontkoppeld of verwijderd; de zes skills van Atlas en `architect-clarification` hebben hun notitie; dekking van ACT-10.x erbij bij delivery-management, backlog-management, quality-gates en paperclip |
| 3.10 korte namen | voldoet | alle nieuwe namen staan in `korte_namen` en in `out-codes-en-namen.md` (607 tegenover 584 rijen: verschil zit alleen in oude rijen die in het register al anders stonden) |
| 3.11 procesbeschrijvingen | voldoet | prc-01 en prc-02: Einde, Relaties en historieregel; prc-04: Status, Trigger, lanes, routering r.51, 52, 55, nieuwe rij, alinea "Carlo als vrager", diagram, historie; prc-09: statusregel en historie; prc-10 nieuw |
| 3.13 bevindingen, voorstellen, wijzigingen, WEB-152 | voldoet | FND-061 t/m 087 (27 stuks) en PRP-059 t/m 071; regel CHG-035 bij PRP-045, 046, 047, 051, 057, 058; één regel CHG-035 in `wijzigingen`; kopie op WEB-152 gemarkeerd als vervallen |

Niets verwijderd: in het register zitten alleen toegevoegde of gewijzigde velden volgens het voorstel (geen `DEL` in de structurele vergelijking); in de markdown zijn alleen vet-markeringen en 2 lege regels aan het einde van `prc-09` en `wijzigingen` weggevallen.

## 2. Register

- YAML geldig; alle 20 secties aanwezig.
- ID's uniek binnen rollen, agents, processen, activiteiten, beslissingen, goedkeuringen, capabilities, aannames en open vragen; 85 skillnamen uniek; geen dubbele koppelingen.
- Verwijzingen: de enige nieuwe niet-bestaande verwijzing is de verzamelnotatie "ACT-10.x" in `wijziging_0_18` (geen fout). Alle andere ontbrekende ID's (ACT-01.19, GOV-03 enz.) zijn vervallen ID's van vóór 0.18. Alle koppelingen wijzen naar een bestaande activiteit, capability en skill.
- PRC-10, ACT-10.1 t/m 10.7 en G-10.1 komen overeen met `out-prc-10.md` in stappen, uitvoerders (R, A, beslisser, C, I), beslissingsroutes, `maximum` (2 keer terug, daarna GOV-08; wachten eindigt bij ACT-10.6 of 10.7 of het weekmoment; bouwlus bij Carlo) en GOV-16 (zes onderdelen). De labels wijken af, zie K-01.
- Nieuwe `korte_namen`, ASM, OPEN, FND en PRP komen overeen met `out-codes-en-namen.md`.

## 3. "Klaar als" WEB-344

1. **Voldoet.** Geen niet-gepauzeerde activiteit, beslissing, koppeling (R, A, beslisser, controleur, C, I, escalatie), goedkeuring, grillmoment of proces noemt AGT-05/06/07 of ROL-06/07/08 als uitvoerder of controleur. Treffers zijn alleen: ACT-09 en G-09 (gepauzeerd), PRC-09 `rollen` (gepauzeerd), lanes (elke vermelding gemarkeerd `gepauzeerd (CHG-035)`), Bugbot (gepauzeerd) en `wijziging_0_xx`-notities. Geen koppeling buiten ACT-09 gebruikt een `ongebruikt` skill of CAP-28 t/m 34.
2. **Voldoet.** PRC-01, 02, 04 en 07 lopen tot "Backlog gereed" (PRC-04: tot het antwoord) zonder verwijzing naar Neo, Trace of Sentinel die niet als gepauzeerd gemarkeerd is (`out-prc-01.md`, `out-prc-02.md`, `out-prc-04.md`; PRC-07 alleen in het register). In `out-prc-04.md` r.57 staat "Neo" met de markering "het deel over Neo is gepauzeerd". De woorden "developers" in de historische statusregels van prc-01, 02 en 04 (FND-043, CHG-033) zijn oude tekst.

## 4. Consistentie statussen

Overal waar de geldende status staat is dit 0.18 / B-27 / kaart `835d7148`: register (meta, kop, tabel), prc-01, 02, 04, 10, bevindingen, voorstellen, codes-en-namen, wijzigingen (CHG-035-regel en versieregel) en `out-status.md` (r27 naar r28). `out-prc-09.md` noemt de pauze (B-26, B-27) maar behoudt de status "Goedgekeurd ... Versie 0.6", zoals voorgesteld. Geen resterend "Concept" of "Ter goedkeuring" bij een geldende status.

## 5. Weergaven

Zoals afgesproken nog niet bijgewerkt en dus achterlopend op 0.17: proces-catalogus, verantwoordelijkheden, agent- en activiteit-skillmatrix, capabilities-en-skills, skill-specificaties, paperclip-mapping, uitbreidingsgids, organisatie, agentprofiel-atlas en de pagina. `out-wijzigingen.md` zegt dit ook zelf ("horen nog bij 0.17").

## Bevindingen

### K-01 (waarschuwing) Labels in het register wijken af van `prc-10`
Bewijs: `out-prc-10.md` zet na het akkoord B-27 de labels op **B**: ACT-10.1 "B (inhoud); B (één feature tegelijk, ASM-74, B-27)", ACT-10.2 "B; A; B (status, PRP-071, B-27)", GOV-16 "B (geen telling, B-27)". In `out-register.md` staan nog: `activiteiten[ACT-10.1].label` "B (inhoud); V (één feature tegelijk, ASM-74)", `ACT-10.2` "B; A (ASM-73, ASM-78); V (status)", `goedkeuringen[GOV-16].label` "... V (geen kaart, geen telling, PRP-059)". Ook G-10.1 en ACT-10.7 staan als **V** in beide documenten, terwijl kaart 2 (één feature tegelijk) en kaart 12 (onvolledig epic) goedgekeurd zijn. Verder staan in `out-prc-04.md` de nieuwe routeringsrij en de alinea "Carlo als vrager" nog als **V**; daar dekt alleen de losse notitie onder de status het af.
Herstel: de drie register-labels gelijk trekken aan `prc-10` (V wordt B met B-27) en per label in G-10.1, ACT-10.7 en `prc-04` kiezen: of overal **B (B-27)**, of overal **V** laten. Eén regel `wijziging_0_18` is genoeg.

### K-02 (waarschuwing) GOV-08 noemt PRC-10 niet
Bewijs: `out-register.md` `goedkeuringen[GOV-08].processen` somt PRC-04, 05, 06, 01, 02 en PRC-09 op, maar niet PRC-10, terwijl ACT-10.7 (koppeling `escalatie: GOV-08 (2e keer onvolledig)`), `processen[PRC-10].maximum` en `out-prc-10.md` ("Onvolledige overdracht") naar GOV-08 verwijzen. De doorvoering volgt hier §3.6 ("GOV-08 ongewijzigd"); de leemte zit in het voorstel zelf.
Herstel: bij GOV-08 `processen` "PRC-10 (een epic voor de 2e keer onvolledig, ACT-10.7)" toevoegen. Dat valt binnen het goedgekeurde besluit van kaart 12.

### K-03 (opmerking) Korte statuswaarde bij skilldekking
Bewijs: 17 `dekking`-regels bij skills hebben `status_chg035: gepauzeerd` zonder datum en CHG-ID (bijvoorbeeld `skills[backlog-management].dekking`, `quality-gates`, `delivery-management`, `paperclip`, `vragen-en-akkoordrondes`); overal elders staat "gepauzeerd (2026-11-18, CHG-035, B-26)". §3 vraagt datum en CHG-035 bij beide statuswaarden. Ook `geparkeerd (2026-11-18, CHG-035, B-27)` bij OPEN-18, 21, 22, 23 is een nieuwe waarde die §3 niet noemt (wel in §3.8 "geparkeerd").
Herstel: dekking-waarden gelijk trekken, of de afspraak vastleggen dat `geparkeerd` bij open vragen hoort (PRP-061).

### K-04 (opmerking) Kleine toevoegingen buiten §3
Geen inhoudelijke afwijking, wel niet voorgeschreven:
- Notitie "Met kaart `835d7148` is CHG-035 goedgekeurd (B-27); de voorstellen (V) ... gelden nu als besloten" in `out-prc-04.md` en `out-prc-10.md`, niet in prc-01, 02 of 09.
- `out-codes-en-namen.md`: "(gepauzeerd sinds 2026-11-18, CHG-035)" bij PRC-09, ROL-06/07/08 en AGT-05/06/07 (§3.10 noemt alleen nieuwe namen).
- `out-register.md` `meta.geldend`: dubbele haakjes "0.18 (Goedgekeurd (2026-11-18, ...))"; PRC-10 `beschrijving` verwijst naar WEB-19 in plaats van WEB-345 (logisch na uploaden, zie of dat klopt); `out-prc-10.md` een extra punt en B-27-aanvullingen in de beantwoorde OPEN-26 en OPEN-30.
- Op `out-152-prc-09.md` staat de vervallen-regel bovenaan, maar de statusregel (r.4) zegt nog "Goedgekeurd (2026-11-11 ...)". Voorstel noemt alleen de markering, dus conform; wel lezen sommigen de statusregel eerst.

### K-05 (opmerking) Verwijzingen in `out-bevindingen.md`
- FND-065, 066, 083 en 085 hebben als stand "besloten (B-27), uitvoering via PRC-08 / ACT-01.56". ACT-01.56 (regelbestanden opstellen) is alleen relevant voor FND-084 en FND-086; bij de andere hoort alleen PRC-08.
- FND-063, 064 en 073 staan als "opgelost door CHG-035 (B-27)" (zo in voorstel §4.1), maar de oplossing is "herstellen vóór weer aanzetten" (PRP-063) en is nog niet uitgevoerd. De stand kan beter "besloten, herstel vóór weer aanzetten" zijn.
- `out-register.md` AGT-03 `wijziging_0_18` bevat naast de voorgestelde tekst ook "TL-09 gepauzeerd"; consistent met voorstel §2.

### K-06 (opmerking) Niet te toetsen
Het `.bpmn`-bestand en de pagina (`bpmn-eindontwerp`) zijn niet in de map en dus niet gecontroleerd. De Mermaid van `prc-10` en `prc-04` is alleen gelezen, niet gerenderd. De werking van agents, routines en de wake-regel (ASM-73, OPEN-29) is `niet te beoordelen` tot Carlo of Dr. Evil dat bevestigt.

## Herstel door Socrates (2026-11-18)
- K-01: labels ACT-10.1, ACT-10.2 en GOV-16 in het register op **B (B-27)**, gelijk aan `prc-10`. Overige **V**-labels van CHG-035 gelden als besloten via de notitie in `prc-04` en `prc-10`.
- K-02: GOV-08 `processen` aangevuld met PRC-10 (ACT-10.7, 2e keer onvolledig; kaart 12).
- K-03: de 17 dekkingsregels hebben nu "gepauzeerd (2026-11-18, CHG-035, B-26)". `geparkeerd` bij open vragen blijft; de conventie volgt met PRP-061.
- K-05: FND-063, 064, 073 → "besloten (B-27): herstel vóór weer aanzetten (PRP-063)"; FND-065, 066, 083, 085 → "uitvoering via PRC-08 (WEB-352)".
- K-04, K-06: geen herstel nodig. Weergaven, pagina en overzichtsdiagram volgen als aparte wijziging.
Register r29, bevindingen r28. Oordeel na herstel: **doorvoering klopt**.
