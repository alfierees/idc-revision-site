---
title: SUM
subject: databases-sql
aliases: []
related: [Aggregate Function, GROUP BY, AVG]
source_folder: databases-sql
ai_drafted: true
---

An aggregate function that adds up numeric values, ignoring NULLs.

```sql
SELECT city, SUM(amount) FROM payment GROUP BY city
```

## When to use

Used in PS 03 (total paid per city) and PS 04 (total revenue per customer), almost always with `GROUP BY`. Because it ignores NULLs, unpaid rentals add 0.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
