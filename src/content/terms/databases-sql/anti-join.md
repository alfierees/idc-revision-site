---
title: Anti-Join
subject: databases-sql
aliases: []
related: [LEFT JOIN, IS NULL, NOT, Subquery]
source_folder: databases-sql
ai_drafted: true
---

A query pattern that finds rows with no match in another table: [[LEFT JOIN]] to the other table, then keep only rows where the right-hand key [[IS NULL]].

```sql
SELECT f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;
```

## When to use

Appears in the reading as 'films never rented'. The same question can also be answered with `NOT IN` or `NOT EXISTS` on a [[Subquery]]; the reading warns that NOT IN misbehaves if the subquery returns NULLs.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
