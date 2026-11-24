---
name: oordeel-hulp
description: Start een hulp-agent op Opus 5.5 voor het oordeel bij de risicoskills van Neo en bij het opdelen van een plan in taken door Dr. Evil. De aanroeper beslist en legt vast.
---

# Oordeel-hulp

Doel: een zwaarder model laten meedenken waar een fout duur is. Jij blijft de beslisser.

## Gebruik
1. Start een hulp-agent met de Agent-tool en `model: "opus"` (Opus 5.5). Geef geen agent-definitie op; die wordt in een run niet geladen.
2. Alleen voor:
   - Neo: de risicoskills `security-hardening`, `deprecation-and-migration`, `doubt-driven-development`, de brede refactor bij `code-simplification`, en `debugging-and-error-recovery` na één mislukte poging.
   - Dr. Evil: het opdelen van een plan in taken (`paperclip-converting-plans-to-tasks`).
3. Niet voor lezen en zoeken: gebruik daarvoor `lees-hulp`.

## Effort
De Agent-tool heeft geen parameter voor effort. De hulp-agent draait op de effort van jouw run, niet op medium. Je kunt het dus niet afdwingen; wees in de opdracht beknopt en vraag om een kort oordeel.

## Opdracht aan de hulp-agent
1. Geef een zelfstandige opdracht met de stukken die nodig zijn (of verwijzingen ernaar), de vraag en de gevraagde vorm: oordeel, onderbouwing, risico's.
2. De hulp-agent past niets aan en schrijft niets naar Paperclip.

## Na afloop
1. Het oordeel is advies. Jij beslist en legt het besluit vast op het issue.
2. Neem het oordeel niet blind over; toets het aan de acceptatiecriteria en de documenten.
