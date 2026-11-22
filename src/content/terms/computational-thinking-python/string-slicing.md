---
title: String Slicing
subject: computational-thinking-python
aliases: []
related: ["String", "String Indexing", "Slicing"]
source_folder: computational-thinking-python
ai_drafted: true
---

Taking a substring with `s[n:m]`, which includes position n and excludes m. Omit `n` to start at the beginning and omit `m` to go to the end; negative numbers work too.

```python
s = "Monty Python"
print(s[0:5])
print(s[3:])
```

## When to use

An empty result is not an error (`s[-3:-4]` is empty), whereas single-index access past the end is. The "Whatsapper" example in Lec 02 builds its result with `s[1:-2]`.

See [[Lec_02-Numeric Values and Strings|Lec 02]].
