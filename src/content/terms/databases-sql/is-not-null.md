---
title: IS NOT NULL
subject: databases-sql
aliases: []
related: ["IS NULL", "NULL", "WHERE"]
source_folder: databases-sql
ai_drafted: true
---

Tests whether a value is present, as in `WHERE return_date IS NOT NULL`.

```sql
SELECT * FROM rental
WHERE return_date IS NOT NULL;
```

## When to use

Use it instead of `<> NULL`, which never matches. PP 04 Q5 shows why NULL handling matters: a scalar subquery returns NULL where an INNER JOIN would drop the row.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
