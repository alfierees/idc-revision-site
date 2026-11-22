---
title: Special Methods
subject: computational-thinking-python
aliases: ["Dunder Methods"]
related: ["Method", "Class", "Constructor", "Object"]
source_folder: computational-thinking-python
ai_drafted: true
---

Methods named `__xxx__` that Python calls behind operators and built-ins: `x == y` calls `x.__eq__(y)`, `print(x)` uses `__repr__`, and others include `__add__`, `__lt__`, `__contains__` and `__len__`.

## When to use

Define them so your own objects work with operators. Class-completion questions such as PP 07 (Q5) ask you to fill in `__repr__` and `__eq__`.

See [[Lec_09-Classes|Lec 09]].
