---
title: DELETE
subject: databases-sql
aliases: []
related: [DML, DROP TABLE, TRUNCATE TABLE, WHERE, UPDATE]
source_folder: databases-sql
ai_drafted: true
---

A [[DML]] statement that removes rows from a table. It deletes data, not structure: [[DROP TABLE]] removes the table itself, and [[TRUNCATE TABLE]] removes all rows but keeps the table.

```sql
DELETE FROM rental
WHERE rental_id = 1;
```

## When to use

The reading's exam tips list 'DELETE removes data, DROP removes structure'. It also warns that DELETE or [[UPDATE]] without [[WHERE]] hits every row.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
