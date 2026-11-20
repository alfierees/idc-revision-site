---
title: UPDATE
subject: databases-sql
aliases: []
related: [DELETE, INSERT INTO, WHERE]
source_folder: databases-sql
ai_drafted: true
---

Modifies existing rows in a table.

```sql
UPDATE film SET rental_rate = rental_rate * 1.1 WHERE length > 120
```

## When to use

A DML command. Without a `WHERE` it changes every row. In PP 01 and PP 04 the point is that constraints reject an `INSERT` or `UPDATE` that would break them.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
