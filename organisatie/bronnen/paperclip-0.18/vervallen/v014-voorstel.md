> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.14: de gaten in model 0.13 hersteld

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-31, Carlo, kaart `e9c7f866`)**, alle 5 onderdelen van de kaart goedgekeurd: CHG-026 (gaten in model 0.13 hersteld) en de aannames ASM-56 t/m ASM-59; besluit **B-20** (model 0.14 goedgekeurd). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register`, `prc-04` en `uitbreidingsgids`; zie CHG-026 in `wijzigingen`. Vóór de goedkeuring: **Concept, ter goedkeuring** (versie 0.14, 2026-10-31), CHG-026 (gaten in model 0.13 hersteld). **Tot je dit goedkeurt, geldt model 0.13** (Goedgekeurd, 2026-10-31, Carlo, kaart `226c7ce7`). |
| Aanleiding | Je keurde op de kaart `ea488144` (2026-10-31) het herstel goed van de gaten in [register-gaten-0-13](/WEB/issues/WEB-19#document-register-gaten-0-13), als CHG-026 in model 0.14, net als CHG-021 bij model 0.11. |
| Uitwerking | [v014-register](/WEB/issues/WEB-19#document-v014-register) (de bron), [v014-prc-04](/WEB/issues/WEB-19#document-v014-prc-04) (één zin), [v014-uitbreidingsgids](/WEB/issues/WEB-19#document-v014-uitbreidingsgids) 0.8 (§6), [wijzigingen](/WEB/issues/WEB-19#document-wijzigingen) (CHG-026) |

**Wat de codes betekenen** (B-18 – codes met een korte naam): PRC = proces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B / TL-V = jouw besluit · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · M = plek waar Paperclip niet netjes past · K = punt uit de modelcontrole · A-1, B-2 enz. = een gat uit de lijst `register-gaten-0-13` (groep A, B of C), niet te verwarren met je besluiten B-01 t/m B-19. De volledige lijst staat in `codes-en-namen`.

## Kort

1. **Groep A (tekst en administratie) is hersteld** in het register, op één punt na (A-10, de legenda in de overzichten; zie §1).
2. **De vier punten van groep B staan als aannames op de kaart** (ASM-56 t/m ASM-59), elk met mijn voorstel uit de lijst. Keur je er een af, schrijf dan wat je wel wilt.
3. **Wat niet verandert:** stappen, akkoorden, routes en diagrammen. De beslispunten krijgen alleen een beslisser erbij (ASM-59). UC1 houdt 4 akkoorden. De skillstatus blijft 17 aanwezig, 23 gedeeltelijk, 35 ontbreekt, 9 n.v.t. (84 stappen). Er komt geen nieuw besluit, voorstel of nieuwe stap bij. Het register telt wel 41 skills in plaats van 39, door de twee platformskills van A-9.

## 1. Groep A: wat ik heb hersteld

| Gat | Wat er stond | Wat het nu is | Waar |
| --- | --- | --- | --- |
| A-1 | ASM-36 (skills van Atlas volgens de matrix) zei: "`to-tickets` blijft, want het model gebruikt hem" | Gelijk aan ASM-44 (to-tickets niet vereist): geen stap gebruikt `to-tickets`; of hij blijft, legt Dr. Evil voor | register, ASM-36 |
| A-2 | ROL-04 (systeemarchitect: Atlas) noemde bij het bouwcontract geen OpenAPI | "API-contracten als OpenAPI-bestand met een leesbare versie die eruit wordt gemaakt; bij P1 het templatecontract als tabel" (B-17 – OpenAPI voor het bouwcontract) | register, ROL-04 `uit` |
| A-3 | CHG-025 (weergaven van model 0.13) stond niet in het register | Opgenomen bij de goedkeuringen in `meta` (kaart `ea488144`) en in `korte_namen` | register, `meta` |
| A-4 | Bij zes skills noemde de dekking minder stappen dan de koppelingen | De stappen staan er nu bij: `uml-domain-modelling` en `architect-database` (ACT-02.6), `uml-sequence-diagrams` en `uml-class-diagram` (ACT-02.6, ACT-02.7), `architect-implementation-plan` (ACT-01.18, ACT-02.7, ACT-02.9) en `vragen-en-akkoordrondes` (ACT-05.1, ACT-05.3). Bovenaan de koppelingen staat de regel: een dekkingsregel zonder stappen geldt voor alle koppelingen van die skill. Bij andere skills heb ik dit niet nagelopen | register, `skills` |
| A-5 | De verwijzing naar `vragen-en-akkoordrondes` (gedeelde skill voor grill-sessies) stond alleen bij die skill zelf | Ook bij `requirements-analysis` (GS1, GS9), `uml-use-cases` (GS2, GS10) en `architect-architecture-choice` (GS4, GS14) | register, `skills` |
| A-6 | ACT-02.6 (globaal ontwerp of profiel bijwerken) had geen C, terwijl GS14 een grill-sessie met jou is | Jij (ROL-01) bent C, alleen bij GS14, zoals bij ACT-01.3 (GS1) en ACT-02.3 (GS9) | register, koppelingen |
| A-7 | De controle op de revisie van het OpenAPI-bestand stond alleen in ASM-52 en bij GOV-06 (akkoord bouwcontract per slice) | Ook bij ACT-01.20 (epics en taken van slice 1 maken) en ACT-02.53 (vaste controles uitvoeren), met wat er gebeurt als die faalt (ASM-56) | register, koppelingen |
| A-8 | ASM-42 en PRC-04 zeiden de plek van het contextverslag in andere woorden | In ACT-04.55 (contextverslag opstellen) en PRC-04 nu dezelfde woorden als ASM-42 (inhoud van het contextverslag) en de Paperclip-mapping: "op het issue waarop de vrager zijn stap doet; bij de toets het toets-issue". Inhoudelijk was het al hetzelfde | register ACT-04.55; PRC-04 |
| A-9 | `complain` en `suggestion-box` zijn bij Atlas gekoppeld, maar stonden niet in het register | Opgenomen als platformskills. Ze zijn gekoppeld aan Dr. Evil, Socrates en Atlas (feit: vandaag nagekeken in de Paperclip-API). Geen stap gebruikt ze: beschikbaar, niet vereist, zoals `to-tickets`. Ze tellen niet mee in de skillstatus. **Niet** opgenomen: drie andere skills die bij Atlas gekoppeld zijn maar die het model niet gebruikt (`para-memory-files`, `first-task`, `improve-codebase-architecture`). Of die blijven, legt Dr. Evil voor in het pakket (ASM-36) | register, `skills` en *Skills in het kort* |
| A-10 | De legenda in de overzichten mist K en de lokale codes, en zegt "de eerste keer per sectie" | **Nog niet hersteld.** De legenda in het register is al goed en is de norm. De overzichten zijn weergaven; die werk ik na je akkoord bij (zie §5) | — |
| A-11 | Bij ASM-40 en ASM-41 (waar grill-sessies komen; geen sessie zonder open punten) stond de bevestiging alleen in het veld `stand` | Ook in het veld `bevestigd` (kaart `a5523ebd`, B-16) | register, aannames |
| A-12 | De gids noemde CHG-025 als eerstvolgende vrije wijziging; OPEN-10 had nog de tussenstand van 0.11 | Gids §6: eerstvolgende is CHG-027 en ASM-60. Bij OPEN-10 zijn de oude tussenstanden van 0.4 en 0.11 weg; het antwoord (B-14) blijft | gids 0.8; register, OPEN-10 |

## 2. Groep B: vier keuzes, elk als aanname op de kaart

**ASM-56 (revisiecontrole OpenAPI faalt), gat B-1.** Stel: na je akkoord bij GOV-06 is het OpenAPI-bestand toch veranderd, zonder nieuwe leesbare versie. Dr. Evil ziet dat bij zijn controle vóór de taken (ASM-52). Mijn voorstel:
- Dr. Evil maakt **geen taken** voor die slice en meldt het aan Atlas op het issue van het bouwcontract.
- Atlas maakt uit het huidige bestand een nieuwe leesbare versie, en de slice gaat **altijd opnieuw langs GOV-06**. Ook als Atlas de wijziging terugdraait, want dat geeft een nieuwe revisie. Zo geldt je akkoord nooit voor iets anders dan wat je zag.
- Gebeurt het bij dezelfde slice een tweede keer, dan legt Dr. Evil het aan jou voor (GOV-08, escalatie). Zo kan het niet eindeloos rondgaan.
- De aanpassing van `quality-gates` (de poortcontrole van Dr. Evil) gaat mee in het pakket voor Dr. Evil (PRC-08, organisatie aanpassen).

**ASM-57 (geen tweede controle op OpenAPI), gat B-2.** Atlas controleert zijn eigen bestand; Dr. Evil controleert alleen of de revisie klopt. Mijn voorstel: **zo laten.** De leesbare versie wordt uit het bestand gemaakt (B-17), dus wat jij goedkeurt, is wat erin staat. Dat niemand anders het werk van Atlas leest, is een bekend restrisico (FND-017 – Atlas beoordeelt eigen ontwerp zelf; FND-022 – opdeling, plan en taken zonder controle). Je keurde PRP-018 (tech-leadtaken bij aparte agent later) goed als signaal: Dr. Evil meldt het als er aanleiding is. Een aparte agent komt er pas na een nieuw besluit van jou.

**ASM-58 (controleur bij het contextverslag), gat B-3.** Bij ACT-04.55 (contextverslag opstellen) staat de ontvanger als controleur. Mijn voorstel: **zo laten en vastleggen dat het bewust is.** De bevestiging door de ontvanger (ACT-04.56) is precies de controle dat het verslag klopt. Er komt geen aparte controleur bij.

**ASM-59 (beslisser bij elk beslispunt), gat B-4.** Alleen G-02.8 (loopt er al een uitbreiding?) had een beslisser. Nu hebben alle 21 beslispunten er een, afgeleid uit de stap ervoor:

| Beslispunt | Beslisser |
| --- | --- |
| G-01.1 (bij wie komt de opdracht binnen?) | jij: je kiest aan wie je de opdracht geeft. In het diagram staat dit punt bij Dr. Evil; dat is de plek waar het wordt uitgevoerd, niet wie beslist |
| G-01.4, G-02.5 (toets use cases en brieven: aanpassing nodig?) | Atlas (zijn toetsresultaat) |
| G-01.5, G-02.6 (toets van de taken: aanpassing nodig?) | Atlas (zijn toetsresultaat) |
| G-01.6 (welk profiel is goedgekeurd?) | jij, bij GOV-15 (akkoord richting); Atlas stelt het profiel voor. In het diagram staat het punt bij Atlas, om dezelfde reden |
| G-01.7, G-01.8, G-01.9 (parallel splitsen of samenvoegen) | n.v.t.: er wordt niets gekozen |
| G-02.1 (is de volgende wens duidelijk?), G-02.2 (zijn eisen, use cases en brieven al goedgekeurd?) | Dr. Evil (bij G-02.2 aan de status van de documenten) |
| G-02.3 (raakt de wens het globale ontwerp of het profiel?) | Atlas, over zijn eigen ontwerp (FND-017 – Atlas beslist over eigen ontwerp) |
| G-02.7 (ontwerp nodig?) | **jij**, met het ontwerpniveau dat je bij GOV-02 goedkeurt. Socrates stelt het per pagina voor (ACT-02.15), Atlas toetst het |
| G-02.8 (loopt er al een uitbreiding?) | Dr. Evil (had het al, ASM-47) |
| G-04.1 (vraagt het antwoord om een wijziging van iets goedgekeurds, of een productkeuze?) | **de ontvanger** van de vraag, bij zijn antwoord, volgens de beslisregels van B-15 (V3) |
| G-04.2 (nog open punten?), G-04.51 (2 rondes zonder voortgang?) | de vrager |
| G-04.52 (bevestigt de ontvanger het contextverslag?) | de ontvanger |
| G-05.1 (3e afkeuring?) | de producent |
| G-06.1 (is er een eigenaar die de blokkade oplost?) | de eigenaar van de taak |
| G-06.2 (kan Dr. Evil de blokkade zelf oplossen?) | Dr. Evil |

Twee daarvan zijn meer een keuze dan een afleiding, en die wil ik je expliciet voorleggen: **G-02.7** en **G-04.1** (vetgedrukt). Bij G-02.7 is het hetzelfde als wat het overzicht van de verantwoordelijkheden nu al zegt ("volgt uit het ontwerpniveau dat jij bij GOV-02 goedkeurde"). De rest volgt uit wie de stap ervoor doet.

## 3. Groep C

Het voorbeeld van een grill-sessie in `skill-specificaties` is een verzonnen illustratie, net als de andere voorbeelden daar. Er verandert niets.

## 4. Controle

Een aparte agent deed de modelcontrole ([v014-controle](/WEB/issues/WEB-19#document-v014-controle)): **"kan worden ingediend"**, zonder blokkerende punten. Het register is geldig, de telling klopt, en elke wijziging hoort bij een gat uit de lijst. Er waren 4 waarschuwingen en 7 opmerkingen; die heb ik allemaal hersteld. De belangrijkste:
- ASM-56 stond in drie net verschillende versies. Nu is het één tekst: altijd opnieuw langs GOV-06, en de tweede keer naar jou.
- Ik schreef dat PRP-018 een aparte agent belooft. Dat klopt niet: je keurde het goed als signaal.
- Bij A-9 beloofde ik meer dan ik deed; nu staat er eerlijk welke skills wel en niet zijn opgenomen.
- In §5 ontbraken een paar overzichten die na je akkoord ook mee moeten.

Na het herstel heeft geen aparte agent opnieuw gecontroleerd. Wel heb ik het register opnieuw gemaakt en nagelopen dat het geldig is en dat de telling klopt.

## 5. Wat daarna gebeurt

1. Na je akkoord zet ik 0.14 in de geldende documenten (register, PRC-04, uitbreidingsgids 0.8), zoals bij 0.13.
2. **De overzichten** die hierdoor veranderen, werk ik daarna bij:
   - `codes-en-namen`: zes codes erbij (CHG-025, CHG-026, ASM-56 t/m ASM-59);
   - de RACI (`verantwoordelijkheden`): de beslissers, ACT-02.6, ACT-04.55, ACT-01.20 en ACT-02.53;
   - `skill-specificaties`: `quality-gates` (ASM-56) en de dekking;
   - `capabilities-en-skills` en `organisatie`: de dekking en het aantal skills (41);
   - het profiel van Atlas: OpenAPI bij zijn uitvoer en de platformskills;
   - overal de legenda (A-10).

   PRC-01 en PRC-02 blijven ongewijzigd: de controle op de revisie en wat er gebeurt als die faalt (ASM-56), staan in het register bij de koppelingen, niet als aparte stap of route in het diagram. Daarna volgen een controle en een kaart. De pagina krijgt dan ook een nieuwe versie (0.7), met de beslissers en de korte namen van de nieuwe codes; de verschillen zijn klein.
3. Het pakket voor Dr. Evil (PRC-08, organisatie aanpassen) draag ik pas over als jij dat zegt. Aan agents, instructies, skills en routines verandert niets.
