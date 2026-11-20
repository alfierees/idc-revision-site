---
title: Alias
subject: databases-sql
aliases: [AS]
related: [SELECT, Derived Table]
source_folder: databases-sql
ai_drafted: true
---

A temporary name for a column or table, given with the AS keyword, for example `AVG(rental_rate) AS avg_rate` or `FROM film f`. Because [[WHERE]] runs before [[SELECT]], an alias defined in SELECT cannot be used in WHERE.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer c;
```

## When to use

Used throughout PS 03 and PS 04 (`f` for film, `AS full_name`), and MySQL requires one on a [[Derived Table]] (`AS customer_rentals` in PS 04 Q1).

See [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]].
