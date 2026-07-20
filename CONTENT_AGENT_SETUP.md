# TwinPixel contentagent

Deze uitbreiding maakt via `/content-agent/` één contentpakket met:

- een SEO-blog die als concept in Decap CMS verschijnt;
- een LinkedIn-post voor de TwinPixel-bedrijfspagina;
- een Instagram-caption;
- een socialwachtrij die pas start nadat `Draft` in Decap is uitgezet.

## Publicatieflow

1. Log in op `https://twinpixel.nl/content-agent/`.
2. Vul onderwerp, doelgroep, zoekterm, bronnen en een publieke vierkante afbeelding in.
3. Genereer en controleer het volledige pakket.
4. Sla het op. De blog wordt met `draft: true` toegevoegd aan `src/content/insights`.
5. Open Decap, pas waar nodig aan en zet pas na controle `Draft` uit.
6. De scheduled function controleert iedere 15 minuten of de blog en afbeelding live staan.
7. Daarna wordt het pakket eenmalig naar Make gestuurd. Make publiceert naar LinkedIn en Instagram.

## Netlify instellen

Schakel **AI Gateway** in voor de site. De contentagent gebruikt het model `gpt-5.6-terra`.

Voeg daarna deze environment variables toe:

| Variabele | Verplicht | Waarde |
|---|---:|---|
| `CONTENT_AGENT_ALLOWED_EMAILS` | ja | Komma-gescheiden e-mailadressen die de agent mogen gebruiken |
| `GITHUB_CONTENT_TOKEN` | ja | Fine-grained GitHub-token met Contents: Read and write voor alleen deze repository |
| `GITHUB_CONTENT_REPOSITORY` | nee | Standaard: `Twinpixel-nl/Twinpixel-Reborn` |
| `GITHUB_CONTENT_BRANCH` | nee | Standaard: `main` |
| `SOCIAL_WEBHOOK_URL` | ja voor social | Custom webhook-URL van het Make-scenario |

Gebruik voor `GITHUB_CONTENT_TOKEN` geen persoonlijk token met bredere rechten dan nodig.

## Make-scenario

Maak een scenario met deze modules:

1. **Webhooks → Custom webhook**
2. Optioneel: controleer dat `event` gelijk is aan `twinpixel.insight.published`
3. **LinkedIn → Create an organization post**
   - organisatie: TwinPixel
   - tekst: `linkedin.text`
   - link: `article.url`
4. **Instagram for Business → Create a photo post**
   - afbeelding: `article.imageUrl`
   - caption: `instagram.caption`

Het webhook-pakket bevat ook `idempotencyKey`. Sla die in Make op wanneer je extra bescherming tegen dubbele berichten wilt. De repository markeert een pakket al als `sent_to_automation` zodra Make een succesvolle HTTP-status teruggeeft.

## Belangrijke grenzen

- Instagram accepteert alleen een publiek bereikbare afbeelding. Daarom is de afbeelding verplicht.
- LinkedIn- en Instagram-login blijven in Make beheerd. Er staan geen social tokens in de repository.
- De agent publiceert nooit een blog zonder menselijke controle: nieuwe blogs zijn altijd eerst een Decap-draft.
- Een succesvolle webhook betekent dat Make het pakket heeft ontvangen. Controleer in Make de foutafhandeling en history voor eventuele platformfouten.
