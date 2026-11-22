---
title: Constructor
subject: computational-thinking-python
aliases: ["__init__"]
related: ["Class", "Attribute", "Object", "Self"]
source_folder: computational-thinking-python
ai_drafted: true
---

The `__init__` method, which Python runs automatically whenever an [[Object]] is created, so it is where you initialise the [[Attribute]]s. If you write none, Python gives a default empty one with no arguments and no attributes.

```python
class Patient:
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height

p1 = Patient(72, 1.84)
p2 = Patient(60, 1.70)
```

## When to use

Calling `Patient()` with no arguments when `__init__` needs two raises a `TypeError`. Inside it, `self.weight = weight` means the field `weight` of the current object.

See [[Lec_09-Classes|Lec 09]].
