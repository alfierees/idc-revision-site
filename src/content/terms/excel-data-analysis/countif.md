---
title: COUNTIF
subject: excel-data-analysis
aliases: []
related: ["If Function", "Wildcard", "Database Function"]
source_folder: excel-data-analysis
ai_drafted: true
---

Counts the cells in a range that meet one condition, for example `=COUNTIF($X$2:$X$8400,$X8402)` counts how many cells in the column equal the label in a helper cell.

## When to use

For a completeness check on a classification column: count each label with `COUNTIF`, add the counts, and compare with `COUNTA` of the column. The difference must be 0, otherwise some rows got no label. The condition can use [[Wildcard]] patterns. Used in HA 4 (the bonus part) and mentioned in [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
