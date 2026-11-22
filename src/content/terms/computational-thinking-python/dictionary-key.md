---
title: Dictionary Key
subject: computational-thinking-python
aliases: []
related: ["Dictionary", "Immutability", "Hash Table", "Membership Test", "Tuple"]
source_folder: computational-thinking-python
ai_drafted: true
---

The lookup name in a [[Dictionary]]. Keys must be unique and immutable (numbers, strings, tuples of immutables); a list cannot be a key. Assigning to an existing key silently overwrites its value.

## When to use

The lecture's "David Cohen" trap: two students with the same name cannot both be keys, so the later assignment overwrites the earlier (the slide's answer is `543`). The fix is to use the unique id as the key. `in` tests keys, not values, and keys must be immutable because they are stored in a [[Hash Table]].

See [[Lec_07-Dictionaries and Sets|Lec 07]].
