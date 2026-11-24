---
name: npm-test-project
description: Draait test, lint en build van een npm-project vanaf de repo-root, lost fouten op en herhaalt tot alles groen is. Levert alleen de commando's; de verdeling van tests volgt test-driven-development en commits volgen git-workflow-and-versioning.
---

# npm test, lint en build (bedrijfskopie van `npm-test`)

Bedrijfskopie van `npm-test` zonder vast pad en zonder `git add .`. Werk vanaf de **repo-root van het project waarin je werkt**. Lees de scripts in `package.json`; gebruik de scripts `test`, `lint` en `build` als ze bestaan en meld het als er een ontbreekt.

## Cyclus (herhaal tot groen)
1. `npm run test`: fout? fix de oorzaak, begin opnieuw bij 1.
2. `npm run lint`: fout? fix, begin opnieuw bij 1.
3. `npm run build`: fout? fix, begin opnieuw bij 1.

## Regels
1. Altijd in de volgorde test, lint, build.
2. Fix de oorzaak (code, types, dependencies, configuratie). Geen `--no-verify`, geen overgeslagen tests en geen `@ts-ignore` zonder uitdrukkelijke vraag van de gebruiker.
3. Na elke fix de hele cyclus opnieuw.
4. Commit en push volgen `git-workflow-and-versioning`: voeg alleen bestanden toe die bij de taak horen, met een commitbericht dat de wijziging beschrijft. Geen `git add .`.
5. Een omgevingsprobleem (Node-versie, ontbrekende variabele) meld je aan de gebruiker; negeer het niet.

## Eindrapport
Per stap: ok of gefixt, het aantal tests, het aantal cycli en de commit (of "geen wijzigingen").
