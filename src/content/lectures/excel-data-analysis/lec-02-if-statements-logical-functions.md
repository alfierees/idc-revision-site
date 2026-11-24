---
title: "Lec 02: IF Statements & Logical Functions"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 2
tags:
  - excel-data-analysis
  - lecture
  - if-function
  - nested-if
  - and-or
  - logical-functions
  - cross-sheet-reference
  - absolute-reference
source: "Class files/If statements.xlsx"
subject: excel-data-analysis
in_scope: true
---

# Lec 02: IF Statements & Logical Functions

> [!abstract] What this lecture is about
> How to make Excel **decide** for each row. The class workbook takes the same 200-employee table used in [[Lec_01-Sorting, Filters & Database Functions]] and adds eight new columns, each one a different kind of `IF` formula: a simple bonus rule, a text label, an `OR` test, an `AND` test, `AND` wrapped around `OR`, `OR` wrapped around two `AND`s, an `IF` inside an `IF`, and a three-level [[Nested IF]]. This is the **new** material in the `If statements` sheet (about 1,800 formulas).

> [!info] Source and scope
> The source is a workbook, not a slide deck. The sheet `If statements` holds the new content. The other sheets (`employees`, `Sorting`, `Sorting 2`, `Filter`, `Filter 2`, `Filter 3`, `Filters advanced`, `Filters advanced 2`) repeat the earlier lecture: see [[Lec_01-Sorting, Filters & Database Functions]]. The one earlier sheet this lecture depends on is `Filters advanced`, because the `IF` formulas read the employee data **from there** (see [[#Cross-sheet references]]).

## The data being tested

Every formula in this lecture reads the same employee table (columns A to J, rows 2 to 201, 200 employees). The first rows of the `If statements` sheet, copied exactly. Dates are stored as serial numbers; Excel shows them as dates.

| Employee ID | First Name | Branch | Department | Hire Date (serial) | Seniority | Position | Monthly Salary in NIS |
|---|---|---|---|---|---|---|---|
| 10002 | Lilach | Eilat | Computing | 39738 | 6 | Supporter | 4095 |
| 10013 | Tamir | Tiberias | Planning | 35538 | 17 | Department Director | 4365 |
| 10020 | Danny | Metula | Bookkeeping | 40834 | 3 | Assistant | 4770 |
| 10031 | Pini | Rishon Lezion | Sales | 40387 | 4 | Supporter | 4950 |
| 10033 | Svetlana | Haifa | Human Resources | 33040 | 24 | Supporter | 4005 |
| 10042 | Sharon | Acre | Sales | 30150 | 32 | Supporter | 4545 |
| 10047 | Nurit | Acre | Computing | 30391 | 31 | Head of | 4500 |

The new columns are added to the right of the table, one rule per column:

| Column | Header in the sheet | Rule |
|---|---|---|
| K | Bonus | Simple `IF`: bonus depends on salary |
| L | Salary +Bonus | Plain addition, uses K |
| M | Seniority Desccription (sic) | `IF` returning text: Senior or Junior |
| N | South | `IF` with `OR` |
| O | Bonus if gadi | `IF` with `AND`, returns a calculation |
| P | Present | `AND` containing an `OR` |
| Q | 123/abc | `OR` containing two `AND`s (date ranges) |
| R | Promotion | `IF` inside an `IF` |
| S | Sen check | Three-level nested `IF` |

## The IF function

> [!tip] Definition: [[IF Function]]
> `IF` asks one yes/no question and returns one value if the answer is yes and another if it is no.

The lecturer's own syntax note, written in cell `V3`:

```excel
=IF(logical_test, value_if_true, value_if_false)
```

The first argument is a [[Logical Test]]: anything Excel can answer with TRUE or FALSE, such as `J2>10000` ("is salary above 10,000?"). The second argument is what to return when the test is TRUE, the third when it is FALSE. The returned value can be a number, a piece of text in quotes, a cell reference, a calculation, or even another function.

### Comparison operators used in the sheet

| Operator | Meaning |
|---|---|
| `=` | equal to |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `<>` | not equal to (shown in the Lec_01 criteria area as "means NOT") |

## Putting the rule values in cells, not in the formula

The class never types the numbers directly into the formulas. Every threshold and every returned value sits in a labelled cell **below the data** (rows 203 to 214), and the formula points at it with an [[Absolute Reference]]. For the bonus rule (columns K and L area):

| Cell | Contents |
|---|---|
| `K204` | Salary greater (label) |
| `K205` | 10000 |
| `K206` | Give (label) |
| `K207` | 500 |
| `K208` | Else, give (label) |
| `K209` | 1000 |

> [!tip] Why this is good practice
> If the threshold changes from 10,000 to 12,000, you edit **one cell** (`K205`) and all 200 rows update. Hard-coding `10000` inside 200 formulas would mean editing them all. It also makes the rule readable: the labels next to the numbers say what each one means.

## Example 1: the bonus rule (simple IF)

The rule: if the monthly salary is greater than the threshold in `K205`, give the amount in `K207`, otherwise give the amount in `K209`.

```excel
=IF('Filters advanced'!J2>'If statements'!$K$205,'If statements'!$K$207,'If statements'!$K$209)
```

Then `L2` adds the bonus to the salary:

```excel
=K2+'Filters advanced'!J2
```

For `Lilach` (salary 4095, not above 10,000) the formula returns `K209` = 1000, so `L2` = 5095. That matches the sheet. Over the 200 rows, 149 employees get 1000 and 51 get 500.

> [!warning] Read the rule carefully
> With these cells the **higher** earners (above 10,000) get the **smaller** bonus (500) and everyone else gets 1000. That is how the sheet is set up (`K206` says "Give" next to 500). If you wanted a bonus that rewards high earners, you would swap `K207` and `K209`. Always check which branch a value sits in before trusting the output.

> [!note] A simpler first version exists in the earlier workbook
> In `Sorting .xlsx`, the `Filters advanced` sheet already holds the plain version `=IF(J2>$K$204,$L$204,$L$205)` with the values in `L204` and `L205`. The `If statements` sheet rebuilds the same idea with the cross-sheet references below.

## Cross-sheet references

The data columns A to J on the `If statements` sheet are a copy of the table on `Filters advanced` (checked: all 2,000 cells match). The formulas, however, read from `Filters advanced`, which is why they look long: `'Filters advanced'!J2` means "cell `J2` on the sheet called `Filters advanced`".

Two things to know:

- **Sheet names with spaces need single quotes**: `'Filters advanced'!J2`, not `Filters advanced!J2`.
- A formula can mix references to two sheets. In the bonus formula, the salary comes from `'Filters advanced'!J2` while the rule cells come from `'If statements'!$K$205`. Excel adds the sheet name automatically when you click a cell on another sheet while building the formula.

> [!note] Reconstructed from the workbook
> Why the lecturer pointed at the other sheet is not explained in the file. The likely reason is that the practice data and the rule cells for some tasks (the Gadi 10 percent rule, the Eilat/Beer Sheba rule) were already written on `Filters advanced` in rows 204 to 209, so those formulas reference both sheets.

### Absolute vs relative references when copying down

When you drag the formula down from row 2 to row 201:

- `'Filters advanced'!J2` is **relative**: it becomes `J3`, `J4`, and so on, so each row tests its own salary.
- `$K$205` is **absolute**: the dollar signs lock it, so every row compares against the same threshold cell.

Forgetting the dollar signs is the classic error: the threshold would slide down to `K206`, `K207` and the results turn to nonsense.

## Example 2: returning text (Senior or Junior)

Column M labels each employee by comparing seniority with the average seniority, which is calculated in `M205`:

| Cell | Contents |
|---|---|
| `M204` | Average seniority (label) |
| `M205` | `=AVERAGE('Filters advanced'!H2:H201)`, result 15.795 |
| `M206` | Senior |
| `M207` | Junior |

```excel
=IF('Filters advanced'!H1>'If statements'!$M$205,'If statements'!$M$206,'If statements'!$M$207)
```

In words: if seniority is above the average, write the text in `M206` (Senior), otherwise the text in `M207` (Junior). Using cells for the words means the labels can be renamed in one place.

> [!bug] Off-by-one error in the class file
> Look at the first reference: `H1`, not `H2`. Row 2 of column M tests the seniority of the **header row** above it, and every row below tests the previous employee. So `Lilach` (seniority 6) shows "Senior", because `H1` contains the text "Seniority" and Excel treats any text as **greater than** any number. Tamir (row 3) is labelled using Lilach's seniority 6, so he shows "Junior" although his own seniority is 17. The label in each row describes the row above. The fix is to point at `H2` in row 2. This is a good example of why you should spot-check a few rows against the data after filling a formula down.

## Logical functions: AND and OR

The lecturer's syntax notes sit in `V4` and `V5`, with the meaning in `W4:X5`:

| Function | Syntax (from the sheet) | True when | False when |
|---|---|---|---|
| [[AND Function]] | `AND(logical1, logical2)` inside `IF` | all tests are true | one or more tests are false |
| [[OR Function]] | `OR(logical1, logical2)` inside `IF` | at least one test is true | all are false |

The columns `W2` and `X2` ask "When is it true? When is it false?" as the question for the table above.

Neither function returns text or numbers on its own: each returns TRUE or FALSE, and it is the surrounding `IF` that turns that into the value you want. `AND` and `OR` accept many tests, not just two (column P uses three inside one `OR`).

## Example 3: OR (the South label)

The task: if the branch is Eilat **or** Beer Sheba, write "south", otherwise leave the cell empty. The branch names and the label sit in `Filters advanced`: `D208` = Eilat, `D209` = Beer Sheba, `D204` = south.

```excel
=IF(OR('Filters advanced'!D2='Filters advanced'!$D$208,'Filters advanced'!D2='Filters advanced'!$D$209),'Filters advanced'!$D$204,"")
```

`""` means "an empty text string": the cell looks blank. Result: 34 employees get "south", 166 stay blank. Lilach (Eilat) gets "south".

## Example 4: AND (bonus for Gadi)

The task, written in `B204` of `Filters advanced`: if the name is Gadi **and** seniority is greater than 8, give a 10 percent bonus, otherwise give a 7 percent bonus. Rule cells: `B206` = Gadi, `B207` = 8.

```excel
=IF(AND('Filters advanced'!B2='Filters advanced'!$B$206,'Filters advanced'!H2<'Filters advanced'!$B$207),'Filters advanced'!J2*1.1,'Filters advanced'!J2*1.07)
```

This one **returns a calculation**: multiplying by `1.1` adds 10 percent, by `1.07` adds 7 percent. For Lilach: `4095*1.07` = 4381.65, matching the sheet.

> [!bug] The formula does not match the written rule
> The task text says seniority **greater than** 8, but the formula tests `H2<$B$207`, which is **less than** 8. As built, a Gadi with seniority under 8 gets 10 percent and everyone else gets 7 percent. For example the Gadi in row 130 has seniority 4 and salary 8622, giving 9484.20 (a 10 percent uplift). If the written task is the truth, `<` should be `>`. When a formula and its instructions disagree, test one row by hand to see which behaviour you actually built.

> [!tip] Common mistake with AND
> Typing the name test as `B2="Gadi"` works too, but putting "Gadi" and "8" in cells (as done here) lets you change the rule without touching the formula.

## Example 5: AND with an OR inside it

The task, from `P203`: if the first name is Gadi, Danny **or** Hanney **and** they have an above-average salary, give a book, otherwise give a plane ticket.

The rule cells:

| Cell | Contents |
|---|---|
| `P204` | `=AVERAGE('Filters advanced'!J2:J201)`, result 8146.32 (the average salary) |
| `P205` | Gadi |
| `P206` | Danny |
| `P207` | Hanney |
| `P208` | Book |
| `P209` | Plane ticket |

```excel
=IF(AND(OR('Filters advanced'!B2='If statements'!$P$205,'Filters advanced'!B2='If statements'!$P$206,'Filters advanced'!B2='If statements'!$P$207),'Filters advanced'!J2>'If statements'!$P$204),'If statements'!$P$208,'If statements'!$P$209)
```

How to read a nested logical test: work from the **inside out**.

1. The inner `OR(...)` is TRUE if the name is any of the three.
2. The outer `AND(...)` needs that `OR` to be TRUE **and** the salary to be above `P204`.
3. If both hold, return `P208` (Book), otherwise `P209` (Plane ticket).

Result over 200 rows: 14 books, 186 plane tickets. Row 31, Hanney with salary 8851 (above the average 8146.32), is a book. Row 33, another Hanney on 6255, is a plane ticket.

> [!tip] Why not three separate ANDs?
> `OR` inside `AND` is the compact way to say "(A or B or C) and D". Writing it without the `OR` would force you to repeat the salary test three times.

## Example 6: OR with two ANDs inside it (date ranges)

The task, from `Q203`: if the hire date is between 1/1/2000 and 1/1/2005, **or** the birth date is between 1/1/1966 and 1/1/1988, write "123", otherwise "abc".

The rule cells hold the dates as serial numbers (what Excel stores for a date):

| Cell | Serial | Date |
|---|---|---|
| `Q205` | 36526 | 1/1/2000 |
| `Q206` | 38353 | 1/1/2005 |
| `Q207` | 24108 | 1/1/1966 |
| `Q208` | 32143 | 1/1/1988 |
| `Q209` | text | 123 |
| `Q210` | text | abc |

```excel
=IF(OR(AND('Filters advanced'!G2>='If statements'!$Q$205,'Filters advanced'!G2<='If statements'!$Q$206),AND('Filters advanced'!F2>='If statements'!$Q$207,'Filters advanced'!F2<='If statements'!$Q$208)),'If statements'!$Q$209,'If statements'!$Q$210)
```

Structure: `OR( AND(hire in range), AND(birth in range) )`. A "between" test needs **two** comparisons joined by `AND`, because Excel has no single "between" operator in a formula. Each `AND` checks one date range, and the `OR` accepts either.

`F` is Birth Date and `G` is Hire Date, so be careful which column you test against which range. Row 2: Lilach was born 16/02/1978, inside the birth range, so she gets "123". Row 7: born 20/05/1963 and hired 18/07/1982, in neither range, so "abc". Over the 200 rows: 124 are "123" and 76 are "abc".

> [!note] Dates are numbers
> Comparisons on dates work because Excel stores dates as serial numbers (days since 30 December 1899). `36526` is 1 January 2000. Dates and their functions are covered in [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec_04-Date Functions]].

## Example 7: an IF inside an IF

The task, from `R203`: if the department is Sales **or** Computing, check the hire date: if it is after 1/1/2005 write "promotion", otherwise "next year". For all other departments write "tbd".

Rule cells: `R205` = Computing, `R206` = Sales, `R207` = 38353 (1/1/2005), `R208` = promotion, `R209` = next year, `R210` = tbd.

```excel
=IF(OR(E2=$R$205,E2=$R$206),IF(G2>$R$207,$R$208,$R$209),$R$210)
```

The inner `IF` is placed in the **value_if_true** slot of the outer `IF`. It only runs for Sales and Computing staff:

| Department | Hire date | Result |
|---|---|---|
| Sales or Computing | after 1/1/2005 | promotion |
| Sales or Computing | on or before 1/1/2005 | next year |
| anything else | any | tbd |

Counts over the 200 rows: 12 promotion, 38 next year, 150 tbd. Row 2 (Lilach, Computing, hired 17/10/2008) is "promotion"; row 7 (Sharon, Sales, hired 18/07/1982) is "next year"; row 3 (Tamir, Planning) is "tbd".

> [!tip] Where the nested IF goes
> The second `IF` can sit in either the true slot or the false slot, depending on which branch needs a further question. Here only the "Sales or Computing" branch needs the extra date question, so it lives in the true slot.

> [!note] Conditional formatting on the sheet
> The sheet also highlights rows whose department equals `E204` (Computing) with the rule `$E2=$E$204`, plus colour bands on salary (under 5000, 5000 to 10000, over 10000) and seniority above 24. These are visual helpers, not part of the formulas.

## Example 8: a nested IF with several levels

The task, from `S203`: seniority from 0 to 10 (inclusive) is "young", 10 to 20 inclusive is "older", 20 to 30 inclusive is "oldest", and over 30 is "OMG". The cut-offs are in `S205`, `S207`, `S209` (10, 20, 30) and the labels in `S206`, `S208`, `S210`, `S212`.

```excel
=IF(H2<=$S$205,$S$206,IF(H2<=$S$207,$S$208,IF(H2<=$S$209,$S$210,$S$212)))
```

> [!note] Reconstructed from the workbook
> Cell `S214` holds the lecturer's sketch of this formula, typed as text: `if(sen<=10, young, if(sen<=20, older, if(sen,=30, oldest, OMG)))`. It has a typo (`sen,=30`); the working formula in column S is the version above, which uses `<=30`. The `S211` cell holds the word ELSE next to `OMG`.

Each `IF` has only one "yes" answer and passes everything else down to the next question:

| Question asked (in order) | If yes, return |
|---|---|
| Seniority <= 10? | young |
| otherwise, seniority <= 20? | older |
| otherwise, seniority <= 30? | oldest |
| otherwise (more than 30) | OMG |

Results: 63 young, 80 older, 38 oldest, 19 OMG. Row 2 (seniority 6) is young, row 3 (17) is older, row 6 (24) is oldest, row 7 (32) is OMG.

> [!tip] Why you do not write "greater than 10" in the second test
> Because the first test already caught everything up to 10, by the time Excel reaches the second `IF` the value must be **above 10**. So testing only `<=20` is enough. This "waterfall" logic is what makes nested `IF` compact, and also what makes the **order** of the tests matter. If you put `H2<=30` first, everyone up to 30 would be labelled by that test and the other labels would never appear.

> [!warning] Common nested IF mistakes
> - **Wrong order**: always go from the smallest cut-off up (with `<=`) or the largest down (with `>=`), never mixed.
> - **Mismatched brackets**: one closing bracket per `IF`, all at the end. Here there are three `IF`s, so three `)` at the end.
> - **Forgetting the final else**: if the last `IF` has no third argument, rows that match nothing return FALSE.
> - **Equals sign in the wrong place**: use `<=`, not `=<`.

## How to choose the right tool

| Situation | Use |
|---|---|
| One yes/no question | plain `IF` |
| Several conditions that must **all** hold | `IF` + `AND` |
| Several conditions where **any one** is enough | `IF` + `OR` |
| "Between two values" | `AND` of a `>=` test and a `<=` test |
| A second question only on one branch | `IF` inside `IF` |
| Many bands in a row (grades, age groups) | nested `IF`, one level per band |

## Quick recap

- `IF(test, if_true, if_false)` returns one of two values; the test must evaluate to TRUE or FALSE.
- `AND` needs every test to be true, `OR` needs at least one.
- Keep thresholds and labels in cells and point at them with absolute references (`$K$205`).
- Relative references (`J2`) move down with the formula, absolute ones (`$K$205`) do not.
- Sheet names with spaces are written in single quotes: `'Filters advanced'!J2`.
- `""` returns an empty-looking cell.
- Nested `IF`s are read top to bottom: the first test that is true wins.
- After filling a formula down, spot-check several rows. Two of the formulas in this class file (column M and column O) do not match what they are meant to do.

## Links

- Previous: [[Lec_01-Sorting, Filters & Database Functions]]
- Next: [[Lec_03-Calendars & Date Calculations]] and [[Lec_04-Date Functions, Named Ranges & Data Validation|Lec_04-Date Functions]] (dates stored as numbers, which the date-range tests above rely on)
- Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (a lookup is the alternative to a long nested `IF` when there are many bands)
