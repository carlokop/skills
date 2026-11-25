# Modelcontrole ronde 1, wijziging versie 0.2 (organisatieanalyse)

| | |
| --- | --- |
| Datum | 2026-10-28 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`); alleen gelezen, geen modelbestand gewijzigd |
| Scope | `register`, `ORGANISATIE`, `bevindingen`, `voorstellen`, `proces-catalogus`, `wijzigingen` in versie 0.2 (Concept), vergeleken met de goedgekeurde versie 0.1 (map `_v01`) |
| Wijzigingen | CHG-002 (feitencheck WEB-20/WEB-21) en CHG-003 (besluiten TL-V1 t/m TL-V5) |
| Bronnen | comments op WEB-20 (id `652050dd`), comments op WEB-21 (id `4e1e4738`), document `rolanalyse-techlead` v0.2 op WEB-17 (§2, §10), antwoordkaart `d58a1a60` (WEB-17), kaart GK-1 `553e51b3` (WEB-19), revisies van de zes documenten op WEB-19, plan op WEB-19 (B-05) |

## Oordeel: terug naar de maker

Eén blokkerende bevinding (D-01) en acht waarschuwingen (D-02 t/m D-09). De wijziging is inhoudelijk goed gelukt: alle correcties uit de feitencheck zijn verwerkt (op één plek na), TL-V1 t/m TL-V5 staan als Besloten en A-TL-01/P-TL-01 zijn niet als besluit gepresenteerd, de goedgekeurde versie 0.1 is niet overschreven, en de nieuwe ID's zijn juist. D-01 is een restant van een correctie die de feitencheck zelf noemde; het herstel is één zin. Na herstel van D-01 kan het model worden ingediend. De waarschuwingen mogen mee in dezelfde ronde of bij de volgende wijziging.

### Blokkerend

- **D-01**: de gecorrigeerde zin over hoe Dr. Evil wordt gewekt staat nog in de oude, onjuiste vorm in `ORGANISATIE.md` §6(b).

### Waarschuwingen

- **D-02**: `OPEN-08` ontbreekt bij `open` van PRC-02 (register en proces-catalogus), terwijl FND-016 ook PRC-02 raakt.
- **D-03**: A-TL-01 (aanname) wordt in `voorstellen` zonder label aangehaald en staat niet in het register.
- **D-04**: de secties PRP-003, PRP-007 en PRP-009 zeggen nog iets dat botst met TL-V2/TL-V4, zonder markering in de sectie zelf.
- **D-05**: de fasering uit TL-V1 (taken voor developers pas als er developers zijn) staat niet in het model.
- **D-06**: "globaal ontwerp" en "kernontwerp" lopen door elkaar, en "in principe" uit TL-V5 valt weg.
- **D-07**: wijzigingshistorie: CHG-002 "na de goedkeuring van 0.1" klopt niet qua volgorde, CHG-003 noemt "§1–§7" te ruim, gevolgen voor agents en skills ontbreken.
- **D-08**: "voorgelegd samen met GK-2": GK-2 is volgens B-05 de goedkeuring van de procesmodellen, niet van ronde 1.
- **D-09**: het register kent een afwijkend veld `in` alleen bij ROL-04; de kolommen In/Uit van ROL-01, 02 en 05 in `ORGANISATIE` zijn niet uit het register te herleiden.

## Resultaten per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| ID's uniek, volgens schema, niet hergebruikt | voldoet | YAML geladen met js-yaml: geen fouten, 37 ID's in het register (D1–D3, ROL-01–05, AGT-01–05, PRC-01–08, ASM-01–08, OPEN-01–08), geen dubbelen. FND-001–016 (16), PRP-001–015 (15), CHG-001–003 volgen aaneensluitend. FND-016, PRP-015 en OPEN-08 zijn nieuw; FND-001–015, PRP-001–014, ASM-01–08, OPEN-01–07 zijn qua inhoud ongewijzigd, behalve de bedoelde regels (diff met `_v01`). |
| Elke verwijzing wijst naar een bestaand element | voldoet | Script over alle zes bestanden: elk PRC-, ROL-, AGT-, ASM-, OPEN-, FND-, PRP-, CHG-ID bestaat. FND-016 → PRP-015, OPEN-08, PRC-01, PRC-02; PRP-015 → FND-016; PRC-01 en PRC-02 → FND-016. Externe kenmerken (B-, TL-V, A-TL, P-TL, GK-) vallen buiten het schema (zoals bij de vorige controle, C-11). Wel een gat: D-02, D-03. |
| Elk procesmodel heeft status en versie | voldoet | PRC-01/02: `versie: "0.2"`, `status: Concept`; PRC-03–06 `0.1` Concept; PRC-07/08 context. Catalogus "Concept 0.2" komt overeen. |
| Goedgekeurde versie 0.1 niet stilzwijgend overschreven | voldoet | Revisie 1 van alle zes documenten op WEB-19 is byte-voor-byte gelijk aan `_v01/` (gecontroleerd per document). Revisie 2 (0.2) is nieuw. Alle zes bestanden vermelden "Goedgekeurde versie: 0.1 ... revisie 1" en "Concept (versie 0.2)". Kaart GK-1 `553e51b3` staat op WEB-19 op `accepted` (2026-10-27T20:59:07Z). `wijzigingen.md` bevat CHG-001 ongewijzigd (gelijk aan `_v01`) plus CHG-002 en CHG-003. |
| Status en versie 0.1 (Goedgekeurd) en 0.2 (Concept) juist vermeld | voldoet | Eén afwijking in de formulering: D-08. |
| Lijst "geraakt" klopt | voldoet met kanttekening | CHG-003 noemt `register`, `organisatie`, `bevindingen`, `voorstellen`, `proces-catalogus`: dat zijn precies de gewijzigde bestanden. CHG-002 noemt `register` (ROL-04), `organisatie` §3–§5, `bevindingen` (FND-013); dat klopt (§4 valt binnen §3–§5). Kanttekeningen: D-07. |
| Correcties feitencheck WEB-20 verwerkt | voldoet niet | FND-013 en `ORGANISATIE` §4 zijn aangepast (`wakeOnDemand`, 14 skills = 12 plus `complain` en `suggestion-box`). Maar §6(b) herhaalt de oude zin: D-01. |
| Correcties feitencheck WEB-21 verwerkt, juist en niet meer dan dat | voldoet | Zie de tabel "Feitencheck" hieronder. |
| TL-V1 t/m TL-V5 juist als Besloten; aannames/voorstellen niet als besluit | voldoet met kanttekeningen | Zie de tabel "TL-besluiten" hieronder. Kanttekeningen: D-03, D-05, D-06. |
| Overzichten komen overeen met het register | voldoet niet | Catalogus en `ORGANISATIE` volgen het register voor rollen, PRC-01/02, OPEN-02/03/06/07 en de stand. Afwijkingen: D-02, D-06, D-09. |
| Geen tegenstrijdigheden door de wijziging (PRP-004 voor de kern, UC2 zonder akkoord) | voldoet met kanttekeningen | PRP-004 is bij de kern overal als vervallen aangemerkt (`voorstellen` stand-tabel, `ORGANISATIE` §6(b) en §6(c) punt 3 doorgehaald, `bevindingen` FND-002/006). UC2-akkoord is bijgewerkt in §6(b), §6(c) punt 6, FND-007 en de stand-tabel. Restant: D-04. |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet met kanttekening | OPEN-02 en OPEN-06 zeggen "stelt voor" en "Dat lees ik als ja" en blijven open; OPEN-08 noemt P-TL-01 expliciet een "Voorstel". Kanttekening: D-03. |
| Huidige en gewenste situatie gescheiden | voldoet met kanttekening | §5 behoudt de scheiding Feit/as-is en Besloten/to-be; de vier WEB-21-rijen zijn Feit/as-is. In de ROL-04-regel staan as-is en een to-be besluit (TL-V5) naast elkaar; dat is gelabeld "Besloten / Feit" maar in het register niet per onderdeel: zie D-09. |
| Wijzigingshistorie bijgewerkt | voldoet met kanttekening | CHG-002 en CHG-003 aanwezig, met datum, versie, wijziging, door, geraakt. Zie D-07. |
| Eerder goedgekeurd model: nieuwe versie met status Concept | voldoet | 0.2 is Concept, 0.1 blijft "gelden tot 0.2 is goedgekeurd". |
| Verwijzingen naar buiten (agents, skills) | niet te beoordelen | Er zijn geen nieuwe agents of skills bijgekomen. AGT-04/ROL-05 blijft "bestaat nog niet". De skillnamen die in CHG-002 uit WEB-20/WEB-21 komen (`complain`, `suggestion-box`, `architect-modeling`) zijn niet tegen de AGENTS.md of de skilllijst zelf getoetst; ik heb alleen de comments gelezen. |
| `.bpmn`-bestand heeft validatieresultaat | niet van toepassing | Er is geen `.bpmn`-bestand in deze ronde. |
| Procesmodel: doel, trigger, activiteiten, gateways, GOV-ID's, koppelingen capability/skill | niet van toepassing | Activiteiten, beslissingen, capabilities en skills volgen in ronde 2 en 3 (zoals bij de eerste controle). |

### Feitencheck WEB-20 / WEB-21 naast het model

| Punt uit de feitencheck | Verwerkt in 0.2 | Oordeel |
| --- | --- | --- |
| WEB-20: alle uitspraken over Dr. Evil juist, geen correcties | Geen inhoudelijke wijziging aan ROL-02/AGT-01; CHG-002 zegt "geen correcties" | juist |
| WEB-20: §4 "Alle 12 skills ... gekoppeld" preciezer (14: 12 plus `complain`, `suggestion-box`) | `ORGANISATIE` §4: "De 12 skills uit de rolanalyse zijn gekoppeld, plus `complain` en `suggestion-box`." | juist |
| WEB-20: FND-013 preciezer (`wakeOnDemand`, vermelding is geen opdracht) | `bevindingen` FND-013: "alleen op verzoek gewekt (`wakeOnDemand`): door een toegewezen issue of bijvoorbeeld een comment ... Een vermelding is volgens zijn instructies geen opdracht." Bewijs aangevuld met "feitencheck Dr. Evil (WEB-20)". Conclusie (geen vaste trigger) blijft. | juist in FND-013; niet doorgevoerd in `ORGANISATIE` §6(b): D-01 |
| WEB-21: ROL-04 ↔ ROL-03 Feit/as-is (via issue) | `ORGANISATIE` §5: "Vragen over eisen, via een issue ... Feit, as-is" | juist |
| WEB-21: ROL-04 → ROL-01 Feit/as-is (expliciet akkoord per fase) | `ORGANISATIE` §5: "Documenten ter goedkeuring, expliciet akkoord per fase ... Feit, as-is" | juist |
| WEB-21: overdracht ROL-04 → ROL-02 (voortgang, technisch bezwaar) toevoegen | `ORGANISATIE` §5: nieuwe rij, Feit, as-is | juist |
| WEB-21: overdracht ROL-04 → ROL-03 (technisch problematische eis) toevoegen | `ORGANISATIE` §5: nieuwe rij, Feit, as-is | juist |
| WEB-21: ROL-04 Uit aanvullen (implementatieplan, `GLOSSARY.md`, ADR's, `docs/architecture/STATUS.md`) | `ORGANISATIE` §3 en `register` ROL-04: alle vier genoemd | juist |
| WEB-21: ROL-04 In aanvullen (use cases met bedrijfsregels, verzoeken om implementatieplan) | `ORGANISATIE` §3 en `register` ROL-04 `in:`. De derde bron (afwijkingen die de code reviewer meldt) is terecht weggelaten, want buiten scope. | juist |
| WEB-21: nuance laatste woord (komen wij er niet uit, dan legt Dr. Evil het aan de gebruiker voor) | `register` ROL-04: "komen Atlas en Dr. Evil er niet uit, dan legt Dr. Evil het aan ROL-01 voor" | juist |
| WEB-21: FND-004 "ter info" (`first-task`, `to-spec`, ...): niet onjuist | FND-004 ongewijzigd; CHG-002 maakt er geen wijziging van | juist (niet meer dan gevraagd) |
| WEB-21: AGT-03, FND-001, FND-002, FND-004, ROL-02 → ROL-04 bevestigd | ongewijzigd gelaten | juist |
| "Geen nieuwe ID's" (CHG-002) | CHG-002 voegt geen ID's toe; de drie nieuwe ID's horen bij CHG-003 | juist |

### TL-besluiten naast het model

| Besluit (rolanalyse-techlead §2/§10 en antwoordkaart `d58a1a60`) | Weergave in 0.2 | Oordeel |
| --- | --- | --- |
| TL-V1: de rol komt er nu | `register` ROL-05 `opmerking` ("de rol komt er nu. De agent bestaat nog niet"), AGT-04 blijft to-be, OPEN-07 `stand`, FND-012 "deels beslist" | juist; fasering ontbreekt: D-05 |
| TL-V2: Carlo bepaalt de volgorde van de wensen, de tech lead de slices en hun technische volgorde | ROL-01, ROL-05, PRC-02 `aanleiding`, §5-rij "ROL-02 ↔ ROL-01 Welke wens komt als volgende", OPEN-03 `stand`, FND-007 | juist |
| TL-V3: Dr. Evil maakt de taken op basis van de werkpakketten van de tech lead | ROL-02, ROL-05, §5-rij ROL-05 → ROL-02, FND-003 "beslist: B-02, TL-V3", PRP-008 | juist |
| TL-V4: Carlo keurt alleen de API-contracten goed | ROL-01, §5-rij ROL-05 → ROL-01, PRC-01/02 `wijziging`, FND-014 "deels beslist", FND-005 | juist; D-04 voor de voorstelteksten |
| TL-V5: Atlas ontwerpt in principe alles voor de kern vooraf | ROL-04, ROL-05, FND-006 "beslist", FND-016, PRP-004 vervalt voor de kern, §6(c) punt 3 | juist; "in principe" en "globaal" zie D-06 |
| A-TL-01 (aanname) | Alleen genoemd in de stand-tabel van `voorstellen` (PRP-004) en als bron bij OPEN-08. Niet als besluit in register of overzichten. | geen besluit gemaakt van de aanname; label ontbreekt: D-03 |
| P-TL-01 (voorstel) | Uitgewerkt als PRP-015 (Voorstel) en genoemd in OPEN-08 als "Voorstel P-TL-01". Nergens als Besloten gelabeld. | juist |
| OPEN-02/OPEN-06 | Blijven open; de `stand` zegt "stelt voor" en "Dat lees ik als ja ... Vervalt bij goedkeuring van die rolanalyse." | juist (interpretatie is als zodanig gemarkeerd) |

## Bevindingen

### D-01 (blokkerend): gecorrigeerde zin over het wekken van Dr. Evil staat nog in de oude vorm in `ORGANISATIE.md` §6(b)

- **Bewijs:**
  - `ORGANISATIE.md`, §6(b), rij "Orchestrator te veel of te weinig?": "Dr. Evil heeft geen eigen ritme: zonder heartbeat en routines wordt hij alleen gewekt via een toegewezen issue, dus UC2 heeft geen vaste trigger (FND-013)."
  - `bevindingen.md`, FND-013 (0.2): "Hij wordt alleen op verzoek gewekt (`wakeOnDemand`): door een toegewezen issue of bijvoorbeeld een comment op een issue van hem. Een vermelding is volgens zijn instructies geen opdracht."
  - Bron: comment van Dr. Evil op WEB-20, "Kanttekening (geen fout)": "FND-013 zegt dat ik 'alleen gewekt word via een toegewezen issue'. Door `wakeOnDemand` word ik technisch ook gewekt door bijvoorbeeld een comment op een issue van mij ... Socrates kan de zin scherper maken."
  - `ORGANISATIE.md` ("Wat is er veranderd in 0.2") en CHG-002 zeggen dat deze zin is verbeterd.
- **Eis:** een correctie uit de feitencheck is op alle plekken verwerkt waar dezelfde uitspraak staat, en overzichten komen overeen met bevindingen en register. Nu spreken `ORGANISATIE` §6(b) en FND-013 elkaar tegen, in het document dat Carlo leest.
- **Herstel:** pas de zin in §6(b) aan, bijvoorbeeld: "zonder heartbeat en routines wordt hij alleen op verzoek gewekt (`wakeOnDemand`), dus UC2 heeft geen vaste trigger (FND-013)". Controleer met een zoekopdracht op "toegewezen issue" dat er geen andere plek met de oude formulering overblijft (bij mij: alleen die ene regel). De goedgekeurde versie 0.1 blijft ongemoeid.

### D-02 (waarschuwing): PRC-02 mist OPEN-08 bij `open`, terwijl FND-016 ook PRC-02 raakt

- **Bewijs:**
  - `bevindingen.md`, FND-016: Proces "PRC-01, PRC-02"; Voorstel "PRP-015, OPEN-08".
  - `register.md`, PRC-02: `risicos: "... grens kern en uitbreiding (FND-016)"` maar `open: [OPEN-02, OPEN-03]`. PRC-01 heeft wel `OPEN-08`.
  - `proces-catalogus.md`, rij PRC-02: Risico's "FND-013, 014, 016", Open "OPEN-02, 03".
  - OPEN-08 vraagt welke eisen tot de kern horen; dat geldt voor UC2 net zo goed (de tech lead ontwerpt wat buiten de kern valt).
- **Eis:** een open vraag staat bij elk proces waar de bevinding die ernaar verwijst staat; register en catalogus komen overeen.
- **Herstel:** voeg OPEN-08 toe aan `open` van PRC-02 in het register en aan de kolom Open van PRC-02 in `proces-catalogus`. Of schrap FND-016 bij de risico's van PRC-02 als de grens van de kern daar bewust niet speelt (en pas dan ook "Proces" bij FND-016 aan).

### D-03 (waarschuwing): A-TL-01 (aanname) wordt zonder label aangehaald en heeft geen ID in het register

- **Bewijs:**
  - `voorstellen.md`, stand-tabel, rij PRP-004: "Alleen buiten de kern blijft 'detail per slice' over, en dat is A-TL-01 in de rolanalyse van de tech lead."
  - `register.md`, OPEN-08 `bron`: "rolanalyse-techlead §10 (P-TL-01, A-TL-01)".
  - `rolanalyse-techlead` §10: "A-TL-01 ... Aanname"; "Uitwerking van TL-V5 (ter bevestiging met de goedkeuring van dit document)". Het register kent A-TL-01 niet bij `aannames` (ASM-01–08).
  - Volgens `bpmn-conventies` heeft elke aanname een ASM-ID in het register.
- **Eis:** aannames zijn als aanname gemarkeerd; wat nog niet is bevestigd leest niet als besluit.
- **Herstel:** schrijf in de PRP-004-rij "Aanname A-TL-01 (nog niet bevestigd)". Neem de aanname op in het register als ASM-09 (nieuw ID, geen hergebruik) met verwijzing naar A-TL-01 in de rolanalyse, of vermeld bij `bron` van OPEN-08 expliciet dat A-TL-01 een aanname is. Voeg zo nodig ASM-09 toe aan CHG-003 en `ORGANISATIE` §7 (ASM-01 t/m ASM-09).

### D-04 (waarschuwing): de secties van PRP-003, PRP-007 en PRP-009 zeggen nog iets dat botst met TL-V2/TL-V4, zonder markering in de sectie zelf

- **Bewijs:**
  - `voorstellen.md`, PRP-009, Wijziging: "Daar is geen akkoord van jou voor nodig." Maar TL-V4 (Besloten): Carlo keurt de API-contracten per slice goed. De stand-tabel zegt: "Deels beslist (TL-V4): Atlas leest de rest mee".
  - `voorstellen.md`, PRP-007, Wijziging: "UC2 houdt geen akkoord-poort ... De tech lead stelt de volgende slice voor vanaf de top." Stand-tabel: "UC2 heeft dus wél een akkoord"; TL-V2: Carlo kiest de wens.
  - `voorstellen.md`, PRP-004: de sectie is niet bijgewerkt en noemt niet dat zij voor de kern vervalt (alleen de stand-tabel bovenaan doet dat).
  - `voorstellen.md`, PRP-003, stand-tabel: "Dat dekt een deel van punt 3" maar ook "De variant telt drie akkoorden in UC1 plus de API-contracten". Dat is onduidelijk (drie of vier akkoorden, en wat dekt de API-goedkeuring?).
- **Eis:** een voorstel dat botst met een besluit is als zodanig herkenbaar waar het staat, niet alleen in een tabel bovenaan. Voorstellen blijven los van beslissingen (`bpmn-conventies`, "Soorten uitspraken").
- **Herstel:** zet onder de kop van PRP-004 "Vervalt voor de kern (TL-V5)"; voeg bij PRP-007 en PRP-009 een regel "Stand 0.2: ..." toe die het besluit noemt (PRP-009: "behalve de API-contracten, die keurt Carlo goed, TL-V4"). Maak de PRP-003-regel eenduidig (bijv. "vier akkoordmomenten in UC1, waarvan het vierde de API-contracten van slice 1 is" of "het derde akkoord omvat de API-contracten").

### D-05 (waarschuwing): de fasering uit TL-V1 staat niet in het model

- **Bewijs:**
  - `rolanalyse-techlead` §2: "TL-V1 | De rol komt er **nu**. TL-01 t/m TL-06 zijn meteen actief. TL-07 t/m TL-09 beginnen pas als er developers zijn." (TL-07 is "Implementatievragen van developers".) Antwoordkaart `d58a1a60`, optie "Nu": "De taken voor developers ... beginnen pas als er developers zijn."
  - `register.md`, ROL-05: "Beantwoordt implementatievragen." zonder voorbehoud; `ORGANISATIE.md` §3 ROL-05 Uit: "antwoorden op implementatievragen".
  - `register.md`, ASM-03: "Vragen van developers vallen buiten de scope." CHG-003 noemt van TL-V1 alleen "de rol komt er nu".
- **Eis:** een besluit is volledig en consistent weergegeven. Nu leest ROL-05 alsof implementatievragen van developers direct bij de rol horen, terwijl ze buiten de scope vallen en pas starten met de developers.
- **Herstel:** voeg bij ROL-05 in het register (en in §3 Uit) toe: "implementatievragen van developers pas zodra er developers zijn (TL-V1, buiten de scope van dit model)", en noem dat in CHG-003 bij TL-V1.

### D-06 (waarschuwing): "globaal ontwerp" en "kernontwerp" lopen door elkaar; "in principe" uit TL-V5 valt weg

- **Bewijs:**
  - `proces-catalogus.md`, PRC-01 Output: "kernontwerp (TL-V5)"; `ORGANISATIE.md` §3 ROL-05 In: "Kernontwerp van Atlas".
  - `register.md`, PRC-01 `doel`: "... een globaal ontwerp ..." en `output`: "... globaal ontwerp, ontwerp eerste slice ..."; ROL-04 `doel` "Globaal technisch ontwerp"; PRC-02 `input` en ASM-07: "globaal ontwerp".
  - TL-V5 maakt van het ontwerp van Atlas een volledig ontwerp voor de kern (alle sequentiediagrammen, volledig klassendiagram, `rolanalyse-techlead` §6). "Globaal" suggereert juist de lichte variant uit PRP-004, die voor de kern is vervallen.
  - Carlo's antwoord (kaart): "In principe alles voor de kern fuctionaliteit van de app." Register ROL-04: "Ontwerpt in principe de hele kernfunctionaliteit vooraf (TL-V5)". Maar `ORGANISATIE.md` §3 ROL-04 Uit: "voor de hele kern vooraf (TL-V5)" en FND-016: "Door TL-V5 ontwerpt Atlas alles voor de kern vooraf." Het voorbehoud "in principe" (waar A-TL-01 juist op steunt) ontbreekt daar.
- **Eis:** de overzichten komen overeen met het register en geven het besluit in de woorden van het besluit weer; één begrip per ding (`bpmn-conventies`, "Begrippen").
- **Herstel:** kies één term. Voorstel: "kernontwerp (Atlas, TL-V5)" voor het ontwerp vooraf en "ontwerp per slice" voor het werk van de tech lead; pas PRC-01 `doel`/`output`, PRC-02 `input`, ASM-07 en de bijbehorende overzichten daarop aan, of zet in `ORGANISATIE` een zin "globaal ontwerp = kernontwerp". Herstel "in principe" in `ORGANISATIE` §3 en FND-016. Voor ROL-04/ROL-05 "binnen het globale ontwerp" geldt hetzelfde.

### D-07 (waarschuwing): wijzigingshistorie: volgorde, bereik en gevolgen

- **Bewijs:**
  - `wijzigingen.md`, CHG-002: "Feitencheck door de agents ..., na de goedkeuring van 0.1." De comments van Dr. Evil (2026-10-27T20:53:59Z) en Atlas (20:55:00Z) en de afsluiting (20:55:20Z) staan op WEB-20; kaart GK-1 `553e51b3` is pas `accepted` om 2026-10-27T20:59:07Z. De feitencheck is dus gedaan terwijl 0.1 nog ter goedkeuring lag; verwerkt is hij na de goedkeuring.
  - `wijzigingen.md`, CHG-003, kolom Geraakt: "`organisatie` §1–§7". In `ORGANISATIE.md` zijn §3, §5, §6 en §7 gewijzigd; §1 en §2 zijn ongewijzigd (diff met `_v01`; §4 alleen door CHG-002).
  - `bpmn-conventies`, "Een goedgekeurd model wijzigen", stap 4: "Controleer de gevolgen voor agents en skills." CHG-002/003 zeggen daar niets over, terwijl `rolanalyse-techlead` §9 gevolgen noemt (o.a. `architect-implementation-plan` van Atlas naar de tech lead, aanpassing van de instructies van Dr. Evil en Atlas).
- **Eis:** de wijzigingshistorie is juist en volledig, inclusief gevolgen voor agents en skills.
- **Herstel:** schrijf in CHG-002 "feitencheck van 2026-10-27, na indiening van 0.1 en verwerkt na de goedkeuring"; corrigeer Geraakt bij CHG-003 naar §3, §5, §6 en §7; voeg een regel toe: "Gevolgen voor agents en skills: geen uitgevoerd; zie `rolanalyse-techlead` §9 (ter info, via Dr. Evil en Carlo)". Noem in CHG-003 ook dat FND-006 uit de risico's van PRC-01 en FND-007 uit die van PRC-02 is gehaald (beslist door TL-V5 en TL-V2).

### D-08 (waarschuwing): "voorgelegd samen met GK-2" botst met de betekenis van GK-2

- **Bewijs:**
  - Alle zes bestanden: "Concept (versie 0.2). Wordt voorgelegd samen met GK-2." en `wijzigingen.md`: "0.2 is **Concept** en wordt voorgelegd samen met GK-2."
  - Plan op WEB-19, besluit B-05: "GK-1 organisatieanalyse, GK-2 procesmodellen, GK-3 rollen- en skillmodel, GK-4 de pagina."
- **Eis:** een goedgekeurd model wordt niet stilzwijgend gewijzigd; de goedkeuring van de wijziging is een zichtbaar eigen moment (`bpmn-conventies`, "Een goedgekeurd model wijzigen" stap 5–8; "Alleen de gebruiker keurt goed"). Met GK-2 goedkeuren Carlo ook de procesmodellen van ronde 2; de wijziging van ronde 1 kan dan onopgemerkt meegaan.
- **Herstel:** maak expliciet dat de wijziging 0.2 van ronde 1 een eigen punt op de GK-2-kaart is (of een eigen kaart krijgt), en benoem in de indieningsreactie dat Carlo daarmee CHG-002 en CHG-003 goedkeurt. Tot die goedkeuring blijft het bij "Tot dan geldt 0.1", zoals het nu staat.

### D-09 (waarschuwing): register en overzicht zijn bij rollen niet gelijk opgebouwd

- **Bewijs:**
  - `register.md`, ROL-04 heeft een eigen veld `in: "goedgekeurde eisen, use cases met bedrijfsregels, verzoeken om een implementatieplan (feitencheck WEB-21)"`; ROL-01, 02, 03 en 05 hebben dat veld niet. Het schema in `bpmn-conventies` kent `in`/`uit` voor rollen niet.
  - `ORGANISATIE.md` §3 heeft In/Uit voor alle rollen. Wijzigingen in 0.2 bij ROL-01 (In: "ook API-contracten, TL-V4"; Uit: "van de wensen (TL-V2)"), ROL-02 (In: "werkpakketten per slice (TL-V3)") en ROL-05 (In: "de volgende wens van ROL-01 via ROL-02 (TL-V2)") staan in het register niet als In/Uit, alleen deels in `verantwoordelijkheid`.
  - `register.md` zegt: "Alle andere documenten op WEB-19 zijn weergaven."
- **Eis:** het register is de bron van waarheid; de overzichten zijn daaruit af te leiden (`bpmn-modelcontrole`, "de overzichten komen overeen met het register").
- **Herstel:** geef alle vijf rollen `in` en `uit` in het register (zoals nu bij de beschrijving van ROL-04 is begonnen) of laat `in` bij ROL-04 weg en neem de aanvulling op in `verantwoordelijkheid`. Splits in de ROL-04-regel wat as-is is (Feit) en wat to-be is (TL-V5; implementatieplan naar ROL-05) met een label per onderdeel.

## Wat ik niet kon toetsen

- De AGENTS.md van Dr. Evil en Atlas en de skillkoppeling zelf: ik heb de uitkomst van de feitencheck (comments op WEB-20 en WEB-21) als bron gebruikt, niet de instructies.
- Of `rolanalyse-techlead` nog verandert voordat Carlo hem goedkeurt (kaart `a2fe5712` staat op `pending`); het model verwijst daar terecht naar ("volgt zodra die is goedgekeurd").
- Of het artifact (ronde 4) of procesmodellen van ronde 2 al bestaan en op 0.2 moeten worden gebaseerd: niet aanwezig in deze scope.
- Een technisch geldig register is niet automatisch inhoudelijk juist: de YAML laadt zonder fouten en alle kruisverwijzingen kloppen, maar of de besluiten TL-V1 t/m TL-V5 de bedoeling van Carlo volledig dekken, is alleen af te leiden uit de antwoordkaart en de rolanalyse, niet uit een gesprek met hem.
