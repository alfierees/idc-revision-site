---
title: "Lecture 1 — Introduction & Entity-Relationship Modeling"
subject: databases-sql
week: 1
lecture: "01"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - relational-model
  - client-server-architecture
  - entity
  - attribute
  - relationship
  - cardinality
aliases:
  - "Databases Lecture 1"
  - "SQL Lecture 1"
in_scope: true
---

# Lecture 1 — Introduction & Entity-Relationship Modeling

> Part of: [[Databases & SQL]]
> **Lecture 1** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Relational Model]], [[Client-Server Architecture]], [[Entity-Relationship Model]], [[Entity]], [[Attribute]], [[Relationship]], [[Cardinality]]

> [!info] How this note was made
> Written from the 42-slide class deck. Slide facts are kept as taught. Explanations and exam tips are AI-written, and likely slide errors are flagged in warning boxes rather than silently changed.

## Course setup

| Item | Detail |
|---|---|
| Grade | 4 bi-weekly home exercises in pairs (20%) + exam (80%) |
| Bonus | Class participation, up to 3 extra points |
| Attendance | In person, at most 3 of 12 lessons missed |
| Software | MySQL 8.0 and MySQL Workbench |
| Reference | MySQL 8.0 Reference Manual; optional: *Murach's MySQL* (3rd ed.) |
| LLM rule | Learning resource only. "Do not trust. Verify." |

The course path is: what databases are, how to model data, how to build a database from a model, how to import data, and how to retrieve and analyse it.

## What a database does

A **database** is a store for data, usually a lot of it. Database software manages three jobs:

1. **Storage**: putting data in.
2. **Retrieval**: getting data out.
3. **Analysis**: processing data to produce new data, meaning insights.

### Why not just use Excel?

| Need | Spreadsheet | Database software |
|---|---|---|
| Structure | Loose cells | Typed columns, grouped data, explicit links |
| Scale | About 2 GB per file (slide figure) | Terabytes for relational DBs, petabytes for some others |
| Users | One person or a small team | Thousands of concurrent users |
| Language | Formulas | SQL, an ISO standard |
| Protection | Limited | Encryption, access control and more |

**Structured data** relies on **metadata**, which is data about the structure of the data. Values have types (int, float, string, date), data is grouped by kind (customers, orders), and kinds are linked (a customer can have many orders).

### Client-server

Databases use a [[Client-Server Architecture]]. One **server** holds the data, and many **clients** connect to it. Clients can be people using a tool such as Workbench, or other server programs. This split is what makes thousands of concurrent users possible.

## Relational databases

This course focuses on **relational databases**, the most popular kind of database software. They are based on data **tables** (also called *relations*) and are accessed with SQL.

An **RDBMS** (Relational Database Management System) provides:

- **Storage, retrieval and analysis.**
- **Security**: encryption and access control.
- **Resilience**: backup and restore.
- **Availability**: 24/7/365 uptime.
- **Scalability**: many concurrent users across terabytes of data.

> [!warning] Slide check: what SQL stands for
> Slide 22 is titled "Standard Query Language". SQL is normally expanded as **Structured Query Language**. It *is* an ISO standard, which is probably where the wording came from. Use "Structured" in an exam.

## Entity-Relationship Modeling

Theory comes before practice. **Entity-Relationship Modeling (ERM)** is a way to understand the structure of data, describe it in a model, and then use that model to build a good database. A model has two main ingredients: **entities** and **relationships**.

### Entities and entity types

An [[Entity]] is a distinct object or concept that can be uniquely identified and has attributes that describe it.

- A person named Edgar F. Codd, born 19 August 1923.
- Product model M8513LL/A, costing $99.90.
- Grade record #9874463: student John Doe, course "SQL", 2025 semester 2, moed aleph, grade 100.0.

An **entity type** defines the structure shared by similar entities, meaning which [[Attribute|attributes]] they have.

> [!example] Entity type `Student`
> Student ID (INT), First Name, Middle Name, Last Name (strings), Gender (enumeration), Date of Birth (date), Graduation Year (INT).

> [!tip] Entity vs entity type
> *Edgar F. Codd* is an entity. *Person* is the entity type. In a database, the type becomes a table and each entity becomes a row.

### Relationships

A [[Relationship]] is an association between two or more entities that defines how they interact within a system. A Book has one or more Authors. A Lemur is a kind of Animal.

The three main types are **1-to-1**, **1-to-many** and **many-to-many**, each with variations.

## Cardinality

[[Cardinality]] answers "how many?". It is written next to each entity on the diagram as `minimum..maximum`.

```text
Book  1..1 ------------- 1..M  Chapters
```

Read each direction separately, and read the label on the **far** side:

- A **Book** can have from **1 to many** Chapters (read `1..M` next to Chapters).
- A **Chapter** must have **exactly 1** Book (read `1..1` next to Book).

> [!warning] Common trap
> The number next to Chapters describes how many chapters a *book* has. Students often read it as a property of the chapter itself.

### The three relationship types

| Type | Example | Cardinalities on the slide |
|---|---|---|
| [[One-to-Many Relationship\|1-to-many]] | Book and Chapters | `1..1` and `1..M` |
| [[One-to-One Relationship\|1-to-1]] | Country and Capital City | `0..1` and `0..1` |
| 1-to-1 ("is a") | Lemur is an Animal | `1..1` and `0..1` |
| 1-to-1 inheritance | SalesPerson is an Employee is a Person | `1` and `0..1` at each step |
| [[Many-to-Many Relationship\|Many-to-many]] | Courses and Students | `0..M` and `1..M` |

The class tool for drawing these diagrams is [draw.io](https://drawio-app.com/blog/entity-relationship-diagrams-with-draw-io/).

## Summary

- A database stores, retrieves and analyses data at a scale spreadsheets cannot reach.
- Relational databases organise data into tables and use SQL.
- An ER model is built from entities (with attributes) and relationships.
- Cardinality gives the minimum and maximum on each side of a relationship.

## Related Notes

- Next: [[Lec_02-Conceptual Entity-Relationship Modeling|Lecture 2]]
- [[_Databases & SQL Concepts]]
