# Modelcontrole ronde 3, model 0.7 (2026-10-29)

| | |
| --- | --- |
| Scope | CHG-009: verwerking van de feitencheck van Dr. Evil (WEB-22) en Atlas (WEB-23) op het Concept 0.6, leidend tot model 0.7 (Concept). Ronde 3 (capabilities, skills, koppelingen/RACI, GOV-uitwerking, FND-019 t/m FND-026, PRP-019 t/m PRP-028, CHG-008 en CHG-009) volledig; ronde 1 alleen voor ROL-04, AGT-03, `organisatie` §3 t/m §5 en OPEN-05; ronde 2 alleen op ongewijzigdheid. |
| Datum | 2026-10-29 |
| Uitgevoerd door | onafhankelijke controle (niet de maker), met `bpmn-modelcontrole`, `bpmn-conventies` en `bpmn-rollen-en-skillmodel`. De modellen zijn niet aangepast. |
| Gecontroleerd | `register.md` (YAML-blok geparsed met js-yaml: geldig), `organisatie`, `bevindingen`, `voorstellen`, `wijzigingen`, `capabilities-en-skills`, `agent-skillmatrix`, `activiteit-skillmatrix`, `verantwoordelijkheden`, `skill-specificaties`, `agentprofiel-atlas`, `prc-01` t/m `prc-06`, `proces-catalogus`, `paperclip-mapping` (0.7). |
| Vergeleken met | `v06/*.md` (0.6); voor ronde 1 en 2 ook met de goedgekeurde 0.5 zoals die op WEB-19 staat (register rev. 8, organisatie rev. 8, bevindingen rev. 6, voorstellen rev. 8). |
| Bronnen voor de feiten | Comments op WEB-22 (`026fdfce`, `7174bba8`) en WEB-23 (`08f987f2`) via de API (alleen GET). `AGENTS.md` van Atlas (regelnummers r.34 t/m r.58 nagelopen), `architect-implementation-plan` en `architect-modeling` SKILL.md, `desiredSkills` van Atlas (API), interacties op WEB-19 (kaarten GK-2 en GK-3). |

## Uitkomst

**Geen blokkerende bevindingen.** Vier waarschuwingen (J-01 t/m J-04). Alle vier correcties van Atlas, de aanvulling van Dr. Evil en de kleinere punten zijn in register en overzichten verwerkt en komen overeen met wat de agents schreven. Ronde 2 is ongewijzigd. Statussen kloppen (0.7 Concept, 0.5 Goedgekeurd, 0.6 nooit goedgekeurd).

Het belangrijkste punt is J-01: in `organisatie` §3 staat nog de oude, onjuiste stelling dat geen van de taken TL-01 t/m TL-09 in de instructies van Atlas staat. Dat is een enkele cel; herstel bij voorkeur vóór indiening.

## Checks

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's uniek, volgen het schema, niet hergebruikt | voldoet | `register`: geen dubbele ID's (rollen, agents, processen, ACT, GOV, CAP, SKL, ASM, OPEN). FND-001 t/m FND-026, PRP-001 t/m PRP-028 (PRP-012 en PRP-016 vervallen), CHG-001 t/m CHG-009. Nieuw in 0.7: alleen FND-026 en PRP-028; geen enkel `vervallen_ids`-ID is in de gewijzigde regels als levend ID gebruikt (diff v06 naar 0.7 op ROL-05, AGT-04, ASM-05/06/15, ACT-01.19 enz.: alleen de historieregel van PRP-012 in de kop van `voorstellen`). |
| Elke verwijzing wijst naar een bestaand element | voldoet | Script over alle `.md`-bestanden: elk ACT-, GOV-, CAP-, SKL-, ASM-, OPEN-, ROL-, AGT-, PRC-, FND-, PRP- en CHG-ID in tekst en register is gedefinieerd, behalve de vervallen ID's die als vervallen zijn vermeld. In `koppelingen` bestaan alle cap-, skl-, ROL-, AGT- en GOV-verwijzingen. Regelverwijzingen r.34, 38, 40, 42, 49, 56, 57, 58 komen overeen met de `AGENTS.md` van Atlas. |
| Elk procesmodel heeft status en versie | voldoet | `register`, `processen`: PRC-01 t/m PRC-05 Goedgekeurd 0.5, PRC-06 Goedgekeurd 0.3; ongewijzigd t.o.v. 0.6 en 0.5. `prc-01` t/m `prc-06`, `proces-catalogus`, `paperclip-mapping`: status Goedgekeurd 0.5/0.3, geen verwijzing naar 0.7 of CHG-009; op WEB-19 gelijk aan de goedgekeurde revisies. |
| Ronde 2 ongewijzigd t.o.v. 0.6 | voldoet | JSON-vergelijking van de YAML-blokken `activiteiten` (69), `beslissingen` (12), `processen` (8), ook `generieke_lanes`, `vervallen_ids`, `systemen`, `doelen`, `aannames`: identiek aan `v06/register.md` en aan register rev. 8 (0.5). |
| Goedgekeurd model niet overschreven; nieuwe versie met status Concept | voldoet | `register` `meta`: versie 0.7, status Concept, geldend 0.5. Alle gewijzigde documenten hebben Status Concept 0.7 en noemen "0.5 Goedgekeurd ... blijft gelden tot 0.7 is goedgekeurd". Vergelijking met register rev. 8: ronde 1 en 2 identiek, op ROL-04/AGT-03 `opmerking` en OPEN-05 `stand` na (bedoeld) en de ronde-3-secties. Op WEB-19 is GK-2 (`eb913512`) geaccepteerd en GK-3 (`9e904a82`) geannuleerd. |
| Status 0.7 Concept, 0.5 Goedgekeurd, 0.6 nooit goedgekeurd | voldoet | `wijzigingen` "Status van de versies"; interacties WEB-19: `eb913512` approve door de gebruiker (2026-10-28 15:37), `9e904a82` `cancelled/withdrawn` (20:43). Zie J-03 voor de formulering. |
| Elke activiteit: capability en skill (of OPEN) | voldoet | `koppelingen`: 69 van 69 ACT, geen dubbele; elke ACT heeft `cap` en `skl` (ROL-01-activiteiten `n.v.t. (mens)`). |
| Elke skill: status met bron | voldoet | `skills`: 34 skills, 59 dekkingsregels, elke met status uit `bestaat/uitbreiden/koppelen/nieuw/onbekend` (43/8/0/1/7) en `bron`. Statussen ongewijzigd t.o.v. 0.6 (alleen `bron`-tekst, `validatie`, `opmerking` van SKL-10, 11, 12, 13, 15, 17, 18, 41, 44 zijn gewijzigd). `skl_status` per koppeling past bij een dekkingsregel van de skill (script: 0 afwijkingen). |
| Skillstatus klopt met de bron (nieuwe feiten) | voldoet | `architect-implementation-plan` SKILL.md: stap 5 (zes voorwaarden), stap 7 ("Tot er een orchestrator is, doe je dit zelf", verwijzing naar `paperclip-converting-plans-to-tasks`), stap 4b (opruimtaak), stap 8, trigger ("Een developer-agent (of de gebruiker)", "geen sequentiediagram of klassen"); `architect-modeling` "Wijzigingen later" ("aantoonbaar niet-breaking", "leg het voor als het eerder goedgekeurde afspraken raakt"). `desiredSkills` Atlas: 24 skills, sleutels van SKL-11/12/13 en SKL-18, `improve-codebase-architecture`. Allemaal zoals in `register` en overzichten. |
| Elke activiteit: uitvoerder (R) en precies één A; eindverantwoordelijkheid niet automatisch bij een AI-agent | voldoet | `koppelingen`: 69 R, 69 enkelvoudige A (geen lijsten). Commentaar bij `koppelingen` en `verantwoordelijkheden` kop: menselijke eindverantwoordelijkheid bij ROL-01 via de GOV-momenten. Ongewijzigd t.o.v. 0.6. |
| Onafhankelijke controle: controleur is niet de uitvoerder | voldoet | Geen koppeling met uitvoerder gelijk aan controleur, behalve de als zodanig benoemde zelfcontrole in de variant (ACT-01.57, ACT-02.54; FND-022, PRP-027). ACT-01.18, ACT-02.7, ACT-02.9: controleur ROL-01 (voorwaardelijk) is niet de uitvoerder AGT-03. Overzicht §4 in `verantwoordelijkheden` komt overeen. |
| Elke GOV: bevoegd, informatie, criteria, bij_goedkeuring, bij_afwijzing, escalatie | voldoet | GOV-01 t/m GOV-13 in `goedkeuringen`: zes velden gevuld, ongewijzigd t.o.v. 0.6. Het voorwaardelijke akkoord van stap 5 is bewust niet als GOV opgenomen maar als FND-026 en PRP-028 (voorstel, geen model). |
| Overzichten komen overeen met het register | voldoet | `verantwoordelijkheden` §1: A, beslisser en controleur van alle matchende rijen gelijk aan `koppelingen` (afwijkingen alleen in schrijfwijze, bv. naam of ID, en "stap 2"). `capabilities-en-skills` §2 SKL-10, 11, 12, 13, 15, 17, 18, 41, 44 en §5, `agent-skillmatrix` §2 en `agentprofiel-atlas` §6: gelijk aan `skills` en aan de lijst `desiredSkills` (Atlas, 11 niet-vereiste skills). `activiteit-skillmatrix`: geen inhoudelijke wijziging nodig (statussen ongewijzigd). Zie wel J-01 (`organisatie` §3). |
| Elke activiteit in diagram, beschrijving en register | voldoet | 69 ACT in `register` en `prc-01` t/m `prc-06`; geen wijziging. |
| `.bpmn`-bestand heeft validatieresultaat | niet te beoordelen | Geen `.bpmn`-bestand en geen validator. |
| Eindontwerp (artifact) | niet te beoordelen | Nog geen artifact. |
| Feiten, aannames, open vragen, voorstellen gescheiden | voldoet | Nieuwe tekst is gelabeld: TL-08 `Besloten` met "nog niet in de instructies" (`agentprofiel-atlas` §2 #9); TL-07/TL-09 `Feit` met regelnummer; stap 5 `Feit` (skill); FND-026 bevinding; PRP-028 voorstel met "Mijn advies"; OPEN-05 `stand` apart van de vraag. `werking: niet vastgesteld (OPEN-11)` blijft. |
| Huidige en gewenste situatie gescheiden | voldoet | PRP-028 en SKL-40 t/m SKL-45 `to-be`; stap 5 is as-is skillgedrag, de GOV-wijziging staat alleen in PRP-028. |
| Wijzigingshistorie bijgewerkt | voldoet met opmerking | `wijzigingen` CHG-009 (0.7) en kopregels (Versie, Status) in alle gewijzigde documenten. Zie J-03 en J-04. |
| Gevolgen voor agents en skills beoordeeld | voldoet | CHG-009: "geen wijziging in dit model"; voorstellen gaan na GK-3 naar Dr. Evil (PRC-08). |
| Verwijzingen naar buiten: genoemde agents en skills bestaan | voldoet | Alle genoemde skills staan in `desiredSkills` van Atlas of in de bestaande lijsten van ronde 3 (zie hierboven). Werking en feitelijke koppeling blijven `niet te beoordelen` (OPEN-11). |
| Documenten op WEB-19 gelijk aan de bestanden | voldoet | `latestBody` van alle 19 gecontroleerde documenten op WEB-19 is byte-gelijk aan de bestanden in `v07/` (register rev. 10, organisatie rev. 9, bevindingen rev. 8, voorstellen rev. 10, wijzigingen rev. 10). |

## Is CHG-009 juist en volledig verwerkt?

| Correctie (bron) | Verwerkt in | Resultaat |
| --- | --- | --- |
| Atlas 1: FND-019, "aantoonbaar", voorleggen bij goedgekeurde afspraken, r.49 (WEB-23 §1b) | `bevindingen` FND-019; `register` SKL-10 CAP-08 `bron`; `capabilities-en-skills` SKL-10; `verantwoordelijkheden` §5 FND-019; `skill-specificaties` SKL-10; `voorstellen` PRP-024 | Verwerkt, consistent. Citaten komen overeen met SKILL.md en r.49. |
| Atlas 2: FND-021 (herkomst citaat, stap 7 voorwaardelijk, 4b onvoorwaardelijk, trigger breder, SKL-18) | `bevindingen` FND-021; `register` SKL-15 `bron`, SKL-18 `opmerking`; `capabilities-en-skills` SKL-15, SKL-18, §5; `verantwoordelijkheden` §5; `skill-specificaties` SKL-15; PRP-024 | Verwerkt, consistent. |
| Atlas 3: TL-08 label Besloten, SKL-44 spreekt FND-023 niet tegen | `agentprofiel-atlas` §2 #9; `register` SKL-44 CAP-17, ROL-04/AGT-03 `opmerking`; `capabilities-en-skills` SKL-44; `skill-specificaties` SKL-44; `organisatie` §4, §5 | Verwerkt, behalve `organisatie` §3 (J-01). |
| Atlas 4: ROL-01 voorwaardelijk controleur ACT-01.18, ACT-02.7, ACT-02.9 | `register` `koppelingen` (beslisser en controleur); `verantwoordelijkheden` §1 en §4; FND-022; `agentprofiel-atlas` §7; nieuw FND-026 en PRP-028; hiaten-tabel in `bevindingen` | Verwerkt, register en overzicht gelijk. Zie J-02 voor PRP-028. |
| Kleiner: C-rollen ACT-01.13, 01.24, 01.18, 02.9 | `register` `koppelingen`; `verantwoordelijkheden` §1 | Verwerkt. ACT-01.18 en 02.9: AGT-01 (TL-08), AGT-02, ROL-01; ACT-01.13 en 01.24: ROL-01. |
| Kleiner: TL-07 ook Feit; §5 e en f Feit; In/Uit met Socrates | `agentprofiel-atlas` §2 #10, §5, §3 | Verwerkt. |
| Kleiner: lijsten "beschikbaar, niet vereist" gelijk | `agent-skillmatrix` §2 (Dr. Evil, Socrates, Atlas), `capabilities-en-skills` §5, `agentprofiel-atlas` §6 | Verwerkt, drie lijsten gelijk. |
| Kleiner: sleutel en naam SKL-11, 12, 13; bron SKL-41 | `register`, `capabilities-en-skills` §2 en §5 | Verwerkt; sleutels komen overeen met `desiredSkills`. |
| Dr. Evil: `agent-skillmatrix` §2 | `agent-skillmatrix` §2: `para-memory-files`, `complain`, `suggestion-box` | Verwerkt. |
| Ronde 1: ROL-04, AGT-03, `organisatie` §4/§5, OPEN-05 | `register` rollen/agents `opmerking`, OPEN-05 `stand`; `organisatie` §4 (AGT-03), §5 intro | Verwerkt, behalve `organisatie` §3 ROL-04 (J-01). |
| PRP-024 aangepast, FND-026/PRP-028 nieuw | `voorstellen`, `bevindingen`, `verantwoordelijkheden` §5, `skill-specificaties` SKL-15 | Verwerkt. Zie J-02. |
| "Ronde 2 ongewijzigd" | `register` | Bevestigd (JSON-vergelijking). |

Wat de agents schreven en wat CHG-009 zegt komt overeen; ik vond geen correctie die verkeerd is verwerkt. De aanvullende opmerking van Atlas over ontwerpafwijkingen (`agentprofiel-atlas` §3, "buiten de scope") is wel verwerkt, maar staat niet in CHG-009 (J-04).

## Bevindingen

Blokkerend: geen.

### Waarschuwingen

**J-01 (waarschuwing) `organisatie` §3 zegt nog dat geen van de taken TL-01 t/m TL-09 in de instructies van Atlas staat.**
Bewijs: `organisatie.md` r.77, rij ROL-04, kolom *Situatie*: "as-is; de taken TL-01 t/m TL-09 zijn to-be (staan nog niet in zijn instructies)". Dat spreekt de gecorrigeerde tekst in hetzelfde document tegen (§4 r.89: "TL-07 en TL-09 staan al in zijn instructies"; §5 r.96) en `register` ROL-04 `opmerking` (TL-07 r.38 en TL-09 r.58 staan in de instructies). Het is dezelfde correctie als CHG-009 "Ronde 1" beschrijft, maar §3 is niet meegenomen (de zin bestond al in 0.5 en 0.6).
Herstel: vervang de cel door "as-is; TL-07 en TL-09 staan al in zijn instructies (wachten op developers), TL-01 t/m TL-06 en TL-08 zijn to-be", en noem `organisatie` §3 in CHG-009.

**J-02 (waarschuwing) PRP-028 dekt het ontwerp per slice (ACT-02.7) niet, terwijl FND-026 en het register dat wel meenemen.**
Bewijs: `bevindingen` FND-026 en `register` `koppelingen` ACT-02.7 (controleur ROL-01 voorwaardelijk, stap 5) noemen ACT-02.7. `voorstellen` PRP-028 spreekt alleen over "het plan" bij GOV-06; in PRC-02 komt GOV-06 pas na ACT-02.7, ACT-02.8 en ACT-02.9, dus de voorwaardelijke goedkeuring van het ontwerp per slice valt buiten wat PRP-028 oplost. Daardoor is voor ACT-02.7 niet duidelijk waar het akkoord komt.
Herstel: laat PRP-028 zeggen dat "ontwerp en plan" bij GOV-06 worden voorgelegd (of noem ACT-02.7 als apart punt), en pas de Gevolgen aan.

**J-03 (waarschuwing) `wijzigingen` zegt dat 0.6 "niet ter goedkeuring gekomen" is, terwijl de kaart wel is ingediend en daarna ingetrokken.**
Bewijs: `wijzigingen.md` "Status van de versies": "0.6 (ronde 3) is niet ter goedkeuring gekomen: de kaart is ingetrokken". WEB-19 interacties: `9e904a82` "GK-3: rollen- en skillmodel (model 0.6)" is aangemaakt 2026-10-28 20:38 en `cancelled/withdrawn` om 20:43; CHG-009 zelf zegt "de GK-3-kaart voor 0.6 is ingetrokken". Dat 0.6 nooit is goedgekeurd klopt wel.
Herstel: "0.6 is niet goedgekeurd: de GK-3-kaart (`9e904a82`) is ingetrokken na de feitencheck".

**J-04 (waarschuwing) CHG-009 en de toelichting per versie zijn niet volledig.**
Bewijs: gewijzigd t.o.v. 0.6 maar niet in CHG-009 genoemd: FND-022 en FND-023 (`bevindingen`, de kop noemt ze wel), `agentprofiel-atlas` §3 (rij API-contracten met stap 5; rij ontwerpafwijkingen, Sentinel/"code reviewer"), §7, `register` SKL-15 `validatie` en `opmerking`, SKL-17 `opmerking`, `verantwoordelijkheden` §4 (tekst FND-022). `bevindingen` heeft toelichtingen "Nieuw in 0.2/0.4/0.5/0.6", maar geen "Nieuw in 0.7"; `organisatie` heeft geen aparte regel voor 0.7 behalve de statusrij.
Herstel: voeg deze punten toe aan CHG-009 en een korte alinea "Nieuw in 0.7" in `bevindingen` (en eventueel `voorstellen`).

## Wat ik niet kon toetsen

- Of de skills in de praktijk goed werken en of de koppeling in `desiredSkills` technisch actief is (OPEN-11); alleen de configuratie en de SKILL.md-bestanden van Atlas zijn gelezen. Het model houdt `bestaat` plus `werking: niet vastgesteld (OPEN-11)` aan; dat wijkt af van de letter van `bpmn-conventies` en is een besluit van Carlo.
- De SKILL.md van Dr. Evil en Socrates en de `AGENTS.md` van Dr. Evil en Socrates zijn niet opnieuw gelezen; de uitspraken daarover rusten op de comment van Dr. Evil (WEB-22) en op ongewijzigde 0.6-tekst. De lijst van Socrates (`agent-skillmatrix` §2: zes `bpmn-`-skills, `complain`, `suggestion-box`) is gelijk getrokken met `capabilities-en-skills` §5 maar niet tegen zijn `desiredSkills` gelegd.
- Of de zes voorwaarden van stap 5 voor ACT-02.7 gelden of alleen voor het implementatieplan: dat volgt uit de comment van Atlas en de SKILL.md ("ontwerp ... voordat je het plan vrijgeeft"), niet uit een proefrun.
- Mermaid-diagrammen en de inhoud van `prc-01` t/m `prc-06`: ongewijzigd en in ronde 2 goedgekeurd, hier alleen op ongewijzigdheid getoetst.
- `.bpmn`-validatie en het eindontwerp-artifact: niet aanwezig.
- Of de gedragsregels in de `AGENTS.md` van Atlas in de praktijk worden gevolgd.

## Oordeel

**kan worden ingediend.** Er zijn geen blokkerende bevindingen: alle correcties van Atlas en Dr. Evil zijn correct en consistent in register en overzichten verwerkt, ronde 2 is ongewijzigd, het goedgekeurde 0.5 is niet overschreven en de statussen kloppen. Verwerk J-01 bij voorkeur vóór indiening (één cel, en het is dezelfde feitelijke correctie); J-02 t/m J-04 zijn kleine aanvullingen en mogen mee met de eerstvolgende versie.

## Herstel door de maker (Socrates, 2026-10-29)

De modellen zijn na deze controle aangepast door de maker, niet door de controleur:

| Bevinding | Herstel |
| --- | --- |
| J-01 | `organisatie` §3, ROL-04 kolom *Situatie*: TL-07 en TL-09 staan al in de instructies, TL-01 t/m TL-06 en TL-08 zijn to-be. Kopregels noemen §3. |
| J-02 | PRP-028 noemt het ontwerp per slice (ACT-02.7) en het plan (ACT-01.18, ACT-02.9), in de tabel, de titel en de uitwerking. |
| J-03 | `wijzigingen`, status van de versies: "0.6 is niet goedgekeurd: de GK-3-kaart `9e904a82` is ingediend en na de feitencheck ingetrokken". |
| J-04 | CHG-009 aangevuld met FND-022, FND-023, `agentprofiel-atlas` §3 en §7, SKL-15 en SKL-17, en met dit herstel. Alinea "Nieuw in 0.7" in `bevindingen`. |

Na het herstel is niet opnieuw gecontroleerd. Het gaat om tekstuele aanvullingen zonder nieuwe ID's en zonder wijziging in het register.
