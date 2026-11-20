import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Aliases } from "../../src/lib/progress/aliases";
import type { ProgressTotals } from "../../src/lib/progress/types";

export const IDS_DIR = "src/data/progress-ids";
const TOTALS_PATH = "dist/progress-totals.json";
const ALIASES_PATH = "src/data/progress-aliases.json";

export function readBuiltTotals(): ProgressTotals {
  if (!existsSync(TOTALS_PATH)) throw new Error(`${TOTALS_PATH} not found. Run npm run build first.`);
  return JSON.parse(readFileSync(TOTALS_PATH, "utf8"));
}
export const readAliases = (): Aliases => JSON.parse(readFileSync(ALIASES_PATH, "utf8"));
export const idsFile = (subject: string) => join(IDS_DIR, `${subject}.json`);
