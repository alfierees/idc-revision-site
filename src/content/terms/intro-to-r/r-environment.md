---
title: "R Environment"
subject: intro-to-r
aliases: []
related: ["Variable", "rm()"]
source_folder: intro-to-r
ai_drafted: true
---

The session workspace that holds the variables you create, so a script can use values left over from earlier scripts.

## When to use

In Lec 01, `a*x` works even though `x` is not defined in that script, because `x` is still in the environment from `Variables.R` or `Vectors.R`. The lecture warns that this hidden dependency means a script can break on someone else's machine, and [[rm()]] removes a variable from the environment.

See [[Lec_01-Data Types in R|Lec 01]].
