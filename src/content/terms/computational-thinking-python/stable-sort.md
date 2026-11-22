---
title: Stable Sort
subject: computational-thinking-python
aliases: []
related: ["Sort Key", "Sorted and Sort"]
source_folder: computational-thinking-python
ai_drafted: true
---

A sort in which items with equal keys keep their original order. Python's sorting behaves this way, so `sorted(words, key=len)` keeps `'cat'` before `'dog'` and `'ant'` after them, all three having length 3.

## When to use

Matters when sorting by a key that can tie. In PP 01 the insertion-sort answer uses strict `>` so it is stable, though the question accepts both outputs, so stability was not required. The lecture notes that stability is documented Python behaviour rather than something stated on the slides.

See [[PP_01-Digit-Count Sort, Float Digits, Binary Search Trace (Practice Exam, undated)|PP 01]].
