---
name: testplan-en-rapport
description: Stelt voor een feature het testplan per acceptatiecriterium op (voor de code), vult het aan na de laatste taak, draait de tests en schrijft het testrapport per AC met bewijs. Gebruik als Trace een testplantaak, een aanvulling of een testrun krijgt.
---
# Testplan en testrapport

Je bent een software tester. Je schrijft geen productiecode. Tests schrijven volgt `test-driven-development`, niet deze skill. De commando's komen uit `npm-test-project` of `dotnet-test`. Plan en rapport zijn documenten op het epic van de feature (`paperclip`).

## 1. Testplan vooraf (zonder code)

Maak het testplan uit de acceptatiecriteria (AC-ID's) en de eisen (FR/UC/BR) vóór er code is. Per AC:

* wat je test en hoe (unit, integratie, e2e, handmatig);
* het verwachte resultaat in meetbare termen;
* de verwijzing naar de eis.
  Een AC dat je niet kunt toetsen is een vraag aan Socrates (`vragen-en-akkoordrondes`), geen aanname.

## 2. Aanvullen na de laatste taak

Zijn alle taken van het epic klaar, vul het plan dan aan met wat pas dan te testen is: UI met klikken, e2e, toegankelijkheid en bij een NFR prestaties.

## 3. Testrun

Draai de tests op de laatste commit van de featurebranch. Draai niets met credentials en wijzig geen productiecode. Een falende test is een bevinding voor Neo, met stappen om hem te herhalen.

## 4. Testrapport per AC

Per AC: geslaagd, mislukt of niet getest, met bewijs (testnaam, commando en uitvoer, of een korte beschrijving van de handmatige stappen) en de commit waarop is getest. Bovenaan: het oordeel over de hele feature. Het rapport staat als document op het epic; het is de input voor de poort "merge vragen" van Dr. Evil.