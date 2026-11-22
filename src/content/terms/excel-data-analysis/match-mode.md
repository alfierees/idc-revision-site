---
title: Match Mode
subject: excel-data-analysis
aliases: []
related: ["XLOOKUP", "Exact Match", "Approximate Match", "Wildcard"]
source_folder: excel-data-analysis
ai_drafted: true
---

The XLOOKUP argument that says how strictly the key must match: `0` is exact, `-1` is exact or the next smaller value, `1` is exact or the next larger value, and `2` is a wildcard match. If you leave it out, the default is `0`.

## When to use

Use `-1` when a band table lists the lower limit of each band, as in the salary-to-bonus table (0, 5000, 8000, 10000), and `1` when it lists upper limits. Forgetting the `-1` makes every salary that is not literally a band edge return `#N/A`.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
