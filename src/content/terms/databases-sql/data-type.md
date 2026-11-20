---
title: Data Type
subject: databases-sql
aliases: []
related: [CREATE TABLE, Attribute, CAST]
source_folder: databases-sql
ai_drafted: true
---

The kind of value a column stores (INT, VARCHAR, DATE, DECIMAL and so on), chosen when the table is created.

## When to use

PS 02 requires data types on every attribute in the logical ERD and CREATE TABLE statements, for example VARCHAR rather than INT for `phone_number`, which may contain a plus sign or leading zeros. Use [[CAST]] to convert between types.

See [[PS_02-Restaurant Logical ERD & CREATE TABLE|PS 02]].
