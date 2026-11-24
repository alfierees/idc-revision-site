---
title: "Lec 07: Dictionaries and Sets"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 7
tags:
  - computational-thinking-python
  - python
  - dictionaries
  - sets
  - containers
  - hash-table
  - functions
subject: computational-thinking-python
in_scope: true
---

# Lecture 7: Dictionaries and Sets

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Container]], [[Dictionary]], [[Dictionary Key]], [[Dictionary Comprehension]], [[Frequency Counter]], [[Set]], [[Set Operations]], [[Set Comprehension]], [[Hash Table]], [[Membership Test]]

This note covers Lesson VII (`Lecture 07 Slides.pdf`, all 44 slides) plus the two companion notebooks: `Lecture 7 Notebook.ipynb` (the dictionary half of the lecture, run as code) and `Function Exercises Notebook.ipynb` (four small function exercises that revise Lesson VI). The recap of functions at the start of the deck is only a title slide.

## 1. Containers: where dictionaries and sets fit

A **container** is an object that holds inner elements. Lists and tuples are the containers already met. Two new ones arrive today. The slides classify containers on two axes: **order** (is there a position for each element?) and **mutability** (can the container change after creation?).

| | ordered (sequences) | unordered |
|---|---|---|
| **mutable** | `list` `[1,2,3]` | `set` `{1,2,3}`, `dict` `{1:"a", 2:"b"}` |
| **immutable** | `str` `"abc"`, `tuple` `(1,2,3)` | (none) |

> [!question] Slide questions left open
> The slide asks "Is `range` a container?" and "Is a list comprehension a container?" without answering. A `range` does support `in`, `len` and iteration, so it behaves like an (immutable) sequence of numbers, but it does not store its elements. A list comprehension is not a container itself: it is an expression that *builds* a list, and the list is the container.

## 2. Dictionaries

### Why we need them

Imagine storing a student's metadata (id, name, address, year enrolled) and looking students up by id, with many students and frequent lookups. You want to look up a name from an id, add or remove a student, and change a name. A [[Dictionary]] gives all of this directly.

A dictionary holds **key : value pairs** and acts as a mapping from a set of keys to values.

> [!info] Two rules for keys
> - Keys **cannot repeat** (each key appears once).
> - Keys must be **immutable** (numbers, strings, tuples of immutables). A list cannot be a key.
> Values can be anything, including lists or other dictionaries.

```python
country_to_continent = {"France": "Europe", "Germany": "Europe", "Japan": "Asia"}
print(type(country_to_continent))
print(country_to_continent["Japan"])
```

```text
<class 'dict'>
Asia
```

Looking up a key that is not there raises a `KeyError`:

```python
country_to_continent["Israel"]   # KeyError: 'Israel'
```

### Mutability, insertion and overwrite

Assigning to a key adds the pair if the key is new, and **overwrites** the old value if the key already exists. Membership with `in` tests the **keys**, not the values. `{}` is an empty dictionary.

```python
country_to_continent["Egypt"] = "Asia"      # new key: added
country_to_continent["Egypt"] = "Africa"    # existing key: value replaced
print(country_to_continent)
print("Egypt" in country_to_continent)
print(type({}))
```

```text
{'France': 'Europe', 'Germany': 'Europe', 'Japan': 'Asia', 'Egypt': 'Africa'}
True
<class 'dict'>
```

> [!note] Ordering
> The slides note that older Python did not guarantee any order, but **from Python 3.7 dictionaries remember insertion order**. Even so, you still look values up by key, never by position.

### Keys are unique: the "David Cohen" trap

```python
student_name_to_id = {"Lena Goldberg": 925, "David Cohen": 456, "Husam Mansur": 888}
student_name_to_id["Aviva Naor"] = 789       # add a student
student_name_to_id["David Cohen"] = 543      # a second David Cohen!
print(student_name_to_id["David Cohen"])
```

```text
543
```

The slide asks what this prints (`????`). The answer is `543`: the new assignment **silently overwrote** the earlier 456. Two different students with the same name cannot both be keys. The fix, shown later in the lecture, is to use the unique id as the key and keep the name inside the value.

### Dictionary functions and methods

| Method | What it does |
|---|---|
| `clear()` | remove all items |
| `copy()` | return a shallow copy |
| `get(key[, d])` | value for `key`, or `d` (default `None`) if the key is missing; **never raises** |
| `items()` | the `(key, value)` pairs |
| `keys()` | the keys |
| `values()` | the values |
| `pop(key[, d])` | remove `key` and return its value; returns `d` if missing, or raises `KeyError` if no `d` was given |
| `update(other)` | merge in pairs from `other`, overwriting existing keys |
| `len(d)` | number of items |

> [!tip] `d[key]` vs `d.get(key)`
> `d[key]` is strict: a missing key is an error. `d.get(key, default)` is forgiving: a missing key just gives you the default. This difference powers the counter pattern in section 3.

### Dictionary comprehension

Like a list comprehension, but you write `key: value` before the `for`.

```python
squares = {x: x**2 for x in range(10)}
print(squares)
print(squares.keys())
print(squares.values())
for key, value in squares.items():
    print(key, "** 2 =", value)
```

```text
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
dict_keys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
dict_values([0, 1, 4, 9, 16, 25, 36, 49, 64, 81])
0 ** 2 = 0
1 ** 2 = 1
2 ** 2 = 4
...
9 ** 2 = 81
```

(The loop prints one line per pair; the middle lines are abbreviated here.) Iterating a dictionary with `for key, value in d.items()` unpacks each pair into two variables.

### Dictionaries holding other types

Values (and tuple keys) can be structured. Using the id as the key avoids the duplicate-name problem, because ids are unique.

```python
students_by_id = {
    925: ("Lena Goldberg", "Givat Shmuel", 1975),
    456: ("David Cohen", "Ramat Gan", 1984),
    888: ("Husam Mansur", "Tira", 1982),
    789: ("Aviva Naor", "Kfar Saba", 1991),
    543: ("David Cohen", "Holon", 1975),
}
print(len(students_by_id))
print(students_by_id[789])
print(students_by_id[789][0])
print(students_by_id[789][2])
print([id for id, metadata in students_by_id.items() if metadata[0] == "David Cohen"])
```

```text
5
('Aviva Naor', 'Kfar Saba', 1991)
Aviva Naor
1991
[456, 543]
```

Reading the last line: loop over every `(id, metadata)` pair, keep the ids whose name is "David Cohen". This is a **reverse lookup** (value to key) and it has to scan every pair, unlike key lookup.

The slides then show the same data with an inner dictionary as the value, which reads better because you use field names instead of positions:

```python
students_by_id = {
    789: {"name": "Aviva Naor", "city": "Kfar Saba", "birth_year": 1991},
}
print(students_by_id[789]["name"])
```

```text
Aviva Naor
```

> [!warning] Slide error to avoid
> On that slide the print lines still use `students_by_id[789][0]` and `[2]`, copied from the tuple version. With an inner dictionary those raise `KeyError: 0`. You must index with the field names, `["name"]` and `["birth_year"]`, as above. The same applies to `metadata[0]` in the comprehension: it should be `metadata["name"]`.

**Tuple keys.** A tuple of immutables is a valid key, which is handy for compound identifiers. The notebook maps `(city, state)` to `(population, area)`:

```python
city_to_population_and_size = {
    ("New York", "NY"): (8804190, 778.3),
    ("Los Angeles", "CA"): (3898747, 1216.0),
    ("Chicago", "IL"): (2746388, 589.7),
    ("Houston", "TX"): (2304580, 1658.6),
    ("Phoenix", "AZ"): (1608139, 1341.6),
    ("Philadelphia", "PA"): (1603797, 348.1),
}
print(len(city_to_population_and_size))
print(city_to_population_and_size[("Houston", "TX")])
print(city_to_population_and_size["Chicago", "IL"][0] < city_to_population_and_size["Los Angeles", "CA"][0])
print(round(city_to_population_and_size["Houston", "TX"][0] / city_to_population_and_size["Houston", "TX"][1]))
```

```text
6
(2304580, 1658.6)
True
1389
```

Note that `d["Chicago", "IL"]` (no extra brackets) means the same as `d[("Chicago", "IL")]`: the comma already makes a tuple. The last line is population divided by area, a density, rounded.

## 3. Frequency counter: the classic dictionary pattern

Task: count how often each character appears in a string (a histogram). The dictionary maps character to count. The lecture builds the same function three ways, each shorter than the last.

**Version 1: explicit if/else**

```python
def get_char_count(text):
    """count letters - build letters histogram"""
    char_count = {}
    for char in text:
        if char not in char_count:
            char_count[char] = 1
        else:
            char_count[char] = char_count[char] + 1
    return char_count

print(get_char_count("some random text"))
```

```text
{'s': 1, 'o': 2, 'm': 2, 'e': 2, ' ': 2, 'r': 1, 'a': 1, 'n': 1, 'd': 1, 't': 2, 'x': 1}
```

**Version 2: conditional expression**

```python
for char in text:
    char_count[char] = 1 if char not in char_count else char_count[char] + 1
```

**Version 3: `get` with a default (the idiomatic one)**

```python
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
```

`get(char, 0)` returns the current count, or `0` the first time a character is seen, so no `if` is needed.

> [!example] Trace for "alibaba" (the notebook's alternative input)
> Running version 3 on `"alibaba"`, the dictionary after each character:
>
> | char | `char_count` after |
> |---|---|
> | a | `{'a': 1}` |
> | l | `{'a': 1, 'l': 1}` |
> | i | `{'a': 1, 'l': 1, 'i': 1}` |
> | b | `{'a': 1, 'l': 1, 'i': 1, 'b': 1}` |
> | a | `{'a': 2, 'l': 1, 'i': 1, 'b': 1}` |
> | b | `{'a': 2, 'l': 1, 'i': 1, 'b': 2}` |
> | a | `{'a': 3, 'l': 1, 'i': 1, 'b': 2}` |
>
> This table was worked out by hand from the code (the slides do not show this input's output).

### Sorting dictionaries

A dictionary has no meaningful order to sort in place, so you build a sorted **list** from its keys or its items. Two useful orderings:

- **By key** (alphabetical): `for c in sorted(char_counts.keys())`.
- **By value** (most frequent first): sort the `(key, value)` items using a `key` function that picks the value, with `reverse=True`.

The lecture uses a 90-word passage and `text.lower()` so that "H" and "h" count together. Printed by key it gives a to y in alphabetical order (with the space character first, at 90 occurrences, then punctuation); printed by value it starts with the most common letter, `e` (52), then `a` (42), `n` (38), `t` (34), and so on down to `v` and `q` (1 each).

```python
char_counts = get_char_count(text)          # text already lower-cased inside
for c in sorted(char_counts.keys()):
    print(c, char_counts[c])

for c, cnt in sorted(char_counts.items(), key=lambda item: item[1], reverse=True):
    print(c, cnt)
```

`key=lambda item: item[1]` means "compare items by their second part, the count". `lambda` is a one-line anonymous function: it takes `item` (a `(char, count)` tuple) and returns `item[1]`.

> [!warning] Case matters if you skip `.lower()`
> The notebook first runs the counter *without* `.lower()`. Then `D`, `H`, `S`, `T` are counted separately from `d`, `h`, `s`, `t` (for example `d 31` and `D 2` instead of `d 33`). The notebook's sort-by-key output therefore lists capitals before lowercase letters, because uppercase characters sort before lowercase ones. Lower-casing first merges them.

> [!tip] Recap (slide 21)
> Use a dictionary when you have a set of **unique keys** that map to values. It is a very common situation, so use them.

## 4. Sets

### Motivating example

Let A, B and C be the sets of student ids registered for "Intro to Python", "Advanced Python" and "Matlab Programming". Natural operations:

- a student registers: **add** the id to A
- a student drops: **remove** the id from A
- is student x in B? **membership**
- everyone in both A and B: **intersection**
- in A but not B: **difference**
- in A or C: **union**

### Creating sets

```python
tropical_fruits = {"Banana", "Mango", "Papaya", "Pineapple", "Guava"}
print(len(tropical_fruits))
print("Papaya" in tropical_fruits)
print("Kiwi" in tropical_fruits)
tropical_fruits.add("Kiwi")
print("Kiwi" in tropical_fruits, len(tropical_fruits))
```

```text
5
True
False
True 6
```

It looks like a list but is not one.

> [!info] What a set is
> A [[Set]] is an **unordered, mutable collection of unique items**.
> - Every element is **unique** (no duplicates) and must be **immutable**.
> - The set itself is mutable: you can add and remove elements.
> - Because it is unordered, it **cannot be indexed or sliced**.
> - You can use real mathematical set operations on it.

```python
primes1to10 = {1, 2, 3, 5, 7}
primes1to10[0]          # TypeError: 'set' object is not subscriptable
print(list(primes1to10))
print(set([3, 3, 3, 2, 2, 2, 1, 1, 1]))   # duplicates vanish
print(type(set()), len(set()))
{1, 2, [3, 4]}          # TypeError: unhashable type: 'list'
```

```text
[1, 2, 3, 5, 7]
{1, 2, 3}
<class 'set'> 0
```

> [!warning] Empty set is `set()`, not `{}`
> `{}` is an empty **dictionary**. To make an empty set write `set()`. A set can mix types (`{1.0, "Hello", (1, 2, 3)}` is fine) as long as every element is immutable. A list inside a set raises `TypeError: unhashable type: 'list'` (see [[Hash Table]] below for why).

**Order is not guaranteed.** Printing or looping over a set can give any order, and it can differ from how you wrote it. Never rely on a particular order.

### Why not just use lists as sets?

| | List | Set |
|---|---|---|
| order of elements | kept (and you may not care) | not kept |
| duplicates | allowed | impossible |
| `x in container` speed | slow, scans the list | fast, about one lookup |
| union / intersection / difference | none built in | built in |

A list does have a container and an `in` operator, which is why it is tempting, but the last three rows are why sets exist.

### Adding and removing

- `add(x)` adds one element. `update(iterable)` adds many; it accepts lists, tuples, strings or other sets. Duplicates are always ignored.
- `discard(x)` removes `x` if present and does **nothing** if it is missing.
- `remove(x)` removes `x` but raises `KeyError` if it is missing.
- `clear()` empties the set. `pop()` removes and returns an **arbitrary** element (`KeyError` on an empty set).

```python
my_set = {1, 3}
my_set.add(2)
my_set.update([2, 3, 4])
my_set.update([4, 5], {1, 6, 8})
print(my_set)

my_set = {1, 3, 4, 5, 6}
my_set.discard(4)
my_set.remove(6)
my_set.discard(2)        # fine: nothing happens
print(my_set)
my_set.remove(2)         # KeyError: 2
```

```text
{1, 2, 3, 4, 5, 6, 8}
{1, 3, 5}
```

```python
myset = set("mississippi")
print(myset)
myset.clear()
print(myset)
```

```text
{'m', 'i', 's', 'p'}
set()
```

(`set("mississippi")` makes a set of its distinct characters. The order the four letters print in can vary between runs.)

### Set operations

![[Lec07_set_operations.png]]

*The four operations on A = {1,2,3,4,5} and B = {4,5,6,7,8}; the highlighted elements are the result. Drawn for these notes, not copied from the slides.*

| Operation | Operator | Method | Result for the example |
|---|---|---|---|
| Union | `A \| B` | `A.union(B)` | `{1, 2, 3, 4, 5, 6, 7, 8}` |
| Intersection | `A & B` | `A.intersection(B)` | `{4, 5}` |
| Difference | `A - B` | `A.difference(B)` | `{1, 2, 3}` |
| Symmetric difference | `A ^ B` | `A.symmetric_difference(B)` | `{1, 2, 3, 6, 7, 8}` |

Union, intersection and symmetric difference are **symmetric**: `A | B` equals `B | A`. **Difference is not**: `A - B` is `{1, 2, 3}` but `B - A` is `{6, 7, 8}`. Symmetric difference means "in exactly one of the two sets".

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
print(A | B)
print(A & B)
print(A - B, B - A)
print(A ^ B)
```

```text
{1, 2, 3, 4, 5, 6, 7, 8}
{4, 5}
{1, 2, 3} {8, 6, 7}
{1, 2, 3, 6, 7, 8}
```

(In the slides' example `A.union(B)` and `B.union(A)` give the same set. The set `{6, 7, 8}` is printed in whatever order Python chooses.)

The earlier fruit example in the lecture shows the same idea: calling `.intersection()` on `tropical_fruits` with `citrus_fruits` gives `{'Orange'}` because Orange is the only fruit in both, and the union has no duplicate "Orange".

> [!note] In-place and test methods
> - `difference_update`, `intersection_update`, `symmetric_difference_update` change the set itself instead of returning a new one.
> - `isdisjoint(other)`: True if the two sets share nothing. `issubset(other)`: True if every element of this set is in `other`. `issuperset(other)`: True if this set contains all of `other`.
> - `copy()` returns a copy. `in` / `not in` test membership. Functions such as `len`, `min`, `max`, `sum`, `sorted`, `any`, `all`, `enumerate` all accept a set.

### Test yourself (slide 40)

```python
print({1, 2, 3} == {3, 2, 1})
print((1, 2) in {(2, 1)})
print(list({2, 1}) == [2, 1])
```

```text
True
False
False
```

- `{1,2,3} == {3,2,1}` is **True**: sets are equal when they hold the same elements; order is irrelevant.
- `(1,2) in {(2,1)}` is **False**: the tuples `(1,2)` and `(2,1)` are different elements, because tuples *are* ordered.
- `list({2,1}) == [2,1]` printed `False` when run here: the list takes the set's internal order, which happened to be `[1, 2]`. The slide gives no answer, and the general lesson is that you must not rely on a set's order, so the comparison is not something to depend on.

### Set comprehension

```python
print({x for x in range(20) if x % 2 == 1})
```

```text
{1, 3, 5, 7, 9, 11, 13, 15, 17, 19}
```

Same syntax as a list comprehension but with `{}` and a single expression (no colon). Remember `{x: ... for ...}` with a colon is a dictionary comprehension.

## 5. Why sets are fast: membership and hash tables

The lecture times membership testing of every number in `range(10000)` against a `range`, a `list` and a `set`. The point of the slide is that **set membership is efficient: roughly one lookup**, while a list has to scan its elements one by one until it finds the item (on average about half the list for a hit, the whole list for a miss).

The reason is that a set (and a dictionary's keys) is stored in a [[Hash Table]]. The element itself determines where in memory it lives, so Python can jump straight to the right spot instead of searching. This is also why elements and keys must be **immutable**: if a key changed after being stored, its location would be wrong. Mutable objects such as lists are "unhashable".

> [!warning] The trade-off
> Fast lookup is paid for with memory: hash tables take a larger footprint than a plain list.

> [!note] Measured here, not in the slides
> The slides show the code but no timings. Running the list and set versions locally for 10,000 numbers, the set version was clearly faster, which agrees with the slide's claim. No exact numbers are quoted here because they depend on the machine.

## 6. Function exercises (companion notebook)

The `Function Exercises Notebook` revises Lesson VI. Each exercise has a function, a main program, and `assert` statements that check it on test cases (`assert` does nothing if the condition is true and raises an error if it is false).

### Exercise 1: Celsius to Fahrenheit

```python
def c2f(celsius):
    return 9 / 5 * celsius + 32

assert c2f(0) == 32
assert c2f(100) == 212
assert c2f(-40) == -40
```

The main program reads the temperature with `float(input(...))`. For an input of 30 the notebook prints `30.0 degrees Celsius is 86.0 degrees Fahrenheit`. Note `-40` is the point where both scales agree.

### Exercise 2: Reverse a list with a for loop

Walk the indexes from the last one down to 0 with `range(len(list1) - 1, -1, -1)` and append each item to a new list.

```python
def reverse_list(list1):
    list2 = []
    for i in range(len(list1) - 1, -1, -1):
        list2.append(list1[i])
    return list2

print(reverse_list([1, 2, 3, 4]))
```

```text
[4, 3, 2, 1]
```

The `assert`s also test a single-item list and the empty list `[]` (which returns `[]`). It returns a **new** list and leaves the input unchanged.

### Exercise 3: Difference list

`diff_list([x1, x2, x3, x4])` returns `[x2-x1, x3-x2, x4-x3]`. The notebook shows a clumsy first attempt (a manual counter `i` inside a `for elem in list1` loop) and then the clean version using an index loop that stops one early:

```python
def diff_list(list1):
    if len(list1) < 2:
        return list1
    list2 = []
    for i in range(len(list1) - 1):
        list2.append(list1[i + 1] - list1[i])
    return list2

print(diff_list([100, 5, 20, 9]))
```

```text
[-95, 15, -11]
```

> [!warning] Edge case in the official design
> For a list with fewer than two items the notebook returns the list **itself** (`diff_list([100]) == [100]`, and `[]` for the empty list), even though a list of one number has no consecutive differences. That is the notebook's choice and its `assert`s expect it, but it is a quirk: a purist answer would be `[]`.

The commented-out alternative loop `for i in range(1, len(list1))` with `list1[i] - list1[i-1]` is equivalent.

### Exercise 4: Cumulative sum list

`cumsum_list([x1, x2, x3, x4])` returns `[x1, x1+x2, x1+x2+x3, x1+x2+x3+x4]`. Each entry is the previous entry plus the next input item, so you only add once per step.

```python
def cumsum_list(list1):
    list2 = []
    if len(list1) == 0:
        return list2
    list2 = [0] * len(list1)
    list2[0] = list1[0]
    for i in range(1, len(list1)):
        list2[i] = list2[i - 1] + list1[i]
    return list2

print(cumsum_list([10, 20, 30, 40]))
```

```text
[10, 30, 60, 100]
```

Trace for `[10, 20, 30, 40]`:

| i | `list1[i]` | `list2[i-1]` | `list2[i]` |
|---|---|---|---|
| 0 | 10 | (start) | 10 |
| 1 | 20 | 10 | 30 |
| 2 | 30 | 30 | 60 |
| 3 | 40 | 60 | 100 |

(The notebook version also has a debug `print(i, ...)` inside the loop, which is why its saved output shows extra lines like `1 30 10 20`. That print is dropped here.)

## Comparison: list, tuple, set, dict

| | list | tuple | set | dict |
|---|---|---|---|---|
| literal | `[1, 2]` | `(1, 2)` | `{1, 2}` | `{1: "a"}` |
| empty | `[]` | `()` | `set()` | `{}` |
| ordered / indexable | yes | yes | no | by key, not position |
| mutable | yes | no | yes | yes |
| duplicates | allowed | allowed | no | keys unique |
| `in` tests | elements (slow) | elements (slow) | elements (fast) | keys (fast) |

## Summary

- A [[Container]] is classified by order and mutability. Sets and dicts are **mutable and unordered** (a dict keeps insertion order from 3.7, but you use keys, not positions).
- A **dictionary** maps unique, immutable keys to any values. `d[key]` raises `KeyError` on a missing key; `d.get(key, default)` does not. Assigning to an existing key overwrites it.
- The **frequency counter** `counts[x] = counts.get(x, 0) + 1` is the standard dictionary pattern. Sort a dictionary by building a sorted list of its keys or its `(key, value)` items with `key=` and `reverse=`.
- A **set** is an unordered mutable collection of unique immutable elements. Create an empty one with `set()`. Use `|`, `&`, `-`, `^` for union, intersection, difference and symmetric difference.
- Sets and dict keys use a **hash table**, so membership is about one lookup instead of a scan, at the cost of more memory.
- Use a set when order does not matter, you need fast `in`, or you want set operations.

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_06-Functions]] (the function exercises revise it)
- [[Lec_08-Searching and Sorting]] (next: searching a list, sorting, and why the speed of `in` matters)
