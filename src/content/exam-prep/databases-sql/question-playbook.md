---
title: "Exam Question Playbook"
subject: databases-sql
type: reference
description: "A recipe for each kind of question on the Databases & SQL final, with a past-paper example: ERD to tables, cardinality with constraints, which INSERT succeeds, JOIN row counts, reading a grouped query, WHERE versus HAVING, subqueries, and the one-line definition questions."
course: Databases & SQL
semester: 1
year: 2
order: 4
tags:
  - databases-sql
  - exam-prep
  - playbook
---

> Every answer scores on two things: the **right feature** and the **reason** (what it guarantees, or when it runs). A bare "yes" or "UNIQUE" loses points. One or two sentences is enough. The traps are on the [[Common Mistakes]] page.

## A. An ERD: how many tables, how many foreign keys

1. **One table per entity.** A "many-to-many-to-many" link entity (a grade, a registration) is already a table.
2. **One extra table per many-to-many** relationship (the junction or association table).
3. **Foreign keys:** one per 1-to-many, in the "many" table; two in every junction table.
4. Name each FK as `child → parent`.

> [!example] Undated Moed B Q2
> Customers and tours are many-to-many; each tour has 0 or 1 guide. **4 tables** (customer, tour, guide, customer_tour). **3 FKs**: customer_tour → customer, customer_tour → tour, tour → guide.

## B. "Make the database enforce this rule"

| Rule | Constraint and column |
|---|---|
| a child must have a parent (exactly one) | `NOT NULL` on the FK column |
| a parent has at most one child | `UNIQUE` on the FK column |
| a parent must have at least one child | **cannot** be done with constraints: the parent row exists before any child |
| a child can have several parents | it is now many-to-many: a junction table with two FKs |
| values all different | `UNIQUE` on that column |
| value must be given | `NOT NULL` |
| a range or sign | `CHECK (predicate)` (or `UNSIGNED` for ≥ 0) |
| a pair cannot repeat | composite PK or `UNIQUE (a, b)` |

Always say **which column in which table**.

> [!example] 2024 B Q1
> Owners and cars (FK `car.owner_id`). Every car exactly one owner: `NOT NULL` on `car.owner_id`. Every owner at most one car: `UNIQUE` on `car.owner_id`. Every owner at least one car: not possible. A car with several owners: a junction table.

## C. Which INSERT succeeds?

1. Read every column's definition: `AUTO_INCREMENT`, `DEFAULT`, `NOT NULL`, the type.
2. For each column **left out**: AUTO_INCREMENT generates (1 on an empty table), DEFAULT fills in, nullable becomes NULL, **NOT NULL without DEFAULT fails**.
3. For each value **given**: it must fit the type (`'A.'` into `INT` fails) and every constraint.
4. Write the inserted row out as a table, with `NULL` and `''` (empty string) shown clearly.

> [!example] 2025 B Q1
> `person(person_id AUTO_INCREMENT, first_name NOT NULL DEFAULT '', initial, last_name NOT NULL)`. `(initial, last_name) = ('X', 'Professor')` succeeds as `1, '', X, Professor`. `(first_name, initial)` fails: `last_name` has no value and no default.

## D. How many rows does this JOIN return?

1. **Is there an `ON` or `USING`?** No: a CROSS JOIN, $m \times n$ rows, whatever the keyword (`JOIN`, `INNER JOIN`).
2. **CROSS:** always known from the sizes.
3. **LEFT JOIN from the table holding the FK:** each child matches at most one parent (the FK points at a unique PK), so exactly the child's row count.
4. **INNER, RIGHT, FULL OUTER:** need to know how many rows match: "cannot be known", and say **why** (it depends on the values in the FK and PK).
5. **If the matches are given** ("7 fish linked to 4 bicycles"): INNER = number of linked children (7); everything else still needs the totals.
6. **If the query then groups by the left table's PK**, the answer is the left table's row count.

> [!example] 2024 Moed A (3437) Q2
> fish (6) with an FK to bicycle (3). `fish INNER JOIN bicycle` with no `ON`: a CROSS JOIN, 18 rows. LEFT: 6. INNER (with `ON`): unknown. FULL OUTER: unknown.

## E. Reading a grouped query

Answer in execution order:

1. **FROM / JOIN:** which tables, which join type (plain `JOIN` + `ON`/`USING` = INNER), what relationship (two tables = 1-to-many; many-to-many needs a third).
2. **WHERE:** which raw rows are dropped.
3. **GROUP BY:** what **one output row** represents ("each row is one customer and one book").
4. **HAVING:** which groups are dropped.
5. **SELECT:** the columns and what each holds ("the total number of copies of that book ordered by that customer").
6. **ORDER BY:** by what, which direction.

Then the summary sentence: "a list of departments with more than 5 employees hired since 2024-01-01, with the number of such employees, largest first."

> [!example] 2024 B Q4
> `customer LEFT JOIN order INNER JOIN book WHERE genre = 'Science Fiction' GROUP BY c.name, b.title HAVING SUM(o.quantity) > 2 ORDER BY total_quantity DESC`. Each row: a customer and a sci-fi book they ordered more than 2 copies of in total, largest totals first. `genre` in WHERE because it is a raw value; `SUM` in HAVING because it is an aggregate.

## F. "Will this run? Why?"

| You see | Answer |
|---|---|
| An aggregate in `WHERE` | error: WHERE runs before the groups exist; move it to HAVING |
| A different aggregate in HAVING and SELECT | runs: they are independent |
| A non-grouped, non-aggregated column in HAVING or SELECT | a mistake: a group can hold several values (MySQL error 1055), unless WHERE pins it to one value |
| `FULL OUTER JOIN` | error in MySQL: emulate with LEFT `UNION` RIGHT |
| `USING` with different column names | not possible: use `ON` |
| A reserved word as a table name (`order`, `character`) | error unless in backticks |
| A string into an `INT` column | error |

## G. Same result or not?

- **Scalar subquery vs INNER JOIN:** not necessarily: the subquery keeps rows with no match (NULL), like a LEFT JOIN.
- **`ON` vs `USING` on the same column:** the same rows (USING shows the column once).
- **`ORDER BY a` vs `ORDER BY a, b`:** the same only if `a` has no ties (or by chance, or the table is empty).
- **`fish LEFT JOIN bicycle` vs `bicycle RIGHT JOIN fish`:** the same rows.
- **`UNION` vs `UNION ALL`:** different if any row appears in both halves.

## H. One-line definitions

| Asked | Answer |
|---|---|
| Constraint | a rule on the values allowed in one or more columns, enforced on every write |
| Referential integrity | every FK value exists in the parent's PK; enforced by the FK constraint |
| Index | a structure that speeds up reads on a column; costs time on every write |
| DEFAULT vs the others | the others can make a write fail; DEFAULT supplies a value instead |
| PK vs UNIQUE | both unique; PK not NULL and one per table |
| DISTINCT vs UNIQUE | DISTINCT removes duplicates from a result (SELECT, DML); UNIQUE stops them being stored (DDL) |
| WHERE vs HAVING | timing: WHERE filters rows before GROUP BY, HAVING filters groups after |
| DELETE vs TRUNCATE | DELETE row by row, can use WHERE, can roll back; TRUNCATE empties the table, resets AUTO_INCREMENT, usually no rollback |
| Keyword / identifier / literal | part of SQL / a name in this database / data in the command |
| Conceptual model building blocks | entities, attributes, relationships |
| Natural key disadvantage | tied to the business, so a business change forces a PK change everywhere |
| Why NULL was invented | one standard marker for "missing" instead of 0, −1, −99999 |
| Workbench without a server | cannot run SQL: Workbench is the client, the server executes |
| FLOAT surprise (2.33999…) | FLOAT is approximate; use DECIMAL (or ROUND the output) |
| What LIKE cannot do | target digits, or "exactly one X" |
