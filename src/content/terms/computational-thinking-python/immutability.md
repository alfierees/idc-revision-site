---
title: Immutability
subject: computational-thinking-python
aliases: ["immutable"]
related: ["Tuple", "Mutability", "Hash Table", "Dictionary Key"]
source_folder: computational-thinking-python
ai_drafted: true
---

An object cannot be changed after creation. For a [[Tuple]], you cannot assign to an element, but you can build a new tuple and rebind the name; `t += ("five",)` creates a new tuple rather than mutating the old one.

## When to use

Strings and tuples are immutable, lists are not (see [[Mutability]]); only immutable values can be a [[Dictionary Key]] or a set element because of the [[Hash Table]].

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
