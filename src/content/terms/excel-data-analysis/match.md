---
title: MATCH
subject: excel-data-analysis
aliases: []
related: ["INDEX", "INDEX and MATCH", "Exact Match", "XLOOKUP"]
source_folder: excel-data-analysis
ai_drafted: true
---

Returns the position of a value within a range, as a number: `MATCH(lookup_value, lookup_array, [match_type])`. It is the half of [[INDEX and MATCH]] that finds the row or column, and it returns only the first match.

## When to use

Write `0` as the match type for names and labels, because the default assumes sorted data and can return a wrong row without an error. Use one MATCH for the row and a second for the column to build a two-way lookup.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
