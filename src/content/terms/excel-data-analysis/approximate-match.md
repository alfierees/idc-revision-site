---
title: Approximate Match
subject: excel-data-analysis
aliases: []
related: ["XLOOKUP", "Match Mode", "Exact Match", "Lookup Table"]
source_folder: excel-data-analysis
ai_drafted: true
---

A lookup that falls back to the nearest key when there is no exact one, for example to place a salary in a band. In [[XLOOKUP]] it is chosen with [[Match Mode]] `-1`, which takes the next smaller key.

## When to use

Use it for banded values such as the bonus table (0, 5000, 8000, 10000 giving 1000, 800, 400, 200) where the [[Lookup Table]] lists the lower limit of each band. Leaving off the `-1` returns `#N/A` for any salary that is not literally a key.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
