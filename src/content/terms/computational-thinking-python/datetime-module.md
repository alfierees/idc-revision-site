---
title: datetime Module
subject: computational-thinking-python
aliases: ["datetime"]
related: ["csv Module", "Module", "Python Standard Library", "Import Statement"]
source_folder: computational-thinking-python
ai_drafted: true
---

Library module for dates and times. `datetime.datetime(y, m, d)` builds a date-time, `datetime.datetime.now()` and `datetime.date.today()` give the current one, date-times can be compared with `>`, and subtracting two gives a `timedelta` (a duration).

## When to use

`datetime.strptime(text, format)` turns a string into a date-time; the format `'%d-%m-%Y'` reads day-month-year. Lecture 11 combines it with the [[csv Module]] to read dated rows of the COVID data.

See [[Lec_11-Modules and the Standard Library|Lec 11]].
