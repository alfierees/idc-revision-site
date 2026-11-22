---
title: ASCII and Unicode
subject: computational-thinking-python
aliases: []
related: ["String"]
source_folder: computational-thinking-python
ai_drafted: true
---

Numeric codes for characters. `ord(c)` turns a character into its code and `chr(i)` turns a code back into a character, so `ord('a')` is 97 and `chr(97)` is `'a'`. Strings compare by character code, so capital letters come before lowercase ones.

## When to use

`ord(s[0]) - ord('A')` gives a letter's position in the alphabet, and `chr(ord('1') + 3)` shows that digit characters are consecutive. A Lecture 3 example classifies a character with `ord(s) <= 255` as ASCII and `ord(s) >= 256` as Unicode.

See [[Lec_02-Numeric Values and Strings|Lec 02]].
