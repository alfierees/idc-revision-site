---
title: Parallel Assignment
subject: computational-thinking-python
aliases: ["Tuple Unpacking"]
related: ["Tuple", "Assignment", "Zip", "Enumerate"]
source_folder: computational-thinking-python
ai_drafted: true
---

Parallel assignment assigns several names at once by [[Tuple]] unpacking, for example `a, b = b, a`. The whole right side is evaluated into a tuple before anything is assigned, which makes swaps safe.

## When to use

Use it to swap two values without a temporary variable, and notice it behind loop headers such as `for fruit, calorie in zip(fruits, calories)` ([[Zip]]) and `for i, x in enumerate(lst)` ([[Enumerate]]). In a trace, evaluate the right side first: starting from `x = 0.0, y = -1.5, z = 2.7`, `x, y = y, z` gives `-1.5 2.7 2.7`.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
