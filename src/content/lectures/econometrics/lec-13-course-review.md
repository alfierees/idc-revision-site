---
title: Course Review
week: 13
semester: 2
year: 2
academic_year: "2025-26"
course: Applied Econometrics
lecture: "Lecture 13 — Course Review"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - linear-probability-model
  - logit-model
  - probit-model
  - instrumental-variables
  - heckman-selection-model
  - fixed-effects
  - clustered-standard-errors
  - difference-in-differences
  - panel-data
  - time-series
aliases:
  - Course Review
  - Review Slides
  - Final Review
  - Exam Review
subject: econometrics
in_scope: true
---

# Course Review

> Part of: [[Econometrics]]
> **Lecture 13** — Applied Econometrics, Dr. Aluma Dembo
>
> 📄 Slides: [Lecture 13 deck (PDF)](/papers/econometrics/lecture-13-review.pdf)
> Previous: [[Lec_12-Course Summary (Late Fees at Daycare)]] | Next: end of course
> Key concepts: every block of the course; see [[_Econometrics Concepts]] and the closed-book sheet [[_Exam Formula Sheet (Lec 1-10)]]

---

## 🎯 What the lecturer says is (not) examinable

The course-overview slide that opens the review marks two items **"not on the exam"**:

> [!warning] Not on the exam (per the Lecture 13 slide)
> - **"Time series event studies"** ([[Lec_06-Simultaneous Equations & Time Series]] time-series part and [[Lec_07-Time Trends and Event Studies]])
> - **"Regression discontinuity design"** ([[Lec_09-Regression Discontinuity Design (RDD)]])
>
> *My reading:* the slide's single bullet "Time series event studies" covers the time-series and event-study material. The deck still contains review slides on it (lags, trends, seasonality, serial correlation, event studies) and on RDD, so they are summarised **for completeness** in the sections marked below. Simultaneous equations sit under the instrumental-variables block on the same slide, so I treat them as in scope.

| Block | In the exam? | Section |
|---|---|---|
| Binary outcomes (LPM, logit, probit) | Yes | 1 |
| Instrumental variables, simultaneous equations, sample selection | Yes | 2, 3, 4 |
| Time series (lags, trends, seasonality, serial correlation) | **Not on the exam** (see reading above) | 5 |
| Event studies | **Not on the exam** | 6 |
| Fixed effects and clustered SEs | Yes | 7 |
| Regression discontinuity | **Not on the exam** | 8 |
| Differences-in-differences | Yes | 9 |

---

## 🧱 Types of data

| Type | Notation | Idea | Example | Method that goes with it |
|---|---|---|---|---|
| **Cross section** | $i=1,\dots,N$ | sample of individuals at **one point in time** | grade distribution in Intro Metrics last semester | OLS |
| **Repeated cross sections** | $i_t=1,\dots,N;\ t=1,\dots,T$ | a **new** cross section sampled at each date | grades over the last 10 years of Intro Metrics | **diff-in-diff** |
| **Panel** | $i=1,\dots,N;\ t=1,\dots,T$ | the **same** units followed over time | this year's cohort each semester | **fixed effects** |
| **Time series** | $t=1,\dots,T$ | one unit's sequence over time | average class grade over 10 years | distributed lags, serial-correlation corrections |

---

## 1. Binary outcome models

The outcome is a dummy $y\in\{0,1\}$. Three models: **LPM**, **logit**, **probit** ([[Lec_02-Linear Probability Model (LPM)]], [[Lec_03-Logit & Probit Models]]).

### LPM

$$y = \beta_0+\beta_1x_1+\dots+\beta_kx_k+u,\qquad y\in\{0,1\}$$

$$\mathbb{P}(y=1\mid x)=p(x)=\beta_0+\beta_1x_1+\dots+\beta_kx_k$$

$\beta_j$ is the **change in the probability of success per one-unit change in $x_j$** (the marginal effect):

$$\beta_j=\frac{\partial\,\mathbb{P}(y=1\mid x)}{\partial x_j}$$

| Pros | Cons |
|---|---|
| Easy to estimate (OLS) | **Heteroskedasticity:** $\text{Var}(u)=p(x)\,(1-p(x))$ is not constant |
| Easy to interpret marginal effects | **Nonsense predictions:** $\hat y=\mathbb{P}(y=1\mid x)$ can lie outside $[0,1]$ |

### Logit and probit

$$\mathbb{P}(y=1\mid x)=G(x'\beta),\qquad x'\beta\equiv\beta_0+\beta_1x_1+\dots+\beta_kx_k$$

$G$ is bounded, $0<G(x'\beta)<1$, so predicted probabilities always make sense.

- **Logit:** $G(x'\beta)=\dfrac{\exp(x'\beta)}{1+\exp(x'\beta)}$
- **Probit:** $G(x'\beta)=\Phi(x'\beta)=\displaystyle\int_{-\infty}^{x'\beta}\varphi(v)\,dv$, with $\varphi(v)=(2\pi)^{-1/2}\exp(-v^2/2)$

**Marginal effect of a continuous $x_j$:**

$$\frac{\partial\,\mathbb{P}(y=1\mid x)}{\partial x_j}=\frac{\partial G(x'\beta)}{\partial x_j}=g(x'\beta)\cdot\beta_j,\qquad g(z)=\frac{dG}{dz}$$

- The **direction** of the effect always follows the **sign of $\beta_j$**.
- The **magnitude** depends on **all** the $x$'s and $\beta$'s.
- **Standard protocol:** evaluate at the sample average, $g(\hat\beta_0+\hat\beta_1\bar x_1+\dots+\hat\beta_k\bar x_k)\cdot\hat\beta_j$.

### Hypothesis testing with MLE

Logit/probit are nonlinear in the parameters, so they are estimated by **maximum likelihood**, not OLS. Test restrictions with the likelihood-ratio test (the slide calls it the "log-ratio test"):

$$LR=2\big(\log\mathcal{L}_{UR}-\log\mathcal{L}_{R}\big)\ \sim\ \chi^2(q)$$

$\mathcal{L}_{UR}$ is the likelihood of the unrestricted model, $\mathcal{L}_R$ of the restricted model, $q$ the number of restrictions. **If $LR$ exceeds the critical value, reject the null** and keep the unrestricted model. See [[_Econometrics Concepts#Likelihood Ratio Test|Likelihood Ratio Test]].

> [!tip] Which one to use?
> - **LPM:** when you are not worried about prediction.
> - **Logit/probit:** when you can justify a functional form for contextual reasons, or you want **accurate predictions**.

---

## 2. Instrumental variables

Goal: the causal effect of $x$ on $y$ when **$x$ is endogenous**, i.e. $\mathbb{E}[u\mid x]\neq0$ (equivalently $\text{Cov}(u,x)\neq0$), typically because an **omitted, unobservable variable** affects both $x$ and $y$.

An instrument $z$ must satisfy:

- **Relevance:** $\text{Cov}(x,z)\neq0$
- **Validity (exogeneity):** $\text{Cov}(u,z)=0$

> [!warning] Typo on the slide
> The slide prints validity as $\text{Cov}(u,z)\neq0$. That is a typo: a valid instrument must be **uncorrelated** with the error, $\text{Cov}(u,z)=0$ (see [[Lec_04-Instrumental Variables]]). I have written the correct condition above.

### 2SLS

Main model: $y_i=\beta_0+\beta_1x_i+u_i$, with $\text{Cov}(u_i,x_i)\neq0$.

1. **First stage:** estimate $x_i=\gamma z_i+\varepsilon_i$ and predict $\hat x_i=\hat\gamma z_i$.
2. **Second stage:** estimate $y_i=\beta_0+\beta_1\hat x_i+u_i$.

$\hat\beta_1$ from the second stage is the **causal effect** of $x$ on $y$ and is **consistent**.

**Practical matters**

- With **more than one instrument**, include **all** of them in the first stage.
- **Relevance is testable** through the first stage. With **weak instruments** (low correlation between $x$ and $z$) the estimate is **inflated**/unreliable.
- **Validity cannot be tested.** You must **argue** for it.

---

## 3. Simultaneous equations

$$y=\beta_0+\beta_1x+\beta_2z+u$$

In a simultaneous model $x$ and $y$ are **determined together** (e.g. $y=\log P$ and $x=\log Q$ in a market at equilibrium). Then $\text{Cov}(u,x)\neq0$, so **exogeneity fails** and OLS is invalid. If $z$ is exogenous it can be an **instrument for $x$**.

**Example (supply model):** $w$ = wages, $z$ = weather events that shift productivity.

- First stage: $\log Q=\gamma_0+\gamma_1z+\epsilon$
- Second stage: $\log P=\beta_0+\beta_1\widehat{\log Q}+\beta_2w+\nu$

Use the weather variable $z$ as an instrument for the quantity supplied. See [[Lec_06-Simultaneous Equations & Time Series]].

---

## 4. Sample selection

Model $y=x'\beta+u$, but **$y$ is observed only for part of the sample** (e.g. wage observed only if employed), while we do observe $x$ for everyone. With $s_i=1$ if observation $i$ is in the sample:

$$s_iy_i=s_ix_i'\beta+s_iu_i$$

| Selection | Condition | OLS on the selected sample |
|---|---|---|
| **Random** | $s$ independent of $x$ **and** $u$ | unbiased |
| **Exogenous** | $s$ depends on $x$ but not $u$ | unbiased |
| **Endogenous** | $s$ depends on $u$ | **biased** |

### Heckit (Heckman two-step)

Selection equation, with $z$ containing **all of $x$ plus at least one extra variable**:

$$s=\mathbb{1}[z'\gamma+v\ge0]$$

Assumptions: $\mathbb{E}[u\mid z]=0$, $\mathbb{E}[v\mid z]=0$, and $v$ is standard normal. Then (no need to derive it):

$$\mathbb{E}[y\mid z,s=1]=x'\beta+\rho\,\lambda(z'\gamma)$$

$u$ and $v$ are jointly normal, so $\mathbb{E}[u\mid v]=\rho v$. $\lambda(\cdot)$ is the **inverse Mills ratio** (a function of the normal CDF and PDF; **you don't need to memorise it**). Selection follows a **probit**: $\mathbb{P}(s=1\mid z)=\Phi(z'\gamma)$.

**Two steps**

1. On the **full dataset**, estimate the probit of $s$ on $z$ to get $\hat\gamma$; compute $\hat\lambda_i=\lambda(z_i'\hat\gamma)$ for each $i$ with $s_i=1$.
2. On the **selected sample** ($s=1$), run OLS of $y$ on $x$ **and** $\hat\lambda$. The resulting $\hat\beta$ is **consistent and normally distributed**.

Test for selection bias by testing the coefficient on $\hat\lambda$ ($H_0:\rho=0$).

> [!tip] When to worry / when to use Heckman
> - **Worry** about selection when theory says $s$ is correlated with $u$ (endogenous selection).
> - **Use Heckman** when you observe $y$ for only part of the sample, observe $x$ for the full sample, and have some $z$ that **explains selection but not the outcome** (the exclusion restriction).

See [[Lec_05-Sample Selection & Heckman Correction]] and the daycare worked example in [[Lec_12-Course Summary (Late Fees at Daycare)]].

**Datasets from lectures 1 to 6** (the slide's list, useful for recognising an exam setting): treatment effects (Andreoni & Miller 2002, dictator game); LPM (Andersen et al. 2011, ultimatum game in India); logit/probit (women's labour supply); IV (Cai, De Janvry & Sadoulet 2013, social networks and insurance uptake in rural China); sample selection (Mincer wage equation / returns to education); simultaneous equations (Graddy 1995, Fulton fish market supply and demand; the slide spells it "Grady").

---

## 5. Time-series data (not on the exam)

> [!info] Reviewed in the deck, flagged "not on the exam" on the overview slide
> Summarised here so nothing from the review deck is missing.

### OLS assumptions with time series

Static model $y_t=\beta_0+\beta_1x_{t1}+\dots+\beta_kx_{tk}+u_t$, $t=1,\dots,T$. Condition on the whole matrix $\mathbf{X}$ (all regressors in all periods), not just $x_t$.

| Assumption | Statement | What it buys |
|---|---|---|
| TS.1 | Linear model | |
| TS.2 | No perfect multicollinearity | |
| TS.3 | **Strict exogeneity** $\mathbb{E}[u_t\mid\mathbf{X}]=0$ for all $t$ | TS.1 to TS.3: OLS **unbiased** |
| TS.4 | Homoskedasticity $\text{Var}(u_t\mid\mathbf{X})=\sigma^2$ | |
| TS.5 | No serial correlation $\text{Corr}(u_t,u_s\mid\mathbf{X})=0$ | TS.1 to TS.5: sampling variance known |
| TS.6 | Normal errors | TS.1 to TS.6: OLS estimators normal |

### Lags

If $x_t$ affects $y$ in **future** periods and $x$ is dependent over time, strict exogeneity fails (the lagged effect sits in $u_t$). **Solution: include the lags**, a **distributed lag** model:

$$y_t=\alpha_0+\delta_0x_t+\delta_1x_{t-1}+\dots+\delta_qx_{t-q}+u_t$$

The static model is the special case $\delta_1=\dots=\delta_q=0$.

- **Consistent** if **weak exogeneity** holds: $\text{Cov}(u_t,x_t)=\text{Cov}(u_{t-1},x_{t-1})=\dots=\text{Cov}(u_{t-q},x_{t-q})=0$.
- **Unbiased** if **strict exogeneity** holds: $\text{Cov}(u_t,x_{t+j})=0$ for all $j$.

**Autoregression AR(1):** $y_t=\rho y_{t-1}+e_t$. Consistent if weak exogeneity holds, $\text{Cov}(e_t,y_{t-1})=0$, but **necessarily biased** (strict exogeneity cannot hold). Adding $q$ lags gives AR($q$).

### Seasonality, trends, serial correlation

- **Seasonality:** use dummies. Monthly dummies (January = base): $y_t=\beta_0+\delta_1Feb_t+\delta_2Mar_t+\dots+\delta_{11}Dec_t+\beta_1x_{t1}+\dots+u_t$. Quarterly dummies (Q4 = base): $y_t=\beta_0+\delta_1q1_t+\delta_2q2_t+\delta_3q3_t+\dots$. Choose by dataset and the seasonality you care about.
- **To avoid violating TS.3** add lags, seasonal dummies and/or time trends.
- **Time trend, method 1 (add $t$):** $y_t=\beta_0+\beta_1x_{t1}+\beta_2x_{t2}+\beta_3t+u_t$. $\beta_3$ captures **all** non-regressor changes over time; use this when you want to know $\beta_3$. Time $t$ satisfies strict exogeneity, $\text{Cov}(u_t,t+j)=0$ for any lag $j$.
- **Time trend, method 2 (detrend):** regress $y_t$ on $t$ and keep the residuals, $\ddot y_t=y_t-\hat\alpha_0-\hat\alpha_1t$; do the same for each $x$ if needed; then estimate $\ddot y_t=\beta_1\ddot x_{t1}+\beta_2\ddot x_{t2}$ (the intercept will be estimated as 0 if included).
- **Serial correlation:** $\text{Cov}(u_t,u_s)\neq0$. Fix standard errors with **HAC** (heteroskedasticity and autocorrelation consistent, e.g. **Newey-West**).
- **Test for first-order serial correlation** $u_t=\rho u_{t-1}+e_t$, $|\rho|<1$: (1) estimate the model for $y$ and save residuals $\hat u_t$; (2) regress $\hat u_t$ on $\hat u_{t-1}$ and **$t$-test $H_0:\rho=0$**.

---

## 6. Event studies (not on the exam)

> [!warning] The slide marks event studies as not examinable. Summary only.

An event study compares a time series **before and after an event**, assuming nothing else changed at the same time. Data splits into an **estimation period** (before the event, used to model "normal" behaviour) and an **observation period** (leading up to and after the event).

1. **Estimation period:** build a predictive model $y_t=\beta_0+\beta_1X_t+u_t$ controlling for $X_t$.
2. **Observation period:** use $\hat\beta_0,\hat\beta_1$ to predict $\hat y_t$.
3. **Abnormal outcome:** $AR_t=y_t-\hat y_t$. If $AR_t\neq0$ **before** the event, the event was **anticipated**; if $AR_t\neq0$ **after**, evidence of an effect.

**Regression version** (tests significance with standard errors):

$$y_t=\beta_0+\beta_1X_t+\delta_1\,day.before_t+\delta_2\,day.of_t+\delta_3\,day.after_t+u_t$$

with each dummy equal to 1 only on the day immediately before, the day of, and the day immediately after the event. $\hat\delta_1,\hat\delta_2,\hat\delta_3$ are the **abnormal outcomes** on those three days, the same as the manual approach but now testable. See [[_Econometrics Concepts#Event Study|Event Study]].

---

## 7. Fixed effects and clustered standard errors

$$y_{it}=a_i+\beta_1x_{it1}+\dots+\beta_kx_{itk}+u_{it}$$

The **fixed effect** $a_i$ captures all unobserved characteristics of unit $i$ that **do not change over time** and may affect the outcome.

- Pooled OLS puts $a_i$ **in the error**. If $a_i$ is absent or **independent of $x$**, the estimators are unbiased. If $a_i$ is **related to $x$**, then the error depends on $x$ and OLS is **biased**.

**Two ways to account for fixed effects (same estimates for $\beta_1,\dots,\beta_k$):**

1. **Dummies** for each individual: $y_{it}=a_i+\beta_1x_{it1}+\dots+u_{it}$.
2. **Within estimation:** subtract each unit's time-mean from every variable: $\ddot y_{it}=\beta_1\ddot x_{it1}+\dots+\ddot u_{it}$.

**Clustered standard errors.** When we think errors within a unit are correlated over time (not just that $\text{Var}(u_{it})$ is constant), **cluster at the individual level**. This is a special heteroskedasticity correction used with fixed effects or certain treatment designs.

> [!tip] When to include fixed effects
> When you have **panel data** *and* something about the individuals is **fixed over time and affects the outcome**. Usually use **within estimation** because it is easier in R, unless you actually want to see the fixed effects themselves.

See [[Lec_08-Fixed Effects in Panel Data]].

---

## 8. Regression discontinuity (not on the exam)

> [!warning] The slide marks RDD as not examinable. Summary only.

Used when **treatment depends on a running variable** being above or below a **cutoff $c$**. **Sharp RDD:** treatment jumps from 0 to 1 at the cutoff. Examples on the slides: the age-21 drinking law and mortality; a 50% union vote share and productivity. RDD estimates a **local** treatment effect for units **right at the cutoff**.

Model (centred running variable):

$$y=\beta_0+\beta_1(running-c)+\beta_2T+\beta_3\,T\cdot(running-c)+u$$

**$\beta_2$ is the treatment effect: the jump at the cutoff.** Controls can improve fit.

- **R:** `rdrobust(y, x, c = 0)` for local-linear estimation with a data-driven bandwidth; `rdplot()` for the binned scatter. Read the **robust** row for the effect and significance.
- **Bandwidth $h$ trade-off:** narrow window means less bias, more variance; wide window means more precision, more extrapolation bias. Check the estimate is **stable across bandwidths**. A flexible (polynomial) functional form can also improve fit.
- **Continuity assumption:** absent treatment, the outcome would evolve smoothly through the cutoff, so units just below and just above are comparable and any jump is caused by treatment.
- **Main threat:** **sorting/manipulation** of the running variable (check with the density test and covariate placebo checks).
- **Fuzzy RDD:** the *probability* of treatment jumps at the cutoff.

See [[Lec_09-Regression Discontinuity Design (RDD)]].

---

## 9. Differences-in-differences

**Basic model** (no controls):

$$y=\beta_0+\delta_0\,d2+\beta_1\,dT+\delta_1\,(d2\cdot dT)+u$$

- $y$: the outcome of interest.
- $d2$: =1 for observations made **after** the policy, 0 before.
- $dT$: =1 for the **treatment group**, 0 for the control group.
- $\delta_1$ (the interaction) is the **treatment effect**.

**With other controls:**

$$y=\beta_0+\delta_0\,d2+\beta_1\,dT+\delta_1\,(d2\cdot dT)+\gamma'X+u$$

where $X$ are additional control variables.

### Is the DiD design believable?

The control group must represent **what would have happened to the treated group without treatment**. Look for:

1. **No reason to believe the control group's outcome would suddenly change** around the time of treatment.
2. The treated and control groups are **generally similar** in many ways.
3. The two groups had **similar trajectories before treatment** (parallel pre-trends).

> [!tip] When do we use diff-in-diff?
> When you have a **control group and a treatment group** AND you observe **two different time periods** AND **all the explanatory variables are exogenous**.

**Datasets from lectures 6 to 9** (the slide's list): time series (Phillips curve; investment-savings curve); event studies (Google stock returns after the reorganisation into Alphabet); **diff-in-diff** (Card & Krueger 1994, minimum wage and employment; Royer, Stehr & Sydnor 2015, commitment contracts and exercise); fixed effects (Heyes & Saberian 2019, judges' asylum decisions and temperature); RDD. *(The slide spells the author "Sabrian"; the paper is by Heyes and Saberian.)*

See [[Lec_10-Difference-in-Differences]] and [[Lec_11-Difference-in-Differences II (Dynamic DiD)]].

---

## 🧠 One-page cheat list

1. **Binary $y$:** LPM (easy, but heteroskedastic and can leave $[0,1]$) vs logit/probit ($G(x'\beta)$, marginal effect $g(x'\beta)\beta_j$ at the averages; LR test for joint restrictions).
2. **Endogenous $x$:** 2SLS. Check **relevance** in the first stage; **argue** validity ($\text{Cov}(u,z)=0$).
3. **Simultaneity:** $x,y$ determined together, so use an exogenous shifter $z$ as an instrument.
4. **Missing $y$ for part of the sample:** Heckit (probit for selection, add the inverse Mills ratio, test it).
5. **Panel + unobserved fixed traits:** fixed effects (within estimation), **cluster** at the unit level.
6. **Treatment and control observed before and after:** DiD $\delta_1$; defend it with pre-trends.
7. **Not examinable (per the overview slide):** time-series/event studies and RDD (summaries above are for completeness).

---

## 📎 Related Notes
- Previous: [[Lec_12-Course Summary (Late Fees at Daycare)]]
- Exam tools: [[_Exam Formula Sheet (Lec 1-10)]] · [[_Exam Question Playbook (Any Experiment)]]
- Hub: [[Econometrics]]
