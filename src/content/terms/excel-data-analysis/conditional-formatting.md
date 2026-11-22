---
title: Conditional Formatting
subject: excel-data-analysis
aliases: []
related: ["Absolute Reference", "Data Validation"]
source_folder: excel-data-analysis
ai_drafted: true
---

A cell format applied by a rule, either by value (for example salary under 5000) or by a formula such as `=$E2=$E$204`. Formula rules use [[Absolute Reference]] and mixed references so the test slides correctly over the range. Also in [[Lec_03-Calendars & Date Calculations|Lec 03]], [[Lec_05-Time Functions & Protecting Cells|Lec 05]].

## When to use

It colours the employee table, which lets the class sort and filter by colour, and it hides the overflow days in the calendar grids, for example with `=K7>DAY($O$2)` and a white font. Forgetting the `$` on the column makes a rule drift sideways and colour the wrong cells.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
