---
name: bpmn-eindontwerp
description: Maakt het eindontwerp van de organisatiemodellen als zelfstandig interactief artifact (één HTML-pagina): processen in BPMN-notatie met zichtbare loops, agents, skills met status, verantwoordelijkheden en hiaten. Gebruik nadat de procesmodellen en het rollen- en skillmodel zijn goedgekeurd, bij een verzoek om het organisatiemodel te visualiseren, of bij een gewijzigd model dat in het artifact moet worden bijgewerkt.
---

# Eindontwerp als artifact

## Doel
Het goedgekeurde organisatiemodel (processen, rollen, agents, skills, verantwoordelijkheden, hiaten) als één interactief artifact: een zelfstandige HTML-pagina waarmee de gebruiker de organisatie kan doorlopen, de loops kan zien en kan zien wat bestaat en wat nog gemaakt moet worden. Het artifact toont het register en voegt geen gegevens toe.

## Gebruik wat er al is
- **Conventies, ID's en register:** skill `bpmn-conventies`.
- **Voorbeeld:** het bestand `voorbeeld-artifact.html` in deze skill. Neem opzet, interactie en stijl over en vervang de gegevens bovenin het script (`LANES`, `UC`). Het voorbeeld toont twee processen van een softwareorganisatie; die gegevens zijn geen onderdeel van jouw model.
- **Controle:** skill `bpmn-modelcontrole`.

## Voorwaarde
De procesmodellen en het rollen- en skillmodel hebben `Status: Goedgekeurd` en `bpmn-modelcontrole` meldt geen blokkerende bevindingen. Zo niet, werk dan niet door en meld dat op het issue.

## Stappen
1. **Zet het register om naar gegevens voor de pagina (skills bij naam, elk element met korte naam).** Lanes zijn rollen en agents met hun status (bestaat, nog te maken, mens). Per proces een lijst stappen: activiteiten en goedkeuringen met ID, lane, soort (start, taak, goedkeuring, einde), label, omschrijving, input, output, skills met status, overleg (geraadpleegd), verantwoordelijken (R, A, beslisser, controleur) en loops (knop, doel, toelichting). Klaar als elk ACT- en GOV-ID uit de goedgekeurde modellen precies één keer voorkomt.
2. **Bouw de pagina** uit het voorbeeld. Verplichte onderdelen:
   - een swimlane per proces in BPMN-notatie: lanes per rol of agent, events, taken, beslissingen als gateways, goedkeuring door een mens duidelijk gemarkeerd, loops als stippellijnen;
   - stap voor stap doorlopen en afspelen, met zichtbare loops bij afkeur of bevindingen;
   - een paneel per stap: wat, input, resultaat, skills met status (bij hun naam), overleg, verantwoordelijkheden;
   - bij elke code de korte naam: zichtbaar bij aanwijzen of tikken, en een kolom Naam in de overzichten (PRP-044, `bpmn-conventies`), met een legenda;
   - per proces een overzicht van wat nog gemaakt of aangepast moet worden (agents en skills met status);
   - de verantwoordelijkheden- en goedkeuringsmatrix;
   - hiaten en open vragen;
   - status en versie van elk model, en een keuze tussen huidige en gewenste situatie als beide bestaan.
3. **Techniek.** Eén zelfstandig HTML-bestand zonder externe afhankelijkheden, Nederlandse teksten, licht en donker, bruikbaar op een telefoon en met het toetsenbord. Het bestand bevat geen secrets of persoonsgegevens.
4. **Controleer.** Open de pagina waar de runner dat toelaat en controleer dat hij zonder fouten laadt. Draai `bpmn-modelcontrole` (checks voor het eindontwerp). Klaar als elke stap, status en skill in de pagina overeenkomt met het register.
5. **Lever en leg voor.** Voeg het bestand toe aan het issue als bijlage of deliverable. Kan de runner artifacts publiceren, publiceer het dan ook als artifact en zet de link op het issue. Vraag geen akkoord op de pagina als de inhoud (het register en de modellen) al is goedgekeurd: de pagina is een weergave en wordt gecontroleerd, niet voorgelegd. Wijkt de pagina af van de inhoud, dan wordt dat een vraag aan Carlo (B-23, `bpmn-conventies`).
6. **Na een wijziging in het register** bouw je de pagina opnieuw uit het register. In berichten verwijs je alleen naar de nieuwste pagina. Oude pagina's lees je niet in.

## Regels
- Het artifact toont wat het register bevat. Een wijziging in het model loopt eerst via het register en `bpmn-conventies`.
- Hergebruik het voorbeeld voor opzet en stijl, niet voor de voorbeeldgegevens.
