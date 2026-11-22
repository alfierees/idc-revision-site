---
title: "Scope Error, Digit Sums, List Palindrome, Substring Count (2022 Moed A)"
type: past-paper
status: worked-solution
exam: "Computational Thinking & Python (course 26027), Moed A, 09.02.2022"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: unknown
tags:
  - python
  - past-paper
  - worked-solution
  - scope
  - strings
  - dictionaries
  - palindrome
aliases:
  - Python 2022 Moed A
  - Computational Thinking 2022A
  - PP02 Python
subject: computational-thinking-python
in_scope: true
---

# Scope Error, Digit Sums, List Palindrome, Substring Count (2022 Moed A)

> **Computational Thinking & Python Moed A, 09.02.2022**, 50 points in the pages provided: Part One (code understanding, 15 pts) and Part Two (algorithms and data structures, 35 pts).
> Builds on: [[Lec_02-Numeric Values and Strings]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_05-List Comprehension and Tuples]], [[Lec_06-Functions]], [[Lec_07-Dictionaries and Sets]]

> [!info] Question text is translated
> The PDF text layer is garbled Hebrew, so I read the rendered pages and **translated the question text to English**. Code and examples are copied from the paper. The answers are from the official solution file `Exam2022A_SOL.pdf`, which is also in Hebrew; its prose is translated here too. Every answer on this note is `official`; nothing is AI-solved.

> [!warning] Paper layout and typos in the source
> - The header says Part One has "3 items, 15 points in total", but **only item (a), worth 5 points, is printed** in both the exam and the solution file. Items (b) and (c) are not in the source files. Total points visible: 5 + 35 = 40, not 50.
> - The second example in Part Two item (c) is printed as `ount_most_three_substring(...)`, a typo for `count_most_three_substring`.

> [!note] Official solutions tested
> Every official solution was run with `python3 -I` against its own examples. All pass. One has a caveat that the examples do not expose; see the warning in Part Two item (c).

## What this paper tests

| Question | Pts | Core idea | Lecture |
|---|---|---|---|
| Part One (a) | 5 | Predict the output of code that uses a variable outside its scope | [[Lec_06-Functions]] |
| Part Two (a) | 12 | Absolute difference of the sums of odd and even digits of an integer | [[Lec_02-Numeric Values and Strings]], [[Lec_05-List Comprehension and Tuples]] |
| Part Two (b) | 8 | Palindrome check for a list of any element type | [[Lec_04-Lists, For Loops and Ranges]] |
| Part Two (c) | 15 | Most frequent substring of length 3, with and without `str.count` | [[Lec_07-Dictionaries and Sets]] |

> [!tip] Intuition
> Each Part Two question has two official solutions: a long explicit loop and a short Pythonic one. Both earn full marks; pick the one you can write without a slip under exam pressure.

---

## Part One — Code understanding (15 points in total, 3 items stated; only item (a) printed)

*Translated instructions:* In each item of this part a code snippet appears. You must write what will appear on screen after the snippet is run, and explain why. A correct answer without an explanation earns partial credit. If the program crashes, there is no need to specify the exception type (and/or any output that appears before the crash); just state that the program crashes and explain why.

### a. (5 points)

```python
def do_something(num):
    num = 1
    return num + num

x = 4
y = 5
print(do_something(num))
```

Output: ______   Explanation: ______

> [!success] Official answer
> **Output:** the program crashes.
> **Explanation (translated):** the variable `num` is used before it is defined; it exists only inside the function.

**Why.** `num` is a **parameter** of `do_something`, so it lives only in that function's local scope while the function runs. The call `do_something(num)` is on the last line at the global level, and the arguments are evaluated *before* the function starts. At that moment there is no global variable called `num` (only `x` and `y` were defined), so Python raises a `NameError` before the function is even entered. The `x = 4` and `y = 5` lines are distractors: they have different names.

I confirmed the error by running it:

```text
NameError name 'num' is not defined
```

> [!tip] Intuition
> Assigning `num = 1` inside the function would never create a global `num`, and the call line would still fail. To make the code work the call should pass something that exists, such as `do_something(x)`, which returns 2 (the parameter is overwritten with 1 and 1 + 1 = 2).

See [[Lec_06-Functions]] for local and global scope.

---

## Part Two — Algorithms and data structures (35 points, 3 items)

## Item (a) — `odd_even_diff` (12 pts)

*Translated question:* Implement the function `odd_even_diff`, which receives an integer and returns the **absolute** difference between the sum of its odd digits and the sum of its even digits.

Examples from the paper:

```python
print(odd_even_diff(1234567890))
print(odd_even_diff(222222111111))
```

```text
5
6
```

**Check by hand.** For `1234567890` the odd digits are 1, 3, 5, 7, 9 (sum 25) and the even digits are 2, 4, 6, 8, 0 (sum 20), so the difference is 5. For `222222111111` the even digits sum to 12 and the odd digits to 6, so the absolute difference is 6.

### Official solution, detailed

```python
def odd_even_diff(num):
    odd_sum = 0
    even_sum = 0
    for char in str(num):
        if int(char)%2 == 0:
            even_sum+=int(char)
        else:
            odd_sum+=int(char)
    res = odd_sum - even_sum
    if res <0:
        return res*-1
    else:
        return res
```

> [!success] Answer
> Walk through the digits of `str(num)`, add each to `even_sum` or `odd_sum` by its remainder mod 2, then return `res` or `-res` so the result is never negative.

Why it works: `str(num)` lets a `for` loop visit each digit as a one-character string, and `int(char)` turns it back into a number. Multiplying a negative `res` by -1 is the absolute value.

### Official solution, short

```python
def odd_even_diff(num):
    odd_sum = sum([int(m) for m in str(num) if int(m)%2!=0])
    even_sum = sum([int(m) for m in str(num) if int(m)%2==0])
    res = odd_sum - even_sum if odd_sum > even_sum else even_sum - odd_sum
    return res
```

> [!success] Answer
> Two list comprehensions with a filter (`if int(m)%2!=0` for odd, `==0` for even) feed `sum`, and a conditional expression subtracts the smaller sum from the larger so the result is non-negative. See [[Lec_05-List Comprehension and Tuples]].

Both versions were tested on the two examples and return `5` and `6`.

```text
odd_even_diff_detailed 5 6
odd_even_diff_short 5 6
```

---

## Item (b) — `is_list_palindrom` (8 pts)

*Translated question:* Implement the function `is_list_palindrom`, which receives a list of elements **of the same type** (do **not** assume which type, but you may assume all elements have the same type) and returns `True` if the list is a palindrome (it reads the same if reversed) and `False` otherwise.

Examples from the paper:

```python
print(is_list_palindrom([6, 10, 6, 6, 7, 7, 6, 6, 7, 7]))
print(is_list_palindrom([0, 1, 2, 3, 3, 2, 1, 0]))
print(is_list_palindrom(["aaa", "cab", "ddd", "cab", "aaa"]))
```

```text
False
True
True
```

### Official solution 1, comparing mirrored positions

```python
def is_list_palindrom(lst):
    for i in range(len(lst)//2):
        if lst[i] != lst[len(lst)-1-i]:
            return False
    return True
```

> [!success] Answer
> Compare the element at position `i` with its mirror `len(lst)-1-i` for the first half of the list only. Any mismatch returns `False` at once; reaching the end means every pair matched, so return `True`.

The loop needs only `len(lst)//2` steps because comparing the second half would repeat the same pairs. For an odd length the middle element is its own mirror, so it never needs checking (integer division drops it). `!=` works for any type, which is why the question says not to assume a type.

### Official solution 2, compare with the reversed list

```python
def is_list_palindrom(lst):
    return lst == lst[::-1]
```

> [!success] Answer
> The slice `lst[::-1]` is a reversed copy of the list; a palindrome equals its own reverse, and `==` on lists compares element by element.

Both solutions were tested on the three examples, plus `[]` and `[5]`:

```text
pal1 [False, True, True, True, True]
pal2 [False, True, True, True, True]
```

(The five values are for the three examples, the empty list and a one-element list. The empty and single-element lists are palindromes.)

---

## Item (c) — `count_most_three_substring` (15 pts)

*Translated question:* Implement the function `count_most_three_substring`, which receives a string (of **unknown** content) and returns the substring of length 3 that appears the most times in it, the one with the largest count. If several have the same count, it does not matter which one is returned.

**Note (translated):** in the string `"abcd"` there are 2 substrings of length 3: `abc` and `bcd`.

Examples from the paper (the second call is printed with a typo, `ount_...`, in the original):

```python
print(count_most_three_substring('abcabcaaa'))
print(count_most_three_substring('aaaaabbb'))
```

```text
'abc'
'aaa'
```

> [!note] The printed output
> The paper shows the outputs with quotes, as in an interactive session. A real `print(...)` of a string shows no quotes: `abc` and `aaa`. The quotes mean "this is a string".

**Reading the second example.** In `aaaaabbb` the substring `aaa` appears 3 times (starting at positions 0, 1 and 2), more than `aab`, `abb` or `bbb`, so the answer is `aaa`. Note that these occurrences **overlap**: this matters below.

### Official solution without knowing the string `count` method

```python
def count_most_three_substring(s):
    count={}
    for i in range(len(s)-2):
        subs = s[i:i+3]
        count[subs] = count.get(subs,0) + 1
    max_sub_count = 0
    max_sub_key = ''
    for key in count:
        if count[key]>max_sub_count:
            max_sub_count=count[key]
            max_sub_key=key
    return max_sub_key
```

> [!success] Answer
> Slide a window of width 3 across the string (`range(len(s)-2)` gives every start position), and use a dictionary to count each window: `count.get(subs,0) + 1` starts a missing key at 0. Then scan the dictionary for the key with the largest count; the strict `>` keeps the first one found on ties.

Trace of the counting loop on `abcabcaaa` (9 characters, so `i = 0` to `6`):

| i | `subs` | count after this step |
|---|---|---|
| 0 | `abc` | `abc: 1` |
| 1 | `bca` | `bca: 1` |
| 2 | `cab` | `cab: 1` |
| 3 | `abc` | `abc: 2` |
| 4 | `bca` | `bca: 2` |
| 5 | `caa` | `caa: 1` |
| 6 | `aaa` | `aaa: 1` |

`abc` and `bca` tie on 2. A dictionary keeps insertion order, and the strict `>` means the first key to reach the maximum wins, so the result is `abc`, as in the example. For a string shorter than 3 the loop never runs and the function returns the empty string `''`.

See [[Lec_07-Dictionaries and Sets]] for `dict.get` counting.

### Official solution with the string `count` method

```python
def count_most_three_substring(s):
    max_sub_count = 0
    max_sub_key = ''
    for i in range(len(s)-2):
        subs = s[i:i+3]
        subst_count = s.count(subs)
        if subst_count > max_sub_count:
            max_sub_key = subs
            max_sub_count = subst_count
    return max_sub_key
```

> [!success] Answer
> For every window, ask `s.count(subs)` how many times it occurs and remember the best. No dictionary is needed.

Both solutions were run on the paper's examples and both give `abc` and `aaa`:

```text
count_dict abc aaa
count_method abc aaa
```

> [!warning] The `count` version passes the examples but miscounts overlapping matches
> `str.count` counts **non-overlapping** occurrences, so `'aaaaabbb'.count('aaa')` is 1, not 3. The paper's example still passes because every window then ties at 1 and the first window, `aaa`, wins by luck. On a string where the overlap decides the answer the result is wrong. Test input `'aaaaaxyzxyz'` (true counts: `aaa` 3, `xyz` 2):
>
> | Version | Output for `'aaaaaxyzxyz'` |
> |---|---|
> | dictionary | `aaa` (correct) |
> | `count` method | `xyz` (the count method sees `aaa` only once) |
>
> The official answer is kept as given; this is an extra caution, not a failure of the question's own examples. If an exam says "appears", ask whether overlapping occurrences count; here the paper's second example implies they do.

---

## Recap

| Question | Tool | One-line answer |
|---|---|---|
| Part One (a) | local scope | crashes: `num` is not defined at the global level (`NameError`) |
| Part Two (a) | digit loop or list comprehension | odd sum minus even sum, made non-negative |
| Part Two (b) | mirror comparison or `lst == lst[::-1]` | compare each element with its reversed partner |
| Part Two (c) | dict with `get`, or `str.count` | slide a width-3 window, track the highest count |

## Related Notes

[[Lec_02-Numeric Values and Strings]] · [[Lec_04-Lists, For Loops and Ranges]] · [[Lec_05-List Comprehension and Tuples]] · [[Lec_06-Functions]] · [[Lec_07-Dictionaries and Sets]]
