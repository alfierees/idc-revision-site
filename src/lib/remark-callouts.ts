import { visit } from "unist-util-visit";
import { parse as parseSvg } from "svg-parser";
import { defaultConfig } from "remark-callouts";
import type { Root, Blockquote, PhrasingContent, BlockContent, Paragraph } from "mdast";

/**
 * Local replacement for the remark-callouts transformer (its default config —
 * type names, aliases, icons — is still imported from the package).
 *
 * Why not the upstream transformer: it regex-matches the callout title against
 * only the FIRST text node of the first paragraph. Any inline node in the
 * title line — `$math$`, `**bold**`, `[[wikilink]]`, `` `code` `` — truncates
 * the title at that point, silently drops the node, and shoves the rest of the
 * line into the body. With ~70 such titles in the content this mangled a lot
 * of Answer/warning cards.
 *
 * This version keeps every inline node of the title line in the title (the
 * line ends at the first newline in a text node), and puts the resolved type
 * class on the blockquote itself (`.callout.warning`) so the per-type
 * `--callout-color` rules in globals.css actually match — upstream only put
 * the type on `.callout-title`.
 */

interface CalloutType {
  keyword: string;
  color: string;
  svg: string;
}

const MARKER = /^\[!([^\]]+)\][+-]?[ \t]?/;

function resolveType(keyword: string): { cfg: CalloutType; canonical: string } {
  const types = defaultConfig.types as Record<string, CalloutType | string>;
  let entry = types[keyword];
  if (typeof entry === "string") entry = types[entry];
  if (entry && typeof entry !== "string") return { cfg: entry, canonical: entry.keyword };
  const note = types.note as CalloutType;
  return { cfg: note, canonical: "note" };
}

/** Split the first paragraph at the end of the marker line: title inlines vs body inlines. */
function splitTitleLine(paragraph: Paragraph, markerLen: number): {
  title: PhrasingContent[];
  body: PhrasingContent[];
} {
  const title: PhrasingContent[] = [];
  const body: PhrasingContent[] = [];
  let inBody = false;
  paragraph.children.forEach((child, i) => {
    if (inBody) {
      body.push(child);
      return;
    }
    if (child.type === "break") {
      inBody = true;
      return;
    }
    if (child.type === "text") {
      const value = i === 0 ? child.value.slice(markerLen) : child.value;
      const nl = value.indexOf("\n");
      if (nl === -1) {
        if (value) title.push({ type: "text", value });
        return;
      }
      const head = value.slice(0, nl);
      const tail = value.slice(nl + 1);
      if (head) title.push({ type: "text", value: head });
      if (tail) body.push({ type: "text", value: tail });
      inBody = true;
      return;
    }
    title.push(child);
  });
  // trim leading/trailing whitespace-only text at the title edges
  while (title.length && title[0].type === "text" && !title[0].value.trim()) title.shift();
  while (title.length) {
    const last = title[title.length - 1];
    if (last.type === "text" && !last.value.trim()) title.pop();
    else break;
  }
  return { title, body };
}

export function remarkCalloutsLocal() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const first = node.children[0];
      if (!first || first.type !== "paragraph") return;
      const lead = first.children[0];
      if (!lead || lead.type !== "text") return;
      const m = MARKER.exec(lead.value);
      if (!m) return;

      const keyword = m[1].toLowerCase();
      const { cfg, canonical } = resolveType(keyword);
      const { title, body } = splitTitleLine(first, m[0].length);

      if (title.length === 0) {
        title.push({ type: "text", value: keyword.charAt(0).toUpperCase() + keyword.slice(1) });
      }

      const icon = {
        type: "calloutIcon",
        data: {
          hName: "span",
          hProperties: { className: ["callout-icon"] },
          hChildren: (parseSvg(cfg.svg) as { children: unknown[] }).children,
        },
        children: [],
      };
      const titleNode = {
        type: "calloutTitle",
        data: { hName: "div", hProperties: { className: ["callout-title", canonical] } },
        children: [icon, { type: "strong", children: title }],
      };

      const contentChildren: BlockContent[] = [];
      if (body.length) contentChildren.push({ type: "paragraph", children: body });
      contentChildren.push(...(node.children.slice(1) as BlockContent[]));

      node.children = [titleNode as never];
      if (contentChildren.length) {
        node.children.push({
          type: "calloutContent",
          data: { hName: "div", hProperties: { className: ["callout-content"] } },
          children: contentChildren,
        } as never);
      }
      node.data = { ...node.data, hProperties: { className: ["callout", canonical] } };
    });
  };
}
