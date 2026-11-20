---
title: IN
subject: databases-sql
aliases: []
related: ["NOT", "EXISTS", "Subquery", "NULL"]
source_folder: databases-sql
ai_drafted: true
---

A condition that matches any value in a list or in a subquery result, such as `rating IN ('PG', 'G')`. Its negation, NOT IN, returns no rows at all if the subquery yields even one NULL.

```sql
SELECT title FROM film
WHERE rating IN ('PG', 'G');
```

## When to use

Not asked in the past papers or problem sets. Read 01 uses it for lists and for subqueries like `film_id IN (SELECT film_id FROM inventory)`; the CHECK example there is `CHECK (rating_check IN ('G', 'PG', 'R'))`.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
