---
title: FULL OUTER JOIN
subject: databases-sql
aliases: []
related: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "UNION"]
source_folder: databases-sql
ai_drafted: true
---

A join that keeps all rows from both tables: matched pairs, plus unmatched rows from each side with NULLs on the other. MySQL has no `FULL OUTER JOIN` keyword, so it is emulated as a LEFT JOIN combined with a RIGHT JOIN using UNION.

```sql
SELECT * FROM a LEFT JOIN b ON a.id = b.a_id
UNION
SELECT * FROM a RIGHT JOIN b ON a.id = b.a_id;
```

## When to use

PP 01 Q3.2 asks which two queries combine to make one in MySQL (a left join and a right join). In the join-count questions (PP 03 Q2.4, PP 04 Q3.5) the row count cannot be known without the match counts.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
