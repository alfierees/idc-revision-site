import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { parseRegistry } from "../../scripts/ingest/registry";

const here = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(here, "fixtures/sample-registry.md");

describe("parseRegistry", () => {
  it("returns unresolved terms with their definition seeds", async () => {
    const content = await readFile(fixturePath, "utf8");
    const result = parseRegistry(content);

    expect(result).toContainEqual({
      title: "Game Theory",
      registryDefinition: "the formal study of strategic interaction",
      isResolved: false,
    });
    expect(result).toContainEqual({
      title: "Nash Equilibrium",
      registryDefinition: "strategy profile where no player wants to deviate unilaterally",
      isResolved: false,
    });
    expect(result).toContainEqual({
      title: "Perfect Complements",
      registryDefinition: "goods that must be consumed together",
      isResolved: false,
    });
  });

  it("marks resolved-table entries as resolved with no definition", async () => {
    const content = await readFile(fixturePath, "utf8");
    const result = parseRegistry(content);

    const gameTheoryTopic = result.find(r => r.title === "Topic 3 - Game Theory");
    expect(gameTheoryTopic).toEqual({
      title: "Topic 3 - Game Theory",
      registryDefinition: null,
      isResolved: true,
    });
  });

  it("does not include hub-style entries like Microeconomics", async () => {
    const content = await readFile(fixturePath, "utf8");
    const result = parseRegistry(content);
    expect(result.find(r => r.title === "Microeconomics")).toBeUndefined();
  });
});
