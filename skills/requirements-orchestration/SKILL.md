---
name: requirements-orchestration
description: Neem nieuwe wensen en wijzigingen in als enige loket en leid ze door de requirements-fase: registreren op de backlog, Socrates inschakelen, de gebruiker laten goedkeuren en daarna pas Atlas starten. Gebruik wanneer een nieuwe wens, wijzigingsverzoek of vraag over de bedoeling van een eis binnenkomt.
---

# Requirements door de workflow leiden

Doe zelf geen requirementsanalyse. Formuleer, vul of verbeter geen eisen. Dat is het werk van Socrates.

## Intake

Jij bent het enige loket voor nieuwe wensen en wijzigingen. Een wens die via een andere agent bij jou komt, behandel je op dezelfde manier.

* Registreer elke wens als issue op de backlog, met de wens in de woorden van de gebruiker, de bron (issue of comment) en de datum. Vul niets in wat niet is gezegd.
* Geef de wens direct daarna aan Socrates (stap 1 hieronder). Wacht niet tot hij bovenaan de backlog staat.
* Controleer of de wens al bestaat of overlapt met een ander issue (`backlog-management`). Stel dan samenvoegen voor.
* De gebruiker bepaalt de plek op de backlog. Is iets dringend, dan zet de gebruiker het bovenaan.
* Raakt een wijziging de goedgekeurde scope, meld dat dan direct (trigger 5 in `escalation-management`).

## Van wens tot Atlas

1. Een wens gaat direct bij intake via `overdracht` naar Socrates, met de wens zoals de gebruiker die gaf, de context, wat je al weet en de plek op de backlog. Socrates werkt de wensen af in de volgorde van de backlog. Verandert de gebruiker die volgorde, meld dat dan aan Socrates. Analyse en ontwerp tellen niet mee voor de limiet van "Bezig" (`delivery-management`).
2. Zet Socrates het document op `Ter goedkeuring`, leg dan de keuzes voor aan de gebruiker als kaart met korte vragen (B-23, `vragen-en-akkoordrondes`), met een verwijzing naar `docs/architecture/requirements.md`, de use cases en de bedrijfsregels als naslag. Wacht.
3. Alleen de gebruiker keurt goed. Ga pas verder als de status `Goedgekeurd` is en de bevestiging van de gebruiker zichtbaar op het issue staat.
4. Start dan Atlas met `overdracht`, met verwijzing naar de goedgekeurde documenten en hun ID's (`FR-001`, `UC-01`, `BR-001`). Herhaal de inhoud niet.
5. Een vraag van Atlas, een developer of de tester over de bedoeling van een eis gaat naar Socrates, niet naar jou.
6. Meldt Atlas dat een eis technisch problematisch is, behandel dat dan als wijzigingsverzoek: naar Socrates en daarna naar de gebruiker. Pas de goedgekeurde scope nooit stilzwijgend aan.

## Aanvulling PRC-08 (model 0.14): project aanmaken bij een opdracht (ACT-01.2)

Besluit: B-13, ASM-31, ASM-34. Bron: `skill-specificaties` op WEB-19.

Bij een opdracht voor een nieuwe klant maak jij het Paperclip-project aan, met de repository die Carlo heeft aangemaakt (ACT-01.1, ACT-01.2). Jij maakt zelf geen repository aan (Paperclip kan dat ook niet).

1. Lees de opdracht en zoek de link naar de git-repository.
2. Controleer of het project al bestaat, zodat er nooit twee komen (ASM-31). Socrates kan het al hebben aangemaakt (ACT-01.51, regel "één loket").
3. Bestaat het niet, maak het project dan aan en koppel de repository.
4. Ontbreekt de link, maak het project dan zonder repository aan en vraag de link na bij Carlo (ASM-34). Koppel de repository daarna.
5. Draag de opdracht over aan Socrates, in dat project (`overdracht`).

Kwaliteitscriteria: één project per klant; de repository staat aan het project gekoppeld; het overdrachtsissue staat in dat project.

Open (OPEN-15, M-14): of jij en Socrates een project mogen aanmaken is nog niet getest. Weigert Paperclip het, meld het dan als blokkade (trigger 1 in `escalation-management`); dan maakt Carlo het project aan.

Een rechtstreekse opdracht aan Socrates komt als melding bij jou binnen (PRP-001, ACT-01.51). Socrates begint inhoudelijk pas na jouw toewijzing: één loket blijft.

Voorbeeld: Carlo maakt de repository *bakkerij-site* aan en geeft de opdracht met die link. Er is nog geen project: je maakt *Bakkerij* aan met de repository en draagt de opdracht in dat project over aan Socrates.
