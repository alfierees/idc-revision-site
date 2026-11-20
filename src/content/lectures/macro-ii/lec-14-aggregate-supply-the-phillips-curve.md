---
title: "Aggregate Supply & the Short-Run Tradeoff Between Inflation and Unemployment"
week: 14
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 14 — Aggregate Supply & the Short-Run Tradeoff Between Inflation and Unemployment"
instructor: Alon Cohen
date: 2026-05-24
tags:
  - macro-economics-ii
  - aggregate-supply
  - phillips-curve
  - sticky-price-model
  - inflation
  - unemployment
  - adaptive-expectations
  - rational-expectations
  - sacrifice-ratio
  - hysteresis
  - SRAS
  - disinflation
aliases:
  - Chapter 14 Macro II
  - Phillips Curve
  - Aggregate Supply Chapter 14
  - SRAS sticky price
subject: macro-ii
in_scope: true
---

# Aggregate Supply & the Short-Run Tradeoff Between Inflation and Unemployment

> Part of: [[Macro-Economics II]] | Key concepts: [[Sticky-Price Model]], [[SRAS Curve]], [[Phillips Curve]], [[Adaptive Expectations]], [[Rational Expectations]], [[Sacrifice Ratio]], [[Hysteresis]], [[Inflation Inertia]], [[Natural Rate of Unemployment]]

---

## 🗺️ What This Chapter Is About

Previous chapters assumed the price level $P$ was completely "stuck" in the short run — giving a *horizontal* SRAS curve. That is a useful simplification, but the real world is more nuanced: **some prices are sticky, others adjust freely**. Chapter 14 builds a richer model of aggregate supply that generates an *upward-sloping* SRAS curve, then derives the famous ==Phillips curve== — the empirical relationship between inflation and unemployment that sits at the heart of short-run macroeconomic policy.

The chapter answers three big questions:

1. **Why** does the SRAS curve slope upward in the short run?
2. **What** is the Phillips curve and where does it come from?
3. **Can** policymakers exploit the inflation-unemployment tradeoff, and at what cost?

---

## 🧱 The Sticky-Price Model

### Why Are Some Prices Sticky?

In the real world, firms don't instantaneously adjust prices when demand changes. Reasons include:

- **Long-term contracts** between firms and customers fix prices for extended periods.
- **Menu costs** — the physical and reputational cost of changing a price list.
- **Customer relations** — firms fear losing loyal customers if prices fluctuate frequently.

> [!info] Key assumption
> Firms in this model set their own prices (as in **monopolistic competition**). They are price-setters, not price-takers.

### A Firm's Desired Price

Each firm would *like* to set its price $p$ according to:

$$\boxed{p = P + a(Y - \bar{Y})}$$

where:
- $P$ = the **overall price level** (firms want to track the market)
- $Y - \bar{Y}$ = output gap (actual minus natural/normal output)
- $a > 0$ = sensitivity parameter

**The intuition:**
- When $Y < \bar{Y}$: demand is weak → firms *cut* prices to attract buyers.
- When $Y > \bar{Y}$: demand is strong → firms *raise* prices, knowing buyers will pay.

### Two Types of Firms

Now introduce heterogeneity:

| Type | Share of all firms | Price-setting behaviour |
|------|-------------------|------------------------|
| **Flexible-price firms** | $1 - s$ | Set $p = P + a(Y - \bar{Y})$ after observing $P$ and $Y$ |
| **Sticky-price firms** | $s$ | Must set price *before* $P$ and $Y$ are known; use expectations |

==Sticky-price firms== set:

$$p = EP + a(EY - E\bar{Y}) = EP$$

(assuming they expect output to equal its natural rate, so $EY = E\bar{Y}$).

### Deriving the Overall Price Level

The overall price level is a weighted average of what each type of firm charges:

$$P = s \cdot \underbrace{EP}_{\text{sticky}} + (1-s) \cdot \underbrace{[P + a(Y-\bar{Y})]}_{\text{flexible}}$$

Solving for $P$:

$$P - (1-s)P = s \cdot EP + (1-s) \cdot a(Y - \bar{Y})$$

$$sP = s \cdot EP + (1-s) \cdot a(Y - \bar{Y})$$

$$\boxed{P = EP + \frac{(1-s)}{s} \cdot a \cdot (Y - \bar{Y})}$$

> [!tip] What this equation tells us
> - The overall price level rises above its *expected* level whenever output exceeds its natural rate.
> - The effect is **stronger** when there are fewer sticky-price firms (smaller $s$) — more firms respond to output conditions.

### Extreme Cases

| Scenario | Result |
|----------|--------|
| All prices sticky ($s = 1$) | $P = EP$ → horizontal SRAS (Chapter 10 assumption) |
| All prices flexible ($s = 0$) | $Y = \bar{Y}$ always → vertical LRAS (classical model) |
| Mixed (typical SR) | Upward-sloping SRAS |

---

## 📈 The SRAS Curve

### Deriving the SRAS Equation

Rearranging the price level equation to express output as a function of the price surprise:

$$\boxed{Y = \bar{Y} + \alpha(P - EP)}$$

where $\alpha = \frac{s}{(1-s)a} > 0$.

This is the ==Short-Run Aggregate Supply (SRAS) curve==. It says:

- **Output equals its natural rate** when the price level meets expectations ($P = EP$).
- **Output exceeds natural rate** when prices are *above* expectations ($P > EP$).
- **Output falls short** when prices are *below* expectations ($P < EP$).

> [!warning] Common mistake
> Students sometimes think "higher prices cause higher output." That's backwards. The causation runs through **unexpected price movements**: when firms see prices higher than they anticipated, they *infer* demand is strong and expand production. It is the *surprise* in prices — not the level — that drives output deviations.

### The SRAS Curve in the P-Y Diagram

```
     P │       LRAS   SRAS (given EP)
       │        │   ↗
   EP  │────────┼──●────────── (equilibrium at Y̅)
       │      ↗
       │────────────────────── Y
            Y̅
```

- The SRAS intersects the LRAS at $(Y, P) = (\bar{Y}, EP)$.
- When $EP$ rises, SRAS **shifts up-left** (every output level is now associated with higher actual prices, because sticky-price firms set higher prices based on higher expectations).

### Why the SRAS Curve is Bow-Shaped in Reality

The linear equation $Y = \bar{Y} + \alpha(P - EP)$ assumes a constant slope. In reality:

- **At low output** (deep recession): many idle resources available. Expanding production is cheap. Firms don't need big price increases to produce more → curve is **relatively flat**.
- **At high output** (boom, $u < u_n$): capital and labour near full utilisation. Further expansion is costly. Firms demand large price increases to expand more → curve is **steeper**.

> [!example] Reagan's 1982 tax cuts
> When Reagan cut taxes in the early 1980s, the economy was emerging from a severe recession — on the **flat** part of the SRAS. Result: output rose a lot, inflation barely moved. Contrast this with tax cuts during a boom (steep part): the same demand stimulus would be mostly inflationary.

---

## 📉 The Phillips Curve

### From SRAS to the Inflation-Unemployment Tradeoff

The SRAS curve $Y = \bar{Y} + \alpha(P - EP)$ relates *output* to *price surprises*. We can translate this into inflation and unemployment via two identities:

1. **Okun's Law:** $Y - \bar{Y} \approx -(u - u_n) \cdot \bar{Y}$ (output gap ↔ unemployment gap, with opposite sign)
2. **Inflation relationship:** $\pi = \frac{P - P_{-1}}{P_{-1}}$ and similarly for $E\pi$.

Working through the algebra (Steps 1–7 in the lecture):

$$\boxed{\pi = E\pi - \beta(u - u_n) + \nu}$$

where:
- $\pi$ = actual inflation rate
- $E\pi$ = expected inflation
- $u$ = actual unemployment rate
- $u_n$ = natural rate of unemployment
- $\beta > 0$ = sensitivity of inflation to cyclical unemployment
- $\nu$ = supply shock term (Greek letter nu)

### Comparing SRAS and the Phillips Curve

| | SRAS | Phillips Curve |
|---|---|---|
| **Output variable** | Output $Y$ (or output gap $Y - \bar{Y}$) | Unemployment $u$ (or $u - u_n$) |
| **Price variable** | Unexpected price level $P - EP$ | Unexpected inflation $\pi - E\pi$ |
| **Relationship** | $Y > \bar{Y}$ when $P > EP$ | $u < u_n$ when $\pi > E\pi$ |
| **Intuition** | Strong demand → high prices | Low unemployment → high inflation |

The Phillips curve is simply the **SRAS curve rewritten in terms of unemployment and inflation** rather than output and the price level. They are two faces of the same coin.

> [!tip] Why unemployment and output move oppositely
> By Okun's Law, when output is above potential, unemployment is below its natural rate. So higher-than-expected prices (SRAS) ↔ lower-than-expected unemployment (Phillips curve). The inverse relationship between $\pi$ and $u$ follows directly.

### What Determines Inflation? Three Forces

The Phillips curve $\pi = E\pi - \beta(u - u_n) + \nu$ shows that inflation depends on:

#### 1. Expected Inflation ($E\pi$)
If workers and firms expect higher inflation, they build it into wages and prices — causing it to actually occur. This is why inflation expectations must be anchored for price stability.

#### 2. Cyclical Unemployment $(u - u_n)$
- $u < u_n$ (boom): labour market tight, wages rise, costs rise, prices rise → **demand-pull inflation** ↑
- $u > u_n$ (recession): slack demand, wages stagnate, costs fall → inflation ↓

The coefficient $\beta$ measures how sensitive inflation is to this gap.

#### 3. Supply Shocks ($\nu$)
- **Cost-push inflation:** An adverse supply shock (e.g. oil price spike, crop failure, new compliance costs) raises production costs directly, pushing inflation up *regardless* of demand conditions.
- $\nu > 0$ → inflation rises without any change in unemployment (stagflation risk)
- $\nu < 0$ → inflation falls (favourable supply shock, e.g. productivity boom)

> [!example] Cost-push vs demand-pull
> - **Cost-push examples:** Oil embargo (1973), unionised wage increases, new environmental regulations requiring costly equipment.
> - **Demand-pull examples:** Stock market boom causing a consumption surge; currency depreciation boosting net exports.

---

## 🔄 Adaptive Expectations and Inflation Inertia

### Adaptive Expectations

==Adaptive expectations== assume people form their inflation forecasts based on *recently observed* inflation:

$$E\pi = \pi_{-1}$$

(Expected inflation this period = actual inflation last period.)

Substituting into the Phillips curve:

$$\boxed{\pi = \pi_{-1} - \beta(u - u_n) + \nu}$$

### Inflation Inertia

This adaptive form implies ==inflation inertia==: **in the absence of supply shocks or cyclical unemployment, inflation perpetuates itself**.

**Why?** Past inflation shapes expectations → expectations shape wages and prices → wages and prices determine current inflation. There is a self-fulfilling feedback loop:

$$\pi_{t-1} \xrightarrow{\text{shapes}} E\pi_t \xrightarrow{\text{shapes}} \pi_t$$

> [!warning] The policy implication of inertia
> To *reduce* inflation, you cannot simply announce a lower target and hope for the best. You must either (a) engineer a recession to create slack ($u > u_n$), or (b) change expectations credibly so $E\pi$ falls on its own. This is the core tension in anti-inflation policy.

---

## 📊 The Short-Run Phillips Curve (SRPC)

### Graphing the Tradeoff

In the short run (given $E\pi$ and $\nu$), policymakers face a **downward-sloping tradeoff** between inflation and unemployment:

```
  π │  (high Eπ → higher SRPC)
    │  SRPC₁ (Eπ high)
    │ ↘
    │   SRPC₀ (Eπ baseline)
    │    ↘
    │─────────────────── u
         uₙ
```

- Moving *along* the SRPC: expanding AD → $u \downarrow$, $\pi \uparrow$; contracting AD → $u \uparrow$, $\pi \downarrow$.
- The SRPC is *not* fixed: it **shifts** when $E\pi$ or $u_n$ changes.

### What Shifts the SRPC?

| Shift factor | Direction | Mechanism |
|---|---|---|
| Higher expected inflation ($E\pi \uparrow$) | SRPC shifts **up** | Workers and firms pre-emptively raise wages/prices |
| Higher natural unemployment ($u_n \uparrow$) | SRPC shifts **right** | Cyclical unemployment falls for any given $u$, pushing inflation up |
| Adverse supply shock ($\nu \uparrow$) | SRPC shifts **up** | Direct cost-push pressure |

---

## 🔗 Short-Run vs Long-Run: Connecting AD-AS and the Phillips Curve

### Short-Run AD Shock

**AD-AS:** An increase in AD moves the economy along SRAS → $Y > \bar{Y}$, $P > EP$.  
**Phillips curve:** $u < u_n$ → $\pi > E\pi$. Economy moves along the SRPC — lower unemployment, higher inflation.

### Long-Run Adjustment

Over time, people observe $\pi > E\pi$ and update expectations upward ($E\pi \uparrow$):
- **AD-AS:** SRAS shifts up-left; output returns to $\bar{Y}$.
- **Phillips curve:** SRPC shifts up; inflation is now permanently higher even though $u = u_n$.

> [!tip] Long-run Phillips curve is vertical
> In the long run, $u = u_n$ regardless of the inflation rate. The economy is always at the natural rate in the long run — there is no permanent inflation-unemployment tradeoff. The LRPC is a vertical line at $u = u_n$.

---

## 💸 The Sacrifice Ratio

### What Is It?

If policymakers want to *reduce* inflation, they must tighten policy → raise unemployment above $u_n$ → move up the SRPC to lower $\pi$. But this costs real GDP.

The ==sacrifice ratio== measures:

$$\boxed{\text{Sacrifice Ratio} = \frac{\text{\% of one year's real GDP lost}}{\text{Percentage point reduction in inflation}}}$$

A typical empirical estimate is **5**: reducing inflation by 1 pp costs 5% of a year's GDP.

> [!example] Paul Volcker's Disinflation (1981–1985)
> The Fed tightened aggressively to bring inflation from **9.7%** (1981) to **3.0%** (1985) — a 6.7 pp reduction.
>
> | Year | $u$ | $u_n$ | Cyclical $u = u - u_n$ |
> |------|-----|--------|------------------------|
> | 1982 | 9.5% | 6.0% | 3.5% |
> | 1983 | 9.5% | 6.0% | 3.5% |
> | 1984 | 7.4% | 6.0% | 1.4% |
> | 1985 | 7.1% | 6.0% | 1.1% |
> | **Total** | | | **9.5%** |
>
> By Okun's Law (1% unemployment = 2% GDP):
> - Lost GDP = 9.5% × 2 = **19% of a year's real GDP**
> - Sacrifice ratio = 19 / 6.7 = **2.8**
>
> The realised ratio (2.8) was *far below* the historical average (5). Why? Possibly because Volcker's credibility caused $E\pi$ to fall faster than under adaptive expectations alone — rational expectations at work.

---

## 🧠 Rational Expectations

### The Concept

==Rational expectations== assume people use *all available information* — including knowledge of current and future policy — when forming inflation expectations. This contrasts with adaptive expectations, which only use past data.

| | Adaptive Expectations | Rational Expectations |
|---|---|---|
| **Information used** | Past inflation only | All available information + policy announcements |
| **Implied inertia** | High | Low |
| **Cost of disinflation** | Potentially large | Potentially small |

### Painless Disinflation?

If the central bank credibly announces a disinflation plan, and if people have rational expectations:

1. $E\pi$ drops *immediately* — without waiting for a recession.
2. Phillips curve: $\pi = E\pi - \beta(u - u_n) + \nu$ → if $E\pi \downarrow$ by the same amount as the inflation target, $u$ need not rise above $u_n$.
3. Inflation falls with **no sacrifice in GDP or employment**.

> [!warning] Why this may not work in practice
> Painless disinflation requires *perfect credibility*. If the public doubts whether the central bank will follow through, adaptive expectations dominate, and the sacrifice ratio remains large. The Volcker episode suggests partial credibility: the sacrifice ratio was lower than the historical average but not zero. True painless disinflation has never been fully observed.

---

## 🔁 Hysteresis

### The Natural-Rate Hypothesis

The ==natural-rate hypothesis== says: changes in aggregate demand affect output and employment only in the **short run**. In the long run, the economy always returns to its natural rates ($\bar{Y}$, $u_n$). This is the assumption underlying all preceding analysis.

### Hysteresis: A Challenge to the Natural-Rate Hypothesis

==Hysteresis== refers to the possibility that **negative shocks can permanently raise the natural rate of unemployment**. The economy may not fully recover.

**Mechanisms:**
1. **Skill atrophy:** Workers unemployed during a recession may lose skills or fall out of professional networks. When recovery comes, they may be structurally unemployable — raising $u_n$ permanently.
2. **Insider-outsider dynamics:** Employed "insiders" bargain for higher wages for themselves. Long-term unemployed "outsiders" lose bargaining power and become structurally unemployed, even after the recession ends.

> [!tip] Why hysteresis matters for policy
> If hysteresis is real, the costs of a deep recession are *not* temporary — they permanently worsen the economy's supply side. This strengthens the case for aggressive counter-cyclical stabilisation policy (preventing the recession in the first place) rather than accepting unemployment as a short-run cost of disinflation.

---

## 📋 Summary

| Concept | Key equation/formula | Key insight |
|---------|---------------------|-------------|
| **Sticky-price model** | $p = P + a(Y - \bar{Y})$ | Firms want prices to reflect demand; sticky-price firms use expectations |
| **SRAS curve** | $Y = \bar{Y} + \alpha(P - EP)$ | Output rises above $\bar{Y}$ only when prices exceed expectations |
| **Phillips curve** | $\pi = E\pi - \beta(u - u_n) + \nu$ | Inflation-unemployment SR tradeoff; derived from SRAS |
| **Inflation inertia** | $\pi = \pi_{-1} - \beta(u - u_n) + \nu$ | Past inflation perpetuates itself via adaptive expectations |
| **Sacrifice ratio** | $\approx 5$ (typical) | % GDP lost per 1 pp reduction in inflation |
| **Rational expectations** | $E\pi$ uses all info | May allow painless disinflation if credibility is high |
| **Hysteresis** | Recession → $u_n \uparrow$ | Deep recessions can permanently raise the natural unemployment rate |

### Chapter Takeaways

The SRAS curve slopes upward because some prices are sticky and only flexible-price firms can respond immediately to output conditions. Rewriting this in terms of unemployment and inflation yields the Phillips curve, which shows policymakers a short-run menu: lower unemployment at the cost of higher inflation (or vice versa). But this menu is not fixed — it shifts with inflation expectations and supply shocks. Reducing inflation is costly in terms of lost output (the sacrifice ratio), unless expectations adjust rapidly under rational expectations and credible policy. Finally, hysteresis warns that tolerating unemployment may have permanent consequences, not just transitory ones.

---

## 🔗 Related Notes

- [[Lec_06-AS-AD Model & Economic Fluctuations]] — introduced the SRAS/LRAS/AD framework; horizontal SRAS was assumed there
- [[Lec_05-Inflation]] — Quantity Theory of Money underpins the long-run relationship between money and inflation
- [[Lec_07-Aggregate Demand I & the IS-LM Model]] — IS-LM model determines aggregate demand
- [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] — AD curve derivation; policy effects in SR vs LR
- [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] — extends AD analysis to open economy
