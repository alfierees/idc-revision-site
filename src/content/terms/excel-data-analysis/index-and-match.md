---
title: INDEX and MATCH
subject: excel-data-analysis
aliases: ["INDEX MATCH"]
related: ["MATCH", "INDEX", "XLOOKUP", "Exact Match"]
source_folder: excel-data-analysis
ai_drafted: true
---

A pairing where [[MATCH]] finds a position and [[INDEX Term|INDEX]] returns the cell at that position. Two `MATCH` calls (one for the row, one for the column) give a two-way lookup.

## When to use

Use it when the column also has to be found from a label, as with a student's grade on `grade ex5`; use [[XLOOKUP]] for a simple find-the-row lookup. The `MATCH` ranges and the `INDEX` array must start from the same cell, and write `0` in `MATCH` for exact match.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
