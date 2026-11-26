---
title: "Assignment Topic Map"
subject: excel-data-analysis
type: reference
description: "Where the final assignment's 109 points come from: each of the nine questions against the lecture that teaches it and the homework that rehearses it, plus what to practise first."
course: Excel for Data Analysis
semester: 1
year: 1
order: 3
tags:
  - excel-data-analysis
  - exam-prep
  - topic-map
aliases:
  - Excel Topic Map
---

> The course has **one** graded paper on the site: the take-home [[PP_01|Final Assignment (Semester A, 2025)]]. It is built like the homework: each question takes one homework skill and adds a personal twist (your ID, age or birth date). So the map below runs **question → lecture → homework**. If you can do the homework sets without looking, you can do the assignment.

## 1. The nine questions

| Q | Points | What it asks | Skill | Lecture | Homework |
|---|---|---|---|---|---|
| Q1 | 8 | Text dates `27.04.2021` to real dates; week number | `DATE` + `RIGHT`/`LEFT`/`SUBSTITUTE`/`NUMBERVALUE`; `WEEKNUM` | [[Lec_03-Calendars & Date Calculations\|Lec 03]], [[Lec_04-Date Functions, Named Ranges & Data Validation\|Lec 04]] | [[PS_05\|HA 5]], [[PS_06\|HA 6]] |
| Q2 | 5 | ID series; freeze panes; a bonus from three overlapping rules | nested `IF` with `AND`/`OR`, helper cells, `<>` | [[Lec_02-IF Statements & Logical Functions\|Lec 02]] | [[PS_04\|HA 4]], [[PS_05\|HA 5]] |
| Q3 | 15 | Two dynamic colour rules; sort by colour then two keys; filter by colour + three more filters; visible total | conditional formatting, multi-level sort, AutoFilter, `SUBTOTAL(9,…)` | [[Lec_01-Sorting, Filters & Database Functions\|Lec 01]] | [[PS_01\|HA 1]], [[PS_02\|HA 2]], [[PS_03\|HA 3]] |
| Q4 | 10 | Hourly wage from the last digit of the ID; monthly salary from start and end times | `XLOOKUP(RIGHT(A2,1),…)`; `(end-start)*24` with the night-shift case | [[Lec_06-Lookups with XLOOKUP and INDEX MATCH\|Lec 06]], [[Lec_05-Time Functions & Protecting Cells\|Lec 05]] | [[PS_07\|HA 7]], [[PS_06\|HA 6]] |
| Q5 | 10 | Renewal on the next Tuesday a year on; inquiry dates from your birthday in 2025 | `F4+365+MOD(3-WEEKDAY(F4+365),7)`; `DATE(2025,MONTH(),DAY())` | [[Lec_03-Calendars & Date Calculations\|Lec 03]], [[Lec_04-Date Functions, Named Ranges & Data Validation\|Lec 04]] | [[PS_05\|HA 5]] |
| Q6 | 15 | **Write** (don't record) a macro: InputBox, loop, three-way If, counts, a button | VBA | [[Lec_08-VBA Macros\|Lec 08]] | [[PS_09\|HA 9]] |
| Q7 | 15 | Pivot: sum, % of grand total and average by urgency and shipping; filter two urgencies; slicer 45 to 50; then a formatted pivot chart on its own sheet | pivot table, Show Values As, slicer, pivot chart | [[Lec_07-Pivot Tables\|Lec 07]] | [[PS_08\|HA 8]] |
| Q8 | 21 | Advanced Filter with OR rows, a price range and "Monday", chosen output headers; a `DSUM` with "contains L or Maccabim", your age to 40, year 2022 | criteria range, helper columns `WEEKDAY`/`YEAR`, `DSUM` | [[Lec_01-Sorting, Filters & Database Functions\|Lec 01]] | [[PS_03\|HA 3]] |
| Q9 | 10 | Member series; full name with a text function; colour the whole row for two branches | `CONCAT` / `&` / `TEXTJOIN`; formula rule `=OR($E3=$M$3,$E3=$M$4)` | [[Lec_01-Sorting, Filters & Database Functions\|Lec 01]], [[Lec_02-IF Statements & Logical Functions\|Lec 02]], [[Lec_06-Lookups with XLOOKUP and INDEX MATCH\|Lec 06]] | [[PS_04\|HA 4]] |

The question titles add up to **109 points**. (Q8 says 21 in its title, but its two printed sections are worth 6 each; treat it as the biggest question either way.)

## 2. Points by lecture

| Lecture | Questions | Points | Share |
|---|---|---|---|
| Lec 01: sorting, filters, criteria ranges, D-functions, conditional formatting | Q3, Q8, Q9 (formatting) | about 46 | **~42%** |
| Lec 03 and 04: dates | Q1, Q5 | 18 | 17% |
| Lec 07: pivot tables | Q7 | 15 | 14% |
| Lec 08: VBA | Q6 | 15 | 14% |
| Lec 05 and 06: times and lookups | Q4 | 10 | 9% |
| Lec 02: IF logic | Q2 (and inside Q4, Q9) | 5 | 5% |

(Q9's 10 points are split between the text join and the row rule, so the Lec 01 figure is approximate.) **Lec 01 is worth about as much as the next three lectures together.** The criteria range alone (Q8) is a fifth of the assignment.

## 3. The homework sets and what each one drills

| HA | Topics | Shows up in |
|---|---|---|
| [[PS_01\|HA 1]] | absolute references to helper cells, what-if copies, formatting, freeze panes, summary sheet, simple conditional formatting, AutoFilter between 40 and 50 | Q2 (freeze), Q3 |
| [[PS_02\|HA 2]] | colour bands with thresholds **in cells**, highlighting Critical / Not Specified orders | Q3A, Q9 |
| [[PS_03\|HA 3]] | **D-functions with criteria ranges** (AND, OR, ranges), sort then summarise by category, AutoFilter, conditional formatting to compare two lists | **Q8**, Q3 |
| [[PS_04\|HA 4]] | `IF`, `AND`, `OR` classifications, whole-row highlight, `COUNTIF` completeness check | Q2, Q9 |
| [[PS_05\|HA 5]] | nested `IF`, `DATEDIF` tenure, `EOMONTH(…)+10` payment day, `WEEKDAY` Saturday test | Q1, Q5 |
| [[PS_06\|HA 6]] | data validation, a month of dates, weekday names, regular and overtime hours as decimals, greying weekends and overflow days, salary | Q4, Q5 |
| [[PS_07\|HA 7]] | `XLOOKUP` employee card, approximate match on seniority bands, `INDEX`/`MATCH` with drop-downs | Q4 |
| [[PS_08\|HA 8]] | eight pivot reports: grouped dates, averages, value filters, % share, label filter "starts with J" | Q7 |
| [[PS_09\|HA 9]] | named ranges, nested `IF` with `AND`/`OR` bonuses, a **recorded** macro and a **written** InputBox macro | Q6, Q2 |

## 4. The personal twists to expect

Every question has one; they are easy points if you set them up once.

| Twist | Where in 2025 | How |
|---|---|---|
| A series from your age, jumps of your age (or of 3) | Q3A, Q9 | `A2` = age (or `=age*1000`), `A3` = `=A2+$age$`, fill down |
| A series from your ID's last digits | Q2A | `A2` = the digits, `A3` = `=A2+age_cell` |
| A threshold built from your age | Q3A (age × 32), Q8B (quantity from your age to 40) | the age in a helper cell, the threshold `=age_cell*32` in another |
| Sheet names from your ID, birthday, age | Q6, Q7B, Q7C | rename the tab |
| A date from your birthday | Q5B, Q7A | `DATE(2025,MONTH(b),DAY(b))`; six digits `ddmmyy` |
| The InputBox title from your ID | Q6 | the second argument of `InputBox` |

## 5. What to practise first

1. **Criteria ranges** until they're automatic: AND on one row, OR on the next, the header twice for a range, a helper column for weekday or year, then the same range in an Advanced Filter **and** a `DSUM` ([[PS_03|HA 3]], Q8). About 20 points.
2. **Conditional formatting from helper cells** and **sorting and filtering by its colour** (Q3, Q9). About 20 points.
3. **A pivot with the same field twice** (Sum and % of Grand Total), an Average, a ticked filter, a slicer, and a chart formatted step by step (Q7, [[PS_08|HA 8]]). 15 points.
4. **The VBA pattern** InputBox → `For` → `If/ElseIf/Else` → counters → summary cells → button, typed from memory (Q6, [[PS_09|HA 9]]). 15 points.
5. **Date tricks:** text to date, `WEEKNUM`, next weekday with `MOD`, `EOMONTH`, `DATEDIF` (Q1, Q5). 18 points.
6. **Lookups and time:** `XLOOKUP` exact and `-1`, text-versus-number, hours × 24 across midnight (Q4). 10 points.

> [!tip] The proficiency check
> The brief warns you may be called to a short Zoom test on your own file. Practise saying, for each formula, **what each argument does and why the `$` signs are where they are**: the [[Quick Self-Test|self-test]] is built for that.
