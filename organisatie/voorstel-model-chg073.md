# Voorstel CHG-073: paginagegevens, opruimmoment en plan in het taakbestand

| | |
| --- | --- |
| Status | Goedgekeurd (2026-11-25, Carlo, B-53): alle vijf gestelde vragen met ja, volgens het advies; geen nacontrole nodig. Doorgevoerd in het model (CHG-073) en door de hoofdsessie in `backlog-regie`. De hoofdsessie stelde de vragen gesplitst in vijf (zie "Zo gesteld" onderaan), na de korte toets door socrates-licht. |
| Aanleiding | Bij het doorvoeren van fase 1 (PRC-08, skill `backlog-regie`) stelde Atlas in zijn feitencontrole voor om twee velden aan het taakbestand toe te voegen: het paginatype en het opruimmoment. In de herziening vroeg hij daarnaast om het pad van het implementatieplan in het veld Werkpakket. Socrates-licht vond twee punten in `backlog-regie` die niet in ASM-102 of ACT-02.54 staan: "n.v.t." als paginabrief bij een backendtaak, en een controle bij "backlog gereed" dat elke frontendtaak een paginabrief en een paginatype noemt. De hoofdsessie heeft die twee punten uit `backlog-regie` gehaald tot dit voorstel is goedgekeurd. Alles samen verandert het goedgekeurde ASM-102 en ACT-02.54, dus het loopt via dit voorstel. |
| Bron | `agents/atlas/agents/atlas.md` r.43 ("Elk frontendpakket verwijst naar een paginabrief en een paginatype"); `agents/atlas/skills/architect-implementation-plan/SKILL.md` r.93 ("het later opruimen (contract-stap, met trigger of datum)"), r.156 (per taak de compatibiliteit: afnemer, overgangsregel, test) en r.196 (kwaliteitscriterium: "elk frontendpakket verwijst naar brief en paginatype"); `agents/socrates/skills/backlog-regie/SKILL.md`, sectie 2 (sjabloon van het taakbestand) en sectie 3 (backlog gereed), op branch feature/doorvoeren-fase-1. |
| Datum | 2026-11-25 |

**Legenda.** CHG = wijziging · B = besluit van Carlo · ACT = stap · ASM = aanname · PRP = voorstel voor agents en skills · AGT-03 Atlas · AGT-08 hoofdsessie · r. = regelnummer.

**Over de naam van het veld.** Atlas noemt het opruimen "een werkpakket met een voorwaarde" (r.93). Het woord "voorwaarde" betekent in `regie` r.43 en `architect-implementation-plan` r.193 en r.196 al iets anders: wanneer het ontwerp per slice en het plan meegaan in het akkoord op het bouwcontract. Het veld heet daarom **"Opruimen vanaf"**.

## Wat er verandert

**A. Gegevens uit het plan van Atlas overnemen in het taakbestand (ASM-102, ACT-02.11).**
- **Paginatype** bij een frontendtaak (atlas.md r.43, r.196). Zonder dit veld weet de bouwsessie wel welke brief geldt, maar niet welk paginatype (bijvoorbeeld "overzicht" in het voorbeeld van r.197).
- **Opruimen vanaf** bij een opruimtaak: de trigger of datum vanaf wanneer het oude gedrag weg mag (r.93). Een opruimtaak haalt na een breaking change het oude gedrag weg, zoals een oud veld of een oude koppeling, als alle afnemers op het nieuwe zijn overgezet. Zonder dit veld kan een bouwsessie de taak te vroeg oppakken.
- **Pad van het implementatieplan** in het bestaande veld Werkpakket: "Werkpakket: <ID, naam en pad van het implementatieplan>" (Atlas). De bouw vindt dan per taak de overgangsregel en de compatibiliteitstest bij een breaking change (plan sectie 7, r.156).
- **"n.v.t."** bij paginabrief en paginatype als de taak geen pagina heeft. Dit is mijn eigen voorstel, geen punt van Atlas: zo is het veld altijd ingevuld en valt een vergeten brief op.

**B. Controle bij "backlog gereed" (ACT-02.54).** Elke frontendtaak noemt een paginabrief en een paginatype, en elke opruimtaak noemt vanaf wanneer het mag. Dat is het kwaliteitscriterium van Atlas voor zijn werkpakketten (r.196), nu ook voor de taken die eruit volgen. De hoofdsessie doet dit vóór Carlo's akkoord op het backlog (GOV-18).

Alle gegevens komen uit het plan van Atlas, zoals werkpakket, brief en acceptatiecriteria. De hoofdsessie verzint ze niet. Staat een gegeven niet in het plan, dan is het een vraag aan Atlas (PRC-04, ASM-109).

**Niet in dit voorstel:**
- "plus de volgorde binnen het pakket (van jou)" bij de afhankelijkheden. De hoofdsessie haalde dat uit `backlog-regie`, omdat de afhankelijkheden volgens ASM-102 uit het plan van Atlas komen. Atlas bevestigt dat: levert één werkpakket meerdere taken op, dan is de volgorde een vraag aan Atlas (ASM-109).
- De toets door Atlas (`architect-implementation-plan` r.194). Of die ook het paginatype en het opruimmoment nakijkt, is een technische keuze van Atlas. **Gevolg:** dat komt in fase 3, bij PRP-080. Het is geen vraag aan Carlo.
- B-45 (register r.61) is het historische besluit waarmee ASM-102 is bevestigd. Het verandert niet.

## Geraakte rijen

| Plek | Nu (goedgekeurd) | Voorstel |
| --- | --- | --- |
| `register.yaml`, ASM-102, `tekst` | "... begint met: titel, slice, werkpakket, paginabrief, acceptatiecriteria en afhankelijkheden. ... Werkpakket, brief, acceptatiecriteria en afhankelijkheden komen uit het plan van Atlas; ..." | "... begint met: titel, slice, werkpakket (ID, naam en pad van het implementatieplan), paginabrief ('n.v.t.' bij een taak zonder pagina), paginatype ('n.v.t.' bij een taak zonder pagina), acceptatiecriteria, afhankelijkheden, en bij een opruimtaak na een breaking change 'Opruimen vanaf' (trigger of datum). ... Werkpakket, brief, paginatype, acceptatiecriteria, afhankelijkheden en het opruimmoment komen uit het plan van Atlas; ..." De rest blijft gelijk. |
| `register.yaml`, ASM-102, `bron` | "B-44; ACT-02.11; atlas.md r.43; B-48" | dezelfde, plus "architect-implementation-plan r.93, r.156, r.196; CHG-073" |
| `register.yaml`, ACT-02.11, `output` | "per taak een bestand in docs/backlog/todo/ (ASM-102), met titel, slice, werkpakket, paginabrief, AC-ID's en afhankelijkheden, en in de kop verwijzingen ..." | "... met titel, slice, werkpakket met het pad van het plan, paginabrief, paginatype, AC-ID's, afhankelijkheden, en bij een opruimtaak 'Opruimen vanaf', en in de kop verwijzingen ..." |
| `register.yaml`, ACT-02.54, `output` | "elk taakbestand heeft de velden van ASM-102; ..." | "elk taakbestand heeft de velden van ASM-102; elke frontendtaak noemt een paginabrief en een paginatype (architect-implementation-plan r.196); elke opruimtaak noemt 'Opruimen vanaf'; ..." |
| `register.yaml`, skill `backlog-regie` (r.484), `output` en `validatie` | output: "taak- en epicbestanden in docs/backlog/todo/ (ASM-101, ASM-102), met in de kop ..."; validatie: "elk werkpakket is gedekt door taakbestanden met de velden van ASM-102; ..." | output: ongewijzigde tekst (ASM-102 bevat nu de nieuwe velden); validatie erbij: "elke frontendtaak noemt een paginabrief en een paginatype; elke opruimtaak 'Opruimen vanaf'" |
| `processen/PRC-02-backlog-vullen.md` r.67 en r.68 (ACT-02.11, ACT-02.54) | zoals nu | zoals in het register hierboven |
| `voorstellen.md`, PRP-077, Output en Validatie | "... met de velden van ASM-102 ..." | dezelfde tekst; bij de validatie erbij: "elke frontendtaak noemt een paginabrief en een paginatype; elke opruimtaak 'Opruimen vanaf'" |
| `eindontwerp.html`, `IO` van ACT-02.11 en ACT-02.54 (data) | zoals nu | zoals in het register hierboven |
| `agents/socrates/skills/backlog-regie/SKILL.md`, sectie 2 en 3 (doorvoeren via PRC-08, door de hoofdsessie) | sjabloon zonder deze velden; "n.v.t." en de controle op frontendtaken zijn er tot het akkoord uit gehaald | in het sjabloon: `- Werkpakket: <ID, naam en pad van het implementatieplan>`, `- Paginabrief: <pad of ID, of "n.v.t." bij een taak zonder pagina>`, `- Paginatype: <uit het plan, of "n.v.t.">` en `- Opruimen vanaf: <trigger of datum, alleen bij een opruimtaak na een breaking change>`; de bron van deze velden is het plan van Atlas; bij "backlog gereed": elke frontendtaak noemt een paginabrief en een paginatype, elke opruimtaak "Opruimen vanaf" |

## Vragen aan Carlo

Vraag 1 en 2 vormen samen het akkoord op dit voorstel. Ze zijn gesplitst: vraag 1 gaat over wat er in een taakbestand staat, vraag 2 over de controle vóór je akkoord op het backlog.

1. Neemt elk taakbestand drie gegevens uit het plan van Atlas over: het paginatype bij een paginataak, vanaf wanneer iets ouds mag worden opgeruimd, en het pad naar het plan zelf?
   - Het gaat om: Atlas zet deze gegevens al in zijn plan, maar het taakbestand neemt ze nu niet over. Een opruimtaak haalt na een grote wijziging het oude weg, zoals een oud veld of een oude koppeling; dat mag pas als alles op het nieuwe is overgezet, en het plan zegt vanaf wanneer. Met het pad vindt de bouw per taak ook hoe de overgang moet en welke test erbij hoort. Mijn eigen voorstel daarbij: staat er bij een taak geen pagina, dan staat er "n.v.t.", zodat een vergeten veld opvalt.
   - Advies: ja.
   - Bij nee: het taakbestand blijft zoals het is; de bouw zoekt die gegevens zelf op in het plan van Atlas.
2. Controleert de hoofdsessie vóór je akkoord op het backlog dat elke paginataak een brief en een paginatype noemt, en elke opruimtaak vanaf wanneer het mag?
   - Het gaat om: dezelfde eis die Atlas aan zijn eigen plan stelt, nu ook voor de taken. Zo zie je een ontbrekend gegeven vóór de bouw, niet tijdens. Zeg je nee op vraag 1, dan controleert ze alleen de brief.
   - Advies: ja.
   - Bij nee: geen extra controle; de toets door Atlas blijft zoals hij is.

**Zo gesteld (2026-11-25), met de antwoorden van Carlo.** Na de korte toets door socrates-licht splitste de hoofdsessie vraag 1 in vier vragen, legde ze in vraag 5 "paginataak" en "opruimtaak" uit, en liet ze de bijzin over de operatie of het template uit het bouwcontract weg (geen bron). De vragen zoals doorgegeven (ingekort door de hoofdsessie, "..."):
1. "Neemt elk taakbestand bij een paginataak (een taak die een pagina bouwt) het paginatype over uit het plan van Atlas? ..." Antwoord: "Ja, overnemen".
2. "Neemt een opruimtaak over vanaf wanneer iets ouds mag worden weggehaald? ... Advies: ja, in een veld 'Opruimen vanaf'. ..." Antwoord: "Ja, 'Opruimen vanaf'".
3. "Noemt het veld 'Werkpakket' in elk taakbestand ook het pad naar het implementatieplan van Atlas? ..." Antwoord: "Ja, met pad".
4. "Staat er 'n.v.t.' bij de paginabrief (en het paginatype) als een taak geen pagina heeft, zoals een backendtaak? ... Dit is een voorstel van Socrates zelf ..." Antwoord: "Ja, 'n.v.t.'".
5. "Controleert de hoofdsessie vóór je akkoord op het backlog dat elke paginataak ... een paginabrief en een paginatype noemt, en elke opruimtaak ... vanaf wanneer dat mag? ..." Antwoord: "Ja, controleren".

## Koppeltabel (alleen voor de controle, niet voor Carlo)

| Vraag | Element |
| --- | --- |
| 1 | ASM-102 (`tekst`, `bron`): paginatype, "Opruimen vanaf", pad van het plan in Werkpakket, "n.v.t." (eigen keuze); ACT-02.11; PRP-077; `backlog-regie` sectie 2 |
| 2 | ACT-02.54; skill `backlog-regie` in het register (validatie); PRP-077 (validatie); `backlog-regie` sectie 3 |
| geen vraag | de volgorde binnen het pakket (bevestigd door Atlas, ASM-109); de toets door Atlas (fase 3, PRP-080); B-45 historisch |
