import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Aliases } from "../../src/lib/progress/aliases";
import type { ProgressTotals } from "../../src/lib/progress/types";

export const IDS_DIR = "src/data/progress-ids";
// With the Vercel adapter, static files land in dist/client/; without it, in dist/.
const TOTALS_PATHS = ["dist/client/progress-totals.json", "dist/progress-totals.json"];
const ALIASES_PATH = "src/data/progress-aliases.json";

export function readBuiltTotals(): ProgressTotals {
  const path = TOTALS_PATHS.find((candidate) => existsSync(candidate));
  if (!path) throw new Error(`${TOTALS_PATHS.join(" or ")} not found. Run npm run build first.`);
  return JSON.parse(readFileSync(path, "utf8"));
}
export const readAliases = (): Aliases => JSON.parse(readFileSync(ALIASES_PATH, "utf8"));
export const idsFile = (subject: string) => join(IDS_DIR, `${subject}.json`);
