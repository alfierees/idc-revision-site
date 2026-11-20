---
title: IS NULL
subject: databases-sql
aliases: []
related: ["NULL", "IS NOT NULL", "LEFT JOIN", "Anti-Join"]
source_folder: databases-sql
ai_drafted: true
---

Tests whether a value is NULL, as in `WHERE return_date IS NULL`. Never use `= NULL`, because `NULL = NULL` evaluates to NULL, not TRUE.

```sql
SELECT * FROM rental
WHERE return_date IS NULL;
```

## When to use

Read 01 uses it for the anti-join: LEFT JOIN, then `WHERE r.rental_id IS NULL`, to find rows with no match. It also corrects the guide's claim that IS NULL on the right table turns a LEFT JOIN into an inner join; it actually keeps the unmatched rows.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
