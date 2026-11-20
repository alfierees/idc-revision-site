---
title: INTERSECT
subject: databases-sql
aliases: []
related: ["EXCEPT", "UNION", "UNION ALL"]
source_folder: databases-sql
ai_drafted: true
---

Returns the rows that appear in both queries. MySQL supports it only from version 8.0.31.

```sql
SELECT customer_id FROM rental
INTERSECT
SELECT customer_id FROM payment;
```

## When to use

Not asked in the past papers or problem sets; it is a Read 01 keyword. It sits with UNION and EXCEPT as a set operation between two SELECT results.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
