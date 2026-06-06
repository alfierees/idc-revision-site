export interface SubjectConfig {
  slug: string;          // e.g. "micro"
  title: string;         // e.g. "Micro-Economics"
  vaultPath: string;     // absolute
  sourceDocPath: string; // absolute
}

export const subjects: Record<string, SubjectConfig> = {
  // Filled in Task 11 once paths are verified.
};

export function getSubjectConfig(slug: string): SubjectConfig {
  const cfg = subjects[slug];
  if (!cfg) throw new Error(`Unknown subject: ${slug}. Add it to scripts/ingest/config.ts.`);
  return cfg;
}
