---
title: COMMIT
subject: databases-sql
aliases: []
related: [Transaction, ROLLBACK, ACID]
source_folder: databases-sql
ai_drafted: true
---

Saves all of a [[Transaction]]'s changes permanently. Its opposite is [[ROLLBACK]], which undoes them; permanence after COMMIT is the Durability in [[ACID]].

```sql
BEGIN;
UPDATE account SET balance = balance - 100 WHERE account_id = 1;
UPDATE account SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

## When to use

In the reading's example, two UPDATEs move 100 between accounts and COMMIT makes the transfer permanent; on error you run ROLLBACK instead.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
