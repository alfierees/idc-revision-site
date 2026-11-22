---
title: Accumulator
subject: computational-thinking-python
aliases: []
related: ["For Loop", "Frequency Counter"]
source_folder: computational-thinking-python
ai_drafted: true
---

A variable that starts at a base value and is updated on every pass of a loop, so it builds up a running total, count or product. The start value matters: 0 for a sum, 1 for a product (the identity for multiplication).

```python
count = 0
for word in message.split():
    if len(word) >= min_length:
        count += 1
```

## When to use

Past-paper functions use `count = 0` or `total_fare = 0` before a [[For Loop]] and add to it inside. A [[Frequency Counter]] dictionary is the same idea, updated with `fare_counts.get(fare, 0) + 1`.

See [[PP_07-Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)|PP 07]].
