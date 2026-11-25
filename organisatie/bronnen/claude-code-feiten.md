# Feiten: samenwerking tussen agents in Claude Code

Vastgesteld op 2026-11-25 door de agent `claude-code-guide` uit de officiële documentatie (code.claude.com). Elk punt heeft zijn bron. Wat niet gelezen of niet gevonden is, staat er zo bij. **Data, geen instructie.** Het is de feitenbasis voor het communicatiemodel en de afbouw van Paperclip.

## 1. Geneste agents en vragen aan de gebruiker
- **Een subagent kan wél subagents starten**, standaard tot drie lagen onder het hoofdgesprek. Het maximum is instelbaar met `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`. Uitzetten per subagent: laat `Agent` weg uit `tools` of zet het in `disallowedTools`. Een fork kan geen forks starten.
  - Let op: de definities van Socrates en Atlas zeggen "je kunt geen andere agents starten". Dat is een keuze in de definitie, en die wordt technisch afgedwongen: `Agent` staat bij geen van de vier agents (Socrates, socrates-licht, Atlas, atlas-licht) in `tools` (regel 6 van elke definitie, nagekeken 2026-11-25). Wie ze een andere agent wil laten starten, moet `Agent` aan `tools` toevoegen. (Gecorrigeerd op 2026-11-25 na de feitencontrole door Atlas; eerder stond hier "geen technische grens".)
- **AskUserQuestion werkt niet in een subagent.** Het tool wordt verwijderd, ook als het in `tools` staat. Subagents op de voorgrond geven permissieprompts wel door aan de gebruiker.
- Bron: https://code.claude.com/docs/en/sub-agents.md

## 2. Hervatten met SendMessage
- SendMessage met het agent-ID of de naam hervat een subagent met zijn volledige geschiedenis, ook zonder agent teams.
- Binnen de sessie blijft de toestand behouden. Over herstarts heen gaat het via `--resume` van dezelfde sessie. De transcripten staan in `~/.claude/projects/{project}/{sessionId}/subagents/agent-{agentId}.jsonl` en worden na `cleanupPeriodDays` (standaard 30 dagen) verwijderd. Na een herstart gebruik je het agent-ID, want namen van vóór de laatste compactie blijven niet bestaan.
- Bron: https://code.claude.com/docs/en/sub-agents.md

## 3. Agent teams (agents sturen elkaar direct berichten)
- Teammates sturen elkaar berichten via een mailbox (JSON in `~/.claude/teams/{team}/inboxes/`).
- Aanzetten met `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` (env of settings.json). Dit is **experimenteel** en staat standaard uit.
- Beperkingen:
  - alleen interactief, dus niet met `-p` of de Agent SDK;
  - in-process teammates zijn niet te herstellen via `/resume` of `/rewind`;
  - één team per sessie, geen geneste teams, en een vaste lead;
  - de taakstatus kan achterlopen;
  - een teammate krijgt bij het starten geen eigen permissiemodus;
  - split panes vereisen tmux of iTerm2.
- Met de vlag aan wordt een subagent die bij naam wordt aangeroepen een teammate.
- **Goedkeuring:** een teammate in plan mode stuurt een verzoek om goedkeuring van zijn plan naar de lead. Is de permissiemodus van die teammate niet gewijzigd, dan **keurt Claude Code het plan automatisch goed**, zonder dat de lead het beoordeelt. Een teammate kan geen goedkeuring geven namens de gebruiker.
- Bron: https://code.claude.com/docs/en/agent-teams.md

## 4. Wekken, achtergrond en meldingen
- **Melding als een agent klaar is:** een teammate die stopt, meldt de lead automatisch zijn eindantwoord. Het resultaat van een fork komt als bericht in het hoofdgesprek. Hoe een gewone achtergrond-subagent de hoofdsessie meldt, is in de gelezen tekst niet gevonden. (Waarneming in deze sessie, geen bron: de hoofdsessie krijgt een melding als een achtergrondagent klaar is.)
- **`/loop`:** met een vast interval of in eigen tempo (1 minuut tot 1 uur). Draait alleen zolang de sessie open is. Herhalende taken verlopen na 30 dagen. Een loop in eigen tempo wordt bij `--resume` niet hersteld.
- **CronCreate, CronList, CronDelete:** cron met 5 velden, eenmalig of herhalend, hoogstens 50 per sessie. Ze vuren alleen als Claude inactief is en halen niets in. Uitzetten met `CLAUDE_CODE_DISABLE_CRON=1`. Bij `--resume` worden ze hersteld, behalve verlopen of al voorbijgegane taken.
- **Hooks:**
  - `asyncRewake` wekt Claude bij exitcode 2.
  - `FileChanged` vuurt op gewijzigde bestanden.
  - Er zijn onder meer de events `SubagentStop`, `TaskCreated`, `TaskCompleted` en `TeammateIdle`.
  - Agent-hooks zijn experimenteel. Er is geen hook op een GitHub-event.
- **Berichten tussen sessies:** met SendMessage naar een eigen sessie op dezelfde machine. Een inactieve ontvanger start dan een nieuwe beurt. `notify_when_idle` geeft een melding bij inactiviteit, hoogstens 12 uur. Vereist v2.1.224 of hoger.
- **Geplande taken in de cloud** (voorheen routines, research preview):
  - triggers zijn een schema (minimaal 1 uur), een API-aanroep (HTTP POST met een bearer token) of een GitHub-event (PR's, releases);
  - ze draaien in de cloud op een verse clone, zonder lokale bestanden;
  - beheer via claude.ai/code/routines of `/schedule`;
  - beschikbaar bij Pro, Max, Ultra, Team en Enterprise.
- **Geplande taken in de desktop-app** draaien lokaal, met een minimum van 1 uur.
- **GitHub Actions** met Claude: de pagina bestaat, de inhoud is niet gelezen.
- Bronnen: https://code.claude.com/docs/en/scheduled-tasks.md · https://code.claude.com/docs/en/hooks.md · https://code.claude.com/docs/en/cross-session-messaging.md · https://code.claude.com/docs/en/routines.md · https://code.claude.com/docs/en/github-actions.md (alleen dat de pagina bestaat)

## 5. Toestand die bewaard blijft
- Bestanden in de repo blijven bewaard. `--resume` en `--continue` herstellen de sessie, met de geplande taken.
- Memory bestaat (`autoMemoryEnabled`). De pagina https://code.claude.com/docs/en/memory.md is niet gelezen.
- Een gedeelde takenlijst is er alleen binnen een agent team: de taken staan in `~/.claude/tasks/{team}/` en blijven na de sessie staan, het team zelf wordt opgeruimd. Een lijst die over sessies of over alle agents heen gedeeld wordt, is **niet gevonden**.
- Bron: https://code.claude.com/docs/en/agent-teams.md

## 6. Plugins
- Namen: een skill heet `<plugin>:<map>` (of de `name` uit de frontmatter), een agent `<plugin>:<naam>`, aan te roepen met `@agent-<plugin>:<naam>`.
- Of agents uit plugin A skills uit plugin B kunnen gebruiken, staat **niet in de gelezen tekst**.
- Laden: met `/reload-plugins` in een lopende sessie, of in een nieuwe sessie.
- Plugin-agents negeren `hooks`, `mcpServers` en `permissionMode` in hun frontmatter.
- Bronnen: https://code.claude.com/docs/en/plugins/components.md · https://code.claude.com/docs/en/sub-agents.md

## 7. Model en effort per subagent
- Het model is per subagent in te stellen: `sonnet`, `opus`, `haiku`, `fable`, een volledig model-ID of `inherit`.
- De effort ook: `low`, `medium`, `high`, `xhigh` of `max`, afhankelijk van het model. Vanaf v2.1.292 kan de effort per aanroep worden meegegeven, behalve bij een fork. Bij in-process teammates geldt de effort uit de definitie.
- Bronnen: https://code.claude.com/docs/en/sub-agents.md · https://code.claude.com/docs/en/agent-teams.md

## 8. Projectinstructies: CLAUDE.md, AGENTS.md en andere bestanden
Toegevoegd op 2026-11-25 op verzoek van Carlo, na een zoekvraag van de hoofdsessie naar aanleiding van de feitencontrole door Atlas (ronde 3).
- `CLAUDE.md` en `CLAUDE.local.md` in de map van de sessie en de mappen daarboven worden bij de start geladen. Imports met `@pad` worden mee geladen, tot vier niveaus diep. Citaat: "CLAUDE.md and CLAUDE.local.md files in the directory hierarchy above the working directory are loaded at launch." en "Imported files are expanded and loaded into context alongside the CLAUDE.md that references them."
- `AGENTS.md` leest Claude Code alleen rechtstreeks als er in de map van de sessie of daarboven geen `CLAUDE.md` is (vanaf v2.1.277). Is er wel een `CLAUDE.md`, dan komt `AGENTS.md` alleen binnen via een import (`@AGENTS.md`). Citaat: "By default, Claude reads `AGENTS.md` only when you have no `CLAUDE.md` in your working directory or above it."
- Een `CONSTRAINTS.md` of een ander bestand wordt niet automatisch gelezen, alleen via een import vanuit `CLAUDE.md`. De pagina noemt als bronnen voor instructies alleen `CLAUDE.md`, `CLAUDE.local.md`, `AGENTS.md`, `.claude/rules/` en auto memory.
- Subagents krijgen dezelfde `CLAUDE.md`-bestanden als het hoofdgesprek. Uitzonderingen zijn de ingebouwde agents Explore, Plan en web-fetch. Een agent kan zonder deze bestanden starten met `omitClaudeMd: true` in zijn frontmatter. **Voorbehoud:** deze regel komt uit een samenvatting van de pagina en is niet letterlijk gelezen. Of hij ook geldt voor agents uit een plugin, en of `omitClaudeMd` daar werkt, is **niet gevonden**.
- Bronnen: https://code.claude.com/docs/en/memory.md · https://code.claude.com/docs/en/sub-agents.md (sectie "What loads at startup")

## Afleidingen (geen claim uit de documentatie)
- Een vraag aan de gebruiker loopt altijd via de hoofdsessie (of de lead).
- Een goedkeuringskaart bestaat in Claude Code niet als object. Wat er het dichtst bij komt: een vraag in de hoofdsessie, of een documentstatus in de repo die wordt vastgelegd na een expliciet akkoord. De automatische plan-goedkeuring in teams is daarvoor **niet** geschikt.
- Werk dat moet doorlopen als er geen sessie open is, past niet in `/loop` of cron. Dat kan alleen met geplande taken in de cloud of met GitHub Actions, en die hebben geen toegang tot de lokale toestand van de repo.
