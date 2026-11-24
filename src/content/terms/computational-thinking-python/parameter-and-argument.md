---
title: Parameter and Argument
subject: computational-thinking-python
aliases: ["Formal and Actual Parameters"]
related: ["Function", "Return Value", "Variable Scope", "Local Variable", "NameError"]
source_folder: computational-thinking-python
ai_drafted: true
---

The parameter (formal parameter) is the name in the `def` line, and the argument (actual parameter) is the value passed in by the caller at the call. Arguments are evaluated before the function starts.

## When to use

Use the distinction when tracing a call: the parameter is a [[Local Variable]] that exists only while the [[Function]] runs, so using it outside gives a [[NameError]]. A function with no parameters takes no inputs, and turning a hard-coded variable into a parameter makes it an input.

See [[Lec_06-Functions|Lec 06]].
