---
title: Variable Scope
subject: computational-thinking-python
aliases: ["scope"]
related: ["Local Variable", "Function", "NameError", "Namespace"]
source_folder: computational-thinking-python
ai_drafted: true
---

The namespace in which a name is visible; each function call gets its own. Names created inside a function are local and disappear when the call ends, and the same name in different places is a different variable.

## When to use

Using a function's local name outside it raises `NameError`, as in `print(result)` after calling `factorial`. Scope-error questions such as PP 02 test this.

See [[Lec_06-Functions|Lec 06]].
