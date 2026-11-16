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

## Nog te doen

- **Trigger op GitHub** voor `@ck-sentinel` in de cloud, op al je repo's en zonder extra kosten. Keuze tussen een eigen GitHub App met webhook of een GitHub Action per repo; volgt na akkoord op deze agent en skills.
- `gh` moet in de sessie zijn ingelogd met rechten voor reacties en comments.
