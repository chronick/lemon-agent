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

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './guides' }),
  schema: z.object({
    title: z.string(),
    step: z.number(),
    status: z.enum(['draft', 'published']),
    updated: z.coerce.date(),
    description: z.string(),
  }),
});

const start = defineCollection({
  loader: glob({ pattern: '*.md', base: './start' }),
  schema: z.object({
    title: z.string(),
    step: z.number(),
    minutes: z.number(),
    description: z.string(),
  }),
});

const wings = defineCollection({
  loader: glob({ pattern: '*.md', base: './wings' }),
  schema: z.object({
    title: z.string(),
    wing: z.string(),
    citrus: z.string(),
    status: z.enum(['scoping', 'v0', 'published']),
    updated: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { lists, guides, start, wings };
