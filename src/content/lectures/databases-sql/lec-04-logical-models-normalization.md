---
title: "Lecture 4 — Logical Models & Normalization"
subject: databases-sql
week: 4
lecture: "04"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - logical-model
  - physical-model
  - one-to-many-relationship
  - one-to-one-relationship
  - many-to-many-relationship
  - junction-table
  - associative-entity
  - recursive-relationship
  - normalisation
aliases:
  - "Databases Lecture 4"
  - "SQL Lecture 4"
in_scope: true
---

# Lecture 4 — Logical Models & Normalization

> Part of: [[Databases & SQL]]
> **Lecture 4** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Logical Model]], [[One-to-One Relationship]], [[Many-to-Many Relationship]], [[Junction Table]], [[Associative Entity]], [[Recursive Relationship]], [[Normalisation]], [[First Normal Form]], [[Second Normal Form]], [[Third Normal Form]]

> [!info] How this note was made
> Written from the 44-slide class deck. Explanations and exam tips are AI-written, and likely slide errors are flagged.

## MySQL Workbench and the physical level

The **physical level** uses the same concepts as the logical level but is vendor-specific, so data types and constraint behaviour can differ between products.

In [[MySQL Workbench]], the modelling view opens **EER (Extended Entity Relationship) diagrams** such as `sakila_full.mwb`.

> [!warning] A diagram is not the database
> An EER file is a **separate snapshot** of the structure at one point in time. Changing the diagram does not change the database.

## 1-to-many at the logical level

One PK-FK pair, with the FK in the child table. Cardinality is fine-tuned with constraints on the FK column:

| On the FK column | Meaning |
|---|---|
| FOREIGN KEY itself | Child has **max 1** parent |
| `NOT NULL` | Child has **min 1** parent |
| `UNIQUE` | Parent has **max 1** child |

The minimum number of children a parent has cannot be dictated by the logical model.

## 1-to-1 at the logical level

A 1-to-1 relationship is a single PK-FK relationship **with a UNIQUE constraint on the FK column**.

```text
person: person_id (PK), name, last_name
car:    car_id (PK), make, model, person_id (FK, UNIQUE)
```

### Who is the parent?

The FK belongs in the child, so which table is the child? Three tests:

1. **Knowledge domain**: often obvious. Person is the parent of Passport.
2. **Cardinality**: the **mandatory** side is the parent. User Account is the parent of User Profile.
3. **Identity**: a **weak** entity is the child.

### Data inheritance

For an "is a" relationship, **the child's PK is also an FK to the parent**, so the parent's PK dictates the child's PK.

```text
person:   person_id (PK), name, last_name
employee: person_id (PK, FK → person), department, salary
```

## Many-to-many at the logical level

A foreign key can hold only one parent per row, so many-to-many cannot be done with a single FK. The solution is an **association table**, which holds one FK to each side.

```text
courses                courses_students              students
ID (PK), COURSE_NAME ← COURSE_ID (FK), STUDENT_ID (FK) → ID (PK), STUDENT_NAME
```

| COURSE_ID | STUDENT_ID |
|---|---|
| 1 | 1 |
| 1 | 2 |
| 3 | 1 |

Read it both ways: course 1 has students 1 and 2, and student 1 takes courses 1 and 3.

> [!info] One concept, many names
> A [[Junction Table]] is also called an association, intermediary, join, link, bridge or cross-reference table.

### Choosing the association table's primary key

| Option | When | Example |
|---|---|---|
| Composite PK of both FKs | "Pure" many-to-many with no duplicates or attributes | Sakila `film_actor` |
| Separate synthetic PK | Same pair can occur twice | Two people can marry each other twice |
| Separate synthetic PK | **Course recommendation, even for pure tables** | Stays stable as the domain evolves |

If the association table gains its own data columns (for example a `GRADE`), it represents an [[Associative Entity]], such as an `enrollment` table.

### Three-way relationships

Use **one foreign key per "many" table**: `enrollment(ID, COURSE_ID, STUDENT_ID, SEMESTER_ID)`.

> [!warning] Slide check
> Slide 29 labels `SEMESTER_ID` as "(PK)". From the diagram it should be **(FK)**, like the other two link columns.

## Self-reference

A child table can be its own parent, through a **self-referencing foreign key**. This implements a [[Recursive Relationship]].

| ID | NAME | FATHER_ID |
|---|---|---|
| 11 | Homer Simpson | NULL |
| 12 | Bart Simpson | 11 |
| 13 | Lisa Simpson | 11 |

## Normalization

[[Normalisation|Normalization]] organises data to minimise redundancy and dependency by dividing it into related tables. It protects data integrity, improves efficiency and reduces inconsistencies.

The rules come in levels called **normal forms**. Each level requires everything from the previous one:

```text
1NF → 2NF → 3NF → BCNF → 4NF → 5NF
```

### First Normal Form (1NF)

A table in [[First Normal Form|1NF]]:

- Has no duplicate rows (it has a primary key).
- Holds one **atomic** value per column.
- Does not use multiple columns for a one-to-many relationship.

| Bad | Problem |
|---|---|
| `PHONE_NUMBERS = '054-444444,053-333333'` | Multiple values in one cell; hard to add or remove; the comma is arbitrary |
| `PHONE1, PHONE2, PHONE3` | Which column do you search? What about a fourth number? |

**Fix:** a separate `phone` table with an FK to `person`.

### Second Normal Form (2NF)

[[Second Normal Form|2NF]] requires 1NF, and that **every non-key column depends on the entire primary key**.

| COURSE_ID (PK) | SEMESTER_ID (PK) | PARTICIPANTS | COURSE_NAME |
|---|---|---|---|
| DB101 | 2018-1 | 150 | Databases |
| DB101 | 2018-2 | 140 | Databases |

`COURSE_NAME` depends only on `COURSE_ID`, so it is repeated. **Fix:** move it to a `course(COURSE_ID, COURSE_NAME)` table.

> [!tip] 2NF only bites on composite keys
> A table with a single-column PK cannot depend on "part" of its key.

### Third Normal Form (3NF)

[[Third Normal Form|3NF]] requires 2NF, and that **non-key columns do not depend on other non-key columns**.

| COURSE_ID (PK) | SEMESTER_ID (PK) | TEACHER_ID | TEACHER_NAME |
|---|---|---|---|
| DB101 | 2018-1 | 123 | Krusty the Klown |
| DB101 | 2018-2 | 123 | Krusty the Klown |

`TEACHER_NAME` depends on `TEACHER_ID`, which is not the key. **Fix:** move it to a `teacher` table.

> [!success] The one-line summary
> One atomic value per column, no duplicated data, and every column depends on **the key, the whole key, and nothing but the key**.

## Summary

- 1-to-many is one FK. 1-to-1 is one FK plus UNIQUE. Many-to-many needs an association table.
- An association table with its own attributes is an associative entity.
- 1NF is atomic values, 2NF removes partial dependency, and 3NF removes dependency on non-key columns.

## Related Notes

- Previous: [[Lec_03-From Conceptual to Logical Models|Lecture 3]]
- Next: [[Lec_05-Normalization & SQL Syntax|Lecture 5]]
- Practice: [[PS_02-Restaurant Logical ERD & CREATE TABLE]]
