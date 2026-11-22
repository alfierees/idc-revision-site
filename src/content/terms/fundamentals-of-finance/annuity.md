---
title: Annuity
subject: fundamentals-of-finance
aliases: ["Annuities"]
related: ["Present Value", "Growing Annuity", "Perpetuity", "Discount Rate"]
source_folder: fundamentals-of-finance
ai_drafted: true
---

A finite stream of equal payments $C$ for $n$ periods, valued with $PV=\frac{C}{r}\left(1-(1+r)^{-n}\right)$ instead of discounting each payment. It is an ordinary annuity when payments fall at period ends and an annuity-due when they fall at period starts.

## When to use

Use it for level payment streams such as loan instalments, deferred payments or retirement income. Excel: `-PV(rate, nper, pmt)`, or `PMT` to solve for the payment; for an annuity-due add the `type` argument 1.

See [[Lesson_01-Time Value of Money|Lesson 01]].
