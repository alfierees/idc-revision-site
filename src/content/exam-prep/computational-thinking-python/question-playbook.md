---
title: "Exam Question Playbook"
subject: computational-thinking-python
type: reference
description: "Every question type the Python exam asks, with the steps that earn the points and a model answer from a real paper: function-then-program, dictionaries from input, validation loops, trace tables for loops and sorts, and code completion."
course: Computational Thinking & Python
semester: 1
year: 1
order: 4
tags:
  - computational-thinking-python
  - exam-prep
  - playbook
---

> **Game plan for 3 hours and 100 points.** Part A is 60 points in two questions: give each about 50 minutes. Parts B and C are 40 points of careful reading: about 50 minutes together. Leave 20 to check. In Part A, write parts a and b as **functions that return**, then make part c **call** them; even if a or b is shaky, a part c that calls them correctly earns its points. Comment one line per block. Use the exact function names, parameter names and dict keys the question gives.

---

## A · Two functions, then a program that uses them (Q1 and Q2, 30 each)

**Steps**
1. Read all three parts first: part c tells you what a and b must return.
2. Part a: `def name(params):`, an accumulator (`count = 0`, `result = []`, `d = {}`), one loop, **`return`**.
3. Part b: the same shape, often taking a list and returning a dict or a tuple.
4. Part c: read the input (`int(input())` for numbers), loop, call a and b, print exactly in the format of the example.
5. Check against the example by hand: run your code on it line by line.

**Model answer** (2025 A Q1, [[PP_07]]):

```python
def count_long_words(message, min_length):
    count = 0
    for word in message.split():
        if len(word) >= min_length:
            count += 1
    return count

def process_messages(messages):
    return {
        'total_messages': len(messages),
        'longest_message': max(messages, key=len),
        'shortest_message': min(messages, key=len),
    }

messages = ["Hi there!", "Welcome to Python class", "OK"]
min_length = 6
print("Messages Analysis:")
print(process_messages(messages))
print("\nLong Word Count in Each Message:")
for message in messages:
    print(f"'{message}': {count_long_words(message, min_length)}")
```

`>=` not `>` ("at least"); `max(..., key=len)` returns the **item**, compared by length.

---

## B · A dictionary from input, a rule ladder, a frequency count (2025 A Q2)

**Steps**
1. Dict from input: `d = {}`, `for _ in range(n):` read key and value, `d[key] = int(value)`, return `d`.
2. The rule function: look up with `d[key]`, compute the difference (`abs(...)` if direction doesn't matter), an `if / elif / else` ladder with the last band as `else`, **return** the number.
3. The program: two accumulators, `total = 0` and `counts = {}`; per pass add to the total and do `counts[x] = counts.get(x, 0) + 1`; after the loop print total, `total / m`, and `for k, v in counts.items():`.

**Model answer** (fare ladder):

```python
def calculate_trip_cost(station_zones, origin, destination):
    diff = abs(station_zones[origin] - station_zones[destination])
    if diff == 0:
        return 2.50
    elif diff == 1:
        return 3.00
    elif diff == 2:
        return 3.80
    else:
        return 5.00
```

On the example: total 10.5, average 3.5, one trip at each fare.

---

## C · Validate the input, with a limit on attempts (2023 practice Q1c, 2023 A Q2d, undated Q1b)

**Steps**
1. Read what's asked only once **before** the loop.
2. `for attempt in range(5):` gives exactly 5 tries (or `while attempts < 5:` with a counter).
3. Invalid → message and `continue`; success → do the action, message, `break`.
4. Bounds of a list index: `0 <= row < len(grid)` (strictly less: `row == len(grid)` doesn't exist).

**Model answer** (seat booking, with the bounds fixed to `>=`):

```python
for i in range(5):
    row = int(input("Row: "))
    col = int(input("Col: "))
    if row < 0 or row >= len(seats) or col < 0 or col >= len(seats[0]):
        print("Invalid indices, please try again")
        continue
    if is_available(seats, row, col):
        book(seats, row, col, name, age)
        print("Ticket purchased")
        break
    print("This seat is unavailable, please try again")
```

**Sentinel variant** (2023 B Q5): `while True:` read; `if grade == -1: break`; otherwise append.

---

## D · Strings: split, slice, count characters (2025 Q1, 2023 A Q1, undated Q2, 2022)

**Recipes**

| Task | Code |
|---|---|
| Words | `s.split()` |
| Acronym | `"".join(w[0].upper() for w in s.split())` |
| Digits before/after the point | `left, right = str(x).split(".")`, then `len(left)`, `len(right)` |
| Sum of odd digits vs even digits | `for ch in str(n): d = int(ch); if d % 2 == 0: ...` |
| First character that appears once | `for ch in s: if s.count(ch) == 1: return ch` |
| Most common substring of length 3 | `for i in range(len(s) - 2): sub = s[i:i+3]; counts[sub] = counts.get(sub, 0) + 1`, then `max(counts, key=counts.get)` |
| Sliding window of 3 | `for i in range(len(lst) - 2): lst[i], lst[i+1], lst[i+2]` |
| Palindrome | `lst == lst[::-1]`, or compare `lst[i]` with `lst[-1 - i]` for half the list |

---

## E · Running best: min, max, second smallest (2023 B Q1)

**Steps**
1. Start the trackers from real items (`lst[0]`), not from 0.
2. One pass: a new minimum pushes the old minimum into `second`; otherwise a value below `second` replaces it.
3. "Do not sort, do not change the list" earns full marks; `sorted(lst)[1]` was worth 7 of 10.

**Model answer** (works with a repeated minimum, `[3, 5, 2, 2]` → 2):

```python
def second_smallest(lst):
    if lst[0] < lst[1]:
        minimum, second = lst[0], lst[1]
    else:
        minimum, second = lst[1], lst[0]
    for i in range(2, len(lst)):
        if lst[i] < minimum:
            second = minimum
            minimum = lst[i]
        elif lst[i] < second:
            second = lst[i]
    return second
```

(The official key's `elif minimum < lst[i] < second` returns 3 on `[3, 5, 2, 2]`, failing its own example.)

---

## F · Nested lists: a grid of seats, a list of records (2023 practice Q1, 2023 A Q5, 2023 B Q5)

**Steps**
1. `grid[r][c]` is row `r`, column `c`; `len(grid)` rows, `len(grid[0])` columns.
2. Visit everything: `for r in range(len(grid)): for c in range(len(grid[r])):`.
3. A record list `grades = [[94, 4], [80, 2]]`: `grades[i][0]` is the grade, `grades[i][1]` the credits.
4. Weighted average: total the weights first, then `sum(value * weight) / total_weight`.

**Model answer** (2023 B Q5 GPA, the completed blanks):

```python
def calc_gpa(grades):
    total_credits = 0
    for i in range(len(grades)):
        total_credits += grades[i][1]
    gpa = 0
    for i in range(len(grades)):
        gpa += grades[i][0] * grades[i][1] / total_credits
    return gpa
```

---

## G · Trace table: loops and prints (Q3 or Q4, 15 points)

**Steps**
1. One column per variable the table names; **one row per change**. A run like 1 to 7 may be written "1-7".
2. Before each pass, write the loop variable; `range(a, b)` stops at `b - 1`.
3. Execute line by line in order: in `a = b; b = c` the new `a` is the **old** `b`.
4. Console: `print(x, end=" ")` stays on the line; a bare `print()` ends it.
5. Watch indentation: a `print` or `return` inside vs after the loop changes everything.
6. If asked "what does it do", one sentence on the purpose, not the mechanics.

**Model answer** (2025 A Q4, run-length encoding of `"aabbbcc"`):

| `i` | `text[i]` | `text[i+1]` | `count` | `result` |
|---|---|---|---|---|
| | | | 1 | `''` |
| 0 | a | a | 2 | |
| 1 | a | b | 1 | `'a2'` |
| 2 | b | b | 2 | |
| 3 | b | b | 3 | |
| 4 | b | c | 1 | `'a2b3'` |
| 5 | c | c | 2 | |
| after | | | | `'a2b3c2'` |

Output `a2b3c2`: "returns each character followed by the number of times it repeats in a row".

---

## H · Trace a sort (2023 A Q3 bubble, 2023 B Q4 selection)

**Steps**
1. Identify it: neighbours `lst[j]`, `lst[j+1]` swapped → **bubble**; `min_idx` and one swap per outer pass → **selection**.
2. Note the direction: `<` in a bubble's comparison sorts **descending**.
3. Write the outer variable, the inner variable, and the list (or `temp`) after every swap.
4. Bubble: after each outer pass one more end position is final. Selection: after pass `i`, the first `i + 1` positions are final.
5. "Swaps per pass" questions: count the swaps in each outer pass and list them.

**Selection sort on `[64, 34, 25, 12, 22]`** (Lec 08):

| `i` | `min_idx` found | list after the swap |
|---|---|---|
| 0 | 3 (12) | `[12, 34, 25, 64, 22]` |
| 1 | 4 (22) | `[12, 22, 25, 64, 34]` |
| 2 | 2 (25) | unchanged |
| 3 | 4 (34) | `[12, 22, 25, 34, 64]` |
| 4 | 4 | unchanged |

---

## I · Trace a binary search (2023 practice Q3, undated Q3)

**Steps**
1. Columns `left`, `right`, `mid`, `lst[mid]`; `mid = (left + right) // 2`.
2. Equal → return `mid`. Middle too small → `left = mid + 1`. Too big → `right = mid - 1`.
3. Stop when `left > right`: the value is absent.
4. A variant may return something else (an insertion point, the count of steps) or have a misplaced `return -1` **inside** the loop, which stops it after one look: read the indentation.

**Search 49 in `[1, 3, 4, 6, 9, 12, 15, 17, 21, 34, 41, 49, 65]`:**

| `left` | `right` | `mid` | `lst[mid]` | decision |
|---|---|---|---|---|
| 0 | 12 | 6 | 15 | `left = 7` |
| 7 | 12 | 9 | 34 | `left = 10` |
| 10 | 12 | 11 | 49 | return 11 |

---

## J · Code completion (Q5, 10 points)

**Steps**
1. Read the whole program and the expected output before filling anything.
2. Each blank is the one expression the lines around it need: a variable already defined, a sentinel value used in the prompt, the function defined above, the missing `else`.
3. In a class: the constructor stores every parameter as `self.name = name`; `__repr__` **returns** an f-string matching the format exactly (quotes around text, none around numbers); a method uses `self.attr`; objects are made with `ClassName(args)` in the `__init__` order; comparisons use `==` (which calls `__eq__`).

**Model answer** (2025 A Q5):

```python
self.position = position                                                    # (1)
return f"Employee(name='{self.name}', position='{self.position}', base_salary={self.base_salary})"  # (2)
return self.base_salary * 0.1                                               # (3)
employee1 = Employee("Jane Smith", "Senior Developer", 85000)                # (4)
employee2 = Employee("John Doe", "Developer", 75000)
print(f"Are the employees equal? {employee1 == employee2}")                 # (5)
```

---

## K · "What is printed, and why?" (2022 papers)

**Steps**
1. Trace it; then **explain** in one or two sentences (a bare answer got partial credit).
2. The three traps they test: a local variable used outside its function (`NameError`); a function that works on a slice `lst[:]` (a copy: the caller's list is unchanged) versus one that changes `lst` directly (the caller sees it); a loop variable used as an index into the same list.
3. If it crashes, say so and why; the exact exception name isn't required.

---

## L · Read a file (2022 B)

```python
def sum_last_column(filename):
    total = 0
    with open(filename) as f:
        for line in f:
            parts = line.strip().split(",")
            total += float(parts[-1])
    return total
```

`strip()` removes the newline; `split(",")` gives the fields as **strings**, so convert before adding.
