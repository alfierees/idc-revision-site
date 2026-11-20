---
title: JOIN Fan-Out
subject: databases-sql
aliases: []
related: ["JOIN", "COUNT", "One-to-Many Relationship", "DISTINCT"]
source_folder: databases-sql
ai_drafted: true
---

Row multiplication that happens when you join one-to-many tables: each parent row appears once per matching child row, which inflates counts and sums if not handled.

## When to use

PS 04 counts rentals per store across store, inventory, rental and payment, and uses `COUNT(DISTINCT ...)` because joining rental to payment multiplies rows. PS 03 notes that after two joins a film appears once per rental of its copies.

See [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]].
