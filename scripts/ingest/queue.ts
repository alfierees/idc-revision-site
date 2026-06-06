import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { ScanResult } from "./types.js";

// rootDir is the absolute path to site/scripts/ingest
export async function writeQueue(result: ScanResult, rootDir: string): Promise<string> {
  const dir = join(rootDir, ".queue");
  await mkdir(dir, { recursive: true });
  const path = join(dir, `${result.subject}.json`);
  const payload = { subject: result.subject, pending: result.pending };
  await writeFile(path, JSON.stringify(payload, null, 2));
  return path;
}
