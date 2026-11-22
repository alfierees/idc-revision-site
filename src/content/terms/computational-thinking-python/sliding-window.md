---
title: Sliding Window
subject: computational-thinking-python
aliases: []
related: ["Slicing", "For Loop", "Range", "List"]
source_folder: computational-thinking-python
ai_drafted: true
---

Taking a fixed-width slice, such as `s[i:i+3]`, for every start position `i`. A list of n items has n - 2 windows of three, so the loop runs over `range(len(lst) - 2)`.

## When to use

PP 04 (Q2b) asks for a new list where each element joins three adjacent strings: `''.join(lst[i:i+3])` for each `i`, giving `['abc', 'bcd', 'cde']` from `['a', 'b', 'c', 'd', 'e']`.

See [[PP_04-Concert Seats, In-Place Reverse, Binary Search & Star Triangle (2023 Practice Exam)|PP 04]].
