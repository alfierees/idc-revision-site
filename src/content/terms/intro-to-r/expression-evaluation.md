---
title: "Expression Evaluation"
subject: intro-to-r
aliases: []
related: ["Variable", "Assignment Operator"]
source_folder: intro-to-r
ai_drafted: true
---

R computes an expression's value once, when it runs. A result stored with the [[Assignment Operator]] does not update if the inputs change later.

## When to use

In Lec 02, `y <- x*10^3` gives 430, and `y` stays 430 even if `x` is changed afterwards, until the `y <-` line is run again. The same applies to `bmi`, which will not update by itself if its inputs change.

See [[Lec_02-Variables and Assignment|Lec 02]].
