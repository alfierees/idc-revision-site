export interface SubjectConfig {
  slug: string;          // e.g. "micro"
  title: string;         // e.g. "Micro-Economics"
  vaultPath: string;     // absolute
  sourceDocPath: string; // absolute

  // Optional vault folder names — default to micro's conventions when omitted.
  lecturesDir?: string;          // default "Lectures"
  vaultSolutionsDir?: string;    // default "Assignments" (the vault folder that holds worked-up solution notes)
  requireSolutionKeyword?: boolean; // default true — when false, every .md in vaultSolutionsDir is a candidate, not just files matching /solution|answer/i

  // Optional source-doc folder name — default "Assignments". Sibling solutions folder lives at "<sourceDocPath>/Assignment solutions".
  assignmentsDir?: string;       // default "Assignments"

  // Optional problem-set slug prefix. When set, the slug becomes "<prefix>-<exerciseNum>"
  // (e.g. "ps-1") instead of the raw slugified filename. Falls back to the raw slug when
  // no exercise number can be extracted.
  problemSetSlugPrefix?: string;
}

export const subjects: Record<string, SubjectConfig> = {
  micro: {
    slug: "micro",
    title: "Micro-Economics",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Micro-Economics",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Micro-Economics",
  },
  econometrics: {
    slug: "econometrics",
    title: "Econometrics",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Econometrics",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Econometrics ",
    lecturesDir: "Lecture notes",
    vaultSolutionsDir: "Problem Sets",
    requireSolutionKeyword: false,
    problemSetSlugPrefix: "ps",
  },
  accounting: {
    slug: "accounting",
    title: "Accounting",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Accounting",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Accounting",
    lecturesDir: "Lectures",
    vaultSolutionsDir: "Problem Sets",
    requireSolutionKeyword: false,
    assignmentsDir: "Problem Sets",
    problemSetSlugPrefix: "assignment",
  },
  "machine-learning": {
    slug: "machine-learning",
    title: "Machine Learning",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Machine Learning",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Machine learning",
    lecturesDir: "Lecture notes",
  },
  // The Data Science course covers the same ML curriculum (EDA, classification,
  // regression, clustering/PCA); its lectures + registry terms are ingested into
  // the SAME `machine-learning` subject. Run `cli.ts data-science` after
  // `cli.ts machine-learning` — it writes into machine-learning/ via the shared slug.
  "data-science": {
    slug: "machine-learning",
    title: "Machine Learning",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Data Science",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Data Science",
    lecturesDir: "Lectures",
  },
  "macro-economics": {
    slug: "macro-economics",
    title: "Macro-Economics",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Macro-Economics",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Macro-Economics",
    lecturesDir: "Lectures",
    vaultSolutionsDir: "Problem Sets",
    requireSolutionKeyword: false,
    assignmentsDir: "Problem Sets",
    problemSetSlugPrefix: "ps",
  },
  // Year 2 Semester 1 (first course of the whole-degree expansion). The six
  // lecture decks are cumulative, so the vault has one note per new slide range.
  // PS sources sit in "Problem sets"; worked solutions are vault notes.
  "micro-ii": {
    slug: "micro-ii",
    title: "Micro-Economics II",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 1/Micro-Economics II",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 1/Micro econ",
    lecturesDir: "Lecture notes",
    vaultSolutionsDir: "Problem Sets",
    requireSolutionKeyword: false,
    assignmentsDir: "Problem sets",
    problemSetSlugPrefix: "ps",
  },
  // Year 2 Semester 1. No problem sets: the source "Problem sets" folder only
  // holds misfiled Micro II sheets, so assignmentsDir is left at the default
  // ("Assignments"), which doesn't exist here and keeps them out of the scan.
  "macro-ii": {
    slug: "macro-ii",
    title: "Macro-Economics II",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 1/Macro-Economics II",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 1/Macro-econ",
    lecturesDir: "Lecture notes",
  },
  // Qualitative subject: hand-ported (readings → lectures, concepts+acronyms →
  // glossary, cram sheet → exam-prep). No problem sets. `lecturesDir: "Readings"`
  // maps the reading notes to the lectures collection. Visual lecture decks and
  // worked past papers are added in later passes.
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Digital Marketing",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Digital marketing",
    lecturesDir: "Readings",
  },
};

export function getSubjectConfig(slug: string): SubjectConfig {
  const cfg = subjects[slug];
  if (!cfg) throw new Error(`Unknown subject: ${slug}. Add it to scripts/ingest/config.ts.`);
  return cfg;
}
