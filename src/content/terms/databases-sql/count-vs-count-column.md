---
title: COUNT(*) vs COUNT(column)
subject: databases-sql
aliases: []
related: [COUNT, "NULL", Aggregate Function]
source_folder: databases-sql
ai_drafted: true
---

`COUNT(*)` counts every row; `COUNT(column)` skips rows where that column is [[NULL]].

```sql
SELECT COUNT(*), COUNT(return_date)
FROM rental;
```

## When to use

The reading calls this a critical exam trap. Its example: `COUNT(*)`, `COUNT(return_date)` and `COUNT(DISTINCT customer_id)` on `rental` give three different numbers. PS 04 Q2 also compares total rentals with distinct ones.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
