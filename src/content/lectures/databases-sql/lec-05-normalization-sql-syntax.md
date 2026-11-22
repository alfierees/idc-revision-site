---
title: "Lecture 5 — Normalization & SQL Syntax"
subject: databases-sql
week: 5
lecture: "05"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - normalisation
  - redundancy
  - insert-anomaly
  - update-anomaly
  - delete-anomaly
  - identifier
  - keyword
  - reserved-word
  - literal-value
  - ddl
aliases:
  - "Databases Lecture 5"
  - "SQL Lecture 5"
in_scope: true
---

# Lecture 5 — Normalization & SQL Syntax

> Part of: [[Databases & SQL]]
> **Lecture 5** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Normalisation]], [[Redundancy]], [[Insert Anomaly]], [[Update Anomaly]], [[Delete Anomaly]], [[Keyword]], [[Identifier]], [[Reserved Word]], [[Literal Value]], [[DDL]]

> [!info] How this note was made
> Written from the 60-slide class deck. Explanations and exam tips are AI-written, and likely slide errors are flagged. The normal forms are repeated from [[Lec_04-Logical Models & Normalization|Lecture 4]], so this note focuses on why they matter.

## Why normalize?

[[Normalisation|Normalization]] is a formal process of organising a data model to **reduce redundancy** and **prevent data anomalies**.

[[Redundancy]] means one fact is stored in several places. That wastes storage and risks the copies disagreeing.

### The three anomalies

All three come from this un-normalized table, which mixes courses and departments:

| COURSE_ID (PK) | COURSE_NAME | DEP_ID | DEP_NAME |
|---|---|---|---|
| 201 | Programming | 37 | Computer Science |
| 202 | Pascal | 37 | Computer Science |
| 203 | Data Bases | 37 | Computer Science |
| 204 | Operating Systems | 38 | Mathematics |
| 206 | Operations | 39 | Business |

| Anomaly | Definition | In this table |
|---|---|---|
| [[Insert Anomaly\|Insert]] | Can't insert a row because an unrelated field has no value yet | A new Gardening department has no course yet, so `COURSE_ID` has nothing to hold |
| [[Update Anomaly\|Update]] | You update one copy and miss another | Rename Computer Science on rows 201 and 202 but forget 203 |
| [[Delete Anomaly\|Delete]] | Deleting a row loses other important information | Deleting course 206 erases the fact that the Business department exists |

> [!success] The fix
> Split into `course(COURSE_ID, COURSE_NAME, DEP_ID)` and `department(DEP_ID, DEP_NAME)`. Each department name now lives in one row, so all three anomalies disappear.

### Normal forms recap

| Form | Rule | Removes |
|---|---|---|
| [[First Normal Form\|1NF]] | PK, atomic values, no repeating columns | Lists in cells, `PHONE1/PHONE2` |
| [[Second Normal Form\|2NF]] | Non-key columns depend on the **entire** PK | Partial dependency |
| [[Third Normal Form\|3NF]] | Non-key columns depend on **nothing but** the PK | Dependency through a non-key column |

## Connecting to MySQL

[[MySQL Server]] is the server, and [[MySQL Workbench]] is a client. A connection always needs four details:

| Detail | Local server |
|---|---|
| Server name or IP | `localhost` (127.0.0.1) |
| Port | `3306` |
| Username | `root` |
| Password | From setup |

The Workbench layout has a Navigator, Query editor, Results, Output, Info and Help panes.

## Anatomy of a SQL statement

```sql
SELECT actor_id, first_name, last_name
FROM sakila.actor
WHERE first_name = 'Tom';
```

| Part | Hebrew | In the example |
|---|---|---|
| **Statement** | פקודה | The whole command, up to `;` |
| **Clause** | פסקה | `SELECT ...`, `FROM ...`, `WHERE ...` |
| [[Keyword]] | מילת מפתח | `SELECT`, `FROM`, `WHERE` |
| [[Identifier]] | מזהה | `actor_id`, `first_name`, `sakila`, `actor` |
| [[Literal Value]] | ערך מילולי | `'Tom'` |

### Keywords vs reserved words

Some keywords are [[Reserved Word|reserved]], such as `SELECT` and `DISTINCT`. They can be identifiers **only if quoted with backticks**:

```sql
CREATE TABLE `distinct` (first INT, last INT);
```

> [!warning] Two different quote marks
> **Backticks** `` ` `` wrap identifiers. **Straight single quotes** `'` wrap string literals. Mixing them up is a very common error.

### The USE statement

```sql
USE sakila;
```

This sets the default database, so you can write `actor` rather than `sakila.actor`.

### Comments

```sql
SELECT 1+1; # to end of line
SELECT 1+1; -- also to end of line
SELECT 1 /* in-line */ + 1;
```

### Case and white space

- SQL keywords and identifiers are presented as **case-insensitive**, so `select` and `SELECT` are the same. The slide marks this with an asterisk.
- White space does not matter.

> [!note] What the asterisk probably hides (AI note)
> In MySQL, table names can be case-sensitive on Linux servers because they map to files. Whether `'TOM'` equals `'tom'` depends on the column's collation, though the default is case-insensitive.

### Course style convention

- Keywords in `UPPERCASE`.
- Identifiers in `lowercase`.
- Underscore between words.
- Each clause on its own line, with indentation to show structure.

```sql
SELECT
    title,
    description
FROM
    film
ORDER BY
    release_year,
    language_id;
```

## Data Definition Language begins

[[DDL]] (**Data Definition Language**) is the part of SQL that defines the **structure** of the data: database settings, tables, columns, data types, views, indexes and stored procedures. It does **not** include the actual data.

| Command | Purpose |
|---|---|
| `CREATE` | Add something new |
| `ALTER` | Change something existing |
| `DROP` | Remove something |
| `SHOW`, `DESCRIBE` | Show what's there |

> [!danger] No undo
> For `ALTER`, `DROP` and `TRUNCATE` there is **no undo**, and Safe Update Mode does not protect you.

### Database commands

```sql
CREATE DATABASE lesson5;
CREATE DATABASE IF NOT EXISTS lesson5; -- no error if it exists
USE lesson5;
SHOW CREATE DATABASE lesson5;
DROP DATABASE IF EXISTS lesson5;       -- no error if it is missing
```

A new database may not appear in the Navigator until you press its small **refresh** button.

### "Schema" means different things

| Product | Hierarchy |
|---|---|
| **MySQL** | Server → Database (= Schema) → Table |
| **Other products** | Server → Database → Schema → Table |

In MySQL, `CREATE SCHEMA` and `CREATE DATABASE` are synonyms.

### Database options

A database has three options: **character set**, **collation** and **encryption**. The first two control supported languages and default to UTF-8. Encryption defaults to `'N'`.

```sql
ALTER DATABASE lesson5
    CHARACTER SET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;
```

> [!warning] Slide check
> The slide's Hebrew example shows `COLLATE = hebrew_gene`, which looks cut off. MySQL's Hebrew collation is `hebrew_general_ci`.

## Summary

- Normalization prevents insert, update and delete anomalies by storing each fact once.
- A statement is made of clauses, which contain keywords, identifiers and literal values.
- Backticks are for identifiers and single quotes are for strings.
- DDL defines structure and has no undo.

## Related Notes

- Previous: [[Lec_04-Logical Models & Normalization|Lecture 4]]
- Next: [[Lec_06-Data Definition Language|Lecture 6]]
- Tested in: [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]], [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]]
