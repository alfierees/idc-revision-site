---
title: Hash Table
subject: computational-thinking-python
aliases: []
related: ["Set", "Dictionary", "Dictionary Key", "Immutability", "Membership Test"]
source_folder: computational-thinking-python
ai_drafted: true
---

The structure in which a [[Set]] and a [[Dictionary]]'s keys are stored: the element itself determines where in memory it lives, so Python can jump straight to the spot instead of searching.

## When to use

It explains why set elements and keys must be immutable (a key that changed after storing would be in the wrong place; mutable objects like lists are "unhashable") and why a [[Membership Test]] is fast. The price is a larger memory footprint.

See [[Lec_07-Dictionaries and Sets|Lec 07]].
