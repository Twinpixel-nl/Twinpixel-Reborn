import { defineCollection, z } from "astro:content";

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    // Artikelintro en optionele, specifieke zoekresultaatmetadata
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    primaryKeyword: z.string().optional(),
    searchIntent: z
      .enum(["informatief", "commercieel", "lokaal", "transactioneel"])
      .optional(),

    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),

    // Hoofdafbeelding in het artikel (optioneel)
    image: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),

    // OG/social preview afbeelding (optioneel)
    ogImage: z.string().optional(),

    // Strakke categorieën (matcht je Netlify CMS select)
    category: z
      .enum(["Webdesign", "SEO", "UX", "Strategie"])
      .optional(),

    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(), // bijv "6 min" / "6-8 min"
  }),
});

export const collections = {
  insights,
};
