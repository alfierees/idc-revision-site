---
title: EOMONTH
subject: excel-data-analysis
aliases: []
related: ["DATE", "EDATE", "DAY", "DATEDIF"]
source_folder: excel-data-analysis
ai_drafted: true
---

Returns the last day of the month, shifted by the number of months given: `EOMONTH(date,0)` is the end of the same month and `EOMONTH(date,-1)` the end of the previous month. So `EOMONTH(date,-1)+1` gives the first of the month. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].

## When to use

Used in the calendar and timesheet to find the last day of the chosen month without knowing whether it has 28, 29, 30 or 31 days, and in conditional-formatting rules such as `$A15>EOMONTH($A$15,0)`.

See [[Lec_03-Calendars & Date Calculations|Lec 03]].
