---
title: NameError
subject: computational-thinking-python
aliases: []
related: ["Variable Scope", "Local Variable", "Parameter and Argument", "Exception", "Boolean"]
source_folder: computational-thinking-python
ai_drafted: true
---

A `NameError` is raised when a name is not defined in the current scope, for example `NameError: name 'result' is not defined`. It is also what you get from writing `true` instead of `True`.

## When to use

A classic exam trap is using a function's [[Parameter and Argument|parameter]] outside the function: the parameter exists only in the function's [[Local Variable|local]] [[Variable Scope|scope]], so a call such as `do_something(num)` at the global level crashes because `num` was never defined there. This was Part One (a) of the 2022 Moed A paper.

See [[PP_02-Scope Error, Digit Sums, List Palindrome, Substring Count (2022 Moed A)|PP 02]].
