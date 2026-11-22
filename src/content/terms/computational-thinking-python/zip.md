---
title: Zip
subject: computational-thinking-python
aliases: []
related: ["Enumerate", "For Loop", "List", "Tuple", "List Comprehension"]
source_folder: computational-thinking-python
ai_drafted: true
---

Pairs up elements of several sequences position by position, stopping at the shortest, silently.

```python
for fruit, calorie in zip(fruits, calories):
    print(calorie, fruit)
```

## When to use

Use it to walk several sequences side by side without `range(len(...))`, and `enumerate` when you want the index and element. Because it stops at the shortest, check the lengths match first.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
