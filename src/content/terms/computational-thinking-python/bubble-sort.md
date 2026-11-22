---
title: Bubble Sort
subject: computational-thinking-python
aliases: []
related: ["Trace Table", "Nested Loop", "Selection Sort", "Sorted and Sort"]
source_folder: computational-thinking-python
ai_drafted: true
---

Repeatedly swap adjacent items that are out of order, so values drift along the list one pass at a time. The 2023 Moed A paper's version sorts in descending order: it swaps when the left item is smaller than the right.

```python
def mystery_function_2(lst):
    for i in range(len(lst) - 1, 0, -1):
        for j in range(i):
            if lst[j] < lst[j + 1]:
                temp = lst[j]
                lst[j] = lst[j + 1]
                lst[j + 1] = temp
        print(lst)
    return lst
```

## When to use

That paper's Question 3 asks you to run the code, fill in a [[Trace Table]] and write the console output (the list after each outer pass). After the pass for a given `i`, the smallest of the first `i + 1` items sits at index `i`.

See [[PP_05-Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)|PP 05]].
