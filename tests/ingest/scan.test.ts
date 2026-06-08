import { describe, it, expect } from "vitest";
import { writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { scan } from "../../scripts/ingest/scan";

const here = dirname(fileURLToPath(import.meta.url));
const vault = join(here, "fixtures/vault-pilot");
const docs  = join(here, "fixtures/docs-pilot");
const dest  = join(here, "fixtures/dest");

const cfg = {
  slug: "pilot",
  title: "Pilot",
  vaultPath: vault,
  sourceDocPath: docs,
};

describe("scan", () => {
  it("emits pending terms for every unresolved registry entry not yet in dest", async () => {
    const result = await scan(cfg, dest);
    const termTitles = result.pending.filter(p => p.kind === "term").map(p => p.title);
    expect(termTitles).toContain("Game Theory");
    expect(termTitles).toContain("Nash Equilibrium");
    expect(termTitles).toContain("Perfect Complements");
  });

  it("emits pending recipes detected in lecture notes", async () => {
    const result = await scan(cfg, dest);
    const recipeTitles = result.pending.filter(p => p.kind === "recipe").map(p => p.title);
    expect(recipeTitles).toContain("To find a Nash equilibrium");
  });

  it("emits one pending problem set per source-doc file", async () => {
    const result = await scan(cfg, dest);
    const sets = result.pending.filter(p => p.kind === "problem-set");
    expect(sets).toHaveLength(1);
    expect(sets[0].slug).toBe("ex-1-pilot");
  });

  it("emits a docOp for each source doc to copy into public/papers", async () => {
    const result = await scan(cfg, dest);
    expect(result.docOps).toHaveLength(1);
    expect(result.docOps[0].from).toContain("EX-1 - Pilot.docx");
    expect(result.docOps[0].to).toMatch(/public\/papers\/pilot\/ex-1-pilot\.docx$/);
  });

  it("queues lectures from the lectures directory", async () => {
    const result = await scan(cfg, dest);
    const lectures = result.pending.filter((p) => p.kind === "lecture");
    expect(lectures).toHaveLength(1);
    expect(lectures[0]).toMatchObject({
      kind: "lecture",
      slug: "topic-1",
      sourceFolder: "pilot",
    });
  });

  it("skips pending items whose destination file already exists", async () => {
    const existing = join(dest, "terms/pilot/nash-equilibrium.md");
    await writeFile(existing, "---\ntitle: Nash Equilibrium\n---\n");
    try {
      const result = await scan(cfg, dest);
      const titles = result.pending.filter(p => p.kind === "term").map(p => p.title);
      expect(titles).not.toContain("Nash Equilibrium");
      expect(titles).toContain("Game Theory");
    } finally {
      await rm(existing);
    }
  });
});
