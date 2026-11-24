---
title: "Type Coercion"
subject: intro-to-r
aliases: ["Coercion"]
related: ["Data Type", "Logical", "Numeric", "c() Function"]
source_folder: intro-to-r
ai_drafted: true
---

Converting a value from one type to another, e.g. `as.numeric(TRUE)` is 1. R also does it silently when types are mixed.

## When to use

In Lec 01 it is done on purpose with `as.numeric()` and `as.logical()`, where `as.logical(0)` gives `FALSE`. In Lec 03, [[c() Function]] silently coerces mixed input to one type, for example `c(1,"a",TRUE)` gives a character vector.

See [[Lec_01-Data Types in R|Lec 01]].
