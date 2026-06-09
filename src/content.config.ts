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

const lectures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lectures" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    tags: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    week: z.number().optional(),
    lecture: z.string().optional(),
    instructor: z.string().optional(),
    in_scope: z.boolean().default(true),
  }),
});

const question = z.object({
  id: z.string(),
  text: z.string(),
  solution: z.string(),
  related_terms: z.array(z.string()).default([]),
  source_doc_page: z.number().optional(),
});

const problemSets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/problem-sets" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    source_doc: z.string().optional(),
    tags: z.array(z.string()).default([]),
    questions: z.array(question),
    ai_drafted: z.boolean().default(false),
  }),
});

const pastPapers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/past-papers" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    type: z.string().optional(),
    exam: z.string().optional(),
    dataset: z.string().optional(),
    instructor: z.string().optional(),
    status: z.string().optional(),
    course: z.string().optional(),
    semester: z.number().optional(),
    year: z.number().optional(),
    week: z.number().optional(),
    source_doc: z.string().optional(),
    tags: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    in_scope: z.boolean().default(true),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
  }),
});

export const collections = {
  subjects,
  terms,
  recipes,
  lectures,
  "problem-sets": problemSets,
  "past-papers": pastPapers,
  glossary,
};
