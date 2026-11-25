> **Vervallen** – geldend is `paperclip-mapping` r15. Dit is een archiefkopie; niet lezen of gebruiken.

# Paperclip-mapping (ronde 2)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-30, Carlo, kaart `f261b9ac`)**, alle 15 onderdelen (besluit B-12). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `paperclip-mapping` (revisie 8). Vóór de goedkeuring: **Concept**, versie 0.10 (model 0.10, CHG-015, B-10). **Tot je 0.10 goedkeurt, geldt 0.8** (Goedgekeurd 2026-10-29, Carlo, kaart `66da5f92`; document `paperclip-mapping`). |
| Bron | skill `paperclip` (statussen, prioriteiten, interacties, blockers, `parentId`, routines, `executionPolicy`-stages in `references/api-reference.md`), Paperclip-API (agents, routines; 2026-10-27; agents opnieuw 2026-10-30), `rolanalyse-orchestrator`, de goedkeuringskaarten op WEB-19 |

**Nieuw in 0.10** (CHG-015, B-10, comment `6e69ec6e`):
- Nieuwe rijen bij de concepten: design systeem en ontwerpen, paginalijst en brieven, uitbreidingslijst, GOV-15 en GOV-14 als pakket- of documentkaart.
- Nieuwe punten **M-11** (geen ontwerpfunctie in Paperclip), **M-12** (volgorde van de uitbreidingslijst) en **M-13** (akkoord op een ontwerp dat jij zelf maakt). Open.
- De andere M-nummers zijn niet veranderd.

**Nieuw in 0.8** (CHG-011, jouw keuze B-08, kaart `2b7a6d2d`):
- De rijen die bij de variant hoorden (ACT-01.51, 01.54, 01.56, 01.57, ACT-02.51, 02.53 t/m 02.55, ACT-04.51 t/m 04.54, GOV-10, GOV-11) gelden nu voor de basis (M-1, M-3 en M-4 verwezen er al naar). ACT-01.51 en de escalatie ACT-04.52 t/m 04.54 zijn bij de concepten toegevoegd.
- Nieuw: ACT-01.25, ACT-02.14, G-01.5 en G-02.6 (Atlas toetst de taken, PRP-027).
- GOV-10 en GOV-11 zijn een `request_item_verdicts`-kaart met één item per document (Feit: zo werken de kaarten op WEB-19).
- Nieuw punt **M-10** (review-stage en onderliggende issues). Open.
- M-1 en M-9 zijn aangepast. De andere M-nummers zijn niet veranderd.
- Na controle-model-v08: L-13 (pakketkaart met `verdicts` alleen goedkeuren en afkeuren; de producent handelt pas als elk document een oordeel heeft, ASM-18), L-03 (escalatie GOV-08 ook na 2 rondes op controle 1 van ACT-02.53).

Het model is eerst abstract. Per activiteit staat in de procesbeschrijving een kolom *Paperclip*. Hier staat het overzicht: welk Paperclip-concept we gebruiken en waar het niet netjes past (⚠).

## Concepten (Feit, bron: skill `paperclip`)

| Procesbegrip | Paperclip-concept | Gebruikt in |
| --- | --- | --- |
| Opdracht, overdracht, vraag tussen agents | **Issue** met **toewijzing**; vervolgwerk met `parentId` | ACT-01.1, 01.2, 01.8, 01.15, 01.51, 02.4, 04.2 |
| Deliverable | **Document** op het issue, met revisies | elke activiteit die een document oplevert |
| Akkoord van de project owner | Nu: **interactie** `request_confirmation`, gebonden aan een documentrevisie; issue `in_review` (zo liep GK-1). Alternatief: **`executionPolicy`-stage `approval`** met jou als deelnemer (OPEN-10). Bij de use cases (GOV-02) moet jouw akkoord na de review-stage van Atlas komen: zie M-9. | PRC-03 (GOV-01 t/m GOV-13) |
| Akkoord op een pakket (GOV-10, GOV-11) | **Interactie** `request_item_verdicts` met **één item per document**; je keurt per document goed of af. Feit: zo werken de goedkeuringskaarten op WEB-19 (kaart `2b7a6d2d`). De skill kent ook `defer` en gedeeltelijke antwoorden: een gedeeltelijk antwoord houdt de kaart `pending` en wekt de producent; pas als elk item een oordeel heeft, is de kaart `answered` (Feit: skill `paperclip`, `request_item_verdicts`). Het model zet `verdicts` op alleen goedkeuren en afkeuren (`approve`, `reject`); de producent handelt pas als elk document een oordeel heeft (Aanname: ASM-18). | ACT-03.1, ACT-03.2, ACT-03.3 (GOV-10, GOV-11), PRC-05 |
| Review door een andere agent (Atlas toetst) | **`executionPolicy`-stage `review`** met Atlas als deelnemer op het issue van de producent; "changes requested" stuurt terug naar de producent. De skill raadt aparte toets-issues en losse comments hiervoor af. | ACT-01.23 en ACT-02.13 (toets use cases, B-06) |
| Atlas toetst de taken (PRP-027) | **`executionPolicy`-stage `review`** met Atlas op het **bovenliggende issue** van de slice (epic). Atlas leest de taken via dat issue. ⚠ M-10 | ACT-01.25 en ACT-02.14 (G-01.5, G-02.6) |
| Vragen aan de project owner | **Interactie** `ask_user_questions` | ACT-01.4, ACT-01.21, ACT-02.2 |
| Afkeuring met commentaar | afgewezen kaart (bij een pakket: een afgewezen item) of een **comment**; een comment van de gebruiker vervangt een open kaart | PRC-03, PRC-05 |
| Vraag beantwoord | **Comment** + issue `done`; de vrager wordt gewekt via de blocker | PRC-04 |
| Wachten op ander werk | `blocked` met **`blockedByIssueIds`**; wake `issue_blockers_resolved` | PRC-04, PRC-06 |
| Blokkade zonder issue | `blocked` met een concrete actie en eigenaar | PRC-06 |
| Escalatie | issue aan Dr. Evil, daarna een **interactie** voor de project owner | PRC-04 (ACT-04.52 t/m 04.54), PRC-05, PRC-06, G-01.5, G-02.6, ACT-02.53 (controle 1) |
| Epic | **bovenliggend issue** met onderliggende issues | ACT-01.20, ACT-02.11 |
| Vaste trigger (flowcheck, weekmoment) | **Routine** | PRC-07, ACT-02.51 |
| Design systeem en paginaontwerp (nieuw in 0.10) | **Bijlage** of link op het opdracht-issue, of een branch in de repository (ontwerp in code met mock data). ⚠ M-11 | ACT-01.52, ACT-01.28, ACT-02.16 |
| Paginalijst, paginabrieven, visie (nieuw in 0.10) | **Document** op het issue van Socrates (`pages.md`, `vision.md`), met revisies | ACT-01.26, ACT-01.27, ACT-01.58, ACT-02.15, ACT-02.56 |
| Akkoord "Richting" (GOV-15, nieuw in 0.10) | **Interactie** `request_item_verdicts` met één item per document, zoals GOV-10 en GOV-11. Een ontwerp dat jij zelf maakte, staat er niet als item op (ASM-28). ⚠ M-13 | ACT-01.58 → PRC-03 |
| Akkoord paginaontwerp (GOV-14, nieuw in 0.10) | **Interactie** `request_item_verdicts`: ontwerp en bijgewerkte brieven als aparte items | ACT-02.56 → PRC-03 |
| Uitbreidingslijst (nieuw in 0.10) | Eén **issue** per uitbreiding met status `backlog`, als onderliggend issue van het projectissue; verwijzing naar de paginalijst in de beschrijving. ⚠ M-12 | ACT-01.29, ACT-02.1, ACT-02.17 |

## Waar het niet netjes past (⚠)

| # | Stap | Probleem | Gevolg in het model | Label |
| --- | --- | --- | --- | --- |
| M-1 | ACT-05.1, ACT-04.51 Rondes tellen | Niet gevonden dat Paperclip afkeurings- of vraagrondes telt. Een stage legt wel elk besluit vast. | De producent of vrager telt zelf, op basis van de geschiedenis van het issue; bij een pakket per document. De telling en de escalatie lopen via `vragen-en-akkoordrondes` (PRP-023, nog te maken). | Open (niet gevonden in de skill, niet geverifieerd; OPEN-10) |
| M-2 | ACT-01.20, ACT-02.11 Epics | Geen eigen epic-begrip gevonden. | Bovenliggend issue als epic (ASM-02). | Aanname |
| M-3 | ACT-01.57, ACT-02.54, eindpunt "Backlog gereed" | Geen concept voor "backlog gereed" van een slice. | Een comment op het opdracht-issue en dat issue op `done`. | Aanname |
| M-4 | ACT-02.51, PRC-04 en PRC-06 (flowcheck) | De routines van V12 bestaan nog niet; Dr. Evil heeft de heartbeat uit (FND-013). | Zonder routine ziet Dr. Evil een blokkade of een lege voorraad alleen als iemand hem een issue toewijst. | Feit (Paperclip-API, 2026-10-27) |
| M-5 | PRC-03 Geen reactie van de project owner | Geen termijn of herinnering op een kaart gevonden. | Openstaande akkoorden komen op het weekmoment (OPEN-09). | Open (niet gevonden in de skill, niet geverifieerd) |
| M-6 | PRC-04 Vraag tussen agents | Een vermelding wekt een agent niet als opdracht. | Elke vraag is een eigen issue (ASM-08). Dat zijn veel kleine issues. | Feit (AGENTS.md Socrates; feitencheck WEB-20) |
| M-7 | ACT-04.2, ACT-06.2, PRC-05 "gestopt" | Een geannuleerd blokkerend issue telt niet als opgelost; de wachtende taak wordt niet gewekt. | De vrager, eigenaar of Dr. Evil haalt de blocker weg of vervangt hem (PRC-06, route "geannuleerd of geen voortgang"). | Feit (skill `paperclip`, Issue Dependencies) |
| M-8 | **Vervallen (0.5, TL-V7)**: ACT-01.19, ACT-02.10, ACT-01.55 en ACT-02.52 bestaan niet meer; Atlas leest zijn eigen werk niet mee. | | | |
| M-9 | ACT-01.23 en ACT-02.13 met daarna GOV-10 (PRC-01) of GOV-02 (PRC-02) | Na de laatste stage gaat een issue op `done` (skill `paperclip`, api-reference: "If this was the final stage, the issue reaches actual `done`."). Is de review van Atlas de enige stage, dan staat het issue van Socrates op `done` vóór jouw akkoord op de use cases. | De review-stage van Atlas moet gevolgd worden door een `approval`-stage met jou op hetzelfde issue. Daarmee is OPEN-10 voor de use cases eigenlijk al beslist, tenzij je de goedkeuringskaart wilt houden; dan moet de toets anders worden ingericht. In PRC-01 is het akkoord de pakketkaart van GOV-10 (`request_item_verdicts`), geen `approval`-stage; wat dat voor M-9 betekent, heb ik niet vastgesteld. | Feit (skill `paperclip`); keuze: Open (OPEN-10) |
| M-10 | ACT-01.25, ACT-02.14 Taken toetsen tegen de werkpakketten | Een review-stage hoort bij één issue, maar de taken zijn aparte onderliggende issues. | De stage staat op het bovenliggende issue (epic) van de slice; Atlas leest de taken via dat issue. Of Paperclip de onderliggende issues tegenhoudt tot de review klaar is, heb ik niet vastgesteld. | Open (niet vastgesteld) |
| M-11 | ACT-01.52, ACT-01.28, ACT-02.16 Ontwerp | In de skill `paperclip` heb ik geen ontwerpfunctie gevonden (geen tekenen, geen visuele review). Een ontwerp is een bijlage, een link naar een grafische tool of code in de repository. | Het akkoord gaat over de bijlage, de link of een vaste commit; de kaart verwijst ernaar. Waar de ontwerpen staan, kies jij (OPEN-14). | Open (niet gevonden in de skill; OPEN-14) |
| M-12 | ACT-01.29, ACT-02.1, ACT-02.17 Uitbreidingslijst | Een issue heeft een prioriteit met vier waarden (`critical`, `high`, `medium`, `low`; Feit: skill `paperclip`). Een vaste volgorde over meer dan vier uitbreidingen heb ik als veld niet gevonden. | De volgorde staat in het weekmoment-issue (top 5, skill `weekmoment`) of in de beschrijving van het projectissue; Dr. Evil leest die af (ASM-14). | Open (niet gevonden in de skill, niet geverifieerd) |
| M-13 | GOV-15, GOV-14 Ontwerp van jezelf | Op een `request_item_verdicts`-kaart beoordeel je documenten van een ander. Een ontwerp dat jij zelf maakte, hoeft niet langs jou. | Dat ontwerp staat niet als item op de kaart; alleen de bijgewerkte brieven (ASM-28). Is er geen ander item, dan volgt geen kaart: bij GOV-15 is er altijd minstens de architectuurkeuze. | Aanname (ASM-28) |
