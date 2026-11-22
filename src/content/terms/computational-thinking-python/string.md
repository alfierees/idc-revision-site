---
title: String
subject: computational-thinking-python
aliases: ["strings"]
related: ["Empty String", "String Indexing", "String Slicing", "Substring Test", "ASCII and Unicode", "Type Casting"]
source_folder: computational-thinking-python
ai_drafted: true
---

A sequence of characters in quotes; single and double quotes behave the same. `+` joins strings and `*` repeats them, and strings are never changed in place, since each method such as `upper` returns a new string.

## When to use

`input()` returns a string, so cast before doing arithmetic: `"3" + 4` is a `TypeError`, while `"3" * 4` is `"3333"`. Strings compare character by character using character codes, so uppercase sorts before lowercase.

See [[Lec_02-Numeric Values and Strings|Lec 02]].
