---
title: DEFAULT Constraint
subject: databases-sql
aliases: [DEFAULT]
related: [Constraint, NOT NULL Constraint, INSERT INTO]
source_folder: databases-sql
ai_drafted: true
---

A [[Constraint]] that supplies a value when none is given. Unlike the other constraints, which make an INSERT or UPDATE fail on bad input, DEFAULT fixes the missing data.

```sql
title VARCHAR(32) NOT NULL DEFAULT ''
```

## When to use

PP 04 Q4.2 asks how DEFAULT differs from the other constraints. PP 03 Q5.2: `title VARCHAR(32) NOT NULL DEFAULT ''` lets an [[INSERT INTO]] leave `title` out, and it becomes the empty string.

See [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]].
