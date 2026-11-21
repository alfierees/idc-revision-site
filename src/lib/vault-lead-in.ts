// Vault notes open with lines that only make sense in Obsidian: a repeated
// title and "Part of / Previous / Next" navigation. The site's page head and
// foot do those jobs, so they're removed here, before rendering. The content
// files themselves are never changed.

const NAVIGATION_SEGMENT = /^\**(Part of|Previous topic|Previous|Next topic|Next|Key concepts)\**:/i;
const BUILDS_ON_LINE = /^>\s*\**Builds on\**:/i;
const CALLOUT_START = /^>\s*\[!(\w+)\][-+]?\s*(.*)$/;
const WARNING_TYPES = new Set(["warning", "caution", "danger"]);
const UNTITLED_WARNING = "Check these answers before relying on them";

const normaliseTitle = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Where the note's real sections start: the first `##`, code fence or question marker. */
function leadInEnd(lines: string[]): number {
  const end = lines.findIndex((line) => /^##\s/.test(line) || /^(```|~~~)/.test(line) || line.includes("<!--questions-->"));
  return end === -1 ? lines.length : end;
}

/** Splits on `|`, ignoring the pipe inside `[[Target|alias]]`. */
function splitSegments(text: string): string[] {
  const segments: string[] = [];
  let current = "";
  let wikiLinkDepth = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (text.startsWith("[[", index)) wikiLinkDepth += 1;
    if (text.startsWith("]]", index)) wikiLinkDepth = Math.max(0, wikiLinkDepth - 1);
    if (text[index] === "|" && wikiLinkDepth === 0) {
      segments.push(current.trim());
      current = "";
    } else {
      current += text[index];
    }
  }
  segments.push(current.trim());
  return segments;
}

/** A vault navigation line loses its navigation parts; anything else on it stays. */
function withoutNavigation(line: string): string | null {
  if (!line.startsWith(">")) return line;
  const segments = splitSegments(line.replace(/^>\s?/, ""));
  if (!NAVIGATION_SEGMENT.test(segments[0])) return line;
  const remaining = segments.filter((segment) => !NAVIGATION_SEGMENT.test(segment));
  return remaining.length > 0 ? `> ${remaining.join(" | ")}` : null;
}

function dropLeadingBlanksAndRule(lines: string[]): string[] {
  let start = 0;
  while (start < lines.length && lines[start].trim() === "") start += 1;
  if (/^-{3,}\s*$/.test(lines[start] ?? "")) start += 1;
  return lines.slice(start);
}

export function stripVaultLeadIn(markdown: string, pageTitle: string): string {
  const lines = markdown.split("\n");
  const end = leadInEnd(lines);
  let leadIn = lines.slice(0, end);

  const firstLineIndex = leadIn.findIndex((line) => line.trim() !== "");
  const firstLine = leadIn[firstLineIndex] ?? "";
  if (firstLine.startsWith("# ")) {
    const heading = normaliseTitle(firstLine.slice(2));
    // A longer heading ("Session 2 — Fundamentals") says more than the title, so it stays.
    if (heading && normaliseTitle(pageTitle).includes(heading)) leadIn.splice(firstLineIndex, 1);
  }

  leadIn = leadIn.map(withoutNavigation).filter((line): line is string => line !== null);
  return [...dropLeadingBlanksAndRule(leadIn), ...lines.slice(end)].join("\n");
}

const plainTitle = (title: string) =>
  title
    .replace(/\[\[[^\]|]*\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/[*`]/g, "")
    .trim();

export interface PaperLeadIn {
  mainMarkdown: string;
  aboutMarkdown: string;
  /** Caveats about the answers: these stay on the page, never folded away. */
  warningTitles: string[];
}

/** Moves a paper's provenance notes (before its first section) into "About this paper". */
export function splitPaperLeadIn(markdown: string): PaperLeadIn {
  const lines = markdown.split("\n");
  const end = leadInEnd(lines);
  const kept: string[] = [];
  const aboutBlocks: string[] = [];
  const warningTitles: string[] = [];

  for (let index = 0; index < end; ) {
    if (!lines[index].startsWith(">")) {
      kept.push(lines[index]);
      index += 1;
      continue;
    }
    const blockStart = index;
    while (index < end && lines[index].startsWith(">")) index += 1;
    const block = lines.slice(blockStart, index);
    const callout = block[0].match(CALLOUT_START);
    if (callout) {
      aboutBlocks.push(block.join("\n"));
      if (WARNING_TYPES.has(callout[1].toLowerCase())) warningTitles.push(plainTitle(callout[2]) || UNTITLED_WARNING);
    } else {
      const buildsOn = block.filter((line) => BUILDS_ON_LINE.test(line));
      if (buildsOn.length > 0) aboutBlocks.push(buildsOn.join("\n"));
      kept.push(...block.filter((line) => !BUILDS_ON_LINE.test(line)));
    }
  }

  return {
    mainMarkdown: [...dropLeadingBlanksAndRule(kept), ...lines.slice(end)].join("\n"),
    aboutMarkdown: aboutBlocks.join("\n\n"),
    warningTitles,
  };
}
