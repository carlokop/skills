# Gaten in register 0.10 (gevonden bij CHG-017)

| | |
| --- | --- |
| Status | **Herstel goedgekeurd (2026-10-30, Carlo, kaart `a16387c4`)**: deze lijst wordt uitgewerkt als **CHG-018** in concept 0.11 (`v011-`documenten). Het goedgekeurde register 0.10 is niet aangepast; dat gebeurt pas na je akkoord op 0.11. |
| Bron | Gevonden bij het bijwerken van de weergaven en de pagina (CHG-017). De controles (`controle-chg017`, `controle-pagina-0.4`) hebben ze op steekproef bevestigd. |
| Voorstel | Herstel als **CHG-018** in een nieuwe versie (0.11), met modelcontrole en jouw akkoord. Daarbij verandert de inhoud van de processen niet. Wel kan de telling van de skillstatus verschuiven (zie groep C). |

## A. Teksten die achterlopen op wat je in B-12 hebt besloten

| # | Waar | Wat klopt niet | Herstel |
| --- | --- | --- | --- |
| A-1 | ASM-19 | PRP-036 (4 akkoorden in UC1) heb je goedgekeurd. Daarmee vervalt ASM-19 ("vorm met 3 akkoorden"), maar die staat nog als bevestigde aanname in het register, en zo staat het ook op pagina 0.4. | ASM-19 naar de vervallen ID's (reden: B-12, PRP-036). |
| A-2 | ASM-18 | Er staat nog "0.10 (Concept)". De tekst noemt de architectuurkeuze nog als eerste document van GOV-11, maar die zit nu in GOV-15. | Label naar B-12, tekst bijwerken. |
| A-3 | ASM-17, ASM-14, GOV-07 | De visie en de paginalijst ontbreken in GOV-10. Volgens de tekst komt de volgende wens uit "de volgorde op het backlog", terwijl die sinds 0.10 uit de uitbreidingslijst komt. | Teksten aanvullen. |
| A-4 | ROL-01 t/m ROL-04 | Wat elke rol krijgt en oplevert, is niet bijgewerkt voor 0.10. Bij ROL-01 staat nog "drie akkoorden". | Velden aanvullen. |
| A-5 | GOV-02, GOV-11, GOV-12 | De teksten volgen de flow van 0.10 niet helemaal. Bij GOV-02 ontbreekt de vraag "ontwerp nodig?" (G-02.7). Bij GOV-11 staat nog "kernontwerp" waar het nu "technisch ontwerp" heet. GOV-12 mist de uitbreiding uit PRC-02. | Gelijktrekken met PRC-02. In de weergave van de verantwoordelijkheden staat nu al "(volgt PRC-02)". |
| A-6 | GOV-03, 04, 05, 13 | In UC2 gelden deze akkoorden alleen bij profiel P3, maar dat staat er niet bij. | "bij P3" toevoegen. |
| A-7 | PRC-01 en PRC-02, risico's | Het restrisico uit FND-033 ontbreekt: jij bent ontwerper én goedkeurder, en het ontwerp ligt op het kritieke pad. | FND-033 toevoegen. |
| A-9 | Uitbreidingsgids 0.4, §6 | Daar staan PRP-031, PRP-032 en PRP-034 nog als "Voorstel", maar ze zijn besloten in B-12. Ook pagina 0.4 laat dat in sectie 10 zo zien, want die neemt de gids letterlijk over. | Labels naar B-12. |
| A-8 | CAP-11 | Heet nog "API-contracten ontwerpen", terwijl het product nu het bouwcontract is. | Naam bijwerken. |

## B. Wie doet wat: niet helemaal vastgelegd

| # | Waar | Wat ontbreekt | Herstel |
| --- | --- | --- | --- |
| B-1 | GOV-14 | Het ontwerp en de brieven komen van twee makers. De regel "pas verder als elk document een oordeel heeft" (ASM-26) noemt alleen GOV-15. | ASM-26 ook voor GOV-14 laten gelden, of GOV-14 als één kaart met een oordeel per document vastleggen. |
| B-2 | Templatecontract (P1) | Twee skills noemen het templatecontract: `architect-cms-configuratie` en `architect-api-contracts`. Wie wat doet, staat er niet. | De taken verdelen. Bijvoorbeeld: `architect-cms-configuratie` levert het contentmodel, `architect-api-contracts` maakt het contract per slice. |
| B-3 | `quality-gates` | Bij welke stap elke nieuwe poort van 0.10 hoort, staat niet in het register. In de skill-specificatie is dat nu als Voorstel afgeleid. | Per poort de stap vastleggen. |
| B-4 | Uitbreidingslijst | Niemand controleert de lijst. Jij bepaalt de inhoud en de volgorde. | Bevestigen dat dit zo bedoeld is. |

## C. Koppelingen van skills: kan de telling veranderen

| # | Waar | Wat | Gevolg |
| --- | --- | --- | --- |
| C-1 | ACT-01.3, ACT-02.3, ACT-02.12, ACT-02.6, ACT-01.59 | De skill staat op "bestaat", terwijl de uitbreiding uit 0.10 daar al nodig is. | Gaat de status naar "uitbreiden", dan schuiven er maximaal 5 activiteiten van *aanwezig* naar *gedeeltelijk*. |
| C-2 | ACT-02.6, ACT-02.7, ACT-02.55 | De skills per profiel en `architectuurprofielen` zijn alleen aan de UC1-stappen gekoppeld, niet aan de UC2-stappen die hetzelfde doen. | Koppelen; die stappen kunnen dan van *gedeeltelijk* naar *ontbreekt* gaan. |
| C-3 | `architectuurprofielen`, `requirements-analysis`, `backlog-management`, `architect-database` en 6 andere skills | De dekking en de beschrijving van de wijziging lopen achter op de koppelingen. | Alleen administratie, geen gevolg voor de telling. |
| C-4 | ACT-01.28, ACT-02.16 | Jouw ontwerpstappen hebben een extra statusveld dat het controlescript verkeerd telt. De juiste telling is 25 / 25 / 23 / 9. | Veld gelijktrekken met ACT-01.52. |
