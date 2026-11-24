---
title: FILTER
subject: excel-data-analysis
aliases: ["FILTER function"]
related: ["Advanced Filter", "Spill Range", "Criteria Range", "Absolute Reference"]
source_folder: excel-data-analysis
ai_drafted: true
---

A dynamic-array function (Excel 365 and 2021) that returns the matching rows as a live table that spills into the cells below and to the right. Multiply conditions for AND and add them for OR.

## When to use

A formula such as `=FILTER(A2:J201,(E2:E201="Sales")*(H2:H201>10))` replaces the [[Criteria Range]] approach for most tasks. Leave room for the [[Spill Range]] or you get `#SPILL!`, and do not include the header row in the first argument.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
