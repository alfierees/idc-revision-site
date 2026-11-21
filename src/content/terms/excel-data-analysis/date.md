---
title: DATE
subject: excel-data-analysis
aliases: ["Date Functions"]
related: ["Date Serial Number", "EOMONTH", "WEEKDAY", "DATEVALUE"]
source_folder: excel-data-analysis
ai_drafted: true
---

Builds a real date from year, month and day, as in `=DATE(2024,12,15)`. A month above 12 rolls into the next year, so `DATE(2024,13,1)` is 1 January 2025. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].

## When to use

Used to build the first day of a chosen month, `=DATE(L2,K2,1)`, which then feeds [[WEEKDAY]] and [[EOMONTH]] in the calendar grids, and to create dates inside formulas safely.

See [[Lec_03-Calendars & Date Calculations|Lec 03]].
