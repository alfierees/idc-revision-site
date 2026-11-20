---
title: Transaction
subject: databases-sql
aliases: ["Transactions"]
related: [COMMIT, ROLLBACK, SAVEPOINT]
source_folder: databases-sql
ai_drafted: true
---

A sequence of SQL operations treated as one unit of work: all of it is saved, or none of it.

## When to use

Used for steps that must succeed together, such as moving money between two accounts. It starts with `BEGIN` or `START TRANSACTION` and ends with [[COMMIT]] or [[ROLLBACK]].

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
