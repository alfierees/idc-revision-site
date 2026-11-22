---
title: While Loop
subject: computational-thinking-python
aliases: []
related: ["Infinite Loop", "For Loop", "Break and Continue", "Sentinel Value", "Nested Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

Repeats its body while the condition is true, testing before each pass, so the body may run zero times. A loop needs an initial value, a condition and an update inside the body that moves toward making the condition false.

## When to use

Use it when the number of repeats is unknown, and a `for` loop for known counts or sequences. Forgetting the update gives an infinite loop, and indentation changes the meaning, since placing `m = m - 1` inside an `if` can stop it ever running.

See [[Lec_03-Conditions and While Loops|Lec 03]].
