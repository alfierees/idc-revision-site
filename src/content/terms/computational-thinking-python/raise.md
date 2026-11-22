---
title: Raise
subject: computational-thinking-python
aliases: []
related: ["Exception", "Try-Except", "Assert", "Finally"]
source_folder: computational-thinking-python
ai_drafted: true
---

`raise` throws an [[Exception]] yourself, at any time.

## When to use

Use it to validate input: a function can raise `ValueError("input to function is not a letter")` on bad arguments, and the caller can handle it with [[Try-Except]]. For a quick check that raises `AssertionError`, see [[Assert]].

```python
if not x:
    raise Exception()
```

See [[Lec_10-Exceptions and File IO|Lec 10]].
