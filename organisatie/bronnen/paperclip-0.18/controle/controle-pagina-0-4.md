# Modelcontrole pagina 0.4 (WEB-19, CHG-017): eindontwerp op model 0.10

| | |
| --- | --- |
| Datum | 2026-10-30 |
| Controleur | onafhankelijke controleur (skill `bpmn-modelcontrole`, checks voor het eindontwerp; eisen aan de pagina uit `bpmn-eindontwerp`), niet de maker |
| Scope | `eindontwerp/organisatiemodel-0.4.html` (774 kB; byte-gelijk aan `eindontwerp/organisatiemodel.html`), gebouwd met `eindontwerp/build/` (`build.js`, `layout.js`, `template.html`) |
| Vergeleken met | register 0.10 `v10/over/api/register.md` (YAML-blok; gelijk aan `/tmp/r10.json`; model 0.10 Goedgekeurd, 82 activiteiten, 19 beslissingen, 15 GOV, 39 skills); `v10/over/werk/prc-01.md` en `prc-02.md` (tabellen en Mermaid-diagrammen), `prc-03` t/m `prc-06`, de weergaven in `werk/`, `werk/wijzigingen.md`, `register-gaten-0.10.md`; vorige pagina `organisatiemodel-0.3.html` |
| Methode | Eigen scripts (jsdom 30, js-yaml; map `/tmp/ctl/`): pagina geladen en `DATA` vergeleken met het register (diepe vergelijking per element); Mermaid van PRC-01 en PRC-02 geparsed en vergeleken met de swimlane-volgorde, lanes en loops, alle 12 (PRC-01) en 256 (PRC-02) routecombinaties doorlopen; een verse build in een kopie (`/tmp/vorg`) is byte-voor-byte gelijk aan de aangeleverde pagina; `check.js` opnieuw gedraaid (963 controles, 0 fouten); beide diagrammen als PNG gerenderd en bekeken (`build/render.js`); stap-panelen geklikt; toegankelijkheid (contrast, aria, kopstructuur) gemeten |
| Wijzigingen door controleur | geen aan de pagina, `build/`, `werk/` of `api/` (eigen scripts en renders staan alleen in `/tmp`) |

## Oordeel

**Kan worden ingediend.** Er zijn geen blokkerende bevindingen. De pagina geeft het register 0.10 juist en volledig weer. Er zijn vijf waarschuwingen (P-01 t/m P-05, vooral labelkwesties) en negen opmerkingen. Raad aan om P-01 en P-02 (labels op de pagina) en P-03 (ASM-19) vóór indiening te herstellen: het zijn kleine ingrepen in `template.html`/`build.js` en ze raken precies de punten die Carlo op de pagina leest. P-04 en P-05 kunnen met de volgende versie mee.

Wat ik niet kon toetsen staat onderaan.

## Bevindingen

### Blokkerend

Geen.

### Waarschuwing

**P-01. ACT-01.52 toont het label "Voorstel", terwijl PRP-011 vervallen is en de stap besloten is (B-10).**
- Waar: pagina, sectie 5 (UC1), paneel van ACT-01.52 "Design systeem maken en aanleveren": labels "Besloten" én "Voorstel". Bron: `register.md` `activiteiten[ACT-01.52].label` = "B (B-10, UC1 stap 1); was V (PRP-011, vervalt)"; `template.html` `labels()` leest "was V" als label V. Het is het enige element op de pagina met het label Voorstel (eigen telling over 82 activiteiten: 69 Besloten, 24 Feit, 11 Aanname, 1 Voorstel).
- Probleem: de pagina zegt nu dat ACT-01.52 (deels) nog een voorstel is. Dat klopt niet: PRP-011 is vervallen (register `vervallen_ids`), de stap is besloten in B-10.
- Voorstel: in `template.html` `labels()` het stuk na "was " (of "; was V (...)") negeren, of in `build.js` het label bij ACT-01.52 vóór het schrijven van `DATA` terugbrengen tot "B (B-10, UC1 stap 1)". Het register mag blijven staan (herkomst); een latere CHG kan "was V" daar ook weghalen.

**P-02. Bevestigde aannames ASM-26 t/m ASM-29 staan bij de stappen nog als "Aanname".**
- Waar: panelen van ACT-01.26 (A (ASM-27)), ACT-01.28 en ACT-02.16 (A (ASM-28)), GOV-14 (A (ASM-28)) en GOV-15 (A (ASM-26)). In de aannamelijst (sectie 9, `asmtbl`) staan ASM-26..29 wel juist als "bevestigd" (B-12, kaart f261b9ac), en de kop noemt ze bij "Bevestigde aannames".
- Probleem: hetzelfde ASM is op de ene plek bevestigd en op de andere "Aanname" zonder toevoeging. Voor ASM-18 t/m ASM-25 speelt dit niet, omdat die in het register geen A-label meer hebben. Bron is het register (`koppelingen`/`activiteiten`/`goedkeuringen` houden "A (ASM-26..29)"); de pagina neemt het over.
- Voorstel: laat `template.html` bij het label "Aanname" een tag "bevestigd" tonen als elke genoemde ASM in `DATA.asm` een `bevestigd` heeft (zoals de aannamelijst al doet). Of zet het label in het register om naar "B (B-12: ASM-27)" in de volgende registerversie (zie `register-gaten-0.10.md`).

**P-03. ASM-19 staat op de pagina nog als geldende, bevestigde aanname ("de vorm met 3 akkoorden"), terwijl UC1 vier akkoorden toont.**
- Waar: sectie 9, aannamelijst, rij ASM-19 ("Het model gebruikt de vorm met 3 akkoorden in UC1 …", status "bevestigd"); kop van de pagina "Bevestigde aannames: ASM-18, ASM-19, …". Sectie 3 zegt wel "ASM-19 (vorm met 3) is daarmee vervangen", en sectie 5 toont 4 akkoorden (GOV-10, GOV-15, GOV-11, GOV-06).
- Bewijs: `register.md` `aannames[ASM-19]` staat nog actief (niet in `vervallen_ids`); het veld `wijziging_0_10` ("vervalt als ROL-01 PRP-036 goedkeurt") wordt niet op de pagina getoond. De bekende registerhiaat A-1 in `register-gaten-0.10.md` beschrijft dit.
- Probleem: Carlo leest op één pagina zowel "3 akkoorden, bevestigd" als "4 akkoorden". Het register is leidend en bevat de tegenstelling; de pagina maakt hem zichtbaar zonder uitleg.
- Voorstel: toon in `asmtbl` het register-veld `wijziging_0_10` (of een vaste toevoeging "vervalt door PRP-036, B-12") bij ASM-18 en ASM-19, en haal ASM-19 uit de lijst "Bevestigde aannames" in de kop of noem hem daar apart. Definitief herstel: A-1 in een volgende registerversie (ASM-19 naar `vervallen_ids`).

**P-04. Contrast van de lichte kleur `--ink-3` is te laag voor kleine tekst.**
- Waar: `template.html` `:root{--ink-3:#7a8493}`: 3,78:1 op wit en 3,40:1 op de paginakleur (#f1f3f6); gebruikt op 15 plaatsen, onder meer voor de ID-regel in elke diagramknoop (`text.id`, 10,5 px) en voor "small"-tekst. WCAG AA vraagt 4,5:1. In het donkere thema is het wel goed (5,3 tot 5,9:1). Alle andere gemeten kleurparen halen 4,98:1 of hoger. Dit was al zo in pagina 0.3.
- Voorstel: `--ink-3` in het lichte thema naar `#5f6978` (5,56:1 op wit, 5,00:1 op #f1f3f6, 4,73:1 op #e9edf2).

**P-05. In sectie 10 (uitbreidingsgids 0.4, ongewijzigd overgenomen) staan besloten voorstellen nog als "Voorstel".**
- Waar: `werk/uitbreidingsgids.md` regel 19 ("Voorstel (PRP-034)" bij Architectuurprofielen), regel 36 ("uitwerking Voorstel PRP-031, PRP-032") en regel 100 ("Voorstel PRP-032"); op de pagina sectie 10. PRP-031, PRP-032 en PRP-034 zijn goedgekeurd in B-12. (De bronnen `prc-01.md` en `prc-02.md` hebben dezelfde V-labels bij "Uitzonderingen en loops", maar die tekst staat niet op de pagina.)
- Probleem: de pagina zegt dat vastgestelde regels nog voorstel zijn. De kop "De werkwijze hieronder is een Voorstel" van de gids zelf is een bewuste algemene aanduiding en geen probleem.
- Voorstel: geen ingreep in de pagina (de gids is goedgekeurd 0.4 en wordt overgenomen). Voeg het toe aan `register-gaten-0.10.md` en herstel het in uitbreidingsgids 0.5 en prc-01/prc-02 0.11 (label B (B-12: PRP-xxx)).

### Opmerking

**P-06. Lange labels in diagramknopen worden afgekapt.** In UC1 staat ACT-01.27 als "Paginalijst met "nu" | en "later", | ontwerpniveau e…" (knoop toont maximaal drie regels; `template.html` regel 490). De volledige naam staat in het paneel en in het aria-label, dus niets gaat verloren. `render.js` meldt bovendien dat "Ontwerpklassendiagram" (ACT-01.13) breder is dan de knoop (141 px geschat tegen 136 px; in de render is geen overlap te zien). Voorstel: een `short`-label in `layout.js` voor ACT-01.27 (bijvoorbeeld "Paginalijst en brieven opstellen", zoals het Mermaid-diagram) en eventueel 4 regels toestaan.

**P-07. Parallelle gateways zijn lineair getekend; lane van G-01.8, G-01.9 en G-02.7 is een keuze van de maker.** In de Mermaid staan G-01.8, G-01.9 en G-02.7 buiten elke lane; de pagina zet ze in de lane van Dr. Evil, Socrates en Socrates. ACT-01.52 staat in de swimlane vóór G-01.1 en ACT-01.28 na ACT-01.11. De pagina zegt dat zelf in het paneel van G-01.7/8/9 ("hier na elkaar getekend"). Er is geen afwijking in de volgorde of de pijlen: in PRC-01 zijn twee opeenvolgende paren zonder directe doorgetrokken pijl in de Mermaid (ACT-01.52 → G-01.1 en ACT-01.11 → ACT-01.28) de lineaire weergave van de parallelle takken; alle andere paren die niet als doorgetrokken pijl in de Mermaid staan zijn start- of eindgebeurtenissen of stippellijnen (berichtstromen ✉ of escalatie); in PRC-02 zijn er geen parallelle takken.

**P-08. Eindpunten.** Alle 12 routecombinaties van PRC-01 en 192 van de 256 van PRC-02 eindigen bij "Backlog gereed, overdracht naar implementatie". De overige 64 van PRC-02 eindigen bij "Geen start: voorraad niet onder de drempel" (ACT-02.51 → nee). Dat volgt het Mermaid (E0) en `prc-02.md`, maar het is de enige uitzondering op "elk pad eindigt bij Backlog gereed".

**P-09. Escalatie na twee rondes staat bij G-01.4, G-02.5 en ACT-02.53 (controle 1) alleen in de lustekst.** Alleen G-01.5 en G-02.6 hebben een route "Na 2 rondes: escalatie (GOV-08)" in het diagram. Bij de andere drie staat de uitgang ("daarna escalatie (ACT-05.3 → GOV-08)") wel in de knop en toelichting van de loop, in lijn met de tabellen. De Mermaid tekent hier wel een pijl naar GOV-08. Geen inhoudelijke afwijking.

**P-10. Samengestelde en vervangende GOV-knopen.** In PRC-02 is de knoop "GOV-09/03/04/05/13/11" één knoop voor de akkoorden per geraakt document (register: "GOV-09 en per profiel"); GOV-03, 04, 05 en 13 staan daardoor niet als eigen knoop in een diagram, maar wel in de GOV-tabel (15 rijen, elk precies één keer) en in dit paneel. In PRC-03 heet het akkoord "GOV-X, GOV van de aanroeper" (uit het Mermaid van PRC-03): dat is geen register-ID maar een tekstaanduiding. GOV-06 en GOV-11 (PRC-01 en PRC-02) en GOV-08 (5 processen) staan in meerdere diagrammen; dat volgt `processen[].goedkeuringen` in het register.

**P-11. Toegankelijkheid, zoals in 0.3.** Er is geen "naar de inhoud"-link en geen `<main>`; 223 `<th>` hebben geen `scope` en er zijn geen `<caption>`s (55 tabellen, in 0.3: 163 van 38). Wel goed: `lang="nl"`, viewport, licht/donker/automatisch met een knop, `prefers-reduced-motion`, focusstijl, alle 87 diagramknopen met `tabindex`, `role="button"` en aria-label, alle velden met label, geen externe verwijzingen of afbeeldingen. De swimlane heeft `min-width` 750 px en schuift horizontaal op een telefoon; de tekst in de knopen is daar ongeveer 10 px. Voorstel: `<main>` en een skiplink toevoegen, `scope="col"` in de tabelkoppen.

**P-12. Huidige/gewenste situatie.** De pagina heeft geen keuze tussen huidige en gewenste situatie (de `bpmn-eindontwerp`-skill vraagt die "als beide bestaan"). Het register kent 8 elementen met `situatie: as-is` en 93 met `to-be`; de pagina toont dat als label in de panelen (`to-be`, "nieuw in 0.10"). Net als 0.3. Alleen opmerken; geen nieuw verzoek.

**P-13. Registerinhoud die de pagina zichtbaar maakt (geen paginafout).** (a) ROL-01 in sectie 2 zegt "In UC1 drie akkoorden … [Vanaf 0.10 … vier akkoorden]". (b) Ontwerpen van Carlo zelf (ACT-01.28, ACT-02.16) hebben geen onafhankelijke controleur (ASM-28; FND-033 noemt het risico); de skill `bpmn-modelcontrole` vraagt onafhankelijke controle alleen waar die verplicht is. (c) De skills `paginaontwerp` en `to-tickets` staan in het register maar in geen enkele koppeling; ze tellen mee in de 39. (d) PRP-016 staat in `vervallen_ids` maar heeft geen kaart in de voorstellenlijst (38 kaarten: 001..039 zonder 016).

**P-14. Historische teksten in de voorstellen.** In de kaart van PRP-011 staat onder "Stand 0.8" nog "Dit blijft een Voorstel. ACT-01.52 blijft variant" en in sectie 9 "PRP-011 is uitgesteld en houdt het label Voorstel"; de huidige stand ("Stand 0.10: vervallen") staat bovenaan en de kaart krijgt het label "vervallen". Het zijn gedateerde standen uit goedgekeurde documenten; geen actie nodig.

## Resultaat per check

| Check | Resultaat | Bewijs |
| --- | --- | --- |
| Secties 1 t/m 10 aanwezig | voldoet | `#s1` t/m `#s10` met kop: 1 Overzicht, 2 Rollenregister, 3 Kritische review, 4 Herbruikbare subprocessen, 5 UC1, 6 UC2, 7 Paperclip-mapping, 8 Skills-analyse, 9 Aannames, voorstellen en open vragen, 10 Uitbreidingsgids |
| Pagina laadt zonder fouten | voldoet | jsdom: 0 `jsdomError`, `console.error` of `window.onerror` bij het laden; `check.js` (opnieuw gedraaid): 963 controles, 0 fouten. De klikproef (15907 acties) heb ik niet zelf volledig herhaald (zie onderaan) |
| ID's uniek, schema, niet hergebruikt | voldoet | 82 ACT, 19 G, 15 GOV, elk één keer in `DATA`; geen vervallen ID (20 in `vervallen_ids`) als knoop; ID's op de pagina (ACT, G, GOV, CAP, ROL, AGT, PRC, ASM, OPEN) bestaan in het register of zijn de bewust vrije ID's uit gids §6 (GOV-16, CAP-28, ROL-06, AGT-06, PRC-09, ASM-30, OPEN-15, ACT-09.x, G-09.1); PRP, FND, CHG, B, TL-V, M en GK komen allemaal in de documenten voor |
| Elk ACT-ID precies één keer in het artifact | voldoet | 82 stappen in `DATA.steps` gelijk aan `activiteiten` en `koppelingen` (alle velden); in de 6 swimlanes elk ACT precies één keer getekend; 82 rijen in de RACI-, Paperclip- en activiteit-skilltabel |
| Elk GOV-ID uit het model | voldoet met opmerking | 15 GOV in `DATA.gov` gelijk aan `goedkeuringen`; GOV-tabel 15 rijen; allemaal getekend (GOV-06, 08, 11 in meer processen zoals het register zegt); zie P-10 |
| 19 beslissingen | voldoet | `DATA.dec` gelijk aan `beslissingen` (19, waarvan G-01.7, G-01.8, G-01.9 parallel); elk één keer getekend in het eigen proces |
| 39 skills bij naam, geen SKL-nummers | voldoet | `DATA.skills` gelijk aan `skills` zonder `oud_nummer`; 39 rijen in de skilltabel, 0 ontbrekend, 0 extra; "SKL-" komt 0 keer voor in de HTML en in de zichtbare tekst; elke skill in de koppelingen bestaat in `skills` en heeft een status |
| Niets toegevoegd (geen gegevens buiten het register) | voldoet | rollen, agents, capabilities, aannames (25), open vragen (14), vervallen ID's (20), profielen en processen zijn gelijk aan het register; layout (volgorde, korte labels, routes) komt uit de Mermaid en tabellen; `layout.js` bevat geen ID dat niet in het register staat |
| Telling skillstatus 25/25/23/9 = 82 | voldoet | eigen telling uit `koppelingen` en pagina (`#skillsum`) geven 25 aanwezig, 25 gedeeltelijk, 23 ontbreekt, 9 n.v.t.; skillblok "28 bestaande, 11 nieuwe met werknaam, 14 uit te breiden" klopt met het register (11 `werknaam`, 14 met `uitbreiden`) |
| PRC-01: volgorde, lanes, G-01.7..9, G-01.6, GOV-15 | voldoet | volgorde van de 36 ACT gelijk aan de activiteitentabel, op ACT-01.21 en 01.22 na (zijtak van Atlas, getekend bij ACT-01.11 zoals in de Mermaid); lane per ACT gelijk aan "Rol" in de tabel en aan de subgraph in de Mermaid (ontwerper-lane: ACT-01.52 en ACT-01.28); G-01.7/8/9 parallel (+), G-01.6 met P1 → ACT-01.60, P2 → ACT-01.59, P3 → ACT-01.10, 01.12, 01.13, 01.24; GOV-15 na ACT-01.58 vóór G-01.6; 12 routecombinaties; alle ID's in de Mermaid staan in de layout en omgekeerd |
| PRC-02: volgorde, lanes, GOV-14, ontwerper | voldoet | 21 ACT in dezelfde volgorde als de tabel; ACT-02.16 in de lane ontwerper; G-02.2 met vier uitkomsten, G-02.7 → ACT-02.16/02.56/GOV-14 of ACT-02.4; ACT-02.15 → 02.13 → G-02.5 → GOV-02; GOV-KO (GOV-09 en per profiel, met ADR) na ACT-02.55; 256 routecombinaties |
| Loops met uitgang | voldoet | 22 loops in PRC-01 en 14 in PRC-02, elk met doel eerder in het diagram en een uitgangstekst (max. 2 rondes, daarna escalatie, of "uitgang ligt bij Socrates"); alle ↩-pijlen uit de Mermaid zijn loops, behalve GOV-15, GOV-11 en GOV-09 die per document naar de eigen activiteit gaan (zoals de tabel "Bij afwijzing" zegt) en controle 4 van ACT-02.53 (wachten, geen ronde; staat in de toelichting). Alle loops zijn volgens `klikproef.js` minstens één keer genomen |
| Elk pad eindigt bij "Backlog gereed" | voldoet met opmerking | PRC-01 12 van 12; PRC-02 192 van 256, de andere 64 eindigen bij "Geen start" (Mermaid E0); zie P-08 |
| UC1 toont 4 akkoorden | voldoet | sectie 5: "4 akkoorden van jou: GOV-10, GOV-15, GOV-11, GOV-06 (B-12: PRP-036)"; `check.js` en eigen telling uit `layout` gelijk |
| Labels Besloten / Voorstel / Aanname | voldoet niet (waarschuwing) | PRP-029 t/m PRP-039 (11) "Besloten (B-12)", 21 "Besloten (B-08)", PRP-011 "vervallen" (ook PRP-009, 012), 2 "eerder beslist", PRP-004 "deels vervallen": juist; ASM-26..29 "bevestigd" in de aannamelijst juist; B-12 in sectie 3 juist. Afwijkend: P-01 (ACT-01.52 "Voorstel"), P-02 (ASM-26..29 "Aanname" bij stappen), P-03 (ASM-19), P-05 (sectie 10) |
| Statusblok | voldoet | pagina 0.4 "Concept" (kop en statustabel); model 0.10 "Goedgekeurd (2026-10-30, Carlo, kaart f261b9ac; B-12)"; organisatie, proces-catalogus, verantwoordelijkheden, capabilities-en-skills, agent- en activiteit-skillmatrix, skill-specificaties en agentprofiel-atlas "Concept, ter goedkeuring (CHG-017), versie 0.10"; bevindingen, voorstellen, paperclip-mapping, register, PRC-01 t/m 05 "Goedgekeurd 0.10", PRC-06 0.3 GK-2, uitbreidingsgids 0.4 "Goedgekeurd": gelijk aan de statusregels in `werk/*.md` en het register; "eerder goedgekeurd" gelijk aan `meta.goedgekeurd` |
| Status, versie, skillstatus komen overeen met het register | voldoet | processtatus en -versie per proces uit `processen`; skillstatus per stap uit `skl_status` (gewogen: onbekend telt als gedeeltelijk, zoals in het register-overzicht) |
| Geen secrets of persoonsgegevens, geen externe afhankelijkheid | voldoet | geen http(s)-verwijzing, `@import` of afbeelding; geen e-mailadres of token; alleen de voornaam Carlo |
| Feiten, aannames, open vragen en voorstellen gescheiden en gemarkeerd | voldoet met waarschuwingen | zie labels hierboven; OPEN-vragen staan als "Open", beantwoorde apart |
| Huidige en gewenste situatie gescheiden | voldoet met opmerking | labels `as-is`/`to-be` in de panelen, geen keuzeschakelaar (P-12) |
| Wijzigingshistorie bijgewerkt; goedgekeurd niet overschreven | voldoet | CHG-017 staat in `werk/wijzigingen.md` (regel 25, ook de pagina 0.4 als Concept); `organisatiemodel-0.3.html` onveranderd (laatste wijziging 11:57), 0.4 is een nieuw bestand met status Concept; `build-0.3-backup/` bewaard |
| Verwijzingen naar buiten | voldoet | genoemde agents (Dr. Evil, Socrates, Atlas, Carlo) en alle skillnamen komen uit het register; werking blijft "niet vastgesteld (OPEN-11)" |
| Toegankelijkheid en leesbaarheid voor Carlo | voldoet met waarschuwing | zie P-04, P-06, P-11 |

## Wat ik niet kon toetsen

- **Echte browser:** alles via jsdom en een resvg-render van de SVG's (lettertype KaTeX_SansSerif, geen systeemlettertypen). Echt gedrag van focusringen, scrollen, afdrukken en kleurweergave op een telefoon niet gezien; de snelheid van het afspelen evenmin.
- **Klikproef:** `check.js` heb ik opnieuw gedraaid; de volledige klikproef (287 routecombinaties, 15907 acties) is door de maker gemeld als groen en niet volledig door mij herhaald. De routes van PRC-01 en PRC-02 heb ik wel zelf doorlopen (zie boven) en een aantal panelen geklikt.
- **Inhoudelijke juistheid van de tekstblokken uit de weergaven** (organisatie, verantwoordelijkheden, skill-specificaties enzovoort) is niet opnieuw beoordeeld; dat is gedaan in `controle-chg017.md` (weergaven, kan worden ingediend). Ik heb alleen gecontroleerd dat de pagina ze overneemt, dat er geen SKL-nummers en geen interne werkverwijzingen (`M-B1`, "hoofdagent", 27/7-telling) in staan, en dat de status klopt.
- **Werking van agents en skills** (OPEN-11) en of de Paperclip-koppelingen bestaan: niet te beoordelen tot de gebruiker ze bevestigt.
- **PRC-03 t/m PRC-06 diagrammen** zijn alleen op ID's, lanes en dekking van het register gecontroleerd, niet tegen hun Mermaid (buiten de gevraagde scope; PRC-04 en PRC-06 hebben een andere tabelvolgorde dan de swimlane; of dat al in 0.3 zo was, heb ik niet nagegaan).

## Herstel na deze controle (Socrates, 2026-10-30)

- **P-01, P-02 en P-04 zijn hersteld in het bouwscript.** ACT-01.52 staat nu als Besloten. Bevestigde aannames heten nu "Aanname, bevestigd (B-12)". Het contrast van de lichte grijze tekst is nu 4,73:1 of hoger. Daarna is de pagina opnieuw gebouwd. Bouwcontrole: 1008 controles, 0 fouten. Er kwamen controles bij voor P-01, P-02 en het contrast. Klikproef: 15907 acties, 0 fouten. Een tweede controle door een aparte agent is niet gedaan.
- **P-03 en P-05 zijn niet hersteld.** Ze zitten in het goedgekeurde register en de goedgekeurde uitbreidingsgids. Ze staan in `register-gaten-0-10` (A-1 en A-9).
- **De opmerkingen zijn niet verwerkt.**
