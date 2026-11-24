---
title: Nested IF
subject: excel-data-analysis
aliases: []
related: ["IF Function", "Logical Test", "AND Function", "OR Function", "Approximate Match"]
source_folder: excel-data-analysis
ai_drafted: true
---

An IF placed inside another IF's true or false slot to handle several cases or bands; also written in VBA with `ElseIf`. Excel reads it top to bottom and the first true test wins, so each later test only needs one boundary. Also in [[Lec_08-VBA Macros|Lec 08]].

## When to use

Use it for bands such as seniority labels (young, older, oldest, OMG) or the BMI status in the VBA exercise. When there are many bands, a lookup with [[Approximate Match]] is the alternative to a long nested IF.

See [[Lec_02-IF Statements & Logical Functions|Lec 02]].
