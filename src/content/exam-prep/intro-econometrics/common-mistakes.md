---
title: "Common Mistakes"
subject: intro-econometrics
type: reference
description: "The slips that cost marks in Intro to Econometrics: reusing R's t value for a non-zero null, the wrong df or q, comparing R-squared across models, one-sided p-values, dummy traps, units in logs, and the claims about bias and efficiency that keep catching people."
course: Intro to Econometrics
semester: 1
year: 2
order: 5
tags:
  - intro-econometrics
  - exam-prep
  - mistakes
---

## Tests and intervals

| Mistake | Why it's wrong | Check |
|---|---|---|
| Using R's `t value` for $H_0: \beta = 1$ | R's column tests $\beta = 0$ only | $t = (\hat\beta - 1)/se$; 2026 A Q1 gives $-9.16$, not 59.8 |
| "The standard error isn't printed, so cannot say" | it is recoverable | $se = \hat\beta / t$ (2023 A Q3) |
| A two-sided critical value for a one-sided claim | "raises", "positive", "more than" put all of $\alpha$ in one tail | 5%: 1.645, not 1.96 |
| Halving the p-value when $t$ has the wrong sign | then the one-sided p-value is $1 - p/2$, and you cannot reject | check the sign first |
| Saying "accept $H_0$" | a test can only fail to reject | "fail to reject at 5%" |
| Writing the null about $\hat\beta$ | hypotheses are about the true parameter | $H_0: \beta_2 = 0$ |
| df $= N$ or $N - K$ | the residual df subtract every parameter, the intercept too | $N - M$, or read it from R |
| "0 in the 99% CI, so 0 in the 90% CI" | the 90% CI is narrower | only the reverse direction holds |

## F-tests and the Chow test

| Mistake | Why it's wrong | Check |
|---|---|---|
| Testing a group of dummies with their individual t-tests | the null is joint | one F-test, $q$ = number of dummies |
| "The model is a good fit because the slopes are significant" | goodness of fit is the overall F | quote the F p-value (2024 A Q5) |
| $q$ off by one in `anova` | count every coefficient in the big model and not in the small one | the `Df` column (2026 A Q8: 4, not 3) |
| df of the restricted model in the denominator | the denominator uses the **unrestricted** model | $RSS_{UR}/(N - M_{UR})$ |
| $R^2$ form when the dependent variable differs | the TSS no longer cancels | same $y$ only |
| Chow: $q$ = number of slopes | the intercept may differ too | $q = M$, intercept included |
| Chow: denominator $N - M$ | the unrestricted model has two sets of parameters | $N - 2M$ |
| Group dummy left in the Chow regressions | it is constant within each group | drop it from all three (2026 A Q9) |

## Interpretation and functional form

| Mistake | Why it's wrong | Check |
|---|---|---|
| Reading a log-level slope as an elasticity | it is a percent change per **unit** of $X$ | elasticity only in log-log |
| $\times 100$ on a log-log slope | it is already percent per percent | 0.867 means 0.867% |
| Calling the level-level slope "the elasticity" | the elasticity is $\beta X/Y$ and varies | constant only in log-log (2023 A Q1) |
| Forgetting to square in a prediction | the model has $Z^2$ as its own regressor | 2026 A Q10: $Z^2 = 4$ |
| Forgetting to exponentiate | a log model predicts $\ln Y$ | $\hat Y = e^{\widehat{\ln Y}}$ |
| $X^* = \beta_1 / 2\beta_2$ | the minus sign | $X^* = -\beta_1/(2\beta_2)$ |
| Max or min without saying which | sign of $\beta_2$ decides | $\beta_2 < 0$: max |
| "The marginal effect is $\beta_1$" in a quadratic | it is $\beta_1 + 2\beta_2 X$ | evaluate at the value asked |
| "Always zero" tested with one t-test | $\beta_1 + 2\beta_2 X = 0$ for every $X$ needs both zero | joint F-test (2023 A Q14) |

## Dummies and interactions

| Mistake | Why it's wrong | Check |
|---|---|---|
| A dummy for every category plus an intercept | perfect multicollinearity (dummy trap) | $K - 1$ dummies (2026 A Q3) |
| Reading a dummy coefficient as a level | it is the gap to the **base** category | name the base |
| Effect for the $D = 1$ group $= \delta_1$ | that is the **difference**; the effect is $\beta_1 + \delta_1$ | 2026 A Q7A: 0.813 |
| "The interaction is insignificant, so the groups have the same intercept" | the interaction tests the slope only | the dummy tests the intercept |
| Adding the interaction without the dummy | forces both groups through the same intercept | include both |

## Units

| Mistake | Why it's wrong | Check |
|---|---|---|
| Changing the slope in a log-log unit change | a factor inside a log is an added constant | only the intercept moves |
| Changing the t-statistics | $\hat\beta$ and $se$ scale together | t, p and $R^2$ never move |
| Scaling every coefficient when only $X$ changes (levels) | only $X$'s slope moves, by $1/c$ | the intercept and the other slopes stay |
| Wrong direction of the exchange rate | write the old variable in terms of the new one first | 1 USD = 0.85 EUR means USD amount $=$ EUR$/0.85$ |

## Bias, efficiency and the assumptions

| Mistake | Why it's wrong | Check |
|---|---|---|
| "Heteroskedasticity biases OLS" | unbiasedness needs only A1 and A2 | biased **standard errors**, not estimates |
| "White standard errors change the estimates" | they change only the SEs | 2023 B Q13 |
| "Without normality OLS is not efficient" | Gauss-Markov needs A1 to A4 | 2026 A Q17: FALSE |
| "Multicollinearity biases the estimates" | no assumption fails; only the variance grows | unbiased, imprecise |
| Dropping an insignificant but correlated variable | its SE was inflated; if it matters, OVB follows | check `cor()` first (2026 A Q13) |
| Dropping an insignificant intercept | if $\beta_0 \ne 0$ every slope is biased | 2024 A Q6 |
| OVB direction from the sign of $\hat\beta_1$ | it is $\text{sign}(\beta_2)\times\text{sign}(\text{Cov})$ | 2023 A Q11: down |
| OVB with an uncorrelated omitted variable | no correlation, no bias (only a noisier fit) | both conditions needed |
| Comparing $R^2$ for models of different size | $R^2$ never falls when a variable is added | adjusted $R^2$ |
| Comparing $R^2$ of OLS and WLS, or with and without an intercept | different dependent variable / no TSS decomposition | not comparable (2024 A Q6, 2026 A Q15) |
| WLS dividing the regressors but not the intercept | the column of 1s must be divided too | `intercept.h` $= 1/\sqrt h$ |
| WLS by $h$ instead of $\sqrt h$ | the variance scales by the square | divide by $\sqrt{h}$ |
| "The residuals of the better model sum closer to 0" | with an intercept they always sum to exactly 0 | the RSS differs, not the sum (2023 A Q18) |
