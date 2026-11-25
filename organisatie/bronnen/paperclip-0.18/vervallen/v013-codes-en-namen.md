> **Vervallen** – geldend is `codes-en-namen` r3. Dit is een archiefkopie; niet lezen of gebruiken.

# Codes en hun korte naam

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `226c7ce7`)**, alle 11 onderdelen van de kaart goedgekeurd: CHG-023 (OpenAPI voor het bouwcontract), CHG-024 (codes met een korte naam), PRP-044 (korte namen in de conventies), de aannames ASM-49 t/m ASM-55 en de weergaven; besluit **B-19** (model 0.13 goedgekeurd). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `codes-en-namen`. Vóór de goedkeuring: **Concept, ter goedkeuring** (nieuw in model 0.13, CHG-024, besluit B-18, kaart `42b39ff5`). Weergave van de sectie `korte_namen` in `v013-register`: daar staat de bron (ASM-54). |
| Gebruik | Zoek een code op. In de documenten staat de korte naam de eerste keer per sectie bij de code (ASM-55). "(vervallen)" betekent: de code bestaat niet meer en wordt niet hergebruikt. |

## Wat de voorvoegsels betekenen

Elke code blijft, want agents, de reviewer en de tester verwijzen ermee. In alles wat jij leest staat er een korte naam bij, bijvoorbeeld GOV-06 (akkoord bouwcontract per slice). De korte naam van elke code staat in de sectie `korte_namen` van `v013-register` en in dit document (besluit B-18, CHG-024).

| Voorvoegsel | Betekenis | Voorbeeld |
| --- | --- | --- |
| PRC | proces of subproces | PRC-01 (nieuwe klant: opdracht tot eerste backlog) |
| ACT | stap in een proces; het nummer zegt niets over de volgorde | ACT-01.17 (bouwcontract van slice 1 opstellen) |
| G | beslispunt in een proces | G-02.8 (loopt er al een uitbreiding?) |
| GOV | akkoordmoment van jou | GOV-06 (akkoord bouwcontract per slice) |
| GS | grill-moment | GS1 (grill-sessie bij de analyse) |
| ROL / AGT | rol / agent | ROL-01 (project owner: jij), ROL-04 (systeemarchitect: Atlas) |
| CAP | capability: iets wat de organisatie moet kunnen | CAP-11 (bouwcontract ontwerpen) |
| B / TL-V | een besluit van jou / jouw besluit over de tech lead | B-17 (OpenAPI voor het bouwcontract), TL-V7 (geen rol tech lead) |
| TL | tech-leadtaak van Atlas | TL-04 (bouwcontract per slice opstellen) |
| PRP | voorstel | PRP-032 (wie ontwerpt pagina's en waarin) |
| FND | bevinding: iets wat ik vond | |
| ASM | aanname: iets wat ik heb ingevuld | |
| OPEN | open vraag | |
| CHG | wijziging aan het model | |
| P1 / P2 / P3 | architectuurprofiel | CMS / component-app / maatwerk |
| M | plek waar Paperclip niet netjes past | |
| K | punt uit de modelcontrole | |
| UC / AC / BR / FR | use case / acceptatiecriterium / bedrijfsregel / functionele eis, uit de requirements van een klantproject | |
| Lokale codes | A-1, B-2, C-5 enz.: een gat uit een lijst `register-gaten-…` (groep A, B of C), niet te verwarren met besluit B-02; V1 t/m V5: vragen op een vragenkaart; D1 t/m D3: doelen; GK-1 t/m GK-4: de vier goedkeuringsrondes | |

## Processen (PRC)

| Code | Korte naam | Stand |
| --- | --- | --- |
| PRC-01 | nieuwe klant: opdracht tot eerste backlog |  |
| PRC-02 | backlog uitbreiden met volgende slice |  |
| PRC-03 | akkoord-poort van de project owner |  |
| PRC-04 | vragenloop en grill-sessie tussen agents |  |
| PRC-05 | afkeuring en herziening |  |
| PRC-06 | blokkade afhandelen |  |
| PRC-07 | weekmoment en prioriteren |  |
| PRC-08 | organisatie aanpassen |  |

## Stappen (ACT)

| Code | Korte naam | Stand |
| --- | --- | --- |
| ACT-01.1 | opdracht geven |  |
| ACT-01.2 | project aanmaken en opdracht overdragen |  |
| ACT-01.3 | plan, bedrijf en domein onderzoeken |  |
| ACT-01.4 | vragen van Socrates aan Carlo |  |
| ACT-01.5 | vragen van Socrates beantwoorden |  |
| ACT-01.6 | analysedocument opstellen |  |
| ACT-01.7 | goedgekeurde analyse en use cases melden |  |
| ACT-01.8 | ontwerp overdragen aan Atlas en ontwerper |  |
| ACT-01.9 | use cases met acceptatiecriteria opstellen |  |
| ACT-01.10 | domeinmodel opstellen bij maatwerk |  |
| ACT-01.11 | architectuurkeuze en profiel vastleggen |  |
| ACT-01.12 | sequentiediagrammen opstellen bij maatwerk |  |
| ACT-01.13 | klassendiagram opstellen bij maatwerk |  |
| ACT-01.14 | goedgekeurd technisch ontwerp melden |  |
| ACT-01.15 | Atlas vragen om opdeling in slices |  |
| ACT-01.16 | technisch ontwerp opdelen in slices |  |
| ACT-01.17 | bouwcontract van slice 1 opstellen |  |
| ACT-01.18 | implementatieplan van slice 1 opstellen |  |
| ACT-01.19 | Atlas leest eigen plan mee | vervallen |
| ACT-01.20 | epics en taken slice 1 maken |  |
| ACT-01.21 | vragen van Atlas aan Carlo |  |
| ACT-01.22 | vragen van Atlas beantwoorden |  |
| ACT-01.23 | use cases en paginabrieven toetsen |  |
| ACT-01.24 | databaseontwerp kern opstellen bij maatwerk |  |
| ACT-01.25 | taken slice 1 toetsen tegen werkpakketten |  |
| ACT-01.26 | visie en projecttype vastleggen |  |
| ACT-01.27 | paginalijst en paginabrieven opstellen |  |
| ACT-01.28 | sleutelpagina's en paginatypen ontwerpen |  |
| ACT-01.29 | later-pagina's op uitbreidingslijst zetten |  |
| ACT-01.51 | project aanmaken en directe opdracht melden |  |
| ACT-01.52 | design systeem maken en aanleveren |  |
| ACT-01.53 | use cases in aparte stap | vervallen |
| ACT-01.54 | kern markeren |  |
| ACT-01.55 | toets van eigen slice-ontwerp | vervallen |
| ACT-01.56 | conventiebestand opstellen |  |
| ACT-01.57 | backlog gereed van slice 1 controleren |  |
| ACT-01.58 | paginabrieven en ontwerp afstemmen |  |
| ACT-01.59 | componenten-, route- en dataontwerp opstellen |  |
| ACT-01.60 | contentmodel en platformconfiguratie opstellen |  |
| ACT-02.1 | volgende wens bepalen uit de volgorde |  |
| ACT-02.2 | volgende wens kiezen |  |
| ACT-02.3 | eisen van de wens analyseren |  |
| ACT-02.4 | Atlas vragen wat nu gebouwd wordt |  |
| ACT-02.5 | wens in slices opdelen en ordenen |  |
| ACT-02.6 | globaal ontwerp of profiel bijwerken |  |
| ACT-02.7 | ontwerp per slice opstellen |  |
| ACT-02.8 | bouwcontract opstellen |  |
| ACT-02.9 | implementatieplan opstellen |  |
| ACT-02.10 | Atlas leest eigen ontwerp mee | vervallen |
| ACT-02.11 | taken maken en op backlog zetten |  |
| ACT-02.12 | use cases van de wens opstellen |  |
| ACT-02.13 | wens: use cases en brieven toetsen |  |
| ACT-02.14 | taken uitbreiding toetsen tegen werkpakketten |  |
| ACT-02.15 | ontwerpbehoefte bepalen en brieven opstellen |  |
| ACT-02.16 | pagina's en nieuwe patronen ontwerpen |  |
| ACT-02.17 | uitbreidingslijst bijwerken |  |
| ACT-02.51 | open taken in lopende slice tellen |  |
| ACT-02.52 | toets van eigen uitbreidingsontwerp | vervallen |
| ACT-02.53 | vaste controles uitvoeren |  |
| ACT-02.54 | backlog gereed van uitbreiding controleren |  |
| ACT-02.55 | ontwerpbesluit vastleggen bij wijziging |  |
| ACT-02.56 | brieven en ontwerp van wens afstemmen |  |
| ACT-03.1 | document ter goedkeuring indienen |  |
| ACT-03.2 | document beoordelen en besluiten |  |
| ACT-03.3 | goedkeuring vastleggen en melden |  |
| ACT-03.4 | vraag of opmerking van Carlo beantwoorden |  |
| ACT-04.1 | ontvanger van de vraag bepalen |  |
| ACT-04.2 | vragen stellen, grill-ronde |  |
| ACT-04.3 | vragen beantwoorden |  |
| ACT-04.4 | wijzigingsverzoek of productvraag opstellen |  |
| ACT-04.5 | antwoorden beoordelen |  |
| ACT-04.6 | volgende ronde stellen |  |
| ACT-04.7 | oude splitsing van vragenloop | vervallen |
| ACT-04.51 | rondes zonder voortgang tellen |  |
| ACT-04.52 | vastgelopen vraag escaleren |  |
| ACT-04.53 | vraag-escalatie met opties voorleggen |  |
| ACT-04.54 | escalatiebesluit doorgeven |  |
| ACT-04.55 | contextverslag opstellen |  |
| ACT-04.56 | contextverslag bevestigen of aanvullen |  |
| ACT-05.1 | afkeuringen tellen |  |
| ACT-05.2 | commentaar verwerken en document herzien |  |
| ACT-05.3 | escalatie melden aan Dr. Evil |  |
| ACT-05.4 | afkeuring-escalatie met opties voorleggen |  |
| ACT-05.5 | besluit over vastgelopen document nemen |  |
| ACT-05.6 | besluit uitvoeren |  |
| ACT-06.1 | blokkade vastleggen |  |
| ACT-06.2 | wachten op blokkerend issue |  |
| ACT-06.3 | blokkade melden aan Dr. Evil |  |
| ACT-06.4 | blokkade oplossen of eigenaar toewijzen |  |
| ACT-06.5 | blokkade escaleren |  |

## Beslispunten (G)

| Code | Korte naam | Stand |
| --- | --- | --- |
| G-01.1 | bij wie komt de opdracht binnen? |  |
| G-01.2 | bestaat de tech-lead-agent? | vervallen |
| G-01.3 | meelezen door Atlas bij plan | vervallen |
| G-01.4 | toets nieuwe klant: use cases of brieven aanpassen? |  |
| G-01.5 | toets nieuwe klant: taken aanpassen? |  |
| G-01.6 | welk architectuurprofiel is goedgekeurd? |  |
| G-01.7 | opdracht en design systeem tegelijk starten |  |
| G-01.8 | analysepakket en design systeem samenvoegen |  |
| G-01.9 | architectuurkeuze en ontwerpen samenvoegen |  |
| G-02.1 | is de volgende wens duidelijk? |  |
| G-02.2 | zijn eisen en brieven al goedgekeurd? |  |
| G-02.3 | raakt de wens het globale ontwerp? |  |
| G-02.4 | meelezen door Atlas bij ontwerp | vervallen |
| G-02.5 | toets uitbreiding: use cases of brieven aanpassen? |  |
| G-02.6 | toets uitbreiding: taken aanpassen? |  |
| G-02.7 | is er een ontwerp nodig? |  |
| G-02.8 | loopt er al een uitbreiding? |  |
| G-03.1 | samengevoegde beslissing | vervallen |
| G-04.1 | wijziging of productkeuze nodig? |  |
| G-04.2 | zijn er nog open punten? |  |
| G-04.51 | twee rondes zonder voortgang? |  |
| G-04.52 | bevestigt ontvanger het contextverslag? |  |
| G-05.1 | is dit de derde afkeuring? |  |
| G-06.1 | heeft de blokkade een eigenaar? |  |
| G-06.2 | kan Dr. Evil de blokkade oplossen? |  |

## Akkoordmomenten van jou (GOV)

| Code | Korte naam | Stand |
| --- | --- | --- |
| GOV-01 | akkoord requirements en bedrijfsregels |  |
| GOV-02 | akkoord use cases en paginabrieven |  |
| GOV-03 | akkoord domeinmodel |  |
| GOV-04 | akkoord sequentiediagrammen |  |
| GOV-05 | akkoord ontwerpklassendiagram |  |
| GOV-06 | akkoord bouwcontract per slice |  |
| GOV-07 | keuze van de volgende wens |  |
| GOV-08 | escalatiebesluit van Carlo |  |
| GOV-09 | akkoord architectuurkeuze en profiel |  |
| GOV-10 | akkoord analysepakket |  |
| GOV-11 | akkoord technisch ontwerp volgens profiel |  |
| GOV-12 | akkoord wijzigingsverzoek of productkeuze |  |
| GOV-13 | akkoord databaseontwerp |  |
| GOV-14 | akkoord paginaontwerp |  |
| GOV-15 | akkoord richting: architectuur en ontwerpen |  |

## Grill-momenten (GS)

| Code | Korte naam | Stand |
| --- | --- | --- |
| GS1 | grill-sessie bij de analyse |  |
| GS2 | grill-sessie bij de use cases |  |
| GS3 | grill-sessie bij de toets door Atlas |  |
| GS4 | grill-sessie bij de architectuurkeuze |  |
| GS5 | grill-sessie bij brieven en ontwerp | vervallen |
| GS6 | grill-sessie bij technisch ontwerp | vervallen |
| GS7 | grill-sessie bij opdeling in slices | vervallen |
| GS8 | grill-sessie bij taken maken | vervallen |
| GS9 | grill-sessie bij analyse van wens |  |
| GS10 | grill-sessie bij use cases van wens |  |
| GS11 | grill-sessie bij toets van wens |  |
| GS12 | grill-sessie bij brieven en ontwerp wens | vervallen |
| GS13 | grill-sessie bij opdeling van wens | vervallen |
| GS14 | grill-sessie bij wijziging van architectuur |  |
| GS15 | grill-sessie bij taken van wens | vervallen |

## Rollen (ROL)

| Code | Korte naam | Stand |
| --- | --- | --- |
| ROL-01 | project owner |  |
| ROL-02 | orchestrator en scrum master |  |
| ROL-03 | business analist |  |
| ROL-04 | systeemarchitect |  |
| ROL-05 | tech lead | vervallen |

## Agents (AGT)

| Code | Korte naam | Stand |
| --- | --- | --- |
| AGT-01 | agent Dr. Evil |  |
| AGT-02 | agent Socrates |  |
| AGT-03 | agent Atlas |  |
| AGT-04 | aparte tech-lead-agent | vervallen |
| AGT-05 | agent Sentinel |  |

## Capabilities (CAP)

| Code | Korte naam | Stand |
| --- | --- | --- |
| CAP-01 | intake en overdracht van werk |  |
| CAP-02 | requirements analyseren |  |
| CAP-03 | use cases met acceptatiecriteria opstellen |  |
| CAP-04 | use cases toetsen op ontwerpbaarheid |  |
| CAP-05 | architectuurkeuze maken |  |
| CAP-06 | domeinmodel maken |  |
| CAP-07 | gedragsmodel maken |  |
| CAP-08 | structuurontwerp maken |  |
| CAP-09 | databaseontwerp maken |  |
| CAP-10 | opdelen in vertical slices |  |
| CAP-11 | bouwcontract ontwerpen |  |
| CAP-12 | implementatieplanning maken |  |
| CAP-13 | backlog opbouwen |  |
| CAP-14 | poortcontrole uitvoeren |  |
| CAP-15 | goedkeuring aanvragen, vastleggen, melden |  |
| CAP-16 | productbesluit en antwoord van Carlo |  |
| CAP-17 | vragen tussen agents afhandelen |  |
| CAP-18 | escaleren en besluit voorbereiden |  |
| CAP-19 | blokkades en afhankelijkheden bewaken |  |
| CAP-20 | volgorde en flow bewaken |  |
| CAP-21 | ontwerpbesluiten vastleggen |  |
| CAP-22 | ontwikkelafspraken vastleggen |  |
| CAP-23 | rondes tellen en begrenzen |  |
| CAP-24 | paginalijst en paginabrieven opstellen |  |
| CAP-25 | paginaontwerp maken |  |
| CAP-26 | contentmodel en platformconfiguratie |  |
| CAP-27 | component-, route- en dataontwerp |  |

## Jouw besluiten (B)

| Code | Korte naam | Stand |
| --- | --- | --- |
| B-01 | flow zonder sprints |  |
| B-02 | ontwerp per slice, program design |  |
| B-03 | Carlo is enige klantcontact |  |
| B-04 | eigen issue voor het model |  |
| B-05 | vier goedkeuringsrondes |  |
| B-06 | Socrates maakt, Atlas toetst use cases |  |
| B-07 | volledig databaseontwerp van de kern |  |
| B-08 | keuze uit de voorstellen |  |
| B-09 | wanneer Dr. Evil de wens vraagt |  |
| B-10 | ontwerp eerst en architectuurprofielen |  |
| B-11 | skills bij naam, niet nummer |  |
| B-12 | model 0.10 goedgekeurd |  |
| B-13 | antwoorden op de open vragen |  |
| B-14 | model 0.11 goedgekeurd |  |
| B-15 | grill-sessies om context te verzamelen |  |
| B-16 | minder grill-momenten, optie A |  |
| B-17 | OpenAPI voor het bouwcontract |  |
| B-18 | codes met een korte naam |  |

## Jouw besluiten over de tech lead (TL-V)

| Code | Korte naam | Stand |
| --- | --- | --- |
| TL-V1 | tech lead komt er, later vervallen |  |
| TL-V2 | Carlo bepaalt de volgorde van wensen |  |
| TL-V3 | Dr. Evil maakt taken uit werkpakketten |  |
| TL-V4 | Carlo keurt API-contracten goed |  |
| TL-V5 | kern vooraf volledig ontwerpen |  |
| TL-V6 | Atlas voert tech-leadtaken uit |  |
| TL-V7 | geen rol tech lead |  |

## Tech-leadtaken van Atlas (TL)

| Code | Korte naam | Stand |
| --- | --- | --- |
| TL-01 | opdelen in slices |  |
| TL-02 | technische volgorde van slices bepalen |  |
| TL-03 | ontwerp per slice buiten de kern |  |
| TL-04 | bouwcontract per slice opstellen |  |
| TL-05 | implementatieplan per slice opstellen |  |
| TL-06 | vragen stellen, doorverwijzen, besluit vastleggen |  |
| TL-07 | implementatievragen van developers beantwoorden |  |
| TL-08 | vragen van Dr. Evil beantwoorden |  |
| TL-09 | ontwerpafwijkingen van Sentinel afhandelen |  |

## Voorstellen (PRP)

| Code | Korte naam | Stand |
| --- | --- | --- |
| PRP-001 | één loket voor opdrachten |  |
| PRP-002 | use cases bij de business analist |  |
| PRP-003 | minder, betere akkoordmomenten |  |
| PRP-004 | globaal ontwerp licht, detail per slice |  |
| PRP-005 | begrensde vragenloop |  |
| PRP-006 | afkeuring: twee herzieningen, dan escalatie |  |
| PRP-007 | uitbreiden zonder akkoord, met controles |  |
| PRP-008 | verdeling orchestrator en architect |  |
| PRP-009 | tweede ontwerper of toets | vervallen |
| PRP-010 | afspraken voor developers in slice 1 |  |
| PRP-011 | design systeem bij de start | vervallen |
| PRP-012 | tech-lead-agent instellen | vervallen |
| PRP-013 | controle backlog gereed |  |
| PRP-014 | vaste start voor de uitbreiding |  |
| PRP-015 | kern markeren bij de requirements |  |
| PRP-016 | database: fundament vooraf | vervallen |
| PRP-017 | ontwerpbesluit bij elke ontwerpwijziging |  |
| PRP-018 | tech-leadtaken bij aparte agent later |  |
| PRP-019 | skill voor opdelen in slices |  |
| PRP-020 | skill voor API-contracten |  |
| PRP-021 | skill voor toetsen van use cases |  |
| PRP-022 | skill voor vragen over ontwerp |  |
| PRP-023 | skill voor vragen- en akkoordrondes |  |
| PRP-024 | skills voor plan en modelleren uitbreiden |  |
| PRP-025 | skill voor poortcontrole uitbreiden |  |
| PRP-026 | één eigenaar per soort term |  |
| PRP-027 | Atlas toetst taken tegen werkpakketten |  |
| PRP-028 | voorwaardelijk akkoord op ontwerp en plan |  |
| PRP-029 | volgorde van stappen bij nieuwe klant |  |
| PRP-030 | paginalijst met nu en later |  |
| PRP-031 | ontwerpniveau per paginatype |  |
| PRP-032 | wie ontwerpt pagina's en waarin |  |
| PRP-033 | uitbreidingslijst en stappen per uitbreiding |  |
| PRP-034 | drie architectuurprofielen |  |
| PRP-035 | geen nieuwe agent nu |  |
| PRP-036 | vier akkoorden bij nieuwe klant |  |
| PRP-037 | design-consistentie bewaken |  |
| PRP-038 | lichtere use cases bij eenvoudige site |  |
| PRP-039 | skills bij naam in conventies |  |
| PRP-040 | akkoord altijd via kaart op issue |  |
| PRP-041 | toets van Atlas via toets-issue |  |
| PRP-042 | toegang tot Claude Design |  |
| PRP-043 | templatecontract bij CMS-projecten |  |
| PRP-044 | korte namen in de conventies |  |

## Bevindingen (FND)

| Code | Korte naam | Stand |
| --- | --- | --- |
| FND-001 | use cases: twee eigenaren |  |
| FND-002 | architect doet meer dan beschreven |  |
| FND-003 | implementatieplan verschuift |  |
| FND-004 | koppeling van Atlas wijkt af |  |
| FND-005 | veel akkoordpoorten bij Carlo |  |
| FND-006 | veel ontwerp vooraf |  |
| FND-007 | uitbreiden zonder akkoord botst met route |  |
| FND-008 | twee loketten |  |
| FND-009 | grens orchestrator, tech lead, architect |  |
| FND-010 | vragenloops zonder uitgang |  |
| FND-011 | stappen vóór definition of done ontbreken |  |
| FND-012 | proces hangt aan ontbrekende agent |  |
| FND-013 | orchestrator zonder eigen ritme |  |
| FND-014 | ontwerp per slice zonder controle |  |
| FND-015 | afkeuring zonder maximum |  |
| FND-016 | eerste slice wacht op kernontwerp |  |
| FND-017 | Atlas beoordeelt eigen ontwerp zelf |  |
| FND-018 | alles na analyse hangt aan Atlas |  |
| FND-019 | kleine ontwerpwijzigingen zonder akkoord |  |
| FND-020 | twee schrijvers in GLOSSARY.md |  |
| FND-021 | implementatieplan maakt taken |  |
| FND-022 | opdeling, plan en taken zonder controle |  |
| FND-023 | vijf Atlas-taken zonder skill |  |
| FND-024 | niemand telt de rondes |  |
| FND-025 | poortcontrole kent niet alle akkoorden |  |
| FND-026 | akkoord op implementatieplan ontbreekt in model |  |
| FND-027 | moment van de vraag bij wenskeuze |  |
| FND-028 | geen ontwerpstap vóór slices en contract |  |
| FND-029 | afleiding loopt verkeerde kant op |  |
| FND-030 | geen visie en geen paginalijst |  |
| FND-031 | één zware modelleermethode voor alles |  |
| FND-032 | uitbreidingslijst is geen vast onderdeel |  |
| FND-033 | geen ontwerper behalve Carlo |  |
| FND-034 | niemand bewaakt het design systeem |  |
| FND-035 | agents kunnen Claude Design niet openen |  |
| FND-036 | drie triggers voor tweede doorloop |  |
| FND-037 | dagelijkse herinnering botst met skills |  |
| FND-038 | register beschreef grilling verkeerd |  |
| FND-039 | context verloren bij overdracht |  |
| FND-040 | formaat API-contract lag niet vast |  |
| FND-041 | codes niet te lezen voor Carlo |  |

## Aannames (ASM)

| Code | Korte naam | Stand |
| --- | --- | --- |
| ASM-01 | betekenis van het analysedocument |  |
| ASM-02 | epic als bovenliggend issue |  |
| ASM-03 | vragen over implementatie naar Atlas |  |
| ASM-04 | Dr. Evil met twee petten |  |
| ASM-05 | aparte tech-lead-agent | vervallen |
| ASM-06 | laatste technische woord | vervallen |
| ASM-07 | uitbreiden pas na eerste backlog |  |
| ASM-08 | vraag tussen agents via issue |  |
| ASM-09 | Atlas ontwerpt buiten kern per slice |  |
| ASM-10 | vraag van Carlo is geen afkeuring |  |
| ASM-11 | telling begint opnieuw na escalatie |  |
| ASM-12 | Dr. Evil pas bij blokkade |  |
| ASM-13 | blokkade melden via issue |  |
| ASM-14 | volgende wens uit de volgorde |  |
| ASM-15 | meelezen door Atlas | vervallen |
| ASM-16 | vrager oordeelt vastgelopen | vervallen |
| ASM-17 | overdracht pas na analysepakket |  |
| ASM-18 | afgekeurd document apart herzien |  |
| ASM-19 | vorm met drie akkoorden | vervallen |
| ASM-20 | kleine ontwerpwijziging ook langs akkoord |  |
| ASM-21 | poort bouwcontract in vaste controles |  |
| ASM-22 | wachten op flowlimiet is geen herziening |  |
| ASM-23 | wachttijd van uitbreidingen op Atlas |  |
| ASM-24 | herinnering op het weekmoment |  |
| ASM-25 | vraag naar wens op weekmoment-issue |  |
| ASM-26 | oordeel per document bij ontwerppakket |  |
| ASM-27 | visie is de productvisie |  |
| ASM-28 | Carlo is de ontwerper |  |
| ASM-29 | elk project heeft een gebruikersinterface |  |
| ASM-30 | wat telt als open taak |  |
| ASM-31 | project aanmaken bij directe opdracht |  |
| ASM-32 | weekmoment en dagstart van Dr. Evil |  |
| ASM-33 | hoogstens één doorloop per project |  |
| ASM-34 | link naar git-repository in opdracht |  |
| ASM-35 | inhoud van het herinneringsbericht |  |
| ASM-36 | skills van Atlas volgens de matrix |  |
| ASM-37 | oordeel per document bij paginaontwerp |  |
| ASM-38 | kwaliteitspoorten bij stappen van Dr. Evil |  |
| ASM-39 | uitbreidingslijst zonder controleur |  |
| ASM-40 | waar grill-sessies komen |  |
| ASM-41 | geen sessie zonder open punten |  |
| ASM-42 | inhoud van het contextverslag |  |
| ASM-43 | vragen-en-akkoordrondes als skill |  |
| ASM-44 | to-tickets niet vereist |  |
| ASM-45 | nieuw toets-issue per toetsronde |  |
| ASM-46 | contentmodel bij CMS-projecten |  |
| ASM-47 | Dr. Evil beslist over lopende doorloop |  |
| ASM-48 | tellen van rondes bij contextverslag |  |
| ASM-49 | inhoud van de leesbare versie |  |
| ASM-50 | bron per veld in OpenAPI |  |
| ASM-51 | Atlas kiest OpenAPI-versie en hulpmiddel |  |
| ASM-52 | controles op het OpenAPI-bestand |  |
| ASM-53 | plek van bestand en leesbare versie |  |
| ASM-54 | herkomst van de korte naam |  |
| ASM-55 | waar de korte naam komt |  |

## Open vragen (OPEN)

| Code | Korte naam | Stand |
| --- | --- | --- |
| OPEN-01 | opdracht rechtstreeks bij Socrates |  |
| OPEN-02 | laatste woord bij technisch bezwaar |  |
| OPEN-03 | wanneer de uitbreiding start |  |
| OPEN-04 | wie project en repository aanmaakt |  |
| OPEN-05 | koppeling van skills aan Atlas |  |
| OPEN-06 | architectuur en database vóór backlog |  |
| OPEN-07 | uitwerking zonder tech lead |  |
| OPEN-08 | welke eisen tot de kern horen |  |
| OPEN-09 | termijn voor Carlo's akkoord |  |
| OPEN-10 | mechanisme voor Carlo's akkoord |  |
| OPEN-11 | proefrun van de skills |  |
| OPEN-12 | eigenaar van GLOSSARY.md |  |
| OPEN-13 | drempel voor aparte agent naast Atlas |  |
| OPEN-14 | plek van design systeem en ontwerpen |  |
| OPEN-15 | mogen agents een project aanmaken |  |

## Wijzigingen (CHG)

| Code | Korte naam | Stand |
| --- | --- | --- |
| CHG-001 | eerste versie organisatieanalyse |  |
| CHG-002 | feitencheck door de agents |  |
| CHG-003 | eerste tech-leadbesluiten van Carlo verwerkt |  |
| CHG-004 | procesmodellen uitgewerkt, ronde 2 |  |
| CHG-005 | use cases en database besloten |  |
| CHG-006 | Atlas voert tech-leadtaken uit |  |
| CHG-007 | geen rol tech lead verwerkt |  |
| CHG-008 | rollen- en skillmodel, ronde 3 |  |
| CHG-009 | feitencheck van ronde 3 |  |
| CHG-010 | eindontwerp: pagina en uitbreidingsgids |  |
| CHG-011 | keuze uit de voorstellen verwerkt |  |
| CHG-012 | eindontwerp bijgewerkt naar model 0.8 |  |
| CHG-013 | moment van vraag naar volgende wens |  |
| CHG-014 | eindontwerp bijgewerkt naar model 0.9 |  |
| CHG-015 | ontwerp-eerst en architectuurprofielen toegevoegd |  |
| CHG-016 | skills bij naam, niet nummer |  |
| CHG-017 | weergaven van model 0.10 |  |
| CHG-018 | gaten in register 0.10 hersteld |  |
| CHG-019 | antwoorden op open vragen verwerkt |  |
| CHG-020 | weergaven van model 0.11 |  |
| CHG-021 | gaten in model 0.11 hersteld |  |
| CHG-022 | grill-sessies toegevoegd |  |
| CHG-023 | OpenAPI voor het bouwcontract |  |
| CHG-024 | codes met een korte naam |  |

## Plekken waar Paperclip niet netjes past (M)

| Code | Korte naam | Stand |
| --- | --- | --- |
| M-1 | rondes en afkeuringen tellen |  |
| M-2 | epics in Paperclip |  |
| M-3 | eindpunt backlog gereed |  |
| M-4 | flowcheck en herinnering |  |
| M-5 | geen reactie van Carlo |  |
| M-6 | vraag tussen agents |  |
| M-7 | stoppen van een proces |  |
| M-8 | Atlas leest eigen werk mee | vervallen |
| M-9 | akkoord na toets van Atlas | vervallen |
| M-10 | taken toetsen tegen werkpakketten |  |
| M-11 | ontwerp in een designtool |  |
| M-12 | uitbreidingslijst in Paperclip |  |
| M-13 | ontwerp van Carlo zelf |  |
| M-14 | project aanmaken in Paperclip |  |
| M-15 | rondes zonder voortgang tellen |  |
| M-16 | contextverslag bij meer grill-sessies |  |
| M-17 | rondes op hetzelfde issue |  |
