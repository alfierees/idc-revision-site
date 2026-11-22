---
title: Type Casting
subject: computational-thinking-python
aliases: ["casting"]
related: ["Coercion", "Integer", "Float", "String"]
source_folder: computational-thinking-python
ai_drafted: true
---

Explicitly converting a value between types such as `int`, `float` and `str`. `int(5.2)` gives `5` (it truncates, not rounds), `float(5)` gives `5.0` and `int("5")` gives `5`.

## When to use

`input()` returns a string, so the Celsius program casts with `float(celsius)` before doing arithmetic. A string that does not look like a number, such as `"0C"`, raises a `ValueError`.

See [[Lec_01-Hello World|Lec 01]].
