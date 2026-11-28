---
title: "Past Paper Topic Map"
subject: databases-sql
type: reference
description: "What the 8 Databases & SQL papers on this site ask (2024 to 2026 plus the sample questions), the two exam layouts, the questions that come back almost word for word, and the official answers that need a second look."
course: Databases & SQL
semester: 1
year: 2
order: 3
tags:
  - databases-sql
  - exam-prep
  - past-papers
---

> Counted from the 8 papers on this site: [[PP_01|2024 Moed A (2455)]], [[PP_02|2024 Moed B]], [[PP_03|2024 Moed A (3437)]], [[PP_04|Moed B, undated (3437)]], [[PP_05|the sample questions]], [[PP_06|2025 Moed A]], [[PP_07|2025 Moed B]] and [[PP_08|2026 Moed A]]. Every one has the instructor's answers.

## The two layouts

| Layout | Papers | Shape |
|---|---|---|
| Long questions | 2024 A (both codes), 2024 B, undated Moed B, 2025 B | 4 to 6 questions of 15 to 20 points, each with 3 to 5 parts |
| Short questions | 2025 A, 2026 A | 19 to 20 questions of 5 points |

Either way an answer is one to three sentences: what the feature **does**, and **when** or **where** it acts.

## Topic by paper

| Topic | 24 A (2455) | 24 B | 24 A (3437) | Moed B | Sample | 25 A | 25 B | 26 A |
|---|---|---|---|---|---|---|---|---|
| ERD to tables and FKs | Q2 | | Q1 | Q2 | | Q6, Q14 | | Q6–Q9 |
| Cardinality with NOT NULL / UNIQUE | | Q1 | Q1 | Q2 | | | | Q8, Q9 |
| Constraint types and definitions | Q1 | Q3 | Q1 | Q4 | | Q19 | Q2 | Q5, Q10 |
| FK: column, constraint, index | Q5 | | Q3 | Q4.3 | Q1 | | | |
| INSERT outcomes (NOT NULL, DEFAULT, AUTO_INCREMENT) | | | Q5 | Q4.2 | Q3 | Q15 | Q1 | |
| JOIN types and row counts | Q3 | Q2 | Q2 | Q3 | | Q1, Q4, Q17 | Q3 | Q1, Q2 |
| Reading a GROUP BY query | Q4 | Q4 | Q4 | Q1 | | Q5, Q7 | Q4 | Q1–Q4 |
| WHERE vs HAVING | Q4.3 | Q4.7, Q4.8 | Q4.3 | Q1.4 | Q2 | Q5 | Q4.5 | Q3, Q17 |
| Subqueries | | | | Q5 | | Q13 | | Q12–Q15 |
| Composite vs surrogate key | | | | Q6 | | Q10 | | Q8 |
| Indexes | Q5 | Q3 | Q3 | Q4.1 | | Q9 | | |
| UNION, DISTINCT, ORDER BY | Q3.3 | | | Q4.4 | | Q2, Q7, Q8 | | Q19, Q20 |
| Data types (FLOAT vs DECIMAL), LIKE | | | | | | Q11, Q12, Q18 | Q1.5 | |
| Language: keyword, identifier, literal | | | | | Q5 | Q3, Q16 | | |
| Client-server, NULL, DELETE vs TRUNCATE | | | | Q4.5 | Q4 | | | Q18 |

Normalisation, views, CTEs, WITH ROLLUP and NoSQL were taught (Lectures 4, 5, 12, 13) but have not been examined yet. Know them in a sentence each; spend the time on the rows above.

## Questions that come back

| Question (short) | Answer | Papers |
|---|---|---|
| The three mechanisms of a foreign key | column, constraint (referential integrity), index (speeds up reads and JOINs) | 2024 A (both), Moed B |
| fish (6) and bicycle (3): row counts | CROSS 18; LEFT from fish 6; INNER and FULL unknown | 2024 B, 2024 A (3437) |
| `JOIN` with no `ON` | a CROSS JOIN | 2024 A (3437), 2025 B |
| `CROSS JOIN ... ON` | an INNER JOIN | 2024 B |
| FULL OUTER JOIN in MySQL | LEFT JOIN `UNION` RIGHT JOIN | 2024 A (2455), 2025 A, 2025 B |
| An aggregate in WHERE | error: WHERE runs before GROUP BY | every long paper, 2026 A |
| Departments with more than 5 hires (the same query) | INNER JOIN; one-to-many; WHERE rows, GROUP BY, HAVING groups | 2024 A (3437), 2025 B |
| Exactly one parent / at most one child / at least one child | NOT NULL / UNIQUE / impossible | 2024 B, Moed B, 2026 A |
| ERD with a many-to-many | entities + 1 junction table; 2 FKs in it | Moed B, 2025 A, 2026 A |
| INSERT on a table with AUTO_INCREMENT, DEFAULT '' and a NOT NULL column | only the NOT NULL column without a default is required | 2024 A (3437), 2025 A, 2025 B |
| Why DEFAULT is different | it never makes a write fail | Moed B, 2025 B |
| Why not index every column | writes must refresh every index | Moed B, 2025 A |
| Scalar subquery vs INNER JOIN | not the same: the subquery acts like a LEFT JOIN | Moed B, 2025 A |
| LEFT JOIN + GROUP BY the PK: how many rows? | the number of rows in the left table | Moed B, 2026 A |

## Official answers to read with care

| Paper | Question | Issue |
|---|---|---|
| 2025 A | Q11 | `'%@%.%'` does not enforce "@ exactly once"; LIKE cannot. The official "yes" is generous |
| 2025 A | Q14 | the junction pair is misnamed (Convention–Hall, not Participant–Hall); the count of 5 is right |
| 2025 B | Q4.1 | says hired in 2025, but the filter is `>= '2024-01-01'` |
| 2026 A | Query A | `order` is a reserved word: as printed the query fails; it needs backticks |
| 2026 A | Q1, Q4 | the accepted alternatives ("names may repeat", "NULL") do not fit `GROUP BY customer_id` and `COUNT(col)` = 0 |

Each is flagged on its paper's page.

## What this means for revision

1. **Learn the cheat sheet's §0 table cold**: about 70% of the marks are the same dozen ideas.
2. **Practise the JOIN row-count rules** with the [[Graph Gallery]] explorer until "known or not?" is instant.
3. **Read every query in execution order**, not written order.
4. **Do 2026 A, 2025 A and 2025 B first** (the current instructor's style), then the 2024 papers.
