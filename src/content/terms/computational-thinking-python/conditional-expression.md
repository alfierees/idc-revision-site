---
title: Conditional Expression
subject: computational-thinking-python
aliases: ["ternary operator"]
related: ["Conditional Statement", "If-Else Statement", "List Comprehension"]
source_folder: computational-thinking-python
ai_drafted: true
---

The one-line form `a if cond else b`, an `if` that produces a value; also called the ternary operator. For example `b = a if a >= 0 else -a` gives the absolute value.

## When to use

Use it for short choices such as the max of two (`c = a if a >= b else b`) and inside a [[List Comprehension]], as in `"Boom" if n % 7 == 0 or "7" in str(n) else n`. It is the one-line counterpart of an [[If-Else Statement]].

See [[Lec_03-Conditions and While Loops|Lec 03]].
