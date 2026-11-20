---
title: EXCEPT
subject: databases-sql
aliases: []
related: ["INTERSECT", "UNION", "UNION ALL", "IS NULL"]
source_folder: databases-sql
ai_drafted: true
---

Returns the rows of the first query that do not appear in the second. MySQL supports it only from version 8.0.31; the study guide notes that `MINUS` is the Oracle name for the same operation.

```sql
SELECT customer_id FROM customer
EXCEPT
SELECT customer_id FROM rental;
```

## When to use

Not asked in the past papers or problem sets, so it is a Read 01 keyword only. Use it when a question says "in the first set but not the second"; a LEFT JOIN with IS NULL (an anti-join) is the other way to get that result.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
