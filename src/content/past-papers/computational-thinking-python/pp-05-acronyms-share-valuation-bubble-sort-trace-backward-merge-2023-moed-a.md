---
title: "Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "Computational Thinking and Programming in Python, Moed A 2023 (Economics)"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - computational-thinking-python
  - python
  - past-paper
  - worked-solution
  - strings
  - functions
  - trace-table
  - sorting
  - code-completion
aliases:
  - Python Moed A 2023
  - Computational Thinking Moed A 2023
  - PP05 Computational Thinking & Python
subject: computational-thinking-python
in_scope: true
---

# Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)

> Part of: [[Computational Thinking & Python]]
> **Exam Moed A 2023, Computational Thinking and Programming in Python.** Five questions, 100 points, in three parts: writing code (60), running code with trace tables (30), code completion (10). The paper itself names Dr. Revital Hollander and Mr. Yoni Chechick as examiners and Or Tzofi as tutor. English version used for the question text; a Hebrew version also exists.
> Key concepts: [[String]], [[List]], [[Function]], [[Return Value]], [[For Loop]], [[Range]], [[Nested Loop]], [[Nested List]], [[Selection Sort]], [[Time Complexity]], [[Trace Table]], [[Bubble Sort]], [[Merge of Sorted Lists]]
> Builds on: [[Lec_02-Numeric Values and Strings]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]], [[Lec_08-Searching and Sorting]]

> [!info] Answers from the official key
> The key is a Hebrew PDF (`Economics Moed A 2023 Solution.pdf`) with code and filled-in tables. Every question here is `official`; nothing is AI-solved. I ran every official code solution against the question's own examples (see the warnings and the checks column in the recap table). The key's output for Q3 and Q4 matched my runs exactly.

> [!note] What the cheat sheet allows
> The exam shipped with a one-page list of list, string, dictionary and set methods (`split`, `upper`, `join`, `append`, `sorted` and so on). The Q1 solution only needs `split`, `upper` and `append`, all on that sheet.

## What this paper tests

| Question | Pts | Core idea | Key concept |
|---|---|---|---|
| Q1 | 30 | Acronym of a string, then of a list of strings, then a small input program that prints every second result | [[String]], [[List]], [[Function]] |
| Q2 | 30 | Three tiny money functions and one validated input program | [[Function]], [[Return Value]], [[Conditional Statement]] |
| Q3 | 15 | Trace a descending bubble sort and count swaps per pass | [[Bubble Sort]], [[Trace Table]], [[Nested Loop]] |
| Q4 | 15 | Trace an in-place merge of two sorted lists, filling from the back | [[Merge of Sorted Lists]], [[While Loop]], [[Trace Table]] |
| Q5 | 10 | Fill five blanks in a program that sells discounted tickets | [[Nested List]], [[Function]], [[For Loop]] |

> [!tip] Intuition
> Part A rewards small, boring building blocks: write each function so it does one thing, then glue them together in the program. Parts B and C reward reading the code as a machine: write down every variable after every line, and let the surrounding code tell you what each blank must be.

---

## Q1 — Initials, lists of initials, and odd positions (30 pts)

### a. Acronym of one string (10 pts)

> Write a function that receives a string and returns a string containing its initials. The initials consist of the first letter of each word in the string, so that each letter in the initials (acronym) is capitalized.
> For example: "Natural language processing" -> NLP; "Taylor Swift" -> TS; "Business administration" -> BA.

**Idea.** `split()` with no argument cuts on any run of whitespace, so we get the words. Take the first character of each word, upper-case it, and add it to an accumulating string. The `if w:` guard is a safety check against an empty word (with plain `split()` an empty word cannot occur, but the guard costs nothing).

```python
def acronym(string):
    words = string.split()
    res = ""
    for w in words:
        if w:
            res += w[0].upper()
    return res

print(acronym("Natural language processing"))
print(acronym("Taylor Swift"))
print(acronym("Business administration"))
```

```text
NLP
TS
BA
```

> [!success] Checked
> All three of the question's examples give the expected result.

### b. Acronyms of a list (10 pts)

> Write a function that receives a list of strings and returns a new list of strings, such that every string in the new list contains the initials of the string in the original list, exactly in the same order. Example: ["Natural language processing", "Taylor Swift", "Business administration"] returns ["NLP", "TS", "BA"].

Build a new list and call part (a) on each element. Because we append in loop order, the order is preserved, and the original list is untouched.

```python
def acronyms_list(lst):
    res = []
    for s in lst:
        res.append(acronym(s))
    return res

print(acronyms_list(["Natural language processing", "Taylor Swift", "Business administration"]))
```

```text
['NLP', 'TS', 'BA']
```

> [!tip] Intuition
> The same function as a one-line [[List Comprehension]]: `[acronym(s) for s in lst]`. The key writes the explicit loop, which is fully acceptable.

### c. The input program (10 pts)

> Write a program that asks the user to enter a positive integer n and a list of n strings. The program will then call the function from part (2) and print the strings at the odd locations only according to their order in the list. If n is not positive, then print an error message.

**Reading "odd locations".** The English paper just says "odd locations". The Hebrew paper adds "(odd index)". The official key prints indexes 1, 3, 5, and so on, which is the second, fourth, sixth acronym. That is the `range(1, len(acronyms), 2)` in the key.

```python
n = int(input("Please enter a positive integer: "))
if n <= 0:
    print("You were supposed to enter a positive integer.")
else:
    lst = []
    for i in range(n):
        lst.append(input("Please enter a string: "))

    acronyms = acronyms_list(lst)
    for i in range(1, len(acronyms), 2):
        print(acronyms[i])
```

Run with the input `3`, then the three example strings, the only line printed after the prompts is:

```text
TS
```

With input `0` it prints the error message.

> [!warning] Ambiguity in the English wording
> If a student reads "odd locations" as 1st, 3rd, 5th (human counting), the answer would print "NLP" and "BA" instead. The official key uses odd indexes, matching the Hebrew paper's clarification. State your reading in the exam if the wording is unclear.

---

## Q2 — Share valuation (30 pts)

### a. Company value (5 pts)

> Write a function that accepts two input arguments, the share price sharePrice and the number of shares traded on the market sharesNum. The function returns the company's market value: the share price times the number of shares. For sharePrice=100 and sharesNum=20,000 the company value is 2,000,000.

```python
def company_value(sharePrice, sharesNum):
    return sharePrice * sharesNum

print(company_value(100, 20000))
```

```text
2000000
```

### b. Is the share at a discount? (5 pts)

> Given an estimated share value val and a market price sharePrice, a share is traded at a discount if sharePrice is lower than val by dis percent. Write isDiscount(sharePrice, val, dis), returning True if the share is traded at a discount of dis percent or more, False otherwise. For sharePrice=60, val=100, dis=30 return True (the discount is 40%, which is greater than 30%). For sharePrice=60, val=100, dis=50 return False.

**Idea.** Compute the highest price that still counts as "dis percent below val", namely `val - val * dis / 100`, and check that the market price is at or below it. "At least" means we use `<=`.

```python
def isDiscount(sharePrice, val, dis):
    return sharePrice <= val - val * dis / 100

print(isDiscount(60, 100, 30))
print(isDiscount(60, 100, 50))
```

```text
True
False
```

> [!example] Worked check
> dis = 30: threshold is 100 - 30 = 70, and 60 <= 70 is True. dis = 50: threshold is 50, and 60 <= 50 is False.

### c. Value after some years (7 pts)

> Write a function that accepts a starting share value val, a number of years years, and the expected yearly average growth percentage growth. It returns the share's value after years, assuming the price grows by growth percent every year. For years=2, val=100, growth=50 the function returns 225.

Each year multiplies the value by `1 + growth/100`, so after `years` years the multiplier is raised to that power. This is compound growth, not simple growth (simple growth would give 200).

```python
def valuation(val, years, growth):
    return val * ((1 + growth / 100) ** years)

print(valuation(100, 2, 50))
```

```text
225.0
```

> [!note] 225 versus 225.0
> The question says "225", Python prints `225.0` because `/` always produces a float. The value is correct.

### d. The full program (13 pts)

> Write a program that asks the user to enter: (a) share price sharePrice (positive real), (b) number of shares shareNum (positive integer), (c) estimated share value val (positive real), (d) number of years years (positive integer), (e) average annual growth percentage growth (real), (f) desired discount percentage dis (real between 0 and 100). The input must be checked: a value that should be positive must be, and dis must be between 0 and 100. If a value is not valid, print which values are not valid and why. If the data is correct, call the functions from the previous sections and print "discount found" if the share is traded at a discount. Also print the company's current market value and the expected share price and company value after years years at yearly growth rate growth. Assume the number of shares does not change.

**Plan.** Read the six values with the right types (`float` for reals, `int` for whole numbers), validate with an `if/elif` chain, then in the valid branch call the three helper functions.

```python
val = float(input("Please enter the estimated value of the company: "))
sharePrice = float(input("Please enter the share price: "))
sharesNum = int(input("Please enter the number of shares: "))
years = int(input("Please enter the number of years: "))
growth = float(input("Please enter the company's growth rate: "))
dis = float(input("Please enter the discount rate: "))

if val <= 0:
    print("The company's value should be positive.")
elif sharePrice <= 0:
    print("The share price should be positive.")
elif sharesNum <= 0:
    print("The number of shares should be positive.")
elif years <= 0:
    print("The number of years should be positive.")
elif dis > 100 or dis < 0:
    print("The discount rate should be a number between 0 and 100")
else:
    if isDiscount(sharePrice, val, dis):
        print("Discount found!")
    future_share_price = valuation(val, years, growth)
    print(f"The price of the share will be {future_share_price} in {years} years")
    print("The company's value today:", company_value(sharePrice, sharesNum))
    print(f"The company's value in {years} years: {company_value(future_share_price, sharesNum)}")
```

I ran this with the inputs `100`, `60`, `20000`, `2`, `50`, `30` (in the key's input order: val first, then price):

```text
Discount found!
The price of the share will be 225.0 in 2 years
The company's value today: 1200000.0
The company's value in 2 years: 4500000.0
```

With a negative share price and a discount of 130 it stops at the first problem found:

```text
The share price should be positive.
```

> [!warning] Points of care in the official program
> - **Only the first error is reported.** The question says to print "which values are not valid", plural. The `if/elif` chain stops at the first bad value. The key accepts this; a fuller answer would use separate `if` statements, one per field, and a flag.
> - **The printed message is "Discount found!"** with a capital D and an exclamation mark, while the question says "discount found". The key does not treat this as an error.
> - **Order of the six inputs.** The key reads `val` first and `sharePrice` second, the reverse of the question's a to f order. Any order works as long as the prompts are clear.
> - **The future share price grows `val`, not `sharePrice`.** That follows part (c), which defines the starting value as val (the estimated value). The future company value then multiplies that future price by the unchanged number of shares.
> - **Mark scheme mismatch.** The English and Hebrew papers give Q2c as 7 points and Q2d as 13 points. The key's header lines print 10 and 10 for those two parts. Use 7 and 13, which are on the exam.

---

## Q3 — Trace a bubble sort (15 pts)

### a. Trace table and console output (8 pts)

> Run the given code. Fill in the table with the values of the variables as they are calculated throughout the program, each change on a new line. Consecutive changes can be written as a range ("1-7"). Also write the printouts as they would appear in the console.

```python
def mystery_function_2(lst):
    for i in range(len(lst) - 1, 0, -1):
        for j in range(i):
            if lst[j] < lst[j + 1]:
                temp = lst[j]
                lst[j] = lst[j + 1]
                lst[j + 1] = temp
        print(lst)
    return lst

mystery_function_2([72, 39, 12, 18, 85, 10, 2, 18])
```

**What it does.** The inner loop compares neighbours and swaps whenever the left one is smaller than the right one. So larger values drift left and smaller values drift right: this is a **descending** bubble sort. After the pass with a given `i`, the smallest of the first `i + 1` items sits at index `i`. The outer loop counts `i` down from 7 to 1, so the settled region at the right grows by one cell each pass.

![[PP05_q3_bubble_passes.png|700]]

*Theory diagram built from running the question's code: each row is the list after one outer pass, green cells are in their final place.*

**Trace table (official layout).** `temp` only changes when a swap happens, and it holds the value of `lst[j]` just before the swap. A dash means no swap on that `j`.

| i | j | temp |
|---|---|---|
| 7 | 0-1 | - |
| 7 | 2 | 12 |
| 7 | 3 | 12 |
| 7 | 4-5 | - |
| 7 | 6 | 2 |
| 6 | 0-1 | - |
| 6 | 2 | 18 |
| 6 | 3-4 | - |
| 6 | 5 | 10 |
| 5 | 0 | - |
| 5 | 1 | 39 |
| 5 | 2-3 | - |
| 5 | 4 | 12 |
| 4 | 0 | 72 |
| 4 | 1-3 | - |
| 3 | 0-2 | - |
| 2 | 0-1 | - |
| 1 | 0 | - |

> [!example] Pass 1 step by step (i = 7)
> Start `[72, 39, 12, 18, 85, 10, 2, 18]`.
> j = 0: 72 < 39? No. j = 1: 39 < 12? No. j = 2: 12 < 18? Yes, swap, temp = 12, list `[72, 39, 18, 12, 85, 10, 2, 18]`. j = 3: 12 < 85? Yes, swap, temp = 12, `[72, 39, 18, 85, 12, 10, 2, 18]`. j = 4: 12 < 10? No. j = 5: 10 < 2? No. j = 6: 2 < 18? Yes, swap, temp = 2, `[72, 39, 18, 85, 12, 10, 18, 2]`. Then `print(lst)` runs.

**Console (seven lines, one per pass):**

```text
[72, 39, 18, 85, 12, 10, 18, 2]
[72, 39, 85, 18, 12, 18, 10, 2]
[72, 85, 39, 18, 18, 12, 10, 2]
[85, 72, 39, 18, 18, 12, 10, 2]
[85, 72, 39, 18, 18, 12, 10, 2]
[85, 72, 39, 18, 18, 12, 10, 2]
[85, 72, 39, 18, 18, 12, 10, 2]
```

> [!tip] Intuition
> The list is already fully sorted after pass 4, but this version has no early-exit flag, so passes 5 to 7 still run and still print the same list. That is why the last four console lines are identical.

### b. Swaps in each outer iteration (7 pts)

| Iteration | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| i | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| Number of swaps | 3 | 2 | 2 | 1 | 0 | 0 | 0 |

> [!success] Answer
> 3, 2, 2, 1, 0, 0, 0. I checked this by adding a counter to the question's code and running it.

---

## Q4 — Trace an in-place merge (15 pts)

> Run the following code on the given input, fill the table with the values of the variables as they are calculated and record the output in the bottom row of the table.

```python
def mystery(lst1, m, lst2, n):
    i = m - 1
    j = n - 1
    k = m + n - 1
    while j >= 0:
        if i >= 0 and lst1[i] > lst2[j]:
            lst1[k] = lst1[i]
            i -= 1
        else:
            lst1[k] = lst2[j]
            j -= 1
        k -= 1


nums1 = sorted([3, 1, 6, 22, 14])
nums2 = sorted([16, 8, 3])
print(nums1)
print(nums2)
padding = [0] * len(nums2)  # a list of len(nums2) zeros
nums1.extend(padding)
mystery(nums1, len(nums1) - len(padding), nums2, len(nums2))
print(nums1)
```

**What it does.** Both lists are sorted. `nums1` has been padded with zeros so it has room for everything. Three pointers: `i` is the last real element of `lst1`, `j` the last element of `lst2`, `k` the last free slot. At each step we write the **larger** of the two candidates into slot `k` and move that list's pointer left. Filling from the back means we never overwrite a `lst1` value we still need. The loop stops when `lst2` is used up, because whatever remains of `lst1` is already in place.

![[PP05_q4_merge_from_back.png|700]]

*Theory diagram built from running the question's code: yellow is the slot written in that step, green is the finished tail.*

**Trace table (official).** Values of `i`, `j`, `k` are those at the start of each loop iteration, `nums1` is the list after that iteration's write.

| i | j | k | nums1 after the write |
|---|---|---|---|
| (start) | | | `[1, 3, 6, 14, 22, 0, 0, 0]` |
| 4 | 2 | 7 | `[1, 3, 6, 14, 22, 0, 0, 22]` |
| 3 | 2 | 6 | `[1, 3, 6, 14, 22, 0, 16, 22]` |
| 3 | 1 | 5 | `[1, 3, 6, 14, 22, 14, 16, 22]` |
| 2 | 1 | 4 | `[1, 3, 6, 14, 8, 14, 16, 22]` |
| 2 | 0 | 3 | `[1, 3, 6, 6, 8, 14, 16, 22]` |
| 1 | 0 | 2 | `[1, 3, 3, 6, 8, 14, 16, 22]` |
| 1 | -1 | 1 | (loop ends) |

> [!example] Why each step chooses what it does
> - i=4, j=2: 22 > 16, take 22 from `lst1`.
> - i=3, j=2: 14 > 16? No, take 16 from `lst2`.
> - i=3, j=1: 14 > 8, take 14.
> - i=2, j=1: 6 > 8? No, take 8.
> - i=2, j=0: 6 > 3, take 6.
> - i=1, j=0: 3 > 3? No (equal, so `>` is false), so the `else` branch writes the 3 from `lst2`. The old 3 in `lst1` stays at index 1, which is why the list ends with two 3s.
> - Now `j` is -1, the loop stops. The elements `1` and `3` at the front of `lst1` are already in the right place.

**Console output:**

```text
[1, 3, 6, 14, 22]
[3, 8, 16]
[1, 3, 3, 6, 8, 14, 16, 22]
```

> [!success] Answer
> The three lines above. I ran the code and the output matches the key, as do all six rows of the trace table.

---

## Q5 — Code completion: airline discounts (10 pts)

> Python Airlines sells all flights to New York, normally 1300 dollars, at a 10% discount. Club members get more: Silver 20%, Gold 50%, Platinum 70%. The code sells the last 40 tickets to 50 customers waiting in line. Discount details are in a list of lists; each sub-list holds the membership level name and the discount. Fill in the blank at all places marked (1) to (5).

> [!note] Indentation in the English paper
> In the English PDF the indentation of this code is flattened (for example the inner `if` in `get_discount` appears at the same level as its `for`). The Hebrew paper and the key show the nesting below, which is the only version that runs. The code here uses the key's indentation.

```python
def membership_type():
    ans = input('Are you a club member? If so, type "Yes", otherwise, type "No": ')
    if ans == "Yes":                       # blank (1)
        tier = input('Please enter your membership tier: "Silver", "Gold" or "Platinum": ')
        if tier == "Silver" or tier == "Gold" or tier == "Platinum":
            return tier
        else:
            print("There is no such tier.")
    return 0


def get_discount(membership_tiers, tier):
    for i in range(len(membership_tiers)):
        if membership_tiers[i][0] == tier:      # blank (2)
            return membership_tiers[i][1]       # blank (3)
    return 0.1


membership_tiers = [["Silver", 0.2], ["Gold", 0.5], ["Platinum", 0.7]]
quantity = 40
original_price = 1300
customers = 50
for i in range(customers):
    print("Welcome to the Python Airlines winter sale!")
    tier = membership_type()
    if quantity:
        discount = get_discount(membership_tiers, tier)   # blank (4)
        price = original_price * (1 - discount)           # blank (5)
        print("The price of your ticket is: ", price)
        quantity -= 1
    else:
        print("Sold out!")
```

> [!success] Answer
> (1) `ans == "Yes"`
> (2) `membership_tiers[i][0]`
> (3) `membership_tiers[i][1]`
> (4) `get_discount(membership_tiers, tier)`
> (5) `1 - discount`

### Why each blank

- **(1)** The prompt asked "are you a club member? type Yes or No". We only ask for the tier when the answer is `"Yes"`. If the answer is "No" (or anything else) the function falls through to `return 0`.
- **(2)** `membership_tiers` is a [[Nested List]]: each row is `["Silver", 0.2]`. Row `i`, column 0 is the tier name, so we compare `membership_tiers[i][0]` with the customer's `tier`.
- **(3)** Row `i`, column 1 is the discount, so a match returns `membership_tiers[i][1]`.
- **(4)** The caller must turn the tier (or `0` for non-members and invalid tiers) into a discount. `get_discount` returns 0.1 when nothing matches, which gives the default 10% sale discount for non-members.
- **(5)** The discount is a fraction taken off the price: the customer pays `1 - discount` of 1300.

> [!example] Checking the discounts (I ran the functions)
> | tier passed in | discount returned | price |
> |---|---|---|
> | "Silver" | 0.2 | 1040.0 |
> | "Gold" | 0.5 | 650.0 |
> | "Platinum" | 0.7 | 390.00000000000006 |
> | 0 (non-member or bad tier) | 0.1 | 1170.0 |
>
> The Platinum price prints with a long tail because 0.7 cannot be stored exactly as a float. It is a harmless [[Floating-Point Error]] and not something the key worries about.

> [!warning] Exam trap
> A wrong tier string such as "Diamond" prints "There is no such tier." and returns 0, so that customer gets the 10% discount, not an error. That is the program's design, not a bug in your blanks.

---

## Differences between the English and Hebrew papers

- **Q1c:** the Hebrew wording adds "(odd index)" and says the strings are read "into a list of strings". The English text is shorter and just says "odd locations".
- **Q5:** the English PDF loses the indentation of the code (see the note under Q5). The Hebrew paper keeps it.
- **Cheat sheet:** the Hebrew paper has the Python cheat sheet appended to the exam PDF; the English file does not. The same sheet is in `Exam Cheat Sheet.pdf`.
- **Everything else** (point values, examples, code, console tables) matches.

## Recap

| Question | Tool | One-line answer |
|---|---|---|
| Q1a | `split`, `[0].upper()` | Accumulate first letters, upper-cased |
| Q1b | loop + Q1a | Same order, new list |
| Q1c | `range(1, len, 2)` | Print acronyms at odd indexes |
| Q2a | multiply | `sharePrice * sharesNum` |
| Q2b | threshold | `sharePrice <= val - val * dis / 100` |
| Q2c | compound growth | `val * (1 + growth / 100) ** years` |
| Q2d | validation chain + helpers | Validate, then call Q2a to Q2c |
| Q3a | bubble sort trace | 7 printed lines, list sorted after pass 4 |
| Q3b | swap counts | 3, 2, 2, 1, 0, 0, 0 |
| Q4 | backward merge | `[1, 3, 3, 6, 8, 14, 16, 22]` |
| Q5 | nested-list lookup | `ans == "Yes"`, `[i][0]`, `[i][1]`, `get_discount(...)`, `1 - discount` |

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_02-Numeric Values and Strings]]
- [[Lec_04-Lists, For Loops and Ranges]]
- [[Lec_06-Functions]]
- [[Lec_08-Searching and Sorting]]
