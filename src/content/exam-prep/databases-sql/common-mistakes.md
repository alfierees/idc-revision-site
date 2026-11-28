---
title: "Common Mistakes"
subject: databases-sql
type: reference
description: "The traps the Databases & SQL questions are built on: the keyword that does not decide the join, counts that cannot be known, aggregates in WHERE, the empty string that is not NULL, UNIQUE on the wrong table, the minimum-children rule, and COUNT(*) after a LEFT JOIN."
course: Databases & SQL
semester: 1
year: 2
order: 5
tags:
  - databases-sql
  - exam-prep
  - mistakes
---

## Modelling and constraints

| Mistake | Why it's wrong | Check |
|---|---|---|
| Tables = entities, always | each many-to-many adds a junction table | 2025 A Q6: films and actors need 3 tables |
| The FK goes on the "one" side | it goes on the **many** side (the child) | 2024 A (3437) Q1.2: all 3 FKs in `grade` |
| "Every parent has at least one child" with NOT NULL | NOT NULL on the FK gives every **child** a parent; nothing forces a parent to have children | 2024 B Q1.3, 2026 A Q9: impossible |
| UNIQUE on the parent's column for "at most one child" | the rule lives on the **FK column** in the child | 2024 B Q1.2 |
| A constraint applies to a table or the database | constraints apply to **one or more columns** | 2024 A Q1.3 |
| DEFAULT can reject bad input | DEFAULT is the one constraint that never fails a write | 2025 B Q2.4 |
| PK = UNIQUE | PK also forbids NULL and there is only one | 2026 A Q10 |
| A surrogate PK on a junction table stops repeated pairs | only the composite PK (or `UNIQUE (a, b)`) does | undated Moed B Q6 |
| A FK is just a column | it is a column, a constraint and an index | 2024 A Q5 |

## INSERT and types

| Mistake | Why it's wrong | Check |
|---|---|---|
| A left-out `NOT NULL DEFAULT ''` column fails | it takes the default, the empty string | 2025 B Q1.3 |
| `''` is NULL | the empty string is a value; it satisfies NOT NULL | 2024 A (3437) Q5.2 |
| AUTO_INCREMENT ignores a value you give | a given value (10) is used | 2025 B Q1.2 |
| A nullable column must be listed | left out, it becomes NULL | sample Q3 |
| FLOAT for money | it is approximate: 2.33999… | 2025 A Q12: use DECIMAL |

## SELECT

| Mistake | Why it's wrong | Check |
|---|---|---|
| `WHERE COUNT(x) > 5` | WHERE runs before GROUP BY: an error | 2026 A Q3, 2025 B Q4.5 |
| HAVING must use the same aggregate as SELECT | they are independent | 2024 A Q4.2: runs |
| A raw-value filter in HAVING | it belongs in WHERE (before grouping); a non-grouped column in HAVING is a mistake | 2025 A Q5 |
| Group by the name | names repeat and different people merge; group by the PK | undated Moed B Q1.3 |
| `COUNT(*)` for "number of orders" after a LEFT JOIN | the unmatched row still exists, so it counts 1; `COUNT(o.order_id)` gives 0 | 2026 A Q4 |
| `x = NULL` | always unknown: use `IS NULL` | — |
| DISTINCT is pointless on a UNIQUE column | several NULLs collapse to one | 2025 A Q2 |
| ORDER BY changes the table | it sorts the result only | 2026 A Q20 |
| `UNION` of 60 and 30 rows gives 90 | UNION removes duplicates: unknown | 2025 A Q8 |

## JOINs

| Mistake | Why it's wrong | Check |
|---|---|---|
| `CROSS JOIN ... ON` is a cross join | the `ON` makes it inner; in MySQL the keywords are equivalent | 2024 B Q2.1 |
| `INNER JOIN` with no ON is inner | with no `ON`/`USING` it is a cross join | 2024 A (3437) Q2.1 |
| INNER JOIN count from table sizes | depends on the data: cannot be known | 2024 B Q2.3 |
| LEFT JOIN count unknown | from the FK side it equals the left table's rows | 2024 A (3437) Q2.2: 6 |
| "7 fish linked to 4 bicycles" gives 4 rows | one row per linked fish: 7 | undated Moed B Q3.4 |
| `FULL OUTER JOIN` runs in MySQL | not supported: LEFT `UNION` RIGHT | 2024 A Q3 |
| `UNION ALL` for the FULL OUTER emulation | the matched rows would appear twice | 2024 A Q3.3 |
| `USING` with different column names | needs the same name on both sides | 2025 A Q4 |
| A scalar subquery = INNER JOIN | it keeps unmatched rows with NULL: a LEFT JOIN | 2025 A Q13 |
| A condition on the right table in WHERE keeps the LEFT JOIN | a null-rejecting WHERE drops the unmatched rows; put it in ON | Lecture 10 |

## Indexes, views, language

| Mistake | Why it's wrong | Check |
|---|---|---|
| Index every column | every write refreshes every index | 2025 A Q9 |
| An index helps `LIKE '%n'` | a leading wildcard forces a full table scan | Lecture 12 |
| `ALTER INDEX` | not possible: drop and create | Lecture 12 |
| Workbench runs the SQL | the server does; Workbench is a client | sample Q4 |
| `order` as a table name | reserved: needs backticks | 2026 A Query A |
| A table name is a keyword | it is an identifier | 2025 A Q16 |
