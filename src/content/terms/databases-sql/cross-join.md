---
title: CROSS JOIN
subject: databases-sql
aliases: []
related: [INNER JOIN, JOIN, Cardinality]
source_folder: databases-sql
ai_drafted: true
---

A Cartesian product: every left row is paired with every right row, so the result has rows(left) times rows(right) rows.

```sql
SELECT * FROM film CROSS JOIN category;
```

## When to use

PP 03 Q2.1: a query with no ON or USING clause is a CROSS JOIN even if written INNER JOIN, giving 6 x 3 = 18 rows. PP 02 asks for join row counts in the same way.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
