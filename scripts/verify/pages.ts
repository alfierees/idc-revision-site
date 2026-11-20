// Which built pages belong to a subject, and which internal links point at
// nothing in dist/.

import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { resolveDistFile } from "./static-server.js";
import type { SweptPage } from "./report.js";

// URL paths (with trailing slash) of every page under dist/subjects/<slug>/.
export function listSubjectPages(distRoot: string, slug: string): string[] {
  const subjectRoot = join(distRoot, "subjects", slug);
  if (!existsSync(subjectRoot)) return [];
  const pages: string[] = [];
  const walk = (directory: string) => {
    for (const entry of readdirSync(directory).sort()) {
      const fullPath = join(directory, entry);
      if (statSync(fullPath).isDirectory()) walk(fullPath);
      else if (entry === "index.html") {
        const relativeDirectory = relative(distRoot, directory).split(sep).join("/");
        pages.push(`/${relativeDirectory}/`);
      }
    }
  };
  walk(subjectRoot);
  return pages;
}

// Every distinct same-origin link target found on the swept pages that has
// no file in dist/. Each broken target is reported once, with the first page
// that links to it.
export function findBrokenLinks(distRoot: string, sweptPages: SweptPage[]): { linksChecked: number; broken: { from: string; href: string }[] } {
  const firstSeenOn = new Map<string, string>();
  for (const page of sweptPages) {
    for (const href of page.links) if (!firstSeenOn.has(href)) firstSeenOn.set(href, page.path);
  }
  const broken = [...firstSeenOn]
    .filter(([href]) => resolveDistFile(distRoot, href) === null)
    .map(([href, from]) => ({ from, href }));
  return { linksChecked: firstSeenOn.size, broken };
}
