---
title: HLOOKUP
subject: excel-data-analysis
aliases: []
related: ["XLOOKUP", "Exact Match", "Lookup Table", "WEEKDAY"]
source_folder: excel-data-analysis
ai_drafted: true
---

An exact lookup across a row instead of down a column, as in `=HLOOKUP(F6,$E$11:$K$12,2,0)`, where the final `0` means exact match.

## When to use

In the month calendar it turns the weekday number of the first day into a day name from a table that runs horizontally (numbers 1 to 7 above Sunday to Saturday). [[XLOOKUP]] is the modern alternative.

See [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].
