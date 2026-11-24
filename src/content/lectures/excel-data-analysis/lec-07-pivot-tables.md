---
title: "Lec_07-Pivot Tables"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 7
tags:
  - excel-data-analysis
  - excel
  - pivot-table
  - pivot-chart
  - slicer
  - timeline
  - grouping
  - show-values-as
subject: excel-data-analysis
in_scope: true
---

# Pivot Tables

> Part of: [[Excel for Data Analysis]]
> Key concepts: [[Pivot Table]], [[Pivot Table Fields Pane]], [[Value Field Settings]], [[Show Values As]], [[Grouping Dates in a Pivot Table]], [[Pivot Table Top 10 Filter]], [[Slicer]], [[Timeline]], [[Report Connections]], [[Pivot Chart]]

> [!note] Source format
> The source is the class workbook `Pivot tables.xlsx`, not a slide deck. It has seven sheets: one raw data sheet (`TotalSales`) and six sheets holding eight pivot tables and five pivot charts. I read the pivot definitions straight from the file XML (fields, summary functions, filters, slicers, timelines), and the small result tables below are copied exactly from the values saved in the sheets. Where the workbook only shows a setup with no explanation, the explanation is mine and marked as reconstructed.

> [!info] Class file (download)
> [Pivot class data (xlsx)](/papers/excel-data-analysis/class-pivot-totalsales.xlsx): `Pivot2020_new.xlsx`, the Moodle copy of the `TotalSales` source data for this lecture.

## What a pivot table is

A [[Pivot Table]] summarises a long list of records into a compact report, without writing a single formula. Instead of `SUMIF`/`SUMIFS` per cell (see [[Lec_01-Sorting, Filters & Database Functions]] for the database-style alternatives), you drag field names into four areas and Excel does the grouping and aggregating.

| Area | What it does | Example in this workbook |
| --- | --- | --- |
| **Rows** | One output row per distinct value | Branch, Category, SalesPerson, Years |
| **Columns** | One output column per distinct value | Category, Quarters (Qtr1 to Qtr4) |
| **Values** | The number computed per cell (sum, average, count...) | Total_Income, Quantity, Commission |
| **Filters** | Restrict which source rows are used at all | Date range, top 3, label contains text |

> [!tip] Intuition
> Think of it as "group by the Rows and Columns, then apply a summary function to Values". A pivot with Rows = Branch and Values = Sum of Total_Income answers "what is the total income per branch?" in two drags.

## The source data: `TotalSales`

`TotalSales` is a flat list of **9,543 sales records** (rows 2 to 9544), columns `A:I`, with no formulas: every cell is a typed value.

| Date | Branch | Software | Category | UnitPrice | Quantity | SalesPerson | Total_Income | Commission |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01/01/2011 | Haifa | CorelDraw | Drawing | 280 | 8 | Ran Cohen | 2240 | 537.6 |
| 01/01/2011 | Rishon Letzion | CorelDraw | Drawing | 280 | 19 | Avi Dichter | 5320 | 957.6 |
| 01/01/2011 | Eilat | Decision Making | Office | 899 | 16 | Chaim Amsellem | 14384 | 1438.4 |
| 01/01/2011 | Eilat | Eudora | Office | 59 | 13 | Ariel Atias | 767 | 138.06 |
| 01/01/2011 | Eilat | Fire Wall | Security | 229 | 10 | Ariel Atias | 2290 | 526.7 |

(Dates are stored as serial numbers, for example 40544 is 1 January 2011; see [[Date Serial Number]] in [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]].)

Checks I ran against the full data: `Total_Income = UnitPrice * Quantity` on every row; grand total income is 38,914,061; total quantity is 132,774; dates run from 01/01/2011 to 30/12/2016; 7 branches, 20 software products, 7 categories, 33 sales people (some names are in Hebrew).

> [!warning] Rules for a good pivot source
> - One header row, with a **unique, non-blank name** in every column.
> - No blank rows or columns, no subtotal rows, one record per row.
> - Real dates (serial numbers), not text, or date grouping and the timeline will not work.
> - Everything in one column means one thing (do not mix numbers and text in `Quantity`).
>
> `TotalSales` meets all of these, which is why all eight pivots share a single pivot cache (the hidden snapshot of the source that Excel builds once; refreshed with *PivotTable Analyze > Refresh*). The cache source is `TotalSales!A1:I9544`.

## Building a basic pivot (the Sheet6 quantity report)

> [!note] Reconstructed from the workbook
> Steps are inferred from the saved pivot definition.

1. Click inside the data, then *Insert > PivotTable*; accept a new sheet.
2. Drag **Category** to *Rows*, then **Software** below it (nested row fields; the workbook has Software collapsed so only categories show).
3. Drag **Quantity** to *Values*. Excel defaults to **Sum of Quantity** because the column is numeric (a text column would default to *Count*).

Result on `Sheet6` (with the date filter below applied):

| Category | Sum of Quantity |
| --- | --- |
| AntiVirus | 2532 |
| compression | 1135 |
| Drawing | 1324 |
| Entertainment | 3769 |
| Office | 4731 |
| presentations | 2925 |
| Security | 2949 |
| **Grand Total** | **19365** |

This table is filtered, not the whole data: the pivot carries a **Date between 01/01/2015 and 31/12/2015** filter (driven by a timeline, see below) and a **Software label contains "r"** filter. I recomputed it from `TotalSales` with both conditions and got exactly these seven totals, so that is how this table is built.

> [!tip] Rows are sorted alphabetically by default
> Excel sorts row labels A to Z automatically. Sort by value instead through *More Sort Options* (the next pivot does this).

## Several summaries side by side (Sheet3)

Dragging **Total_Income** into *Values* more than once gives several columns from one field. The class built three:

| Value column | Setting | How it was made |
| --- | --- | --- |
| `Sum of Total_Income` | Summarise by **Sum** | default |
| `Average of Total_Income2` | Summarise by **Average** | *Value Field Settings > Summarize Values By > Average* |
| `Percentage_of _total income` | **Show Values As: % of Column Total** | *Value Field Settings > Show Values As* |

Rows = **Category**, sorted **descending** by income. When two value fields come from one source field, Excel renames the second (hence the trailing `2`); the class also renamed the percent column by hand through the *Custom Name* box.

| Category | Sum of Total_Income | Average of Total_Income2 | Percentage_of _total income |
| --- | --- | --- | --- |
| Office | 17051451 | 5209.73 | 43.82% |
| AntiVirus | 7237567 | 7815.95 | 18.60% |
| Security | 4867688 | 3236.49 | 12.51% |
| presentations | 3765405 | 3914.14 | 9.68% |
| Entertainment | 2165421 | 1526.02 | 5.56% |
| compression | 1943249 | 2017.91 | 4.99% |
| Drawing | 1883280 | 3796.94 | 4.84% |
| **Grand Total** | **38914061** | **4077.76** | **100%** |

(Percent and average values rounded from the stored full-precision numbers; for example Office is 17051451 / 38914061 = 0.43818.)

> [!warning] Common mistakes
> - **The Grand Total of an Average column is not the average of the averages.** It is the average over all 9,543 rows (4077.76). AntiVirus has the highest average per sale (7815.95) but only 18.6% of income, because Office has far more sales (3,273 records against 926).
> - **Sum vs Average answer different questions.** Total says "where is the money", average says "how big is a typical sale".
> - A *% of Column Total* column adds to 100%; *% of Row Total* adds to 100% across each row. Pick the one that matches the question.

> [!info] Show Values As options
> The same menu offers % of Grand Total, % of Row Total, % of Parent Total, Difference From, Running Total In, and Rank. The workbook only uses % of Column Total.

## Two row fields vs a column field: cross-tab (Sheet2)

Putting a field in *Columns* turns the pivot into a cross-tabulation. On `Sheet2`:

- **Rows**: SalesPerson (33 people)
- **Columns**: Category (7 categories)
- **Values**: Sum of Commission

Extract (first four people of 33, columns abbreviated; blanks mean that person sold none of that category):

| SalesPerson | AntiVirus | compression | Drawing | Entertainment | Office | presentations | Security | Grand Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alex Miller | 6207.24 | 1887.51 | 1167.60 | 2966.08 | 7644.14 | 1924.65 | 2371.19 | 24168.41 |
| Amnon Cohen | 36007.24 | 14621.04 | 13280.40 | 12147.85 | 85659.20 | 29431.50 | 32157.78 | 223305.01 |
| Arieh Eldad | 44491.61 | 9032.43 | 15752.80 | 13485.26 | 109346.39 | 16449.51 | 25452.03 | 234010.03 |
| Ariel Atias | 43488.84 | 11811.82 | 6137.60 | 11029.84 | 124474.55 | 16707.67 | 30768.82 | 244419.14 |
| **Grand Total** | 1099854.61 | 295826.53 | 287534.80 | 340796.65 | 2613903.14 | 598254.72 | 768565.95 | 6004736.40 |

Grand total commission over all data: 6,004,736.40. Some salespeople appear in blank cells (for example Avi Dichter sold only Drawing, total 957.60), and four sales people have Hebrew names that sort after the English ones.

> [!tip] When to use Columns
> Use Columns for a field with **few distinct values** (7 categories, 4 quarters). A field with 33 values makes a very wide report. Rows can hold many items; columns should not.

## Grouping by branch (Sheet1)

`Sheet1` repeats the idea with **Branch** in Rows and two value fields (sum and average of Total_Income):

| Branch | Sum of Total_Income | Average of Total_Income2 |
| --- | --- | --- |
| Eilat | 4533789 | 3942.43 |
| Haifa | 5331447 | 3975.72 |
| Jerusalem | 6336844 | 4168.98 |
| Kiryat Shmona | 3333066 | 4059.76 |
| Maccabim | 6139808 | 4112.40 |
| Rishon Letzion | 6469092 | 4048.24 |
| Tel Aviv | 6770015 | 4179.02 |
| **Grand Total** | **38914061** | **4077.76** |

This sheet also hosts two **slicers**, Category and Commission (see below), connected to this pivot.

## Grouping dates by year and quarter (Sheet8)

A pivot can group a date column automatically. Dragging the **Date** field into the Rows area (Excel 2016 and later) usually groups it for you; the class used *Group Field* to choose **Years** and **Quarters** (also **Months**, available in the cache). Excel creates three new helper fields in the Fields pane: `Years (Date)`, `Quarters (Date)` and `Months (Date)`.

`Sheet8` layout:

- **Rows**: Years
- **Columns**: Quarters
- **Values**: Sum of Total_Income

| Year | Qtr1 | Qtr2 | Qtr3 | Qtr4 | Grand Total |
| --- | --- | --- | --- | --- | --- |
| 2011 | 1485932 | 1420493 | 1217082 | 1130249 | 5253756 |
| 2012 | 1304075 | 1402866 | 1111633 | 1227155 | 5045729 |
| 2013 | 1161189 | 1194744 | 1273745 | 1060479 | 4690157 |
| 2014 | 2100735 | 1963246 | 2130905 | 2077722 | 8272608 |
| 2015 | 1791533 | 2082500 | 1869451 | 2377106 | 8120590 |
| 2016 | 1942409 | 1902661 | 2075863 | 1610288 | 7531221 |
| **Grand Total** | 9785873 | 9966510 | 9678679 | 9482999 | 38914061 |

I checked the yearly totals against the raw data and they match. The big step up in 2014 stands out and is a good example of what a pivot is for: the pattern is invisible in 9,543 rows and obvious in a six-row table. A pivot chart (clustered columns) is attached to this sheet.

> [!warning] Common mistakes with date grouping
> - **Grouping Quarters alone merges years.** If you tick only *Quarters*, every Qtr1 from 2011 to 2016 is added together. Always tick *Years* as well (as here) when the data spans several years.
> - **Text dates cannot be grouped.** You get "cannot group that selection". Convert them to real dates first ([[Lec_03-Calendars & Date Calculations]]).
> - Excel adds the labels `<01/01/2011` and `>30/12/2016` as catch-all bins for values outside the start and end dates; they stay empty here.
> - Group by *Days* with a number of days (for example 7) to build weekly buckets.

## Filtering inside a pivot

Pivot filters differ from sheet filters ([[Lec_01-Sorting, Filters & Database Functions]]): they hide pivot items without touching the source data. The workbook uses these filter types:

| Filter | Where | Meaning |
| --- | --- | --- |
| **Date Filters > Between** | Date | keep rows between two dates; Excel stored 01/01/2015 and 31/12/2015 (serials 42005 and 42369) |
| **Top 10 / Top 3 by Sum of Total_Income** | SalesPerson, Branch | keep only the 3 largest items by the value field |
| **Label Filters > Contains** | Software | keep items whose name contains a letter (here "r") |
| **Slicer** | Category | click to include or exclude categories |

> [!info] Top 10 filter
> [[Pivot Table Top 10 Filter]] is a *Value Filter*: choose Top 10, Items, set 3, "by" the value field. It is applied **after** the other filters, so it ranks only what remains. Despite the name, you can ask for Top or Bottom, Items, Percent or Sum.

> [!warning] Filters can be invisible
> Because `Sheet6` and `Sheet7` use date and top-3 filters, their Grand Total is not the Grand Total of the data (compare 19,365 to the 132,774 total quantity). When a pivot total looks too small, check the Filters area and the timeline.

## The Timeline

A [[Timeline]] is a visual date slider (*PivotTable Analyze > Insert Timeline*). It works only on a real date field and offers Years, Quarters, Months and Days levels.

The workbook has two timelines on the Date field (data range 2011 to 2018):

| Timeline | Sheet | Selection | Connected pivots |
| --- | --- | --- | --- |
| Date | `Sheet6` | 2015 (01/01/2015 to 31/12/2015) | the quantity-by-category pivot and the top-3 salespeople pivot |
| Date 1 | `Sheet7` | 2013 and 2014 (01/01/2013 to 31/12/2014) | the top-3 salespeople pivot and the top-3 branches pivot |

The class left a note in cell `C27` of `Sheet6`, next to the second pivot, which sums up the main trap:

> [!quote] Class note in cell C27 (Sheet6)
> To connect this pivot table to the date timeline, we have to go to pivot analyze, filter connections and connect it to the timeline to be dynamic to it.

In other words, a timeline (or slicer) only controls the pivots it is **connected to**. A new pivot is *not* connected automatically, even when it is on the same sheet. See [[Report Connections]] below.

Result of the second Sheet6 pivot (SalesPerson, top 3 by income, year 2015):

| SalesPerson | Sum of Total_Income |
| --- | --- |
| Haim Katz | 404727 |
| Limor Livnat | 490169 |
| Zeev Elkin | 404482 |
| **Grand Total** | **1299378** |

> [!warning] Top 10 ranks by value, but the display order is separate
> The three names are shown alphabetically, not ranked. Without a sort on the value field, "Top 3" tells you *which* three but not the order. I verified these are the three highest 2015 totals (Limor Livnat 490,169; Haim Katz 404,727; Zeev Elkin 404,482).

## Slicers

A [[Slicer]] is a set of buttons that filters a pivot on one field (*PivotTable Analyze > Insert Slicer*). Compared with the filter drop-down, it shows the current selection at a glance and can drive several pivots at once.

The workbook uses three slicers:

| Slicer | Sheet | Field | Connected to | Selection saved |
| --- | --- | --- | --- | --- |
| Category | `Sheet1` | Category | branch sum/average pivot | all 7 categories |
| Commission | `Sheet1` | Commission | the same pivot | all values selected |
| Category 1 | `Sheet7` | Category | both Sheet7 top-3 pivots | AntiVirus, Office and Security only |

`Sheet7` shows the real payoff: two pivots, one timeline (2013 to 2014) and one slicer (three categories) all linked, so one click updates both tables and both charts.

| SalesPerson | Total | Branch | Total |
| --- | --- | --- | --- |
| Israel Hasson | 448101 | Jerusalem | 1612239 |
| Shmuel Halpert | 495892 | Rishon Letzion | 1625873 |
| Yisrael Katz | 488870 | Tel Aviv | 1715072 |
| **Grand Total** | **1432863** | **Grand Total** | **4953184** |

Left: top three salespeople. Right: top three branches. Both are for 2013 to 2014, Security, Office and AntiVirus only; I reproduced both from the raw data.

> [!warning] Slicer on a numeric field
> The `Commission` slicer is built on a column with 4,128 distinct values, so it is a huge, unusable button list. Slicers suit fields with **few** categories (Category, Branch, Year). For numeric ranges use a value filter or grouping.

> [!info] Report Connections
> [[Report Connections]] (right-click the slicer or timeline > *Report Connections*, or *PivotTable Analyze > Filter Connections*) is a checkbox list of every pivot built on the **same pivot cache**. Tick the pivots the control should drive. Pivots built from a different source or a separately created cache will not appear in the list. This is why it matters that all eight pivots here share one cache.

## Pivot charts

Five clustered-column [[Pivot Chart]]s sit next to the pivots, each tied to one pivot table: the Sheet6 pair, the Sheet7 pair and the quarter-by-year chart on Sheet8. A pivot chart is a normal chart that follows its pivot: change the pivot (filter, slicer, timeline, drag a field) and the chart redraws. You cannot use some chart types (such as scatter) on a pivot chart.

## Refreshing and when pivots go stale

> [!warning] Pivots do not update themselves
> Editing a value in `TotalSales` does not change any pivot until you press **Refresh** (or *Refresh All*). A pivot reads the cached snapshot, not the sheet. Adding new rows below the data also needs the source range extended (*Change Data Source*) unless the data is an Excel table.

## The class file, sheet by sheet

`Pivot2020_new.xlsx` has a single sheet, `TotalSales`: the flat list of sales records in `A1:I9544` (header in row 1, frozen), with the columns Date, Branch, Software, Category, UnitPrice, Quantity, SalesPerson, Total_Income and Commission. It contains **only the data**: no pivot tables, charts, slicers or formulas. It is the clean starting point from which the pivot tables of this lecture are built in class (insert a [[Pivot Table]] from `A1:I9544`, then drag fields in the [[Pivot Table Fields Pane]]). Build the pivots yourself on it and compare with the reports described above.

## Summary

- A [[Pivot Table]] groups records by Rows and Columns fields and aggregates Values; source data must be a clean, headed, flat list.
- *Value Field Settings* switch the summary (Sum, Average, Count) and **Show Values As** gives percentages (% of Column Total, 43.82% for Office).
- Date fields group into Years, Quarters and Months; always include Years when quarters span several years.
- Filters (date between, top N, label contains) change the grand total; check them when totals look small.
- A [[Timeline]] filters by date and a [[Slicer]] filters by category; each only affects pivots **connected** through Report Connections.
- Pivot charts mirror their pivot; refresh after changing the data.

## Related notes

- [[Excel for Data Analysis]]
- [[Lec_01-Sorting, Filters & Database Functions]] (sheet filters and database functions, the non-pivot way to summarise)
- [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation]] (dates as serial numbers)
- [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (pulling single values rather than summaries)
- [[Lec_08-VBA Macros]] (automating repetitive pivot refreshes)
