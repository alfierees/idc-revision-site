---
title: Present Value
subject: fundamentals-of-finance
aliases: []
related:
  - Future Value
  - Discount Rate
  - Net Present Value
  - Time Value of Money
source_folder: fundamentals-of-finance
ai_drafted: true
---

The value today of a future cash flow: $PV=CF/(1+r)^t$, i.e. discounting it back $t$ periods at the [[Discount Rate]] $r$. The PV of a stream is the sum of each flow discounted to today (value additivity).

## When to use

The building block under almost everything in the course: [[Net Present Value]], bond prices and loan balances. Excel: `PV(rate, nper, pmt, [fv], [type])`, which returns a negative number for an inflow, so write `-PV(...)`.

See [[Lesson_01-Time Value of Money|Lesson 01]].
