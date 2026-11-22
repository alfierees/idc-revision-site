---
title: Frequency Counter
subject: computational-thinking-python
aliases: []
related: ["Dictionary", "Membership Test"]
source_folder: computational-thinking-python
ai_drafted: true
---

The standard [[Dictionary]] pattern for tallying how often each item occurs: `d.get(x, 0)` returns the current count, or `0` the first time an item is seen, so no `if` is needed.

```python
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
```

## When to use

Use it whenever a question asks how many times each character or item appears. It works because `d[key]` is strict (a missing key is an error) while `d.get(key, default)` is forgiving.

See [[Lec_07-Dictionaries and Sets|Lec 07]].
