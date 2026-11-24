---
title: "Lecture 2 — Conceptual Entity-Relationship Modeling"
subject: databases-sql
week: 2
lecture: "02"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - conceptual-model
  - logical-model
  - physical-model
  - cardinality
  - crows-foot-notation
  - min-max-notation
aliases:
  - "Databases Lecture 2"
  - "SQL Lecture 2"
in_scope: true
---

# Lecture 2 — Conceptual Entity-Relationship Modeling

> Part of: [[Databases & SQL]]
> **Lecture 2** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Conceptual Model]], [[Logical Model]], [[Physical Model]], [[Cardinality]], [[Min-Max Notation]], [[Crow's Foot Notation]]

> [!info] How this note was made
> Written from the 28-slide class deck. Explanations and exam tips are AI-written. The draw.io and Workbench example images are described rather than reproduced.

## The three levels of model

ER modelling starts with business requirements and ends with a working database. It moves through three models, from theory to practice:

```text
Conceptual  →  Logical  →  Physical
  (theory)                 (practice)
```

| | [[Conceptual Model\|Conceptual]] | [[Logical Model\|Logical]] | [[Physical Model\|Physical]] |
|---|---|---|---|
| **Purpose** | High-level, abstract view of data and relationships | Data structure, independent of platform | How data is actually stored in one specific product |
| **Audience** | Business stakeholders, analysts, designers | Database designers and developers | DBAs and system architects |
| **Building blocks** | Entities, attributes, relationships | Tables, columns, PKs, FKs | Data types, constraints, indexes, storage details |
| **Vendor-specific?** | No | No | Yes (MySQL, PostgreSQL...) |
| **Normalization** | Not yet | Applied here | Carried through |

> [!tip] Quick way to tell them apart
> If it has **diamonds and no keys**, it is conceptual. If it has **PKs and FKs but no vendor types**, it is logical. If it has **`VARCHAR(45)` and index details**, it is physical.

Lessons 1 and 2 stay mostly at the conceptual level. Lessons 3 and 4 translate to logical models and then to real MySQL databases.

## Conceptual vocabulary

- An [[Entity]] is a distinct, identifiable object or concept with describing attributes. *Zendaya, Tom Holland, "Dune".*
- An **entity type** is the structure shared by similar entities. *Zendaya is an Actress; "Dune" is a Film.*
- An [[Attribute]] is a property that describes an entity. *Age, Name, Height, Title.*
- A [[Relationship]] is an association between two or more entities. *An Actor participates in one or more Films.*

In a conceptual diagram, **entity types are rectangles**, **relationships are diamonds**, and attributes are attached to their entity.

## Cardinality

[[Cardinality]] defines how many instances of one entity can be associated with instances of another. It specifies the **minimum and maximum** number of times an entity can participate in a relationship, and it is what divides relationships into 1-to-1, 1-to-many and many-to-many.

### Min-Max notation

| Symbol | Meaning |
|---|---|
| `0` | Zero or none |
| `1` | One |
| `M` | Many |
| `..` | Between |

```text
Book  1..1 ------------- 0..M  Chapters
```

- A Book can contain **0 or more** Chapters.
- A Chapter must belong to **exactly one** Book.

### Crow's Foot notation

[[Crow's Foot Notation]] expresses the same information with symbols at the end of the line:

| Symbol at line end | Meaning |
|---|---|
| Circle `O` | Zero |
| Bar `\|` | One |
| Three-pronged "crow's foot" | Many |
| Two symbols together | A minimum and a maximum |

So `||` means exactly one, `O|` means zero or one, `O<` means zero or many, and `|<` means one or many.

> [!tip] Reading a crow's foot
> The symbol **closest to the entity** is the maximum. The symbol further away is the minimum.

## Relationship examples

| Relationship | Example | Cardinality |
|---|---|---|
| 1-to-many | Book has Chapters | `1..1` and `0..M` |
| 1-to-1 | Country has a Capital City | `0..1` and `0..1` |
| 1-to-1 "is a" | Lemur is an Animal | `1..1` and `0..1` |
| 1-to-1 inheritance | Salesperson is an Employee is a Person | `1` and `0..1` at each step |
| Many-to-many | Courses and Students | `0..M` and `1..M` |
| Three-way | Course, Semester, Student through a Registration | One registration links all three |

> [!example] Why a three-way relationship needs a middle entity
> A student takes a course *in a particular semester*. No pair of the three entities captures that fact alone, so a **Registration** entity connects all three.

## Summary

- ER modelling moves from conceptual to logical to physical.
- Conceptual models show entities, attributes and relationships, with no keys or types.
- Cardinality gives the minimum and maximum participation on each side.
- Min-Max and Crow's Foot are two notations for the same idea.

## Related Notes

- Previous: [[Lec_01-Introduction & Entity-Relationship Modeling|Lecture 1]]
- Next: [[Lec_03-From Conceptual to Logical Models|Lecture 3]]
- Practice: [[PS_01-Hospital Patient System ERD]]
