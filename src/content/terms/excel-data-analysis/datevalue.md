---
title: DATEVALUE
subject: excel-data-analysis
aliases: []
related: ["DATE", "Date Serial Number"]
source_folder: excel-data-analysis
ai_drafted: true
---

Converts a date written as text, such as `"29/4/24"`, into a real date value. How the text is read depends on the day-first or month-first locale.

## When to use

Used when a "date" is really text and cannot be subtracted or grouped: wrap it in `DATEVALUE` or enter it as a real date. The class example `=DATEVALUE("29/4/24")` gives 45411.

See [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].
