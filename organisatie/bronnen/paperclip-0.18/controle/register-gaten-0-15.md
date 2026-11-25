# Gaten in model 0.15

| | |
| --- | --- |
| Status | **Afhandeling goedgekeurd (2026-11-01, Carlo, kaart `783a477a`)**: geen aparte modelversie. Gat 1 t/m 12 gaan mee met de eerstvolgende wijziging van het model; daar gaat ook de korte naam van CHG-029 in de sectie `korte_namen` mee. Gat 13: het voorstel is goedgekeurd: Claude Design blijft `to-be` tot het eerste echte ontwerp, met in de tekst dat de afspraak (optie A) in de instructies staat. Het goedgekeurde register 0.15 is tot dan **niet** aangepast, op de twee statusteksten na die al hersteld waren (zie onder). Gevonden bij het bijwerken van de weergaven naar model 0.15 (CHG-029 – weergaven van model 0.15). Geen van deze punten blokkeert iets of verandert een stap, akkoord of de telling (75 / 0 / 0 / 9, 84 stappen). |
| Bron | wat de agents meldden die de weergaven en de pagina bijwerkten, en de controle `controle-chg029` |
| Nummering | Om verwarring met eerdere lijsten te voorkomen, heten de punten hier **gat 1 t/m gat 13**. |

**Wat de codes betekenen** (B-18 – codes met een korte naam): PRC = proces of subproces · ACT = stap (het nummer zegt niets over de volgorde) · G = beslispunt · GOV = akkoordmoment van jou · GS = grill-moment · ROL / AGT = rol / agent · CAP = capability · B = een besluit van jou · TL-V = jouw besluit over de tech lead · TL = tech-leadtaak van Atlas · PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · CHG = wijziging · P1 / P2 / P3 = architectuurprofiel (CMS / component-app / maatwerk) · M = plek waar Paperclip niet netjes past · K = punt uit de modelcontrole · UC / AC / BR / FR = use case / acceptatiecriterium / bedrijfsregel / functionele eis van een klantproject. Lokale codes: A-1, B-2, C-5 enz. = een gat uit een lijst `register-gaten-…` (groep A, B of C; niet te verwarren met je besluiten B-01 enz.) · V1 t/m V5 = vraag op een vragenkaart · D1 t/m D3 = doel · GK-1 t/m GK-4 = de vier goedkeuringsrondes. De korte naam staat de eerste keer per alinea, lijstpunt of tabelrij bij de code; de volledige lijst staat in `codes-en-namen`.

## Al hersteld (administratief)

- **Rij *Versie* in het register** zei nog "0.15 (2026-11-01, Concept)", terwijl de status Goedgekeurd is (kaart `cf1337ff`, B-22 – model 0.15 goedgekeurd). Dat was een vergeten statusregel bij het vastleggen van je akkoord. Hersteld in revisie 23 van `register`.
- **Rij *Status* in het register** zei nog "Dit concept zet …". Dat is nu "Deze versie zet …" (revisie 24). Verder is er in het register niets veranderd.

## Groep A: tekst en administratie

| Gat | Waar | Wat | Voorstel |
| --- | --- | --- | --- |
| gat 1 | ROL-02 (orchestrator), ROL-03 (business analist), ROL-04 (systeemarchitect), veld `verantwoordelijkheid` | Zegt nog "To-be (B-08)" voor taken die sinds PRC-08 (organisatie aanpassen) in de instructies staan. Het veld `wijziging_0_15` zegt wel dat het nu feit is. | In `verantwoordelijkheid` "To-be (B-08)" vervangen door "sinds PRC-08 in de instructies (feit, 2026-11-01)". |
| gat 2 | PRC-08 (organisatie aanpassen) | Er staat niet bij dat het pakket uit model 0.14 is uitgevoerd; dat staat alleen in B-21 (pakket PRC-08 goedgekeurd en uitgevoerd). | Veld `wijziging_0_15` bij PRC-08: "pakket uitgevoerd op WEB-26 (B-21)". |
| gat 3 | PRC-01 (nieuwe klant), PRC-02 (backlog uitbreiden), veld `risicos` | Noemen FND-042 (skills uitgebreid met een aanvulling) en OPEN-11 (proefrun van de skills) niet, terwijl `bevindingen` FND-042 bij deze processen zet. | FND-042 en OPEN-11 bij de risico's van PRC-01 en PRC-02. |
| gat 4 | skills `requirements-orchestration`, `quality-gates`, `escalation-management`, `delivery-management`, `weekmoment`, veld `dekking[].bron` | Zegt nog "Te maken: …". Bij de 10 gemaakte skills staat sinds 0.15 "(situatie 0.14)" ervoor; bij deze uitgebreide skills niet. | Ook hier "(situatie 0.14)" ervoor zetten. |
| gat 5 | skill `to-tickets`, dekking CAP-10 | Staat nog op `onbekend`, terwijl geen agent de skill heeft en geen stap hem gebruikt. | Dekking weghalen of op "geen" zetten, zoals bij `complain`. |
| gat 6 | skills `delivery-management`, `escalation-management`, `weekmoment`, dekking | Bij `activiteiten` staat GOV-07 (keuze van de volgende wens) naast ACT-02.1. GOV-07 is een akkoordmoment, geen stap. Staat er sinds 0.12. | Alleen ACT-02.1 bij `activiteiten`; GOV-07 in de tekst noemen. |
| gat 7 | ASM-36 (skills van Atlas volgens de matrix), ASM-44 (to-tickets niet vereist), FND-004 | De tekst staat nog in de toekomende tijd ("Dr. Evil legt voor"), terwijl `uitvoering` zegt dat het is gedaan. FND-004 zegt "Nog niet uitgevoerd." met daarna "Stand 0.15". | Tekst in de verleden tijd, of de oude zin als geschiedenis markeren. |
| gat 8 | ASM-43 (vragen-en-akkoordrondes als skill), veld `tekst` | Zegt nog "Zolang die skill niet bestaat, telt de stap als ontbreekt." De skill bestaat sinds PRC-08. Dit staat zo ook op de pagina, bij de aannames. | Zin in de verleden tijd zetten; `wijziging_0_15` zegt het al goed. |
| gat 9 | OPEN-03 (wanneer start UC2), veld `stand` | Zegt nog "open blijft: de hoogte van de drempel", terwijl ASM-30 en de instructies van Dr. Evil "5 of minder open taken" noemen. | `stand` gelijk zetten aan ASM-30. |
| gat 10 | `korte_namen` | CHG-029 (weergaven van model 0.15) staat er niet in. In de weergaven staat de naam er al bij. | CHG-029 opnemen in `korte_namen` en `codes-en-namen`. |
| gat 11 | PRP-023 (skill voor vragen- en akkoordrondes), PRP-028 (voorwaardelijk akkoord in GOV-06) | Het register zegt niet of de skills die een grill-sessie starten naar `vragen-en-akkoordrondes` verwijzen, en ook niet of `architect-implementation-plan` stap 5 naar GOV-06 verwijst. **Ik heb het nagekeken (feit, SKILL.md, 2026-11-01):** `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `architect-use-case-review`, `architect-modeling` en de drie `uml-`-skills van Atlas noemen `vragen-en-akkoordrondes`; `architect-implementation-plan` zegt "Stap 5 verwijst naar GOV-06". | Bij de skills een veld `uitvoering` met deze feiten. |
| gat 12 | namen van skills in Paperclip | Een paar skills hebben in Paperclip een andere sleutel dan hun naam in het register. Voorbeelden: `uml-use-cases` heet in Paperclip `architect-use-cases`, `architect-architecture-choice` heet `architect-requirements`, en de drie `uml-`-skills van Atlas heten `architect-domain-model`, `architect-sequence-diagrams` en `architect-class-diagram` (Feit: Paperclip-API, 2026-11-01). Daardoor noemt "Atlas: 8 weg" `architect-use-cases`, terwijl het register `uml-use-cases` zegt. | Bij elke skill in het register ook de sleutel in Paperclip zetten; in de weergaven staat het er al bij. |

## Groep B: een punt dat een keuze van jou vraagt

| Gat | Wat | Mijn voorstel |
| --- | --- | --- |
| gat 13 | **Claude Design: as-is of to-be?** Het systeem staat op `situatie: to-be`. De afspraak (optie A: geen eigen toegang voor de agents, de ontwerper zet altijd een export als vaste versie op het issue) staat sinds PRC-08 in de instructies. Maar er is nog geen echte opdracht geweest waarin dat moest: ACT-01.28 en ACT-02.16 (de ontwerpstappen) zijn nog niet in de praktijk gezien (ASM-61). | `to-be` laten staan, net als de processtappen (ASM-61 – processtappen blijven to-be tot ze draaien), met in de tekst dat de afspraak in de instructies staat. Pas na het eerste echte ontwerp op `as-is`. |

## Wat ik voorstel

Deze punten zijn klein en veranderen geen stap, akkoord of telling. Net als bij model 0.14 stel ik voor er geen aparte modelversie van te maken, maar ze mee te nemen in de eerstvolgende wijziging van het model. Je keurde dit goed op kaart `783a477a` (2026-11-01).
