export function rewriteWikiHrefs(html: string, subject: string, knownSlugs: Set<string>): string {
  return html.replace(/href="__WIKI__([^"]+)"/g, (_m, raw: string) => {
    const slug = raw.toLowerCase();
    if (knownSlugs.has(slug)) {
      return `href="/subjects/${subject}/dictionary/${slug}"`;
    }
    return `href="#" data-missing="true" title="Missing concept"`;
  });
}
