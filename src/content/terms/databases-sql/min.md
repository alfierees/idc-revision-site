---
title: MIN
subject: databases-sql
aliases: []
related: ["MAX", "Aggregate Function", "GROUP BY", "HAVING", "WHERE"]
source_folder: databases-sql
ai_drafted: true
---

An aggregate function that returns the lowest value in a group, for example `MIN(length)`. It ignores NULLs.

```sql
SELECT customer_id, MIN(amount)
FROM payment
GROUP BY customer_id
HAVING MIN(amount) > 1.9;
```

## When to use

PP 01 Q4.3 asks whether `WHERE MIN(amount) > 1.9` is an error. It is, because an aggregate needs a group to summarise, so the condition belongs in HAVING.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
