---
title: "HA 6"
subject: excel-data-analysis
source_doc: /papers/excel-data-analysis/ha-6-questions.pdf
official_solution: /papers/excel-data-analysis/ha-6-official-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle). Two points to be aware of: the average of regular hours (question 9) divides by all 31 calendar days, not by the 23 working days; and the year validation in the file allows 2024 to 2028 where the brief says 2023 to 2028."
tags:
  - excel-data-analysis
  - problem-set
  - data-validation
  - date-functions
  - time-functions
  - weekday
  - conditional-formatting
  - timesheet
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Restrict the inputs.** On the sheet "Monthly attendance report": limit cell A7 to whole numbers from 1 to 12 inclusive (Work Month) and cell B7 to whole numbers from 2023 to 2028 inclusive (Work Year). Choose January 2024.
    solution: |
      Use [[Data Validation]]: select `A7`, **Data > Data Validation**, Allow **Whole number**, **between** `1` and `12`. Select `B7`, the same with **between** `2023` and `2028`. Then type `1` in `A7` and `2024` in `B7`.

      The official file has the month rule exactly like this. Its year rule is set to 2024 to 2028, a slightly narrower range than the brief's 2023 to 2028.

      Related: [[Lec_04-Date Functions, Named Ranges & Data Validation]] (data validation).
    related_terms: ["data-validation"]
  - id: "2"
    text: |
      **Dates of the month.** Calculate in cell B14 the first date of the working month (from A7 and B7), and in B15 to B44 the other dates of the month.
    solution: |
      Build the first day with [[DATE]], then add one day per row:

      | Cell | Formula |
      |---|---|
      | `B14` | `=DATE(B7,A7,1)` (year, month, day 1) |
      | `B15` | `=B14+1` |
      | `B16` to `B44` | copy `B15` down |

      Dates are serial numbers ([[Date Serial Number]]), so `+1` is the next day. The table has 31 rows (14 to 44), which is enough for the longest month; for shorter months the extra rows spill into the next month, and question 6 greys those out.

      For January 2024, `B14` is 1 January 2024 and `B44` is 31 January 2024.
    related_terms: ["date", "date-serial-number"]
  - id: "3"
    text: |
      **Day of the week.** In C14 to C44 calculate the day-of-week number (1 to 7) from column B. In D14 to D44 display the name of the day (Sunday to Saturday) from column B or C.
    solution: |
      | Cell | Formula | Meaning |
      |---|---|---|
      | `C14` | `=WEEKDAY(B14)` | 1 = Sunday ... 7 = Saturday |
      | `D14` | `=TEXT(B14,"DDDD")` | full day name, for example `Monday` |

      [[WEEKDAY]] with its default return type counts Sunday as 1, which suits an Israeli week (Friday = 6, Saturday = 7). `TEXT` with the format code `DDDD` converts the date into the weekday's name. 1 January 2024 gives 2 and "Monday".
    related_terms: ["weekday", "date"]
  - id: "4"
    text: |
      **Regular hours.** In G14 to G44 calculate the regular working hours per day (maximum 8.5 hours), shown as a decimal number (7:30 must show as 7.5).
    solution: |
      The regular-hours limit goes in a helper cell, `O7` = `08:30:00` ([[Time as a Fraction of a Day]]). Start in column E, stop in column F, so the day's work is `F14-E14`, still a fraction of a day.

      ```
      =IF((F15-E15)>$O$7,$O$7,F15-E15)*24
      ```

      The `IF` caps the day at 8.5 hours. Multiplying by 24 converts the fraction of a day to decimal hours, so 7:30 becomes 7.5. (The official first row uses the equivalent `=MIN(F14-E14,O7)*24`.)

      First rows: 1 January 2024 (a 07:40:48 to 16:44:00 day) gives 8.5 regular hours.

      Related: [[Lec_05-Time Functions & Protecting Cells]] (regular hours and overtime, section 6.3).
    related_terms: ["time-as-a-fraction-of-a-day", "if-function", "time-format"]
  - id: "5"
    text: |
      **Overtime.** In I14 to I44 calculate overtime hours (more than 8.5 hours a day) as a decimal. If there is no overtime that day, show 0.
    solution: |
      Overtime is whatever exceeds the cap, never below zero:

      ```
      =MAX(F14-E14-$O$7,0)*24
      ```

      `MAX(...,0)` returns 0 on days with no overtime. The official file's other rows use the equivalent `=IF(G15/24=$O$7,((F15-E15)-$O$7)*24,0)`: if regular hours hit the cap, the rest is overtime, otherwise 0.

      On 1 January 2024: `16:44:00 - 07:40:48 = 9:03:12`, so `9.0533 - 8.5 = 0.5533` overtime hours.
    related_terms: ["time-as-a-fraction-of-a-day", "if-function"]
  - id: "6"
    text: |
      **Grey out irrelevant days.** The report must only show relevant working days of the month: hours on Fridays and Saturdays, and hours on days after the last date of the month, must have a grey background and font. Delete the hours reported on those days.
    solution: |
      [[Conditional Formatting]] with a formula, applied to the whole row band `B14:J44`:

      ```
      =OR($C14=6,$C14=7,MONTH($B14)<>$A$7)
      ```

      - `$C14=6` is Friday and `$C14=7` is Saturday (from question 3).
      - `MONTH($B14)<>$A$7` is true for the extra days that spilled into the next month.

      Format: grey font and grey fill. The `$` before the column letters keeps the test on columns C, B and A while the colouring covers the whole row.

      Then delete the start and stop times (columns E and F) typed on the greyed days, so they contribute nothing to totals. The formulas in G and I stay, and return 0 for blank times.
    related_terms: ["conditional-formatting", "weekday", "month", "or-function"]
  - id: "7"
    text: |
      **Total working hours.** Calculate in E7 the total working hours for the entire month.
    solution: |
      Regular plus overtime: `E7` = `=SUM(G14:J44)`. The range covers both the regular-hours block (G and H) and the overtime block (I and J). Official result for January 2024: **182.7 hours** (169.65 regular plus 13.05 overtime).
    related_terms: ["time-as-a-fraction-of-a-day"]
  - id: "8"
    text: |
      **Working days.** Calculate in K7 the number of working days in the month.
    solution: |
      `K7` = `=COUNTA(E14:E44)`. After question 6 deleted the times on greyed days, only real working days still have a start time. `COUNTA` counts the non-empty cells. January 2024 gives **23** working days.
    related_terms: []
  - id: "9"
    text: |
      **Average regular hours.** Calculate in M7 the employee's average number of regular working hours in the month.
    solution: |
      The official file: `M7` = `=AVERAGE(G14:H44)`, result 5.47.

      > [!warning] Official answer divides by calendar days, not working days
      > Those 5.47 hours are `169.65 / 31`. The weekend and spill-over rows still hold formulas that return `0`, and `AVERAGE` counts zeros, so every day of the month is in the denominator. The employee actually worked 23 days, and the average per working day is `169.65 / 23 = 7.38` hours.
      >
      > AI-written answer, not official: `=AVERAGEIF(G14:G44,">0")` gives about 7.38 (or equivalently `G10/K7`, regular hours divided by working days). Which one the lecturer expects depends on how "average" is read, so keep the official 5.47 if you are matching the key.
    related_terms: ["time-as-a-fraction-of-a-day"]
  - id: "10"
    text: |
      **Monthly salary.** Calculate in I7 the employee's total monthly salary including the extra payment for overtime hours.
    solution: |
      Helper cells: hourly wage `C7` = 89.14, overtime multiplier `G7` = 1.5. Regular hours total `G10` = `=SUM(G14:H44)` (169.65) and overtime hours total `I10` = `=SUM(I14:J44)` (13.05).

      ```
      =G10*C7+I10*C7*G7
      ```

      Regular hours are paid at the wage; overtime hours at the wage times 1.5.

      `169.65 * 89.14 + 13.05 * 89.14 * 1.5 = 16,867.52` NIS (official value 16,867.5165).

      Related: [[Lec_05-Time Functions & Protecting Cells]] (section 6.4, totals and salary).
    related_terms: ["time-as-a-fraction-of-a-day", "absolute-reference"]
  - id: "11"
    text: |
      **Bonus (not mandatory): the monthly calendar.** On "Monthly Calendar", write the month number in F3 and the year in F4. Using date functions and conditional formatting, build the calendar for that month and year, hiding the helper cells, so that the result matches the "Example" sheet.
    solution: |
      The official sheet gives two options. The simpler one (Option 2) uses four helper cells and a chain of `+1` formulas:

      | Cell | Formula | Role |
      |---|---|---|
      | `P3`, `P4` | `=F3`, `=F4` | month and year inputs |
      | `R3` | `=DATE($P$4,$P$3,1)` | the 1st of the month |
      | `S3` | `=EOMONTH(R3,0)` | the last date of the month |
      | `R4` | `=WEEKDAY(R3,1)` | weekday of the 1st (1 = Sunday) |
      | `S4` | `=DAY(S3)` | number of days in the month |

      Row 6 holds the weekday numbers 1 to 7 above the weekday names (Sunday ... Saturday). The first week row places a `1` under the right weekday and counts up from there:

      ```
      O8: =IF(R4=1,1,"")
      P8: =IF(P6=$R$4,1,IF(O8="","",O8+1))
      Q8: =IF(Q6=$R$4,1,IF(P8="","",P8+1))   (copy across to U8)
      ```

      Later rows simply continue: `O10 = U8+1`, `P10 = O10+1`, and so on, down to row 18.

      Finally, a [[Conditional Formatting]] rule **Cell value greater than `$S$4`** on `O8:U19` colours days beyond the month's last date with the background colour, so they vanish. Hide the helper columns.

      The official Option 1 builds the same grid directly from `WEEKDAY(DATE($F$4,$F$3,1),1)` and `EOMONTH(...)` in each cell (longer formulas, no helper cells).

      Related: [[Lec_03-Calendars & Date Calculations]] (the self-building calendar) and [[Lec_04-Date Functions, Named Ranges & Data Validation]] (worked example: the month calendar).
    related_terms: ["calendar", "eomonth", "weekday", "day", "conditional-formatting"]
---

## Downloads

- [Question sheet (PDF)](/papers/excel-data-analysis/ha-6-questions.pdf)
- [Data file (xlsx)](/papers/excel-data-analysis/ha-6-data.xlsx): the attendance report template, the calendar template and the "Example" sheet.
- [Official solution (xlsx)](/papers/excel-data-analysis/ha-6-official-solution.xlsx)

*Related: [[Lec_03-Calendars & Date Calculations]] · [[Lec_04-Date Functions, Named Ranges & Data Validation]] · [[Lec_05-Time Functions & Protecting Cells]]*
