import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    excerpt: z.string().max(160),
    heroImage: image().optional(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  blog: blogCollection
};
