---
title: Calendar
subject: excel-data-analysis
aliases: []
related: ["SEQUENCE", "DATE", "WEEKDAY", "EOMONTH", "Data Validation", "Conditional Formatting"]
source_folder: excel-data-analysis
ai_drafted: true
---

A self-building month grid: the month and year are chosen from [[Data Validation]] drop-downs filled by [[SEQUENCE]], then [[DATE]] gives the 1st of the month, [[WEEKDAY]] says which column it falls in, and [[EOMONTH]] says how many days the month has.

## When to use

When a sheet must show a whole month laid out by weekday and update itself when the month changes. Day numbers past the end of the month are hidden with [[Conditional Formatting]].

See [[Lec_03-Calendars & Date Calculations|Lec 03]].
