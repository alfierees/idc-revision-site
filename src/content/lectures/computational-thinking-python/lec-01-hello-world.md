---
title: "Lec 01 - Hello World"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 1
tags:
  - computational-thinking-python
  - python-basics
  - variables
  - types
  - input-output
  - casting
subject: computational-thinking-python
in_scope: true
---

# Lec 01: Hello World

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Programming Language]], [[Interpreter]], [[Compiler]], [[Bytecode]], [[Pseudo Code]], [[Bug]], [[Robustness]], [[Variable]], [[Assignment]], [[Type Casting]]

This lecture takes you from "what is a programming language" to a first working program that reads a temperature, converts it and prints the answer. By the end you should be able to explain every line of the Celsius-to-Fahrenheit program in [[#The running example]].

## 1. Why Python

The slides give five reasons: it is **popular**, **intuitive** (easy to learn), has **lots of libraries**, a strong **community and tooling**, and is the main language of **data science**. They add a caution: Python may not be the first-choice language in ten years, so the concepts matter more than the syntax.

## 2. Human vs formal languages

| Natural languages | Formal (programming) languages |
| --- | --- |
| Hebrew, English, Russian, Arabic... | C, C++, Java, JavaScript, Python... |
| Can be ambiguous or vague | No ambiguity |
| Syntax conventions exist but can be ignored | Clear, strict syntax |
| Tolerant of errors (we still understand typos) | No tolerance to errors |

Ambiguity examples from the slides: "Two women holding a basket", "I saw a man with a telescope", "Turn right after a few meters". A person resolves these from context; a computer cannot.

> [!example] The exact-instructions challenge (peanut butter and jelly)
> The slides show a video where children write instructions for a sandwich and a parent follows them **exactly as written**. Instructions that feel obvious to a human ("put the peanut butter on the bread") fail because they leave out steps. This is the core lesson of programming: the machine does precisely what you wrote, not what you meant.

## 3. High level vs low level, interpreted vs compiled

- Most programs are written in **high-level languages** (Python, Java, R, C#, C++, C, Pascal, Fortran): formal languages with strict syntax.
- Hardware only understands **[[Machine Code]]** (a low-level language), so the high-level program must be translated by another program.
- There are two flavours of translation:
  - An **[[Interpreter]]** translates and executes the program line by line.
  - A **[[Compiler]]** first translates the complete program to machine code; only then is it executed.

![[Lec01_interpreter_vs_compiler.png]]

| | Interpreted | Compiled |
| --- | --- | --- |
| Examples | **Python**, JavaScript, Lisp/Scheme, MATLAB, Perl, PHP, Ruby | C, C++, Fortran, Haskell, Pascal |
| Translation | Line by line, while running | Whole program first |
| Java | Compiled to **[[Bytecode]]**, which is then interpreted | |

> [!tip] Practical consequence
> Because Python is interpreted you can type one line at the `>>>` prompt and see the result immediately, which is why the slides use that prompt for most examples.

## 4. Running Python

You need an interpreter and usually an [[IDE]] (integrated development environment, the editor plus tools where you write and run code).
- **IDLE**: simple, ships with the Windows installation.
- **PyCharm** and **Spyder**; online options such as CodeBoard, Next.Tech and Repl.it.
- Jupyter notebooks are mentioned as not covered in this course (the course resources list Google Colab, PyCharm and VSCode).
- Use **Python 3** (any 3.x version is fine).

## 5. The programming process

1. **Define the problem**: what is the input, what is the output?
2. **Formulate the solution**, possibly as [[Pseudo Code]] (plain-language steps, not real syntax).
3. **Implement** it in Python.

### The running example

Convert a temperature from Celsius to Fahrenheit.

- **Input:** a real number, the temperature in degrees Celsius.
- **Output:** a real number, the equivalent in degrees Fahrenheit.
- **Pseudo code:** get the input temperature C; compute F as 9/5 times C plus 32; output F.

```python
# A program to convert Celsius temps to Fahrenheit
celsius = input("What is the Celsius temperature? ")
fahrenheit = (9.0/5.0) * float(celsius) + 32
print("The temperature is", fahrenheit, "degrees Fahrenheit.")
```

Running it with the input `100` gives:

```text
What is the Celsius temperature? 100
The temperature is 212.0 degrees Fahrenheit.
```

> [!note] Output confirmed by running the code
> The 212.0 line was produced by running the program with `100` as the input (the slide only shows the code).

## 6. What makes a "good" program

| Quality | Meaning |
| --- | --- |
| **Correctness** | Does the task it was designed for; no [[Bug|bugs]] |
| **[[Robustness]]** | Handles illegal inputs and unexpected situations sensibly |
| **Readable** | Easy to understand, even a year later or by someone else |
| **Efficient** | Fast, and does not waste memory or other resources |
| **Elegant** | Clean and simple |

The slides say these qualities will be required in submitted exercises.

### Probing the example

The slides ask whether the converter is correct, robust, readable, efficient and elegant, and suggest experiments:

- **Change the `float` cast to `int`.** It works for whole-number input but is a bug for decimals:

```python
print(int(float("36.6") * 1), 9/5 * int(36.6) + 32, 9/5 * 36.6 + 32)
```

```text
36 96.8 97.88000000000001
```

  The `int` version silently throws away the .6 and gives 96.8 instead of about 97.88. (The tiny trailing digits in 97.88000000000001 come from how computers store decimals.)

- **Enter a non-numeric value such as `0C`.** The program crashes, so it is not robust:

```python
float("0C")
```

```text
ValueError: could not convert string to float: '0C'
```

- **Rename the variables to `x`, `y`.** Less readable: meaningful names document the code.
- **`9/5` or `1.8`?** Both work; the slides leave it as a discussion of readability. (Slide versions use both `9.0/5.0` and `9/5`; in Python 3 they give the same result.)

> [!warning] Reconstructed from the slides
> The slides pose these as questions without printed answers. The explanations and outputs above are my own, checked by running the code.

## 7. Origin of the term "bug"

In 1947 engineers working on the Harvard Mark II found a moth trapped between relays. Grace Hopper taped it into the log book with the note "First actual case of a bug being found." Since then an error in a program is called a [[Bug]].

## 8. Hello World and `print`

Python's name comes from the British comedy group Monty Python.

```python
print("Hello World!")
```

```text
Hello World!
```

- `print` is a **function**; the parentheses are how you call it (functions come later in the course).
- The quotation marks mark where the text begins and ends and are not displayed.
- It displays on screen; nothing is printed on paper.
- In **Python 2** `print "Hello"` worked without parentheses; in Python 3 it raises:

```text
SyntaxError: Missing parentheses in call to 'print'. Did you mean print("Hello World!")?
```

- `print` can show numbers and expressions: `print(1)` shows 1, `print(1+1)` shows 2. At the interactive prompt typing just `1` also shows 1, but in a script only `print` produces output.

### Multiple arguments

Giving `print` several arguments separates them with a space on one line:

```python
print("Sentence #1.", "Sentence #2.")
```

```text
Sentence #1. Sentence #2.
```

The slides mention optional `sep` and `end` parameters as advanced reading. For example (my own run):

```python
print("a", "b", sep="-", end="!\n")
```

```text
a-b!
```

## 9. Arithmetic operators

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `+` | addition | `40 + 2` | 42 |
| `-` | subtraction | `43 - 1` | 42 |
| `*` | multiplication | `6 * 7` | 42 |
| `/` | division | `84 / 2` | 42.0 |
| `**` | exponent | `6**2 + 6` | 42 |

> [!warning] `/` always gives a float
> `84 / 2` is `42.0`, not `42`. The slides promise to explain this later; the short reason is that `/` is true division and returns a float.

## 10. Values and types

A **value** is one of the basic things a program works with, such as a number or a letter. Each value has a **type**:

| Value | Type | Name |
| --- | --- | --- |
| `2` | `int` | integer |
| `42.0` | `float` | floating-point number |
| `'Hello, World!'` | `str` | string |

Use `type()` to ask:

```python
print(type(2), type(42.0), type('Hello, World!'))
```

```text
<class 'int'> <class 'float'> <class 'str'>
```

## 11. Variables and assignment

A **[[Variable]]** is a name that refers to a value. An **[[Assignment]] statement** creates a variable that refers to a given value:

```python
a = 5
message = 'And now for something completely different'
n = 17
pi = 3.1415926535897932
```

**Naming rules and conventions**
- Choose meaningful names that document what the variable is for.
- Names may be any length and contain letters and digits, but **cannot start with a digit**.
- Upper case is legal but convention is lower case.
- Use underscores for multi-word names: `student_age`, `first_name`.

> [!question] Which are legal statements? (slide exercise)
> - `name = 'Oren'` legal
> - `name = 10` legal (a variable can later refer to a different type)
> - `student_age = '26'` legal (a string, not a number)
> - `student_age = -3.5` legal
> - `student_age =` **illegal**: nothing on the right-hand side
>
> The answers are my own; the slide only lists the candidates.

## 12. Expressions and statements

An **expression** is something that has a value (`42`, `n + 25`). A **statement** does something (such as an assignment) and produces no value to display. The interactive prompt prints the value of an expression.

Trace of the slide's session:

| Step | Code | `n` | `m` | Shown |
| --- | --- | --- | --- | --- |
| 1 | `n = 17` | 17 | - | |
| 2 | `n + 25` | 17 | - | 42 |
| 3 | `m = n + 25` | 17 | 42 | |
| 4 | `n = n + 1` | 18 | 42 | |
| 5 | `m` | 18 | 42 | 42 |
| 6 | `m = n + 1` | 18 | 19 | |
| 7 | `m = m + 1` | 18 | 20 | |

> [!warning] `=` is not equality
> `n = n + 1` is not a false maths equation. It means: evaluate the right side with the current `n` (17), then make `n` refer to the result (18). Also note step 5: changing `n` did **not** change `m`, because `m` was assigned the value 42 once and does not track `n`.

## 13. Comments

Comments start with `#` and are ignored by Python. They explain in natural language what the code does or why. They can sit on their own line or at the end of a line:

```python
# compute the percentage of the hour that has elapsed
percentage = (minutes * 100) / 60  # percentage of an hour
```

## 14. Getting input from the user

`input()` reads what the user types and **returns it as a string**. Its single optional argument is a prompt shown without a trailing newline.

```python
your_name = input('Enter your name: ')
print('Hello', your_name)
print('Nice to meet you.')
```

## 15. Type casting

Converting a value from one type to another is [[Type Casting]]:

```python
x = 5.2
print(int(x))      # 5   (truncates, does not round)
x = 5
print(float(x))    # 5.0
print(int("5"))    # 5   (string to int)
```

```text
5
5.0
5
```

> [!warning] Why the Celsius program needs `float(...)`
> `input()` gives a string such as `"100"`. You cannot do arithmetic on that, so the program casts it with `float(celsius)`. A string that does not look like a number (for example `"0C"`, or `"5.5"` passed to `int`) raises a `ValueError`:
>
> ```text
> ValueError: invalid literal for int() with base 10: '5.5'
> ```

## Summary

- Python is a high-level, **interpreted** language; compilers translate the whole program first, interpreters go line by line; Java uses bytecode.
- Programming = define the problem (input/output), write pseudo code, implement.
- Good programs are correct, robust, readable, efficient and elegant.
- `print` shows values; `input` reads a string; `int`, `float`, `str` are basic types, checked with `type` and converted by casting.
- A variable is a name for a value; `=` assigns and does not mean mathematical equality.
- `/` returns a float; `**` is exponent; `#` starts a comment.

## Related notes

- [[Computational Thinking & Python]] (course hub)
- [[Lec_00-Course Introduction]]
