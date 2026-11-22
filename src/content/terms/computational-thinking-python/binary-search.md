---
title: Binary Search
subject: computational-thinking-python
aliases: []
related: ["Linear Search", "Divide and Conquer", "Time Complexity"]
source_folder: computational-thinking-python
ai_drafted: true
---

On a sorted list, guess the middle element and discard the half that cannot contain the target, so each wrong guess halves the range. It relies entirely on the list being sorted; it returns `-1` if the number is absent.

```python
def binary_search(lst, num):
    left = 0
    right = len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == num:
            return mid
        elif lst[mid] < num:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

## When to use

Expect to trace it: searching for 49 in `[1, 3, 4, 6, 9, 12, 15, 17, 21, 34, 41, 49, 65]` checks indexes 6, 9 and 11, and binary search needs about log base 2 of n steps (20 for a million items, against up to n for [[Linear Search]]). On an unsorted list it can wrongly return `-1` for a value that is present. It is an example of [[Divide and Conquer]].

See [[Lec_08-Searching and Sorting|Lec 08]].
