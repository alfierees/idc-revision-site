---
title: Dictionary
subject: computational-thinking-python
aliases: ["dict", "dictionaries"]
related: ["Dictionary Key", "Dictionary Comprehension", "Frequency Counter", "Hash Table", "Set", "Container"]
source_folder: computational-thinking-python
ai_drafted: true
---

A mutable mapping from unique, immutable keys to values, written as `key: value` pairs. `{}` is an empty dictionary, and values can be anything, including lists or other dictionaries.

## When to use

Looking up a missing key with `d[key]` raises `KeyError`, while `d.get(key, default)` does not, and `for key, value in d.items()` walks the pairs. The 2025 Moed A paper uses `fare_counts[fare] = fare_counts.get(fare, 0) + 1` as a [[Frequency Counter]].

See [[Lec_07-Dictionaries and Sets|Lec 07]].
