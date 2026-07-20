import { HttpError, slugify } from "./content-agent.mjs";

export const categories = ["Webdesign", "SEO", "UX", "Strategie"];

const schema = {
  type: "object",
  additionalProperties: false,
  required: [
    "title", "description", "slug", "category", "tags", "readingTime",
    "bodyMarkdown", "linkedInPost", "instagramCaption", "imageAlt", "visualBrief"
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
  return `Je bent de autonome Nederlandstalige contentstrateeg van TwinPixel, een technisch webbureau uit Wageningen van UX-designer Emma en technical lead Twan.

TwinPixel bouwt snelle, onderhoudbare websites en webapps voor mkb en organisaties. De kern is: heldere positionering, logische UX, conversiegerichte structuur, sterke performance en technische SEO. Klanten werken direct met de makers.

Schrijf menselijk, deskundig en concreet. Gebruik korte alinea's en informatieve tussenkoppen. Vermijd AI-clichés, opgeblazen claims, holle marketingtaal, verzonnen onderzoeken, verzonnen cijfers, actualiteitsclaims zonder bron en zoekwoordspam.

Kies bij autonoom gebruik alleen een evergreen onderwerp dat duidelijk past bij de diensten van TwinPixel en nog niet in de lijst met bestaande artikelen staat. Wissel Webdesign, SEO, UX en Strategie af. Schrijf geen nieuwsartikel en doe niet alsof je actuele zoekresultaten hebt bekeken.

De blog:
- is 900 tot 1400 woorden;
- beantwoordt de zoekintentie snel;
- gebruikt Markdown zonder H1;
- bevat praktische voorbeelden en scherpe keuzes;
- linkt alleen waar logisch naar /expertise, /cases, /contact, /insights of /website-laten-maken-wageningen;
- eindigt met een rustige, relevante vervolgstap;
- presenteert aannames nooit als feiten.

De LinkedIn-post is zelfstandig leesbaar, 120-220 woorden en geschikt voor de TwinPixel-bedrijfspagina. Maximaal drie relevante hashtags.
De Instagram-caption is compacter, heeft een sterke eerste regel, maximaal vijf hashtags en verwijst naar de link in bio.
Geef een sobere visual brief voor een vierkante afbeelding zonder tekst, logo's of herkenbare personen.`;
}

export async function generateContentPackage(input = {}) {
  const baseUrl = Netlify.env.get("OPENAI_BASE_URL");
  const apiKey = Netlify.env.get("OPENAI_API_KEY");
  if (!baseUrl || !apiKey) {
    throw new HttpError(503, "Netlify AI Gateway is niet beschikbaar.");
  }

  const autonomous = Boolean(input.autonomous);
  const userPrompt = autonomous
    ? [
        "Werk volledig autonoom en kies zelf het beste nieuwe onderwerp.",
        "Doelgroep: mkb en organisaties die een professionele website of webapp nodig hebben.",
        "Doel: organische vindbaarheid, expertise en relevante aanvragen opbouwen.",
        `Bestaande artikelen die je niet mag herhalen:\n${(input.existingTitles || []).join("\n") || "Geen"}`,
        "Kies een concrete long-tail zoekintentie. Vermijd brede onderwerpen als 'wat is SEO'.",
      ].join("\n\n")
    : [
        `Onderwerp: ${input.topic}`,
        `Primaire zoekterm: ${input.primaryKeyword || "zelf bepalen"}`,
        `Doelgroep: ${input.audience || "mkb en organisaties die een betere website nodig hebben"}`,
        `Doel: ${input.objective || "expertise tonen en relevante aanvragen ondersteunen"}`,
        `Voorkeurscategorie: ${categories.includes(input.category) ? input.category : "zelf bepalen"}`,
        `Bronnen en notities:\n${input.sourceNotes || "Geen externe bronnen aangeleverd. Maak geen bronafhankelijke feitelijke claims."}`,
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
  if (!raw) throw new HttpError(502, "De contentagent gaf geen bruikbaar resultaat terug.");

  const pkg = JSON.parse(raw);
  pkg.slug = slugify(pkg.slug || pkg.title);
  return pkg;
}
