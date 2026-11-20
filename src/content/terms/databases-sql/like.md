---
title: LIKE
subject: databases-sql
aliases: []
related: ["NOT", "Database Index", "WHERE"]
source_folder: databases-sql
ai_drafted: true
---

A pattern match on text using `%` for any run of characters and `_` for exactly one character. Read 01 notes that `LIKE '%term%'` (leading wildcard) cannot use a normal index, while `LIKE 'term%'` can.

```sql
SELECT title FROM film
WHERE title LIKE 'A%';
```

## When to use

Not asked in the past papers or problem sets. Use it for partial text matches, as in `title NOT LIKE '%War%'` in Read 01.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
