import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { scan } from "../../scripts/ingest/scan";
import type { SubjectConfig } from "../../scripts/ingest/config";

let tmp: string;
let cfg: SubjectConfig;

async function touch(relativePath: string, contents = "%PDF-fixture") {
  const full = join(tmp, relativePath);
  await mkdir(join(full, ".."), { recursive: true });
  await writeFile(full, contents);
}

beforeEach(async () => {
  tmp = await mkdtemp(join(tmpdir(), "scan-sources-"));
  await mkdir(join(tmp, "vault"), { recursive: true });
  await mkdir(join(tmp, "docs"), { recursive: true });
  await mkdir(join(tmp, "dest/terms/pilot"), { recursive: true });
  cfg = { slug: "pilot", title: "Pilot", vaultPath: join(tmp, "vault"), sourceDocPath: join(tmp, "docs"), problemSetSlugPrefix: "assignment" };
});
afterEach(async () => { await rm(tmp, { recursive: true, force: true }); });

const problemSets = async () =>
  (await scan(cfg, join(tmp, "dest"))).pending.filter((item) => item.kind === "problem-set");

describe("scan — assignmentFiles", () => {
  // Intro to Econometrics: one folder per assignment, each also holding its
  // solution and a data description, with no common parent folder.
  beforeEach(async () => {
    await touch("docs/Assignment 1/IntroMetrics-HW1-2026.pdf");
    await touch("docs/Assignment 1/HW1 solution.pdf");
    await touch("docs/assingment 5/IntroMetrics-HW5-2026.pdf");
    await touch("docs/assingment 5/mosadDES-English.pdf");
    await touch("docs/Midterm assignment (1).pdf");
  });

  it("queues exactly the listed files, from any folder or the course root", async () => {
    cfg.assignmentFiles = ["Assignment 1/IntroMetrics-HW1-2026.pdf", "assingment 5/IntroMetrics-HW5-2026.pdf"];
    const sets = await problemSets();
    expect(sets.map((set) => set.slug).sort()).toEqual(["assignment-1", "assignment-5"]);
    expect(sets.map((set) => set.sourceDocFilename)).not.toContain("HW1 solution.pdf");
  });

  it("copies only the listed files into public/papers", async () => {
    cfg.assignmentFiles = ["Midterm assignment (1).pdf"];
    const result = await scan(cfg, join(tmp, "dest"));
    expect(result.docOps).toHaveLength(1);
    expect(result.docOps[0].from).toBe(join(tmp, "docs/Midterm assignment (1).pdf"));
    expect(result.docOps[0].to).toMatch(/public\/papers\/pilot\/assignment-1\.pdf$/);
  });

  it("ignores assignmentsDir when assignmentFiles is set", async () => {
    await touch("docs/Assignments/EX-9.pdf");
    cfg.assignmentsDir = "Assignments";
    cfg.assignmentFiles = ["Assignment 1/IntroMetrics-HW1-2026.pdf"];
    expect((await problemSets()).map((set) => set.slug)).toEqual(["assignment-1"]);
  });

  it("fails loudly on a listed file that doesn't exist", async () => {
    cfg.assignmentFiles = ["Assignment 1/IntroMetrics-HW1-2025.pdf"];
    await expect(scan(cfg, join(tmp, "dest"))).rejects.toThrow(/assignmentFiles.*IntroMetrics-HW1-2025\.pdf/);
  });

  it("refuses a path that leaves the source folder", async () => {
    cfg.assignmentFiles = ["../vault/secret.pdf"];
    await expect(scan(cfg, join(tmp, "dest"))).rejects.toThrow(/outside sourceDocPath/);
  });

  it("still walks assignmentsDir when assignmentFiles is not set", async () => {
    await touch("docs/Assignments/EX-9.pdf");
    cfg.assignmentsDir = "Assignments";
    expect((await problemSets()).map((set) => set.slug)).toEqual(["assignment-9"]);
  });
});

describe("scan — reserved term slugs", () => {
  it("queues a registry term titled Index as index-term, keeping its title", async () => {
    await writeFile(join(tmp, "vault", "_Wiki-Link Registry.md"),
      "## Unresolved Links\n\n- `[[Index]]` — a sorted lookup structure\n- `[[Primary Key]]` — unique row id\n");
    const terms = (await scan(cfg, join(tmp, "dest"))).pending.filter((item) => item.kind === "term");
    expect(terms.map((term) => [term.slug, term.title])).toEqual([["index-term", "Index"], ["primary-key", "Primary Key"]]);
  });

  it("doesn't re-queue Index once index-term.md exists", async () => {
    await writeFile(join(tmp, "vault", "_Wiki-Link Registry.md"), "## Unresolved Links\n\n- `[[Index]]` — lookup\n");
    await writeFile(join(tmp, "dest/terms/pilot/index-term.md"), "---\ntitle: Index\n---\n");
    const terms = (await scan(cfg, join(tmp, "dest"))).pending.filter((item) => item.kind === "term");
    expect(terms).toEqual([]);
  });
});
