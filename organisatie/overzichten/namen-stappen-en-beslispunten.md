# Namen van stappen en beslispunten: 0.18 naar 1.0

| | |
| --- | --- |
| Model | 1.0, versie 1.0.11, ronde 2 Goedgekeurd (2026-11-25, Carlo, B-44, B-45). De namen zijn goedgekeurd in B-44 (vraag 16). De wijzigingen in 1.0.9 komen voort uit de antwoorden 3 en 10, en staan hieronder als "na B-44"; ze zijn goedgekeurd in B-45 (vraag 21), met de correctie bij G-02.14. In 1.0.10 is de naam van ACT-07.3 in de tabel "Nieuw in 1.0" gelijkgetrokken (CHG-047). In 1.0.27 heet ACT-04.4 "Wijzigingsverzoek opstellen" (was "Wijzigingsverzoek of productvraag opstellen"; B-50, CHG-069). Model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51). |
| Afgeleid uit | `register.yaml` (`activiteiten`, `beslissingen`, `korte_namen`) en `bronnen/paperclip-0.18/codes-en-namen.md` |
| Datum | 2026-11-25 |

**Legenda.** ACT = stap · G = beslispunt · PRC = proces. De korte naam van een stap is het veld `naam`; die van een beslispunt staat in `korte_namen`. Stappen en beslispunten die niet in deze lijst staan, hebben dezelfde naam als in 0.18 (op hoofdletters na). De stappen die niet zijn overgenomen, staan in `register.yaml` (`stappen_0_18_niet_overgenomen`).

## Gewijzigd ten opzichte van 0.18

| Code | Naam in 0.18 | Naam in 1.0 | Waarom |
| --- | --- | --- | --- |
| ACT-01.2 | project aanmaken en opdracht overdragen | Opdracht vastleggen en doorgeven aan de analist | Er is geen Paperclip-project meer (B-28). |
| ACT-01.8 | ontwerp overdragen aan Atlas en ontwerper | Architectuur en paginaontwerp laten starten | De hoofdsessie start Atlas en meldt het aan Carlo (B-30, B-38). |
| ACT-01.16 | technisch ontwerp opdelen in slices | Voorlopig sliceplan opstellen | Het sliceplan heeft een eigen akkoord (B-32, GOV-17). |
| ACT-02.1 | volgende wens bepalen uit de volgorde | Volgende slice of wens bepalen | UC2 neemt ook de slices uit het plan (B-35). |
| ACT-02.2 | volgende wens kiezen | Volgende slice of wens kiezen | Idem. |
| ACT-02.5 | wens in slices opdelen en ordenen | Wens opdelen in slices en sliceplan bijwerken | Het resultaat is een bijgewerkt sliceplan (GOV-17). |
| ACT-02.11 | taken maken en op backlog zetten | Backlog-items maken uit de werkpakketten | Het backlog is een bestand; de hoofdsessie maakt de items (B-30, B-37). |
| ACT-02.17 | uitbreidingslijst bijwerken | Uitbreidingslijst en stand bijwerken | Ook de stand van de keten wordt bijgewerkt (ASM-80). |
| ACT-02.54 | backlog gereed van uitbreiding controleren | Backlog gereed controleren | De stap geldt nu ook voor slice 1 (B-35). |
| ACT-03.3 | goedkeuring vastleggen en melden | Antwoorden verwerken (na B-44; tot 1.0.8: "Antwoorden verwerken en goedkeuring vastleggen") | Het akkoord bestaat uit antwoorden op vragen (ASM-91). Na B-44 (antwoord 3) is het vastleggen een aparte stap: ACT-03.13. |
| ACT-07.3 | — (nieuw in 1.0.5) | Gemist weekmoment melden (na B-44; tot 1.0.8: "Gemist weekmoment inhalen") | Antwoord 10 (B-44): de inhaalcheck meldt alleen. |
| PRC-04 | vragenloop en grill-sessie tussen agents | vragenloop en grill-sessie | Ook vragen aan Carlo lopen erdoor (ASM-94; CHG-042, B-44). |
| ACT-05.3 | escalatie melden aan Dr. Evil | Escalatie melden aan de hoofdsessie | Dr. Evil vervalt (B-30). |
| ACT-06.1 | blokkade vastleggen | Blokkade vastleggen en melden | Het melden aan Dr. Evil (0.18 ACT-06.3) is hierin opgegaan. |
| G-02.1 | is de volgende wens duidelijk? | is de volgende slice of wens duidelijk? | Zoals ACT-02.1. |
| G-02.8 | loopt er al een uitbreiding? | loopt er al een doorloop? | Een doorloop kan ook een slice uit het plan zijn. |
| G-06.2 | kan Dr. Evil de blokkade oplossen? | kan de hoofdsessie het oplossen? | Dr. Evil vervalt (B-30). |

## Nieuw in 1.0

| Code | Naam | Proces |
| --- | --- | --- |
| ACT-02.57 | Conventiebestand, kwaliteitslat en regelbestanden opstellen (slice 1) (na CHG-056, B-47; tot 1.0.17 "Conventiebestand opstellen (slice 1)") | PRC-02 (was ACT-01.56 in PRC-01) |
| ACT-02.58 | Leesbare versie opnieuw maken | PRC-02 |
| ACT-03.5 | Controle laten uitvoeren | PRC-03 |
| ACT-03.6 | Controle uitvoeren | PRC-03 |
| ACT-03.7 | Bevindingen verwerken | PRC-03 |
| ACT-03.8 | Vragen aan de project owner stellen | PRC-03 |
| ACT-03.9 | Antwoorden letterlijk teruggeven | PRC-03 |
| ACT-03.10 | Vastgelopen controle voorleggen | PRC-03 |
| ACT-03.11 | Besluit over de controle doorgeven | PRC-03 |
| ACT-03.12 | Verwerking laten nacontroleren (na B-44) | PRC-03 |
| ACT-03.13 | Goedkeuring vastleggen (na B-44) | PRC-03 |
| ACT-03.14 | Verwerking nacontroleren (na B-44) | PRC-03 |
| G-03.6 | antwoord afwijkend van advies? (na B-44) | PRC-03 |
| G-03.7 | verwerking in orde? (na B-44) | PRC-03 |
| G-07.3 | gemist weekmoment alsnog? (na B-44) | PRC-07 |
| ACT-04.57 | Vragen doorgeven aan de ontvanger | PRC-04 |
| ACT-04.58 | Antwoorden letterlijk teruggeven aan de vrager | PRC-04 |
| ACT-06.6 | Geblokkeerde agent hervatten | PRC-06 |
| ACT-06.7 | Escalatiebesluit uitvoeren | PRC-06 |
| ACT-07.1 | Weekmoment uitvoeren | PRC-07 |
| ACT-07.2 | Cron-taak controleren en zo nodig opnieuw aanzetten | PRC-07 |
| ACT-07.3 | Gemist weekmoment melden (na B-44; tot 1.0.8 "Gemist weekmoment inhalen") | PRC-07 |
| ACT-07.4 | Dagstart uitvoeren | PRC-07 |
| G-02.9 | slice uit het plan of wens? | PRC-02 |
| G-02.10 | eerste slice van het project? | PRC-02 |
| G-02.11 | slagen de vaste controles? | PRC-02 |
| G-02.12 | ontwerp per slice nodig? | PRC-02 |
| G-02.13 | raakt de slice het globale ontwerp? | PRC-02 |
| G-02.14 | blijft er een inhoudelijke wijziging? (sinds 1.0.7; in deze lijst stond tot 1.0.8 nog "inhoud van het contract veranderd?", de naam uit 1.0.6) | PRC-02 |
| G-03.2 | volledig gecontroleerd? | PRC-03 |
| G-03.3 | controle naar Carlo? | PRC-03 |
| G-03.4 | uitkomst van de beoordeling? | PRC-03 |
| G-03.5 | nieuwe keuze uit de verwerking? | PRC-03 |
| G-04.53 | is Carlo de ontvanger? | PRC-04 |
| G-05.2 | doorgaan of stoppen? | PRC-05 |
| G-06.3 | tweede melding van dezelfde blokkade? | PRC-06 |
| G-07.1 | weekmoment gemist? | PRC-07 |
| G-07.2 | 10 of minder open items? | PRC-07 |

## Teruggezet naar de naam uit 0.18 (in 1.0.5 even anders)
ACT-01.10, 01.12, 01.13, 01.24, 01.29, 01.58, 01.59, 01.60, 02.9, 02.12, 02.13, 02.15, 02.55, 02.56, 03.4, 04.2, 04.53, 05.4, 05.5, 05.6, 06.4; G-01.4, 01.6, 01.7, 01.8, 01.9, 02.2, 02.5, 04.52 (CHG-043).
