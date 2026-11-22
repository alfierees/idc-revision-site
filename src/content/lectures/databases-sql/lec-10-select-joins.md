---
title: "Lecture 10 — SELECT & JOINs"
subject: databases-sql
week: 10
lecture: "10"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - join
  - cross-join
  - inner-join
  - left-join
  - right-join
  - full-outer-join
  - union
  - union-all
aliases:
  - "Databases Lecture 10"
  - "SQL Lecture 10"
  - "The JOIN Family"
in_scope: true
---

# Lecture 10 — SELECT & JOINs

> Part of: [[Databases & SQL]]
> **Lecture 10** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[JOIN]], [[CROSS JOIN]], [[INNER JOIN]], [[LEFT JOIN]], [[RIGHT JOIN]], [[FULL OUTER JOIN]], [[ON]], [[UNION]], [[UNION ALL]]

> [!info] How this note was made
> Written from the 50-slide class deck. Slides 2 to 18 repeat `GROUP BY` and `HAVING` from [[Lec_09-SELECT|Lecture 9]], so this note focuses on joins. The deck's join and Venn pictures are redrawn here as tables. Explanations are AI-written.

## The join family at a glance

Using two small tables:

| `country` | | `capital` | |
|---|---|---|---|
| **country_id** | **name** | **capital_id** | **country_id** |
| 1 | France | 10 | 1 |
| 2 | Japan | 11 | 3 |

| Join | Keeps | Unmatched rows | Rows here |
|---|---|---|---|
| [[CROSS JOIN]] | Every combination | Not applicable | 4 |
| [[INNER JOIN]] | Matches only | Dropped | 1 |
| [[LEFT JOIN]] | All left + matches | Right side is NULL | 2 |
| [[RIGHT JOIN]] | All right + matches | Left side is NULL | 2 |
| [[FULL OUTER JOIN]] | All rows from both | NULL on the missing side | 3 |

> [!note] Illustrative data
> The small tables above are an AI-written example, used to make the row counts concrete.

```text
INNER        LEFT         RIGHT        FULL OUTER
 ( [x] )     ([x x])      ([x x])      ([x x x])
 overlap     left +       overlap +    everything
 only        overlap      right
```

## INNER JOIN

Only rows with a match on both sides are output. It is called "inner" because it is the **overlap** of a Venn diagram.

```sql
SELECT *
FROM staff
JOIN address
    ON staff.address_id = address.address_id;  -- FK = PK
```

The [[ON]] clause describes the relationship between the tables, normally comparing a primary key to a foreign key.

## LEFT (OUTER) JOIN

A [[LEFT JOIN]] takes **all rows from the left table** and any matches from the right. Where there is no match, the right columns are **NULL**. In MySQL, `OUTER` is optional.

```sql
SELECT *
FROM staff
LEFT JOIN address
    ON staff.address_id = address.address_id;
```

> [!tip] Typical use
> "Show all customers, including those with no orders." An inner join would silently drop them.

## ON vs WHERE in a LEFT JOIN

This is the key distinction:

- A row that fails **`WHERE`** is **dropped** from the result.
- A row that fails **`ON`** still appears **once**, with NULLs on the right side.

> [!success] Keep it simple
> Use `ON` to describe **the relationship** between the tables. Use `WHERE` to **filter out unwanted data**.

> [!example] The classic mistake (AI example)
> ```sql
> -- Keeps every customer; only 2025 orders are attached
> SELECT c.name, o.order_id
> FROM customer c
> LEFT JOIN orders o
>     ON c.customer_id = o.customer_id AND o.year = 2025;
>
> -- Customers with no 2025 order vanish: NULL = 2025 is not true
> SELECT c.name, o.order_id
> FROM customer c
> LEFT JOIN orders o
>     ON c.customer_id = o.customer_id
> WHERE o.year = 2025;
> ```

## RIGHT (OUTER) JOIN

A [[RIGHT JOIN]] is the **mirror image** of a left join: all rows from the right table, with NULLs on the left where there is no match.

```sql
SELECT *
FROM staff
RIGHT JOIN address
    ON staff.address_id = address.address_id;
```

## FULL (OUTER) JOIN

A [[FULL OUTER JOIN]] takes all rows from both tables. Matched rows are matched, and unmatched rows get NULLs on the other side.

> [!warning] The catch
> **MySQL has no direct `FULL OUTER JOIN`.** Build it as LEFT + RIGHT:

```sql
SELECT *
FROM TableA
LEFT JOIN TableB
    ON TableA.id = TableB.id
UNION
SELECT *
FROM TableA
RIGHT JOIN TableB
    ON TableA.id = TableB.id;
```

`UNION` removes the matched rows that both halves produced, so each appears once.

## UNION

[[UNION]] stacks the results of several `SELECT` statements **vertically**. The structures must match:

- Same number of columns.
- Same data types, in order.
- Column names do **not** have to match.

```sql
SELECT name FROM speaker
UNION                       -- removes duplicates (default)
SELECT name FROM attendee;

SELECT name FROM speaker
UNION ALL                   -- keeps duplicates
SELECT name FROM attendee;
```

> [!tip] JOIN vs UNION
> **JOIN** combines tables **horizontally** (more columns). **UNION** combines them **vertically** (more rows).

## Summary

- CROSS gives all combinations. INNER gives matches. LEFT and RIGHT keep one whole side. FULL keeps both.
- In a LEFT JOIN, failing `ON` keeps the left row, while failing `WHERE` removes it.
- MySQL builds FULL OUTER JOIN from LEFT, UNION and RIGHT.
- `UNION` removes duplicates and `UNION ALL` keeps them.

## Related Notes

- Previous: [[Lec_09-SELECT|Lecture 9]]
- Next: [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]]
- Practice: [[PS_04-SELECT, JOINs & Nested Queries on Sakila]]
- Tested in: [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]], [[PP_07-INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)|PP 07]]
