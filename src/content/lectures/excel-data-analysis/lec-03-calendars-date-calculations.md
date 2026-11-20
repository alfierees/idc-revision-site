---
title: "Lec 03: Calendars & Date Calculations"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 3
tags:
  - excel-data-analysis
  - dates
  - calendar
  - sequence
  - date-functions
  - if-function
  - datedif
subject: excel-data-analysis
in_scope: true
---

# Lec 03: Calendars & Date Calculations

> Part of: [[Excel for Data Analysis]]
> Key concepts: [[Date Serial Number]], [[SEQUENCE]], [[DATE]], [[WEEKDAY]], [[EOMONTH]], [[TODAY]], [[DATEDIF]], [[Data Validation]], [[Conditional Formatting]]

> [!info] Source and scope
> Source workbook: `Calendar and dates.xlsx`. It reuses the `employees` table and the sorting and filtering sheets from [[Lec_01-Sorting, Filters & Database Functions]], so those are not repeated here. What is **new**: the `Calendar` sheet (a self-building monthly calendar), the `Israel cities` list, and four new `employees` columns: **K** (birthday message), **L** (promotion date), **M** (time until promotion) and **N** (city).
> The nested `IF`/`AND` logic is taught properly in [[Lec_02-IF Statements & Logical Functions]]; date functions continue in [[Lec_04-Date Functions, Named Ranges & Data Validation]] and [[Lec_05-Time Functions & Protecting Cells]].

## 1. Dates are just numbers

Excel stores a [[Date Serial Number]]: the count of days since an origin date (30 December 1899 in practice). Formatting is only a costume. That is why you can add 1 to a date to get tomorrow, subtract two dates to get a gap in days, and compare dates with `>` and `<`.

The workbook shows this directly. After `=DATE(2024,3,1)` the cell holds `45352`; after `=EOMONTH(...)` it holds `45382`. Both are the same kind of number, formatted as dates.

> [!tip] Why it matters
> If a "date" column is left-aligned or sorts alphabetically, it is text, not a real date, and none of the functions below will work on it. Real dates right-align and sort chronologically.

## 2. The date functions used in this workbook

| Function | What it returns | Example from the workbook |
| --- | --- | --- |
| [[SEQUENCE]] | A spilled list of numbers | `=SEQUENCE(12,,1,1)` gives 1 to 12 |
| [[DATE]] | A real date from year, month, day | `=DATE(L2,K2,1)` |
| [[WEEKDAY]] | The day of the week as a number | `=WEEKDAY(M2,1)` |
| [[EOMONTH]] | The last day of a month, shifted by n months | `=EOMONTH(M2,0)` |
| [[TODAY]] | Today's date (recalculates every time the file opens) | `=TODAY()` |
| `MONTH`, `YEAR` | Pull one part out of a date | `MONTH(F2)` |
| [[DATEDIF]] | Whole years, months or days between two dates | `DATEDIF(TODAY(),L2,"y")` |

### WEEKDAY and its return type

`WEEKDAY(date, return_type)` numbers the days. The second argument chooses the scheme:

| Return type | Numbering | Used in |
| --- | --- | --- |
| `1` (default) | Sunday = 1 ... Saturday = 7 | `Calendar` sheet |
| `2` | Monday = 1 ... Sunday = 7 | Promotion rule in column L |

Same function, different scheme, so always state the second argument. In the calendar the class labels row 5 as `1` to `7` and row 6 as Sunday to Saturday, matching type 1.

### EOMONTH

`EOMONTH(start_date, months)` returns the last day of the month that is `months` away from `start_date`. With `0` it is the end of the same month, with `2` it is the end of the month two months later. It is the clean way to get "end of month" without knowing whether the month has 28, 29, 30 or 31 days.

### DATEDIF (hidden function)

`DATEDIF(start, end, unit)` does not appear in the function wizard but works. Units used here: `"y"` complete years, `"md"` days left over after removing complete months and years. The start date must be earlier than the end date, otherwise `#NUM!`. That is exactly why the workbook guards it with `IF(L2>TODAY(), ... )`.

> [!warning] Common mistakes
> - Swapping start and end in `DATEDIF` (error `#NUM!`).
> - Using `"md"` alone and expecting total days. It gives only the leftover days within the month. For total days, subtract the dates.
> - Forgetting that `TODAY()` is volatile: results change every day, and a saved file shows values from the last time it was calculated.

## 3. The self-building calendar (`Calendar` sheet)

Goal: pick a month and a year from drop-downs and get a calendar grid for that month.

### 3.1 The lists and drop-downs

| Cell | Formula | Result |
| --- | --- | --- |
| `B2` | `=SEQUENCE(12,,1,1)` | Spills months 1 to 12 down `B2:B13` |
| `C2` | `=SEQUENCE(31,1,2020,1)` | Spills years 2020 to 2050 down `C2:C32` |

`SEQUENCE(rows, columns, start, step)`: the class used 12 rows starting at 1 and 31 rows starting at 2020, both stepping by 1. In the first formula the `columns` argument is left empty, which means 1.

> [!tip] Why SEQUENCE
> It replaces typing 1 to 12 by hand or dragging a fill handle. Change one argument and the whole list updates. It is a dynamic array: one formula in the top cell fills the cells below (the spill range).

The two drop-downs are [[Data Validation]] lists (type `list`):

| Cell | Allowed values | Source |
| --- | --- | --- |
| `K2` (Month) | 1 to 12 | `$B$2:$B$13` |
| `L2` (Year) | 2020 to 2050 | `$C$2:$C$32` |

The class chose March 2024 (`K2` = 3, `L2` = 2024).

### 3.2 Three helper cells

| Cell | Label | Formula | Value (March 2024) |
| --- | --- | --- | --- |
| `M2` | 1st of chosen date | `=DATE(L2,K2,1)` | 1 March 2024 (45352) |
| `N2` | day of week of 1st | `=WEEKDAY(M2,1)` | 6 (Friday) |
| `O2` | end of month | `=EOMONTH(M2,0)` | 31 March 2024 (45382) |

Everything in the grid depends on just two facts: **which weekday the 1st falls on** (`N2`) and **how many days the month has** (`O2`).

### 3.3 The grid: filling days into the right columns

Header rows: `K5:Q5` hold 1 to 7 (weekday numbers) and `K6:Q6` hold Sunday to Saturday. The day cells are `K7:Q12`, six rows of seven columns (six weeks is the most any month can span).

Three formulas build it.

**Top-left cell** (`K7`, Sunday column of the first week):

```excel
=IF(N2=K5,1,"")
```

If the 1st is a Sunday (`N2` equals the Sunday number in `K5`), start with 1, otherwise leave blank.

**Other cells in the first week** (`L7` to `Q7`), filled across:

```excel
=IF(K7="",IF(L5=$N$2,1,""),K7+1)
```

Read it as: if the cell to my left is blank, then either start counting here (return 1 if my column's weekday number equals the 1st's weekday, `$N$2`) or stay blank. If the cell to my left already has a number, add 1 to it.

**First cell of later weeks** (`K8`, `K9` ...), filled down:

```excel
=IF(Q7="",IF(K6=$N$2,1,""),Q7+1)
```

Take the last day of the previous week (end of the row above, column Q) and add 1. The `Q7=""` test is a safety net for a month that has not started yet.

The same left-neighbour-plus-1 formula as `L7` is then copied across all remaining cells (`L8:Q12`, `L9:Q9`, and so on).

> [!example] March 2024 result
> The 1st is a Friday (`N2` = 6), so `K7` to `O7` stay blank and the first week starts in `P7`.
>
> | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
> | --- | --- | --- | --- | --- | --- | --- |
> | | | | | | 1 | 2 |
> | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
> | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
> | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
> | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
> | 31 | | | | | | |
>
> This table is the correct March 2024 calendar; the row of 31 is what the grid shows once the overflow is hidden (next section).

### 3.4 Hiding the overflow days with conditional formatting

The formulas keep counting after the month ends. In the saved workbook the last row reads 31, 32, 33 ... 37. The class hides these with [[Conditional Formatting]] on `K7:Q12`:

```excel
=K7>DAY($O$2)
```

The format applied is a **white font**, so any day number greater than the last day of the month (`DAY($O$2)` = 31 for March) vanishes into the background. `$O$2` is locked with [[Absolute Reference]] anchors because the rule is evaluated against every cell in the range, while `K7` stays relative so it shifts per cell.

> [!warning] Hidden is not deleted
> The overflow numbers are still in the cells, only coloured white. Copying the grid elsewhere will bring them back. A cleaner version would wrap the formula in an extra `IF(...>DAY($O$2),"",...)`.

> [!note] Reconstructed from the workbook
> The workbook contains no written explanation of the calendar. The step-by-step reading above comes from the formulas, the drop-down rules and the conditional-format rule found in the file. I also noticed that in `K8` the inner test `K6=$N$2` points at a day-name label rather than a weekday number, but it is never reached because `Q7` is never blank, so the result is unaffected.

## 4. New employee columns (K to N)

The `employees` sheet keeps the ten columns from [[Lec_01-Sorting, Filters & Database Functions]] (ID, names, branch, department, birth date, hire date, seniority, position, salary) and adds four.

| Column | Header | What it holds |
| --- | --- | --- |
| K | Happy Bday | A message for employees born this month |
| L | Promotion date | Date the employee gets promoted |
| M | time until promotion | Text such as "0 years and 9 days" or "Already promoted" |
| N | City | The employee's city (values typed in, drawn from `Israel cities`) |

### 4.1 Column K: birthday message

The written task (cell `K204`): *if employee was born this month, write happy bday.*

```excel
=IF(MONTH(F2)=MONTH(TODAY()),"Happy Birthday man","")
```

- `MONTH(F2)` is the birth month; `MONTH(TODAY())` is the current month.
- Equal means a birthday month, so the message appears; otherwise `""` leaves the cell empty.
- Birth **year** is ignored on purpose: only the month matters, and that is why we compare months and not whole dates.

> [!warning] It tests the month, not the day
> Everyone born in the current month gets the message for the whole month, including people whose birthday has already passed. Compare `DAY` too if you need an exact day.

In the saved file the message appears for December births (for example employee in row 39, born 23 December 1984), which shows the file was last calculated in December 2024.

### 4.2 Column L: the promotion rule

The written task (cells `L204` and `L205`), cleaned up:

> [!info] Promotion rule
> 1. If the employee **started on a Monday and in March**, they are promoted on **1 July, two years after the hire year**.
> 2. **Everyone else** is promoted on the **end of the month that falls two months after their hire month**, in 2024.

The formula in `L2`:

```excel
=IF(AND(WEEKDAY(G2,2)=1,MONTH(G2)=3),DATE(YEAR(G2)+2,7,1),EOMONTH(DATE(2024,MONTH(G2)+2,1),0))
```

The class wrote its own breakdown beside it (cells `L206` to `L209`). Here it is, expanded.

| Piece | What it does |
| --- | --- |
| `WEEKDAY(G2,2)=1` | True when the hire date is a Monday (type 2 makes Monday = 1) |
| `MONTH(G2)=3` | True when the hire month is March |
| `AND(..., ...)` | Both conditions must hold at once |
| `DATE(YEAR(G2)+2,7,1)` | 1 July, two years after the hire year (the special-case result) |
| `DATE(2024,MONTH(G2)+2,1)` | The 1st of the month two months after the hire month, placed in 2024 |
| `EOMONTH(...,0)` | Moves that 1st to the last day of its month |

Putting it together: `IF(test, value_if_true, value_if_false)`, where the test is the `AND`, the true result is the July date, and the false result is the end-of-month date.

> [!tip] Month overflow is a feature
> For a hire month of 11 or 12, `MONTH(G2)+2` becomes 13 or 14. `DATE` does not error: it rolls over into the next year, so `DATE(2024,13,1)` is 1 January 2025 and `DATE(2024,14,1)` is 1 February 2025. `EOMONTH` then returns 31 January 2025 and 28 February 2025. The saved results confirm this (serials 45688 and 45716).

Worked rows, copied from the workbook (hire dates are real data; serial numbers converted to dates):

| Row | Employee ID | Hire date | Weekday | Promotion date (L) |
| --- | --- | --- | --- | --- |
| 2 | 10001 | 18 Oct 2002 | Friday | 31 Dec 2024 |
| 3 | 10002 | 17 Oct 2008 | Friday | 31 Dec 2024 |
| 4 | 10003 | 18 Oct 2011 | Tuesday | 31 Dec 2024 |
| 5 | 10004 | 5 Jan 2005 | Wednesday | 31 Mar 2024 |
| 7 | 10006 | 27 May 2004 | Thursday | 31 Jul 2024 |
| 108 | 10107 | 21 Mar 1994 | Monday | 1 Jul 1996 |
| 168 | 10167 | 31 Mar 2008 | Monday | 1 Jul 2010 |

Rows 108 and 168 are the only two in the 200 employees that satisfy "Monday and March", and they show the special rule: the date is 1 July two years after hire (so 1996 and 2010, long in the past). All 200 stored promotion dates match this rule when recomputed.

> [!warning] Things to watch
> - `2024` is typed straight into the formula. The rule says "in 2024", so this is intended, but it is a hard-coded value: change the target year and you must edit every formula (a cell reference would be better).
> - The two branches have different logic: the first uses the hire **year**, the second ignores it and always uses 2024. That is why most promotion dates fall in 2024 regardless of when the person was hired.
> - `WEEKDAY(G2,2)=1` needs the 2. With the default type 1, Monday is 2 and the rule would silently pick Sundays.

### 4.3 Column M: time until promotion

```excel
=IF(L2>TODAY(),DATEDIF(TODAY(),L2,"y")&" years and "&DATEDIF(TODAY(),L2,"md")&" days","Already promoted")
```

How it works:

1. `L2>TODAY()` checks the promotion date is still in the future.
2. If so, build a text string with `&`: complete years from today to the promotion date, the words "years and", leftover days, the word "days".
3. If not, show "Already promoted". This is also the guard that stops `DATEDIF` getting a start date later than its end date.

Values stored in the file include "0 years and 9 days" (promotion on 31 Dec 2024, so the file was last recalculated on 22 Dec 2024), "0 years and 6 days" (promotion on 28 Feb 2025) and "Already promoted".

> [!warning] Common mistake
> The output is **text**, not a number. You cannot sum it, sort it by time left, or filter "less than 30 days". If you need to do that, keep a numeric helper column (`=L2-TODAY()`) and build the text only for display.

> [!note] Reconstructed from the workbook
> The class left no written note beside column M (the written tasks sit beside K and L). The explanation above is read from the formula and its stored results. Note also that the `y` and `md` parts sit side by side: `"md"` can be confusing when the gap crosses a month end, so treat the output as a readable estimate, not an exact count of days.

### 4.4 Column N and the `Israel cities` sheet

The `Israel cities` sheet is a single column headed `Cities` with 43 city names (Afula, Akko (Acre), Arad ... Yehud), carrying an AutoFilter. Column N of `employees` holds a city for the first 15 employees (N2 to N16), for example Rishon LeZion, Herzliya, Jerusalem, Akko (Acre), Ashdod.

> [!note] Reconstructed from the workbook
> The file has no formula or drop-down rule on column N, only the typed values, so the cities are plain data. The list on `Israel cities` is clearly the master list they were chosen from (a natural fit for a [[Data Validation]] drop-down, which is covered in [[Lec_04-Date Functions, Named Ranges & Data Validation]]). Only 15 of 200 rows are filled.

## 5. Other formatting in the employees sheet

These come over from the earlier sheet and are worth recognising:

| Range | Rule |
| --- | --- |
| `A2:J201` | Highlight the whole row when department equals the cell `E204` (`=$E2=$E$204`), where `E204` reads "computing" |
| `H2:H201` | Seniority greater than 24 is highlighted (cell `H204` "sen over 25") |
| `J2:J201` | Salary banding: under 5000, between 5000 and 10000, over 10000, each a different colour |

The department rule uses a mixed reference: column locked (`$E`), row free, so each row compares **its own** department to the one fixed cell `$E$204`.

## 6. Summary

- Dates are serial numbers, so arithmetic and comparison work on them; always use `DATE`, not typed text.
- `SEQUENCE` builds number lists, `DATE` assembles a date, `WEEKDAY` finds the weekday (mind the return type), `EOMONTH` finds month end, `TODAY` gives the current date, `DATEDIF` measures gaps.
- The calendar needs only two facts, the weekday of the 1st and the last day of the month. Each cell is either blank, the starting 1, or its left neighbour plus 1; conditional formatting hides days past month end.
- Promotion rule: Monday-and-March hires get 1 July two years after the hire year; everyone else gets the end of the month two months after the hire month, in 2024. Month numbers over 12 roll into the next year.
- Guard date calculations with `IF` (for example, only run `DATEDIF` when the end date is in the future).

## Related notes

- [[Excel for Data Analysis]]
- [[Lec_01-Sorting, Filters & Database Functions]]
- [[Lec_02-IF Statements & Logical Functions]]
- [[Lec_04-Date Functions, Named Ranges & Data Validation]]
- [[Lec_05-Time Functions & Protecting Cells]]
