import Fuse from "fuse.js";
import type { IndexChunk } from "./types";

export function retrieve(index: IndexChunk[], query: string, k = 8): IndexChunk[] {
  if (!query.trim()) return [];
  const fuse = new Fuse(index, {
    keys: [
      { name: "title", weight: 3 },
      { name: "concepts", weight: 2 },
      { name: "text", weight: 1 },
    ],
    // 0.6 (looser than the plan's 0.4): multi-concept queries like
    // "adverse selection and moral hazard" must surface BOTH terms, which
    // 0.4 was too strict to do. Tuned against the retrieval tests.
    threshold: 0.6,
    ignoreLocation: true,
    minMatchCharLength: 3,
  });
  return fuse.search(query, { limit: k }).map((r) => r.item);
}
