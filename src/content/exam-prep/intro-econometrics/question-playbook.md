---
title: "Exam Question Playbook"
subject: intro-econometrics
type: reference
description: "Every question type the final asks, with the steps that earn the marks and a model answer from an official past paper: t-tests, CIs and p-values, F-tests and anova, the Chow test, units, logs, quadratics, dummies and interactions, multicollinearity, omitted variables and heteroskedasticity."
course: Intro to Econometrics
semester: 1
year: 2
order: 4
tags:
  - intro-econometrics
  - exam-prep
  - playbook
---

> Each question is marked in pieces: the null, the statistic, the df, the critical value, the conclusion, and a sentence of reasoning with numbers from the output. Write every piece even when the answer is obvious. The model answers come from the three official keys (2023 A, 2024 A, 2026 A) unless marked otherwise.

## A. t-test on one coefficient

1. Write $H_0$ and $H_1$ about the **parameter** ($\beta_1$), not the estimate. Match the words: "is 1" gives $=$; "raises", "positive", "more than" give a one-sided test.
2. Statistic: $t = (\hat\beta - b)/se$. If $b = 0$ you may quote R's `t value`; otherwise compute.
3. df $= N - M$ (R's "on ... degrees of freedom"). Critical value from the table: $t_{\alpha/2}$ two-sided, $t_\alpha$ one-sided.
4. Conclusion in words, with the comparison: "$\vert -9.16\vert > 2.576$, so we reject $H_0$ at 1%: the elasticity is not 1."

> [!example] Model answer (2024 A Q1, one-sided)
> "Did violin prices rise with the sale year?" $H_0: \beta_1 \le 0$, $H_1: \beta_1 > 0$. Critical value 1.645 (one tail, 217 df). $t = 0.05753/0.002094 = 27.47 > 1.645$: reject. Prices rose over time.

**With only a p-value:** two-sided, compare $p$ with $\alpha$. One-sided, check the sign first, then compare $p/2$ with $\alpha$ (2023 A Q16: $0.038/2 = 0.019 < 0.05$).

## B. Confidence intervals and p-values

| Question | Answer |
|---|---|
| Build the 95% CI | $\hat\beta \pm t_{0.025}(N - M)\,se$ |
| "Does the 95% CI contain 0?" | yes iff $p > 0.05$; say so and cite $p$ (2026 A Q11) |
| "Does the 95% CI contain $b$?" | compute $t$ for $b$; yes iff $\vert t\vert < t_{0.025}$ |
| "If 0 is in the 99% CI, is it in the 90% CI?" | not necessarily: the 90% CI is narrower (2024 A Q9: FALSE) |
| "Minimum significance level to reject" | the p-value (2026 A Q18: 69.50%) |

## C. Joint F-test (the most points on every paper)

1. **Null:** every restriction, with the parameter names of the model given. Count them: that is $q$.
2. **Restricted model:** write the equation with $H_0$ imposed. Dropping variables, or substituting a restriction like $\beta_1 = -\beta_2$ (2024 A Q7: regress on $X_1 - X_2$).
3. **df:** $q$ and $N - M$ of the **unrestricted** model.
4. **Statistic:** RSS form, or $R^2$ form if the dependent variable is the same. With `anova`, read $F$ and its p-value.
5. **Critical value** $F_{0.05}(q, N - M)$ from the table, and the **conclusion** in words.

> [!example] Model answer (2023 A Q5)
> "Do the number of stops matter?" $H_0: \beta_3 = \beta_4 = \beta_5 = 0$. Restricted: drop `Stop1` to `Stop3`.
> $F = \dfrac{(0.398 - 0.3947)/3}{(1 - 0.398)/101324} = 185.14 > 2.6$. Reject: the stops are jointly significant, so the claim is wrong.

**Overall F** (bottom of `summary`): $H_0$ all slopes are 0. "Is the model a good fit?" Answer with that p-value, never the individual ones (2024 A Q5, option C).

**`anova(m1, m2)`**: the null sets every coefficient in `m2` but not in `m1` to 0. Check $q$ against the `Df` column (2026 A Q8 has 4).

## D. The Chow test

1. **Null:** the same coefficients in both groups (intercept and every slope).
2. **R code:** split the data with the group dummy, run the model on each part and on the whole sample, **without** the group dummy.
3. $q = M$ (parameters per model, intercept included), $N - M_{UR} = N - 2M$.
4. $F = \dfrac{(RSS_{pooled} - RSS_A - RSS_B)/M}{(RSS_A + RSS_B)/(N - 2M)}$.
5. Compare with $F_{0.05}(M, N - 2M)$; reject means "estimate the groups separately".

> [!example] Model answer (2026 A Q9)
> `w`, `m`, `t` are the RSS of the OECD regression, the non-OECD regression and the pooled (restricted) one. $q = 4$, $N - M = (1180 - 4) + (287 - 4) = 1459$. $F = 38.04 > 2.378$: the model is different for OECD and non-OECD countries.

## E. Change of units

1. Write the **old** variable as a function of the new one ($Price_{NIS} = 3.5\cdot Price_{USD}$, $\ln Dur_{min} = \ln Dur_{h} + \ln 60$).
2. Substitute into the fitted equation and collect terms.
3. Say which coefficients change (and by how much) and that t-statistics, p-values and $R^2$ do not.

> [!example] Model answer (2026 A Q2)
> $\ln(\text{USD}) = \ln(\text{EUR}) + \ln(1/0.85)$ for both spending variables, so $\ln(invest^{USD}) = \beta_0 + (1 - \beta_1)\ln(1/0.85) + \beta_1 \ln(maintain^{USD}) + \beta_2\,year$. The parameter on `year` **stays the same** (B); only the intercept moves.

## F. Interpretation of a coefficient

Template: "Holding the other variables fixed, a one-unit (one-percent) increase in $X$ is associated with a $\dots$ unit (percent) change in $Y$."

| Model | Say |
|---|---|
| level-level, $\hat\beta = 10.9$ | $X$ up 1, $Y$ up 10.9 units |
| log-level, $\hat\beta = 0.0575$ | $X$ up 1, $Y$ up about 5.75% |
| log-log, $\hat\beta = 0.867$ | $X$ up 1%, $Y$ up 0.867% (an elasticity) |
| level-log, $\hat\beta = -3.7$ | $X$ up 1%, $Y$ down about 0.037 units |
| dummy in a log model, $\hat\gamma = -0.0685$ | about 6.9% below the base category ($e^{-0.0685} - 1 = -6.6$% exactly) |

For an elasticity or marginal effect that depends on the level (anything but the constant one), evaluate it at the values given, or at the means.

## G. Quadratics and marginal effects

1. Derivative: $\partial Y/\partial X = \beta_1 + 2\beta_2 X$ (plus any interaction terms).
2. Turning point: set it to 0, $X^* = -\beta_1/(2\beta_2)$; state max ($\beta_2 < 0$) or min ($\beta_2 > 0$).
3. Check $X^*$ is inside the data's range (from `summary`).

> [!example] Model answer (2024 A Q13)
> $\partial \hat Y/\partial X2 = 69.25 - 2(0.785)X2 = 0 \Rightarrow X2^* = 44.11$. Since $\hat\beta_3 < 0$ it is a maximum.

**"Which plot is which model?" (2024 A Q14):** linear is a straight line; dummies only are flat steps; dummies with interactions are separate sloped lines with jumps; a quadratic is a parabola. Step through it in the [[Graph Gallery]].

## H. Dummies and interactions

- **Prediction for a person/group:** switch on exactly that group's dummies and interactions, everything else 0, and plug in.
- **Gap between two groups:** subtract the two predictions; the shared terms cancel (2024 B Q3: university man minus public-college woman, $0.3747 - 0.1063 = 0.2684$ in logs).
- **Effect of $X$ for a group:** base slope plus that group's interaction (2026 A Q7A).
- **"Does the effect differ?"**: t-test on the interaction (2026 A Q7B: $p = 0.427$, FALSE).
- **Dummy trap:** a dummy for every category plus an intercept: perfect multicollinearity, cannot estimate (2026 A Q3).

## I. "Why" questions: the answers the key wants

| Symptom in the output | Answer |
|---|---|
| A variable is insignificant, but correlated (> 0.7) with another regressor | Partial multicollinearity inflates its standard error. It may still matter; dropping it risks omitted variable bias. Test jointly / check `cor()`. |
| A coefficient changes a lot when a variable is added, and $\bar R^2$ rises | Omitted variable bias in the short model: the added variable affects $Y$ and is correlated with the regressor (2026 A Q5, answer B). |
| A coefficient barely changes when a variable is dropped, it is insignificant, $\bar R^2$ rises without it | An irrelevant variable (2024 A Q15). |
| Adjusted $R^2$ falls when an insignificant variable is dropped | It carried real explanatory power; its insignificance came from multicollinearity (2023 A Q10, 2024 A Q4). |
| Residuals fan out against a regressor | Heteroskedasticity: OLS unbiased but inefficient, standard errors biased, tests invalid. Fix with WLS (form known) or White SEs (2024 A Q8, answer C). |
| A slope changes when the intercept is dropped | The true intercept is not 0, so dropping it biases the slopes (2024 A Q6). |
| Residuals show an arch against $X$ | A missing squared term: the linear model omits $X^2$, so the slope is biased (2023 A Q17). |

## J. Omitted variable bias with numbers

1. Write $\tilde\beta_1 = \hat\beta_1 + \hat\beta_2\,\delta_1$ with $\delta_1 = S_{12}/S_{11}$.
2. Direction: sign of $\hat\beta_2$ times sign of the correlation.
3. Backwards: solve for the one unknown.

> [!example] Model answer (2023 A Q11 and Q12)
> Omitting X2 ($\hat\beta_2 = -4.074$, correlation $+0.83$) biases the X1 slope **down**, from 10.944 to 7.088, and breaks A2. Solving $7.088 = 10.944 - 4.074 \cdot 899.626/S_{11}$ gives $S_{11} = 950.5$.

## K. Heteroskedasticity and WLS

1. Name it from the plot: (squared) residuals against a regressor that fan out.
2. Consequences: unbiased, not efficient, wrong SEs.
3. Write the WLS model: divide **every** term by $\sqrt{h}$, simplify, and say which coefficient is the new intercept.
4. If asked about R: `lm(y.h ~ 0 + intercept.h + ...)`, where `intercept.h` $= 1/\sqrt h$.

> [!example] Model answer (2026 A Q15)
> $h = Z^2$, $\sqrt h = Z$: $\dfrac{Y}{Z} = \beta_0 \dfrac{1}{Z} + \beta_1 + \beta_2 Z + \beta_3 \dfrac{W}{Z}$. The model has an intercept after all: the coefficient on $Z/\sqrt{Z^2} = 1$, which is $\beta_1$.

## L. True/false on the assumptions

| Failing | Unbiased? | Efficient? | Usual SEs right? |
|---|---|---|---|
| A2 (omitted variable, wrongly dropped intercept) | no | no | no |
| A4 (heteroskedasticity) | yes | no | no |
| A5 only (non-normal errors) | yes | yes | t and F only approximate |
| Partial multicollinearity (no assumption fails) | yes | yes, but variances large | yes |
| Irrelevant variable included | yes | less precise than without it | yes |
