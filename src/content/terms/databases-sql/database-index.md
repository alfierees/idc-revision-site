---
title: Database Index
subject: databases-sql
aliases: ["Index", "Indexes"]
related: ["Foreign Key", "Primary Key", "JOIN"]
source_folder: databases-sql
ai_drafted: true
---

A lookup structure on a column that makes reads and joins faster at the cost of slower writes. PP 04 calls it a second, sorted copy of the column.

## When to use

PP 04 Q4.1 asks for the cost of an index: it slows writing to the column, because it must be refreshed whenever a value changes. PP 03 Q3.1 names it as the third mechanism of a foreign key, where it speeds up joins on the FK column.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
