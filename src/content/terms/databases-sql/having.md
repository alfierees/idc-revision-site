---
title: HAVING
subject: databases-sql
aliases: []
related: ["WHERE", "GROUP BY", "Aggregate Function", "Logical Order of Execution"]
source_folder: databases-sql
ai_drafted: true
---

Filters groups after GROUP BY has run, so unlike WHERE it can test an aggregate such as `COUNT(...)` or `MIN(...)`.

```sql
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100;
```

## When to use

The classic exam answer is timing: WHERE filters raw rows before grouping, HAVING filters grouped data after it (PP 05 Q2, PP 01 Q4.3, PP 03 Q4.3). PP 04 Q1.4 adds HAVING to keep products with an OrderCount above 4; PS 03 uses `HAVING AVG(f.rental_rate) > 3.5`.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
