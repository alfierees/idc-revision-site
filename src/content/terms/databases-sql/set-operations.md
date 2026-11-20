---
title: Set Operations
subject: databases-sql
aliases: []
related: [UNION, UNION ALL, INTERSECT, EXCEPT]
source_folder: databases-sql
ai_drafted: true
---

Operators that stack the results of two SELECT queries: [[UNION]] (removes duplicates), [[UNION ALL]] (keeps them), [[INTERSECT]] (rows in both) and [[EXCEPT]] (rows in the first but not the second). Both queries must return the same number of columns with compatible types, and the column names come from the first query.

```sql
SELECT first_name FROM customer WHERE customer_id < 10
UNION
SELECT first_name FROM customer WHERE customer_id > 590;
```

## When to use

In PP 01, `UNION` of a LEFT JOIN and a RIGHT JOIN builds a full outer join in MySQL. MySQL supports `INTERSECT` and `EXCEPT` only from version 8.0.31.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
