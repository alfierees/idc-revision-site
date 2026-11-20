---
title: TIMEVALUE
subject: excel-data-analysis
aliases: []
related: ["TIME", "HOUR", "MINUTE", "SECOND", "Time as a Fraction of a Day"]
source_folder: excel-data-analysis
ai_drafted: true
---

Converts a time written as text into a time value, so `TIMEVALUE("11:15:22")` returns 0.469... of a day. The quote marks matter because they make the argument text.

## When to use

Use it when times arrive as text, for example from an export, and need to become real numbers. [[TIME]] takes three numbers, TIMEVALUE one text string.

See [[Lec_05-Time Functions & Protecting Cells|Lec 05]].
