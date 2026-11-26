---
title: "Past-Paper Topic Map"
subject: computational-thinking-python
type: reference
description: "Every question of the seven papers on the site by topic: what each paper asked in each slot, how often each pattern appears, and what to drill first."
course: Computational Thinking & Python
semester: 1
year: 1
order: 3
tags:
  - computational-thinking-python
  - exam-prep
  - topic-map
aliases:
  - Python Topic Map
---

> Seven papers are on the site. Three lecturers wrote them: the 2022 pair, the 2023 set (practice, Moed A, Moed B) and the undated practice paper, and **2025 Moed A by Dr. Alon, who teaches the course now**. The 2023 and 2025 papers share one layout (Part A write, Part B trace, Part C complete), so they are the best guide. 2025 added what the current course covers more heavily: dictionaries and a class.

## 1. Slot by slot, every paper

| Paper | Q1 (30) write | Q2 (30) write | Q3 (15) trace | Q4 (15) trace | Q5 (10) complete |
|---|---|---|---|---|---|
| [[PP_07\|2025 A]] | split and count long words; stats dict with `max(key=len)`; main program | station dict from `input()`; fare by `abs(zone diff)` ladder; trips with total, average, **frequency dict** | Fibonacci with `range(n-2)` | run-length encoding, neighbour compare + flush after loop | **`Employee` class**: `__init__`, `__repr__`, `__eq__`, a method, objects |
| [[PP_06\|2023 B]] | second smallest in one pass; with a sorted list; program choosing between them | hotel nights from date strings with validation; price with a long-stay discount; program | nested loops building a list, `$` and `*` lines | **selection sort** | weighted GPA, nested list, sentinel `while` + `break` |
| [[PP_05\|2023 A]] | acronym of a string; of a list of strings; input program printing every second result | share valuation: three money functions; validated input program | **bubble sort** (descending), swaps per pass | in-place **merge** of two sorted lists, from the back | ticket discounts, nested list |
| [[PP_04\|2023 practice]] | 100×100 **seat matrix**: free?, book, 5-attempt input, average age | **reverse a list in place**; sliding window of three strings; read-reverse-print input loop | **binary search** variant, name what it does | nested loops printing a star triangle | pricing program |
| [[PP_01\|Undated practice]] | sort numbers by digit count by hand; validated input loop | digits either side of the decimal point (`split(".")`); validate a real number | **binary search** with a misplaced `return -1` | nested loops printing a pattern with `end=''` | parity `if/elif` blanks |

The 2022 papers had a different shape: "write the output and explain why" items, then algorithm questions.

| Paper | Code reading | Writing |
|---|---|---|
| [[PP_02\|2022 A]] | a variable used outside its **scope** | difference of odd and even digit sums; list palindrome; most common 3-letter substring (dict, with and without `count`) |
| [[PP_03\|2022 B]] | a loop variable used as an index, `%`; does a function on a **slice** change the caller's list? | first unique character of a string; sum the last field of each line of a **CSV file** |

## 2. How often each pattern appears (7 papers)

| Pattern | Papers | Where |
|---|---|---|
| Helper functions, then a main program that calls them | 5 of 5 (2023+) | every Q1 and Q2 since 2023 |
| String processing (`split`, slicing, digits via `str`) | 6 of 7 | 2025 Q1, 2023 A Q1, 2023 B Q2, undated Q2, 2022 A, 2022 B |
| Input loop with validation or a sentinel | 5 of 7 | 2025 Q2, 2023 A Q2, 2023 B Q2/Q5, 2023 practice Q1/Q2, undated Q1 |
| Code completion (fill 5 blanks) | 5 of 5 (2023+) | every Q5 |
| Trace a sort | 3 | selection (2023 B), bubble (2023 A), hand sort to write (undated) |
| Trace nested loops printing a pattern | 3 | 2023 B Q3, 2023 practice Q4, undated Q4 |
| Nested list (matrix, records) | 3 | 2023 practice Q1, 2023 A Q5, 2023 B Q5 |
| Binary search trace | 2 | 2023 practice Q3, undated Q3 |
| Dictionary / frequency count | 2 | 2025 Q2, 2022 A |
| Neighbour comparison | 2 | 2025 Q4 (run-length), 2023 practice Q2 (sliding window) |
| Scope, mutability, slice copies | 2 | 2022 A, 2022 B |
| In-place list algorithms (reverse, merge) | 2 | 2023 practice Q2, 2023 A Q4 |
| Classes | 1 | 2025 Q5 |
| Files | 1 | 2022 B |
| Exceptions, modules, pandas, Gen AI | 0 | never examined so far |

## 3. Lecture by lecture

| Lecture | Examined as | Weight |
|---|---|---|
| [[Lec_02-Numeric Values and Strings\|Lec 02]] strings, `%`, `//` | digit tricks, `split`, slicing, run-length | **high** |
| [[Lec_03-Conditions and While Loops\|Lec 03]] `if/elif`, `while` | fare and discount ladders, validation, sentinels | **high** |
| [[Lec_04-Lists, For Loops and Ranges\|Lec 04]] lists, `for`, `range` | every question | **high** |
| [[Lec_05-List Comprehension and Tuples\|Lec 05]] | short alternatives, tuple returns | medium |
| [[Lec_06-Functions\|Lec 06]] | every Part A; scope questions in 2022 | **high** |
| [[Lec_07-Dictionaries and Sets\|Lec 07]] | 2025 Q2, frequency counts | **rising** |
| [[Lec_08-Searching and Sorting\|Lec 08]] | sort and binary-search traces | medium (one trace most years) |
| [[Lec_09-Classes\|Lec 09]] | 2025 Q5 completion | **rising** |
| [[Lec_10-Exceptions and File IO\|Lec 10]] | CSV sum in 2022 B | low |
| [[Lec_11-Modules and the Standard Library\|Lec 11]], [[Lec_12-Generative AI and Prompt Engineering\|Lec 12]] | not examined | low |

## 4. What to drill first

1. **Write two functions and a program that uses them**, in 25 minutes, from a fresh 2023 or 2025 Q1/Q2. That's 60 points; reuse your own functions in part c.
2. **Trace tables** for: a selection sort, a bubble sort, a binary search, nested loops with `print(…, end="")`, and a neighbour loop. One row per change, the loop variable in its own column.
3. **The frequency dict** and **dict from input** (2025 Q2): the current lecturer's favourite data structure.
4. **Class completion**: `__init__`, `__repr__` returning an exact f-string, `__eq__`, a method using `self.`, objects created with the right argument order.
5. **Input validation** loops: re-ask until valid, at most k attempts, a sentinel value.

> [!tip] Practice set
> The assignments rehearse the writing: [[PS_05|Assignment 5]] (lists, `any`/`all`), [[PS_06|Assignment 6]] (grade functions), [[PS_07|Assignment 7]] (word counts: the frequency dict end to end) and [[PS_08|Assignment 8]] (classes).
