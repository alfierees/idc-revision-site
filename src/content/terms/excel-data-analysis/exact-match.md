---
title: Exact Match
subject: excel-data-analysis
aliases: []
related: ["XLOOKUP", "Match Mode", "Approximate Match", "MATCH"]
source_folder: excel-data-analysis
ai_drafted: true
---

The lookup mode (`0`) that returns a result only if the key is identical. It is the default in [[XLOOKUP]], while [[MATCH]] needs the `0` written in.

## When to use

Use it for IDs, names and codes, as in `=XLOOKUP(D206,A2:A201,J2:J201,,0,)`. A computed number can fail with `#N/A` because of tiny decimal differences, but a `MAX` result is safe.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
