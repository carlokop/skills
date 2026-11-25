> **Vervallen** – archief van een afgerond concept. Geldend is het model in `register` en de andere documenten zonder versievoorvoegsel; niet lezen of gebruiken.

# Model 0.10: ontwerp-eerst en architectuurprofielen (voorstel en uitwerking)

| | |
| --- | --- |
| Status | **Goedgekeurd (2026-10-30, Carlo, kaart `f261b9ac`)**, alle 15 onderdelen (besluit B-12). Dit is het ingediende concept, ongewijzigd bewaard. De geldende tekst staat nu in `register` (revisie 17), `prc-01` t/m `prc-05`, `paperclip-mapping`, `uitbreidingsgids`, `bevindingen` en `voorstellen`; zie CHG-015 en CHG-016 in `wijzigingen`. Vóór de goedkeuring: **Concept**, model 0.10 (CHG-015; CHG-016 *skills bij naam*, B-11). Ter goedkeuring. **Tot je akkoord geeft, geldt model 0.9** in de bestaande documenten (`register` revisie 16, `prc-01`, `prc-02`, `paperclip-mapping`, `uitbreidingsgids`, `bevindingen`, `voorstellen`). Daar is niets aan veranderd. |
| Opdracht | **B-10**: je comment `6e69ec6e` (2026-10-30), *Opdracht aan Socrates: ontwerp-eerst en architectuurprofielen toevoegen aan UC1 en UC2*. |
| Concept-documenten (Paperclip-documenten op WEB-19) | `v010-voorstel` (dit document: A, B, D, E), `v010-prc-01`, `v010-prc-02`, `v010-register`, `v010-paperclip-mapping`, `v010-uitbreidingsgids` (C), `v010-controle` (D). |
| Feitencheck | [WEB-24](/WEB/issues/WEB-24), Dr. Evil (2026-10-30): alle gecontroleerde feiten kloppen. Eén nuance bij FND-031 (`architect-architecture-choice`) is verwerkt in deze revisie; inhoudelijk verandert er niets aan bevindingen of voorstellen. |
| Na je akkoord | Ik zet de concepten in de bestaande documenten (nieuwe revisie met status Goedgekeurd), neem FND-028 t/m FND-034 op in `bevindingen` en PRP-029 t/m PRP-039 in `voorstellen`, voeg CHG-015 en CHG-016 toe aan `wijzigingen`, en werk de overzichten (skillmatrices, skill-specificaties, profiel Atlas, RACI, procescatalogus, organisatie) en de pagina bij. Daarin staan de skills dan ook bij hun naam (B-11). Er verandert niets aan agents, instructies of skills; dat loopt via Dr. Evil (PRC-08). |

**Labels:** **B** = Besloten (jouw opdracht B-10 of eerdere besluiten). **F** = Feit (met bron). **V** = Voorstel (PRP). **A** = Aanname (ASM). **O** = Open vraag (OPEN).

**Hoe ik je opdracht lees.** De stappen van UC1 en UC2 en het uitgangspunt "ontwerp en visie leidend, API volgt, UI nooit uit de API" zijn **besloten** (B-10). Hoe die stappen precies lopen, heb ik uitgewerkt als **voorstel** (PRP-029 t/m PRP-038), met mijn aanbeveling. Je vroeg om de richting "door te voeren in het concept" (C). Daarom staan mijn aanbevelingen in het concept van PRC-01 en PRC-02, met het label V. Keur je een voorstel af, dan pas ik het concept aan en leg ik het opnieuw voor.

---

## Samenvatting

1. **UC1 wordt ontwerp-eerst:** design systeem van jou bij de start → analyse met **visie** en **paginalijst** ("nu" en "later", ontwerpniveau, paginabrieven) → **architectuurkeuze met profiel** en het **ontwerp van de sleutelpagina's**, tegelijk → **technisch ontwerp volgens profiel** → slices en **bouwcontract** afgeleid van de goedgekeurde pagina's → backlog.
2. **Ontwerpniveau: per paginatype, niet per pagina.** Volgt een pagina een bestaand patroon, dan krijgt ze alleen een **paginabrief** (wat staat erop, welke acties). Een nieuw patroon, een nieuwe component, of een merkbepalende of conversiegevoelige pagina krijgt een ontwerp. "Wat staat er" (brief, bindend voor het contract) staat los van "hoe ziet het eruit" (ontwerp).
3. **Drie architectuurprofielen:** P1 configuratie/CMS, P2 component-app, P3 maatwerk met domeinmodel. Eén flow met één keuze (G-01.6). P3 is het huidige model; bij P1 en P2 vervallen klassendiagram en (meestal) databaseontwerp.
4. **UC2:** de uitbreidingslijst is een vast onderdeel; per uitbreiding bepaalt Socrates het ontwerpniveau. Alleen bij een nieuw patroon of een sleutelpagina komt er een ontwerp en een akkoord (GOV-14).
5. **Akkoorden UC1: 4 in plaats van 3.** Nieuw is GOV-15 "Richting" (profiel en eerste ontwerpen) vóór het technisch ontwerp. Zolang jij de ontwerper bent, keur je je eigen ontwerp niet apart goed.

---

## A. Vergelijking met het model (bevindingen)

### Wat het model nu heeft (Feit, model 0.9)
- **UC1:** ontwerp komt alleen voor als variant ACT-01.52 *Ontwerp en huisstijl aanleveren*, als input voor de analyse (PRP-011, uitgesteld in B-08; FND-011d open). Er is geen design systeem, geen paginalijst, geen paginaontwerp en geen visie. De API-contracten van slice 1 (ACT-01.17) hebben als input "slice 1, kernontwerp".
- **UC2:** geen ontwerp. ACT-02.8 *API-contracten opstellen* heeft als input "ontwerp per slice" (modules, componenten, interfaces van Atlas).
- **Eén modelleermethode:** domeinmodel → sequentiediagrammen → klassendiagram → databaseontwerp, voor elk project (TL-V5, B-07).

### Wat niet past bij jouw flow

| ID | Bevinding | Soort | Proces | Bron | Voorstel |
| --- | --- | --- | --- | --- | --- |
| FND-028 | **Geen ontwerpstap vóór de slices en het contract.** Het enige ontwerpmoment is de variant ACT-01.52 bij de analyse (uitgesteld). Er is geen design systeem, geen paginaontwerp en in UC2 helemaal geen ontwerp. | ontbrekende stap | PRC-01, PRC-02 | `prc-01` 0.8 (variant), `prc-02` 0.9; PRP-011 | PRP-029, PRP-032, PRP-033 |
| FND-029 | **De afleiding loopt de verkeerde kant op.** De API-contracten volgen nu uit de slice en het kernontwerp (ACT-01.17, ACT-02.8); de UI komt pas na het backlog in het implementatieplan ("Frontend/UI (indien aan de orde)"). Dan volgt de UI in de praktijk de API. Dat is het omgekeerde van B-10. | conflicterende richting | PRC-01, PRC-02 | `prc-01` ACT-01.17; `prc-02` ACT-02.8; `architect-implementation-plan` SKILL.md §6 (sjabloon, punt 4) | PRP-032 |
| FND-030 | **Geen visie en geen paginalijst.** "Nu en later" bestaat alleen als de kern (PRP-015) en de technische slice-indeling van Atlas (ACT-01.16). Je krijgt geen lijst van pagina's met instructies. `requirements-analysis` vraagt niet naar pagina's, ontwerp of een design systeem. | ontbrekende stap | PRC-01 | `requirements-analysis` SKILL.md stap 3 (onderwerpen); `prc-01` ACT-01.54, ACT-01.16 | PRP-029, PRP-030 |
| FND-031 | **Eén zware modelleermethode voor elk project.** De keten domeinmodel → sequentie → klassen → database (TL-V5, B-07) en de skills van Atlas gaan uit van objectgeoriënteerd maatwerk: `architect-modeling` (fasen 2 t/m 4), `architect-database` ("na het goedgekeurde ontwerpklassendiagram"), `architect-implementation-plan` (klassen, namespaces). `architect-architecture-choice` (skillmap `architect-requirements`) kiest een architectuurstijl (bijvoorbeeld monoliet of SPA). De alternatievenlijst (stap 4) bevat geen platform- of CMS-optie, hoewel de skill wel naar de bestaande stack en hosting vraagt (stap 2, stap 6). Bij een site op een CMS levert de keten documenten zonder functie op. | overbodige stap | PRC-01, PRC-02 | SKILL.md van de vijf genoemde skills (Feit, 2026-10-30; bevestigd door Dr. Evil op WEB-24, formulering bij `architect-architecture-choice` aangescherpt); TL-V5; B-07 | PRP-034, PRP-038 |
| FND-032 | **De lijst met mogelijke uitbreidingen is geen vast onderdeel.** UC2 neemt "de volgende wens uit jouw volgorde" (ASM-14). Waar die lijst staat, wie hem bijhoudt en hoe "later"-werk uit UC1 erop komt, staat nergens. | ontbrekende verantwoordelijkheid | PRC-01, PRC-02 | `prc-02` ACT-02.1, ASM-14 | PRP-033 |
| FND-033 | **Er is geen ontwerper behalve jij.** Er zijn vier agents: Dr. Evil, Socrates, Atlas en Sentinel (Feit: Paperclip-API, 2026-10-30). Er is geen designer- of frontend-agent en geen skill voor ontwerp (Feit: skilllijst van het bedrijf, 2026-10-30). Volgens de instructies van Dr. Evil ben jij "product owner, designer, frontend developer en CEO" (Feit, AGENTS.md Dr. Evil r.42, ook geciteerd in FND-011d). Al het ontwerpwerk komt dus bij de enige mens, bovenop de akkoorden (doel D3). | bottleneck | PRC-01, PRC-02 | Paperclip-API; skilllijst; AGENTS.md Dr. Evil | PRP-031, PRP-035 |
| FND-034 | **Niemand bewaakt dat de bouw bij het design systeem blijft.** Het conventiebestand (PRP-010) noemt geen UI-afspraken; Sentinel is security- en codereviewer. Het grootste deel speelt na het backlog (buiten de scope), maar de afspraken moeten vóór het backlog liggen. | ontbrekende verantwoordelijkheid | PRC-01, PRC-02 | PRP-010 (`voorstellen`); Paperclip-API (titel Sentinel) | PRP-037 |

---

## B. Voorstellen met aanbeveling

### PRP-029 Volgorde in UC1 (B-10 stap 1 t/m 5) — **aanbevolen**

**Vóór de paginalijst nodig:** de requirements, de use cases en de **visie** (doel, doelgroepen, hoofdstructuur). Dat is genoeg om pagina's te benoemen met hun inhoud en functie. **Niet** nodig: de architectuurkeuze en het globale ontwerp. Die bepalen *hoe* een pagina wordt gebouwd, niet *wat* erop staat.

**Pas na het paginaontwerp:** sequentiediagrammen (wat de gebruiker op de pagina doet), klassendiagram en databaseontwerp (welke gegevens de pagina's tonen en opslaan), en het bouwcontract. Het **domeinmodel** komt uit de use cases en bedrijfsregels en kan in principe al eerder. Ik zet het na GOV-15, omdat het alleen bij P3 nodig is en het profiel dan vastligt.

**Mijn volgorde** (PRC-01 concept):

| # | Stap | Wie | Waarom hier |
| --- | --- | --- | --- |
| 1 | Design systeem maken en aanleveren (ACT-01.52), **tegelijk** met de analyse | jij | B-10 stap 1. De analyse hoeft er niet op te wachten; het moet er zijn vóór de architectuurkeuze en het ontwerp (G-01.8). |
| 2 | Analyse: requirements, **visie met projecttype** (ACT-01.26), use cases, **paginalijst met brieven** (ACT-01.27), kern | Socrates; Atlas toetst | De paginalijst is input voor het profiel: veel contentpagina's van weinig typen wijst op P1, veel formulieren en toestanden op P2 of P3. |
| 3 | Akkoord GOV-10 (uitgebreid) | jij | Paginalijst en visie in je bestaande eerste akkoord. |
| 4 | **Tegelijk:** architectuurkeuze met profiel (ACT-01.11) en ontwerp van de sleutelpagina's (ACT-01.28) | Atlas en jij | Beide hebben alleen het goedgekeurde analysepakket en het design systeem nodig. Parallel scheelt doorlooptijd. |
| 5 | Brieven afstemmen op het ontwerp (ACT-01.58) | Socrates | Het ontwerp kan een gegeven of actie toevoegen; de brief blijft de bron voor het contract. |
| 6 | Akkoord GOV-15 "Richting" (nieuw) | jij | Het profiel bepaalt welke technische documenten er komen. Die maak je pas als het profiel goed is. |
| 7 | Technisch ontwerp volgens profiel (G-01.6) | Atlas | P1, P2 of P3 (PRP-034). |
| 8 | Akkoord GOV-11 (technisch ontwerp) | jij | Zoals nu, maar zonder de architectuurkeuze. |
| 9 | Slices, bouwcontract, conventies, plan → GOV-06 → backlog | Atlas, Dr. Evil, jij | Zoals nu; het contract komt uit de goedgekeurde brieven en ontwerpen. |

**Afwijking van jouw volgorde:** jij zette de paginalijst ná de visie en de architectuur. Ik zet hem ná de visie en vóór de architectuur, omdat hij input is voor het profiel en zo in je eerste akkoord meekan. Wil je hem na de architectuur, dan komt er een akkoord bij of schuift de paginalijst naar GOV-15 (vraag 2).
**Alternatief:** de volgorde letterlijk zoals in je opdracht (design systeem → visie en architectuur → paginalijst → ontwerp). Nadeel: het profiel wordt gekozen zonder de paginalijst, en de architectuur wacht op de visie terwijl het ontwerp op de architectuur wacht: alles na elkaar.

### PRP-030 De paginalijst — **aanbevolen**

- **Wie:** Socrates (ACT-01.27). Het is "wat en waarom", net als de use cases. Atlas toetst hem samen met de use cases (ACT-01.23), dus geen extra lus.
- **Input:** visie, use cases, kern, en het design systeem als dat er al is.
- **Vorm:** één document `pages.md` met per pagina: naam, doel, paginatype (bijvoorbeeld contentpagina, overzicht, detail, formulier, landingspagina), UC- en AC-ID's, **"nu" of "later" met reden**, ontwerpniveau ("brief" of "ontwerp", met het criterium uit PRP-031), en voor elke "nu"-pagina een paginabrief.
- **Instructies voor jou "wat nu, wat later":** per pagina staat de reden: "nu" omdat de pagina een kern-eis dekt of slice 1 nodig heeft; "later" omdat ze geen kern-eis dekt of op een andere pagina wacht. Bovenaan staat een korte advieslijst: welke pagina's in slice 1 horen en welke paginatypen je eerst moet ontwerpen. Jij beslist bij GOV-10.
- **Wat met "later":** die pagina's gaan aan het eind van UC1 naar de uitbreidingslijst (ACT-01.29, PRP-033). Ze krijgen nu nog geen brief en geen ontwerp; dat gebeurt in UC2 (G-02.2 stuurt een uitbreiding zonder brief naar ACT-02.15).

### PRP-031 Het ontwerpniveau (jouw eerste open vraag) — **aanbevolen: per paginatype met paginabrief**

**Wat staat er op de pagina, en hoe ziet ze eruit?** Splits die twee. Voor een API-contract heb je de inhoud en functie nodig: welke gegevens, welke acties, welke toestanden (leeg, fout, bezig). Een visueel ontwerp is daarvoor niet nodig. Die inhoud zet ik in een **paginabrief**. De brief is **bindend** voor het bouwcontract. Het ontwerp is bindend voor het uiterlijk.

**De opties naast elkaar:**

| | (a) Per pagina | (b) Alles vooraf | (c) Per paginatype met brief (**aanbevolen**) |
| --- | --- | --- | --- |
| Wat | Elke pagina een eigen ontwerp en akkoord | Alle pagina's ontwerpen aan het begin, daarna vrijheid voor de frontend | Design systeem, één sleutelpagina per paginatype en de bijzondere pagina's krijgen een ontwerp; de rest een brief |
| Jouw werk (ontwerp) | groeit met elke pagina | alles in één keer, ook voor "later" | groeit met het aantal **typen**, niet met het aantal pagina's |
| Jouw akkoorden | per pagina (UC2: bij bijna elke uitbreiding) | één groot akkoord | UC1: in GOV-15; UC2: GOV-14 alleen bij een nieuw patroon of een bijzondere pagina |
| Veroudering | laag | hoog: "later"-pagina's en UC2 zijn nog niet bekend | laag: "later" krijgt pas een brief als het aan de beurt is |
| Consistentie | risico: elke pagina een beetje anders | hoog | hoog: pagina's volgen het patroon |
| UC2 | elke uitbreiding wacht op een ontwerp | past niet: uitbreidingen komen later | meestal alleen een brief |
| Doorlooptijd slice 1 | gemiddeld | lang | kort |
| Basis voor het contract | ontwerp (risico: mock data of vormgeving als bron) | ontwerp | brief (expliciet) |

*Rekenvoorbeeld (verzonnen getallen, alleen ter illustratie):* een website met 30 pagina's in 5 paginatypen, waarvan 3 merkbepalend en 10 "nu". (a) 10 ontwerpen nu, 20 later. (b) 30 ontwerpen vooraf. (c) ongeveer 5 tot 8 ontwerpen, waarvan alleen de typen van de "nu"-pagina's nu.

**De regel (ontwerpniveau "ontwerp" als minstens één waar is):**
1. de pagina is de eerste van een paginatype (de sleutelpagina die het patroon vastlegt);
2. de pagina heeft een component die niet in het design systeem of de patroonbibliotheek staat;
3. de pagina is merkbepalend (home, landingspagina, campagne);
4. de pagina is conversiegevoelig (aanmelden, bestellen, offerte, betalen).
Anders: "brief". De pagina wordt dan gebouwd binnen het design systeem, met het patroon van haar type.

**Wie beslist "bestaand patroon"?** Socrates **stelt voor** (in de paginalijst, met het criterium). Atlas **toetst** bij de use cases (ACT-01.23, ACT-02.13): kan de pagina echt met de bestaande componenten? **Jij beslist** in GOV-10 (UC1) of GOV-02 (UC2). Zo ligt de keuze niet bij één agent, en je hoeft er geen extra akkoord voor te geven.

**De paginabrief** (Socrates) is kort: paginatype, doel, gegevens (welke velden, uit welke UC of BR), acties, toestanden, UC- en AC-ID's. Hij is de bron voor het contract, voor de frontendtaak en voor de afname.

**Website of applicatie?** Een website heeft veel contentpagina's van weinig typen: daar levert (c) de meeste winst op. Een applicatie heeft meer unieke schermen (formulieren, dashboards, wizards); daar vallen meer pagina's onder regel 1 of 2. De regel past zich dus vanzelf aan, en (c) schuift bij een app richting (a).
**UC1 of UC2?** In UC1 ontstaan het design systeem en de patroonbibliotheek. In UC2 bestaan ze al; de meeste uitbreidingen krijgen alleen een brief.

### PRP-032 Het paginaontwerp: wie, waarin, en mock data — **aanbevolen**

| Wie | Wanneer past het | Nu mogelijk? |
| --- | --- | --- |
| **Jij** | design systeem, merkbepalende pagina's, sleutelpagina's | ja (Feit: designer en frontend developer volgens AGENTS.md Dr. Evil) |
| **Frontend-agent** | patronen en componenten in code met mock data, binnen het design systeem | nee, bestaat niet; komt pas met de developers (PRP-035) |
| **Designer-agent** | grafische varianten als jouw ontwerptijd het knelpunt wordt | nee, bestaat niet; nu niet nodig (PRP-035) |

**Grafisch of in code?** Grafisch voor wat vooral om uitstraling gaat (home, landingspagina). In code met mock data voor interactieve patronen (formulieren, overzichten met filters): dat ligt dichter bij de bouw en is te hergebruiken.

**Mock data is niet bindend (B-10). Zo is het geborgd:**
1. De **brief** is de enige bron voor "welke gegevens". Het bouwcontract heeft per veld een **bronkolom** (brief, UC/AC of BR); "mock" mag daar niet staan (ACT-01.17, ACT-02.8).
2. Mock data staat gemarkeerd als "niet bindend" in het ontwerp of op een vaste plek in de code (ACT-01.28, ACT-02.16).
3. Voegt het ontwerp gegevens of acties toe, dan werkt Socrates de brief bij (ACT-01.58, ACT-02.56). De verschillen staan op de kaart, zodat jij ze ziet.
4. Atlas toetst de brieven (ACT-01.23, ACT-02.13). Jij keurt het contract goed met de bronkolom als criterium (GOV-06).
5. **De vorm** van de data (veldnamen, structuur) volgt het contract; **de inhoud en functie** van de pagina volgen brief en ontwerp. De frontend past zich aan de vorm van het contract aan, niet aan de mock.

**Geen cirkel tussen ontwerp en contract:** brief → ontwerp → bijgewerkte brief → akkoord → technisch ontwerp → contract. Het contract wordt nooit de bron van een brief of ontwerp. De enige weg terug is begrensd: kan Atlas iets uit een brief niet bouwen, dan stelt hij een vraag (PRC-04, max. 2 rondes) of dient hij een wijzigingsverzoek in (GOV-12). Een gewijzigde brief of een gewijzigd ontwerp komt opnieuw langs jou, en daarna volgt het contract.

### PRP-033 UC2: de uitbreidingslijst en de stappen per uitbreiding — **aanbevolen**

- **Wat:** één lijst met mogelijke uitbreidingen per project, in Paperclip één issue per uitbreiding met status `backlog` onder het projectissue (M-12).
- **Wie:** **jij** bepaalt inhoud en volgorde. **Dr. Evil** houdt de lijst bij (`backlog-management`, uitbreiden).
- **Wanneer bijgewerkt:** (1) aan het eind van UC1 met de "later"-pagina's (ACT-01.29); (2) als jij een nieuwe wens geeft, via Dr. Evil (enig loket, PRP-001); (3) op het weekmoment (volgorde, top 5); (4) aan het eind van elke doorloop van UC2 (ACT-02.17): de uitbreiding staat op "in backlog", nieuwe "later"-pagina's erbij.
- **Stappen per uitbreiding** (PRC-02 concept): volgende uitbreiding van de lijst (ACT-02.1) → eisen (GOV-01, zo nodig met bijgewerkte visie) → use cases → **ontwerpbehoefte en brieven** (ACT-02.15) → toets Atlas → GOV-02 → **ontwerp nodig?** (G-02.7) → zo ja: ontwerp (ACT-02.16), brieven afstemmen (ACT-02.56), GOV-14 → slices met de visie → zo nodig globaal ontwerp of profiel (G-02.3) → ontwerp per slice → **bouwcontract** → plan → GOV-06 → controles → taken → backlog gereed → lijst bijwerken.

### PRP-034 Architectuurprofielen (jouw tweede open vraag) — **aanbevolen: 3 profielen, één keuze in de flow**

**Zijn drie profielen het juiste aantal?** Ja. Twee (licht en zwaar) mist het verschil tussen een CMS (contentmodel) en een app (componenten en routes): dat zijn echt andere producten. Vier of meer (bijvoorbeeld een apart profiel voor headless CMS of webshop) maakt van elke technologie een profiel. Ik kies het profiel daarom op **criteria**, niet op technologie.

**De keuze in twee vragen:**
1. **Haalt een standaardplatform de eisen met configuratie, thema en plugins?** (CMS, webshop-platform) → **P1**.
2. Zo niet: **is er bedrijfslogica met eigen regels en toestanden** (bedrijfsregels met een levenscyclus, berekeningen, workflows)? Ja → **P3**. Nee, vooral schermen, gegevens tonen en opslaan, en koppelingen → **P2**.

**Overlap, bijvoorbeeld Payload:** Payload is een CMS dat je in code configureert, met een frontend van componenten. Dat is **P2**, met het contentmodel als onderdeel van het componenten- en dataontwerp. Komt er echte bedrijfslogica bij, dan wordt het P3.

**Producten per profiel** (V = verplicht, O = optioneel, — = niet van toepassing):

| Product (activiteit) | P1 Configuratie/CMS | P2 Component-app | P3 Maatwerk met domeinmodel |
| --- | --- | --- | --- |
| Visie, requirements, bedrijfsregels, kern (01.26, 01.6, 01.54) | V | V | V |
| Use cases met AC's (01.9; B-06) | V, **lichte vorm** (PRP-038) | V | V |
| Paginalijst en paginabrieven (01.27) | V | V | V |
| Design systeem, sleutelpagina's en paginatypen (01.52, 01.28) | V, vertaald naar templates en blokken | V, vertaald naar componenten | V |
| Architectuurkeuze met profiel-ADR, context- en containerdiagram (01.11) | V (platform, thema, plugins, hosting) | V | V |
| Contentmodel en platformconfiguratie (01.60) | V | — (bij een headless CMS onderdeel van 01.59) | — |
| Componenten-, route- en dataontwerp (01.59) | — | V | — (componenten per slice in 01.18 en 02.7, zoals nu) |
| Domeinmodel (01.10) | — (GLOSSARY volstaat) | — (heb je het nodig, dan is het P3) | V |
| Sequentiediagrammen (01.12) | O, alleen voor een koppeling, binnen 01.60 | V voor de kernflows, binnen 01.59 | V (TL-V5) |
| Ontwerpklassendiagram (01.13) | — | — | V |
| Databaseontwerp (01.24; B-07) | — (het platform beheert de database) | V alleen bij een eigen database, binnen 01.59 | V (B-07) |
| **Bouwcontract per slice** (01.17, 02.8; TL-V4) | V als **templatecontract** (velden per template); API-contract alleen voor eigen endpoints of koppelingen | V API-contracten | V API-contracten |
| Conventiebestand (01.56) | V (thema, plugins, updates, deploy) | V | V |
| Implementatieplan met werkpakketten (01.18, 02.9) | V (configuratie-, thema-, plugin- en contentpakketten) | V | V |
| **Documenten in GOV-11** | 1 | 1 | 4 |

**Wanneer en door wie?** Socrates **signaleert** het projecttype in de visie (ACT-01.26), met de signalen: soort en aantal pagina's, bedrijfslogica, eigen data, koppelingen, wie de content beheert, verwachte groei. Atlas **kiest** het profiel bij de architectuurkeuze en legt het vast in een **profiel-ADR** (ACT-01.11). **Jij keurt goed** in GOV-15. Dat is jouw gedachte, met één toevoeging: de keuze gebeurt op de twee vragen hierboven.

**Kan het profiel later wijzigen?** Ja, alleen zwaarder (P1 → P2 → P3) en via UC2: Atlas toetst bij elke uitbreiding de **groeisignalen** (G-02.3): (1) bedrijfsregels met toestanden die het platform niet dekt; (2) eigen gegevens met relaties buiten het contentmodel; (3) meer maatwerkcode dan configuratie; (4) koppelingen met transacties. Is er een signaal, dan volgt een nieuw profiel-ADR dat het oude vervangt (ACT-02.55), jouw akkoord (GOV-09), en de documenten van het nieuwe profiel (bijvoorbeeld een domeinmodel) met hun eigen akkoord. Zijn de use cases licht, dan brengt Socrates ze naar de volledige vorm; ze komen mee in het akkoord met het ADR.

**Modelleren zonder het model drie keer te kopiëren:** één flow met één exclusieve gateway (G-01.6) na GOV-15, met drie takken die samenkomen bij GOV-11. P1 en P2 zijn elk één activiteit (ACT-01.60, ACT-01.59) met een producttabel; P3 is de bestaande keten, ongewijzigd. Subprocessen per profiel zijn niet nodig. **Verband met PRP-004** (globaal ontwerp licht, detail per slice): dat voorstel verviel voor de kern door TL-V5. De profielen brengen "licht" terug, maar per projecttype in plaats van per slice. P3 houdt TL-V5 en B-07.

**Winst en risico:**
- **Winst** (geteld in het model, niet gemeten in tijd): bij P1 en P2 één technisch document in plaats van vier in GOV-11; één technische activiteit in plaats van vier; bij P1 geen API-contracten maar een kleiner templatecontract, en een backlog met vooral configuratietaken. Hoeveel doorlooptijd dat scheelt, weet ik niet. Dat kunnen we meten bij het eerste P1-project.
- **Risico:** te weinig ontwerp bij een project dat groeit. **Opvang:** de groeisignalen bij elke uitbreiding, het profiel-ADR met de redenen, en de bedrijfsregels, use cases en GLOSSARY blijven in elk profiel bestaan. De domeinkennis gaat dus niet verloren als je later naar P3 gaat.
- **Risico:** een verkeerd profiel aan het begin. **Opvang:** GOV-15 keurt het profiel goed vóórdat er technisch ontwerp is.

**Bestaande besluiten** (expliciet, niet ongemerkt): **B-07** geldt volledig voor P3, bij P2 alleen bij een eigen database, bij P1 niet. **TL-V5** geldt voor P3. **TL-V4** blijft: je keurt per slice het bouwcontract goed, en bij P1 is dat het templatecontract.

### PRP-035 Rollen, agents en skills — **aanbevolen: geen nieuwe agent nu**

**Wie doet wat:**

| Stap | Uitvoerder | Keurt goed | Skill (status) |
| --- | --- | --- | --- |
| Design systeem (ACT-01.52) | jij | — | n.v.t. (mens) |
| Visie en projecttype (ACT-01.26) | Socrates | jij (GOV-10) | `requirements-analysis` uitbreiden; `architectuurprofielen` nieuw |
| Paginalijst en brieven (ACT-01.27, 02.15), afstemmen (01.58, 02.56) | Socrates | jij (GOV-10, GOV-15, GOV-02, GOV-14) | **`paginalijst-en-paginabrieven`** nieuw |
| Use cases en brieven toetsen (ACT-01.23, 02.13) | Atlas | — (is de toets) | `architect-use-case-review` (besloten, nog te maken) meteen met brieven |
| Paginaontwerp (ACT-01.28, 02.16) | jij | jij alleen bij ontwerp van een ander | n.v.t. (mens); **`paginaontwerp`** pas als er een ontwerp-agent komt |
| Architectuurprofiel (ACT-01.11) | Atlas | jij (GOV-15) | `architect-architecture-choice` uitbreiden; **`architectuurprofielen`** nieuw (gedeelde referentie) |
| P1 contentmodel (ACT-01.60) | Atlas | jij (GOV-11) | **`architect-cms-configuratie`** nieuw |
| P2 componenten, routes, data (ACT-01.59) | Atlas | jij (GOV-11) | **`architect-componentontwerp`** nieuw; `uml-sequence-diagrams` bestaat; `architect-database` uitbreiden |
| P3 domein, sequentie, klassen, database | Atlas | jij (GOV-11) | zoals nu; `architect-modeling` alleen voor P3 |
| Bouwcontract (ACT-01.17, 02.8) | Atlas | jij (GOV-06) | `architect-api-contracts` (besloten, nog te maken) meteen als bouwcontract met bronkolom |
| Uitbreidingslijst (ACT-01.29, 02.17, 02.1) | Dr. Evil | jij (inhoud en volgorde) | `backlog-management` uitbreiden |
| Poorten (ACT-01.20, 02.53) | Dr. Evil | — | `quality-gates` uitbreiden (welke documenten per profiel verplicht zijn) |

**Nieuwe skills of bestaande uitbreiden?** Een mix, om skills klein te houden (zie PRP-024: elke wijziging langs je akkoord, en grote skills zijn lastig te toetsen):
- **Eén gedeelde referentie** `architectuurprofielen` met de profieltabel en de groeisignalen. De skills van Atlas, Socrates en Dr. Evil verwijzen ernaar en herhalen de tabel niet (zoals `bpmn-conventies` voor de bpmn-skills).
- **Eén skill per nieuw profiel** (`architect-cms-configuratie` en `architect-componentontwerp`). `architect-modeling` blijft de regie voor P3 en krijgt alleen de regel "alleen bij P3".
- **Kleine uitbreidingen** van `requirements-analysis`, `uml-use-cases`, `architect-architecture-choice`, `architect-modeling`, `architect-database`, `architect-implementation-plan`, `backlog-management`, `quality-gates` en `architect-conventions`. `architect-api-contracts` en `architect-use-case-review` zijn al besloten maar nog niet gemaakt; die kunnen meteen in de nieuwe vorm worden gemaakt.

**Is een designer- of frontend-agent nodig?** Nu niet. Socrates en Atlas kunnen alles behalve het visuele ontwerp, en dat doe jij (Feit: designer en frontend developer). Een **frontend-agent** komt er sowieso als de bouw begint (na het backlog). Dan kan die het ontwerp in code met mock data overnemen voor patronen en nieuwe componenten. Dat signaleert Dr. Evil op dezelfde manier als PRP-018 ("zodra er developers zijn"). Een **designer-agent** pas als jouw ontwerptijd aantoonbaar het knelpunt wordt. Ik maak geen agents of skills; het voorstel loopt via Dr. Evil (PRC-08).

### PRP-036 Akkoorden — **aanbevolen: 4 in UC1, bestaande akkoorden uitgebreid**

| Wat je goedkeurt | UC1 | UC2 |
| --- | --- | --- |
| **Paginalijst** ("nu"/"later", ontwerpniveau, brieven) | in **GOV-10** (uitgebreid), samen met requirements, use cases, bedrijfsregels, kern en **visie** | brieven en ontwerpniveau in **GOV-02** (uitgebreid), samen met de use cases |
| **Architectuurprofiel** | in **GOV-15 "Richting"** (nieuw), samen met de architectuurkeuze | bij een profielwijziging: **GOV-09** (uitgebreid met het profiel) |
| **Eerste paginaontwerp** | in **GOV-15**, samen met het profiel; een ontwerp van jezelf niet apart | **GOV-14** (nieuw), alleen als G-02.7 "ja" zegt |
| Technisch ontwerp | **GOV-11**, nu volgens het profiel | per document (P3: GOV-03/04/05/13; P1/P2: GOV-11) |
| Bouwcontract en inhoud slice | **GOV-06** | **GOV-06** |

**Waarom een vierde akkoord in UC1?** Het profiel bepaalt welke technische documenten er komen. In de vorm met 3 (ASM-19) maakt Atlas het hele technisch ontwerp op een profiel dat je nog niet hebt gezien. Keur je dan het profiel af, dan is al dat werk weg. Dat is het restrisico van FND-005, maar groter. GOV-15 is de "tussenvorm met 4" die ik bij PRP-003 al noemde, aangevuld met het ontwerp.
**Alternatief (3 akkoorden):** GOV-15 gaat op in GOV-11. Dan maakt Atlas het technisch ontwerp op een profiel en ontwerpen die nog niet zijn goedgekeurd. Afkeuren per document vangt dat deels op (ASM-18). Je kiest bij vraag 1.
**Aantal akkoorden in UC2:** bij een uitbreiding die een bestaand patroon volgt, gelijk aan nu. Alleen een nieuw patroon of een bijzondere pagina geeft één akkoord extra (GOV-14).

### PRP-037 Design-consistentie bewaken — **aanbevolen**

- **Conventiebestand** (ACT-01.56, `architect-conventions`) krijgt UI-conventies: het design systeem en de patroonbibliotheek zijn bindend; een nieuwe component zonder goedgekeurd ontwerp is een vraag (PRC-04), geen eigen keuze.
- **Elke frontendtaak verwijst naar een brief en een paginatype** (ACT-01.18, 01.20, 02.9, 02.11). Atlas controleert dat bij de toets van de taken (ACT-01.25, 02.14).
- **Na het backlog** (buiten de scope, als richting voor later): Sentinel kan in de code controleren of alleen componenten uit de bibliotheek zijn gebruikt; of het er goed uitziet, beoordeel jij bij de afname.

### PRP-038 Lichtere use cases bij een eenvoudige site — **aanbevolen**

- **Hoe licht:** per use case actor, doel, hoofdpad in hooguit vijf stappen, en acceptatiecriteria voor het succespad en het belangrijkste foutpad. Contentpagina's zonder gedrag krijgen geen use case: de paginalijst en de brief dekken ze.
- **Wie bepaalt het:** Socrates stelt de vorm voor op basis van het projecttype (ACT-01.26). Atlas ziet dat bij de toets. Jij beslist in GOV-10. Kiest Atlas later een zwaarder profiel, dan werkt Socrates de use cases bij naar de volledige vorm, in het pakket van GOV-15.
- **B-06 blijft:** Socrates maakt de use cases, Atlas toetst ze.

### PRP-039 Skills bij naam in de conventies (B-11) — **aanbevolen**

**Aanleiding (B):** je comment `081ea763`: *"kun je geen nummers voor skills gebruiken in het register … beschrijf skills bij de naam."* Dat is besluit **B-11**, verwerkt als **CHG-016** in dit concept.
**Feit (F):** `bpmn-conventies` schrijft voor dat elke skill een ID `SKL-01` krijgt (ID-schema en voorbeeldregister). Daarom stonden overal nummers.
**Wat ik in 0.10 al heb gedaan:**
- In het register, PRC-01, de Paperclip-mapping, de uitbreidingsgids en dit document staat elke skill bij zijn naam.
- Bovenaan het register staat nu een tabel **Skills in het kort**: per skill één zin over waar hij over gaat, wie hem gebruikt en of hij al bestaat.
- Een skill die nog niet bestaat, heeft een **werknaam**, bijvoorbeeld `architectuurprofielen`. Wordt hij later onder een andere naam gemaakt, dan pas ik het register aan.
- Het oude nummer staat alleen nog in het veld `oud_nummer` (en in het controleverslag `v010-controle`, een momentopname). Zo blijven de goedgekeurde documenten van 0.9 en pagina 0.3 leesbaar, want daar staan de nummers nog in.

**Voorstel (V):** pas `bpmn-conventies` aan, zodat skills ook in volgende modellen bij hun naam staan: `naam` is de sleutel en moet uniek zijn, en er komt geen `SKL`-nummer meer. Ook het bouwscript van de pagina (`bpmn-eindontwerp`) gaat dan uit van de naam. Dat loopt, net als de andere skillwijzigingen, via Dr. Evil (PRC-08). Andere ID's (ACT, GOV, PRP enz.) blijven nummers. Die heb je niet genoemd, en processtappen hebben geen vaste naam.

**Waarom de conventie nummers gebruikte, en hoe ik dat risico opvang (F/V):** `bpmn-conventies` zegt: *"Gebruik stabiele ID's en verwijs er altijd mee, want namen veranderen."* Dat risico is echt. Een werknaam kan anders worden als de skill gemaakt wordt, en een bestaande skill kan een nieuwe naam krijgen. Daarom stel ik voor:
- Een naamswijziging is een wijziging met een CHG. Het register vervangt de naam overal en bewaart de vorige naam in het veld `vorige_namen`.
- `bpmn-modelcontrole` controleert bij elke ronde dat elke skillverwijzing naar een bestaande naam in de skillslijst wijst.
- Een naam is uniek. Bestaan er twee skills met dezelfde naam, dan krijgt de nieuwe skill een andere naam.

Tot PRP-039 is uitgevoerd, wijkt model 0.10 op dit punt af van `bpmn-conventies`. Dat komt door jouw besluit B-11. Ik markeer het in de controle als bekende afwijking (B-11).

---

## C. Wijzigingen per use case (doorgevoerd in het concept)

**UC1 (`v010-prc-01`):** nieuw ACT-01.26, 01.27, 01.28, 01.29, 01.58, 01.59, 01.60; G-01.6 (profiel), G-01.7 t/m G-01.9 (parallel); GOV-15; de profieltabel. ACT-01.52 van variant naar basis. Gewijzigd: ACT-01.1, 01.3, 01.6, 01.8, 01.9, 01.10, 01.11, 01.12, 01.13, 01.14, 01.15, 01.16, 01.17, 01.18, 01.20, 01.23, 01.24, 01.25, 01.54, 01.56, 01.57; G-01.4; GOV-10, GOV-11, GOV-06. Er is geen variant meer: mijn uitwerking staat in de basis, gelabeld V.
**UC2 (`v010-prc-02`):** nieuw ACT-02.15, 02.16, 02.17, 02.56; G-02.7; GOV-14. Gewijzigd: ACT-02.1, 02.3, 02.4, 02.5, 02.6, 02.7, 02.8, 02.9, 02.11, 02.12, 02.13, 02.53, 02.54, 02.55; G-02.2 (nu ook naar de brieven), G-02.3, G-02.5; GOV-01, GOV-02, GOV-06, GOV-09, GOV-12.
**Register (`v010-register`):** B-10; blok `profielen` met de profieltabel; ROL-01 t/m ROL-04 aangevuld; 82 activiteiten (was 71); 19 beslissingen; GOV-14 en GOV-15; CAP-24 t/m CAP-27; `paginalijst-en-paginabrieven`, `architectuurprofielen`, `architect-cms-configuratie`, `architect-componentontwerp` en `paginaontwerp`; koppelingen voor alle nieuwe activiteiten; ASM-26 t/m ASM-29; OPEN-14; PRP-011 bij `vervallen_ids`. Elk nieuw of gewijzigd element heeft `nieuw_in: "0.10"` of `wijziging_0_10`.
**Paperclip-mapping (`v010-paperclip-mapping`):** rijen voor design systeem en ontwerp, paginalijst, GOV-15, GOV-14 en de uitbreidingslijst; nieuw M-11 t/m M-13.
**Uitbreidingsgids (`v010-uitbreidingsgids`, 0.4):** ontwerp eerst bij een nieuwe use case, de lane *ontwerper*, een profiel toevoegen, vrije ID's na CHG-016; skills bij naam (§4, B-11).

**Nieuwe aannames:** ASM-26 (GOV-15 met meer producenten), ASM-27 (visie = productvisie door Socrates), ASM-28 (jij bent de ontwerper; eigen ontwerp niet apart goedkeuren), ASM-29 (elk project in UC1 heeft een UI). **Nieuwe open vraag:** OPEN-14 (waar staan het design systeem en de ontwerpen).

**Gevolgen voor de subprocessen** (kleine tekstwijzigingen, na je akkoord in dezelfde CHG; de diagrammen veranderen niet):
- **PRC-03 (akkoord):** "GOV-01 t/m GOV-13" wordt "GOV-01 t/m GOV-15"; een pakket is GOV-10, GOV-11 of GOV-15; een pakket kan meer producenten hebben (ASM-26).
- **PRC-05 (afkeuring):** afkeuren per document geldt ook voor GOV-15; de toetslus geldt ook voor de brieven (ACT-01.27, ACT-02.15).
- **PRC-04 (vragen):** routeringsregel erbij: vragen over een paginabrief → Socrates; vragen over het ontwerp → de ontwerper (nu jij, via ACT-01.21/01.22 of ACT-01.4/01.5).
- **PRC-06:** geen wijziging.

**CHG-016** (komt na je akkoord in `wijzigingen`): B-11, skills bij naam in plaats van nummer. Geraakt in dit concept: register (tabel *Skills in het kort*, veld `naam` als sleutel, `oud_nummer`, `werknaam`), PRC-01, Paperclip-mapping, uitbreidingsgids (§4 en de tabel met vrije ID's) en dit document. Na je akkoord ook de overzichten en de pagina. Nieuw: PRP-039. Aan de inhoud van processen, rollen, akkoorden en skills verandert niets.

**CHG-015** (komt na je akkoord in `wijzigingen`): model 0.10, B-10, ontwerp-eerst en architectuurprofielen; nieuw FND-028 t/m FND-034 en PRP-029 t/m PRP-038; PRP-011 vervalt; geraakt: register, PRC-01, PRC-02, de tekst van PRC-03, PRC-04 en PRC-05 (zie hierboven), paperclip-mapping, uitbreidingsgids, bevindingen, voorstellen, en na akkoord de overzichten en de pagina.

---

## D. Controle

**Modelcontrole door een aparte agent** (`v010-controle`):
- **Eerste ronde:** "terug naar de maker". Er waren 2 blokkerende punten: (K10-01) in UC2 sloeg een uitbreiding met goedgekeurde use cases maar zonder brief (een "later"-pagina) de brief en jouw akkoord over; (K10-02) na een afkeuring bij GOV-15 liep het herwerk vast in de parallelle samenvoeging. Daarnaast 12 waarschuwingen, onder meer: verschillen tussen register en procesbeschrijving, ingekorte 0.9-tekst in PRC-02, de profieltabel stond alleen in het voorstel, en de gevolgen voor PRC-03 t/m PRC-05 ontbraken. Alles is hersteld.
- **Hercontrole:** "kan worden ingediend". Eén nieuwe kleine waarschuwing (K10-15, verschillen in drie invoervelden); die heb ik daarna hersteld zonder nieuwe controle door de agent. Ik heb de YAML en de diagrammen daarna zelf opnieuw gecontroleerd.

**Jouw controlepunten:**

| Punt | Uitkomst |
| --- | --- |
| Geldig BPMN | Er is geen `.bpmn`-bestand (alleen op verzoek, met een validator). De Mermaid-diagrammen zijn op BPMN-logica gecontroleerd: elke stap is bereikbaar en elk pad bereikt een einde; parallelle splitsing en samenvoeging kloppen; elke lus heeft een maximum en een uitgang. |
| Informatie over de pagina en jouw akkoord vóór het contract | UC1: brieven in GOV-10, ontwerp en bijgewerkte brieven in GOV-15, beide vóór ACT-01.17. UC2: brieven in GOV-02, ontwerp in GOV-14, vóór ACT-02.8; ook een uitbreiding zonder brief gaat eerst langs ACT-02.15 en GOV-02 (K10-01). |
| Geen cirkel tussen ontwerp en contract | Het contract is nooit de bron van een brief of ontwerp. De enige weg terug is een vraag (max. 2 rondes) of een wijzigingsverzoek met jouw akkoord (GOV-12). |
| Mock data niet bindend | ACT-01.28 en ACT-02.16 (gemarkeerd), ACT-01.17 en ACT-02.8 (bronkolom, niet de mock data), GOV-06 (criterium). |
| Per profiel verplicht, optioneel of n.v.t. | Profieltabel in PRC-01 en in het register (`profielen`); GOV-11 en de poort toetsen ertegen. Elk profiel levert een bouwcontract, een conventiebestand en een implementatieplan, dus het backlog en de bouw krijgen altijd wat ze verwachten. |
| Bestaande besluiten niet ongemerkt veranderd | Elke verandering staat in PRC-01 onder "Bestaande besluiten" en als voorstel op de kaart: 3 → 4 akkoorden (PRP-036), B-07 en TL-V5 per profiel en TL-V4 met templatecontract bij P1 (PRP-034), B-06 met lichte vorm bij P1 (PRP-038). TL-V7 verandert niet. |
| Eindigt bij het backlog | Ja: beide processen eindigen op "Backlog gereed, overdracht naar implementatie". |

**Niet getoetst:** de werking van de nieuwe skills (ze bestaan nog niet); de Paperclip-punten M-11 t/m M-13 (niet gevonden in de skill, niet geverifieerd); de winst in doorlooptijd (niet gemeten). De overzichten en de pagina werk ik pas bij na je akkoord.

---

## E. Openstaande punten en vragen

**Open, niet blokkerend:** OPEN-03 (drempel flowcheck), OPEN-04 (project en repo per klant), OPEN-10 (Paperclip-mechanisme voor je akkoord), OPEN-13 (wachten op Atlas), OPEN-14 (plek van de ontwerpen). Het pakket voor Dr. Evil (PRC-08) wacht op je akkoord op 0.10 en bevat dan ook de skills uit PRP-035.

**Vragen aan jou, in volgorde van belang** (ook op de vragenkaart):
1. **Akkoorden in UC1:** 4, met GOV-15 "Richting" (profiel en eerste ontwerpen) vóór het technisch ontwerp (mijn advies), of 3, met GOV-15 opgenomen in GOV-11?
2. **Paginalijst:** in het analysepakket, vóór de architectuurkeuze, zodat hij input is voor het profiel (mijn advies), of ná de architectuurkeuze zoals in je opdracht?
3. **Ontwerper:** tot er een agent is, ontwerp jij de sleutelpagina's en nieuwe patronen. Wil je al een voorstel voor een frontend- of designer-agent via Dr. Evil, of pas als de bouw begint (mijn advies)?
4. **Visie:** bedoel je de productvisie (doel, doelgroepen, hoofdstructuur, wat nu en later), gemaakt door Socrates in het analysepakket (ASM-27)? Of iets anders?
5. **Plek van het design systeem en de ontwerpen (OPEN-14):** een link naar een grafische tool, bestanden als bijlage op het issue, of code in de repository?
