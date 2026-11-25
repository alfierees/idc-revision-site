---
title: "HA 4"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-4-questions.pdf
official_solution: /papers/excel-data-analysis/ha-4-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). The brief spells the customer category 'Privat'; the official file uses 'Private'. The brief says orders 'up to 15,000' were placed by men; the official test is Order ID below 15000 (no order has exactly that ID, so the result is the same either way)."
tags:
  - excel-data-analysis
  - problem-set
  - if-function
  - or-function
  - and-function
  - conditional-formatting
  - absolute-reference
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Order size.** Duplicate "Sales Details" and name the copy "Classifications". In column X, titled "Order Size", classify orders with a quantity of more than 30 units as "Large Order" and all others as "Normal Order". Put the auxiliary cells below X8402 in column X only.
    solution: |
      A single [[IF Function]]: test the quantity (column E) against a threshold, return one label or the other. The threshold and both labels live in helper cells, so the formula contains no typed constants.

      | Cell | Content |
      |---|---|
      | `X8402` | `Large Order` |
      | `X8403` | `Normal Order` |
      | `X8404` | `30` |
      | `X2` | `=IF(E2>$X$8404,$X$8402,$X$8403)` |

      Copy down to row 8400. "More than 30" is a strict `>`.

      Result: 3,398 Large Orders and 5,001 Normal Orders.

      Related: [[Lec_02-IF Statements & Logical Functions]] (Example 1 and the section on putting rule values in cells).
    related_terms: ["if-function", "absolute-reference"]
  - id: "2"
    text: |
      **Order subsidy.** In column Y, titled "Order Subsidy": orders shipped by "Delivery Truck" or with a shipping cost above 10 ILS get a subsidy of 60 ILS; all other orders get 30 ILS. Auxiliary cells below Y8402 in column Y only.
    solution: |
      "A or B" needs the [[OR Function]] inside the `IF` test.

      | Cell | Content |
      |---|---|
      | `Y8402` | `Delivery Truck` |
      | `Y8403` | `10` |
      | `Y8404` | `60` |
      | `Y8405` | `30` |
      | `Y2` | `=IF(OR(G2=$Y$8402,J2>$Y$8403),$Y$8404,$Y$8405)` |

      Column G is Ship Mode and column J is Shipping Cost. Result: 2,461 orders get 60 and 5,938 orders get 30.

      Related: [[Lec_02-IF Statements & Logical Functions]] (Examples 3 and 5).
    related_terms: ["if-function", "or-function", "absolute-reference"]
  - id: "3"
    text: |
      **Man or woman.** Orders with an Order ID up to 15,000 were placed by men, all other orders by women. In column Z, titled "M/F", classify each order as "M" or "F".
    solution: |
      | Cell | Content |
      |---|---|
      | `Z8402` | `15000` |
      | `Z8403` | `M` |
      | `Z8404` | `F` |
      | `Z2` | `=IF(B2<$Z$8402,$Z$8403,$Z$8404)` |

      Column B is Order ID. The official file tests `<` 15000. The strict `<` and the "up to" (`<=`) reading give the same answer here because no order has ID 15000, but `<=` is the literal reading of the brief.

      Result: 2,098 "M" and 6,301 "F".
    related_terms: ["if-function", "absolute-reference"]
  - id: "4"
    text: |
      **Tax category.** Orders with "Tax On Order" of 150 ILS or less are "Low Tax", all others "High Tax". Show it in column AA with the title "Tax Category". Auxiliary cells below AA8402.
    solution: |
      | Cell | Content |
      |---|---|
      | `AA8402` | `Low Tax` |
      | `AA8403` | `High Tax` |
      | `AA8404` | `150` |
      | `AA2` | `=IF($W2<=$AA$8404,$AA$8402,$AA$8403)` |

      Column W is Tax On Order. "150 or less" is `<=`, so an order with tax of exactly 150 is Low Tax.

      Result: 8,090 Low Tax and 309 High Tax orders.
    related_terms: ["if-function", "absolute-reference"]
  - id: "5"
    text: |
      **Customer category and highlighting.** Classify customer segments Small Business, Consumer and Home Office as "Privat" and all other customers as "Public", in column AB titled "Customer Category". Then format orders classified as "High Tax" and also "Public" with a green background and bold white font across the whole order row. Auxiliary cells below AB8402.
    solution: |
      **The category.** Three segments mean three equality tests joined by OR:

      | Cell | Content |
      |---|---|
      | `AB8402` | `Consumer` |
      | `AB8403` | `Small Business` |
      | `AB8404` | `Home Office` |
      | `AB8405` | `Private` |
      | `AB8406` | `Public` |
      | `AB2` | `=IF(OR($N2=$AB$8402,$N2=$AB$8403,$N2=$AB$8404),$AB$8405,$AB$8406)` |

      Column N is Customer Segment. Result: 5,323 Private and 3,076 Public.

      **The row highlight.** Select `A2:AB8400` and add a formula rule ([[Conditional Formatting]], **New Rule > Use a formula**):

      ```
      =AND($AA2=$AA$8403,$AB2=$AB$8406)
      ```

      with a green fill and bold white font. `$AA2=$AA$8403` is "tax category is High Tax" and `$AB2=$AB$8406` is "customer category is Public". The `$` in front of the column letters keeps the test on columns AA and AB while the colour spreads over the whole row.

      Related: [[Lec_02-IF Statements & Logical Functions]] (Example 5, AND with an OR inside it).
    related_terms: ["if-function", "or-function", "and-function", "conditional-formatting"]
  - id: "6"
    text: |
      **Bonus: completeness check.** To make sure every order received a classification, build a completeness check for each section using COUNTIF. Hint: count the "High Tax" and "Low Tax" orders; their sum should equal the total number of orders.
    solution: |
      The official file puts a small check block under each classification column (rows 8409 to 8415):

      | Row | Formula in column X | What it does |
      |---|---|---|
      | 8410 | `=COUNTIF($X$2:$X$8400,$X8402)` | how many "Large Order" |
      | 8411 | `=COUNTIF($X$2:$X$8400,$X8403)` | how many "Normal Order" |
      | 8412 | `=SUM(X8410:X8411)` | the two counts added |
      | 8414 | `=COUNTA(X2:X8400)` | how many cells in the column are filled |
      | 8415 | `=X8412-X8414` | must be 0 |

      The same block is repeated under each of columns Y, Z, AA and AB. [[COUNTIF]] counts the cells equal to a label; `COUNTA` counts every non-empty cell. If every order has exactly one of the two labels, the sum equals the number of orders, 8,399, and the difference is 0. A non-zero difference would mean some orders got no label (or an unexpected one).

      All five columns give 8,399 and a difference of 0 in the official file.
    related_terms: ["if-function"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-4-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-4-data.xlsx)
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-4-official-solution.xlsx)

*Related: [[Lec_02-IF Statements & Logical Functions]]*
