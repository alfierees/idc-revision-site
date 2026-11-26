---
title: "Common Mistakes"
subject: computational-thinking-python
type: reference
description: "The slips that cost points on the Python exam: printing instead of returning, input left as a string, off-by-one ranges, sort() returning None, aliasing, trace rows skipped, and the class blanks."
course: Computational Thinking & Python
semester: 1
year: 1
order: 5
tags:
  - computational-thinking-python
  - exam-prep
  - common-mistakes
---

> Syntax slips are forgiven on this exam; **logic is not**. Most lost points come from a function that prints instead of returning, an off-by-one loop, a trace table that skips a change, or output that doesn't match the example. Even the official keys trip on these (a `NameError` in 2025 Q2c, a duplicate-minimum bug in 2023 B Q1a): so check your code on the question's own example.

## Writing functions and programs

| Mistake | Fix |
|---|---|
| `print(result)` where the question says "returns" | `return result`; the caller prints |
| A `return` inside the loop | It stops at the first item: put it after the loop (unless you mean "found, stop") |
| Rewriting the logic of parts a and b inside part c | Call the functions you wrote |
| A different function name, parameter order or dict key | Copy them from the question exactly (`'total_messages'`) |
| Hard-coding the example's values | Use the parameters; keep a threshold in a variable (`min_length = 6`) |
| Using an outer variable inside the function instead of the parameter | Only the parameters and locals: it must work for any call |
| Accumulator set inside the loop | `count = 0` **before** the loop, or it resets every pass |
| Starting a running max/min at 0 | Start from `lst[0]` (negative numbers, or all values above 0 for a min) |
| `>` where the question says "at least" | `>=` |
| Not reading part c before writing a and b | Part c shows what a and b must return |

## Input and types

| Mistake | Fix |
|---|---|
| `n = input("n: ")` then `range(n)` | `input` returns a string: `int(input(...))` → else `TypeError` |
| `"3" + 4` | Convert first: `int("3") + 4` or `"3" + str(4)` |
| Reading the name inside the retry loop when it's asked once | Read it before the loop |
| An `index < len(lst)` check written `<= len(lst)` | Valid indices are `0` to `len - 1` (the 2023 key's `>` let row 100 crash) |
| `while attempts < 5` without increasing `attempts` | An endless loop: `attempts += 1` in the invalid branch |
| `int(3.9)` expected to round | It cuts to 3; `round(3.9)` is 4 |
| `10 / 2` expected to be an int | `/` always gives a float (5.0); `//` for whole division |

## Loops and ranges

| Mistake | Fix |
|---|---|
| `range(1, n)` to run n times | It runs n − 1 times; `range(n)` or `range(1, n + 1)` |
| `for i in range(len(s)):` with `s[i + 1]` | `IndexError` on the last pass: `range(len(s) - 1)` |
| Forgetting the last run after a neighbour loop | Add it after the loop (`result += s[-1] + str(count)`) |
| Changing a list while looping over it | Loop over a copy, or build a new list |
| `for x in lst: x = x * 2` expected to change the list | `x` is a copy of the value: `lst[i] = lst[i] * 2` |
| `x == 1 or 2` | `x == 1 or x == 2` (or `x in (1, 2)`) |
| `elif` tests in the wrong order | The first true branch wins; order from the narrowest band |

## Lists, strings and aliasing

| Mistake | Fix |
|---|---|
| `lst = lst.sort()` | `sort()` returns `None`: `lst.sort()` alone, or `lst = sorted(lst)` |
| `b = a` to "copy" a list | Same list: `b = a[:]` or `a.copy()` |
| A function changes the caller's list unintentionally | Lists are passed by reference: work on a copy if it mustn't change |
| Expecting a slice to change the original | Slices are copies |
| `s[0] = "X"` on a string | Strings are immutable: build a new one |
| `[[0] * 3] * 3` as a grid | Three references to one row: `[[0] * 3 for _ in range(3)]` |
| `lst.append(a, b)` | One item: `append([a, b])` for a pair, `extend([a, b])` for two |
| `max(words)` for the longest word | Alphabetical: `max(words, key=len)` |
| `s.split(" ")` on text with double spaces | Empty strings appear: `s.split()` |
| `lst.index(x)` when `x` may be missing | `ValueError`: test `x in lst` first, or use `s.find` (−1) for strings |

## Dictionaries and sets

| Mistake | Fix |
|---|---|
| `d[k] += 1` on a new key | `KeyError`: `d[k] = d.get(k, 0) + 1` |
| Expecting two values under one key | Keys are unique: the second assignment overwrites |
| `max(d)` for the most common item | That's the largest key: `max(d, key=d.get)` |
| Sorting a dict expecting a dict back | `sorted(d.items(), …)` gives a list of pairs |
| `s[0]` on a set | Sets have no order or index |

## Trace tables (Part B)

| Mistake | Fix |
|---|---|
| One row per pass when two variables change in it | One row per **change**, in execution order |
| Using the new value of a variable in `a = b; b = c` order | Execute line by line: `a` gets the **old** `b` |
| The loop variable's last value wrong | `range(5)` ends at 4; `range(len(lst) - 1, 0, -1)` ends at 1 |
| Console output on separate lines when `end=" "` | `end=" "` keeps everything on one line |
| Missing the `print()` that starts a new line in a pattern | A bare `print()` after the inner loop ends each row |
| Skipping the "what does it do" sentence | Name the purpose: "Fibonacci numbers", "run-length encoding", "sorts descending" |
| Bubble sort assumed ascending | `if lst[j] < lst[j + 1]: swap` sorts **descending** |
| Not noticing a `return` indented inside the loop | It returns after the first pass |

## Classes (Part C, 2025)

| Mistake | Fix |
|---|---|
| `position = position` in `__init__` | `self.position = position` |
| `__repr__` that prints | It must **return** a string |
| Quotes in the wrong places in `__repr__` | Copy the required format: `name='Jane'` has quotes, `base_salary=85000` doesn't |
| `base_salary` without `self.` inside a method | `NameError`: `self.base_salary` |
| Calling `Employee()` with the arguments in a different order | Match the `__init__` parameters (`self` is automatic) |
| Expecting `==` to compare data without `__eq__` | It compares identity: define `__eq__` |
| `=` in a comparison (`self.salary = other.salary`) | `==` (the 2025 paper's own typo) |

## Files and exceptions

| Mistake | Fix |
|---|---|
| Summing `line.split(",")[-1]` directly | It's a string with `\n`: `float(line.strip().split(",")[-1])` |
| `open(...)` without closing | `with open(...) as f:` |
| `"w"` mode on a file you meant to add to | `"w"` erases it; `"a"` appends |
| `except:` around everything | Catch the specific error (`ValueError`) |
