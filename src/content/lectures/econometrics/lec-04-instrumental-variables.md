---
title: Instrumental Variables
week: 4
semester: 2
course: Applied Econometrics
lecture: "Lecture 04 — Instrumental Variables (IV) & 2SLS"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - instrumental-variables
  - 2SLS
  - endogeneity
  - causal-inference
  - omitted-variable-bias
subject: econometrics
in_scope: true
---
# Instrumental Variables

> Part of: [[Econometrics]]
> **Lecture 04** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Instrumental Variables]], [[Endogeneity]], [[Two Stage Least Squares]], [[Omitted Variable Bias]], [[Instrument Validity]], [[Instrument Relevance]], [[First Stage]], [[Second Stage]], [[Weak Instruments]]

---

## 🧠 The Core Problem: Why OLS Breaks Down

OLS gives you the causal effect of X on Y **only if X is truly exogenous** — i.e. nothing else is simultaneously causing both X and Y.

In practice, this fails constantly. The three classic culprits are:

| Problem | What it means | Example |
|---|---|---|
| **Omitted variable bias** | A hidden variable drives both X and Y | Intelligence affects both education and earnings — so regressing earnings on education overstates education's effect |
| **Reverse causality** | Y causes X instead of (or as well as) X causing Y | Do police reduce crime, or do cities with more crime hire more police? |
| **Selection bias** | Who gets treated isn't random | People who exercise tend to be healthier already — exercise effect looks inflated |

When any of these are present, $\text{cov}(x_i, u_i) \neq 0$ and OLS is **biased and inconsistent** — it's not measuring the causal effect you want, even in large samples.

> [!warning] OLS doesn't heal with more data
> With an endogenous regressor, increasing your sample size doesn't fix the bias. You're consistently estimating the *wrong thing*. This is why IV exists — it's not just a sample-size fix.

---

## 💡 The IV Intuition: Borrow Some Exogenous Variation

The idea behind instrumental variables is beautifully simple:

> **Find a variable Z that *only* moves X — and has no direct route to Y. Use that clean variation in X to estimate the effect on Y.**

If X is contaminated by confounders, IV carves out the *clean slice* of X that moves for exogenous reasons, and looks at what Y does when that slice moves.

```
         Z ────────▶ X ────────▶ Y
                      ↑
                      u (confounder — does NOT connect Z to Y)
```

The instrument Z is essentially a natural experiment hidden inside your data.

![[Lec04_iv_dag.png|600]]

> [!info] Reading the diagram
> The confounder $u$ poisons the direct X→Y comparison (it points into both). The instrument Z sidesteps this: it pushes X (relevance, the blue arrow) but has **no arrow into Y** except *through* X (the exclusion restriction — the greyed-out path). IV uses only the Z-driven movement in X, which the confounder can't touch.

> [!tip] The "lottery ticket" analogy
> Imagine you want to know if military service affects lifetime earnings. You can't randomly assign service. But the Vietnam-era draft lottery *randomly* selected birth cohorts for service. That randomness (Z = draft lottery number) affects military service (X) but has no other reason to affect earnings (Y). So it's a valid instrument. This is the classic Angrist (1990) study.

---

## ✅ The Two IV Conditions

For Z to be a valid instrument it must satisfy **both** of these:

### Condition 1: Relevance — Z must actually move X
$$\text{cov}(z_i, x_i) \neq 0$$

Z has to have a real, substantial effect on the endogenous variable X. If Z barely moves X, you have a **weak instrument** — see the warning below.

**How to test:** Run the first stage regression and check the F-statistic. If F < 10, the instrument is considered weak. This **can be tested**.

### Condition 2: Validity (Exclusion Restriction) — Z affects Y *only through* X
$$\text{cov}(z_i, u_i) = 0$$

Z has no direct effect on Y, and doesn't correlate with anything else that affects Y. The only pathway from Z to Y goes through X.

**How to test:** This **cannot be directly tested** — there's no statistical test because $u$ is unobserved. It's a theoretical / conceptual argument. You have to convince people with logic, not numbers.

> [!warning] The exclusion restriction is the hard part
> Almost every IV debate in economics is about whether the exclusion restriction holds. Critics attack the instrument by arguing it has a direct effect on Y through some other channel. Always think hard: "Is there any way Z could be affecting Y without going through X?"

---

## 🔬 Classic Real-World Examples of IV

### 1. 🎓 Education & Earnings (Card, 1995)
**Problem:** Estimating the causal return to education is hard — smarter/more motivated people get more education *and* earn more. OLS overstates education's effect.

**Instrument:** Whether you grew up near a college (geographic proximity).

- **Relevance:** ✅ Living near a college increases the likelihood of attending (lower cost/distance).
- **Validity:** ✅ The distance from your childhood home to the nearest college shouldn't directly affect your adult earnings (assuming you don't stay in the same town for work).

**Result:** IV estimate of returns to education is *higher* than OLS — suggests the people who go to college because it's nearby are those who respond more to schooling (compliers).

---

### 2. 🎖️ Military Service & Earnings (Angrist, 1990)
**Problem:** Did Vietnam service hurt long-run earnings? Veterans might have different pre-war characteristics, making direct comparison invalid.

**Instrument:** Vietnam draft lottery number (randomly assigned by birthday).

- **Relevance:** ✅ Having a low draft number increased probability of serving.
- **Validity:** ✅ Your birthday is random with respect to your future earnings potential.

**Result:** IV found a significant negative effect of military service on earnings (~15% lower).

---

### 3. 🌍 Institutions & Economic Growth (Acemoglu, Johnson & Robinson, 2001)
**Problem:** Good institutions cause growth, but rich countries can afford better institutions — reverse causality.

**Instrument:** Settler mortality rates in former colonies (how deadly was the colony for European settlers?).

- **Relevance:** ✅ Where settlers died in large numbers, they set up extractive institutions rather than settling. This led to worse institutions today.
- **Validity:** ✅ 16th/17th century disease environments don't directly affect modern GDP except through the institutional path they created.

**Result:** Institutions have a huge causal effect on GDP — one of the most influential IV papers ever written.

---

### 4. 🍻 Alcohol & Wages (Kenkel & Ribar, 1994)
**Problem:** Does drinking hurt earnings? People who drink heavily may have other traits (time preference, health) that also reduce earnings.

**Instrument:** State-level beer taxes or alcohol prices.

- **Relevance:** ✅ Higher prices reduce alcohol consumption.
- **Validity:** ✅ Beer tax is set by state governments for fiscal reasons, not to target individual earnings.

---

### 5. 📡 TV & Political Participation (Gentzkow, 2006)
**Problem:** Does watching TV reduce civic participation? Hard to isolate — TV adoption correlated with many community-level factors.

**Instrument:** Timing of TV introduction by city (driven by FCC licensing delays, which were largely arbitrary).

- **Relevance:** ✅ Earlier FCC approval → more TV ownership in that city.
- **Validity:** ✅ The bureaucratic timing of FCC hearings is unrelated to pre-existing civic engagement.

---

## 📖 Lecture Case Study: Cai, De Janvry & Sadoulet (2013)

### Setting

People's Insurance Company of China rolls out a new weather insurance policy for rice farmers. The researchers want to know: **Does your social network (friends' behaviour) affect whether you buy insurance?**

The endogenous regression would be:
$$\text{takeup}_i = \beta_0 + \beta_1 \cdot \text{pre.takeup.rate}_i + u_i$$

where $\text{pre.takeup.rate}_i$ is the fraction of $i$'s friends who bought insurance in the first round.

> [!warning] Why OLS fails here
> Friends who have similar risk preferences will both buy or both skip insurance. The shared preferences are the confounder — they affect both your friends' decision (X) and your own decision (Y). OLS can't separate "I was influenced by my friend" from "we just both have the same risk attitude."

```
     shared preferences
          ↓          ↓
  friends' decision ──→ my decision
```

### The Instrument: Default Assignment

The experiment randomly assigned villages to either:
- **Default Buy**: farmers are opted *in* to insurance and must actively opt out
- **Default Not Buy**: farmers must actively opt in

The key move: **your friend's default assignment** is used as an instrument for **your friend's take-up decision**.

- **Relevance:** ✅ Being assigned to "Default Buy" substantially increases take-up (default bias is well-documented in behavioural economics — people stick with whatever option is presented as the default).
- **Validity:** ✅ The village's default assignment was randomised — it cannot correlate with the shared preferences between you and your friend. The assignment was bureaucratic, not based on friendship characteristics.

```
  Friend's Default Assignment (Z)
          │
          ▼
  Friend's Take-Up Decision (X) ────→ My Take-Up Decision (Y)
                                              ↑
                                    shared preferences (u) — NOT connected to Z
```

### The 2SLS Procedure Applied

**First Stage** — regress the endogenous variable on the instrument:
$$\text{pre.takeup.rate}_i = \gamma_0 + \gamma_1 \cdot \text{default.buy}_i + \varepsilon_i$$

This produces $\widehat{\text{pre.takeup.rate}}_i$ — the predicted friends' take-up rate that is *explained only by the random default assignment*.

**Second Stage** — use those predicted values in the main regression:
$$\text{takeup}_i = \beta_0 + \beta_1 \cdot \widehat{\text{pre.takeup.rate}}_i + u_i$$

Because $\widehat{\text{pre.takeup.rate}}$ only moves due to the randomised default, it can't be correlated with the shared preferences confounder. The $\hat{\beta}_1$ we get is **causal**.

### Result

A 20% increase in friends' take-up rate (i.e. 1 more friend out of 5 buying insurance) causes approximately a **23% increase** in your probability of buying insurance. Social influence is real and large.

> [!example] What if friends could choose their default?
> If participants could self-select into which default option they received, the instrument breaks: people with stronger risk preferences might actively choose the "Default Buy" group. Now $\text{cov}(z_i, u_i) \neq 0$ — the instrument is correlated with the shared-preferences confounder. The second-stage estimate would be biased again.

---

## ⚙️ How 2SLS Works: Step by Step

> [!info] 2SLS in plain English
> You have a noisy, endogenous X. You use Z to find the clean, exogenous fraction of X. Then you run the regression using *only that clean fraction*. You're throwing away information (the endogenous part) to get something trustworthy.

**Step 1:** Use Z to explain X (the first stage regression).
**Step 2:** Take only the part of X that Z explains — call it $\hat{X}$.
**Step 3:** Regress Y on $\hat{X}$ — this is the second stage.
**Step 4:** $\hat{\beta}_{1}^{IV}$ is the causal effect — it's the relationship between the Z-driven movement in X and the corresponding movement in Y.

> [!note] Always use `feols` or `ivreg` in R — don't run 2SLS manually
> Running two separate `lm()` calls gives the correct point estimates but **wrong standard errors** in the second stage (because the SEs don't account for the first-stage estimation uncertainty). Use `feols(y ~ controls | x ~ z)` from the `fixest` package.

### With Multiple Instruments

If you have multiple instruments $z_1, z_2, \ldots$, include all of them in the first stage. This uses maximum information to produce the best $\hat{X}$. Any other exogenous controls in your model should also go in the first stage automatically.

$$x_{1i} = \gamma_0 + \gamma_1 z_{1i} + \gamma_2 z_{2i} + \gamma_3 x_{2i} + \ldots + \varepsilon_i$$

---

## ⚠️ What Can Go Wrong: Weak Instruments

If $\text{cov}(z_i, x_i)$ is very small — Z barely moves X — you have a **weak instrument**.

> [!warning] Weak instruments amplify bias
> From the IV estimator formula: $\hat{\beta}_1 = \frac{\text{cov}(y,z)}{\text{cov}(x,z)}$. If the denominator is tiny, any small violations of the exclusion restriction get massively amplified in the estimate. Weak instruments can produce estimates *worse* than OLS.

**Rule of thumb:** First-stage F-statistic should be **> 10**. If it's below 10, the instrument is weak and results should be treated with scepticism.

![[Lec04_weak_instrument.png|640]]

> [!warning] What the two panels show
> On the left, Z has a steep, clear relationship with X — the first stage is strong (F ≈ 58) and gives a reliable $\hat{X}$. On the right, the cloud is nearly flat: Z barely moves X (F ≈ 2). Since $\hat\beta^{IV}=\mathrm{cov}(y,z)/\mathrm{cov}(x,z)$, that tiny denominator blows up both the variance and any small violation of the exclusion restriction — which is why a weak instrument can be *worse* than plain OLS.

---

## 🔍 When Should You Use IV?

IV is the right tool when:

1. You suspect your key regressor X is **endogenous** (correlated with the error term)
2. You can argue for an exogenous variable Z that moves X but has no direct effect on Y
3. The first stage is strong (F > 10)

The hardest part is always finding a convincing instrument. Good instruments typically come from:
- **Natural experiments** (lotteries, policy roll-outs, arbitrary bureaucratic decisions)
- **Geographic variation** (distance to a college, proximity to a border)
- **Historical quirks** (settler mortality, timing of infrastructure investment)
- **Randomised within an experiment** (like the default assignment in Cai et al.)

| Situation | Typical IV Strategy |
|---|---|
| Education effects | Distance to nearest college |
| Health behaviour | Prices / taxes on the good |
| Peer effects | Random assignment of some peers |
| Trade policy effects | Trading partner's tariff changes |
| Media effects | Timing of technology roll-out |

---

## 📊 IV vs OLS: When Do They Differ?

| Feature | OLS | IV |
|---|---|---|
| **Assumption needed** | X exogenous | Z valid + relevant |
| **Bias when endogenous** | Biased (inconsistent) | Consistent |
| **Standard errors** | Smaller | Larger (less variation used) |
| **When they agree** | X is actually exogenous | — |
| **When IV > OLS** | Returns for "compliers" are high | Local average treatment effect |

> [!tip] IV is always less precise than OLS
> You're throwing away information (the endogenous variation in X), so IV standard errors are always larger. This is the cost of consistency — you get unbiased estimates but with less precision. If your instrument is very weak, the precision loss can be enormous.

> [!note] IV estimates a LATE, not ATE
> IV doesn't estimate the effect for everyone — it estimates the **Local Average Treatment Effect (LATE)**: the effect for "compliers", i.e. people whose X changes *because of* Z. People whose X doesn't change with Z ("never-takers" and "always-takers") are not informative for IV.

---

## 🎯 Summary

1. **OLS breaks when X is endogenous** — the coefficient is biased because confounders or reverse causality are contaminating the estimate.
2. **IV finds a clean slice of variation in X** using an instrument Z that only moves X for exogenous reasons.
3. **Two conditions must hold** — relevance ($\text{cov}(z,x) \neq 0$, testable) and validity ($\text{cov}(z,u) = 0$, not testable — requires argument).
4. **2SLS is the practical implementation** — first stage regresses X on Z to get $\hat{X}$; second stage uses $\hat{X}$ in the main regression.
5. **Weak instruments are dangerous** — check the first-stage F-stat > 10.
6. **IV gives LATE not ATE** — the estimate applies to compliers only.
7. **Good instruments come from natural experiments** — lotteries, arbitrary policy roll-outs, geographic variation, historical accidents.

---

## 📎 Related Notes

- Previous: [[Lec_03-Logit & Probit Models]] — when outcomes are binary
- Hub: [[Econometrics]]
- Foundational: [[OLS Estimation]], [[Omitted Variable Bias]], [[Endogeneity]], [[Causal Inference]]
- Coming up: [[Regression Discontinuity]], [[Difference-in-Differences]]
- Key concepts here: [[Two Stage Least Squares]], [[Instrument Validity]], [[Instrument Relevance]], [[Weak Instruments]], [[Local Average Treatment Effect]]
