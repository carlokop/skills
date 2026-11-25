# Gaten in model 0.11 (ter informatie)

| | |
| --- | --- |
| Status | **Ter informatie** (2026-10-30). Gevonden bij het bijwerken van de weergaven naar model 0.11 (CHG-020). Er is **niets aangepast** in het goedgekeurde register of de goedgekeurde procesbeschrijvingen. De weergaven volgen het register. |
| Bron | meldingen van de agents die de weergaven en de pagina bijwerkten (A: organisatie en procescatalogus; B: skillmatrices; C: verantwoordelijkheden; D: skill-specificaties en profiel Atlas; E: pagina 0.5) en van de twee controles (`controle-chg020` K-05 t/m K-07, `controle-pagina-0-5` P-02, P-03, P-08) |
| Voorstel | Herstel als **CHG-021** in model 0.12, met modelcontrole en jouw akkoord, net als CHG-018 bij 0.10. Groep A en C zijn tekst en administratie; groep B vraagt een keuze van jou. |

## A. Teksten die achterlopen op 0.11 (geen inhoudelijke keuze)

| # | Waar | Wat er staat | Wat 0.11 zegt |
| --- | --- | --- | --- |
| A-1 | register, ACT-02.1 (`escalatie`) | zonder antwoord "herinnering op het weekmoment (B-09)" | elke werkdag om 09:00 in het herinneringsbericht, en op het weekmoment (B-13, ASM-35); GOV-07 en ACT-02.2 zeggen dat al |
| A-2 | register, PRC-07 (`start`) | "Maandagochtend" | maandag 04:00, als routine (B-13, ASM-32) |
| A-3 | register, ASM-24 | "pas op het weekmoment herinnert" | aangevuld door B-13 en ASM-35 |
| A-4 | register, CAP-20 en CAP-25 | CAP-20: "voorraad klare taken"; CAP-25 noemt Claude Design niet | ACT-02.51 telt de open taken van de lopende slice; ontwerp in Claude Design met export (B-13, PRP-042) |
| A-5 | register, ACT-01.17, ACT-02.8 en GOV-06 | PRP-043 staat er niet bij | bij P1 maakt `architect-api-contracts` het contract per slice uit het contentmodel (B-14: PRP-043) |
| A-6 | register, `architect-use-case-review` | geen wijziging voor 0.11; doel en input noemen de paginabrieven niet | toets via een toets-issue (B-14: PRP-041), ook voor de brieven |
| A-7 | `bevindingen`, kolom *Stand* | FND-004 en FND-021: "open (OPEN-05)"; FND-005: 3 akkoorden en ASM-19 geldend; FND-013: drempel open, geen tijden; FND-025: poorten van 0.8; FND-027: herinnering op het weekmoment; FND-015 en FND-017: GOV-14/15 en "alleen bij P3" ontbreken | OPEN-05 beantwoord (ASM-36); 4 akkoorden, ASM-19 vervallen; drempel 5 open taken, routines 04:00 en 09:00; poorten volgens ASM-38; dagelijks bericht (B-13) |
| A-8 | `paperclip-mapping`, M-1 | verwijst naar OPEN-10 als open | OPEN-10 is beantwoord (B-14: PRP-040) |
| A-10 | register, systeem Claude Design (`label`) | "toegang voor de agents: open (PRP-042)" | PRP-042 is besloten (B-14); alleen het uitzoeken van de toegang staat nog open (Dr. Evil, PRC-08) |
| A-11 | register, PRC-02 (`input`, `output`) | eindigen op "(0.10)" | versiemarkering weglaten |
| A-12 | `prc-03`, ACT-03.1 | label "Voorstel 0.11 (PRP-040)" | PRP-040 is besloten (B-14) |
| A-13 | `uitbreidingsgids` §6 | eerstvolgende vrije wijziging: CHG-020 | CHG-020 is nu in gebruik (de weergaven van 0.11 en pagina 0.5); de volgende is CHG-021 |
| A-14 | register, `architect-architecture-choice` (dekking, `bron`) | "in PRC-01 geen eigen stop: het akkoord is het pakket GOV-11" | sinds 0.10 zit de architectuurkeuze in GOV-15 |
| A-9 | `prc-04` | Atlas meldt zijn toetsopmerking "via de review-stage" | via het toets-issue (B-14: PRP-041) |

## B. Punten die een keuze van jou vragen

| # | Wat | Mijn voorstel |
| --- | --- | --- |
| B-1 | **Welke skills houdt Atlas?** ASM-36 noemt drie skills die weggaan (`paperclip-create-agent`, `paperclip-board`, `to-spec`) en zegt dat `to-tickets` blijft "want het model gebruikt hem". Geen enkele stap in het model gebruikt `to-tickets`. Over zijn andere skills (`uml-use-cases`, `paperclip-converting-plans-to-tasks`, `improve-codebase-architecture`, `first-task`, `para-memory-files`) zegt het model niets. | Dr. Evil legt de volledige lijst per agent aan je voor in het pakket (PRC-08), zoals ASM-36 al zegt. In het model: `to-tickets` als "beschikbaar, niet vereist", en de rest van de lijst bij PRC-08. |
| B-2 | **Eén toets-issue per ronde, of hetzelfde issue opnieuw?** PRP-041 zegt "zoals een vraag", maar niet wat er bij een tweede toetsronde gebeurt. | Per ronde een nieuw toets-issue, zoals bij een vraag (PRC-04); Atlas zet zijn opmerkingen als comment en zet het issue op `done`. |
| B-3 | **Contentmodel bij P1: één keer of per slice?** PRP-043 zegt "één keer, bij het technisch ontwerp" (ACT-01.60), maar het register koppelt de skill ook aan het ontwerp per slice in UC2 (ACT-02.7). | Het contentmodel komt bij het technisch ontwerp en wordt per slice bijgewerkt als een uitbreiding dat nodig maakt (ACT-02.7). |
| B-4 | **Wie beslist bij G-02.8** (loopt er al een doorloop)? De beslissing heeft geen rol. | Dr. Evil (ROL-02), zoals ASM-33 het al laat lezen. |

## C. Koppelingen en skillvelden (administratie, telling verandert niet)

| # | Wat |
| --- | --- |
| C-1 | Drie skills van Dr. Evil (`delivery-management`, `escalation-management`, `weekmoment`) noemen ACT-02.2 in hun dekking, maar ACT-02.2 is jouw stap zonder skills. Het herinneringsbericht hangt aan geen eigen stap van Dr. Evil. Voorstel: de dekking naar ACT-02.1 en GOV-07 zetten. |
| C-2 | `paperclip` is gekoppeld aan ACT-01.51 (project aanmaken), maar zijn dekking noemt CAP-01 niet. |
| C-3 | `architect-modeling` hangt aan ACT-01.11, maar zijn dekking noemt die stap niet (al sinds 0.10). |
| C-4 | ACT-02.6 en ACT-02.7: de UML-skills en `architect-database` staan daar op "bestaat", in UC1 op "uitbreiden". |
| C-5 | Afhankelijkheden zijn niet per profiel: `architect-api-contracts` hangt af van `uml-class-diagram`, dat alleen bij P3 bestaat. |
| C-6 | In de `bron` van een paar akkoordmomenten ontbreken de labels B-12 (bijvoorbeeld PRP-033 bij GOV-01, PRP-034 bij GOV-09, 10, 11). |
| C-7 | `architect-cms-configuratie` heeft in het register alleen `architectuurprofielen` als afhankelijkheid; de specificatie noemt ook `architect-architecture-choice` (het profiel-ADR). |
| C-8 | `architect-modeling` hangt voor ACT-01.12 en ACT-01.13 onder een andere capability dan die stappen in de koppelingen hebben. |
| C-9 | GOV-07 en ACT-02.2 noemen B-13 en ASM-35 niet in hun label; op de pagina ontbreken die labels daardoor. |
