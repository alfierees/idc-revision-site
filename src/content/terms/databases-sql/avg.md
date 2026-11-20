---
title: AVG
subject: databases-sql
aliases: []
related: [Aggregate Function, "NULL", GROUP BY, HAVING]
source_folder: databases-sql
ai_drafted: true
---

An [[Aggregate Function]] giving the mean of the values, ignoring [[NULL]]s. So with NULLs present it is not the sum divided by the row count.

```sql
SELECT rating, AVG(rental_rate) AS avg_rate
FROM film
GROUP BY rating;
```

## When to use

PS 03 Q1 filters films with `HAVING AVG(rental_rate) > 3.5`, and PS 04 Q1 nests AVG over per-customer rental counts using a [[Derived Table]].

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
