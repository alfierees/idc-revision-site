---
title: String Indexing
subject: computational-thinking-python
aliases: []
related: ["String", "Indexing", "String Slicing"]
source_folder: computational-thinking-python
ai_drafted: true
---

Reading one character with `s[i]`, zero-based, with negative indices counting from the end, so `s[-1]` is the last character. Going past either end raises `IndexError`, and each `s[i]` is itself a string of length 1.

## When to use

The slide quiz asks for the last character: `s[len(s) - 1]` works (and `s[-1]` is simpler), while `s[len(s)]` is one past the end and raises `IndexError`.

See [[Lec_02-Numeric Values and Strings|Lec 02]].
