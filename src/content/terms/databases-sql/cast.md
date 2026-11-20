---
title: CAST
subject: databases-sql
aliases: []
related: [Data Type, COALESCE]
source_folder: databases-sql
ai_drafted: true
---

Converts a value to another [[Data Type]], for example `CAST(rental_rate AS DECIMAL(5,2))`. The reading also lists MySQL's `CONVERT`.

```sql
SELECT CAST('123' AS SIGNED);
```

## When to use

The reading suggests casting a date to text before mixing it with a string in [[COALESCE]], since stricter databases reject that mix. No past-paper question uses it.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
