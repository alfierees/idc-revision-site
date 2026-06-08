---
title: Fixed Effects in Panel Data
week: 8
semester: 2
year: 2
course: Applied Econometrics
lecture: "Lecture 08 — Fixed Effects in Panel Data"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - panel-data
  - fixed-effects
  - within-estimator
  - demeaning
  - clustered-standard-errors
  - two-way-fixed-effects
  - instrumental-variables
  - time-fixed-effects
aliases:
  - Fixed Effects
  - Panel Data
  - Within Estimator
  - Individual Fixed Effects
subject: econometrics
in_scope: true
---
# Fixed Effects in Panel Data

> Part of: [[Econometrics]]
> **Lecture 08** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Panel Data]], [[Fixed Effects]], [[Within Estimator]], [[Demeaning]], [[Between Variation]], [[Within Variation]], [[Time Fixed Effects]], [[Two-Way Fixed Effects]], [[Clustered Standard Errors]], [[Individual Fixed Effect]], [[First Stage]], [[Two Stage Least Squares]]

---

## 🗂️ What is Panel Data?

**Panel data** tracks the *same individuals* (people, firms, cities, judges…) across *multiple time periods*.

- Each individual appears in the dataset more than once — once per time period
- This gives you both **cross-sectional variation** (differences between individuals) and **time variation** (changes within an individual over time)

> [!tip] Why panel data is powerful
> With cross-sectional data, you can only compare different individuals to each other. With panel data, you can compare the *same individual to themselves* at different points in time — which controls for all the stable, individual-level characteristics you can't observe or measure.

---

## 🔥 Motivating Example: Temperature and Immigration Judges

**Paper**: Heyes & Saberian (2019)

**Question**: Does outdoor temperature affect how immigration judges make decisions?

**Why ask this?** If judges are supposed to be impartial, then outdoor temperature — which is outside their control — should have *zero* effect on their decisions. A significant temperature effect would suggest that physiological or psychological factors are influencing what should be a purely legal judgement.

**Data**:
- 206,924 asylum decisions
- 266 immigration judges
- 43 cities
- January 2000 – September 2004

**Outcome** ($r_{it}$): whether the judge granted asylum (1 = yes, 0 = no), as a fraction across decisions in a given period

**Treatment** ($h_{it}$): outdoor temperature (°F) on the day of the hearing

---

## 🧮 Building Up the Model: Step by Step

### Step 0: The Naive Model

$$r_{it} = \alpha + \beta h_{it} + u_{it}$$

Just regress asylum grant rate on temperature. Problem: this ignores that asylum grant rates differ enormously across **nationalities** (some countries have much higher grant rates than others), and across **cities** (some courts are more liberal).

### Step 1: Control for Nationality

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality}_{it} + u_{it}$$

After adding nationality fixed effects, the coefficient on temperature is marginally insignificant ($p = 0.059$).

> [!info] Why add nationality controls?
> Nationality strongly predicts grant rate — Syrian or Afghan asylum seekers have much higher grant rates than others. If certain nationalities cluster in certain cities, and those cities happen to be hotter, nationality would confound the temperature-grant rate relationship. We control for it to remove this bias.

---

## ⏱️ Time Fixed Effects: Controlling for Calendar Shocks

Any event that affects *all* judges in *all* cities on the same day is a "time shock". Examples:
- A big Supreme Court ruling that changes interpretation of asylum law
- A major news event that shifts public opinion

**Time fixed effects** absorb these: one dummy variable per time period that captures everything that changes uniformly across all observations in that period.

### Repeated Cross Sections with Time Controls

We can add time controls in two ways:

**Option A — Linear time trend**: include a variable $t = 1, 2, 3, \ldots$ (day, month, or year number)

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality} + \delta_1 \text{day\_of\_week} + \delta_2 \text{month} + \delta_3 \text{year} + u_{it}$$

**Option B — Dummy variable time fixed effects**: one dummy per time period (more flexible — allows any non-linear time pattern)

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality} + \sum_{\tau} \lambda_\tau D_\tau + u_{it}$$

> [!tip] Linear trend vs. dummy time fixed effects
> A linear time trend forces the relationship with time to be a straight line. Dummy time fixed effects make no such assumption — they let the time effect be completely flexible, zig-zagging in any pattern. Dummy FEs use more degrees of freedom but are more robust to non-linear time patterns.

> [!info] What does a time fixed effect "absorb"?
> Imagine a nationwide policy change that makes judges tougher in a particular month. A month fixed effect absorbs this — it picks up the average shift in grant rates in that month across all cities. After including it, the remaining variation in grant rates is *within* a given month, across cities.

---

## 👥 Between Variation vs. Within Variation

This distinction is central to understanding fixed effects.

### Between Variation: Comparing Averages Across Individuals

$$\bar{r}_i = \frac{1}{T} \sum_{t=1}^T r_{it} \qquad \bar{h}_i = \frac{1}{T} \sum_{t=1}^T h_{it}$$

**Between variation**: the variation in *mean* grant rates across judges / cities.

> [!warning] Why between variation is dangerous for causal inference
> If some cities are both hotter *and* more lenient (e.g. because of the local political culture), then comparing city averages will show a correlation between temperature and leniency — but it's driven by the city culture, not temperature. This is **between-individual confounding** (also called self-selection or omitted variable bias).
>
> Example: Alfie lives in Tel Aviv (hot and strict courts) while Barak lives in Seattle (cold and lenient courts). Comparing them tells you about Tel Aviv vs. Seattle culture, not about temperature effects.

![[Lec08_within_between.png|620]]

> [!warning] The sign can flip entirely
> Each coloured cluster is one individual (judge/city), and *within* every cluster the slope is **negative** — hotter days mean a lower grant rate. But the cluster means (black X's) climb from bottom-left to top-right, so pooled OLS reports a **positive** between-slope. That dashed line is pure confounding: hotter places happen to be stricter for unrelated reasons. Fixed effects throw away the between variation and keep only the within slopes — recovering the true negative effect.

### Within Variation: Comparing the Same Individual Across Time

$$\ddot{r}_{it} = r_{it} - \bar{r}_i \qquad \ddot{h}_{it} = h_{it} - \bar{h}_i$$

**Within variation**: how much a variable deviates from *that individual's own mean*.

$\ddot{r}_{it}$ asks: "On this day, did judge $i$ grant asylum more or less than she usually does?"
$\ddot{h}_{it}$ asks: "Was today hotter or cooler than this city's average temperature?"

> [!tip] The power of within variation
> By looking only at deviations from individual means, you control for **everything that is stable about that individual** — their personality, their background, the court culture, the city's climate on average. Within variation compares Alfie to Alfie on a hot day vs. a cool day, not Alfie to Barak.

---

## 🏛️ The Individual Fixed Effects Model

$$\boxed{y_{it} = \beta_0 + \beta_1 x_{it} + a_i + u_{it}}$$

- $y_{it}$: outcome for individual $i$ at time $t$
- $x_{it}$: time-varying treatment/covariate
- $a_i$: **individual fixed effect** — a catch-all for everything about individual $i$ that doesn't change over time
- $u_{it}$: remaining idiosyncratic error

> [!info] What does $a_i$ absorb?
> $a_i$ captures **all time-invariant characteristics of individual $i$** — observed or unobserved. For a judge, this might include:
> - Personality traits (inherent strictness/leniency)
> - Legal training and philosophy
> - Regional court culture
> - Average climate of their city
>
> You never need to measure these things — the fixed effect absorbs them all. This is why fixed effects are so powerful for causal inference.

- $\beta_1$ measures the **average within-individual effect** of $x$ on $y$: "when $x$ increases for individual $i$, how does $y$ change for that same individual $i$?"

---

## 🔧 How to Estimate Fixed Effects: Within-Estimation (Demeaning)

You could, in principle, add a dummy variable for every individual $i$ in the regression. But with many individuals (e.g. 266 judges), this is unwieldy. **Within-estimation** (demeaning) achieves the same result more efficiently.

### Step 1: Demean all variables

For each individual $i$, compute their time-average, then subtract it:

$$\ddot{y}_{it} = y_{it} - \bar{y}_i \qquad \ddot{x}_{it} = x_{it} - \bar{x}_i$$

This removes the individual fixed effect $a_i$ entirely (since $\bar{a}_i = a_i$ for a time-constant term):

$$\ddot{y}_{it} = \beta_1 \ddot{x}_{it} + \ddot{u}_{it}$$

### Step 2: Run OLS on the demeaned data

$$\hat{\beta}_1^{\text{within}} = \frac{\sum_i \sum_t \ddot{x}_{it} \ddot{y}_{it}}{\sum_i \sum_t \ddot{x}_{it}^2}$$

> [!example] Demeaning in practice — judge example
> Judge Smith makes decisions on 200 cases. Her average grant rate is 35%. On hot days, her grant rate is 30%; on cool days, 40%.
>
> After demeaning:
> - Hot days: $\ddot{r} = 30\% - 35\% = -5\%$
> - Cool days: $\ddot{r} = 40\% - 35\% = +5\%$
>
> We regress these deviations on deviations of temperature from Smith's average temperature. If hotter-than-usual days consistently correspond to lower-than-usual grant rates, $\hat{\beta}_1 < 0$.

![[Lec08_demeaning.png|640]]

> [!example] What demeaning does to the data
> On the left, each individual sits at its own height — the X's mark their personal means $(\bar x_i, \bar y_i)$. Subtracting those means slides every cluster onto a common origin (right), erasing the individual fixed effect $a_i$. All that remains is the within variation, and a single regression through the stacked clusters recovers the within slope $\hat\beta_1$ — identical to adding a dummy for every individual, but far cheaper.

> [!info] Adding individual dummies vs. demeaning: same result
> Running OLS with a dummy for every individual $i$ produces exactly the same $\hat{\beta}_1$ as demeaning. The demeaning approach just avoids including hundreds of dummy variables explicitly. This equivalence is the **Frisch-Waugh-Lovell theorem** in action again.

---

## 🌆 City Fixed Effects

Apply individual fixed effects at the **city** level:

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality} + \alpha_c + u_{it}$$

where $\alpha_c$ is a fixed effect for city $c$ — absorbing all time-invariant city characteristics (court culture, demographics, local legal norms, average climate).

```r
feols(res ~ Temperature + region | city, data = asy.data)
```

**Result**: After adding city fixed effects, the temperature coefficient becomes **insignificant** ($p = 0.54$).

> [!warning] What this tells us
> The raw (unadjusted) relationship between temperature and grant rate is explained by **city-level confounders** — not by temperature itself. Hotter cities may simply have stricter courts for unrelated reasons. Once we control for city fixed effects, the within-city variation in temperature is unrelated to grant rates.

---

## 📅 Two-Way Fixed Effects: City + Month

Control for both city-level and month-level fixed effects simultaneously:

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality} + \alpha_c + \alpha_m + u_{it}$$

```r
feols(res ~ Temperature + region | city + month, data = asy.data)
```

- $\alpha_c$: absorbs city characteristics
- $\alpha_m$: absorbs any systematic variation in grant rates across months (e.g. summer vs. winter court backlogs)

> [!tip] Why add month fixed effects?
> Temperature is seasonal — it's higher in summer months than winter months. If courts are also systematically busier or stricter in summer (e.g. because immigration flows spike), then without month FEs, you'd be comparing "hot summer days in city X" to "cold winter days in city X" — confounded by the summer/winter court dynamic. Month FEs remove this confound.

---

## 🔀 Interacted Fixed Effects: City × Month

Go further: a fixed effect for each **city-month combination**:

$$r_{it} = \alpha + \beta h_{it} + \gamma \cdot \text{nationality} + \alpha_{cm} + u_{it}$$

```r
feols(res ~ Temperature + region | city^month, data = asy.data)
```

- 43 cities × ~12 months = ~463 fixed effects
- Absorbs anything that is stable within a given city-month cell (e.g. "Boston courts in January always behave this way")
- More demanding — uses more degrees of freedom but provides much cleaner identification

---

## ⚖️ Judge × Month Two-Way Fixed Effects

The most demanding specification: a fixed effect for each **judge-month combination**:

$$r_{it} = \alpha + \beta h_{it} + \alpha_{jm} + u_{it}$$

```r
feols(res ~ Temperature | judge^month, data = asy.data)
```

- 266 judges × ~12 months ≈ 2,677 fixed effects
- Absorbs individual judge tendencies *that vary by month* (e.g. Judge Smith is always stricter in January)
- Highest within-$R^2$: this specification explains the most variance in grant rates

> [!info] Progression of fixed effect specifications
> | Specification | Fixed effects | What's controlled |
> |---|---|---|
> | Nationality only | Nationality | Applicant country |
> | + City FE | Nationality + City | Everything stable about a city |
> | + Month FE | Nationality + City + Month | Stable city traits + seasonal patterns |
> | City × Month FE | Nationality + City×Month | City traits + city-specific seasonality |
> | Judge × Month FE | Judge×Month | Everything stable about each judge each month |

---

## 📏 Clustered Standard Errors

When using fixed effects, the standard OLS standard errors are usually **wrong**. Why? Because observations within the same group (same judge, same city) are likely correlated with each other in ways the model doesn't fully capture.

### What are clustered standard errors?

They account for **within-group correlation** of errors — the fact that observations in the same cluster are not independent.

$$\text{Cluster at the level of the fixed effect}$$

> [!tip] Rule of thumb
> **Cluster your standard errors at the level of your fixed effect** (or coarser). If you have city fixed effects, cluster at the city level. If you have judge fixed effects, cluster at the judge level. This ensures your inference is valid even when errors are correlated within cities/judges.

### Comparison of SE types

| SE type | When to use | Code |
|---|---|---|
| **Huber-White (HC)** | Heteroskedasticity across observations (different error variance for different obs) | `vcov = 'hetero'` |
| **Newey-West (HAC)** | Time series: serial correlation + heteroskedasticity | `vcov = 'newey_west'` |
| **Clustered** | Panel data: within-group error correlation | `cluster = ~city` |

```r
# Heteroskedasticity-robust SEs
feols(res ~ Temperature | city, data = asy.data, vcov = 'hetero')

# Newey-West HAC SEs
feols(res ~ Temperature | city, data = asy.data, vcov = 'newey_west')

# City-clustered SEs
feols(res ~ Temperature | city, data = asy.data, cluster = ~city)
```

> [!warning] Don't use default (homoskedastic) SEs with panel data
> Default OLS standard errors assume all errors are i.i.d. — equal variance and independent. In panel data with fixed effects, within-group error correlation is almost guaranteed. Using default SEs will make your estimates look more precise than they are, inflating t-statistics and producing spuriously significant results.

---

## 🎲 Preview: Instrumental Variables in Panel Data

**Paper**: Cai, De Janvry & Sadoulet (2013) — insurance take-up among Chinese rice farmers.

**Research question**: Does social learning / peer effects drive insurance take-up? (i.e. if your friends buy insurance, does that make you buy it too?)

**The endogeneity problem**: A farmer's insurance take-up might be correlated with their friends' take-up simply because they face similar risks (shared weather, shared information) — not because of peer influence. This is **correlated unobservables** — a classic OVB problem.

### The Instrument: Default Buy Option

In a randomised trial, some farmers were assigned a **default "buy" option** (opt-out rather than opt-in for insurance). This randomisation:
1. **Affects** their friends' actual take-up rate (relevant ✅)
2. **Only affects** the farmer's own take-up via how it affects their friends' take-up (excludable ✅) — the default assignment was random, so it has no direct effect on the farmer's fundamentals

$$\text{First stage: } \text{pre\_takeup\_rate}_{it} = \gamma_0 + \gamma_1 \text{default\_buy}_{it} + \eta_{it}$$

$$F\text{-stat} = 54.8 \quad \text{(strong instrument)}$$

### 2SLS in `feols`

```r
feols(takeup ~ 1 | pre_takeup_rate ~ default_buy, data = farmers)
```

The `|` separates the first-stage instrument from the main equation. The F-stat of 54.8 far exceeds the rule-of-thumb threshold of 10, confirming a strong first stage.

> [!info] Wu-Hausman test for endogeneity
> The **Wu-Hausman test** checks whether the endogenous regressor is actually endogenous (i.e. whether OLS is biased). Null hypothesis: OLS is consistent (regressor is exogenous). If the test rejects, we have evidence that IV is necessary.
>
> A significant Wu-Hausman test here confirms that friends' take-up rate is genuinely endogenous — OLS would have given biased estimates.

> [!tip] Why does randomisation of default options solve endogeneity?
> Default assignment is random — farmers didn't self-select into "default buy" vs. "default don't buy". So it's uncorrelated with the farmer's own risk exposure, risk preferences, and other confounders. The only channel through which default assignment can affect a farmer's outcome is via their peers' take-up. This is exactly what makes it a valid instrument.

---

## 🎯 Summary

1. **Panel data** tracks the same individuals over time. It enables within-individual comparisons that control for all time-invariant characteristics.

2. **Between variation** compares averages across individuals — vulnerable to cross-individual confounders (self-selection, culture, etc.).

3. **Within variation** compares an individual to themselves over time — controls for all stable individual traits, observed or not.

4. **Individual fixed effects model**: $y_{it} = \beta_0 + \beta_1 x_{it} + a_i + u_{it}$. The $a_i$ absorbs all time-invariant traits of individual $i$. $\beta_1$ is the within-individual effect of $x$.

5. **Within-estimation (demeaning)**: subtract each variable's individual mean ($\ddot{y}_{it} = y_{it} - \bar{y}_i$), then run OLS on the demeaned data. Equivalent to adding individual dummy variables.

6. **City fixed effects** control for time-invariant city characteristics. After adding them, temperature's effect on asylum grant rates disappears — city confounders were driving the raw correlation.

7. **Two-way fixed effects** add a second dimension (e.g. city + month, or judge × month) for more rigorous control of multiple sources of confounding.

8. **Clustered standard errors** are required when observations within a group (city, judge) have correlated errors. Cluster at the level of the fixed effect.

9. **IV in panel data**: when the key regressor is endogenous even within individuals, use instruments. The default buy randomisation isolates exogenous variation in peers' take-up, enabling causal identification of peer effects.

---

## 📎 Related Notes

- Previous: [[Lec_07-Time Trends and Event Studies]] — time trends, detrending, event studies
- Hub: [[Econometrics]]
- Key concepts: [[Panel Data]], [[Fixed Effects]], [[Within Estimator]], [[Demeaning]], [[Between Variation]], [[Within Variation]], [[Time Fixed Effects]], [[Two-Way Fixed Effects]], [[Clustered Standard Errors]], [[Individual Fixed Effect]]
- IV concepts: [[Instrumental Variables]], [[Two Stage Least Squares]], [[First Stage]], [[Wu-Hausman Test]], [[Endogeneity]]
