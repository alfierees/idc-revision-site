---
title: Floating-Point Error
subject: computational-thinking-python
aliases: ["rounding error"]
related: ["Float", "While Loop", "Infinite Loop"]
source_folder: computational-thinking-python
ai_drafted: true
---

Decimal fractions like 0.1 cannot be stored exactly in binary, so repeated addition accumulates tiny errors: the accumulated value is `0.8999999999999999`, not `0.9`.

## When to use

Never compare a [[Float]] with `==` or `!=` in a [[While Loop]] condition: a loop `while start != 0.9` never matches and becomes an [[Infinite Loop]]. Use `<` or a tolerance (epsilon) instead.

See [[Lec_03-Conditions and While Loops|Lec 03]].
