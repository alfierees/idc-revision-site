// Minimal static file server over the built site (dist/), for the Playwright
// sweep. It listens on port 0 (a random free port), so several course
// sessions can verify in parallel without fighting over 4321/4322.

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";
import type { AddressInfo } from "node:net";

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

const isFile = (path: string) => existsSync(path) && statSync(path).isFile();

// Map a URL path to the file Astro's static build wrote for it, or null.
// Shared by the server and the on-disk internal-link check.
export function resolveDistFile(distRoot: string, urlPath: string): string | null {
  const root = resolve(distRoot);
  let pathname: string;
  try {
    pathname = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  } catch {
    return null;
  }
  const target = resolve(join(root, pathname));
  if (target !== root && !target.startsWith(root + sep)) return null;

  const candidates = pathname.endsWith("/")
    ? [join(target, "index.html")]
    : [target, join(target, "index.html"), `${target}.html`];
  return candidates.find(isFile) ?? null;
}

export interface StaticServer {
  url: string;
  close: () => Promise<void>;
}

export function startStaticServer(distRoot: string): Promise<StaticServer> {
  const notFoundPage = join(distRoot, "404.html");
  const server = createServer((request, response) => {
    const file = resolveDistFile(distRoot, request.url ?? "/");
    if (!file) {
      response.writeHead(404, { "content-type": CONTENT_TYPES[".html"] });
      response.end(isFile(notFoundPage) ? readFileSync(notFoundPage) : "Not found");
      return;
    }
    response.writeHead(200, { "content-type": CONTENT_TYPES[extname(file).toLowerCase()] ?? "application/octet-stream" });
    response.end(readFileSync(file));
  });

  return new Promise((resolveServer, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address() as AddressInfo;
      resolveServer({
        url: `http://127.0.0.1:${port}`,
        close: () => new Promise((done) => server.close(() => done())),
      });
    });
  });
}
