---
title: With Statement
subject: computational-thinking-python
aliases: []
related: ["Open Function", "File IO", "Read Method", "Try-Except"]
source_folder: computational-thinking-python
ai_drafted: true
---

Opens a file and closes it automatically when the block ends, in the form `with open('myfile.txt') as reader:`. It is the recommended way to use `open`.

## When to use

Use it for any file reading or writing so you do not have to close the file yourself. Guard it with `try`/`except`, because `open` raises `FileNotFoundError` if the file is missing.

See [[Lec_10-Exceptions and File IO|Lec 10]].
