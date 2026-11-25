# Modelcontrole ronde 3, rollen- en skillmodel (versie 0.6)

| | |
| --- | --- |
| Scope | ronde 3 (versie 0.6, Concept): capabilities, skills, koppelingen (RACI), goedkeuringsmomenten GOV-01 t/m GOV-13, bevindingen FND-019 t/m FND-025, voorstellen PRP-019 t/m PRP-027, CHG-008. Ronde 1 en 2 (0.5, goedgekeurd) alleen voor zover ronde 3 ze raakt. |
| Datum | 2026-10-28 |
| Uitgevoerd door | onafhankelijke controle (niet de maker), met `bpmn-modelcontrole`, `bpmn-conventies` en `bpmn-rollen-en-skillmodel` |
| Gecontroleerd | `out_register.md` (YAML geparsed met js-yaml), `out_capabilities-en-skills.md`, `out_agent-skillmatrix.md`, `out_activiteit-skillmatrix.md`, `out_verantwoordelijkheden.md`, `out_skill-specificaties.md`, `out_agentprofiel-atlas.md`, `out_bevindingen.md`, `out_voorstellen.md`, `out_wijzigingen.md`. Vergeleken met `register.md`, `bevindingen.md`, `voorstellen.md`, `wijzigingen.md` (0.5) en `prc-01.md` t/m `prc-06.md`, `proces-catalogus.md`, `paperclip-mapping.md`. Feiten getoetst aan `agents.json`, `skills.json`, de SKILL.md-bestanden en de AGENTS.md van Atlas en Dr. Evil. |

## Uitkomst

Geen blokkerende bevindingen. Vijf waarschuwingen (I-01 t/m I-05). De modellen zijn niet aangepast.

## Checks

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's uniek, volgen het schema, niet hergebruikt | voldoet | Geen dubbele ID's in `out_register.md` (rollen, agents, processen, ACT, GOV, CAP, SKL, ASM, OPEN). Alle 18 `vervallen_ids` zijn niet opnieuw gebruikt; in nieuwe tekst van `out_bevindingen`, `out_voorstellen` en `out_wijzigingen` komen ze niet als levend ID voor. SKL-29 t/m SKL-39 zijn overgeslagen, maar niet hergebruikt. |
| Elke verwijzing wijst naar een bestaand element | voldoet | Script over alle `out_*`-bestanden, `prc-01` t/m `prc-06`, catalogus en mapping: geen onbekende ACT-, GOV-, SKL-, CAP-, FND-, PRP-, OPEN-, ASM-, CHG-, ROL-, AGT- of PRC-ID. FND-001 t/m FND-025, PRP (zonder PRP-016, die vervallen is), CHG-001 t/m CHG-008. |
| Elk procesmodel heeft status en versie | voldoet | `out_register.md`, `processen`: PRC-01 t/m PRC-05 Goedgekeurd 0.5, PRC-06 Goedgekeurd 0.3; PRC-07 en PRC-08 `n.v.t.` (context). |
| Procesmodel: doel, trigger, start/eind, rollen, beslissingen, fouten, GOV-markering | voldoet (ongewijzigd) | `activiteiten` (69), `beslissingen` (12), `processen`, `generieke_lanes` en `vervallen_ids` zijn identiek aan `register.md` 0.5 (JSON-vergelijking). Alle 69 ACT-ID's en alle 13 GOV-ID's staan in `prc-01` t/m `prc-06`. Niet opnieuw inhoudelijk getoetst: dat is in ronde 2 gedaan. |
| Elke activiteit heeft een capability en een skill (of OPEN) | voldoet | `koppelingen`: 69 van 69 ACT, geen dubbele of ontbrekende. Elke ACT heeft minstens één CAP en één SKL; ROL-01-activiteiten (7) hebben CAP-16 en `n.v.t. (mens)`. ACT-01.51 verwijst naar PRP-001 en OPEN-01. Elke CAP is door minstens één ACT gebruikt. |
| Elke skill heeft per capability een status met bron | voldoet | `skills`: 34 skills, 55 dekkingsregels, elke met status uit `bestaat/uitbreiden/koppelen/nieuw/onbekend` en een `bron`. Telling: 39 bestaat, 8 uitbreiden, 1 onbekend (SKL-17), 7 nieuw. Zie ook I-03. |
| Status klopt met SKILL.md (steekproef) | voldoet | Gelezen en bevestigd: `quality-gates` (Requirements en "Ontwerp: elke fase van het modelleertraject"; geen GOV-09, 13, 06; beoordeelt de inhoud niet), `architect-implementation-plan` (trigger "developer vraagt"; plan per use case; sectie 7 levert taken; opruimtaak meteen; stap 4 "eigen goedkeuringsmoment geldt hier niet"), `architect-modeling` ("Wijzigingen later": kleine wijzigingen achteraf melden; database niet in de fasentabel), `escalation-management` (vijf triggers; trigger 1 "na twee pogingen nog vast"; trigger 2 laatste woord Atlas), `requirements-orchestration`, `requirements-clarification` (sectie A, B, C), `requirements-analysis` (stap 5, 7, 9; geen vraag naar ontwerp/huisstijl of "kern"), `delivery-management` (limieten 3 en 2), `architect-database` (stap 7 en 8), `architect-architecture-choice` (stap 9 t/m 11), `architect-class-diagram` (stap 8), `to-tickets` (publiceert tickets in de tracker). Ook de GOV-bronverwijzingen zijn daarop nagelopen. Geen afwijking gevonden. |
| Koppeling skill-agent klopt met `desiredSkills` | voldoet | `agents.json`: alle `gebruikers` van SKL-01 t/m SKL-28 staan in de `desiredSkills` van Dr. Evil, Socrates of Atlas zoals het register zegt (ook SKL-06, 07, 08, 18, 26, 27 voor twee of drie agents). Voor elke ACT is de uitvoerder-agent een gebruiker van de genoemde skills. §5 "Gekoppeld maar niet gebruikt" klopt met de lijsten; `sprint-planning` staat bij geen enkele agent. |
| Elke activiteit heeft uitvoerder (R) en precies één verantwoordelijke (A) | voldoet | `koppelingen`: 69 R en 69 enkelvoudige A (geen lijsten). 62 hebben een AI-rol als A (ROL-02/03/04) of een generieke lane ("rol van de producent/vrager/ontvanger/eigenaar"). |
| Eindverantwoordelijkheid niet automatisch bij een AI-agent | voldoet | `out_register.md` r.1006 (commentaar bij `koppelingen`) en `out_verantwoordelijkheden.md` kop ("Menselijke verantwoordelijkheid"): Carlo (ROL-01) heeft de eindverantwoordelijkheid, uitgeoefend via de GOV-momenten; A bij een AI-rol is "die rol levert het resultaat". Waar Carlo het resultaat niet ziet, staat dat in §4 en FND-022. Beslisser is ROL-01 bij alle documenten met een GOV. |
| Onafhankelijke controle: controleur is niet de uitvoerder; gaten als FND | voldoet met opmerkingen | Geen enkele ACT heeft de uitvoerder als controleur. Gaten zijn vastgelegd: FND-017 (ACT-02.6, 02.7), FND-022 (ACT-01.16, 01.18, 01.20, 01.56, 01.57, 02.5, 02.9, 02.11, 02.54), `out_bevindingen.md` "Hiaten nagelopen". Zie I-01 en I-02. |
| Elke GOV heeft bevoegd, informatie, criteria, bij_goedkeuring, bij_afwijzing, escalatie | voldoet | GOV-01 t/m GOV-13: alle zes velden gevuld, bevoegd is overal ROL-01. De oude velden (id, naam, bevoegd, processen, versie, label, subproces) zijn ongewijzigd t.o.v. 0.5. GOV-07 en GOV-08 hebben bij afwijzing/escalatie "n.v.t." of "geen", mét reden. |
| Overzichten komen overeen met het register | voldoet met opmerkingen | 69 ACT in `activiteit-skillmatrix` (7 n.v.t. + 35 aanwezig + 12 gedeeltelijk + 15 ontbreekt = 69), 69 RACI-rijen, 13 GOV-rijen, 23 CAP-rijen (activiteiten per CAP kloppen met `koppelingen`), 34 SKL-rijen in matrix en tabel. Twee afwijkingen: I-01 en I-03. |
| Elke activiteit staat in diagram, beschrijving en register | voldoet | 69 ACT in register, `koppelingen` en `prc-01` t/m `prc-06`; diagrammen en beschrijving zijn niet gewijzigd. |
| `.bpmn`-bestand heeft validatieresultaat | niet te beoordelen | Er is geen `.bpmn`-bestand en geen validator. |
| Eindontwerp (artifact): elk ACT/GOV één keer; status/versie/skillstatus; geen extra gegevens; laadt zonder fouten | niet te beoordelen | Er is nog geen artifact. |
| Feiten, aannames, open vragen, voorstellen gescheiden | voldoet met opmerking | Skills `werking: niet vastgesteld (OPEN-11)`; aanname-achtige punten als ASM-09 en ASM-16 zijn gelabeld; nieuwe skills zijn `situatie: to-be` en PRP's; OPEN-11 en OPEN-12 zijn nieuw en hebben `wie`. Zie I-04 voor verouderde zinnen. |
| Huidige en gewenste situatie gescheiden | voldoet | SKL-40 t/m SKL-45 hebben `situatie: to-be`, status `nieuw`, "(werknaam)" en een PRP; bestaande skills hebben bron API/SKILL.md. `out_skill-specificaties.md` en `out_agentprofiel-atlas.md` labelen Feit, Besloten en Voorstel. |
| Wijzigingshistorie bijgewerkt | voldoet | `out_wijzigingen.md` CHG-008 (0.6): beschrijft de nieuwe secties, de ongewijzigde onderdelen, FND-019 t/m 025, PRP-019 t/m 027, aanvullingen bij PRP-002, 007, 010, 013, OPEN-11/12. De zin "Activiteiten, beslissingen en processen zijn ongewijzigd" klopt (JSON-vergelijking). |
| Goedgekeurd model niet overschreven | voldoet | Statuskop **Concept (ronde 3, ter goedkeuring bij GK-3), versie 0.6** in register, bevindingen, voorstellen, wijzigingen en de zes nieuwe documenten. Verwijzing "Goedgekeurde versie 0.5 ... GK-2, kaart `eb913512`, blijft gelden tot 0.6 is goedgekeurd" in `out_register.md`, `out_bevindingen.md`, `out_voorstellen.md`, `out_wijzigingen.md`. `prc-01` t/m `prc-06`, catalogus en mapping zijn niet gewijzigd. De revisienummers (8, 6) kon ik niet toetsen. |
| Verwijzingen naar buiten: genoemde agents en skills bestaan | voldoet | Dr. Evil, Socrates, Atlas, Sentinel staan in `agents.json`. Alle genoemde skills staan in `skills.json` (107 skills, zoals `out_bevindingen.md` FND-023 zegt) of in de `desiredSkills`. De sleutel-verschillen (`architect-requirements` vs `architect-architecture-choice`, `architect-use-cases` vs `uml-use-cases`) kloppen. Werking en feitelijke koppeling: niet te beoordelen (zie onderaan). |

## Bevindingen

Blokkerend: geen.

### Waarschuwingen

**I-01 (waarschuwing) Het overzicht onafhankelijke controle slaat drie activiteiten over.**
`out_verantwoordelijkheden.md` §4 mist ACT-02.3, ACT-02.7 en ACT-02.8. De tekst zegt dat elke activiteit die een document of plan oplevert erin staat, en ACT-01.6 en ACT-01.17 (de tegenhangers) staan er wel in. De oorzaak staat in `overviews.js`: het filter `/ACT-0[12]\.(2|3|4|7|8|14|15|21)$/` is bedoeld voor PRC-01, maar sluit ook ACT-02.3, ACT-02.7 en ACT-02.8 uit. Voor ACT-02.7 (ontwerp per slice) is dat het belangrijkste gat: `koppelingen` zegt "controleur: — (FND-017)", maar het overzicht noemt het niet. ACT-02.3 (GOV-01) en ACT-02.8 (GOV-06) zouden "voldoet" zijn. Het register en de RACI-tabel zijn wel juist. Herstel: filter corrigeren en de drie rijen toevoegen.

**I-02 (waarschuwing) De dekking van FND-022 en PRP-027 wordt te sterk voorgesteld.**
Zonder controleur zijn: de opdeling in slices (ACT-01.16, 02.5), het implementatieplan (ACT-01.18, 02.9) en het ontwerp per slice (ACT-02.7), alle door Atlas. PRP-027 (`out_voorstellen.md`) laat Atlas alleen de taken van Dr. Evil toetsen (ACT-01.20, 02.11). Toch staat in PRP-019 "Risico's": "PRP-027 vangt dat deels op", en in `out_agentprofiel-atlas.md` §7 staat bij "Geen tweede lezer (FND-017, FND-022)": "Maatregelen: GOV-06, PRP-017, PRP-027". GOV-06 gaat alleen over de API-contracten, PRP-017 is een ADR-regel, en PRP-027 controleert andermans werk. Voor de slices, het plan en het ontwerp per slice is dus geen controleur voorgesteld. Het gat zelf is netjes als FND vastgelegd; alleen de zin over de maatregelen klopt niet. Dit is hetzelfde patroon als H2-02 in de vorige controle. Herstel: schrijf in PRP-019 en in het agentprofiel dat dit een restrisico is waarvoor nog geen controleur is voorgesteld (of stel er een voor), en noem in FND-022 expliciet ACT-01.16, 01.18, 02.5, 02.9 zonder voorstel.

**I-03 (waarschuwing) Een deel van de skillstatus per activiteit staat niet in het register.**
De overzichten zijn "afgeleid uit het register", maar `overviews.js` bevat drie vaste uitzonderingen die het register niet kent. (a) ACT-01.8: `quality-gates` is `aanwezig`, terwijl `skills` SKL-21 CAP-14 (basis) `uitbreiden` heeft; uit de bron is af te leiden dat dit pas voor ACT-01.15 en ACT-02.4 geldt, maar dat staat er niet gestructureerd. PRP-025 wil juist ook een lijst "vóór ACT-01.8: GOV-01 en GOV-02", terwijl `out_skill-specificaties.md` SKL-21 alleen aan ACT-01.15 en ACT-02.4 koppelt. (b) ACT-01.13: `architect-modeling` is `aanwezig`, terwijl SKL-10 CAP-08 twee basisregels heeft (`bestaat` en `uitbreiden`, de laatste alleen voor ACT-02.6). (c) ACT-04.4: SKL-10 staat als `gedeeltelijk`, maar SKL-10 heeft geen dekking voor CAP-17. Verder noemen acht koppelingen een skill die de capability van die ACT niet dekt (ACT-01.4 SKL-27, ACT-01.9 en 02.12 SKL-07, ACT-02.7 SKL-12, ACT-04.4 SKL-10, ACT-04.54 en 05.6 SKL-26, ACT-05.3 SKL-27); het overzicht neemt dan de status van een andere capability over. De uitkomst per activiteit verandert hierdoor niet, behalve bij ACT-01.8 en ACT-01.13 (nu `aanwezig`, volgens een zuivere afleiding `gedeeltelijk`). Herstel: leg de beperking (`activiteiten:`) vast in de dekkingsregel van het register, en laat PRP-025 en de skill-specificatie ACT-01.8 hetzelfde behandelen.

**I-04 (waarschuwing) Verouderde zinnen in de voorstellen.**
In `out_voorstellen.md` staat bij PRP-005 (r.130), PRP-007 (r.152), PRP-010 (r.182), PRP-011 (r.190), PRP-013 (r.207), PRP-015 (r.224), PRP-017 (r.233) en PRP-018 (r.242) in "Capabilities en skills" nog dat het "in ronde 3" wordt beoordeeld of volgt (bijvoorbeeld "of ze deze vier checks dekken beoordeel ik in ronde 3"). Ronde 3 is nu klaar en geeft de antwoorden: PRP-005 wordt SKL-44 (PRP-022), PRP-007 en PRP-013 SKL-21 (PRP-025), PRP-010 SKL-43, PRP-011 en PRP-015 SKL-02, PRP-017 SKL-08, en bij PRP-018 is de dekking door `escalation-management` en `delivery-management` nu bekeken (SKL-22 `bestaat`, SKL-23 `uitbreiden` voor de variant). Het vervallen PRP-012 (r.199) noemt "het agentprofiel uit ronde 3", dat nu bestaat; daar mag het blijven staan. Een lezer ziet zo twee verschillende standen. Herstel: vervang de zinnen door een verwijzing naar `activiteit-skillmatrix` en `skill-specificaties`.

**I-05 (waarschuwing) "Telkens net anders" klopt niet voor drie van de zeven skills.**
`out_capabilities-en-skills.md` (SKL-45, rij in "Gedeelde skills") en PRP-023 zeggen dat het goedkeuringsmoment in zeven producerende skills los staat, "telkens net anders". De sectie "Goedkeuringsmoment (elke fase)" in `architect-domain-model`, `architect-sequence-diagrams` en `architect-class-diagram` is woord voor woord gelijk (zelfde MD5); de andere vier verschillen wel. Het argument voor SKL-45 blijft overeind (niemand telt rondes), maar de zin is te breed. Herstel: "in zeven skills, in vier verschillende vormen".

## Oordeel

**kan worden ingediend.** Er zijn geen blokkerende bevindingen. De skillstatussen, de koppeling met `desiredSkills`, de RACI, de GOV-uitwerking, de ID's en de wijzigingshistorie kloppen. Verwerk I-01 t/m I-03 bij voorkeur vóór indiening: ze zijn klein en gaan over formulering en over het overzicht, behalve I-02, dat de stand van een open risico beter weergeeft. I-04 en I-05 mogen mee met de volgende versie.

## Wat ik niet kon toetsen

- Of de skills in de praktijk goed werken, en of de koppeling in `desiredSkills` technisch actief is. Het register zegt dat zelf ook (OPEN-11). Volgens `bpmn-conventies` ("Bewijs voor de huidige situatie") hoort dat op `onbekend` tot de gebruiker het bevestigt. Het model kiest voor `bestaat` plus de aparte regel `werking: niet vastgesteld` en OPEN-11. Dat is zichtbaar gemaakt, maar het is een afwijking van de letter; Carlo beslist daarover met OPEN-11.
- De steekproef van SKILL.md-bestanden is niet uitputtend. Niet of alleen op kopniveau gelezen: `grilling`, `domain-modeling`, `paperclip`, `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-use-cases`, `paperclip-converting-plans-to-tasks`, `improve-codebase-architecture`. Hun status rust op de API-koppeling en de beschrijving.
- Of de nieuwe skillspecificaties (SKL-40 t/m SKL-45) inhoudelijk volstaan: er is geen skill om aan te toetsen.
- De revisienummers ("revisie 6" en "revisie 8") van de goedgekeurde documenten, en de goedkeuring GK-2 zelf: geen toegang tot het issue.
- Mermaid-diagrammen en de inhoud van `prc-01` t/m `prc-06`: ongewijzigd en in ronde 2 goedgekeurd, niet opnieuw getoetst.
- `.bpmn`-validatie en het eindontwerp-artifact: niet aanwezig.
- Of de gedragsregels in de AGENTS.md van Atlas en Dr. Evil in de praktijk gevolgd worden.

## Verwerking door de maker (Socrates, 2026-10-28)

Deze sectie is toegevoegd na de controle. De controle hierboven is een momentopname.

| ID | Verwerkt |
| --- | --- |
| I-01 | Het filter in `overviews.js` sluit nu alleen de genoemde ACT-ID's uit. ACT-02.3, ACT-02.7 en ACT-02.8 staan in `verantwoordelijkheden` §4. ACT-02.7 heeft het oordeel "geen controle". |
| I-02 | FND-022 noemt nu ook ACT-02.7, en het restrisico voor het werk van Atlas staat er expliciet in. Daarvoor is er nu geen onafhankelijke controleur; dat kan pas met PRP-018 of de variant van GOV-06. Dezelfde tekst staat in PRP-019, in het agentprofiel §7 en in `verantwoordelijkheden` §4. |
| I-03 | Elke koppeling in het register heeft nu `skl_status`. Dekkingsregels die maar voor een paar activiteiten gelden, hebben `activiteiten` (SKL-10, SKL-21). De vaste uitzonderingen in `overviews.js` zijn weg. De generator controleert dat elk paar van activiteit en skill een passende dekkingsregel heeft. Ook nieuw: SKL-07 dekt CAP-03, SKL-26 dekt CAP-18 en SKL-27 dekt CAP-02. Verder heeft ACT-02.7 ook CAP-07, en zijn SKL-10 bij ACT-04.4 en SKL-27 bij ACT-05.3 weggehaald. De telling blijft gelijk: 7 n.v.t., 35 aanwezig, 12 gedeeltelijk, 15 ontbreekt. |
| I-04 | De zinnen over "ronde 3" bij PRP-005, 007, 010, 011, 013, 015, 017 en 018 zijn aangevuld met de stand in 0.6. |
| I-05 | De zin is nu "in vier verschillende vormen". |

Niet opnieuw onafhankelijk gecontroleerd. De generator heeft de checks opnieuw gedraaid (ID's, koppelingen en dekking): geen fouten.
