---
title: SAVEPOINT
subject: databases-sql
aliases: []
related: [Transaction, ROLLBACK, COMMIT]
source_folder: databases-sql
ai_drafted: true
---

A checkpoint set inside a transaction, so you can roll back to it without undoing the whole transaction.

```sql
SAVEPOINT after_first_update;
ROLLBACK TO after_first_update;
```

## When to use

Used with `ROLLBACK TO` to undo only part of a [[Transaction]]. Covered in the study guide's transactions section only.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
