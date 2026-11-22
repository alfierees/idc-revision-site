---
title: "Lecture 13 — Indexes, Views & NoSQL"
subject: databases-sql
week: 13
lecture: "13"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - database-index
  - view
  - updatable-view
  - nosql
  - document-database
  - mongodb
aliases:
  - "Databases Lecture 13"
  - "SQL Lecture 13"
in_scope: true
---

# Lecture 13 — Indexes, Views & NoSQL

> Part of: [[Databases & SQL]]
> **Lecture 13** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[ON]], [[WHERE]], [[Database Index]], [[View]], [[Updatable View]], [[NoSQL]], [[Document Database]], [[MongoDB]]

> [!info] How this note was made
> Written from the 51-slide class deck. Slides 4 to 18 repeat indexes from [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]]. Explanations are AI-written, and likely slide errors are flagged.

## ON vs WHERE, one last time

| | `ON` | `WHERE` |
|---|---|---|
| **Why** | Join child records with parent records | Filter irrelevant records out |
| **When** | Only with `JOIN` | Any query |
| **What** | Primary Key = Foreign Key | Any predicate on data columns |

You can sometimes get away with swapping them in an `INNER JOIN`, but they behave differently in LEFT, RIGHT and FULL OUTER joins.

## Views

A [[View]] is a **stored query** that produces a result set when invoked. It acts as a "virtual" table and saves retyping the same query.

```sql
CREATE VIEW actor_name AS
SELECT actor_id, first_name, last_name
FROM actor;

SELECT * FROM actor_name;
```

| Tables | Views |
|---|---|
| Store the actual data | Store a query |
| Data persists in the table | Data is fetched from tables when run |

### Updatable views

> [!warning] Writing to a view changes the real table
> You can `INSERT`, `UPDATE` and `DELETE` through an [[Updatable View]], and the **original table** is affected.

```sql
INSERT INTO actor_name (first_name, last_name)
VALUES ('Uri', 'Goldstein');   -- adds a row to actor
```

A view is updatable when view rows correspond **1-to-1** with underlying table rows. Per the slides, it is **not** updatable if it contains:

- Aggregate functions (`SUM()`, `MIN()`, `MAX()`, `COUNT()`...)
- `DISTINCT`
- `GROUP BY`
- `JOIN`
- `UNION` or `UNION ALL`
- A few more edge cases

> [!warning] Slide checks
> - **Slide 27** presents a "non-updatable view" named `distinct_first_name`, but its query has **no `DISTINCT`**. As printed it is a plain column selection, so the `INSERT` would likely succeed. It presumably should read `SELECT DISTINCT first_name, last_name`.
> - **`JOIN`:** the MySQL manual allows some inner-join views to be updated, one underlying table at a time. For this course, answer "JOIN makes a view non-updatable" and be aware of the nuance.

## NoSQL

"NoSQL" is a **buzzword**: not one concept but an umbrella over many database paradigms not based on relational theory.

### Why it appeared

The slides estimate that 5 exabytes of content were created from the beginning of history to 2003, compared with more than 300 exabytes **each day** now.

SQL was designed for **data integrity under storage constraints**: *store once, join many times*. At huge scale, that becomes slow and expensive because it needs powerful CPUs, a lot of memory, and licences for **clustering** (an RDBMS running across many computers that share the data).

### Categories

| Category | Examples on the slide |
|---|---|
| Document | MongoDB, Amazon DocumentDB |
| Columnar | Apache Cassandra, Amazon Redshift |
| Graph | Neo4j, OrientDB |
| Object | db4o, ObjectDB |
| Time-series | kdb+, Prometheus |

> [!warning] Slide check
> Amazon Redshift is a columnar store, but it is queried with **SQL** and is usually classed as a relational data warehouse rather than NoSQL.

## MongoDB

[[MongoDB]] is a [[Document Database]]. It has **no tables, columns or data types**. Instead, **documents** are gathered into **collections**.

A document is a set of **key-value pairs**, and values can themselves contain key-value pairs:

```json
{
  "_id": "3aa0097c-8261-44bb-93f7-20e535d18f2d",
  "name": "Krusty the Klown",
  "shoe_size": 55,
  "address": {
    "street": "Elm st.",
    "number": 2,
    "city": "Springfield"
  }
}
```

> [!note] AI note
> The slides label the identifier `$id`. In real MongoDB documents, the identifier field is `_id`.

### Collections have no fixed schema

Documents in one collection can have different shapes. Fetching a missing key returns null, which is useful for partial data.

### No more normalization

| | Relational | MongoDB |
|---|---|---|
| **Structure** | Fixed schema | Flexible documents |
| **Duplication** | Avoided by normalization | Accepted |
| **Related data** | Separate tables + JOIN | Together in one document |
| **Reads** | Slower at huge scale | Very fast |
| **Writes** | One place to update | More complicated and slower |
| **Consistency** | Enforced by the DB | **Our responsibility** |

For example, Krusty's address may be stored in both `Invoices` and `Customers`. If it changes, *we* must update both. This trade-off suits high-scale internet apps like Facebook, TikTok and Snap.

### Query language

MongoDB does not use SQL:

```javascript
db.inventory.find( { status: "D" } )
// SELECT * FROM inventory WHERE status = "D"

db.inventory.find( { status: "A", qty: { $lt: 30 } } )
// SELECT * FROM inventory WHERE status = "A" AND qty < 30
```

> [!warning] Slide check: nested fields
> Slide 48 queries `{ address: { number: 2 } }`. In MongoDB that means the whole `address` must **exactly equal** `{ number: 2 }`. To match one nested field, use dot notation: `{ "address.number": 2 }`.

There is no NoSQL standard, so each product must be learned separately.

## Where to go next

The course points to: system values and modes, backup and restore, triggers, transactions and ACID, window functions, stored procedures, user-defined functions, query optimisation, clustering and access control.

## Summary

- `ON` relates tables and `WHERE` filters data.
- A view is a stored query. Simple views are updatable and change the real table.
- NoSQL is an umbrella term for non-relational databases.
- MongoDB trades normalization and write simplicity for very fast reads.

## Related Notes

- Previous: [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lecture 12]]
- [[Databases & SQL]]
