---
title: "Function & VBA Syntax Sheet"
subject: excel-data-analysis
type: reference
description: "Every function, menu path, shortcut, error value and VBA command the course uses, with its exact syntax and a one-line example. Keep it open while you work through the assignment."
course: Excel for Data Analysis
semester: 1
year: 1
order: 2
pinned: true
tags:
  - excel-data-analysis
  - exam-prep
  - formula-sheet
aliases:
  - Excel Syntax Sheet
  - Excel Formula Sheet
---

> Square brackets mark optional arguments. Arguments are separated by commas (on a semicolon-locale machine, type `;`). Every example is from a lecture or the [[PP_01|final assignment]].

## Logic (Lec 02)

| Function | Syntax | Example |
|---|---|---|
| `IF` | `IF(test, if_true, [if_false])` | `=IF(J2>$K$205,$K$206,0)` |
| `AND` | `AND(test1, test2, …)`: all true | `=AND(H2>=7000,H2<=9000)` |
| `OR` | `OR(test1, test2, …)`: at least one | `=OR(G2="Full",G2="Basic")` |
| Nested `IF` | `IF(t1, v1, IF(t2, v2, v3))` | `=IF(H2<=10,"young",IF(H2<=20,"older","oldest"))` |
| Operators | `=` `<>` `>` `>=` `<` `<=` | `D2<>$M$12` |
| Empty result | `""` | `=IF(…,…,"")` |

## Aggregates and filtered data (Lec 01)

| Function | Syntax | Example |
|---|---|---|
| `SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT` | `SUM(range)` | `=AVERAGE(H2:H2344)` |
| `SUBTOTAL` | `SUBTOTAL(fn, range)`: visible rows only | `=SUBTOTAL(9,H2:H2347)` |
| SUBTOTAL codes | 1 AVERAGE, 2 COUNT, 3 COUNTA, 4 MAX, 5 MIN, 9 SUM; 101 to 111 also skip hand-hidden rows | |
| `DSUM` | `DSUM(database, field, criteria)` | `=DSUM(A1:K2100,I1,U1:X3)` |
| `DAVERAGE` | same arguments | `=DAVERAGE(A1:J201,J1,AC236:AE238)` |
| `DCOUNT` / `DCOUNTA` | counts numbers / non-blanks | `=DCOUNT(A1:J201,A1,AC242:AD245)` |
| `SUMIFS` | `SUMIFS(sum_range, crit_range1, crit1, …)` | a check on a DSUM |
| `FILTER` | `FILTER(array, include, [if_empty])` | `=FILTER(A2:J201,(E2:E201="Sales")*(H2:H201>10))` |
| `SEQUENCE` | `SEQUENCE(rows, [cols], [start], [step])` | `=SEQUENCE(12,,1,1)` |

**Criteria range:** exact headers on top; same row AND, next row OR; `p*` begins, `*s*` contains, `*a` ends, `?` one character; `>=100`, `<>Guri`; exact text `="=Support"`.

## Dates (Lec 03 and 04)

| Function | Syntax | Example and result |
|---|---|---|
| `DATE` | `DATE(year, month, day)` | `=DATE(2024,12,15)`: 15/12/2024 (serial 45641) |
| `DATEVALUE` | `DATEVALUE(text)` | `=DATEVALUE("29/4/24")`: 29/04/2024 |
| `DAY`, `MONTH`, `YEAR` | `MONTH(date)` | `=MONTH(E5)`: 12 |
| `TODAY`, `NOW` | `TODAY()` | volatile |
| `WEEKDAY` | `WEEKDAY(date, [type])` | type 1: Sun 1 … Sat 7; type 2: Mon 1 … Sun 7 |
| `WEEKNUM` | `WEEKNUM(date, [type])` | `=WEEKNUM(C4,1)`: 18 for 27/04/2021 |
| `EDATE` | `EDATE(date, months)` | `=EDATE(E5,2)`: 15/02/2025 |
| `EOMONTH` | `EOMONTH(date, months)` | `=EOMONTH(E5,0)`: 31/12/2024; `=EOMONTH(E5,-1)+1`: 01/12/2024 |
| `DATEDIF` | `DATEDIF(start, end, unit)` | units `"y"`, `"m"`, `"d"`, `"md"`, `"ym"`; start must be earlier |
| Next weekday on or after `d` | `d+MOD(target-WEEKDAY(d),7)` | Tuesday: `=F4+365+MOD(3-WEEKDAY(F4+365),7)` |
| The 10th of next month | `EOMONTH(d,0)+10` | payment date (HA 5) |

## Times (Lec 05)

| Function | Syntax | Example and result |
|---|---|---|
| `TIME` | `TIME(h, m, s)` | `=TIME(9,45,22)`: 0.4065 |
| `TIMEVALUE` | `TIMEVALUE(text)` | `=TIMEVALUE("11:15:22")`: 0.4690 |
| `HOUR`, `MINUTE`, `SECOND` | `HOUR(time)` | `=HOUR(E5)`: 9 |
| Hours between | `(end-start)*24` | 09:45 to 11:15: 1.5 |
| Across midnight | `MOD(end-start,1)*24` | 20:00 to 08:00: 12 |
| `FORMULATEXT` | `FORMULATEXT(cell)` | prints the formula of a cell |
| Formats | `h:mm` clock time; `[h]:mm` elapsed hours over 24 | 39:01 not 15:01 |

## Lookups (Lec 06)

| Function | Syntax | Example |
|---|---|---|
| `XLOOKUP` | `XLOOKUP(value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])` | `=XLOOKUP(D206,A2:A201,J2:J201)` |
| match_mode | `0` exact (default), `-1` exact or next smaller, `1` exact or next larger, `2` wildcard | `=XLOOKUP(J2,$F$217:$F$220,$G$217:$G$220,,-1)` |
| search_mode | `1` first to last (default), `-1` last to first | |
| `MATCH` | `MATCH(value, range, 0)`: a position | `=MATCH(L2,C1:C179,0)`: 34 |
| `INDEX` | `INDEX(array, row, [col])` | `=INDEX(C1:H179,34,6)`: 38 |
| `VLOOKUP` / `HLOOKUP` | `VLOOKUP(value, table, col_index, FALSE)` | `=VLOOKUP(WEEKDAY(E5),WeekDays,2,FALSE)` |
| `IFERROR` | `IFERROR(value, if_error)` | hide `#N/A` from INDEX/MATCH |

## Text (Lec 06 and the final)

| Function | Syntax | Example |
|---|---|---|
| `&` | `a&" "&b` | `=A2&" "&B2`: Gadi Guri |
| `CONCAT` | `CONCAT(t1, t2, …)` | `=CONCAT(C3," ",D3)` |
| `TEXTJOIN` | `TEXTJOIN(delimiter, ignore_empty, t1, …)` | `=TEXTJOIN(" ",TRUE,C3,D3)` |
| `LEFT`, `RIGHT` | `RIGHT(text, n)` | `=RIGHT(A2,1)`: the last digit, as **text** |
| `SUBSTITUTE` | `SUBSTITUTE(text, old, new)` | `=SUBSTITUTE(LEFT(B4,2),".","")` |
| `NUMBERVALUE`, `VALUE` | text to number | `=NUMBERVALUE(RIGHT(B4,4))`: 2021 |

## References and names

| Form | Behaviour when copied |
|---|---|
| `A1` | both move |
| `$A$1` | fixed (helper cells) |
| `$A1` | column fixed, row moves (row-wide formatting rules) |
| `A$1` | row fixed, column moves (header rows) |
| `'Sheet name'!A1` | another sheet; quotes when the name has a space |
| Named range | Name Box; always absolute; no spaces |

## Menu paths

| Job | Where |
|---|---|
| Sort, multi-level, by colour | Data > Sort > Add Level; Sort On: Cell Color |
| AutoFilter | Data > Filter (Ctrl+Shift+L) |
| Advanced Filter | Data > Advanced: list range, criteria range, Copy to another location |
| Conditional formatting | Home > Conditional Formatting > Highlight Cells Rules / New Rule > Use a formula |
| Data validation | Data > Data Validation: Settings, Input Message, Error Alert |
| Freeze panes | View > Freeze Panes > Freeze Panes (from the cell below and right of what stays) |
| Format cells | Ctrl+1: Number, Alignment, Border (Outline / Inside), Protection |
| Protect sheet | Unlock the inputs (Ctrl+1 > Protection), then Review > Protect Sheet |
| Pivot table | Insert > PivotTable; Value Field Settings; Show Values As |
| Group pivot dates | right-click a date > Group > Years + Quarters |
| Slicer / Timeline | PivotTable Analyze > Insert Slicer / Insert Timeline; Report Connections |
| Pivot chart | PivotTable Analyze > PivotChart; Move Chart > New sheet |
| Value axis on the right | Format the category axis > Vertical axis crosses: At maximum category |
| Major unit | Format the value axis > Axis Options > Units > Major |
| Sheet tab | right-click: Rename, Tab Color, Move or Copy > Create a copy |
| Macros | Alt+F11 editor; View > Macros > Record; Developer > Insert > Button |

## Shortcuts

| Keys | Does |
|---|---|
| F4 | cycle `A1` → `$A$1` → `A$1` → `$A1` while editing a reference |
| Ctrl+1 | Format Cells |
| Ctrl+Shift+L | AutoFilter on/off |
| Ctrl+Down | jump to the end of the block (`End(xlDown)` in VBA) |
| Ctrl+; | type today's date |
| Alt+F11 | VBA editor |
| Double-click the fill handle | fill a formula down to the end of the data |

## Error values

| Error | Usual cause here |
|---|---|
| `#N/A` | lookup found nothing: exact match on a band value, text "1" against number 1, a stray space |
| `#NUM!` | `DATEDIF` with the later date first |
| `#VALUE!` | arithmetic on text (a text date, a number with a dot) |
| `#SPILL!` | a spilled result (FILTER, SEQUENCE, a wide XLOOKUP) is blocked by filled cells |
| `#CALC!` | FILTER matched nothing and has no third argument |
| `#####` | column too narrow, or a negative time |

## VBA (Lec 08)

```vba
Sub MacroName()                         ' no spaces in the name
    Dim n As Integer                    ' whole number; As Single for decimals
    n = InputBox("prompt", "title")     ' asks; returns what was typed
    MsgBox "message", , "title"         ' the double comma skips the button style
    Range("A1") = "Text"                ' a fixed cell
    Cells(2, 4) = n                     ' row 2, column 4 = D2
    For i = 1 To 100                    ' loop; Sheets.Count for every sheet
        If Cells(i, 1) > n Then
            Cells(i, 2) = "Greater"
        ElseIf Cells(i, 1) < n Then
            Cells(i, 2) = "Less"
        Else
            Cells(i, 2) = "Equal"
        End If
    Next i
    Range("D1", Range("D1").End(xlDown)).ClearContents   ' clear a block, keep formats
End Sub
```

| Recorder line | Written equivalent |
|---|---|
| `Range("D1").Select` + `ActiveCell.FormulaR1C1 = "1"` | `Range("D1") = 1` |
| `Selection.AutoFill Destination:=Range("D1:D100")` | a `For` loop writing `Cells(i, 4) = i` |
| `Selection.ClearContents` | `Range(…).ClearContents` |

Save as **`.xlsm`** or **`.xlsb`**; a plain `.xlsx` drops the code.
