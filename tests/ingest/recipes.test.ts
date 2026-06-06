import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { detectRecipes } from "../../scripts/ingest/recipes";

const here = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(here, "fixtures/sample-lecture.md");

describe("detectRecipes", () => {
  it("detects verb-led headings followed by an ordered list", async () => {
    const md = await readFile(fixturePath, "utf8");
    const recipes = detectRecipes(md);
    const titles = recipes.map(r => r.title);

    expect(titles).toContain("To find a Nash equilibrium");
    expect(titles).toContain("Steps for iterated dominance");
  });

  it("counts step items per detected recipe", async () => {
    const md = await readFile(fixturePath, "utf8");
    const recipes = detectRecipes(md);
    const nash = recipes.find(r => r.title === "To find a Nash equilibrium")!;
    expect(nash.stepCount).toBe(3);
    const iter = recipes.find(r => r.title === "Steps for iterated dominance")!;
    expect(iter.stepCount).toBe(4);
  });

  it("skips ordered lists with fewer than 3 items unless heading is verb-led", async () => {
    const md = await readFile(fixturePath, "utf8");
    const recipes = detectRecipes(md);
    expect(recipes.find(r => r.title === "A heading with only two list items")).toBeUndefined();
  });
});
