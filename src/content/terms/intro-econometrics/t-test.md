---
title: t-test
subject: intro-econometrics
aliases: []
related: ["Confidence Interval", "p-value", "Hypothesis Testing", "F-test"]
source_folder: intro-econometrics
ai_drafted: true
---

Tests one coefficient with $t=(\hat\beta - b)/se(\hat\beta)\sim t_{N-M}$, where $b$ is the value the null asserts, against a critical value or p-value.

## When to use

Use $df = N-M$ (including the intercept in $M$), use $\alpha/2$ for two-sided tests, and read the printed table rather than R. R prints the test against zero, so for a non-zero null rebuild the statistic by hand, as in Assignment 3.

See [[Lec_13-Exam Review|Lecture 13]].
