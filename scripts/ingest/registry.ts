export interface RegistryEntry {
  title: string;
  registryDefinition: string | null;
  isResolved: boolean;
}

// Matches `[[Term Name]]` in either a table cell or a bullet line.
const TERM = /`?\[\[([^\]]+)\]\]`?/;

export function parseRegistry(content: string): RegistryEntry[] {
  const lines = content.split("\n");
  const out: RegistryEntry[] = [];

  let section: "resolved" | "unresolved" | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    const heading = line.match(/^##\s+(.+?)$/);
    if (heading) {
      const h = heading[1].toLowerCase();
      if (h.startsWith("resolved")) section = "resolved";
      else if (h.startsWith("unresolved")) section = "unresolved";
      else section = null;
      continue;
    }
    if (!section) continue;

    if (section === "resolved" && line.startsWith("|")) {
      // Markdown table row. Skip header/separator rows.
      if (/^\|\s*-+/.test(line) || /Link Target/i.test(line)) continue;
      const cells = line.split("|").map(s => s.trim()).filter(s => s.length);
      if (cells.length < 2) continue;
      const m = cells[0].match(TERM);
      if (!m) continue;
      // Skip hub entries (Note column contains "(hub)").
      if (/\(hub\)/i.test(cells[1])) continue;
      out.push({ title: m[1], registryDefinition: null, isResolved: true });
    }

    if (section === "unresolved" && line.startsWith("-")) {
      const m = line.match(TERM);
      if (!m) continue;
      // Definition is whatever follows " — " (em-dash) or " - " after the link.
      const after = line.slice(line.indexOf("]]") + 2);
      const defMatch = after.match(/^`?\s*[—-]\s*(.+)$/);
      const def = defMatch ? defMatch[1].trim() : null;
      out.push({ title: m[1], registryDefinition: def, isResolved: false });
    }
  }

  return out;
}
