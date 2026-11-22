---
title: Dictionary Comprehension
subject: computational-thinking-python
aliases: []
related: ["List Comprehension", "Set Comprehension", "Dictionary"]
source_folder: computational-thinking-python
ai_drafted: true
---

The form `{k: v for ...}`, which builds a [[Dictionary]]. It works like a [[List Comprehension]] but you write `key: value` before the `for`.

## When to use

Use it to build a mapping from an iterable, e.g. `{x: x**2 for x in range(10)}`. A [[Set Comprehension]] uses `{}` with a single expression and no colon, so the colon is what marks a dictionary comprehension.

See [[Lec_07-Dictionaries and Sets|Lec 07]].
