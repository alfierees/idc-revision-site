import { existsSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

export { slugify } from "../../src/lib/slugify";

const IMG_EXT = "png|jpe?g|gif|svg|webp|heic|heif|avif|bmp";
const OBSIDIAN_IMG = new RegExp(`!\\[\\[([^\\]|]+\\.(?:${IMG_EXT}))(?:\\|[^\\]]*)?\\]\\]`, "gi");
const STANDARD_IMG = new RegExp(`!\\[[^\\]]*\\]\\(([^)\\s]+\\.(?:${IMG_EXT}))(?:\\s+"[^"]*")?\\)`, "gi");

export function extractImageRefs(markdown: string): string[] {
  const out: string[] = [];
  for (const m of markdown.matchAll(OBSIDIAN_IMG)) out.push(m[1]);
  for (const m of markdown.matchAll(STANDARD_IMG)) out.push(m[1]);
  return out;
}

/**
 * Resolve an Obsidian image reference to an absolute source path. Vaults store
 * attachments in different places — a root `Attachments/` (micro/econometrics),
 * or per-folder `Lectures/attachments/` and `Problem Sets/attachments/` (macro).
 * Refs come either bare (`l1_business_cycle.png`) or path-prefixed
 * (`attachments/q2_labor_share.png`). Try the common locations, then fall back
 * to a shallow recursive search for the basename. Returns null if not found.
 */
export function resolveAttachment(vaultPath: string, imgRef: string): string | null {
  if (imgRef.startsWith("/")) return existsSync(imgRef) ? imgRef : null;
  const base = basename(imgRef);
  const candidates = [
    join(vaultPath, imgRef),
    join(vaultPath, "Attachments", base),
    join(vaultPath, "attachments", base),
    join(vaultPath, "Lectures", "attachments", base),
    join(vaultPath, "Problem Sets", "attachments", base),
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  return walkFind(vaultPath, base, 3);
}

/** Depth-limited DFS for a file named `target` under `dir`. */
function walkFind(dir: string, target: string, depth: number): string | null {
  if (depth < 0) return null;
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const e of entries) {
    if (e.isFile() && e.name === target) return join(dir, e.name);
  }
  for (const e of entries) {
    if (e.isDirectory() && !e.name.startsWith(".")) {
      const found = walkFind(join(dir, e.name), target, depth - 1);
      if (found) return found;
    }
  }
  return null;
}
