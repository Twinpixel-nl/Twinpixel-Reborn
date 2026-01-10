import { defineCollection, z } from "astro:content";

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),

    // SEO / social
    image: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),

    // content structuur
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(), // bijv "6 min"
  }),
});

export const collections = {
  insights,
};
