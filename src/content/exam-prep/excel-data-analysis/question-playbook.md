---
title: "Assignment Question Playbook"
subject: excel-data-analysis
type: reference
description: "Every question type the final assignment and the homework ask, with the steps that earn the points and the official formula or a checked model answer."
course: Excel for Data Analysis
semester: 1
year: 1
order: 4
tags:
  - excel-data-analysis
  - exam-prep
  - playbook
---

> **Game plan for a take-home workbook.** Fill in the "Personal Details" sheet first and give your ID, age and birth date their own named cells: half the questions reuse them. Then do the big questions (Q8 Advanced Filter + DSUM, Q3, Q6, Q7) while you're fresh. For each question: helper cells **below the database**, one formula in the top row, fill down, then **spot-check three rows by hand**. Finish with the look of the file (headers, number formats, widths): it is in the marking rule. Keep a copy before every sort or filter step that needs a duplicate sheet.

---

## A · Text that should be a date (Q1, 8 points)

**Steps**
1. Spot the problem: the "dates" are left-aligned and `=ISNUMBER(B4)` is FALSE.
2. Cut the text into year, month, day. Take the year and month **from the right** (fixed positions), the day from the left.
3. Turn each piece into a number and rebuild with `DATE`. Format the column as a date.
4. Week number: `WEEKNUM(date,1)` (weeks start on Sunday).

**Model answer** (official):

```excel
C4 =DATE(NUMBERVALUE(RIGHT(B4,4)),NUMBERVALUE(LEFT(RIGHT(B4,7),2)),NUMBERVALUE(SUBSTITUTE(LEFT(B4,2),".","")))
D4 =WEEKNUM(C4,1)
```

`27.04.2021` → 27/04/2021, week 18. `9.05.2012` works because `SUBSTITUTE` removes the dot in `9.`.

---

## B · A bonus from several rules (Q2, 5 points; HA 4, HA 5, HA 9)

**Steps**
1. Write every threshold, text value and percentage in its own **helper cell** (a labelled block next to or below the table).
2. Translate each rule: "between a and b inclusive" = `AND(x>=a,x<=b)`; "X or Y" = `OR(g=X,g=Y)`; "not in these cities" = `AND(d<>c1,d<>c2,d<>c3)`.
3. Nest them **in the order the brief lists them**, the last rule as the final else.
4. Return the **rate** from the `IF` and multiply by the salary once.
5. Check one employee from each rule by hand, and the percentages with `=J2/H2`.

**Model answer** (official, `H` salary, `G` service, `D` city):

```excel
=IF(AND(H2>=$M$2,H2<=$M$3,OR(G2=$M$4,G2=$M$5)),$M$6,
 IF(AND(H2>=$M$7,H2<=$M$8,OR(G2=$M$9,G2=$M$10)),$M$11,
 IF(AND(D2<>$M$12,D2<>$M$13,D2<>$M$14),$M$15,$M$16)))*H2
```

Salary 5,600, Improved, Tel Aviv-Yafo: fails rules 1 and 2, is in a listed city, gets 4% = **224**.

**Variant: labels in bands** (seniority, BMI, order size). Waterfall from the smallest cut-off with `<=`:

```excel
=IF(H2<=$S$205,$S$206,IF(H2<=$S$207,$S$208,IF(H2<=$S$209,$S$210,$S$212)))
```

---

## C · Dynamic colour rules, then sort and filter by colour (Q3, 15 points)

**Steps (A, formatting)**
1. Personal series in column A (`age*1000`, then `=A2+age`).
2. Helper cells: `=AVERAGE(H2:H2344)` and `=age_cell*32`.
3. Select the column, **Highlight Cells Rules > Greater Than Or Equal To** `=$M$2` (yellow fill, blue font), and **Less Than Or Equal To** `=$M$3` (green fill, white font). Pointing at the cells is what makes it "dynamic".

**Steps (B, sort)**: duplicate the sheet, **Data > Sort**, three levels: column H on **Cell Color** yellow **On Top**; Category **Z to A**; Order number **Largest to Smallest**.

**Steps (C, filter)**: duplicate again, Data > Filter, then one filter per column (they AND together):

| Column | Filter |
|---|---|
| Total Sales | Filter by Color: the yellow |
| Quantity | Number Filters > Greater Than Or Equal To `45` |
| Brand | Text Filters > Begins With the first letter, **Or** Begins With the second |
| ID | Number Filters > Greater Than the average ID (from a helper `=AVERAGE(A2:A2344)`) |

Add a visible total `=SUBTOTAL(9,H2:H2347)`; it changes with the filter, `SUM` wouldn't.

---

## D · Lookup by a computed key, then pay from times (Q4, 10 points; HA 6, HA 7)

**Steps**
1. Build the key: `RIGHT(A2,1)` is the last digit of the ID (as text).
2. `XLOOKUP` it in the rank table with **locked** ranges; exact match. If the codes are numbers, wrap the key in `VALUE`.
3. Hours a day: `(end-start)*24`, but when the shift crosses midnight the difference is negative, so use the two-case `IF` (or `MOD(end-start,1)*24`).
4. Multiply by the days (a helper cell) and the hourly wage.

**Model answer** (official):

```excel
G2 =XLOOKUP(RIGHT(A2,1),$B$22:$B$25,$C$22:$C$25)
H2 =IF((F2-E2)>0,(F2-E2)*24,24-(E2-F2)*24)*30*G2
```

18:00 to 22:00 at 40 NIS: 4 × 30 × 40 = **4,800**. 20:00 to 08:00: 24 − 12 = 12 hours.

**Timesheet variant (HA 6, Lec 05):** regular hours capped and overtime as the excess, both as decimals:

```excel
=IF((E15-D15)*24<=8.5,(E15-D15)*24,8.5)
=IF((E15-D15)*24>8.5,(E15-D15)*24-8.5,0)
```

(the cap `8.5` belongs in a helper cell). Grey out Fridays, Saturdays and the days that spill into next month with one formula rule on `B14:J44`: `=OR($C14=6,$C14=7,MONTH($B14)<>$A$7)` (column C holds the weekday number).

---

## E · Date arithmetic: next weekday, payment day, birthday this year (Q5, 10 points; HA 5)

**Steps**
1. Know the numbering: `WEEKDAY` type 1 is Sunday 1 … Saturday 7, so Tuesday is 3, Saturday 7.
2. "The next Tuesday on or after `d`": `d + MOD(3 - WEEKDAY(d), 7)`.
3. "A year ahead": `d+365` (the brief's reading) or `EDATE(d,12)` (calendar-exact).
4. "Your birthday in 2025": `DATE(2025, MONTH(b), DAY(b))`, then `+1` down the column.
5. Single formula, no helper columns, if the brief says so.

**Model answers**

```excel
G4 =F4+365+MOD(3-WEEKDAY(F4+365),7)
H4 =DATE(2025,MONTH($R$4),DAY($R$4))      H5 =H4+1
```

20/10/2021 → 20/10/2022 is a Thursday (5); `MOD(3-5,7) = 5`; **25/10/2022**, a Tuesday.

**HA 5 payment day** (the 10th of next month, three days later if that's a Saturday):

```excel
=IF(WEEKDAY(EOMONTH(A2,0)+10)=7,EOMONTH(A2,0)+13,EOMONTH(A2,0)+10)
```

**Tenure in complete years:** `=DATEDIF(start,TODAY(),"y")` (start first).

---

## F · Write a macro with InputBox, a loop and an If (Q6, 15 points; HA 9)

**Steps**
1. Rename the sheet as asked. `Alt+F11`, Insert > Module.
2. `Dim` the input, the loop counter and one counter per outcome.
3. `InputBox(prompt, title)` with the title the brief gives (your ID digits).
4. `For i = 1 To <last row>`: skip blanks, compare `Cells(i, 1)` with the input using `If / ElseIf / Else`, write the verdict in `Cells(i, 2)`, add 1 to the matching counter.
5. After `Next i`, write the headers and counts in the summary cells.
6. Developer > Insert > Button, assign the macro, **run it**. Save as `.xlsb` / `.xlsm`.
7. **Write it by hand**: the brief forbids recording "even the headers".

**Model answer:** the skeleton in [[Cheat Sheet (Lec 1–8)|the cheat sheet]], §11, and the official code on the [[PP_01|final assignment page]]. Use the brief's words (`Greater`, `Less`, `Equal`).

**Recorded-macro variant (HA 9 "Apple"):** View > Macros > Record Macro, do the steps, Stop Recording; then edit the range in the editor if asked.

---

## G · Pivot table, slicer and pivot chart (Q7, 15 points; HA 8)

**Steps**
1. Personal series in column A first (it becomes part of the data).
2. **Insert > PivotTable** in a new sheet, rename the tab (your birthday `ddmm`).
3. Rows: Shipping method, then Urgency. Values: Total Sales (Sum), Total Sales **again** with **Show Values As > % of Grand Total**, Quantity with **Value Field Settings > Average**.
4. Urgency drop-down: tick only critical and high.
5. **Insert Slicer** on Quantity; select 45 to 50 (click 45, Shift-click 50).
6. Duplicate the sheet (name: your age); drag the % and average out of Values.
7. **PivotChart > Clustered Column**; Move Chart > New sheet "Sales Chart"; title "Brand Report for" + birth year; Format Data Series > Fill; Chart Elements > Data Labels, Legend; category axis "Vertical axis crosses: At maximum category" (axis on the right); value axis Major unit `1325`.

**Official result:** grand total **108,855.50**; air mail high 35,087.02 = 32.23% of it.

**HA 8 report types:** count of orders by Years (rows) × Quarters (columns) via Group; average by sub-category; rows = discount, Values = profit, **Value Filter** "Sum of Profit less than 0"; Label Filter "begins with J"; % of Column Total for a share.

---

## H · Advanced Filter with OR rows, and a DSUM (Q8, 21 points; HA 3)

**Steps**
1. Add **helper columns** in the data for any condition on part of a date: `WEEKDAY` (`=WEEKDAY(A2)`, Monday = 2) and `YEAR` (`=YEAR(A2)`), with headers.
2. Build the criteria range where the brief says (`M1`): copied headers; one row per OR alternative; repeat every AND condition on each row; a range uses its header twice.
3. Type the output headers (only those asked, in order) at `M10`.
4. **Data > Advanced > Copy to another location**: list range = whole table with helper columns; criteria = `M1:P3` exactly (no blank row); copy to = `M10:P10`.
5. For the sum: a second criteria range at `U1`, then `=DSUM(whole table, field header, criteria)` in `U5`.
6. Check: `DSUM` on the first criteria equals the sum of the extracted column.

**Model answer**

| | M | N | O | P |
|---|---|---|---|---|
| 1 | Software | UnitPrice | UnitPrice | WEEKDAY |
| 2 | `p*` | `>=100` | `<=700` | `2` |
| 3 | `*s*` | `>=100` | `<=700` | `2` |

| | U | V | W | X |
|---|---|---|---|---|
| 1 | Branch | Quantity | Quantity | YEAR |
| 2 | `*L*` | `>=age` | `<=40` | `2022` |
| 3 | Maccabim | `>=age` | `<=40` | `2022` |

`U5 =DSUM(A1:K2100,I1,U1:X3)`; with age 29 the official value is **10,189.83**; the extract's check is **192,588**. (Type your actual age in `V2:V3`, or `=">="&age_cell` to keep it linked.)

**HA 3 variant:** "(Critical AND 20 to 30 units) OR (price at least 800 AND Express Air)": headers Order Priority, Order Quantity, Order Quantity, Ship Mode, Unit Price in NIS; row 2 `Critical`, `>=20`, `<=30`; row 3 `Express Air`, `>=800`, the rest blank. A blank cell means no condition on that column. Then `=SUM` and `=COUNT` of the extract (627,291.99 NIS over 365 orders), or `DSUM` directly.

---

## I · Full name and a whole-row highlight (Q9, 10 points; HA 4)

**Steps**
1. Series in column A (or wherever the brief says) from your age, jumps of 3.
2. Full name with a **text function**: `=CONCAT(C3," ",D3)` (or `TEXTJOIN`, or `&`). Not Flash Fill.
3. Branch names in helper cells. Select **the whole table**, New Rule > Use a formula: `=OR($E3=$M$3,$E3=$M$4)` (the `$` before E only), pick a fill.
4. Check a row from each branch is coloured end to end.

---

## J · Summary sheet and what-if copies (HA 1)

**Steps**
1. Rates (exchange rate, growth factor, tax) in helper cells below the data; formulas like `=$E2*$I2/$V$8402`.
2. Copy the sheet (Move or Copy > Create a copy) and change **only the helper cells** for the scenario; colour what changed.
3. Summary sheet: `MIN`, `MAX`, `AVERAGE`, `SUM` across the columns with cross-sheet references; Highlight Cells Rules on the totals.

---

## K · Employee card and a two-way lookup (HA 7)

**Steps**
1. One `XLOOKUP` per card cell, all keyed on the ID cell `$C$2`, each returning a different column.
2. Change the ID to test the card.
3. Bands (pension % by seniority 1–10, 11–20, 21–30, 31+): a table of **lower bounds** and `XLOOKUP(…, , -1)`.
4. Two-way: drop-downs with Data Validation > List, then `=INDEX(data, MATCH(row_choice, row_labels, 0), MATCH(col_choice, col_labels, 0))`, ranges starting at the same cell.

---

## L · Lock a form and restrict its inputs (HA 6, Lec 04, Lec 05)

**Steps**
1. Data Validation on the inputs: month whole number 1 to 12, year 2023 to 2028, a List for drop-downs; add an Input Message and an Error Alert.
2. Dates of the month from the inputs: `=DATE(B7,A7,1)`, then `=B14+1`.
3. Select the input cells, `Ctrl+1` > Protection > untick Locked; Review > Protect Sheet.
