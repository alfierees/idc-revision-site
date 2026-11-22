---
title: Selection Sort
subject: computational-thinking-python
aliases: []
related: ["Time Complexity", "Quick Sort", "Sorted and Sort", "Trace Table", "Nested Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

A sort that repeatedly finds the smallest remaining element and swaps it into the next position, so after step i the first i+1 positions hold the smallest values in order. The outer loop runs n times and the inner loop scans the rest, which gives roughly `O(n^2)` steps.

## When to use

Lec 08 uses it as the slow, simple sort to compare with quick sort and the built-in sort (use the built-in in real code). It is also traced by hand in PP 06 (Q4).

See [[Lec_08-Searching and Sorting|Lec 08]].
