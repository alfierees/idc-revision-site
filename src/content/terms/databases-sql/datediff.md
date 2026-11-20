---
title: DATEDIFF
subject: databases-sql
aliases: []
related: [CAST]
source_folder: databases-sql
ai_drafted: true
---

Gives the number of days between two dates in MySQL, for example `DATEDIFF(return_date, rental_date)`.

```sql
SELECT rental_id, DATEDIFF(return_date, rental_date) AS days_out
FROM rental;
```

## When to use

In the reading's practice questions (rental duration in days). The reading warns it is MySQL specific: SQL Server's DATEDIFF takes three arguments. Not used in a past paper.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
