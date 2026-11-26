---
title: "Cheat Sheet (Lec 1–12)"
subject: computational-thinking-python
type: reference
description: "Everything the final exam uses from the course, in one page: types and strings, conditions and loops, lists, functions, dictionaries and sets, searching and sorting, classes and files, with the code patterns that come up in every paper."
course: Computational Thinking & Python
instructor: Jonathan Alon
semester: 1
year: 1
order: 1
pinned: true
tags:
  - computational-thinking-python
  - exam-prep
  - cheat-sheet
aliases:
  - Python Cheat Sheet
---

> **The exam (70% of the grade):** 3 hours, written on paper, **5 compulsory questions, 100 points**, in the same three parts on every paper since 2023 (the 2022 papers had a "predict the output and explain why" part instead of trace tables). A printed cheat sheet of list, string and dictionary methods and a calculator are allowed; no external modules.
>
> | Part | Questions | What you do |
> |---|---|---|
> | **A · Writing code** (60) | Q1 and Q2, 30 each, split into a, b, c | Write 2 small **functions**, then a **main program** that reads input and calls them |
> | **B · Running code** (30) | Q3 and Q4, 15 each | Fill a **trace table** (one row per variable change), write the console output, sometimes say in one sentence what the code does |
> | **C · Code completion** (10) | Q5 | Fill 5 blanks in a given program (2025: a class) |
>
> Small syntax slips (a missing colon, a typo in a name) are forgiven; logic is what's marked. Assume valid input unless the question asks you to check it. Comment your code. The 30% for assignments needs only 6 of the 8.
>
> Worked papers: [[PP_07|2025 Moed A]] (the current lecturer), [[PP_05|2023 Moed A]], [[PP_06|2023 Moed B]], [[PP_04|2023 practice]], [[PP_01|undated practice]], [[PP_02|2022 Moed A]], [[PP_03|2022 Moed B]].

---

## 0. Pattern picker: what does the question want?

| You see… | Use | Section |
|---|---|---|
| "Count the words / items that…" | `split()`, loop, `count += 1` | §2, §4 |
| "Longest / shortest / largest" | `max(lst, key=len)`, or a running best | §4 |
| "How many times does each … appear" | **frequency dict**: `d[k] = d.get(k, 0) + 1` | §7 |
| "Ask the user for n items" | `for _ in range(n):` + `input()` (+ `int()`) | §3 |
| "Until the user enters 0 / done" | sentinel `while True:` … `break` | §3 |
| "Ask again until valid (max 5 tries)" | `while` with a counter and a validity test | §3 |
| "Digits of a number" | `str(n)` and loop over characters, or `% 10` and `// 10` | §1 |
| "Left / right of the decimal point" | `str(x).split(".")` | §1 |
| "Compare each item with the next" | `for i in range(len(s) - 1):` … `s[i]`, `s[i+1]`; handle the last run after the loop | §4 |
| "Reverse in place, no helpers" | swap `lst[i]` and `lst[-1-i]` for `i` in `range(len(lst)//2)` | §4 |
| "Seat matrix / table / grid" | nested list `grid[row][col]`, nested loops | §4 |
| "Return several results" | return a tuple or a dict with the exact key names | §5, §7 |
| "Second smallest in one pass" | two running values, update both | §8 |
| A trace of a sort or a search | write every swap / every `left, mid, right` | §8 |
| "Complete the class" | `self.attr = attr`, `__repr__` returns an f-string, `__eq__` compares attributes | §9 |
| "Read a CSV file" | `with open(name) as f:` + `line.strip().split(",")` | §10 |

---

## 1. Types, operators, strings (Lec 01 and 02)

| Type | Example | Convert |
|---|---|---|
| `int` | `42` | `int("42")`, `int(3.99)` = 3 (cuts, doesn't round) |
| `float` | `3.5` | `float("3.5")` |
| `str` | `"hi"`, `'hi'` | `str(42)` |
| `bool` | `True`, `False` | `True == 1`, `False == 0` |

**`input()` always returns a string**: `n = int(input("n: "))`.

| Operator | Meaning | Example |
|---|---|---|
| `/` | true division, always float | `10 / 4` = 2.5, `10 / 2` = 5.0 |
| `//` | floor division | `7 // 2` = 3, `-7 // 2` = -4 |
| `%` | remainder | `7 % 3` = 1, `n % 2 == 0` even, `n % 10` last digit |
| `**` | power | `2 ** 10` = 1024 |
| `and`, `or`, `not` | logic, short-circuit | `x != 0 and 10 / x > 1` is safe |

Precedence: `**`, then `* / // %`, then `+ -`, then comparisons, then `not`, `and`, `or`. `round(2.5)` is 2 and `round(3.5)` is 4 (round half to even).

**Digits of a number:** `for ch in str(n): total += int(ch)`, or

```python
while n > 0:
    digit = n % 10      # last digit
    n = n // 10         # drop it
```

**Strings are immutable sequences.**

| Code | Result for `s = "Welcome to Python class"` |
|---|---|
| `len(s)` | 23 |
| `s[0]`, `s[-1]` | `'W'`, `'s'` |
| `s[3:7]`, `s[:3]`, `s[::-1]` | slice (end excluded), first 3, reversed |
| `s.split()` | `['Welcome', 'to', 'Python', 'class']` |
| `"12.345".split(".")` | `['12', '345']` |
| `" ".join(words)` | glue a list back together |
| `s.lower()`, `s.upper()`, `s.strip()` | new strings (the original is unchanged) |
| `s.find("Py")`, `s.count("o")`, `s.replace(a, b)` | 11, 3, a new string |
| `"Py" in s` | `True` |
| `s[:i] + s[i+1:]` | `s` without position `i` |
| `"ab" * 3`, `"a" + "b"` | `'ababab'`, `'ab'` |
| `ord("A")`, `chr(97)` | 65, `'a'`; `"Z" < "a"` is True (capitals first) |

**f-strings:** `f"{name}: {price:.2f}"` (2 decimals), `f"{'x':>5}"` (right-align in 5).

`print(a, b, sep=", ", end="")`: `sep` between items, `end` instead of the newline.

---

## 2. Conditions (Lec 03)

```python
if x > 0:
    ...
elif x == 0:
    ...
else:
    ...
```

- `elif` is tested only if everything above was False: order the tests, and each needs only one boundary.
- Ternary: `label = "even" if n % 2 == 0 else "odd"`.
- `pass` is an empty block.
- `==` compares, `=` assigns. `x == 1 or 2` is always truthy: write `x == 1 or x == 2` (or `x in (1, 2)`).

---

## 3. Loops and input (Lec 03 and 04)

| Loop | Use |
|---|---|
| `for x in seq:` | each item of a list, string, dict (keys), range |
| `for i in range(len(lst)):` | when you need the index (neighbours, swaps) |
| `for i, x in enumerate(lst):` | index and item together |
| `for a, b in zip(l1, l2):` | two parallel lists |
| `while cond:` | unknown number of passes (input, halving, searching) |

`range(stop)`, `range(start, stop)`, `range(start, stop, step)`: **stop excluded**. `range(2, 11, 3)` → 2, 5, 8; `range(5, 0, -2)` → 5, 3, 1; `range(n - 2)` runs n − 2 times.

`break` leaves the loop; `continue` skips to the next pass.

**Three input loops that come up every year:**

```python
# 1. read n items
items = []
for _ in range(n):
    items.append(int(input("Enter a number: ")))

# 2. sentinel: stop on 0
while True:
    x = int(input("Enter a number (0 to stop): "))
    if x == 0:
        break
    items.append(x)

# 3. validate, at most 5 attempts
attempts = 0
ok = False
while attempts < 5 and not ok:
    age = int(input("Age: "))
    if 18 <= age <= 120:
        ok = True
    else:
        attempts += 1
        print("Invalid, try again")
```

---

## 4. Lists, tuples, nested lists (Lec 04 and 05)

Lists are **mutable**; tuples are not.

| Code | Effect |
|---|---|
| `lst.append(x)` | add one item at the end (returns `None`) |
| `lst.extend([a, b])`, `lst + [a]` | add several / a new list |
| `lst.insert(i, x)` | insert at index `i` |
| `lst.pop()`, `lst.pop(i)` | remove and return the last / item `i` |
| `lst.remove(x)` | remove the first `x` |
| `lst.index(x)`, `lst.count(x)`, `x in lst` | position (error if absent), how many, yes/no |
| `lst.sort()` | sorts **in place**, returns `None` |
| `sorted(lst)` | a **new** sorted list; `key=len`, `reverse=True` |
| `len`, `sum`, `max`, `min` | `max(words, key=len)` returns the longest item |
| `lst[:]`, `lst.copy()` | a copy (a slice is always a copy) |
| `b = lst` | **the same list** under a second name |

**Comprehensions:** `[x * x for x in range(5) if x % 2 == 0]` → `[0, 4, 16]`. `any(...)`, `all(...)`.

**Tuples:** `t = (1, 2)`, `(5,)` is a one-item tuple, `a, b = b, a` swaps, functions return tuples (`return lo, hi`).

**Nested lists:** `grid = [[0] * cols for _ in range(rows)]`; `grid[r][c]`; loop `for r in range(len(grid)): for c in range(len(grid[r])):`. (Never `[[0] * cols] * rows`: every row is the same list.)

**Neighbour loop (run-length, pairs, differences):**

```python
for i in range(len(s) - 1):      # stops one early: s[i+1] must exist
    if s[i] == s[i + 1]:
        ...
# the last run has no right neighbour: handle it after the loop
```

**Reverse in place without helpers:**

```python
for i in range(len(lst) // 2):
    lst[i], lst[-1 - i] = lst[-1 - i], lst[i]
```

**Mean, median by hand:** `mean = sum(lst) / len(lst)`; sort a copy, take the middle (or the average of the two middles).

---

## 5. Functions (Lec 06)

```python
def name(param1, param2=default):
    """What it does."""
    ...
    return value          # no return → None
```

- **Return, don't print**, when the question says "returns". The caller prints.
- One function, one job; the main program calls them (Q1c and Q2c are always "now use a and b").
- Several results: `return total, avg` (a tuple) or a dict with the **exact** keys asked.
- **Scope:** names created inside a function are local and vanish after it; a function can read a global but assigning to the name makes a new local. Parameters are new names for the caller's values.
- **Lists passed in can be changed** by the function (same object); ints and strings can't.
- `lambda x: x[1]` is a one-line function, handy as a `key`. `map(f, lst)`, `filter(f, lst)`.

---

## 6. Recursion (Lec 08)

A function that calls itself on a smaller input, with a **base case** that stops it:

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    return (quick_sort([x for x in arr if x < pivot])
            + [x for x in arr if x == pivot]
            + quick_sort([x for x in arr if x > pivot]))
```

---

## 7. Dictionaries and sets (Lec 07)

| Code | Effect |
|---|---|
| `d = {}`, `d = {"a": 1}` | empty / literal |
| `d[k] = v` | add or **overwrite** (keys are unique) |
| `d[k]` | value; `KeyError` if absent |
| `d.get(k, 0)` | value, or 0 if absent |
| `k in d` | key test |
| `d.keys()`, `d.values()`, `d.items()` | loop with `for k, v in d.items():` |
| `del d[k]`, `d.pop(k)` | remove |
| `max(d, key=d.get)` | the key with the largest value |
| `sorted(d.items(), key=lambda kv: kv[1], reverse=True)` | pairs by value, high first |
| `{w: len(w) for w in words}` | dict comprehension |

**The frequency counter** (2022 A, 2025 A, PS 7):

```python
counts = {}
for item in items:
    counts[item] = counts.get(item, 0) + 1
```

**Build a dict from input** (2025 A Q2a): `stations[name] = int(input(...))` inside a `for _ in range(n)` loop.

**Sets:** `set(lst)` drops duplicates (no order, no index); `s.add(x)`, `s.remove(x)`; `a & b`, `a | b`, `a - b`; `x in s` is fast.

| | list | tuple | set | dict |
|---|---|---|---|---|
| ordered, indexed | yes | yes | no | by key |
| mutable | yes | no | yes | yes |
| duplicates | yes | yes | no | unique keys |

---

## 8. Searching and sorting (Lec 08)

| Algorithm | Idea | Steps |
|---|---|---|
| Linear search | check each item, `return i`, else `return -1` | n |
| **Binary search** | sorted list; compare with the middle, drop half | log₂ n (20 for a million) |
| **Selection sort** | find the minimum of the rest, swap it to position `i` | n² |
| **Bubble sort** (2023 exam) | swap neighbours that are in the wrong order; the extreme value bubbles to the end each pass | n² |
| Quick sort | pivot, smaller + equal + larger, recurse | n log n |

```python
def binary_search(lst, num):
    left, right = 0, len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == num:
            return mid
        elif lst[mid] < num:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def bubble_sort(lst):
    for i in range(len(lst) - 1, 0, -1):
        for j in range(i):
            if lst[j] > lst[j + 1]:          # < sorts descending
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst
```

**Second smallest in one pass** (2023 B): keep `first` and `second`; a new minimum pushes the old one into `second`.

---

## 9. Classes (Lec 09)

```python
class Employee:
    def __init__(self, name, position, base_salary):
        self.name = name                      # attributes live on self
        self.position = position
        self.base_salary = base_salary

    def __repr__(self):                       # what print(obj) shows: RETURN a string
        return f"Employee(name='{self.name}', position='{self.position}', base_salary={self.base_salary})"

    def __eq__(self, other):                  # what obj1 == obj2 means
        return self.name == other.name and self.base_salary == other.base_salary

    def calculate_bonus(self):                # a method: first parameter is self
        return self.base_salary * 0.1

e = Employee("Jane Smith", "Senior Developer", 85000)   # calls __init__
print(e, e.calculate_bonus())
```

| You write | Python calls |
|---|---|
| `Employee(...)` | `__init__` |
| `print(x)`, `f"{x}"` | `__repr__` (or `__str__`) |
| `x == y`, `x < y` | `__eq__`, `__lt__` |
| `x + y` | `__add__` |
| `len(x)`, `k in x` | `__len__`, `__contains__` |

Without `__eq__`, two objects with equal data are **not** `==`. Without `__repr__`, `print` shows a memory address.

---

## 10. Exceptions and files (Lec 10)

```python
try:
    x = int(input("Number: "))
except ValueError:
    print("Not a number")
else:
    print("OK")              # only if no exception
finally:
    print("always runs")

with open("data.csv") as f:          # closes the file for you
    for line in f:
        parts = line.strip().split(",")
        total += float(parts[-1])

with open("out.txt", "w") as f:      # "w" overwrites, "a" appends
    f.write("line\n")
```

Error types: `SyntaxError` (won't run), runtime errors (`ValueError`, `TypeError`, `IndexError`, `KeyError`, `ZeroDivisionError`, `NameError`), logic errors (runs, wrong answer). `raise ValueError("msg")` throws your own.

---

## 11. Modules (Lec 11) and Gen AI (Lec 12)

`import math` (`math.sqrt`, `math.pi`), `import random` (`random.randint(1, 6)`, `random.choice`), `from statistics import mean`, `datetime`, `csv`; `if __name__ == "__main__":` runs code only when the file is run directly. NumPy, pandas and matplotlib were shown for analysis and plots. **The exam says no external modules**, so write loops yourself unless told otherwise. Lec 12 (LLMs, prompt engineering) has not appeared on a paper.

---

## 12. The one-box summary

> - **Part A:** helper functions that **return**, then a main program that reads input (`int(input())`), loops, and **calls** them. Use the exact names and dict keys the question gives.
> - The patterns: split-and-count; running max/min; frequency dict with `get(k, 0) + 1`; neighbour loop to `len - 1` plus the last item after it; in-place swap; nested list `grid[r][c]`; validation `while` with a counter.
> - **Part B:** one trace row per change; write the loop variable; `range` stops one early; `print(..., end=" ")` keeps the line; watch indentation of `return` and `print`.
> - Lists are shared by reference, slices are copies, `sort()` returns `None`.
> - Sorting traces: selection swaps once per pass; bubble swaps neighbours and settles one end per pass. Binary search: `left`, `right`, `mid = (left + right) // 2`.
> - **Part C:** each blank is the one expression the surrounding lines need. Classes: `self.x = x`, `__repr__` **returns** an f-string, `__eq__` compares attributes, objects made with `ClassName(args)`.
