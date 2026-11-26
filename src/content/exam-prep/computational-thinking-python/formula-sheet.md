---
title: "Python Syntax Sheet"
subject: computational-thinking-python
type: reference
description: "The methods and built-ins the exam's own cheat sheet covers (strings, lists, dictionaries, sets) plus the syntax you must write from memory: loops, functions, classes, files, f-strings and error types."
course: Computational Thinking & Python
semester: 1
year: 1
order: 2
pinned: true
tags:
  - computational-thinking-python
  - exam-prep
  - formula-sheet
aliases:
  - Python Syntax Sheet
---

> The exam hands you a cheat sheet of list, string and dictionary methods. What it does **not** give you is the syntax around them: how a loop, a function, a class or a `with open` is written, what each returns, and which ones change the object in place. That is this page.

## Built-in functions

| Function | Returns | Example |
|---|---|---|
| `print(*items, sep=" ", end="\n")` | `None` | `print(a, end=" ")` |
| `input(prompt)` | **str** | `int(input("n: "))` |
| `int(x)`, `float(x)`, `str(x)`, `bool(x)` | converted value | `int("7")`, `int(3.9)` = 3 |
| `len(seq)` | int | `len("abc")` = 3 |
| `range(stop)`, `range(start, stop, step)` | lazy sequence, stop excluded | `list(range(1, 10, 3))` = `[1, 4, 7]` |
| `sum(seq)`, `max(seq, key=f)`, `min(seq, key=f)` | number / item | `max(words, key=len)` |
| `sorted(seq, key=f, reverse=True)` | **new** list | `sorted(d.items(), key=lambda kv: kv[1])` |
| `abs(x)`, `round(x, n)`, `pow(a, b)` | number | `round(2.567, 2)` = 2.57 |
| `enumerate(seq)`, `zip(a, b)` | pairs | `for i, x in enumerate(lst):` |
| `any(seq)`, `all(seq)` | bool | `any(x < 0 for x in lst)` |
| `type(x)`, `isinstance(x, T)` | type / bool | `isinstance(other, Employee)` |
| `ord(ch)`, `chr(n)` | code / character | `ord("a")` = 97 |
| `list(x)`, `tuple(x)`, `set(x)`, `dict()` | containers | `set([1, 1, 2])` = `{1, 2}` |
| `map(f, seq)`, `filter(f, seq)` | lazy; wrap in `list()` | `list(map(int, "1 2".split()))` |

## String methods (return new strings; strings never change)

| Method | Does | Example |
|---|---|---|
| `s.split()` / `s.split(",")` | list of pieces | `"a,b,,c".split(",")` = `['a', 'b', '', 'c']` |
| `sep.join(list)` | one string | `"-".join(["a", "b"])` = `'a-b'` |
| `s.strip()`, `s.rstrip("\n")` | trim whitespace / a character | `"  hi ".strip()` = `'hi'` |
| `s.lower()`, `s.upper()`, `s.capitalize()`, `s.title()` | case | |
| `s.find(sub)` | first index, or **-1** | `"Python".find("th")` = 2 |
| `s.index(sub)` | first index, or **ValueError** | |
| `s.count(sub)` | non-overlapping count | `"banana".count("an")` = 2 |
| `s.replace(old, new)` | all replaced | |
| `s.startswith(p)`, `s.endswith(p)` | bool | |
| `s.isdigit()`, `s.isalpha()`, `s.isspace()` | bool | `"12".isdigit()` = True, `"1.5".isdigit()` = False |
| `s[i]`, `s[a:b]`, `s[::-1]` | index, slice, reverse | |

## List methods (change the list in place, return `None` unless noted)

| Method | Does |
|---|---|
| `lst.append(x)` | add `x` at the end |
| `lst.extend(seq)` | add every item of `seq` |
| `lst.insert(i, x)` | insert before index `i` |
| `lst.pop()` / `lst.pop(i)` | remove and **return** the last / item `i` |
| `lst.remove(x)` | remove the first `x` (ValueError if absent) |
| `lst.sort(key=f, reverse=True)` | sort in place |
| `lst.reverse()` | reverse in place |
| `lst.index(x)`, `lst.count(x)` | **return** position / count |
| `lst.copy()`, `lst[:]` | **return** a shallow copy |
| `del lst[i]` | remove by index |

## Dictionary and set methods

| Method | Does |
|---|---|
| `d[k] = v` | add or overwrite |
| `d.get(k, default)` | value or default, never an error |
| `d.keys()`, `d.values()`, `d.items()` | views to loop over |
| `d.pop(k)`, `del d[k]` | remove |
| `d.update(other)` | merge in |
| `k in d` | key test |
| `s.add(x)`, `s.remove(x)`, `s.discard(x)` | set add / remove (discard: no error) |
| `a & b`, `a \| b`, `a - b`, `a ^ b` | intersection, union, difference, symmetric difference |

## Control flow

```python
if cond:            # elif / else optional
    ...
x = a if cond else b

for item in seq:    # break, continue allowed
    ...
for i in range(len(seq)):
    ...
while cond:
    ...
while True:         # sentinel loop
    if done:
        break
```

## Functions, comprehensions, lambda

```python
def f(a, b=0):
    """docstring"""
    return a + b, a - b            # a tuple

total, diff = f(5, 2)
squares = [x * x for x in nums if x > 0]
lookup = {k: v for k, v in pairs}
by_value = lambda kv: kv[1]
```

## Classes

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __repr__(self):
        return f"({self.x},{self.y})"
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    def distance_to_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

p = Point(3, 4)
p.distance_to_origin()     # 5.0
```

## Exceptions and files

```python
try:
    ...
except ValueError:
    ...
except (KeyError, IndexError) as e:
    ...
else:
    ...
finally:
    ...
raise ValueError("bad input")

with open("file.txt") as f:          # "r" default, "w" overwrite, "a" append
    text = f.read()                  # or f.readline(), f.readlines(), for line in f
with open("out.txt", "w") as f:
    f.write("text\n")
```

## f-string formats

| Spec | Gives | Example |
|---|---|---|
| `{x:.2f}` | 2 decimals | `3.14` |
| `{x:,}` | thousands separator | `1,234,567` |
| `{x:5d}`, `{s:>8}`, `{s:<8}` | width, right / left align | |
| `{x:.1%}` | percentage | `0.256` → `25.6%` |

## Operators at a glance

| Kind | Operators |
|---|---|
| Arithmetic | `+ - * / // % **` |
| Comparison (chainable: `1 <= x <= 6`) | `== != < <= > >=` |
| Logic (short-circuit) | `and or not` |
| Membership, identity | `in`, `not in`, `is`, `is not` |
| Augmented assignment | `+= -= *= /= //= %=` |
| Sequences | `+` concatenate, `*` repeat, `[i]`, `[a:b:step]` |

## Error types

| Error | Typical cause |
|---|---|
| `SyntaxError` | missing colon or bracket, `=` where `==` was meant |
| `IndentationError` | a block not indented consistently |
| `NameError` | a typo in a name, a local used outside its function |
| `TypeError` | `"3" + 4`, `range("5")`, calling with the wrong number of arguments |
| `ValueError` | `int("abc")`, `lst.index(x)` when `x` is absent |
| `IndexError` | `lst[len(lst)]`, `s[i + 1]` on the last character |
| `KeyError` | `d[k]` for a missing key (use `d.get`) |
| `ZeroDivisionError` | dividing by 0, an average of an empty list |
| `AttributeError` | `None.append(…)` after `lst = lst.sort()` |

## Complexity

| Operation | Cost |
|---|---|
| `x in list`, linear search, `max`, `sum` | n |
| `x in set`, `x in dict`, `d[k]` | about 1 |
| Binary search (sorted list) | log₂ n |
| Selection sort, bubble sort | n² |
| Quick sort, `sorted`, `.sort()` | n log n |
