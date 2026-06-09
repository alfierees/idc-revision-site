---
title: Consistency
subject: econometrics
aliases: ["consistent estimator"]
related: ["endogeneity", "instrumental-variables"]
source_folder: econometrics
ai_drafted: true
---

An estimator $\hat\beta$ is **consistent** if it converges in probability to the true parameter $\beta$ as the sample size grows: $\hat\beta \xrightarrow{p} \beta$ as $n \to \infty$. Consistency is a *large-sample* property: a consistent estimator may be biased in finite samples, but its bias shrinks with $n$. Contrast with **unbiased**: $\mathbb E[\hat\beta] = \beta$ holds at every sample size, not just asymptotically.

## When to use

The distinction matters because OLS under endogeneity is **both biased AND inconsistent** — it converges to the wrong target no matter how much data you collect. [[Two Stage Least Squares|2SLS]] is biased in small samples (first-stage estimation uncertainty) but **consistent**, so it improves with $n$. [[Maximum Likelihood Estimation|MLE]] for [[Logit Model|logit]] / [[Probit Model|probit]] is similarly consistent but not unbiased. When choosing estimators, consistency is the minimum bar — without it more data is no help.
