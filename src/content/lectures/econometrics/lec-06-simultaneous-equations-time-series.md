---
title: Simultaneous Equations & Time Series
week: 6
semester: 2
course: Applied Econometrics
lecture: "Lecture 06 — Simultaneous Equation Models & Time Series"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - simultaneous-equations
  - time-series
  - serial-correlation
  - distributed-lag
  - autoregression
  - seasonality
  - supply-and-demand
subject: econometrics
in_scope: true
---
# Simultaneous Equations & Time Series

> Part of: [[Econometrics]]
> **Lecture 06** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Simultaneous Equations Model]], [[Serial Correlation]], [[Time Series]], [[Distributed Lag Model]], [[Autoregressive Model]], [[Static Model]], [[Strict Exogeneity]], [[Seasonality]], [[HAC Standard Errors]]

---

## Part 1: Simultaneous Equations Models

---

## 🐟 The Fulton Fish Market Problem

**Graddy (1995)** studied the wholesale market for whiting fish at the Fulton Fish Market in New York (Dec 1991 – May 1992). The goal: estimate **supply and demand elasticities** — how sensitive quantity is to price on each side of the market.

The model has two equations:

$$\text{Supply:} \quad \log Q_t^S = \alpha_S \log P_t + \beta_S \cdot \text{weather}_t + u_t^S$$
$$\text{Demand:} \quad \log Q_t^D = \alpha_D \log P_t + \beta_D \cdot \text{day.of.week}_t + u_t^D$$

- $\alpha_S$ = price elasticity of supply (how much more fish gets brought if price rises)
- $\alpha_D$ = price elasticity of demand (how much less fish gets bought if price rises — expected negative)
- At equilibrium: $Q_t^S = Q_t^D = Q_t$

> [!tip] The supply/demand logic
> Think of the supply and demand curves as fixed relationships between price and quantity. What we observe in the data is the **equilibrium point** where those curves cross. Over time, these curves *shift* due to weather (supply shifts) and day of the week (demand shifts) — and those shifts trace out different equilibrium points.

---

## ⚠️ Why OLS Fails: Endogeneity in Simultaneous Systems

The central problem: **price $P_t$ is endogenous in both equations**.

Here's why: if there's a random shock to supply ($u_t^S$ changes), the supply curve shifts, the equilibrium moves, and so **price changes**. This means $\text{cov}(P_t, u_t^S) \neq 0$. Similarly, a demand shock shifts the demand curve and changes equilibrium price, so $\text{cov}(P_t, u_t^D) \neq 0$.

In other words, price and quantity are **determined together** — they're jointly endogenous. Running OLS on either equation treats price as exogenous, which it isn't.

> [!warning] The identification problem
> When you observe price and quantity over time, you're watching equilibrium points shift around. Those shifts could be driven by supply changes or demand changes — and without extra information, you can't tell which curve you're tracing. This is the classic "identification problem" in supply/demand estimation.

```
  Supply shifts (weather) → supply curve moves → new equilibrium (P,Q)
  Demand shifts (day of week) → demand curve moves → new equilibrium (P,Q)
```

---

## 🔧 IV Solution: Using Curve Shifters as Instruments

The fix: use variables that shift **one curve** as instruments for price. This traces out the *other* curve.

### Identifying the Demand Curve

To estimate the **demand** elasticity, we need exogenous variation in price that's not caused by demand. **Weather** (affecting supply only) gives us exactly this.

**First stage** — instrument for equilibrium quantity using weather:
$$\log Q_t^S = \gamma_0 + \gamma_1 \text{weather}_t + \epsilon_t$$

**Second stage** — demand equation using predicted quantity:
$$\log P_t = \beta_0 + \beta_1 \widehat{\log Q_t^S} + \beta_2 \text{day.of.week}_t + \nu_t$$

**Why does this work?**
- Weather affects **supply** (rougher seas = fewer fish) → shifts the supply curve → price changes for *supply-side* reasons
- Weather has no direct effect on **demand** (consumers don't care about sea conditions)
- So weather is a valid instrument for price in the demand equation

> [!example] The logic in plain English
> On stormy days, fewer fish make it to market. Supply drops, price rises. This price variation is purely supply-driven — it's not because consumers suddenly want more fish. So by looking at how quantity demanded responds to these supply-driven price changes, we can estimate the demand elasticity. That's what IV achieves.

| Instrument | Shifts | Valid for identifying |
|---|---|---|
| Weather (windspeed, wave height) | Supply curve | Demand equation |
| Day of week | Demand curve | Supply equation |

![[Lec06_identification.png|600]]

> [!example] Why a shifter "traces out" the other curve
> Hold demand fixed (green) and let weather push the supply curve (blue) in and out. Each storm or calm day produces a new equilibrium where the curves cross — and those red dots line up *exactly along the demand curve*. That's the whole trick: weather varies price for supply-side reasons only, so watching how quantity responds to those price moves reveals the demand elasticity. Without a shifter you'd just see a scatter of dots and couldn't tell which curve you were looking at.

---

## Part 2: Serial Correlation in Time Series

---

## 📈 What is Serial Correlation?

**Serial correlation** (also called autocorrelation) is when residuals at different time periods are correlated with each other:

$$\text{cov}(u_t, u_{t-1}) \neq 0$$

In the fish market example: after running the IV model, plotting residuals over time reveals a pattern — today's residual is related to yesterday's residual. This violates **Assumption TS.4** (no serial correlation).

![[Lec06_serial_correlation.png|640]]

> [!warning] Two views of the same problem
> On the left, the residuals don't bounce randomly around zero — they drift in long runs above and below the line (a positive shock today tends to persist tomorrow). On the right, regressing $\hat u_t$ on $\hat u_{t-1}$ gives a clear positive slope ($\hat\rho$), so we reject $H_0:\rho=0$. The coefficients stay consistent, but the naive standard errors are too small — which is exactly what HAC (Newey-West) errors repair.

> [!info] Why would errors be serially correlated?
> In time series, many things that affect your outcome today also affect it tomorrow. If today's fish price is unexpectedly high due to some unobserved factor (e.g. a food festival this week), that effect often carries over into tomorrow's price. The error term "remembers" the past.

### Why is this a problem?

| Impact | What happens |
|---|---|
| **Unbiasedness** | OLS estimators remain unbiased (if exogeneity holds) |
| **Consistency** | Estimators remain consistent under weak exogeneity |
| **Efficiency** | OLS is **no longer efficient** — it's not BLUE |
| **Standard errors** | Usual standard errors are **wrong** — hypothesis tests are invalid even in large samples |

> [!warning] Serial correlation invalidates your t-tests
> Even if your coefficients are right in large samples, the standard errors you compute assuming no serial correlation are biased downward — making your estimates look more significant than they are. This is why you can't just ignore it.

### Fix: HAC Standard Errors (Newey-West)

Use **Heteroskedasticity and Autocorrelation Consistent (HAC)** standard errors. The most common are **Newey-West** standard errors.

- The **coefficient estimates don't change** — only the standard errors are recalculated
- HAC standard errors are typically **larger** than naive OLS standard errors (correct widening of confidence intervals)
- p-values increase → some previously significant results may no longer be significant

### Testing for Serial Correlation

Run a regression of residuals on their own lag:

$$\hat{u}_t = \rho \hat{u}_{t-1} + e_t, \quad |\rho| < 1$$

Test $H_0: \rho = 0$ against $H_1: \rho \neq 0$.

- If you reject $H_0$: evidence of serial correlation → use HAC standard errors.

---

## Part 3: Time Series Models

---

## ⏱️ What is a Time Series?

A **time series** is a sequence of random variables indexed by time: $\{y_t\}_{t=1}^T$.

- What you observe is one **realisation** (one possible sequence of outcomes) from an underlying stochastic process
- The "population" is all possible sequences the process could have generated
- The key feature: **ordering matters** — the past can influence the future, but not vice versa

> [!tip] Why is time series different from cross-section?
> With cross-sectional data (e.g. 1,000 people), observations are typically independent. With time series, observations are *correlated over time* — what happened last quarter shapes what happens this quarter. This requires adapting our assumptions.

---

## 🏛️ The Static Model

$$y_t = \beta_0 + \beta_1 x_t + u_t \quad \text{for } t = 1, \ldots, T$$

The static model assumes $x$ affects $y$ **immediately and only in the same time period**. No lag effects — whatever $x_t$ is now is what determines $y_t$ now.

**Example — Static Phillips Curve:**
$$\text{inflation}_t = \beta_0 + \beta_1 \text{unemployment}_t + u_t$$

The idea: higher unemployment today → lower inflation today (firms compete harder for workers, wage pressure drops, prices follow).

---

## 📋 Assumptions for OLS with Time Series

In time series, the standard OLS assumptions are modified. The key change is to **exogeneity**.

### TS.2: Strict Exogeneity (stronger than before)

$$\mathbb{E}[u_t \mid \mathbf{X}] = 0$$

where $\mathbf{X}$ is **all** explanatory variables across **all** time periods (past, present, and future).

Compare with the standard cross-section assumption (**contemporaneous exogeneity**):

$$\mathbb{E}[u_t \mid x_t] = 0 \quad \text{(only requires independence at time } t \text{)}$$

> [!warning] Strict exogeneity is a strong demand
> Strict exogeneity requires that $u_t$ is uncorrelated with $x_s$ for **all** $s$ — even future values of $x$. This fails when:
> - $x$ is a lagged dependent variable (e.g. $y_{t-1}$ — obviously correlated with $u_{t-1}$ which affects $y_{t-1}$)
> - $x$ reacts to past values of $y$ (feedback loops — e.g. central banks adjust interest rates in response to past inflation)

| Assumption | What it requires | Gives you |
|---|---|---|
| **Contemporaneous exogeneity** (A2) | $\mathbb{E}[u_t \mid x_t] = 0$ | Consistency |
| **Strict exogeneity** (TS.2) | $\mathbb{E}[u_t \mid \mathbf{X}] = 0$ | Unbiasedness |

**Additional time series assumptions:**

- **TS.3 Homoskedasticity**: $\text{Var}(u_t \mid \mathbf{X}) = \sigma^2$ (constant variance across time)
- **TS.4 No serial correlation**: $\text{Corr}(u_t, u_s \mid \mathbf{X}) = 0$ for all $s \neq t$
- **TS.5 Normality**: $u_t \sim \text{i.i.d.} \; N(0, \sigma^2)$

Under A1 + TS.2–TS.4: OLS gives correct standard errors and valid $t$/$F$-tests.
Under A1 + TS.2–TS.5: OLS is normally distributed; $t$ and $F$ statistics have exact distributions.

---

## 🔗 Distributed Lag (DL) Models

What if $x$ in period $t$ affects $y$ not just now, but also in future periods?

$$\boxed{y_t = \alpha_0 + \delta_0 x_t + \delta_1 x_{t-1} + \delta_2 x_{t-2} + \cdots + \delta_q x_{t-q} + u_t}$$

This is a **Distributed Lag model with $q$ lags**. The static model is the special case where $\delta_1 = \cdots = \delta_q = 0$.

### Interpreting the coefficients:

- $\delta_0$ = the **impact effect** — how much $y$ changes in period $t$ if $x$ increases by 1 in period $t$
- $\delta_k$ = the **$k$-period lag effect** — how much $y$ changes in period $t+k$ due to a one-time increase in $x$ at period $t$
- $\sum_{k=0}^{q} \delta_k$ = the **long-run multiplier** — the total cumulative effect of a permanent one-unit increase in $x$

> [!example] Dynamic Phillips Curve
> $$\text{inflation}_t = \alpha + \delta_0 \text{unemp}_t + \delta_1 \text{unemp}_{t-1} + u_t$$
>
> If unemployment increases by 1pp this period:
> - Inflation falls by $\delta_0$ this period
> - Inflation falls by an additional $\delta_1$ next period
> - Total effect over two periods: $\delta_0 + \delta_1$
>
> In the fish market example: $\text{cor}(\text{unemp}_t, \text{unemp}_{t-1}) = 0.752$ — unemployment is highly autocorrelated (persistent), so the static model understates the full effect.

> [!warning] Multicollinearity in DL models
> Lagged values of the same variable tend to be highly correlated with each other. This inflates standard errors and makes it hard to identify individual $\delta_k$ coefficients precisely. The long-run total may be well-identified even when individual lags are not.

---

## 🔄 Autoregressive (AR) Models

What if **past values of $y$ itself** help predict current $y$?

**AR(1) model:**
$$\boxed{y_t = \rho y_{t-1} + e_t}$$

**AR(q) model:**
$$y_t = \alpha + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \phi_q y_{t-q} + e_t$$

> [!info] Why AR models matter
> Many economic series are **persistent** — GDP this quarter is very similar to GDP last quarter, exchange rates tomorrow look like exchange rates today. AR models capture this persistence directly. They're the backbone of most macroeconomic forecasting.

### A critical limitation: strict exogeneity cannot hold

In an AR(1): $y_{t-1}$ is the regressor, and it's correlated with $e_{t-1}$ (because $y_{t-1}$ is partly determined by $e_{t-1}$). So $\text{cov}(y_{t-1}, e_{t-1}) \neq 0$ — strict exogeneity is violated by construction.

This means:
- ✅ AR models are **consistent** (under weak exogeneity / contemporaneous exogeneity, which does hold)
- ❌ AR models are **necessarily biased** in finite samples

> [!tip] Weak vs. strict exogeneity in AR models
> Weak exogeneity ($\mathbb{E}[e_t \mid y_{t-1}] = 0$) can plausibly hold — knowing last period's $y$ shouldn't help predict this period's error. That's enough for consistency. Strict exogeneity would require $e_t$ to be uncorrelated with **future** $y$ — impossible if $y_{t+1}$ depends on $y_t$.

---

## 📅 Combining AR and DL: The ADL Model

The most general and flexible time series model:

$$y_t = \alpha + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \delta_0 x_t + \delta_1 x_{t-1} + \cdots + \beta Z + e_t$$

This is an **Autoregressive Distributed Lag (ADL)** model. It allows for:
- Inertia in $y$ (AR terms)
- Lagged effects of $x$ (DL terms)
- Other controls $Z$

> [!example] Predicting Global Temperature from CO2
> $$\text{temp}_t = \alpha + \phi_1 \text{temp}_{t-1} + \phi_2 \text{temp}_{t-2} + \delta_0 \text{CO2}_t + \delta_1 \text{CO2}_{t-1} + \cdots + e_t$$
> Temperature is persistent (AR terms capture momentum) but also responds to CO2 with a distributed lag effect. ADL handles both.

---

## 🌊 Seasonality

Many time series exhibit **seasonality** — predictable, regular patterns tied to the calendar.

**Examples:**
- Construction activity peaks in summer (weather-dependent)
- Cheese sales spike around Shavuot
- "Matzo" Google searches spike every Passover

### Handling seasonality: seasonal dummy variables

For monthly data (January as the reference/control group):

$$y_t = \beta_0 + \delta_1 \text{Feb}_t + \delta_2 \text{Mar}_t + \cdots + \delta_{11} \text{Dec}_t + \beta_1 x_{t1} + \cdots + u_t$$

For quarterly data (Q4 as reference):

$$y_t = \beta_0 + \delta_1 q1_t + \delta_2 q2_t + \delta_3 q3_t + \beta_1 x_{t1} + \cdots + u_t$$

- Each seasonal dummy captures how much higher/lower the outcome is in that month/quarter compared to the reference period, holding everything else constant.
- The **reference category** (excluded dummy) is absorbed into $\beta_0$.

> [!note] Seasonally adjusted data
> Some macroeconomic data from statistical agencies (e.g. GDP, unemployment) are already "seasonally adjusted" — the seasonal patterns have been removed before you receive the data. Check your data source: if it's already seasonally adjusted, don't add seasonal dummies again.

---

## 🗂️ Summary: Time Series Model Types

| Model | Formula | When to use |
|---|---|---|
| **Static** | $y_t = \beta_0 + \beta_1 x_t + u_t$ | $x$ affects $y$ instantly, no carry-over |
| **Distributed Lag (DL)** | $y_t = \alpha + \delta_0 x_t + \delta_1 x_{t-1} + \cdots + u_t$ | $x$ has lagged effects on $y$ |
| **Autoregressive (AR)** | $y_t = \alpha + \phi_1 y_{t-1} + \cdots + e_t$ | $y$'s own past predicts its future |
| **ADL** | Combines AR + DL | General purpose — both inertia and lagged effects |

---

## 🎯 Summary

1. **Simultaneous equations models** create endogeneity because price and quantity are jointly determined. OLS on either equation is biased.
2. **IV solves identification**: use supply shifters (weather) to identify demand, and demand shifters (day of week) to identify supply.
3. **Serial correlation** means residuals are correlated over time — this leaves coefficients consistent but makes standard errors wrong. Fix with **HAC (Newey-West) standard errors**.
4. **Strict exogeneity** (TS.2) requires the error to be uncorrelated with $x$ at all time periods — past, present, and future. Contemporaneous exogeneity (A2) only requires independence at the same period.
5. **Distributed lag models** let $x$ affect $y$ over multiple periods. Each $\delta_k$ is the effect of $x$ at time $t$ on $y$ at time $t+k$.
6. **AR models** include lagged $y$ as a regressor — consistent but necessarily biased in finite samples.
7. **Seasonality** is handled with dummy variables for each month or quarter (minus one for the reference category).

---

## 📎 Related Notes

- Previous: [[Lec_05-Sample Selection & Heckman Correction]] — selection bias, Heckman two-step
- Hub: [[Econometrics]]
- Key IV concepts: [[Instrumental Variables]], [[Endogeneity]], [[Two Stage Least Squares]]
- Key time series concepts: [[Serial Correlation]], [[Distributed Lag Model]], [[Autoregressive Model]], [[Strict Exogeneity]], [[HAC Standard Errors]], [[Seasonality]]
- Methods: [[Static Model]], [[Simultaneous Equations Model]]
