---
title: "Second Smallest, Hotel Nights, Selection Sort Trace & GPA (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Computational Thinking and Programming in Python, Moed B 2023"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - computational-thinking-python
  - python
  - past-paper
  - worked-solution
  - lists
  - functions
  - trace-table
  - selection-sort
  - code-completion
aliases:
  - Python Moed B 2023
  - Computational Thinking Moed B 2023
  - PP06 Computational Thinking & Python
subject: computational-thinking-python
in_scope: true
---

# Second Smallest, Hotel Nights, Selection Sort Trace & GPA (2023 Moed B)

> Part of: [[Computational Thinking & Python]]
> **Exam Moed B 2023, Computational Thinking and Programming in Python.** Five questions, 100 points, in three parts: writing code (60), running code with trace tables (30), code completion (10). The paper names Dr. Revital Hollander and Mr. Yoni Chechick as examiners and Or Tzofi as tutor. English version used for the question text; a Hebrew version also exists.
> Key concepts: [[List]], [[Function]], [[Return Value]], [[String]], [[For Loop]], [[Nested Loop]], [[Selection Sort]], [[Time Complexity]], [[Trace Table]], [[Nested List]], [[While Loop]], [[Break and Continue]]
> Builds on: [[Lec_02-Numeric Values and Strings]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]], [[Lec_08-Searching and Sorting]]

> [!info] Answers from the official key
> The key is a Hebrew PDF (`2023B Solution.pdf`) with code and filled-in tables. Every question here is `official`; nothing is AI-solved. I ran every official code solution against the question's own examples. **Two of the official solutions fail their own examples** (Q1a and Q2c): both are flagged with a warning under the question, and the official answers are kept as printed.

## What this paper tests

| Question | Pts | Core idea | Key concept |
|---|---|---|---|
| Q1 | 30 | Second smallest value in one pass, then using sortedness, then a program choosing between them | [[List]], [[Function]], [[Time Complexity]] |
| Q2 | 30 | Hotel stay: night count from day/month strings with validation, a price with a long-stay discount, a printing program | [[String]], [[Function]], [[Conditional Statement]] |
| Q3 | 15 | Trace nested loops that build a list of ints, then print dollar and star lines | [[Nested Loop]], [[Trace Table]] |
| Q4 | 15 | Trace a selection sort | [[Selection Sort]], [[Trace Table]] |
| Q5 | 10 | Fill five blanks in a weighted-GPA program with a sentinel loop | [[Nested List]], [[While Loop]], [[Break and Continue]] |

> [!tip] Intuition
> Q1 is about getting a classic edge case right (duplicates). Q2 is about breaking one messy rule into small checks. Q3 and Q4 are mechanical: execute the code line by line and write every change. Q5 is reading comprehension of code: each blank is the one expression that the surrounding lines need.

---

## Q1 — Second smallest (30 pts)

### a. Second smallest, one pass, list unchanged (10 pts)

> Write a function that accepts a list of real numbers and returns the second smallest number. The list length n is greater than 2. Do not sort the list. A solution that makes one pass over the list and does not modify it receives maximum credit. An alternative correct solution receives only 7 points.
> For example: [8, 3, 5, 1, 4, 7] -> 3; [3, 5, 2, 2] -> 2.

**Idea.** Keep two variables while scanning: the smallest value seen so far and the second smallest. Start them from the first two items (ordered correctly). For every further item, either it is a new minimum (the old minimum becomes the second), or it falls between the two (it becomes the second).

```python
def second_smallest(lst):
    if lst[0] < lst[1]:
        minimum, second = lst[0], lst[1]
    else:
        minimum, second = lst[1], lst[0]
    for i in range(2, len(lst)):
        if minimum > lst[i]:
            second = minimum
            minimum = lst[i]
        elif minimum < lst[i] < second:
            second = lst[i]
    return second
```

The key also tests this over all 24 permutations of `[1, 2, 3, 4]`, where every list has a different value in each slot, and all of them return 2.

> [!warning] Official solution fails the question's own second example
> Running the official function on the question's examples:
>
> | input | expected | official function returns |
> |---|---|---|
> | `[8, 3, 5, 1, 4, 7]` | 3 | 3 |
> | `[3, 5, 2, 2]` | 2 | **3** |
>
> **Why it fails.** At the third item (2), the minimum 3 becomes the second and 2 becomes the minimum. At the fourth item (another 2), `minimum > lst[i]` is false (2 > 2) and the `elif` needs `minimum < lst[i]`, also false (2 < 2). So the repeat of the minimum is ignored and `second` stays 3. The question's second example treats a duplicated minimum as the answer, so 2 is expected.
> The key's own permutation test never sees this because every permutation of `[1, 2, 3, 4]` has no repeated value. Out of all 4-element lists using values 1 to 3, 31 fail the same way (for example `[1, 2, 1, 1]` returns 2, expected 1).
> I keep the official answer above unchanged.

> [!tip] Intuition: a possible fix (mine, not official)
> Replace the `elif` condition with `elif lst[i] < second:` and test the new-minimum case as `lst[i] < minimum`. A repeat of the minimum then lands in `second`. I ran this version on `[3, 5, 2, 2]` (returns 2) and on every list of length 3 to 5 with values 1 to 4: no mismatches against `sorted(lst)[1]`.
>
> ```python
> def second_smallest_fixed(lst):
>     if lst[0] < lst[1]:
>         minimum, second = lst[0], lst[1]
>     else:
>         minimum, second = lst[1], lst[0]
>     for i in range(2, len(lst)):
>         if lst[i] < minimum:
>             second = minimum
>             minimum = lst[i]
>         elif lst[i] < second:
>             second = lst[i]
>     return second
> ```

**Other possible solution (seven points).** The key also gives a version that copies the list, removes the minimum and takes the minimum again:

```python
def second_smallest_v2(lst):
    a = lst.copy()
    a.remove(min(a))
    return min(a)
```

It is correct on both examples (3 and 2), including the duplicate case, because `remove` removes only one copy. It scans the list more than once (`min` twice, plus `remove`), so it earns only 7 points.

### b. Second smallest of a sorted list (5 pts)

> Write a function that receives a sorted list of real numbers and returns the second smallest number. The list length is greater than 2. You need to take advantage of the fact that the list is sorted (a solution that does not take advantage of this will not receive points). For example [4, 7, 9] -> 7; [2, 4, 4, 4] -> 4.

In a sorted ascending list the smallest value is at index 0 and the second smallest is at index 1, a single lookup instead of a scan.

```python
def second_smallest_sorted(lst):
    return lst[1]

print(second_smallest_sorted([4, 7, 9]))
print(second_smallest_sorted([2, 4, 4, 4]))
```

```text
7
4
```

### c. The program (15 pts)

> Write a program that asks the user to enter a positive integer n >= 2, and a list of n real numbers. The program will only check that n >= 2, and if not will print an error message. Otherwise, print the second smallest number by calling the function from part (2) if the list is sorted or by calling the function from part (1) if the list is not sorted.

Add a helper `is_sorted` that returns `False` at the first pair out of order. Then branch on it.

```python
def is_sorted(lst):
    for i in range(len(lst) - 1):
        if lst[i] > lst[i + 1]:
            return False
    return True


lst = []
n = int(input("Please enter a number that is greater than 2: "))
if n < 2:
    print("Error!")
else:
    for i in range(n):
        lst.append(int(input("Please enter a number: ")))

    if is_sorted(lst):
        print(second_smallest_sorted(lst))
    else:
        print(second_smallest(lst))
```

> [!warning] Small gaps in the official program
> - The question says **real** numbers but the key reads each value with `int(...)`. A float such as 2.5 would raise a `ValueError`. Using `float(...)` is the faithful reading of the question.
> - The prompt says "greater than 2" while the check (and the question) allow n = 2. For n = 2 the sorted-list branch works (index 1), and the unsorted one works too (the two starting values are ordered).
> - Because `is_sorted` uses `>` (not `>=`), a list with equal neighbours, like `[2, 4, 4, 4]`, counts as sorted, which is right for non-decreasing order.

---

## Q2 — Four Summers hotel (30 pts)

### a. Number of nights (13 pts)

> Write a function that accepts a string check_in (arrival date) and check_out (departure date) and returns the number of nights between them. Every date is written day/month; assume 12 months, 30 days in every month, and both dates in the same year. Check validity (format is correct; day and month must be positive integers not greater than 30, and departure must be later than arrival). If not valid return -1.
> For check_in="07/05", check_out="12/05" return 5. For "27/09" and "3/11" return 36. For "30/01" and "26/01" return -1 (departure earlier). For "32/12" and "12/-15" return -1 (no day 32, no month -15).

**Idea.**
1. Split each string on `/` and convert the two parts to ints.
2. Validity: day in 1..30, month in 1..12, and the departure month not before the arrival month. (The key writes "not greater than 30" for months too in the question text, but a month above 12 does not exist, so it checks 1 to 12.)
3. Same month: the departure day must be strictly later, and the answer is the difference of days.
4. Different months: nights left in the arrival month (`30 - day1`), plus 30 for every full month in between, plus the departure day.

```python
def number_of_nights(check_in, check_out):
    x1 = check_in.split("/")
    x2 = check_out.split("/")
    day1, month1 = int(x1[0]), int(x1[1])
    day2, month2 = int(x2[0]), int(x2[1])

    if not (1 <= day1 <= 30 and 1 <= day2 <= 30 and 1 <= month1 <= 12 and 1 <= month2 <= 12 and month2 >= month1):
        return -1
    if month1 == month2:
        if day1 >= day2:
            return -1
        return day2 - day1
    else:
        return 30 - day1 + 30 * (month2 - month1 - 1) + day2
```

I ran all four examples from the question:

| check_in | check_out | expected | official returns |
|---|---|---|---|
| "07/05" | "12/05" | 5 | 5 |
| "27/09" | "3/11" | 36 | 36 |
| "30/01" | "26/01" | -1 | -1 |
| "32/12" | "12/-15" | -1 | -1 |

> [!success] Checked
> The English paper writes "3/11" and the Hebrew paper "03/11". Both work, because `int("03")` and `int("3")` are both 3.

> [!example] Worked example: 27/09 to 03/11
> The arrival month 9 has 30 - 27 = 3 nights left. Month 10 is a full month in between: 30 nights. Then 3 nights into month 11. Total 3 + 30 + 3 = 36.

### b. Total price (7 pts)

> Write a function that accepts the number of nights nights and the room rate room_rate, and returns the total stay price. If the number of nights is greater than 7, a discount of 20% is given off the total price.

```python
def total_price(nights, room_rate):
    price = nights * room_rate
    if nights > 7:
        return (4 / 5) * price
    else:
        return price
```

A 20 percent discount means paying 80 percent, which is `4/5` of the price. Note it is **strictly greater than 7**, so exactly 7 nights gets no discount.

### c. The program (10 pts)

> Write a program that asks for: name (string), check-in date (string), check-out date (string), room rate (positive integer). Call the functions from the previous sections and print the number of nights and the total price exactly as in the example. Check the input (price per night is positive, dates are correct and the function from section 1 did not return -1) and print an error message if not.
> For George Clooney, "07/05", "12/05", 700: "Dear George Clooney, your 5 night stay will cost 3500 USD". For Kate Winslet, "05/10", "15/10", 500: "Dear Kate Winslet, your 10 night stay will cost 4000 USD" (20% discount because more than 7 nights).

```python
name = input("Please enter your name: ")
check_in = input("Please enter your check-in date: ")
check_out = input("Please enter your check-out date: ")
room_rate = int(input("Please enter the price per night: "))

nights = number_of_nights(check_in, check_out)
if nights == -1 or room_rate <= 0:
    print("Error!")
else:
    price = total_price(nights, room_rate)
    print("Dear " + name + ", your " + str(nights) + " night stay will cost " + str(price) + " USD.")
```

Running the official message construction on the two examples:

```text
Dear George Clooney, your 5 night stay will cost 3500 USD.
Dear Kate Winslet, your 10 night stay will cost 4000.0 USD.
```

> [!warning] Official program does not print the question's exact message
> The question asks for the message "exactly as in the example". Two differences:
> - **Kate Winslet prints `4000.0`, not `4000`.** `(4/5) * price` is a float, so `str(price)` gives `4000.0`. The first example is fine because no discount keeps the price as an int (`3500`).
> - **A full stop after "USD"** that the example does not have, in both lines.
>
> Kept as official. A faithful variant would round the discounted price to a whole number when it is an integer, for example by writing `price = nights * room_rate * 4 // 5` for the discount branch (valid only for integer rates), and drop the final period.

---

## Q3 — Trace nested loops and prints (15 pts)

> Fill in the table columns and record the output as it will appear on the console.

```python
lst1 = [2, 1, 4]
lst2 = [1, 0.5]
res = []
for i in lst1:
    for j in lst2:
        res.append(int(i*j))
print(res)
for k in res:
    if k % 2 == 0:
        print('$' * k, end='')
    else:
        print('*' * k, end='')
    print()
```

**What happens in the first loop.** It loops over every pair `(i, j)`: 3 values times 2 values = 6 appends. `int(i*j)` multiplies, then **truncates** toward zero: `1 * 0.5 = 0.5` becomes `0`, and `4 * 0.5 = 2.0` becomes `2`. So `res` becomes `[2, 1, 1, 0, 4, 2]`.

**Trace table (official).** Each row is one run of the inner loop body. The paper's last column is the loop variable `k` of the second loop, which only starts after `print(res)`; the official key lists it row for row.

| i | j | res (after the append) | k (second loop, printed) |
|---|---|---|---|
| 2 | 1 | `[2]` | 2 |
| 2 | 0.5 | `[2, 1]` | 1 |
| 1 | 1 | `[2, 1, 1]` | 1 |
| 1 | 0.5 | `[2, 1, 1, 0]` | 0 |
| 4 | 1 | `[2, 1, 1, 0, 4]` | 4 |
| 4 | 0.5 | `[2, 1, 1, 0, 4, 2]` | 2 |

(The `k` column belongs to the second loop; it simply walks through `res`, so its values copy the `res` list in order.)

**Second loop.** For each value `k`: even numbers print `k` dollar signs, odd numbers print `k` stars, in both cases without a newline (`end=''`), and then the bare `print()` ends the line. `0` is even, and zero dollar signs is the empty string, so it prints an empty line.

**Console:**

```text
[2, 1, 1, 0, 4, 2]
$$
*
*

$$$$
$$
```

> [!success] Answer
> The six lines above (the fourth line is empty, for `k = 0`). I ran the code and it matches the key.

> [!warning] Column header in the English paper
> The English paper's table headers are `i  j  res  temp`. The Hebrew paper and the key use `i  j  res  k`. There is no variable called `temp` in this code, so `k` is what is meant.

---

## Q4 — Trace a selection sort (15 pts)

> Run the following code on the given input, fill the table with the values of the variables as they are calculated and record the output in the bottom row of the table.

```python
def unknown_func(lst):
    for i in range(len(lst) - 1):
        minIndex = i
        for j in range(i + 1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        if minIndex != i:
            temp = lst[i]
            lst[i] = lst[minIndex]
            lst[minIndex] = temp


lst = [78, 4, 16, 7, 1, 55]
print(lst)
unknown_func(lst)
print(lst)
```

**What it does.** This is [[Selection Sort]]: for each position `i`, scan the rest of the list to find where the smallest remaining value is (`minIndex`), then swap it into position `i`. After pass `i`, the first `i + 1` positions are final. (The same algorithm is in [[Lec_08-Searching and Sorting]], where it is `O(n^2)`.)

![[PP06_q4_selection_sort_passes.png|700]]

*Theory diagram built from running the question's code: the list after each outer pass, the green prefix is in its final place.*

**Trace table (official).** `minIndex` starts each pass at `i`. `lst` changes only when a swap happens.

| i | j | minIndex | lst |
|---|---|---|---|
| 0 | - | 0 | `[78, 4, 16, 7, 1, 55]` |
| | 1 | 1 | |
| | 2 | 1 | |
| | 3 | 1 | |
| | 4 | 4 | |
| | 5 | 4 | `[1, 4, 16, 7, 78, 55]` |
| 1 | - | 1 | |
| | 2-5 | 1 | |
| 2 | - | 2 | |
| | 3 | 3 | |
| | 4-5 | 3 | `[1, 4, 7, 16, 78, 55]` |
| 3 | - | 3 | |
| | 4-5 | 3 | |
| 4 | - | 4 | |
| | 5 | 5 | `[1, 4, 7, 16, 55, 78]` |

> [!example] Why a few rows look odd
> - **i = 0:** the minimum 1 is found at index 4 (when `j = 4`). The swap puts 1 at the front and 78 at index 4. The `lst` shown at the end of this block is after the swap.
> - **i = 1:** 4 is already the smallest of the remaining items, so `minIndex` stays 1 and `minIndex != i` is false: **no swap**.
> - **i = 3:** 16 is already the smallest of `[16, 78, 55]`, again no swap.
> - **i = 4:** only `j = 5` is compared, and 55 < 78, so `minIndex = 5` and the last swap puts 55 at index 4 and 78 at index 5.

**Console output:**

```text
[78, 4, 16, 7, 1, 55]
[1, 4, 7, 16, 55, 78]
```

> [!success] Answer
> The two lines above. My run matches every row of the key's table. (The key's last `minIndex` cell is smudged in the PDF scan, but running the code gives 5, as in the table.)

---

## Q5 — Code completion: law school application (10 pts)

> Elle Woods is trying to be accepted to a law degree at Harvard. She enters her first-degree GPA, her LSAT grade and the number of recommendation letters. She entered several grades into a list of lists such that grades[i][0] is the grade in course i and grades[i][1] is the number of credits of course i. Fill in the blank at all places marked (1) to (5).

```python
def calc_gpa(grades):
    total_credits = 0
    for i in range(len(grades)):
        total_credits += grades[i][1]
    gpa = 0
    for i in range(len(grades)):
        gpa += grades[i][0] * grades[i][1] / total_credits      # blank (1)
    return gpa


def add_grades(grades):
    print("Please enter the grades and the number of credits of your other courses. Type -1 when you are done.")
    while True:
        grade = int(input("Grade: "))
        if grade == -1:                                          # blank (2)
            break
        credits = int(input("Credits: "))
        grades.append([grade, credits])                          # blank (3)


print("Hello, Elle Woods. This program will evaluate your Harvard Law School application.")
grades = [[94, 4], [80, 2], [100, 6], [92, 4], [89, 2]]
add_grades(grades)
lsat = int(input("Please enter your Law School Admission Test score: "))
recommendations = int(input("How many letters of recommendation do you have? "))
gpa = calc_gpa(grades)                                           # blank (4)

if gpa >= 90 and lsat >= 170 and recommendations >= 2:
    print("Congratulations, you have just been accepted to the Harvard Law School!")
else:                                                            # blank (5)
    print("Please improve your grades and try again next year.")
```

> [!success] Answer
> (1) `total_credits`
> (2) `-1`
> (3) `credits`
> (4) `calc_gpa(grades)`
> (5) `else`

### Why each blank

- **(1)** A weighted average is the sum of `grade * credits` divided by the sum of credits. The first loop already computed that total as `total_credits`, so each term divides by it.
- **(2)** The prompt says "Type -1 when you are done". The loop is `while True`, so the **sentinel value** `-1` must trigger the `break`.
- **(3)** The new course is stored as `[grade, credits]`, the same shape as the existing rows (`grades[i][0]` is the grade, `grades[i][1]` the credits). The credits just read from the user are in the variable `credits`.
- **(4)** The variable `gpa` is used straight afterwards in the condition, so it must be computed with `calc_gpa(grades)`.
- **(5)** The message "Please improve your grades" is the other branch of the `if` above it, so the blank is `else`. The colon after the blank in the printed code confirms it is a statement header.

> [!example] Checking the numbers
> Starting grades give total credits 4 + 2 + 6 + 4 + 2 = 18 and a weighted average of about 93.44 (I ran `calc_gpa` on the starting list). So with no extra grades, a 170 LSAT and 2 letters of recommendation this applicant gets in; with 160 on the LSAT, the `else` message prints.

---

## Differences between the English and Hebrew papers

- **Q2a example:** English writes check_out="3/11", Hebrew writes "03/11". The result (36) is the same.
- **Q3 table header:** English header ends with `temp`, Hebrew and key end with `k` (see the warning under Q3).
- **Cheat sheet:** the Hebrew paper has the cheat sheet appended to the exam PDF; the English file does not.
- **Everything else** (point values, code, example values) matches.

## Recap

| Question | Tool | One-line answer |
|---|---|---|
| Q1a | one-pass min and second | Official code fails `[3, 5, 2, 2]` (returns 3, expected 2); see the warning |
| Q1b | sortedness | `lst[1]` |
| Q1c | `is_sorted` helper | Error if n < 2, else sorted-branch or one-pass branch |
| Q2a | split, validate, month arithmetic | `30 - day1 + 30 * (m2 - m1 - 1) + day2`, or day difference in one month |
| Q2b | discount on strict `> 7` | 80 percent of the price |
| Q2c | glue functions | Official prints `4000.0 USD.` for the second example (question shows `4000 USD`) |
| Q3 | nested loops, `int()` truncation | `[2, 1, 1, 0, 4, 2]`, then lines of 2 dollar signs, 1 star, 1 star, a blank line, 4 dollar signs, 2 dollar signs |
| Q4 | selection sort | `[1, 4, 7, 16, 55, 78]`, swaps at i = 0, 2, 4 |
| Q5 | weighted average and sentinel | `total_credits`, `-1`, `credits`, `calc_gpa(grades)`, `else` |

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_02-Numeric Values and Strings]]
- [[Lec_04-Lists, For Loops and Ranges]]
- [[Lec_06-Functions]]
- [[Lec_08-Searching and Sorting]]
