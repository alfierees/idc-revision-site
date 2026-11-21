---
title: Excel for Data Analysis Concepts
description: Single glossary of every concept used across the Excel for Data Analysis notes.
tags:
  - meta
  - glossary
  - index
  - excel-data-analysis
aliases:
  - Excel Glossary
subject: excel-data-analysis
in_scope: true
---

# Excel for Data Analysis Concepts

> One-stop glossary for Excel for Data Analysis (Year 1, Semester 1). Each entry: a one-line definition, then the lecture note that teaches it. Other lectures that use the concept are marked `Also in`.
>
> Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Excel for Data Analysis]].

---

## Sorting and filtering

### Sorting
Reorders whole rows by one or more keys, including by cell colour. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### AutoFilter
Header drop-downs that hide non-matching rows; filters on different columns combine with AND. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### SUBTOTAL
Totals or averages only the rows left visible after a filter, with the function chosen by a number. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### Wildcard
`*` stands for any run of characters, `?` for one character, `~` escapes them; works on text only. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### Advanced Filter
Filter driven by a criteria range, which can also copy the results to another place. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### Criteria Range
Block of cells with exact column headers and conditions beneath; same row means AND, different rows mean OR. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### FILTER
Dynamic-array function that spills the matching rows; multiply conditions for AND, add them for OR. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

## Database functions

### Database Function
D-functions that calculate over only the records matching a criteria range, taking database, field and criteria. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### DAVERAGE
Database function returning the average of a field over the records that match the criteria. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### DCOUNT
Database function counting the numeric cells of a field in the records that match the criteria. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### DSUM
Database function adding up a field over the records that match the criteria. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

## Logical functions

### IF Function
Returns one value if a test is TRUE and another if it is FALSE. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

### Logical Test
An expression Excel answers with TRUE or FALSE, usually a comparison. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

### AND Function
TRUE only when all of its tests are true. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

### OR Function
TRUE when at least one of its tests is true. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

### Nested IF
An IF placed inside another IF's true or false slot to handle several cases or bands; also written in VBA with `ElseIf`. Also in [[Lec_08-VBA Macros|Lec 08]]. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

## Dates

### Date Serial Number
Excel stores a date as the count of days since 30 December 1899, so dates can be added, subtracted and compared. Also in [[Lec_03-Calendars & Date Calculations|Lec 03]]. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### DATE
Builds a real date from year, month and day; a month above 12 rolls into the next year. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### DATEVALUE
Converts a date written as text into a real date value. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### DAY
Extracts the day of the month from a date; companion of MONTH and YEAR. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### MONTH
Extracts the month number from a date. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### YEAR
Extracts the year from a date. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### TODAY
Returns the current date, recalculated each time the workbook opens or recalculates. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### NOW
Returns the current date and time, recalculated like TODAY. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### WEEKDAY
Returns the day of the week as a number; the return type picks the scheme (1 = Sunday first, 2 = Monday first). Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### WEEKNUM
Returns the week of the year for a date. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### EDATE
Shifts a date forward or back by a whole number of months. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### EOMONTH
Returns the last day of the month, shifted by n months; `EOMONTH(date,-1)+1` gives the first of the month. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### DATEDIF
Hidden function giving complete years, months or days between two dates; the start must be earlier than the end. Also in [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### Calendar
A month grid built from formulas: pick a month and year from drop-downs, then `DATE`, `WEEKDAY` and `EOMONTH` place each day under the right weekday. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

## Time

### Time as a Fraction of a Day
Excel stores a time as the fractional part of a day (0.5 is noon), so times can be added, subtracted and compared; multiply by 24 for hours. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### TIME
Builds a time value from hour, minute and second numbers. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### TIMEVALUE
Converts a time written as text into a time value. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### HOUR
Returns the hour component of a time as a whole number. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### MINUTE
Returns the minute component of a time as a whole number. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### SECOND
Returns the second component of a time as a whole number. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### Time Format
A number format that changes how a time is displayed (h:mm, h:mm AM/PM and so on) without changing its value. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### Elapsed Time Format
The format `[h]:mm`, which shows total hours without wrapping at 24. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### Timesheet
Monthly attendance sheet that converts start and stop times into regular hours, overtime and pay. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

## Names, validation and protection

### Named Range
A label for a cell or range, set in the Name Box, that formulas can use instead of the address. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### Data Validation
Rules limiting what can be entered in a cell, such as a drop-down list or a date range. Also in [[Lec_03-Calendars & Date Calculations|Lec 03]]. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### Sheet Protection
Review > Protect Sheet, which enforces the Locked and Hidden flags; a password is optional. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

### Locked and Unlocked Cells
Per-cell flag set in Format Cells > Protection; only takes effect once the sheet is protected. → [[Lec_05-Time Functions & Protecting Cells|Lec 05]]

## Lookups

### XLOOKUP
Finds a key in one range and returns the matching item from another range of the same size. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### Exact Match
Lookup mode (`0`) that returns a result only if the key is identical. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### Approximate Match
Lookup that falls back to the nearest key when there is no exact one, for example to place a salary in a band. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### Match Mode
XLOOKUP argument: 0 exact, -1 next smaller, 1 next larger, 2 wildcard. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### Lookup Table
Small reference table (branches to area, salary bands to bonus) that a lookup reads. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### INDEX and MATCH
Pairing where MATCH finds a position and INDEX returns the cell at that position. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### MATCH
Returns the position of a value within a range. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### INDEX
Returns the cell at a given row and column of a range. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

### HLOOKUP
Exact lookup across a row instead of down a column. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

## Pivot tables

### Pivot Table
Report that groups a flat list by row and column fields and aggregates values without writing formulas. Also in [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]. → [[Lec_07-Pivot Tables|Lec 07]]

### Pivot Table Fields Pane
Panel where fields are dragged into Rows, Columns, Values and Filters. → [[Lec_07-Pivot Tables|Lec 07]]

### Value Field Settings
Dialog to change a value field's summary function, name and Show Values As option. → [[Lec_07-Pivot Tables|Lec 07]]

### Show Values As
Option that displays a value as a share or comparison, for example percent of column total. → [[Lec_07-Pivot Tables|Lec 07]]

### Grouping Dates in a Pivot Table
Bundling a real date field into years, quarters, months or days. → [[Lec_07-Pivot Tables|Lec 07]]

### Pivot Table Top 10 Filter
Value filter keeping only the top or bottom N items by a value field. → [[Lec_07-Pivot Tables|Lec 07]]

### Slicer
Button panel that filters a pivot on one field and can drive several pivots at once. → [[Lec_07-Pivot Tables|Lec 07]]

### Timeline
Date slider filter (years, quarters, months, days) for pivots. → [[Lec_07-Pivot Tables|Lec 07]]

### Report Connections
Checkbox list of pivots sharing a cache that a slicer or timeline controls. → [[Lec_07-Pivot Tables|Lec 07]]

### Pivot Chart
Chart bound to a pivot table that redraws when the pivot changes. → [[Lec_07-Pivot Tables|Lec 07]]

## VBA macros

### VBA Macro
A named `Sub ... End Sub` block of Visual Basic code stored in the workbook. → [[Lec_08-VBA Macros|Lec 08]]

### Macro-Enabled Workbook
A `.xlsm` or `.xlsb` file that can keep macros; a plain `.xlsx` drops them. → [[Lec_08-VBA Macros|Lec 08]]

### Macro Button
A shape on the sheet with a macro assigned to it. → [[Lec_08-VBA Macros|Lec 08]]

### Macro Recorder
Records your clicks and writes them as VBA code. → [[Lec_08-VBA Macros|Lec 08]]

### MsgBox
VBA statement that shows a pop-up message box. → [[Lec_08-VBA Macros|Lec 08]]

### Variable Declaration in VBA
`Dim name As Type` reserves a typed variable. → [[Lec_08-VBA Macros|Lec 08]]

### InputBox
VBA dialog that returns what the user typed. → [[Lec_08-VBA Macros|Lec 08]]

### For Next Loop
Repeats a block of VBA code while a counter changes. → [[Lec_08-VBA Macros|Lec 08]]

## Formula basics

### Absolute Reference
A reference locked with `$` so it does not move when copied (`$B$1`, `B$1`, `$A2`). Also in [[Lec_02-IF Statements & Logical Functions|Lec 02]], [[Lec_03-Calendars & Date Calculations|Lec 03]], [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### Cross-Sheet Reference
A reference to another sheet, written `'Sheet name'!J2`; single quotes are needed when the name has spaces. → [[Lec_02-IF Statements & Logical Functions|Lec 02]]

### FORMULATEXT
Shows another cell's formula as text. Also in [[Lec_05-Time Functions & Protecting Cells|Lec 05]]. → [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec 04]]

### Conditional Formatting
Cell format applied by a rule, by value or by formula; also used to hide cells such as calendar overflow days. Also in [[Lec_03-Calendars & Date Calculations|Lec 03]], [[Lec_05-Time Functions & Protecting Cells|Lec 05]]. → [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]

### SEQUENCE
Dynamic-array function that spills a list of numbers from rows, columns, start and step. Also in [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]. → [[Lec_03-Calendars & Date Calculations|Lec 03]]

### Spill Range
The block of cells that one formula fills automatically when it returns several values. Also in [[Lec_01-Sorting, Filters & Database Functions|Lec 01]]. → [[Lec_06-Lookups with XLOOKUP and INDEX MATCH|Lec 06]]

## Aliases & Shorthands

### IF Statement
See [[#IF Function]].

### DATE and DATEVALUE
See [[#DATE]].

### DAY, MONTH and YEAR
See [[#DAY]].

### TODAY and NOW
See [[#TODAY]].

### WEEKDAY and WEEKNUM
See [[#WEEKDAY]].
