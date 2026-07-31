import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lists = defineCollection({
  loader: glob({ pattern: '*.md', base: './lists' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    surface: z.string(),
    arm: z.enum(['taste', 'verification']),
    entries: z.number(),
    prefix: z.string(),
    status: z.enum(['draft', 'published']),
    updated: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { lists };
