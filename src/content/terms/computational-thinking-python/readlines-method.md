---
title: Readlines Method
subject: computational-thinking-python
aliases: ["readlines()"]
related: ["Open Function", "File IO", "Read Method", "Readline Method", "List Comprehension", "Enumerate"]
source_folder: computational-thinking-python
ai_drafted: true
---

`readlines()` returns all the lines of a file as a list of strings, and an empty list at the end of the file.

## When to use

Because it gives a list it combines with [[Enumerate]] and with a [[List Comprehension]] for filtering, for example `[line.rstrip('\n') for line in dreams_file.readlines()]`. Compare with [[Read Method]] and [[Readline Method]].

See [[Lec_10-Exceptions and File IO|Lec 10]].
