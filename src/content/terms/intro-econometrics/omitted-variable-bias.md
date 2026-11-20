---
title: Omitted Variable Bias
subject: intro-econometrics
aliases: ["OVB"]
related: ["Classical Assumptions", "Hedonic Pricing", "Model Misspecification"]
source_folder: intro-econometrics
ai_drafted: true
---

Bias in $\hat\beta_1$ when a relevant variable $x_2$ correlated with the included $x_1$ is left out: it folds into the error, violating A2, and the bias is $\tilde\beta_2 S_{12}/S_{11}$. There is no bias if $S_{12}=0$ or if the omitted variable's true coefficient is zero.

## When to use

Use the sign table (true effect times covariance) to say whether the estimate is biased up or down. Worked cases are the computer-price [[Hedonic Pricing]] example and the birthweight regression in Assignment 4, where the cigarette coefficient moved from $-10.98$ with controls to $-12.906$ without.

See [[Lec_13-Exam Review|Lecture 13]] and [[Lec_11-Interaction Terms|Lecture 11]].
