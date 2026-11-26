---
title: "Quick Self-Test"
subject: statistics-b
type: self-test
description: "18 new exam-style questions in the paper's order, each with the full working: sampling distributions, unbiased and consistent estimators, MLE, regression, Z, t, proportion and F tests, power, confidence intervals and chi-squared. Six are multiple choice, like the real exam."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 6
tags:
  - statistics-b
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Standard error of the average"
    text: |
      A population has $\sigma = 10$. What is the standard deviation of the average of $n = 25$ observations?
    options:
      - label: a
        text: |
          0.4
        why: |
          That is $\sigma/n$. The standard error divides by $\sqrt n$.
      - label: b
        text: |
          2
        correct: true
        why: |
          $SE = \sigma/\sqrt n = 10/5 = 2$.
      - label: c
        text: |
          4
        why: |
          That is the **variance** of the average, $\sigma^2/n = 100/25$.
      - label: d
        text: |
          10
        why: |
          That is the SD of one observation, before averaging.
    solution: |
      $Var(\bar X) = \sigma^2/n = 4$, so $SD(\bar X) = \sigma/\sqrt n = 2$. **Answer (b).**
  - id: "2"
    title: "2 · An unbiased estimator for $a$"
    text: |
      $X$ takes the values $a$ and $3a$ with probability 0.5 each. Find an unbiased estimator of $a$ based on one observation $X_1$, and one based on $\bar X$.
    solution: |
      $E(X) = 0.5a + 1.5a = 2a$.

      So $E(X_1/2) = a$: **$X_1/2$ is unbiased.** Also $E(\bar X) = 2a$, so **$\bar X/2$ is unbiased** too, and it is the better one: its variance falls with $n$, so it is also consistent.
  - id: "3"
    title: "3 · Unbiased or consistent?"
    text: |
      $\hat\theta_1 = X_1$ (the first observation) and $\hat\theta_2 = \tfrac1n\sum_{i=1}^n(X_i - \bar X)^2$. As estimators of $\mu$ and $\sigma^2$ respectively, $\hat\theta_1$ is ___ and $\hat\theta_2$ is ___.
    options:
      - label: a
        text: |
          unbiased and consistent; unbiased and consistent
        why: |
          $X_1$ never improves with $n$, and dividing by $n$ biases the variance estimator.
      - label: b
        text: |
          biased; biased and inconsistent
        why: |
          $E(X_1) = \mu$, so $X_1$ is unbiased. And the bias of $\hat\theta_2$ vanishes as $n$ grows.
      - label: c
        text: |
          unbiased but not consistent; unbiased but not consistent
        why: |
          $E(\hat\theta_2) = \tfrac{n-1}{n}\sigma^2 \ne \sigma^2$, so it is biased.
      - label: d
        text: |
          unbiased but not consistent; biased but consistent
        correct: true
        why: |
          $Var(X_1) = \sigma^2$ for every $n$. $E(\hat\theta_2) = \tfrac{n-1}{n}\sigma^2$: biased, but the bias and the variance both go to 0.
    solution: |
      $X_1$: $E = \mu$ (unbiased) but its variance stays $\sigma^2$ (not consistent). $\hat\theta_2$ divides by $n$, so $E = \tfrac{n-1}{n}\sigma^2$ (biased), and both the bias and the variance vanish as $n \to \infty$ (consistent). **Answer (d).**
  - id: "4"
    title: "4 · MLE from a likelihood table"
    text: |
      | | $X = 0$ | $X = 1$ |
      |---|---|---|
      | $\theta = 1$ | 0.2 | 0.8 |
      | $\theta = 2$ | 0.5 | 0.5 |
      | $\theta = 3$ | 0.9 | 0.1 |

      Find the maximum likelihood estimator of $\theta$ for each possible observation.
    solution: |
      Go down each column (the observed value) and take the largest likelihood.

      - $X = 0$: the largest is 0.9 at $\theta = 3$.
      - $X = 1$: the largest is 0.8 at $\theta = 1$.

      $$
      \hat\theta = \begin{cases} 3 & X = 0 \\ 1 & X = 1 \end{cases}
      $$
  - id: "5"
    title: "5 · The regression line"
    text: |
      $\bar X = 10$, $\bar Y = 50$, $S_X = 2$, $S_Y = 8$, $r = 0.6$. Find the regression line of $Y$ on $X$ and predict $Y$ at $X = 12$.
    solution: |
      $b = r\,\dfrac{S_Y}{S_X} = 0.6\cdot4 = 2.4$, and the line passes through the means: $a = \bar Y - b\bar X = 50 - 24 = 26$.

      $\hat Y = 26 + 2.4X$. At $X = 12$: $\hat Y = 26 + 28.8 = \mathbf{54.8}$.
  - id: "6"
    title: "6 · Changing a variable"
    text: |
      $r_{X,Y} = 0.4$. Every $Y$ value is replaced by $-2Y + 5$. The new correlation is…
    options:
      - label: a
        text: |
          $-0.4$
        correct: true
        why: |
          A linear change keeps the size of $r$; the negative factor flips its sign.
      - label: b
        text: |
          $0.4$
        why: |
          That would be right for a positive factor. Here $b\cdot d = 1\cdot(-2) < 0$.
      - label: c
        text: |
          $-0.8$
        why: |
          $r$ is unit-free: multiplying by 2 does not double it.
      - label: d
        text: |
          $0.4\cdot(-2) + 5 = 4.2$
        why: |
          A correlation is always between $-1$ and $1$.
    solution: |
      $\rho(bX + a, dY + c) = \pm\rho(X, Y)$ with the sign of $bd$. Here $d = -2$: **$r = -0.4$. Answer (a).**
  - id: "7"
    title: "7 · A one-sided Z test"
    text: |
      $\sigma = 12$ is known. A sample of $n = 36$ has $\bar X = 103$. Test $H_1: \mu > 100$ at $\alpha = 0.05$, and give the $p$-value.
    solution: |
      $Z = \dfrac{103 - 100}{12/\sqrt{36}} = \dfrac{3}{2} = 1.5$.

      Right tail, critical value 1.645. $1.5 < 1.645$: **do not reject $H_0$**. $p = 1 - \Phi(1.5) = 1 - 0.9332 = 0.0668 > 0.05$. There is no evidence that $\mu > 100$.
  - id: "8"
    title: "8 · A pooled t test, one tail or two"
    text: |
      Normal populations with equal unknown variances. Group X: $n = 10$, $\bar X = 20$, $S = 3$. Group Y: $n = 12$, $\bar Y = 17$, $S = 4$.

      a. Is there a difference at $\alpha = 0.05$?

      b. Is $\mu_X > \mu_Y$ at $\alpha = 0.05$?
    solution: |
      $S_p^2 = \dfrac{9\cdot9 + 11\cdot16}{20} = \dfrac{257}{20} = 12.85$, $\;SE = \sqrt{12.85\left(\tfrac1{10} + \tfrac1{12}\right)} = 1.535$.

      $t = \dfrac{20 - 17}{1.535} = 1.95$ with $df = 20$.

      a. Two-sided: $t_{20}^{0.025} = 2.086$. $1.95 < 2.086$: **do not reject**.

      b. One-sided: $t_{20}^{0.05} = 1.725$. $1.95 > 1.725$: **reject**, $\mu_X > \mu_Y$.

      The same data, different conclusions: the one-sided test puts all of $\alpha$ in one tail.
  - id: "9"
    title: "9 · A proportion test"
    text: |
      220 of 400 people prefer a new design. Test whether the share differs from 50% at $\alpha = 0.05$.
    solution: |
      Conditions: $400\cdot0.5 = 200 > 5$ both ways. $\hat p = 0.55$.

      $Z = \dfrac{0.55 - 0.5}{\sqrt{0.5\cdot0.5/400}} = \dfrac{0.05}{0.025} = 2$.

      Two-sided: $p = 2(1 - \Phi(2)) = 2\cdot0.0228 = 0.0456 < 0.05$. **Reject $H_0$**: the share is significantly above 50%.
  - id: "10"
    title: "10 · Which test is allowed?"
    text: |
      Dana measures 15 normally distributed values and computes their sample SD. She wants to test a claim about the mean. She ___ use a Z test and ___ use a t test.
    options:
      - label: a
        text: |
          can; can
        why: |
          The Z test needs $\sigma$ known; she only has $S$.
      - label: b
        text: |
          can; cannot
        why: |
          The other way round.
      - label: c
        text: |
          cannot; can
        correct: true
        why: |
          $\sigma$ unknown rules out $Z$; a normal population makes the single sample $t$ test valid with $df = 14$.
      - label: d
        text: |
          cannot; cannot
        why: |
          That would need a non-normal population as well (the practice exam's dog walkers).
    solution: |
      $Z$ needs a known $\sigma$; $t$ needs a normal population. She has a sample SD and normal data. **Answer (c).**
  - id: "11"
    title: "11 · Power of a Z test"
    text: |
      $\sigma = 10$, $n = 25$, $H_0: \mu = 50$ against $H_1: \mu \ne 50$, $\alpha = 0.05$. The true mean is 55. Find the power.
    solution: |
      $SE = 10/5 = 2$. Upper critical value: $\bar X_{crit} = 50 + 1.96\cdot2 = 53.92$.

      Standardise with the **true** mean: $Z = \dfrac{53.92 - 55}{2} = -0.54$.

      Power $= 1 - \Phi(-0.54) = 1 - 0.2946 = \mathbf{0.705}$, and $\beta = 0.295$. (The lower critical value, 46.08, is 4.46 SEs below 55 and adds nothing.)
  - id: "12"
    title: "12 · What lowers power?"
    text: |
      Everything else fixed, which change **lowers** the power of a test?
    options:
      - label: a
        text: |
          A larger sample
        why: |
          A larger $n$ shrinks the SE, pulling the two curves apart: more power.
      - label: b
        text: |
          A larger population variance
        correct: true
        why: |
          A larger $\sigma$ widens both curves, so more of the true curve falls in the acceptance region.
      - label: c
        text: |
          A larger $\alpha$
        why: |
          A larger $\alpha$ moves the critical value towards $H_0$: more power (and more Type I errors).
      - label: d
        text: |
          A true mean further from $\mu_0$
        why: |
          A larger effect size means more power.
    solution: |
      Power rises with $n$, $\alpha$ and the effect size, and falls with $\sigma$. **Answer (b).**
  - id: "13"
    title: "13 · An F test"
    text: |
      Sample 1: $n = 21$, $S = 6$. Sample 2: $n = 16$, $S = 4$. Test equal variances at 5%, given $F_{20,15}^{0.05} = 2.33$.
    solution: |
      Larger variance on top: $F = \dfrac{36}{16} = 2.25$ with $df = (20, 15)$.

      $2.25 < 2.33$: **do not reject**. The equal-variance assumption of the pooled $t$ test is not contradicted.
  - id: "14"
    title: "14 · A confidence interval with S"
    text: |
      $n = 16$, $\bar X = 50$, $S = 8$, normal population. Build a 95% interval for $\mu$ ($t_{15}^{0.025} = 2.131$).
    solution: |
      $\sigma$ is unknown, so $t$ with $df = 15$. $SE = 8/4 = 2$.

      $50 \pm 2.131\cdot2 = 50 \pm 4.26$: $\mathbf{45.74 \le \mu \le 54.26}$.
  - id: "15"
    title: "15 · Sample size for a proportion"
    text: |
      How many people are needed for a 95% interval for a proportion whose **total width** is at most 4%, with no prior estimate of $p$?
    solution: |
      Use $p = 0.5$ (it maximises $p(1 - p)$). Width $= 2\cdot1.96\cdot\dfrac{0.5}{\sqrt n} = \dfrac{1.96}{\sqrt n} \le 0.04$.

      $\sqrt n \ge 49$, so $n \ge 2401$: **2401 people** (exactly, here; otherwise round up).
  - id: "16"
    title: "16 · Chi-squared goodness of fit"
    text: |
      A company claims its customers split 50% / 30% / 20% across three plans. Of 200 customers, 90, 70 and 40 are on each plan. Test the claim at 5%.
    solution: |
      Expected: $200\times(0.5, 0.3, 0.2) = 100, 60, 40$, all $\ge 5$.

      $\chi^2 = \dfrac{(90 - 100)^2}{100} + \dfrac{(70 - 60)^2}{60} + \dfrac{(40 - 40)^2}{40} = 1 + 1.67 + 0 = 2.67$.

      $df = 2$, critical value 5.991. $2.67 < 5.991$: **do not reject** the claim.
  - id: "17"
    title: "17 · Chi-squared independence"
    text: |
      | | Yes | No |
      |---|---|---|
      | Group A | 30 | 20 |
      | Group B | 20 | 30 |

      Are group and answer independent at 5%?
    solution: |
      Every row total is 50 and every column total is 50, $N = 100$, so every $E = \tfrac{50\cdot50}{100} = 25$.

      $\chi^2 = 4\cdot\dfrac{(30 - 25)^2}{25} = 4\cdot1 = 4$ (each cell is off by 5).

      $df = (2 - 1)(2 - 1) = 1$, critical 3.841. $4 > 3.841$: **reject independence**.
  - id: "18"
    title: "18 · An interval and two tests"
    text: |
      A 95% confidence interval for $\mu$ is $[12, 18]$. A two-sided test at 5% of $H_0: \mu = 11$ ___, and of $H_0: \mu = 15$ ___.
    options:
      - label: a
        text: |
          does not reject; does not reject
        why: |
          11 lies outside the interval, so it is rejected.
      - label: b
        text: |
          does not reject; rejects
        why: |
          The other way round: 15 is inside, 11 outside.
      - label: c
        text: |
          rejects; rejects
        why: |
          15 is inside the interval, so it is not rejected.
      - label: d
        text: |
          rejects; does not reject
        correct: true
        why: |
          A two-sided 5% test rejects exactly the values outside the 95% interval: 11 is outside, 15 inside.
    solution: |
      Duality: reject $\mu_0$ at 5% (two-sided) exactly when it lies outside the 95% interval. 11 is outside, 15 is inside. **Answer (d).**
---

> Questions in the order of the real paper. Try each one first, then reveal the working. The worked versions are on the [[Cheat Sheet (Lec 1–13)]], and the scripts for each slot on the [[Exam Question Playbook]].
