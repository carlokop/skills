# Voorstel CHG-052: hoofdsessie als vrager in PRC-04

| | |
| --- | --- |
| Status | Goedgekeurd (2026-11-25, Carlo, B-46; ronde 3 vraag 11: "Ja, mag"). Doorgevoerd in model 1.0.16 (CHG-055): de rijen hieronder staan nu in het register en in `processen/PRC-04-vragenloop.md`. In 1.0.16 is de zin "Zo is het ook nu al voor een plan zonder voorwaarde" geschrapt (W1 van de controle): zo'n plan heeft vóór GOV-06 wel een controleur. |
| Goedkeuring | Dit is een wijziging van een goedgekeurd model. Ze volgt `bpmn-conventies` (Een goedgekeurd model wijzigen): het geldende model verandert pas na het akkoord van Carlo op vraag 11, en daarna komen de rijen hieronder in register en procesbeschrijving, met een regel in `wijzigingen.md`. |
| Geldend model | PRC-04 (vragenloop en grill-sessie), stappen Goedgekeurd (2026-11-25, Carlo, B-44, B-45; model 1.0.11). |
| Aanleiding | Feitencontrole van Atlas (2026-11-25): in 0.18 beantwoordde Atlas vragen van de orchestrator over de opdeling (TL-08, `bronnen/paperclip-0.18/agentprofiel-atlas.md`). In 1.0 zijn alleen AGT-02 en AGT-03 vrager in PRC-04 (`processen/PRC-04-vragenloop.md` r.24). De hoofdsessie kan Atlas tijdens ACT-02.11 (backlog-items maken uit de werkpakketten) dus niets vragen. |
| Datum | 2026-11-25 |

**Legenda.** CHG = wijziging · PRC = proces · ACT = stap · GOV = akkoordmoment van Carlo · G = beslispunt · AGT-03 Atlas · AGT-08 hoofdsessie · AGT-10 Atlas-licht · ROL-02 regie · ASM = aanname · TL = taak van Atlas in 0.18 · K1, K3 = kanalen uit `communicatiemodel.md` (agent starten, agent hervatten).

## Geraakte rijen

De hoofdsessie is geen subagent: ze heeft geen eindbericht en stelt de vragen zelf aan Atlas. Daarom veranderen ook de stappen die een eindbericht noemen.

| Plek | Nu (goedgekeurd) | Voorstel |
| --- | --- | --- |
| `register.yaml`, ACT-04.1, `uitvoerder` | "vrager (AGT-02 of AGT-03)" | "vrager (AGT-02, AGT-03, of AGT-08 bij een vraag aan AGT-03 over zijn werkpakketten tijdens ACT-02.11)" |
| `register.yaml`, ACT-04.2, `output` | "alle vragen van de ronde genummerd, elk met aanbevolen antwoord, in het eindbericht; status wacht op antwoorden" | dezelfde tekst, plus: "Is AGT-08 de vrager, dan start of hervat zij AGT-03 direct met de vragen (K1 of K3); er is geen eindbericht" |
| `register.yaml`, ACT-04.52, `output` | "escalatie in het eindbericht: open punten, beide standpunten, advies" | dezelfde tekst, plus: "Is AGT-08 de vrager, dan legt zij de escalatie direct voor (ACT-04.53)" |
| `register.yaml`, ACT-04.55, `uitvoerder` | "vrager" | "vrager; is AGT-08 de vrager, dan schrijft zij het contextverslag en bevestigt AGT-03 het (ACT-04.56; `vragen-en-akkoordrondes` werkwijze 6)" |
| `processen/PRC-04-vragenloop.md` r.24 (lanes) | "vrager: AGT-02 (agent Socrates) of AGT-03 (agent Atlas);" | "vrager: AGT-02 (agent Socrates) of AGT-03 (agent Atlas); de hoofdsessie (AGT-08) alleen bij een vraag aan Atlas over zijn werkpakketten tijdens ACT-02.11;" |
| `processen/PRC-04-vragenloop.md` r.53, r.61, r.64 (ACT-04.2, 04.52, 04.55) | zoals in het register | zoals de nieuwe tekst in het register hierboven |
| `processen/PRC-04-vragenloop.md` r.90 (Mermaid-diagram) | `subgraph vr["Vrager: AGT-02 of AGT-03"]` | `subgraph vr["Vrager: AGT-02 of AGT-03; AGT-08 alleen bij een vraag over de werkpakketten"]`. De routes in het diagram veranderen niet. |

## Wat er gebeurt als een werkpakket moet veranderen

Het antwoord van Atlas kan betekenen dat een werkpakket verandert.
- **Ging het plan mee in GOV-06** (er gold een voorwaarde): dan is het plan goedgekeurd, en loopt de wijziging via een wijzigingsverzoek van Atlas (ACT-04.4), PRC-03 en GOV-12. Dat staat al in het goedgekeurde PRC-04 (G-04.1).
- **Ging het plan niet mee in GOV-06:** dan past Atlas het plan aan, en maakt de hoofdsessie de backlog-items op het aangepaste plan. De controle blijft de toets van de backlog-items door Atlas vóór GOV-18 (ACT-03.6, ASM-83). Er komt geen apart akkoord op het plan en geen controle door atlas-licht; ASM-83 sluit atlas-licht bij GOV-18 uit, en de opmerking bij GOV-18 verandert niet.

Geen van beide vraagt een nieuwe stap, een nieuw beslispunt of een wijziging van GOV-18. Restrisico: de aanpassing van een plan dat niet in GOV-06 zat, heeft geen eigen tweede lezer; Carlo ziet het resultaat via de backlog bij GOV-18.
- Gewijzigd in 1.0.15 (CHG-054): in 1.0.14 ging het aangepaste plan als eigen document mee in GOV-18, met AGT-10 als controleur. Dat stond niet in het goedgekeurde model (opmerking bij GOV-18, ASM-83) en is vervallen.

## Gevolgen

- **Telling:** zoals bij elke vraag tussen agents. Na 2 rondes zonder voortgang escaleert de hoofdsessie naar Carlo (GOV-08).
- **RACI:** de generieke lane "vrager" krijgt ROL-02 erbij (`register.yaml`, kop van `raci`).
- **Skills (doorvoering via PRC-08, alleen bij ja):**
  - `vragen-en-akkoordrondes` werkwijze 3 noemt de hoofdsessie niet als vrager; die regel komt erbij (vermeld bij PRP-081);
  - `regie` of `backlog-regie` beschrijft de route (PRP-072, PRP-077).
  - In dit traject verandert niets aan agents of skills (B-39).

## Bij nee

Het geldende model blijft. Een onduidelijkheid in de werkpakketten blijkt pas bij de toets van Atlas vóór GOV-18 (ACT-03.6).
