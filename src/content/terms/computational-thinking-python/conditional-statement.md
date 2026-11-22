---
title: Conditional Statement
subject: computational-thinking-python
aliases: ["conditionals"]
related: ["If-Else Statement", "Elif", "Conditional Expression"]
source_folder: computational-thinking-python
ai_drafted: true
---

Code that runs a block only if a condition holds. The colon after the condition opens the block, and the block is the lines indented beneath it, with consistent indentation within it.

```python
n = 26
if n % 13 == 0:
  print(n, "is divisible by 13")
  print(n, "/ 13 = ", int(n/13))
if n % 13 != 0:
  print(n, "is not divisible by 13")
print("Thank You")
```

## When to use

Trace which lines are indented. In `if n % 13 == 0:` the two indented prints run only when 26 is divisible by 13, but the unindented `print("Thank You")` runs whatever `n` is. See [[If-Else Statement]], [[Elif]] and [[Conditional Expression]] for the related forms.

See [[Lec_03-Conditions and While Loops|Lec 03]].
