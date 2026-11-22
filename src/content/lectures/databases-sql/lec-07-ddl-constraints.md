---
title: "Lecture 7 — DDL & Constraints"
subject: databases-sql
week: 7
lecture: "07"
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
  - constraint
  - primary-key
  - foreign-key
  - unique-constraint
  - not-null-constraint
  - default-constraint
  - check-constraint
  - referential-integrity
aliases:
  - "Databases Lecture 7"
  - "SQL Lecture 7"
  - "The 6 Constraints"
in_scope: true
---

# Lecture 7 — DDL & Constraints

> Part of: [[Databases & SQL]]
> **Lecture 7** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Constraint]], [[Primary Key]], [[Foreign Key]], [[UNIQUE Constraint]], [[NOT NULL Constraint]], [[DEFAULT Constraint]], [[CHECK Constraint]], [[Referential Integrity]]

> [!info] How this note was made
> Written from the 44-slide class deck. The first 21 slides repeat foreign keys and `ALTER TABLE` from [[Lec_06-Data Definition Language|Lecture 6]], so this note focuses on constraints. Explanations are AI-written, and likely slide errors are flagged.

## What constraints are

A [[Constraint]] is a **rule about data**. Rules protect data integrity by reducing input errors.

- We **define** them using [[DDL]].
- The SQL engine **enforces** them whenever we use [[DML]].

## The 6 constraints in MySQL 8.0

| Constraint | Guarantees | Can it make a write fail? |
|---|---|---|
| [[Primary Key\|PRIMARY KEY]] | Unique and not NULL; one per table | Yes |
| [[Foreign Key\|FOREIGN KEY]] | Value exists in the parent | Yes |
| [[UNIQUE Constraint\|UNIQUE]] | No duplicate values | Yes |
| [[NOT NULL Constraint\|NOT NULL]] | No NULLs | Yes |
| [[CHECK Constraint\|CHECK]] | Value satisfies a predicate | Yes |
| [[DEFAULT Constraint\|DEFAULT]] | Fills in a value when none is given | **No** |

> [!tip] Exam point
> `DEFAULT` is the odd one out. It supplies a value rather than rejecting one, so it **cannot fail a command**. This is exactly 2025 Moed B Q2.4 in [[PP_07-INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)|PP 07]].

### NOT NULL

```sql
CREATE TABLE person (
    last_name VARCHAR(64) NOT NULL
);
```

> [!warning] Slide check
> The slide writes `ADD COLUMN` inside `CREATE TABLE`, which is not valid SQL. `ADD COLUMN` belongs to `ALTER TABLE`.

### UNIQUE

```sql
-- One column
CREATE TABLE table1 (
    shoe_size INT UNIQUE
);

-- A named constraint across two columns: the COMBINATION must be unique
CREATE TABLE table3 (
    shirt_size INT,
    shoe_size  INT,
    CONSTRAINT uq_shirt_shoe UNIQUE (shirt_size, shoe_size)
);
```

> [!note] UNIQUE and NULL (AI note)
> A `UNIQUE` column can hold **several NULLs**, because NULL is not considered equal to NULL. This is the basis of 2025 Moed A Q2.

### CHECK

`CHECK` tests incoming values against a logical predicate. The write succeeds only if the predicate is true.

```sql
-- One column
CREATE TABLE table4 (
    shoe_size INT CHECK (shoe_size > 10)
);

-- Several columns: place it after the column definitions
CREATE TABLE table5 (
    weight_in_kg INT,
    height_in_cm INT,
    CHECK (weight_in_kg * height_in_cm / 100 > 20)
);
```

CHECK constraints were added in MySQL 8.0.

### DEFAULT

```sql
CREATE TABLE table5 (
    shirt_size INT,
    shoe_size  INT DEFAULT 42,
    created    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### PRIMARY KEY

A primary key:

1. Is NOT NULL.
2. Is UNIQUE.
3. Exists **once per table**.
4. Is the target of foreign keys.

`PRIMARY KEY` does **not** auto-increment by itself. You must add `AUTO_INCREMENT`.

```sql
CREATE TABLE table5 (
    shirt_size INT,
    shoe_size  INT DEFAULT 42,
    PRIMARY KEY (shirt_size, shoe_size)
);
```

> [!warning] Slide check: FK targets
> The slide says "Foreign Keys can only point to a Primary Key". That is the course's design rule and the safe exam answer. Technically, MySQL's InnoDB engine also allows an FK to reference a `UNIQUE` or other indexed column.

### FOREIGN KEY and referential integrity

[[Referential Integrity]] means that when a value appears in an FK, it is guaranteed to exist as a PK in the parent table.

| Where | Attempt | Result |
|---|---|---|
| **Child table** | INSERT or UPDATE an FK value with no matching parent | Error **1452**: Cannot add or update a child row |
| **Parent table** | DELETE or UPDATE a PK value still used by a child | Error **1451**: Cannot delete or update a parent row |

> [!example] Slide example
> `course` has a row with `DEP_ID = 7`, but `department` has only 1 to 4. The FK constraint rejects that row with error 1452.

## Seeing all constraints

```sql
SHOW CREATE TABLE sakila.film_actor;
```

```sql
CREATE TABLE `film_actor` (
  `actor_id` smallint(5) unsigned NOT NULL,
  `film_id` smallint(5) unsigned NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
     ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`actor_id`,`film_id`),
  KEY `idx_fk_film_id` (`film_id`),
  CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`)
     REFERENCES `actor` (`actor_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_film_actor_film` FOREIGN KEY (`film_id`)
     REFERENCES `film` (`film_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8
```

Reading it: a composite PK, a regular index on `film_id`, and two named FK constraints. `ON UPDATE CASCADE` means a change to the parent's key flows through to this table.

## Summary

- Constraints are rules defined with DDL and enforced during DML.
- MySQL has 6: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT and CHECK.
- Only DEFAULT cannot fail a command.
- FK violations give errors 1452 (child) and 1451 (parent).

## Related Notes

- Previous: [[Lec_06-Data Definition Language|Lecture 6]]
- Next: [[Lec_08-Constraints & Data Types|Lecture 8]]
- Tested in: [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]], [[PP_07-INSERT Outcomes, Constraints, JOIN Types & GROUP BY Query Reading (2025 Moed B)|PP 07]]
