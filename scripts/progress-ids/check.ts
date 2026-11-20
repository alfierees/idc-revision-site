// Runs after every build. Fails if a lecture, problem-set question or past-paper question that
// students may have marked has disappeared, so a rename can't silently orphan their progress.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { keysBySubject, missingKeys } from "../../src/lib/progress/id-guard";
import { IDS_DIR, idsFile, readAliases, readBuiltTotals } from "./shared";

const current = keysBySubject(readBuiltTotals());
const allCurrent = Object.values(current).flat();
const aliases = readAliases();
let failures = 0;
for (const file of existsSync(IDS_DIR) ? readdirSync(IDS_DIR).filter((f) => f.endsWith(".json")) : []) {
  const subject = file.replace(/\.json$/, "");
  const known: string[] = JSON.parse(readFileSync(idsFile(subject), "utf8"));
  const missing = missingKeys(known, allCurrent, aliases);
  if (missing.length > 0) {
    failures += missing.length;
    console.error(`\n✗ ${subject}: ${missing.length} progress id(s) disappeared:`);
    for (const key of missing.slice(0, 20)) console.error(`  - ${key}`);
    if (missing.length > 20) console.error(`  … and ${missing.length - 20} more`);
  }
}
const unrecorded = Object.keys(current).filter((subject) => !existsSync(idsFile(subject)));
if (unrecorded.length > 0) {
  console.log(`progress ids: not yet recorded for ${unrecorded.join(", ")} (run npm run ids:record)`);
}
if (failures > 0) {
  console.error(
    "\nA rename or renumber would orphan students' progress. Either restore the ids, or map old → new in" +
      " src/data/progress-aliases.json, then rebuild. Don't delete the ids file.",
  );
  process.exit(1);
}
console.log("progress ids: ok");
