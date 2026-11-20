---
title: ON
subject: databases-sql
aliases: []
related: [INNER JOIN, LEFT JOIN, RIGHT JOIN]
source_folder: databases-sql
ai_drafted: true
---

The condition that says which rows of the two tables in a join belong together, usually a foreign key equal to a primary key.

```sql
FROM film f JOIN inventory i ON f.film_id = i.film_id
```

## When to use

Every join query needs it, as in PS 03 and PS 04 (Sakila joins). With a LEFT JOIN, a condition on the right table placed in `ON` keeps unmatched left rows, while the same condition in `WHERE` can remove them (the study guide's corrected warning).

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
