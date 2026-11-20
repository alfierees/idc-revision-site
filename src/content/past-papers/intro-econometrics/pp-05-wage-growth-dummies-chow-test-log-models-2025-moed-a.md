---
title: "2025 Moed A — Wage Growth, Dummies, Chow Test & Log Models"
type: past-paper
status: worked-solution
semester: 1
year: 2
course: "Intro Econometrics"
instructor: Dr. Aluma Dembo
exam: "Final Exam 2025 — Moed A (25 Feb 2025)"
tags:
  - intro-econometrics
  - past-paper
  - worked-solution
  - dummy-variables
  - interaction-terms
  - chow-test
  - f-test
  - multicollinearity
  - log-models
  - heteroskedasticity
aliases:
  - Intro Metrics 2025 Moed A
  - Dembo 2025 Moed A
  - Thai Engineers Wage Exam
subject: intro-econometrics
in_scope: true
---

# 2025 Moed A — Wage Growth, Dummies, Chow Test & Log Models

> Part of: [[Intro Econometrics]]
> **Final Exam 2025, Moed A** (25 Feb 2025, 3 hours, open notes, 100 points) — Introduction to Econometrics, Dr. Aluma Dembo
> Key concepts: [[t-test]], [[F-test]], [[p-value]], [[Confidence Interval]], [[Dummy Variable]], [[Base Category]], [[Interaction Term]], [[Quadratic Model]], [[Marginal Effect]], [[Chow Test]], [[Change of Variables]], [[Log-Level Model]], [[Elasticity]], [[R-squared]], [[Adjusted R-squared]], [[Multicollinearity]], [[Heteroskedasticity]], [[White Correction]], [[Regression Through the Origin]]
> Builds on: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]], [[Lec_13-Exam Review]], [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]

> [!warning] No official key: every answer in this note is AI-written
> This paper came **without a solutions file**. All 18 questions (Q1 to Q18) are solved here from the course notes, the formula sheet logic and the R output printed in the paper. Each answer carries its own warning. Check before relying on it. Arithmetic was re-derived in Python. Critical values come from exact `scipy` quantiles; the exam expects the **printed tables**, whose nearest row can differ in the second decimal but never changes a conclusion below.

> [!info] Format reminder
> Open notes. Every multiple-choice answer needs a 1 to 2 sentence justification, so each MC question below gives the verdict, the justification, and why every other option is wrong. Rounding to 3 significant figures is allowed.

---

## What this paper tests

> [!info] The one idea behind each half
> - **Part I (52 pts), Thai engineers' wages (N = 403).** Everything is about **categorical and non-linear regressors**: an interaction (`male.educ`) gives men and women different education slopes (Q2, Q3); a squared term makes marginal effects depend on the sample point (Q4); the **joint F-test** is the right test for a whole dummy block (Q7) and for "no growth" (Q5); the **Chow test** compares separate regressions (Q8); and **rescaling units** moves coefficients predictably (Q9).
> - **Part II (48 pts), `sample.data` (N = 125).** The outcome is `log(Y)`, so every coefficient is a **log-level** one. Themes: a one-sided t-test (Q10), why $R^2$ cannot compare a **no-intercept** model (Q11, Q12), detecting **partial multicollinearity** (Q13), confidence intervals (Q14), log-level and elasticity readings (Q15 to Q17), and what **heteroskedasticity / White standard errors** do to OLS (Q18).
> - Two traps worth remembering: the **base category** is the dummy that is missing (Q6), and the $R^2$ of a model with **no intercept** is not comparable (Q11).

---

# Part I: Wage growth of engineers (52 pts)

> [!info] Data (N = 403, Thailand, July 1998)
> `wage` (monthly THB), `yrs.exp` (years at current job), `yrs.exp.sq`, `start.wage`, `prev.yrs.exp` (+ square), `educ`, `is.male`, `male.educ` (= `educ` × `is.male`), and degree dummies `hs.dropout`, `hs.grad`, `polytech`, `college`, `post.college`.

## Q1 — Is `prev.yrs.exp.sq` irrelevant in Model [1]? (5 pts)

**Question.** Model [1]: 

$$start.wage = \beta_0 + \beta_1\, is.male + \beta_2\, educ + \beta_3\, male.educ + \beta_4\, prev.yrs.exp + \beta_5\, prev.yrs.exp.sq + u$$

The R output `wage.1` estimates Model [1]. What number lets you conclude `prev.yrs.exp.sq` does **not** affect starting wage at $\alpha = 1\%$? (1 pt for the number, 4 pts for the explanation.)

**R output `wage.1` (N = 403, 397 df):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | 3393.344 | 2136.125 | 1.589 | 0.1130 |
| is.male | -17752.432 | 2827.402 | -6.279 | 8.96e-10 |
| educ | 669.883 | 168.133 | 3.984 | 8.05e-05 |
| male.educ | 1556.837 | 208.436 | 7.469 | 5.18e-13 |
| prev.yrs.exp | 197.521 | 78.891 | 2.504 | 0.0127 |
| prev.yrs.exp.sq | -2.759 | 2.254 | -1.224 | 0.2217 |

Residual SE 4812 on 397 df; $R^2 = 0.607$, adj. $R^2 = 0.6021$; F = 122.6 on 5 and 397 df.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **The p-value 0.2217** (equivalently the t-statistic $-1.224$).

**Explanation.** Test $H_0:\beta_5 = 0$ against $H_1:\beta_5 \neq 0$. The p-value $0.2217 > 0.01$, so we **fail to reject** $H_0$ at 1%. Equivalent route: $|t| = 1.224$ is below the two-sided 1% critical value $t_{0.005}(397) \approx 2.59$ (about 2.576 from the table's large-df row). So the squared term is statistically indistinguishable from zero.

> [!tip] Intuition
> "Fail to reject" is not "proved irrelevant". With $\hat\beta_5 = -2.759$ and SE $2.254$ the data simply cannot tell the coefficient from zero. The question phrases it as "does not affect", which is the conventional reading of failing to reject.

---

## Q2 — Gender-specific models from Model [2] (6 pts)

**Question.** Model [2]: $start.wage = \beta_0 + \beta_1\, is.male + \beta_2\, educ + \beta_3\, male.educ + \beta_4\, prev.yrs.exp + u$. Use the output `wage.2`.

**R output `wage.2` (398 df):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | 3652.6 | 2126.9 | 1.717 | 0.0867 |
| is.male | -17489.3 | 2821.0 | -6.200 | 1.42e-09 |
| educ | 671.2 | 168.2 | 3.989 | 7.88e-05 |
| male.educ | 1553.3 | 208.6 | 7.448 | 5.93e-13 |
| prev.yrs.exp | 105.3 | 23.4 | 4.500 | 8.92e-06 |

Residual SE 4815 on 398 df; $R^2 = 0.6055$, adj. $R^2 = 0.6016$.

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Estimated model for men and for women (2 pts)

> [!success] Answer
> - **Women** ($is.male = 0$, $male.educ = 0$): $\widehat{start.wage} = 3652.6 + 671.2\, educ + 105.3\, prev.yrs.exp$
> - **Men** ($is.male = 1$, $male.educ = educ$): $\widehat{start.wage} = (3652.6 - 17489.3) + (671.2 + 1553.3)\, educ + 105.3\, prev.yrs.exp = -13836.7 + 2224.5\, educ + 105.3\, prev.yrs.exp$

**Why.** The dummy $is.male$ shifts the **intercept** by $-17489.3$; the interaction $male.educ$ shifts the **education slope** by $+1553.3$. The experience slope is common to both groups.

### b. Man, 0 years previous experience, 12 years of education (1 pt)

> [!success] Answer
> $-13836.7 + 2224.5(12) = -13836.7 + 26694 = \mathbf{12{,}857.3}$ THB

### c. Woman, same characteristics (1 pt)

> [!success] Answer
> $3652.6 + 671.2(12) = 3652.6 + 8054.4 = \mathbf{11{,}707.0}$ THB

### d. Man minus woman at 16 years of education, same previous experience (2 pts)

> [!success] Answer
> $\hat\beta_1 + \hat\beta_3(16) = -17489.3 + 1553.3(16) = -17489.3 + 24852.8 = \mathbf{7{,}363.5}$ THB higher for the man.

> [!example] Check
> Man at 16 years: $-13836.7 + 2224.5(16) = 21755.3$. Woman at 16 years: $3652.6 + 671.2(16) = 14391.8$. Difference $= 7363.5$. The previous-experience term cancels, which is why "same previous years of experience" lets you ignore it.

![[PP05_q2_men_women_lines.png|640]]

*Figure (theory diagram, numbers from the solution): the two fitted lines at `prev.yrs.exp` = 0. The male line starts far below the female line at low education (negative intercept shift) but is steeper, so the gap opens up from about 12 years of education onward: 1150.3 at 12 years (12857.3 vs 11707.0) and 7363.5 at 16 years.*

See [[Lec_11-Interaction Terms]] and [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]].

---

## Q3 — Same marginal effect of education for everyone? (5 pts)

**Question.** True or false: "In Model [2], the marginal effect of education on starting wage is the same for all observations." (1 pt verdict, 4 pts explanation)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **FALSE.**

**Explanation.** Because of the interaction $male.educ = educ \times is.male$:

$$\frac{\partial\, start.wage}{\partial\, educ} = \beta_2 + \beta_3\, is.male$$

For women this is $\hat\beta_2 = 671.2$ THB per extra year; for men it is $\hat\beta_2 + \hat\beta_3 = 671.2 + 1553.3 = 2224.5$ THB per extra year. It depends on gender (and the interaction is highly significant, $p = 5.93\times10^{-13}$), so it differs across observations. It would be constant only if $\beta_3 = 0$.

---

## Q4 — Marginal effect of experience in Model [3] (5 pts)

**Question.** Model [3]: $wage = \beta_0 + \beta_1\, start.wage + \beta_2\, yrs.exp + \beta_3\, yrs.exp.sq + u$. What is the estimated marginal effect of years of experience on wage? If not constant, evaluate it at the relevant sample average. (1 pt number, 4 pts working)

**R output `growth.3` (399 df) and means:**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | 3.974e+04 | 1.791e+04 | 2.219 | 0.02707 |
| start.wage | 1.985e+00 | 5.178e-02 | 38.336 | < 2e-16 |
| yrs.exp | -6.466e+03 | 2.654e+03 | -2.436 | 0.01529 |
| yrs.exp.sq | 2.599e+02 | 9.774e+01 | 2.659 | 0.00814 |

Residual SE 7877 on 399 df; $R^2 = 0.788$, adj. $R^2 = 0.7864$; F = 494.3 on 3 and 399 df.

Sample means: `wage` 34683, `yrs.exp` 13.51, `yrs.exp.sq` 185.7, `start.wage` 17158.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> $\widehat{ME} = -6466 + 2(259.9)(13.51) \approx \mathbf{556}$ THB per extra year of experience (at the mean $yrs.exp = 13.51$).

**Working.** `yrs.exp` appears in two terms, so

$$\frac{\partial\, wage}{\partial\, yrs.exp} = \beta_2 + 2\beta_3\, yrs.exp$$

depends on the level of experience. Evaluate at the sample mean of `yrs.exp` (13.51):

$$-6466 + 2(259.9)(13.51) = -6466 + 7022.5 \approx 556.5$$

> [!warning] Exam trap
> Use the mean of **`yrs.exp`** (13.51) inside $2\beta_3\, yrs.exp$. Do **not** plug in the mean of `yrs.exp.sq` (185.7): the derivative of $yrs.exp^2$ is $2\,yrs.exp$, and the mean of the square is not the square of the mean ($13.51^2 = 182.5 \neq 185.7$). Do not use the mean of `wage` either; it is not part of the derivative.

![[PP05_q4_marginal_effect_yrs_exp.png|640]]

*Figure (theory diagram, numbers from the solution): the marginal effect is a straight line in `yrs.exp`. It is negative below the turning point $6466/(2 \times 259.9) \approx 12.44$ years and positive above it; at the sample mean of 13.51 years it is about 556 THB.*

See [[Lec_13-Exam Review]] (quadratic terms) and [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]].

---

## Q5 — Testing "no wage growth" (5 pts)

**Question.** Define $growth = wage - start.wage$. How do you test that there is no wage growth in Model [3]? (A) the null in terms of Model [3]'s parameters (3 pts). (B) the restricted model under the null (2 pts).

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Null hypothesis (3 pts)

> [!success] Answer
> $H_0:\ \beta_0 = 0,\ \beta_1 = 1,\ \beta_2 = 0,\ \beta_3 = 0$ (four restrictions, $q = 4$). $H_1$: at least one of these fails.

**Why.** No growth means $wage = start.wage$ exactly (plus noise): $growth = 0$ on average whatever the experience. Rewrite Model [3] in growth form:

$$growth = \beta_0 + (\beta_1 - 1)\, start.wage + \beta_2\, yrs.exp + \beta_3\, yrs.exp.sq + u$$

Growth is zero for every value of the regressors only if the intercept, the coefficient on $start.wage$ **minus one**, and both experience coefficients are all zero. Note the restriction on $\beta_1$ is $=1$, not $=0$.

### b. Restricted model (2 pts)

> [!success] Answer
> $wage = start.wage + u$, equivalently $growth = u$ (no parameters at all).

Imposing $H_0$ removes every coefficient (the $start.wage$ coefficient is fixed at 1, so it moves to the left side). Because $\beta_1 = 1 \neq 0$ the dependent variable changes from $wage$ to $growth$.

> [!tip] Intuition
> Estimate the unrestricted model with $growth$ as the outcome and test that **all coefficients are zero**: $F = \dfrac{(RSS_R - RSS_{UR})/4}{RSS_{UR}/(N-4)}$ with $RSS_R = \sum growth_i^2$ and $q = 4$.

See [[Lec_13-Exam Review]] (F-test steps: new dependent variable when the null fixes a coefficient at a non-zero value).

---

## Q6 — Model [4]: degree dummies (5 pts)

**Question.** Model [4]:

$$wage = \beta_0 + \beta_1\, start.wage + \beta_2\, yrs.exp + \beta_3\, yrs.exp.sq + \beta_4\, hs.grad + \beta_5\, polytech + \beta_6\, college + \beta_7\, post.college + u$$

**R output `growth.4` (395 df):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | 4.370e+04 | 1.718e+04 | 2.544 | 0.0113 |
| start.wage | 1.581e+00 | 8.777e-02 | 18.014 | < 2e-16 |
| yrs.exp | -6.554e+03 | 2.533e+03 | -2.588 | 0.0100 |
| yrs.exp.sq | 2.604e+02 | 9.327e+01 | 2.792 | 0.0055 |
| hs.grad | 1.130e+03 | 1.450e+03 | 0.779 | 0.4365 |
| polytech | 3.875e+03 | 1.535e+03 | 2.524 | 0.0120 |
| college | 1.025e+04 | 1.915e+03 | 5.355 | 1.46e-07 |
| post.college | 1.122e+04 | 2.422e+03 | 4.634 | 4.88e-06 |

Residual SE 7510 on 395 df; $R^2 = 0.8092$, adj. $R^2 = 0.8058$; F = 239.2 on 7 and 395 df.

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Base category (1 pt)

> [!success] Answer
> **High-school dropout** (`hs.dropout`, $yrs.educ < 12$).

**Why.** Five mutually exclusive degree categories, so only four dummies enter. The omitted one is the [[Base Category]], where all four dummies equal 0. Including all five with an intercept would be the dummy-variable trap (perfect multicollinearity).

### b. Interpret $\hat\beta_4$ and $\hat\beta_6$ (4 pts)

> [!success] Answer
> - $\hat\beta_4 = 1130$ (`hs.grad`): holding `start.wage` and experience fixed, a high-school graduate earns on average **1,130 THB per month more than a high-school dropout**. Not statistically significant ($p = 0.4365$, $t = 0.779$): no evidence of a real wage difference between graduates and dropouts at 5% (or 10%).
> - $\hat\beta_6 = 10{,}250$ (`college`): holding `start.wage` and experience fixed, a 4-year college graduate earns on average **10,250 THB per month more than a high-school dropout**. Highly significant ($p = 1.46\times10^{-7}$, below even 0.1%).

> [!warning] Exam trap
> Each coefficient is a difference **relative to the base category (dropouts)**, not relative to the previous level and not relative to each other. And you must interpret each on its own t-test here; the question explicitly says "not joint".

See [[Lec_10-Dummy Variables]].

---

## Q7 — Joint test that highest degree matters in Model [4] (9 pts)

**Question.** Test that highest degree earned affects wage in Model [4] at $\alpha = 1\%$. (A) null (1 pt); (B) unrestricted and restricted models (2); (C) degrees of freedom (2); (D) test statistic (2); (E) conclusion with the critical value (2).

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Null hypothesis (1 pt)

> [!success] Answer
> $H_0:\ \beta_4 = \beta_5 = \beta_6 = \beta_7 = 0$ (highest degree has no effect). $H_1$: at least one of them is non-zero.

### b. Unrestricted and restricted models (2 pts)

> [!success] Answer
> - **Unrestricted:** Model [4] itself.
> - **Restricted** (this is Model [3]): $wage = \beta_0 + \beta_1\, start.wage + \beta_2\, yrs.exp + \beta_3\, yrs.exp.sq + u$.

### c. Degrees of freedom (2 pts)

> [!success] Answer
> Numerator $q = 4$ (four restrictions). Denominator $N - M = 403 - 8 = 395$ (Model [4] has 8 parameters). So $F \sim F_{4,\,395}$.

### d. Test statistic (2 pts)

Both models use the same outcome `wage`, so the $R^2$ form of the F-statistic works. Restricted $R^2$ is Model [3]'s $0.788$, unrestricted $R^2$ is Model [4]'s $0.8092$:

$$F = \frac{(R^2_{UR} - R^2_R)/q}{(1 - R^2_{UR})/(N-M)} = \frac{(0.8092 - 0.788)/4}{(1 - 0.8092)/395} = \frac{0.0053}{0.000483} \approx 10.97$$

> [!success] Answer
> $F \approx \mathbf{10.97}$ (about 11.0).

> [!example] Cross-check with the residual sums of squares
> $RSS_{UR}$ for Model [4] $= 7510^2 \times 395 = 2.228\times10^{10}$ (this is the "22280" in Q8, printed in millions). $RSS_R$ for Model [3] $= 7877^2 \times 399 = 2.476\times10^{10}$. Then $F = \dfrac{(24757 - 22278)/4}{22278/395} \approx 10.98$. Same answer; the $R^2$ route is exposed to rounding of the printed $R^2$ (0.788 is only 3 significant figures), so quote about 11.

### e. Conclusion (2 pts)

> [!success] Answer
> **Reject** $H_0$ at 1%. Critical value $F_{0.01}(4, 395) \approx 3.37$ (table: about 3.3 to 3.5 depending on the nearest row). Since $10.97 > 3.37$, highest degree earned jointly affects wage.

> [!tip] Intuition
> Joint significance here is driven mainly by `college` and `post.college` (both highly significant individually), even though `hs.grad` alone is not (Q6b). That is why a dummy **block** is tested with an F-test, not several t-tests.

See [[Lec_13-Exam Review]] (testing a categorical variable jointly) and [[Lec_08-Goodness of Fit & Multicollinearity]] (F in $R^2$ form).

---

## Q8 — Chow test: separate models for men and women? (7 pts)

**Question.** Using the R output below, test whether Model [4] should be estimated separately for men and women. (A) F-statistic (5 pts); (B) conclusion with critical value at 5% (2 pts).

**R output (sums of squared residuals, as printed):**

| Regression | Sum of squared residuals |
|---|---|
| Pooled Model [4] (`growth.4`) | 22280 |
| Men only (`is.male == 1`) | 17917 |
| Women only (`is.male < 1`) | 3126 |

(The printed values are scaled; the pooled value matches $7510^2 \times 395 \approx 22280\times 10^6$. The units cancel in $F$.)

> [!warning] AI-written answer, not official. Check before relying on it.

### a. F-statistic (5 pts)

Chow test, version 2 (separate regressions). Under $H_0$ all coefficients are the same for men and women, so the pooled model is the restricted one:

- $RSS_R = 22280$
- $RSS_{UR} = RSS_m + RSS_f = 17917 + 3126 = 21043$
- $q = 8$: the number of parameters in Model [4] (intercept plus 7 slopes), each allowed to differ by gender
- $N - M = 403 - 2(8) = 387$ (two sets of 8 parameters)

$$F = \frac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N-M)} = \frac{(22280 - 21043)/8}{21043/387} = \frac{154.6}{54.4} \approx 2.84$$

> [!success] Answer
> $F \approx \mathbf{2.84}$ with $(8,\ 387)$ degrees of freedom.

### b. Conclusion (2 pts)

> [!success] Answer
> **Reject** $H_0$ at 5%. $F_{0.05}(8, 387) \approx 1.96$ (table rows around 120 to infinity: about 1.94 to 2.02). Since $2.84 > 1.96$, the model differs by gender, so estimate it separately for men and women.

> [!warning] Exam trap
> The parameter count $M$ is the **full** parameter count of Model [4] (8, including the intercept), so $q = 8$ and the denominator df is $N - 2M = 387$. Using 7 (slopes only) or forgetting the doubling are the usual slips.

See [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]] and [[Lec_11-Interaction Terms]].

---

## Q9 — Converting THB to USD (5 pts)

**Question.** Model [5]: $wage = \beta_0 + \beta_1\, start.wage + \beta_2\, yrs.exp + \beta_3\, yrs.exp.sq + \beta_4\, educ + u$. If both `wage` and `start.wage` are converted from THB to USD (1 THB = 0.03 USD), what happens to the estimated marginal effect of education on wage? (1 pt answer, 4 pts working)

**R output `growth.5` (398 df):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | 2.978e+04 | 1.753e+04 | 1.699 | 0.09002 |
| start.wage | 1.742e+00 | 7.035e-02 | 24.763 | < 2e-16 |
| yrs.exp | -6.277e+03 | 2.580e+03 | -2.433 | 0.01541 |
| yrs.exp.sq | 2.519e+02 | 9.501e+01 | 2.651 | 0.00834 |
| educ | 9.518e+02 | 1.927e+02 | 4.939 | 1.16e-06 |

Residual SE 7655 on 398 df; $R^2 = 0.8002$, adj. $R^2 = 0.7982$; F = 398.5 on 4 and 398 df.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> It is **multiplied by 0.03**: $\hat\beta_4 = 951.8$ THB per year of education becomes $951.8 \times 0.03 \approx \mathbf{28.55}$ USD per year of education.

**Working.** Let $c = 0.03$ and the new variables be $wage^* = c \cdot wage$, $start.wage^* = c \cdot start.wage$. Multiply the whole model by $c$:

$$c \cdot wage = c\beta_0 + \beta_1 (c \cdot start.wage) + c\beta_2\, yrs.exp + c\beta_3\, yrs.exp.sq + c\beta_4\, educ + c\,u$$

So $wage^* = c\beta_0 + \beta_1\, start.wage^* + c\beta_2\, yrs.exp + c\beta_3\, yrs.exp.sq + c\beta_4\, educ + u^*$. The coefficients on regressors that are **not** rescaled (`yrs.exp`, `yrs.exp.sq`, `educ`) and the intercept are multiplied by $c$; the coefficient on `start.wage` stays at 1.742 because both $y$ and that $x$ are scaled by the same $c$ (the $c$ in the numerator and the $1/c$ from the rescaled $x$ cancel).

Standard errors scale with their coefficients, so t-statistics and p-values (and $R^2$) do not change.

See [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]] and [[Lec_13-Exam Review]] (unit-change table).

---

# Part II: `sample.data` (48 pts)

> [!info] Data (N = 125)
> $Y$ and $\log(Y)$ (the R variable is `ln.Y`), $X \in [2.5, 5]$, $W \in [1.5, 6]$, $Z$ a 0/1 dummy. Note: the printed `ln.Y` values run from about $-80.6$ to $28.6$, so the "log" is large in magnitude; the log-level readings in Q15 to Q17 are therefore only approximate (see Q15).

## Q10 — Test $\beta_2$ against 2 in Model [A] (5 pts)

**Question.** Model [A]: $\log(Y) = \beta_0 + \beta_1 X + \beta_2 W + \beta_3 Z + u$. Test the null that $\beta_2$ is **less than 2** at 10%. (A) test statistic (2 pts); (B) df and critical value (2); (C) conclusion (1).

**R output `model.A` (121 df; the df cell is redacted in the paper but the F line says 3 and 121):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| (Intercept) | -6.098 | 10.247 | -0.595 | 0.55288 |
| X | -6.733 | 5.610 | -1.200 | 0.23240 |
| W | 4.470 | 4.819 | 0.927 | 0.35552 |
| Z | -12.285 | 4.140 | -2.968 | 0.00362 |

Residual SE 20.74; $R^2 = 0.07855$, adj. $R^2 = 0.05571$; F = 3.438 on 3 and 121 df, p = 0.01909.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!note] Which hypothesis?
> The wording "the null that $\beta_2$ is less than 2" is read as a one-sided test with the equality in the null: $H_0:\beta_2 \le 2$ versus $H_1:\beta_2 > 2$. (If you instead set it up as $H_0:\beta_2 \ge 2$ vs $H_1:\beta_2 < 2$, the statistic is the same and the conclusion is also "fail to reject", see below.)

### a. Test statistic (2 pts)

$$t = \frac{\hat\beta_2 - 2}{\operatorname{s.e.}(\hat\beta_2)} = \frac{4.470 - 2}{4.819} = \frac{2.470}{4.819} \approx 0.513$$

> [!success] Answer
> $t \approx \mathbf{0.513}$.

### b. Degrees of freedom and critical value (2 pts)

> [!success] Answer
> $df = N - M = 125 - 4 = \mathbf{121}$. One-sided 10% critical value $t_{0.10}(121) \approx \mathbf{1.289}$ (table row 120: 1.289).

### c. Conclusion (1 pt)

> [!success] Answer
> **Fail to reject** $H_0$ at 10%: $0.513 < 1.289$. No evidence that $\beta_2$ exceeds 2.
> (With the opposite orientation, $H_1:\beta_2 < 2$, the rejection region is $t < -1.289$; $0.513$ is not in it either: also fail to reject.)

> [!warning] Exam trap
> The null is **not** "$\beta_2 = 0$", which is the t-value R prints (0.927). You must subtract the hypothesised value 2 first. Use a **one-tailed** critical value because the hypothesis is one-sided.

See [[Lec_13-Exam Review]] (t-test steps, one- vs two-sided).

---

## Q11 — Which comparison shows Model [B] fits better? (5 pts)

**Question.** Model [B]: $\log(Y) = \beta_1 X + \beta_2 W + \beta_3 Z + u$ (**no intercept**). Comparing the output for [B] with [A], you conclude [B] fits better. Which comparison supports that?

**R output `model.B` (122 df):**

| Term | Estimate | Std. Error | t | Pr(>abs t) |
|---|---|---|---|---|
| X | -8.417 | 4.832 | -1.742 | 0.084048 |
| W | 4.749 | 4.783 | 0.993 | 0.322720 |
| Z | -13.117 | 3.886 | -3.376 | 0.000988 |

Residual SE 20.68 on 122 df; $R^2 = 0.5896$, adj. $R^2 = 0.5795$; F = 58.42 on 3 and 122 df.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **(v) cannot say / none of the above.**

**Explanation.** Model [B] has **no intercept**. R computes $R^2$ for a no-intercept model against the **uncentred** total sum of squares ($\sum y_i^2$) instead of $\sum (y_i - \bar y)^2$. Since $\log(Y)$ here is far from zero (mean about $-23.8$), the uncentred benchmark is huge, which mechanically inflates $R^2$ from 0.079 to 0.590. The two numbers are on **different scales**, so neither $R^2$ nor adjusted $R^2$ can compare a model with an intercept to one without ([[Lec_08-Goodness of Fit & Multicollinearity]]: "models with no intercept").

> [!example] The only comparable evidence points the other way
> Compare residual sums of squares, which are on the same scale: Model [A] $20.74^2 \times 121 \approx 52{,}048$ versus Model [B] $20.68^2 \times 122 \approx 52{,}175$ (the `anova` in Q13 prints 52181). Model [A] (more flexible, nested) fits at least as well in-sample, and [B]'s tiny residual-SE advantage comes only from using one more degree of freedom.

**Each option.**

| Option | Verdict | Why |
|---|---|---|
| (i) 0.5896 > 0.07855 | Wrong | Compares an uncentred $R^2$ (no intercept) with a centred $R^2$. Not comparable. |
| (ii) 0.5795 > 0.05571 | Wrong | Same problem for adjusted $R^2$: it inherits the uncentred $R^2$, so the penalty for fewer parameters cannot repair it. |
| (iii) 0.23240 > 0.084048 | Wrong | These are the p-values of $X$ in [A] and [B]. A smaller p-value for one coefficient says nothing about overall fit. (And "0.2324 > 0.084" would mean [A] is less significant, not that [B] fits better.) |
| (iv) 4.749 > 4.470 | Wrong | Compares estimates of $\beta_2$. Coefficient size is not a goodness-of-fit measure. |
| **(v) cannot say / none** | **Correct** | No listed comparison is valid. |

> [!tip] Intuition
> Dropping the intercept forces the line through the origin. That changes what $R^2$ measures, so its jump is an artefact, the same trap as in [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]] (Q5c).

---

## Q12 — R code for Model [B] (3 pts)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> ```r
> model.B = lm(ln.Y ~ 0 + X + W + Z, data = sample.data)
> ```
> (Equivalent: `lm(ln.Y ~ X + W + Z - 1, data = sample.data)`.)

**Why.** Model [B] drops the intercept, and in R's formula syntax `0 +` (or `- 1`) removes it. The outcome variable is called `ln.Y` in `sample.data` (as in the `model.A` call). The output has no `(Intercept)` row, which confirms it. See [[Regression Through the Origin]].

---

## Q13 — Evidence of partial multicollinearity between $X$ and $W$ (8 pts)

**Question.** After seeing Model [B] you suspect $X$ and $W$ are irrelevant and estimate Model [C]: $\log(Y) = \beta_1 Z + u$. Three pieces of evidence together indicate partial multicollinearity between $X$ and $W$. (3 pts list; 5 pts how they combine.)

**R output (Model [C], F-test and correlations):**

| Item | Value |
|---|---|
| Model [C] `Z` coefficient | -27.202 (SE 2.329, t = -11.68) |
| Model [C] residual SE | 22.1 on 124 df; $R^2 = 0.5238$, adj. $R^2 = 0.52$ |
| `anova(model.C, model.B)` | Res.Df 124 vs 122; RSS 60540 vs 52181; Df 2; Sum of Sq 8359.1; **F = 9.7719; p = 0.0001158** |
| $\operatorname{cor}(X, W)$ | **0.89534** |
| $\operatorname{cor}(X, Z)$ / $\operatorname{cor}(W, Z)$ | -0.0555 / -0.0654 |

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: the three pieces
> 1. **Individually insignificant:** in Model [B], neither $X$ ($p = 0.084$) nor $W$ ($p = 0.323$) is significant at 5%.
> 2. **Jointly significant:** the F-test of Model [C] against Model [B] ($H_0:\beta_X = \beta_W = 0$) gives $F = 9.77$, $p = 0.0001$. Reject: $X$ and $W$ together do matter.
> 3. **High correlation:** $\operatorname{cor}(X, W) = 0.895$, far above the rule-of-thumb 0.7. ($X$ and $W$ are barely correlated with $Z$, so the problem is only between those two.)

**How they combine (5 pts).** The recipe in [[Lec_13-Exam Review]] is: *neither variable significant on its own, yet jointly significant, and the two are strongly correlated*.

- The F-test (evidence 2) says the pair carries real explanatory power, so "X and W are irrelevant" is **false**. Irrelevance would have shown up as both t-tests and the joint F-test being insignificant.
- Yet the t-tests (evidence 1) say neither one matters when the other is in the model. These two statements are only compatible if the variables **share the same information**: each is a near-substitute for the other, so the model cannot attribute the effect to either separately.
- Evidence 3 supplies the mechanism: with $R^2_{X\mid W} \approx 0.895^2 \approx 0.80$, the variance inflation factor is $1/(1 - 0.80) \approx 5.0$. From $\operatorname{Var}(\hat\beta_j) = \sigma_u^2 / [(1 - R_j^2)\sum(x_{ji} - \bar x_j)^2]$ the standard errors of $\hat\beta_X$ and $\hat\beta_W$ are inflated (by about $\sqrt{5.0} \approx 2.2$), pushing their t-statistics toward zero. Estimates stay **unbiased**; only precision is lost.
- Hence do **not** drop both (that would throw away real information, as the F-test shows); keep at least one of them.

> [!tip] Intuition
> Model [D] (used in Q14 to Q18) keeps only $X$ and $Z$: $X$ becomes highly significant ($t = -4.31$) and adj. $R^2$ stays at 0.5795, exactly as in [B]. That is a fourth, supporting symptom of the same collinearity: once $W$ stops competing with it, $X$'s precision returns.

See [[Lec_08-Goodness of Fit & Multicollinearity]] and [[Multicollinearity]].

---

> [!info] Model [D] for Q14 to Q17
> Model [D]: $\log(Y) = \beta_1 X + \beta_2 Z + u$ (no intercept again).
>
> **R output `model.D` (123 df):**
>
> | Term | Estimate | Std. Error | t | Pr(>abs t) |
> |---|---|---|---|---|
> | X | -3.6952 | 0.8577 | -4.308 | 3.33e-05 |
> | Z | -13.3992 | 3.8752 | -3.458 | 0.000749 |
>
> Residual SE 20.68 on 123 df; $R^2 = 0.5863$, adj. $R^2 = 0.5795$; F = 87.14 on 2 and 123 df.
>
> **Sample means:** $\bar X = 3.761$, $\bar W = 3.689$, $\bar Z = 0.72$, $\overline{\ln Y} = -23.78$.

## Q14 — 95% confidence interval for $\beta_1$ (5 pts)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **[-5.39, -2.00]** (lower $\approx -5.39$, upper $\approx -2.00$).

**Working.** $\hat\beta_1 \pm t_{0.025}(123) \times \operatorname{s.e.}$ with $df = 125 - 2 = 123$ and $t_{0.025}(123) \approx 1.98$ (table row 120: 1.980):

$$-3.6952 \pm 1.98 \times 0.8577 = -3.6952 \pm 1.698$$

Lower $= -5.393$, upper $= -1.997$. Zero lies outside the interval, consistent with $X$ being significant at 5% ([[Lec_13-Exam Review]]: CI and two-sided test duality).

---

## Q15 — Interpreting $\hat\beta_1 = -3.7$ (5 pts)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **(ii) A 1 unit increase in $X$ decreases $Y$ by 370%.**

**Explanation.** This is a **log-level** model: the outcome is $\log(Y)$, the regressor $X$ is in levels. In a log-level model a one-unit increase in $X$ changes $Y$ by approximately $100 \times \hat\beta_1$ percent ([[Lec_13-Exam Review]], log-level row): $100 \times (-3.6952) \approx -370\%$.

| Option | Verdict | Why |
|---|---|---|
| (i) decreases $Y$ by 3.70 **units** | Wrong | That is the level-level reading. $\hat\beta_1$ is the change in $\log(Y)$, not in $Y$. |
| **(ii) decreases $Y$ by 370%** | **Correct** | Log-level reading: $\Delta Y/Y \approx 100\hat\beta_1\,\%$. |
| (iii) a **1% increase** in $X$ decreases $Y$ by 370% | Wrong | That is a log-log reading and would need $\log(X)$ as the regressor. Here $X$ is in levels. |
| (iv) decreases $\log(Y)$ by 370% | Wrong | $\log(Y)$ falls by 3.70 **log points**, not by 370%; the percentage belongs to $Y$. |
| (v) cannot say | Wrong | A standard reading exists (ii). |

> [!warning] Caveat on the approximation
> $100\hat\beta$ is a good approximation only for small coefficients. For $\hat\beta = -3.70$ it breaks down: the exact change is $100(e^{-3.6952} - 1) \approx -97.5\%$, and a "370% decrease" is impossible for a positive $Y$. The alternative (v) is defensible only if the marker insisted on exact percentages. Treat (ii) as the intended answer under the course's approximate rule, and mention the exact figure in your justification if space allows.

---

## Q16 — Interpreting $\hat\beta_2 = -13.4$ (5 pts)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> **(ii) $Y$ is 1,340% lower for observations in category Z.**

**Explanation.** $Z$ is a dummy and the outcome is $\log(Y)$, so $100\hat\beta_2 = 100 \times (-13.3992) \approx -1340\%$ is the approximate percentage difference in $Y$ between category Z and the rest, holding $X$ fixed (log-level with a dummy).

| Option | Verdict | Why |
|---|---|---|
| (i) $Y$ is 13.4 **units** lower | Wrong | Level-level reading; the effect is on $\log(Y)$. |
| **(ii) $Y$ is 1,340% lower** | **Correct** | $100\hat\beta_2$ percent, log-level with a dummy. |
| (iii) a 1% increase in $Z$ decreases $Y$ by 13.4% | Wrong | $Z$ is a 0/1 indicator: it cannot rise by 1%. Its coefficient compares two groups. |
| (iv) $\log(Y)$ is 13.4% lower | Wrong | $\log(Y)$ is 13.4 log points lower; the percentage applies to $Y$ and is $100 \times 13.4 = 1340\%$, not 13.4%. |
| (v) cannot say | Wrong | A standard reading exists. |

> [!warning] Same caveat as Q15
> The exact difference is $100(e^{-13.4} - 1) \approx -100\%$. The approximation is only valid for small $\hat\beta$, so (ii) is the answer under the course's rule, not a literal 1,340% fall.

---

## Q17 — Elasticity of $Y$ with respect to $X$ (5 pts)

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer
> $\varepsilon = \hat\beta_1 \bar X = -3.6952 \times 3.761 \approx \mathbf{-13.9}$ (a 1% increase in $X$ is associated with about a 13.9% fall in $Y$).

**Working.** In a log-level model $\log Y = \beta_1 X + \dots$ the marginal effect is $\beta_1 Y$, the rate of change is $\beta_1$, and the elasticity is $\beta_1 X$ (the log-level row of the moment table in [[Lec_13-Exam Review]]). It depends on $X$, so evaluate at the sample mean $\bar X = 3.761$:

$$\varepsilon = -3.6952 \times 3.761 = -13.90$$

> [!warning] Exam trap
> The elasticity is **not** $\hat\beta_1 = -3.7$ (that is the log-log answer, wrong here because $X$ is not logged). Use the mean of $X$ (3.761), not of $W$ or $Z$.

---

## Q18 — Heteroskedasticity in Model [D] (8 pts)

**Question.** You suspect heteroskedasticity in Model [D]. All other classical assumptions hold. (A) What does this mean for the OLS estimates? (1 pt MC + 4 pts explanation). (B) You run `coeftest(model.D, vcov = hccm, type = "hc0")`. (3 pts MC)

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Effect on OLS (5 pts)

> [!success] Answer
> **(iii) The OLS estimator of $\beta_2$ is unbiased and not efficient.**

**Explanation.** Heteroskedasticity violates **A4** (constant error variance) but not A1 or A2 (mean-zero, exogenous errors). Unbiasedness needs only A1 and A2, so $\hat\beta$ stays **unbiased**. Gauss–Markov efficiency needs A1 to A4, so OLS is **no longer BLUE (not efficient)**: a weighted estimator has smaller variance. In addition the usual standard errors are wrong, so t- and F-tests are invalid ([[Lec_12-Heteroskedasticity]]).

| Option | Verdict | Why |
|---|---|---|
| (i) $\beta_2$ biased and not efficient | Wrong | Bias needs A2 to fail (for example an omitted variable), not A4. |
| (ii) $\beta_1$ biased and not efficient | Wrong | Same: not biased. |
| **(iii) $\beta_2$ unbiased and not efficient** | **Correct** | A4 fails, so efficiency is lost, but unbiasedness survives. |
| (iv) $\beta_1$ unbiased **and efficient** | Wrong | Unbiased, but efficiency is lost (the efficiency claim fails). |
| (v) cannot say | Wrong | The consequence is well defined. |

### b. After White standard errors (3 pts)

> [!success] Answer
> **(iii) The resulting OLS estimator of $\beta_2$ is unbiased but not efficient.**

**Explanation.** `coeftest(..., vcov = hccm, type = "hc0")` only recomputes the **standard errors** (White / heteroskedasticity-consistent). The coefficient estimates are the identical OLS ones, so they remain unbiased and still not efficient; White fixes inference (the SEs, t and p-values), not efficiency. Only weighted least squares, which needs the form of the variance, can restore efficiency ([[Lec_12-Heteroskedasticity]]).

| Option | Verdict | Why |
|---|---|---|
| (i) $\beta_2$ biased and not efficient | Wrong | The point estimates are unchanged and still unbiased. |
| (ii) $\beta_1$ biased and not efficient | Wrong | Same. |
| **(iii) $\beta_2$ unbiased but not efficient** | **Correct** | OLS point estimates are untouched; only the SEs change. |
| (iv) $\beta_1$ unbiased and efficient | Wrong | White does not make OLS efficient. |
| (v) cannot say | Wrong | The answer is determined. |

> [!note] Option (iv) is a trap in both parts
> Option (iv) in (A) and (B) says $\beta_1$ is "unbiased and efficient". Half of it is true (unbiased); the exam tests whether you notice that **efficiency** is the casualty in both cases.

---

## Recap table

| Q | Pts | Tool | Answer (AI-solved) |
|---|---|---|---|
| 1 | 5 | t-test on $\beta_5$ | p = 0.2217 > 0.01, fail to reject |
| 2 | 6 | Interaction model | Women: 3652.6 + 671.2 educ + 105.3 prev; men: -13836.7 + 2224.5 educ + 105.3 prev; 12857.3; 11707.0; 7363.5 |
| 3 | 5 | Marginal effect with interaction | False: $\beta_2 + \beta_3 is.male$ (671.2 women, 2224.5 men) |
| 4 | 5 | Quadratic marginal effect | $-6466 + 2(259.9)(13.51) \approx 556$ THB per year |
| 5 | 5 | F-test restrictions | $H_0$: $\beta_0 = 0$, $\beta_1 = 1$, $\beta_2 = \beta_3 = 0$; restricted: $wage = start.wage + u$ |
| 6 | 5 | Dummies | Base = hs.dropout; $\hat\beta_4 = 1130$ (not sig.), $\hat\beta_6 = 10250$ (sig.) |
| 7 | 9 | Joint F-test | $F = 10.97$ on (4, 395) > 3.37: reject |
| 8 | 7 | Chow test | $F = 2.84$ on (8, 387) > 1.96: reject |
| 9 | 5 | Change of units | $\hat\beta_4$ becomes $\times 0.03 = 28.55$ |
| 10 | 5 | One-sided t-test | $t = 0.513$, df 121, crit 1.289: fail to reject |
| 11 | 5 | $R^2$ comparability | (v): no-intercept $R^2$ not comparable |
| 12 | 3 | R code | `lm(ln.Y ~ 0 + X + W + Z, data = sample.data)` |
| 13 | 8 | Multicollinearity | Insignificant t's + joint F = 9.77 + cor = 0.895 |
| 14 | 5 | Confidence interval | [-5.39, -2.00] |
| 15 | 5 | Log-level interpretation | (ii) about -370% (approximation) |
| 16 | 5 | Log-level dummy | (ii) about -1340% (approximation) |
| 17 | 5 | Elasticity | $\hat\beta_1 \bar X \approx -13.9$ |
| 18 | 8 | Heteroskedasticity | (iii) in A and B: unbiased, not efficient |

## Related Notes

- Lectures: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]], [[Lec_13-Exam Review]]
- Assignments: [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]
- Hub: [[Intro Econometrics]]
