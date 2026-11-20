---
title: "2025 Moed B — Eco-Labeled Apple Demand, Quadratics, Dummies & Chow Test"
type: past-paper
semester: 1
year: 2
course: "Intro Econometrics"
exam: "Final Exam 2025 — Moed B (April 4, 2025)"
instructor: Dr. Aluma Dembo
status: worked-solution
tags:
  - intro-econometrics
  - past-paper
  - exam-prep
  - log-log-model
  - omitted-variable-bias
  - multicollinearity
  - f-test
  - quadratic-model
  - dummy-variable
  - interaction-term
  - chow-test
aliases:
  - Dembo 2025 Moed B
  - Intro Metrics 2025 B
  - Apple Demand Exam
subject: intro-econometrics
in_scope: true
---

# 2025 Moed B — Eco-Labeled Apple Demand, Quadratics, Dummies & Chow Test

> Part of: [[Intro Econometrics]]
> **Final Exam 2025, Moed B (4 April 2025)** — Introduction to Econometrics, Dr. Aluma Dembo. 100 points, 3 hours, open notes (20 pages), significance level 5% unless stated, round to 3 significant figures.
> Builds on: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_13-Exam Review]]
> Related assignments: [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]], [[Assign_02-Functional Form & the Money-Supply Log-Log Model]], [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]

> [!warning] No official answer key: every answer here is AI-written
> This paper came **without** a key. **All 16 questions (every sub-part) are AI-solved**, with arithmetic re-checked in Python and grounded in [[Lec_13-Exam Review]] and the formula sheet. Treat them as carefully reasoned, not official. Q3 (omitted-variable trick), Q7 (what partial multicollinearity does), Q13 (why the intercept changes) and Q5 (units of `income`, back-transforming the log) are the ones where the exam's intended wording could differ from mine.

> [!note] Exam mechanics
> Each answer in the real exam goes in a box with "[1 point] answer" plus "[4 points] show your work", so below each answer is followed by its justification. Some output lines in the scan are blacked out (the t value of $\beta_2$ in model [A]); the tests below rebuild them.

---

## What this paper tests

> [!info] One paper, the whole course
> **Part I (47 pts)** is a *demand for eco-labeled apples* story with five nested regressions ([1] to [5]). It tests, in order:
> 1. **Logs and elasticities** (Q1), **unit changes** (Q2).
> 2. **Omitted-variable bias** used backwards: recover a covariance from a short and a long regression (Q3).
> 3. **t-tests** (one-sided) and **predictions** (Q4, Q5).
> 4. **Perfect vs partial multicollinearity** (Q6, Q7) and an **F-test** for joint significance (Q8).
>
> **Part II (53 pts)** is an abstract $Y$ on $W, X$ dataset (113 observations) walking through **t-tests / p-values**, **R² and the F-test of model significance**, a **quadratic**, a **dummy**, an **interaction**, a **confidence interval** and a **Chow test** (Q9 to Q16).

> [!tip] Intuition: the "find the number in the R output" skill
> Almost every number needed is already printed: coefficient, SE, $t$, degrees of freedom, $R^2$. The marks are for (a) picking the right row, (b) setting up the right $H_0$ and tail, (c) using the right degrees of freedom and critical value.

---

# Part I — Apple demand [47 pts]

**Data:** 660 survey participants, but **248 were dropped for missing values**, so the regressions use $660-248 = 412$ observations. (Check: model [1] has 409 residual df and 3 parameters, $409+3=412$.) `ln.Q.eco`, `ln.P.eco`, `ln.P.reg` are log quantity of eco apples, log price of eco apples and log price of regular apples; `income` is in **thousands of USD**.

**Model [1] output (`model.1`)**, $\ln Q_{eco} = \beta_0+\beta_1\ln P_{eco}+\beta_2\ln P_{reg}$:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 0.62829 | 0.05065 | 12.405 | <2e-16 |
| ln.P.eco | -0.44737 | 0.20678 | -2.163 | 0.0311 |
| ln.P.reg | 0.34362 | 0.21489 | 1.599 | 0.1106 |

Residual SE 0.7107 on 409 df; $R^2 = 0.01157$, adj. $R^2 = 0.006733$; $F = 2.393$ on 2 and 409 df, p = 0.09263.

---

## Q1 — Price elasticities in a log-log demand model [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **Own-price elasticity** $= \hat\beta_1 = -0.447$. **Cross-price elasticity** $= \hat\beta_2 = 0.344$.

In a [[Log-Log Model]] the slope on a logged regressor **is** the [[Elasticity]]: $\dfrac{\partial \ln Q}{\partial \ln P} = \dfrac{\%\Delta Q}{\%\Delta P}$ (see [[Assign_02-Functional Form & the Money-Supply Log-Log Model]]).

- **Own price of eco apples** ($-0.447$): a **1% rise** in the eco-apple price lowers the quantity of eco apples demanded by about **0.447%**, holding the regular-apple price fixed. Demand is **inelastic** ($|\varepsilon|<1$). The coefficient is significant at 5% ($t=-2.163$, $p=0.0311$).
- **Price of regular apples** ($+0.344$): a **1% rise** in the regular-apple price raises eco-apple quantity by about **0.344%**, holding the eco price fixed. Positive sign means the two are **substitutes**. It is **not** significant at 5% ($p=0.1106$), so we can't rule out zero cross-price effect.

> [!tip] Intuition
> Negative own-price elasticity is the law of demand. Positive cross-price elasticity says shoppers switch to eco apples when regular apples get dearer.

---

## Q2 — Changing the units from lbs to kg [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> $\hat\beta_1$ **does not change** (stays $-0.447$). Only the intercept changes.

With $1\,\text{kg}=2.2\,\text{lb}$: $Q_{kg}=Q_{lb}/2.2$ (fewer kg than lb) and $P_{kg}=2.2\,P_{lb}$ (USD per kg is higher than USD per lb). Take logs:

$$\ln Q_{kg}=\ln Q_{lb}-\ln 2.2,\qquad \ln P_{kg}=\ln P_{lb}+\ln 2.2 .$$

Substitute into model [1]:

$$\ln Q_{kg}+\ln 2.2=\beta_0+\beta_1(\ln P^{kg}_{eco}-\ln 2.2)+\beta_2(\ln P^{kg}_{reg}-\ln 2.2)+\dots$$

$$\ln Q_{kg}=\underbrace{\beta_0-(1+\beta_1+\beta_2)\ln 2.2}_{\text{new intercept}}+\beta_1\ln P^{kg}_{eco}+\beta_2\ln P^{kg}_{reg}.$$

So the slopes $\beta_1,\beta_2$ are **unchanged**: rescaling a variable that is already in logs only **adds a constant** to it, and adding a constant to a regressor or to $y$ shifts the intercept but never the slope (see [[Lec_13-Exam Review]], section 3.1, and [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]]). Elasticities are unit-free by construction.

> [!example] The new intercept (not asked)
> $\ln 2.2 = 0.7885$, so the new intercept is $0.62829-(1-0.44737+0.34362)(0.7885)=0.62829-0.70666\approx-0.078$. Standard errors and $t$-statistics of the slopes are also unchanged.

---

## Q3 — Covariance of log prices from the short and the long regression [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

**Given:** $\text{Var}(\ln P_{eco})=0.086$, $\text{Var}(\ln P_{reg})=0.074$ and the **short regression** (omits $\ln P_{reg}$): $\widehat{\ln Q_{eco}}=0.5698-0.1749\ln P_{eco}$.

> [!success] Answer
> $\text{Cov}(\ln P_{eco},\ln P_{reg})\approx \mathbf{0.0682}$.

**Idea: the omitted-variable-bias formula, solved for the covariance.** The short-regression slope $\tilde\beta_1$ equals the long-regression slope plus the bias (see [[Lec_13-Exam Review]], section 2.3, and [[Omitted Variable Bias]]):

$$\tilde\beta_1=\hat\beta_1+\hat\beta_2\cdot\frac{\text{Cov}(\ln P_{eco},\ln P_{reg})}{\text{Var}(\ln P_{eco})}.$$

Equivalently, regress the omitted variable on the included one: $\ln P_{reg}=\delta_0+\delta_1\ln P_{eco}+e$, with $\delta_1=\text{Cov}/\text{Var}(\ln P_{eco})$, and $\tilde\beta_1=\hat\beta_1+\hat\beta_2\,\delta_1$.

> [!example] Solving
> $-0.1749=-0.44737+0.34362\,\delta_1$
> $\delta_1=\dfrac{-0.1749+0.44737}{0.34362}=\dfrac{0.27247}{0.34362}=0.7929$
> $\text{Cov}=\delta_1\cdot\text{Var}(\ln P_{eco})=0.7929\times0.086=0.0682$

> [!tip] Intuition
> The short regression gives $\ln P_{eco}$ credit for the effect of the regular price. Since the two prices move together (positive covariance) and regular price pushes eco quantity up ($\beta_2>0$), the short slope is biased **upward** (from $-0.447$ to $-0.175$), which matches the data. The hint "assume Gauss-Markov holds for [1]" is what lets us treat the long coefficients as the truth.

The variance of $\ln P_{reg}$ ($0.074$) is not needed; it is a distractor (it would be used to compute the correlation: $0.0682/\sqrt{0.086\times0.074}\approx0.855$).

---

## Q4 — Do men buy more eco apples? One-sided t-test [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

**Model [2] output (`model.2`)** (relevant rows):

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| ln.P.eco | -0.4564739 | 0.2087481 | -2.187 | 0.0293 |
| ln.P.reg | 0.3477799 | 0.2158877 | 1.611 | 0.1080 |
| age | 0.0047472 | 0.0025435 | 1.866 | 0.0627 |
| educ | -0.0136075 | 0.0165932 | -0.820 | 0.4127 |
| income | 0.0004573 | 0.0009902 | 0.462 | 0.6444 |
| hh.total | 0.0433196 | 0.0250127 | 1.732 | 0.0841 |
| **male** | **0.0666397** | **0.0843135** | **0.790** | **0.4298** |

Residual SE 0.7096 on **404 df** (248 deleted); $R^2=0.02684$; $F=1.592$ on 7 and 404 df, p = 0.1361.

### A. Hypotheses and test statistic

> [!success] Answer
> $H_0:\beta_7=0$ vs $H_1:\beta_7>0$ (men buy more). $t=\dfrac{0.0666397-0}{0.0843135}=\mathbf{0.790}$.

The claim "men purchase **more**" is the alternative, so the test is **one-sided (right tail)**. The $t$ column already prints $0.790$.

### B. Degrees of freedom

> [!success] Answer
> $N-M=412-8=\mathbf{404}$ (from the R output: "404 degrees of freedom").

### C. Conclusion

> [!success] Answer
> **Fail to reject** $H_0$ at 5%: $0.790<t_{crit}=1.65$ (one-sided, 404 df).

With 404 df the table value is essentially the normal one, $t_{0.05}\approx1.65$. There is no evidence that men purchase more eco apples, all else equal. (The one-sided p-value is $0.4298/2=0.215$.)

> [!warning] Trap
> The R p-value ($0.4298$) is for a **two-sided** test. For $H_1:\beta_7>0$ you either halve it or compare $t$ with the **one-sided** critical value $1.65$, not $1.96$.

---

## Q5 — Prediction from model [3] [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

**Model [3] output (`model.3`)**:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 0.4836486 | 0.2987585 | 1.619 | 0.1063 |
| ln.P.eco | -0.4753100 | 0.2072871 | -2.293 | 0.0224 |
| ln.P.reg | 0.3636965 | 0.2148468 | 1.693 | 0.0913 |
| age | 0.0044611 | 0.0025165 | 1.773 | 0.0770 |
| educ | -0.0134439 | 0.0165842 | -0.811 | 0.4180 |
| income | 0.0005289 | 0.0009856 | 0.537 | 0.5918 |
| hh.total | 0.0395334 | 0.0245383 | 1.611 | 0.1079 |

Residual SE 0.7093 on 405 df; $R^2=0.02533$; $F=1.754$ on 6 and 405 df.

> [!success] Answer
> Predicted $\ln Q_{eco}=0.826$, so the predicted quantity is $e^{0.826}\approx \mathbf{2.28}$ lbs.

> [!example] Plug in
> $\ln P_{eco}=2$, $\ln P_{reg}=3$, age 40, educ 12, **income 50** (income is in thousands of USD, so $50{,}000$ USD is the number $50$), hh.total 4:
> $\widehat{\ln Q}=0.4836486-0.47531(2)+0.3636965(3)+0.0044611(40)-0.0134439(12)+0.0005289(50)+0.0395334(4)$
> $=0.48365-0.95062+1.09109+0.17844-0.16133+0.02645+0.15813=0.82581$
> $\hat Q=e^{0.82581}=2.28$ lbs.

> [!warning] Traps flagged by the hint "read the variable descriptions"
> 1. **Income units:** the variable is in thousands, so use $50$, not $50{,}000$ (using $50{,}000$ would give an absurd $\ln Q\approx 27$).
> 2. **The prediction is for $\ln Q$**, not $Q$. The "predicted quantity" needs **exponentiating**. (Strictly, $e^{\widehat{\ln Q}}$ understates the mean of $Q$ because of the log retransformation; the exam does not ask for the correction.)
> 3. $\ln P$ values (2 and 3) are **already logs**, so don't log them again.

---

## Q6 — Perfect multicollinearity in model [4] [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

Model [4] includes `hh.total` **and** the four age-band counts `hh.0.4`, `hh.5.17`, `hh.18.64`, `hh.65.plus`.

> [!success] Answer
> The four age-band counts add up exactly to the household size:
> $hh.total = hh.0.4+hh.5.17+hh.18.64+hh.65.plus$ for **every** household, so one regressor is an exact linear combination of the others. **Fix:** drop one of them (for example `hh.total`, or one age band, which then becomes the omitted/reference band).

Every household member falls in exactly one age band (0-4, 5-17, 18-64, 65+), so the bands partition the household. This is [[Perfect Multicollinearity]]: the regressor matrix has less than full column rank, assumption "no perfect collinearity" fails, $X'X$ cannot be inverted and **OLS cannot compute unique coefficients** (R would return `NA` for one of them). This is a cousin of the [[Dummy Variable Trap]], with counts instead of dummies.

> [!tip] Fix options and what they mean
> - **Drop `hh.total`** (keep the four age counts): the information is all still there since total = sum of bands; each coefficient is then the effect of adding one more person **of that age band**.
> - **Drop one age band** (e.g. `hh.18.64`), keep `hh.total`: each remaining band coefficient is the effect of swapping an adult aged 18-64 for a person of that band, holding household size fixed.

---

## Q7 — Partial multicollinearity [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

Model [5] replaces the counts with four **overlapping dummies** `has.0.4`, `has.5.17`, `has.18.64`, `has.65.plus` (1 if the household has at least one member in that band). These are not mutually exclusive, so there is no exact collinearity. The scan labels the coefficient "$\hat\beta_B$", which I read as $\hat\beta_8$ (`has.18.64`); the argument holds for any coefficient.

**Correlation matrix (`cor(...)`)**:

| | age | has.0.4 | has.5.17 | has.18.64 | has.65.plus |
|---|---|---|---|---|---|
| age | 1.0000 | -0.3535 | -0.1962 | -0.6492 | 0.6505 |
| has.0.4 | -0.3535 | 1.0000 | 0.1360 | 0.1755 | -0.1831 |
| has.5.17 | -0.1962 | 0.1360 | 1.0000 | 0.2329 | -0.2002 |
| has.18.64 | -0.6492 | 0.1755 | 0.2329 | 1.0000 | -0.7843 |
| has.65.plus | 0.6505 | -0.1831 | -0.2002 | -0.7843 | 1.0000 |

> [!success] Answer
> **(iv) cannot say / none of the above.**

**Why:** the strong correlations (for example $-0.784$ between `has.18.64` and `has.65.plus`, and $\pm0.65$ with `age`) show **partial** multicollinearity. Per [[Lec_08-Goodness of Fit & Multicollinearity]] and [[Lec_13-Exam Review]] (section 2.1), partial multicollinearity leaves the assumptions intact (the regressors are not exactly collinear), so:

- **(i) wrong:** $\hat\beta$ is still **unbiased**. Bias needs $E[u\mid X]\ne0$ (an omitted variable or similar), not correlated regressors.
- **(ii) wrong:** OLS is still **BLUE** (Gauss-Markov holds), i.e. still the efficient linear unbiased estimator. What partial collinearity does is **inflate the variance** $\text{Var}(\hat\beta_j)=\dfrac{\sigma^2}{(1-R_j^2)\sum(x_{ji}-\bar x_j)^2}$, since $R_j^2$ is high; that is large variance, not a loss of efficiency relative to alternatives.
- **(iii) wrong:** the standard error is **correctly large**, not biased downward. If anything, the SE is high; the formula already accounts for the collinearity.

So none of (i) to (iii) is true: the right statement would be "the variance (and SE) of $\hat\beta_8$ is **large** but unbiased and correctly estimated".

> [!question] Judgement call
> The exam writer may regard (ii) as the intended "cannot say" trap. Partial collinearity inflates variance, but "not efficient" is false because OLS remains best linear unbiased. I keep (iv).

---

## Q8 — F-test for the four age dummies in model [5] [8 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

Model [5]: $\ln Q_{eco}=\beta_0+\beta_1\ln P_{eco}+\beta_2\ln P_{reg}+\beta_3 age+\beta_4 educ+\beta_5 income+\beta_6 has.0.4+\beta_7 has.5.17+\beta_8 has.18.64+\beta_9 has.65.plus+u$.

### A. Hypotheses and $q$

> [!success] Answer
> $H_0:\beta_6=\beta_7=\beta_8=\beta_9=0$ (none of the four dummies matters) vs $H_1$: at least one $\ne0$. **$q=4$ restrictions.**

### B. Restricted model

> [!success] Answer
> $\ln Q_{eco}=\beta_0+\beta_1\ln P_{eco}+\beta_2\ln P_{reg}+\beta_3 age+\beta_4 educ+\beta_5 income+u$ (the model without the four dummies).

### C. Test statistic

> [!success] Answer
> $F=\dfrac{(206.5-202)/4}{202/402}=\mathbf{2.24}$.

> [!example] Working
> $F=\dfrac{(RSS_R-RSS_{UR})/q}{RSS_{UR}/(N-M)}=\dfrac{4.5/4}{202/402}=\dfrac{1.125}{0.50249}=2.239$

### D. Conclusion

> [!success] Answer
> **Fail to reject** $H_0$ at 5%: $F=2.24<F_{crit}(4,402)\approx2.39$ (the table value for $F_{4,\infty}$ is about 2.37; $F_{4,400}\approx2.39$).

The four dummies are **not jointly significant**, so the data give no support for keeping them. This is the five-step F-test of [[Lec_13-Exam Review]] (section 1.7); see [[F-test]].

---

# Part II — $Y$ on $W$, $X$, $Z$ [53 pts]

**Variables:** $Y$ outcome; $X\in[-2,2]$; $X.sq=X^2$; $W\in[0,10]$; $Z$ dummy (1 if in category $Z$); $W.Z=W\cdot Z$.

**Model [A] (`model.A`)**, $Y=\beta_0+\beta_1W+\beta_2X$:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 41.275 | 6.746 | 6.118 | 1.48e-08 |
| W | 5.788 | 1.219 | 4.748 | 6.23e-06 |
| X | -12.251 | 2.887 | **(blacked out)** | (blacked out) |

Residual SE 36.99 on **110 df**; $R^2=0.2642$, adj. $R^2=0.2508$; $F=19.75$ on 2 and 110.

## Q9 — Reading a t-table [10 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

### A. Number of observations [2 pts]

> [!success] Answer
> $N=110+3=\mathbf{113}$.

Residual df $=N-M$ with $M=3$ parameters ($\beta_0,\beta_1,\beta_2$). Cross-check: model [B] has 109 df and 4 parameters, also $113$.

### B. Significance test of $\beta_2$ [3 pts]

> [!success] Answer
> $H_0:\beta_2=0$. $t=\dfrac{-12.251}{2.887}=\mathbf{-4.24}$. $|t|=4.24>1.98$ (two-sided, 110 df): **Reject** $H_0$ at 5%.

The scan blacked out this row; the other rows show that R's $t$ is just estimate/SE, so it is rebuilt here. $X$ is significantly related to $Y$.

### C. Test of $H_0:\beta_2=-8$ [3 pts]

> [!success] Answer
> $t=\dfrac{\hat\beta_2-(-8)}{SE}=\dfrac{-12.251+8}{2.887}=\mathbf{-1.47}$. $|t|=1.47<1.98$: **Fail to reject** at 5%.

Test against a non-zero value: subtract the **hypothesised** value, not zero. R's printed $t$ and $p$ only test $H_0:\beta=0$. Critical value $t_{0.025,110}\approx1.98$ (table: 1.98 at 110 or 1.984 at 100).

### D. p-value for $H_0:\beta_2=-12.251$ [2 pts]

> [!success] Answer
> $t=\dfrac{-12.251-(-12.251)}{2.887}=0$, so the p-value is **1**.

The null equals the estimate, so the estimate sits exactly at the centre of the $t$ distribution: $P(|T|\ge0)=1$. (The hint "calculate the $t$-statistic first" gives this away.)

---

## Q10 — Model [B]: significance and R² [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

![[PP06_q10_source_scatter_X_vs_Y.png|520]]

The plot of $Y$ against $X$ from the paper (real data, an image of the source) shows a clear **U-shape**, which motivates adding $X.sq$.

**Model [B] output (`model.B`)**, $Y=\beta_0+\beta_1W+\beta_2X+\beta_3X.sq$:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 8.2912 | 6.8938 | 1.203 | 0.231700 |
| W | 6.9598 | 0.9936 | 7.005 | 2.14e-10 |
| X | -8.4568 | 2.3765 | -3.558 | 0.000554 |
| X.sq | 18.7661 | 2.4130 | 7.777 | 4.48e-12 |

Residual SE 29.8 on 109 df; $R^2=0.5268$, adj. $R^2=0.5138$; $F=40.45$ on 3 and 109 df, p < 2.2e-16.

### A. Null hypothesis of the F-statistic [2 pts]

> [!success] Answer
> $H_0:\beta_1=\beta_2=\beta_3=0$ (all slope coefficients are zero; the model has no explanatory power). $H_1$: at least one slope $\ne0$. The intercept is **not** included.

### B. Percentage of variance explained [3 pts]

> [!success] Answer
> $R^2=0.5268$, so **52.7%** of the variance of $Y$ is explained by model [B].

Use the multiple $R^2$, not the adjusted one (adjusted $R^2=0.5138$ penalises extra regressors and is not "percent of variance explained"). See [[R-squared]] and [[Lec_08-Goodness of Fit & Multicollinearity]].

---

## Q11 — The value of X that minimises Y [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> $X^*=-\dfrac{\hat\beta_2}{2\hat\beta_3}=\dfrac{8.4568}{2(18.7661)}=\mathbf{0.225}$.

> [!example] Working
> Holding $W$ fixed, $\dfrac{\partial Y}{\partial X}=\hat\beta_2+2\hat\beta_3X=-8.4568+37.5322X=0\Rightarrow X^*=0.2253$.
> Second derivative $2\hat\beta_3=37.53>0$, so this is a **minimum** (U-shape), and $0.225$ lies inside the observed range $[-2,2]$.

![[PP06_q11_quadratic_minimum.png|520]]

Theory diagram built from the model [B] coefficients: the X-part of the fitted $Y$ ($\hat\beta_2X+\hat\beta_3X^2$) is a U-shape with its minimum at $X^*=0.225$. See [[Quadratic Model]] and [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]].

> [!tip] Intuition
> The effect of $X$ is not constant: it is negative for $X<0.225$ and positive after, so it does not make sense to talk of "the" marginal effect of $X$ (it depends on the level of $X$).

---

## Q12 — Model [C]: adding the dummy Z [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

**Model [C] output (`model.C`)**, $Y=\beta_0+\beta_1W+\beta_2X+\beta_3X.sq+\beta_4Z$:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | -14.4700 | 5.4788 | -2.641 | 0.00949 |
| W | 7.5958 | 0.7214 | 10.530 | <2e-16 |
| X | -8.4830 | 1.7187 | -4.936 | 2.92e-06 |
| X.sq | 17.1524 | 1.7525 | 9.787 | <2e-16 |
| Z | 41.1558 | 4.1073 | 10.020 | <2e-16 |

Residual SE 21.55 on 108 df; $R^2=0.7548$, adj. $R^2=0.7457$; $F=83.1$ on 4 and 108.

### A. Intercept for observations not in Z [2 pts]

> [!success] Answer
> $\hat\beta_0=\mathbf{-14.47}$.

With $Z=0$ the dummy term vanishes: the intercept is $\hat\beta_0$ (the base category, see [[Base Category]]).

### B. Intercept for observations in Z [2 pts]

> [!success] Answer
> $\hat\beta_0+\hat\beta_4=-14.47+41.1558=\mathbf{26.69}$ (26.686).

### C. Marginal effect of W [2 pts]

> [!success] Answer
> $\hat\beta_1=\mathbf{7.5958}$ for **both** groups.

$Z$ enters only as an intercept shift, so the two groups share the same slope in $W$: one more unit of $W$ raises $Y$ by about $7.60$ regardless of $Z$ (parallel lines; see the left panel of the figure under Q14 and [[Lec_10-Dummy Variables]]).

---

## Q13 — Why the intercept becomes significant in [C] [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> Model [B] **omits $Z$**, which has a large effect (+41.2 on average) and shifts the level of $Y$. The intercept in [B] is not the same parameter as in [C], and the omitted $Z$ both distorts the estimate and inflates its standard error.

Three things differ between the two intercepts:

1. **Different meaning.** In [C], $\beta_0$ is the intercept for the **non-$Z$ group** ($-14.47$). In [B] it is a blend across both groups, a single common intercept for all observations, pulled up towards the $Z$ group's level, so its estimate is $8.29$ instead of $-14.47$.
2. **Omitted-variable bias.** $Z$ strongly affects $Y$ ($\hat\beta_4=41.2$, $t=10$) and is probably correlated with $W$ and $X$, so omitting it biases the included coefficients and the intercept ($\hat\beta_0$ shifts from $-14.47$ to $8.29$; $\hat\beta_1$ from $7.60$ to $6.96$).
3. **Bigger noise.** The omitted $Z$ goes into the error term, raising the residual SE from $21.55$ (model [C]) to $29.8$ (model [B]) and with it every standard error: the intercept's SE is $6.89$ in [B] versus $5.48$ in [C]. With a **small estimate and a large SE**, the $t$ is $1.20$ in [B] ($p=0.23$), but with the corrected estimate and smaller SE it is $-2.64$ ($p=0.009$) in [C].

> [!tip] Intuition
> In [B] the two groups' very different levels are being averaged into one intercept near zero, and the group differences get dumped in the error. Letting each group have its own intercept (with $Z$) removes that noise and reveals that the baseline group sits clearly below zero.

---

## Q14 — Model [D]: interaction between Z and W [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

**Model [D] output (`model.D`)**, $Y=\beta_0+\beta_1W+\beta_2X+\beta_3X.sq+\beta_4Z+\beta_5W\cdot Z$:

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 5.871 | 6.644 | 0.884 | 0.37884 |
| W | 3.622 | 1.077 | 3.362 | 0.00107 |
| X | -9.841 | 1.600 | -6.149 | 1.37e-08 |
| X.sq | 16.614 | 1.609 | 10.327 | <2e-16 |
| Z | 10.638 | 7.540 | 1.411 | 0.16121 |
| W.Z | 6.394 | 1.369 | 4.670 | 8.80e-06 |

Residual SE 19.73 on **107 df**; $R^2=0.7963$, adj. $R^2=0.7868$; $F=83.65$ on 5 and 107.

### A. Not in category Z [3 pts]

> [!success] Answer
> $\dfrac{\partial Y}{\partial W}=\hat\beta_1=\mathbf{3.622}$.

### B. In category Z [3 pts]

> [!success] Answer
> $\dfrac{\partial Y}{\partial W}=\hat\beta_1+\hat\beta_5=3.622+6.394=\mathbf{10.016}$.

Differentiating $Y$ with respect to $W$ gives $\beta_1+\beta_5Z$: set $Z=0$ or $Z=1$. The interaction $\beta_5$ is the **extra effect of $W$** for the $Z$ group ($t=4.67$, significant), so the slope of $Y$ in $W$ is about three times larger in category $Z$. See [[Interaction Term]] and [[Lec_11-Interaction Terms]].

![[PP06_q14_dummy_vs_interaction.png|640]]

Theory diagram from the printed coefficients (X terms set to 0). **Model [C]**: $Z$ only shifts the intercept, so the lines are parallel. **Model [D]**: the intercepts (5.871 and 5.871+10.638) and the slopes (3.622 and 3.622+6.394) both differ.

---

## Q15 — 90% confidence interval for $\beta_4$ in model [D] [5 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **YES**, the 90% confidence interval of $\beta_4$ contains 0. $CI=10.638\pm1.66\times7.540=(-1.87,\ 23.15)$.

> [!example] Working
> $\hat\beta_4=10.638$, $SE=7.540$, 107 df. For a 90% two-sided interval the critical value is $t_{0.05,107}\approx1.66$ (1.659 exactly; table 1.66 at 100 df).
> Margin $=1.659\times7.540=12.51$, so the CI is $[10.638-12.51,\ 10.638+12.51]=[-1.87,\ 23.15]$, which contains zero.

**Cross-check:** the printed $p=0.161>0.10$, so $\beta_4$ is **not significant at the 10% level**, which is equivalent to the 90% CI containing 0. See [[Confidence Interval]].

---

## Q16 — Chow test on model [B] [11 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

Test whether **all** parameters of model [B] ($\beta_0,\beta_1,\beta_2,\beta_3$) are the same for $Z=1$ and $Z=0$. See [[Chow Test]] and [[Lec_13-Exam Review]] (section 3.6, version 2: separate regressions).

### A. R code for the separate regressions [3 pts]

> [!success] Answer
> ```r
> model.Z1 <- lm(Y ~ W + X + X.sq, data = sample.data[sample.data$Z == 1, ])
> model.Z0 <- lm(Y ~ W + X + X.sq, data = sample.data[sample.data$Z == 0, ])
> ```
> (equivalently `subset(sample.data, Z == 1)` or `lm(..., data = sample.data, subset = (Z == 1))`)

Each regression uses model [B]'s specification, estimated on one group only. The unrestricted model is the pair of regressions; the restricted model is the pooled model [B].

### B. F-statistic [6 pts]

> [!success] Answer
> $F=\dfrac{(968-(169+211))/4}{(169+211)/(113-2\cdot4)}=\dfrac{588/4}{380/105}=\mathbf{40.6}$.

> [!example] Working
> - $RSS_R=968$ (pooled model [B]).
> - $RSS_{UR}=RSS_{Z=1}+RSS_{Z=0}=169+211=380$.
> - $q=4$: the four parameters $\beta_0,\ldots,\beta_3$ are restricted to be equal across groups.
> - $N-M=113-2\times4=105$: 113 observations (Q9A) minus 8 parameters (4 for each group).
> - $F=\dfrac{(968-380)/4}{380/105}=\dfrac{147}{3.619}=40.62$.

### C. Conclusion [2 pts]

> [!success] Answer
> **Reject** $H_0$ at 5%: $F=40.6>F_{crit}(4,105)\approx2.46$ (table: about 2.46-2.47).

The regression coefficients differ between category $Z$ and the rest: the two groups should not be pooled into one quadratic. This is consistent with the significant $Z$ and $W\cdot Z$ terms found above.

---

# Recap table

| Q | Tool | Answer (AI-solved) |
|---|---|---|
| 1 | Log-log elasticities | own $-0.447$ (inelastic, significant); cross $+0.344$ (substitutes, not significant) |
| 2 | Unit change in logs | $\hat\beta_1$ unchanged; only the intercept shifts (new $\approx-0.078$) |
| 3 | OVB formula backwards | $\text{Cov}=0.0682$ |
| 4 | One-sided t-test, 404 df | $t=0.790<1.65$: fail to reject |
| 5 | Prediction | $\widehat{\ln Q}=0.826$, $\hat Q\approx2.28$ lbs (income = 50) |
| 6 | Perfect multicollinearity | counts sum to hh.total; drop one |
| 7 | Partial multicollinearity | (iv): unbiased, still BLUE, variance large but correctly estimated |
| 8 | F-test, $q=4$ | $F=2.24<2.39$: fail to reject |
| 9 | t-tests | $N=113$; $t=-4.24$ reject; $t=-1.47$ fail to reject; p-value 1 |
| 10 | Model F, $R^2$ | $H_0:\beta_1=\beta_2=\beta_3=0$; 52.7% |
| 11 | Quadratic minimum | $X^*=0.225$ |
| 12 | Dummy | intercepts $-14.47$ and $26.69$; slope $7.5958$ |
| 13 | OVB / noise | omitted $Z$ changes the intercept's meaning and inflates its SE |
| 14 | Interaction | $W$ effect $3.622$ (not Z), $10.016$ (Z) |
| 15 | 90% CI | $(-1.87,\ 23.15)$: contains 0 |
| 16 | Chow test | R code for two subset fits; $F=40.6$, reject |

---

## Related Notes

- [[Intro Econometrics]] (hub)
- [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_13-Exam Review]]
- [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]], [[Assign_02-Functional Form & the Money-Supply Log-Log Model]], [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]
