---
title: "Full Table Scan"
subject: databases-sql
aliases: []
related: ["Database Index", "LIKE"]
source_folder: databases-sql
ai_drafted: true
---

Reading a table from start to finish to answer a query instead of using an index.

## When to use

It happens with no usable index, on very small tables, or with a leading wildcard such as LIKE '%n'. Taught in [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]].
