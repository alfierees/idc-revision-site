---
title: "HA 5"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-5-questions.pdf
official_solution: /papers/excel-data-analysis/ha-5-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). Question 4 does not follow the brief: the official formula moves a Saturday payment two days EARLIER (to the 8th), whereas the brief says a Saturday payment is delayed by three days. The question 4 answer below keeps the official formula and gives the version that matches the brief. The tenure sheet's values depend on the day the file was saved (it uses TODAY)."
tags:
  - excel-data-analysis
  - problem-set
  - if-function
  - nested-if
  - or-function
  - and-function
  - date-functions
  - datedif
  - eomonth
  - weekday
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Efficiency plan.** Duplicate "Sales Details" as "Classifications". In column X, "Efficiency Plan", show the plan type for each order.

      "Plan A": revenue in NIS higher than 500, OR (order quantity below the average quantity of all orders AND shipping cost above 6 ILS).

      "Plan B": revenue in NIS lower than 250 AND (order quantity below 20 units OR shipping cost above 9 ILS).

      All other orders: "No Plan is Needed". Auxiliary cells below X8402 in column X only.
    solution: |
      The nesting follows the wording: an outer `IF` for Plan A, an inner `IF` for Plan B, and "No Plan" as the final else. Each plan's test mixes [[AND Function]] and [[OR Function]] exactly as the sentence does.

      | Cell | Content |
      |---|---|
      | `X8402` | `Plan A` |
      | `X8403` | `500` |
      | `X8404` | `=AVERAGE(E2:E8400)` (average order quantity, about 25.57) |
      | `X8405` | `6` |
      | `X8406` | `Plan B` |
      | `X8407` | `250` |
      | `X8408` | `20` |
      | `X8409` | `9` |
      | `X8410` | `No Plan is Needed` |

      ```
      =IF(OR(T2>$X$8403,AND(E2<$X$8404,J2>$X$8405)),$X$8402,
          IF(AND(T2<$X$8407,OR(E2<$X$8408,J2>$X$8409)),$X$8406,$X$8410))
      ```

      (written on one line in the cell). Column T is Revenue in NIS, E is Order Quantity and J is Shipping Cost. The average is calculated once in a helper cell rather than inside the formula, so it is not recomputed 8,399 times and not typed as a constant.

      Result: 5,014 orders Plan A, 1,163 Plan B and 2,222 "No Plan is Needed" (I recomputed these from the data and they match the official sheet).

      > [!tip] Order of the tests
      > An order with revenue below 250, quantity below the average and shipping above 6 passes both plan tests. Because Plan A is tested first, it gets Plan A. The wording does not forbid overlap, so the nesting order is part of the answer.

      Related: [[Lec_02-IF Statements & Logical Functions]] (Examples 5 to 8, nested IF).
    related_terms: ["nested-if", "if-function", "and-function", "or-function", "absolute-reference"]
  - id: "2"
    text: |
      **Processing time and speed.** Column Y, "Processing Time": days from order date to ship date. Column Z, "Processing Speed": 3 days or less is "Fast Delivery"; more than 3 up to and including 6 is "Regular Delivery"; more than 6 is "Slow Delivery". Auxiliary cells below Z8402 in column Z only.
    solution: |
      **Processing time.** Dates are numbers ([[Date Serial Number]]), so subtraction gives days: `Y2` = `=S2-C2` (ship date in column S minus order date in column C). Format the result as **Number** or General; Excel may otherwise show it as a date.

      **Speed.** A nested [[IF Function]] with two thresholds. Test the smallest band first, so the second test only needs an upper bound:

      | Cell | Content |
      |---|---|
      | `Z8402` | `Fast Delivery` |
      | `Z8403` | `Regular Delivery` |
      | `Z8404` | `Slow Delivery` |
      | `Z8405` | `3` |
      | `Z8406` | `6` |
      | `Z2` | `=IF(Y2<=$Z$8405,$Z$8402,IF(Y2<=$Z$8406,$Z$8403,$Z$8404))` |

      The second test does not need "greater than 3" because anything of 3 days or less has already been caught by the first test.

      Result: 7,256 Fast, 682 Regular and 461 Slow. Row 2 of the data has a 7-day gap, so it is "Slow Delivery".

      Related: [[Lec_02-IF Statements & Logical Functions]] (Example 8, several levels).
    related_terms: ["nested-if", "if-function", "date-serial-number", "absolute-reference"]
  - id: "3"
    text: |
      **Tenure in years.** On sheet "Tenure", calculate in column F each employee's tenure in years with functions, so that it is always up to date: it must change according to the day the file is opened.
    solution: |
      The key is [[TODAY]], which recalculates every time the file opens. The official sheet shows two ways:

      - Column F: `=(TODAY()-D2)/365`, the number of days since the start date divided by 365. This gives a fractional tenure such as 28.39 years.
      - Column G: `=DATEDIF(D2,TODAY(),"y")`, whole completed years only (28).

      Both are right depending on whether you want decimals. [[DATEDIF]] with `"y"` is the exact count of completed years; the `/365` version drifts slightly because of leap years. `D2` is the start work date.

      The values in the official file reflect the day it was last saved, so yours will differ.

      Related: [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]] (TODAY and DATEDIF).
    related_terms: ["today", "datedif", "date-serial-number"]
  - id: "4"
    text: |
      **Payment date.** On sheet "Payment", calculate in column D the payment date for each order, assuming an order is always paid on the 10th day of the following month. If the payment date falls on a Saturday, the payment is delayed by three days.
    solution: |
      **The 10th of next month.** [[EOMONTH]] with 0 months returns the last day of the order's own month, so adding 10 lands on the 10th of the next month: `EOMONTH(A2,0)+10`.

      **The Saturday test.** [[WEEKDAY]] with the default type returns 1 for Sunday up to 7 for Saturday, so `WEEKDAY(...)=7` means Saturday.

      **Official formula (kept as is):**

      ```
      =IF(WEEKDAY(EOMONTH(A2,0)+10)=7,EOMONTH(A2,0)+8,EOMONTH(A2,0)+10)
      ```

      For an order on 12 March 2018 this returns 10 April 2018.

      > [!warning] The official formula does not do what the brief says
      > When the 10th is a Saturday, the official formula returns `EOMONTH(A2,0)+8`, the **8th**, which is two days **earlier**. The brief says the payment is **delayed by three days**. For example an order on 2 February 2018 has its 10th on Saturday 10 March 2018; the official file shows 8 March 2018, but the brief gives Tuesday 13 March 2018.
      >
      > AI-written answer, not official, matching the brief:
      >
      > ```
      > =IF(WEEKDAY(EOMONTH(A2,0)+10)=7,EOMONTH(A2,0)+13,EOMONTH(A2,0)+10)
      > ```

      Related: [[Lec_03-Calendars & Date Calculations]] (WEEKDAY, EOMONTH) and [[Lec_02-IF Statements & Logical Functions]].
    related_terms: ["eomonth", "weekday", "if-function", "date-serial-number"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-5-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-5-data.xlsx): sheets "Sales Details", "Tenure" and "Payment".
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-5-official-solution.xlsx)

*Related: [[Lec_02-IF Statements & Logical Functions]] · [[Lec_03-Calendars & Date Calculations]]*
