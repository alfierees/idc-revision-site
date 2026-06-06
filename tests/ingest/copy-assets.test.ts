import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, writeFile, readFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { copyAssets } from "../../scripts/ingest/copy-assets";

let tmp: string;

beforeEach(async () => {
  tmp = await mkdtemp(join(tmpdir(), "copy-assets-"));
});
afterEach(async () => {
  await rm(tmp, { recursive: true, force: true });
});

describe("copyAssets", () => {
  it("copies a source file to its destination, creating parent dirs", async () => {
    const from = join(tmp, "src/a.pdf");
    await mkdir(join(tmp, "src"), { recursive: true });
    await writeFile(from, "hello");
    const to = join(tmp, "out/deep/a.pdf");

    await copyAssets({ imageOps: [], docOps: [{ from, to }] });
    expect(await readFile(to, "utf8")).toBe("hello");
  });

  it("skips files that already exist at destination", async () => {
    const from = join(tmp, "a.png");
    await writeFile(from, "new");
    const to = join(tmp, "out.png");
    await writeFile(to, "OLD");

    await copyAssets({ imageOps: [{ from, to }], docOps: [] });
    expect(await readFile(to, "utf8")).toBe("OLD");
  });

  it("ignores ops where source does not exist (silent skip)", async () => {
    const to = join(tmp, "missing.pdf");
    await copyAssets({ imageOps: [], docOps: [{ from: join(tmp, "nope.pdf"), to }] });
    expect(existsSync(to)).toBe(false);
  });
});
