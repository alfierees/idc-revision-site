---
title: Euler Limit
subject: maths-for-economists-a
aliases:
  - "Euler Limits"
related: ["Euler's Number", "Indeterminate Form", "Limit"]
source_folder: maths-for-economists-a
ai_drafted: true
---

A limit of the form $(1+f)^{1/f}$ with $f\to 0$, which equals $e$. This is the $1^{\infty}$ indeterminate form, and related forms give $e^k$ for the limit $k$ of the leftover power.

## When to use

Check the base is $1$ plus something tending to $0$, call it $f$, and rewrite the power as $\frac{1}{f}$ times a leftover. For example $\lim_{x\to\infty}(1+\frac{2}{x})^x=e^2$. If the base tends to $2$ instead of $1$, as in $\frac{2x+3}{x-1}$, the recipe does not apply.

See [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms|Lec 06]].
