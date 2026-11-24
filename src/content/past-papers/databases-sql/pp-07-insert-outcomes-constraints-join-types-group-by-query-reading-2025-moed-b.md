---
title: "INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "Databases & SQL Final Exam, Moed B (2025)"
semester: 1
year: 2
course: "Databases & SQL"
course_code: 2455
instructor: Uri Goldstein
tags:
  - databases
  - sql
  - past-paper
  - worked-solution
  - insert-into
  - constraint
  - default-constraint
  - inner-join
  - left-join
  - cross-join
  - full-outer-join
  - using
  - group-by
  - having
aliases:
  - Databases Moed B 2025
  - SQL Exam 2025 Moed B
  - PP07 Databases & SQL
subject: databases-sql
in_scope: true
---

# INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)

> Part of: [[Databases & SQL]]
> **Databases & SQL Final Exam, Moed B (2025)**, course code 2455, Uri Goldstein. Bilingual (Hebrew and English), 4 questions with 20 sub-questions of 5 points each (100 total).
> Key concepts: [[INSERT INTO]], [[AUTO_INCREMENT]], [[DEFAULT Constraint]], [[NOT NULL Constraint]], [[Constraint]], [[UNIQUE Constraint]], [[CHECK Constraint]], [[JOIN]], [[INNER JOIN]], [[LEFT JOIN]], [[CROSS JOIN]], [[FULL OUTER JOIN]], [[USING]], [[GROUP BY]], [[HAVING]], [[WHERE]]

> [!info] Answers are from the instructor's answer file
> Every **Official answer** below is the file's text, lightly tidied. **Why** sections are AI-written explanation. Nothing official has been changed. Where an official answer looks wrong or incomplete, a warning box says so.

## What this paper tests

| Question | Core idea | Points |
|---|---|---|
| Q1 | Predict what each `INSERT` does | 5 × 5 |
| Q2 | What constraints are and how they differ | 5 × 5 |
| Q3 | Identify and compare JOIN types | 5 × 5 |
| Q4 | Read a full `GROUP BY` query | 5 × 5 |

---

## Q1 — Will the INSERT succeed?

```sql
CREATE TABLE person (
    person_id  INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(64) NOT NULL DEFAULT '',
    initial    CHAR(1),
    last_name  VARCHAR(64) NOT NULL
);
```

For each command, fill in the inserted values, or explain why it fails. Each command runs on an **empty, reset table**.

> [!tip] Column cheat sheet
> | Column | If omitted |
> |---|---|
> | `person_id` | Auto-generated (1 on a reset table) |
> | `first_name` | Empty string `''` from DEFAULT |
> | `initial` | NULL |
> | `last_name` | **Error**: NOT NULL with no DEFAULT |

### Q1.1 (5 pts)

```sql
INSERT INTO `person` (first_name, last_name)
VALUES ('Alan', 'Turing');
```

> [!success] Official answer: succeeds
> | person_id | first_name | initial | last_name |
> |---|---|---|---|
> | 1 | Alan | NULL | Turing |

### Q1.2 (5 pts)

```sql
INSERT INTO `person` (person_id, first_name, initial, last_name)
VALUES (10, 'Edgar', 'F', 'Codd');
```

> [!success] Official answer: succeeds
> | person_id | first_name | initial | last_name |
> |---|---|---|---|
> | 10 | Edgar | F | Codd |

**Why:** `AUTO_INCREMENT` only generates a value when you don't supply one.

### Q1.3 (5 pts)

```sql
INSERT INTO `person` (initial, last_name)
VALUES ('X', 'Professor');
```

> [!success] Official answer: succeeds
> | person_id | first_name | initial | last_name |
> |---|---|---|---|
> | 1 | *(empty string)* | X | Professor |

**Why:** `first_name` falls back to its `DEFAULT ''`. An empty string is **not** NULL, so `NOT NULL` is satisfied.

### Q1.4 (5 pts)

```sql
INSERT INTO `person` (first_name, initial)
VALUES ('Ali', 'G');
```

> [!success] Official answer: fails
> No value is provided for `last_name`. SQL will default to a NULL value but this column does not allow them.

> [!warning] Small imprecision
> The outcome is right. Strictly, MySQL doesn't try NULL here: in its default strict mode it reports that `last_name` **has no default value**. With strict mode off, it would insert `''` with a warning. Use the official reasoning in the exam.

### Q1.5 (5 pts)

```sql
INSERT INTO `person` (person_id, first_name, last_name)
VALUES ('A.', 'Taylor', 'Swift');
```

> [!success] Official answer: fails
> `'A.'` is an invalid value for `person_id`. The column type is INT but this value is a string (VARCHAR).

---

## Q2 — Constraints

### Q2.1 (5 pts) — What is a constraint?

> [!success] Official answer
> A rule that we can set on table columns. The rule is enforced when users modify data in the columns.

### Q2.2 (5 pts) — Two types of constraint

> [!success] Official answer
> **NOT NULL** prevents NULL values from being present in the column.
> **UNIQUE** prevents any single value from appearing more than once in the column.

### Q2.3 (5 pts) — Can one constraint cover two or more columns?

> [!success] Official answer
> Yes. `UNIQUE` can be applied to two or more columns, preventing any **combination** of their values from appearing more than once.

```sql
UNIQUE (shirt_size, shoe_size)
```

### Q2.4 (5 pts) — How does DEFAULT differ from the others?

> [!success] Official answer
> Most constraints can fail a data modification command when their rule is violated. `DEFAULT` cannot.

### Q2.5 (5 pts) — Can this be simplified?

```sql
size INT CHECK(size IS NOT NULL)
```

> [!success] Official answer
> Yes, using a `NOT NULL` constraint:
> ```sql
> size INT NOT NULL
> ```

---

## Q3 — JOIN operations

### Q3.1 (5 pts) — Purpose of a JOIN

> [!success] Official answer
> To combine related records from two tables. Records are matched "horizontally" by PK-FK relationship.

### Q3.2 (5 pts) — INNER vs LEFT

```sql
SELECT e.name, d.dept_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.dept_id = d.dept_id;

SELECT e.name, d.dept_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.dept_id = d.dept_id;
```

> [!success] Official answer
> The INNER JOIN returns only records in the left table that have related records in the right table.
> The LEFT JOIN returns the same, plus any records in the left table that have no related records in the right table.

### Q3.3 (5 pts) — Name this join

```sql
SELECT boys.name, girls.name
FROM boys JOIN girls;
```

> [!success] Official answer
> A **CROSS JOIN**. All the records in `boys` are each matched with all the records in `girls`.

**Why:** in MySQL, `JOIN` with no `ON` or `USING` is a cross join. Each output row is one boy-girl pair.

### Q3.4 (5 pts) — Name this join

```sql
SELECT s.name, c.name
FROM students AS s LEFT JOIN clubs AS c
USING (club_id)
UNION
SELECT s.name, c.name
FROM students AS s RIGHT JOIN clubs AS c
USING (club_id);
```

> [!success] Official answer
> A **FULL OUTER JOIN**. All left records with related right records are included, plus any left records without a match, and likewise any right records without a match.

> [!note] AI addition
> Because `UNION` removes duplicates and only names are selected, two different students with the **same name in the same club** would collapse into one row. Selecting the IDs as well avoids this.

### Q3.5 (5 pts) — ON vs USING

```sql
SELECT p.name, o.date
FROM products AS p JOIN orders AS o
    ON p.product_id = o.product_id
ORDER BY p.name, o.date;

SELECT p.name, o.date
FROM products AS p JOIN orders AS o
    USING (product_id)
ORDER BY p.name, o.date;
```

> [!success] Official answer
> Yes, the same result. The ON and USING clauses here are equivalent and all other clauses are identical.

---

## Q4 — Reading a query

```sql
SELECT
    dept_name,
    COUNT(employee_id) AS num_of_employees
FROM employee
JOIN department USING (dept_id)
WHERE hire_date >= '2024-01-01'
GROUP BY dept_id
HAVING COUNT(employee_id) > 5
ORDER BY num_of_employees DESC;
```

### Q4.1 (5 pts) — What does it return?

> [!success] Official answer
> A list of departments that have more than 5 employees which were hired this year (2025). For each department it shows its name and the number of such employees.

> [!warning] Doubtful official answer: the date
> The filter is `hire_date >= '2024-01-01'`, so it counts employees hired **since the start of 2024**, not only in 2025. The official text looks like a leftover from an earlier year's paper. Describe what the query actually does.

### Q4.2 (5 pts) — Which JOIN type?

> [!success] Official answer
> INNER JOIN, because it contains the keyword `JOIN` with a `USING` clause.

### Q4.3 (5 pts) — Purpose of DESC

> [!success] Official answer
> `DESC` makes the sort order descending. Removing it affects the results, because they would then be in ascending order.

### Q4.4 (5 pts) — Purpose of GROUP BY

> [!success] Official answer
> It groups the "raw" records in the JOIN output into groups, one per department. The final output contains one row per group.

### Q4.5 (5 pts) — Moving the COUNT to WHERE

If `COUNT(employee_id) > 5` moves from `HAVING` to `WHERE`, replacing the existing `WHERE` condition, the query errors. Why?

> [!success] Official answer
> The error is due to the aggregate function `COUNT()` in the predicate. The WHERE clause is executed before the GROUP BY step and cannot contain such functions.

---

## Flags at a glance

| Question | Issue |
|---|---|
| Q1.4 | Right outcome; the reason is slightly imprecise for MySQL |
| Q4.1 | Official answer says hired in 2025, but the filter starts at 2024-01-01 |

## Related Notes

- [[Databases & SQL]]
- [[Lec_07-DDL & Constraints|Lecture 7]], [[Lec_09-SELECT|Lecture 9]], [[Lec_10-SELECT & JOINs|Lecture 10]], [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]]
- Same year: [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]]
