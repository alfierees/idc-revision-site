---
title: CHECK Constraint
subject: databases-sql
aliases: [CHECK]
related: [Constraint, UNIQUE Constraint, NOT NULL Constraint]
source_folder: databases-sql
ai_drafted: true
---

A [[Constraint]] that requires every value in the column to satisfy a logical condition (predicate) written in the constraint. An INSERT or UPDATE where the predicate is not true is rejected.

```sql
ALTER TABLE guide
  ADD CONSTRAINT chk_guide_fee CHECK (fee >= 0);
```

## When to use

PP 04 Q2.5: guide fee must be positive or zero, answered with `UNSIGNED` or a CHECK with `Fee >= 0`. PP 02 Q3.1 lists it among the six constraint types. The reading notes CHECK is enforced only from MySQL 8.0.16.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
