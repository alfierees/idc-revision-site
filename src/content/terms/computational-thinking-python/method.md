---
title: Method
subject: computational-thinking-python
aliases: []
related: ["Class", "Object", "Attribute", "Self", "Constructor", "Function", "Special Methods"]
source_folder: computational-thinking-python
ai_drafted: true
---

A method is a [[Function]] defined inside a [[Class]] and called through an instance, as in `p1.bmi()`. The object before the dot is passed automatically as the first argument, [[Self]], so `p1.bmi()` is shorthand for `Patient.bmi(p1)`.

## When to use

Use methods to bundle behaviour with the data of an [[Object]], and note that inside the class [[Attribute|attributes]] are reached only through `self`. Methods can call other methods on `self`. Built-ins work the same way, for example `list.append()` and `str.upper()`.

See [[Lec_09-Classes|Lec 09]].
