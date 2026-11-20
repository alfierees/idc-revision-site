---
title: Interaction Terms
week: 11
semester: 1
year: 2
academic_year: "2025-26"
course: Introduction to Econometrics
lecture: "Lecture 11 — Interaction Terms, Chow Tests & Hedonic Pricing"
date: 2026-06-12
tags:
  - intro-econometrics
  - interaction-terms
  - chow-test
  - chow-fisher-test
  - hedonic-pricing
  - dummy-variables
  - F-test
  - OLS
aliases:
  - Interaction Terms
  - Chow Test
  - Chow-Fisher Test
  - Hedonic Pricing
  - Lecture 11 Intro Metrics
  - Different Slopes for Different Groups
subject: intro-econometrics
in_scope: true
---

# Interaction Terms

> Part of: [[Intro Econometrics]] | Key concepts: [[Interaction Term]], [[Chow Test]], [[Chow-Fisher Test]], [[Hedonic Pricing]], [[Dummy Variable]], [[F-test]], [[Omitted Variable Bias]]

---

## 📚 Where this lecture sits

> [!info] The thread from last week
> Last week ([[Lec_10-Dummy Variables]]) showed how a ==dummy variable== lets each group have its **own intercept** — but it forced every group to share the **same slope** (parallel lines). That is a strong, often wrong, assumption: the marginal effect of education on wage, or of alcohol content on price, may genuinely *differ* across groups. This lecture removes that straitjacket. The ==interaction term== lets the **slope itself** vary across groups, and the ==Chow test== gives a formal way to ask "are these two (or more) groups described by the *same* regression, or by genuinely different ones?"

The lecture has three strands:

1. **Hedonic pricing** (a worked review of [[Omitted Variable Bias]]): how adding product-characteristic controls flips the sign of the time trend in computer prices — and what "controlling for quality" really buys you. Needed for HW 7.
2. **Interaction terms:** dummy × continuous (different slopes), and dummy × dummy (interaction between two categories).
3. **Chow / Chow-Fisher tests:** two equivalent ways (pooled-with-dummies, or separate regressions) to test whether groups share a common regression function, including how to count the restrictions $q$.

---

## Part 0 — Review: dummies and categorical variables

Quick recap of the machinery this lecture builds on. ^dummy-recap

A binary dummy $is.A_i$ (=1 if observation $i$ is in category A, else 0) enters linearly:

$$Y_i = \beta_0 + \beta_1 X_i + \beta_2\, is.A_i + u_i$$

Splitting by group, the slope $\beta_1$ is shared and only the intercept moves by $\beta_2$:

| Group | Model becomes | Intercept |
|-------|---------------|-----------|
| Not A | $Y_i = \beta_0 + \beta_1 X_i + u_i$ | $\beta_0$ |
| A | $Y_i = (\beta_0 + \beta_2) + \beta_1 X_i + u_i$ | $\beta_0 + \beta_2$ |

For a variable with $K$ categories we create $K-1$ dummies; the omitted group is the ==base category== and every coefficient is read **relative to it**. To test whether the categorical variable matters *as a whole*, restrict all its dummies to zero jointly and use an **F-test** ($H_0:\beta_2=\beta_3=0$); for a single binary dummy a **t-test** suffices.

> [!tip] The limitation that motivates today
> Dummies give different **intercepts** but a **common slope** — parallel lines. The whole point of an interaction term is to break the parallelism and let each group's line tilt differently.

---

## Part 1 — Hedonic pricing (omitted-variable bias in action)

> [!info] The question
> Based on the paper *"Price Indexes for Microcomputers"*, we want to measure how PC prices changed over **1980–1988**, the years personal computers became mainstream. The dependent variable is the (log) list price; the running variable is `YEAR`.

### The naïve regression — a misleading non-result

> [!example] `ln_price ~ YEAR`
> ```
> Coefficients: Estimate Std. Error t value Pr(>|t|)
> (Intercept)   5.99242    1.33905   4.475  9.4e-06 ***
> YEAR          0.01779    0.01565   1.137  0.256
> Multiple R-squared: 0.0024   F-statistic: 1.293 on 1 and 528 DF
> ```
> The time trend is **positive and insignificant** ($p = 0.26$, $R^2 \approx 0$). Read literally: "PC prices barely moved, if anything rose slightly, over the decade." That is the opposite of the truth.

> [!warning] Why the naïve coefficient is wrong: the product changed
> A 1988 computer is **not the same product** as a 1980 one — it has more RAM, a faster processor, a bigger disk. The raw `YEAR` coefficient mixes two things: the price change *of a fixed computer* and the price change *from buying a better computer*. Quality is an **omitted variable** correlated with `YEAR`, so $\hat\beta_{YEAR}$ is biased toward zero (even positive). This is exactly the [[Omitted Variable Bias]] story from [[Lec_10-Dummy Variables]].

### Adding controls — the sign flips

Add processor-type dummies (`PROC16`, `PROC32`; 8-bit is the base), a black-and-white screen dummy (`DBW`) and a portable dummy (`DPORT`):

> [!example] `ln_price ~ YEAR + PROC16 + PROC32 + DBW + DPORT`
> ```
> Coefficients: Estimate Std. Error t value Pr(>|t|)
> (Intercept) 16.56651   1.31025   12.644  <2e-16 ***
> YEAR        -0.11315   0.01556   -7.270  1.3e-12 ***
> PROC16       0.85908   0.07327   11.724  <2e-16 ***
> PROC32       1.87927   0.11994   15.668  <2e-16 ***
> DBW          0.16282   0.06376    2.554  0.0109 *
> DPORT       -0.17039   0.08616   -1.978  0.0485 *
> Multiple R-squared: 0.363
> ```
> Now `YEAR` is **negative and highly significant**: holding processor and screen type fixed, prices fell ≈11% per year. Once we stop comparing apples (cheap old machines) to oranges (powerful new ones), the genuine downward price trend appears.

### Full specification — the hedonic model

Add the logged quantitative characteristics (`ln_ram`, `ln_mhz`, `ln_hardisc`, `ln_slots`, `ln_numflp`):

> [!example] Full model — `ln_price ~ YEAR + processor/screen dummies + logged characteristics`
> ```
> Coefficients: Estimate Std. Error t value Pr(>|t|)
> (Intercept) 30.43992   1.18295   25.732  <2e-16 ***
> YEAR        -0.30154   0.01487  -20.277  <2e-16 ***
> PROC16       0.27929   0.05751    4.856  1.6e-06 ***
> PROC32       0.67969   0.10863    6.257  8.4e-10 ***
> DBW          0.12001   0.04471    2.684  0.0075 **
> DPORT        0.44401   0.06478    6.854  2.1e-11 ***
> ln_ram       0.20183   0.02839    7.110  4.0e-12 ***
> ln_mhz       0.32726   0.05338    6.131  1.8e-09 ***
> ln_hardisc   0.19372   0.01543   12.556  <2e-16 ***
> ln_slots     0.18755   0.03039    6.171  1.4e-09 ***
> ln_numflp    0.60119   0.07045    8.534  <2e-16 ***
> Multiple R-squared: 0.726
> ```
> With full quality controls, `YEAR` $= -0.30$: a quality-constant computer got **≈30% cheaper each year**, and $R^2$ jumps from 0.36 to 0.73. The more characteristics we hold fixed, the more of the apparent price stability is revealed to be quality improvement.

> [!info] What hedonic pricing means ^hedonic-pricing
> ==Hedonic pricing== decomposes the price of a heterogeneous good into the implicit prices of its **characteristics**. The coefficient on `YEAR` then measures the price change of a *"computer unit" of constant quality* — what you would actually pay over time for the same bundle of features. It is the standard method for building quality-adjusted price indexes for goods with lots of variation: PCs, real estate, cars.

> [!tip] Two modelling rules from this example
> - **Dummy variables always enter linearly** (you cannot take a log of a 0/1 variable).
> - **Take logs of the quantitative characteristics** — this is a demand/price function, so a log-log form gives coefficients that read as **elasticities** and tends to fit better.

---

## Part 2 — Interaction terms: letting slopes differ

> [!info] The motivating gap
> Dummies move the intercept but keep the lines **parallel**. What if the regression lines for two groups have **different slopes** — e.g. an extra year of schooling raises men's wages by more (or less) than women's? We need a term that lets the *marginal effect* of a continuous variable depend on group membership. That term is the ==interaction term==.

### Constructing the interaction

Interact the dummy `male` with the continuous variable `schooly`:

$$Y_i = \beta_0 + \beta_1\, schooly_i + \beta_2\, male_i + \beta_3\,(schooly_i \cdot male_i) + u_i$$ ^interaction-model

The interaction term is literally the **product** of the two variables. For women it switches off; for men it equals `schooly`:

$$schooly_i \cdot male_i = \begin{cases} schooly_i \cdot 0 = 0 & \text{if female} \\ schooly_i \cdot 1 = schooly_i & \text{if male} \end{cases}$$

### What each group's line looks like

| Group | $male_i$ | Model becomes | Intercept | Slope |
|-------|----------|---------------|-----------|-------|
| Women | $0$ | $Y_i = \beta_0 + \beta_1 schooly_i + u_i$ | $\beta_0$ | $\beta_1$ |
| Men | $1$ | $Y_i = (\beta_0+\beta_2) + (\beta_1+\beta_3)\,schooly_i + u_i$ | $\beta_0+\beta_2$ | $\beta_1+\beta_3$ |

> [!note] Interpreting the four coefficients ^interaction-interpretation
> - $\beta_0$ = intercept for the **base group** (women).
> - $\beta_1$ = slope (return to schooling) for the **base group** (women).
> - $\beta_2$ = the **intercept gap** between men and women (the pure dummy effect).
> - $\beta_3$ = the **slope gap**: how much *more* (or less) a year of schooling is worth to men than to women.
>
> So men's return to schooling is $\beta_1 + \beta_3$. With $\beta_2 > 0$ and $\beta_3 < 0$, men start higher but their line is flatter — the lines can even cross. The two groups now differ in **both** slope and intercept.

> [!tip] The boxed takeaway
> $$\boxed{\text{dummy} \Rightarrow \text{different intercept};\quad \text{dummy} \times \text{continuous} \Rightarrow \text{different slope}}$$

### Worked R example — does the return to schooling differ by sex?

> [!example] `ln_wage ~ schooly + age_g + agesq + origin_ussr + married + divorced + male + schooly_male`
> ```
> Coefficients:    Estimate    Std. Error t value Pr(>|t|)
> (Intercept)  -0.63033498  0.08722324  -7.227  5.3e-13 ***
> schooly       0.09289182  0.00330030  28.146  <2e-16 ***
> ...
> male          0.12722976  0.06557115   1.940  0.0524 .
> schooly_male -0.00025413  0.00457271  -0.056  0.9557
> ```
> The interaction `schooly_male` is **tiny and insignificant** ($p = 0.96$): the return to a year of schooling is essentially the **same** for men and women. The intercept gap `male` is significant only at ≈10%.

> [!warning] Interactions inflate collinearity
> `male` and `schooly_male` are highly correlated by construction (one is the other times `schooly`), so adding the interaction term **drains significance from `male`** — its t-value fell once `schooly_male` entered. A jointly-relevant pair can look individually weak; reach for a **joint F-test** when in doubt (same lesson as multicollinearity in [[Lec_08-Goodness of Fit & Multicollinearity]]).

### Interactions between two dummies

You can also interact a dummy with **another dummy** — useful for asking whether a penalty is *compounded* for people in two categories at once.

> [!example] Are USSR-born women penalised *more* than additive effects predict?
> Build `ussr_male = origin_ussr × male` and estimate `ln_wage ~ ... + origin_ussr + male + ussr_male`:
> ```
> origin_ussr -0.15648770  0.02660990  -5.881  4.2e-09 ***
> male         0.11306168  0.01512553   7.475  8.4e-14 ***
> ussr_male    0.07107255  0.03873032   1.835  0.0665 .
> ```
> The four group intercepts (assume everyone single) are built by adding the relevant coefficients:
>
> | Group | Intercept |
> |-------|-----------|
> | Women, Israel (base) | $-0.627$ |
> | Men, Israel | $-0.627 + 0.113$ |
> | Women, USSR | $-0.627 - 0.156$ |
> | Men, USSR | $-0.627 + 0.113 - 0.156 + 0.071$ |
>
> The interaction `ussr_male` $= +0.071$ is only marginally significant ($p = 0.067$): USSR-born men recover a little of the immigrant penalty relative to what the two separate dummies alone would predict, but the evidence is weak.

> [!note] Why the interaction term is the deviation from additivity
> Without `ussr_male`, the model forces the USSR penalty to be **identical** for men and women (and the male premium identical across origins). The interaction coefficient measures exactly the **departure from that additive assumption** — the "extra" effect of being in both categories at once.

---

## Part 3 — Interaction terms vs. separate regressions

You can let *every* coefficient differ by group in two equivalent ways:

1. **One pooled regression** with the group dummy interacted with every regressor.
2. **Separate regressions**, one per group.

> [!tip] When to prefer separate regressions
> Interacting the dummy with many regressors gets unwieldy fast (one extra term per variable). Running **separate regressions** for men and women is cleaner and — importantly — allows the **error variance to differ** between groups, which improves efficiency if the groups really are heteroskedastic relative to each other. The pooled-with-interactions model implicitly assumes a **common** error variance.

Estimating `ln_wage ~ schooly + age_g + agesq + origin_ussr + married + divorced` **separately** on women and on men gives visibly different coefficient vectors (e.g. women's intercept $-0.268$ vs men's $-0.884$, women's return to schooling $0.096$ vs men's $0.090$). The formal question — *are these differences real, or sampling noise?* — is answered by the **Chow test**.

---

## Part 4 — Chow tests: do two groups share one regression?

> [!info] The Chow test ^chow-test
> A ==Chow test== asks whether two (or more) groups are described by the **same** regression function (same intercept *and* same slopes) or by **different** ones. It is just an **F-test** of a joint restriction, with a specific name. There are two equivalent implementations.

### Version A — using dummy variables (pooled)

Start from $Y_i = \beta_0 + \beta_1 x_i + u_i$ and allow the group `man` to differ in **both** intercept and slope by adding the dummy and its interaction:

$$\underbrace{Y_i = \beta_0 + \beta_1 x_i + \beta_2\, man_i + \beta_3\,(x_i \cdot man_i) + u_i}_{\text{unrestricted}}$$

- Men: $Y_i = (\beta_0+\beta_2) + (\beta_1+\beta_3)x_i + u_i$
- Women: $Y_i = \beta_0 + \beta_1 x_i + u_i$

The null "men and women share one regression" is

$$H_0:\ \beta_2 = \beta_3 = 0.$$

The **restricted** model is the pooled $Y_i = \beta_0 + \beta_1 x_i + u_i$. Test with the usual F-statistic: ^chow-F

$$\boxed{F = \frac{(\text{RSS}_R - \text{RSS}_{UR})/q}{\text{RSS}_{UR}/(N-M)} \sim F(q,\,N-M)}$$

We reject if the intercept differs ($\beta_2 \neq 0$), the slope differs ($\beta_3 \neq 0$), or both.

> [!example] Wage regressions for men vs women
> ```
> > lfit   <- lm(ln_wage ~ schooly + male + schooly_male, mydata)
> > lfit_r <- lm(ln_wage ~ schooly, mydata)
> > anova(lfit, lfit_r)
>   Res.Df    RSS Df Sum of Sq      F      Pr(>F)
> 1  10169 6809.3
> 2  10171 6847.5 -2   -38.245 28.558  4.3e-13 ***
> ```
> $F = 28.56$ on $(2,\,10169)$ with $p \approx 4\times10^{-13}$: **reject** $H_0$. Men and women do **not** share the same wage regression.

> [!warning] With many regressors the restriction count grows
> If the base model has several explanatory variables, allowing **all** of them to differ by group means interacting the dummy with **each** one. For a model with intercept + 4 slopes, letting every coefficient vary adds 5 terms, so $H_0:\beta_5=\beta_6=\beta_7=\beta_8=\beta_9=0$ — an **F-test with 5 restrictions**.

### Version B — using separate regressions

Equivalently, fit the model separately on each group and combine the residual sums of squares. For men $Y_i = \beta_0^m + \beta_1^m x_i + u_i^m$ and women $Y_i = \beta_0^f + \beta_1^f x_i + u_i^f$, the null is

$$H_0:\ \beta_0^m = \beta_0^f,\ \ \beta_1^m = \beta_1^f$$

and the statistic uses the **pooled** RSS as restricted, and the **sum** of the group RSSs as unrestricted: ^chow-separate

$$F = \frac{\big(\text{RSS}_R - (\text{RSS}_m + \text{RSS}_f)\big)/q}{(\text{RSS}_m + \text{RSS}_f)/(N-M)} \sim F(q,\,N-M)$$

> [!note] What $N$ and $M$ mean here ^chow-NM
> - $N$ = total number of observations (both groups **pooled**).
> - $M$ = total number of parameters in the **unrestricted** model = parameters in the men's model **plus** parameters in the women's model.
> - $q = df_R - df_{UR}$ = the number of restrictions.

> [!example] Worked separate-regression Chow test (6-regressor wage model)
> With $\text{RSS}_m = 1375.8$, $\text{RSS}_f = 1164.8$, pooled $\text{RSS}_R = 2602.2$, $N = 8628$, and $M = 14$ (7 parameters $\times$ 2 groups), $q = 7$:
> $$F = \frac{(2602.2 - (1375.8 + 1164.8))/7}{(1375.8 + 1164.8)/(8628 - 14)} = 29.8 \;>\; F_{0.05}(7,\,8614) \approx 2.$$
> **Reject:** men and women have different wage regressions. (Same conclusion as Version A — the two versions are equivalent.)

### Comparison of the two versions

| | Version A — dummies (pooled) | Version B — separate regressions |
|---|---|---|
| What you estimate | one regression with dummy + interactions | one regression per group |
| Restricted RSS | RSS of pooled model (no dummies) | RSS of pooled model (no dummies) |
| Unrestricted RSS | RSS of the dummy-interacted model | $\text{RSS}_m + \text{RSS}_f$ (sum across groups) |
| Error variance | assumed **common** across groups | allowed to **differ** across groups |
| Result | identical F and decision ... | ... to Version A |
| Best when | few regressors; want common-variance efficiency | many regressors; worried about group heteroskedasticity |

### Counting the restrictions $q$

> [!tip] $q = df_R - df_{UR}$ — count parameters, subtract
> For $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$ (3 parameters):
>
> | Groups | Unrestricted df | Restricted df | $q$ |
> |--------|-----------------|---------------|-----|
> | 2 groups (A, W) | $N-6$ (3 params $\times$ 2) | $N-3$ | $(N-3)-(N-6) = \mathbf{3}$ |
> | 3 groups (A, W, F) | $N-9$ (3 params $\times$ 3) | $N-3$ | $(N-3)-(N-9) = \mathbf{6}$ |
>
> Shortcut: $q = (\text{params per group}) \times (\text{groups} - 1)$ — the number of coefficient equalities the null imposes.

> [!note] Chow tests over time
> If the "group" is a **time period** (e.g. before vs after a policy), the Chow test becomes a **structural-stability / structural-break test**: define a dummy = 1 in one period, build interaction terms, and F-test whether the relationship is stable across periods.

---

## Part 5 — The Chow-Fisher test (three or more groups)

The ==Chow-Fisher test== generalises the separate-regression Chow test to **more than two** groups — here, the demand for alcoholic beverages split into **beer, wine, and spirits**. ^chow-fisher

> [!info] Setup — demand for alcohol (British Columbia 2012)
> Log-log demand function (logs because it is a demand model):
> $$\ln(price_i) = \beta_0 + \beta_1 \ln abv_i + \beta_2 \ln volume_i + \beta_3 \ln units_i + \boldsymbol{\gamma'}\mathbf{Country}_i + u_i$$
> where `abv` = % alcohol by volume.

### Interactions reveal group-specific elasticities

Add interaction terms between the product-type dummies and `ln abv` (spirits is the base):

$$\ln(price_i) = \dots + \beta_4\, beer_i + \beta_5\, wine_i + \beta_{11}(beer_i \cdot \ln abv_i) + \beta_{12}(wine_i \cdot \ln abv_i) + u_i$$

Because the outcome and `abv` are both logged, $\beta_1$ (and $\beta_1$ + each interaction) is a **price elasticity with respect to abv**:

> [!example] Price elasticity of abv by product type
> With $\beta_1 = 1.522$, $\beta_{11} = -0.97545$ (beer), $\beta_{12} = +0.51056$ (wine):
> - **Spirits** (base): $1.522$
> - **Wine**: $1.522 + 0.51056 = \mathbf{2.033}$
> - **Beer**: $1.522 - 0.97545 = \mathbf{0.547}$
>
> The price sensitivity to alcohol content is **strongest for wine, weakest for beer** — exactly the kind of group-varying slope a single common coefficient would hide.

### The Chow-Fisher F-statistic

Run **separate regressions** for beer, wine, and spirits and combine their RSSs against the pooled (restricted) RSS:

$$F = \frac{\big(\text{RSS}_R - (\text{RSS}_{beer} + \text{RSS}_{wine} + \text{RSS}_{spirits})\big)/q}{(\text{RSS}_{beer} + \text{RSS}_{wine} + \text{RSS}_{spirits})/(N-M)}$$

> [!example] Activity 11, part 4 — the null and the test statistic
> The null says **every** coefficient is equal across the three product types:
> $$H_0:\ \beta_0^{beer}=\beta_0^{wine}=\beta_0^{spirits},\ \dots,\ \beta_3^{beer}=\beta_3^{wine}=\beta_3^{spirits},\ \gamma_1^{beer}=\gamma_1^{wine}=\gamma_1^{spirits},\dots$$
> With 9 parameters per group:
> - $q = 9 \times 2 = 18$ (each of the 9 coefficients set equal across the *two* extra groups).
> - $M = 9 \times 3 = 27$ (parameters in all three group regressions).
> - $N = 5844$.
> $$F = 25.47 \;>\; F_{0.975}(18,\,5844-27) = 1.754 \;\Rightarrow\; \textbf{reject } H_0.$$
> Beer, wine, and spirits do **not** follow a common demand regression.

> [!warning] Don't confuse $q$ and $M$
> $M$ counts **all** parameters in the unrestricted (all-groups-separate) model; $q$ counts the **equality restrictions** the null imposes, which is (params per group) $\times$ (groups $-1$). For 3 groups and 9 params: $M = 27$ but $q = 18$, **not** 27.

---

## 🧪 Practice exam — adding $X^2$, model choice, and OVB

> [!example] Setup
> Researchers believed $X$ and $Z$ alone explain $Y$:
> $$\text{(1)}\quad \ln Y = \gamma_0 + \gamma_1 X + \gamma_2 Z + u$$
> A researcher suspects $X^2$ also matters and estimates:
> $$\text{(2)}\quad \ln Y = \beta_0 + \beta_1 X + \beta_2 Z + \beta_3 X^2 + u$$
> $$\text{(3)}\quad \ln Y = \beta_0 + \beta_1 X + \beta_2 Z + \beta_3 \ln X^2 + u$$
> (All of $X,Y,Z$ are strictly positive.)

**1(a) — How did the researcher conclude $X^2$ matters?** From the **p-value of $\hat\beta_3$**, here $5.18\times10^{-7}$. It is far below 5%, so the coefficient on $X^2$ (in model 3) is significant ⟹ the variable is relevant.

**1(b) — Why is model (3) better than model (2)?** Compare **$R^2$** (or equivalently the RSSs): $R^2_{(3)} = 0.7778 > R^2_{(2)} = 0.7713$. Model (3) explains more variation, so the $\ln X^2$ specification fits better than the raw $X^2$ one.

> [!note] 2 — Which assumption does model (1) violate? (assume model 3 is the truth)
> If model (3) is the true DGF, then model (1) **omits** the relevant regressor $\ln X^2$, which is absorbed into the error $u$. If $Z$ and $\ln X^2$ are **correlated**, then in model (1) the error is correlated with the regressor $Z$: $\operatorname{cov}(u, Z)\neq 0$. This violates **assumption A2**, $\mathbb{E}[u_i \mid x_{1i},\dots,x_{Ki}] = 0$ (mean independence of the error from the regressors) — answer **(ii)**. The other classical assumptions (zero mean, no autocorrelation, homoskedasticity) are not what fails.

> [!tip] 3 — If $Z$ and $\ln X^2$ are *un*correlated, how do $\hat\gamma_2$ and $\beta_2$ compare?
> Omitting $\ln X^2$ from model (1) generally causes **omitted-variable bias** in the other coefficients, so we'd normally expect $\mathbb{E}[\hat\gamma_2] \neq \beta_2$. **But** OVB only transmits through **correlation** between the omitted variable and the included one. If $Z \perp \ln X^2$, omitting $\ln X^2$ does **not** bias the coefficient on $Z$: $\mathbb{E}[\hat\gamma_2] = \beta_2$ — answer **(iii)**. This is the precise condition under which OVB vanishes: *no correlation between the omitted and included regressor*.

---

## 📝 Summary

1. **Hedonic pricing / OVB review:** regressing PC `ln_price` on `YEAR` alone gives a *positive, insignificant* trend because newer machines are *better* machines — quality is an omitted variable correlated with time. Adding characteristic controls flips `YEAR` to strongly **negative** (≈−30%/yr with full controls). The `YEAR` coefficient then measures the price of a **constant-quality** "computer unit". Rules: dummies enter **linearly**, quantitative characteristics enter as **logs** (demand function).
2. A ==dummy variable== gives different **intercepts** but a common slope (parallel lines). An ==interaction term== — the **product** of a dummy and a continuous variable — gives different **slopes**. In $Y=\beta_0+\beta_1 x+\beta_2 D+\beta_3(xD)+u$: $\beta_2$ is the intercept gap, $\beta_3$ is the **slope gap**, and the value-1 group's slope is $\beta_1+\beta_3$.
3. **Dummy × dummy** interactions measure the **departure from additivity** — the extra effect of being in two categories at once (e.g. USSR-born *and* male). Interactions are highly collinear with their parents, so they **drain individual significance**; lean on joint F-tests.
4. Letting every coefficient differ by group can be done by **interacting the dummy with every regressor (pooled)** or by **separate regressions**. Separate regressions are cleaner with many regressors and allow **group-specific error variances**.
5. A ==Chow test== is an F-test of "do the groups share one regression?". Version A (dummies): $H_0:$ all dummy + interaction coefficients $=0$, unrestricted RSS from the interacted model. Version B (separate): unrestricted RSS $=\text{RSS}_1+\text{RSS}_2$, restricted RSS from the pooled model. The two are **equivalent**.
6. **Counting restrictions:** $q = (\text{params per group})\times(\text{groups}-1)$; $M = (\text{params per group})\times(\text{groups})$; $N$ = pooled sample size. For the 3-group alcohol model with 9 params: $q=18$, $M=27$.
7. The ==Chow-Fisher test== extends the separate-regression Chow test to **3+ groups** (beer/wine/spirits). Interactions with `ln abv` reveal different **elasticities** per type (wine 2.03, spirits 1.52, beer 0.55), and the F-test rejects a common demand regression.
8. **Exam OVB rule:** omitting a relevant variable biases an included coefficient **only if** the two are correlated. Correlated ⟹ A2 violated, $\mathbb{E}[u\mid X]\neq 0$, bias. Uncorrelated ⟹ that coefficient stays **unbiased** ($\mathbb{E}[\hat\gamma_2]=\beta_2$).

---

## 📎 Related Notes

- Previous: [[Lec_10-Dummy Variables]] — different intercepts per group (the parallel-lines case this lecture generalises)
- Next: [[Lec_12-Heteroskedasticity]] — non-constant error variance (and why separate-group regressions can be more efficient)
- Foundational: [[Lec_08-Goodness of Fit & Multicollinearity]] — the joint F-test and collinearity (which interactions worsen)
- Concepts: [[Interaction Term]], [[Chow Test]], [[Chow-Fisher Test]], [[Hedonic Pricing]], [[Omitted Variable Bias]], [[F-test]], [[Dummy Variable]]
- Hub: [[Intro Econometrics]]
