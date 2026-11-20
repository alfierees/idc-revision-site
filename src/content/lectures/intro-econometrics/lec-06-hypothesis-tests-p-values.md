---
title: Hypothesis Tests & p-values
week: 6
semester: 1
year: 2
academic_year: "2025-26"
course: "Intro Econometrics"
instructor: "Dr. Aluma Dembo"
lecture: "Lecture 6 — Hypothesis Tests & p-values"
tags:
  - intro-econometrics
  - hypothesis-testing
  - t-test
  - p-value
  - confidence-interval
  - one-sided-test
  - regression-through-origin
  - OLS
aliases:
  - Hypothesis Tests & p-values
  - Lecture 6 Intro Metrics
subject: intro-econometrics
in_scope: true
---

# Hypothesis Tests & p-values

> Part of: [[Intro Econometrics]] | Key concepts: [[Hypothesis Testing]], [[Null Hypothesis]], [[t-statistic]], [[Critical Value]], [[p-value]], [[Confidence Interval]], [[One-Sided Test]], [[Regression Through the Origin]]

> [!info] How this note connects
> The slides open with a recap of confidence intervals (Lecture 5 material). This note keeps that recap short and spends its length on the new material: t-tests, p-values, one-sided tests and regression through the origin. For the wider course (OLS, t and F tests, CIs) see [[Lec_13-Exam Review]]; for the regression-through-the-origin homework see [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]].

---

## 1. Recap: confidence intervals (from last time)

- A **$1-\alpha$ confidence interval** satisfies $\mathbb{P}(L \le T \le U) = 1-\alpha$. Here $\alpha$ is the significance level (usually 5%) and $1-\alpha$ the confidence level (usually 95%).
- With the symmetric t-distribution, the critical value $t_{\alpha/2}[df]$ solves $\mathbb{P}(T \le t_{\alpha/2}) = 1-\alpha/2$, so $\mathbb{P}(-t_{\alpha/2} \le T \le t_{\alpha/2}) = 1-\alpha$. (Slides 3 to 11 build this with CDF shading: $\mathbb{P}(c_1\le T\le c_2)=F(c_2)-F(c_1)$.)
- Under assumptions A1 to A5 (A5: normal errors $u_i \sim \mathcal{N}(0,\sigma^2)$), $\hat\beta_1$ is normal, and replacing the unknown $\sigma^2$ with $\hat\sigma^2 = \frac{1}{N-2}\sum \hat u_i^2$ gives

$$
t(\hat\beta_1)=\frac{\hat\beta_1-\beta_1}{se(\hat\beta_1)} \sim t[N-2]
$$

- Hence the CI:

$$
\boxed{\hat\beta_1 \pm t_{\alpha/2}[df]\cdot se(\hat\beta_1)}
$$

> [!example] Activity 6 (part 1): 95% CI for `hours`
> Wage model `ln_earnings ~ s + exp + IQ_test + age + hours`, $n=540$, 534 df, $t_{0.025}(\infty)=1.96$. For `hours`: estimate $0.0041505$, s.e. $0.0024687$.
>
> $0.00415 \pm 1.96\times 0.00247 = 0.00415 \pm 0.00484 = [-0.00069,\ 0.00899]$. The interval contains 0, which foreshadows `hours` not being significant at 5%.

**Estimation vs inference** (slide 18):

| Stage | Question |
|---|---|
| Estimation | Given $N$ observations, which $\hat\beta$ fits best? |
| Confidence interval | How likely is it that $\hat\beta$ falls in a range around the true $\beta$? |
| Hypothesis test (today) | How probable is our sample if the true parameter were a specific value $b$? |

---

## 2. The two-sided t-test: four steps

A test never gives a certain "yes/no", only "with some probability no". Four steps:

1. **State $H_0$ and $H_1$.** In general $H_0:\beta_1 = b$ against $H_1:\beta_1 \ne b$. Examples: slope equals 2; intercept equals 4; slope is zero ("does X affect Y?").
2. **Compute the t-statistic**, taking $\hat\beta_1$ and $se(\hat\beta_1)$ from the output and $b$ from the null:

$$
\boxed{t(\hat\beta_1)=\frac{\hat\beta_1-b}{se(\hat\beta_1)}}
$$

3. **Pick the significance level** $\alpha$ (usually 5%; 10% and 1% are also checked) and find the critical value $t_{\alpha/2}[df]$ from the t-table.
4. **Decide.**
   - If $-t_{\alpha/2}\le t(\hat\beta_1)\le t_{\alpha/2}$: **fail to reject** $H_0$. If $H_0$ is true this happens with probability $1-\alpha$.
   - If $|t(\hat\beta_1)| \ge t_{\alpha/2}$: **reject** $H_0$. If $H_0$ is true this (a false rejection) happens with probability $\alpha$, split as $\alpha/2$ in each tail.

![[Lec06_rejection_regions.png]]
*Theory diagram: rejection regions (red) and non-rejection region (blue) for a two-sided and a right-tail test at 5%, df = 32.*

> [!warning] Wording
> Say "fail to reject", never "accept". Not rejecting $H_0$ only means the data are consistent with it; many other values of $b$ would also survive.

### Example 1: income-consumption model

$\text{Consumption} = \beta_0+\beta_1\text{GDP}+u$ (Israeli data, 32 df). Output: $\hat\beta_1 = 0.81547$, $se = 0.01914$, $\hat\beta_0=-21894.88752$, $se=1376.81459$. Critical value $t_{0.025}[32]=2.0369$.

| Question (all at $\alpha=5\%$) | $H_0$ | $t$ | Decision |
|---|---|---|---|
| Does income affect consumption? | $\beta_1=0$ | $0.81547/0.01914 = 42.61$ | Reject: income matters |
| Do Israeli consumers not save? (MPC = 1) | $\beta_1=1$ | $(0.81547-1)/0.01914=-9.64$ | Reject (slide left this blank; reconstructed) |
| Is the marginal propensity to consume 80%? | $\beta_1=0.8$ | $(0.81547-0.8)/0.01914=0.808$ | Fail to reject |

### Example 2: housing prices

$\ln Price = \beta_0+\beta_1\ln sqrft+\beta_2\,bdrms+u$, 88 US apartments, 85 df. The slides use $t_{0.025}[60]=2.00$ (nearest table row).

| Coefficient | Estimate | Std. Error | t value | Pr(>\|t\|) |
|---|---|---|---|---|
| (Intercept) | 6.28435 | 0.69758 | 9.009 | 5.18e-14 |
| lsqrft | 0.80826 | 0.09869 | 8.190 | 2.35e-12 |
| bdrms | 0.03811 | 0.03034 | 1.256 | 0.213 |

$R^2=0.5611$, adjusted $R^2=0.5508$, $F=54.34$ on 2 and 85 df.

| Question | $H_0$ | $t$ | Decision |
|---|---|---|---|
| Bedrooms do not affect price | $\beta_2=0$ | $1.256$ | Fail to reject |
| One more bedroom cuts price by 2% | $\beta_2=-0.02$ | slide: $1.933$ | Fail to reject |
| One more bedroom raises price by 10% | $\beta_2=0.1$ | slide: $-2.063$ | Reject |

> [!warning] Rounding on slides 36 and 37
> With $se=0.03034$ I get $t\approx1.915$ for $H_0:\beta_2=-0.02$ and $t\approx-2.04$ for $H_0:\beta_2=0.1$. The slide values (1.933, -2.063) look like they use $se\approx0.030$. The decisions are the same either way, and the $-2.04$ is only just beyond $2.00$.

---

## 3. Confidence intervals and two-sided tests are the same thing

We fail to reject $H_0:\beta_1=b$ iff $-t_{\alpha/2}\le \frac{\hat\beta_1-b}{se}\le t_{\alpha/2}$, and rearranging (slide 32) gives

$$
\hat\beta_1-t_{\alpha/2}\,se(\hat\beta_1)\ \le\ b\ \le\ \hat\beta_1+t_{\alpha/2}\,se(\hat\beta_1)
$$

> [!tip] Rule
> **If $b$ is inside the $(1-\alpha)$ CI, fail to reject at $\alpha$. If $b$ is outside, reject.** This holds for two-sided tests only.

- Income-consumption: CI $[0.776,\ 0.854]$ contains 0.8 (not rejected) but excludes 0 and 1 (rejected). Consistent with the three tests above.
- Housing: CI $[-0.0225,\ 0.0987]$ (slides use $\pm 2\times0.0303$) contains $-0.02$ and $0$ but excludes $0.1$. Again consistent.

---

## 4. Significance testing and p-values

### Significance test
"Does $x_k$ have a significant effect on $y$?" is the special case $H_0:\beta_k=0$ vs $H_1:\beta_k\neq0$, with

$$
t(\hat\beta_k)=\frac{\hat\beta_k}{se(\hat\beta_k)}
$$

This is the **`t value` column** of R's `summary(lm)`. Reject $\Rightarrow$ the variable is **significant**; fail to reject $\Rightarrow$ it has no significant effect on $y$.

> [!warning] Careful (slides 42 and 43)
> The `t value` column tests **only** $H_0:\beta_k=0$. For any other null ($\beta_k=b\neq0$) you must compute $(\hat\beta_k-b)/se$ yourself.

> [!example] Activity 6 (parts 3): which variables are significant at 5%? (wage model, critical value 1.96)
> | Variable | Estimate | Std. Error | t value | Pr(>\|t\|) |
> |---|---|---|---|---|
> | (Intercept) | 1.385217 | 0.4218969 | 3.28 | 0.001 |
> | s | 0.0981245 | 0.0108345 | 9.06 | 0.000 |
> | exp | 0.0402309 | 0.0056855 | 7.08 | 0.000 |
> | IQ_test | 0.0112204 | 0.0029018 | 3.87 | 0.000 |
> | age | -0.0336168 | 0.0101734 | -3.30 | 0.001 |
> | hours | 0.0041505 | 0.0024687 | 1.68 | 0.093 |
>
> $R^2=0.3011$, adj. $R^2=0.2946$, $F=46.02$ on 5 and 534 df. Every variable has $|t|>1.96$ except **hours** ($1.68$): hours is not significant at 5%, but is at 10% ($1.68>1.65$).

### What a p-value is
The **p-value** is the *minimum significance level at which we would reject $H_0$* for the observed t-statistic:

$$
\boxed{p=\mathbb{P}\big(|T|\ge |t(\hat\beta_k)|\big)}
$$

i.e. the probability, if $H_0$ were true, of a t-statistic at least as extreme as the one we observed. Half of $p$ sits in each tail. Small $p$ = strong evidence against $H_0$.

**Decision rule:** reject $H_0$ at level $\alpha$ iff $p<\alpha$.

| p-value | Reading | Decision |
|---|---|---|
| 0.5 | Half of samples would look this extreme under $H_0$: weak evidence against $H_0$ | Do not reject |
| 0.072 | Only 7.2% of samples this extreme: some evidence | Not at 5%; would reject at 10% |
| 0.014 | Only 1.4%: evidence against $H_0$ | Reject at 5%, not at 1% |

- Income-consumption slope: $p<2\times10^{-16}$, so we reject at any significance level above that.
- Housing `bdrms`: $p=0.213$. Wage `hours`: $p=0.093$ (the "." in the stars column marks significance at 10%).

> [!warning] Do not over-rely on p-values
> The lecture stresses that p-values are widely misinterpreted and that leaning on them has contributed to reproducibility problems and **p-hacking** (trying specifications until $p<0.05$). A p-value is not the probability that $H_0$ is true.

---

## 5. One-sided tests

Same t-statistic $t(\hat\beta_1)=(\hat\beta_1-b)/se(\hat\beta_1)$; only the rejection region changes: all of $\alpha$ goes in one tail, so the critical value is $t_{\alpha}[df]$ (the **1-tailed** row of the table, e.g. $t_{0.05}[32]=1.694$), not $t_{\alpha/2}$.

| | Left-tail test | Right-tail test |
|---|---|---|
| Hypotheses | $H_0:\beta\ge b$ vs $H_1:\beta<b$ | $H_0:\beta\le b$ vs $H_1:\beta>b$ |
| Reject when | $t(\hat\beta)\le -t_\alpha$ | $t(\hat\beta)\ge t_\alpha$ |
| Otherwise | fail to reject | fail to reject |

> [!tip] Table trick (slide 58)
> The t-table has a 1-tailed row and a 2-tailed row. For the same $\alpha$ use the 1-tailed row for one-sided tests ($\alpha=10\%,5\%,1\%$ map to 1-tailed $.10, .05, .01$), and the 2-tailed row for two-sided tests.

### Example: marginal propensity to consume (df 32, $t_{0.05}[32]=1.694$)

| $H_0$ | $H_1$ | $t$ | Decision |
|---|---|---|---|
| $\beta_1\ge0.7$ | $\beta_1<0.7$ | $(0.81547-0.7)/0.01914=6.033$ | Fail to reject (needs $t\le-1.694$) |
| $\beta_1\le0.7$ | $\beta_1>0.7$ | $6.033$ | **Reject** (since $6.033\ge1.694$) |
| $\beta_1\ge0.8$ | $\beta_1<0.8$ | $0.808$ | Fail to reject |
| $\beta_1\le0.8$ | $\beta_1>0.8$ | $0.808$ | Fail to reject |

> [!note] Reconstructed from the slides: do the 0.8 results contradict each other?
> The slide asks this but gives no answer on the page. They do not contradict: failing to reject $\beta_1\ge0.8$ **and** failing to reject $\beta_1\le0.8$ just says the data cannot separate $\beta_1$ from 0.8 in either direction ($0.808$ is tiny relative to the critical value). Not rejecting is not accepting, so there is no inconsistency.

---

## 6. Summary of the testing procedure

1. Write $H_0$ and $H_1$.
2. Compute the t-statistic.
3. Get the critical value for the chosen $\alpha$ (1-tailed or 2-tailed row, correct df).
4. Compare and decide. Equivalent shortcut: reject iff $p<\alpha$ (two-sided: iff $b\notin$ the $(1-\alpha)$ CI).

---

## 7. Regression through the origin

Sometimes theory says $y=0$ when $x=0$, so the model has **no intercept**:

$$
y_i=\beta_1x_i+u_i,\qquad \tilde y_i=\tilde\beta_1x_i
$$

Both the theoretical and fitted lines pass through $(0,0)$.

### OLS estimator
Minimise $\sum(y_i-\tilde\beta_1x_i)^2$. First-order condition:

$$
\frac{\partial}{\partial\tilde\beta_1}\sum(y_i-\tilde\beta_1x_i)^2=-2\sum x_i(y_i-\tilde\beta_1x_i)=0
\ \Rightarrow\ \sum \tilde u_ix_i=0
$$

$$
\sum x_iy_i=\tilde\beta_1\sum x_i^2\quad\Rightarrow\quad\boxed{\tilde\beta_1=\frac{\sum x_iy_i}{\sum x_i^2}}
$$

| | With intercept | Through origin |
|---|---|---|
| Slope estimator | $\hat\beta_1=\dfrac{\sum(x_i-\bar x)y_i}{\sum(x_i-\bar x)^2}$ | $\tilde\beta_1=\dfrac{\sum x_iy_i}{\sum x_i^2}$ |
| Equal when | only if $\bar x=0$ | |
| Unbiased when | A1 to A4 hold (always, even if true $\beta_0=0$) | only if the true intercept is $\beta_0=0$ |

### Which mistake is worse?

| Mistake | Consequence |
|---|---|
| Include an intercept although true $\beta_0=0$ | Minor: $\hat\beta_0$ is just an estimate that should come out near 0; all estimates stay unbiased under A1 to A4. |
| Omit the intercept although true $\beta_0\neq0$ | **Biased slope** $\tilde\beta_1$. |

Direction of the bias (slides 72 to 73): if the true $\beta_0>0$, forcing the line through the origin makes it steeper, $\tilde\beta_1>\hat\beta_1$; if $\beta_0<0$, it makes it flatter, $\tilde\beta_1<\hat\beta_1$.

![[Lec06_through_origin.png]]
*Theory diagram (simulated points, not course data): the green no-intercept line pivots about the origin and distorts the slope in the direction opposite to the sign of the true intercept.*

### Activity 7 (part 4): HW3 Part A Q3, income-consumption
A colleague argues a negative intercept is impossible (consumption cannot be negative) and so fits a no-intercept model. Output shown on slide 75:

![[Lec06_data_hw3_regressions.png]]
*Real data: R output from slide 75, with-intercept model (top) and `gdp + 0` model (bottom).*

| Model | Slope | s.e. | Intercept | Residual s.e. | $R^2$ |
|---|---|---|---|---|---|
| With intercept | 0.8155 | 0.01914 | -21890 (s.e. 1377, t = -15.9, p < 2e-16) | 1325 on 32 df | 0.9827 |
| Through origin (`gdp + 0`) | 0.51524 | 0.00928 | none | 3892 on 33 df | 0.9894 |

> [!note] Reconstructed from the slides: answers to (a) and (b)
> (a) Yes: the intercept has $t=-15.9$, $p<2\times10^{-16}$, so it is significantly different from zero. (b) Use the **model with the intercept**: the true intercept is clearly not 0, so omitting it biases the slope, and indeed the slope drops from 0.8155 to 0.5152, consistent with the $\beta_0<0\Rightarrow\tilde\beta_1<\hat\beta_1$ picture. The no-intercept model's higher printed $R^2$ (0.9894 vs 0.9827) is not comparable: $R^2$ is computed differently without an intercept, and its residual standard error (3892) is far worse than 1325.

The deck then shows "HW 4 Part A" (slide 76) with the sign pattern $\beta_0<0$ and $\tilde\beta_1<\hat\beta_1$; the slide's regression output was not legible as text.

### Should I include an intercept? (slide 77)
- **Theory** (though it does not always give an answer).
- **Statistical tests**: goodness of fit and a significance test on the intercept.

---

## Summary

- A hypothesis test asks how plausible the sample is if $\beta=b$. Four steps: hypotheses, $t=(\hat\beta-b)/se$, critical value, decision.
- Two-sided: reject iff $|t|\ge t_{\alpha/2}[df]$; equivalently iff $b$ lies outside the $(1-\alpha)$ CI.
- The R `t value` column tests only $\beta_k=0$ (significance).
- The p-value $=\mathbb{P}(|T|\ge|t|)$ is the smallest $\alpha$ at which you reject; reject iff $p<\alpha$. Handle with care (p-hacking).
- One-sided tests use the same $t$ but a one-tail critical value $t_\alpha$; "fail to reject" both sides is not a contradiction.
- Dropping the intercept when the true one is non-zero biases the slope; including a needless one is harmless.

## Related notes
- [[Intro Econometrics]] (hub)
- [[Lec_13-Exam Review]]: whole-course review including t and F tests and CIs
- [[Lec_08-Goodness of Fit & Multicollinearity]]
- [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]] and [[Assign_03-Solutions (Answer Key)]]
- [[F-test]]
- Previous: [[Lec_05-Confidence Intervals & Change of Units]] — confidence intervals and change of units
- Next: [[Lec_07-Multiple Hypothesis Tests]] — joint tests and the F-test
