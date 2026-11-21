---
title: DATEDIF
subject: excel-data-analysis
aliases: []
related: ["DATE", "EOMONTH", "Date Serial Number", "IF Function"]
source_folder: excel-data-analysis
ai_drafted: true
---

A hidden function (typed by hand, not listed in the wizard) that gives the complete years, months or days between two dates, using the unit codes `"y"`, `"m"`, `"d"` and `"md"`. The start date must be earlier than the end date, otherwise it returns `#NUM!`. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].

## When to use

Used to measure gaps, for example `DATEDIF(TODAY(),L2,"y")` for time until a promotion date. Guard it with an [[IF Function]] so the start is never later than the end, and remember it counts complete units only, unlike subtraction or dividing by 365.

See [[Lec_03-Calendars & Date Calculations|Lec 03]].
