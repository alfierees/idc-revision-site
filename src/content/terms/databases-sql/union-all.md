---
title: UNION ALL
subject: databases-sql
aliases: []
related: [UNION, INTERSECT, EXCEPT]
source_folder: databases-sql
ai_drafted: true
---

Combines two SELECT results and keeps duplicates, which makes it faster than [[UNION]].

```sql
SELECT id FROM table1
UNION ALL
SELECT id FROM table2
```

## When to use

Choose it when duplicates are wanted or cannot occur. Both queries need the same number of columns with compatible types, and column names come from the first query.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
