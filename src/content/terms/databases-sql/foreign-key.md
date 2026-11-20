---
title: Foreign Key
subject: databases-sql
aliases: []
related: ["Primary Key", "Referential Integrity", "Database Index", "Junction Table", "One-to-Many Relationship"]
source_folder: databases-sql
ai_drafted: true
---

A column that references a key in another table, linking each child row to a parent row. Read 01 corrects the common claim: a foreign key may reference any UNIQUE key, not only a primary key.

```sql
ALTER TABLE experiments
  ADD FOREIGN KEY (patient_id) REFERENCES patients (patient_id);
```

## When to use

PP 05 Q1 asks why to add one: it formalises the relationship and enforces [[Referential Integrity]], so no orphan child rows exist. PP 03 Q3 asks for its three mechanisms (the column, the constraint and the index).

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
