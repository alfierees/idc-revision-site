---
title: Effective Interest Rate
subject: fundamentals-of-finance
aliases: ["EAR"]
related: ["Stated Rate", "Rate Conversion", "Internal Rate of Return", "Real Interest Rate"]
source_folder: fundamentals-of-finance
ai_drafted: true
---

The true annual cost or return after compounding, also called the EAR: $(1+r_{stated}/m)^m-1$. When fees are involved it is the IRR of the actual cash flows.

## When to use

Use it to compare loans or deposits quoted with different compounding, converting from a [[Stated Rate]] by dividing by $m$ and compounding. Excel `EFFECT(stated, m)` gives it and `NOMINAL(eff, m)` reverses it.

See [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]].
