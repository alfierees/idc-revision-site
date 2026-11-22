---
title: Databases & SQL Concepts
description: Single glossary of every concept used across the Databases & SQL notes. All [[wiki-links]] in the readings, problem sets and past papers resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - databases-sql
aliases:
  - Databases & SQL Glossary
subject: databases-sql
in_scope: true
---

# Databases & SQL Concepts

> One-stop glossary for Databases & SQL (Year 2, Semester 1). Each entry: a one-line definition, then the note that tests or teaches it. Concepts also covered in the AI-generated reading are marked `Also in`.
>
> Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Databases & SQL]].

---

## Data modelling & ER diagrams

### Entity-Relationship Diagram
Diagram of the entities in a system and the relationships between them; the step before turning the design into tables. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### Entity
A distinct type of thing the database stores data about (patient, car, order); usually becomes a table. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### Attribute
A property of an entity; becomes a column in the table. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Tuple
A single row of a table. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Relationship
How two entities are associated (for example a customer places orders). Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### Cardinality
How many rows on one side relate to rows on the other: 1:1, 1:N or M:N. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### One-to-One Relationship
Each row on either side has at most one partner on the other side. → [[PS_01-Hospital Patient System ERD|PS 01]]

### One-to-Many Relationship
One row on the parent side relates to many rows on the child side; implemented with a foreign key in the child table. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### Many-to-Many Relationship
Rows on both sides can relate to many rows on the other; resolved with a junction table. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### Junction Table
Table holding two foreign keys that turns a many-to-many relationship into two one-to-many ones. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### Weak Entity
An entity that cannot be identified without its owner entity; its key includes the owner's key. → [[PS_01-Hospital Patient System ERD|PS 01]]

### Associative Entity
An entity that models a many-to-many relationship and carries its own attributes (for example Appointments). → [[PS_01-Hospital Patient System ERD|PS 01]]

### Conceptual Model
ERD of entities and relationships before keys and tables are added. → [[PS_01-Hospital Patient System ERD|PS 01]]

### Logical Model
The conceptual model turned into tables with primary and foreign keys; still independent of the DBMS. → [[PS_01-Hospital Patient System ERD|PS 01]]

### Logical ERD
An ERD at the logical level: tables, columns, data types and PK/FK markers (the diagram form of the logical model). See also Logical Model. → [[PS_02-Restaurant Logical ERD & CREATE TABLE|PS 02]]

### Normalisation
Organising data into tables to reduce redundancy and update anomalies. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### First Normal Form
Every cell holds one atomic value and there are no repeating groups. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Second Normal Form
1NF plus no partial dependency of a non-key column on part of a composite key. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Third Normal Form
2NF plus no transitive dependency between non-key columns. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

## Keys & constraints

### Primary Key
Column or columns that uniquely identify each row; unique and never NULL. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### Foreign Key
Column that references a key in another table, linking child rows to a parent and enforcing referential integrity. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### Composite Primary Key
A primary key made of two or more columns, typical for junction tables. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### Surrogate Key
An artificial id column (often AUTO_INCREMENT) used as the primary key instead of a natural one. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### Referential Integrity
The rule that every foreign key value must exist in the parent table (or be NULL), so no orphan rows appear. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### Constraint
A rule the database enforces on column values or table data. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### UNIQUE Constraint
No two rows may share a value in the column (or column combination); NULLs are allowed. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### NOT NULL Constraint
The column may not hold NULL; a value is required. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### CHECK Constraint
Restricts column values to those satisfying a condition. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### DEFAULT Constraint
Value stored automatically when an INSERT supplies none. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### AUTO_INCREMENT
MySQL column attribute that generates the next numeric id automatically. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### Database Index
Lookup structure on a column that speeds up reads and joins at some cost to writes. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### ON DELETE CASCADE
Referential action: deleting a parent row also deletes its child rows. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### SET NULL
Referential action: deleting the parent sets the child's foreign key to NULL. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### RESTRICT
Referential action: blocks deleting or changing a parent row that still has children. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Data Type
The kind of value a column stores (INT, VARCHAR, DATE and so on), chosen at table creation. → [[PS_02-Restaurant Logical ERD & CREATE TABLE|PS 02]]

## DDL, DML & statements

### DDL
SQL that defines or changes structure: CREATE, ALTER, DROP, TRUNCATE. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### DML
SQL that reads or changes rows: SELECT, INSERT, UPDATE, DELETE. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### CREATE TABLE
Creates a table with its columns, types and constraints. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_02-Restaurant Logical ERD & CREATE TABLE|PS 02]]

### ALTER TABLE
Changes an existing table, for example adding a column or a constraint. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### DROP TABLE
Deletes a table together with its data. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### TRUNCATE TABLE
Removes all rows but keeps the table structure. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### INSERT INTO
Adds rows to a table; columns with a default or AUTO_INCREMENT can be left out of the column list. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### UPDATE
Modifies existing rows. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### DELETE
Removes rows. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

## Querying basics

### SELECT
Chooses the columns (or expressions) in the output. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### FROM
Names the source tables of a query. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### WHERE
Filters individual rows before grouping; cannot use aggregates. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### Alias
Temporary name for a column or table, given with the AS keyword. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### DISTINCT
Removes duplicate rows from the result. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### ORDER BY
Sorts the result. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### LIMIT
Restricts how many rows are returned. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### OFFSET
Skips the first N rows, usually with LIMIT for paging. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Logical Order of Execution
The order SQL evaluates clauses: FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### AND
True only if all conditions hold. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### OR
True if any condition holds. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### NOT
Negates a condition. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### IN
Matches any value in a list or subquery result. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### BETWEEN
Inclusive range test. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### LIKE
Pattern match using % (any characters) and _ (one character). → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### CONCAT Function
Joins strings into one, for example first and last name. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### CASE
If-else expression inside a query. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### CAST
Converts a value to another data type. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### DATEDIFF
Number of days between two dates (MySQL). → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

## Aggregation & grouping

### Aggregate Function
Summarises many rows into one value (COUNT, SUM, AVG, MIN, MAX). Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### COUNT
Counts rows or non-NULL values; COUNT(DISTINCT col) counts unique values. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### COUNT(*) vs COUNT(column)
COUNT(*) counts every row; COUNT(column) skips NULLs in that column. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### SUM
Adds numeric values. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### AVG
Mean of the values, ignoring NULLs. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### MIN
Lowest value. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### MAX
Highest value. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### GROUP BY
Forms groups of rows so aggregates are computed per group. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### HAVING
Filters groups after aggregation (WHERE filters rows before). Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

## Joins & set operations

### JOIN
Combines rows from two or more tables. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

### ON
The condition that matches rows in a join. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### INNER JOIN
Only rows that match in both tables. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### LEFT JOIN
All left rows plus matching right rows; unmatched rows get NULLs on the right. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### RIGHT JOIN
All right rows plus matching left rows. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### FULL OUTER JOIN
All rows from both sides, matched where possible; MySQL has no keyword and emulates it with UNION. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### CROSS JOIN
Cartesian product: every left row paired with every right row. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_02-One-to-Many Constraints, JOIN Row Counts, Constraint Types & GROUP BY Query (2024 Moed B)|PP 02]]

### Self Join
Joining a table to itself, using two aliases. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### Anti-Join
LEFT JOIN plus IS NULL on the right key to find rows with no match. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### JOIN Fan-Out
Row multiplication when joining one-to-many tables, which inflates counts and sums if not handled. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### Relational Model
The relational way of storing data: entities as tables, attributes as columns, tuples as rows, linked by relationships with a cardinality. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]]

### Set Operations
UNION, UNION ALL, INTERSECT and EXCEPT: operators that combine two SELECT results with matching columns. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### UNION
Combines two SELECT results and drops duplicates. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### UNION ALL
Combines two SELECT results and keeps duplicates. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]]

### INTERSECT
Rows that appear in both queries (MySQL 8.0.31 and later). → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### EXCEPT
Rows in the first query but not the second (MySQL 8.0.31 and later). → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

## Subqueries, NULL & advanced SQL

### Subquery
A query nested inside another query. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### Scalar Subquery
A subquery that returns exactly one value. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### Correlated Subquery
A subquery that references the outer query and runs per outer row. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### Derived Table
A subquery in the FROM clause treated as a temporary table. → [[PS_04-SELECT, JOINs & Nested Queries on Sakila|PS 04]]

### EXISTS
True if the subquery returns any row. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### NULL
Marker for a missing or unknown value; it is not equal to anything, not even another NULL. Also in [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]. → [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]]

### IS NULL
Tests whether a value is NULL. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### IS NOT NULL
Tests whether a value is present. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### COALESCE
Returns the first non-NULL argument. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### IFNULL
MySQL function that replaces NULL with a given value. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### NULLIF
Returns NULL if two values are equal, otherwise the first. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Common Table Expression
Named temporary result set defined with WITH, usable in the main query. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### Window Function
Calculation across related rows without collapsing them into one. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### OVER
Clause that defines the window for a window function. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### PARTITION BY
Splits a window into groups. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### ROW_NUMBER
Unique sequential number per row in a window. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### RANK
Rank with gaps after ties. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### DENSE_RANK
Rank without gaps after ties. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### LAG
Value from the previous row in the window. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### LEAD
Value from the next row in the window. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### View
Stored query that acts as a virtual table. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

## Transactions & tools

### Transaction
A sequence of operations treated as one unit. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### COMMIT
Saves a transaction's changes permanently. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### ROLLBACK
Undoes changes since the transaction began. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### SAVEPOINT
Checkpoint inside a transaction to roll back to. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### ACID
Atomicity, Consistency, Isolation, Durability: the guarantees of a transaction. → [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]]

### MySQL Workbench
Client GUI used to write SQL and send it to a server. → [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]]

### MySQL Server
The process that executes SQL and stores the data. → [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]]

### Client-Server Architecture
A client sends requests and a server executes them and returns results. → [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]]

### Identifier
A database-specific name such as a table or column name. → [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]]

### Keyword
A word with special meaning in SQL syntax. → [[PP_05-Foreign Key Purpose, WHERE vs HAVING, Optional INSERT Columns, Workbench vs Server & Identifiers vs Keywords (Sample Questions)|PP 05]]

### Sakila Database
MySQL's sample DVD-rental database (film, rental, customer, payment) used in the problem sets. → [[PS_03-Sakila Aggregate Queries, Multi-Table JOINs & GROUP BY|PS 03]]

## Aliases & Shorthands

Alternative names that point to a canonical entry.

### Entity-Relationship Model
See [[#Entity-Relationship Diagram]].

### Entity-Relationship Modelling
See [[#Entity-Relationship Diagram]].

### ERD
See [[#Entity-Relationship Diagram]].

### ER Diagram
See [[#Entity-Relationship Diagram]].

### Entities
See [[#Entity]].

### Relationships
See [[#Relationship]].

### 1:1
See [[#One-to-One Relationship]].

### 1:N
See [[#One-to-Many Relationship]].

### 1:M
See [[#One-to-Many Relationship]].

### M:N
See [[#Many-to-Many Relationship]].

### Associative Table
See [[#Junction Table]].

### Bridge Table
See [[#Junction Table]].

### Normalization
See [[#Normalisation]].

### 1NF
See [[#First Normal Form]].

### 2NF
See [[#Second Normal Form]].

### 3NF
See [[#Third Normal Form]].

### PK
See [[#Primary Key]].

### FK
See [[#Foreign Key]].

### Composite Key
See [[#Composite Primary Key]].

### Constraints
See [[#Constraint]].

### UNIQUE
See [[#UNIQUE Constraint]].

### NOT NULL
See [[#NOT NULL Constraint]].

### CHECK
See [[#CHECK Constraint]].

### DEFAULT
See [[#DEFAULT Constraint]].

### Index
See [[#Database Index]].

### Indexes
See [[#Database Index]].

### Data Types
See [[#Data Type]].

### Data Definition Language
See [[#DDL]].

### Data Manipulation Language
See [[#DML]].

### INSERT
See [[#INSERT INTO]].

### AS
See [[#Alias]].

### Order of Execution
See [[#Logical Order of Execution]].

### CONCAT
See [[#CONCAT Function]].

### Aggregate Functions
See [[#Aggregate Function]].

### Joins
See [[#JOIN]].

### LEFT OUTER JOIN
See [[#LEFT JOIN]].

### FULL JOIN
See [[#FULL OUTER JOIN]].

### Nested Query
See [[#Subquery]].

### CTE
See [[#Common Table Expression]].

### WITH
See [[#Common Table Expression]].

### Identifiers
See [[#Identifier]].

### Keywords
See [[#Keyword]].

### Sakila
See [[#Sakila Database]].

---

## Concepts added from the lecture slides

### Physical Model
The ER model as implemented in one specific product, with data types, constraints, indexes and storage details. → [[Lec_02-Conceptual Entity-Relationship Modeling|Lec 02]]

### Min-Max Notation
Cardinality written as minimum..maximum next to each entity, such as 1..1 or 0..M. → [[Lec_02-Conceptual Entity-Relationship Modeling|Lec 02]]

### Crow's Foot Notation
An ERD notation that shows cardinality with line-end symbols: a circle for zero, a bar for one and a three-pronged foot for many. → [[Lec_02-Conceptual Entity-Relationship Modeling|Lec 02]]

### Data Inheritance
An "is a" 1-to-1 relationship where a child entity inherits the parent's attributes; at the logical level the child's PK is also an FK to the parent. → [[Lec_03-From Conceptual to Logical Models|Lec 03]]

### Recursive Relationship
A relationship between an entity type and itself, implemented with a self-referencing foreign key. → [[Lec_03-From Conceptual to Logical Models|Lec 03]]

### Identifying Relationship
The relationship between a weak entity and its parent, drawn as a double rhombus. → [[Lec_03-From Conceptual to Logical Models|Lec 03]]

### Natural Key
A primary key based on real data, such as a username or SSN; it is tightly coupled to the business domain. → [[Lec_03-From Conceptual to Logical Models|Lec 03]]

### Redundancy
Storing the same fact in more than one place, which wastes space and risks inconsistent copies. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### Insert Anomaly
Being unable to insert a row because an unrelated field has no value yet. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### Update Anomaly
Updating a value in one row but missing another copy of it elsewhere, leaving the data inconsistent. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### Delete Anomaly
Deleting a row and accidentally losing other important information stored in it. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### Reserved Word
A keyword such as SELECT or DISTINCT that can be used as an identifier only when quoted with backticks. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### Literal Value
A piece of data written directly in a SQL command, such as 'Tom' or 42. → [[Lec_05-Normalization & SQL Syntax|Lec 05]]

### DECIMAL
An exact fixed-point number type declared as DECIMAL(precision, scale). → [[Lec_08-Constraints & Data Types|Lec 08]]

### FLOAT
A 32-bit floating-point type that stores approximate values; DOUBLE is the 64-bit version. → [[Lec_08-Constraints & Data Types|Lec 08]]

### ENUM
A string type limited to a closed list of allowed values. → [[Lec_08-Constraints & Data Types|Lec 08]]

### VARCHAR
A variable-length string type, declared with a maximum length, such as VARCHAR(64). → [[Lec_08-Constraints & Data Types|Lec 08]]

### BLOB
A Binary Large OBject type for binary data such as pictures and video. → [[Lec_08-Constraints & Data Types|Lec 08]]

### TIMESTAMP
A date-and-time type converted to UTC on storage and back on read, with a range ending in January 2038. → [[Lec_08-Constraints & Data Types|Lec 08]]

### USING
A shortcut for ON when the joined column has the same name in both tables; the column then appears once in the result. → [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lec 11]]

### Safe Update Mode
A MySQL setting that only allows UPDATE and DELETE to change data by key, preventing accidental mass changes. → [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lec 11]]

### ETL
The automated process of loading data into a database from outside sources; doing the same thing manually is called importing. → [[Lec_11-Nested Subqueries, INSERT, UPDATE & DELETE|Lec 11]]

### WITH ROLLUP
A GROUP BY modifier that adds sub-total rows for each group plus a grand total. → [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lec 12]]

### GROUPING
A function that returns 1 for rollup rows and 0 for regular rows. → [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lec 12]]

### Recursive CTE
A common table expression joined with itself, built from a base case and a recursive step combined with UNION ALL. → [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lec 12]]

### Full Table Scan
Reading a table from start to finish to answer a query instead of using an index. → [[Lec_12-WITH ROLLUP, CTEs & Indexes|Lec 12]]

### Updatable View
A view whose rows map 1-to-1 to rows of the underlying table, so INSERT, UPDATE and DELETE through it change the real table. → [[Lec_13-Indexes, Views & NoSQL|Lec 13]]

### NoSQL
An umbrella term for database paradigms not based on relational theory, including document, columnar, graph, object and time-series databases. → [[Lec_13-Indexes, Views & NoSQL|Lec 13]]

### Document Database
A database that stores key-value documents in collections, with no fixed table schema. → [[Lec_13-Indexes, Views & NoSQL|Lec 13]]

### MongoDB
A document database with collections instead of tables and its own query language instead of SQL. → [[Lec_13-Indexes, Views & NoSQL|Lec 13]]

