---
title: MAX
subject: databases-sql
aliases: []
related: ["MIN", "Aggregate Function", "GROUP BY", "HAVING"]
source_folder: databases-sql
ai_drafted: true
---

An aggregate function that returns the highest value in a group, for example `MAX(length)`. It ignores NULLs.

```sql
SELECT MAX(length) FROM film;
```

## When to use

Not asked directly in the past papers; it is one of the five aggregates (COUNT, SUM, AVG, MIN, MAX) and, like MIN, is allowed in HAVING but not in WHERE (PP 01 Q4.3).

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
