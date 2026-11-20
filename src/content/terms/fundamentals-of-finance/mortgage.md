---
title: Mortgage
subject: fundamentals-of-finance
aliases:
  - Spitzer Loan
related:
  - Loan
  - Amortization
  - Outstanding Balance
  - Annuity
source_folder: fundamentals-of-finance
ai_drafted: true
---

The equal-payment (annuity or Spitzer) [[Loan]]: the total payment is constant every period, so early payments are mostly interest and the principal share grows over time. The level payment is $E=\frac{rL}{1-(1+r)^{-n}}$, or `PMT(r,n,-L)` in Excel.

## When to use

Expect to compute the level payment, split one instalment with `IPMT`/`PPMT`, or find the [[Outstanding Balance]] as the PV of the remaining payments.

See [[Lesson_05-The Four Loan Types|Lesson 05]].
