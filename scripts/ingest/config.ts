export interface SubjectConfig {
  slug: string;          // e.g. "micro"
  title: string;         // e.g. "Micro-Economics"
  vaultPath: string;     // absolute
  sourceDocPath: string; // absolute
}

export const subjects: Record<string, SubjectConfig> = {
  micro: {
    slug: "micro",
    title: "Micro-Economics",
    vaultPath: "/Users/alfierees/Documents/Obsidian/IDC notes/Year 2/Semester 2/Micro-Economics",
    sourceDocPath: "/Users/alfierees/Desktop/IDC/IDC subjects/Year 2/Semester 2/Micro-Economics",
  },
};

export function getSubjectConfig(slug: string): SubjectConfig {
  const cfg = subjects[slug];
  if (!cfg) throw new Error(`Unknown subject: ${slug}. Add it to scripts/ingest/config.ts.`);
  return cfg;
}
