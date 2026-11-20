---
title: Common Table Expression
subject: databases-sql
aliases: ["CTE"]
related: [Derived Table, Subquery, View]
source_folder: databases-sql
ai_drafted: true
---

A named temporary result set defined with WITH that the main query can use like a table, to break a complex query into readable steps.

```sql
WITH expensive_films AS (
  SELECT film_id, title FROM film WHERE rental_rate > 4
)
SELECT title FROM expensive_films;
```

## When to use

Covered in the reading (the `expensive_films` example). It plays the role a [[Derived Table]] plays in PS 04 Q1, but is declared first and named. No past-paper question requires it.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
