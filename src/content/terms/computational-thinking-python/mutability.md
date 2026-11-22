---
title: Mutability
subject: computational-thinking-python
aliases: ["Mutable"]
related: ["List", "Immutability", "Tuple", "Slicing", "Indexing"]
source_folder: computational-thinking-python
ai_drafted: true
---

An object is mutable if it can be changed in place after creation; a [[List]] is mutable. You can assign to an index or to a slice, and the list itself changes.

## When to use

Contrast it with [[Immutability]]: tuples and strings cannot be changed, so an update creates a new object. Lecture 4 shows changing items with `mylist[1] = "two"` and replacing a stretch with a slice assignment such as `mylist[0:2] = [2, 1]`.

See [[Lec_04-Lists, For Loops and Ranges|Lec 04]].
