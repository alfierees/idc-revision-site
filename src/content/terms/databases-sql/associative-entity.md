---
title: Associative Entity
subject: databases-sql
aliases: []
related: [Entity, Many-to-Many Relationship, Junction Table, Weak Entity]
source_folder: databases-sql
ai_drafted: true
---

An [[Entity]] that models a [[Many-to-Many Relationship]] and carries attributes of its own, for example Appointments between Patient and Doctor (date, reason, doctor notes).

## When to use

PS 01 asks for exactly one associative entity derived from an M:N relationship, with attributes. In the logical design it becomes a table with two foreign keys, the same pattern as a [[Junction Table]].

See [[PS_01-Hospital Patient System ERD|PS 01]].
