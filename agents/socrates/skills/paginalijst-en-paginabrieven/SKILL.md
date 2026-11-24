---
name: paginalijst-en-paginabrieven
description: Maakt de paginalijst met "nu" en "later", bepaalt het ontwerpniveau per pagina en schrijft een paginabrief per "nu"-pagina; stemt na het ontwerp de brieven af. Gebruik na de use cases en bij het afstemmen met het ontwerp.
---

# Paginalijst en paginabrieven

> De paden in deze skill zijn de standaard. Schrijft het project andere plekken voor (CLAUDE.md, AGENTS.md, docs/README.md), volg dan het project.

## Doel
Vastleggen wat er op elke pagina staat en waarom. Socrates maakt de paginalijst met "nu" en "later", bepaalt het ontwerpniveau per pagina en schrijft voor elke "nu"-pagina een **paginabrief**. Na het ontwerp stemt hij de brieven af. De brief is bindend voor het bouwcontract; het ontwerp is bindend voor het uiterlijk.

## Trigger
- Nieuw project: na de use cases → paginalijst en brieven; opnieuw na een opmerking van Atlas of een afkeuring bij het akkoord op het analysepakket. Zijn architectuurkeuze en ontwerpen klaar → afstemmen; ook na afkeuring bij het akkoord op de richting.
- Uitbreiding: na de use cases van de uitbreiding, of als de brieven nog ontbreken → paginalijst en brieven; opnieuw na een opmerking van Atlas of een afkeuring bij het akkoord op de use cases en brieven van de uitbreiding. Na het ontwerp → afstemmen; ook na afkeuring bij het akkoord op het paginaontwerp.

## Input
De visie, de use cases, de kern (concept), het design systeem en de patroonbibliotheek als die er zijn, en de profieltabel (`architectuurprofielen`). Bij afstemmen: de ontwerpen (de export die de ontwerper (nu de gebruiker) aanleverde: de vaste versie) en de brieven.

## Output
Het document `pages.md`:
- de **paginalijst**: per pagina naam, doel, paginatype (contentpagina, overzicht, detail, formulier, landingspagina), UC- en AC-ID's, "nu" of "later" met reden, en ontwerpniveau ("brief" of "ontwerp", met het criterium);
- bovenaan een korte **advieslijst**: welke pagina's in slice 1 horen en welke paginatypen je eerst moet ontwerpen;
- een **paginabrief** per "nu"-pagina: paginatype, doel, gegevens (welke velden, uit welke UC of BR), acties, toestanden (leeg, fout, bezig), UC- en AC-ID's;
- bij afstemmen: bijgewerkte brieven met een **lijst van de verschillen** met het ontwerp. Bij een uitbreiding: de bijgewerkte paginalijst met per geraakte pagina ontwerpniveau en brief, of "geen pagina geraakt".

## Werkwijze
1. Lees de visie, de use cases en de kern; lees design systeem en patroonbibliotheek als die er zijn.
2. Benoem de pagina's met doel, paginatype en UC- en AC-ID's.
3. Kies per pagina "nu" of "later" met reden: "nu" als de pagina een kern-eis dekt of slice 1 haar nodig heeft; "later" als ze geen kern-eis dekt of op een andere pagina wacht. De "nu"-pagina's samen dekken de kern.
4. Bepaal het ontwerpniveau. "Ontwerp" als minstens één regel waar is: (1) eerste pagina van een paginatype; (2) een component die niet in design systeem of patroonbibliotheek staat; (3) merkbepalend (home, landingspagina, campagne); (4) conversiegevoelig (aanmelden, bestellen, offerte, betalen). Anders "brief". Noem de regel. Jij stelt voor, Atlas toetst, de gebruiker beslist.
5. Schrijf een brief voor elke "nu"-pagina. Een "later"-pagina krijgt nog geen brief (dat gebeurt bij een latere uitbreiding).
6. Zet de advieslijst bovenaan.
7. Laat lijst en brieven toetsen door Atlas: zet een verzoek aan Atlas in je eindbericht en stop (status "wacht op antwoorden"; `vragen-en-akkoordrondes`). De aanroeper start Atlas en geeft zijn opmerkingen terug. Zonder opmerkingen volgt bij een nieuw project de kern en het akkoord op het analysepakket, bij een uitbreiding het akkoord op de use cases en brieven, met open vragen per keuze voor de gebruiker.
8. **Afstemmen:** vergelijk het ontwerp met de brief. Voegt het ontwerp een gegeven of actie toe of laat het er een weg, werk dan de brief bij en zet het verschil in de lijst. Mock data is nooit een bron. Een vraag over het ontwerp stel je aan de ontwerper (nu de gebruiker), als open vraag in je eindbericht. Daarna volgt het akkoord op de richting (nieuw project) of op het paginaontwerp (uitbreiding).
9. Bij een uitbreiding: bepaal eerst of de uitbreiding pagina's raakt. Zo niet, schrijf "geen pagina geraakt".

## Kwaliteitscriteria
- Elke "nu"-pagina heeft een brief met gegevens, acties en UC/AC.
- Het ontwerpniveau noemt het criterium.
- Elk gegeven in een brief komt uit een UC/AC of BR, niet uit mock data.
- De "nu"-pagina's dekken de kern (akkoord op het analysepakket).
- Na afstemmen zeggen brief en ontwerp hetzelfde over gegevens en acties (akkoord op de richting of op het paginaontwerp); de verschillen staan bij de open vragen.

## Tools en templates
Sjabloon voor `pages.md` (paginalijst als tabel, brief als vast blok), als bestand op de documentlocatie; de vragen in je eindbericht (`vragen-en-akkoordrondes`).

## Afhankelijkheden
`requirements-analysis` (visie), `uml-use-cases`, `architectuurprofielen`, `architect-use-case-review`, `vragen-en-akkoordrondes`.

## Voorbeeld
Webshop. *Productdetail*: type detail, UC-01 en UC-02, "nu", ontwerpniveau "ontwerp" (regel 1). Brief: gegevens naam, prijs, voorraad (BR-02), foto's; actie "in winkelwagen" (AC-02.1); toestanden "niet op voorraad" en "laden". *Over ons*: contentpagina, "later", nog geen brief. Blijkt bij afstemmen dat het ontwerp ook de levertijd toont, dan zet Socrates "levertijd" in de brief en in de lijst van verschillen.
