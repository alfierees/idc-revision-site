---
title: COUNT
subject: databases-sql
aliases: []
related: [Aggregate Function, COUNT(*) vs COUNT(column), DISTINCT, GROUP BY]
source_folder: databases-sql
ai_drafted: true
---

An [[Aggregate Function]] that counts rows or non-NULL values; `COUNT(DISTINCT col)` counts unique values.

```sql
SELECT customer_id, COUNT(rental_id)
FROM rental
GROUP BY customer_id;
```

## When to use

PS 04 uses `COUNT(rental_id)` for rentals per customer and `COUNT(DISTINCT rental_id)` after joins that repeat rows (see [[JOIN Fan-Out]]). See [[COUNT(*) vs COUNT(column)]] for the NULL trap.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
