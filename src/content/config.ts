import { defineCollection, z } from "astro:content";

export const languages = z.enum(["nl", "en"]);

const pages = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160).optional(),
    lang: languages.default("nl"),
    ogImage: z.string().optional(),
    slug: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: languages,
    description: z.string().max(160).optional(),
    ogImage: z.string().optional(),
    slug: z.string().optional(), // file-based slug toegestaan
  }),
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    sector: z.string().optional(),
    date: z.coerce.date(),
    cover: z.string().optional(), // hero image
    results: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]), // image paths
    lang: languages.default("nl"),
  }),
});

export const collections = { pages, posts, cases };
