---
title: "sample()"
subject: intro-to-r
aliases: []
related: ["Vector", "Colon Operator"]
source_folder: intro-to-r
ai_drafted: true
---

Draws values at random, so the output is different on every run.

## When to use

In Lec 01, `die_rolls <- sample(1:6,10, replace=TRUE)` simulates 10 dice rolls, where `1:6` is the set to pick from (see [[Colon Operator]]), `10` is how many to draw, and `replace=TRUE` allows repeats. There is no single correct output to show, but the result always holds 10 whole numbers from 1 to 6.

See [[Lec_01-Data Types in R|Lec 01]].
