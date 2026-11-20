---
title: Aggregate Function
subject: databases-sql
aliases: ["Aggregate Functions"]
related: [COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, WHERE]
source_folder: databases-sql
ai_drafted: true
---

A function that summarises many rows into one value: [[COUNT]], [[SUM]], [[AVG]], [[MIN]] and [[MAX]]. It is evaluated after grouping, so it cannot appear in [[WHERE]].

```sql
SELECT rating, AVG(rental_rate)
FROM film
GROUP BY rating
HAVING AVG(rental_rate) > 3;
```

## When to use

Used in PS 03 (average rental rate per film, totals per city) and in PP 01 Q4 and PP 02 Q4, where a condition on an aggregate such as a sum must go in [[HAVING]] rather than [[WHERE]].

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
