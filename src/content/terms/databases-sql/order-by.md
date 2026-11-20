---
title: ORDER BY
subject: databases-sql
aliases: []
related: [SELECT, WHERE, GROUP BY]
source_folder: databases-sql
ai_drafted: true
---

Sorts the final result by one or more columns, ascending by default or descending with `DESC`.

```sql
ORDER BY rental_rate DESC
```

## When to use

Used in PS 03 to sort grouped results by an alias (`ORDER BY avg_rental_rate DESC`) and in PS 04 to list the most active customers first. It comes at the end of the query, just before the row limit.

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
