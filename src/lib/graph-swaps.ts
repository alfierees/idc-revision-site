// Replaces static chart images with interactive sketch graphs at render time.
//
// The vault is the source of truth and past papers are re-copied (overwritten)
// on every ingest, so graphs are NOT hand-inserted into content files. Instead,
// this map says "wherever /images/<subject>/<file> appears, draw this graph
// instead". The swap survives re-ingest and applies on every page that embeds
// the image (lectures, problem sets, past papers, dictionary terms).
//
// Keys are "<subject>/<file>"; values are the ```graph block config
// (`type` picks the component in graphs/registry.ts, other keys are props).

import type { Root, Element, Parent } from "hast";

export type GraphConfig = Record<string, string | number>;

export const GRAPH_SWAPS: Record<string, GraphConfig> = {};

function graphBlock(config: GraphConfig): Element {
  const configText = Object.entries(config).map(([key, value]) => `${key}: ${value}`).join("\n");
  return {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [{ type: "element", tagName: "code", properties: { className: ["language-graph"] }, children: [{ type: "text", value: configText }] }],
  };
}

const imageKey = (src: unknown): string | null => {
  if (typeof src !== "string") return null;
  const match = src.match(/^\/images\/([^/]+\/[^/?#]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const isBlankText = (node: { type: string; value?: string }) => node.type === "text" && !(node.value ?? "").trim();

// Walk the tree; replace a mapped <img> (or the <p> that holds only that image).
export function swapImages(tree: Root, swaps: Record<string, GraphConfig>): number {
  let swapped = 0;
  const visit = (parent: Parent) => {
    parent.children.forEach((child, index) => {
      if (child.type !== "element") return;
      if (child.tagName === "img") {
        const key = imageKey(child.properties?.src);
        if (key && swaps[key]) { parent.children[index] = graphBlock(swaps[key]); swapped++; }
        return;
      }
      if (child.tagName === "p") {
        const meaningful = child.children.filter((grandchild) => !isBlankText(grandchild as { type: string; value?: string }));
        const onlyChild = meaningful.length === 1 ? meaningful[0] : null;
        if (onlyChild && onlyChild.type === "element" && onlyChild.tagName === "img") {
          const key = imageKey(onlyChild.properties?.src);
          if (key && swaps[key]) { parent.children[index] = graphBlock(swaps[key]); swapped++; return; }
        }
      }
      visit(child);
    });
  };
  visit(tree);
  return swapped;
}

export function rehypeGraphSwaps() {
  return (tree: Root) => { swapImages(tree, GRAPH_SWAPS); };
}
