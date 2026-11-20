---
title: Net Present Value
subject: fundamentals-of-finance
aliases:
  - NPV
  - Project Evaluation
related:
  - Present Value
  - Discount Rate
  - Internal Rate of Return
  - Free Cash Flow
  - Profitability Index
source_folder: fundamentals-of-finance
ai_drafted: true
---

The [[Present Value]] of all of a project's cash flows minus the initial investment, discounted at $r$: $NPV=-CF_0+\sum_{t=1}^{T}\frac{CF_t}{(1+r)^t}$. Accept if NPV is greater than 0; it measures the wealth a project adds today.

## When to use

The master decision rule: when NPV and [[Internal Rate of Return]] disagree, trust NPV. In Excel `NPV(rate, values)` treats the first value as $t=1$, so add the $t=0$ flow outside it. The cash flows themselves come from [[Free Cash Flow]].

See [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]].
