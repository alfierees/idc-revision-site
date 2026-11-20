---
title: JOIN
subject: databases-sql
aliases: ["Joins"]
related: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN", "FULL OUTER JOIN", "Foreign Key"]
source_folder: databases-sql
ai_drafted: true
---

Combines rows from two or more tables using a matching condition. Read 01 notes that JOIN is really part of the FROM step rather than a separate stage.

```sql
SELECT f.title, i.inventory_id
FROM film f
JOIN inventory i ON f.film_id = i.film_id;
```

## When to use

PS 03 and PS 04 build multi-table joins on Sakila by following foreign keys one hop at a time, for example store to inventory to rental to payment. PP 02 and PP 03 ask for the join type and the row count.

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
