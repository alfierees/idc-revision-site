---
title: Time as a Fraction of a Day
subject: excel-data-analysis
aliases: []
related: ["TIME", "TIMEVALUE", "Time Format", "Elapsed Time Format", "Date Serial Number"]
source_folder: excel-data-analysis
ai_drafted: true
---

Excel stores a date as a whole number and a time as the fractional part of a day (midday is 0.5, 6 am is 0.25), so times can be added, subtracted and compared. Multiply a difference by 24 to get hours.

## When to use

Forgetting the `*24` is a classic mistake: comparing a time difference such as 0.375 with 8 is always true. In the timesheet, hours worked are `(Stop-Start)*24`.

See [[Lec_05-Time Functions & Protecting Cells|Lec 05]].
