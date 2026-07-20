import {
  HttpError,
  handleError,
  json,
  requireEditor,
  slugify,
} from "./_shared/content-agent.mjs";

const categories = ["Webdesign", "SEO", "UX", "Strategie"];

const schema = {
  type: "object",
  additionalProperties: false,
  required: [
    "title",
    "description",
    "slug",
    "category",
    "tags",
    "readingTime",
    "bodyMarkdown",
    "linkedInPost",
    "instagramCaption",
    "imageAlt",
    "visualBrief"
  ],
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    slug: { type: "string" },
    category: { type: "string", enum: categories },
    tags: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 8 },
    readingTime: { type: "string" },
    bodyMarkdown: { type: "string" },
    linkedInPost: { type: "string" },
    instagramCaption: { type: "string" },
    imageAlt: { type: "string" },
    visualBrief: { type: "string" }
  }
};

function systemPrompt() {
  return `Je bent de Nederlandstalige contentstrateeg van TwinPixel, een technisch webbureau uit Wageningen van UX-designer Emma en technical lead Twan.

TwinPixel bouwt snelle, onderhoudbare websites en webapps voor mkb en organisaties. De kern is: heldere positionering, logische UX, conversiegerichte structuur, sterke performance en technische SEO. Klanten werken direct met de makers.

Schrijf menselijk, deskundig en concreet. Gebruik korte alinea's en informatieve tussenkoppen. Vermijd AI-clichés, opgeblazen claims, holle marketingtaal, verzonnen onderzoeken, verzonnen cijfers en overmatig gebruik van dubbele punten. Schrijf geen zoekwoordspam.

De blog:
- is 900 tot 1400 woorden;
- beantwoordt de zoekintentie snel;
- gebruikt Markdown zonder H1 (de titel wordt apart gerenderd);
- bevat praktische voorbeelden en scherpe keuzes;
- linkt alleen waar logisch naar /expertise, /cases, /contact, /insights of /website-laten-maken-wageningen;
- eindigt met een rustige, relevante vervolgstap;
- gebruikt aangeleverde bronnen als bron van waarheid en benoemt onzekerheid wanneer bewijs ontbreekt.

De LinkedIn-post is zelfstandig leesbaar, ongeveer 120-220 woorden en geschikt voor de TwinPixel-bedrijfspagina. Geen losse linkdump en maximaal drie relevante hashtags.
De Instagram-caption is compacter en menselijk, heeft een duidelijke eerste regel, maximaal vijf hashtags en verwijst naar de link in bio. Kopieer niet simpelweg de LinkedIn-post.
Geef ook een sobere visual brief voor een vierkante social visual zonder tekst in de afbeelding.`;
}

export default async (req, context) => {
  try {
    if (req.method !== "POST") throw new HttpError(405, "Alleen POST is toegestaan.");
    await requireEditor(req, context);

    const input = await req.json();
    if (!String(input.topic || "").trim()) {
      throw new HttpError(400, "Vul een onderwerp in.");
    }

    const baseUrl = Netlify.env.get("OPENAI_BASE_URL");
    const apiKey = Netlify.env.get("OPENAI_API_KEY");
    if (!baseUrl || !apiKey) {
      throw new HttpError(503, "Schakel Netlify AI Gateway in voor deze site.");
    }

    const userPrompt = [
      `Onderwerp: ${input.topic}`,
      `Primaire zoekterm: ${input.primaryKeyword || "zelf bepalen"}`,
      `Doelgroep: ${input.audience || "mkb en organisaties die een betere website nodig hebben"}`,
      `Doel: ${input.objective || "expertise tonen en relevante aanvragen ondersteunen"}`,
      `Voorkeurscategorie: ${categories.includes(input.category) ? input.category : "zelf bepalen"}`,
      `Bronnen en notities:\n${input.sourceNotes || "Geen externe bronnen aangeleverd. Maak dan geen feitelijke claims die broncontrole vereisen."}`,
    ].join("\n\n");

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/v1/chat/completions`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5.6-terra",
        messages: [
          { role: "system", content: systemPrompt() },
          { role: "user", content: userPrompt },
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "twinpixel_content_package",
            strict: true,
            schema,
          },
        },
      }),
    });

    if (!response.ok) {
      throw new HttpError(502, `AI Gateway: ${(await response.text()).slice(0, 300)}`);
    }

    const completion = await response.json();
    const raw = completion.choices?.[0]?.message?.content;
    if (!raw) throw new HttpError(502, "De agent gaf geen bruikbaar resultaat terug.");

    const pkg = JSON.parse(raw);
    pkg.slug = slugify(pkg.slug || pkg.title);
    return json({ package: pkg });
  } catch (error) {
    return handleError(error);
  }
};

export const config = {
  path: "/api/content-agent/generate",
  method: "POST",
};
