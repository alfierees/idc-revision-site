---
title: Subquery
subject: databases-sql
aliases: ["Subqueries"]
related: [Scalar Subquery, WHERE, INNER JOIN]
source_folder: databases-sql
ai_drafted: true
---

A query nested inside another query. It can return one value, a list (used with `IN`), or be checked with `EXISTS`.

```sql
WHERE customer_id IN (SELECT DISTINCT customer_id FROM rental)
```

## When to use

PS 04 is built on nested queries over Sakila. The study guide warns that `NOT IN (subquery)` returns no rows if the subquery yields a NULL, and that "joins are faster than subqueries" is only a rule of thumb.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
