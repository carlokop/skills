# Gaten in model 0.14

| | |
| --- | --- |
| Status | **Afhandeling goedgekeurd (2026-11-01, Carlo, kaart `7a725bdb`)**: geen aparte modelversie. Punt 1 t/m 6 gaan mee met de eerstvolgende wijziging van het model, of anders met het pakket voor Dr. Evil (PRC-08 – organisatie aanpassen); daar gaat ook de korte naam van CHG-027 in de sectie `korte_namen` mee (K27-09, net als CHG-025 in 0.14). Punt 7: het voorstel is goedgekeurd: Dr. Evil legt in het pakket de volledige lijst gekoppelde skills per agent voor, met per skill of een stap hem gebruikt; `complain` en `suggestion-box` blijven. Het goedgekeurde register 0.14 is tot dan **niet** aangepast. Gevonden bij het bijwerken van de weergaven naar model 0.14 (CHG-027 – weergaven van model 0.14). Geen van deze punten blokkeert iets of verandert een stap, akkoord of de telling (17 / 23 / 35 / 9, 84 stappen). |
| Bron | meldingen van de agents die de weergaven bijwerkten (`_meldingen-A` t/m `_meldingen-D`, niet geüpload) en de controle `controle-chg027` |
| Nummering | Om verwarring met de gaten A-1 enz. uit `register-gaten-0-13` te voorkomen, heten de punten hier **punt 1 t/m punt 7**. |

**Wat de codes betekenen** (B-18 – codes met een korte naam): PRC = proces of subproces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B = een besluit van jou · TL-V = jouw besluit over de tech lead · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · M = plek waar Paperclip niet netjes past · K = punt uit de modelcontrole · UC / AC / BR / FR = use case / acceptatiecriterium / bedrijfsregel / functionele eis van een klantproject. Lokale codes: A-1, B-2, C-5 enz. = een gat uit een lijst `register-gaten-…` (groep A, B of C; niet te verwarren met je besluiten B-01 enz.) · V1 t/m V5 = vraag op een vragenkaart · D1 t/m D3 = doel · GK-1 t/m GK-4 = de vier goedkeuringsrondes. De korte naam staat de eerste keer per alinea, lijstpunt of tabelrij bij de code; de volledige lijst staat in `codes-en-namen`.

## Groep A: tekst en administratie

| Punt | Waar | Wat | Voorstel |
| --- | --- | --- | --- |
| punt 1 | ASM-42 (inhoud van het contextverslag) | Zegt nog "het issue waarop de **uitvoerder** de stap doet"; ACT-04.55 (contextverslag opstellen) en PRC-04 (vragenloop en grill-sessie tussen agents) zeggen sinds 0.14 "het issue waarop de **vrager** zijn stap doet; bij de toets het toets-issue". Zelfde betekenis, andere woorden. | ASM-42 in dezelfde woorden als ACT-04.55 zetten. |
| punt 2 | GOV-06 (akkoord bouwcontract per slice), GOV-08 (escalatiebesluit van Carlo) | Noemen de route van ASM-56 (revisiecontrole OpenAPI faalt) niet: opnieuw GOV-06 na een nieuwe leesbare versie, de tweede keer GOV-08. De route staat alleen in ASM-56 en bij ACT-01.20 en ACT-02.53. | Bij GOV-06 en GOV-08 een zin met verwijzing naar ASM-56. |
| punt 3 | skill `quality-gates` | De skill noemt de revisiecontrole (ASM-52), maar niet wat er gebeurt als die faalt (ASM-56). | Verwijzing naar ASM-56 bij de skill. |
| punt 4 | ACT-02.53 (vaste controles uitvoeren), ASM-56 | "Dan geen taken": ACT-02.53 maakt zelf geen taken; die maakt ACT-02.11 daarna. Niet uitgeschreven dat ACT-02.11 pas volgt als de controle slaagt. | Dat in de tekst van ASM-56 of bij ACT-02.53 zeggen. |
| punt 5 | skill `architect-use-case-review` | Heeft geen veld `grill_sessie`; de drie andere skills met een grill-moment wel (sinds 0.14). De verwijzing staat er inhoudelijk al. | Veld toevoegen voor een gelijke vorm. |
| punt 6 | skill `vragen-en-akkoordrondes`, veld `dekking` | ACT-04.5 (antwoorden beoordelen) staat onder CAP-23, maar `koppelingen` geeft CAP-17; ook een aantal grill-stappen staan onder CAP-17 terwijl ze in `koppelingen` een andere capability hebben. Was al zo in 0.13. | Capability per stap gelijk aan `koppelingen`. |

## Groep B: punten die een keuze van jou vragen

| Punt | Wat | Mijn voorstel |
| --- | --- | --- |
| punt 7 | **Welke gekoppelde skills Dr. Evil voorlegt.** Het register noemt alleen `para-memory-files`, `first-task` en `improve-codebase-architecture` als skills die bij Atlas gekoppeld zijn maar niet in het register staan. Ook de zes `bpmn-`-skills (Socrates) staan er niet in (`paperclip-board`, `paperclip-create-agent` en `to-spec` gaan volgens ASM-36 al bij Atlas weg); en voor `complain` en `suggestion-box` zegt het register niet of Dr. Evil voorlegt of ze blijven. `improve-codebase-architecture` staat wel in de instructies van Atlas. | Dr. Evil legt in het pakket (PRC-08 – organisatie aanpassen) de volledige lijst gekoppelde skills per agent voor, met per skill: gebruikt door een stap, ja of nee. `complain` en `suggestion-box` blijven (platformskills). |

## Wat ik voorstel

Deze punten zijn klein. Ik stel voor ze niet als aparte modelversie te maken, maar mee te nemen in de eerstvolgende wijziging van het model (bijvoorbeeld als je nieuwe uitbreidingen geeft), of in het pakket voor Dr. Evil. Je keurde dit goed op kaart `7a725bdb` (2026-11-01).
