---
title: Open Function
subject: computational-thinking-python
aliases: ["open()"]
related: ["File IO", "With Statement", "Read Method", "Readline Method", "Readlines Method", "Exception"]
source_folder: computational-thinking-python
ai_drafted: true
---

`open` takes a path (its one required argument) and returns a file object. The recommended form is the [[With Statement]].

## When to use

Use it as the first step of [[File IO]]: the path is looked up relative to the current working directory, and a missing file raises `FileNotFoundError`.

```python
with open('myfile.txt') as reader:
    ...
```

See [[Lec_10-Exceptions and File IO|Lec 10]].
