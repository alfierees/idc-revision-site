---
title: t Distribution
subject: statistics-b
aliases: ["Student's t Distribution"]
related: ["Chi-Squared Distribution", "Degrees of Freedom", "Normal Distribution", "Single Sample t Test", "Two Independent Samples t Test", "Critical Value", "Confidence Interval"]
source_folder: statistics-b
ai_drafted: true
---

A normal variable divided by a [[Chi-Squared Distribution]] based variable. It has a shape similar to the normal but heavier tails when df is small, and tends to $N(0,1)$ as the degrees of freedom grow. The heavier tails pay for not knowing $\sigma$.

## When to use

Use it instead of the normal whenever $\sigma$ is replaced by $S$: $df=n-1$ for one sample and $n_X+n_Y-2$ for two pooled samples. Its critical values come from the t table and are larger than the matching Z values; the same critical values feed the [[Confidence Interval]].

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]].
