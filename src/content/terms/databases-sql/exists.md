---
title: EXISTS
subject: databases-sql
aliases: []
related: ["IN", "Subquery", "Correlated Subquery", "NULL"]
source_folder: databases-sql
ai_drafted: true
---

A condition that is true if the subquery returns at least one row. It is usually written with a correlated subquery, as in `WHERE EXISTS (SELECT 1 FROM rental WHERE ...)`.

```sql
SELECT f.title FROM film f
WHERE EXISTS (SELECT 1 FROM inventory i WHERE i.film_id = f.film_id);
```

## When to use

Not asked in the past papers or problem sets. In Read 01 it is the safer alternative to `NOT IN`, which returns no rows at all if the subquery yields even one NULL.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
