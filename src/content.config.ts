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
    // Vault lecture frontmatter uses `lecture:` as either a number (e.g. `2`)
    // or a descriptive string — coerce so verbatim copies validate either way.
    lecture: z.coerce.string().optional(),
    instructor: z.string().optional(),
    in_scope: z.boolean().default(true),
  }),
});

const question = z.object({
  id: z.string(),
  // Optional display label for the card header + sidebar TOC. Problem sets omit
  // it (the bold lead-in inside `text` carries the title); past papers set it.
  title: z.string().optional(),
  text: z.string(),
  solution: z.string(),
  // When present, the question renders as an interactive multiple-choice block:
  // each option is a clickable box; the first click commits and reveals every
  // option's verdict + per-option `why`, with the full derivation (`solution`)
  // behind a "Show working" toggle. Absent → the plain "Show solution" toggle.
  options: z
    .array(
      z.object({
        label: z.string(),
        text: z.string(),
        correct: z.boolean().default(false),
        why: z.string().default(""),
      }),
    )
    .optional(),
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
    // When present, the paper renders as per-question cards (question shown,
    // worked solution behind a "Show solution" toggle) instead of a flat body.
    questions: z.array(question).optional(),
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

// Exam-prep references: cross-lecture revision material (formula/cheat sheets,
// question playbooks) that doesn't fit a single lecture/term/recipe. Long-form,
// rendered like a past paper. `pinned`/`order` float the headline docs to the
// top of the section index.
const examPrep = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/exam-prep" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    type: z.string().optional(),
    description: z.string().optional(),
    course: z.string().optional(),
    instructor: z.string().optional(),
    semester: z.number().optional(),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    source_doc: z.string().optional(),
    // When set (a path under /public, e.g. "/papers/micro/foo.pdf"), the doc
    // renders as an embedded PDF viewer instead of a markdown body.
    pdf: z.string().optional(),
    pinned: z.boolean().default(false),
    order: z.number().optional(),
    in_scope: z.boolean().default(true),
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
  "exam-prep": examPrep,
};
