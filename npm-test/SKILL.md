---
name: npm-test
description: >-
  Draait npm run test, lint en build vanaf repo-root; lost fouten op en herhaalt
  tot alles groen is; commit bij wijzigingen. Gebruik wanneer de gebruiker vraagt
  om npm test skill, npm errors te fixen, of test/lint/build te draaien.
---

# npm test skill

Valideert de monorepo vanaf **repo-root** (`/home/carlo/Development/docker/CRM`). Los elke fout op vóór de volgende stap. Na een fix: **hele cyclus opnieuw** vanaf stap 1.

## Wanneer activeren

- Gebruiker vraagt om **npm test skill**, **npm errors te fixen**, of **test/lint/build**
- Na grote wijzigingen vóór PR of commit
- CI-fouten lokaal reproduceren

## Commando's (repo-root)

| Script | Doet |
|--------|------|
| `npm run test` | Vitest in `node/` + `react/` |
| `npm run lint` | `typecheck` (incl. tests) + token-lint in `react/` |
| `npm run build` | `tsc`/Vite build in `node/` + `react/` (alleen `src/`) |

## Workflow (verplicht)

```
Cyclus (herhaal tot groen):
1. npm run test     → fout? fix → terug naar 1
2. npm run lint     → fout? fix → terug naar 1
3. npm run build    → fout? fix → terug naar 1
4. Geen fouten:
   - Wijzigingen? → git add . && git commit -m "fix npm errors"
   - Klaar
```

### Regels

1. **Volgorde:** altijd test → lint → build. Niet overslaan.
2. **Bij elke fout:** analyseer output, fix root cause (code, types, deps, config). **Geen** `--no-verify`, skipped tests of `@ts-ignore` zonder expliciete gebruikersvraag.
3. **Na elke fix:** start de **hele cyclus opnieuw** (niet alleen de gefaalde stap).
4. **Commit:** alleen als er **bestanden gewijzigd** zijn én alle drie stappen groen zijn. Exact bericht:

   ```bash
   git add .
   git commit -m "fix npm errors"
   ```

5. **Geen commit** als alles al groen was zonder wijzigingen.
6. **Geen push** tenzij de gebruiker dat apart vraagt.

### Fout classificeren

| Type | Actie |
|------|--------|
| TypeScript / lint | Fix in bron; draai cyclus opnieuw |
| Test failure | Fix code of test; geen tests verwijderen |
| Build failure | Fix compile/bundle; check `tokens` in react build |
| Missing dependency | `npm install` in `node/` of `react/`; draai cyclus opnieuw |
| Omgevingsprobleem (Node-versie, ontbrekende env) | Rapporteer aan gebruiker; niet negeren |

## Eindrapport

```markdown
## npm test skill

| Stap | Resultaat |
|------|-----------|
| test | {ok / gefixt — node N, react M tests} |
| lint | {ok / gefixt} |
| build | {ok / gefixt} |

**Cycli:** {n}
**Commit:** {hash of "geen wijzigingen"}
```

## Gerelateerd

- [`.cursor/rules/platform/testing.mdc`](../../rules/platform/testing.mdc)
- Root scripts: [`package.json`](../../../package.json)
