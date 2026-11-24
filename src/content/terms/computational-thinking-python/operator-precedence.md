---
title: Operator Precedence
subject: computational-thinking-python
aliases: ["Order of Operations"]
related: ["Arithmetic Operators", "Operator and Operand", "Comparison Operators"]
source_folder: computational-thinking-python
ai_drafted: true
---

Operator precedence is the order in which operators in an expression are evaluated: parentheses first, then `**`, then `*`, `/`, `//`, `%`, then `+` and `-`. Operators of equal precedence go left to right, except `**`, which groups right to left.

## When to use

A common trace question is `2 ** 3 ** 2`, which is `2 ** (3 ** 2)`, giving 512 rather than 64. Also, `in` binds tighter than `not`, so `not 1 in t` means `not (1 in t)`. Use parentheses for readability.

See [[Lec_02-Numeric Values and Strings|Lec 02]].
