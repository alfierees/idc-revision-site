export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const IMG_EXT = "png|jpe?g|gif|svg|webp|heic|heif|avif|bmp";
const OBSIDIAN_IMG = new RegExp(`!\\[\\[([^\\]|]+\\.(?:${IMG_EXT}))(?:\\|[^\\]]*)?\\]\\]`, "gi");
const STANDARD_IMG = new RegExp(`!\\[[^\\]]*\\]\\(([^)\\s]+\\.(?:${IMG_EXT}))(?:\\s+"[^"]*")?\\)`, "gi");

export function extractImageRefs(markdown: string): string[] {
  const out: string[] = [];
  for (const m of markdown.matchAll(OBSIDIAN_IMG)) out.push(m[1]);
  for (const m of markdown.matchAll(STANDARD_IMG)) out.push(m[1]);
  return out;
}
