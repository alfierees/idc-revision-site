---
title: Correlated Subquery
subject: databases-sql
aliases: []
related: [Subquery, EXISTS, Scalar Subquery]
source_folder: databases-sql
ai_drafted: true
---

A [[Subquery]] that references a column of the outer query, so it is re-evaluated for each outer row.

```sql
SELECT title FROM film f
WHERE rental_rate > (
  SELECT AVG(rental_rate) FROM film f2
  WHERE f2.rating = f.rating
);
```

## When to use

In the reading: films above the average rental rate for their own rating, and `EXISTS` for films that have been rented. By contrast, PS 04 Q3's subquery does not depend on the outer query, so it is not correlated.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
