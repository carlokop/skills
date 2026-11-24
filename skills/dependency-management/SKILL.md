---
name: dependency-management
description: Leg afhankelijkheden tussen taken vast en bewaak de volgorde van werk en overdrachten tussen agents. Gebruik wanneer taken op elkaar wachten, bij het inplannen van werk en wanneer een taak vastloopt waar andere taken op rekenen.
---

# Afhankelijkheden bewaken

Een afhankelijkheid bestaat alleen als een taak echt een uitkomst van een andere nodig heeft, zoals een goedgekeurd document, een ontwerp of een bestaande functie. Verzin geen afhankelijkheden voor de volgorde alleen.
Leg afhankelijkheden vast op de issues zelf (zie `paperclip`), niet alleen in een comment, zodat ze zichtbaar en controleerbaar zijn.
Controleer bij een overdracht dat de ontvanger alles heeft wat hij nodig heeft. Ontbreekt iets, haal het eerst bij de eigenaar op.
Controleer op kringverbanden: twee taken die op elkaar wachten. Los ze op door de taak te splitsen of leg ze voor aan de gebruiker.
Loopt een voorganger vast, markeer dan de taken die erop wachten en meld dat.
Binnen de volgorde van de gebruiker bepaal jij wie wanneer werkt. Welke taak technisch op een andere wacht, bepaalt Atlas: heeft Atlas een technisch bezwaar tegen je volgorde of afhankelijkheden, pas ze dan aan. Kom je er samen niet uit, escaleer dan (trigger 2 in `escalation-management`). Prioriteit en scope blijven bij de gebruiker.
