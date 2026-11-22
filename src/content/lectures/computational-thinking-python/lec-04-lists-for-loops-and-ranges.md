---
title: "Lec 04: Lists, For Loops and Ranges"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 4
tags:
  - computational-thinking-python
  - lecture
  - python
  - lists
  - for-loops
  - range
  - nested-loops
  - mutability
subject: computational-thinking-python
in_scope: true
---

# Lecture 4: Lists, For Loops and Ranges

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[List]], [[Mutability]], [[Indexing]], [[Slicing]], [[Nested List]], [[For Loop]], [[Range]], [[Nested Loop]], [[Break and Continue]], [[While Loop]]

This lecture opens with a short recap of [[While Loop]] exercises (primality test, multiplication table, ASCII art), then introduces the **list**, Python's main mutable sequence, and the **for loop**, the natural way to walk over a sequence. It finishes with `range`, parallel iteration (`zip`, `enumerate`) and nested loops.

> [!note] Sources
> The slides are code-only. The companion notebook (Lecture 4 Notebook) supplies the printed outputs, plus `zip`, `enumerate`, a standard deviation example and a second `for` solution. Outputs in `text` blocks come from the notebook or were re-run for this note.

---

## 1. Recap: while-loop exercises

### 1.1 Testing if a number is prime

The slide checks every divisor `m` from 2 up to `n - 1`. If any `m` divides `n`, the flag flips to `False`.

```python
n = 13
n_is_prime = True
m = 2
while m < n:
    if n % m == 0:
        n_is_prime = False
    m += 1
print(n, "is prime" if n_is_prime else "is not prime")
```

```text
13 is prime
```

The slide asks "Can we improve this code?" It does not give the answer. Two natural improvements (not on the slides):

> [!note] Reconstructed from the slides
> - **Stop early.** Once a divisor is found the answer is settled, so the loop can end instead of testing the remaining `m`.
> - **Stop at the square root.** If `n` has a divisor larger than its square root, it also has a smaller one, so testing `m * m <= n` is enough.

```python
n = 12
is_prime = n > 1
m = 2
while m * m <= n and is_prime:
    if n % m == 0:
        is_prime = False
    m += 1
print(n, "is prime" if is_prime else "is not prime")
```

```text
12 is not prime
```

### 1.2 Two warm-up tasks (posed, solved later)

- **10x10 multiplication table**: ten rows and ten columns of products. The solution (nested loops) comes at the end of this lecture.
- **ASCII art**: print a growing triangle of stars (`*`, `**`, `***`, ...). A for loop version appears in section 8.

---

## 2. Lists

A [[List]] is an **ordered sequence** of elements. It is **mutable** (can be changed after creation) and written with square brackets. Elements can have mixed types.

```python
list1 = [1, 2, 3, 4, 5]
list2 = ["a", "b", "c", "d"]
list3 = ['physics', 'chemistry', 1997, 2000]
print(list1)
```

```text
[1, 2, 3, 4, 5]
```

### 2.1 Indexing

Elements are reached by position with [[Indexing]]. Indices start at **0**, as with strings. Direct access by index is fast ("random access"). The slides note lists are like arrays in other languages but a little less efficient, which only matters in heavy computation.

```python
mylist = [2, 3, 5, 7, 11]
print(mylist[0])
print(mylist[4])
```

```text
2
11
```

### 2.2 Lists are sequences

Lists share the toolkit that strings have:

| Feature | Example |
| ------- | ------- |
| Index and [[Slicing]] with `[]` | `mylist[1:3]` |
| Built-in functions | `len`, `min`, `max`, `sum` |
| Operators | `+` (concatenate), `*` (repeat), `in`, `not in` |
| Empty list | `[]` |

```python
list1 = [1, 2, 3]
list2 = ["a", "b", "c"]
list3 = list1 + list2
print(list3)
print(len(list3))
print("a" in list3 and 1 in list3)
print(type(list3), type(list3[0]), type(list3[3]))
print(list1 == list2)
```

```text
[1, 2, 3, 'a', 'b', 'c']
6
True
<class 'list'> <class 'int'> <class 'str'>
False
```

---

## 3. Lists are mutable

[[Mutability]] means the list object itself can be changed in place.

### 3.1 Changing items and slices

```python
mylist = ["one", "too", "three", "four"]
mylist[1] = "two"
print(mylist)
```

```text
['one', 'two', 'three', 'four']
```

Assigning to a **slice** replaces that stretch of the list. The replacement does not have to be the same length, so the list can grow or shrink. Assigning an empty list deletes the slice.

```python
mylist = [1, 2, 3, 4]
mylist[0:2] = [2, 1]
print(mylist)

mylist[1:3] = [5, 6, 7]
print(mylist)

mylist = [1, 2, 3, 4]
mylist[1:3] = []
print(mylist)
```

```text
[2, 1, 3, 4]
[2, 5, 6, 7, 4]
[1, 4]
```

### 3.2 Adding items: append, extend, insert

| Method | What it does |
| ------ | ------------ |
| `append(x)` | Adds `x` as **one** new last element |
| `extend(seq)` | Adds **each element** of `seq` to the end |
| `insert(i, x)` | Inserts `x` **before** index `i` |

```python
mylist = [1, 2, 3, 4]
mylist.append(5)
mylist.extend([6, 7, 8])
print(mylist)
```

```text
[1, 2, 3, 4, 5, 6, 7, 8]
```

> [!warning] append vs extend with a list argument
> `append` adds its argument as a single element, so appending a list creates a **nested list**. `extend` unpacks it.
> ```python
> mylist = [1, 2, 3]
> mylist.append([4, 5])
> print(mylist)
> ```
> ```text
> [1, 2, 3, [4, 5]]
> ```

`insert` places the new item *before* the given index. Note that index `-1` is the last element, so `insert(-1, x)` puts `x` **second to last**, not last. To add at the end use `append`.

```python
mylist = [1, 2, 3, 4]
mylist.insert(0, 0)
print(mylist)
mylist.insert(-1, 5)
print(mylist)
```

```text
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 5, 4]
```

### 3.3 Removing items: pop

`pop(i)` removes **and returns** the item at index `i`. With no argument it removes and returns the last item.

```python
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(mylist.pop())
print(mylist.pop(1))
print(mylist)
```

```text
9
2
[1, 3, 4, 5, 6, 7, 8]
```

Other methods the lecture tells you to look up: `remove()`, `clear()`, `reverse()`.

### 3.4 Sorting: `sorted` vs `.sort()`

| | `sorted(lst)` | `lst.sort()` |
| --- | --- | --- |
| Kind | Built-in **function** (takes any iterable) | **Method** of the list class |
| Original list | Unchanged | Sorted **in place** |
| Returns | A new sorted list | `None` |

```python
mylist = [5, 2, 3, 1, 4]
sorted_list = sorted(mylist)
print(sorted_list)
print(mylist)
mylist.sort()
print(mylist)
```

```text
[1, 2, 3, 4, 5]
[5, 2, 3, 1, 4]
[1, 2, 3, 4, 5]
```

> [!example] Quiz from the slides: is `sorted(L2 + L1) == sorted(L2) + sorted(L1)`?
> The answer is **False** in general. The left side sorts everything together. The right side sorts each list separately and then glues them, so the order between the two blocks is not sorted.
> ```python
> L1 = [5, 1, 4, 3, 2]
> L2 = [7, 6, 8]
> print(sorted(L2 + L1) == sorted(L2) + sorted(L1))
> print(sorted(L2 + L1))
> print(sorted(L2) + sorted(L1))
> ```
> ```text
> False
> [1, 2, 3, 4, 5, 6, 7, 8]
> [6, 7, 8, 1, 2, 3, 4, 5]
> ```

### 3.5 Strings and lists

The slides list these conversions for self-study: `list(str)`, `str.split()` and `str.join(list)`.

```python
word = "a,b,c"
parts = word.split(",")
print(parts)
print("-".join(parts))
print(list("abc"))
```

```text
['a', 'b', 'c']
a-b-c
['a', 'b', 'c']
```

---

## 4. Nested lists

A list can contain lists. Chain indices from the outside in: `L[outer][inner]`.

```python
nested_list = [[1, 2, 3], [4, 5, 6]]
print(nested_list[0])
print(nested_list[0][0])
print(sum(nested_list[1]))
nested_list[0][1] = 7
print(nested_list)
```

```text
[1, 2, 3]
1
15
[[1, 7, 3], [4, 5, 6]]
```

Deeper nesting works the same way:

```python
L = ['a', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
print(L[2])
print(L[2][2])
print(L[2][2][0])
```

```text
['cc', 'dd', ['eee', 'fff']]
['eee', 'fff']
eee
```

| Expression | Evaluates to | Reason |
| ---------- | ------------ | ------ |
| `L[2]` | `['cc', 'dd', ['eee', 'fff']]` | Third element of `L` |
| `L[2][2]` | `['eee', 'fff']` | Third element of that inner list |
| `L[2][2][0]` | `'eee'` | First element of the innermost list |

---

## 5. Statistics on a list

### 5.1 Mean and standard deviation

The mean is `sum(grades) / len(grades)`. The notebook also computes the sample standard deviation with a while loop, dividing by `n - 1`.

```python
grades = [98.8, 100, 69, 68, 84, 95.8, 91, 91, 67, 97, 92.8, 79, 100, 91, 73, 77, 83, 55, 100,
          96, 94, 100, 100, 79, 91, 65, 86, 79.6, 58.8, 100, 76, 90]

n = len(grades)
mean = sum(grades) / n
print("n =", n)
print("mean =", mean)

i = 0
sum_of_squares = 0.0
while i < len(grades):
    sum_of_squares += (grades[i] - mean) ** 2
    i += 1

std = (sum_of_squares / (n - 1)) ** 0.5
print("std =", std)
```

```text
n = 32
mean = 85.24375
std = 13.298822104037587
```

### 5.2 Median

The median is the middle value separating the higher half from the lower half. Pseudo code from the slides:

1. Sort the numbers ascending.
2. If the count is **odd**, the median is the middle value.
3. If the count is **even**, it is the average of the two middle values.

```python
n = len(grades)
sorted_grades = sorted(grades)
mid_pos = n // 2
if n % 2 == 1:
    median = sorted_grades[mid_pos]
else:
    median = (sorted_grades[mid_pos] + sorted_grades[mid_pos - 1]) / 2
print("median =", median)
```

```text
median = 90.5
```

> [!tip] Why `sorted` and not `.sort()`
> Using `sorted(grades)` leaves the original `grades` list in its original order, which matters if you need it again later.

For `n = 32` (even), `mid_pos = 16`, so the median averages positions 15 and 16 (0-based) of the sorted list.

---

## 6. For loops

### 6.1 Why for beats while for sequences

Walking over a list with `while` needs a manual index. The slide shows the classic bug: starting at `i = 1` with `while i <= len(fruits)` never changes `i` and also overruns the end of the list.

```python
fruits = ["Apple", "Banana", "Cherry"]
i = 0
while i < len(fruits):
    print(fruits[i])
    i += 1
```

```text
Apple
Banana
Cherry
```

> [!warning] What the broken while version forgot
> - Start at index **0**, not 1.
> - Use `<` not `<=` against `len`, because the last valid index is `len - 1`.
> - **Increment** `i` inside the loop, or it never ends (an infinite loop).

The [[For Loop]] does all of that automatically:

```python
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)
```

```text
Apple
Banana
Cherry
```

### 6.2 Syntax and how it runs

```python
for element in iterable:
    statement1
    statement2
```

- It runs over every element of an **iterable** (list, string, range, ...).
- Iteration 0 assigns `element = iterable[0]` and runs the body, iteration 1 assigns `element = iterable[1]`, and so on.
- The variable `element` is **created by the loop**. There is no separate initialisation or increment.

> [!info] The loop variable survives the loop
> After the loop ends, the variable keeps its last value (not on the slides; checked by running it).
> ```python
> for i in range(3):
>     pass
> print(i)
> ```
> ```text
> 2
> ```

### 6.3 break and continue

[[Break and Continue]] work as in while loops. `break` leaves the loop immediately. `continue` skips the rest of this iteration and goes to the next one. The slides ask what each snippet prints, so here is a comparison (outputs from the notebook):

| Snippet | Prints |
| ------- | ------ |
| `print(x)` then `if x == "banana": break` | `apple`, `banana` |
| `if x == "banana": break` then `print(x)` | `apple` |
| `if x == "banana": continue` then `print(x)` | `apple`, `cherry` |

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
    if x == "banana":
        break
```

```text
apple
banana
```

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        break
    print(x)
```

```text
apple
```

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)
```

```text
apple
cherry
```

> [!warning] The notebook uses pass, not continue
> The notebook's third example uses `pass` (a do-nothing statement) instead of `continue`, so it prints all three fruits. `pass` does not skip anything. Only `continue` skips the rest of the iteration.

### 6.4 Looping over a string

Iterating over a string visits its **characters**.

```python
name = "Kobe"
for letter in name:
    print("Give me", letter)
print("What did we get?", name)
```

```text
Give me K
Give me o
Give me b
Give me e
What did we get? Kobe
```

---

## 7. Exercises from the lecture

### 7.1 Exercise 1: lowercase every surname

Build a new list with every item lower-cased, once with `while` and once with `for`.

```python
list_of_surnames = ['Cohen', 'Levy', 'Mizrachi', 'Peretz', 'Biton', 'Dohan', 'Avraham', 'Friedman']

# A. while loop
list_of_lowercase_surnames = []
i = 0
while i < len(list_of_surnames):
    list_of_lowercase_surnames.append(list_of_surnames[i].lower())
    i += 1
print(list_of_lowercase_surnames)

# B. for loop
list_of_lowercase_surnames = []
for surname in list_of_surnames:
    list_of_lowercase_surnames.append(surname.lower())
print(list_of_lowercase_surnames)
```

```text
['cohen', 'levy', 'mizrachi', 'peretz', 'biton', 'dohan', 'avraham', 'friedman']
['cohen', 'levy', 'mizrachi', 'peretz', 'biton', 'dohan', 'avraham', 'friedman']
```

The `for` version is shorter and cannot go wrong with the index.

### 7.2 Exercise 2: look up a student by ID

Given a nested list where each record is `[id, name, [grades]]`, find the record for an input ID and print the name and average grade. A student with no grades must not cause a division by zero. (The names below are placeholder sample data.)

```python
students = [
    ["123", "Student A", [58, 68, 74]],
    ["925", "Student B", []],
    ["456", "Student C", [68, 72, 100]],
]

student_id = "123"   # in the notebook this comes from input()

for student in students:
    if student[0] == student_id:
        name = student[1]
        grades = student[2]
        if len(grades) == 0:
            print(name, "No grades")
        else:
            print(name, sum(grades) / len(grades))
```

```text
Student A 66.66666666666667
```

The notebook reads the ID with `input()` and shows the output `John Smith 66.66666666666667` for ID `123`. The sum of 58, 68, 74 is 200, and 200 / 3 is the printed average.

> [!tip] Trace of the lookup
> | Iteration | `student[0]` | Equal to the ID? | Action |
> | --------- | ------------ | ---------------- | ------ |
> | 1 | `"123"` | yes | Print name and mean |
> | 2 | `"925"` | no | Skip |
> | 3 | `"456"` | no | Skip |
>
> The loop keeps scanning after a match. Since IDs are unique this wastes work but is correct. (Returning from a function on a match comes later in the course.)

---

## 8. range

[[Range]] produces a sequence of integers on demand. It is the standard partner of `for` when you need a count.

| Form | Produces | Example |
| ---- | -------- | ------- |
| `range(to)` | `0, 1, ..., to - 1` | `list(range(10))` gives `[0, 1, ..., 9]` |
| `range(from, to)` | `from` up to but **excluding** `to` | `list(range(2, 10))` gives `[2, ..., 9]` |
| `range(from, to, step)` | `from, from+step, from+2*step, ...` until `to` is reached, excluding `to` | `list(range(0, 10, 2))` |

```python
print(list(range(2, 10)))
print(list(range(-2, 2)))
print(list(range(0, 10, 2)))
print(list(range(10, 0, -2)))
print(list(range(1, 10, 4)))
print(list(range(0, 10, -1)))
```

```text
[2, 3, 4, 5, 6, 7, 8, 9]
[-2, -1, 0, 1]
[0, 2, 4, 6, 8]
[10, 8, 6, 4, 2]
[1, 5, 9]
[]
```

> [!warning] Edge cases
> - The **end is exclusive**: `range(1, 11)` is 1 to 10.
> - A step that points away from the end gives an **empty** range: `range(0, 10, -1)` is `[]`.
> - A step of **0** is an error: `range(0, 10, 0)` raises `ValueError: range() arg 3 must not be zero`.

### 8.1 range is lazy, not a list

`type(range(3))` is `<class 'range'>`. It generates elements **when asked**, not in advance, so even `range(1000000)` costs almost nothing, and a loop can `break` early without ever building a million numbers.

```python
big_range = range(1000000)
for i in big_range:
    if i < 5:
        print(i)
    else:
        break
```

```text
0
1
2
3
4
```

Wrap it in `list(...)` only when you actually need a list (for example to print it).

### 8.2 Loops with range

```python
for n in range(1, 4):
    print(str(n) + "^2", "=", n**2)
```

```text
1^2 = 1
2^2 = 4
3^2 = 9
```

The notebook runs this up to 10 (squares) and for powers of 2 from `2^0` to `2^9` (`1, 2, 4, ..., 512`).

### 8.3 Sum of 1 to 100: three ways

```python
# while
n = 100
total = 0
i = 1
while i <= n:
    total += i
    i += 1
print(total)

# for + range
total = 0
for i in range(1, n + 1):
    total += i
print(total)

# range + sum
print(sum(range(1, n + 1)))
```

```text
5050
5050
5050
```

### 8.4 Factorial

```python
n = 20
fact = 1
for i in range(1, n + 1):
    fact = fact * i
print(str(n) + "! =", fact)
```

```text
20! = 2432902008176640000
```

Start the accumulator at **1** (the identity for multiplication), not 0.

### 8.5 Unique elements, keeping first-seen order

```python
numbers = [1, 4, 5, 8, 3, 5, 7, 1, 2]
uniques = []
for x in numbers:
    if x not in uniques:
        uniques.append(x)
print(uniques)
```

```text
[1, 4, 5, 8, 3, 7, 2]
```

> [!warning] Do not name a variable `list`
> The slide calls the input `list`, which **shadows** the built-in `list` function for the rest of the program. The note above uses `numbers` instead. The slides say a simpler and more efficient approach comes later in the course.

---

## 9. For or while?

| | `for` | `while` |
| --- | --- | --- |
| Best when | Number of iterations is **known** or you walk a sequence | Number of iterations is **unknown** |
| Loop variable | Created and advanced automatically | You initialise and advance it yourself |
| Stop rule | End of the iterable (plus `break`) | Any **stop condition** |

In most cases `for` is more natural. Use `while` when you loop until some condition becomes false.

---

## 10. Two parallel lists

Three ways to pair `fruits[i]` with `calories[i]`. First, indexing with `range(len(...))`, after checking the lengths match:

```python
fruits = ["Banana", "Mango", "Pineapple", "Strawberries", "Mellon"]
calories = [89, 60, 50, 32, 34]   # per 100 grams

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

The notebook then shows two cleaner versions that print the same output:

```python
# zip: walk both lists together
for fruit, calorie in zip(fruits, calories):
    print("There are ", calorie, " calories in 100 grams of", fruit)

# enumerate: get the index and the item
for i, fruit in enumerate(fruits):
    print("There are ", calories[i], " calories in 100 grams of", fruit)
```

| Tool | Gives you | Use when |
| ---- | --------- | -------- |
| `range(len(a))` | Only the index | You need the index and are fine writing `a[i]` |
| `zip(a, b)` | One item from each list at a time | You walk several lists in step |
| `enumerate(a)` | `(index, item)` pairs | You need both the index and the item |

> [!note] zip stops at the shortest list
> Checked by running it (not on the slides): `list(zip([1, 2, 3], ["a", "b"]))` gives `[(1, 'a'), (2, 'b')]`. Extra items in the longer list are silently dropped, which is why the length check above is useful.

---

## 11. Nested for loops

A [[Nested Loop]] puts one loop inside another. The inner loop runs **completely** for each iteration of the outer one.

The slide asks to spot the difference between these two programs. With `n = 100`:

| | Two loops one after another | Loop inside a loop |
| --- | --- | --- |
| Structure | `for i ...: counter += 1` then `for j ...: counter += 1` | `for i ...: for j ...: counter += 1` |
| Steps | n + n | n x n |
| Final `counter` | **200** | **10000** |

```python
n = 100
counter = 0
for i in range(n):
    counter += 1
for j in range(n):
    counter += 1
print(counter)

counter = 0
for i in range(n):
    for j in range(n):
        counter += 1
print(counter)
```

```text
200
10000
```

![[Lec04_nested_loop_steps.png]]

> [!tip] Reading the figure
> Left: two separate loops of 4 add up to 8 steps. Right: nested loops of 4 give 16 steps, visited row by row. The **inner** variable `j` changes fastest, and the outer `i` only changes after `j` has finished its whole run.

### 11.1 All couples

```python
n = 3
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(i, j)
```

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

The slide uses `n = 10`, which prints 100 pairs from `1 1` to `10 10`.

### 11.2 The 10x10 multiplication table (the warm-up solved)

The outer loop is the row, the inner loop is the column, and each cell is `i * j`. Two details make it a table: `end="\t"` keeps the print on the same line (separated by a tab), and an empty `print()` after the inner loop ends the row.

```python
for i in range(1, 11):
    for j in range(1, 11):
        print(i * j, end="\t")
    print()
```

```text
1	2	3	4	5	6	7	8	9	10	
2	4	6	8	10	12	14	16	18	20	
3	6	9	12	15	18	21	24	27	30	
4	8	12	16	20	24	28	32	36	40	
5	10	15	20	25	30	35	40	45	50	
6	12	18	24	30	36	42	48	54	60	
7	14	21	28	35	42	49	56	63	70	
8	16	24	32	40	48	56	64	72	80	
9	18	27	36	45	54	63	72	81	90	
10	20	30	40	50	60	70	80	90	100	
```

### 11.3 ASCII art triangle (the other warm-up)

> [!note] Reconstructed from the slides
> The slides only show the target pattern. This solution is not from the lecture. String repetition replaces the inner loop.

```python
for row in range(1, 6):
    print("*" * row)
```

```text
*
**
***
****
*****
```

An explicit inner loop gives the same output:

```python
for row in range(1, 6):
    line = ""
    for col in range(row):
        line += "*"
    print(line)
```

---

## Summary

- A **list** is an ordered, **mutable** sequence with 0-based indexing; it supports `len`, `min`, `max`, `sum`, `+`, `*`, `in` and slicing.
- Slice assignment can replace, grow or delete part of a list. `append` adds one element, `extend` adds many, `insert(i, x)` goes before index `i`, `pop` removes and returns.
- `sorted(lst)` returns a new sorted list; `lst.sort()` sorts in place and returns `None`.
- **Nested lists** are indexed outside-in: `L[2][2][0]`.
- Mean is `sum / len`; median needs a sorted copy and an odd/even case.
- A **for loop** walks any iterable and creates and advances its own variable; `break` exits, `continue` skips to the next item.
- `range(from, to, step)` excludes `to`, is lazy, and a zero step is an error.
- Use `for` for known counts or sequences, `while` for unknown counts or stop conditions.
- `zip` pairs lists, `enumerate` gives index and item.
- Nested loops multiply iteration counts (n x n), while sequential loops add (n + n).

## Related notes

- [[Computational Thinking & Python]]
- [[While Loop]]
- [[List]]
- [[For Loop]]
- [[Range]]
- [[Nested Loop]]
