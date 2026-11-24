import type { Root, Parent, Paragraph, PhrasingContent, InlineMath, Text } from "mdast";
import type { VFile } from "vfile";

/**
 * remark plugin (after remark-math): a `$$…$$` that sits alone on its line is
 * display math, wherever that line is.
 *
 * Obsidian writes display math on one line (`$$x = 1$$`). remark-math only
 * reads `$$` as a display block when the delimiters are on their own lines, so
 * a one-line `$$…$$` becomes *inline* math inside the surrounding paragraph:
 * left-aligned, text-sized, `\frac` squashed. The text pre-passes
 * (`promoteDisplayMath`, `promoteQuotedDisplayMath`) fix this at column 0 and
 * inside callouts, but deliberately leave lines indented under a list item
 * alone, since rewriting indented lines can break the list.
 *
 * Working on the syntax tree sidesteps container prefixes entirely: find an
 * `inlineMath` node whose source used `$$` delimiters and that starts and ends
 * its line, and lift it out of its paragraph into a display `math` node,
 * splitting the paragraph around it. This covers list items and is a safety
 * net for anything the pre-passes miss. A `$$…$$` in the middle of a sentence
 * is left inline.
 */
export function remarkLineDisplayMath() {
  return (tree: Root, file: VFile) => {
    const source = String(file.value ?? "");
    const isDoubleDollar = (node: InlineMath) => {
      const start = node.position?.start.offset;
      return start !== undefined && source.startsWith("$$", start);
    };
    walk(tree, isDoubleDollar);
  };
}

type IsDoubleDollar = (node: InlineMath) => boolean;

function walk(parent: Parent, isDoubleDollar: IsDoubleDollar): void {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (child.type === "paragraph") {
      const replacement = splitParagraph(child, isDoubleDollar);
      if (replacement) {
        parent.children.splice(i, 1, ...(replacement as never[]));
        i += replacement.length - 1;
      }
    } else if ("children" in child) {
      walk(child as Parent, isDoubleDollar);
    }
  }
}

/** Is this the start of a line: paragraph start, after a hard break, or after a text ending in a newline? */
function startsLine(prev: PhrasingContent | undefined): boolean {
  if (!prev) return true;
  if (prev.type === "break") return true;
  return prev.type === "text" && /\n[ \t]*$/.test(prev.value);
}

/** Does the line end here: paragraph end, a hard break, or a text starting with a newline? */
function endsLine(next: PhrasingContent | undefined): boolean {
  if (!next) return true;
  if (next.type === "break") return true;
  return next.type === "text" && /^[ \t]*\n/.test(next.value);
}

function displayMath(value: string) {
  // Same shape mdast-util-math gives a fenced `$$` block, so rehype-katex and
  // the dollar-sentinel restore treat it identically.
  return {
    type: "math",
    value,
    data: {
      hName: "pre",
      hChildren: [
        {
          type: "element",
          tagName: "code",
          properties: { className: ["language-math", "math-display"] },
          children: [{ type: "text", value }],
        },
      ],
    },
  };
}

function splitParagraph(paragraph: Paragraph, isDoubleDollar: IsDoubleDollar): unknown[] | null {
  const kids = paragraph.children;
  const hits = kids
    .map((node, i) => ({ node, i }))
    .filter(
      ({ node, i }) =>
        node.type === "inlineMath" && isDoubleDollar(node) && startsLine(kids[i - 1]) && endsLine(kids[i + 1]),
    );
  if (hits.length === 0) return null;

  const out: unknown[] = [];
  let run: PhrasingContent[] = [];
  const flush = () => {
    // Drop the line break (and any hard break) left at the cut edges.
    while (run.length && run[0].type === "break") run.shift();
    while (run.length && run[run.length - 1].type === "break") run.pop();
    if (run.length && run[0].type === "text") run[0] = { ...run[0], value: run[0].value.replace(/^[ \t]*\n/, "") } as Text;
    const last = run.length - 1;
    if (last >= 0 && run[last].type === "text")
      run[last] = { ...run[last], value: (run[last] as Text).value.replace(/\n[ \t]*$/, "") } as Text;
    run = run.filter((n) => n.type !== "text" || n.value !== "");
    const hasContent = run.some((n) => n.type !== "text" || n.value.trim() !== "");
    if (hasContent) out.push({ type: "paragraph", children: run });
    run = [];
  };

  const hitIndexes = new Set(hits.map((h) => h.i));
  kids.forEach((node, i) => {
    if (hitIndexes.has(i)) {
      flush();
      out.push(displayMath((node as InlineMath).value));
    } else {
      run.push(node);
    }
  });
  flush();
  return out;
}
