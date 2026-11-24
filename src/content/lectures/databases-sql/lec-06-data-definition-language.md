---
title: "Lecture 6 — Data Definition Language"
subject: databases-sql
week: 6
lecture: "06"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - ddl
  - create-table
  - alter-table
  - drop-table
  - truncate-table
  - primary-key
  - foreign-key
  - auto-increment
  - referential-integrity
aliases:
  - "Databases Lecture 6"
  - "SQL Lecture 6"
in_scope: true
---

# Lecture 6 — Data Definition Language

> Part of: [[Databases & SQL]]
> **Lecture 6** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[DDL]], [[CREATE TABLE]], [[ALTER TABLE]], [[DROP TABLE]], [[TRUNCATE TABLE]], [[Primary Key]], [[Foreign Key]], [[AUTO_INCREMENT]], [[Referential Integrity]]

> [!info] How this note was made
> Written from the 44-slide class deck. The database commands repeat [[Lec_05-Normalization & SQL Syntax|Lecture 5]], so this note concentrates on tables. Explanations are AI-written, and likely slide errors are flagged.

## DDL refresher

[[DDL]] defines structure, not data. Its main commands are `CREATE`, `ALTER`, `DROP`, `SHOW` and `DESCRIBE`.

> [!danger] No undo
> `ALTER`, `DROP` and `TRUNCATE` cannot be undone, and Safe Update Mode does not apply to them.

## CREATE TABLE

Unlike a database, a table cannot be empty of structure. It needs **at least one column**.

```sql
CREATE TABLE `character` (
    first_name VARCHAR(20),
    last_name  VARCHAR(20),
    shoe_size  INT
);
```

`character` is a reserved word, so it needs backticks.

> [!question] Is this a good table?
> No. It has **no primary key**, so two identical rows could exist and you could not address one specifically.

### Adding a primary key

Two equivalent syntaxes:

```sql
-- Inline
CREATE TABLE `character` (
    character_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name   VARCHAR(20),
    last_name    VARCHAR(20),
    shoe_size    INT
);

-- Separate line, which also allows a composite key
CREATE TABLE `character` (
    character_id INT AUTO_INCREMENT,
    first_name   VARCHAR(20),
    last_name    VARCHAR(20),
    shoe_size    INT,
    PRIMARY KEY (character_id)
);
```

[[AUTO_INCREMENT]] makes MySQL increase the value by 1 for each new row.

## Foreign key anatomy

A foreign key is actually **three parts** in the child table:

| Part | Job |
|---|---|
| **Column** | Holds values from the parent's PK |
| **Index (key)** | Speeds up reading from the column |
| **Constraint** | Maintains [[Referential Integrity]] |

**Referential integrity** means the child FK only contains values that exist in the parent PK, across all INSERTs, UPDATEs and DELETEs.

### Creating a foreign key

```sql
CREATE TABLE course (
    course_id   INT AUTO_INCREMENT,
    course_name VARCHAR(256),
    dep_id      INT,                             -- 1. column
    INDEX idx_fk_course_department (dep_id),     -- 2. index
    CONSTRAINT fk_course_department              -- 3. constraint name
        FOREIGN KEY (dep_id)                     --    column in this table
        REFERENCES department (dep_id),          --    parent table (column)
    PRIMARY KEY (course_id)
);
```

The parent table (`department`) must exist first, because the child refers to it.

To see all parts of a real example:

```sql
SHOW CREATE TABLE sakila.film_actor;
```

## ALTER TABLE

`ALTER TABLE` changes a table after it is created: columns, indexes, FKs, PKs and more.

```sql
-- Add a column, optionally positioned with FIRST or AFTER
ALTER TABLE `character`
    ADD COLUMN num_of_feet INT DEFAULT 2,
    ADD COLUMN last_updated DATETIME AFTER first_name;

-- Change a column definition (see also CHANGE, RENAME, ALTER)
ALTER TABLE `character`
    MODIFY COLUMN shoe_size DECIMAL(4,1);

-- Remove a column (destructive, no undo)
ALTER TABLE `character`
    DROP COLUMN num_of_feet;

-- Remove a foreign key
ALTER TABLE course
    DROP FOREIGN KEY fk_course_department;
```

> [!warning] Slide check: missing comma
> The slide's `ALTER TABLE` example has two `ADD COLUMN` clauses **without a comma** between them, which is a syntax error. The version above includes it.

> [!warning] Dropping an FK uses the constraint name
> Use the **constraint name**, not the column name. Find it with `SHOW CREATE TABLE <table>;`.

## RENAME, DROP and TRUNCATE

```sql
RENAME TABLE `course` TO `class`;
DROP TABLE `course`;
TRUNCATE TABLE `character`;
```

| Command | Rows | Structure | AUTO_INCREMENT |
|---|---|---|---|
| `DROP TABLE` | Gone | **Gone** | Gone |
| `TRUNCATE TABLE` | Gone | **Kept** | **Reset** |

`TRUNCATE` is considered part of DDL even though it affects data.

## Summary

- A table needs at least one column, and nearly always a primary key.
- A foreign key is a column, an index and a constraint.
- `ALTER TABLE` adds, modifies and drops structure.
- `DROP` removes the table. `TRUNCATE` empties it and resets the counter.

## Related Notes

- Previous: [[Lec_05-Normalization & SQL Syntax|Lecture 5]]
- Next: [[Lec_07-DDL & Constraints|Lecture 7]]
- Practice: [[PS_02-Restaurant Logical ERD & CREATE TABLE]]
