---
title: Rational Expectations Equilibrium
subject: micro
aliases: ["REE", "rational expectations"]
related: ["adverse-selection", "screening"]
source_folder: micro
ai_drafted: true
---

A **rational expectations equilibrium (REE)** is a market outcome in which the price (or any other equilibrium statistic agents condition on) is *consistent* with the inferences agents draw from it. In an [[Adverse Selection]] market this means: given the price the uninformed side offers, the informed side's participation decision is optimal — and the resulting pool composition exactly justifies that price. Any price for which the implied pool would *not* support it is not a REE.

## When to use

Use REE as the equilibrium concept whenever agents must form beliefs about something they cannot directly observe (quality, type, risk class) and the only signal is the market price. The standard solution method: hypothesise a candidate equilibrium (e.g. "all types trade"), compute the average value of the resulting pool at that price, and check the consistency condition. If the candidate fails, restrict the pool ("only the bad types trade") and re-test. The set of consistent candidates is the REE — there may be several (lemons equilibrium *and* the all-trade equilibrium can co-exist).
