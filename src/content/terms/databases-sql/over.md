---
title: OVER
subject: databases-sql
aliases: []
related: [Window Function, PARTITION BY, ROW_NUMBER, RANK]
source_folder: databases-sql
ai_drafted: true
---

The clause that turns a function into a [[Window Function]] by defining the window it works over, using [[PARTITION BY]] and an `ORDER BY`.

```sql
SUM(amount) OVER (ORDER BY payment_date) AS running_total
```

## When to use

Needed whenever you rank rows or compute a running total without collapsing them. The study guide's examples are a rank within each rating and a running total of payments.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
