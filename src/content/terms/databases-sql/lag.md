---
title: LAG
subject: databases-sql
aliases: []
related: ["LEAD", "Window Function", "OVER"]
source_folder: databases-sql
ai_drafted: true
---

A window function that returns the value from the previous row in the window, for example `LAG(rental_date, 1) OVER (ORDER BY rental_date)`.

```sql
SELECT rental_date,
  LAG(rental_date, 1) OVER (ORDER BY rental_date) AS previous_date
FROM rental;
```

## When to use

Not asked in the past papers or problem sets; it appears in Read 01. Use it to compare each row with the one before it, such as the previous rental date.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
