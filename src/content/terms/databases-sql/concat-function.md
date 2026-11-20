---
title: CONCAT Function
subject: databases-sql
aliases: []
related: [Alias, SELECT]
source_folder: databases-sql
ai_drafted: true
---

Joins strings into one, for example first and last name with a space between.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;
```

## When to use

PS 03 builds `staff_name` and PS 04 builds `full_name` and `customer_name`, each time with CONCAT followed by an [[Alias]].

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
