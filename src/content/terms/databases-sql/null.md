---
title: "NULL"
subject: databases-sql
aliases: ["NULL Handling"]
related: ["IS NULL", "IS NOT NULL", "NOT NULL Constraint", "COALESCE", "COUNT"]
source_folder: databases-sql
ai_drafted: true
---

A marker for a missing or unknown value. It is not equal to anything, not even another NULL, so test it with IS NULL rather than `=`.

## When to use

PP 04 Q4.5 asks what problem NULL solved: before it, people used 0, -1 or -99999 for missing data, which caused mistakes. PP 04 Q1 shows COUNT(column) skips NULLs; PP 05 Q3 shows a nullable column defaults to NULL when omitted from an INSERT.

See [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]].
