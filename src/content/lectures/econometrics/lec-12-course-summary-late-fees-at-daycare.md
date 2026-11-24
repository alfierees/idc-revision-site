---
title: Course Summary (Late Fees at Daycare)
week: 12
semester: 2
year: 2
academic_year: "2025-26"
course: Applied Econometrics
lecture: "Lecture 12 — Course Summary"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - omitted-variable-bias
  - linear-probability-model
  - probit-model
  - likelihood-ratio-test
  - fixed-effects
  - difference-in-differences
  - dynamic-did
  - heckman-selection-model
  - hac-standard-errors
  - panel-data
aliases:
  - Course Summary
  - Course Overview
  - Daycare Late Fee Example
  - Gneezy Rustichini
subject: econometrics
in_scope: true
---

# Course Summary (Late Fees at Daycare)

> Part of: [[Econometrics]]
> **Lecture 12** — Applied Econometrics, Dr. Aluma Dembo
>
> 📄 Slides: [Lecture 12 deck (PDF)](/papers/econometrics/lecture-12-course-summary.pdf)
> Previous: [[Lec_11-Difference-in-Differences II (Dynamic DiD)]] | Next: [[Lec_13-Course Review]]
> Key concepts: [[_Econometrics Concepts#Omitted Variable Bias|Omitted Variable Bias]], [[_Econometrics Concepts#Deterministic Time Trend|Deterministic Time Trend]], [[_Econometrics Concepts#Fixed Effects|Fixed Effects]], [[_Econometrics Concepts#HAC Standard Errors|HAC Standard Errors]], [[_Econometrics Concepts#Linear Probability Model|Linear Probability Model]], [[_Econometrics Concepts#Probit Model|Probit Model]], [[_Econometrics Concepts#Likelihood Ratio Test|Likelihood Ratio Test]], [[_Econometrics Concepts#Difference-in-Differences|Difference-in-Differences]], [[_Econometrics Concepts#Dynamic Difference-in-Differences|Dynamic Difference-in-Differences]], [[_Econometrics Concepts#Heckman Selection Model|Heckman Selection Model]]
> Builds on: nearly every earlier lecture ([[Lec_02-Linear Probability Model (LPM)]], [[Lec_03-Logit & Probit Models]], [[Lec_05-Sample Selection & Heckman Correction]], [[Lec_06-Simultaneous Equations & Time Series]], [[Lec_08-Fixed Effects in Panel Data]], [[Lec_10-Difference-in-Differences]])

---

## 🗺️ What this lecture is

A **tour of the whole course on one dataset.** The methods covered this semester are:

| Block | Methods |
|---|---|
| Binary outcomes | [[_Econometrics Concepts#Linear Probability Model\|LPM]], logit / probit |
| Endogeneity | [[_Econometrics Concepts#Instrumental Variables\|Instrumental variables]], sample selection, simultaneous equations |
| Time | Time-series event studies |
| Design-based | Regression discontinuity, difference-in-differences |
| Panels | Fixed effects and clustered standard errors |

Instead of a new topic, the lecture re-runs several of these on a single running example and shows how each step fixes a problem with the step before. **Use it as a model answer for "walk me through an analysis" questions.** (The next lecture, [[Lec_13-Course Review]], says which blocks are examinable.)

> [!note] Not every method gets used here
> The daycare example walks through OLS, omitted-variable bias, time trends, fixed effects, LPM/probit, DiD (static and dynamic) and Heckman selection. IV, RDD and simultaneous equations are in the overview list but are **not** applied to this dataset in the slides.

---

## 🏫 The running example — Gneezy & Rustichini (2000)

**Question:** what is the effect of imposing a **late fee** on parents who pick their children up late from daycare?

| Design fact | Value |
|---|---|
| Setting | 10 private daycare centres in Haifa, Jan to Jun 1998 |
| Pickup time | 16:00 (late pickups counted up to 16:30) |
| Treatment | A fine of **10 NIS per 10 minutes late, per child** |
| Who was treated | **6 centres** treated, **4 never** treated (the control group) |
| Timing | Fee introduced in **week 5**, removed at the start of **week 17**; the study ran **20 weeks** |

![[Lec12_treated_centers_average.png|620]]

**Reading the figure** *(the lecture's own chart, treated centres only)*. Late pickups are low and flat (about 8 per week) for weeks 1–5, **rise sharply once the fee starts** and stay high. They do **not** fall back after the fee is removed in week 17.

> [!info] Wide vs long data
> The raw table has one row per centre and one column per week: the **wide** version. For regression we reshape to **long**: one row per centre-week with
> - `center` : which daycare centre
> - `week` : 1, …, 20
> - `fee` : =1 if centre $i$ has a late fee in week $t$
> - `children` : number of children enrolled in the centre
> - `late` : number of late pickups at centre $i$ in week $t$
>
> This is **panel data** ($i=1,\dots,N$ and $t=1,\dots,T$ for the same units), which is what lets us use fixed effects.

---

## 🧱 Step 1 — Baseline OLS and why it fails (`ols1`)

$$late_{it} = \beta_0 + \beta_1\, fee_{it} + u_{it}$$

OLS recovers the causal effect of the fee only if the error $u$ is **independent of** the fee ([[_Econometrics Concepts#Endogeneity|exogeneity]]). Estimated on the six treated centres (120 centre-weeks):

| | Estimate | Std. error | $p$ |
|---|---:|---:|---:|
| Intercept | 13.354 | 1.049 | <0.001 |
| `fee` | **3.090** | 1.355 | 0.024 |

This says the fee is associated with **about 3 more late pickups per week** (significant at 5%). But the slides then show why this is **not** credible.

### The omitted-variable problem

Look at the treated-centres chart above: late pickups are **trending upward** over the study. The lecture's argument: if `week` affects lateness and also relates to `fee`, then `week` hides inside $u$:

```mermaid
graph LR
    F["fee"] --> L["# of late pickups"]
    W["week (omitted)"] --> F
    W --> L
    class F,L,W internal-link;
```

> [!warning] Omitted-variable bias
> Because `week` is in $u$ (and, in the slide's causal diagram, points at `fee`), the OLS estimate $\hat\beta_1$ in `ols1` **no longer captures the effect of the fee** on late pickups. The fix is to **put the omitted variable in the model**.

---

## ⏳ Step 2 — Control for the time trend (`ols2`)

$$late_{it} = \beta_0 + \beta_1\, fee_{it} + \beta_2\, week_t + u_{it}$$

| | Estimate | Newey-West SE | $p$ |
|---|---:|---:|---:|
| Intercept | 5.821 | 1.019 | <0.001 |
| `fee` | **3.090** | 1.434 | 0.042 |
| `week` | 0.717 | 0.125 | <0.001 |

- $\hat\beta_2 = 0.717$ is **significantly different from 0**: each extra week adds about 0.7 late pickups regardless of the fee, so `week` really was an omitted variable.
- Standard errors are **Newey-West ([[_Econometrics Concepts#HAC Standard Errors|HAC]])**, the correction for **heteroskedasticity and serial correlation** ([[Lec_06-Simultaneous Equations & Time Series]]).
- Now the error is exogenous *given* `week`, so $\hat\beta_1$ again has a causal reading: holding the time trend fixed, the fee raises late pickups by about **3.1 per week**.
- **Interpreting `week` as a number:** it is a straight-line [[_Econometrics Concepts#Deterministic Time Trend|time trend]] (one common slope for all weeks).

> [!tip] Why is the fee estimate identical in `ols1` and `ols2`?
> The slides print $\hat\beta_1=3.090$ in both. My reading of the numbers (not stated on the slide): the fee is on in weeks 5 to 16, which is centred exactly on the middle of the 20 weeks, so `fee` and `week` are **uncorrelated in this sample**. Adding `week` therefore cannot move the fee coefficient, but it still soaks up residual variation and matters for the standard errors and the interpretation. The slides' omitted-variable argument is the **general lesson**; in this particular sample the bias happens to be zero.

---

## 🔁 Step 3 — Dummies for the post-fee weeks (`ols3`)

The fee is gone after week 16, yet lateness stays high. So add dummies for the weeks **after** the fee ends:

$$late_{it} = \beta_0 + \beta_1\, fee_{it} + \gamma_1\,\mathbb{1}\{week=17\} + \gamma_2\,\mathbb{1}\{week=18\} + \gamma_3\,\mathbb{1}\{week=19\} + \gamma_4\,\mathbb{1}\{week=20\} + u_{it}$$

| | Estimate | Newey-West SE | $p$ |
|---|---:|---:|---:|
| Intercept | 8.000 | 0.704 | <0.001 |
| `fee` | **8.444** | 1.366 | <0.001 |
| week 17 | 8.167 | 2.690 | 0.007 |
| week 18 | 11.333 | 3.786 | 0.007 |
| week 19 | 12.500 | 2.469 | <0.001 |
| week 20 | 10.833 | 2.231 | <0.001 |

**How to read the dummies.** Each $\gamma$ is how much higher lateness is in that post-fee week than in the **omitted baseline (the no-fee weeks before the fee)**, after accounting for the fee itself. All four are large and significant, so **lateness stays elevated even after the fine is removed**: the effect is **persistent**. With these dummies in, the fee coefficient is **8.4** late pickups per week (not 3.1), because the model no longer lumps the post-fee weeks in with the "no fee" baseline. *(The slide poses the question; this reading is mine, consistent with the lecturer's later remark on persistence.)*

---

## 🏠 Step 4 — Daycare-centre fixed effects (`fe1`)

Different parents may **select into** different centres, so each centre can have its own baseline lateness $a_i$:

$$late_{it} = a_i + \beta_1\, fee_{it} + \beta_2\, week_t + u_{it}$$

Implementation (two equivalent ways, [[Lec_08-Fixed Effects in Panel Data]]):

- add a dummy for every centre except one, **or**
- use **within estimation**: `feols(late ~ fee + week | center, ...)`.

| | Estimate | Newey-West SE | $p$ |
|---|---:|---:|---:|
| `fee` | **3.090** | 0.750 | <0.001 |
| `week` | 0.717 | 0.067 | <0.001 |

Within $R^2=0.534$ (adjusted $R^2=0.669$). The **point estimates are unchanged** (3.090 and 0.717) but the standard errors shrink a lot (fee SE 1.434 → 0.750), because the centre effects soak up variation that was previously in the error. *(My reading: the point estimates match because all six centres have the same fee timing, so `fee` and `week` are unrelated to which centre it is; the slide does not comment.)*

---

## 🎲 Step 5 — A binary outcome: LPM vs probit

Counts of late pickups depend on how many children a centre has, so the lecture switches to the **daily rate**:

$$pct.late_{it} = \frac{late_{it}}{children_{it}\times 5}$$

(the daily average share of late pickups, averaged over the 5 days in the week). Suppose management wants **fewer than 10% late pickups** each day. Define the binary outcome

$$over.10.pct_{it} = \mathbb{1}\{pct.late_{it}\ge 0.10\}$$

and ask: **what is the effect of the fee on the probability that more than 10% of pickups are late?**

### LPM

$$over.10.pct_{it} = \beta_0 + \beta_1\, fee_{it} + \beta_2\, week_{it} + u_{it}$$

| | Estimate | Newey-West SE | $p$ |
|---|---:|---:|---:|
| Intercept | −0.125 | 0.049 | 0.020 |
| `fee` | **0.208** | 0.106 | 0.065 |
| `week` | 0.036 | 0.009 | <0.001 |

The fee raises the probability of exceeding the 10% threshold by about **20.8 percentage points** (significant at 10%, not 5%).

> [!warning] Downsides of the LPM
> 1. **Heteroskedasticity** (handled here with Newey-West, "so OK"), and
> 2. **Predicted values can fall below 0 or above 1.** See [[Lec_02-Linear Probability Model (LPM)]].

### Probit

$$\mathbb{P}(over.10.pct_{it}=1) = G(\beta_0 + \beta_1\, fee_{it} + \beta_2\, week_{it})$$

where $G$ is the standard normal CDF.

| | Estimate | Std. error | $p$ |
|---|---:|---:|---:|
| Intercept | −2.929 | 0.689 | <0.001 |
| `fee` | **1.157** | 0.384 | 0.003 |
| `week` | 0.157 | 0.037 | <0.001 |

Probit coefficients are **not** marginal effects. The marginal effect is

$$g(\hat\beta_0+\hat\beta_1 fee+\hat\beta_2 week)\cdot\hat\beta_1$$

evaluated at the **sample-average `fee` and `week`** (the standard protocol). The lecture's R code: `dnorm(sum(coef(probit) * averages)) * coef(probit)`. Result: **the fee's effect is 0.388** (about 39 percentage points) and the `week` effect is 0.053. Note that this is larger than the LPM's 0.208; the two models answer the same question but need not agree, and the probit effect depends on where it is evaluated.

### Goodness of fit: likelihood-ratio test

$$H_0: \beta_1=\beta_2=0 \quad\text{(fee and week jointly irrelevant)}$$

`lrtest(probit)` compares the full model (log-likelihood −61.334, 3 parameters) with the intercept-only model (−79.388, 1 parameter): $\chi^2(2)=36.107$, $p=1.4\times10^{-8}$. **Reject $H_0$**: the model fits much better than a constant. (See [[_Econometrics Concepts#Likelihood Ratio Test|LR test]].)

---

## ⚖️ Step 6 — Add the control group: DiD

So far we used only the 6 treated centres. Four other centres **never** had a fee, which gives a **control group**.

![[Lec12_treatment_vs_control.png|620]]

**Reading the figure** *(the lecture's own chart, average late pickups per week; dashed lines mark the fee period)*. Control centres hover around 9 with no trend; treated centres climb from about 8 to about 20 and **stay high even after the fee is dropped**.

Because the effect **persists after week 16**, it makes sense to define treatment as the **whole post period (weeks 5 onward)**, not just the weeks with a fee:

$$late_{it} = \beta_0 + \beta_1\, group_i + \beta_2\, post_t + \beta_3\,(group_i\cdot post_t) + u_{it}$$

with $post_t=1$ if week > 4. The group means (printed on the slide) give $\beta_3$ directly:

| | Before (wks 1–4) | After (wks 5–20) | After − Before |
|---|---:|---:|---:|
| **Control** | 10.000 | 8.984 | −1.016 |
| **Treatment** | 8.000 | 17.010 | +9.010 |
| | | **DiD** | $9.010-(-1.016)=\mathbf{10.026}$ |

As a regression (200 centre-weeks, Newey-West SE): $\hat\beta_3=\mathbf{10.026}$ (SE 1.973, $p<0.001$); $\hat\beta_1=-2.0$ (n.s.), $\hat\beta_2=-1.016$ (n.s.), intercept 10.0.

> [!tip] Sample averages vs regression
> - **Sample averages:** quick, gives $\hat\beta_3$, but **no controls and no significance test**.
> - **Regression:** use this when you want controls or standard errors.
>
> Compare [[Lec_10-Difference-in-Differences]] and [[Lec_11-Difference-in-Differences II (Dynamic DiD)]].

### Dynamic DiD (effect changes over time)

$$late_{it} = \beta_0 + \beta_1\, group_i + \beta_2\, week_t + \sum_{k\neq 4}\delta_k\,\big(group_i\cdot\mathbb{1}\{week=k\}\big) + u_{it}$$

**Drop week 4** (the week before treatment) as the reference. $\delta_k$ is the effect of the late fee in week $k$. In R: `feols(late ~ week.centered + group + i(week.centered, group, ref = 0), daycare, vcov = newey_west ~ center + week)` with `week.centered = week - 4`, so the reference week is 0 and pre-treatment weeks 1 to 3 appear as −3, −2, −1.

![[Lec12_dynamic_did.png|660]]

**Reading the figure** *(drawn from the estimates printed on the lecture's regression output; bars are $\pm1.96$ SE)*:

- **Pre-treatment** weeks 1–3: $\hat\delta\approx0$ (0.32, −0.12, 0.11; all $p>0.85$) → parallel trends is supported.
- **The effect builds up**: week 5 is −1.3 (n.s.), week 6 3.6 (n.s.), week 7 6.5 ($p=0.047$), then ≈ 10–13 per week from about week 8 onwards, mostly significant at 1%.
- **No fade after the fee is removed** (weeks 17–20): the estimates stay around 9–14 and remain significant. The behaviour change is **persistent**, which is why the single "fee" dummy in `ols1`–`fe1` understated the story.

---

## 🧯 Rollout designs and staggered treatment (a warning)

The slides then reproduce a textbook passage (section 18.2.5, "Rollout Designs and Multiple Treatment Periods", citing Goodman-Bacon 2018). In paraphrase:

- A **rollout design** is a DiD where **different groups get treated at different times** (e.g. broadband arriving in different counties in 2001, 2002, 2003).
- Research-design-wise this is fine, but the usual **two-way fixed effects** regression **stops working**: groups that are *already treated* get used as the "untreated" comparison for groups treated later.
- If the effect is **dynamic** or **differs across groups**, the "treated comparison group" is trending in a way that **breaks parallel trends**, and in rare cases TWFE can even give a **wrong-signed** estimate.

> [!info] Where this connects
> This is the problem behind [[_Econometrics Concepts#Bacon Decomposition|Bacon Decomposition]] and [[_Econometrics Concepts#Two-Way Fixed Effects|Two-Way Fixed Effects]]. In the daycare data all treated centres switch on the same week, so it is *not* a rollout design.

---

## 🕳️ Step 7 — Missing centres: sample selection (Heckman)

New scenario: **5 centres did not report** late pickups (1 in the control group, 4 in the treatment group). Suppose they didn't report because **staff were overwhelmed by having too many children enrolled**.

> [!warning] Simulated data on the slide
> The R object on the slide is called `daycare.fake`. The selection example is an **illustration on made-up (simulated) data** that the lecturer built to demonstrate Heckman, not part of the real Gneezy-Rustichini study. Treat the numbers as a worked example only. (300 centre-weeks, of which 100 are "censored", i.e. not reported, and 200 observed.)

Selection into the observed sample depends on enrolment (`children`), which is **plausibly related to lateness** through the error, so selection is **endogenous**. The **Heckit** model ([[Lec_05-Sample Selection & Heckman Correction]]):

$$s_{it} = \mathbb{1}\big[\gamma_0+\gamma_1\, fee_{it}+\gamma_2\, week_{it}+\gamma_3\, children_{it}+v_{it}\ge 0\big]$$

$$late_{it} = \beta_0+\beta_1\, fee_{it}+\beta_2\, week_{it}+u_{it}$$

`children` appears in the **selection** equation but not in the outcome equation. That is the **exclusion restriction**: it explains who reports, but (by assumption) not the number of late pickups itself.

**Two-step output** (`heckit` in R):

| Selection (probit) | Estimate | $p$ |
|---|---:|---:|
| `fee` | −0.411 | 0.020 |
| `week` | ≈ 0.000 | 1.000 |
| `children` | −0.365 | <0.001 |

| Outcome equation | Estimate | Std. error | $p$ |
|---|---:|---:|---:|
| Intercept | 6.749 | 1.091 | <0.001 |
| `fee` | **6.658** | 0.984 | <0.001 |
| `week` | 0.406 | 0.076 | <0.001 |
| inverse Mills ratio | −4.311 | 1.653 | 0.010 |

$\hat\rho=-0.672$, $\hat\sigma=6.417$. More enrolled children means a lower probability of reporting (−0.365, $p<0.001$). The **inverse Mills ratio is significant** ($p=0.010$) → there **is** selection bias, which the Heckman correction removes.

---

## 🧠 Summary — Lecture 12

1. **Pick the model by the question.** Count outcome with a clear trend → OLS + time trend; binary threshold outcome → LPM or probit; group with a control and a pre/post → DiD; incomplete reporting → Heckman.
2. **Omitted variables:** a variable that moves with treatment and with the outcome (here `week`) biases the baseline; **add it** (`ols2`).
3. **Time-series errors:** use **Newey-West/HAC** standard errors.
4. **Fixed effects:** control for fixed centre differences; point estimates barely moved here but SEs fell sharply.
5. **LPM vs probit:** LPM coefficient is the marginal effect directly (+20.8 pp) but can leave $[0,1]$; probit needs the marginal effect at sample averages (**0.388**). Test overall fit with a **likelihood-ratio test**.
6. **DiD:** $\hat\beta_3=10.026$ late pickups, significant. The **dynamic DiD** shows the effect building over ~3–4 weeks and **persisting after the fee is removed**.
7. **Rollout/staggered DiD:** two-way FE can mislead when treatment dates differ ([[_Econometrics Concepts#Bacon Decomposition|Bacon decomposition]]).
8. **Selection:** if reporting depends on something correlated with the outcome error, correct with **Heckman** (probit → inverse Mills ratio → OLS with the extra term).

---

## 📎 Related Notes
- Previous: [[Lec_11-Difference-in-Differences II (Dynamic DiD)]] | Next: [[Lec_13-Course Review]]
- Method refreshers: [[Lec_02-Linear Probability Model (LPM)]] · [[Lec_03-Logit & Probit Models]] · [[Lec_05-Sample Selection & Heckman Correction]] · [[Lec_08-Fixed Effects in Panel Data]] · [[Lec_10-Difference-in-Differences]]
- Exam prep: [[_Exam Question Playbook (Any Experiment)]]
- Hub: [[Econometrics]]
