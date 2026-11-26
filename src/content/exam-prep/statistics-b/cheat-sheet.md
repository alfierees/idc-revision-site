---
title: "Cheat Sheet (Lec 1–13)"
subject: statistics-b
type: reference
description: "Everything the final uses, in the order the 20 questions come: estimators (bias, consistency, MLE), correlation and regression, every Z, t, proportion and F test, power and Cohen's d, confidence intervals and the chi-squared tests, each with a worked example from a past paper or the review sessions."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 1
pinned: true
tags:
  - statistics-b
  - exam-prep
  - cheat-sheet
aliases:
  - Statistics B Cheat Sheet
  - Statistics II Cheat Sheet
---

> **The exam:** 3 hours, **20 multiple-choice questions of 5 points**, the lecturer's formula sheet and the Z, t, F and $\chi^2$ tables provided, a financial calculator. Nothing needs memorising from the tables, but you must know **which table, which degrees of freedom, one tail or two**. Every paper since 2023 runs in the same order:
>
> | Questions | Topic | Section |
> |---|---|---|
> | **1 to 5** | Sampling distributions, unbiased and consistent estimators, MLE from a likelihood table | §1, §2, §3 |
> | **6 to 8** | Covariance, correlation, the regression line | §4 |
> | **9 to 17** | Which test, the test statistic, the decision, power, Type I and II errors, the F test | §5 to §9 |
> | **18, 19** | Confidence intervals and sample size | §10 |
> | **20** | $\chi^2$ goodness of fit or independence | §11 |
>
> Many questions are two blanks ("necessarily; not necessarily", "increases; decreases"): decide each blank on its own. The practice exam on this site is the one the lecturer worked through in the two review classes.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| "The sum / average of $n$ observations", "as $n$ grows" | Sum $\sim N(n\mu, n\sigma^2)$, average $\sim N(\mu, \sigma^2/n)$ | §1 |
| "Is the estimator unbiased?" | Compute $E(\hat\theta)$ with linearity; compare with $\theta$ | §2 |
| "Consistent?" | Bias and variance both $\to 0$ as $n \to \infty$ | §2 |
| $E(\hat\theta) = a + b\theta$, "correct it" | $\dfrac{\hat\theta - a}{b}$ | §2 |
| A likelihood table, "the MLE" | For each observed $X$, the $\theta$ with the largest entry in that column | §3 |
| $Cov$, $\rho$, $r$, "the regression line", "an extra point" | $\rho = \tfrac{Cov}{SD_X SD_Y}$, $b = r\tfrac{S_Y}{S_X}$, the line passes through $(\bar X, \bar Y)$ | §4 |
| One mean, $\sigma$ **known** | Single sample $Z$ | §5 |
| One mean, $\sigma$ unknown, normal population | Single sample $t$, $df = n - 1$ | §5 |
| Two means, both $\sigma$ known | Two samples $Z$ | §6 |
| Two means, $\sigma$ unknown but equal, normal | Two independent samples $t$, pooled, $df = n_X + n_Y - 2$ | §6 |
| A proportion, "% of", "click-through rate" | Proportion $Z$ (pooled $\hat p$ for two groups) | §7 |
| "Equal variances?" | $F = S^2_{big}/S^2_{small}$, $df = (n_{big} - 1, n_{small} - 1)$ | §8 |
| "Power", "the probability of detecting", "$\beta$" | Critical $\bar X$ under $H_0$, then its area under the **true** distribution | §9 |
| "Effect size" | Cohen's $d$: the difference in SD units | §9 |
| "95% confidence interval", "how large must $n$ be" | Estimate $\pm$ critical value $\times$ SE; solve the width for $n$ | §10 |
| Counts in categories, "fits the claimed shares" | $\chi^2$ goodness of fit, $df = k - 1$ | §11 |
| A two-way table of counts, "independent?" | $\chi^2$ independence, $df = (r - 1)(c - 1)$ | §11 |

---

## 1. Sampling distributions, CLT and LLN (Lec 01)

A **statistic** is computed from the sample; its **sampling distribution** is how it varies from sample to sample.

| Statistic | Expected value | Variance | Shape for large $n$ |
|---|---|---|---|
| $\bar X = \tfrac1n\sum X_i$ | $\mu$ | $\dfrac{\sigma^2}{n}$ | normal (CLT) |
| $\sum X_i$ | $n\mu$ | $n\sigma^2$ | normal (CLT) |
| $\hat p$ | $p$ | $\dfrac{p(1-p)}{n}$ | normal if $np > 5$ and $n(1-p) > 5$ |

**CLT:** for large $n$, $\bar X \approx N(\mu, \sigma^2/n)$ whatever the population's shape. **LLN:** $\bar X \to \mu$ as $n \to \infty$.

> [!example] Worked: practice exam Q1 (Lec 12)
> As $n$ grows, what happens to the mean and the variance of the **sum** of the observations? $\sum X_i \sim N(n\mu, n\sigma^2)$: **both increase**. The average is the opposite: same mean, variance $\sigma^2/n$ shrinks.

**An average of averages** ([[PP_03|2024 Moed A]] Q1): salaries have variance 1,000,000; each department average uses 20 workers (variance 50,000), and the company average is the mean of 10 department averages: $50{,}000/10 = 5{,}000$. The same as averaging all 200 workers at once.

---

## 2. Good estimators: unbiased and consistent (Lec 01, 02)

| Property | Definition | Check |
|---|---|---|
| **Unbiased** | $E(\hat\theta) = \theta$ | Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$ |
| **Consistent** | bias and $Var(\hat\theta) \to 0$ as $n \to \infty$ | Look for $n$ in the denominator |

- $\bar X$ is unbiased for $\mu$. A single observation $X_3$ is unbiased too, but **not consistent** (its variance stays $\sigma^2$).
- $S^2 = \dfrac{\sum(X_i - \bar X)^2}{n - 1}$ is unbiased for $\sigma^2$. Dividing by $n$ gives $E = \tfrac{n-1}{n}\sigma^2$: biased, but consistent.
- $S = \sqrt{S^2}$ is slightly biased (the square root is not linear), but asymptotically unbiased.
- **Fixing a linear bias:** $E(\hat\theta) = a + b\theta$ means $\dfrac{\hat\theta - a}{b}$ is unbiased.

> [!example] Worked: practice exam Q2 and Q3 (Lec 12)
> $X$ takes $a$, $2a$, $3a$ with probabilities 0.4, 0.2, 0.4. $E(X_1) = 0.4a + 0.4a + 1.2a = 2a$, so **$X_1/2$ is unbiased for $a$**.
>
> $E(\hat\theta_1) = \mu - \sigma^2$. Is $\hat\theta_1 + S^2$ unbiased for $\mu$? $E = \mu - \sigma^2 + \sigma^2 = \mu$: **necessarily**. $E(\hat\theta_2) = \mu/\sigma^2$; is $\hat\theta_2\cdot S^2$ unbiased? A product is not linear and the two need not be independent: **not necessarily**.

---

## 3. Maximum likelihood (Lec 03)

The **likelihood** $L(\theta) = P(\text{data} \mid \theta)$ is a function of the parameter with the data fixed. It is not a probability over $\theta$ and need not sum to 1. The **MLE** is the $\theta$ that maximises it.

**From a table** (the exam's usual form): each column is an observed value; for each column pick the row (the $\theta$) with the largest entry.

> [!example] Worked: practice exam Q5 (Lec 12)
> | | $X = 0$ | $X = 1$ |
> |---|---|---|
> | $\theta = -1$ | 0 | 1 |
> | $\theta = 0$ | 0.5 | 0.5 |
> | $\theta = 1$ | 1 | 0 |
>
> Column $X = 0$: the largest is 1 at $\theta = 1$. Column $X = 1$: 1 at $\theta = -1$. So $\hat\theta = 1$ if $X = 0$ and $-1$ if $X = 1$.

**From a formula:** write $L$, take $\ln L$, set the derivative to 0, check it is a maximum. Bernoulli gives $\hat p = \sum X_i / n$; normal gives $\hat\mu = \bar X$ and $\hat\sigma^2 = \tfrac{\sum(x_i - \bar X)^2}{n}$ (biased). MLEs are almost always consistent, not always unbiased, and **invariant**: the MLE of $g(\theta)$ is $g(\hat\theta)$.

---

## 4. Covariance, correlation and regression (Lec 11)

$$
Cov(X, Y) = E\big[(X - EX)(Y - EY)\big] = E(XY) - E(X)E(Y), \qquad \rho = \frac{Cov(X, Y)}{SD(X)\,SD(Y)}
$$

- $-1 \le \rho \le 1$. $\rho = \pm1$: all points on one line. $\rho = 0$: no **linear** relation (a parabola can have $\rho = 0$). Independent implies $Cov = 0$, not the reverse.
- Sample versions divide by $n - 1$: $r = \dfrac{\sum(x_i - \bar x)(y_i - \bar y)}{(n - 1)S_XS_Y}$ (Pearson's $r$, biased but consistent).

**The regression line** $\hat Y = a + bX$:

$$
b = r\,\frac{S_Y}{S_X} = \frac{Cov(X, Y)}{S_X^2}, \qquad a = \bar Y - b\bar X
$$

| Fact | Consequence |
|---|---|
| The line passes through $(\bar X, \bar Y)$ | $\bar Y = a + b\bar X$: slope 34, intercept 56, $\bar X = 50$ gives $\bar Y = 1756$ |
| $r = 0$ | Slope is **necessarily** 0; intercept $= \bar Y$, **not necessarily** 0 |
| Sum of residuals is 0 | $\sum(y_i - \hat y_i) = 0$ |
| Least squares | Minimises $\sum(y_i - \hat y_i)^2$ |
| Not symmetric | $Y$ on $X$ and $X$ on $Y$ are different lines unless $\lvert r\rvert = 1$ |
| An outlier far from the line | Can flatten the slope a lot (2024 Moed A Q7) |

> [!example] Worked: practice exam Q6 (Lec 12)
> 16 points give $r = 1$. A 17th point is added. Could $r$ still be 1? **Yes**, if it is on the same line. Could it be $-1$? **No**: 16 points already sit on an upward line.

---

## 5. One mean: the Z and t tests (Lec 04, 05)

**The five steps.** (1) Parameter. (2) $H_1$ from the question's words, $H_0$ its complement (the "=" goes in $H_0$). (3) The test statistic and its distribution under $H_0$. (4) Compute it. (5) Compare with the critical value (or the $p$-value with $\alpha$) and conclude in words.

| Test | When | Statistic | Under $H_0$ |
|---|---|---|---|
| Single sample $Z$ | $\sigma$ known, $\bar X$ normal | $Z = \dfrac{\bar X - \mu_0}{\sigma/\sqrt n}$ | $N(0, 1)$ |
| Single sample $t$ | $\sigma$ unknown, $X$ normal | $t = \dfrac{\bar X - \mu_0}{S/\sqrt n}$ | $t_{n-1}$ |

**Tails** ($\alpha = 0.05$): $H_1: \mu > \mu_0$ rejects for $Z > 1.645$; $\mu < \mu_0$ for $Z < -1.645$; $\mu \ne \mu_0$ for $\lvert Z\rvert > 1.96$. The $p$-value is the probability of the observed statistic **or more extreme** under $H_0$; double one tail for a two-sided test.

> [!example] Worked: practice exam Q15 (Lec 12)
> A treatment "decreases anxiety": $n = 12$, $\bar X = 8.4$, $S = 1.3$, $\mu_0 = 10$. Left-tailed $t$: $t = \dfrac{8.4 - 10}{1.3/\sqrt{12}} = -4.26$. Critical $-t_{11}^{0.05} = -1.796$. $-4.26 < -1.796$: **reject $H_0$**, significant decrease.

"Do not reject" is **not** "$H_0$ is true": it means no evidence either way.

---

## 6. Two means (Lec 05, 06)

| Test | When | Statistic | Under $H_0$ |
|---|---|---|---|
| Two samples $Z$ | both $\sigma$ known | $Z = \dfrac{\bar X - \bar Y - (\mu_X - \mu_Y)_0}{\sqrt{\sigma_X^2/n_X + \sigma_Y^2/n_Y}}$ | $N(0, 1)$ |
| Two independent samples $t$ | $\sigma$ unknown, **equal**, both normal | $t = \dfrac{\bar X - \bar Y - (\mu_X - \mu_Y)_0}{\sqrt{S^2_p\left(\tfrac1{n_X} + \tfrac1{n_Y}\right)}}$ | $t_{n_X + n_Y - 2}$ |

$$
S^2_p = \frac{(n_X - 1)S_X^2 + (n_Y - 1)S_Y^2}{n_X + n_Y - 2}
$$

Pool the **variances**, not the standard deviations.

> [!example] Worked: practice exam Q10 (Lec 12)
> Economics $n = 100$, $\bar X = 75$; law $n = 80$, $\bar Y = 70$; both $\sigma = 10$. $Z = \dfrac{75 - 70}{\sqrt{100/100 + 100/80}} = \dfrac{5}{1.5} = 3.33$.

> [!warning] "Which test is allowed?" (practice exam Q11)
> Sample SDs (so $\sigma$ unknown) rule out $Z$. A non-normal population rules out $t$, even with $n = 35$: a large $n$ makes the **average** normal, it does not make $\sigma$ known. Answer: **cannot; cannot**.

---

## 7. Proportions (Lec 07)

A proportion is the mean of a 0/1 variable. Under $H_0$ the hypothesised $p$ fixes the variance too, so it is always a $Z$ test (no $t$).

| Test | Statistic |
|---|---|
| One proportion | $Z = \dfrac{\hat p - p_0}{\sqrt{p_0(1 - p_0)/n}}$ |
| Two proportions | $Z = \dfrac{\hat p_1 - \hat p_2}{\sqrt{\hat p(1 - \hat p)\left(\tfrac{1}{n_1} + \tfrac{1}{n_2}\right)}}$, with pooled $\hat p = \dfrac{x_1 + x_2}{n_1 + n_2}$ |

Conditions: $np > 5$ and $n(1 - p) > 5$ in every group.

> [!example] Worked: Katy and Tom (Lec 07)
> **Katy:** 30 women in 100 students, is the share different from 50%? $Z = \dfrac{0.3 - 0.5}{\sqrt{0.25/100}} = -4$, $p = 2P(Z < -4) = 0.0000634$: reject, the share is significantly **below** 50%.
>
> **Tom:** 18 clicks of 1000 (blue) against 21 of 700 (green). Pooled $\hat p = 39/1700 = 0.023$. $Z = \dfrac{0.03 - 0.018}{\sqrt{0.023\cdot0.977\left(\tfrac1{1000} + \tfrac1{700}\right)}} = 1.62$, $p = 0.105$: **do not reject**.

---

## 8. Equality of variances: the F test (Lec 07)

A difference of variances has no usable distribution, so test the **ratio**. For two independent normal samples, under $H_0: \sigma_X^2 = \sigma_Y^2$:

$$
F = \frac{S_X^2}{S_Y^2} \sim F(n_X - 1,\ n_Y - 1), \quad\text{larger variance on top}
$$

Reject when $F$ exceeds the table value. Rejecting means the pooled $t$ test's equal-variance assumption fails.

> [!example] Worked: practice exam Q17 (Lec 12)
> $n = 16$, $S = 2.5$ and $n = 10$, $S = 1.2$. $F = \tfrac{6.25}{1.44} = 4.34$ against $F_{15, 9} = 3.01$: **reject** equal variances.

---

## 9. Errors, power and effect size (Lec 06)

| | $H_0$ true | $H_0$ false |
|---|---|---|
| Reject $H_0$ | **Type I** error, probability $\alpha$ | correct: **power** $1 - \beta$ |
| Do not reject | correct, $1 - \alpha$ | **Type II** error, $\beta$ |

**Computing power** (Z test): (1) critical $\bar X$ under $H_0$: $\bar X_{crit} = \mu_0 + z_{crit}\tfrac{\sigma}{\sqrt n}$. (2) Standardise it around the **true** mean. (3) Power is the area beyond it.

> [!example] Worked: practice exam Q12 (Lec 12)
> $n = 49$, $\sigma = 4$, $H_0: \mu = 30$ two-sided, $\alpha = 0.05$, true $\mu = 32$. $\bar X_{crit} = 30 + 1.96\cdot\tfrac47 = 31.12$. $Z = \tfrac{31.12 - 32}{4/7} = -1.54$. Power $= 1 - \Phi(-1.54) = 1 - 0.0618 = \mathbf{0.938}$. (The left critical value adds almost nothing.)

```graph
type: stats-power
```

| Power goes **up** with | Power goes **down** with |
|---|---|
| larger $n$ | larger $\sigma$ |
| larger $\alpha$ | smaller $\alpha$ |
| larger true difference (effect size) | using $t$ when $Z$ was allowed |
| one-tailed test in the **right** direction | one-tailed test in the wrong direction (power near 0) |

**Cohen's $d$** is the difference in standard-deviation units: $d = \dfrac{\mu_1 - \mu_0}{\sigma}$ (single $Z$), $\dfrac{\mu_X - \mu_Y}{S_p}$ (pooled $t$). Benchmarks 0.2 small, 0.5 medium, 0.8 large. A huge $n$ makes a tiny $d$ significant.

> [!tip] $\alpha$ does not change when the test is valid
> Using $t$ where $Z$ was possible: the Type I error stays $\alpha$, but $t$ has fatter tails, so power falls and **$\beta$ increases** (practice exam Q14).

---

## 10. Confidence intervals (Lec 08)

$$
\text{estimate} \pm \text{critical value}_{\alpha/2} \times \text{SE}
$$

| Parameter | Interval |
|---|---|
| $\mu$, $\sigma$ known | $\bar X \pm z_{1-\alpha/2}\,\dfrac{\sigma}{\sqrt n}$ |
| $\mu$, $\sigma$ unknown | $\bar X \pm t_{n-1}^{\alpha/2}\,\dfrac{S}{\sqrt n}$ |
| $\mu_X - \mu_Y$, pooled | $\bar X - \bar Y \pm t_{n_X + n_Y - 2}^{\alpha/2}\sqrt{S_p^2\left(\tfrac1{n_X} + \tfrac1{n_Y}\right)}$ |
| $p$ | $\hat p \pm z_{1-\alpha/2}\sqrt{\dfrac{\hat p(1 - \hat p)}{n}}$ |

> [!example] Worked: practice exam Q18 and Q19 (Lec 12)
> $n = 51$, $\bar X = 44.27$, $S = 8.7$, 95%: $t_{50}^{0.025} = 2.009$, so $44.27 \pm 2.009\cdot\tfrac{8.7}{\sqrt{51}}$, i.e. $41.82 \le \mu \le 46.72$.
>
> **Sample size:** a 95% interval for a proportion with **full width** at most 3%. With the worst case $p = 0.5$: $2\cdot1.96\cdot\tfrac{0.5}{\sqrt n} \le 0.03$, so $\sqrt n \ge 65.33$, $n \ge 4268.4$: round **up** to $n = 4269$.

Width grows with confidence and $\sigma$, shrinks with $n$. **Duality:** a two-sided test at $\alpha$ rejects $H_0: \mu = \mu_0$ exactly when $\mu_0$ is outside the $1 - \alpha$ interval. "95%" describes the procedure: this interval either contains $\mu$ or not.

---

## 11. Chi-squared tests (Lec 09)

$$
\chi^2 = \sum\frac{(O - E)^2}{E}, \qquad \text{reject in the upper tail only}
$$

| | Goodness of fit | Independence |
|---|---|---|
| Question | Does one variable follow the claimed shares? | Are two categorical variables independent? |
| Expected | $E_i = n\,p_{i,0}$ | $E_{ij} = \dfrac{\text{row total}\times\text{column total}}{N}$ |
| $df$ | $k - 1$ | $(r - 1)(c - 1)$ |
| Condition | every $E \ge 5$ | every $E \ge 5$ |

Critical values at 5%: $df = 1$: 3.841, $df = 2$: 5.991, $df = 5$: 11.070.

> [!example] Worked: practice exam Q20 (Lec 12)
> Claimed 6% widowed, 58% married, 34% single; 100 people observed 13, 50, 37. $\chi^2 = \tfrac{49}{6} + \tfrac{64}{58} + \tfrac{9}{34} = 9.53 > 5.991$ ($df = 2$): **reject** the claim.

> [!example] Worked: gender and party in the Senate (Lec 09)
> Male 35 D, 40 R; female 16 D, 9 R. $E_{\text{male}, D} = 0.75\cdot0.51\cdot100 = 38.25$, and so on. $\chi^2 = 2.25 < 3.841$ ($df = 1$): **do not reject** independence. With two categories, $\chi^2 = Z^2$.
