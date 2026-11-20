---
title: Nonlinear Models with OLS
week: 3
semester: 1
year: 2
academic_year: "2025-26"
course: "Intro Econometrics"
instructor: "Dr. Aluma Dembo"
lecture: "Lecture 03 — Nonlinear Models with OLS (logs) and a first look at multiple regression"
tags:
  - intro-econometrics
  - log-models
  - functional-form
  - elasticity
  - marginal-effect
  - multiple-regression
  - OLS
aliases:
  - Lecture 3 Intro Metrics
  - Log-level and log-log models
subject: intro-econometrics
in_scope: true
---

# Nonlinear Models with OLS

> Part of: [[Intro Econometrics]] | Key concepts: [[Functional Form]], [[Log-Level Model]], [[Log-Log Model]], [[Elasticity]], [[Marginal Effect]], [[Simple Linear Regression]], [[Residuals]], [[Prediction]], [[Linear in Parameters]], [[Rate of Change]]

> [!info] Where this fits
> Weeks 1 and 2 set up causality and the mechanics of OLS. This lecture's one big idea: **OLS can fit curved relationships**, as long as the model is *linear in the parameters*. Take logs, and a nonlinear story becomes a linear regression. The second half previews the multiple regression model. The full-course view of this material is in [[Lec_13-Exam Review]]; applied practice is in [[Assign_02-Functional Form & the Money-Supply Log-Log Model]] and [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]] ([[Assign_02-Solutions (Answer Key)]], [[Assign_03-Solutions (Answer Key)]]).

---

## 0. Recap of last week (slides 3 to 5, 9 to 10)

- **PRF** (population): $y_i=\beta_0+\beta_1x_i+u_i$. $\beta$'s and $u$ are unobserved; $y,x$ observed. $u$ is everything else affecting $y$.
- **SRF** (sample): $y_i=\hat\beta_0+\hat\beta_1x_i+\hat u_i$; prediction $\hat y_i=\hat\beta_0+\hat\beta_1x_i$.
- OLS minimises $\sum\hat u_i^2$. First-order conditions: $\sum\hat u_i=0$ and $\sum x_i\hat u_i=0$.
- Estimators: $\hat\beta_0=\bar y-\hat\beta_1\bar x$ and

$$
\hat\beta_1=\frac{\widehat{Cov}(y,x)}{\widehat{Var}(x)}=\frac{s_{xy}}{s_{xx}}
$$

> [!example] Activity 3 part 1 (slides 9 to 10)
> Given $var(schooly)=11.44$, $var(hourly)=2164.267$, $cov(schooly,hourly)=54.819$:
>
> $$\hat\beta_1=\frac{54.819}{11.44}=4.79$$
>
> Only the covariance and the variance of $x$ matter; $var(hourly)$ is a distractor.

---

## 1. Running example: the wage model

Goal: estimate the effect of education on wage, $hourly=\beta_0+\beta_1\,schooly+u$. Data: **Israel, 2014 household survey** (slides 6 to 8). Summary statistics on the slide: hourly wage has median 40.218, mean 53.661, max 976.115 (6,228 missing); years of schooling has median 13, mean 13.82, max 61, n = 16,499. The wage distribution is right-skewed.

### Level-level fit and why it fails (slides 13 to 18)

Level-level model: $y=\beta_0+\beta_1x+u$, so $\frac{dy}{dx}=\beta_1$. This is the **marginal effect** and it is *constant*: the model assumes a linear relation.

Estimated line:

$$
\widehat{hourly}=-29.81+5.939\cdot schooly
$$

| Years of schooling | Predicted hourly wage |
|---|---|
| 15 | $-29.81+5.939\cdot15=59.3$ |
| 16 | $-29.81+5.939\cdot16=65.2$ |
| 0 | $-29.81$ (negative wage!) |

![[Lec03_data_linear_fit_wage_schooling.png]]
*Real data from slide 15: the straight line sits below most points at high schooling and goes below zero at low schooling.*

Problems the slide raises:

1. Every extra year adds a flat 5.9 NIS, but the data suggest the gain **grows** with education.
2. The line predicts a **negative wage** at zero schooling, which is impossible.

Slide 17 also recalls how to get $\hat y$ and $\hat u=y-\hat y$ in R: `fitted(myreg)` and `resid(myreg)`. Each residual is the observed wage minus the line's prediction (the highlighted point is an observation above the line, residual about 42.6).

### The fix: an exponential relation (slides 19 to 21)

Wages are never negative and rise convexly with schooling, so model

$$
hourly=\exp(\beta_0+\beta_1\,schooly+u)
$$

Take natural logs of both sides, using $y=e^x\Rightarrow\ln y=x$:

$$
\ln(hourly)=\beta_0+\beta_1\,schooly+u
$$

> [!tip] Key idea
> This is **linear in its parameters** $(\beta_0,\beta_1)$, so OLS applies directly. The relation between $hourly$ and $schooly$ is nonlinear, but the *regression* is linear in the transformed variable. This is the **log-level** model. As a bonus, predicted wage $=\exp(\hat\beta_0+\dots)$ is always positive, so the negative-wage problem disappears.

![[Lec03_linear_vs_exponential_wage.png]]
*Illustration drawn here from the slide coefficients (not slide data): the exponential curve stays positive and bends upward, the straight line does not.*

---

## 2. The log-level model

$$
\ln y=\beta_0+\beta_1x+u
$$

**Interpretation:** the slope is the **rate of change**, i.e. the proportional change in $y$ per one-unit change in $x$. A one-unit rise in $x$ raises $y$ by about $100\cdot\beta_1$ percent. Here it measures the *returns to a year of education*.

In R the default base of `log()` is $e$ (natural log). Activity 3 part 2 asks for the code to estimate it; with a data frame `mydata` the answer is along the lines of `lm(log(hourly) ~ schooly, data = mydata)` (the slides use a pre-computed `ln_hourly` column in the plot code).

> [!example] Slide 24: estimated $\ln(hourly)=2.0336+0.116\cdot schooly$
>
> | Schooling | $\ln(hourly)$ (slide, rounded) | $hourly=\exp(\cdot)$ |
> |---|---|---|
> | 12 | 3.4 | 29.96 |
> | 13 | 3.5 | 33.12 |
> | 14 | 3.7 | 40.45 |
>
> The NIS gap between rows changes, but the **percent change is constant at 11.6%**: one more year of school adds 11.6% to wage.

> [!warning] Rounding on the slide
> The slide rounds the log to one decimal before exponentiating. Unrounded, $2.0336+0.116\cdot12=3.4256$, so the 12-year prediction is $\exp(3.4256)\approx30.8$, not 29.96 (and 13 years gives about 34.5, 14 years about 38.8). Also, $0.116$ in logs is an *approximation*: the exact percent change is $e^{0.116}-1\approx12.3\%$. For the exam, follow the rule "$100\cdot\beta_1$ percent".

**Fit:** the log-level model fits the data better than level-level (slide 25).

![[Lec03_data_level_vs_loglevel.png]]
*Real data from slide 25. Left: wage in levels with the OLS line, a poor fit. Right: log wage against schooling, where the line tracks the cloud.*

**The intercept (slide 26):** with zero schooling the predicted wage is $\exp(\hat\beta_0)$, which is always positive. The slide also notes the model assumes a **constant** rate of change, while the **marginal effect** in NIS ($\beta_1\cdot y$) increases with education.

---

## 3. The log-log model and elasticity

$$
\ln y=\beta_0+\beta_1\ln x+u
$$

Both sides in logs. The slope is the **elasticity** of $y$ with respect to $x$:

$$
\beta_1=\frac{\Delta y}{\Delta x}\cdot\frac{x}{y}=\varepsilon_{y,x}
$$

The log-log model assumes a **constant elasticity**, which is why it is the standard model for demand: $\ln quantity=\beta_0+\beta_1\ln price+u$.

> [!info] Demand curves (slide 29)
> Linear demand $P=8-Q$ has elasticity that **changes along the curve**: $-\infty$ at the top (at $Q=0$), $-1$ at the midpoint, $0$ at the bottom. Constant-elasticity demand $P=7Q^{-2/3}$ (a hyperbola-type curve) has the same elasticity everywhere; the slide labels it 1.5, i.e. $|\varepsilon|=1/(2/3)$.

![[Lec03_demand_elasticity.png]]
*Theory diagram redrawn from slide 29.*

> [!note] Reconstructed from the slides
> Why $P=7Q^{-2/3}$ gives elasticity 1.5: invert to $Q=(P/7)^{-3/2}$, so $\ln Q=\text{const}-\tfrac32\ln P$. The log-log slope is $-3/2$, i.e. $|\varepsilon|=1.5$. The slide only labels the number.

### Wage example (slides 30 to 31)

$\ln hourly=\beta_0+\beta_1\ln schooly+u$ gives, on the slide, intercept $-0.2932$ and slope $1.5093$.

- $1.509$ is the **wage elasticity of education**: a 1% rise in schooling raises wage by about 1.5%. Since $|\varepsilon|>1$, wage is "elastic" with respect to education.
- But the slide stresses that **this model does not fit the data well**.

![[Lec03_data_loglog_fit.png]]
*Real data from slide 31: log wage against log schooling. The red line on the slide is very flat, which does not look like a slope of 1.5; the printed coefficients and the plotted line may come from different samples. Treat the "poor fit" message as the point.*

---

## 4. Which model should you use? (slides 33 to 34)

Technically any of the models can be estimated. Choose by:

1. **Fit** to the data (compare the plots), and
2. **Theory and past research**: wage models conventionally use log-level, demand models log-log.

Selection depends on the variables, **not** on which economic moment you want to compute (slide 43).

| Model | Equation | Slope reads as | Statement |
|---|---|---|---|
| **Level-level** | $Y=\beta_0+\beta_1X+u$ | Marginal effect | $X\uparrow1$ unit $\Rightarrow$ $Y\uparrow\beta_1$ units |
| **Log-level** | $\ln Y=\beta_0+\beta_1X+u$ | Rate of change | $X\uparrow1$ unit $\Rightarrow$ $Y\uparrow100\beta_1$ percent |
| **Log-log** | $\ln Y=\beta_0+\beta_1\ln X+u$ | Elasticity | $X\uparrow1$ percent $\Rightarrow$ $Y\uparrow\beta_1$ percent (no $\times100$) |
| **Level-log** | $Y=\beta_0+\beta_1\ln X+u$ | Units per percent | a percent change in $X$ changes $Y$ by a number of units (about $\beta_1/100$) |

> [!tip] Rule of thumb
> The variable that carries the log is measured in **percentages**. The level-log "$\beta_1/100$" step is not spelled out on the slide beyond "units of $Y$ per percentage change of $X$"; the full table is in [[Lec_13-Exam Review]].

### Limits of OLS (slides 35 to 36)

- OLS needs the model to be **linear in the parameters** after transforming variables. Log-log is fine: minimise $\sum(\ln y_i-\beta_0-\beta_1\ln x_i)^2$, giving $\hat\beta_1=\widehat{Cov}(\ln x,\ln y)/\widehat{Var}(\ln x)$ and $\hat\beta_0=\overline{\ln y}-\hat\beta_1\overline{\ln x}$. The same FOCs hold: $\sum\hat u_i=0$ and $\sum\ln x_i\,\hat u_i=0$.
- If no transformation makes the model linear in its parameters (the slide's example is a form with the parameter inside a nonlinear expression), OLS fails; you need **NLLS** or **GMM** instead.

---

## 5. Economic moments for every model (slides 37 to 42)

Three ways to describe the effect of $x$ on $y$:

$$
\text{Marginal effect}=\frac{\Delta y}{\Delta x},\qquad
\text{Rate of change}=\frac{\Delta y}{\Delta x}\cdot\frac1y,\qquad
\text{Elasticity}=\frac{\Delta y}{\Delta x}\cdot\frac{x}{y}
$$

Each model's slope $\beta_1$ equals one of these; the others follow by multiplying by $y$, $1/y$, $x$ or $x/y$.

| Moment | Level-level | Log-level | Log-log |
|---|---|---|---|
| Slope is | $\frac{\Delta y}{\Delta x}=\beta_1$ | $\frac{\Delta y}{\Delta x}\cdot\frac1y=\beta_1$ | $\frac{\Delta y}{\Delta x}\cdot\frac xy=\beta_1$ |
| **Marginal effect** | $\beta_1$ (constant) | $\beta_1\,y$ | $\beta_1\,\frac yx$ |
| **Rate of change** | $\beta_1\,\frac1y$ | $\beta_1$ (constant) | $\beta_1\,\frac1x$ |
| **Elasticity** | $\beta_1\,\frac xy$ | $\beta_1\,x$ | $\beta_1$ (constant) |

> [!example] Activity 3 part 3 (slides 41 to 42)
> Log-log: from $\beta_1=\frac{\Delta y}{\Delta x}\cdot\frac xy$, multiply by $y/x$ to get marginal effect $=\beta_1\frac yx$; multiply by $1/x$ to get rate of change $=\beta_1\frac1x$; elasticity $=\beta_1$.

- In the level-level model the marginal effect is constant but the rate of change and elasticity vary with $x$ and $y$. The elasticity is usually reported **at the sample means**: $\beta_1\,\bar x/\bar y$ (slide 39).
- In each model exactly one moment is constant, and that moment is the slope itself.

---

## 6. A first look at multiple regression (slides 44 to 52)

Usually one regressor is not enough. With $K$ explanatory variables:

$$
y_i=\beta_0+\beta_1x_{1i}+\beta_2x_{2i}+\dots+\beta_Kx_{Ki}+u_i
$$

- $\beta_0$: the effect on $y$ when all $x$ are fixed at zero (the constant).
- $\beta_k$: the effect of $x_k$ on $y$ **holding all other variables fixed**.
- OLS minimises $\sum\hat u_i^2$; the partial derivatives give $K+1$ first-order conditions: $\sum\hat u_i=0$ and $\sum x_{ki}\hat u_i=0$ for each $k$.
- Adding genuinely explanatory variables increases the **explained** part ($\hat y$) and reduces the **unexplained** part ($\hat u$).
- In R: `summary(lm(y ~ x1 + x2 + x3 + x4, mydata))`.

### Wage regression example (slides 50 to 52)

US data from 2002, subsample of 540 observations. Model (slide): $\ln wage=\beta_0+\beta_1S+\beta_2Exp+\beta_3IQtest+\beta_4Age+u$; the R call on the slide also includes `hours`.

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 1.385217 | 0.4218969 | 3.28 | 0.001 |
| s (schooling) | 0.0981245 | 0.0108345 | 9.06 | 0.000 |
| exp | 0.0402309 | 0.0056855 | 7.08 | 0.000 |
| IQ_test | 0.0112204 | 0.0029018 | 3.87 | 0.000 |
| age | -0.0336168 | 0.0101734 | -3.30 | 0.001 |
| hours | 0.0041505 | 0.0024687 | 1.68 | 0.093 |

Residual standard error 0.49889 on 534 df; Multiple $R^2=0.3011$, Adjusted $R^2=0.2946$; F-statistic 46.02 on 5 and 534 df, p-value $<2.2\times10^{-16}$.

> [!example] Activity 3 part 4: interpretation (not worked on the slides)
> The dependent variable is a log, so each slope is a rate of change, holding the other regressors fixed.
> - **Schooling:** one more year raises wage by about **9.8%** (significant, $t=9.06$).
> - **Experience:** one more year raises wage by about **4.0%**.
> - **IQ test:** one more point raises wage by about **1.1%**.
> - **Age:** one more year *lowers* wage by about **3.4%** holding experience, schooling and the rest fixed. This is a "holding experience fixed" effect, not the raw age pattern.
> - **Hours:** about **0.4%** per extra hour, significant only at the 10% level ($p=0.093$).
> - **Fit:** the regressors explain about 30% of the variation in log wage.

---

## 7. Where the course goes next (slide 53)

- Lecture 1: causality and regression; Lecture 2: OLS notation and mechanics.
- Lecture 3 (today): nonlinear relations with OLS and a taste of multiple regression.
- Next: why OLS is the "best" estimator and under which assumptions (see [[Classical Assumptions]]), then confidence intervals ([[Confidence Interval]]) and hypothesis tests ([[Hypothesis Testing]], [[p-value]]).

---

## Summary

> [!summary] Takeaways
> - OLS needs linearity **in the parameters**, not in the variables: logs let it fit curves.
> - **Level-level:** slope = marginal effect (constant). **Log-level:** slope = rate of change ($\times100$ for percent). **Log-log:** slope = elasticity (constant).
> - Choose the model by fit and theory (wages: log-level; demand: log-log), not by the moment you want.
> - Every model has all three moments; only the slope's own moment is constant.
> - Log-level fixes the "negative wage" problem: $\exp(\cdot)>0$.
> - Multiple regression: each $\beta_k$ is a *ceteris paribus* effect; $K+1$ FOCs.

## Related notes

- Previous: [[Lec_02-Statistics Review & OLS Estimation]] — statistics review and the OLS first-order conditions
- Next: [[Lec_04-OLS Estimator Properties]] — unbiasedness, variance and the classical assumptions
- Hub: [[Intro Econometrics]]
