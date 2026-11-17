# Sentinel

Security- en codereviewer voor pull requests, als Claude Code-plugin met twee agents. Overgezet uit Paperclip, zonder Paperclip-issues: alles wat Sentinel te melden heeft, staat in de PR.

## Inhoud

| Pad | Wat | Herkomst |
| --- | --- | --- |
| `.claude-plugin/plugin.json` | Pluginmanifest | nieuw |
| `agents/sentinel.md` | Agent `sentinel`: codereviews op Opus 5.5 high, en securityreviews als Fable niet beschikbaar is | Paperclip `AGENTS.md`, herschreven |
| `agents/sentinel-security.md` | Agent `sentinel-security`: securityreviews op Fable 5.2 medium | nieuw |
| `skills/pr-review/` | Werkwijze per review: bereik, assen, publiceren | Paperclip `code-reviewer`, herschreven |
| `skills/secrets-detectie/` | Hulpcontrole secrets | Paperclip, Paperclip-stappen vervangen |
| `skills/dependency-audit/` | Hulpcontrole dependencies | Paperclip, Paperclip-stappen vervangen |
| `skills/kort/` | Kort formuleren | Paperclip, ingekort |
| `skills/security-hardening/` | Securitychecklist (met eigen [mwg]-regels) | Paperclip, ongewijzigd |
| `skills/code-review-and-quality/` | Vijf-assenreview | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) `39b723c`, ongewijzigd |
| `references/` | Checklists waar de twee geïmporteerde skills naar verwijzen | addyosmani/agent-skills, MIT |
| `github/worker/` | Webhook-ontvanger voor de GitHub App (Cloudflare Worker) | nieuw |
| `github/runner/` | Workflow voor de private repo `sentinel-runner` | nieuw |

`skills/security-hardening/references/hardening-patterns.md` ontbrak in Paperclip en komt uit addyosmani/agent-skills.

## Gebruik

| Hoe | Soort | Bereik |
| --- | --- | --- |
| PR-comment `@ck-sentinel code review` | codereview (`sentinel`, Opus 5.5 high) | vanaf de laatst goedgekeurde codereview |
| PR-comment `@ck-sentinel security review` | securityreview (`sentinel-security`, Fable 5.2 medium; terugval `sentinel`, Opus 5.5 high) | hele PR vanaf de merge-base |
| Prompt: `@sentinel review PR 24 in carlokop/<repo>` | codereview (of security als gevraagd) | idem |

Op GitHub zet Sentinel bij de start een 👀 op je comment en plaatst hij na afloop altijd een **nieuwe** comment met `✅ Goed`, `❌ Fout` of `⚠️ Niet goedgekeurd`. Onderaan die comment staat een verborgen marker (`<!-- sentinel: type=... base=... head=... decision=... -->`) waarmee de volgende codereview zijn startpunt vindt.

## Installeren in Claude Code

Eenmalig, in Claude Code (lokaal of in een cloudsessie):

```
/plugin marketplace add carlokop/skills
/plugin install sentinel@carlokop
```

Daarna staan `sentinel` en `sentinel-security` onder `/agents` en kun je ze met `@` aanroepen. Bijwerken: `/plugin marketplace update carlokop`.

Om de plugin automatisch in een repo (en in cloudsessies op die repo) te laden, zet je in `.claude/settings.json` van die repo:

```json
{
  "extraKnownMarketplaces": {
    "carlokop": { "source": { "source": "github", "repo": "carlokop/skills" } }
  },
  "enabledPlugins": { "sentinel@carlokop": true }
}
```

Bij gebruik in een eigen sessie moet `gh` zijn ingelogd met rechten voor reacties en comments.

## Trigger op GitHub (`@ck-sentinel`)

Eén private GitHub App op al je repo's, dus ook op elke nieuwe repo, zonder bestanden per repo.

```
PR-comment "@ck-sentinel ..."  (alleen van carlokop)
  → GitHub App ck-sentinel (private, alleen dit account) stuurt een webhook
  → webhook-ontvanger (Cloudflare Worker, github/worker/)
       controleert signatuur, schrijver en repo, zet 👀
  → workflow in de private repo carlokop/sentinel-runner (github/runner/)
       token voor alleen die ene repo, Claude Code met de sentinel-plugin
       code: sentinel (Opus 5.5 high)
       security: sentinel-security (Fable 5.2 medium), bij limiet of onvolledig sentinel (Opus 5.5 high)
  → uitkomst-comment op de PR
```

**Niet publiek:**
- De App kan alleen op jouw account worden geïnstalleerd.
- De webhook start alleen iets voor een comment van een gebruiker in `ALLOWED_USERS` (standaard alleen `carlokop`), op een repo van `carlokop`. De comment moet op een regel beginnen met `@ck-sentinel`. Comments van anderen, bots, citaten en bewerkte comments worden genegeerd.
- De runs en logs staan in een private repo.

**Kosten:**
- Cloudflare Workers gratis plan: ruim genoeg.
- Reviews lopen via je Max-abonnement (`claude setup-token`), dus geen API-kosten of kosten per PR. Ze tellen wel mee voor je gebruikslimieten.
- GitHub Actions-minuten in de private runner-repo gaan van je maandtegoed af. Het gratis plan heeft 2.000 minuten per maand, Pro 3.000. Een review duurt ruwweg 5 tot 15 minuten. Kom je erboven, dan betaal je per minuut. Wil je dat niet, dan kan een self-hosted runner op je eigen machine; die kost geen minuten.

### Installeren (eenmalig)

1. **Runner-repo.** Maak een private repo en zet de workflow erin:
   ```bash
   gh repo create carlokop/sentinel-runner --private --clone && cd sentinel-runner
   git checkout -b main
   mkdir -p .github/workflows && cp <pad-naar>/skills/agents/sentinel/github/runner/.github/workflows/sentinel.yml .github/workflows/
   git add . && git commit -m "Sentinel-runner" && git push -u origin main
   ```
2. **Claude-token.** Draai lokaal `claude setup-token` en zet de uitvoer in sentinel-runner als secret `CLAUDE_CODE_OAUTH_TOKEN` (Settings → Secrets and variables → Actions).
3. **Webhook-secret.** Maak er een: `openssl rand -hex 32`. Bewaar hem even; je hebt hem bij stap 4 en 7 nodig.
4. **GitHub App.** Ga naar github.com/settings/apps/new:
   - Naam: `ck-sentinel` (is die bezet, kies een andere; de trigger blijft `@ck-sentinel`).
   - Homepage URL: `https://github.com/carlokop/skills`.
   - Webhook: actief. URL vul je na stap 7 in (zet nu tijdelijk `https://example.com`). Secret: die van stap 3.
   - Repository permissions: Contents **Read**, Pull requests **Read and write**, Issues **Read and write**, Checks **Read**, Commit statuses **Read**, Actions **Read**. Metadata staat automatisch op Read.
   - Subscribe to events: **Issue comment** en **Pull request review comment**.
   - Where can this GitHub App be installed: **Only on this account**.
   - Maak de App aan, noteer het **App ID** en genereer een **private key** (.pem).
5. **App installeren.** In de App: Install App → je account → **All repositories**. Nieuwe repo's krijgen hem dan vanzelf.
6. **Runner-repo instellen.** In sentinel-runner: variable `SENTINEL_APP_ID` = het App ID, secret `SENTINEL_APP_PRIVATE_KEY` = de inhoud van de .pem.
7. **Webhook-ontvanger.**
   - Maak een fine-grained token (github.com/settings/personal-access-tokens): alleen repo `sentinel-runner`, permission **Actions: Read and write**, verder niets. Zet een herinnering voor de vervaldatum.
   - Vul `APP_ID` in `github/worker/wrangler.toml` in en deploy:
     ```bash
     cd agents/sentinel/github/worker
     npx wrangler login
     npx wrangler secret put WEBHOOK_SECRET     # van stap 3
     npx wrangler secret put APP_PRIVATE_KEY    # inhoud van de .pem
     npx wrangler secret put RUNNER_TOKEN       # het fine-grained token
     npx wrangler deploy
     ```
   - Zet de URL die `wrangler deploy` toont als Webhook URL in de App.
8. **Testen.** Zet op een PR de comment `@ck-sentinel code review`. Binnen een paar seconden komt er een 👀, daarna een run in sentinel-runner en tot slot de uitkomst-comment. Komt er geen 👀, kijk dan bij de App onder Advanced → Recent Deliveries.

### Veiligheid van de runner

- Het token per run geldt alleen voor die ene repo, met lezen plus comments en reacties, en verloopt na een uur.
- Claude Code draait in `--restricted`-modus: instellingen, hooks en MCP-servers uit de gereviewde repo worden niet geladen, bestandstools blijven in de werkmap, en Bash mag alleen de `gh`-, `git`-, `gitleaks`- en `npm audit --package-lock-only`-commando's uit de workflow. Code uit de PR wordt niet uitgevoerd.
- Je Claude-token wordt niet doorgegeven aan commando's die Claude start.
- Restrisico: `gh api` kan bestanden van de runner meesturen. Een PR met kwaadwillige instructies (vooral uit een fork) zou Sentinel in theorie zover kunnen krijgen. Start op PR's van vreemden dus geen review, of lees de PR eerst zelf.

### Aanpassen

- Andere gebruikers toestaan: `ALLOWED_USERS` in `wrangler.toml` (komma-gescheiden).
- Modellen, effort of de skills-branch: het `env`-blok bovenaan `sentinel.yml`.
