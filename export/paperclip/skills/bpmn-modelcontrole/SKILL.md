---
name: bpmn-modelcontrole
description: Controleert organisatiemodellen op volledigheid, consistentie en herleidbaarheid vóór indiening en na elke wijziging. Gebruik bij een model met status Concept, bij een gewijzigd goedgekeurd model, bij een eindontwerp-artifact dat nog niet is gecontroleerd, of bij een verzoek om de organisatiemodellen te controleren.
---

# Modelcontrole

## Doel
Vaststellen of organisatiemodellen compleet, consistent en herleidbaar zijn, voordat ze ter goedkeuring worden ingediend en nadat ze zijn gewijzigd. Deze skill beoordeelt de modellen en past ze niet aan.

## Gebruik wat er al is
- **Conventies, ID-schema, register en statussen:** skill `bpmn-conventies`.
- **Voorbeeld van een checklist-controle:** skill `requirements-validation`.

## Stappen
1. **Bepaal de scope:** welke modellen zijn nieuw of gewijzigd, en welke gekoppelde modellen worden daardoor geraakt (via het register).
2. **Voer de checks hieronder uit.** Geef elke check het resultaat `voldoet`, `voldoet niet` (met bewijs: bestand en ID) of `niet te beoordelen` (met reden).
3. **Schrijf het resultaat** naar `controle/<datum>-<scope>.md`: een tabel met check, resultaat en bewijs; de bevindingen (FND-ID, `blokkerend` of `waarschuwing`); en het oordeel `kan worden ingediend` (geen blokkerende bevindingen) of `terug naar de maker`.
4. **Meld het oordeel** aan de maker. Blokkerende bevindingen staan bovenaan.

Klaar als elke check een resultaat heeft en elk `voldoet niet` een bevinding.

## Checks

**Structuur en ID's**
- ID's zijn uniek, volgen het schema en zijn niet hergebruikt.
- Elke verwijzing wijst naar een bestaand element.
- Elk procesmodel heeft een status en een versie.

**Procesmodel**
- Doel, trigger, start- en eindconditie zijn beschreven.
- Elke belangrijke activiteit heeft een verantwoordelijke rol, input, output en vervolg.
- Elke beslissing heeft alle uitgaande routes en een afhandeling voor negatieve uitkomsten.
- Fouten, afwijzingen en herstelroutes binnen de scope zijn gemodelleerd en elke terugloop heeft een uitgang.
- Elke menselijke goedkeuring is gemarkeerd met een GOV-ID.

**Koppelingen**
- Elke activiteit heeft een capability en een skill, of een OPEN-vraag.
- Elke skill heeft een status met bron.
- Elke skillverwijzing wijst naar een bestaande skillnaam, en elke naam is uniek; een gewijzigde naam staat in `vorige_namen` met een CHG-ID (PRP-039).
- Elke code die de gebruiker leest heeft een korte naam en er staat een legenda (PRP-044).
- Elke activiteit heeft een uitvoerder en één verantwoordelijke. De eindverantwoordelijkheid ligt niet automatisch bij een AI-agent.
- Waar onafhankelijke controle verplicht is, is de controleur niet de uitvoerder.

**Consistentie**
- Elke activiteit staat in het diagram, de beschrijving en het register.
- De overzichten komen overeen met het register.
- Een `.bpmn`-bestand heeft een validatieresultaat. Ontbreekt de validator, dan is de uitkomst `niet te beoordelen`.

**Eindontwerp (artifact)**
- Elk ACT-ID en GOV-ID uit de goedgekeurde modellen staat precies één keer in het artifact.
- Status, versie en skillstatus in het artifact komen overeen met het register.
- Het artifact bevat geen gegevens die niet in het register staan.
- Het artifact laadt zonder fouten. Kun je het niet openen, dan is de uitkomst `niet te beoordelen`.

**Kwaliteit**
- Feiten, aannames, open vragen en voorstellen zijn gescheiden en gemarkeerd.
- Huidige situatie en gewenste situatie zijn gescheiden.
- De wijzigingshistorie is bijgewerkt.
- Een goedgekeurd model is alleen gewijzigd na een akkoord op een voorstel, en alleen in de rijen uit dat voorstel. Er staat geen kopie naast.

**Verwijzingen naar buiten**
- Genoemde agents en skills bestaan volgens de bron (instructies en skilllijst). Werking en feitelijke koppeling zijn `niet te beoordelen` tot de gebruiker ze bevestigt.

## Regels
- Een technisch geldig model is niet automatisch inhoudelijk juist. Vermeld in het oordeel wat je niet kon toetsen.
- Meld alleen wat je kunt aantonen met een bestand en een ID.
