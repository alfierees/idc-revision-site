---
title: Attribute
subject: computational-thinking-python
aliases: ["field"]
related: ["Object", "Class", "Constructor", "Method", "Self"]
source_folder: computational-thinking-python
ai_drafted: true
---

Data held by an [[Object]], also called a field; attributes represent the object's state. Each object has its own, so changing `p2.weight` does not change `p1.weight`.

## When to use

In a [[Class]] question, ask what attributes (data per instance) and what methods the object needs. Python does not declare fields up front: they exist because the [[Constructor]] or another [[Method]] assigns them, and reading one that was never set raises `AttributeError`.

See [[Lec_09-Classes|Lec 09]].
