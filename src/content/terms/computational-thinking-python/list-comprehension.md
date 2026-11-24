---
title: List Comprehension
subject: computational-thinking-python
aliases: []
related: ["List", "For Loop", "Dictionary Comprehension", "Set Comprehension"]
source_folder: computational-thinking-python
ai_drafted: true
---

The form `[expr for x in iterable if cond]`, which builds a **new** [[List]] in one expression; the trailing `if` filters, and an `if ... else` at the front transforms.

## When to use

Replaces a loop that appends to a list. The notebook's advice is to use them but not abuse them: with nesting and several conditions a plain [[For Loop]] is more readable. Guard against empty strings before indexing `[0]`.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
