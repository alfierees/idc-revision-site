---
title: CREATE TABLE
subject: databases-sql
aliases: []
related: [Data Type, Constraint, Primary Key, Foreign Key, DDL]
source_folder: databases-sql
ai_drafted: true
---

A [[DDL]] statement that creates a table with its columns, [[Data Type]]s and [[Constraint]]s.

```sql
CREATE TABLE customer (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL
);
```

## When to use

PS 02 Q2 implements the restaurant ERD as MySQL CREATE TABLE statements with data types, primary and foreign keys and constraints. PP 03 Q5 gives the `author` table to reason about.

See [[PS_02-Restaurant Logical ERD & CREATE TABLE|PS 02]].
