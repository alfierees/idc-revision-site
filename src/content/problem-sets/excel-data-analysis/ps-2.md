---
title: "HA 2"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-1-questions.pdf
official_solution: /papers/excel-data-analysis/ha-1-official-solution.xlsx
official_solution_note: "Home Assignment 2 has no sheet of its own: it is exercises 8, 9 and 10 of Home Assignment 1 (conditional formatting), so it shares HA 1's question PDF and official workbook. In the official workbook the red rule for revenue under 1,000 starts at row 74, not row 2, so rows 2 to 73 are missed. The answer below applies the rule from row 2."
tags:
  - excel-data-analysis
  - problem-set
  - conditional-formatting
  - absolute-reference
ai_drafted: true
questions:
  - id: "8"
    text: |
      **Colour bands for revenue.** On "Sales Details - Updated":

      a) Insert an empty column V titled "Revenue in ₪" (the old V, W, X become W, X, Y).
      b) Calculate the revenue in NIS for each order in it.
      c) Format column V automatically: revenue below 1,000 NIS gets a red background and bold white font; revenue from 1,000 to 4,000 inclusive gets an orange background and black italic font; revenue above 4,000 gets a green background and white font. Put the auxiliary cells below V8402.
    solution: |
      **b) The formula.** In `V2`: `=$E2*$I2` (quantity times unit price in NIS), copied down to row 8400. Inserting the column shifts the dollar, increase and tax columns right by one, and Excel rewrites their references for you.

      **c) The thresholds go in cells, not in the rules.** The official file keeps them below the column:

      | Cell | Content |
      |---|---|
      | `V8402` | `1000` |
      | `V8403` | `4000` |

      Select `V2:V8400` and add three [[Conditional Formatting]] rules (**Home > Conditional Formatting > New Rule**, or **Highlight Cells Rules**):

      | Rule type | Condition | Format |
      |---|---|---|
      | Cell value, less than | `=$V$8402` | red fill, bold white font |
      | Cell value, between | `=$V$8402` and `=$V$8403` | orange fill, italic black font |
      | Cell value, greater than | `=$V$8403` | green fill, white font |

      The "between" rule is inclusive at both ends, which matches "from 1,000 inclusive to 4,000 inclusive". The cell references are [[Absolute Reference]]s, so each cell in the range is compared against the same two thresholds. Changing `V8402` or `V8403` recolours the whole column.

      > [!warning] Official answer has a range slip
      > In the official workbook the "less than 1,000" rule is applied to `V74:V8400`, not `V2:V8400`. So any of the first 72 orders with revenue under 1,000 are **not** red there (the other two rules cover `V2:V8400`). Apply all three rules to the same range, `V2:V8400`.

      Related: [[Lec_01-Sorting, Filters & Database Functions]] (conditional formatting on the employee table) and [[Lec_02-IF Statements & Logical Functions]] (the same banding as an `IF`).
    related_terms: ["conditional-formatting", "absolute-reference"]
  - id: "9"
    text: |
      **Highlight Critical orders.** Mark every order with priority "Critical": from column A to column U, black bold font on a light blue background. This must not change the formatting of the cells from the previous question. Put the auxiliary cell below D8402.
    solution: |
      A rule that colours a **whole row** needs a formula, because the condition looks at column D but the colour goes on columns A to U.

      1. Type `Critical` in the helper cell `D8402`.
      2. Select `A2:U8400` (columns A to U only, so column V's colour bands are untouched).
      3. **New Rule > Use a formula to determine which cells to format** and enter:

      ```
      =$D2=$D$8402
      ```

      4. Format: bold, black font, light blue fill.

      `$D2` locks the column (the test always reads column D) but lets the row move, so each row is judged on its own priority. `$D$8402` is the fixed helper cell.

      The official workbook has exactly this rule on `A2:U8400`.
    related_terms: ["conditional-formatting", "absolute-reference"]
  - id: "10"
    text: |
      **Highlight Not Specified orders.** Orders with priority "Not Specified" must be marked so the operations manager can update them: from column A to column U, bold white font on a green background, again without changing earlier formatting. Put the auxiliary cell below D8402.
    solution: |
      Same technique as question 9, with a second helper cell.

      1. Type `Not Specified` in `D8403` (the helper below the Critical one).
      2. Select `A2:U8400`, add a formula rule:

      ```
      =$D2=$D$8403
      ```

      3. Format: bold, white font, green fill.

      Because a row has only one priority, the Critical and Not Specified rules never fire on the same row, so their order does not matter. Both rules sit on `A2:U8400` in the official file, with the helpers `D8402 = Critical` and `D8403 = Not Specified`.

      > [!tip] Why not just colour by hand?
      > The rules follow the data. If someone changes a row's priority, the colour changes with it. Hand colouring would go stale.
    related_terms: ["conditional-formatting", "absolute-reference"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-1-questions.pdf): exercises 8, 9 and 10 on pages 2 and 3.
- [Data file (xlsx)](/papers/excel-data-analysis/ha-1-data.xlsx): the same sales table as HA 1.
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-1-official-solution.xlsx): the "Sales Details - Updated" sheet holds these rules.

*Related: [[Lec_01-Sorting, Filters & Database Functions]] · [[Lec_02-IF Statements & Logical Functions]]*
