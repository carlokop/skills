---
name: documenten-bijwerken
description: Wijzig een document zonder kopie, lees alleen wat je nodig hebt en merk wanneer een document waarop je werk rust is veranderd. Gebruik bij elke wijziging van een document op een issue en bij de start van elke stap die op een document bouwt.
---

# Documenten bijwerken

Doel: per document één geldende versie, minder schrijven en minder lezen. Paperclip bewaart elke revisie. Een kopie naast het document is daarom niet nodig.

## Lezen
1. Haal de gegevens van een document op met een script dat de tekst weglaat (`jq 'del(.body)'`). Je hebt `latestRevisionNumber` en `latestRevisionId` nodig.
2. Lees alleen de rijen of secties die je stap nodig heeft. Laat een script ze op ID of kop uit het document halen. Lees het hele document alleen als je stap het hele document beoordeelt.
3. Noteer bij je werk (comment of contextverslag) op welke revisie het rust: `<key> r<nummer>`, bijvoorbeeld "register r24".

## Bij de start van elke stap
1. Haal voor elk document waarop je werk rust alleen het revisienummer op.
2. Is het nummer gelijk aan je notitie, ga dan door.
3. Is het hoger, laat dan een script jouw revisie en de nieuwste ophalen (`/documents/<key>/revisions`) en toon alleen het verschil. Raakt het verschil je werk, verwerk het dan of stel een vraag. Werk je notitie bij.

## Een goedgekeurd document wijzigen
1. **Geraakte rijen zoeken.** Een hulp-agent leest het hele document en de documenten die eraan gekoppeld zijn. Hij geeft alle rijen terug die de wijziging raakt, met hun ID.
2. **Voorstel.** Zet alleen die rijen in één document `voorstel-<key>-<CHG-ID>`. Per rij: het ID, de huidige tekst, de nieuwe tekst. Ook nieuwe en vervallen rijen. Bovenaan: de revisie van het geldende document waarop het voorstel rust.
3. **Akkoord.** De kaart hangt aan het voorstel (`vragen-en-akkoordrondes`). Tot het akkoord verandert het geldende document niet.
4. **Doorvoeren na akkoord.** De eigenaar vervangt de rijen met een script: lees de tekst en `latestRevisionId`, vervang alleen de rijen uit het voorstel, en sla op met `baseRevisionId` en `changeSummary` "<CHG-ID>: <korte naam>". Schrijf het document nooit helemaal opnieuw uit.
   - Is het document na het voorstel gewijzigd (ander revisienummer of een 409), stop dan en vergelijk. Raakt die wijziging dezelfde rijen, dan wordt het een vraag.
5. **Controle.** Een hulp-agent (Sonnet) vergelijkt oud en nieuw: alleen de rijen uit het voorstel zijn veranderd, en precies zoals goedgekeurd. Wijkt het af, herstel het.
6. **Afkeuring.** Het geldende document blijft zoals het is. Je past het voorstel aan en zet een nieuwe kaart.
7. **Melden.** Zet één regel in het document `status` op het projectissue (Dr. Evil beheert het; bestaat het nog niet, dan maakt Dr. Evil het): "<key> r<oud> → r<nieuw>: <CHG-ID> <korte naam>". Heeft een agent nu werk dat van die rijen afhangt, zet dezelfde regel dan ook op zijn issue.
8. Het voorstel krijgt de status `Verwerkt in <key> r<nummer>`.

## Een concept
Een concept pas je aan in hetzelfde document, als nieuwe revisie. Let op: een nieuwe revisie laat een openstaande kaart op dat document vervallen.

## Niet doen
- Een kopie naast het geldende document maken (`v0xx-`, `-v2`).
- Geschiedenis in het document zetten. Die staat in de revisies, en per wijziging één regel in de wijzigingshistorie.
- Het geldende document wijzigen vóór het akkoord.
- In het document van een andere agent schrijven. Meld het de eigenaar in één regel, met het vraagnummer.

## Bestaande kopieën
Een script zet bovenaan: `Vervallen – geldend is <key> r<nummer>`. Niet verwijderen, want kaarten verwijzen ernaar.
