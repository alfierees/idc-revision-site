---
title: "HA 1"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-1-questions.pdf
official_solution: /papers/excel-data-analysis/ha-1-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). It covers Home Assignment 1 and Home Assignment 2 (HA2 is exercises 8 to 10 of HA1). One quirk: its red rule for revenue under 1,000 starts at row 74 instead of row 2, so the first 72 orders are not coloured red. See question 8 on the HA 2 page."
tags:
  - excel-data-analysis
  - problem-set
  - absolute-reference
  - conditional-formatting
  - autofilter
  - sorting
  - subtotal
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Rename and recolour.** On the sheet "Sales", change the sheet name to "Sales Details" and change the tab colour to red.
    solution: |
      Right-click the sheet tab, choose **Rename** and type `Sales Details`. Right-click again, choose **Tab Color** and pick red. No formula is needed.

      The data table has 8,399 order rows (rows 2 to 8400) and columns A to U: Row ID, Order ID, Order Date, Order Priority, Order Quantity (column E), Discount, Ship Mode, Profit, Unit Price in NIS (column I), and so on up to Ship Date (column U). The new calculated columns go to the right, starting at column V.
    related_terms: []
  - id: "2"
    text: |
      **Revenue in dollars.** The company wants the revenue of each order in dollars (revenue = order quantity multiplied by unit price). Assume 1 dollar = 3.520 ILS. Show the result in column V with the title "Revenue in \$". Put the auxiliary cells below cell V8402.
    solution: |
      Revenue in shekels is `Order Quantity * Unit Price in NIS`. To get dollars, divide by the exchange rate. The rate is typed **once** in a helper cell, never inside the formula, as the general instructions demand.

      | Cell | Content |
      |---|---|
      | `V1` | `Revenue in $` |
      | `V8402` | `3.52` (the exchange rate, ILS per dollar) |
      | `V2` | `=$E2*$I2/$V$8402` |

      Copy `V2` down to row 8400. The `$V$8402` is an [[Absolute Reference]] (both parts locked), so the rate cell does not move as the formula is copied down. `$E2` and `$I2` lock only the column, so each row reads its own quantity and price.

      Check from the official file: row 2 has quantity 6 and unit price 38.94, so revenue is 233.64 ILS, and `233.64 / 3.52 = 66.375`.

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (absolute and mixed references, section 8).
    related_terms: ["absolute-reference"]
  - id: "3"
    text: |
      **Expected revenue after a 20% increase.** The company expects revenue to rise by 20% next year. For each order, show the revenue in ILS after the increase in column W with the title "Revenue After Increase". Put the auxiliary cells below W8402.
    solution: |
      The helper cell holds the **growth factor** `1.2` (that is, 100% plus 20%), so the formula is one multiplication.

      | Cell | Content |
      |---|---|
      | `W1` | `Revenue After Increase` |
      | `W8402` | `1.2` |
      | `W2` | `=$E2*$I2*$W$8402` |

      Row 2: `233.64 * 1.2 = 280.368`.

      > [!tip] Factor or percentage
      > The official file stores `1.2`. Storing `20%` instead and writing `*(1+$W$8402)` works equally well. What matters is that the number sits in a labelled cell, so a change of assumption is a one-cell edit (this is used in question 6).
    related_terms: ["absolute-reference"]
  - id: "4"
    text: |
      **Tax on each order.** The company pays a 2% tax on each completed order, based on the order's revenue in shekels before the increase. Show the tax in ILS in column X with the title "Tax On Order". Put the auxiliary cells below X8402.
    solution: |
      Tax is 2% of the pre-increase shekel revenue (not of the dollar revenue and not of the increased revenue).

      | Cell | Content |
      |---|---|
      | `X1` | `Tax On Order` |
      | `X8402` | `0.02` |
      | `X2` | `=$E2*$I2*$X$8402` |

      Row 2: `233.64 * 0.02 = 4.6728`.

      > [!info] The wording says "on each ordered unit"
      > The brief mentions column E (quantity), but the official solution simply takes 2% of the whole order revenue (`quantity * price * 2%`). Follow the official reading.
    related_terms: ["absolute-reference"]
  - id: "5"
    text: |
      **Back-up copy.** Copy the "Sales Details" sheet to a new sheet and rename it "Sales Details - Updated".
    solution: |
      Right-click the tab, choose **Move or Copy**, tick **Create a copy**, then rename the copy to `Sales Details - Updated` (the official file uses a hyphen).

      The copy keeps all formulas and helper cells, so changing a helper cell on the copy changes only the copy. That is exactly what question 6 does.
    related_terms: []
  - id: "6"
    text: |
      **What-if update.** On "Sales Details - Updated": the dollar rate is now 3.89 ILS, the projected revenue increase is reduced to 9.5% and the tax rate to 1.5%. Management wants to see how these changes affect the data. Highlight in colour all the columns and cells affected by these updates.
    solution: |
      Only the three helper cells change. Every formula in columns V, W and X recalculates by itself, which is the payoff for never typing constants inside formulas.

      | Helper | Original sheet | Updated sheet |
      |---|---|---|
      | Exchange rate | `3.52` | `3.89` |
      | Increase factor | `1.2` | `1.095` |
      | Tax rate | `0.02` | `0.015` |

      On the Updated sheet these helpers end up one column to the right of where they were (they sit at `W8402`, `X8402`, `Y8402`) because question 8 inserts a new column V. Then colour the three helper cells and the three result columns (dollar revenue, revenue after increase, tax) with a fill colour so the affected area is visible.

      Row 2 after the update: dollar revenue `233.64 / 3.89 = 60.0617`, increased revenue `233.64 * 1.095 = 255.8358`, tax `233.64 * 0.015 = 3.5046`.
    related_terms: ["absolute-reference"]
  - id: "7"
    text: |
      **Presentation formatting.** Format the order data for the board: all table data (including headers) centred; financial data with a currency symbol and 0 decimals; sensible column widths; only the header background dark blue with bold white Times New Roman font; thick outer borders and dashed inner borders; and freeze the header row plus columns A, B and C (Row number, Order number, Order date).
    solution: |
      All of this is formatting, no formulas:

      1. Select the table, **Home > Alignment > Center**.
      2. Select the money columns (unit price, revenue, tax, profit) and apply a currency format with **0 decimal places** (`Format Cells > Currency`, symbol and `Decimal places = 0`).
      3. Select all columns and double-click a column border (AutoFit) for the widths.
      4. Header row only: fill dark blue, font bold, white, Times New Roman.
      5. `Format Cells > Border`: choose the thick line and a colour, press **Outline**; choose the dashed line and a colour, press **Inside**.
      6. Click cell `D2`, then **View > Freeze Panes > Freeze Panes**. Everything above row 2 and left of column D (the header row and columns A to C) stays visible while scrolling. The official file has its freeze set exactly this way (3 columns and 1 row).

      > [!warning] Freeze from the right cell
      > The active cell decides what is frozen. Selecting `A2` freezes only the header row, selecting `D2` freezes the header and columns A to C.
    related_terms: []
  - id: "11"
    text: |
      **Summary sheet.** Management wants, for Order Quantity, Revenue in NIS and Tax On Order: the minimum, the average, the maximum and the sum. Open a new sheet named "Sum". Header row B1:D1 with the three parameters (dark blue background, bold white font); header column A2:A5 with MIN, MAX, AVERAGE, SUM; fill the table with formulas; use a suitable format with no decimals; colour the total revenue cell red if it is below 16 million NIS; colour the number of orders cell green if it is over 210,000.
    solution: |
      The summary points at the updated sheet's columns (quantity `E`, revenue in NIS `V`, tax `Y`):

      | Row | Quantity (B) | Revenue in NIS (C) | Tax On Order (D) |
      |---|---|---|---|
      | MIN | `=MIN('Sales Details - Updated'!$E$2:$E$8400)` | same with `$V$2:$V$8400` | same with `$Y$2:$Y$8400` |
      | AVERAGE | `=AVERAGE(...)` | `=AVERAGE(...)` | `=AVERAGE(...)` |
      | MAX | `=MAX(...)` | `=MAX(...)` | `=MAX(...)` |
      | SUM | `=SUM(...)` | `=SUM(...)` | `=SUM(...)` |

      Results in the official file (before the "no decimals" format):

      | | Quantity | Revenue in NIS | Tax On Order |
      |---|---|---|---|
      | MIN | 1 | 1.48 | 0.02 |
      | AVERAGE | 25.57 | 1,846.31 | 27.69 |
      | MAX | 50 | 88,179.26 | 1,322.69 |
      | SUM | 214,777 | 15,507,174.95 | 232,607.62 |

      **Conditional formatting.** Select the revenue SUM cell, **Conditional Formatting > Highlight Cells Rules > Less Than**, value `16000000`, red fill. It is red here because 15,507,175 is below 16 million. Select the quantity SUM cell, **Greater Than**, `210000`, green fill. It is green because 214,777 is above 210,000.

      > [!info] "Number of orders"
      > The official file uses the **sum of Order Quantity** (214,777 units) as the "amount of orders" figure. The sheet has 8,399 order rows, so the 210,000 threshold only makes sense for the unit total.
    related_terms: ["conditional-formatting", "absolute-reference"]
  - id: "12"
    text: |
      **Orders above 40.** Duplicate "Sales Details - Updated" and rename it "Orders above 40". Display only the orders with Order Quantity (column E) between 40 and 50 inclusive, in ascending order: the first row an order of 40 units, the last row an order of 50 units.
    solution: |
      1. Copy the sheet and rename it.
      2. Select a cell in the table and switch on the filter (**Data > Filter**, an [[AutoFilter]]).
      3. On the Order Quantity column: **Number Filters > Between**, `is greater than or equal to 40` **And** `is less than or equal to 50`.
      4. Sort the same column **Smallest to Largest** ([[Sorting]]).

      The filter leaves 1,875 orders (checked against the data). The official file shows the same autofilter on column E with the values 40 to 50 ticked.

      This exercise is repeated as question 5 of HA 3.

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (sections 2 and 3).
    related_terms: ["autofilter", "sorting"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-1-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-1-data.xlsx): the "Sales" sheet is the starting point.
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-1-official-solution.xlsx)

Exercises 8, 9 and 10 of this sheet (conditional formatting) are also Home Assignment 2, so they are written up on the **HA 2** page.

*Related: [[Lec_01-Sorting, Filters & Database Functions]] · [[Lec_02-IF Statements & Logical Functions]]*
