import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const subjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/subjects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    exam_date: z.string().optional(),
    must_revise: z.array(z.string()).default([]),
    placeholder: z.boolean().default(false),
  }),
});

const terms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/terms" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    aliases: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    source_folder: z.string().optional(),
    in_scope: z.boolean().default(true),
    ai_drafted: z.boolean().default(false),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    related_terms: z.array(z.string()).default([]),
    source_folder: z.string().optional(),
    in_scope: z.boolean().default(true),
    ai_drafted: z.boolean().default(false),
  }),
});

const question = z.object({
  id: z.string(),
  text: z.string(),
  solution: z.string(),
  related_terms: z.array(z.string()).default([]),
});

const problemSets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/problem-sets" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    source_pdf: z.string().optional(),
    questions: z.array(question),
    ai_drafted: z.boolean().default(false),
  }),
});

const pastPapers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/past-papers" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    year: z.number().optional(),
    source_pdf: z.string().optional(),
    questions: z.array(question),
    ai_drafted: z.boolean().default(false),
  }),
});

export const collections = {
  subjects,
  terms,
  recipes,
  "problem-sets": problemSets,
  "past-papers": pastPapers,
};
