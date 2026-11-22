---
title: "Lecture 11 — Nested Subqueries, INSERT, UPDATE & DELETE"
subject: databases-sql
week: 11
lecture: "11"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - using
  - self-join
  - subquery
  - dml
  - insert-into
  - update
  - delete
  - truncate-table
  - safe-update-mode
  - etl
aliases:
  - "Databases Lecture 11"
  - "SQL Lecture 11"
in_scope: true
---

# Lecture 11 — Nested Subqueries, INSERT, UPDATE & DELETE

> Part of: [[Databases & SQL]]
> **Lecture 11** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[USING]], [[Self Join]], [[Subquery]], [[DML]], [[INSERT INTO]], [[UPDATE]], [[DELETE]], [[TRUNCATE TABLE]], [[Safe Update Mode]], [[ETL]]

> [!info] How this note was made
> Written from the 64-slide class deck. Slide 4's first two warnings about `USING` are in a picture that could not be read from the text, so only points 3 and 4 are reproduced. The DBeaver click-through is condensed. Explanations are AI-written.

## JOIN ... USING

[[USING]] is syntactic sugar for `ON` when **the column has the same name in both tables**.

```sql
SELECT *
FROM country
JOIN capital
USING (country_id);
```

The shared column appears **only once** in the result.

> [!warning] Careful with USING
> - `USING` **changes the order of the columns**.
> - `SELECT *` with `USING` in a FULL OUTER JOIN gives a **bad join**, because the two halves of the `UNION` have columns in different orders.
> - It cannot be used when the names differ, such as `person.person_id = car.owner_id`.

## Multiple joins

To send each employee a letter, chain the tables one at a time:

```sql
SELECT *
FROM staff
JOIN address ON staff.address_id = address.address_id
JOIN city    ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;
```

> [!tip] Mental model
> Each `JOIN` adds one table onto the result built so far.

## Self join

A [[Self Join]] joins a table to itself, so it **requires an alias**.

```sql
SELECT *
FROM employee
JOIN employee AS manager
    ON employee.manager_id = manager.employee_id;
```

| employee_id | name | manager_id |
|---|---|---|
| 101 | Jane Boss | NULL |
| 102 | Jack Worker | 101 |
| 103 | Joe Temp | 101 |

> [!note] AI note
> This is an inner join, so **Jane Boss disappears** from the output because she has no manager. Use `LEFT JOIN` to keep her.

## Nested subqueries

A [[Subquery]] is a `SELECT` nested inside another SQL statement.

```sql
SELECT *
FROM payment
WHERE amount > (
    SELECT AVG(amount) FROM payment
);
```

There are **four places** to nest a subquery in a `SELECT`:

| Clause | Used as | Example use |
|---|---|---|
| `WHERE` | Search condition | Payments above average |
| `HAVING` | Search condition | Groups above an overall figure |
| `FROM` | Table specification ([[Derived Table]]) | Query a pre-aggregated result |
| `SELECT` | Column specification ([[Scalar Subquery]]) | A count per row |

Subqueries can even "join" data:

```sql
SELECT
    film_id,
    title,
    (SELECT COUNT(film_id)
     FROM inventory
     WHERE inventory.film_id = film.film_id) AS num_of_copies
FROM film;
```

This is a [[Correlated Subquery]], since the inner query refers to `film` from the outer query.

## Modifying data: DML

Unlike `SELECT`, the [[DML]] statements `INSERT`, `UPDATE` and `DELETE` **change the database**. The class practises on a separate `simpsons` database to keep Sakila intact.

```sql
CREATE TABLE `character` (
    character_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name   VARCHAR(20) NOT NULL,
    last_name    VARCHAR(20),
    shoe_size    INT
);
```

### INSERT

```sql
-- One row
INSERT INTO `character` (first_name, last_name, shoe_size)
VALUES ('Bart', 'Simpson', 35);

-- Several rows
INSERT INTO `character` (first_name, last_name, shoe_size)
VALUES ('Lisa', 'Simpson', 32),
       ('Maggie', 'Simpson', 18);

-- Not all columns: shoe_size becomes NULL
INSERT INTO `character` (first_name, last_name)
VALUES ('Homer', 'Simpson');

-- From another table: SELECT replaces VALUES
INSERT INTO `character` (first_name, last_name)
SELECT first_name, last_name
FROM sakila.actor;
```

> [!warning] Which columns are mandatory?
> You must include any column that is **`NOT NULL` with no `DEFAULT`**. `INSERT ... (last_name, shoe_size) VALUES ('Burns', 37)` fails because `first_name` is required. `AUTO_INCREMENT` columns fill themselves in.

### UPDATE

```sql
UPDATE `character`
SET first_name = 'Bartholomew'
WHERE character_id = 1;
```

You only list the columns you are changing.

### DELETE

```sql
DELETE FROM `character`
WHERE character_id = 201;
```

Without a `WHERE`, `DELETE` removes **all rows**.

## Safe Update Mode

Try to revert with `WHERE first_name = 'Bartholomew'` and Workbench refuses. [[Safe Update Mode]] says you can **only change data by key**. It stops an `UPDATE` or `DELETE` from accidentally hitting many rows.

```sql
SET SQL_SAFE_UPDATES = 0;  -- disable
SET SQL_SAFE_UPDATES = 1;  -- enable
```

It is on by default. **Strive never to disable it.**

## TRUNCATE

[[TRUNCATE TABLE|TRUNCATE]] resets a table to the state right after creation: all rows are deleted and auto-increment counters reset. It is **not protected by Safe Update Mode**, so permission to use it is usually limited to trusted, experienced users.

| | `DELETE` | `TRUNCATE` |
|---|---|---|
| **Family** | DML | DDL |
| **WHERE** | Yes | No |
| **Works** | Row by row | Whole table |
| **AUTO_INCREMENT** | Keeps counting | **Resets** |
| **Rollback** | Possible in a transaction | Usually not |
| **Safe Update Mode** | Protected | **Not protected** |

## Getting data into MySQL

Loading from a file manually is **importing**. Doing it automatically is [[ETL]].

Workbench's Table Data Import Wizard is unreliable: it can import 0 records, fail silently and lacks full type support (including `DECIMAL`). Alternatives:

1. A third-party tool such as **DBeaver** (used in class).
2. MySQL's command-line `mysqlimport`.
3. SQL's `LOAD DATA`, if you have access to the server computer.

**First, know your CSV:** check data sanity, row count, column names and types, encoding, line endings, and any documentation.

The class imported the ~250,000-row Our World in Data COVID-19 CSV with DBeaver: connect to localhost, create a `covid19` database, choose **Import Data**, map columns and types, then proceed and check with `SELECT COUNT(*)`.

> [!warning] Security note from the slides
> Setting `allowPublicKeyRetrieval=true` and `useSSL=false` is acceptable for a local exercise. Do not use these settings with real, sensitive data.

## Summary

- `USING` is a shortcut for `ON` when column names match.
- A self join needs aliases.
- Subqueries can sit in WHERE, HAVING, FROM or SELECT.
- A required INSERT column is one that is NOT NULL with no DEFAULT.
- Safe Update Mode protects UPDATE and DELETE, but not TRUNCATE.

## Related Notes

- Previous: [[Lec_10-SELECT & JOINs|Lecture 10]]
- Next: [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]]
- Practice: [[PS_04-SELECT, JOINs & Nested Queries on Sakila]]
