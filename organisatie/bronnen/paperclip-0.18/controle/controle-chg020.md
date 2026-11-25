# Controle CHG-020: weergaven van model 0.11 (WEB-19)

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Controleur | onafhankelijke controleur (niet de maker), skill `bpmn-modelcontrole` met `bpmn-conventies` |
| Scope | `werk/organisatie.md`, `werk/proces-catalogus.md`, `werk/activiteit-skillmatrix.md`, `werk/agent-skillmatrix.md`, `werk/capabilities-en-skills.md`, `werk/skill-specificaties.md`, `werk/agentprofiel-atlas.md`, `werk/verantwoordelijkheden.md` en de regel CHG-020 in `werk/wijzigingen.md`. Vergeleken met de vorige versie in `api/` en met de SPEC (`SPEC-CHG-020.md`). |
| Bron van waarheid | `api/register.md` (0.11, B-14). Ik heb het YAML-blok laten inlezen en vergeleken met `/tmp/r11.json`: identiek. `node ../../v08/tools/check.js api/register.md` geeft 82 activiteiten, 82 koppelingen, 20 beslissingen, 15 goedkeuringen en skillstatus 21 aanwezig / 27 gedeeltelijk / 25 ontbreekt / 9 n.v.t. |
| Niet aangepast | Ik heb niets aangepast, niets geüpload en geen comments geplaatst. `register`, `bevindingen`, `voorstellen`, `paperclip-mapping`, `prc-01` t/m `prc-06` en `uitbreidingsgids` in `werk/` zijn byte-gelijk aan `api/`. |
| Pagina 0.5 | Niet in deze controle (komt in `controle-pagina-0-5.md`). |

## Oordeel in het kort

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. De inhoud van alle acht weergaven volgt het register 0.11: tellingen, skillstatus per activiteit, RACI van alle 82 activiteiten, GOV-teksten, namen en ID's kloppen. Er zijn **4 waarschuwingen** en **8 opmerkingen**. De waarschuwingen zijn kleine tekstcorrecties (een niet herleidbaar comment-ID, twee verwijzingen naar een werkbestand, twee plekken waar iets afgeleids als vaststaand staat). Herstel ze bij voorkeur in dezelfde ronde, vóór de upload.

| Ernst | Aantal |
| --- | --- |
| blokkerend | 0 |
| waarschuwing | 4 (K-01 t/m K-04) |
| opmerking | 8 (K-05 t/m K-12) |

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's bestaan, volgen het schema en zijn niet hergebruikt | voldoet | Alle ACT-, G-, GOV-, CAP-, ASM-, OPEN-, ROL-, AGT- en PRC-ID's in de acht weergaven en in `wijzigingen` staan in het register of in `vervallen_ids` (script op `/tmp/r11.json`). FND-, PRP-, M-ID's staan in `bevindingen`, `voorstellen`, `paperclip-mapping` of `v011-voorstel`. Het enige nieuwe ID is CHG-020. Vervallen ID's (ASM-05, 06, 15, 16, 19, ROL-05, AGT-04, ACT-04.7, enz.) komen alleen historisch of als "vervallen" voor. |
| Elke verwijzing wijst naar een bestaand element | voldoet, op twee punten na | K-01 (comment-ID) en K-02 (`_meldingen-D`). |
| Elk model heeft status en versie | voldoet | De Status-regel in alle acht documenten is letterlijk de SPEC-regel, met de juiste revisie: organisatie 17, proces-catalogus 13, activiteit-skillmatrix 9, agent-skillmatrix 9, capabilities-en-skills 9, skill-specificaties 10, agentprofiel-atlas 7, verantwoordelijkheden 9. Versieregel 0.11 (CHG-020) staat in elk document. "Geldende versie" en "Goedgekeurde versie" in `organisatie` en `proces-catalogus` zeggen nu 0.10 (revisie 17 en 13), gelijk aan de Status-regel. |
| Tellingen 82 / 20 / 15, 27 capabilities, 39 skills, 3 systemen | voldoet | `proces-catalogus` (36+21+4+10+6+5 = 82; beslissingen 7+7+3+1+2 = 20; 15 GOV), `organisatie` r.32, `activiteit-skillmatrix` r.147-164. Gecontroleerd tegen het register. |
| Skillstatus per activiteit 21/27/25/9 | voldoet | Script: voor alle 82 rijen in `activiteit-skillmatrix` kloppen naam, versie, uitvoerder, capabilities, elke skill met zijn status en de eindstatus (zwakste skill) met `koppelingen.skl_status`. De verschuivingen ACT-01.2, 01.3, 02.3, 02.12 (naar gedeeltelijk) en ACT-02.6, 02.7 (naar ontbreekt) kloppen met een vergelijking van `/tmp/r10.json` en `/tmp/r11.json`. De Telling-tabel en de Samenvatting noemen dezelfde getallen. |
| RACI uit `koppelingen` | voldoet | Script: alle 82 rijen in `verantwoordelijkheden` §1 komen kolom voor kolom (R, A, beslisser, controleur, C, I, escalatie) overeen met het register. Alleen een agentnaam in plaats van AGT-xx. |
| GOV-teksten | voldoet | Script: alle 15 GOV-rijen in §3 komen voor naam, bevoegd, informatie, criteria, bij goedkeuring, bij afwijzing en escalatie overeen met het register (GOV-07 met `moment`). Alleen de kolom *Bron* wijkt af: die is in de weergave met labels B-12/B-13/B-14 aangevuld (bekend gat C-6, zie onder). |
| Capabilities en skills (dekking) | voldoet | Script: CAP-namen, omschrijvingen (CAP-11 *Bouwcontract ontwerpen*), activiteiten per CAP en de dekking van alle 39 skills (CAP, status, activiteiten) komen overeen met het register. Afwijking: `paperclip` bij CAP-01 (bekend gat C-2). |
| Agent-skillmatrix | voldoet | Script: elke cel (vereist aanwezig/uitbreiden, ontbreekt, beschikbaar niet vereist) volgt uit `koppelingen` en `gebruikers`; de enkele verschillen komen uit de generieke lanes van PRC-04 t/m PRC-06. |
| Geen nieuwe besluiten, voorstellen of aannames | voldoet met waarschuwingen | K-03 en K-04, opmerking K-10. De overige nieuwe tekst is herleid tot register, `prc-01`/`prc-02`/`prc-03`, `paperclip-mapping` en `v011-voorstel` (§1 t/m §7) en gelabeld. |
| Labels: B (B-13), B (B-14: PRP-040 t/m PRP-043), ASM-30 t/m ASM-39 bevestigd, ASM-19 alleen vervallen | voldoet | PRP-040..043 staan overal als besloten (B-14); geen "voorstel" of "ter bevestiging" bij PRP-040..043 of ASM-30..39. ASM-19 staat nergens als geldend: alleen in "vervallen"-tekst of in historische regels met "sinds 0.10 vervallen". Kleine inconsequentie in K-08 en K-12. |
| Geen SKL-nummers (B-11) | voldoet | `grep SKL-[0-9]` op alle negen bestanden: geen treffers. Skillnamen in backticks bestaan in het register, behalve de bekende skills buiten het model (`complain`, `suggestion-box`, `paperclip-create-agent`, `paperclip-board`, `to-spec`, `para-memory-files`, `improve-codebase-architecture`, `first-task`, `sprint-planning`); die staan al in de goedgekeurde 0.10 of in ASM-36. |
| Statusregels volgens de SPEC | voldoet | Zie hierboven (letterlijke vergelijking per document). |
| Interne consistentie tussen de weergaven | voldoet met opmerkingen | Getallen en namen komen in alle acht overeen. Verschillen: K-05, K-06, K-07, K-09. |
| Onafhankelijke controle (§4 `verantwoordelijkheden`) | voldoet | 26 van 40 rijen "voldoet", zoals in 0.10; ASM-39 (uitbreidingslijst zonder controleur) en ASM-28 (eigen ontwerp zonder aparte controle) staan er goed in. Eindverantwoordelijkheid ligt bij Carlo (ROL-01), niet automatisch bij een agent. |
| Procesmodellen (doel, trigger, beslissingen) | n.v.t. | Er is geen procesmodel gewijzigd; de `prc-*`-bestanden zijn byte-gelijk aan `api/`. De beslissing G-02.8 en de drie starts van PRC-02 staan correct in de weergaven (op K-03 na). |
| `.bpmn`-validatie | n.v.t. | Geen `.bpmn`-bestand. |
| Eindontwerp (artifact) | niet beoordeeld | Valt buiten deze scope (pagina 0.5). |
| Begrijpelijk Nederlands voor Carlo | voldoet met opmerkingen | Nieuwe begrippen (dagstart, doorloop, lopende slice, toets-issue) worden in `organisatie` §1 uitgelegd. Zie K-11. |
| Goedgekeurd model niet overschreven | voldoet | `api/` ongewijzigd (alle bestanden hebben dezelfde tijdstempel als de SPEC-basis); de nieuwe versies staan in `werk/` met status Concept. |
| Wijzigingshistorie bijgewerkt | voldoet, op K-01 na | CHG-020 staat in `wijzigingen` (status Concept) en de "Status van de versies" is aangepast. |
| Genoemde agents en skills bestaan; werking en koppeling | niet te beoordelen (werking) | Namen bestaan volgens register en bevindingen. Of Dr. Evil of Socrates een project mag aanmaken (OPEN-15) en of agents Claude Design kunnen lezen (FND-035) kan ik niet toetsen. |

## Bevindingen

### Waarschuwingen

**K-01 (waarschuwing)** `werk/wijzigingen.md` r.29, regel CHG-020, kolom *Wijziging*.
- Wat: de tekst zegt "aangekondigd in comment `3fcf551a`". Dit ID komt in geen enkel ander bestand voor (ik zocht in `api/`, `werk/` en `organisatie/`). `VOORTGANG.md` noemt voor de aankondiging "weergaven + pagina 0.5" het comment `546cbccf` (en `7ac2c847` voor de ontvangst). Ik kan niet vaststellen welk ID klopt.
- Voorstel: controleer het ID op het issue en corrigeer het, of laat de verwijzing weg en citeer alleen de zin. In een wijzigingshistorie moet elke verwijzing herleidbaar zijn.

**K-02 (waarschuwing)** `werk/skill-specificaties.md` r.47 (*Telling*, slot van "Nieuw in 0.11": "zie `_meldingen-D`") en `werk/agentprofiel-atlas.md` r.100 (§6, rij "Blijft volgens ASM-36": "zie `_meldingen-D`"). Verwant: `werk/wijzigingen.md` r.29 verwijst naar `register-gaten-0-11`.
- Wat: `_meldingen-D` is een werkbestand van de maker en geen document dat bij de indiening hoort. Carlo kan het niet openen, dus de verwijzing is dood.
- Voorstel: verwijs naar het gatenoverzicht (`register-gaten-0-11`: C-1 voor ACT-02.2, B-1 voor `to-tickets`), of schrap de verwijzing en zet de uitleg in een halve zin. Zorg dat `register-gaten-0-11` bij de indiening meegaat, want `wijzigingen` noemt het.

**K-03 (waarschuwing)** `werk/verantwoordelijkheden.md` r.79 (§1, alinea boven de tabel van PRC-02: "Dr. Evil beslist dat; hij ziet het aan het issue van de lopende uitbreiding (ASM-33)") en r.162 (§2, rij "Of er al een doorloop loopt (G-02.8)", kolom *Wie*: "Dr. Evil, na elke start", label A (ASM-33...)).
- Wat: in het register heeft G-02.8 geen rol, en ASM-33 zegt niet wie het besluit neemt; ASM-33 zegt alleen dat Dr. Evil de doorloop aan het issue ziet en de wens bovenaan de lijst zet. Het gat is bekend (B-4 in `register-gaten-0-11`, melding C-2). De weergave presenteert het echter als vaststaand en hangt er het label ASM-33 aan, terwijl de SPEC (regel 3) geen nieuwe aannames toestaat. Carlo kan dit lezen als besloten.
- Voorstel: schrijf "rol niet vastgelegd (zie B-4); volgens ASM-33 ziet Dr. Evil de lopende uitbreiding en zet hij de wens bovenaan de lijst", of markeer de rolkeuze duidelijk als afgeleid en nog niet besloten.

**K-04 (waarschuwing)** `werk/skill-specificaties.md` r.107 (`architect-use-case-review`, Werkwijze stap 5): "Zet het resultaat als comment op het toets-issue ... en zet het toets-issue op `done`, zoals bij een vraag (PRC-04). Socrates wordt dan gewekt via de blokkade."
- Wat: PRP-041 zegt alleen "zoals een vraag"; of er per ronde een nieuw toets-issue komt en wat Atlas op het issue zet, staat nergens in het model. De maker meldde dit zelf (D-07, in `register-gaten-0-11` als B-2, een keuze van Carlo). In de specificatie staat de afgeleide stap zonder markering op de plek zelf; het algemene label bovenaan het document ("Voorstel, afgeleid") is voor deze open keuze te zwak.
- Voorstel: zet bij stap 5 "(afgeleid, nog niet besloten: zie B-2)". Of laat de details over `done` en een nieuw issue per ronde weg en schrijf alleen "zoals een vraag (PRC-04)".

### Opmerkingen

**K-05 (opmerking, gat in het register dat niet in de lijst staat)** `werk/skill-specificaties.md` r.234 (`architect-cms-configuratie`, Afhankelijkheden) tegenover register `skills`, `architect-cms-configuratie.afhankelijkheden`.
- Wat: het register geeft als afhankelijkheid alleen `architectuurprofielen`. De specificatie noemt ook `architect-architecture-choice` (overgenomen uit 0.10, de maker meldde dit in D-09). In `register-gaten-0-11` staat alleen het deel over `architect-api-contracts` (C-5), niet dit deel.
- Voorstel: neem het op in `register-gaten-0-11` (bij C-5), of haal de extra afhankelijkheid uit de weergave.

**K-06 (opmerking, gat in het register dat niet in de lijst staat)** `werk/capabilities-en-skills.md` r.78 (`architect-architecture-choice`, kolom *Bron en opmerking*: "In PRC-01 geen eigen stop: het akkoord is het pakket GOV-11").
- Wat: sinds 0.10 zit de architectuurkeuze in GOV-15 (GOV-11 is "zonder de architectuurkeuze"). De weergave herhaalt hier de oude registertekst (register `skills`, `architect-architecture-choice`, tweede dekkingsregel, veld `bron`). De andere weergaven zeggen GOV-15 (`skill-specificaties` r.327, `agentprofiel-atlas` r.70, `organisatie` r.290). Zo spreken twee documenten elkaar tegen.
- Voorstel: neem het op in `register-gaten-0-11` (groep A) en zet in `capabilities-en-skills` een korte noot "sinds 0.10: GOV-15".

**K-07 (opmerking, gat in het register dat niet in de lijst staat)** `werk/capabilities-en-skills.md` r.79 (`architect-modeling`: "CAP-06: gedeeltelijk (ACT-01.10, ACT-01.11, ACT-01.12, ACT-01.13)").
- Wat: in `koppelingen` heeft ACT-01.12 capability CAP-07 en ACT-01.13 capability CAP-08, maar de dekking van de skill zet beide stappen onder CAP-06. ACT-01.11 is al bekend (C-3), ACT-01.12 en ACT-01.13 niet. Alleen administratie, geen effect op de telling.
- Voorstel: opnemen bij C-3 in `register-gaten-0-11`.

**K-08 (opmerking)** `werk/skill-specificaties.md` r.30, 44, 45 en 382, en `werk/agentprofiel-atlas.md` r.9.
- Wat: op deze plekken staat "A (ASM-3x)" zonder "bevestigd", terwijl overal elders (en in de kop van beide documenten) staat dat ASM-30 t/m ASM-39 bevestigd zijn in B-14. Het label is niet fout, maar onvolledig en inconsequent.
- Voorstel: "A (ASM-3x, bevestigd B-14)" gebruiken.

**K-09 (opmerking)** `werk/organisatie.md` r.6 (*Versie*, 0.11): "§6 (stand 0.11 bij vier bevindingen, ...)".
- Wat: in §6 (b) hebben vijf bestaande rijen een regel "Stand 0.11" gekregen (r.206 Akkoord-poorten, r.207 Orchestrator, r.210 UC2 zonder akkoord, r.211 Opdracht direct, r.216 designer-agent), plus de alinea "Extra" (r.221). "Vier" klopt dus niet.
- Voorstel: "bij vijf bevindingen" (en eventueel "Extra" noemen).

**K-10 (opmerking)** `werk/skill-specificaties.md` r.284-298 (`requirements-orchestration`: werkwijze in vijf stappen en voorbeeld), r.382 en r.390 (`backlog-management`: gedrag bij een verzoek van Carlo en G-02.8).
- Wat: dit is nieuwe tekst die niet letterlijk in het register of `v011-voorstel` §7 staat. `v011-voorstel` §7 noemt voor het verzoek en G-02.8 alleen `delivery-management`; de maker legt ook een deel bij `backlog-management` (ACT-02.1 gebruikt die skill wel in de koppelingen). De werkwijze van `requirements-orchestration` is als "Voorstel" gelabeld en dat past bij hoe dit document werkt, maar het is in omvang meer dan "afleiden" en valt onder SPEC-regel 3.
- Voorstel: laat het staan met het label "Voorstel (afgeleid)", of beperk de werkwijze tot wat `v011-voorstel` §7 zegt. Dr. Evil legt de uiteindelijke skillwijzigingen toch zelf voor (PRC-08).

**K-11 (opmerking, taal)** `werk/verantwoordelijkheden.md` (§2 en §3), `werk/organisatie.md` r.217 en r.219.
- Wat: voor een lezer die geen ontwikkelaar is staan er veel technische termen en codes in lopende tekst: `request_item_verdicts`, `in_review`, `blocked`, `done`, `cancelled`, en verwijzingen als "CHG-018: C-1" of "B (B-14: PRP-042)". De codes A-/B-/C- zijn bovendien dubbelzinnig, omdat zowel `register-gaten-0-10` (CHG-018) als het nieuwe `register-gaten-0-11` die letters gebruiken. De stijl komt uit 0.10 en is niet nieuw; het valt alleen op in de nieuwe 0.11-tekst.
- Voorstel: waar het kan "kaart op het issue" in plaats van `request_item_verdicts`; de codes van het 0.10-overzicht altijd met "CHG-018:" ervoor (zoals nu meestal gebeurt).

**K-12 (opmerking)** Vier kleine punten in lopende tekst.
- `werk/verantwoordelijkheden.md` r.196, r.201, r.206, r.210: de tekst van GOV-01, GOV-06, GOV-10 en GOV-15 is ten opzichte van de goedgekeurde weergave 0.10 veranderd (bijvoorbeeld "(volgt PRC-01)" en "en meldt het de ontwerper" zijn weggevallen omdat het register ze niet heeft), maar deze rijen staan niet vet en de *Versie*-regel (r.6) noemt alleen GOV-02, 03, 04, 05, 07, 09, 11, 12, 13 en 14. Voorstel: één zin toevoegen dat GOV-01, 06, 10 en 15 zijn teruggebracht tot de registertekst.
- `werk/organisatie.md` r.314: de ASM-19-rij onder *Stand 0.8* heeft in de kolom *Tekst* nog "Het model gebruikt de vorm met 3 akkoorden" in de tegenwoordige tijd; de kolom *Stand* zegt wel "vervallen". Voorstel: "Het model gebruikte" of "(historisch)".
- `werk/activiteit-skillmatrix.md` r.8: de kop heeft twee rijen met het label "Status" (de statusregel en de uitleg van de skillstatus; ook in 0.10 zo). Voorstel: de tweede rij "Skillstatus" noemen.
- Nieuwe skills (werknamen) worden in `werk/verantwoordelijkheden.md` (r.225, 246) en op enkele plekken in `organisatie` genoemd zonder "(werknaam)", terwijl `architect-api-contracts` en `architect-cms-configuratie` nog niet bestaan. Voorstel: "(werknaam)" erbij waar de skill voor het eerst in een rij of alinea staat.

## Bekende gaten uit `register-gaten-0-11` (niet geteld)

Ik heb gecontroleerd dat de weergaven bij deze gaten het register volgen, zoals de SPEC vraagt. Ze zijn dus geen fout van de weergave.

| Gat | Plek in de weergave |
| --- | --- |
| A-1 (escalatie ACT-02.1 noemt nog "weekmoment (B-09)") | `verantwoordelijkheden` r.83. In hetzelfde document staat bij GOV-07 de 09:00-herinnering; de lezer ziet dus twee versies. Een korte noot "register loopt achter, zie A-1" zou helpen, maar is geen eis. |
| A-2 (PRC-07 "Maandagochtend") | `proces-catalogus` r.50 (met "to-be: ... maandag 04:00" erbij) |
| A-4 (CAP-20 "voorraad klare taken", CAP-25 zonder Claude Design) | `capabilities-en-skills` r.34 |
| B-1 (welke skills houdt Atlas, `to-tickets`) | `agent-skillmatrix` (legenda r.8 en §4 Atlas), `capabilities-en-skills` §2 en §5, `organisatie` r.140, `agentprofiel-atlas` §6. De legenda van de agent-skillmatrix zegt "wat het model niet bij een agent legt, gaat bij hem weg", terwijl dezelfde matrix `to-tickets` en andere skills "beschikbaar, niet vereist" noemt: verwarrend, maar dit is B-1. |
| B-3 (contentmodel "één keer" of per slice) | `capabilities-en-skills` r.136 ("één keer ... ACT-01.60") naast r.106 en de specificatie (ook per slice, ACT-02.7) |
| C-1 (ACT-02.2 in dekking van drie skills) | `activiteit-skillmatrix` r.59, `capabilities-en-skills`, `skill-specificaties` |
| C-2 (`paperclip` bij ACT-01.51) | `capabilities-en-skills` CAP-01 ("via ACT-01.51") |
| C-3, C-4 (`architect-modeling`, ACT-02.6/02.7) | `capabilities-en-skills`, `skill-specificaties` |
| C-5 (afhankelijkheden niet per profiel) | `skill-specificaties` r.92 (`architect-api-contracts`, zie ook K-05) |
| C-6 (labels B-12 in `bron` van GOV) | `verantwoordelijkheden` §3, kolom *Bron* |

Alle meldingen A t/m E zijn in `register-gaten-0-11` terug te vinden (A-1 t/m A-11, B-1 t/m B-4, C-1 t/m C-6), met één restant: het tweede deel van melding D-09 (K-05). Meldingen D-10 en D-11, C-5/C-6/C-7 in `_meldingen-C` en M-B7 zijn informatief en verdwenen terecht niet uit de lijst.

## Wat ik niet kon toetsen

- De werking van skills en de feitelijke koppeling van skills aan agents (OPEN-11). De weergaven zeggen dit zelf ook.
- Of Dr. Evil en Socrates in Paperclip een project mogen aanmaken (OPEN-15) en of agents Claude Design kunnen lezen (FND-035). De weergaven schrijven dat laatste als "kunnen nu niet openen"; de bevinding FND-035 zelf zegt dat het niet is getest of een agent de tool in een gewone run mag gebruiken. Dit volgt de titel van FND-035 en is geen fout van de weergave, maar vermeld het zo niet als zekerheid.
- Of de comment-ID's en kaart-ID's in de tekst kloppen (alleen die in het register en in de goedgekeurde `wijzigingen` heb ik naast de bron gelegd; zie K-01).
- Een technisch geldig overzicht is niet automatisch inhoudelijk juist: de inhoud van het goedgekeurde model 0.11 zelf (de keuzes in B-13 en B-14) heb ik niet beoordeeld, alleen of de weergave er trouw aan is.
- Pagina 0.5.

## Conclusie

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen en de weergaven volgen het register 0.11 trouw. Ik raad aan om vóór de upload K-01 t/m K-04 te herstellen (elk een tekstwijziging van een regel of een halve zin, zonder gevolgen voor de inhoud) en K-05 t/m K-07 aan `register-gaten-0-11` toe te voegen, zodat het gatenoverzicht compleet is.
