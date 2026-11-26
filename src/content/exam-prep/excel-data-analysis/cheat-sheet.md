---
title: "Cheat Sheet (Lec 1–8)"
subject: excel-data-analysis
type: reference
description: "Everything the final assignment uses from the 8 lectures, in one page: sorting and filters, the criteria range, D-functions, IF logic, dates and times, lookups, pivot tables and VBA, each with the formula pattern that earns the points."
course: Excel for Data Analysis
semester: 1
year: 1
order: 1
pinned: true
tags:
  - excel-data-analysis
  - exam-prep
  - cheat-sheet
aliases:
  - Excel Cheat Sheet
---

> **The assessment:** a take-home **Final Assignment**: one workbook (`Assignment db.xlsb`), **9 questions, one sheet each**, handed in on Moodle by a fixed deadline (Semester A 2025: 13 March, 23:59, no late submissions). Points are printed per question (8, 5, 15, 10, 10, 15, 15, 21, 10). The rules that cost points when ignored:
>
> - **Personalise** every series and threshold with your own ID, age and birth date (fill in the "Personal Details" sheet).
> - **No typed constants inside formulas.** Every rate, threshold and name goes in a labelled **helper cell below the database** and is referenced with `$`.
> - **Only methods taught in class**, and "complete, efficient answers and the appearance of the file" get full marks. One general formula filled down beats a column of hand edits.
> - Save as **`.xlsb` or `.xlsm`** (the macro question), file named with your ID. No AI tools, no help from others.
> - You **may be called to a short Zoom proficiency test** on your own file, and without it there is no grade. You must be able to explain every formula you submit.
>
> The worked official solution is the [[PP_01|final assignment page]]; the nine homework sets ([[PS_01|HA 1]] to [[PS_09|HA 9]]) rehearse each skill.

---

## 0. Method picker: which tool does the question want?

| The question says… | Use | Section |
|---|---|---|
| "Sort by X, then by Y" / "by colour first" | **Data > Sort**, one level per key, one level **per colour** | §1 |
| "Display only the rows where…" (simple, AND across columns) | **AutoFilter** (Data > Filter) | §2 |
| "Total / average of what is **visible**" | `SUBTOTAL(9, …)` / `SUBTOTAL(1, …)`, never `SUM` | §2 |
| "Begins with", "contains", "ends with" | Wildcards `p*`, `*s*`, `*a` | §3 |
| OR **across** different columns, or "copy the result to M10 with these headers" | **Advanced Filter** with a criteria range | §4 |
| "Calculate the sum / average / count of the records that…" (one number) | `DSUM` / `DAVERAGE` / `DCOUNT` on a criteria range | §5 |
| "A live list of matching rows" | `FILTER(…, (cond1)*(cond2))` | §5 |
| A label or amount that depends on rules | `IF` with `AND` / `OR`, nested for bands | §6 |
| "Between 7,000 and 9,000 inclusive" | `AND(x>=low, x<=high)` | §6 |
| Text that should be a date (`27.04.2021`) | `DATE(NUMBERVALUE(RIGHT…), …, …)` | §7 |
| Weekday, week number, end of month, next Tuesday | `WEEKDAY`, `WEEKNUM`, `EOMONTH`, `MOD(target-WEEKDAY(d),7)` | §7 |
| Years / months between two dates | `DATEDIF(start, end, "y")` (start first) | §7 |
| Hours worked from start and end times | `(end-start)*24`, with the night-shift fix | §8 |
| Fetch a value from a table by a key | `XLOOKUP` (exact) | §9 |
| A value from a band table (bonus by salary range) | `XLOOKUP(…, , -1)` with the lower limits | §9 |
| A two-way lookup (row and column chosen by the user) | `INDEX(…, MATCH(row), MATCH(col))` | §9 |
| A report by category, sum and % and average side by side | **Pivot table** + Value Field Settings + Show Values As | §10 |
| "Show only 45 to 50 units" on a pivot, a button panel | **Slicer** (or Timeline for dates) | §10 |
| "Write a macro that asks the user…" | VBA: `InputBox`, `For … Next`, `If … ElseIf … Else` | §11 |
| "Only these cells may be edited" | Unlock them, then Review > Protect Sheet | §8 |
| "A drop-down of allowed values" | Data Validation > List | §7 |

---

## 1. Sorting (Lec 01)

- **Data > Sort**. Click **inside** the table first so whole rows move together; sorting a single column scrambles the records.
- **Multi-level**: Add Level. Level 1 is the main key; each next level only breaks ties of the one above.
- Sort on **Values, Cell Color, Font Color or Icon**. Excel puts **one colour on top per level**: to rank red, then yellow, then green you need three levels.
- Sorting by a conditional-formatting colour works only while the rule is still on the sheet.

**Final assignment Q3B:** yellow-formatted Total Sales first, then Category Z to A, then Order number largest to smallest: three levels in that order.

---

## 2. AutoFilter and SUBTOTAL (Lec 01)

- **Data > Filter** puts arrows on the header row. It **hides** rows; clearing the filter brings them back.
- Text filters: equals, begins with, ends with, contains. Number filters: greater than, between, top 10, above average. Date filters: before, after, between, by year. Any column: **filter by colour**.
- **Different columns are ANDed.** Inside one column you get two conditions joined by And **or** Or. OR across columns is impossible here: that is the Advanced Filter's job.
- `SUBTOTAL(function_number, range)` calculates on the **visible** rows only:

| Number | Function | | Number | Function |
|---|---|---|---|---|
| 1 | AVERAGE | | 4 | MAX |
| 2 | COUNT | | 5 | MIN |
| 3 | COUNTA | | 9 | **SUM** |

`101` to `111` also ignore rows hidden by hand. Point the range at the whole column (`H2:H2344`), not just the rows visible now.

**Freeze Panes** (View > Freeze Panes): the active cell decides. Click `D2` to freeze row 1 and columns A to C; click `A3` to freeze rows 1 and 2.

---

## 3. Wildcards (Lec 01)

| Pattern | Means |
|---|---|
| `*` | any number of characters, including none |
| `?` | exactly one character |
| `p*` | begins with p |
| `*a` | ends with a |
| `*s*` | contains s |
| `a???` | a followed by exactly three characters |
| `~*` | a literal asterisk |

They work in AutoFilter text filters, criteria ranges, D-functions, `COUNTIF` and `XLOOKUP` match mode `2`. **Not case sensitive. Text only:** `1*` does not find numbers starting with 1.

---

## 4. Advanced Filter and the criteria range (Lec 01)

**Data > Advanced.** Three ranges: the **list range** (the table with its headers), the **criteria range**, and, with **Copy to another location**, the output headers.

**The criteria range rules**

1. Top row = **exact copies** of the data headers (copy them, don't retype).
2. **Same row = AND. Different rows = OR.**
3. A blank cell means "no condition on that column". **A blank row matches everything**, so never select one.
4. A range condition needs the **header twice**: `UnitPrice >=100` and `UnitPrice <=700` side by side.
5. Every OR row must repeat all the AND conditions.
6. Conditions on a **part** of a date (Monday, 2022) need a **helper column** in the data: `=WEEKDAY(A2)`, `=YEAR(A2)`, with its own header.

**Q8A pattern** (software begins with p **or** contains s, price 100 to 700, a Monday):

| Software | UnitPrice | UnitPrice | WEEKDAY |
|---|---|---|---|
| `p*` | `>=100` | `<=700` | `2` |
| `*s*` | `>=100` | `<=700` | `2` |

Output: type **only** the wanted headers, in the wanted order (Branch, Date, Total_Income, SalesPerson) at `M10`, and give that row as "Copy to". Only those columns come out.

**Criteria rows multiply:** "branch begins with m or j or ends with a, **and** department Planning or Sales" is 3 × 2 = **6 rows**.

---

## 5. Database functions and FILTER (Lec 01)

`DSUM(database, field, criteria)`, also `DAVERAGE`, `DCOUNT` (numbers), `DCOUNTA` (non-empty), `DMAX`, `DMIN`.

| Argument | What to give |
|---|---|
| database | the whole table **including the header row**, `A1:K2100` |
| field | the header cell of the column to calculate (`I1`) or its number |
| criteria | a criteria range exactly as for the Advanced Filter |

- A text criterion is "**begins with**": `Support` also matches `Supporter`. Exact: `="=Support"`.
- `<>Guri` means "not Guri".
- The D-function updates by itself; the Advanced Filter must be re-run.
- Checks: `DSUM` with the Advanced Filter's criteria equals the sum of the extracted column. A pair of `SUMIFS` (one per OR row) gives the same value.

**Q8B:** `=DSUM(A1:K2100,I1,U1:X3)`, with criteria rows `*L*` and `Maccabim`, each with `Quantity >=age`, `Quantity <=40`, `YEAR 2022`.

**FILTER** (Excel 365): `=FILTER(A2:J201,(E2:E201="Sales")*(H2:H201>10))`. `*` is AND, `+` is OR. No header row in the ranges. `#SPILL!`: the landing cells aren't empty. `#CALC!`: nothing matched (give a third argument, `""`).

| Tool | Result | Updates itself |
|---|---|---|
| AutoFilter | hides rows | no |
| Advanced Filter | hides or **copies** rows | no (re-run) |
| D-function | **one number** | yes |
| FILTER | a spilled table | yes |

---

## 6. IF, AND, OR, nested IF (Lec 02)

```excel
=IF(test, value_if_true, value_if_false)
=IF(AND(H2>=$M$2,H2<=$M$3),…)        between, inclusive
=IF(OR(E2="Eilat",E2="Tiberias"),…)  any one is enough
=IF(AND(D2<>$M$12,D2<>$M$13),…)      none of these
```

| Situation | Tool |
|---|---|
| one yes/no | `IF` |
| all must hold | `IF(AND(…))` |
| any one is enough | `IF(OR(…))` |
| between two values | `AND(x>=a, x<=b)` |
| "(A and B) or C" | `OR(AND(A,B),C)` |
| several bands | nested `IF`, one level per band |

**Nested IF waterfall:** the first true test wins, so test the bands **in order** (smallest cut-off up with `<=`, or largest down with `>=`), and each later test needs only one boundary:

```excel
=IF(H2<=$S$205,$S$206,IF(H2<=$S$207,$S$208,IF(H2<=$S$209,$S$210,$S$212)))
```

When rules overlap (Q2: 7,000 to 9,000 with Improved/Standard, and 8,500 to 11,000 with Full/Basic), **follow the order the brief lists them**.

- **Percent of an amount:** let the `IF` return the rate and multiply once at the end: `=IF(…,$M$6,IF(…,$M$11,…))*H2`.
- Comparison operators: `=`, `<>`, `>`, `>=`, `<`, `<=` (never `=<`). Text in quotes; `""` is an empty-looking result.
- Cross-sheet: `'Sheet name'!J2` (quotes when the name has a space).

**References** (Lec 01, section 8): `A1` relative, `$A$1` absolute, `$A1` / `A$1` mixed. **F4** cycles them. Helper cells are always `$M$2`; the row's own data is `H2`; a row-wide formatting rule uses `$E3` (column locked, row free). `=B$1*$A2` fills a whole multiplication table from one cell.

---

## 7. Dates (Lec 03 and 04)

A date is a **serial number** (days since 1900) dressed as a date: `+1` is tomorrow, subtraction gives days, `>` and `<` compare. A left-aligned "date" is **text** and nothing works on it.

| Function | Gives | Example |
|---|---|---|
| `DATE(y,m,d)` | a real date; **rolls over** (`DATE(2024,13,1)` = 1 Jan 2025) | `=DATE(2025,MONTH($R$4),DAY($R$4))` |
| `DATEVALUE("29/4/24")` | text to date (locale dependent) | |
| `DAY`, `MONTH`, `YEAR` | the parts | `=YEAR(A2)` |
| `TODAY()`, `NOW()` | today, now (volatile) | |
| `WEEKDAY(d)` | **1 = Sunday … 7 = Saturday** (type 1, default) | Monday = `2` |
| `WEEKDAY(d,2)` | **1 = Monday … 7 = Sunday** | |
| `WEEKNUM(d,1)` | week of the year, weeks start Sunday | 27/04/2021 is week 18 |
| `EDATE(d,n)` | same day, `n` months later | `=EDATE(F4,12)` |
| `EOMONTH(d,0)` | last day of the month | `EOMONTH(d,-1)+1` = **first** of the month |
| `DATEDIF(start,end,"y")` | complete years (`"m"` months, `"d"` days, `"md"` leftover days) | earlier date **first**, else `#NUM!` |
| `SEQUENCE(12,,1,1)` | spilled 1 to 12 | |

**Text to date (Q1):**

```excel
=DATE(NUMBERVALUE(RIGHT(B4,4)),
      NUMBERVALUE(LEFT(RIGHT(B4,7),2)),
      NUMBERVALUE(SUBSTITUTE(LEFT(B4,2),".","")))
```

Year = last 4 characters; month = the 2 before them, cut from the right so the day's length doesn't matter; day = first 2 with a stray dot removed (`9.`).

**Next given weekday on or after a date (Q5):** days to wait = `MOD(target - WEEKDAY(d), 7)`, which is 0 when `d` already is that day. Tuesday is 3:

```excel
=F4+365+MOD(3-WEEKDAY(F4+365),7)
```

**Calendar grid (Lec 03):** helpers `M2 =DATE(L2,K2,1)`, `N2 =WEEKDAY(M2,1)`, `O2 =EOMONTH(M2,0)`; weekday numbers 1 to 7 above the grid. Top-left `=IF(N2=K5,1,"")`; the rest of week 1 `=IF(K7="",IF(L5=$N$2,1,""),K7+1)` ("start here if my weekday is the 1st's, else add 1 to my left neighbour"); later weeks start from the end of the row above. Days past the month end are hidden with the rule `=K7>DAY($O$2)` and a white font.

**Named ranges:** select, type a name in the **Name Box** (no spaces, not like a cell address). Names are absolute by nature.

**Data Validation** (Data > Data Validation): Whole number between, **List** (`Yes,No` or a range → drop-down), Date between; Input Message and Error Alert tabs. It checks only what is typed, not what is pasted.

---

## 8. Times and protection (Lec 05)

- A time is a **fraction of a day**: 12:00 = `0.5`, 06:00 = `0.25`. **× 24 gives hours** (× 1440 minutes).
- `TIME(h,m,s)` from numbers; `TIMEVALUE("11:15:22")` from text; `HOUR`, `MINUTE`, `SECOND` take it apart; `FORMULATEXT(cell)` prints a formula next to its result.
- **`[h]:mm`** for totals over 24 hours (39:01, not 15:01). For pay, work in decimal hours.

| Job | Formula |
|---|---|
| Hours worked | `=(E15-D15)*24` |
| Regular hours, capped at 8 | `=IF((E15-D15)*24<=8,(E15-D15)*24,8)` |
| Overtime | `=IF((E15-D15)*24>8,(E15-D15)*24-8,"")` |
| Night shift (end after midnight) | `=IF(F2-E2>0,(F2-E2)*24,24-(E2-F2)*24)` or `=MOD(F2-E2,1)*24` |
| Monthly salary (Q4) | `=IF((F2-E2)>0,(F2-E2)*24,24-(E2-F2)*24)*30*G2`, with the `30` moved to a helper cell |
| Salary with overtime premium | `=SUM(F15:G45*C8)+SUM(H15:I45)*C8*G8` |

**Protection:** every cell is Locked by default, but it means nothing until the sheet is protected. So: select the input cells, `Ctrl+1` > **Protection** > untick **Locked**, then **Review > Protect Sheet**. A password is optional (and unrecoverable).

**Weekend shading rule:** `=$B15>5` (WEEKDAY 6 and 7: Friday and Saturday).

---

## 9. Lookups (Lec 06)

```excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
```

| `match_mode` | Behaviour | Use |
|---|---|---|
| `0` (default) | exact, else `#N/A` | IDs, codes, names |
| `-1` | exact or **next smaller** | band table of **lower limits** (0, 5000, 8000, 10000) |
| `1` | exact or next larger | band table of upper limits |
| `2` | wildcard | `*partial*` text |

- **Bands:** `=XLOOKUP(J2,$F$217:$F$220,$G$217:$G$220,,-1)`. The table must include the lowest key (`0`), or small values return `#N/A`.
- `""` as `if_not_found` hides `#N/A`. Keep the empty commas so `-1` lands in the match-mode slot.
- A **wider return array spills** several columns (first and last name together).
- Look up a calculated value: `=XLOOKUP(MAX(F2:F201),F2:F201,A2:C201)` (youngest employee).
- **Text vs number (Q4):** `RIGHT(A2,1)` returns **text**. It matches only codes stored as text; otherwise `VALUE(RIGHT(A2,1))`.

**INDEX and MATCH:** `MATCH(value, range, 0)` returns a **position**; `INDEX(range, row, col)` returns what is **at** a position.

```excel
=INDEX(C1:H179, MATCH(L2,C1:C179,0), MATCH(L3,C1:H1,0))
```

(Lec 06: student name in `L2`, exercise header in `L3`; Zvia Mizrahi, grade ex5 gives row 34, column 6, so `H34` = 38.) The MATCH ranges and the INDEX array must **start at the same cell**. Pair it with two Data Validation drop-downs for the student and the exercise (HA 7). `VLOOKUP(value, table, col, FALSE)` is the older one-way version (looks only to the right).

**Text joining (Q9):** `=C3&" "&D3`, `=CONCAT(C3," ",D3)`, `=TEXTJOIN(" ",TRUE,C3,D3)`. Text pieces: `LEFT`, `RIGHT`, `SUBSTITUTE`, `NUMBERVALUE`.

---

## 10. Pivot tables (Lec 07)

**Insert > PivotTable** from a clean, flat list (one header row, no blank rows or merged cells). Four areas:

| Area | Put here |
|---|---|
| **Rows** | the categories you report by (nest two fields for sub-groups) |
| **Columns** | a field with **few** values (quarters, 7 categories) for a cross-tab |
| **Values** | the numbers: Sum by default, Count for text |
| **Filters** | a whole-report filter |

- **Value Field Settings > Summarize by**: Sum, Average, Count, Max, Min.
- **Show Values As**: % of Grand Total, % of Column Total, % of Row Total, Running Total, Rank. Drag the same field into Values **twice** for "sum and its percentage".
- **The Average grand total is the average of all rows**, not the average of the averages.
- **Group dates:** right-click > Group > Years **and** Quarters (Quarters alone merges every year's Q1).
- **Filters:** label filter (contains "r"), value filter **Top 10** (top 3 items by sum), date between, or tick items in the drop-down (urgency: critical and high only).
- **Slicer** (PivotTable Analyze > Insert Slicer): button panel for one field; Ctrl-click or drag to pick 45 to 50. **Timeline** = a slicer for real dates.
- A slicer or timeline drives only the pivots **connected** to it: **Report Connections** (same pivot cache).
- **Refresh** after the source changes; Change Data Source after adding rows.
- **Pivot chart** (PivotTable Analyze > PivotChart): follows the pivot. Move Chart > New sheet; Chart Elements (+) for title, data labels, legend; Format Axis > **Major unit**; value axis on the right: format the **category** axis, "Vertical axis crosses: **At maximum category**".

---

## 11. VBA macros (Lec 08)

- `Alt+F11` opens the editor; Insert > Module. A macro is `Sub name()` … `End Sub` (no spaces in the name).
- Save as **`.xlsm` or `.xlsb`**; `.xlsx` drops the code.
- The **recorder** writes `Select`-then-act code; written code assigns directly.
- **Button:** Developer > Insert > Button (or any shape) > Assign Macro.

| Code | Meaning |
|---|---|
| `Range("E1") = "liat"` | write to a fixed cell |
| `Cells(3, 5) = "tel aviv"` | row 3, column 5 = `E3`; use inside loops |
| `Dim n As Integer` / `As Single` | whole number / decimal variable |
| `n = InputBox("prompt", "title")` | ask the user; returns text |
| `MsgBox "text", , "title"` | message box |
| `For i = 1 To 100` … `Next i` | loop; `Sheets.Count` or the last row as a dynamic end |
| `If … Then` … `ElseIf … Then` … `Else` … `End If` | three-way decision |
| `count = count + 1` | a counter |
| `Range(…).ClearContents` | clear values, keep formats (`.Clear` wipes formats) |
| `Selection.End(xlDown)` | `Ctrl+Down`: the last filled cell of the block |
| `IsEmpty(Cells(i, 1))` | the cell is blank |

**Q6 skeleton (ask, loop, compare, count, summarise)**, using only the commands from class:

```vba
Sub Question6()
    Dim n As Integer
    Dim i As Integer
    Dim g As Integer
    Dim l As Integer
    Dim e As Integer
    n = InputBox("Enter a number between 1 and 200:", "123")
    For i = 1 To 100
        If Cells(i, 1) <> "" Then
            If Cells(i, 1) > n Then
                Cells(i, 2) = "Greater"
                g = g + 1
            ElseIf Cells(i, 1) < n Then
                Cells(i, 2) = "Less"
                l = l + 1
            Else
                Cells(i, 2) = "Equal"
                e = e + 1
            End If
        End If
    Next i
    Range("D1") = "Greater"
    Range("E1") = "Less"
    Range("F1") = "Equal"
    Range("D2") = g
    Range("E2") = l
    Range("F2") = e
End Sub
```

`"123"` stands for the last 3 digits of your ID (the InputBox title). Use the brief's words (Greater / Less), not the official file's Larger / Smaller. Integer counters start at 0 by themselves.

---

## 12. Conditional formatting (Lec 01, used everywhere)

- **Highlight Cells Rules** (greater than, less than, between, equal to, text contains): type `=$M$2` to point at a helper cell so the rule is **dynamic**.
- **New Rule > Use a formula**: written for the **top-left cell** of the selection. To colour a **whole row**, select the whole table and lock the column: `=OR($E3=$M$3,$E3=$M$4)`.
- Several rules on one range: the rule **higher** in Manage Rules wins on overlap (a new rule goes on top).
- Colour bands from cells, not from typed numbers: HA 2 puts the thresholds in cells and the rules point at them.

---

## 13. The one-box summary

> - **Helper cells below the database, `$`-locked; no constants in formulas; personalise with ID, age, birth date.**
> - Criteria range: exact headers, **same row AND, new row OR**, repeat the AND conditions on every OR row, header twice for a range, helper column for weekday or year.
> - Visible rows only: `SUBTOTAL(9, …)`. One number from a criteria range: `DSUM(table, field, criteria)`.
> - Nested IF: first true test wins; order the tests; multiply the rate by the amount once.
> - Dates are numbers: `DATE` builds, `WEEKDAY` 1 = Sunday, `MOD(target-WEEKDAY(d),7)` steps forward, `EOMONTH(d,-1)+1` is the 1st, `DATEDIF` earlier date first.
> - Times are fractions: `×24` for hours, `[h]:mm` for totals, the night-shift `IF` or `MOD(end-start,1)`.
> - `XLOOKUP` exact by default, `-1` for lower-limit bands, `RIGHT()` returns text.
> - Pivot: Rows, Values twice (Sum and % of Grand Total), Average via Value Field Settings, Years with Quarters, slicer connected, Refresh.
> - VBA: `Sub`, `Dim`, `InputBox`, `For i … Next i`, `If/ElseIf/Else`, counters, `Cells(i, col)`, button, `.xlsb`.
