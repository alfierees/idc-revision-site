---
title: "Lec 10 - Exceptions and File IO"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 10
tags:
  - computational-thinking-python
  - python
  - exceptions
  - error-handling
  - try-except
  - file-io
  - files
subject: computational-thinking-python
in_scope: true
---

# Lecture 10: Exceptions and File IO

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Exception]], [[Syntax Error]], [[Logic Error]], [[try-except]], [[raise]], [[finally]], [[assert]], [[File IO]], [[open()]], [[with Statement]], [[read()]], [[readline()]], [[readlines()]], [[write()]]

> [!info] Two units
> Unit 1 is about what to do when code goes wrong (exceptions). Unit 2 is about saving and loading data with files, where things go wrong often, so the two combine.

# Unit 1: Exceptions

## 1. Three types of programming error

| Type | When it arises | Examples |
| --- | --- | --- |
| [[Syntax Error]] | Parser cannot understand the line; caught before running | `[x..2 for x inn [1,2,3]]`, `'abc" == "cba'`, `if a>5 print (a)` |
| Runtime error / [[Exception]] | Python understands the code but cannot perform the action | `1/0`, `print(a)` with `a` undefined, `int("4d6")`, `{[1,2]}` (unhashable list in a set); also out of memory |
| [[Logic Error]] | Program runs fine but gives a wrong result; no error message | Wrong formula, wrong condition |

Logic errors are the hardest: you must review the relevant code yourself.

Checked messages for the runtime examples:

```text
ValueError: invalid literal for int() with base 10: '4d6'
NameError: name 'a' is not defined
TypeError: cannot use 'list' as a set element (unhashable type: 'list')
```

> [!question] Slide questions (answers are mine, not the slides')
> - How would you categorise an infinite loop? It is usually a **logic error**: the program is valid and no exception is raised, it just never finishes.
> - Whose fault are these errors? Syntax and logic errors are the programmer's. A runtime error may not be: bad user input, a missing file or no network are outside the programmer's control.

## 2. Handling exceptions: `try` and `except`

Programs so far either prevented errors by checking data first, or crashed. With `try`/`except` you intercept the error, react and carry on.

```python
try:
    age = int(input("Please enter your age: "))
    print("I see that you are", age, "years old.")
except:
    print("Hey, something went wrong!")
```

Python runs the `try` block statement by statement. The moment an exception occurs, control jumps to `except` and the **remaining `try` statements are skipped**.

> [!warning] A bare `except:` catches everything
> It hides which error happened. The lecture's next slides show how to name the type.

### Error checks versus exception handling

Task: read comma-separated numbers and print 1/x for each.

With exception handling it is short:

```python
s = input("A comma separated list of numbers: ")
try:
    result = [1 / float(x.strip()) for x in s.split(',')]
    print(result)
except:
    print("There was a problem processing your input!")
```

With up-front checks it takes many more lines (an `is_float` helper, `all(map(is_float, ...))`, then a second check that no item is zero, with separate error messages). Python's style leans toward "try it and handle failure" (often called EAFP) over "check everything first".

### Different handlers for different exception types

```python
s = input("A comma separated list of numbers: ")
try:
    result = [1 / float(x.strip()) for x in s.split(',')]
    print(result)
except ValueError:
    print("Items must be floats")
except ZeroDivisionError:
    print("Items must be non-zero")
```

> [!example] Slide question: input `4.1, 0.0, 3, ffr7`
> The list comprehension processes items **in order**. `4.1` is fine, then `0.0` gives `1/0.0` and raises `ZeroDivisionError` **before** `ffr7` is reached. Output (I ran it):
> ```text
> Items must be non-zero
> ```
> Other inputs: `4, 2` prints `[0.25, 0.5]`; `1, 0` prints the same non-zero message.

### Exceptions from inside a function

An exception propagates out of the function to whoever called it, so the caller can catch it:

```python
def this_function_may_raise_an_exception(x):
    return 1 / x

print(this_function_may_raise_an_exception(1))
try:
    print(this_function_may_raise_an_exception(0))
except:
    print("Gotcha!")
```

```text
1.0
Gotcha!
```

## 3. Raising exceptions

Use `raise` to throw an exception yourself:

```python
x = input("")
if not x:
    raise Exception()
```

A function can validate its input and raise a `ValueError`:

```python
def encode_letter(letter):
    ''' this function will raise ValueError on invalid input'''
    if type(letter) != str or len(letter) != 1 or not letter.isalpha():
        raise ValueError("input to function is not a letter")
    if letter == "Z":
        return "A"
    if letter == "z":
        return a
    return chr(ord(letter) + 1)

print(encode_letter("B"))
print(encode_letter("Z"))
print(encode_letter(12))
```

```text
C
A
Traceback (most recent call last):
...
ValueError: input to function is not a letter
```

> [!warning] Bug in the slide code
> For `"z"` the function does `return a` (a variable) instead of `return "a"`, so it would raise `NameError` rather than wrapping around. The slide never calls it with `"z"`, so its output is unaffected.

Defining your own exception types comes later in the course.

## 4. `try` / `except` / `else` / `finally`

```python
try:
    age = int(input("Please enter your age: "))
except ValueError:
    print("Hey, that wasn't a number!")
else:
    print(f"I see that you are {age} years old.")
finally:
    print("It was really nice talking to you. Goodbye!")
```

![[Lec10_try_except_flow.png]]

| Clause | Runs when |
| --- | --- |
| `try` | Always first; stops at the first exception |
| `except` | An exception occurred and its type matches |
| `else` | The `try` block finished with **no** exception |
| `finally` | **Always**, even if the exception is not handled, or you leave with `break`, `continue` or `return` |
| `raise` | You throw an exception at any time |
| `assert` | Checks a condition and raises `AssertionError` if it is false |

Use `finally` for cleanup code that must always run. For example, `assert 2 < 1, "two is not less than one"` raises `AssertionError: two is not less than one`. A `return` inside `try` still triggers `finally` first (I ran it: prints `cleanup`, then returns 1).

> [!example] Practice from the slides
> 1. A function that converts a string to a float safely, returning `None` if it cannot.
> 2. A function that pads an ID with a leading `0`: the input must be a string of 8 or 9 digits, otherwise raise `ValueError`; an 8-digit string is padded to 9.
>
> One possible solution (mine, tested):
> ```python
> def safe_float(text):
>     try:
>         return float(text)
>     except ValueError:
>         return None
>
> def pad_id(id_text):
>     if not isinstance(id_text, str) or len(id_text) not in (8, 9) or not id_text.isdigit():
>         raise ValueError("id must be a string of 8 or 9 digits")
>     return id_text.zfill(9)
> ```
> `safe_float("3.5")` gives `3.5`, `safe_float("4d6")` gives `None`, `pad_id("12345678")` gives `'012345678'`.

# Unit 2: File IO

## 5. Why files? RAM versus storage

Reading and writing files is one of the most common jobs in Python (a text file, a server log, raw bytes).

| | Memory (RAM) | Storage (hard drive) |
| --- | --- | --- |
| Speed | Fast | Slower |
| Cost | Expensive | Cheaper |
| Persistence | Lost when the program ends (volatile) | Non-volatile, persistent |

> [!question] Slide questions
> - Where is a Python list stored? In RAM.
> - How do you save data to use later? Write it to a file on storage.

## 6. Files, folders and paths

- A file is a resource for storing information; files live in **folders (directories)**, and each has an address, its **path**, for example `C:\Desktop\ta5_code\test_file.txt`.
- The extension (`.txt`, `.mp3`, `.jpg`...) signals the content type.
- **Text files** are sequences of characters; the newline character `'\n'` marks the end of a line, for example `"This is line one\nThis is line two\n"`. (Messy details: encodings, Windows versus Linux line endings.)
- **Binary files** are sequences of bytes representing any kind of information.

| Path type | Example (from the slide, `analyze_data.py` reading `income.txt`) |
| --- | --- |
| Absolute | `C:\Python\income.txt` |
| Relative (to where the code runs) | `income.txt` |

## 7. Opening and reading

`open()` has one required argument, the path, and returns a **file object**. The recommended form is the `with` statement:

```python
with open('myfile.txt') as reader:
    # Further file processing goes here
    ...
```

> [!question] Slide questions
> - Type of `reader`? A file object (in CPython it is an `_io.TextIOWrapper`, checked).
> - Where does Python look? Relative to the current working directory.
> - If the file does not exist? `open` raises `FileNotFoundError`.

The examples use `dreams.txt`, an 8-line poem. I recreated it in a scratch folder to check outputs.

| Method | What it does | End of file |
| --- | --- | --- |
| `read()` | Whole content as one string | Returns `''` |
| `readline()` | The next single line | Returns `''` |
| `readlines()` | All lines as a list of strings | Empty list |

```python
with open('dreams.txt') as dreams_file:
    dreams_txt = dreams_file.read()
    print('"Dreams" by Langston Hughes')
    print("---------------------------")
    print(dreams_txt)
```

`readline()` twice prints the first two lines. Each call moves on, so a third call after the last line would return `''`.

### Why double-spaced output?

Every line read keeps its trailing `'\n'`, and `print` adds another. Strip it:

```python
with open('dreams.txt') as dreams_file:
    for i, line in enumerate(dreams_file.readlines()):
        line = line.rstrip('\n')
        print(i, line)
```

```text
0 Hold fast to dreams
1 For if dreams die
2 Life is a broken-winged bird
3 That cannot fly.
4 Hold fast to dreams
5 For when dreams go
6 Life is a barren field
7 Frozen with snow.
```

(The first version in the slide, with an `i` counter and no `rstrip`, shows blank lines between each line.)

### `readlines()` as a list, with filtering

```python
with open('dreams.txt') as dreams_file:
    for_lines = [line.rstrip('\n') for line in dreams_file.readlines()
                 if line.startswith("For")]
    print(for_lines)
```

```text
['For if dreams die', 'For when dreams go']
```

## 8. When things go wrong

`open()` raises an exception if the file is missing or cannot be opened, so wrap it:

```python
filename = 'unexistantfile.txt'
try:
    with open(filename) as f:
        txt = f.read()
        print(txt)
except:
    print("Was not able to read from file", filename)
```

> [!tip] Better practice
> Catch `FileNotFoundError` (or `OSError`) specifically rather than a bare `except:`.

### A note about backslashes in paths

`\` starts an escape sequence in strings, so a Windows path can break:

```python
filename = 'C:\Users\User\Downloads\file.txt'
```

```text
SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \UXXXXXXXX escape
```

Three fixes:

| Fix | Example |
| --- | --- |
| Forward slashes | `'C:/Users/User/Downloads/file.txt'` |
| Doubled backslashes | `'C:\\Users\\User\\Downloads\\file.txt'` |
| Raw string | `r'C:\Users\User\Downloads\file.txt'` |

## 9. Writing to a file

Open with mode `'w'`. If the file does not exist it is created; **if it exists it is overwritten**. Use `write()` with a string; you must add the `'\n'` yourself. The file is created in the current working directory (the slide's "where will test.txt be created?" question).

```python
try:
    with open("test.txt", 'w') as f:
        f.write("Line #1\n")
        f.write("Line #2\n\n")
        f.write("How many lines will the file contain?\n")
except:
    print("something went wrong!")
```

Resulting file (I ran it and checked the content):

```text
Line #1
Line #2

How many lines will the file contain?
```

So the answer to the slide's question is 4 lines, including the blank one.

## 10. Not covered in this lecture

Closing files (the `with` statement does it), encodings, binary read/write, changing or reading directories, Windows `\r\n` versus Linux `\n`, and appending to files.

## 11. Practice: analysing CSV data

The final slide only states the task: read a CSV of student grades and write each student's average grade to another CSV (input: grades per user; output: average per user). No code appears on the slide.

> [!note] Reconstructed from the slides
> The code below is my own sketch of the described task, tested on a scratch file with two students. It assumes each line is `name,grade,grade,...`.

```python
try:
    with open("grades.csv") as grades_file, open("averages.csv", "w") as averages_file:
        for line in grades_file:
            parts = line.strip().split(",")
            name = parts[0]
            grades = [float(grade) for grade in parts[1:]]
            average = sum(grades) / len(grades)
            averages_file.write(f"{name},{average}\n")
except (OSError, ValueError):
    print("Something went wrong while processing the grades file")
```

For input lines `alice,90,80,100` and `bob,70,65,85` the output file contains:

```text
alice,90.0
bob,73.33333333333333
```

## Summary

- Three error kinds: syntax (parser), runtime exceptions (valid code, impossible action), logic (wrong answer, no error).
- `try`/`except` intercepts exceptions; name the type (`ValueError`, `ZeroDivisionError`) to react differently. `else` runs when nothing went wrong, `finally` always runs, `raise` throws, `assert` checks conditions.
- Python code usually handles errors with exceptions rather than long pre-checks.
- RAM is fast but volatile; files on storage persist.
- `with open(path) as f:` opens and closes safely; `read()`, `readline()`, `readlines()` read; `open(path, 'w')` plus `write()` writes (overwriting).
- Lines keep `'\n'`: use `rstrip('\n')`. Protect backslashes in Windows paths (`/`, `\\` or a raw string).
- Always guard `open` with `try`/`except`.

## Related notes

- [[Computational Thinking & Python]]
- Previous lecture: [[Lec_09-Classes]]
