---
title: SET NULL
subject: databases-sql
aliases: []
related: [Foreign Key, Referential Integrity, ON DELETE CASCADE, RESTRICT]
source_folder: databases-sql
ai_drafted: true
---

A referential action: when the parent row is deleted, the child's foreign key is set to NULL instead of deleting the child.

```sql
FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE SET NULL
```

## When to use

Choose it when children may exist without a parent. The foreign key column must allow NULL. Covered in the study guide.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
