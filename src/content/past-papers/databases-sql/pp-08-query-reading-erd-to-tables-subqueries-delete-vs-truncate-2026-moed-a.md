---
title: "Query Reading, ERD to Tables, Subqueries & DELETE vs TRUNCATE (2026 Moed A)"
type: past-paper
status: worked-solution
exam: "Databases & SQL Final Exam, Moed A (2026)"
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
  - left-join
  - group-by
  - having
  - constraint
  - foreign-key
  - junction-table
  - composite-primary-key
  - subquery
  - aggregate-function
  - truncate-table
aliases:
  - Databases Moed A 2026
  - SQL Exam 2026 Moed A
  - PP08 Databases & SQL
subject: databases-sql
in_scope: true
---

# Query Reading, ERD to Tables, Subqueries & DELETE vs TRUNCATE (2026 Moed A)

> Part of: [[Databases & SQL]]
> **Databases & SQL Final Exam, Moed A (2026)**, course code 2455. Bilingual (Hebrew and English), 20 short written questions of 5 points each (100 total).
> Key concepts: [[LEFT JOIN]], [[INNER JOIN]], [[GROUP BY]], [[HAVING]], [[WHERE]], [[COUNT(*) vs COUNT(column)]], [[Constraint]], [[Conceptual Model]], [[Foreign Key]], [[Junction Table]], [[Composite Primary Key]], [[Primary Key]], [[UNIQUE Constraint]], [[Subquery]], [[Aggregate Function]], [[DELETE]], [[TRUNCATE TABLE]], [[DISTINCT]], [[ORDER BY]]

> [!info] Answers are from the instructor's solution file
> Every **Official answer** below is the file's text, lightly tidied. **Why** sections are AI-written explanation. Nothing official has been changed. Where an official answer looks wrong or incomplete, a warning box says so.

> [!note] Numbering
> The Hebrew text refers to Query C's questions as 17 to 20 and numbers Q14 as 15. This note follows the English numbering, 1 to 20.

## What this paper tests

| Block | Questions | Core idea |
|---|---|---|
| Query A | Q1 to Q4 | LEFT JOIN with COUNT |
| Definitions | Q5, Q10, Q11 | Constraints and ER building blocks |
| Diagram B | Q6 to Q9 | Turning an ERD into tables and keys |
| Query C | Q12 to Q15 | Subquery with `IN` |
| Theory | Q16 to Q20 | Aggregates, WHERE vs HAVING, DELETE vs TRUNCATE, DISTINCT, ORDER BY |

---

## Query A (Q1 to Q4)

```sql
SELECT
    c.customer_name,
    COUNT(o.order_id) AS num_orders
FROM customer AS c
LEFT JOIN order AS o
    ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY num_orders DESC;
```

> [!warning] Exam typo
> The query says `order`, while Q1 says the `orders` table. `ORDER` is a **reserved word**, so the query as printed would be a syntax error without backticks. The questions clearly assume it runs, so treat the table as `orders`.

### Q1 — How many output rows?

`customer` has 8 records and `orders` has 20. Can you tell how many rows Query A outputs?

> [!success] Official answer
> **Yes, 8 rows.** LEFT JOIN keeps all customers, and GROUP BY creates one row per customer.
> Also accepted: not possible, because there might be duplicates in the name, which would be grouped, giving fewer rows.

> [!warning] Doubtful accepted alternative
> The query groups by `c.customer_id`, **not by name**. Two customers with the same name stay in separate groups, assuming `customer_id` is the primary key. **8 is the answer to give.**

### Q2 — Changing to INNER JOIN

> [!success] Official answer
> Only customers with at least one order will appear. Customers without orders will be excluded.

### Q3 — Adding a WHERE (5 pts)

```sql
WHERE COUNT(o.order_id) > 5
```

> [!success] Official answer
> This is invalid SQL and will result in an error.

**Why:** `WHERE` runs **before** grouping, so aggregates don't exist yet. The correct clause is `HAVING COUNT(o.order_id) > 5`.

### Q4 — A customer with no orders

What value appears in `num_orders` for that customer?

> [!success] Official answer
> **0.** `COUNT(column)` ignores NULL, and no matching rows means count = 0.
> "NULL as an answer is accepted as well."

> [!warning] Doubtful accepted alternative
> `COUNT` **never returns NULL**. The joined row has NULL in `o.order_id`, but the count of non-NULL values is **0**. Always answer 0. See [[COUNT(*) vs COUNT(column)]].

---

## Q5 — What is a constraint?

> [!success] Official answer
> A rule that enforces data integrity in a table.

---

## Diagram B (Q6 to Q9)

![[pp08-diagram-b.jpg]]

Business description:

- A Student can enroll in 0 or more Courses.
- A Course can have 0 or more Students enrolled in it.
- Each Course is taught by exactly one Lecturer.
- A Lecturer must teach at least one Course.

> [!warning] Correction printed on the exam
> "In the diagram, there was a mistake": the Course-Lecturer relationship should be **M:1, with the M on the Course side**. The picture above shows the original, uncorrected labels.

### Q6 — Which tables?

> [!success] Official answer
> **Student** stores student data.
> **Course** stores course data.
> **Lecturer** stores lecturer data.
> **Enrollment** links students and courses.

### Q7 — Which foreign keys?

> [!success] Official answer
> **Three:**
> - `Course.lecturer_id` → Lecturer
> - `Enrollment.student_id` → Student
> - `Enrollment.course_id` → Course

```text
Student ──< Enrollment >── Course >── Lecturer
```

**Why:** many-to-many needs a [[Junction Table]] with two FKs. In the 1-to-many, the FK goes on the "many" side, so `lecturer_id` lives in Course.

### Q8 — Each student enrolls in a course at most once

> [!success] Official answer
> Use a composite Primary Key or `UNIQUE` constraint on `(student_id, course_id)` in the Enrollment table.

### Q9 — "Every lecturer must teach at least one course"

Can this be enforced using SQL constraints alone?

> [!success] Official answer
> No, this cannot be done using constraints only.

**Why:** the logical model cannot dictate a parent's **minimum number of children**. An FK lives in the child, so nothing forces a parent row to have one. See [[Lec_03-From Conceptual to Logical Models|Lecture 3]].

---

## Q10 — PRIMARY KEY vs UNIQUE

> [!success] Official answer
> **Common:** both enforce uniqueness.
> **Difference:** PRIMARY KEY cannot contain NULL, while UNIQUE can.

## Q11 — Building blocks of a conceptual model

> [!success] Official answer
> Entities, Attributes, Relationships.

---

## Query C (Q12 to Q15)

```sql
SELECT
    c.customer_id,
    c.name
FROM customer AS c
WHERE c.customer_id IN (
    SELECT o.customer_id
    FROM orders AS o
    GROUP BY o.customer_id
    HAVING COUNT(o.order_id) > 5
);
```

### Q12 — Role of the subquery

> [!success] Official answer
> The subquery finds the customer IDs with more than 5 orders. The outer query selects their names.

### Q13 — What does the result contain?

> [!success] Official answer
> Each row represents a customer with more than 5 orders. The columns `customer_id` and `name` are shown.

### Q14 — A customer with no orders

> [!success] Official answer
> No, because the subquery only includes customers with orders.

**More precisely:** it only includes customers with **more than 5** orders.

### Q15 — Replacing IN with NOT IN

> [!success] Official answer
> Returns customers with 5 or fewer orders (or none).

> [!note] NULL trap (AI addition)
> This holds if `orders.customer_id` has no NULLs. If a NULL group with more than 5 orders reached the subquery, `NOT IN` would return **no rows at all**, because comparing with NULL is never true.

---

## Q16 — Aggregate functions

> [!success] Official answer
> Functions that operate on multiple rows and return one value: `COUNT()`, `SUM()`, `MAX()`, `MIN()`, `AVG()`.

## Q17 — WHERE vs HAVING

> [!success] Official answer
> **WHERE** filters rows, before GROUP BY.
> **HAVING** filters groups, after GROUP BY.

## Q18 — DELETE vs TRUNCATE

> [!success] Official answer
> **DELETE** works row by row, can use WHERE, can roll back.
> **TRUNCATE** deletes all rows, no WHERE, usually cannot roll back.

**Also worth adding:** `TRUNCATE` resets `AUTO_INCREMENT`. See [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]].

## Q19 — DISTINCT

> [!success] Official answer
> Removes duplicate rows.

## Q20 — ORDER BY

Purpose? Does it change the stored data?

> [!success] Official answer
> Sorts the result set. It does not change the database.

---

## Flags at a glance

| Question | Issue |
|---|---|
| Query A | `order` is a reserved word; printed query would error |
| Q1 | Accepted "duplicate names" alternative conflicts with `GROUP BY customer_id` |
| Q4 | Accepted "NULL" alternative is wrong; COUNT returns 0 |
| Diagram B | Course-Lecturer labels are wrong in the picture (corrected on the paper) |

## Related Notes

- [[Databases & SQL]]
- [[Lec_03-From Conceptual to Logical Models|Lecture 3]], [[Lec_09-SELECT|Lecture 9]], [[Lec_10-SELECT & JOINs|Lecture 10]], [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lecture 11]]
- Previous year: [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]], [[PP_07-INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)|PP 07]]
