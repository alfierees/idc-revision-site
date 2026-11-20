---
title: NOT NULL Constraint
subject: databases-sql
aliases: ["NOT NULL"]
related: ["NULL", "Constraint", "Foreign Key", "DEFAULT Constraint", "INSERT INTO"]
source_folder: databases-sql
ai_drafted: true
---

A constraint saying the column may not hold NULL, so a value is required.

```sql
ALTER TABLE tour
  MODIFY guide_id INT NOT NULL;
```

## When to use

PP 04 Q2.3 adds NOT NULL to the foreign key `tour.guide_id` so every tour has exactly one guide (`MODIFY guide_id INT NOT NULL`). PP 03 Q5 turns on it: a NOT NULL column with no default must be supplied in an INSERT. PP 05 Q3 shows nullable columns are optional.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
