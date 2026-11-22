---
title: Any and All
subject: computational-thinking-python
aliases: []
related: ["List Comprehension", "Boolean"]
source_folder: computational-thinking-python
ai_drafted: true
---

`any(iterable)` is true when at least one element is true; `all(iterable)` is true only when every element is true. On an empty sequence `all([])` is True and `any([])` is False.

## When to use

The typical pattern is to build a list of [[Boolean]] values with a [[List Comprehension]], then collapse it with `any` or `all`. For example `all([c.islower() for c in "Python"])` is False because of the capital P, and `any([8 <= int(c) <= 9 for c in str(2**32 - 1)])` is True because 4294967295 contains a 9.

See [[Lec_05-List Comprehension and Tuples|Lec 05]].
