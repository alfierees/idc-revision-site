---
title: "Quick Self-Test"
subject: excel-data-analysis
type: self-test
description: "22 questions in the order of the course: write the formula, build the criteria range, set up the pivot, type the macro, then reveal the answer. Eight are quick multiple-choice checks, and the last one rehearses the Zoom proficiency test."
course: Excel for Data Analysis
semester: 1
year: 1
order: 6
tags:
  - excel-data-analysis
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · A rate in a helper cell"
    text: |
      Order quantity is in column E, unit price in shekels in column I, rows 2 to 8400. The exchange rate (3.52 ILS per dollar) must sit in a helper cell below the data. Write the revenue-in-dollars formula for `V2`, ready to fill down.
    solution: |
      Put `3.52` in `V8402` (labelled), then:

      ```excel
      V2 =$E2*$I2/$V$8402
      ```

      `$V$8402` is fully locked so every row divides by the same cell. `$E2` and `$I2` lock the column only, so each row reads its own quantity and price. Changing the rate later is a one-cell edit, which is the point of the "no constants in formulas" rule (HA 1).
  - id: "2"
    title: "2 · Totals under a filter"
    text: |
      The table is filtered to show 81 of 2,343 brands. Which formula gives the total sales of the **visible** rows only?
    options:
      - label: a
        text: |
          `=SUM(H2:H2344)`
        why: |
          `SUM` adds every row, including the ones the filter hides.
      - label: b
        text: |
          `=SUBTOTAL(9,H2:H2344)`
        correct: true
        why: |
          Function number 9 is SUM, and `SUBTOTAL` skips rows hidden by a filter, so the figure follows the filter.
      - label: c
        text: |
          `=SUBTOTAL(1,H2:H2344)`
        why: |
          Function number 1 is AVERAGE, not SUM.
      - label: d
        text: |
          `=SUMIF(H2:H2344,">0")`
        why: |
          `SUMIF` tests values, not visibility; hidden rows are still added.
    solution: |
      `SUBTOTAL(9, range)`: 1 AVERAGE, 2 COUNT, 3 COUNTA, 4 MAX, 5 MIN, 9 SUM. Point it at the whole column, so new rows that appear when the filter changes are still counted.
  - id: "3"
    title: "3 · Build a criteria range"
    text: |
      The employee table has headers Department, Branch and Monthly Salary in NIS. Build a criteria range for: department **Sales or Planning**, **and** salary **above 9,000**, **and** branch **not** Eilat.
    solution: |
      Two alternatives (Sales, Planning) means **two rows**; every AND condition is repeated on both:

      | Department | Monthly Salary in NIS | Branch |
      |---|---|---|
      | Sales | `>9000` | `<>Eilat` |
      | Planning | `>9000` | `<>Eilat` |

      Headers copied from the data, same row AND, next row OR, `<>` for "not". Select exactly these three rows as the criteria range.
  - id: "4"
    title: "4 · A filter that returns everything"
    text: |
      Your Advanced Filter returns all 2,100 rows although the criteria look right. The most likely cause:
    options:
      - label: a
        text: |
          The criteria range you selected includes an empty row
        correct: true
        why: |
          An empty row is a test with no conditions, which every record passes; OR-ed with the other rows, everything passes.
      - label: b
        text: |
          The criteria are on one row instead of several
        why: |
          Conditions on one row are ANDed: that makes the result smaller, not everything.
      - label: c
        text: |
          The output headers are in a different order from the data
        why: |
          Output headers can be in any order; that only changes the columns shown.
      - label: d
        text: |
          The wildcard `*s*` is case sensitive
        why: |
          Wildcards are not case sensitive, and that would remove rows rather than return all of them.
    solution: |
      Select only the header row and the filled condition rows. The same blank-row trap makes a D-function ignore its criteria.
  - id: "5"
    title: "5 · One number from a criteria range"
    text: |
      The data is `A1:K2100` with the header row; Commission is column I. Your criteria range is `U1:X3`. Write the formula for the total commission of the matching records, and say how you would check it.
    solution: |
      ```excel
      =DSUM(A1:K2100,I1,U1:X3)
      ```

      Database **with** the header row, the field as its header cell (`I1`, or `"Commission"`), then the criteria range. Check: run an Advanced Filter with the same criteria and sum the extracted Commission column, or add one `SUMIFS` per criteria row. (Final assignment Q8B: **10,189.83** for the official sample.)
  - id: "6"
    title: "6 · Bands with a nested IF"
    text: |
      Order quantity is in `E2`. Label up to 10 units "Small", 11 to 30 "Medium", 31 to 45 "Large" and above 45 "Bulk". The cut-offs 10, 30, 45 are in `M2:M4` and the four labels in `N2:N5`. Write the formula.
    solution: |
      ```excel
      =IF(E2<=$M$2,$N$2,IF(E2<=$M$3,$N$3,IF(E2<=$M$4,$N$4,$N$5)))
      ```

      A waterfall from the smallest cut-off up with `<=`: the first true test wins, so the second test needs no lower bound (anything reaching it is already above 10). Three `IF`s, three closing brackets, and the final else is "Bulk".
  - id: "7"
    title: "7 · None of three cities"
    text: |
      The city is in `D2`; the three cities are in `M12:M14`. Which test is TRUE exactly when the city is **none** of the three?
    options:
      - label: a
        text: |
          `OR(D2<>$M$12,D2<>$M$13,D2<>$M$14)`
        why: |
          Always TRUE: any city differs from at least two of the three.
      - label: b
        text: |
          `NOT(D2=$M$12)`
        why: |
          Only excludes the first city.
      - label: c
        text: |
          `OR(D2=$M$12,D2=$M$13,D2=$M$14)`
        why: |
          This is TRUE when the city **is** one of the three, the opposite of what is asked.
      - label: d
        text: |
          `AND(D2<>$M$12,D2<>$M$13,D2<>$M$14)`
        correct: true
        why: |
          The city must differ from each of the three: AND of the "not equal" tests. This is the official Q2 rule 3.
    solution: |
      "Not A and not B and not C" is `AND` of `<>` tests. The trap is reading "not in Tel Aviv, Maccabim or Reut" and writing `OR`.
  - id: "8"
    title: "8 · Text to a date"
    text: |
      `B4` holds the text `3.11.2019` (day 3, month 11). Write one formula that returns the real date, and the week number of that date with weeks starting on Sunday.
    solution: |
      ```excel
      C4 =DATE(NUMBERVALUE(RIGHT(B4,4)),NUMBERVALUE(LEFT(RIGHT(B4,7),2)),NUMBERVALUE(SUBSTITUTE(LEFT(B4,2),".","")))
      D4 =WEEKNUM(C4,1)
      ```

      `RIGHT(B4,4)` = 2019; `RIGHT(B4,7)` = `11.2019`, its first two characters = 11; `LEFT(B4,2)` = `3.`, and `SUBSTITUTE` removes the dot. Result **3 November 2019**, a Sunday, in **week 45**. Cutting the month from the right is what makes one-digit days work.
  - id: "9"
    title: "9 · WEEKDAY numbering"
    text: |
      `A2` holds Monday 10 March 2025. What does `=WEEKDAY(A2)` return?
    options:
      - label: a
        text: |
          1
        why: |
          That is Monday only with return type 2, `WEEKDAY(A2,2)`.
      - label: b
        text: |
          "Monday"
        why: |
          `WEEKDAY` returns a number, never a name; look the number up to get a name.
      - label: c
        text: |
          2
        correct: true
        why: |
          The default type 1 numbers Sunday 1 to Saturday 7, so Monday is 2. This is the value the Q8 criteria use for "Monday".
      - label: d
        text: |
          7
        why: |
          7 is Saturday in the default numbering (and Sunday with type 2).
    solution: |
      Type 1 (default): Sun 1, Mon 2, Tue 3, Wed 4, Thu 5, Fri 6, Sat 7. Type 2: Mon 1 … Sun 7. Always decide which one the formula assumes.
  - id: "10"
    title: "10 · The next Friday"
    text: |
      Deliveries go out on Fridays. For an order date in `A2`, give one formula for the delivery date: the same day if it is a Friday, otherwise the next Friday. What does it return for Wednesday 12 March 2025?
    solution: |
      Friday is 6 in the default numbering, so the number of days to wait is `MOD(6 - WEEKDAY(A2), 7)`:

      ```excel
      =A2+MOD(6-WEEKDAY(A2),7)
      ```

      12 March 2025: `WEEKDAY` = 4, `MOD(2,7)` = 2, so **Friday 14 March 2025**. A Friday gives `MOD(0,7)` = 0 (same day); a Saturday gives `MOD(-1,7)` = 6 (the next Friday). Same pattern as Q5 of the final with Tuesday = 3.
  - id: "11"
    title: "11 · Complete years of service"
    text: |
      Start date in `F2` (15 August 2019). Give the number of **complete** years worked up to 14 August 2025 (in `G1`), and say what happens if you swap the two dates.
    solution: |
      ```excel
      =DATEDIF(F2,$G$1,"y")
      ```

      Returns **5**: the sixth year would be complete only on 15 August 2025. With the dates swapped (later date first) `DATEDIF` returns `#NUM!`. `YEAR($G$1)-YEAR(F2)` would give 6, which is why the year subtraction is wrong for ages and tenure.
  - id: "12"
    title: "12 · First of the month"
    text: |
      `E5` holds 15/12/2024. What does `=EOMONTH(E5,-1)+1` return?
    options:
      - label: a
        text: |
          01/12/2024
        correct: true
        why: |
          `EOMONTH(E5,-1)` is the last day of the previous month, 30/11/2024; plus one day is 1 December.
      - label: b
        text: |
          31/12/2024
        why: |
          That is `EOMONTH(E5,0)`, the end of the same month.
      - label: c
        text: |
          30/11/2024
        why: |
          That is `EOMONTH(E5,-1)` without the `+1`.
      - label: d
        text: |
          15/11/2024
        why: |
          That is `EDATE(E5,-1)`: same day, one month back.
    solution: |
      End of last month plus one = the first of this month. (The Lec 04 class sheet labels this cell "gives us end of month", which describes `EOMONTH` alone, not the whole formula.)
  - id: "13"
    title: "13 · A night shift"
    text: |
      Start time in `E2` = 21:30, end time in `F2` = 06:00 the next morning. Write a formula for the hours worked as a decimal number, and give the result.
    solution: |
      `F2-E2` is negative because the shift crosses midnight. Either the official two-case `IF`:

      ```excel
      =IF(F2-E2>0,(F2-E2)*24,24-(E2-F2)*24)
      ```

      or `=MOD(F2-E2,1)*24`. Both give **8.5** hours (21:30 to 24:00 is 2.5, plus 6). The `*24` converts the fraction of a day to hours.
  - id: "14"
    title: "14 · A weekly total of hours"
    text: |
      Four shifts of 9:45 are summed in one cell. The sum is 1.625 days. Which format shows it as 39:00?
    options:
      - label: a
        text: |
          `h:mm`
        why: |
          `h` wraps every 24 hours, so it shows 15:00, the clock reading.
      - label: b
        text: |
          `hh:mm AM/PM`
        why: |
          Also a clock format: 03:00 PM.
      - label: c
        text: |
          General
        why: |
          Shows 1.625, the number of days.
      - label: d
        text: |
          `[h]:mm`
        correct: true
        why: |
          Square brackets mean elapsed hours, no wrap at 24: 1.625 × 24 = 39.
    solution: |
      Use `[h]:mm` for any total that can pass 24 hours. For pay, multiply by 24 and keep decimal hours.
  - id: "15"
    title: "15 · A commission band table"
    text: |
      Commission rates depend on annual sales: below 50,000 pays 2%, 50,000 up to below 100,000 pays 3%, 100,000 and above pays 5%. Sales are in `C2`. Lay out the band table and write the lookup for the rate. What is the commission on 75,000?
    solution: |
      List the **lower limit** of each band (helper cells, say `M2:N4`):

      | Lower limit | Rate |
      |---|---|
      | 0 | 2% |
      | 50000 | 3% |
      | 100000 | 5% |

      ```excel
      =XLOOKUP(C2,$M$2:$M$4,$N$2:$N$4,,-1)*C2
      ```

      Match mode `-1` takes the exact key or the **next smaller** one: 75,000 is not in the list, so it steps down to 50,000 and returns 3%. Commission **2,250**. Without the `0` row, sales below 50,000 would give `#N/A`.
  - id: "16"
    title: "16 · A lookup that returns #N/A"
    text: |
      `=XLOOKUP(RIGHT(A2,1),$B$22:$B$25,$C$22:$C$25)` returns `#N/A` for every row, although employee 1045's last digit 5 is clearly in `B22:B25`. Why?
    options:
      - label: a
        text: |
          XLOOKUP needs match mode `-1` for numbers
        why: |
          Exact match is right for codes; `-1` is for bands.
      - label: b
        text: |
          `RIGHT` returns the text "5", and the codes in `B22:B25` are numbers
        correct: true
        why: |
          An exact lookup does not match text against a number. Use `VALUE(RIGHT(A2,1))`, or store the codes as text (as the official Q4 sheet does).
      - label: c
        text: |
          The ranges are locked with `$`
        why: |
          Locking is correct and needed; it doesn't change what matches.
      - label: d
        text: |
          The return array must be to the right of the lookup array
        why: |
          That is a `VLOOKUP` limitation; `XLOOKUP` can return from any column.
    solution: |
      Text functions (`LEFT`, `RIGHT`, `MID`) always return text. Convert with `VALUE` or `NUMBERVALUE` before comparing with numbers.
  - id: "17"
    title: "17 · A two-way lookup"
    text: |
      Students' full names are in `C2:C179`, the five exercise headers in `D1:H1`, the grades in `D2:H179`. The user picks a name in `L2` and an exercise in `L3` from drop-downs. Write the grade formula.
    solution: |
      ```excel
      =INDEX($D$2:$H$179,MATCH(L2,$C$2:$C$179,0),MATCH(L3,$D$1:$H$1,0))
      ```

      The first `MATCH` gives the row position, the second the column position, `INDEX` reads where they meet. The row ranges (`D2:H179`, `C2:C179`) start on the same row and the column ranges (`D2:H179`, `D1:H1`) in the same column, so the positions line up. `0` = exact match. The drop-downs are Data Validation > List with the names and the headers as sources.
  - id: "18"
    title: "18 · Sum, share and average in one pivot"
    text: |
      From a sales list, build a pivot that shows for each region: total sales, each region's share of all sales, and the average quantity per sale. Only regions North and South should show. List the steps.
    solution: |
      1. Click in the data, **Insert > PivotTable**, new sheet.
      2. **Rows:** Region.
      3. **Values:** Sales (Sum of Sales).
      4. **Values again:** Sales a second time; Value Field Settings > **Show Values As > % of Grand Total** (or % of Column Total, the same here with no column field).
      5. **Values:** Quantity; Value Field Settings > **Summarize Values By > Average**.
      6. Region drop-down in the pivot: tick only North and South.

      The shares add to 100% of what is shown, and the Average grand total is the average of all the remaining records, not the average of the two region averages.
  - id: "19"
    title: "19 · A slicer that ignores a pivot"
    text: |
      You inserted a Category slicer for one pivot, then built a second pivot from the same data. Clicking the slicer changes only the first pivot. What fixes it?
    options:
      - label: a
        text: |
          Refresh All
        why: |
          Refresh reloads the source data; it doesn't connect a slicer.
      - label: b
        text: |
          Put both pivots on the same sheet
        why: |
          Being on the same sheet doesn't connect them.
      - label: c
        text: |
          Report Connections on the slicer: tick the second pivot
        correct: true
        why: |
          A slicer or timeline drives only the pivots ticked in Report Connections (PivotTable Analyze > Filter Connections). Both pivots must share the same pivot cache to appear in the list.
      - label: d
        text: |
          Insert a Timeline instead
        why: |
          A timeline filters dates, and has the same connection rule.
    solution: |
      New pivots are never connected automatically, even next to the old one (the class note in Lec 07, Sheet6).
  - id: "20"
    title: "20 · Write a macro"
    text: |
      Scores are in `A2:A51`. Write (don't record) a macro that asks the user for a pass mark with an InputBox titled "Grades", writes "Pass" or "Fail" next to each score in column B, and puts the number of passes in `D2` under the header "Passed" in `D1`.
    solution: |
      ```vba
      Sub grades()
          Dim passMark As Integer
          Dim i As Integer
          Dim passed As Integer
          passMark = InputBox("Enter the pass mark:", "Grades")
          passed = 0
          For i = 2 To 51
              If Cells(i, 1) >= passMark Then
                  Cells(i, 2) = "Pass"
                  passed = passed + 1
              Else
                  Cells(i, 2) = "Fail"
              End If
          Next i
          Range("D1") = "Passed"
          Range("D2") = passed
      End Sub
      ```

      `Dim` the input, the row counter and the tally; `InputBox(prompt, title)`; a `For` loop where `i` is the row, so `Cells(i, 1)` is the score and `Cells(i, 2)` the cell beside it; the counter goes up inside the `If`. Then add a button (Developer > Insert > Button > Assign Macro) and save as `.xlsm` or `.xlsb`.
  - id: "21"
    title: "21 · Colour the whole row"
    text: |
      The table is `A3:F202`; branch is column E. Two branch names are in `M3` and `M4`. Which cells do you select, and what formula rule colours the whole row of members in either branch?
    solution: |
      Select the **whole table** `A3:F202` (the active cell `A3`), then Conditional Formatting > New Rule > Use a formula:

      ```excel
      =OR($E3=$M$3,$E3=$M$4)
      ```

      The rule is written for the top-left cell. `$E3` locks the column, so every cell in a row tests that row's branch; the row number stays free so it moves down. `$M$3`, `$M$4` are fully locked helper cells. Without the `$` before E, cell B3 would test F3 and the colouring breaks.
  - id: "22"
    title: "22 · Explain it (the Zoom check)"
    text: |
      In the proficiency test you're asked: "Explain every part of `=IF(AND(H2>=$M$2,H2<=$M$3,OR(G2=$M$4,G2=$M$5)),$M$6,$M$7)*H2`, and why some references have `$` and others don't." Say your answer out loud, then compare.
    solution: |
      A model answer:

      - "`H2` is this employee's salary and `G2` the service type. They have no `$` so they move down a row when I fill the formula, and each row tests its own employee."
      - "`$M$2` and `$M$3` are the lower and upper salary bounds in helper cells below the data; `$M$4`, `$M$5` the two service types; `$M$6` the bonus rate and `$M$7` the fallback rate. They're fully locked because every row must use the same cells."
      - "`AND` needs all three: salary at least the lower bound, at most the upper bound, and the `OR`, which is true if the service is either type."
      - "If that holds the `IF` returns the bonus rate, otherwise the fallback rate, and multiplying by `H2` turns the rate into a shekel amount."
      - "I put the constants in cells so a change of policy is a one-cell edit, which the brief requires."

      If you can do this for each question in your file, the check is a formality.
---

> Work in a blank workbook or on the class files: type the formula, then reveal. The multiple-choice cards check one idea each; the open ones are the ones the assignment marks. The last card is practice for the short Zoom check the brief warns about.
