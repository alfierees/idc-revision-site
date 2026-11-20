---
title: ROW_NUMBER
subject: databases-sql
aliases: []
related: [RANK, DENSE_RANK, Window Function, OVER]
source_folder: databases-sql
ai_drafted: true
---

A window function that gives each row a unique sequential number: 1, 2, 3, 4, 5, even when values tie.

```sql
ROW_NUMBER() OVER (PARTITION BY rating ORDER BY rental_rate DESC)
```

## When to use

Use it to number rows within each group, for instance to keep the first row per partition by wrapping the query in a CTE or subquery. The study guide notes window functions cannot go in `WHERE`.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
