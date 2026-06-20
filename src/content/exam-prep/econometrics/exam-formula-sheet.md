---
title: "Exam Formula Sheet (Lec 1–10)"
subject: econometrics
type: reference
description: "One-page-per-topic exam reference — every key term, formula, interpretation, and what-to-do tip from Lectures 1–10. Built for the closed-book final."
course: Applied Econometrics
instructor: Dr. Aluma Dembo
semester: 2
year: 2
order: 1
pinned: true
tags:
  - econometrics
  - exam-prep
  - formula-sheet
  - reference
  - cheat-sheet
aliases:
  - Formula Sheet
  - Econometrics Cheat Sheet
  - Exam Reference
---



> Part of: [[Econometrics]] · Glossary: [[_Econometrics Concepts]]
> **Scope:** the whole Sem-2 causal-inference toolkit. Each section = one lecture: key terms → formulas → how to read them → exam tips.
> **Default everywhere:** 5% significance, two-sided; reject if $|t|>1.96$ (or $p<0.05$). Standard errors are robust/clustered unless told otherwise.

---

## 🧭 0. Method picker — "which tool does this question want?"

| You see in the question… | Reach for | Lecture |
|---|---|---|
| Binary outcome $y\in\{0,1\}$, want simple/linear answer | [[_Econometrics Concepts#Linear Probability Model\|LPM]] (OLS + robust SE) | L2 |
| Binary outcome, want valid probabilities / non-constant effect | [[_Econometrics Concepts#Logit Model\|Logit]] / [[_Econometrics Concepts#Probit Model\|Probit]] | L3 |
| Regressor correlated with the error (OVB, reverse causality, simultaneity) | [[_Econometrics Concepts#Instrumental Variables\|IV / 2SLS]] | L4, L6 |
| Outcome only observed for a self-selected subsample | [[_Econometrics Concepts#Heckman Selection Model\|Heckman]] two-step | L5 |
| Price & quantity (supply/demand) jointly determined | [[_Econometrics Concepts#Simultaneous Equations Model\|Simultaneous eqns]] + IV | L6 |
| Data over time, errors correlated across periods | HAC / [[_Econometrics Concepts#Serial Correlation\|serial corr.]] fix | L6 |
| Both variables trend upward over time | [[_Econometrics Concepts#Detrending\|detrend]] / add $t$ | L7 |
| Effect of one dated event on an outcome | [[_Econometrics Concepts#Event Study\|Event study]] | L7 |
| Same units over time + unobserved fixed traits | [[_Econometrics Concepts#Fixed Effects\|Fixed effects]] (demeaning) | L8 |
| Treatment switches at a threshold of some variable | [[_Econometrics Concepts#Regression Discontinuity\|RDD]] | L9 |
| Treatment vs control, before vs after a policy | [[_Econometrics Concepts#Difference-in-Differences\|DiD]] | L10 |

> [!tip] First move on every applied question
> **(1)** Is the outcome binary? **(2)** Is the key regressor exogenous, or is there a confounder / reverse causality / selection? **(3)** What's the data structure — cross-section, time series, or panel? Those three answers pin down the method.

---

## 📐 1. Foundations recap (assumed from Intro Metrics)

### Classical assumptions — [[_Econometrics Concepts#Classical Assumptions A1-A5|A1–A5]]

A1 linear in parameters · A2 random sampling · A3 no perfect collinearity · **A4 zero conditional mean $\mathbb{E}[u\mid X]=0$** (the causal one) · **A5 homoskedasticity $\text{Var}(u\mid X)=\sigma^2$**. Under A1–A5, OLS is **BLUE**.

> Course convention (varies by source): A3 = independent errors / A4 = $\mathbb E[u\mid x]=0$ / A5 = homoskedastic. Read the question's numbering — the *content* is what matters.

### t-test (single coefficient)

$$\hat t=\frac{\hat\beta_j-\beta_j^{0}}{\text{se}(\hat\beta_j)}\ \sim\ t_{\,n-k-1}\qquad H_0:\beta_j=0\Rightarrow \hat t=\frac{\hat\beta_j}{\text{se}(\hat\beta_j)}$$

Reject $H_0$ if $|\hat t|>t_{crit}\approx1.96$ (large $n$, 5%).

### F-test (joint / nested models) — [[_Econometrics Concepts#F-test|F-test]]

$$F=\frac{(\text{RSS}_R-\text{RSS}_{UR})/q}{\text{RSS}_{UR}/(n-k-1)}\ \sim\ F_{q,\,n-k-1}$$

$q$ = number of restrictions (regressors dropped). Large $F$ / small $p$ ⇒ **reject** that the dropped variables are jointly zero. In R: `anova(unrestricted, restricted)`.

### Confidence interval

$$\hat\beta_j\ \pm\ t_{crit}\cdot\text{se}(\hat\beta_j)\quad(\approx\hat\beta_j\pm1.96\,\text{se})$$

### Functional-form interpretation (quick table)

| Model | Coefficient $\beta_1$ means… |
|---|---|
| level–level $y=\beta_0+\beta_1x$ | $\Delta x=1\Rightarrow \Delta y=\beta_1$ (units) |
| log–level $\log y=\beta_0+\beta_1x$ | $\Delta x=1\Rightarrow y$ changes $\approx100\beta_1\%$ |
| level–log $y=\beta_0+\beta_1\log x$ | $x$ up 1% $\Rightarrow \Delta y\approx\beta_1/100$ |
| log–log | $\beta_1$ = elasticity (% per %) |

---

## 📚 2. Lecture 1 — Causal inference & treatment effects

**Goal:** read $\hat\beta_1$ as *causal*, not just correlational. Requires ruling out **confounders**, **reverse causality**, **selection**.

- **Data types:** cross-section · [[_Econometrics Concepts#Time Series|time series]] · [[_Econometrics Concepts#Panel Data|panel]] · repeated cross-section.
- **Exogenous (X) → endogenous (Y):** the arrow is causal only if X varies independently of everything else affecting Y.
- **Continuous vs dummy regressor:** with few discrete values, use [[_Econometrics Concepts#Dummy Variables|dummies]] (one per level, minus a reference). Dummies are *flexible* (each level free); a continuous slope forces one straight line — test it with a joint F-test on the dummies.
- **Panel breaks A3/A4:** repeated obs per unit ⇒ errors correlated within unit ⇒ classical SEs too small. Quick fix: subsample one obs/unit. Proper fix: fixed effects + clustered SEs (L8).

> [!tip] Exam tip
> "Is this coefficient causal?" → name the specific confounder / reverse-causality / selection story, state $\text{Cov}(x,u)\neq0$, then say which tool (control, FE, IV, RDD, DiD) shuts that path.

---

## 📚 3. Lecture 2 — Linear Probability Model (LPM)

Binary $y\in\{0,1\}$ run through OLS. Under A2, the fit **is a probability**:

$$\mathbb{E}[y\mid x]=P(y=1\mid x)=\beta_0+\beta_1x$$

- **Coefficient = [[_Econometrics Concepts#Marginal Effects|marginal effect]] in percentage points** (constant). $\beta_1=\partial P(y=1)/\partial x$. Dummy coef = difference in $P(y=1)$ vs base group.
- **Drawback 1 — unbounded:** $\hat y$ can fall below 0 or exceed 1 (nonsense probabilities). → motivates logit/probit.
- **Drawback 2 — built-in heteroskedasticity (always):**

$$\text{Var}(u\mid x)=p(x)\,[1-p(x)]\quad(\text{max }0.25\text{ at }p=0.5)$$

- **Fix for drawback 2:** **robust (HC) standard errors** — mandatory for any LPM. $\hat\beta$ stays unbiased; only SEs were wrong. R: `feols(y ~ x, se="hetero")`.

> [!tip] Exam tip
> If the outcome is 0/1, **every `lm`/`feols` is an LPM** — interpret coefficients in pp and expect robust/clustered SEs. Saying "$\hat y$ can leave [0,1]" + "errors are heteroskedastic by construction" earns the two standard marks.

---

## 📚 4. Lecture 3 — Logit & Probit (discrete choice)

Wrap the linear index in a CDF $G$ so $P\in(0,1)$:

$$P(y=1\mid\mathbf x)=G(\mathbf x'\boldsymbol\beta),\qquad \mathbf x'\boldsymbol\beta=\beta_0+\beta_1x_1+\dots+\beta_kx_k$$

| | $G$ (CDF) | density $g$ | R |
|---|---|---|---|
| **Logit** | $\dfrac{e^{\mathbf x'\beta}}{1+e^{\mathbf x'\beta}}$ | `dlogis` | `glm(...,family=binomial(link="logit"))` |
| **Probit** | $\Phi(\mathbf x'\beta)$ | `dnorm` | `glm(...,family=binomial(link="probit"))` |

$G$ is increasing, S-shaped, → 0/1 at the tails, **steepest at $\mathbf x'\beta=0$** ($P=0.5$), symmetric $G(z)=1-G(-z)$.

### Marginal effects (the key formula)

$$\frac{\partial P(y=1)}{\partial x_j}=g(\mathbf x'\boldsymbol\beta)\cdot\beta_j$$

Non-constant — depends where you sit on the curve. **Evaluate at sample means** $g(\bar{\mathbf x}'\hat{\boldsymbol\beta})\cdot\hat\beta_j$ for "the average person."

- **Raw coef → sign & significance only**, NOT magnitude. Never compare raw coef magnitudes across LPM/logit/probit; **do** compare marginal effects.
- **Estimation = [[_Econometrics Concepts#Maximum Likelihood Estimation|MLE]]** (model is non-linear, OLS invalid). Log-likelihood:

$$\log\mathcal L(\boldsymbol\beta)=\sum_i\big[y_i\log G(\mathbf x_i'\boldsymbol\beta)+(1-y_i)\log(1-G(\mathbf x_i'\boldsymbol\beta))\big]$$

### Joint testing = [[_Econometrics Concepts#Likelihood Ratio Test|Likelihood Ratio test]] (replaces F)

$$LR=2\big[\log\mathcal L_{UR}-\log\mathcal L_{R}\big]\ \sim\ \chi^2_{q}$$

$q$ = # restrictions. Reject if $LR>\chi^2_{crit}(q)$. R: `lrtest(ur, r)`.

> [!tip] Exam tip
> Recipe for a marginal effect: (1) get $\hat\beta$; (2) compute $\bar{\mathbf x}'\hat\beta$ at the means; (3) multiply by $g(\cdot)$ — `dnorm` (probit) / `dlogis` (logit). If only sign asked, just read the coefficient sign + $p$/$z$.

---

## 📚 5. Lecture 4 — Instrumental Variables & 2SLS

**Problem:** [[_Econometrics Concepts#Endogeneity|endogeneity]] $\text{Cov}(x,u)\neq0$ (OVB, reverse causality, simultaneity) ⇒ OLS **biased & inconsistent** (more data doesn't help).

**Fix:** an instrument $z$ that moves $x$ but not $y$ directly. Two conditions:

| Condition | Formula | Testable? |
|---|---|---|
| **[[_Econometrics Concepts#Instrument Relevance\|Relevance]]** | $\text{Cov}(z,x)\neq0$ | ✅ first-stage **F > 10** |
| **[[_Econometrics Concepts#Instrument Validity\|Validity]]** (exclusion) | $\text{Cov}(z,u)=0$ | ❌ argue conceptually |

### 2SLS

- **First stage:** $x=\gamma_0+\gamma_1 z+(\text{controls})+\varepsilon\Rightarrow\hat x$
- **Second stage:** $y=\beta_0+\beta_1\hat x+(\text{controls})+u$
- **Simple IV estimator:** $\hat\beta_1^{IV}=\dfrac{\text{Cov}(y,z)}{\text{Cov}(x,z)}$

R (correct SEs): `feols(y ~ controls | x ~ z)`. **Never** run two manual `lm`s (wrong second-stage SEs).

- **# instruments ≥ # endogenous regressors** (need ≥2 instruments for 2 endogenous vars).
- **[[_Econometrics Concepts#Weak Instruments|Weak instrument]]** (F<10): tiny denominator amplifies bias — can be worse than OLS.
- **IV estimates [[_Econometrics Concepts#Local Average Treatment Effect|LATE]]**, not ATE — the effect for *compliers* (those whose $x$ moves with $z$).
- IV is **less precise** than OLS (larger SEs) — the price of consistency.
- **[[_Econometrics Concepts#Overidentifying Restrictions Test|Sargan/overid test]]** (only if overidentified): $H_0$ = all instruments valid. Reject ⇒ ≥1 invalid.
- **[[_Econometrics Concepts#Wu-Hausman Test|Wu–Hausman]]:** $H_0$ = regressor exogenous (OLS fine). Reject ⇒ IV needed.

> [!tip] Exam tip
> To defend an instrument, write **both** conditions explicitly with the covariance, show relevance via first-stage F, then give a *one-sentence story* for why $z$ can't reach $y$ except through $x$ — and a sentence on how it could fail. Validity can never be "proven from a table."

---

## 📚 6. Lecture 5 — Sample selection & Heckman

### Consistency vs unbiasedness

- **Unbiased:** $\mathbb E[\hat\beta]=\beta$ (right on average, any $n$).
- **[[_Econometrics Concepts#Consistency|Consistent]]:** $\hat\beta\to\beta$ as $n\to\infty$.
- OLS with endogenous $x$: **biased AND inconsistent**. 2SLS: **biased in small samples but consistent**.

### Sample selection — you only observe $y$ when $s_i=1$

| Type | Selection depends on | OLS |
|---|---|---|
| Random | nothing | ✅ unbiased |
| Exogenous | $x$ only (observed) | ✅ unbiased |
| **[[_Econometrics Concepts#Endogenous Selection\|Endogenous]]** | $u$ (unobservables affecting $y$) | ❌ **biased** |

### [[_Econometrics Concepts#Mincer Wage Equation|Mincer]] running example

$$\log\text{wage}=\beta_0+\beta_1\text{educ}+\beta_2\text{exper}+\beta_3\text{exper}^2+u$$

### Heckman two-step ("Heckit")

- **Step 1 (full sample, probit):** $P(s_i=1\mid z)=\Phi(z_i'\gamma)$. Need an **exclusion restriction** — a variable in $z$ that affects *selection* but not the *outcome* (e.g. kids under 6 → labour-force participation, not the wage). Compute [[_Econometrics Concepts#Inverse Mills Ratio|inverse Mills ratio]]:

$$\hat\lambda_i=\frac{\phi(z_i'\hat\gamma)}{\Phi(z_i'\hat\gamma)}$$

- **Step 2 (selected sample, OLS):** add $\hat\lambda_i$ as a regressor:

$$\log\text{wage}_i=\beta_0+\beta_1\text{educ}_i+\dots+\rho\,\hat\lambda_i+\text{error}$$

- **Test for selection bias:** $H_0:\rho=0$. Reject ⇒ endogenous selection present, correction matters.

> [!tip] Exam tip
> Heckman mirrors 2SLS: step 1 builds a correction term, step 2 adds it as a control. Always state the exclusion-restriction variable and what testing $\rho=0$ tells you.

---

## 📚 7. Lecture 6 — Simultaneous equations & time series

### Simultaneous equations (supply & demand)

Price & quantity jointly determined ⇒ $\text{Cov}(P,u)\neq0$ in **both** equations ⇒ OLS biased. **Fix:** a shifter of *one* curve instruments price to trace the *other*.

- **Weather** shifts supply → identifies the **demand** curve.
- **Day of week** shifts demand → identifies the **supply** curve.

### [[_Econometrics Concepts#Serial Correlation|Serial correlation]]

$\text{Cov}(u_t,u_{t-1})\neq0$. OLS stays **unbiased & consistent** but **not efficient** and **SEs are wrong** (too small) ⇒ invalid $t$/$F$.

- **Test:** regress $\hat u_t=\rho\hat u_{t-1}+e_t$; $H_0:\rho=0$.
- **Fix:** [[_Econometrics Concepts#HAC Standard Errors|HAC (Newey–West)]] SEs — coefficients unchanged, SEs widened. R: `vcov="newey_west"`.

### Time-series OLS assumptions

- **TS.2 [[_Econometrics Concepts#Strict Exogeneity|Strict exogeneity]]** $\mathbb E[u_t\mid\mathbf X]=0$ for **all** $t$ (past, present, future) → unbiasedness.
- Contemporaneous exogeneity $\mathbb E[u_t\mid x_t]=0$ → consistency only.
- TS.3 homoskedastic · TS.4 no serial corr · TS.5 normal.

### Model zoo

| Model | Equation | Use |
|---|---|---|
| **[[_Econometrics Concepts#Static Model\|Static]]** | $y_t=\beta_0+\beta_1x_t+u_t$ | instant effect only |
| **[[_Econometrics Concepts#Distributed Lag Model\|Distributed lag]]** | $y_t=\alpha_0+\delta_0x_t+\delta_1x_{t-1}+\dots+\delta_qx_{t-q}+u_t$ | lagged effects |
| **[[_Econometrics Concepts#Autoregressive Model\|AR]]** | $y_t=\alpha+\phi_1y_{t-1}+\dots+e_t$ | persistence |
| **ADL** | AR + DL together | general |

- DL: $\delta_0$ = impact effect; $\sum_{k}\delta_k$ = **long-run multiplier**. Lags are collinear ⇒ individual $\delta_k$ imprecise but the sum can be well-identified.
- AR: $y_{t-1}$ correlates with $e_{t-1}$ ⇒ strict exogeneity fails ⇒ **consistent but biased in finite samples**.
- **[[_Econometrics Concepts#Seasonality|Seasonality]]:** add seasonal dummies (11 months or 3 quarters, one omitted as reference). Skip if data already seasonally adjusted.

---

## 📚 8. Lecture 7 — Time trends & event studies

### Deterministic trends

- **Linear:** $y_t=\alpha_0+\alpha_1 t+e_t$ — $\alpha_1$ = change per period.
- **Exponential:** $\log y_t=\alpha_0+\alpha_1 t+e_t$ — $\alpha_1\approx$ growth rate per period.

### [[_Econometrics Concepts#Spurious Regression|Spurious regression]]

Two trending series ⇒ huge $R^2$ + "significant" coef even if unrelated (OLS picks up shared drift). **Two equivalent fixes** (same $\hat\beta_1$ by Frisch–Waugh–Lovell):

1. **Add $t$ as a regressor:** $y_t=\beta_0+\beta_1x_t+\alpha t+u_t$.
2. **[[_Econometrics Concepts#Detrending|Detrend]] both:** regress $y$ and $x$ on $t$, keep residuals $\ddot y,\ddot x$, then regress $\ddot y$ on $\ddot x$.

### [[_Econometrics Concepts#Event Study|Event study]]

- **[[_Econometrics Concepts#Estimation Period|Estimation period]]** (pre-event): fit a "normal" model, e.g. $R_t^{\text{stock}}=\beta_0+\beta_1R_t^{\text{market}}+u_t$.
- **[[_Econometrics Concepts#Abnormal Returns|Abnormal return]]:** $AR_t=R_t^{\text{actual}}-\hat R_t^{\text{predicted}}$.
- **Dummy version:** add `day.before`, `day.of`, `day.after` dummies; their coefficients $\hat\gamma$ are the ARs. Significant $\hat\gamma_0$ = event effect; significant $\hat\gamma_{-1}$ = anticipation/leak.
- Use **trading days**, not calendar days. Watch for confounding events near the window.

---

## 📚 9. Lecture 8 — Fixed effects in panel data

**Panel** = same units over time ⇒ compare a unit to itself, controlling for all its **time-invariant** traits.

$$\boxed{y_{it}=\beta_0+\beta_1x_{it}+a_i+u_{it}}$$

$a_i$ = [[_Econometrics Concepts#Individual Fixed Effect|individual fixed effect]] — absorbs everything stable about $i$ (observed or not).

- **[[_Econometrics Concepts#Between Variation|Between]]** variation (across-unit means) = confounded. **[[_Econometrics Concepts#Within Variation|Within]]** variation (unit vs its own mean) = clean.
- **[[_Econometrics Concepts#Within Estimator|Within estimator]] / [[_Econometrics Concepts#Demeaning|demeaning]]:** subtract each unit's mean, $\ddot y_{it}=y_{it}-\bar y_i$, then OLS:

$$\hat\beta_1^{\text{within}}=\frac{\sum_i\sum_t\ddot x_{it}\ddot y_{it}}{\sum_i\sum_t\ddot x_{it}^2}$$

Equivalent to adding a dummy per unit (FWL theorem). Time-invariant variables **drop out** (can't be estimated).

- **[[_Econometrics Concepts#Time Fixed Effects|Time FE]]:** dummy per period (absorbs shocks common to all units). **[[_Econometrics Concepts#Two-Way Fixed Effects|Two-way FE]]:** unit + time. Interacted (city×month) absorbs cell-specific effects.
- R: `feols(y ~ x | unit)` · `feols(y ~ x | city + month)` · `feols(y ~ x | city^month)`.

### Standard-error chooser

| SE type | When | R |
|---|---|---|
| Robust (Huber–White, HC) | heteroskedasticity | `vcov="hetero"` |
| HAC (Newey–West) | time series, serial corr | `vcov="newey_west"` |
| **[[_Econometrics Concepts#Clustered Standard Errors\|Clustered]]** | panel / FE | `cluster=~unit` |

> [!tip] Exam tip
> "Why FE over OLS?" → name the **time-invariant confounder**, show $a_i$ absorbs it by demeaning (anything constant within a unit subtracts to 0), and **cluster SEs at the FE level**. Put the FE at the level where the confounder is constant.

---

## 📚 10. Lecture 9 — Regression Discontinuity (RDD)

Treatment switches at a **[[_Econometrics Concepts#Cutoff|cutoff]]** of a **[[_Econometrics Concepts#Running Variable|running variable]]**. Units just on either side are comparable ⇒ the **jump in the outcome at the cutoff = the effect**.

- **[[_Econometrics Concepts#Continuity Assumption|Continuity]]:** absent treatment, the outcome would pass smoothly through the cutoff (credible because units can't *perfectly* sort).
- Gives a **[[_Econometrics Concepts#Local Average Treatment Effect|LATE]]** at the threshold: strong internal, weak external validity.

### [[_Econometrics Concepts#Sharp RDD|Sharp]] RDD regression (center the running variable!)

$$Y=\beta_0+\beta_1(\text{R}-c)+\beta_2\text{Treated}+\beta_3\big[\text{Treated}\cdot(\text{R}-c)\big]+u$$

**Treatment effect = $\hat\beta_2$** (coefficient on the Treated dummy = the gap at the cutoff). Centering at $c$ makes $\beta_0$ and $\beta_0+\beta_2$ the two lines' heights *at the threshold*. Quadratic version adds $(\text R-c)^2$ terms — jump is still the coef on Treated.

### [[_Econometrics Concepts#Fuzzy RDD|Fuzzy]] RDD = IV at the cutoff

Cutoff only shifts the *probability* of treatment ⇒ "above cutoff" instruments "treated." [[_Econometrics Concepts#Wald Estimator|Wald estimator]]:

$$\text{effect}=\frac{\text{jump in outcome}}{\text{jump in treatment probability}}=\frac{\text{reduced form}}{\text{first stage}}$$

### Validity checks

- **[[_Econometrics Concepts#McCrary Density Test|McCrary density test]]:** is the *count* of units smooth at the cutoff? A jump ⇒ manipulation/sorting.
- **[[_Econometrics Concepts#Placebo Test|Placebo test]]:** do *predetermined covariates* jump at the cutoff? They shouldn't.
- **[[_Econometrics Concepts#Bandwidth|Bandwidth]] & functional form:** narrow window so a line fits locally; check estimate is **stable across bandwidths**. Avoid high-order polynomials. R: `rdrobust(y, x, c=0)`, `rdbwselect`.

> [!tip] Exam tip
> Read the jump off the **Treated coefficient**. Always state continuity, that it's a local effect, and the two diagnostic tests (McCrary = data density; placebo = covariates). For fuzzy, report first-stage strength.

---

## 📚 11. Lecture 10 — Difference-in-Differences (DiD)

Two groups (treatment/control) × two periods (before/after). Works on **[[_Econometrics Concepts#Repeated Cross Sections|repeated cross-sections]]** (same individuals not needed). Estimand = **[[_Econometrics Concepts#Average Treatment Effect on the Treated|ATT]]**.

### Estimator (difference of differences)

$$\hat\delta_1=\underbrace{(\bar y_{2,T}-\bar y_{1,T})}_{\text{treat change}}-\underbrace{(\bar y_{2,C}-\bar y_{1,C})}_{\text{control change}}=\underbrace{(\bar y_{2,T}-\bar y_{2,C})}_{\text{after gap}}-\underbrace{(\bar y_{1,T}-\bar y_{1,C})}_{\text{before gap}}$$

The control's change = the **[[_Econometrics Concepts#Counterfactual|counterfactual]]** common trend you subtract off.

### As a regression (gives SEs + controls)

$$y_i=\beta_0+\delta_0\,d2_i+\beta_1\,dT_i+\delta_1(d2_i\cdot dT_i)+u_i$$

$d2$ = after dummy, $dT$ = treatment dummy. **DiD effect = $\delta_1$ (the interaction)**. Maps to the 2×2 table: $\beta_0$ = control-before, $\delta_0$ = time trend, $\beta_1$ = fixed group gap, $\delta_1$ = effect. With many groups/periods this *is* [[_Econometrics Concepts#Two-Way Fixed Effects|two-way FE]].

### Validity

1. **[[_Econometrics Concepts#Parallel Trends Assumption|Parallel trends]]** (the big one) — absent treatment, both groups move together. Can't prove; inspect pre-trends.
2. No coincident shock to the control group.
3. Groups comparable. Adding controls/FE ⇒ *conditional* parallel trends.

> [!tip] Exam tip
> Compute $\delta_1$ from the 2×2 means (either difference order — same answer). If significance asked, it's the interaction coef in the regression. Always name **parallel trends** as the identifying assumption.

---

## 🧮 12. Standard-error & test quick-reference

| Situation | Use | Test it with |
|---|---|---|
| Heteroskedasticity (incl. **any LPM**) | Robust HC SEs | (heteroskedasticity is assumed) |
| Time-series serial correlation | HAC / Newey–West | $\hat u_t$ on $\hat u_{t-1}$, $H_0:\rho=0$ |
| Panel / fixed effects | Clustered SEs (at FE level) | — |
| Joint significance (OLS/LPM) | F-test | `anova()` |
| Joint significance (logit/probit) | LR test $\chi^2_q$ | `lrtest()` |
| Endogeneity present? | — | Wu–Hausman |
| All instruments valid? (overid) | — | Sargan/Hansen |

**Critical values (5%, large $n$):** $t,z\approx1.96$ · $\chi^2_1=3.84$, $\chi^2_2=5.99$, $\chi^2_3=7.81$, $\chi^2_4=9.49$ · weak-instrument first-stage **F > 10**.

---

## 📝 13. Exam question playbook

**"Interpret this coefficient."** Identify the model first. LPM → pp change in $P(y=1)$. Log-dep → $\approx100\beta\%$. Logit/probit raw → sign & significance only (magnitude needs $g(\cdot)\beta$). State significance: $|t|>1.96$ or $p<0.05$.

**"Is $\hat\beta$ causal / what's wrong with OLS here?"** Name the mechanism — confounder (OVB), reverse causality, simultaneity, or selection — write $\text{Cov}(x,u)\neq0$, then prescribe the fix (control / FE / IV / Heckman / RDD / DiD).

**"Draw / update the causal diagram."** Put the confounder as a node with arrows into *both* the regressor and the outcome; that backdoor path is the bias. Unobserved confounder sits in $u$.

**"Evaluate this instrument."** Relevance $\text{Cov}(z,x)\neq0$ (first-stage F>10, testable) + validity $\text{Cov}(z,u)=0$ (argue, untestable). Give one failure story.

**"Compute the DiD / RDD effect."** DiD = difference of the two changes (= interaction $\delta_1$). RDD = coefficient on the Treated dummy (centered running var). Fuzzy RDD = outcome jump ÷ treatment-prob jump.

**"Which SEs and why?"** Heteroskedasticity → robust; time series → Newey–West; panel/FE → clustered. Default homoskedastic SEs are almost never right in this course.

**"State the identifying assumption."** IV → exclusion restriction. FE → confounder is time-invariant. RDD → continuity (no sorting). DiD → parallel trends. Heckman → exclusion variable in selection eqn.

---

> [!summary] The 6 estimators in one breath
> **LPM** = OLS on 0/1 (pp, robust SE). **Logit/Probit** = CDF squashes to (0,1), ME = $g(\cdot)\beta$, MLE + LR test. **IV/2SLS** = borrow exogenous variation, relevance + validity, LATE. **Heckman** = probit selection → add IMR. **Fixed effects** = demean to kill time-invariant confounders, cluster SEs. **RDD** = jump at a cutoff (continuity). **DiD** = difference of differences (parallel trends).
