---
title: "Quick Self-Test"
subject: computational-thinking-python
type: self-test
description: "22 exam-style questions in the order of the course: predict the output, write the function, fill the trace table, complete the class, then reveal the answer. Eight are quick multiple-choice checks. Every answer was run in Python."
course: Computational Thinking & Python
semester: 1
year: 1
order: 6
tags:
  - computational-thinking-python
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Division operators"
    text: |
      What does this print?

      ```python
      print(7 // 2, 7 % 2, 7 / 2, -7 // 2)
      ```
    solution: |
      ```text
      3 1 3.5 -4
      ```

      `//` is floor division (rounds **down**, so `-7 // 2` is −4, not −3), `%` the remainder, `/` always gives a float.
  - id: "2"
    title: "2 · What input() returns"
    text: |
      The user types `5` at `x = input("n: ")`. What does `print(x * 2)` show?
    options:
      - label: a
        text: |
          `10`
        why: |
          That needs `int(x) * 2`.
      - label: b
        text: |
          `55`
        correct: true
        why: |
          `input` returns the **string** `"5"`, and a string times 2 repeats it.
      - label: c
        text: |
          A `TypeError`
        why: |
          `str * int` is allowed (repetition); `str + int` is the one that fails.
      - label: d
        text: |
          `5 5`
        why: |
          Repetition joins the copies with nothing between them.
    solution: |
      Wrap every numeric input: `n = int(input("n: "))`. Forgetting it is the most common Part A slip, and `range(n)` then raises a `TypeError`.
  - id: "3"
    title: "3 · Write a counting function"
    text: |
      Write `count_vowels(s)` that **returns** the number of vowels (a, e, i, o, u, upper or lower case) in the string `s`. Then print the count for `"Programming in Python"`.
    solution: |
      ```python
      def count_vowels(s):
          count = 0
          for ch in s.lower():
              if ch in "aeiou":
                  count += 1
          return count

      print(count_vowels("Programming in Python"))
      ```

      Prints **5** (o, a, i, i, o). Accumulator before the loop, `return` after it, the caller prints. `ch in "aeiou"` is a membership test on a string.
  - id: "4"
    title: "4 · range with a step"
    text: |
      What does `list(range(2, 10, 3))` give?
    options:
      - label: a
        text: |
          `[2, 5, 8]`
        correct: true
        why: |
          Start at 2, add 3 while below 10: 2, 5, 8 (11 would pass the stop).
      - label: b
        text: |
          `[2, 5, 8, 11]`
        why: |
          The stop value is never reached or passed.
      - label: c
        text: |
          `[3, 6, 9]`
        why: |
          The first argument is the start, not the step.
      - label: d
        text: |
          `[2, 3, 4, 5, 6, 7, 8, 9]`
        why: |
          That ignores the step of 3.
    solution: |
      `range(start, stop, step)`: stop excluded. `range(5, 0, -2)` counts down: 5, 3, 1.
  - id: "5"
    title: "5 · Trace a loop with continue"
    text: |
      Fill a trace table (columns `i`, `total`) and give the output.

      ```python
      total = 0
      for i in range(1, 6):
          if i % 2 == 0:
              continue
          total += i
      print(total)
      ```
    solution: |
      | `i` | `total` |
      |---|---|
      | | 0 |
      | 1 | 1 |
      | 2 | (skipped) |
      | 3 | 4 |
      | 4 | (skipped) |
      | 5 | 9 |

      Output: **9**. `continue` jumps to the next pass, so even numbers are never added: it sums the odd numbers from 1 to 5.
  - id: "6"
    title: "6 · sort() and its return value"
    text: |
      What is printed?

      ```python
      lst = [3, 1, 2]
      lst = lst.sort()
      print(lst)
      ```
    options:
      - label: a
        text: |
          `[1, 2, 3]`
        why: |
          That's what `lst.sort()` on its own line, or `lst = sorted(lst)`, would give.
      - label: b
        text: |
          `[3, 1, 2]`
        why: |
          The list is sorted in place; the problem is what gets assigned back.
      - label: c
        text: |
          `None`
        correct: true
        why: |
          `.sort()` sorts in place and **returns `None`**, and that `None` is assigned to `lst`.
      - label: d
        text: |
          An `AttributeError`
        why: |
          That would come on the **next** list method call on `lst`, not on `print`.
    solution: |
      `sorted(x)` returns a new list; `x.sort()` changes `x` and returns nothing.
  - id: "7"
    title: "7 · Aliasing and copies"
    text: |
      What does the last line print, and why?

      ```python
      a = [1, 2]
      b = a
      c = a[:]
      b.append(3)
      c.append(4)
      print(a, b, c)
      ```
    solution: |
      ```text
      [1, 2, 3] [1, 2, 3] [1, 2, 4]
      ```

      `b = a` makes a second name for **the same list**, so appending through `b` changes `a`. `a[:]` is a slice, which is always a **copy**, so `c` is independent. The 2022 Moed B paper asked exactly this about a function working on a slice.
  - id: "8"
    title: "8 · Digits of a number"
    text: |
      Write `digit_diff(n)` that returns the absolute difference between the sum of the **odd** digits and the sum of the **even** digits of a positive integer `n`. For `12345`: odd digits 1 + 3 + 5 = 9, even 2 + 4 = 6, so 3. (2022 Moed A.)
    solution: |
      ```python
      def digit_diff(n):
          odd_sum = 0
          even_sum = 0
          for ch in str(n):
              d = int(ch)
              if d % 2 == 0:
                  even_sum += d
              else:
                  odd_sum += d
          return abs(odd_sum - even_sum)
      ```

      `digit_diff(12345)` is 3; `digit_diff(2468)` is 20. Turning the number into a string makes each digit a character to loop over; the arithmetic alternative is `d = n % 10`, `n = n // 10` in a `while n > 0` loop.
  - id: "9"
    title: "9 · The longest word"
    text: |
      `words = ["cat", "elephant", "zebra"]`. Which expression returns `"elephant"`?
    options:
      - label: a
        text: |
          `max(words)`
        why: |
          Strings compare alphabetically, so this returns `"zebra"`.
      - label: b
        text: |
          `max(len(w) for w in words)`
        why: |
          This returns the length, 8, not the word.
      - label: c
        text: |
          `sorted(words)[-1]`
        why: |
          Also alphabetical: `"zebra"`.
      - label: d
        text: |
          `max(words, key=len)`
        correct: true
        why: |
          `key=len` compares by length and returns the item itself (2025 Moed A Q1b).
    solution: |
      `key=` changes how items are compared, not what is returned. Ties go to the first item.
  - id: "10"
    title: "10 · The frequency dictionary"
    text: |
      Write `most_common(words)` that returns the word that appears most often in the list `words`. For `"to be or not to be to".split()` it returns `"to"`.
    solution: |
      ```python
      def most_common(words):
          counts = {}
          for w in words:
              counts[w] = counts.get(w, 0) + 1
          return max(counts, key=counts.get)
      ```

      `counts.get(w, 0)` gives 0 the first time a word is seen, so there's no `KeyError`. Here `counts` is `{'to': 3, 'be': 2, 'or': 1, 'not': 1}`. `max(counts, key=counts.get)` loops over the keys and compares their counts. A manual alternative: keep `best_word` and `best_count` and update them in a loop over `counts.items()`.
  - id: "11"
    title: "11 · Trace a digit loop"
    text: |
      Fill a trace table (`n`, `result`), give the output, and say in one sentence what the function does.

      ```python
      def mystery(n):
          result = []
          while n > 0:
              result.append(n % 10)
              n = n // 10
          return result

      print(mystery(4071))
      ```
    solution: |
      | `n` | `result` |
      |---|---|
      | 4071 | `[]` |
      | 4071 | `[1]` |
      | 407 | `[1]` |
      | 407 | `[1, 7]` |
      | 40 | `[1, 7]` |
      | 40 | `[1, 7, 0]` |
      | 4 | `[1, 7, 0]` |
      | 4 | `[1, 7, 0, 4]` |
      | 0 | `[1, 7, 0, 4]` |

      Output: `[1, 7, 0, 4]`. **It returns the digits of `n` from last to first.** (One row per change: `result` changes, then `n`.)
  - id: "12"
    title: "12 · Counting into a new key"
    text: |
      `d = {}` then `d["a"] += 1`. What happens?
    options:
      - label: a
        text: |
          A `KeyError`
        correct: true
        why: |
          `+=` first **reads** `d["a"]`, which doesn't exist yet.
      - label: b
        text: |
          `d` becomes `{"a": 1}`
        why: |
          That needs `d["a"] = d.get("a", 0) + 1`.
      - label: c
        text: |
          `d` becomes `{"a": 0}`
        why: |
          Nothing is stored: the read fails first.
      - label: d
        text: |
          A `TypeError`
        why: |
          The problem is the missing key, not the types.
    solution: |
      The counting line is always `d[k] = d.get(k, 0) + 1` (or test `if k in d:` first).
  - id: "13"
    title: "13 · Remove duplicates, keep the order"
    text: |
      Write `remove_duplicates(lst)` that returns a **new** list with each value once, in the order of first appearance, without changing `lst`. `[3, 1, 3, 2, 1]` → `[3, 1, 2]`.
    solution: |
      ```python
      def remove_duplicates(lst):
          result = []
          for x in lst:
              if x not in result:
                  result.append(x)
          return result
      ```

      `list(set(lst))` would also drop duplicates but **loses the order** (sets are unordered), so it doesn't answer the question. The input list is never modified because we only append to `result`.
  - id: "14"
    title: "14 · One pass of a bubble sort"
    text: |
      An ascending bubble sort compares neighbours and swaps when the left one is larger. What is `[5, 1, 4, 2]` after the **first** outer pass?
    options:
      - label: a
        text: |
          `[1, 2, 4, 5]`
        why: |
          That is the fully sorted list; one pass only guarantees the largest value is at the end.
      - label: b
        text: |
          `[1, 4, 2, 5]`
        correct: true
        why: |
          5 swaps with 1, then with 4, then with 2, ending at the right: `[1, 5, 4, 2]` → `[1, 4, 5, 2]` → `[1, 4, 2, 5]`.
      - label: c
        text: |
          `[1, 5, 4, 2]`
        why: |
          That's after the first comparison only.
      - label: d
        text: |
          `[1, 5, 2, 4]`
        why: |
          5 keeps moving right while it's larger than its neighbour.
    solution: |
      Each outer pass of a bubble sort carries the largest remaining value to its final place at the end. (2023 Moed A traced a **descending** version: `if lst[j] < lst[j + 1]` swaps, so small values sink to the end.)
  - id: "15"
    title: "15 · Trace a selection sort"
    text: |
      Trace the Lec 08 `selection_sort` on `[29, 10, 14, 37, 13]`: for each `i`, give `min_idx` after the inner loop and the list after the swap.
    solution: |
      | `i` | `min_idx` | list after the swap |
      |---|---|---|
      | 0 | 1 (10) | `[10, 29, 14, 37, 13]` |
      | 1 | 4 (13) | `[10, 13, 14, 37, 29]` |
      | 2 | 2 (14) | `[10, 13, 14, 37, 29]` (swap with itself) |
      | 3 | 4 (29) | `[10, 13, 14, 29, 37]` |
      | 4 | 4 | `[10, 13, 14, 29, 37]` |

      After pass `i`, the first `i + 1` positions hold the smallest values in order. Exactly one swap per pass (sometimes with itself).
  - id: "16"
    title: "16 · Trace a binary search"
    text: |
      Using the Lec 08 `binary_search`, trace `left`, `right`, `mid` and `lst[mid]` for searching **11** and then **4** in `[1, 3, 5, 7, 9, 11, 13]`. What is returned each time?
    solution: |
      **Search 11:**

      | `left` | `right` | `mid` | `lst[mid]` | decision |
      |---|---|---|---|---|
      | 0 | 6 | 3 | 7 | 7 < 11: `left = 4` |
      | 4 | 6 | 5 | 11 | found: **return 5** |

      **Search 4:**

      | `left` | `right` | `mid` | `lst[mid]` | decision |
      |---|---|---|---|---|
      | 0 | 6 | 3 | 7 | 7 > 4: `right = 2` |
      | 0 | 2 | 1 | 3 | 3 < 4: `left = 2` |
      | 2 | 2 | 2 | 5 | 5 > 4: `right = 1` |
      | 2 | 1 | | | `left > right`: **return -1** |
  - id: "17"
    title: "17 · Nested loops printing"
    text: |
      What is printed?

      ```python
      for i in range(1, 4):
          for j in range(i):
              print("*", end="")
          print()
      ```
    options:
      - label: a
        text: |
          `***` on three lines
        why: |
          The inner loop runs `i` times, so the rows differ.
      - label: b
        text: |
          `******` on one line
        why: |
          The bare `print()` after the inner loop ends each row.
      - label: c
        text: |
          `*`, `**`, `***` on three lines
        correct: true
        why: |
          `i` is 1, 2, 3; the inner loop prints `i` stars with `end=""`, then `print()` starts a new line.
      - label: d
        text: |
          `**`, `***`, `****` on three lines
        why: |
          `range(i)` runs `i` times, not `i + 1`.
    solution: |
      In pattern traces, find what the inner loop's count depends on, and where the line break is printed.
  - id: "18"
    title: "18 · Validate with three attempts"
    text: |
      Ask the user for an age between 0 and 120. Give them at most **3 attempts**; on a valid age print `"Age saved"` and stop asking; after 3 invalid tries print `"Locked"`.
    solution: |
      ```python
      attempts = 0
      saved = False
      while attempts < 3 and not saved:
          age = int(input("Age: "))
          if 0 <= age <= 120:
              print("Age saved")
              saved = True
          else:
              attempts += 1
              print("Invalid age")
      if not saved:
          print("Locked")
      ```

      Or `for attempt in range(3):` with `break` on success and an `else:` (or a flag) for "Locked". The counter must increase in the invalid branch, or the loop never ends.
  - id: "19"
    title: "19 · Complete a class"
    text: |
      Fill the blanks so the program prints the expected output.

      ```python
      class Product:
          def __init__(self, name, price):
              self.name = name
              (1)________
          def __repr__(self):
              return (2)________
          def apply_discount(self, percent):
              (3)________
          def __eq__(self, other):
              return (4)________

      p = Product("Pen", 20)
      q = Product("Pen", 20)
      print(p, p == q)
      p.apply_discount(25)
      print(p, (5)________)
      ```

      ```text
      Product('Pen', 20) True
      Product('Pen', 15.0) False
      ```
    solution: |
      ```python
      self.price = price                                           # (1)
      return f"Product('{self.name}', {self.price})"               # (2)
      self.price = self.price * (1 - percent / 100)                # (3)
      return self.name == other.name and self.price == other.price # (4)
      p == q                                                       # (5)
      ```

      `__repr__` must **return** the string, with quotes around the name only. The method changes the object's own attribute through `self`. After the discount the prices differ, so `__eq__` gives False.
  - id: "20"
    title: "20 · Equality without __eq__"
    text: |
      A class `Box` has only `__init__(self, v)` storing `self.v = v`. What does `print(Box(1) == Box(1))` show?
    options:
      - label: a
        text: |
          `True`
        why: |
          That needs an `__eq__` comparing `self.v` with `other.v`.
      - label: b
        text: |
          An `AttributeError`
        why: |
          `==` always works; without `__eq__` it falls back to identity.
      - label: c
        text: |
          `1`
        why: |
          `==` returns a bool.
      - label: d
        text: |
          `False`
        correct: true
        why: |
          They are two different objects in memory, and without `__eq__` Python compares identity.
    solution: |
      Defining `__eq__` is how you say "equal when the data are equal" (2025 Moed A Q5). Likewise, without `__repr__`, `print` shows a memory address.
  - id: "21"
    title: "21 · Sum a column of a CSV file"
    text: |
      Each line of `sales.csv` looks like `Tel Aviv,2024,1500.50`. Write `total_sales(filename)` that returns the sum of the last field over all lines.
    solution: |
      ```python
      def total_sales(filename):
          total = 0
          with open(filename) as f:
              for line in f:
                  parts = line.strip().split(",")
                  total += float(parts[-1])
          return total
      ```

      `strip()` removes the trailing newline, `split(",")` gives the fields as **strings**, `float` converts the last one. `with` closes the file. (2022 Moed B Part 2b.)
  - id: "22"
    title: "22 · Scope: what is printed, and why?"
    text: |
      Write the output and explain it.

      ```python
      def double(x):
          y = x * 2
          return y

      x = 5
      print(double(x))
      print(y)
      ```
    solution: |
      ```text
      10
      NameError: name 'y' is not defined
      ```

      `double(5)` returns 10, which is printed. `y` was a **local** variable of `double`: it existed only while the function ran, so the second `print` crashes. The `x` inside the function is a different name from the global `x` (the parameter gets the value 5). On the 2022 papers an answer without the "why" got partial credit.
---

> Solve on paper first, as in the exam: write the code or fill the table, then reveal. Every answer was run in Python.
