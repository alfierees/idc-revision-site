---
title: RANK
subject: databases-sql
aliases: []
related: [ROW_NUMBER, DENSE_RANK, Window Function, OVER]
source_folder: databases-sql
ai_drafted: true
---

A window function that ranks rows and leaves gaps after ties: 1, 2, 2, 4, 5.

```sql
RANK() OVER (PARTITION BY rating ORDER BY rental_rate DESC)
```

## When to use

Used for top-N within a group when ties should share a rank. The study guide contrasts it with [[ROW_NUMBER]] (no ties) and [[DENSE_RANK]] (no gaps).

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
