---
title: Set Comprehension
subject: computational-thinking-python
aliases: []
related: ["Set", "List Comprehension", "Dictionary Comprehension"]
source_folder: computational-thinking-python
ai_drafted: true
---

The form `{x for ...}`, which builds a set. It has the same syntax as a list comprehension but with braces and a single expression and no colon.

```python
print({x for x in range(20) if x % 2 == 1})
```

## When to use

Use it to build a set of items in one expression. A colon (`{x: ... for ...}`) makes it a dictionary comprehension instead, so check which one a question shows.

See [[Lec_07-Dictionaries and Sets|Lec 07]].
