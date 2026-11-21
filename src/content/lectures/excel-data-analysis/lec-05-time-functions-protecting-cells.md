---
title: "Lec 05 - Time Functions & Protecting Cells"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 5
source: "Class files/Time Functions and Protect Cells.xlsx (sheets: Time Functions, Time Sheet)"
tags:
  - excel-data-analysis
  - time-functions
  - time-formats
  - sheet-protection
  - timesheet
  - formulatext
subject: excel-data-analysis
in_scope: true
---

# Lec 05 - Time Functions & Protecting Cells

> Part of: [[Excel for Data Analysis]]
> Key concepts: [[Time as a Fraction of a Day]], [[TIME]], [[TIMEVALUE]], [[HOUR]], [[MINUTE]], [[SECOND]], [[FORMULATEXT]], [[Time Format]], [[Elapsed Time Format]], [[Sheet Protection]], [[Locked and Unlocked Cells]], [[Timesheet]]

The class file is a two-sheet workbook. **Time Functions** is a reference sheet: a column of formulas, a column of results, and a block of instructions on protecting cells. **Time Sheet** is a worked application: a monthly attendance sheet that turns start and stop times into regular hours, overtime and a salary figure, with only a few cells left open for typing.

> [!info] Workbook map
> | Sheet | Purpose | New ideas |
> | --- | --- | --- |
> | Time Functions | Demonstrates each time function next to its own formula text | [[TIME]], [[TIMEVALUE]], [[HOUR]], [[MINUTE]], [[SECOND]], [[FORMULATEXT]], time number formats, [[Sheet Protection]] |
> | Time Sheet | A monthly timesheet for one employee | Time arithmetic, hours versus days, overtime logic, protected input cells, calendar built from one date |

Dates are covered in [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]]. Conditions are in [[Lec_02-IF Statements & Logical Functions]]. This note assumes both.

---

## 1. The key idea: time is a fraction of a day

Excel stores a date as a whole number (days since a start date) and a **time as the fractional part of a day**. Midday is `0.5`, 6 am is `0.25`, a full day is `1`. A time cell is therefore an ordinary number that is only *displayed* as a clock reading.

For 09:45:22:

- seconds since midnight = 9 x 3600 + 45 x 60 + 22 = 35,122
- seconds in a day = 86,400
- 35,122 / 86,400 = `0.4065046...`

That is exactly the value the workbook shows in `E5`: `0.40650462962962958`.

> [!tip] Why this matters
> Everything else in this lecture follows from it. Subtracting two times gives a fraction of a day. To get hours, **multiply by 24**. A time format only changes how the number looks, never its value. And because a "time" is just a number, you can `SUM` it, compare it with `<=`, and use it inside `IF`.

---

## 2. The Time Functions sheet

Column B holds the formula as text (produced by `FORMULATEXT`, see section 3), column E holds the live result. These are the class examples.

| Formula in column B | Result in column E | What it shows |
| --- | --- | --- |
| `=TIME(9,45,22)` | 0.40650462962962958 (formatted h:mm AM/PM) | Builds a time from hour, minute, second |
| `=TIMEVALUE("11:15:22")` | 0.46900462962962958 | Converts a time written as text into a number |
| `=HOUR(E5)` | 9 | Hour part of the time in E5 |
| `=MINUTE(E5)` | 45 | Minute part |
| `=SECOND(E5)` | 22 | Second part |
| `=E7-E5` | 0.0625 | Difference between two times, as a fraction of a day |
| `=E15*24` | 1.5 | That difference converted to hours |

### 2.1 TIME

`=TIME(hour, minute, second)` returns the number for that clock time. Use it when the three parts live in separate cells or are typed in the formula. See [[TIME]].

### 2.2 TIMEVALUE

`=TIMEVALUE("11:15:22")` takes a time **written as text** and returns the same kind of fraction. The quote marks matter: they are what makes the argument text. Use it when times arrive as text (for example from an export) and need to become real numbers. See [[TIMEVALUE]].

> [!warning] TIME versus TIMEVALUE
> `TIME` takes three numbers. `TIMEVALUE` takes one text string. Passing text to `TIME` or three numbers to `TIMEVALUE` is a common mix-up.

### 2.3 HOUR, MINUTE, SECOND

These pull one component out of a time value. `=HOUR(E5)` gives `9`, `=MINUTE(E5)` gives `45`, `=SECOND(E5)` gives `22`. They return plain whole numbers, so their cells use the General format, not a time format. See [[HOUR]], [[MINUTE]], [[SECOND]].

### 2.4 Subtracting times and converting to hours

`=E7-E5` is 11:15:22 minus 09:45:22, which is `0.0625` of a day. That is not a readable answer, so the next row does `=E15*24` and gets `1.5` hours (0.0625 x 24 = 1.5, one and a half hours).

> [!example] Worked example from the sheet
> 0.0625 of a day = 0.0625 x 24 hours = **1.5 hours** = 1 hour 30 minutes. If you want minutes, multiply by `24*60` instead.

---

## 3. FORMULATEXT: showing the formula next to its result

Every cell in column B of the Time Functions sheet is `=FORMULATEXT(E5)`, `=FORMULATEXT(E7)` and so on. `FORMULATEXT(reference)` returns the formula in the referenced cell **as a text string**, which is how the sheet can display `=TIME(9,45,22)` as a label beside its result.

> [!tip] Why it is useful
> It makes self-documenting teaching sheets and audit sheets: the explanation can never drift out of date, because it is read from the actual formula. If the referenced cell holds a constant instead of a formula, `FORMULATEXT` returns `#N/A`. See [[FORMULATEXT]].

---

## 4. Time formats: same number, different display

The sheet's second block takes the **same** value `=TIME(9,45,22)` four times and displays it four ways. A bracket in the sheet marks the label "Different time format".

| Cell | Format code | Displayed as |
| --- | --- | --- |
| `E19` | `h:mm` (custom) | 9:45 |
| `E21` | `h:mm AM/PM` (built-in) | 9:45 AM |
| `E23` | `h:mm:ss AM/PM` (built-in) | 9:45:22 AM |
| `E25` | `h:mm:ss` (built-in) | 9:45:22 |

All four cells contain `0.40650462962962958`. Only the number format changes. To change it: select the cell, press `Ctrl+1` (Format Cells), and pick a Time category or write a Custom code. See [[Time Format]].

> [!note] Reconstructed from the workbook
> The display strings in the right-hand column are worked out from the format codes stored in the file (the built-in codes 18, 19 and 21, and the custom code `[$-1000000]h:mm;@`). The sheet itself only shows the results visually.

### 4.1 The over-24-hours trap: `[h]:mm`

`E27` is `=SUM(E19:E25)`. It adds the four equal times (the blank cells in between add nothing):

- 4 x 0.4065046... = **1.6260185...** days
- 1.6260185 x 24 = 39.02 hours

It is formatted with the custom code `[h]:mm`, so it displays **39:01**.

Square brackets around `h` mean "total elapsed hours, do not wrap at 24". With an ordinary `h:mm` the same cell would show `15:01`, because Excel would drop the whole day and show only the clock reading of the leftover 0.626 of a day.

> [!warning] The classic mistake
> You add up a week of shifts and the total looks too small. The number underneath is correct; the **format** is wrapping at midnight. Whenever a time total can exceed 24 hours (weekly or monthly hours, a project duration), use `[h]:mm` ([[Elapsed Time Format]]). The same idea exists for minutes (`[mm]`) and seconds (`[ss]`).

| Format | Meaning of 1.626 days | Use for |
| --- | --- | --- |
| `h:mm` | 15:01 (clock time, wraps every 24 h) | Time of day |
| `[h]:mm` | 39:01 (elapsed hours) | Totals and durations |
| General or `0.00` after multiplying by 24 | 39.02 | Pay calculations (decimal hours) |

---

## 5. Protecting cells

The text block at `I3` to `I11` on the Time Functions sheet is the lecturer's own instructions. In order:

1. **By default all cells are protected** (every cell is *locked*), but protection has no effect until you switch the sheet protection on.
2. To open specific cells for typing, **select those cells**, then open Format Cells (right-click, or `Ctrl+1`).
3. In the **last tab (Protection)** untick **Locked** (and optionally tick **Hidden**, which hides the formula from the formula bar).
4. Go to **Review > Protect Sheet** to switch protection on.
5. To remove it: **Review > Unprotect Sheet**.
6. A **password** can be set, but the sheet warns: **do not forget the password**, and a password is not always recommended.

> [!info] Locked and Hidden are only flags
> `Locked` and `Hidden` are properties of each cell, but they do nothing until **Protect Sheet** is on. That is why the order is "mark the exceptions first, then protect". See [[Sheet Protection]] and [[Locked and Unlocked Cells]].

> [!warning] Passwords
> If you set a password and lose it, you cannot edit the sheet. Skip the password when the goal is only to stop accidental overwrites of formulas (the usual case for a shared timesheet).

> [!note] Reconstructed from the workbook
> The saved file contains **no** active sheet protection (there is no protection element in either sheet), so you can edit it freely. The protection design is still visible: on the Time Sheet, the cells `A8`, `B8` and `D15:E45` are flagged **Unlocked**, and everything else keeps the default Locked flag. Switching on Review > Protect Sheet would therefore leave exactly the month, the year and the start and stop times editable.

---

## 6. The Time Sheet: a monthly timesheet

### 6.1 Layout

The employee header is a small record (ID 52543, Avi Cohen, Director of Service, start of work 20/10/2013). Below it is a summary row and then the month table.

Summary row (row 7 headings, row 8 values):

| Month | Year | Hourly wage | Total | Over Time bonus | Total Salary | Regular Hours |
| --- | --- | --- | --- | --- | --- | --- |
| 12 | 2024 | NIS 44.14 | 9.00 | 1.5 | NIS 419.33 | 8:00 |

Month table extract (first rows of the 31-row table):

| Date | Day Of Week | Day | Start | Stop | Regular hours | OverTime |
| --- | --- | --- | --- | --- | --- | --- |
| 01/12/2024 | 1 | Sunday | 8:00 | 17:00 | 8.00 | 1.00 |
| 02/12/2024 | 2 | Monday | blank | blank | 0.00 | blank |
| 03/12/2024 | 3 | Tuesday | blank | blank | 0.00 | blank |

Only the first day has start and stop times entered. The other 30 rows are empty and evaluate to 0 regular hours.

### 6.2 Where the dates come from

The user types only a **month** and a **year**, then everything else is formula-driven.

```excel
A15:  =DATE(B8,A8,1)
A16:  =A15+1          (copied down to A45)
B15:  =WEEKDAY(A15,1)
C15:  =A15            (formatted dddd, so it shows the day name)
```

- `DATE(B8,A8,1)` builds the first of the chosen month (note the argument order: year, month, day).
- Each later date is the previous date plus 1, because a date is a whole number.
- `WEEKDAY(date, 1)` returns 1 for Sunday through 7 for Saturday.
- Column C repeats the date but with the custom format `dddd`: the cell holds a date serial, and the format shows only the weekday name. Same value, different display, exactly as in section 4. See [[WEEKDAY]] and [[Lec_03-Calendars & Date Calculations]].

The month and year inputs are drop-downs, built with [[Data Validation]] (see [[Lec_04-Date Functions, Named Ranges & Data Validation]]):

| Cell | Rule | Source list |
| --- | --- | --- |
| `A8` (month) | List | `$P$3:$P$14`, the numbers 1 to 12 |
| `B8` (year) | List | `$Q$3:$Q$33`, the years 2020 to 2050 |

The helper lists in columns P and Q are themselves generated with the dynamic-array function `SEQUENCE`:

```excel
P3:  =SEQUENCE(12,1,1,1)      12 rows, 1 column, start at 1, step 1
Q3:  =SEQUENCE(31,1,2020,1)   31 rows, 1 column, start at 2020, step 1
```

> [!note] Reconstructed from the workbook
> The sheet also carries two validation rules on `A4` and `B4` with error messages about student IDs and student names but no list attached. They look like leftovers from a template the sheet was adapted from, and do not drive anything here.

### 6.3 Regular hours and overtime: the core formulas

Hours worked are `(Stop - Start) * 24`, because the subtraction gives a fraction of a day. The sheet splits that into regular hours (up to 8) and overtime (anything above 8):

```excel
F15 (Regular hours):  =IF((E15-D15)*24<=8,(E15-D15)*24,8)
H15 (OverTime):       =IF((E15-D15)*24>8,(E15-D15)*24-8,"")
```

Check with the entered day, 08:00 to 17:00:

- (0.70833 - 0.33333) x 24 = 9 hours worked
- 9 is not `<= 8`, so regular = **8**
- 9 is `> 8`, so overtime = 9 - 8 = **1**

If someone works 6 hours: regular = 6, overtime = `""` (an empty text string, so the cell looks blank).

> [!tip] Why this works
> It is an [[IF Function|IF statement]] whose test compares hours (not a fraction of a day) with 8. The `*24` appears in every branch for the same reason as in section 2.4. The two formulas are mirror images: one caps the hours at 8, the other keeps the excess. Because the two conditions are complementary, every hour is counted exactly once.

> [!warning] Common mistakes
> - Forgetting `*24`: comparing `E15-D15` (a fraction like 0.375) with 8 is always "less than 8", so every shift looks like regular time.
> - Shifts that cross midnight (for example 22:00 to 06:00): `E-D` is negative. The class sheet does not handle this. A standard fix is `MOD(E15-D15,1)`, which wraps a negative difference back into a positive fraction of a day. This is my own addition, not in the class file.

### 6.4 Totals and salary

| Cell | Formula | Result | Meaning |
| --- | --- | --- | --- |
| `E8` Total | `=SUM(F15:I45)` | 9.00 | All regular plus overtime hours |
| `I8` Total Salary | `=SUM(F15:G45*C8)+SUM(H15:I45)*C8*G8` | NIS 419.33 | Regular pay plus overtime pay with bonus |

`I8` is an **array formula** (it multiplies a whole range by `C8` inside `SUM`). Reading it piece by piece:

- `SUM(F15:G45*C8)`: regular hours times the hourly wage (NIS 44.14).
- `SUM(H15:I45)*C8*G8`: overtime hours times the wage times the bonus factor in `G8` (1.5).

For the sample day: 8 x 44.14 = 353.12, plus 1 x 44.14 x 1.5 = 66.21, giving **419.33**. The ranges run to column G and column I because the regular and overtime cells are **merged** across F:G and H:I in each row; the value lives in the left cell of each merged pair.

> [!note] Reconstructed from the workbook
> The sheet shows these formulas without commentary; the explanation above is worked out from them and checked against the stored result. A cell `F11` holds `=SUM(F15:G47)` (result 8) with no label, which looks like a scratch check on regular hours. The summary value `K8` ("Regular Hours", 8:00) is a typed constant, formatted as time (`0.3333` of a day), not a formula.

### 6.5 Conditional formatting that tidies the month

The table `A15:I45` has three [[Conditional Formatting]] rules, each a formula rule:

| Rule | Formula | Effect |
| --- | --- | --- |
| Weekend shading | `$B15>5` | Grey fill for weekday numbers 6 and 7 (Friday and Saturday, the Israeli weekend) |
| Hide days past month end | `$A15>EOMONTH($A$15,0)` | White font, so unused rows (days 29 to 31 in short months) look blank |
| Month-end border | `$A15=EOMONTH($A15,0)` | Thin bottom border under the last day of the month |

`EOMONTH(date, 0)` returns the last day of the month containing `date`. The `$` signs freeze the column (`$A`) and, in the second rule, the starting row (`$A$15`), so the rule fills correctly when applied down the table. See [[Absolute Reference]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]].

> [!tip] Putting protection and the timesheet together
> Locked formulas plus unlocked input cells is the standard pattern for a form others will fill in: the user can only change the month, the year and the start and stop times. They cannot overwrite the date column, the hour formulas or the salary. See [[Sheet Protection]].

---

## Summary

- A time is a **fraction of a day**. `TIME(9,45,22)` is `0.4065...`; subtract times to get a fraction of a day, multiply by 24 for hours.
- `TIME(h,m,s)` builds a time from numbers, `TIMEVALUE("text")` from text; `HOUR`, `MINUTE`, `SECOND` take it apart. `FORMULATEXT(cell)` shows a cell's formula as text.
- Number formats change only the display. For totals that can pass 24 hours use `[h]:mm`, otherwise the display wraps (39:01 becomes 15:01).
- **Protection** is two steps: untick Locked on the cells people may edit (Format Cells, Protection tab), then Review > Protect Sheet. A password is optional and dangerous if forgotten.
- The Time Sheet combines these: dates from `DATE` and `+1`, drop-down inputs, hours via `(Stop-Start)*24`, an `IF` split into regular and overtime, an array formula for salary, and protected input cells.

## Related notes

- [[Excel for Data Analysis]]
- [[Lec_03-Calendars & Date Calculations]]
- [[Lec_04-Date Functions, Named Ranges & Data Validation]]
- [[Lec_02-IF Statements & Logical Functions]]
- [[Time as a Fraction of a Day]] | [[Elapsed Time Format]] | [[Sheet Protection]] | [[Locked and Unlocked Cells]] | [[Timesheet]]
