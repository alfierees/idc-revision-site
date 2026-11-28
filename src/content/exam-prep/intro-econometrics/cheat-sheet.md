---
title: "Econometrics Cheat Sheet"
subject: intro-econometrics
type: reference
description: "The whole course on one page, in the order the final uses it: reading an R table, t-tests and confidence intervals, F-tests and the Chow test, logs and units, quadratics, dummies and interactions, multicollinearity, omitted variables, heteroskedasticity and WLS, each with a worked example from a past paper."
course: Intro to Econometrics
instructor: Dr. Aluma Dembo
semester: 1
year: 2
order: 1
pinned: true
tags:
  - intro-econometrics
  - exam-prep
  - cheat-sheet
aliases:
  - Intro Econometrics Cheat Sheet
  - Econometrics 1 Cheat Sheet
---

> Every final is the same shape: two parts, each built on R output (`summary(lm(...))`, `anova(...)`, a correlation table, sometimes a plot). Part I is a real dataset (flights, violins, wages, apples, transit spending), Part II an abstract $Y$ on $X$, $W$, $Z$. Open notes, 3 hours, 5% unless stated, round to 3 significant figures. The [[Econometrics Formula Sheet]] has the formulas alone; the [[Exam Question Playbook]] has the steps per question type.

## 0. Which tool? (read the question, pick the row)

| The question asks | Tool | Section |
|---|---|---|
| "Is $X$ significant?", "is the elasticity 1?", "does $X$ raise $Y$?" | t-test (two- or one-sided) | §2 |
| "minimum significance level", "does the 95% CI contain 0?" | p-value, CI duality | §2 |
| "do the dummies matter?", "is the model a good fit?", an `anova()` table | F-test | §3 |
| "should the model be estimated separately for two groups?" | Chow test | §3 |
| "what happens to the estimates if price is in USD / hours?" | change of units | §4 |
| "interpret $\hat\beta$", "elasticity", "percent change" | log forms | §4 |
| "which $X$ maximises $Y$?", "marginal effect at $X = 20$" | quadratic, derivative | §5 |
| "predicted $Y$ for a woman at a university", "elasticity for road" | dummies, interactions | §6 |
| "why is $X$ insignificant when the model fits well?", a correlation table | multicollinearity | §7 |
| "the slope changes when $W$ is added", "direction of the bias" | omitted variable bias | §8 |
| a plot of residuals fanning out, `hccm`, "weighted least squares" | heteroskedasticity | §9 |
| "is OLS still unbiased / efficient if ... fails?" | the assumptions | §1 |

## 1. OLS and the assumptions

OLS picks $\hat\beta$ to minimise $\sum \hat u_i^2$. In the simple model

$$\hat\beta_1 = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} = \frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0 = \bar y - \hat\beta_1 \bar x.$$

Two facts hold **by construction** whenever there is an intercept: $\sum \hat u_i = 0$ and $\sum x_{ji}\hat u_i = 0$ for every regressor. So residuals always sum to zero (2023 A Q18), and the line passes through $(\bar x, \bar y)$.

| Assumption | Says | Fails when |
|---|---|---|
| A0 | linear in parameters | (logs and squares are fine) |
| A1 | $E[u] = 0$ | the intercept is wrongly dropped |
| A2 | $E[u \mid X] = 0$ (exogeneity) | a relevant variable correlated with $X$ is omitted |
| A3 | no correlation between errors | time series, clusters |
| A4 | $\operatorname{Var}(u \mid X) = \sigma^2$ (homoskedasticity) | the spread of residuals changes with $X$ |
| A5 | $u$ normal | (only needed for exact t and F in small samples) |

> [!important] What each assumption buys
> **A1 + A2: unbiased.** **A1 to A4: Gauss-Markov, OLS is BLUE (efficient).** **A1 to A5: exact t and F distributions.**
> So heteroskedasticity (A4) never makes OLS biased, only inefficient with wrong standard errors. Non-normality (A5) does not touch efficiency: 2026 A Q17 is FALSE for exactly this reason.

The error variance is estimated by $\hat\sigma^2 = \dfrac{RSS}{N - M}$ ($M$ = number of parameters, intercept included). R prints $\hat\sigma$ as "Residual standard error ... on $N - M$ degrees of freedom", so $RSS = \hat\sigma^2 (N - M)$. In the simple model $\operatorname{Var}(\hat\beta_1) = \sigma^2 / S_{xx}$; with several regressors $\operatorname{Var}(\hat\beta_j) = \dfrac{\sigma^2}{(1 - R_j^2) S_{jj}}$, where $R_j^2$ comes from regressing $x_j$ on the other regressors.

## 2. One coefficient: t-test, p-value, confidence interval

$$t = \frac{\hat\beta_j - b}{se(\hat\beta_j)} \sim t_{N-M}\ \text{under } H_0: \beta_j = b.$$

| | Two-sided | One-sided (right) | One-sided (left) |
|---|---|---|---|
| Hypotheses | $H_0: \beta = b$, $H_1: \beta \ne b$ | $H_0: \beta \le b$, $H_1: \beta > b$ | $H_0: \beta \ge b$, $H_1: \beta < b$ |
| Critical value | $t_{\alpha/2}(N - M)$ | $t_{\alpha}(N - M)$ | $-t_{\alpha}(N - M)$ |
| Reject if | $\vert t\vert > t_{\alpha/2}$ | $t > t_\alpha$ | $t < -t_\alpha$ |
| p-value from R | as printed | half the printed one, if $t$ has the right sign | same |

Large-sample critical values (df above about 120): **1.645** (10% two-sided, 5% one-sided), **1.96** (5% two-sided), **2.576** (1% two-sided), **2.326** (1% one-sided).

> [!warning] R's `t value` column tests $b = 0$ only
> For any other $b$ rebuild it: $t = (\hat\beta - b)/se$. If the standard error is missing, recover it: $se = \hat\beta / t_{\text{printed}}$.

**Worked example (2026 A Q1).** Is the elasticity of investment with respect to maintenance equal to 1? $\hat\beta_1 = 0.867231$, $se = 0.014493$, $df = 1467 - 3 = 1464$, $\alpha = 1\%$.
$t = (0.867231 - 1)/0.014493 = -9.16$, $\vert -9.16\vert > 2.576$: reject. Investment responds less than one-for-one.

**Worked example (2023 A Q16, one-sided).** Is the effect of X2 negative? $t = -2.112$ with the right sign, printed two-sided $p = 0.038$, so the one-sided $p = 0.019 < 0.05$: reject $H_0: \beta_2 \ge 0$.

**p-value.** The smallest $\alpha$ at which $H_0$ is rejected. "Minimum significance level to reject" is the p-value itself: 2026 A Q18, $p = 0.6950$, answer **69.50%**.

**Confidence interval.** $\hat\beta \pm t_{\alpha/2}(N - M)\cdot se$. The duality: $b$ lies **outside** the $(1-\alpha)$ CI exactly when the two-sided test of $\beta = b$ rejects at $\alpha$.
- "Does the 95% CI contain 0?" is the same as "is $p > 0.05$?" (2026 A Q11: $p = 0.894$, yes).
- A 99% CI is wider than a 95% CI, which is wider than a 90% CI. If 0 is outside the 99% CI it is outside the 90% one too, not the other way round.
- "The minimum confidence level at which 0 is in the CI" is $1 - p$.

## 3. Several coefficients: the F-test and the Chow test

$$F = \frac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N - M)} = \frac{(R^2_{UR} - R^2_R)/q}{(1 - R^2_{UR})/(N - M)} \sim F_{q,\,N-M}$$

- $q$ = number of restrictions (equals signs in $H_0$); $N - M$ from the **unrestricted** model.
- The $R^2$ form needs the **same dependent variable** in both models (the TSS cancels).
- The restricted model is the unrestricted one with $H_0$ imposed: drop the variables, or substitute (for $\beta_1 + \beta_2 = 0$, regress on $X_1 - X_2$; 2024 A Q7).
- One reject-or-not rule: $F > F_\alpha(q, N - M)$, or $p < \alpha$. Large-sample 5% values: $F(1,\infty) = 3.84$, $F(2,\infty) = 3.00$, $F(3,\infty) = 2.60$, $F(4,\infty) = 2.37$, $F(8,\infty) = 1.94$.
- $F(1, N - M) = t^2$: one restriction, same test.

**Three F-tests the exam uses:**

1. **Overall significance** (last line of `summary`): $H_0$: every slope is 0. "Is the model a good fit?" Reject if its p-value is below 0.05 (2024 A Q5, 2026 A Q6). Do not use the individual p-values for a joint null.
2. **A group of dummies**: $H_0: \gamma_2 = \dots = \gamma_K = 0$ (2023 A Q5: three stop dummies, $q = 3$, $F = 185.14$).
3. **`anova(small, big)`**: tests the variables in `big` but not in `small`, all equal to 0. $q$ is the `Df` column. Count it: in 2026 A Q8 it is 4 (`is.road` and its three interactions), not 3.

> [!example] Chow test: does one regression fit both groups? (2026 A Q9)
> Run the model on group A, on group B and pooled. With $M$ parameters per model (intercept included):
> $$F = \frac{(RSS_{pooled} - (RSS_A + RSS_B))/M}{(RSS_A + RSS_B)/(N - 2M)}.$$
> $q = M$ (every coefficient may differ) and the denominator df is $N - 2M$. In 2026 A: $M = 4$, $N = 1467$, $N - 2M = 1459$, $F = 38.04 > 2.378$: the model differs between OECD and non-OECD countries.
> The grouping dummy is **not** in any of the three regressions: within a group it is constant.
> Equivalent version: one pooled regression with the group dummy and its interaction with every regressor, then an F-test that all of those are 0.

## 4. Logs and units

| Model | $\beta_1$ means | Marginal effect $dY/dX$ | Elasticity |
|---|---|---|---|
| $Y = \beta_0 + \beta_1 X$ | units of $Y$ per unit of $X$ | $\beta_1$ | $\beta_1 X/Y$ |
| $\ln Y = \beta_0 + \beta_1 X$ | $X$ up 1 unit: $Y$ up about $100\beta_1$% | $\beta_1 Y$ | $\beta_1 X$ |
| $\ln Y = \beta_0 + \beta_1 \ln X$ | $X$ up 1%: $Y$ up $\beta_1$% | $\beta_1 Y/X$ | $\beta_1$ (constant) |
| $Y = \beta_0 + \beta_1 \ln X$ | $X$ up 1%: $Y$ up about $\beta_1/100$ units | $\beta_1 / X$ | $\beta_1 / Y$ |

- The **rate of change** is $\frac{dY/dX}{Y}$: in a level model it is $\beta_1 / Y$, so its sign is the sign of $\beta_1$ when $Y > 0$ (2023 A Q15).
- A log-log model is the only one with a **constant elasticity** (2023 A Q1).
- For a dummy in a log model, $100\beta$% is the approximation; the exact gap is $100(e^\beta - 1)$%. For a big change (doubling $X$) use $2^{\beta_1}$: 2024 B Q13, $2^{0.824} = 1.77$, cost up 77%.

> [!tip] Change of units, the one method
> Write the old variable in terms of the new one, substitute into the fitted model, and collect terms.
> - **Levels:** $Y$ multiplied by $c$: every coefficient times $c$. $X$ multiplied by $c$: its slope divided by $c$, nothing else changes.
> - **Logs:** a factor becomes an added constant ($\ln(cX) = \ln c + \ln X$), so **only the intercept moves**; every slope stays.
> - t-statistics, p-values and $R^2$ never change.
>
> 2026 A Q2: euros to dollars ($\times 1/0.85$) in a log-log model, so the slope on `year` **stays the same** and the intercept becomes $\beta_0 + (1 - \beta_1)\ln(1/0.85)$.
> 2025 B Q2: pounds to kilograms in a log-log demand: new intercept $\beta_0 - (1 + \beta_1 + \beta_2)\ln 2.2$, slopes unchanged.

## 5. Quadratics

$$Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \dots \quad\Rightarrow\quad \frac{\partial Y}{\partial X} = \beta_1 + 2\beta_2 X,\qquad X^* = -\frac{\beta_1}{2\beta_2}.$$

- $\beta_2 < 0$: a hill, $X^*$ is a **maximum** (2024 A Q13: $-69.25/(2\cdot(-0.785)) = 44.11$).
- $\beta_2 > 0$: a valley, $X^*$ is a **minimum** (2026 A Q12: $2.0898/(2\cdot 3.1117) = 0.336$).
- The marginal effect changes with $X$: evaluate it at the value asked. "Is the effect always zero?" is the **joint** null $\beta_1 = \beta_2 = 0$, an F-test (2023 A Q14).
- When predicting, square the value: at $Z = 2$, $Z^2 = 4$ (2026 A Q10, $\hat Y = 13.18$).
- Keep the linear term even when it is insignificant: $X$ and $X^2$ are highly correlated (0.97 in 2026 A), so its standard error is inflated (2026 A Q13).

## 6. Dummies and interactions

- A categorical variable with $K$ categories needs $K - 1$ dummies. The left-out one is the **base**; every dummy coefficient is a gap **relative to the base**.
- All $K$ dummies plus an intercept is **perfect multicollinearity** (the dummy trap): `is.road` $= 1 -$ `is.rail` (2026 A Q3). R drops one and prints `NA`.
- The cheapest/most expensive category: compare the dummy coefficients, base = 0 (2023 A Q4: Monday at $-0.0685$).
- Whether the category matters at all: F-test on all its dummies jointly.

$$Y = \beta_0 + \beta_1 X + \delta_0 D + \delta_1 (D \cdot X) + u$$

| Group | Intercept | Slope on $X$ |
|---|---|---|
| $D = 0$ | $\beta_0$ | $\beta_1$ |
| $D = 1$ | $\beta_0 + \delta_0$ | $\beta_1 + \delta_1$ |

- "Does the effect of $X$ differ between the groups?" is $H_0: \delta_1 = 0$, a t-test on the interaction (2026 A Q7B: $p = 0.427$, FALSE, no difference).
- The effect for the $D = 1$ group is the **sum** $\beta_1 + \delta_1$ (2026 A Q7A: $0.788 + 0.025 = 0.813$).
- Dummies for ranges of $X$ plus their interactions give a different line in each range (2024 A Q11 and Q12): the marginal effect of X2 is $-10.84$ in the middle, $-10.84 + 60.00 = 49.15$ below 25, $-10.84 - 55.33 = -66.17$ above 75.

## 7. Goodness of fit and multicollinearity

$$R^2 = 1 - \frac{RSS}{TSS},\qquad \bar R^2 = 1 - (1 - R^2)\frac{N - 1}{N - M}.$$

- $R^2$ never falls when a variable is added. Compare models with **different numbers of regressors** by $\bar R^2$.
- Neither works across **different dependent variables** ($Y$ vs $\ln Y$, OLS vs WLS) or a model **without an intercept**.

> [!important] Partial multicollinearity: the signature
> High correlation between regressors (rule of thumb above about 0.7 to 0.8). OLS stays **unbiased**, but standard errors are inflated, so a variable that matters can look insignificant.
> Tell-tales: individually insignificant but jointly significant; a good overall fit with few significant slopes; the coefficient jumps when a correlated variable is dropped.
> What to answer: "do not drop it": check the correlation (`cor(x1, x2)`), test jointly, and note that dropping a relevant variable causes omitted variable bias. 2023 A Q10 (cor 0.83), 2024 A Q4 (`stradivari` and `is.named`), 2026 A Q13.

**Irrelevant variable** (true coefficient 0): estimates stay unbiased but less precise. Signs: insignificant, other coefficients barely move when it is dropped, $\bar R^2$ rises without it (2024 A Q15).

## 8. Omitted variable bias

True model $Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + u$; you run $Y$ on $X_1$ alone. Then

$$\tilde\beta_1 = \hat\beta_1 + \hat\beta_2\,\frac{S_{12}}{S_{11}},\qquad \text{bias} = \beta_2 \cdot \frac{\operatorname{Cov}(X_1, X_2)}{\operatorname{Var}(X_1)}.$$

| | $\operatorname{Cov}(X_1, X_2) > 0$ | $\operatorname{Cov}(X_1, X_2) < 0$ |
|---|---|---|
| $\beta_2 > 0$ | biased **up** | biased **down** |
| $\beta_2 < 0$ | biased **down** | biased **up** |

- Both conditions are needed: the omitted variable must **affect $Y$** and be **correlated with $X_1$**. That is A2 failing.
- 2023 A Q11: $\beta_2 = -4.07$, correlation $+0.83$, so the short slope is biased down (10.94 to 7.09).
- The formula runs backwards too: 2023 A Q12 solves for $S_{11} = 950.5$; 2025 B Q3 solves for the covariance (0.068).
- Dropping a non-zero intercept is the same mistake: the slopes become biased (2024 A Q6, 2023 B Q16). Keeping an unneeded intercept only costs precision.

## 9. Heteroskedasticity and WLS

- **Spot it:** residuals (or squared residuals) plotted against a regressor fan out (2023 A Q17, 2024 A Q8, 2026 A Q14).
- **Consequences:** OLS still **unbiased**; **not efficient** (Gauss-Markov needs A4); the usual standard errors are **wrong**, so t, F and CIs are invalid.

> [!example] WLS when the form is known: $\operatorname{Var}(u_i \mid x_i) = \sigma^2 h_i$
> Divide **every** term, the intercept too, by $\sqrt{h_i}$:
> $$\frac{y_i}{\sqrt{h_i}} = \beta_0\frac{1}{\sqrt{h_i}} + \beta_1\frac{x_{1i}}{\sqrt{h_i}} + \dots + \frac{u_i}{\sqrt{h_i}},\qquad \operatorname{Var}\!\left(\frac{u_i}{\sqrt{h_i}}\right) = \sigma^2.$$
> Same $\beta$s, homoskedastic errors, so OLS on the new model is BLUE. In R: `lm(y.h ~ 0 + intercept.h + x.h)`.
> 2026 A Q15: $h = Z^2$, divide by $Z$: $\dfrac{Y}{Z} = \dfrac{\beta_0}{Z} + \beta_1 + \beta_2 Z + \beta_3 \dfrac{W}{Z}$. The coefficient on `Z.h` ($= 1$) is the new intercept; $\beta_0$ is estimated on `intercept.h` ($= 1/Z$).

- **Form unknown:** keep the OLS estimates and use White (robust) standard errors: `coeftest(model, vcov = hccm, type = "hc0")`. The estimates do not change, the **standard errors** do (2023 B Q13).
- **Variance differs by group:** estimate the groups separately, or weight each group by its own $\hat\sigma^2$.
- OLS and WLS both unbiased under A1 and A2; only WLS efficient (2026 A Q16, answer A).
- Do not compare $R^2$ between OLS and the transformed model: the dependent variable changed.
