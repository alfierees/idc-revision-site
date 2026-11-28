---
title: "Past Paper Topic Map"
subject: intro-econometrics
type: reference
description: "Which topics came up in the 7 finals on this site (2023 to 2026), question by question, how often each one appears, which papers have an official key, and the claims that keep coming back."
course: Intro to Econometrics
semester: 1
year: 2
order: 3
tags:
  - intro-econometrics
  - exam-prep
  - past-papers
---

> Counted from every final on this site: [[PP_01|2023 Moed A]], [[PP_02|2023 Moed B]], [[PP_03|2024 Moed A]], [[PP_04|2024 Moed B]], [[PP_05|2025 Moed A]], [[PP_06|2025 Moed B]] and [[PP_07|2026 Moed A]]. Only **2023 A, 2024 A and 2026 A have official keys**; the other four are worked answers checked against the course, and they say so on every question. Same lecturer every year, same format: two parts, 15 to 18 questions, each read off R output.

## The two parts, paper by paper

| Paper | Part I (real data) | Part II (a colleague's data) | Key |
|---|---|---|---|
| 2023 A | Flights from TLV: log-log price on duration, stop and weekday dummies, unit change, Chow EU vs North America | $Y$ on X1, X2 ($N = 78$): multicollinearity, OVB, quadratic, residual plots | official |
| 2023 B | Flights from Ben Gurion: dummies, CIs, WLS, joint test, interaction, Chow by continent | $Y$ on X1 to X3 ($N = 120$): dropping variables, `anova`, `hccm`, intercept, units | worked |
| 2024 A | Antique violins: log price on sale year, Stradivari and named-maker dummies, intercept, `anova` on a restriction | $Y$ on X1, X2, X3 ($N = 117$): four models of X2 (linear, dummies, interactions, quadratic) | official |
| 2024 B | Wages and experience: log wage with gender, sector dummies, $exp^2$, units, OVB | Electricity cost function (log-log): significance, CIs, doubling output, heteroskedasticity, joint test | worked |
| 2025 A | Wage growth of engineers: quadratic experience, gender interactions, degree dummies, Chow by gender, THB to USD | $Y$ on $X$, $W$: test against 2, model comparison, multicollinearity, log interpretations, heteroskedasticity | worked |
| 2025 B | Apple demand: log-log elasticities, pounds to kg, OVB backwards, one-sided test, dummy trap, age dummies | $Y$ on $W$, $X$, $Z$: t-table, quadratic minimum, dummy, interaction, CI, Chow | worked |
| 2026 A | Transit spending: elasticity = 1, euros to dollars, dummy trap, OVB, interactions, `anova`, Chow OECD | $Y$ on $Z$, $Z^2$, $W$, $X$: prediction, CI, minimum, multicollinearity, WLS, Gauss-Markov | official |

## How often each topic appears (7 papers)

| Topic | Papers | Typical question | Cheat sheet |
|---|---|---|---|
| t-test on one coefficient (incl. against $b \ne 0$, one-sided) | **7 of 7** | "Is the elasticity 1?", "does X raise Y?" | §2 |
| Joint F-test (dummies, `anova`, overall fit) | **7 of 7** | null, restricted model, df, critical value, conclusion | §3 |
| Dummies and interactions | **7 of 7** | base category, predicted gap, slope for one group | §6 |
| Log forms: elasticity, percent effects | **7 of 7** | "constant elasticity", "interpret $\hat\beta$" | §4 |
| Quadratic: turning point, marginal effect | **7 of 7** | $X^* = -\beta_1/2\beta_2$, max or min | §5 |
| Multicollinearity (partial or perfect) | **7 of 7** | "why insignificant?", correlation table, dummy trap | §6, §7 |
| p-value, CI, minimum significance level | **7 of 7** | "does the CI contain 0?", "99% vs 95%" | §2 |
| Goodness of fit, $R^2$ vs adjusted $R^2$ | 6 | "why does adjusted $R^2$ fall?" | §7 |
| Change of units | 6 (not 2024 A) | "what happens to the parameter on year?" | §4 |
| Heteroskedasticity, WLS, White | 6 (not 2025 B) | residual plot, properties of OLS, the WLS equation | §9 |
| Omitted variable bias | 6 | direction of the bias, solve the formula backwards | §8 |
| Chow test | 5 (2023 A and B, 2025 A and B, 2026 A) | $q = M$, $N - 2M$, three RSS | §3 |
| Prediction from the output | 5 | plug in, square, exponentiate for logs | §4 to §6 |
| Gauss-Markov and the assumptions | 5 | "unbiased? efficient?" with A4 or A5 failing | §1 |
| Regression through the origin | 2 (2023 B, 2024 A) | biased slopes if $\beta_0 \ne 0$ | §8 |
| Residual facts ($\sum \hat u_i = 0$, RSS) | 2 (2023 A, 2023 B) | "which model has the smaller sum?" | §1 |

## The Chow tests, side by side

| Paper | Groups | $M$ | $N$ | df | $F$ | Verdict |
|---|---|---|---|---|---|---|
| 2023 A Q8 | Europe vs North America | 12 | 12,000 | (12, 11,976) | 50.00 | different |
| 2025 A Q8 | men vs women | 8 | 403 | (8, 387) | 2.84 | different |
| 2026 A Q9 | OECD vs non-OECD | 4 | 1,467 | (4, 1,459) | 38.04 | different |

## Change-of-units questions

| Paper | Change | Model | Answer |
|---|---|---|---|
| 2023 A Q6 | minutes to hours, NIS to USD | log-log | only the intercept moves |
| 2024 B Q6 | monthly to yearly wage | log-level | intercept $+ \ln 12$, slopes unchanged |
| 2025 A Q9 | THB to USD, wage and starting wage | levels | education's effect times 0.03 (951.8 to 28.55); the slope on starting wage stays |
| 2025 B Q2 | pounds to kilograms | log-log | intercept $\beta_0 - (1 + \beta_1 + \beta_2)\ln 2.2$ |
| 2026 A Q2 | euros to dollars | log-log | slope on `year` stays the same |

## Claims that come back

| Claim (short) | Verdict | Papers |
|---|---|---|
| Heteroskedasticity makes OLS biased | False: unbiased, not efficient, wrong SEs | 2024 A, 2024 B, 2026 A |
| OLS and WLS are both unbiased (A1, A2 hold) | True | 2023 B, 2026 A |
| Without normality OLS is no longer efficient | False: efficiency needs A1 to A4 | 2026 A |
| An insignificant variable should be dropped | Not if it is correlated with others: inflated SE, risk of OVB | 2023 A, 2024 A, 2026 A |
| Drop an insignificant intercept | Only if $\beta_0 = 0$ truly; otherwise slopes are biased | 2023 B, 2024 A |
| $R^2$ compares models of different size | No: use adjusted $R^2$ | 2023 A, 2024 A, 2025 A |
| White standard errors change the estimates | No: only the standard errors | 2023 B |
| Residuals sum to the same value in every model | True with an intercept (zero) | 2023 A |
| A log-log model has a constant elasticity | True, the only one | 2023 A, 2025 B |
| The 95% CI contains 0 iff $p > 0.05$ | True | 2024 A, 2026 A |

## What this means for revision

1. **Every paper is a reading exercise.** Practise finding $\hat\beta$, $se$, $t$, $p$, $\hat\sigma$, df, $R^2$ and the overall F in an R table without thinking.
2. **The F-test is worth the most points.** Write the null, the restricted model, $q$ and $N - M$, the statistic, the critical value and the conclusion every time: each is a mark.
3. **Learn the "why" answers word for word.** Multicollinearity, OVB and heteroskedasticity each have a two-sentence answer the key wants (the [[Exam Question Playbook]] has them).
4. **Do the three official papers in full** (2023 A, 2024 A, 2026 A) under time, then the others for practice.
