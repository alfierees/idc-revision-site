---
title: Referential Integrity
subject: databases-sql
aliases: []
related: [Foreign Key, Primary Key, ON DELETE CASCADE, RESTRICT, SET NULL]
source_folder: databases-sql
ai_drafted: true
---

The rule that every [[Foreign Key]] value must exist in the parent table (or be NULL), so there are no orphan rows.

## When to use

Asked as "what is a foreign key for?" in PP 01 and PP 05 (the payoff is no missing or orphan parent values), and it appears in PP 02 and PP 03. The referential actions ([[ON DELETE CASCADE]], [[SET NULL]], [[RESTRICT]]) say what happens when a parent row is deleted or changed.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
