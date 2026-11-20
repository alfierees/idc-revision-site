---
title: RESTRICT
subject: databases-sql
aliases: []
related: [Foreign Key, Referential Integrity, ON DELETE CASCADE, SET NULL]
source_folder: databases-sql
ai_drafted: true
---

A referential action that blocks deleting or changing a parent row while child rows still reference it.

```sql
FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE RESTRICT
```

## When to use

Choose it when a parent should never disappear while it still has children. The study guide says `NO ACTION` is similar in MySQL, though in standard SQL the check is deferred to the end of the statement.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
