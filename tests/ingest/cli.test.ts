import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runCli } from "../../scripts/ingest/cli";

let tmp: string;
beforeEach(async () => {
  tmp = await mkdtemp(join(tmpdir(), "cli-"));
  // Build a minimal fixture: vault with registry, docs folder with one .pdf, dest content + ingest root.
  await mkdir(join(tmp, "vault"), { recursive: true });
  await writeFile(join(tmp, "vault", "_Wiki-Link Registry.md"),
    "# Wiki-Link Registry\n\n## Unresolved Links\n\n### From X\n\n- `[[Foo]]` — a thing\n");
  await mkdir(join(tmp, "docs/Assignments"), { recursive: true });
  await writeFile(join(tmp, "docs/Assignments/EX-1.pdf"), "%PDF-fixture");
  await mkdir(join(tmp, "site/src/content/terms/pilot"), { recursive: true });
  await mkdir(join(tmp, "site/src/content/problem-sets/pilot"), { recursive: true });
  await mkdir(join(tmp, "site/scripts/ingest"), { recursive: true });
  await mkdir(join(tmp, "site/public/papers/pilot"), { recursive: true });
});
afterEach(async () => { await rm(tmp, { recursive: true, force: true }); });

describe("runCli", () => {
  it("scans, copies assets, writes queue, returns summary", async () => {
    const summary = await runCli({
      subject: {
        slug: "pilot", title: "Pilot",
        vaultPath: join(tmp, "vault"),
        sourceDocPath: join(tmp, "docs"),
      },
      siteRoot: join(tmp, "site"),
    });

    expect(summary.subject).toBe("pilot");
    expect(summary.counts.term).toBe(1);
    expect(summary.counts["problem-set"]).toBe(1);
    expect(existsSync(join(tmp, "site/scripts/ingest/.queue/pilot.json"))).toBe(true);
    expect(existsSync(join(tmp, "site/public/papers/pilot/ex-1.pdf"))).toBe(true);
  });
});
