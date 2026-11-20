---
title: DISTINCT
subject: databases-sql
aliases: []
related: [UNIQUE Constraint, SELECT, COUNT]
source_folder: databases-sql
ai_drafted: true
---

Removes duplicate rows from a query's result.

```sql
SELECT DISTINCT rating FROM film;
```

## When to use

PP 04 Q4.4 contrasts it with UNIQUE: DISTINCT removes duplicates from a SELECT result (DML), whereas [[UNIQUE Constraint]] stops duplicates being entered into a column (DDL). PS 04 uses `COUNT(DISTINCT rental_id)` after joins that multiply rows.

See [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]].
