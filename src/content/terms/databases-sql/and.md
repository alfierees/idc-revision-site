---
title: AND
subject: databases-sql
aliases: []
related: [OR, NOT, WHERE]
source_folder: databases-sql
ai_drafted: true
---

A logical operator that is true only if all of its conditions hold. AND binds tighter than [[OR]], so brackets are only needed when you mean the OR to be evaluated first.

```sql
SELECT title FROM film
WHERE length > 100 AND rating = 'PG';
```

## When to use

Used in [[WHERE]] conditions such as the reading's `length > 100 AND rating = 'PG'`, and in the BETWEEN example `length BETWEEN 90 AND 120`, where the AND is part of [[BETWEEN]] itself.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
