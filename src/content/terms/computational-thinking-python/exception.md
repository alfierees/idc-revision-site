---
title: Exception
subject: computational-thinking-python
aliases: ["runtime error", "exceptions"]
related: ["Syntax Error", "Logic Error", "Try-Except", "Raise"]
source_folder: computational-thinking-python
ai_drafted: true
---

A runtime error: Python understands the code but cannot perform the action (for example `1/0`, an undefined name, or `int("4d6")`). It differs from a [[Syntax Error]], caught before running, and from a [[Logic Error]], which gives no message at all.

## When to use

Catch one with [[Try-Except]] and throw your own with [[Raise]]; an exception inside a function propagates out to the caller.

See [[Lec_10-Exceptions and File IO|Lec 10]].
