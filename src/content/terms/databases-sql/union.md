---
title: UNION
subject: databases-sql
aliases: []
related: [UNION ALL, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN]
source_folder: databases-sql
ai_drafted: true
---

Combines two SELECT results and removes duplicate rows.

```sql
SELECT * FROM a LEFT JOIN b ON a.id = b.id
UNION
SELECT * FROM a RIGHT JOIN b ON a.id = b.id
```

## When to use

In PP 01 it builds a full outer join in MySQL: matched rows appear in both the LEFT JOIN and RIGHT JOIN results, and `UNION` removes the duplicate copies so each matched row shows once.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
