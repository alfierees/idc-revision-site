---
title: INNER JOIN
subject: databases-sql
aliases: []
related: ["JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN", "FULL OUTER JOIN"]
source_folder: databases-sql
ai_drafted: true
---

Returns only the rows that match in both tables. A plain `JOIN` is shorthand for it, and in MySQL `CROSS JOIN` with an ON condition behaves the same way.

```sql
SELECT f.title, i.inventory_id
FROM film f
INNER JOIN inventory i ON f.film_id = i.film_id;
```

## When to use

Join row counts: PP 02 Q2.3 asks whether the count of an INNER JOIN can be known (it depends on the data), and PP 04 Q3 does the same with fish and bicycles. PP 03 Q4 spots a plain `JOIN ... USING` as an inner join; PS 03 chains two inner joins from film to rental.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
