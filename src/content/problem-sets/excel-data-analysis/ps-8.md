---
title: "HA 8"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-8-questions.pdf
official_solution: /papers/excel-data-analysis/ha-8-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle): eight pivot tables on eight sheets. Report 8 uses 'Count of Discount', which is only the number of orders per region and says nothing about how much discount a region got; the answer below keeps it and adds the average discount per region."
tags:
  - excel-data-analysis
  - problem-set
  - pivot-table
  - grouping-dates-in-a-pivot-table
  - show-values-as
  - value-field-settings
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Report 1: orders by year and quarter shipped.** In a new sheet "Report 1", build a pivot table showing the number of orders by year (rows) and by the quarter in which the order was shipped (columns). Filter so that only the years 2010 to 2012 are shown.
    solution: |
      Insert a [[Pivot Table]] from the "Sales Details" table into a new sheet. In the [[Pivot Table Fields Pane]]:

      1. Drag **Ship Date** to Columns and keep only its **Quarters** level (Excel groups dates automatically, see [[Grouping Dates in a Pivot Table]]; remove Years and Months from that group). Drag **Order Date** to Rows and keep its **Years** level. The official file is built this way: the years come from the order date and the quarters from the ship date.
      2. Drag **Order ID** to Values. Because Order ID is a number, change the [[Value Field Settings]] to **Count** (the default would be Sum, which adds up ID numbers).
      3. Open the **Years** drop-down and untick every year except 2010, 2011 and 2012.

      Official result (count of Order ID):

      | Year | Q1 | Q2 | Q3 | Q4 | Total |
      |---|---|---|---|---|---|
      | 2010 | 506 | 525 | 536 | 575 | 2,142 |
      | 2011 | 485 | 507 | 487 | 523 | 2,002 |
      | 2012 | 509 | 550 | 541 | 502 | 2,102 |
      | Total | 1,500 | 1,582 | 1,564 | 1,600 | 6,246 |

      Related: [[Lec_07-Pivot Tables]] (grouping dates by year and quarter).
    related_terms: ["pivot-table", "pivot-table-fields-pane", "grouping-dates-in-a-pivot-table", "value-field-settings"]
  - id: "2"
    text: |
      **Report 2: average revenue by sub-category.** In a new sheet "Report 2", a pivot table with the average revenue in ILS for each product sub-category.
    solution: |
      Rows: **Product Sub-Category**. Values: **Revenue in ₪**, with the [[Value Field Settings]] changed from Sum to **Average**.

      Official result, average revenue per order in NIS (17 sub-categories):

      | Sub-category | Average revenue |
      |---|---|
      | Copiers and Fax | 13,119.87 |
      | Office Machines | 6,695.86 |
      | Tables | 5,599.97 |
      | Chairs & Chairmats | 4,559.05 |
      | Bookcases | 4,332.60 |
      | Telephones and Communication | 2,542.15 |
      | Storage & Organization | 1,962.81 |
      | Appliances | 1,711.05 |
      | Binders and Binder Accessories | 1,125.77 |
      | Computer Peripherals | 1,056.92 |
      | Office Furnishings | 885.48 |
      | Envelopes | 712.92 |
      | Scissors, Rulers and Trimmers | 567.44 |
      | Paper | 361.37 |
      | Pens & Art Supplies | 264.78 |
      | Labels | 134.51 |
      | Rubber Bands | 83.26 |
      | **Grand total** | **1,846.31** |

      Sort the rows by the average (largest to smallest) to read it as a ranking; the table above is already in that order.
    related_terms: ["pivot-table", "value-field-settings"]
  - id: "3"
    text: |
      **Report 3: where the company loses money.** In a new sheet "Report 3", a pivot table showing for which discount rates the company loses money.
    solution: |
      "Loses money" means a negative profit. Rows: **Discount**. Values: **Profit** (Sum). Then filter the rows with a **value filter**: click the Discount drop-down, **Value Filters > Less Than**, `Sum of Profit` less than `0` (see [[Pivot Table Top 10 Filter]] for the same menu).

      Official result:

      | Discount | Sum of Profit |
      |---|---|
      | 16% | -74.51 |
      | 17% | -9.13 |
      | 21% | -17.75 |
      | 25% | -481.04 |
      | Total | -582.43 |

      Only four discount rates have a negative total profit. The value filter is what makes the report answer the question directly: the other discount rates are hidden rather than left for the reader to scan.

      Related: [[Lec_07-Pivot Tables]] (filtering inside a pivot).
    related_terms: ["pivot-table", "pivot-table-top-10-filter", "value-field-settings"]
  - id: "4"
    text: |
      **Report 4: revenue over time.** In a new sheet "Report 4", a pivot table with the total revenue in ILS by order date: years, quarters and months.
    solution: |
      Rows: **Order Date**. Excel groups the dates; make sure Years, Quarters and Months are all selected in the grouping dialog (right-click a date > **Group**). That gives the hierarchy year > quarter > month. Values: **Revenue in ₪**, summed.

      The grand total is **15,507,174.95 NIS**, the same total revenue as in HA 1's Sum sheet, which is a useful check. Use the +/- buttons to collapse months into quarters or quarters into years.

      Related: [[Lec_07-Pivot Tables]] (grouping dates by year and quarter) and [[Lec_04-Date Functions, Named Ranges & Data Validation]] (dates as serial numbers).
    related_terms: ["pivot-table", "grouping-dates-in-a-pivot-table", "value-field-settings"]
  - id: "5"
    text: |
      **Report 5: orders per shipping mode.** In a new sheet "Report 5", a pivot table with the number of orders for each shipping mode.
    solution: |
      Rows: **Ship Mode**. Values: any column that is filled for every order (the official file uses **Row ID**), set to **Count**.

      | Ship Mode | Orders |
      |---|---|
      | Delivery Truck | 1,146 |
      | Express Air | 983 |
      | Regular Air | 6,270 |
      | Total | 8,399 |

      The total matches the 8,399 order rows in the data, a quick sanity check that every order was counted once.
    related_terms: ["pivot-table", "value-field-settings"]
  - id: "6"
    text: |
      **Report 6: shipping cost by priority.** In a new sheet "Report 6", a pivot table with the total shipping cost by order priority, plus a column showing each priority's share of the total shipping cost of all orders.
    solution: |
      Rows: **Order Priority**. Values: drag **Shipping Cost** to Values **twice**.

      - The first copy: **Sum** (total shipping cost).
      - The second copy: open [[Value Field Settings]] > **Show Values As** > **% of Grand Total**, and rename it `Shipping Cost % from total` ([[Show Values As]]).

      | Priority | Total shipping cost | Share of total |
      |---|---|---|
      | Critical | 21,112.68 | 19.58% |
      | High | 22,665.42 | 21.02% |
      | Low | 22,946.86 | 21.28% |
      | Medium | 20,513.93 | 19.02% |
      | Not Specified | 20,592.15 | 19.10% |
      | Total | 107,831.04 | 100.00% |

      Related: [[Lec_07-Pivot Tables]] (several summaries side by side).
    related_terms: ["pivot-table", "show-values-as", "value-field-settings"]
  - id: "7"
    text: |
      **Report 7: customers whose names start with J.** In a new sheet "Report 7", a pivot table with the number of orders for customers whose name starts with the letter J, with an extra column showing the total order quantity each customer ordered.
    solution: |
      Rows: **Customer Name**. Values: **Order ID** (Count) and **Order Quantity** (Sum).

      To keep only the J names, open the Customer Name drop-down and choose **Label Filters > Begins With**, then type `J`. The official file shows 74 customers (Jack Garza with 8 orders and 182 units, Jack Lebron with 22 orders and 493 units, and so on).

      The label filter is better than ticking names by hand: it still applies if the data is refreshed and new J customers appear.
    related_terms: ["pivot-table", "value-field-settings"]
  - id: "8"
    text: |
      **Report 8: discounts by region.** In a new sheet "Report 8", a pivot table showing how much discount each region got.
    solution: |
      Rows: **Region**. The official file puts **Discount** in Values with **Count**:

      | Region | Count of Discount |
      |---|---|
      | Atlantic | 1,080 |
      | Northwest Territories | 394 |
      | Nunavut | 79 |
      | Ontario | 1,826 |
      | Prarie | 1,706 |
      | Quebec | 781 |
      | West | 1,991 |
      | Yukon | 542 |
      | Total | 8,399 |

      > [!warning] This counts orders, not discount
      > Every order has a discount value, so "Count of Discount" is simply the number of orders in each region (the total is 8,399). It does not say how much discount a region received. The brief's question is better answered with an average.
      >
      > AI-written answer, not official: change the field to **Average** of Discount. From the data, the average discount rate by region is Nunavut 5.23%, Yukon 5.08%, Atlantic 5.07%, Northwest Territories 5.01%, Prarie 4.99%, Quebec 4.98%, Ontario 4.91% and West 4.88% (checked against the data).
    related_terms: ["pivot-table", "value-field-settings"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-8-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-8-data.xlsx)
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-8-official-solution.xlsx): one pivot table per "Report" sheet.

*Related: [[Lec_07-Pivot Tables]]*
