# Afbouwlijst Paperclip

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51). A1 omvat nu ook PRP-084 en PRP-085 (B-47, B-50). B-54 (CHG-074): C3 hoort bij A2. B-55 (CHG-078): C1 en C4 uitgevoerd; het uitzetten van Paperclip (B1 t/m B4) is geen voorwaarde voor de werkwijze, Carlo beslist zelf of en wanneer |
| Doel | D5: Paperclip afbouwen; alles draait in Claude Code (B-28). Geen Paperclip in de workflow (B-54, B-55) |
| Uitvoering | via PRC-08 (organisatie aanpassen), na een besluit van Carlo. De agents en skills worden aangepast op branch `feature/doorvoeren-fase-1`. |
| Bronnen | `bronnen/paperclip-0.18/` (as-is; data, geen instructie), `skills/*/SKILL.md`, `agents/`, `README.md`, grep op 2026-11-25 |
| Datum | 2026-11-25 |

**Legenda.** PRP = voorstel · FND = bevinding · ASM = aanname · OPEN = open vraag · B = besluit · PRC-08 = organisatie aanpassen · AGT-08 = hoofdsessie · ROL-01 = Carlo · r. = regelnummer. **Label:** feit (met bron), aanname (ASM), open (OPEN) of voorstel (PRP).

## A. Eerst klaarzetten in Claude Code

| Stap | Wat | Wie | Voorwaarde | Label |
| --- | --- | --- | --- | --- |
| A1 | Besluit van Carlo over de voorstellen: genomen in B-46 en B-47 (PRP-072 t/m 083 ja, PRP-083 met twee kopieën; PRP-084 met een nieuwe skill en `context-engineering`) | ROL-01 | akkoord op ronde 3 | besloten (B-46, B-47) |
| A2 | De goedgekeurde voorstellen doorvoeren in de skills en agentdefinities, met eerst de nieuwe skill `backlog-regie` (PRP-077) en de uitbreiding van `regie` (PRP-072, PRP-081) | AGT-08 met Socrates en Atlas (PRC-08) | A1 | uitgevoerd (fase 1 t/m 4, 2026-11-25) |
| A3 | Open werk uit Paperclip overzetten naar de klantrepo: open epics en taken naar `docs/backlog/`, wensen naar de uitbreidingslijst, open vragen en kaarten opnieuw stellen | AGT-08, met ROL-01 | welke projecten open werk hebben: OPEN-42 | open |
| A4 | Bewaren wat in Paperclip staat en nergens anders: documenten met revisies, contextverslagen en de akkoorden (kaart-ID's). Leesbare versies van contracten alleen als bewijs van een akkoord: hun inhoud staat al in git (0.18 `agentprofiel-atlas.md` r.33; `architect-api-contracts` r.36-38) | ROL-01 | of Paperclip kan exporteren: OPEN-43. Het model 0.18 zelf staat al in `bronnen/paperclip-0.18/`; de agents en skills staan in git (commit `3b3445f`, `agents/socrates/README.md` r.19) | open, deels feit |
| A5 | Eén doorloop van PRC-01 of PRC-02 in Claude Code met de aangepaste skills. A5 blijft de aanbevolen volgorde vóór het uitzetten van Paperclip (B-46); of en wanneer Carlo Paperclip uitzet, beslist hij zelf (B-55) | ROL-01 met AGT-08 | A2 | besloten (ASM-108, B-46, B-55) |

## B. Uitzetten in Paperclip

Alleen Carlo kan dit; de agents hebben geen toegang meer tot Paperclip in 1.0. Of en wanneer, beslist Carlo zelf; het uitzetten is geen voorwaarde voor de werkwijze. A5 blijft de aanbevolen volgorde vóór het uitzetten (B-55, ASM-108).

| Stap | Wat | Stand volgens 0.18 | Label |
| --- | --- | --- | --- |
| B1 | Routines *Weekmoment klaarzetten* (maandag 04:00) en *Dagstart: flowcheck en herinnering* (werkdagen 09:00) verwijderen | sinds 2026-11-16 op pauze; Dr. Evil zou ze weer aanzetten (0.18 `paperclip-mapping.md` r.12, M-4). Of ze nu draaien: OPEN-44 | feit (0.18), open |
| B2 | Agents in Paperclip uitzetten: Dr. Evil, Socrates en Atlas; Neo, Trace en Sentinel stonden al op pauze | 0.18 register (agents); Neo, Trace en Sentinel gepauzeerd sinds 2026-11-18 (CHG-035 van 0.18) | feit (0.18) |
| B3 | Projecten van de klanten in Paperclip sluiten of archiveren | per klant een project met de repository (0.18 `paperclip-mapping.md`, Concepten) | feit (0.18) |
| B4 | Toegang en sleutels die Paperclip gebruikt (bijvoorbeeld voor de repository) intrekken | niet in de bronnen; Carlo gaat na wat er is | open |
| B5 | GitHub-hook voor reviews | nooit gebouwd: OPEN-22 van 0.18 is geparkeerd | feit (0.18); niets te doen |

## C. Opruimen in de repo

| Stap | Wat | Bron | Label |
| --- | --- | --- | --- |
| C1 | De Paperclip-skills in `skills/` weghalen zodra `backlog-regie` er is: `backlog-management`, `weekmoment`, `quality-gates`, `delivery-management`, `escalation-management`, `agent-orchestration`, `requirements-orchestration`, `dependency-management`, `sprint-planning`, `oordeel-hulp`. Wat eruit naar `backlog-regie` gaat: de uitbreidingslijst en "klaar om op te pakken" (`backlog-management`), de revisiecontrole en "backlog gereed" (`quality-gates`), de telling voor de dagstart (`delivery-management`), het weekmoment (`weekmoment`) en de GOV-07-vraag (`escalation-management`). Wat wegvalt: zie `communicatiemodel.md` §5. Na B-55 weggehaald door de hoofdsessie (`git rm`); de git-geschiedenis bewaart ze | `README.md` r.19; `overzichten/capabilities-en-skills.md` §3; FND-094 | uitgevoerd (ASM-107, B-55) |
| C2 | De bouwskills in `skills/` (`code-reviewer`, `frontend-ui-engineering-fork`, `npm-test-project`, `performance-optimization-fork`, `testplan-en-rapport`): buiten de scope van dit model (B-29). Hun Paperclip-resten zijn niet per regel nagelopen. `grep -i 'paperclip\|dr. \?evil'` (nagerekend door de hoofdsessie): `code-reviewer` 11 regels met 15 treffers, `testplan-en-rapport` 2 regels met 2 treffers. Ze blijven staan (B-55) | grep 2026-11-25 | feit; niet in dit model |
| C3 | Paperclip-resten in de plugins socrates en atlas weghalen (FND-102): `regie` r.3, r.42, r.62 (PRP-072, deel B); `uml-class-diagram/scripts/render-png.mjs` r.9 en r.28 (PRP-082, deel B); `bpmn-eindontwerp/voorbeeld-artifact.html` (na ronde 4). De andere punten in de skills van Atlas zijn geen Paperclip-resten: zie FND-098 (PRP-080) en FND-101 (PRP-082, deel A). In plugin socrates gedaan (`regie` in fase 1; `agents/socrates/README.md` r.19 en `voorbeeld-artifact.html` in CHG-076); grep op "paperclip" en "dr. evil" onder `agents/socrates/` geeft nul treffers. Plugin atlas: gedaan door Atlas in fase 2 en 3 (`render-png.mjs` zoekt `sharp` nu in `SHARP_PATH` en `node_modules` van de werkmap); grep onder `agents/atlas/` geeft nul treffers (CHG-078) | grep 2026-11-25; feitencontrole Atlas | uitgevoerd (B-54) |
| C4 | `README.md` (root) r.19 bijwerken: `skills/` noemde "flowbeheer rond Dr. Evil". Na B-55 neutraal gemaakt door de hoofdsessie | `README.md` r.19 | uitgevoerd (B-55) |
| C5 | Plugins neo, trace en sentinel: grep vond geen "Paperclip" of "Dr. Evil" | grep 2026-11-25 | feit; niets te doen |

## D. Wat blijft

- `organisatie/bronnen/paperclip-0.18/`: het goedgekeurde model 0.18 als vaste as-is-bron (B-28).
- De git-geschiedenis met de ongewijzigde export van de agents en skills (commit `3b3445f`).
- De Paperclip-platformskills (`paperclip`, `paperclip-converting-plans-to-tasks`, `para-memory-files`) staan niet in de repo en vervallen met Paperclip.

## E. Volgorde

1. A1 en A2: besluit en doorvoeren, met C3 (B-54).
2. A3 en A4: open werk overzetten en bewaren, parallel met A2.
3. A5: één doorloop in Claude Code.
4. B1 t/m B4: Paperclip uitzetten. A5 blijft de aanbevolen volgorde vóór deze stap (B-46, ASM-108); of en wanneer Carlo Paperclip uitzet, beslist hij zelf, en de werkwijze hangt er niet van af (B-55).

C1 en C4 zijn uitgevoerd (B-55). Wie Paperclip uitzet vóór A3 en A4, verliest wat nog niet is overgezet of bewaard.
