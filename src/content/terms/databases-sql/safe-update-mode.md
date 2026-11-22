---
title: "Safe Update Mode"
subject: databases-sql
aliases: []
related: ["UPDATE", "DELETE", "TRUNCATE TABLE"]
source_folder: databases-sql
ai_drafted: true
---

A MySQL setting that only allows UPDATE and DELETE to change data by key, preventing accidental mass changes.

## When to use

It explains why Workbench rejects an UPDATE filtered on a non-key column. TRUNCATE is not protected by it. Taught in [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]].
