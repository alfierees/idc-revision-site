---
title: Enumerate
subject: computational-thinking-python
aliases: []
related: ["For Loop", "Zip", "List Comprehension"]
source_folder: computational-thinking-python
ai_drafted: true
---

A built-in that gives a pair `(i, seq[i])`, the index and the element together, on each turn of a [[For Loop]]. It removes the `range(len(...))` index juggling.

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

## When to use

Use it when you want both the index and the element; [[Zip]] is the companion for walking several sequences side by side. The notebook also uses it to modify a list in place.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
