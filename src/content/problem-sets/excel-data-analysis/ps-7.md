---
title: "HA 7"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-7-questions.pdf
official_solution: /papers/excel-data-analysis/ha-7-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). Question 3 (the pension contribution) looks wrong in the official file: it uses lower bounds 20 and 30 and an 'exact or next larger' lookup, so it pays 7% for a seniority of 10 where the table says 0%. The corrected version is given on the question 3 page."
tags:
  - excel-data-analysis
  - problem-set
  - xlookup
  - index-and-match
  - approximate-match
  - data-validation
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Fill the employee card.** On the sheet "Analysis by employee", populate the 12 cells highlighted in green with XLOOKUP, using the data in the "Employees" sheet. The employee number sits in cell C2.
    solution: |
      One [[XLOOKUP]] per cell. Each formula has the same first two arguments (what to look for and where), and differs only in the **return array**, the column to read:

      ```
      =XLOOKUP($C$2,Employees!A:A,Employees!C:C)
      ```

      `$C$2` is the employee number typed by the user, `Employees!A:A` is the Employee Number column, and the last argument is the column to return. The [[Absolute Reference]] `$C$2` makes sure every one of the 12 formulas points at the same input cell.

      | Card field (cell) | Return column in "Employees" |
      |---|---|
      | Last Name (`C3`) | `C:C` |
      | First Name (`C4`) | `B:B` |
      | Date of Birth (`C5`) | `F:F` |
      | Branch (`C6`) | `D:D` |
      | Department (`C7`) | `E:E` |
      | Start of work date (`C8`) | `G:G` |
      | seniority (`C9`) | `H:H` |
      | Role (`C10`) | `I:I` |
      | Area (`C11`) | `N:N` |
      | Salary ratio (`C12`) | `O:O` |
      | Monthly salary in NIS (`C13`) | `J:J` |
      | Monthly salary in NIS including bonus (`C14`) | `L:L` |

      The default match mode is exact, which is right for an ID. Format the two date cells (`C5`, `C8`) as dates, otherwise Excel shows serial numbers such as 24504.

      Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (section 2).
    related_terms: ["xlookup", "exact-match", "absolute-reference", "date-serial-number"]
  - id: "2"
    text: |
      **Test with another employee.** Change the employee number in C2 to 10060 and check that every value on the card matches the Employees sheet.
    solution: |
      Type `10060` in `C2` and compare each card cell with row of employee 10060 in the "Employees" sheet. All 12 cells update at once because they share `$C$2`. In the data, employee 10060 has a seniority of 29 years and a monthly salary of 10,071 NIS (11,078.10 NIS with bonus).

      Checking a second ID is the habit that catches wrong column references: if one card cell showed a value from a neighbouring column, it would be wrong for every employee, but you would only notice by comparing against the source.
    related_terms: ["xlookup", "exact-match"]
  - id: "3"
    text: |
      **Pension contribution from the bonus.** The company contributes to a pension fund based on the employee's bonus, and the percentage depends on seniority: 1-10 years 0%; 11-20 years 7%; 21-30 years 8%; 31+ years 9%. Copy the table to the sheet and calculate the contribution in cell C18. Then change the employee number to 10160 and check that the pension contribution has changed.
    solution: |
      **Idea.** The bonus is the difference between the salary with bonus and without it: `C14-C13`. The percentage comes from the table with an **approximate match**: look the seniority up in a column of **lower bounds** and take the nearest bound that is not larger than the seniority ([[Approximate Match]], [[Match Mode]] -1).

      Official file:

      ```
      =XLOOKUP(C9,J5:J8,K5:K8,,1)*(C14-C13)
      ```

      with the lower bounds `1, 11, 20, 30` in `J5:J8` and the percentages `0, 7%, 8%, 9%` in `K5:K8`.

      > [!warning] The official formula gives the wrong percentage
      > Two things disagree with the table in the brief:
      >
      > - The last argument `1` means "exact match or next **larger** item". For seniority 10 it returns the row for 11, so the employee gets 7% where the table says 0%. For a lower-bounds table you want `-1` (exact match or next **smaller**).
      > - The bounds `20` and `30` should be `21` and `31` ("21-30" and "31+").
      >
      > Official result for employee 10160 (seniority 10, bonus 1,398.60): `1,398.60 * 7% = 97.90`. By the table it is `1,398.60 * 0% = 0`.
      >
      > AI-written correction, not official:
      >
      > ```
      > =XLOOKUP(C9,J5:J8,K5:K8,0,-1)*(C14-C13)
      > ```
      >
      > with lower bounds `1, 11, 21, 31`.

      **The check with a second employee.** With the corrected formula: employee 10160 (seniority 10) gets 0%, so a contribution of 0; employee 10060 (seniority 29, bonus 1,007.10) gets 8%, so `1,007.10 * 8% = 80.57`. The contribution changes, which is what the brief asks you to verify. (The official file would show 97.90 for 10160 and 90.64 for 10060.)

      Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (section 3, bonus bands and match modes compared).
    related_terms: ["xlookup", "approximate-match", "match-mode", "lookup-table"]
  - id: "4"
    text: |
      **INDEX and MATCH, one criterion.** On the sheet "Index&Match", according to cell H2 (the selected application), complete cell H3 (the Division) and H4 (the profit) using INDEX and MATCH.
    solution: |
      The table is in `A2:D12` (Division, App, Revenue (K), Profit (K)), with the apps in `B3:B12`. [[MATCH]] finds the app's **row position** inside the app column; [[INDEX and MATCH|INDEX]] then returns the value at that position from whichever column you want ([[INDEX and MATCH]]).

      | Cell | Formula |
      |---|---|
      | `H3` (Division) | `=INDEX(A3:A12,MATCH(H2,B3:B12,0))` |
      | `H4` (Profit) | `=INDEX(D3:D12,MATCH(H2,B3:B12,0))` |

      The `0` makes the match exact. For `H2 = Linkedin`: Division is **Social** and Profit is **3,292,228**.

      Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (section 4).
    related_terms: ["index-and-match", "match", "index-term", "exact-match"]
  - id: "5"
    text: |
      **Two drop-downs and a two-way lookup.** Create a drop-down list in L2 for all applications (column B), and a drop-down list in K4 with the values of C2 and D2 (Revenue / Profit). Complete L4 with INDEX and MATCH so that it shows the right figure for the selected application and the selected measure.
    solution: |
      **Drop-downs** ([[Data Validation]]): select `L2`, **Data > Data Validation > Allow: List**, Source `=$B$3:$B$12`. Select `K4`, Allow: List, Source `=$C$2:$D$2`.

      **Two-way lookup.** `INDEX` takes a row number and a column number, so use **two** `MATCH` functions: one finds the row (which app), the other the column (which measure):

      ```
      =INDEX(C3:D12,MATCH(L2,B3:B12,0),MATCH(K4,C2:D2,0))
      ```

      - `C3:D12` is the grid of numbers.
      - `MATCH(L2,B3:B12,0)` is the app's row inside the grid.
      - `MATCH(K4,C2:D2,0)` is the measure's column inside the grid.

      With `L2 = Shazam` and `K4 = Profit (K)` the result is **3,194,357**. Change either drop-down and the answer follows, which is what makes this more flexible than a single `XLOOKUP`.

      Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]] (the grade-by-student-and-exercise example).
    related_terms: ["index-and-match", "match", "index-term", "data-validation"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-7-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-7-data.xlsx): sheets "Employees", "Analysis by employee" and "Index&Match".
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-7-official-solution.xlsx)

*Related: [[Lec_06-Lookups with XLOOKUP and INDEX MATCH]]*
