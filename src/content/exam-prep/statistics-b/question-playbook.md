---
title: "Exam Question Playbook"
subject: statistics-b
type: reference
description: "A script for each of the 20 multiple-choice slots: what to compute first, how to rule options out, and the traps the wrong options are built on, from Q1 sampling distributions to Q20 chi-squared."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 4
tags:
  - statistics-b
  - exam-prep
  - playbook
---

> All 20 questions are multiple choice, so each play ends with **how the wrong options are made**: they are almost always one specific slip. Formulas are on the [[Tests and Estimators Formula Sheet]].

## A. "As $n$ grows…" (Q1)

1. Is it the **sum**, the **average**, or one observation?
2. Sum: mean $n\mu$, variance $n\sigma^2$, both grow. Average: mean $\mu$ fixed, variance $\sigma^2/n$ falls. One observation: nothing changes.
3. An average of group averages: divide the variance by the group size, then by the number of groups.
4. Wrong options: the variance of one step only, or dividing by $\sqrt n$ instead of $n$.

## B. Unbiased estimators (Q2, Q3)

1. Compute $E(X)$ in terms of the parameter: $E(X) = 2a$.
2. Each option: apply linearity. The one with $E = a$ wins.
3. $E(\hat\theta) = a + b\theta$: the fix is $(\hat\theta - a)/b$.
4. "Necessarily / not necessarily": a **sum or a constant multiple** keeps unbiasedness (linearity); a **product** or a **square root** of estimators does not necessarily.
5. Wrong options: the other multiples ($2a/3$, $4a$, $6a$), or $(\hat\theta - b)/a$.

## C. Consistency (Q4)

1. Look at the variance as $n \to \infty$: does it go to 0?
2. Biased but consistent is possible ($\tfrac1n\sum(X_i - \bar X)^2$). Unbiased but inconsistent too ($X_3$).

## D. MLE (Q5)

1. A table: take **each observed value's column** and pick the $\theta$ with the largest entry. Do not read along the rows.
2. A function: maximise $\ln L$; a critical point of $\ln L$ is the MLE when it is a maximum.

## E. Correlation and regression (Q6 to Q8)

1. The line passes through $(\bar X, \bar Y)$: use it to find a missing mean or the intercept.
2. $b = r\,S_Y/S_X$: $r = 0$ means $b = 0$ and $a = \bar Y$.
3. Adding a point **on** the line, or at $(\bar X, \bar Y)$, leaves the line alone. An outlier far from it flattens or tilts it.
4. Changing units scales the SD, never $r$ (only its sign can flip if one variable is multiplied by a negative).
5. "Predict $X$ from $Y$" is a **different** line unless $\lvert r\rvert = 1$.

## F. A test statistic (Q9, Q10, Q14, Q15)

1. Name the test from the table: one or two groups, mean or proportion, $\sigma$ known or not.
2. Write the statistic; for a pooled $t$, pool the **variances** first.
3. Degrees of freedom: $n - 1$, or $n_X + n_Y - 2$.
4. Tail from $H_1$'s wording: "more", "increases", "taller" is right; "less", "decreases" is left; "different", "influences", "changes" is two-sided.
5. Wrong options: $\sigma$ instead of $\sigma/\sqrt n$, $Z$ critical values for a $t$ test, a two-tailed value for a one-tailed question.

## G. "Which test is allowed?" (Q11)

1. $Z$: is $\sigma$ (or both $\sigma$s) **given as known**? Sample SDs mean unknown.
2. $t$: is the population **normal**? (Pooled $t$ also needs equal variances.)
3. A large $n$ does **not** fix either: it makes $\bar X$ normal, so it can rescue a $Z$ test with known $\sigma$, never a $t$ test on a non-normal population.

## H. Power and errors (Q12, Q13)

1. Critical $\bar X$ under $H_0$, in the data's units.
2. Standardise it with the **true** mean, same SE.
3. Power is the area beyond the critical value on the rejection side.
4. Qualitative questions: power rises with $n$, $\alpha$ and the true difference, falls with $\sigma$. A one-tailed test in the right direction beats two-tailed; in the wrong direction it has almost no power.
5. $d = 0$: $H_0$ is true, so a Type I error could happen and a Type II could not.
6. Using $t$ where $Z$ was allowed: $\alpha$ unchanged, $\beta$ up.

## I. F test (Q16, Q17)

1. Square the SDs. Larger variance on top.
2. $df$: (top sample's $n - 1$, bottom's $n - 1$).
3. Reject if above the table value. Then the pooled $t$ test is not justified.

## J. Confidence intervals and sample size (Q17 to Q19)

1. Pick $z$ or $t$ the same way as for the test. $t$ uses $df = n - 1$ and the $\alpha/2$ column.
2. Interval = estimate $\pm$ critical $\times$ SE. Check both ends against the options.
3. Sample size: write the width (twice the margin) $\le w$, solve for $n$, **round up**. No estimate of $p$: use 0.5.
4. Duality: $\mu_0$ inside the 95% interval means a two-sided 5% test does not reject; outside, it rejects. A one-sided test in the direction of the data rejects even more easily.

## K. Chi-squared (Q20)

1. Expected counts: $n \times$ the claimed share (goodness of fit) or row total $\times$ column total $/ N$ (independence). Check all $\ge 5$.
2. Sum $\tfrac{(O - E)^2}{E}$ over **every** cell.
3. $df$: categories $- 1$, or $(r - 1)(c - 1)$.
4. Upper tail only. A larger $\alpha$ lowers the critical value and makes rejection easier.
5. Wrong options: dividing by $O$, forgetting a cell, the wrong $df$.
