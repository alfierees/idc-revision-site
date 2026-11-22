---
title: "Code Reading, First Unique Character & CSV Sum (2022 Moed B)"
type: past-paper
status: worked-solution
exam: "Computational Thinking & Python, 2022 Moed B (24.03.22), course code 26027"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - computational-thinking-python
  - python
  - past-paper
  - worked-solution
  - code-reading
  - slicing
  - strings
  - file-io
  - csv
aliases:
  - Python Moed B 2022
  - 26027 Moed B 2022
  - PP03 Python
subject: computational-thinking-python
in_scope: true
---

# Code Reading, First Unique Character & CSV Sum (2022 Moed B)

> Part of: [[Computational Thinking & Python]]
> **Computational Thinking & Python, 2022 Moed B**, 24.03.2022, course code 26027. Lecturer and tutor as named on the cover page (Hebrew): Michael Alburquerque and Eido Dotan (transliterated here).
> Key concepts: [[List]], [[Slicing]], [[Mutability]], [[Indexing]], modulus (`%`), [[For Loop]], [[String Slicing]], [[Function]], [[Return Value]], [[File IO]]
> Builds on: [[Lec_02-Numeric Values and Strings]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]], [[Lec_10-Exceptions and File IO]]

> [!info] The question text is translated
> The paper and its key are Hebrew only, and the text layer is garbled (the Hebrew letters come out as symbols). Every question below was **read from the rendered pages and translated faithfully into English**. Code, example inputs and printed outputs are copied as they appear on the page. The official key (`Exam2022B_SOL.pdf`) is a worked solution to each question that is present.

> [!warning] The source PDFs are incomplete
> The question PDF is 4 pages and the key is 6 pages. Two items are missing from **both** files, so they cannot be reproduced:
> - **Part 1, item a (5 points).** The page that should hold it is not in the PDFs. Part 1 is stated as "3 items, 15 points", and only items b and c are present.
> - **Part 2, item c (15 points).** Part 2 is stated as "3 items, 35 points", and only items a (12) and b (8) are present.
>
> Together the present questions are worth 5 + 5 + 12 + 8 = 30 points. The rest of the paper is not available, so no answer is written for the missing items.

> [!note] Answer provenance
> All four present items (1b, 1c, 2a, 2b) use the **official key**: `official`. Nothing is AI-solved. Two small slips in the key are flagged in warnings below (Q2a printed output, Q2b function name). I ran every official solution with `python3 -I` against the question's own examples.

## What this paper tests

| Question | Pts | Core idea | Key concept |
|---|---|---|---|
| Part 1 item b | 5 | Predict printed output when a loop variable is used as an index into the same list | [[For Loop]], [[Indexing]], modulus (`%`) |
| Part 1 item c | 5 | Does a function that works on a slice copy change the caller's list? | [[Slicing]], [[Mutability]] |
| Part 2 item a | 12 | Write `first_unique_char` on a string | [[String Slicing]], the `in` operator |
| Part 2 item b | 8 | Write a function that reads a CSV file and sums the last cell of each line | [[File IO]], [[String]] |

> [!tip] Intuition
> Part 1 is pure *reading*: trace by hand and say **why**. Part 2 is *writing*, but both answers are short loops over data you already know how to walk. The recurring trick in this paper is that Python slices make copies (1c) and that `s[:i] + s[i+1:]` means "the string with position `i` removed" (2a).

> [!note] Instructions for Part 1 (translated)
> In each item of this part a code snippet appears. You must write what will appear on the screen after the snippet runs, **and explain why**. A correct answer without an explanation gets partial credit. The program may crash; in that case there is no need to give the exact exception type (nor any output printed before the crash), only to state that the program crashes and explain why.

---

## Part 1 — Code understanding (15 points; items b and c present)

### Item a (5 points)

*Not in the source PDFs; see the warning above.*

### Item b (5 points)

**Question (translated).** What does the following code print, and why?

```python
lst = [1,2,3,4,5,6,7,8,9,10]
for i in lst:
    print(lst[i%2],end=",")
```

> [!success] Official answer
> ```text
> 2,1,2,1,2,1,2,1,2,1,
> ```
> Explanation (key, translated): for each number in the list, if the number is even the element at index 0 of the list is printed, and if it is odd the element at index 1 is printed. The prints are separated by a comma.

The loop variable `i` takes the **values** of the list (1 to 10), not positions. Each value is then reduced with the remainder operator `%`, so `i % 2` is only ever 0 or 1, and the code always reads `lst[0]` (which is 1) or `lst[1]` (which is 2).

| `i` | `i % 2` | `lst[i % 2]` | printed |
|---|---|---|---|
| 1 | 1 | 2 | `2,` |
| 2 | 0 | 1 | `1,` |
| 3 | 1 | 2 | `2,` |
| 4 | 0 | 1 | `1,` |
| 5 to 10 | alternates 1, 0 | alternates 2, 1 | `2,1,2,1,2,1,` |

`print(..., end=",")` replaces the newline with a comma, so everything lands on one line with a trailing comma and no spaces. I confirmed the output by running it.

> [!warning] Trap
> `for i in lst` gives *elements*, not indices. Here the values happen to be 1 to 10, which looks like the indices of a 10-item list, but index 10 would not exist. The code stays safe only because of `% 2`.

### Item c (5 points)

**Question (translated).** What does the following code print, and why?

```python
def function(L2):
    L3 = L2[:]
    L3[1] = 100
    return L3

L3 = [1,2,3,4]
L4 = function(L3)
print(L3)
```

> [!success] Official answer
> ```text
> [1, 2, 3, 4]
> ```
> Explanation (key, translated): the list `L3` defined outside the function never changes, because inside the function a separate, new copy of the list is created.

`L2[:]` is a **slice** from the start to the end, and a slice always builds a **new list**. So inside `function`, the local name `L3` refers to a fresh copy, and `L3[1] = 100` changes only that copy. The function returns the copy, which is stored in `L4`. The global `L3` still points at the original list.

![[PP03_q1_list_copy.png|560]]

The figure shows the two separate lists: the original is untouched, and the modified copy is what `L4` receives.

> [!example] Running it
> ```python
> L4 = function(L3)
> print(L3)
> print(L4)
> ```
> ```text
> [1, 2, 3, 4]
> [1, 100, 3, 4]
> ```

> [!tip] Intuition
> The two variables named `L3` are different names in different scopes (see [[Variable Scope]]). If the first line of the function were `L3 = L2` (no slice), both names would refer to the **same** list and the original would become `[1, 100, 3, 4]`. The slice is the whole point of the question. Compare [[Lec_04-Lists, For Loops and Ranges]] on mutability.

---

## Part 2 — Algorithms and data structures (35 points; items a and b present)

### Item a (12 points)

**Question (translated).** Implement the function `first_unique_char`, which receives a string and returns the **first** character in it that appears only once in the string. If there is no such character, return `None`.

Examples from the paper:

```python
>>> print(first_unique_char("ABCDCABE"))
D
>>> print(first_unique_char("ADAEBBCBCDDE"))
None
```

> [!success] Official answer
> ```python
> def first_unique_char(s):
>     for i in range(len(s)):
>         if not s[i] in s[:i] + s[i+1:]:
>             return s[i]
>     return None
> ```

> [!warning] Typo in the key's example output
> The key prints the first example's result as a lowercase `d`. The code actually returns `'D'` (an uppercase character from the input), which matches the question's own example. I ran the official code and got `D` for `"ABCDCABE"` and `None` for `"ADAEBBCBCDDE"`, so the *code* is correct and only the typed output in the key is off.

**How it works.** For each position `i`, `s[:i] + s[i+1:]` glues together everything *before* position `i` and everything *after* it, which is the string with that one character removed. If the character is not found in what remains, it appears nowhere else, so it is unique. Because the loop goes left to right, the first such character is the one returned.

Trace for `"ABCDCABE"`:

| `i` | `s[i]` | string without it | in it? | result |
|---|---|---|---|---|
| 0 | A | `BCDCABE` | yes | keep going |
| 1 | B | `ACDCABE` | yes | keep going |
| 2 | C | `ABDCABE` | yes | keep going |
| 3 | D | `ABCCABE` | **no** | return `'D'` |

`E` is also unique, but `D` comes first. For `"ADAEBBCBCDDE"` every letter repeats, so the loop finishes and the final `return None` runs.

```python
print(first_unique_char("ABCDCABE"))
print(first_unique_char("ADAEBBCBCDDE"))
```

```text
D
None
```

> [!tip] Intuition
> The key does at most `len(s)` membership tests, each scanning up to `len(s)` characters, so it is a quadratic-time solution. That is fine for this exam. A faster way is a [[Frequency Counter]] dictionary built in one pass, then a second pass to find the first count of 1 (see [[Lec_07-Dictionaries and Sets]]). Also note the edge cases: an empty string returns `None`, and a one-character string returns that character.

### Item b (8 points)

**Question (translated).** Implement the function `sum_of_lasts`, which receives a legal path to a CSV file containing **only numbers separated by commas**, and returns the sum of the numbers that appear in the **last cell of each line**.

For example, for a file that looks like this:

```text
1,2,3,4
2,3,4
5,5,5,5,5
1,1,1,1,1
```

Example run:

```python
>>> print(sum_of_lasts("some_path"))
14
```

Explanation (from the paper): the last number in line 1 is 4, in line 2 it is 4, in line 3 it is 5, and in line 4 it is 1. So the function returns 14, the sum of these numbers.

> [!success] Official answer
> ```python
> def sum_csv_lines(filename):
>     f = open(filename,'r')
>     sums = 0
>     for line in f:
>         tokens = line.split(',')
>         sums += int(tokens[-1])
>     f.close()
>     return sums
> ```

> [!warning] The key's function name does not match the question
> The question asks for a function called `sum_of_lasts` and calls it as `sum_of_lasts("some_path")`. The key defines `sum_csv_lines` instead. As printed, calling `sum_of_lasts(...)` after the official code raises `NameError: name 'sum_of_lasts' is not defined`. The body is correct; keep the official answer but name the function as the question requires. I tested the body on the question's example file (saved as a temporary CSV) and it returns 14.

**Step by step.**

1. `open(filename, 'r')` opens the file for reading. Iterating `for line in f` gives one line at a time, each as a string that **ends in a newline** (except possibly the last line).
2. `line.split(',')` cuts the line at every comma into a list of strings, for example `"2,3,4\n"` becomes `['2', '3', '4\n']`.
3. `tokens[-1]` is the last cell (negative index counts from the end).
4. `int("4\n")` works: `int` ignores surrounding whitespace, so the trailing newline does not matter.
5. Add to the running total and close the file at the end.

Trace on the example:

| line | `tokens` | `tokens[-1]` | `sums` |
|---|---|---|---|
| `1,2,3,4` | `['1','2','3','4\n']` | 4 | 4 |
| `2,3,4` | `['2','3','4\n']` | 4 | 8 |
| `5,5,5,5,5` | `['5','5','5','5','5\n']` | 5 | 13 |
| `1,1,1,1,1` | `['1','1','1','1','1']` | 1 | 14 |

> [!tip] Intuition
> A `with open(...) as f:` block (see [[Lec_10-Exceptions and File IO]]) would close the file automatically, so `f.close()` could be dropped. The paper allows either. The cleanest mental model: *file to lines, line to cells, last cell to int, add up*.

---

## Recap table

| Item | Pts | Tool | One-line answer |
|---|---|---|---|
| 1a | 5 | n/a | Not in the source PDFs |
| 1b | 5 | `for` over values, `%` | `2,1,2,1,2,1,2,1,2,1,` |
| 1c | 5 | slicing copies | `[1, 2, 3, 4]` (the copy is changed, not the original) |
| 2a | 12 | `s[:i] + s[i+1:]`, `in` | Return the first char absent from the rest; else `None` |
| 2b | 8 | `open`, `split(',')`, `[-1]` | Sum `int(tokens[-1])` over each line; example gives 14 |
| 2c | 15 | n/a | Not in the source PDFs |

## Related notes

- [[Lec_04-Lists, For Loops and Ranges]] for lists, slicing, mutability and loops.
- [[Lec_02-Numeric Values and Strings]] for `%` and string slicing.
- [[Lec_06-Functions]] for scope and return values.
- [[Lec_10-Exceptions and File IO]] for opening and reading files.
- [[Computational Thinking & Python]] (course hub).
