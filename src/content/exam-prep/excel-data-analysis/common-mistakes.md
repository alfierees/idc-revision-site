---
title: "Common Mistakes"
subject: excel-data-analysis
type: reference
description: "The slips that cost points in the Excel assignment: constants inside formulas, a blank row in the criteria range, SUM under a filter, RIGHT returning text, WEEKDAY numbering, recorded macros, pivots that never refresh."
course: Excel for Data Analysis
semester: 1
year: 1
order: 5
tags:
  - excel-data-analysis
  - exam-prep
  - common-mistakes
---

> The assignment is marked on **complete, efficient answers and the appearance of the file**. Most lost points are not wrong numbers but a formula that only works for the sample data, a constant typed where a helper cell belongs, or a step the brief asked for and the file doesn't show. The right-hand column is the check to run before moving on.

## The house rules

| Mistake | Why it costs | Check |
|---|---|---|
| A number typed inside the formula (`*0.1`, `*30`, `>=7000`) | The brief demands helper cells; the formula isn't "dynamic" | Every constant lives in a labelled cell below the database, referenced with `$` |
| Helper cells beside the table, or scattered | "External cells will be presented below the database" | One labelled block under the data |
| The sample age or ID left in | Every series and threshold is personal | Search the sheet for `29`, `1995`, the sample digits |
| A different formula in some rows | Not "efficient", and a sign of hand-fixing | One formula in the top row, filled down |
| No check of the result | Wrong rows go unnoticed | Recompute three rows by hand, one per rule |
| An unformatted file | "Appearance" is in the marking rule | Headers, number formats (currency, date, %), widths, freeze panes where asked |
| Saved as `.xlsx` | The macro is gone | `.xlsb` or `.xlsm`, file named with your ID |
| Not able to explain a formula | You may be called to a Zoom proficiency test | Say each argument and each `$` out loud |

## Sorting, filters, SUBTOTAL (Lec 01)

| Mistake | Fix |
|---|---|
| Sorting one selected column | Click inside the table so whole rows move |
| One sort level for three colours | One colour per level: red, then yellow, then green is three levels |
| Sorting by colour after removing the rule | Colour sorting reads the conditional formatting; keep it on |
| Expecting OR across two columns from AutoFilter | Different columns always AND; use the Advanced Filter |
| `=SUM(…)` under a filtered list | `=SUBTOTAL(9, …)` counts only visible rows |
| SUBTOTAL over just the rows visible now | Point it at the whole column range |
| Freezing from the wrong cell | The active cell's row and column are the first that scroll: `D2` freezes row 1 and A:C |
| `1*` to find numbers starting with 1 | Wildcards match text only |

## Criteria ranges, Advanced Filter, D-functions (Lec 01)

| Mistake | Fix |
|---|---|
| Retyped headers that don't match exactly (space, capital, format) | Copy the headers from the data |
| A blank row inside the criteria range | It matches **everything**: select only the filled rows |
| OR conditions on one row | Same row = AND. Each alternative gets its own row |
| AND conditions written only on the first OR row | Repeat them on every row (price range and Monday on both rows) |
| A range in one cell (`100-700`) | Header twice: `>=100` and `<=700` |
| "Monday" or "2022" against the date column | Add helper columns `=WEEKDAY(A2)`, `=YEAR(A2)` with headers, and include them in the list range |
| Monday written as `1` | Default `WEEKDAY`: Sunday = 1, **Monday = 2** |
| Copying all columns when the brief names four | Type only those headers, in order, at the output cell; Copy to = that row |
| D-function database without the header row | `A1:K2100`, header included |
| D-function database shorter than the data | The official Q8B used `A1:K1528`; use the whole table |
| `Support` expected to match only Support | Text criteria are "begins with"; exact is `="=Support"` |
| `DCOUNT` on a text column | `DCOUNT` counts numbers; `DCOUNTA` for text |
| Forgetting the Advanced Filter doesn't update | Re-run it after changing the criteria (the D-function updates itself) |
| `FILTER` with the header row included | Data from row 2; conditions the same height as the data |

## IF logic (Lec 02)

| Mistake | Fix |
|---|---|
| Nested tests in the wrong order | First true wins: follow the brief's order, or smallest cut-off up with `<=` |
| "Between" written as `7000<=H2<=9000` | `AND(H2>=7000,H2<=9000)` |
| `=<` | `<=` |
| "Not in these three cities" with `OR(D2<>a,D2<>b,D2<>c)` | That is always true: use `AND` of the `<>` tests |
| Returning the percentage when the brief asks for the amount | Multiply the rate by the salary |
| Missing final else | A row that matches nothing shows FALSE |
| One `)` short | One closing bracket per `IF`, all at the end |
| Text without quotes, or numbers with quotes | `"Senior"`, but `10000` |
| Cross-sheet reference without quotes | `'Filters advanced'!G2` |

## Dates (Lec 03 and 04)

| Mistake | Fix |
|---|---|
| Treating left-aligned "dates" as dates | They're text: rebuild with `DATE` and the text functions |
| Cutting the month from the left in `27.04.2021` | One-digit days shift it; cut month and year from the **right** |
| `WEEKDAY` without thinking which numbering | Type 1: Sunday 1 … Saturday 7 (Tuesday 3); type 2: Monday 1 |
| `3-WEEKDAY(d)` without `MOD` | A negative shift moves backwards; `MOD(…,7)` keeps it 0 to 6 |
| `DATEDIF(later, earlier, …)` | `#NUM!`: the earlier date first |
| `"md"` expected to give total days | It's leftover days; subtract the dates for the total |
| `YEAR(a)-YEAR(b)` as an age | Wrong across a year end; `DATEDIF(…,"y")` |
| `+30` for "a month later" | `EDATE(d,1)`; `EOMONTH(d,0)` for the month's end |
| `EOMONTH(d,-1)` as "the 1st of the month" | That's the end of last month; add 1 |
| `TODAY()` in an answer that must stay fixed | It changes every day; type or build the date |
| A date criterion typed as text | Compare with a real date or a `DATE(…)` |

## Times (Lec 05)

| Mistake | Fix |
|---|---|
| Comparing `end-start` with 8 | It's a fraction of a day: `(end-start)*24` |
| A night shift giving negative hours | `IF(end>start, …, 24-(start-end)*24)` or `MOD(end-start,1)*24` |
| A total of hours shown as 15:01 | Format `[h]:mm`, or work in decimal hours |
| `TIME("11:15")` | `TIME` takes three numbers; `TIMEVALUE` takes text |
| Overtime shown as blank when the brief says 0 | Return `0`, not `""` |
| Protect Sheet before unlocking the inputs | Untick Locked on the input cells first, then protect |

## Lookups (Lec 06)

| Mistake | Fix |
|---|---|
| `RIGHT(A2,1)` looked up against numeric codes | `RIGHT` returns text: `VALUE(RIGHT(A2,1))`, or codes stored as text |
| Exact match on a band table | `-1` with the lower limits |
| Band table without the lowest key (`0`) | Small values return `#N/A` |
| Unlocked lookup ranges | `$F$217:$F$220` so the table stays put |
| Lookup and return arrays of different heights or start rows | Same rows: `F217:F220` with `G217:G220` |
| Dropped commas before match_mode | `XLOOKUP(J2,keys,values,,-1)`: keep the empty `if_not_found` slot |
| `MATCH` without `0` | It assumes sorted data and can silently return a wrong row |
| INDEX and MATCH ranges starting at different cells | Start them all at the same cell |
| A stray space in the typed name | `#N/A`; use a drop-down (Data Validation > List) |

## Pivot tables (Lec 07)

| Mistake | Fix |
|---|---|
| "% of total" made with a formula next to the pivot | Same field in Values twice, the second with Show Values As > % of Grand Total |
| % of Column Total when the brief means the grand total | With a column field they differ; read the brief |
| Average left as Sum | Value Field Settings > Average |
| Reading the Average grand total as the average of averages | It's the average of all records |
| Quarters grouped without Years | Every year's Q1 merges; tick Years too |
| A slicer that doesn't move the second pivot | Report Connections: tick it |
| Editing the source and not refreshing | Refresh (or Refresh All); Change Data Source for new rows |
| Totals smaller than expected | A filter or timeline is on: check the filter icons |
| The value axis moved by formatting the value axis | Format the **category** axis: Vertical axis crosses At maximum category |
| Chart left on the pivot sheet | Move Chart > New sheet, with the asked name |

## VBA (Lec 08)

| Mistake | Fix |
|---|---|
| Recording part of a "write" macro | Q6 forbids recording, even the headers: type every line |
| A space in the macro name | `Sub question_6()` |
| Words different from the brief (`Larger` for `Greater`) | Copy the brief's words exactly |
| `Integer` for a decimal input | `Single` (Integer rounds 2.7 to 3) |
| InputBox without the asked title | `InputBox("prompt", "123")`: the second argument is the window name |
| A counter never increased, or reset inside the loop | Set to 0 before the loop, `+1` inside |
| A loop that writes to the same row every time | `Cells(i, 2)`, with `i` as the row |
| `If` without `End If`, `For` without `Next i` | Every block closes |
| No button, or a button not tested | Insert, Assign Macro, click it once |
| `.Clear` when only the values should go | `.ClearContents` keeps formats |
| `End(xlDown)` on a column with gaps | It stops at the first blank |
