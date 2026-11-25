---
title: "HA 9"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-9-questions.pdf
official_solution: /papers/excel-data-analysis/ha-9-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle) for the salespeople table, plus a separate macro workbook (ha-9-macro-solution.xlsm, 'Another Solution to Home Assignment 9') for exercises 10 and 11. The sample salespeople are fictional."
tags:
  - excel-data-analysis
  - problem-set
  - named-range
  - if-function
  - nested-if
  - or-function
  - and-function
  - vba-macro
  - macro-recorder
  - inputbox
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Rename and recolour.** Rename the sheet "Salespeople Data" to "Salespeople Analysis" and make the tab colour green.
    solution: |
      Right-click the tab, **Rename** to `Salespeople Analysis`, then **Tab Color > green**. No formulas.

      The table has 60 salespeople in rows 4 to 63: last name, first name, area, seniority (years), full-price units sold (column F) and discounted units sold (column G).
    related_terms: []
  - id: "2"
    text: |
      **Total units sold.** How many phones did each salesperson sell in 2024, counting both full-price and discounted units? Show it in column H, header "Total Units Sold".
    solution: |
      `H4` = `=G4+F4`, copied down to row 63. (`=SUM(F4:G4)` is equivalent.)

      The first salesperson sold 800 full-price and 200 discounted units, so 1,000 in total. Over all 60 people the total is 25,442 units.
    related_terms: ["absolute-reference"]
  - id: "3"
    text: |
      **Annual commission.** The commission is 199 NIS per full-price phone and 49 NIS per discounted phone. Show each salesperson's annual commission in column I, header "Annual Commission". Put the auxiliary cells and calculations from cell B72.
    solution: |
      The two rates go in labelled helper cells under the table, not inside the formula:

      | Cell | Content |
      |---|---|
      | `B73`, `C73` | `Full Price`, `199` |
      | `B74`, `C74` | `Discount`, `49` |
      | `I4` | `=F4*$C$73+G4*$C$74` |

      `$C$73` and `$C$74` are [[Absolute Reference]]s, so they stay put as the formula is copied down. First salesperson: `800 * 199 + 200 * 49 = 169,000` NIS. The department total is 4,279,508 NIS.

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (absolute references).
    related_terms: ["absolute-reference"]
  - id: "4"
    text: |
      **Commission in euro.** The board in Europe also needs the annual commission in euro, in column J with the header "Annual Commission in Euro", using the official euro exchange rate at the time of the exercise preparation. Auxiliary cells from B77.
    solution: |
      Put the rate in one cell and divide: `B78` = `3.72` (shekels per euro, the rate the official file uses), and

      ```
      J4 = I4/$B$78
      ```

      First salesperson: `169,000 / 3.72 = 45,430.11` euro. Dividing, not multiplying, because the rate is "shekels per euro" and the commission is in shekels.

      > [!info] The rate is an input
      > The brief says "the official rate at the time of preparation" and does not give a number. The official file uses 3.72. Whatever rate you type, it should sit in a labelled cell.
    related_terms: ["absolute-reference"]
  - id: "5"
    text: |
      **Name the ranges.** Give appropriate names to the data ranges in columns F to J. For example, cells F4 to F64 should be named "Full_Price".
    solution: |
      Select the cells of one column (for example `F4:F63`), click in the **Name Box** (left of the formula bar), type the name and press Enter ([[Named Range]]). Repeat for the five columns. Names cannot contain spaces, so use underscores.

      | Column | Example name (official file) |
      |---|---|
      | F | full-price units (a Hebrew name in the file; `Full_Price` in the brief) |
      | G | `Discounted_Units_Sold` |
      | H | total units sold |
      | I | annual commission in NIS |
      | J | annual commission in euro |

      Related: [[Lec_04-Date Functions, Named Ranges & Data Validation]] (section 3, named cells and ranges).
    related_terms: ["named-range"]
  - id: "6"
    text: |
      **Summary rows.** At the bottom of the table, for columns F to J and using the named ranges, display the total, average, minimum and maximum.
    solution: |
      Four rows under the table (rows 65 to 68), using the names in place of cell addresses. The formula is the same in all five columns, only the name changes:

      | Row | Formula (for the Discounted units column) |
      |---|---|
      | 65 Total | `=SUM(Discounted_Units_Sold)` |
      | 66 Average | `=AVERAGE(Discounted_Units_Sold)` |
      | 67 Minimum Value | `=MIN(Discounted_Units_Sold)` |
      | 68 Maximum Value | `=MAX(Discounted_Units_Sold)` |

      Official values:

      | | Full price (F) | Discounted (G) | Total units (H) | Commission NIS (I) | Commission euro (J) |
      |---|---|---|---|---|---|
      | Total | 20,219 | 5,223 | 25,442 | 4,279,508 | 1,150,405.38 |
      | Average | 336.98 | 87.05 | 424.03 | 71,325.13 | 19,173.42 |
      | Minimum | 83 | 19 | 105 | 17,595 | 4,729.84 |
      | Maximum | 890 | 320 | 1,043 | 182,990 | 49,190.86 |

      A name makes the formula readable (`=SUM(Discounted_Units_Sold)` says what it adds up) and it cannot go stale if rows are inserted inside the range.
    related_terms: ["named-range"]
  - id: "7"
    text: |
      **Employee rating.** A salesperson who sold in 2024 a total equal to or above the department's average gets "Senior"; one who sold less than the average gets "Junior". Show it in column K, header "Employee Rating". Auxiliary cells from B81.
    solution: |
      Helper cells: `C82` = the department average, `C83` = `Senior`, `D83` = `Junior`. In the official file `C82` is simply `=H66`, the average of total units (424.03), so it follows the data.

      ```
      K4 = IF(H4>=$C$82,$C$83,$D$83)
      ```

      "Equal to or above" is `>=`, so someone exactly on the average is Senior. The first salesperson (1,000 units) is Senior; the third (387 units) is Junior.

      Related: [[Lec_02-IF Statements & Logical Functions]] (Example 2, returning text).
    related_terms: ["if-function", "absolute-reference"]
  - id: "8"
    text: |
      **Special bonus.** Type A bonus: employed 10 years or more OR total sales of at least 1,000 units in 2024; the bonus is 16% of the annual commission. Type B bonus: employed 3 years or less AND total sales of at least 750 units; the bonus is 5.5% of the annual commission. Everyone else gets the note "No Bonus". Show it in column L, header "Special Bonus". Auxiliary cells from B86.
    solution: |
      Type A is an OR, Type B is an AND, so the formula nests an `AND` inside the else branch of the first `IF`. All thresholds go in a helper block:

      | | Type A (C) | Type B (D) | Other (E) |
      |---|---|---|---|
      | Seniority (row 88) | `10` | `3` | |
      | Total sales (row 89) | `1000` | `750` | |
      | Bonus (row 90) | `0.16` | `0.055` | `No Bonus` |

      ```
      L4 = IF(OR(E4>=$C$88,H4>=$C$89),I4*$C$90,
              IF(AND(E4<=$D$88,H4>=$D$89),I4*$D$90,$E$90))
      ```

      (one line in the cell). Column E is seniority, H total units, I commission. The `OR` is tested first, so someone who meets both Type A and Type B conditions gets the Type A (larger) bonus.

      First salesperson: 1,000 units, so Type A: `169,000 * 16% = 27,040`. The second (473 units, 4 years) gets "No Bonus".

      Related: [[Lec_02-IF Statements & Logical Functions]] (Examples 5 to 8).
    related_terms: ["if-function", "nested-if", "or-function", "and-function", "absolute-reference"]
  - id: "9"
    text: |
      **Present the table.** Design the table as you wish for the board of directors. Do not leave it without a design.
    solution: |
      Any consistent design earns the points; it is a formatting exercise. A sensible checklist: a bold coloured header row, number formats (thousands separators, 0 or 2 decimals, currency symbols on the NIS and euro columns), centred columns, borders, a frozen header row, and a visually distinct summary block.
    related_terms: []
  - id: "10"
    text: |
      **Record the "Apple" macro.** In a new workbook (the "Macro" file), open a sheet "Apple" and record a macro that: writes bold headers in row 1 (Product Name, Product Cost to Company, Product Price to Consumer (without discount), Discount Percentage to Consumer, Profit Percentage from Product Sale to Consumer); writes in row 2 the product "Apple MacBook Pro 16-inch", its cost of 2,499 USD converted to NIS at 3.1490, its price 24,990 NIS, the discount 8.55%, and a formula for the profit percentage assuming the discount was given. Add a button that runs the macro, and test it.
    solution: |
      Turn on the [[Macro Recorder]] (**View > Macros > Record Macro**), type the cells, stop recording, then add a button linked to the macro ([[Macro Button]]).

      The official macro (`Apple`, in `Module1`) is recorder code, so it is full of `Select` lines. The important cells are:

      | Cell | Content |
      |---|---|
      | `B6` | `3.149` (the dollar rate in a helper cell) |
      | `B2` | `=2499*B6` (cost in USD times the rate, giving 7,869.35 NIS) |
      | `C2` | `24990` |
      | `D2` | `8.55%` |
      | `E2` | `=(C2*(1-D2)-B2)/B2` |

      The profit percentage is **profit over cost**: price after discount `C2*(1-D2)` minus cost `B2`, divided by the cost. With these numbers that is `(22,853.36 - 7,869.35) / 7,869.35 = 190.4%`.

      > [!warning] Save as a macro-enabled workbook
      > A plain `.xlsx` silently drops the macro. Save as `.xlsm` or `.xlsb` ([[Macro-Enabled Workbook]]); that is why this exercise is submitted as a second file, "Macro".

      Download the official macro workbook below.

      Related: [[Lec_08-VBA Macros]] (section 2, the recorded macro).
    related_terms: ["macro-recorder", "macro-button", "macro-enabled-workbook", "vba-macro"]
  - id: "11"
    text: |
      **Program the "Info" macro.** In a new sheet "Info", program a macro that asks the user for a name, a birth date and an age, and then writes the name in A2, the birth date in B2 and the age in C2. Run it to confirm it works, and save the file as XLSB or XLSM.
    solution: |
      This one is typed, not recorded. The official code:

      ```vba
      Sub Info()
          Dim Name As String
          Dim Birth As String
          Dim Age As Integer

          Name = InputBox("Your name:")
          Birth = InputBox("Your birth date:")
          Age = InputBox("Your age:")
          Range("A2") = Name
          Range("B2") = Birth
          Range("C2") = Age
      End Sub
      ```

      Line by line: `Dim` declares each variable and its type ([[Variable Declaration in VBA]]); each [[InputBox]] pops up a box and returns what the user typed; the last three lines write the stored values into the cells.

      > [!tip] A small flaw worth knowing
      > `Birth` is declared as text, so the date lands in B2 as the typed text and Excel may not treat it as a real date. Declaring it `As Date` and converting would fix that.

      Related: [[Lec_08-VBA Macros]] (section 5, asking the user for input).
    related_terms: ["inputbox", "variable-declaration-in-vba", "vba-macro", "macro-enabled-workbook"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-9-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-9-data.xlsx): the "Salespeople Data" sheet.
- [Official solution, salespeople table (xlsx)](/papers/excel-data-analysis/ha-9-official-solution.xlsx)
- [Official macro solution, exercises 10 and 11 (xlsm)](/papers/excel-data-analysis/ha-9-macro-solution.xlsm): open it with macros enabled only if you trust the source; the code is also printed above.

*Related: [[Lec_02-IF Statements & Logical Functions]] · [[Lec_04-Date Functions, Named Ranges & Data Validation]] · [[Lec_08-VBA Macros]]*
