---
title: "Lecture 2: Numeric Values and Strings"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 2
tags:
  - computational-thinking-python
  - python
  - data-types
  - numeric-types
  - booleans
  - strings
  - operators
  - floating-point
subject: computational-thinking-python
in_scope: true
---

# Lecture 2: Numeric Values and Strings

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Integer]], [[Float]], [[Boolean]], [[Arithmetic Operators]], [[Operator Precedence]], [[Comparison Operators]], [[Coercion]], [[String]], [[String Indexing]], [[String Slicing]], [[ASCII and Unicode]]

This lecture covers the basic building blocks of data in Python: the numeric types (`int`, `float`, `bool`) and then strings (`str`). Lecture 1 covered variables, `print`, `input`, casting and naming rules; here we learn what values can be stored and what you can do with them.

## 1. Python's basic types

| Type | Class | Description | Examples |
| --- | --- | --- | --- |
| Integer | `int` | whole number | `3`, `-4` |
| Floating point | `float` | number with a decimal point | `3.0`, `-5.677` |
| Boolean | `bool` | truth value | `True`, `False` |
| String | `str` | sequence of characters | `"Abc"`, `'a string literal'` |

> [!info] Literal
> A **literal** is text that the parser recognises as a direct way of writing a value, such as `2000`, `3.14`, `True` or `"hi"`.

> [!info] Operator and operand
> An **operator** is a symbol (`+`, `==`, `and`) telling Python to perform a mathematical, relational or logical operation and produce a result. The values it acts on are its **operands**.

Use `type(...)` to ask a value what class it belongs to.

## 2. Arithmetic operators

| Operator | Name | Example | Result |
| --- | --- | --- | --- |
| `+` | addition | `10 + 20` | 30 |
| `-` | subtraction | `10 - 20` | -10 |
| `*` | multiplication | `10 * 20` | 200 |
| `/` | division (always a `float`) | `10 / 20` | 0.5 |
| `%` | modulus (remainder) | `20 % 10` | 0 |
| `**` | exponent | `3 ** 2` | 9 |
| `//` | floor division | `3 // 2` | 1 |

### Division, floor division and remainder

`/` always returns a `float`. `//` returns the quotient rounded **down** (towards negative infinity), and `%` returns the remainder.

```python
print(8 / 5)
print(8 // 5)
print(8 % 5)
print(type(8 / 5), type(8 // 5))
print(-7 // 2, -7 % 2)
```

```text
1.6
1
3
<class 'float'> <class 'int'>
-4 1
```

> [!warning] Floor means towards negative infinity
> `-7 // 2` is `-4`, not `-3`. The slide stresses that with a negative operand the result is floored, not truncated towards zero. Python keeps the identity `a == (a // b) * b + a % b`, which is why `-7 % 2` is `1`.

> [!tip] Common use of `%`
> `n % 2 == 0` tests whether `n` is even; `n % 10` gives the last digit of `n`.

## 3. Integers

Integer literals can be written as `2000`, `-2000`, or `2_000` (underscores are allowed as visual separators). A comma is **not** a separator: `2,000` is actually the pair `(2, 0)`, and a leading zero such as `02000` is a syntax error in Python 3.

### No size limit

Unlike many languages, Python 3 integers have **no fixed upper limit**; they grow as large as memory allows.

```python
print(2 ** 10)
print(2 ** 100)
print(len(str(2 ** 10000)))
```

```text
1024
1267650600228229401496703205376
3011
```

`2 ** 10000` has 3011 digits and Python handles it exactly.

> [!note] Operator order with a minus sign
> The slides show `0 - 2**10000` to get a huge negative number "noting Python's operator order": `-2**10000` means `-(2**10000)` because `**` binds tighter than the unary minus.

## 4. Floats

Floats can be written with a decimal point or in scientific notation: `1e5` is `100000.0`, `5e-05` is `0.00005`, `1.6e5` is `160000.0`, `-1.2e-4` is `-0.00012`. Python switches to scientific notation by itself for very large or tiny values (`1e15` prints as `1000000000000000.0`, but `1e16` prints as `1e+16`).

### Limits of floats

Floats have a **limited range** and a **limited precision**.

```python
print(1e308)
print(1e309)          # too big: becomes infinity
print(1 / 1e309)
print(1e-323)
print(1e-324)         # too small: underflows to zero
print(1 / 9)
```

```text
1e+308
inf
0.0
1e-323
0.0
0.1111111111111111
```

- `1e309` becomes `inf`, which is still a `float`. Dividing by it gives `0.0`.
- The slide also shows that a long literal (pi typed to 36 digits) is silently **truncated** to `3.141592653589793` (about 16 significant digits).

### Rounding errors ("Try" slide)

Computers store floats in binary, and many decimal fractions (like `0.1`) have no exact binary form. So small errors appear.

```python
print(0.1 + 0.2)
print(0.1111111111111111 * 9)
print(1e20 + 1)
print(1e-323 / 10)
print(.1 + .1 + .1 == .3)
print(4 + 3.14)
print(3.14 ** 4)
```

```text
0.30000000000000004
1.0
1e+20
0.0
False
7.140000000000001
97.21171216000002
```

> [!warning] Never test floats for exact equality
> `.1 + .1 + .1 == .3` is `False`. The slide's "????" next to `4 + 3.14 = 7.140000000000001` is the same effect. The lecture frames this as a limitation to be aware of; a safe habit is to compare with a small tolerance instead of `==`.

`1e20 + 1` shows **absorption**: the `1` is too small relative to `1e20` to change the stored value.

### Mixing int and float

When an `int` and a `float` appear in the same arithmetic operation, the result is typically a `float`: `4 * 3.14` is `12.56`, `4 / 3.14` is `1.2738853503184713`.

### Arithmetic errors

```python
print(3.14 * 0)
```

```text
0.0
```

Dividing a float by zero raises `ZeroDivisionError`, and a result too large for a float in `**` raises `OverflowError`:

```python
try:
    3.14 / 0
except ZeroDivisionError as error:
    print("ZeroDivisionError:", error)
try:
    10.0 ** 1000
except OverflowError as error:
    print("OverflowError:", error)
```

```text
ZeroDivisionError: division by zero
OverflowError: (34, 'Result too large')
```

> [!note] Version difference
> The slide's traceback reads `float division by zero`; Python 3.12 (where I ran this) prints `division by zero`. Same error, different wording by version.

## 5. Order of operations (precedence)

Python follows maths convention, from highest to lowest priority:

1. Parentheses `( )`
2. Exponentiation `**`
3. Multiplication and division (`*`, `/`, `//`, `%`)
4. Addition and subtraction (`+`, `-`)

Operators of equal precedence are evaluated **left to right**, except `**`, which groups **right to left**.

```python
print(2 * (3 - 1))
print((1 + 1) ** (5 - 2))
print(1 + 2 ** 3)
print(2 * 3 ** 2)
print(2 * 3 - 1)
print(6 + 4 / 2)
print(2 ** 3 ** 2)
```

```text
4
8
9
18
5
8.0
512
```

> [!warning] Right-associative exponent
> `2 ** 3 ** 2` is `2 ** (3 ** 2)` which is `2 ** 9 = 512`, not `(2 ** 3) ** 2 = 64`. The slide flags this with an exclamation mark.

> [!tip] Use parentheses for readability
> `(minutes / 60) * 100` means the same without the brackets, but the brackets make the intent obvious.

## 6. Booleans

A `bool` is either `True` or `False`. Note the **capital first letter**: `true` or `false` is a `NameError`. The type is named after George Boole, the 19th-century English mathematician and logician (1815 to 1864) who founded Boolean algebra.

### and, or, not

| a | b | `a and b` | `a or b` |
| --- | --- | --- | --- |
| True | True | True | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |

| a | `not a` |
| --- | --- |
| True | False |
| False | True |

- `and` is True only when **both** sides are True.
- `or` is True when **at least one** side is True.
- `not` flips the value. `not not True` is `True`.

### Exclusive or (xor)

Python has no built-in `xor` keyword. The slide's truth table for xor is: True exactly when the two inputs **differ** (so True xor True is False, "note the difference" from `or`).

The slide poses it as a question: can you express xor with `and`, `or`, `not`?

> [!note] Reconstructed from the slides
> The slides only ask the question. Two valid answers, which I checked against all four input rows:
> - `(a or b) and not (a and b)`: "at least one, but not both".
> - `a != b`: for booleans this is exactly xor.

```python
for a in (True, False):
    for b in (True, False):
        print(a, b, (a or b) and not (a and b), a != b)
```

```text
True True False False
True False True True
False True True True
False False False False
```

## 7. Comparison operators

Comparison operators take two values and return a `bool`.

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `==` | equal to | `5 == 5` | True |
| `!=` | not equal to | `6 != 6` | False |
| `<` | less than | | |
| `>` | greater than | `3 > 2` | True |
| `<=` | less than or equal | `4 <= 3` | False |
| `>=` | greater than or equal | | |

> [!warning] `=` versus `==`
> `a = 5` is an **assignment** (store 5 in `a`); `a == 6` is a **question** ("is `a` equal to 6?") that returns `False`. Mixing them up is one of the most common beginner bugs. Using `=` where a comparison is intended is a syntax error in a condition.

### Coercion

You can compare numbers of different types. Python implicitly converts (coerces) the narrower type to the wider one before comparing. Here `int` is converted to `float`.

```python
print(19.0 > 7)
print(14.0 == 14)
```

```text
True
True
```

> [!info] Coercion
> **Coercion** is the implicit conversion of a value from one type to another during an operation, so that both operands have a compatible type. Contrast with **casting** (Lecture 1), which is explicit: `int(5.6)`.

### True is 1 and False is 0

`bool` behaves like a number: `True` is 1 and `False` is 0.

```python
print(4 + True)
print(True * 2)
print(True + False)
print(True == 1)
print(True == 0)
```

```text
5
2
1
True
False
```

> [!warning] Do not rely on this
> The lecture explicitly recommends you do **not** use `True` and `False` in arithmetic. It works, but makes code confusing.

## 8. Handy numeric functions

```python
print(min(3, 4))
print(max(3.4, 3.2))
print(abs(-1))
print(int(5.6))
print(round(5.6))
```

```text
3
3.4
1
5
6
```

- `int(5.6)` **truncates** (drops the fraction), giving `5`.
- `round(5.6)` rounds to the nearest integer, giving `6`.

> [!note] Beyond the slides
> `round` rounds exact halves to the nearest **even** number: `round(2.5)` is `2` and `round(3.5)` is `4` (tested). This is not in the slides.

Python also has a `complex` numeric type; the lecture only mentions it exists.

## 9. Class practice: two numbers in, four values out

Task: read two real numbers and print, on one line, the smallest, the geometric mean, the arithmetic mean and the largest. The slide's example output for inputs `5` and `2.0` is `2.0 3.1622776601683795 3.5 5.0`.

> [!note] Reconstructed from the slides
> The slide only gives the task and example run. This solution is my own; I ran it with the inputs 5 and 2.0 supplied.

```python
first = float(input("Input first value: "))
second = float(input("Input second value: "))
smallest = min(first, second)
largest = max(first, second)
geometric_mean = (first * second) ** 0.5
arithmetic_mean = (first + second) / 2
print(smallest, geometric_mean, arithmetic_mean, largest)
```

```text
2.0 3.1622776601683795 3.5 5.0
```

The geometric mean of two numbers is the square root of their product, written here as `** 0.5`. Converting both inputs with `float(...)` makes the largest print as `5.0`, matching the slide.

## 10. Strings

A **string** is a sequence of characters used to store text. A string literal can use double or single quotes; Python treats them identically. Pick whichever avoids escaping:

```python
print("You've got an error!")
print('Some "Quoted text" in a string!')
```

```text
You've got an error!
Some "Quoted text" in a string!
```

### The empty string

`""` is a valid string with no characters. It is invisible but exists, and plays the role for strings that `0` plays for numbers (for example `"Israel" + ""` is still `"Israel"`).

### Concatenation and repetition

`+` joins strings and `*` repeats them.

```python
print("Py" + "thon")
print("Hello " + "World")
print("Hello" * 3)
print(("Hello" + "World") * 2)
print(repr("Bakbuk " * 0), repr("Bakbuk " * -3))
```

```text
Python
Hello World
HelloHelloHello
HelloWorldHelloWorld
'' ''
```

Multiplying by `0` or a negative integer gives the **empty string** (no error). Multiplying by a float, like `* 2.7`, **is** an error:

```python
try:
    "Bakbuk " * 2.7
except TypeError as error:
    print("TypeError:", error)
```

```text
TypeError: can't multiply sequence by non-int of type 'float'
```

> [!tip] Types matter
> `"3" + 4` is a `TypeError` (you cannot add a string and an int), while `"3" * 4` is `"3333"`. Cast with `int()` or `str()` when you mean the other thing.

### `len`

`len(s)` returns the number of characters, as an `int`: `len("python")` is `6`, `len("a" * 3)` is `3`, `len("")` is `0`, and `len("a b c d e")` is `9` (spaces count).

### Equality

`==` and `!=` compare strings character by character: `"ab" == "a" + "" + "b"` is `True` and `"ab" != "a b"` is `True`. Case and spaces matter.

## 11. String methods

Methods are functions that belong to a class. The slides call them in the form `str.method(value, ...)`.

```python
print(str.upper("Hello"))
print(str.lower("World"))
print(str.replace("breaking news", "breaking", "fake"))
print(str.upper(str.replace("breaking news", "breaking", "fake")))
```

```text
HELLO
world
fake news
FAKE NEWS
```

> [!note] Other spelling
> You will also see the dot form `"Hello".upper()`, which does the same thing. The slides use the `str.` form to stress that the method belongs to the class `str`. Strings are never changed in place: each call returns a **new** string.

Further methods the slides suggest looking up: `find`, `startswith`, `endswith`, `isalpha`, `isdigit`, `islower`, `strip`, `rstrip`.

## 12. Indexing with `[]`

![[Lec02_string_indexing.png]]

Each character has a position. Indexing starts at **0**, and negative indexes count back from the end (`-1` is the last character).

```python
s = "Python"
print(s[0], s[1], s[5])
print(s[-1], s[-2], s[-6])
print(s[2] == s[-4])
print(s[0] + "..." + s[-1])
```

```text
P y t
n o P
True
P...n
```

Going past either end raises `IndexError: string index out of range`; that covers `s[6]` and `s[-7]`.

> [!example] Quiz from the slide: last character
> Which returns the last character of `s`: `s[len(s)]` or `s[len(s) - 1]`?
> Answer: **`s[len(s) - 1]`** (and `s[-1]` is simpler). `s[len(s)]` is one past the end and raises `IndexError`.

Each `s[i]` is itself a string of length 1 (`type(s[0])` is `str`).

## 13. Slicing with `[n:m]`

A **slice** takes part of a string. `s[n:m]` includes index `n` and **excludes** index `m`. Omit `n` to start at the beginning, omit `m` to go to the end.

```python
s = "Monty Python"
print(s[0:5])
print(s[6:12])
print(s[:3])
print(s[3:])
```

```text
Monty
Python
Mon
ty Python
```

Slices work with negative numbers too, and an empty result is not an error:

```python
s = "Python"
print(s[0:6])
print(s[0:-1])
print(repr(s[-3:-4]))
print(s[-4:-3])
```

```text
Python
Pytho
''
t
```

`s[-3:-4]` is empty because the start (index 3) comes after the end (index 2). Remember that slicing is forgiving whereas single-index access is not.

## 14. Comparing strings, ASCII and Unicode

Strings are ordered with `<`, `>` and so on. The slides' examples:

```python
print("Benny" > "Amir")
print("Amir" > "amir")
print("0" > "1")
print("0" > "?")
print("0" > "")
print("" > " ")
```

```text
True
False
False
False
True
False
```

So how does Python compare strings? Every character is stored as a number (its **code point**), and strings are compared character by character from the left using those numbers, like words in a dictionary. This explains the results:

- Uppercase letters have smaller codes than lowercase, so `"Amir" > "amir"` is `False`.
- `"0"` has code 48, `"1"` has 49 and `"?"` has 63, so `"0" > "1"` and `"0" > "?"` are `False`.
- The empty string is smaller than any non-empty string (`"0" > ""` is `True`; `"" > " "` is `False`).
- Comparing a string with a number, such as `"0" > 0`, raises a `TypeError`.

> [!note] Reconstructed from the slides
> The slide asks the question "how do you think Python compares strings?" and then moves to ASCII; the character-by-character rule above is the explanation that links them.

### ASCII and Unicode

- **ASCII** maps each character to a number (for example space is 32, `!` is 33, `"` is 34, `#` is 35, `%` is 37, `*` is 42). In memory strings are sequences of numbers in binary.
- **Special characters** such as `\n` (new line) and `\t` (tab) are ASCII characters too.
- **Unicode** extends ASCII to cover other symbols, including Hebrew and the euro sign.

| Function | Does | Example |
| --- | --- | --- |
| `ord(c)` | character to its code point | `ord('a')` gives `97` |
| `chr(i)` | code point to character | `chr(97)` gives `'a'` |

```python
print(ord('a'), chr(97))
print(chr(8364), ord('€'))
s = 'Ice Cream'
print(ord(s[0]) - ord('A'))
print(chr(ord('1') + 3))
```

```text
97 a
€ 8364
8
4
```

> [!tip] Why `ord` and `chr` are useful
> `ord(s[0]) - ord('A')` is the letter's position in the alphabet (`'I'` is 8 letters after `'A'`). `chr(ord('1') + 3)` shows digit characters are consecutive, so you can do arithmetic on them.

The slide ends with two open questions: is there a limit on string length, and is there a string Python cannot represent? The slides give no answer. (My understanding: length is limited only by memory, and since Python 3 strings are Unicode, essentially any text is representable.)

## 15. The `in` operator

`in` checks whether one string is a **substring** of another and returns a `bool`. `not in` is its own operator.

```python
s = "Introduction to Python"
print("H" in "Hello", "ell" in "Hello", "G" in "Hello", "bell" in "Hello")
print(not "bell" in "Hello")
print("bell" not in "Hello")
print('i' in s, "to" in s, "ot" in s, "introduiction" in s, "" in s, s in s)
```

```text
True True False False
True
True
True True False False True True
```

Points the slide's "test yourself" brings out:

- The match is **case-sensitive** (`"introduiction"` is not in `s`).
- The substring must be contiguous and in order: `"ot"` does not occur in `s`, even though `"to"` does.
- The empty string is in every string, and every string is in itself.
- A quirk: `"Introduiction in s"` (quote placed wrongly in the slide) is just a string literal, which is truthy, so it evaluates to that string and does not test anything. This is a typo trap to be aware of.

## 16. Appendix: the "Whatsapper" example

The deck ends with a worked example following the course's problem-solving recipe: define input/output, write pseudo code, implement.

- **Input:** a string of length at least 3. **Output:** the "whatsapped" string.
- **Pseudo code:** set the multipliers `m1, m2, m3` and the number of exclamation marks; read `s`; build the result from the first character repeated `m1` times, the middle, the second-to-last character repeated `m2` times, and the last character repeated `m3` times; print it plus `"!"` repeated.

```python
num_of_exclamations = 4
m1, m2, m3 = 3, 5, 8
s = input("Please enter a string (of len>=3): ")
c_first = s[0] * m1
c_one_before_last = s[-2] * m2
c_last = s[-1] * m3
s_whatsapped = c_first + s[1:-2] + c_one_before_last + c_last
print(s_whatsapped + "!" * num_of_exclamations)
```

Running this with the input `You are crazy` and the slide's multipliers:

```text
YYYou are crazzzzzyyyyyyyy!!!!
```

> [!warning] Slide example does not match the code
> The slide's sample output is `YYou are crazzzyy!!!!` (multipliers 2, 3, 2), whereas the code on the last slide sets `m1, m2, m3 = 3, 5, 8`. The sample output was produced with different multipliers; I ran both to confirm. Also note `s[1:-2]` stops before the second-to-last character, which is why that character is not duplicated by the middle part.

## Summary

- Basic types: `int` (unbounded in Python 3), `float` (finite range and precision, so rounding errors and `inf`), `bool` (`True`/`False`, behaves like 1/0) and `str`.
- Arithmetic: `/` always gives a float; `//` floors; `%` is the remainder; `**` groups right to left and binds tighter than `*`.
- Never trust `==` on floats after arithmetic: `0.1 + 0.2` is not `0.3`.
- Booleans combine with `and`, `or`, `not`; xor is `(a or b) and not (a and b)` or `a != b`.
- `=` assigns, `==` compares; mixed int/float comparisons coerce to float.
- Strings are zero-indexed sequences: `s[i]`, `s[-1]`, slice `s[n:m]` (excludes `m`), `len`, `+`, `*`, `in`, `upper`, `lower`, `replace`.
- Strings compare via character codes (`ord`, `chr`), so uppercase sorts before lowercase and the empty string is smallest.

## Related notes

- [[Computational Thinking & Python]] (course hub)
- [[Integer]], [[Float]], [[Boolean]], [[String]], [[String Slicing]], [[ASCII and Unicode]]
