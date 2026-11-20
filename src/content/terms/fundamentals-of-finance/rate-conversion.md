---
title: Rate Conversion
subject: fundamentals-of-finance
aliases: []
related:
  - Effective Interest Rate
  - Stated Rate
  - Real Interest Rate
source_folder: fundamentals-of-finance
ai_drafted: true
---

Moving a rate between compounding frequencies, always through the effective rate. Effective rates convert geometrically, $(1+r_{annual})=(1+r_{period})^m$; a [[Stated Rate]] is divided by $m$ to get the period rate and then converted to an [[Effective Interest Rate]].

## When to use

The one trap to remember: divide stated rates by $m$, compound effective rates with powers. Needed whenever cash flows are monthly or quarterly but the quoted rate is annual. Excel: `EFFECT`, `NOMINAL`.

See [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]].
