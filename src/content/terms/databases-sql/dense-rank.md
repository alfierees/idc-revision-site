---
title: DENSE_RANK
subject: databases-sql
aliases: []
related: [RANK, Window Function, ROW_NUMBER, OVER, PARTITION BY]
source_folder: databases-sql
ai_drafted: true
---

A [[Window Function]] that ranks rows without gaps after ties: 1, 2, 2, 3, 4. [[RANK]] leaves gaps instead: 1, 2, 2, 4, 5.

```sql
SELECT title, rental_rate,
  DENSE_RANK() OVER (ORDER BY rental_rate DESC) AS rate_rank
FROM film;
```

## When to use

Covered only in the reading's window-functions section. No past-paper or problem-set question uses it.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
