---
title: For Loop
subject: computational-thinking-python
aliases: ["for-loops"]
related: ["List", "Range", "While Loop", "Enumerate"]
source_folder: computational-thinking-python
ai_drafted: true
---

A loop that runs the body once for each element of an iterable (a [[List]], string, [[Range]], and so on), assigning each element to the loop variable in turn.

```python
for fruit in fruits:
    print(fruit)
```

## When to use

It replaces the manual index of a [[While Loop]] and cannot go wrong with the index (start at 0, use `<` against `len`). See also [[Enumerate]].

See [[Lec_04-Lists, For Loops and Ranges|Lec 04]].
