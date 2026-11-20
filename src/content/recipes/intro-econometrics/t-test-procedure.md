---
title: Hypothesis testing procedure (t-test)
subject: intro-econometrics
related_terms: ["t-test", "t-statistic", "critical-value", "significance-level", "p-value"]
source_folder: intro-econometrics
ai_drafted: true
---

Use this to test a claim about one regression coefficient, for example "does income affect consumption?" or "is the marginal propensity to consume 80%?". It is the summary of Lecture 6's testing procedure.

1. Write $H_0$ and $H_1$.
2. Compute the t-statistic, $t(\hat\beta_1)=\dfrac{\hat\beta_1-b}{se(\hat\beta_1)}$.
3. Get the critical value for the chosen $\alpha$ (1-tailed or 2-tailed row, correct df).
4. Compare and decide. Equivalent shortcut: reject iff $p<\alpha$ (two-sided: iff $b\notin$ the $(1-\alpha)$ CI).

## Common pitfalls

- Say "fail to reject", never "accept": not rejecting only means the data are consistent with $H_0$.
- The `t value` column of R's `summary(lm)` tests only $H_0:\beta_k=0$; for any other null you must compute $(\hat\beta_k-b)/se$ yourself.

## Worked example

Consumption on GDP (Israeli data, 32 df): $\hat\beta_1=0.81547$, $se=0.01914$, critical value $t_{0.025}[32]=2.0369$ at $\alpha=5\%$. To test whether the marginal propensity to consume is 80%, take $H_0:\beta_1=0.8$ and compute $t=(0.81547-0.8)/0.01914=0.808$. Since $0.808<2.0369$, fail to reject.
