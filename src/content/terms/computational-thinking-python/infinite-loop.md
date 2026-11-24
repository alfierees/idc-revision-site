---
title: Infinite Loop
subject: computational-thinking-python
aliases: []
related: ["While Loop", "Floating-Point Error", "Logic Error"]
source_folder: computational-thinking-python
ai_drafted: true
---

A loop whose condition never becomes false, for example when the update line such as `m = m - 1` is forgotten or sits inside an `if` that stops being true.

## When to use

Check that a [[While Loop]] has initialisation, a condition and an update that makes progress. It is usually a [[Logic Error]], and a `!=` test on a float can cause one (see [[Floating-Point Error]]).

See [[Lec_03-Conditions and While Loops|Lec 03]].
