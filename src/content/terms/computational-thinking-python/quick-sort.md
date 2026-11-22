---
title: Quick Sort
subject: computational-thinking-python
aliases: []
related: ["Divide and Conquer", "Time Complexity", "Selection Sort", "Best, Average and Worst Case", "List Comprehension", "Sorted and Sort"]
source_folder: computational-thinking-python
ai_drafted: true
---

Quick sort is a fast, recursive, [[Divide and Conquer]] sort: pick a pivot, split the list into elements smaller than, equal to and larger than the pivot, sort the smaller and larger parts the same way, and join the three pieces. It is O(n log n) on average.

## When to use

Expect to trace it on a small list: for `[64, 34, 25, 12, 22]` the middle element 25 is the pivot, giving `[12, 22]`, `[25]` and `[64, 34]`. A function that calls itself needs a stopping case (`len(arr) <= 1`). In real code, just use the built-in [[Sorted and Sort|sort]].

```python
left = [x for x in arr if x < pivot]
middle = [x for x in arr if x == pivot]
right = [x for x in arr if x > pivot]
return quick_sort(left) + middle + quick_sort(right)
```

See [[Lec_08-Searching and Sorting|Lec 08]].
