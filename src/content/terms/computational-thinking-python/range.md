---
title: Range
subject: computational-thinking-python
aliases: []
related: ["For Loop", "List", "Nested Loop", "Indexing"]
source_folder: computational-thinking-python
ai_drafted: true
---

`range(from, to, step)` is a lazy sequence of integers produced on demand, with the end exclusive. `range(to)` gives `0` to `to - 1`, and `range(from, to)` starts at `from`.

## When to use

It is the standard partner of the [[For Loop]] when you need a count, and wrap it in `list(...)` to see the values.

```python
print(list(range(2, 10)))      # [2, 3, ..., 9]
print(list(range(0, 10, 2)))   # [0, 2, 4, 6, 8]
print(list(range(10, 0, -2)))  # [10, 8, 6, 4, 2]
```

See [[Lec_04-Lists, For Loops and Ranges|Lec 04]].
