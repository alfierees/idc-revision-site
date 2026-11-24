---
title: Covariance
subject: fundamentals-of-finance
aliases: ["Cov"]
related: ["Correlation", "Portfolio Risk", "Beta"]
source_folder: fundamentals-of-finance
ai_drafted: true
---

The expected product of two returns' deviations from their means, $Cov(r_A,r_B)=\sum_i p_i\,[r_{A,i}-E(r_A)][r_{B,i}-E(r_B)]$. Rescaled by $\sigma_A\sigma_B$ it becomes the [[Correlation]]. Excel `COVARIANCE.S`.

## When to use

It is the cross term $2x_Ax_B\,Cov(r_A,r_B)$ in a portfolio's variance, and in a large portfolio only the average covariance survives. Beta is a covariance scaled by the market variance. Taught in [[Lesson_08-Risk, Return & Diversification]].
