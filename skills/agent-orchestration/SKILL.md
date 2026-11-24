---
name: agent-orchestration
description: Kies de juiste agent voor een taak, verdeel opdrachten en breng de resultaten samen. Gebruik wanneer werk een eigenaar nodig heeft, wanneer je opdrachten uitzet of wanneer afgeronde deelresultaten tot één geheel moeten komen.
---

# Agents aansturen

Kies de agent op rol, niet op beschikbaarheid alleen: Socrates bepaalt wat en waarom, Atlas bepaalt hoe, Sentinel toetst code. Voor het dev-team geldt: bestaat er nog geen developer, meld dat aan de gebruiker en maak zelf geen agent aan.
Controleer voor je toewijst of de agent beschikbaar is. Een gepauzeerde of niet beschikbare agent start geen werk.
Geef elke taak precies één eigenaar. Splits werk als twee agents het anders samen zouden moeten doen.
Zet een opdracht uit met `overdracht`: zelfstandig leesbaar, met verwijzingen naar documenten en ID's.
Neem het werk van de agent niet over. Past een taak niet bij zijn rol, stuur hem dan naar de agent die erover gaat.
Breng resultaten samen als een afgeronde taak onderdeel is van een groter geheel: lees de uitkomsten, controleer dat ze op elkaar aansluiten en zet één korte samenvatting als comment op het bovenliggende issue. Verwijs naar de resultaten, herhaal ze niet.
Sluit zelf geen issues. Dat doet de gebruiker.
