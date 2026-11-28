---
title: "Databases & SQL Cheat Sheet"
subject: databases-sql
type: reference
description: "Everything the written final asks, in course order: ER modelling and turning an ERD into tables, keys and the six constraints, the three parts of a foreign key, normalisation, DDL and INSERT outcomes, the order of execution, WHERE versus HAVING, every JOIN and its row count, subqueries, indexes, views and NoSQL."
course: Databases & SQL
instructor: Uri Goldstein
semester: 1
year: 2
order: 1
pinned: true
tags:
  - databases-sql
  - exam-prep
  - cheat-sheet
aliases:
  - SQL Cheat Sheet
---

> **The exam:** written answers, 100 points, worth 80% of the grade (the four pair exercises are the other 20%). Two layouts have been used: **4 to 6 questions of 15 to 20 points** (2024 A, 2024 B, the undated Moed B, 2025 B) or **19 to 20 short questions of 5 points** (2025 A, 2026 A). Answers are a sentence or two: say **what the feature is for** and **when it runs**. No long queries to write. Every paper on this site has the instructor's answers. See the [[Past Paper Topic Map]].

---

## 0. Method picker: what does this question want?

| You see… | Answer with | Section |
|---|---|---|
| An ERD and "how many tables?" | One per entity, plus one per many-to-many | §1 |
| "How many foreign keys?" | One per 1-to-many (on the many side), two per junction table | §1 |
| "Every X must have exactly one Y" | `NOT NULL` on the FK column | §1 |
| "Every Y can have at most one X" | `UNIQUE` on the FK column | §1 |
| "Every Y must have at least one X" | **Cannot** be enforced with constraints | §1 |
| "Values must be different / not empty / in a range" | `UNIQUE` / `NOT NULL` / `CHECK` | §2 |
| "The three mechanisms of a foreign key" | Column, constraint (referential integrity), index | §2 |
| A `CREATE TABLE` and several `INSERT`s | NOT NULL without DEFAULT is the only required column | §4 |
| A grouped query, "what does it return?" | One row per group; read WHERE, GROUP BY, HAVING, ORDER BY in turn | §5 |
| An aggregate in `WHERE` | Error: WHERE runs before groups exist | §5 |
| Table sizes and "how many rows does the JOIN return?" | CROSS and (with an FK) LEFT from the child are knowable; the rest need the data | §6 |
| `FULL OUTER JOIN` in MySQL | Not supported: LEFT JOIN `UNION` RIGHT JOIN | §6 |
| A scalar subquery in `SELECT` | Behaves like a LEFT JOIN | §7 |
| "Why not index every column?" | Every write must refresh every index | §7 |

---

## 1. ER modelling and the ERD to tables

**The 3-step process:** business requirements → **ER modelling** (deliverable: an ER model, usually drawn as an ERD) → build the database in SQL (2024 A Q2).

| Model | Building blocks | Vendor-specific? |
|---|---|---|
| [[Conceptual Model\|Conceptual]] | **Entities, attributes, relationships** (2026 A Q11) | No |
| [[Logical Model\|Logical]] | Tables, columns, PKs, FKs; normalisation applied | No |
| [[Physical Model\|Physical]] | Data types, constraints, indexes | Yes |

**[[Cardinality]]** is min..max on each side, read at the **far** end. `Book 1..1 —— 0..M Chapter`: a book has 0 or more chapters; a chapter has exactly one book. In [[Crow's Foot Notation\|crow's foot]]: `||` exactly one, `O|` zero or one, `O<` zero or many, `|<` one or many.

### Turning an ERD into tables

| Relationship | Tables | Foreign keys |
|---|---|---|
| 1-to-many | one per entity | **one**, in the "many" (child) table |
| 1-to-1 | one per entity | one, with `UNIQUE` on it |
| Many-to-many | one per entity **plus a [[Junction Table\|junction table]]** | **two**, both in the junction table |
| Three-way (grade links course, student, semester) | the link entity is already a table | three, all in the link table |
| "is a" (inheritance) | one per entity | the child's PK is also its FK to the parent |
| Recursive (manager, parent) | one | a self-referencing FK |

> [!example] 2026 A Q6 to Q9
> Students and courses are many-to-many; each course has exactly one lecturer. **4 tables** (student, course, lecturer, enrollment), **3 FKs** (`course.lecturer_id`, `enrollment.student_id`, `enrollment.course_id`). "A student enrols at most once": composite PK or `UNIQUE (student_id, course_id)`. "Every lecturer teaches at least one course": **not possible** with constraints.

### Cardinality with constraints on the FK column

| On the FK column | Means |
|---|---|
| The FK itself | a child has **at most 1** parent |
| `NOT NULL` | a child has **at least 1** parent (so exactly 1) |
| `UNIQUE` | a parent has **at most 1** child (1-to-1) |
| — | a parent has **at least 1** child: **cannot** be dictated (the parent row is inserted first, with no children) |

### The junction table's primary key

| Option | Effect |
|---|---|
| Composite PK `(book_id, author_id)` | the same pair cannot repeat |
| Surrogate PK `book_author_id` | the same pair **can** repeat; add `UNIQUE (book_id, author_id)` to stop it (undated Moed B Q6) |

---

## 2. Keys and the six constraints

A **[[Constraint]]** is a rule about the values allowed in **one or more columns**, defined with DDL and enforced by the server on every `INSERT` and `UPDATE` (2024 A Q1, 2025 B Q2).

| Constraint | On one column | Can it make a write fail? |
|---|---|---|
| `PRIMARY KEY` | unique and not NULL; one per table; target of FKs | yes |
| `FOREIGN KEY` | value must exist in the parent's PK ([[Referential Integrity]]) | yes (errors 1452 child, 1451 parent) |
| `UNIQUE` | no two equal values (NULLs allowed, several of them) | yes |
| `NOT NULL` | no NULL | yes |
| `CHECK` | value satisfies a predicate, e.g. `CHECK (number BETWEEN 0 AND 100)` | yes |
| `DEFAULT` | fills a value when none is given | **no**: it "fixes" input instead of rejecting it |

- **PK vs UNIQUE:** both enforce uniqueness; PK forbids NULL, UNIQUE allows it; only one PK per table (2026 A Q10).
- **Referential integrity** is guaranteed by `PRIMARY KEY` and `FOREIGN KEY` together (2024 B Q3.2).
- **One constraint over two columns:** `UNIQUE (shirt_size, shoe_size)` makes the **combination** unique.
- `CHECK (size IS NOT NULL)` is just `NOT NULL` (2025 B Q2.5). `Fee >= 0` can be `CHECK` or `UNSIGNED`.

### The three mechanisms of a foreign key (asked twice word for word)

| | Name | Job |
|---|---|---|
| A | **Column(s)** | holds values from the parent's primary key |
| B | **Constraint** | enforces referential integrity: no value missing from the parent's PK |
| C | **Index (key)** | speeds up reading by the column, and so speeds up JOINs on it |

You **can** still JOIN on the column without the constraint, but orphan values can give wrong output (2024 A Q3.2).

### Natural vs surrogate keys

A **[[Natural Key\|natural key]]** comes from the data (SSN, username) and is tied to the business: when the business changes, the PK and every FK pointing at it must change. A **[[Surrogate Key\|surrogate key]]** is generated (`AUTO_INCREMENT`) and stays stable. The course uses surrogates throughout (2025 A Q10).

---

## 3. Normalisation

Store every fact once, to avoid redundancy and the three anomalies.

| Anomaly | Example (courses and departments in one table) |
|---|---|
| [[Insert Anomaly\|Insert]] | a new department with no course yet cannot be inserted |
| [[Update Anomaly\|Update]] | rename the department on some rows and miss others |
| [[Delete Anomaly\|Delete]] | deleting the last course of a department erases the department |

| Form | Rule | Breaks it |
|---|---|---|
| [[First Normal Form\|1NF]] | a PK, one **atomic** value per cell, no repeating columns | `'054-444,053-333'`, `PHONE1, PHONE2` |
| [[Second Normal Form\|2NF]] | 1NF and every non-key column depends on the **whole** PK | `COURSE_NAME` depending on half of `(COURSE_ID, SEMESTER_ID)` |
| [[Third Normal Form\|3NF]] | 2NF and no non-key column depends on another non-key column | `TEACHER_NAME` depending on `TEACHER_ID` |

"The key, the whole key, and nothing but the key."

---

## 4. DDL, data types and INSERT

| Family | Commands | Undo? |
|---|---|---|
| [[DDL]] (structure) | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`, `SHOW` | no |
| [[DML]] (data) | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | `DELETE` can roll back in a transaction |

| | `DELETE` | `TRUNCATE` | `DROP TABLE` |
|---|---|---|---|
| Rows | the ones `WHERE` picks (all without one) | all | all |
| Structure | kept | kept | **gone** |
| `AUTO_INCREMENT` | keeps counting | **reset** | gone |
| Safe Update Mode | protected | not protected | not protected |

**Data types:** `INT` for whole numbers. `DECIMAL(p, s)` is exact (p digits in total, s after the point): use it for money. `FLOAT`/`DOUBLE` are approximate, which is why `2.0 × 1.17` printed `2.33999999999` (2025 A Q12: use `DECIMAL`, or `ROUND()` the output). `ENUM` is a closed list. `CHAR(n)` fixed, `VARCHAR(n)` variable. `TIMESTAMP` is UTC and ends in 2038. A wrong type rejects the value: `'A.'` into an `INT` PK fails (2025 B Q1.5).

### Which INSERTs succeed (every INSERT question in one table)

| Column definition | Left out of the INSERT |
|---|---|
| `AUTO_INCREMENT` PK | generated: 1 on an empty table. A value you give (10) is used as given |
| `NOT NULL DEFAULT ''` | the default (`''`, the empty string, which is **not** NULL) |
| nullable, no default | NULL |
| `DEFAULT CURRENT_TIMESTAMP` | now |
| **`NOT NULL`, no default** | **the INSERT fails**: this is the only mandatory column |

---

## 5. SELECT and the order of execution

Written `SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT`; **run** in this order:

| # | Clause | Works on |
|---|---|---|
| 1 | `FROM` / `JOIN` | builds the rows |
| 2 | `WHERE` | single rows ("raw data"); no aggregates allowed |
| 3 | `GROUP BY` | makes one bucket per value |
| 4 | `HAVING` | whole groups; aggregates allowed |
| 5 | `SELECT` | one output row per group |
| 6 | `ORDER BY` | sorts the result (never the stored data) |
| 7 | `LIMIT` | cuts rows |

- **WHERE vs HAVING is about timing.** A condition on raw values (`genre = 'Science Fiction'`, `hire_date >= ...`) goes in `WHERE`; a condition with `SUM`, `COUNT`, `AVG` goes in `HAVING`. An aggregate in `WHERE` is an **error**.
- `HAVING` and `SELECT` can use **different** aggregates (`SELECT AVG(amount) ... HAVING SUM(amount) > 100` runs fine, 2024 A Q4).
- After `GROUP BY` you may select only the grouping columns, aggregates and literals. A non-grouped column such as `shipping_cost` in `HAVING` is a mistake: each group can hold several values (2025 A Q5). MySQL rejects it by default (error 1055) unless the value is pinned, e.g. by `WHERE genre = '...'`.
- **Group by the key, not the name:** names may repeat and would merge different customers.
- **Aggregates and NULL:** `COUNT(*)` counts rows; `COUNT(col)`, `SUM`, `AVG`, `MIN`, `MAX` ignore NULLs. So after a LEFT JOIN, an unmatched customer gets `COUNT(o.order_id) = 0`.
- `LIKE`: `%` is any number of characters (0 or more), `_` exactly one. `'%@%.%'` matches an `@` followed later by a dot. LIKE **cannot** target digits or "exactly one X". A leading `%` stops an index being used.
- `BETWEEN` includes both ends. Test NULL with `IS NULL`, never `= NULL`.
- `DISTINCT` (a keyword in SELECT, DML) removes duplicate result rows; `UNIQUE` (DDL) stops duplicates being stored. `SELECT DISTINCT` on a UNIQUE column still matters if the column has several NULLs.
- `ORDER BY last_name, first_name`: the second key only breaks ties in the first. `ASC` is the default; `DESC` reverses.
- `AS` gives an alias: readability and re-use.

---

## 6. JOINs

Every join starts as a **CROSS JOIN** (all pairs); `ON` or `USING` then removes the non-matching pairs; outer joins add back unmatched rows with NULLs (2025 A Q1).

| Join | Keeps | Rows, fish (6) and bicycle (3), FK in fish |
|---|---|---|
| `CROSS JOIN`, or any `JOIN` with no `ON`/`USING` | every pair | **6 × 3 = 18**, always known |
| `INNER JOIN` (plain `JOIN` with `ON`/`USING`) | matched pairs | **unknown** (0 to 6) |
| `fish LEFT JOIN bicycle` | all fish, NULLs for no match | **6**: each fish matches at most one bicycle |
| `fish RIGHT JOIN bicycle` | all bicycles | unknown |
| `FULL OUTER JOIN` | everything | unknown (6 to 9) |

- In MySQL `JOIN`, `INNER JOIN` and `CROSS JOIN` are the same keyword: **the `ON` clause decides**. `fish CROSS JOIN bicycle ON ...` is an inner join; `fish INNER JOIN bicycle` with no `ON` is a cross join.
- `bicycle RIGHT JOIN fish` = `fish LEFT JOIN bicycle`: same rows, columns in another order.
- "7 fish are linked to 4 bicycles", totals unknown: INNER = **7**, everything else unknown (undated Moed B Q3).
- **`USING (col)`** needs the same column name on both sides and shows it once. `person.person_id = car.owner_id` cannot use `USING`.
- **FULL OUTER JOIN does not exist in MySQL:** `LEFT JOIN ... UNION ... RIGHT JOIN`. `UNION` drops the matched rows that both halves return; `UNION ALL` would keep them twice.
- **`UNION`** stacks results vertically: same number of columns and types; removes duplicates, so 60 employees `UNION` 30 contractors gives **an unknown number** of names (2025 A Q8).
- **ON vs WHERE:** `ON` says how the tables relate (PK = FK); `WHERE` filters. In a LEFT JOIN, failing `ON` keeps the left row with NULLs; failing `WHERE` drops it.

> [!example] Undated Moed B Q1
> `Products LEFT JOIN OrderDetails LEFT JOIN Orders GROUP BY p.ProductID`, with 5 products: **5 rows**, one per product, whatever the other tables hold. The LEFT JOINs keep products with no orders, which show a count of 0 because `COUNT(o.OrderID)` skips NULLs.

---

## 7. Subqueries, CTEs, indexes, views, NoSQL

**[[Subquery\|Subqueries]]** can sit in `WHERE`, `HAVING`, `FROM` (a derived table) or `SELECT` (a scalar subquery). A scalar subquery in `SELECT` keeps every outer row and returns NULL when nothing matches, so it behaves like a **LEFT JOIN**, not an INNER JOIN (2025 A Q13, undated Moed B Q5). `IN (subquery with HAVING COUNT(...) > 5)` keeps customers with more than 5 orders; `NOT IN` gives 5 or fewer, including none (2026 A Q12 to Q15).

**CTEs:** `WITH name AS (SELECT ...)` names a step so the next query can use it like a table. `WITH RECURSIVE` has a base case and a recursive step `UNION ALL`. **`WITH ROLLUP`** adds subtotal rows (NULL in the totalled column); `GROUPING()` returns 1 on those rows.

**[[Database Index\|Indexes]]** speed up reads (WHERE, JOIN, ORDER BY on that column) and **slow down writes**: every `INSERT`, `UPDATE`, `DELETE` must refresh them, so do not index everything (2025 A Q9, undated Moed B Q4.1). PK, FK and UNIQUE create an index automatically. An index cannot be altered: drop it and create it again. A full table scan happens with no usable index, a tiny table, or `LIKE '%n'`.

**[[View\|Views]]** are stored queries (a virtual table). A view is updatable only when its rows map 1-to-1 to a table's rows: no aggregates, `DISTINCT`, `GROUP BY`, `JOIN` or `UNION`.

**[[NoSQL]]** is an umbrella for non-relational databases (document, columnar, graph, object, time-series). MongoDB stores JSON-like documents in collections with no fixed schema: duplication is accepted, reads are fast, and **consistency is our responsibility**.

---

## 8. The language and the setup

| Word | What it is | Example |
|---|---|---|
| [[Keyword]] | part of SQL itself, same in every database | `SELECT`, `FROM`, `WHERE` |
| [[Identifier]] | a name of something in **this** database | `customer`, `first_name` |
| [[Literal Value]] | data written into the command | `'Tom'`, `25` |

Reserved words used as names need backticks: `` `order` ``, `` `character` `` (the 2026 A query that writes `LEFT JOIN order` would fail). Single quotes are for strings.

**Client-server:** [[MySQL Workbench]] is only a client that sends SQL; [[MySQL Server]] executes it and holds the data. Workbench alone, with no server and no network, cannot run anything (sample Q4).

**NULL** is the one standard marker for a missing value, replacing private conventions like 0, −1 or −99999 that caused mistakes (undated Moed B Q4.5).
