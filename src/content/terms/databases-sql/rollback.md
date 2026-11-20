---
title: ROLLBACK
subject: databases-sql
aliases: []
related: [Transaction, SAVEPOINT, COMMIT]
source_folder: databases-sql
ai_drafted: true
---

Undoes all changes made since the transaction began (or, with `ROLLBACK TO`, since a savepoint).

## When to use

Use it when a step in a [[Transaction]] fails, such as the second half of a money transfer, so the data returns to its earlier state. Covered in the study guide's transactions section only.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
