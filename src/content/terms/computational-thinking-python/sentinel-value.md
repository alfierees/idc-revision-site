---
title: Sentinel Value
subject: computational-thinking-python
aliases: ["Sentinel"]
related: ["While Loop", "Break and Continue"]
source_folder: computational-thinking-python
ai_drafted: true
---

A special input, such as `-1`, that ends an input loop. The standard pattern reads once before the loop, tests for the sentinel, processes the value, then reads again at the bottom, so the sentinel itself is never stored.

## When to use

Shows up as a sentinel-controlled input loop in PP 04 (Q2c) and PP 06 (Q5). `input` returns a string, so compare with `"-1"`, not the number -1, or the loop never ends.

See [[PP_06-Second Smallest, Hotel Nights, Selection Sort Trace & GPA (2023 Moed B)|PP 06]].
