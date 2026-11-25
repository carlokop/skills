# Modelcontrole model 0.9 en pagina 0.3 (2026-10-30)

| | |
| --- | --- |
| Scope | CHG-013 (model 0.9, Concept: verwerking van besluit B-09, kaart `e2fd31e9`, nieuwe bevinding FND-027) en CHG-014 (pagina 0.3 en uitbreidingsgids 0.3) ten opzichte van het goedgekeurde model 0.8 (kaart `66da5f92`). Volledig: `register` en alle gewijzigde weergaven. De ongewijzigde documenten alleen op ongewijzigdheid en op resten van het oude gedrag van GOV-07. |
| Datum | 2026-10-30 |
| Uitgevoerd door | aparte agent (bpmn-modelcontrole), niet de maker. Met `bpmn-modelcontrole` en `bpmn-conventies`. De modellen zijn niet aangepast. |
| Gecontroleerd | `v09/register.md` (YAML geparsed met js-yaml: geldig), `prc-02`, `organisatie`, `bevindingen`, `verantwoordelijkheden`, `capabilities-en-skills`, `agent-skillmatrix`, `activiteit-skillmatrix`, `skill-specificaties`, `uitbreidingsgids`, `wijzigingen` (gewijzigd). `agentprofiel-atlas`, `paperclip-mapping`, `prc-01`, `prc-03`, `prc-04`, `prc-05`, `proces-catalogus`, `voorstellen` (moeten ongewijzigd zijn). Pagina `eindontwerp/organisatiemodel.html` (0.3), `build/build.js`, `build/template.html`, `build/check.js`; vorige `organisatiemodel-0.2.html` en `build-0.2-backup/`. |
| Vergeleken met | de goedgekeurde 0.8: `v08/*.md` (`diff -u` per document; JSON-vergelijking per YAML-sectie van `register`). Opdracht: `v09/SPEC-CHG-013.md`. Bronnen voor de feiten: `SKILL.md` van `escalation-management` en `weekmoment` van Dr. Evil. Alleen gelezen. |

## Uitkomst

**Geen blokkerende bevindingen, vier waarschuwingen (K-01 t/m K-04) en vijf opmerkingen (K-05 t/m K-09).** B-09 is op de kern juist en volledig verwerkt: de wijzigingen in het register beperken zich tot wat CHG-013 noemt (meta, PRC-02, ACT-02.1, ACT-02.2, GOV-07, SKL-22, SKL-24, koppeling ACT-02.1, ASM-14), alle skillcitaten (Feit) zijn letterlijk, de telling 25/24/15/7 klopt in het register, in `activiteit-skillmatrix`, in `wijzigingen` en op de pagina, de ongewijzigde documenten zijn byte-identiek aan 0.8, en er is geen ID hergebruikt. De pagina 0.3 bouwt zonder fouten (`check.js`: 802 controles, 0 fouten; `klikproef.js`: 5696 acties, 0 fouten).

De waarschuwingen gaan over de grens tussen wat Carlo besloot en wat het model erbij zet (K-01), een statusregel op de pagina die twee ongewijzigde documenten als Concept 0.9 opvoert (K-02), een verouderde zin in de samenvatting van de activiteit-skillmatrix (K-03) en een verouderde bronregel in de uitbreidingsgids (K-04). Alle vier zijn klein te herstellen. K-02 en K-04 vragen een nieuwe bouw van de pagina.

## Checks

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| B-09 juist en volledig verwerkt (GOV-07, ACT-02.1, ACT-02.2, PRC-02) | voldoet | `register` B-09 (r.33) volgt de optietekst: flowcheck vindt te weinig klare taken, volgorde wijst de wens niet aan, Dr. Evil vraagt direct, één keer, op een issue; zonder antwoord herinnert hij pas op het weekmoment; uitzondering in `escalation-management` via PRC-08. GOV-07 (r.354 t/m 368): `moment`, `informatie`, `escalatie`, `bron`. ACT-02.1 en ACT-02.2 (r.178, 179), PRC-02 (r.137). `prc-02` tabel ACT-02.1/02.2, GOV-07, akkoordenparagraaf, ASM-14, versiehistorie 0.9. Het diagram van PRC-02 is gelijk aan 0.8 (diff). Zie K-01 voor wat het model er voorbij de optietekst bij zet. |
| Niets toegevoegd dat Carlo niet besloot | voldoet niet (waarschuwing) | K-01: SKL-24 als tweede uit te breiden skill, "één keer" bij de herinnering, de uitgewerkte werkwijze als Besloten. |
| Skillcitaten (Feit) letterlijk | voldoet | `escalation-management` SKILL.md: "Al het andere bewaar je voor het weekmoment" en "Een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment.". `weekmoment` SKILL.md: "Herinner de gebruiker niet tussendoor. Dringende zaken gaan alleen via de triggers in `escalation-management`." en de regel dat alleen open punten van het vorige weekmoment-issue worden overgenomen. Gebruikt in `register` SKL-22 (r.837), SKL-24 (r.870), GOV-07 `bron` (r.368), `bevindingen` FND-027, `verantwoordelijkheden`, `capabilities-en-skills`, `skill-specificaties`. Alleen de hoofdletter is op twee plekken kleiner gemaakt (K-09). |
| Skillstatus: SKL-22 en SKL-24 uitbreiden in register, koppeling, matrices, specificaties | voldoet | `register` SKL-22/SKL-24: nieuwe dekking CAP-20 `uitbreiden`, ACT-02.1, besluit B-09. Koppeling ACT-02.1 (r.1077): skl [SKL-19, SKL-24, SKL-23, SKL-22], status SKL-24 en SKL-22 `uitbreiden`. `activiteit-skillmatrix` r.49 (gedeeltelijk), `agent-skillmatrix` r.35, 37, 61 (vereist, uitbreiden; Dr. Evil), `capabilities-en-skills` CAP-20 en r.69, 71, `skill-specificaties` overzicht en twee nieuwe secties. De pagina toont 14 bestaande skills om uit te breiden (was 12 in 0.8; berekend uit het register). |
| Telling 25/24/15/7 (71 activiteiten) overal | voldoet | Eigen telling met de regel van `check.js` over `register` v0.9: aanwezig 25, gedeeltelijk 24, ontbreekt 15, n.v.t. 7 (v0.8: 26/23/15/7 bevestigd). `activiteit-skillmatrix` Telling en Samenvatting; `wijzigingen` CHG-013; pagina (jsdom-render van `#skillsum`: 25/24/15/7, 71). De cijfers 26/23 in CHG-011/CHG-012 en in de kolom 0.8 zijn historisch en kloppen. Zie K-03 voor een zin die niet meeging. |
| Register: YAML, meta, wijzigingen beperkt tot CHG-013 | voldoet | JSON-vergelijking v08/v09 per sectie: gewijzigd zijn alleen `meta` (versie, status, datum, besluiten), PRC-02 (status, versie, wijziging), ACT-02.1, ACT-02.2, GOV-07, SKL-22, SKL-24 (dekking), koppeling ACT-02.1, ASM-14. Niets vervallen of verwijderd. `meta.geldend` blijft 0.8; `meta.goedgekeurd` ongewijzigd. 71 activiteiten, 14 beslissingen, 13 GOV, 70 basis en 1 variant. |
| Statussen en versies: elk gewijzigd document Concept 0.9 met "tot goedkeuring geldt 0.8" | voldoet | `register` (statusregel en `meta`), `prc-02`, `organisatie`, `bevindingen`, `verantwoordelijkheden`, `capabilities-en-skills`, `agent-skillmatrix`, `activiteit-skillmatrix`, `skill-specificaties`: "**Concept**, versie 0.9 (2026-10-30), CHG-013 (B-09). Tot Carlo 0.9 goedkeurt, geldt 0.8 (Goedgekeurd 2026-10-29, kaart `66da5f92`)." Versiehistorie bijgewerkt in `prc-02` (0.9) en `skill-specificaties` (0.9). `uitbreidingsgids` 0.3 en `wijzigingen` ("Status van de versies") noemen 0.9 Concept en dat 0.8 geldt. |
| Ongewijzigde documenten ongewijzigd | voldoet | `cmp v08/X v09/X` gelijk voor `agentprofiel-atlas`, `paperclip-mapping`, `prc-01`, `prc-03`, `prc-04`, `prc-05`, `proces-catalogus`, `voorstellen`. Ze blijven 0.8 Goedgekeurd. Zie K-05 en K-02. De goedgekeurde bestanden in `v08/` zijn niet overschreven (datum 29 oktober; alleen `v08/VOORTGANG.md` is een werkbestand). |
| ID's: B-09, FND-027, CHG-013, CHG-014 bestaan en zijn uniek | voldoet | B-09 alleen in `register` `meta.besluiten`; FND-027 één rij in `bevindingen` (FND-001 t/m FND-027 aaneengesloten); CHG-013 en CHG-014 één rij in `wijzigingen` (CHG-001 t/m CHG-014 aaneengesloten). Geen nieuwe ACT-, G-, GOV-, CAP-, SKL-, ASM- of OPEN-ID's. |
| Vrije ID's in `uitbreidingsgids` §6 | voldoet | FND-027 hoogste, FND-028 eerstvolgende; CHG-014 hoogste, CHG-015 eerstvolgende. FND-028 en CHG-015 komen alleen voor als "eerstvolgende" in §6 en in de CHG-014-regel. Overige regels van §6 ongewijzigd en juist (PRC-08, CAP-23, SKL-45, GOV-13, ASM-23, OPEN-13, PRP-028). |
| Elke verwijzing wijst naar een bestaand element | voldoet | Script over alle `v09/*.md`: elk ACT-, G-, GOV-, CAP-, SKL-, ASM-, OPEN-ID bestaat in het register, behalve de bewust vrije ID's in `uitbreidingsgids` §3 en §6 (ACT-09.x, G-09.1, CAP-24, SKL-29, SKL-39, SKL-46, GOV-14, ASM-24, OPEN-14: voorbeelden of eerstvolgende). |
| Andere plekken met het oude gedrag van GOV-07 | voldoet | Zoeken op "tussendoor", "herinner", "weekmoment" en "GOV-07" in alle documenten van v09. "Dr. Evil herinnert niet tussendoor" staat nog alleen als citaat van de oude stand in FND-027. Alle gewijzigde plekken noemen nu de directe vraag met de uitzondering: `register` GOV-07 en ASM-14, `prc-02`, `organisatie` (§3 ROL-01/ROL-02, §5, §6 punt 6), `verantwoordelijkheden` (ACT-02.1, akkoorden, GOV-07). Ongewijzigde documenten (`paperclip-mapping`, `prc-03`, `proces-catalogus`, `voorstellen`) noemen GOV-07 of het gedrag niet; OPEN-09 gaat over een termijn voor akkoorden in het algemeen en blijft staan. |
| Pagina 0.3: statusblok, GOV-07 met moment, B-09 in sectie 3 (c), FND-027 zichtbaar | voldoet | Jsdom-render: kop "Pagina 0.3, model 0.9"; statusblok: "Model 0.9: Concept (CHG-013, B-09), ter goedkeuring bij GK-4. Tot je 0.9 goedkeurt, geldt 0.8 (Goedgekeurd 2026-10-29, kaart 66da5f92)" en "Pagina 0.3: Concept ... samen met model 0.9 en de uitbreidingsgids 0.3". GOV-07 krijgt de regel "Wanneer je de vraag krijgt" (`template.html` r.512; `check.js` toetst `moment`). Sectie 3 (c) bevat B-09 met de optietekst, label Besloten, en het pakket naar Dr. Evil; FND-027 staat in sectie 3 (b), in §5 van de verantwoordelijkheden en in sectie 9. Titel, footer en sectie 9 zeggen 0.3 en 0.9. |
| Pagina: geen resten die nu fout zijn | voldoet niet (waarschuwing) | Geen "pagina 0.2" of "model 0.8 ter goedkeuring" als huidige stand; de resterende vermeldingen zijn terecht ("Vorige: pagina 0.2 op model 0.8", "Je hebt model 0.8 goedgekeurd"). Wel fout: de statusrij "Organisatieanalyse" en "Skill-specificaties en agentprofiel Atlas" (K-02) en de bronregel van de gids in sectie 10 (K-04). |
| Pagina: ACT- en GOV-ID's precies één keer; status, versie en skillstatus gelijk aan het register; laadt zonder fouten | voldoet | `check.js`: 71 activiteiten, 14 beslissingen, 13 GOV, 802 controles, 0 fouten, skillstatus 25/24/15/7, registerversie 0.9. `klikproef.js`: alle ID's als stap getoond (PRC-01 36/36, PRC-02 27/27, PRC-03 t/m PRC-06 vol), 0 fouten, 0 console-meldingen. Dit is jsdom, geen echte browser. De bouw leest `v09/register.md`; de datum van `organisatiemodel.html` (11:05) ligt na die van alle bronnen (laatste 11:04). `organisatiemodel.html` is byte-gelijk aan `organisatiemodel-0.3.html`; `organisatiemodel-0.2.html` is bewaard. |
| Pagina voegt niets toe dat niet in het register of de goedgekeurde documenten staat | voldoet | Diff `build-0.2-backup/` met `build/`: alleen versie en kop, B-09 in 3 (c), statusblok, het veld `moment`, de statusrijen, de B-09-regels in secties 1 en 9, en een datumfix in `build.js` r.199. De regel "Na je vraag over de planning" volgt uit het werkbestand `v08/VOORTGANG.md` (comment `31df7f80`) en staat nergens anders in het model. |
| Bevindingen, aannames, voorstellen en feiten gescheiden en gemarkeerd | voldoet niet (waarschuwing) | FND-027 en B-09 zijn gemarkeerd (Feit, Besloten). Zie K-01 voor de uitgewerkte werkwijze die als Besloten staat. |
| Wijzigingshistorie bijgewerkt | voldoet | `wijzigingen` CHG-013 (r.17) en CHG-014 (r.18) en de statusparagraaf ("0.9 (CHG-013, jouw besluit B-09) is Concept. Tot je 0.9 goedkeurt, geldt 0.8. Op 0.9 bouwen de pagina 0.3 en de uitbreidingsgids 0.3 (CHG-014, Concept)"). `prc-02` en `skill-specificaties` hebben een regel in de versiehistorie. Zie K-08 voor een kleine omissie in "Geraakt". |
| Goedgekeurd model niet overschreven | voldoet | Alles staat in `v09/`; `v08/` is ongewijzigd op `VOORTGANG.md` na; `register.md` en de overige bestanden in `organisatie/` (0.7 en ouder) zijn niet geraakt. |
| Procesmodel: doel, trigger, rollen, routes, negatieve uitkomsten, GOV-markering | voldoet | Geen activiteit, beslissing of route gewijzigd. G-02.1 "nee → ACT-02.2 (GOV-07)" en de afwijzing bij GOV-07 ("n.v.t.: je kiest. Kies je nog niet, dan start PRC-02 niet") blijven. Het nieuwe geval "geen antwoord" heeft een uitgang: de herinnering op het weekmoment (GOV-07 `escalatie`), daarna blijft de regel dat PRC-02 niet start. Zie K-07. |
| Verwijzingen naar buiten (agents, skills bestaan) | voldoet | `escalation-management` en `weekmoment` staan in de skillmap van Dr. Evil. Of ze aan Dr. Evil gekoppeld zijn en hoe ze werken: niet te beoordelen (OPEN-11). |
| `.bpmn`-validatie | niet te beoordelen | Er is geen `.bpmn`-bestand en geen validator; de procesmodellen zijn Mermaid in de procesbeschrijvingen. |

## Bevindingen

### Blokkerend

Geen.

### Waarschuwingen

**K-01 (waarschuwing) Het model zet meer als Besloten (B-09) dan Carlo besloot.**
Plek: `register` B-09 `gevolg` (r.33), SKL-24 dekking (r.870, `besluit: B-09`), GOV-07 `escalatie` (r.367); `capabilities-en-skills` r.71 ("Besluit: B-09 (Besloten)"); `agent-skillmatrix` r.37; `skill-specificaties` r.7 (Label: "Alles hieronder is Besloten ... voor SKL-22 en SKL-24 B-09"), secties SKL-22 en SKL-24 ("Besluit: B (B-09)", "Gewenst (B, B-09)", r.231 en r.257); `prc-02`, `organisatie`, `verantwoordelijkheden`, `bevindingen` FND-027 (herinnering "één keer").
Wat er mis is: de optietekst van Carlo noemt één skill ("Daarvoor moet escalation-management een uitzondering krijgen") en zegt over de herinnering alleen "herinnert hij je pas op het weekmoment". "Één keer" hoort in de optie bij de directe vraag ("je wordt één keer extra gestoord"). Het model doet drie dingen meer en labelt ze Besloten: (1) `weekmoment` (SKL-24) uitbreiden voor een open GOV-07-vraag, ook in B-09 `gevolg` in het register; (2) de herinnering "één keer" (GOV-07, `prc-02`, `organisatie`, `verantwoordelijkheden`); (3) de uitgewerkte werkwijzen in `skill-specificaties` ("kijk eerst of de volgorde de wens aanwijst", "één herinnering per open vraag per weekmoment-issue", "geen uitzondering voor andere voorstellen over prioriteit of focusdoel", "de vijf triggers blijven ongewijzigd", "op een eigen issue") en de voorbeelden. Wat de skill `weekmoment` nu zegt (alleen open punten van een vorig weekmoment-issue; "Herinner de gebruiker niet tussendoor") maakt een aanpassing van SKL-24 wel aannemelijk, maar dat is een gevolgtrekking en geen besluit. De opdracht (`SPEC-CHG-013`) schreef SKL-24 en "één keer" zelf voor, dus de maker volgde de spec; de spec gaat hier verder dan de kaart.
Voorstel voor herstel: label de uitbreiding van SKL-24, de uitgewerkte werkwijze en "één keer" bij de herinnering als Voorstel of Aanname (ASM) ter bevestiging bij GK-4, en laat B-09 in `meta` en op de pagina alleen de optietekst bevatten (dat doen ze al). Of laat Carlo ze op de kaart bevestigen. Haal "Alles hieronder is Besloten (... B-09)" uit het Label van `skill-specificaties` en zeg dat de werkwijzen van SKL-22 en SKL-24 een voorstel zijn.

**K-02 (waarschuwing) De statustabel op de pagina zet twee ongewijzigde documenten op Concept 0.9.**
Plek: `eindontwerp/build/build.js` (statusrijen, r.288 t/m 294); pagina sectie 1, tabel "Status en versie van de modellen": rij "Organisatieanalyse (ronde 1)", documenten "organisatie, bevindingen, voorstellen" = "Concept, versie 0.9"; rij "Skill-specificaties en agentprofiel Atlas (ronde 3)" = "Concept, versie 0.9".
Wat er mis is: `voorstellen.md` en `agentprofiel-atlas.md` zijn niet gewijzigd en zijn nog "Goedgekeurd (2026-10-29, Carlo, kaart 66da5f92), versie 0.8". De pagina leidt de status van de hele rij af van één document (`organisatie`, `skill-specificaties`). Carlo ziet daardoor twee documenten als onderdeel van 0.9, terwijl ze dat niet zijn. `check.js` laat dit toe (de regex accepteert "Concept, versie 0.9").
Voorstel voor herstel: splits de rijen of zeg in de rij welke documenten Concept 0.9 zijn en welke Goedgekeurd 0.8 blijven, en bouw de pagina opnieuw (build, check, klikproef).

**K-03 (waarschuwing) De uitleg bij de telling in `activiteit-skillmatrix` telt ACT-02.1 niet mee.**
Plek: `activiteit-skillmatrix` Samenvatting, r.127: "Waarom meer 'gedeeltelijk' dan in 0.7 (35 / 12 / 15 / 7)? Negen activiteiten zijn van aanwezig naar gedeeltelijk gegaan, en twee rijen zijn nieuw".
Wat er mis is: ten opzichte van 0.7 (35 aanwezig, 12 gedeeltelijk) is het nu 25 en 24: tien activiteiten zijn van aanwezig naar gedeeltelijk gegaan (de negen uit B-08 plus ACT-02.1) en twee rijen zijn nieuw. De zin is in 0.8 geschreven en niet meegegaan. De drie opsommingen eronder noemen ACT-02.1 niet; die staat wel in de punt erboven ("Wijziging in 0.9").
Voorstel voor herstel: "Tien" met een verwijzing naar de 0.9-punt erboven, of de vergelijking met 0.7 vervangen door 0.8 en 0.9.

**K-04 (waarschuwing) De bronregel van de `uitbreidingsgids` noemt nog register v0.8.**
Plek: `uitbreidingsgids` r.6 (Bron: "`register` v0.8, Goedgekeurd (2026-10-29, Carlo, kaart `66da5f92`); besluit B-08 (kaart `2b7a6d2d`)"); dezelfde tekst staat in sectie 10 van de pagina.
Wat er mis is: de statusregel van de gids zegt dat 0.3 de gids bijwerkt naar register v0.9 en dat alleen §6 verandert. De Bron-regel en de Label-regel (r.7, "uit B-08") zijn niet meegegaan. §6 zelf zegt wel "stand register v0.9".
Voorstel voor herstel: Bron naar "register v0.9 (Concept; geldend 0.8)" en B-09 erbij; bouw de pagina opnieuw. Zeg in de statusregel dat Bron en §6 veranderen.

### Opmerkingen

**K-05 (opmerking) `proces-catalogus` toont PRC-02 nog als Goedgekeurd 0.8.**
Plek: `proces-catalogus` r.22 en r.5 ("afgeleid uit `register` v0.8"). Het register zegt PRC-02 versie 0.9, "Concept (wijziging op Goedgekeurd 0.8)". De spec liet het document ongemoeid en 0.8 geldt nog, dus dit is geen fout. Maar het overzicht en het register verschillen op dit punt, en de pagina noemt `proces-catalogus` bij "Procesmodellen" (waar PRC-02 wel als 0.9 staat). Overweeg de statuskolom of de regel "Nieuw in 0.9" toe te voegen, of laat Carlo weten dat 0.8 hier nog geldt.

**K-06 (opmerking) Stray opmaak in `organisatie` regel 6.**
De rij Versie heeft een afsluitend `**` na de 0.8-tekst ("... ASM-21, 22 en 23 nieuw).**"). In 0.8 sloot die de vetgedrukte 0.8-tekst; nu staat de vette 0.9-tekst ervoor, dus de opmaak klopt niet (drie `**` in de regel). Alleen opmaak.

**K-07 (opmerking) GOV-07 heeft in het register nog label B (TL-V2).**
Plek: `register` GOV-07 `label` (r.359); de pagina toont dat label. In `prc-02` staat bij GOV-07 en ACT-02.1/02.2 wel "B (TL-V2, B-09)". Eenduidiger is `label: B (TL-V2, B-09)`. Daarnaast noemt B-09 alleen de flowcheck als aanleiding; PRC-02 start volgens PRP-014 ook op het weekmoment (PRC-07). Het model laat dat geval impliciet: de vraag komt dan op het weekmoment zelf. Eén zin in `prc-02` of ASM-14 maakt dat expliciet (als Aanname).

**K-08 (opmerking) CHG-013 noemt niet alle geraakte documenten.**
Plek: `wijzigingen` CHG-013, kolom Geraakt. `organisatie` is gewijzigd (§3, §5, §6, "Wat is er veranderd in 0.9") en `wijzigingen` zelf ook, maar staan er niet bij ("... en de weergaven die GOV-07 of de telling noemen" dekt het globaal). `skill-specificaties` r.10 zegt ook nog dat het pakket naar Dr. Evil "na de goedkeuring van 0.8" gaat; B-09 zegt "gaat mee in het pakket naar Dr. Evil (PRC-08)" en het pakket van B-08 is nog niet verstuurd. Dat is niet fout, maar het moment (na 0.8 of na 0.9) is niet vastgelegd.

**K-09 (opmerking) Citaten zijn op twee plekken niet letterlijk, en de gevolgtrekking is geen Feit.**
Plek: `register` GOV-07 `bron` (r.368) en `verantwoordelijkheden` GOV-07: "escalation-management ('een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment')" met kleine letter en zonder punt; ook "herinner de gebruiker niet tussendoor" (zo al in 0.8). Inhoudelijk gelijk aan de skill. In FND-027 staat "Volgens de skills komt de vraag dus pas op maandag, en kan een uitbreiding tot een week stilstaan": dat is een gevolgtrekking uit twee citaten en geen citaat zelf; het staat niet apart als Aanname gemarkeerd. Het volgt wel de redenering van Carlo's vraag.

## Wat ik niet kon toetsen

- Alles wat alleen in Paperclip staat: de kaart `e2fd31e9` (vraag `gov07`, gekozen optie), de comments `31df7f80` en `a593f052`, het vervallen zijn van de GK-4-kaart `0a368348`, en of de documenten van 0.9 al zijn geüpload. De letterlijke optietekst van B-09 heb ik alleen kunnen vergelijken met `SPEC-CHG-013`, niet met de kaart zelf.
- Of `escalation-management` en `weekmoment` aan Dr. Evil zijn gekoppeld en hoe ze in de praktijk werken (OPEN-11). Ik heb alleen de `SKILL.md`-bestanden gelezen.
- Of Dr. Evil de directe vraag technisch kan sturen (de flowcheck-routine bestaat nog niet, FND-013) en of een issue aan Carlo hem wekt of niet.
- De pagina is getoetst met jsdom 30.1.3, niet in een echte browser: geen weergave, kleur, toegankelijkheid of afdrukken. De Mermaid-diagrammen van `prc-02` zijn niet opnieuw op leesbaarheid getoetst; ze zijn gelijk aan 0.8.
- Of de uitbreiding van SKL-24 de bedoeling van Carlo is: dat is zijn besluit (zie K-01).
- `.bpmn`-validatie: niet aanwezig.

## Oordeel

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. B-09 is juist en volledig verwerkt (GOV-07, ACT-02.1, ACT-02.2, PRC-02), de citaten uit de skills zijn letterlijk, de skillstatus en de telling 25/24/15/7 zijn overal gelijk, statussen en versies zijn gelijk, de ID's kloppen (FND-028 en CHG-015 vrij), de ongewijzigde documenten zijn ongewijzigd en de pagina 0.3 bouwt en klikt zonder fouten.

Herstel K-01 en K-02 bij voorkeur vóór indiening: K-01 gaat over wat Carlo ziet als zijn besluit, K-02 over een statusregel die twee documenten ten onrechte bij 0.9 rekent. K-03 en K-04 zijn kleine correcties die mee kunnen. K-02 en K-04 vragen een nieuwe bouw van de pagina (`node build/build.js && node build/check.js && node build/klikproef.js`). Een hercontrole van K-01 t/m K-04 volstaat; de rest van het model hoeft niet opnieuw.

## Hercontrole (2026-10-30)

Uitgevoerd door dezelfde onafhankelijke controleur als de eerste ronde (niet de maker). Er zijn geen modeldocumenten aangepast. Gecontroleerd: `v09/*.md` (register als bron van waarheid), `eindontwerp/build/` en `eindontwerp/organisatiemodel.html`. `node build/check.js`: 802 controles, 0 fouten, skillstatus 25/24/15/7, registerversie 0.9. `node build/klikproef.js`: 5696 acties, 0 fouten, 0 console-meldingen (jsdom, geen echte browser). `organisatiemodel.html` is byte-gelijk aan `organisatiemodel-0.3.html` en jonger dan alle bronnen. De ongewijzigde documenten (`agentprofiel-atlas`, `paperclip-mapping`, `prc-01`, `prc-03`, `prc-04`, `prc-05`, `voorstellen`) zijn nog byte-identiek aan `v08/`. Het register verschilt van 0.8 alleen in `meta`, PRC-02, ACT-02.1, ACT-02.2, GOV-07, SKL-22, SKL-24, de koppeling van ACT-02.1, ASM-14 en de nieuwe ASM-24 en ASM-25; de YAML bouwt, ASM-ID's zijn uniek.

### Resultaat per K-punt

| K-punt | Resultaat | Bewijs |
| --- | --- | --- |
| K-01 | **deels** | Hersteld: "één keer" staat alleen nog bij de directe vraag, niet bij de herinnering (`register` r.367 en r.362, `prc-02` r.87 en r.191, `organisatie` r.118, `verantwoordelijkheden` r.150; geen enkele plek heeft nog "herinnert ... één keer op het weekmoment", ook niet op de pagina). ASM-24 en ASM-25 staan in `register` (r.1140, r.1141, `nieuw_in: 0.9`, `ter_bevestiging: GK-4`), in `prc-02` (r.192, r.193) en op de pagina (sectie 9, tag "ter bevestiging bij GK-4"). B-09 in `meta` (r.33) en `gevolg` noemt SKL-24 alleen met "ASM-24, ter bevestiging". `skill-specificaties` r.7 (Label) scheidt Besloten (uitzondering SKL-22), Aanname (SKL-24 door ASM-24) en Voorstel (werkwijzen); r.231 "Gewenst (B, B-09; de werkwijze hieronder is een Voorstel)", r.257 "Gewenst (A, ASM-24; ... Voorstel)"; `capabilities-en-skills` r.71 en `agent-skillmatrix` r.37 zeggen "Aanname (ASM-24, ter bevestiging)". Nog niet hersteld: de uitbreiding van `weekmoment` staat op vier plekken nog zonder voorbehoud als gevolg van B-09, zie K-10. |
| K-02 | hersteld | `build.js` r.288 t/m 296: `multi()` leidt de status per document af en groepeert op status. Pagina (`data.json` `status`): "organisatie, bevindingen: Concept, versie 0.9 · voorstellen: Goedgekeurd ... versie 0.8"; "skill-specificaties: Concept, versie 0.9 · agentprofiel-atlas: Goedgekeurd ... versie 0.8"; PRC-02 0.9 Concept naast PRC-01/03/04/05 en PRC-06 Goedgekeurd. Klopt met de statusregels in `v09/`. |
| K-03 | hersteld | `activiteit-skillmatrix` r.127: "Tien activiteiten zijn van aanwezig naar gedeeltelijk gegaan (de negen hieronder uit 0.8, plus ACT-02.1 in 0.9, zie het punt hierboven), en twee rijen zijn nieuw". Klopt met 35 / 12 naar 25 / 24. |
| K-04 | hersteld | `uitbreidingsgids` r.6: Bron "`register` v0.9 (Concept; tot goedkeuring geldt v0.8, ...); besluiten B-08 ... en B-09"; r.7 Label noemt B-09. Sectie 10 van de pagina bevat de nieuwe tekst; "register v0.8" komt er niet meer voor. §6 (r.81, r.83, r.85): ASM-25 hoogste, ASM-26 vrij; FND-027 hoogste, FND-028 vrij; CHG-014 hoogste, CHG-015 vrij; sluit aan op `register`, `bevindingen` en `wijzigingen`. Kleinigheid: de statusregel (r.5) zegt "alleen de bronregel en de vrije ID's in §6", maar ook de Label-regel is aangepast. |
| K-05 | hersteld | `proces-catalogus` r.5 (Status "Concept, versie 0.9 ... alleen de rij PRC-02") en r.22 (PRC-02: "Concept 0.9 (wijziging op Goedgekeurd 0.8, CHG-013)", met de vraag direct, één keer). Zie K-11 voor de Versie-rij. |
| K-06 | hersteld | `organisatie` r.6: de Versie-rij heeft geen losse `**` meer; de 0.9-tekst en de 0.8-tekst zijn los vet/gewoon. |
| K-07 | hersteld | `register` r.359: `label: B (TL-V2, B-09)`. Het geval "PRC-02 start op het weekmoment" is een Aanname geworden: ASM-25 (`register` r.1141, `prc-02` r.193). |
| K-08 | hersteld | `wijzigingen` r.17 (Geraakt): register, PRC-02, proces-catalogus, organisatie, verantwoordelijkheden, bevindingen, de drie matrices, skill-specificaties en wijzigingen; ongewijzigde documenten apart genoemd. Moment van het pakket vastgelegd in `skill-specificaties` r.8: "in één pakket na GK-4 (B-08 en B-09 samen ...)". |
| K-09 | deels | Hersteld: `bevindingen` r.56 citeert nu letterlijk ("Herinner de gebruiker niet tussendoor. Dringende zaken gaan alleen via de triggers in `escalation-management`", "... dat hoort op het weekmoment.") en zet de gevolgtrekking apart: "Gevolgtrekking (geen citaat): ...". Het citaat van `escalation-management` in `register` r.368 en `verantwoordelijkheden` r.150 heeft hoofdletter en punt. Niet hersteld: `register` r.368 en `verantwoordelijkheden` r.150 hebben nog `("herinner de gebruiker niet tussendoor")` met kleine letter; `verantwoordelijkheden` r.211 sluit het citaat af zonder punt en noemt "Volgens de skill komt de vraag dus pas op het weekmoment" niet als gevolgtrekking. Alleen opmaak van een citaat; geen inhoudelijk verschil. |

### B-09 naast de optietekst in `SPEC-CHG-013.md` r.6

Optietekst: "Dr. Evil vraagt het meteen op een issue. Antwoord je niet, dan herinnert hij je pas op het weekmoment. Zo gaat het werk sneller door, maar je wordt één keer extra gestoord. Daarvoor moet escalation-management een uitzondering krijgen; die gaat mee in het pakket naar Dr. Evil (PRC-08)."

`register` r.33 (`tekst`, en dus de pagina): "... vraagt Dr. Evil het ROL-01 direct, één keer, op een issue (GOV-07). Antwoordt ROL-01 niet, dan herinnert Dr. Evil hem pas op het weekmoment. Daarvoor krijgt escalation-management een uitzondering (via PRC-08)."

Uitkomst: inhoudelijk gelijk, geen woord erbij dat Carlo niet koos. De tekst is een samenvatting in de derde persoon en geen letterlijk citaat: de zin "Zo gaat het werk sneller door, maar je wordt één keer extra gestoord" is weggelaten, "meteen" is "direct, één keer" (het label van het gekozen antwoord) en "gaat mee in het pakket" is "via PRC-08". "Pas" staat er nog. SKL-24 en "één keer" bij de herinnering staan niet meer in de tekst; `gevolg` noemt SKL-24 met ASM-24. Geen bevinding; de pagina (`build.js` r.202) presenteert het niet als aanhaling.

### Nieuwe bevindingen

**Blokkerend:** geen.

**Waarschuwingen**

**K-10 (waarschuwing) De uitbreiding van `weekmoment` staat nog op vier plekken als gevolg van B-09, en `organisatie` §7 kent ASM-24 en ASM-25 niet.**
Plek: `prc-02` r.10 (de bullet "Moment van de vraag bij GOV-07" eindigt op **B** en zegt "past `weekmoment` aan (via PRC-08)"); `bevindingen` r.56 ("Opgelost: B-09 ... Daarvoor krijgen `escalation-management` ... en `weekmoment` ... een uitbreiding"); `verantwoordelijkheden` r.211 ("B (B-09): ... `escalation-management` en `weekmoment` worden uitgebreid via PRC-08"); `organisatie` r.23 ("De skills `escalation-management` en `weekmoment` moeten hiervoor worden uitgebreid"). Verder `organisatie` §7 (r.184: "Zie `register`: ASM-01 t/m ASM-23") en de tabel "Stand 0.8" daaronder: ASM-24 en ASM-25 staan er niet in, terwijl §7 de nieuwe aannames van 0.8 (ASM-21, 22, 23) wel toont, en de Versie-rij (r.6) noemt §7 niet als gewijzigd.
Wat er mis is: dit is dezelfde fout als K-01 op andere plekken. De lezer ziet "B" of "opgelost door B-09" bij een uitbreiding van een tweede skill die Carlo niet koos; de aanname ASM-24 staat daar niet bij. Voor `organisatie` is de aannamelijst niet bijgewerkt, dus Carlo ziet de twee nieuwe aannames niet in het analysedocument.
Voorstel voor herstel: `prc-02` r.10 en `bevindingen` r.56: laat het label B alleen op de uitzondering in `escalation-management` en zet bij `weekmoment` "Aanname, ASM-24, ter bevestiging bij GK-4". `verantwoordelijkheden` r.211 en `organisatie` r.23 idem. In `organisatie` §7: "ASM-01 t/m ASM-25", twee rijen ASM-24 en ASM-25 (Aanname, ter bevestiging) toevoegen en §7 in de Versie-rij noemen. Bouw de pagina daarna opnieuw (`build.js` leest `organisatie` en `bevindingen`), met `check.js` en `klikproef.js`.

**Opmerkingen**

**K-11 (opmerking) `proces-catalogus` Versie-rij is inconsistent.**
Plek: `proces-catalogus` r.6: "0.8 (2026-10-29), afgeleid uit `register` v0.9". De Status-rij (r.5) zegt 0.9 Concept; de Versie-rij noemt nog 0.8 maar nu wel "register v0.9". Zet "0.9 (2026-10-30), afgeleid uit `register` v0.9 (... CHG-013: B-09 ...)". Ook de statustabel op de pagina (rij "Procesmodellen") noemt `proces-catalogus` bij de documenten zonder te zeggen dat het Concept 0.9 is; de PRC-02-regel in de rij dekt dat in de praktijk.

**K-12 (opmerking) Verouderde kop in `build/check.js`.**
Plek: `check.js` r.9: "skillstatus per activiteit 26 aanwezig / 23 gedeeltelijk / 15 ontbreekt / 7 n.v.t." in de commentaarkop. De toets zelf (r.94) staat op 25/24/15/7. Alleen commentaar.

### Controle op nieuwe fouten door de herstelling

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ASM-24 en ASM-25 in het register | voldoet | `register` r.1140 en r.1141, in de sectie aannames, na ASM-23; geen dubbele ID's (`data.json`: ASM-01 t/m ASM-25 zonder dubbelen). |
| ASM-24 en ASM-25 in de weergaven | deels | Aanwezig in `prc-02` (r.192, r.193), op de pagina (sectie 9), `skill-specificaties`, `capabilities-en-skills`, `agent-skillmatrix`, `wijzigingen` en de gids (§6). Ontbreekt in `organisatie` §7: zie K-10. |
| Vrije ID's `uitbreidingsgids` §6 | voldoet | ASM-26, FND-028, CHG-015 (r.81, r.83, r.85) kloppen met `register`, `bevindingen` (FND-001 t/m FND-027) en `wijzigingen` (CHG-001 t/m CHG-014). Script over alle `v09/*.md`: elk ACT-, G-, GOV-, CAP-, SKL-, ASM-, OPEN-, FND-, CHG- en PRP-ID bestaat, behalve de bewust vrije ID's in de gids en de G-nummers in de legenda's van PRC-01/02/03 (ongewijzigd t.o.v. 0.8). |
| Geen "herinnert ... één keer op het weekmoment" | voldoet | Zoeken in `v09/*.md`, `build/*.js`, `build/template.html` en `organisatiemodel.html`: alleen `SPEC-CHG-013.md` r.16 (de opdracht zelf, geen modeldocument). De overige treffers van "één keer" gaan over de directe vraag of over de optietekst ("je wordt één keer extra gestoord"). |
| Statussen en B-09 in `meta` | voldoet | `register` r.5 en `meta`: Concept 0.9, `geldend` 0.8 blijft. |
| Telling 25/24/15/7 | voldoet | `check.js` en `activiteit-skillmatrix`; ongewijzigd na de herstelling. |
| Pagina laadt en klikt | voldoet | `check.js` 0 fouten; `klikproef.js` 0 fouten. |

## Oordeel hercontrole

**Terug naar maker.** Er zijn geen blokkerende bevindingen en de bouw en de ID's kloppen, maar de herstelling is niet af: K-01 is deels hersteld (de uitbreiding van `weekmoment` staat op vier plekken nog als Besloten of als gevolg van B-09, K-10) en `organisatie` §7 kent ASM-24 en ASM-25 niet (K-10). K-09 is deels hersteld. Dat zijn kleine tekstcorrecties in `prc-02`, `bevindingen`, `verantwoordelijkheden` en `organisatie`, plus een nieuwe bouw van de pagina als `bevindingen` verandert. K-11, K-12 en de rest van K-09 kunnen meegaan. Zodra K-10 is hersteld, volstaat een korte tweede hercontrole van alleen die plekken; daarna kan het worden ingediend.

## Tweede en derde hercontrole (2026-10-30)

Uitgevoerd door dezelfde onafhankelijke controleur (niet de maker). De tweede controle vond B-09 en ASM-24 nog door elkaar in de skillmatrices; de derde vond drie zinnen over (skill-specificaties r.8 en r.36, capabilities-en-skills r.8). **Herstel na de derde controle:** die drie zinnen zijn aangepast (B-09 voor de herinnering, ASM-24 voor de uitvoering door SKL-24), de pagina is opnieuw gebouwd (check 802/0, klikproef 5696/0) en de maker heeft met grep nagelopen dat SKL-24 nergens meer zonder ASM-24 aan B-09 hangt. Daarna is geen vierde controle door een aparte agent gedaan. Het volledige verslag volgt hieronder.


Onafhankelijke controleur (niet de maker), 2026-10-30. Er zijn geen modeldocumenten gewijzigd. Pad-afkortingen: `v09/` voor de modeldocumenten, `eindontwerp/` voor pagina en bouw. Bron van de skills: `.../acp-engine/agents/03fcac18-.../runtime-skills/claude/.../.claude/skills/escalation-management--5e9dbd8d03/SKILL.md` en `.../weekmoment--e8df6b2820/SKILL.md` (gevonden, dus letterlijk getoetst).

#### Resultaat per punt

| Punt | Resultaat | Bewijs |
| --- | --- | --- |
| 1. K-10 (B-09 niet door ASM-24) | **deels** | Zie hieronder. De vier plekken uit de vorige hercontrole zijn hersteld. Op zes andere plekken staat de aanpassing van `weekmoment` nog als B-09 zonder ASM-24. |
| 2. K-09 (citaten) | **voldoet** (kleinigheid) | Zie hieronder. |
| 3. K-11 (proces-catalogus) | **voldoet** | `proces-catalogus` r.5: "Concept, versie 0.9 ... alleen de rij PRC-02"; r.6: "0.9 (2026-10-30), afgeleid uit `register` v0.9 ... Eerder 0.8"; r.22: PRC-02 "Concept 0.9 (wijziging op Goedgekeurd 0.8, CHG-013)"; r.7 Goedgekeurde versie blijft 0.8. Consistent. |
| 4. K-12 (check.js kop) | **voldoet** | `eindontwerp/build/check.js` r.9: "25 aanwezig / 24 gedeeltelijk / 15 ontbreekt / 7 n.v.t. (sinds CHG-013)". |
| 5. Bouw en pagina | **voldoet** | `node check.js`: 802 controles, 0 fouten, 25/24/15/7, register v0.9. `node klikproef.js`: 5696 acties, 0 fouten, 0 console-meldingen. `cmp organisatiemodel.html organisatiemodel-0.3.html`: gelijk (522671 bytes). Pagina 11:45:47 (0.3-kopie 11:47:08) is jonger dan alle bronnen: de nieuwste bron is `bevindingen` 11:28:43 (de uitzonderingen `controle-model-v09` 11:24, `wijzigingen` 11:44 zijn niet bepalend). De pagina bevat "Gevolgtrekking (geen citaat)" (2x) en ASM-24 "ter bevestiging". |
| 6. Nieuwe fouten | **voldoet** | Zie hieronder. |

#### 1. K-10 in detail

**Hersteld (juist gelabeld):**
- `prc-02` r.10: uitzondering `escalation-management` als **B**; "Dat ook `weekmoment` daarvoor wordt aangepast, is een aanname (ASM-24, ter bevestiging). **A**". r.191 (ASM-14 = B-09), r.192 (ASM-24, ter bevestiging), r.193 (ASM-25).
- `bevindingen` r.56: "Opgelost: B-09 ... `escalation-management` (SKL-22) een uitzondering ... Dat ook `weekmoment` (SKL-24) ... is een aanname (ASM-24, ter bevestiging)".
- `verantwoordelijkheden` r.211: "B (B-09): ... `escalation-management` krijgt een uitzondering via PRC-08; `weekmoment` ook (A, ASM-24, ter bevestiging)".
- `organisatie` r.23 ("Dat ook `weekmoment` wordt aangepast, is een aanname (ASM-24) ... ter bevestiging bij GK-4"); r.118 en r.82 noemen alleen de herinnering zelf (B-09, dat is Besloten).
- `register` r.33 (B-09 `gevolg`: "SKL-24 uitbreiden (ASM-24, ter bevestiging)"), r.837 (SKL-22, B-09), r.870 (SKL-24: "herinnering: B-09; dat deze skill die uitvoert: ASM-24"), r.1077 (opm met ASM-24), r.1140 en r.1141 (ASM-24, ASM-25).
- `skill-specificaties` r.7 (Label scheidt Besloten, Aanname en Voorstel), r.34 ("B (B-09: herinnering op het weekmoment), A (ASM-24: deze skill)"), r.257 ("Gewenst (A, ASM-24 ...)"). `capabilities-en-skills` r.71 en `agent-skillmatrix` r.37 idem.
- `organisatie` §7 (r.184) noemt "ASM-01 t/m ASM-25" en "In 0.9 zijn ASM-24 en ASM-25 nieuw (ter bevestiging bij GK-4)"; de tabel "Stand 0.9" (r.186 t/m r.189) bevat ASM-24 en ASM-25 (label Aanname); de Versie-rij (r.6) noemt "§7 (ASM-24 en ASM-25 nieuw)". Voldoet.

**Nog niet goed (de aanpassing van `weekmoment`/SKL-24 staat als gevolg van B-09, zonder ASM-24):**
1. `skill-specificaties` r.251, in het hoofdstuk SKL-24: "**Besluit:** B (B-09, kaart `e2fd31e9`), lost FND-027 op." Dat is dezelfde regel als bij SKL-22 (r.225) en spreekt de eigen r.257 ("Gewenst (A, ASM-24 ...)") en r.34 tegen. Dit is de duidelijkste vermenging: een rij "Besluit" die B zegt voor een skill die Carlo niet koos.
2. `capabilities-en-skills` r.40: "Wijziging ten opzichte van 0.8 (CHG-013, B-09): ... voor ACT-02.1 gaan SKL-22 en SKL-24 `weekmoment` naar uitbreiden".
3. `agent-skillmatrix` r.55 ("Wijzigingen ten opzichte van 0.8 (CHG-013, B-09): SKL-22 en SKL-24 gaan ... naar uitbreiden") en r.61 ("SKL-24 `weekmoment` (open GOV-07-vraag als herinnering op het weekmoment; B-09)"; bij r.37 staat ASM-24 wel).
4. `activiteit-skillmatrix` r.49 ("_B-09 (CHG-013): SKL-22 krijgt een uitzondering ..., SKL-24 een herinnering op het weekmoment_") en r.126 ("Wijziging in 0.9 (CHG-013, B-09): ... een herinnering in SKL-24 `weekmoment`").
5. `skill-specificaties` r.277 (wijzigingshistorie 0.9: "Nieuw: SKL-22 ... en SKL-24 ..." onder B-09, zonder ASM-24).
6. `wijzigingen` r.17 (CHG-013): "SKL-22 en SKL-24 krijgen een dekking CAP-20 uitbreiden" en "de uitbreiding van SKL-22 en SKL-24 gaat mee in het pakket". ASM-24 staat wel in dezelfde rij, dus dit is licht; ik noem het voor de volledigheid.

Beoordeling: r.251 is een fout in de labeling (Besluit = B voor SKL-24). De punten 2 t/m 5 zijn samenvattende regels waar B-09 als reden staat voor beide skills zonder het voorbehoud; samen vormen ze hetzelfde probleem als K-10, maar op secundaire documenten (matrices, historie). Alle is een tekstcorrectie; de pagina verandert er niet door, tenzij de gebouwde bronnen worden aangepast (de pagina leest `register`, `organisatie`, `bevindingen`, `verantwoordelijkheden`, `prc-02`; van de boven genoemde plekken alleen via `register`/`wijzigingen` indien opgenomen; controleer met `build.js`).

#### 2. K-09 in detail

Tegen de SKILL.md's gelegd:
- `register` r.368 (GOV-07 `bron`): `weekmoment ("Herinner de gebruiker niet tussendoor.")` en `escalation-management ("Een voorstel voor prioriteit of focusdoel: dat hoort op het weekmoment.")` zijn letterlijk, met hoofdletter en punt (SKILL.md weekmoment r.31; escalation-management r.24). Voldoet.
- `verantwoordelijkheden` r.150: identiek aan r.368. Voldoet.
- `verantwoordelijkheden` r.211 (FND-027): "Al het andere bewaar je voor het weekmoment" (letterlijk begin van de zin in escalation-management r.18; zonder afsluitende "(zie `weekmoment`)." dus een fragment), "Een voorstel ... dat hoort op het weekmoment." (letterlijk, met punt). Gevolgtrekking staat apart: "Gevolgtrekking (geen citaat): volgens de skill komt de vraag dus pas op het weekmoment." Voldoet.
- `bevindingen` r.56 (FND-027): beide escalation-management-citaten en de weekmoment-zin "Herinner de gebruiker niet tussendoor. Dringende zaken gaan alleen via de triggers in `escalation-management`" zijn letterlijk; "Gevolgtrekking (geen citaat)" staat er. Kleinigheid: het laatste citaat mist de afsluitende punt van de bronzin (weekmoment r.31 eindigt op "`escalation-management`."). Niet blokkerend.
- Buiten de gevraagde plekken: `skill-specificaties` r.223 en r.253 en `capabilities-en-skills` r.69 en r.71 citeren dezelfde zinnen zonder afsluitende punt of als fragment; ook cosmetisch.

#### 6. Nieuwe fouten door de herstelling

- Telling 25/24/15/7: gelijk in `activiteit-skillmatrix` r.125, `wijzigingen` r.17 en r.18, `check.js` r.9 en r.94 en de pagina. De oude telling 26/23 staat alleen als "0.8: ..." (`activiteit-skillmatrix` r.125) of in de historische rijen CHG-011 en CHG-012 (`wijzigingen` r.15 en r.16). Voldoet.
- ID's uniek: ASM 25 (ASM-01..25), OPEN 13, GOV 13, CAP 23, SKL 34 (rijen in `capabilities-en-skills`), ACT 77, FND-001..027 (27), CHG-001..014 (14), B-01..B-09; geen dubbelen.
- Geen verwijzing naar een niet-bestaand ID in `v09/*.md` (zonder `controle-*`, `SPEC-*`, `hercontrole-*` en `uitbreidingsgids`): alle ASM-, FND-, CHG-, OPEN-, GOV-, ACT-, CAP-, SKL-, PRP- en B-ID's bestaan. Uitzondering volgens ontwerp: de vrije ID's ASM-26, FND-028, CHG-015 (en voorbeeld-ID's) staan alleen in de `uitbreidingsgids` §6 en in `wijzigingen` r.18 als "vrij".

#### Oordeel

**Terug naar maker.**

Blokkerende punten:
1. K-10 (rest): `skill-specificaties` r.251 noemt "Besluit: B (B-09)" voor SKL-24 `weekmoment`; moet zeggen dat de herinnering Besloten is (B-09) en dat de uitbreiding van deze skill een Aanname is (ASM-24, ter bevestiging bij GK-4).
2. K-10 (rest): ASM-24 ontbreekt bij de bewering dat SKL-24 wordt uitgebreid in `capabilities-en-skills` r.40, `agent-skillmatrix` r.55 en r.61, `activiteit-skillmatrix` r.49 en r.126 en `skill-specificaties` r.277 (en licht `wijzigingen` r.17). Voeg overal "(SKL-24: ASM-24, ter bevestiging)" toe of laat SKL-24 uit de B-09-zin.

Niet blokkerend: K-09 (afsluitende punt in `bevindingen` r.56 en de fragmenten in matrices). Na herstel van bovenstaande volstaat een korte controle van alleen die regels; `node build/build.js && node build/check.js && node build/klikproef.js` en de kopie naar `organisatiemodel-0.3.html` alleen opnieuw als een bron van de pagina verandert.

---

#### Derde controle (2026-10-30)

Opnieuw onafhankelijk getoetst, niets aangenomen. Geen modeldocumenten gewijzigd. Gezocht met grep op `SKL-24`, `weekmoment` en `B-09` in alle `v09/*.md` (zonder `controle-*`, `hercontrole-*`, `SPEC-*`; `voorstellen` en `prc-01/03/04/05` bevatten geen SKL-24-uitbreiding) en in het register.

### (a) B-09 en ASM-24 gescheiden

**Hersteld (nu juist):**
- `skill-specificaties` r.251: "de herinnering ... is Besloten (B-09 ...); dat deze skill die uitvoert is een Aanname (ASM-24, ter bevestiging bij GK-4)". r.277 (historie 0.9): "Aanname ASM-24, ter bevestiging bij GK-4".
- `capabilities-en-skills` r.40: "Voor SKL-24 is dat een Aanname (ASM-24 ...): B-09 noemt alleen SKL-22."
- `agent-skillmatrix` r.55: "SKL-22 (B-09) en SKL-24 (Aanname ASM-24 ...)"; r.61: SKL-24 "Aanname ASM-24, ter bevestiging bij GK-4".
- `activiteit-skillmatrix` r.49 en r.126: "dat laatste: Aanname ASM-24" en "Aanname ASM-24, ter bevestiging bij GK-4".
- Al goed gebleven: `register` r.33, r.870, r.1077, r.1140, r.1141; `organisatie` r.23, r.190 (en §7 ASM-01 t/m ASM-25, Versie-rij); `prc-02` r.10, r.192; `bevindingen` r.56; `verantwoordelijkheden` r.211; `skill-specificaties` r.7, r.34, r.257; `capabilities-en-skills` r.71; `agent-skillmatrix` r.37. Neutrale vermeldingen die alleen de herinnering of de skillnaam noemen (`organisatie` r.82 en r.118, `verantwoordelijkheden` r.51 en r.150, `register` r.137, r.179, r.362, r.367, `skill-specificaties` r.235 en r.239) zijn juist: de herinnering is B-09.

**Nog niet goed (op plekken die ik in ronde 2 niet noemde; zelfde patroon):**
1. `skill-specificaties` r.36: "In 0.9 komen SKL-22 en SKL-24 erbij (B-09, ACT-02.1)." SKL-24 staat hier onder B-09 zonder ASM-24.
2. `skill-specificaties` r.8 ("Wat dit wel en niet is"): "De uitbreidingen van SKL-22 en SKL-24 (B-09, FND-027) gaan mee in dat pakket". Idem.
3. `capabilities-en-skills` r.8 (Labels): "Het besluit B-08 staat per skill in de laatste kolom ("Besluit"); voor SKL-22 en SKL-24 is dat B-09." Voor SKL-24 is B-09 alleen de herinnering; de uitvoering is ASM-24.
4. Licht, niet apart blokkerend: `wijzigingen` r.17 (CHG-013) zegt dat SKL-22 en SKL-24 een dekking *uitbreiden* krijgen en dat hun uitbreiding "mee gaat in het pakket"; ASM-24 staat in dezelfde rij, dus de lezer kan het scheiden.

Het zijn drie zinnen; elk vraagt alleen "SKL-24: Aanname ASM-24, ter bevestiging bij GK-4" erbij of "(B-09; SKL-24: ASM-24)". Let op: `build.js` leest `skill-specificaties` en `capabilities-en-skills` (r.156 en r.184), dus deze zinnen staan ook op de pagina; na herstel moet de pagina opnieuw worden gebouwd.

### (b) Bouw en pagina

- `node check.js`: 802 controles, 0 fouten, skillstatus 25/24/15/7, register v0.9.
- `node klikproef.js`: 5696 acties, 0 fouten, 0 console-meldingen.
- `cmp organisatiemodel.html organisatiemodel-0.3.html`: byte-gelijk.
- Tijdstempels: `organisatiemodel.html` 11:52:22.76, `-0.3.html` 11:53:36; de nieuwste bron (niet-uitgezonderd) is `activiteit-skillmatrix` 11:52:22.63, dus de pagina is jonger dan alle bronnen (`wijzigingen`, `controle-*`, `hercontrole-*`, `SPEC-*` buiten beschouwing; `data.json` wordt door `build.js` na de html geschreven, r.327 en r.328). Voldoet.

### (c) Nieuwe fouten

- Telling 25/24/15/7 is overal gelijk (`activiteit-skillmatrix` r.125, `wijzigingen` r.17 en r.18, `check.js` r.9 en r.94, pagina). "26/23" staat alleen als "0.8: ..." of in de historische rijen CHG-011 en CHG-012.
- ID's: ASM-01 t/m ASM-25 (25, uniek), FND-001 t/m FND-027, CHG-001 t/m CHG-014, B-01 t/m B-09, SKL 34 rijen uniek. In de vier aangepaste documenten geen verwijzing naar een niet-bestaand ID. Voldoet.

### Oordeel derde controle

**Terug naar maker**, maar nog slechts drie zinnen (tekst; wel een nieuwe bouw van de pagina).

Blokkerende punten:
1. `skill-specificaties` r.36: SKL-24 onder "(B-09, ACT-02.1)"; voeg ASM-24 toe.
2. `skill-specificaties` r.8: "SKL-22 en SKL-24 (B-09, FND-027)"; voeg ASM-24 toe voor SKL-24.
3. `capabilities-en-skills` r.8: "voor SKL-22 en SKL-24 is dat B-09"; zeg dat B-09 de herinnering besluit en ASM-24 de uitvoering door SKL-24.

Na herstel: grep op `SKL-24` en `B-09` in die twee documenten, daarna `node build/build.js && node build/check.js && node build/klikproef.js`, de kopie naar `organisatiemodel-0.3.html` (cmp) en controle dat de html jonger is dan alle bronnen.
