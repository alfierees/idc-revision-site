---
title: Law of Large Numbers
subject: statistics-b
aliases: [LLN]
related: [Central Limit Theorem, Sampling Distribution of the Average, Point Estimation, Monte Carlo Simulation, Statistical Power]
source_folder: statistics-b
ai_drafted: true
---

The sample average is more likely to be close to the population expected value $\mu$ the larger the sample is: $\bar X \to \mu$ as $n \to \infty$.

## When to use

Lec 01 derives it from the [[Central Limit Theorem]]: $\bar X \sim N(\mu, \sigma^2/n)$ and $\sigma^2/n \to 0$, so the distribution collapses onto $\mu$. It is the first estimation idea, and it is why a simulated frequency in a [[Monte Carlo Simulation]] (such as the PS 06 power simulation) can be trusted.

See [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]. Also in [[PS_06-Statistical Power and Simulation|PS 06]]. Seen in: Statistics A.
