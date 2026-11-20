---
title: Junction Table
subject: databases-sql
aliases: []
related: ["Many-to-Many Relationship", "Foreign Key", "Composite Primary Key", "One-to-Many Relationship"]
source_folder: databases-sql
ai_drafted: true
---

A table holding two foreign keys that resolves a many-to-many relationship into two one-to-many ones. Its primary key is often composite, made of the two foreign keys.

## When to use

PP 02 Q1.4 asks how to turn a one-to-many link into many-to-many: add an intermediary table with two foreign keys. PP 04 Q2 does the same with books and authors. PS 01 resolves patient-treatment and doctor-treatment this way.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
