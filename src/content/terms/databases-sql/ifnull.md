---
title: IFNULL
subject: databases-sql
aliases: []
related: ["COALESCE", "NULL", "NULLIF"]
source_folder: databases-sql
ai_drafted: true
---

A MySQL function that replaces a NULL with a given value, for example `IFNULL(phone, 'No Phone')`. The study guide warns that MySQL's `ISNULL(x)` only returns 1 or 0; the two-argument replacing form of ISNULL is SQL Server.

```sql
SELECT IFNULL(phone, 'No Phone') FROM customer;
```

## When to use

Not asked in the past papers or problem sets; it is a Read 01 keyword. Use it when an output should show a placeholder for missing values; COALESCE does the same job and takes more than two arguments.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
