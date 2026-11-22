---
title: "Concert Seats, In-Place Reverse, Binary Search & Star Triangle (2023 Practice Exam)"
type: past-paper
status: worked-solution
exam: "Sample Exam in Computational Thinking and Programming in Python, 2023 practice exam"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - computational-thinking-python
  - python
  - past-paper
  - worked-solution
  - practice-exam
  - nested-lists
  - binary-search
  - trace-table
  - nested-loops
  - code-completion
aliases:
  - Python Practice Exam 2023
  - Sample Exam Python 2023
  - PP04 Python
subject: computational-thinking-python
in_scope: true
---

# Concert Seats, In-Place Reverse, Binary Search & Star Triangle (2023 Practice Exam)

> Part of: [[Computational Thinking & Python]]
> **Sample Exam in Computational Thinking and Programming in Python**, 2023 practice exam. Written by Dr. Revital Hollander and Mr. Yoni Chechick, tutor Or Tzofi (as named on the paper). Five questions, 100 points: Part A writing code (60), Part B tracing code (30), Part C code completion (10).
> Key concepts: [[Nested List]], [[List]], [[Indexing]], [[Slicing]], [[Mutability]], [[For Loop]], [[While Loop]], [[Nested Loop]], [[Function]], [[Return Value]], [[Binary Search]], [[Conditional Statement]]
> Builds on: [[Lec_03-Conditions and While Loops]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]], [[Lec_08-Searching and Sorting]]

> [!info] Sources and answers
> The question text is the **English version** of the practice exam (a Hebrew version also exists). The key is the official solution PDF, which is in Hebrew; its code and trace tables are used here, and its Hebrew question statements match the English ones. Every question is `official`; nothing is AI-solved. I re-ran every official solution with `python3 -I`; the findings are flagged in warnings (Q1 part 3 bounds, Q1 part 4 empty case).
> The course also publishes an **exam cheat sheet** (list, string, dictionary and set method tables). It lists `len`, `sum`, `append`, `reverse` and `reversed`, among others; here `reverse`, `reversed` and slicing are explicitly forbidden in Q2 part 1.

## What this paper tests

| Question | Pts | Core idea | Key concept |
|---|---|---|---|
| Q1 | 30 | A 100 by 100 seating matrix: check a seat, book it, validate input with 5 attempts, average age | [[Nested List]], [[For Loop]], [[Function]] |
| Q2 | 30 | Reverse a list in place with no helpers; sliding window of three strings; sentinel-controlled input loop | [[Mutability]], [[Slicing]], [[While Loop]] |
| Q3 | 15 | Trace a binary-search variant and name what it does | [[Binary Search]] |
| Q4 | 15 | Trace nested loops that print a star triangle | [[Nested Loop]], [[Range]] |
| Q5 | 10 | Fill five blanks in a short pricing program | [[Return Value]], [[Conditional Statement]] |

> [!tip] Intuition
> The paper follows a fixed rhythm: build small helper functions (Q1 parts 1 and 2, Q2 parts 1 and 2), then **call them** from an input script (Q1 part 3, Q2 part 3). Marks reward reusing your own helpers, so write the helpers first and call them.

---

# Part A — Writing code (60 points)

## Q1 — Concert seat matrix (30 points)

**Setup (from the paper).** `seats` is a 100 by 100 matrix (a list of lists), given and ready to use. Every seat `seats[i][j]` holds the buyer's details `[name, age]` (a string and a positive integer). An **available** seat is an **empty list**. Examples:

```python
seats[0][1] = ["Michelle Obama", 59]
seats[35][9] = []
```

### a. Is the seat available? (5 points)

**Question.** Write a function for selling concert tickets which takes the list `seats`, a row number `row` and a column number `col`, and returns `True` if the seat is available and `False` if not. For `row=0, col=1` it returns `False`; for `row=35, col=9` it returns `True`.

> [!success] Official answer
> ```python
> def sell_ticket(seats, row, col):
>     if seats[row][col]:
>         return False
>     else:
>         return True
> ```

An empty list is **falsy** and a non-empty list is **truthy**, so `if seats[row][col]:` is true exactly when the seat is occupied. The function therefore returns the opposite. A shorter equivalent is `return not seats[row][col]`. I tested it on the paper's two examples: it returns `False` for seat (0, 1) and `True` for seat (35, 9).

### b. Book the seat (5 points)

**Question.** Write a function that takes `seats`, `row`, `col`, the buyer's `name` and `age`, and adds the buyer's details to the list at that location. For `row=4, col=15, name="Daniel Craig", age=54` the result is `seats[4][15] = ["Daniel Craig", 54]`.

> [!success] Official answer
> ```python
> def add_data(seats, row, col, name, age):
>     seats[row][col] = [name, age]
> ```

It replaces the empty list with a two-item list. Nothing is returned, because the matrix is changed **in place** (lists are mutable; see [[Lec_04-Lists, For Loops and Ranges]]). Running it gives:

```text
['Daniel Craig', 54]
```

### c. Interactive purchase with 5 attempts (13 points)

**Question.** Ask the user for name, age, row and col of the desired seat. Check the input is valid and print an appropriate message: the age must be positive, and the seat indices must exist and be valid. If the seat is available, add the user's details and print that the ticket was purchased successfully. If the seat is occupied, print that and ask the user to try a different seat. Give the user **5 attempts** (invalid indices count as one attempt). The name and age are entered only on the first attempt.

> [!success] Official answer
> ```python
> name = input("What is your name? ")
> age = int(input("What is your age? "))
>
> if age <= 0:
>     print("Invalid age")
> else:
>     for i in range(5):
>         row = int(input("Enter the row number of your desired seat: "))
>         col = int(input("Enter the column number of your desired seat: "))
>         if row < 0 or row > len(seats) or col < 0 or col > len(seats[0]):
>             print("Invalid indices, please try again")
>             continue
>         if sell_ticket(seats, row, col):
>             add_data(seats, row, col, name, age)
>             print("You have successfully purchased a ticket for Beyoncé's concert!")
>             break
>         else:
>             print("This seat is unavailable, please try again")
> ```
> (The PDF's indentation of the success `print` is garbled in print; it belongs inside the `if sell_ticket(...)` branch, as shown.)

**Structure.**

1. Read `name` and `age` **once**, before the loop. That is how "only on the first attempt" is satisfied.
2. Validate the age. A non-positive age stops everything with an error message.
3. A `for` loop of 5 iterations gives exactly 5 attempts. Each iteration reads a row and a column.
4. Invalid indices: print a message and `continue` to the next attempt, which already counts as one attempt.
5. Valid indices: reuse the helpers. If the seat is free, book it, print success and `break` out of the loop. If not, print the "unavailable" message and the loop moves on.

Trace for the scripted inputs `Ann, 30, 0, 1, 7, 7` (seat (0, 1) is taken, seat (7, 7) is free):

| attempt `i` | `row`, `col` | check | output |
|---|---|---|---|
| 0 | 0, 1 | occupied | `This seat is unavailable, please try again` |
| 1 | 7, 7 | free | success message, then `break` |

> [!warning] Edge case in the official bounds check
> The key tests `row > len(seats)` and `col > len(seats[0])`. Valid indices run from 0 to 99, so row **100** and column **100** pass this test yet do not exist. I ran the official code with row 100 and col 5, and with row 5 and col 100: both crash with `IndexError: list index out of range` instead of printing "Invalid indices". The correct test uses `>=` (or `row not in range(len(seats))`). The question's own examples (rows 0, 4, 35; cols 1, 9, 15) all work, so this only matters at the upper boundary. The official answer is kept as printed.

> [!warning] Edge case: non-numeric input
> `int(input(...))` crashes if the user types something that is not an integer (for example `abc`). The paper only asks to check the age sign and the seat indices, so the key does not handle this; wrapping the call in `try`/`except` would ([[Lec_10-Exceptions and File IO]]).

### d. Average age of buyers (7 points)

**Question.** Write a function that takes `seats` and returns the average age of ticket purchasers. Empty seats are not counted. Call the function and print the average.

> [!success] Official answer
> ```python
> def average_age(seats):
>     sum_ages = 0
>     count = 0
>     for i in range(len(seats)):
>         for j in range(len(seats[0])):
>             if seats[i][j]:
>                 sum_ages += seats[i][j][1]
>                 count += 1
>     return sum_ages / count
>
> print(average_age(seats))
> ```

A **nested loop** visits every cell. For occupied seats, `seats[i][j][1]` is the age (index 1 of `[name, age]`). It keeps a running total and a count, then divides. The count matters: dividing by 10,000 would wrongly include empty seats.

> [!example] Check
> With only Michelle Obama (59) and Daniel Craig (54) seated, the function returns `(59 + 54) / 2`:
> ```text
> 56.5
> ```

> [!warning] Edge case: no buyers
> If every seat is empty, `count` is 0 and the last line raises `ZeroDivisionError` (I ran it on an all-empty 3 by 3 matrix). The task states that some seats are occupied, so the official answer is accepted; a guard `if count == 0` would make it robust.

---

## Q2 — Lists and strings (30 points)

### a. Reverse a list in place (10 points)

**Question.** Write a function that takes a list and reverses its order **in place**. It is forbidden to create another list, use slicing, or use `reverse` or `reversed`. Example: `['c', 'x', 'e', 'b', 'a']` becomes `['a', 'b', 'e', 'x', 'c']`.

> [!success] Official answer
> ```python
> def reverse_list(lst):
>     for i in range(len(lst) // 2):
>         temp = lst[i]
>         lst[i] = lst[-i-1]
>         lst[-i-1] = temp
> ```

The idea is to **swap mirror positions**: first with last, second with second last, and so on, stopping at the middle. `lst[-i-1]` is the element `i+1` from the end. Only half the length of swaps are needed; going the whole way would swap everything back. The middle item of an odd-length list stays where it is.

Trace for the paper's example `['c','x','e','b','a']` (length 5, so `5 // 2 = 2` swaps):

| `i` | swap | list after |
|---|---|---|
| start | | `['c','x','e','b','a']` |
| 0 | `lst[0]` and `lst[-1]` | `['a','x','e','b','c']` |
| 1 | `lst[1]` and `lst[-2]` | `['a','b','e','x','c']` |

```python
letters = ['c','x','e','b','a']
reverse_list(letters)
print(letters)
```

```text
['a', 'b', 'e', 'x', 'c']
```

> [!tip] Intuition
> The key uses a `temp` variable for the swap. Python's parallel assignment (`lst[i], lst[-i-1] = lst[-i-1], lst[i]`) does the same in one line; see [[Parallel Assignment]]. This is also the "reverse a list with a for loop" exercise in [[Lec_07-Dictionaries and Sets]].

### b. Sliding window of three strings (10 points)

**Question.** Write a function that takes a list of strings and returns a **new** list in which every element is the concatenation of three adjacent strings. Assume the length is at least 3. `['a', 'b', 'c', 'd', 'e']` gives `['abc', 'bcd', 'cde']`.

> [!success] Official answer
> ```python
> def triplets(lst):
>     res = []
>     for i in range(len(lst) - 2):
>         res.append(''.join(lst[i:i+3]))
>     return res
> ```

A list of `n` items has `n - 2` windows of three, so the loop runs `range(len(lst) - 2)`. Each window is the slice `lst[i:i+3]`, and `''.join(...)` glues those three strings together with no separator. The result starts as an empty list and is built with `append`.

| `i` | `lst[i:i+3]` | appended |
|---|---|---|
| 0 | `['a','b','c']` | `'abc'` |
| 1 | `['b','c','d']` | `'bcd'` |
| 2 | `['c','d','e']` | `'cde'` |

```text
['abc', 'bcd', 'cde']
```

### c. Read, reverse, and print (10 points)

**Question.** Read strings from the user into a list until the user types `-1` (without adding `-1` to the list). Reverse the list with the function from part a and print the result. Then use the function from part b to print the new strings.

> [!success] Official answer
> ```python
> lst = []
> print("Please enter strings. Write -1 when you wish to stop.")
> string = input("Enter a string: ")
> while string != "-1":
>     lst.append(string)
>     string = input("Enter a string: ")
>
> reverse_list(lst)
> print(lst)
> print(triplets(lst))
> ```

This is the standard **read-ahead** pattern for a sentinel loop: read once before the loop, test, append, then read again at the bottom. Because the sentinel is tested before `append`, `-1` never enters the list. Note `triplets` is called on the already **reversed** list, since `reverse_list` changed `lst` in place.

> [!example] Run with inputs `x`, `y`, `z`, `w`, `-1`
> ```text
> Please enter strings. Write -1 when you wish to stop.
> ['w', 'z', 'y', 'x']
> ['wzy', 'zyx']
> ```

> [!warning] Trap
> The comparison is with the **string** `"-1"`, not the number -1, because `input` always returns a string. Comparing with the integer `-1` would never be true and the loop would never end. Also, `triplets` assumes at least three entries; with fewer, `range(len(lst) - 2)` is empty and it simply returns `[]`.

---

# Part B — Running code and tracing (30 points)

> [!note] Instructions (from the paper)
> Fill in the table with the values of the variables as they are calculated throughout the program, according to the given input. Write the values from the start of the run to the end, with each change on a new line. Consecutive changes of one variable may be abbreviated (for example "1-7"). In the console, write the output the code would print.

## Q3 — Mystery function (15 points)

**Question.** Write a short description of what the function does and the printed output.

```python
def mystery_function(input_list, value):
    lo = 0
    hi = len(input_list)
    while lo < hi:
        mid = (lo + hi) // 2
        if input_list[mid] < value:
            lo = mid + 1
        elif input_list[mid] > value:
            hi = mid
        elif mid > 0 and input_list[mid - 1] == value:
            hi = mid
        else:
            return mid
    return -1

print(mystery_function([1, 2, 2, 2, 3, 4, 5, 5, 20], 2))
```

Trace table with columns `lo`, `mid`, `hi`; there is one table row per loop iteration.

> [!success] Official answer
> Description: *this is a version of binary search that returns the first occurrence of the value, if there are duplicates.*
>
> | `lo` | `mid` | `hi` |
> |---|---|---|
> | 0 | 4 | 9 |
> | 0 | 2 | 4 |
> | 0 | 1 | 2 |
>
> Console output:
> ```text
> 1
> ```

![[PP04_q3_binary_search_trace.png|640]]

The figure shows the three windows over the sorted list: the yellow cell is the middle probe, the blue cells are the live window `lo` up to `hi - 1`.

**Walk-through** (list indices 0 to 8: `1, 2, 2, 2, 3, 4, 5, 5, 20`, value 2):

1. `lo=0, hi=9`, so `mid = 4`. `input_list[4]` is 3, which is greater than 2, so `hi = mid = 4`.
2. `lo=0, hi=4`, so `mid = 2`. `input_list[2]` is 2, equal to the value. The item before it, `input_list[1]`, is also 2, so this is **not** the first occurrence: `hi = mid = 2` (keep searching to the left, **including** `mid`).
3. `lo=0, hi=2`, so `mid = 1`. `input_list[1]` is 2, and `input_list[0]` is 1, not 2, so this is the first 2: `return 1`.

The key difference from a plain binary search is the third branch. A plain version returns at the first equal element it meets (index 2 here); this version keeps shrinking `hi` while the left neighbour is equal, so the answer is always the **leftmost** match. If the loop ends without a match it returns -1. I ran the code to confirm both the trace and the output: `1`. Searching for 7 returns -1 and for 5 returns 6 (first of the two 5s).

> [!tip] Intuition
> Binary search needs a **sorted** list; each step halves the window, so it takes about `log2 n` steps (see [[Binary Search]] and [[Time Complexity]] in [[Lec_08-Searching and Sorting]]). The `elif mid > 0 and ...` guard prevents reading `input_list[-1]` (the last element) when `mid` is 0.

## Q4 — Star triangle (15 points)

**Question.** Run the code and fill the table with the values of `i`, `j`, `k`, then write the console output.

```python
for i in range(1, 5):
    for j in range(i, 4):
        print(' ', end='')
    for k in range(2*i-1):
        print('*', end='')
    print('')
```

> [!success] Official answer
> | `i` | `j` | `k` |
> |---|---|---|
> | 1 | 1-3 | 0 |
> | 2 | 2-3 | 0-2 |
> | 3 | 3 | 0-4 |
> | 4 | - | 0-6 |
>
> Console output:
> ```text
>    *
>   ***
>  *****
> *******
> ```

**Reading the loops.** For each row `i`, the first inner loop prints spaces and the second prints stars; `print('')` ends the line.

- Spaces: `range(i, 4)` yields `4 - i` values, so row 1 has 3 spaces, row 2 has 2, row 3 has 1 and row 4 has none. The row indents shrink as `i` grows.
- Stars: `range(2*i-1)` yields `2*i - 1` values, giving 1, 3, 5 and 7 stars (the odd numbers). `k` always starts at 0, which is why the `k` column restarts each row.

| `i` | spaces (`4 - i`) | stars (`2i - 1`) | row printed |
|---|---|---|---|
| 1 | 3 | 1 | `   *` |
| 2 | 2 | 3 | `  ***` |
| 3 | 1 | 5 | ` *****` |
| 4 | 0 | 7 | `*******` |

For `i = 4` the space loop `range(4, 4)` is empty, so `j` takes no values in that row (the dash in the table). For the other rows, `j` runs from `i` up to 3, which gives 1-3, 2-3 and 3.

> [!tip] Intuition
> Whenever a pattern grows by one on each row, work out "how many spaces, how many stars" as a formula of the row number first. Nested loops multiply iterations; see [[Nested Loop]] and [[Lec_04-Lists, For Loops and Ranges]].

---

# Part C — Code completion (10 points)

## Q5 — Phil Dunphy's valuation program (10 points)

**Question.** Phil Dunphy is a realtor in Los Angeles who wrote real estate valuation software based on the number of bedrooms, the number of bathrooms and the average price of 10 similar homes sold nearby. If the house has **more than 3 bedrooms or more than 2 bathrooms**, it is a luxury house that sells for **one million dollars more** than the area average. If the house is small, with **one bedroom and fewer than 2 bathrooms**, its price is **half a million dollars less** than the area average. In any other case, the price equals the average. Fill in the code at the places marked (1) to (5).

```python
def average(similar_listings):
    return sum(similar_listings) / (1)_____________________

def evaluate(bedrooms, bathrooms, average_price):
    if bedrooms > 3 or bathrooms > 2:
        return (2)_______________________________
    elif bedrooms == 1 and bathrooms < 2:
        return average_price - 500000
    else:
        return average_price

print("This is Phil Dunphy's real estate evaluation program")
bedrooms = int(input("Please enter the number of bedrooms in the house:"))
bathrooms = int(input("Please enter the number of bathrooms:"))

similar_listings = []
print("Please enter the prices of 10 similar listings in the area:")
for i in range(10):
    (3)__________________________________________

price = (4)_____________________________________________
print("The estimated price of this listing is:", (5)____________________)
```

> [!success] Official answer
>
> | Blank | Answer |
> |---|---|
> | (1) | `len(similar_listings)` |
> | (2) | `average_price + 1000000` |
> | (3) | `similar_listings.append(int(input()))` |
> | (4) | `evaluate(bedrooms, bathrooms, average(similar_listings))` |
> | (5) | `price` |

**Why each answer.**

1. An average is the sum divided by the **count**, and `len` gives the count. Writing `10` also works for this question, but `len` is more general.
2. The "luxury" branch adds one million to the area average that was passed in as `average_price`.
3. `input()` returns a string, so wrap it in `int(...)` to get a number (the later `sum` needs numbers), then `append` it to the list, 10 times.
4. Compute the area average with the helper `average`, then pass it to `evaluate` together with the two room counts. The order of the arguments must match the definition: bedrooms, bathrooms, average price.
5. Print the variable computed on the line above.

> [!example] Sanity checks
> With ten listings of 300000 each (average 300000):
> - 4 bedrooms, 1 bathroom gives `1300000.0` (luxury branch).
> - 1 bedroom, 1 bathroom with average 500000 gives `0` (small branch).
> - 2 bedrooms, 2 bathrooms with average 500000 gives `500000` (default branch).

> [!warning] Trap
> The conditions are checked **in order**. A house with 1 bedroom and 3 bathrooms is "luxury" (more than 2 bathrooms) even though it has 1 bedroom, because the first `if` catches it before the small-house `elif`. And `bathrooms < 2` means at most 1 bathroom, so 1 bedroom with 2 bathrooms falls to the default.

---

## Recap table

| Q | Pts | Tool | One-line answer |
|---|---|---|---|
| 1a | 5 | truthiness of a list | `return` the opposite of `bool(seats[row][col])` |
| 1b | 5 | assign into a nested list | `seats[row][col] = [name, age]` |
| 1c | 13 | `for` 5 attempts, `continue`, `break` | Read name and age once; validate; loop 5 times using the helpers |
| 1d | 7 | nested loop, sum and count | Sum ages of non-empty seats and divide by the count |
| 2a | 10 | swap mirror pairs | Swap `lst[i]` with `lst[-i-1]` for `i` in half the length |
| 2b | 10 | slice and `join` | `''.join(lst[i:i+3])` for `i` in `range(len(lst) - 2)` |
| 2c | 10 | sentinel `while` loop | Read, test `!= "-1"`, append, read again; reverse; print both |
| 3 | 15 | binary search, first match | Leftmost-occurrence binary search; table 4/2/1; prints `1` |
| 4 | 15 | nested loops | Triangle of 1, 3, 5, 7 stars, indented 3, 2, 1, 0 |
| 5 | 10 | helper functions, `input` | `len(...)`, `+ 1000000`, `append(int(input()))`, `evaluate(...)`, `price` |

## Related notes

- [[Lec_03-Conditions and While Loops]] for the sentinel loop and nested conditions.
- [[Lec_04-Lists, For Loops and Ranges]] for nested lists, slicing, `range` and nested loops.
- [[Lec_06-Functions]] for helper functions and return values.
- [[Lec_08-Searching and Sorting]] for binary search.
- [[Computational Thinking & Python]] (course hub).
