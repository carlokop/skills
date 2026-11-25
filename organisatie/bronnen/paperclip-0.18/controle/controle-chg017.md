# Modelcontrole CHG-017 (WEB-19): weergaven van model 0.10

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`), niet de makers |
| Scope | `werk/` tegen `api/` en het goedgekeurde register 0.10 (`api/register.md`, `/tmp/r10.json`; register 0.9 `/tmp/r09.json` voor het verschil). Inhoudelijk bijgewerkt: `organisatie`, `proces-catalogus`, `activiteit-skillmatrix`, `agent-skillmatrix`, `capabilities-en-skills`, `skill-specificaties`, `agentprofiel-atlas`, `verantwoordelijkheden`. Alleen skillnamen en de CHG-017-regel: `bevindingen`, `voorstellen`, `prc-04`, `prc-05`, `wijzigingen`. Ongewijzigd verwacht: `prc-01`, `prc-02`, `prc-03`, `prc-06`, `paperclip-mapping`, `uitbreidingsgids`. Ook beoordeeld: `werk/_meldingen-A` t/m `-D`. |
| Wijzigingen door controleur | geen in `werk/` of `api/` |

## Oordeel

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. Er zijn vijf waarschuwingen; W-01 (interne verwijzingen in teksten voor Carlo) en W-05 (bewering over pagina 0.4) raad ik aan vóór indiening te herstellen. De overige zijn labelkwesties die Carlo niet misleiden maar het register-is-leidend-principe scherper maken.

Wat ik niet kon toetsen staat onderaan.

## Bevindingen

### Blokkerend

Geen.

### Waarschuwing

**K-01. Interne werkverwijzingen in documenten voor Carlo.**
- Waar: `werk/activiteit-skillmatrix.md` §Telling (regel 158: "De controle `check.js` (organisatie/v08/tools) telt 27 aanwezig, ... 7 n.v.t.", "Gemeld aan de hoofdagent (`_meldingen-B`, M-B1)") en §Samenvatting (regel 163: "Zie de noot ... over `check.js` (27 / 25 / 23 / 7)"); `werk/capabilities-en-skills.md` regel 52, 57 en 117 ("gemeld, M-B2", "gemeld, M-B3"); `werk/agent-skillmatrix.md` regel 50 ("M-B3").
- Probleem: Carlo kent `check.js`, "hoofdagent" en de meldingsnummers M-B1 t/m M-B3 niet (de `_meldingen`-bestanden zijn geen onderdeel van het model). Het noemen van een tweede telling (27/7) naast de goede (25/9) is verwarrend. De juiste telling 25 / 25 / 23 / 9 = 82 staat wel overal consistent (zie check 8).
- Voorstel: noot bij de telling inkorten tot: "ACT-01.28 en ACT-02.16 zijn jouw ontwerpstappen (n.v.t., mens, ASM-28), net als ACT-01.52." en de verwijzingen "gemeld, M-B2/M-B3/M-B1" vervangen door "(open punt in het register)" of weglaten.

**K-02. ASM-19 als "vervangen" weergegeven terwijl het register dat niet vastlegt.**
- Waar: `werk/organisatie.md` regel 28 ("ASM-19 (vorm met 3 akkoorden) is vervangen door PRP-036.") en §7, tabel *Stand 0.10*, rij ASM-19 ("**vervangen** door PRP-036", label "Besloten (B-12: PRP-036)").
- Bewijs: in `register.md` staat ASM-19 nog in `aannames` (met `bevestigd` 0.8) en niet in `vervallen_ids`; alleen `wijziging_0_10` zegt "vervalt als ROL-01 PRP-036 goedkeurt". `prc-01` (api) zegt "wordt vervangen als je PRP-036 goedkeurt". PRP-036 is goedgekeurd (B-12), dus de afleiding is logisch, maar het register zegt het nog niet. Maker A heeft dit zelf gemeld (`_meldingen-A`, ASM-19).
- Voorstel: formuleer als wat het register zegt: "ASM-19 vervalt volgens het register zodra je PRP-036 goedkeurt; dat deed je in B-12. Het register moet hier nog op worden bijgewerkt." Het label mag "Besloten (B-12: PRP-036)" blijven. Idem in `werk/agentprofiel-atlas.md` is dit al zonder ASM-19-claim; geen actie.

**K-03. Afgeleide inhoud staat gelabeld als "Besloten" (poorten van `quality-gates`, werkwijzen van nieuwe skills).**
- Waar: `werk/skill-specificaties.md`: kopregel *Label* ("Alles hieronder is **Besloten**"; de maker zegt in dezelfde cel dat de werkwijzen van de nieuwe skills zijn afgeleid) en §`quality-gates` (uitbreiden), "Gewenst (B, B-08, PRP-025; aangepast voor 0.10, B-12: PRP-032, PRP-034)" met de lijst vóór ACT-01.15 (GOV-15 en GOV-11) en vóór ACT-02.4 (GOV-14 als G-02.7 "ja" zei). Zelfde afleiding in `werk/agentprofiel-atlas.md` §4 (Dr. Evil: "vóór de opdeling of GOV-15 en GOV-11 er zijn").
- Bewijs: `register.md`, skill `quality-gates`, `wijziging_0_10`: "poorten per profiel ...; GOV-15, GOV-14 en GOV-02 met brieven vóór het bouwcontract (PRP-032, PRP-034)". Het register noemt geen activiteit per poort in 0.10 en de `dekking`-bron noemt alleen de poorten van 0.8. De afleiding klopt met `prc-01`/`prc-02` 0.10 (ik vond geen tegenspraak), maar is geen besluit. Maker D meldt dit zelf (`_meldingen-D`, D-08).
- Voorstel: in de poortenlijst en het agentprofiel het 0.10-deel als "afgeleid uit PRC-01 en PRC-02 0.10 (Voorstel)" labelen, zoals de uitgewerkte werkwijzen van `escalation-management` en `weekmoment` al staan. Voor de werkwijzen van de vijf nieuwe skills volstaat de bestaande zin; neem in de kopregel *Label* op dat de werkwijzen van de nieuwe skills een Voorstel zijn, afgeleid uit register en `v010-voorstel`.

**K-04. Goedkeuringsmomenten wijken op enkele plekken af van de registertekst zonder dat dat overal is gemarkeerd.**
- Waar: `werk/verantwoordelijkheden.md` §3: GOV-02 *Bij goedkeuring* (extra zin over G-02.7, ACT-02.16, ACT-02.56 en GOV-14, met verwijzing `prc-02`: gemarkeerd); GOV-06 *Informatie* ("bij P1 het templatecontract") en *Bij afwijzing* ("bouwcontract" in plaats van "API-contract": niet gemarkeerd); GOV-11 *Bij goedkeuring* ("technisch ontwerp" in plaats van "kernontwerp": niet gemarkeerd); GOV-12 *Bron* (extra zin PRP-032 met `prc-02`: gemarkeerd); GOV-07 *Informatie* volgt het register ("kandidaten uit de volgorde op het backlog") terwijl ACT-02.1 nu de uitbreidingslijst als input heeft (`_meldingen-C`, C-06).
- Bewijs: `register.md`, `goedkeuringen` GOV-02, GOV-06, GOV-11, GOV-12 (volledige-tekstvergelijking met `/tmp/r10.json`). De afwijkingen zijn consistent met `prc-01`/`prc-02` 0.10 en met de registerveldnamen van de activiteiten (ACT-01.14, ACT-01.17), maar SPEC regel 1 zegt: volg het register en meld afwijkingen.
- Voorstel: óf de registertekst letterlijk laten staan en de verschillen in de melding (C-01, C-05) laten, óf elke afwijking kort markeren ("volgens `prc-01`/`prc-02` 0.10"). De GOV-06- en GOV-11-aanpassing zijn onschuldig; de GOV-07-tekst kan blijven.

**K-05. Beweringen over pagina 0.4 in `wijzigingen`.**
- Waar: `werk/wijzigingen.md` CHG-017-rij ("Pagina 0.4 is opnieuw gebouwd uit het register.", *Geraakt*: "pagina 0.4") en de toegevoegde zin bij *Status van de versies* ("... gelden de vorige revisies van die overzichten en pagina 0.3").
- Bewijs: `VOORTGANG.md`: "Pagina-agent loopt nog". Pagina en uitbreidingsgids 0.4 zitten niet in mijn scope en ik heb ze niet gezien. Het register noemt voor 0.9 pagina 0.3 en uitbreidingsgids 0.3 als goedgekeurd (`meta.goedgekeurd`), dus "pagina 0.3" klopt als vorige versie.
- Voorstel: controleer vóór indiening dat pagina 0.4 klaar en gecontroleerd is, of zwak de zin af tot "Pagina 0.4 volgt". De CHG-017-regel hoort alleen te beweren wat bij indiening waar is.

### Opmerking

**O-01. Afwijkende weergave bij ACT-01.3/01.4 tussen twee overzichten.** `werk/capabilities-en-skills.md` (`requirements-analysis`, regel "0.10") noemt het uitbreiden voor "de vraag naar het design systeem (ACT-01.3/01.4)" (letterlijk uit `wijziging_0_10` van de skill), terwijl `activiteit-skillmatrix` ACT-01.3 als aanwezig toont (volgt `koppelingen`, status `bestaat`). Dit is een register-inconsistentie die maker B heeft gemeld (M-B4). De weergave volgt terecht de koppelingen. Eventueel één zin in `activiteit-skillmatrix` onder *Samenvatting*.

**O-02. Extra "gedeeltelijk"-regels in `capabilities-en-skills` §2.** Bij `requirements-analysis` (ACT-01.26), `architect-database` (ACT-01.59) en `backlog-management` (ACT-01.29, ACT-02.1, ACT-02.17) staat een dekkingsregel "volgens de koppelingen 0.10" die niet in `skills[].dekking` staat. Dat is herleidbaar (koppelingen zeggen `uitbreiden`) en is bovenaan §2 uitgelegd; geen actie nodig. Maker B heeft dit gemeld (M-B2).

**O-03. Label B → A bij ASM-09.** `werk/verantwoordelijkheden.md` §2 (rij G-02.3) heeft "A (ASM-09, nog niet bevestigd)"; in `api/` stond "B (ASM-09 ...)". Een aanname hoort bij A; de wijziging is een kleine correctie, maar SPEC regel 4 zegt bestaande labels laten staan. Geen actie als u de correctie wilt houden.

**O-04. Nieuwe observatie zonder bevinding.** `werk/verantwoordelijkheden.md` §4 zegt: "Uitbreidingslijst (ACT-01.29, ACT-02.17): ... zonder controleur ... Hierover staat geen bevinding in `bevindingen`." Dat is juist (geen FND hierover) en een eerlijke melding, maar het is een nieuwe constatering. Het staat ook in `_meldingen-C` (C-08). Laat het staan of verplaats het naar de melding.

**O-05. Volgorde "Wat is er veranderd" in `organisatie`.** De 0.10-sectie staat tussen 0.5 en 0.9/0.8, zoals de oorspronkelijke volgorde van de api-versie. Geen actie.

**O-06. De 0.10-weergave bevat geen tegenspraak met de vier akkoorden of de oude besluiten.** Zie checks 4 en 6.

## Resultaat per check

| # | Check | Resultaat | Bewijs |
| --- | --- | --- | --- |
| 1 | Geen `SKL-[0-9]` meer in `werk/` | voldoet | `grep -n "SKL-[0-9]" werk/*.md` geeft niets. Het enige restant is de zin "elke skill een ID met `SKL` en een volgnummer" in `voorstellen` (r. 635: oorspronkelijk "een ID `SKL-01`"; betekenis gelijk). |
| 1 | Elke skillnaam bestaat in het register | voldoet | Alle backtick-namen met koppelteken in de 8 bijgewerkte documenten zijn een skill in `r10.json` of een bekende niet-skill (`prc-01`, `bpmn-conventies`, `para-memory-files`, `paperclip-board`, `to-spec`, `first-task`, `sprint-planning`, `improve-codebase-architecture`, `suggestion-box`, enz., uit bronnen van de feitencheck). |
| 1 | oud_nummer→naam juist, ook historisch | voldoet | Voor `bevindingen`, `voorstellen`, `prc-04`, `prc-05`, `wijzigingen`: api-tekst met `oud_nummer`-mapping toegepast en vergeleken met `werk/`; alle verschillen zijn de bedoelde vervangingen (ook losse getallen: "SKL-40, 41, 42 en 44", "SKL-02, 06, 09, 10, 11, 12, 13, 14, 15, 21 en 23", "SKL-11, 12 en 13", reeksen SKL-40 t/m SKL-45 en SKL-01 t/m SKL-28) of verwijderde dubbele `` `naam` (SKL-nn) ``-paren. Geen enkele inconsistente naam/nummer-combinatie. |
| 2 | Alle 82 activiteiten waar het overzicht volledig hoort te zijn | voldoet | `activiteit-skillmatrix`: 82 rijen, geen dubbelen; `verantwoordelijkheden` §1: 82 RACI-rijen; `capabilities-en-skills`: 82 ACT-ID's in CAP-tabel. Naam, versie, capability, uitvoerder, skills, skillstatus en bold-voor-nieuw per rij vergeleken met `koppelingen` en `activiteiten`: geen verschillen behalve de bedoelde "n.v.t. (mens)". |
| 2 | RACI gelijk aan `koppelingen` | voldoet | Script `/tmp/ctl_raci.js`: R, A, beslisser, controleur, C, I, escalatie van 82 rijen gelijk (alleen weergave van namen/backticks verschilt). |
| 2 | Skills per activiteit gelijk aan `koppelingen` | voldoet | `/tmp/ctl_asm.js`: skilllijst en per-skill status van 82 rijen gelijk. Profielenoverzicht ("Per profiel") gelijk aan `profielen.producten` (14 rijen, ACT-lijst, skills uit koppelingen, P1/P2/P3). |
| 2 | 19 beslissingen, 15 GOV, 27 CAP, 39 skills | voldoet | `proces-catalogus`: 19 beslissingen (7/6/3/1/2 per proces), 82 activiteiten (36/21/4/10/6/5) en 15 goedkeuringen gelijk aan het register. `verantwoordelijkheden` §3: alle 15 GOV (GOV-14 en GOV-15 aanwezig; veldvergelijking per kolom zie K-04). `capabilities-en-skills`: 27 CAP (omschrijving en activiteiten gelijk aan `capabilities`/`koppelingen`), 39 skills (naam, agents, doel, dekking gelijk; zie O-02). `agent-skillmatrix`: 39 skills; per agent de status gelijk aan de koppelingen. |
| 2 | Tellingen | voldoet | Skillstatus per activiteit zelf berekend (zwakste status): 25 aanwezig, 25 gedeeltelijk, 23 ontbreekt, 9 n.v.t. (mens) = 82; de twee n.v.t. (mens) zijn ACT-01.28 en ACT-02.16 (correctie in de opdracht bevestigd). Enige verandering t.o.v. 0.9: ACT-01.11 gedeeltelijk → ontbreekt (`r09.json` vs `r10.json`), plus 11 nieuwe rijen. Stemt overeen met `activiteit-skillmatrix` (Telling en Samenvatting) en de CHG-017-rij. Skill-specificaties: 26 skills = 11 nieuw + 15 uitbreiden, de activiteitenkolom per skill gelijk aan de niet-`bestaat`-koppelingen. Onafhankelijke controle: 40 rijen, 26 voldoen (api: 28 en 19). |
| 3 | Geen nieuwe besluiten, voorstellen of aannames | voldoet, met waarschuwingen | Alle PRP/FND/B-/ASM/OPEN/GOV/G-/CAP-ID's in de acht documenten bestaan in register of api-documenten (geen onbekende ID's; vervallen ID's staan alleen in historische context en in `vervallen_ids`). Steekproef op de nieuwe redeneringen (begrippen in `organisatie`, nieuwe skillspecificaties, risico's in `agentprofiel-atlas`) tegen `v010-voorstel`, `prc-01`, `register`: herleidbaar. Zie K-02, K-03, K-04. |
| 3 | Labels (Feit/Besloten (B-12: PRP-0xx)/Aanname/Voorstel) | voldoet, met waarschuwingen | `B-12: PRP-0xx` alleen met 029 t/m 039. Zie K-02 en K-03. Voorstel-label bij `escalation-management` en `weekmoment` behouden. |
| 3 | ASM-26 t/m ASM-29 bevestigd | voldoet | In alle documenten staan ze als "bevestigd (B-12, kaart `f261b9ac`)" of "Aanname, bevestigd"; teksten gelijk aan het register (ASM-26 pakket-producenten, ASM-27 productvisie, ASM-28 ROL-01 is ontwerper, ASM-29 UI per project). OPEN-14 nieuw en open. |
| 4 | Bestaande besluiten niet ongemerkt veranderd | voldoet | 4 akkoorden UC1 (GOV-10, GOV-15, GOV-11, GOV-06; PRP-036) gelijk in `organisatie`, `proces-catalogus`, `verantwoordelijkheden`, `agentprofiel-atlas`. B-06 (Socrates maakt use cases, Atlas toetst) blijft; B-07 en TL-V5 expliciet "gelden voor P3" zoals PRP-034/`prc-01`; TL-V4 (akkoord op API-contracten, bij P1 templatecontract); TL-V7 (geen rol tech lead) ongewijzigd. Wat in 0.8/0.9 gold is als historie behouden en als "Stand 0.10" aangevuld. |
| 5 | Statusregels volgens SPEC | voldoet | De regel is voor de acht documenten letterlijk gelijk aan de SPEC-tekst (`grep -xF`), met de juiste vorige versie en revisie: organisatie 0.9 r15, proces-catalogus 0.9 r11, activiteit-skillmatrix 0.9 r7, agent-skillmatrix 0.9 r7, capabilities-en-skills 0.9 r7, skill-specificaties 0.9 r8, agentprofiel-atlas 0.8 r5, verantwoordelijkheden 0.9 r7. `Geldende versie`/`Goedgekeurde versie` in organisatie en proces-catalogus zijn naar 0.9 (r15, r11) gecorrigeerd (api had 0.8 r13/r9; klopt met de SPEC). |
| 5 | Alleen-namen-bestanden: kopregel en inhoud | voldoet | `bevindingen` (r16), `voorstellen` (r15): CHG-017-kopregel direct onder de Status-regel. `prc-04` (r8), `prc-05` (r9): zin achter `Status:`. `wijzigingen` (r20): kopblok toegevoegd, CHG-017-rij na CHG-016, één extra zin in *Status van de versies*; tabellen heel (kolomtelling). Inhoud verder gelijk (zie check 1). Zie K-05 over pagina 0.4. |
| 5 | Niet-bijgewerkte bestanden onveranderd | voldoet | `cmp`: `prc-01`, `prc-02`, `prc-03`, `prc-06`, `paperclip-mapping`, `uitbreidingsgids` gelijk aan `api/`. |
| 5 | Versie-/wijzigingsregels | voldoet | Versietabellen en wijzigingshistorie in `skill-specificaties`, `agentprofiel-atlas`, `organisatie`, `proces-catalogus`, `verantwoordelijkheden` hebben een 0.10/CHG-017-regel. |
| 6 | Leesbaarheid voor Carlo | voldoet niet (waarschuwing) | Nederlands, kort, bekende labels. Zie K-01 (jargon `check.js`, "hoofdagent", M-B-nummers). "(werknaam)" is uitgelegd in de legenda's. |
| 7 | Tabelstructuur | voldoet | Alle tabellen in de elf bijgewerkte bestanden hebben per rij hetzelfde aantal kolommen als hun kop. |
| 8 | ID's uniek en niet hergebruikt | voldoet | Geen dubbele ACT-rij in de matrices; `CHG-017` komt in `wijzigingen` twee keer voor (kopregel en historierij, bedoeld). PRP-011 en ASM-19 (zie K-02) niet hergebruikt. |
| 9 | Meldingen over het register (`_meldingen-A` t/m `-D`) | voldoet | Zie hieronder. |
| 10 | `.bpmn`-validatie | niet te beoordelen | Er zijn in `werk/` geen `.bpmn`-bestanden; procesdiagrammen zitten ongewijzigd in `prc-01..06`. |
| 11 | Pagina 0.4 / uitbreidingsgids 0.4 | niet te beoordelen | Niet in scope en nog niet aanwezig voor mij (zie K-05). |

## Beoordeling van de meldingen

Het register is niet aangepast; de meldingen zijn juist bedoeld voor een aparte wijziging. Mijn steekproef tegen `register.md`/`r10.json`:

| Melding | Klopt? | Toelichting |
| --- | --- | --- |
| A: ASM-19 niet in `vervallen_ids`, `wijziging_0_10` conditioneel | klopt | Zie K-02. |
| A: ASM-18 "0.10 (Concept)" en tekst noemt de architectuurkeuze in GOV-11 | klopt | `aannames` ASM-18 `wijziging_0_10`. |
| A: ASM-17, ASM-14 tekst loopt achter | klopt | Teksten noemen GOV-10 zonder visie/paginalijst resp. "volgorde op het backlog"; GOV-10 `naam` heeft die wel. |
| A: ROL-01..04 `in`/`uit` en "drie akkoorden" in `verantwoordelijkheid` niet bijgewerkt | klopt | `rollen`: `in`/`uit` ongewijzigd, `verantwoordelijkheid` ROL-01 zegt "In UC1 drie akkoorden"; nieuwe taken staan alleen in `wijziging_0_10`. |
| A: PRC-01 `risicos` mist FND-033 | klopt | `processen` PRC-01/PRC-02 `risicos`; `prc-01` (api) r.156 noemt het wel. |
| A: kopregels in api (0.8 rev 13 / rev 9) | klopt | `api/organisatie.md` r.7, `api/proces-catalogus.md` r.7. |
| B: M-B1 telling, `check.js` telt `n.v.t.` als aanwezig | klopt | Zelf nagerekend (25/25/23/9; ACT-01.28 en ACT-02.16 `skl_status` heeft waarde "n.v.t."). Dit sluit aan op de correctie in de opdracht. |
| B: M-B2 dekking mist `uitbreiden` bij vier skills | klopt | Zie O-02. |
| B: M-B3 `architectuurprofielen` mist CAP-02 en AGT-01-koppeling | klopt | `skills[].dekking` alleen CAP-05; `gebruikers` bevat AGT-01, geen activiteit van AGT-01 gebruikt hem. |
| B: M-B4 ACT-01.3/01.4 `bestaat` terwijl `wijziging_0_10` uitbreiden noemt | klopt | `koppelingen` ACT-01.3 `bestaat`; ACT-01.4 heeft de skill niet. |
| B: M-B5 CAP-11 naam | klopt | CAP-11 "API-contracten ontwerpen". |
| C: C-01 GOV-02 `bij_goedkeuring`, C-03 beslisser ACT-02.6, C-05 ACT-01.14 naam, C-07 GOV-12 zonder `wijziging_0_10` | klopt | Geverifieerd in `goedkeuringen`/`koppelingen`/`activiteiten`. |
| C: C-02, C-04, C-06, C-08, C-09 | aannemelijk | C-04 (GOV-03/04/05/13 `processen` zonder "bij P3") en C-06 (GOV-07 `informatie`) kloppen met de tekst; C-02/C-08/C-09 zijn interpretaties zonder register-tegenbewijs. |
| D: D-01, D-02 (zie A), D-03, D-05, D-08, D-09 | klopt | D-03: ACT-01.3, 02.3, 02.12, 02.6, 01.59 `bestaat`; D-05: zes skills zonder `wijziging_0_10`; D-08 zie K-03. |
| D: D-04, D-06, D-07 | niet individueel nagelopen | Redenering ligt in `prc-02` en in `skills`; niet door mij herberekend. |

Advies: bied de meldingen na indiening als één lijst (register-gaten, geen blokkade) aan Dr. Evil of Socrates voor een volgende CHG. Verwijs er in de documenten voor Carlo niet naar (K-01).

## Wat ik niet kon toetsen

- Werking van skills en agents, en of de genoemde skills en agents in Paperclip bestaan (volgens de bron: skilllijst). De matrixen zeggen "werking: niet vastgesteld (OPEN-11)", zoals voorheen.
- Pagina 0.4 en uitbreidingsgids 0.4 (andere scope; nog niet klaar).
- De volledige proza-inhoud van de nieuwe skillspecificaties, het agentprofiel en `organisatie` §6 is niet zin voor zin vergeleken met `v010-voorstel`, `prc-01` en `prc-02`; ik heb een steekproef gedaan (begrippen, risico's, nieuwe skills, quality-gates, backlog-management) en geen onbronde beweringen gevonden behalve de afleidingen onder K-02, K-03 en K-04.
- Een technisch geldig weergave-document is niet automatisch inhoudelijk juist; de inhoudelijke keuzes zelf zijn door B-12 goedgekeurd en hier niet opnieuw beoordeeld.
