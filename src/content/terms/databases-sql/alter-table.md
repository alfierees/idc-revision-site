---
title: ALTER TABLE
subject: databases-sql
aliases: []
related: [CREATE TABLE, DROP TABLE, Constraint, DDL]
source_folder: databases-sql
ai_drafted: true
---

A [[DDL]] statement that changes an existing table, for example adding or dropping a column, or adding a [[Constraint]].

```sql
ALTER TABLE tour
  ADD CONSTRAINT uq_tour_title UNIQUE (title);
```

## When to use

PP 02 Q1.2 adds a UNIQUE constraint to `car.owner_id`, and PP 04 Q2 adds NOT NULL, UNIQUE and CHECK constraints to the tour and guide tables, all with ALTER TABLE.

See [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]].
