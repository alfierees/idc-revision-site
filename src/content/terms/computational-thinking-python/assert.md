---
title: Assert
subject: computational-thinking-python
aliases: []
related: ["Exception", "Raise", "Try-Except"]
source_folder: computational-thinking-python
ai_drafted: true
---

A statement that checks a condition: it does nothing if the condition is true and raises `AssertionError` if it is false. An optional message follows the condition, e.g. `assert 2 < 1, "two is not less than one"`.

## When to use

Function exercises in the course use a run of `assert` lines as test cases, such as `assert c2f(100) == 212`. It sits beside [[Raise]] and [[Try-Except]] as one way of dealing with things going wrong.

See [[Lec_10-Exceptions and File IO|Lec 10]].
