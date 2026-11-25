# Activiteit-skillmatrix

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19, ronde 3 (rollen- en skillmodel) Goedgekeurd (2026-11-25, Carlo, B-46, B-47, B-48); skillstatus per stap bijgewerkt voor PRP-085 en de naam van ACT-04.4 (CHG-069, CHG-070); model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51) |
| Afgeleid uit | `register.yaml` (`raci`: velden `cap` en `skills`) |
| Datum | 2026-11-25 |

**Legenda.** ACT = stap · CAP = capability (namen in `capabilities-en-skills.md`) · AGT = agent · PRP = voorstel · OPEN = open vraag. Status per skill bij deze stap: **b** = bestaat, **u** = uitbreiden, **n** = nieuw, **o** = onbekend (andere plugin, OPEN-33). "maker" = AGT-02, AGT-03, of AGT-08 bij GOV-18; "controleur" = AGT-09 of AGT-10, bij GOV-18 AGT-03. Alle 85 stappen van PRC-01 t/m PRC-07 staan erin.

## PRC-01 nieuwe klant tot ontwerp en sliceplan (22 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-01.1 | Opdracht geven | ROL-01 | CAP-16 | n.v.t. (mens) |
| ACT-01.52 | Design systeem maken en aanleveren | ROL-01 | CAP-25 | n.v.t. (mens) |
| ACT-01.2 | Opdracht vastleggen en doorgeven aan de analist | AGT-08 | CAP-01, 37 | `regie` u |
| ACT-01.3 | Plan, bedrijf en domein onderzoeken | AGT-02 | CAP-02, 17 | `requirements-analysis` b, `domain-analysis` b, `vragen-en-akkoordrondes` b, `grilling` o, `idea-refine` o |
| ACT-01.6 | Analysedocument opstellen | AGT-02 | CAP-02 | `requirements-analysis` u (PRP-078), `domain-analysis` b, `domain-modeling` o, `spec-driven-development` o |
| ACT-01.26 | Visie en projecttype vastleggen | AGT-02 | CAP-02 | `requirements-analysis` b, `architectuurprofielen` b, `idea-refine` o |
| ACT-01.9 | Use cases met acceptatiecriteria opstellen | AGT-02 | CAP-03 | `uml-use-cases` b, `vragen-en-akkoordrondes` b, `grilling` o |
| ACT-01.27 | Paginalijst en paginabrieven opstellen | AGT-02 | CAP-24 | `paginalijst-en-paginabrieven` b, `architectuurprofielen` b |
| ACT-01.23 | Use cases en paginabrieven toetsen | AGT-03 | CAP-04 | `architect-use-case-review` u, `vragen-en-akkoordrondes` u (PRP-085: vaste sessie met lopend verslag) |
| ACT-01.54 | Kern markeren | AGT-02 | CAP-02 | `requirements-analysis` b |
| ACT-01.8 | Architectuur en paginaontwerp laten starten | AGT-08 | CAP-01 | `regie` u |
| ACT-01.11 | Architectuurkeuze en profiel vastleggen | AGT-03 | CAP-05, 21 | `architect-architecture-choice` u (PRP-082), `architectuurprofielen` b, `vragen-en-akkoordrondes` b, `documentation-and-adrs` o, `domain-modeling` o, `doubt-driven-development` o, `grilling` o |
| ACT-01.28 | Sleutelpagina's en paginatypen ontwerpen | ROL-01 | CAP-25 | n.v.t. (mens) |
| ACT-01.58 | Paginabrieven en ontwerp afstemmen | AGT-02 | CAP-24 | `paginalijst-en-paginabrieven` b |
| ACT-01.60 | Contentmodel en platformconfiguratie opstellen (P1) | AGT-03 | CAP-26, 39 | `architect-cms-configuratie` b, `architectuurprofielen` b, `ontwerppagina` b |
| ACT-01.59 | Componenten-, route- en dataontwerp opstellen (P2) | AGT-03 | CAP-27, 07, 09, 39 | `architect-componentontwerp` b, `uml-sequence-diagrams` u, `architect-database` b, `ontwerppagina` b |
| ACT-01.10 | Domeinmodel opstellen bij maatwerk (intern, P3) | AGT-03 | CAP-06 | `architect-modeling` b, `uml-domain-modelling` b, `domain-modeling` o |
| ACT-01.12 | Sequentiediagrammen opstellen bij maatwerk (intern, P3) | AGT-03 | CAP-07 | `architect-modeling` b, `uml-sequence-diagrams` u (PRP-082) |
| ACT-01.13 | Klassendiagram opstellen bij maatwerk (P3) | AGT-03 | CAP-08, 39 | `architect-modeling` b, `uml-class-diagram` u (PRP-082), `ontwerppagina` b |
| ACT-01.24 | Databaseontwerp kern opstellen bij maatwerk (P3) | AGT-03 | CAP-09, 21, 39 | `architect-database` b, `architect-modeling` b, `ontwerppagina` b, `domain-modeling` o, `doubt-driven-development` o |
| ACT-01.16 | Voorlopig sliceplan opstellen | AGT-03 | CAP-10 | `architect-vertical-slices` u (PRP-079), `planning-and-task-breakdown` o |
| ACT-01.29 | Later-pagina's op uitbreidingslijst zetten | AGT-08 | CAP-13, 20 | `backlog-regie` n (PRP-077) |

## PRC-02 backlog vullen per slice (20 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-02.1 | Volgende slice of wens bepalen | AGT-08 | CAP-20 | `backlog-regie` n |
| ACT-02.2 | Volgende slice of wens kiezen | ROL-01 | CAP-16 | n.v.t. (mens) |
| ACT-02.3 | Eisen van de wens analyseren | AGT-02 | CAP-02, 17 | `requirements-analysis` u (PRP-078), `domain-analysis` b, `vragen-en-akkoordrondes` b, `grilling` o |
| ACT-02.12 | Use cases van de wens opstellen | AGT-02 | CAP-03 | `uml-use-cases` b, `vragen-en-akkoordrondes` b, `grilling` o |
| ACT-02.15 | Ontwerpbehoefte bepalen en brieven opstellen | AGT-02 | CAP-24 | `paginalijst-en-paginabrieven` b |
| ACT-02.13 | Wens: use cases en brieven toetsen | AGT-03 | CAP-04 | `architect-use-case-review` u, `vragen-en-akkoordrondes` u (PRP-085: vaste sessie met lopend verslag) |
| ACT-02.16 | Pagina's en nieuwe patronen ontwerpen | ROL-01 | CAP-25 | n.v.t. (mens) |
| ACT-02.56 | Brieven en ontwerp van wens afstemmen | AGT-02 | CAP-24 | `paginalijst-en-paginabrieven` b |
| ACT-02.5 | Wens opdelen in slices en sliceplan bijwerken | AGT-03 | CAP-10 | `architect-vertical-slices` u, `architectuurprofielen` b, `planning-and-task-breakdown` o |
| ACT-02.6 | Globaal ontwerp of profiel bijwerken | AGT-03 | CAP-05 t/m 09 | `architect-architecture-choice` u, `architectuurprofielen` b, de skills van het profiel, `documenten-bijwerken` b, `ontwerppagina` b (bij een gewijzigd document met akkoord); bij een nieuwe NFR of afspraak ook `regelbestanden-en-kwaliteitslat` n en `architect-conventions` u |
| ACT-02.55 | Ontwerpbesluit vastleggen bij wijziging | AGT-03 | CAP-21 | `documentation-and-adrs` o |
| ACT-02.7 | Ontwerp per slice opstellen | AGT-03 | CAP-07, 08, 26, 27 | `architect-implementation-plan` u (PRP-082), skills van het profiel, `ontwerppagina` b (als het meegaat in GOV-06); bij een nieuwe NFR of afspraak ook `regelbestanden-en-kwaliteitslat` n en `architect-conventions` u |
| ACT-02.8 | Bouwcontract opstellen | AGT-03 | CAP-11, 39 | `architect-api-contracts` u (PRP-079, PRP-074), `ontwerppagina` b, `api-and-interface-design` o, `deprecation-and-migration` o, `doubt-driven-development` o |
| ACT-02.58 | Leesbare versie opnieuw maken | AGT-03 | CAP-11 | `architect-api-contracts` b |
| ACT-02.57 | Conventiebestand, kwaliteitslat en regelbestanden opstellen (slice 1) | AGT-03 | CAP-22 | `regelbestanden-en-kwaliteitslat` n (PRP-084), `architect-conventions` u (PRP-074, PRP-084), `constraint-driven-development` o, `context-engineering` o |
| ACT-02.9 | Implementatieplan opstellen | AGT-03 | CAP-12, 21 | `architect-implementation-plan` u (PRP-082), `planning-and-task-breakdown` o, `documentation-and-adrs` o |
| ACT-02.53 | Vaste controles uitvoeren | AGT-08 | CAP-14 | `backlog-regie` n |
| ACT-02.11 | Backlog-items maken uit de werkpakketten | AGT-08 | CAP-13 | `backlog-regie` n |
| ACT-02.54 | Backlog gereed controleren | AGT-08 | CAP-14 | `backlog-regie` n |
| ACT-02.17 | Uitbreidingslijst en stand bijwerken | AGT-08 | CAP-20, 37 | `backlog-regie` n |

## PRC-03 akkoord-poort van de project owner (14 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-03.1 | Document ter goedkeuring indienen | maker | CAP-15 | `vragen-en-akkoordrondes` b; bij AGT-08 `regie` u |
| ACT-03.5 | Controle laten uitvoeren | AGT-08 | CAP-01, 23, 37 | `regie` u |
| ACT-03.6 | Controle uitvoeren | controleur | CAP-35 | AGT-09: `requirements-validation` u; AGT-10: `ontwerp-controle` n (PRP-074); AGT-03: `architect-implementation-plan` u (PRP-080) |
| ACT-03.7 | Bevindingen verwerken | maker | CAP-15 | `vragen-en-akkoordrondes` b, `documenten-bijwerken` b |
| ACT-03.8 | Vragen aan de project owner stellen | AGT-08 | CAP-36 | `regie` b |
| ACT-03.2 | Document beoordelen en besluiten | ROL-01 | CAP-16 | n.v.t. (mens) |
| ACT-03.4 | Vraag of opmerking van Carlo beantwoorden | maker | CAP-15 | `vragen-en-akkoordrondes` b |
| ACT-03.9 | Antwoorden letterlijk teruggeven | AGT-08 | CAP-36 | `regie` b |
| ACT-03.3 | Antwoorden verwerken | maker | CAP-15 | `documenten-bijwerken` b, `vragen-en-akkoordrondes` b |
| ACT-03.12 | Verwerking laten nacontroleren | AGT-08 | CAP-01 | `regie` u (PRP-081) |
| ACT-03.14 | Verwerking nacontroleren | controleur | CAP-35 | als ACT-03.6, alle drie u of n (PRP-081) |
| ACT-03.13 | Goedkeuring vastleggen | maker | CAP-15, 37 | `vragen-en-akkoordrondes` b; de stand: `regie` u |
| ACT-03.10 | Vastgelopen controle voorleggen | AGT-08 | CAP-18 | `regie` u (PRP-081) |
| ACT-03.11 | Besluit over de controle doorgeven | AGT-08 | CAP-18, 23 | `regie` u |

## PRC-04 vragenloop en grill-sessie (14 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-04.1 | Ontvanger van de vraag bepalen | vrager | CAP-17 | `vragen-en-akkoordrondes` b |
| ACT-04.2 | Vragen stellen, grill-ronde | vrager | CAP-17 | `vragen-en-akkoordrondes` b, `grilling` o |
| ACT-04.57 | Vragen doorgeven aan de ontvanger | AGT-08 | CAP-01, 36 | `regie` u (PRP-085: vraag aan Carlo uit een lopende sessie) |
| ACT-04.3 | Vragen beantwoorden | ontvanger | CAP-17 | `requirements-clarification` b, `architect-clarification` b, `vragen-en-akkoordrondes` u (PRP-085: productkeuze in de sessie direct aan Carlo); n.v.t. bij ROL-01 |
| ACT-04.4 | Wijzigingsverzoek opstellen (tot 1.0.26 "of productvraag"; B-50, ASM-123) | eigenaar van het goedgekeurde document (ontvanger of vrager) | CAP-17, 21 | `requirements-clarification` b, `architect-clarification` b, `documenten-bijwerken` b; bij Atlas ook `documentation-and-adrs` o, `api-and-interface-design` o, `deprecation-and-migration` o |
| ACT-04.58 | Antwoorden letterlijk teruggeven aan de vrager | AGT-08 | CAP-01 | `regie` u (PRP-085: stand per ronde) |
| ACT-04.5 | Antwoorden beoordelen | vrager | CAP-17 | `vragen-en-akkoordrondes` u (PRP-085: lopend contextverslag) |
| ACT-04.51 | Rondes zonder voortgang tellen | vrager | CAP-23 | `vragen-en-akkoordrondes` u (PRP-081) |
| ACT-04.6 | Volgende ronde stellen | vrager | CAP-17 | `vragen-en-akkoordrondes` b |
| ACT-04.52 | Vastgelopen vraag escaleren | vrager | CAP-18, 23 | `vragen-en-akkoordrondes` b |
| ACT-04.53 | Vraag-escalatie met opties voorleggen | AGT-08 | CAP-18 | `regie` u |
| ACT-04.54 | Escalatiebesluit doorgeven | AGT-08 | CAP-18 | `regie` u |
| ACT-04.55 | Contextverslag opstellen | vrager | CAP-17 | `vragen-en-akkoordrondes` u (PRP-085: lopend contextverslag) |
| ACT-04.56 | Contextverslag bevestigen of aanvullen | ontvanger | CAP-17 | `vragen-en-akkoordrondes` b |

## PRC-05 afkeuring en herziening (6 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-05.1 | Afkeuringen tellen | maker | CAP-23 | `vragen-en-akkoordrondes` u (PRP-081) |
| ACT-05.2 | Commentaar verwerken en document herzien | maker | CAP-15 | `documenten-bijwerken` b, `vragen-en-akkoordrondes` b |
| ACT-05.3 | Escalatie melden aan de hoofdsessie | maker | CAP-18 | `vragen-en-akkoordrondes` b |
| ACT-05.4 | Afkeuring-escalatie met opties voorleggen | AGT-08 | CAP-18 | `regie` u (PRP-072) |
| ACT-05.5 | Besluit over vastgelopen document nemen | ROL-01 | CAP-16 | n.v.t. (mens) |
| ACT-05.6 | Besluit uitvoeren | AGT-08 | CAP-18 | `regie` u (PRP-072) |

## PRC-06 blokkade afhandelen (5 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-06.1 | Blokkade vastleggen en melden | agent | CAP-19 | geen skill: instructie in de agentdefinitie (Eindbericht, status geblokkeerd); of dat volstaat: OPEN-46 |
| ACT-06.4 | Blokkade oplossen of eigenaar toewijzen | AGT-08 | CAP-19, 37 | `regie` u (PRP-072) |
| ACT-06.6 | Geblokkeerde agent hervatten | AGT-08 | CAP-01 | `regie` b |
| ACT-06.5 | Blokkade escaleren | AGT-08 | CAP-18 | `regie` u |
| ACT-06.7 | Escalatiebesluit uitvoeren | AGT-08 | CAP-18 | `regie` u |

## PRC-07 ritme: weekmoment en dagstart (4 stappen)

| ACT | Naam | Uitvoerder | CAP | Skills |
| --- | --- | --- | --- | --- |
| ACT-07.1 | Weekmoment uitvoeren | AGT-08 | CAP-20, 37 | `backlog-regie` n (ASM-105) |
| ACT-07.2 | Cron-taak controleren en zo nodig opnieuw aanzetten | AGT-08 | CAP-38 | `backlog-regie` n |
| ACT-07.3 | Gemist weekmoment melden | AGT-08 | CAP-20 | `backlog-regie` n |
| ACT-07.4 | Dagstart uitvoeren | AGT-08 | CAP-20, 37 | `backlog-regie` n |

## Samenvatting

- **85 stappen:** 7 van Carlo (n.v.t.), 1 zonder skill met een open vraag (ACT-06.1, OPEN-46), 77 met minstens één skill.
- **Van die 77:**
  - 35 zonder skill die uitgebreid of gemaakt moet worden; 9 daarvan gebruiken ook een skill met status onbekend;
  - 27 met minstens één skill die uitgebreid moet worden, en geen nieuwe (ACT-03.1 telt mee: bij AGT-08 als maker);
  - 15 met een nieuwe skill: `backlog-regie` bij 10 stappen, `ontwerp-controle` bij ACT-03.6 en ACT-03.14, `regelbestanden-en-kwaliteitslat` bij ACT-02.57, en bij bijwerken ACT-02.6 en ACT-02.7.
