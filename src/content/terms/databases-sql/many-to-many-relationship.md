---
title: Many-to-Many Relationship
subject: databases-sql
aliases: []
related: ["Junction Table", "One-to-Many Relationship", "Foreign Key", "Cardinality"]
source_folder: databases-sql
ai_drafted: true
---

A relationship where rows on both sides can relate to many rows on the other side. It cannot be stored with a single foreign key, so it is resolved with a junction table.

## When to use

PP 02 Q1.4 and PP 04 Q2 ask how to implement it: add a third table with two foreign keys. PP 03 Q4.2 rules it out as the answer when a query involves only two tables.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
