# Communicatiemodel: Socrates, Atlas en Carlo zonder Paperclip

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); in 1.0.22 in §4 de rij voor de vraag van de hoofdsessie aan Atlas toegevoegd, die al in overdracht 24 stond (administratieve correctie, CHG-062); in 1.0.27 de vaste sessie Socrates–Atlas en de productvraag aan Carlo midden in de sessie (CHG-066, goedgekeurd in B-50; doorgevoerd in CHG-069), en de grondregel volgens de gecorrigeerde feiten §1; in 1.0.28 de rijen van §4 gesplitst (CHG-070). Model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51) |
| Bron van waarheid | `register.yaml` (`raci`, `goedkeuringen_uitwerking`, ASM-104); procesbeschrijvingen in `processen/` |
| Feiten over Claude Code | alleen uit `bronnen/claude-code-feiten.md` (2026-11-25), aangeduid als "feiten §n". Wat daar niet staat, is een open vraag. |
| As-is | `bronnen/paperclip-0.18/paperclip-mapping.md` (de Paperclip-concepten per stap) |
| Datum | 2026-11-25 |

**Legenda.** K = kanaal (alleen in dit bestand) · ACT = stap · PRC = proces · GOV = akkoordmoment van Carlo · AGT-02 Socrates · AGT-03 Atlas · AGT-08 hoofdsessie · AGT-09 Socrates-licht · AGT-10 Atlas-licht · ROL-01 Carlo · B = besluit · ASM = aanname · OPEN = open vraag · FND = bevinding. **Label** per regel: feit (met bron), besloten (B), aanname (ASM) of open (OPEN).

**Grondregel (besloten, B-38; bevestigd in B-50).** Alle overdracht tussen agents loopt via de hoofdsessie. Agents starten elkaar niet, en er komen geen agent teams. Technisch kan een subagent wel subagents starten, maar bij Socrates, Atlas en hun lichte varianten is dat afgedwongen: `Agent` staat niet in hun `tools` (feiten §1, gecorrigeerd op 2026-11-25). Dat blijft zo. Socrates en Atlas praten met elkaar in één vaste sessie, waarin de hoofdsessie elk bericht letterlijk doorgeeft (B-50, ASM-124; §4).

## 1. Kanalen

| K | Kanaal | Wat het doet | Label |
| --- | --- | --- | --- |
| K1 | Agent starten | De hoofdsessie start een subagent (`socrates:socrates`, `atlas:atlas`, de lichte varianten) met een zelfstandige opdracht: doel, wat al goedgekeurd is, paden, stap van de keten | feit (feiten §1, §6); `regie` r.46 |
| K2 | Eindbericht | De subagent geeft één eindbericht terug: Resultaat, Bestanden, Open vragen, Verzoek aan de ander, Status | feit (de agentdefinities, Eindbericht); `regie` r.47 |
| K3 | Hervatten met SendMessage | De hoofdsessie hervat dezelfde subagent met zijn volledige geschiedenis, bijvoorbeeld met bevindingen of antwoorden | feit (feiten §2) |
| K4 | Vragendialoog | De hoofdsessie stelt Carlo vragen met AskUserQuestion, hoogstens 4 per dialoog. Dit werkt niet in een subagent | feit (feiten §1); `regie` r.49 |
| K5 | Bestand in de klantrepo | Documenten, de stand, het backlog, de uitbreidingslijst, het contextverslag, de ontwerp-export. Bestanden in de repo blijven bewaard | feit (feiten §5) |
| K6 | Gesprek in de hoofdsessie | Carlo typt een opdracht, verzoek of antwoord; de hoofdsessie meldt wat op hem wacht | afleiding (feiten, afleiding 1: een vraag aan de gebruiker loopt altijd via de hoofdsessie); dat Carlo hier typt en hoe de skill `regie` hier geladen wordt, staat niet in de feiten (OPEN-45). Waarneming in deze sessie, geen bron: Carlo typt in de hoofdsessie, en `regie` is op zijn verzoek geladen met de Skill-tool |
| K7 | Cron-taak | Een geplande taak in de hoofdsessie (CronCreate): vuurt alleen als Claude inactief is en de sessie open is, haalt niets in, komt terug bij `--resume` behalve als hij verlopen of al voorbij is | feit (feiten §4) |
| K9 | Projectinstructies | `CLAUDE.md` in de root van de klantrepo wordt bij de start van elke sessie geladen, met zijn @-imports; `AGENTS.md` en `CONSTRAINTS.md` alleen via een import. Carlo koos dat `CLAUDE.md` niets importeert en de andere bestanden noemt met een leesmoment (B-47, vraag 32). De korte `CLAUDE.md` bereikt dus ook het voorwerk in die repo; de andere bestanden leest een sessie alleen als ze het leesmoment volgt (FND-105, ASM-117) | feit (feiten §8); dat subagents dezelfde `CLAUDE.md` krijgen, komt uit een samenvatting, en of het voor plugin-agents geldt, is niet gevonden (voorbehoud §8) |
| K8 | Sessie openen of hervatten | `--resume` of `--continue` herstelt de sessie met de geplande taken; bij elke opening draait de dagstart (B-41) | feit (feiten §5); besloten (B-41) |

Niet gebruikt: agent teams (experimenteel, feiten §3; B-38), geplande taken in de cloud (verse clone zonder lokale bestanden, feiten §4), berichten tussen sessies (feiten §4), hooks (niet nodig, PRP-076).

## 2. Overdrachten

| # | Van → naar | Wat | Stappen | Kanaal | Vervangt in Paperclip | Wat wegvalt |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Carlo → hoofdsessie | opdracht voor een nieuwe klant | ACT-01.1 | K6 | opdracht-issue en project aanmaken (0.18 M-14) | het Paperclip-project en de issue-ID's; de klantrepo is het project (ASM-79) |
| 2 | Carlo → klantrepo | design systeem en ontwerpen | ACT-01.52, 01.28, 02.16 | K5: `docs/design/`, per aanlevering een map met de datum (B-44, OPEN-35) | export als bijlage op het issue (0.18 M-11) | revisies van de bijlage; de git-geschiedenis neemt dat over |
| 3 | hoofdsessie → Socrates of Atlas | opdracht voor een stap | ACT-01.2, 01.8 en elke start in PRC-01 en PRC-02 | K1 | issue met toewijzing en `parentId` | wekken bij toewijzing; issuestatus; de heartbeat |
| 4 | Socrates of Atlas → hoofdsessie | resultaat, vragen, verzoek of status | einde van elke stap | K2, met de documenten in K5 | document op het issue, comment en issuestatus | documentrevisies op het issue (git neemt het over); de status `in_review` |
| 5 | hoofdsessie → controleur → hoofdsessie → maker | controle vóór het akkoord en bevindingen | ACT-03.5 t/m 03.7, 03.12, 03.14 | K1 voor de controleur, K2 terug, K3 naar de maker | geen: 0.18 had geen controleur (B-34 nieuw) | — |
| 6 | Socrates → Atlas → Socrates | toets van use cases en brieven, als vaste sessie Socrates–Atlas met lopend contextverslag (B-50, ASM-124); een productkeuze midden in de sessie gaat K2 → K4 → K3 naar Carlo (ASM-123) | ACT-01.23, 02.13 (GS3, GS11) | K2 (verzoek aan de ander), K1 per toetsronde, K3 binnen een ronde | toets-issue met `blockedByIssueIds` (0.18 PRP-041) | automatisch wekken als de blocker klaar is; de hoofdsessie hervat Socrates zelf |
| 7 | maker → Carlo → maker | akkoord op een document of pakket | PRC-03 | K2 (open vragen), K4 (dialoog), K3 (antwoorden letterlijk terug), K5 (status en stand) | goedkeuringskaart `request_item_verdicts` per document, gebonden aan de revisie | de kaart als object; het oordeel gebonden aan een revisie (stale bij een nieuwe revisie); bewijs volgt uit de stand (ASM-104, FND-093) |
| 8 | agent → agent | vraag of grill-sessie tussen agents; tussen Socrates en Atlas als vaste sessie met lopend contextverslag (B-50, ASM-124); een productkeuze midden in de sessie gaat K2 → K4 → K3 naar Carlo (ASM-123) | PRC-04 | K2 → K1 of K3 (ontvanger) → K2 → K3 (vrager) | vraag-issue met comments per ronde en een blocker | rondes zichtbaar op het issue; nu in de stand (ASM-104) en het contextverslag |
| 9 | agent → Carlo → agent | vraag of grill-sessie met Carlo | PRC-04 met Carlo als ontvanger (ASM-94) | K2 → K4 → K3 | vragenkaart `ask_user_questions` op het eigen issue | een open vraag die blijft staan als de sessie dicht is; nu noemt de dagstart open vragen |
| 10 | vrager → ontvanger | contextverslag en bevestiging | ACT-04.55, 04.56 | K5 (`contextverslag.md` op de documentlocatie), bevestiging via K3 of K4 | document `contextverslag` op het issue (0.18 M-16) | — |
| 11 | Carlo → maker | afkeuring met reden | PRC-05 | K4 → K3; telling in K5 | afgewezen kaart of comment | — |
| 12 | agent → hoofdsessie | blokkade | ACT-06.1 | K2 (status geblokkeerd) | status `blocked` met `blockedByIssueIds` | automatisch wekken bij oplossing; de hoofdsessie hervat de agent (ACT-06.6, K3) |
| 13 | hoofdsessie → Carlo | escalatie met opties | ACT-03.10, 04.53, 05.4, 06.5 (GOV-08) | K4 | escalatie-issue aan Dr. Evil en een interactie | — |
| 14 | hoofdsessie → klantrepo | backlog-items | ACT-02.11 | K5: `docs/backlog/todo/` (B-44, ASM-101, ASM-102) | epics en taken als issues met toewijzing | toewijzing en statusworkflow; de map is de status; alleen Carlo verplaatst (ASM-100) |
| 15 | hoofdsessie → Atlas → hoofdsessie | toets van de backlog-items | ACT-03.6 bij GOV-18 | K1 (Atlas leest K5), K2 | `review`-stage op het epic (0.18 M-10) | — |
| 16 | cron → hoofdsessie | weekmoment, maandag 12:00 | ACT-07.1 | K7 | routine *Weekmoment klaarzetten* van Dr. Evil | draaien zonder open sessie (FND-013); het weekmoment-issue met afname, top 5, retro, focusdoel en limieten |
| 17 | opening → hoofdsessie | dagstart | ACT-07.2 t/m 07.4 | K8 | routine *Dagstart* en het herinneringsbericht als comment | een dagelijkse herinnering als Carlo de sessie niet opent (B-41) |
| 18 | hoofdsessie → Carlo | wat op hem wacht | ACT-07.4 | K6 (melding in de sessie) | herinneringsbericht op het weekmoment-issue | een bericht buiten de sessie |
| 19 | Carlo → hoofdsessie | verzoek om een slice of wens | aanleiding PRC-02 | K6 | comment of issue voor Dr. Evil | — |
| 20 | hoofdsessie → klantrepo | uitbreidingslijst | ACT-01.29, 02.17 | K5 (ASM-96) | issue per uitbreiding met status `backlog` (0.18 M-12) | prioriteit als veld; de volgorde staat in het bestand |
| 21 | klantrepo → Carlo (buiten de scope) | backlog klaar voor de bouw | na GOV-18 | K5 | comment "gereed voor bouw" op het epic (0.18 PRC-10) | — |
| 22 | Carlo → klantrepo (buiten de scope) | taak in uitvoering of klaar | na de keten | K5: bestand naar `in-progress/` of `done/` (ASM-89, ASM-100, ASM-101) | merge-melding als comment; Dr. Evil zet `done` | een agent die na de merge opruimt |
| 23 | Atlas → hoofdsessie → Atlas | ontwerppagina publiceren als Artifact (optioneel) | ACT-01.13, 01.24, 01.59, 01.60, 02.8 (CAP-39); ACT-02.6 en 02.7 bij een gewijzigd document | **Open (OPEN-47).** Volgens de instructies (geen feiten over Claude Code): Atlas zet de HTML in K5 en meldt het pad in K2; de hoofdsessie publiceert als Carlo dat wil of het project het voorschrijft (`regie` r.56); de URL gaat terug naar Atlas via K3, en Atlas zet hem in `STATUS.md` (atlas.md r.46, r.75; `architect-api-contracts` r.46). Hoe het publiceren technisch gaat, staat niet in de feiten | document op het issue | — |
| 24 | hoofdsessie → Atlas → hoofdsessie (ASM-109, bevestigd in B-46) | vraag over de werkpakketten tijdens het maken van de backlog-items | ACT-02.11 met PRC-04 | K1 of K3 → K2 | vraag van Dr. Evil aan Atlas over de opdeling (0.18 TL-08) | — |

## 3. De stand van de keten (ASM-104, bevestigd in B-46)

Eén bestand, `docs/stand-van-de-keten.md`, tenzij de projectregels een andere plek noemen. Alleen de hoofdsessie schrijft erin (K5). De agents lezen het. Atlas houdt daarnaast `STATUS.md` voor zijn eigen documenten (atlas.md r.75); daarin staan ook de datum van akkoorden en de goedkeuring van eisen, use cases en bedrijfsregels zoals de hoofdsessie die meldt. De datum van een akkoord staat dan in twee bestanden. **Bij een verschil is de stand leidend** (ASM-104, vraag 3).

| Sectie | Inhoud | Wie leest het |
| --- | --- | --- |
| Lopende stap | proces, stap, maker, datum | de hoofdsessie bij een hervatte of nieuwe sessie |
| Akkoorden | per GOV: datum, document en versie, de letterlijke vragen en antwoorden, nacontrole ja of nee | iedereen; dit is het bewijs in plaats van de kaart (FND-093) |
| Rondes | per controle of vragenloop: rondes, met of zonder voortgang (ASM-90) | de hoofdsessie en de vrager |
| Afkeuringen | per document het aantal (PRC-05) | de maker |
| Blokkades | reden, eigenaar, eerste of tweede melding (ASM-92) | de hoofdsessie |
| Doorloop | lopende doorloop van PRC-02 (ASM-33), datum van het laatste weekmoment | de dagstart en het weekmoment |

## 4. Vragenlopen

| Vragenloop | Route | Telling | Waar het verslag staat |
| --- | --- | --- | --- |
| Socrates of Atlas met Carlo (GS1, GS2, GS4, GS9, GS10, GS14) | K2 → K4 → K3 | geen (ASM-48, ASM-75, ASM-94) | `contextverslag.md`; de laatste vraag is "Klopt dit contextverslag?" (geen akkoord) |
| Sessie tussen Socrates en Atlas (B-50): de toets (GS3, GS11) en vragen tussen hen (PRC-04) | K2 → K1 of K3 → K2 → K3. Bij de toets een nieuwe opdracht per toetsronde (K1); binnen een toetsronde gaan de antwoorden van Socrates K2 → K3 terug naar dezelfde Atlas. De hoofdsessie geeft elk bericht letterlijk door. Een productkeuze midden in de sessie: K2 → K4 → K3 naar Carlo en terug (ASM-123) | toetsrondes hoogstens 2, daarna Carlo (`vragen-en-akkoordrondes` werkwijze 8); bij vragen rondes zonder voortgang, na 2 escalatie; in de stand. Een vraag aan Carlo telt niet als ronde | één lopend `contextverslag.md`, na elke ronde bijgewerkt door de vrager (bij de toets Atlas) en aan het eind bevestigd door de ontvanger (ASM-124, ASM-58) |
| Vraag van de hoofdsessie aan Atlas over de werkpakketten (ASM-109; overdracht 24) | K1 of K3 → K2; de hoofdsessie heeft geen eindbericht nodig (ACT-04.2) | rondes zonder voortgang, na 2 escalatie; in de stand | `contextverslag.md`, door de hoofdsessie; Atlas bevestigt (ACT-04.55, 04.56) |
| Vraag aan een lichte variant | K1 → K2; zegt hij "start socrates" of "start atlas", dan K1 naar de volle variant | geen | geen; het antwoord staat in het eindbericht |
| Controle vóór het akkoord | K1 → K2 → K3 (maker) | controlerondes zonder voortgang, na 2 escalatie (ASM-90) | in de stand |
| Toets van de backlog-items door Atlas (GOV-18) | K1 (Atlas leest de taak- en epicbestanden in K5) → K2; de hoofdsessie verwerkt de opmerkingen zelf (ACT-03.7); de volgende toetsronde gaat via K1 of K3 naar Atlas | toetsrondes: na 2 toetsrondes, of bij een conflict over niet-technische punten, beslist Carlo (GOV-08); op technische punten heeft Atlas het laatste woord (ASM-83) | in de stand |

## 5. Wat wegvalt, samengevat

- **Wekken zonder sessie.** Paperclip wekte agents bij een toewijzing, een comment of een opgeloste blocker, ook als niemand ingelogd was. In Claude Code gebeurt niets zonder open sessie (feiten, afleiding 3). Het weekmoment hangt aan cron (K7), de rest aan het openen van de sessie (K8). Restrisico: FND-013.
- **De goedkeuringskaart.** Een akkoord is nu een antwoord in de vragendialoog, vastgelegd in de stand en als status in het document (feiten, afleiding 2). Er is geen object dat bij een nieuwe revisie vervalt.
- **Het bord en de limieten.** Kolommen, WIP-limieten en het budget van `delivery-management` vallen weg; de flowlimiet vervalt (ASM-93).
- **Het weekmoment-issue.** Afname, top 5, retro, focusdoel en limieten vallen weg. Het weekmoment van 1.0 gaat de volgorde na en start PRC-02 (ACT-07.1, goedgekeurd in ronde 2).
- **Toewijzing en statussen.** Een taak heeft geen eigenaar-veld en geen workflow; de map is de status (B-44).
- **Gedeelde takenlijst.** Een lijst over sessies en agents heen is er niet (feiten §5); het backlog en de stand staan in bestanden.

## 6. Wat niet in de feiten staat

- Hoe een gewone achtergrond-subagent de hoofdsessie meldt dat hij klaar is (OPEN-32).
- Hoe de skill `regie` in de hoofdsessie komt, en dat Carlo daar typt (OPEN-45).
- Hoe de hoofdsessie een ontwerppagina als Artifact publiceert, en hoe de URL bij Atlas komt (OPEN-47; overdracht 23).
- Of plugin-agents zoals Socrates en Atlas de `CLAUDE.md` van de klantrepo krijgen, en of `omitClaudeMd` bij hen werkt (feiten §8, voorbehoud; FND-105).
- Of een agent skills uit een andere plugin kan gebruiken (OPEN-33).
- Of memory de stand kan bewaren (OPEN-36); daarom staat de stand in een bestand.
- Of een herhalende cron-taak verloopt (OPEN-38), hoe lang het transcript van de hoofdsessie blijft (OPEN-39), of cron in de VS Code-extensie werkt (OPEN-40) en wat cron doet als Claude bezig is (OPEN-41).
