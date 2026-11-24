---
name: documenten-bijwerken
description: Wijzig een document zonder kopie, lees alleen wat je nodig hebt en merk wanneer een document waarop je werk rust is veranderd. Gebruik bij elke wijziging van een document en bij de start van elke stap die op een document bouwt.
---

# Documenten bijwerken

Doel: per document één geldende versie, minder schrijven en minder lezen. Het versiebeheer van het project (git) bewaart elke versie. Een kopie naast het document is daarom niet nodig.

## Lezen
1. Lees van een document eerst alleen de kop: status en versie.
2. Lees alleen de rijen of secties die je stap nodig heeft. Zoek ze op ID of kop (Grep) en lees alleen dat deel. Lees het hele document alleen als je stap het hele document beoordeelt.
3. Noteer bij je werk (eindbericht of contextverslag) op welke versie het rust: `<bestand> v<versie>`, bijvoorbeeld "requirements.md v1.3".

## Bij de start van elke stap
1. Lees voor elk document waarop je werk rust alleen de versie.
2. Is de versie gelijk aan je notitie, ga dan door.
3. Is ze hoger, bekijk dan alleen het verschil: de regels in de wijzigingshistorie sinds jouw versie, of `git diff` / `git log -p` op het bestand als je Bash hebt. Raakt het verschil je werk, verwerk het dan of stel een vraag. Werk je notitie bij.

## Een goedgekeurd document wijzigen
1. **Geraakte rijen zoeken.** Lees het hele document en de documenten die eraan gekoppeld zijn. Zoek alle rijen die de wijziging raakt, met hun ID.
2. **Voorstel.** Zet alleen die rijen in één bestand `voorstel-<document>-<korte naam>.md` naast het document. Per rij: het ID, de huidige tekst, de nieuwe tekst. Ook nieuwe en vervallen rijen. Bovenaan: de versie van het geldende document waarop het voorstel rust.
3. **Akkoord.** De open vragen voor de gebruiker horen bij het voorstel (`vragen-en-akkoordrondes`). Tot het akkoord verandert het geldende document niet.
4. **Doorvoeren na akkoord.** De eigenaar vervangt alleen de rijen uit het voorstel, rij voor rij (Edit), verhoogt de versie en zet één regel in de wijzigingshistorie: "<korte naam> (voorstel, akkoord <datum>)". Schrijf het document nooit helemaal opnieuw uit.
   - Is het document na het voorstel gewijzigd (andere versie dan bovenaan het voorstel), stop dan en vergelijk. Raakt die wijziging dezelfde rijen, dan wordt het een vraag.
5. **Controle.** Vraag in je eindbericht om een controle door de lichte variant (socrates-licht / atlas-licht); de aanroeper start die. Die vergelijkt oud en nieuw: alleen de rijen uit het voorstel zijn veranderd, en precies zoals goedgekeurd. Wijkt het af, herstel het.
6. **Afkeuring.** Het geldende document blijft zoals het is. Je past het voorstel aan en legt nieuwe open vragen voor.
7. **Melden.** Zet één regel in je eindbericht: "<document> v<oud> → v<nieuw>: <korte naam>". Heeft een andere agent nu werk dat van die rijen afhangt, noem die agent erbij; de aanroeper geeft het door.
8. Het voorstel krijgt de status `Verwerkt in <document> v<versie>`.

## Een concept
Een concept pas je aan in hetzelfde bestand. Let op: een wijziging laat openstaande vragen over dat document vervallen; leg ze opnieuw voor.

## Niet doen
- Een kopie naast het geldende document maken (`v0xx-`, `-v2`).
- Geschiedenis in het document zetten. Die staat in het versiebeheer, en per wijziging één regel in de wijzigingshistorie.
- Het geldende document wijzigen vóór het akkoord.
- In het document van een andere agent schrijven. Zet het als verzoek aan de eigenaar in je eindbericht, in één regel.

## Bestaande kopieën
Zet bovenaan: `Vervallen – geldend is <document> v<versie>`. Niet verwijderen, want andere documenten kunnen ernaar verwijzen.
