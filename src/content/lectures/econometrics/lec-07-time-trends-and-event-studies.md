---
title: Time Trends and Event Studies
week: 7
semester: 2
year: 2
course: Applied Econometrics
lecture: "Lecture 07 — Time Trends and Event Studies"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - time-series
  - time-trends
  - spurious-regression
  - detrending
  - event-study
  - abnormal-returns
  - deterministic-trend
aliases:
  - Time Trends
  - Event Studies
  - Detrending
subject: econometrics
in_scope: true
---
# Time Trends and Event Studies

> Part of: [[Econometrics]]
> **Lecture 07** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Deterministic Time Trend]], [[Spurious Regression]], [[Detrending]], [[Event Study]], [[Abnormal Returns]], [[Estimation Period]], [[Observation Period]], [[Distributed Lag Model]], [[Autoregressive Model]]

---

## 📐 Quick Recap: Types of Time Series Models

Before covering trends, it helps to remember the three model types from Lecture 6:

| Model | Formula | Key idea |
|---|---|---|
| **Static** | $y_t = \beta_0 + \beta_1 x_t + u_t$ | $x$ affects $y$ immediately, no carry-over |
| **Distributed Lag (DL)** | $y_t = \alpha_0 + \delta_0 x_t + \delta_1 x_{t-1} + \cdots + u_t$ | $x$ affects $y$ over multiple periods |
| **Autoregressive (AR)** | $y_t = \alpha + \phi_1 y_{t-1} + \cdots + e_t$ | $y$'s own past helps predict $y$ today |

> [!tip] Why does this matter for trends?
> Many real-world time series — GDP, population, stock prices — drift upward over time. This "trending" behaviour can corrupt regression results even when the models above are correct in structure. The next sections explain how to detect and fix this.

---

## 📊 What is a Time Series?

A **time series** is a sequence of observations indexed by time: $\{y_1, y_2, \ldots, y_T\}$.

Think of it as a single "reel" from a random process that could have generated many different reels. What you observe is one realisation — one possible path the variable took over time.

> [!info] Sample vs. population in time series
> In cross-sectional data, the "population" is all people (or firms, etc.) you didn't sample. In time series, the "population" is all possible reels the process could have generated. Your data is just one of them. This is important for understanding what OLS assumptions mean in a time series context.

---

## ⚙️ OLS Assumptions for Time Series

Running OLS on time series data requires its own set of assumptions, layered on top of the standard OLS ones.

### Step 1: Zero Conditional Mean (TS.1)

$$\mathbb{E}[u_t \mid \mathbf{X}] = 0$$

This is **strict exogeneity** — the error at time $t$ is uncorrelated with the explanatory variables at *every* time period (past, present, and future). It's a stronger requirement than in cross-sectional settings.

> [!warning] When does strict exogeneity fail?
> It fails when $x$ is a lagged dependent variable (e.g. $y_{t-1}$ in an AR model), or when there are feedback loops (e.g. the central bank adjusts interest rates in response to past inflation — then interest rate reacts to past $y$, violating independence between $x$ and past errors).

### Step 2: Homoskedasticity (TS.3)

$$\text{Var}(u_t \mid \mathbf{X}) = \sigma^2$$

The variance of the error is constant across time — no explosion or collapse of variability.

### Step 3: No Serial Correlation (TS.4)

$$\text{Corr}(u_t, u_s \mid \mathbf{X}) = 0 \quad \text{for all } s \neq t$$

Errors at different time periods are uncorrelated with each other. Violated when today's error affects tomorrow's — common in economic time series.

### Step 4: Normality (TS.5)

$$u_t \overset{\text{i.i.d.}}{\sim} N(0, \sigma^2)$$

Combined with TS.1–TS.4, this gives exact distributions for $t$ and $F$ statistics.

> [!info] What do these assumptions give you?
>
> | Assumptions satisfied | What you get |
> |---|---|
> | A1 + TS.1 | OLS is **unbiased** |
> | A1 + TS.1 + TS.3 + TS.4 | OLS has **known (correct) sampling variance** |
> | A1 + TS.1–TS.5 | OLS estimates are **normally distributed**; $t$/$F$ tests are exact |

---

## 📈 Deterministic Time Trends

A **deterministic time trend** is a systematic, predictable drift in a variable over time — not random, just a steady march upward (or downward).

### Linear Trend

$$\boxed{y_t = \alpha_0 + \alpha_1 t + e_t}$$

- $\alpha_1$ = the average change in $y$ **per time period**
- $e_t$ = the random fluctuation around the trend
- If $\alpha_1 > 0$: the series drifts upward; if $\alpha_1 < 0$: downward

> [!example] Reading a linear trend coefficient
> If $y_t$ is annual GDP in billions and $\alpha_1 = 50$, then GDP grows by approximately $50 billion per year on average, regardless of other factors. The actual GDP in any given year is this trend value plus a random deviation $e_t$.

### Exponential Trend

$$\log(y_t) = \alpha_0 + \alpha_1 t + e_t$$

$$\boxed{y_t = e^{\alpha_0} \cdot e^{\alpha_1 t} \cdot e^{e_t}}$$

- After taking logs, the trend becomes linear in $t$
- $\alpha_1 \approx$ the **average growth rate** per period (expressed as a proportion)
- If $\alpha_1 = 0.03$, the variable grows at approximately 3% per period

> [!tip] Linear vs. exponential trend — how to choose
> Plot the variable. If it rises by roughly the **same amount** each period (like a straight ramp), use a linear trend. If it rises by roughly the **same percentage** each period (accelerating upward — like compound interest or population growth), use an exponential trend (i.e. take logs first).

---

## ⚠️ The Spurious Regression Problem

Here's a critical danger: **two completely unrelated variables can appear highly correlated simply because they both trend upward over time.**

### A concrete example

Suppose we regress GDP on consumption:

```r
lm(GDP ~ Consumption, gdp)
```

We get $R^2 = 0.9974$ — a stunning fit. But wait: both GDP and consumption grow over time. The regression might just be picking up the common upward drift, not a genuine relationship.

> [!warning] Spurious regression: what's really happening
> When two variables both trend upward, a regression will almost always produce a high $R^2$ and a statistically significant coefficient — even if the variables have nothing to do with each other. The OLS estimator is finding the common trend, not a real causal relationship. This is called **spurious regression**.
>
> Classic example: ice cream sales and drowning rates both rise in summer. A naive regression would show ice cream "causes" drowning. It doesn't — both respond to a third factor (hot weather = a trend).

![[Lec07_spurious.png|640]]

> [!warning] The high R² is an illusion
> These two series were generated *independently* — neither has any effect on the other. But because both drift upward, the scatter on the right looks like a tight linear relationship with R² ≈ 0.8. OLS isn't finding a relationship; it's finding the shared march of time. This is why you must remove the trend before trusting any time-series regression.

---

## 🔧 Two Methods to Fix Spurious Regression

There are two equivalent approaches to remove the confounding influence of a time trend.

### Method 1: Add a Time Variable Directly

Include $t$ as an additional regressor:

$$\boxed{y_t = \beta_0 + \beta_1 x_{t1} + \beta_2 x_{t2} + \alpha t + u_t}$$

- The coefficient $\alpha$ now captures whatever is changing uniformly over time
- The coefficients $\beta_1, \beta_2$ measure the effect of $x$ **net of** the common trend
- $t$ satisfies strict exogeneity (it's just the calendar — no feedback loop can make $u_t$ affect what year it is)

> [!tip] When to use Method 1
> Use this when the trend itself is of substantive interest — e.g. you want to know "is there a long-run upward trend in this outcome even after controlling for $x$?". The $\hat{\alpha}$ estimate tells you directly.

```r
# Add time variable to control for trend
lm(GDP ~ Consumption + t, gdp)
```

### Method 2: Detrend the Variables First

**Step 1** — Regress each variable on time, and save the residuals:

$$\hat{y}_t = \hat{\alpha}_0 + \hat{\alpha}_1 t \quad \Rightarrow \quad \ddot{y}_t = y_t - \hat{\alpha}_0 - \hat{\alpha}_1 t$$

$$\hat{x}_t = \hat{\gamma}_0 + \hat{\gamma}_1 t \quad \Rightarrow \quad \ddot{x}_t = x_t - \hat{\gamma}_0 - \hat{\gamma}_1 t$$

**Step 2** — Regress the detrended $y$ on the detrended $x$:

$$\ddot{y}_t = \beta_1 \ddot{x}_t + u_t$$

> [!tip] What detrending actually does
> After detrending, $\ddot{y}_t$ is "GDP with the trend removed" — just the year-to-year deviations around the average upward drift. Same for $\ddot{x}_t$. Regressing one on the other now asks: "when consumption is above its trend, is GDP also above its trend?" — a genuinely interesting question, not contaminated by the common drift.

![[Lec07_detrending.png|560]]

> [!example] What the two panels show
> Top: the raw series climbs steadily; the dashed green line is the fitted trend $\hat\alpha_0+\hat\alpha_1 t$. Bottom: subtracting that line leaves only the deviations around it — the series now hovers around zero with no drift. Those detrended wiggles are what you actually regress, so any correlation you find reflects genuine co-movement rather than a shared trend.

> [!info] Methods 1 and 2 are equivalent
> In large samples, adding $t$ as a regressor (Method 1) and manually detrending first (Method 2) produce the **same coefficient estimates** for $\beta_1$. This is a consequence of the Frisch-Waugh-Lovell (FWL) theorem: the coefficient on $x$ after controlling for $t$ equals the coefficient from regressing the residual of $x$ on $t$ against the residual of $y$ on $t$.

---

## 🔬 Event Studies

An **event study** is a methodology for measuring the causal effect of a specific, discrete event on an outcome of interest (typically stock returns, but can be any outcome).

The fundamental idea: compare what *actually* happened around the event to what *would have happened* without the event. The difference is the **causal effect**.

### Step 1: Define the two periods

| Period | Description |
|---|---|
| **Estimation period** | Pre-event window. Use this to build a model of normal outcomes. |
| **Observation period** | The window around the event. Use the model to predict what outcomes *should* be, then compare. |

> [!tip] Why split into two periods?
> You can't include the event itself in the model you use to predict "normal" behaviour — that would contaminate your baseline. You train the model on clean pre-event data, then apply it to the event window.

### Step 2: Build the model on the estimation period

A common model for stock returns:

$$R_t^{\text{Google}} = \beta_0 + \beta_1 R_t^{S\&P500} + u_t \quad \text{(estimation period only)}$$

- This says: Google's return normally tracks the S&P 500 by some factor $\beta_1$
- Estimated on pre-event data only

> [!info] Why control for the S&P 500?
> The S&P 500 captures broad market movements. On any given day, the market as a whole might go up or down, pulling individual stocks with it. By including the market return, we strip out this "tide that lifts all boats" and isolate stock-specific movements. What's left is the abnormal return due to the event.

### Step 3: Compute Abnormal Returns (AR)

$$\boxed{AR_t = R_t^{\text{actual}} - \hat{R}_t^{\text{predicted}}}$$

$$AR_t = R_t^{\text{Google}} - \hat{\beta}_0 - \hat{\beta}_1 R_t^{S\&P500}$$

- $AR_t > 0$: Google did **better** than the model predicted → positive surprise
- $AR_t < 0$: Google did **worse** than the model predicted → negative surprise
- $AR_t \approx 0$: Nothing unexpected happened

> [!tip] Reading the AR plot
> Time on x-axis, AR on y-axis, vertical line at event date.
> - **Non-zero AR before the event** → the market was *anticipating* the announcement (information leaked, or insiders traded)
> - **Spike at the event date** → market surprised by the announcement
> - **Non-zero AR after the event** → market still processing/adjusting to the news

![[Lec07_event_study.png|600]]

> [!example] Anatomy of an AR plot
> Away from the event the abnormal returns are just noise scattered around zero — the model is tracking the stock well. The big red bar on day 0 is the event surprise. The green bars at −1 and +1 hint at a pre-event leak and post-event adjustment. In the dummy-regression version, these three bars are exactly the coefficients $\hat\gamma_{-1}$, $\hat\gamma_0$, $\hat\gamma_{+1}$.

```r
# Step 1: Fit model on estimation period
model_est <- lm(Google ~ SP500, data = estimation_period)

# Step 2: Predict returns in the observation period
predicted_returns <- predict(model_est, newdata = observation_period)

# Step 3: Compute abnormal returns
AR <- observation_period$Google - predicted_returns
```

---

## 📱 Case Study: Google → Alphabet Restructuring (2015)

**Event**: On 10 August 2015, Google announced it was restructuring into a holding company called Alphabet, with Google as one subsidiary.

**Question**: Did this announcement cause an abnormal stock return?

### Setup

- **Estimation period**: pre-August 2015 trading days
- **Observation period**: a window around 10 August 2015
- **Model**: Google daily return ~ S&P 500 daily return

### Regression approach using dummies

Instead of splitting into two periods, we can run a single regression with event dummies:

$$R_t^{\text{Google}} = \beta_0 + \beta_1 R_t^{S\&P500} + \gamma_{-1} \text{day.before}_t + \gamma_0 \text{day.of}_t + \gamma_{+1} \text{day.after}_t + u_t$$

| Dummy | Value | Interpretation |
|---|---|---|
| `day.before` | 1 on 9 Aug 2015, 0 otherwise | AR on the day before the event |
| `day.of` | 1 on 10 Aug 2015, 0 otherwise | AR on the announcement day itself |
| `day.after` | 1 on 11 Aug 2015, 0 otherwise | AR on the day after the event |

- A significant $\hat{\gamma}_0$ means the announcement caused a genuine abnormal return
- A significant $\hat{\gamma}_{-1}$ suggests the market anticipated the announcement

> [!example] Interpreting the results
> Suppose $\hat{\gamma}_0 = +0.06$ (statistically significant). This means that on the day of the restructuring announcement, Google stock returned 6 percentage points more than the S&P 500 baseline would predict. The market reacted positively to the news. If $\hat{\gamma}_{-1}$ is also significant, information may have leaked beforehand.

> [!warning] Non-trading days don't count
> Event studies use **trading days**, not calendar days. Weekends and holidays are skipped. The "day before" and "day after" refer to the nearest trading days, not +1 and -1 calendar days.

---

## 🚗 Case Study: California Seatbelt Law (1986)

**Event**: California implemented a mandatory seatbelt law in January 1986.

**Question**: Did the law reduce traffic fatalities?

**Setup**:

$$\text{fatalities}_t = \beta_0 + \beta_1 \text{seatbelt.law}_t + \text{seasonal dummies} + u_t$$

- Seasonal dummies (months): control for the fact that fatalities vary by season (summer driving more common, etc.)
- `seatbelt.law` = 1 after January 1986, 0 before

> [!warning] Confounders: the speed limit change
> In 1987, California also changed its speed limit. This is a **confounder** — another policy change happening close to the event that could also affect fatalities. Any estimated effect of the seatbelt law might be picking up the speed limit change too. A good event study design must either (a) control for confounders or (b) argue convincingly they don't apply.
>
> This is why the design of the estimation vs. observation window, and the choice of control variables, matters so much.

> [!tip] Step-by-step logic of this event study
> 1. **Model pre-law fatalities** using only data before January 1986, controlling for month-of-year (seasonal dummies)
> 2. **Predict what fatalities would have been** after January 1986 if the law had not passed
> 3. **Compare actual fatalities** to predictions → the difference is the estimated effect of the seatbelt law
> 4. If actual fatalities are below predicted, the law worked; the size of the gap estimates how much

---

## 🎯 Summary

1. **OLS on time series** requires extra assumptions: strict exogeneity (TS.1), homoskedasticity (TS.3), no serial correlation (TS.4), normality (TS.5). These are stronger than cross-sectional requirements.

2. **Deterministic time trends** capture steady drift in a series over time. Linear trend: $y_t = \alpha_0 + \alpha_1 t + e_t$ ($\alpha_1$ = change per period). Exponential trend: $\log(y_t) = \alpha_0 + \alpha_1 t + e_t$ ($\alpha_1 \approx$ growth rate).

3. **Spurious regression** arises when two trending variables appear correlated in OLS purely because both drift in the same direction — not because of a real relationship.

4. **Fix 1 (add time variable)**: Include $t$ as a regressor. $\hat{\beta}$ then measures the effect of $x$ net of the common trend.

5. **Fix 2 (detrending)**: Regress both $y$ and $x$ on $t$ separately, then regress the residuals on each other. Gives the same answer as Fix 1 in large samples.

6. **Event studies** compare actual outcomes around an event to model-predicted outcomes (from an estimation period). The difference is the **Abnormal Return (AR)**: $AR_t = \text{actual} - \text{predicted}$.

7. **Event study design**: anticipation (pre-event AR ≠ 0), event effect (AR ≠ 0 at event date), drift (post-event AR ≠ 0) each tell a different story about how markets process information.

---

## 📎 Related Notes

- Previous: [[Lec_06-Simultaneous Equations & Time Series]] — static/DL/AR models, serial correlation, seasonality
- Next: [[Lec_08-Fixed Effects in Panel Data]] — within-estimator, individual fixed effects, clustered SEs
- Hub: [[Econometrics]]
- Key concepts: [[Deterministic Time Trend]], [[Spurious Regression]], [[Detrending]], [[Event Study]], [[Abnormal Returns]], [[Estimation Period]], [[Observation Period]], [[Strict Exogeneity]]
