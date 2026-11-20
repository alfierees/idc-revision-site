---
title: CASE
subject: databases-sql
aliases: []
related: [SELECT, COALESCE]
source_folder: databases-sql
ai_drafted: true
---

An if-else expression inside a query: `WHEN` states the condition, `THEN` the result, `ELSE` the default, and `END` closes it.

```sql
SELECT title,
  CASE
    WHEN rental_rate < 2 THEN 'Cheap'
    ELSE 'Expensive'
  END AS price_category
FROM film;
```

## When to use

Covered in the reading's CASE section (searched and simple forms) and its practice questions, used in [[SELECT]] to label rows. No past paper or problem-set question in this course uses it.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
