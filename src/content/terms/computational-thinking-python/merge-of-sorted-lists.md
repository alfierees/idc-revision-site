---
title: Merge of Sorted Lists
subject: computational-thinking-python
aliases: ["Backward Merge"]
related: ["While Loop", "Trace Table", "List"]
source_folder: computational-thinking-python
ai_drafted: true
---

Merging two sorted lists means combining them into one sorted list. In the in-place version from the exam, the first list is padded with zeros and three pointers are used: `i` (last real element of the first list), `j` (last element of the second) and `k` (last free slot). At each step the larger candidate is written into slot `k` and its pointer moves back.

## When to use

Expect it as a [[Trace Table]] question: run the [[While Loop]] and record `i`, `j`, `k` and the list after each write, until `j` reaches -1. It appeared as Q4 of the 2023 Moed A paper.

See [[PP_05-Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)|PP 05]].
