---
title: "Lecture 8 — Constraints & Data Types"
subject: databases-sql
week: 8
lecture: "08"
semester: 1
year: 2
academic_year: "2025-26"
course: "Databases & SQL"
instructor: Uri Goldstein
tags:
  - databases-sql
  - lecture
  - class-slides
  - data-type
  - decimal
  - float
  - enum
  - varchar
  - blob
  - timestamp
aliases:
  - "Databases Lecture 8"
  - "SQL Lecture 8"
  - "MySQL Data Types"
in_scope: true
---

# Lecture 8 — Constraints & Data Types

> Part of: [[Databases & SQL]]
> **Lecture 8** · In-class slide deck (Uri Goldstein, 2025-26)
> Key concepts: [[Data Type]], [[DECIMAL]], [[FLOAT]], [[ENUM]], [[VARCHAR]], [[BLOB]], [[TIMESTAMP]]

> [!info] How this note was made
> Written from the 55-slide class deck. Slides 2 to 22 repeat constraints from [[Lec_07-DDL & Constraints|Lecture 7]], so this note covers data types. Explanations are AI-written, and likely slide errors are flagged.

## Why data types matter

Without protection, a database fills with garbage: missing values, typos, wrong formats and mixed data. **Garbage in, garbage out.**

A [[Data Type]] is a powerful integrity tool. If a column is `INT`, inserting a string fails with an error, which stops the mistake at the door.

## Integers

| Type | Bytes |
|---|---|
| `TINYINT` | 1 |
| `SMALLINT` | 2 |
| `MEDIUMINT` | 3 |
| `INT` | 4 |
| `BIGINT` | 8 |

> [!success] Which size to pick?
> **Stick to `INT`.** Storage is cheap. Use `BIGINT` only for literally astronomical values.

> [!note] Marked "not in the exam"
> A `TINYINT` is 8 binary digits, so unsigned it holds 0 to 255 and signed it holds -128 to +127. In binary, $25 = 11001_2 = 2^4 + 2^3 + 2^0$.

> [!warning] Slide check
> Slide 26 expands decimal 25 as "2 x 10¹ + 5 x 10²". The second power should be **10⁰**: $2 \times 10^1 + 5 \times 10^0 = 25$.

## Decimal numbers

### DECIMAL (fixed point)

[[DECIMAL]] stores **exact** values. Its synonyms are `DEC`, `NUMERIC` and `FIXED`.

```sql
DECIMAL(5,2)  -- precision 5, scale 2: from -999.99 to 999.99
```

- **Precision** is the maximum total number of digits.
- **Scale** is the number of digits after the decimal point.

### FLOAT and DOUBLE (floating point)

[[FLOAT]] is a 32-bit floating-point number and `DOUBLE` is 64-bit. Compared with DECIMAL they:

- Can store very small and very large numbers.
- Are faster for the CPU.
- Hold **approximations**, which may be slightly inaccurate.

```sql
SELECT
    (CAST(0.3 AS FLOAT) * 10) AS `float`,
    (CAST(0.3 AS DECIMAL(10,10)) * 10) AS `decimal`;
```

> [!success] Bottom line
> **Always use fixed point (`DECIMAL`)**, unless you are dealing with very large or very small numbers and paying special attention to comparisons. Money is the classic case. See 2025 Moed A Q12 in [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]], where `2.0 * 1.17` comes out as `2.33999999999`.

## BIT and BOOL

- `BIT` represents 0 or 1 and can have a length: `BIT(4)` holds values like `0110`.
- `BOOL` / `BOOLEAN` represents TRUE or FALSE.

> [!note] AI note
> In MySQL, `BOOL` is really a synonym for `TINYINT(1)`, where 0 is false and non-zero is true.

## ENUM

[[ENUM]] is a **closed list** of allowed string values.

```sql
CREATE TABLE shirts (
    size ENUM('XS', 'S', 'M', 'L', 'XL')
);

INSERT INTO shirts (size) VALUES ('M');   -- works
INSERT INTO shirts (size) VALUES ('m');   -- works: case-insensitive
INSERT INTO shirts (size) VALUES ('XXL'); -- fails
```

> [!warning] ENUM sort order
> `ORDER BY` on an ENUM follows the **order the values were defined**, not the alphabet. That is why XS, S, M, L, XL sort sensibly.

## Strings

| Type | Meaning |
|---|---|
| `CHAR(n)` | Fixed-length string |
| [[VARCHAR\|VARCHAR(n)]] | Variable-length string, up to 65,535 |

> [!warning] Slide check
> The slide gives the `CHAR` maximum as 256. MySQL's documented maximum is **255**.

The trailing-space behaviour below is marked **not in the exam**: `CHAR` drops trailing spaces on read and `VARCHAR` keeps them.

| Value | `CHAR(4)` | `VARCHAR(4)` |
|---|---|---|
| `'ab  '` | `'ab'` | `'ab  '` |
| `'abcd'` | `'abcd'` | `'abcd'` |
| `'abcdefg'` | Error | Error |

## BLOB and TEXT

| | [[BLOB]] | TEXT |
|---|---|---|
| **Contents** | Binary, such as pictures and video | Character strings |
| **Sizes** | TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB | TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT |
| **Comparison** | As binary | As text |

Both hold very large values, **cannot be fully indexed** (indexes use a prefix), and are stored separately from the rest of the table.

## Dates and times

| Type | Holds | Format | Range (slides) |
|---|---|---|---|
| `DATE` | Date only | `YYYY-MM-DD` | 1000-01-01 to 9999-12-31 |
| `DATETIME` | Date and time | `YYYY-MM-DD HH:MM:SS` | 0001-01-01 to 9999-12-31 |
| [[TIMESTAMP]] | Date and time, UTC-converted | `YYYY-MM-DD HH:MM:SS` | 1970-01-01 00:00:01 to 2038-01-19 03:14:07 UTC |
| `TIME` | Time or interval | `HH:MM:SS` | -838:59:59 to 838:59:59 |
| `YEAR` | Year | `YYYY` | Four-digit |

`TIME` is good for measuring intervals and can include fractional seconds.

> [!warning] Slide checks
> - **DATETIME range:** the MySQL manual documents the supported range as starting at **1000-01-01**, not 0001-01-01.
> - **TIMESTAMP "preserving the Time Zone":** MySQL converts to UTC on storage and back to the session's zone on read. The **original zone is not stored**.

> [!danger] Two-digit years are deprecated
> `00-69` becomes 2000-2069 and `70-99` becomes 1970-1999. **Always use four-digit years.** `YEAR(2)` is deprecated.

## Summary

- Data types protect integrity by rejecting bad values.
- Use `INT` for whole numbers and `DECIMAL` for exact decimals. `FLOAT` is approximate.
- `ENUM` is a closed list and sorts by definition order.
- `TIMESTAMP` is UTC-based and ends in 2038.

## Related Notes

- Previous: [[Lec_07-DDL & Constraints|Lecture 7]]
- Next: [[Lec_09-SELECT|Lecture 9]]
- Tested in: [[PP_06-JOIN Theory, Indexes, LIKE, FLOAT vs DECIMAL & Many-to-Many Tables (2025 Moed A)|PP 06]]
