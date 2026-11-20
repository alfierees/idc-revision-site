---
title: OFFSET
subject: databases-sql
aliases: []
related: ["LIMIT", "ORDER BY", "Logical Order of Execution"]
source_folder: databases-sql
ai_drafted: true
---

Skips the first N rows of the result and is normally paired with LIMIT for paging, as in `LIMIT 10 OFFSET 20`. It is MySQL and PostgreSQL syntax; standard SQL uses `FETCH FIRST n ROWS ONLY`.

```sql
SELECT title FROM film
ORDER BY title
LIMIT 10 OFFSET 20;
```

## When to use

Not asked in the past papers or problem sets; it appears in Read 01. It runs at the end of the logical order, together with LIMIT.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
