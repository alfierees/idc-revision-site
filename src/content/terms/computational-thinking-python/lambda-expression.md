---
title: Lambda Expression
subject: computational-thinking-python
aliases: []
related: ["Function", "First-Class Function", "Map and Filter"]
source_folder: computational-thinking-python
ai_drafted: true
---

An unnamed one-line [[Function]]: `lambda parameters: expression`. The value of the expression is returned automatically, with no `return` keyword.

```python
print((lambda x, y: x + y)(2, 3))
```

## When to use

Mainly for quick throwaway functions passed to other functions, for example `filter(lambda x: x > 2, my_list)` with [[Map and Filter]].

See [[Lec_06-Functions|Lec 06]].
