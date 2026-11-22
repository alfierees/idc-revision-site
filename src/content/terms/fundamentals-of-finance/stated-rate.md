---
title: Stated Rate
subject: fundamentals-of-finance
aliases:
  - APR
related:
  - Effective Interest Rate
  - Rate Conversion
source_folder: fundamentals-of-finance
ai_drafted: true
---

A rate quoted annually but applied $m$ times a year by simple division, $r_{stated}/m$ per period. Its true annual cost is the [[Effective Interest Rate]], $(1+r_{stated}/m)^m-1$.

## When to use

When a loan is quoted as "6% annual, compounded monthly", divide by 12 to get the monthly rate, then use [[Rate Conversion]] to reach the effective annual rate. Excel: `EFFECT(stated, m)`.

See [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]].
