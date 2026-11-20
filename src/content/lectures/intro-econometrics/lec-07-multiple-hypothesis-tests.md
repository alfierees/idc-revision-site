---
title: Multiple Hypothesis Tests
week: 7
semester: 1
year: 2
academic_year: "2025-26"
course: "Intro Econometrics"
instructor: Dr. Aluma Dembo
lecture: "Lecture 7 — Multiple Hypothesis Testing: F-tests, Restricted vs Unrestricted Models"
tags:
  - intro-econometrics
  - f-test
  - joint-hypothesis-test
  - restricted-model
  - hypothesis-testing
  - OLS
  - returns-to-scale
aliases:
  - Multiple Hypothesis Testing
  - F-test
  - Joint Hypothesis Test
  - Lecture 7 Intro Metrics
subject: intro-econometrics
in_scope: true
---

# Multiple Hypothesis Tests

> Part of: [[Intro Econometrics]] | Key concepts: [[F-test]], [[Joint Hypothesis Test]], [[Restricted Model]], [[Unrestricted Model]], [[Residual Sum of Squares]], [[t-test]], [[Returns to Scale]]

---

## Where this lecture sits

> [!info] Quick recap (week 3 material)
> - The multivariate model is $y_i=\beta_0+\beta_1x_{1i}+\dots+\beta_Kx_{Ki}+u_i$; each $\beta_k$ is the effect of $x_k$ **holding all other variables fixed**.
> - [[OLS Estimation]] minimises $\sum\hat u_i^2$; the partial derivatives give $K+1$ first-order conditions $\sum\hat u_i=0$, $\sum\hat u_ix_{ki}=0$.
> - In R: `summary(lm(y ~ x1 + x2 + x3 + x4, mydata))`.
> - A single coefficient is tested with a [[t-test]] or a [[Confidence Interval]].

**New this lecture:** how to test **several restrictions at once** with an [[F-test]], and how to build the restricted model for any null hypothesis. The later lectures reuse this machinery: [[Lec_08-Goodness of Fit & Multicollinearity]] (joint significance when t-stats are all small) and [[Lec_11-Interaction Terms]] (Chow-type joint tests on dummies and interactions). The whole course is summarised in [[Lec_13-Exam Review]]; practice is in [[Assign_04-Omitted Variables, F-tests & Multicollinearity (Birthweight & Soda Prices)]].

> [!note] Title slide vs content
> The title slide also lists "regression through the origin" and "change of units". The 37 slides cover only multiple hypothesis tests, so those two topics are not in this note.

---

## 1. Warm-up: reading one coefficient (Activity 7, part 1)

Model on 540 US workers (2002):

$$
\log(wage_i)=\beta_0+\beta_1S_i+\beta_2Exp_i+\beta_3IQtest_i+\beta_4Age_i+\beta_5Hours_i+u_i
$$

| Variable | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | 1.385217 | 0.4218969 | 3.28 | 0.001 |
| s | 0.0981245 | 0.0108345 | 9.06 | 0.000 |
| exp | 0.0402309 | 0.0056855 | 7.08 | 0.000 |
| IQ_test | 0.0112204 | 0.0029018 | 3.87 | 0.000 |
| age | -0.0336168 | 0.0101734 | -3.30 | 0.001 |
| hours | 0.0041505 | 0.0024687 | 1.68 | 0.093 |

Residual SE 0.49889 on 534 df; $R^2=0.3011$, adjusted $R^2=0.2946$; $F=46.02$ on 5 and 534 df.

**Effect of age:** $\hat\beta_4=-0.0336$, so one more year of age lowers wage by about **3.36%** (log-level model, so multiply by 100). It is significant at 10%, 5% and 1% ($p=0.001$), so we reject $H_0:\beta_4=0$. The 95% interval is

$$
-0.034\pm 0.0101734\cdot t_{0.025}[534]\quad\Rightarrow\quad[-0.0536,\,-0.0136]
$$

> [!tip] Why this matters for what follows
> A t-test answers "is **this one** coefficient zero?". It cannot answer "are $x_2$ **and** $x_3$ both irrelevant?" or "does $\beta_3=\beta_4$?". Those are **joint** hypotheses, so we need the F-test.

---

## 2. Joint hypotheses

Take $y=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3+\beta_4x_4+u$ and test that $x_2$ **and** $x_3$ both have no effect:

$$
H_0:\ \beta_2=0\ \text{ and }\ \beta_3=0
\qquad
H_1:\ \beta_2\neq0\ \text{ or }\ \beta_3\neq0
$$

> [!warning] The alternative is "everything else"
> $H_1$ is true if **at least one** restriction fails: $(\beta_2\neq0,\beta_3\neq0)$, $(\beta_2=0,\beta_3\neq0)$ or $(\beta_2\neq0,\beta_3=0)$. It is not "both are non-zero".

An [[F-test]] compares two models:

| | Unrestricted model (UR) | Restricted model (R) |
|---|---|---|
| What it is | the original model we care about | the original model **with the null imposed** |
| Example | $y=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3+\beta_4x_4+u$ | $y=\beta_0+\beta_1x_1+\beta_4x_4+u$ |
| Parameters | free | forced by $H_0$ |

See [[Unrestricted Model]] and [[Restricted Model]].

---

## 3. Building the restricted model

Substitute the null into the model, then simplify. Always start from $y=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3+\beta_4x_4+u$.

| Null hypothesis | Restricted model | What is new |
|---|---|---|
| $\beta_2=0$ and $\beta_3=0$ | $y=\beta_0+\beta_1x_1+\beta_4x_4+u$ | variables dropped |
| $\beta_0=0$, $\beta_2=0$, $\beta_3=0$ | $y=\beta_1x_1+\beta_4x_4+u$ (no intercept) | intercept and variables dropped |
| $\beta_2=0$ and $\beta_3=\beta_4$ | $y=\beta_0+\beta_1x_1+\beta_4(x_3+x_4)+u$ | **new variable** $x_3+x_4$ |
| $\beta_2=0$ and $\beta_3=2\beta_4$ | $y=\beta_0+\beta_1x_1+\beta_4(2x_3+x_4)+u$ | **new explanatory variable** $2x_3+x_4$ |
| $\beta_2=1$ and $\beta_3=0$ | $y-x_2=\beta_0+\beta_1x_1+\beta_4x_4+u$ | **new dependent variable** $y-x_2$ |

> [!info] Rule of thumb (slide 20)
> - If a restriction fixes a coefficient to a **non-zero constant** ($\beta_k=b,\ b\neq0$), the restricted model has a **new outcome variable** ($y-bx_k$).
> - If a restriction ties coefficients together ($\beta_j=k\beta_m$), the restricted model has a **new explanatory variable** (combine $x_j$ and $x_m$).
> - If it sets a coefficient to **zero**, just drop the variable.

> [!example] Activity 7, part 2
> $H_0:\ \beta_2=3,\ \beta_1=-\beta_4,\ \beta_3=0$.
>
> - $H_1:\ \beta_2\neq3$ or $\beta_1\neq-\beta_4$ or $\beta_3\neq0$.
> - Unrestricted: the full four-regressor model.
> - Restricted: $y=\beta_0-\beta_4x_1+3x_2+0x_3+\beta_4x_4+u=\beta_0+3x_2+\beta_4(x_4-x_1)+u$.
> - Rearranged: $y-3x_2=\beta_0+\beta_4(x_4-x_1)+u$.
> - New variables: dependent variable $y-3x_2$ and explanatory variable $x_4-x_1$.

---

## 4. The F-statistic

### Residual sum of squares

$$
RSS=\sum_{i=1}^N\hat u_i^2
$$

See [[Residual Sum of Squares]] (written SSR in some notes; same thing).

**Key fact:**

$$
\boxed{RSS_{UR}\le RSS_R}
$$

> [!tip] Why dropping variables can never lower the RSS (slide 22)
> OLS picks the coefficients that **minimise** RSS. The unrestricted model has all the freedom of the restricted one plus more: it could choose $\hat\beta_2=0$ and copy the restricted estimates exactly, giving the same RSS. Since it can always do at least that well, it never does worse. So $RSS_R<RSS_{UR}$ unless the unrestricted estimates happen to satisfy the null exactly, in which case they are equal.

**Idea of the test:** if the null is (nearly) true, imposing it barely raises the RSS, so the gap $RSS_R-RSS_{UR}$ is small. If the null is false, forcing it costs a lot of fit and the gap is large.

### The statistic

$$
\boxed{F=\frac{(RSS_R-RSS_{UR})/q}{RSS_{UR}/(N-M)}\ \sim\ F(q,\,N-M)}
$$

| Symbol | Meaning |
|---|---|
| $RSS_{UR}$ | RSS of the unrestricted model |
| $RSS_R$ | RSS of the restricted model |
| $q$ | number of restrictions in the null |
| $N-M$ | degrees of freedom of the **unrestricted** model |
| $N$ | number of observations |
| $M$ | number of first-order conditions (estimated parameters) in the unrestricted model, i.e. $K+1$ |

> [!info] The denominator is $\hat\sigma^2$
> $RSS_{UR}/(N-M)$ is the unbiased estimator of the error variance in the unrestricted model (the textbook remark on slide 34). So $F$ is "extra RSS per restriction" measured in units of the noise level.

### Computing $q$

$q=df_R-df_{UR}$: the difference in degrees of freedom, which equals the number of parameters removed. With $N$ observations and $y=\beta_0+\beta_1x_1+\beta_2x_2+u$ (UR has $N-3$ df):

| Null | Restricted model | $df_R$ | $q=df_R-df_{UR}$ |
|---|---|---|---|
| $\beta_1=\beta_2$ | $y=\beta_0+\beta_1(x_1+x_2)+u$ | $N-2$ | $(N-2)-(N-3)=\mathbf{1}$ |
| $\beta_1=\beta_2=0$ | $y=\beta_0+u$ | $N-1$ | $(N-1)-(N-3)=\mathbf{2}$ |
| $\beta_1=\beta_2=5$ | $y-5(x_1+x_2)=\beta_0+u$ | $N-1$ | $(N-1)-(N-3)=\mathbf{2}$ |

> [!tip] Shortcut
> $q$ is just the number of equals signs you are testing (count independent restrictions). Use the df difference to double check.

### Decision rule

![[Lec07_f_distribution_rejection.png]]

- The $F$ distribution takes only **positive** values, so the rejection region is a single right tail: reject $H_0$ if $F>F_{crit}(q,N-M)$.
- If $F\le F_{crit}$, we **fail to reject** the null.
- Critical values come from the table in the formula sheet (slide 26 shows the 5% table: columns are $q$, rows are $N-M$; the "infinity" row for $q=4$ gives 2.37) or from R.

---

## 5. Relation between the F-test and the t-test

When there is a **single** restriction ($q=1$) the two tests are the same test:

$$
\boxed{F[1,\,N-M]=\big(t[N-M]\big)^2}
$$

Slide 27 illustrates with an R regression of consumption on GDP: $t=42.6$ and the ANOVA F value is $1814.9=42.6^2$.

> [!warning] Only for $q=1$
> For two or more restrictions there is no t-test equivalent. A joint test can reject even when each individual t-test fails to reject, and vice versa. This is exactly the situation with highly correlated regressors (see [[Lec_08-Goodness of Fit & Multicollinearity]]).

---

## 6. Worked example: electricity production cost (Activity 7, part 3)

### Setup

Cost is a Cobb-Douglas function ([[Cobb-Douglas Function]]) of output $Y$ and the prices of fuel $P_F$, labour $P_L$ and capital $P_K$:

$$
Cost=B\,Y^{\beta_y}P_L^{\beta_1}P_K^{\beta_2}P_F^{\beta_3}e^{u}
$$

Data: 99 monthly observations (cost in millions of dollars, output in billions of kWh). Taking logs makes it linear ($\ln B$ becomes the intercept):

$$
\ln Cost=\ln B+\beta_y\ln Y+\beta_1\ln P_L+\beta_2\ln P_K+\beta_3\ln P_F+u
$$

### OLS output (unrestricted model)

| Variable | Estimate | Std. error | t | p |
|---|---|---|---|---|
| (Intercept) | -8.548757 | 1.394584 | -6.13 | 0.000 |
| ln_y | 0.824102 | 0.013085 | 62.98 | 0.000 |
| ln_pk | 0.2028625 | 0.1445721 | 1.40 | 0.164 |
| ln_pl | 0.1778888 | 0.142561 | 1.25 | 0.215 |
| ln_pf | 0.6932505 | 0.0807074 | 8.59 | 0.000 |

Residual SE 0.21197 on 94 df; $R^2=0.9798$, adjusted $R^2=0.9790$; $F=1140.68$ on 4 and 94 df.

> [!info] Interpretation
> The coefficient on $\ln Y$ is an [[Elasticity]]: a 1% rise in output raises cost by about **0.8%**, less than 1%. This means [[Returns to Scale]] are **increasing**: doubling output less than doubles cost, which is the signature of a **natural monopoly** (the slide's own conclusion).

### Test of constant returns to scale

$$
H_0:\ \beta_y=1\qquad H_1:\ \beta_y\neq1
$$

Constant returns means cost grows one-for-one with output. The null fixes a coefficient to a non-zero constant, so (by the rule in section 3) the restricted model has a **new dependent variable**:

$$
\ln Cost-\ln Y=\ln B+\beta_1\ln P_L+\beta_2\ln P_K+\beta_3\ln P_F+u
$$

From R (`anova(...)["Residuals",2]`): $RSS_{UR}=4.2234$ and $RSS_R=12.3426$. Here $q=1$, $N=99$, $M=5$, so $N-M=94$, and $F_{crit}(1,94)=3.92$.

$$
F=\frac{(12.3426-4.2234)/1}{4.2234/(99-5)}=\frac{8.1192}{0.04493}=180.71
$$

Since $180.71>3.92$ we **reject** constant returns to scale.

### Same answer from the t-test

$$
t=\frac{\hat\beta_y-1}{se(\hat\beta_y)}=\frac{0.824102-1}{0.013085}=-13.443,\qquad t_{0.025}[94]\approx-1.98
$$

$-13.443<-1.98$, so reject. And $13.443^2=180.71$, matching $F$ exactly, as the $q=1$ relation predicts.

> [!warning] Typo on the slides
> Slide 33 writes "13.433^2 = 180.71". The t-statistic on the same slide is 13.443 and $13.443^2\approx180.7$, so 13.433 is a typo.

---

## Summary

- A [[t-test]] handles one restriction; an [[F-test]] handles $q$ restrictions at once ([[Joint Hypothesis Test]]).
- Write $H_0$, $H_1$ (any restriction fails), the **unrestricted** model, and the **restricted** model (impose $H_0$ and simplify).
- Restricted-model recipe: zero restrictions drop variables; $\beta_k=b\neq0$ creates a **new dependent variable** $y-bx_k$; $\beta_j=k\beta_m$ creates a **new explanatory variable**.
- $RSS_{UR}\le RSS_R$ always, because OLS minimises RSS and the unrestricted model has more freedom.
- $F=\dfrac{(RSS_R-RSS_{UR})/q}{RSS_{UR}/(N-M)}\sim F(q,N-M)$; $q=df_R-df_{UR}$; reject if $F>F_{crit}$ (right tail only).
- For $q=1$: $F=t^2$ and the two tests agree.
- Electricity example: $\hat\beta_y=0.82$ (elasticity below 1, increasing returns); $F=180.71>3.92$, so constant returns to scale is rejected.

## Related notes

- [[Intro Econometrics]] (subject hub)
- [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]]
- [[Lec_13-Exam Review]] (whole-course review, includes t and F tests)
- [[Assign_04-Omitted Variables, F-tests & Multicollinearity (Birthweight & Soda Prices)]], [[Assign_04-Solutions (Answer Key)]]
- [[Assign_02-Functional Form & the Money-Supply Log-Log Model]] (log-log elasticities)
- Previous: [[Lec_06-Hypothesis Tests & p-values]] — t tests and p-values
- Next: [[Lec_08-Goodness of Fit & Multicollinearity]] — goodness of fit and multicollinearity
