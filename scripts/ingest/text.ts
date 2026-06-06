export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const OBSIDIAN_IMG = /!\[\[([^\]]+\.(?:png|jpe?g|gif|svg|webp))\]\]/gi;
const STANDARD_IMG = /!\[[^\]]*\]\(([^)]+\.(?:png|jpe?g|gif|svg|webp))\)/gi;

export function extractImageRefs(markdown: string): string[] {
  const out: string[] = [];
  for (const m of markdown.matchAll(OBSIDIAN_IMG)) out.push(m[1]);
  for (const m of markdown.matchAll(STANDARD_IMG)) out.push(m[1]);
  return out;
}
