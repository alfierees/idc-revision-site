---
title: "Package Collision"
subject: intro-to-r
aliases: ["masking"]
related: ["Pipe Operator", "dplyr", "tidyverse"]
source_folder: intro-to-r
ai_drafted: true
---

When two loaded packages share a function name and the later package hides the earlier one.

## When to use

A common case is `MASS::select()` hiding `dplyr::select()`. Fix it with `::`.

See [[Lec_07-Pipes and dplyr Basics|Lec 07]].
