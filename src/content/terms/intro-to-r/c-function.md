---
title: "c() Function"
subject: intro-to-r
aliases: []
related: ["Vector", "Type Coercion"]
source_folder: intro-to-r
ai_drafted: true
---

`c()` (concatenate) joins values or vectors into one longer [[Vector]], keeping their order. If the inputs have mixed types, R coerces them to one type rather than raising an error.

## When to use

In Lec 03, `grades <- c(100,95,90,89,5)` builds a vector from single values, and `lol <- c(grades,a)` joins two vectors into one with 8 elements. See [[Type Coercion]] for the mixed-type case.

See [[Lec_03-Vectors|Lec 03]].
