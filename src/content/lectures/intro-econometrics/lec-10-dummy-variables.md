---
title: Dummy Variables
week: 10
semester: 1
year: 2
academic_year: "2025-26"
course: Introduction to Econometrics
lecture: "Lecture 10 — Dummy Variables (Categorical Explanatory Variables)"
date: 2026-06-11
tags:
  - intro-econometrics
  - dummy-variables
  - categorical-variables
  - base-category
  - dummy-variable-trap
  - perfect-multicollinearity
  - OLS
aliases:
  - Dummy Variables
  - Categorical Variables in Regression
  - Lecture 10 Intro Metrics
  - Dummy Variable Trap
subject: intro-econometrics
in_scope: true
---

# Dummy Variables

> Part of: [[Intro Econometrics]] | Key concepts: [[Dummy Variable]], [[Base Category]], [[Dummy Variable Trap]], [[Perfect Multicollinearity]], [[F-test]], [[Model Misspecification]]

---

## 📚 Where this lecture sits

> [!info] The thread from last week
> Last week ([[Lec_08-Goodness of Fit & Multicollinearity]]) ended on **multicollinearity** — what happens when regressors are linearly related. This lecture opens with a short review of **model misspecification** (the related question of *which* variables to include), then introduces the central new tool: how to put **categorical** information (gender, marital status, country of origin, education level) into a regression that, mechanically, only understands numbers. The answer is the ==dummy variable==. The multicollinearity idea returns immediately — it is exactly what forces us to use **one fewer dummy than categories**.

The lecture has two strands:

1. **Review — model misspecification:** the two errors of variable choice (adding an irrelevant variable, omitting a relevant one) and how to detect and fix each.
2. **Main content — dummy variables:** binary dummies for two-category variables, sets of dummies for multi-category variables, the base-category logic, joint F-testing, the dummy-variable trap, and using dummies to capture **nonlinear** effects.

---

## Part 0 — Review: Model Misspecification

Throughout the course we *assumed* we already knew the correct set of explanatory variables. In practice you must choose them yourself, by **trial and error** — adding and removing variables until the specification is right. Two errors can occur. ^misspecification-types

> [!info] Running example — the price of beer
> Suppose the **true** data-generating function (model 0) is
> $$\log price = \beta_0 + \beta_1\log volume + \beta_2 \log units + \beta_3 \log abv + u$$
> where `volume` = litres per container, `units` = cans/bottles sold together, `abv` = % alcohol by volume.

### Error 1 — Adding an irrelevant variable

We estimate, with `random.noise` $\sim N(0,1)$ tacked on:

$$\log price = \hat\beta_0 + \hat\beta_1\log volume + \hat\beta_2\log units + \hat\beta_3\log abv + \hat\beta_4\,\text{random.noise} + \hat u$$

> [!tip] Consequence: harmless to bias, costly to precision
> Including an irrelevant regressor **does not bias** $\hat\beta_0,\dots,\hat\beta_3$ — they stay unbiased. The only cost is the precision hit from any partial collinearity the junk variable introduces (the variance-inflation story from Lecture 8).

- **How to spot it:** you *fail to reject* $H_0:\beta_4 = 0$.
- **How to fix it:** drop the variable and re-estimate. With a **single** suspected junk variable, a **t-test** suffices; with **several**, use an **F-test** on the joint restriction and check the fit improves.

### Error 2 — Omitting a relevant variable

We estimate, leaving out the genuinely relevant $\log abv$:

$$\log price = \hat\beta_0 + \hat\beta_1\log volume + \hat\beta_2\log units + \hat u$$

> [!warning] Consequence: omitted-variable bias
> If the omitted variable ($\log abv$) **covaries** with an included one ($\log volume$), then $\hat\beta_1$ is **biased** — the included variable picks up part of the omitted variable's effect. This is the more dangerous error: it corrupts the coefficients you care about.

- **How to fix it:** if you have data on the missing variable, add it (estimate model 0) and test $H_0:\beta_3 = 0$. Reject ⟹ keep the variable. As always, then check for partial collinearity.

> [!note] The asymmetry to remember ^misspecification-asymmetry
> Adding junk → **unbiased but less precise** (recoverable). Omitting a relevant, correlated variable → **biased** (not recoverable from the same data). When in doubt about a borderline variable that correlates with your regressor of interest, the safer error is to *keep* it.

---

## Part 1 — Dummy Variables: the binary case

Until now every regressor was **continuous** (a real number). But much of what explains an outcome is **categorical**:

- gender, nationality, occupation → affect wages
- season → affects demand
- family status → affects hours worked

Regression only understands numbers, so we **translate** a category into a binary (0 or 1) variable. In econometrics this is a ==dummy variable==. ^dummy-definition

> [!info] Naming convention
> A dummy is **named after the value it takes when it equals 1**. So `man` $= 1$ for men and $0$ for women; `woman` $= 1$ for women and $0$ for men. Reading the name tells you which group is coded 1.
> $$man = \begin{cases} 1 & \text{if gender is man} \\ 0 & \text{if gender is woman} \end{cases}$$

### How a dummy shifts the intercept

Take wage as a function of education and gender:

$$Y_i = \beta_0 + \beta_1 x_i + \beta_2\, man_i + u_i$$

where $x_i$ = years of education. Splitting by group shows what each coefficient *means*:

| Group | $man_i$ | Model becomes | Intercept |
|-------|---------|---------------|-----------|
| Women | $0$ | $Y_i = \beta_0 + \beta_1 x_i + u_i$ | $\beta_0$ |
| Men | $1$ | $Y_i = (\beta_0 + \beta_2) + \beta_1 x_i + u_i$ | $\beta_0 + \beta_2$ |

> [!tip] A dummy produces two parallel lines
> Both groups share the **same slope** $\beta_1$ (the marginal effect of education is assumed equal for men and women). The dummy only shifts the **intercept**. The vertical gap between the two parallel lines is exactly $\beta_2$.

> [!note] Interpreting each coefficient ^dummy-interpretation
> - $\beta_0$ = intercept for **women** (the group coded 0) — wage of a woman with zero education.
> - $\beta_0 + \beta_2$ = intercept for **men** — wage of a man with zero education.
> - $\beta_2$ = the **wage gap**: how much more a man earns than a woman with the *same* education.
> - $\beta_1$ = marginal effect of education, **common** to both groups.
>
> Sign reading: $\beta_2 > 0$ ⟹ men earn more; $\beta_2 < 0$ ⟹ men earn less; $\beta_2 = 0$ ⟹ no gap. Testing $H_0:\beta_2 = 0$ is a **test of discrimination**.

### Reversing the dummy changes nothing of substance

Use `woman` instead of `man`:

$$Y_i = \tilde\beta_0 + \tilde\beta_1 x_i + \tilde\beta_2\, woman_i + v_i$$

> [!tip] Only the sign flips, never the magnitude
> Switching from `man` to `woman` gives $\tilde\beta_2 = -\beta_2$ — same size, opposite sign — and now $\tilde\beta_0$ is the **men's** intercept. The fitted lines, predictions, and the test of discrimination are **identical**. The choice of which category is coded 1 is purely cosmetic.

### Worked R example — the gender wage gap

> [!example] `ln_wage ~ schooly + age_g + agesq + male`
> ```
> Coefficients:        Estimate  Std. Error t value   Pr(>|t|)
> (Intercept)        -1.16722657  0.07405767 -15.761   <2e-16 ***
> schooly             0.09690805  0.00235077  41.224   <2e-16 ***
> age_g               0.15300905  0.00362554  42.203   <2e-16 ***
> agesq              -0.00153057  0.00004272 -35.831   <2e-16 ***
> male                0.13120339  0.01408364   9.316   <2e-16 ***
> Multiple R-squared: 0.3711      F-statistic: 1500 on 4 and 10168 DF
> ```
> Since the outcome is **log** wage, $\hat\beta_{male} = 0.131$ reads as **men earn ≈ 13.1% more** than women with the same age and education — and it is highly significant ($t = 9.3$).

> [!note] Predicting a level wage (log-dependent variable)
> For a **woman** aged 30 with 12 years of education:
> $$\ln(wage) = -1.167 + 0.097(12) + 0.153(30) - 0.0015(900) + 0.131(0) \approx 3.23 \;\Rightarrow\; wage \approx 25.4$$
> For an identical **man** ($male = 1$): $\ln(wage) \approx 3.36 \Rightarrow wage \approx 29.0$. The jump from 25.4 to 29.0 is the same **≈13.1%** the coefficient promised.

> [!warning] Reversing confirms the symmetry
> Re-running with `female` (= 1 for women) flips the coefficient to **$-0.131$** and moves the intercept from $-1.167$ (women's) to $-1.036$ (men's). Note $-1.036 - 0.131 = -1.167$: the two intercepts always differ by exactly $|\beta_2|$.

### Activity 10, part 1 — domestic vs foreign beer

> [!example] $\log price = \beta_0 + \beta_1\log volume + \beta_2\log units + \beta_3\log abv + \beta_4\, is.domestic + u$
> with `is.domestic` = 1 if the beer is Canadian, 0 otherwise. The estimated $\hat\beta_4 = -0.18472$, so the difference in $\log price$ between **domestic and foreign** beer is **$-0.185$**: domestic (Canadian) beer is about 18.5% cheaper than foreign beer with the same volume, units, and abv.

### Adding a second dummy — multiple binary controls

Dummies stack. Add `origin_ussr` (= 1 if born in the USSR) to the wage model:

> [!example] `ln_wage ~ schooly + age_g + agesq + female + origin_ussr`
> $\hat\beta_{origin\_ussr} = -0.132$: those born in the USSR earn **≈13% less** than otherwise-identical people (same age, gender, education).

> [!warning] What two independent dummies *assume*
> With both `female` and `origin_ussr` entered additively, the model assumes the gaps are **separable and constant**: the male–female gap (−0.128) is the *same* for USSR-born and non-USSR-born people, and the USSR gap (−0.132) is the *same* for men and women. The four group intercepts are just sums:
>
> | Group | Intercept |
> |-------|-----------|
> | Man, not USSR (base) | $-1.038$ |
> | Woman, not USSR | $-1.038 - 0.128$ |
> | Man, USSR | $-1.038 - 0.132$ |
> | Woman, USSR | $-1.038 - 0.128 - 0.132$ |
>
> Relaxing this "constant gap" assumption — letting the gender gap *differ* by origin — is exactly what **interaction terms** ([[Lec_11-Interaction Terms]]) are for.

---

## Part 2 — Categorical variables with more than two categories

A variable like **family status** has three values: married, single, divorced. We represent $K$ categories with $K-1$ dummies. Using **single** as the omitted (base) group:

$$y_i = \beta_0 + \beta_1 x_i + \beta_2 D_1 + \beta_3 D_2 + u_i$$

| Category | $D_1$ | $D_2$ |
|----------|-------|-------|
| Married | $1$ | $0$ |
| Divorced | $0$ | $1$ |
| **Single** (base) | $0$ | $0$ |

This creates **three regression lines** with different intercepts but a common slope:

| Group | Intercept |
|-------|-----------|
| Married | $\beta_0 + \beta_2$ |
| Divorced | $\beta_0 + \beta_3$ |
| Single (base) | $\beta_0$ |

> [!info] The base category is the reference point ^base-category
> The group coded **0 on every dummy** is the ==base (control) category==. *Every* coefficient is interpreted **relative to it**: $\beta_2$ is the married-vs-single gap, $\beta_3$ the divorced-vs-single gap. Choosing the base is arbitrary, but it changes what each coefficient *compares against*, so always state it.

### Why you must drop one dummy — the dummy-variable trap

> [!warning] The dummy-variable trap = perfect multicollinearity ^dummy-trap
> If you include a dummy for **every** category plus an intercept,
> $$y_i = \beta_0 + \beta_1 x_i + \beta_2 D_1 + \beta_3 D_2 + \beta_4 D_3 + u_i,$$
> you create **perfect multicollinearity**, because the dummies sum to 1 for everyone:
> $$D_3 = 1 - D_1 - D_2.$$
> One dummy is an exact linear function of the others (and the constant), the OLS first-order conditions become redundant, and **no unique solution exists**. R silently drops one dummy. The rule is absolute:
> $$\boxed{K \text{ categories} \Rightarrow K-1 \text{ dummies (plus the intercept)}}$$
> The omitted category becomes the base. This is the same mechanism as the perfect-collinearity result from [[Lec_08-Goodness of Fit & Multicollinearity]].

### Significance testing — use a joint F-test, not separate t-tests

> [!warning] Don't t-test individual dummies for "category significance"
> Because the base category is **arbitrary**, a single t-test on $H_0:\beta_2 = 0$ only asks "is married different from *single*?" — it says nothing about whether **family status as a whole** matters. To test the overall effect of a categorical variable, restrict **all** its dummies to zero jointly and use an **F-test**:
> $$H_0:\beta_2 = \beta_3 = 0.$$
> This is the same joint-restriction logic as the multicollinearity diagnosis in Lecture 8: individually weak dummies can be **jointly** significant.

### Worked R example — marital status

> [!example] `log_wage_per_hour ~ schooly + age + agesq + female + ussrborn + arab + married + divorced`
> ```
> Coefficients:   Estimate Std. Error t value Pr(>|t|)
> (Intercept)     1.360729   0.103052  13.204   <2e-16 ***
> schooly         0.078422   0.001827  42.936   <2e-16 ***
> age             0.277831   0.022074  12.586   <2e-16 ***
> agesq          -0.012220   0.001135 -10.763   <2e-16 ***
> female         -0.182158   0.011767 -15.480   <2e-16 ***
> ussrborn       -0.196914   0.015999 -12.308   <2e-16 ***
> arab           -0.259704   0.019186 -13.536   <2e-16 ***
> married         0.170373   0.016378  10.402   <2e-16 ***
> divorced        0.040444   0.026623   1.519    0.129
> ```
> With **single** as the base: married people earn **≈17% more** than singles (highly significant); divorced earn **≈4% more** than singles, but only significant at the 12.9% level.

### Activity 10, part 2 — base category and a prediction

> [!example] Questions on the marital-status regression
> **(a) What is the overall base category?** The group coded 0 on *every* dummy: **male, not born in USSR, Jewish (non-Arab), single**.
>
> **(b) Predicted wage of a single Jewish woman born in the USSR, aged 40, 16 years of education?**
> $$\ln(wage) = 1.3607 + 0.0784(16) + 0.278(40) - 0.0122(1600) - 0.182 - 0.197 + 0 = -6.1639$$
> $$wage = e^{-6.1639} \approx 0.0021$$
> (Only `female` and `ussrborn` switch on; `married` and `divorced` are 0 because she is single — the base for marital status.)

---

## Part 3 — Dummies for nonlinear effects

Dummies aren't only for genuine categories. They are also a flexible way to capture a **nonlinear** marginal effect of an underlying continuous variable — here, education. ^dummies-nonlinear

> [!info] The idea
> Instead of forcing a single linear coefficient on "years of education", convert education into **brackets** (highest diploma) and give each bracket its own dummy. Each person falls in exactly one bracket, so only one dummy is "on". This lets each level of education shift the intercept by a *different*, freely-estimated amount — a step function rather than a straight line.

The five diploma levels (one becomes the base):

| Code | Meaning |
|------|---------|
| HSD | High school, no *bagrut* (matriculation) — **base** |
| HSG | High school with *bagrut* |
| SC | Post-high-school certificate |
| CG | Undergraduate degree |
| PC | Post-graduate (master's or higher) |

> [!example] `ln_wage ~ age + agesq + female + ussr + HSG + SC + CG + PC`
> ```
> Coefficients:  Estimate  Std. Error t value  Pr(>|t|)
> (Intercept)   0.65599250 0.09884423   6.637  3.5e-11 ***
> age           0.12040626 0.00492425  24.452  <2e-16 ***
> agesq        -0.00120131 0.00005784 -20.770  <2e-16 ***
> ussr         -0.23310881 0.02536835  -9.189  <2e-16 ***
> HSG           0.01725424 0.02804976   0.615  0.538
> SC            0.31032637 0.03105285   9.993  <2e-16 ***
> CG            0.61595207 0.02798668  22.009  <2e-16 ***
> PC            0.81316002 0.03258451  24.955  <2e-16 ***
> ```
> Each diploma coefficient is the **wage premium over HSD** (the base): a certificate (SC) pays ≈31% more than no-bagrut high school, an undergraduate degree (CG) ≈62% more, a postgraduate degree (PC) ≈81% more. HSG (bagrut alone) is **not** significantly above HSD ($p = 0.54$) — finishing high school without a certificate adds little. The premiums **increase with level** but in uneven steps — precisely the nonlinearity a single linear `years` term would miss.

> [!note] Predicting from the diploma model
> Predicted hourly wage (NIS) for a woman aged 40 born in the USSR with an undergraduate degree (CG = 1):
> $$\ln(wage) = 0.656 + 0.12(40) - 0.0012(1600) - 0.233(1) + 0.616(1) = 3.9$$
> $$wage = e^{3.9} \approx 50.0 \text{ NIS}$$

> [!example] Activity 10, part 3 — differences between brackets
> Because the outcome is log-wage, **differences of coefficients** give percentage wage gaps directly.
> **(a) Undergraduate (CG) vs postgraduate (PC), all else equal:** $0.813 - 0.616 = \mathbf{19.8\%}$ — a postgraduate earns ≈19.8% more than an otherwise-identical undergraduate.
> **(b) Postgraduate born in USSR vs certificate (SC) born in Israel, same age:**
> $$\underbrace{0.813}_{PC} \;\underbrace{-\;0.233}_{ussr} \;\underbrace{-\;0.31}_{SC} = \mathbf{27\%}.$$
> The USSR penalty applies only to the first woman; the SC premium only to the second, so it is *subtracted* when comparing her to the PC woman.

---

## 🧪 Practice exam — a linear restriction across two coefficients

> [!example] Setup
> Hypothesis: "adding $C$ to the log building area changes the apartment price by **4 times** the change from adding the same $C$ to the log lot size." Unrestricted model:
> $$lprice = \beta_0 + \beta_1\, lsqrft + \beta_2\, llotsize + \beta_3\, bdrms + u$$

**(a) The null hypothesis.** "4× the effect" means $\beta_1 = 4\beta_2$, i.e.
$$H_0: 4\beta_2 = \beta_1.$$

**(b)/(c) The restricted model.** Impose $\beta_1 = 4\beta_2$ and collect terms:
$$lprice = \beta_0 + \beta_2\big(\underbrace{4\cdot lsqrft + llotsize}_{\text{new variable } size}\big) + \beta_3\, bdrms + u.$$
So the restricted regression has dependent variable $lprice$ and just **two** regressors: $bdrms$ and the constructed variable $size = 4\,lsqrft + llotsize$. The restriction removes one parameter ($q=1$).

**(d) The F-statistic.** With $\text{RSS}_R = 4.4698$, $\text{RSS}_{UR} = 2.862557$, $q = 1$ restriction, and $N - M = 84$ residual degrees of freedom:
$$F = \frac{(\text{RSS}_R - \text{RSS}_{UR})/q}{\text{RSS}_{UR}/(N-M)} = \frac{(4.4698 - 2.862557)/1}{2.862557/84} \approx 47.16.$$

**(e)/(f) Decision.** Critical value $F_{1,84}(5\%) \approx 4$. Since $47.16 > 4$, **reject $H_0$** at 5%.

> [!warning] (g) Can a t-test replace this F-test?
> **No.** The null relates **two parameters to each other** ($4\beta_2 = \beta_1$) rather than fixing a single coefficient to a constant. A t-test handles a hypothesis about *one* coefficient (or, with rearrangement, one linear combination tested via a reparameterised model), but the standard "read-off-the-output" t-test cannot test a cross-parameter restriction directly — the F-test on the restricted-vs-unrestricted RSS is the right tool. (Connects to the F-in-$R^2$ caveat from [[Lec_08-Goodness of Fit & Multicollinearity]]: the $R^2$ form fails here because the restricted model's dependent variable variance is unchanged but the restriction is not of the simple $\beta_j = 0$ type.)

---

## 📝 Summary

1. **Model misspecification** has two errors. *Adding an irrelevant variable* keeps coefficients **unbiased** (only hurts precision) — spot it with a failed t-test, fix by dropping. *Omitting a relevant, correlated variable* causes **bias** — the dangerous error; fix by adding the variable back. When unsure, keep a borderline variable that correlates with your regressor of interest.
2. A ==dummy variable== converts a category into 0/1 and is **named after the value-1 group**. In $Y = \beta_0 + \beta_1 x + \beta_2 D + u$, the dummy shifts the **intercept** only, producing **parallel lines**; $\beta_2$ is the gap between the value-1 group and the value-0 group.
3. **Reversing** a dummy (man ↔ woman) flips the sign of its coefficient but leaves the magnitude, fitted lines, and tests **identical**. With a log outcome, a dummy coefficient ≈ a **percentage** difference (e.g. `male` = 0.131 → men earn ≈13.1% more).
4. For a **$K$-category** variable use **$K-1$ dummies** plus the intercept. Including all $K$ creates the **dummy-variable trap** = perfect multicollinearity ($D_K = 1 - \sum_{j<K} D_j$), so no unique OLS solution exists.
5. The omitted group is the **base category**; every dummy coefficient is read **relative to it**. To test whether a categorical variable matters *as a whole*, use a **joint F-test** ($H_0$: all its dummies = 0), never separate t-tests — the base choice is arbitrary.
6. Dummies also model **nonlinear effects**: bracket a continuous variable (e.g. education into diploma levels) and give each bracket its own dummy, letting each level shift the intercept by a freely-estimated, uneven step. Coefficient **differences** give bracket-to-bracket percentage gaps.
7. A hypothesis **relating two parameters** ($4\beta_2 = \beta_1$) is tested with the **F-test** on restricted-vs-unrestricted RSS, not a standard t-test.

---

## 📎 Related Notes

- Previous: [[Lec_09-Model Misspecification & Quadratics]] — omitted and irrelevant variables and quadratics, the misspecification ideas that dummies extend
- Earlier: [[Lec_08-Goodness of Fit & Multicollinearity]] — perfect vs partial multicollinearity (the engine behind the dummy-variable trap), the joint F-test
- Next: [[Lec_11-Interaction Terms]] — letting the *slope* (effect size) differ across groups, relaxing the constant-gap assumption of additive dummies
- Then: [[Lec_12-Heteroskedasticity]]
- Foundational: [[OLS Estimation]], [[F-test]], [[Perfect Multicollinearity]], [[Model Misspecification]]
- Concepts: [[Dummy Variable]], [[Base Category]], [[Dummy Variable Trap]], [[Omitted Variable Bias]]
- Hub: [[Intro Econometrics]]
