# TwinPixel contentautopilot

De autopilot publiceert maximaal één volledig contentpakket per ISO-week zonder handmatige controle:

- een nieuw evergreen SEO-onderwerp dat bestaande artikelen niet herhaalt;
- een blog van 900-1400 woorden;
- een vierkante AI-afbeelding;
- een LinkedIn-post voor de TwinPixel-bedrijfspagina;
- een Instagram-caption en afbeelding.

De bestaande handmatige contentagent op `/content-agent/` blijft beschikbaar voor extra artikelen.

## Automatische flow

1. Iedere ochtend om 07:00 UTC start een korte scheduler.
2. De autopilot controleert in `.content-agent/automation-state.json` of die week al content is gepubliceerd.
3. Zo niet, dan kiest GPT-5.6 Terra een nieuw evergreen onderwerp op basis van de bestaande Insights.
4. Gemini 3.1 Flash Image maakt een vierkante afbeelding zonder tekst of logo.
5. De afbeelding, blog en socialwachtrij worden naar GitHub geschreven.
6. De blog krijgt direct `draft: false` en Netlify publiceert hem.
7. Zodra blog en afbeelding live staan, stuurt de socialdispatcher het pakket naar Make.
8. Make publiceert het bericht op LinkedIn en Instagram.
9. De wachtrij wordt gemarkeerd, zodat hetzelfde pakket niet opnieuw wordt verstuurd.

De scheduler draait dagelijks zodat een technische storing de volgende dag opnieuw geprobeerd kan worden. De state zorgt dat er toch maximaal één artikel per week verschijnt.

## Netlify-configuratie

De volgende variabelen zijn nodig:

| Variabele | Status | Waarde |
|---|---:|---|
| `CONTENT_AUTOMATION_SECRET` | ingesteld | Willekeurig intern secret voor het starten van de background function |
| `CONTENT_AGENT_ALLOWED_EMAILS` | ingesteld | Toegang tot de optionele handmatige agent |
| `GITHUB_CONTENT_TOKEN` | nog instellen | Fine-grained GitHub-token met alleen Contents: Read and write voor `Twinpixel-nl/Twinpixel-Reborn` |
| `SOCIAL_WEBHOOK_URL` | nog instellen | Custom webhook-URL van het Make-scenario |
| `GITHUB_CONTENT_REPOSITORY` | optioneel | Standaard: `Twinpixel-nl/Twinpixel-Reborn` |
| `GITHUB_CONTENT_BRANCH` | optioneel | Standaard: `main` |

Gebruik voor het GitHub-token geen bredere rechten dan nodig. Netlify AI Gateway levert automatisch de OpenAI- en Gemini-credentials binnen Functions.

## Make-scenario

Maak één scenario:

1. **Webhooks → Custom webhook**
2. Filter op `event = twinpixel.insight.published`
3. **LinkedIn → Create an organization post**
   - organisatie: TwinPixel
   - tekst: `linkedin.text`
   - link: `article.url`
4. **Instagram for Business → Create a photo post**
   - afbeelding: `article.imageUrl`
   - caption: `instagram.caption`

Gebruik `idempotencyKey` eventueel in een Make Data Store als extra bescherming tegen dubbele posts. De repository markeert een pakket zelf al als `sent_to_automation` zodra Make een succesvolle HTTP-status teruggeeft.

## Inhoudelijke grenzen

De autopilot:

- kiest alleen evergreen onderwerpen binnen Webdesign, SEO, UX en Strategie;
- doet geen actuele claims zonder aangeleverde bron;
- verzint geen cijfers, onderzoeken, klanten of resultaten;
- hergebruikt geen bestaande artikeltitel;
- publiceert maximaal één artikel per week;
- gebruikt alleen vooraf bepaalde interne links;
- genereert visuals zonder tekst, logo's, watermerken of herkenbare personen.

Volledige automatisering betekent dat een incidentele minder sterke formulering alsnog online kan komen. De prompt is daarom bewust conservatief en gericht op evergreen advies.
