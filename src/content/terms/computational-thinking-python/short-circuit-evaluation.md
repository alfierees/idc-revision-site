---
title: Short-Circuit Evaluation
subject: computational-thinking-python
aliases: []
related: ["Boolean", "While Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

In `A and B` Python evaluates `B` only if `A` is true, and in `A or B` it evaluates `B` only if `A` is false. The left side can therefore guard the right side, for example `len(s) > 0 and s[0] == '#'`.

## When to use

Operand order is not cosmetic: that guard is safe on an empty string, but reversing it raises an `IndexError`. The same guard idea protects `s[0]` in an input loop and `1 / n` against `ZeroDivisionError`.

See [[Lec_03-Conditions and While Loops|Lec 03]].
