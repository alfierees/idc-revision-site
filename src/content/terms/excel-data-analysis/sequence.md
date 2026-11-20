---
title: SEQUENCE
subject: excel-data-analysis
aliases: []
related: ["Spill Range", "FILTER", "Data Validation", "DATE"]
source_folder: excel-data-analysis
ai_drafted: true
---

A dynamic-array function that spills a list of numbers: `SEQUENCE(rows, columns, start, step)`. An empty argument between commas means the default, so `SEQUENCE(12,,1,1)` gives 1 to 12 down a column. Also in [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].

## When to use

Use it to avoid typing or dragging lists: month and year drop-down sources (1 to 12, 2020 to 2050) and the headers of the multiplication table. The formula goes in the top cell and fills a [[Spill Range]].

See [[Lec_03-Calendars & Date Calculations|Lec 03]].
