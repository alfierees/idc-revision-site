---
title: OR
subject: databases-sql
aliases: []
related: [WHERE, AND]
source_folder: databases-sql
ai_drafted: true
---

A condition operator that is true if at least one of the conditions holds.

```sql
WHERE rating = 'PG' OR rating = 'G'
```

## When to use

Used inside `WHERE` to accept alternatives, for example two ratings. In the study guide, `AND` binds tighter than `OR`, so brackets are needed when you mean `(a OR b) AND c`.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
