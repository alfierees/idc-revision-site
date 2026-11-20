---
title: SELECT
subject: databases-sql
aliases: ["SELECT Clauses"]
related: [FROM, WHERE, ORDER BY, Alias]
source_folder: databases-sql
ai_drafted: true
---

Chooses which columns or expressions appear in the output.

```sql
SELECT title, rental_rate
FROM film
```

## When to use

Starts every query in the course, for example PS 03 and PS 04. It is evaluated after `WHERE`, `GROUP BY` and `HAVING`, so an alias defined in `SELECT` cannot be used in `WHERE`.

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
