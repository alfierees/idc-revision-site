/**
 * Drop the vault's navigation header from a note body before rendering.
 *
 * Vault notes open with a metadata blockquote under the H1:
 *
 *   > Part of: [[Course]]
 *   > Key concepts: [[A]], [[B]], …
 *   > Builds on: [[Lec_01-…]]
 *   > Previous: [[…]] | Next: […]
 *
 * On the site that's a wall of links before any content (the same links are in
 * "Related notes" at the bottom and in the sidebar). The note's own `# Title`
 * is dropped too: the page already prints the title. Lines with those keys are
 * removed; anything else in the same blockquote (a citation, a "Lecture 10 —
 * Dr X" line) is kept. Only the header region (before the first `##`) is touched.
 */
const META_KEY =
  /^>\s*(?:\*\*|__)?(?:part of|key (?:new )?concepts|builds on|previous(?: topic| lecture)?|next(?: topic| lecture)?|related(?: notes| lectures| problem sets)?|prerequisites|see also|tags|course)(?:\*\*|__)?\s*:/i;

export function stripNoteMeta(md: string): string {
  const h2 = md.search(/^##\s/m);
  const head = h2 === -1 ? md : md.slice(0, h2);
  const rest = h2 === -1 ? "" : md.slice(h2);
  const lines = head.split("\n");
  const out: string[] = [];
  let droppedH1 = false;
  for (const line of lines) {
    if (!droppedH1 && /^#\s+\S/.test(line)) {
      droppedH1 = true;
      continue;
    }
    if (META_KEY.test(line)) continue;
    // A "Previous: … | Next: …" line may start with a different key; also drop bare "> #tag #tag" lines.
    if (/^>\s*(?:#[\w-]+\s*)+$/.test(line)) continue;
    out.push(line);
  }
  // Remove blockquote lines left empty (">") that are now orphaned at a quote's edges.
  const cleaned = out.join("\n").replace(/(^|\n)(?:>\s*\n)+(?=\n|$)/g, "$1");
  return cleaned + rest;
}
