---
title: "Lec 01: Sorting, Filters & Database Functions"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 1
tags:
  - excel-data-analysis
  - sorting
  - autofilter
  - advanced-filter
  - wildcards
  - subtotal
  - database-functions
  - filter-function
  - absolute-reference
  - conditional-formatting
subject: excel-data-analysis
in_scope: true
---

# Lec 01: Sorting, Filters & Database Functions

> Part of: Excel for Data Analysis
> Key concepts: [[Sorting]], [[AutoFilter]], [[Advanced Filter]], [[Criteria Range]], [[Wildcard]], [[SUBTOTAL]], [[Database Function]], [[DAVERAGE]], [[DCOUNT]], [[DSUM]], [[FILTER]], [[SEQUENCE]], [[Absolute Reference]], [[Conditional Formatting]]

> [!info] What this note covers
> The class workbook `Sorting .xlsx`. It is the **base dataset of the whole course**: later workbooks (dates, IF statements, lookups, pivots) reuse the same 200-row employee table, so learn its columns now. The sheets are `employees`, `Sorting`, `Sorting 2`, `Filter`, `Filter 2`, `Filter 3`, `Filters advanced`, `Filters advanced 2` and `Sheet1`. Rows 2 to 201 hold the data; header in row 1.

> [!info] Class file (download)
> Three Moodle class files go with this lecture (the 24 November 2024 class and its starting table). Download and follow along:
> - [Employee table, starting file (xlsx)](/papers/excel-data-analysis/class-employees-start.xlsx): `format_new.xlsx`, the clean 200-row table with no formulas and no formatting.
> - [Sort and formatting class, 24.11 (xlsx)](/papers/excel-data-analysis/class-24-11-sort.xlsx): `24.11_sort.xlsx`.
> - [Filters and advanced filter class, 24.11 part 2 (xlsx)](/papers/excel-data-analysis/class-24-11-part2.xlsx): `24.11_part2.xlsx`.

## 1. The employee dataset

Every sheet from `employees` to `Filters advanced 2` carries the same table in `A1:J201` (200 employees, 10 columns). The only differences are the row order and what has been done on top of it (sorting, filters, extra columns).

| Column | Header | Type | Notes |
| --- | --- | --- | --- |
| A | Employee ID | number | 10002 and up |
| B | First Name | text | |
| C | Last Name | text | |
| D | Branch | text | 16 branches (Eilat, Haifa, Tel Aviv, Tiberias, ...) |
| E | Department | text | 9 departments (Sales, Computing, Warehouse, ...) |
| F | Birth Date | date | stored as a serial number |
| G | Hire Date | date | stored as a serial number |
| H | Seniority | number | years at the company |
| I | Position | text | Supporter, Employee, Team Leader, Branch Director, CEO, ... |
| J | Monthly Salary in NIS | number | |

First rows of the `employees` sheet, copied from the workbook (the two date columns are left out here):

| Employee ID | First Name | Last Name | Branch | Department | Seniority | Position | Monthly Salary in NIS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10002 | Lilach | Argov | Eilat | Computing | 6 | Supporter | 4095 |
| 10013 | Tamir | Pinchasof | Tiberias | Planning | 17 | Department Director | 4365 |
| 10020 | Danny | Tobias | Metula | Bookkeeping | 3 | Assistant | 4770 |
| 10031 | Pini | Etzioni | Rishon Lezion | Sales | 4 | Supporter | 4950 |
| 10033 | Svetlana | Pinchasof | Haifa | Human Resources | 24 | Supporter | 4005 |

> [!tip] Dates are numbers
> Excel stores a date as a **serial number** (days counted from a fixed start). The scratch cells `N12 = 36526` and `N13 = 21916` on every sheet are the serials of 1 January 2000 and 1 January 1960. The class used them to type date thresholds as plain numbers in filters. Dates get a full treatment in [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]].

### Conditional formatting already on the table

All the sheets carry the same [[Conditional Formatting]] rules, which is why the data looks colour-coded. They are the reason the class can later **sort and filter by colour**.

| Applies to | Rule | Colour |
| --- | --- | --- |
| `A2:J201` | whole row where `$E2=$E$204` (Department equals the typed word in `E204`, here `computing`) | orange fill |
| `H2:H201` (Seniority) | greater than 24 | green |
| `J2:J201` (Salary) | less than 5000 | red |
| `J2:J201` | between 5000 and 10000 | yellow |
| `J2:J201` | greater than 10000 | green |

The first rule is worth studying. It is a **formula-based rule**: `$E2=$E$204` has a mixed reference (`$E2`: column locked, row free) so the test slides down the rows, and an absolute `$E$204` so every row is compared with the one input cell. Change the word in `E204` and a different department lights up. The label next to it, `sen over 25` in `H204` with `25` in `H205`, is a leftover note for the seniority rule (the stored rule is "greater than 24", which for whole years means 25 or more).

> [!warning] Common mistake
> If you forget the `$` on the column (`E2` instead of `$E2`) the rule shifts sideways as well and colours the wrong cells. Mixed references are explained in section 7.

## 2. Sorting

Sheets: `Sorting`, `Sorting 2`.

[[Sorting]] reorders **whole rows** by the values of one or more columns (Data > Sort). Key ideas:

- **Select a cell inside the table** (or the whole table) so Excel moves complete records and never just one column. Sorting a single column on its own scrambles who earns what.
- **Multi-level sort**: sort by a main key, then by a second key *within ties*, and so on. The levels are applied in the order listed.
- You can sort by **values**, **cell colour**, **font colour** or **icon**. Colour sorting works with the conditional formatting above.

The `Sorting` sheet was saved with a four-level sort on `A2:J201`:

| Level | Sort on | Sort by | Order |
| --- | --- | --- | --- |
| 1 | Seniority (`H`) | values | smallest to largest |
| 2 | Monthly Salary (`J`) | cell colour | red on top |
| 3 | Monthly Salary (`J`) | cell colour | yellow next |
| 4 | Monthly Salary (`J`) | cell colour | green last |

> [!note] Reconstructed from the workbook
> The sort settings are read from the saved sort state in the file. The colours are identified from the colour definitions attached to each level (red, yellow, green fills). The class demonstration itself (what was clicked) is not in the file.

So employees are ordered by seniority first, and inside each seniority value the low-paid (red) rows come before mid-paid (yellow) before high-paid (green). `Sorting 2` holds the same table in a different row order (it starts with employee 10137 instead of 10020), i.e. a second practice copy.

> [!tip] Sorting by colour needs three levels
> Excel can put only **one colour on top per level**. To rank red, then yellow, then green you add one level per colour, exactly as the sheet does.

## 3. AutoFilter

Sheets: `Filter`, `Filter 2`, `Filter 3`.

The [[AutoFilter]] (Data > Filter, drop-down arrows on the header row) **hides** the rows that do not match. Hidden rows are not deleted; clear the filter and they return. It covers `A1:J201` on all three sheets.

Filter types by column data type:

| Column type | Filter options |
| --- | --- |
| Text | equals, begins with, ends with, contains, custom |
| Number | equals, greater than, between, top 10, above or below average |
| Date | before, after, between, this month, grouping by year |
| Any | filter by cell colour or font colour |

`Filter 2` was saved in a heavily filtered state. Reading the saved filter settings, four columns were filtered **at the same time**:

| Column | Filter | Meaning |
| --- | --- | --- |
| E Department | custom: contains `e` **or** begins with `a` | Excel allows two conditions in one column, joined by And/Or |
| F Birth Date | greater than 24108 | born after 1 January 1966 (24108 is that date's serial number) |
| H Seniority | above average | dynamic filter, recalculated against the column average |
| J Salary | filter by cell colour | one of the conditional-formatting colours |

> [!info] How filters combine
> Filters on **different columns are ANDed** (a row must pass every column's filter). Inside **one column** you can choose And or Or between two conditions. For anything more elaborate (OR across different columns) the AutoFilter is not enough: that is what the [[Advanced Filter]] in section 5 is for.

### Calculating on filtered data with SUBTOTAL

On `Filter 2` the class added two totals under the table:

| Cell | Formula | Result | Meaning |
| --- | --- | --- | --- |
| `J204` | `=SUBTOTAL((9),J20:J45)` | 61047 | sum of the **visible** salaries in `J20:J45` |
| `H206` | `=SUBTOTAL(1,H20:H45)` | 19.2 | average of the **visible** seniorities in `H20:H45` |

[[SUBTOTAL]] takes a function number first, then the range:

| Number | Function |
| --- | --- |
| 1 | AVERAGE |
| 2 | COUNT |
| 3 | COUNTA |
| 4 | MAX |
| 5 | MIN |
| 9 | SUM |

Plain `SUM` and `AVERAGE` add up **everything**, including rows a filter has hidden. `SUBTOTAL` ignores rows hidden by a filter, so the figure changes as the filter changes. That is its whole purpose.

> [!warning] Common mistakes
> - Using `=SUM(...)` under a filtered list and trusting the number: it still includes the hidden rows.
> - The function numbers 101 to 111 are the variants that also ignore rows you hid by hand; 1 to 11 only ignore filtered-out rows.
> - The range `J20:J45` in the class file is just the block of rows visible in that filtered view. If the filter changes and new rows appear outside it, the formula does not grow by itself. Point it at the whole column range (`J2:J201`) for a stable total.
> - `SUBTOTAL` ignores other `SUBTOTAL` cells inside its range, so grand totals don't double count.

> [!note] Reconstructed from the workbook
> The explanation of function numbers 101 to 111 and the "does not grow" comment are standard Excel behaviour, not text written in the workbook. The two formulas and their results are verbatim.

## 4. Wildcards

Reference text typed beside the `Filters advanced 2` sheet (cells around `P196` to `R200`):

| Pattern | Meaning (the class's own wording, tidied) |
| --- | --- |
| `*` | any number of characters (including none) |
| `?` | exactly one character |
| `a*` | starts with a |
| `*a` | ends with a |
| `*Haifa*` | contains Haifa |
| `a???` | starts with a and has exactly three more letters after it (a four-letter word) |

[[Wildcard]] patterns work in AutoFilter text filters, in the [[Advanced Filter]] criteria, in database-function criteria, and in functions such as `COUNTIF`. They are **not case sensitive**.

> [!warning] Wildcards only work on text
> `*` and `?` match text. Typing `1*` to find numbers starting with 1 will not match real numbers. Also, to look for a literal asterisk or question mark, put `~` in front (`~*`).

## 5. Advanced Filter

Sheets: `Filters advanced` and `Filters advanced 2`.

The [[Advanced Filter]] (Data > Advanced) is a filter driven by a **criteria range** that you build on the sheet in advance. Task text in the workbook gives the two steps:

1. **Create the criteria.**
2. **Choose the headers to filter** (the columns you want in the output).

### 5.1 The criteria range

A [[Criteria Range]] is a small block of cells whose **top row is a copy of the exact column headers** from the data table, with the conditions written underneath. The data table is `A1:J201` (the "list range"). The layout rules:

- Headers must match the data headers **exactly**. A task note on the sheet says it has to be the *same format*, and that the filter would not work if the Branch header was not formatted as in the data (a hint that the class copied the headers rather than retyping them).
- **Conditions on the same row are ANDed.**
- **Conditions on different rows are ORed.**

The class drew all three patterns on `Filters advanced 2` (cells `I209` to `L219`), using Monthly Salary, Branch and Seniority:

AND: salary above 10000 **and** branch Eilat **and** seniority under 15, all on one row:

| Monthly salary in NIS | branch | seniority |
| --- | --- | --- |
| >10000 | eilat | <15 |

OR: each condition on its own row, in a staircase:

| Monthly salary in NIS | branch | seniority |
| --- | --- | --- |
| >10000 | | |
| | eilat | |
| | | <15 |

Mixed: "from Eilat **OR** (salary above 10000 **and** seniority under 15)":

| Monthly salary in NIS | branch | seniority |
| --- | --- | --- |
| >10000 | | <15 |
| | eilat | |

> [!tip] Reading a criteria range
> Read each **row** as one complete test (AND across its cells), then OR the rows together. A **blank cell in a row means "no condition on that column"**.

> [!warning] A blank row in the criteria range matches everything
> If the range you give Excel includes an empty row, every record passes, because an empty row is an empty set of conditions. Select only the rows that contain conditions.

### 5.2 The worked example on `Filters advanced`

Criteria range `Q236:R239`, output headers `T236:X236`:

| Branch | Monthly Salary in NIS |
| --- | --- |
| eilat | >9000 |
| Tel Aviv | >9000 |
| `*t*` | >9000 |

The output headers are First Name, Last Name, Branch, Seniority and Monthly Salary in NIS. First rows of the result stored in the sheet (22 rows in all):

| First Name | Last Name | Branch | Seniority | Monthly Salary in NIS |
| --- | --- | --- | --- | --- |
| Hodaya | Argov | Tiberias | 11 | 9576 |
| Vadim | Dean | Kiryat Shmone | 26 | 9342 |
| Shaked | Zichroni | Kiryat Shmone | 7 | 9612 |
| Yuval | Zichroni | Kiryat Shmone | 12 | 9459 |
| Tal | Dean | Tel Aviv | 9 | 12060 |

Each row repeats `>9000` because the salary condition must apply to **every** branch alternative: AND inside a row, OR across rows.

> [!note] Reconstructed from the workbook
> I recomputed this from the data: employees with salary above 9000 whose branch is Eilat, Tel Aviv or contains a `t` number 22 and their salaries sum to 252495, matching the stored result. The row `*t*` already covers Eilat and Tel Aviv (both contain a t), so the first two rows add nothing here; the class most likely put them in to show the wildcard row coexisting with exact names.

### 5.3 Copy to another location

In the Advanced Filter dialog you choose **Filter the list, in-place** (hides rows like AutoFilter) or **Copy to another location**. The second option writes the matching rows, with only the columns whose headers you placed in the output row, to a separate block. That is what the class did: the extract block starts at the headers in row 236 (`T236:X236`), and the sheet stores `Criteria` and `Extract` as hidden defined names pointing at those ranges (`Filters advanced!$Q$236:$R$239` and `$T$236:$X$236`).

A second exercise on `Filters advanced 2` has criteria `I222:K228` (headers Branch, Department, Seniority) and an extract with Employee ID, First Name, Last Name, Branch, Department and Seniority in `N222:S222`:

| Branch | Department | Seniority |
| --- | --- | --- |
| m* | Planning | >=8 |
| j* | Planning | >=8 |
| *a | Planning | >=8 |
| m* | Sales | >=8 |
| j* | Sales | >=8 |
| *a | Sales | >=8 |

This shows how to write "branch begins with m, **or** begins with j, **or** ends with a, **and** department Planning **or** Sales **and** seniority at least 8". There is no single-cell way to say OR inside one column in a criteria range, so every combination gets its own row (3 branch patterns times 2 departments = 6 rows).

> [!warning] Criteria rows multiply
> OR across two columns (here branch pattern and department) forces you to write every pairing. That is the weakness of the criteria range, and a reason the newer [[FILTER]] function (section 6) is more convenient.

> [!note] Reconstructed from the workbook
> The stored output block on this sheet has 38 data rows. It does not look like the six-row criteria above applied to Branch (my recomputation gives a smaller list), and it matches roughly the Planning/Sales seniority-8-or-more set, so the extract was probably made with an earlier version of the criteria. The criteria text itself is verbatim; trust the rule, not that stored list.

## 6. Database functions

Sheet: `Filters advanced`, columns `AC` to `AG`.

[[Database Function]]s (the D-functions) compute a statistic over only the records that satisfy a criteria range, using the **same kind of criteria range** as the Advanced Filter. They all share three arguments, which the class summarised on the sheet in the form "d average (from data, field, criteria)":

| Argument | Meaning | Example |
| --- | --- | --- |
| database | the whole table **including the header row** | `A1:J201` |
| field | which column to calculate on, given as its header cell (or its number) | `J1` |
| criteria | the criteria range, headers plus conditions | `AC236:AE238` |

### DAVERAGE

```excel
=DAVERAGE(A1:J201,J1,AC236:AE238)
```

Result: **8116.862068...** (average salary). Criteria range:

| Position | Seniority | Hire Date |
| --- | --- | --- |
| Support | <12 | >1/1/2000 |
| assistant | <12 | >1/1/2000 |

Meaning: average monthly salary of employees whose position is Support or assistant, with seniority under 12 and hired after 1 January 2000. The two position words are on different rows (OR); the seniority and hire date conditions are repeated on each row (AND).

> [!tip] Text criteria are "begins with"
> A text condition `Support` matches any value that **begins with** those letters, so it catches `Supporter`. `assistant` likewise catches `Assistant` and `Assistant Director`, and capitals do not matter. I checked this against the data: counting those matches reproduces the stored result of 8116.86 over 29 employees. To match a word exactly, write it as `="=Support"`.

### DCOUNT

```excel
=DCOUNT(A1:J201,A1,AC242:AD245)
```

Result: **33**. Criteria range (`<>` means NOT):

| Last Name | Branch |
| --- | --- |
| <>Guri | Safed |
| <>Guri | Karmiel |
| <>Guri | Raanana |

Count of employees in Safed, Karmiel or Raanana whose last name is not Guri. The class note says the field argument "doesn't matter in this case". It matters only in that it must be a column of **numbers**: `DCOUNT` counts numeric cells, and Employee ID (`A1`) is numeric in every record, so it counts records. For a text column use `DCOUNTA`.

### DSUM

```excel
=DSUM(A1:J201,J1,_xlnm.Criteria)
```

Result: **252495**, which equals the sum of the 22 salaries in the advanced-filter output above. Here the criteria argument is not a typed address but the hidden name `Criteria` that Excel creates for the Advanced Filter's criteria range (`Q236:R239`). The label "Sum / Dsum" sits beside it. In practice, give the criteria as an ordinary range like the other two functions: it is clearer and also works on other sheets.

> [!warning] Database-function pitfalls
> - The criteria headers must match the data headers exactly, character for character.
> - The database range must include the header row.
> - A blank row inside the criteria range makes the function ignore the criteria (everything matches).
> - A formula placed inside the criteria range area, or the result cell inside the database, causes circular or wrong answers. Keep inputs and outputs apart.

### Comparison

| Tool | Hides or copies rows | Returns a single number | Updates automatically | Typical use |
| --- | --- | --- | --- | --- |
| [[AutoFilter]] | hides rows in place | no (use SUBTOTAL) | needs reapply on new data | quick exploration |
| [[Advanced Filter]] | hides, or copies to a new place | no | no (re-run it) | complex OR/AND criteria, extract to a new block |
| [[Database Function]] | no | yes | yes | one statistic over a criteria set |
| [[FILTER]] | spills matching rows into cells | no (returns a table) | yes | modern replacement for most filtering |

## 7. The FILTER function

Sheet: `Filters advanced`, `Q263` and `Q287`.

[[FILTER]] (Excel 365 and 2021) returns the matching rows as a live table that **spills** into the cells below and to the right. The class's note: "`*` means AND, `+` means OR".

```excel
=FILTER(A2:J201,(E2:E201="Sales")*(H2:H201>10))
```

Task text: *filter from the data, in the sales branch AND seniority greater than 10* (the text says "branch" but the condition is on the **Department** column `E`). It sits in `Q264` and spills into `Q264:Z285`: 22 rows by 10 columns.

| Employee ID | First Name | Last Name | Branch | Department | Seniority | Position | Monthly Salary in NIS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10042 | Sharon | Shabbat | Acre | Sales | 32 | Supporter | 4545 |
| 10068 | Pini | Philosof | Raanana | Sales | 17 | Head of | 3735 |
| 10009 | Hanney | Hakim | Tiberias | Sales | 38 | Department Director | 6255 |
| 10011 | Pini | Turgeman | Kiryat Shmone | Sales | 16 | Employee | 7326 |

(Birth and hire dates are also spilled; they are left out of this extract.)

Second exercise, `Q287`: *work as team leader AND earn above 8000*.

```excel
=FILTER(A2:J201,(I2:I201="Team Leader")*(J2:J201>8000))
```

It spills into `Q288:Z301` (14 rows):

| Employee ID | First Name | Last Name | Branch | Department | Seniority | Position | Monthly Salary in NIS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10017 | Lilach | Levy | Beer Sheba | Planning | 4 | Team Leader | 8505 |
| 10076 | Bilha | Belkin | Modiin | Computing | 6 | Team Leader | 9639 |
| 10153 | Hanney | Warburg | Hadera | Accounting | 11 | Team Leader | 9094 |

### Why the multiplication works

Each comparison, for example `E2:E201="Sales"`, produces a column of 200 TRUE/FALSE values. Multiplying two such columns turns them into 1 and 0 and gives 1 only where **both** are true: that is AND. Adding them (`+`) gives 1 or 2 where at least one is true: that is OR. `FILTER` keeps the rows where the combined result is non-zero.

```excel
=FILTER(A2:J201,(E2:E201="Sales")+(E2:E201="Warehouse"))
```

> [!note] Reconstructed from the workbook
> The `+` (OR) formula above is an illustrative example written from the class's "plus means OR" remark; it is not in the file.

> [!warning] Common mistakes
> - **`#SPILL!`**: the cells where the result wants to land must be empty. The result area is sized by the data, so leave room.
> - Do not include the header row in the first argument (`A2:J201`, not `A1:J201`), otherwise the header row is tested too and the ranges no longer line up.
> - The condition ranges must be the same height as the data (`E2:E201` against `A2:J201`).
> - An optional third argument sets what to show if nothing matches; without it you get `#CALC!`.
> - Mixed text and number criteria: write the text in quotes, numbers without.

## 8. Absolute and mixed references (`Sheet1`)

Sheet: `Sheet1`, a 20 by 20 multiplication table. It is the class's exercise for **locking references** and also uses [[SEQUENCE]] to avoid typing the headers.

| Cell | Formula | What it does |
| --- | --- | --- |
| `B1:U1` | `=SEQUENCE(,20,1,1)` | spills 1 to 20 across a **row** (rows empty, 20 columns, start 1, step 1) |
| `A2:A21` | `=SEQUENCE(20,,1,1)` | spills 1 to 20 down a **column** |
| `B2` (copied to `U21`) | `=B$1*$A2` | multiplies the column header by the row header |

`SEQUENCE(rows, columns, start, step)` leaves out an argument by writing nothing between the commas. The multiplication-table core is a corner of the grid:

| | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **1** | 1 | 2 | 3 | 4 | 5 |
| **2** | 2 | 4 | 6 | 8 | 10 |
| **3** | 3 | 6 | 9 | 12 | 15 |
| **4** | 4 | 8 | 12 | 16 | 20 |
| **5** | 5 | 10 | 15 | 20 | 25 |

### The three reference types

[[Absolute Reference]] is the idea that a `$` freezes part of an address when the formula is copied:

| Style | Example | When copied | Use |
| --- | --- | --- | --- |
| Relative | `B1` | row and column both move | ordinary running formulas |
| Absolute | `$B$1` | neither moves | a single input cell, such as a rate or threshold |
| Mixed, column locked | `$A2` | row moves, column stays | headers down the left side |
| Mixed, row locked | `B$1` | column moves, row stays | headers along the top |

In `=B$1*$A2`: `B$1` always reads from row 1 (the top header) but follows the column, and `$A2` always reads from column A (the side header) but follows the row. One formula, copied across 400 cells, fills the whole table. Press `F4` while the cursor is on a reference to cycle through the four styles.

> [!tip] Check the table by hand
> The cell in column `K` (header 10) and row 3 (header 2) must equal 20, and it does. A multiplication table is a useful self-check for any mixed reference.

`Sheet1` also has conditional formatting on `B2:U21`: values under 50 get one colour, values from 100 to 200 another, and values over 200 a third (note that 50 to 100 is left uncoloured).

### The same idea on the employee data: a bonus column

On `Filters advanced`, two extra columns sit beside the table:

| Cell | Formula | Meaning |
| --- | --- | --- |
| `K2` | `=IF(J2>$K$204,$L$204,$L$205)` | if salary is above the threshold, pay the first bonus, otherwise the second |
| `L2` | `=K2+J2` | salary plus bonus |

with the **inputs typed once in a small block**: `K204 = 10000` (salary threshold, labelled "Salary greater"), `L204 = 500` ("Give") and `L205 = 1000` ("Else, give"). Salary above 10000 earns a bonus of 500, everyone else 1000. Because the three inputs are locked with `$`, the formula can be filled down all 200 rows and changing one input updates every row. Row 2, for example: salary 4095 plus bonus 1000 gives 5095, as in the sheet. The `IF` function itself is taught in [[Lec_02-IF Statements & Logical Functions]].

> [!warning] Common mistake
> Typing `10000` and `500` directly into the formula ("hard-coding") works once but hides the assumptions. If the threshold changes you must edit 200 formulas. Put inputs in cells and lock them.

### Stray cells to ignore

`Filters advanced` also contains `J202 = SUM(J1:J201)` (1629264, the total salary bill) and a stray `XFD2 = SUM(A2:XFC2)`, a sum across an entire row to the last column of the sheet. They are leftovers, not part of the lesson. Avoid whole-row sums: they are slow and sensitive to anything accidentally typed in the row.

## The class file, sheet by sheet

These are the Moodle versions of the base employee table used in this lecture. They carry the class **exercise instructions** typed into cells below the data (starting around row 204).

**`format_new.xlsx` (starting file).** One sheet, `employees`, with the 200 employees in `A1:J201` (Employee ID, names, Branch, Department, Birth Date, Hire Date, Seniority, Position, Monthly Salary in NIS). No formulas and no conditional formatting. This is the blank table the class starts from.

**`24.11_sort.xlsx` (sorting and formatting).** One sheet, `employees`, with the same table plus:

| Item | Where | What it shows |
|---|---|---|
| Euro salary | column `K`, `=J2/$I$205` | salary divided by the euro rate; the rate `3.95` sits in the helper cell `I205` (label in `I204`), an [[Absolute Reference]] |
| Seniority threshold | `G205` = `25` (label "sen over 25") | a helper cell for a seniority rule |
| Colour rules on salary | `J2:J201` | [[Conditional Formatting]] with the thresholds in cells: salary at or above `G209` (`10000`) is purple, salary below `G211` (`5000`) is green |
| Helper values for a formatting exercise | `C208`, `E209`, `C209` | Tiberias, Metula and the date `1 January 1980`, the "or formatting" criteria |
| Instruction | `E217` and `E218` | duplicate the sheet as `formatting` and colour the whole row of every employee in the Computing department |

**`24.11_part2.xlsx` (sort, filter, advanced filter).** Three sheets, all carrying the same table and helper cells as `24.11_sort.xlsx`:

- `employees` has two instructions: sheet `sort1` (sort the salary column with green cells first, then purple, then values from largest to smallest) and sheet `sort2` (Branch A to Z, then Department Z to A, then Birth Date newest to oldest). See section 2 on [[Sorting]].
- `filter` has the filter tasks typed in `J213:J217`: show the employees whose salary cell is purple; whose seniority is above the average; whose department contains the letter `e` or begins with `a`; and whose birth date is after 1 January 1966. It also has `J208` = `=SUM(J66:J200)` and `J209` = `=SUBTOTAL(9,J66:J200)` side by side, to show the difference between `SUM` and [[SUBTOTAL]] on filtered rows (both read 1,128,479 in the saved file because no filter is active).
- `advanced` is the [[Advanced Filter]] practice sheet. It lays out four criteria-range shapes in `F215` to `H233`: a simple one (Monthly Salary `>10000` and Branch `Eilat` on one row, so AND); an AND of three (salary `>10000`, branch `Eilat`, seniority `<15` on one row); an OR (the three conditions on different rows); and a mixed one (salary `>10000` and seniority `<15` on one row, `Eilat` on the next). The worked task is "work in accounting or computing and earn above 10000" (`F238`): criteria `Department` and `Monthly Salary in NIS` in `F240:G242` with Accounting and Computing on two rows, each with `>10000`. The result list below it, headers in `F247:J247`, holds the 19 matching employees. This is the same rule as section 5 of this note: same row is AND, different rows are OR.

## Summary

- The dataset (`A1:J201`, 200 employees) is reused all course. Know its ten columns.
- **Sorting** reorders whole rows; multi-level and colour sorting need one level per key or colour.
- **AutoFilter** hides rows; filters on different columns combine with AND. Use **SUBTOTAL** (not SUM) to total only the visible rows.
- **Wildcards**: `*` any run of characters, `?` one character, `~` to escape them.
- **Advanced Filter**: criteria range with exact headers; same row means AND, different rows mean OR; can copy results to another place with chosen columns.
- **Database functions** (`DAVERAGE`, `DCOUNT`, `DSUM`) take database including headers, field and criteria range; text criteria mean "begins with".
- **FILTER** spills matching rows; multiply conditions for AND, add for OR.
- **Absolute and mixed references** (`$B$1`, `B$1`, `$A2`) let one formula be copied across a grid; `SEQUENCE` builds the headers.

## Related notes

- Next: [[Lec_02-IF Statements & Logical Functions]] (the bonus column uses `IF`), [[Lec_03-Calendars & Date Calculations]], [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]
- Later uses of the same employee data: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]], [[Lec_07-Pivot Tables]]
- Rest of the course: [[Lec_05-Time Functions & Protecting Cells]], [[Lec_08-VBA Macros]]
