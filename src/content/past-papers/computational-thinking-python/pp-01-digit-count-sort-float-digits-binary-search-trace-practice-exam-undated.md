---
title: "Digit-Count Sort, Float Digits, Binary Search Trace (Practice Exam, undated)"
type: past-paper
status: worked-solution
exam: "Computational Thinking & Python, Sample (Practice) Exam, undated"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - python
  - past-paper
  - worked-solution
  - practice-exam
  - trace-table
  - binary-search
  - strings
aliases:
  - Python Practice Exam
  - Computational Thinking Sample Exam
  - PP01 Python
subject: computational-thinking-python
in_scope: true
---

# Digit-Count Sort, Float Digits, Binary Search Trace (Practice Exam, undated)

> **Sample Exam in Computational Thinking and Programming**, 100 points, 5 questions in three parts. Undated; the English version is used for the question text (a Hebrew version, `Practice Exam.pdf`, has the same content).
> Builds on: [[Lec_03-Conditions and While Loops]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_02-Numeric Values and Strings]], [[Lec_06-Functions]], [[Lec_08-Searching and Sorting]], [[Lec_10-Exceptions and File IO]]

> [!warning] No official key exists for this paper
> Every answer below is **AI-written, not official**. All code was run with `python3 -I` and the shown outputs come from those runs, but check against your own understanding before relying on it.
> **AI-solved:** Q1 (a, b), Q2 (a, b), Q3, Q4, Q5. Official: none. Todo: none.

> [!info] Exam instructions (from the paper)
> Part B: run the code and fill the trace table with the value of each variable as it is calculated, one change per line (a run such as 1 to 7 may be written "1-7"), then write the console printout.
> An exam cheat sheet (`Exam Cheat Sheet.pdf`) lists the list, string, dict and set methods you may use.

## What this paper tests

| Question | Pts | Core idea | Lecture |
|---|---|---|---|
| Q1 | 30 | Write a hand-made sort keyed on digit count (no built-in sorting), then an input loop with validation | [[Lec_04-Lists, For Loops and Ranges]], [[Lec_08-Searching and Sorting]] |
| Q2 | 30 | Count digits either side of a decimal point using string splitting; validate a real number | [[Lec_02-Numeric Values and Strings]] |
| Q3 | 15 | Trace a binary search written with a misplaced `return -1` | [[Lec_08-Searching and Sorting]] |
| Q4 | 15 | Trace nested `for` loops that print a pattern with `end=''` | [[Lec_04-Lists, For Loops and Ranges]] |
| Q5 | 10 | Complete the blanks: which pairs fit each branch of an `if` / `elif` chain on parity | [[Lec_03-Conditions and While Loops]] |

> [!tip] Intuition
> A recurring trick: turn a number into a string (`str(n)`) so that "how many digits" becomes `len(...)`, and "left or right of the point" becomes `split(".")`. For traces, write down the state **before** the loop test each time, and look for a `return` or `print()` whose indentation changes what the program does.

---

## Part A: Writing code (60 points)

## Q1 — Sorting by number of digits (30 pts)

### a. (15 pts)

Write a function that receives a list of positive integers (no need to perform validation on input). The function returns a list of those numbers sorted in ascending order by the number of digits which is in the number. It is forbidden to use existing sorting functions in Python.

The function definition is:

```python
def sort_by_dig_num(lst):
```

For example, given the list `[1234567, 23456, 345, 34, 3, 4567, 456]`, then after the function call the list will be `[3,34,345,456,4567,23456,1234567]` or `[3,34, 456,345,4567,23456,1234567]`.

> [!warning] AI-written answer, not official. Check before relying on it.

**Approach.** The number of digits of `n` is `len(str(n))`. Any simple sort works if it compares that key instead of the numbers themselves. Insertion sort is short: take each element in turn and shift the larger-keyed elements to its right. Because we use `>` (strictly greater) it is **stable**, so equal-digit numbers keep their original order, which gives `345, 456` in the first accepted output. Both outputs in the question are accepted, so stability is not required.

```python
def sort_by_dig_num(lst):
    for index in range(1, len(lst)):
        current = lst[index]
        current_digits = len(str(current))
        position = index - 1
        while position >= 0 and len(str(lst[position])) > current_digits:
            lst[position + 1] = lst[position]   # shift right
            position -= 1
        lst[position + 1] = current
    return lst
```

Running it on the example list:

```python
numbers = [1234567, 23456, 345, 34, 3, 4567, 456]
print(sort_by_dig_num(numbers))
print(numbers)
```

```text
[3, 34, 345, 456, 4567, 23456, 1234567]
[3, 34, 345, 456, 4567, 23456, 1234567]
```

The second line shows the original list is sorted **in place**, matching "after the function call the list will be...". The function also returns it, so both readings of the question work.

> [!tip] Intuition
> `sorted(lst, key=...)` and `lst.sort(key=...)` would be the one-line answer, but the question forbids existing sorting functions, which is why you write the shifting loop yourself.

### b. (15 pts)

Write a program that defines an empty list and collects data from the user into the list, until the number 0 is received. The code calls the function from part (1) and prints the list sorted by the number of digits. If the user's input is not a positive integer number, then the program will print an error message: "illegal input" and then the program will end.

> [!warning] AI-written answer, not official. Check before relying on it.

**Approach.** Loop forever with `while True`, read text, try to turn it into an integer. Anything that is not an integer (letters, `12.5`) raises `ValueError`; a negative number is also illegal. `0` is the stop signal; any positive number is appended. A `valid` flag stops us printing a half-filled list after an error. (`try`/`except` is taught in [[Lec_10-Exceptions and File IO]]; if you prefer, test the text with the cheat-sheet method `text.isnumeric()` instead.)

```python
numbers = []
valid = True
while True:
    text = input("Enter a positive integer (0 to stop): ")
    try:
        number = int(text)
    except ValueError:
        number = -1
    if number < 0:
        print("illegal input")
        valid = False
        break
    if number == 0:
        break
    numbers.append(number)
if valid:
    sort_by_dig_num(numbers)
    print(numbers)
```

Tested with the `sort_by_dig_num` above and the shown inputs (prompt text omitted from the output):

| Input lines | Output |
|---|---|
| `345`, `34`, `3`, `456`, `4567`, `0` | `[3, 34, 345, 456, 4567]` |
| `5`, `abc` | `illegal input` |
| `7`, `-3` | `illegal input` |
| `12`, `12.5` | `illegal input` |

---

## Q2 — Digits either side of the decimal point (30 pts)

### a. (15 pts)

Write a function that receives a positive real number that includes a decimal point. The function returns the difference between the number of digits to the left of the decimal point, and the number of digits to the right of the decimal point.

Below is the function definition:

```python
def left_right_digit_difference(n):
```

For example: given `6345.0781` the value 0 will be returned because the number of digits to the left is 4 and to the right is 4. Given `100.3` the value 2 will be returned because the left has 3 and the right has 1. Given `12.4567` the value -2 will be returned.

> [!warning] AI-written answer, not official. Check before relying on it.

**Approach.** Convert to a string and split it at the point. `str(6345.0781)` is `'6345.0781'`, and `split(".")` gives the two halves. The answer is the length of the left half minus the length of the right half.

```python
def left_right_digit_difference(n):
    left_part, right_part = str(n).split(".")
    return len(left_part) - len(right_part)
```

```python
for value in (6345.0781, 100.3, 12.4567):
    print(value, left_right_digit_difference(value))
```

```text
6345.0781 0
100.3 2
12.4567 -2
```

> [!warning] Floats forget trailing zeros
> A float stores a value, not the text you typed: `str(float("5.50"))` is `'5.5'`, so a trailing zero on the right is lost. The question's examples have no trailing zeros, so this is fine here. Very large or tiny floats print in scientific notation (`1e-05`), which has no point to split on; the paper assumes ordinary numbers.

### b. (15 pts)

Write a program that asks the user for a real number. If the number is real, then the program will call the function and print the return value. Otherwise, it will print an error message.

> [!warning] AI-written answer, not official. Check before relying on it.

The function needs a number that **includes a decimal point** and is positive, so the check has three parts: the text converts to a float, it contains a `.`, and it is greater than zero. `float(text)` raises `ValueError` for non-numbers, so wrap it in `try`.

```python
text = input("Enter a real number: ")
try:
    number = float(text)
    is_real = "." in text and number > 0
except ValueError:
    is_real = False
if is_real:
    print(left_right_digit_difference(number))
else:
    print("error: not a real number")
```

Tested (prompt omitted):

| Input | Output |
|---|---|
| `6345.0781` | `0` |
| `100.3` | `2` |
| `12.4567` | `-2` |
| `abc` | `error: not a real number` |
| `5` (no decimal point) | `error: not a real number` |
| `-2.5` (not positive) | `error: not a real number` |

---

## Part B: Running code and trace tables (30 points)

## Q3 — Binary search trace (15 pts)

Write a short description of what the function does and the printed output.

```python
def binary_search(a, val):
  low = 0
  high = len(a) - 1
  while low <= high:
    middle = (low + high) // 2
    if val == a[middle]:
      return middle # found
    elif val <= a[middle]:
      high = middle - 1
    else:
      low = middle + 1
    return -1 # not found

myList = [1, 3, 5, 7, 8, 11, 20]
print("Bin search returned:")
print(binary_search(myList, 7))
```

The trace table has columns `low`, `middle` and `high`; the console box is empty.

> [!warning] AI-written answer, not official. Check before relying on it.

### Trace table

`len(myList)` is 7, so `high` starts at 6. The first loop test `0 <= 6` is true.

| Step | low | middle | high | What happens |
|---|---|---|---|---|
| start | 0 | | 6 | `low = 0`, `high = len(a) - 1 = 6` |
| iteration 1 | 0 | 3 | 6 | `middle = (0 + 6) // 2 = 3`; `a[3]` is 7 and `val == 7`, so `return 3` |

The function returns on its first iteration, so the table has only these values.

### Console

```text
Bin search returned:
3
```

### Description of the function

`binary_search(a, val)` is meant to search a **sorted** list `a` for `val` by repeatedly looking at the middle element: if it matches, return its index; if `val` is smaller, discard the upper half (`high = middle - 1`); otherwise discard the lower half (`low = middle + 1`); if the range empties, return -1 for "not found".

> [!warning] The code as printed is buggy
> In the paper, `return -1` is indented to the same level as the `if`, so it sits **inside** the `while` loop. After the first iteration that does not match, the function returns -1 straight away instead of looping again. Running it with this indentation on `myList`:
>
> | Search value | Result |
> |---|---|
> | 7 | 3 (correct: it is the first middle) |
> | 1, 8, 11, 20, 5, 4 | -1 every time |
>
> So 8, 11 and others that are in the list are reported "not found". The fix is to dedent `return -1` to the level of `while`, so it runs only after the loop ends. The requested output for `7` is still `3`, because 7 happens to be the first middle element.

> [!tip] Intuition
> Trace the **first** middle element only: `a[3]` is 7. Spotting the early hit saves you from tracing further, but still say that the `return -1` placement is wrong.

---

## Q4 — Nested loops printing a pattern (15 pts)

The trace table has columns `i` and `j`; the console box is empty.

```python
for i in range(1, 10):
  for j in range(10 - i):
    print(' ', end='')
  for j in range(1):
    print('*', end='')
  for j in range(i):
    print(' ', end='')
  for j in range(8):
    print('*', end='')
  for j in range(i):
    print(' ', end='')
  for j in range(1):
    print('*', end='')
print()
```

> [!warning] AI-written answer, not official. Check before relying on it.

> [!note] Indentation in the source PDF is uneven
> In the paper the inner `for` lines are drawn at slightly different indents (a rendering artefact). I read all six inner loops as the body of the outer loop and the final `print()` at the left margin, **outside** the outer loop, exactly as printed. Check that your exam copy shows the same.

### How each `i` behaves

For each `i`, the six inner loops print, in order: `10 - i` spaces, one `*`, `i` spaces, eight `*`, `i` spaces, one `*`. `end=''` means nothing starts a new line, so everything stays on the same line.

| i | `j` ranges (in order) | Characters printed for this i |
|---|---|---|
| 1 | 0-8, 0, 0, 0-7, 0, 0 | 9 spaces, `*`, 1 space, 8 stars, 1 space, `*` (21 chars) |
| 2 | 0-7, 0, 0-1, 0-7, 0-1, 0 | 8 spaces, `*`, 2 spaces, 8 stars, 2 spaces, `*` (22 chars) |
| 3 | 0-6, 0, 0-2, 0-7, 0-2, 0 | 7 spaces, `*`, 3 spaces, 8 stars, 3 spaces, `*` (23 chars) |
| 4 | 0-5, 0, 0-3, 0-7, 0-3, 0 | 6 spaces, `*`, 4 spaces, 8 stars, 4 spaces, `*` (24 chars) |
| 5 | 0-4, 0, 0-4, 0-7, 0-4, 0 | 5 spaces, `*`, 5 spaces, 8 stars, 5 spaces, `*` (25 chars) |
| 6 | 0-3, 0, 0-5, 0-7, 0-5, 0 | 4 spaces, `*`, 6 spaces, 8 stars, 6 spaces, `*` (26 chars) |
| 7 | 0-2, 0, 0-6, 0-7, 0-6, 0 | 3 spaces, `*`, 7 spaces, 8 stars, 7 spaces, `*` (27 chars) |
| 8 | 0-1, 0, 0-7, 0-7, 0-7, 0 | 2 spaces, `*`, 8 spaces, 8 stars, 8 spaces, `*` (28 chars) |
| 9 | 0, 0, 0-8, 0-7, 0-8, 0 | 1 space, `*`, 9 spaces, 8 stars, 9 spaces, `*` (29 chars) |

Each row has `20 + i` characters, so 225 characters in total for `i = 1` to `9`. The final `print()` adds one newline at the very end.

### Console (the code exactly as printed)

Because `print()` is outside the loop, the nine rows join into **one long line**:

```text
         * ******** *        *  ********  *       *   ********   *      *    ********    *     *     ********     *    *      ********      *   *       ********       *  *        ********        * *         ********         *
```

> [!tip] Intuition
> The author most likely meant `print()` to sit **inside** the outer loop, which draws a funnel shape. I ran that variant too. If your exam copy indents `print()` under the outer `for`, the console is:
>
> ```text
>          * ******** *
>         *  ********  *
>        *   ********   *
>       *    ********    *
>      *     ********     *
>     *      ********      *
>    *       ********       *
>   *        ********        *
>  *         ********         *
> ```
>
> Always answer for the code as printed, and mention the alternative if the layout looks like a typo.

---

## Part C: Code completion (10 points)

## Q5 — Parity cases (10 pts)

Fill in the blank at all places marked with an underline (1)(2)(3)(4).

```python
x1 = int(input("Please enter an integer between 1 and 6"))
x2 = int(input("Please enter an integer between 1 and 6"))
if x1 <= 0 or x1 >=7 or x2 <= 0 or x2 >= 7:
  print("At least one of the numbers is not between 1 to 6")
elif not x1 % 2 and not x2 % 2:
  print("All possible values for (x1,x2) are: (2,2),( 1 )")
elif x1 % 2 and not x2 % 2:
  print("All possible values for (x1,x2) are: ( 2 )")
elif not x1 % 2 and x2 % 2:
  print("All possible values for (x1,x2) are: ( 3 )")
else:
  print("All possible values for (x1,x2) are: ( 4 )")
```

> [!warning] AI-written answer, not official. Check before relying on it.

**Idea.** In `1` to `6` the even numbers are 2, 4, 6 and the odd numbers are 1, 3, 5. The test `not x % 2` is true when `x` is even (remainder 0), and `x % 2` is true when `x` is odd. Each branch is a combination of parities, and the message lists every pair of that combination (3 × 3 = 9 pairs each). I generated the lists with a short Python loop to avoid slips.

| Blank | Branch condition | Pairs `(x1,x2)` to write |
|---|---|---|
| (1) | both even | `(2,4),(2,6),(4,2),(4,4),(4,6),(6,2),(6,4),(6,6)` |
| (2) | `x1` odd, `x2` even | `(1,2),(1,4),(1,6),(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)` |
| (3) | `x1` even, `x2` odd | `(2,1),(2,3),(2,5),(4,1),(4,3),(4,5),(6,1),(6,3),(6,5)` |
| (4) | both odd (the `else`) | `(1,1),(1,3),(1,5),(3,1),(3,3),(3,5),(5,1),(5,3),(5,5)` |

> [!warning] Blank (1) already prints `(2,2)`
> The message is `(2,2),( 1 )`, so the first pair `(2,2)` is printed already. Blank (1) holds the **other eight** both-even pairs, not all nine.

> [!tip] Intuition
> The four branches split the 36 allowed pairs by (even, odd) for each variable: 9 + 9 + 9 + 9. The first branch is the "both even" one, which is why `(2,2)` is already given as the example.

---

## Recap

| Question | Tool | One-line answer |
|---|---|---|
| Q1a | insertion sort with `len(str(n))` as the key | in-place shifting loop, returns the list |
| Q1b | `while True` + `int()` + `try` | `0` stops, negative or non-integer prints "illegal input" |
| Q2a | `str(n).split(".")` | `len(left) - len(right)` |
| Q2b | `float()` + `"." in text` | call the function, else print an error |
| Q3 | binary search trace | `low 0, middle 3, high 6`, prints `3` (bug: `return -1` inside the loop) |
| Q4 | nested loops with `end=''` | one 225-character line (funnel shape if `print()` is inside the loop) |
| Q5 | parity of `x1`, `x2` | the four 9-pair lists (blank 1 has eight pairs) |

## Related Notes

[[Lec_02-Numeric Values and Strings]] · [[Lec_03-Conditions and While Loops]] · [[Lec_04-Lists, For Loops and Ranges]] · [[Lec_06-Functions]] · [[Lec_08-Searching and Sorting]] · [[Lec_10-Exceptions and File IO]]
