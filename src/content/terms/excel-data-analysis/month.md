---
title: MONTH
subject: excel-data-analysis
aliases: []
related: ["YEAR", "DAY", "DATE", "TODAY", "Date Serial Number"]
source_folder: excel-data-analysis
ai_drafted: true
---

Extracts the month number (1 to 12) from a date, so `MONTH` of 15 December 2024 is 12. It is the companion of [[DAY]] and [[YEAR]].

## When to use

Combine it with [[TODAY]] in an [[IF Function]] to flag rows whose month matches the current month, such as a birthday check (`MONTH(F2)=MONTH(TODAY())`). Adding to the month inside [[DATE]] rolls into the next year when the result is above 12.

See [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].
