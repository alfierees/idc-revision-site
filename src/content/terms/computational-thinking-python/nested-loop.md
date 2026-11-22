---
title: Nested Loop
subject: computational-thinking-python
aliases: ["nested-loops"]
related: ["For Loop", "While Loop", "Time Complexity", "Nested List"]
source_folder: computational-thinking-python
ai_drafted: true
---

A nested loop is a loop inside a loop: the inner loop runs completely on every pass of the outer one, so the iterations multiply.

## When to use

With `n = 100`, two loops one after another take n + n steps (counter ends at 200), while a loop inside a loop takes n x n steps (counter ends at 10000). The 10x10 multiplication table uses the outer loop for the row and the inner loop for the column.

```python
for i in range(1, 11):
    for j in range(1, 11):
        print(i * j, end="\t")
    print()
```

See [[Lec_03-Conditions and While Loops|Lec 03]].
