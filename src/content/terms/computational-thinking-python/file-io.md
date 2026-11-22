---
title: File IO
subject: computational-thinking-python
aliases: ["files"]
related: ["Open Function", "With Statement", "Read Method", "Write Method"]
source_folder: computational-thinking-python
ai_drafted: true
---

Reading data from and writing data to files. Text files are sequences of characters, with the newline character `'\n'` marking the end of each line.

## When to use

The recommended pattern is `with open(path) as f:` (see [[Open Function]] and [[With Statement]]), then [[Read Method]] or [[Write Method]]; `open()` raises an exception if the file is missing, so wrap it in [[Try-Except]].

See [[Lec_10-Exceptions and File IO|Lec 10]].
