---
title: SUBTOTAL
subject: excel-data-analysis
aliases: []
related: ["AutoFilter", "Database Function"]
source_folder: excel-data-analysis
ai_drafted: true
---

Totals or averages only the rows left visible after a filter, with the function chosen by a number first, then the range: 1 AVERAGE, 2 COUNT, 3 COUNTA, 4 MAX, 5 MIN, 9 SUM.

## When to use

Use it instead of `SUM` or `AVERAGE` under a filtered list, because those still include hidden rows. Point it at the whole column range so the total does not miss rows when the filter changes.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
