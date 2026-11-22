---
title: Run-Length Encoding
subject: computational-thinking-python
aliases: []
related: ["String", "String Indexing", "Trace Table"]
source_folder: computational-thinking-python
ai_drafted: true
---

Compressing a string into pairs of a character and the number of its consecutive repetitions, so `aabbbcc` becomes `a2b3c2`. The loop compares each character with the next one, and the last run is written after the loop because it has no next character.

## When to use

Appears as a trace-table question in PP 07 (Q4). Forgetting the closing line `text[-1] + str(count)` loses the final run, and the loop stops at the second-to-last index because it reads `text[i+1]`.

See [[PP_07-Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)|PP 07]].
