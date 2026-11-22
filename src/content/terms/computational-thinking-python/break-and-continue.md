---
title: Break and Continue
subject: computational-thinking-python
aliases: ["break-continue"]
related: ["While Loop", "Infinite Loop", "Nested Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

`break` ends the nearest enclosing loop immediately, so execution carries on with the code after the loop. `continue` ends only the current pass, and the loop condition is tested again.

## When to use

A Lecture 3 input loop uses `break` on an empty line to leave and `continue` to ignore lines that start with `#`. `break` leaves only the nearest loop, which matters in a [[Nested Loop]], and the lecture notes that overusing it is considered poor style.

See [[Lec_03-Conditions and While Loops|Lec 03]].
