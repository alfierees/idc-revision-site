import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadSubjects, subjects, getSubjectConfig, mutedTagsFor } from "../../scripts/ingest/config";

const validConfig = { slug: "pilot", title: "Pilot", vaultPath: "/vault", sourceDocPath: "/source" };

describe("loadSubjects", () => {
  it("keys each config by its filename and ignores non-json files", () => {
    const dir = mkdtempSync(join(tmpdir(), "subjects-"));
    writeFileSync(join(dir, "pilot.json"), JSON.stringify(validConfig));
    writeFileSync(join(dir, "README.md"), "ignore me");
    const loaded = loadSubjects(dir);
    expect(Object.keys(loaded)).toEqual(["pilot"]);
    expect(loaded.pilot.title).toBe("Pilot");
  });

  it("rejects a config missing a required field, naming the file and field", () => {
    const dir = mkdtempSync(join(tmpdir(), "subjects-"));
    writeFileSync(join(dir, "broken.json"), JSON.stringify({ slug: "broken" }));
    expect(() => loadSubjects(dir)).toThrow(/broken\.json.*title/);
  });

  it("rejects invalid JSON with the file name in the error", () => {
    const dir = mkdtempSync(join(tmpdir(), "subjects-"));
    writeFileSync(join(dir, "typo.json"), "{ slug: ");
    expect(() => loadSubjects(dir)).toThrow(/typo\.json/);
  });
});

describe("real subject configs", () => {
  // A superset check, not an exact list: every new course adds a config file,
  // and an exact list would fail (and conflict) on every parallel course branch.
  it("keeps every existing subject", () => {
    expect(Object.keys(subjects)).toEqual(expect.arrayContaining([
      "accounting", "data-science", "digital-marketing", "econometrics",
      "machine-learning", "macro-economics", "macro-ii", "micro", "micro-ii",
    ]));
  });

  it("keys every config by a slug-safe file name", () => {
    for (const key of Object.keys(subjects)) expect(key).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });

  it("keeps data-science writing into the machine-learning site subject", () => {
    expect(getSubjectConfig("data-science").slug).toBe("machine-learning");
  });

  it("preserves the econometrics source path's trailing space", () => {
    expect(getSubjectConfig("econometrics").sourceDocPath.endsWith("Econometrics ")).toBe(true);
  });

  it("throws for an unknown subject, pointing at the per-course folder", () => {
    expect(() => getSubjectConfig("nope")).toThrow(/scripts\/ingest\/subjects\/nope\.json/);
  });
});

describe("mutedTagsFor", () => {
  it("unions the shared tags with every config that writes into the site slug", () => {
    const muted = mutedTagsFor("machine-learning");
    for (const tag of ["machine-learning", "data-science", "assignment-solution", "problem-set"]) {
      expect(muted.has(tag)).toBe(true);
    }
  });

  it("includes a course's own tags", () => {
    expect(mutedTagsFor("micro-ii").has("micro-economics-ii")).toBe(true);
    expect(mutedTagsFor("accounting").has("recap")).toBe(true);
  });

  it("gives an unknown slug only the shared tags", () => {
    expect([...mutedTagsFor("brand-new-course")].sort()).toEqual(["assignment-solution", "problem-set"]);
  });
});
