---
title: Sort Key
subject: computational-thinking-python
aliases: []
related: ["Sorted and Sort", "Stable Sort"]
source_folder: computational-thinking-python
ai_drafted: true
---

The `key=` function that gives the value each item is compared by. For example, `sorted(words, key=len)` orders words by length instead of alphabetically.

## When to use

Use it when the order should depend on something computed from each item. PP 01 sorts numbers by their digit count, which is the same idea of comparing a key rather than the numbers themselves.

See [[Lec_08-Searching and Sorting|Lec 08]].
