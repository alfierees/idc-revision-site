---
title: Write Method
subject: computational-thinking-python
aliases: ["write"]
related: ["Open Function", "With Statement", "File IO", "Read Method"]
source_folder: computational-thinking-python
ai_drafted: true
---

`write` writes a string to a file opened with mode `'w'`. You must add the newline `'\n'` yourself.

## When to use

Mode `'w'` creates the file if it does not exist and overwrites it if it does. The lecture's CSV exercise writes each student's average to a second file with `write`, inside a `with` block.

See [[Lec_10-Exceptions and File IO|Lec 10]].
