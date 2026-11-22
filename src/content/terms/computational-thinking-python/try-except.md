---
title: Try-Except
subject: computational-thinking-python
aliases: ["error-handling"]
related: ["Exception", "Raise", "Finally", "Open Function"]
source_folder: computational-thinking-python
ai_drafted: true
---

Intercepts and handles exceptions raised by the code in the `try` block. When an exception occurs, control jumps to `except` and the remaining `try` statements are skipped; `else` runs if nothing went wrong and `finally` always runs.

## When to use

Name the exception type (`ValueError`, `ZeroDivisionError`) rather than using a bare `except:`, which hides which error happened. Wrap `open` in it, since a missing file raises an exception.

See [[Lec_10-Exceptions and File IO|Lec 10]].
