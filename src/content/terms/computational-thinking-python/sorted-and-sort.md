---
title: Sorted and Sort
subject: computational-thinking-python
aliases: ["Sorted", "Sort"]
related: ["Sort Key", "Selection Sort", "Quick Sort"]
source_folder: computational-thinking-python
ai_drafted: true
---

`sorted()` returns a new sorted list and leaves the original alone, while the `.sort()` method sorts a list in place and returns `None`. Both accept `key=` and `reverse=`.

## When to use

The classic mistake is `numbers = numbers.sort()`, which sets `numbers` to `None`. Write `numbers.sort()` alone or `numbers = sorted(numbers)`; in real code prefer these built-ins to hand-written sorts.

See [[Lec_08-Searching and Sorting|Lec 08]].
