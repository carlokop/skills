---
name: security-audit
description: >-
  Read-only security audit van React, marketing, Node en de database. Schrijft
  een rapport naar docs/reports/. Gebruik bij security audit, security-audit,
  beveiligingsaudit, of een verzoek om IDOR, RBAC, CORS, CSRF, SQL-injectie,
  RLS of Clerk-auth statisch te reviewen zonder code te wijzigen.
---

# Security-audit

Statische review van de huidige bron. Enige schrijfactie: het rapport. Geen applicatiecode, geen backlog, geen commit, tenzij de gebruiker dat apart vraagt.

## Grenzen

- Geen DAST, penetratietest of Clerk Dashboard.
- Geen verbinding met database `factuurverstuurd` (productie). Schema alleen uit `node/migrations/`.
- Bevindingen uit eerdere rapporten opnieuw toetsen. Niet overnemen.

Nieuwste voorbeeld: [`docs/reports/2026-09-22-security-audit.md`](../../../docs/reports/2026-09-22-security-audit.md). Oudere: `docs/reports/*security-audit*.md`.

## Rapport

Pad: `docs/reports/YYYY-MM-DD-security-audit.md` (datum = vandaag).

Secties, in deze volgorde:

1. Kop + tabel (datum, scope, methode, stack, vorige audits)
2. Oordeel — rest-risico in enkele punten; geen Critical verzinnen
3. Aanvalsaanname
4. Wat al stevig is (tabel: gebied, plek, waarom)
5. Bevindingen F1… met severity, functies, wat, scenario, maatregel
6. Status van eerdere IDs: opgelost, deels, open, regressie
7. Functiekaart (auth, publiek zonder JWT, RBAC, database)
8. Rest-risico en wat niet gedaan is

Severity: **Critical** uitbuitbaar tot overname of RCE zonder extra misconfig. **High** waarschijnlijk uitbuitbaar of acuut bij de beoogde config. **Medium** defense-in-depth of na een andere foothold. **Low** / **Info** opruimen of bewust ontwerp.

Elke bevinding noemt bestand of functie. Zelfde-tenant toegang per rol is geen IDOR.

## Checklist

Alles nalopen. Alleen rapporteren wat de bron nu laat zien.

**Clerk-only.** `node/src/middleware/auth.ts`, `services/auth/clerkActor.ts`, `routes/webhooks/clerk.ts`. Zoek `passport`, wachtwoord-hash, `/api/v1/auth/login`, `setAccessToken`, `requireCsrf`, eigen JWT-signing. Test-actor (`x-test-actor`, `Bearer test.`) alleen bij `VITEST`. Productie-boot weigert `VITEST=true`.

**Lifecycle.** Auto-link zonder pending invite. Lege `APP_ORIGIN` en `localhost` als `azp`. E-mail globaal uniek. CRM-e-mail volgt Clerk (geen `changeOwnEmail`). Deactiveren zonder `banUser`. Geen impersonation. `ALLOW_TENANT_SELF_REGISTER` default.

**RBAC.** `authorize()` deny-by-default. Elke mount in `app.ts`: `requirePermission` of een bewuste publieke/auth-only prefix. `requireAuthOnApi` mag niet de enige check zijn. `assertSelfOrSameTenant`. Client-RBAC en `sessionStorage` zijn UX. Worker-actor (`admin` + `facturatie`) neemt `tenantId` niet uit HTTP.

**IDOR en schema.** Queries op id zonder `tenant_id`. Composite FK `(tenant_id, parent_id)`. Child-queries alleen op parent-id. Publiek: `publicPay`, `storage`, Mollie-webhook, organisatie-export.

**CORS en CSRF.** Allowlist = `APP_ORIGIN`, geen `*`. Geen eigen CSRF-laag; Bearer + SameSite. Publieke POST zonder sessie (wachtlijst) apart.

**SQL.** Geen concatenatie van user-input in `query()`. `SECURITY DEFINER`: `search_path`, `REVOKE` van `PUBLIC`, alleen `crm_app`. Of ze RLS omzeilen.

**RLS.** Elke blijvende tabel FORCE RLS of echt exempt (`node/tests/infra/rlsCoverage.test.ts`). Policies met `USING (true)`. Rol `crm_app` geen owner, geen `BYPASSRLS`. Wachtwoord in `CREATE ROLE`. Grants `UPDATE`/`DELETE` op `audit_log`. Geen live query.

**Browser en content.** Headers op Node én op HTML (nginx static, path-split, `/betalen` referrer). Uploads: magic-bytes, geen SVG. Signed storage-GET. Geen `dangerouslySetInnerHTML` / `eval` in `react/` en `marketing/`. Mollie-key niet in GET. Checkout-URL allowlist. PDF-asset geen remote `fetch`. Mail-subject zonder CR/LF. `websiteHref` alleen `https:`. Health zonder DB-tekst. `express.json` limit. MSW niet in de prod-build. Playwright `--no-sandbox` als rest.

**Rate limits.** Redis versus geheugen, `trust proxy`, `req.ip` niet rauwe `X-Forwarded-For`. Invites, public pay, webhooks.

**Logging en AVG.** Audit append-only (geen UPDATE voor `crm_app`). Geen PII in stdout. Register, retentie, Art. 17, datalek-72u in `docs/platform/`.

**Secrets, jobs, CI, deploy.** Encryptie at rest. Redis `requirepass` + persistentie. Frontend alleen publishable key. Job-HMAC, DLQ, scheduler niet dubbel. `npm audit`, Dependabot, Trivy, CodeQL. Prod-compose: loopback-poorten, geen Vite als prod, TLS/HSTS op de terminator (buiten repo: melden, niet verzinnen). Backup alleen als documentatie, niet uitvoeren.

## Klaar

Rapportpad teruggeven. Critical/High in het kort. Geen fixes voorstellen als diff.
