---
title: UNIQUE Constraint
subject: databases-sql
aliases: [UNIQUE]
related: [Primary Key, NOT NULL Constraint, CHECK Constraint]
source_folder: databases-sql
ai_drafted: true
---

A constraint that stops two rows sharing a value in the column (or column combination). NULLs are normally still allowed.

```sql
email VARCHAR(100) UNIQUE
```

## When to use

In PP 01 `UNIQUE` and `NOT NULL` are the constraints in the official answer, and PP 04 uses it to show that two separate `UNIQUE` constraints would wrongly stop an author writing two books, where one constraint over the pair is needed.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
