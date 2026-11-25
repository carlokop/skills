> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Controleverslag CHG-016 (skills bij naam, B-11, PRP-039)

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Controleur | bpmn-modelcontrole (onafhankelijk van de maker) |
| Gecontroleerd | `concept/` (register, prc-01, prc-02, uitbreidingsgids, v010-voorstel, paperclip-mapping) tegen `concept-voor-skillnamen/` (stand vóór de wijziging); `concept/v010-controle.md` op ongewijzigd blijven; de bewering in PRP-039 tegen `bpmn-conventies` SKILL.md |
| Aanleiding | comment `081ea763`: geen nummers voor skills in het register, skills bij de naam beschrijven |
| Methode | (1) van het oude register de koppeling SKL-nummer naar naam gemaakt; (2) alle oude bestanden mechanisch omgezet (ook lijsten "SKL-02, 06, 09" en reeksen "t/m") en per regel vergeleken met het nieuwe concept; (3) beide YAML-blokken met js-yaml ingelezen en veld voor veld vergeleken, met de oude waarden omgezet via dezelfde koppeling; (4) tabel "Skills in het kort" regel voor regel naar de skillslijst; (5) `diff` en `cmp` op de bestanden |

## Uitkomst per punt

**1. Elke vervanging juist: voldoet op één punt niet (zie B-1).** Alle 179 SKL-verwijzingen in het oude register, de 4 in prc-01, de 11 in de uitbreidingsgids, de 16 in v010-voorstel en de 1 in paperclip-mapping zijn gecontroleerd. Alle naam-vervangingen komen overeen met de koppeling nummer-naam. De lijsten en reeksen kloppen:
- prc-01.md:153 "SKL-46 t/m SKL-49" = `paginalijst-en-paginabrieven`, `architectuurprofielen`, `architect-cms-configuratie`, `architect-componentontwerp` (4, goed), met `paginaontwerp` apart;
- "SKL-02, 06, 09, 10, 14, 15, 19, 21, 41, 42 en 43" = 11 namen, goed;
- uitbreidingsgids.md:5 "SKL-46 t/m SKL-50" = 5 namen, goed (ook in v010-voorstel.md:252);
- "SKL-02, 06, 09, 10, 11, 12, 13, 14" (8 skills) = 8 namen, goed;
- register ACT-01.11 "SKL-10 en de deelskills SKL-09, 11, 12, 13 en 14" en ACT-03.1 "SKL-02, 06, 09, 11, 12, 13, 14" (7) = goed.
Verdubbelde namen ("naam `naam`", "naam (naam)") zijn op één na overal verwijderd. Eén blijft staan (B-1).

**2. Geen SKL-nummer meer behalve `oud_nummer` en v010-controle.md: voldoet.** In `concept/` staan SKL-nummers alleen in de 39 velden `oud_nummer`, in v010-controle.md (ongewijzigd, 11 keer) en in drie uitlegzinnen die de nieuwe regel noemen: register.md:15 ("SKL-01 enz."), register.md:609 (commentaar bij `skills:`) en v010-voorstel.md:237 en 244 (PRP-039). Die vallen onder de uitzonderingen van punt 4. In de tabel "Skills in het kort" staat geen nummer. `grep SKL` op prc-02.md, paperclip-mapping.md, prc-01.md en uitbreidingsgids.md geeft 0 treffers. Mermaid-regel prc-01.md:238 is omgezet.

**3. YAML geldig en verwijzingen kloppen: voldoet.**
- Het register-YAML laadt zonder fouten (18 hoofdsecties, zelfde als vóór de wijziging).
- 39 skills, 39 unieke `naam`, 39 unieke `oud_nummer`. Elke `oud_nummer` hoort bij de juiste naam (vergeleken met de oude `id`/`naam`).
- Alle `afhankelijkheden` (skills) verwijzen naar een bestaande naam.
- Alle 82 `koppelingen`: `skl` en `skl_status` verwijzen naar bestaande namen (of "n.v.t. (mens)"), en de sleutels van `skl_status` zijn gelijk aan de lijst `skl`.
- `skl` en `skl_status` zijn in alle 82 koppelingen gelijk aan de oude waarden omgezet naar namen. Flow-lijsten zijn lijsten gebleven (geen "a en b" als één element).
- De volgorde van de skills is gelijk aan de oude.
- In de geparste data staat geen `SKL-` meer behalve in `oud_nummer`.

**4. Verder inhoudelijk niets veranderd: voldoet, met de opmerkingen O-1 tot en met O-5.** Het vergelijken van het geparste YAML (oud omgezet naar nieuw) laat alleen verschillen zien in: `meta.status`, `meta.besluiten` (B-11 erbij), en tekstvelden met backticks/"en" in `goedkeuringen`, `koppelingen` (opm, wijziging_0_10) en `aannames` (ASM-24). De velden `gebruikers`, `doel`, `dekking`, `input`, `output`, `validatie`, `werking`, `sleutel` en alle andere secties zijn gelijk. In `naam` is "(werknaam...)" vervangen door `werknaam: true` (de toelichting "gedeeld"/"gedeelde referentie" staat nu in het commentaar achter het veld). prc-02.md en v010-controle.md zijn byte-voor-byte gelijk (`cmp`). paperclip-mapping.md: alleen M-1. uitbreidingsgids: alleen §4 stap 2 (nieuw), tabel §6 (skillrij, PRP en CHG, nieuw), statusregel en namen. v010-voorstel: alleen PRP-039, CHG-016, kopregel en namen. De regels voor de vrije ID's in §6 zijn consistent met PRP-039 en CHG-016 (hoogste PRP-039, volgende PRP-040; hoogste CHG-016, volgende CHG-017).

**5. Tabel "Skills in het kort" klopt: voldoet.** 39 rijen, elke skill precies één keer. Gebruikers per skill komen overeen met `gebruikers` (AGT-01 Dr. Evil, AGT-02 Socrates, AGT-03 Atlas; `paginaontwerp` "nog geen agent (jij doet het, ASM-28)" past bij "ROL-01 doet het, ASM-28"). Stand klopt met `dekking`, `besluit` en `situatie`: 28 bestaande skills ("Bestaat" of "Bestaat; moet worden uitgebreid" voor de 15 met `uitbreiden`-dekking of `wijziging_0_10`), `to-tickets` met "onbekend", 6 besloten skills (B-08) en 5 voorstellen (0.10). De zin "naam is een werknaam" staat bij precies de 11 skills met `werknaam: true`. Omschrijvingen zijn niet in strijd met `doel`. Eén zinsdeel is niet te herleiden (O-2).

**6. Mermaid niet kapotgegaan: voldoet.** prc-01.md heeft 1 mermaid-blok (regel 173 tot en met 258); alleen regel 238 is veranderd: `GOV6 -- "akkoord (poort quality-gates)" --> A20`. Geen backticks of haakjes die de syntax breken (de tekst staat tussen aanhalingstekens). prc-02.md is ongewijzigd.

**7. Bewering in PRP-039 over `bpmn-conventies`: klopt, maar onvolledig (zie W-1).** SKILL.md (`bpmn-conventies--ddca28b5e4`) bevat in het voorbeeldregister `skills: [SKL-01]` (regel 79) en `- id: SKL-01` (regel 88), en in de prefixtabel `` `SKL-01` | skill `` (regel 129). De bewering is dus feitelijk juist. Dezelfde skill zegt echter in regel 120: "Gebruik stabiele ID's en verwijs er altijd mee, want namen veranderen. Hergebruik een ID nooit." Dat staat niet in PRP-039. De bewering over het bouwscript van `bpmn-eindontwerp` is een voorstel (V) en niet toetsbaar: SKILL.md van `bpmn-eindontwerp` noemt geen SKL-ID, alleen "skills met status" en het register als bron.

## Bevindingen

| Nr | Ernst | Plek | Bevinding | Voorgestelde correctie |
| --- | --- | --- | --- | --- |
| B-1 | blokkerend | `concept/register.md:219` (ACT-01.20, veld `input`): "vooraf de poort: GOV-06 is er (quality-gates, quality-gates)" | Verdubbelde naam door mechanische vervanging van "(`quality-gates`, SKL-21)". In prc-01.md:90 is dit wel hersteld, dus register en proces zeggen nu iets anders. Het is precies de fout die punt 1 zoekt, in het bronregister. | Maak er "(quality-gates)" van, gelijk aan prc-01.md:90. |
| W-1 | waarschuwing | `concept/v010-voorstel.md` PRP-039, regels 237 en 244 | PRP-039 noemt wat `bpmn-conventies` voorschrijft, maar niet het uitgangspunt in regel 120 ("stabiele ID's, want namen veranderen; hergebruik nooit") en niet dat `bpmn-modelcontrole` (regel 26) toetst of "ID's uniek zijn en het schema volgen". Zolang PRP-039 niet is goedgekeurd, wijkt 0.10 af van de geldende conventie en kan de controle skills zonder ID als afwijking melden. Ook uitbreidingsgids.md:20 (rij "Stabiele ID's", Feit) wordt voor skills niet meer gevolgd. De project owner beslist zonder dit te weten. | Voeg aan PRP-039 toe: (a) het uitgangspunt "namen veranderen" en het risico (een hernoemde skill raakt alle verwijzingen), (b) de afhandeling in dit concept (naam uniek als sleutel, hernoemen alleen via een CHG, `oud_nummer` als overgang), (c) dat 0.10 tot goedkeuring van PRP-039 afwijkt van `bpmn-conventies` en dat een controle daarop kan wijzen. Pas zo nodig uitbreidingsgids.md:20 aan ("behalve skills, B-11"). |
| W-2 | waarschuwing | `concept/uitbreidingsgids.md:5` ("vrije ID's na CHG-015 (§6)"), `uitbreidingsgids.md:72` (kop "... `wijzigingen` na CHG-015"), `concept/v010-voorstel.md:254` ("vrije ID's na CHG-015") | De tabel in §6 geeft nu de vrije ID's na CHG-016 en PRP-039 (PRP-040 en CHG-017 volgen). De kop en twee verwijzingen zeggen nog "na CHG-015". Ook noemt de statusregel van de gids (regel 5) B-11/CHG-016 niet, terwijl §4 stap 2 en de tabel erdoor zijn gewijzigd. | Vervang door "na CHG-016" op de drie plekken; noem B-11 en CHG-016 in de statusregel van de gids. |
| O-1 | opmerking | `concept/v010-voorstel.md:8` | "... PRP-029 t/m PRP-038 in `voorstellen`, PRP-039 in `voorstellen`, ..." leest onhandig en herhaalt zichzelf. | "PRP-029 t/m PRP-039 in `voorstellen`". |
| O-2 | opmerking | `concept/register.md:41` (tabel, rij `delivery-management`): "de dagelijkse flowcheck" | Het register noemt de frequentie van de flowcheck nergens (`doel`: "Flow, limieten, blokkades"; FND-013: "de flowcheck-routine is niet ingericht"). "Dagelijkse" is een aanname in een tabel die als feit leest. | "...en de flowcheck." (of "dagelijkse" weglaten). |
| O-3 | opmerking | `concept/v010-voorstel.md:239-242` (PRP-039, bullets 1 en 4) | Bullet 1 zegt al dat het nummer alleen nog in `oud_nummer` staat; bullet 4 herhaalt dat. | Voeg de twee samen (bullet 4 bevat de reden: documenten van 0.9 en pagina 0.3 blijven leesbaar). |
| O-4 | opmerking | `concept/register.md:1301` (ACT-01.11 `opm`) en `:1354` (ACT-04.3 `opm`) | Backtickgebruik is inconsistent binnen één zin: `architect-modeling` met backticks naast `architect-architecture-choice, uml-domain-modelling ...` zonder; `requirements-clarification` zonder naast `architect-clarification` met. Het is alleen opmaak. | Kies één stijl (backticks overal in lopende tekst, of nergens in YAML-velden). |
| O-5 | opmerking | `concept/prc-01.md:3` en `:5`, `concept/register.md:165` en `:187` (status van PRC-01 en PRC-02) | prc-01 is inhoudelijk niet veranderd door CHG-016 behalve namen, en noemt alleen CHG-015/B-10. Dat is niet fout, maar de wijzigingsregel (versietabel prc-01.md:283) vermeldt CHG-016 niet. | Optioneel: korte regel "CHG-016: skills bij naam" in de versietabel van prc-01. |
| O-6 | opmerking | `concept/register.md:15`, `:609`; `v010-voorstel.md:237`, `:244` | "SKL-01 enz." en `SKL` staan nog in uitlegtekst. Dit is toegestaan (uitdrukkelijk nieuwe tekst over B-11) en bedoeld; vermeld om zeker te zijn dat een strikte zoekopdracht op "SKL-" deze regels vindt. | Geen. |

## Conclusie

**Terug naar de maker.** De omzetting van nummers naar namen is verder zorgvuldig en volledig: alle lijsten, reeksen, koppelingen, `skl_status`, `afhankelijkheden`, het YAML-blok, de tabel "Skills in het kort" en de mermaid-regel kloppen, en v010-controle.md en prc-02.md zijn ongewijzigd. Eén blokkerende fout (B-1, verdubbelde naam in register.md:219) moet eerst hersteld worden. Het herstel is één regel. Herstel daarnaast W-1 (PRP-039 mist het uitgangspunt "stabiele ID's" uit `bpmn-conventies` regel 120) en W-2 (verouderde verwijzingen "na CHG-015") vóór indiening. Na het herstel van B-1 is een kortere hercontrole (register.md:219, uitbreidingsgids.md:5/20/72, v010-voorstel.md:8/237-254) voldoende; dan kan het worden ingediend.

## Hercontrole

Datum 2026-10-30. Gecontroleerd: alleen de zes herstelpunten van de maker, plus (a) geen nieuwe SKL-nummers, (b) YAML nog geldig, (c) geen nieuwe tekstfouten in de gewijzigde alinea's. Methode: dezelfde omzetting van de oude bestanden en dezelfde YAML-vergelijking als in de eerste controle, opnieuw uitgevoerd op de huidige bestanden.

| Punt | Uitkomst |
| --- | --- |
| B-1 `register.md:219` ACT-01.20 | Hersteld: "vooraf de poort: GOV-06 is er (quality-gates)". Gelijk aan prc-01.md:90. Geen andere verdubbelde namen meer (regex-scan over alle zes bestanden). |
| W-1 PRP-039 (`v010-voorstel.md` r. 236-257) | Hersteld. Er staat een alinea "Waarom de conventie nummers gebruikte, en hoe ik dat risico opvang (F/V)". Het citaat uit `bpmn-conventies` regel 120 is letterlijk juist. Drie maatregelen: naamswijziging via CHG, controle op bestaande naam, naam uniek. Daarbij de tijdelijke afwijking van de conventie. Bullets 1 en 4 zijn niet meer dubbel. |
| W-2 "na CHG-016" | Hersteld in `uitbreidingsgids.md:72` (kop) en `v010-voorstel.md:~270` (regel over de gids, nu "vrije ID's na CHG-016; skills bij naam (§4, B-11)"). Statusregel van de gids noemt nu CHG-016 en B-11 (r. 5). |
| O-1 `v010-voorstel.md:8` | Hersteld: "PRP-029 t/m PRP-039 in `voorstellen`, voeg CHG-015 en CHG-016 toe". |
| O-2 `register.md:41` | Hersteld: "De flow bewaken: limieten, blokkades en de flowcheck." |
| O-5 `prc-01.md:3` | Hersteld: statusregel noemt "CHG-016: skills bij naam, B-11". |
| (a) Nieuwe SKL-nummers | Geen. In `concept/` alleen nog: 39x `oud_nummer`, `register.md:15` en `:609`, `v010-voorstel.md:238` en `:245` (alle toegestane uitlegtekst), en `v010-controle.md` (ongewijzigd, `cmp` gelijk). |
| (b) YAML | Register-YAML laadt zonder fouten. 39 unieke namen, alle verwijzingen (`afhankelijkheden`, `skl`, `skl_status` in 82 koppelingen) wijzen naar bestaande namen, nummer-naam-koppeling ongewijzigd. Structureel verschil met de oude versie nog steeds alleen de toegestane plekken (plus ACT-01.20, nu zonder dubbele naam). `prc-02.md` en `v010-controle.md` byte-gelijk aan de oude versie. |
| (c) Gewijzigde alinea's | Geen spelling- of zinsfouten gevonden. Twee opmerkingen hieronder. |

Resterende opmerkingen (niet blokkerend):
- **O-7** `v010-voorstel.md` PRP-039, slotzin ("... en de controle meldt het niet als fout"): dit zegt iets over het gedrag van `bpmn-modelcontrole`, dat de maker niet bepaalt. Die skill toetst nu of ID's "het schema volgen" (regel 26). Voorgestelde formulering: "... en ik markeer het in de controle als bekende afwijking (B-11)."
- **O-8** Het voorgestelde veld `vorige_namen` (PRP-039) bestaat nog niet in het register. Dat is toegestaan, want het staat onder Voorstel (V); het register hoeft het pas te krijgen als PRP-039 wordt uitgevoerd.

### Conclusie hercontrole

**Kan worden ingediend.** De blokkerende fout en beide waarschuwingen zijn hersteld, er zijn geen nieuwe fouten bijgekomen. O-3, O-4 en O-6 uit de eerste controle zijn opmerkingen gebleven (O-3 is opgelost); O-7 en O-8 zijn optioneel.


**Na de hercontrole (maker, zonder nieuwe controle):** O-7 verwerkt; de slotzin van PRP-039 luidt nu "Ik markeer het in de controle als bekende afwijking (B-11)." O-8 blijft zoals het is (voorstel).
