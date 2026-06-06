export type ContentKind = "term" | "recipe" | "problem-set";

export interface PendingTerm {
  kind: "term";
  slug: string;
  title: string;
  registryDefinition: string | null;
  sourceVaultPath: string; // registry file
  sourceFolder: string;    // e.g. "micro-economics"
}

export interface PendingRecipe {
  kind: "recipe";
  slug: string;
  title: string;
  sourceVaultPath: string; // lecture note
  sourceFolder: string;
  detectedStepCount: number;
}

export interface PendingProblemSet {
  kind: "problem-set";
  slug: string;
  title: string;
  sourceDocPath: string; // absolute, .pdf or .docx
  sourceDocFilename: string; // e.g. "EX-1 - Micro 3.docx"
  vaultSolutionPath: string | null; // absolute .md path under <vaultPath>/Assignments, preferred over solutionDocPath
  solutionDocPath: string | null; // absolute, .pdf or .docx fallback from sibling "Assignment solutions" folder
}

export type PendingItem = PendingTerm | PendingRecipe | PendingProblemSet;

export interface ImageOp {
  from: string; // absolute vault path
  to: string;   // absolute public/images path
}

export interface DocOp {
  from: string; // absolute source path
  to: string;   // absolute site/public/papers path (preserves original extension)
}

export interface ScanResult {
  subject: string;
  pending: PendingItem[];
  imageOps: ImageOp[];
  docOps: DocOp[];
}
