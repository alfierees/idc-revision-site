---
title: WHERE
subject: databases-sql
aliases: []
related: [HAVING, GROUP BY, Aggregate Function, SELECT]
source_folder: databases-sql
ai_drafted: true
---

Filters individual rows before grouping, so it cannot use aggregate functions.

```sql
WHERE length > 120
```

## When to use

PP 01 and PP 05 ask for "WHERE versus HAVING": a condition on an aggregate needs [[HAVING]]; a condition on single rows goes in `WHERE`. Because it runs before `SELECT`, it cannot use a `SELECT` alias.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
