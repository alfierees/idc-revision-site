---
title: BETWEEN
subject: databases-sql
aliases: []
related: [AND, WHERE]
source_folder: databases-sql
ai_drafted: true
---

An inclusive range test: `x BETWEEN a AND b` is true when x equals a, equals b, or lies between them.

```sql
SELECT title FROM film
WHERE length BETWEEN 90 AND 120;
```

## When to use

The reading's exam tips list 'BETWEEN is inclusive' as a classic trap, with the example `rental_rate BETWEEN 2 AND 5` keeping both 2 and 5. Used inside [[WHERE]].

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
