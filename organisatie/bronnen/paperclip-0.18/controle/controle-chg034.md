# Controle weergaven model 0.17 (CHG-034)

Datum: 2026-11-12. Controleur: aparte controle-agent (skill `bpmn-modelcontrole`, `kort`). Scope: diff `api/<key>.md` tegen `werk/<key>.md` van de 12 bijgewerkte weergaven. Alleen lokaal; niets hersteld of geüpload. Regelnummers verwijzen naar `werk/`.

**Conclusie: niet uploaden** (2 blokkerende bevindingen, beide snel te herstellen; daarna kan de rest als waarschuwing mee of volgen).

## Wat voldoet
| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Register-YAML ongewijzigd | voldoet | geparsed YAML van `api/register.md` en `werk/register.md` identiek (JSON-gelijk); één regel verschilt: de commentaarregel boven `koppelingen` (regel 2262, door de spec toegestaan). `meta.scope` niet aangepast |
| Niet-aan-te-passen documenten | voldoet | `cmp` gelijk: prc-01, prc-02, prc-04, prc-09, bevindingen, voorstellen, wijzigingen (ook prc-03, prc-05, prc-06) |
| Telling skillstatus 54/7/34/11 | voldoet, met een kanttekening (bevinding 4) | herberekend uit `koppelingen`; alle 106 matrixrijen: skills, status per skill, CAP en eindstatus gelijk aan het register; Samenvatting (22 nieuwe: 15 ontbreekt, 5 gedeeltelijk, 2 n.v.t.; 19 aanwezig>ontbreekt; 2 aanwezig>gedeeltelijk) klopt met de diff |
| Alle 106 RACI-rijen | voldoet | gelijk aan `koppelingen` (R, A, beslisser, controleur, C, I, escalatie); 13 G-09 en GOV-rijen gelijk aan `beslissingen` en `goedkeuringen` |
| Nieuwe ID's | voldoet | ACT-09.1..22, 13 G-09, GOV-16, ROL-06/07/08, AGT-06/07, CAP-28..34, 85 skills, 106 nieuwe korte namen staan waar ze horen; `codes-en-namen` gelijk aan `korte_namen` (542); verplichte secties van `organisatie` en `verantwoordelijkheden` aanwezig; §6 uitbreidingsgids (PRC-10, ACT-09.23, G-09.14, GOV-17, ROL-09, AGT-08, CAP-35, ASM-73, OPEN-24, FND-061, PRP-059, B-26, M-18, GS16, CHG-035) klopt |
| Skillspecificaties | voldoet | 36 rijen *Nieuw in 0.17* gelijk aan het register; niets verzonnen |

## Bevindingen
| nr | ernst | document en plek | wat | voorstel |
| --- | --- | --- | --- | --- |
| 1 | blokkerend | `organisatie` r299 (§5, rij ROL-02 naar ROL-01, ACT-09.20), kolom Label | Label `Voorstel (PRP-058)`. `voorstellen` (PRP-058, "Stand 0.17: besloten", B-25) zegt besloten. Tegen een goedgekeurd document en spec regel 4 | Label `Besloten (B-25; PRP-058)` |
| 2 | blokkerend | `proces-catalogus` r14 (bullet 0.17 PRC-01/PRC-02) | Zegt dat ACT-02.54 `CLAUDE.md`, `AGENTS.md` en `CONSTRAINTS.md` "in plaats van het conventiebestand" krijgt. Register ACT-02.54 `output`: "zie ACT-01.57 (zonder CLAUDE.md, AGENTS.md en CONSTRAINTS.md)". Alleen ACT-01.56 en ACT-01.57 veranderen zo | Zin splitsen: ACT-02.54 volgt ACT-01.57 zonder die bestanden |
| 3 | waarschuwing | `activiteit-skillmatrix` r8 (rij Skillstatus); idem `register` r41 zegt het wel goed | Zegt "Alleen `paginaontwerp` heet nog (werknaam) ... staat bij geen activiteit". In 0.17 is `testplan-en-rapport` ook werknaam (`werknaam: true`) en staat bij ACT-09.2, 09.12, 09.13; de matrixrijen noemen hem zonder "(werknaam)" | Zin aanpassen: twee werknamen; `paginaontwerp` bij geen activiteit, `testplan-en-rapport` bij ACT-09.2/09.12/09.13 |
| 4 | waarschuwing | `activiteit-skillmatrix` r8 en Samenvatting; `capabilities-en-skills` r8; `register` YAML-commentaar r2262 | "Dezelfde regel als in 0.15; koppelen telt als gedeeltelijk": die telregel voor `koppelen` staat niet in het register of de goedgekeurde documenten. Alleen ACT-09.6 en ACT-09.22 hangen ervan af; zonder die regel is de telling 56 / 5 / 34 / 11. Het register-commentaar noemt 54/7/34/11 als feit | Markeren als aanname van CHG-034 (niet "dezelfde regel"), en Carlo laten bevestigen of in het register vastleggen |
| 5 | waarschuwing | `register` tabel *Skills in het kort* (afgeleid deel) | Stand zegt alleen "Bestaat" voor skills die in 0.17 op `uitbreiden` of `koppelen` staan: `quality-gates`, `delivery-management`, `backlog-management` (ACT-09.1/09.19/09.20), `vragen-en-akkoordrondes` (uitbreiden ACT-04.3; koppelen bij Neo, Trace, Sentinel), `architect-api-contracts`, `architect-clarification`, `requirements-analysis`, `paperclip` (koppelen ACT-09.6/09.22). `kort` en `documenten-bijwerken`: register-opmerking "AGT-06 en AGT-07: koppelen" ontbreekt. Doel "niet in het register" bij 7 skills die wel in `skills` staan (veld `doel` ontbreekt); zelfde in `capabilities-en-skills` r191-204 | Stand uit `dekking` en `skl_status` aanvullen; "geen doel in het register" |
| 6 | waarschuwing | `organisatie` r27 en r426; `proces-catalogus` r14 en r104 | OPEN-21 drie keer anders: "gedeeltelijk beantwoord" (r27), "open" (r426, r14), "deels beantwoord" (r104). Register: alleen `stand`, geen `beantwoord` | Overal "open (test 2026-11-11, besluit keuze 7)" |
| 7 | waarschuwing | `verantwoordelijkheden` r255 en r434 | r255: "bij elk van de 21 beslispunten" (register 34; G-09.12 en G-09.13 hebben geen beslisser). r434 (FND-022): nog "voorwaarde van `architect-implementation-plan` stap 5" en "het conventiebestand"; register: regel 7 van Atlas en `CLAUDE.md`, `AGENTS.md`, `CONSTRAINTS.md` | Bijwerken |
| 8 | waarschuwing | `verantwoordelijkheden` r297-307 en r188 (G-09-rijen) | Verdwenen/niet overgenomen: "2 rondes achter elkaar zonder voortgang" bij G-09.4, G-09.10 en G-09.11 (alleen als bijzin bij G-09.11 in r188); voorwaarden van G-09.1 (AC's, bouwcontract, afhankelijkheden, WIP, designsysteem), G-09.3 en G-09.9. Ook ontbreekt de besluitregel OPEN-19/FND-054 "ROL-01 deployt, PRC-09 eindigt bij de merge" in §2 of §5 | Vraag en voorwaarde uit `beslissingen` in kolom Grond; rij FND-054 in §5 |
| 9 | waarschuwing | `agent-skillmatrix` §4 Per agent r197-228 (Dr. Evil, Socrates, Atlas) en r109 | §4 mist de nieuwe 0.17-skills (Atlas: `planning-and-task-breakdown`, `api-and-interface-design`, `ci-cd-and-automation` enz.; Socrates: `idea-refine`, `spec-driven-development`; allen: `kort`, `documenten-bijwerken`) en noemt `codebase-design` en `research` nog "Vereist en aanwezig" (r217) en `architect-vertical-slices`, `architect-conventions` onder "gemaakt, aanwezig" (r218), pas r226 corrigeert. §1 (matrix) is wel volledig. r109 "Drie agents erbij": Sentinel bestond al (krijgt ROL-08); nieuw zijn Neo en Trace | §4 per agent aanvullen; r109 corrigeren |
| 10 | waarschuwing | `agentprofiel-atlas` r55, r82, r83, r93, r123 | Oude tekst spreekt §8 en §6 tegen: "voorwaarde van stap 5", `architect-implementation-plan`, "conventiebestand" met `architect-conventions` (vervalt in 0.17) | "(tot 0.16)" of bijwerken, zoals in rij 8 en 9 |
| 11 | waarschuwing | `skill-specificaties` r40 en r426-432 (`domain-modeling`); overzichtstabel r26-31, r47-51 (kolom Activiteiten) | `domain-modeling` noemt nog ACT-02.55 (register: alleen `documentation-and-adrs`). Kolom Activiteiten bij `architect-vertical-slices`, `architect-use-case-review`, `architect-conventions`, `architect-implementation-plan` nog gevuld terwijl `dekking` leeg is, `architect-conventions` met "(conventiebestand opstellen)"; ACT-09.x ontbreekt bij `backlog-management`, `quality-gates`, `delivery-management`, `vragen-en-akkoordrondes`. Inleiding zegt dat de kolom het register volgt | Kolom bijwerken of de inleiding beperken tot de nieuwe rijen |
| 12 | waarschuwing | `uitbreidingsgids` r77 (§5 punt 4) en r101 (§6) | r77: TL-07/TL-09 "toevoegen aan de routeringstabel van PRC-04 (met akkoord)"; staan sinds 0.17 al in de routering. r101: "D1-D3" (register D1 t/m D4) | Bijwerken |
| 13 | waarschuwing | `capabilities-en-skills` r11 en r107; `organisatie` r183 | r11: "D1 t/m D3 = doel" (D4 bestaat). r107: korte namen CAP-28/32/30 wijken af van `korte_namen` ("implementeren via tdd", "securityreview van een pr", "testplan opstellen uit acceptatiecriteria" tegen "implementeren via TDD", "securityreview van PR", "testplan uit AC's"). `organisatie` r183: ACT-01.56 nog "conventiebestand opstellen" (nu "regelbestanden en kwaliteitslat opstellen") | Korte namen gelijktrekken |

## Meldingen van de maker (geen bevinding, wel naar Carlo)
`meta.scope` en `meta.noot` (D1-D3) in het register spreken PRC-09 en D4 tegen; AGT-03 `opmerking` mengt feit en to-be (TL-07); ROL-06/07/08 hebben geen `in` en `uit`; PRC-09 mist `betrokken`, `input`, `output`, `risicos`; geen M-punten voor PRC-09; D1-D3 en CHG-034 ontbreken in `korte_namen`; ACT-09.16 twee schrijfwijzen voor Bugbot; G-09.11 heeft label `V` terwijl prc-09 de V's als besloten noemt. Niet opnieuw beoordeeld; de weergaven laten het register ongemoeid, zoals de spec vraagt.

## Niet te toetsen
Werking van skills en agents (OPEN-11); de oude registerstanden r24/r25 (alleen r26 aanwezig, het "was" in `skill-specificaties` is niet nagelopen); regel 361 van `organisatie` ("veranderen punt 8 en punt 2 niet"); of `overdracht` bij Neo en `paperclip` bij Sentinel/Trace "vereist" is (geen ACT-09-koppeling noemt ze).

## Herstel door de maker
Datum: 2026-11-12, agent A. Alles hersteld met `_scripts` (volgorde: 30, 60, 31, 40, 70, 80, 90, 100, 110, 120, 130, 140) en `_check.js` (0 fouten).
- 1: hersteld. Label in `organisatie` is nu `Besloten (B-25; PRP-058 – evaluatie na eerste feature)`, volgens `voorstellen`.
- 2: hersteld. `proces-catalogus` zegt nu: ACT-01.57 krijgt `CLAUDE.md`, `AGENTS.md` en `CONSTRAINTS.md`; ACT-02.54 volgt ACT-01.57 zonder die bestanden.
- 3: hersteld. Twee werknamen (`paginaontwerp`, `testplan-en-rapport`) in de rij Skillstatus; "(werknaam)" in de matrixrijen van `testplan-en-rapport`. Het register zelf was al juist.
- 4: hersteld in `activiteit-skillmatrix`, `capabilities-en-skills`, `organisatie` en het YAML-commentaar boven `koppelingen`: "afgeleid uit de definitie van aanwezig ... koppelen telt als gedeeltelijk"; telling blijft 54/7/34/11. Zonder deze afleiding zou het register zelf een andere telling geven; als melding gezet.
- 5: hersteld. `Skills in het kort`: Stand toont `skl_status` uitbreiden/koppelen per stap en de register-opmerking (`kort`, `documenten-bijwerken`); "geen doel in het register" in `register` en `capabilities-en-skills`.
- 6: hersteld. OPEN-21 is overal "open" (test 2026-11-11, besluit keuze 7).
- 7: hersteld. 21 beslispunten van PRC-01 t/m PRC-06 plus 11 met keuze in PRC-09; FND-022 verwijst naar regel 7 van Atlas en `CLAUDE.md`, `AGENTS.md`, `CONSTRAINTS.md`.
- 8: hersteld. G-09-rijen noemen de vraag (met "2 rondes achter elkaar zonder voortgang") en de uitkomsten; rij "Wie deployt na de merge?" in §2 en rij FND-054 in §5.
- 9: hersteld. `agent-skillmatrix` §4 heeft per agent een regel "Erbij in 0.17", vervallen skills gemarkeerd; "Twee agents erbij" (Sentinel bestond al).
- 10: hersteld. `agentprofiel-atlas`: oude tekst gemarkeerd als "tot 0.16" met verwijzing naar regel 7 en `CLAUDE.md`.
- 11: hersteld. `skill-specificaties`: kolom Activiteiten volgt de dekking (leeg: "geen (dekking vervalt in 0.17)", ACT-09.x erbij); `domain-modeling` heeft een stand-0.17-regel.
- 12: hersteld. `uitbreidingsgids`: TL-07/TL-09 staan in de routering; D1–D4.
- 13: hersteld. Legenda D1 t/m D4 in zes weergaven en het register; CAP-korte namen gelijk aan `korte_namen`; ACT-01.56-naam in `organisatie`. De 13 resterende waarschuwingen van `_check.js` staan in historische tekst; register-tegenspraken staan in de meldingen (nieuw: telregel `koppelen`, label V bij G-09).

## Hercontrole
Datum: 2026-11-12. Gecontroleerd tegen register r26 en de goedgekeurde documenten, met `_check.js` (0 fouten, 13 historische waarschuwingen) en eigen scripts. Regressie: register-YAML JSON-gelijk aan `api` (alleen de commentaarregel boven `koppelingen` verschilt); prc-01/02/04/09, bevindingen, voorstellen, wijzigingen (en prc-03/05/06) byte-gelijk; matrix 54/7/34/11 en alle 106 matrixrijen nog gelijk aan het register; alle 106 RACI-rijen (R en A) nog gelijk; 542 korte namen nog gelijk; geen ID verdwenen.

| nr | oordeel | toelichting |
| --- | --- | --- |
| 1 | akkoord | `organisatie` r299: `Besloten (B-25; PRP-058 – evaluatie na eerste feature)` |
| 2 | akkoord | `proces-catalogus` r14: ACT-01.57 krijgt de drie bestanden, ACT-02.54 volgt ACT-01.57 zonder die bestanden |
| 3 | akkoord | twee werknamen in de rij Skillstatus; `testplan-en-rapport (werknaam)` in de 3 matrixrijen |
| 4 | akkoord | telregel `koppelen` nu "afgeleid uit de definitie van aanwezig" in matrix, `capabilities-en-skills`, `organisatie` en het YAML-commentaar; telling 54/7/34/11 ongewijzigd; als melding gezet. Carlo moet de afleiding nog bevestigen (zonder: 56/5/34/11) |
| 5 | akkoord | Stand toont `skl_status` uitbreiden/koppelen per ACT en de opmerking bij `kort` en `documenten-bijwerken`; "geen doel in het register" |
| 6 | akkoord | OPEN-21 overal open (`organisatie` r27/r426, `proces-catalogus` r18/r104) |
| 7 | akkoord | 21 + 11 beslispunten (G-09.12/13 zonder beslisser); FND-022 verwijst naar regel 7 van Atlas en de drie bestanden |
| 8 | akkoord | G-09-rijen met vraag en "2 rondes"/"2 testrondes" en voorwaarden; rij "Wie deployt na de merge?" (§2) en FND-054 (§5) |
| 9 | akkoord | §4 heeft per agent "Erbij in 0.17"; "Twee agents erbij"; Sentinel bestond al |
| 10 | akkoord, met rest (waarschuwing) | meeste oude tekst gemarkeerd "tot 0.16"; `agentprofiel-atlas` r54 noemt nog ongemarkeerd "in slice 1 het conventiebestand" en `verantwoordelijkheden` r419 "ACT-01.56 (conventiebestand opstellen)" |
| 11 | akkoord | kolom Activiteiten volgt de dekking ("geen (0.17)", ACT-09.x erbij); `domain-modeling` heeft stand-0.17-regel |
| 12 | akkoord | `uitbreidingsgids`: TL-07/TL-09 staan in de routering; D1-D4 |
| 13 | akkoord | D1 t/m D4 overal; CAP-korte namen gelijk aan `korte_namen`; `organisatie` r183 noemt "regelbestanden en kwaliteitslat opstellen" |

**Nieuwe conclusie: kan worden geüpload.** Geen blokkerende bevinding meer en bij het herstel niets nieuws misgegaan. Open voor Carlo: de telregel `koppelen` (4) en de registermeldingen. Optioneel: de twee resten bij 10.
