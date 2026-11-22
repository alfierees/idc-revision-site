---
title: Self
subject: computational-thinking-python
aliases: []
related: ["Method", "Constructor", "Attribute", "Object", "Class"]
source_folder: computational-thinking-python
ai_drafted: true
---

The current object, passed automatically as the first parameter of each method; you do not pass it when calling. `p1.bmi()` is shorthand for `Patient.bmi(p1)`, and inside the class attributes are reached only through `self`, as in `self.weight`.

## When to use

Needed whenever you write a class: `__init__` and every method take `self` first and store or read attributes through it. Class-completion questions such as the `Employee` class in PP 07 (Q5) fill in `self.` lines.

See [[Lec_09-Classes|Lec 09]].
