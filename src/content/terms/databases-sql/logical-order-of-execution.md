---
title: Logical Order of Execution
subject: databases-sql
aliases: []
related: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY", "LIMIT"]
source_folder: databases-sql
ai_drafted: true
---

The order in which SQL evaluates a query, which differs from the order it is written: FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT. Read 01 corrects the simplification: JOIN is part of the FROM step, and DISTINCT runs after SELECT.

## When to use

It is the explanation behind the WHERE vs HAVING answer (PP 05 Q2, PP 01 Q4.3, PP 03 Q4.3). It also explains why a SELECT alias cannot be used in WHERE; MySQL allows it in GROUP BY and HAVING.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
