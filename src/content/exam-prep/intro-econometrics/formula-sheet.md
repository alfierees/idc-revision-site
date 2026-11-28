---
title: "Econometrics Formula Sheet"
subject: intro-econometrics
type: reference
description: "Every formula the final needs, nothing else: OLS, variances and standard errors, t, CI and F, the Chow test, R-squared, log interpretations, unit changes, quadratics, interactions, the omitted variable bias formula and WLS, plus the critical values to know by heart."
course: Intro to Econometrics
semester: 1
year: 2
order: 2
pinned: true
tags:
  - intro-econometrics
  - exam-prep
  - formula-sheet
aliases:
  - Intro Econometrics Formula Sheet
---

> Notation: $N$ observations, $M$ parameters including the intercept, so the residual degrees of freedom are $N - M$ (R prints them). $S_{xy} = \sum (x_i - \bar x)(y_i - \bar y)$.

## OLS

| Quantity | Formula |
|---|---|
| Slope (simple model) | $\hat\beta_1 = S_{xy}/S_{xx}$ |
| Intercept | $\hat\beta_0 = \bar y - \hat\beta_1 \bar x$ |
| Residual facts (with an intercept) | $\sum \hat u_i = 0$, $\sum x_{ji}\hat u_i = 0$, line through $(\bar x, \bar y)$ |
| Error variance | $\hat\sigma^2 = RSS/(N - M)$; R's "residual standard error" is $\hat\sigma$ |
| RSS from R | $RSS = \hat\sigma^2 (N - M)$ |
| Variance of the slope (simple) | $\operatorname{Var}(\hat\beta_1) = \sigma^2 / S_{xx}$ |
| Variance with several regressors | $\operatorname{Var}(\hat\beta_j) = \dfrac{\sigma^2}{(1 - R_j^2)\,S_{jj}}$ |
| Standard error from R | $se = \hat\beta / t_{\text{printed}}$ |

## Tests and intervals

| Quantity | Formula |
|---|---|
| t-statistic | $t = \dfrac{\hat\beta - b}{se(\hat\beta)} \sim t_{N-M}$ |
| Two-sided rejection | $\vert t\vert > t_{\alpha/2}(N - M)$ |
| One-sided rejection | $t > t_\alpha$ (right) or $t < -t_\alpha$ (left) |
| One-sided p-value from R | printed p / 2, when $t$ has the sign of $H_1$ |
| Confidence interval | $\hat\beta \pm t_{\alpha/2}(N - M)\cdot se$ |
| CI from the p-value | 0 is in the $(1-\alpha)$ CI iff $p > \alpha$ |
| F-statistic (RSS) | $F = \dfrac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N - M)}$ |
| F-statistic ($R^2$, same $y$) | $F = \dfrac{(R^2_{UR} - R^2_R)/q}{(1 - R^2_{UR})/(N - M)}$ |
| Overall significance | $F = \dfrac{R^2/(M - 1)}{(1 - R^2)/(N - M)}$, $H_0$: all slopes 0 |
| One restriction | $F(1, N - M) = t^2$ |
| Chow test | $F = \dfrac{(RSS_P - RSS_A - RSS_B)/M}{(RSS_A + RSS_B)/(N - 2M)}$ |

## Critical values to know

| | 10% | 5% | 1% |
|---|---|---|---|
| $t$, two-sided, large df | 1.645 | 1.96 | 2.576 |
| $t$, one-sided, large df | 1.282 | 1.645 | 2.326 |
| $t$, two-sided, 74 to 82 df | 1.665 | 1.99 | 2.64 |
| $F(1, \infty)$ | 2.71 | 3.84 | 6.63 |
| $F(2, \infty)$ | 2.30 | 3.00 | 4.61 |
| $F(3, \infty)$ | 2.08 | 2.60 | 3.78 |
| $F(4, \infty)$ | 1.94 | 2.37 | 3.32 |

For small samples read the printed tables at the exact df; when the df is between two rows, the nearer (or the smaller, safer) row is accepted.

## Goodness of fit

| Quantity | Formula |
|---|---|
| Decomposition | $TSS = ESS + RSS$ |
| $R^2$ | $1 - RSS/TSS = ESS/TSS$ |
| Adjusted $R^2$ | $\bar R^2 = 1 - (1 - R^2)\dfrac{N - 1}{N - M}$ |

## Functional form

| Model | Marginal effect $dY/dX$ | Rate of change $\frac{dY/dX}{Y}$ | Elasticity $\frac{dY}{dX}\frac{X}{Y}$ |
|---|---|---|---|
| level-level | $\beta_1$ | $\beta_1 / Y$ | $\beta_1 X / Y$ |
| log-level | $\beta_1 Y$ | $\beta_1$ | $\beta_1 X$ |
| log-log | $\beta_1 Y / X$ | $\beta_1 / X$ | $\beta_1$ |
| level-log | $\beta_1 / X$ | $\beta_1 / (XY)$ | $\beta_1 / Y$ |

| Quantity | Formula |
|---|---|
| Log-level, exact | $X$ up 1: $Y$ times $e^{\beta_1}$, i.e. $100(e^{\beta_1} - 1)$% |
| Log-log, big change | $X$ times $k$: $Y$ times $k^{\beta_1}$ |
| Prediction in a log model | $\hat Y = e^{\widehat{\ln Y}}$ |
| Quadratic | $\dfrac{\partial Y}{\partial X} = \beta_1 + 2\beta_2 X$, turning point $X^* = -\dfrac{\beta_1}{2\beta_2}$ (max if $\beta_2 < 0$) |
| Interaction $\beta_1 X + \delta_0 D + \delta_1 DX$ | slope $\beta_1 + \delta_1 D$, intercept $\beta_0 + \delta_0 D$ |
| Interaction of two continuous variables $\beta_3 XW$ | $\dfrac{\partial Y}{\partial X} = \beta_1 + \beta_3 W$ |

## Change of units

| Change | Effect |
|---|---|
| $Y \to cY$ (levels) | every coefficient times $c$ |
| $X \to cX$ (levels) | $\hat\beta_X / c$; nothing else |
| $\ln Y$ with $Y \to cY$ | intercept $+ \ln c$ |
| $\ln X$ with $X \to cX$ | intercept $- \beta_X \ln c$ |
| Both, same factor $c$, log-log | intercept $+ (1 - \beta_X)\ln c$ |
| t, p, $R^2$ | unchanged |

## Omitted variable bias

$$\tilde\beta_1 = \hat\beta_1 + \hat\beta_2\,\delta_1,\qquad \delta_1 = \frac{S_{12}}{S_{11}} = \frac{\operatorname{Cov}(X_1, X_2)}{\operatorname{Var}(X_1)}$$

Sign of the bias = sign of $\beta_2$ times sign of $\operatorname{Cov}(X_1, X_2)$.

## Heteroskedasticity

| Quantity | Formula |
|---|---|
| Form | $\operatorname{Var}(u_i \mid x_i) = \sigma^2 h_i$ |
| WLS model | divide every term (constant too) by $\sqrt{h_i}$ |
| Transformed error variance | $\operatorname{Var}(u_i/\sqrt{h_i}) = \sigma^2$ |
| $h = x$ | divide by $\sqrt x$ |
| $h = x^2$ | divide by $x$; the old slope becomes the new intercept |
| White standard errors | `coeftest(m, vcov = hccm, type = "hc0")`: same $\hat\beta$, new $se$ |

## Assumptions to properties

| Holds | Gives |
|---|---|
| A1, A2 | unbiased |
| A1 to A4 | BLUE (Gauss-Markov), the usual standard errors are right |
| A1 to A5 | exact t and F in any sample size |
