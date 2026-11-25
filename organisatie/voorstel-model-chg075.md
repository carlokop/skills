# Voorstel CHG-075: herleiding van het domeinmodel naar de use cases

| | |
| --- | --- |
| Status | Goedgekeurd (2026-11-25, Carlo, B-55: "Ja, alleen bij Atlas"; antwoord volgt het advies, geen nacontrole nodig). Doorgevoerd door Atlas: `uml-domain-modelling` r.72 zet de traceertabel alleen in het eigen regeldocument in `docs/architecture/`; de herleiding hoort bij de oplevering (r.94). Vastgelegd in CHG-078. Was: Concept, herzien na de controle door socrates-licht. |
| Aanleiding | Bijvangst van Atlas bij PRP-082 (`ORGANISATIE.md` §10). `agents/atlas/skills/uml-domain-modelling/SKILL.md` r.72 zegt: "Vul in `docs/architecture/use-cases.md` of `STATUS.md` een traceertabel aan: use case → gebruikte domeinconcepten." `use-cases.md` is een document van Socrates (ROL-03). Dat botst met wie welk document schrijft. |
| Bron | `uml-domain-modelling` r.72 en r.94: "een regeldocument in `docs/architecture/` met levenscycli, invarianten en herleiding naar use cases en bedrijfsregels". Register: ACT-01.10 (output "domeinmodel (JSON) met regeldocument"), ROL-03 en ROL-04 (verantwoordelijkheid), ACT-01.9 (use cases met akkoord in GOV-10). `agents/socrates/agents/socrates.md` r.31 (documentlocaties van Socrates); `agents/atlas/agents/atlas.md` r.76 (statusbestand). |
| Datum | 2026-11-25 |

**Legenda.** CHG = wijziging · B = besluit van Carlo · ACT = stap · ROL-03 business analist (Socrates) · ROL-04 systeemarchitect (Atlas) · PRP = voorstel voor agents en skills · GOV = akkoordmoment · r. = regelnummer.

## Wat er nu staat

- Het domeinmodel is intern: geen eigen akkoord (`uml-domain-modelling` r.93; ACT-01.10).
- De herleiding naar use cases en bedrijfsregels staat al in het regeldocument van Atlas (r.94).
- R.72 vraagt daarnaast een traceertabel in `use-cases.md` (van Socrates) of in `STATUS.md` (van Atlas). Op het moment van ACT-01.10 zijn de use cases al goedgekeurd (GOV-10). Een tabel erbij is dan een wijziging van een goedgekeurd document.

## Opties

| Optie | Wat | Gevolg |
| --- | --- | --- |
| A. Alleen in het eigen regeldocument (advies) | R.72 vervalt; de herleiding use case → domeinconcepten staat alleen in het regeldocument van Atlas (r.94). | Elk document heeft één schrijver. Geen wijziging van een goedgekeurd document. De koppeling staat bij het domeinmodel, waar Atlas haar ook gebruikt (klassendiagram, database). Wie bij een use case wil weten welke begrippen erbij horen, zoekt in het regeldocument van Atlas. |
| B. Socrates vult de tabel aan | Atlas vraagt Socrates in hun vaste sessie (B-50) om de tabel in `use-cases.md` aan te vullen. | De koppeling staat bij de use cases. Maar de use cases zijn op dat moment goedgekeurd: de aanvulling wordt een wijziging met een voorstel en een akkoord van Carlo (B-44 antwoord 6), bij elk project en bij elke wijziging van het domeinmodel. |
| C. In `STATUS.md` van Atlas | R.72 houdt alleen de tweede plek. | Eén schrijver, maar `STATUS.md` is de statusadministratie van Atlas (fase, status, akkoorden; atlas.md r.76), geen ontwerpdocument. De herleiding staat dan op twee plekken als r.94 blijft. |

## Advies

Optie A. Volgens ROL-03 en ROL-04 schrijft Socrates de use cases en Atlas het domeinmodel. Het regeldocument van Atlas heeft de herleiding naar use cases en bedrijfsregels al (r.94). R.72 voegt daar een tweede schrijver aan het document van Socrates aan toe, en een tweede plek voor dezelfde herleiding.

## Geraakte rijen

| Plek | Nu | Voorstel (optie A) |
| --- | --- | --- |
| `agents/atlas/skills/uml-domain-modelling/SKILL.md` r.72 (door Atlas, via PRP-082) | "Vul in `docs/architecture/use-cases.md` of `STATUS.md` een traceertabel aan: use case → gebruikte domeinconcepten." | regel vervalt; r.94 blijft de plek |
| `voorstellen.md`, PRP-082 deel A | noemt r.72 niet | erbij: r.72 vervalt (CHG-075) |
| `ORGANISATIE.md` §10, open punten | "Bijvangst van Atlas bij PRP-082 ... voorstel CHG-075" | punt vervalt na het besluit |

Bij nee geldt optie B; optie C valt dan weg. Dan zijn ook geraakt: `uml-domain-modelling` r.72 (alleen `use-cases.md`), `uml-use-cases` (een sectie voor de tabel) en de werkwijze in PRC-04 voor een wijziging van goedgekeurde use cases. Dat werk ik dan uit in een vervolgvoorstel.

## Vraag aan Carlo

Deze vraag vormt het akkoord op dit voorstel.

1. Zet Atlas de koppeling tussen use cases en domeinbegrippen alleen in zijn eigen ontwerpdocument, en niet in het use-case-document van Socrates?
   - Het gaat om: nu voegt Atlas een tabel toe aan het document van Socrates, terwijl Atlas dezelfde koppeling ook al in zijn eigen document zet. Twee schrijvers aan één document geeft verwarring over wie wat mag veranderen. Omdat jij de use cases dan al hebt goedgekeurd, zou elke aanvulling een wijziging met jouw akkoord worden.
   - Advies: ja. Dan heeft elk document één schrijver, en staat de koppeling bij het domeinmodel.
   - Bij nee: Socrates vult de tabel aan op vraag van Atlas, en elke aanvulling wordt een wijziging die jij goedkeurt.

## Koppeltabel (alleen voor de controle, niet voor Carlo)

| Vraag | Element |
| --- | --- |
| 1 | `uml-domain-modelling` r.72 en r.94; PRP-082; ROL-03, ROL-04; ACT-01.10 |
