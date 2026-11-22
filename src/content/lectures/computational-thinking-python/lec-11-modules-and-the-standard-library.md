---
title: "Lec 11 - Modules and the Standard Library"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 11
tags:
  - computational-thinking-python
  - python
  - modules
  - imports
  - standard-library
  - numpy
  - matplotlib
subject: computational-thinking-python
in_scope: true
---

# Lecture 11: Modules and the Standard Library

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Module]], [[Import Statement]], [[Namespace]], [[__name__ == "__main__"]], [[Python Standard Library]], [[math Module]], [[random Module]], [[datetime Module]], [[csv Module]], [[statistics Module]], [[pip]], [[NumPy]]

> [!note] Slide numbering
> The deck's own title slide says "Lesson XI" but its agenda slide says "Lesson XII". It is the module lecture (slides 1 to 26).

## 1. Why modules?

Programs grow in stages: you start in the interpreter, then write scripts, then add functions, then classes. Eventually one file is too big. A **module** is the answer: split the program across several files so it is easier to maintain and reuse.

- A [[Module]] is simply **a file of Python code**. It can define functions, classes and variables, and can also contain runnable statements.
- Any `.py` file can be used as a module. A file `test.py` is the module named `test`.

### Advantages of modularising code

| Benefit | Meaning |
|---|---|
| **Simplicity** | A module focuses on one small part of the problem, so there is less to hold in your head. |
| **Maintainability** | Modules draw logical boundaries between problem areas; low interdependence means a change in one rarely breaks another, and a team can split the work. |
| **Reusability** | Functionality defined once is reused through its interface instead of duplicated. |
| **Scoping** | Each module has its own [[Namespace]], so identifiers in different areas do not collide. |

## 2. Writing and importing a module

Take the `Patient` class and put it alone in a file called `patient.py`:

```python
# in file patient.py
class Patient:
    '''This is a Patient class with a constructor'''
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height

    def bmi(self):
        return self.weight / self.height**2
```

Use it from another file in the same folder with an [[Import Statement]]. The dot operator reaches inside the module:

```python
import patient
p1 = patient.Patient(72, 1.84)
p2 = patient.Patient(60, 1.70)
print(p1.bmi())
print(p2.bmi())
```

```text
21.266540642722116
20.761245674740486
```

### Forms of import

| Form | Effect | Use it as |
|---|---|---|
| `import patient` | Loads the module; names stay inside it | `patient.Patient(...)` |
| `import patient as pat` | Same, with a short alias | `pat.Patient(...)` |
| `from patient import Patient` | Copies just that name into your namespace | `Patient(...)` |
| `from xyz import *` | Copies every public name into your namespace | bare names |

```python
import patient as pat
print(pat.Patient(72, 1.84).bmi())

from patient import Patient
print(Patient(72, 1.84).bmi())
```

```text
21.266540642722116
21.266540642722116
```

> [!warning] Avoid `from xyz import *`
> It dumps every name into your file, which can silently overwrite your own variables or another module's names. Prefer `import xyz` or an explicit `from xyz import name`. (The "avoid" advice is mine; the slide only shows the syntax.)

### Imports run once, and modules have their own namespace

The interpreter loads a module **only the first time** it is imported. Later imports of the same module do nothing. By default a module object has a separate [[Namespace]], and inside a module its own name is available as the string in the global variable `__name__`.

The slides' `fake.py` shows this:

```python
# fake.py
print("This code got executed")

def fake_function():
    print("The fake_function code got executed!")

fake_variable = 0
fake_variable += 10
```

```python
import fake            # first import: runs the file
import fake            # already imported: does nothing
from fake import *
print(fake_variable)
```

```text
This code got executed
10
```

"This code got executed" appears **once**, even though `fake` is imported twice (and a third time via `from ... import *`). Importing a module executes its top-level statements, so a module's `print` runs at import time.

> [!tip] Trace of what happens
> | Statement | Is `fake.py` run? | Output |
> |---|---|---|
> | `import fake` (1st) | yes, top to bottom | `This code got executed` |
> | `import fake` (2nd) | no, already loaded | none |
> | `from fake import *` | no, already loaded | none |
> | `print(fake_variable)` | n/a | `10` |

## 3. The main module: `if __name__ == "__main__":`

When you run `python fibo.py` directly, the file executes as if imported, but its `__name__` is set to `"__main__"`. When it is imported instead, `__name__` is the module's name (`"patient"`). So a guard lets one file act as **both a script and an importable module**:

```python
# patient.py
class Patient:
    '''This is a Patient class with a constructor'''
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height
    def bmi(self):
        return self.weight / self.height**2

if __name__ == "__main__":
    # this code will not run when imported
    p1 = Patient(100, 2)
    assert(p1.bmi() == 25)
    assert(Patient(72, 1.84).bmi() == 21.266540642722116)
    print("All tests passed!")
```

Running `python patient.py` prints:

```text
All tests passed!
```

Running `import patient` from elsewhere prints nothing, because the guarded block is skipped. This is the standard place for quick self-tests.

| How the file is used | Value of `__name__` | Guarded block runs? |
|---|---|---|
| `python patient.py` | `"__main__"` | yes |
| `import patient` | `"patient"` | no |

## 4. The Python Standard Library

The [[Python Standard Library]] ships with Python, so **no installation is needed**. It covers the operating system, CSV files, random numbers, dates and times, and much more. The lecture samples six modules.

### 4.1 `math`

```python
import math
from math import pi, e
print(math.sqrt(4))
print(math.exp(4), "=~", e**4)
print((math.floor(e), e, math.ceil(e)))
print((math.floor(pi), pi, math.ceil(pi)))
print(sum([.1]*10))
print(math.fsum([.1]*10))
print(math.sin(pi/2), math.cos(pi))
print(math.degrees(pi/2))
```

```text
2.0
54.598150033144236 =~ 54.59815003314423
(2, 2.718281828459045, 3)
(3, 3.141592653589793, 4)
1.0
1.0
1.0 -1.0
90.0
```

Functions listed on the slide: `ceil`, `floor`, `fabs`, `factorial`, `fsum`, `exp`, `log(x[, b])`, `log1p`, `log2`, `log10`, `pow`, `sqrt`, `cos`, `sin`, `tan`, `hypot`, and the constants `pi` and `e`.

> [!warning] `sum` vs `fsum` on floats
> `fsum` exists because adding floats naively accumulates rounding error. The slide contrasts `sum([.1]*10)` with `math.fsum([.1]*10)`. In older Python versions the plain `sum` gives `0.9999999999999999`. When I ran it on Python 3.14 here, both printed `1.0`, because recent versions made `sum` of floats more accurate. In the lecture's setting, expect the two to differ. Note `exp(4)` and `e**4` also differ in the last digit.

### 4.2 `datetime`

```python
import datetime

yara_dob = datetime.datetime(2011, 11, 3)
print(yara_dob)
print(type(yara_dob))
print(yara_dob.year)

now = datetime.datetime.now()
print(now > yara_dob)
yara_age = now - yara_dob
print(type(yara_age))
print(now.year - yara_dob.year)   # find the bug!
```

With a fixed "now" of 3 January 2021, 18:48:22 (the slide's own sample date) the output is:

```text
2011-11-03 00:00:00
<class 'datetime.datetime'>
2011
True
3349 days, 18:48:22
<class 'datetime.timedelta'>
10
```

Key ideas:
- `datetime.datetime(y, m, d)` builds a date-time object; `datetime.date.today()` and `datetime.datetime.now()` give the current date or date-time.
- Date-times can be **compared** (`>`), and **subtracting** two of them gives a `datetime.timedelta` (a duration).

> [!warning] The slide's "find the bug"
> `now.year - yara_dob.year` gives 10, but a child born on 3 November 2011 is only 9 on 3 January 2021 (the tenth birthday is in November 2021). Subtracting years ignores the month and day. Use the `timedelta`, for example `yara_age.days // 365.25`, which gives `9.0`. This is the bug the slide asks you to spot.

### 4.3 `time`: measuring execution time

`time.time()` returns the number of seconds since the **epoch**, the instant where time begins (on the slide: 1 January 1970, 00:00:00 UTC). Take it before and after a block and subtract:

```python
import time
start_time = time.time()
sum([i for i in range(5000000)])
elapsed_time = time.time() - start_time
print(elapsed_time)

start_time = time.time()
time.sleep(3)
elapsed_time = time.time() - start_time
print(elapsed_time)
```

The slide gives no output; the first number depends on your machine and the second is just over 3 seconds (`time.sleep(3)` pauses for 3 seconds).

### 4.4 `csv`

`csv.reader` wraps an open file and yields one **list of strings per line**:

```python
import csv

with open('students_grades.csv') as csvfile:
    reader = csv.reader(csvfile)
    for line in reader:
        print(line)
```

For this file (from the slide):

```text
ID, EX1, EX2, EX3
556743, 70, 80, 91
215746, 64, 92, 76
315678, 88, 100, 99
```

the slide shows:

```text
['ID', 'EX1', 'EX2', 'EX3']
['556743', '70', '80', '91']
['215746', '64', '92', '76']
['315678', '88', '100', '99']
```

> [!note] Reconstructed from the slides
> The slide prints one list per row, every value as a **string**. The slide's file is shown with spaces after the commas, but when I ran the reader on the spaced text above, the values came out as `' EX1'`, `' 70'` and so on (with a leading space), so the slide's printed output presumably comes from a file without those spaces. Remember that you must convert with `int(...)` yourself.

`csv.DictReader` (used in the COVID example below) yields each row as a dictionary keyed by the header names.

### 4.5 `random`

| Function | Meaning |
|---|---|
| `random.randint(a, b)` | random integer in `[a, b]` (both ends included) |
| `random.random()` | random float in `[0.0, 1.0)` |
| `random.shuffle(seq)` | shuffle a sequence **in place** |
| `random.sample(seq, k)` | `k` distinct items, returned as a new list |

```python
import random

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)          # works on a list, not a tuple
print(numbers)

numbers_2 = range(1, 6)
shuffled_list = random.sample(numbers_2, k=len(numbers_2))
print(shuffled_list)

random.seed(2)
print(random.random())
```

```text
0.9560342718892494
```

(The two shuffles print a different order each run, so there is no fixed output.) `random.shuffle` changes the list itself, so a tuple fails: `TypeError 'tuple' object does not support item assignment`. `sample` is the alternative because it returns a new list.

The slide ends with "how did I guess?": after `random.seed(2)`, `random.random()` returns `0.9560342718892494` every time. A **seed** fixes the starting point of the pseudo-random generator, so results are reproducible.

A dice-throwing helper from the same slide:

```python
import random

def throw_dice():
    return random.randint(1, 6), random.randint(1, 6)

shesh_besh = [throw_dice() for _ in range(10)]
print(shesh_besh)
```

(`shesh besh` is the Hebrew name for backgammon.) The output is a list of ten pairs such as `(3, 5)`, different each run.

### 4.6 `statistics`

```python
from statistics import *
print(mean([1, 3]))
print(fmean([1, 3]))
print(median([1, 2, 4, 1000]))
print(fmean([1, 2, 4, 1000]))
l1 = [1.5, 2.5, 2.5, 2.75, 3.25, 4.75]
mu, std_dev = fmean(l1), stdev(l1)
print((mu - 2*std_dev, mu, mu + 2*std_dev))
normal_dist = NormalDist(mu, std_dev)
l2 = normal_dist.samples(10)
print([round(x, 2) for x in l2])
```

```text
2
2.0
3.0
251.75
(0.7128251689560345, 2.875, 5.0371748310439655)
```

(The final line prints ten random draws, different each run.) Points to notice:
- `mean([1, 3])` returns the int `2`, while `fmean` always returns a float, `2.0`.
- The **median** (3.0) ignores the outlier 1000, while the mean (251.75) is dragged up by it.
- `NormalDist(mu, sigma).samples(n)` draws `n` random values from that normal distribution.

## 5. Packages beyond the standard library

Many useful packages are **not** in the standard library, for example NumPy, SciPy and matplotlib. You have to install them first. [[pip]] is the most popular installer and ships with modern Python; it finds, downloads and installs packages from PyPI and other indexes.

> [!warning] Installation trouble
> The slide warns it is common to have trouble installing packages and using their modules (wrong Python environment, missing install). Run `pip install numpy` before running code that imports it.

### NumPy

[[NumPy]] is a package for scientific computing with a powerful N-dimensional array object. It is conventionally imported as `np`.

```python
import numpy as np

a = np.array([1, 2, 3])
print(a)
print(type(a))

A = np.array([[1.0, 2, 3], [3, 4, 5]])   # array of floats
print(A)
print(np.zeros((2, 3)))

A = np.array([[9, -3], [3, 6]])
B = np.array([[1, 2], [3, 4]])
print(A + B)             # element-wise addition
print(A.dot(B))          # matrix product
print(A.transpose())
```

```text
[1 2 3]
<class 'numpy.ndarray'>
[[1. 2. 3.]
 [3. 4. 5.]]
[[0. 0. 0.]
 [0. 0. 0.]]
[[10 -1]
 [ 6 10]]
[[ 0  6]
 [21 30]]
[[ 9  3]
 [-3  6]]
```

Note that a float anywhere in the input makes the whole array floats, `+` works **element-wise** (unlike lists, where it concatenates), and `.dot` is the matrix product. As the slide puts it: way more than just a list.

> [!note]
> The slide's agenda also mentions SciPy, but the deck shows no SciPy code.

### Plotting: throw some dice

Combine `random`, `numpy` and `matplotlib` to simulate 100,000 throws of two dice and plot the distribution of their sum:

```python
import random
import numpy as np
from matplotlib import pyplot as plt

def throw_dice():
    return random.randint(1, 6), random.randint(1, 6)

data = [sum(throw_dice()) for _ in range(100000)]
plt.hist(data, bins=np.arange(2, 14), align="left", rwidth=0.9)
plt.show()
```

![[Lec11_dice_histogram.png]]

The histogram peaks at 7 because 7 can be made in six ways (1+6, 2+5, ...), while 2 and 12 can be made in only one. `bins=np.arange(2, 14)` with `align="left"` puts one bar on each integer 2 to 12. (My own run of the code, seeded for reproducibility.)

## 6. Putting it together: plotting COVID data

The closing example reads a CSV file of daily new cases, parses dates, and draws a bar chart:

```python
import csv
from datetime import datetime
import matplotlib.pyplot as plt

def read_data(filename):
    data = []
    with open(filename) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            dt = datetime.strptime(row['DATE'], '%d-%m-%Y')
            positives = int(row['NEW'])
            data.append([dt, positives])
    return data

def plot_data(x, y):
    ax = plt.subplot(111)
    ax.bar(x, y, width=10)
    ax.xaxis_date()
    plt.show()

data = read_data('covid_stats.csv')
plot_data([v[0] for v in data], [v[1] for v in data])
```

How it works:
1. `csv.DictReader` gives each row as a dict, so you read columns by header name (`row['DATE']`, `row['NEW']`).
2. `datetime.strptime(text, format)` turns a string into a `datetime`; the format `'%d-%m-%Y'` means day-month-year, for example `01-03-2020` becomes `2020-03-01 00:00:00`.
3. `int(row['NEW'])` converts the string count to a number.
4. The two list comprehensions split the stored pairs into the x values (dates) and y values (counts) for the bar chart.

The data file `covid_stats.csv` is not included in the deck, so no chart output is shown.

## Summary

- A **module** is a `.py` file; `import` runs it once and gives you its names through the dot operator; each module has its own **namespace**.
- Use `import m`, `import m as alias`, `from m import name`; avoid `import *`.
- `if __name__ == "__main__":` makes a file usable both as a script and as an importable module (ideal for self-tests).
- The standard library needs no install: `math`, `random`, `statistics`, `datetime`, `time`, `csv` and many more.
- Third-party packages (NumPy, SciPy, matplotlib) come from `pip install`.
- Real programs combine them: read with `csv`, parse with `datetime`, plot with `matplotlib`.

## Related notes

- [[Computational Thinking & Python]]
- The previous lecture on classes, where the `Patient` class is introduced
- [[Lec_12-Generative AI and Prompt Engineering]]
