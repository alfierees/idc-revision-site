---
title: Membership Test
subject: computational-thinking-python
aliases: ["in operator"]
related: ["Dictionary", "Dictionary Key", "Set", "List", "Hash Table", "Substring Test"]
source_folder: computational-thinking-python
ai_drafted: true
---

A membership test uses the `in` operator (or `not in`) to check whether an item is present. For a [[Dictionary]] it tests the keys, not the values.

## When to use

Use it to guard a [[Dictionary]] update (`if char not in char_count`), to keep only unique items when building a list, or to check whether a student is in a [[Set]]. On a [[List]] it scans the whole list each time, which is why a [[Set]] ([[Hash Table]]) is faster for large inputs.

See [[Lec_07-Dictionaries and Sets|Lec 07]].
