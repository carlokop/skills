---
name: paginalijst-en-paginabrieven
description: Maakt de paginalijst met "nu" en "later", bepaalt het ontwerpniveau per pagina en schrijft een paginabrief per "nu"-pagina; stemt na het ontwerp de brieven af. Gebruik na de use cases (ACT-01.27, ACT-02.15) en bij het afstemmen met het ontwerp (ACT-01.58, ACT-02.56).
---

# Paginalijst en paginabrieven

Besluit: B-10, PRP-030, PRP-031, PRP-032, PRP-041, PRP-042. CAP-24. Bron: `skill-specificaties` op WEB-19.

## Doel
Vastleggen wat er op elke pagina staat en waarom. Socrates maakt de paginalijst met "nu" en "later", bepaalt het ontwerpniveau per pagina en schrijft voor elke "nu"-pagina een **paginabrief**. Na het ontwerp stemt hij de brieven af. De brief is bindend voor het bouwcontract; het ontwerp is bindend voor het uiterlijk (PRP-031).

## Trigger
- PRC-01: na de use cases (ACT-01.9) → ACT-01.27; terug na een opmerking van Atlas (G-01.4) of afkeuring bij GOV-10. Zijn architectuurkeuze en ontwerpen klaar (G-01.9) → afstemmen (ACT-01.58); ook na afkeuring bij GOV-15.
- PRC-02: na de use cases van de uitbreiding (ACT-02.12), of als de brieven nog ontbreken (G-02.2) → ACT-02.15; terug na G-02.5 of afkeuring bij GOV-02. Na het ontwerp (ACT-02.16) → afstemmen (ACT-02.56); ook na afkeuring bij GOV-14.

## Input
De visie, de use cases, de kern (concept), het design systeem en de patroonbibliotheek als die er zijn, en de profieltabel (`architectuurprofielen`). Bij afstemmen: de ontwerpen (de export die de ontwerper als bijlage op het issue zette: de vaste versie, PRP-042) en de brieven.

## Output
Het document `pages.md`:
- de **paginalijst**: per pagina naam, doel, paginatype (contentpagina, overzicht, detail, formulier, landingspagina), UC- en AC-ID's, "nu" of "later" met reden, en ontwerpniveau ("brief" of "ontwerp", met het criterium);
- bovenaan een korte **advieslijst**: welke pagina's in slice 1 horen en welke paginatypen je eerst moet ontwerpen;
- een **paginabrief** per "nu"-pagina: paginatype, doel, gegevens (welke velden, uit welke UC of BR), acties, toestanden (leeg, fout, bezig), UC- en AC-ID's;
- bij afstemmen: bijgewerkte brieven met een **lijst van de verschillen** met het ontwerp. In UC2: de bijgewerkte paginalijst met per geraakte pagina ontwerpniveau en brief, of "geen pagina geraakt".

## Werkwijze
1. Lees de visie, de use cases en de kern; lees design systeem en patroonbibliotheek als die er zijn.
2. Benoem de pagina's met doel, paginatype en UC- en AC-ID's.
3. Kies per pagina "nu" of "later" met reden: "nu" als de pagina een kern-eis dekt of slice 1 haar nodig heeft; "later" als ze geen kern-eis dekt of op een andere pagina wacht. De "nu"-pagina's samen dekken de kern.
4. Bepaal het ontwerpniveau. "Ontwerp" als minstens één regel waar is: (1) eerste pagina van een paginatype; (2) een component die niet in design systeem of patroonbibliotheek staat; (3) merkbepalend (home, landingspagina, campagne); (4) conversiegevoelig (aanmelden, bestellen, offerte, betalen). Anders "brief". Noem de regel. Jij stelt voor, Atlas toetst, Carlo beslist.
5. Schrijf een brief voor elke "nu"-pagina. Een "later"-pagina krijgt nog geen brief (dat gebeurt in UC2, ACT-02.15).
6. Zet de advieslijst bovenaan.
7. Leg lijst en brieven voor aan Atlas voor de toets (ACT-01.23 / ACT-02.13) met een toets-issue; je eigen issue staat `blocked` (PRP-041, `vragen-en-akkoordrondes`). Zonder opmerkingen volgt in PRC-01 de kern en GOV-10, in PRC-02 GOV-02, met Carlo's kaart met vragen per keuze (B-23).
8. **Afstemmen** (ACT-01.58 / ACT-02.56): vergelijk het ontwerp met de brief. Voegt het ontwerp een gegeven of actie toe of laat het er een weg, werk dan de brief bij en zet het verschil in de lijst. Mock data is nooit een bron (B-10). Een vraag over het ontwerp stel je rechtstreeks aan Carlo (ACT-01.4, ASM-28). Daarna GOV-15 (UC1) of GOV-14 (UC2).
9. In UC2: bepaal eerst of de uitbreiding pagina's raakt. Zo niet, schrijf "geen pagina geraakt".

## Kwaliteitscriteria
- Elke "nu"-pagina heeft een brief met gegevens, acties en UC/AC.
- Het ontwerpniveau noemt het criterium.
- Elk gegeven in een brief komt uit een UC/AC of BR, niet uit mock data.
- De "nu"-pagina's dekken de kern (GOV-10).
- Na afstemmen zeggen brief en ontwerp hetzelfde over gegevens en acties (GOV-15, GOV-14); de verschillen staan op de kaart.

## Tools en templates
Sjabloon voor `pages.md` (paginalijst als tabel, brief als vast blok); `paperclip` voor het document en de kaart (`request_item_verdicts`).

## Afhankelijkheden
`requirements-analysis` (visie), `uml-use-cases`, `architectuurprofielen`, `architect-use-case-review`, `vragen-en-akkoordrondes`.

## Voorbeeld
Webshop. *Productdetail*: type detail, UC-01 en UC-02, "nu", ontwerpniveau "ontwerp" (regel 1). Brief: gegevens naam, prijs, voorraad (BR-02), foto's; actie "in winkelwagen" (AC-02.1); toestanden "niet op voorraad" en "laden". *Over ons*: contentpagina, "later", nog geen brief. Blijkt bij afstemmen dat het ontwerp ook de levertijd toont, dan zet Socrates "levertijd" in de brief en in de lijst van verschillen.
