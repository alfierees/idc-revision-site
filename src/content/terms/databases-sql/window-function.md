---
title: Window Function
subject: databases-sql
aliases: ["Window Functions"]
related: [OVER, PARTITION BY, ROW_NUMBER, RANK, GROUP BY]
source_folder: databases-sql
ai_drafted: true
---

A calculation across a set of related rows that does not collapse them into one row, unlike `GROUP BY`.

## When to use

Use it for ranking, running totals, and comparing with the previous or next row (`LAG`, `LEAD`). The window is defined with [[OVER]]. It needs MySQL 8.0 and cannot appear in `WHERE`.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
