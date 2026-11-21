---
title: "Body Mass Index"
subject: intro-to-r
aliases: ["bmi"]
related: ["Variable", "Expression Evaluation"]
source_folder: intro-to-r
ai_drafted: true
---

Weight in kilograms divided by height in metres squared. It is the worked example in Lec 02, built from the variables `height_of_player` and `weight_of_player`.

## When to use

In Lec 02 the code `bmi <- weight_of_player/(height_of_player/100)^2` turns a height in centimetres into metres before squaring. The brackets matter, because without them `^` would apply only to `100`.

See [[Lec_02-Variables and Assignment|Lec 02]].
