---
title: Linear Search
subject: computational-thinking-python
aliases: []
related: ["Binary Search", "Time Complexity", "Best, Average and Worst Case"]
source_folder: computational-thinking-python
ai_drafted: true
---

Checking each element one by one from the start until the target is found. It works on **any** list, sorted or not, but is slow for big lists; the sample code returns the index, or `-1` for not found.

```python
def linear_search(lst, num):
    for i in range(len(lst)):
        if lst[i] == num:
            return i      # found: return the index
    return -1             # not found
```

## When to use

The number of comparisons equals the target's position (best case 1, worst case n); compare with [[Binary Search]], which needs a sorted list. See [[Best, Average and Worst Case]].

See [[Lec_08-Searching and Sorting|Lec 08]].
