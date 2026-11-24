# Export uit Paperclip (2026-11-24)

Ongewijzigde back-up van de agents en skills van het Paperclip-bedrijf *Website Die Werkt*, gemaakt voordat Paperclip offline kan. Alleen gelezen via de Paperclip-API; niets in Paperclip is gewijzigd.

**Dit is archief, geen bron om mee te werken.** De bewerkte, tool-neutrale versies van Socrates en Atlas staan in [`agents/analyse-ontwerp/`](../../agents/analyse-ontwerp/).

| Map of bestand | Inhoud |
|---|---|
| `agents/<naam>/AGENTS.md` | Instructies van de zes agents: Socrates, Atlas, Dr. Evil, Neo, Trace, Sentinel |
| `skills/<slug>/` | De 50 eigen skills (bron `company/…` en `local/…`), met scripts, references en assets |
| `upstream-skills.json` | De 77 overgenomen skills (bron `github/…` en `paperclipai/…`): slug, naam, sleutel, beschrijving. Niet gekopieerd; ze staan bij hun bron |

## Kanttekeningen

- Paperclip heeft geen API die de bestanden van een skill opsomt. De bestanden naast `SKILL.md` zijn gevonden via verwijzingen in `SKILL.md` en de imports van de scripts. De scripts zijn na de export gecontroleerd met `node --check` en een proefrun.
- Bij vijf skills wijkt de map (slug) af van de `name:` in de frontmatter: `architect-use-cases` (`uml-use-cases`), `architect-domain-model` (`uml-domain-modelling`), `architect-sequence-diagrams` (`uml-sequence-diagrams`), `architect-class-diagram` (`uml-class-diagram`), `architect-requirements` (`architect-architecture-choice`).
- Bron van elk bestand is `paperclip_read_skill_file` (wat een agent bij het draaien leest). Bij `architect-requirements` gaf het `markdown`-veld van `paperclip_get_skill` bij hetzelfde versionId een oudere tekst (stap 10 "Ter goedkeuring voorleggen" en "oordeel per document"); die is niet bewaard.
- Ontbreekt ook in Paperclip: `security-hardening/references/hardening-patterns.md` (SKILL.md verwijst ernaar, de API gaf 404). Verwijzingen naar `../../references/…` (buiten de skillmap) zijn niet meegenomen.
- De `AGENTS.md`-bestanden zijn gecontroleerd op de `contentHash` en `byteLength` van Paperclip; de skillbestanden op het letterlijke API-antwoord.
- Kleine tekstbestanden zijn overgenomen uit het API-antwoord; grote bestanden (zoals `scripts/vendor/elk.bundled.js`) rechtstreeks uit het opgeslagen antwoord.
