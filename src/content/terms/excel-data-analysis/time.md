---
title: TIME
subject: excel-data-analysis
aliases: ["Time Functions"]
related: ["TIMEVALUE", "HOUR", "MINUTE", "SECOND", "Time as a Fraction of a Day"]
source_folder: excel-data-analysis
ai_drafted: true
---

Builds a time value from three numbers: `TIME(hour, minute, second)`, so `TIME(9,45,22)` gives 0.4065... of a day. Use it when the three parts are in separate cells or typed in the formula.

## When to use

Do not confuse it with [[TIMEVALUE]]: TIME takes three numbers, TIMEVALUE takes one text string. Format the result with a [[Time Format]] to read it as a clock time.

See [[Lec_05-Time Functions & Protecting Cells|Lec 05]].
