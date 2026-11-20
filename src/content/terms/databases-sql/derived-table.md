---
title: Derived Table
subject: databases-sql
aliases: []
related: [Subquery, Alias, Common Table Expression, FROM]
source_folder: databases-sql
ai_drafted: true
---

A [[Subquery]] in the [[FROM]] clause that is treated as a temporary table. MySQL requires it to have an [[Alias]].

```sql
SELECT AVG(rental_count)
FROM (
  SELECT COUNT(rental_id) AS rental_count
  FROM rental GROUP BY customer_id
) AS customer_rentals;
```

## When to use

PS 04 Q1: the inner query counts rentals per customer and is wrapped as `AS customer_rentals`, so `AVG(rental_count)` can average those counts.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
