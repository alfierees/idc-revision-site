---
title: "Lecture 9 — SELECT"
subject: databases-sql
week: 9
lecture: "09"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - select
  - where
  - like
  - order-by
  - limit
  - group-by
  - having
  - aggregate-function
  - cross-join
  - inner-join
aliases:
  - "Databases Lecture 9"
  - "SQL Lecture 9"
in_scope: true
---

# Lecture 9 — SELECT

> Part of: [[Databases & SQL]]
> **Lecture 9** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[SELECT]], [[WHERE]], [[LIKE]], [[DISTINCT]], [[ORDER BY]], [[LIMIT]], [[GROUP BY]], [[HAVING]], [[Aggregate Function]], [[Logical Order of Execution]], [[CROSS JOIN]], [[INNER JOIN]]

> [!info] How this note was made
> Written from the 61-slide class deck. Explanations and exam tips are AI-written, and likely slide errors are flagged.

## The SELECT statement

`SELECT` comes from *selection*, a concept in E. F. Codd's [[Relational Model]], the theoretical foundation of SQL. It reads and processes data.

```sql
SELECT   <columns>
FROM     <tables>
WHERE    <predicate>
GROUP BY <columns>
HAVING   <predicate>
ORDER BY <columns>
LIMIT    <number(s)>;
```

> [!warning] Yes, the order matters
> The clauses must be written in exactly this order.

## SELECT and FROM

`SELECT` works alone, and usually reads from a table:

```sql
SELECT 1 + 1;              -- 2
SELECT LOWER('HI!');       -- 'hi!'
SELECT * FROM actor;
```

### Calculated columns and aliases

```sql
SELECT
    CONCAT(first_name, ' ', last_name) AS full_name
FROM actor;
```

[[CONCAT Function|CONCAT()]] is a built-in function, and `AS` gives the result an [[Alias]].

### DISTINCT

By default `SELECT` returns duplicates. [[DISTINCT]] keeps one copy of each row. It is a **keyword, not a function**.

```sql
SELECT DISTINCT first_name FROM actor;
```

## WHERE

[[WHERE]] applies predicates to each row and returns only the rows that match.

| Kind | Operators |
|---|---|
| Comparison | `=`, `>`, `<`, `>=`, `<=`, `<>`, `!=` |
| Logical | `AND`, `OR`, `NOT` |
| Membership | `first_name IN ('Ed', 'Johnny', 'Tim')` |
| Range | `grade BETWEEN 60 AND 100` (**inclusive** of both ends) |
| Missing values | `IS NULL`, `IS NOT NULL` |

> [!warning] Slide check: `= NULL`
> Slide 17 lists `= NULL` and `> NULL` next to `IS NULL`. They are valid syntax but never match any row, because a comparison with NULL gives *unknown*. **Always use `IS NULL`.**

### LIKE pattern matching

| Wildcard | Matches |
|---|---|
| `%` | Any number of characters (**0 or more**) |
| `_` | **Exactly 1** character |

```sql
SELECT *
FROM actor
WHERE first_name LIKE 'E_'   -- 2 characters starting with E
  AND last_name LIKE '%s';   -- ends with s
```

To search for a literal `%` or `_`, escape it with a backslash: `LIKE '%\%'` matches values ending in `%`.

> [!note] Marked "not for the exam"
> Custom escape characters with `ESCAPE`, and regular expressions with `REGEXP_LIKE()`.

## ORDER BY and LIMIT

```sql
SELECT * FROM actor
ORDER BY first_name DESC, last_name ASC;
```

`ASC` is ascending and `DESC` is descending.

```sql
LIMIT 5;      -- first 5 rows
LIMIT 5, 10;  -- skip 5, then take 10: rows 6 to 15
```

> [!warning] The offset is 0-based
> `LIMIT 5, 10` means **offset 5, count 10**. It does *not* mean rows 5 to 10.

## Aggregate functions

An [[Aggregate Function]] turns **many values into one**.

```sql
SELECT COUNT(amount), AVG(amount), SUM(amount), MAX(amount), MIN(amount)
FROM payment;
```

Others include `COUNT(DISTINCT ...)`, `GROUP_CONCAT()`, `STDDEV()` and `VARIANCE()`.

## GROUP BY

[[GROUP BY]] gathers rows that share a value. **Think of groups as buckets**: each distinct value gets a bucket, every row drops into its bucket, and the output has **one row per bucket**.

```sql
SELECT first_name, COUNT(first_name)
FROM people
GROUP BY first_name;
```

| first_name | last_name | | first_name | COUNT |
|---|---|---|---|---|
| John | Travolta | → | John | 3 |
| John | Cusack | | Bob | 1 |
| John | Wayne | | | |
| Bob | Newhart | | | |

### What you may SELECT when grouping

These make sense: **the grouping columns**, **aggregate functions** and **literal values**.

A "regular" column does not: a customer's group holds many `payment_date` values, so which one would you show? MySQL 8.0 rejects this by default with **Error 1055**, though that protection can be disabled.

## HAVING

To show only customers who spent $180 or more, `WHERE` cannot help, because it runs **before** the groups exist. [[HAVING]] filters **after** grouping.

```sql
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) >= 180;
```

| | `WHERE` | `HAVING` |
|---|---|---|
| **Runs** | Before grouping | After grouping |
| **Filters** | Rows | Groups |
| **Can use** | All table columns | Grouping columns and aggregates |
| **Aggregates allowed?** | **No** | **Yes** |

## Order of execution

SQL is **written** in one order and **executed** in another. This is the [[Logical Order of Execution]]:

```sql
SELECT customer_id, SUM(amount)  -- 5. choose columns (from groups)
FROM payment                     -- 1. choose data source
WHERE amount > 1.99              -- 2. filter raw rows
GROUP BY customer_id             -- 3. create groups
HAVING SUM(amount) > 180         -- 4. filter groups
ORDER BY customer_id             -- 6. sort
LIMIT 3;                         -- 7. remove excess rows
```

> [!tip] This explains most exam answers
> `WHERE COUNT(...)` fails because groups do not exist at step 2. `HAVING` on a non-grouped column fails because only groups exist at step 4.

## Joins begin

A [[JOIN]] is a clause of `SELECT` that combines two tables by their PK-FK relationship. The types are **CROSS, INNER, LEFT OUTER, RIGHT OUTER and FULL OUTER**.

### CROSS JOIN

A [[CROSS JOIN]] matches **every row in Table 1 with every row in Table 2**, also called the **Cartesian product**. It is **the basis for all other joins**.

```sql
SELECT * FROM Table1 JOIN Table2;
SELECT * FROM Table1 CROSS JOIN Table2;
SELECT * FROM Table1, Table2;  -- old, discouraged
```

> [!tip] Row count
> A cross join returns $m \times n$ rows, where $m$ and $n$ are the two tables' row counts.

### INNER JOIN

An [[INNER JOIN]] outputs only rows **where the tables match**. It works in two steps:

1. CROSS JOIN.
2. Eliminate rows that do not fulfil the `ON` predicate.

```sql
SELECT *
FROM staff
JOIN address
    ON staff.address_id = address.address_id;
```

## Summary

- Clauses are written as SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.
- They run as FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT.
- WHERE filters rows and HAVING filters groups.
- CROSS JOIN is the base of every join.

## Related Notes

- Previous: [[Lec_08-Constraints & Data Types|Lecture 8]]
- Next: [[Lec_10-SELECT & JOINs|Lecture 10]]
- Practice: [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY]]
