---
title: RIGHT JOIN
subject: databases-sql
aliases: []
related: [LEFT JOIN, INNER JOIN, FULL OUTER JOIN, UNION]
source_folder: databases-sql
ai_drafted: true
---

A join that keeps all rows from the right table plus the matching rows from the left, with NULLs on the left where nothing matches.

## When to use

In PP 01 and PP 04 you state how many rows each join type returns; a RIGHT JOIN needs the right table's size. MySQL has no FULL OUTER JOIN, so PP 01 builds one from a LEFT JOIN and a RIGHT JOIN combined with [[UNION]].

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
