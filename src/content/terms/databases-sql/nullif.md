---
title: NULLIF
subject: databases-sql
aliases: []
related: ["IFNULL", "COALESCE", "NULL"]
source_folder: databases-sql
ai_drafted: true
---

Returns NULL if the two values are equal, otherwise returns the first, as in `NULLIF(value1, value2)`.

```sql
SELECT NULLIF(value1, value2) FROM t;
```

## When to use

Not asked in the past papers or problem sets; it is a Read 01 keyword. A common use is turning a placeholder value into NULL.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
