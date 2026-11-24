---
title: Divide and Conquer
subject: computational-thinking-python
aliases: []
related: ["Binary Search", "Quick Sort", "Time Complexity"]
source_folder: computational-thinking-python
ai_drafted: true
---

Shrinking the problem by a constant fraction at each step, as [[Binary Search]] does by halving the search space.

## When to use

Lecture 8 uses it for [[Binary Search]] and describes [[Quick Sort]] as a fast recursive divide-and-conquer sort: pick a pivot, split into smaller, equal and larger parts, and sort the parts the same way. Halving is why a million-item sorted list needs at most about 20 looks.

See [[Lec_08-Searching and Sorting|Lec 08]].
