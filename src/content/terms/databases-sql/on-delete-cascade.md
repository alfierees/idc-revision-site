---
title: ON DELETE CASCADE
subject: databases-sql
aliases: []
related: [Foreign Key, Referential Integrity, SET NULL, RESTRICT]
source_folder: databases-sql
ai_drafted: true
---

A referential action on a foreign key: when a parent row is deleted, the child rows that reference it are deleted automatically.

```sql
FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
```

## When to use

Use it when child rows make no sense without their parent, for example rentals that belong to a customer. The study guide's `rental` table declares it with `ON DELETE CASCADE`. Its sibling actions are [[SET NULL]] and [[RESTRICT]].

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
