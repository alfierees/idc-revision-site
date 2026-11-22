---
title: "JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Databases & SQL Final Exam, Moed A (2025)"
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
  - cross-join
  - using
  - having
  - junction-table
  - union
  - database-index
  - surrogate-key
  - like
  - check-constraint
  - float
  - decimal
aliases:
  - Databases Moed A 2025
  - SQL Exam 2025 Moed A
  - PP06 Databases & SQL
subject: databases-sql
in_scope: true
---

# JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)

> Part of: [[Databases & SQL]]
> **Databases & SQL Final Exam, Moed A (2025)**, course code 2455, Uri Goldstein. Bilingual (Hebrew and English), 19 short written questions, 5 points each except Q11 (10 points).
> Key concepts: [[CROSS JOIN]], [[UNIQUE Constraint]], [[DISTINCT]], [[Alias]], [[USING]], [[HAVING]], [[Junction Table]], [[ORDER BY]], [[UNION]], [[Database Index]], [[Natural Key]], [[Surrogate Key]], [[LIKE]], [[CHECK Constraint]], [[FLOAT]], [[DECIMAL]], [[LEFT JOIN]], [[FULL OUTER JOIN]]

> [!info] Answers are from the instructor's answer file
> Every **Official answer** below is the file's text, lightly tidied. **Why** sections are AI-written explanation. Nothing official has been changed. Where an official answer looks wrong or incomplete, a warning box says so.

> [!note] Numbering
> The printed English numbering is off (1, 3, 3, 4, 5, then 6 onwards). This note uses the Hebrew sequence, 1 to 19.

## What this paper tests

Short theory questions, with no long queries to write. Most answers come from knowing **when a clause runs** and **what a feature guarantees**.

| Topic | Questions |
|---|---|
| Joins and set operations | Q1, Q4, Q8, Q13, Q17 |
| Grouping and sorting | Q5, Q7 |
| Keys, constraints, modelling | Q2, Q6, Q10, Q14, Q15, Q19 |
| Patterns and data types | Q11, Q12, Q18 |
| SQL language and indexes | Q3, Q9, Q16 |

---

## Q1 — CROSS JOIN and the other joins (5 pts)

There is a special connection between `CROSS JOIN` and the other types of JOINs we learned. Explain it.

> [!success] Official answer
> CROSS JOIN is the basis for the other 4 types of JOINs. It is the first step in them, then the ON/USING clause is applied.

**Why:** an [[INNER JOIN]] is conceptually a [[CROSS JOIN]] followed by removing rows that fail `ON`. Outer joins then add back unmatched rows. See [[Lec_09-SELECT|Lecture 9]].

## Q2 — DISTINCT on a UNIQUE column (5 pts)

Given a `UNIQUE` constraint on a column, is there a point to using `DISTINCT` when reading it in a `SELECT`?

> [!success] Official answer
> Both are accepted: **"no"**, because the constraint guarantees values are not repeated, and **"yes"** when specifically referring to NULL values. If the column has more than one NULL, only one will be shown by `SELECT DISTINCT`.

**Why:** `UNIQUE` allows many NULLs, while `DISTINCT` treats NULLs as duplicates of each other. "Yes, because of NULLs" is the stronger answer.

## Q3 — The AS keyword (5 pts)

```sql
SELECT (weight / (height * height)) AS bmi
FROM people;
```

What is the effect of `AS`, and what is the benefit?

> [!success] Official answer
> `AS` defines an alias name for the column expression. The benefit is readability: it makes it easier to understand what the column contains and/or easier to re-use it.

## Q4 — Replacing ON with USING (5 pts)

```sql
SELECT * FROM person JOIN car
ON person.person_id = car.owner_id;
```

Can `ON` be replaced with `USING`? Explain.

> [!success] Official answer
> No, because the PK column name is different from the FK column name.

**Why:** [[USING]] needs the **same column name** in both tables.

## Q5 — shipping_cost in HAVING (5 pts)

```sql
SELECT package_id, AVG(price)
FROM package_items
GROUPY BY package_id        -- typo as printed in the exam
HAVING shipping_cost > 9.99;
```

Why is it a mistake to use `shipping_cost` in `HAVING`?

> [!success] Official answer
> HAVING filters groups of records. It runs after GROUP BY and has no access to non-grouped, non-aggregated columns like `shipping_cost`.
> *Alternative:* each group can have several different `shipping_cost` values, making it impossible for HAVING to decide whether to filter the group.

**Fix:** to filter rows, use `WHERE shipping_cost > 9.99` before `GROUP BY`.

## Q6 — Tables vs entities (5 pts)

When an ER model is implemented as a relational database, the number of tables is not necessarily the number of entities. Give one example.

> [!success] Official answer
> A many-to-many relationship between two entities. It results in an extra intermediate (junction) table. Specific examples, such as films and actors, are also acceptable.

## Q7 — Same result from two ORDER BYs (5 pts)

```sql
SELECT first_name, last_name FROM customers
ORDER BY last_name, first_name;

SELECT first_name, last_name FROM customers
ORDER BY last_name;
```

Both returned exactly the same result. How could this happen?

> [!success] Official answer
> If every `last_name` had only one customer. Or if the table is empty. Or if by chance the database engine returned the second query's results in sorted order.

**Why:** the second sort key only matters **among ties** in the first. Without it, the order among ties is not guaranteed.

## Q8 — How many rows from UNION? (5 pts)

`employees` has 60 records and `contractors` has 30. Can you know how many rows this returns?

```sql
SELECT full_name FROM employees
UNION
SELECT full_name FROM contractors;
```

> [!success] Official answer
> We can't tell. If an employee has the same `full_name` as a contractor, the two records appear as a single record, and we can't tell how many of these exist.
> *(The Hebrew version printed 6 and 3. Students were told to use the English 60 and 30.)*

> [!note] AI addition
> `UNION` also removes duplicates **within** one table, such as two employees with the same name. The result is between 1 and 90 rows when both tables have names (assuming no NULL quirks). `UNION ALL` would give exactly 90.

## Q9 — Why not index everything? (5 pts)

> [!success] Official answer
> Where an index exists, `INSERT`, `UPDATE` and `DELETE` require the index to be refreshed. If we add indexes to all columns, the database becomes slower and requires more expensive CPU time.

See [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]].

## Q10 — Disadvantage of natural keys (5 pts)

> [!success] Official answer
> Natural primary keys are tightly coupled to the business domain. This increases the likelihood of business changes requiring changes to the PK structure, which are time-consuming and error-prone.

## Q11 — Email validation (10 pts)

An email address must contain `@` **once**, followed by one dot `.` or more.

### Q11A (5 pts) — Can a `LIKE` pattern match such addresses?

> [!success] Official answer
> Yes. This pattern: `'%@%.%'`.

### Q11B (5 pts) — Given a `VARCHAR` column, can you guarantee it never holds invalid addresses?

> [!success] Official answer
> Yes. A `CHECK` constraint can be applied to the column based on the above pattern.

> [!warning] Doubtful official answer: "@ once" is not enforced
> `'%@%.%'` requires **at least one** `@`, so it also accepts `a@b@c.com`. The paper's own Q18 says LIKE cannot express "exactly one X", which is the same problem. A single pattern can't do it, but two predicates can:
> ```sql
> CHECK (email LIKE '%@%.%' AND email NOT LIKE '%@%@%')
> ```
> In the exam, give the official pattern and mention this limit. It also still accepts odd values like `@.`, so "guarantee" holds only for this simple rule.

## Q12 — The 2.33999999999 surprise (5 pts)

| product_id | name | price | value_added_tax |
|---|---|---|---|
| 1 | Pencil | 2.0 | 1.17 |

```sql
SELECT (price * value_added_tax) AS full_price
FROM products WHERE product_id = 1;
```

The result was `2.33999999999` rather than `2.34`. Why, and how could it have been avoided?

> [!success] Official answer
> The inaccuracy comes from the `FLOAT` data type. He should have used `DECIMAL`, or the `ROUND()` function in his query.

**Why:** [[FLOAT]] stores approximations and [[DECIMAL]] stores exact values. `DECIMAL` fixes the cause, while `ROUND()` only tidies the output. The printed query has a typo (`)price`), corrected above.

## Q13 — Subquery as a JOIN (5 pts)

```sql
SELECT
    full_name,
    (SELECT name
     FROM branch
     WHERE branch.id = employee.branch_id) AS branch_name
FROM employee;
```

Which JOIN gives the same result?

> [!success] Official answer
> A `LEFT JOIN`. All records in `employee` appear in the output. Those with no match in `branch` show NULL as the branch name.

**Why:** this assumes `branch.id` is unique, which a PK guarantees. If the subquery returned two rows, MySQL would raise an error.

## Q14 — Convention center tables (5 pts)

- A convention can have many participants.
- A participant can participate in many conventions.
- A convention can be in multiple halls.
- A hall can be used in multiple conventions.

How many tables do you need?

> [!success] Official answer
> **5 tables.** 3 for the entities Convention, Hall and Participant, plus 2 intermediate (junction) tables for the two many-to-many relationships "between Convention and Participant and Participant and Hall".

> [!warning] Error in the official wording
> The count of **5 is right**, but the second junction table should link **Convention and Hall**, as the question states. Nothing in the question links Participant directly to Hall.

```text
Convention ── convention_participant ── Participant
     └─────── convention_hall ───────── Hall
```

## Q15 — Mandatory INSERT column (5 pts)

```sql
CREATE TABLE `person` (
    `person_id` INT PRIMARY KEY AUTO_INCREMENT,
    `full_name` VARCHAR(256) NOT NULL,
    `description` VARCHAR(256),
    `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Which column(s) must always be given a value?

> [!success] Official answer
> `full_name`, because it does not allow NULL and has no DEFAULT.

| Column | Why it can be omitted (or not) |
|---|---|
| `person_id` | `AUTO_INCREMENT` fills it |
| `full_name` | **Required** |
| `description` | Nullable, becomes NULL |
| `last_update` | Has a DEFAULT |

## Q16 — Keywords, identifiers, literals (5 pts)

> [!success] Official answer
> **KEYWORDS** make up the syntax of SQL. Each has a specific meaning in the language.
> **IDENTIFIERS** are the names of objects in the database.
> **LITERAL VALUES** are bits of data embedded in the command.

## Q17 — RIGHT, LEFT and FULL OUTER (5 pts)

> [!success] Official answer
> In MySQL, LEFT JOIN and RIGHT JOIN are combined to perform a FULL OUTER JOIN.

**Add for full marks:** they are combined **with `UNION`**. See [[Lec_10-SELECT & JOINs|Lecture 10]].

## Q18 — A pattern LIKE cannot express (5 pts)

Give an example of a search pattern that cannot be created using `LIKE` and its two special characters.

> [!success] Official answer
> Only one is required:
> - Phone numbers. There is no way, in LIKE, to target digits.
> - Prices, for the same reason.
> - Values with exactly one (no more, no less) letter X.

## Q19 — Three constraints (5 pts)

> [!success] Official answer
> **UNIQUE** ensures a value appears at most once in a column.
> **NOT NULL** ensures no NULL values appear in a column.
> **CHECK** ensures all values satisfy a given predicate.

---

## Flags at a glance

| Question | Issue |
|---|---|
| Q11 | Official pattern does not enforce "@ exactly once" |
| Q14 | Official wording names the wrong junction pair; the count of 5 is right |

## Related Notes

- [[Databases & SQL]]
- [[Lec_09-SELECT|Lecture 9]], [[Lec_10-SELECT & JOINs|Lecture 10]], [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]]
- Same year: [[PP_07-INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)|PP 07]]
