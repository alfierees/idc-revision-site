---
title: LEAD
subject: databases-sql
aliases: []
related: ["LAG", "Window Function", "OVER"]
source_folder: databases-sql
ai_drafted: true
---

A window function that returns the value from the next row in the window, for example `LEAD(rental_date, 1) OVER (ORDER BY rental_date)`.

```sql
SELECT rental_date,
  LEAD(rental_date, 1) OVER (ORDER BY rental_date) AS next_date
FROM rental;
```

## When to use

Not asked in the past papers or problem sets; it appears in Read 01 beside LAG. Use it to look ahead to the following row, such as the next rental date.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
