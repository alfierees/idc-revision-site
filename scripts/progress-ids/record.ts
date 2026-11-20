// Adds the current build's progress ids to each course's known-id file. Never removes ids:
// a removed id is exactly what the postbuild check exists to catch.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { keysBySubject } from "../../src/lib/progress/id-guard";
import { IDS_DIR, idsFile, readBuiltTotals } from "./shared";

mkdirSync(IDS_DIR, { recursive: true });
for (const [subject, keys] of Object.entries(keysBySubject(readBuiltTotals()))) {
  const path = idsFile(subject);
  const known: string[] = existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : [];
  const merged = [...new Set([...known, ...keys])].sort();
  writeFileSync(path, JSON.stringify(merged, null, 2) + "\n");
  console.log(`${subject}: ${merged.length} ids (${merged.length - known.length} new)`);
}
