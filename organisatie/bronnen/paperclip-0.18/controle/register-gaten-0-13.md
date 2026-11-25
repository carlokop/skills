# Gaten in model 0.13 (ter informatie)

| | |
| --- | --- |
| Status | **Herstel goedgekeurd (2026-10-31, Carlo, kaart `ea488144`)**: deze lijst wordt uitgewerkt als **CHG-026** in concept 0.14 (`v014-`documenten). Het goedgekeurde model 0.13 is niet aangepast; dat gebeurt pas na je akkoord op 0.14. Gevonden bij het bijwerken van de weergaven naar model 0.13 (CHG-025 – weergaven van model 0.13). |
| Bron | meldingen van de agents die de weergaven en de pagina bijwerkten (A: organisatie en procescatalogus; B: skillmatrices; C: verantwoordelijkheden; D: skill-specificaties en profiel Atlas; E: pagina 0.6) en van de controles (`controle-chg025`, `controle-pagina-0-6`) |
| Voorstel | Herstel als nieuwe CHG in model 0.14, met modelcontrole en jouw akkoord, net als CHG-018 en CHG-021. Groep A is tekst en administratie; groep B vraagt een keuze van jou. Groep C is ter informatie. |

**Wat de codes betekenen** (B-18 – codes met een korte naam): PRC = proces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B / TL-V = jouw besluit · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · M = plek waar Paperclip niet netjes past. De volledige lijst staat in `codes-en-namen`.

## A. Tekst en administratie (geen inhoudelijke keuze)

| # | Waar | Wat er staat | Wat het moet zijn |
| --- | --- | --- | --- |
| A-1 | register, ASM-36 (aanname over de skills van Atlas) | "`to-tickets` blijft, want het model gebruikt hem" | ASM-44 (welke skills Atlas houdt, bevestigd) zegt: geen stap gebruikt hem, "beschikbaar, niet vereist". De weergaven volgen ASM-44. Alleen die zin in ASM-36 aanpassen. |
| A-2 | register, ROL-04 (Atlas), veld `uit` | "bouwcontract (API-contracten, of bij P1 het templatecontract)", zonder OpenAPI | aanvullen met het OpenAPI-bestand en de leesbare versie (B-17), zoals ROL-01, ACT-01.17, ACT-02.8 en GOV-06 al doen |
| A-3 | register | CHG-025 (weergaven van model 0.13) staat niet in het register (B-19 – model 0.13 goedgekeurd staat er wel) | opnemen in het register |
| A-4 | register, sectie `skills`, veld `dekking` (`controle-chg025`, K25-02) | bij `uml-domain-modelling`, `uml-sequence-diagrams`, `uml-class-diagram`, `architect-database`, `architect-implementation-plan` en `vragen-en-akkoordrondes` noemt de dekking minder stappen dan de koppelingen (onder meer ACT-02.6, ACT-02.7, ACT-01.18, ACT-02.9, ACT-05.1, ACT-05.3) | de stappen uit de koppelingen ook in de dekking zetten |
| A-5 | register, `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice` | de verwijzing naar `vragen-en-akkoordrondes` (B-15, `v012-voorstel` §9) staat alleen bij die gedeelde skill, niet bij deze drie | één zin per skill |
| A-6 | register, ACT-02.6 (technisch ontwerp bijwerken) | geen C (geraadpleegd), terwijl GS14 een grill-sessie met jou is | ROL-01 als C, zoals bij ACT-01.3 (GS1) en ACT-02.3 (GS9) |
| A-7 | register, ACT-01.20 en ACT-02.53 (poortcontrole vóór de taken) | de controle op de revisie van het OpenAPI-bestand staat alleen in ASM-52 en bij GOV-06 | één regel in de koppeling van beide stappen |
| A-8 | register, ASM-42 en `prc-04` | ASM-42: het contextverslag staat op het issue waarop de stap gebeurt; PRC-04: "op het eigen issue van de vrager". Bij de toets is dat hetzelfde issue. | één formulering kiezen |
| A-9 | profiel Atlas, §6 | `complain` en `suggestion-box` zijn bij Atlas gekoppeld (configuratie), maar staan niet in het register | opnemen in het register, of de regel in het profiel schrappen |
| A-10 | de legenda in de weergaven | mist K (punt uit de modelcontrole) en lokale codes zoals GK-1 en V7, die in oudere tekst nog voorkomen; zegt "de eerste keer per sectie", terwijl de naam per alinea, lijstpunt of tabelrij staat (`controle-chg025`, K25-06) | legenda gelijktrekken met die van het register |
| A-11 | register, ASM-40 en ASM-41 (waar grill-sessies komen; geen sessie zonder open punten) | de bevestiging (B-16, kaart `a5523ebd`) staat alleen in het veld `stand`, niet in het veld `bevestigd` zoals bij ASM-42 t/m ASM-55 | ook het veld `bevestigd` invullen |
| A-12 | uitbreidingsgids 0.7, §6 (eerstvolgende vrije ID's); register, OPEN-10, veld `stand_0_11` | §6 noemt CHG-025 als eerstvolgende vrije wijziging; OPEN-10 heeft nog de tussenstand van 0.11 (`controle-pagina-0-6`, P6-07 en P6-08) | CHG-025 is nu in gebruik (weergaven van model 0.13 en pagina 0.6), de volgende is CHG-026; `stand_0_11` weghalen |

## B. Punten die een keuze van jou vragen

| # | Wat | Mijn voorstel |
| --- | --- | --- |
| B-1 | **Wat Dr. Evil doet als de controle op het OpenAPI-bestand faalt** (ASM-52: het bestand is na je akkoord veranderd zonder nieuwe leesbare versie). Dat staat nergens. In de weergave staat het als "afgeleid, nog niet besloten": geen taken maken en het melden aan Atlas. | Vastleggen zoals afgeleid: Dr. Evil maakt geen taken, meldt het aan Atlas, en de slice gaat opnieuw langs GOV-06 (akkoord bouwcontract per slice). Komt mee in het pakket voor Dr. Evil (PRC-08). |
| B-2 | **Inhoudelijke tweede controle op het OpenAPI-bestand.** Atlas controleert zijn eigen bestand (zelfcontrole); Dr. Evil controleert alleen of de revisie klopt, niet de inhoud. Jij keurt de leesbare versie goed, niet het bestand zelf. | Zo laten: de leesbare versie wordt uit het bestand gemaakt, dus wat jij goedkeurt is wat erin staat. Een tweede inhoudelijke controle hoort bij FND-022 (geen tweede lezer voor Atlas) en PRP-018 (aparte agent als daar aanleiding voor is). |
| B-3 | **Controleur bij het contextverslag** (ACT-04.55). Het register geeft ACT-04.55 een controleur (de ontvanger bevestigt, ACT-04.56). Elders geldt dat subprocessen geen aparte controleur nodig hebben. | ACT-04.55 als uitzondering vastleggen: de bevestiging door de ontvanger is de controle. |
| B-4 | **Wie beslist bij elk beslispunt.** Alleen G-02.8 (loopt er al een uitbreiding?) heeft een veld `beslisser`. Bij de andere beslispunten leidt de weergave het af uit de stap ervoor. | Bij elk beslispunt een veld `beslisser`, afgeleid uit de stap ervoor; waar dat niet kan, leg ik het je voor. |

## C. Ter informatie

- Het voorbeeld van een grill-sessie in `skill-specificaties` (`vragen-en-akkoordrondes`) is een verzonnen illustratie, net als de andere voorbeelden in dat document.
