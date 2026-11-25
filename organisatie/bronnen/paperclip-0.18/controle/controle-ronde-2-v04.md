# Modelcontrole model 0.4 (2026-10-28)

| | |
| --- | --- |
| Gecontroleerd | model 0.4 (Concept): CHG-005 (B-06, B-07, correctie volgorde Atlas) en CHG-006 (TL-V6) |
| Documenten | `register`, `prc-01` t/m `prc-06`, `proces-catalogus`, `paperclip-mapping`, `organisatie`, `bevindingen`, `voorstellen`, `wijzigingen` |
| Uitgevoerd door | onafhankelijke controle-agent met `bpmn-modelcontrole` (Sonnet 5.5, effort high), op verzoek van Socrates |
| Achtergrond | `rolanalyse-techlead` v0.3 (WEB-17), AGENTS.md van Atlas, skills `architect-modeling`, `architect-database`, `uml-use-cases`, `paperclip` |

## Eerste controle

**Uitkomst:** geen blokkerende punten, 8 waarschuwingen (G-01 t/m G-08), 6 opmerkingen (G-09 t/m G-14). YAML geldig, geen dubbele ID's, 73 activiteiten gelijk in register en beschrijvingen, telling 8 akkoorden (basis) en 3 (variant) overal gelijk.

| ID | Ernst | Bevinding | Herstel |
| --- | --- | --- | --- |
| G-01 | waarschuwing | Vraagpijlen ROL-05 → ROL-04 (PRC-01 A16→A13, PRC-02 A7→Q4) staan er nog, terwijl PRC-04 zegt dat die vraag bij TL-V6 geen issue is. ACT-02.6 had als input "vraag van de tech lead". | Pijlen gemarkeerd "alleen bij een eigen agent voor ROL-05" (de rol blijft in het model, TL-V6). Doorlopend-regels aangepast. Input ACT-02.6: "wens die het globale ontwerp raakt (uitkomst G-02.3)". |
| G-02 | waarschuwing | PRC-02 liet de database bijwerken zonder bijgewerkt en goedgekeurd klassendiagram (GOV-04/05 bestonden alleen in PRC-01). | ACT-02.6 werkt de geraakte documenten bij in de volgorde van PRC-01, elk met eigen akkoord: GOV-09, 03, 04, 05, 13. GOV-04 en GOV-05 ook in PRC-02. |
| G-03 | waarschuwing | De variant (GOV-10, GOV-11) botst met `uml-use-cases` (goedgekeurde requirements vereist) en met Atlas' "nooit door zonder akkoord" en `architect-database`; alleen één nadeel was genoemd. | Nadelen in PRC-01 uitgebreid; PRP-003 noemt nu ook `uml-use-cases` en `architect-database`. |
| G-04 | waarschuwing | Variant PRC-02: onduidelijk of ACT-02.55 naast of in plaats van ACT-02.6 komt. | Toevoeging op ACT-02.6; diagram: G-02.3 ja → ACT-02.6 → ACT-02.55 → GOV → ACT-02.7. |
| G-05 | waarschuwing | PRC-05 noemde de nieuwe toetsloops G-01.4 en G-02.5 niet. | PRC-05 naar 0.4 met G-01.4, G-02.5 en de terugweg via Socrates en opnieuw de toets. |
| G-06 | waarschuwing | Catalogus: PRC-06 op 0.4, register 0.3. | Catalogus PRC-06 op 0.3. |
| G-07 | waarschuwing | B-07 gaat alleen over de database, maar was ook bron voor de plek van de architectuurkeuze. | Architectuurkeuze gelabeld als Feit (instructies Atlas) en TL-V5; OPEN-06, FND-002 en GOV-09 aangepast. |
| G-08 | waarschuwing | Paperclip: na de laatste stage gaat een issue op `done`. Met alleen de review-stage van Atlas is het issue van Socrates klaar vóór jouw akkoord op de use cases. | Nieuw M-9 in de mapping; bij ACT-01.23 en ACT-02.13 verwezen. Raakt OPEN-10. Feit zelf nagekeken in de skill `paperclip`. |
| G-09 | opmerking | Verouderde legenda's (register, PRC-03), inhoudsregel register, "GK-3" niet uitgelegd. | Bijgewerkt; GK-3 = rollen- en skillmodel. |
| G-10 | opmerking | Commentaar `vervallen_ids` onjuist voor ID's uit 0.1; OPEN-02 verwees naar ASM-06; "vervallen" en "beantwoord" door elkaar; PRP-008 bevatte achterhaalde zinnen. | Commentaar aangepast, "beantwoord" voor OPEN's, ASM-06 gemarkeerd als vervallen, PRP-008 doorgehaald. |
| G-11 | opmerking | Naam GOV-01 noemde de bedrijfsregels niet. | "Akkoord analyse (requirements en bedrijfsregels)". |
| G-12 | opmerking | Pijl ACT-01.5 → ACT-01.3 ontbrak; GOV-12 niet in diagram PRC-02; meldmomenten in de variant; ACT-01.21 ontbrak in de mapping. | Pijl toegevoegd; GOV-12 verwijst naar PRC-04; variant noemt GOV-10/GOV-11 als meldmoment; mapping aangevuld. |
| G-13 | opmerking | De toets door Atlas vóór jouw akkoord wijkt af van de huidige instructies, zonder dat het model dat zegt. | Vermeld bij ACT-01.23 en in CHG-005 (aanpassing via PRC-08 na GK-3). |
| G-14 | opmerking | Lus GOV-13 → klassendiagram zonder maximum; G-02.2 stuurde "eisen wel, use cases niet" terug naar de analyse. | Telt als afkeuring van GOV-13 (max. 2); G-02.2 heeft drie uitkomsten. |

**Niet te beoordelen:** Mermaid-syntaxis (geen parser beschikbaar, visueel gelezen); de kaart `1f7ca238` zelf (Socrates heeft de antwoorden uit de wake-gegevens overgenomen: usecases = `socrates_uc1_uc2`, database = `A`).

## Hercontrole na herstel

**Uitkomst:** G-01 t/m G-14 zijn inhoudelijk hersteld. YAML geldig, geen dubbele ID's, 73/73 activiteiten gelijk in register en tabellen, elk element van PRC-01 en PRC-02 staat in het diagram. Conclusie van de controleur: **kan worden ingediend**. Vijf kleine nieuwe punten, alle vijf daarna verwerkt:

| ID | Ernst | Bevinding | Herstel |
| --- | --- | --- | --- |
| H-01 | waarschuwing | Catalogus noemde PRC-05 nog 0.3. | Op 0.4 gezet. |
| H-02 | waarschuwing | ACT-02.55 noemde GOV-04 en GOV-05 niet. | "per geraakt document GOV-09 / 03 / 04 / 05 / 13, in die volgorde". |
| H-03 | opmerking | Variant PRC-02: "meelezen" in het label terwijl ACT-02.52 die stap vervangt; akkoorden niet in een lane van ROL-01; voorwaarde niet in een pijllabel. | Label "ACT-02.7 … 02.9"; GOV-06 en GOV-09/03/04/05/13 in lane ROL-01; voorwaarde ook in het pijllabel. |
| H-04 | opmerking | `organisatie` §1 en §3 schreven de architectuurkeuze nog toe aan B-07. | "architectuurkeuze: Feit, instructies van Atlas; database: B-07". |
| H-05 | opmerking | M-9 niet doorgevoerd in de statusregel, de conceptenrij en OPEN-10. | Doorgevoerd; OPEN-10 heeft een `stand`. |

**Eindoordeel:** kan worden ingediend.
