---
title: Difference-in-Differences
subject: econometrics
in_scope: true
week: 10
semester: 2
year: 2
academic_year: "2025-26"
course: Applied Econometrics
lecture: "Lecture 10 — Difference-in-Differences"
instructor: Dr. Aluma Dembo
date: 2026-06-09
tags:
  - econometrics
  - causal-inference/difference-in-differences
  - treatment-effects
  - parallel-trends
  - policy-evaluation
  - repeated-cross-sections
aliases:
  - DiD
  - Diff-in-Diff
  - Differences-in-Differences
  - Card and Krueger
---

# Difference-in-Differences

> Part of: [[Econometrics]]
> **Lecture 10** — Applied Econometrics, Dr. Aluma Dembo
> Previous: [[Lec_09-Regression Discontinuity Design (RDD)]] | Next: %%TODO: next lecture%%
> Key concepts: [[_Econometrics Concepts#Difference-in-Differences|Difference-in-Differences]], [[_Econometrics Concepts#Treatment Effect|Treatment Effect]], [[_Econometrics Concepts#Counterfactual|Counterfactual]], [[_Econometrics Concepts#Repeated Cross Sections|Repeated Cross Sections]], [[_Econometrics Concepts#Average Treatment Effect on the Treated|Average Treatment Effect on the Treated]], [[_Econometrics Concepts#Parallel Trends Assumption|Parallel Trends Assumption]]
> Builds on: [[Lec_01-Introduction & Treatment Effects]], [[Lec_08-Fixed Effects in Panel Data]]

---

## 🎯 Motivation — policy analysis with treatment effects

A policy is enacted to change some outcome $Y$. The ==[[_Econometrics Concepts#Treatment Effect|Treatment Effect]]== for unit $i$ is the difference between the outcome **with** and **without** the policy:

$$(Y_i \mid T=1) - (Y_i \mid T=0)$$

> [!warning] The fundamental problem of causal inference
> We can **never observe both** $(Y_i\mid T=1)$ and $(Y_i\mid T=0)$ for the same unit at the same time. A city is either locked down or not; a person either took the exam or didn't. One of the two potential outcomes is always missing — it is the **[[_Econometrics Concepts#Counterfactual|Counterfactual]]**.

The naive fix — compare the same city **before vs after** the policy (an [[_Econometrics Concepts#Event Study|Event Study]]) — fails because *other things change over time too*: weather, other policies, behaviour. So a before/after gap mixes the policy effect with everything else that moved. DiD is the trick that nets those common time effects out.

---

## 🔧 The set-up: two groups, two periods

We need:

- a **treatment group** (gets the policy) and a **control group** (doesn't), and
- both observed **before** and **after** the policy.

> [!info] Repeated cross-sections are fine
> We do **not** need the *same* individuals in each period ([[_Econometrics Concepts#Panel Data|Panel Data]] is not required). Each period can be a fresh sample from the population — this is a ==[[_Econometrics Concepts#Repeated Cross Sections|repeated cross-section]]==. We only need the four *group × period* averages.

The four sample means of the outcome:

| | Before (period 1) | After (period 2) |
|---|---|---|
| **Control** | $\bar y_{1,C}$ | $\bar y_{2,C}$ |
| **Treatment** | $\bar y_{1,T}$ | $\bar y_{2,T}$ |

---

## 📐 The DiD estimator

Take the **difference of the two differences** — hence the name. Two equivalent orders:

$$\boxed{\hat\delta_1 = \underbrace{(\bar y_{2,T}-\bar y_{1,T})}_{\text{treatment change}} - \underbrace{(\bar y_{2,C}-\bar y_{1,C})}_{\text{control change}} = \underbrace{(\bar y_{2,T}-\bar y_{2,C})}_{\text{after gap}} - \underbrace{(\bar y_{1,T}-\bar y_{1,C})}_{\text{before gap}}}$$

> [!tip] What each version says (they give the same number)
> - **"difference of changes":** how much the treatment group moved, *minus* how much the control group moved over the same window. The control's change is the common time trend we subtract off.
> - **"difference of gaps":** the treatment–control gap after, *minus* the gap that already existed before. Any fixed level difference between the groups cancels.

The control group's change is our estimate of **what would have happened to the treatment group anyway**. Subtracting it leaves the part attributable to the policy — the [[_Econometrics Concepts#Average Treatment Effect on the Treated|Average Treatment Effect on the Treated]] (ATT).

---

## 💡 Worked example — Card & Krueger (1994), minimum wage

**Research question:** does raising the minimum wage reduce low-wage employment? In April 1992 New Jersey raised its minimum wage from \$4.25 to \$5.05; neighbouring Pennsylvania did not.

- **Treatment group:** fast-food restaurants in **New Jersey**.
- **Control group:** fast-food restaurants in **Pennsylvania** (wage unchanged).
- **Before:** Feb–Mar 1992. **After:** Nov–Dec 1992. (Repeated cross-section of restaurants.)
- **Outcome:** employment = managers + full-time + 0.5 × part-time.

| | Before | After | After − Before |
|---|---:|---:|---:|
| **Control (PA)** | 23.331 | 21.166 | **−2.166** |
| **Treatment (NJ)** | 20.439 | 21.027 | **+0.588** |

$$\hat\delta_1 = (+0.588) - (-2.166) = \boxed{+2.754}$$

![[Lec10_card_krueger_did.png|640]]

> [!success] The famous (and surprising) result
> Employment in NJ **rose by ~2.75** relative to the counterfactual. Pennsylvania employment was falling; absent the hike, NJ would likely have fallen too (the dashed line to 18.27). Instead NJ rose — so raising the minimum wage did **not** destroy jobs here, contradicting the simple competitive-labour-market prediction. The dashed counterfactual is the whole game: we never see it, we *assume* NJ would have tracked PA.

---

## 🔧 DiD as a regression (and why we bother)

Sample averages give the point estimate but can't give standard errors or controls. Equivalent regression with two dummies and their **interaction**:

$$y_i = \beta_0 + \delta_0\, d2_i + \beta_1\, dT_i + \delta_1\,(d2_i \cdot dT_i) + u_i$$

- $d2_i = 1$ if observation is in the **after** period (else 0) — the time dummy.
- $dT_i = 1$ if in the **treatment** group (else 0) — the group dummy.
- $\delta_1$ on the **interaction** is the DiD treatment effect.

Plug the dummies into the four cells and each coefficient maps onto the 2×2 table:

| | Before | After | After − Before |
|---|---|---|---|
| **Control** | $\beta_0$ | $\beta_0+\delta_0$ | $\delta_0$ |
| **Treatment** | $\beta_0+\beta_1$ | $\beta_0+\delta_0+\beta_1+\delta_1$ | $\delta_0+\delta_1$ |
| **T − C** | $\beta_1$ | $\beta_1+\delta_1$ | $\boxed{\delta_1}$ |

So $\beta_0$ = base group (control, before), $\delta_0$ = common time trend, $\beta_1$ = fixed group gap, and $\delta_1$ = **the DiD effect**.

> [!example] Card & Krueger in R
> ```r
> mydata$d2 <- as.numeric(mydata$period == 2)
> mydata$dT <- as.numeric(mydata$location == "New Jersey")
> treat1 <- lm(total_emp ~ d2 + dT + d2:dT, data = mydata)
> ```
> Output: `d2:dT` (treat_effect) = **2.754**, SE 1.307, $t=2.11$, $p=0.035$ → **significant at 5%**, same number as by hand, now with inference.

> [!tip] Why use the regression form? Three payoffs
> 1. **Statistical significance** — you get a standard error and $p$-value on $\delta_1$.
> 2. **Controls** — add covariates $\gamma z_i$ (e.g. fast-food chain dummies) to absorb composition differences and tighten the estimate.
> 3. **Fixed effects** — add group/neighbourhood [[_Econometrics Concepts#Fixed Effects|Fixed Effects]] to weaken parallel trends to *conditional* parallel trends. With many groups and periods this is exactly [[_Econometrics Concepts#Two-Way Fixed Effects|Two-Way Fixed Effects]] (see [[Lec_08-Fixed Effects in Panel Data]] and [[PS_04-Seatbelt Laws & Traffic Fatalities]]).

---

## ⚠️ Validity of a DiD design

DiD is only causal if the control group is a **valid counterfactual** — it must represent what the treatment group *would* have done without the policy. Three things to check:

1. **No coincident shock to the control group.** Nothing else should hit the control around treatment time. *(If Pennsylvania changed its own tipping law in the after period, $\delta_1$ would capture NJ's wage hike **and** PA's tipping law.)*
2. **Comparability.** The groups should be broadly similar. *(If NJ restaurants are all drive-throughs and PA all sit-down, their employment behaves differently and they aren't comparable.)*
3. **[[_Econometrics Concepts#Parallel Trends Assumption|Parallel trends]] — the big one.** Before treatment, the two groups must have moved **in parallel**. If NJ employment was already trending up faster than PA *before* the hike, the post gap would have widened anyway and DiD would mistake that trend for a policy effect.

![[Lec10_parallel_trends.png|680]]

> [!warning] Parallel trends is an assumption, not a fact
> You can't prove it (the post-period counterfactual is unobserved), but you can make it *believable*: plot multiple pre-periods and check the lines move together. Non-parallel pre-trends are the classic DiD killer.

---

## 🧩 Extensions (named, for awareness)

- **Staggered roll-out** (treatment turns on at different times across units) → use the **[[_Econometrics Concepts#Bacon Decomposition|Bacon Decomposition]]** to diagnose the naive two-way FE estimate.
- **[[_Econometrics Concepts#Placebo Test|Placebo Test]]** — test for a "treatment effect" in a pre-period where none should exist; a non-zero placebo flags broken parallel trends.
- **[[_Econometrics Concepts#Triple Differences|Triple Differences]]** (DDD) — add a third difference (e.g. an extra comparison group) to net out a confounding trend.

---

## 📓 Recitation — Kiel & McClain (1995), garbage incinerator

**Did the announcement of a garbage incinerator in North Andover, MA depress nearby house prices?**

- **Repeated cross-section** of house sales. **Before:** 1978 (`y81=0`, pre-rumour). **After:** 1981 (`y81=1`, rumour confirmed).
- **Treatment:** house within 3 miles of the site (`nearinc=1`); **control:** farther away (`nearinc=0`). *(Different houses each year → repeated cross-section, not a panel.)*
- **Concern:** near and far homes already differ (a simple before/after on near homes is not enough) — hence DiD.

The problem set walks through: (1) manual 2×2 DiD on `rprice`; (2) the regression replication with `y81 + nearinc + y81:nearinc`; (3) a **log-level** model — interpret $\delta_1$ as an approximate **% effect**; (4) adding continuous house controls; (5) adding neighbourhood fixed effects.

> [!note] Why does the estimate move when controls are added?
> The bare 2×2 already differences out **fixed level** differences between near and far homes (e.g. near homes being older) — those alone don't bias DiD. It does **not** difference out (a) composition shifts across periods in a repeated cross-section, or (b) trends correlated with house characteristics. Both threaten *unconditional* parallel trends. Adding controls + neighbourhood FE weakens the requirement to **conditional parallel trends** (parallel *within* strata of $X$).

---

## 🧠 Summary — Lecture 10

1. The **fundamental problem of causal inference**: we never see a unit's treated *and* untreated outcome → we need a counterfactual.
2. **DiD** = (treatment change) − (control change). The control's change *is* the counterfactual trend; subtracting it removes common time shocks and fixed group gaps.
3. It works on **repeated cross-sections** — same individuals not required.
4. As a **regression**, the DiD effect is the coefficient $\delta_1$ on the **time × group interaction** — giving significance, controls, and FE.
5. Validity hinges on **parallel trends** (plus no coincident control-group shock, plus comparability). Parallel trends is assumed, made credible by inspecting pre-trends.
6. The DiD estimand is the **ATT** — the effect on the treated.

---

## 📎 Related Notes

- Previous: [[Lec_09-Regression Discontinuity Design (RDD)]]
- Foundational: [[Lec_01-Introduction & Treatment Effects]] · [[Lec_08-Fixed Effects in Panel Data]] (DiD = two-way FE)
- Applied: [[PS_04-Seatbelt Laws & Traffic Fatalities]] (staggered DiD via two-way FE) · [[PP_01-Emotions & Risky Choice (Practice Exam)]] (exam Q3 is a DiD)
- Concepts: [[_Econometrics Concepts#Difference-in-Differences|Difference-in-Differences]] · [[_Econometrics Concepts#Parallel Trends Assumption|Parallel Trends Assumption]] · [[_Econometrics Concepts#Average Treatment Effect on the Treated|Average Treatment Effect on the Treated]] · [[_Econometrics Concepts#Counterfactual|Counterfactual]] · [[_Econometrics Concepts#Repeated Cross Sections|Repeated Cross Sections]]
- Hub: [[Econometrics]]
