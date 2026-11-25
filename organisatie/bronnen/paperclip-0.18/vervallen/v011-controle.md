> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Modelcontrole 0.11 (CHG-019): onafhankelijke controle

Datum: 2026-10-30
Controleur: onafhankelijke controleur (skill `bpmn-modelcontrole`, conventies uit `bpmn-conventies`). Ik heb alleen gelezen en dit verslag geschreven.

## Wat ik controleerde

Scope: `concept/v011-voorstel.md`, `v011-register.md`, `v011-prc-01.md`, `v011-prc-02.md`, `v011-prc-03.md`, `v011-paperclip-mapping.md`, `v011-uitbreidingsgids.md`, vergeleken met de goedgekeurde stand 0.10 in `basis/` (diff per bestand).

Methode:
- YAML geparsed met js-yaml (één blok per register, beide geldig); alle `id`-velden op uniciteit getoetst.
- Nieuwe ID's gezocht in alle bestanden van `basis/` en `concept/`.
- Mermaid van PRC-02 als graaf doorgerekend (bereikbaarheid, uitgangen) en knopen vergeleken met tabel en register.
- Antwoorden van Carlo woord voor woord naast B-13 en het voorstel gelegd.
- Feiten getoetst aan de `SKILL.md` van `delivery-management`, `weekmoment` en `escalation-management`, aan `paperclip/SKILL.md` en `references/api-reference.md`, `workflows.md`, `routines.md`, en met een zoekopdracht in de Paperclip-koppelingen.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Register is geldige YAML, geen dubbele ID's | voldoet | beide registers: 1 yaml-blok, 0 dubbele `id` |
| Nieuwe ID's uniek en niet in 0.10 gebruikt (B-13, ASM-30..35, OPEN-15, G-02.8, FND-035..037, PRP-040/041, M-14, CHG-019) | voldoet | in `basis/` komen ze alleen voor als "eerstvolgende vrije ID" in `uitbreidingsgids`; hoogste ID's in 0.10 waren B-12, ASM-29, OPEN-14, G-02.7, FND-034, PRP-039, M-13, CHG-018 (gereserveerd) |
| ID's consistent gebruikt in register, prc-01/02/03, mapping, voorstel | voldoet met opmerkingen | zie K11-01, K11-09, K11-10 |
| FND/PRP staan in het voorstel, verwijzingen kloppen | voldoet | FND-035..037 en PRP-040/041 staan in `v011-voorstel` §2-4; register verwijst ernaar |
| Uitbreidingsgids §6 (vrije ID's) | voldoet | ASM-36, OPEN-16, FND-038, PRP-042, CHG-020, M-15, G-02.8 hoogste; CHG-017/018 toelichting klopt met `basis/wijzigingen.md` |
| PRC-02: drie starts, G-02.8, geen doodlopende paden | voldoet met waarschuwing | zie hieronder en K11-08 |
| Elke node in diagram, tabel en register en omgekeerd | voldoet | alle ACT-02.x en G-02.x komen in alle drie voor (G-02.4 bestond ook in 0.10 niet) |
| Bestaande besluiten ongewijzigd (B-06, B-07, B-12, TL-V4, TL-V7, PRP-001, 4 akkoorden UC1) | voldoet | register-diff toont alleen B-13 als nieuwe regel; geen GOV-wijziging in PRC-01; PRP-001 expliciet behouden (ASM-31) |
| B-09: alleen herinnering gewijzigd en gemeld | voldoet met waarschuwing | gemeld in B-13 `wijzigt` en voorstel §1; zie K11-11 |
| Elke antwoord van Carlo terug als B, rest als A of V | voldoet niet geheel | K11-05, K11-06 |
| Feiten over skills Dr. Evil | voldoet | letterlijke citaten in FND-037 en register kloppen met de drie `SKILL.md` |
| Feiten over skill `paperclip` | voldoet met waarschuwingen | K11-03, K11-04, K11-12 |
| Taal Nederlands, kort, geen verzonnen feiten | voldoet met opmerkingen | K11-13 t/m K11-15 |

## Bevindingen

### Blokkerend

**K11-01 · blokkerend · `v011-voorstel.md` §1 (rij OPEN-14), §4 (PRP-041), `v011-paperclip-mapping.md` (M-11 en rij "Design systeem en paginaontwerp") tegenover `v011-prc-02.md` r.65 en `v011-register.md` r.258 (ACT-02.16)**
Het voorstel zegt: "ACT-01.52, ACT-01.28 en ACT-02.16 verwijzen naar Claude Design", en PRP-041 en M-11 noemen ACT-02.16. In het concept is ACT-02.16 niet gewijzigd: de output zegt nog "grafisch of in code met mock data", de plek zegt nog "bijlage, link of branch in de repo ⚠ M-11 (OPEN-14)", er is geen `wijziging_0_11`. Het voorstel §5 (UC2) noemt ACT-02.16 ook niet. Het voorstel beweert dus een wijziging die niet in het model staat, en OPEN-14 staat in PRC-02 nog als open.
Herstel: pas ACT-02.16 aan zoals ACT-01.28 (grafisch in de regel in Claude Design, B-13; link of projectnaam plus export als bijlage, V PRP-041; label `B (B-13)`, `V (PRP-041)`), in register (met `wijziging_0_11`) en `v011-prc-02` (tabel, §Nieuw in 0.11 en wijzigingsregel). Voeg ACT-02.16 toe aan voorstel §5 (UC2). Of schrap ACT-02.16 uit voorstel, PRP-041 en mapping.

### Waarschuwingen

**K11-02 · waarschuwing · `v011-voorstel.md` §3 (PRP-040)**
PRP-040 bundelt drie losse zaken: (1) akkoord via kaart, geen decisions en geen approval-stage (antwoord op Carlo's vraag); (2) Atlas toetst via een toets-issue in plaats van review-stage (M-9); (3) een nog te maken skill `architect-use-case-review` en een regel in de instructies van Socrates. Alleen (1) beantwoordt wat Carlo vroeg. Keurt hij PRP-040 goed of af, dan beslist hij over alles tegelijk, en de tabellen in prc-01/02 en mapping tonen (2) al als modelstand (met label V).
Herstel: splits in PRP-040 (kaart, antwoord OPEN-10) en een nieuw PRP-042 (toets-issue, oplossing M-9); pas de ID-reeks in uitbreidingsgids §6 en alle verwijzingen aan (ACT-01.23, ACT-02.13, M-9, voorstel §3, §5, §7, wijzigingsregel). Of houd het in één voorstel en laat Carlo er in de kaart twee items van maken.

**K11-03 · waarschuwing · `v011-voorstel.md` §3 (De toets van Atlas), `v011-paperclip-mapping.md` rij "Review door een andere agent"**
Het voorstel zegt dat de skill `paperclip` aparte toets-issues "afraadt" en weegt dat nadeel "licht". De skill is stelliger: `references/api-reference.md` r.456 zegt "Do not model cross-agent review gates as bridge child issues, freeform comments, ad-hoc `request_confirmation` cards...", omdat dat de audit trail van het bronissue splitst en het gezag over wie beslist verslapt. Tegelijk beschrijft `SKILL.md` ("Delegating review tasks") juist een review-issue met `blockedByIssueIds` voor gedelegeerde reviews. Beide bronnen ontbreken of zijn te mild weergegeven. Carlo kan nu niet goed wegen.
Herstel: citeer r.456 en de reden, noem ook het alternatief dat de skill wel ondersteunt (review-stage gevolgd door een tweede stage `approval` met ROL-01; nadeel: één ja/nee voor het hele issue), en benoem het nadeel van PRP-040 niet als "licht" maar laat Carlo kiezen. Voeg zo nodig `V (alternatief)` toe.

**K11-04 · waarschuwing · `v011-voorstel.md` §3 tabel, rij "Ervaring"**
"Werkt al: alle akkoorden op WEB-19 liepen zo" (kaart met `request_item_verdicts`) botst met `basis/paperclip-mapping.md`: "Nu: interactie `request_confirmation` ... (zo liep GK-1)", en met `register` B-09 (kaart `e2fd31e9` was `ask_user_questions`). Niet alle akkoorden liepen via `request_item_verdicts`.
Herstel: schrijf "de meeste akkoorden sinds 0.5 (o.a. kaarten `2b7a6d2d` en `f261b9ac`)" en noem dat GK-1 een `request_confirmation` was, of schrap de zin.

**K11-05 · waarschuwing · `v011-register.md` r.1424 (OPEN-05 `beantwoord`) en `v011-voorstel.md` §1 rij OPEN-05 en §7**
Carlo zei alleen "wijs skills correct toe". Het register vult in: "skills die het model niet bij Atlas legt, gaan eraf". Dat staat niet in het voorstel en niet als ASM. In de kolom "Wat ik heb ingevuld (A)" staat "—", terwijl "correct = volgens de agent-skillmatrix van het model" en "wat niet in de matrix staat, gaat eraf" een interpretatie zijn. Het is ook onduidelijk wat "correct" geeft: het register zelf legt `to-tickets` en `paperclip-converting-plans-to-tasks` wél bij Atlas (Skills in het kort), terwijl `AGENTS.md` van Atlas het opdelen bij Dr. Evil legt (register r.928); `paperclip-board` en `paperclip-create-agent` komen in het model niet voor. De agent-skillmatrix zit niet in deze stap (overzichten volgen na akkoord), dus Carlo kan de uitkomst niet zien.
Herstel: voeg ASM-36 toe ("correct" = de agent-skillmatrix van het model; wat daar niet bij Atlas staat, gaat eraf) of vraag Carlo; benoem in het voorstel welke skills van Atlas dit raakt (paperclip-create-agent, paperclip-board, to-tickets, paperclip-converting-plans-to-tasks); label in voorstel en register als A. Werk uitbreidingsgids §6 bij.

**K11-06 · waarschuwing · `v011-voorstel.md` §1 rij OPEN-03 en §5; `v011-prc-02.md` r.50-56 (ACT-02.51), register ACT-02.51 en `label`**
Carlo: "als er nog 5 taken open zijn". Het model zegt "5 of minder" en labelt de drempel `B (B-13: drempel)`. "5 of minder" (in plaats van precies 5, of minder dan 5) is een interpretatie; alleen ASM-30 in het register noemt het, het voorstel §1 niet (de A-kolom noemt alleen "open" en "lopende slice").
Herstel: noem in voorstel §1 en in de label-kolom van ACT-02.51 en de Trigger-regel `A (ASM-30: 5 of minder)`; of vraag Carlo of "bij 5 open" ook "bij 4 open" betekent.

**K11-07 · waarschuwing · `v011-register.md` ASM-30 tegenover `v011-voorstel.md` §1 (rij OPEN-03)**
Het voorstel: "lopende slice = de slice die nu wordt gebouwd". ASM-30 (en prc-02): bij twee slices op het backlog "de laatst toegevoegde". Dat is niet dezelfde slice (de laatst toegevoegde is meestal de nog niet gebouwde). Ook "onderliggende issues van de epic" (ACT-02.51 input) is een aanname over de inrichting die nergens als feit staat.
Herstel: kies één definitie (bij voorkeur: de slice met de oudste nog open taken) en gebruik die in voorstel, ASM-30, ACT-02.51 en prc-02; noem de epic-structuur als A.

**K11-08 · waarschuwing · `v011-prc-02.md` G-02.8 en tabel, register G-02.8**
G-02.8 vraagt "Loopt er al een doorloop?" zonder te zeggen hoe Dr. Evil dat vaststelt en wanneer een doorloop eindigt (bijvoorbeeld bij "Backlog gereed, overdracht naar implementatie"). Ook loopt de lus "volgende doorloop" in het diagram alleen terug naar de dagstart (S), niet naar het weekmoment (W) of verzoek (V). Pad-controle verder in orde: S, W en V bereiken allemaal "Backlog gereed" en "Geen start"; de enige knopen zonder uitgang zijn "Geen start", PRC-04 (Q3) en PRC-06 (B6), net als in 0.10. Bovendien start Carlo's expliciete verzoek bij een lopende doorloop níet (ASM-33, labelled A); dat verschilt van B-13 "als ik er expliciet om vraag" en moet voor Carlo zichtbaar zijn in voorstel §1.
Herstel: voeg aan G-02.8 een criterium toe (bijvoorbeeld "er is een open epic of issue van PRC-02 voor dit project"; label A) en een eindconditie; noem in voorstel §1 rij OPEN-03 dat een verzoek tijdens een lopende doorloop wacht (ASM-33).

**K11-09 · waarschuwing · `v011-register.md` skills `weekmoment` (r.1011-1025) en `escalation-management` (r.985)**
Voorstel §7 en FND-037 zeggen dat `weekmoment` moet veranderen ("Herinner de gebruiker niet tussendoor" en de start van PRC-02 op maandag 04:00). In het register is bij `weekmoment` niets toegevoegd voor B-13. Bij `escalation-management` staat de nieuwe dekking op ACT-02.1 en ACT-02.51, maar het herinneringsbericht hoort bij ACT-02.2 en GOV-07 (dat staat wel bij `delivery-management`).
Herstel: voeg een `dekking`-regel voor `weekmoment` toe (activiteiten PRC-07, ACT-02.2, GOV-07; besluit B-13; bron de regel "Herinner de gebruiker niet tussendoor", feit 2026-10-30) en zet bij `escalation-management` ACT-02.2 en GOV-07.

**K11-10 · waarschuwing · `v011-register.md` r.19 (Skills in het kort), koppeling ACT-01.51**
`requirements-orchestration` staat in de tabel nog als "Bestaat", terwijl de `dekking` nu `uitbreiden` heeft (ACT-01.2) en `skl_status` van ACT-01.2 `uitbreiden` is. ACT-01.51 krijgt de taak "project aanmaken" (opm: "met de skill `paperclip`") maar `skl` blijft `[overdracht]`, zonder capability of skill voor het project aanmaken.
Herstel: zet de tabelstand op "Bestaat; moet worden uitgebreid"; voeg `paperclip` toe aan `skl` van ACT-01.51 (status bestaat, werking OPEN-15) of leg de koppeling met een OPEN-vraag vast.

**K11-11 · waarschuwing · `v011-register.md` r.81 (B-09)**
B-13 zegt in `wijzigt` dat B-09 verandert en het voorstel meldt het (§1, OPEN-09), maar B-09 zelf zegt nog "herinnert Dr. Evil hem pas op het weekmoment" en "te weinig klare taken", zonder verwijzing naar B-13. Wie alleen B-09 leest, ziet de verandering niet. Voorstel §6 ("Wat er niet verandert") noemt B-09 ook niet, wat goed is, maar §1 noemt het alleen in een tabelcel.
Herstel: voeg aan B-09 een veld `gewijzigd_door: "B-13 (0.11): herinnering elke werkdag om 09:00; de trigger is nu 5 open taken (ACT-02.51)"` toe, en zet de wijziging van B-09 als aparte regel bovenaan voorstel §1.

**K11-12 · waarschuwing · `v011-register.md` OPEN-15 (r.1432-1434)**
"de skill verwijst voor 'een nieuw project opzetten' naar CEO of manager in een referentiebestand dat in de skillmap ontbreekt" klopt niet met de skill die ik las: `SKILL.md` r.517 verwijst naar `references/workflows.md`, dat bestaat en een sectie "Project Setup (CEO/Manager)" heeft (r.7-12; ook `api-reference.md` r.777-). Wel waar: `POST /api/companies/{companyId}/projects` bestaat (r.790, r.1464), `repositoryUrls` registreert werkruimtes en maakt geen GitHub-repository aan (r.783-785), en een routine vraagt `assigneeAgentId` en `projectId` (api-reference r.1482; `routines.md` r.12, r.51-52: agents alleen eigen routines). De bewering over `canAssignTasks`, `canCreateAgents`, `canCreateSkills` kon ik niet toetsen (geen toegang tot de API-uitvoer).
Herstel: herschrijf als "de skill noemt een project opzetten een taak voor CEO of manager (`references/workflows.md`, Project Setup)" en laat het ontbrekende-bestand-deel weg; markeer de rechtenbewering als "niet getoetst door de controle".

### Opmerkingen

**K11-13 · opmerking · `v011-paperclip-mapping.md` rij "Verzoek van jou om een uitbreiding" en rij "Akkoord van de project owner"**
"Comment of issue voor Dr. Evil" (hoe Carlo zijn verzoek doet) en "één item per document (ook als het er maar één is)" zijn invullingen zonder label. Herstel: label `A` of `V`, of schrap de passages.

**K11-14 · opmerking · `v011-prc-02.md` r.8**
"Het percentage (15%) vervalt." In 0.10 stond geen percentage in het model (drempel was OPEN-03). Alleen de vraag aan Carlo noemde 15%. Herstel: "Niet als percentage maar als aantal (B-13)."

**K11-15 · opmerking · `v011-register.md` ASM-35, OPEN-09 `beantwoord`; `v011-prc-03.md` r.54**
(a) Carlo vroeg om "een bericht" om 09:00. ASM-35 maakt dat een comment op het lopende weekmoment-issue: een comment hoeft hem niet te melden en het weekmoment-issue bestaat pas na de eerste maandag. Dat is wel als A gelabeld, maar verdient een regel in voorstel §1 dat Carlo het kanaal mag kiezen. (b) OPEN-09 `beantwoord` zegt "geen termijn"; dat zei Carlo niet, het staat wel in ASM-35. Herstel: zet "geen termijn" als A (ASM-35) in `beantwoord`.

**K11-16 · opmerking · `v011-prc-03.md` r.79; OPEN-04 `beantwoord`; FND-036**
(a) Het open punt OPEN-10 in prc-03 noemt alleen "kaart of approval-stage", niet Carlo's vraag over decisions en niet PRP-040. (b) OPEN-04 had een tweede deel (staan de documenten in `docs/architecture/`?); Carlo beantwoordde dat niet. Het register schrijft het als feit uit `AGENTS.md` (juist als gedrag van de instructies), maar de vraag "staan ze in de repository van de klant" blijft een aanname. (c) FND-036 is in het voorstel als A gelabeld, een bevinding is F of A: schrijf "A (analyse van mij)". Herstel: pas de drie teksten aan.

## Niet te beoordelen

- Verwijzingen naar WEB-17 (rolanalyse V8), WEB-19 (kaarten, comments `f06fede2` en `a690e8f3`) en de feitencheck WEB-20/22/23/24: ik heb alleen de bestanden in de map.
- Rechten van Dr. Evil en Socrates (`canAssignTasks` enz.) en "geen routines" in de Paperclip-API (2026-10-30): geen API-toegang.
- FND-035: bevestigd voor het eerste punt. Een zoekopdracht in de Paperclip-koppelingen op "Claude Design" geeft alleen Amazon Bedrock en Anthropic (API/abonnement), geen Claude Design. Dat de tool voor claude.ai/design in een agent-run werkt, heb ik niet getest (en hoort bij PRC-08).
- Werking van de skills in de praktijk (OPEN-11); geen `.bpmn`-bestand, dus geen validatie.

## Wat klopt (kort)

- 4 akkoorden in UC1 (B-12, PRP-036), B-06, B-07, TL-V4, TL-V7 en PRP-001: ongewijzigd; alleen B-13 is nieuw in `besluiten`.
- Antwoorden van Carlo staan volledig in B-13 (OPEN-03: weekmoment maandag 04:00, 5 open taken in de huidige slice, verzoek; OPEN-04; OPEN-05; OPEN-09: werkdagen 09:00; OPEN-10: vraag naar decisions; OPEN-14: Claude Design, link of projectnaam, toegang agents).
- Citaten uit `delivery-management`, `weekmoment`, `escalation-management` kloppen letterlijk, ook "stap 5" (Wacht op de gebruiker). Skill `paperclip`: decisions ("same issue → issue-thread interaction; other issues or bundles → decision", 1-8 opties, 7 dagen standaard, 30 maximaal, de zes effecten), staleness bij nieuwe revisie, review-stage naar `done` (api-reference r.579) en routines/projecten kloppen.
- PRC-02: knopen en G's in diagram, tabel en register gelijk; alle drie starts komen via G-02.8 (of via ACT-02.51) bij ACT-02.1 of "Geen start".

## Eindoordeel

**Niet indienen.** Eén blokkerende bevinding (K11-01: het voorstel beweert een wijziging in ACT-02.16 die niet in het model staat). Na herstel daarvan en bij voorkeur K11-02 t/m K11-12 kan het concept worden ingediend; de opmerkingen K11-13 t/m K11-16 mogen bij dezelfde ronde mee.

---

## Hercontrole

Datum: 2026-10-30. Gecontroleerd na het herstel van K11-01 t/m K11-16 in `v011-register`, `v011-prc-01/02/03`, `v011-paperclip-mapping`, `v011-uitbreidingsgids` en `v011-voorstel`. Opnieuw gedaan: YAML-parse en ID-uniciteit van het register, zoeken van alle nieuwe ID's per bestand (ook of PRP-040/041/042 na de splitsing overal naar het juiste voorstel wijzen), Mermaid van PRC-02 als graaf en vergelijking met tabel en register, en de gewijzigde passages tegen de bronnen.

Technisch: het register is geldige YAML (1 blok, geen dubbele `id`; het nieuwe veld `gewijzigd_door` bij B-09 geeft geen fout). Alle ID's uit de eerste controle komen nog voor; nieuw zijn ASM-36 en PRP-042 (PRP-041 is nu de toets van Atlas, PRP-042 Claude Design). Uitbreidingsgids §6 is bijgewerkt (ASM-36/37, PRP-042/043, G-02.8) en klopt met het register. Alle ACT-02.x en G-02.x staan in diagram, tabel en register; S, W en V bereiken allemaal "Backlog gereed" of "Geen start".

### Status per eerdere bevinding

| ID | Status | Toelichting |
| --- | --- | --- |
| K11-01 | opgelost | ACT-02.16 staat in register (r.258) en `v011-prc-02` (r.66) op Claude Design, export (PRP-042), label B (B-13) en V (PRP-042); de OPEN-14-verwijzing is vervangen door FND-035; voorstel §5 noemt ACT-02.16 |
| K11-02 | opgelost | PRP-040 (kaart), PRP-041 (toets-issue) en PRP-042 (Claude Design) zijn gesplitst; verwijzingen in register, prc-01/02/03, mapping, voorstel en gids kloppen (geen PRP-040 meer waar PRP-041 of PRP-042 bedoeld is) |
| K11-03 | opgelost | voorstel §3 en mapping citeren letterlijk "Do not model cross-agent review gates as bridge child issues" (api-reference r.456, gecontroleerd) en geven alternatief (b) review-stage plus approval-stage; Carlo kiest |
| K11-04 | opgelost | de onjuiste zin is vervangen; de vervanging bevat een nieuwe niet-aantoonbare claim, zie K11-21 |
| K11-05 | opgelost | ASM-36 staat in register en voorstel (A-kolom) en noemt welke skills van Atlas weggaan; rest: K11-19 |
| K11-06 | opgelost | "nog 5 open = 5 of minder" staat als A in ASM-30, voorstel §1 en in de labels van ACT-02.51 |
| K11-07 | opgelost | voorstel, ASM-30 en prc-02 gebruiken dezelfde definitie ("de epic die het laatst op het backlog is gezet") |
| K11-08 | opgelost, met nieuwe fout | G-02.8 heeft een criterium (van ACT-02.1 tot "in backlog", ACT-02.17), ASM-33 en voorstel §1 ("Let op") zeggen dat een verzoek tijdens een doorloop niets start. Het herschreven diagram heeft wel een nieuw probleem: K11-17 |
| K11-09 | opgelost | `weekmoment` heeft een nieuwe dekking (ACT-02.2); `escalation-management` wijst naar ACT-02.2 in plaats van ACT-02.51 |
| K11-10 | opgelost | tabel "Skills in het kort": `requirements-orchestration` "Bestaat; moet worden uitgebreid (0.11: project aanmaken)"; ACT-01.51 heeft `skl: [overdracht, paperclip]` |
| K11-11 | opgelost | B-09 heeft `gewijzigd_door: B-13 (0.11)` |
| K11-12 | opgelost | OPEN-15, M-14 en voorstel §8 verwijzen naar `references/workflows.md` (Project Setup (CEO/Manager)); die bestaat. De bewering over `canAssignTasks` e.d. blijft voor mij niet te toetsen |
| K11-13 | opgelost | rij "Verzoek van jou" heeft label A (ASM-33); "één item per document, ook bij één document" staat nu als onderdeel van PRP-040 (V) |
| K11-14 | opgelost | "Het percentage (15%) vervalt" is weg; de vervangende zin is niet juist, zie K11-22 |
| K11-15 | niet opgelost | (a) niets in voorstel §1 over het kanaal van het bericht (ASM-35: comment op het weekmoment-issue); (b) `OPEN-09.beantwoord` in het register zegt nog "geen termijn" bij B-13 zonder A-label (prc-03 noemt het nu wel ASM-35). Opmerking; blokkeert niet |
| K11-16 | opgelost | OPEN-10 in prc-03 noemt nu de vraag over decisions en PRP-040; voorstel §1 zegt dat het tweede deel van OPEN-04 uit de instructies volgt (F). FND-036 blijft met label A staan: onschuldig |

### Nieuwe bevindingen

**K11-17 · waarschuwing · `v011-prc-02.md` Mermaid, laatste regel (`E -. "volgende doorloop: bij de volgende trigger" .-> G8`)**
De terugkoppeling gaat nu van "Backlog gereed" rechtstreeks naar beslissing G-02.8. Zonder trigger geeft G-02.8 (geen doorloop meer) "nee → ACT-02.1": de volgende wens start dan direct na het einde, zonder weekmoment, flowcheck of verzoek. Dat is niet wat het label zegt en botst met de drie triggers van B-13. In 0.10 liep de pijl naar de startgebeurtenis (S).
Herstel: laat de pijl weer naar de starts lopen (`E -.-> S`, eventueel ook W en V) of laat hem weg; een eindgebeurtenis hoeft geen uitgang te hebben.

**K11-18 · waarschuwing · `v011-register.md` r.1431 (OPEN-10 `stand_0_11`)**
"Advies: PRP-040. Beantwoord zodra ROL-01 PRP-040 goedkeurt." Na de splitsing hoort daar ook PRP-041 (voorstel §3 en §8: "beantwoord zodra je PRP-040 en PRP-041 goedkeurt"; M-9 vervalt met PRP-041). Het register zegt dus iets anders dan het voorstel.
Herstel: "Advies: PRP-040 (kaart) en PRP-041 (toets van Atlas, lost M-9 op). Beantwoord zodra ROL-01 beide goedkeurt."

**K11-19 · opmerking · `v011-register.md` ASM-36 (r.1419) tegenover skill `to-tickets` (r.35, r.899-911)**
ASM-36 noemt `to-tickets` als skill die "het model niet bij Atlas legt", maar het register heeft `gebruikers: [AGT-03]` en "Skills in het kort" zegt "Atlas" (met opmerking "niet gebruikt in dit model"). Ook `paperclip-board` en `paperclip-create-agent` staan nergens in de skills van het model. Het is dus niet vanzelf duidelijk wat "volgt de agent-skillmatrix" oplevert.
Herstel: schrijf in ASM-36 dat `gebruikers` van `to-tickets` bij het akkoord leeg wordt, of haal `to-tickets` uit het voorbeeld.

**K11-20 · opmerking · `v011-register.md` OPEN-15 (r.1436), `v011-voorstel.md` §8**
"beide agents hebben de rol 'general'" staat zonder bron; in de bestanden van `basis/` en `concept/` komt "general" nergens voor (register AGT-01/02 noemen alleen ROL-02/ROL-03). Ik kan het niet toetsen.
Herstel: noem de bron (bijvoorbeeld "Paperclip-API, datum") of laat de zin weg.

**K11-21 · opmerking · `v011-voorstel.md` §3, tabelrij "Ervaring op WEB-19"**
"Sinds GK-2 liep elk akkoord zo." In de bestanden is alleen aantoonbaar dat kaarten `2b7a6d2d` (B-08) en `f261b9ac` (B-12) `request_item_verdicts` waren; voor GK-2 (`eb913512`), GK-3 (`5491a09b`) en GK-4 (`4d0845d3`) staat het kaarttype nergens.
Herstel: "o.a. de kaarten `2b7a6d2d` en `f261b9ac`", of noem de bron voor GK-2 t/m GK-4.

**K11-22 · opmerking · `v011-prc-02.md` r.8**
"Je noemde eerst 15%; nu is het een aantal". Carlo schreef "Vermeld dit niet als 15%": hij noemde 15% niet zelf, het stond in de vraag of het voorstel. In `basis/` komt 15% niet voor.
Herstel: "Niet als percentage maar als aantal: nog 5 open taken (B-13)."

### Eindoordeel hercontrole

Geen blokkerende bevindingen meer: K11-01 is opgelost, de andere K11-bevindingen zijn opgelost, behalve K11-15 (opmerking, niet opgelost). Het herstel heeft twee nieuwe waarschuwingen veroorzaakt (K11-17, K11-18) en vier opmerkingen (K11-19 t/m K11-22). Het model is technisch in orde (YAML, ID's, diagram, verwijzingen).

**Kan worden ingediend.** Ik raad aan K11-17 en K11-18 eerst te herstellen: dat zijn elk één regel, en K11-17 zou in het diagram een start zonder trigger suggereren. Niet getoetst: rechten van de agents en de routines in de Paperclip-API, WEB-17 en WEB-19, en of de tool voor claude.ai/design in een agent-run werkt.

## Verwerking door Socrates (na de hercontrole, niet opnieuw gecontroleerd door een aparte agent)
- **K11-17 hersteld:** de pijl na "Backlog gereed" loopt weer naar de start (dagstart), met het label "pas bij de volgende trigger (dagstart, weekmoment of verzoek)".
- **K11-18 hersteld:** OPEN-10 noemt PRP-040 en PRP-041.
- **K11-15 hersteld:** OPEN-09 noemt "geen termijn" als aanname (ASM-35). Het kanaal (comment op het weekmoment-issue) staat in ASM-35 en in voorstel §1.
- **K11-19 hersteld:** `to-tickets` is uit de voorbeelden van ASM-36 gehaald; het model gebruikt die skill bij Atlas. Voorbeelden nu: `paperclip-create-agent`, `paperclip-board`, `to-spec`.
- **K11-20 hersteld:** bron toegevoegd (Paperclip-API, agents, 2026-10-30).
- **K11-21 hersteld:** concrete kaarten genoemd in plaats van "sinds GK-2 elk akkoord".
- **K11-22 niet aangepast:** Carlo noemde 15% wel zelf, in comment `f06fede2` ("als de slice bijna leeg is (15%)"). De controleur had alleen de latere comment als aanleiding.
