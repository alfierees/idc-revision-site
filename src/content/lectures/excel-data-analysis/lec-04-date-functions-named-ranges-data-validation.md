---
title: "Lec_04-Date Functions, Named Ranges & Data Validation"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 4
tags:
  - excel-data-analysis
  - excel
  - date-functions
  - named-range
  - data-validation
  - formulatext
  - edate
  - eomonth
  - datedif
  - hlookup
subject: excel-data-analysis
in_scope: true
---

# Date Functions, Named Ranges & Data Validation

> Part of: [[Excel for Data Analysis]]
> Key concepts: [[Date Serial Number]], [[DATE]] and [[DATEVALUE]], [[DAY]], [[MONTH]] and [[YEAR]], [[TODAY]] and [[NOW]], [[WEEKDAY]] and [[WEEKNUM]], [[EDATE]], [[EOMONTH]], [[DATEDIF]], [[FORMULATEXT]], [[Named Range]], [[Data Validation]], [[HLOOKUP]]

> [!note] Source format
> The source is a class workbook, not a slide deck: `Date Functions Names and Data Validation.xlsx`. It has three sheets: **Date Functions** (visible, the lesson itself) and two **hidden** example sheets, **MonthlyReport Example** and **Month Calendar Example**, which apply the functions to real tasks. Everything below is read from the cells, formulas, defined names and validation rules in the file. Where I explain something the workbook only shows, it is marked as reconstructed.

## 1. How Excel stores dates

Excel stores a date as a **serial number**: the count of days since 30 December 1899 (so day 1 is 1 January 1900). A time of day is the **fraction** of a day. The date is only *displayed* as a date because of the cell's number format.

| Cell content | Stored value | Meaning |
| --- | --- | --- |
| 15 December 2024 | 45641 | days since the origin |
| 29 April 2024 | 45411 | days since the origin |
| `=NOW()` at the time of saving | 45641.4955... | 15 Dec 2024 plus about 11:54 |

This is why you can **subtract two dates** (`=E7-E5`) and get a number of days, and why `+1` means "the next day". See [[Date Serial Number]].

> [!tip] Why it matters
> If a date cell shows `45641`, nothing is broken: it just has a General number format. Change the format to Date. If a "date" is left-aligned and will not calculate, it is probably text: convert it with `DATEVALUE` (section 2).

## 2. The functions on the Date Functions sheet

Column B shows the formula as text (using [[FORMULATEXT]]), column E shows the live result. The anchor date is in `E5`, so almost every row refers back to it.

> [!info] FORMULATEXT
> Each label in column B is itself a formula: `B5` holds `=FORMULATEXT(E5)`, which prints the formula that lives in `E5`. This is how the sheet "documents itself": the label can never drift out of sync with the formula it describes. Useful for teaching and for auditing a sheet.

### Building and reading dates

| Cell | Formula | Result | What it does |
| --- | --- | --- | --- |
| `E5` | `=DATE(2024,12,15)` | 45641 (15/12/2024) | builds a date from year, month, day |
| `E7` | `=DATEVALUE("29/4/24")` | 45411 (29/04/2024) | turns a date written as **text** into a real date |
| `E9` | `=DAY(E5)` | 15 | day of the month |
| `E11` | `=MONTH(E5)` | 12 | month number |
| `E13` | `=YEAR(E5)` | 2024 | year |

- `DATE(year,month,day)` is the safe way to create a date inside a formula. It also **rolls over** sensibly: `DATE(2024,13,1)` is 1 January 2025. This trick is used by the report in section 6.
- `DATEVALUE` depends on how Excel reads the text. `"29/4/24"` is read as day/month/year here because the class machine uses a day-first locale. On a month-first locale the same text would fail. See [[DATE]] and [[DATEVALUE]].
- `DAY`, `MONTH`, `YEAR` pull the parts back out. See [[DAY]], [[MONTH]] and [[YEAR]].

### Today, now and the calendar position

| Cell | Formula | Result | Note |
| --- | --- | --- | --- |
| `E15` | `=TODAY()` | 45641 | today's date, **recalculates every time** the workbook calculates |
| `E17` | `=NOW()` | 45641.4955... | date **and** time |
| `E19` | `=WEEKDAY(E5)` | 1 | `F19` says "1= Sunday" |
| `E21` | `=WEEKNUM(E5)` | 51 | week number in the year |

`TODAY()` and `NOW()` take no arguments, but the brackets are required. Because they are volatile, a report that uses them changes whenever it is reopened.

`WEEKDAY` returns a **number**, not a name. By default 1 is Sunday and 7 is Saturday (15 December 2024 was a Sunday, hence 1). To show the name you look the number up in a small table: that is exactly what the named range `WeekDays` and the `HLOOKUP` example do (sections 3 and 7). See [[WEEKDAY]] and [[WEEKNUM]].

> [!note] Reconstructed from the workbook
> `WEEKDAY` also accepts a second argument (the return type), for example `WEEKDAY(E5,2)` makes Monday 1. The workbook only uses the default, so treat the optional argument as an extra, not as something shown in class.

### Moving by months

| Cell | Formula | Result | Class comment (`F`) |
| --- | --- | --- | --- |
| `E23` | `=EDATE(E5,2)` | 45703 (15/02/2025) | "allows us to add months to a date" |
| `E25` | `=EOMONTH(E5,-1)+1` | 45627 (01/12/2024) | "gives us end of month" |

- **[[EDATE]]** shifts a date by whole months and keeps the same day number (15 Dec plus 2 months is 15 Feb). A negative number goes backwards. It is better than adding 60 days, because months have different lengths.
- **[[EOMONTH]]** returns the **last day** of the month, offset by the number of months you give. `EOMONTH(date,0)` is the end of the same month; `EOMONTH(date,-1)` is the end of the **previous** month.

> [!warning] The comment in F25 does not match the formula
> The label says "gives us end of month", but `=EOMONTH(E5,-1)+1` actually gives the **first day of the month** (01/12/2024). Step by step: `EOMONTH(E5,-1)` is 30 November 2024, and `+1` moves to 1 December. The comment describes `EOMONTH` alone, not the whole formula. Remember the trick: **end of last month plus one day equals the first of this month**.

```excel
=EOMONTH(E5,-1)+1     first day of the month of E5
=EOMONTH(E5,0)        last day of the month of E5
```

### Distance between two dates

All of these compare `E7` (29/04/2024) with `E5` (15/12/2024):

| Cell | Formula | Result | Comment |
| --- | --- | --- | --- |
| `E27` | `=E7-E5` | -230 | plain subtraction: negative because the order is reversed |
| `E29` | `=YEAR(E7)-YEAR(E5)` | 0 | only compares the year parts: crude |
| `E31` | `=(E7-E5)/365` | -0.630... | "distance in years" (ignores leap years) |
| `E33` | `=DATEDIF(E7,E5,"d")` | 230 | whole days |
| `E35` | `=DATEDIF(E7,E5,"m")` | 7 | **complete** months |
| `E37` | `=DATEDIF(E7,E5,"y")` | 0 | **complete** years |

- Subtracting gives days, and the **sign depends on the order**. `DATEDIF` needs the **earlier date first**; with the later date first it returns an error.
- Dividing by 365 is only approximate (a leap year has 366 days).
- `YEAR(a)-YEAR(b)` can be wrong: 31 December 2023 to 1 January 2024 is one day but the year difference is 1.
- **[[DATEDIF]]** counts only **complete** units. From 29 April to 15 December there are 7 full months (the 8th would need 29 December), and 0 full years. The unit is a text code: `"d"` days, `"m"` months, `"y"` years.

> [!note] Reconstructed from the workbook
> `DATEDIF` is an old compatibility function that Excel does not list in the function-insert dialog, so you must type it yourself. Other unit codes exist (`"ym"`, `"md"`, `"yd"`) but the class sheet only uses `"d"`, `"m"` and `"y"`.

> [!warning] Common mistakes
> - Typing a date as text (`"29/4/24"`) and then trying to subtract it: wrap it in `DATEVALUE`, or enter it as a real date.
> - Reading `WEEKDAY` as a day name.
> - Reversing the arguments of `DATEDIF`.
> - Forgetting that `TODAY()` changes: freeze a date by typing it or by using `DATE`.

## 3. Named cells and ranges

The right-hand block of the sheet (`H3`) is titled **Name a Cell**. It gives three steps:

1. Select the specific cell you want to name.
2. Click on the **Name Box** (the box at the upper left, next to the formula bar, which normally shows the cell address).
3. Write the name, and that's it.

The same idea works for a **range**. The workbook defines exactly two names (read from the file's defined names):

| Name | Refers to | Contents |
| --- | --- | --- |
| `MyDate` | `'Date Functions'!$L$9` | a single cell: 45014 (29/03/2023) |
| `WeekDays` | `'Date Functions'!$H$15:$I$21` | the 7 by 2 table of day numbers 1 to 7 and day names Sunday to Saturday |

A [[Named Range]] is a label for a cell or block. Names are **absolute** by nature (they always point to the same cells), so there is no copying issue.

Why use them:

- **Readability**: `=VLOOKUP(E19,WeekDays,2,0)` reads better than `=VLOOKUP(E19,$H$15:$I$21,2,0)`.
- **Safety**: the reference is defined once. If the table moves, the name follows it.
- **Navigation**: choosing a name from the Name Box jumps straight to that range.

> [!example] Using the names
> With the names above, a formula that turns the weekday number of `E5` into a day name is
>
> ```excel
> =VLOOKUP(WEEKDAY(E5),WeekDays,2,FALSE)
> ```
>
> which returns `Sunday`. This formula is **illustrative**: the class sheet defines the name but does not use it in a visible formula.

> [!note] Reconstructed from the workbook
> Naming rules the sheet does not state but Excel enforces: no spaces, the name must start with a letter or underscore, and it cannot look like a cell address (so `A1` is not allowed). `MyDate` and `WeekDays` follow these rules by using CamelCase instead of spaces.

## 4. Data validation

The **Data Validation** block (`O3`) holds four input cells in column `P`, each with a rule. The rules below are read from the validation settings in the file; the text in column `O` is the class's own description of each rule.

| Cell | Label in sheet | Rule type | Condition | Current value |
| --- | --- | --- | --- | --- |
| `P5` | Year: Between 2017-2025 | Whole number | between 2017 and 2025 | 2023 |
| `P8` | Month: Between 1-12 | Whole number | between 1 and 12 | 7 |
| `P11` | Yes/No | List | `Yes,No` (a drop-down) | No |
| `P13` | Only Dates | Date | between 01/01/1960 and 31/12/2040 | 29/03/2019 |

All four rules have **input messages and error alerts switched on** (`showInputMessage`, `showErrorMessage`) and **Ignore blank** enabled.

How [[Data Validation]] works (Data tab, Data Validation):

- **Settings** tab: choose what is allowed (Whole number, Decimal, List, Date, Time, Text length, Custom).
- **Input Message**: a tooltip that appears when the cell is selected.
- **Error Alert**: what happens on an invalid entry (Stop, Warning or Information).
- **List** rules show a drop-down arrow. The items can be typed in directly with commas, as in `Yes,No`, or taken from a range (often a named range!).
- A date rule stores its limits as serial numbers (`21916` and `51501` here); the dialog shows them as dates.

> [!warning] Limits of validation
> Validation only checks what is **typed**. It does not stop someone **pasting** a value over the cell, and it does not check cells that already contain bad data until you use Circle Invalid Data. Use it as a guard on input cells, not as security.

> [!tip] Natural pairing
> The validated Year (2017 to 2025) and Month (1 to 12) cells are exactly the inputs a report needs. The Month Calendar sheet (section 7) uses a year cell and a month cell as its inputs; its own cells have no validation in the file, but adding these rules there would stop invalid months such as 13.

## 5. Quick reference

| Task | Formula |
| --- | --- |
| Build a date | `=DATE(2024,12,15)` |
| Text to date | `=DATEVALUE("29/4/24")` |
| Today / now | `=TODAY()`, `=NOW()` |
| Weekday number (1 = Sunday) | `=WEEKDAY(E5)` |
| Add months | `=EDATE(E5,2)` |
| Last day of month | `=EOMONTH(E5,0)` |
| First day of month | `=EOMONTH(E5,-1)+1` |
| Complete months between | `=DATEDIF(E7,E5,"m")` |
| Show a formula as text | `=FORMULATEXT(E5)` |

## 6. Worked example: the monthly report (hidden sheet)

The hidden sheet **MonthlyReport Example** is a salary report for one employee. Header fields: ID, name, gender, birth date, start-work date, job description, email, phones; then a table of work hours for the month.

Key cells:

| Item | Cell | Value / formula |
| --- | --- | --- |
| Employee | `C4` | Avi Cohen (ID 52543, Head of Service) |
| Month | `B8` | 11 |
| Hourly wage | `C8` | 44.14 |
| Overtime multiplier | `H8` | 1.5 |
| Total regular hours | `G11` | `=SUM(G15:I47)` |
| Total overtime hours | `J11` | `=SUM(J15:L47)` |
| Total hours | `E8` | `=G11+J11` (181.43) |
| Total salary | `L8` | `=G11*C8+J11*C8*H8` (8440.82) |

The **day table** has one row per calendar day:

```excel
B15: =DATE(YEAR(NOW()),B8,1)          first day of the chosen month
B16: =B15+1                           each next row adds one day
C15: =WEEKDAY(B15)                    day-of-week number
D15: =VLOOKUP(C15,$V$2:$W$8,2,0)      day name from the lookup table
```

The lookup table in `V2:W8` is the same 1 to 7 / Sunday to Saturday list as the `WeekDays` range, so `VLOOKUP` converts the weekday number to a name (the same job as the `WeekDays` named range). Starting hours and stop hours (`E`, `F`) are entered as **fractions of a day** (0.32 is about 07:41), which is why the hours formulas multiply by 24:

```excel
G15: =IF((F15-E15)*24>8,8,(F15-E15)*24)           regular hours, capped at 8
J15: =IF((F15-E15)*24>8,(F15-E15)*24-8,0)         anything above 8 is overtime
```

> [!example] Row 15 (Friday, 1 Nov 2024)
> Start 0.32, stop 0.6972... Duration = (0.6972 - 0.32) x 24 = 9.05 hours. Over 8, so regular hours = 8 and overtime = 1.05 hours.

The salary pays regular hours at the base wage and overtime at 1.5 times the wage: `=G11*C8+J11*C8*H8`.

Conditional formatting in the file highlights **weekend rows** (`OR($C15=6,$C15=7)`: Friday and Saturday, the Israeli weekend, because 6 is Friday and 7 is Saturday). A second rule (`AND(DAY($B39)>=1,DAY($B39)<25)`) formats late-month rows in the range `B39:L45`.

> [!note] Reconstructed from the workbook
> The purpose of the second formatting rule is not described in the file. A plausible reading is that it greys out days that fall into the next month's spill-over rows; treat that as a guess.

> [!warning] Things to watch in this report
> - `YEAR(NOW())` means the report silently changes year when reopened next year. A validated Year input cell would be safer.
> - `B15` shows 45597 (1 Nov 2024); the table has 31 date rows, so for a 30-day month the last row spills into the next month (this sheet shows row 45 as 1 December). Rows with no start and stop time give 0 hours, so the totals are not damaged.

## 7. Worked example: the month calendar (hidden sheet)

The hidden sheet **Month Calendar Example** draws a calendar grid for any month from two inputs. Inputs: month in `F3` (2) and year in `F4` (1962).

| Step | Cell | Formula | Result |
| --- | --- | --- | --- |
| First day of the month | `E6` | `=DATE(F4,F3,1)` | 01/02/1962 |
| Its weekday number | `F6` | `=WEEKDAY(E6)` | 5 |
| Its weekday name | `G6` | `=HLOOKUP(F6,$E$11:$K$12,2,0)` | Thursday |
| Last day of the month | `E7` | `=EOMONTH(E6,0)` | 28/02/1962 |

The lookup table in `E11:K12` runs **horizontally**: numbers 1 to 7 in row 11 and day names Sunday to Saturday in row 12. That is why the lookup is **[[HLOOKUP]]** (look across a row) rather than `VLOOKUP`. The `0` at the end means exact match.

The grid (`E13:K21`, headed by the day names) is filled by two kinds of formula.

**First row of the month (row 13).** It places the number 1 under the right weekday and counts up from there:

```excel
E13: =IF(E12=$G$6,1,0)
F13: =IF(E13=0,IF(F12=$G$6,1,0),E13+1)
```

Read `F13` like this: if the cell to the left is still 0 (we have not started the month), put 1 if **this** column's day name equals the month's first weekday, else 0. If the left cell is already counting, add 1. In February 1962 the 1st is a Thursday, so the row reads 0, 0, 0, 0, 1, 2, 3.

**Later rows (15, 17, 19, 21).** They just carry on counting:

```excel
E15: =K13+1        the first cell continues from the end of the previous week
F15: =E15+1        every other cell adds one to its left neighbour
```

**Hiding the overflow.** The grid always has 5 weeks of numbers, so it would show 29, 30, 31 in a short month, and the 0s before the 1st. Conditional formatting with the rule

```excel
=OR(E13<1,E13>DAY($E$7))
```

formats those cells (presumably to hide them) when the number is below 1 (before the month starts) or above the last day of the month (`DAY($E$7)`, which is why `E7` uses `EOMONTH`). February 1962 ends on 28, so 29 to 31 would be hidden.

> [!warning] Caveats
> - The grid has only five week rows (`E13` to `K21`). A month that starts late in the week (for example a 31-day month starting on Friday or Saturday) needs six rows to show every date, so the grid cannot display it fully.
> - The cached values in the file show every cell counting up to 31 (rows 17 to 21 read 11 to 31), so the grid itself does not stop at 28: the conditional format is what must hide 29 to 31 in February.

> [!note] Reconstructed from the workbook
> The file stores the rule but not its format (hidden text versus a white font). I describe it as "hiding" because the logic only makes sense that way; the exact format is not read.

## Summary

- Dates are **serial numbers**; formatting makes them look like dates, and you can add and subtract them.
- `DATE`, `DATEVALUE`, `DAY`, `MONTH`, `YEAR` build and split dates; `TODAY` and `NOW` are volatile.
- `WEEKDAY` gives a number (1 = Sunday by default), `WEEKNUM` the week of the year.
- `EDATE` moves by whole months; `EOMONTH` finds month ends, and `EOMONTH(date,-1)+1` is the **first** of the month (the class comment calls it "end of month", which is inaccurate).
- `DATEDIF(earlier,later,"d"/"m"/"y")` counts complete days, months or years; subtraction and `/365` are cruder.
- `FORMULATEXT` displays another cell's formula.
- A **Named Range** is set in the Name Box (`MyDate` for one cell, `WeekDays` for a table).
- **Data Validation** limits input: whole number between limits (year 2017 to 2025, month 1 to 12), a Yes/No list, and a date range.
- The monthly report and month calendar combine `DATE`, `WEEKDAY`, `VLOOKUP`/`HLOOKUP`, `EOMONTH`, `IF` and conditional formatting.

## Related notes

- [[Excel for Data Analysis]]
- [[Lec_03-Calendars & Date Calculations]]: more date and calendar calculations
- [[Lec_02-IF Statements & Logical Functions]]: the `IF` logic used in the report and calendar
- [[Lec_05-Time Functions & Protecting Cells]]: time arithmetic, which the report's hours calculation previews
- [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]]: modern alternatives to `VLOOKUP` and `HLOOKUP`
