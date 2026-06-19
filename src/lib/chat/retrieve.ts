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
    threshold: 0.6,
    ignoreLocation: true,
    minMatchCharLength: 3,
  });
  return fuse.search(query, { limit: k }).map((r) => r.item);
}
