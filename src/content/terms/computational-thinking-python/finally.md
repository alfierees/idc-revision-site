---
title: Finally
subject: computational-thinking-python
aliases: []
related: ["Try-Except", "Exception"]
source_folder: computational-thinking-python
ai_drafted: true
---

A clause of `try` / `except` / `else` / `finally` that **always** runs, even if the [[Exception]] is not handled or you leave with `break`, `continue` or `return`.

```python
try:
    age = int(input("Please enter your age: "))
except ValueError:
    print("Hey, that wasn't a number!")
else:
    print(f"I see that you are {age} years old.")
finally:
    print("It was really nice talking to you. Goodbye!")
```

## When to use

Use it for cleanup code that must always run; a `return` inside `try` still triggers `finally` first. See [[Try-Except]].

See [[Lec_10-Exceptions and File IO|Lec 10]].
