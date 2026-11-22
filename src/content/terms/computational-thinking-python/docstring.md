---
title: Docstring
subject: computational-thinking-python
aliases: []
related: ["Function"]
source_folder: computational-thinking-python
ai_drafted: true
---

A triple-quoted string (`'''` or `"""`) placed as the first thing in a [[Function]] body. Unlike a comment it can span several lines and is stored with the function, so `help()` prints it.

```python
def xor(x, y):
    ''' computes xor of two Boolean variables, x and y '''
    return (x and (not y)) or ((not x) and y)

help(xor)
```

## When to use

Use it to document what a function does; the lecture notes that docstrings appear in `help(f)`.

See [[Lec_06-Functions|Lec 06]].
