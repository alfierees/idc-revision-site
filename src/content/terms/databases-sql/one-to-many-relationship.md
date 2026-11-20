---
title: One-to-Many Relationship
subject: databases-sql
aliases: []
related: [Foreign Key, Primary Key, Relationship]
source_folder: databases-sql
ai_drafted: true
---

One row on the parent side relates to many rows on the child side. It is implemented by putting a [[Foreign Key]] in the child table that points at the parent's [[Primary Key]].

## When to use

In PP 02 the foreign key sits on the "many" side of each one-to-many relationship (the `grade` table in the official answer), and PP 03 rules out one-to-many versus many-to-many by counting tables. One customer with many rentals is the course's standard example.

See [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]].
