---
title: Map and Filter
subject: computational-thinking-python
aliases: ["map-filter"]
related: ["Function", "Lambda Expression", "List Comprehension", "First-Class Function", "Range"]
source_folder: computational-thinking-python
ai_drafted: true
---

`map(f, items)` applies the function `f` to every item, and `filter(f, items)` keeps only the items for which `f(item)` is true. Both return a lazy iterable (like [[Range]]), so wrap them in `list(...)` to see the values.

```python
print(list(map(int, [5.0, 1.0, 2.0, 4.0])))      # [5, 1, 2, 4]
print(list(filter(lambda x: x > 2, [1, 2, 3, 4, 5])))   # [3, 4, 5]
```

## When to use

`list(map(f, xs))` is the same as `[f(x) for x in xs]` and `list(filter(f, xs))` is the same as `[x for x in xs if f(x)]` ([[List Comprehension]]), so expect to convert between the two forms. They are usually paired with a [[Lambda Expression]], since a [[Function]] is a value in Python ([[First-Class Function]]).

See [[Lec_06-Functions|Lec 06]].
