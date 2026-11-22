---
title: Nested List
subject: computational-thinking-python
aliases: []
related: ["List", "Indexing", "Mutability", "Nested Loop", "For Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

A nested list is a list that contains lists, such as `[[1, 2, 3], [4, 5, 6]]`. Chain indices from the outside in: `L[outer][inner]`.

## When to use

`append` adds a list as a single element and so creates a nested list, while `extend` unpacks it. Records such as `[id, name, [grades]]` are searched with a [[For Loop]] and read with chained [[Indexing]].

```python
nested_list = [[1, 2, 3], [4, 5, 6]]
print(nested_list[0][0])   # 1
nested_list[0][1] = 7      # lists are mutable
```

See [[Lec_04-Lists, For Loops and Ranges|Lec 04]].
