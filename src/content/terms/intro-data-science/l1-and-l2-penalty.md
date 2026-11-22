---
title: L1 and L2 Penalty
subject: intro-data-science
aliases: ["L1 Penalty", "L2 Penalty", "regularization"]
related: ["Ridge Regression", "Lasso Regression", "Overfitting", "Cross-Validation"]
source_folder: intro-data-science
ai_drafted: true
---

Regularisation terms added to the loss: L1 adds $\lambda \sum_j |\beta_j|$ (sum of absolute coefficients), L2 adds $\lambda \sum_j \beta_j^2$ (sum of squared coefficients).

## When to use

L2 ([[Ridge Regression]]) shrinks all coefficients without zeroing any; L1 ([[Lasso Regression]]) can zero some exactly. In PS 02 raising alpha from 0.01 to 1.0 pushes many more Lasso coefficients to zero. Choose the penalty strength with [[Cross-Validation]].

See [[Lecture 4 - Regression|Lec 4]].
