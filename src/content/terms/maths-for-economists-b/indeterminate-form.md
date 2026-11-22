---
title: Indeterminate Form
subject: maths-for-economists-b
aliases:
  - "Indeterminate Forms"
  - Zero Times Infinity Limit
related:
  - L'Hopital's Rule
  - Logarithm
  - Horizontal Asymptote
  - Vertical Asymptote
source_folder: maths-for-economists-b
ai_drafted: true
---

A limit form ($0/0$, $\infty/\infty$, $0\cdot\infty$, $0^0$) that does not fix the answer by itself. Rewrite it as a fraction, or as $\exp(\dots \cdot \ln \dots)$ for a power, and apply [[L'Hopital's Rule]].

## When to use

For $0\cdot\infty$, rewrite as a quotient, as in $x^2\ln x = \ln x / x^{-2}$. For $0^0$, take logs: $y = x^{x^2}$ has $\ln y = x^2 \ln x \to 0$, so $y \to 1$ as $x \to 0^+$. The $0^0$ limit and $0\cdot\infty$ limits both appear in the 2025 Moed B paper.

See [[Lec_03-Exponential and Logarithmic Limits and Asymptotes|Lec 03]]. Also in [[PP_33-Two-Price Profit, Tangent Lines, Limits & Extrema (2025 Moed B)|PP 33]].
