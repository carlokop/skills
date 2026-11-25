# Modelcontrole model 0.5 (2026-10-28)

| | |
| --- | --- |
| Gecontroleerd | model 0.5 (Concept): CHG-007 (besluit TL-V7: geen rol tech lead, taken naar Atlas ROL-04, zelfcontrole vervalt) |
| Documenten | `register`, `prc-01` t/m `prc-06`, `proces-catalogus`, `organisatie`, `bevindingen`, `voorstellen`, `paperclip-mapping`, `wijzigingen`, `plan`. Vergeleken met de 0.4-versies van `register`, `prc-01` en `prc-02`. |
| Datum | 2026-10-28 |
| Uitgevoerd door | onafhankelijke controle-agent met `bpmn-modelcontrole` en `bpmn-conventies` |
| Achtergrond | `SPEC-CHG-007` (besluit TL-V7, comment `8a27fe15` op WEB-17), `controle-ronde-2-v04` (vorige controle, als voorbeeld van de vorm), `rolanalyse-techlead` v0.4 (Vervallen, alleen onderbouwing van TL-01 t/m TL-09) |

## Uitkomst

Geen fouten. 3 waarschuwingen (H2-01, H2-02, H2-04), 7 opmerkingen (H2-03, H2-05 t/m H2-10). Alle opgegeven checks zijn uitgevoerd.

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Vervallen ID's buiten historische context (ROL-05, ACT-01.19, ACT-02.10, G-01.3, G-02.4, ACT-01.55, ACT-02.52, ASM-15, PRP-009, M-8) | voldoet | Alle treffers staan in `vervallen_ids`, wijzigingshistorie, "Nieuw in 0.5"-blokken, doorgehaalde of als vervallen gemarkeerde regels, of in de oude versieregels. Geen enkel vervolg, pijl, uitzondering of loop verwijst nog naar een vervallen stap. Geen ID is hergebruikt (live ID's en `vervallen_ids` overlappen niet). |
| Register en weergaven: rol, naam, vervolg | voldoet | 69 activiteiten in het register; 69 in de procesbeschrijvingen, zelfde ID's. Naam en rol van elke ACT zijn gelijk in register en tabellen (script). ACT-01.18 → PRC-03 → GOV-06 (`prc-01` r.75) en ACT-02.9 → PRC-03 → GOV-06 (`prc-02` r.62) kloppen met diagram en tekst. |
| Beslissingen per proces | voldoet | 12 beslissingen in het register (G-01.1, 01.4, 02.1, 02.2, 02.3, 02.5, 04.1, 04.2, 04.51, 05.1, 06.1, 06.2), gelijk aan de procesbeschrijvingen en aan `proces-catalogus` r.35 t/m r.40. |
| Catalogusregels (activiteiten per proces) | voldoet | "ACT-01.1–01.24 (zonder 01.19)" = 23, "ACT-02.1–02.13 (zonder 02.10)" = 12, variantlijsten (01.51/52/54/56/57; 02.51, 02.53–02.55) gelijk aan het register. |
| Generieke lanes | voldoet | Register r.229 t/m r.232 zonder ROL-05; `prc-03` r.18 en r.48, `prc-04` r.22 en r.71, `prc-05` r.55 gelijk. |
| Versienummers 0.5 | voldoet | Register (meta, PRC-01 t/m PRC-05), `prc-01` t/m `prc-05`, catalogus, organisatie, bevindingen, voorstellen, mapping. PRC-06 blijft 0.3, in register, catalogus en `prc-06`. |
| ASM-03, ASM-09 | voldoet | Tekst volgt SPEC regel 9. |
| PRP-005, 007, 008, 010, 011, 015, 017, 018 | voldoet | Tekst volgt SPEC regel 7. PRP-018 is een voorstel, niet bevestigd. |
| Controledocumenten ongewijzigd | voldoet | `controle-ronde-1`, `-1-v02`, `-2`, `-2-v04` bevatten nog ROL-05; bestanddatum ouder dan de 0.5-bestanden. |
| Mermaid PRC-01 en PRC-02 (basis en variant) | voldoet met opmerkingen | Script: alle gebruikte knopen zijn gedefinieerd, geen ongebruikte knopen, elk eindpunt E is bereikbaar vanaf de start (S, bij de variant van PRC-02 R). Lane van elke ACT gelijk aan `rol` in het register. Zie H2-07 en H2-08. |
| Eigen waarneming loops | voldoet | Elke loop heeft een uitgang: ACT-01.5 → ACT-01.3 (uitgang ACT-01.6), G-01.4 en G-02.5 (nee), GOV-06 → ACT-01.17/02.8 (daarna plan, daarna weer GOV-06; PRC-05 max. 2 rondes). |

## Bevindingen

| ID | Ernst | Bevinding | Voorgestelde correctie |
| --- | --- | --- | --- |
| H2-01 | waarschuwing | `proces-catalogus` r.42 zet ROL-05 bij "Vervallen vóór goedkeuring". `register` r.235 en `wijzigingen` CHG-001 (ROL-01–05) zeggen dat ROL-05 in de goedgekeurde 0.1 stond. Catalogus en register spreken elkaar tegen. | Haal ROL-05 uit die zin of schrijf: "ROL-05 stond in de goedgekeurde 0.1 en vervalt in 0.5 (TL-V7)". De zin gaat verder over ACT- en G-ID's. Verwijs voor ROL-05, ASM-15 en PRP-009 naar `register`, `vervallen_ids`. |
| H2-02 | waarschuwing | `bevindingen` r.38 (FND-017, Stand) en `organisatie` r.142 zeggen dat het risico "afgedekt" is door GOV-06 en GOV-09/03/04/05/13. Dat is te sterk. GOV-09/03/04/05/13 gaan over het globale ontwerp, en in PRC-02 alleen als Atlas bij G-02.3 zelf "ja" zegt. Het ontwerp per slice (ACT-01.16, ACT-02.7: modules, interfaces, diagrammen) heeft geen eigen akkoord. Alleen de API-contracten gaan naar GOV-06. `voorstellen` r.213 (PRP-017, Risico's) zegt zelf dat een wijziging die Atlas niet ziet geen ADR krijgt, en r.221 (PRP-018) dat een onafhankelijke toets pas met een aparte agent kan. Ook `register` r.124 ("FND-017 door TL-V7") leest alsof TL-V7 het oplost. | Stand FND-017: "deels afgedekt" met het restrisico erbij (G-02.3 en het ontwerp per slice buiten de API-contracten). Zelfde aanpassing in `organisatie` r.142. `register` r.124: "FND-017 ontstaat door TL-V7, deels afgedekt". Dit wijkt licht af van de SPEC-tekst ("afgedekt"); leg het aan de maker voor. |
| H2-03 | opmerking | De titel van FND-017 ("Atlas toetst zijn eigen ontwerp per slice", `bevindingen` r.38) en `register` r.102 ("Atlas toetst zijn eigen ontwerp per slice") suggereren dat er een toets bestaat. Er is juist geen toets meer (ACT-01.19 en ACT-02.10 vervallen). | Titel en risicoregel: "Atlas ontwerpt en beoordeelt zijn ontwerp per slice zelf, zonder tweede lezer". |
| H2-04 | waarschuwing | Het aantal taken dat nog niet in de instructies staat is niet overal gelijk. `register` r.75 en r.79 (ROL-04, AGT-03), `organisatie` r.77 en r.96: "TL-01 t/m TL-09 staan nog niet in zijn instructies". `register` r.71 en `wijzigingen` r.11: "TL-01 t/m TL-06". `plan` r.28 en r.30: TL-01 t/m TL-09. Volgens `rolanalyse-techlead` r.109 staat TL-08 al in de instructies van Atlas. TL-V7 (`register` r.27) zegt dat TL-07 t/m TL-09 pas met developers beginnen, maar PRC-04 (r.28), ASM-03, ACT-01.15 en ACT-02.4 modelleren TL-08 nu al. | Eén formulering overal: "TL-01 t/m TL-06 en TL-08 gelden nu; TL-08 staat al in de instructies; TL-07 en TL-09 wachten op developers". Pas de opmerkingen bij ROL-04 en AGT-03 aan (nu: TL-01 t/m TL-09 "nog niet in de instructies") en de label-tekst van AGT-03. Laat Carlo bevestigen dat TL-08 nu al geldt (vraag Dr. Evil → Atlas bij het opdelen). |
| H2-05 | opmerking | "Tech lead" als rol zonder markering in kolommen die de oorspronkelijke bevinding beschrijven: `bevindingen` r.24 (FND-003), r.27 (FND-006), r.30 (FND-009: "straks mogelijk de tech lead"), r.33 (FND-012), r.35 (FND-014); `organisatie` r.142 (vraag en PRP-012); `register` r.289 en r.294 (vraagtekst OPEN-02 en OPEN-07). Het zijn historische teksten (de bevinding blijft staan, `bevindingen` r.10), maar een lezer ziet geen verwijzing naar TL-V7. | Eén noot per document ("Nieuw in 0.5": in de kolom Bevinding betekent "tech lead" de rol zoals bedoeld in 0.1; sinds TL-V7 is dat Atlas), of "(= Atlas, TL-V7)" achter de eerste vermelding per regel. |
| H2-06 | opmerking | Het blok "Nieuw in 0.4" bij TL-V6 (`prc-01` r.23, `prc-02` r.19) noemt "de taken van de tech lead" met alleen "(In 0.5 vervalt het meelezen, TL-V7.)". SPEC regel 13 vraagt bij historische besluiten de toevoeging "(TL-V7: geen rol tech lead meer)". | Voeg die toevoeging toe in beide blokken. |
| H2-07 | opmerking | PRC-02 basisdiagram (`prc-02` r.90 t/m r.135), al zo in 0.4: (a) Q3 (PRC-04 vraag beantwoorden) en B6 (PRC-06) zijn doodlopend, zonder terugpijl; Q3 heeft maar één ingaande pijl (vanaf ACT-02.7), terwijl vragen van Atlas over eisen bij elke stap kunnen komen; (b) de afkeurroutes van GOV-01, GOV-02 en GOV-09/03/04/05/13 ontbreken in het diagram (tekst r.75, r.77, r.79 heeft ze; PRC-01 tekent ze wel); (c) variant (r.159 t/m r.182): de knopen A1 en A7 bundelen ACT's van meerdere rollen en staan buiten de rol-lanes, en de afkeurroutes van GOV-06 en GOVO ontbreken. Niet veroorzaakt door CHG-007. De pijl naar Q4 is wel correct verwijderd. | (a) Pijl "↩ antwoord" van Q3 naar ACT-02.7 en een vraagpijl van ACT-02.5 en ACT-02.9; (b) GOV1 → A3, GOV2 → A12, GOVO → A6 met "↩ afgekeurd: PRC-05"; (c) mag blijven als de vereenvoudiging in de kop staat ("zoals de basis"). |
| H2-08 | opmerking | De vraagpijl Dr. Evil → Atlas over de opdeling (TL-08, PRC-04) staat in PRC-02 (`prc-02` r.132: A11 → A9) maar niet in de diagrammen van PRC-01 (basis r.112 t/m r.168; variant r.205 t/m r.246), terwijl `prc-01` r.83 de route wel beschrijft. | Voeg in PRC-01 `A20 -. "✉ PRC-04 vraag over de opdeling" .-> A18` toe, of verwijs in de voetnoot (r.169) naar r.83. |
| H2-09 | opmerking | `voorstellen`: (a) PRP-008 Gevolgen (r.142) noemt nog "instructies van Atlas (laatste woord)", terwijl het punt "laatste woord" vervalt (r.136, r.139); (b) kop PRP-009 (r.145) en PRP-012 (r.172) zonder "(vervallen)", terwijl de tekst eronder in de tegenwoordige tijd staat; (c) PRP-017 Afweging (r.209) noemt "GOV-09, 03, 13", zonder GOV-04 en GOV-05 (al zo in 0.4). | (a) Zin aanpassen: instructies van Atlas krijgen de taken TL-01 t/m TL-06 en TL-08; (b) "(vervallen)" in de kop; (c) "GOV-09, 03, 04, 05, 13". |
| H2-10 | opmerking | `plan` r.26: "rollenregister (vijf rollen)". Het register heeft vier rollen (ROL-01 t/m ROL-04). `wijzigingen` CHG-007 noemt `plan` als geraakt, maar deze regel is gebleven. | "(vijf rollen in 0.1; vier sinds TL-V7)" of de regel laten staan met een noot dat het plan het startplan is. |

**Niet te beoordelen:** Mermaid-syntax (geen parser beschikbaar; wel een eigen controle op knopen, pijlen, bereikbaarheid en lanes, plus visueel gelezen); YAML-validiteit van het register (geen YAML-bibliotheek; wel haakjes, aanhalingstekens en dubbele ID's gecontroleerd); of de instructies van Atlas het TL-08-werk inderdaad bevatten (alleen bron: `rolanalyse-techlead` r.109, niet AGENTS.md zelf); of Carlo de stand van PRP-018 en ASM-09 (niet bevestigd) zo bedoelt.

## Eindoordeel

**kan worden ingediend.** Geen blokkerende punten. Verwerk H2-01, H2-02 en H2-04 vóór indiening; ze zijn klein en gaan over formulering. H2-02 wijkt af van de SPEC-tekst en vraagt een korte afstemming met de maker. De opmerkingen kunnen met de volgende versie mee.

## Verwerking (Socrates, 2026-10-28)

Verwerkt in model 0.5 vóór indiening: H2-01, H2-02, H2-03, H2-04, H2-06, H2-08, H2-09, H2-10. Bij H2-04 is de formulering: TL-08 staat al in de instructies van Atlas (Feit, rolanalyse-techlead §5), TL-01 t/m TL-06 zijn to-be, TL-07 en TL-09 wachten op developers (TL-V1).

Niet verwerkt: H2-05 (historische teksten; elk document heeft al een blok "Nieuw in 0.5" met TL-V7) en H2-07 (bestond al in 0.4, niet veroorzaakt door CHG-007; mee in de volgende versie van PRC-02).
