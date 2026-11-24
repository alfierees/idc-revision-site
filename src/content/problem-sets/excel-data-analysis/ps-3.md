---
title: "HA 3"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-3-questions.pdf
official_solution: /papers/excel-data-analysis/ha-3-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). Question 4 asks to include orders whose Product Base Margin is unknown, but the official criteria range does not do that (it gives 2,181.09 over 160 orders; including the 30 unknown-margin orders gives 1,997.10). Question 5 and the vehicle exercise have no worked answer in the official file; the vehicle totals below were computed from the data file."
tags:
  - excel-data-analysis
  - problem-set
  - advanced-filter
  - criteria-range
  - database-functions
  - sorting
  - conditional-formatting
ai_drafted: true
questions:
  - id: "1"
    text: |
      **High-priority big orders.** Duplicate "Sales Details" to a sheet "Question 1". Calculate the total revenue in shekels of orders where: priority is High, AND quantity is at least 20, AND unit price in shekels is at least 400, AND the customer name starts with T, G or J. Write the Advanced Filter criteria starting at AA1; the output (one column) goes to AF1; the sum of the output goes in AG1.
    solution: |
      This is an [[Advanced Filter]] with a [[Criteria Range]]. In a criteria range, conditions in the **same row** are AND, and conditions in **different rows** are OR. The "starts with T, G or J" part is an OR, so it needs three rows, and the AND conditions must be repeated on every row.

      Criteria range `AA1:AD4` (headers copied exactly from the data):

      | | AA | AB | AC | AD |
      |---|---|---|---|---|
      | 1 | Order Priority | Order Quantity | Unit Price in NIS | Customer Name |
      | 2 | High | `>=20` | `>=400` | `T*` |
      | 3 | High | `>=20` | `>=400` | `G*` |
      | 4 | High | `>=20` | `>=400` | `J*` |

      `T*` is a [[Wildcard]]: `*` stands for any run of characters, so the pattern means "starts with T". (The official file writes `>19` for the quantity, which is the same as `>=20` because quantities are whole numbers.)

      Run **Data > Advanced**, choose **Copy to another location**, list range `A1:Y8400`, criteria range `AA1:AD4`, and copy to `AF1`, where `AF1` already holds the single header `Revenue in ₪` so only that column is extracted.

      The sum: `AG1` = `=SUM(AF2:AF13)`. Result: **125,031.12 NIS** over 8 matching orders (checked against the data).

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (section 5, Advanced Filter).
    related_terms: ["advanced-filter", "criteria-range", "wildcard"]
  - id: "2"
    text: |
      **Critical mid-size orders or expensive Express Air.** Sheet "Question 2". Total revenue in shekels of orders where: priority is Critical AND quantity is from 20 to 30 inclusive, OR the unit price in shekels is at least 800 (any priority) AND the shipping method is "Express Air". Criteria from AA1; output (one column) at AG1; the sum in AH1; the number of matching orders in AI1.
    solution: |
      Two alternatives joined by OR, so **two criteria rows**. Within each row everything is AND. A quantity range uses the same header twice (two columns).

      Criteria range `AA1:AE3`:

      | | AA | AB | AC | AD | AE |
      |---|---|---|---|---|---|
      | 1 | Order Priority | Order Quantity | Order Quantity | Ship Mode | Unit Price in NIS |
      | 2 | Critical | `>=20` | `<=30` | | |
      | 3 | | | | Express Air | `>=800` |

      An empty cell in a criteria row means "no condition on this column", so row 3 does not mention priority or quantity.

      Extract to `AG1` (header `Revenue in ₪`), then:

      - `AH1`: `=SUM(AG2:AG366)` gives **627,291.99 NIS**
      - `AI1`: `=COUNT(AG2:AG366)` gives **365 orders**

      Both match the data. Count with `COUNT` (numbers only), not `COUNTA`, so the header is not counted.

      > [!tip] Dynamic alternative
      > The fixed range `AG2:AG366` breaks if the criteria change. `=DSUM(A1:Y8400,"Revenue in ₪",AA1:AE3)` or `=SUM(AG:AG)` would follow the data.
    related_terms: ["advanced-filter", "criteria-range", "dsum"]
  - id: "3"
    text: |
      **Revenue by category.** Sheet "Question 3". Sort the database by Product Category alphabetically. Then build a table starting at P8405 with the sum, average, minimum and maximum revenue in shekels for each product category, in the right currency and with no decimals.
    solution: |
      **Sort.** Select a cell in the table, **Data > Sort**, column Product Category, A to Z ([[Sorting]]). Sorting first makes each category one contiguous block of rows.

      **Table.** Headers in `Q8405:T8405` (Sum, Average, Min, Max), categories in `P8406:P8408`. In the official file each row uses the block of rows for its category (revenue is column V):

      | Category | Rows | Sum | Average | Min | Max |
      |---|---|---|---|---|---|
      | Furniture | 2 to 1725 | `=SUM($V$2:$V$1725)` | `=AVERAGE($V$2:$V$1725)` | `=MIN($V$2:$V$1725)` | `=MAX($V$2:$V$1725)` |
      | Office Supplies | 1726 to 6335 | same with `$V$1726:$V$6335` | | | |
      | Technology | 6336 to 8400 | same with `$V$6336:$V$8400` | | | |

      Results (before rounding to 0 decimals), in NIS:

      | Category | Sum | Average | Min | Max |
      |---|---|---|---|---|
      | Furniture | 5,297,999.14 | 3,073.09 | 4.16 | 29,953.32 |
      | Office Supplies | 3,765,382.06 | 816.79 | 1.48 | 25,419.80 |
      | Technology | 6,443,793.75 | 3,120.48 | 4.98 | 88,179.26 |

      Format the cells as **Currency**, symbol ₪ (shekel), **0 decimals**. Note the currency must be the shekel, because column V is `Revenue in ₪` (not the dollar column).

      > [!warning] Why sorting mattered
      > These fixed row ranges only work because the data is sorted. If you re-sort, the formulas silently sum the wrong rows. `SUMIF` or `AVERAGEIF` on the category column avoids that.
    related_terms: ["sorting", "absolute-reference"]
  - id: "4"
    text: |
      **Average dollar revenue with a margin condition.** Sheet "Question 4". Calculate the average "Revenue in \$" for orders whose Product Base Margin is at least 0.8 or at most 0.4. Only for Product Container "Large Box" or "Large Box" (a typo for the second box type). The result should also include orders where the Product Base Margin is unknown.
    solution: |
      The brief repeats "Large Box" twice. The official solution reads the second as **Jumbo Box**, and so do we.

      This is a database function, [[DAVERAGE]], over a criteria range. "Margin at least 0.8 OR at most 0.4" is two alternatives, and "container Large OR Jumbo" is two alternatives, so there are **2 x 2 = 4 criteria rows**, each pairing one margin condition with one container:

      | | AA | AB |
      |---|---|---|
      | 1 | Product Base Margin | Product Container |
      | 2 | `>=0.8` | Large Box |
      | 3 | `<=0.4` | Large Box |
      | 4 | `>=0.8` | Jumbo Box |
      | 5 | `<=0.4` | Jumbo Box |

      `AD1`: `=DAVERAGE(A1:Y8400,W1,AA1:AB5)`, where `W1` is the header `Revenue in $` that names the field to average. Official result: **2,181.09** (checked: 160 orders).

      > [!warning] The official criteria leave out unknown margins
      > The brief says orders whose margin is unknown (blank) must be included. In a criteria range `>=0.8` and `<=0.4` never match a blank, so the official 2,181.09 averages only the 160 orders with a known margin. 63 orders in the table have a blank margin; 30 of them are Large or Jumbo boxes.
      >
      > AI-written answer, not official. To include blanks add a criterion that matches empty cells (a single `=`) in two more rows:
      >
      > | | AA | AB |
      > |---|---|---|
      > | 6 | `=` | Large Box |
      > | 7 | `=` | Jumbo Box |
      >
      > and use the criteria range `AA1:AB7`. The average over all 190 orders is then **1,997.10** (checked against the data).
    related_terms: ["daverage", "database-function", "criteria-range"]
  - id: "5"
    text: |
      **Orders above 40.** (Repeated from assignment 1, question 12.) Duplicate "Sales Details", rename it "Orders above 40", and display only orders with Order Quantity between 40 and 50 inclusive, in ascending order.
    solution: |
      Identical to question 12 of HA 1: switch on the filter, **Number Filters > Between** `40` and `50` on Order Quantity, then sort that column smallest to largest. 1,875 orders remain, starting with an order of 40 units and ending with one of 50.

      The official HA 3 workbook does not contain this sheet (the instruction says you may reuse your HA 1 answer). See the HA 1 page for the steps.

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (AutoFilter and sorting).
    related_terms: ["autofilter", "sorting"]
  - id: "6"
    text: |
      **Vehicle lists.** Sheet "Data" has two vehicle lists. List 1 has accurate prices but outdated plates; List 2 has the updated plates but no prices. Use conditional formatting to find which vehicles to delete from List 1 according to List 2 (vehicles in List 1 and not in List 2), then verify the updated total rental cost and total insurance cost and highlight them in green.
    solution: |
      The trick is that **Duplicate Values** highlighting shows which plates appear twice.

      1. Copy the plates from List 2 (column G) and paste them directly under List 1's plates in column A.
      2. Select the whole of column A, then **Home > Conditional Formatting > Highlight Cells Rules > Duplicate Values > OK**. The plates that occur in both lists are coloured; plates that occur once (List 1 only) stay plain.
      3. The uncoloured rows are the vehicles that are in List 1 but not in List 2. Delete them. (The pasted List 2 rows have no prices, so delete those as well once you have identified the duplicates.)
      4. The totals row (`=SUM(B3:B101)` and `=SUM(C3:C101)`) now shows the updated costs. Fill both with green.

      The official workbook shows the duplicate-values rule on column A but no finished totals. Computed from the data file: List 1 has 99 vehicles, List 2 has 88, and all 88 of them are in List 1, so **11 vehicles are deleted**. Total rental cost falls from 569,284.10 to **500,000.00**, and total insurance cost from 11,045.24 to **9,659.56**.

      > [!warning] AI-written answer, not official.
      > The deletion count and new totals above were computed from the data file, not read from the official solution.
    related_terms: ["conditional-formatting"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-3-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-3-data.xlsx): sheets "Sales Details" and "Data" (vehicles).
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-3-official-solution.xlsx)

*Related: [[Lec_01-Sorting, Filters & Database Functions]]*
