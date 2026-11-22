---
title: Model Misspecification & Quadratics
week: 9
semester: 1
year: 2
course: "Intro Econometrics"
lecture: "Lecture 9 — Model Misspecification: Quadratic Terms, Irrelevant and Omitted Variables"
instructor: Dr. Aluma Dembo
tags:
  - intro-econometrics
  - model-misspecification
  - quadratic-model
  - omitted-variable-bias
  - irrelevant-variable
  - regression-through-the-origin
  - multicollinearity
  - confidence-interval
aliases:
  - Lecture 9 Intro Metrics
  - Misspecification
subject: intro-econometrics
in_scope: true
---

# Model Misspecification & Quadratics

> Part of: [[Intro Econometrics]] | Key concepts: [[Model Misspecification]], [[Quadratic Model]], [[Marginal Effect]], [[Turning Point]], [[Irrelevant Variable]], [[Omitted Variable Bias]], [[Regression Through the Origin]], [[Multicollinearity]], [[Confidence Interval]]

---

## Where this lecture sits

> [!info] The thread
> So far the course assumed we **knew** which explanatory variables belong in the model. In practice we choose them ourselves, by trial and error. This lecture asks what goes wrong when we choose badly, and how a squared term lets one regressor have a **curved** effect. It builds on [[Lec_08-Goodness of Fit & Multicollinearity]] and is followed by [[Lec_10-Dummy Variables]]. The whole course is revised in [[Lec_13-Exam Review]].

**Recap from last week (slides 3 to 6), kept short:**

- **Perfect** multicollinearity: an exact linear relation between regressors. **Partial**: a strong but inexact one.
- Detect partial collinearity indirectly via $R_j^2$, the $R^2$ from regressing $x_j$ on all other regressors.
- High $R_j^2$ makes $1-R_j^2$ small and inflates the variance (see [[Variance of the OLS Estimator]]):

$$
\operatorname{var}(\hat\beta_j)=\frac{\sigma_u^2}{(1-R_j^2)\sum_i (x_{ji}-\bar x_j)^2}
$$

- Overall model significance uses the [[F-test]] of $H_0:\beta_1=\dots=\beta_k=0$ against the restricted model $y=\beta_0+u$.

Today's agenda: **quadratic terms**, **adding an irrelevant variable**, **omitting a relevant variable**, then exam practice.

---

## 1. Model misspecification: the two errors

Two mistakes are possible when we pick regressors:

1. **Adding an irrelevant variable** (one whose true coefficient is zero).
2. **Omitting a relevant variable** (one that really affects $y$).

The lecture's verdict (section 5): the second is the more serious one.

---

## 2. Quadratic terms

### Why add a square

When $x$ and $y$ have a **parabolic** relation, include both $x$ and $x^2$ in the regression. For $f(x)=ax^2+bx+c$:

| Sign of the squared coefficient | Shape | Effect of $x$ on $y$ |
|---|---|---|
| $a>0$ | "happy" (U) | falls, then rises |
| $a<0$ | "sad" (inverted U) | rises, then falls |

### Example: wages and experience (slides 11 to 16)

$$
\log(wage)=\beta_0+\beta_1\,educ+\beta_2\,exp+\beta_3\,exp^2+u
$$

Hypothesis: wage rises with experience up to a point and then falls. Test it by adding `expsq` and checking whether its coefficient is significant.

| Term | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | 6.792880 | 0.845662 | 8.033 | 3.22e-14 |
| educ | 0.077893 | 0.007134 | 10.919 | < 2e-16 |
| exp | 0.043415 | 0.009460 | 4.589 | 1.52e-05 |
| expsq | -0.000916 | 0.000355 | -2.582 | 0.0102 |

`expsq` is significant at 5%, so the relation is parabolic.

### The marginal effect is no longer constant

Differentiating with respect to $exp$:

$$
\frac{\partial \log(wage)}{\partial exp}=\beta_2+2\beta_3\,exp=0.043415+2(-0.000916)\,exp
$$

> [!example] Activity 9 part 1: the slope at different experience levels
> The slides leave the answers blank; plugging in is mechanical.
>
> | Experience | $0.043415-0.001832\cdot exp$ | Reading |
> |---|---|---|
> | 1 year | 0.0416 | about +4.2% wage per extra year |
> | 10 years | 0.0251 | about +2.5% |
> | 20 years | 0.0068 | about +0.7% |
> | 30 years | -0.0115 | about -1.2%: past the peak |
>
> The slope shrinks as experience grows and turns negative after the peak.

### The turning point

Set the derivative to zero (first-order condition) and solve:

$$
0.043415-2(0.000916)\,exp=0
\quad\Rightarrow\quad
exp^*=\frac{0.043415}{2\cdot 0.000916}=23.70
$$

General rule for $y=\dots+\beta_2 x+\beta_3 x^2$: the [[Turning Point]] is at $x^*=-\dfrac{\beta_2}{2\beta_3}$.

![[Lec09_quadratic_turning_point.png]]

> [!note] Reconstructed from the slides
> The figure is redrawn from the wage coefficients (slope lines at 5, 23.7 and 40 years). The lecture's own sketch labels the peak "23.68" while its algebra gives 23.698; I use 23.70.

> [!warning] Common mistakes
> - Interpreting $\beta_2$ alone as "the effect of experience". With a square, the effect is $\beta_2+2\beta_3 exp$ and depends on the level of $exp$.
> - Testing only $\beta_2$ or only $\beta_3$ to say "experience matters". Both belong to the same effect.
> - Forgetting that a turning point may lie outside the observed range of the data (see the smoking example below).

> [!tip] Summary rule
> A negative squared coefficient: the effect of $x$ goes **up then down**. A positive one: **down then up**.

---

## 3. Including an irrelevant variable

Suppose the true model has no $x_3$ ($\beta_3=0$):

$$
\mathbb{E}(y\mid x_1,x_2,x_3)=\mathbb{E}(y\mid x_1,x_2)=\beta_0+\beta_1x_1+\beta_2x_2
$$

but we estimate $\hat y=\hat\beta_0+\hat\beta_1x_1+\hat\beta_2x_2+\hat\beta_3x_3$.

- **Unbiasedness is preserved:** $\mathbb{E}[\hat\beta_1]=\beta_1$, $\mathbb{E}[\hat\beta_2]=\beta_2$, $\mathbb{E}[\hat\beta_3]=0$. The sample value $\hat\beta_3$ will almost never be exactly 0 (that is just sampling noise), but its expectation is.
- **Variance rises.** Adding regressors does not bias estimates but inflates their variances, so coefficients can become insignificant.

### Why variance rises (Activity 9 part 2)

Use $\operatorname{var}(\hat\beta_j)=\dfrac{\sigma_u^2}{(1-R_j^2)\sum_i(x_{ji}-\bar x_j)^2}$.

| Case | What happens | Variance of the estimator |
|---|---|---|
| (a) $x_3$ correlated with $x_1$ | $R_1^2$ rises, so $1-R_1^2$ falls, the denominator shrinks | $\operatorname{var}(\hat\beta_1)$ **increases** |
| (b) $x_1,x_3$ uncorrelated with $x_2$ | $R_2^2=0$, so $1-R_2^2=1$ | $\operatorname{var}(\hat\beta_2)$ **equals** $\dfrac{\sigma_u^2}{\sum_i(x_{2i}-\bar x_2)^2}$, no loss |

> [!note] Reconstructed from the slides
> The slide gives only the blanks and the formula; the filled-in answers above are the standard reading of that formula.

### Diagnose and fix

- Easy to **spot**: the variance is high, so we cannot reject $H_0:\beta=0$.
- Easy to **fix**: drop the variable and re-estimate.
- Example (slide 24), `price = b0 + b1 bdrms + b2 sqrft + u` on HPRICE1:

| Term | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | -19315.00 | 31046.62 | -0.622 | 0.536 |
| bdrms | 15198.19 | 9483.52 | 1.603 | 0.113 |
| sqrft | 128.44 | 13.82 | 9.291 | 1.39e-14 |

We cannot reject that $\beta_{bdrms}=0$ or that the intercept is 0.

> [!warning] Check multicollinearity before dropping a variable
> High collinearity also gives small t-statistics, so a variable that looks irrelevant may be relevant but collinear with another. Look at the **correlation matrix** of the regressors first (slide 25).

---

## 4. Omitting a relevant variable

> [!info] Why it is a big problem
> 1. If the missing variable was never measured, it is hard to fix.
> 2. The estimators are **biased**.

**Setup.** True model (1), satisfying Gauss-Markov A1 to A4 (see [[Gauss-Markov Theorem]]):

$$
y_i=\beta_0+\beta_1x_{1i}+\beta_2x_{2i}+u_i
$$

We wrongly estimate model (2), which omits $x_2$:

$$
y_i=\tilde\beta_0+\tilde\beta_1x_{1i}+\tilde u_i
$$

The effect of $x_2$ is absorbed into $\tilde u_i$. If $x_1$ and $x_2$ are correlated, then $\tilde u$ is correlated with $x_1$, which **violates A2**, and $\tilde\beta_1$ is biased.

### Derivation of the bias

**Step 1.** Substitute the true $y_i$ into the OLS formula for $\tilde\beta_1$:

$$
\tilde\beta_1=\frac{\sum(x_{1i}-\bar x_1)y_i}{\sum(x_{1i}-\bar x_1)x_{1i}}
=\frac{\sum(x_{1i}-\bar x_1)(\beta_0+\beta_1x_{1i}+\beta_2x_{2i}+u_i)}{\sum(x_{1i}-\bar x_1)x_{1i}}
$$

Since $\sum(x_{1i}-\bar x_1)=0$, the $\beta_0$ term vanishes, and the $\beta_1$ term simplifies to $\beta_1$. So:

$$
\tilde\beta_1-\beta_1=\beta_2\frac{\sum(x_{1i}-\bar x_1)x_{2i}}{\sum(x_{1i}-\bar x_1)x_{1i}}+\frac{\sum(x_{1i}-\bar x_1)u_i}{\sum(x_{1i}-\bar x_1)x_{1i}}
$$

**Step 2.** Take expectations. The error term in model (1) satisfies A2, so the last fraction has expectation zero:

$$
\mathbb{E}[\tilde\beta_1-\beta_1]=\beta_2\frac{S_{12}}{S_{11}}\neq 0
$$

where $S_{12}$ is the sample covariance of $x_1$ and $x_2$, and $S_{11}$ is the sample variance of $x_1$. Hence:

$$
\boxed{\text{bias}(\tilde\beta_1)=\beta_2\,\frac{S_{12}}{S_{11}}}
$$

Even a **low** correlation between $x_1$ and $x_2$ biases the estimate if $x_2$ is omitted.

### Direction of the bias

| $\beta_2$ | $S_{12}$ | Bias in $\tilde\beta_1$ |
|---|---|---|
| $>0$ | $>0$ | upward |
| $<0$ | $>0$ | downward |
| $>0$ | $<0$ | downward |
| $<0$ | $<0$ | upward |

- $S_{12}=0$ ($x_1,x_2$ uncorrelated): **no bias**.
- $\beta_2=0$: the omitted variable was irrelevant after all.
- With several omitted variables the estimates are biased but the net direction is hard to know.

See [[Omitted Variable Bias]].

### Variance when a variable is omitted

The earlier variance formula assumed unbiasedness, so it must be recalculated. The variance can be larger or smaller, and it is **not informative** when the estimator is biased. Recall that an **efficient** estimator has minimum variance among **unbiased** estimators.

### Example: wage, education and IQ (slide 34)

| Model | Coefficient on educ | Std. error |
|---|---|---|
| Omitted: `lwage ~ educ` | 0.059588 | 0.006809 |
| Correct: `lwage ~ educ + IQ` | 0.040341 | 0.007996 |

Correlation of `educ` and `IQ` is 0.5429, and IQ has a positive effect on wage. Both signs are positive, so omitting IQ biases the education estimate **upward**, from about 4% to about 6%. Note the standard error was also *smaller* in the omitted model, yet that model is the wrong one.

### Example: education and cigarettes (slides 36 to 43)

Regressing `cigs ~ educ` gives $\hat\beta_{educ}=-0.2185$ (se 0.1580, t = -1.38, p = 0.167): not significant. That estimate is unbiased only if `educ` is uncorrelated with other determinants of smoking sitting in the error.

| Pair | Correlation |
|---|---|
| educ, age | -0.181 |
| educ, lincome | 0.314 |

Both variables correlate with education. Adding `age`, `agesq` and `lincome`:

| Term | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | -6.052 | 6.663 | -0.91 | 0.364 |
| educ | -0.515 | 0.167 | -3.08 | 0.002 |
| age | 0.780 | 0.161 | 4.86 | 0.000 |
| agesq | -0.009 | 0.002 | -5.21 | 0.000 |
| lincome | 0.734 | 0.727 | 1.01 | 0.313 |

$n-k-1=802$ residual df, $R^2=0.0448$. The education effect becomes significant: each extra year of education is associated with **about half a cigarette fewer per day**, so the earlier estimate was biased toward zero.

> [!example] Quadratic in age
> $$\frac{\partial cigs}{\partial age}=\beta_2+2\beta_3\,age=0.780+2(-0.009)\,age$$
>
> Predictions at zero income and education (intercept plus age terms, as on the slide): age 30 gives 9.25, age 40 gives 10.75, age 60 gives 8.35 cigarettes per day. Peak smoking age: $0.78+2(-0.0091)\,age=0\Rightarrow age=42.86$.

![[Lec09_data_age_cigs_scatter.png]]

The scatterplot (slide 42) is how one might suspect a curve, but the picture is noisy: the data run only to about age 44, so the peak at 42.86 sits right at the edge of the sample.

> [!warning] Predictions at "no income, no education"
> The slide's predictions set education and income to zero and use `lincome=0` (income of 1). That is an extrapolation, so treat the levels loosely; the shape in age is the point.

**What if we omit age-squared?** `cigs ~ educ + age + lincome` gives educ -0.390 (p = 0.021), age -0.043 (p = 0.134, **not** significant), lincome 1.753 (p = 0.014). Without the square we draw very different conclusions about age, and the educ estimate shifts again.

### Included vs omitted: bias against variance

| | Include irrelevant variable | Omit relevant variable |
|---|---|---|
| Bias | none | **yes**: $\beta_2 S_{12}/S_{11}$ |
| Variance | higher | can be higher or lower; unreliable |
| Easy to detect? | yes (high se, insignificant) | no |
| Easy to fix? | yes (drop it) | only if the data exist |

> [!tip] Rule of thumb (slide 44)
> To decide whether to add a variable, weigh bias against variance. We **always prefer unbiasedness over minimal variance**, so we add any relevant explanatory variable.

---

## 5. Regression through the origin

**Omitting the intercept biases the estimate** unless the true intercept is zero. See [[Regression Through the Origin]].

$$
\tilde\beta_1=\frac{\sum x_iy_i}{\sum x_i^2}
\qquad\text{vs}\qquad
\hat\beta_1=\frac{\sum(x_i-\bar x)y_i}{\sum(x_i-\bar x)^2}
$$

- The two slope estimates are equal **only if $\bar x=0$**.
- No-intercept OLS is unbiased only if the true $\beta_0=0$.
- Allowing an intercept when $\beta_0=0$ is a **small mistake**: $\hat\beta_0$ will be near zero and under A1 to A4 everything stays unbiased.
- Dropping the intercept when $\beta_0\neq0$ biases $\tilde\beta_1$.

![[Lec09_through_origin_slopes.png]]

> [!note] Reconstructed from the slides
> The lecture shows two schematic sketches ($\hat\beta_0>0$: $\tilde\beta_1>\hat\beta_1$; $\hat\beta_0<0$: $\tilde\beta_1<\hat\beta_1$). This figure re-simulates the idea with made-up points (true slope 1), so it shows direction only, not data.

> [!example] From HW 4: consumption on GDP (slide 50)
> | Model | Intercept | Slope |
> |---|---|---|
> | With intercept | -2.189e+04 | 0.8155 (se 0.0191) |
> | Through origin | none | 0.51524 (se 0.00928) |
>
> Negative $\hat\beta_0$, so $\tilde\beta_1<\hat\beta_1$. Note the no-intercept $R^2=0.9894$ is not comparable to 0.9827.

Related work: [[Assign_04-Omitted Variables, F-tests & Multicollinearity (Birthweight & Soda Prices)]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]], [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]].

---

## 6. Practice exam questions (slides 51 to 71)

### Activity 9 part 3: income and consumption (2018 Moed A, Question III)

Model: $CONS_i=\beta_0+\beta_1INC_i+\beta_2INC\_sqr_i+u_i$ (model 3).

| Term | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | -5.899e+04 | 7.170e+03 | -8.227 | 2.71e-09 |
| INCOME | 1.869 | 0.2020 | 9.251 | 1.99e-10 |
| INCOME2 | -7.272e-06 | 1.391e-06 | -5.227 | 1.12e-05 |

$R^2=0.9908$, 31 residual df. $\operatorname{cor}(INCOME,INCOME^2)=0.9975$.

> [!info] Q6: test a non-linear effect of income at 99%
> The slides leave this for the class; the working below is mine.
> - **a)** $H_0:\beta_2=0$ against $H_1:\beta_2\neq0$ (two-sided).
> - **b)** $t=\dfrac{-7.272\times10^{-6}}{1.391\times10^{-6}}=-5.227$.
> - **c)** Critical value: $t_{0.005}[31]\approx 2.74$.
> - **d)** $|t|=5.23>2.74$: **reject** $H_0$ at 1%. Income has a non-linear effect on consumption.

> [!note] High correlation of $x$ and $x^2$
> The correlation of 0.9975 is built in (a variable and its square rise together) and is not a problem for the squared term here; the coefficients are still highly significant.

### Activity 9 part 4: housing prices

$lprice=\beta_0+\beta_1\,lsqrft+\beta_2\,llotsize+\beta_3\,bdrms+u$. Output: intercept 5.61070 (0.65128); lsqrft 0.70023 (0.09287, t = 7.540); llotsize 0.16797 (0.03828, t = 4.388); bdrms 0.03696 (0.02753, t = 1.342, p = 0.183). $R^2=0.643$, adjusted 0.6302, residual se 0.1846 on 84 df, SSR = 2.862557.

> [!example] Q1: is the price elasticity with respect to area one?
> - $H_0:\beta_1=1$, $H_1:\beta_1\neq1$ (in a log-log model $\beta_1$ is an [[Elasticity]]).
> - $t=\dfrac{0.70023-1}{0.09287}=-3.22$.
> - Critical value about 2 (5%, 84 df).
> - $|-3.22|>2$: **reject** $H_0$ at 5%.

> [!example] Q3: "the 85% confidence interval for bdrms will not include 0": correct?
> No. The p-value is 0.183, so we fail to reject $\beta_{bdrms}=0$ at any $\alpha<0.183$. The $(1-\alpha)$ interval contains 0 for all such $\alpha$, and for 85% $\alpha=0.15<0.183$. So **0 is inside** the 85% interval and the researcher is wrong.
>
> The link between CI and test (slides 61 to 62): the interval is $\hat\beta_1\pm t_{\alpha/2}[df]\cdot se(\hat\beta_1)$ with $df=N-M$. We fail to reject $H_0:\beta_1=b$ at level $\alpha$ **iff** $b$ lies in the $1-\alpha$ interval. See [[Confidence Interval]].

> [!example] Q4: a linear restriction
> Claim: adding $C$ to $lsqrft$ changes $lprice$ by four times as much as adding $C$ to $llotsize$.
>
> Adding $C$ to $lsqrft$ changes $lprice$ by $\beta_1C$; adding $C$ to $llotsize$ changes it by $\beta_2C$. So $\beta_1C=4\beta_2C$.
> - **a)** $H_0:4\beta_2=\beta_1$ (equivalently $\beta_1-4\beta_2=0$).
> - **b)** Unrestricted: the full model above.
> - **c)** Restricted: substitute $\beta_1=4\beta_2$: $lprice=\beta_0+\beta_2(4\,lsqrft+llotsize)+\beta_3\,bdrms+u$.
> - In R: dependent variable `lprice`; regressors `bdrms` and a new variable $size=4\cdot lsqrft+llotsize$.
>
> Test with the [[F-test]] comparing restricted and unrestricted SSR.

> [!example] Q5: $\operatorname{cor}(lsqrft,llotsize)=0.88$, other assumptions hold
> - Estimators **unbiased**.
> - Variance **minimal** and estimators **efficient**: high (not perfect) correlation inflates the variance relative to uncorrelated regressors, yet the Gauss-Markov theorem still holds, so OLS has minimum variance among unbiased linear estimators. This is the slide's answer; the reason is my wording.

> [!example] Q6: omit $llotsize$ because of the high correlation (model 2)
> Model (2): $lprice=\beta_0+\beta_1lsqrft+\beta_2bdrms+u$. Output: intercept 6.28435 (0.69758); lsqrft estimate and se hidden on the slide, t = 8.190; bdrms 0.03811 (0.03034, t = 1.256, p = 0.213).
> - **a)** **Biased**: $llotsize$ is relevant ($\beta_2\neq0$, highly significant) and correlated with $lsqrft$, so omitting it gives omitted variable bias.
> - **b)** Variance **not necessarily minimal**.
> - **c)** **Not efficient**.
> - **d)** "The elasticity with respect to area in (2) is greater than 0.7": the slide shows no marked answer. Since $\beta_2>0$ and the correlation is positive, the bias is **upward**, so the estimate in (2) should exceed 0.70023, but the actual estimate is hidden. **Reconstructed, unsure:** I would answer "we cannot say" about the *true* elasticity (a biased estimate does not tell us the truth); an examiner might accept TRUE if asked about the estimate itself.

Past-paper practice for the same ideas: [[Lec_13-Exam Review]].

---

## Summary

- **Misspecification** has two forms: adding an irrelevant variable or omitting a relevant one.
- A **squared term** gives a parabola; the marginal effect is $\beta_2+2\beta_3x$ and the peak or trough is at $x^*=-\beta_2/(2\beta_3)$.
- **Irrelevant variable:** unbiased but higher variance; easy to spot and fix, but check multicollinearity first.
- **Omitted variable:** biased by $\beta_2 S_{12}/S_{11}$; sign from the signs of $\beta_2$ and $S_{12}$; variance no longer reliable; hard to detect and fix. Prefer unbiasedness over small variance, so include relevant variables.
- **No intercept** biases the slope unless $\beta_0=0$ or $\bar x=0$; including an unneeded intercept is harmless.
- A CI and a two-sided test are the same thing: reject $H_0:\beta=b$ at $\alpha$ iff $b$ is outside the $1-\alpha$ interval.

---

## Related notes

- Hub: [[Intro Econometrics]]
- Previous: [[Lec_08-Goodness of Fit & Multicollinearity]] — goodness of fit and multicollinearity
- Next: [[Lec_10-Dummy Variables]] — dummy variables, then [[Lec_11-Interaction Terms]] and [[Lec_12-Heteroskedasticity]]
- Course review: [[Lec_13-Exam Review]]
- Concepts: [[Model Misspecification]], [[Omitted Variable Bias]], [[Quadratic Model]], [[Marginal Effect]], [[Regression Through the Origin]], [[Multicollinearity]], [[Variance of the OLS Estimator]], [[Gauss-Markov Theorem]], [[F-test]], [[Confidence Interval]], [[Elasticity]]
- Assignments: [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]], [[Assign_04-Omitted Variables, F-tests & Multicollinearity (Birthweight & Soda Prices)]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]
