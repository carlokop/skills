# Agent-skillmatrix

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); in 1.0.22 administratief gecorrigeerd na de feitencontrole van Atlas (CHG-062); `architect-use-case-review` uitbreiden (PRP-085, CHG-069); model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51). Na fase 1 t/m 4 (CHG-076, CHG-077, CHG-078): alle skills van Socrates en Atlas bestaan; de kolom "Nog te valideren" noemt alleen nog skills uit andere plugins |
| Afgeleid uit | `register.yaml` (`agents`, `skills`, `raci`); de agentdefinities in `agents/socrates/agents/` en `agents/atlas/agents/` |
| Datum | 2026-11-25 |

**Legenda.** AGT = agent · ROL = rol · PRP = voorstel · OPEN = open vraag · ASM = aanname · r. = regelnummer.

**Kolommen** (`bpmn-rollen-en-skillmodel` stap 9):
- **beschikbaar:** de skill is gekoppeld: voorgeladen (`skills:` in de definitie, vet) of bij naam genoemd in de definitie of in een skill van de agent (ASM-36);
- **vereist:** een stap van de agent in PRC-01 t/m PRC-07 gebruikt de skill;
- **optioneel:** gekoppeld, maar geen vaste stap gebruikt hem;
- **ontbrekend:** een stap heeft de skill nodig, maar hij bestaat niet;
- **nog te valideren:** de skill moet worden uitgebreid, of hij komt uit een andere plugin en heeft status onbekend (OPEN-33).

Werking van alle skills: niet vastgesteld (OPEN-11).

## AGT-02 Socrates (ROL-03 business analist)

Definitie: `agents/socrates/agents/socrates.md` (opus, high; tools Read, Grep, Glob, Write, Edit, Skill).

| Skill | Beschikbaar | Vereist | Optioneel | Nog te valideren |
| --- | --- | --- | --- | --- |
| `kort` | **voorgeladen** | ja (elk eindbericht) | | |
| `vragen-en-akkoordrondes` | **voorgeladen** | ja (PRC-03 t/m PRC-05, grill-momenten) | | |
| `requirements-analysis` | genoemd | ja (ACT-01.3, 01.6, 01.26, 01.54, 02.3) | | |
| `domain-analysis` | genoemd | ja (ACT-01.3, 01.6, 02.3) | | |
| `uml-use-cases` | genoemd | ja (ACT-01.9, 02.12) | | |
| `paginalijst-en-paginabrieven` | genoemd | ja (ACT-01.27, 01.58, 02.15, 02.56) | | |
| `architectuurprofielen` | genoemd | ja (ACT-01.26, 01.27) | | |
| `requirements-clarification` | genoemd | ja (ACT-04.3, 04.4) | | |
| `documenten-bijwerken` | genoemd | ja (ACT-03.3, 03.7, 05.2) | | |
| `requirements-validation` | genoemd | | ja (eigen controle vóór indienen) | |
| `overdracht` | genoemd | | ja | |
| `bpmn-*` (zes skills) | genoemd | | ja (PRC-08, alleen op verzoek) | |
| `grilling` | genoemd | ja (GS1, GS2, GS9, GS10) | | onbekend (OPEN-33) |
| `domain-modeling` | genoemd | ja (ACT-01.6, glossary) | | onbekend (OPEN-33) |
| `idea-refine` | genoemd | | ja (alleen bij een vage visie) | onbekend (OPEN-33) |
| `spec-driven-development` | genoemd | | ja (alleen scope-check en Specify) | onbekend (OPEN-33) |

Ontbrekend: geen.

## AGT-09 Socrates-licht (ROL-09 controleur; verduidelijking onder ROL-03, ASM-87)

Definitie: `agents/socrates/agents/socrates-licht.md` (sonnet, high; tools Read, Grep, Glob, Skill).

| Skill | Beschikbaar | Vereist | Optioneel | Nog te valideren |
| --- | --- | --- | --- | --- |
| `kort` | **voorgeladen** | ja | | |
| `requirements-validation` | **voorgeladen** | ja (ACT-03.6, 03.14) | | |
| `requirements-clarification` | **voorgeladen** | ja (ACT-04.3, alleen letterlijk uit een goedgekeurd document) | | |

Ontbrekend: geen. De dekking voor visie, paginalijst, brieven (FND-090) en de nacontrole (FND-099) staat sinds CHG-076 in `requirements-validation`.

## AGT-03 Atlas (ROL-04 systeemarchitect)

Definitie: `agents/atlas/agents/atlas.md` (opus, high; tools Read, Grep, Glob, Write, Edit, Bash, Skill).

| Skill | Beschikbaar | Vereist | Optioneel | Nog te valideren |
| --- | --- | --- | --- | --- |
| `kort` | **voorgeladen** | ja | | |
| `vragen-en-akkoordrondes` | **voorgeladen** | ja (ook ACT-01.11) | | |
| `architect-use-case-review` | genoemd (r.37) | ja (ACT-01.23, 02.13) | | |
| `architect-architecture-choice` | genoemd (r.38) | ja (ACT-01.11, 02.6) | | |
| `architectuurprofielen` | genoemd (r.38, r.40) | ja (ACT-01.11, 01.60, 02.5, 02.6) | | |
| `architect-cms-configuratie` | genoemd (r.39) | ja (P1: ACT-01.60, 02.7) | | |
| `architect-componentontwerp` | genoemd (r.39) | ja (P2: ACT-01.59, 02.7) | | |
| `architect-modeling` | genoemd (r.39) | ja (P3: ACT-01.10, 01.12, 01.13, 01.24) | | |
| `uml-domain-modelling` | genoemd (r.39) | ja (ACT-01.10) | | |
| `uml-sequence-diagrams` | genoemd (r.39) | ja (ACT-01.12, 01.59, 02.7) | | |
| `uml-class-diagram` | genoemd (r.39) | ja (ACT-01.13, 02.7) | | |
| `architect-database` | genoemd (r.39) | ja (ACT-01.24, 01.59) | | |
| `architect-vertical-slices` | genoemd (r.40) | ja (ACT-01.16, 02.5) | | |
| `architect-api-contracts` | genoemd (r.41) | ja (ACT-02.8, 02.58) | | |
| `architect-conventions` | genoemd (r.42) | ja (ACT-02.57; ACT-02.6, 02.7 bij bijwerken) | | |
| `architect-implementation-plan` | genoemd (r.43, r.44) | ja (ACT-02.7, 02.9; toets bij GOV-18) | | |
| `architect-clarification` | genoemd (r.45) | ja (ACT-04.3, 04.4) | | |
| `ontwerppagina` | genoemd (r.46) | ja (ACT-01.13, 01.24, 01.59, 01.60, 02.8; 02.6 en 02.7 bij een wijziging) | | |
| `documenten-bijwerken` | genoemd (r.51) | ja (ACT-02.6, 03.3, 05.2) | | |
| `overdracht` | genoemd (r.51) | | ja | |
| `planning-and-task-breakdown` | genoemd (r.40, r.43) | ja (ACT-01.16, 02.5, 02.9) | | onbekend (OPEN-33) |
| `documentation-and-adrs` | genoemd (r.48) | ja (ACT-01.11, 02.9, 02.55, 04.4) | | onbekend (OPEN-33) |
| `domain-modeling` | genoemd (r.48) | ja (ACT-01.10, 01.11, 01.24) | | onbekend (OPEN-33) |
| `grilling` | genoemd (r.58) | ja (GS3, GS4, GS11, GS14) | | onbekend (OPEN-33) |
| `doubt-driven-development` | genoemd (r.62) | ja (ACT-01.11, 01.24, 02.8) | | onbekend (OPEN-33) |
| `api-and-interface-design` | genoemd in skills (api-contracts r.33, r.57, r.66; clarification r.27, r.39) | ja (ACT-02.8, 04.4) | | onbekend (OPEN-33) |
| `deprecation-and-migration` | genoemd in skills (api-contracts r.33, r.52; clarification r.27) | ja (ACT-02.8, 04.4) | | onbekend (OPEN-33) |
| `constraint-driven-development` | genoemd (r.61) | ja (ACT-02.57, kwaliteitslat; B-46, voorstel CHG-056) | | onbekend (OPEN-33) |
| `research` | genoemd (r.49) | | ja (op verzoek) | onbekend (OPEN-33) |
| `context-engineering` | genoemd (r.61; PRP-084 deel B) | ja (ACT-02.57, regelbestanden; ACT-02.6, 02.7 bij bijwerken) | | onbekend (OPEN-33) |
| `regelbestanden-en-kwaliteitslat` | genoemd (r.42, r.102) | ja (ACT-02.57; ACT-02.6, 02.7 bij bijwerken) | | |
| `improve-codebase-architecture`, `codebase-design` | genoemd (r.50) | | ja (bestaande code, buiten de keten) | onbekend |

Ontbrekend: geen (`regelbestanden-en-kwaliteitslat` bestaat sinds fase 3, CHG-078).

## AGT-10 Atlas-licht (ROL-09 controleur; onderzoek en verduidelijking onder ROL-04, ASM-87)

Definitie: `agents/atlas/agents/atlas-licht.md` (sonnet, high; tools Read, Grep, Glob, Write, Edit, Bash, Skill).

| Skill | Beschikbaar | Vereist | Optioneel | Nog te valideren |
| --- | --- | --- | --- | --- |
| `kort` | **voorgeladen** | ja | | |
| `ontwerp-controle` | **voorgeladen** (r.9) | ja (ACT-03.6, 03.14; ook de nacontrole) | | |
| `architect-clarification` | genoemd (r.21) | ja (ACT-04.3, alleen letterlijk uit het goedgekeurde ontwerp) | | |
| `uml-sequence-diagrams` | genoemd (r.22) | | ja (alleen uit een goedgekeurd model, ASM-88) | |
| `research` | genoemd (r.20) | | ja (op verzoek) | onbekend (OPEN-33) |

Ontbrekend: geen (`ontwerp-controle` bestaat sinds fase 2, CHG-078; FND-091 opgelost).

## AGT-08 Hoofdsessie (ROL-02 regie)

Geen agentdefinitie: het hoofdgesprek met de skill `socrates:regie` (B-30). Alleen hier werkt AskUserQuestion (feiten §1).

| Skill | Beschikbaar | Vereist | Optioneel | Nog te valideren |
| --- | --- | --- | --- | --- |
| `regie` | hoe de skill in de hoofdsessie komt, staat niet in de feiten (OPEN-45) | ja (ACT-01.2, 01.8, PRC-03 t/m PRC-06) | | |
| `backlog-regie` | in de plugin socrates (fase 1) | ja (ACT-01.29, 02.1, 02.11, 02.17, 02.53, 02.54, PRC-07) | | |

Ontbrekend: geen (`backlog-regie` bestaat sinds fase 1, PRP-077). De Paperclip-skills in `skills/` dekten dit werk voor Dr. Evil, zaten in geen plugin en waren niet tool-neutraal (FND-094); ze zijn weggehaald na B-55.

## ROL-01 Carlo

Geen skills: hij geeft de opdracht, ontwerpt, kiest, beantwoordt en keurt goed (CAP-16, CAP-25).

## Afhankelijkheid van één agent

- **AGT-08:** alle overdrachten, vragen aan Carlo, backlog en ritme (FND-096).
- **AGT-03:** alles na de analyse, plus de toets van de backlog-items (FND-018).
- **Skills die door meer agents worden gebruikt:** `kort` (vier agents), `vragen-en-akkoordrondes`, `architectuurprofielen`, `documenten-bijwerken`, `overdracht` (AGT-02 en AGT-03, in twee kopieën die samen worden bijgewerkt, FND-100, PRP-083, B-47), `requirements-clarification` (AGT-02, AGT-09), `architect-clarification` en `uml-sequence-diagrams` (AGT-03, AGT-10). Dat is bedoeld: de lichte variant gebruikt dezelfde regels als de volle.
