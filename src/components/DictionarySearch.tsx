import { useMemo, useState } from "preact/hooks";
import Fuse from "fuse.js";

export interface TermEntry {
  slug: string;
  title: string;
  href: string;
  aliases: string[];
}

interface Props {
  terms: TermEntry[];
}

export default function DictionarySearch({ terms }: Props) {
  const [q, setQ] = useState("");
  const fuse = useMemo(
    () => new Fuse(terms, { keys: ["title", "aliases"], threshold: 0.35 }),
    [terms],
  );
  const filtered = q.trim() === "" ? terms : fuse.search(q).map((r) => r.item);

  return (
    <div>
      <input
        type="search"
        placeholder="Search terms…"
        value={q}
        onInput={(e) => setQ((e.target as HTMLInputElement).value)}
        class="w-full border-b border-rule bg-transparent py-2 font-ui text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent"
      />
      <ul class="mt-4 space-y-1">
        {filtered.map((t) => (
          <li>
            <a href={t.href} class="block rounded px-2 py-1.5 font-ui text-sm text-ink-soft hover:bg-paper-deep hover:text-ink transition-colors">
              {t.title}
            </a>
          </li>
        ))}
        {filtered.length === 0 && (
          <li class="px-2 py-1.5 font-ui text-sm text-ink-muted italic">No matches.</li>
        )}
      </ul>
    </div>
  );
}
