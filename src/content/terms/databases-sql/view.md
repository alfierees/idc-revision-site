---
title: View
subject: databases-sql
aliases: ["Views / Indexes"]
related: [SELECT, Subquery]
source_folder: databases-sql
ai_drafted: true
---

A stored query that behaves like a virtual table and holds no data of its own.

```sql
CREATE VIEW active_customers AS SELECT customer_id, first_name FROM customer
```

## When to use

Use it to save a complicated query under a name, then query it like a table. Covered in the study guide's views section.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
