---
title: LIMIT
subject: databases-sql
aliases: []
related: ["OFFSET", "ORDER BY", "Scalar Subquery", "Logical Order of Execution"]
source_folder: databases-sql
ai_drafted: true
---

Restricts how many rows a query returns; it goes at the very end of the query, after ORDER BY. `LIMIT` is MySQL and PostgreSQL; SQL Server uses `TOP`.

```sql
SELECT title FROM film
ORDER BY length DESC
LIMIT 5;
```

## When to use

PS 03 ends a query with `LIMIT 5` to return the top five films. PS 04 uses `ORDER BY COUNT(film_id) DESC LIMIT 1` in a scalar subquery to find the most-featured actor; it has no tie-breaker, so a tie would return an arbitrary actor.

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
