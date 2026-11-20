---
title: GROUP BY
subject: databases-sql
aliases: ["GROUP BY / HAVING"]
related: ["HAVING", "WHERE", "Aggregate Function", "COUNT", "Logical Order of Execution"]
source_folder: databases-sql
ai_drafted: true
---

Collapses rows into one group per distinct value of the listed columns, so aggregate functions are computed per group. Every non-aggregated column in SELECT must appear in it.

```sql
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id;
```

## When to use

PP 01 Q4 and PP 03 Q4.3 explain its role (building groups from raw rows, between WHERE and HAVING). PS 03 groups by `f.film_id, f.title`, using the key as well as the title because two films could share a title.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
