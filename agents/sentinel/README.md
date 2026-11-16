# Sentinel

Security- en codereviewer voor pull requests, als Claude Code-subagent. Overgezet uit Paperclip, zonder Paperclip-issues: alles wat Sentinel te melden heeft, staat in de PR.

## Inhoud

| Pad | Wat | Herkomst |
| --- | --- | --- |
| `agents.md` | Agent `sentinel`: codereviews op Opus 5.5 high, en securityreviews als Fable niet beschikbaar is | Paperclip `AGENTS.md`, herschreven |
| `sentinel-security.md` | Agent `sentinel-security`: securityreviews op Fable 5.2 medium | nieuw |
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

Voor je hele account (lokaal):

```bash
cp agents/sentinel/agents.md ~/.claude/agents/sentinel.md
cp agents/sentinel/sentinel-security.md ~/.claude/agents/sentinel-security.md
cp -r agents/sentinel/skills/* ~/.claude/skills/
```

Voor cloudsessies moeten agent en skills in de repo of in een plugin staan die de repo laadt; `~/.claude` van je computer is daar niet beschikbaar.

## Nog te doen

- **Trigger op GitHub** voor `@ck-sentinel` in de cloud, op al je repo's en zonder extra kosten. Keuze tussen een eigen GitHub App met webhook of een GitHub Action per repo; volgt na akkoord op deze agent en skills.
- `gh` moet in de sessie zijn ingelogd met rechten voor reacties en comments.
