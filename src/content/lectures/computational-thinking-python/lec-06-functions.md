---
title: "Lecture 6: Functions"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 6
tags:
  - computational-thinking-python
  - python
  - functions
  - lambda
  - scope
  - map-filter
  - docstring
subject: computational-thinking-python
in_scope: true
---

# Lecture 6: Functions

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Function]], [[Parameter and Argument]], [[Return Value]], [[Variable Scope]], [[Local Variable]], [[Docstring]], [[First-Class Function]], [[Lambda Expression]], [[map and filter]]

Source: Lecture 06 slides (44 slides, text and code only, no data figures). Outputs below were checked by running the code (Python 3), except where flagged.

## 1. What a function is

A [[Function]] is a **named sequence of statements** that performs a computation. You already use built-ins: `print`, `max`, `min`, `sum`, `len`, `range`, `type`.

- You **call** a function by name: `max(1, 2, 3)`.
- The expressions in parentheses are the **arguments**: the input values.
- The result handed back is the **return value**: for `max(1, 2, 3)` it is 3.
- A function "takes" arguments and "returns" a result.

### Why bother

| Benefit | Meaning |
| --- | --- |
| Reusable blocks | write once, use many times |
| No duplication | fix a bug in one place |
| Modularity | split a program into named, testable pieces |
| Simpler code | shorter, more structured, more readable |

As a user, a built-in function is a **black box**: you care about its input and output, not how it works inside. The slide asks you to name the input and output of `max`, `min`, `sum`, `len`, `type`, `range`, `int`/`float`/`list`/`str` and `print`. The last one is the interesting case, covered in section 2.

## 2. Defining and calling functions

Anatomy of a definition (from the slide diagram): the keyword `def`, the function **name**, the **parameters** in parentheses, a colon, then the indented **body**, which ends with a `return` giving the return value.

```python
def max2(x, y):
    return x if x > y else y

print(type(max2))
print(max2(1, 2), max2(2, 1))
print(max2(len([1, 2, 3]), len([4, 5])))
print(2 + max2(0, 3))
```

```text
<class 'function'>
2 2
3
5
```

> [!tip] Arguments are evaluated first
> In `max2(len([1,2,3]), len([4,5]))` Python first computes `3` and `2`, then calls `max2(3, 2)`. A call is an expression, so it can sit inside bigger expressions (`2 + max2(0, 3)`).

More examples from the slides:

```python
def avg(x, y):
    return (x + y) / 2

print(avg(1, 2), avg(3, 1), 2 + avg(0, 3))
```

```text
1.5 2.0 3.5
```

```python
def xor(x, y):
    return (x and (not y)) or ((not x) and y)

take_exam = True
take_final_project = False
if xor(take_exam, take_final_project):
    print("a valid choice")
else:
    print("not a valid choice")
```

```text
a valid choice
```

### Functions with no arguments or no return value

```python
def print_welcome_message():
    course_name = "Intro to Programming in Python"
    print("Hi.")
    print("Welcome to", course_name)
    print("If you have not checked the moodle please do so now")
    print("Behatzlaha")

new_in_course = True
if new_in_course:
    print_welcome_message()
```

```text
Hi.
Welcome to Intro to Programming in Python
If you have not checked the moodle please do so now
Behatzlaha
```

To make the course name an input, turn the hard-coded variable into a **parameter**:

```python
def print_welcome_message(course_name):
    print("Hi.")
    print("Welcome to", course_name)
    print("If you have not checked the moodle please do so now")
    print("Behatzlaha")

print_welcome_message("Intro to Programming in Python")
```

```text
Hi.
Welcome to Intro to Programming in Python
If you have not checked the moodle please do so now
Behatzlaha
```

> [!note]
> A function with no `return` statement returns `None`. This is the answer to "what is the output of `print`?": it prints text as a **side effect** and returns `None`.

## 3. Flow of execution

A `def` statement only **creates** the function. Its body does **not run** until the function is called. Hence you cannot call a function before the `def` line has executed.

```python
print("*")
def print_3_stars():
    print("***")
print("**")
print_3_stars()
print_5_stars()          # not defined yet
def print_5_stars():
    print("*****")
```

```text
*
**
***
Traceback (most recent call last):
  File "main.py", line 6, in <module>
    print_5_stars()
NameError: name 'print_5_stars' is not defined
```

(Output as shown on the slide.) Execution goes top to bottom; the `def` of `print_5_stars` comes after the call, so the name does not exist yet.

## 4. Worked refactoring examples

### Unique elements as a function

Lecture 5's loop for unique elements ([[Lec_05-List Comprehension and Tuples]]) becomes reusable once wrapped in a function, so two lists need no duplicated code:

```python
def uniques(a_list):
    uniques_list = []
    for x in a_list:
        if x not in uniques_list:
            uniques_list.append(x)
    return uniques_list

list1 = [1, 4, 5, 8, 3, 5, 7, 1, 2]
print(uniques(list1))
list2 = [2, 1, 7, 5, 3, 8, 5, 4, 1]
print(uniques(list2))
```

```text
[1, 4, 5, 8, 3, 7, 2]
[2, 1, 7, 5, 3, 8, 4]
```

### Primes: pulling the test into `is_prime`

The slide first shows a single long program that loops over `n` and, inside, an inner loop that tests divisibility by odd `m` up to the square root of `n`, using a flag `n_is_prime`. It then extracts the test:

```python
def is_prime(n):
    if n < 3:             # slide: "n is prime if 1,2"
        return True
    if n % 2 == 0:        # even numbers are not prime
        return False
    for m in range(3, int(n ** 0.5), 2):   # odd divisors up to sqrt(n)
        if n % m == 0:
            return False  # return exits the function immediately
    return True
```

and the calling program becomes short and readable:

```python
max_number_to_test = 100
print_only_primes = True

for n in range(1, max_number_to_test + 1):
    n_is_prime = is_prime(n)
    if print_only_primes:
        if n_is_prime:
            print(n)
    else:
        message = "is prime" if n_is_prime else "is not prime"
        print(n, message)
```

> [!warning] The slide's `is_prime` is wrong for some inputs
> The slide's `range(3, int(n ** 0.5), 2)` stops **before** the integer square root, so odd perfect squares and similar cases are missed. I ran it:
>
> ```python
> print([n for n in range(100) if is_prime(n)][:25])
> ```
>
> ```text
> [0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49, 53, 59, 61]
> ```
>
> It wrongly reports 9, 15, 25, 35 and 49 as prime (and 0 and 1). The earlier slide with the inline version uses `range(3, int(n ** 0.5) + 1, 2)`, which is correct. The `+ 1` was lost when the code was moved into the function. The slide's own later output for `filter(is_prime, range(100))` (section 8) shows the correct primes, so it was not produced by this exact code. A fixed version:
>
> ```python
> def is_prime(n):
>     if n < 2:
>         return False
>     if n == 2:
>         return True
>     if n % 2 == 0:
>         return False
>     for m in range(3, int(n ** 0.5) + 1, 2):
>         if n % m == 0:
>             return False
>     return True
>
> print([n for n in range(40) if is_prime(n)])
> ```
>
> ```text
> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
> ```
>
> Why `+ 1`: `range` excludes its end, and a composite like 25 has its smallest factor 5 equal to the square root, which must be included.

### `max3` in four ways

The slide builds `max3(x, y, z)` and tests all six orderings of 1, 2, 3 (each call must return 3).

| Take | Idea | Key point |
| --- | --- | --- |
| 1 | `if x >= y and x >= z` / `elif` / `else` | one `if-elif-else` chain |
| 2 | separate `if`s that each `return` | `return` exits the function, so no `else` is needed |
| 3 | `max_x_y = max2(x, y)` then `max2(max_x_y, z)` | a function can call another function |
| 4 | `return max2(max2(x, y), z)` | the same, as one expression |

```python
def max2(x, y):
    return x if x > y else y

def max3(x, y, z):                 # take 4
    return max2(max2(x, y), z)

print(max3(1, 2, 3), max3(1, 3, 2), max3(2, 1, 3), max3(2, 3, 1), max3(3, 1, 2), max3(3, 2, 1))
```

```text
3 3 3 3 3 3
```

Takes 1 and 4 both give `3 3 3 3 3 3` when run. Take 1 uses `>=` so that ties between equal values still select a branch.

## 5. Returning multiple values

A function can `return a, b`. That is really one [[Tuple]] (see [[Lec_05-List Comprehension and Tuples]]), "packed" automatically. The caller can index it or **unpack** it with [[Parallel Assignment]].

```python
def mydivmod(a, b):
    ''' quotient and remainder of a divided by b '''
    return a // b, a % b

print(mydivmod(21, 5))
print(mydivmod(21, 5)[0])
print(type(mydivmod(21, 5)))
d, r = mydivmod(100, 7)
print(d, r)
```

```text
(4, 1)
4
<class 'tuple'>
14 2
```

## 6. Docstrings

A [[Docstring]] is a triple-quoted string (`'''` or `"""`) placed as the first thing in the function body. Unlike a comment it can span several lines and is stored with the function, so `help()` prints it.

```python
def xor(x, y):
    ''' computes xor of two Boolean variables, x and y '''
    return (x and (not y)) or ((not x) and y)

help(xor)
```

```text
Help on function xor in module __main__:

xor(x, y)
    computes xor of two Boolean variables, x and y
```

The slide suggests trying `help` on other built-in functions (for example `help(max)`).

## 7. Functions are first-class citizens

In Python a function is a **value** like any other. You can put it in a list, assign it to a variable, pass it as an argument or return it from another function. This is called being a [[First-Class Function]].

```python
def avg(l):
    return sum(l) / len(l)      # ignores the empty-list case

l = [5.0, 1.0, 2.0, 4.0]
myfuncs = [min, avg, max]
print(l)
for f in myfuncs:
    print(f(l))
```

```text
[5.0, 1.0, 2.0, 4.0]
1.0
3.0
5.0
```

(The slide prints `f` too, giving lines like `<built-in function min> : 1.0`; the `0x...` address of `avg` differs on every machine.)

A function that takes another function:

```python
def apply(f, lst):
    ''' apply f to each element of lst and return a new list '''
    return [f(item) for item in lst]

print(apply(int, [5.0, 1.0, 2.0, 4.0]))
```

```text
[5, 1, 2, 4]
```

## 8. `map` and `filter`

Python has built-in versions of `apply` and of "filter with a condition":

- `map(f, items)` applies `f` to every item.
- `filter(f, items)` keeps items for which `f(item)` is true.
- Both return an **iterable object** (lazy, like `range`), so wrap in `list(...)` to see the values.

```python
print(list(map(int, [5.0, 1.0, 2.0, 4.0])))
print(list(map(sum, [[1, 2, 3], [4, 5, 6], [7, 8, 9]])))
```

```text
[5, 1, 2, 4]
[6, 15, 24]
```

The slide filters primes: `list(filter(is_prime, range(100)))`. With a correct `is_prime` (the fixed version above) this gives:

```text
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

The slide's printed list additionally starts with `0, 1`, which is what the slide's `is_prime` gives for 0 and 1 (it returns True for `n < 3`).

> [!tip] Equivalence with comprehensions
> `list(map(f, xs))` is `[f(x) for x in xs]`, and `list(filter(f, xs))` is `[x for x in xs if f(x)]`.

| Tool | Result | Laziness |
| --- | --- | --- |
| list comprehension | list | builds the whole list |
| `map`, `filter` | iterable object | computed on demand |

## 9. Lambda expressions

A [[Lambda Expression]] is an **unnamed one-line function**: `lambda parameters: expression`. The expression's value is returned automatically (no `return` keyword).

Motivating case: evaluate x squared minus x minus 1 at x = (1 + square root of 5) / 2 (the golden ratio, where the value is 0). Option 1 repeats the long expression three times (unreadable and hard to change). Option 2 stores `x` first. Option 3 uses a lambda:

```python
x = (1 + 5**0.5) / 2
print((lambda x: x**2 - x - 1)(x))
print(type(lambda x: x**2 - x - 1))
```

```text
0.0
<class 'function'>
```

The slide's quiz:

```python
print((lambda x: sum(x) / len(x))([1, 2, 3]))
print((lambda x, y: x + y)(2, 3))
```

```text
2.0
5
```

Lambdas are mainly for quick throwaway functions passed to other functions, for example `map` and `filter`:

```python
my_list = [1, 2, 3, 4, 5]
print(list(filter(lambda x: x > 2, my_list)))
print(list(map(lambda x: 1 / (1 + x**2), my_list)))
```

```text
[3, 4, 5]
[0.5, 0.2, 0.1, 0.058823529411764705, 0.038461538461538464]
```

The lecturer notes more uses of lambda come later in the course.

## 10. Variable scope

### Local variables

Names created inside a function are [[Local Variable]]s: they exist only while the function runs and "disappear" afterwards.

```python
def factorial(m):
    result = 1              # result is local
    for i in range(1, m + 1):
        result = result * i
    return result

n = 20
print(str(n) + "! =", factorial(n))
print(result)               # error
```

```text
20! = 2432902008176640000
Traceback (most recent call last):
  File "main.py", line 10, in <module>
    print(result)
NameError: name 'result' is not defined
```

### Formal versus actual parameters

| Term | Meaning | In `factorial(n)` |
| --- | --- | --- |
| **Formal** parameter | the name in the `def` line | `m` |
| **Actual** parameter (argument) | the value passed by the caller | the value of `n`, i.e. 20 |

The same names in different places are **different variables**. Each function call gets its own name space ([[Variable Scope]]).

```python
def f(x):
    y = 1
    x = x + y
    print('x =', x)
    return x

x = 3
y = 2
z = f(x)
print('z =', z)
print('x =', x)
print('y =', y)
```

```text
x = 4
z = 4
x = 3
y = 2
```

Trace of what happens:

| Moment | Global names | Names inside `f` |
| --- | --- | --- |
| Before the call | `x = 3`, `y = 2` | none |
| Call `f(x)` | `x = 3`, `y = 2` | formal `x` bound to 3 |
| After `y = 1`, `x = x + y` | unchanged | `x = 4`, `y = 1` |
| `return x` and assign | `x = 3`, `y = 2`, `z = 4` | gone |

Assignments inside `f` rebind only f's local `x` and `y`. The global `x` and `y` keep their values. (Rebinding a parameter inside a function never changes the caller's variable. Mutating a list that was passed in is a different story, covered when lists and references are discussed.)

> [!note] Reconstructed from the slides
> The trace table is my own expansion of the slide's explanation. The mutable-list remark is a pointer, not something this lecture covers.

## Summary

- A function is a named, reusable block: `def name(parameters):` plus an indented body and `return`.
- Defining a function does not run it. It must be defined before the call executes.
- Arguments are evaluated before the call; a function with no `return` gives back `None`.
- `return a, b` returns a tuple; unpack it with `d, r = mydivmod(...)`.
- Docstrings document a function and appear in `help(f)`.
- Functions are first-class values: store them in lists, pass them in, so `apply`, `map`, `filter` work.
- `lambda x: expr` is an unnamed one-expression function.
- Variables assigned inside a function are local. Formal parameters are local names bound to the actual argument values.
- The slide's `is_prime` drops the `+ 1` in `range` and misclassifies 9, 15, 25, 35, 49. Remember to include the square root in the range.

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_05-List Comprehension and Tuples]]
- [[Function]], [[Lambda Expression]], [[Variable Scope]], [[map and filter]], [[Docstring]]
