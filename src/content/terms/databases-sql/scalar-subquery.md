---
title: Scalar Subquery
subject: databases-sql
aliases: []
related: [Subquery, WHERE, AVG]
source_folder: databases-sql
ai_drafted: true
---

A [[Subquery]] that returns exactly one value, so it can be compared like a number.

```sql
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film)
```

## When to use

Used in PS 04 (nested queries on Sakila), typically in `WHERE` to compare against an aggregate such as the average rental rate.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
