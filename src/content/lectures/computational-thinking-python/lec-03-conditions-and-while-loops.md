---
title: "Lec 03: Conditions and While Loops"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 3
tags:
  - computational-thinking-python
  - python
  - conditionals
  - if-else
  - elif
  - ternary-operator
  - short-circuit-evaluation
  - while-loop
  - break-continue
  - nested-loops
  - floating-point
  - primality-test
subject: computational-thinking-python
in_scope: true
---

# Lecture 3: Conditions and While Loops

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Conditional Statement]], [[If-Else Statement]], [[Elif]], [[Conditional Expression]], [[Short-Circuit Evaluation]], [[While Loop]], [[Break and Continue]], [[Infinite Loop]], [[Nested Loop]], [[Floating-Point Error]]

So far programs ran top to bottom. This lecture adds the two tools that let a program **choose** (conditions) and **repeat** (while loops). Source: slides 1 to 45 (45 slides, including the appendix on primes).

## 1. Conditional statements

A simple program is **linear**: one statement after another. Most real programs need to branch on the values of variables, and that is what a [[Conditional Statement]] does.

```python
if 3333 % 3 == 0:
  print("3333 is divisible by 3")

if 3333 % 4 == 0:
  print("3333 is divisible by 4")
```

```text
3333 is divisible by 3
```

(The slide says the second `if` prints nothing; 3333 is not divisible by 4. The first one does print, because the digits of 3333 sum to 12.)

### Syntax rules

- The **colon** after the condition opens a new block (other languages use `{`).
- The block is the set of lines **indented** underneath. The first line that is not indented that way is outside the block.
- Tabs or spaces both work, but the indentation width must be **consistent within a block**; use one style across the whole program.

```python
n = 26
if n % 13 == 0:
  print(n, "is divisible by 13")
  print(n, "/ 13 = ", int(n/13))
if n % 13 != 0:
  print(n, "is not divisible by 13")
print("Thank You")
```

```text
26 is divisible by 13
26 / 13 =  2
Thank You
```

> [!note] The slide used `input()`
> The slide reads `n` with `int(input("Please enter a number: "))` and shows the output for the input 26. Here `n = 26` is set directly so the snippet runs on its own.

`Thank You` is not indented, so it prints whatever `n` is.

### `else`

Two `if` statements that test a condition and its opposite (as above) are better written as one **[[If-Else Statement]]**. Python evaluates the condition once; if it is `True` it runs the `if` block, otherwise it runs the `else` block.

```python
n = 25
if n % 13 == 0:
  print(n, "is divisible by 13")
  print(n, "/ 13 =", int(n/13))
else:  # same as: if n % 13 != 0
  print(n, "is not divisible by 13")
print("Thank You")
```

```text
25 is not divisible by 13
Thank You
```

> [!warning] Bug on the slide
> The slide's `else` example has `print(n+"/3 =", int(n/13))`. Here `n` is an `int`, so `n + "/3 ="` raises a `TypeError`, and the `/3` should be `/13`. Use `print(n, "/ 13 =", int(n/13))`.

### Flowcharts and nested conditions

A **flowchart** is often a good alternative to pseudo-code for seeing how control moves. The slide's task: test whether a number is divisible by 4 or by 8. Test 4 first; if it fails there is no need to test 8 (anything divisible by 8 is divisible by 4).

![[Lec03_nested_if_flowchart.png]]

An `if` inside another `if` is a **nested** condition:

```python
n = 16
if n % 4 == 0:
  if n % 8 == 0:   # nested "if"
    print("n is divisible by 4 and 8")
  else:            # nested "else"
    print("n is divisible by 4, not 8")
else:
  print("n is not divisible by 4 or 8")
```

```text
n is divisible by 4 and 8
```

Each `else` belongs to the `if` at the **same indentation**.

### Example: maximum of three variables

The slides show four ways to compute the max of `x1, x2, x3`, and ask "Which one is your favourite?" They illustrate that one problem has many correct programs.

| Approach | Idea | Code |
| --- | --- | --- |
| Decision tree | Nested `if`/`else` compares pairs, like a tournament | `if x1 >= x2:` then `if x1 >= x3:` ... |
| Sequential | Start with `x1` as the best so far, update if a later one beats it | `max3 = x1`, then two separate `if`s |
| Expression | One line using the conditional expression | `max3 = x1 if x1 >= x2 and x1 >= x3 else x2 if x2 >= x3 else x3` |
| Built in | Let Python do it | `max3 = max(x1, x2, x3)` |

```python
x1, x2, x3 = 1, 2, 3

# decision tree approach
if x1 >= x2:
  if x1 >= x3:
    max3 = x1
  else:
    max3 = x3
else:
  if x2 >= x3:
    max3 = x2
  else:
    max3 = x3
print(max3)

# sequential approach
max3 = x1
if x2 > max3:
  max3 = x2
if x3 > max3:
  max3 = x3
print(max3)

# built in
print(max(x1, x2, x3))
```

```text
3
3
3
```

> [!warning] Indentation on slide 11
> The decision-tree code on slide 11 has its `else` lines misaligned (and slide 12 has a typo `>-` for `>=`). The version above is the corrected layout that matches the slide's flowchart.

> [!tip] Which to prefer?
> The built-in `max` is shortest and least error-prone. The sequential version generalises to any number of values. The decision tree makes the logic explicit but grows fast (the number of branches explodes with more variables).

### `elif` and `pass`

`elif` is short for "else if": a chain where only the **first** true branch runs.

```python
n = 0
if n < 0:
  print("number is negative")
elif n == 0:
  print("number is zero")
else:
  print("number is positive")
```

```text
number is zero
```

The slide's longer example classifies a one-character string. The order of the branches matters, because the first true branch wins.

```python
def classify(s):
  if type(s) != str:
    print("s is not a string!")
  elif not s:               # an empty string is falsy
    print("string is empty")
  elif len(s) > 1:
    print("string is of more than one character")
  elif '0' <= s <= '9':     # same as '0' <= s and s <= '9'
    print(s, "is a digit")
  elif 'a' <= s <= 'z':
    print(s, "is a lowercase letter")
  elif 'A' <= s <= 'Z':
    print(s, "is an uppercase letter")
  elif ord(s) < 32:
    pass                    # pass does nothing
  elif ord(s) <= 255:
    print(s, "is an ascii character")
  elif ord(s) >= 256:
    print("string is a unicode character #", ord(s))
  else:
    print("how on earth did I get here?!")

for text in ["#", "7", "q", "Q", "", "ab", "\x07", "€"]:
  classify(text)
```

```text
# is an ascii character
7 is a digit
q is a lowercase letter
Q is an uppercase letter
string is empty
string is of more than one character
string is a unicode character # 8364
```

The slide asks what happens for the input `#`: it is not a digit or a letter, `ord('#')` is 35 (not below 32, but at most 255), so it prints `# is an ascii character`. The `"\x07"` (bell, code 7) matches `ord(s) < 32`, where `pass` does nothing, so it prints nothing.

The `else` at the bottom is unreachable: every code point is either at most 255 or at least 256, which is the slide's question "is there a value of `s` for which the program executes this line?" (no, for a one-character string).

> [!info] `pass`
> `pass` is a statement that does nothing. Python needs *some* statement in every block, so `pass` is a placeholder for "intentionally empty".

> [!example] Recap of conditions (slide 15)
> Conditional expressions, conditional statements, short-circuit evaluation, flowcharts, and `if` / `else` / `elif` / `pass`.

## 2. Conditional expressions (the ternary operator)

Python has a one-line, value-producing form of `if`:

$$
\texttt{value\_if\_true if condition else value\_if\_false}
$$

```python
a = 5
b = a if a >= 0 else -a      # absolute value
print(a, b)

a = -3
b = a if a >= 0 else -a
print(a, b)

a = 5
b = 3
c = a if a >= b else b       # max of two
print(a, b, c)

a = 2
c = a if a >= b else b
print(a, b, c)
```

```text
5 5
-3 3
5 3 5
2 3 3
```

Python also has `abs(a)` and `max(a, b)`, so these are only illustrations.

Because it is an **expression**, it can sit inside a call or an assignment, can mix result types, and can even nest (though nesting is ugly):

```python
temperature = 32
print("Hot" if temperature >= 30 else "Cold")
print(True if 12 % 2 == 0 else "12 is not even")

a = 10
b = 1 if a > 0 else -1 if a < 0 else 0     # sign of a
print(a, b)
```

```text
Hot
True
10 1
```

## 3. Short-circuit evaluation

[[Short-Circuit Evaluation]]: in `A and B`, Python evaluates `B` only if `A` is true; in `A or B`, it evaluates `B` only if `A` is false. This means the right-hand side can be protected by the left-hand side, called a **guard**.

```python
n = 0
print(n % 2 == 1 and 1 / n < 0.001)   # left side False, so 1 / n never runs
```

```text
False
```

```python
n = 0
print(n % 2 == 0 and 1 / n < 0.001)   # left side True, so 1 / n runs
```

```text
Traceback (most recent call last):
  ...
ZeroDivisionError: division by zero
```

Both are the slide's examples (checked here). Common guard patterns from the slide:

```python
x > 0 and 1 / x < 0.0001
len(s) > 0 and s[0] == '#'     # ignore lines starting with '#'
```

> [!tip] Why it matters
> Order of operands is not cosmetic. `len(s) > 0 and s[0] == '#'` is safe on an empty string; reversing it would raise an `IndexError`.

## 4. While loops

A [[While Loop]] repeats its body **as long as** the condition holds. The condition is tested *before* each pass, so the body may run zero times.

```python
m = 1
while m <= 10:
  print(m)
  m = m + 1
```

```text
1
2
3
4
5
6
7
8
9
10
```

![[Lec03_while_flow.png]]

A loop needs three things: **initialise** the variable (`m = 1`), a **condition** (`m <= 10`), and an **update** inside the body (`m = m + 1`) that moves toward making the condition false.

### Example: all divisors of n = 100

Count `m` down from `n` and print each `m` that divides `n`:

```python
n = 100
m = n
while m > 0:
  if n % m == 0:
    print(m)
  m = m - 1
```

```text
100
50
25
20
10
5
4
2
1
```

> [!warning] Infinite loops
> Forget `m = m - 1` and the condition `m > 0` stays true forever: an [[Infinite Loop]].

### Indentation changes the meaning

Slide 22 asks: "Is there a difference between the programs? Which one is correct?" Three programs differ **only in where `m = m - 1` is placed**. (The slide's code boxes wrap badly, so the exact indentation below is reconstructed from the idea of the question.)

> [!note] Reconstructed from the slides
> The slide's layout is wrapped and hard to read. The three variants below are my reading of the intended placements, not a verbatim copy.

| Variant | Where `m = m - 1` sits | Result |
| --- | --- | --- |
| A | Not indented: after the loop | `m` never changes inside the loop, so it is an infinite loop |
| B | Indented to the `while` body, same level as the `if` | Correct: runs every pass |
| C | Indented inside the `if` | Only decrements when `m` divides `n`; once `m` does not divide `n` it never changes again, so an infinite loop |

Only variant B is correct. This is why Python's indentation is part of the program's meaning.

> [!tip] Trace variant C
> Start `m = 100`: it divides, print 100, `m` becomes 99. Now `100 % 99 != 0`, so the `if` is skipped and `m` stays 99 forever.

### Looping on user input

Keep asking until a condition is met, using a flag variable:

```python
done = False
while not done:
  s = input("Please enter a string that starts with an uppercase letter: ")
  done = s and 'A' <= s[0] <= 'Z'     # test s is not empty first (short-circuit)
print(s)
```

Note the guard `s and ...`: an empty string is falsy, so `s[0]` is never evaluated on empty input.

## 5. `break` and `continue`

**`break`** terminates the **nearest enclosing loop** immediately, skipping the rest of the body.

```python
while True:   # seriously?!
  s = input("Please enter a string that starts with an uppercase letter: ")
  if s and 'A' <= s[0] <= 'Z':
    break      # exit the while loop
print(s)
```

It is handy for exiting when some condition occurs, but the slide notes it is considered **"bad programming"** style when overused: the loop's real exit condition is hidden in the body instead of in the `while` line.

**`continue`** skips the rest of the **current iteration** and jumps to the next one (re-testing the condition).

```python
while True:
  s = input("Please enter a string (<enter to exit>): ")
  if not s:
    break                 # empty input: leave the loop
  if s.startswith('#'):
    continue              # ignore lines that start with #
  print(str.upper(str.replace(s, " ", '')))
print("Thanks You!")
```

Here `break` handles the exit and `continue` filters out comment lines.

| Statement | Effect | Next thing that happens |
| --- | --- | --- |
| `break` | Leaves the nearest enclosing loop | Code after the loop |
| `continue` | Ends the current pass only | The loop condition is tested again |
| `pass` | Does nothing | Next statement in the block |

See [[Break and Continue]].

## 6. Worked problem: is a number prime?

The slides follow a **problem-solving recipe**: define input and output, write pseudo-code, then implement in Python.

1. **Problem definition**: input is a natural number; output is `True` or `False` for prime or not.
2. **Pseudo-code**:
   - `n` = number from input
   - for all `m` in `[2, n-1]`, test whether `m` divides `n`
   - if all tests are false, `n` is prime
   - print the result
3. **Implementation**:

```python
n = 29
n_is_prime = True
m = 2
while m < n:
  if n % m == 0:
    n_is_prime = False
  m += 1               # same as m = m + 1
print(n, "is prime" if n_is_prime else "is not prime")
```

```text
29 is prime
```

The slide asks "Can we improve this code?" (it keeps checking even after finding a divisor). The appendix (slides 39 to 45) improves it in steps; see section 9.

> [!warning] The slide code says 1 is prime
> Because the loop never runs for `n = 1` (since `m = 2` is not below 1), the flag stays `True`. The slide's improved versions also set `n_is_prime = n < 3 or ...`, which marks 1 as prime. Mathematically 1 is **not** prime; the slides ignore this edge case. I ran the code: `1 is prime` is what it prints.

## 7. Nested while loops

Putting a loop inside a loop gives the **inner loop** a full run for every pass of the **outer loop**. See [[Nested Loop]]. The slides pose these as exercises (no solutions shown); the solutions below are mine and were run to check the output.

> [!note] Reconstructed from the slides
> The slides only state the tasks (slides 31 to 35). The code is my own solution.

**Print all primes from 1 to n**: hint on the slide is a nested loop. The outer loop walks `n`, the inner loop tests divisors. The full solution appears in the appendix (section 9).

**10 by 10 multiplication table**: outer loop is the row, inner loop is the column.

```python
row = 1
while row <= 10:
  col = 1
  line = ""
  while col <= 10:
    line += str(row * col) + " "
    col += 1
  print(line.strip())
  row += 1
```

```text
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100
```

(Output as on the slide; I only ran the same loop at size 3 by 3 to check the pattern.)

**All pairs of lowercase letters**, `aa` to `zz` (676 lines). Outer loop picks the first letter, inner loop the second:

```python
first = ord('a')
while first <= ord('z'):
  second = ord('a')
  while second <= ord('z'):
    print(chr(first) + chr(second))
    second += 1
  first += 1
```

```text
aa
ab
ac
...
zx
zy
zz
```

**Round robin** (each row is the alphabet rotated one more step to the right):

```python
alphabet = "abcdefghijklmnopqrstuvwxyz"
shift = 0
while shift < 26:
  print(alphabet[26 - shift:] + alphabet[:26 - shift])   # shift 0 gives the original
  shift += 1
```

```text
abcdefghijklmnopqrstuvwxyz
zabcdefghijklmnopqrstuvwxy
yzabcdefghijklmnopqrstuvwx
...
bcdefghijklmnopqrstuvwxyza
```

> [!tip] Why `alphabet[26 - shift:]` works at shift 0
> `alphabet[26:]` is an empty string and `alphabet[:26]` is the whole alphabet, so shift 0 prints the original row.

**ASCII art** (a growing triangle of stars). The slide shows rows of 1, 2, 3, ... stars; the rows can be built with string repetition:

```python
rows = 5
star_count = 1
while star_count <= rows:
  print("*" * star_count)
  star_count += 1
```

```text
*
**
***
****
*****
```

(The slide's second pattern is a block of wider rows of stars; the same idea applies.)

## 8. Floating-point traps in loops

Slide 36 shows two programs and asks what they print:

```python
# program 1
start = 0.1
while start != 1:
  print(start)
  start += 0.3

# program 2
start = 0.1
while start != 0.9:
  print(start)
  start += 0.2
```

Program 1 adds 0.3 each time and prints 0.1, 0.4, 0.7; the next value is exactly 1.0 in floating point, so it stops (I ran it). Program 2 is the trap: it **never** equals 0.9 exactly, so it loops forever.

```text
0.1
0.30000000000000004
0.5
0.7
0.8999999999999999
1.0999999999999999
...
```

(That is the slide's output for program 2, and I reproduced it: the loop goes on forever, so I only checked the first six values.)

> [!warning] Never use `==` or `!=` with floats
> Decimal fractions like 0.1 cannot be stored exactly in binary, so repeated addition accumulates tiny errors (the accumulated value is `0.8999999999999999`, not `0.9`). See [[Floating-Point Error]].

Two fixes from the slide:

```python
# fix 1: use < instead of !=
start = 0.1
while start < 0.9:
  print(start)
  start += 0.2
```

```text
0.1
0.30000000000000004
0.5
0.7
0.8999999999999999
```

Fix 1 stops, but it prints `0.8999999999999999` as a last value (which is just below 0.9).

```python
# fix 2: compare with a small tolerance (epsilon)
start = 0.1
epsilon = 0.00001
while start < 0.9 - epsilon:
  print(start)
  start += 0.2
```

```text
0.1
0.30000000000000004
0.5
0.7
```

Fix 2 treats 0.8999999999999999 as "close enough to 0.9" and stops before it.

| Approach | Behaviour on `0.1, 0.3, ... 0.9` | Risk |
| --- | --- | --- |
| `!=` | Never equals 0.9 exactly | Infinite loop |
| `<` | Includes the near-0.9 value | Last iteration may or may not run depending on rounding |
| `< target - epsilon` | Stops cleanly | Must choose epsilon sensibly |

> [!example] Recap of while loops (slide 38)
> `while`, `break`, `continue`, infinite loops.

## 9. Appendix: improving the primality test

Each version fixes one inefficiency of the basic test. I ran takes 1 to 3 on sample inputs (4, 9, 13, 15, 25, 49, 97, 100) and they agree; takes 4 and 5 only add input handling and are not run here because they depend on `input()`.

| Version | Improvement | Why it is valid |
| --- | --- | --- |
| Take 1 (basic) | Tests every `m` from 2 to `n - 1` | Correct but slow; keeps going after a divisor is found |
| Take 2 | Skip even numbers; stop once non-prime found | Any even number above 2 is divisible by 2, so test 2 once, then only odd `m` |
| Take 3 | Stop at the square root of `n` (`m ** 2 <= n`) | If `n = a * b`, one factor is at most the square root of `n` |
| Take 4 | Reject non-numeric input with `isnumeric()` | Input handling, loops until valid |
| Take 5 | Wrap in an outer loop until the user enters an empty string | Reuses the test for many inputs |

**Take 3** (the core algorithm):

```python
n = 29
n_is_prime = n < 3 or n % 2 == 1      # 1 and 2 count as prime; even numbers above 2 do not
m = 3                                 # start at 3, test odd divisors only
while m ** 2 <= n and n_is_prime:     # no need to go beyond sqrt(n); stop early once a divisor is found
  if n % m == 0:
    n_is_prime = False
  m += 2
print(n, "is prime" if n_is_prime else "is not prime")
```

```text
29 is prime
```

The loop condition combines two tests with `and`; both must hold to keep looping.

> [!example] Trace: n = 29 and n = 21
> | n | m | m squared | `m**2 <= n`? | `n % m == 0`? | n_is_prime |
> | --- | --- | --- | --- | --- | --- |
> | 29 | 3 | 9 | yes | no (2) | True |
> | 29 | 5 | 25 | yes | no (4) | True |
> | 29 | 7 | 49 | no, loop ends | | True: prime |
> | 21 | 3 | 9 | yes | yes (0) | False; loop ends |

> [!tip] Why only up to the square root?
> If `n = a * b` with both `a` and `b` greater than the square root of `n`, then `a * b` would exceed `n`. So any composite number has a divisor no larger than its square root; if none is found up to there, none exists.

**Takes 4 and 5** add input handling and an outer loop. Slide 43 rejects non-numeric text:

```python
while True:
  s = input("Please enter a number: ")
  if s.isnumeric():
    break
  print(s, "is not a numeric string")
n = int(s)
```

Slide 44 (take 5) wraps everything in an outer loop until the user presses enter on an empty line, using `break` for the empty string and `continue` for invalid text:

```python
while True:
  s = input("Please enter a number: ")
  if not s:
    break
  elif not s.isdigit():
    print(s, "is not a number")
    continue
  n = int(s)
  n_is_prime = n < 3 or n % 2 == 1
  m = 3
  while m ** 2 <= n and n_is_prime:
    if n % m == 0:
      n_is_prime = False
    m += 2
  print(n, "is prime" if n_is_prime else "is not prime")
print("goodbye")
```

> [!warning] Indentation on slide 44
> The slide's version has the `elif` and later lines at inconsistent indentation (a layout glitch); the code above is the consistently indented form.

**All primes up to a limit** (slide 45) is a nested loop: the outer loop runs `n` from 1 to `max_number_to_test`, the inner loop is the Take 3 test, and extra counters and flags control what is printed. A compact version of the same idea:

```python
max_number_to_test = 30
n = 1
while n <= max_number_to_test:
  n_is_prime = n < 3 or n % 2 == 1
  m = 3
  while m ** 2 <= n and n_is_prime:
    if n % m == 0:
      n_is_prime = False
    m += 2
  if n_is_prime:
    print(n)
  n += 1
```

```text
1
2
3
5
7
11
13
17
19
23
29
```

> [!warning] 1 is printed as prime
> As noted above, the slide's logic classifies 1 as prime. The slide's own program has options `print_number_of_iterations` and `print_only_primes` and counts `num_of_iterations` for each test; the compact version above drops those options for readability.

## Summary

- **`if` / `else` / `elif`** choose between blocks; indentation defines the block, the colon opens it. In an `elif` chain only the first true branch runs, so order matters. `pass` is an empty placeholder.
- A **flowchart** or decision tree makes nested conditions visible; the same problem (like max of three) has many correct implementations.
- The **conditional expression** `a if cond else b` is a one-line, value-producing `if`.
- **Short-circuit evaluation** means `and` / `or` stop as soon as the answer is known, so the left operand can guard the right (`len(s) > 0 and s[0] == '#'`).
- A **while loop** needs initialisation, a condition, and an update that makes progress; a misplaced update (for example inside the `if`) gives an **infinite loop**.
- `break` leaves the nearest loop; `continue` skips to the next iteration. Overusing `break` is considered poor style.
- **Nested loops** run the inner loop fully for each outer pass: multiplication tables, letter pairs, rotated rows, star triangles, all primes up to `n`.
- **Never compare floats with `==` / `!=`** in loop conditions: use `<` or a tolerance (epsilon).
- **Primality**: test divisors up to the square root of `n`, only odd ones, and stop at the first divisor.

## Related notes

- [[Computational Thinking & Python]]
- [[Conditional Statement]], [[If-Else Statement]], [[Elif]], [[Conditional Expression]]
- [[Short-Circuit Evaluation]], [[While Loop]], [[Break and Continue]], [[Infinite Loop]], [[Nested Loop]], [[Floating-Point Error]]
