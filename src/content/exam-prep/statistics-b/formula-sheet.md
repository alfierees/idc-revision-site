---
title: "Tests and Estimators Formula Sheet"
subject: statistics-b
type: reference
description: "Every test statistic, its conditions and its distribution in one table, plus the estimator rules, correlation and regression, power, Cohen's d, every confidence interval, the chi-squared tests and the critical values the papers keep using."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 2
pinned: true
tags:
  - statistics-b
  - exam-prep
  - formula-sheet
aliases:
  - Statistics B Formula Sheet
---

> The exam gives you the lecturer's formula sheet and the tables. This page adds what the sheet does not say: **when** each formula is allowed, and the number to expect. Worked examples are on the [[Cheat Sheet (Lec 1–13)]].

## Expectation and variance rules

| Rule | Formula |
|---|---|
| Linearity | $E(aX + bY + c) = aE(X) + bE(Y) + c$ |
| Scaling | $Var(aX + c) = a^2Var(X)$, $\;SD(aX + c) = \lvert a\rvert SD(X)$ |
| Independent sum | $Var(X + Y) = Var(X) + Var(Y)$ |
| Average of $n$ | $E(\bar X) = \mu$, $\;Var(\bar X) = \dfrac{\sigma^2}{n}$, $\;SE = \dfrac{\sigma}{\sqrt n}$ |
| Sum of $n$ | $E = n\mu$, $\;Var = n\sigma^2$ |
| Proportion | $E(\hat p) = p$, $\;Var(\hat p) = \dfrac{p(1 - p)}{n}$ |
| Covariance | $Cov(X, Y) = E(XY) - E(X)E(Y)$ |
| Correlation under a change of units | $\rho(bX + a,\ dY + c) = \pm\rho(X, Y)$, sign of $bd$ |

## Estimators

| Estimator | Unbiased? | Consistent? |
|---|---|---|
| $\bar X$ for $\mu$ | yes | yes |
| a single $X_i$ for $\mu$ | yes | **no** |
| $S^2 = \tfrac{1}{n-1}\sum(X_i - \bar X)^2$ for $\sigma^2$ | yes | yes |
| $\tfrac1n\sum(X_i - \bar X)^2$ (normal MLE) | no: $E = \tfrac{n-1}{n}\sigma^2$ | yes |
| $S$ for $\sigma$ | slightly biased | yes |
| $\hat p = \tfrac{\sum X_i}{n}$ | yes | yes |
| $\dfrac{\hat\theta - a}{b}$ when $E(\hat\theta) = a + b\theta$ | yes | if $\hat\theta$'s variance $\to 0$ |

**MLE:** maximise $L(\theta) = P(\text{data} \mid \theta)$; from a table, the largest entry in each observed column; from a formula, $\tfrac{d}{d\theta}\ln L = 0$. Invariant: the MLE of $g(\theta)$ is $g(\hat\theta)$.

## Correlation and regression

$$
\rho = \frac{Cov(X, Y)}{SD_X\,SD_Y}, \qquad r = \frac{\sum(x_i - \bar x)(y_i - \bar y)}{(n - 1)S_XS_Y}
$$

$$
\hat Y = a + bX, \qquad b = r\frac{S_Y}{S_X} = \frac{Cov}{S_X^2}, \qquad a = \bar Y - b\bar X
$$

The line passes through $(\bar X, \bar Y)$; residuals sum to 0; $r = 0$ makes $b = 0$ and $a = \bar Y$.

## Every test in one table

| Question | Test | Conditions | Statistic | Under $H_0$ |
|---|---|---|---|---|
| One mean | Single $Z$ | $\sigma$ known, $\bar X$ normal | $\dfrac{\bar X - \mu_0}{\sigma/\sqrt n}$ | $N(0, 1)$ |
| One mean | Single $t$ | $\sigma$ unknown, $X$ normal | $\dfrac{\bar X - \mu_0}{S/\sqrt n}$ | $t_{n-1}$ |
| Two means | Two samples $Z$ | $\sigma_X$, $\sigma_Y$ known | $\dfrac{\bar X - \bar Y - \Delta_0}{\sqrt{\sigma_X^2/n_X + \sigma_Y^2/n_Y}}$ | $N(0, 1)$ |
| Two means | Pooled $t$ | $\sigma$ unknown and equal, normal | $\dfrac{\bar X - \bar Y - \Delta_0}{\sqrt{S_p^2(1/n_X + 1/n_Y)}}$ | $t_{n_X + n_Y - 2}$ |
| One proportion | $Z$ | $np_0 > 5$, $n(1 - p_0) > 5$ | $\dfrac{\hat p - p_0}{\sqrt{p_0(1 - p_0)/n}}$ | $N(0, 1)$ |
| Two proportions | $Z$, pooled $\hat p$ | every $n\hat p$, $n(1 - \hat p) > 5$ | $\dfrac{\hat p_1 - \hat p_2}{\sqrt{\hat p(1 - \hat p)(1/n_1 + 1/n_2)}}$ | $N(0, 1)$ |
| Two variances | $F$ | normal, independent | $\dfrac{S^2_{big}}{S^2_{small}}$ | $F(n_{big} - 1,\ n_{small} - 1)$ |
| Shares of one variable | $\chi^2$ goodness of fit | every $E_i \ge 5$ | $\sum\dfrac{(O_i - E_i)^2}{E_i}$ | $\chi^2_{k-1}$ |
| Two categorical variables | $\chi^2$ independence | every $E_{ij} \ge 5$ | $\sum\dfrac{(O_{ij} - E_{ij})^2}{E_{ij}}$ | $\chi^2_{(r-1)(c-1)}$ |

$$
S_p^2 = \frac{(n_X - 1)S_X^2 + (n_Y - 1)S_Y^2}{n_X + n_Y - 2}, \qquad \hat p = \frac{x_1 + x_2}{n_1 + n_2}, \qquad E_{ij} = \frac{\text{row}_i \times \text{col}_j}{N}
$$

## Critical values the papers keep using

| | $\alpha = 0.10$ | $\alpha = 0.05$ | $\alpha = 0.01$ |
|---|---|---|---|
| $Z$, one tail | 1.28 | 1.645 | 2.33 |
| $Z$, two tails | 1.645 | 1.96 | 2.576 |
| $\chi^2_1$ | 2.706 | 3.841 | 6.635 |
| $\chi^2_2$ | 4.605 | 5.991 | 9.210 |

$t$ is always a little larger than $Z$ and shrinks towards it as $df$ grows ($t_{11}^{0.05} = 1.796$, $t_{18}^{0.025} = 2.101$, $t_{50}^{0.025} = 2.009$). $\chi^2$ and $F$ reject in the **upper** tail only.

## Power and effect size

$$
\bar X_{crit} = \mu_0 + z_{crit}\frac{\sigma}{\sqrt n}, \qquad 1 - \beta = P\!\left(Z > \frac{\bar X_{crit} - \mu_{true}}{\sigma/\sqrt n}\right) \text{ (right tail)}
$$

| | $H_0$ true | $H_0$ false |
|---|---|---|
| reject | Type I, $\alpha$ | power, $1 - \beta$ |
| do not reject | $1 - \alpha$ | Type II, $\beta$ |

Cohen's $d$: $\dfrac{\mu_1 - \mu_0}{\sigma}$ (single), $\dfrac{\mu_X - \mu_Y}{S_p}$ (pooled $t$). 0.2 small, 0.5 medium, 0.8 large.

## Confidence intervals

| Parameter | Interval |
|---|---|
| $\mu$, $\sigma$ known | $\bar X \pm z_{1-\alpha/2}\,\sigma/\sqrt n$ |
| $\mu$, $\sigma$ unknown | $\bar X \pm t_{n-1}^{\alpha/2}\,S/\sqrt n$ |
| $\mu_X - \mu_Y$ | $\bar X - \bar Y \pm t_{n_X + n_Y - 2}^{\alpha/2}\sqrt{S_p^2(1/n_X + 1/n_Y)}$ |
| $p$ | $\hat p \pm z_{1-\alpha/2}\sqrt{\hat p(1 - \hat p)/n}$ |

**Sample size** for a full width $w$: $n \ge \left(\dfrac{2z\sigma}{w}\right)^2$ for a mean, $n \ge \left(\dfrac{2z\cdot0.5}{w}\right)^2$ for a proportion with no estimate. Round **up**.
