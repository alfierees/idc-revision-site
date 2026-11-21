---
title: Absolute Reference
subject: excel-data-analysis
aliases: ["mixed reference"]
related: ["Conditional Formatting", "Cross-Sheet Reference", "SEQUENCE", "XLOOKUP"]
source_folder: excel-data-analysis
ai_drafted: true
---

A reference with a `$` in front of the column letter, the row number or both, which freezes that part of the address when the formula is copied: `$B$1` stays fixed, `$A2` locks the column only, `B$1` locks the row only. Pressing `F4` on a reference cycles through the styles. Also in [[Lec_02-IF Statements & Logical Functions|Lec 02]], [[Lec_03-Calendars & Date Calculations|Lec 03]], [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]].

## When to use

Used whenever one formula is filled down or across and must keep pointing at an input cell (a threshold, a bonus amount, a lookup table), as in the multiplication table `=B$1*$A2` and the bonus rule `=IF(J2>$K$204,$L$204,$L$205)`. Forgetting the `$` makes the reference slide and the results turn to nonsense.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
