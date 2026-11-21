---
title: XLOOKUP
subject: excel-data-analysis
aliases: []
related: ["Match Mode", "Exact Match", "Approximate Match", "Spill Range", "Lookup Table", "INDEX and MATCH"]
source_folder: excel-data-analysis
ai_drafted: true
---

Finds a key in one range and returns the matching item from another range of the same size: `XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])`. A wider return range spills several columns.

## When to use

Use `""` as `if_not_found` to keep unmatched rows blank instead of `#N/A`, and lock the lookup and return ranges so they do not slide when filled down. Use [[INDEX and MATCH]] instead when the column also has to be found from a label.

See [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].
