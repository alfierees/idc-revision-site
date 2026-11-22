---
title: Classical Assumptions
subject: intro-econometrics
aliases: []
related: ["Gauss-Markov Theorem", "Heteroskedasticity", "Omitted Variable Bias", "OLS Estimation"]
source_folder: intro-econometrics
ai_drafted: true
---

The five assumptions behind OLS properties: A1 mean-zero errors, A2 exogeneity $E[u\mid x_k]=0$, A3 no autocorrelation, A4 homoskedasticity, A5 normality of the errors.

## When to use

Map each to what it buys: A1 and A2 give unbiasedness, A1 to A4 give [[Gauss-Markov Theorem]] (BLUE), A1 to A5 give normal $\hat\beta$ for exact t and F inference. Then ask which assumption a problem breaks: [[Omitted Variable Bias]] breaks A2, [[Heteroskedasticity]] breaks A4.

See [[Lec_04-OLS Estimator Properties|Lecture 4]] and [[Lec_13-Exam Review|Lecture 13]].