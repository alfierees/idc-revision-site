---
title: "Lecture 12 — WITH ROLLUP, CTEs & Indexes"
subject: databases-sql
week: 12
lecture: "12"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - with-rollup
  - grouping
  - common-table-expression
  - recursive-cte
  - database-index
  - full-table-scan
aliases:
  - "Databases Lecture 12"
  - "SQL Lecture 12"
in_scope: true
---

# Lecture 12 — WITH ROLLUP, CTEs & Indexes

> Part of: [[Databases & SQL]]
> **Lecture 12** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[WITH ROLLUP]], [[GROUPING]], [[Common Table Expression]], [[Recursive CTE]], [[Database Index]], [[Full Table Scan]]

> [!info] How this note was made
> Written from the 34-slide class deck. Explanations and exam tips are AI-written.

## GROUP BY ... WITH ROLLUP

Add [[WITH ROLLUP]] to a `GROUP BY` to get **sub-total rows** for each group, plus a grand total.

```sql
SELECT
    c.name AS category,
    f.title AS film_title,
    COUNT(r.rental_id) AS rental_count
FROM rental r
JOIN inventory i USING (inventory_id)
JOIN film f USING (film_id)
JOIN film_category fc USING (film_id)
JOIN category c USING (category_id)
GROUP BY c.name, f.title WITH ROLLUP;
```

The output has one row per category and film, a sub-total row per category, and one grand-total row. The rollup rows show **NULL** in the columns being totalled.

### GROUPING()

If real rows can also contain NULL, you can't tell them from rollup rows. [[GROUPING|GROUPING()]] solves this: it returns **1 for rollup rows** and **0 for regular rows**.

```sql
SELECT
    IF(GROUPING(c.name) = 1, '~~ALL CATEGORIES~~', c.name) AS category,
    IF(GROUPING(f.title) = 1, '~~ALL FILMS~~', f.title) AS film_title,
    COUNT(r.rental_id) AS rental_count
-- FROM, JOINs and GROUP BY as above
```

## Common Table Expressions

A [[Common Table Expression]] (CTE) supports **step-by-step problem solving**. The `WITH` keyword gives a query a name, and you then use that name as if it were a table.

```sql
WITH avg_payment AS (
    SELECT AVG(amount) AS avg_amount
    FROM payment
)
SELECT
    p.payment_id,
    p.amount
FROM payment p
JOIN avg_payment a
    ON p.amount > a.avg_amount
ORDER BY p.amount DESC;
```

### Chaining CTEs

**Problem:** which customers spent more than the average customer, and how much?

```sql
WITH customer_totals AS (              -- Step 1: total per customer
    SELECT
        c.customer_id,
        CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
        SUM(p.amount) AS total_spent
    FROM customer c
    JOIN payment p ON p.customer_id = c.customer_id
    GROUP BY c.customer_id, customer_name
),
average_spend AS (                     -- Step 2: average of those totals
    SELECT AVG(total_spent) AS avg_spent
    FROM customer_totals
)
SELECT                                 -- Step 3: customers above it
    ct.customer_id,
    ct.customer_name,
    ct.total_spent
FROM customer_totals ct
CROSS JOIN average_spend a
WHERE ct.total_spent > a.avg_spent
ORDER BY ct.total_spent DESC;
```

> [!tip] Why this works well
> Each step reads like a sentence, and the second CTE can use the first. The same logic as nested subqueries is much harder to read.

## Recursive CTEs

**Recursion** is when something is defined in terms of a simpler version of itself. It suits hierarchies: "who is in charge?" or "where is that file?".

Every recursion has a **base case** and a **recursive step**, as in Fibonacci:

```python
def fibonacci(n):
    if n <= 1:          # base case
        return n
    else:               # recursive step
        return fibonacci(n-1) + fibonacci(n-2)
```

A [[Recursive CTE]] is **a CTE joined with itself**. Here it computes each employee's rank in the organisation:

```sql
WITH RECURSIVE employees_cte AS (
    -- Base case: the person with no manager
    SELECT employee_id, full_name, 1 AS `rank`
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive step: people managed by someone already found
    SELECT employees.employee_id, employees.full_name, `rank` + 1
    FROM employees
    JOIN employees_cte
        ON employees.manager_id = employees_cte.employee_id
)
SELECT *
FROM employees_cte
ORDER BY `rank`, employee_id;
```

## Indexes

A [[Database Index]] **speeds up reads** by letting the database reach a specific row without searching every row. It works like the index in a book: MySQL looks in the index first, then goes to the data's location.

### No free lunch

Indexes speed up **reading** but slow down **writing**, because each write must also update the index. So:

- Only index the columns most important for reading.
- Create indexes for the **most popular queries**.
- Don't over-index or create very "wide" indexes.

> [!success] Exam answer
> "Why not index every column?" Because each `INSERT`, `UPDATE` and `DELETE` must refresh every index, which slows writes. See 2025 Moed A Q9 in [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]].

### Indexes are per column

Only queries using the indexed column benefit:

```sql
-- With an index on first_name:
WHERE first_name = 'Apu';                     -- benefits
WHERE last_name = 'Nahasapeemapetilon';       -- does not
```

### Keys and indexes

In MySQL, keys and indexes are almost synonymous. Creating a **primary, foreign or unique key** also creates an index.

| Index type | Purpose |
|---|---|
| `PRIMARY` | For primary keys |
| `FOREIGN` | For foreign keys |
| `INDEX` | A regular index, also created for foreign keys |
| `UNIQUE` | For unique constraints |
| `FULLTEXT` | Natural-language search in long text |

### Full table scan

In a [[Full Table Scan]], MySQL reads the table from start to finish. It happens when:

- There is no index for the searched columns.
- The table is so small that using the index would be slower.
- An index exists **but cannot be used**, for example `WHERE last_name LIKE '%n'`.

> [!tip] Why `LIKE '%n'` can't use the index
> An index is sorted from the **start** of the value, like a phone book. A leading wildcard means the start is unknown.

### Managing indexes

```sql
CREATE INDEX idx_first_and_last_name
ON actor (first_name, last_name);

SHOW INDEX FROM actor;

DROP INDEX idx_first_and_last_name ON actor;
```

You **cannot `ALTER` an index**. Drop it and create a new one.

## Summary

- `WITH ROLLUP` adds sub-totals, and `GROUPING()` identifies those rows.
- CTEs name query steps, and a recursive CTE has a base case and a recursive step.
- Indexes speed up reads and slow down writes.
- A leading `%` in `LIKE` forces a full table scan.

## Related Notes

- Previous: [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]]
- Next: [[Lec_13-Indexes, Views & NoSQL|Lecture 13]]
