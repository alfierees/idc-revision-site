---
title: "Lecture 5: Lists Cont'd, List Comprehension, Tuples"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 5
tags:
  - computational-thinking-python
  - python
  - lists
  - list-comprehension
  - tuples
  - zip
  - enumerate
subject: computational-thinking-python
in_scope: true
---

# Lecture 5: Lists Cont'd, List Comprehension, Tuples

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[List Comprehension]], [[zip]], [[enumerate]], [[any and all]], [[Tuple]], [[Immutability]], [[Parallel Assignment]]

Sources: Lecture 05 slides and the companion Lecture 5 notebook. Outputs shown below were checked by running the code (Python 3).

## 1. Warm-up: uniques and parallel lists

### Unique elements the long way

Loop over the list and append an element only if it is not already in the result. The order of first appearance is kept.

```python
lst = [1, 4, 5, 8, 3, 5, 7, 1, 2]
uniques = []
for x in lst:
    if x not in uniques:
        uniques.append(x)
print(uniques)
```

```text
[1, 4, 5, 8, 3, 7, 2]
```

> [!note]
> The slide promises a simpler and more efficient version later in the course (sets). The `in` test on a list scans the whole list each time, which is why this is slow for big inputs.

### Two parallel lists

Two lists where position `i` of one matches position `i` of the other. The index-based version needs a length check first.

```python
fruits = ["Banana", "Mango", "Pineapple", "Strawberries", "Mellon"]
calories = [89, 60, 50, 32, 34]  # per 100 grams

if len(fruits) == len(calories):
    for i in range(len(fruits)):
        print("There are ", calories[i], " calories in 100 grams of", fruits[i])
else:
    print("Error: lists are not of same size!")
```

```text
There are  89  calories in 100 grams of Banana
There are  60  calories in 100 grams of Mango
There are  50  calories in 100 grams of Pineapple
There are  32  calories in 100 grams of Strawberries
There are  34  calories in 100 grams of Mellon
```

## 2. `zip` and `enumerate`

Two built-ins that remove the `range(len(...))` index juggling.

| Tool | What it gives each loop turn | Use when |
| --- | --- | --- |
| `range(len(seq))` | only the index `i` | you need the index and will look up `seq[i]` yourself |
| `zip(a, b)` | a pair `(a[i], b[i])` | you walk several sequences side by side |
| `enumerate(seq)` | a pair `(i, seq[i])` | you want index and element together |

```python
for fruit, calorie in zip(fruits, calories):
    print("There are ", calorie, " calories in 100 grams of", fruit)

for i, fruit in enumerate(fruits):
    print(i, fruit)
```

```text
There are  89  calories in 100 grams of Banana
There are  60  calories in 100 grams of Mango
There are  50  calories in 100 grams of Pineapple
There are  32  calories in 100 grams of Strawberries
There are  34  calories in 100 grams of Mellon
0 Banana
1 Mango
2 Pineapple
3 Strawberries
4 Mellon
```

The `for fruit, calorie in ...` header uses [[Parallel Assignment]] (section 5): each pair is unpacked into two names.

> [!tip] Intuition
> `zip` works like a zipper joining two rows of teeth. If the lists have different lengths, `zip` stops at the shortest, silently. That is why the slide still checks `len(fruits) == len(calories)` first.

The notebook also shows `enumerate` used to modify a list in place, converting numeric strings to ints:

```python
s = "Joni,Alon,123456789"
lst = s.split(",")
for i, x in enumerate(lst):
    if x.isdigit():
        lst[i] = int(x)
print(lst)
```

```text
['Joni', 'Alon', 123456789]
```

You need the index `i` here because you are assigning back into `lst[i]`. Rebinding `x` would change nothing in the list.

## 3. List comprehension

### Motivation

Building a list of squares with a loop takes four lines:

```python
list_of_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list_of_squared_numbers = []
for i in list_of_numbers:
    list_of_squared_numbers.append(i**2)
print(list_of_squared_numbers)
```

```text
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

A [[List Comprehension]] does the same in one expression:

```python
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
square_of_mylist = [x**2 for x in mylist]
print(square_of_mylist)
```

```text
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### General syntax

```python
[expression for element in iterable]
```

- **iterable**: anything Python can loop over (list, tuple, string, range).
- **element**: the loop variable name.
- **expression**: any valid expression, usually using `element`.
- The result is always a **new list**.

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print([x**2 for x in lst])
print(type([x**2 for x in lst]))
print([max(x, 5) for x in lst])
print([1 for x in lst])       # same as [1] * len(lst)
print([1 for _ in lst])       # _ is a throwaway name
```

```text
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
<class 'list'>
[5, 5, 5, 5, 5, 6, 7, 8, 9, 10]
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```

The underscore `_` is only a conventional variable name meaning "I do not use this value".

It works on any iterable, including strings:

```python
l = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
print([word.upper() for word in l])
print([ord(c) for c in 'Python'])
```

```text
['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']
[80, 121, 116, 104, 111, 110]
```

> [!example] Loop to comprehension, step by step
> | Loop version | Comprehension part |
> | --- | --- |
> | `result = []` | the outer `[ ]` |
> | `for x in lst:` | `for x in lst` |
> | `result.append(x**2)` | the expression `x**2`, written first |

### With a condition (filtering)

```python
[expression for element in iterable if condition]
```

The `if` goes at the **end** and decides which elements are kept.

```python
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print([n for n in mylist if n % 2 == 0])
random_words = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
print([word for word in random_words if len(word) < 4])
```

```text
[2, 4, 6, 8, 10]
['The', 'fox', 'the', 'dog']
```

### The empty-string trap

The slides filter names beginning with a or A, but the list contains an empty string `""`. Indexing `""[0]` raises an `IndexError`, so the condition must guard against it. An empty string is falsy, so `st and ...` short-circuits for it.

```python
names = ["", "Oren", "Gil", "Alona", "Svetlana", "Amir", "avigail"]

# [st for st in names if st[0].lower() == "a"]   -> IndexError on ""
print([st for st in names if st and st[0].lower() == "a"])
print([name for name in [name for name in names if name] if name[0].lower() == "a"])
print([st if st and st[0].lower() == "a" else "" for st in names])
print(names)
```

```text
['Alona', 'Amir', 'avigail']
['Alona', 'Amir', 'avigail']
['', '', '', 'Alona', '', 'Amir', 'avigail']
['', 'Oren', 'Gil', 'Alona', 'Svetlana', 'Amir', 'avigail']
```

> [!warning] `if` at the end versus `if ... else` at the front
> - `[x for x in xs if cond]` **filters**: fewer elements come out.
> - `[a if cond else b for x in xs]` **transforms**: exactly as many elements come out, some replaced. The third line above is this second form, "not quite what we wanted" as the slide puts it.
>
> Also, a comprehension builds a new list. `names` is unchanged afterwards (last line).

> [!note] Notebook discrepancy
> In the Lecture 5 notebook the saved output for the `len(st) > 0 and ...` cell shows only `['avigail']`. The correct output of that code is `['Alona', 'Amir', 'avigail']` (as above); the saved notebook output looks stale.

### Comprehensions with `range`

```python
print([x**2 for x in range(1, 11)])
print(len([x**2 for x in range(10000)]))
print(sum([x**2 for x in range(10000)]))
print(8 * sum([1 / ((4*n+1) * (4*n+3)) for n in range(int(1e6))]))
```

```text
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
10000
333283335000
3.1415921535899
```

The slide shows the identity behind it:

$$
\sum_{n=0}^{\infty} \frac{1}{(4n+1)(4n+3)} = \frac{1}{1\cdot 3} + \frac{1}{5\cdot 7} + \frac{1}{9\cdot 11} + \cdots = \frac{\pi}{8}
$$

So the slide's last example estimates pi: summing the terms $\frac{1}{(4n+1)(4n+3)}$ for $n = 0, 1, 2, \dots$ and multiplying by 8 gets closer to pi the more terms you use (1000 terms give about 3.14109, a million terms about 3.14159215). The slide shows the million-term result as `3.141592153589902`; my run differs in the last few digits because of floating-point summation order, which does not matter here.

### Range of floats (slide question)

`range` only takes integers, so build floats by dividing:

```python
print([i / 10 for i in range(0, 11)])
```

```text
[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
```

> [!warning] Do not accumulate `i * 0.1`
> `[i * 0.1 for i in range(11)]` gives `0.30000000000000004`, `0.6000000000000001` and so on. Dividing the integer by 10 gives the closest float to each value. Float rounding is covered under data types.

The notebook closes this section with: "Use them! But don't abuse them." If a comprehension needs nesting and several conditions, a plain loop is more readable.

## 4. `any` and `all`

| Function | True when | Empty iterable |
| --- | --- | --- |
| `all(iterable)` | **every** element is true | `True` |
| `any(iterable)` | **at least one** element is true | `False` |

```python
print(any([False, False, False, False]))
print(any([False, True, False, False]))
print(all([False, True, False, False]))
print(all([c.islower() for c in "Python"]))
print(any([8 <= int(c) <= 9 for c in str(2**32 - 1)]))
```

```text
False
True
False
False
True
```

`all([c.islower() for c in "Python"])` is `False` because the capital P is not lowercase. `2**32 - 1` is 4294967295, which contains a 9, so the last test is `True`.

> [!note] Slide typo
> The slide prints `all([c.islower() ...]) # True`, but "Python" starts with a capital P, so the actual answer is `False` (the notebook comment says `False`).

Typical pattern: build a list of booleans with a comprehension, then collapse it with `any` or `all`.

## 5. Exercise: the 7-boom list

Generate the list of numbers 1 to 99 where every number that is a multiple of 7 **or contains the digit 7** is replaced by `'Boom'`. The slide shows the expected output but not a solution. This one-liner reproduces it (the slide's `ord`/`chr` puzzle `''.join([chr(ord(x)+1) for x in 'Ptdrshnmr>'])` is a closing joke that decodes to `Questions?`):

```python
boom = ["Boom" if n % 7 == 0 or "7" in str(n) else n for n in range(1, 100)]
print(boom[:16])
print(boom[62:80])
```

```text
[1, 2, 3, 4, 5, 6, 'Boom', 8, 9, 10, 11, 12, 13, 'Boom', 15, 16]
['Boom', 64, 65, 66, 'Boom', 68, 69, 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 'Boom', 80]
```

The 70s are all `'Boom'` (they contain a 7). I checked the full 99-element list against the slide's list and it matches exactly.

> [!note] Reconstructed from the slides
> The solution above is mine, not the lecturer's. The slide gives only the target output.

## 6. Tuples

### What a tuple is

A [[Tuple]] is an **ordered, immutable** collection of objects. It is a basic type like `int` or `str`, and corresponds to the mathematical n-tuple. Create one with comma-separated values; parentheses are optional but preferred.

```python
t = 1, 2, 3
print(t)
print(type(t))
```

```text
(1, 2, 3)
<class 'tuple'>
```

```python
one_two_three = (1, 2, 3)
notes = ("Do", "Re", "Mi", "Fa", "Sol", "La", "Si")
xaxis = (0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0)
```

(The slide asks "why `0.0` and not `0`?": so every element is a float, not a mix of int and floats.)

### Singletons and the empty tuple

It is the **comma**, not the parentheses, that makes a tuple. This is a classic exam trap.

```python
print(1)
print((1))
print((1,))
print((1, 2, ))
print(1 + 2)
print((1 + 2,))
print(3 * (1 + 2))
print(3 * (1 + 2,))
print(())
print(type(()))
```

```text
1
1
(1,)
(1, 2)
3
(3,)
9
(3, 3, 3)
()
<class 'tuple'>
```

| Expression | Value | Type | Why |
| --- | --- | --- | --- |
| `(1)` | `1` | int | parentheses just group |
| `(1,)` | `(1,)` | tuple | trailing comma makes a one-element tuple |
| `3 * (1+2)` | `9` | int | arithmetic |
| `3 * (1+2,)` | `(3, 3, 3)` | tuple | tuple repetition |
| `()` | `()` | tuple | the empty tuple |

### Mixed types, indexing, slicing, operators

Elements can be any type, including tuples. Indexing is 0-based and negatives count from the end.

```python
print((False, 1, 2.0, '3', (1, 1, 1, 1)))
t = ("A", 65)
print(t[0], t[1], t[-1], type(t[0]))
notes = ("Do", "Re", "Mi", "Fa", "Sol", "La", "Si")
print(notes[1:4])
print((1, 2, 3) + (4, 5, 6))
print((1,) * 10)
print((("a", 0) + () + (5/2, True)) * 2)
```

```text
(False, 1, 2.0, '3', (1, 1, 1, 1))
A 65 65 <class 'str'>
('Re', 'Mi', 'Fa')
(1, 2, 3, 4, 5, 6)
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
('a', 0, 2.5, True, 'a', 0, 2.5, True)
```

A slice of a tuple is a **tuple** (answering the slide's question). `t[5]` on a 2-tuple raises `IndexError: tuple index out of range`.

### Built-in functions and operators

`len`, `in`, `not in`, `min`, `max`, `sum` all work:

```python
t = (1, 4, 5)
print(len(t), max(t), min(t), sum(t))
print(max(1, 2, 3), max((1, 2, 3)))
print(1 in t, 2 in t, 1 not in t)
print(not 1 in t, not (1 in t), (not 1) in t)
```

```text
3 5 1 10
3 3
True False False
False False False
```

> [!warning] Precedence
> `not 1 in t` means `not (1 in t)` because `in` binds tighter than `not`. `(not 1) in t` first computes `not 1`, which is `False`, then asks whether `False` is in `(1, 4, 5)`: it is not (`False == 0`, and 0 is absent).

### Comparison

`==` compares element by element and needs the same length. `<` compares **lexicographically** (dictionary order): find the first position where the tuples differ and compare there; if one is a prefix of the other, the shorter is smaller.

| Expression | Result | Reason |
| --- | --- | --- |
| `(1,2,3) == (3,2,1)` | False | order matters |
| `(1,2,3) == (2-1,3-1,4-1)` | True | same values |
| `(1,2) + (3,) == (1,) + (2,3)` | True | both are `(1, 2, 3)` |
| `(1,2,3) < (1,2,4)` | True | first difference at index 2: 3 < 4 |
| `(1,2,3) < (1,2)` | False | `(1,2)` is a prefix, so shorter is smaller |
| `(1,2,1) < (1,2)` | False | same prefix reason |
| `(1,2,3) < (1,3,1)` | True | first difference at index 1: 2 < 3, rest ignored |

### Parallel assignment and swapping

The right side is evaluated **completely** into a tuple before anything is assigned, which makes swaps safe.

```python
x, y, z = 0, 0, 0
(x, y, z) = (0.0, -1.5, 2.7)
print(x, y, z)
x, y = y, z
print(x, y, z)
(x, y, z) = (0.0,) * 3
print(x, y, z)
```

```text
0.0 -1.5 2.7
-1.5 2.7 2.7
0.0 0.0 0.0
```

Trace of `x, y = y, z` starting from `x=0.0, y=-1.5, z=2.7`:

| Step | Right side evaluated | Then assigned |
| --- | --- | --- |
| 1 | `(y, z)` becomes `(-1.5, 2.7)` | nothing yet |
| 2 | | `x = -1.5`, `y = 2.7` |

`z` is untouched, so the result is `-1.5 2.7 2.7`. A classic swap `a, b = b, a` needs no temporary variable.

### Immutability

You cannot assign to an element, but you can **build a new tuple** and rebind the name.

```python
t = ("one", "too", "three", "four")
# t[1] = "two"   -> TypeError: 'tuple' object does not support item assignment
t = t[:1] + ("two",) + t[2:]
print(t)
t += ("five",)
print(t)
```

```text
('one', 'two', 'three', 'four')
('one', 'two', 'three', 'four', 'five')
```

> [!warning] Slide typo
> The slide's last line shows `'too'` after `t += ("five",)`, but `t` was already corrected to `'two'`, so the real output has `'two'` (the notebook output agrees).

`t += ("five",)` does not mutate the old tuple: it creates a new one and rebinds `t`. See [[Immutability]].

### Tuple versus string

| | String | Tuple |
| --- | --- | --- |
| Elements | Unicode characters only | any objects |
| Mutable? | No | No |
| Indexing, slicing, `len`, `in` | yes | yes |
| Own methods | `lower()`, `split()`, ... | few |

Converting works both ways, but the second direction is not what you might expect:

```python
print(tuple("string"))
print("".join(("s", "t")))
print(str(("s", "t")))
```

```text
('s', 't', 'r', 'i', 'n', 'g')
st
('s', 't')
```

`str(some_tuple)` gives the printed form of the tuple (with quotes and commas), not the characters joined. Use `"".join(...)` for that.

## Summary

- `zip` pairs up parallel sequences; `enumerate` gives index and element. Both avoid `range(len(...))`.
- A list comprehension `[expr for x in iterable if cond]` builds a new list; the trailing `if` filters, an `if ... else` at the front transforms. Guard against empty strings before indexing `[0]`.
- `any` is "at least one", `all` is "every one"; `all([])` is True, `any([])` is False.
- Tuples are ordered and immutable. The comma makes the tuple: `(1,)` is a tuple, `(1)` is an int.
- Tuples compare lexicographically, support slicing (result is a tuple), and power parallel assignment and swaps.
- "Changing" a tuple means building a new one.

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_06-Functions]]: functions can return tuples
- [[List Comprehension]], [[Tuple]], [[zip]], [[enumerate]], [[any and all]], [[Immutability]], [[Parallel Assignment]]
