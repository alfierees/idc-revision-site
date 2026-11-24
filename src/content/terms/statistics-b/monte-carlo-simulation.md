---
title: Monte Carlo Simulation
subject: statistics-b
aliases: ["Simulation"]
related: [Law of Large Numbers, Statistical Power, Simulating a Dataset, Normal Distribution]
source_folder: statistics-b
ai_drafted: true
---

Repeated random sampling (for example with NORM.INV(RAND(),...)) to estimate a probability as a long-run frequency.

## When to use

In PS 06 you estimate power by drawing 500 samples from the H1 world, computing each Z, counting the rejections and dividing by 500; PS 02 and PS 11 use the same idea for the variance estimator and for regression data. RAND() redraws on every recalculation, so your numbers differ slightly from the official run; the method is what carries over.

See [[PS_06-Statistical Power and Simulation|PS 06]]. Also in [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]], [[PS_11-Correlation, Regression and Simulation|PS 11]].
