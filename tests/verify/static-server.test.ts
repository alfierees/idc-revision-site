import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolveDistFile, startStaticServer } from "../../scripts/verify/static-server";

let root: string;
beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), "dist-"));
  mkdirSync(join(root, "subjects/pilot/lectures/intro"), { recursive: true });
  writeFileSync(join(root, "index.html"), "<p>home</p>");
  writeFileSync(join(root, "subjects/pilot/lectures/intro/index.html"), "<p>intro</p>");
  writeFileSync(join(root, "404.html"), "<p>not found</p>");
  writeFileSync(join(root, "style.css"), "p{}");
});

describe("resolveDistFile", () => {
  it("maps directory paths with or without a trailing slash to index.html", () => {
    expect(resolveDistFile(root, "/subjects/pilot/lectures/intro/")).toBe(join(root, "subjects/pilot/lectures/intro/index.html"));
    expect(resolveDistFile(root, "/subjects/pilot/lectures/intro")).toBe(join(root, "subjects/pilot/lectures/intro/index.html"));
  });

  it("ignores the query string and hash", () => {
    expect(resolveDistFile(root, "/subjects/pilot/lectures/intro/?a=1#part-2")).toBe(join(root, "subjects/pilot/lectures/intro/index.html"));
  });

  it("returns null for a missing page and for path traversal", () => {
    expect(resolveDistFile(root, "/subjects/pilot/lectures/missing/")).toBeNull();
    expect(resolveDistFile(root, "/../../etc/passwd")).toBeNull();
  });

  it("decodes percent-encoded paths", () => {
    expect(resolveDistFile(root, "/style%2Ecss")).toBe(join(root, "style.css"));
  });
});

describe("startStaticServer", () => {
  let server: Awaited<ReturnType<typeof startStaticServer>>;
  beforeAll(async () => { server = await startStaticServer(root); });
  afterAll(async () => { await server.close(); });

  it("listens on a random free port so parallel runs don't collide", () => {
    expect(server.url).toMatch(/^http:\/\/127\.0\.0\.1:\d+$/);
  });

  it("serves pages with an HTML content type", async () => {
    const response = await fetch(`${server.url}/subjects/pilot/lectures/intro/`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/html");
    expect(await response.text()).toContain("intro");
  });

  it("serves the 404 page with a 404 status for missing paths", async () => {
    const response = await fetch(`${server.url}/nope/`);
    expect(response.status).toBe(404);
    expect(await response.text()).toContain("not found");
  });
});
