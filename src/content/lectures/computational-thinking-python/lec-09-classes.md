---
title: "Lec 09 - Classes"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 9
tags:
  - computational-thinking-python
  - python
  - oop
  - classes
  - objects
  - constructor
  - special-methods
  - encapsulation
subject: computational-thinking-python
in_scope: true
---

# Lecture 9: Classes

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Class]], [[Object]], [[Attribute]], [[Method]], [[Constructor]], [[self]], [[Special Methods]], [[Information Hiding]], [[Object-Oriented Programming]]

> [!info] What this lecture is about
> Until now every value you used was a built-in type (`list`, `str`, `dict`...). This lecture shows how to **define your own types** with the `class` keyword, bundling *data* (attributes) and *code* (methods) together. It is the first step into [[Object-Oriented Programming]].

## 1. Motivation: the patient BMI example

A patient has a weight and a height, and the body mass index is weight divided by height squared. How would you represent a patient and compute the BMI?

| Representation | Example | Weakness |
| --- | --- | --- |
| Two variables | `weight`, `height` | Easy to mix up, hard to pass around together |
| Tuple / list | `[72, 1.84]` | Positions (`patient[0]`) carry no meaning |
| Dict | `{"weight": 72, "height": 1.84}` | Better, but nothing stops bad data |

With a list, the function must trust the caller:

```python
def bmi(patient):
    # need to verify that patient is a list
    # with two positive float/numeric values
    return patient[0] / patient[1]**2

p1 = [72, 1.84]
p2 = [60, 1.70]
print(bmi(p1))
print(bmi(p2))
```

```text
21.266540642722116
20.761245674740486
```

What the lecture wants instead is code that reads like English:

```python
patient = Patient(72, 1.84)
bmi = patient.bmi()
print(patient.weight, patient.height)
patients.append(patient)
[p.bmi() for p in patients]
```

> [!tip] Key idea
> An object holds **both code (methods) and data (attributes)** for the entity it represents. Weight, height and "how to compute BMI" travel together.

## 2. You already use classes

All Python types are classes: `list`, `str`, `set`, `dict`, `int`, `bool`, `type`, and even exceptions such as `ZeroDivisionError`. Looking at `list`:

```python
a = list()      # create an empty list object
a.append(1)     # call a method on the object
a.index(1)      # returns 0
a == [1]        # objects can be compared: True
```

So why stop at predefined types? You could define `Student`, `Car`, `SortedList`, a point in the plane, a fruit with nutritional values, a patient, a company. For each, ask two design questions:

1. What **attributes** (data held per instance) does it have?
2. What **methods** (operations) should it offer?

## 3. Object-oriented programming in brief

- Programs are modelled as **objects**: encapsulations with their own **attributes** (also called fields, they represent *state*) and **methods** (functions that can be performed on the object).
- OOP started in the 1960s; the first OOP language, Smalltalk, came from Xerox PARC in the late 1970s. Others: Eiffel, C++, Java, C#, Scala. Python supports the style, though not to the standards of OOP purists.
- **Modularity:** different teams can each build their own object, and objects talk to each other only through well-defined **method interfaces**.

| Term | Meaning | Analogy from the slide |
| --- | --- | --- |
| [[Class]] | The blueprint: defines attributes and methods | "Car" |
| [[Object]] (instance) | A concrete thing created from the class | "My Honda Jazz" |

![[Lec09_class_vs_instances.png]]

## 4. Defining a class and assigning attributes

A class definition starts with `class`, like a function starts with `def`. The minimal class:

```python
class Patient:
    '''This is a Patient class'''
    pass

p = Patient()
print(Patient)
print(type(p))
```

```text
<class '__main__.Patient'>
<class '__main__.Patient'>
```

Printing `p` directly shows something like `<__main__.Patient object at 0x...>` (the address varies). Reading an attribute that was never set fails:

```text
AttributeError: 'Patient' object has no attribute 'weight'
```

Python lets you attach attributes to an object after creation, and each object has its own:

```python
p1 = Patient()
p1.weight = 72
p1.height = 1.84
p2 = Patient()
p2.weight = 60
p2.height = 1.70
print(p1.weight)   # 72: p2 did not change p1
```

This works, but it is fragile (you must remember to set every attribute every time). The constructor solves that.

## 5. The constructor `__init__`

Functions whose names begin and end with double underscores are **special functions**. `__init__` is called automatically whenever a new object is created, so it is the [[Constructor]]: use it to initialise the attributes.

```python
class Patient:
    '''This is a Patient class with a constructor'''
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height

p1 = Patient(72, 1.84)
p2 = Patient(60, 1.70)
```

Technical points:

- Defined inside the class, always named `__init__` (two underscores each side).
- The first parameter is [[self]]: a reference to the current instance. **You do not pass it when calling**; Python supplies it.
- If you write no constructor, Python gives a default empty one (no arguments, no attributes).
- Calling `Patient()` with no arguments, when `__init__` needs two, raises a `TypeError` (verified: `Patient.__init__() missing 2 required positional arguments: 'weight' and 'height'`).

### Variables versus attributes

```python
p1 = Patient(72, 1.84)
p1.weight = 60       # objects are mutable
weight = 88.2        # a separate, ordinary variable
print(p1.weight)     # 60
print(weight)        # 88.2
```

```text
60
88.2
```

> [!note] No conflict
> `p1.weight` (attribute of the object `p1`) and `weight` (a plain variable) live in different places. Also, unlike Java or C++, Python does not declare fields up front: they exist because `__init__` (or another method) assigns them. The name `self.n` means "the field `n` of the current object".

### Passing objects to functions

```python
def bmi(patient):
    return patient.weight / patient.height**2

print(bmi(p1))
```

Wrong calls fail in informative ways (checked by running them):

| Call | Result |
| --- | --- |
| `bmi(60, 1.70)` | `TypeError`: `bmi()` takes 1 positional argument but 2 were given |
| `bmi([60, 1.70])` | `AttributeError`: `'list' object has no attribute 'weight'` |

## 6. Methods

A **method** is a function associated with a class. You have seen them on built-ins: `list.append()`, `str.upper()`, `dict.items()`. Differences from a plain function:

- It is defined **inside** the class.
- It is called **through an instance**: `p1.bmi()`.

```python
class Patient:
    '''This is a Patient class with a constructor'''
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height

    def bmi(self):
        return self.weight / self.height**2

p1 = Patient(72, 1.84)
p2 = Patient(60, 1.70)
print(p1.bmi())
print(p2.bmi())
print(p1.bmi() > 20)
```

```text
21.266540642722116
20.761245674740486
True
```

> [!tip] What `self` really is
> `p1.bmi()` is shorthand for `Patient.bmi(p1)`. The object before the dot is passed automatically as the first argument, `self`. Inside the class, attributes are reached **only** via `self`.

### Naming conventions

| Thing | Convention | Examples |
| --- | --- | --- |
| Class names | Start with an upper-case letter | `Employee`, `Student`, `Point`, `SortedList` |
| Variables and functions | lower-case / snake_case | `employee`, `sorted_list` |
| First method parameter | `self` (could be renamed, but do not) | `def bmi(self)` |

## 7. Worked example: building a `Point` class

Goal: represent a point (x, y) in the plane. Interface: a constructor with `x, y`; `distance_from_origin()`, which is the square root of x squared plus y squared; and `distance(other)`. Attributes: `x`, `y`.

Step 1, constructor only:

```python
class Point:
    """ Point class represents and manipulates x,y coords. """
    def __init__(self, x, y):
        """ Create a new point at x, y """
        self.x = x
        self.y = y

p = Point(4, 2)
q = Point(6, 3)
print(p.x, q.y)
```

```text
4 3
```

Step 2, default values and a distance method:

```python
class Point:
    def __init__(self, x=0.0, y=0.0):
        self.x, self.y = x, y

    def distance(self, other):
        return ((self.x - other.x)**2 + (self.y - other.y)**2)**0.5

    def distance_from_origin(self):
        """ Compute my distance from the origin """
        return self.distance(Point())

print(Point(3, 4).distance_from_origin())
print(Point(2, -3).distance(Point(4, 5)))
```

```text
5.0
8.246211251235321
```

> [!note] Reuse
> `distance_from_origin` is built on `distance` by comparing against a fresh `Point()` (which defaults to (0, 0)). Methods can call other methods on `self`.

### Methods versus plain functions

The slide also defines ordinary functions outside the class that take points:

```python
def middle_point(p1, p2):
    return Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2)

def distance(p1, p2):
    return ((p1.x - p2.x)**2 + (p1.y - p2.y)**2)**0.5
```

`p1.distance(p2)` and `distance(p1, p2)` give the same answer, and distance is symmetric (`p1.distance(p2) == p2.distance(p1)`). With `p1 = Point(-1, -1)` and `p2 = Point(1, 1)`, the distance is `2.8284271247461903`.

## 8. Special (dunder) methods

Names beginning and ending with `__` are called by Python when you use an operator or built-in. By default, printing a point gives an unhelpful address, `p2 == Point(1,1)` is `False` (different objects), and `p1 + p2` raises `TypeError: unsupported operand type(s) for +: 'Point' and 'Point'` (all checked).

| You want | You write | Python calls |
| --- | --- | --- |
| Create an instance | `x = MyClass()` | `x.__init__()` |
| String representation | `print(x)` | `x.__repr__()` |
| Addition | `x + y` | `x.__add__(y)` |
| Subtraction | `x - y` | `x.__sub__(y)` |
| Multiplication | `x * y` | `x.__mul__(y)` |
| Equality | `x == y` | `x.__eq__(y)` |
| Less than | `x < y` | `x.__lt__(y)` |
| Membership (collections) | `k in x` | `x.__contains__(k)` |
| Size (collections) | `len(x)` | `x.__len__()` |

Defining equality and a readable representation:

```python
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __repr__(self):
        return "(" + str(self.x) + "," + str(self.y) + ")"
```

```python
p1 = Point(-1, -1)
p2 = Point(1, 1)
print(p1 == p2)           # p1.__eq__(p2)
print(p2 == Point(1, 1))
print(middle_point(p1, p2))
```

```text
False
True
(0.0,0.0)
```

> [!warning] Slide typos
> The lecture's `__repr__` slide shows output `(-1, -1)` with a space, but the code as written prints `(-1,-1)` with no space. The tuple-based `Point` slide also has a mismatched bracket in `other.xy[1)`; the intended code is `other.xy[1]`.

## 9. Abstraction: changing the representation

You could store the coordinates as a tuple instead of two fields, **keeping the same interface**:

```python
class Point:
    def __init__(self, x=0, y=0):
        self.xy = (x, y)

    def distance(self, other):
        return ((self.xy[0] - other.xy[0])**2 + (self.xy[1] - other.xy[1])**2)**0.5

    def distance_from_origin(self):
        return self.distance(Point())
```

Code that only calls `distance(...)` keeps working. That is the payoff of separating the **interface** (what methods do) from the **implementation** (how the state is stored).

## 10. Information hiding (encapsulation)

- A class designer should decide what is visible outside the class. Many OOP languages use `public` and `private`.
- In Python, a field whose name starts with two underscores is "private": known inside the class, not accessible by that name outside. The class then offers methods to read or change state in a "legal" way.
- **But Python cannot enforce hiding.** Private names are reachable through mangled names, and a client may add a field to an object. It is all convention; Python favours flexibility.
- **In this course, private fields are not used**, to keep code simple. This is common Python style.

## 11. Designing a class

Recommended order:

1. Decide the **operations** the class supports (the API or contract with clients).
2. Decide how to **represent the state** (which fields), ideally private.
3. **Implement** the methods.

Distinguish three kinds of method:

| Kind | Does it return a value? | Does it change state? |
| --- | --- | --- |
| Query | Yes | No |
| Command | No | Yes |
| Constructor | n/a | Creates and initialises the object |

Doing it this way lets you change the representation later (for example Cartesian to polar coordinates) without touching client code.

## Summary

- A **class** is a blueprint; an **object** is an instance with its own attribute values.
- `__init__` is the constructor; `self` is the current object and is passed automatically.
- Methods are functions defined in the class and called through an instance: `p.bmi()` equals `Patient.bmi(p)`.
- Special methods (`__eq__`, `__repr__`, `__add__`, `__len__`...) let your objects work with operators and built-ins.
- Design the interface first; hide implementation details so the representation can change. Python enforces hiding only by convention.

## Related notes

- [[Computational Thinking & Python]]
- Next lecture: [[Lec_10-Exceptions and File IO]]
