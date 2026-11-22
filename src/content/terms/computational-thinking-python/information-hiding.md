---
title: Information Hiding
subject: computational-thinking-python
aliases: ["encapsulation"]
related: ["Class", "Attribute", "Method"]
source_folder: computational-thinking-python
ai_drafted: true
---

The idea that a [[Class]] designer decides what is visible outside it. In Python a field whose name starts with two underscores is "private", and the class offers methods to read or change state in a "legal" way.

## When to use

Python cannot enforce hiding: private names are reachable through mangled names, so it is all convention. The course does not use private fields, to keep code simple.

See [[Lec_09-Classes|Lec 09]].
