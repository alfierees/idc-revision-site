---
title: "SQL Syntax Sheet"
subject: databases-sql
type: reference
description: "The syntax the exam reads and asks you to write in a line or two: CREATE TABLE with every constraint and a foreign key, ALTER, INSERT, UPDATE, DELETE, the full SELECT with its order of execution, every JOIN, UNION, subqueries, CTEs, WITH ROLLUP, indexes and views, plus the row-count rules for joins."
course: Databases & SQL
semester: 1
year: 2
order: 2
pinned: true
tags:
  - databases-sql
  - exam-prep
  - formula-sheet
aliases:
  - SQL Syntax Sheet
  - Databases Formula Sheet
---

> The exam rarely asks for a full query, but it shows you plenty and asks what they do or what to add. Course style: keywords in UPPERCASE, identifiers in lowercase with underscores, one clause per line.

## CREATE TABLE with every constraint

```sql
CREATE TABLE course (
    course_id   INT AUTO_INCREMENT,                -- surrogate key
    code        VARCHAR(16) NOT NULL UNIQUE,       -- no NULLs, no repeats
    title       VARCHAR(256) NOT NULL DEFAULT '',  -- '' if left out
    credits     DECIMAL(3,1) CHECK (credits > 0),  -- exact number, predicate
    dep_id      INT NOT NULL,                      -- 1. FK column (NOT NULL: exactly one parent)
    INDEX idx_fk_course_department (dep_id),       -- 2. index
    CONSTRAINT fk_course_department                -- 3. constraint
        FOREIGN KEY (dep_id)
        REFERENCES department (dep_id),
    PRIMARY KEY (course_id)
);
```

| Need | Syntax |
|---|---|
| Composite PK (junction table) | `PRIMARY KEY (book_id, author_id)` |
| Unique combination | `UNIQUE (book_id, author_id)` or `CONSTRAINT uq_x UNIQUE (a, b)` |
| Range | `CHECK (number BETWEEN 0 AND 100)` |
| Non-negative | `CHECK (fee >= 0)` or `fee DECIMAL(8,2) UNSIGNED` |
| Pattern | `CHECK (email LIKE '%@%.%')` |
| Self-reference | `FOREIGN KEY (manager_id) REFERENCES employee (employee_id)` |
| Inheritance | child PK is also FK: `person_id INT PRIMARY KEY, FOREIGN KEY (person_id) REFERENCES person (person_id)` |

## ALTER, DROP, TRUNCATE

```sql
ALTER TABLE car ADD CONSTRAINT uq_car_owner UNIQUE (owner_id);   -- at most one car per owner
ALTER TABLE tour MODIFY guide_id INT NOT NULL;                    -- exactly one guide
ALTER TABLE t ADD COLUMN num_of_feet INT DEFAULT 2 AFTER name;
ALTER TABLE t DROP COLUMN num_of_feet;
ALTER TABLE course DROP FOREIGN KEY fk_course_department;
RENAME TABLE course TO class;
TRUNCATE TABLE t;        -- all rows gone, structure kept, AUTO_INCREMENT reset
DROP TABLE t;            -- structure gone too
```

## INSERT, UPDATE, DELETE

```sql
INSERT INTO person (first_name, last_name) VALUES ('Alan', 'Turing');
INSERT INTO person (first_name, last_name) VALUES ('Lisa', 'S'), ('Bart', 'S');
INSERT INTO person (first_name, last_name) SELECT first_name, last_name FROM sakila.actor;
UPDATE person SET first_name = 'Bartholomew' WHERE person_id = 1;
DELETE FROM person WHERE person_id = 201;   -- no WHERE: every row
```

A left-out column gets: its `AUTO_INCREMENT` value, its `DEFAULT`, or NULL. If it is `NOT NULL` with no `DEFAULT`, the INSERT **fails**.

## The full SELECT

```sql
SELECT    c.name, COUNT(o.order_id) AS num_orders   -- 5
FROM      customer AS c                              -- 1
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE     c.country = 'IL'                           -- 2  rows
GROUP BY  c.customer_id                              -- 3
HAVING    COUNT(o.order_id) > 5                      -- 4  groups
ORDER BY  num_orders DESC                            -- 6
LIMIT     10;                                        -- 7
```

| Piece | Syntax |
|---|---|
| Alias | `expr AS bmi`, `FROM customer AS c` |
| Distinct rows | `SELECT DISTINCT country_id` |
| Range (inclusive) | `grade BETWEEN 60 AND 100` |
| List | `first_name IN ('Ed', 'Tim')` |
| Missing | `IS NULL`, `IS NOT NULL` |
| Pattern | `LIKE 'E_'` (2 characters), `LIKE '%s'` (ends in s); escape with `\%` |
| Sort | `ORDER BY last_name, first_name DESC` |
| Limit | `LIMIT 5` (first 5), `LIMIT 5, 10` (skip 5, take 10) |
| Aggregates | `COUNT(*)`, `COUNT(col)`, `COUNT(DISTINCT col)`, `SUM`, `AVG`, `MIN`, `MAX` |
| Replace NULL | `COALESCE(x, 'none')`, `IFNULL(x, 0)` |

## JOINs

```sql
FROM fish JOIN bicycle;                                         -- CROSS: every pair
FROM fish JOIN bicycle ON fish.bicycle_id = bicycle.bicycle_id; -- INNER
FROM fish JOIN bicycle USING (bicycle_id);                      -- INNER, same column name
FROM fish LEFT JOIN bicycle USING (bicycle_id);                 -- all fish
FROM fish RIGHT JOIN bicycle USING (bicycle_id);                -- all bicycles
FROM employee JOIN employee AS manager                          -- self join needs an alias
     ON employee.manager_id = manager.employee_id;

SELECT * FROM a LEFT JOIN b ON a.id = b.id                      -- FULL OUTER in MySQL
UNION
SELECT * FROM a RIGHT JOIN b ON a.id = b.id;
```

| Join, $m$ rows on the left, $n$ on the right | Rows |
|---|---|
| CROSS | $m \times n$ |
| INNER | matched pairs (needs the data) |
| LEFT, from the FK side | $m$ (each child matches at most one parent) |
| LEFT, general | matched pairs + unmatched left rows |
| RIGHT | matched pairs + unmatched right rows |
| FULL OUTER | matched pairs + unmatched left + unmatched right |
| `GROUP BY` the left table's PK after LEFT JOINs | $m$, whatever the joins did |
| `UNION` | at most the sum (duplicates removed); `UNION ALL` exactly the sum |

## Subqueries, CTEs, ROLLUP

```sql
SELECT * FROM payment WHERE amount > (SELECT AVG(amount) FROM payment);    -- in WHERE
SELECT title, (SELECT COUNT(*) FROM inventory i
               WHERE i.film_id = f.film_id) AS copies FROM film f;       -- scalar: acts like LEFT JOIN
SELECT customer_id, name FROM customer
WHERE customer_id IN (SELECT customer_id FROM orders
                      GROUP BY customer_id HAVING COUNT(*) > 5);         -- IN a list

WITH totals AS (SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id)
SELECT * FROM totals WHERE total > (SELECT AVG(total) FROM totals);      -- CTE

SELECT category, title, COUNT(*) FROM ... GROUP BY category, title WITH ROLLUP;  -- subtotals
```

## Indexes and views

```sql
CREATE INDEX idx_first_and_last_name ON actor (first_name, last_name);
SHOW INDEX FROM actor;
DROP INDEX idx_first_and_last_name ON actor;     -- no ALTER INDEX: drop and re-create

CREATE VIEW actor_name AS SELECT actor_id, first_name, last_name FROM actor;
SELECT * FROM actor_name;
```

## Data types

| Type | Use |
|---|---|
| `INT` (`TINYINT` 1 byte … `BIGINT` 8) | whole numbers: stick to `INT` |
| `DECIMAL(p, s)` | exact; `DECIMAL(5,2)` holds −999.99 to 999.99. Money |
| `FLOAT`, `DOUBLE` | approximate, fast, very large or small numbers |
| `CHAR(n)`, `VARCHAR(n)` | fixed, variable strings |
| `TEXT`, `BLOB` | long text, binary; only prefix-indexed |
| `ENUM('XS','S','M')` | closed list (case-insensitive) |
| `DATE`, `DATETIME`, `TIMESTAMP`, `TIME`, `YEAR` | `TIMESTAMP` is UTC, 1970 to 2038 |
| `BOOL`, `BIT(n)` | true/false, bits |
