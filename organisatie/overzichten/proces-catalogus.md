# Procescatalogus

| | |
| --- | --- |
| Model | 1.0, versie 1.0.19. Ronde 1 Goedgekeurd (2026-11-25, Carlo, versie 1.0.4, B-43); ronde 2 Goedgekeurd (2026-11-25, Carlo, versie 1.0.11, B-44, B-45); ronde 3 Goedgekeurd (2026-11-25, Carlo, versie 1.0.19, B-46 t/m B-48); ronde 4 en model 1.0 Goedgekeurd (2026-11-25, Carlo, B-51). PRC-04 is in 1.0.27 en 1.0.28 bijgewerkt (B-50, CHG-069, CHG-070) |
| Afgeleid uit | `register.yaml` (`processen`, `activiteiten`, `beslissingen`, `buiten_scope`) |
| Datum | 2026-11-25 |

**Legenda.** PRC = proces · GOV = akkoordmoment van Carlo · ROL = rol · AGT = agent · ASM = aanname · OPEN = open vraag · FND = bevinding · B = besluit van Carlo · UC1 / UC2 = nieuwe klant / backlog per slice. Soort: primair (levert een resultaat voor de klant), subproces (herbruikbaar, wordt aangeroepen), sturend (stuurt andere processen). Korte namen van de FND- en OPEN-codes staan in de laatste tabel.

## Processen in 1.0

| ID | Naam | Soort | Eigenaar | Status / versie | Start | Einde | Akkoorden | Roept aan | Was in 0.18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRC-01 | nieuwe klant tot ontwerp en sliceplan (UC1) | primair | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Opdracht van Carlo in de hoofdsessie; klantrepo bestaat (ASM-79 – één hoofdsessie per klantproject) | GOV-11 en GOV-17 goedgekeurd; vervolg PRC-02 voor slice 1 | GOV-10 (analysepakket), GOV-15 (richting: architectuur en ontwerpen), GOV-11 (technisch ontwerp volgens profiel), GOV-17 (voorlopig sliceplan) | PRC-03, PRC-04, PRC-05, PRC-06 | PRC-01 nieuwe klant: opdracht tot eerste backlog (0.17) |
| PRC-02 | backlog vullen per slice (UC2, herhaalbaar) | primair | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Weekmoment of dagstart van PRC-07, verzoek van Carlo, of einde van PRC-01 (slice 1); GOV-17 goedgekeurd; geen andere doorloop (ASM-33 – hoogstens één doorloop per project) | GOV-18 goedgekeurd; backlog van de slice in de klantrepo | GOV-07 (keuze volgende slice of wens), GOV-06 (bouwcontract per slice), GOV-18 (backlog per slice); in de wens-tak ook GOV-10, GOV-15 (alleen bij een wijziging van architectuur of profiel of een nieuw paginaontwerp), GOV-11 en GOV-17 (ASM-82, ASM-86) | PRC-03, PRC-04, PRC-05, PRC-06 | PRC-02 backlog uitbreiden met volgende slice (0.17) |
| PRC-03 | akkoord-poort van de project owner | subproces | ROL-01 project owner | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Deliverable ter goedkeuring ingediend; de controle is de eerste stap | Goedgekeurd (na nacontrole bij afwijkende antwoorden); afgekeurd naar PRC-05, of bij GOV-12 terug naar PRC-04; of escalatiebesluit | alle poorten; GOV-08 | PRC-05 | PRC-03 (0.12), kaart op issue |
| PRC-04 | vragenloop en grill-sessie | subproces | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Vraag die het werk blokkeert, of grill-moment | Bevestigd contextverslag, GOV-12, GOV-08 of blokkade | GOV-12 (wijzigingsverzoek of productkeuze), GOV-08 (escalatiebesluit van Carlo) | PRC-03, PRC-06 | PRC-04 (0.17), vragen op issues |
| PRC-05 | afkeuring en herziening | subproces | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Afkeuring met reden | Herzien en opnieuw ter goedkeuring, of escalatie | GOV-08 | PRC-03 | PRC-05 (0.10) |
| PRC-06 | blokkade afhandelen | subproces | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Agent meldt status geblokkeerd | Opgelost, of escalatie | GOV-08 | PRC-04 | PRC-06 (0.3), blocker op issue |
| PRC-07 | ritme: weekmoment en dagstart | sturend (uitwerking in ronde 2) | ROL-02 regie | Goedgekeurd (procesniveau) / stappen Goedgekeurd (B-44, B-45) | Ritmemoment (ASM-84 – tijden van het ritme, ASM-85 – cron in de hoofdsessie) | PRC-02 gestart of niets nodig; melding aan Carlo | GOV-07 | PRC-02 | PRC-07 weekmoment en prioriteren (context), routines van Dr. Evil |
| PRC-08 | organisatie aanpassen | sturend (context, niet uitgewerkt) | ROL-02 regie | n.v.t. | Behoefte aan wijziging of goedgekeurd voorstel | Besluit van Carlo en uitvoering | besluit van Carlo | — | PRC-08 (context), Dr. Evil voerde uit |

## Procesbeschrijvingen en tellingen (ronde 2)

| Proces | Beschrijving | Stappen (ACT) | Beslispunten (G) | Akkoorden (GOV) |
| --- | --- | --- | --- | --- |
| PRC-01 | `processen/PRC-01-nieuwe-klant.md` | 22 | 5 | GOV-10, GOV-15, GOV-11, GOV-17 |
| PRC-02 | `processen/PRC-02-backlog-vullen.md` | 20 | 12 | GOV-07, GOV-10, GOV-15, GOV-11, GOV-17, GOV-06, GOV-18 |
| PRC-03 | `processen/PRC-03-akkoordpoort.md` | 14 | 6 | elke poort; GOV-08 |
| PRC-04 | `processen/PRC-04-vragenloop.md` | 14 | 5 | GOV-12, GOV-08 |
| PRC-05 | `processen/PRC-05-afkeuring.md` | 6 | 2 | GOV-08 |
| PRC-06 | `processen/PRC-06-blokkade.md` | 5 | 2 | GOV-08 |
| PRC-07 | `processen/PRC-07-ritme.md` | 4 | 3 | — (GOV-07 in PRC-02) |
| PRC-08 | context, niet gemodelleerd | — | — | — |
| **Totaal** | | **85** | **35** | **9 akkoordmomenten** (GOV-06, 07, 08, 10, 11, 12, 15, 17, 18). PRC-03 voert het akkoord uit van de poort die hem aanroept. |

Het wijzigingsvoorstel op goedgekeurde rijen staat in `voorstel-model-chg042.md`. Het is goedgekeurd (B-44) en doorgevoerd in 1.0.9:
- **Deel A:** start en einde van PRC-03, GOV-08 bij PRC-03, de aanleiding van PRC-02 en de uitbreidingslijst in de output van PRC-01.
- **Deel B:** de naam van PRC-04, "ontwerp per slice waar nodig" bij PRC-02, OPEN-41 bij PRC-07, PRC-06 roept PRC-04 aan, GOV-12 bij PRC-03, de opmerking bij GOV-06, PRP-074, FND-098 en PRP-080.

De namen van stappen en beslispunten, vergeleken met 0.18, staan in `overzichten/namen-stappen-en-beslispunten.md`.

## Betrokken rollen en agents per proces

| Proces | ROL-01 project owner | ROL-02 regie (AGT-08 hoofdsessie) | ROL-03 business analist (AGT-02 agent Socrates) | ROL-04 systeemarchitect (AGT-03 agent Atlas) | ROL-09 controleur (AGT-09 Socrates-licht, AGT-10 Atlas-licht) |
| --- | --- | --- | --- | --- | --- |
| PRC-01 | ja | ja | ja | ja | ja |
| PRC-02 | ja | ja | alleen in de wens-tak | ja | ja |
| PRC-03 | ja | ja | als maker | als maker | vooraf (bij GOV-18: toets door ROL-04, ASM-83) |
| PRC-04 | bij GOV-12 en GOV-08 | ja | vrager of ontvanger | vrager of ontvanger | — |
| PRC-05 | ja | ja | als maker | als maker | — |
| PRC-06 | bij escalatie | ja | als melder | als melder | — |
| PRC-07 | bij GOV-07 | ja | — | — | — |
| PRC-08 | ja | ja | — | — | — |

## Risico's en open vragen per proces

| Proces | Risico's (FND) | Open (OPEN) |
| --- | --- | --- |
| PRC-01 | FND-005, 018, 022, 033, 044, 089, 090, 091, 092, 093, 095, 096, 097 | OPEN-11, OPEN-35 |
| PRC-02 | FND-005, 013, 018, 022, 033, 044, 088, 089, 090, 091, 092, 093, 094, 095, 096, 097, 098 | OPEN-13 (OPEN-34 beantwoord, B-44) |
| PRC-03 | FND-092, 093, 096, 098 | OPEN-37 |
| PRC-04 | FND-092, 096 | — |
| PRC-05 | FND-092, 096 | — |
| PRC-06 | FND-092, 096 | — |
| PRC-07 | FND-013, 089, 092, 094, 096 | OPEN-31, OPEN-32, OPEN-38, OPEN-40, OPEN-41 |
| PRC-08 | — | — |

## Korte namen van de codes hierboven

| Code | Naam | Code | Naam |
| --- | --- | --- | --- |
| FND-005 | veel akkoordpoorten bij Carlo | FND-092 | stand en rondes niet vast bewaard |
| FND-013 | orchestrator zonder eigen ritme | FND-093 | akkoord zonder eigen bewijs |
| FND-018 | alles na analyse hangt aan Atlas | FND-094 | taken van Dr. Evil zonder skill |
| FND-022 | opdeling, plan en taken zonder controle | FND-095 | juridische keuzes zonder plek |
| FND-033 | geen ontwerper behalve Carlo | FND-096 | hoofdsessie als enig knooppunt |
| FND-044 | intern ontwerp zonder tweede lezer | FND-097 | slice 1 twee keer goedgekeurd |
| FND-088 | regie verbiedt backlog-items | OPEN-11 | proefrun van de skills |
| FND-089 | keten van regie past niet op 1.0 | OPEN-13 | drempel voor aparte agent naast Atlas |
| FND-090 | socrates-licht dekt brieven niet | OPEN-31 | desktop-taak zonder open app? |
| FND-091 | atlas-licht dekt ontwerp en plan niet | OPEN-32 | melding van achtergrond-subagent |
| FND-098 | toets van backlog-items alleen op verzoek | | |
| OPEN-34 | plek en vorm backlog | OPEN-35 | plek van de ontwerp-export |
| OPEN-37 | akkoord vastleggen zonder kaart | OPEN-38 | verloopt een cron-taak? |
| OPEN-40 | cron in VS Code-extensie? | OPEN-41 | cron terwijl Claude bezig is? |

## Buiten scope (B-29)

| ID | Naam | Bron |
| --- | --- | --- |
| PRC-09 | uitvoeringsloop | `bronnen/paperclip-0.18/prc-09.md` |
| PRC-10 | feature overdragen | `bronnen/paperclip-0.18/prc-10.md` |
