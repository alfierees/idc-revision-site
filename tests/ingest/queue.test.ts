import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeQueue } from "../../scripts/ingest/queue";
import type { ScanResult } from "../../scripts/ingest/types";

let tmp: string;
beforeEach(async () => { tmp = await mkdtemp(join(tmpdir(), "queue-")); });
afterEach(async () => { await rm(tmp, { recursive: true, force: true }); });

describe("writeQueue", () => {
  it("writes a JSON file with only the pending items (not docOps/imageOps)", async () => {
    const sr: ScanResult = {
      subject: "pilot",
      pending: [
        { kind: "term", slug: "x", title: "X", registryDefinition: "x def", sourceVaultPath: "/v", sourceFolder: "pilot" },
      ],
      imageOps: [{ from: "/a", to: "/b" }],
      docOps: [{ from: "/c", to: "/d" }],
    };
    const path = await writeQueue(sr, tmp);
    expect(path).toMatch(/\.queue\/pilot\.json$/);
    const parsed = JSON.parse(await readFile(path, "utf8"));
    expect(parsed.subject).toBe("pilot");
    expect(parsed.pending).toHaveLength(1);
    expect(parsed.pending[0].title).toBe("X");
    expect(parsed.imageOps).toBeUndefined();
    expect(parsed.docOps).toBeUndefined();
  });
});
