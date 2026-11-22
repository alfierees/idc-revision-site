---
title: Tuple
subject: computational-thinking-python
aliases: ["tuples"]
related: ["List", "Immutability", "Parallel Assignment", "Dictionary Key", "String"]
source_folder: computational-thinking-python
ai_drafted: true
---

An ordered, immutable collection; it is the comma that makes it, so `(1,)` is a tuple but `(1)` is an int. "Changing" a tuple means building a new one, as `t += ("five",)` does.

## When to use

A classic exam trap is the singleton, `(1)` versus `(1,)`. Tuples support indexing, slicing and comparison, power parallel assignment and swaps, and can be dictionary keys when their elements are immutable.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
