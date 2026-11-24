---
title: Date Serial Number
subject: excel-data-analysis
aliases: ["serial number", "Dates"]
related: ["DATE", "DATEVALUE", "Time as a Fraction of a Day"]
source_folder: excel-data-analysis
ai_drafted: true
---

Excel stores a date as the count of days since 30 December 1899, so dates can be added, subtracted and compared; the date format only changes how it is displayed. A time of day is the fraction of a day. Also in [[Lec_03-Calendars & Date Calculations|Lec 03]].

## When to use

If a date cell shows a number such as 45641, nothing is broken: change the format to Date. Subtracting two dates gives days, `36526` is 1 January 2000, and date thresholds in filters and `IF` tests can be typed as serial numbers. A "date" that is left-aligned and will not calculate is text; convert it with [[DATEVALUE]].

See [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].
