---
title: "Final Assignment (Semester A, 2025)"
type: past-paper
status: worked-solution
exam: "Final Assignment, Excel for Data Analysis, Semester A 2025"
course: "Excel for Data Analysis"
instructor: unknown
semester: 1
year: 1
source_doc: /papers/excel-data-analysis/final-assignment-questions.pdf
tags:
  - excel-data-analysis
  - past-paper
  - worked-solution
  - date-functions
  - if-function
  - conditional-formatting
  - sorting
  - autofilter
  - xlookup
  - advanced-filter
  - database-function
  - pivot-table
  - slicer
  - pivot-chart
  - vba-macro
  - inputbox
  - for-next-loop
aliases:
  - Excel Final Assignment
  - PP01 Excel
subject: excel-data-analysis
in_scope: true
questions:
  - id: "q1"
    title: "Q1: Fixing text dates and week numbers (8 points)"
    text: |
      **Sheet "Question1".** Column B contains dates, but because of a typing error Excel did not recognise them as dates (for example `09.12.2007` in cell B5). The dates were typed with dots instead of slashes.

      **A.** Display the correct date in column C using Excel functions (for example, in C3 the value should be 27/04/2021 rather than 27.04.2021).

      **B.** Calculate the week number of the year for each date in column D.
    solution: |
      > Tests [[Date Serial Number]]s and text-to-date conversion. Theory: [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]].

      **Why the dates are text.** A value typed as `27.04.2021` is not in a date format Excel recognises here, so it stays text: it is left-aligned and cannot be calculated with. The fix is to cut the text into day, month and year and rebuild a real date with [[DATE]].

      **A. Official formula** (the one in column C of the solution):

      ```
      =DATE(NUMBERVALUE(RIGHT(B4,4)),
            NUMBERVALUE(LEFT(RIGHT(B4,7),2)),
            NUMBERVALUE(SUBSTITUTE(LEFT(B4,2),".","")))
      ```

      (one line in the cell). Piece by piece, for `B4 = 27.04.2021`:

      | Part | What it does | Result |
      |---|---|---|
      | `RIGHT(B4,4)` | last 4 characters, the year | `2021` |
      | `LEFT(RIGHT(B4,7),2)` | take the last 7 characters (`04.2021`), then the first 2 | `04` |
      | `LEFT(B4,2)` | first 2 characters, the day | `27` |
      | `SUBSTITUTE(...,".","")` | remove a stray dot when the day has one digit (`9.` becomes `9`) | `27` |
      | `NUMBERVALUE(...)` | convert the text pieces to numbers | 2021, 4, 27 |
      | `DATE(year,month,day)` | build the real date | 27/04/2021 |

      The `SUBSTITUTE` step is what makes it work for one-digit days such as `9.05.2012`. The month and year are always at a fixed distance from the right-hand end, which is why they are cut with `RIGHT`. Format column C as a date. (The data also contains the typo `9.012.2007`; because the month is taken from the right-hand end, the formula still returns 9 December 2007.)

      **B. Week number.** `D4` = `=WEEKNUM(C4,1)`. The second argument `1` means the week starts on Sunday. For 27/04/2021 this is week 18. See [[WEEKNUM]].

      Official results: 28 dates, check cell shows the date total 1,127,641 and the week total 872.
    related_terms: ["date", "datevalue", "weeknum", "date-serial-number"]
  - id: "q2"
    title: "Q2: Employee IDs and a conditional bonus (5 points)"
    text: |
      **Sheet "Question2".**

      **A.** Add the "Employee ID" to column A: the first number is the last 4 digits of your own ID number; each next number is the previous plus your age (for example, with first number 2935 and age 20 the second is 2955). Freeze the headers (row 1) and the first row of data.

      **B.** Add the header "Bonus" to column J. Column J shows the bonus amount in NIS (not a percentage):

      - Gross monthly salary between 7,000 and 9,000 inclusive AND service type "Improved" or "Standard": 10% of the gross salary.
      - Gross monthly salary between 8,500 and 11,000 inclusive AND service type "Full" or "Basic": 15%.
      - Employees not in "Tel Aviv-Yafo", "Maccabim" or "Reut": 7%.
      - All others: 4%.

      Use only the IF function, combining AND and OR. Put the external cells below the database.
    solution: |
      > Tests nested [[IF Function]]s with [[AND Function]] and [[OR Function]]. Theory: [[Lec_02-IF Statements & Logical Functions]].

      **A. The ID series.** Type the first number in `A2` (the last four digits of the personal ID), put your age in a helper cell, and use `A3` = `=A2+age_cell`, copied down (the official sample uses `=A2+20`). Then click `A3` and **View > Freeze Panes > Freeze Panes**: rows 1 and 2 stay in view.

      **B. The bonus.** The thresholds and percentages go in an "external cells" block next to the table (the official file uses `M2:M16` for the bounds and names, and the percentages 10%, 15%, 7%, 4% in `M6`, `M11`, `M15`, `M16`):

      | External cell | Content |
      |---|---|
      | `M2`, `M3` | `7000`, `9000` |
      | `M4`, `M5` | `Improved`, `Standard` |
      | `M6` | `0.1` |
      | `M7`, `M8` | `8500`, `11000` |
      | `M9`, `M10` | `Full`, `Basic` |
      | `M11` | `0.15` |
      | `M12`, `M13`, `M14` | `Tel Aviv-Yafo`, `Maccabim`, `Reut` |
      | `M15` | `0.07` |
      | `M16` | `0.04` |

      Official formula in `J2` (H is the gross salary, G the service type, D the city):

      ```
      =IF(AND(H2>=$M$2,H2<=$M$3,OR(G2=$M$4,G2=$M$5)),$M$6,
         IF(AND(H2>=$M$7,H2<=$M$8,OR(G2=$M$9,G2=$M$10)),$M$11,
         IF(AND(D2<>$M$12,D2<>$M$13,D2<>$M$14),$M$15,$M$16)))*H2
      ```

      (one line in the cell). Reading it: the nested `IF` tests the three rules in the order they are listed; the first rule that is true decides the percentage, and the result is multiplied by the salary `H2` to give the bonus **amount**. Rule 3 uses `<>` ("not equal") with `AND`: a city that is none of the three. The first employee (salary 5,600, "Improved", Tel Aviv-Yafo) fails rules 1 and 2 and is in a listed city, so gets 4%: `224`.

      The check in column O (`=J2/H2`) shows the percentage each employee received. I re-computed all 178 employees with this logic and every bonus matches the official column.

      > [!tip] Order matters
      > A salary of 8,700 with service "Basic" fails rule 1 (wrong service) but passes rule 2. A salary of 8,700 with "Improved" is caught by rule 1 and never reaches rule 2. Test the more specific rule first.
    related_terms: ["nested-if", "if-function", "and-function", "or-function", "absolute-reference"]
  - id: "q3"
    title: "Q3: Conditional formatting, sorting by colour, filtering by colour (15 points)"
    text: |
      **Sheet "Question3".**

      **A. Conditional formatting (5).** Add a serial number to column A: the first is your age followed by three zeros (age 24 gives 24000), then jumps of your age (24024, ...). Format "Total Sales in NIS" (column H) dynamically: a brand with total sales at or above the average gets a yellow background and blue font; a brand with total sales at or below your age multiplied by 32 gets a green background and white font. Helper cells below the database.

      **B. Sorting (5).** Duplicate the sheet as "Q3-Sort". Sort the brands: first those whose Total Sales are formatted yellow with blue font; then by category from Z to A; then by order number from largest to smallest.

      **C. Filtering (5).** Duplicate "Question3" as "Q3-Filter". Keep only the brands that meet ALL of: total sales cell formatted yellow with blue font; quantity in units 45 or more; brand name starts with the letter pe or the letter mem; ID greater than the average ID.
    solution: |
      > Tests [[Conditional Formatting]], [[Sorting]] by colour and [[AutoFilter]] by colour. Theory: [[Lec_01-Sorting, Filters & Database Functions]] (sort and filter by colour).

      **A. Serial numbers and rules.** With age 29 (the official sample): `A2` = `29000`, `A3` = `=A2+29`, copied down. The helper cells sit beside the table:

      | Cell | Content | Purpose |
      |---|---|---|
      | `M2` | `=AVERAGE(H2:H2344)` | the average total sales (1,746.18 in the sample) |
      | `M3` | `=29*32` (better: `=age_cell*32`) | the low threshold (928 for age 29) |

      Select `H2:H2344` and add two cell-value rules:

      1. **Greater than or equal to** `=$M$2`: yellow fill, blue font.
      2. **Less than or equal to** `=$M$3`: green fill, white font.

      Referencing the helper cells means changing the age or the data updates the colours (this is "dynamic" formatting).

      **B. Sort by colour.** Duplicate the sheet, then **Data > Sort > Add Level**:

      | Level | Sort on | Order |
      |---|---|---|
      | 1 | column H, **Cell Color** (the yellow) | On Top |
      | 2 | Category | Z to A |
      | 3 | Order number | Largest to Smallest |

      Because the sort uses the rule-based colour, it only works while the conditional formatting is still on the sheet.

      **C. Filter by colour.** Switch on the filter and apply four filters, which combine with AND (a filter on each column narrows the others):

      1. column H: **Filter by Color** > the yellow fill.
      2. quantity column: **Number Filters > Greater Than Or Equal To** `45`.
      3. brand: **Text Filters > Begins With**, the first letter, then add an **Or** condition for the second letter.
      4. ID (the serial-number column A): **Number Filters > Greater Than** the average ID. Put `=AVERAGE(A2:A2344)` in a helper cell (62,959 in the sample) and type its value into the filter.

      The sheet's total of the visible sales is `=SUBTOTAL(9,H2:H2347)`, which counts only the rows left visible by the filter (81,317.26 in the official sample). [[SUBTOTAL]] is the right function here; `SUM` would add the hidden rows too.
    related_terms: ["conditional-formatting", "sorting", "autofilter", "subtotal", "wildcard"]
  - id: "q4"
    title: "Q4: Hourly wage by rank and monthly salary (10 points)"
    text: |
      **Sheet "Question4".** For each private teacher:

      1. **Hourly wage.** The last digit of the instructor's ID is the rank (for example employee 1045 is senior because the last digit is 5). Table 1 (from cell A21) gives the wage per rank. Calculate the hourly wage in NIS in column G using XLOOKUP.
      2. **Monthly salary.** Calculate the monthly salary in column H from the working hours and the hourly wage. Assume 30 working days in a month, and that the hours in the sheet are the regular daily hours (for example Gadi works 18:00 to 22:00 every day of the month). The calculation must be dynamic. External cells below the database.
    solution: |
      > Tests [[XLOOKUP]] with a computed lookup value and time arithmetic. Theory: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] and [[Lec_05-Time Functions & Protecting Cells]].

      **1. Hourly wage.** Table 1 maps a **rank code** to a wage:

      | rank | rank code | hourly wage |
      |---|---|---|
      | beginner | 1 | 40 |
      | experienced | 3 | 60 |
      | senior | 5 | 80 |
      | super | 7 | 100 |

      The lookup value is the last character of the ID:

      ```
      =XLOOKUP(RIGHT(A2,1),$B$22:$B$25,$C$22:$C$25)
      ```

      `RIGHT(A2,1)` extracts the last digit, `$B$22:$B$25` is the code column, `$C$22:$C$25` the wages to return. Exact match is the default, which is right for codes.

      > [!warning] Text versus number
      > `RIGHT` returns **text** (`"1"`), and an exact lookup does not match text against a number. In the official sheet the codes in `B22:B25` are stored as text so it works. If your codes are real numbers, use `=XLOOKUP(VALUE(RIGHT(A2,1)),...)` or `--RIGHT(A2,1)`.

      **2. Monthly salary.** Hours worked per day = end minus start, times 24. A night shift that ends after midnight has an end time smaller than the start, so the difference would be negative; the official formula covers both cases:

      ```
      =IF((F2-E2)>0,(F2-E2)*24,24-(E2-F2)*24)*30*G2
      ```

      That is hours per day, times 30 days, times the hourly wage in `G2`. The "30" should sit in an external cell rather than inside the formula. For the first instructor (18:00 to 22:00, wage 40): `4 * 30 * 40 = 4,800`. The monthly salaries of the 15 instructors total 161,730 NIS (the row-18 totals in the official file).

      Check of the two-case formula: end 08:00, start 20:00 gives `(8-20)` negative, so `24 - (20-8) = 12` hours.
    related_terms: ["xlookup", "exact-match", "time-as-a-fraction-of-a-day", "if-function", "absolute-reference"]
  - id: "q5"
    title: "Q5: Bridge-club renewal dates (10 points)"
    text: |
      **Sheet "Question5".**

      **A.** Every member renews the annual membership on a **Tuesday**. Calculate in column G the nearest renewal date for each member (always one year ahead) from the membership start date in column F. Example: Gadi Guri, start 20/10/2021, should renew on 20/10/2022, which is a Thursday, so he renews on Tuesday 25/10/2022. The solution must be a **single, dynamic formula** in column G only, with no helper columns.

      **B.** Add a helper cell with your date of birth. Fill the inquiry date (column H): the first cell is the day and month of your birth in the year 2025; each next date is one day later (birth date 10/4/2003 gives 10/4/2025, 11/4/2025, ...). External cells below the database.
    solution: |
      > Tests [[WEEKDAY]] arithmetic and date building. Theory: [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]].

      **A. Next Tuesday on or after the anniversary.** One year ahead is `F4+365`. Then step forward to the next Tuesday. [[WEEKDAY]] gives Sunday = 1 ... Tuesday = 3 ... Saturday = 7, so the number of days to wait is `MOD(3 - WEEKDAY(date), 7)`, which is 0 when the date is already a Tuesday:

      ```
      =F4+365+MOD(3-WEEKDAY(F4+365),7)
      ```

      Check on the example: `20/10/2021 + 365 = 20/10/2022`, a Thursday, `WEEKDAY = 5`; `MOD(3-5,7) = 5`; `20/10/2022 + 5 = 25/10/2022`, a Tuesday.

      `MOD(...,7)` is what keeps the shift between 0 and 6 days, so the date never moves backwards and never moves a whole week without need.

      > [!warning] Reconstructed formula
      > The official workbook shows several alternative formulas in side columns (labelled Option A and others) but the stored formula text could not be read from the binary file. The formula above is the standard one for this rule; I checked it against all 199 official renewal dates in column G and every one matches.
      >
      > Two things to know: `+365` ignores leap years (the brief says "one year ahead"; `EDATE(F4,12)` is the calendar-exact alternative, a day different around 29 February); and the official sheet adds check columns (the renewal falls on a Tuesday, how many days after the anniversary it is, and that it is not less than a year after the start).

      **B. Inquiry dates.** Put the date of birth in a helper cell (the sample uses `R4` = 1 January 1995). First inquiry date:

      ```
      H4 = DATE(2025,MONTH($R$4),DAY($R$4))
      H5 = H4+1     (copied down)
      ```

      `MONTH` and `DAY` pull the birthday's month and day, and `DATE` rebuilds it in 2025. In the official sample `H4` is 1 January 2025.
    related_terms: ["weekday", "date", "month", "day", "date-serial-number", "edate"]
  - id: "q6"
    title: "Q6: Write a macro with InputBox, a loop and an IF (15 points)"
    text: |
      **Sheet "Question6"** (rename the sheet to the last 4 digits of your ID). **Write** a macro; do **not** record any part of it, not even the headers.

      1. Get a number between 1 and 200 from the user.
      2. For each value in column A check whether it is greater than, less than or equal to the number.
      3. Show in column B: `Greater`, `Less` or `Equal` accordingly.
      4. Show summaries: headers `Greater`, `Less`, `Equal` in D1, E1, F1, and the number of cells of each kind in D2, E2, F2.
      5. Add a button linked to the macro and activate it.

      Use a **For loop**, an **If statement** and an **InputBox** (the window name of the InputBox is the last 3 digits of your ID). Save the file as XLSB or XLSM. Only commands taught in the course may be used.
    solution: |
      > Tests hand-written VBA. Theory: [[Lec_08-VBA Macros]] (sections 5 and 6: InputBox, loop, nested IF).

      The official macro:

      ```vba
      Sub Question6()
          Dim inputNumber As Integer
          Dim i As Integer
          Dim largerCount As Integer
          Dim smallerCount As Integer
          Dim equalCount As Integer

          inputNumber = InputBox("Enter a number between 1 and 200:", "789")

          largerCount = 0
          smallerCount = 0
          equalCount = 0

          For i = 1 To 100
              If IsEmpty(Cells(i, 1)) Then
                  GoTo SkipCell
              End If

              If Cells(i, 1) > inputNumber Then
                  Cells(i, 2) = "Larger"
                  largerCount = largerCount + 1
              ElseIf Cells(i, 1) < inputNumber Then
                  Cells(i, 2).Value = "Smaller"
                  smallerCount = smallerCount + 1
              Else
                  Cells(i, 2) = "Equal"
                  equalCount = equalCount + 1
              End If
      SkipCell:
          Next i

          Cells(1, 4) = "Larger"
          Cells(1, 5) = "Smaller"
          Cells(1, 6) = "Equal"
          Cells(2, 4) = largerCount
          Cells(2, 5) = smallerCount
          Cells(2, 6) = equalCount
      End Sub
      ```

      **How it works.**

      - `Dim` declares the variables ([[Variable Declaration in VBA]]). Three counters start at 0 so they can be added to.
      - [[InputBox]] asks for the number; its second argument is the window title (the last 3 digits of the ID in the brief; the sample uses `789`).
      - A [[For Next Loop]] visits row `i` from 1 to 100; `Cells(i, 1)` is the number in column A of row `i`, and `Cells(i, 2)` the cell next to it where the verdict goes.
      - The `If / ElseIf / Else` handles the three cases and adds 1 to the matching counter.
      - After the loop the headers and the three counts are written into row 1 and row 2.
      - Add a button ([[Macro Button]]) and assign `Question6`. Save as `.xlsb` or `.xlsm` ([[Macro-Enabled Workbook]]).

      > [!warning] Points where the official code differs from the brief
      > - It writes `Larger` and `Smaller` where the brief asks for `Greater` and `Less` (headers and verdicts). Follow the brief's words in your own answer.
      > - The loop runs to the fixed row 100. The `IsEmpty` check with `GoTo` skips blank rows; a tidier version loops to the last used row, `For i = 1 To Cells(Rows.Count, 1).End(xlUp).Row`.
      > - Nothing checks that the user's number is between 1 and 200.
      > - The `GoTo` label is not in the course material; an `If Not IsEmpty(...) Then` block does the same job.
    related_terms: ["vba-macro", "inputbox", "for-next-loop", "variable-declaration-in-vba", "macro-button", "macro-enabled-workbook", "nested-if"]
  - id: "q7"
    title: "Q7: Pivot table, slicer and pivot chart (15 points)"
    text: |
      **Sheet "Question7".**

      **A.** Add a new series of numbers to column A: the first number is your date of birth in six digits (19/04/2005 gives 190405), then jumps of 3 (190408, ...).

      **B.** In a new sheet named for the day and month of your birth (16/6/2004 gives `1606`), show a pivot table that gives, for each urgency and each shipping method: the sum of "Total Sales in NIS", that sum as a percentage of the total, and the average of "Quantity of the Brand in units". Show only the urgencies critical and high. Add a Slicer on "Quantity of the Brand in units" and show brands with 45 to 50 units inclusive.

      **C.** Duplicate the sheet from B and rename it to your age. In the duplicated pivot table remove the percentage and the average, leaving only the sum of Total Sales in NIS. Build a two-dimensional column chart from it and move the chart to a new sheet "Sales Chart". Title: "Brand Report for" followed by your year of birth. Change the column colour, add data labels to all columns and a legend, put the Y axis on the right, and set the major unit of the Y axis to 1325.
    solution: |
      > Tests pivot tables, slicers and charts. Theory: [[Lec_07-Pivot Tables]].

      **A. The series.** Type the first number (for example `10195` in the sample, from a birth date with six digits), then `A3` = `=A2+3`, copied down.

      **B. The pivot table.** Select the data, **Insert > PivotTable** into a new sheet and rename the sheet (the official sample sheet is called `0101`, a 1 January birthday).

      | Pivot area | Field |
      |---|---|
      | Rows | Shipping method, then Urgency |
      | Values 1 | Sum of Total Sales in NIS |
      | Values 2 | Total Sales in NIS again, [[Show Values As]] **% of Grand Total** |
      | Values 3 | Quantity of the brand in units, [[Value Field Settings]] **Average** |
      | Urgency filter | In the Urgency drop-down, tick only critical and high |

      Insert a [[Slicer]] on **Quantity of the Brand in units** (**PivotTable Analyze > Insert Slicer**) and select the values 45 to 50. A slicer is a button panel that filters the pivot visually; Ctrl-click or drag selects a range.

      Official result with those filters:

      | Shipping method | Urgency | Sum of Total Sales | % of total | Avg quantity |
      |---|---|---|---|---|
      | air mail | critical | 17,804.23 | 16.36% | 48.45 |
      | air mail | high | 35,087.02 | 32.23% | 48.06 |
      | express mail | high | 6,175.78 | 5.67% | 49.00 |
      | regular mail | high | 49,788.47 | 45.74% | 48.00 |
      | Grand total | | 108,855.50 | 100% | 48.20 |

      **C. The chart.** Duplicate the sheet (the official sample sheet is named `29`, the age). Drag the percentage and the average fields out of Values so only the sum remains (the official copy shows air mail 52,891.25 and express mail 6,175.78 and regular mail 49,788.47 with the same grand total 108,855.50). Then **PivotTable Analyze > PivotChart > Clustered Column**.

      Chart steps, in the order of the brief:

      1. Right-click the chart > **Move Chart > New sheet**, name `Sales Chart`.
      2. **Chart Title:** the text "Brand Report for" and the birth year.
      3. Select a column, **Format Data Series > Fill** for the colour.
      4. **Chart Elements (+) > Data Labels** (all columns), **Legend**.
      5. Double-click the **horizontal** (category) axis, **Axis Options > Vertical axis crosses > At maximum category**: this moves the value axis to the right. Then double-click the vertical axis and set **Major unit** to `1325`.

      Related: [[Pivot Chart]] and [[Pivot Table]].
    related_terms: ["pivot-table", "slicer", "show-values-as", "value-field-settings", "pivot-chart", "pivot-table-fields-pane"]
  - id: "q8"
    title: "Q8: Advanced Filter and a conditional sum (21 points)"
    text: |
      **Sheet "Question8".**

      **A. Advanced Filter (6).** Build the criteria starting at M1: the software begins with `p` or contains `s`; AND the price per unit is between 100 and 700 inclusive; AND the sale took place on a Monday. In the output area starting at M10, show these headers in this order: Branch, Date, Total Income, SalesPerson.

      **B. Conditional sum (6).** In cell U5 calculate the sum of the commission (column I) according to criteria built from U1: the branch contains the letter `L` or is "Maccabim"; AND the quantity is between your age and 40 inclusive; AND the sale was made in 2022. External cells below the database.
    solution: |
      > Tests [[Advanced Filter]], [[Criteria Range]] and [[DSUM]]. Theory: [[Lec_01-Sorting, Filters & Database Functions]] (section 5 and the database functions in section 6).

      **Helper columns first.** The conditions on "Monday" and "2022" are about the date, not the date itself, so the official file adds two helper columns next to the data: `J` header `WEEKDAY` with `=WEEKDAY(A2)` and `K` header `YEAR` with `=YEAR(A2)`. Excel's default weekday numbering gives Monday = 2.

      **A. Criteria range `M1:P3`.** "Begins with p **or** contains s" is two alternatives, so two rows. The price range and the weekday are AND, so they are repeated on both rows. Price needs the same header twice (lower and upper bound):

      | | M | N | O | P |
      |---|---|---|---|---|
      | 1 | Software | UnitPrice | UnitPrice | WEEKDAY |
      | 2 | `p*` | `>=100` | `<=700` | `2` |
      | 3 | `*s*` | `>=100` | `<=700` | `2` |

      `p*` is a [[Wildcard]] for "starts with p"; `*s*` means "contains s" (wildcards ignore upper and lower case).

      Then **Data > Advanced > Copy to another location**, list range = the table including helper columns, criteria range `M1:P3`, and copy to `M10:P10` where the four output headers Branch, Date, Total_Income and SalesPerson are already typed in that order. Only those four columns are extracted.

      The official file includes a check: `=DSUM(A1:K2100,H1,'Question8'!$M$1:$P$3)` returns **192,588**, the same as the sum of the extracted Total Income column.

      **B. Criteria range `U1:X3` and the sum.** "Branch contains L or is Maccabim" is again two rows:

      | | U | V | W | X |
      |---|---|---|---|---|
      | 1 | Branch | Quantity | Quantity | YEAR |
      | 2 | `*L*` | `>=29` | `<=40` | `2022` |
      | 3 | Maccabim | `>=29` | `<=40` | `2022` |

      (29 is the sample age; the lower quantity bound is your own age.) The sum goes in `U5`:

      ```
      =DSUM(A1:K2100,I1,U1:X3)
      ```

      [[DSUM]] adds the Commission column (`I1` names the field) over the records that satisfy the criteria range. Official result: **10,189.83**. The official sheet also confirms it with a two-part `SUMIFS` (one `SUMIFS` per branch row, added together), which gives the same value.

      > [!warning] A range slip in the official DSUM
      > The official `U5` uses the database range `A1:K1528`, while the data runs to row 2100 (the other formulas in the sheet use `A1:K2100`). Use the whole table. The cached result 10,189.83 equals the `SUMIFS` check, so the sample data happens to give the same answer.
    related_terms: ["advanced-filter", "criteria-range", "dsum", "database-function", "wildcard", "weekday", "year"]
  - id: "q9"
    title: "Q9: Member numbers, full name and row highlighting (10 points)"
    text: |
      **Sheet "Question9".**

      - Add a series of membership numbers to column A: start from your age, jumps of 3 (age 22 gives 22, 25, ...).
      - Create a new column G showing the full name of the member using a **text function** (no Flash Fill).
      - Using conditional formatting, colour the **whole row** of members who belong to the "Eilat" or "Tiberias" branch, in a colour of your choice. Helper cells below the database.
    solution: |
      > Tests text joining and a row-wide [[Conditional Formatting]] rule. Theory: [[Lec_01-Sorting, Filters & Database Functions]] (conditional formatting) and [[Lec_02-IF Statements & Logical Functions]] (OR).

      **The series.** First cell = your age (in the sample, 29), next `=B3+3`, copied down (the official file puts this series in column B, because column A already holds the member IDs).

      **Full name.** Join first name, a space and last name. The official sheet gives the full name in three columns (H, J and K); the variants below all return the same text:

      ```
      =CONCAT(C3," ",D3)
      =C3&" "&D3
      =TEXTJOIN(" ",TRUE,C3,D3)
      ```

      Any of them gives `Gadi Guri`. `&` is the simplest; `CONCAT` and `TEXTJOIN` are text functions in the strict sense the brief asks for. (The official file also contains a `TEXT(C3,"@")&" "&TEXT(D3,"@")` variant.) The formulas read from the file are `CONCAT` and the `TEXT` one; `&` and `TEXTJOIN` are standard equivalents.

      **Row highlighting.** Put the two branch names in helper cells (the official helpers are in `M3` and `M4`), select the whole table (rows 3 to 202), and add a formula rule:

      ```
      =OR($E3=$M$3,$E3=$M$4)
      ```

      Column E is the branch. `$E3` locks the column but not the row, so every row tests its own branch; the fill spreads over the whole selected row.

      > [!warning] Official helper cells do not match the brief
      > The brief names "Eilat" and "Tiberias". The official helper cells hold "Eilat" and "Beer Sheba". Use the two branches the brief names.
    related_terms: ["conditional-formatting", "or-function", "absolute-reference"]
---

> [!info] About this paper
> This is the take-home **Final Assignment** (Semester A, 2025), a single Excel workbook of nine questions solved on the lecturer's database. Each student works with their own ID number, age and birth date, so several answers below use the **sample values** from the official solution (age 29, birth date 1 January 1995, a placeholder ID). Swap in your own numbers when you practise. The assignment forbids AI tools and help from others, and asks for efficient, general formulas, with helper cells (not typed constants) below each database.

> [!info] Downloads
> - [Question sheet (PDF)](/papers/excel-data-analysis/final-assignment-questions.pdf)
> - [The database to start from: Assignment db (xlsb)](/papers/excel-data-analysis/final-assignment-database.xlsb): one sheet per question.
> - [Official suggested solution (xlsb)](/papers/excel-data-analysis/final-assignment-official-solution.xlsb): open with macros enabled only if you trust the source; the Q6 macro is printed in the solution above.

<!--questions-->

## How the questions map to the syllabus

| Question | Topic | Where it is taught |
|---|---|---|
| Q1 | Text to date, week number | [[Lec_03-Calendars & Date Calculations]], [[Lec_04-Date Functions, Named Ranges & Data Validation]] |
| Q2 | Nested IF with AND/OR | [[Lec_02-IF Statements & Logical Functions]] |
| Q3 | Conditional formatting, sort and filter by colour | [[Lec_01-Sorting, Filters & Database Functions]] |
| Q4 | XLOOKUP and time arithmetic | [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]], [[Lec_05-Time Functions & Protecting Cells]] |
| Q5 | Weekday arithmetic, building dates | [[Lec_03-Calendars & Date Calculations]], [[Lec_04-Date Functions, Named Ranges & Data Validation]] |
| Q6 | VBA: InputBox, For loop, If | [[Lec_08-VBA Macros]] |
| Q7 | Pivot table, slicer, pivot chart | [[Lec_07-Pivot Tables]] |
| Q8 | Advanced Filter, DSUM | [[Lec_01-Sorting, Filters & Database Functions]] |
| Q9 | Text functions, row formatting | [[Lec_01-Sorting, Filters & Database Functions]], [[Lec_02-IF Statements & Logical Functions]] |

> [!tip] Practice
> The homework problem sets (HA 1 to HA 9) rehearse each skill, in particular HA 4 and HA 5 (IF logic and dates), HA 7 (lookups), HA 8 (pivot tables) and HA 9 (macros).
