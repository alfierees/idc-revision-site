---
title: AUTO_INCREMENT
subject: databases-sql
aliases: []
related: [Primary Key, INSERT INTO, DEFAULT Constraint, CREATE TABLE]
source_folder: databases-sql
ai_drafted: true
---

A MySQL column attribute that generates the next numeric id automatically, normally on a [[Primary Key]]. When you omit the column in an [[INSERT INTO]], the server fills it in (1, 2, ...).

```sql
CREATE TABLE author (
  author_id INT PRIMARY KEY AUTO_INCREMENT
);
```

## When to use

PP 03 Q5 uses `author_id INT PRIMARY KEY AUTO_INCREMENT`, so every INSERT may leave `author_id` out. PS 02 uses it for `customer_id`. It is MySQL specific; standard SQL uses `GENERATED ... AS IDENTITY`.

See [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]].
